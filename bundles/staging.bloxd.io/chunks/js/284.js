export const id = 284;
export const ids = [284];
export const modules = {
  40904: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => sR,
      d: () => eR,
      f: () => jR,
      j: () => Nu,
      n: () => tR,
      o: () => Xu,
      s: () => BR
    });
    var Eu = yu(40909),
      Ku = yu(40913),
      Qu = yu(40930);
    class mu {
      constructor(uu, Ru, yu, Eu) {
        this.state = uu, this.pos = Ru, this.explicit = yu, this.view = Eu, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(uu) {
        let Ru = (0, Qu.ob)(this.state).resolveInner(this.pos, -1);
        for (; Ru && uu.indexOf(Ru.name) < 0;) Ru = Ru.parent;
        return Ru ? {
          from: Ru.from,
          to: this.pos,
          text: this.state.sliceDoc(Ru.from, this.pos),
          type: Ru.type
        } : null
      }
      matchBefore(uu) {
        let Ru = this.state.doc.lineAt(this.pos),
          yu = Math.max(Ru.from, this.pos - 250),
          Eu = Ru.text.slice(yu - Ru.from, this.pos - Ru.from),
          Ku = Eu.search(Bu(uu, !1));
        return Ku < 0 ? null : {
          from: yu + Ku,
          to: this.pos,
          text: Eu.slice(Ku)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(uu, Ru, yu) {
        "abort" == uu && this.abortListeners && (this.abortListeners.push(Ru), yu && yu.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function Ju(uu) {
      let Ru = Object.keys(uu).join(""),
        yu = /\w/.test(Ru);
      return yu && (Ru = Ru.replace(/\w/g, "")), `[${yu?"\\w":""}${Ru.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function Nu(uu) {
      let Ru = uu.map((uu => "string" == typeof uu ? {
          label: uu
        } : uu)),
        [yu, Eu] = Ru.every((uu => /^\w+$/.test(uu.label))) ? [/\w*$/, /\w+$/] : function(uu) {
          let Ru = Object.create(null),
            yu = Object.create(null);
          for (let {
              label: Ku
            }
            of uu) {
            Ru[Ku[0]] = !0;
            for (let uu = 1; uu < Ku.length; uu++) yu[Ku[uu]] = !0
          }
          let Eu = Ju(Ru) + Ju(yu) + "*$";
          return [new RegExp("^" + Eu), new RegExp(Eu)]
        }(Ru);
      return uu => {
        let Ku = uu.matchBefore(Eu);
        return Ku || uu.explicit ? {
          from: Ku ? Ku.from : uu.pos,
          options: Ru,
          validFor: yu
        } : null
      }
    }

    function Xu(uu, Ru) {
      return yu => {
        for (let Ru = (0, Qu.ob)(yu.state).resolveInner(yu.pos, -1); Ru; Ru = Ru.parent) {
          if (uu.indexOf(Ru.name) > -1) return null;
          if (Ru.type.isTop) break
        }
        return Ru(yu)
      }
    }
    class Vu {
      constructor(uu, Ru, yu, Eu) {
        this.completion = uu, this.source = Ru, this.match = yu, this.score = Eu
      }
    }

    function ru(uu) {
      return uu.selection.main.from
    }

    function Bu(uu, Ru) {
      var yu;
      let {
        source: Eu
      } = uu, Ku = Ru && "^" != Eu[0], Qu = "$" != Eu[Eu.length - 1];
      return Ku || Qu ? new RegExp(`${Ku?"^":""}(?:${Eu})${Qu?"$":""}`, null !== (yu = uu.flags) && void 0 !== yu ? yu : uu.ignoreCase ? "i" : "") : uu
    }
    const xu = Eu.e.define();

    function Su(uu, Ru, yu, Ku) {
      let {
        main: Qu
      } = uu.selection, mu = yu - Qu.from, Ju = Ku - Qu.from;
      return {
        ...uu.changeByRange((Nu => {
          if (Nu != Qu && yu != Ku && uu.sliceDoc(Nu.from + mu, Nu.from + Ju) != uu.sliceDoc(yu, Ku)) return {
            range: Nu
          };
          let Xu = uu.toText(Ru);
          return {
            changes: {
              from: Nu.from + mu,
              to: Ku == Qu.from ? Nu.to : Nu.from + Ju,
              insert: Xu
            },
            range: Eu.n.cursor(Nu.from + mu + Xu.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const pu = new WeakMap;

    function Tu(uu) {
      if (!Array.isArray(uu)) return uu;
      let Ru = pu.get(uu);
      return Ru || pu.set(uu, Ru = Nu(uu)), Ru
    }
    const Wu = Eu.B.define(),
      ju = Eu.B.define();
    class Hu {
      constructor(uu) {
        this.pattern = uu, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let Ru = 0; Ru < uu.length;) {
          let yu = (0, Eu.K)(uu, Ru),
            Ku = (0, Eu.N)(yu);
          this.chars.push(yu);
          let Qu = uu.slice(Ru, Ru + Ku),
            mu = Qu.toUpperCase();
          this.folded.push((0, Eu.K)(mu == Qu ? Qu.toLowerCase() : mu, 0)), Ru += Ku
        }
        this.astral = uu.length != this.chars.length
      }
      ret(uu, Ru) {
        return this.score = uu, this.matched = Ru, this
      }
      match(uu) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (uu.length < this.pattern.length) return null;
        let {
          chars: Ru,
          folded: yu,
          any: Ku,
          precise: Qu,
          byWord: mu
        } = this;
        if (1 == Ru.length) {
          let Ku = (0, Eu.K)(uu, 0),
            Qu = (0, Eu.N)(Ku),
            mu = Qu == uu.length ? 0 : -100;
          if (Ku == Ru[0]);
          else {
            if (Ku != yu[0]) return null;
            mu += -200
          }
          return this.ret(mu, [0, Qu])
        }
        let Ju = uu.indexOf(this.pattern);
        if (0 == Ju) return this.ret(uu.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let Nu = Ru.length,
          Xu = 0;
        if (Ju < 0) {
          for (let Qu = 0, mu = Math.min(uu.length, 200); Qu < mu && Xu < Nu;) {
            let mu = (0, Eu.K)(uu, Qu);
            mu != Ru[Xu] && mu != yu[Xu] || (Ku[Xu++] = Qu), Qu += (0, Eu.N)(mu)
          }
          if (Xu < Nu) return null
        }
        let Vu = 0,
          ru = 0,
          Bu = !1,
          xu = 0,
          Su = -1,
          pu = -1,
          Tu = /[a-z]/.test(uu),
          Wu = !0;
        for (let ju = 0, Hu = Math.min(uu.length, 200), du = 0; ju < Hu && ru < Nu;) {
          let Ku = (0, Eu.K)(uu, ju);
          Ju < 0 && (Vu < Nu && Ku == Ru[Vu] && (Qu[Vu++] = ju), xu < Nu && (Ku == Ru[xu] || Ku == yu[xu] ? (0 == xu && (Su = ju), pu = ju + 1, xu++) : xu = 0));
          let Xu, Hu = Ku < 255 ? Ku >= 48 && Ku <= 57 || Ku >= 97 && Ku <= 122 ? 2 : Ku >= 65 && Ku <= 90 ? 1 : 0 : (Xu = (0, Eu.X)(Ku)) != Xu.toLowerCase() ? 1 : Xu != Xu.toUpperCase() ? 2 : 0;
          (!ju || 1 == Hu && Tu || 0 == du && 0 != Hu) && (Ru[ru] == Ku || yu[ru] == Ku && (Bu = !0) ? mu[ru++] = ju : mu.length && (Wu = !1)), du = Hu, ju += (0, Eu.N)(Ku)
        }
        return ru == Nu && 0 == mu[0] && Wu ? this.result((Bu ? -200 : 0) - 100, mu, uu) : xu == Nu && 0 == Su ? this.ret(-200 - uu.length + (pu == uu.length ? 0 : -100), [0, pu]) : Ju > -1 ? this.ret(-700 - uu.length, [Ju, Ju + this.pattern.length]) : xu == Nu ? this.ret(-900 - uu.length, [Su, pu]) : ru == Nu ? this.result((Bu ? -200 : 0) - 100 - 700 + (Wu ? 0 : -1100), mu, uu) : 2 == Ru.length ? null : this.result((Ku[0] ? -700 : 0) - 200 - 1100, Ku, uu)
      }
      result(uu, Ru, yu) {
        let Ku = [],
          Qu = 0;
        for (let mu of Ru) {
          let uu = mu + (this.astral ? (0, Eu.N)((0, Eu.K)(yu, mu)) : 1);
          Qu && Ku[Qu - 1] == mu ? Ku[Qu - 1] = uu : (Ku[Qu++] = mu, Ku[Qu++] = uu)
        }
        return this.ret(uu - yu.length, Ku)
      }
    }
    class du {
      constructor(uu) {
        this.pattern = uu, this.matched = [], this.score = 0, this.folded = uu.toLowerCase()
      }
      match(uu) {
        if (uu.length < this.pattern.length) return null;
        let Ru = uu.slice(0, this.pattern.length),
          yu = Ru == this.pattern ? 0 : Ru.toLowerCase() == this.folded ? -200 : null;
        return null == yu ? null : (this.matched = [0, Ru.length], this.score = yu + (uu.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const bu = Eu.q.define({
      combine: uu => (0, Eu.P)(uu, {
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
        positionInfo: ku,
        filterStrict: !1,
        compareCompletions: (uu, Ru) => (uu.sortText || uu.label).localeCompare(Ru.sortText || Ru.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (uu, Ru) => uu && Ru,
        closeOnBlur: (uu, Ru) => uu && Ru,
        icons: (uu, Ru) => uu && Ru,
        tooltipClass: (uu, Ru) => yu => Cu(uu(yu), Ru(yu)),
        optionClass: (uu, Ru) => yu => Cu(uu(yu), Ru(yu)),
        addToOptions: (uu, Ru) => uu.concat(Ru),
        filterStrict: (uu, Ru) => uu || Ru
      })
    });

    function Cu(uu, Ru) {
      return uu ? Ru ? uu + " " + Ru : uu : Ru
    }

    function ku(uu, Ru, yu, Eu, Qu, mu) {
      let Ju, Nu, Xu = uu.textDirection == Ku.e.RTL,
        Vu = Xu,
        ru = !1,
        Bu = "top",
        xu = Ru.left - Qu.left,
        Su = Qu.right - Ru.right,
        pu = Eu.right - Eu.left,
        Tu = Eu.bottom - Eu.top;
      if (Vu && xu < Math.min(pu, Su) ? Vu = !1 : !Vu && Su < Math.min(pu, xu) && (Vu = !0), pu <= (Vu ? xu : Su)) Ju = Math.max(Qu.top, Math.min(yu.top, Qu.bottom - Tu)) - Ru.top, Nu = Math.min(400, Vu ? xu : Su);
      else {
        ru = !0, Nu = Math.min(400, (Xu ? Ru.right : Qu.right - Ru.left) - 30);
        let uu = Qu.bottom - Ru.bottom;
        uu >= Tu || uu > Ru.top ? Ju = yu.bottom - Ru.top : (Bu = "bottom", Ju = Ru.bottom - yu.top)
      }
      return {
        style: `${Bu}: ${Ju/((Ru.bottom-Ru.top)/mu.offsetHeight)}px; max-width: ${Nu/((Ru.right-Ru.left)/mu.offsetWidth)}px`,
        class: "cm-completionInfo-" + (ru ? Xu ? "left-narrow" : "right-narrow" : Vu ? "left" : "right")
      }
    }
    const eu = Eu.B.define();

    function Au(uu, Ru, yu) {
      if (uu <= yu) return {
        from: 0,
        to: uu
      };
      if (Ru < 0 && (Ru = 0), Ru <= uu >> 1) {
        let uu = Math.floor(Ru / yu);
        return {
          from: uu * yu,
          to: (uu + 1) * yu
        }
      }
      let Eu = Math.floor((uu - Ru) / yu);
      return {
        from: uu - (Eu + 1) * yu,
        to: uu - Eu * yu
      }
    }
    class Du {
      constructor(uu, Ru, yu) {
        this.view = uu, this.stateField = Ru, this.applyCompletion = yu, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: uu => this.placeInfo(uu),
          key: this
        }, this.space = null, this.currentClass = "";
        let Eu = uu.state.field(Ru),
          {
            options: Ku,
            selected: Qu
          } = Eu.open,
          mu = uu.state.facet(bu);
        this.optionContent = function(uu) {
          let Ru = uu.addToOptions.slice();
          return uu.icons && Ru.push({
            render(uu) {
              let Ru = document.createElement("div");
              return Ru.classList.add("cm-completionIcon"), uu.type && Ru.classList.add(...uu.type.split(/\s+/g).map((uu => "cm-completionIcon-" + uu))), Ru.setAttribute("aria-hidden", "true"), Ru
            },
            position: 20
          }), Ru.push({
            render(uu, Ru, yu, Eu) {
              let Ku = document.createElement("span");
              Ku.className = "cm-completionLabel";
              let Qu = uu.displayLabel || uu.label,
                mu = 0;
              for (let Ju = 0; Ju < Eu.length;) {
                let uu = Eu[Ju++],
                  Ru = Eu[Ju++];
                uu > mu && Ku.appendChild(document.createTextNode(Qu.slice(mu, uu)));
                let yu = Ku.appendChild(document.createElement("span"));
                yu.appendChild(document.createTextNode(Qu.slice(uu, Ru))), yu.className = "cm-completionMatchedText", mu = Ru
              }
              return mu < Qu.length && Ku.appendChild(document.createTextNode(Qu.slice(mu))), Ku
            },
            position: 50
          }, {
            render(uu) {
              if (!uu.detail) return null;
              let Ru = document.createElement("span");
              return Ru.className = "cm-completionDetail", Ru.textContent = uu.detail, Ru
            },
            position: 80
          }), Ru.sort(((uu, Ru) => uu.position - Ru.position)).map((uu => uu.render))
        }(mu), this.optionClass = mu.optionClass, this.tooltipClass = mu.tooltipClass, this.range = Au(Ku.length, Qu, mu.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(uu.state), this.dom.addEventListener("mousedown", (yu => {
          let {
            options: Eu
          } = uu.state.field(Ru).open;
          for (let Ru, Ku = yu.target; Ku && Ku != this.dom; Ku = Ku.parentNode)
            if ("LI" == Ku.nodeName && (Ru = /-(\d+)$/.exec(Ku.id)) && +Ru[1] < Eu.length) return this.applyCompletion(uu, Eu[+Ru[1]]), void yu.preventDefault();
          if (yu.target == this.list) {
            let Ru = this.list.classList.contains("cm-completionListIncompleteTop") && yu.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && yu.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != Ru && (uu.dispatch({
              effects: eu.of(Ru)
            }), yu.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (Ru => {
          let yu = uu.state.field(this.stateField, !1);
          yu && yu.tooltip && uu.state.facet(bu).closeOnBlur && Ru.relatedTarget != uu.contentDOM && uu.dispatch({
            effects: ju.of(null)
          })
        })), this.showOptions(Ku, Eu.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(uu, Ru) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(uu, Ru, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(uu) {
        var Ru;
        let yu = uu.state.field(this.stateField),
          Eu = uu.startState.field(this.stateField);
        if (this.updateTooltipClass(uu.state), yu != Eu) {
          let {
            options: Ku,
            selected: Qu,
            disabled: mu
          } = yu.open;
          Eu.open && Eu.open.options == Ku || (this.range = Au(Ku.length, Qu, uu.state.facet(bu).maxRenderedOptions), this.showOptions(Ku, yu.id)), this.updateSel(), mu != (null === (Ru = Eu.open) || void 0 === Ru ? void 0 : Ru.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!mu)
        }
      }
      updateTooltipClass(uu) {
        let Ru = this.tooltipClass(uu);
        if (Ru != this.currentClass) {
          for (let uu of this.currentClass.split(" ")) uu && this.dom.classList.remove(uu);
          for (let uu of Ru.split(" ")) uu && this.dom.classList.add(uu);
          this.currentClass = Ru
        }
      }
      positioned(uu) {
        this.space = uu, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let uu = this.view.state.field(this.stateField),
          Ru = uu.open;
        (Ru.selected > -1 && Ru.selected < this.range.from || Ru.selected >= this.range.to) && (this.range = Au(Ru.options.length, Ru.selected, this.view.state.facet(bu).maxRenderedOptions), this.showOptions(Ru.options, uu.id));
        let yu = this.updateSelectedOption(Ru.selected);
        if (yu) {
          this.destroyInfo();
          let {
            completion: Eu
          } = Ru.options[Ru.selected], {
            info: Qu
          } = Eu;
          if (!Qu) return;
          let mu = "string" === typeof Qu ? document.createTextNode(Qu) : Qu(Eu);
          if (!mu) return;
          "then" in mu ? mu.then((Ru => {
            Ru && this.view.state.field(this.stateField, !1) == uu && this.addInfoPane(Ru, Eu)
          })).catch((uu => (0, Ku.X)(this.view.state, uu, "completion info"))) : (this.addInfoPane(mu, Eu), yu.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(uu, Ru) {
        this.destroyInfo();
        let yu = this.info = document.createElement("div");
        if (yu.className = "cm-tooltip cm-completionInfo", yu.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != uu.nodeType) yu.appendChild(uu), this.infoDestroy = null;
        else {
          let {
            dom: Ru,
            destroy: Eu
          } = uu;
          yu.appendChild(Ru), this.infoDestroy = Eu || null
        }
        this.dom.appendChild(yu), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(uu) {
        let Ru = null;
        for (let yu = this.list.firstChild, Eu = this.range.from; yu; yu = yu.nextSibling, Eu++) "LI" == yu.nodeName && yu.id ? Eu == uu ? yu.hasAttribute("aria-selected") || (yu.setAttribute("aria-selected", "true"), Ru = yu) : yu.hasAttribute("aria-selected") && (yu.removeAttribute("aria-selected"), yu.removeAttribute("aria-describedby")) : Eu--;
        return Ru && function(uu, Ru) {
          let yu = uu.getBoundingClientRect(),
            Eu = Ru.getBoundingClientRect(),
            Ku = yu.height / uu.offsetHeight;
          Eu.top < yu.top ? uu.scrollTop -= (yu.top - Eu.top) / Ku : Eu.bottom > yu.bottom && (uu.scrollTop += (Eu.bottom - yu.bottom) / Ku)
        }(this.list, Ru), Ru
      }
      measureInfo() {
        let uu = this.dom.querySelector("[aria-selected]");
        if (!uu || !this.info) return null;
        let Ru = this.dom.getBoundingClientRect(),
          yu = this.info.getBoundingClientRect(),
          Eu = uu.getBoundingClientRect(),
          Ku = this.space;
        if (!Ku) {
          let uu = this.dom.ownerDocument.documentElement;
          Ku = {
            left: 0,
            top: 0,
            right: uu.clientWidth,
            bottom: uu.clientHeight
          }
        }
        return Eu.top > Math.min(Ku.bottom, Ru.bottom) - 10 || Eu.bottom < Math.max(Ku.top, Ru.top) + 10 ? null : this.view.state.facet(bu).positionInfo(this.view, Ru, Eu, yu, Ku, this.dom)
      }
      placeInfo(uu) {
        this.info && (uu ? (uu.style && (this.info.style.cssText = uu.style), this.info.className = "cm-tooltip cm-completionInfo " + (uu.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(uu, Ru, yu) {
        const Eu = document.createElement("ul");
        Eu.id = Ru, Eu.setAttribute("role", "listbox"), Eu.setAttribute("aria-expanded", "true"), Eu.setAttribute("aria-label", this.view.state.phrase("Completions")), Eu.addEventListener("mousedown", (uu => {
          uu.target == Eu && uu.preventDefault()
        }));
        let Ku = null;
        for (let Qu = yu.from; Qu < yu.to; Qu++) {
          let {
            completion: mu,
            match: Ju
          } = uu[Qu], {
            section: Nu
          } = mu;
          if (Nu) {
            let uu = "string" == typeof Nu ? Nu : Nu.name;
            if (uu != Ku && (Qu > yu.from || 0 == yu.from))
              if (Ku = uu, "string" != typeof Nu && Nu.header) Eu.appendChild(Nu.header(Nu));
              else {
                Eu.appendChild(document.createElement("completion-section")).textContent = uu
              }
          }
          const Xu = Eu.appendChild(document.createElement("li"));
          Xu.id = Ru + "-" + Qu, Xu.setAttribute("role", "option");
          let Vu = this.optionClass(mu);
          Vu && (Xu.className = Vu);
          for (let uu of this.optionContent) {
            let Ru = uu(mu, this.view.state, this.view, Ju);
            Ru && Xu.appendChild(Ru)
          }
        }
        return yu.from && Eu.classList.add("cm-completionListIncompleteTop"), yu.to < uu.length && Eu.classList.add("cm-completionListIncompleteBottom"), Eu
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Mu(uu, Ru) {
      return yu => new Du(yu, uu, Ru)
    }

    function Iu(uu) {
      return 100 * (uu.boost || 0) + (uu.apply ? 10 : 0) + (uu.info ? 5 : 0) + (uu.type ? 1 : 0)
    }
    class Gu {
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        this.options = uu, this.attrs = Ru, this.tooltip = yu, this.timestamp = Eu, this.selected = Ku, this.disabled = Qu
      }
      setSelected(uu, Ru) {
        return uu == this.selected || uu >= this.options.length ? this : new Gu(this.options, tu(Ru, uu), this.tooltip, this.timestamp, uu, this.disabled)
      }
      static build(uu, Ru, yu, Eu, Ku, Qu) {
        if (Eu && !Qu && uu.some((uu => uu.isPending))) return Eu.setDisabled();
        let mu = function(uu, Ru) {
          let yu = [],
            Eu = null,
            Ku = null,
            Qu = uu => {
              yu.push(uu);
              let {
                section: Ru
              } = uu.completion;
              if (Ru) {
                Eu || (Eu = []);
                let uu = "string" == typeof Ru ? Ru : Ru.name;
                Eu.some((Ru => Ru.name == uu)) || Eu.push("string" == typeof Ru ? {
                  name: uu
                } : Ru)
              }
            },
            mu = Ru.facet(bu);
          for (let ru of uu)
            if (ru.hasResult()) {
              let uu = ru.result.getMatch;
              if (!1 === ru.result.filter)
                for (let Ru of ru.result.options) Qu(new Vu(Ru, ru.source, uu ? uu(Ru) : [], 1e9 - yu.length));
              else {
                let yu, Eu = Ru.sliceDoc(ru.from, ru.to),
                  Ju = mu.filterStrict ? new du(Eu) : new Hu(Eu);
                for (let Ru of ru.result.options)
                  if (yu = Ju.match(Ru.label)) {
                    let Eu = Ru.displayLabel ? uu ? uu(Ru, yu.matched) : [] : yu.matched,
                      mu = yu.score + (Ru.boost || 0);
                    if (Qu(new Vu(Ru, ru.source, Eu, mu)), "object" == typeof Ru.section && "dynamic" === Ru.section.rank) {
                      let {
                        name: uu
                      } = Ru.section;
                      Ku || (Ku = Object.create(null)), Ku[uu] = Math.max(mu, Ku[uu] || -1e9)
                    }
                  }
              }
            } if (Eu) {
            let uu = Object.create(null),
              Ru = 0,
              Qu = (uu, Ru) => ("dynamic" === uu.rank && "dynamic" === Ru.rank ? Ku[Ru.name] - Ku[uu.name] : 0) || ("number" == typeof uu.rank ? uu.rank : 1e9) - ("number" == typeof Ru.rank ? Ru.rank : 1e9) || (uu.name < Ru.name ? -1 : 1);
            for (let yu of Eu.sort(Qu)) Ru -= 1e5, uu[yu.name] = Ru;
            for (let Eu of yu) {
              let {
                section: Ru
              } = Eu.completion;
              Ru && (Eu.score += uu["string" == typeof Ru ? Ru : Ru.name])
            }
          }
          let Ju = [],
            Nu = null,
            Xu = mu.compareCompletions;
          for (let Vu of yu.sort(((uu, Ru) => Ru.score - uu.score || Xu(uu.completion, Ru.completion)))) {
            let uu = Vu.completion;
            !Nu || Nu.label != uu.label || Nu.detail != uu.detail || null != Nu.type && null != uu.type && Nu.type != uu.type || Nu.apply != uu.apply || Nu.boost != uu.boost ? Ju.push(Vu) : Iu(Vu.completion) > Iu(Nu) && (Ju[Ju.length - 1] = Vu), Nu = Vu.completion
          }
          return Ju
        }(uu, Ru);
        if (!mu.length) return Eu && uu.some((uu => uu.isPending)) ? Eu.setDisabled() : null;
        let Ju = Ru.facet(bu).selectOnOpen ? 0 : -1;
        if (Eu && Eu.selected != Ju && -1 != Eu.selected) {
          let uu = Eu.options[Eu.selected].completion;
          for (let Ru = 0; Ru < mu.length; Ru++)
            if (mu[Ru].completion == uu) {
              Ju = Ru;
              break
            }
        }
        return new Gu(mu, tu(yu, Ju), {
          pos: uu.reduce(((uu, Ru) => Ru.hasResult() ? Math.min(uu, Ru.from) : uu), 1e8),
          create: Zu,
          above: Ku.aboveCursor
        }, Eu ? Eu.timestamp : Date.now(), Ju, !1)
      }
      map(uu) {
        return new Gu(this.options, this.attrs, {
          ...this.tooltip,
          pos: uu.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new Gu(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Uu {
      constructor(uu, Ru, yu) {
        this.active = uu, this.id = Ru, this.open = yu
      }
      static start() {
        return new Uu(lu, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(uu) {
        let {
          state: Ru
        } = uu, yu = Ru.facet(bu), Eu = (yu.override || Ru.languageDataAt("autocomplete", ru(Ru)).map(Tu)).map((Ru => (this.active.find((uu => uu.source == Ru)) || new cu(Ru, this.active.some((uu => 0 != uu.state)) ? 1 : 0)).update(uu, yu)));
        Eu.length == this.active.length && Eu.every(((uu, Ru) => uu == this.active[Ru])) && (Eu = this.active);
        let Ku = this.open,
          Qu = uu.effects.some((uu => uu.is(zu)));
        Ku && uu.docChanged && (Ku = Ku.map(uu.changes)), uu.selection || Eu.some((Ru => Ru.hasResult() && uu.changes.touchesRange(Ru.from, Ru.to))) || ! function(uu, Ru) {
          if (uu == Ru) return !0;
          for (let yu = 0, Eu = 0;;) {
            for (; yu < uu.length && !uu[yu].hasResult();) yu++;
            for (; Eu < Ru.length && !Ru[Eu].hasResult();) Eu++;
            let Ku = yu == uu.length,
              Qu = Eu == Ru.length;
            if (Ku || Qu) return Ku == Qu;
            if (uu[yu++].result != Ru[Eu++].result) return !1
          }
        }(Eu, this.active) || Qu ? Ku = Gu.build(Eu, Ru, this.id, Ku, yu, Qu) : Ku && Ku.disabled && !Eu.some((uu => uu.isPending)) && (Ku = null), !Ku && Eu.every((uu => !uu.isPending)) && Eu.some((uu => uu.hasResult())) && (Eu = Eu.map((uu => uu.hasResult() ? new cu(uu.source, 0) : uu)));
        for (let mu of uu.effects) mu.is(eu) && (Ku = Ku && Ku.setSelected(mu.value, this.id));
        return Eu == this.active && Ku == this.open ? this : new Uu(Eu, this.id, Ku)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? nu : su
      }
    }
    const nu = {
        "aria-autocomplete": "list"
      },
      su = {};

    function tu(uu, Ru) {
      let yu = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": uu
      };
      return Ru > -1 && (yu["aria-activedescendant"] = uu + "-" + Ru), yu
    }
    const lu = [];

    function gu(uu, Ru) {
      if (uu.isUserEvent("input.complete")) {
        let yu = uu.annotation(xu);
        if (yu && Ru.activateOnCompletion(yu)) return 12
      }
      let yu = uu.isUserEvent("input.type");
      return yu && Ru.activateOnTyping ? 5 : yu ? 1 : uu.isUserEvent("delete.backward") ? 2 : uu.selection ? 8 : uu.docChanged ? 16 : 0
    }
    class cu {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = uu, this.state = Ru, this.explicit = yu
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(uu, Ru) {
        let yu = gu(uu, Ru),
          Eu = this;
        (8 & yu || 16 & yu && this.touches(uu)) && (Eu = new cu(Eu.source, 0)), 4 & yu && 0 == Eu.state && (Eu = new cu(this.source, 1)), Eu = Eu.updateFor(uu, yu);
        for (let Ku of uu.effects)
          if (Ku.is(Wu)) Eu = new cu(Eu.source, 1, Ku.value);
          else if (Ku.is(ju)) Eu = new cu(Eu.source, 0);
        else if (Ku.is(zu))
          for (let uu of Ku.value) uu.source == Eu.source && (Eu = uu);
        return Eu
      }
      updateFor(uu, Ru) {
        return this.map(uu.changes)
      }
      map(uu) {
        return this
      }
      touches(uu) {
        return uu.changes.touchesRange(ru(uu.state))
      }
    }
    class Lu extends cu {
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        super(uu, 3, Ru), this.limit = yu, this.result = Eu, this.from = Ku, this.to = Qu
      }
      hasResult() {
        return !0
      }
      updateFor(uu, Ru) {
        var yu;
        if (!(3 & Ru)) return this.map(uu.changes);
        let Eu = this.result;
        Eu.map && !uu.changes.empty && (Eu = Eu.map(Eu, uu.changes));
        let Ku = uu.changes.mapPos(this.from),
          Qu = uu.changes.mapPos(this.to, 1),
          Ju = ru(uu.state);
        if (Ju > Qu || !Eu || 2 & Ru && (ru(uu.startState) == this.from || Ju < this.limit)) return new cu(this.source, 4 & Ru ? 1 : 0);
        let Nu = uu.changes.mapPos(this.limit);
        return function(uu, Ru, yu, Eu) {
          if (!uu) return !1;
          let Ku = Ru.sliceDoc(yu, Eu);
          return "function" == typeof uu ? uu(Ku, yu, Eu, Ru) : Bu(uu, !0).test(Ku)
        }(Eu.validFor, uu.state, Ku, Qu) ? new Lu(this.source, this.explicit, Nu, Eu, Ku, Qu) : Eu.update && (Eu = Eu.update(Eu, Ku, Qu, new mu(uu.state, Ju, !1))) ? new Lu(this.source, this.explicit, Nu, Eu, Eu.from, null !== (yu = Eu.to) && void 0 !== yu ? yu : ru(uu.state)) : new cu(this.source, 1, this.explicit)
      }
      map(uu) {
        if (uu.empty) return this;
        return (this.result.map ? this.result.map(this.result, uu) : this.result) ? new Lu(this.source, this.explicit, uu.mapPos(this.limit), this.result, uu.mapPos(this.from), uu.mapPos(this.to, 1)) : new cu(this.source, 0)
      }
      touches(uu) {
        return uu.changes.touchesRange(this.from, this.to)
      }
    }
    const zu = Eu.B.define({
        map: (uu, Ru) => uu.map((uu => uu.map(Ru)))
      }),
      Fu = Eu.E.define({
        create: () => Uu.start(),
        update: (uu, Ru) => uu.update(Ru),
        provide: uu => [Ku.lb.from(uu, (uu => uu.tooltip)), Ku.f.contentAttributes.from(uu, (uu => uu.attrs))]
      });

    function wu(uu, Ru) {
      const yu = Ru.completion.apply || Ru.completion.label;
      let Eu = uu.state.field(Fu).active.find((uu => uu.source == Ru.source));
      return Eu instanceof Lu && ("string" == typeof yu ? uu.dispatch({
        ...Su(uu.state, yu, Eu.from, Eu.to),
        annotations: xu.of(Ru.completion)
      }) : yu(uu, Ru.completion, Eu.from, Eu.to), !0)
    }
    const Zu = Mu(Fu, wu);

    function hu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return yu => {
        let Eu = yu.state.field(Fu, !1);
        if (!Eu || !Eu.open || Eu.open.disabled || Date.now() - Eu.open.timestamp < yu.state.facet(bu).interactionDelay) return !1;
        let Qu, mu = 1;
        "page" == Ru && (Qu = (0, Ku.C)(yu, Eu.open.tooltip)) && (mu = Math.max(2, Math.floor(Qu.dom.offsetHeight / Qu.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: Ju
        } = Eu.open.options, Nu = Eu.open.selected > -1 ? Eu.open.selected + mu * (uu ? 1 : -1) : uu ? 0 : Ju - 1;
        return Nu < 0 ? Nu = "page" == Ru ? 0 : Ju - 1 : Nu >= Ju && (Nu = "page" == Ru ? Ju - 1 : 0), yu.dispatch({
          effects: eu.of(Nu)
        }), !0
      }
    }
    const Pu = uu => !!uu.state.field(Fu, !1) && (uu.dispatch({
      effects: Wu.of(!0)
    }), !0);
    class iu {
      constructor(uu, Ru) {
        this.active = uu, this.context = Ru, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const Yu = Ku.k.fromClass(class {
        constructor(uu) {
          this.view = uu, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let Ru of uu.state.field(Fu).active) Ru.isPending && this.startQuery(Ru)
        }
        update(uu) {
          let Ru = uu.state.field(Fu),
            yu = uu.state.facet(bu);
          if (!uu.selectionSet && !uu.docChanged && uu.startState.field(Fu) == Ru) return;
          let Eu = uu.transactions.some((uu => {
            let Ru = gu(uu, yu);
            return 8 & Ru || (uu.selection || uu.docChanged) && !(3 & Ru)
          }));
          for (let Ju = 0; Ju < this.running.length; Ju++) {
            let Ru = this.running[Ju];
            if (Eu || Ru.context.abortOnDocChange && uu.docChanged || Ru.updates.length + uu.transactions.length > 50 && Date.now() - Ru.time > 1e3) {
              for (let uu of Ru.context.abortListeners) try {
                uu()
              } catch (mu) {
                (0, Ku.X)(this.view.state, mu)
              }
              Ru.context.abortListeners = null, this.running.splice(Ju--, 1)
            } else Ru.updates.push(...uu.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), uu.transactions.some((uu => uu.effects.some((uu => uu.is(Wu))))) && (this.pendingStart = !0);
          let Qu = this.pendingStart ? 50 : yu.activateOnTypingDelay;
          if (this.debounceUpdate = Ru.active.some((uu => uu.isPending && !this.running.some((Ru => Ru.active.source == uu.source)))) ? setTimeout((() => this.startUpdate()), Qu) : -1, 0 != this.composing)
            for (let Ku of uu.transactions) Ku.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Ku.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: uu
          } = this.view, Ru = uu.field(Fu);
          for (let yu of Ru.active) yu.isPending && !this.running.some((uu => uu.active.source == yu.source)) && this.startQuery(yu);
          this.running.length && Ru.open && Ru.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(bu).updateSyncTime))
        }
        startQuery(uu) {
          let {
            state: Ru
          } = this.view, yu = ru(Ru), Eu = new mu(Ru, yu, uu.explicit, this.view), Qu = new iu(uu, Eu);
          this.running.push(Qu), Promise.resolve(uu.source(Eu)).then((uu => {
            Qu.context.aborted || (Qu.done = uu || null, this.scheduleAccept())
          }), (uu => {
            this.view.dispatch({
              effects: ju.of(null)
            }), (0, Ku.X)(this.view.state, uu)
          }))
        }
        scheduleAccept() {
          this.running.every((uu => void 0 !== uu.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(bu).updateSyncTime))
        }
        accept() {
          var uu;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let Ru = [],
            yu = this.view.state.facet(bu),
            Eu = this.view.state.field(Fu);
          for (let Ku = 0; Ku < this.running.length; Ku++) {
            let Qu = this.running[Ku];
            if (void 0 === Qu.done) continue;
            if (this.running.splice(Ku--, 1), Qu.done) {
              let Eu = ru(Qu.updates.length ? Qu.updates[0].startState : this.view.state),
                Ku = Math.min(Eu, Qu.done.from + (Qu.active.explicit ? 0 : 1)),
                mu = new Lu(Qu.active.source, Qu.active.explicit, Ku, Qu.done, Qu.done.from, null !== (uu = Qu.done.to) && void 0 !== uu ? uu : Eu);
              for (let uu of Qu.updates) mu = mu.update(uu, yu);
              if (mu.hasResult()) {
                Ru.push(mu);
                continue
              }
            }
            let mu = Eu.active.find((uu => uu.source == Qu.active.source));
            if (mu && mu.isPending)
              if (null == Qu.done) {
                let uu = new cu(Qu.active.source, 0);
                for (let Ru of Qu.updates) uu = uu.update(Ru, yu);
                uu.isPending || Ru.push(uu)
              } else this.startQuery(mu)
          }(Ru.length || Eu.open && Eu.open.disabled) && this.view.dispatch({
            effects: zu.of(Ru)
          })
        }
      }, {
        eventHandlers: {
          blur(uu) {
            let Ru = this.view.state.field(Fu, !1);
            if (Ru && Ru.tooltip && this.view.state.facet(bu).closeOnBlur) {
              let yu = Ru.open && (0, Ku.C)(this.view, Ru.open.tooltip);
              yu && yu.dom.contains(uu.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: ju.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: Wu.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      ou = "object" == typeof navigator && /Win/.test(navigator.platform),
      qu = Eu.t.highest(Ku.f.domEventHandlers({
        keydown(uu, Ru) {
          let yu = Ru.state.field(Fu, !1);
          if (!yu || !yu.open || yu.open.disabled || yu.open.selected < 0 || uu.key.length > 1 || uu.ctrlKey && (!ou || !uu.altKey) || uu.metaKey) return !1;
          let Eu = yu.open.options[yu.open.selected],
            Ku = yu.active.find((uu => uu.source == Eu.source)),
            Qu = Eu.completion.commitCharacters || Ku.result.commitCharacters;
          return Qu && Qu.indexOf(uu.key) > -1 && wu(Ru, Eu), !1
        }
      })),
      Ou = Ku.f.baseTheme({
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
    class vu {
      constructor(uu, Ru, yu, Eu) {
        this.field = uu, this.line = Ru, this.from = yu, this.to = Eu
      }
    }
    class au {
      constructor(uu, Ru, yu) {
        this.field = uu, this.from = Ru, this.to = yu
      }
      map(uu) {
        let Ru = uu.mapPos(this.from, -1, Eu.s.TrackDel),
          yu = uu.mapPos(this.to, 1, Eu.s.TrackDel);
        return null == Ru || null == yu ? null : new au(this.field, Ru, yu)
      }
    }
    class fu {
      constructor(uu, Ru) {
        this.lines = uu, this.fieldPositions = Ru
      }
      instantiate(uu, Ru) {
        let yu = [],
          Eu = [Ru],
          Ku = uu.doc.lineAt(Ru),
          mu = /^\s*/.exec(Ku.text)[0];
        for (let Nu of this.lines) {
          if (yu.length) {
            let yu = mu,
              Ku = /^\t*/.exec(Nu)[0].length;
            for (let Ru = 0; Ru < Ku; Ru++) yu += uu.facet(Qu._);
            Eu.push(Ru + yu.length - Ku), Nu = yu + Nu.slice(Ku)
          }
          yu.push(Nu), Ru += Nu.length + 1
        }
        let Ju = this.fieldPositions.map((uu => new au(uu.field, Eu[uu.line] + uu.from, Eu[uu.line] + uu.to)));
        return {
          text: yu,
          yT: Ju
        }
      }
      static parse(uu) {
        let Ru, yu = [],
          Eu = [],
          Ku = [];
        for (let Qu of uu.split(/\r\n?|\n/)) {
          for (; Ru = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Qu);) {
            let uu = Ru[1] ? +Ru[1] : null,
              mu = Ru[2] || Ru[3] || "",
              Ju = -1,
              Nu = mu.replace(/\\[{}]/g, (uu => uu[1]));
            for (let Ru = 0; Ru < yu.length; Ru++)(null != uu ? yu[Ru].seq == uu : Nu && yu[Ru].name == Nu) && (Ju = Ru);
            if (Ju < 0) {
              let Ru = 0;
              for (; Ru < yu.length && (null == uu || null != yu[Ru].seq && yu[Ru].seq < uu);) Ru++;
              yu.splice(Ru, 0, {
                seq: uu,
                name: Nu
              }), Ju = Ru;
              for (let uu of Ku) uu.field >= Ju && uu.field++
            }
            for (let yu of Ku)
              if (yu.line == Eu.length && yu.from > Ru.index) {
                let uu = Ru[2] ? 3 + (Ru[1] || "").length : 2;
                yu.from -= uu, yu.to -= uu
              } Ku.push(new vu(Ju, Eu.length, Ru.index, Ru.index + Nu.length)), Qu = Qu.slice(0, Ru.index) + mu + Qu.slice(Ru.index + Ru[0].length)
          }
          Qu = Qu.replace(/\\([{}])/g, ((uu, Ru, yu) => {
            for (let Qu of Ku) Qu.line == Eu.length && Qu.from > yu && (Qu.from--, Qu.to--);
            return Ru
          })), Eu.push(Qu)
        }
        return new fu(Eu, Ku)
      }
    }
    let uR = Ku.c.widget({
        widget: new class extends Ku.n {
          toDOM() {
            let uu = document.createElement("span");
            return uu.className = "cm-snippetFieldPosition", uu
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      RR = Ku.c.mark({
        class: "cm-snippetField"
      });
    class yR {
      constructor(uu, Ru) {
        this.yT = uu, this.active = Ru, this.deco = Ku.c.set(uu.map((uu => (uu.from == uu.to ? uR : RR).range(uu.from, uu.to))), !0)
      }
      map(uu) {
        let Ru = [];
        for (let yu of this.yT) {
          let Eu = yu.map(uu);
          if (!Eu) return null;
          Ru.push(Eu)
        }
        return new yR(Ru, this.active)
      }
      selectionInsideField(uu) {
        return uu.yT.every((uu => this.yT.some((Ru => Ru.field == this.active && Ru.from <= uu.from && Ru.to >= uu.to))))
      }
    }
    const ER = Eu.B.define({
        map: (uu, Ru) => uu && uu.map(Ru)
      }),
      KR = Eu.B.define(),
      QR = Eu.E.define({
        create: () => null,
        update(uu, Ru) {
          for (let yu of Ru.effects) {
            if (yu.is(ER)) return yu.value;
            if (yu.is(KR) && uu) return new yR(uu.yT, yu.value)
          }
          return uu && Ru.docChanged && (uu = uu.map(Ru.changes)), uu && Ru.selection && !uu.selectionInsideField(Ru.selection) && (uu = null), uu
        },
        provide: uu => Ku.f.lE.from(uu, (uu => uu ? uu.deco : Ku.c.none))
      });

    function mR(uu, Ru) {
      return Eu.n.create(uu.filter((uu => uu.field == Ru)).map((uu => Eu.n.range(uu.from, uu.to))))
    }

    function JR(uu) {
      let Ru = fu.parse(uu);
      return (uu, yu, Ku, Qu) => {
        let {
          text: mu,
          yT: Ju
        } = Ru.instantiate(uu.state, Ku), {
          main: Nu
        } = uu.state.selection, Xu = {
          changes: {
            from: Ku,
            to: Qu == Nu.from ? Nu.to : Qu,
            insert: Eu.F.of(mu)
          },
          scrollIntoView: !0,
          annotations: yu ? [xu.of(yu), Eu.J.userEvent.of("input.complete")] : void 0
        };
        if (Ju.length && (Xu.selection = mR(Ju, 0)), Ju.some((uu => uu.field > 0))) {
          let Ru = new yR(Ju, 0),
            yu = Xu.effects = [ER.of(Ru)];
          void 0 === uu.state.field(QR, !1) && yu.push(Eu.B.appendConfig.of([QR, rR, xR, Ou]))
        }
        uu.dispatch(uu.state.update(Xu))
      }
    }

    function NR(uu) {
      return Ru => {
        let {
          state: yu,
          dispatch: Eu
        } = Ru, Ku = yu.field(QR, !1);
        if (!Ku || uu < 0 && 0 == Ku.active) return !1;
        let Qu = Ku.active + uu,
          mu = uu > 0 && !Ku.yT.some((Ru => Ru.field == Qu + uu));
        return Eu(yu.update({
          selection: mR(Ku.yT, Qu),
          effects: ER.of(mu ? null : new yR(Ku.yT, Qu)),
          scrollIntoView: !0
        })), !0
      }
    }
    const XR = [{
        key: "Tab",
        run: NR(1),
        shift: NR(-1)
      }, {
        key: "Escape",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu;
          return !!Ru.field(QR, !1) && (yu(Ru.update({
            effects: ER.of(null)
          })), !0)
        }
      }],
      VR = Eu.q.define({
        combine: uu => uu.length ? uu[0] : XR
      }),
      rR = Eu.t.highest(Ku.S.compute([VR], (uu => uu.facet(VR))));

    function BR(uu, Ru) {
      return {
        ...Ru,
        apply: JR(uu)
      }
    }
    const xR = Ku.f.domEventHandlers({
      mousedown(uu, Ru) {
        let yu, Eu = Ru.state.field(QR, !1);
        if (!Eu || null == (yu = Ru.posAtCoords({
            x: uu.clientX,
            y: uu.clientY
          }))) return !1;
        let Ku = Eu.yT.find((uu => uu.from <= yu && uu.to >= yu));
        return !(!Ku || Ku.field == Eu.active) && (Ru.dispatch({
          selection: mR(Eu.yT, Ku.field),
          effects: ER.of(Eu.yT.some((uu => uu.field > Ku.field)) ? new yR(Eu.yT, Ku.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const SR = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      pR = Eu.B.define({
        map(uu, Ru) {
          let yu = Ru.mapPos(uu, -1, Eu.s.TrackAfter);
          return null == yu ? void 0 : yu
        }
      }),
      TR = new class extends Eu.A {};
    TR.startSide = 1, TR.endSide = -1;
    const WR = Eu.E.define({
      create: () => Eu.x.empty,
      update(uu, Ru) {
        if (uu = uu.map(Ru.changes), Ru.selection) {
          let yu = Ru.state.doc.lineAt(Ru.selection.main.head);
          uu = uu.update({
            filter: uu => uu >= yu.from && uu <= yu.to
          })
        }
        for (let yu of Ru.effects) yu.is(pR) && (uu = uu.update({
          add: [TR.range(yu.value, yu.value + 1)]
        }));
        return uu
      }
    });

    function jR() {
      return [kR, WR]
    }
    const HR = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function dR(uu) {
      for (let Ru = 0; Ru < 16; Ru += 2)
        if (HR.charCodeAt(Ru) == uu) return HR.charAt(Ru + 1);
      return (0, Eu.X)(uu < 128 ? uu : uu + 1)
    }

    function bR(uu, Ru) {
      return uu.languageDataAt("closeBrackets", Ru)[0] || SR
    }
    const CR = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      kR = Ku.f.inputHandler.of(((uu, Ru, yu, Ku) => {
        if ((CR ? uu.composing : uu.compositionStarted) || uu.state.readOnly) return !1;
        let Qu = uu.state.selection.main;
        if (Ku.length > 2 || 2 == Ku.length && 1 == (0, Eu.N)((0, Eu.K)(Ku, 0)) || Ru != Qu.from || yu != Qu.to) return !1;
        let mu = function(uu, Ru) {
          let yu = bR(uu, uu.selection.main.head),
            Ku = yu.brackets || SR.brackets;
          for (let Qu of Ku) {
            let mu = dR((0, Eu.K)(Qu, 0));
            if (Ru == Qu) return mu == Qu ? GR(uu, Qu, Ku.indexOf(Qu + Qu + Qu) > -1, yu) : MR(uu, Qu, mu, yu.before || SR.before);
            if (Ru == mu && AR(uu, uu.selection.main.from)) return IR(uu, Qu, mu)
          }
          return null
        }(uu.state, Ku);
        return !!mu && (uu.dispatch(mu), !0)
      })),
      eR = [{
        key: "Backspace",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu;
          if (Ru.readOnly) return !1;
          let Ku = bR(Ru, Ru.selection.main.head).brackets || SR.brackets,
            Qu = null,
            mu = Ru.changeByRange((uu => {
              if (uu.empty) {
                let yu = function(uu, Ru) {
                  let yu = uu.sliceString(Ru - 2, Ru);
                  return (0, Eu.N)((0, Eu.K)(yu, 0)) == yu.length ? yu : yu.slice(1)
                }(Ru.doc, uu.head);
                for (let Qu of Ku)
                  if (Qu == yu && DR(Ru.doc, uu.head) == dR((0, Eu.K)(Qu, 0))) return {
                    changes: {
                      from: uu.head - Qu.length,
                      to: uu.head + Qu.length
                    },
                    range: Eu.n.cursor(uu.head - Qu.length)
                  }
              }
              return {
                range: Qu = uu
              }
            }));
          return Qu || yu(Ru.update(mu, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !Qu
        }
      }];

    function AR(uu, Ru) {
      let yu = !1;
      return uu.field(WR).between(0, uu.doc.length, (uu => {
        uu == Ru && (yu = !0)
      })), yu
    }

    function DR(uu, Ru) {
      let yu = uu.sliceString(Ru, Ru + 2);
      return yu.slice(0, (0, Eu.N)((0, Eu.K)(yu, 0)))
    }

    function MR(uu, Ru, yu, Ku) {
      let Qu = null,
        mu = uu.changeByRange((mu => {
          if (!mu.empty) return {
            changes: [{
              insert: Ru,
              from: mu.from
            }, {
              insert: yu,
              from: mu.to
            }],
            effects: pR.of(mu.to + Ru.length),
            range: Eu.n.range(mu.anchor + Ru.length, mu.head + Ru.length)
          };
          let Ju = DR(uu.doc, mu.head);
          return !Ju || /\s/.test(Ju) || Ku.indexOf(Ju) > -1 ? {
            changes: {
              insert: Ru + yu,
              from: mu.head
            },
            effects: pR.of(mu.head + Ru.length),
            range: Eu.n.cursor(mu.head + Ru.length)
          } : {
            range: Qu = mu
          }
        }));
      return Qu ? null : uu.update(mu, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function IR(uu, Ru, yu) {
      let Ku = null,
        Qu = uu.changeByRange((Ru => Ru.empty && DR(uu.doc, Ru.head) == yu ? {
          changes: {
            from: Ru.head,
            to: Ru.head + yu.length,
            insert: yu
          },
          range: Eu.n.cursor(Ru.head + yu.length)
        } : Ku = {
          range: Ru
        }));
      return Ku ? null : uu.update(Qu, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function GR(uu, Ru, yu, Ku) {
      let mu = Ku.stringPrefixes || SR.stringPrefixes,
        Ju = null,
        Nu = uu.changeByRange((Ku => {
          if (!Ku.empty) return {
            changes: [{
              insert: Ru,
              from: Ku.from
            }, {
              insert: Ru,
              from: Ku.to
            }],
            effects: pR.of(Ku.to + Ru.length),
            range: Eu.n.range(Ku.anchor + Ru.length, Ku.head + Ru.length)
          };
          let Nu, Xu = Ku.head,
            Vu = DR(uu.doc, Xu);
          if (Vu == Ru) {
            if (UR(uu, Xu)) return {
              changes: {
                insert: Ru + Ru,
                from: Xu
              },
              effects: pR.of(Xu + Ru.length),
              range: Eu.n.cursor(Xu + Ru.length)
            };
            if (AR(uu, Xu)) {
              let Ku = yu && uu.sliceDoc(Xu, Xu + 3 * Ru.length) == Ru + Ru + Ru ? Ru + Ru + Ru : Ru;
              return {
                changes: {
                  from: Xu,
                  to: Xu + Ku.length,
                  insert: Ku
                },
                range: Eu.n.cursor(Xu + Ku.length)
              }
            }
          } else {
            if (yu && uu.sliceDoc(Xu - 2 * Ru.length, Xu) == Ru + Ru && (Nu = nR(uu, Xu - 2 * Ru.length, mu)) > -1 && UR(uu, Nu)) return {
              changes: {
                insert: Ru + Ru + Ru + Ru,
                from: Xu
              },
              effects: pR.of(Xu + Ru.length),
              range: Eu.n.cursor(Xu + Ru.length)
            };
            if (uu.charCategorizer(Xu)(Vu) != Eu.l.Word && nR(uu, Xu, mu) > -1 && ! function(uu, Ru, yu, Eu) {
                let Ku = (0, Qu.ob)(uu).resolveInner(Ru, -1),
                  mu = Eu.reduce(((uu, Ru) => Math.max(uu, Ru.length)), 0);
                for (let Qu = 0; Qu < 5; Qu++) {
                  let Qu = uu.sliceDoc(Ku.from, Math.min(Ku.to, Ku.from + yu.length + mu)),
                    Ju = Qu.indexOf(yu);
                  if (!Ju || Ju > -1 && Eu.indexOf(Qu.slice(0, Ju)) > -1) {
                    let Ru = Ku.firstChild;
                    for (; Ru && Ru.from == Ku.from && Ru.to - Ru.from > yu.length + Ju;) {
                      if (uu.sliceDoc(Ru.to - yu.length, Ru.to) == yu) return !1;
                      Ru = Ru.firstChild
                    }
                    return !0
                  }
                  let Nu = Ku.to == Ru && Ku.parent;
                  if (!Nu) break;
                  Ku = Nu
                }
                return !1
              }(uu, Xu, Ru, mu)) return {
              changes: {
                insert: Ru + Ru,
                from: Xu
              },
              effects: pR.of(Xu + Ru.length),
              range: Eu.n.cursor(Xu + Ru.length)
            }
          }
          return {
            range: Ju = Ku
          }
        }));
      return Ju ? null : uu.update(Nu, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function UR(uu, Ru) {
      let yu = (0, Qu.ob)(uu).resolveInner(Ru + 1);
      return yu.parent && yu.from == Ru
    }

    function nR(uu, Ru, yu) {
      let Ku = uu.charCategorizer(Ru);
      if (Ku(uu.sliceDoc(Ru - 1, Ru)) != Eu.l.Word) return Ru;
      for (let Qu of yu) {
        let yu = Ru - Qu.length;
        if (uu.sliceDoc(yu, Ru) == Qu && Ku(uu.sliceDoc(yu - 1, yu)) != Eu.l.Word) return yu
      }
      return -1
    }

    function sR() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [qu, Fu, bu.of(uu), Yu, lR, Ou]
    }
    const tR = [{
        key: "Ctrl-Space",
        run: Pu
      }, {
        mac: "Alt-`",
        run: Pu
      }, {
        mac: "Alt-i",
        run: Pu
      }, {
        key: "Escape",
        run: uu => {
          let Ru = uu.state.field(Fu, !1);
          return !(!Ru || !Ru.active.some((uu => 0 != uu.state))) && (uu.dispatch({
            effects: ju.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: hu(!0)
      }, {
        key: "ArrowUp",
        run: hu(!1)
      }, {
        key: "PageDown",
        run: hu(!0, "page")
      }, {
        key: "PageUp",
        run: hu(!1, "page")
      }, {
        key: "Enter",
        run: uu => {
          let Ru = uu.state.field(Fu, !1);
          return !(uu.state.readOnly || !Ru || !Ru.open || Ru.open.selected < 0 || Ru.open.disabled || Date.now() - Ru.open.timestamp < uu.state.facet(bu).interactionDelay) && wu(uu, Ru.open.options[Ru.open.selected])
        }
      }],
      lR = Eu.t.highest(Ku.S.computeN([bu], (uu => uu.facet(bu).defaultKeymap ? [tR] : [])))
  },
  41052: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Xu,
      i: () => Bu,
      j: () => Vu,
      n: () => ru
    });
    var Eu = yu(40909);
    class Ku {
      constructor(uu, Ru, yu, Eu) {
        this.origin = uu, this.changes = Ru, this.effects = yu, this.clientID = Eu
      }
    }
    class Qu {
      constructor(uu, Ru) {
        this.version = uu, this.unconfirmed = Ru
      }
    }
    const mu = Eu.q.define({
        combine(uu) {
          let Ru = (0, Eu.P)(uu, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: uu => uu
          });
          return null == Ru.clientID && (Ru.clientID = uu.length && uu[0].generatedID || ""), Ru
        }
      }),
      Ju = Eu.e.define(),
      Nu = Eu.E.define({
        create: uu => new Qu(uu.facet(mu).startVersion, []),
        update(uu, Ru) {
          let yu = Ru.annotation(Ju);
          if (yu) return yu;
          let {
            sharedEffects: Eu,
            clientID: Nu
          } = Ru.startState.facet(mu), Xu = Eu(Ru);
          return Xu.length || !Ru.changes.empty ? new Qu(uu.version, uu.unconfirmed.concat(new Ku(Ru, Ru.changes, Xu, Nu))) : uu
        }
      });

    function Xu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Nu, mu.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, uu))]
    }

    function Vu(uu, Ru) {
      let {
        version: yu,
        unconfirmed: Xu
      } = uu.field(Nu), {
        clientID: Vu
      } = uu.facet(mu);
      yu += Ru.length;
      let ru = [],
        Bu = null,
        xu = 0;
      for (let Ku of Ru) {
        let uu = xu < Xu.length ? Xu[xu] : null;
        uu && uu.clientID == Ku.clientID ? (Bu && (Bu = Bu.map(uu.changes, !0)), ru = Eu.B.mapEffects(ru, Ku.changes), xu++) : (ru = Eu.B.mapEffects(ru, Ku.changes), Ku.effects && (ru = ru.concat(Ku.effects)), Bu = Bu ? Bu.compose(Ku.changes) : Ku.changes)
      }
      if (xu && (Xu = Xu.slice(xu)), Xu.length && (Bu && (Xu = Xu.map((uu => {
          let Ru = uu.changes.map(Bu);
          return Bu = Bu.map(uu.changes, !0), new Ku(uu.origin, Ru, Eu.B.mapEffects(uu.effects, Bu), Vu)
        }))), ru.length)) {
        let uu = Xu.reduce(((uu, Ru) => uu.compose(Ru.changes)), Eu.ChangeSet.empty(Xu[0].changes.length));
        ru = Eu.B.mapEffects(ru, uu)
      }
      return Bu ? uu.update({
        changes: Bu,
        effects: ru,
        annotations: [Eu.J.addToHistory.of(!1), Eu.J.remote.of(!0), Ju.of(new Qu(yu, Xu))],
        filter: !1
      }) : uu.update({
        annotations: [Ju.of(new Qu(yu, Xu))]
      })
    }

    function ru(uu) {
      return uu.field(Nu).unconfirmed
    }

    function Bu(uu) {
      return uu.field(Nu).version
    }
  },
  40947: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => pR
    });
    var Eu = yu(40934);
    class Ku {
      constructor(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        let Xu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Vu = arguments.length > 10 ? arguments[10] : void 0;
        this.p = uu, this.stack = Ru, this.state = yu, this.reducePos = Eu, this.pos = Ku, this.score = Qu, this.buffer = mu, this.bufferBase = Ju, this.curContext = Nu, this.lookAhead = Xu, this.parent = Vu
      }
      toString() {
        return `[${this.stack.filter(((uu,Ru)=>Ru%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = uu.parser.context;
        return new Ku(uu, [], Ru, yu, yu, 0, [], 0, Eu ? new Qu(Eu, Eu.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(uu, Ru) {
        this.stack.push(this.state, Ru, this.bufferBase + this.buffer.length), this.state = uu
      }
      reduce(uu) {
        var Ru;
        let yu = uu >> 19,
          Eu = 65535 & uu,
          {
            parser: Ku
          } = this.p,
          Qu = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          mu = Ku.dynamicPrecedence(Eu);
        if (mu && (this.score += mu), 0 == yu) return this.pushState(Ku.getGoto(this.state, Eu, !0), this.reducePos), Eu < Ku.minRepeatTerm && this.storeNode(Eu, this.reducePos, this.reducePos, Qu ? 8 : 4, !0), void this.reduceContext(Eu, this.reducePos);
        let Ju = this.stack.length - 3 * (yu - 1) - (262144 & uu ? 6 : 0),
          Nu = Ju ? this.stack[Ju - 2] : this.p.yT[0].from,
          Xu = this.reducePos - Nu;
        Xu >= 2e3 && !(null === (Ru = this.p.parser.nodeSet.types[Eu]) || void 0 === Ru ? void 0 : Ru.isAnonymous) && (Nu == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Xu) : this.p.lastBigReductionSize < Xu && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = Nu, this.p.lastBigReductionSize = Xu));
        let Vu = Ju ? this.stack[Ju - 1] : 0,
          ru = this.bufferBase + this.buffer.length - Vu;
        if (Eu < Ku.minRepeatTerm || 131072 & uu) {
          let uu = Ku.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Eu, Nu, uu, ru + 4, !0)
        }
        if (262144 & uu) this.state = this.stack[Ju];
        else {
          let uu = this.stack[Ju - 3];
          this.state = Ku.getGoto(uu, Eu, !0)
        }
        for (; this.stack.length > Ju;) this.stack.pop();
        this.reduceContext(Eu, Nu)
      }
      storeNode(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == uu && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let uu = this,
            Eu = this.buffer.length;
          if (0 == Eu && uu.parent && (Eu = uu.bufferBase - uu.parent.bufferBase, uu = uu.parent), Eu > 0 && 0 == uu.buffer[Eu - 4] && uu.buffer[Eu - 1] > -1) {
            if (Ru == yu) return;
            if (uu.buffer[Eu - 2] >= Ru) return void(uu.buffer[Eu - 2] = yu)
          }
        }
        if (Ku && this.pos != yu) {
          let Ku = this.buffer.length;
          if (Ku > 0 && (0 != this.buffer[Ku - 4] || this.buffer[Ku - 1] < 0)) {
            let uu = !1;
            for (let Ru = Ku; Ru > 0 && this.buffer[Ru - 2] > yu; Ru -= 4)
              if (this.buffer[Ru - 1] >= 0) {
                uu = !0;
                break
              } if (uu)
              for (; Ku > 0 && this.buffer[Ku - 2] > yu;) this.buffer[Ku] = this.buffer[Ku - 4], this.buffer[Ku + 1] = this.buffer[Ku - 3], this.buffer[Ku + 2] = this.buffer[Ku - 2], this.buffer[Ku + 3] = this.buffer[Ku - 1], Ku -= 4, Eu > 4 && (Eu -= 4)
          }
          this.buffer[Ku] = uu, this.buffer[Ku + 1] = Ru, this.buffer[Ku + 2] = yu, this.buffer[Ku + 3] = Eu
        } else this.buffer.push(uu, Ru, yu, Eu)
      }
      shift(uu, Ru, yu, Eu) {
        if (131072 & uu) this.pushState(65535 & uu, this.pos);
        else if (0 == (262144 & uu)) {
          let Ku = uu,
            {
              parser: Qu
            } = this.p;
          this.pos = Eu;
          let mu = Qu.stateFlag(Ku, 1);
          !mu && (Eu > yu || Ru <= Qu.maxNode) && (this.reducePos = Eu), this.pushState(Ku, mu ? yu : Math.min(yu, this.reducePos)), this.shiftContext(Ru, yu), Ru <= Qu.maxNode && this.buffer.push(Ru, yu, Eu, 4)
        } else this.pos = Eu, this.shiftContext(Ru, yu), Ru <= this.p.parser.maxNode && this.buffer.push(Ru, yu, Eu, 4)
      }
      apply(uu, Ru, yu, Eu) {
        65536 & uu ? this.reduce(uu) : this.shift(uu, Ru, yu, Eu)
      }
      useNode(uu, Ru) {
        let yu = this.p.reused.length - 1;
        (yu < 0 || this.p.reused[yu] != uu) && (this.p.reused.push(uu), yu++);
        let Eu = this.pos;
        this.reducePos = this.pos = Eu + uu.length, this.pushState(Ru, Eu), this.buffer.push(yu, Eu, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, uu, this, this.p.stream.reset(this.pos - uu.length)))
      }
      split() {
        let uu = this,
          Ru = uu.buffer.length;
        for (; Ru > 0 && uu.buffer[Ru - 2] > uu.reducePos;) Ru -= 4;
        let yu = uu.buffer.slice(Ru),
          Eu = uu.bufferBase + Ru;
        for (; uu && Eu == uu.bufferBase;) uu = uu.parent;
        return new Ku(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, yu, Eu, this.curContext, this.lookAhead, uu)
      }
      recoverByDelete(uu, Ru) {
        let yu = uu <= this.p.parser.maxNode;
        yu && this.storeNode(uu, this.pos, Ru, 4), this.storeNode(0, this.pos, Ru, yu ? 8 : 4), this.pos = this.reducePos = Ru, this.score -= 190
      }
      canShift(uu) {
        for (let Ru = new mu(this);;) {
          let yu = this.p.parser.stateSlot(Ru.state, 4) || this.p.parser.hasAction(Ru.state, uu);
          if (0 == yu) return !1;
          if (0 == (65536 & yu)) return !0;
          Ru.reduce(yu)
        }
      }
      recoverByInsert(uu) {
        if (this.stack.length >= 300) return [];
        let Ru = this.p.parser.nextStates(this.state);
        if (Ru.length > 8 || this.stack.length >= 120) {
          let yu = [];
          for (let Eu, Ku = 0; Ku < Ru.length; Ku += 2)(Eu = Ru[Ku + 1]) != this.state && this.p.parser.hasAction(Eu, uu) && yu.push(Ru[Ku], Eu);
          if (this.stack.length < 120)
            for (let uu = 0; yu.length < 8 && uu < Ru.length; uu += 2) {
              let Eu = Ru[uu + 1];
              yu.some(((uu, Ru) => 1 & Ru && uu == Eu)) || yu.push(Ru[uu], Eu)
            }
          Ru = yu
        }
        let yu = [];
        for (let Eu = 0; Eu < Ru.length && yu.length < 4; Eu += 2) {
          let uu = Ru[Eu + 1];
          if (uu == this.state) continue;
          let Ku = this.split();
          Ku.pushState(uu, this.pos), Ku.storeNode(0, Ku.pos, Ku.pos, 4, !0), Ku.shiftContext(Ru[Eu], this.pos), Ku.reducePos = this.pos, Ku.score -= 200, yu.push(Ku)
        }
        return yu
      }
      forceReduce() {
        let {
          parser: uu
        } = this.p, Ru = uu.stateSlot(this.state, 5);
        if (0 == (65536 & Ru)) return !1;
        if (!uu.validAction(this.state, Ru)) {
          let yu = Ru >> 19,
            Eu = 65535 & Ru,
            Ku = this.stack.length - 3 * yu;
          if (Ku < 0 || uu.getGoto(this.stack[Ku], Eu, !1) < 0) {
            let uu = this.findForcedReduction();
            if (null == uu) return !1;
            Ru = uu
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(Ru), !0
      }
      findForcedReduction() {
        let {
          parser: uu
        } = this.p, Ru = [], yu = (Eu, Ku) => {
          if (!Ru.includes(Eu)) return Ru.push(Eu), uu.allActions(Eu, (Ru => {
            if (393216 & Ru);
            else if (65536 & Ru) {
              let yu = (Ru >> 19) - Ku;
              if (yu > 1) {
                let Eu = 65535 & Ru,
                  Ku = this.stack.length - 3 * yu;
                if (Ku >= 0 && uu.getGoto(this.stack[Ku], Eu, !1) >= 0) return yu << 19 | 65536 | Eu
              }
            } else {
              let uu = yu(Ru, Ku + 1);
              if (null != uu) return uu
            }
          }))
        };
        return yu(this.state, 0)
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
          parser: uu
        } = this.p;
        return 65535 == uu.data[uu.stateSlot(this.state, 1)] && !uu.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(uu) {
        if (this.state != uu.state || this.stack.length != uu.stack.length) return !1;
        for (let Ru = 0; Ru < this.stack.length; Ru += 3)
          if (this.stack[Ru] != uu.stack[Ru]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(uu) {
        return this.p.parser.dialect.flags[uu]
      }
      shiftContext(uu, Ru) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, uu, this, this.p.stream.reset(Ru)))
      }
      reduceContext(uu, Ru) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, uu, this, this.p.stream.reset(Ru)))
      }
      emitContext() {
        let uu = this.buffer.length - 1;
        (uu < 0 || -3 != this.buffer[uu]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let uu = this.buffer.length - 1;
        (uu < 0 || -4 != this.buffer[uu]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(uu) {
        if (uu != this.curContext.context) {
          let Ru = new Qu(this.curContext.tracker, uu);
          Ru.hash != this.curContext.hash && this.emitContext(), this.curContext = Ru
        }
      }
      setLookAhead(uu) {
        return !(uu <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = uu, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class Qu {
      constructor(uu, Ru) {
        this.tracker = uu, this.context = Ru, this.hash = uu.strict ? uu.hash(Ru) : 0
      }
    }
    class mu {
      constructor(uu) {
        this.start = uu, this.state = uu.state, this.stack = uu.stack, this.base = this.stack.length
      }
      reduce(uu) {
        let Ru = 65535 & uu,
          yu = uu >> 19;
        0 == yu ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (yu - 1);
        let Eu = this.start.p.parser.getGoto(this.stack[this.base - 3], Ru, !0);
        this.state = Eu
      }
    }
    class Ju {
      constructor(uu, Ru, yu) {
        this.stack = uu, this.pos = Ru, this.index = yu, this.buffer = uu.buffer, 0 == this.index && this.maybeNext()
      }
      static create(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.bufferBase + uu.buffer.length;
        return new Ju(uu, Ru, Ru - uu.bufferBase)
      }
      maybeNext() {
        let uu = this.stack.parent;
        null != uu && (this.index = this.stack.bufferBase - uu.bufferBase, this.stack = uu, this.buffer = uu.buffer)
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
        return new Ju(this.stack, this.pos, this.index)
      }
    }

    function Nu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof uu) return uu;
      let yu = null;
      for (let Eu = 0, Ku = 0; Eu < uu.length;) {
        let Qu = 0;
        for (;;) {
          let Ru = uu.charCodeAt(Eu++),
            yu = !1;
          if (126 == Ru) {
            Qu = 65535;
            break
          }
          Ru >= 92 && Ru--, Ru >= 34 && Ru--;
          let Ku = Ru - 32;
          if (Ku >= 46 && (Ku -= 46, yu = !0), Qu += Ku, yu) break;
          Qu *= 46
        }
        yu ? yu[Ku++] = Qu : yu = new Ru(Qu)
      }
      return yu
    }
    class Xu {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const Vu = new Xu;
    class ru {
      constructor(uu, Ru) {
        this.input = uu, this.yT = Ru, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Vu, this.rangeIndex = 0, this.pos = this.chunkPos = Ru[0].from, this.range = Ru[0], this.end = Ru[Ru.length - 1].to, this.readNext()
      }
      resolveOffset(uu, Ru) {
        let yu = this.range,
          Eu = this.rangeIndex,
          Ku = this.pos + uu;
        for (; Ku < yu.from;) {
          if (!Eu) return null;
          let uu = this.yT[--Eu];
          Ku -= yu.from - uu.to, yu = uu
        }
        for (; Ru < 0 ? Ku > yu.to : Ku >= yu.to;) {
          if (Eu == this.yT.length - 1) return null;
          let uu = this.yT[++Eu];
          Ku += uu.from - yu.to, yu = uu
        }
        return Ku
      }
      clipPos(uu) {
        if (uu >= this.range.from && uu < this.range.to) return uu;
        for (let Ru of this.yT)
          if (Ru.to > uu) return Math.max(uu, Ru.from);
        return this.end
      }
      peek(uu) {
        let Ru, yu, Eu = this.chunkOff + uu;
        if (Eu >= 0 && Eu < this.chunk.length) Ru = this.pos + uu, yu = this.chunk.charCodeAt(Eu);
        else {
          let Eu = this.resolveOffset(uu, 1);
          if (null == Eu) return -1;
          if (Ru = Eu, Ru >= this.chunk2Pos && Ru < this.chunk2Pos + this.chunk2.length) yu = this.chunk2.charCodeAt(Ru - this.chunk2Pos);
          else {
            let uu = this.rangeIndex,
              Eu = this.range;
            for (; Eu.to <= Ru;) Eu = this.yT[++uu];
            this.chunk2 = this.input.chunk(this.chunk2Pos = Ru), Ru + this.chunk2.length > Eu.to && (this.chunk2 = this.chunk2.slice(0, Eu.to - Ru)), yu = this.chunk2.charCodeAt(0)
          }
        }
        return Ru >= this.token.lookAhead && (this.token.lookAhead = Ru + 1), yu
      }
      acceptToken(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = Ru ? this.resolveOffset(Ru, -1) : this.pos;
        if (null == yu || yu < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = uu, this.token.end = yu
      }
      acceptTokenTo(uu, Ru) {
        this.token.value = uu, this.token.end = Ru
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: uu,
            chunkPos: Ru
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = uu, this.chunk2Pos = Ru, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let uu = this.input.chunk(this.pos),
            Ru = this.pos + uu.length;
          this.chunk = Ru > this.range.to ? uu.slice(0, this.range.to - this.pos) : uu, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += uu; this.pos + uu >= this.range.to;) {
          if (this.rangeIndex == this.yT.length - 1) return this.setDone();
          uu -= this.range.to - this.pos, this.range = this.yT[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += uu, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.yT[this.rangeIndex = this.yT.length - 1], this.chunk = "", this.next = -1
      }
      reset(uu, Ru) {
        if (Ru ? (this.token = Ru, Ru.start = uu, Ru.lookAhead = uu + 1, Ru.value = Ru.extended = -1) : this.token = Vu, this.pos != uu) {
          if (this.pos = uu, uu == this.end) return this.setDone(), this;
          for (; uu < this.range.from;) this.range = this.yT[--this.rangeIndex];
          for (; uu >= this.range.to;) this.range = this.yT[++this.rangeIndex];
          uu >= this.chunkPos && uu < this.chunkPos + this.chunk.length ? this.chunkOff = uu - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(uu, Ru) {
        if (uu >= this.chunkPos && Ru <= this.chunkPos + this.chunk.length) return this.chunk.slice(uu - this.chunkPos, Ru - this.chunkPos);
        if (uu >= this.chunk2Pos && Ru <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(uu - this.chunk2Pos, Ru - this.chunk2Pos);
        if (uu >= this.range.from && Ru <= this.range.to) return this.input.read(uu, Ru);
        let yu = "";
        for (let Eu of this.yT) {
          if (Eu.from >= Ru) break;
          Eu.to > uu && (yu += this.input.read(Math.max(Eu.from, uu), Math.min(Eu.to, Ru)))
        }
        return yu
      }
    }
    class Bu {
      constructor(uu, Ru) {
        this.data = uu, this.id = Ru
      }
      token(uu, Ru) {
        let {
          parser: yu
        } = Ru.p;
        pu(this.data, uu, Ru, this.id, yu.data, yu.tokenPrecTable)
      }
    }
    Bu.prototype.contextual = Bu.prototype.fallback = Bu.prototype.extend = !1;
    class xu {
      constructor(uu, Ru, yu) {
        this.precTable = Ru, this.elseToken = yu, this.data = "string" == typeof uu ? Nu(uu) : uu
      }
      token(uu, Ru) {
        let yu = uu.pos,
          Eu = 0;
        for (;;) {
          let yu = uu.next < 0,
            Ku = uu.resolveOffset(1, 1);
          if (pu(this.data, uu, Ru, 0, this.data, this.precTable), uu.token.value > -1) break;
          if (null == this.elseToken) return;
          if (yu || Eu++, null == Ku) break;
          uu.reset(Ku, uu.token)
        }
        Eu && (uu.reset(yu, uu.token), uu.acceptToken(this.elseToken, Eu))
      }
    }
    xu.prototype.contextual = Bu.prototype.fallback = Bu.prototype.extend = !1;
    class Su {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = uu, this.contextual = !!Ru.contextual, this.fallback = !!Ru.fallback, this.extend = !!Ru.extend
      }
    }

    function pu(uu, Ru, yu, Eu, Ku, Qu) {
      let mu = 0,
        Ju = 1 << Eu,
        {
          dialect: Nu
        } = yu.p.parser;
      uu: for (; 0 != (Ju & uu[mu]);) {
        let yu = uu[mu + 1];
        for (let ru = mu + 3; ru < yu; ru += 2)
          if ((uu[ru + 1] & Ju) > 0) {
            let yu = uu[ru];
            if (Nu.allows(yu) && (-1 == Ru.token.value || Ru.token.value == yu || Wu(yu, Ru.token.value, Ku, Qu))) {
              Ru.acceptToken(yu);
              break
            }
          } let Eu = Ru.next,
          Xu = 0,
          Vu = uu[mu + 2];
        if (!(Ru.next < 0 && Vu > Xu && 65535 == uu[yu + 3 * Vu - 3])) {
          for (; Xu < Vu;) {
            let Ku = Xu + Vu >> 1,
              Qu = yu + Ku + (Ku << 1),
              Ju = uu[Qu],
              Nu = uu[Qu + 1] || 65536;
            if (Eu < Ju) Vu = Ku;
            else {
              if (!(Eu >= Nu)) {
                mu = uu[Qu + 2], Ru.advance();
                continue uu
              }
              Xu = Ku + 1
            }
          }
          break
        }
        mu = uu[yu + 3 * Vu - 1]
      }
    }

    function Tu(uu, Ru, yu) {
      for (let Eu, Ku = Ru; 65535 != (Eu = uu[Ku]); Ku++)
        if (Eu == yu) return Ku - Ru;
      return -1
    }

    function Wu(uu, Ru, yu, Eu) {
      let Ku = Tu(yu, Eu, Ru);
      return Ku < 0 || Tu(yu, Eu, uu) < Ku
    }
    const ju = "undefined" != typeof process && {
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
    let Hu = null;

    function du(uu, Ru, yu) {
      let Ku = uu.cursor(Eu.f.IncludeAnonymous);
      for (Ku.moveTo(Ru);;)
        if (!(yu < 0 ? Ku.childBefore(Ru) : Ku.childAfter(Ru)))
          for (;;) {
            if ((yu < 0 ? Ku.to < Ru : Ku.from > Ru) && !Ku.type.isError) return yu < 0 ? Math.max(0, Math.min(Ku.to - 1, Ru - 25)) : Math.min(uu.length, Math.max(Ku.from + 1, Ru + 25));
            if (yu < 0 ? Ku.prevSibling() : Ku.nextSibling()) break;
            if (!Ku.parent()) return yu < 0 ? 0 : uu.length
          }
    }
    class bu {
      constructor(uu, Ru) {
        this.fragments = uu, this.nodeSet = Ru, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let uu = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (uu) {
          for (this.safeFrom = uu.openStart ? du(uu.tree, uu.from + uu.offset, 1) - uu.offset : uu.from, this.safeTo = uu.openEnd ? du(uu.tree, uu.to + uu.offset, -1) - uu.offset : uu.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(uu.tree), this.start.push(-uu.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(uu) {
        if (uu < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= uu;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let Ru = this.trees.length - 1;
          if (Ru < 0) return this.nextFragment(), null;
          let yu = this.trees[Ru],
            Ku = this.index[Ru];
          if (Ku == yu.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let Qu = yu.children[Ku],
            mu = this.start[Ru] + yu.positions[Ku];
          if (mu > uu) return this.nextStart = mu, null;
          if (Qu instanceof Eu.t) {
            if (mu == uu) {
              if (mu < this.safeFrom) return null;
              let uu = mu + Qu.length;
              if (uu <= this.safeTo) {
                let Ru = Qu.prop(Eu.i.lookAhead);
                if (!Ru || uu + Ru < this.fragment.to) return Qu
              }
            }
            this.index[Ru]++, mu + Qu.length >= Math.max(this.safeFrom, uu) && (this.trees.push(Qu), this.start.push(mu), this.index.push(0))
          } else this.index[Ru]++, this.nextStart = mu + Qu.length
        }
      }
    }
    class Cu {
      constructor(uu, Ru) {
        this.stream = Ru, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = uu.tokenizers.map((uu => new Xu))
      }
      getActions(uu) {
        let Ru = 0,
          yu = null,
          {
            parser: Eu
          } = uu.p,
          {
            tokenizers: Ku
          } = Eu,
          Qu = Eu.stateSlot(uu.state, 3),
          mu = uu.curContext ? uu.curContext.hash : 0,
          Ju = 0;
        for (let Nu = 0; Nu < Ku.length; Nu++) {
          if (0 == (1 << Nu & Qu)) continue;
          let Eu = Ku[Nu],
            Xu = this.tokens[Nu];
          if ((!yu || Eu.fallback) && ((Eu.contextual || Xu.start != uu.pos || Xu.mask != Qu || Xu.context != mu) && (this.updateCachedToken(Xu, Eu, uu), Xu.mask = Qu, Xu.context = mu), Xu.lookAhead > Xu.end + 25 && (Ju = Math.max(Xu.lookAhead, Ju)), 0 != Xu.value)) {
            let Ku = Ru;
            if (Xu.extended > -1 && (Ru = this.addActions(uu, Xu.extended, Xu.end, Ru)), Ru = this.addActions(uu, Xu.value, Xu.end, Ru), !Eu.extend && (yu = Xu, Ru > Ku)) break
          }
        }
        for (; this.actions.length > Ru;) this.actions.pop();
        return Ju && uu.setLookAhead(Ju), yu || uu.pos != this.stream.end || (yu = new Xu, yu.value = uu.p.parser.eofTerm, yu.start = yu.end = uu.pos, Ru = this.addActions(uu, yu.value, yu.end, Ru)), this.mainToken = yu, this.actions
      }
      getMainToken(uu) {
        if (this.mainToken) return this.mainToken;
        let Ru = new Xu,
          {
            pos: yu,
            p: Eu
          } = uu;
        return Ru.start = yu, Ru.end = Math.min(yu + 1, Eu.stream.end), Ru.value = yu == Eu.stream.end ? Eu.parser.eofTerm : 0, Ru
      }
      updateCachedToken(uu, Ru, yu) {
        let Eu = this.stream.clipPos(yu.pos);
        if (Ru.token(this.stream.reset(Eu, uu), yu), uu.value > -1) {
          let {
            parser: Ru
          } = yu.p;
          for (let Eu = 0; Eu < Ru.specialized.length; Eu++)
            if (Ru.specialized[Eu] == uu.value) {
              let Ku = Ru.specializers[Eu](this.stream.read(uu.start, uu.end), yu);
              if (Ku >= 0 && yu.p.parser.dialect.allows(Ku >> 1)) {
                0 == (1 & Ku) ? uu.value = Ku >> 1 : uu.extended = Ku >> 1;
                break
              }
            }
        } else uu.value = 0, uu.end = this.stream.clipPos(Eu + 1)
      }
      putAction(uu, Ru, yu, Eu) {
        for (let Ku = 0; Ku < Eu; Ku += 3)
          if (this.actions[Ku] == uu) return Eu;
        return this.actions[Eu++] = uu, this.actions[Eu++] = Ru, this.actions[Eu++] = yu, Eu
      }
      addActions(uu, Ru, yu, Eu) {
        let {
          state: Ku
        } = uu, {
          parser: Qu
        } = uu.p, {
          data: mu
        } = Qu;
        for (let Ju = 0; Ju < 2; Ju++)
          for (let uu = Qu.stateSlot(Ku, Ju ? 2 : 1);; uu += 3) {
            if (65535 == mu[uu]) {
              if (1 != mu[uu + 1]) {
                0 == Eu && 2 == mu[uu + 1] && (Eu = this.putAction(Iu(mu, uu + 2), Ru, yu, Eu));
                break
              }
              uu = Iu(mu, uu + 2)
            }
            mu[uu] == Ru && (Eu = this.putAction(Iu(mu, uu + 1), Ru, yu, Eu))
          }
        return Eu
      }
    }
    class ku {
      constructor(uu, Ru, yu, Eu) {
        this.parser = uu, this.input = Ru, this.yT = Eu, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new ru(Ru, Eu), this.tokens = new Cu(uu, this.stream), this.topTerm = uu.top[1];
        let {
          from: Qu
        } = Eu[0];
        this.stacks = [Ku.start(this, uu.top[0], Qu)], this.fragments = yu.length && this.stream.end - Qu > 4 * uu.bufferLength ? new bu(yu, uu.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let uu, Ru, yu = this.stacks,
          Eu = this.minStackPos,
          Ku = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == yu.length) {
          let [uu] = yu;
          for (; uu.forceReduce() && uu.stack.length && uu.stack[uu.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let Qu = 0; Qu < yu.length; Qu++) {
          let mu = yu[Qu];
          for (;;) {
            if (this.tokens.mainToken = null, mu.pos > Eu) Ku.push(mu);
            else {
              if (this.advanceStack(mu, Ku, yu)) continue;
              {
                uu || (uu = [], Ru = []), uu.push(mu);
                let yu = this.tokens.getMainToken(mu);
                Ru.push(yu.value, yu.end)
              }
            }
            break
          }
        }
        if (!Ku.length) {
          let Ru = uu && function(uu) {
            let Ru = null;
            for (let yu of uu) {
              let uu = yu.p.stoppedAt;
              (yu.pos == yu.p.stream.end || null != uu && yu.pos > uu) && yu.p.parser.stateFlag(yu.state, 2) && (!Ru || Ru.score < yu.score) && (Ru = yu)
            }
            return Ru
          }(uu);
          if (Ru) return ju && console.log("Finish with " + this.stackID(Ru)), this.stackToTree(Ru);
          if (this.parser.strict) throw ju && uu && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Eu);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && uu) {
          let yu = null != this.stoppedAt && uu[0].pos > this.stoppedAt ? uu[0] : this.runRecovery(uu, Ru, Ku);
          if (yu) return ju && console.log("Force-finish " + this.stackID(yu)), this.stackToTree(yu.forceAll())
        }
        if (this.recovering) {
          let uu = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Ku.length > uu)
            for (Ku.sort(((uu, Ru) => Ru.score - uu.score)); Ku.length > uu;) Ku.pop();
          Ku.some((uu => uu.reducePos > Eu)) && this.recovering--
        } else if (Ku.length > 1) {
          uu: for (let uu = 0; uu < Ku.length - 1; uu++) {
            let Ru = Ku[uu];
            for (let yu = uu + 1; yu < Ku.length; yu++) {
              let Eu = Ku[yu];
              if (Ru.sameState(Eu) || Ru.buffer.length > 500 && Eu.buffer.length > 500) {
                if (!((Ru.score - Eu.score || Ru.buffer.length - Eu.buffer.length) > 0)) {
                  Ku.splice(uu--, 1);
                  continue uu
                }
                Ku.splice(yu--, 1)
              }
            }
          }
          Ku.length > 12 && (Ku.sort(((uu, Ru) => Ru.score - uu.score)), Ku.splice(12, Ku.length - 12))
        }
        this.minStackPos = Ku[0].pos;
        for (let Qu = 1; Qu < Ku.length; Qu++) Ku[Qu].pos < this.minStackPos && (this.minStackPos = Ku[Qu].pos);
        return null
      }
      stopAt(uu) {
        if (null != this.stoppedAt && this.stoppedAt < uu) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = uu
      }
      advanceStack(uu, Ru, yu) {
        let Ku = uu.pos,
          {
            parser: Qu
          } = this,
          mu = ju ? this.stackID(uu) + " -> " : "";
        if (null != this.stoppedAt && Ku > this.stoppedAt) return uu.forceReduce() ? uu : null;
        if (this.fragments) {
          let Ru = uu.curContext && uu.curContext.tracker.strict,
            yu = Ru ? uu.curContext.hash : 0;
          for (let Ju = this.fragments.nodeAt(Ku); Ju;) {
            let Ku = this.parser.nodeSet.types[Ju.type.id] == Ju.type ? Qu.getGoto(uu.state, Ju.type.id) : -1;
            if (Ku > -1 && Ju.length && (!Ru || (Ju.prop(Eu.i.contextHash) || 0) == yu)) return uu.useNode(Ju, Ku), ju && console.log(mu + this.stackID(uu) + ` (via reuse of ${Qu.getName(Ju.type.id)})`), !0;
            if (!(Ju instanceof Eu.t) || 0 == Ju.children.length || Ju.positions[0] > 0) break;
            let Nu = Ju.children[0];
            if (!(Nu instanceof Eu.t && 0 == Ju.positions[0])) break;
            Ju = Nu
          }
        }
        let Ju = Qu.stateSlot(uu.state, 4);
        if (Ju > 0) return uu.reduce(Ju), ju && console.log(mu + this.stackID(uu) + ` (via always-reduce ${Qu.getName(65535&Ju)})`), !0;
        if (uu.stack.length >= 8400)
          for (; uu.stack.length > 6e3 && uu.forceReduce(););
        let Nu = this.tokens.getActions(uu);
        for (let Eu = 0; Eu < Nu.length;) {
          let Ju = Nu[Eu++],
            Xu = Nu[Eu++],
            Vu = Nu[Eu++],
            ru = Eu == Nu.length || !yu,
            Bu = ru ? uu : uu.split(),
            xu = this.tokens.mainToken;
          if (Bu.apply(Ju, Xu, xu ? xu.start : Bu.pos, Vu), ju && console.log(mu + this.stackID(Bu) + ` (via ${0==(65536&Ju)?"shift":`reduce of ${Qu.getName(65535&Ju)}`} for ${Qu.getName(Xu)} @ ${Ku}${Bu==uu?"":", split"})`), ru) return !0;
          Bu.pos > Ku ? Ru.push(Bu) : yu.push(Bu)
        }
        return !1
      }
      advanceFully(uu, Ru) {
        let yu = uu.pos;
        for (;;) {
          if (!this.advanceStack(uu, null, null)) return !1;
          if (uu.pos > yu) return eu(uu, Ru), !0
        }
      }
      runRecovery(uu, Ru, yu) {
        let Eu = null,
          Ku = !1;
        for (let Qu = 0; Qu < uu.length; Qu++) {
          let mu = uu[Qu],
            Ju = Ru[Qu << 1],
            Nu = Ru[1 + (Qu << 1)],
            Xu = ju ? this.stackID(mu) + " -> " : "";
          if (mu.deadEnd) {
            if (Ku) continue;
            if (Ku = !0, mu.restart(), ju && console.log(Xu + this.stackID(mu) + " (restarted)"), this.advanceFully(mu, yu)) continue
          }
          let Vu = mu.split(),
            ru = Xu;
          for (let uu = 0; uu < 10 && Vu.forceReduce(); uu++) {
            if (ju && console.log(ru + this.stackID(Vu) + " (via force-reduce)"), this.advanceFully(Vu, yu)) break;
            ju && (ru = this.stackID(Vu) + " -> ")
          }
          for (let uu of mu.recoverByInsert(Ju)) ju && console.log(Xu + this.stackID(uu) + " (via recover-insert)"), this.advanceFully(uu, yu);
          this.stream.end > mu.pos ? (Nu == mu.pos && (Nu++, Ju = 0), mu.recoverByDelete(Ju, Nu), ju && console.log(Xu + this.stackID(mu) + ` (via recover-delete ${this.parser.getName(Ju)})`), eu(mu, yu)) : (!Eu || Eu.score < Vu.score) && (Eu = Vu)
        }
        return Eu
      }
      stackToTree(uu) {
        return uu.close(), Eu.t.build({
          buffer: Ju.create(uu),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.yT[0].from,
          length: uu.pos - this.yT[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(uu) {
        let Ru = (Hu || (Hu = new WeakMap)).get(uu);
        return Ru || Hu.set(uu, Ru = String.fromCodePoint(this.nextStackID++)), Ru + uu
      }
    }

    function eu(uu, Ru) {
      for (let yu = 0; yu < Ru.length; yu++) {
        let Eu = Ru[yu];
        if (Eu.pos == uu.pos && Eu.sameState(uu)) return void(Ru[yu].score < uu.score && (Ru[yu] = uu))
      }
      Ru.push(uu)
    }
    class Au {
      constructor(uu, Ru, yu) {
        this.source = uu, this.flags = Ru, this.disabled = yu
      }
      allows(uu) {
        return !this.disabled || 0 == this.disabled[uu]
      }
    }
    const Du = uu => uu;
    class Mu extends Eu.p {
      constructor(uu) {
        if (super(), this.wrappers = [], 14 != uu.version) throw new RangeError(`Parser version (${uu.version}) doesn't match runtime version (14)`);
        let Ru = uu.nodeNames.split(" ");
        this.minRepeatTerm = Ru.length;
        for (let Eu = 0; Eu < uu.repeatNodeCount; Eu++) Ru.push("");
        let yu = Object.keys(uu.topRules).map((Ru => uu.topRules[Ru][1])),
          Ku = [];
        for (let Eu = 0; Eu < Ru.length; Eu++) Ku.push([]);

        function Qu(uu, Ru, yu) {
          Ku[uu].push([Ru, Ru.deserialize(String(yu))])
        }
        if (uu.nodeProps)
          for (let Ju of uu.nodeProps) {
            let uu = Ju[0];
            "string" == typeof uu && (uu = Eu.i[uu]);
            for (let Ru = 1; Ru < Ju.length;) {
              let yu = Ju[Ru++];
              if (yu >= 0) Qu(yu, uu, Ju[Ru++]);
              else {
                let Eu = Ju[Ru + -yu];
                for (let Ku = -yu; Ku > 0; Ku--) Qu(Ju[Ru++], uu, Eu);
                Ru++
              }
            }
          }
        this.nodeSet = new Eu.j(Ru.map(((Ru, Qu) => Eu.k.define({
          name: Qu >= this.minRepeatTerm ? void 0 : Ru,
          id: Qu,
          props: Ku[Qu],
          top: yu.indexOf(Qu) > -1,
          error: 0 == Qu,
          skipped: uu.skippedNodes && uu.skippedNodes.indexOf(Qu) > -1
        })))), uu.propSources && (this.nodeSet = this.nodeSet.extend(...uu.propSources)), this.strict = !1, this.bufferLength = Eu.e;
        let mu = Nu(uu.tokenData);
        this.context = uu.context, this.specializerSpecs = uu.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Eu = 0; Eu < this.specializerSpecs.length; Eu++) this.specialized[Eu] = this.specializerSpecs[Eu].term;
        this.specializers = this.specializerSpecs.map(Gu), this.states = Nu(uu.states, Uint32Array), this.data = Nu(uu.stateData), this.goto = Nu(uu.goto), this.maxTerm = uu.maxTerm, this.tokenizers = uu.tokenizers.map((uu => "number" == typeof uu ? new Bu(mu, uu) : uu)), this.topRules = uu.topRules, this.dialects = uu.dialects || {}, this.dynamicPrecedences = uu.dynamicPrecedences || null, this.tokenPrecTable = uu.tokenPrec, this.termNames = uu.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(uu, Ru, yu) {
        let Eu = new ku(this, uu, Ru, yu);
        for (let Ku of this.wrappers) Eu = Ku(Eu, uu, Ru, yu);
        return Eu
      }
      getGoto(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = this.goto;
        if (Ru >= Eu[0]) return -1;
        for (let Ku = Eu[Ru + 1];;) {
          let Ru = Eu[Ku++],
            Qu = 1 & Ru,
            mu = Eu[Ku++];
          if (Qu && yu) return mu;
          for (let yu = Ku + (Ru >> 1); Ku < yu; Ku++)
            if (Eu[Ku] == uu) return mu;
          if (Qu) return -1
        }
      }
      hasAction(uu, Ru) {
        let yu = this.data;
        for (let Eu = 0; Eu < 2; Eu++)
          for (let Ku, Qu = this.stateSlot(uu, Eu ? 2 : 1);; Qu += 3) {
            if (65535 == (Ku = yu[Qu])) {
              if (1 != yu[Qu + 1]) {
                if (2 == yu[Qu + 1]) return Iu(yu, Qu + 2);
                break
              }
              Ku = yu[Qu = Iu(yu, Qu + 2)]
            }
            if (Ku == Ru || 0 == Ku) return Iu(yu, Qu + 1)
          }
        return 0
      }
      stateSlot(uu, Ru) {
        return this.states[6 * uu + Ru]
      }
      stateFlag(uu, Ru) {
        return (this.stateSlot(uu, 0) & Ru) > 0
      }
      validAction(uu, Ru) {
        return !!this.allActions(uu, (uu => uu == Ru || null))
      }
      allActions(uu, Ru) {
        let yu = this.stateSlot(uu, 4),
          Eu = yu ? Ru(yu) : void 0;
        for (let Ku = this.stateSlot(uu, 1); null == Eu; Ku += 3) {
          if (65535 == this.data[Ku]) {
            if (1 != this.data[Ku + 1]) break;
            Ku = Iu(this.data, Ku + 2)
          }
          Eu = Ru(Iu(this.data, Ku + 1))
        }
        return Eu
      }
      nextStates(uu) {
        let Ru = [];
        for (let yu = this.stateSlot(uu, 1);; yu += 3) {
          if (65535 == this.data[yu]) {
            if (1 != this.data[yu + 1]) break;
            yu = Iu(this.data, yu + 2)
          }
          if (0 == (1 & this.data[yu + 2])) {
            let uu = this.data[yu + 1];
            Ru.some(((Ru, yu) => 1 & yu && Ru == uu)) || Ru.push(this.data[yu], uu)
          }
        }
        return Ru
      }
      configure(uu) {
        let Ru = Object.assign(Object.create(Mu.prototype), this);
        if (uu.props && (Ru.nodeSet = this.nodeSet.extend(...uu.props)), uu.top) {
          let yu = this.topRules[uu.top];
          if (!yu) throw new RangeError(`Invalid top rule name ${uu.top}`);
          Ru.top = yu
        }
        return uu.tokenizers && (Ru.tokenizers = this.tokenizers.map((Ru => {
          let yu = uu.tokenizers.find((uu => uu.from == Ru));
          return yu ? yu.to : Ru
        }))), uu.specializers && (Ru.specializers = this.specializers.slice(), Ru.specializerSpecs = this.specializerSpecs.map(((yu, Eu) => {
          let Ku = uu.specializers.find((uu => uu.from == yu.external));
          if (!Ku) return yu;
          let Qu = Object.assign(Object.assign({}, yu), {
            external: Ku.to
          });
          return Ru.specializers[Eu] = Gu(Qu), Qu
        }))), uu.contextTracker && (Ru.context = uu.contextTracker), uu.dialect && (Ru.dialect = this.parseDialect(uu.dialect)), null != uu.strict && (Ru.strict = uu.strict), uu.wrap && (Ru.wrappers = Ru.wrappers.concat(uu.wrap)), null != uu.bufferLength && (Ru.bufferLength = uu.bufferLength), Ru
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(uu) {
        return this.termNames ? this.termNames[uu] : String(uu <= this.maxNode && this.nodeSet.types[uu].name || uu)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(uu) {
        let Ru = this.dynamicPrecedences;
        return null == Ru ? 0 : Ru[uu] || 0
      }
      parseDialect(uu) {
        let Ru = Object.keys(this.dialects),
          yu = Ru.map((() => !1));
        if (uu)
          for (let Ku of uu.split(" ")) {
            let uu = Ru.indexOf(Ku);
            uu >= 0 && (yu[uu] = !0)
          }
        let Eu = null;
        for (let Ku = 0; Ku < Ru.length; Ku++)
          if (!yu[Ku])
            for (let uu, yu = this.dialects[Ru[Ku]]; 65535 != (uu = this.data[yu++]);)(Eu || (Eu = new Uint8Array(this.maxTerm + 1)))[uu] = 1;
        return new Au(uu, yu, Eu)
      }
      static deserialize(uu) {
        return new Mu(uu)
      }
    }

    function Iu(uu, Ru) {
      return uu[Ru] | uu[Ru + 1] << 16
    }

    function Gu(uu) {
      if (uu.external) {
        let Ru = uu.extend ? 1 : 0;
        return (yu, Eu) => uu.external(yu, Eu) << 1 | Ru
      }
      return uu.get
    }
    var Uu = yu(40940);
    const nu = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      su = new class {
        constructor(uu) {
          this.start = uu.start, this.shift = uu.shift || Du, this.reduce = uu.reduce || Du, this.reuse = uu.reuse || Du, this.hash = uu.hash || (() => 0), this.strict = !1 !== uu.strict
        }
      }({
        start: !1,
        shift: (uu, Ru) => 5 == Ru || 6 == Ru || 320 == Ru ? uu : 321 == Ru,
        strict: !1
      }),
      tu = new Su(((uu, Ru) => {
        let {
          next: yu
        } = uu;
        (125 == yu || -1 == yu || Ru.context) && uu.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      lu = new Su(((uu, Ru) => {
        let yu, {
          next: Eu
        } = uu;
        nu.indexOf(Eu) > -1 || (47 != Eu || 47 != (yu = uu.peek(1)) && 42 != yu) && (125 == Eu || 59 == Eu || -1 == Eu || Ru.context || uu.acceptToken(316))
      }), {
        contextual: !0
      }),
      gu = new Su(((uu, Ru) => {
        91 != uu.next || Ru.context || uu.acceptToken(317)
      }), {
        contextual: !0
      }),
      cu = new Su(((uu, Ru) => {
        let {
          next: yu
        } = uu;
        if (43 == yu || 45 == yu) {
          if (uu.advance(), yu == uu.next) {
            uu.advance();
            let yu = !Ru.context && Ru.canShift(1);
            uu.acceptToken(yu ? 1 : 2)
          }
        } else 63 == yu && 46 == uu.peek(1) && (uu.advance(), uu.advance(), (uu.next < 48 || uu.next > 57) && uu.acceptToken(3))
      }), {
        contextual: !0
      });

    function Lu(uu, Ru) {
      return uu >= 65 && uu <= 90 || uu >= 97 && uu <= 122 || 95 == uu || uu >= 192 || !Ru && uu >= 48 && uu <= 57
    }
    const zu = new Su(((uu, Ru) => {
        if (60 != uu.next || !Ru.dialectEnabled(0)) return;
        if (uu.advance(), 47 == uu.next) return;
        let yu = 0;
        for (; nu.indexOf(uu.next) > -1;) uu.advance(), yu++;
        if (Lu(uu.next, !0)) {
          for (uu.advance(), yu++; Lu(uu.next, !1);) uu.advance(), yu++;
          for (; nu.indexOf(uu.next) > -1;) uu.advance(), yu++;
          if (44 == uu.next) return;
          for (let Ru = 0;; Ru++) {
            if (7 == Ru) {
              if (!Lu(uu.next, !0)) return;
              break
            }
            if (uu.next != "extends".charCodeAt(Ru)) break;
            uu.advance(), yu++
          }
        }
        uu.acceptToken(4, -yu)
      })),
      Fu = (0, Uu.h)({
        "get set async static": Uu.p.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Uu.p.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Uu.p.operatorKeyword,
        "let var const using function class extends": Uu.p.definitionKeyword,
        "import export from": Uu.p.moduleKeyword,
        "with debugger new": Uu.p.keyword,
        TemplateString: Uu.p.special(Uu.p.string),
        super: Uu.p.atom,
        BooleanLiteral: Uu.p.bool,
        this: Uu.p.self,
        null: Uu.p.null,
        Star: Uu.p.modifier,
        VariableName: Uu.p.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Uu.p.function(Uu.p.variableName),
        VariableDefinition: Uu.p.definition(Uu.p.variableName),
        Label: Uu.p.labelName,
        PropertyName: Uu.p.propertyName,
        PrivatePropertyName: Uu.p.special(Uu.p.propertyName),
        "CallExpression/MemberExpression/PropertyName": Uu.p.function(Uu.p.propertyName),
        "FunctionDeclaration/VariableDefinition": Uu.p.function(Uu.p.definition(Uu.p.variableName)),
        "ClassDeclaration/VariableDefinition": Uu.p.definition(Uu.p.className),
        "NewExpression/VariableName": Uu.p.className,
        PropertyDefinition: Uu.p.definition(Uu.p.propertyName),
        PrivatePropertyDefinition: Uu.p.definition(Uu.p.special(Uu.p.propertyName)),
        UpdateOp: Uu.p.updateOperator,
        "LineComment Hashbang": Uu.p.lineComment,
        BlockComment: Uu.p.blockComment,
        Number: Uu.p.number,
        String: Uu.p.string,
        Escape: Uu.p.escape,
        ArithOp: Uu.p.arithmeticOperator,
        LogicOp: Uu.p.logicOperator,
        BitOp: Uu.p.bitwiseOperator,
        CompareOp: Uu.p.compareOperator,
        RegExp: Uu.p.regexp,
        Equals: Uu.p.definitionOperator,
        Arrow: Uu.p.function(Uu.p.punctuation),
        ": Spread": Uu.p.punctuation,
        "( )": Uu.p.paren,
        "[ ]": Uu.p.squareBracket,
        "{ }": Uu.p.brace,
        "InterpolationStart InterpolationEnd": Uu.p.special(Uu.p.brace),
        ".": Uu.p.derefOperator,
        ", ;": Uu.p.separator,
        "@": Uu.p.meta,
        TypeName: Uu.p.typeName,
        TypeDefinition: Uu.p.definition(Uu.p.typeName),
        "type enum interface implements namespace module declare": Uu.p.definitionKeyword,
        "abstract global Privacy readonly override": Uu.p.modifier,
        "is keyof unique infer asserts": Uu.p.operatorKeyword,
        JSXAttributeValue: Uu.p.attributeValue,
        JSXText: Uu.p.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Uu.p.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Uu.p.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Uu.p.attributeName,
        "JSXBuiltin/JSXIdentifier": Uu.p.standard(Uu.p.tagName)
      }),
      wu = {
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
      Zu = {
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
      hu = {
        __proto__: null,
        "<": 193
      },
      Pu = Mu.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: su,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [Fu],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [lu, gu, cu, zu, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, tu, new xu("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new xu("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: uu => wu[uu] || -1
        }, {
          term: 343,
          get: uu => Zu[uu] || -1
        }, {
          term: 95,
          get: uu => hu[uu] || -1
        }],
        tokenPrec: 15201
      });
    var iu = yu(40930),
      Yu = yu(40909),
      ou = yu(40913),
      qu = yu(40904);
    const Ou = [(0, qu.s)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, qu.s)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, qu.s)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, qu.s)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, qu.s)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, qu.s)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, qu.s)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, qu.s)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, qu.s)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, qu.s)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, qu.s)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      vu = Ou.concat([(0, qu.s)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, qu.s)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, qu.s)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      au = new Eu.n,
      fu = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function uR(uu) {
      return (Ru, yu) => {
        let Eu = Ru.node.getChild("VariableDefinition");
        return Eu && yu(Eu, uu), !0
      }
    }
    const RR = ["FunctionDeclaration"],
      yR = {
        FunctionDeclaration: uR("function"),
        ClassDeclaration: uR("class"),
        ClassExpression: () => !0,
        EnumDeclaration: uR("constant"),
        TypeAliasDeclaration: uR("type"),
        NamespaceDeclaration: uR("namespace"),
        VariableDefinition(uu, Ru) {
          uu.matchContext(RR) || Ru(uu, "variable")
        },
        TypeDefinition(uu, Ru) {
          Ru(uu, "type")
        },
        __proto__: null
      };

    function ER(uu, Ru) {
      let yu = au.get(Ru);
      if (yu) return yu;
      let Ku = [],
        Qu = !0;

      function mu(Ru, yu) {
        let Eu = uu.sliceString(Ru.from, Ru.to);
        Ku.push({
          label: Eu,
          type: yu
        })
      }
      return Ru.cursor(Eu.f.IncludeAnonymous).iterate((Ru => {
        if (Qu) Qu = !1;
        else if (Ru.name) {
          let uu = yR[Ru.name];
          if (uu && uu(Ru, mu) || fu.has(Ru.name)) return !1
        } else if (Ru.to - Ru.from > 8192) {
          for (let yu of ER(uu, Ru.node)) Ku.push(yu);
          return !1
        }
      })), au.set(Ru, Ku), Ku
    }
    const KR = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      QR = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function mR(uu) {
      let Ru = (0, iu.ob)(uu.state).resolveInner(uu.pos, -1);
      if (QR.indexOf(Ru.name) > -1) return null;
      let yu = "VariableName" == Ru.name || Ru.to - Ru.from < 20 && KR.test(uu.state.sliceDoc(Ru.from, Ru.to));
      if (!yu && !uu.explicit) return null;
      let Eu = [];
      for (let Ku = Ru; Ku; Ku = Ku.parent) fu.has(Ku.name) && (Eu = Eu.concat(ER(uu.state.doc, Ku)));
      return {
        options: Eu,
        from: yu ? Ru.from : uu.pos,
        validFor: KR
      }
    }
    const JR = iu.i.define({
        name: "javascript",
        parser: Pu.configure({
          props: [iu.P.add({
            IfStatement: (0, iu.p)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, iu.p)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: iu.z,
            SwitchBody: uu => {
              let Ru = uu.textAfter,
                yu = /^\s*\}/.test(Ru),
                Eu = /^\s*(case|default)\b/.test(Ru);
              return uu.baseIndent + (yu ? 0 : Eu ? 1 : 2) * uu.unit
            },
            Block: (0, iu.v)({
              closing: "}"
            }),
            ArrowFunction: uu => uu.baseIndent + uu.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, iu.p)({
              except: /^\s*{/
            }),
            JSXElement(uu) {
              let Ru = /^\s*<\//.test(uu.textAfter);
              return uu.lineIndent(uu.node.from) + (Ru ? 0 : uu.unit)
            },
            JSXEscape(uu) {
              let Ru = /\s*\}/.test(uu.textAfter);
              return uu.lineIndent(uu.node.from) + (Ru ? 0 : uu.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": uu => uu.column(uu.node.from) + uu.unit
          }), iu.I.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": iu.D,
            BlockComment: uu => ({
              from: uu.from + 2,
              to: uu.to - 2
            }),
            JSXElement(uu) {
              let Ru = uu.firstChild;
              if (!Ru || "JSXSelfClosingTag" == Ru.name) return null;
              let yu = uu.lastChild;
              return {
                from: Ru.to,
                to: yu.type.isError ? uu.to : yu.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(uu) {
              var Ru;
              let yu = null === (Ru = uu.firstChild) || void 0 === Ru ? void 0 : Ru.nextSibling,
                Eu = uu.lastChild;
              return !yu || yu.type.isError ? null : {
                from: yu.to,
                to: Eu.type.isError ? uu.to : Eu.from
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
      NR = {
        test: uu => /^JSX/.test(uu.name),
        facet: (0, iu.u)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      XR = JR.configure({
        dialect: "ts"
      }, "typescript"),
      VR = JR.configure({
        dialect: "jsx",
        props: [iu.db.add((uu => uu.isTop ? [NR] : void 0))]
      }),
      rR = JR.configure({
        dialect: "jsx ts",
        props: [iu.db.add((uu => uu.isTop ? [NR] : void 0))]
      }, "typescript");
    let BR = uu => ({
      label: uu,
      type: "keyword"
    });
    const xR = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(BR),
      SR = xR.concat(["declare", "implements", "private", "protected", "public"].map(BR));

    function pR() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Ru = uu.jsx ? uu.typescript ? rR : VR : uu.typescript ? XR : JR,
        yu = uu.typescript ? vu.concat(SR) : Ou.concat(xR);
      return new iu.m(Ru, [JR.data.of({
        autocomplete: (0, qu.o)(QR, (0, qu.j)(yu))
      }), JR.data.of({
        autocomplete: mR
      }), uu.jsx ? jR : []])
    }

    function TR(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uu.length;
      for (let Eu = null === Ru || void 0 === Ru ? void 0 : Ru.firstChild; Eu; Eu = Eu.nextSibling)
        if ("JSXIdentifier" == Eu.name || "JSXBuiltin" == Eu.name || "JSXNamespacedName" == Eu.name || "JSXMemberExpression" == Eu.name) return uu.sliceString(Eu.from, Math.min(Eu.to, yu));
      return ""
    }
    const WR = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      jR = ou.f.inputHandler.of(((uu, Ru, yu, Eu, Ku) => {
        if ((WR ? uu.composing : uu.compositionStarted) || uu.state.readOnly || Ru != yu || ">" != Eu && "/" != Eu || !JR.isActiveAt(uu.state, Ru, -1)) return !1;
        let Qu = Ku(),
          {
            state: mu
          } = Qu,
          Ju = mu.changeByRange((uu => {
            var Ru;
            let yu, {
                head: Ku
              } = uu,
              Qu = (0, iu.ob)(mu).resolveInner(Ku - 1, -1);
            if ("JSXStartTag" == Qu.name && (Qu = Qu.parent), mu.doc.sliceString(Ku - 1, Ku) != Eu || "JSXAttributeValue" == Qu.name && Qu.to > Ku);
            else {
              if (">" == Eu && "JSXFragmentTag" == Qu.name) return {
                range: uu,
                changes: {
                  from: Ku,
                  insert: "</>"
                }
              };
              if ("/" == Eu && "JSXStartCloseTag" == Qu.name) {
                let uu = Qu.parent,
                  Eu = uu.parent;
                if (Eu && uu.from == Ku - 2 && ((yu = TR(mu.doc, Eu.firstChild, Ku)) || "JSXFragmentTag" == (null === (Ru = Eu.firstChild) || void 0 === Ru ? void 0 : Ru.name))) {
                  let uu = `${yu}>`;
                  return {
                    range: Yu.n.cursor(Ku + uu.length, -1),
                    changes: {
                      from: Ku,
                      insert: uu
                    }
                  }
                }
              } else if (">" == Eu) {
                let Ru = function(uu) {
                  for (;;) {
                    if ("JSXOpenTag" == uu.name || "JSXSelfClosingTag" == uu.name || "JSXFragmentTag" == uu.name) return uu;
                    if ("JSXEscape" == uu.name || !uu.parent) return null;
                    uu = uu.parent
                  }
                }(Qu);
                if (Ru && "JSXOpenTag" == Ru.name && !/^\/?>|^<\//.test(mu.doc.sliceString(Ku, Ku + 2)) && (yu = TR(mu.doc, Ru, Ku))) return {
                  range: uu,
                  changes: {
                    from: Ku,
                    insert: `</${yu}>`
                  }
                }
              }
            }
            return {
              range: uu
            }
          }));
        return !Ju.changes.empty && (uu.dispatch([Qu, mu.update(Ju, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40930: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => jR,
      D: () => Ou,
      E: () => XR,
      I: () => qu,
      K: () => Wu,
      M: () => Uu,
      O: () => su,
      P: () => lu,
      T: () => Yu,
      W: () => nu,
      _: () => Gu,
      cb: () => ZR,
      d: () => dR,
      db: () => ru,
      f: () => tu,
      gb: () => eR,
      i: () => Su,
      kb: () => Tu,
      m: () => Mu,
      o: () => LR,
      ob: () => pu,
      p: () => Pu,
      r: () => MR,
      u: () => Vu,
      v: () => wu,
      z: () => hu
    });
    var Eu, Ku = yu(40934),
      Qu = yu(40909),
      mu = yu(40913),
      Ju = yu(40940),
      Nu = yu(40918);
    const Xu = new Ku.i;

    function Vu(uu) {
      return Qu.q.define({
        combine: uu ? Ru => Ru.concat(uu) : void 0
      })
    }
    const ru = new Ku.i;
    class Bu {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = uu, this.name = Eu, Qu.o.prototype.hasOwnProperty("tree") || Object.defineProperty(Qu.o.prototype, "tree", {
          get() {
            return pu(this)
          }
        }), this.parser = Ru, this.extension = [Du.of(this), Qu.o.languageData.of(((uu, Ru, yu) => {
          let Eu = xu(uu, Ru, yu),
            Ku = Eu.type.prop(Xu);
          if (!Ku) return [];
          let Qu = uu.facet(Ku),
            mu = Eu.type.prop(ru);
          if (mu) {
            let Ku = Eu.resolve(Ru - Eu.from, yu);
            for (let Ru of mu)
              if (Ru.test(Ku, uu)) {
                let yu = uu.facet(Ru.facet);
                return "replace" == Ru.type ? yu : yu.concat(Qu)
              }
          }
          return Qu
        }))].concat(yu)
      }
      isActiveAt(uu, Ru) {
        return xu(uu, Ru, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Xu) == this.data
      }
      findRegions(uu) {
        let Ru = uu.facet(Du);
        if ((null === Ru || void 0 === Ru ? void 0 : Ru.data) == this.data) return [{
          from: 0,
          to: uu.doc.length
        }];
        if (!Ru || !Ru.allowsNesting) return [];
        let yu = [],
          Eu = (uu, Ru) => {
            if (uu.prop(Xu) == this.data) return void yu.push({
              from: Ru,
              to: Ru + uu.length
            });
            let Qu = uu.prop(Ku.i.mounted);
            if (Qu) {
              if (Qu.tree.prop(Xu) == this.data) {
                if (Qu.overlay)
                  for (let uu of Qu.overlay) yu.push({
                    from: uu.from + Ru,
                    to: uu.to + Ru
                  });
                else yu.push({
                  from: Ru,
                  to: Ru + uu.length
                });
                return
              }
              if (Qu.overlay) {
                let uu = yu.length;
                if (Eu(Qu.tree, Qu.overlay[0].from + Ru), yu.length > uu) return
              }
            }
            for (let yu = 0; yu < uu.children.length; yu++) {
              let Qu = uu.children[yu];
              Qu instanceof Ku.t && Eu(Qu, uu.positions[yu] + Ru)
            }
          };
        return Eu(pu(uu), 0), yu
      }
      get allowsNesting() {
        return !0
      }
    }

    function xu(uu, Ru, yu) {
      let Eu = uu.facet(Du),
        Qu = pu(uu).topNode;
      if (!Eu || Eu.allowsNesting)
        for (let mu = Qu; mu; mu = mu.enter(Ru, yu, Ku.f.ExcludeBuffers | Ku.f.EnterBracketed)) mu.type.isTop && (Qu = mu);
      return Qu
    }
    Bu.setState = Qu.B.define();
    class Su extends Bu {
      constructor(uu, Ru, yu) {
        super(uu, Ru, [], yu), this.parser = Ru
      }
      static define(uu) {
        let Ru = Vu(uu.languageData);
        return new Su(Ru, uu.parser.configure({
          props: [Xu.add((uu => uu.isTop ? Ru : void 0))]
        }), uu.name)
      }
      configure(uu, Ru) {
        return new Su(this.data, this.parser.configure(uu), Ru || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function pu(uu) {
      let Ru = uu.field(Bu.state, !1);
      return Ru ? Ru.tree : Ku.t.empty
    }

    function Tu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.doc.length;
      var yu;
      return (null === (yu = uu.field(Bu.state, !1)) || void 0 === yu ? void 0 : yu.context.isDone(Ru)) || !1
    }

    function Wu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.viewport.to,
        yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Eu = function(uu, Ru) {
          let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Eu;
          let Ku = null === (Eu = uu.field(Bu.state, !1)) || void 0 === Eu ? void 0 : Eu.context;
          if (!Ku) return null;
          let Qu = Ku.viewport;
          Ku.updateViewport({
            from: 0,
            to: Ru
          });
          let mu = Ku.isDone(Ru) || Ku.work(yu, Ru) ? Ku.tree : null;
          return Ku.updateViewport(Qu), mu
        }(uu.state, Ru, yu);
      return Eu != pu(uu.state) && uu.dispatch({}), !!Eu
    }
    class ju {
      constructor(uu) {
        this.doc = uu, this.cursorPos = 0, this.string = "", this.cursor = uu.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(uu) {
        return this.string = this.cursor.next(uu - this.cursorPos).value, this.cursorPos = uu + this.string.length, this.cursorPos - this.string.length
      }
      chunk(uu) {
        return this.syncTo(uu), this.string
      }
      get lineChunks() {
        return !0
      }
      read(uu, Ru) {
        let yu = this.cursorPos - this.string.length;
        return uu < yu || Ru >= this.cursorPos ? this.doc.sliceString(uu, Ru) : this.string.slice(uu - yu, Ru - yu)
      }
    }
    let Hu = null;
    class du {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Eu = arguments.length > 3 ? arguments[3] : void 0,
          Ku = arguments.length > 4 ? arguments[4] : void 0,
          Qu = arguments.length > 5 ? arguments[5] : void 0,
          mu = arguments.length > 6 ? arguments[6] : void 0,
          Ju = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = uu, this.state = Ru, this.fragments = yu, this.tree = Eu, this.treeLen = Ku, this.viewport = Qu, this.skipped = mu, this.scheduleOn = Ju, this.parse = null, this.tempSkipped = []
      }
      static create(uu, Ru, yu) {
        return new du(uu, Ru, [], Ku.t.empty, 0, yu, [], null)
      }
      startParse() {
        return this.parser.startParse(new ju(this.state.doc), this.fragments)
      }
      work(uu, Ru) {
        return null != Ru && Ru >= this.state.doc.length && (Ru = void 0), this.tree != Ku.t.empty && this.isDone(null !== Ru && void 0 !== Ru ? Ru : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var yu;
          if ("number" == typeof uu) {
            let Ru = Date.now() + uu;
            uu = () => Date.now() > Ru
          }
          for (this.parse || (this.parse = this.startParse()), null != Ru && (null == this.parse.stoppedAt || this.parse.stoppedAt > Ru) && Ru < this.state.doc.length && this.parse.stopAt(Ru);;) {
            let Eu = this.parse.advance();
            if (Eu) {
              if (this.fragments = this.withoutTempSkipped(Ku.r.addTree(Eu, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (yu = this.parse.stoppedAt) && void 0 !== yu ? yu : this.state.doc.length, this.tree = Eu, this.parse = null, !(this.treeLen < (null !== Ru && void 0 !== Ru ? Ru : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (uu()) return !1
          }
        }))
      }
      takeTree() {
        let uu, Ru;
        this.parse && (uu = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > uu) && this.parse.stopAt(uu), this.withContext((() => {
          for (; !(Ru = this.parse.advance()););
        })), this.treeLen = uu, this.tree = Ru, this.fragments = this.withoutTempSkipped(Ku.r.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(uu) {
        let Ru = Hu;
        Hu = this;
        try {
          return uu()
        } finally {
          Hu = Ru
        }
      }
      withoutTempSkipped(uu) {
        for (let Ru; Ru = this.tempSkipped.pop();) uu = bu(uu, Ru.from, Ru.to);
        return uu
      }
      changes(uu, Ru) {
        let {
          fragments: yu,
          tree: Eu,
          treeLen: Qu,
          viewport: mu,
          skipped: Ju
        } = this;
        if (this.takeTree(), !uu.empty) {
          let Ru = [];
          if (uu.iterChangedRanges(((uu, yu, Eu, Ku) => Ru.push({
              fromA: uu,
              toA: yu,
              fromB: Eu,
              toB: Ku
            }))), yu = Ku.r.applyChanges(yu, Ru), Eu = Ku.t.empty, Qu = 0, mu = {
              from: uu.mapPos(mu.from, -1),
              to: uu.mapPos(mu.to, 1)
            }, this.skipped.length) {
            Ju = [];
            for (let Ru of this.skipped) {
              let yu = uu.mapPos(Ru.from, 1),
                Eu = uu.mapPos(Ru.to, -1);
              yu < Eu && Ju.push({
                from: yu,
                to: Eu
              })
            }
          }
        }
        return new du(this.parser, Ru, yu, Eu, Qu, mu, Ju, this.scheduleOn)
      }
      updateViewport(uu) {
        if (this.viewport.from == uu.from && this.viewport.to == uu.to) return !1;
        this.viewport = uu;
        let Ru = this.skipped.length;
        for (let yu = 0; yu < this.skipped.length; yu++) {
          let {
            from: Ru,
            to: Eu
          } = this.skipped[yu];
          Ru < uu.to && Eu > uu.from && (this.fragments = bu(this.fragments, Ru, Eu), this.skipped.splice(yu--, 1))
        }
        return !(this.skipped.length >= Ru) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(uu, Ru) {
        this.skipped.push({
          from: uu,
          to: Ru
        })
      }
      static getSkippingParser(uu) {
        return new class extends Ku.p {
          createParse(Ru, yu, Eu) {
            let Qu = Eu[0].from,
              mu = Eu[Eu.length - 1].to;
            return {
              parsedPos: Qu,
              advance() {
                let Ru = Hu;
                if (Ru) {
                  for (let uu of Eu) Ru.tempSkipped.push(uu);
                  uu && (Ru.scheduleOn = Ru.scheduleOn ? Promise.all([Ru.scheduleOn, uu]) : uu)
                }
                return this.parsedPos = mu, new Ku.t(Ku.k.none, [], [], mu - Qu)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(uu) {
        uu = Math.min(uu, this.state.doc.length);
        let Ru = this.fragments;
        return this.treeLen >= uu && Ru.length && 0 == Ru[0].from && Ru[0].to >= uu
      }
      static get() {
        return Hu
      }
    }

    function bu(uu, Ru, yu) {
      return Ku.r.applyChanges(uu, [{
        fromA: Ru,
        toA: yu,
        fromB: Ru,
        toB: yu
      }])
    }
    class Cu {
      constructor(uu) {
        this.context = uu, this.tree = uu.tree
      }
      apply(uu) {
        if (!uu.docChanged && this.tree == this.context.tree) return this;
        let Ru = this.context.changes(uu.changes, uu.state),
          yu = this.context.treeLen == uu.startState.doc.length ? void 0 : Math.max(uu.changes.mapPos(this.context.treeLen), Ru.viewport.to);
        return Ru.work(20, yu) || Ru.takeTree(), new Cu(Ru)
      }
      static init(uu) {
        let Ru = Math.min(3e3, uu.doc.length),
          yu = du.create(uu.facet(Du).parser, uu, {
            from: 0,
            to: Ru
          });
        return yu.work(20, Ru) || yu.takeTree(), new Cu(yu)
      }
    }
    Bu.state = Qu.E.define({
      create: Cu.init,
      update(uu, Ru) {
        for (let yu of Ru.effects)
          if (yu.is(Bu.setState)) return yu.value;
        return Ru.startState.facet(Du) != Ru.state.facet(Du) ? Cu.init(Ru.state) : uu.apply(Ru)
      }
    });
    let ku = uu => {
      let Ru = setTimeout((() => uu()), 500);
      return () => clearTimeout(Ru)
    };
    "undefined" != typeof requestIdleCallback && (ku = uu => {
      let Ru = -1,
        yu = setTimeout((() => {
          Ru = requestIdleCallback(uu, {
            timeout: 400
          })
        }), 100);
      return () => Ru < 0 ? clearTimeout(yu) : cancelIdleCallback(Ru)
    });
    const eu = "undefined" != typeof navigator && (null === (Eu = navigator.scheduling) || void 0 === Eu ? void 0 : Eu.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      Au = mu.k.fromClass(class {
        constructor(uu) {
          this.view = uu, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(uu) {
          let Ru = this.view.state.field(Bu.state).context;
          (Ru.updateViewport(uu.view.viewport) || this.view.viewport.to > Ru.treeLen) && this.scheduleWork(), (uu.docChanged || uu.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(Ru)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: uu
          } = this.view, Ru = uu.field(Bu.state);
          Ru.tree == Ru.context.tree && Ru.context.isDone(uu.doc.length) || (this.working = ku(this.work))
        }
        work(uu) {
          this.working = null;
          let Ru = Date.now();
          if (this.chunkEnd < Ru && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = Ru + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: yu,
            viewport: {
              to: Eu
            }
          } = this.view, Ku = yu.field(Bu.state);
          if (Ku.tree == Ku.context.tree && Ku.context.isDone(Eu + 1e5)) return;
          let Qu = Date.now() + Math.min(this.chunkBudget, 100, uu && !eu ? Math.max(25, uu.timeRemaining() - 5) : 1e9),
            mu = Ku.context.treeLen < Eu && yu.doc.length > Eu + 1e3,
            Ju = Ku.context.work((() => eu && eu() || Date.now() > Qu), Eu + (mu ? 0 : 1e5));
          this.chunkBudget -= Date.now() - Ru, (Ju || this.chunkBudget <= 0) && (Ku.context.takeTree(), this.view.dispatch({
            effects: Bu.setState.of(new Cu(Ku.context))
          })), this.chunkBudget > 0 && (!Ju || mu) && this.scheduleWork(), this.checkAsyncSchedule(Ku.context)
        }
        checkAsyncSchedule(uu) {
          uu.scheduleOn && (this.workScheduled++, uu.scheduleOn.then((() => this.scheduleWork())).catch((uu => (0, mu.X)(this.view.state, uu))).then((() => this.workScheduled--)), uu.scheduleOn = null)
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
      Du = Qu.q.define({
        combine: uu => uu.length ? uu[0] : null,
        enables: uu => [Bu.state, Au, mu.f.contentAttributes.compute([uu], (Ru => {
          let yu = Ru.facet(uu);
          return yu && yu.name ? {
            "data-language": yu.name
          } : {}
        }))]
      });
    class Mu {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = uu, this.support = Ru, this.extension = [uu, Ru]
      }
    }
    const Iu = Qu.q.define(),
      Gu = Qu.q.define({
        combine: uu => {
          if (!uu.length) return "  ";
          let Ru = uu[0];
          if (!Ru || /\S/.test(Ru) || Array.from(Ru).some((uu => uu != Ru[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(uu[0]));
          return Ru
        }
      });

    function Uu(uu) {
      let Ru = uu.facet(Gu);
      return 9 == Ru.charCodeAt(0) ? uu.tabSize * Ru.length : Ru.length
    }

    function nu(uu, Ru) {
      let yu = "",
        Eu = uu.tabSize,
        Ku = uu.facet(Gu)[0];
      if ("\t" == Ku) {
        for (; Ru >= Eu;) yu += "\t", Ru -= Eu;
        Ku = " "
      }
      for (let Qu = 0; Qu < Ru; Qu++) yu += Ku;
      return yu
    }

    function su(uu, Ru) {
      uu instanceof Qu.o && (uu = new tu(uu));
      for (let Eu of uu.state.facet(Iu)) {
        let yu = Eu(uu, Ru);
        if (void 0 !== yu) return yu
      }
      let yu = pu(uu.state);
      return yu.length >= Ru ? function(uu, Ru, yu) {
        let Eu = Ru.resolveStack(yu),
          Ku = Ru.resolveInner(yu, -1).resolve(yu, 0).enterUnfinishedNodesBefore(yu);
        if (Ku != Eu.node) {
          let uu = [];
          for (let Ru = Ku; Ru && !(Ru.from < Eu.node.from || Ru.to > Eu.node.to || Ru.from == Eu.node.from && Ru.type == Eu.node.type); Ru = Ru.parent) uu.push(Ru);
          for (let Ru = uu.length - 1; Ru >= 0; Ru--) Eu = {
            node: uu[Ru],
            next: Eu
          }
        }
        return gu(Eu, uu, yu)
      }(uu, yu, Ru) : null
    }
    class tu {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = uu, this.options = Ru, this.unit = Uu(uu)
      }
      lineAt(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          yu = this.state.doc.lineAt(uu),
          {
            simulateBreak: Eu,
            simulateDoubleBreak: Ku
          } = this.options;
        return null != Eu && Eu >= yu.from && Eu <= yu.to ? Ku && Eu == uu ? {
          text: "",
          from: uu
        } : (Ru < 0 ? Eu < uu : Eu <= uu) ? {
          text: yu.text.slice(Eu - yu.from),
          from: Eu
        } : {
          text: yu.text.slice(0, Eu - yu.from),
          from: yu.from
        } : yu
      }
      textAfterPos(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && uu == this.options.simulateBreak) return "";
        let {
          text: yu,
          from: Eu
        } = this.lineAt(uu, Ru);
        return yu.slice(uu - Eu, Math.min(yu.length, uu + 100 - Eu))
      }
      column(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: yu,
            from: Eu
          } = this.lineAt(uu, Ru),
          Ku = this.countColumn(yu, uu - Eu),
          Qu = this.options.overrideIndentation ? this.options.overrideIndentation(Eu) : -1;
        return Qu > -1 && (Ku += Qu - this.countColumn(yu, yu.search(/\S|$/))), Ku
      }
      countColumn(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.length;
        return (0, Qu.R)(uu, this.state.tabSize, Ru)
      }
      lineIndent(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: yu,
            from: Eu
          } = this.lineAt(uu, Ru),
          Ku = this.options.overrideIndentation;
        if (Ku) {
          let uu = Ku(Eu);
          if (uu > -1) return uu
        }
        return this.countColumn(yu, yu.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const lu = new Ku.i;

    function gu(uu, Ru, yu) {
      for (let Eu = uu; Eu; Eu = Eu.next) {
        let uu = cu(Eu.node);
        if (uu) return uu(zu.create(Ru, yu, Eu))
      }
      return 0
    }

    function cu(uu) {
      let Ru = uu.type.prop(lu);
      if (Ru) return Ru;
      let yu, Eu = uu.firstChild;
      if (Eu && (yu = Eu.type.prop(Ku.i.closedBy))) {
        let Ru = uu.lastChild,
          Eu = Ru && yu.indexOf(Ru.name) > -1;
        return uu => Zu(uu, !0, 1, void 0, Eu && ! function(uu) {
          return uu.pos == uu.options.simulateBreak && uu.options.simulateDoubleBreak
        }(uu) ? Ru.from : void 0)
      }
      return null == uu.parent ? Lu : null
    }

    function Lu() {
      return 0
    }
    class zu extends tu {
      constructor(uu, Ru, yu) {
        super(uu.state, uu.options), this.base = uu, this.pos = Ru, this.context = yu
      }
      get node() {
        return this.context.node
      }
      static create(uu, Ru, yu) {
        return new zu(uu, Ru, yu)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(uu) {
        let Ru = this.state.doc.lineAt(uu.from);
        for (;;) {
          let yu = uu.resolve(Ru.from);
          for (; yu.parent && yu.parent.from == yu.from;) yu = yu.parent;
          if (Fu(yu, uu)) break;
          Ru = this.state.doc.lineAt(yu.from)
        }
        return this.lineIndent(Ru.from)
      }
      continue () {
        return gu(this.context.next, this.base, this.pos)
      }
    }

    function Fu(uu, Ru) {
      for (let yu = Ru; yu; yu = yu.parent)
        if (uu == yu) return !0;
      return !1
    }

    function wu(uu) {
      let {
        closing: Ru,
        align: yu = !0,
        units: Eu = 1
      } = uu;
      return uu => Zu(uu, yu, Eu, Ru)
    }

    function Zu(uu, Ru, yu, Eu, Ku) {
      let Qu = uu.textAfter,
        mu = Qu.match(/^\s*/)[0].length,
        Ju = Eu && Qu.slice(mu, mu + Eu.length) == Eu || Ku == uu.pos + mu,
        Nu = Ru ? function(uu) {
          let Ru = uu.node,
            yu = Ru.childAfter(Ru.from),
            Eu = Ru.lastChild;
          if (!yu) return null;
          let Ku = uu.options.simulateBreak,
            Qu = uu.state.doc.lineAt(yu.from),
            mu = null == Ku || Ku <= Qu.from ? Qu.to : Math.min(Qu.to, Ku);
          for (let Ju = yu.to;;) {
            let uu = Ru.childAfter(Ju);
            if (!uu || uu == Eu) return null;
            if (!uu.type.isSkipped) {
              if (uu.from >= mu) return null;
              let Ru = /^ */.exec(Qu.text.slice(yu.to - Qu.from))[0].length;
              return {
                from: yu.from,
                to: yu.to + Ru
              }
            }
            Ju = uu.to
          }
        }(uu) : null;
      return Nu ? Ju ? uu.column(Nu.from) : uu.column(Nu.to) : uu.baseIndent + (Ju ? 0 : uu.unit * yu)
    }
    const hu = uu => uu.baseIndent;

    function Pu() {
      let {
        except: uu,
        units: Ru = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return yu => {
        let Eu = uu && uu.test(yu.textAfter);
        return yu.baseIndent + (Eu ? 0 : Ru * yu.unit)
      }
    }
    const iu = 200;

    function Yu() {
      return Qu.o.transactionFilter.of((uu => {
        if (!uu.docChanged || !uu.isUserEvent("input.type") && !uu.isUserEvent("input.complete")) return uu;
        let Ru = uu.startState.languageDataAt("indentOnInput", uu.startState.selection.main.head);
        if (!Ru.length) return uu;
        let yu = uu.newDoc,
          {
            head: Eu
          } = uu.newSelection.main,
          Ku = yu.lineAt(Eu);
        if (Eu > Ku.from + iu) return uu;
        let Qu = yu.sliceString(Ku.from, Eu);
        if (!Ru.some((uu => uu.test(Qu)))) return uu;
        let {
          state: mu
        } = uu, Ju = -1, Nu = [];
        for (let {
            head: Xu
          }
          of mu.selection.yT) {
          let uu = mu.doc.lineAt(Xu);
          if (uu.from == Ju) continue;
          Ju = uu.from;
          let Ru = su(mu, uu.from);
          if (null == Ru) continue;
          let yu = /^\s*/.exec(uu.text)[0],
            Eu = nu(mu, Ru);
          yu != Eu && Nu.push({
            from: uu.from,
            to: uu.from + yu.length,
            insert: Eu
          })
        }
        return Nu.length ? [uu, {
          changes: Nu,
          sequential: !0
        }] : uu
      }))
    }
    const ou = Qu.q.define(),
      qu = new Ku.i;

    function Ou(uu) {
      let Ru = uu.firstChild,
        yu = uu.lastChild;
      return Ru && Ru.to < yu.from ? {
        from: Ru.to,
        to: yu.type.isError ? uu.to : yu.from
      } : null
    }

    function vu(uu) {
      let Ru = uu.lastChild;
      return Ru && Ru.to == uu.to && Ru.type.isError
    }

    function au(uu, Ru, yu) {
      for (let Eu of uu.facet(ou)) {
        let Ku = Eu(uu, Ru, yu);
        if (Ku) return Ku
      }
      return function(uu, Ru, yu) {
        let Eu = pu(uu);
        if (Eu.length < yu) return null;
        let Ku = null;
        for (let Qu = Eu.resolveStack(yu, 1); Qu; Qu = Qu.next) {
          let mu = Qu.node;
          if (mu.to <= yu || mu.from > yu) continue;
          if (Ku && mu.from < Ru) break;
          let Ju = mu.type.prop(qu);
          if (Ju && (mu.to < Eu.length - 50 || Eu.length == uu.doc.length || !vu(mu))) {
            let Eu = Ju(mu, uu);
            Eu && Eu.from <= yu && Eu.from >= Ru && Eu.to > yu && (Ku = Eu)
          }
        }
        return Ku
      }(uu, Ru, yu)
    }

    function fu(uu, Ru) {
      let yu = Ru.mapPos(uu.from, 1),
        Eu = Ru.mapPos(uu.to, -1);
      return yu >= Eu ? void 0 : {
        from: yu,
        to: Eu
      }
    }
    const uR = Qu.B.define({
        map: fu
      }),
      RR = Qu.B.define({
        map: fu
      });

    function yR(uu) {
      let Ru = [];
      for (let {
          head: yu
        }
        of uu.state.selection.yT) Ru.some((uu => uu.from <= yu && uu.to >= yu)) || Ru.push(uu.lineBlockAt(yu));
      return Ru
    }
    const ER = Qu.E.define({
      create: () => mu.c.none,
      update(uu, Ru) {
        Ru.isUserEvent("delete") && Ru.changes.iterChangedRanges(((Ru, yu) => uu = KR(uu, Ru, yu))), uu = uu.map(Ru.changes);
        for (let yu of Ru.effects)
          if (yu.is(uR) && !mR(uu, yu.value.from, yu.value.to)) {
            let {
              preparePlaceholder: Eu
            } = Ru.state.facet(rR), Ku = Eu ? mu.c.replace({
              widget: new pR(Eu(Ru.state, yu.value))
            }) : SR;
            uu = uu.update({
              add: [Ku.range(yu.value.from, yu.value.to)]
            })
          } else yu.is(RR) && (uu = uu.update({
            filter: (uu, Ru) => yu.value.from != uu || yu.value.to != Ru,
            filterFrom: yu.value.from,
            filterTo: yu.value.to
          }));
        return Ru.selection && (uu = KR(uu, Ru.selection.main.head)), uu
      },
      provide: uu => mu.f.lE.from(uu),
      toJSON(uu, Ru) {
        let yu = [];
        return uu.between(0, Ru.doc.length, ((uu, Ru) => {
          yu.push(uu, Ru)
        })), yu
      },
      fromJSON(uu) {
        if (!Array.isArray(uu) || uu.length % 2) throw new RangeError("Invalid JSON for fold state");
        let Ru = [];
        for (let yu = 0; yu < uu.length;) {
          let Eu = uu[yu++],
            Ku = uu[yu++];
          if ("number" != typeof Eu || "number" != typeof Ku) throw new RangeError("Invalid JSON for fold state");
          Ru.push(SR.range(Eu, Ku))
        }
        return mu.c.set(Ru, !0)
      }
    });

    function KR(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ru,
        Eu = !1;
      return uu.between(Ru, yu, ((uu, Ku) => {
        uu < yu && Ku > Ru && (Eu = !0)
      })), Eu ? uu.update({
        filterFrom: Ru,
        filterTo: yu,
        filter: (uu, Eu) => uu >= yu || Eu <= Ru
      }) : uu
    }

    function QR(uu, Ru, yu) {
      var Eu;
      let Ku = null;
      return null === (Eu = uu.field(ER, !1)) || void 0 === Eu || Eu.between(Ru, yu, ((uu, Ru) => {
        (!Ku || Ku.from > uu) && (Ku = {
          from: uu,
          to: Ru
        })
      })), Ku
    }

    function mR(uu, Ru, yu) {
      let Eu = !1;
      return uu.between(Ru, Ru, ((uu, Ku) => {
        uu == Ru && Ku == yu && (Eu = !0)
      })), Eu
    }

    function JR(uu, Ru) {
      return uu.field(ER, !1) ? Ru : Ru.concat(Qu.B.appendConfig.of(BR()))
    }

    function NR(uu, Ru) {
      let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Eu = uu.state.doc.lineAt(Ru.from).number,
        Ku = uu.state.doc.lineAt(Ru.to).number;
      return mu.f.announce.of(`${uu.state.phrase(yu?"Folded lines":"Unfolded lines")} ${Eu} ${uu.state.phrase("to")} ${Ku}.`)
    }
    const XR = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: uu => {
          for (let Ru of yR(uu)) {
            let yu = au(uu.state, Ru.from, Ru.to);
            if (yu) return uu.dispatch({
              effects: JR(uu.state, [uR.of(yu), NR(uu, yu)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: uu => {
          if (!uu.state.field(ER, !1)) return !1;
          let Ru = [];
          for (let yu of yR(uu)) {
            let Eu = QR(uu.state, yu.from, yu.to);
            Eu && Ru.push(RR.of(Eu), NR(uu, Eu, !1))
          }
          return Ru.length && uu.dispatch({
            effects: Ru
          }), Ru.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: uu => {
          let {
            state: Ru
          } = uu, yu = [];
          for (let Eu = 0; Eu < Ru.doc.length;) {
            let Ku = uu.lineBlockAt(Eu),
              Qu = au(Ru, Ku.from, Ku.to);
            Qu && yu.push(uR.of(Qu)), Eu = (Qu ? uu.lineBlockAt(Qu.to) : Ku).to + 1
          }
          return yu.length && uu.dispatch({
            effects: JR(uu.state, yu)
          }), !!yu.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: uu => {
          let Ru = uu.state.field(ER, !1);
          if (!Ru || !Ru.size) return !1;
          let yu = [];
          return Ru.between(0, uu.state.doc.length, ((uu, Ru) => {
            yu.push(RR.of({
              from: uu,
              to: Ru
            }))
          })), uu.dispatch({
            effects: yu
          }), !0
        }
      }],
      VR = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      rR = Qu.q.define({
        combine: uu => (0, Qu.P)(uu, VR)
      });

    function BR(uu) {
      let Ru = [ER, HR];
      return uu && Ru.push(rR.of(uu)), Ru
    }

    function xR(uu, Ru) {
      let {
        state: yu
      } = uu, Eu = yu.facet(rR), Ku = Ru => {
        let yu = uu.lineBlockAt(uu.posAtDOM(Ru.target)),
          Eu = QR(uu.state, yu.from, yu.to);
        Eu && uu.dispatch({
          effects: RR.of(Eu)
        }), Ru.preventDefault()
      };
      if (Eu.placeholderDOM) return Eu.placeholderDOM(uu, Ku, Ru);
      let Qu = document.createElement("span");
      return Qu.textContent = Eu.placeholderText, Qu.setAttribute("aria-label", yu.phrase("folded code")), Qu.title = yu.phrase("unfold"), Qu.className = "cm-foldPlaceholder", Qu.onclick = Ku, Qu
    }
    const SR = mu.c.replace({
      widget: new class extends mu.n {
        toDOM(uu) {
          return xR(uu, null)
        }
      }
    });
    class pR extends mu.n {
      constructor(uu) {
        super(), this.value = uu
      }
      eq(uu) {
        return this.value == uu.value
      }
      toDOM(uu) {
        return xR(uu, this.value)
      }
    }
    const TR = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class WR extends mu.i {
      constructor(uu, Ru) {
        super(), this.config = uu, this.open = Ru
      }
      eq(uu) {
        return this.config == uu.config && this.open == uu.open
      }
      toDOM(uu) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let Ru = document.createElement("span");
        return Ru.textContent = this.open ? this.config.openText : this.config.closedText, Ru.title = uu.state.phrase(this.open ? "Fold line" : "Unfold line"), Ru
      }
    }

    function jR() {
      let uu = {
          ...TR,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        Ru = new WR(uu, !0),
        yu = new WR(uu, !1),
        Eu = mu.k.fromClass(class {
          constructor(uu) {
            this.from = uu.viewport.from, this.markers = this.buildMarkers(uu)
          }
          update(Ru) {
            (Ru.docChanged || Ru.viewportChanged || Ru.startState.facet(Du) != Ru.state.facet(Du) || Ru.startState.field(ER, !1) != Ru.state.field(ER, !1) || pu(Ru.startState) != pu(Ru.state) || uu.foldingChanged(Ru)) && (this.markers = this.buildMarkers(Ru.view))
          }
          buildMarkers(uu) {
            let Eu = new Qu.w;
            for (let Ku of uu.viewportLineBlocks) {
              let Qu = QR(uu.state, Ku.from, Ku.to) ? yu : au(uu.state, Ku.from, Ku.to) ? Ru : null;
              Qu && Eu.add(Ku.from, Ku.from, Qu)
            }
            return Eu.finish()
          }
        }),
        {
          domEventHandlers: Ku
        } = uu;
      return [Eu, (0, mu.F)({
        class: "cm-foldGutter",
        markers(uu) {
          var Ru;
          return (null === (Ru = uu.plugin(Eu)) || void 0 === Ru ? void 0 : Ru.markers) || Qu.x.empty
        },
        initialSpacer: () => new WR(uu, !1),
        domEventHandlers: {
          ...Ku,
          click: (uu, Ru, yu) => {
            if (Ku.click && Ku.click(uu, Ru, yu)) return !0;
            let Eu = QR(uu.state, Ru.from, Ru.to);
            if (Eu) return uu.dispatch({
              effects: RR.of(Eu)
            }), !0;
            let Qu = au(uu.state, Ru.from, Ru.to);
            return !!Qu && (uu.dispatch({
              effects: uR.of(Qu)
            }), !0)
          }
        }
      }), BR()]
    }
    const HR = mu.f.baseTheme({
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
    class dR {
      constructor(uu, Ru) {
        let yu;

        function Eu(uu) {
          let Ru = Nu.b.newName();
          return (yu || (yu = Object.create(null)))["." + Ru] = uu, Ru
        }
        this.specs = uu;
        const Ku = "string" == typeof Ru.all ? Ru.all : Ru.all ? Eu(Ru.all) : void 0,
          Qu = Ru.scope;
        this.scope = Qu instanceof Bu ? uu => uu.prop(Xu) == Qu.data : Qu ? uu => uu == Qu : void 0, this.style = (0, Ju.l)(uu.map((uu => ({
          tag: uu.tag,
          class: uu.class || Eu(Object.assign({}, uu, {
            tag: null
          }))
        }))), {
          all: Ku
        }).style, this.module = yu ? new Nu.b(yu) : null, this.themeType = Ru.themeType
      }
      static define(uu, Ru) {
        return new dR(uu, Ru || {})
      }
    }
    const bR = Qu.q.define(),
      CR = Qu.q.define({
        combine: uu => uu.length ? [uu[0]] : null
      });

    function kR(uu) {
      let Ru = uu.facet(bR);
      return Ru.length ? Ru : uu.facet(CR)
    }

    function eR(uu, Ru) {
      let yu, Eu = [DR];
      return uu instanceof dR && (uu.module && Eu.push(mu.f.styleModule.of(uu.module)), yu = uu.themeType), (null === Ru || void 0 === Ru ? void 0 : Ru.fallback) ? Eu.push(CR.of(uu)) : yu ? Eu.push(bR.computeN([mu.f.darkTheme], (Ru => Ru.facet(mu.f.darkTheme) == ("dark" == yu) ? [uu] : []))) : Eu.push(bR.of(uu)), Eu
    }
    class AR {
      constructor(uu) {
        this.markCache = Object.create(null), this.tree = pu(uu.state), this.lE = this.buildDeco(uu, kR(uu.state)), this.decoratedTo = uu.viewport.to
      }
      update(uu) {
        let Ru = pu(uu.state),
          yu = kR(uu.state),
          Eu = yu != kR(uu.startState),
          {
            viewport: Ku
          } = uu.view,
          Qu = uu.changes.mapPos(this.decoratedTo, 1);
        Ru.length < Ku.to && !Eu && Ru.type == this.tree.type && Qu >= Ku.to ? (this.lE = this.lE.map(uu.changes), this.decoratedTo = Qu) : (Ru != this.tree || uu.viewportChanged || Eu) && (this.tree = Ru, this.lE = this.buildDeco(uu.view, yu), this.decoratedTo = Ku.to)
      }
      buildDeco(uu, Ru) {
        if (!Ru || !this.tree.length) return mu.c.none;
        let yu = new Qu.w;
        for (let {
            from: Eu,
            to: Ku
          }
          of uu.o4)(0, Ju.e)(this.tree, Ru, ((uu, Ru, Eu) => {
          yu.add(uu, Ru, this.markCache[Eu] || (this.markCache[Eu] = mu.c.mark({
            class: Eu
          })))
        }), Eu, Ku);
        return yu.finish()
      }
    }
    const DR = Qu.t.high(mu.k.fromClass(AR, {
        lE: uu => uu.lE
      })),
      MR = dR.define([{
        tag: Ju.p.meta,
        color: "#404740"
      }, {
        tag: Ju.p.link,
        textDecoration: "underline"
      }, {
        tag: Ju.p.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: Ju.p.emphasis,
        fontStyle: "italic"
      }, {
        tag: Ju.p.strong,
        fontWeight: "bold"
      }, {
        tag: Ju.p.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Ju.p.keyword,
        color: "#708"
      }, {
        tag: [Ju.p.atom, Ju.p.bool, Ju.p.url, Ju.p.contentSeparator, Ju.p.labelName],
        color: "#219"
      }, {
        tag: [Ju.p.literal, Ju.p.inserted],
        color: "#164"
      }, {
        tag: [Ju.p.string, Ju.p.deleted],
        color: "#a11"
      }, {
        tag: [Ju.p.regexp, Ju.p.escape, Ju.p.special(Ju.p.string)],
        color: "#e40"
      }, {
        tag: Ju.p.definition(Ju.p.variableName),
        color: "#00f"
      }, {
        tag: Ju.p.local(Ju.p.variableName),
        color: "#30a"
      }, {
        tag: [Ju.p.typeName, Ju.p.namespace],
        color: "#085"
      }, {
        tag: Ju.p.className,
        color: "#167"
      }, {
        tag: [Ju.p.special(Ju.p.variableName), Ju.p.macroName],
        color: "#256"
      }, {
        tag: Ju.p.definition(Ju.p.propertyName),
        color: "#00c"
      }, {
        tag: Ju.p.comment,
        color: "#940"
      }, {
        tag: Ju.p.invalid,
        color: "#f00"
      }]),
      IR = mu.f.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      GR = 1e4,
      UR = "()[]{}",
      nR = Qu.q.define({
        combine: uu => (0, Qu.P)(uu, {
          afterCursor: !0,
          brackets: UR,
          maxScanDistance: GR,
          renderMatch: lR
        })
      }),
      sR = mu.c.mark({
        class: "cm-matchingBracket"
      }),
      tR = mu.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function lR(uu) {
      let Ru = [],
        yu = uu.matched ? sR : tR;
      return Ru.push(yu.range(uu.start.from, uu.start.to)), uu.end && Ru.push(yu.range(uu.end.from, uu.end.to)), Ru
    }

    function gR(uu) {
      let Ru = [],
        yu = uu.facet(nR);
      for (let Eu of uu.selection.yT) {
        if (!Eu.empty) continue;
        let Ku = ZR(uu, Eu.head, -1, yu) || Eu.head > 0 && ZR(uu, Eu.head - 1, 1, yu) || yu.afterCursor && (ZR(uu, Eu.head, 1, yu) || Eu.head < uu.doc.length && ZR(uu, Eu.head + 1, -1, yu));
        Ku && (Ru = Ru.concat(yu.renderMatch(Ku, uu)))
      }
      return mu.c.set(Ru, !0)
    }
    const cR = [mu.k.fromClass(class {
      constructor(uu) {
        this.paused = !1, this.lE = gR(uu.state)
      }
      update(uu) {
        (uu.docChanged || uu.selectionSet || this.paused) && (uu.view.composing ? (this.lE = this.lE.map(uu.changes), this.paused = !0) : (this.lE = gR(uu.state), this.paused = !1))
      }
    }, {
      lE: uu => uu.lE
    }), IR];

    function LR() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [nR.of(uu), cR]
    }
    const zR = new Ku.i;

    function FR(uu, Ru, yu) {
      let Eu = uu.prop(Ru < 0 ? Ku.i.openedBy : Ku.i.closedBy);
      if (Eu) return Eu;
      if (1 == uu.name.length) {
        let Eu = yu.indexOf(uu.name);
        if (Eu > -1 && Eu % 2 == (Ru < 0 ? 1 : 0)) return [yu[Eu + Ru]]
      }
      return null
    }

    function wR(uu) {
      let Ru = uu.type.prop(zR);
      return Ru ? Ru(uu.node) : uu
    }

    function ZR(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Ku = Eu.maxScanDistance || GR,
        Qu = Eu.brackets || UR,
        mu = pu(uu),
        Ju = mu.resolveInner(Ru, yu);
      for (let Nu = Ju; Nu; Nu = Nu.parent) {
        let Eu = FR(Nu.type, yu, Qu);
        if (Eu && Nu.from < Nu.to) {
          let Ku = wR(Nu);
          if (Ku && (yu > 0 ? Ru >= Ku.from && Ru < Ku.to : Ru > Ku.from && Ru <= Ku.to)) return hR(uu, Ru, yu, Nu, Ku, Eu, Qu)
        }
      }
      return function(uu, Ru, yu, Eu, Ku, Qu, mu) {
        if (yu < 0 ? !Ru : Ru == uu.doc.length) return null;
        let Ju = yu < 0 ? uu.sliceDoc(Ru - 1, Ru) : uu.sliceDoc(Ru, Ru + 1),
          Nu = mu.indexOf(Ju);
        if (Nu < 0 || Nu % 2 == 0 != yu > 0) return null;
        let Xu = {
            from: yu < 0 ? Ru - 1 : Ru,
            to: yu > 0 ? Ru + 1 : Ru
          },
          Vu = uu.doc.iterRange(Ru, yu > 0 ? uu.doc.length : 0),
          ru = 0;
        for (let Bu = 0; !Vu.next().done && Bu <= Qu;) {
          let uu = Vu.value;
          yu < 0 && (Bu += uu.length);
          let Qu = Ru + Bu * yu;
          for (let Ru = yu > 0 ? 0 : uu.length - 1, Ju = yu > 0 ? uu.length : -1; Ru != Ju; Ru += yu) {
            let Ju = mu.indexOf(uu[Ru]);
            if (!(Ju < 0 || Eu.resolveInner(Qu + Ru, 1).type != Ku))
              if (Ju % 2 == 0 == yu > 0) ru++;
              else {
                if (1 == ru) return {
                  start: Xu,
                  end: {
                    from: Qu + Ru,
                    to: Qu + Ru + 1
                  },
                  matched: Ju >> 1 == Nu >> 1
                };
                ru--
              }
          }
          yu > 0 && (Bu += uu.length)
        }
        return Vu.done ? {
          start: Xu,
          matched: !1
        } : null
      }(uu, Ru, yu, mu, Ju.type, Ku, Qu)
    }

    function hR(uu, Ru, yu, Eu, Ku, Qu, mu) {
      let Ju = Eu.parent,
        Nu = {
          from: Ku.from,
          to: Ku.to
        },
        Xu = 0,
        Vu = null === Ju || void 0 === Ju ? void 0 : Ju.cursor();
      if (Vu && (yu < 0 ? Vu.childBefore(Eu.from) : Vu.childAfter(Eu.to)))
        do {
          if (yu < 0 ? Vu.to <= Eu.from : Vu.from >= Eu.to) {
            if (0 == Xu && Qu.indexOf(Vu.type.name) > -1 && Vu.from < Vu.to) {
              let uu = wR(Vu);
              return {
                start: Nu,
                end: uu ? {
                  from: uu.from,
                  to: uu.to
                } : void 0,
                matched: !0
              }
            }
            if (FR(Vu.type, yu, mu)) Xu++;
            else if (FR(Vu.type, -yu, mu)) {
              if (0 == Xu) {
                let uu = wR(Vu);
                return {
                  start: Nu,
                  end: uu && uu.from < uu.to ? {
                    from: uu.from,
                    to: uu.to
                  } : void 0,
                  matched: !1
                }
              }
              Xu--
            }
          }
        } while (yu < 0 ? Vu.prevSibling() : Vu.nextSibling());
      return {
        start: Nu,
        matched: !1
      }
    }
    const PR = Object.create(null),
      iR = [Ku.k.none],
      YR = [],
      oR = Object.create(null),
      qR = Object.create(null);
    for (let [aR, fR] of [
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
      ]) qR[aR] = vR(PR, fR);

    function OR(uu, Ru) {
      YR.indexOf(uu) > -1 || (YR.push(uu), console.warn(Ru))
    }

    function vR(uu, Ru) {
      let yu = [];
      for (let Ku of Ru.split(" ")) {
        let Ru = [];
        for (let yu of Ku.split(".")) {
          let Eu = uu[yu] || Ju.p[yu];
          Eu ? "function" == typeof Eu ? Ru.length ? Ru = Ru.map(Eu) : OR(yu, `Modifier ${yu} used at start of tag`) : Ru.length ? OR(yu, `Tag ${yu} used as modifier`) : Ru = Array.isArray(Eu) ? Eu : [Eu] : OR(yu, `Unknown highlighting tag ${yu}`)
        }
        for (let uu of Ru) yu.push(uu)
      }
      if (!yu.length) return 0;
      let Eu = Ru.replace(/ /g, "_"),
        Qu = Eu + " " + yu.map((uu => uu.id)),
        mu = oR[Qu];
      if (mu) return mu.id;
      let Nu = oR[Qu] = Ku.k.define({
        id: iR.length,
        name: Eu,
        props: [(0, Ju.h)({
          [Eu]: yu
        })]
      });
      return iR.push(Nu), Nu.id
    }
    mu.e.RTL, mu.e.LTR
  },
  40961: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Hu,
      e: () => ku
    });
    var Eu = yu(40913),
      Ku = yu(40909),
      Qu = yu(40923);
    class mu {
      constructor(uu, Ru, yu) {
        this.from = uu, this.to = Ru, this.diagnostic = yu
      }
    }
    class Ju {
      constructor(uu, Ru, yu) {
        this.diagnostics = uu, this.panel = Ru, this.selected = yu
      }
      static init(uu, Ru, yu) {
        let Qu = yu.facet(bu).markerFilter;
        Qu && (uu = Qu(uu, yu));
        let mu = uu.slice().sort(((uu, Ru) => uu.from - Ru.from || uu.to - Ru.to)),
          Xu = new Ku.w,
          Vu = [],
          ru = 0,
          Bu = yu.doc.iter(),
          xu = 0,
          Su = yu.doc.length;
        for (let Ku = 0;;) {
          let uu, Ru, yu = Ku == mu.length ? null : mu[Ku];
          if (!yu && !Vu.length) break;
          if (Vu.length) uu = ru, Ru = Vu.reduce(((uu, Ru) => Math.min(uu, Ru.to)), yu && yu.from > uu ? yu.from : 1e8);
          else {
            if (uu = yu.from, uu > Su) break;
            Ru = yu.to, Vu.push(yu), Ku++
          }
          for (; Ku < mu.length;) {
            let yu = mu[Ku];
            if (yu.from != uu || !(yu.to > yu.from || yu.to == uu)) {
              Ru = Math.min(yu.from, Ru);
              break
            }
            Vu.push(yu), Ku++, Ru = Math.min(yu.to, Ru)
          }
          Ru = Math.min(Ru, Su);
          let Qu = !1;
          if (Vu.some((yu => yu.from == uu && (yu.to == Ru || Ru == Su))) && (Qu = uu == Ru, !Qu && Ru - uu < 10)) {
            let yu = uu - (xu + Bu.value.length);
            yu > 0 && (Bu.next(yu), xu = uu);
            for (let Eu = uu;;) {
              if (Eu >= Ru) {
                Qu = !0;
                break
              }
              if (!Bu.lineBreak && xu + Bu.value.length > Eu) break;
              Eu = xu + Bu.value.length, xu += Bu.value.length, Bu.next()
            }
          }
          let Ju = tu(Vu);
          if (Qu) Xu.add(uu, uu, Eu.c.widget({
            widget: new Du(Ju),
            diagnostics: Vu.slice()
          }));
          else {
            let yu = Vu.reduce(((uu, Ru) => Ru.markClass ? uu + " " + Ru.markClass : uu), "");
            Xu.add(uu, Ru, Eu.c.mark({
              class: "cm-lintRange cm-lintRange-" + Ju + yu,
              diagnostics: Vu.slice(),
              inclusiveEnd: Vu.some((uu => uu.to > Ru))
            }))
          }
          if (ru = Ru, ru == Su) break;
          for (let Eu = 0; Eu < Vu.length; Eu++) Vu[Eu].to <= ru && Vu.splice(Eu--, 1)
        }
        let pu = Xu.finish();
        return new Ju(pu, Ru, Nu(pu))
      }
    }

    function Nu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Eu = null;
      return uu.between(yu, 1e9, ((uu, yu, Ku) => {
        let {
          spec: Qu
        } = Ku;
        if (!(Ru && Qu.diagnostics.indexOf(Ru) < 0))
          if (Eu) {
            if (Qu.diagnostics.indexOf(Eu.diagnostic) < 0) return !1;
            Eu = new mu(Eu.from, yu, Eu.diagnostic)
          } else Eu = new mu(uu, yu, Ru || Qu.diagnostics[0])
      })), Eu
    }

    function Xu(uu, Ru) {
      let yu = Ru.pos,
        Eu = Ru.end || yu,
        Ku = uu.state.facet(bu).hideOn(uu, yu, Eu);
      if (null != Ku) return Ku;
      let Qu = uu.startState.doc.lineAt(Ru.pos);
      return !(!uu.effects.some((uu => uu.is(ru))) && !uu.changes.touchesRange(Qu.from, Math.max(Qu.to, Eu)))
    }

    function Vu(uu, Ru) {
      return uu.field(Su, !1) ? Ru : Ru.concat(Ku.B.appendConfig.of(lu))
    }
    const ru = Ku.B.define(),
      Bu = Ku.B.define(),
      xu = Ku.B.define(),
      Su = Ku.E.define({
        create: () => new Ju(Eu.c.none, null, null),
        update(uu, Ru) {
          if (Ru.docChanged && uu.diagnostics.size) {
            let yu = uu.diagnostics.map(Ru.changes),
              Eu = null,
              Ku = uu.panel;
            if (uu.selected) {
              let Ku = Ru.changes.mapPos(uu.selected.from, 1);
              Eu = Nu(yu, uu.selected.diagnostic, Ku) || Nu(yu, null, Ku)
            }!yu.size && Ku && Ru.state.facet(bu).autoPanel && (Ku = null), uu = new Ju(yu, Ku, Eu)
          }
          for (let yu of Ru.effects)
            if (yu.is(ru)) {
              let Eu = Ru.state.facet(bu).autoPanel ? yu.value.length ? Iu.open : null : uu.panel;
              uu = Ju.init(yu.value, Eu, Ru.state)
            } else yu.is(Bu) ? uu = new Ju(uu.diagnostics, yu.value ? Iu.open : null, uu.selected) : yu.is(xu) && (uu = new Ju(uu.diagnostics, uu.panel, yu.value));
          return uu
        },
        provide: uu => [Eu.kb.from(uu, (uu => uu.panel)), Eu.f.lE.from(uu, (uu => uu.diagnostics))]
      });
    const pu = Eu.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function Tu(uu, Ru, yu) {
      let Eu, {
          diagnostics: Ku
        } = uu.state.field(Su),
        Qu = -1,
        mu = -1;
      Ku.between(Ru - (yu < 0 ? 1 : 0), Ru + (yu > 0 ? 1 : 0), ((uu, Ku, Ju) => {
        let {
          spec: Nu
        } = Ju;
        if (Ru >= uu && Ru <= Ku && (uu == Ku || (Ru > uu || yu > 0) && (Ru < Ku || yu < 0))) return Eu = Nu.diagnostics, Qu = uu, mu = Ku, !1
      }));
      let Ju = uu.state.facet(bu).tooltipFilter;
      return Eu && Ju && (Eu = Ju(Eu, uu.state)), Eu ? {
        pos: Qu,
        end: mu,
        above: uu.state.doc.lineAt(Qu).to < mu,
        create: () => ({
          dom: Wu(uu, Eu)
        })
      } : null
    }

    function Wu(uu, Ru) {
      return (0, Qu.e)("ul", {
        class: "cm-tooltip-lint"
      }, Ru.map((Ru => Au(uu, Ru, !1))))
    }
    const ju = uu => {
        let Ru = uu.state.field(Su, !1);
        return !(!Ru || !Ru.panel) && (uu.dispatch({
          effects: Bu.of(!1)
        }), !0)
      },
      Hu = [{
        key: "Mod-Shift-m",
        run: uu => {
          let Ru = uu.state.field(Su, !1);
          Ru && Ru.panel || uu.dispatch({
            effects: Vu(uu.state, [Bu.of(!0)])
          });
          let yu = (0, Eu.y)(uu, Iu.open);
          return yu && yu.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: uu => {
          let Ru = uu.state.field(Su, !1);
          if (!Ru) return !1;
          let yu = uu.state.selection.main,
            Eu = Nu(Ru.diagnostics, null, yu.to + 1);
          return !(!Eu && (Eu = Nu(Ru.diagnostics, null, 0), !Eu || Eu.from == yu.from && Eu.to == yu.to)) && (uu.dispatch({
            selection: {
              anchor: Eu.from,
              head: Eu.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      du = Eu.k.fromClass(class {
        constructor(uu) {
          this.view = uu, this.timeout = -1, this.set = !0;
          let {
            delay: Ru
          } = uu.state.facet(bu);
          this.lintTime = Date.now() + Ru, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, Ru)
        }
        run() {
          clearTimeout(this.timeout);
          let uu = Date.now();
          if (uu < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - uu);
          else {
            this.set = !1;
            let {
              state: uu
            } = this.view, {
              sources: Ru
            } = uu.facet(bu);
            Ru.length && function(uu, Ru, yu) {
              let Eu = [],
                Ku = -1;
              for (let Qu of uu) Qu.then((yu => {
                Eu.push(yu), clearTimeout(Ku), Eu.length == uu.length ? Ru(Eu) : Ku = setTimeout((() => Ru(Eu)), 200)
              }), yu)
            }(Ru.map((uu => Promise.resolve(uu(this.view)))), (Ru => {
              this.view.state.doc == uu.doc && this.view.dispatch(function(uu, Ru) {
                return {
                  effects: Vu(uu, [ru.of(Ru)])
                }
              }(this.view.state, Ru.reduce(((uu, Ru) => uu.concat(Ru)))))
            }), (uu => {
              (0, Eu.X)(this.view.state, uu)
            }))
          }
        }
        update(uu) {
          let Ru = uu.state.facet(bu);
          (uu.docChanged || Ru != uu.startState.facet(bu) || Ru.needsRefresh && Ru.needsRefresh(uu)) && (this.lintTime = Date.now() + Ru.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, Ru.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const bu = Ku.q.define({
      combine: uu => ({
        sources: uu.map((uu => uu.source)).filter((uu => null != uu)),
        ...(0, Ku.P)(uu.map((uu => uu.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: Cu,
          tooltipFilter: Cu,
          needsRefresh: (uu, Ru) => uu ? Ru ? yu => uu(yu) || Ru(yu) : uu : Ru,
          hideOn: (uu, Ru) => uu ? Ru ? (yu, Eu, Ku) => uu(yu, Eu, Ku) || Ru(yu, Eu, Ku) : uu : Ru,
          autoPanel: (uu, Ru) => uu || Ru
        })
      })
    });

    function Cu(uu, Ru) {
      return uu ? Ru ? (yu, Eu) => Ru(uu(yu, Eu), Eu) : uu : Ru
    }

    function ku(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [bu.of({
        source: uu,
        config: Ru
      }), du, lu]
    }

    function eu(uu) {
      let Ru = [];
      if (uu) uu: for (let {
          name: yu
        }
        of uu) {
        for (let uu = 0; uu < yu.length; uu++) {
          let Eu = yu[uu];
          if (/[a-zA-Z]/.test(Eu) && !Ru.some((uu => uu.toLowerCase() == Eu.toLowerCase()))) {
            Ru.push(Eu);
            continue uu
          }
        }
        Ru.push("")
      }
      return Ru
    }

    function Au(uu, Ru, yu) {
      var Eu;
      let Ku = yu ? eu(Ru.actions) : [];
      return (0, Qu.e)("li", {
        class: "cm-diagnostic cm-diagnostic-" + Ru.severity
      }, (0, Qu.e)("span", {
        class: "cm-diagnosticText"
      }, Ru.renderMessage ? Ru.renderMessage(uu) : Ru.message), null === (Eu = Ru.actions) || void 0 === Eu ? void 0 : Eu.map(((yu, Eu) => {
        let mu = !1,
          Ju = Eu => {
            if (Eu.preventDefault(), mu) return;
            mu = !0;
            let Ku = Nu(uu.state.field(Su).diagnostics, Ru);
            Ku && yu.apply(uu, Ku.from, Ku.to)
          },
          {
            name: Xu
          } = yu,
          Vu = Ku[Eu] ? Xu.indexOf(Ku[Eu]) : -1,
          ru = Vu < 0 ? Xu : [Xu.slice(0, Vu), (0, Qu.e)("u", Xu.slice(Vu, Vu + 1)), Xu.slice(Vu + 1)],
          Bu = yu.markClass ? " " + yu.markClass : "";
        return (0, Qu.e)("button", {
          type: "button",
          class: "cm-diagnosticAction" + Bu,
          onclick: Ju,
          onmousedown: Ju,
          "aria-label": ` Action: ${Xu}${Vu<0?"":` (access key "${Ku[Eu]})"`}.`
        }, ru)
      })), Ru.source && (0, Qu.e)("div", {
        class: "cm-diagnosticSource"
      }, Ru.source))
    }
    class Du extends Eu.n {
      constructor(uu) {
        super(), this.sev = uu
      }
      eq(uu) {
        return uu.sev == this.sev
      }
      toDOM() {
        return (0, Qu.e)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Mu {
      constructor(uu, Ru) {
        this.diagnostic = Ru, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = Au(uu, Ru, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class Iu {
      constructor(uu) {
        this.view = uu, this.items = [];
        this.list = (0, Qu.e)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: Ru => {
            if (!(Ru.ctrlKey || Ru.altKey || Ru.metaKey)) {
              if (27 == Ru.keyCode) ju(this.view), this.view.focus();
              else if (38 == Ru.keyCode || 33 == Ru.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == Ru.keyCode || 34 == Ru.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == Ru.keyCode) this.moveSelection(0);
              else if (35 == Ru.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == Ru.keyCode) this.view.focus();
              else {
                if (!(Ru.keyCode >= 65 && Ru.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: yu
                  } = this.items[this.selectedIndex], Eu = eu(yu.actions);
                  for (let Ku = 0; Ku < Eu.length; Ku++)
                    if (Eu[Ku].toUpperCase().charCodeAt(0) == Ru.keyCode) {
                      let Ru = Nu(this.view.state.field(Su).diagnostics, yu);
                      Ru && yu.actions[Ku].apply(uu, Ru.from, Ru.to)
                    }
                }
              }
              Ru.preventDefault()
            }
          },
          onclick: uu => {
            for (let Ru = 0; Ru < this.items.length; Ru++) this.items[Ru].dom.contains(uu.target) && this.moveSelection(Ru)
          }
        }), this.dom = (0, Qu.e)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, Qu.e)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => ju(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let uu = this.view.state.field(Su).selected;
        if (!uu) return -1;
        for (let Ru = 0; Ru < this.items.length; Ru++)
          if (this.items[Ru].diagnostic == uu.diagnostic) return Ru;
        return -1
      }
      update() {
        let {
          diagnostics: uu,
          selected: Ru
        } = this.view.state.field(Su), yu = 0, Eu = !1, Ku = null, Qu = new Set;
        for (uu.between(0, this.view.state.doc.length, ((uu, mu, Ju) => {
            let {
              spec: Nu
            } = Ju;
            for (let Xu of Nu.diagnostics) {
              if (Qu.has(Xu)) continue;
              Qu.add(Xu);
              let uu, mu = -1;
              for (let Ru = yu; Ru < this.items.length; Ru++)
                if (this.items[Ru].diagnostic == Xu) {
                  mu = Ru;
                  break
                } mu < 0 ? (uu = new Mu(this.view, Xu), this.items.splice(yu, 0, uu), Eu = !0) : (uu = this.items[mu], mu > yu && (this.items.splice(yu, mu - yu), Eu = !0)), Ru && uu.diagnostic == Ru.diagnostic ? uu.dom.hasAttribute("aria-selected") || (uu.dom.setAttribute("aria-selected", "true"), Ku = uu) : uu.dom.hasAttribute("aria-selected") && uu.dom.removeAttribute("aria-selected"), yu++
            }
          })); yu < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Eu = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Mu(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Eu = !0), Ku ? (this.list.setAttribute("aria-activedescendant", Ku.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Ku.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: uu => {
            let {
              sel: Ru,
              panel: yu
            } = uu, Eu = yu.height / this.list.offsetHeight;
            Ru.top < yu.top ? this.list.scrollTop -= (yu.top - Ru.top) / Eu : Ru.bottom > yu.bottom && (this.list.scrollTop += (Ru.bottom - yu.bottom) / Eu)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Eu && this.sync()
      }
      sync() {
        let uu = this.list.firstChild;

        function Ru() {
          let Ru = uu;
          uu = Ru.nextSibling, Ru.remove()
        }
        for (let yu of this.items)
          if (yu.dom.parentNode == this.list) {
            for (; uu != yu.dom;) Ru();
            uu = yu.dom.nextSibling
          } else this.list.insertBefore(yu.dom, uu);
        for (; uu;) Ru()
      }
      moveSelection(uu) {
        if (this.selectedIndex < 0) return;
        let Ru = Nu(this.view.state.field(Su).diagnostics, this.items[uu].diagnostic);
        Ru && this.view.dispatch({
          selection: {
            anchor: Ru.from,
            head: Ru.to
          },
          scrollIntoView: !0,
          effects: xu.of(Ru)
        })
      }
      static open(uu) {
        return new Iu(uu)
      }
    }

    function Gu(uu) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(uu)}</svg>')`
    }

    function Uu(uu) {
      return Gu(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${uu}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const nu = Eu.f.baseTheme({
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
        backgroundImage: Uu("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Uu("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Uu("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Uu("#66d")
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

    function su(uu) {
      return "error" == uu ? 4 : "warning" == uu ? 3 : "info" == uu ? 2 : 1
    }

    function tu(uu) {
      let Ru = "hint",
        yu = 1;
      for (let Eu of uu) {
        let uu = su(Eu.severity);
        uu > yu && (yu = uu, Ru = Eu.severity)
      }
      return Ru
    }
    Eu.i;
    const lu = [Su, Eu.f.lE.compute([Su], (uu => {
      let {
        selected: Ru,
        panel: yu
      } = uu.field(Su);
      return Ru && yu && Ru.from != Ru.to ? Eu.c.set([pu.range(Ru.from, Ru.to)]) : Eu.c.none
    })), (0, Eu.R)(Tu, {
      hideOn: Xu
    }), nu]
  },
  40953: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => au,
      f: () => Wu,
      j: () => fu
    });
    var Eu = yu(40913),
      Ku = yu(40909),
      Qu = yu(40923);
    const mu = "function" == typeof String.prototype.normalize ? uu => uu.normalize("NFKD") : uu => uu;
    class Ju {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.length,
          Ku = arguments.length > 4 ? arguments[4] : void 0,
          Qu = arguments.length > 5 ? arguments[5] : void 0;
        this.test = Qu, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = uu.iterRange(yu, Eu), this.bufferStart = yu, this.normalize = Ku ? uu => Ku(mu(uu)) : mu, this.query = this.normalize(Ru)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Ku.K)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let uu = this.peek();
          if (uu < 0) return this.done = !0, this;
          let Ru = (0, Ku.X)(uu),
            yu = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Ku.N)(uu);
          let Eu = this.normalize(Ru);
          if (Eu.length)
            for (let Ku = 0, Qu = yu;; Ku++) {
              let uu = Eu.charCodeAt(Ku),
                mu = this.match(uu, Qu, this.bufferPos + this.bufferStart);
              if (Ku == Eu.length - 1) {
                if (mu) return this.value = mu, this;
                break
              }
              Qu == yu && Ku < Ru.length && Ru.charCodeAt(Ku) == uu && Qu++
            }
        }
      }
      match(uu, Ru, yu) {
        let Eu = null;
        for (let Ku = 0; Ku < this.matches.length; Ku += 2) {
          let Ru = this.matches[Ku],
            Qu = !1;
          this.query.charCodeAt(Ru) == uu && (Ru == this.query.length - 1 ? Eu = {
            from: this.matches[Ku + 1],
            to: yu
          } : (this.matches[Ku]++, Qu = !0)), Qu || (this.matches.splice(Ku, 2), Ku -= 2)
        }
        return this.query.charCodeAt(0) == uu && (1 == this.query.length ? Eu = {
          from: Ru,
          to: yu
        } : this.matches.push(1, Ru)), Eu && this.test && !this.test(Eu.from, Eu.to, this.buffer, this.bufferStart) && (Eu = null), Eu
      }
    }
    "undefined" != typeof Symbol && (Ju.prototype[Symbol.iterator] = function() {
      return this
    });
    const Nu = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Xu = "gm" + (null == /x/.unicode ? "" : "u");
    class Vu {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uu.length;
        if (this.text = uu, this.to = Ku, this.curLine = "", this.done = !1, this.value = Nu, /\\[sWDnr]|\n|\r|\[\^/.test(Ru)) return new xu(uu, Ru, yu, Eu, Ku);
        this.re = new RegExp(Ru, Xu + ((null === yu || void 0 === yu ? void 0 : yu.ignoreCase) ? "i" : "")), this.test = null === yu || void 0 === yu ? void 0 : yu.test, this.iter = uu.iter();
        let Qu = uu.lineAt(Eu);
        this.curLineStart = Qu.from, this.matchPos = Su(uu, Eu), this.getLine(this.curLineStart)
      }
      getLine(uu) {
        this.iter.next(uu), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let uu = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = uu;
          let Ru = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (Ru) {
            let yu = this.curLineStart + Ru.index,
              Eu = yu + Ru[0].length;
            if (this.matchPos = Su(this.text, Eu + (yu == Eu ? 1 : 0)), yu == this.curLineStart + this.curLine.length && this.nextLine(), (yu < Eu || yu > this.value.to) && (!this.test || this.test(yu, Eu, Ru))) return this.value = {
              from: yu,
              to: Eu,
              match: Ru
            }, this;
            uu = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), uu = 0
          }
        }
      }
    }
    const ru = new WeakMap;
    class Bu {
      constructor(uu, Ru) {
        this.from = uu, this.text = Ru
      }
      get to() {
        return this.from + this.text.length
      }
      static get(uu, Ru, yu) {
        let Eu = ru.get(uu);
        if (!Eu || Eu.from >= yu || Eu.to <= Ru) {
          let Eu = new Bu(Ru, uu.sliceString(Ru, yu));
          return ru.set(uu, Eu), Eu
        }
        if (Eu.from == Ru && Eu.to == yu) return Eu;
        let {
          text: Ku,
          from: Qu
        } = Eu;
        return Qu > Ru && (Ku = uu.sliceString(Ru, Qu) + Ku, Qu = Ru), Eu.to < yu && (Ku += uu.sliceString(Eu.to, yu)), ru.set(uu, new Bu(Qu, Ku)), new Bu(Ru, Ku.slice(Ru - Qu, yu - Qu))
      }
    }
    class xu {
      constructor(uu, Ru, yu, Eu, Ku) {
        this.text = uu, this.to = Ku, this.done = !1, this.value = Nu, this.matchPos = Su(uu, Eu), this.re = new RegExp(Ru, Xu + ((null === yu || void 0 === yu ? void 0 : yu.ignoreCase) ? "i" : "")), this.test = null === yu || void 0 === yu ? void 0 : yu.test, this.flat = Bu.get(uu, Eu, this.chunkEnd(Eu + 5e3))
      }
      chunkEnd(uu) {
        return uu >= this.to ? this.to : this.text.lineAt(uu).to
      }
      next() {
        for (;;) {
          let uu = this.re.lastIndex = this.matchPos - this.flat.from,
            Ru = this.re.exec(this.flat.text);
          if (Ru && !Ru[0] && Ru.index == uu && (this.re.lastIndex = uu + 1, Ru = this.re.exec(this.flat.text)), Ru) {
            let uu = this.flat.from + Ru.index,
              yu = uu + Ru[0].length;
            if ((this.flat.to >= this.to || Ru.index + Ru[0].length <= this.flat.text.length - 10) && (!this.test || this.test(uu, yu, Ru))) return this.value = {
              from: uu,
              to: yu,
              match: Ru
            }, this.matchPos = Su(this.text, yu + (uu == yu ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = Bu.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function Su(uu, Ru) {
      if (Ru >= uu.length) return Ru;
      let yu, Eu = uu.lineAt(Ru);
      for (; Ru < Eu.to && (yu = Eu.text.charCodeAt(Ru - Eu.from)) >= 56320 && yu < 57344;) Ru++;
      return Ru
    }
    "undefined" != typeof Symbol && (Vu.prototype[Symbol.iterator] = xu.prototype[Symbol.iterator] = function() {
      return this
    });
    const pu = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      Tu = Ku.q.define({
        combine: uu => (0, Ku.P)(uu, pu, {
          highlightWordAroundCursor: (uu, Ru) => uu || Ru,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function Wu(uu) {
      let Ru = [Cu, bu];
      return uu && Ru.push(Tu.of(uu)), Ru
    }
    const ju = Eu.c.mark({
        class: "cm-selectionMatch"
      }),
      Hu = Eu.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function du(uu, Ru, yu, Eu) {
      return (0 == yu || uu(Ru.sliceDoc(yu - 1, yu)) != Ku.l.Word) && (Eu == Ru.doc.length || uu(Ru.sliceDoc(Eu, Eu + 1)) != Ku.l.Word)
    }
    const bu = Eu.k.fromClass(class {
        constructor(uu) {
          this.lE = this.getDeco(uu)
        }
        update(uu) {
          (uu.selectionSet || uu.docChanged || uu.viewportChanged) && (this.lE = this.getDeco(uu.view))
        }
        getDeco(uu) {
          let Ru = uu.state.facet(Tu),
            {
              state: yu
            } = uu,
            Qu = yu.selection;
          if (Qu.yT.length > 1) return Eu.c.none;
          let mu, Nu = Qu.main,
            Xu = null;
          if (Nu.empty) {
            if (!Ru.highlightWordAroundCursor) return Eu.c.none;
            let uu = yu.wordAt(Nu.head);
            if (!uu) return Eu.c.none;
            Xu = yu.charCategorizer(Nu.head), mu = yu.sliceDoc(uu.from, uu.to)
          } else {
            let uu = Nu.to - Nu.from;
            if (uu < Ru.minSelectionLength || uu > 200) return Eu.c.none;
            if (Ru.wholeWords) {
              if (mu = yu.sliceDoc(Nu.from, Nu.to), Xu = yu.charCategorizer(Nu.head), !du(Xu, yu, Nu.from, Nu.to) || ! function(uu, Ru, yu, Eu) {
                  return uu(Ru.sliceDoc(yu, yu + 1)) == Ku.l.Word && uu(Ru.sliceDoc(Eu - 1, Eu)) == Ku.l.Word
                }(Xu, yu, Nu.from, Nu.to)) return Eu.c.none
            } else if (mu = yu.sliceDoc(Nu.from, Nu.to), !mu) return Eu.c.none
          }
          let Vu = [];
          for (let Ku of uu.o4) {
            let uu = new Ju(yu.doc, mu, Ku.from, Ku.to);
            for (; !uu.next().done;) {
              let {
                from: Ku,
                to: Qu
              } = uu.value;
              if ((!Xu || du(Xu, yu, Ku, Qu)) && (Nu.empty && Ku <= Nu.from && Qu >= Nu.to ? Vu.push(Hu.range(Ku, Qu)) : (Ku >= Nu.to || Qu <= Nu.from) && Vu.push(ju.range(Ku, Qu)), Vu.length > Ru.maxMatches)) return Eu.c.none
            }
          }
          return Eu.c.set(Vu)
        }
      }, {
        lE: uu => uu.lE
      }),
      Cu = Eu.f.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const ku = Ku.q.define({
      combine: uu => (0, Ku.P)(uu, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: uu => new uR(uu),
        scrollToMatch: uu => Eu.f.scrollIntoView(uu)
      })
    });
    class eu {
      constructor(uu) {
        this.search = uu.search, this.caseSensitive = !!uu.caseSensitive, this.literal = !!uu.literal, this.regexp = !!uu.regexp, this.replace = uu.replace || "", this.valid = !!this.search && (!this.regexp || function(uu) {
          try {
            return new RegExp(uu, Xu), !0
          } catch (Ru) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!uu.wholeWord, this.test = uu.test
      }
      unquote(uu) {
        return this.literal ? uu : uu.replace(/\\([nrt\\])/g, ((uu, Ru) => "n" == Ru ? "\n" : "r" == Ru ? "\r" : "t" == Ru ? "\t" : "\\"))
      }
      eq(uu) {
        return this.search == uu.search && this.replace == uu.replace && this.caseSensitive == uu.caseSensitive && this.regexp == uu.regexp && this.wholeWord == uu.wholeWord && this.test == uu.test
      }
      create() {
        return this.regexp ? new nu(this) : new Mu(this)
      }
      getCursor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = uu.doc ? uu : Ku.o.create({
            doc: uu
          });
        return null == yu && (yu = Eu.doc.length), this.regexp ? Iu(this, Eu, Ru, yu) : Du(this, Eu, Ru, yu)
      }
    }
    class Au {
      constructor(uu) {
        this.spec = uu
      }
    }

    function Du(uu, Ru, yu, Eu) {
      let Qu;
      var mu, Nu;
      return uu.wholeWord && (mu = Ru.doc, Nu = Ru.charCategorizer(Ru.selection.main.head), Qu = (uu, Ru, yu, Eu) => ((Eu > uu || Eu + yu.length < Ru) && (Eu = Math.max(0, uu - 2), yu = mu.sliceString(Eu, Math.min(mu.length, Ru + 2))), (Nu(Gu(yu, uu - Eu)) != Ku.l.Word || Nu(Uu(yu, uu - Eu)) != Ku.l.Word) && (Nu(Uu(yu, Ru - Eu)) != Ku.l.Word || Nu(Gu(yu, Ru - Eu)) != Ku.l.Word))), uu.test && (Qu = function(uu, Ru, yu) {
        return (Eu, Ku, Qu, mu) => {
          if (yu && !yu(Eu, Ku, Qu, mu)) return !1;
          let Ju = Eu >= mu && Ku <= mu + Qu.length ? Qu.slice(Eu - mu, Ku - mu) : Ru.doc.sliceString(Eu, Ku);
          return uu(Ju, Ru, Eu, Ku)
        }
      }(uu.test, Ru, Qu)), new Ju(Ru.doc, uu.unquoted, yu, Eu, uu.caseSensitive ? void 0 : uu => uu.toLowerCase(), Qu)
    }
    class Mu extends Au {
      constructor(uu) {
        super(uu)
      }
      nextMatch(uu, Ru, yu) {
        let Eu = Du(this.spec, uu, yu, uu.doc.length).nextOverlapping();
        if (Eu.done) {
          let yu = Math.min(uu.doc.length, Ru + this.spec.unquoted.length);
          Eu = Du(this.spec, uu, 0, yu).nextOverlapping()
        }
        return Eu.done || Eu.value.from == Ru && Eu.value.to == yu ? null : Eu.value
      }
      prevMatchInRange(uu, Ru, yu) {
        for (let Eu = yu;;) {
          let yu = Math.max(Ru, Eu - 1e4 - this.spec.unquoted.length),
            Ku = Du(this.spec, uu, yu, Eu),
            Qu = null;
          for (; !Ku.nextOverlapping().done;) Qu = Ku.value;
          if (Qu) return Qu;
          if (yu == Ru) return null;
          Eu -= 1e4
        }
      }
      prevMatch(uu, Ru, yu) {
        let Eu = this.prevMatchInRange(uu, 0, Ru);
        return Eu || (Eu = this.prevMatchInRange(uu, Math.max(0, yu - this.spec.unquoted.length), uu.doc.length)), !Eu || Eu.from == Ru && Eu.to == yu ? null : Eu
      }
      getReplacement(uu) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(uu, Ru) {
        let yu = Du(this.spec, uu, 0, uu.doc.length),
          Eu = [];
        for (; !yu.next().done;) {
          if (Eu.length >= Ru) return null;
          Eu.push(yu.value)
        }
        return Eu
      }
      highlight(uu, Ru, yu, Eu) {
        let Ku = Du(this.spec, uu, Math.max(0, Ru - this.spec.unquoted.length), Math.min(yu + this.spec.unquoted.length, uu.doc.length));
        for (; !Ku.next().done;) Eu(Ku.value.from, Ku.value.to)
      }
    }

    function Iu(uu, Ru, yu, Eu) {
      let Qu;
      var mu;
      return uu.wholeWord && (mu = Ru.charCategorizer(Ru.selection.main.head), Qu = (uu, Ru, yu) => !yu[0].length || (mu(Gu(yu.input, yu.index)) != Ku.l.Word || mu(Uu(yu.input, yu.index)) != Ku.l.Word) && (mu(Uu(yu.input, yu.index + yu[0].length)) != Ku.l.Word || mu(Gu(yu.input, yu.index + yu[0].length)) != Ku.l.Word)), uu.test && (Qu = function(uu, Ru, yu) {
        return (Eu, Ku, Qu) => (!yu || yu(Eu, Ku, Qu)) && uu(Qu[0], Ru, Eu, Ku)
      }(uu.test, Ru, Qu)), new Vu(Ru.doc, uu.search, {
        ignoreCase: !uu.caseSensitive,
        test: Qu
      }, yu, Eu)
    }

    function Gu(uu, Ru) {
      return uu.slice((0, Ku.S)(uu, Ru, !1), Ru)
    }

    function Uu(uu, Ru) {
      return uu.slice(Ru, (0, Ku.S)(uu, Ru))
    }
    class nu extends Au {
      nextMatch(uu, Ru, yu) {
        let Eu = Iu(this.spec, uu, yu, uu.doc.length).next();
        return Eu.done && (Eu = Iu(this.spec, uu, 0, Ru).next()), Eu.done ? null : Eu.value
      }
      prevMatchInRange(uu, Ru, yu) {
        for (let Eu = 1;; Eu++) {
          let Ku = Math.max(Ru, yu - 1e4 * Eu),
            Qu = Iu(this.spec, uu, Ku, yu),
            mu = null;
          for (; !Qu.next().done;) mu = Qu.value;
          if (mu && (Ku == Ru || mu.from > Ku + 10)) return mu;
          if (Ku == Ru) return null
        }
      }
      prevMatch(uu, Ru, yu) {
        return this.prevMatchInRange(uu, 0, Ru) || this.prevMatchInRange(uu, yu, uu.doc.length)
      }
      getReplacement(uu) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((Ru, yu) => {
          if ("&" == yu) return uu.match[0];
          if ("$" == yu) return "$";
          for (let Eu = yu.length; Eu > 0; Eu--) {
            let Ru = +yu.slice(0, Eu);
            if (Ru > 0 && Ru < uu.match.length) return uu.match[Ru] + yu.slice(Eu)
          }
          return Ru
        }))
      }
      matchAll(uu, Ru) {
        let yu = Iu(this.spec, uu, 0, uu.doc.length),
          Eu = [];
        for (; !yu.next().done;) {
          if (Eu.length >= Ru) return null;
          Eu.push(yu.value)
        }
        return Eu
      }
      highlight(uu, Ru, yu, Eu) {
        let Ku = Iu(this.spec, uu, Math.max(0, Ru - 250), Math.min(yu + 250, uu.doc.length));
        for (; !Ku.next().done;) Eu(Ku.value.from, Ku.value.to)
      }
    }
    const su = Ku.B.define(),
      tu = Ku.B.define(),
      lu = Ku.E.define({
        create: uu => new gu(ou(uu).create(), null),
        update(uu, Ru) {
          for (let yu of Ru.effects) yu.is(su) ? uu = new gu(yu.value.create(), uu.panel) : yu.is(tu) && (uu = new gu(uu.query, yu.value ? Yu : null));
          return uu
        },
        provide: uu => Eu.kb.from(uu, (uu => uu.panel))
      });
    class gu {
      constructor(uu, Ru) {
        this.query = uu, this.panel = Ru
      }
    }
    const cu = Eu.c.mark({
        class: "cm-searchMatch"
      }),
      Lu = Eu.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      zu = Eu.k.fromClass(class {
        constructor(uu) {
          this.view = uu, this.lE = this.highlight(uu.state.field(lu))
        }
        update(uu) {
          let Ru = uu.state.field(lu);
          (Ru != uu.startState.field(lu) || uu.docChanged || uu.selectionSet || uu.viewportChanged) && (this.lE = this.highlight(Ru))
        }
        highlight(uu) {
          let {
            query: Ru,
            panel: yu
          } = uu;
          if (!yu || !Ru.spec.valid) return Eu.c.none;
          let {
            view: Qu
          } = this, mu = new Ku.w;
          for (let Eu = 0, Ku = Qu.o4, Ju = Ku.length; Eu < Ju; Eu++) {
            let {
              from: uu,
              to: yu
            } = Ku[Eu];
            for (; Eu < Ju - 1 && yu > Ku[Eu + 1].from - 500;) yu = Ku[++Eu].to;
            Ru.highlight(Qu.state, uu, yu, ((uu, Ru) => {
              let yu = Qu.state.selection.yT.some((yu => yu.from == uu && yu.to == Ru));
              mu.add(uu, Ru, yu ? Lu : cu)
            }))
          }
          return mu.finish()
        }
      }, {
        lE: uu => uu.lE
      });

    function Fu(uu) {
      return Ru => {
        let yu = Ru.state.field(lu, !1);
        return yu && yu.query.spec.valid ? uu(Ru, yu) : vu(Ru)
      }
    }
    const wu = Fu(((uu, Ru) => {
        let {
          query: yu
        } = Ru, {
          to: Eu
        } = uu.state.selection.main, Qu = yu.nextMatch(uu.state, Eu, Eu);
        if (!Qu) return !1;
        let mu = Ku.n.single(Qu.from, Qu.to),
          Ju = uu.state.facet(ku);
        return uu.dispatch({
          selection: mu,
          effects: [KR(uu, Qu), Ju.scrollToMatch(mu.main, uu)],
          userEvent: "select.search"
        }), Ou(uu), !0
      })),
      Zu = Fu(((uu, Ru) => {
        let {
          query: yu
        } = Ru, {
          state: Eu
        } = uu, {
          from: Qu
        } = Eu.selection.main, mu = yu.prevMatch(Eu, Qu, Qu);
        if (!mu) return !1;
        let Ju = Ku.n.single(mu.from, mu.to),
          Nu = uu.state.facet(ku);
        return uu.dispatch({
          selection: Ju,
          effects: [KR(uu, mu), Nu.scrollToMatch(Ju.main, uu)],
          userEvent: "select.search"
        }), Ou(uu), !0
      })),
      hu = Fu(((uu, Ru) => {
        let {
          query: yu
        } = Ru, Eu = yu.matchAll(uu.state, 1e3);
        return !(!Eu || !Eu.length) && (uu.dispatch({
          selection: Ku.n.create(Eu.map((uu => Ku.n.range(uu.from, uu.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      Pu = Fu(((uu, Ru) => {
        let {
          query: yu
        } = Ru, {
          state: Qu
        } = uu, {
          from: mu,
          to: Ju
        } = Qu.selection.main;
        if (Qu.readOnly) return !1;
        let Nu = yu.nextMatch(Qu, mu, mu);
        if (!Nu) return !1;
        let Xu, Vu, ru = Nu,
          Bu = [],
          xu = [];
        ru.from == mu && ru.to == Ju && (Vu = Qu.toText(yu.getReplacement(ru)), Bu.push({
          from: ru.from,
          to: ru.to,
          insert: Vu
        }), ru = yu.nextMatch(Qu, ru.from, ru.to), xu.push(Eu.f.announce.of(Qu.phrase("replaced match on line $", Qu.doc.lineAt(mu).number) + ".")));
        let Su = uu.state.changes(Bu);
        return ru && (Xu = Ku.n.single(ru.from, ru.to).map(Su), xu.push(KR(uu, ru)), xu.push(Qu.facet(ku).scrollToMatch(Xu.main, uu))), uu.dispatch({
          changes: Su,
          selection: Xu,
          effects: xu,
          userEvent: "input.replace"
        }), !0
      })),
      iu = Fu(((uu, Ru) => {
        let {
          query: yu
        } = Ru;
        if (uu.state.readOnly) return !1;
        let Ku = yu.matchAll(uu.state, 1e9).map((uu => {
          let {
            from: Ru,
            to: Eu
          } = uu;
          return {
            from: Ru,
            to: Eu,
            insert: yu.getReplacement(uu)
          }
        }));
        if (!Ku.length) return !1;
        let Qu = uu.state.phrase("replaced $ matches", Ku.length) + ".";
        return uu.dispatch({
          changes: Ku,
          effects: Eu.f.announce.of(Qu),
          userEvent: "input.replace.all"
        }), !0
      }));

    function Yu(uu) {
      return uu.state.facet(ku).createPanel(uu)
    }

    function ou(uu, Ru) {
      var yu, Eu, Ku, Qu, mu;
      let Ju = uu.selection.main,
        Nu = Ju.empty || Ju.to > Ju.from + 100 ? "" : uu.sliceDoc(Ju.from, Ju.to);
      if (Ru && !Nu) return Ru;
      let Xu = uu.facet(ku);
      return new eu({
        search: (null !== (yu = null === Ru || void 0 === Ru ? void 0 : Ru.literal) && void 0 !== yu ? yu : Xu.literal) ? Nu : Nu.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Eu = null === Ru || void 0 === Ru ? void 0 : Ru.caseSensitive) && void 0 !== Eu ? Eu : Xu.caseSensitive,
        literal: null !== (Ku = null === Ru || void 0 === Ru ? void 0 : Ru.literal) && void 0 !== Ku ? Ku : Xu.literal,
        regexp: null !== (Qu = null === Ru || void 0 === Ru ? void 0 : Ru.regexp) && void 0 !== Qu ? Qu : Xu.regexp,
        wholeWord: null !== (mu = null === Ru || void 0 === Ru ? void 0 : Ru.wholeWord) && void 0 !== mu ? mu : Xu.wholeWord
      })
    }

    function qu(uu) {
      let Ru = (0, Eu.y)(uu, Yu);
      return Ru && Ru.dom.querySelector("[main-field]")
    }

    function Ou(uu) {
      let Ru = qu(uu);
      Ru && Ru == uu.root.activeElement && Ru.select()
    }
    const vu = uu => {
        let Ru = uu.state.field(lu, !1);
        if (Ru && Ru.panel) {
          let yu = qu(uu);
          if (yu && yu != uu.root.activeElement) {
            let Eu = ou(uu.state, Ru.query.spec);
            Eu.valid && uu.dispatch({
              effects: su.of(Eu)
            }), yu.focus(), yu.select()
          }
        } else uu.dispatch({
          effects: [tu.of(!0), Ru ? su.of(ou(uu.state, Ru.query.spec)) : Ku.B.appendConfig.of(mR)]
        });
        return !0
      },
      au = uu => {
        let Ru = uu.state.field(lu, !1);
        if (!Ru || !Ru.panel) return !1;
        let yu = (0, Eu.y)(uu, Yu);
        return yu && yu.dom.contains(uu.root.activeElement) && uu.focus(), uu.dispatch({
          effects: tu.of(!1)
        }), !0
      },
      fu = [{
        key: "Mod-f",
        run: vu,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: wu,
        shift: Zu,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: wu,
        shift: Zu,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: au,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu, Eu = Ru.selection;
          if (Eu.yT.length > 1 || Eu.main.empty) return !1;
          let {
            from: Qu,
            to: mu
          } = Eu.main, Nu = [], Xu = 0;
          for (let Vu = new Ju(Ru.doc, Ru.sliceDoc(Qu, mu)); !Vu.next().done;) {
            if (Nu.length > 1e3) return !1;
            Vu.value.from == Qu && (Xu = Nu.length), Nu.push(Ku.n.range(Vu.value.from, Vu.value.to))
          }
          return yu(Ru.update({
            selection: Ku.n.create(Nu, Xu),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: uu => {
          let {
            state: Ru
          } = uu, yu = String(Ru.doc.lineAt(uu.state.selection.main.head).number), {
            close: Qu,
            result: mu
          } = (0, Eu.gb)(uu, {
            label: Ru.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: yu
            },
            focus: !0,
            submitLabel: Ru.phrase("go")
          });
          return mu.then((yu => {
            let mu = yu && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(yu.elements.line.value);
            if (!mu) return void uu.dispatch({
              effects: Qu
            });
            let Ju = Ru.doc.lineAt(Ru.selection.main.head),
              [, Nu, Xu, Vu, ru] = mu,
              Bu = Vu ? +Vu.slice(1) : 0,
              xu = Xu ? +Xu : Ju.number;
            if (Xu && ru) {
              let uu = xu / 100;
              Nu && (uu = uu * ("-" == Nu ? -1 : 1) + Ju.number / Ru.doc.lines), xu = Math.round(Ru.doc.lines * uu)
            } else Xu && Nu && (xu = xu * ("-" == Nu ? -1 : 1) + Ju.number);
            let Su = Ru.doc.line(Math.max(1, Math.min(Ru.doc.lines, xu))),
              pu = Ku.n.cursor(Su.from + Math.max(0, Math.min(Bu, Su.length)));
            uu.dispatch({
              effects: [Qu, Eu.f.scrollIntoView(pu.from, {
                y: "center"
              })],
              selection: pu
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu, {
            yT: Qu
          } = Ru.selection;
          if (Qu.some((uu => uu.from === uu.to))) return (uu => {
            let {
              state: Ru,
              dispatch: yu
            } = uu, {
              selection: Eu
            } = Ru, Qu = Ku.n.create(Eu.yT.map((uu => Ru.wordAt(uu.head) || Ku.n.cursor(uu.head))), Eu.mainIndex);
            return !Qu.eq(Eu) && (yu(Ru.update({
              selection: Qu
            })), !0)
          })({
            state: Ru,
            dispatch: yu
          });
          let mu = Ru.sliceDoc(Qu[0].from, Qu[0].to);
          if (Ru.selection.yT.some((uu => Ru.sliceDoc(uu.from, uu.to) != mu))) return !1;
          let Nu = function(uu, Ru) {
            let {
              main: yu,
              yT: Eu
            } = uu.selection, Ku = uu.wordAt(yu.head), Qu = Ku && Ku.from == yu.from && Ku.to == yu.to;
            for (let mu = !1, Nu = new Ju(uu.doc, Ru, Eu[Eu.length - 1].to);;) {
              if (Nu.next(), !Nu.done) {
                if (mu && Eu.some((uu => uu.from == Nu.value.from))) continue;
                if (Qu) {
                  let Ru = uu.wordAt(Nu.value.from);
                  if (!Ru || Ru.from != Nu.value.from || Ru.to != Nu.value.to) continue
                }
                return Nu.value
              }
              if (mu) return null;
              Nu = new Ju(uu.doc, Ru, 0, Math.max(0, Eu[Eu.length - 1].from - 1)), mu = !0
            }
          }(Ru, mu);
          return !!Nu && (yu(Ru.update({
            selection: Ru.selection.addRange(Ku.n.range(Nu.from, Nu.to), !1),
            effects: Eu.f.scrollIntoView(Nu.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class uR {
      constructor(uu) {
        this.view = uu;
        let Ru = this.query = uu.state.field(lu).query.spec;

        function yu(uu, Ru, yu) {
          return (0, Qu.e)("button", {
            class: "cm-button",
            name: uu,
            onclick: Ru,
            type: "button"
          }, yu)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, Qu.e)("input", {
          value: Ru.search,
          placeholder: RR(uu, "Find"),
          "aria-label": RR(uu, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, Qu.e)("input", {
          value: Ru.replace,
          placeholder: RR(uu, "Replace"),
          "aria-label": RR(uu, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, Qu.e)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: Ru.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, Qu.e)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: Ru.regexp,
          onchange: this.commit
        }), this.wordField = (0, Qu.e)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: Ru.wholeWord,
          onchange: this.commit
        }), this.dom = (0, Qu.e)("div", {
          onkeydown: uu => this.keydown(uu),
          class: "cm-search"
        }, [this.searchField, yu("next", (() => wu(uu)), [RR(uu, "next")]), yu("prev", (() => Zu(uu)), [RR(uu, "previous")]), yu("select", (() => hu(uu)), [RR(uu, "all")]), (0, Qu.e)("label", null, [this.caseField, RR(uu, "match case")]), (0, Qu.e)("label", null, [this.reField, RR(uu, "regexp")]), (0, Qu.e)("label", null, [this.wordField, RR(uu, "by word")]), ...uu.state.readOnly ? [] : [(0, Qu.e)("br"), this.replaceField, yu("replace", (() => Pu(uu)), [RR(uu, "replace")]), yu("replaceAll", (() => iu(uu)), [RR(uu, "replace all")])], (0, Qu.e)("button", {
          name: "close",
          onclick: () => au(uu),
          "aria-label": RR(uu, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let uu = new eu({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        uu.eq(this.query) || (this.query = uu, this.view.dispatch({
          effects: su.of(uu)
        }))
      }
      keydown(uu) {
        (0, Eu.db)(this.view, uu, "search-panel") ? uu.preventDefault(): 13 == uu.keyCode && uu.target == this.searchField ? (uu.preventDefault(), (uu.shiftKey ? Zu : wu)(this.view)) : 13 == uu.keyCode && uu.target == this.replaceField && (uu.preventDefault(), Pu(this.view))
      }
      update(uu) {
        for (let Ru of uu.transactions)
          for (let uu of Ru.effects) uu.is(su) && !uu.value.eq(this.query) && this.setQuery(uu.value)
      }
      setQuery(uu) {
        this.query = uu, this.searchField.value = uu.search, this.replaceField.value = uu.replace, this.caseField.checked = uu.caseSensitive, this.reField.checked = uu.regexp, this.wordField.checked = uu.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(ku).top
      }
    }

    function RR(uu, Ru) {
      return uu.state.phrase(Ru)
    }
    const yR = 30,
      ER = /[\s\.,:;?!]/;

    function KR(uu, Ru) {
      let {
        from: yu,
        to: Ku
      } = Ru, Qu = uu.state.doc.lineAt(yu), mu = uu.state.doc.lineAt(Ku).to, Ju = Math.max(Qu.from, yu - yR), Nu = Math.min(mu, Ku + yR), Xu = uu.state.sliceDoc(Ju, Nu);
      if (Ju != Qu.from)
        for (let Eu = 0; Eu < yR; Eu++)
          if (!ER.test(Xu[Eu + 1]) && ER.test(Xu[Eu])) {
            Xu = Xu.slice(Eu);
            break
          } if (Nu != mu)
        for (let Eu = Xu.length - 1; Eu > Xu.length - yR; Eu--)
          if (!ER.test(Xu[Eu - 1]) && ER.test(Xu[Eu])) {
            Xu = Xu.slice(0, Eu);
            break
          } return Eu.f.announce.of(`${uu.state.phrase("current match")}. ${Xu} ${uu.state.phrase("on line")} ${Qu.number}.`)
    }
    const QR = Eu.f.baseTheme({
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
      mR = [lu, Ku.t.low(zu), QR]
  },
  40913: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => nu,
      e: () => XR,
      f: () => AK,
      i: () => Qm,
      k: () => OR,
      n: () => Gu,
      q: () => IQ,
      u: () => OK,
      v: () => QQ,
      y: () => OQ,
      C: () => YQ,
      F: () => Vm,
      J: () => WQ,
      H: () => Gm,
      N: () => xQ,
      R: () => iQ,
      S: () => tK,
      T: () => Am,
      X: () => iR,
      Z: () => bQ,
      $: () => AQ,
      db: () => cK,
      gb: () => Rm,
      kb: () => um,
      lb: () => zQ
    });
    for (var Eu = yu(40909), Ku = yu(40918), Qu = {
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
      }, mu = {
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
      }, Ju = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Nu = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Xu = 0; Xu < 10; Xu++) Qu[48 + Xu] = Qu[96 + Xu] = String(Xu);
    for (Xu = 1; Xu <= 24; Xu++) Qu[Xu + 111] = "F" + Xu;
    for (Xu = 65; Xu <= 90; Xu++) Qu[Xu] = String.fromCharCode(Xu + 32), mu[Xu] = String.fromCharCode(Xu);
    for (var Vu in Qu) mu.hasOwnProperty(Vu) || (mu[Vu] = Qu[Vu]);
    var ru = yu(40923);
    let Bu = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      xu = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const Su = /Edge\/(\d+)/.exec(Bu.userAgent),
      pu = /MSIE \d/.test(Bu.userAgent),
      Tu = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Bu.userAgent),
      Wu = !!(pu || Tu || Su),
      ju = !Wu && /gecko\/(\d+)/i.test(Bu.userAgent),
      Hu = !Wu && /Chrome\/(\d+)/.exec(Bu.userAgent),
      du = "webkitFontSmoothing" in xu.documentElement.style,
      bu = !Wu && /Apple Computer/.test(Bu.vendor),
      Cu = bu && (/Mobile\/\w+/.test(Bu.userAgent) || Bu.maxTouchPoints > 2);
    var ku = {
      mac: Cu || /Mac/.test(Bu.platform),
      windows: /Win/.test(Bu.platform),
      linux: /Linux|X11/.test(Bu.platform),
      ie: Wu,
      ie_version: pu ? xu.documentMode || 6 : Tu ? +Tu[1] : Su ? +Su[1] : 0,
      gecko: ju,
      gecko_version: ju ? +(/Firefox\/(\d+)/.exec(Bu.userAgent) || [0, 0])[1] : 0,
      chrome: !!Hu,
      chrome_version: Hu ? +Hu[1] : 0,
      ios: Cu,
      android: /Android\b/.test(Bu.userAgent),
      webkit: du,
      webkit_version: du ? +(/\bAppleWebKit\/(\d+)/.exec(Bu.userAgent) || [0, 0])[1] : 0,
      safari: bu,
      safari_version: bu ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Bu.userAgent) || [0, 0])[1] : 0,
      tabSize: null != xu.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function eu(uu, Ru) {
      for (let yu in uu) "class" == yu && Ru.class ? Ru.class += " " + uu.class : "style" == yu && Ru.style ? Ru.style += ";" + uu.style : Ru[yu] = uu[yu];
      return Ru
    }
    const Au = Object.create(null);

    function Du(uu, Ru, yu) {
      if (uu == Ru) return !0;
      uu || (uu = Au), Ru || (Ru = Au);
      let Eu = Object.keys(uu),
        Ku = Object.keys(Ru);
      if (Eu.length - (yu && Eu.indexOf(yu) > -1 ? 1 : 0) != Ku.length - (yu && Ku.indexOf(yu) > -1 ? 1 : 0)) return !1;
      for (let Qu of Eu)
        if (Qu != yu && (-1 == Ku.indexOf(Qu) || uu[Qu] !== Ru[Qu])) return !1;
      return !0
    }

    function Mu(uu, Ru, yu) {
      let Eu = !1;
      if (Ru)
        for (let Ku in Ru) yu && Ku in yu || (Eu = !0, "style" == Ku ? uu.style.cssText = "" : uu.removeAttribute(Ku));
      if (yu)
        for (let Ku in yu) Ru && Ru[Ku] == yu[Ku] || (Eu = !0, "style" == Ku ? uu.style.cssText = yu[Ku] : uu.setAttribute(Ku, yu[Ku]));
      return Eu
    }

    function Iu(uu) {
      let Ru = Object.create(null);
      for (let yu = 0; yu < uu.attributes.length; yu++) {
        let Eu = uu.attributes[yu];
        Ru[Eu.name] = Eu.value
      }
      return Ru
    }
    class Gu {
      eq(uu) {
        return !1
      }
      updateDOM(uu, Ru, yu) {
        return !1
      }
      compare(uu) {
        return this == uu || this.constructor == uu.constructor && this.eq(uu)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(uu) {
        return !0
      }
      coordsAt(uu, Ru, yu) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(uu) {}
    }
    var Uu = function(uu) {
      return uu[uu.Text = 0] = "Text", uu[uu.WidgetBefore = 1] = "WidgetBefore", uu[uu.WidgetAfter = 2] = "WidgetAfter", uu[uu.WidgetRange = 3] = "WidgetRange", uu
    }(Uu || (Uu = {}));
    class nu extends Eu.A {
      constructor(uu, Ru, yu, Eu) {
        super(), this.startSide = uu, this.endSide = Ru, this.widget = yu, this.spec = Eu
      }
      get heightRelevant() {
        return !1
      }
      static mark(uu) {
        return new su(uu)
      }
      static widget(uu) {
        let Ru = Math.max(-1e4, Math.min(1e4, uu.side || 0)),
          yu = !!uu.block;
        return Ru += yu && !uu.inlineOrder ? Ru > 0 ? 3e8 : -4e8 : Ru > 0 ? 1e8 : -1e8, new lu(uu, Ru, Ru, yu, uu.widget || null, !1)
      }
      static replace(uu) {
        let Ru, yu, Eu = !!uu.block;
        if (uu.isBlockGap) Ru = -5e8, yu = 4e8;
        else {
          let {
            start: Ku,
            end: Qu
          } = gu(uu, Eu);
          Ru = (Ku ? Eu ? -3e8 : -1 : 5e8) - 1, yu = 1 + (Qu ? Eu ? 2e8 : 1 : -6e8)
        }
        return new lu(uu, Ru, yu, Eu, uu.widget || null, !0)
      }
      static line(uu) {
        return new tu(uu)
      }
      static set(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Eu.x.of(uu, Ru)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    nu.none = Eu.x.empty;
    class su extends nu {
      constructor(uu) {
        let {
          start: Ru,
          end: yu
        } = gu(uu);
        super(Ru ? -1 : 5e8, yu ? 1 : -6e8, null, uu), this.tagName = uu.tagName || "span", this.attrs = uu.class && uu.attributes ? eu(uu.attributes, {
          class: uu.class
        }) : uu.class ? {
          class: uu.class
        } : uu.attributes || Au
      }
      eq(uu) {
        return this == uu || uu instanceof su && this.tagName == uu.tagName && Du(this.attrs, uu.attrs)
      }
      range(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        if (uu >= Ru) throw new RangeError("Mark decorations may not be empty");
        return super.range(uu, Ru)
      }
    }
    su.prototype.point = !1;
    class tu extends nu {
      constructor(uu) {
        super(-2e8, -2e8, null, uu)
      }
      eq(uu) {
        return uu instanceof tu && this.spec.class == uu.spec.class && Du(this.spec.attributes, uu.spec.attributes)
      }
      range(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        if (Ru != uu) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(uu, Ru)
      }
    }
    tu.prototype.mapMode = Eu.s.TrackBefore, tu.prototype.point = !0;
    class lu extends nu {
      constructor(uu, Ru, yu, Ku, Qu, mu) {
        super(Ru, yu, Qu, uu), this.block = Ku, this.isReplace = mu, this.mapMode = Ku ? Ru <= 0 ? Eu.s.TrackBefore : Eu.s.TrackAfter : Eu.s.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Uu.WidgetRange : this.startSide <= 0 ? Uu.WidgetBefore : Uu.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(uu) {
        return uu instanceof lu && (Ru = this.widget, yu = uu.widget, Ru == yu || !!(Ru && yu && Ru.compare(yu))) && this.block == uu.block && this.startSide == uu.startSide && this.endSide == uu.endSide;
        var Ru, yu
      }
      range(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        if (this.isReplace && (uu > Ru || uu == Ru && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && Ru != uu) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(uu, Ru)
      }
    }

    function gu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: yu,
          inclusiveEnd: Eu
        } = uu;
      return null == yu && (yu = uu.inclusive), null == Eu && (Eu = uu.inclusive), {
        start: null !== yu && void 0 !== yu ? yu : Ru,
        end: null !== Eu && void 0 !== Eu ? Eu : Ru
      }
    }

    function cu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ku = yu.length - 1;
      Ku >= 0 && yu[Ku] + Eu >= uu ? yu[Ku] = Math.max(yu[Ku], Ru) : yu.push(uu, Ru)
    }
    lu.prototype.point = !0;
    class Lu extends Eu.A {
      constructor(uu, Ru) {
        super(), this.tagName = uu, this.attributes = Ru
      }
      eq(uu) {
        return uu == this || uu instanceof Lu && this.tagName == uu.tagName && Du(this.attributes, uu.attributes)
      }
      static create(uu) {
        return new Lu(uu.tagName, uu.attributes || Au)
      }
      static set(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Eu.x.of(uu, Ru)
      }
    }

    function zu(uu) {
      let Ru;
      return Ru = 11 == uu.nodeType ? uu.getSelection ? uu : uu.ownerDocument : uu, Ru.getSelection()
    }

    function Fu(uu, Ru) {
      return !!Ru && (uu == Ru || uu.contains(1 != Ru.nodeType ? Ru.parentNode : Ru))
    }

    function wu(uu, Ru) {
      if (!Ru.anchorNode) return !1;
      try {
        return Fu(uu, Ru.anchorNode)
      } catch (yu) {
        return !1
      }
    }

    function Zu(uu) {
      return 3 == uu.nodeType ? ER(uu, 0, uu.nodeValue.length).getClientRects() : 1 == uu.nodeType ? uu.getClientRects() : []
    }

    function hu(uu, Ru, yu, Eu) {
      return !!yu && (Yu(uu, Ru, yu, Eu, -1) || Yu(uu, Ru, yu, Eu, 1))
    }

    function Pu(uu) {
      for (var Ru = 0;; Ru++)
        if (!(uu = uu.previousSibling)) return Ru
    }

    function iu(uu) {
      return 1 == uu.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(uu.nodeName)
    }

    function Yu(uu, Ru, yu, Eu, Ku) {
      for (;;) {
        if (uu == yu && Ru == Eu) return !0;
        if (Ru == (Ku < 0 ? 0 : ou(uu))) {
          if ("DIV" == uu.nodeName) return !1;
          let yu = uu.parentNode;
          if (!yu || 1 != yu.nodeType) return !1;
          Ru = Pu(uu) + (Ku < 0 ? 0 : 1), uu = yu
        } else {
          if (1 != uu.nodeType) return !1;
          if (1 == (uu = uu.childNodes[Ru + (Ku < 0 ? -1 : 0)]).nodeType && "false" == uu.contentEditable) return !1;
          Ru = Ku < 0 ? ou(uu) : 0
        }
      }
    }

    function ou(uu) {
      return 3 == uu.nodeType ? uu.nodeValue.length : uu.childNodes.length
    }

    function qu(uu, Ru) {
      let yu = Ru ? uu.left : uu.right;
      return {
        left: yu,
        right: yu,
        top: uu.top,
        bottom: uu.bottom
      }
    }

    function Ou(uu) {
      let Ru = uu.visualViewport;
      return Ru ? {
        left: 0,
        right: Ru.width,
        top: 0,
        bottom: Ru.height
      } : {
        left: 0,
        right: uu.innerWidth,
        top: 0,
        bottom: uu.innerHeight
      }
    }

    function vu(uu, Ru) {
      let yu = Ru.width / uu.offsetWidth,
        Eu = Ru.height / uu.offsetHeight;
      return (yu > .995 && yu < 1.005 || !isFinite(yu) || Math.abs(Ru.width - uu.offsetWidth) < 1) && (yu = 1), (Eu > .995 && Eu < 1.005 || !isFinite(Eu) || Math.abs(Ru.height - uu.offsetHeight) < 1) && (Eu = 1), {
        scaleX: yu,
        scaleY: Eu
      }
    }

    function au(uu) {
      let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        yu = uu.ownerDocument,
        Eu = null,
        Ku = null;
      for (let Qu = uu.parentNode; Qu && (Qu != yu.body && (Ru && !Eu || !Ku));)
        if (1 == Qu.nodeType) !Ku && Qu.scrollHeight > Qu.clientHeight && (Ku = Qu), Ru && !Eu && Qu.scrollWidth > Qu.clientWidth && (Eu = Qu), Qu = Qu.assignedSlot || Qu.parentNode;
        else {
          if (11 != Qu.nodeType) break;
          Qu = Qu.host
        } return {
        x: Eu,
        y: Ku
      }
    }
    Lu.prototype.startSide = Lu.prototype.endSide = -1;
    class fu {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(uu) {
        return this.anchorNode == uu.anchorNode && this.anchorOffset == uu.anchorOffset && this.focusNode == uu.focusNode && this.focusOffset == uu.focusOffset
      }
      setRange(uu) {
        let {
          anchorNode: Ru,
          focusNode: yu
        } = uu;
        this.set(Ru, Math.min(uu.anchorOffset, Ru ? ou(Ru) : 0), yu, Math.min(uu.focusOffset, yu ? ou(yu) : 0))
      }
      set(uu, Ru, yu, Eu) {
        this.anchorNode = uu, this.anchorOffset = Ru, this.focusNode = yu, this.focusOffset = Eu
      }
    }
    let uR, RR = null;

    function yR(uu) {
      if (uu.setActive) return uu.setActive();
      if (RR) return uu.focus(RR);
      let Ru = [];
      for (let yu = uu; yu && (Ru.push(yu, yu.scrollTop, yu.scrollLeft), yu != yu.ownerDocument); yu = yu.parentNode);
      if (uu.focus(null == RR ? {
          get preventScroll() {
            return RR = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !RR) {
        RR = !1;
        for (let uu = 0; uu < Ru.length;) {
          let yu = Ru[uu++],
            Eu = Ru[uu++],
            Ku = Ru[uu++];
          yu.scrollTop != Eu && (yu.scrollTop = Eu), yu.scrollLeft != Ku && (yu.scrollLeft = Ku)
        }
      }
    }

    function ER(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ru,
        Eu = uR || (uR = document.createRange());
      return Eu.setEnd(uu, yu), Eu.setStart(uu, Ru), Eu
    }

    function KR(uu, Ru, yu, Eu) {
      let Ku = {
        key: Ru,
        code: Ru,
        keyCode: yu,
        which: yu,
        cancelable: !0
      };
      Eu && ({
        altKey: Ku.altKey,
        ctrlKey: Ku.ctrlKey,
        shiftKey: Ku.shiftKey,
        metaKey: Ku.metaKey
      } = Eu);
      let Qu = new KeyboardEvent("keydown", Ku);
      Qu.synthetic = !0, uu.dispatchEvent(Qu);
      let mu = new KeyboardEvent("keyup", Ku);
      return mu.synthetic = !0, uu.dispatchEvent(mu), Qu.defaultPrevented || mu.defaultPrevented
    }

    function QR(uu) {
      return uu instanceof Window ? uu.pageYOffset > Math.max(0, uu.document.documentElement.scrollHeight - uu.innerHeight - 4) : uu.scrollTop > Math.max(1, uu.scrollHeight - uu.clientHeight - 4)
    }

    function mR(uu, Ru) {
      for (let yu = uu, Eu = Ru;;) {
        if (3 == yu.nodeType && Eu > 0) return {
          node: yu,
          offset: Eu
        };
        if (1 == yu.nodeType && Eu > 0) {
          if ("false" == yu.contentEditable) return null;
          yu = yu.childNodes[Eu - 1], Eu = ou(yu)
        } else {
          if (!yu.parentNode || iu(yu)) return null;
          Eu = Pu(yu), yu = yu.parentNode
        }
      }
    }

    function JR(uu, Ru) {
      for (let yu = uu, Eu = Ru;;) {
        if (3 == yu.nodeType && Eu < yu.nodeValue.length) return {
          node: yu,
          offset: Eu
        };
        if (1 == yu.nodeType && Eu < yu.childNodes.length) {
          if ("false" == yu.contentEditable) return null;
          yu = yu.childNodes[Eu], Eu = 0
        } else {
          if (!yu.parentNode || iu(yu)) return null;
          Eu = Pu(yu) + 1, yu = yu.parentNode
        }
      }
    }
    ku.safari && ku.safari_version >= 26 && (RR = !1);
    class NR {
      constructor(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = uu, this.offset = Ru, this.precise = yu
      }
      static before(uu, Ru) {
        return new NR(uu.parentNode, Pu(uu), Ru)
      }
      static after(uu, Ru) {
        return new NR(uu.parentNode, Pu(uu) + 1, Ru)
      }
    }
    var XR = function(uu) {
      return uu[uu.LTR = 0] = "LTR", uu[uu.RTL = 1] = "RTL", uu
    }(XR || (XR = {}));
    const VR = XR.LTR,
      rR = XR.RTL;

    function BR(uu) {
      let Ru = [];
      for (let yu = 0; yu < uu.length; yu++) Ru.push(1 << +uu[yu]);
      return Ru
    }
    const xR = BR("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      SR = BR("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      pR = Object.create(null),
      TR = [];
    for (let Um of ["()", "[]", "{}"]) {
      let uu = Um.charCodeAt(0),
        Ru = Um.charCodeAt(1);
      pR[uu] = Ru, pR[Ru] = -uu
    }

    function WR(uu) {
      return uu <= 247 ? xR[uu] : 1424 <= uu && uu <= 1524 ? 2 : 1536 <= uu && uu <= 1785 ? SR[uu - 1536] : 1774 <= uu && uu <= 2220 ? 4 : 8192 <= uu && uu <= 8204 ? 256 : 64336 <= uu && uu <= 65023 ? 4 : 1
    }
    const jR = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class HR {
      get dir() {
        return this.level % 2 ? rR : VR
      }
      constructor(uu, Ru, yu) {
        this.from = uu, this.to = Ru, this.level = yu
      }
      side(uu, Ru) {
        return this.dir == Ru == uu ? this.to : this.from
      }
      forward(uu, Ru) {
        return uu == (this.dir == Ru)
      }
      static find(uu, Ru, yu, Eu) {
        let Ku = -1;
        for (let Qu = 0; Qu < uu.length; Qu++) {
          let mu = uu[Qu];
          if (mu.from <= Ru && mu.to >= Ru) {
            if (mu.level == yu) return Qu;
            (Ku < 0 || (0 != Eu ? Eu < 0 ? mu.from < Ru : mu.to > Ru : uu[Ku].level > mu.level)) && (Ku = Qu)
          }
        }
        if (Ku < 0) throw new RangeError("Index out of range");
        return Ku
      }
    }

    function dR(uu, Ru) {
      if (uu.length != Ru.length) return !1;
      for (let yu = 0; yu < uu.length; yu++) {
        let Eu = uu[yu],
          Ku = Ru[yu];
        if (Eu.from != Ku.from || Eu.to != Ku.to || Eu.direction != Ku.direction || !dR(Eu.inner, Ku.inner)) return !1
      }
      return !0
    }
    const bR = [];

    function CR(uu, Ru, yu, Eu, Ku, Qu, mu) {
      let Ju = Eu % 2 ? 2 : 1;
      if (Eu % 2 == Ku % 2)
        for (let Nu = Ru, Xu = 0; Nu < yu;) {
          let Ru = !0,
            Vu = !1;
          if (Xu == Qu.length || Nu < Qu[Xu].from) {
            let uu = bR[Nu];
            uu != Ju && (Ru = !1, Vu = 16 == uu)
          }
          let ru = Ru || 1 != Ju ? null : [],
            Bu = Ru ? Eu : Eu + 1,
            xu = Nu;
          uu: for (;;)
            if (Xu < Qu.length && xu == Qu[Xu].from) {
              if (Vu) break uu;
              let Su = Qu[Xu];
              if (!Ru)
                for (let uu = Su.to, Ru = Xu + 1;;) {
                  if (uu == yu) break uu;
                  if (!(Ru < Qu.length && Qu[Ru].from == uu)) {
                    if (bR[uu] == Ju) break uu;
                    break
                  }
                  uu = Qu[Ru++].to
                }
              if (Xu++, ru) ru.push(Su);
              else {
                Su.from > Nu && mu.push(new HR(Nu, Su.from, Bu)), kR(uu, Su.direction == VR != !(Bu % 2) ? Eu + 1 : Eu, Ku, Su.inner, Su.from, Su.to, mu), Nu = Su.to
              }
              xu = Su.to
            } else {
              if (xu == yu || (Ru ? bR[xu] != Ju : bR[xu] == Ju)) break;
              xu++
            } ru ? CR(uu, Nu, xu, Eu + 1, Ku, ru, mu) : Nu < xu && mu.push(new HR(Nu, xu, Bu)), Nu = xu
        } else
          for (let Nu = yu, Xu = Qu.length; Nu > Ru;) {
            let yu = !0,
              Vu = !1;
            if (!Xu || Nu > Qu[Xu - 1].to) {
              let uu = bR[Nu - 1];
              uu != Ju && (yu = !1, Vu = 16 == uu)
            }
            let ru = yu || 1 != Ju ? null : [],
              Bu = yu ? Eu : Eu + 1,
              xu = Nu;
            uu: for (;;)
              if (Xu && xu == Qu[Xu - 1].to) {
                if (Vu) break uu;
                let Su = Qu[--Xu];
                if (!yu)
                  for (let uu = Su.from, yu = Xu;;) {
                    if (uu == Ru) break uu;
                    if (!yu || Qu[yu - 1].to != uu) {
                      if (bR[uu - 1] == Ju) break uu;
                      break
                    }
                    uu = Qu[--yu].from
                  }
                if (ru) ru.push(Su);
                else {
                  Su.to < Nu && mu.push(new HR(Su.to, Nu, Bu)), kR(uu, Su.direction == VR != !(Bu % 2) ? Eu + 1 : Eu, Ku, Su.inner, Su.from, Su.to, mu), Nu = Su.from
                }
                xu = Su.from
              } else {
                if (xu == Ru || (yu ? bR[xu - 1] != Ju : bR[xu - 1] == Ju)) break;
                xu--
              } ru ? CR(uu, xu, Nu, Eu + 1, Ku, ru, mu) : xu < Nu && mu.push(new HR(xu, Nu, Bu)), Nu = xu
          }
    }

    function kR(uu, Ru, yu, Eu, Ku, Qu, mu) {
      let Ju = Ru % 2 ? 2 : 1;
      ! function(uu, Ru, yu, Eu, Ku) {
        for (let Qu = 0; Qu <= Eu.length; Qu++) {
          let mu = Qu ? Eu[Qu - 1].to : Ru,
            Ju = Qu < Eu.length ? Eu[Qu].from : yu,
            Nu = Qu ? 256 : Ku;
          for (let Ru = mu, yu = Nu, Eu = Nu; Ru < Ju; Ru++) {
            let Ku = WR(uu.charCodeAt(Ru));
            512 == Ku ? Ku = yu : 8 == Ku && 4 == Eu && (Ku = 16), bR[Ru] = 4 == Ku ? 2 : Ku, 7 & Ku && (Eu = Ku), yu = Ku
          }
          for (let uu = mu, Ru = Nu, Eu = Nu; uu < Ju; uu++) {
            let Ku = bR[uu];
            if (128 == Ku) uu < Ju - 1 && Ru == bR[uu + 1] && 24 & Ru ? Ku = bR[uu] = Ru : bR[uu] = 256;
            else if (64 == Ku) {
              let Ku = uu + 1;
              for (; Ku < Ju && 64 == bR[Ku];) Ku++;
              let Qu = uu && 8 == Ru || Ku < yu && 8 == bR[Ku] ? 1 == Eu ? 1 : 8 : 256;
              for (let Ru = uu; Ru < Ku; Ru++) bR[Ru] = Qu;
              uu = Ku - 1
            } else 8 == Ku && 1 == Eu && (bR[uu] = 1);
            Ru = Ku, 7 & Ku && (Eu = Ku)
          }
        }
      }(uu, Ku, Qu, Eu, Ju),
      function(uu, Ru, yu, Eu, Ku) {
        let Qu = 1 == Ku ? 2 : 1;
        for (let mu = 0, Ju = 0, Nu = 0; mu <= Eu.length; mu++) {
          let Xu = mu ? Eu[mu - 1].to : Ru,
            Vu = mu < Eu.length ? Eu[mu].from : yu;
          for (let Ru, yu, Eu, mu = Xu; mu < Vu; mu++)
            if (yu = pR[Ru = uu.charCodeAt(mu)])
              if (yu < 0) {
                for (let uu = Ju - 3; uu >= 0; uu -= 3)
                  if (TR[uu + 1] == -yu) {
                    let Ru = TR[uu + 2],
                      yu = 2 & Ru ? Ku : 4 & Ru ? 1 & Ru ? Qu : Ku : 0;
                    yu && (bR[mu] = bR[TR[uu]] = yu), Ju = uu;
                    break
                  }
              } else {
                if (189 == TR.length) break;
                TR[Ju++] = mu, TR[Ju++] = Ru, TR[Ju++] = Nu
              }
          else if (2 == (Eu = bR[mu]) || 1 == Eu) {
            let uu = Eu == Ku;
            Nu = uu ? 0 : 1;
            for (let Ru = Ju - 3; Ru >= 0; Ru -= 3) {
              let yu = TR[Ru + 2];
              if (2 & yu) break;
              if (uu) TR[Ru + 2] |= 2;
              else {
                if (4 & yu) break;
                TR[Ru + 2] |= 4
              }
            }
          }
        }
      }(uu, Ku, Qu, Eu, Ju),
      function(uu, Ru, yu, Eu) {
        for (let Ku = 0, Qu = Eu; Ku <= yu.length; Ku++) {
          let mu = Ku ? yu[Ku - 1].to : uu,
            Ju = Ku < yu.length ? yu[Ku].from : Ru;
          for (let Nu = mu; Nu < Ju;) {
            let mu = bR[Nu];
            if (256 == mu) {
              let mu = Nu + 1;
              for (;;)
                if (mu == Ju) {
                  if (Ku == yu.length) break;
                  mu = yu[Ku++].to, Ju = Ku < yu.length ? yu[Ku].from : Ru
                } else {
                  if (256 != bR[mu]) break;
                  mu++
                } let Xu = 1 == Qu,
                Vu = Xu == (1 == (mu < Ru ? bR[mu] : Eu)) ? Xu ? 1 : 2 : Eu;
              for (let Ru = mu, Eu = Ku, Qu = Eu ? yu[Eu - 1].to : uu; Ru > Nu;) Ru == Qu && (Ru = yu[--Eu].from, Qu = Eu ? yu[Eu - 1].to : uu), bR[--Ru] = Vu;
              Nu = mu
            } else Qu = mu, Nu++
          }
        }
      }(Ku, Qu, Eu, Ju), CR(uu, Ku, Qu, Ru, yu, Eu, mu)
    }

    function eR(uu, Ru, yu) {
      if (!uu) return [new HR(0, 0, Ru == rR ? 1 : 0)];
      if (Ru == VR && !yu.length && !jR.test(uu)) return AR(uu.length);
      if (yu.length)
        for (; uu.length > bR.length;) bR[bR.length] = 256;
      let Eu = [],
        Ku = Ru == VR ? 0 : 1;
      return kR(uu, Ku, Ku, yu, 0, uu.length, Eu), Eu
    }

    function AR(uu) {
      return [new HR(0, uu, 0)]
    }
    let DR = "";

    function MR(uu, Ru, yu, Ku, Qu) {
      var mu;
      let Ju = Ku.head - uu.from,
        Nu = HR.find(Ru, Ju, null !== (mu = Ku.bidiLevel) && void 0 !== mu ? mu : -1, Ku.assoc),
        Xu = Ru[Nu],
        Vu = Xu.side(Qu, yu);
      if (Ju == Vu) {
        let uu = Nu += Qu ? 1 : -1;
        if (uu < 0 || uu >= Ru.length) return null;
        Xu = Ru[Nu = uu], Ju = Xu.side(!Qu, yu), Vu = Xu.side(Qu, yu)
      }
      let ru = (0, Eu.S)(uu.text, Ju, Xu.forward(Qu, yu));
      (ru < Xu.from || ru > Xu.to) && (ru = Vu), DR = uu.text.slice(Math.min(Ju, ru), Math.max(Ju, ru));
      let Bu = Nu == (Qu ? Ru.length - 1 : 0) ? null : Ru[Nu + (Qu ? 1 : -1)];
      return Bu && ru == Vu && Bu.level + (Qu ? 0 : 1) < Xu.level ? Eu.n.cursor(Bu.side(!Qu, yu) + uu.from, Bu.forward(Qu, yu) ? 1 : -1, Bu.level) : Eu.n.cursor(ru + uu.from, Xu.forward(Qu, yu) ? -1 : 1, Xu.level)
    }

    function IR(uu, Ru, yu) {
      for (let Eu = Ru; Eu < yu; Eu++) {
        let Ru = WR(uu.charCodeAt(Eu));
        if (1 == Ru) return VR;
        if (2 == Ru || 4 == Ru) return rR
      }
      return VR
    }
    const GR = Eu.q.define(),
      UR = Eu.q.define(),
      nR = Eu.q.define(),
      sR = Eu.q.define(),
      tR = Eu.q.define(),
      lR = Eu.q.define(),
      gR = Eu.q.define(),
      cR = Eu.q.define(),
      LR = Eu.q.define(),
      zR = Eu.q.define({
        combine: uu => uu.some((uu => uu))
      }),
      FR = Eu.q.define({
        combine: uu => uu.some((uu => uu))
      }),
      wR = Eu.q.define();
    class ZR {
      constructor(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = uu, this.y = Ru, this.x = yu, this.yMargin = Eu, this.xMargin = Ku, this.isSnapshot = Qu
      }
      map(uu) {
        return uu.empty ? this : new ZR(this.range.map(uu), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(uu) {
        return this.range.to <= uu.doc.length ? this : new ZR(Eu.n.cursor(uu.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const hR = Eu.B.define({
        map: (uu, Ru) => uu.map(Ru)
      }),
      PR = Eu.B.define();

    function iR(uu, Ru, yu) {
      let Eu = uu.facet(sR);
      Eu.length ? Eu[0](Ru) : window.onerror && window.onerror(String(Ru), yu, void 0, void 0, Ru) || (yu ? console.error(yu + ":", Ru) : console.error(Ru))
    }
    const YR = Eu.q.define({
      combine: uu => !uu.length || uu[0]
    });
    let oR = 0;
    const qR = Eu.q.define({
      combine: uu => uu.filter(((Ru, yu) => {
        for (let Eu = 0; Eu < yu; Eu++)
          if (uu[Eu].plugin == Ru.plugin) return !1;
        return !0
      }))
    });
    class OR {
      constructor(uu, Ru, yu, Eu, Ku) {
        this.id = uu, this.create = Ru, this.domEventHandlers = yu, this.domEventObservers = Eu, this.baseExtensions = Ku(this), this.extension = this.baseExtensions.concat(qR.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(uu) {
        return this.baseExtensions.concat(qR.of({
          plugin: this,
          arg: uu
        }))
      }
      static define(uu, Ru) {
        const {
          eventHandlers: yu,
          eventObservers: Eu,
          provide: Ku,
          lE: Qu
        } = Ru || {};
        return new OR(oR++, uu, yu, Eu, (uu => {
          let Ru = [];
          return Qu && Ru.push(uy.of((Ru => {
            let yu = Ru.plugin(uu);
            return yu ? Qu(yu) : nu.none
          }))), Ku && Ru.push(Ku(uu)), Ru
        }))
      }
      static fromClass(uu, Ru) {
        return OR.define(((Ru, yu) => new uu(Ru, yu)), Ru)
      }
    }
    class vR {
      constructor(uu) {
        this.spec = uu, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(uu) {
        if (this.value) {
          if (this.mustUpdate) {
            let uu = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(uu)
            } catch (Ru) {
              if (iR(uu.state, Ru, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (yu) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(uu, this.spec.arg)
        } catch (Ru) {
          iR(uu.state, Ru, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(uu) {
        var Ru;
        if (null === (Ru = this.value) || void 0 === Ru ? void 0 : Ru.destroy) try {
          this.value.destroy()
        } catch (yu) {
          iR(uu.state, yu, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const aR = Eu.q.define(),
      fR = Eu.q.define(),
      uy = Eu.q.define(),
      Ry = Eu.q.define(),
      yy = Eu.q.define(),
      Ey = Eu.q.define(),
      Ky = Eu.q.define();

    function Qy(uu, Ru) {
      let yu = uu.state.facet(Ky);
      if (!yu.length) return yu;
      let Ku = yu.map((Ru => Ru instanceof Function ? Ru(uu) : Ru)),
        Qu = [];
      return Eu.x.spans(Ku, Ru.from, Ru.to, {
        point() {},
        span(uu, yu, Eu, Ku) {
          let mu = uu - Ru.from,
            Ju = yu - Ru.from,
            Nu = Qu;
          for (let Qu = Eu.length - 1; Qu >= 0; Qu--, Ku--) {
            let uu, yu = Eu[Qu].spec.bidiIsolate;
            if (null == yu && (yu = IR(Ru.text, mu, Ju)), Ku > 0 && Nu.length && (uu = Nu[Nu.length - 1]).to == mu && uu.direction == yu) uu.to = Ju, Nu = uu.inner;
            else {
              let uu = {
                from: mu,
                to: Ju,
                direction: yu,
                inner: []
              };
              Nu.push(uu), Nu = uu.inner
            }
          }
        }
      }), Qu
    }
    const my = Eu.q.define();

    function Jy(uu) {
      let Ru = 0,
        yu = 0,
        Eu = 0,
        Ku = 0;
      for (let Qu of uu.state.facet(my)) {
        let mu = Qu(uu);
        mu && (null != mu.left && (Ru = Math.max(Ru, mu.left)), null != mu.right && (yu = Math.max(yu, mu.right)), null != mu.top && (Eu = Math.max(Eu, mu.top)), null != mu.bottom && (Ku = Math.max(Ku, mu.bottom)))
      }
      return {
        left: Ru,
        right: yu,
        top: Eu,
        bottom: Ku
      }
    }
    const Ny = Eu.q.define();
    class Xy {
      constructor(uu, Ru, yu, Eu) {
        this.fromA = uu, this.toA = Ru, this.fromB = yu, this.toB = Eu
      }
      join(uu) {
        return new Xy(Math.min(this.fromA, uu.fromA), Math.max(this.toA, uu.toA), Math.min(this.fromB, uu.fromB), Math.max(this.toB, uu.toB))
      }
      addToSet(uu) {
        let Ru = uu.length,
          yu = this;
        for (; Ru > 0; Ru--) {
          let Eu = uu[Ru - 1];
          if (!(Eu.fromA > yu.toA)) {
            if (Eu.toA < yu.fromA) break;
            yu = yu.join(Eu), uu.splice(Ru - 1, 1)
          }
        }
        return uu.splice(Ru, 0, yu), uu
      }
      static extendWithRanges(uu, Ru) {
        if (0 == Ru.length) return uu;
        let yu = [];
        for (let Eu = 0, Ku = 0, Qu = 0;;) {
          let mu = Eu < uu.length ? uu[Eu].fromB : 1e9,
            Ju = Ku < Ru.length ? Ru[Ku] : 1e9,
            Nu = Math.min(mu, Ju);
          if (1e9 == Nu) break;
          let Xu = Nu + Qu,
            Vu = Nu,
            ru = Xu;
          for (;;)
            if (Ku < Ru.length && Ru[Ku] <= Vu) {
              let yu = Ru[Ku + 1];
              Ku += 2, Vu = Math.max(Vu, yu);
              for (let Ru = Eu; Ru < uu.length && uu[Ru].fromB <= Vu; Ru++) Qu = uu[Ru].toA - uu[Ru].toB;
              ru = Math.max(ru, yu + Qu)
            } else {
              if (!(Eu < uu.length && uu[Eu].fromB <= Vu)) break;
              {
                let Ru = uu[Eu++];
                Vu = Math.max(Vu, Ru.toB), ru = Math.max(ru, Ru.toA), Qu = Ru.toA - Ru.toB
              }
            } yu.push(new Xy(Xu, ru, Nu, Vu))
        }
        return yu
      }
    }
    class Vy {
      constructor(uu, Ru, yu) {
        this.view = uu, this.state = Ru, this.transactions = yu, this.flags = 0, this.startState = uu.state, this.changes = Eu.ChangeSet.empty(this.startState.doc.length);
        for (let Eu of yu) this.changes = this.changes.compose(Eu.changes);
        let Ku = [];
        this.changes.iterChangedRanges(((uu, Ru, yu, Eu) => Ku.push(new Xy(uu, Ru, yu, Eu)))), this.changedRanges = Ku
      }
      static create(uu, Ru, yu) {
        return new Vy(uu, Ru, yu)
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
        return this.transactions.some((uu => uu.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const ry = [];
    class By {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = uu, this.length = Ru, this.flags = yu, this.parent = null, uu.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return ry
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
      sync(uu) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let uu = this.domAttrs;
          uu && function(uu, Ru) {
            for (let yu = uu.attributes.length - 1; yu >= 0; yu--) {
              let Eu = uu.attributes[yu].name;
              null == Ru[Eu] && uu.removeAttribute(Eu)
            }
            for (let yu in Ru) {
              let Eu = Ru[yu];
              "style" == yu ? uu.style.cssText = Eu : uu.getAttribute(yu) != Eu && uu.setAttribute(yu, Eu)
            }
          }(this.dom, uu)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(uu) {
        this.dom = uu, uu.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let yu of this.children) {
          if (yu == uu) return Ru;
          Ru += yu.length + yu.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(uu) {
        return this.posBefore(uu) + uu.length
      }
      covers(uu) {
        return !0
      }
      coordsIn(uu, Ru) {
        return null
      }
      domPosFor(uu, Ru) {
        let yu = Pu(this.dom),
          Eu = this.length ? uu > 0 : Ru > 0;
        return new NR(this.parent.dom, yu + (Eu ? 1 : 0), 0 == uu || uu == this.length)
      }
      markDirty(uu) {
        this.flags &= -3, uu && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let uu = this; uu; uu = uu.parent)
          if (uu instanceof py) return uu;
        return null
      }
      static get(uu) {
        return uu.cmTile
      }
    }
    class xy extends By {
      constructor(uu) {
        super(uu, 0), this._children = []
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
      append(uu) {
        this.children.push(uu), uu.parent = this
      }
      sync(uu) {
        if (2 & this.flags) return;
        super.sync(uu);
        let Ru, yu = this.dom,
          Eu = null,
          Ku = (null === uu || void 0 === uu ? void 0 : uu.node) == yu ? uu : null,
          Qu = 0;
        for (let mu of this.children) {
          if (mu.sync(uu), Qu += mu.length + mu.breakAfter, Ru = Eu ? Eu.nextSibling : yu.firstChild, Ku && Ru != mu.dom && (Ku.written = !0), mu.dom.parentNode == yu)
            for (; Ru && Ru != mu.dom;) Ru = Sy(Ru);
          else yu.insertBefore(mu.dom, Ru);
          Eu = mu.dom
        }
        for (Ru = Eu ? Eu.nextSibling : yu.firstChild, Ku && Ru && (Ku.written = !0); Ru;) Ru = Sy(Ru);
        this.length = Qu
      }
    }

    function Sy(uu) {
      let Ru = uu.nextSibling;
      return uu.parentNode.removeChild(uu), Ru
    }
    class py extends xy {
      constructor(uu, Ru) {
        super(Ru), this.view = uu
      }
      owns(uu) {
        for (; uu; uu = uu.parent)
          if (uu == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(uu) {
        for (;;) {
          if (!uu) return null;
          let Ru = By.get(uu);
          if (Ru && this.owns(Ru)) return Ru;
          uu = uu.parentNode
        }
      }
      blockTiles(uu) {
        for (let Ru = [], yu = this, Eu = 0, Ku = 0;;)
          if (Eu == yu.children.length) {
            if (!Ru.length) return;
            yu = yu.parent, yu.breakAfter && Ku++, Eu = Ru.pop()
          } else {
            let Qu = yu.children[Eu++];
            if (Qu instanceof Ty) Ru.push(Eu), yu = Qu, Eu = 0;
            else {
              let Ru = Ku + Qu.length,
                yu = uu(Qu, Ku);
              if (void 0 !== yu) return yu;
              Ku = Ru + Qu.breakAfter
            }
          }
      }
      resolveBlock(uu, Ru) {
        let yu, Eu, Ku = -1,
          Qu = -1;
        if (this.blockTiles(((mu, Ju) => {
            let Nu = Ju + mu.length;
            if (uu >= Ju && uu <= Nu) {
              if (mu.isWidget() && Ru >= -1 && Ru <= 1) {
                if (32 & mu.flags) return !0;
                16 & mu.flags && (yu = void 0)
              }(Ju < uu || uu == Nu && (Ru < -1 ? mu.length : mu.covers(1))) && (!yu || !mu.isWidget() && yu.isWidget()) && (yu = mu, Ku = uu - Ju), (Nu > uu || uu == Ju && (Ru > 1 ? mu.length : mu.covers(-1))) && (!Eu || !mu.isWidget() && Eu.isWidget()) && (Eu = mu, Qu = uu - Ju)
            }
          })), !yu && !Eu) throw new Error("No tile at position " + uu);
        return yu && Ru < 0 || !Eu ? {
          tile: yu,
          offset: Ku
        } : {
          tile: Eu,
          offset: Qu
        }
      }
    }
    class Ty extends xy {
      constructor(uu, Ru) {
        super(uu), this.wrapper = Ru
      }
      isBlock() {
        return !0
      }
      covers(uu) {
        return !!this.children.length && (uu < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (uu, Ru) {
        let yu = new Ty(Ru || document.createElement(uu.tagName), uu);
        return Ru || (yu.flags |= 4), yu
      }
    }
    class Wy extends xy {
      constructor(uu, Ru) {
        super(uu), this.attrs = Ru
      }
      isLine() {
        return !0
      }
      static start(uu, Ru, yu) {
        let Eu = new Wy(Ru || document.createElement("div"), uu);
        return Ru && yu || (Eu.flags |= 4), Eu
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(uu, Ru, yu) {
        let Eu = null,
          Ku = -1,
          Qu = null,
          mu = -1;
        ! function uu(Ju, Nu) {
          for (let Xu = 0, Vu = 0; Xu < Ju.children.length && Vu <= Nu; Xu++) {
            let ru = Ju.children[Xu],
              Bu = Vu + ru.length;
            Bu >= Nu && (ru.isComposite() ? uu(ru, Nu - Vu) : (!Qu || Qu.isHidden && (Ru > 0 || yu && jy(Qu, ru))) && (Bu > Nu || 32 & ru.flags) ? (Qu = ru, mu = Nu - Vu) : (Vu < Nu || 16 & ru.flags && !ru.isHidden) && (Eu = ru, Ku = Nu - Vu)), Vu = Bu
          }
        }(this, uu);
        let Ju = (Ru < 0 ? Eu : Qu) || Eu || Qu;
        return Ju ? {
          tile: Ju,
          offset: Ju == Eu ? Ku : mu
        } : null
      }
      coordsIn(uu, Ru) {
        let yu = this.resolveInline(uu, Ru, !0);
        return yu ? yu.tile.coordsIn(Math.max(0, yu.offset), Ru) : function(uu) {
          let Ru = uu.dom.lastChild;
          if (!Ru) return uu.dom.getBoundingClientRect();
          let yu = Zu(Ru);
          return yu[yu.length - 1] || null
        }(this)
      }
      domIn(uu, Ru) {
        let yu = this.resolveInline(uu, Ru);
        if (yu) {
          let {
            tile: uu,
            offset: Eu
          } = yu;
          if (this.dom.contains(uu.dom)) return uu.isText() ? new NR(uu.dom, Math.min(uu.dom.nodeValue.length, Eu)) : uu.domPosFor(Eu, 16 & uu.flags ? 1 : 32 & uu.flags ? -1 : Ru);
          let Ku = yu.tile.parent,
            Qu = !1;
          for (let Ru of Ku.children) {
            if (Qu) return new NR(Ru.dom, 0);
            Ru == yu.tile && (Qu = !0)
          }
        }
        return new NR(this.dom, 0)
      }
    }

    function jy(uu, Ru) {
      let yu = uu.coordsIn(0, 1),
        Eu = Ru.coordsIn(0, 1);
      return yu && Eu && Eu.top < yu.bottom
    }
    class Hy extends xy {
      constructor(uu, Ru) {
        super(uu), this.mark = Ru
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (uu, Ru) {
        let yu = new Hy(Ru || document.createElement(uu.tagName), uu);
        return Ru || (yu.flags |= 4), yu
      }
    }
    class dy extends By {
      constructor(uu, Ru) {
        super(uu, Ru.length), this.text = Ru
      }
      sync(uu) {
        2 & this.flags || (super.sync(uu), this.dom.nodeValue != this.text && (uu && uu.node == this.dom && (uu.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(uu, Ru) {
        let yu = this.dom.nodeValue.length;
        uu > yu && (uu = yu);
        let Eu = uu,
          Ku = uu,
          Qu = 0;
        0 == uu && Ru < 0 || uu == yu && Ru >= 0 ? ku.chrome || ku.gecko || (uu ? (Eu--, Qu = 1) : Ku < yu && (Ku++, Qu = -1)) : Ru < 0 ? Eu-- : Ku < yu && Ku++;
        let mu = ER(this.dom, Eu, Ku).getClientRects();
        if (!mu.length) return null;
        let Ju = mu[(Qu ? Qu < 0 : Ru >= 0) ? 0 : mu.length - 1];
        return ku.safari && !Qu && 0 == Ju.width && (Ju = Array.prototype.find.call(mu, (uu => uu.width)) || Ju), Qu ? qu(Ju, Qu < 0) : Ju || null
      }
      static of (uu, Ru) {
        let yu = new dy(Ru || document.createTextNode(uu), uu);
        return Ru || (yu.flags |= 2), yu
      }
    }
    class by extends By {
      constructor(uu, Ru, yu, Eu) {
        super(uu, Ru, Eu), this.widget = yu
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(uu) {
        return !(48 & this.flags) && (this.flags & (uu < 0 ? 64 : 128)) > 0
      }
      coordsIn(uu, Ru) {
        return this.coordsInWidget(uu, Ru, !1)
      }
      coordsInWidget(uu, Ru, yu) {
        let Eu = this.widget.coordsAt(this.dom, uu, Ru);
        if (Eu) return Eu;
        if (yu) return qu(this.dom.getBoundingClientRect(), this.length ? 0 == uu : Ru <= 0);
        {
          let Ru = this.dom.getClientRects(),
            yu = null;
          if (!Ru.length) return null;
          let Eu = !!(16 & this.flags) || !(32 & this.flags) && uu > 0;
          for (let Ku = Eu ? Ru.length - 1 : 0; yu = Ru[Ku], !(uu > 0 ? 0 == Ku : Ku == Ru.length - 1 || yu.top < yu.bottom); Ku += Eu ? -1 : 1);
          return qu(yu, !Eu)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Eu.F.empty;
        let {
          root: uu
        } = this;
        if (!uu) return Eu.F.empty;
        let Ru = this.posAtStart;
        return uu.view.state.doc.slice(Ru, Ru + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (uu, Ru, yu, Eu, Ku) {
        return Ku || (Ku = uu.toDOM(Ru), uu.editable || (Ku.contentEditable = "false")), new by(Ku, yu, uu, Eu)
      }
    }
    class Cy extends By {
      constructor(uu) {
        let Ru = document.createElement("img");
        Ru.className = "cm-widgetBuffer", Ru.setAttribute("aria-hidden", "true"), super(Ru, 0, uu)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Eu.F.empty
      }
      coordsIn(uu) {
        return this.dom.getBoundingClientRect()
      }
    }
    class ky {
      constructor(uu) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = uu
      }
      advance(uu, Ru, yu) {
        let {
          tile: Eu,
          index: Ku,
          beforeBreak: Qu,
          parents: mu
        } = this;
        for (; uu || Ru > 0;)
          if (Eu.isComposite())
            if (Qu) {
              if (!uu) break;
              yu && yu.break(), uu--, Qu = !1
            } else if (Ku == Eu.children.length) {
          if (!uu && !mu.length) break;
          yu && yu.leave(Eu), Qu = !!Eu.breakAfter, ({
            tile: Eu,
            index: Ku
          } = mu.pop()), Ku++
        } else {
          let Ju = Eu.children[Ku],
            Nu = Ju.breakAfter;
          !(Ru > 0 ? Ju.length <= uu : Ju.length < uu) || yu && !1 === yu.skip(Ju, 0, Ju.length) && Ju.isComposite ? (mu.push({
            tile: Eu,
            index: Ku
          }), Eu = Ju, Ku = 0, yu && Ju.isComposite() && yu.enter(Ju)) : (Qu = !!Nu, Ku++, uu -= Ju.length)
        } else if (Ku == Eu.length) Qu = !!Eu.breakAfter, ({
          tile: Eu,
          index: Ku
        } = mu.pop()), Ku++;
        else {
          if (!uu) break;
          {
            let Ru = Math.min(uu, Eu.length - Ku);
            yu && yu.skip(Eu, Ku, Ku + Ru), uu -= Ru, Ku += Ru
          }
        }
        return this.tile = Eu, this.index = Ku, this.beforeBreak = Qu, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class ey {
      constructor(uu, Ru, yu, Eu) {
        this.from = uu, this.to = Ru, this.wrapper = yu, this.rank = Eu
      }
    }
    class Ay {
      constructor(uu, Ru, yu) {
        this.cache = uu, this.root = Ru, this.blockWrappers = yu, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(uu, Ru, yu, Eu) {
        var Ku;
        this.flushBuffer();
        let Qu = this.ensureMarks(Ru, yu),
          mu = Qu.lastChild;
        if (mu && mu.isText() && !(8 & mu.flags) && mu.length + uu.length < 512) {
          this.cache.reused.set(mu, 2), (Qu.children[Qu.children.length - 1] = new dy(mu.dom, mu.text + uu)).parent = Qu
        } else Qu.append(Eu || dy.of(uu, null === (Ku = this.cache.find(dy)) || void 0 === Ku ? void 0 : Ku.dom));
        this.pos += uu.length, this.afterWidget = null
      }
      addComposition(uu, Ru) {
        let yu = this.curLine;
        yu.dom != Ru.line.dom && (yu.setDOM(this.cache.reused.has(Ru.line) ? sy(Ru.line.dom) : Ru.line.dom), this.cache.reused.set(Ru.line, 2));
        let Eu = yu;
        for (let mu = Ru.marks.length - 1; mu >= 0; mu--) {
          let uu = Ru.marks[mu],
            yu = Eu.lastChild;
          if (yu instanceof Hy && yu.mark.eq(uu.mark)) yu.dom != uu.dom && yu.setDOM(sy(uu.dom)), Eu = yu;
          else {
            if (this.cache.reused.get(uu)) {
              let Ru = By.get(uu.dom);
              Ru && Ru.setDOM(sy(uu.dom))
            }
            let Ru = Hy.of(uu.mark, uu.dom);
            Eu.append(Ru), Eu = Ru
          }
          this.cache.reused.set(uu, 2)
        }
        let Ku = By.get(uu.text);
        Ku && this.cache.reused.set(Ku, 2);
        let Qu = new dy(uu.text, uu.text.nodeValue);
        Qu.flags |= 8, Eu.append(Qu)
      }
      addInlineWidget(uu, Ru, yu) {
        let Eu = this.afterWidget && 48 & uu.flags && (48 & this.afterWidget.flags) == (48 & uu.flags);
        Eu || this.flushBuffer();
        let Ku = this.ensureMarks(Ru, yu);
        Eu || 16 & uu.flags || Ku.append(this.getBuffer(1)), Ku.append(uu), this.pos += uu.length, this.afterWidget = uu
      }
      addMark(uu, Ru, yu) {
        this.flushBuffer(), this.ensureMarks(Ru, yu).append(uu), this.pos += uu.length, this.afterWidget = null
      }
      addBlockWidget(uu) {
        this.getBlockPos().append(uu), this.pos += uu.length, this.lastBlock = uu, this.endLine()
      }
      continueWidget(uu) {
        (this.afterWidget || this.lastBlock).length += uu, this.pos += uu
      }
      addLineStart(uu, Ru) {
        var yu;
        uu || (uu = ny);
        let Eu = Wy.start(uu, Ru || (null === (yu = this.cache.find(Wy)) || void 0 === yu ? void 0 : yu.dom), !!Ru);
        this.getBlockPos().append(this.lastBlock = this.curLine = Eu)
      }
      addLine(uu) {
        this.getBlockPos().append(uu), this.pos += uu.length, this.lastBlock = uu, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(uu) {
        this.blockPosCovered() || this.addLineStart(uu)
      }
      ensureLine(uu) {
        this.curLine || this.addLineStart(uu)
      }
      ensureMarks(uu, Ru) {
        var yu;
        let Eu = this.curLine;
        for (let Ku = uu.length - 1; Ku >= 0; Ku--) {
          let Qu, mu = uu[Ku];
          if (Ru > 0 && (Qu = Eu.lastChild) && Qu instanceof Hy && Qu.mark.eq(mu)) Eu = Qu, Ru--;
          else {
            let uu = Hy.of(mu, null === (yu = this.cache.find(Hy, (uu => uu.mark.eq(mu)))) || void 0 === yu ? void 0 : yu.dom);
            Eu.append(uu), Eu = uu, Ru = 0
          }
        }
        return Eu
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let uu = this.curLine.lastChild;
          uu && Uy(this.curLine, !1) && ("BR" == uu.dom.nodeName || !uu.isWidget() || ku.ios && Uy(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(ly, 0, 32) || new by(ly.toDOM(), 0, ly, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let uu = this.wrappers.length - 1; uu >= 0; uu--) this.wrappers[uu].to < this.pos && this.wrappers.splice(uu, 1);
        for (let uu = this.blockWrappers; uu.value && uu.from <= this.pos; uu.next())
          if (uu.to >= this.pos) {
            let Ru = new ey(uu.from, uu.to, uu.value, uu.rank),
              yu = this.wrappers.length;
            for (; yu > 0 && (this.wrappers[yu - 1].rank - Ru.rank || this.wrappers[yu - 1].to - Ru.to) < 0;) yu--;
            this.wrappers.splice(yu, 0, Ru)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var uu;
        this.updateBlockWrappers();
        let Ru = this.root;
        for (let yu of this.wrappers) {
          let Eu = Ru.lastChild;
          if (yu.from < this.pos && Eu instanceof Ty && Eu.wrapper.eq(yu.wrapper)) Ru = Eu;
          else {
            let Eu = Ty.of(yu.wrapper, null === (uu = this.cache.find(Ty, (uu => uu.wrapper.eq(yu.wrapper)))) || void 0 === uu ? void 0 : uu.dom);
            Ru.append(Eu), Ru = Eu
          }
        }
        return Ru
      }
      blockPosCovered() {
        let uu = this.lastBlock;
        return null != uu && !uu.breakAfter && (!uu.isWidget() || (160 & uu.flags) > 0)
      }
      getBuffer(uu) {
        let Ru = 2 | (uu < 0 ? 16 : 32),
          yu = this.cache.find(Cy, void 0, 1);
        return yu && (yu.flags = Ru), yu || new Cy(Ru)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Dy {
      constructor(uu) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = uu.iter()
      }
      skip(uu) {
        this.textOff + uu <= this.text.length ? this.textOff += uu : (this.skipCount += uu - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(uu) {
        if (this.textOff == this.text.length) {
          let {
            value: Ru,
            lineBreak: yu,
            done: Eu
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Eu) throw new Error("Ran out of text content when drawing inline views");
          this.text = Ru;
          let Ku = this.textOff = Math.min(uu, Ru.length);
          return yu ? null : Ru.slice(0, Ku)
        }
        let Ru = Math.min(this.text.length, this.textOff + uu),
          yu = this.text.slice(this.textOff, Ru);
        return this.textOff = Ru, yu
      }
    }
    const My = [by, Wy, dy, Hy, Cy, Ty, py];
    for (let Um = 0; Um < My.length; Um++) My[Um].bucket = Um;
    class Iy {
      constructor(uu) {
        this.view = uu, this.buckets = My.map((() => [])), this.index = My.map((() => 0)), this.reused = new Map
      }
      add(uu) {
        let Ru = uu.constructor.bucket,
          yu = this.buckets[Ru];
        yu.length < 6 ? yu.push(uu) : yu[this.index[Ru] = (this.index[Ru] + 1) % 6] = uu
      }
      find(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Eu = uu.bucket,
          Ku = this.buckets[Eu],
          Qu = this.index[Eu];
        for (let mu = Ku.length - 1; mu >= 0; mu--) {
          let uu = (mu + Qu) % Ku.length,
            Ju = Ku[uu];
          if ((!Ru || Ru(Ju)) && !this.reused.has(Ju)) return Ku.splice(uu, 1), uu < Qu && this.index[Eu]--, this.reused.set(Ju, yu), Ju
        }
        return null
      }
      findWidget(uu, Ru, yu) {
        let Eu = this.buckets[0];
        if (Eu.length)
          for (let Ku = 0, Qu = 0;; Ku++) {
            if (Ku == Eu.length) {
              if (Qu) return null;
              Qu = 1, Ku = 0
            }
            let mu = Eu[Ku];
            if (!this.reused.has(mu) && (0 == Qu ? mu.widget.compare(uu) : mu.widget.constructor == uu.constructor && uu.updateDOM(mu.dom, this.view, mu.widget))) return Eu.splice(Ku, 1), Ku < this.index[0] && this.index[0]--, mu.widget == uu && mu.length == Ru && (497 & mu.flags) == yu ? (this.reused.set(mu, 1), mu) : (this.reused.set(mu, 2), new by(mu.dom, Ru, uu, -498 & mu.flags | yu))
          }
      }
      reuse(uu) {
        return this.reused.set(uu, 1), uu
      }
      maybeReuse(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(uu)) return this.reused.set(uu, Ru), uu.dom
      }
      clear() {
        for (let uu = 0; uu < this.buckets.length; uu++) this.buckets[uu].length = this.index[uu] = 0
      }
    }
    class Gy {
      constructor(uu, Ru, yu, Ku, Qu) {
        this.view = uu, this.lE = Ku, this.disallowBlockEffectsFor = Qu, this.openWidget = !1, this.openMarks = 0, this.cache = new Iy(uu), this.text = new Dy(uu.state.doc), this.builder = new Ay(this.cache, new py(uu, uu.contentDOM), Eu.x.iter(yu)), this.cache.reused.set(Ru, 2), this.old = new ky(Ru), this.reuseWalker = {
          skip: (uu, Ru, yu) => {
            if (this.cache.add(uu), uu.isComposite()) return !1
          },
          enter: uu => this.cache.add(uu),
          leave: () => {},
          break: () => {}
        }
      }
      run(uu, Ru) {
        let yu = Ru && this.getCompositionContext(Ru.text);
        for (let Eu = 0, Ku = 0, Qu = 0;;) {
          let mu = Qu < uu.length ? uu[Qu++] : null,
            Ju = mu ? mu.fromA : this.old.root.length;
          if (Ju > Eu) {
            let uu = Ju - Eu;
            this.preserve(uu, !Qu, !mu), Eu = Ju, Ku += uu
          }
          if (!mu) break;
          Ru && mu.fromA <= Ru.range.fromA && mu.toA >= Ru.range.toA ? (this.forward(mu.fromA, Ru.range.fromA, Ru.range.fromA < Ru.range.toA ? 1 : -1), this.emit(Ku, Ru.range.fromB), this.cache.clear(), this.builder.addComposition(Ru, yu), this.text.skip(Ru.range.toB - Ru.range.fromB), this.forward(Ru.range.fromA, mu.toA), this.emit(Ru.range.toB, mu.toB)) : (this.forward(mu.fromA, mu.toA), this.emit(Ku, mu.toB)), Ku = mu.toB, Eu = mu.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(uu, Ru, yu) {
        let Eu = function(uu) {
            let Ru = [];
            for (let yu = uu.parents.length; yu > 1; yu--) {
              let Eu = yu == uu.parents.length ? uu.tile : uu.parents[yu].tile;
              Eu instanceof Hy && Ru.push(Eu.mark)
            }
            return Ru
          }(this.old),
          Ku = this.openMarks;
        this.old.advance(uu, yu ? 1 : -1, {
          skip: (uu, Ru, yu) => {
            if (uu.isWidget())
              if (this.openWidget) this.builder.continueWidget(yu - Ru);
              else {
                let Qu = yu > 0 || Ru < uu.length ? by.of(uu.widget, this.view, yu - Ru, 496 & uu.flags, this.cache.maybeReuse(uu)) : this.cache.reuse(uu);
                256 & Qu.flags ? (Qu.flags &= -2, this.builder.addBlockWidget(Qu)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(Qu, Eu, Ku), Ku = Eu.length)
              }
            else if (uu.isText()) this.builder.ensureLine(null), Ru || yu != uu.length || this.cache.reused.has(uu) ? (this.cache.add(uu), this.builder.addText(uu.text.slice(Ru, yu), Eu, Ku)) : this.builder.addText(uu.text, Eu, Ku, this.cache.reuse(uu)), Ku = Eu.length;
            else if (uu.isLine()) uu.flags &= -2, this.cache.reused.set(uu, 1), this.builder.addLine(uu);
            else if (uu instanceof Cy) this.cache.add(uu);
            else {
              if (!(uu instanceof Hy)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(uu, Eu, Ku), this.cache.reused.set(uu, 1), Ku = Eu.length
            }
            this.openWidget = !1
          },
          enter: uu => {
            uu.isLine() ? this.builder.addLineStart(uu.attrs, this.cache.maybeReuse(uu)) : (this.cache.add(uu), uu instanceof Hy && Eu.unshift(uu.mark)), this.openWidget = !1
          },
          leave: uu => {
            uu.isLine() ? Eu.length && (Eu.length = Ku = 0) : uu instanceof Hy && (Eu.shift(), Ku = Math.min(Ku, Eu.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(uu)
      }
      emit(uu, Ru) {
        let yu = null,
          Ku = this.builder,
          Qu = 0,
          mu = Eu.x.spans(this.lE, uu, Ru, {
            point: (uu, Ru, Eu, mu, Ju, Nu) => {
              if (Eu instanceof lu) {
                if (this.disallowBlockEffectsFor[Nu]) {
                  if (Eu.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (Ru > this.view.state.doc.lineAt(uu).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (Qu = mu.length, Ju > mu.length) Ku.continueWidget(Ru - uu);
                else {
                  let Qu = Eu.widget || (Eu.block ? ty.block : ty.inline),
                    Nu = function(uu) {
                      let Ru = uu.isReplace ? (uu.startSide < 0 ? 64 : 0) | (uu.endSide > 0 ? 128 : 0) : uu.startSide > 0 ? 32 : 16;
                      uu.block && (Ru |= 256);
                      return Ru
                    }(Eu),
                    Xu = this.cache.findWidget(Qu, Ru - uu, Nu) || by.of(Qu, this.view, Ru - uu, Nu);
                  Eu.block ? (Eu.startSide > 0 && Ku.addLineStartIfNotCovered(yu), Ku.addBlockWidget(Xu)) : (Ku.ensureLine(yu), Ku.addInlineWidget(Xu, mu, Ju))
                }
                yu = null
              } else yu = function(uu, Ru) {
                let yu = Ru.spec.attributes,
                  Eu = Ru.spec.class;
                if (!yu && !Eu) return uu;
                uu || (uu = {
                  class: "cm-line"
                });
                yu && eu(yu, uu);
                Eu && (uu.class += " " + Eu);
                return uu
              }(yu, Eu);
              Ru > uu && this.text.skip(Ru - uu)
            },
            span: (uu, Ru, Eu, Qu) => {
              for (let mu = uu; mu < Ru;) {
                let Ju = this.text.next(Math.min(512, Ru - mu));
                null == Ju ? (Ku.addLineStartIfNotCovered(yu), Ku.addBreak(), mu++) : (Ku.ensureLine(yu), Ku.addText(Ju, Eu, mu == uu ? Qu : Eu.length), mu += Ju.length), yu = null
              }
            }
          });
        Ku.addLineStartIfNotCovered(yu), this.openWidget = mu > Qu, this.openMarks = mu
      }
      forward(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        Ru - uu <= 10 ? this.old.advance(Ru - uu, yu, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(Ru - uu - 10, -1), this.old.advance(5, yu, this.reuseWalker))
      }
      getCompositionContext(uu) {
        let Ru = [],
          yu = null;
        for (let Eu = uu.parentNode;; Eu = Eu.parentNode) {
          let uu = By.get(Eu);
          if (Eu == this.view.contentDOM) break;
          uu instanceof Hy ? Ru.push(uu) : (null === uu || void 0 === uu ? void 0 : uu.isLine()) ? yu = uu : uu instanceof Ty || ("DIV" != Eu.nodeName || yu || Eu == this.view.contentDOM ? yu || Ru.push(Hy.of(new su({
            tagName: Eu.nodeName.toLowerCase(),
            attributes: Iu(Eu)
          }), Eu)) : yu = new Wy(Eu, ny))
        }
        return {
          line: yu,
          marks: Ru
        }
      }
    }

    function Uy(uu, Ru) {
      let yu = uu => {
        for (let Eu of uu.children)
          if ((Ru ? Eu.isText() : Eu.length) || yu(Eu)) return !0;
        return !1
      };
      return yu(uu)
    }
    const ny = {
      class: "cm-line"
    };

    function sy(uu) {
      let Ru = By.get(uu);
      return Ru && Ru.setDOM(uu.cloneNode()), uu
    }
    class ty extends Gu {
      constructor(uu) {
        super(), this.tag = uu
      }
      eq(uu) {
        return uu.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(uu) {
        return uu.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    ty.inline = new ty("span"), ty.block = new ty("div");
    const ly = new class extends Gu {
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
    class gy {
      constructor(uu) {
        this.view = uu, this.lE = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = nu.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new py(uu, uu.contentDOM), this.updateInner([new Xy(0, 0, 0, uu.state.doc.length)], null)
      }
      update(uu) {
        var Ru;
        let yu = uu.changedRanges;
        this.minWidth > 0 && yu.length && (yu.every((uu => {
          let {
            fromA: Ru,
            toA: yu
          } = uu;
          return yu < this.minWidthFrom || Ru > this.minWidthTo
        })) ? (this.minWidthFrom = uu.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = uu.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(uu);
        let Ku = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (Ru = this.domChanged) || void 0 === Ru ? void 0 : Ru.newSel) ? Ku = this.domChanged.newSel.head : function(uu, Ru) {
          let yu = !1;
          Ru && uu.iterChangedRanges(((uu, Eu) => {
            uu < Ru.to && Eu > Ru.from && (yu = !0)
          }));
          return yu
        }(uu.changes, this.hasComposition) || uu.selectionSet || (Ku = uu.state.selection.main.head));
        let Qu = Ku > -1 ? function(uu, Ru, yu) {
          let Eu = Ly(uu, yu);
          if (!Eu) return null;
          let {
            node: Ku,
            from: Qu,
            to: mu
          } = Eu, Ju = Ku.nodeValue;
          if (/[\n\r]/.test(Ju)) return null;
          if (uu.state.doc.sliceString(Eu.from, Eu.to) != Ju) return null;
          let Nu = Ru.invertedDesc;
          return {
            range: new Xy(Nu.mapPos(Qu), Nu.mapPos(mu), Qu, mu),
            text: Ku
          }
        }(this.view, uu.changes, Ku) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: Ru,
            to: Eu
          } = this.hasComposition;
          yu = new Xy(Ru, Eu, uu.changes.mapPos(Ru, -1), uu.changes.mapPos(Eu, 1)).addToSet(yu.slice())
        }
        this.hasComposition = Qu ? {
          from: Qu.range.fromB,
          to: Qu.range.toB
        } : null, (ku.ie || ku.chrome) && !Qu && uu && uu.state.doc.lines != uu.startState.doc.lines && (this.forceSelection = !0);
        let mu = this.lE,
          Ju = this.blockWrappers;
        this.updateDeco();
        let Nu = function(uu, Ru, yu) {
          let Ku = new zy;
          return Eu.x.compare(uu, Ru, yu, Ku), Ku.changes
        }(mu, this.lE, uu.changes);
        Nu.length && (yu = Xy.extendWithRanges(yu, Nu));
        let Xu = function(uu, Ru, yu) {
          let Ku = new Fy;
          return Eu.x.compare(uu, Ru, yu, Ku), Ku.changes
        }(Ju, this.blockWrappers, uu.changes);
        return Xu.length && (yu = Xy.extendWithRanges(yu, Xu)), Qu && !yu.some((uu => uu.fromA <= Qu.range.fromA && uu.toA >= Qu.range.toA)) && (yu = Qu.range.addToSet(yu.slice())), !(2 & this.tile.flags && 0 == yu.length) && (this.updateInner(yu, Qu), uu.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(uu, Ru) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: yu
        } = this.view;
        yu.ignore((() => {
          if (Ru || uu.length) {
            let yu = this.tile,
              Eu = new Gy(this.view, yu, this.blockWrappers, this.lE, this.dynamicDecorationMap);
            Ru && By.get(Ru.text) && Eu.cache.reused.set(By.get(Ru.text), 2), this.tile = Eu.run(uu, Ru), cy(yu, Eu.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Eu = ku.chrome || ku.ios ? {
            node: yu.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Eu), !Eu || !Eu.written && yu.selectionRange.focusNode == Eu.node && this.tile.dom.contains(Eu.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Eu = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Ku of this.tile.children) Ku.isWidget() && Ku.widget instanceof wy && Eu.push(Ku.dom);
        yu.updateGaps(Eu)
      }
      updateEditContextFormatting(uu) {
        this.editContextFormatting = this.editContextFormatting.map(uu.changes);
        for (let Ru of uu.transactions)
          for (let uu of Ru.effects) uu.is(PR) && (this.editContextFormatting = uu.value)
      }
      updateSelection() {
        let uu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: Ru
        } = this.tile, yu = this.view.root.activeElement, Eu = yu == Ru, Ku = !Eu && !(this.view.state.facet(YR) || Ru.tabIndex > -1) && wu(Ru, this.view.observer.selectionRange) && !(yu && Ru.contains(yu));
        if (!(Eu || uu || Ku)) return;
        let Qu = this.forceSelection;
        this.forceSelection = !1;
        let mu, Ju, Nu = this.view.state.selection.main;
        if (Nu.empty ? Ju = mu = this.inlineDOMNearPos(Nu.anchor, Nu.assoc || 1) : (Ju = this.inlineDOMNearPos(Nu.head, Nu.head == Nu.from ? 1 : -1), mu = this.inlineDOMNearPos(Nu.anchor, Nu.anchor == Nu.from ? 1 : -1)), ku.gecko && Nu.empty && !this.hasComposition && (1 == (Xu = mu).node.nodeType && Xu.node.firstChild && (0 == Xu.offset || "false" == Xu.node.childNodes[Xu.offset - 1].contentEditable) && (Xu.offset == Xu.node.childNodes.length || "false" == Xu.node.childNodes[Xu.offset].contentEditable))) {
          let uu = document.createTextNode("");
          this.view.observer.ignore((() => mu.node.insertBefore(uu, mu.node.childNodes[mu.offset] || null))), mu = Ju = new NR(uu, 0), Qu = !0
        }
        var Xu;
        let Vu = this.view.observer.selectionRange;
        !Qu && Vu.focusNode && (hu(mu.node, mu.offset, Vu.anchorNode, Vu.anchorOffset) && hu(Ju.node, Ju.offset, Vu.focusNode, Vu.focusOffset) || this.suppressWidgetCursorChange(Vu, Nu)) || (this.view.observer.ignore((() => {
          ku.android && ku.chrome && Ru.contains(Vu.focusNode) && function(uu, Ru) {
            for (let yu = uu; yu && yu != Ru; yu = yu.assignedSlot || yu.parentNode)
              if (1 == yu.nodeType && "false" == yu.contentEditable) return !0;
            return !1
          }(Vu.focusNode, Ru) && (Ru.blur(), Ru.focus({
            preventScroll: !0
          }));
          let uu = zu(this.view.root);
          if (uu)
            if (Nu.empty) {
              if (ku.gecko) {
                let uu = (Eu = mu.node, Qu = mu.offset, 1 != Eu.nodeType ? 0 : (Qu && "false" == Eu.childNodes[Qu - 1].contentEditable ? 1 : 0) | (Qu < Eu.childNodes.length && "false" == Eu.childNodes[Qu].contentEditable ? 2 : 0));
                if (uu && 3 != uu) {
                  let Ru = (1 == uu ? mR : JR)(mu.node, mu.offset);
                  Ru && (mu = new NR(Ru.node, Ru.offset))
                }
              }
              uu.collapse(mu.node, mu.offset), null != Nu.bidiLevel && void 0 !== uu.caretBidiLevel && (uu.caretBidiLevel = Nu.bidiLevel)
            } else if (uu.extend) {
            uu.collapse(mu.node, mu.offset);
            try {
              uu.extend(Ju.node, Ju.offset)
            } catch (Xu) {}
          } else {
            let Ru = document.createRange();
            Nu.anchor > Nu.head && ([mu, Ju] = [Ju, mu]), Ru.setEnd(Ju.node, Ju.offset), Ru.setStart(mu.node, mu.offset), uu.removeAllRanges(), uu.addRange(Ru)
          } else;
          var Eu, Qu;
          Ku && this.view.root.activeElement == Ru && (Ru.blur(), yu && yu.focus())
        })), this.view.observer.setSelectionRange(mu, Ju)), this.impreciseAnchor = mu.precise ? null : new NR(Vu.anchorNode, Vu.anchorOffset), this.impreciseHead = Ju.precise ? null : new NR(Vu.focusNode, Vu.focusOffset)
      }
      suppressWidgetCursorChange(uu, Ru) {
        return this.hasComposition && Ru.empty && hu(uu.focusNode, uu.focusOffset, uu.anchorNode, uu.anchorOffset) && this.posFromDOM(uu.focusNode, uu.focusOffset) == Ru.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: uu
        } = this, Ru = uu.state.selection.main, yu = zu(uu.root), {
          anchorNode: Eu,
          anchorOffset: Ku
        } = uu.observer.selectionRange;
        if (!yu || !Ru.empty || !Ru.assoc || !yu.modify) return;
        let Qu = this.lineAt(Ru.head, Ru.assoc);
        if (!Qu) return;
        let mu = Qu.posAtStart;
        if (Ru.head == mu || Ru.head == mu + Qu.length) return;
        let Ju = this.coordsAt(Ru.head, -1),
          Nu = this.coordsAt(Ru.head, 1);
        if (!Ju || !Nu || Ju.bottom > Nu.top) return;
        let Xu = this.domAtPos(Ru.head + Ru.assoc, Ru.assoc);
        yu.collapse(Xu.node, Xu.offset), yu.modify("move", Ru.assoc < 0 ? "forward" : "backward", "lineboundary"), uu.observer.readSelectionRange();
        let Vu = uu.observer.selectionRange;
        uu.docView.posFromDOM(Vu.anchorNode, Vu.anchorOffset) != Ru.from && yu.collapse(Eu, Ku)
      }
      posFromDOM(uu, Ru) {
        let yu = this.tile.nearest(uu);
        if (!yu) return 2 & this.tile.dom.compareDocumentPosition(uu) ? 0 : this.view.state.doc.length;
        let Eu = yu.posAtStart;
        if (!yu.isComposite()) return yu.isText() ? uu == yu.dom ? Eu + Ru : Eu + (Ru ? yu.length : 0) : Eu;
        {
          let Ku;
          if (uu == yu.dom) Ku = yu.dom.childNodes[Ru];
          else {
            let Eu = 0 == ou(uu) ? 0 : 0 == Ru ? -1 : 1;
            for (;;) {
              let Ru = uu.parentNode;
              if (Ru == yu.dom) break;
              0 == Eu && Ru.firstChild != Ru.lastChild && (Eu = uu == Ru.firstChild ? -1 : 1), uu = Ru
            }
            Ku = Eu < 0 ? uu : uu.nextSibling
          }
          if (Ku == yu.dom.firstChild) return Eu;
          for (; Ku && !By.get(Ku);) Ku = Ku.nextSibling;
          if (!Ku) return Eu + yu.length;
          for (let uu = 0, Ru = Eu;; uu++) {
            let Eu = yu.children[uu];
            if (Eu.dom == Ku) return Ru;
            Ru += Eu.length + Eu.breakAfter
          }
        }
      }
      domAtPos(uu, Ru) {
        let {
          tile: yu,
          offset: Eu
        } = this.tile.resolveBlock(uu, Ru);
        return yu.isWidget() ? yu.domPosFor(uu, Ru) : yu.domIn(Eu, Ru)
      }
      inlineDOMNearPos(uu, Ru) {
        let yu, Eu, Ku = -1,
          Qu = !1,
          mu = -1,
          Ju = !1;
        return this.tile.blockTiles(((Ru, Nu) => {
          if (Ru.isWidget()) {
            if (32 & Ru.flags && Nu >= uu) return !0;
            16 & Ru.flags && (Qu = !0)
          } else {
            let Xu = Nu + Ru.length;
            if (Nu <= uu && (yu = Ru, Ku = uu - Nu, Qu = Xu < uu), Xu >= uu && !Eu && (Eu = Ru, mu = uu - Nu, Ju = Nu > uu), Nu > uu && Eu) return !0
          }
        })), yu || Eu ? (Qu && Eu ? yu = null : Ju && yu && (Eu = null), yu && Ru < 0 || !Eu ? yu.domIn(Ku, Ru) : Eu.domIn(mu, Ru)) : this.domAtPos(uu, Ru)
      }
      coordsAt(uu, Ru) {
        let {
          tile: yu,
          offset: Eu
        } = this.tile.resolveBlock(uu, Ru);
        return yu.isWidget() ? yu.widget instanceof wy ? null : yu.coordsInWidget(Eu, Ru, !0) : yu.coordsIn(Eu, Ru)
      }
      lineAt(uu, Ru) {
        let {
          tile: yu
        } = this.tile.resolveBlock(uu, Ru);
        return yu.isLine() ? yu : null
      }
      coordsForChar(uu) {
        let {
          tile: Ru,
          offset: yu
        } = this.tile.resolveBlock(uu, 1);
        if (!Ru.isLine()) return null;
        return function uu(Ru, yu) {
          if (Ru.isComposite())
            for (let Eu of Ru.children) {
              if (Eu.length >= yu) {
                let Ru = uu(Eu, yu);
                if (Ru) return Ru
              }
              if ((yu -= Eu.length) < 0) break
            } else if (Ru.isText() && yu < Ru.length) {
              let uu = (0, Eu.S)(Ru.text, yu);
              if (uu == yu) return null;
              let Ku = ER(Ru.dom, yu, uu).getClientRects();
              for (let Ru = 0; Ru < Ku.length; Ru++) {
                let uu = Ku[Ru];
                if (Ru == Ku.length - 1 || uu.top < uu.bottom && uu.left < uu.right) return uu
              }
            } return null
        }(Ru, yu)
      }
      measureVisibleLineHeights(uu) {
        let Ru = [],
          {
            from: yu,
            to: Eu
          } = uu,
          Ku = this.view.contentDOM.clientWidth,
          Qu = Ku > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          mu = -1,
          Ju = this.view.textDirection == XR.LTR,
          Nu = 0,
          Xu = (uu, Vu, ru) => {
            for (let Bu = 0; Bu < uu.children.length && !(Vu > Eu); Bu++) {
              let Eu = uu.children[Bu],
                xu = Vu + Eu.length,
                Su = Eu.dom.getBoundingClientRect(),
                {
                  height: pu
                } = Su;
              if (ru && !Bu && (Nu += Su.top - ru.top), Eu instanceof Ty) xu > yu && Xu(Eu, Vu, Su);
              else if (Vu >= yu && (Nu > 0 && Ru.push(-Nu), Ru.push(pu + Nu), Nu = 0, Qu)) {
                let uu = Eu.dom.lastChild,
                  Ru = uu ? Zu(uu) : [];
                if (Ru.length) {
                  let uu = Ru[Ru.length - 1],
                    yu = Ju ? uu.right - Su.left : Su.right - uu.left;
                  yu > mu && (mu = yu, this.minWidth = Ku, this.minWidthFrom = Vu, this.minWidthTo = xu)
                }
              }
              ru && Bu == uu.children.length - 1 && (Nu += ru.bottom - Su.bottom), Vu = xu + Eu.breakAfter
            }
          };
        return Xu(this.tile, 0, null), Ru
      }
      textDirectionAt(uu) {
        let {
          tile: Ru
        } = this.tile.resolveBlock(uu, 1);
        return "rtl" == getComputedStyle(Ru.dom).direction ? XR.RTL : XR.LTR
      }
      measureTextSize() {
        let uu = this.tile.blockTiles((uu => {
          if (uu.isLine() && uu.children.length && uu.length <= 20) {
            let Ru, yu = 0;
            for (let Eu of uu.children) {
              if (!Eu.isText() || /[^ -~]/.test(Eu.text)) return;
              let uu = Zu(Eu.dom);
              if (1 != uu.length) return;
              yu += uu[0].width, Ru = uu[0].height
            }
            if (yu) return {
              lineHeight: uu.dom.getBoundingClientRect().height,
              charWidth: yu / uu.length,
              textHeight: Ru
            }
          }
        }));
        if (uu) return uu;
        let Ru, yu, Eu, Ku = document.createElement("div");
        return Ku.className = "cm-line", Ku.style.width = "99999px", Ku.style.position = "absolute", Ku.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Ku);
          let uu = Zu(Ku.firstChild)[0];
          Ru = Ku.getBoundingClientRect().height, yu = uu && uu.width ? uu.width / 27 : 7, Eu = uu && uu.height ? uu.height : Ru, Ku.remove()
        })), {
          lineHeight: Ru,
          charWidth: yu,
          textHeight: Eu
        }
      }
      computeBlockGapDeco() {
        let uu = [],
          Ru = this.view.viewState;
        for (let yu = 0, Eu = 0;; Eu++) {
          let Ku = Eu == Ru.viewports.length ? null : Ru.viewports[Eu],
            Qu = Ku ? Ku.from - 1 : this.view.state.doc.length;
          if (Qu > yu) {
            let Eu = (Ru.lineBlockAt(Qu).bottom - Ru.lineBlockAt(yu).top) / this.view.scaleY;
            uu.push(nu.replace({
              widget: new wy(Eu),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(yu, Qu))
          }
          if (!Ku) break;
          yu = Ku.to + 1
        }
        return nu.set(uu)
      }
      updateDeco() {
        let uu = 1,
          Ru = this.view.state.facet(uy).map((Ru => (this.dynamicDecorationMap[uu++] = "function" == typeof Ru) ? Ru(this.view) : Ru)),
          yu = !1,
          Ku = this.view.state.facet(yy).map(((uu, Ru) => {
            let Eu = "function" == typeof uu;
            return Eu && (yu = !0), Eu ? uu(this.view) : uu
          }));
        for (Ku.length && (this.dynamicDecorationMap[uu++] = yu, Ru.push(Eu.x.join(Ku))), this.lE = [this.editContextFormatting, ...Ru, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; uu < this.lE.length;) this.dynamicDecorationMap[uu++] = !1;
        this.blockWrappers = this.view.state.facet(Ry).map((uu => "function" == typeof uu ? uu(this.view) : uu))
      }
      scrollIntoView(uu) {
        var Ru;
        if (uu.isSnapshot) {
          let Ru = this.view.viewState.lineBlockAt(uu.range.head);
          return this.view.scrollDOM.scrollTop = Ru.top - uu.yMargin, void(this.view.scrollDOM.scrollLeft = uu.xMargin)
        }
        for (let Vu of this.view.state.facet(wR)) try {
          if (Vu(this.view, uu.range, uu)) return !0
        } catch (Xu) {
          iR(this.view.state, Xu, "scroll handler")
        }
        let yu, {
            range: Eu
          } = uu,
          Ku = this.coordsAt(Eu.head, null !== (Ru = Eu.assoc) && void 0 !== Ru ? Ru : Eu.empty ? 0 : Eu.head > Eu.anchor ? -1 : 1);
        if (!Ku) return;
        !Eu.empty && (yu = this.coordsAt(Eu.anchor, Eu.anchor > Eu.head ? -1 : 1)) && (Ku = {
          left: Math.min(Ku.left, yu.left),
          top: Math.min(Ku.top, yu.top),
          right: Math.max(Ku.right, yu.right),
          bottom: Math.max(Ku.bottom, yu.bottom)
        });
        let Qu = Jy(this.view),
          mu = {
            left: Ku.left - Qu.left,
            top: Ku.top - Qu.top,
            right: Ku.right + Qu.right,
            bottom: Ku.bottom + Qu.bottom
          },
          {
            offsetWidth: Ju,
            offsetHeight: Nu
          } = this.view.scrollDOM;
        if (function(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
            let Nu = uu.ownerDocument,
              Xu = Nu.defaultView || window;
            for (let Vu = uu, ru = !1; Vu && !ru;)
              if (1 == Vu.nodeType) {
                let uu, Bu = Vu == Nu.body,
                  xu = 1,
                  Su = 1;
                if (Bu) uu = Ou(Xu);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(Vu).position) && (ru = !0), Vu.scrollHeight <= Vu.clientHeight && Vu.scrollWidth <= Vu.clientWidth) {
                    Vu = Vu.assignedSlot || Vu.parentNode;
                    continue
                  }
                  let Ru = Vu.getBoundingClientRect();
                  ({
                    scaleX: xu,
                    scaleY: Su
                  } = vu(Vu, Ru)), uu = {
                    left: Ru.left,
                    right: Ru.left + Vu.clientWidth * xu,
                    top: Ru.top,
                    bottom: Ru.top + Vu.clientHeight * Su
                  }
                }
                let pu = 0,
                  Tu = 0;
                if ("nearest" == Ku) Ru.top < uu.top + mu ? (Tu = Ru.top - (uu.top + mu), yu > 0 && Ru.bottom > uu.bottom + Tu && (Tu = Ru.bottom - uu.bottom + mu)) : Ru.bottom > uu.bottom - mu && (Tu = Ru.bottom - uu.bottom + mu, yu < 0 && Ru.top - Tu < uu.top && (Tu = Ru.top - (uu.top + mu)));
                else {
                  let Eu = Ru.bottom - Ru.top,
                    Qu = uu.bottom - uu.top;
                  Tu = ("center" == Ku && Eu <= Qu ? Ru.top + Eu / 2 - Qu / 2 : "start" == Ku || "center" == Ku && yu < 0 ? Ru.top - mu : Ru.bottom - Qu + mu) - uu.top
                }
                if ("nearest" == Eu ? Ru.left < uu.left + Qu ? (pu = Ru.left - (uu.left + Qu), yu > 0 && Ru.right > uu.right + pu && (pu = Ru.right - uu.right + Qu)) : Ru.right > uu.right - Qu && (pu = Ru.right - uu.right + Qu, yu < 0 && Ru.left < uu.left + pu && (pu = Ru.left - (uu.left + Qu))) : pu = ("center" == Eu ? Ru.left + (Ru.right - Ru.left) / 2 - (uu.right - uu.left) / 2 : "start" == Eu == Ju ? Ru.left - Qu : Ru.right - (uu.right - uu.left) + Qu) - uu.left, pu || Tu)
                  if (Bu) Xu.scrollBy(pu, Tu);
                  else {
                    let uu = 0,
                      yu = 0;
                    if (Tu) {
                      let uu = Vu.scrollTop;
                      Vu.scrollTop += Tu / Su, yu = (Vu.scrollTop - uu) * Su
                    }
                    if (pu) {
                      let Ru = Vu.scrollLeft;
                      Vu.scrollLeft += pu / xu, uu = (Vu.scrollLeft - Ru) * xu
                    }
                    Ru = {
                      left: Ru.left - uu,
                      top: Ru.top - yu,
                      right: Ru.right - uu,
                      bottom: Ru.bottom - yu
                    }, uu && Math.abs(uu - pu) < 1 && (Eu = "nearest"), yu && Math.abs(yu - Tu) < 1 && (Ku = "nearest")
                  } if (Bu) break;
                (Ru.top < uu.top || Ru.bottom > uu.bottom || Ru.left < uu.left || Ru.right > uu.right) && (Ru = {
                  left: Math.max(Ru.left, uu.left),
                  right: Math.min(Ru.right, uu.right),
                  top: Math.max(Ru.top, uu.top),
                  bottom: Math.min(Ru.bottom, uu.bottom)
                }), Vu = Vu.assignedSlot || Vu.parentNode
              } else {
                if (11 != Vu.nodeType) break;
                Vu = Vu.host
              }
          }(this.view.scrollDOM, mu, Eu.head < Eu.anchor ? -1 : 1, uu.x, uu.y, Math.max(Math.min(uu.xMargin, Ju), -Ju), Math.max(Math.min(uu.yMargin, Nu), -Nu), this.view.textDirection == XR.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Ku.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Ku.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let uu = this.view.docView.lineAt(Eu.head, 1);
          uu && uu.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(uu) {
        let Ru = uu => uu.isWidget() || uu.children.some(Ru);
        return Ru(this.tile.resolveBlock(uu, 1).tile)
      }
      destroy() {
        cy(this.tile)
      }
    }

    function cy(uu, Ru) {
      let yu = null === Ru || void 0 === Ru ? void 0 : Ru.get(uu);
      if (1 != yu) {
        null == yu && uu.destroy();
        for (let yu of uu.children) cy(yu, Ru)
      }
    }

    function Ly(uu, Ru) {
      let yu = uu.observer.selectionRange;
      if (!yu.focusNode) return null;
      let Eu = mR(yu.focusNode, yu.focusOffset),
        Ku = JR(yu.focusNode, yu.focusOffset),
        Qu = Eu || Ku;
      if (Ku && Eu && Ku.node != Eu.node) {
        let Ru = By.get(Ku.node);
        if (!Ru || Ru.isText() && Ru.text != Ku.node.nodeValue) Qu = Ku;
        else if (uu.docView.lastCompositionAfterCursor) {
          let uu = By.get(Eu.node);
          !uu || uu.isText() && uu.text != Eu.node.nodeValue || (Qu = Ku)
        }
      }
      if (uu.docView.lastCompositionAfterCursor = Qu != Eu, !Qu) return null;
      let mu = Ru - Qu.offset;
      return {
        from: mu,
        to: mu + Qu.node.nodeValue.length,
        node: Qu.node
      }
    }
    let zy = class {
      constructor() {
        this.changes = []
      }
      compareRange(uu, Ru) {
        cu(uu, Ru, this.changes)
      }
      comparePoint(uu, Ru) {
        cu(uu, Ru, this.changes)
      }
      boundChange(uu) {
        cu(uu, uu, this.changes)
      }
    };
    class Fy {
      constructor() {
        this.changes = []
      }
      compareRange(uu, Ru) {
        cu(uu, Ru, this.changes)
      }
      comparePoint() {}
      boundChange(uu) {
        cu(uu, uu, this.changes)
      }
    }
    class wy extends Gu {
      constructor(uu) {
        super(), this.height = uu
      }
      toDOM() {
        let uu = document.createElement("div");
        return uu.className = "cm-gap", this.updateDOM(uu), uu
      }
      eq(uu) {
        return uu.height == this.height
      }
      updateDOM(uu) {
        return uu.style.height = this.height + "px", !0
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

    function Zy(uu, Ru, yu) {
      let Eu = uu.lineBlockAt(Ru);
      if (Array.isArray(Eu.type)) {
        let uu;
        for (let Ku of Eu.type) {
          if (Ku.from > Ru) break;
          if (!(Ku.to < Ru)) {
            if (Ku.from < Ru && Ku.to > Ru) return Ku;
            uu && (Ku.type != Uu.Text || uu.type == Ku.type && !(yu < 0 ? Ku.from < Ru : Ku.to > Ru)) || (uu = Ku)
          }
        }
        return uu || Eu
      }
      return Eu
    }

    function hy(uu, Ru, yu, Eu) {
      let Ku = uu.state.doc.lineAt(Ru.head),
        Qu = uu.bidiSpans(Ku),
        mu = uu.textDirectionAt(Ku.from);
      for (let Ju = Ru, Nu = null;;) {
        let Ru = MR(Ku, Qu, mu, Ju, yu),
          Xu = DR;
        if (!Ru) {
          if (Ku.number == (yu ? uu.state.doc.lines : 1)) return Ju;
          Xu = "\n", Ku = uu.state.doc.line(Ku.number + (yu ? 1 : -1)), Qu = uu.bidiSpans(Ku), Ru = uu.visualLineSide(Ku, !yu)
        }
        if (Nu) {
          if (!Nu(Xu)) return Ju
        } else {
          if (!Eu) return Ru;
          Nu = Eu(Xu)
        }
        Ju = Ru
      }
    }

    function Py(uu, Ru, yu) {
      for (;;) {
        let Eu = 0;
        for (let Ku of uu) Ku.between(Ru - 1, Ru + 1, ((uu, Ku, Qu) => {
          if (Ru > uu && Ru < Ku) {
            let Qu = Eu || yu || (Ru - uu < Ku - Ru ? -1 : 1);
            Ru = Qu < 0 ? uu : Ku, Eu = Qu
          }
        }));
        if (!Eu) return Ru
      }
    }

    function iy(uu, Ru) {
      let yu = null;
      for (let Ku = 0; Ku < Ru.yT.length; Ku++) {
        let Qu = Ru.yT[Ku],
          mu = null;
        if (Qu.empty) {
          let Ru = Py(uu, Qu.from, 0);
          Ru != Qu.from && (mu = Eu.n.cursor(Ru, -1))
        } else {
          let Ru = Py(uu, Qu.from, -1),
            yu = Py(uu, Qu.to, 1);
          Ru == Qu.from && yu == Qu.to || (mu = Eu.n.range(Qu.from == Qu.anchor ? Ru : yu, Qu.from == Qu.head ? Ru : yu))
        }
        mu && (yu || (yu = Ru.yT.slice()), yu[Ku] = mu)
      }
      return yu ? Eu.n.create(yu, Ru.mainIndex) : Ru
    }

    function Yy(uu, Ru, yu) {
      let Ku = Py(uu.state.facet(Ey).map((Ru => Ru(uu))), yu.from, Ru.head > yu.from ? -1 : 1);
      return Ku == yu.from ? yu : Eu.n.cursor(Ku, Ku < yu.from ? 1 : -1)
    }
    class oy {
      constructor(uu, Ru) {
        this.pos = uu, this.assoc = Ru
      }
    }

    function qy(uu, Ru, yu, Ku) {
      let Qu, mu = uu.contentDOM.getBoundingClientRect(),
        Ju = mu.top + uu.viewState.paddingTop,
        {
          x: Nu,
          y: Xu
        } = Ru,
        Vu = Xu - Ju;
      for (;;) {
        if (Vu < 0) return new oy(0, 1);
        if (Vu > uu.viewState.docHeight) return new oy(uu.state.doc.length, -1);
        if (Qu = uu.elementAtHeight(Vu), null == Ku) break;
        if (Qu.type == Uu.Text) {
          if (Ku < 0 ? Qu.to < uu.viewport.from : Qu.from > uu.viewport.to) break;
          let Ru = uu.docView.coordsAt(Ku < 0 ? Qu.from : Qu.to, Ku > 0 ? -1 : 1);
          if (Ru && (Ku < 0 ? Ru.top <= Vu + Ju : Ru.bottom >= Vu + Ju)) break
        }
        let Ru = uu.viewState.heightOracle.textHeight / 2;
        Vu = Ku > 0 ? Qu.bottom + Ru : Qu.top - Ru
      }
      if (uu.viewport.from >= Qu.to || uu.viewport.to <= Qu.from) {
        if (yu) return null;
        if (Qu.type == Uu.Text) {
          let Ru = function(uu, Ru, yu, Ku, Qu) {
            let mu = Math.round((Ku - Ru.left) * uu.defaultCharacterWidth);
            if (uu.lineWrapping && yu.height > 1.5 * uu.defaultLineHeight) {
              let Ru = uu.viewState.heightOracle.textHeight;
              mu += Math.floor((Qu - yu.top - .5 * (uu.defaultLineHeight - Ru)) / Ru) * uu.viewState.heightOracle.lineLength
            }
            let Ju = uu.state.sliceDoc(yu.from, yu.to);
            return yu.from + (0, Eu.V)(Ju, mu, uu.state.tabSize)
          }(uu, mu, Qu, Nu, Xu);
          return new oy(Ru, Ru == Qu.from ? 1 : -1)
        }
      }
      if (Qu.type != Uu.Text) return Vu < (Qu.top + Qu.bottom) / 2 ? new oy(Qu.from, 1) : new oy(Qu.to, -1);
      let ru = uu.docView.lineAt(Qu.from, 2);
      return ru && ru.length == Qu.length || (ru = uu.docView.lineAt(Qu.from, -2)), new Oy(uu, Nu, Xu, uu.textDirectionAt(Qu.from)).scanTile(ru, Qu.from)
    }
    class Oy {
      constructor(uu, Ru, yu, Eu) {
        this.view = uu, this.x = Ru, this.y = yu, this.baseDir = Eu, this.line = null, this.spans = null
      }
      bidiSpansAt(uu) {
        return (!this.line || this.line.from > uu || this.line.to < uu) && (this.line = this.view.state.doc.lineAt(uu), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(uu, Ru) {
        let {
          line: yu,
          spans: Eu
        } = this.bidiSpansAt(uu);
        return Eu[HR.find(Eu, uu - yu.from, -1, Ru)].level == this.baseDir
      }
      dirAt(uu, Ru) {
        let {
          line: yu,
          spans: Eu
        } = this.bidiSpansAt(uu);
        return Eu[HR.find(Eu, uu - yu.from, -1, Ru)].dir
      }
      bidiIn(uu, Ru) {
        let {
          spans: yu,
          line: Eu
        } = this.bidiSpansAt(uu);
        return yu.length > 1 || yu.length && (yu[0].level != this.baseDir || yu[0].to + Eu.from < Ru)
      }
      scan(uu, Ru) {
        let yu, Eu, Ku, Qu = 0,
          mu = uu.length - 1,
          Ju = new Set,
          Nu = this.bidiIn(uu[0], uu[mu]),
          Xu = -1,
          Vu = 1e9;
        uu: for (; Qu < mu;) {
          let ru = mu - Qu,
            Bu = Qu + mu >> 1;
          Ru: if (Ju.has(Bu)) {
            let uu = Qu + Math.floor(Math.random() * ru);
            for (let Ru = 0; Ru < ru; Ru++) {
              if (!Ju.has(uu)) {
                Bu = uu;
                break Ru
              }
              uu++, uu == mu && (uu = Qu)
            }
            break uu
          } Ju.add(Bu);
          let xu = Ru(Bu);
          if (xu)
            for (let Ru = 0; Ru < xu.length; Ru++) {
              let Ju = xu[Ru],
                ru = 0;
              if (!(0 == Ju.width && xu.length > 1)) {
                if (Ju.bottom < this.y)(!yu || yu.bottom < Ju.bottom) && (yu = Ju), ru = 1;
                else if (Ju.top > this.y)(!Eu || Eu.top > Ju.top) && (Eu = Ju), ru = -1;
                else {
                  let uu = Ju.left > this.x ? this.x - Ju.left : Ju.right < this.x ? this.x - Ju.right : 0,
                    Ru = Math.abs(uu);
                  Ru < Vu && (Xu = Bu, Vu = Ru, Ku = Ju), uu && (ru = uu < 0 == (this.baseDir == XR.LTR) ? -1 : 1)
                } - 1 != ru || Nu && !this.baseDirAt(uu[Bu], 1) ? 1 != ru || Nu && !this.baseDirAt(uu[Bu + 1], -1) || (Qu = Bu + 1) : mu = Bu
              }
            }
        }
        if (!Ku) {
          let Ku = yu && (!Eu || this.y - yu.bottom < Eu.top - this.y) ? yu : Eu;
          return this.y = (Ku.top + Ku.bottom) / 2, this.scan(uu, Ru)
        }
        if (Vu) {
          if (yu && yu.bottom > Ku.top) return this.y = yu.bottom - 1, this.scan(uu, Ru);
          if (Eu && Eu.top < Ku.bottom) return this.y = Eu.top + 1, this.scan(uu, Ru)
        }
        let ru = (Nu ? this.dirAt(uu[Xu], 1) : this.baseDir) == XR.LTR;
        return {
          i: Xu,
          after: this.x > (Ku.left + Ku.right) / 2 == ru
        }
      }
      scanText(uu, Ru) {
        let yu = [];
        for (let Qu = 0; Qu < uu.length; Qu = (0, Eu.S)(uu.text, Qu)) yu.push(Ru + Qu);
        yu.push(Ru + uu.length);
        let Ku = this.scan(yu, (Eu => {
          let Ku = yu[Eu] - Ru,
            Qu = yu[Eu + 1] - Ru;
          return ER(uu.dom, Ku, Qu).getClientRects()
        }));
        return Ku.after ? new oy(yu[Ku.i + 1], -1) : new oy(yu[Ku.i], 1)
      }
      scanTile(uu, Ru) {
        if (!uu.length) return new oy(Ru, 1);
        if (1 == uu.children.length) {
          let yu = uu.children[0];
          if (yu.isText()) return this.scanText(yu, Ru);
          if (yu.isComposite()) return this.scanTile(yu, Ru)
        }
        let yu = [Ru];
        for (let mu = 0, Ju = Ru; mu < uu.children.length; mu++) yu.push(Ju += uu.children[mu].length);
        let Eu = this.scan(yu, (Ru => {
            let yu = uu.children[Ru];
            return 48 & yu.flags ? null : (1 == yu.dom.nodeType ? yu.dom : ER(yu.dom, 0, yu.length)).getClientRects()
          })),
          Ku = uu.children[Eu.i],
          Qu = yu[Eu.i];
        return Ku.isText() ? this.scanText(Ku, Qu) : Ku.isComposite() ? this.scanTile(Ku, Qu) : Eu.after ? new oy(yu[Eu.i + 1], -1) : new oy(Qu, 1)
      }
    }
    const vy = "\uffff";
    class ay {
      constructor(uu, Ru) {
        this.points = uu, this.view = Ru, this.text = "", this.lineSeparator = Ru.state.facet(Eu.o.lineSeparator)
      }
      append(uu) {
        this.text += uu
      }
      lineBreak() {
        this.text += vy
      }
      readRange(uu, Ru) {
        if (!uu) return this;
        let yu = uu.parentNode;
        for (let Eu = uu;;) {
          this.findPointBefore(yu, Eu);
          let uu = this.text.length;
          this.readNode(Eu);
          let Ku = By.get(Eu),
            Qu = Eu.nextSibling;
          if (Qu == Ru) {
            (null === Ku || void 0 === Ku ? void 0 : Ku.breakAfter) && !Qu && yu != this.view.contentDOM && this.lineBreak();
            break
          }
          let mu = By.get(Qu);
          (Ku && mu ? Ku.breakAfter : (Ku ? Ku.breakAfter : iu(Eu)) || iu(Qu) && ("BR" != Eu.nodeName || (null === Ku || void 0 === Ku ? void 0 : Ku.isWidget())) && this.text.length > uu) && !uE(Qu, Ru) && this.lineBreak(), Eu = Qu
        }
        return this.findPointBefore(yu, Ru), this
      }
      readTextNode(uu) {
        let Ru = uu.nodeValue;
        for (let yu of this.points) yu.node == uu && (yu.pos = this.text.length + Math.min(yu.offset, Ru.length));
        for (let yu = 0, Eu = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Ku, Qu = -1,
            mu = 1;
          if (this.lineSeparator ? (Qu = Ru.indexOf(this.lineSeparator, yu), mu = this.lineSeparator.length) : (Ku = Eu.exec(Ru)) && (Qu = Ku.index, mu = Ku[0].length), this.append(Ru.slice(yu, Qu < 0 ? Ru.length : Qu)), Qu < 0) break;
          if (this.lineBreak(), mu > 1)
            for (let Ru of this.points) Ru.node == uu && Ru.pos > this.text.length && (Ru.pos -= mu - 1);
          yu = Qu + mu
        }
      }
      readNode(uu) {
        let Ru = By.get(uu),
          yu = Ru && Ru.overrideDOMText;
        if (null != yu) {
          this.findPointInside(uu, yu.length);
          for (let uu = yu.iter(); !uu.next().done;) uu.lineBreak ? this.lineBreak() : this.append(uu.value)
        } else 3 == uu.nodeType ? this.readTextNode(uu) : "BR" == uu.nodeName ? uu.nextSibling && this.lineBreak() : 1 == uu.nodeType && this.readRange(uu.firstChild, null)
      }
      findPointBefore(uu, Ru) {
        for (let yu of this.points) yu.node == uu && uu.childNodes[yu.offset] == Ru && (yu.pos = this.text.length)
      }
      findPointInside(uu, Ru) {
        for (let yu of this.points)(3 == uu.nodeType ? yu.node == uu : uu.contains(yu.node)) && (yu.pos = this.text.length + (fy(uu, yu.node, yu.offset) ? Ru : 0))
      }
    }

    function fy(uu, Ru, yu) {
      for (;;) {
        if (!Ru || yu < ou(Ru)) return !1;
        if (Ru == uu) return !0;
        yu = Pu(Ru) + 1, Ru = Ru.parentNode
      }
    }

    function uE(uu, Ru) {
      let yu;
      for (; uu != Ru && uu; uu = uu.nextSibling) {
        let Ru = By.get(uu);
        if (!(null === Ru || void 0 === Ru ? void 0 : Ru.isWidget())) return !1;
        Ru && (yu || (yu = [])).push(Ru)
      }
      if (yu)
        for (let Eu of yu) {
          let uu = Eu.overrideDOMText;
          if (null === uu || void 0 === uu ? void 0 : uu.length) return !1
        }
      return !0
    }
    class RE {
      constructor(uu, Ru) {
        this.node = uu, this.offset = Ru, this.pos = -1
      }
    }
    class yE {
      constructor(uu, Ru, yu, Ku) {
        this.typeOver = Ku, this.bounds = null, this.text = "", this.domChanged = Ru > -1;
        let {
          impreciseHead: Qu,
          impreciseAnchor: mu
        } = uu.docView, Ju = uu.state.selection;
        if (uu.state.readOnly && Ru > -1) this.newSel = null;
        else if (Ru > -1 && (this.bounds = EE(uu.docView.tile, Ru, yu, 0))) {
          let Ru = Qu || mu ? [] : function(uu) {
              let Ru = [];
              if (uu.root.activeElement != uu.contentDOM) return Ru;
              let {
                anchorNode: yu,
                anchorOffset: Eu,
                focusNode: Ku,
                focusOffset: Qu
              } = uu.observer.selectionRange;
              yu && (Ru.push(new RE(yu, Eu)), Ku == yu && Qu == Eu || Ru.push(new RE(Ku, Qu)));
              return Ru
            }(uu),
            yu = new ay(Ru, uu);
          yu.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = yu.text, this.newSel = function(uu, Ru) {
            if (0 == uu.length) return null;
            let yu = uu[0].pos,
              Ku = 2 == uu.length ? uu[1].pos : yu;
            return yu > -1 && Ku > -1 ? Eu.n.single(yu + Ru, Ku + Ru) : null
          }(Ru, this.bounds.from)
        } else {
          let Ru = uu.observer.selectionRange,
            yu = Qu && Qu.node == Ru.focusNode && Qu.offset == Ru.focusOffset || !Fu(uu.contentDOM, Ru.focusNode) ? Ju.main.head : uu.docView.posFromDOM(Ru.focusNode, Ru.focusOffset),
            Ku = mu && mu.node == Ru.anchorNode && mu.offset == Ru.anchorOffset || !Fu(uu.contentDOM, Ru.anchorNode) ? Ju.main.anchor : uu.docView.posFromDOM(Ru.anchorNode, Ru.anchorOffset),
            Nu = uu.viewport;
          if ((ku.ios || ku.chrome) && Ju.main.empty && yu != Ku && (Nu.from > 0 || Nu.to < uu.state.doc.length)) {
            let Ru = Math.min(yu, Ku),
              Eu = Math.max(yu, Ku),
              Qu = Nu.from - Ru,
              mu = Nu.to - Eu;
            0 != Qu && 1 != Qu && 0 != Ru || 0 != mu && -1 != mu && Eu != uu.state.doc.length || (yu = 0, Ku = uu.state.doc.length)
          }
          if (uu.inputState.composing > -1 && Ju.yT.length > 1) this.newSel = Ju.replaceRange(Eu.n.range(Ku, yu));
          else if (uu.lineWrapping && Ku == yu && (!Ju.main.empty || Ju.main.head != yu) && uu.inputState.lastTouchTime > Date.now() - 100) {
            let Ru = uu.coordsAtPos(yu, -1),
              Ku = 0;
            Ru && (Ku = uu.inputState.lastTouchY <= Ru.bottom ? -1 : 1), this.newSel = Eu.n.create([Eu.n.cursor(yu, Ku)])
          } else this.newSel = Eu.n.single(Ku, yu)
        }
      }
    }

    function EE(uu, Ru, yu, Eu) {
      if (uu.isComposite()) {
        let Ku = -1,
          Qu = -1,
          mu = -1,
          Ju = -1;
        for (let Nu = 0, Xu = Eu, Vu = Eu; Nu < uu.children.length; Nu++) {
          let Eu = uu.children[Nu],
            ru = Xu + Eu.length;
          if (Xu < Ru && ru > yu) return EE(Eu, Ru, yu, Xu);
          if (ru >= Ru && -1 == Ku && (Ku = Nu, Qu = Xu), Xu > yu && Eu.dom.parentNode == uu.dom) {
            mu = Nu, Ju = Vu;
            break
          }
          Vu = ru, Xu = ru + Eu.breakAfter
        }
        return {
          from: Qu,
          to: Ju < 0 ? Eu + uu.length : Ju,
          startDOM: (Ku ? uu.children[Ku - 1].dom.nextSibling : null) || uu.dom.firstChild,
          endDOM: mu < uu.children.length && mu >= 0 ? uu.children[mu].dom : null
        }
      }
      return uu.isText() ? {
        from: Eu,
        to: Eu + uu.length,
        startDOM: uu.dom,
        endDOM: uu.dom.nextSibling
      } : null
    }

    function KE(uu, Ru) {
      let yu, {
          newSel: Ku
        } = Ru,
        {
          state: Qu
        } = uu,
        mu = Qu.selection.main,
        Ju = uu.inputState.lastKeyTime > Date.now() - 100 ? uu.inputState.lastKeyCode : -1;
      if (Ru.bounds) {
        let {
          from: uu,
          to: Ku
        } = Ru.bounds, Nu = mu.from, Xu = null;
        (8 === Ju || ku.android && Ru.text.length < Ku - uu) && (Nu = mu.to, Xu = "end");
        let Vu, ru, Bu = Qu.doc.sliceString(uu, Ku, vy);
        !mu.empty && mu.from >= uu && mu.to <= Ku && (Ru.typeOver || Bu != Ru.text) && Bu.slice(0, mu.from - uu) == Ru.text.slice(0, mu.from - uu) && Bu.slice(mu.to - uu) == Ru.text.slice(Vu = Ru.text.length - (Bu.length - (mu.to - uu))) ? yu = {
          from: mu.from,
          to: mu.to,
          insert: Eu.F.of(Ru.text.slice(mu.from - uu, Vu).split(vy))
        } : (ru = mE(Bu, Ru.text, Nu - uu, Xu)) && (ku.chrome && 13 == Ju && ru.toB == ru.from + 2 && Ru.text.slice(ru.from, ru.toB) == vy + vy && ru.toB--, yu = {
          from: uu + ru.from,
          to: uu + ru.toA,
          insert: Eu.F.of(Ru.text.slice(ru.from, ru.toB).split(vy))
        })
      } else Ku && (!uu.hasFocus && Qu.facet(YR) || JE(Ku, mu)) && (Ku = null);
      if (!yu && !Ku) return !1;
      if ((ku.mac || ku.android) && yu && yu.from == yu.to && yu.from == mu.head - 1 && /^\. ?$/.test(yu.insert.toString()) && "off" == uu.contentDOM.getAttribute("autocorrect") ? (Ku && 2 == yu.insert.length && (Ku = Eu.n.single(Ku.main.anchor - 1, Ku.main.head - 1)), yu = {
          from: yu.from,
          to: yu.to,
          insert: Eu.F.of([yu.insert.toString().replace(".", " ")])
        }) : Qu.doc.lineAt(mu.from).to < mu.to && uu.docView.lineHasWidget(mu.to) && uu.inputState.insertingTextAt > Date.now() - 50 ? yu = {
          from: mu.from,
          to: mu.to,
          insert: Qu.toText(uu.inputState.insertingText)
        } : ku.chrome && yu && yu.from == yu.to && yu.from == mu.head && "\n " == yu.insert.toString() && uu.lineWrapping && (Ku && (Ku = Eu.n.single(Ku.main.anchor - 1, Ku.main.head - 1)), yu = {
          from: mu.from,
          to: mu.to,
          insert: Eu.F.of([" "])
        }), yu) return QE(uu, yu, Ku, Ju);
      if (Ku && !JE(Ku, mu)) {
        let Ru = !1,
          yu = "select";
        return uu.inputState.lastSelectionTime > Date.now() - 50 && ("select" == uu.inputState.lastSelectionOrigin && (Ru = !0), yu = uu.inputState.lastSelectionOrigin, "select.pointer" == yu && (Ku = iy(Qu.facet(Ey).map((Ru => Ru(uu))), Ku))), uu.dispatch({
          selection: Ku,
          scrollIntoView: Ru,
          userEvent: yu
        }), !0
      }
      return !1
    }

    function QE(uu, Ru, yu) {
      let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (ku.ios && uu.inputState.flushIOSKey(Ru)) return !0;
      let Qu = uu.state.selection.main;
      if (ku.android && (Ru.to == Qu.to && (Ru.from == Qu.from || Ru.from == Qu.from - 1 && " " == uu.state.sliceDoc(Ru.from, Qu.from)) && 1 == Ru.insert.length && 2 == Ru.insert.lines && KR(uu.contentDOM, "Enter", 13) || (Ru.from == Qu.from - 1 && Ru.to == Qu.to && 0 == Ru.insert.length || 8 == Ku && Ru.insert.length < Ru.to - Ru.from && Ru.to > Qu.head) && KR(uu.contentDOM, "Backspace", 8) || Ru.from == Qu.from && Ru.to == Qu.to + 1 && 0 == Ru.insert.length && KR(uu.contentDOM, "Delete", 46))) return !0;
      let mu, Ju = Ru.insert.toString();
      uu.inputState.composing >= 0 && uu.inputState.composing++;
      let Nu = () => mu || (mu = function(uu, Ru, yu) {
        let Ku, Qu = uu.state,
          mu = Qu.selection.main,
          Ju = -1;
        if (Ru.from == Ru.to && Ru.from < mu.from || Ru.from > mu.to) {
          let yu = Ru.from < mu.from ? -1 : 1,
            Eu = yu < 0 ? mu.from : mu.to,
            Ku = Py(Qu.facet(Ey).map((Ru => Ru(uu))), Eu, yu);
          Ru.from == Ku && (Ju = Ku)
        }
        if (Ju > -1) Ku = {
          changes: Ru,
          selection: Eu.n.cursor(Ru.from + Ru.insert.length, -1)
        };
        else if (Ru.from >= mu.from && Ru.to <= mu.to && Ru.to - Ru.from >= (mu.to - mu.from) / 3 && (!yu || yu.main.empty && yu.main.from == Ru.from + Ru.insert.length) && uu.inputState.composing < 0) {
          let yu = mu.from < Ru.from ? Qu.sliceDoc(mu.from, Ru.from) : "",
            Eu = mu.to > Ru.to ? Qu.sliceDoc(Ru.to, mu.to) : "";
          Ku = Qu.replaceSelection(uu.state.toText(yu + Ru.insert.sliceString(0, void 0, uu.state.lineBreak) + Eu))
        } else {
          let Ju = Qu.changes(Ru),
            Nu = yu && yu.main.to <= Ju.newLength ? yu.main : void 0;
          if (Qu.selection.yT.length > 1 && (uu.inputState.composing >= 0 || uu.inputState.compositionPendingChange) && Ru.to <= mu.to + 10 && Ru.to >= mu.to - 10) {
            let Xu, Vu = uu.state.sliceDoc(Ru.from, Ru.to),
              ru = yu && Ly(uu, yu.main.head);
            if (ru) {
              let uu = Ru.insert.length - (Ru.to - Ru.from);
              Xu = {
                from: ru.from,
                to: ru.to - uu
              }
            } else Xu = uu.state.doc.lineAt(mu.head);
            let Bu = mu.to - Ru.to;
            Ku = Qu.changeByRange((yu => {
              if (yu.from == mu.from && yu.to == mu.to) return {
                changes: Ju,
                range: Nu || yu.map(Ju)
              };
              let Ku = yu.to - Bu,
                ru = Ku - Vu.length;
              if (uu.state.sliceDoc(ru, Ku) != Vu || Ku >= Xu.from && ru <= Xu.to) return {
                range: yu
              };
              let xu = Qu.changes({
                  from: ru,
                  to: Ku,
                  insert: Ru.insert
                }),
                Su = yu.to - mu.to;
              return {
                changes: xu,
                range: Nu ? Eu.n.range(Math.max(0, Nu.anchor + Su), Math.max(0, Nu.head + Su)) : yu.map(xu)
              }
            }))
          } else Ku = {
            changes: Ju,
            selection: Nu && Qu.selection.replaceRange(Nu)
          }
        }
        let Nu = "input.type";
        (uu.composing || uu.inputState.compositionPendingChange && uu.inputState.compositionEndedAt > Date.now() - 50) && (uu.inputState.compositionPendingChange = !1, Nu += ".compose", uu.inputState.compositionFirstChange && (Nu += ".start", uu.inputState.compositionFirstChange = !1));
        return Qu.update(Ku, {
          userEvent: Nu,
          scrollIntoView: !0
        })
      }(uu, Ru, yu));
      return uu.state.facet(lR).some((yu => yu(uu, Ru.from, Ru.to, Ju, Nu))) || uu.dispatch(Nu()), !0
    }

    function mE(uu, Ru, yu, Eu) {
      let Ku = Math.min(uu.length, Ru.length),
        Qu = 0;
      for (; Qu < Ku && uu.charCodeAt(Qu) == Ru.charCodeAt(Qu);) Qu++;
      if (Qu == Ku && uu.length == Ru.length) return null;
      let mu = uu.length,
        Ju = Ru.length;
      for (; mu > 0 && Ju > 0 && uu.charCodeAt(mu - 1) == Ru.charCodeAt(Ju - 1);) mu--, Ju--;
      if ("end" == Eu) {
        yu -= mu + Math.max(0, Qu - Math.min(mu, Ju)) - Qu
      }
      if (mu < Qu && uu.length < Ru.length) {
        Qu -= yu <= Qu && yu >= mu ? Qu - yu : 0, Ju = Qu + (Ju - mu), mu = Qu
      } else if (Ju < Qu) {
        Qu -= yu <= Qu && yu >= Ju ? Qu - yu : 0, mu = Qu + (mu - Ju), Ju = Qu
      }
      return {
        from: Qu,
        toA: mu,
        toB: Ju
      }
    }

    function JE(uu, Ru) {
      return Ru.head == uu.main.head && Ru.anchor == uu.main.anchor
    }
    class NE {
      setSelectionOrigin(uu) {
        this.lastSelectionOrigin = uu, this.lastSelectionTime = Date.now()
      }
      constructor(uu) {
        this.view = uu, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = uu.hasFocus, ku.safari && uu.contentDOM.addEventListener("input", (() => null)), ku.gecko && function(uu) {
          sE.has(uu) || (sE.add(uu), uu.addEventListener("copy", (() => {})), uu.addEventListener("cut", (() => {})))
        }(uu.contentDOM.ownerDocument)
      }
      handleEvent(uu) {
        (function(uu, Ru) {
          if (!Ru.bubbles) return !0;
          if (Ru.defaultPrevented) return !1;
          for (let yu, Eu = Ru.target; Eu != uu.contentDOM; Eu = Eu.parentNode)
            if (!Eu || 11 == Eu.nodeType || (yu = By.get(Eu)) && yu.isWidget() && !yu.isHidden && yu.widget.ignoreEvent(Ru)) return !1;
          return !0
        })(this.view, uu) && !this.ignoreDuringComposition(uu) && ("keydown" == uu.type && this.keydown(uu) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(uu.type, uu))) : this.runHandlers(uu.type, uu)))
      }
      runHandlers(uu, Ru) {
        let yu = this.handlers[uu];
        if (yu) {
          for (let uu of yu.observers) uu(this.view, Ru);
          for (let uu of yu.handlers) {
            if (Ru.defaultPrevented) break;
            if (uu(this.view, Ru)) {
              Ru.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(uu) {
        let Ru = VE(uu),
          yu = this.handlers,
          Eu = this.view.contentDOM;
        for (let Ku in Ru)
          if ("scroll" != Ku) {
            let uu = !Ru[Ku].handlers.length,
              Qu = yu[Ku];
            Qu && uu != !Qu.handlers.length && (Eu.removeEventListener(Ku, this.handleEvent), Qu = null), Qu || Eu.addEventListener(Ku, this.handleEvent, {
              passive: uu
            })
          } for (let Ku in yu) "scroll" == Ku || Ru[Ku] || Eu.removeEventListener(Ku, this.handleEvent);
        this.handlers = Ru
      }
      keydown(uu) {
        if (this.lastKeyCode = uu.keyCode, this.lastKeyTime = Date.now(), 9 == uu.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != uu.keyCode && xE.indexOf(uu.keyCode) < 0 && (this.tabFocusMode = -1), ku.android && ku.chrome && !uu.synthetic && (13 == uu.keyCode || 8 == uu.keyCode)) return this.view.observer.delayAndroidKey(uu.key, uu.keyCode), !0;
        let Ru;
        return !ku.ios || uu.synthetic || uu.altKey || uu.metaKey || uu.shiftKey || !((Ru = rE.find((Ru => Ru.keyCode == uu.keyCode))) && !uu.ctrlKey || BE.indexOf(uu.key) > -1 && uu.ctrlKey) ? (229 != uu.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = Ru || uu, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(uu) {
        let Ru = this.pendingIOSKey;
        return !!Ru && (!("Enter" == Ru.key && uu && uu.from < uu.to && /^\S+$/.test(uu.insert.toString())) && (this.pendingIOSKey = void 0, KR(this.view.contentDOM, Ru.key, Ru.keyCode, Ru instanceof KeyboardEvent ? Ru : void 0)))
      }
      ignoreDuringComposition(uu) {
        return !(!/^key/.test(uu.type) || uu.synthetic) && (this.composing > 0 || !!(ku.safari && !ku.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(uu) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = uu
      }
      update(uu) {
        this.view.observer.update(uu), this.mouseSelection && this.mouseSelection.update(uu), this.draggedContent && uu.docChanged && (this.draggedContent = this.draggedContent.map(uu.changes)), uu.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function XE(uu, Ru) {
      return (yu, Eu) => {
        try {
          return Ru.call(uu, Eu, yu)
        } catch (Ku) {
          iR(yu.state, Ku)
        }
      }
    }

    function VE(uu) {
      let Ru = Object.create(null);

      function yu(uu) {
        return Ru[uu] || (Ru[uu] = {
          observers: [],
          handlers: []
        })
      }
      for (let Eu of uu) {
        let uu = Eu.spec,
          Ru = uu && uu.plugin.domEventHandlers,
          Ku = uu && uu.plugin.domEventObservers;
        if (Ru)
          for (let Qu in Ru) {
            let uu = Ru[Qu];
            uu && yu(Qu).handlers.push(XE(Eu.value, uu))
          }
        if (Ku)
          for (let Qu in Ku) {
            let uu = Ku[Qu];
            uu && yu(Qu).observers.push(XE(Eu.value, uu))
          }
      }
      for (let Eu in TE) yu(Eu).handlers.push(TE[Eu]);
      for (let Eu in WE) yu(Eu).observers.push(WE[Eu]);
      return Ru
    }
    const rE = [{
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
      BE = "dthko",
      xE = [16, 17, 18, 20, 91, 92, 224, 225];

    function SE(uu) {
      return .7 * Math.max(0, uu) + 8
    }
    class pE {
      constructor(uu, Ru, yu, Ku) {
        this.view = uu, this.startEvent = Ru, this.style = yu, this.mustSelect = Ku, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = Ru, this.scrollParents = au(uu.contentDOM), this.atoms = uu.state.facet(Ey).map((Ru => Ru(uu)));
        let Qu = uu.contentDOM.ownerDocument;
        Qu.addEventListener("mousemove", this.move = this.move.bind(this)), Qu.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = Ru.shiftKey, this.multiple = uu.state.facet(Eu.o.allowMultipleSelections) && function(uu, Ru) {
          let yu = uu.state.facet(GR);
          return yu.length ? yu[0](Ru) : ku.mac ? Ru.metaKey : Ru.ctrlKey
        }(uu, Ru), this.dragging = !(! function(uu, Ru) {
          let {
            main: yu
          } = uu.state.selection;
          if (yu.empty) return !1;
          let Eu = zu(uu.root);
          if (!Eu || 0 == Eu.rangeCount) return !0;
          let Ku = Eu.getRangeAt(0).getClientRects();
          for (let Qu = 0; Qu < Ku.length; Qu++) {
            let uu = Ku[Qu];
            if (uu.left <= Ru.clientX && uu.right >= Ru.clientX && uu.top <= Ru.clientY && uu.bottom >= Ru.clientY) return !0
          }
          return !1
        }(uu, Ru) || 1 != DE(Ru)) && null
      }
      start(uu) {
        !1 === this.dragging && this.select(uu)
      }
      move(uu) {
        if (0 == uu.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (Ru = this.startEvent, yu = uu, Math.max(Math.abs(Ru.clientX - yu.clientX), Math.abs(Ru.clientY - yu.clientY)) < 10)) return;
        var Ru, yu;
        this.select(this.lastEvent = uu);
        let Eu = 0,
          Ku = 0,
          Qu = 0,
          mu = 0,
          Ju = this.view.win.innerWidth,
          Nu = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: Qu,
          right: Ju
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: mu,
          bottom: Nu
        } = this.scrollParents.y.getBoundingClientRect());
        let Xu = Jy(this.view);
        uu.clientX - Xu.left <= Qu + 6 ? Eu = -SE(Qu - uu.clientX) : uu.clientX + Xu.right >= Ju - 6 && (Eu = SE(uu.clientX - Ju)), uu.clientY - Xu.top <= mu + 6 ? Ku = -SE(mu - uu.clientY) : uu.clientY + Xu.bottom >= Nu - 6 && (Ku = SE(uu.clientY - Nu)), this.setScrollSpeed(Eu, Ku)
      }
      up(uu) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || uu.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let uu = this.view.contentDOM.ownerDocument;
        uu.removeEventListener("mousemove", this.move), uu.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(uu, Ru) {
        this.scrollSpeed = {
          x: uu,
          y: Ru
        }, uu || Ru ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: uu,
          y: Ru
        } = this.scrollSpeed;
        uu && this.scrollParents.x && (this.scrollParents.x.scrollLeft += uu, uu = 0), Ru && this.scrollParents.y && (this.scrollParents.y.scrollTop += Ru, Ru = 0), (uu || Ru) && this.view.win.scrollBy(uu, Ru), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(uu) {
        let {
          view: Ru
        } = this, yu = iy(this.atoms, this.style.get(uu, this.extend, this.multiple));
        !this.mustSelect && yu.eq(Ru.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: yu,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(uu) {
        uu.transactions.some((uu => uu.isUserEvent("input.type"))) ? this.destroy() : this.style.update(uu) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const TE = Object.create(null),
      WE = Object.create(null),
      jE = ku.ie && ku.ie_version < 15 || ku.ios && ku.webkit_version < 604;

    function HE(uu, Ru, yu) {
      for (let Eu of uu.facet(Ru)) yu = Eu(yu, uu);
      return yu
    }

    function dE(uu, Ru) {
      Ru = HE(uu.state, cR, Ru);
      let yu, {
          state: Ku
        } = uu,
        Qu = 1,
        mu = Ku.toText(Ru),
        Ju = mu.lines == Ku.selection.yT.length;
      if (null != IE && Ku.selection.yT.every((uu => uu.empty)) && IE == mu.toString()) {
        let uu = -1;
        yu = Ku.changeByRange((yu => {
          let Nu = Ku.doc.lineAt(yu.from);
          if (Nu.from == uu) return {
            range: yu
          };
          uu = Nu.from;
          let Xu = Ku.toText((Ju ? mu.line(Qu++).text : Ru) + Ku.lineBreak);
          return {
            changes: {
              from: Nu.from,
              insert: Xu
            },
            range: Eu.n.cursor(yu.from + Xu.length)
          }
        }))
      } else yu = Ju ? Ku.changeByRange((uu => {
        let Ru = mu.line(Qu++);
        return {
          changes: {
            from: uu.from,
            to: uu.to,
            insert: Ru.text
          },
          range: Eu.n.cursor(uu.from + Ru.length)
        }
      })) : Ku.replaceSelection(mu);
      uu.dispatch(yu, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function bE(uu, Ru, yu, Ku) {
      if (1 == Ku) return Eu.n.cursor(Ru, yu);
      if (2 == Ku) return function(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Ku = uu.charCategorizer(Ru),
          Qu = uu.doc.lineAt(Ru),
          mu = Ru - Qu.from;
        if (0 == Qu.length) return Eu.n.cursor(Ru);
        0 == mu ? yu = 1 : mu == Qu.length && (yu = -1);
        let Ju = mu,
          Nu = mu;
        yu < 0 ? Ju = (0, Eu.S)(Qu.text, mu, !1) : Nu = (0, Eu.S)(Qu.text, mu);
        let Xu = Ku(Qu.text.slice(Ju, Nu));
        for (; Ju > 0;) {
          let uu = (0, Eu.S)(Qu.text, Ju, !1);
          if (Ku(Qu.text.slice(uu, Ju)) != Xu) break;
          Ju = uu
        }
        for (; Nu < Qu.length;) {
          let uu = (0, Eu.S)(Qu.text, Nu);
          if (Ku(Qu.text.slice(Nu, uu)) != Xu) break;
          Nu = uu
        }
        return Eu.n.range(Ju + Qu.from, Nu + Qu.from)
      }(uu.state, Ru, yu);
      {
        let Ku = uu.docView.lineAt(Ru, yu),
          Qu = uu.state.doc.lineAt(Ku ? Ku.posAtEnd : Ru),
          mu = Ku ? Ku.posAtStart : Qu.from,
          Ju = Ku ? Ku.posAtEnd : Qu.to;
        return Ju < uu.state.doc.length && Ju == Qu.to && Ju++, Eu.n.range(mu, Ju)
      }
    }
    WE.scroll = uu => {
      uu.inputState.lastScrollTop = uu.scrollDOM.scrollTop, uu.inputState.lastScrollLeft = uu.scrollDOM.scrollLeft
    }, WE.wheel = WE.mousewheel = uu => {
      uu.inputState.lastWheelEvent = Date.now()
    }, TE.keydown = (uu, Ru) => (uu.inputState.setSelectionOrigin("select"), 27 == Ru.keyCode && 0 != uu.inputState.tabFocusMode && (uu.inputState.tabFocusMode = Date.now() + 2e3), !1), WE.touchstart = (uu, Ru) => {
      let yu = uu.inputState,
        Eu = Ru.targetTouches[0];
      yu.lastTouchTime = Date.now(), Eu && (yu.lastTouchX = Eu.clientX, yu.lastTouchY = Eu.clientY), yu.setSelectionOrigin("select.pointer")
    }, WE.touchmove = uu => {
      uu.inputState.setSelectionOrigin("select.pointer")
    }, TE.mousedown = (uu, Ru) => {
      if (uu.observer.flush(), uu.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let yu = null;
      for (let Eu of uu.state.facet(nR))
        if (yu = Eu(uu, Ru), yu) break;
      if (yu || 0 != Ru.button || (yu = function(uu, Ru) {
          let yu = uu.posAndSideAtCoords({
              x: Ru.clientX,
              y: Ru.clientY
            }, !1),
            Ku = DE(Ru),
            Qu = uu.state.selection;
          return {
            update(uu) {
              uu.docChanged && (yu.pos = uu.changes.mapPos(yu.pos), Qu = Qu.map(uu.changes))
            },
            get(Ru, mu, Ju) {
              let Nu, Xu = uu.posAndSideAtCoords({
                  x: Ru.clientX,
                  y: Ru.clientY
                }, !1),
                Vu = bE(uu, Xu.pos, Xu.assoc, Ku);
              if (yu.pos != Xu.pos && !mu) {
                let Ru = bE(uu, yu.pos, yu.assoc, Ku),
                  Qu = Math.min(Ru.from, Vu.from),
                  mu = Math.max(Ru.to, Vu.to);
                Vu = Qu < Vu.from ? Eu.n.range(Qu, mu, Vu.assoc) : Eu.n.range(mu, Qu, Vu.assoc)
              }
              return mu ? Qu.replaceRange(Qu.main.extend(Vu.from, Vu.to, Vu.assoc)) : Ju && 1 == Ku && Qu.yT.length > 1 && (Nu = function(uu, Ru) {
                for (let yu = 0; yu < uu.yT.length; yu++) {
                  let {
                    from: Ku,
                    to: Qu
                  } = uu.yT[yu];
                  if (Ku <= Ru && Qu >= Ru) return Eu.n.create(uu.yT.slice(0, yu).concat(uu.yT.slice(yu + 1)), uu.mainIndex == yu ? 0 : uu.mainIndex - (uu.mainIndex > yu ? 1 : 0))
                }
                return null
              }(Qu, Xu.pos)) ? Nu : Ju ? Qu.addRange(Vu) : Eu.n.create([Vu])
            }
          }
        }(uu, Ru)), yu) {
        let Eu = !uu.hasFocus;
        uu.inputState.startMouseSelection(new pE(uu, Ru, yu, Eu)), Eu && uu.observer.ignore((() => {
          yR(uu.contentDOM);
          let Ru = uu.root.activeElement;
          Ru && !Ru.contains(uu.contentDOM) && Ru.blur()
        }));
        let Ku = uu.inputState.mouseSelection;
        if (Ku) return Ku.start(Ru), !1 === Ku.dragging
      } else uu.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const CE = ku.ie && ku.ie_version <= 11;
    let kE = null,
      eE = 0,
      AE = 0;

    function DE(uu) {
      if (!CE) return uu.detail;
      let Ru = kE,
        yu = AE;
      return kE = uu, AE = Date.now(), eE = !Ru || yu > Date.now() - 400 && Math.abs(Ru.clientX - uu.clientX) < 2 && Math.abs(Ru.clientY - uu.clientY) < 2 ? (eE + 1) % 3 : 1
    }

    function ME(uu, Ru, yu, Eu) {
      if (!(yu = HE(uu.state, cR, yu))) return;
      let Ku = uu.posAtCoords({
          x: Ru.clientX,
          y: Ru.clientY
        }, !1),
        {
          draggedContent: Qu
        } = uu.inputState,
        mu = Eu && Qu && function(uu, Ru) {
          let yu = uu.state.facet(UR);
          return yu.length ? yu[0](Ru) : ku.mac ? !Ru.altKey : !Ru.ctrlKey
        }(uu, Ru) ? {
          from: Qu.from,
          to: Qu.to
        } : null,
        Ju = {
          from: Ku,
          insert: yu
        },
        Nu = uu.state.changes(mu ? [mu, Ju] : Ju);
      uu.focus(), uu.dispatch({
        changes: Nu,
        selection: {
          anchor: Nu.mapPos(Ku, -1),
          head: Nu.mapPos(Ku, 1)
        },
        userEvent: mu ? "move.drop" : "input.drop"
      }), uu.inputState.draggedContent = null
    }
    TE.dragstart = (uu, Ru) => {
      let {
        selection: {
          main: yu
        }
      } = uu.state;
      if (Ru.target.draggable) {
        let Ku = uu.docView.tile.nearest(Ru.target);
        if (Ku && Ku.isWidget()) {
          let uu = Ku.posAtStart,
            Ru = uu + Ku.length;
          (uu >= yu.to || Ru <= yu.from) && (yu = Eu.n.range(uu, Ru))
        }
      }
      let {
        inputState: Ku
      } = uu;
      return Ku.mouseSelection && (Ku.mouseSelection.dragging = !0), Ku.draggedContent = yu, Ru.dataTransfer && (Ru.dataTransfer.setData("Text", HE(uu.state, LR, uu.state.sliceDoc(yu.from, yu.to))), Ru.dataTransfer.effectAllowed = "copyMove"), !1
    }, TE.dragend = uu => (uu.inputState.draggedContent = null, !1), TE.drop = (uu, Ru) => {
      if (!Ru.dataTransfer) return !1;
      if (uu.state.readOnly) return !0;
      let yu = Ru.dataTransfer.files;
      if (yu && yu.length) {
        let Eu = Array(yu.length),
          Ku = 0,
          Qu = () => {
            ++Ku == yu.length && ME(uu, Ru, Eu.filter((uu => null != uu)).join(uu.state.lineBreak), !1)
          };
        for (let uu = 0; uu < yu.length; uu++) {
          let Ru = new FileReader;
          Ru.onerror = Qu, Ru.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(Ru.result) || (Eu[uu] = Ru.result), Qu()
          }, Ru.readAsText(yu[uu])
        }
        return !0
      } {
        let yu = Ru.dataTransfer.getData("Text");
        if (yu) return ME(uu, Ru, yu, !0), !0
      }
      return !1
    }, TE.paste = (uu, Ru) => {
      if (uu.state.readOnly) return !0;
      uu.observer.flush();
      let yu = jE ? null : Ru.clipboardData;
      return yu ? (dE(uu, yu.getData("text/plain") || yu.getData("text/uri-list")), !0) : (function(uu) {
        let Ru = uu.dom.parentNode;
        if (!Ru) return;
        let yu = Ru.appendChild(document.createElement("textarea"));
        yu.style.cssText = "position: fixed; left: -10000px; top: 10px", yu.focus(), setTimeout((() => {
          uu.focus(), yu.remove(), dE(uu, yu.value)
        }), 50)
      }(uu), !1)
    };
    let IE = null;
    TE.copy = TE.cut = (uu, Ru) => {
      if (!wu(uu.contentDOM, uu.observer.selectionRange)) return !1;
      let {
        text: yu,
        yT: Eu,
        linewise: Ku
      } = function(uu) {
        let Ru = [],
          yu = [],
          Eu = !1;
        for (let Ku of uu.selection.yT) Ku.empty || (Ru.push(uu.sliceDoc(Ku.from, Ku.to)), yu.push(Ku));
        if (!Ru.length) {
          let Ku = -1;
          for (let {
              from: Eu
            }
            of uu.selection.yT) {
            let Qu = uu.doc.lineAt(Eu);
            Qu.number > Ku && (Ru.push(Qu.text), yu.push({
              from: Qu.from,
              to: Math.min(uu.doc.length, Qu.to + 1)
            })), Ku = Qu.number
          }
          Eu = !0
        }
        return {
          text: HE(uu, LR, Ru.join(uu.lineBreak)),
          yT: yu,
          linewise: Eu
        }
      }(uu.state);
      if (!yu && !Ku) return !1;
      IE = Ku ? yu : null, "cut" != Ru.type || uu.state.readOnly || uu.dispatch({
        changes: Eu,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let Qu = jE ? null : Ru.clipboardData;
      return Qu ? (Qu.clearData(), Qu.setData("text/plain", yu), !0) : (function(uu, Ru) {
        let yu = uu.dom.parentNode;
        if (!yu) return;
        let Eu = yu.appendChild(document.createElement("textarea"));
        Eu.style.cssText = "position: fixed; left: -10000px; top: 10px", Eu.value = Ru, Eu.focus(), Eu.selectionEnd = Ru.length, Eu.selectionStart = 0, setTimeout((() => {
          Eu.remove(), uu.focus()
        }), 50)
      }(uu, yu), !1)
    };
    const GE = Eu.e.define();

    function UE(uu, Ru) {
      let yu = [];
      for (let Eu of uu.facet(gR)) {
        let Ku = Eu(uu, Ru);
        Ku && yu.push(Ku)
      }
      return yu.length ? uu.update({
        effects: yu,
        annotations: GE.of(!0)
      }) : null
    }

    function nE(uu) {
      setTimeout((() => {
        let Ru = uu.hasFocus;
        if (Ru != uu.inputState.notifiedFocused) {
          let yu = UE(uu.state, Ru);
          yu ? uu.dispatch(yu) : uu.update([])
        }
      }), 10)
    }
    WE.focus = uu => {
      uu.inputState.lastFocusTime = Date.now(), uu.scrollDOM.scrollTop || !uu.inputState.lastScrollTop && !uu.inputState.lastScrollLeft || (uu.scrollDOM.scrollTop = uu.inputState.lastScrollTop, uu.scrollDOM.scrollLeft = uu.inputState.lastScrollLeft), nE(uu)
    }, WE.blur = uu => {
      uu.observer.clearSelectionRange(), nE(uu)
    }, WE.compositionstart = WE.compositionupdate = uu => {
      uu.observer.editContext || (null == uu.inputState.compositionFirstChange && (uu.inputState.compositionFirstChange = !0), uu.inputState.composing < 0 && (uu.inputState.composing = 0))
    }, WE.compositionend = uu => {
      uu.observer.editContext || (uu.inputState.composing = -1, uu.inputState.compositionEndedAt = Date.now(), uu.inputState.compositionPendingKey = !0, uu.inputState.compositionPendingChange = uu.observer.pendingRecords().length > 0, uu.inputState.compositionFirstChange = null, ku.chrome && ku.android ? uu.observer.flushSoon() : uu.inputState.compositionPendingChange ? Promise.resolve().then((() => uu.observer.flush())) : setTimeout((() => {
        uu.inputState.composing < 0 && uu.docView.hasComposition && uu.update([])
      }), 50))
    }, WE.contextmenu = uu => {
      uu.inputState.lastContextMenu = Date.now()
    }, TE.beforeinput = (uu, Ru) => {
      var yu, Eu;
      if ("insertText" != Ru.inputType && "insertCompositionText" != Ru.inputType || (uu.inputState.insertingText = Ru.data, uu.inputState.insertingTextAt = Date.now()), "insertReplacementText" == Ru.inputType && uu.observer.editContext) {
        let Eu = null === (yu = Ru.dataTransfer) || void 0 === yu ? void 0 : yu.getData("text/plain"),
          Ku = Ru.getTargetRanges();
        if (Eu && Ku.length) {
          let Ru = Ku[0],
            yu = uu.posAtDOM(Ru.startContainer, Ru.startOffset),
            Qu = uu.posAtDOM(Ru.endContainer, Ru.endOffset);
          return QE(uu, {
            from: yu,
            to: Qu,
            insert: uu.state.toText(Eu)
          }, null), !0
        }
      }
      let Ku;
      if (ku.chrome && ku.android && (Ku = rE.find((uu => uu.inputType == Ru.inputType))) && (uu.observer.delayAndroidKey(Ku.key, Ku.keyCode), "Backspace" == Ku.key || "Delete" == Ku.key)) {
        let Ru = (null === (Eu = window.visualViewport) || void 0 === Eu ? void 0 : Eu.height) || 0;
        setTimeout((() => {
          var yu;
          ((null === (yu = window.visualViewport) || void 0 === yu ? void 0 : yu.height) || 0) > Ru + 10 && uu.hasFocus && (uu.contentDOM.blur(), uu.focus())
        }), 100)
      }
      return ku.ios && "deleteContentForward" == Ru.inputType && uu.observer.flushSoon(), ku.safari && "insertText" == Ru.inputType && uu.inputState.composing >= 0 && setTimeout((() => WE.compositionend(uu, Ru)), 20), !1
    };
    const sE = new Set;
    const tE = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let lE = !1;

    function gE() {
      lE = !1
    }
    class cE {
      constructor(uu) {
        this.lineWrapping = uu, this.doc = Eu.F.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(uu, Ru) {
        let yu = this.doc.lineAt(Ru).number - this.doc.lineAt(uu).number + 1;
        return this.lineWrapping && (yu += Math.max(0, Math.ceil((Ru - uu - yu * this.lineLength * .5) / this.lineLength))), this.lineHeight * yu
      }
      heightForLine(uu) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((uu - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(uu) {
        return this.doc = uu, this
      }
      mustRefreshForWrapping(uu) {
        return tE.indexOf(uu) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(uu) {
        let Ru = !1;
        for (let yu = 0; yu < uu.length; yu++) {
          let Eu = uu[yu];
          Eu < 0 ? yu++ : this.heightSamples[Math.floor(10 * Eu)] || (Ru = !0, this.heightSamples[Math.floor(10 * Eu)] = !0)
        }
        return Ru
      }
      refresh(uu, Ru, yu, Eu, Ku, Qu) {
        let mu = tE.indexOf(uu) > -1,
          Ju = Math.abs(Ru - this.lineHeight) > .3 || this.lineWrapping != mu || Math.abs(yu - this.charWidth) > .1;
        if (this.lineWrapping = mu, this.lineHeight = Ru, this.charWidth = yu, this.textHeight = Eu, this.lineLength = Ku, Ju) {
          this.heightSamples = {};
          for (let uu = 0; uu < Qu.length; uu++) {
            let Ru = Qu[uu];
            Ru < 0 ? uu++ : this.heightSamples[Math.floor(10 * Ru)] = !0
          }
        }
        return Ju
      }
    }
    class LE {
      constructor(uu, Ru) {
        this.from = uu, this.heights = Ru, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class zE {
      constructor(uu, Ru, yu, Eu, Ku) {
        this.from = uu, this.length = Ru, this.top = yu, this.height = Eu, this._content = Ku
      }
      get type() {
        return "number" == typeof this._content ? Uu.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof lu ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(uu) {
        let Ru = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(uu._content) ? uu._content : [uu]);
        return new zE(this.from, this.length + uu.length, this.top, this.height + uu.height, Ru)
      }
    }
    var FE = function(uu) {
      return uu[uu.ByPos = 0] = "ByPos", uu[uu.ByHeight = 1] = "ByHeight", uu[uu.ByPosNoHeight = 2] = "ByPosNoHeight", uu
    }(FE || (FE = {}));
    const wE = .001;
    class ZE {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = uu, this.height = Ru, this.flags = yu
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(uu) {
        this.flags = (uu ? 2 : 0) | -3 & this.flags
      }
      setHeight(uu) {
        this.height != uu && (Math.abs(this.height - uu) > wE && (lE = !0), this.height = uu)
      }
      replace(uu, Ru, yu) {
        return ZE.of(yu)
      }
      decomposeLeft(uu, Ru) {
        Ru.push(this)
      }
      decomposeRight(uu, Ru) {
        Ru.push(this)
      }
      applyChanges(uu, Ru, yu, Eu) {
        let Ku = this,
          Qu = yu.doc;
        for (let mu = Eu.length - 1; mu >= 0; mu--) {
          let {
            fromA: Ju,
            toA: Nu,
            fromB: Xu,
            toB: Vu
          } = Eu[mu], ru = Ku.lineAt(Ju, FE.ByPosNoHeight, yu.setDoc(Ru), 0, 0), Bu = ru.to >= Nu ? ru : Ku.lineAt(Nu, FE.ByPosNoHeight, yu, 0, 0);
          for (Vu += Bu.to - Nu, Nu = Bu.to; mu > 0 && ru.from <= Eu[mu - 1].toA;) Ju = Eu[mu - 1].fromA, Xu = Eu[mu - 1].fromB, mu--, Ju < ru.from && (ru = Ku.lineAt(Ju, FE.ByPosNoHeight, yu, 0, 0));
          Xu += ru.from - Ju, Ju = ru.from;
          let xu = vE.build(yu.setDoc(Qu), uu, Xu, Vu);
          Ku = hE(Ku, Ku.replace(Ju, Nu, xu))
        }
        return Ku.updateHeight(yu, 0)
      }
      static empty() {
        return new YE(0, 0, 0)
      }
      static of (uu) {
        if (1 == uu.length) return uu[0];
        let Ru = 0,
          yu = uu.length,
          Eu = 0,
          Ku = 0;
        for (;;)
          if (Ru == yu)
            if (Eu > 2 * Ku) {
              let Ku = uu[Ru - 1];
              Ku.break ? uu.splice(--Ru, 1, Ku.left, null, Ku.right) : uu.splice(--Ru, 1, Ku.left, Ku.right), yu += 1 + Ku.break, Eu -= Ku.size
            } else {
              if (!(Ku > 2 * Eu)) break;
              {
                let Ru = uu[yu];
                Ru.break ? uu.splice(yu, 1, Ru.left, null, Ru.right) : uu.splice(yu, 1, Ru.left, Ru.right), yu += 2 + Ru.break, Ku -= Ru.size
              }
            }
        else if (Eu < Ku) {
          let yu = uu[Ru++];
          yu && (Eu += yu.size)
        } else {
          let Ru = uu[--yu];
          Ru && (Ku += Ru.size)
        }
        let Qu = 0;
        return null == uu[Ru - 1] ? (Qu = 1, Ru--) : null == uu[Ru] && (Qu = 1, yu++), new qE(ZE.of(uu.slice(0, Ru)), Qu, ZE.of(uu.slice(yu)))
      }
    }

    function hE(uu, Ru) {
      return uu == Ru ? uu : (uu.constructor != Ru.constructor && (lE = !0), Ru)
    }
    ZE.prototype.size = 1;
    const PE = nu.replace({});
    class iE extends ZE {
      constructor(uu, Ru, yu) {
        super(uu, Ru), this.deco = yu, this.spaceAbove = 0
      }
      mainBlock(uu, Ru) {
        return new zE(Ru, this.length, uu + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(uu, Ru, yu, Eu) {
        return this.spaceAbove && uu < yu + this.spaceAbove ? new zE(Eu, 0, yu, this.spaceAbove, PE) : this.mainBlock(yu, Eu)
      }
      lineAt(uu, Ru, yu, Eu, Ku) {
        let Qu = this.mainBlock(Eu, Ku);
        return this.spaceAbove ? this.blockAt(0, yu, Eu, Ku).join(Qu) : Qu
      }
      forEachLine(uu, Ru, yu, Eu, Ku, Qu) {
        uu <= Ku + this.length && Ru >= Ku && Qu(this.lineAt(0, FE.ByPos, yu, Eu, Ku))
      }
      setMeasuredHeight(uu) {
        let Ru = uu.heights[uu.index++];
        Ru < 0 ? (this.spaceAbove = -Ru, Ru = uu.heights[uu.index++]) : this.spaceAbove = 0, this.setHeight(Ru)
      }
      updateHeight(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 3 ? arguments[3] : void 0;
        return yu && yu.from <= Ru && yu.more && this.setMeasuredHeight(yu), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class YE extends iE {
      constructor(uu, Ru, yu) {
        super(uu, Ru, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = yu
      }
      mainBlock(uu, Ru) {
        return new zE(Ru, this.length, uu + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(uu, Ru, yu) {
        let Eu = yu[0];
        return 1 == yu.length && (Eu instanceof YE || Eu instanceof oE && 4 & Eu.flags) && Math.abs(this.length - Eu.length) < 10 ? (Eu instanceof oE ? Eu = new YE(Eu.length, this.height, this.spaceAbove) : Eu.height = this.height, this.outdated || (Eu.outdated = !1), Eu) : ZE.of(yu)
      }
      updateHeight(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        return Eu && Eu.from <= Ru && Eu.more ? this.setMeasuredHeight(Eu) : (yu || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, uu.heightForLine(this.length - this.collapsed)) + this.breaks * uu.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class oE extends ZE {
      constructor(uu) {
        super(uu, 0)
      }
      heightMetrics(uu, Ru) {
        let yu, Eu = uu.doc.lineAt(Ru).number,
          Ku = uu.doc.lineAt(Ru + this.length).number,
          Qu = Ku - Eu + 1,
          mu = 0;
        if (uu.lineWrapping) {
          let Ru = Math.min(this.height, uu.lineHeight * Qu);
          yu = Ru / Qu, this.length > Qu + 1 && (mu = (this.height - Ru) / (this.length - Qu - 1))
        } else yu = this.height / Qu;
        return {
          firstLine: Eu,
          lastLine: Ku,
          perLine: yu,
          perChar: mu
        }
      }
      blockAt(uu, Ru, yu, Eu) {
        let {
          firstLine: Ku,
          lastLine: Qu,
          perLine: mu,
          perChar: Ju
        } = this.heightMetrics(Ru, Eu);
        if (Ru.lineWrapping) {
          let Ku = Eu + (uu < Ru.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (uu - yu) / this.height)) * this.length)),
            Qu = Ru.doc.lineAt(Ku),
            Nu = mu + Qu.length * Ju,
            Xu = Math.max(yu, uu - Nu / 2);
          return new zE(Qu.from, Qu.length, Xu, Nu, 0)
        } {
          let Eu = Math.max(0, Math.min(Qu - Ku, Math.floor((uu - yu) / mu))),
            {
              from: Ju,
              length: Nu
            } = Ru.doc.line(Ku + Eu);
          return new zE(Ju, Nu, yu + mu * Eu, mu, 0)
        }
      }
      lineAt(uu, Ru, yu, Eu, Ku) {
        if (Ru == FE.ByHeight) return this.blockAt(uu, yu, Eu, Ku);
        if (Ru == FE.ByPosNoHeight) {
          let {
            from: Ru,
            to: Eu
          } = yu.doc.lineAt(uu);
          return new zE(Ru, Eu - Ru, 0, 0, 0)
        }
        let {
          firstLine: Qu,
          perLine: mu,
          perChar: Ju
        } = this.heightMetrics(yu, Ku), Nu = yu.doc.lineAt(uu), Xu = mu + Nu.length * Ju, Vu = Nu.number - Qu, ru = Eu + mu * Vu + Ju * (Nu.from - Ku - Vu);
        return new zE(Nu.from, Nu.length, Math.max(Eu, Math.min(ru, Eu + this.height - Xu)), Xu, 0)
      }
      forEachLine(uu, Ru, yu, Eu, Ku, Qu) {
        uu = Math.max(uu, Ku), Ru = Math.min(Ru, Ku + this.length);
        let {
          firstLine: mu,
          perLine: Ju,
          perChar: Nu
        } = this.heightMetrics(yu, Ku);
        for (let Xu = uu, Vu = Eu; Xu <= Ru;) {
          let Ru = yu.doc.lineAt(Xu);
          if (Xu == uu) {
            let yu = Ru.number - mu;
            Vu += Ju * yu + Nu * (uu - Ku - yu)
          }
          let Eu = Ju + Nu * Ru.length;
          Qu(new zE(Ru.from, Ru.length, Vu, Eu, 0)), Vu += Eu, Xu = Ru.to + 1
        }
      }
      replace(uu, Ru, yu) {
        let Eu = this.length - Ru;
        if (Eu > 0) {
          let uu = yu[yu.length - 1];
          uu instanceof oE ? yu[yu.length - 1] = new oE(uu.length + Eu) : yu.push(null, new oE(Eu - 1))
        }
        if (uu > 0) {
          let Ru = yu[0];
          Ru instanceof oE ? yu[0] = new oE(uu + Ru.length) : yu.unshift(new oE(uu - 1), null)
        }
        return ZE.of(yu)
      }
      decomposeLeft(uu, Ru) {
        Ru.push(new oE(uu - 1), null)
      }
      decomposeRight(uu, Ru) {
        Ru.push(null, new oE(this.length - uu - 1))
      }
      updateHeight(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 ? arguments[3] : void 0,
          Ku = Ru + this.length;
        if (Eu && Eu.from <= Ru + this.length && Eu.more) {
          let yu = [],
            Qu = Math.max(Ru, Eu.from),
            mu = -1;
          for (Eu.from > Ru && yu.push(new oE(Eu.from - Ru - 1).updateHeight(uu, Ru)); Qu <= Ku && Eu.more;) {
            let Ru = uu.doc.lineAt(Qu).length;
            yu.length && yu.push(null);
            let Ku = Eu.heights[Eu.index++],
              Ju = 0;
            Ku < 0 && (Ju = -Ku, Ku = Eu.heights[Eu.index++]), -1 == mu ? mu = Ku : Math.abs(Ku - mu) >= wE && (mu = -2);
            let Nu = new YE(Ru, Ku, Ju);
            Nu.outdated = !1, yu.push(Nu), Qu += Ru + 1
          }
          Qu <= Ku && yu.push(null, new oE(Ku - Qu).updateHeight(uu, Qu));
          let Ju = ZE.of(yu);
          return (mu < 0 || Math.abs(Ju.height - this.height) >= wE || Math.abs(mu - this.heightMetrics(uu, Ru).perLine) >= wE) && (lE = !0), hE(this, Ju)
        }
        return (yu || this.outdated) && (this.setHeight(uu.heightForGap(Ru, Ru + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class qE extends ZE {
      constructor(uu, Ru, yu) {
        super(uu.length + Ru + yu.length, uu.height + yu.height, Ru | (uu.outdated || yu.outdated ? 2 : 0)), this.left = uu, this.right = yu, this.size = uu.size + yu.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(uu, Ru, yu, Eu) {
        let Ku = yu + this.left.height;
        return uu < Ku ? this.left.blockAt(uu, Ru, yu, Eu) : this.right.blockAt(uu, Ru, Ku, Eu + this.left.length + this.break)
      }
      lineAt(uu, Ru, yu, Eu, Ku) {
        let Qu = Eu + this.left.height,
          mu = Ku + this.left.length + this.break,
          Ju = Ru == FE.ByHeight ? uu < Qu : uu < mu,
          Nu = Ju ? this.left.lineAt(uu, Ru, yu, Eu, Ku) : this.right.lineAt(uu, Ru, yu, Qu, mu);
        if (this.break || (Ju ? Nu.to < mu : Nu.from > mu)) return Nu;
        let Xu = Ru == FE.ByPosNoHeight ? FE.ByPosNoHeight : FE.ByPos;
        return Ju ? Nu.join(this.right.lineAt(mu, Xu, yu, Qu, mu)) : this.left.lineAt(mu, Xu, yu, Eu, Ku).join(Nu)
      }
      forEachLine(uu, Ru, yu, Eu, Ku, Qu) {
        let mu = Eu + this.left.height,
          Ju = Ku + this.left.length + this.break;
        if (this.break) uu < Ju && this.left.forEachLine(uu, Ru, yu, Eu, Ku, Qu), Ru >= Ju && this.right.forEachLine(uu, Ru, yu, mu, Ju, Qu);
        else {
          let Nu = this.lineAt(Ju, FE.ByPos, yu, Eu, Ku);
          uu < Nu.from && this.left.forEachLine(uu, Nu.from - 1, yu, Eu, Ku, Qu), Nu.to >= uu && Nu.from <= Ru && Qu(Nu), Ru > Nu.to && this.right.forEachLine(Nu.to + 1, Ru, yu, mu, Ju, Qu)
        }
      }
      replace(uu, Ru, yu) {
        let Eu = this.left.length + this.break;
        if (Ru < Eu) return this.balanced(this.left.replace(uu, Ru, yu), this.right);
        if (uu > this.left.length) return this.balanced(this.left, this.right.replace(uu - Eu, Ru - Eu, yu));
        let Ku = [];
        uu > 0 && this.decomposeLeft(uu, Ku);
        let Qu = Ku.length;
        for (let mu of yu) Ku.push(mu);
        if (uu > 0 && OE(Ku, Qu - 1), Ru < this.length) {
          let uu = Ku.length;
          this.decomposeRight(Ru, Ku), OE(Ku, uu)
        }
        return ZE.of(Ku)
      }
      decomposeLeft(uu, Ru) {
        let yu = this.left.length;
        if (uu <= yu) return this.left.decomposeLeft(uu, Ru);
        Ru.push(this.left), this.break && (yu++, uu >= yu && Ru.push(null)), uu > yu && this.right.decomposeLeft(uu - yu, Ru)
      }
      decomposeRight(uu, Ru) {
        let yu = this.left.length,
          Eu = yu + this.break;
        if (uu >= Eu) return this.right.decomposeRight(uu - Eu, Ru);
        uu < yu && this.left.decomposeRight(uu, Ru), this.break && uu < Eu && Ru.push(null), Ru.push(this.right)
      }
      balanced(uu, Ru) {
        return uu.size > 2 * Ru.size || Ru.size > 2 * uu.size ? ZE.of(this.break ? [uu, null, Ru] : [uu, Ru]) : (this.left = hE(this.left, uu), this.right = hE(this.right, Ru), this.setHeight(uu.height + Ru.height), this.outdated = uu.outdated || Ru.outdated, this.size = uu.size + Ru.size, this.length = uu.length + this.break+Ru.length, this)
      }
      updateHeight(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Ku,
            right: Qu
          } = this,
          mu = Ru + Ku.length + this.break,
          Ju = null;
        return Eu && Eu.from <= Ru + Ku.length && Eu.more ? Ju = Ku = Ku.updateHeight(uu, Ru, yu, Eu) : Ku.updateHeight(uu, Ru, yu), Eu && Eu.from <= mu + Qu.length && Eu.more ? Ju = Qu = Qu.updateHeight(uu, mu, yu, Eu) : Qu.updateHeight(uu, mu, yu), Ju ? this.balanced(Ku, Qu) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function OE(uu, Ru) {
      let yu, Eu;
      null == uu[Ru] && (yu = uu[Ru - 1]) instanceof oE && (Eu = uu[Ru + 1]) instanceof oE && uu.splice(Ru - 1, 3, new oE(yu.length + 1 + Eu.length))
    }
    class vE {
      constructor(uu, Ru) {
        this.pos = uu, this.oracle = Ru, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = uu
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(uu, Ru) {
        if (this.lineStart > -1) {
          let uu = Math.min(Ru, this.lineEnd),
            yu = this.nodes[this.nodes.length - 1];
          yu instanceof YE ? yu.length += uu - this.pos : (uu > this.pos || !this.isCovered) && this.nodes.push(new YE(uu - this.pos, -1, 0)), this.writtenTo = uu, Ru > uu && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = Ru
      }
      point(uu, Ru, yu) {
        if (uu < Ru || yu.heightRelevant) {
          let Eu = yu.widget ? yu.widget.estimatedHeight : 0,
            Ku = yu.widget ? yu.widget.lineBreaks : 0;
          Eu < 0 && (Eu = this.oracle.lineHeight);
          let Qu = Ru - uu;
          yu.block ? this.DRu(new iE(Qu, Eu, yu)) : (Qu || Ku || Eu >= 5) && this.addLineDeco(Eu, Ku, Qu)
        } else Ru > uu && this.span(uu, Ru);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: uu,
          to: Ru
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = uu, this.lineEnd = Ru, this.writtenTo < uu && ((this.writtenTo < uu - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, uu - 1)), this.nodes.push(null)), this.pos > uu && this.nodes.push(new YE(this.pos - uu, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(uu, Ru) {
        let yu = new oE(Ru - uu);
        return this.oracle.doc.lineAt(uu).to == Ru && (yu.flags |= 4), yu
      }
      ensureLine() {
        this.enterLine();
        let uu = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (uu instanceof YE) return uu;
        let Ru = new YE(0, -1, 0);
        return this.nodes.push(Ru), Ru
      }
      DRu(uu) {
        this.enterLine();
        let Ru = uu.deco;
        Ru && Ru.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(uu), this.writtenTo = this.pos = this.pos + uu.length, Ru && Ru.endSide > 0 && (this.covering = uu)
      }
      addLineDeco(uu, Ru, yu) {
        let Eu = this.ensureLine();
        Eu.length += yu, Eu.collapsed += yu, Eu.widgetHeight = Math.max(Eu.widgetHeight, uu), Eu.breaks += Ru, this.writtenTo = this.pos = this.pos + yu
      }
      finish(uu) {
        let Ru = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || Ru instanceof YE || this.isCovered ? (this.writtenTo < this.pos || null == Ru) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new YE(0, -1, 0));
        let yu = uu;
        for (let Eu of this.nodes) Eu instanceof YE && Eu.updateHeight(this.oracle, yu), yu += Eu ? Eu.length : 1;
        return this.nodes
      }
      static build(uu, Ru, yu, Ku) {
        let Qu = new vE(yu, uu);
        return Eu.x.spans(Ru, yu, Ku, Qu, 0), Qu.finish(yu)
      }
    }
    class aE {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(uu, Ru, yu, Eu) {
        (uu < Ru || yu && yu.heightRelevant || Eu && Eu.heightRelevant) && cu(uu, Ru, this.changes, 5)
      }
    }

    function fE(uu, Ru) {
      let yu = uu.getBoundingClientRect(),
        Eu = uu.ownerDocument,
        Ku = Eu.defaultView || window,
        Qu = Math.max(0, yu.left),
        mu = Math.min(Ku.innerWidth, yu.right),
        Ju = Math.max(0, yu.top),
        Nu = Math.min(Ku.innerHeight, yu.bottom);
      for (let Xu = uu.parentNode; Xu && Xu != Eu.body;)
        if (1 == Xu.nodeType) {
          let Ru = Xu,
            yu = window.getComputedStyle(Ru);
          if ((Ru.scrollHeight > Ru.clientHeight || Ru.scrollWidth > Ru.clientWidth) && "visible" != yu.overflow) {
            let yu = Ru.getBoundingClientRect();
            Qu = Math.max(Qu, yu.left), mu = Math.min(mu, yu.right), Ju = Math.max(Ju, yu.top), Nu = Math.min(Xu == uu.parentNode ? Ku.innerHeight : Nu, yu.bottom)
          }
          Xu = "absolute" == yu.position || "fixed" == yu.position ? Ru.offsetParent : Ru.parentNode
        } else {
          if (11 != Xu.nodeType) break;
          Xu = Xu.host
        } return {
        left: Qu - yu.left,
        right: Math.max(Qu, mu) - yu.left,
        top: Ju - (yu.top + Ru),
        bottom: Math.max(Ju, Nu) - (yu.top + Ru)
      }
    }

    function uK(uu, Ru) {
      let yu = uu.getBoundingClientRect();
      return {
        left: 0,
        right: yu.right - yu.left,
        top: Ru,
        bottom: yu.bottom - (yu.top + Ru)
      }
    }
    class RK {
      constructor(uu, Ru, yu, Eu) {
        this.from = uu, this.to = Ru, this.size = yu, this.displaySize = Eu
      }
      static same(uu, Ru) {
        if (uu.length != Ru.length) return !1;
        for (let yu = 0; yu < uu.length; yu++) {
          let Eu = uu[yu],
            Ku = Ru[yu];
          if (Eu.from != Ku.from || Eu.to != Ku.to || Eu.size != Ku.size) return !1
        }
        return !0
      }
      draw(uu, Ru) {
        return nu.replace({
          widget: new yK(this.displaySize * (Ru ? uu.scaleY : uu.scaleX), Ru)
        }).range(this.from, this.to)
      }
    }
    class yK extends Gu {
      constructor(uu, Ru) {
        super(), this.size = uu, this.vertical = Ru
      }
      eq(uu) {
        return uu.size == this.size && uu.vertical == this.vertical
      }
      toDOM() {
        let uu = document.createElement("div");
        return this.vertical ? uu.style.height = this.size + "px" : (uu.style.width = this.size + "px", uu.style.height = "2px", uu.style.display = "inline-block"), uu
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class EK {
      constructor(uu, Ru) {
        this.view = uu, this.state = Ru, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = JK, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = XR.LTR, this.o4 = [], this.mustEnforceCursorAssoc = !1;
        let yu = Ru.facet(fR).some((uu => "function" != typeof uu && "cm-lineWrapping" == uu.class));
        this.heightOracle = new cE(yu), this.stateDeco = NK(Ru), this.heightMap = ZE.empty().applyChanges(this.stateDeco, Eu.F.empty, this.heightOracle.setDoc(Ru.doc), [new Xy(0, 0, 0, Ru.doc.length)]);
        for (let Eu = 0; Eu < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Eu++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = nu.set(this.lineGaps.map((uu => uu.draw(this, !1)))), this.scrollParent = uu.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let uu = [this.viewport],
          {
            main: Ru
          } = this.state.selection;
        for (let yu = 0; yu <= 1; yu++) {
          let Eu = yu ? Ru.head : Ru.anchor;
          if (!uu.some((uu => {
              let {
                from: Ru,
                to: yu
              } = uu;
              return Eu >= Ru && Eu <= yu
            }))) {
            let {
              from: Ru,
              to: yu
            } = this.lineBlockAt(Eu);
            uu.push(new KK(Ru, yu))
          }
        }
        return this.viewports = uu.sort(((uu, Ru) => uu.from - Ru.from)), this.updateScaler()
      }
      updateScaler() {
        let uu = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? JK : new XK(this.heightOracle, this.heightMap, this.viewports), uu.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (uu => {
          this.viewportLines.push(VK(uu, this.scaler))
        }))
      }
      update(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = uu.state;
        let yu = this.stateDeco;
        this.stateDeco = NK(this.state);
        let Ku = uu.changedRanges,
          Qu = Xy.extendWithRanges(Ku, function(uu, Ru, yu) {
            let Ku = new aE;
            return Eu.x.compare(uu, Ru, yu, Ku, 0), Ku.changes
          }(yu, this.stateDeco, uu ? uu.changes : Eu.ChangeSet.empty(this.state.doc.length))),
          mu = this.heightMap.height,
          Ju = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        gE(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, uu.startState.doc, this.heightOracle.setDoc(this.state.doc), Qu), (this.heightMap.height != mu || lE) && (uu.flags |= 2), Ju ? (this.scrollAnchorPos = uu.changes.mapPos(Ju.from, -1), this.scrollAnchorHeight = Ju.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = mu);
        let Nu = Qu.length ? this.mapViewport(this.viewport, uu.changes) : this.viewport;
        (Ru && (Ru.range.head < Nu.from || Ru.range.head > Nu.to) || !this.viewportIsAppropriate(Nu)) && (Nu = this.getViewport(0, Ru));
        let Xu = Nu.from != this.viewport.from || Nu.to != this.viewport.to;
        this.viewport = Nu, uu.flags |= this.updateForViewport(), (Xu || !uu.changes.empty || 2 & uu.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, uu.changes))), uu.flags |= this.computeVisibleRanges(uu.changes), Ru && (this.scrollTarget = Ru), !this.mustEnforceCursorAssoc && (uu.selectionSet || uu.focusChanged) && uu.view.lineWrapping && uu.state.selection.main.empty && uu.state.selection.main.assoc && !uu.state.facet(FR) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: uu
        } = this, Ru = uu.contentDOM, yu = window.getComputedStyle(Ru), Ku = this.heightOracle, Qu = yu.whiteSpace;
        this.defaultTextDirection = "rtl" == yu.direction ? XR.RTL : XR.LTR;
        let mu = this.heightOracle.mustRefreshForWrapping(Qu) || "refresh" === this.mustMeasureContent,
          Ju = Ru.getBoundingClientRect(),
          Nu = mu || this.mustMeasureContent || this.contentDOMHeight != Ju.height;
        this.contentDOMHeight = Ju.height, this.mustMeasureContent = !1;
        let Xu = 0,
          Vu = 0;
        if (Ju.width && Ju.height) {
          let {
            scaleX: uu,
            scaleY: yu
          } = vu(Ru, Ju);
          (uu > .005 && Math.abs(this.scaleX - uu) > .005 || yu > .005 && Math.abs(this.scaleY - yu) > .005) && (this.scaleX = uu, this.scaleY = yu, Xu |= 16, mu = Nu = !0)
        }
        let ru = (parseInt(yu.paddingTop) || 0) * this.scaleY,
          Bu = (parseInt(yu.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == ru && this.paddingBottom == Bu || (this.paddingTop = ru, this.paddingBottom = Bu, Xu |= 18), this.editorWidth != uu.scrollDOM.clientWidth && (Ku.lineWrapping && (Nu = !0), this.editorWidth = uu.scrollDOM.clientWidth, Xu |= 16);
        let xu = au(this.view.contentDOM, !1).y;
        xu != this.scrollParent && (this.scrollParent = xu, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let Su = this.getScrollOffset();
        this.scrollOffset != Su && (this.scrollAnchorHeight = -1, this.scrollOffset = Su), this.scrolledToBottom = QR(this.scrollParent || uu.win);
        let pu = (this.printing ? uK : fE)(Ru, this.paddingTop),
          Tu = pu.top - this.pixelViewport.top,
          Wu = pu.bottom - this.pixelViewport.bottom;
        this.pixelViewport = pu;
        let ju = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (ju != this.inView && (this.inView = ju, ju && (Nu = !0)), !this.inView && !this.scrollTarget && ! function(uu) {
            let Ru = uu.getBoundingClientRect(),
              yu = uu.ownerDocument.defaultView || window;
            return Ru.left < yu.innerWidth && Ru.right > 0 && Ru.top < yu.innerHeight && Ru.bottom > 0
          }(uu.dom)) return 0;
        let Hu = Ju.width;
        if (this.contentDOMWidth == Hu && this.editorHeight == uu.scrollDOM.clientHeight || (this.contentDOMWidth = Ju.width, this.editorHeight = uu.scrollDOM.clientHeight, Xu |= 16), Nu) {
          let Ru = uu.docView.measureVisibleLineHeights(this.viewport);
          if (Ku.mustRefreshForHeights(Ru) && (mu = !0), mu || Ku.lineWrapping && Math.abs(Hu - this.contentDOMWidth) > Ku.charWidth) {
            let {
              lineHeight: yu,
              charWidth: Eu,
              textHeight: Ju
            } = uu.docView.measureTextSize();
            mu = yu > 0 && Ku.refresh(Qu, yu, Eu, Ju, Math.max(5, Hu / Eu), Ru), mu && (uu.docView.minWidth = 0, Xu |= 16)
          }
          Tu > 0 && Wu > 0 ? Vu = Math.max(Tu, Wu) : Tu < 0 && Wu < 0 && (Vu = Math.min(Tu, Wu)), gE();
          for (let yu of this.viewports) {
            let Qu = yu.from == this.viewport.from ? Ru : uu.docView.measureVisibleLineHeights(yu);
            this.heightMap = (mu ? ZE.empty().applyChanges(this.stateDeco, Eu.F.empty, this.heightOracle, [new Xy(0, 0, 0, uu.state.doc.length)]) : this.heightMap).updateHeight(Ku, 0, mu, new LE(yu.from, Qu))
          }
          lE && (Xu |= 2)
        }
        let du = !this.viewportIsAppropriate(this.viewport, Vu) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return du && (2 & Xu && (Xu |= this.updateScaler()), this.viewport = this.getViewport(Vu, this.scrollTarget), Xu |= this.updateForViewport()), (2 & Xu || du) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(mu ? [] : this.lineGaps, uu)), Xu |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, uu.docView.enforceCursorAssoc()), Xu
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(uu, Ru) {
        let yu = .5 - Math.max(-.5, Math.min(.5, uu / 1e3 / 2)),
          Eu = this.heightMap,
          Ku = this.heightOracle,
          {
            visibleTop: Qu,
            visibleBottom: mu
          } = this,
          Ju = new KK(Eu.lineAt(Qu - 1e3 * yu, FE.ByHeight, Ku, 0, 0).from, Eu.lineAt(mu + 1e3 * (1 - yu), FE.ByHeight, Ku, 0, 0).to);
        if (Ru) {
          let {
            head: uu
          } = Ru.range;
          if (uu < Ju.from || uu > Ju.to) {
            let yu, Qu = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              mu = Eu.lineAt(uu, FE.ByPos, Ku, 0, 0);
            yu = "center" == Ru.y ? (mu.top + mu.bottom) / 2 - Qu / 2 : "start" == Ru.y || "nearest" == Ru.y && uu < Ju.from ? mu.top : mu.bottom - Qu, Ju = new KK(Eu.lineAt(yu - 500, FE.ByHeight, Ku, 0, 0).from, Eu.lineAt(yu + Qu + 500, FE.ByHeight, Ku, 0, 0).to)
          }
        }
        return Ju
      }
      mapViewport(uu, Ru) {
        let yu = Ru.mapPos(uu.from, -1),
          Eu = Ru.mapPos(uu.to, 1);
        return new KK(this.heightMap.lineAt(yu, FE.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Eu, FE.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(uu) {
        let {
          from: Ru,
          to: yu
        } = uu, Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Ku
        } = this.heightMap.lineAt(Ru, FE.ByPos, this.heightOracle, 0, 0), {
          bottom: Qu
        } = this.heightMap.lineAt(yu, FE.ByPos, this.heightOracle, 0, 0), {
          visibleTop: mu,
          visibleBottom: Ju
        } = this;
        return (0 == Ru || Ku <= mu - Math.max(10, Math.min(-Eu, 250))) && (yu == this.state.doc.length || Qu >= Ju + Math.max(10, Math.min(Eu, 250))) && Ku > mu - 2e3 && Qu < Ju + 2e3
      }
      mapLineGaps(uu, Ru) {
        if (!uu.length || Ru.empty) return uu;
        let yu = [];
        for (let Eu of uu) Ru.touchesRange(Eu.from, Eu.to) || yu.push(new RK(Ru.mapPos(Eu.from), Ru.mapPos(Eu.to), Eu.size, Eu.displaySize));
        return yu
      }
      ensureLineGaps(uu, Ru) {
        let yu = this.heightOracle.lineWrapping,
          Ku = yu ? 1e4 : 2e3,
          Qu = Ku >> 1,
          mu = Ku << 1;
        if (this.defaultTextDirection != XR.LTR && !yu) return [];
        let Ju = [],
          Nu = (Ku, mu, Xu, Vu) => {
            if (mu - Ku < Qu) return;
            let ru = this.state.selection.main,
              Bu = [ru.from];
            ru.empty || Bu.push(ru.to);
            for (let uu of Bu)
              if (uu > Ku && uu < mu) return Nu(Ku, uu - 10, Xu, Vu), void Nu(uu + 10, mu, Xu, Vu);
            let xu = function(uu, Ru) {
              for (let yu of uu)
                if (Ru(yu)) return yu;
              return
            }(uu, (uu => uu.from >= Xu.from && uu.to <= Xu.to && Math.abs(uu.from - Ku) < Qu && Math.abs(uu.to - mu) < Qu && !Bu.some((Ru => uu.from < Ru && uu.to > Ru))));
            if (!xu) {
              if (mu < Xu.to && Ru && yu && Ru.o4.some((uu => uu.from <= mu && uu.to >= mu))) {
                let uu = Ru.moveToLineBoundary(Eu.n.cursor(mu), !1, !0).head;
                uu > Ku && (mu = uu)
              }
              let uu = this.gapSize(Xu, Ku, mu, Vu);
              xu = new RK(Ku, mu, uu, yu || uu < 2e6 ? uu : 2e6)
            }
            Ju.push(xu)
          },
          Xu = Ru => {
            if (Ru.length < mu || Ru.type != Uu.Text) return;
            let Qu = function(uu, Ru, yu) {
              let Ku = [],
                Qu = uu,
                mu = 0;
              Eu.x.spans(yu, uu, Ru, {
                span() {},
                point(uu, Ru) {
                  uu > Qu && (Ku.push({
                    from: Qu,
                    to: uu
                  }), mu += uu - Qu), Qu = Ru
                }
              }, 20), Qu < Ru && (Ku.push({
                from: Qu,
                to: Ru
              }), mu += Ru - Qu);
              return {
                total: mu,
                yT: Ku
              }
            }(Ru.from, Ru.to, this.stateDeco);
            if (Qu.total < mu) return;
            let Ju, Xu, Vu = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (yu) {
              let uu, yu, Eu = Ku / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != Vu) {
                let Ku = mK(Qu, Vu),
                  mu = ((this.visibleBottom - this.visibleTop) / 2 + Eu) / Ru.height;
                uu = Ku - mu, yu = Ku + mu
              } else uu = (this.visibleTop - Ru.top - Eu) / Ru.height, yu = (this.visibleBottom - Ru.top + Eu) / Ru.height;
              Ju = QK(Qu, uu), Xu = QK(Qu, yu)
            } else {
              let yu = Qu.total * this.heightOracle.charWidth,
                Eu = Ku * this.heightOracle.charWidth,
                mu = 0;
              if (yu > 2e6)
                for (let Ku of uu) Ku.from >= Ru.from && Ku.from < Ru.to && Ku.size != Ku.displaySize && Ku.from * this.heightOracle.charWidth + mu < this.pixelViewport.left && (mu = Ku.size - Ku.displaySize);
              let Nu, ru, Bu = this.pixelViewport.left + mu,
                xu = this.pixelViewport.right + mu;
              if (null != Vu) {
                let uu = mK(Qu, Vu),
                  Ru = ((xu - Bu) / 2 + Eu) / yu;
                Nu = uu - Ru, ru = uu + Ru
              } else Nu = (Bu - Eu) / yu, ru = (xu + Eu) / yu;
              Ju = QK(Qu, Nu), Xu = QK(Qu, ru)
            }
            Ju > Ru.from && Nu(Ru.from, Ju, Ru, Qu), Xu < Ru.to && Nu(Xu, Ru.to, Ru, Qu)
          };
        for (let Eu of this.viewportLines) Array.isArray(Eu.type) ? Eu.type.forEach(Xu) : Xu(Eu);
        return Ju
      }
      gapSize(uu, Ru, yu, Eu) {
        let Ku = mK(Eu, yu) - mK(Eu, Ru);
        return this.heightOracle.lineWrapping ? uu.height * Ku : Eu.total * this.heightOracle.charWidth * Ku
      }
      updateLineGaps(uu) {
        RK.same(uu, this.lineGaps) || (this.lineGaps = uu, this.lineGapDeco = nu.set(uu.map((uu => uu.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(uu) {
        let Ru = this.stateDeco;
        this.lineGaps.length && (Ru = Ru.concat(this.lineGapDeco));
        let yu = [];
        Eu.x.spans(Ru, this.viewport.from, this.viewport.to, {
          span(uu, Ru) {
            yu.push({
              from: uu,
              to: Ru
            })
          },
          point() {}
        }, 20);
        let Ku = 0;
        if (yu.length != this.o4.length) Ku = 12;
        else
          for (let Eu = 0; Eu < yu.length && !(8 & Ku); Eu++) {
            let Ru = this.o4[Eu],
              Qu = yu[Eu];
            Ru.from == Qu.from && Ru.to == Qu.to || (Ku |= 4, uu && uu.mapPos(Ru.from, -1) == Qu.from && uu.mapPos(Ru.to, 1) == Qu.to || (Ku |= 8))
          }
        return this.o4 = yu, Ku
      }
      lineBlockAt(uu) {
        return uu >= this.viewport.from && uu <= this.viewport.to && this.viewportLines.find((Ru => Ru.from <= uu && Ru.to >= uu)) || VK(this.heightMap.lineAt(uu, FE.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(uu) {
        return uu >= this.viewportLines[0].top && uu <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((Ru => Ru.top <= uu && Ru.bottom >= uu)) || VK(this.heightMap.lineAt(this.scaler.fromDOM(uu), FE.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(uu) {
        let Ru = this.lineBlockAtHeight(uu + 8);
        return Ru.from >= this.viewport.from || this.viewportLines[0].top - uu > 200 ? Ru : this.viewportLines[0]
      }
      elementAtHeight(uu) {
        return VK(this.heightMap.blockAt(this.scaler.fromDOM(uu), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class KK {
      constructor(uu, Ru) {
        this.from = uu, this.to = Ru
      }
    }

    function QK(uu, Ru) {
      let {
        total: yu,
        yT: Eu
      } = uu;
      if (Ru <= 0) return Eu[0].from;
      if (Ru >= 1) return Eu[Eu.length - 1].to;
      let Ku = Math.floor(yu * Ru);
      for (let Qu = 0;; Qu++) {
        let {
          from: uu,
          to: Ru
        } = Eu[Qu], yu = Ru - uu;
        if (Ku <= yu) return uu + Ku;
        Ku -= yu
      }
    }

    function mK(uu, Ru) {
      let yu = 0;
      for (let {
          from: Eu,
          to: Ku
        }
        of uu.yT) {
        if (Ru <= Ku) {
          yu += Ru - Eu;
          break
        }
        yu += Ku - Eu
      }
      return yu / uu.total
    }
    const JK = {
      toDOM: uu => uu,
      fromDOM: uu => uu,
      scale: 1,
      eq(uu) {
        return uu == this
      }
    };

    function NK(uu) {
      let Ru = uu.facet(uy).filter((uu => "function" != typeof uu)),
        yu = uu.facet(yy).filter((uu => "function" != typeof uu));
      return yu.length && Ru.push(Eu.x.join(yu)), Ru
    }
    class XK {
      constructor(uu, Ru, yu) {
        let Eu = 0,
          Ku = 0,
          Qu = 0;
        this.viewports = yu.map((yu => {
          let {
            from: Ku,
            to: Qu
          } = yu, mu = Ru.lineAt(Ku, FE.ByPos, uu, 0, 0).top, Ju = Ru.lineAt(Qu, FE.ByPos, uu, 0, 0).bottom;
          return Eu += Ju - mu, {
            from: Ku,
            to: Qu,
            top: mu,
            bottom: Ju,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Eu) / (Ru.height - Eu);
        for (let mu of this.viewports) mu.domTop = Qu + (mu.top - Ku) * this.scale, Qu = mu.domBottom = mu.domTop + (mu.bottom - mu.top), Ku = mu.bottom
      }
      toDOM(uu) {
        for (let Ru = 0, yu = 0, Eu = 0;; Ru++) {
          let Ku = Ru < this.viewports.length ? this.viewports[Ru] : null;
          if (!Ku || uu < Ku.top) return Eu + (uu - yu) * this.scale;
          if (uu <= Ku.bottom) return Ku.domTop + (uu - Ku.top);
          yu = Ku.bottom, Eu = Ku.domBottom
        }
      }
      fromDOM(uu) {
        for (let Ru = 0, yu = 0, Eu = 0;; Ru++) {
          let Ku = Ru < this.viewports.length ? this.viewports[Ru] : null;
          if (!Ku || uu < Ku.domTop) return yu + (uu - Eu) / this.scale;
          if (uu <= Ku.domBottom) return Ku.top + (uu - Ku.domTop);
          yu = Ku.bottom, Eu = Ku.domBottom
        }
      }
      eq(uu) {
        return uu instanceof XK && (this.scale == uu.scale && this.viewports.length == uu.viewports.length && this.viewports.every(((Ru, yu) => Ru.from == uu.viewports[yu].from && Ru.to == uu.viewports[yu].to)))
      }
    }

    function VK(uu, Ru) {
      if (1 == Ru.scale) return uu;
      let yu = Ru.toDOM(uu.top),
        Eu = Ru.toDOM(uu.bottom);
      return new zE(uu.from, uu.length, yu, Eu - yu, Array.isArray(uu._content) ? uu._content.map((uu => VK(uu, Ru))) : uu._content)
    }
    const rK = Eu.q.define({
        combine: uu => uu.join(" ")
      }),
      BK = Eu.q.define({
        combine: uu => uu.indexOf(!0) > -1
      }),
      xK = Ku.b.newName(),
      SK = Ku.b.newName(),
      pK = Ku.b.newName(),
      TK = {
        "&light": "." + SK,
        "&dark": "." + pK
      };

    function WK(uu, Ru, yu) {
      return new Ku.b(Ru, {
        finish: Ru => /&/.test(Ru) ? Ru.replace(/&\w*/, (Ru => {
          if ("&" == Ru) return uu;
          if (!yu || !yu[Ru]) throw new RangeError(`Unsupported selector: ${Ru}`);
          return yu[Ru]
        })) : uu + " " + Ru
      })
    }
    const jK = WK("." + xK, {
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
      }, TK),
      HK = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      dK = ku.ie && ku.ie_version <= 11;
    class bK {
      constructor(uu) {
        this.view = uu, this.active = !1, this.editContext = null, this.selectionRange = new fu, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = uu.contentDOM, this.observer = new MutationObserver((Ru => {
          for (let uu of Ru) this.queue.push(uu);
          (ku.ie && ku.ie_version <= 11 || ku.ios && uu.composing) && Ru.some((uu => "childList" == uu.type && uu.removedNodes.length || "characterData" == uu.type && uu.oldValue.length > uu.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !ku.android || !1 === uu.constructor.EDIT_CONTEXT || ku.chrome && ku.chrome_version < 126 || (this.editContext = new eK(uu), uu.state.facet(YR) && (uu.contentDOM.editContext = this.editContext.editContext)), dK && (this.onCharData = uu => {
          this.queue.push({
            target: uu.target,
            type: "characterData",
            oldValue: uu.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.fW = this.fW.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var uu;
          (null === (uu = this.view.docView) || void 0 === uu ? void 0 : uu.lastUpdate) < Date.now() - 75 && this.fW()
        })), this.resizeScroll.observe(uu.scrollDOM)), this.addWindowListeners(this.win = uu.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((uu => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), uu.length > 0 && uu[uu.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((uu => {
          uu.length > 0 && uu[uu.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(uu) {
        this.view.inputState.runHandlers("scroll", uu), this.intersecting && this.view.measure()
      }
      onScroll(uu) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(uu)
      }
      fW() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(uu) {
        ("change" != uu.type && uu.type || uu.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(uu) {
        if (this.gapIntersection && (uu.length != this.gaps.length || this.gaps.some(((Ru, yu) => Ru != uu[yu])))) {
          this.gapIntersection.disconnect();
          for (let Ru of uu) this.gapIntersection.observe(Ru);
          this.gaps = uu
        }
      }
      onSelectionChange(uu) {
        let Ru = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: yu
        } = this, Eu = this.selectionRange;
        if (yu.state.facet(YR) ? yu.root.activeElement != this.dom : !wu(this.dom, Eu)) return;
        let Ku = Eu.anchorNode && yu.docView.tile.nearest(Eu.anchorNode);
        Ku && Ku.isWidget() && Ku.widget.ignoreEvent(uu) ? Ru || (this.selectionChanged = !1) : (ku.ie && ku.ie_version <= 11 || ku.android && ku.chrome) && !yu.state.selection.main.empty && Eu.focusNode && hu(Eu.focusNode, Eu.focusOffset, Eu.anchorNode, Eu.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: uu
        } = this, Ru = zu(uu.root);
        if (!Ru) return !1;
        let yu = ku.safari && 11 == uu.root.nodeType && uu.root.activeElement == this.dom && function(uu, Ru) {
          if (Ru.getComposedRanges) {
            let yu = Ru.getComposedRanges(uu.root)[0];
            if (yu) return kK(uu, yu)
          }
          let yu = null;

          function Eu(uu) {
            uu.preventDefault(), uu.stopImmediatePropagation(), yu = uu.getTargetRanges()[0]
          }
          return uu.contentDOM.addEventListener("beforeinput", Eu, !0), uu.dom.ownerDocument.execCommand("indent"), uu.contentDOM.removeEventListener("beforeinput", Eu, !0), yu ? kK(uu, yu) : null
        }(this.view, Ru) || Ru;
        if (!yu || this.selectionRange.eq(yu)) return !1;
        let Eu = wu(this.dom, yu);
        return Eu && !this.selectionChanged && uu.inputState.lastFocusTime > Date.now() - 200 && uu.inputState.lastTouchTime < Date.now() - 300 && function(uu, Ru) {
          let yu = Ru.focusNode,
            Eu = Ru.focusOffset;
          if (!yu || Ru.anchorNode != yu || Ru.anchorOffset != Eu) return !1;
          for (Eu = Math.min(Eu, ou(yu));;)
            if (Eu) {
              if (1 != yu.nodeType) return !1;
              let uu = yu.childNodes[Eu - 1];
              "false" == uu.contentEditable ? Eu-- : (yu = uu, Eu = ou(yu))
            } else {
              if (yu == uu) return !0;
              Eu = Pu(yu), yu = yu.parentNode
            }
        }(this.dom, yu) ? (this.view.inputState.lastFocusTime = 0, uu.docView.updateSelection(), !1) : (this.selectionRange.setRange(yu), Eu && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(uu, Ru) {
        this.selectionRange.set(uu.node, uu.offset, Ru.node, Ru.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let uu = 0,
          Ru = null;
        for (let yu = this.dom; yu;)
          if (1 == yu.nodeType) !Ru && uu < this.scrollTargets.length && this.scrollTargets[uu] == yu ? uu++ : Ru || (Ru = this.scrollTargets.slice(0, uu)), Ru && Ru.push(yu), yu = yu.assignedSlot || yu.parentNode;
          else {
            if (11 != yu.nodeType) break;
            yu = yu.host
          } if (uu < this.scrollTargets.length && !Ru && (Ru = this.scrollTargets.slice(0, uu)), Ru) {
          for (let uu of this.scrollTargets) uu.removeEventListener("scroll", this.onScroll);
          for (let uu of this.scrollTargets = Ru) uu.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(uu) {
        if (!this.active) return uu();
        try {
          return this.stop(), uu()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, HK), dK && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), dK && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(uu, Ru) {
        var yu;
        if (!this.delayedAndroidKey) {
          let uu = () => {
            let uu = this.delayedAndroidKey;
            if (uu) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = uu.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && uu.force && KR(this.dom, uu.key, uu.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(uu)
        }
        this.delayedAndroidKey && "Enter" != uu || (this.delayedAndroidKey = {
          key: uu,
          keyCode: Ru,
          force: this.lastChange < Date.now() - 50 || !!(null === (yu = this.delayedAndroidKey) || void 0 === yu ? void 0 : yu.force)
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
        for (let uu of this.observer.takeRecords()) this.queue.push(uu);
        return this.queue
      }
      processRecords() {
        let uu = this.pendingRecords();
        uu.length && (this.queue = []);
        let Ru = -1,
          yu = -1,
          Eu = !1;
        for (let Ku of uu) {
          let uu = this.readMutation(Ku);
          uu && (uu.typeOver && (Eu = !0), -1 == Ru ? ({
            from: Ru,
            to: yu
          } = uu) : (Ru = Math.min(uu.from, Ru), yu = Math.max(uu.to, yu)))
        }
        return {
          from: Ru,
          to: yu,
          typeOver: Eu
        }
      }
      readChange() {
        let {
          from: uu,
          to: Ru,
          typeOver: yu
        } = this.processRecords(), Eu = this.selectionChanged && wu(this.dom, this.selectionRange);
        if (uu < 0 && !Eu) return null;
        uu > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Ku = new yE(this.view, uu, Ru, yu);
        return this.view.docView.domChanged = {
          newSel: Ku.newSel ? Ku.newSel.main : null
        }, Ku
      }
      flush() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        uu && this.readSelectionRange();
        let Ru = this.readChange();
        if (!Ru) return this.view.requestMeasure(), !1;
        let yu = this.view.state,
          Eu = KE(this.view, Ru);
        return this.view.state == yu && (Ru.domChanged || Ru.newSel && !JE(this.view.state.selection, Ru.newSel.main)) && this.view.update([]), Eu
      }
      readMutation(uu) {
        let Ru = this.view.docView.tile.nearest(uu.target);
        if (!Ru || Ru.isWidget()) return null;
        if (Ru.markDirty("attributes" == uu.type), "childList" == uu.type) {
          let yu = CK(Ru, uu.previousSibling || uu.target.previousSibling, -1),
            Eu = CK(Ru, uu.nextSibling || uu.target.nextSibling, 1);
          return {
            from: yu ? Ru.posAfter(yu) : Ru.posAtStart,
            to: Eu ? Ru.posBefore(Eu) : Ru.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == uu.type ? {
          from: Ru.posAtStart,
          to: Ru.posAtEnd,
          typeOver: uu.target.nodeValue == uu.oldValue
        } : null
      }
      setWindow(uu) {
        uu != this.win && (this.removeWindowListeners(this.win), this.win = uu, this.addWindowListeners(this.win))
      }
      addWindowListeners(uu) {
        uu.addEventListener("resize", this.fW), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : uu.addEventListener("beforeprint", this.onPrint), uu.addEventListener("scroll", this.onScroll), uu.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(uu) {
        uu.removeEventListener("scroll", this.onScroll), uu.removeEventListener("resize", this.fW), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : uu.removeEventListener("beforeprint", this.onPrint), uu.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(uu) {
        this.editContext && (this.editContext.update(uu), uu.startState.facet(YR) != uu.state.facet(YR) && (uu.view.contentDOM.editContext = uu.state.facet(YR) ? this.editContext.editContext : null))
      }
      destroy() {
        var uu, Ru, yu;
        this.stop(), null === (uu = this.intersection) || void 0 === uu || uu.disconnect(), null === (Ru = this.gapIntersection) || void 0 === Ru || Ru.disconnect(), null === (yu = this.resizeScroll) || void 0 === yu || yu.disconnect();
        for (let Eu of this.scrollTargets) Eu.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function CK(uu, Ru, yu) {
      for (; Ru;) {
        let Eu = By.get(Ru);
        if (Eu && Eu.parent == uu) return Eu;
        let Ku = Ru.parentNode;
        Ru = Ku != uu.dom ? Ku : yu > 0 ? Ru.nextSibling : Ru.previousSibling
      }
      return null
    }

    function kK(uu, Ru) {
      let yu = Ru.startContainer,
        Eu = Ru.startOffset,
        Ku = Ru.endContainer,
        Qu = Ru.endOffset,
        mu = uu.docView.domAtPos(uu.state.selection.main.anchor, 1);
      return hu(mu.node, mu.offset, Ku, Qu) && ([yu, Eu, Ku, Qu] = [Ku, Qu, yu, Eu]), {
        anchorNode: yu,
        anchorOffset: Eu,
        focusNode: Ku,
        focusOffset: Qu
      }
    }
    class eK {
      constructor(uu) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(uu.state);
        let Ru = this.editContext = new window.EditContext({
          text: uu.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, uu.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(uu.state.selection.main.head)
        });
        this.handlers.textupdate = yu => {
          let Ku = uu.state.selection.main,
            {
              anchor: Qu,
              head: mu
            } = Ku,
            Ju = this.toEditorPos(yu.updateRangeStart),
            Nu = this.toEditorPos(yu.updateRangeEnd);
          uu.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: yu.updateRangeStart,
            editorBase: Ju,
            drifted: !1
          });
          let Xu = Nu - Ju > yu.text.length;
          Ju == this.from && Qu < this.from ? Ju = Qu : Nu == this.to && Qu > this.to && (Nu = Qu);
          let Vu = mE(uu.state.sliceDoc(Ju, Nu), yu.text, (Xu ? Ku.from : Ku.to) - Ju, Xu ? "end" : null);
          if (!Vu) {
            let Ru = Eu.n.single(this.toEditorPos(yu.selectionStart), this.toEditorPos(yu.selectionEnd));
            return void(JE(Ru, Ku) || uu.dispatch({
              selection: Ru,
              userEvent: "select"
            }))
          }
          let ru = {
            from: Vu.from + Ju,
            to: Vu.toA + Ju,
            insert: Eu.F.of(yu.text.slice(Vu.from, Vu.toB).split("\n"))
          };
          if ((ku.mac || ku.android) && ru.from == mu - 1 && /^\. ?$/.test(yu.text) && "off" == uu.contentDOM.getAttribute("autocorrect") && (ru = {
              from: Ju,
              to: Nu,
              insert: Eu.F.of([yu.text.replace(".", " ")])
            }), this.pendingContextChange = ru, !uu.state.readOnly) {
            let Ru = this.to - this.from + (ru.to - ru.from + ru.insert.length);
            QE(uu, ru, Eu.n.single(this.toEditorPos(yu.selectionStart, Ru), this.toEditorPos(yu.selectionEnd, Ru)))
          }
          this.pendingContextChange && (this.revertPending(uu.state), this.setSelection(uu.state)), ru.from < ru.to && !ru.insert.length && uu.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(Ru.text.slice(Math.max(0, yu.updateRangeStart - 1), Math.min(Ru.text.length, yu.updateRangeStart + 1))) && this.handlers.compositionend(yu)
        }, this.handlers.characterboundsupdate = yu => {
          let Eu = [],
            Ku = null;
          for (let Ru = this.toEditorPos(yu.rangeStart), Qu = this.toEditorPos(yu.rangeEnd); Ru < Qu; Ru++) {
            let yu = uu.coordsForChar(Ru);
            Ku = yu && new DOMRect(yu.left, yu.top, yu.right - yu.left, yu.bottom - yu.top) || Ku || new DOMRect, Eu.push(Ku)
          }
          Ru.updateCharacterBounds(yu.rangeStart, Eu)
        }, this.handlers.textformatupdate = Ru => {
          let yu = [];
          for (let uu of Ru.getTextFormats()) {
            let Ru = uu.underlineStyle,
              Eu = uu.underlineThickness;
            if (!/none/i.test(Ru) && !/none/i.test(Eu)) {
              let Ku = this.toEditorPos(uu.rangeStart),
                Qu = this.toEditorPos(uu.rangeEnd);
              if (Ku < Qu) {
                let uu = `text-decoration: underline ${/^[a-z]/.test(Ru)?Ru+" ":"Dashed"==Ru?"dashed ":"Squiggle"==Ru?"wavy ":""}${/thin/i.test(Eu)?1:2}px`;
                yu.push(nu.mark({
                  attributes: {
                    style: uu
                  }
                }).range(Ku, Qu))
              }
            }
          }
          uu.dispatch({
            effects: PR.of(nu.set(yu))
          })
        }, this.handlers.compositionstart = () => {
          uu.inputState.composing < 0 && (uu.inputState.composing = 0, uu.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (uu.inputState.composing = -1, uu.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: Ru
            } = this.composing;
            this.composing = null, Ru && this.reset(uu.state)
          }
        };
        for (let yu in this.handlers) Ru.addEventListener(yu, this.handlers[yu]);
        this.measureReq = {
          read: uu => {
            this.editContext.updateControlBounds(uu.contentDOM.getBoundingClientRect());
            let Ru = zu(uu.root);
            Ru && Ru.rangeCount && this.editContext.updateSelectionBounds(Ru.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(uu) {
        let Ru = 0,
          yu = !1,
          Eu = this.pendingContextChange;
        return uu.changes.iterChanges(((Ku, Qu, mu, Ju, Nu) => {
          if (yu) return;
          let Xu = Nu.length - (Qu - Ku);
          if (Eu && Qu >= Eu.to) {
            if (Eu.from == Ku && Eu.to == Qu && Eu.insert.eq(Nu)) return Eu = this.pendingContextChange = null, Ru += Xu, void(this.to += Xu);
            Eu = null, this.revertPending(uu.state)
          }
          if (Ku += Ru, (Qu += Ru) <= this.from) this.from += Xu, this.to += Xu;
          else if (Ku < this.to) {
            if (Ku < this.from || Qu > this.to || this.to - this.from + Nu.length > 3e4) return void(yu = !0);
            this.editContext.updateText(this.toContextPos(Ku), this.toContextPos(Qu), Nu.toString()), this.to += Xu
          }
          Ru += Xu
        })), Eu && !yu && this.revertPending(uu.state), !yu
      }
      update(uu) {
        let Ru = this.pendingContextChange,
          yu = uu.startState.selection.main;
        this.composing && (this.composing.drifted || !uu.changes.touchesRange(yu.from, yu.to) && uu.transactions.some((uu => !uu.isUserEvent("input.type") && uu.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = uu.changes.mapPos(this.composing.editorBase)) : this.applyEdits(uu) && this.rangeIsValid(uu.state) ? (uu.docChanged || uu.selectionSet || Ru) && this.setSelection(uu.state) : (this.pendingContextChange = null, this.reset(uu.state)), (uu.geometryChanged || uu.docChanged || uu.selectionSet) && uu.view.requestMeasure(this.measureReq)
      }
      resetRange(uu) {
        let {
          head: Ru
        } = uu.selection.main;
        this.from = Math.max(0, Ru - 1e4), this.to = Math.min(uu.doc.length, Ru + 1e4)
      }
      reset(uu) {
        this.resetRange(uu), this.editContext.updateText(0, this.editContext.text.length, uu.doc.sliceString(this.from, this.to)), this.setSelection(uu)
      }
      revertPending(uu) {
        let Ru = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(Ru.from), this.toContextPos(Ru.from + Ru.insert.length), uu.doc.sliceString(Ru.from, Ru.to))
      }
      setSelection(uu) {
        let {
          main: Ru
        } = uu.selection, yu = this.toContextPos(Math.max(this.from, Math.min(this.to, Ru.anchor))), Eu = this.toContextPos(Ru.head);
        this.editContext.selectionStart == yu && this.editContext.selectionEnd == Eu || this.editContext.updateSelection(yu, Eu)
      }
      rangeIsValid(uu) {
        let {
          head: Ru
        } = uu.selection.main;
        return !(this.from > 0 && Ru - this.from < 500 || this.to < uu.doc.length && this.to - Ru < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        uu = Math.min(uu, Ru);
        let yu = this.composing;
        return yu && yu.drifted ? yu.editorBase + (uu - yu.contextBase) : uu + this.from
      }
      toContextPos(uu) {
        let Ru = this.composing;
        return Ru && Ru.drifted ? Ru.contextBase + (uu - Ru.editorBase) : uu - this.from
      }
      destroy() {
        for (let uu in this.handlers) this.editContext.removeEventListener(uu, this.handlers[uu])
      }
    }
    class AK {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get o4() {
        return this.viewState.o4
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
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Ru;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), uu.parent && uu.parent.appendChild(this.dom);
        let {
          dispatch: yu
        } = uu;
        this.dispatchTransactions = uu.dispatchTransactions || yu && (uu => uu.forEach((uu => yu(uu, this)))) || (uu => this.update(uu)), this.dispatch = this.dispatch.bind(this), this._root = uu.root || function(uu) {
          for (; uu;) {
            if (uu && (9 == uu.nodeType || 11 == uu.nodeType && uu.host)) return uu;
            uu = uu.assignedSlot || uu.parentNode
          }
          return null
        }(uu.parent) || document, this.viewState = new EK(this, uu.state || Eu.o.create(uu)), uu.scrollTo && uu.scrollTo.is(hR) && (this.viewState.scrollTarget = uu.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(qR).map((uu => new vR(uu)));
        for (let Eu of this.plugins) Eu.update(this);
        this.observer = new bK(this), this.inputState = new NE(this), this.inputState.ensureHandlers(this.plugins), this.docView = new gy(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (Ru = document.fonts) || void 0 === Ru ? void 0 : Ru.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        let Ku = 1 == Ru.length && Ru[0] instanceof Eu.J ? Ru : 1 == Ru.length && Array.isArray(Ru[0]) ? Ru[0] : [this.state.update(...Ru)];
        this.dispatchTransactions(Ku, this)
      }
      update(uu) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let Ru, yu = !1,
          Ku = !1,
          Qu = this.state;
        for (let Eu of uu) {
          if (Eu.startState != Qu) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          Qu = Eu.state
        }
        if (this.destroyed) return void(this.viewState.state = Qu);
        let mu = this.hasFocus,
          Ju = 0,
          Nu = null;
        uu.some((uu => uu.annotation(GE))) ? (this.inputState.notifiedFocused = mu, Ju = 1) : mu != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = mu, Nu = UE(Qu, mu), Nu || (Ju = 1));
        let Xu = this.observer.delayedAndroidKey,
          Vu = null;
        if (Xu ? (this.observer.clearDelayedAndroidKey(), Vu = this.observer.readChange(), (Vu && !this.state.doc.eq(Qu.doc) || !this.state.selection.eq(Qu.selection)) && (Vu = null)) : this.observer.clear(), Qu.facet(Eu.o.phrases) != this.state.facet(Eu.o.phrases)) return this.setState(Qu);
        Ru = Vy.create(this, Qu, uu), Ru.flags |= Ju;
        let ru = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let Ru of uu) {
            if (ru && (ru = ru.map(Ru.changes)), Ru.scrollIntoView) {
              let {
                main: uu
              } = Ru.state.selection, {
                x: yu,
                y: Ku
              } = this.state.facet(AK.cursorScrollMargin);
              ru = new ZR(uu.empty ? uu : Eu.n.cursor(uu.head, uu.head > uu.anchor ? -1 : 1), "nearest", "nearest", Ku, yu)
            }
            for (let uu of Ru.effects) uu.is(hR) && (ru = uu.value.clip(this.state))
          }
          this.viewState.update(Ru, ru), this.bidiCache = IK.update(this.bidiCache, Ru.changes), Ru.empty || (this.updatePlugins(Ru), this.inputState.update(Ru)), yu = this.docView.update(Ru), this.state.facet(Ny) != this.styleModules && this.mountStyles(), Ku = this.updateAttrs(), this.showAnnouncements(uu), this.docView.updateSelection(yu, uu.some((uu => uu.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (Ru.startState.facet(rK) != Ru.state.facet(rK) && (this.viewState.mustMeasureContent = !0), (yu || Ku || ru || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), yu && this.docViewUpdate(), !Ru.empty)
          for (let Eu of this.state.facet(tR)) try {
            Eu(Ru)
          } catch (Bu) {
            iR(this.state, Bu, "update listener")
          }(Nu || Vu) && Promise.resolve().then((() => {
            Nu && this.state == Nu.startState && this.dispatch(Nu), Vu && !KE(this, Vu) && Xu.force && KR(this.contentDOM, Xu.key, Xu.keyCode)
          }))
      }
      setState(uu) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = uu);
        this.updateState = 2;
        let Ru = this.hasFocus;
        try {
          for (let uu of this.plugins) uu.destroy(this);
          this.viewState = new EK(this, uu), this.plugins = uu.facet(qR).map((uu => new vR(uu))), this.pluginMap.clear();
          for (let uu of this.plugins) uu.update(this);
          this.docView.destroy(), this.docView = new gy(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        Ru && this.focus(), this.requestMeasure()
      }
      updatePlugins(uu) {
        let Ru = uu.startState.facet(qR),
          yu = uu.state.facet(qR);
        if (Ru != yu) {
          let Eu = [];
          for (let Ku of yu) {
            let yu = Ru.indexOf(Ku);
            if (yu < 0) Eu.push(new vR(Ku));
            else {
              let Ru = this.plugins[yu];
              Ru.mustUpdate = uu, Eu.push(Ru)
            }
          }
          for (let Ru of this.plugins) Ru.mustUpdate != uu && Ru.destroy(this);
          this.plugins = Eu, this.pluginMap.clear()
        } else
          for (let Eu of this.plugins) Eu.mustUpdate = uu;
        for (let Eu = 0; Eu < this.plugins.length; Eu++) this.plugins[Eu].update(this);
        Ru != yu && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let Ru of this.plugins) {
          let yu = Ru.value;
          if (yu && yu.docViewUpdate) try {
            yu.docViewUpdate(this)
          } catch (uu) {
            iR(this.state, uu, "doc view update listener")
          }
        }
      }
      measure() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, uu && this.observer.forceFlush();
        let Ru = null,
          yu = this.viewState.scrollParent,
          Eu = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Ku,
            scrollAnchorHeight: Qu
          } = this.viewState;
        Math.abs(Eu - this.viewState.scrollOffset) > 1 && (Qu = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let uu = 0;; uu++) {
            if (Qu < 0)
              if (QR(yu || this.win)) Ku = -1, Qu = this.viewState.heightMap.height;
              else {
                let uu = this.viewState.scrollAnchorAt(Eu);
                Ku = uu.from, Qu = uu.top
              } this.updateState = 1;
            let Ju = this.viewState.measure();
            if (!Ju && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (uu > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let Nu = [];
            4 & Ju || ([this.measureRequests, Nu] = [Nu, this.measureRequests]);
            let Xu = Nu.map((uu => {
                try {
                  return uu.read(this)
                } catch (Ru) {
                  return iR(this.state, Ru), MK
                }
              })),
              Vu = Vy.create(this, this.state, []),
              ru = !1;
            Vu.flags |= Ju, Ru ? Ru.flags |= Ju : Ru = Vu, this.updateState = 2, Vu.empty || (this.updatePlugins(Vu), this.inputState.update(Vu), this.updateAttrs(), ru = this.docView.update(Vu), ru && this.docViewUpdate());
            for (let uu = 0; uu < Nu.length; uu++)
              if (Xu[uu] != MK) try {
                let Ru = Nu[uu];
                Ru.write && Ru.write(Xu[uu], this)
              } catch (mu) {
                iR(this.state, mu)
              }
            if (ru && this.docView.updateSelection(!0), !Vu.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, Qu = -1;
                  continue
                } {
                  let uu = ((Ku < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Ku).top) - Qu) / this.scaleY;
                  if ((uu > 1 || uu < -1) && (yu == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Eu += uu, yu ? yu.scrollTop += uu : this.win.scrollBy(0, uu), Qu = -1;
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
        if (Ru && !Ru.empty)
          for (let Ju of this.state.facet(tR)) Ju(Ru)
      }
      get themeClasses() {
        return xK + " " + (this.state.facet(BK) ? pK : SK) + " " + this.state.facet(rK)
      }
      updateAttrs() {
        let uu = GK(this, aR, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          Ru = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(YR) ? "true" : "false",
            class: "cm-content",
            style: `${ku.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (Ru["aria-readonly"] = "true"), GK(this, fR, Ru);
        let yu = this.observer.ignore((() => {
          let yu = Mu(this.contentDOM, this.contentAttrs, Ru),
            Eu = Mu(this.dom, this.editorAttrs, uu);
          return yu || Eu
        }));
        return this.editorAttrs = uu, this.contentAttrs = Ru, yu
      }
      showAnnouncements(uu) {
        let Ru = !0;
        for (let yu of uu)
          for (let uu of yu.effects)
            if (uu.is(AK.announce)) {
              Ru && (this.announceDOM.textContent = ""), Ru = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = uu.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Ny);
        let uu = this.state.facet(AK.cspNonce);
        Ku.b.mount(this.root, this.styleModules.concat(jK).reverse(), uu ? {
          nonce: uu
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(uu) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), uu) {
          if (this.measureRequests.indexOf(uu) > -1) return;
          if (null != uu.key)
            for (let Ru = 0; Ru < this.measureRequests.length; Ru++)
              if (this.measureRequests[Ru].key === uu.key) return void(this.measureRequests[Ru] = uu);
          this.measureRequests.push(uu)
        }
      }
      plugin(uu) {
        let Ru = this.pluginMap.get(uu);
        return (void 0 === Ru || Ru && Ru.plugin != uu) && this.pluginMap.set(uu, Ru = this.plugins.find((Ru => Ru.plugin == uu)) || null), Ru && Ru.update(this).value
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
      elementAtHeight(uu) {
        return this.readMeasured(), this.viewState.elementAtHeight(uu)
      }
      lineBlockAtHeight(uu) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(uu)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(uu) {
        return this.viewState.lineBlockAt(uu)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(uu, Ru, yu) {
        return Yy(this, uu, hy(this, uu, Ru, yu))
      }
      moveByGroup(uu, Ru) {
        return Yy(this, uu, hy(this, uu, Ru, (Ru => function(uu, Ru, yu) {
          let Ku = uu.state.charCategorizer(Ru),
            Qu = Ku(yu);
          return uu => {
            let Ru = Ku(uu);
            return Qu == Eu.l.Space && (Qu = Ru), Qu == Ru
          }
        }(this, uu.head, Ru))))
      }
      visualLineSide(uu, Ru) {
        let yu = this.bidiSpans(uu),
          Ku = this.textDirectionAt(uu.from),
          Qu = yu[Ru ? yu.length - 1 : 0];
        return Eu.n.cursor(Qu.side(Ru, Ku) + uu.from, Qu.forward(!Ru, Ku) ? 1 : -1)
      }
      moveToLineBoundary(uu, Ru) {
        return function(uu, Ru, yu, Ku) {
          let Qu = Zy(uu, Ru.head, Ru.assoc || -1),
            mu = Ku && Qu.type == Uu.Text && (uu.lineWrapping || Qu.widgetLineBreaks) ? uu.coordsAtPos(Ru.assoc < 0 && Ru.head > Qu.from ? Ru.head - 1 : Ru.head) : null;
          if (mu) {
            let Ru = uu.dom.getBoundingClientRect(),
              Ku = uu.textDirectionAt(Qu.from),
              Ju = uu.posAtCoords({
                x: yu == (Ku == XR.LTR) ? Ru.right - 1 : Ru.left + 1,
                y: (mu.top + mu.bottom) / 2
              });
            if (null != Ju) return Eu.n.cursor(Ju, yu ? -1 : 1)
          }
          return Eu.n.cursor(yu ? Qu.to : Qu.from, yu ? -1 : 1)
        }(this, uu, Ru, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(uu, Ru, yu) {
        return Yy(this, uu, function(uu, Ru, yu, Ku) {
          let Qu = Ru.head,
            mu = yu ? 1 : -1;
          if (Qu == (yu ? uu.state.doc.length : 0)) return Eu.n.cursor(Qu, Ru.assoc);
          let Ju, Nu = Ru.goalColumn,
            Xu = uu.contentDOM.getBoundingClientRect(),
            Vu = uu.coordsAtPos(Qu, Ru.assoc || ((Ru.empty ? yu : Ru.head == Ru.from) ? 1 : -1)),
            ru = uu.documentTop;
          if (Vu) null == Nu && (Nu = Vu.left - Xu.left), Ju = mu < 0 ? Vu.top : Vu.bottom;
          else {
            let Ru = uu.viewState.lineBlockAt(Qu);
            null == Nu && (Nu = Math.min(Xu.right - Xu.left, uu.defaultCharacterWidth * (Qu - Ru.from))), Ju = (mu < 0 ? Ru.top : Ru.bottom) + ru
          }
          let Bu = Xu.left + Nu,
            xu = uu.viewState.heightOracle.textHeight >> 1,
            Su = null !== Ku && void 0 !== Ku ? Ku : xu;
          for (let pu = 0;; pu += xu) {
            let Ru = Ju + (Su + pu) * mu,
              Ku = qy(uu, {
                x: Bu,
                y: Ru
              }, !1, mu);
            if (yu ? Ru > Xu.bottom : Ru < Xu.top) return Eu.n.cursor(Ku.pos, Ku.assoc);
            let Qu = uu.coordsAtPos(Ku.pos, Ku.assoc),
              Vu = Qu ? (Qu.top + Qu.bottom) / 2 : 0;
            if (!Qu || (yu ? Vu > Ju : Vu < Ju)) return Eu.n.cursor(Ku.pos, Ku.assoc, void 0, Nu)
          }
        }(this, uu, Ru, yu))
      }
      domAtPos(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(uu, Ru)
      }
      posAtDOM(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(uu, Ru)
      }
      posAtCoords(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let yu = qy(this, uu, Ru);
        return yu && yu.pos
      }
      posAndSideAtCoords(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), qy(this, uu, Ru)
      }
      coordsAtPos(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let yu = this.docView.coordsAt(uu, Ru);
        if (!yu || yu.left == yu.right) return yu;
        let Eu = this.state.doc.lineAt(uu),
          Ku = this.bidiSpans(Eu);
        return qu(yu, Ku[HR.find(Ku, uu - Eu.from, -1, Ru)].dir == XR.LTR == Ru > 0)
      }
      coordsForChar(uu) {
        return this.readMeasured(), this.docView.coordsForChar(uu)
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
      textDirectionAt(uu) {
        return !this.state.facet(zR) || uu < this.viewport.from || uu > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(uu))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(uu) {
        if (uu.length > DK) return AR(uu.length);
        let Ru, yu = this.textDirectionAt(uu.from);
        for (let Ku of this.bidiCache)
          if (Ku.from == uu.from && Ku.dir == yu && (Ku.fresh || dR(Ku.isolates, Ru = Qy(this, uu)))) return Ku.order;
        Ru || (Ru = Qy(this, uu));
        let Eu = eR(uu.text, yu, Ru);
        return this.bidiCache.push(new IK(uu.from, uu.to, yu, Ru, !0, Eu)), Eu
      }
      get hasFocus() {
        var uu;
        return (this.dom.ownerDocument.hasFocus() || ku.safari && (null === (uu = this.inputState) || void 0 === uu ? void 0 : uu.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          yR(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(uu) {
        this._root != uu && (this._root = uu, this.observer.setWindow((9 == uu.nodeType ? uu : uu.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let uu of this.plugins) uu.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var yu, Ku, Qu, mu;
        return hR.of(new ZR("number" == typeof uu ? Eu.n.cursor(uu) : uu, null !== (yu = Ru.y) && void 0 !== yu ? yu : "nearest", null !== (Ku = Ru.x) && void 0 !== Ku ? Ku : "nearest", null !== (Qu = Ru.yMargin) && void 0 !== Qu ? Qu : 5, null !== (mu = Ru.xMargin) && void 0 !== mu ? mu : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: uu,
          scrollLeft: Ru
        } = this.scrollDOM, yu = this.viewState.scrollAnchorAt(uu);
        return hR.of(new ZR(Eu.n.cursor(yu.from), "start", "start", yu.top - uu, Ru, !0))
      }
      setTabFocusMode(uu) {
        null == uu ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof uu ? this.inputState.tabFocusMode = uu ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + uu)
      }
      static domEventHandlers(uu) {
        return OR.define((() => ({})), {
          eventHandlers: uu
        })
      }
      static domEventObservers(uu) {
        return OR.define((() => ({})), {
          eventObservers: uu
        })
      }
      static theme(uu, Ru) {
        let yu = Ku.b.newName(),
          Eu = [rK.of(yu), Ny.of(WK(`.${yu}`, uu))];
        return Ru && Ru.dark && Eu.push(BK.of(!0)), Eu
      }
      static baseTheme(uu) {
        return Eu.t.lowest(Ny.of(WK("." + xK, uu, TK)))
      }
      static findFromDOM(uu) {
        var Ru;
        let yu = uu.querySelector(".cm-content"),
          Eu = yu && By.get(yu) || By.get(uu);
        return (null === (Ru = null === Eu || void 0 === Eu ? void 0 : Eu.root) || void 0 === Ru ? void 0 : Ru.view) || null
      }
    }
    AK.styleModule = Ny, AK.inputHandler = lR, AK.clipboardInputFilter = cR, AK.clipboardOutputFilter = LR, AK.scrollHandler = wR, AK.focusChangeEffect = gR, AK.perLineTextDirection = zR, AK.exceptionSink = sR, AK.updateListener = tR, AK.editable = YR, AK.mouseSelectionStyle = nR, AK.dragMovesSelection = UR, AK.clickAddsSelectionRange = GR, AK.lE = uy, AK.blockWrappers = Ry, AK.outerDecorations = yy, AK.atomicRanges = Ey, AK.bidiIsolatedRanges = Ky, AK.cursorScrollMargin = Eu.q.define({
      combine: uu => {
        let Ru = 5,
          yu = 5;
        for (let Eu of uu) "number" == typeof Eu ? Ru = yu = Eu : ({
          x: Ru,
          y: yu
        } = Eu);
        return {
          x: Ru,
          y: yu
        }
      }
    }), AK.scrollMargins = my, AK.darkTheme = BK, AK.cspNonce = Eu.q.define({
      combine: uu => uu.length ? uu[0] : ""
    }), AK.contentAttributes = fR, AK.editorAttributes = aR, AK.lineWrapping = AK.contentAttributes.of({
      class: "cm-lineWrapping"
    }), AK.announce = Eu.B.define();
    const DK = 4096,
      MK = {};
    class IK {
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        this.from = uu, this.to = Ru, this.dir = yu, this.isolates = Eu, this.fresh = Ku, this.order = Qu
      }
      static update(uu, Ru) {
        if (Ru.empty && !uu.some((uu => uu.fresh))) return uu;
        let yu = [],
          Eu = uu.length ? uu[uu.length - 1].dir : XR.LTR;
        for (let Ku = Math.max(0, uu.length - 10); Ku < uu.length; Ku++) {
          let Qu = uu[Ku];
          Qu.dir != Eu || Ru.touchesRange(Qu.from, Qu.to) || yu.push(new IK(Ru.mapPos(Qu.from, 1), Ru.mapPos(Qu.to, -1), Qu.dir, Qu.isolates, !1, Qu.order))
        }
        return yu
      }
    }

    function GK(uu, Ru, yu) {
      for (let Eu = uu.state.facet(Ru), Ku = Eu.length - 1; Ku >= 0; Ku--) {
        let Ru = Eu[Ku],
          Qu = "function" == typeof Ru ? Ru(uu) : Ru;
        Qu && eu(Qu, yu)
      }
      return yu
    }
    const UK = ku.mac ? "mac" : ku.windows ? "win" : ku.linux ? "linux" : "key";

    function nK(uu, Ru, yu) {
      return Ru.altKey && (uu = "Alt-" + uu), Ru.ctrlKey && (uu = "Ctrl-" + uu), Ru.metaKey && (uu = "Meta-" + uu), !1 !== yu && Ru.shiftKey && (uu = "Shift-" + uu), uu
    }
    const sK = Eu.t.default(AK.domEventHandlers({
        keydown: (uu, Ru) => wK(gK(Ru.state), uu, Ru, "editor")
      })),
      tK = Eu.q.define({
        enables: sK
      }),
      lK = new WeakMap;

    function gK(uu) {
      let Ru = uu.facet(tK),
        yu = lK.get(Ru);
      return yu || lK.set(Ru, yu = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UK,
          yu = Object.create(null),
          Eu = Object.create(null),
          Ku = (uu, Ru) => {
            let yu = Eu[uu];
            if (null == yu) Eu[uu] = Ru;
            else if (yu != Ru) throw new Error("Key binding " + uu + " is used both as a regular binding and as a multi-stroke prefix")
          },
          Qu = (uu, Eu, Qu, mu, Ju) => {
            var Nu, Xu;
            let Vu = yu[uu] || (yu[uu] = Object.create(null)),
              ru = Eu.split(/ (?!$)/).map((uu => function(uu, Ru) {
                const yu = uu.split(/-(?!$)/);
                let Eu, Ku, Qu, mu, Ju = yu[yu.length - 1];
                "Space" == Ju && (Ju = " ");
                for (let Nu = 0; Nu < yu.length - 1; ++Nu) {
                  const uu = yu[Nu];
                  if (/^(cmd|meta|m)$/i.test(uu)) mu = !0;
                  else if (/^a(lt)?$/i.test(uu)) Eu = !0;
                  else if (/^(c|ctrl|control)$/i.test(uu)) Ku = !0;
                  else if (/^s(hift)?$/i.test(uu)) Qu = !0;
                  else {
                    if (!/^mod$/i.test(uu)) throw new Error("Unrecognized modifier name: " + uu);
                    "mac" == Ru ? mu = !0 : Ku = !0
                  }
                }
                return Eu && (Ju = "Alt-" + Ju), Ku && (Ju = "Ctrl-" + Ju), mu && (Ju = "Meta-" + Ju), Qu && (Ju = "Shift-" + Ju), Ju
              }(uu, Ru)));
            for (let Ru = 1; Ru < ru.length; Ru++) {
              let yu = ru.slice(0, Ru).join(" ");
              Ku(yu, !0), Vu[yu] || (Vu[yu] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [Ru => {
                  let Eu = LK = {
                    view: Ru,
                    prefix: yu,
                    scope: uu
                  };
                  return setTimeout((() => {
                    LK == Eu && (LK = null)
                  }), zK), !0
                }]
              })
            }
            let Bu = ru.join(" ");
            Ku(Bu, !1);
            let xu = Vu[Bu] || (Vu[Bu] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Xu = null === (Nu = Vu._any) || void 0 === Nu ? void 0 : Nu.run) || void 0 === Xu ? void 0 : Xu.slice()) || []
            });
            Qu && xu.run.push(Qu), mu && (xu.preventDefault = !0), Ju && (xu.stopPropagation = !0)
          };
        for (let mu of uu) {
          let uu = mu.scope ? mu.scope.split(" ") : ["editor"];
          if (mu.any)
            for (let Ru of uu) {
              let uu = yu[Ru] || (yu[Ru] = Object.create(null));
              uu._any || (uu._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Eu
              } = mu;
              for (let Ru in uu) uu[Ru].run.push((uu => Eu(uu, FK)))
            }
          let Eu = mu[Ru] || mu.key;
          if (Eu)
            for (let Ru of uu) Qu(Ru, Eu, mu.run, mu.preventDefault, mu.stopPropagation), mu.shift && Qu(Ru, "Shift-" + Eu, mu.shift, mu.preventDefault, mu.stopPropagation)
        }
        return yu
      }(Ru.reduce(((uu, Ru) => uu.concat(Ru)), []))), yu
    }

    function cK(uu, Ru, yu) {
      return wK(gK(uu.state), Ru, uu, yu)
    }
    let LK = null;
    const zK = 4e3;
    let FK = null;

    function wK(uu, Ru, yu, Ku) {
      FK = Ru;
      let Xu = function(uu) {
          var Ru = !(Ju && uu.metaKey && uu.shiftKey && !uu.ctrlKey && !uu.altKey || Nu && uu.shiftKey && uu.key && 1 == uu.key.length || "Unidentified" == uu.key) && uu.key || (uu.shiftKey ? mu : Qu)[uu.keyCode] || uu.key || "Unidentified";
          return "Esc" == Ru && (Ru = "Escape"), "Del" == Ru && (Ru = "Delete"), "Left" == Ru && (Ru = "ArrowLeft"), "Up" == Ru && (Ru = "ArrowUp"), "Right" == Ru && (Ru = "ArrowRight"), "Down" == Ru && (Ru = "ArrowDown"), Ru
        }(Ru),
        Vu = (0, Eu.K)(Xu, 0),
        ru = (0, Eu.N)(Vu) == Xu.length && " " != Xu,
        Bu = "",
        xu = !1,
        Su = !1,
        pu = !1;
      LK && LK.view == yu && LK.scope == Ku && (Bu = LK.prefix + " ", xE.indexOf(Ru.keyCode) < 0 && (Su = !0, LK = null));
      let Tu, Wu, ju = new Set,
        Hu = uu => {
          if (uu) {
            for (let Ru of uu.run)
              if (!ju.has(Ru) && (ju.add(Ru), Ru(yu))) return uu.stopPropagation && (pu = !0), !0;
            uu.preventDefault && (uu.stopPropagation && (pu = !0), Su = !0)
          }
          return !1
        },
        du = uu[Ku];
      return du && (Hu(du[Bu + nK(Xu, Ru, !ru)]) ? xu = !0 : !ru || !(Ru.altKey || Ru.metaKey || Ru.ctrlKey) || ku.windows && Ru.ctrlKey && Ru.altKey || ku.mac && Ru.altKey && !Ru.ctrlKey && !Ru.metaKey || !(Tu = Qu[Ru.keyCode]) || Tu == Xu ? ru && Ru.shiftKey && Hu(du[Bu + nK(Xu, Ru, !0)]) && (xu = !0) : (Hu(du[Bu + nK(Tu, Ru, !0)]) || Ru.shiftKey && (Wu = mu[Ru.keyCode]) != Xu && Wu != Tu && Hu(du[Bu + nK(Wu, Ru, !1)])) && (xu = !0), !xu && Hu(du._any) && (xu = !0)), Su && (xu = !0), xu && pu && Ru.stopPropagation(), FK = null, xu
    }
    class ZK {
      constructor(uu, Ru, yu, Eu, Ku) {
        this.className = uu, this.left = Ru, this.top = yu, this.width = Eu, this.height = Ku
      }
      draw() {
        let uu = document.createElement("div");
        return uu.className = this.className, this.adjust(uu), uu
      }
      update(uu, Ru) {
        return Ru.className == this.className && (this.adjust(uu), !0)
      }
      adjust(uu) {
        uu.style.left = this.left + "px", uu.style.top = this.top + "px", null != this.width && (uu.style.width = this.width + "px"), uu.style.height = this.height + "px"
      }
      eq(uu) {
        return this.left == uu.left && this.top == uu.top && this.width == uu.width && this.height == uu.height && this.className == uu.className
      }
      static forRange(uu, Ru, yu) {
        if (yu.empty) {
          let Eu = uu.coordsAtPos(yu.head, yu.assoc || 1);
          if (!Eu) return [];
          let Ku = hK(uu);
          return [new ZK(Ru, Eu.left - Ku.left, Eu.top - Ku.top, null, Eu.bottom - Eu.top)]
        }
        return function(uu, Ru, yu) {
          if (yu.to <= uu.viewport.from || yu.from >= uu.viewport.to) return [];
          let Eu = Math.max(yu.from, uu.viewport.from),
            Ku = Math.min(yu.to, uu.viewport.to),
            Qu = uu.textDirection == XR.LTR,
            mu = uu.contentDOM,
            Ju = mu.getBoundingClientRect(),
            Nu = hK(uu),
            Xu = mu.querySelector(".cm-line"),
            Vu = Xu && window.getComputedStyle(Xu),
            ru = Ju.left + (Vu ? parseInt(Vu.paddingLeft) + Math.min(0, parseInt(Vu.textIndent)) : 0),
            Bu = Ju.right - (Vu ? parseInt(Vu.paddingRight) : 0),
            xu = Zy(uu, Eu, 1),
            Su = Zy(uu, Ku, -1),
            pu = xu.type == Uu.Text ? xu : null,
            Tu = Su.type == Uu.Text ? Su : null;
          pu && (uu.lineWrapping || xu.widgetLineBreaks) && (pu = PK(uu, Eu, 1, pu));
          Tu && (uu.lineWrapping || Su.widgetLineBreaks) && (Tu = PK(uu, Ku, -1, Tu));
          if (pu && Tu && pu.from == Tu.from && pu.to == Tu.to) return ju(Hu(yu.from, yu.to, pu));
          {
            let Ru = pu ? Hu(yu.from, null, pu) : du(xu, !1),
              Eu = Tu ? Hu(null, yu.to, Tu) : du(Su, !0),
              Ku = [];
            return (pu || xu).to < (Tu || Su).from - (pu && Tu ? 1 : 0) || xu.widgetLineBreaks > 1 && Ru.bottom + uu.defaultLineHeight / 2 < Eu.top ? Ku.push(Wu(ru, Ru.bottom, Bu, Eu.top)) : Ru.bottom < Eu.top && uu.elementAtHeight((Ru.bottom + Eu.top) / 2).type == Uu.Text && (Ru.bottom = Eu.top = (Ru.bottom + Eu.top) / 2), ju(Ru).concat(Ku).concat(ju(Eu))
          }

          function Wu(uu, yu, Eu, Ku) {
            return new ZK(Ru, uu - Nu.left, yu - Nu.top, Math.max(0, Eu - uu), Ku - yu)
          }

          function ju(uu) {
            let {
              top: Ru,
              bottom: yu,
              horizontal: Eu
            } = uu, Ku = [];
            for (let Qu = 0; Qu < Eu.length; Qu += 2) Ku.push(Wu(Eu[Qu], Ru, Eu[Qu + 1], yu));
            return Ku
          }

          function Hu(Ru, yu, Eu) {
            let Ku = 1e9,
              mu = -1e9,
              Ju = [];

            function Nu(Ru, yu, Nu, Xu, Vu) {
              let xu = uu.coordsAtPos(Ru, Ru == Eu.to ? -2 : 2),
                Su = uu.coordsAtPos(Nu, Nu == Eu.from ? 2 : -2);
              xu && Su && (Ku = Math.min(xu.top, Su.top, Ku), mu = Math.max(xu.bottom, Su.bottom, mu), Vu == XR.LTR ? Ju.push(Qu && yu ? ru : xu.left, Qu && Xu ? Bu : Su.right) : Ju.push(!Qu && Xu ? ru : Su.left, !Qu && yu ? Bu : xu.right))
            }
            let Xu = null !== Ru && void 0 !== Ru ? Ru : Eu.from,
              Vu = null !== yu && void 0 !== yu ? yu : Eu.to;
            for (let Qu of uu.o4)
              if (Qu.to > Xu && Qu.from < Vu)
                for (let Eu = Math.max(Qu.from, Xu), Ku = Math.min(Qu.to, Vu);;) {
                  let Qu = uu.state.doc.lineAt(Eu);
                  for (let mu of uu.bidiSpans(Qu)) {
                    let uu = mu.from + Qu.from,
                      Ju = mu.to + Qu.from;
                    if (uu >= Ku) break;
                    Ju > Eu && Nu(Math.max(uu, Eu), null == Ru && uu <= Xu, Math.min(Ju, Ku), null == yu && Ju >= Vu, mu.dir)
                  }
                  if (Eu = Qu.to + 1, Eu >= Ku) break
                }
            return 0 == Ju.length && Nu(Xu, null == Ru, Vu, null == yu, uu.textDirection), {
              top: Ku,
              bottom: mu,
              horizontal: Ju
            }
          }

          function du(uu, Ru) {
            let yu = Ju.top + (Ru ? uu.top : uu.bottom);
            return {
              top: yu,
              bottom: yu,
              horizontal: []
            }
          }
        }(uu, Ru, yu)
      }
    }

    function hK(uu) {
      let Ru = uu.scrollDOM.getBoundingClientRect();
      return {
        left: (uu.textDirection == XR.LTR ? Ru.left : Ru.right - uu.scrollDOM.clientWidth * uu.scaleX) - uu.scrollDOM.scrollLeft * uu.scaleX,
        top: Ru.top - uu.scrollDOM.scrollTop * uu.scaleY
      }
    }

    function PK(uu, Ru, yu, Eu) {
      let Ku = uu.coordsAtPos(Ru, 2 * yu);
      if (!Ku) return Eu;
      let Qu = uu.dom.getBoundingClientRect(),
        mu = (Ku.top + Ku.bottom) / 2,
        Ju = uu.posAtCoords({
          x: Qu.left + 1,
          y: mu
        }),
        Nu = uu.posAtCoords({
          x: Qu.right - 1,
          y: mu
        });
      return null == Ju || null == Nu ? Eu : {
        from: Math.max(Eu.from, Math.min(Ju, Nu)),
        to: Math.min(Eu.to, Math.max(Ju, Nu))
      }
    }
    class iK {
      constructor(uu, Ru) {
        this.view = uu, this.layer = Ru, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = uu.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), Ru.above && this.dom.classList.add("cm-layer-above"), Ru.class && this.dom.classList.add(Ru.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(uu.state), uu.requestMeasure(this.measureReq), Ru.mount && Ru.mount(this.dom, uu)
      }
      update(uu) {
        uu.startState.facet(YK) != uu.state.facet(YK) && this.setOrder(uu.state), (this.layer.update(uu, this.dom) || uu.geometryChanged) && (this.scale(), uu.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(uu) {
        !1 !== this.layer.updateOnDocViewUpdate && uu.requestMeasure(this.measureReq)
      }
      setOrder(uu) {
        let Ru = 0,
          yu = uu.facet(YK);
        for (; Ru < yu.length && yu[Ru] != this.layer;) Ru++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - Ru)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: uu,
          scaleY: Ru
        } = this.view;
        uu == this.scaleX && Ru == this.scaleY || (this.scaleX = uu, this.scaleY = Ru, this.dom.style.transform = `scale(${1/uu}, ${1/Ru})`)
      }
      draw(uu) {
        if (uu.length != this.drawn.length || uu.some(((uu, Ru) => {
            return yu = uu, Eu = this.drawn[Ru], !(yu.constructor == Eu.constructor && yu.eq(Eu));
            var yu, Eu
          }))) {
          let Ru = this.dom.firstChild,
            yu = 0;
          for (let Eu of uu) Eu.update && Ru && Eu.constructor && this.drawn[yu].constructor && Eu.update(Ru, this.drawn[yu]) ? (Ru = Ru.nextSibling, yu++) : this.dom.insertBefore(Eu.draw(), Ru);
          for (; Ru;) {
            let uu = Ru.nextSibling;
            Ru.remove(), Ru = uu
          }
          this.drawn = uu, ku.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const YK = Eu.q.define();

    function oK(uu) {
      return [OR.define((Ru => new iK(Ru, uu))), YK.of(uu)]
    }
    const qK = Eu.q.define({
      combine: uu => (0, Eu.P)(uu, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (uu, Ru) => Math.min(uu, Ru),
        drawRangeCursor: (uu, Ru) => uu || Ru
      })
    });

    function OK() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [qK.of(uu), aK, uQ, RQ, FR.of(!0)]
    }

    function vK(uu) {
      return uu.startState.facet(qK) != uu.state.facet(qK)
    }
    const aK = oK({
      above: !0,
      markers(uu) {
        let {
          state: Ru
        } = uu, yu = Ru.facet(qK), Ku = [];
        for (let Qu of Ru.selection.yT) {
          let mu = Qu == Ru.selection.main;
          if (Qu.empty || yu.drawRangeCursor && !(mu && ku.ios && yu.iosSelectionHandles)) {
            let Ru = mu ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              yu = Qu.empty ? Qu : Eu.n.cursor(Qu.head, Qu.assoc);
            for (let Eu of ZK.forRange(uu, Ru, yu)) Ku.push(Eu)
          }
        }
        return Ku
      },
      update(uu, Ru) {
        uu.transactions.some((uu => uu.selection)) && (Ru.style.animationName = "cm-blink" == Ru.style.animationName ? "cm-blink2" : "cm-blink");
        let yu = vK(uu);
        return yu && fK(uu.state, Ru), uu.docChanged || uu.selectionSet || yu
      },
      mount(uu, Ru) {
        fK(Ru.state, uu)
      },
      class: "cm-cursorLayer"
    });

    function fK(uu, Ru) {
      Ru.style.animationDuration = uu.facet(qK).cursorBlinkRate + "ms"
    }
    const uQ = oK({
        above: !1,
        markers(uu) {
          let Ru = [],
            {
              main: yu,
              yT: Ku
            } = uu.state.selection;
          for (let Eu of Ku)
            if (!Eu.empty)
              for (let yu of ZK.forRange(uu, "cm-selectionBackground", Eu)) Ru.push(yu);
          if (ku.ios && !yu.empty && uu.state.facet(qK).iosSelectionHandles) {
            for (let Ku of ZK.forRange(uu, "cm-selectionHandle cm-selectionHandle-start", Eu.n.cursor(yu.from, 1))) Ru.push(Ku);
            for (let Ku of ZK.forRange(uu, "cm-selectionHandle cm-selectionHandle-end", Eu.n.cursor(yu.to, 1))) Ru.push(Ku)
          }
          return Ru
        },
        update: (uu, Ru) => uu.docChanged || uu.selectionSet || uu.viewportChanged || vK(uu),
        class: "cm-selectionLayer"
      }),
      RQ = Eu.t.highest(AK.theme({
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
      yQ = Eu.B.define({
        map: (uu, Ru) => null == uu ? null : Ru.mapPos(uu)
      }),
      EQ = Eu.E.define({
        create: () => null,
        update: (uu, Ru) => (null != uu && (uu = Ru.changes.mapPos(uu)), Ru.effects.reduce(((uu, Ru) => Ru.is(yQ) ? Ru.value : uu), uu))
      }),
      KQ = OR.fromClass(class {
        constructor(uu) {
          this.view = uu, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(uu) {
          var Ru;
          let yu = uu.state.field(EQ);
          null == yu ? null != this.cursor && (null === (Ru = this.cursor) || void 0 === Ru || Ru.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (uu.startState.field(EQ) != yu || uu.docChanged || uu.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: uu
          } = this, Ru = uu.state.field(EQ), yu = null != Ru && uu.coordsAtPos(Ru);
          if (!yu) return null;
          let Eu = uu.scrollDOM.getBoundingClientRect();
          return {
            left: yu.left - Eu.left + uu.scrollDOM.scrollLeft * uu.scaleX,
            top: yu.top - Eu.top + uu.scrollDOM.scrollTop * uu.scaleY,
            height: yu.bottom - yu.top
          }
        }
        drawCursor(uu) {
          if (this.cursor) {
            let {
              scaleX: Ru,
              scaleY: yu
            } = this.view;
            uu ? (this.cursor.style.left = uu.left / Ru + "px", this.cursor.style.top = uu.top / yu + "px", this.cursor.style.height = uu.height / yu + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(uu) {
          this.view.state.field(EQ) != uu && this.view.dispatch({
            effects: yQ.of(uu)
          })
        }
      }, {
        eventObservers: {
          dragover(uu) {
            this.setDropPos(this.view.posAtCoords({
              x: uu.clientX,
              y: uu.clientY
            }))
          },
          dragleave(uu) {
            uu.target != this.view.contentDOM && this.view.contentDOM.contains(uu.relatedTarget) || this.setDropPos(null)
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
      return [EQ, KQ]
    }

    function mQ(uu, Ru, yu, Eu, Ku) {
      Ru.lastIndex = 0;
      for (let Qu, mu = uu.iterRange(yu, Eu), Ju = yu; !mu.next().done; Ju += mu.value.length)
        if (!mu.lineBreak)
          for (; Qu = Ru.exec(mu.value);) Ku(Ju + Qu.index, Qu)
    }
    class JQ {
      constructor(uu) {
        const {
          regexp: Ru,
          decoration: yu,
          decorate: Eu,
          boundary: Ku,
          maxLength: Qu = 1e3
        } = uu;
        if (!Ru.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = Ru, Eu) this.addMatch = (uu, Ru, yu, Ku) => Eu(Ku, yu, yu + uu[0].length, uu, Ru);
        else if ("function" == typeof yu) this.addMatch = (uu, Ru, Eu, Ku) => {
          let Qu = yu(uu, Ru, Eu);
          Qu && Ku(Eu, Eu + uu[0].length, Qu)
        };
        else {
          if (!yu) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (uu, Ru, Eu, Ku) => Ku(Eu, Eu + uu[0].length, yu)
        }
        this.boundary = Ku, this.maxLength = Qu
      }
      createDeco(uu) {
        let Ru = new Eu.w,
          yu = Ru.add.bind(Ru);
        for (let {
            from: Eu,
            to: Ku
          }
          of
          function(uu, Ru) {
            let yu = uu.o4;
            if (1 == yu.length && yu[0].from == uu.viewport.from && yu[0].to == uu.viewport.to) return yu;
            let Eu = [];
            for (let {
                from: Ku,
                to: Qu
              }
              of yu) Ku = Math.max(uu.state.doc.lineAt(Ku).from, Ku - Ru), Qu = Math.min(uu.state.doc.lineAt(Qu).to, Qu + Ru), Eu.length && Eu[Eu.length - 1].to >= Ku ? Eu[Eu.length - 1].to = Qu : Eu.push({
              from: Ku,
              to: Qu
            });
            return Eu
          }(uu, this.maxLength)) mQ(uu.state.doc, this.regexp, Eu, Ku, ((Ru, Eu) => this.addMatch(Eu, uu, Ru, yu)));
        return Ru.finish()
      }
      updateDeco(uu, Ru) {
        let yu = 1e9,
          Eu = -1;
        return uu.docChanged && uu.changes.iterChanges(((Ru, Ku, Qu, mu) => {
          mu >= uu.view.viewport.from && Qu <= uu.view.viewport.to && (yu = Math.min(Qu, yu), Eu = Math.max(mu, Eu))
        })), uu.viewportMoved || Eu - yu > 1e3 ? this.createDeco(uu.view) : Eu > -1 ? this.updateRange(uu.view, Ru.map(uu.changes), yu, Eu) : Ru
      }
      updateRange(uu, Ru, yu, Eu) {
        for (let Ku of uu.o4) {
          let Qu = Math.max(Ku.from, yu),
            mu = Math.min(Ku.to, Eu);
          if (mu >= Qu) {
            let yu = uu.state.doc.lineAt(Qu),
              Eu = yu.to < mu ? uu.state.doc.lineAt(mu) : yu,
              Ju = Math.max(Ku.from, yu.from),
              Nu = Math.min(Ku.to, Eu.to);
            if (this.boundary) {
              for (; Qu > yu.from; Qu--)
                if (this.boundary.test(yu.text[Qu - 1 - yu.from])) {
                  Ju = Qu;
                  break
                } for (; mu < Eu.to; mu++)
                if (this.boundary.test(Eu.text[mu - Eu.from])) {
                  Nu = mu;
                  break
                }
            }
            let Xu, Vu = [],
              ru = (uu, Ru, yu) => Vu.push(yu.range(uu, Ru));
            if (yu == Eu)
              for (this.regexp.lastIndex = Ju - yu.from;
                (Xu = this.regexp.exec(yu.text)) && Xu.index < Nu - yu.from;) this.addMatch(Xu, uu, Xu.index + yu.from, ru);
            else mQ(uu.state.doc, this.regexp, Ju, Nu, ((Ru, yu) => this.addMatch(yu, uu, Ru, ru)));
            Ru = Ru.update({
              filterFrom: Ju,
              filterTo: Nu,
              filter: (uu, Ru) => uu < Ju || Ru > Nu,
              add: Vu
            })
          }
        }
        return Ru
      }
    }
    const NQ = null != /x/.unicode ? "gu" : "g",
      XQ = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", NQ),
      VQ = {
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
    let rQ = null;
    const BQ = Eu.q.define({
      combine(uu) {
        let Ru = (0, Eu.P)(uu, {
          render: null,
          specialChars: XQ,
          addSpecialChars: null
        });
        return (Ru.replaceTabs = ! function() {
          var uu;
          if (null == rQ && "undefined" != typeof document && document.body) {
            let Ru = document.body.style;
            rQ = null != (null !== (uu = Ru.tabSize) && void 0 !== uu ? uu : Ru.MozTabSize)
          }
          return rQ || !1
        }()) && (Ru.specialChars = new RegExp("\t|" + Ru.specialChars.source, NQ)), Ru.addSpecialChars && (Ru.specialChars = new RegExp(Ru.specialChars.source + "|" + Ru.addSpecialChars.source, NQ)), Ru
      }
    });

    function xQ() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [BQ.of(uu), SQ || (SQ = OR.fromClass(class {
        constructor(uu) {
          this.view = uu, this.lE = nu.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(uu.state.facet(BQ)), this.lE = this.decorator.createDeco(uu)
        }
        makeDecorator(uu) {
          return new JQ({
            regexp: uu.specialChars,
            decoration: (Ru, yu, Ku) => {
              let {
                doc: Qu
              } = yu.state, mu = (0, Eu.K)(Ru[0], 0);
              if (9 == mu) {
                let uu = Qu.lineAt(Ku),
                  Ru = yu.state.tabSize,
                  mu = (0, Eu.R)(uu.text, Ru, Ku - uu.from);
                return nu.replace({
                  widget: new TQ((Ru - mu % Ru) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[mu] || (this.decorationCache[mu] = nu.replace({
                widget: new pQ(uu, mu)
              }))
            },
            boundary: uu.replaceTabs ? void 0 : /[^]/
          })
        }
        update(uu) {
          let Ru = uu.state.facet(BQ);
          uu.startState.facet(BQ) != Ru ? (this.decorator = this.makeDecorator(Ru), this.lE = this.decorator.createDeco(uu.view)) : this.lE = this.decorator.updateDeco(uu, this.lE)
        }
      }, {
        lE: uu => uu.lE
      }))]
    }
    let SQ = null;
    class pQ extends Gu {
      constructor(uu, Ru) {
        super(), this.options = uu, this.code = Ru
      }
      eq(uu) {
        return uu.code == this.code
      }
      toDOM(uu) {
        let Ru = function(uu) {
            return uu >= 32 ? "\u2022" : 10 == uu ? "\u2424" : String.fromCharCode(9216 + uu)
          }(this.code),
          yu = uu.state.phrase("Control character") + " " + (VQ[this.code] || "0x" + this.code.toString(16)),
          Eu = this.options.render && this.options.render(this.code, yu, Ru);
        if (Eu) return Eu;
        let Ku = document.createElement("span");
        return Ku.textContent = Ru, Ku.title = yu, Ku.setAttribute("aria-label", yu), Ku.className = "cm-specialChar", Ku
      }
      ignoreEvent() {
        return !1
      }
    }
    class TQ extends Gu {
      constructor(uu) {
        super(), this.width = uu
      }
      eq(uu) {
        return uu.width == this.width
      }
      toDOM() {
        let uu = document.createElement("span");
        return uu.textContent = "\t", uu.className = "cm-tab", uu.style.width = this.width + "px", uu
      }
      ignoreEvent() {
        return !1
      }
    }

    function WQ() {
      return HQ
    }
    const jQ = nu.line({
        class: "cm-activeLine"
      }),
      HQ = OR.fromClass(class {
        constructor(uu) {
          this.lE = this.getDeco(uu)
        }
        update(uu) {
          (uu.docChanged || uu.selectionSet) && (this.lE = this.getDeco(uu.view))
        }
        getDeco(uu) {
          let Ru = -1,
            yu = [];
          for (let Eu of uu.state.selection.yT) {
            let Ku = uu.lineBlockAt(Eu.head);
            Ku.from > Ru && (yu.push(jQ.range(Ku.from)), Ru = Ku.from)
          }
          return nu.set(yu)
        }
      }, {
        lE: uu => uu.lE
      });
    class dQ extends Gu {
      constructor(uu) {
        super(), this.content = uu
      }
      toDOM(uu) {
        let Ru = document.createElement("span");
        return Ru.className = "cm-placeholder", Ru.style.pointerEvents = "none", Ru.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(uu) : this.content.cloneNode(!0)), Ru.setAttribute("aria-hidden", "true"), Ru
      }
      coordsAt(uu) {
        let Ru = uu.firstChild ? Zu(uu.firstChild) : [];
        if (!Ru.length) return null;
        let yu = window.getComputedStyle(uu.parentNode),
          Eu = qu(Ru[0], "rtl" != yu.direction),
          Ku = parseInt(yu.lineHeight);
        return Eu.bottom - Eu.top > 1.5 * Ku ? {
          left: Eu.left,
          right: Eu.right,
          top: Eu.top,
          bottom: Eu.top + Ku
        } : Eu
      }
      ignoreEvent() {
        return !1
      }
    }

    function bQ(uu) {
      let Ru = OR.fromClass(class {
        constructor(Ru) {
          this.view = Ru, this.placeholder = uu ? nu.set([nu.widget({
            widget: new dQ(uu),
            side: 1
          }).range(0)]) : nu.none
        }
        get lE() {
          return this.view.state.doc.length ? nu.none : this.placeholder
        }
      }, {
        lE: uu => uu.lE
      });
      return "string" == typeof uu ? [Ru, AK.contentAttributes.of({
        "aria-placeholder": uu
      })] : Ru
    }
    const CQ = 2e3;

    function kQ(uu, Ru) {
      let yu = uu.posAtCoords({
          x: Ru.clientX,
          y: Ru.clientY
        }, !1),
        Ku = uu.state.doc.lineAt(yu),
        Qu = yu - Ku.from,
        mu = Qu > CQ ? -1 : Qu == Ku.length ? function(uu, Ru) {
          let yu = uu.coordsAtPos(uu.viewport.from);
          return yu ? Math.round(Math.abs((yu.left - Ru) / uu.defaultCharacterWidth)) : -1
        }(uu, Ru.clientX) : (0, Eu.R)(Ku.text, uu.state.tabSize, yu - Ku.from);
      return {
        line: Ku.number,
        col: mu,
        off: Qu
      }
    }

    function eQ(uu, Ru) {
      let yu = kQ(uu, Ru),
        Ku = uu.state.selection;
      return yu ? {
        update(uu) {
          if (uu.docChanged) {
            let Ru = uu.changes.mapPos(uu.startState.doc.line(yu.line).from),
              Eu = uu.state.doc.lineAt(Ru);
            yu = {
              line: Eu.number,
              col: yu.col,
              off: Math.min(yu.off, Eu.length)
            }, Ku = Ku.map(uu.changes)
          }
        },
        get(Ru, Qu, mu) {
          let Ju = kQ(uu, Ru);
          if (!Ju) return Ku;
          let Nu = function(uu, Ru, yu) {
            let Ku = Math.min(Ru.line, yu.line),
              Qu = Math.max(Ru.line, yu.line),
              mu = [];
            if (Ru.off > CQ || yu.off > CQ || Ru.col < 0 || yu.col < 0) {
              let Ju = Math.min(Ru.off, yu.off),
                Nu = Math.max(Ru.off, yu.off);
              for (let Ru = Ku; Ru <= Qu; Ru++) {
                let yu = uu.doc.line(Ru);
                yu.length <= Nu && mu.push(Eu.n.range(yu.from + Ju, yu.to + Nu))
              }
            } else {
              let Ju = Math.min(Ru.col, yu.col),
                Nu = Math.max(Ru.col, yu.col);
              for (let Ru = Ku; Ru <= Qu; Ru++) {
                let yu = uu.doc.line(Ru),
                  Ku = (0, Eu.V)(yu.text, Ju, uu.tabSize, !0);
                if (Ku < 0) mu.push(Eu.n.cursor(yu.to));
                else {
                  let Ru = (0, Eu.V)(yu.text, Nu, uu.tabSize);
                  mu.push(Eu.n.range(yu.from + Ku, yu.from + Ru))
                }
              }
            }
            return mu
          }(uu.state, yu, Ju);
          return Nu.length ? mu ? Eu.n.create(Nu.concat(Ku.yT)) : Eu.n.create(Nu) : Ku
        }
      } : null
    }

    function AQ(uu) {
      let Ru = (null === uu || void 0 === uu ? void 0 : uu.eventFilter) || (uu => uu.altKey && 0 == uu.button);
      return AK.mouseSelectionStyle.of(((uu, yu) => Ru(yu) ? eQ(uu, yu) : null))
    }
    const DQ = {
        Alt: [18, uu => !!uu.altKey],
        Control: [17, uu => !!uu.ctrlKey],
        Shift: [16, uu => !!uu.shiftKey],
        Meta: [91, uu => !!uu.metaKey]
      },
      MQ = {
        style: "cursor: crosshair"
      };

    function IQ() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [Ru, yu] = DQ[uu.key || "Alt"],
        Eu = OR.fromClass(class {
          constructor(uu) {
            this.view = uu, this.isDown = !1
          }
          set(uu) {
            this.isDown != uu && (this.isDown = uu, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(uu) {
              this.set(uu.keyCode == Ru || yu(uu))
            },
            keyup(uu) {
              uu.keyCode != Ru && yu(uu) || this.set(!1)
            },
            mousemove(uu) {
              this.set(yu(uu))
            }
          }
        });
      return [Eu, AK.contentAttributes.of((uu => {
        var Ru;
        return (null === (Ru = uu.plugin(Eu)) || void 0 === Ru ? void 0 : Ru.isDown) ? MQ : null
      }))]
    }
    const GQ = "-10000px";
    class UQ {
      constructor(uu, Ru, yu, Eu) {
        this.facet = Ru, this.createTooltipView = yu, this.removeTooltipView = Eu, this.input = uu.state.facet(Ru), this.tooltips = this.input.filter((uu => uu));
        let Ku = null;
        this.tooltipViews = this.tooltips.map((uu => Ku = yu(uu, Ku)))
      }
      update(uu, Ru) {
        var yu;
        let Eu = uu.state.facet(this.facet),
          Ku = Eu.filter((uu => uu));
        if (Eu === this.input) {
          for (let Ru of this.tooltipViews) Ru.update && Ru.update(uu);
          return !1
        }
        let Qu = [],
          mu = Ru ? [] : null;
        for (let Ju = 0; Ju < Ku.length; Ju++) {
          let yu = Ku[Ju],
            Eu = -1;
          if (yu) {
            for (let uu = 0; uu < this.tooltips.length; uu++) {
              let Ru = this.tooltips[uu];
              Ru && Ru.create == yu.create && (Eu = uu)
            }
            if (Eu < 0) Qu[Ju] = this.createTooltipView(yu, Ju ? Qu[Ju - 1] : null), mu && (mu[Ju] = !!yu.above);
            else {
              let yu = Qu[Ju] = this.tooltipViews[Eu];
              mu && (mu[Ju] = Ru[Eu]), yu.update && yu.update(uu)
            }
          }
        }
        for (let Ju of this.tooltipViews) Qu.indexOf(Ju) < 0 && (this.removeTooltipView(Ju), null === (yu = Ju.destroy) || void 0 === yu || yu.call(Ju));
        return Ru && (mu.forEach(((uu, yu) => Ru[yu] = uu)), Ru.length = mu.length), this.input = Eu, this.tooltips = Ku, this.tooltipViews = Qu, !0
      }
    }

    function nQ(uu) {
      let Ru = uu.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: Ru.clientHeight,
        right: Ru.clientWidth
      }
    }
    const sQ = Eu.q.define({
        combine: uu => {
          var Ru, yu, Eu;
          return {
            position: ku.ios ? "absolute" : (null === (Ru = uu.find((uu => uu.position))) || void 0 === Ru ? void 0 : Ru.position) || "fixed",
            parent: (null === (yu = uu.find((uu => uu.parent))) || void 0 === yu ? void 0 : yu.parent) || null,
            tooltipSpace: (null === (Eu = uu.find((uu => uu.tooltipSpace))) || void 0 === Eu ? void 0 : Eu.tooltipSpace) || nQ
          }
        }
      }),
      tQ = new WeakMap,
      lQ = OR.fromClass(class {
        constructor(uu) {
          this.view = uu, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let Ru = uu.state.facet(sQ);
          this.position = Ru.position, this.parent = Ru.parent, this.classes = uu.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new UQ(uu, zQ, ((uu, Ru) => this.createTooltip(uu, Ru)), (uu => {
            this.resizeObserver && this.resizeObserver.unobserve(uu.dom), uu.dom.remove()
          })), this.above = this.manager.tooltips.map((uu => !!uu.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((uu => {
            Date.now() > this.lastTransaction - 50 && uu.length > 0 && uu[uu.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), uu.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let uu of this.manager.tooltipViews) this.intersectionObserver.observe(uu.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(uu) {
          uu.transactions.length && (this.lastTransaction = Date.now());
          let Ru = this.manager.update(uu, this.above);
          Ru && this.observeIntersection();
          let yu = Ru || uu.geometryChanged,
            Eu = uu.state.facet(sQ);
          if (Eu.position != this.position && !this.madeAbsolute) {
            this.position = Eu.position;
            for (let uu of this.manager.tooltipViews) uu.dom.style.position = this.position;
            yu = !0
          }
          if (Eu.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Eu.parent, this.createContainer();
            for (let uu of this.manager.tooltipViews) this.container.appendChild(uu.dom);
            yu = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          yu && this.maybeMeasure()
        }
        createTooltip(uu, Ru) {
          let yu = uu.create(this.view),
            Eu = Ru ? Ru.dom : null;
          if (yu.dom.classList.add("cm-tooltip"), uu.arrow && !yu.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let uu = document.createElement("div");
            uu.className = "cm-tooltip-arrow", yu.dom.appendChild(uu)
          }
          return yu.dom.style.position = this.position, yu.dom.style.top = GQ, yu.dom.style.left = "0px", this.container.insertBefore(yu.dom, Eu), yu.mount && yu.mount(this.view), this.resizeObserver && this.resizeObserver.observe(yu.dom), yu
        }
        destroy() {
          var uu, Ru, yu;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Eu of this.manager.tooltipViews) Eu.dom.remove(), null === (uu = Eu.destroy) || void 0 === uu || uu.call(Eu);
          this.parent && this.container.remove(), null === (Ru = this.resizeObserver) || void 0 === Ru || Ru.disconnect(), null === (yu = this.intersectionObserver) || void 0 === yu || yu.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let uu = 1,
            Ru = 1,
            yu = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: uu
            } = this.manager.tooltipViews[0];
            if (ku.safari) {
              let Ru = uu.getBoundingClientRect();
              yu = Math.abs(Ru.top + 1e4) > 1 || Math.abs(Ru.left) > 1
            } else yu = !!uu.offsetParent && uu.offsetParent != this.container.ownerDocument.body
          }
          if (yu || "absolute" == this.position)
            if (this.parent) {
              let yu = this.parent.getBoundingClientRect();
              yu.width && yu.height && (uu = yu.width / this.parent.offsetWidth, Ru = yu.height / this.parent.offsetHeight)
            } else({
              scaleX: uu,
              scaleY: Ru
            } = this.view.viewState);
          let Eu = this.view.scrollDOM.getBoundingClientRect(),
            Ku = Jy(this.view);
          return {
            visible: {
              left: Eu.left + Ku.left,
              top: Eu.top + Ku.top,
              right: Eu.right - Ku.right,
              bottom: Eu.bottom - Ku.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((uu, Ru) => {
              let yu = this.manager.tooltipViews[Ru];
              return yu.getCoords ? yu.getCoords(uu.pos) : this.view.coordsAtPos(uu.pos)
            })),
            size: this.manager.tooltipViews.map((uu => {
              let {
                dom: Ru
              } = uu;
              return Ru.getBoundingClientRect()
            })),
            space: this.view.state.facet(sQ).tooltipSpace(this.view),
            scaleX: uu,
            scaleY: Ru,
            makeAbsolute: yu
          }
        }
        writeMeasure(uu) {
          var Ru;
          if (uu.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let uu of this.manager.tooltipViews) uu.dom.style.position = "absolute"
          }
          let {
            visible: yu,
            space: Eu,
            scaleX: Ku,
            scaleY: Qu
          } = uu, mu = [];
          for (let Ju = 0; Ju < this.manager.tooltips.length; Ju++) {
            let Nu = this.manager.tooltips[Ju],
              Xu = this.manager.tooltipViews[Ju],
              {
                dom: Vu
              } = Xu,
              ru = uu.pos[Ju],
              Bu = uu.size[Ju];
            if (!ru || !1 !== Nu.clip && (ru.bottom <= Math.max(yu.top, Eu.top) || ru.top >= Math.min(yu.bottom, Eu.bottom) || ru.right < Math.max(yu.left, Eu.left) - .1 || ru.left > Math.min(yu.right, Eu.right) + .1)) {
              Vu.style.top = GQ;
              continue
            }
            let xu = Nu.arrow ? Xu.dom.querySelector(".cm-tooltip-arrow") : null,
              Su = xu ? 7 : 0,
              pu = Bu.right - Bu.left,
              Tu = null !== (Ru = tQ.get(Xu)) && void 0 !== Ru ? Ru : Bu.bottom - Bu.top,
              Wu = Xu.offset || LQ,
              ju = this.view.textDirection == XR.LTR,
              Hu = Bu.width > Eu.right - Eu.left ? ju ? Eu.left : Eu.right - Bu.width : ju ? Math.max(Eu.left, Math.min(ru.left - (xu ? 14 : 0) + Wu.x, Eu.right - pu)) : Math.min(Math.max(Eu.left, ru.left - pu + (xu ? 14 : 0) - Wu.x), Eu.right - pu),
              du = this.above[Ju];
            !Nu.strictSide && (du ? ru.top - Tu - Su - Wu.y < Eu.top : ru.bottom + Tu + Su + Wu.y > Eu.bottom) && du == Eu.bottom - ru.bottom > ru.top - Eu.top && (du = this.above[Ju] = !du);
            let bu = (du ? ru.top - Eu.top : Eu.bottom - ru.bottom) - Su;
            if (bu < Tu && !1 !== Xu.resize) {
              if (bu < this.view.defaultLineHeight) {
                Vu.style.top = GQ;
                continue
              }
              tQ.set(Xu, Tu), Vu.style.height = (Tu = bu) / Qu + "px"
            } else Vu.style.height && (Vu.style.height = "");
            let Cu = du ? ru.top - Tu - Su - Wu.y : ru.bottom + Su + Wu.y,
              ku = Hu + pu;
            if (!0 !== Xu.overlap)
              for (let uu of mu) uu.left < ku && uu.right > Hu && uu.top < Cu + Tu && uu.bottom > Cu && (Cu = du ? uu.top - Tu - 2 - Su : uu.bottom + Su + 2);
            if ("absolute" == this.position ? (Vu.style.top = (Cu - uu.parent.top) / Qu + "px", gQ(Vu, (Hu - uu.parent.left) / Ku)) : (Vu.style.top = Cu / Qu + "px", gQ(Vu, Hu / Ku)), xu) {
              let uu = ru.left + (ju ? Wu.x : -Wu.x) - (Hu + 14 - 7);
              xu.style.left = uu / Ku + "px"
            }!0 !== Xu.overlap && mu.push({
              left: Hu,
              top: Cu,
              right: ku,
              bottom: Cu + Tu
            }), Vu.classList.toggle("cm-tooltip-above", du), Vu.classList.toggle("cm-tooltip-below", !du), Xu.positioned && Xu.positioned(uu.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let uu of this.manager.tooltipViews) uu.dom.style.top = GQ
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function gQ(uu, Ru) {
      let yu = parseInt(uu.style.left, 10);
      (isNaN(yu) || Math.abs(Ru - yu) > 1) && (uu.style.left = Ru + "px")
    }
    const cQ = AK.baseTheme({
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
      LQ = {
        x: 0,
        y: 0
      },
      zQ = Eu.q.define({
        enables: [lQ, cQ]
      }),
      FQ = Eu.q.define({
        combine: uu => uu.reduce(((uu, Ru) => uu.concat(Ru)), [])
      });
    class wQ {
      static create(uu) {
        return new wQ(uu)
      }
      constructor(uu) {
        this.view = uu, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new UQ(uu, FQ, ((uu, Ru) => this.createHostedView(uu, Ru)), (uu => uu.dom.remove()))
      }
      createHostedView(uu, Ru) {
        let yu = uu.create(this.view);
        return yu.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(yu.dom, Ru ? Ru.dom.nextSibling : this.dom.firstChild), this.mounted && yu.mount && yu.mount(this.view), yu
      }
      mount(uu) {
        for (let Ru of this.manager.tooltipViews) Ru.mount && Ru.mount(uu);
        this.mounted = !0
      }
      positioned(uu) {
        for (let Ru of this.manager.tooltipViews) Ru.positioned && Ru.positioned(uu)
      }
      update(uu) {
        this.manager.update(uu)
      }
      destroy() {
        var uu;
        for (let Ru of this.manager.tooltipViews) null === (uu = Ru.destroy) || void 0 === uu || uu.call(Ru)
      }
      passProp(uu) {
        let Ru;
        for (let yu of this.manager.tooltipViews) {
          let Eu = yu[uu];
          if (void 0 !== Eu)
            if (void 0 === Ru) Ru = Eu;
            else if (Ru !== Eu) return
        }
        return Ru
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
    const ZQ = zQ.compute([FQ], (uu => {
      let Ru = uu.facet(FQ);
      return 0 === Ru.length ? null : {
        pos: Math.min(...Ru.map((uu => uu.pos))),
        end: Math.max(...Ru.map((uu => {
          var Ru;
          return null !== (Ru = uu.end) && void 0 !== Ru ? Ru : uu.pos
        }))),
        create: wQ.create,
        above: Ru[0].above,
        arrow: Ru.some((uu => uu.arrow))
      }
    }));
    class hQ {
      constructor(uu, Ru, yu, Eu, Ku) {
        this.view = uu, this.source = Ru, this.field = yu, this.setHover = Eu, this.hoverTime = Ku, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: uu.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), uu.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), uu.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let uu = Date.now() - this.lastMove.time;
        uu < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - uu) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: uu,
          lastMove: Ru
        } = this, yu = uu.docView.tile.nearest(Ru.target);
        if (!yu) return;
        let Eu, Ku = 1;
        if (yu.isWidget()) Eu = yu.posAtStart;
        else {
          if (Eu = uu.posAtCoords(Ru), null == Eu) return;
          let yu = uu.coordsAtPos(Eu);
          if (!yu || Ru.y < yu.top || Ru.y > yu.bottom || Ru.x < yu.left - uu.defaultCharacterWidth || Ru.x > yu.right + uu.defaultCharacterWidth) return;
          let Qu = uu.bidiSpans(uu.state.doc.lineAt(Eu)).find((uu => uu.from <= Eu && uu.to >= Eu)),
            mu = Qu && Qu.dir == XR.RTL ? -1 : 1;
          Ku = Ru.x < yu.left ? -mu : mu
        }
        let Qu = this.source(uu, Eu, Ku);
        if (null === Qu || void 0 === Qu ? void 0 : Qu.then) {
          let Ru = this.pending = {
            pos: Eu
          };
          Qu.then((yu => {
            this.pending == Ru && (this.pending = null, !yu || Array.isArray(yu) && !yu.length || uu.dispatch({
              effects: this.setHover.of(Array.isArray(yu) ? yu : [yu])
            }))
          }), (Ru => iR(uu.state, Ru, "hover tooltip")))
        } else !Qu || Array.isArray(Qu) && !Qu.length || uu.dispatch({
          effects: this.setHover.of(Array.isArray(Qu) ? Qu : [Qu])
        })
      }
      get tooltip() {
        let uu = this.view.plugin(lQ),
          Ru = uu ? uu.manager.tooltips.findIndex((uu => uu.create == wQ.create)) : -1;
        return Ru > -1 ? uu.manager.tooltipViews[Ru] : null
      }
      mousemove(uu) {
        var Ru, yu;
        this.lastMove = {
          x: uu.clientX,
          y: uu.clientY,
          target: uu.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Eu,
          tooltip: Ku
        } = this;
        if (Eu.length && Ku && ! function(uu, Ru) {
            let yu, {
              left: Eu,
              right: Ku,
              top: Qu,
              bottom: mu
            } = uu.getBoundingClientRect();
            if (yu = uu.querySelector(".cm-tooltip-arrow")) {
              let uu = yu.getBoundingClientRect();
              Qu = Math.min(uu.top, Qu), mu = Math.max(uu.bottom, mu)
            }
            return Ru.clientX >= Eu - PQ && Ru.clientX <= Ku + PQ && Ru.clientY >= Qu - PQ && Ru.clientY <= mu + PQ
          }(Ku.dom, uu) || this.pending) {
          let {
            pos: Ku
          } = Eu[0] || this.pending, Qu = null !== (yu = null === (Ru = Eu[0]) || void 0 === Ru ? void 0 : Ru.end) && void 0 !== yu ? yu : Ku;
          (Ku == Qu ? this.view.posAtCoords(this.lastMove) == Ku : function(uu, Ru, yu, Eu, Ku) {
            let Qu = uu.scrollDOM.getBoundingClientRect(),
              mu = uu.documentTop + uu.documentPadding.top + uu.contentHeight;
            if (Qu.left > Eu || Qu.right < Eu || Qu.top > Ku || Math.min(Qu.bottom, mu) < Ku) return !1;
            let Ju = uu.posAtCoords({
              x: Eu,
              y: Ku
            }, !1);
            return Ju >= Ru && Ju <= yu
          }(this.view, Ku, Qu, uu.clientX, uu.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(uu) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: Ru
        } = this;
        if (Ru.length) {
          let {
            tooltip: Ru
          } = this;
          Ru && Ru.dom.contains(uu.relatedTarget) ? this.watchTooltipLeave(Ru.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(uu) {
        let Ru = yu => {
          uu.removeEventListener("mouseleave", Ru), this.active.length && !this.view.dom.contains(yu.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        uu.addEventListener("mouseleave", Ru)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const PQ = 4;

    function iQ(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        yu = Eu.B.define(),
        Ku = Eu.E.define({
          create: () => [],
          update(uu, Ku) {
            if (uu.length && (Ru.hideOnChange && (Ku.docChanged || Ku.selection) ? uu = [] : Ru.hideOn && (uu = uu.filter((uu => !Ru.hideOn(Ku, uu)))), Ku.docChanged)) {
              let Ru = [];
              for (let yu of uu) {
                let uu = Ku.changes.mapPos(yu.pos, -1, Eu.s.TrackDel);
                if (null != uu) {
                  let Eu = Object.assign(Object.create(null), yu);
                  Eu.pos = uu, null != Eu.end && (Eu.end = Ku.changes.mapPos(Eu.end)), Ru.push(Eu)
                }
              }
              uu = Ru
            }
            for (let Ru of Ku.effects) Ru.is(yu) && (uu = Ru.value), Ru.is(oQ) && (uu = []);
            return uu
          },
          provide: uu => FQ.from(uu)
        });
      return {
        active: Ku,
        extension: [Ku, OR.define((Eu => new hQ(Eu, uu, Ku, yu, Ru.hoverTime || 300))), ZQ]
      }
    }

    function YQ(uu, Ru) {
      let yu = uu.plugin(lQ);
      if (!yu) return null;
      let Eu = yu.manager.tooltips.indexOf(Ru);
      return Eu < 0 ? null : yu.manager.tooltipViews[Eu]
    }
    const oQ = Eu.B.define();
    const qQ = Eu.q.define({
      combine(uu) {
        let Ru, yu;
        for (let Eu of uu) Ru = Ru || Eu.topContainer, yu = yu || Eu.bottomContainer;
        return {
          topContainer: Ru,
          bottomContainer: yu
        }
      }
    });

    function OQ(uu, Ru) {
      let yu = uu.plugin(vQ),
        Eu = yu ? yu.specs.indexOf(Ru) : -1;
      return Eu > -1 ? yu.panels[Eu] : null
    }
    const vQ = OR.fromClass(class {
      constructor(uu) {
        this.input = uu.state.facet(um), this.specs = this.input.filter((uu => uu)), this.panels = this.specs.map((Ru => Ru(uu)));
        let Ru = uu.state.facet(qQ);
        this.top = new aQ(uu, !0, Ru.topContainer), this.bottom = new aQ(uu, !1, Ru.bottomContainer), this.top.sync(this.panels.filter((uu => uu.top))), this.bottom.sync(this.panels.filter((uu => !uu.top)));
        for (let yu of this.panels) yu.dom.classList.add("cm-panel"), yu.mount && yu.mount()
      }
      update(uu) {
        let Ru = uu.state.facet(qQ);
        this.top.container != Ru.topContainer && (this.top.sync([]), this.top = new aQ(uu.view, !0, Ru.topContainer)), this.bottom.container != Ru.bottomContainer && (this.bottom.sync([]), this.bottom = new aQ(uu.view, !1, Ru.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let yu = uu.state.facet(um);
        if (yu != this.input) {
          let Ru = yu.filter((uu => uu)),
            Eu = [],
            Ku = [],
            Qu = [],
            mu = [];
          for (let yu of Ru) {
            let Ru, Ju = this.specs.indexOf(yu);
            Ju < 0 ? (Ru = yu(uu.view), mu.push(Ru)) : (Ru = this.panels[Ju], Ru.update && Ru.update(uu)), Eu.push(Ru), (Ru.top ? Ku : Qu).push(Ru)
          }
          this.specs = Ru, this.panels = Eu, this.top.sync(Ku), this.bottom.sync(Qu);
          for (let uu of mu) uu.dom.classList.add("cm-panel"), uu.mount && uu.mount()
        } else
          for (let Eu of this.panels) Eu.update && Eu.update(uu)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: uu => AK.scrollMargins.of((Ru => {
        let yu = Ru.plugin(uu);
        return yu && {
          top: yu.top.scrollMargin(),
          bottom: yu.bottom.scrollMargin()
        }
      }))
    });
    class aQ {
      constructor(uu, Ru, yu) {
        this.view = uu, this.top = Ru, this.container = yu, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(uu) {
        for (let Ru of this.panels) Ru.destroy && uu.indexOf(Ru) < 0 && Ru.destroy();
        this.panels = uu, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let uu = this.container || this.view.dom;
          uu.insertBefore(this.dom, this.top ? uu.firstChild : null)
        }
        let uu = this.dom.firstChild;
        for (let Ru of this.panels)
          if (Ru.dom.parentNode == this.dom) {
            for (; uu != Ru.dom;) uu = fQ(uu);
            uu = uu.nextSibling
          } else this.dom.insertBefore(Ru.dom, uu);
        for (; uu;) uu = fQ(uu)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let uu of this.classes.split(" ")) uu && this.container.classList.remove(uu);
          for (let uu of (this.classes = this.view.themeClasses).split(" ")) uu && this.container.classList.add(uu)
        }
      }
    }

    function fQ(uu) {
      let Ru = uu.nextSibling;
      return uu.remove(), Ru
    }
    const um = Eu.q.define({
      enables: vQ
    });

    function Rm(uu, Ru) {
      let yu, Ku = new Promise((uu => yu = uu)),
        Qu = uu => function(uu, Ru, yu) {
          let Eu = Ru.content ? Ru.content(uu, (() => mu(null))) : null;
          if (!Eu) {
            if (Eu = (0, ru.e)("form"), Ru.input) {
              let uu = (0, ru.e)("input", Ru.input);
              /^(text|password|number|email|tel|url)$/.test(uu.type) && uu.classList.add("cm-textfield"), uu.name || (uu.name = "input"), Eu.appendChild((0, ru.e)("label", (Ru.label || "") + ": ", uu))
            } else Eu.appendChild(document.createTextNode(Ru.label || ""));
            Eu.appendChild(document.createTextNode(" ")), Eu.appendChild((0, ru.e)("button", {
              class: "cm-button",
              type: "submit"
            }, Ru.submitLabel || "OK"))
          }
          let Ku = "FORM" == Eu.nodeName ? [Eu] : Eu.querySelectorAll("form");
          for (let Ju = 0; Ju < Ku.length; Ju++) {
            let uu = Ku[Ju];
            uu.addEventListener("keydown", (Ru => {
              27 == Ru.keyCode ? (Ru.preventDefault(), mu(null)) : 13 == Ru.keyCode && (Ru.preventDefault(), mu(uu))
            })), uu.addEventListener("submit", (Ru => {
              Ru.preventDefault(), mu(uu)
            }))
          }
          let Qu = (0, ru.e)("div", Eu, (0, ru.e)("button", {
            onclick: () => mu(null),
            "aria-label": uu.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          Ru.class && (Qu.className = Ru.class);

          function mu(Ru) {
            Qu.contains(Qu.ownerDocument.activeElement) && uu.focus(), yu(Ru)
          }
          return Qu.classList.add("cm-dialog"), {
            dom: Qu,
            top: Ru.top,
            mount: () => {
              if (Ru.focus) {
                let uu;
                uu = "string" == typeof Ru.focus ? Eu.querySelector(Ru.focus) : Eu.querySelector("input") || Eu.querySelector("button"), uu && "select" in uu ? uu.select() : uu && "focus" in uu && uu.focus()
              }
            }
          }
        }(uu, Ru, yu);
      uu.state.field(ym, !1) ? uu.dispatch({
        effects: Em.of(Qu)
      }) : uu.dispatch({
        effects: Eu.B.appendConfig.of(ym.init((() => [Qu])))
      });
      let mu = Km.of(Qu);
      return {
        close: mu,
        result: Ku.then((Ru => ((uu.win.queueMicrotask || (Ru => uu.win.setTimeout(Ru, 10)))((() => {
          uu.state.field(ym).indexOf(Qu) > -1 && uu.dispatch({
            effects: mu
          })
        })), Ru)))
      }
    }
    const ym = Eu.E.define({
        create: () => [],
        update(uu, Ru) {
          for (let yu of Ru.effects) yu.is(Em) ? uu = [yu.value].concat(uu) : yu.is(Km) && (uu = uu.filter((uu => uu != yu.value)));
          return uu
        },
        provide: uu => um.computeN([uu], (Ru => Ru.field(uu)))
      }),
      Em = Eu.B.define(),
      Km = Eu.B.define();
    class Qm extends Eu.A {
      compare(uu) {
        return this == uu || this.constructor == uu.constructor && this.eq(uu)
      }
      eq(uu) {
        return !1
      }
      destroy(uu) {}
    }
    Qm.prototype.elementClass = "", Qm.prototype.toDOM = void 0, Qm.prototype.mapMode = Eu.s.TrackBefore, Qm.prototype.startSide = Qm.prototype.endSide = -1, Qm.prototype.point = !0;
    const mm = Eu.q.define(),
      Jm = Eu.q.define(),
      Nm = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Eu.x.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Xm = Eu.q.define();

    function Vm(uu) {
      return [Bm(), Xm.of({
        ...Nm,
        ...uu
      })]
    }
    const rm = Eu.q.define({
      combine: uu => uu.some((uu => uu))
    });

    function Bm(uu) {
      let Ru = [xm];
      return uu && !1 === uu.fixed && Ru.push(rm.of(!0)), Ru
    }
    const xm = OR.fromClass(class {
      constructor(uu) {
        this.view = uu, this.domAfter = null, this.prevViewport = uu.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = uu.state.facet(Xm).map((Ru => new Wm(uu, Ru))), this.fixed = !uu.state.facet(rm);
        for (let Ru of this.gutters) "after" == Ru.config.side ? this.getDOMAfter().appendChild(Ru.dom) : this.dom.appendChild(Ru.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), uu.scrollDOM.insertBefore(this.dom, uu.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(uu) {
        if (this.updateGutters(uu)) {
          let Ru = this.prevViewport,
            yu = uu.view.viewport,
            Eu = Math.min(Ru.to, yu.to) - Math.max(Ru.from, yu.from);
          this.syncGutters(Eu < .8 * (yu.to - yu.from))
        }
        if (uu.geometryChanged) {
          let uu = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = uu, this.domAfter && (this.domAfter.style.minHeight = uu)
        }
        this.view.state.facet(rm) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = uu.view.viewport
      }
      syncGutters(uu) {
        let Ru = this.dom.nextSibling;
        uu && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let yu = Eu.x.iter(this.view.state.facet(mm), this.view.viewport.from),
          Ku = [],
          Qu = this.gutters.map((uu => new Tm(uu, this.view.viewport, -this.view.documentPadding.top)));
        for (let Eu of this.view.viewportLineBlocks)
          if (Ku.length && (Ku = []), Array.isArray(Eu.type)) {
            let uu = !0;
            for (let Ru of Eu.type)
              if (Ru.type == Uu.Text && uu) {
                pm(yu, Ku, Ru.from);
                for (let uu of Qu) uu.line(this.view, Ru, Ku);
                uu = !1
              } else if (Ru.widget)
              for (let uu of Qu) uu.widget(this.view, Ru)
          } else if (Eu.type == Uu.Text) {
          pm(yu, Ku, Eu.from);
          for (let uu of Qu) uu.line(this.view, Eu, Ku)
        } else if (Eu.widget)
          for (let uu of Qu) uu.widget(this.view, Eu);
        for (let Eu of Qu) Eu.finish();
        uu && (this.view.scrollDOM.insertBefore(this.dom, Ru), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(uu) {
        let Ru = uu.startState.facet(Xm),
          yu = uu.state.facet(Xm),
          Ku = uu.docChanged || uu.heightChanged || uu.viewportChanged || !Eu.x.eq(uu.startState.facet(mm), uu.state.facet(mm), uu.view.viewport.from, uu.view.viewport.to);
        if (Ru == yu)
          for (let Eu of this.gutters) Eu.update(uu) && (Ku = !0);
        else {
          Ku = !0;
          let Eu = [];
          for (let Ku of yu) {
            let yu = Ru.indexOf(Ku);
            yu < 0 ? Eu.push(new Wm(this.view, Ku)) : (this.gutters[yu].update(uu), Eu.push(this.gutters[yu]))
          }
          for (let uu of this.gutters) uu.dom.remove(), Eu.indexOf(uu) < 0 && uu.destroy();
          for (let uu of Eu) "after" == uu.config.side ? this.getDOMAfter().appendChild(uu.dom) : this.dom.appendChild(uu.dom);
          this.gutters = Eu
        }
        return Ku
      }
      destroy() {
        for (let uu of this.gutters) uu.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: uu => AK.scrollMargins.of((Ru => {
        let yu = Ru.plugin(uu);
        if (!yu || 0 == yu.gutters.length || !yu.fixed) return null;
        let Eu = yu.dom.offsetWidth * Ru.scaleX,
          Ku = yu.domAfter ? yu.domAfter.offsetWidth * Ru.scaleX : 0;
        return Ru.textDirection == XR.LTR ? {
          left: Eu,
          right: Ku
        } : {
          right: Eu,
          left: Ku
        }
      }))
    });

    function Sm(uu) {
      return Array.isArray(uu) ? uu : [uu]
    }

    function pm(uu, Ru, yu) {
      for (; uu.value && uu.from <= yu;) uu.from == yu && Ru.push(uu.value), uu.next()
    }
    class Tm {
      constructor(uu, Ru, yu) {
        this.gutter = uu, this.height = yu, this.i = 0, this.cursor = Eu.x.iter(uu.markers, Ru.from)
      }
      addElement(uu, Ru, yu) {
        let {
          gutter: Eu
        } = this, Ku = (Ru.top - this.height) / uu.scaleY, Qu = Ru.height / uu.scaleY;
        if (this.i == Eu.elements.length) {
          let Ru = new jm(uu, Qu, Ku, yu);
          Eu.elements.push(Ru), Eu.dom.appendChild(Ru.dom)
        } else Eu.elements[this.i].update(uu, Qu, Ku, yu);
        this.height = Ru.bottom, this.i++
      }
      line(uu, Ru, yu) {
        let Eu = [];
        pm(this.cursor, Eu, Ru.from), yu.length && (Eu = Eu.concat(yu));
        let Ku = this.gutter.config.lineMarker(uu, Ru, Eu);
        Ku && Eu.unshift(Ku);
        let Qu = this.gutter;
        (0 != Eu.length || Qu.config.renderEmptyElements) && this.addElement(uu, Ru, Eu)
      }
      widget(uu, Ru) {
        let yu = this.gutter.config.widgetMarker(uu, Ru.widget, Ru),
          Eu = yu ? [yu] : null;
        for (let Ku of uu.state.facet(Jm)) {
          let yu = Ku(uu, Ru.widget, Ru);
          yu && (Eu || (Eu = [])).push(yu)
        }
        Eu && this.addElement(uu, Ru, Eu)
      }
      finish() {
        let uu = this.gutter;
        for (; uu.elements.length > this.i;) {
          let Ru = uu.elements.pop();
          uu.dom.removeChild(Ru.dom), Ru.destroy()
        }
      }
    }
    class Wm {
      constructor(uu, Ru) {
        this.view = uu, this.config = Ru, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let yu in Ru.domEventHandlers) this.dom.addEventListener(yu, (Eu => {
          let Ku, Qu = Eu.target;
          if (Qu != this.dom && this.dom.contains(Qu)) {
            for (; Qu.parentNode != this.dom;) Qu = Qu.parentNode;
            let uu = Qu.getBoundingClientRect();
            Ku = (uu.top + uu.bottom) / 2
          } else Ku = Eu.clientY;
          let mu = uu.lineBlockAtHeight(Ku - uu.documentTop);
          Ru.domEventHandlers[yu](uu, mu, Eu) && Eu.preventDefault()
        }));
        this.markers = Sm(Ru.markers(uu)), Ru.initialSpacer && (this.spacer = new jm(uu, 0, 0, [Ru.initialSpacer(uu)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(uu) {
        let Ru = this.markers;
        if (this.markers = Sm(this.config.markers(uu.view)), this.spacer && this.config.updateSpacer) {
          let Ru = this.config.updateSpacer(this.spacer.markers[0], uu);
          Ru != this.spacer.markers[0] && this.spacer.update(uu.view, 0, 0, [Ru])
        }
        let yu = uu.view.viewport;
        return !Eu.x.eq(this.markers, Ru, yu.from, yu.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(uu)
      }
      destroy() {
        for (let uu of this.elements) uu.destroy()
      }
    }
    class jm {
      constructor(uu, Ru, yu, Eu) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(uu, Ru, yu, Eu)
      }
      update(uu, Ru, yu, Eu) {
        this.height != Ru && (this.height = Ru, this.dom.style.height = Ru + "px"), this.above != yu && (this.dom.style.marginTop = (this.above = yu) ? yu + "px" : ""),
          function(uu, Ru) {
            if (uu.length != Ru.length) return !1;
            for (let yu = 0; yu < uu.length; yu++)
              if (!uu[yu].compare(Ru[yu])) return !1;
            return !0
          }(this.markers, Eu) || this.setMarkers(uu, Eu)
      }
      setMarkers(uu, Ru) {
        let yu = "cm-gutterElement",
          Eu = this.dom.firstChild;
        for (let Ku = 0, Qu = 0;;) {
          let mu = Qu,
            Ju = Ku < Ru.length ? Ru[Ku++] : null,
            Nu = !1;
          if (Ju) {
            let uu = Ju.elementClass;
            uu && (yu += " " + uu);
            for (let Ru = Qu; Ru < this.markers.length; Ru++)
              if (this.markers[Ru].compare(Ju)) {
                mu = Ru, Nu = !0;
                break
              }
          } else mu = this.markers.length;
          for (; Qu < mu;) {
            let uu = this.markers[Qu++];
            if (uu.toDOM) {
              uu.destroy(Eu);
              let Ru = Eu.nextSibling;
              Eu.remove(), Eu = Ru
            }
          }
          if (!Ju) break;
          Ju.toDOM && (Nu ? Eu = Eu.nextSibling : this.dom.insertBefore(Ju.toDOM(uu), Eu)), Nu && Qu++
        }
        this.dom.className = yu, this.markers = Ru
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const Hm = Eu.q.define(),
      dm = Eu.q.define(),
      bm = Eu.q.define({
        combine: uu => (0, Eu.P)(uu, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(uu, Ru) {
            let yu = Object.assign({}, uu);
            for (let Eu in Ru) {
              let uu = yu[Eu],
                Ku = Ru[Eu];
              yu[Eu] = uu ? (Ru, yu, Eu) => uu(Ru, yu, Eu) || Ku(Ru, yu, Eu) : Ku
            }
            return yu
          }
        })
      });
    class Cm extends Qm {
      constructor(uu) {
        super(), this.number = uu
      }
      eq(uu) {
        return this.number == uu.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function km(uu, Ru) {
      return uu.state.facet(bm).formatNumber(Ru, uu.state)
    }
    const em = Xm.compute([bm], (uu => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: uu => uu.state.facet(Hm),
      lineMarker: (uu, Ru, yu) => yu.some((uu => uu.toDOM)) ? null : new Cm(km(uu, uu.state.doc.lineAt(Ru.from).number)),
      widgetMarker: (uu, Ru, yu) => {
        for (let Eu of uu.state.facet(dm)) {
          let Ku = Eu(uu, Ru, yu);
          if (Ku) return Ku
        }
        return null
      },
      lineMarkerChange: uu => uu.startState.facet(bm) != uu.state.facet(bm),
      initialSpacer: uu => new Cm(km(uu, Dm(uu.state.doc.lines))),
      updateSpacer(uu, Ru) {
        let yu = km(Ru.view, Dm(Ru.view.state.doc.lines));
        return yu == uu.number ? uu : new Cm(yu)
      },
      domEventHandlers: uu.facet(bm).domEventHandlers,
      side: "before"
    })));

    function Am() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [bm.of(uu), Bm(), em]
    }

    function Dm(uu) {
      let Ru = 9;
      for (; Ru < uu;) Ru = 10 * Ru + 9;
      return Ru
    }
    const Mm = new class extends Qm {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      Im = mm.compute(["selection"], (uu => {
        let Ru = [],
          yu = -1;
        for (let Eu of uu.selection.yT) {
          let Ku = uu.doc.lineAt(Eu.head).from;
          Ku > yu && (yu = Ku, Ru.push(Mm.range(Ku)))
        }
        return Eu.x.of(Ru)
      }));

    function Gm() {
      return Im
    }
  },
  40934: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      f: () => xu,
      i: () => mu,
      j: () => Vu,
      k: () => Xu,
      n: () => su,
      p: () => lu,
      r: () => tu,
      t: () => Su
    });
    const Eu = 1024;
    let Ku = 0;
    class Qu {
      constructor(uu, Ru) {
        this.from = uu, this.to = Ru
      }
    }
    class mu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Ku++, this.perNode = !!uu.perNode, this.deserialize = uu.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = uu.combine || null
      }
      add(uu) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof uu && (uu = Xu.match(uu)), Ru => {
          let yu = uu(Ru);
          return void 0 === yu ? null : [this, yu]
        }
      }
    }
    mu.closedBy = new mu({
      deserialize: uu => uu.split(" ")
    }), mu.openedBy = new mu({
      deserialize: uu => uu.split(" ")
    }), mu.group = new mu({
      deserialize: uu => uu.split(" ")
    }), mu.isolate = new mu({
      deserialize: uu => {
        if (uu && "rtl" != uu && "ltr" != uu && "auto" != uu) throw new RangeError("Invalid value for isolate: " + uu);
        return uu || "auto"
      }
    }), mu.contextHash = new mu({
      perNode: !0
    }), mu.lookAhead = new mu({
      perNode: !0
    }), mu.mounted = new mu({
      perNode: !0
    });
    class Ju {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = uu, this.overlay = Ru, this.parser = yu, this.bracketed = Eu
      }
      static get(uu) {
        return uu && uu.props && uu.props[mu.mounted.id]
      }
    }
    const Nu = Object.create(null);
    class Xu {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = uu, this.props = Ru, this.id = yu, this.flags = Eu
      }
      static define(uu) {
        let Ru = uu.props && uu.props.length ? Object.create(null) : Nu,
          yu = (uu.top ? 1 : 0) | (uu.skipped ? 2 : 0) | (uu.error ? 4 : 0) | (null == uu.name ? 8 : 0),
          Eu = new Xu(uu.name || "", Ru, uu.id, yu);
        if (uu.props)
          for (let Ku of uu.props)
            if (Array.isArray(Ku) || (Ku = Ku(Eu)), Ku) {
              if (Ku[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              Ru[Ku[0].id] = Ku[1]
            } return Eu
      }
      prop(uu) {
        return this.props[uu.id]
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
      is(uu) {
        if ("string" == typeof uu) {
          if (this.name == uu) return !0;
          let Ru = this.prop(mu.group);
          return !!Ru && Ru.indexOf(uu) > -1
        }
        return this.id == uu
      }
      static match(uu) {
        let Ru = Object.create(null);
        for (let yu in uu)
          for (let Eu of yu.split(" ")) Ru[Eu] = uu[yu];
        return uu => {
          for (let yu = uu.prop(mu.group), Eu = -1; Eu < (yu ? yu.length : 0); Eu++) {
            let Ku = Ru[Eu < 0 ? uu.name : yu[Eu]];
            if (Ku) return Ku
          }
        }
      }
    }
    Xu.none = new Xu("", Object.create(null), 0, 8);
    class Vu {
      constructor(uu) {
        this.types = uu;
        for (let Ru = 0; Ru < uu.length; Ru++)
          if (uu[Ru].id != Ru) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let uu = [];
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        for (let Ku of this.types) {
          let Ru = null;
          for (let uu of yu) {
            let yu = uu(Ku);
            if (yu) {
              Ru || (Ru = Object.assign({}, Ku.props));
              let uu = yu[1],
                Eu = yu[0];
              Eu.combine && Eu.id in Ru && (uu = Eu.combine(Ru[Eu.id], uu)), Ru[Eu.id] = uu
            }
          }
          uu.push(Ru ? new Xu(Ku.name, Ru, Ku.id, Ku.flags) : Ku)
        }
        return new Vu(uu)
      }
    }
    const ru = new WeakMap,
      Bu = new WeakMap;
    var xu;
    ! function(uu) {
      uu[uu.ExcludeBuffers = 1] = "ExcludeBuffers", uu[uu.IncludeAnonymous = 2] = "IncludeAnonymous", uu[uu.IgnoreMounts = 4] = "IgnoreMounts", uu[uu.IgnoreOverlays = 8] = "IgnoreOverlays", uu[uu.EnterBracketed = 16] = "EnterBracketed"
    }(xu || (xu = {}));
    class Su {
      constructor(uu, Ru, yu, Eu, Ku) {
        if (this.type = uu, this.children = Ru, this.positions = yu, this.length = Eu, this.props = null, Ku && Ku.length) {
          this.props = Object.create(null);
          for (let [uu, Ru] of Ku) this.props["number" == typeof uu ? uu : uu.id] = Ru
        }
      }
      toString() {
        let uu = Ju.get(this);
        if (uu && !uu.overlay) return uu.tree.toString();
        let Ru = "";
        for (let yu of this.children) {
          let uu = yu.toString();
          uu && (Ru && (Ru += ","), Ru += uu)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (Ru.length ? "(" + Ru + ")" : "") : Ru
      }
      cursor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Mu(this.topNode, uu)
      }
      cursorAt(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = ru.get(this) || this.topNode,
          Eu = new Mu(yu);
        return Eu.moveTo(uu, Ru), ru.set(this, Eu._tree), Eu
      }
      get topNode() {
        return new du(this, 0, 0, null)
      }
      resolve(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = ju(ru.get(this) || this.topNode, uu, Ru, !1);
        return ru.set(this, yu), yu
      }
      resolveInner(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = ju(Bu.get(this) || this.topNode, uu, Ru, !0);
        return Bu.set(this, yu), yu
      }
      resolveStack(uu) {
        return function(uu, Ru, yu) {
          let Eu = uu.resolveInner(Ru, yu),
            Ku = null;
          for (let Qu = Eu instanceof du ? Eu : Eu.context.parent; Qu; Qu = Qu.parent)
            if (Qu.index < 0) {
              let uu = Qu.parent;
              (Ku || (Ku = [Eu])).push(uu.resolve(Ru, yu)), Qu = uu
            } else {
              let uu = Ju.get(Qu.tree);
              if (uu && uu.overlay && uu.overlay[0].from <= Ru && uu.overlay[uu.overlay.length - 1].to >= Ru) {
                let mu = new du(uu.tree, uu.overlay[0].from + Qu.from, -1, Qu);
                (Ku || (Ku = [Eu])).push(ju(mu, Ru, yu, !1))
              }
            } return Ku ? Au(Ku) : Eu
        }(this, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(uu) {
        let {
          enter: Ru,
          leave: yu,
          from: Eu = 0,
          to: Ku = this.length
        } = uu, Qu = uu.mode || 0, mu = (Qu & xu.IncludeAnonymous) > 0;
        for (let Ju = this.cursor(Qu | xu.IncludeAnonymous);;) {
          let uu = !1;
          if (Ju.from <= Ku && Ju.to >= Eu && (!mu && Ju.type.isAnonymous || !1 !== Ru(Ju))) {
            if (Ju.firstChild()) continue;
            uu = !0
          }
          for (; uu && yu && (mu || !Ju.type.isAnonymous) && yu(Ju), !Ju.nextSibling();) {
            if (!Ju.parent()) return;
            uu = !0
          }
        }
      }
      prop(uu) {
        return uu.perNode ? this.props ? this.props[uu.id] : void 0 : this.type.prop(uu)
      }
      get propValues() {
        let uu = [];
        if (this.props)
          for (let Ru in this.props) uu.push([+Ru, this.props[Ru]]);
        return uu
      }
      balance() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : nu(Xu.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((uu, Ru, yu) => new Su(this.type, uu, Ru, yu, this.propValues)), uu.makeTree || ((uu, Ru, yu) => new Su(Xu.none, uu, Ru, yu)))
      }
      static build(uu) {
        return function(uu) {
          var Ru;
          let {
            buffer: yu,
            nodeSet: Ku,
            maxBufferLength: Qu = Eu,
            reused: Ju = [],
            minRepeatType: Nu = Ku.types.length
          } = uu, Xu = Array.isArray(yu) ? new pu(yu, yu.length) : yu, Vu = Ku.types, ru = 0, Bu = 0;

          function xu(uu, Ru, yu, Eu, mu, Su) {
            let {
              id: pu,
              start: ku,
              end: eu,
              size: Au
            } = Xu, Du = Bu, Mu = ru;
            if (Au < 0) {
              if (Xu.next(), -1 == Au) {
                let Ru = Ju[pu];
                return yu.push(Ru), void Eu.push(ku - uu)
              }
              if (-3 == Au) return void(ru = pu);
              if (-4 == Au) return void(Bu = pu);
              throw new RangeError(`Unrecognized record size: ${Au}`)
            }
            let Iu, Gu, Uu = Vu[pu],
              su = ku - uu;
            if (eu - ku <= Qu && (Gu = bu(Xu.pos - Ru, mu))) {
              let Ru = new Uint16Array(Gu.size - Gu.skip),
                yu = Xu.pos - Gu.size,
                Eu = Ru.length;
              for (; Xu.pos > yu;) Eu = Cu(Gu.start, Ru, Eu);
              Iu = new Tu(Ru, eu - Gu.start, Ku), su = Gu.start - uu
            } else {
              let uu = Xu.pos - Au;
              Xu.next();
              let Ru = [],
                yu = [],
                Eu = pu >= Nu ? pu : -1,
                Ku = 0,
                mu = eu;
              for (; Xu.pos > uu;) Eu >= 0 && Xu.id == Eu && Xu.size >= 0 ? (Xu.end <= mu - Qu && (Hu(Ru, yu, ku, Ku, Xu.end, mu, Eu, Du, Mu), Ku = Ru.length, mu = Xu.end), Xu.next()) : Su > 2500 ? Wu(ku, uu, Ru, yu) : xu(ku, uu, Ru, yu, Eu, Su + 1);
              if (Eu >= 0 && Ku > 0 && Ku < Ru.length && Hu(Ru, yu, ku, Ku, ku, mu, Eu, Du, Mu), Ru.reverse(), yu.reverse(), Eu > -1 && Ku > 0) {
                let uu = ju(Uu, Mu);
                Iu = nu(Uu, Ru, yu, 0, Ru.length, 0, eu - ku, uu, uu)
              } else Iu = du(Uu, Ru, yu, eu - ku, Du - eu, Mu)
            }
            yu.push(Iu), Eu.push(su)
          }

          function Wu(uu, Ru, yu, Eu) {
            let mu = [],
              Ju = 0,
              Nu = -1;
            for (; Xu.pos > Ru;) {
              let {
                id: uu,
                start: Ru,
                end: yu,
                size: Eu
              } = Xu;
              if (Eu > 4) Xu.next();
              else {
                if (Nu > -1 && Ru < Nu) break;
                Nu < 0 && (Nu = yu - Qu), mu.push(uu, Ru, yu), Ju++, Xu.next()
              }
            }
            if (Ju) {
              let Ru = new Uint16Array(4 * Ju),
                Qu = mu[mu.length - 2];
              for (let uu = mu.length - 3, yu = 0; uu >= 0; uu -= 3) Ru[yu++] = mu[uu], Ru[yu++] = mu[uu + 1] - Qu, Ru[yu++] = mu[uu + 2] - Qu, Ru[yu++] = yu;
              yu.push(new Tu(Ru, mu[2] - Qu, Ku)), Eu.push(Qu - uu)
            }
          }

          function ju(uu, Ru) {
            return (yu, Eu, Ku) => {
              let Qu, Ju, Nu = 0,
                Xu = yu.length - 1;
              if (Xu >= 0 && (Qu = yu[Xu]) instanceof Su) {
                if (!Xu && Qu.type == uu && Qu.length == Ku) return Qu;
                (Ju = Qu.prop(mu.lookAhead)) && (Nu = Eu[Xu] + Qu.length + Ju)
              }
              return du(uu, yu, Eu, Ku, Nu, Ru)
            }
          }

          function Hu(uu, Ru, yu, Eu, Qu, mu, Ju, Nu, Xu) {
            let Vu = [],
              ru = [];
            for (; uu.length > Eu;) Vu.push(uu.pop()), ru.push(Ru.pop() + yu - Qu);
            uu.push(du(Ku.types[Ju], Vu, ru, mu - Qu, Nu - mu, Xu)), Ru.push(Qu - yu)
          }

          function du(uu, Ru, yu, Eu, Ku, Qu, Ju) {
            if (Qu) {
              let uu = [mu.contextHash, Qu];
              Ju = Ju ? [uu].concat(Ju) : [uu]
            }
            if (Ku > 25) {
              let uu = [mu.lookAhead, Ku];
              Ju = Ju ? [uu].concat(Ju) : [uu]
            }
            return new Su(uu, Ru, yu, Eu, Ju)
          }

          function bu(uu, Ru) {
            let yu = Xu.fork(),
              Eu = 0,
              Ku = 0,
              mu = 0,
              Ju = yu.end - Qu,
              Vu = {
                size: 0,
                start: 0,
                skip: 0
              };
            uu: for (let Qu = yu.pos - uu; yu.pos > Qu;) {
              let uu = yu.size;
              if (yu.id == Ru && uu >= 0) {
                Vu.size = Eu, Vu.start = Ku, Vu.skip = mu, mu += 4, Eu += 4, yu.next();
                continue
              }
              let Xu = yu.pos - uu;
              if (uu < 0 || Xu < Qu || yu.start < Ju) break;
              let ru = yu.id >= Nu ? 4 : 0,
                Bu = yu.start;
              for (yu.next(); yu.pos > Xu;) {
                if (yu.size < 0) {
                  if (-3 != yu.size && -4 != yu.size) break uu;
                  ru += 4
                } else yu.id >= Nu && (ru += 4);
                yu.next()
              }
              Ku = Bu, Eu += uu, mu += ru
            }
            return (Ru < 0 || Eu == uu) && (Vu.size = Eu, Vu.start = Ku, Vu.skip = mu), Vu.size > 4 ? Vu : void 0
          }

          function Cu(uu, Ru, yu) {
            let {
              id: Eu,
              start: Ku,
              end: Qu,
              size: mu
            } = Xu;
            if (Xu.next(), mu >= 0 && Eu < Nu) {
              let Ju = yu;
              if (mu > 4) {
                let Eu = Xu.pos - (mu - 4);
                for (; Xu.pos > Eu;) yu = Cu(uu, Ru, yu)
              }
              Ru[--yu] = Ju, Ru[--yu] = Qu - uu, Ru[--yu] = Ku - uu, Ru[--yu] = Eu
            } else - 3 == mu ? ru = Eu : -4 == mu && (Bu = Eu);
            return yu
          }
          let ku = [],
            eu = [];
          for (; Xu.pos > 0;) xu(uu.start || 0, uu.bufferStart || 0, ku, eu, -1, 0);
          let Au = null !== (Ru = uu.length) && void 0 !== Ru ? Ru : ku.length ? eu[0] + ku[0].length : 0;
          return new Su(Vu[uu.topID], ku.reverse(), eu.reverse(), Au)
        }(uu)
      }
    }
    Su.empty = new Su(Xu.none, [], [], 0);
    class pu {
      constructor(uu, Ru) {
        this.buffer = uu, this.index = Ru
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
        return new pu(this.buffer, this.index)
      }
    }
    class Tu {
      constructor(uu, Ru, yu) {
        this.buffer = uu, this.length = Ru, this.set = yu
      }
      get type() {
        return Xu.none
      }
      toString() {
        let uu = [];
        for (let Ru = 0; Ru < this.buffer.length;) uu.push(this.childString(Ru)), Ru = this.buffer[Ru + 3];
        return uu.join(",")
      }
      childString(uu) {
        let Ru = this.buffer[uu],
          yu = this.buffer[uu + 3],
          Eu = this.set.types[Ru],
          Ku = Eu.name;
        if (/\W/.test(Ku) && !Eu.isError && (Ku = JSON.stringify(Ku)), yu == (uu += 4)) return Ku;
        let Qu = [];
        for (; uu < yu;) Qu.push(this.childString(uu)), uu = this.buffer[uu + 3];
        return Ku + "(" + Qu.join(",") + ")"
      }
      findChild(uu, Ru, yu, Eu, Ku) {
        let {
          buffer: Qu
        } = this, mu = -1;
        for (let Ju = uu; Ju != Ru && !(Wu(Ku, Eu, Qu[Ju + 1], Qu[Ju + 2]) && (mu = Ju, yu > 0)); Ju = Qu[Ju + 3]);
        return mu
      }
      slice(uu, Ru, yu) {
        let Eu = this.buffer,
          Ku = new Uint16Array(Ru - uu),
          Qu = 0;
        for (let mu = uu, Ju = 0; mu < Ru;) {
          Ku[Ju++] = Eu[mu++], Ku[Ju++] = Eu[mu++] - yu;
          let Ru = Ku[Ju++] = Eu[mu++] - yu;
          Ku[Ju++] = Eu[mu++] - uu, Qu = Math.max(Qu, Ru)
        }
        return new Tu(Ku, Qu, this.set)
      }
    }

    function Wu(uu, Ru, yu, Eu) {
      switch (uu) {
        case -2:
          return yu < Ru;
        case -1:
          return Eu >= Ru && yu < Ru;
        case 0:
          return yu < Ru && Eu > Ru;
        case 1:
          return yu <= Ru && Eu > Ru;
        case 2:
          return Eu > Ru;
        case 4:
          return !0
      }
    }

    function ju(uu, Ru, yu, Eu) {
      for (var Ku; uu.from == uu.to || (yu < 1 ? uu.from >= Ru : uu.from > Ru) || (yu > -1 ? uu.to <= Ru : uu.to < Ru);) {
        let Ru = !Eu && uu instanceof du && uu.index < 0 ? null : uu.parent;
        if (!Ru) return uu;
        uu = Ru
      }
      let Qu = Eu ? 0 : xu.IgnoreOverlays;
      if (Eu)
        for (let mu = uu, Ju = mu.parent; Ju; mu = Ju, Ju = mu.parent) mu instanceof du && mu.index < 0 && (null === (Ku = Ju.enter(Ru, yu, Qu)) || void 0 === Ku ? void 0 : Ku.from) != mu.from && (uu = Ju);
      for (;;) {
        let Eu = uu.enter(Ru, yu, Qu);
        if (!Eu) return uu;
        uu = Eu
      }
    }
    class Hu {
      cursor() {
        return new Mu(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(uu) {
        let Ru = bu(this, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return Ru.length ? Ru[0] : null
      }
      getChildren(uu) {
        return bu(this, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(uu) {
        return ju(this, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(uu) {
        return ju(this, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(uu) {
        return Cu(this.parent, uu)
      }
      enterUnfinishedNodesBefore(uu) {
        let Ru = this.childBefore(uu),
          yu = this;
        for (; Ru;) {
          let uu = Ru.lastChild;
          if (!uu || uu.to != Ru.to) break;
          uu.type.isError && uu.from == uu.to ? (yu = Ru, Ru = uu.prevSibling) : Ru = uu
        }
        return yu
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class du extends Hu {
      constructor(uu, Ru, yu, Eu) {
        super(), this._tree = uu, this.from = Ru, this.index = yu, this._parent = Eu
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
      nextChild(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let Qu = this;;) {
          for (let {
              children: mu,
              positions: Nu
            } = Qu._tree, Xu = Ru > 0 ? mu.length : -1; uu != Xu; uu += Ru) {
            let Xu, Vu = mu[uu],
              ru = Nu[uu] + Qu.from;
            if (Ku & xu.EnterBracketed && Vu instanceof Su && (Xu = Ju.get(Vu)) && !Xu.overlay && Xu.bracketed && yu >= ru && yu <= ru + Vu.length || Wu(Eu, yu, ru, ru + Vu.length))
              if (Vu instanceof Tu) {
                if (Ku & xu.ExcludeBuffers) continue;
                let mu = Vu.findChild(0, Vu.buffer.length, Ru, yu - ru, Eu);
                if (mu > -1) return new eu(new ku(Qu, Vu, uu, ru), null, mu)
              } else if (Ku & xu.IncludeAnonymous || !Vu.type.isAnonymous || Iu(Vu)) {
              let mu;
              if (!(Ku & xu.IgnoreMounts) && (mu = Ju.get(Vu)) && !mu.overlay) return new du(mu.tree, ru, uu, Qu);
              let Nu = new du(Vu, ru, uu, Qu);
              return Ku & xu.IncludeAnonymous || !Nu.type.isAnonymous ? Nu : Nu.nextChild(Ru < 0 ? Vu.children.length - 1 : 0, Ru, yu, Eu, Ku)
            }
          }
          if (Ku & xu.IncludeAnonymous || !Qu.type.isAnonymous) return null;
          if (uu = Qu.index >= 0 ? Qu.index + Ru : Ru < 0 ? -1 : Qu._parent._tree.children.length, Qu = Qu._parent, !Qu) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(uu) {
        return this.nextChild(0, 1, uu, 2)
      }
      childBefore(uu) {
        return this.nextChild(this._tree.children.length - 1, -1, uu, -2)
      }
      prop(uu) {
        return this._tree.prop(uu)
      }
      enter(uu, Ru) {
        let yu, Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Eu & xu.IgnoreOverlays) && (yu = Ju.get(this._tree)) && yu.overlay) {
          let Ku = uu - this.from,
            Qu = Eu & xu.EnterBracketed && yu.bracketed;
          for (let {
              from: uu,
              to: Eu
            }
            of yu.overlay)
            if ((Ru > 0 || Qu ? uu <= Ku : uu < Ku) && (Ru < 0 || Qu ? Eu >= Ku : Eu > Ku)) return new du(yu.tree, yu.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, uu, Ru, Eu)
      }
      nextSignificantParent() {
        let uu = this;
        for (; uu.type.isAnonymous && uu._parent;) uu = uu._parent;
        return uu
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

    function bu(uu, Ru, yu, Eu) {
      let Ku = uu.cursor(),
        Qu = [];
      if (!Ku.firstChild()) return Qu;
      if (null != yu)
        for (let mu = !1; !mu;)
          if (mu = Ku.type.is(yu), !Ku.nextSibling()) return Qu;
      for (;;) {
        if (null != Eu && Ku.type.is(Eu)) return Qu;
        if (Ku.type.is(Ru) && Qu.push(Ku.node), !Ku.nextSibling()) return null == Eu ? Qu : []
      }
    }

    function Cu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ru.length - 1;
      for (let Eu = uu; yu >= 0; Eu = Eu.parent) {
        if (!Eu) return !1;
        if (!Eu.type.isAnonymous) {
          if (Ru[yu] && Ru[yu] != Eu.name) return !1;
          yu--
        }
      }
      return !0
    }
    class ku {
      constructor(uu, Ru, yu, Eu) {
        this.parent = uu, this.buffer = Ru, this.index = yu, this.start = Eu
      }
    }
    class eu extends Hu {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(uu, Ru, yu) {
        super(), this.context = uu, this._parent = Ru, this.index = yu, this.type = uu.buffer.set.types[uu.buffer.buffer[yu]]
      }
      child(uu, Ru, yu) {
        let {
          buffer: Eu
        } = this.context, Ku = Eu.findChild(this.index + 4, Eu.buffer[this.index + 3], uu, Ru - this.context.start, yu);
        return Ku < 0 ? null : new eu(this.context, this, Ku)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(uu) {
        return this.child(1, uu, 2)
      }
      childBefore(uu) {
        return this.child(-1, uu, -2)
      }
      prop(uu) {
        return this.type.prop(uu)
      }
      enter(uu, Ru) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & xu.ExcludeBuffers) return null;
        let {
          buffer: yu
        } = this.context, Eu = yu.findChild(this.index + 4, yu.buffer[this.index + 3], Ru > 0 ? 1 : -1, uu - this.context.start, Ru);
        return Eu < 0 ? null : new eu(this.context, this, Eu)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(uu) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + uu, uu, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: uu
        } = this.context, Ru = uu.buffer[this.index + 3];
        return Ru < (this._parent ? uu.buffer[this._parent.index + 3] : uu.buffer.length) ? new eu(this.context, this._parent, Ru) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: uu
        } = this.context, Ru = this._parent ? this._parent.index + 4 : 0;
        return this.index == Ru ? this.externalSibling(-1) : new eu(this.context, this._parent, uu.findChild(Ru, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let uu = [],
          Ru = [],
          {
            buffer: yu
          } = this.context,
          Eu = this.index + 4,
          Ku = yu.buffer[this.index + 3];
        if (Ku > Eu) {
          let Qu = yu.buffer[this.index + 1];
          uu.push(yu.slice(Eu, Ku, Qu)), Ru.push(0)
        }
        return new Su(this.type, uu, Ru, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function Au(uu) {
      if (!uu.length) return null;
      let Ru = 0,
        yu = uu[0];
      for (let Qu = 1; Qu < uu.length; Qu++) {
        let Eu = uu[Qu];
        (Eu.from > yu.from || Eu.to < yu.to) && (yu = Eu, Ru = Qu)
      }
      let Eu = yu instanceof du && yu.index < 0 ? null : yu.parent,
        Ku = uu.slice();
      return Eu ? Ku[Ru] = Eu : Ku.splice(Ru, 1), new Du(Ku, yu)
    }
    class Du {
      constructor(uu, Ru) {
        this.heads = uu, this.node = Ru
      }
      get next() {
        return Au(this.heads)
      }
    }
    class Mu {
      get name() {
        return this.type.name
      }
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = Ru & ~xu.EnterBracketed, uu instanceof du) this.yieldNode(uu);
        else {
          this._tree = uu.context.parent, this.buffer = uu.context;
          for (let Ru = uu._parent; Ru; Ru = Ru._parent) this.stack.unshift(Ru.index);
          this.bufferNode = uu, this.yieldBuf(uu.index)
        }
      }
      yieldNode(uu) {
        return !!uu && (this._tree = uu, this.type = uu.type, this.from = uu.from, this.to = uu.to, !0)
      }
      yieldBuf(uu, Ru) {
        this.index = uu;
        let {
          start: yu,
          buffer: Eu
        } = this.buffer;
        return this.type = Ru || Eu.set.types[Eu.buffer[uu]], this.from = yu + Eu.buffer[uu + 1], this.to = yu + Eu.buffer[uu + 2], !0
      }
      yield(uu) {
        return !!uu && (uu instanceof du ? (this.buffer = null, this.yieldNode(uu)) : (this.buffer = uu.context, this.yieldBuf(uu.index, uu.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(uu, Ru, yu) {
        if (!this.buffer) return this.yield(this._tree.nextChild(uu < 0 ? this._tree._tree.children.length - 1 : 0, uu, Ru, yu, this.mode));
        let {
          buffer: Eu
        } = this.buffer, Ku = Eu.findChild(this.index + 4, Eu.buffer[this.index + 3], uu, Ru - this.buffer.start, yu);
        return !(Ku < 0) && (this.stack.push(this.index), this.yieldBuf(Ku))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(uu) {
        return this.enterChild(1, uu, 2)
      }
      childBefore(uu) {
        return this.enterChild(-1, uu, -2)
      }
      enter(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(yu & xu.ExcludeBuffers) && this.enterChild(1, uu, Ru) : this.yield(this._tree.enter(uu, Ru, yu))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & xu.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let uu = this.mode & xu.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(uu)
      }
      sibling(uu) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + uu, uu, 0, 4, this.mode));
        let {
          buffer: Ru
        } = this.buffer, yu = this.stack.length - 1;
        if (uu < 0) {
          let uu = yu < 0 ? 0 : this.stack[yu] + 4;
          if (this.index != uu) return this.yieldBuf(Ru.findChild(uu, this.index, -1, 0, 4))
        } else {
          let uu = Ru.buffer[this.index + 3];
          if (uu < (yu < 0 ? Ru.buffer.length : Ru.buffer[this.stack[yu] + 3])) return this.yieldBuf(uu)
        }
        return yu < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + uu, uu, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(uu) {
        let Ru, yu, {
          buffer: Eu
        } = this;
        if (Eu) {
          if (uu > 0) {
            if (this.index < Eu.buffer.buffer.length) return !1
          } else
            for (let uu = 0; uu < this.index; uu++)
              if (Eu.buffer.buffer[uu + 3] < this.index) return !1;
          ({
            index: Ru,
            parent: yu
          } = Eu)
        } else({
          index: Ru,
          _parent: yu
        } = this._tree);
        for (; yu;
          ({
            index: Ru,
            _parent: yu
          } = yu))
          if (Ru > -1)
            for (let Eu = Ru + uu, Ku = uu < 0 ? -1 : yu._tree.children.length; Eu != Ku; Eu += uu) {
              let uu = yu._tree.children[Eu];
              if (this.mode & xu.IncludeAnonymous || uu instanceof Tu || !uu.type.isAnonymous || Iu(uu)) return !1
            }
        return !0
      }
      move(uu, Ru) {
        if (Ru && this.enterChild(uu, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(uu)) return !0;
          if (this.atLastNode(uu) || !this.parent()) return !1
        }
      }
      next() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, uu)
      }
      prev() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, uu)
      }
      moveTo(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (Ru < 1 ? this.from >= uu : this.from > uu) || (Ru > -1 ? this.to <= uu : this.to < uu)) && this.parent(););
        for (; this.enterChild(1, uu, Ru););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let uu = this.bufferNode,
          Ru = null,
          yu = 0;
        if (uu && uu.context == this.buffer) uu: for (let Eu = this.index, Ku = this.stack.length; Ku >= 0;) {
          for (let Qu = uu; Qu; Qu = Qu._parent)
            if (Qu.index == Eu) {
              if (Eu == this.index) return Qu;
              Ru = Qu, yu = Ku + 1;
              break uu
            } Eu = this.stack[--Ku]
        }
        for (let Eu = yu; Eu < this.stack.length; Eu++) Ru = new eu(this.buffer, Ru, this.stack[Eu]);
        return this.bufferNode = new eu(this.buffer, Ru, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(uu, Ru) {
        for (let yu = 0;;) {
          let Eu = !1;
          if (this.type.isAnonymous || !1 !== uu(this)) {
            if (this.firstChild()) {
              yu++;
              continue
            }
            this.type.isAnonymous || (Eu = !0)
          }
          for (;;) {
            if (Eu && Ru && Ru(this), Eu = this.type.isAnonymous, !yu) return;
            if (this.nextSibling()) break;
            this.parent(), yu--, Eu = !0
          }
        }
      }
      matchContext(uu) {
        if (!this.buffer) return Cu(this.node.parent, uu);
        let {
          buffer: Ru
        } = this.buffer, {
          types: yu
        } = Ru.set;
        for (let Eu = uu.length - 1, Ku = this.stack.length - 1; Eu >= 0; Ku--) {
          if (Ku < 0) return Cu(this._tree, uu, Eu);
          let Qu = yu[Ru.buffer[this.stack[Ku]]];
          if (!Qu.isAnonymous) {
            if (uu[Eu] && uu[Eu] != Qu.name) return !1;
            Eu--
          }
        }
        return !0
      }
    }

    function Iu(uu) {
      return uu.children.some((uu => uu instanceof Tu || !uu.type.isAnonymous || Iu(uu)))
    }
    const Gu = new WeakMap;

    function Uu(uu, Ru) {
      if (!uu.isAnonymous || Ru instanceof Tu || Ru.type != uu) return 1;
      let yu = Gu.get(Ru);
      if (null == yu) {
        yu = 1;
        for (let Eu of Ru.children) {
          if (Eu.type != uu || !(Eu instanceof Su)) {
            yu = 1;
            break
          }
          yu += Uu(uu, Eu)
        }
        Gu.set(Ru, yu)
      }
      return yu
    }

    function nu(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
      let Xu = 0;
      for (let xu = Eu; xu < Ku; xu++) Xu += Uu(uu, Ru[xu]);
      let Vu = Math.ceil(1.5 * Xu / 8),
        ru = [],
        Bu = [];
      return function Ru(yu, Eu, Ku, mu, Ju) {
        for (let Xu = Ku; Xu < mu;) {
          let Ku = Xu,
            xu = Eu[Xu],
            Su = Uu(uu, yu[Xu]);
          for (Xu++; Xu < mu; Xu++) {
            let Ru = Uu(uu, yu[Xu]);
            if (Su + Ru >= Vu) break;
            Su += Ru
          }
          if (Xu == Ku + 1) {
            if (Su > Vu) {
              let uu = yu[Ku];
              Ru(uu.children, uu.positions, 0, uu.children.length, Eu[Ku] + Ju);
              continue
            }
            ru.push(yu[Ku])
          } else {
            let Ru = Eu[Xu - 1] + yu[Xu - 1].length - xu;
            ru.push(nu(uu, yu, Eu, Ku, Xu, xu, Ru, null, Nu))
          }
          Bu.push(xu + Ju - Qu)
        }
      }(Ru, yu, Eu, Ku, 0), (Ju || Nu)(ru, Bu, mu)
    }
    class su {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(uu, Ru, yu) {
        let Eu = this.map.get(uu);
        Eu || this.map.set(uu, Eu = new Map), Eu.set(Ru, yu)
      }
      getBuffer(uu, Ru) {
        let yu = this.map.get(uu);
        return yu && yu.get(Ru)
      }
      set(uu, Ru) {
        uu instanceof eu ? this.setBuffer(uu.context.buffer, uu.index, Ru) : uu instanceof du && this.map.set(uu.tree, Ru)
      }
      get(uu) {
        return uu instanceof eu ? this.getBuffer(uu.context.buffer, uu.index) : uu instanceof du ? this.map.get(uu.tree) : void 0
      }
      cursorSet(uu, Ru) {
        uu.buffer ? this.setBuffer(uu.buffer.buffer, uu.index, Ru) : this.map.set(uu.tree, Ru)
      }
      cursorGet(uu) {
        return uu.buffer ? this.getBuffer(uu.buffer.buffer, uu.index) : this.map.get(uu.tree)
      }
    }
    class tu {
      constructor(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = uu, this.to = Ru, this.tree = yu, this.offset = Eu, this.open = (Ku ? 1 : 0) | (Qu ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = [new tu(0, uu.length, uu, 0, !1, yu)];
        for (let Ku of Ru) Ku.to > uu.length && Eu.push(Ku);
        return Eu
      }
      static applyChanges(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!Ru.length) return uu;
        let Eu = [],
          Ku = 1,
          Qu = uu.length ? uu[0] : null;
        for (let mu = 0, Ju = 0, Nu = 0;; mu++) {
          let Xu = mu < Ru.length ? Ru[mu] : null,
            Vu = Xu ? Xu.fromA : 1e9;
          if (Vu - Ju >= yu)
            for (; Qu && Qu.from < Vu;) {
              let Ru = Qu;
              if (Ju >= Ru.from || Vu <= Ru.to || Nu) {
                let uu = Math.max(Ru.from, Ju) - Nu,
                  yu = Math.min(Ru.to, Vu) - Nu;
                Ru = uu >= yu ? null : new tu(uu, yu, Ru.tree, Ru.offset + Nu, mu > 0, !!Xu)
              }
              if (Ru && Eu.push(Ru), Qu.to > Vu) break;
              Qu = Ku < uu.length ? uu[Ku++] : null
            }
          if (!Xu) break;
          Ju = Xu.toA, Nu = Xu.toA - Xu.toB
        }
        return Eu
      }
    }
    class lu {
      startParse(uu, Ru, yu) {
        return "string" == typeof uu && (uu = new gu(uu)), yu = yu ? yu.length ? yu.map((uu => new Qu(uu.from, uu.to))) : [new Qu(0, 0)] : [new Qu(0, uu.length)], this.createParse(uu, Ru || [], yu)
      }
      parse(uu, Ru, yu) {
        let Eu = this.startParse(uu, Ru, yu);
        for (;;) {
          let uu = Eu.advance();
          if (uu) return uu
        }
      }
    }
    class gu {
      constructor(uu) {
        this.string = uu
      }
      get length() {
        return this.string.length
      }
      chunk(uu) {
        return this.string.slice(uu)
      }
      get lineChunks() {
        return !1
      }
      read(uu, Ru) {
        return this.string.slice(uu, Ru)
      }
    }
    new mu({
      perNode: !0
    })
  },
  40940: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Bu,
      h: () => Nu,
      l: () => ru,
      p: () => Gu
    });
    var Eu = yu(40934);
    let Ku = 0;
    class Qu {
      constructor(uu, Ru, yu, Eu) {
        this.name = uu, this.set = Ru, this.base = yu, this.modified = Eu, this.id = Ku++
      }
      toString() {
        let {
          name: uu
        } = this;
        for (let Ru of this.modified) Ru.name && (uu = `${Ru.name}(${uu})`);
        return uu
      }
      static define(uu, Ru) {
        let yu = "string" == typeof uu ? uu : "?";
        if (uu instanceof Qu && (Ru = uu), null === Ru || void 0 === Ru ? void 0 : Ru.base) throw new Error("Can not derive from a modified tag");
        let Eu = new Qu(yu, [], null, []);
        if (Eu.set.push(Eu), Ru)
          for (let Ku of Ru.set) Eu.set.push(Ku);
        return Eu
      }
      static defineModifier(uu) {
        let Ru = new Ju(uu);
        return uu => uu.modified.indexOf(Ru) > -1 ? uu : Ju.get(uu.base || uu, uu.modified.concat(Ru).sort(((uu, Ru) => uu.id - Ru.id)))
      }
    }
    let mu = 0;
    class Ju {
      constructor(uu) {
        this.name = uu, this.instances = [], this.id = mu++
      }
      static get(uu, Ru) {
        if (!Ru.length) return uu;
        let yu = Ru[0].instances.find((yu => {
          return yu.base == uu && (Eu = Ru, Ku = yu.modified, Eu.length == Ku.length && Eu.every(((uu, Ru) => uu == Ku[Ru])));
          var Eu, Ku
        }));
        if (yu) return yu;
        let Eu = [],
          Ku = new Qu(uu.name, Eu, uu, Ru);
        for (let Qu of Ru) Qu.instances.push(Ku);
        let mu = function(uu) {
          let Ru = [
            []
          ];
          for (let yu = 0; yu < uu.length; yu++)
            for (let Eu = 0, Ku = Ru.length; Eu < Ku; Eu++) Ru.push(Ru[Eu].concat(uu[yu]));
          return Ru.sort(((uu, Ru) => Ru.length - uu.length))
        }(Ru);
        for (let Qu of uu.set)
          if (!Qu.modified.length)
            for (let uu of mu) Eu.push(Ju.get(Qu, uu));
        return Ku
      }
    }

    function Nu(uu) {
      let Ru = Object.create(null);
      for (let yu in uu) {
        let Eu = uu[yu];
        Array.isArray(Eu) || (Eu = [Eu]);
        for (let uu of yu.split(" "))
          if (uu) {
            let yu = [],
              Ku = 2,
              Qu = uu;
            for (let Ru = 0;;) {
              if ("..." == Qu && Ru > 0 && Ru + 3 == uu.length) {
                Ku = 1;
                break
              }
              let Eu = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Qu);
              if (!Eu) throw new RangeError("Invalid path: " + uu);
              if (yu.push("*" == Eu[0] ? "" : '"' == Eu[0][0] ? JSON.parse(Eu[0]) : Eu[0]), Ru += Eu[0].length, Ru == uu.length) break;
              let mu = uu[Ru++];
              if (Ru == uu.length && "!" == mu) {
                Ku = 0;
                break
              }
              if ("/" != mu) throw new RangeError("Invalid path: " + uu);
              Qu = uu.slice(Ru)
            }
            let mu = yu.length - 1,
              Ju = yu[mu];
            if (!Ju) throw new RangeError("Invalid path: " + uu);
            let Nu = new Vu(Eu, Ku, mu > 0 ? yu.slice(0, mu) : null);
            Ru[Ju] = Nu.sort(Ru[Ju])
          }
      }
      return Xu.add(Ru)
    }
    const Xu = new Eu.i({
      combine(uu, Ru) {
        let yu, Eu, Ku;
        for (; uu || Ru;) {
          if (!uu || Ru && uu.depth >= Ru.depth ? (Ku = Ru, Ru = Ru.next) : (Ku = uu, uu = uu.next), yu && yu.mode == Ku.mode && !Ku.context && !yu.context) continue;
          let Qu = new Vu(Ku.tags, Ku.mode, Ku.context);
          yu ? yu.next = Qu : Eu = Qu, yu = Qu
        }
        return Eu
      }
    });
    class Vu {
      constructor(uu, Ru, yu, Eu) {
        this.tags = uu, this.mode = Ru, this.context = yu, this.next = Eu
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(uu) {
        return !uu || uu.depth < this.depth ? (this.next = uu, this) : (uu.next = this.sort(uu.next), uu)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function ru(uu, Ru) {
      let yu = Object.create(null);
      for (let Qu of uu)
        if (Array.isArray(Qu.tag))
          for (let uu of Qu.tag) yu[uu.id] = Qu.class;
        else yu[Qu.tag.id] = Qu.class;
      let {
        scope: Eu,
        all: Ku = null
      } = Ru || {};
      return {
        style: uu => {
          let Ru = Ku;
          for (let Eu of uu)
            for (let uu of Eu.set) {
              let Eu = yu[uu.id];
              if (Eu) {
                Ru = Ru ? Ru + " " + Eu : Eu;
                break
              }
            }
          return Ru
        },
        scope: Eu
      }
    }

    function Bu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uu.length,
        Qu = new xu(Eu, Array.isArray(Ru) ? Ru : [Ru], yu);
      Qu.highlightRange(uu.cursor(), Eu, Ku, "", Qu.highlighters), Qu.flush(Ku)
    }
    Vu.empty = new Vu([], 2, null);
    class xu {
      constructor(uu, Ru, yu) {
        this.at = uu, this.highlighters = Ru, this.span = yu, this.class = ""
      }
      startSpan(uu, Ru) {
        Ru != this.class && (this.flush(uu), uu > this.at && (this.at = uu), this.class = Ru)
      }
      flush(uu) {
        uu > this.at && this.class && this.span(this.at, uu, this.class)
      }
      highlightRange(uu, Ru, yu, Ku, Qu) {
        let {
          type: mu,
          from: Ju,
          to: Nu
        } = uu;
        if (Ju >= yu || Nu <= Ru) return;
        mu.isTop && (Qu = this.highlighters.filter((uu => !uu.scope || uu.scope(mu))));
        let ru = Ku,
          Bu = function(uu) {
            let Ru = uu.type.prop(Xu);
            for (; Ru && Ru.context && !uu.matchContext(Ru.context);) Ru = Ru.next;
            return Ru || null
          }(uu) || Vu.empty,
          xu = function(uu, Ru) {
            let yu = null;
            for (let Eu of uu) {
              let uu = Eu.style(Ru);
              uu && (yu = yu ? yu + " " + uu : uu)
            }
            return yu
          }(Qu, Bu.tags);
        if (xu && (ru && (ru += " "), ru += xu, 1 == Bu.mode && (Ku += (Ku ? " " : "") + xu)), this.startSpan(Math.max(Ru, Ju), ru), Bu.opaque) return;
        let Su = uu.tree && uu.tree.prop(Eu.i.mounted);
        if (Su && Su.overlay) {
          let Eu = uu.node.enter(Su.overlay[0].from + Ju, 1),
            mu = this.highlighters.filter((uu => !uu.scope || uu.scope(Su.tree.type))),
            Xu = uu.firstChild();
          for (let Vu = 0, Bu = Ju;; Vu++) {
            let xu = Vu < Su.overlay.length ? Su.overlay[Vu] : null,
              pu = xu ? xu.from + Ju : Nu,
              Tu = Math.max(Ru, Bu),
              Wu = Math.min(yu, pu);
            if (Tu < Wu && Xu)
              for (; uu.from < Wu && (this.highlightRange(uu, Tu, Wu, Ku, Qu), this.startSpan(Math.min(Wu, uu.to), ru), !(uu.to >= pu) && uu.nextSibling()););
            if (!xu || pu > yu) break;
            Bu = xu.to + Ju, Bu > Ru && (this.highlightRange(Eu.cursor(), Math.max(Ru, xu.from + Ju), Math.min(yu, Bu), "", mu), this.startSpan(Math.min(yu, Bu), ru))
          }
          Xu && uu.parent()
        } else if (uu.firstChild()) {
          Su && (Ku = "");
          do {
            if (!(uu.to <= Ru)) {
              if (uu.from >= yu) break;
              this.highlightRange(uu, Ru, yu, Ku, Qu), this.startSpan(Math.min(yu, uu.to), ru)
            }
          } while (uu.nextSibling());
          uu.parent()
        }
      }
    }
    const Su = Qu.define,
      pu = Su(),
      Tu = Su(),
      Wu = Su(Tu),
      ju = Su(Tu),
      Hu = Su(),
      du = Su(Hu),
      bu = Su(Hu),
      Cu = Su(),
      ku = Su(Cu),
      eu = Su(),
      Au = Su(),
      Du = Su(),
      Mu = Su(Du),
      Iu = Su(),
      Gu = {
        comment: pu,
        lineComment: Su(pu),
        blockComment: Su(pu),
        docComment: Su(pu),
        name: Tu,
        variableName: Su(Tu),
        typeName: Wu,
        tagName: Su(Wu),
        propertyName: ju,
        attributeName: Su(ju),
        className: Su(Tu),
        labelName: Su(Tu),
        namespace: Su(Tu),
        macroName: Su(Tu),
        literal: Hu,
        string: du,
        docString: Su(du),
        character: Su(du),
        attributeValue: Su(du),
        number: bu,
        integer: Su(bu),
        float: Su(bu),
        bool: Su(Hu),
        regexp: Su(Hu),
        escape: Su(Hu),
        color: Su(Hu),
        url: Su(Hu),
        keyword: eu,
        self: Su(eu),
        null: Su(eu),
        atom: Su(eu),
        unit: Su(eu),
        modifier: Su(eu),
        operatorKeyword: Su(eu),
        controlKeyword: Su(eu),
        definitionKeyword: Su(eu),
        moduleKeyword: Su(eu),
        operator: Au,
        derefOperator: Su(Au),
        arithmeticOperator: Su(Au),
        logicOperator: Su(Au),
        bitwiseOperator: Su(Au),
        compareOperator: Su(Au),
        updateOperator: Su(Au),
        definitionOperator: Su(Au),
        typeOperator: Su(Au),
        controlOperator: Su(Au),
        punctuation: Du,
        separator: Su(Du),
        bracket: Mu,
        angleBracket: Su(Mu),
        squareBracket: Su(Mu),
        paren: Su(Mu),
        brace: Su(Mu),
        content: Cu,
        heading: ku,
        heading1: Su(ku),
        heading2: Su(ku),
        heading3: Su(ku),
        heading4: Su(ku),
        heading5: Su(ku),
        heading6: Su(ku),
        contentSeparator: Su(Cu),
        list: Su(Cu),
        quote: Su(Cu),
        emphasis: Su(Cu),
        strong: Su(Cu),
        link: Su(Cu),
        monospace: Su(Cu),
        strikethrough: Su(Cu),
        inserted: Su(),
        deleted: Su(),
        changed: Su(),
        invalid: Su(),
        meta: Iu,
        documentMeta: Su(Iu),
        annotation: Su(Iu),
        processingInstruction: Su(Iu),
        definition: Qu.defineModifier("definition"),
        constant: Qu.defineModifier("constant"),
        function: Qu.defineModifier("function"),
        standard: Qu.defineModifier("standard"),
        local: Qu.defineModifier("local"),
        special: Qu.defineModifier("special")
      };
    for (let Uu in Gu) {
      let uu = Gu[Uu];
      uu instanceof Qu && (uu.name = Uu)
    }
    ru([{
      tag: Gu.link,
      class: "tok-link"
    }, {
      tag: Gu.heading,
      class: "tok-heading"
    }, {
      tag: Gu.emphasis,
      class: "tok-emphasis"
    }, {
      tag: Gu.strong,
      class: "tok-strong"
    }, {
      tag: Gu.keyword,
      class: "tok-keyword"
    }, {
      tag: Gu.atom,
      class: "tok-atom"
    }, {
      tag: Gu.bool,
      class: "tok-bool"
    }, {
      tag: Gu.url,
      class: "tok-url"
    }, {
      tag: Gu.labelName,
      class: "tok-labelName"
    }, {
      tag: Gu.inserted,
      class: "tok-inserted"
    }, {
      tag: Gu.deleted,
      class: "tok-deleted"
    }, {
      tag: Gu.literal,
      class: "tok-literal"
    }, {
      tag: Gu.string,
      class: "tok-string"
    }, {
      tag: Gu.number,
      class: "tok-number"
    }, {
      tag: [Gu.regexp, Gu.escape, Gu.special(Gu.string)],
      class: "tok-string2"
    }, {
      tag: Gu.variableName,
      class: "tok-variableName"
    }, {
      tag: Gu.local(Gu.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: Gu.definition(Gu.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: Gu.special(Gu.variableName),
      class: "tok-variableName2"
    }, {
      tag: Gu.definition(Gu.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: Gu.typeName,
      class: "tok-typeName"
    }, {
      tag: Gu.namespace,
      class: "tok-namespace"
    }, {
      tag: Gu.className,
      class: "tok-className"
    }, {
      tag: Gu.macroName,
      class: "tok-macroName"
    }, {
      tag: Gu.propertyName,
      class: "tok-propertyName"
    }, {
      tag: Gu.operator,
      class: "tok-operator"
    }, {
      tag: Gu.comment,
      class: "tok-comment"
    }, {
      tag: Gu.meta,
      class: "tok-meta"
    }, {
      tag: Gu.invalid,
      class: "tok-invalid"
    }, {
      tag: Gu.punctuation,
      class: "tok-punctuation"
    }])
  },
  40949: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju.f,
      f: () => mu.t,
      i: () => mu.B,
      j: () => mu.E,
      k: () => Ju.k,
      n: () => ky,
      p: () => Ju.R,
      q: () => Ju.lb
    });
    var Eu = yu(1340),
      Ku = yu(1331),
      Qu = yu(64),
      mu = yu(40909),
      Ju = yu(40913),
      Nu = yu(40930),
      Xu = yu(40934);

    function Vu(uu, Ru) {
      return yu => {
        let {
          state: Eu,
          dispatch: Ku
        } = yu;
        if (Eu.readOnly) return !1;
        let Qu = uu(Ru, Eu);
        return !!Qu && (Ku(Eu.update(Qu)), !0)
      }
    }
    const ru = Vu(Wu, 0),
      Bu = Vu(Tu, 0),
      xu = Vu(((uu, Ru) => Tu(uu, Ru, function(uu) {
        let Ru = [];
        for (let yu of uu.selection.yT) {
          let Eu = uu.doc.lineAt(yu.from),
            Ku = yu.to <= Eu.to ? Eu : uu.doc.lineAt(yu.to);
          Ku.from > Eu.from && Ku.from == yu.to && (Ku = yu.to == Eu.to + 1 ? Eu : uu.doc.lineAt(yu.to - 1));
          let Qu = Ru.length - 1;
          Qu >= 0 && Ru[Qu].to > Eu.from ? Ru[Qu].to = Ku.to : Ru.push({
            from: Eu.from + /^\s*/.exec(Eu.text)[0].length,
            to: Ku.to
          })
        }
        return Ru
      }(Ru))), 0);

    function Su(uu, Ru) {
      let yu = uu.languageDataAt("commentTokens", Ru, 1);
      return yu.length ? yu[0] : {}
    }
    const pu = 50;

    function Tu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ru.selection.yT,
        Eu = yu.map((uu => Su(Ru, uu.from).block));
      if (!Eu.every((uu => uu))) return null;
      let Ku = yu.map(((uu, yu) => function(uu, Ru, yu, Eu) {
        let Ku, Qu, {
            open: mu,
            close: Ju
          } = Ru,
          Nu = uu.sliceDoc(yu - pu, yu),
          Xu = uu.sliceDoc(Eu, Eu + pu),
          Vu = /\s*$/.exec(Nu)[0].length,
          ru = /^\s*/.exec(Xu)[0].length,
          Bu = Nu.length - Vu;
        if (Nu.slice(Bu - mu.length, Bu) == mu && Xu.slice(ru, ru + Ju.length) == Ju) return {
          open: {
            pos: yu - Vu,
            margin: Vu && 1
          },
          close: {
            pos: Eu + ru,
            margin: ru && 1
          }
        };
        Eu - yu <= 2 * pu ? Ku = Qu = uu.sliceDoc(yu, Eu) : (Ku = uu.sliceDoc(yu, yu + pu), Qu = uu.sliceDoc(Eu - pu, Eu));
        let xu = /^\s*/.exec(Ku)[0].length,
          Su = /\s*$/.exec(Qu)[0].length,
          Tu = Qu.length - Su - Ju.length;
        return Ku.slice(xu, xu + mu.length) == mu && Qu.slice(Tu, Tu + Ju.length) == Ju ? {
          open: {
            pos: yu + xu + mu.length,
            margin: /\s/.test(Ku.charAt(xu + mu.length)) ? 1 : 0
          },
          close: {
            pos: Eu - Su - Ju.length,
            margin: /\s/.test(Qu.charAt(Tu - 1)) ? 1 : 0
          }
        } : null
      }(Ru, Eu[yu], uu.from, uu.to)));
      if (2 != uu && !Ku.every((uu => uu))) return {
        changes: Ru.changes(yu.map(((uu, Ru) => Ku[Ru] ? [] : [{
          from: uu.from,
          insert: Eu[Ru].open + " "
        }, {
          from: uu.to,
          insert: " " + Eu[Ru].close
        }])))
      };
      if (1 != uu && Ku.some((uu => uu))) {
        let uu = [];
        for (let Ru, yu = 0; yu < Ku.length; yu++)
          if (Ru = Ku[yu]) {
            let Ku = Eu[yu],
              {
                open: Qu,
                close: mu
              } = Ru;
            uu.push({
              from: Qu.pos - Ku.open.length,
              to: Qu.pos + Qu.margin
            }, {
              from: mu.pos - mu.margin,
              to: mu.pos + Ku.close.length
            })
          } return {
          changes: uu
        }
      }
      return null
    }

    function Wu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ru.selection.yT,
        Eu = [],
        Ku = -1;
      uu: for (let {
          from: Qu,
          to: mu
        }
        of yu) {
        let uu, yu = Eu.length,
          Ju = 1e9;
        for (let Nu = Qu; Nu <= mu;) {
          let yu = Ru.doc.lineAt(Nu);
          if (void 0 == uu && (uu = Su(Ru, yu.from).line, !uu)) continue uu;
          if (yu.from > Ku && (Qu == mu || mu > yu.from)) {
            Ku = yu.from;
            let Ru = /^\s*/.exec(yu.text)[0].length,
              Qu = Ru == yu.length,
              mu = yu.text.slice(Ru, Ru + uu.length) == uu ? Ru : -1;
            Ru < yu.text.length && Ru < Ju && (Ju = Ru), Eu.push({
              line: yu,
              comment: mu,
              token: uu,
              indent: Ru,
              empty: Qu,
              single: !1
            })
          }
          Nu = yu.to + 1
        }
        if (Ju < 1e9)
          for (let Ru = yu; Ru < Eu.length; Ru++) Eu[Ru].indent < Eu[Ru].line.text.length && (Eu[Ru].indent = Ju);
        Eu.length == yu + 1 && (Eu[yu].single = !0)
      }
      if (2 != uu && Eu.some((uu => uu.comment < 0 && (!uu.empty || uu.single)))) {
        let uu = [];
        for (let {
            line: Ru,
            token: Ku,
            indent: Qu,
            empty: mu,
            single: Ju
          }
          of Eu) !Ju && mu || uu.push({
          from: Ru.from + Qu,
          insert: Ku + " "
        });
        let yu = Ru.changes(uu);
        return {
          changes: yu,
          selection: Ru.selection.map(yu, 1)
        }
      }
      if (1 != uu && Eu.some((uu => uu.comment >= 0))) {
        let uu = [];
        for (let {
            line: Ru,
            comment: yu,
            token: Ku
          }
          of Eu)
          if (yu >= 0) {
            let Eu = Ru.from + yu,
              Qu = Eu + Ku.length;
            " " == Ru.text[Qu - Ru.from] && Qu++, uu.push({
              from: Eu,
              to: Qu
            })
          } return {
          changes: uu
        }
      }
      return null
    }
    const ju = mu.e.define(),
      Hu = mu.e.define(),
      du = mu.q.define(),
      bu = mu.q.define({
        combine: uu => (0, mu.P)(uu, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (uu, Ru) => Ru
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (uu, Ru) => (yu, Eu) => uu(yu, Eu) || Ru(yu, Eu)
        })
      }),
      Cu = mu.E.define({
        create: () => zu.empty,
        update(uu, Ru) {
          let yu = Ru.state.facet(bu),
            Eu = Ru.annotation(ju);
          if (Eu) {
            let Ku = Iu.fromTransaction(Ru, Eu.selection),
              Qu = Eu.side,
              mu = 0 == Qu ? uu.undone : uu.done;
            return mu = Ku ? Gu(mu, mu.length, yu.minDepth, Ku) : tu(mu, Ru.startState.selection), new zu(0 == Qu ? Eu.rest : mu, 0 == Qu ? mu : Eu.rest)
          }
          let Ku = Ru.annotation(Hu);
          if ("full" != Ku && "before" != Ku || (uu = uu.isolate()), !1 === Ru.annotation(mu.J.addToHistory)) return Ru.changes.empty ? uu : uu.addMapping(Ru.changes.desc);
          let Qu = Iu.fromTransaction(Ru),
            Ju = Ru.annotation(mu.J.time),
            Nu = Ru.annotation(mu.J.userEvent);
          return Qu ? uu = uu.addChanges(Qu, Ju, Nu, yu, Ru) : Ru.selection && (uu = uu.addSelection(Ru.startState.selection, Ju, Nu, yu.newGroupDelay)), "full" != Ku && "after" != Ku || (uu = uu.isolate()), uu
        },
        toJSON: uu => ({
          done: uu.done.map((uu => uu.toJSON())),
          undone: uu.undone.map((uu => uu.toJSON()))
        }),
        fromJSON: uu => new zu(uu.done.map(Iu.fromJSON), uu.undone.map(Iu.fromJSON))
      });

    function ku(uu, Ru) {
      return function(yu) {
        let {
          state: Eu,
          dispatch: Ku
        } = yu;
        if (!Ru && Eu.readOnly) return !1;
        let Qu = Eu.field(Cu, !1);
        if (!Qu) return !1;
        let mu = Qu.pop(uu, Eu, Ru);
        return !!mu && (Ku(mu), !0)
      }
    }
    const eu = ku(0, !1),
      Au = ku(1, !1),
      Du = ku(0, !0),
      Mu = ku(1, !0);
    class Iu {
      constructor(uu, Ru, yu, Eu, Ku) {
        this.changes = uu, this.effects = Ru, this.mapped = yu, this.startSelection = Eu, this.selectionsAfter = Ku
      }
      setSelAfter(uu) {
        return new Iu(this.changes, this.effects, this.mapped, this.startSelection, uu)
      }
      toJSON() {
        var uu, Ru, yu;
        return {
          changes: null === (uu = this.changes) || void 0 === uu ? void 0 : uu.toJSON(),
          mapped: null === (Ru = this.mapped) || void 0 === Ru ? void 0 : Ru.toJSON(),
          startSelection: null === (yu = this.startSelection) || void 0 === yu ? void 0 : yu.toJSON(),
          selectionsAfter: this.selectionsAfter.map((uu => uu.toJSON()))
        }
      }
      static fromJSON(uu) {
        return new Iu(uu.changes && mu.ChangeSet.fromJSON(uu.changes), [], uu.mapped && mu.h.fromJSON(uu.mapped), uu.startSelection && mu.n.fromJSON(uu.startSelection), uu.selectionsAfter.map(mu.n.fromJSON))
      }
      static fromTransaction(uu, Ru) {
        let yu = nu;
        for (let Eu of uu.startState.facet(du)) {
          let Ru = Eu(uu);
          Ru.length && (yu = yu.concat(Ru))
        }
        return !yu.length && uu.changes.empty ? null : new Iu(uu.changes.invert(uu.startState.doc), yu, void 0, Ru || uu.startState.selection, nu)
      }
      static selection(uu) {
        return new Iu(void 0, nu, void 0, void 0, uu)
      }
    }

    function Gu(uu, Ru, yu, Eu) {
      let Ku = Ru + 1 > yu + 20 ? Ru - yu - 1 : 0,
        Qu = uu.slice(Ku, Ru);
      return Qu.push(Eu), Qu
    }

    function Uu(uu, Ru) {
      return uu.length ? Ru.length ? uu.concat(Ru) : uu : Ru
    }
    const nu = [],
      su = 200;

    function tu(uu, Ru) {
      if (uu.length) {
        let yu = uu[uu.length - 1],
          Eu = yu.selectionsAfter.slice(Math.max(0, yu.selectionsAfter.length - su));
        return Eu.length && Eu[Eu.length - 1].eq(Ru) ? uu : (Eu.push(Ru), Gu(uu, uu.length - 1, 1e9, yu.setSelAfter(Eu)))
      }
      return [Iu.selection([Ru])]
    }

    function lu(uu) {
      let Ru = uu[uu.length - 1],
        yu = uu.slice();
      return yu[uu.length - 1] = Ru.setSelAfter(Ru.selectionsAfter.slice(0, Ru.selectionsAfter.length - 1)), yu
    }

    function gu(uu, Ru) {
      if (!uu.length) return uu;
      let yu = uu.length,
        Eu = nu;
      for (; yu;) {
        let Ku = cu(uu[yu - 1], Ru, Eu);
        if (Ku.changes && !Ku.changes.empty || Ku.effects.length) {
          let Ru = uu.slice(0, yu);
          return Ru[yu - 1] = Ku, Ru
        }
        Ru = Ku.mapped, yu--, Eu = Ku.selectionsAfter
      }
      return Eu.length ? [Iu.selection(Eu)] : nu
    }

    function cu(uu, Ru, yu) {
      let Eu = Uu(uu.selectionsAfter.length ? uu.selectionsAfter.map((uu => uu.map(Ru))) : nu, yu);
      if (!uu.changes) return Iu.selection(Eu);
      let Ku = uu.changes.map(Ru),
        Qu = Ru.mapDesc(uu.changes, !0),
        Ju = uu.mapped ? uu.mapped.composeDesc(Qu) : Qu;
      return new Iu(Ku, mu.B.mapEffects(uu.effects, Ru), Ju, uu.startSelection.map(Qu), Eu)
    }
    const Lu = /^(input\.type|delete)($|\.)/;
    class zu {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = uu, this.undone = Ru, this.prevTime = yu, this.prevUserEvent = Eu
      }
      isolate() {
        return this.prevTime ? new zu(this.done, this.undone) : this
      }
      addChanges(uu, Ru, yu, Eu, Ku) {
        let Qu = this.done,
          Ju = Qu[Qu.length - 1];
        return Qu = Ju && Ju.changes && !Ju.changes.empty && uu.changes && (!yu || Lu.test(yu)) && (!Ju.selectionsAfter.length && Ru - this.prevTime < Eu.newGroupDelay && Eu.joinToEvent(Ku, function(uu, Ru) {
          let yu = [],
            Eu = !1;
          return uu.iterChangedRanges(((uu, Ru) => yu.push(uu, Ru))), Ru.iterChangedRanges(((uu, Ru, Ku, Qu) => {
            for (let mu = 0; mu < yu.length;) {
              let uu = yu[mu++],
                Ru = yu[mu++];
              Qu >= uu && Ku <= Ru && (Eu = !0)
            }
          })), Eu
        }(Ju.changes, uu.changes)) || "input.type.compose" == yu) ? Gu(Qu, Qu.length - 1, Eu.minDepth, new Iu(uu.changes.compose(Ju.changes), Uu(mu.B.mapEffects(uu.effects, Ju.changes), Ju.effects), Ju.mapped, Ju.startSelection, nu)) : Gu(Qu, Qu.length, Eu.minDepth, uu), new zu(Qu, nu, Ru, yu)
      }
      addSelection(uu, Ru, yu, Eu) {
        let Ku = this.done.length ? this.done[this.done.length - 1].selectionsAfter : nu;
        return Ku.length > 0 && Ru - this.prevTime < Eu && yu == this.prevUserEvent && yu && /^select($|\.)/.test(yu) && (Qu = Ku[Ku.length - 1], mu = uu, Qu.yT.length == mu.yT.length && 0 === Qu.yT.filter(((uu, Ru) => uu.empty != mu.yT[Ru].empty)).length) ? this : new zu(tu(this.done, uu), this.undone, Ru, yu);
        var Qu, mu
      }
      addMapping(uu) {
        return new zu(gu(this.done, uu), gu(this.undone, uu), this.prevTime, this.prevUserEvent)
      }
      pop(uu, Ru, yu) {
        let Eu = 0 == uu ? this.done : this.undone;
        if (0 == Eu.length) return null;
        let Ku = Eu[Eu.length - 1],
          Qu = Ku.selectionsAfter[0] || (Ku.startSelection ? Ku.startSelection.map(Ku.changes.invertedDesc, 1) : Ru.selection);
        if (yu && Ku.selectionsAfter.length) return Ru.update({
          selection: Ku.selectionsAfter[Ku.selectionsAfter.length - 1],
          annotations: ju.of({
            side: uu,
            rest: lu(Eu),
            selection: Qu
          }),
          userEvent: 0 == uu ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Ku.changes) {
          let yu = 1 == Eu.length ? nu : Eu.slice(0, Eu.length - 1);
          return Ku.mapped && (yu = gu(yu, Ku.mapped)), Ru.update({
            changes: Ku.changes,
            selection: Ku.startSelection,
            effects: Ku.effects,
            annotations: ju.of({
              side: uu,
              rest: yu,
              selection: Qu
            }),
            filter: !1,
            userEvent: 0 == uu ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    zu.empty = new zu(nu, nu);
    const Fu = [{
      key: "Mod-z",
      run: eu,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: Au,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: Au,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Du,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Mu,
      preventDefault: !0
    }];

    function wu(uu, Ru) {
      return mu.n.create(uu.yT.map(Ru), uu.mainIndex)
    }

    function Zu(uu, Ru) {
      return uu.update({
        selection: Ru,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function hu(uu, Ru) {
      let {
        state: yu,
        dispatch: Eu
      } = uu, Ku = wu(yu.selection, Ru);
      return !Ku.eq(yu.selection, !0) && (Eu(Zu(yu, Ku)), !0)
    }

    function Pu(uu, Ru) {
      return mu.n.cursor(Ru ? uu.to : uu.from)
    }

    function iu(uu, Ru) {
      return hu(uu, (yu => yu.empty ? uu.moveByChar(yu, Ru) : Pu(yu, Ru)))
    }

    function Yu(uu) {
      return uu.textDirectionAt(uu.state.selection.main.head) == Ju.e.LTR
    }
    const ou = uu => iu(uu, !Yu(uu)),
      qu = uu => iu(uu, Yu(uu));

    function Ou(uu, Ru) {
      return hu(uu, (yu => yu.empty ? uu.moveByGroup(yu, Ru) : Pu(yu, Ru)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function vu(uu, Ru, yu) {
      if (Ru.type.prop(yu)) return !0;
      let Eu = Ru.to - Ru.from;
      return Eu && (Eu > 2 || /[^\s,.;:]/.test(uu.sliceDoc(Ru.from, Ru.to))) || Ru.firstChild
    }

    function au(uu, Ru, yu) {
      let Eu, Ku, Qu = (0, Nu.ob)(uu).resolveInner(Ru.head),
        Ju = yu ? Xu.i.closedBy : Xu.i.openedBy;
      for (let mu = Ru.head;;) {
        let Ru = yu ? Qu.childAfter(mu) : Qu.childBefore(mu);
        if (!Ru) break;
        vu(uu, Ru, Ju) ? Qu = Ru : mu = yu ? Ru.to : Ru.from
      }
      return Ku = Qu.type.prop(Ju) && (Eu = yu ? (0, Nu.cb)(uu, Qu.from, 1) : (0, Nu.cb)(uu, Qu.to, -1)) && Eu.matched ? yu ? Eu.end.to : Eu.end.from : yu ? Qu.to : Qu.from, mu.n.cursor(Ku, yu ? -1 : 1)
    }

    function fu(uu, Ru) {
      return hu(uu, (yu => {
        if (!yu.empty) return Pu(yu, Ru);
        let Eu = uu.moveVertically(yu, Ru);
        return Eu.head != yu.head ? Eu : uu.moveToLineBoundary(yu, Ru)
      }))
    }
    const uR = uu => fu(uu, !1),
      RR = uu => fu(uu, !0);

    function yR(uu) {
      let Ru, yu = uu.scrollDOM.clientHeight < uu.scrollDOM.scrollHeight - 2,
        Eu = 0,
        Ku = 0;
      if (yu) {
        for (let Ru of uu.state.facet(Ju.f.scrollMargins)) {
          let yu = Ru(uu);
          (null === yu || void 0 === yu ? void 0 : yu.top) && (Eu = Math.max(null === yu || void 0 === yu ? void 0 : yu.top, Eu)), (null === yu || void 0 === yu ? void 0 : yu.bottom) && (Ku = Math.max(null === yu || void 0 === yu ? void 0 : yu.bottom, Ku))
        }
        Ru = uu.scrollDOM.clientHeight - Eu - Ku
      } else Ru = (uu.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Eu,
        marginBottom: Ku,
        selfScroll: yu,
        height: Math.max(uu.defaultLineHeight, Ru - 5)
      }
    }

    function ER(uu, Ru) {
      let yu, Eu = yR(uu),
        {
          state: Ku
        } = uu,
        Qu = wu(Ku.selection, (yu => yu.empty ? uu.moveVertically(yu, Ru, Eu.height) : Pu(yu, Ru)));
      if (Qu.eq(Ku.selection)) return !1;
      if (Eu.selfScroll) {
        let Ru = uu.coordsAtPos(Ku.selection.main.head),
          mu = uu.scrollDOM.getBoundingClientRect(),
          Nu = mu.top + Eu.marginTop,
          Xu = mu.bottom - Eu.marginBottom;
        Ru && Ru.top > Nu && Ru.bottom < Xu && (yu = Ju.f.scrollIntoView(Qu.main.head, {
          y: "start",
          yMargin: Ru.top - Nu
        }))
      }
      return uu.dispatch(Zu(Ku, Qu), {
        effects: yu
      }), !0
    }
    const KR = uu => ER(uu, !1),
      QR = uu => ER(uu, !0);

    function mR(uu, Ru, yu) {
      let Eu = uu.lineBlockAt(Ru.head),
        Ku = uu.moveToLineBoundary(Ru, yu);
      if (Ku.head == Ru.head && Ku.head != (yu ? Eu.to : Eu.from) && (Ku = uu.moveToLineBoundary(Ru, yu, !1)), !yu && Ku.head == Eu.from && Eu.length) {
        let yu = /^\s*/.exec(uu.state.sliceDoc(Eu.from, Math.min(Eu.from + 100, Eu.to)))[0].length;
        yu && Ru.head != Eu.from + yu && (Ku = mu.n.cursor(Eu.from + yu))
      }
      return Ku
    }

    function JR(uu, Ru, yu) {
      let Eu = !1,
        Ku = wu(uu.selection, (Ru => {
          let Ku = (0, Nu.cb)(uu, Ru.head, -1) || (0, Nu.cb)(uu, Ru.head, 1) || Ru.head > 0 && (0, Nu.cb)(uu, Ru.head - 1, 1) || Ru.head < uu.doc.length && (0, Nu.cb)(uu, Ru.head + 1, -1);
          if (!Ku || !Ku.end) return Ru;
          Eu = !0;
          let Qu = Ku.start.from == Ru.head ? Ku.end.to : Ku.end.from;
          return yu ? mu.n.range(Ru.anchor, Qu) : mu.n.cursor(Qu)
        }));
      return !!Eu && (Ru(Zu(uu, Ku)), !0)
    }

    function NR(uu, Ru) {
      let yu = wu(uu.state.selection, (uu => {
        let yu = Ru(uu);
        return mu.n.range(uu.anchor, yu.head, yu.goalColumn, yu.bidiLevel || void 0, yu.assoc)
      }));
      return !yu.eq(uu.state.selection) && (uu.dispatch(Zu(uu.state, yu)), !0)
    }

    function XR(uu, Ru) {
      return NR(uu, (yu => uu.moveByChar(yu, Ru)))
    }
    const VR = uu => XR(uu, !Yu(uu)),
      rR = uu => XR(uu, Yu(uu));

    function BR(uu, Ru) {
      return NR(uu, (yu => uu.moveByGroup(yu, Ru)))
    }

    function xR(uu, Ru) {
      return NR(uu, (yu => uu.moveVertically(yu, Ru)))
    }
    const SR = uu => xR(uu, !1),
      pR = uu => xR(uu, !0);

    function TR(uu, Ru) {
      return NR(uu, (yu => uu.moveVertically(yu, Ru, yR(uu).height)))
    }
    const WR = uu => TR(uu, !1),
      jR = uu => TR(uu, !0),
      HR = uu => {
        let {
          state: Ru,
          dispatch: yu
        } = uu;
        return yu(Zu(Ru, {
          anchor: 0
        })), !0
      },
      dR = uu => {
        let {
          state: Ru,
          dispatch: yu
        } = uu;
        return yu(Zu(Ru, {
          anchor: Ru.doc.length
        })), !0
      },
      bR = uu => {
        let {
          state: Ru,
          dispatch: yu
        } = uu;
        return yu(Zu(Ru, {
          anchor: Ru.selection.main.anchor,
          head: 0
        })), !0
      },
      CR = uu => {
        let {
          state: Ru,
          dispatch: yu
        } = uu;
        return yu(Zu(Ru, {
          anchor: Ru.selection.main.anchor,
          head: Ru.doc.length
        })), !0
      };

    function kR(uu, Ru) {
      let {
        state: yu
      } = uu, Eu = yu.selection, Ku = yu.selection.yT.slice();
      for (let Qu of yu.selection.yT) {
        let Eu = yu.doc.lineAt(Qu.head);
        if (Ru ? Eu.to < uu.state.doc.length : Eu.from > 0)
          for (let yu = Qu;;) {
            let Qu = uu.moveVertically(yu, Ru);
            if (Qu.head < Eu.from || Qu.head > Eu.to) {
              Ku.some((uu => uu.head == Qu.head)) || Ku.push(Qu);
              break
            }
            if (Qu.head == yu.head) break;
            yu = Qu
          }
      }
      return Ku.length != Eu.yT.length && (uu.dispatch(Zu(yu, mu.n.create(Ku, Ku.length - 1))), !0)
    }

    function eR(uu, Ru) {
      if (uu.state.readOnly) return !1;
      let yu = "delete.selection",
        {
          state: Eu
        } = uu,
        Ku = Eu.changeByRange((Eu => {
          let {
            from: Ku,
            to: Qu
          } = Eu;
          if (Ku == Qu) {
            let mu = Ru(Eu);
            mu < Ku ? (yu = "delete.backward", mu = AR(uu, mu, !1)) : mu > Ku && (yu = "delete.forward", mu = AR(uu, mu, !0)), Ku = Math.min(Ku, mu), Qu = Math.max(Qu, mu)
          } else Ku = AR(uu, Ku, !1), Qu = AR(uu, Qu, !0);
          return Ku == Qu ? {
            range: Eu
          } : {
            changes: {
              from: Ku,
              to: Qu
            },
            range: mu.n.cursor(Ku, Ku < Eu.head ? -1 : 1)
          }
        }));
      return !Ku.changes.empty && (uu.dispatch(Eu.update(Ku, {
        scrollIntoView: !0,
        userEvent: yu,
        effects: "delete.selection" == yu ? Ju.f.announce.of(Eu.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function AR(uu, Ru, yu) {
      if (uu instanceof Ju.f)
        for (let Eu of uu.state.facet(Ju.f.atomicRanges).map((Ru => Ru(uu)))) Eu.between(Ru, Ru, ((uu, Eu) => {
          uu < Ru && Eu > Ru && (Ru = yu ? Eu : uu)
        }));
      return Ru
    }
    const DR = (uu, Ru, yu) => eR(uu, (Eu => {
        let Ku, Qu, Ju = Eu.from,
          {
            state: Xu
          } = uu,
          Vu = Xu.doc.lineAt(Ju);
        if (yu && !Ru && Ju > Vu.from && Ju < Vu.from + 200 && !/[^ \t]/.test(Ku = Vu.text.slice(0, Ju - Vu.from))) {
          if ("\t" == Ku[Ku.length - 1]) return Ju - 1;
          let uu = (0, mu.R)(Ku, Xu.tabSize) % (0, Nu.M)(Xu) || (0, Nu.M)(Xu);
          for (let Ru = 0; Ru < uu && " " == Ku[Ku.length - 1 - Ru]; Ru++) Ju--;
          Qu = Ju
        } else Qu = (0, mu.S)(Vu.text, Ju - Vu.from, Ru, Ru) + Vu.from, Qu == Ju && Vu.number != (Ru ? Xu.doc.lines : 1) ? Qu += Ru ? 1 : -1 : !Ru && /[\ufe00-\ufe0f]/.test(Vu.text.slice(Qu - Vu.from, Ju - Vu.from)) && (Qu = (0, mu.S)(Vu.text, Qu - Vu.from, !1, !1) + Vu.from);
        return Qu
      })),
      MR = uu => DR(uu, !1, !0),
      IR = uu => DR(uu, !0, !1),
      GR = (uu, Ru) => eR(uu, (yu => {
        let Eu = yu.head,
          {
            state: Ku
          } = uu,
          Qu = Ku.doc.lineAt(Eu),
          Ju = Ku.charCategorizer(Eu);
        for (let uu = null;;) {
          if (Eu == (Ru ? Qu.to : Qu.from)) {
            Eu == yu.head && Qu.number != (Ru ? Ku.doc.lines : 1) && (Eu += Ru ? 1 : -1);
            break
          }
          let Nu = (0, mu.S)(Qu.text, Eu - Qu.from, Ru) + Qu.from,
            Xu = Qu.text.slice(Math.min(Eu, Nu) - Qu.from, Math.max(Eu, Nu) - Qu.from),
            Vu = Ju(Xu);
          if (null != uu && Vu != uu) break;
          " " == Xu && Eu == yu.head || (uu = Vu), Eu = Nu
        }
        return Eu
      })),
      UR = uu => GR(uu, !1);

    function nR(uu) {
      let Ru = [],
        yu = -1;
      for (let Eu of uu.selection.yT) {
        let Ku = uu.doc.lineAt(Eu.from),
          Qu = uu.doc.lineAt(Eu.to);
        if (Eu.empty || Eu.to != Qu.from || (Qu = uu.doc.lineAt(Eu.to - 1)), yu >= Ku.number) {
          let uu = Ru[Ru.length - 1];
          uu.to = Qu.to, uu.yT.push(Eu)
        } else Ru.push({
          from: Ku.from,
          to: Qu.to,
          yT: [Eu]
        });
        yu = Qu.number + 1
      }
      return Ru
    }

    function sR(uu, Ru, yu) {
      if (uu.readOnly) return !1;
      let Eu = [],
        Ku = [];
      for (let Qu of nR(uu)) {
        if (yu ? Qu.to == uu.doc.length : 0 == Qu.from) continue;
        let Ru = uu.doc.lineAt(yu ? Qu.to + 1 : Qu.from - 1),
          Ju = Ru.length + 1;
        if (yu) {
          Eu.push({
            from: Qu.to,
            to: Ru.to
          }, {
            from: Qu.from,
            insert: Ru.text + uu.lineBreak
          });
          for (let Ru of Qu.yT) Ku.push(mu.n.range(Math.min(uu.doc.length, Ru.anchor + Ju), Math.min(uu.doc.length, Ru.head + Ju)))
        } else {
          Eu.push({
            from: Ru.from,
            to: Qu.from
          }, {
            from: Qu.to,
            insert: uu.lineBreak + Ru.text
          });
          for (let uu of Qu.yT) Ku.push(mu.n.range(uu.anchor - Ju, uu.head - Ju))
        }
      }
      return !!Eu.length && (Ru(uu.update({
        changes: Eu,
        scrollIntoView: !0,
        selection: mu.n.create(Ku, uu.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function tR(uu, Ru, yu) {
      if (uu.readOnly) return !1;
      let Eu = [];
      for (let Qu of nR(uu)) yu ? Eu.push({
        from: Qu.from,
        insert: uu.doc.slice(Qu.from, Qu.to) + uu.lineBreak
      }) : Eu.push({
        from: Qu.to,
        insert: uu.lineBreak + uu.doc.slice(Qu.from, Qu.to)
      });
      let Ku = uu.changes(Eu);
      return Ru(uu.update({
        changes: Ku,
        selection: uu.selection.map(Ku, yu ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const lR = gR(!1);

    function gR(uu) {
      return Ru => {
        let {
          state: yu,
          dispatch: Eu
        } = Ru;
        if (yu.readOnly) return !1;
        let Ku = yu.changeByRange((Ru => {
          let {
            from: Eu,
            to: Ku
          } = Ru, Qu = yu.doc.lineAt(Eu), Ju = !uu && Eu == Ku && function(uu, Ru) {
            if (/\(\)|\[\]|\{\}/.test(uu.sliceDoc(Ru - 1, Ru + 1))) return {
              from: Ru,
              to: Ru
            };
            let yu, Eu = (0, Nu.ob)(uu).resolveInner(Ru),
              Ku = Eu.childBefore(Ru),
              Qu = Eu.childAfter(Ru);
            return Ku && Qu && Ku.to <= Ru && Qu.from >= Ru && (yu = Ku.type.prop(Xu.i.closedBy)) && yu.indexOf(Qu.name) > -1 && uu.doc.lineAt(Ku.to).from == uu.doc.lineAt(Qu.from).from && !/\S/.test(uu.sliceDoc(Ku.to, Qu.from)) ? {
              from: Ku.to,
              to: Qu.from
            } : null
          }(yu, Eu);
          uu && (Eu = Ku = (Ku <= Qu.to ? Qu : yu.doc.lineAt(Ku)).to);
          let Vu = new Nu.f(yu, {
              simulateBreak: Eu,
              simulateDoubleBreak: !!Ju
            }),
            ru = (0, Nu.O)(Vu, Eu);
          for (null == ru && (ru = (0, mu.R)(/^\s*/.exec(yu.doc.lineAt(Eu).text)[0], yu.tabSize)); Ku < Qu.to && /\s/.test(Qu.text[Ku - Qu.from]);) Ku++;
          Ju ? ({
            from: Eu,
            to: Ku
          } = Ju) : Eu > Qu.from && Eu < Qu.from + 100 && !/\S/.test(Qu.text.slice(0, Eu)) && (Eu = Qu.from);
          let Bu = ["", (0, Nu.W)(yu, ru)];
          return Ju && Bu.push((0, Nu.W)(yu, Vu.lineIndent(Qu.from, -1))), {
            changes: {
              from: Eu,
              to: Ku,
              insert: mu.F.of(Bu)
            },
            range: mu.n.cursor(Eu + 1 + Bu[1].length)
          }
        }));
        return Eu(yu.update(Ku, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function cR(uu, Ru) {
      let yu = -1;
      return uu.changeByRange((Eu => {
        let Ku = [];
        for (let mu = Eu.from; mu <= Eu.to;) {
          let Qu = uu.doc.lineAt(mu);
          Qu.number > yu && (Eu.empty || Eu.to > Qu.from) && (Ru(Qu, Ku, Eu), yu = Qu.number), mu = Qu.to + 1
        }
        let Qu = uu.changes(Ku);
        return {
          changes: Ku,
          range: mu.n.range(Qu.mapPos(Eu.anchor, 1), Qu.mapPos(Eu.head, 1))
        }
      }))
    }
    const LR = uu => {
        let {
          state: Ru,
          dispatch: yu
        } = uu;
        return !Ru.readOnly && (yu(Ru.update(cR(Ru, ((uu, yu) => {
          yu.push({
            from: uu.from,
            insert: Ru.facet(Nu._)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      zR = uu => {
        let {
          state: Ru,
          dispatch: yu
        } = uu;
        return !Ru.readOnly && (yu(Ru.update(cR(Ru, ((uu, yu) => {
          let Eu = /^\s*/.exec(uu.text)[0];
          if (!Eu) return;
          let Ku = (0, mu.R)(Eu, Ru.tabSize),
            Qu = 0,
            Ju = (0, Nu.W)(Ru, Math.max(0, Ku - (0, Nu.M)(Ru)));
          for (; Qu < Eu.length && Qu < Ju.length && Eu.charCodeAt(Qu) == Ju.charCodeAt(Qu);) Qu++;
          yu.push({
            from: uu.from + Qu,
            to: uu.from + Eu.length,
            insert: Ju.slice(Qu)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      FR = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: uu => hu(uu, (Ru => au(uu.state, Ru, !Yu(uu)))),
        shift: uu => NR(uu, (Ru => au(uu.state, Ru, !Yu(uu))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: uu => hu(uu, (Ru => au(uu.state, Ru, Yu(uu)))),
        shift: uu => NR(uu, (Ru => au(uu.state, Ru, Yu(uu))))
      }, {
        key: "Alt-ArrowUp",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu;
          return sR(Ru, yu, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu;
          return tR(Ru, yu, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu;
          return sR(Ru, yu, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu;
          return tR(Ru, yu, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: uu => kR(uu, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: uu => kR(uu, !0)
      }, {
        key: "Escape",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu, Eu = Ru.selection, Ku = null;
          return Eu.yT.length > 1 ? Ku = mu.n.create([Eu.main]) : Eu.main.empty || (Ku = mu.n.create([mu.n.cursor(Eu.main.head)])), !!Ku && (yu(Zu(Ru, Ku)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: gR(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu, Eu = nR(Ru).map((uu => {
            let {
              from: yu,
              to: Eu
            } = uu;
            return mu.n.range(yu, Math.min(Eu + 1, Ru.doc.length))
          }));
          return yu(Ru.update({
            selection: mu.n.create(Eu),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu, Eu = wu(Ru.selection, (uu => {
            let yu = (0, Nu.ob)(Ru),
              Eu = yu.resolveStack(uu.from, 1);
            if (uu.empty) {
              let Ru = yu.resolveStack(uu.from, -1);
              Ru.node.from >= Eu.node.from && Ru.node.to <= Eu.node.to && (Eu = Ru)
            }
            for (let Ru = Eu; Ru; Ru = Ru.next) {
              let {
                node: yu
              } = Ru;
              if ((yu.from < uu.from && yu.to >= uu.to || yu.to > uu.to && yu.from <= uu.from) && Ru.next) return mu.n.range(yu.to, yu.from)
            }
            return uu
          }));
          return !Eu.eq(Ru.selection) && (yu(Zu(Ru, Eu)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: zR
      }, {
        key: "Mod-]",
        run: LR
      }, {
        key: "Mod-Alt-\\",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu;
          if (Ru.readOnly) return !1;
          let Eu = Object.create(null),
            Ku = new Nu.f(Ru, {
              overrideIndentation: uu => {
                let Ru = Eu[uu];
                return null == Ru ? -1 : Ru
              }
            }),
            Qu = cR(Ru, ((uu, yu, Qu) => {
              let mu = (0, Nu.O)(Ku, uu.from);
              if (null == mu) return;
              /\S/.test(uu.text) || (mu = 0);
              let Ju = /^\s*/.exec(uu.text)[0],
                Xu = (0, Nu.W)(Ru, mu);
              (Ju != Xu || Qu.from < uu.from + Ju.length) && (Eu[uu.from] = mu, yu.push({
                from: uu.from,
                to: uu.from + Ju.length,
                insert: Xu
              }))
            }));
          return Qu.changes.empty || yu(Ru.update(Qu, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: uu => {
          if (uu.state.readOnly) return !1;
          let {
            state: Ru
          } = uu, yu = Ru.changes(nR(Ru).map((uu => {
            let {
              from: yu,
              to: Eu
            } = uu;
            return yu > 0 ? yu-- : Eu < Ru.doc.length && Eu++, {
              from: yu,
              to: Eu
            }
          }))), Eu = wu(Ru.selection, (Ru => {
            let yu;
            if (uu.lineWrapping) {
              let Eu = uu.lineBlockAt(Ru.head),
                Ku = uu.coordsAtPos(Ru.head, Ru.assoc || 1);
              Ku && (yu = Eu.bottom + uu.documentTop - Ku.bottom + uu.defaultLineHeight / 2)
            }
            return uu.moveVertically(Ru, !0, yu)
          })).map(yu);
          return uu.dispatch({
            changes: yu,
            selection: Eu,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu;
          return JR(Ru, yu, !1)
        }
      }, {
        key: "Mod-/",
        run: uu => {
          let {
            state: Ru
          } = uu, yu = Ru.doc.lineAt(Ru.selection.main.from), Eu = Su(uu.state, yu.from);
          return Eu.line ? ru(uu) : !!Eu.block && xu(uu)
        }
      }, {
        key: "Alt-A",
        run: Bu
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: uu => (uu.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: ou,
        shift: VR,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: uu => Ou(uu, !Yu(uu)),
        shift: uu => BR(uu, !Yu(uu)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: uu => hu(uu, (Ru => mR(uu, Ru, !Yu(uu)))),
        shift: uu => NR(uu, (Ru => mR(uu, Ru, !Yu(uu)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: qu,
        shift: rR,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: uu => Ou(uu, Yu(uu)),
        shift: uu => BR(uu, Yu(uu)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: uu => hu(uu, (Ru => mR(uu, Ru, Yu(uu)))),
        shift: uu => NR(uu, (Ru => mR(uu, Ru, Yu(uu)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: uR,
        shift: SR,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: HR,
        shift: bR
      }, {
        mac: "Ctrl-ArrowUp",
        run: KR,
        shift: WR
      }, {
        key: "ArrowDown",
        run: RR,
        shift: pR,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: dR,
        shift: CR
      }, {
        mac: "Ctrl-ArrowDown",
        run: QR,
        shift: jR
      }, {
        key: "PageUp",
        run: KR,
        shift: WR
      }, {
        key: "PageDown",
        run: QR,
        shift: jR
      }, {
        key: "Home",
        run: uu => hu(uu, (Ru => mR(uu, Ru, !1))),
        shift: uu => NR(uu, (Ru => mR(uu, Ru, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: HR,
        shift: bR
      }, {
        key: "End",
        run: uu => hu(uu, (Ru => mR(uu, Ru, !0))),
        shift: uu => NR(uu, (Ru => mR(uu, Ru, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: dR,
        shift: CR
      }, {
        key: "Enter",
        run: lR,
        shift: lR
      }, {
        key: "Mod-a",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu;
          return yu(Ru.update({
            selection: {
              anchor: 0,
              head: Ru.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: MR,
        shift: MR,
        preventDefault: !0
      }, {
        key: "Delete",
        run: IR,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: UR,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: uu => GR(uu, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: uu => eR(uu, (Ru => {
          let yu = uu.moveToLineBoundary(Ru, !1).head;
          return Ru.head > yu ? yu : Math.max(0, Ru.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: uu => eR(uu, (Ru => {
          let yu = uu.moveToLineBoundary(Ru, !0).head;
          return Ru.head < yu ? yu : Math.min(uu.state.doc.length, Ru.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: ou,
        shift: VR,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: qu,
        shift: rR
      }, {
        key: "Ctrl-p",
        run: uR,
        shift: SR
      }, {
        key: "Ctrl-n",
        run: RR,
        shift: pR
      }, {
        key: "Ctrl-a",
        run: uu => hu(uu, (Ru => mu.n.cursor(uu.lineBlockAt(Ru.head).from, 1))),
        shift: uu => NR(uu, (Ru => mu.n.cursor(uu.lineBlockAt(Ru.head).from)))
      }, {
        key: "Ctrl-e",
        run: uu => hu(uu, (Ru => mu.n.cursor(uu.lineBlockAt(Ru.head).to, -1))),
        shift: uu => NR(uu, (Ru => mu.n.cursor(uu.lineBlockAt(Ru.head).to)))
      }, {
        key: "Ctrl-d",
        run: IR
      }, {
        key: "Ctrl-h",
        run: MR
      }, {
        key: "Ctrl-k",
        run: uu => eR(uu, (Ru => {
          let yu = uu.lineBlockAt(Ru.head).to;
          return Ru.head < yu ? yu : Math.min(uu.state.doc.length, Ru.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: UR
      }, {
        key: "Ctrl-o",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu;
          if (Ru.readOnly) return !1;
          let Eu = Ru.changeByRange((uu => ({
            changes: {
              from: uu.from,
              to: uu.to,
              insert: mu.F.of(["", ""])
            },
            range: mu.n.cursor(uu.from)
          })));
          return yu(Ru.update(Eu, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: uu => {
          let {
            state: Ru,
            dispatch: yu
          } = uu;
          if (Ru.readOnly) return !1;
          let Eu = Ru.changeByRange((uu => {
            if (!uu.empty || 0 == uu.from || uu.from == Ru.doc.length) return {
              range: uu
            };
            let yu = uu.from,
              Eu = Ru.doc.lineAt(yu),
              Ku = yu == Eu.from ? yu - 1 : (0, mu.S)(Eu.text, yu - Eu.from, !1) + Eu.from,
              Qu = yu == Eu.to ? yu + 1 : (0, mu.S)(Eu.text, yu - Eu.from, !0) + Eu.from;
            return {
              changes: {
                from: Ku,
                to: Qu,
                insert: Ru.doc.slice(yu, Qu).append(Ru.doc.slice(Ku, yu))
              },
              range: mu.n.cursor(Qu)
            }
          }));
          return !Eu.changes.empty && (yu(Ru.update(Eu, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: QR
      }].map((uu => ({
        mac: uu.key,
        run: uu.run,
        shift: uu.shift
      }))))),
      wR = {
        key: "Tab",
        run: LR,
        shift: zR
      };
    var ZR = yu(40953),
      hR = yu(40904),
      PR = yu(40961),
      iR = function(uu) {
        void 0 === uu && (uu = {});
        var {
          crosshairCursor: Ru = !1
        } = uu, yu = [];
        !1 !== uu.closeBracketsKeymap && (yu = yu.concat(hR.d)), !1 !== uu.defaultKeymap && (yu = yu.concat(FR)), !1 !== uu.searchKeymap && (yu = yu.concat(ZR.j)), !1 !== uu.historyKeymap && (yu = yu.concat(Fu)), !1 !== uu.foldKeymap && (yu = yu.concat(Nu.E)), !1 !== uu.completionKeymap && (yu = yu.concat(hR.n)), !1 !== uu.lintKeymap && (yu = yu.concat(PR.d));
        var Eu = [];
        return !1 !== uu.lineNumbers && Eu.push((0, Ju.T)()), !1 !== uu.highlightActiveLineGutter && Eu.push((0, Ju.H)()), !1 !== uu.highlightSpecialChars && Eu.push((0, Ju.N)()), !1 !== uu.history && Eu.push(function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [Cu, bu.of(uu), Ju.f.domEventHandlers({
            beforeinput(uu, Ru) {
              let yu = "historyUndo" == uu.inputType ? eu : "historyRedo" == uu.inputType ? Au : null;
              return !!yu && (uu.preventDefault(), yu(Ru))
            }
          })]
        }()), !1 !== uu.foldGutter && Eu.push((0, Nu.A)()), !1 !== uu.drawSelection && Eu.push((0, Ju.u)()), !1 !== uu.dropCursor && Eu.push((0, Ju.v)()), !1 !== uu.allowMultipleSelections && Eu.push(mu.o.allowMultipleSelections.of(!0)), !1 !== uu.indentOnInput && Eu.push((0, Nu.T)()), !1 !== uu.syntaxHighlighting && Eu.push((0, Nu.gb)(Nu.r, {
          fallback: !0
        })), !1 !== uu.bracketMatching && Eu.push((0, Nu.o)()), !1 !== uu.closeBrackets && Eu.push((0, hR.f)()), !1 !== uu.autocompletion && Eu.push((0, hR.c)()), !1 !== uu.rectangularSelection && Eu.push((0, Ju.$)()), !1 !== Ru && Eu.push((0, Ju.q)()), !1 !== uu.highlightActiveLine && Eu.push((0, Ju.J)()), !1 !== uu.highlightSelectionMatches && Eu.push((0, ZR.f)()), uu.tabSize && "number" === typeof uu.tabSize && Eu.push(Nu._.of(" ".repeat(uu.tabSize))), Eu.concat([Ju.S.of(yu.flat())]).filter(Boolean)
      },
      YR = yu(40940);
    const oR = "#e5c07b",
      qR = "#e06c75",
      OR = "#56b6c2",
      vR = "#ffffff",
      aR = "#abb2bf",
      fR = "#7d8799",
      uy = "#61afef",
      Ry = "#98c379",
      yy = "#d19a66",
      Ey = "#c678dd",
      Ky = "#21252b",
      Qy = "#2c313a",
      my = "#282c34",
      Jy = "#353a42",
      Ny = "#3E4451",
      Xy = "#528bff",
      Vy = Ju.f.theme({
        "&": {
          color: aR,
          backgroundColor: my
        },
        ".cm-content": {
          caretColor: Xy
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Xy
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Ny
        },
        ".cm-panels": {
          backgroundColor: Ky,
          color: aR
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
          backgroundColor: my,
          color: fR,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Qy
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Jy
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Jy,
          borderBottomColor: Jy
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Qy,
            color: aR
          }
        }
      }, {
        dark: !0
      }),
      ry = Nu.d.define([{
        tag: YR.p.keyword,
        color: Ey
      }, {
        tag: [YR.p.name, YR.p.deleted, YR.p.character, YR.p.propertyName, YR.p.macroName],
        color: qR
      }, {
        tag: [YR.p.function(YR.p.variableName), YR.p.labelName],
        color: uy
      }, {
        tag: [YR.p.color, YR.p.constant(YR.p.name), YR.p.standard(YR.p.name)],
        color: yy
      }, {
        tag: [YR.p.definition(YR.p.name), YR.p.separator],
        color: aR
      }, {
        tag: [YR.p.typeName, YR.p.className, YR.p.number, YR.p.changed, YR.p.annotation, YR.p.modifier, YR.p.self, YR.p.namespace],
        color: oR
      }, {
        tag: [YR.p.operator, YR.p.operatorKeyword, YR.p.url, YR.p.escape, YR.p.regexp, YR.p.link, YR.p.special(YR.p.string)],
        color: OR
      }, {
        tag: [YR.p.meta, YR.p.comment],
        color: fR
      }, {
        tag: YR.p.strong,
        fontWeight: "bold"
      }, {
        tag: YR.p.emphasis,
        fontStyle: "italic"
      }, {
        tag: YR.p.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: YR.p.link,
        color: fR,
        textDecoration: "underline"
      }, {
        tag: YR.p.heading,
        fontWeight: "bold",
        color: qR
      }, {
        tag: [YR.p.atom, YR.p.bool, YR.p.special(YR.p.variableName)],
        color: yy
      }, {
        tag: [YR.p.processingInstruction, YR.p.string, YR.p.inserted],
        color: Ry
      }, {
        tag: YR.p.invalid,
        color: vR
      }]),
      By = [Vy, (0, Nu.gb)(ry)];
    var xy = Ju.f.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Sy {
      constructor(uu, Ru) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = Ru, this.timeoutMS = Ru, this.callbacks.push(uu)
      }
      sr() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var uu = this.callbacks.slice();
          this.callbacks.length = 0, uu.forEach((uu => {
            try {
              uu()
            } catch (Ru) {
              console.error("TimeoutLatch callback error:", Ru)
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
    class py {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(uu) {
        this.latches.add(uu), this.start()
      }
      remove(uu) {
        this.latches.delete(uu), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((uu => {
            uu.sr(), uu.isDone && this.remove(uu)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Ty = null,
      Wy = mu.e.define(),
      jy = [];

    function Hy(uu) {
      var {
        value: Ru,
        selection: yu,
        onChange: Eu,
        onStatistics: Ku,
        onCreateEditor: Nu,
        onUpdate: Xu,
        extensions: Vu = jy,
        autoFocus: ru,
        theme: Bu = "light",
        height: xu = null,
        minHeight: Su = null,
        maxHeight: pu = null,
        width: Tu = null,
        minWidth: Wu = null,
        maxWidth: ju = null,
        placeholder: Hu = "",
        editable: du = !0,
        readOnly: bu = !1,
        indentWithTab: Cu = !0,
        basicSetup: ku = !0,
        root: eu,
        initialState: Au
      } = uu, [Du, Mu] = (0, Qu.useState)(), [Iu, Gu] = (0, Qu.useState)(), [Uu, nu] = (0, Qu.useState)(), su = (0, Qu.useState)((() => ({
        current: null
      })))[0], tu = (0, Qu.useState)((() => ({
        current: null
      })))[0], lu = Ju.f.theme({
        "&": {
          height: xu,
          minHeight: Su,
          maxHeight: pu,
          width: Tu,
          minWidth: Wu,
          maxWidth: ju
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), gu = Ju.f.updateListener.of((uu => {
        if (uu.docChanged && "function" === typeof Eu && !uu.transactions.some((uu => uu.annotation(Wy)))) {
          su.current ? su.current.reset() : (su.current = new Sy((() => {
            if (tu.current) {
              var uu = tu.current;
              tu.current = null, uu()
            }
            su.current = null
          }), 200), ("undefined" === typeof window ? new py : (Ty || (Ty = new py), Ty)).add(su.current));
          var Ru = uu.state.doc.toString();
          Eu(Ru, uu)
        }
        Ku && Ku((uu => ({
          line: uu.state.doc.lineAt(uu.state.selection.main.from),
          lineCount: uu.state.doc.lines,
          lineBreak: uu.state.lineBreak,
          length: uu.state.doc.length,
          readOnly: uu.state.readOnly,
          tabSize: uu.state.tabSize,
          selection: uu.state.selection,
          selectionAsSingle: uu.state.selection.asSingle().main,
          yT: uu.state.selection.yT,
          selectionCode: uu.state.sliceDoc(uu.state.selection.main.from, uu.state.selection.main.to),
          selections: uu.state.selection.yT.map((Ru => uu.state.sliceDoc(Ru.from, Ru.to))),
          selectedText: uu.state.selection.yT.some((uu => !uu.empty))
        }))(uu))
      })), cu = function(uu) {
        void 0 === uu && (uu = {});
        var {
          indentWithTab: Ru = !0,
          editable: yu = !0,
          readOnly: Eu = !1,
          theme: Ku = "light",
          placeholder: Qu = "",
          basicSetup: Nu = !0
        } = uu, Xu = [];
        switch (Ru && Xu.unshift(Ju.S.of([wR])), Nu && ("boolean" === typeof Nu ? Xu.unshift(iR()) : Xu.unshift(iR(Nu))), Qu && Xu.unshift((0, Ju.Z)(Qu)), Ku) {
          case "light":
            Xu.push(xy);
            break;
          case "dark":
            Xu.push(By);
            break;
          case "none":
            break;
          default:
            Xu.push(Ku)
        }
        return !1 === yu && Xu.push(Ju.f.editable.of(!1)), Eu && Xu.push(mu.o.readOnly.of(!0)), [...Xu]
      }({
        theme: Bu,
        editable: du,
        readOnly: bu,
        placeholder: Hu,
        indentWithTab: Cu,
        basicSetup: ku
      }), Lu = [gu, lu, ...cu];
      return Xu && "function" === typeof Xu && Lu.push(Ju.f.updateListener.of(Xu)), Lu = Lu.concat(Vu), (0, Qu.useLayoutEffect)((() => {
        if (Du && !Uu) {
          var uu = {
              doc: Ru,
              selection: yu,
              extensions: Lu
            },
            Eu = Au ? mu.o.fromJSON(Au.json, uu, Au.fields) : mu.o.create(uu);
          if (nu(Eu), !Iu) {
            var Ku = new Ju.f({
              state: Eu,
              parent: Du,
              root: eu
            });
            Gu(Ku), Nu && Nu(Ku, Eu)
          }
        }
        return () => {
          Iu && (nu(void 0), Gu(void 0))
        }
      }), [Du, Uu]), (0, Qu.useEffect)((() => {
        uu.container && Mu(uu.container)
      }), [uu.container]), (0, Qu.useEffect)((() => () => {
        Iu && (Iu.destroy(), Gu(void 0)), su.current && (su.current.cancel(), su.current = null)
      }), [Iu]), (0, Qu.useEffect)((() => {
        ru && Iu && Iu.focus()
      }), [ru, Iu]), (0, Qu.useEffect)((() => {
        Iu && Iu.dispatch({
          effects: mu.B.reconfigure.of(Lu)
        })
      }), [Bu, Vu, xu, Su, pu, Tu, Wu, ju, Hu, du, bu, Cu, ku, Eu, Xu]), (0, Qu.useEffect)((() => {
        if (void 0 !== Ru) {
          var uu = Iu ? Iu.state.doc.toString() : "";
          if (Iu && Ru !== uu) {
            var yu = () => {
              Iu && Ru !== Iu.state.doc.toString() && Iu.dispatch({
                changes: {
                  from: 0,
                  to: Iu.state.doc.toString().length,
                  insert: Ru || ""
                },
                annotations: [Wy.of(!0)]
              })
            };
            su.current && !su.current.isDone ? tu.current = yu : yu()
          }
        }
      }), [Ru, Iu]), {
        state: Uu,
        setState: nu,
        view: Iu,
        setView: Gu,
        container: Du,
        setContainer: Mu
      }
    }
    var dy = yu(1079),
      by = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      Cy = (0, Qu.forwardRef)(((uu, Ru) => {
        var {
          className: yu,
          value: mu = "",
          selection: Ju,
          extensions: Nu = [],
          onChange: Xu,
          onStatistics: Vu,
          onCreateEditor: ru,
          onUpdate: Bu,
          autoFocus: xu,
          theme: Su = "light",
          height: pu,
          minHeight: Tu,
          maxHeight: Wu,
          width: ju,
          minWidth: Hu,
          maxWidth: du,
          basicSetup: bu,
          placeholder: Cu,
          indentWithTab: ku,
          editable: eu,
          readOnly: Au,
          root: Du,
          initialState: Mu
        } = uu, Iu = (0, Ku.e)(uu, by), Gu = (0, Qu.useRef)(null), {
          state: Uu,
          view: nu,
          container: su,
          setContainer: tu
        } = Hy({
          root: Du,
          value: mu,
          autoFocus: xu,
          theme: Su,
          height: pu,
          minHeight: Tu,
          maxHeight: Wu,
          width: ju,
          minWidth: Hu,
          maxWidth: du,
          basicSetup: bu,
          placeholder: Cu,
          indentWithTab: ku,
          editable: eu,
          readOnly: Au,
          selection: Ju,
          onChange: Xu,
          onStatistics: Vu,
          onCreateEditor: ru,
          onUpdate: Bu,
          extensions: Nu,
          initialState: Mu
        });
        (0, Qu.useImperativeHandle)(Ru, (() => ({
          editor: Gu.current,
          state: Uu,
          view: nu
        })), [Gu, su, Uu, nu]);
        var lu = (0, Qu.useCallback)((uu => {
          Gu.current = uu, tu(uu)
        }), [tu]);
        if ("string" !== typeof mu) throw new Error("value must be typeof string but got " + typeof mu);
        var gu = "string" === typeof Su ? "cm-theme-" + Su : "cm-theme";
        return (0, dy.jsx)("div", (0, Eu.d)({
          ref: lu,
          className: gu + (yu ? " " + yu : "")
        }, Iu))
      }));
    Cy.displayName = "CodeMirror";
    const ky = Cy
  },
  40923: (uu, Ru, yu) => {
    function Eu() {
      var uu = arguments[0];
      "string" == typeof uu && (uu = document.createElement(uu));
      var Ru = 1,
        yu = arguments[1];
      if (yu && "object" == typeof yu && null == yu.nodeType && !Array.isArray(yu)) {
        for (var Eu in yu)
          if (Object.prototype.hasOwnProperty.call(yu, Eu)) {
            var Qu = yu[Eu];
            "string" == typeof Qu ? uu.setAttribute(Eu, Qu) : null != Qu && (uu[Eu] = Qu)
          } Ru++
      }
      for (; Ru < arguments.length; Ru++) Ku(uu, arguments[Ru]);
      return uu
    }

    function Ku(uu, Ru) {
      if ("string" == typeof Ru) uu.appendChild(document.createTextNode(Ru));
      else if (null == Ru);
      else if (null != Ru.nodeType) uu.appendChild(Ru);
      else {
        if (!Array.isArray(Ru)) throw new RangeError("Unsupported child node: " + Ru);
        for (var yu = 0; yu < Ru.length; yu++) Ku(uu, Ru[yu])
      }
    }
    yu.d(Ru, {
      e: () => Eu
    })
  },
  40918: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    const Eu = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Ku = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      Qu = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class mu {
      constructor(uu, Ru) {
        this.rules = [];
        let {
          finish: yu
        } = Ru || {};

        function Eu(uu) {
          return /^@/.test(uu) ? [uu] : uu.split(/,\s*/)
        }

        function Ku(uu, Ru, Qu, mu) {
          let Ju = [],
            Nu = /^@(\w+)\b/.exec(uu[0]),
            Xu = Nu && "keyframes" == Nu[1];
          if (Nu && null == Ru) return Qu.push(uu[0] + ";");
          for (let yu in Ru) {
            let mu = Ru[yu];
            if (/&/.test(yu)) Ku(yu.split(/,\s*/).map((Ru => uu.map((uu => Ru.replace(/&/, uu))))).reduce(((uu, Ru) => uu.concat(Ru))), mu, Qu);
            else if (mu && "object" == typeof mu) {
              if (!Nu) throw new RangeError("The value of a property (" + yu + ") should be a primitive value.");
              Ku(Eu(yu), mu, Ju, Xu)
            } else null != mu && Ju.push(yu.replace(/_.*/, "").replace(/[A-Z]/g, (uu => "-" + uu.toLowerCase())) + ": " + mu + ";")
          }(Ju.length || Xu) && Qu.push((!yu || Nu || mu ? uu : uu.map(yu)).join(", ") + " {" + Ju.join(" ") + "}")
        }
        for (let Qu in uu) Ku(Eu(Qu), uu[Qu], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let uu = Qu[Eu] || 1;
        return Qu[Eu] = uu + 1, "\u037c" + uu.toString(36)
      }
      static mount(uu, Ru, yu) {
        let Eu = uu[Ku],
          Qu = yu && yu.nonce;
        Eu ? Qu && Eu.setNonce(Qu) : Eu = new Nu(uu, Qu), Eu.mount(Array.isArray(Ru) ? Ru : [Ru], uu)
      }
    }
    let Ju = new Map;
    class Nu {
      constructor(uu, Ru) {
        let yu = uu.ownerDocument || uu,
          Eu = yu.defaultView;
        if (!uu.head && uu.adoptedStyleSheets && Eu.CSSStyleSheet) {
          let Ru = Ju.get(yu);
          if (Ru) return uu[Ku] = Ru;
          this.sheet = new Eu.CSSStyleSheet, Ju.set(yu, this)
        } else this.styleTag = yu.createElement("style"), Ru && this.styleTag.setAttribute("nonce", Ru);
        this.modules = [], uu[Ku] = this
      }
      mount(uu, Ru) {
        let yu = this.sheet,
          Eu = 0,
          Ku = 0;
        for (let Qu = 0; Qu < uu.length; Qu++) {
          let Ru = uu[Qu],
            mu = this.modules.indexOf(Ru);
          if (mu < Ku && mu > -1 && (this.modules.splice(mu, 1), Ku--, mu = -1), -1 == mu) {
            if (this.modules.splice(Ku++, 0, Ru), yu)
              for (let uu = 0; uu < Ru.rules.length; uu++) yu.insertRule(Ru.rules[uu], Eu++)
          } else {
            for (; Ku < mu;) Eu += this.modules[Ku++].rules.length;
            Eu += Ru.rules.length, Ku++
          }
        }
        if (yu) Ru.adoptedStyleSheets.indexOf(this.sheet) < 0 && (Ru.adoptedStyleSheets = [this.sheet, ...Ru.adoptedStyleSheets]);
        else {
          let uu = "";
          for (let Ru = 0; Ru < this.modules.length; Ru++) uu += this.modules[Ru].getRules() + "\n";
          this.styleTag.textContent = uu;
          let yu = Ru.head || Ru;
          this.styleTag.parentNode != yu && yu.insertBefore(this.styleTag, yu.firstChild)
        }
      }
      setNonce(uu) {
        this.styleTag && this.styleTag.getAttribute("nonce") != uu && this.styleTag.setAttribute("nonce", uu)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);