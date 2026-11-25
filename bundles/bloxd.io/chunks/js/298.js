export const id = 298;
export const ids = [298];
export const modules = {
  41541: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => KE,
      d: () => JE,
      h: () => gE,
      l: () => qu,
      m: () => VE,
      p: () => fu,
      r: () => cE
    });
    var su = ju(41550),
      Uu = ju(41553),
      Zu = ju(41571);
    class Xu {
      constructor(uu, Eu, ju, su) {
        this.state = uu, this.pos = Eu, this.explicit = ju, this.view = su, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(uu) {
        let Eu = (0, Zu.qb)(this.state).resolveInner(this.pos, -1);
        for (; Eu && uu.indexOf(Eu.name) < 0;) Eu = Eu.parent;
        return Eu ? {
          from: Eu.from,
          to: this.pos,
          text: this.state.sliceDoc(Eu.from, this.pos),
          type: Eu.type
        } : null
      }
      matchBefore(uu) {
        let Eu = this.state.doc.lineAt(this.pos),
          ju = Math.max(Eu.from, this.pos - 250),
          su = Eu.text.slice(ju - Eu.from, this.pos - Eu.from),
          Uu = su.search(cu(uu, !1));
        return Uu < 0 ? null : {
          from: ju + Uu,
          to: this.pos,
          text: su.slice(Uu)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(uu, Eu, ju) {
        "abort" == uu && this.abortListeners && (this.abortListeners.push(Eu), ju && ju.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function lu(uu) {
      let Eu = Object.keys(uu).join(""),
        ju = /\w/.test(Eu);
      return ju && (Eu = Eu.replace(/\w/g, "")), `[${ju?"\\w":""}${Eu.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function qu(uu) {
      let Eu = uu.map((uu => "string" == typeof uu ? {
          label: uu
        } : uu)),
        [ju, su] = Eu.every((uu => /^\w+$/.test(uu.label))) ? [/\w*$/, /\w+$/] : function(uu) {
          let Eu = Object.create(null),
            ju = Object.create(null);
          for (let {
              label: Uu
            }
            of uu) {
            Eu[Uu[0]] = !0;
            for (let uu = 1; uu < Uu.length; uu++) ju[Uu[uu]] = !0
          }
          let su = lu(Eu) + lu(ju) + "*$";
          return [new RegExp("^" + su), new RegExp(su)]
        }(Eu);
      return uu => {
        let Uu = uu.matchBefore(su);
        return Uu || uu.explicit ? {
          from: Uu ? Uu.from : uu.pos,
          options: Eu,
          validFor: ju
        } : null
      }
    }

    function fu(uu, Eu) {
      return ju => {
        for (let Eu = (0, Zu.qb)(ju.state).resolveInner(ju.pos, -1); Eu; Eu = Eu.parent) {
          if (uu.indexOf(Eu.name) > -1) return null;
          if (Eu.type.isTop) break
        }
        return Eu(ju)
      }
    }
    class Cu {
      constructor(uu, Eu, ju, su) {
        this.completion = uu, this.source = Eu, this.match = ju, this.score = su
      }
    }

    function bu(uu) {
      return uu.selection.main.from
    }

    function cu(uu, Eu) {
      var ju;
      let {
        source: su
      } = uu, Uu = Eu && "^" != su[0], Zu = "$" != su[su.length - 1];
      return Uu || Zu ? new RegExp(`${Uu?"^":""}(?:${su})${Zu?"$":""}`, null !== (ju = uu.flags) && void 0 !== ju ? ju : uu.ignoreCase ? "i" : "") : uu
    }
    const Nu = su.b.define();

    function Ou(uu, Eu, ju, Uu) {
      let {
        main: Zu
      } = uu.selection, Xu = ju - Zu.from, lu = Uu - Zu.from;
      return {
        ...uu.changeByRange((qu => {
          if (qu != Zu && ju != Uu && uu.sliceDoc(qu.from + Xu, qu.from + lu) != uu.sliceDoc(ju, Uu)) return {
            range: qu
          };
          let fu = uu.toText(Eu);
          return {
            changes: {
              from: qu.from + Xu,
              to: Uu == Zu.from ? qu.to : qu.from + lu,
              insert: fu
            },
            range: su.l.cursor(qu.from + Xu + fu.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Yu = new WeakMap;

    function hu(uu) {
      if (!Array.isArray(uu)) return uu;
      let Eu = Yu.get(uu);
      return Eu || Yu.set(uu, Eu = qu(uu)), Eu
    }
    const Du = su.L.define(),
      gu = su.L.define();
    class Mu {
      constructor(uu) {
        this.pattern = uu, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let Eu = 0; Eu < uu.length;) {
          let ju = (0, su.T)(uu, Eu),
            Uu = (0, su.X)(ju);
          this.chars.push(ju);
          let Zu = uu.slice(Eu, Eu + Uu),
            Xu = Zu.toUpperCase();
          this.folded.push((0, su.T)(Xu == Zu ? Zu.toLowerCase() : Xu, 0)), Eu += Uu
        }
        this.astral = uu.length != this.chars.length
      }
      ret(uu, Eu) {
        return this.score = uu, this.matched = Eu, this
      }
      match(uu) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (uu.length < this.pattern.length) return null;
        let {
          chars: Eu,
          folded: ju,
          any: Uu,
          precise: Zu,
          byWord: Xu
        } = this;
        if (1 == Eu.length) {
          let Uu = (0, su.T)(uu, 0),
            Zu = (0, su.X)(Uu),
            Xu = Zu == uu.length ? 0 : -100;
          if (Uu == Eu[0]);
          else {
            if (Uu != ju[0]) return null;
            Xu += -200
          }
          return this.ret(Xu, [0, Zu])
        }
        let lu = uu.indexOf(this.pattern);
        if (0 == lu) return this.ret(uu.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let qu = Eu.length,
          fu = 0;
        if (lu < 0) {
          for (let Zu = 0, Xu = Math.min(uu.length, 200); Zu < Xu && fu < qu;) {
            let Xu = (0, su.T)(uu, Zu);
            Xu != Eu[fu] && Xu != ju[fu] || (Uu[fu++] = Zu), Zu += (0, su.X)(Xu)
          }
          if (fu < qu) return null
        }
        let Cu = 0,
          bu = 0,
          cu = !1,
          Nu = 0,
          Ou = -1,
          Yu = -1,
          hu = /[a-z]/.test(uu),
          Du = !0;
        for (let gu = 0, Mu = Math.min(uu.length, 200), eu = 0; gu < Mu && bu < qu;) {
          let Uu = (0, su.T)(uu, gu);
          lu < 0 && (Cu < qu && Uu == Eu[Cu] && (Zu[Cu++] = gu), Nu < qu && (Uu == Eu[Nu] || Uu == ju[Nu] ? (0 == Nu && (Ou = gu), Yu = gu + 1, Nu++) : Nu = 0));
          let fu, Mu = Uu < 255 ? Uu >= 48 && Uu <= 57 || Uu >= 97 && Uu <= 122 ? 2 : Uu >= 65 && Uu <= 90 ? 1 : 0 : (fu = (0, su.jb)(Uu)) != fu.toLowerCase() ? 1 : fu != fu.toUpperCase() ? 2 : 0;
          (!gu || 1 == Mu && hu || 0 == eu && 0 != Mu) && (Eu[bu] == Uu || ju[bu] == Uu && (cu = !0) ? Xu[bu++] = gu : Xu.length && (Du = !1)), eu = Mu, gu += (0, su.X)(Uu)
        }
        return bu == qu && 0 == Xu[0] && Du ? this.result((cu ? -200 : 0) - 100, Xu, uu) : Nu == qu && 0 == Ou ? this.ret(-200 - uu.length + (Yu == uu.length ? 0 : -100), [0, Yu]) : lu > -1 ? this.ret(-700 - uu.length, [lu, lu + this.pattern.length]) : Nu == qu ? this.ret(-900 - uu.length, [Ou, Yu]) : bu == qu ? this.result((cu ? -200 : 0) - 100 - 700 + (Du ? 0 : -1100), Xu, uu) : 2 == Eu.length ? null : this.result((Uu[0] ? -700 : 0) - 200 - 1100, Uu, uu)
      }
      result(uu, Eu, ju) {
        let Uu = [],
          Zu = 0;
        for (let Xu of Eu) {
          let uu = Xu + (this.astral ? (0, su.X)((0, su.T)(ju, Xu)) : 1);
          Zu && Uu[Zu - 1] == Xu ? Uu[Zu - 1] = uu : (Uu[Zu++] = Xu, Uu[Zu++] = uu)
        }
        return this.ret(uu - ju.length, Uu)
      }
    }
    class eu {
      constructor(uu) {
        this.pattern = uu, this.matched = [], this.score = 0, this.folded = uu.toLowerCase()
      }
      match(uu) {
        if (uu.length < this.pattern.length) return null;
        let Eu = uu.slice(0, this.pattern.length),
          ju = Eu == this.pattern ? 0 : Eu.toLowerCase() == this.folded ? -200 : null;
        return null == ju ? null : (this.matched = [0, Eu.length], this.score = ju + (uu.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const Gu = su.r.define({
      combine: uu => (0, su.Z)(uu, {
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
        positionInfo: wu,
        filterStrict: !1,
        compareCompletions: (uu, Eu) => (uu.sortText || uu.label).localeCompare(Eu.sortText || Eu.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (uu, Eu) => uu && Eu,
        closeOnBlur: (uu, Eu) => uu && Eu,
        icons: (uu, Eu) => uu && Eu,
        tooltipClass: (uu, Eu) => ju => pu(uu(ju), Eu(ju)),
        optionClass: (uu, Eu) => ju => pu(uu(ju), Eu(ju)),
        addToOptions: (uu, Eu) => uu.concat(Eu),
        filterStrict: (uu, Eu) => uu || Eu
      })
    });

    function pu(uu, Eu) {
      return uu ? Eu ? uu + " " + Eu : uu : Eu
    }

    function wu(uu, Eu, ju, su, Zu, Xu) {
      let lu, qu, fu = uu.textDirection == Uu.h.RTL,
        Cu = fu,
        bu = !1,
        cu = "top",
        Nu = Eu.left - Zu.left,
        Ou = Zu.right - Eu.right,
        Yu = su.right - su.left,
        hu = su.bottom - su.top;
      if (Cu && Nu < Math.min(Yu, Ou) ? Cu = !1 : !Cu && Ou < Math.min(Yu, Nu) && (Cu = !0), Yu <= (Cu ? Nu : Ou)) lu = Math.max(Zu.top, Math.min(ju.top, Zu.bottom - hu)) - Eu.top, qu = Math.min(400, Cu ? Nu : Ou);
      else {
        bu = !0, qu = Math.min(400, (fu ? Eu.right : Zu.right - Eu.left) - 30);
        let uu = Zu.bottom - Eu.bottom;
        uu >= hu || uu > Eu.top ? lu = ju.bottom - Eu.top : (cu = "bottom", lu = Eu.bottom - ju.top)
      }
      return {
        style: `${cu}: ${lu/((Eu.bottom-Eu.top)/Xu.offsetHeight)}px; max-width: ${qu/((Eu.right-Eu.left)/Xu.offsetWidth)}px`,
        class: "cm-completionInfo-" + (bu ? fu ? "left-narrow" : "right-narrow" : Cu ? "left" : "right")
      }
    }
    const Ju = su.L.define();

    function du(uu, Eu, ju) {
      if (uu <= ju) return {
        from: 0,
        to: uu
      };
      if (Eu < 0 && (Eu = 0), Eu <= uu >> 1) {
        let uu = Math.floor(Eu / ju);
        return {
          from: uu * ju,
          to: (uu + 1) * ju
        }
      }
      let su = Math.floor((uu - Eu) / ju);
      return {
        from: uu - (su + 1) * ju,
        to: uu - su * ju
      }
    }
    class au {
      constructor(uu, Eu, ju) {
        this.view = uu, this.stateField = Eu, this.applyCompletion = ju, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: uu => this.placeInfo(uu),
          key: this
        }, this.space = null, this.currentClass = "";
        let su = uu.state.field(Eu),
          {
            options: Uu,
            selected: Zu
          } = su.open,
          Xu = uu.state.facet(Gu);
        this.optionContent = function(uu) {
          let Eu = uu.addToOptions.slice();
          return uu.icons && Eu.push({
            render(uu) {
              let Eu = document.createElement("div");
              return Eu.classList.add("cm-completionIcon"), uu.type && Eu.classList.add(...uu.type.split(/\s+/g).map((uu => "cm-completionIcon-" + uu))), Eu.setAttribute("aria-hidden", "true"), Eu
            },
            position: 20
          }), Eu.push({
            render(uu, Eu, ju, su) {
              let Uu = document.createElement("span");
              Uu.className = "cm-completionLabel";
              let Zu = uu.displayLabel || uu.label,
                Xu = 0;
              for (let lu = 0; lu < su.length;) {
                let uu = su[lu++],
                  Eu = su[lu++];
                uu > Xu && Uu.appendChild(document.createTextNode(Zu.slice(Xu, uu)));
                let ju = Uu.appendChild(document.createElement("span"));
                ju.appendChild(document.createTextNode(Zu.slice(uu, Eu))), ju.className = "cm-completionMatchedText", Xu = Eu
              }
              return Xu < Zu.length && Uu.appendChild(document.createTextNode(Zu.slice(Xu))), Uu
            },
            position: 50
          }, {
            render(uu) {
              if (!uu.detail) return null;
              let Eu = document.createElement("span");
              return Eu.className = "cm-completionDetail", Eu.textContent = uu.detail, Eu
            },
            position: 80
          }), Eu.sort(((uu, Eu) => uu.position - Eu.position)).map((uu => uu.render))
        }(Xu), this.optionClass = Xu.optionClass, this.tooltipClass = Xu.tooltipClass, this.range = du(Uu.length, Zu, Xu.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(uu.state), this.dom.addEventListener("mousedown", (ju => {
          let {
            options: su
          } = uu.state.field(Eu).open;
          for (let Eu, Uu = ju.target; Uu && Uu != this.dom; Uu = Uu.parentNode)
            if ("LI" == Uu.nodeName && (Eu = /-(\d+)$/.exec(Uu.id)) && +Eu[1] < su.length) return this.applyCompletion(uu, su[+Eu[1]]), void ju.preventDefault();
          if (ju.target == this.list) {
            let Eu = this.list.classList.contains("cm-completionListIncompleteTop") && ju.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && ju.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != Eu && (uu.dispatch({
              effects: Ju.of(Eu)
            }), ju.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (Eu => {
          let ju = uu.state.field(this.stateField, !1);
          ju && ju.tooltip && uu.state.facet(Gu).closeOnBlur && Eu.relatedTarget != uu.contentDOM && uu.dispatch({
            effects: gu.of(null)
          })
        })), this.showOptions(Uu, su.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(uu, Eu) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(uu, Eu, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(uu) {
        var Eu;
        let ju = uu.state.field(this.stateField),
          su = uu.startState.field(this.stateField);
        if (this.updateTooltipClass(uu.state), ju != su) {
          let {
            options: Uu,
            selected: Zu,
            disabled: Xu
          } = ju.open;
          su.open && su.open.options == Uu || (this.range = du(Uu.length, Zu, uu.state.facet(Gu).maxRenderedOptions), this.showOptions(Uu, ju.id)), this.updateSel(), Xu != (null === (Eu = su.open) || void 0 === Eu ? void 0 : Eu.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!Xu)
        }
      }
      updateTooltipClass(uu) {
        let Eu = this.tooltipClass(uu);
        if (Eu != this.currentClass) {
          for (let uu of this.currentClass.split(" ")) uu && this.dom.classList.remove(uu);
          for (let uu of Eu.split(" ")) uu && this.dom.classList.add(uu);
          this.currentClass = Eu
        }
      }
      positioned(uu) {
        this.space = uu, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let uu = this.view.state.field(this.stateField),
          Eu = uu.open;
        (Eu.selected > -1 && Eu.selected < this.range.from || Eu.selected >= this.range.to) && (this.range = du(Eu.options.length, Eu.selected, this.view.state.facet(Gu).maxRenderedOptions), this.showOptions(Eu.options, uu.id));
        let ju = this.updateSelectedOption(Eu.selected);
        if (ju) {
          this.destroyInfo();
          let {
            completion: su
          } = Eu.options[Eu.selected], {
            info: Zu
          } = su;
          if (!Zu) return;
          let Xu = "string" === typeof Zu ? document.createTextNode(Zu) : Zu(su);
          if (!Xu) return;
          "then" in Xu ? Xu.then((Eu => {
            Eu && this.view.state.field(this.stateField, !1) == uu && this.addInfoPane(Eu, su)
          })).catch((uu => (0, Uu.Y)(this.view.state, uu, "completion info"))) : (this.addInfoPane(Xu, su), ju.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(uu, Eu) {
        this.destroyInfo();
        let ju = this.info = document.createElement("div");
        if (ju.className = "cm-tooltip cm-completionInfo", ju.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != uu.nodeType) ju.appendChild(uu), this.infoDestroy = null;
        else {
          let {
            dom: Eu,
            destroy: su
          } = uu;
          ju.appendChild(Eu), this.infoDestroy = su || null
        }
        this.dom.appendChild(ju), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(uu) {
        let Eu = null;
        for (let ju = this.list.firstChild, su = this.range.from; ju; ju = ju.nextSibling, su++) "LI" == ju.nodeName && ju.id ? su == uu ? ju.hasAttribute("aria-selected") || (ju.setAttribute("aria-selected", "true"), Eu = ju) : ju.hasAttribute("aria-selected") && (ju.removeAttribute("aria-selected"), ju.removeAttribute("aria-describedby")) : su--;
        return Eu && function(uu, Eu) {
          let ju = uu.getBoundingClientRect(),
            su = Eu.getBoundingClientRect(),
            Uu = ju.height / uu.offsetHeight;
          su.top < ju.top ? uu.scrollTop -= (ju.top - su.top) / Uu : su.bottom > ju.bottom && (uu.scrollTop += (su.bottom - ju.bottom) / Uu)
        }(this.list, Eu), Eu
      }
      measureInfo() {
        let uu = this.dom.querySelector("[aria-selected]");
        if (!uu || !this.info) return null;
        let Eu = this.dom.getBoundingClientRect(),
          ju = this.info.getBoundingClientRect(),
          su = uu.getBoundingClientRect(),
          Uu = this.space;
        if (!Uu) {
          let uu = this.dom.ownerDocument.documentElement;
          Uu = {
            left: 0,
            top: 0,
            right: uu.clientWidth,
            bottom: uu.clientHeight
          }
        }
        return su.top > Math.min(Uu.bottom, Eu.bottom) - 10 || su.bottom < Math.max(Uu.top, Eu.top) + 10 ? null : this.view.state.facet(Gu).positionInfo(this.view, Eu, su, ju, Uu, this.dom)
      }
      placeInfo(uu) {
        this.info && (uu ? (uu.style && (this.info.style.cssText = uu.style), this.info.className = "cm-tooltip cm-completionInfo " + (uu.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(uu, Eu, ju) {
        const su = document.createElement("ul");
        su.id = Eu, su.setAttribute("role", "listbox"), su.setAttribute("aria-expanded", "true"), su.setAttribute("aria-label", this.view.state.phrase("Completions")), su.addEventListener("mousedown", (uu => {
          uu.target == su && uu.preventDefault()
        }));
        let Uu = null;
        for (let Zu = ju.from; Zu < ju.to; Zu++) {
          let {
            completion: Xu,
            match: lu
          } = uu[Zu], {
            section: qu
          } = Xu;
          if (qu) {
            let uu = "string" == typeof qu ? qu : qu.name;
            if (uu != Uu && (Zu > ju.from || 0 == ju.from))
              if (Uu = uu, "string" != typeof qu && qu.header) su.appendChild(qu.header(qu));
              else {
                su.appendChild(document.createElement("completion-section")).textContent = uu
              }
          }
          const fu = su.appendChild(document.createElement("li"));
          fu.id = Eu + "-" + Zu, fu.setAttribute("role", "option");
          let Cu = this.optionClass(Xu);
          Cu && (fu.className = Cu);
          for (let uu of this.optionContent) {
            let Eu = uu(Xu, this.view.state, this.view, lu);
            Eu && fu.appendChild(Eu)
          }
        }
        return ju.from && su.classList.add("cm-completionListIncompleteTop"), ju.to < uu.length && su.classList.add("cm-completionListIncompleteBottom"), su
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Pu(uu, Eu) {
      return ju => new au(ju, uu, Eu)
    }

    function ou(uu) {
      return 100 * (uu.boost || 0) + (uu.apply ? 10 : 0) + (uu.info ? 5 : 0) + (uu.type ? 1 : 0)
    }
    class ku {
      constructor(uu, Eu, ju, su, Uu, Zu) {
        this.options = uu, this.attrs = Eu, this.tooltip = ju, this.timestamp = su, this.selected = Uu, this.disabled = Zu
      }
      setSelected(uu, Eu) {
        return uu == this.selected || uu >= this.options.length ? this : new ku(this.options, Vu(Eu, uu), this.tooltip, this.timestamp, uu, this.disabled)
      }
      static build(uu, Eu, ju, su, Uu, Zu) {
        if (su && !Zu && uu.some((uu => uu.isPending))) return su.setDisabled();
        let Xu = function(uu, Eu) {
          let ju = [],
            su = null,
            Uu = null,
            Zu = uu => {
              ju.push(uu);
              let {
                section: Eu
              } = uu.completion;
              if (Eu) {
                su || (su = []);
                let uu = "string" == typeof Eu ? Eu : Eu.name;
                su.some((Eu => Eu.name == uu)) || su.push("string" == typeof Eu ? {
                  name: uu
                } : Eu)
              }
            },
            Xu = Eu.facet(Gu);
          for (let bu of uu)
            if (bu.hasResult()) {
              let uu = bu.result.getMatch;
              if (!1 === bu.result.filter)
                for (let Eu of bu.result.options) Zu(new Cu(Eu, bu.source, uu ? uu(Eu) : [], 1e9 - ju.length));
              else {
                let ju, su = Eu.sliceDoc(bu.from, bu.to),
                  lu = Xu.filterStrict ? new eu(su) : new Mu(su);
                for (let Eu of bu.result.options)
                  if (ju = lu.match(Eu.label)) {
                    let su = Eu.displayLabel ? uu ? uu(Eu, ju.matched) : [] : ju.matched,
                      Xu = ju.score + (Eu.boost || 0);
                    if (Zu(new Cu(Eu, bu.source, su, Xu)), "object" == typeof Eu.section && "dynamic" === Eu.section.rank) {
                      let {
                        name: uu
                      } = Eu.section;
                      Uu || (Uu = Object.create(null)), Uu[uu] = Math.max(Xu, Uu[uu] || -1e9)
                    }
                  }
              }
            } if (su) {
            let uu = Object.create(null),
              Eu = 0,
              Zu = (uu, Eu) => ("dynamic" === uu.rank && "dynamic" === Eu.rank ? Uu[Eu.name] - Uu[uu.name] : 0) || ("number" == typeof uu.rank ? uu.rank : 1e9) - ("number" == typeof Eu.rank ? Eu.rank : 1e9) || (uu.name < Eu.name ? -1 : 1);
            for (let ju of su.sort(Zu)) Eu -= 1e5, uu[ju.name] = Eu;
            for (let su of ju) {
              let {
                section: Eu
              } = su.completion;
              Eu && (su.score += uu["string" == typeof Eu ? Eu : Eu.name])
            }
          }
          let lu = [],
            qu = null,
            fu = Xu.compareCompletions;
          for (let Cu of ju.sort(((uu, Eu) => Eu.score - uu.score || fu(uu.completion, Eu.completion)))) {
            let uu = Cu.completion;
            !qu || qu.label != uu.label || qu.detail != uu.detail || null != qu.type && null != uu.type && qu.type != uu.type || qu.apply != uu.apply || qu.boost != uu.boost ? lu.push(Cu) : ou(Cu.completion) > ou(qu) && (lu[lu.length - 1] = Cu), qu = Cu.completion
          }
          return lu
        }(uu, Eu);
        if (!Xu.length) return su && uu.some((uu => uu.isPending)) ? su.setDisabled() : null;
        let lu = Eu.facet(Gu).selectOnOpen ? 0 : -1;
        if (su && su.selected != lu && -1 != su.selected) {
          let uu = su.options[su.selected].completion;
          for (let Eu = 0; Eu < Xu.length; Eu++)
            if (Xu[Eu].completion == uu) {
              lu = Eu;
              break
            }
        }
        return new ku(Xu, Vu(ju, lu), {
          pos: uu.reduce(((uu, Eu) => Eu.hasResult() ? Math.min(uu, Eu.from) : uu), 1e8),
          create: Bu,
          above: Uu.aboveCursor
        }, su ? su.timestamp : Date.now(), lu, !1)
      }
      map(uu) {
        return new ku(this.options, this.attrs, {
          ...this.tooltip,
          pos: uu.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new ku(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class mu {
      constructor(uu, Eu, ju) {
        this.active = uu, this.id = Eu, this.open = ju
      }
      static start() {
        return new mu(ru, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(uu) {
        let {
          state: Eu
        } = uu, ju = Eu.facet(Gu), su = (ju.override || Eu.languageDataAt("autocomplete", bu(Eu)).map(hu)).map((Eu => (this.active.find((uu => uu.source == Eu)) || new iu(Eu, this.active.some((uu => 0 != uu.state)) ? 1 : 0)).update(uu, ju)));
        su.length == this.active.length && su.every(((uu, Eu) => uu == this.active[Eu])) && (su = this.active);
        let Uu = this.open,
          Zu = uu.effects.some((uu => uu.is(Su)));
        Uu && uu.docChanged && (Uu = Uu.map(uu.changes)), uu.selection || su.some((Eu => Eu.hasResult() && uu.changes.touchesRange(Eu.from, Eu.to))) || ! function(uu, Eu) {
          if (uu == Eu) return !0;
          for (let ju = 0, su = 0;;) {
            for (; ju < uu.length && !uu[ju].hasResult();) ju++;
            for (; su < Eu.length && !Eu[su].hasResult();) su++;
            let Uu = ju == uu.length,
              Zu = su == Eu.length;
            if (Uu || Zu) return Uu == Zu;
            if (uu[ju++].result != Eu[su++].result) return !1
          }
        }(su, this.active) || Zu ? Uu = ku.build(su, Eu, this.id, Uu, ju, Zu) : Uu && Uu.disabled && !su.some((uu => uu.isPending)) && (Uu = null), !Uu && su.every((uu => !uu.isPending)) && su.some((uu => uu.hasResult())) && (su = su.map((uu => uu.hasResult() ? new iu(uu.source, 0) : uu)));
        for (let Xu of uu.effects) Xu.is(Ju) && (Uu = Uu && Uu.setSelected(Xu.value, this.id));
        return su == this.active && Uu == this.open ? this : new mu(su, this.id, Uu)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? vu : Ku
      }
    }
    const vu = {
        "aria-autocomplete": "list"
      },
      Ku = {};

    function Vu(uu, Eu) {
      let ju = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": uu
      };
      return Eu > -1 && (ju["aria-activedescendant"] = uu + "-" + Eu), ju
    }
    const ru = [];

    function Qu(uu, Eu) {
      if (uu.isUserEvent("input.complete")) {
        let ju = uu.annotation(Nu);
        if (ju && Eu.activateOnCompletion(ju)) return 12
      }
      let ju = uu.isUserEvent("input.type");
      return ju && Eu.activateOnTyping ? 5 : ju ? 1 : uu.isUserEvent("delete.backward") ? 2 : uu.selection ? 8 : uu.docChanged ? 16 : 0
    }
    class iu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = uu, this.state = Eu, this.explicit = ju
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(uu, Eu) {
        let ju = Qu(uu, Eu),
          su = this;
        (8 & ju || 16 & ju && this.touches(uu)) && (su = new iu(su.source, 0)), 4 & ju && 0 == su.state && (su = new iu(this.source, 1)), su = su.updateFor(uu, ju);
        for (let Uu of uu.effects)
          if (Uu.is(Du)) su = new iu(su.source, 1, Uu.value);
          else if (Uu.is(gu)) su = new iu(su.source, 0);
        else if (Uu.is(Su))
          for (let uu of Uu.value) uu.source == su.source && (su = uu);
        return su
      }
      updateFor(uu, Eu) {
        return this.map(uu.changes)
      }
      map(uu) {
        return this
      }
      touches(uu) {
        return uu.changes.touchesRange(bu(uu.state))
      }
    }
    class Wu extends iu {
      constructor(uu, Eu, ju, su, Uu, Zu) {
        super(uu, 3, Eu), this.limit = ju, this.result = su, this.from = Uu, this.to = Zu
      }
      hasResult() {
        return !0
      }
      updateFor(uu, Eu) {
        var ju;
        if (!(3 & Eu)) return this.map(uu.changes);
        let su = this.result;
        su.map && !uu.changes.empty && (su = su.map(su, uu.changes));
        let Uu = uu.changes.mapPos(this.from),
          Zu = uu.changes.mapPos(this.to, 1),
          lu = bu(uu.state);
        if (lu > Zu || !su || 2 & Eu && (bu(uu.startState) == this.from || lu < this.limit)) return new iu(this.source, 4 & Eu ? 1 : 0);
        let qu = uu.changes.mapPos(this.limit);
        return function(uu, Eu, ju, su) {
          if (!uu) return !1;
          let Uu = Eu.sliceDoc(ju, su);
          return "function" == typeof uu ? uu(Uu, ju, su, Eu) : cu(uu, !0).test(Uu)
        }(su.validFor, uu.state, Uu, Zu) ? new Wu(this.source, this.explicit, qu, su, Uu, Zu) : su.update && (su = su.update(su, Uu, Zu, new Xu(uu.state, lu, !1))) ? new Wu(this.source, this.explicit, qu, su, su.from, null !== (ju = su.to) && void 0 !== ju ? ju : bu(uu.state)) : new iu(this.source, 1, this.explicit)
      }
      map(uu) {
        if (uu.empty) return this;
        return (this.result.map ? this.result.map(this.result, uu) : this.result) ? new Wu(this.source, this.explicit, uu.mapPos(this.limit), this.result, uu.mapPos(this.from), uu.mapPos(this.to, 1)) : new iu(this.source, 0)
      }
      touches(uu) {
        return uu.changes.touchesRange(this.from, this.to)
      }
    }
    const Su = su.L.define({
        map: (uu, Eu) => uu.map((uu => uu.map(Eu)))
      }),
      Iu = su.N.define({
        create: () => mu.start(),
        update: (uu, Eu) => uu.update(Eu),
        provide: uu => [Uu.ib.from(uu, (uu => uu.tooltip)), Uu.l.contentAttributes.from(uu, (uu => uu.attrs))]
      });

    function Fu(uu, Eu) {
      const ju = Eu.completion.apply || Eu.completion.label;
      let su = uu.state.field(Iu).active.find((uu => uu.source == Eu.source));
      return su instanceof Wu && ("string" == typeof ju ? uu.dispatch({
        ...Ou(uu.state, ju, su.from, su.to),
        annotations: Nu.of(Eu.completion)
      }) : ju(uu, Eu.completion, su.from, su.to), !0)
    }
    const Bu = Pu(Iu, Fu);

    function Lu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return ju => {
        let su = ju.state.field(Iu, !1);
        if (!su || !su.open || su.open.disabled || Date.now() - su.open.timestamp < ju.state.facet(Gu).interactionDelay) return !1;
        let Zu, Xu = 1;
        "page" == Eu && (Zu = (0, Uu.G)(ju, su.open.tooltip)) && (Xu = Math.max(2, Math.floor(Zu.dom.offsetHeight / Zu.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: lu
        } = su.open.options, qu = su.open.selected > -1 ? su.open.selected + Xu * (uu ? 1 : -1) : uu ? 0 : lu - 1;
        return qu < 0 ? qu = "page" == Eu ? 0 : lu - 1 : qu >= lu && (qu = "page" == Eu ? lu - 1 : 0), ju.dispatch({
          effects: Ju.of(qu)
        }), !0
      }
    }
    const tu = uu => !!uu.state.field(Iu, !1) && (uu.dispatch({
      effects: Du.of(!0)
    }), !0);
    class xu {
      constructor(uu, Eu) {
        this.active = uu, this.context = Eu, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const Tu = Uu.o.fromClass(class {
        constructor(uu) {
          this.view = uu, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let Eu of uu.state.field(Iu).active) Eu.isPending && this.startQuery(Eu)
        }
        update(uu) {
          let Eu = uu.state.field(Iu),
            ju = uu.state.facet(Gu);
          if (!uu.selectionSet && !uu.docChanged && uu.startState.field(Iu) == Eu) return;
          let su = uu.transactions.some((uu => {
            let Eu = Qu(uu, ju);
            return 8 & Eu || (uu.selection || uu.docChanged) && !(3 & Eu)
          }));
          for (let lu = 0; lu < this.running.length; lu++) {
            let Eu = this.running[lu];
            if (su || Eu.context.abortOnDocChange && uu.docChanged || Eu.updates.length + uu.transactions.length > 50 && Date.now() - Eu.time > 1e3) {
              for (let uu of Eu.context.abortListeners) try {
                uu()
              } catch (Xu) {
                (0, Uu.Y)(this.view.state, Xu)
              }
              Eu.context.abortListeners = null, this.running.splice(lu--, 1)
            } else Eu.updates.push(...uu.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), uu.transactions.some((uu => uu.effects.some((uu => uu.is(Du))))) && (this.pendingStart = !0);
          let Zu = this.pendingStart ? 50 : ju.activateOnTypingDelay;
          if (this.debounceUpdate = Eu.active.some((uu => uu.isPending && !this.running.some((Eu => Eu.active.source == uu.source)))) ? setTimeout((() => this.startUpdate()), Zu) : -1, 0 != this.composing)
            for (let Uu of uu.transactions) Uu.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Uu.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: uu
          } = this.view, Eu = uu.field(Iu);
          for (let ju of Eu.active) ju.isPending && !this.running.some((uu => uu.active.source == ju.source)) && this.startQuery(ju);
          this.running.length && Eu.open && Eu.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Gu).updateSyncTime))
        }
        startQuery(uu) {
          let {
            state: Eu
          } = this.view, ju = bu(Eu), su = new Xu(Eu, ju, uu.explicit, this.view), Zu = new xu(uu, su);
          this.running.push(Zu), Promise.resolve(uu.source(su)).then((uu => {
            Zu.context.aborted || (Zu.done = uu || null, this.scheduleAccept())
          }), (uu => {
            this.view.dispatch({
              effects: gu.of(null)
            }), (0, Uu.Y)(this.view.state, uu)
          }))
        }
        scheduleAccept() {
          this.running.every((uu => void 0 !== uu.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Gu).updateSyncTime))
        }
        accept() {
          var uu;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let Eu = [],
            ju = this.view.state.facet(Gu),
            su = this.view.state.field(Iu);
          for (let Uu = 0; Uu < this.running.length; Uu++) {
            let Zu = this.running[Uu];
            if (void 0 === Zu.done) continue;
            if (this.running.splice(Uu--, 1), Zu.done) {
              let su = bu(Zu.updates.length ? Zu.updates[0].startState : this.view.state),
                Uu = Math.min(su, Zu.done.from + (Zu.active.explicit ? 0 : 1)),
                Xu = new Wu(Zu.active.source, Zu.active.explicit, Uu, Zu.done, Zu.done.from, null !== (uu = Zu.done.to) && void 0 !== uu ? uu : su);
              for (let uu of Zu.updates) Xu = Xu.update(uu, ju);
              if (Xu.hasResult()) {
                Eu.push(Xu);
                continue
              }
            }
            let Xu = su.active.find((uu => uu.source == Zu.active.source));
            if (Xu && Xu.isPending)
              if (null == Zu.done) {
                let uu = new iu(Zu.active.source, 0);
                for (let Eu of Zu.updates) uu = uu.update(Eu, ju);
                uu.isPending || Eu.push(uu)
              } else this.startQuery(Xu)
          }(Eu.length || su.open && su.open.disabled) && this.view.dispatch({
            effects: Su.of(Eu)
          })
        }
      }, {
        eventHandlers: {
          blur(uu) {
            let Eu = this.view.state.field(Iu, !1);
            if (Eu && Eu.tooltip && this.view.state.facet(Gu).closeOnBlur) {
              let ju = Eu.open && (0, Uu.G)(this.view, Eu.open.tooltip);
              ju && ju.dom.contains(uu.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: gu.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: Du.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      Hu = "object" == typeof navigator && /Win/.test(navigator.platform),
      Au = su.y.highest(Uu.l.domEventHandlers({
        keydown(uu, Eu) {
          let ju = Eu.state.field(Iu, !1);
          if (!ju || !ju.open || ju.open.disabled || ju.open.selected < 0 || uu.key.length > 1 || uu.ctrlKey && (!Hu || !uu.altKey) || uu.metaKey) return !1;
          let su = ju.open.options[ju.open.selected],
            Uu = ju.active.find((uu => uu.source == su.source)),
            Zu = su.completion.commitCharacters || Uu.result.commitCharacters;
          return Zu && Zu.indexOf(uu.key) > -1 && Fu(Eu, su), !1
        }
      })),
      nu = Uu.l.baseTheme({
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
    class yu {
      constructor(uu, Eu, ju, su) {
        this.field = uu, this.line = Eu, this.from = ju, this.to = su
      }
    }
    class zu {
      constructor(uu, Eu, ju) {
        this.field = uu, this.from = Eu, this.to = ju
      }
      map(uu) {
        let Eu = uu.mapPos(this.from, -1, su.u.TrackDel),
          ju = uu.mapPos(this.to, 1, su.u.TrackDel);
        return null == Eu || null == ju ? null : new zu(this.field, Eu, ju)
      }
    }
    class Ru {
      constructor(uu, Eu) {
        this.lines = uu, this.fieldPositions = Eu
      }
      instantiate(uu, Eu) {
        let ju = [],
          su = [Eu],
          Uu = uu.doc.lineAt(Eu),
          Xu = /^\s*/.exec(Uu.text)[0];
        for (let qu of this.lines) {
          if (ju.length) {
            let ju = Xu,
              Uu = /^\t*/.exec(qu)[0].length;
            for (let Eu = 0; Eu < Uu; Eu++) ju += uu.facet(Zu.db);
            su.push(Eu + ju.length - Uu), qu = ju + qu.slice(Uu)
          }
          ju.push(qu), Eu += qu.length + 1
        }
        let lu = this.fieldPositions.map((uu => new zu(uu.field, su[uu.line] + uu.from, su[uu.line] + uu.to)));
        return {
          text: ju,
          HY: lu
        }
      }
      static parse(uu) {
        let Eu, ju = [],
          su = [],
          Uu = [];
        for (let Zu of uu.split(/\r\n?|\n/)) {
          for (; Eu = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Zu);) {
            let uu = Eu[1] ? +Eu[1] : null,
              Xu = Eu[2] || Eu[3] || "",
              lu = -1,
              qu = Xu.replace(/\\[{}]/g, (uu => uu[1]));
            for (let Eu = 0; Eu < ju.length; Eu++)(null != uu ? ju[Eu].seq == uu : qu && ju[Eu].name == qu) && (lu = Eu);
            if (lu < 0) {
              let Eu = 0;
              for (; Eu < ju.length && (null == uu || null != ju[Eu].seq && ju[Eu].seq < uu);) Eu++;
              ju.splice(Eu, 0, {
                seq: uu,
                name: qu
              }), lu = Eu;
              for (let uu of Uu) uu.field >= lu && uu.field++
            }
            for (let ju of Uu)
              if (ju.line == su.length && ju.from > Eu.index) {
                let uu = Eu[2] ? 3 + (Eu[1] || "").length : 2;
                ju.from -= uu, ju.to -= uu
              } Uu.push(new yu(lu, su.length, Eu.index, Eu.index + qu.length)), Zu = Zu.slice(0, Eu.index) + Xu + Zu.slice(Eu.index + Eu[0].length)
          }
          Zu = Zu.replace(/\\([{}])/g, ((uu, Eu, ju) => {
            for (let Zu of Uu) Zu.line == su.length && Zu.from > ju && (Zu.from--, Zu.to--);
            return Eu
          })), su.push(Zu)
        }
        return new Ru(su, Uu)
      }
    }
    let uE = Uu.e.widget({
        widget: new class extends Uu.r {
          toDOM() {
            let uu = document.createElement("span");
            return uu.className = "cm-snippetFieldPosition", uu
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      EE = Uu.e.mark({
        class: "cm-snippetField"
      });
    class jE {
      constructor(uu, Eu) {
        this.HY = uu, this.active = Eu, this.deco = Uu.e.set(uu.map((uu => (uu.from == uu.to ? uE : EE).range(uu.from, uu.to))), !0)
      }
      map(uu) {
        let Eu = [];
        for (let ju of this.HY) {
          let su = ju.map(uu);
          if (!su) return null;
          Eu.push(su)
        }
        return new jE(Eu, this.active)
      }
      selectionInsideField(uu) {
        return uu.HY.every((uu => this.HY.some((Eu => Eu.field == this.active && Eu.from <= uu.from && Eu.to >= uu.to))))
      }
    }
    const sE = su.L.define({
        map: (uu, Eu) => uu && uu.map(Eu)
      }),
      UE = su.L.define(),
      ZE = su.N.define({
        create: () => null,
        update(uu, Eu) {
          for (let ju of Eu.effects) {
            if (ju.is(sE)) return ju.value;
            if (ju.is(UE) && uu) return new jE(uu.HY, ju.value)
          }
          return uu && Eu.docChanged && (uu = uu.map(Eu.changes)), uu && Eu.selection && !uu.selectionInsideField(Eu.selection) && (uu = null), uu
        },
        provide: uu => Uu.l.Cs.from(uu, (uu => uu ? uu.deco : Uu.e.none))
      });

    function XE(uu, Eu) {
      return su.l.create(uu.filter((uu => uu.field == Eu)).map((uu => su.l.range(uu.from, uu.to))))
    }

    function lE(uu) {
      let Eu = Ru.parse(uu);
      return (uu, ju, Uu, Zu) => {
        let {
          text: Xu,
          HY: lu
        } = Eu.instantiate(uu.state, Uu), {
          main: qu
        } = uu.state.selection, fu = {
          changes: {
            from: Uu,
            to: Zu == qu.from ? qu.to : Zu,
            insert: su.P.of(Xu)
          },
          scrollIntoView: !0,
          annotations: ju ? [Nu.of(ju), su.Q.userEvent.of("input.complete")] : void 0
        };
        if (lu.length && (fu.selection = XE(lu, 0)), lu.some((uu => uu.field > 0))) {
          let Eu = new jE(lu, 0),
            ju = fu.effects = [sE.of(Eu)];
          void 0 === uu.state.field(ZE, !1) && ju.push(su.L.appendConfig.of([ZE, bE, NE, nu]))
        }
        uu.dispatch(uu.state.update(fu))
      }
    }

    function qE(uu) {
      return Eu => {
        let {
          state: ju,
          dispatch: su
        } = Eu, Uu = ju.field(ZE, !1);
        if (!Uu || uu < 0 && 0 == Uu.active) return !1;
        let Zu = Uu.active + uu,
          Xu = uu > 0 && !Uu.HY.some((Eu => Eu.field == Zu + uu));
        return su(ju.update({
          selection: XE(Uu.HY, Zu),
          effects: sE.of(Xu ? null : new jE(Uu.HY, Zu)),
          scrollIntoView: !0
        })), !0
      }
    }
    const fE = [{
        key: "Tab",
        run: qE(1),
        shift: qE(-1)
      }, {
        key: "Escape",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu;
          return !!Eu.field(ZE, !1) && (ju(Eu.update({
            effects: sE.of(null)
          })), !0)
        }
      }],
      CE = su.r.define({
        combine: uu => uu.length ? uu[0] : fE
      }),
      bE = su.y.highest(Uu.V.compute([CE], (uu => uu.facet(CE))));

    function cE(uu, Eu) {
      return {
        ...Eu,
        apply: lE(uu)
      }
    }
    const NE = Uu.l.domEventHandlers({
      mousedown(uu, Eu) {
        let ju, su = Eu.state.field(ZE, !1);
        if (!su || null == (ju = Eu.posAtCoords({
            x: uu.clientX,
            y: uu.clientY
          }))) return !1;
        let Uu = su.HY.find((uu => uu.from <= ju && uu.to >= ju));
        return !(!Uu || Uu.field == su.active) && (Eu.dispatch({
          selection: XE(su.HY, Uu.field),
          effects: sE.of(su.HY.some((uu => uu.field > Uu.field)) ? new jE(su.HY, Uu.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const OE = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      YE = su.L.define({
        map(uu, Eu) {
          let ju = Eu.mapPos(uu, -1, su.u.TrackAfter);
          return null == ju ? void 0 : ju
        }
      }),
      hE = new class extends su.I {};
    hE.startSide = 1, hE.endSide = -1;
    const DE = su.N.define({
      create: () => su.E.empty,
      update(uu, Eu) {
        if (uu = uu.map(Eu.changes), Eu.selection) {
          let ju = Eu.state.doc.lineAt(Eu.selection.main.head);
          uu = uu.update({
            filter: uu => uu >= ju.from && uu <= ju.to
          })
        }
        for (let ju of Eu.effects) ju.is(YE) && (uu = uu.update({
          add: [hE.range(ju.value, ju.value + 1)]
        }));
        return uu
      }
    });

    function gE() {
      return [wE, DE]
    }
    const ME = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function eE(uu) {
      for (let Eu = 0; Eu < 16; Eu += 2)
        if (ME.charCodeAt(Eu) == uu) return ME.charAt(Eu + 1);
      return (0, su.jb)(uu < 128 ? uu : uu + 1)
    }

    function GE(uu, Eu) {
      return uu.languageDataAt("closeBrackets", Eu)[0] || OE
    }
    const pE = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      wE = Uu.l.inputHandler.of(((uu, Eu, ju, Uu) => {
        if ((pE ? uu.composing : uu.compositionStarted) || uu.state.readOnly) return !1;
        let Zu = uu.state.selection.main;
        if (Uu.length > 2 || 2 == Uu.length && 1 == (0, su.X)((0, su.T)(Uu, 0)) || Eu != Zu.from || ju != Zu.to) return !1;
        let Xu = function(uu, Eu) {
          let ju = GE(uu, uu.selection.main.head),
            Uu = ju.brackets || OE.brackets;
          for (let Zu of Uu) {
            let Xu = eE((0, su.T)(Zu, 0));
            if (Eu == Zu) return Xu == Zu ? kE(uu, Zu, Uu.indexOf(Zu + Zu + Zu) > -1, ju) : PE(uu, Zu, Xu, ju.before || OE.before);
            if (Eu == Xu && dE(uu, uu.selection.main.from)) return oE(uu, Zu, Xu)
          }
          return null
        }(uu.state, Uu);
        return !!Xu && (uu.dispatch(Xu), !0)
      })),
      JE = [{
        key: "Backspace",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu;
          if (Eu.readOnly) return !1;
          let Uu = GE(Eu, Eu.selection.main.head).brackets || OE.brackets,
            Zu = null,
            Xu = Eu.changeByRange((uu => {
              if (uu.empty) {
                let ju = function(uu, Eu) {
                  let ju = uu.sliceString(Eu - 2, Eu);
                  return (0, su.X)((0, su.T)(ju, 0)) == ju.length ? ju : ju.slice(1)
                }(Eu.doc, uu.head);
                for (let Zu of Uu)
                  if (Zu == ju && aE(Eu.doc, uu.head) == eE((0, su.T)(Zu, 0))) return {
                    changes: {
                      from: uu.head - Zu.length,
                      to: uu.head + Zu.length
                    },
                    range: su.l.cursor(uu.head - Zu.length)
                  }
              }
              return {
                range: Zu = uu
              }
            }));
          return Zu || ju(Eu.update(Xu, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !Zu
        }
      }];

    function dE(uu, Eu) {
      let ju = !1;
      return uu.field(DE).between(0, uu.doc.length, (uu => {
        uu == Eu && (ju = !0)
      })), ju
    }

    function aE(uu, Eu) {
      let ju = uu.sliceString(Eu, Eu + 2);
      return ju.slice(0, (0, su.X)((0, su.T)(ju, 0)))
    }

    function PE(uu, Eu, ju, Uu) {
      let Zu = null,
        Xu = uu.changeByRange((Xu => {
          if (!Xu.empty) return {
            changes: [{
              insert: Eu,
              from: Xu.from
            }, {
              insert: ju,
              from: Xu.to
            }],
            effects: YE.of(Xu.to + Eu.length),
            range: su.l.range(Xu.anchor + Eu.length, Xu.head + Eu.length)
          };
          let lu = aE(uu.doc, Xu.head);
          return !lu || /\s/.test(lu) || Uu.indexOf(lu) > -1 ? {
            changes: {
              insert: Eu + ju,
              from: Xu.head
            },
            effects: YE.of(Xu.head + Eu.length),
            range: su.l.cursor(Xu.head + Eu.length)
          } : {
            range: Zu = Xu
          }
        }));
      return Zu ? null : uu.update(Xu, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function oE(uu, Eu, ju) {
      let Uu = null,
        Zu = uu.changeByRange((Eu => Eu.empty && aE(uu.doc, Eu.head) == ju ? {
          changes: {
            from: Eu.head,
            to: Eu.head + ju.length,
            insert: ju
          },
          range: su.l.cursor(Eu.head + ju.length)
        } : Uu = {
          range: Eu
        }));
      return Uu ? null : uu.update(Zu, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function kE(uu, Eu, ju, Uu) {
      let Xu = Uu.stringPrefixes || OE.stringPrefixes,
        lu = null,
        qu = uu.changeByRange((Uu => {
          if (!Uu.empty) return {
            changes: [{
              insert: Eu,
              from: Uu.from
            }, {
              insert: Eu,
              from: Uu.to
            }],
            effects: YE.of(Uu.to + Eu.length),
            range: su.l.range(Uu.anchor + Eu.length, Uu.head + Eu.length)
          };
          let qu, fu = Uu.head,
            Cu = aE(uu.doc, fu);
          if (Cu == Eu) {
            if (mE(uu, fu)) return {
              changes: {
                insert: Eu + Eu,
                from: fu
              },
              effects: YE.of(fu + Eu.length),
              range: su.l.cursor(fu + Eu.length)
            };
            if (dE(uu, fu)) {
              let Uu = ju && uu.sliceDoc(fu, fu + 3 * Eu.length) == Eu + Eu + Eu ? Eu + Eu + Eu : Eu;
              return {
                changes: {
                  from: fu,
                  to: fu + Uu.length,
                  insert: Uu
                },
                range: su.l.cursor(fu + Uu.length)
              }
            }
          } else {
            if (ju && uu.sliceDoc(fu - 2 * Eu.length, fu) == Eu + Eu && (qu = vE(uu, fu - 2 * Eu.length, Xu)) > -1 && mE(uu, qu)) return {
              changes: {
                insert: Eu + Eu + Eu + Eu,
                from: fu
              },
              effects: YE.of(fu + Eu.length),
              range: su.l.cursor(fu + Eu.length)
            };
            if (uu.charCategorizer(fu)(Cu) != su.i.Word && vE(uu, fu, Xu) > -1 && ! function(uu, Eu, ju, su) {
                let Uu = (0, Zu.qb)(uu).resolveInner(Eu, -1),
                  Xu = su.reduce(((uu, Eu) => Math.max(uu, Eu.length)), 0);
                for (let Zu = 0; Zu < 5; Zu++) {
                  let Zu = uu.sliceDoc(Uu.from, Math.min(Uu.to, Uu.from + ju.length + Xu)),
                    lu = Zu.indexOf(ju);
                  if (!lu || lu > -1 && su.indexOf(Zu.slice(0, lu)) > -1) {
                    let Eu = Uu.firstChild;
                    for (; Eu && Eu.from == Uu.from && Eu.to - Eu.from > ju.length + lu;) {
                      if (uu.sliceDoc(Eu.to - ju.length, Eu.to) == ju) return !1;
                      Eu = Eu.firstChild
                    }
                    return !0
                  }
                  let qu = Uu.to == Eu && Uu.parent;
                  if (!qu) break;
                  Uu = qu
                }
                return !1
              }(uu, fu, Eu, Xu)) return {
              changes: {
                insert: Eu + Eu,
                from: fu
              },
              effects: YE.of(fu + Eu.length),
              range: su.l.cursor(fu + Eu.length)
            }
          }
          return {
            range: lu = Uu
          }
        }));
      return lu ? null : uu.update(qu, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function mE(uu, Eu) {
      let ju = (0, Zu.qb)(uu).resolveInner(Eu + 1);
      return ju.parent && ju.from == Eu
    }

    function vE(uu, Eu, ju) {
      let Uu = uu.charCategorizer(Eu);
      if (Uu(uu.sliceDoc(Eu - 1, Eu)) != su.i.Word) return Eu;
      for (let Zu of ju) {
        let ju = Eu - Zu.length;
        if (uu.sliceDoc(ju, Eu) == Zu && Uu(uu.sliceDoc(ju - 1, ju)) != su.i.Word) return ju
      }
      return -1
    }

    function KE() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Au, Iu, Gu.of(uu), Tu, rE, nu]
    }
    const VE = [{
        key: "Ctrl-Space",
        run: tu
      }, {
        mac: "Alt-`",
        run: tu
      }, {
        mac: "Alt-i",
        run: tu
      }, {
        key: "Escape",
        run: uu => {
          let Eu = uu.state.field(Iu, !1);
          return !(!Eu || !Eu.active.some((uu => 0 != uu.state))) && (uu.dispatch({
            effects: gu.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: Lu(!0)
      }, {
        key: "ArrowUp",
        run: Lu(!1)
      }, {
        key: "PageDown",
        run: Lu(!0, "page")
      }, {
        key: "PageUp",
        run: Lu(!1, "page")
      }, {
        key: "Enter",
        run: uu => {
          let Eu = uu.state.field(Iu, !1);
          return !(uu.state.readOnly || !Eu || !Eu.open || Eu.open.selected < 0 || Eu.open.disabled || Date.now() - Eu.open.timestamp < uu.state.facet(Gu).interactionDelay) && Fu(uu, Eu.open.options[Eu.open.selected])
        }
      }],
      rE = su.y.highest(Uu.V.computeN([Gu], (uu => uu.facet(Gu).defaultKeymap ? [VE] : [])))
  },
  41720: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu,
      g: () => cu,
      j: () => Cu,
      m: () => bu
    });
    var su = ju(41550);
    class Uu {
      constructor(uu, Eu, ju, su) {
        this.origin = uu, this.changes = Eu, this.effects = ju, this.clientID = su
      }
    }
    class Zu {
      constructor(uu, Eu) {
        this.version = uu, this.unconfirmed = Eu
      }
    }
    const Xu = su.r.define({
        combine(uu) {
          let Eu = (0, su.Z)(uu, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: uu => uu
          });
          return null == Eu.clientID && (Eu.clientID = uu.length && uu[0].generatedID || ""), Eu
        }
      }),
      lu = su.b.define(),
      qu = su.N.define({
        create: uu => new Zu(uu.facet(Xu).startVersion, []),
        update(uu, Eu) {
          let ju = Eu.annotation(lu);
          if (ju) return ju;
          let {
            sharedEffects: su,
            clientID: qu
          } = Eu.startState.facet(Xu), fu = su(Eu);
          return fu.length || !Eu.changes.empty ? new Zu(uu.version, uu.unconfirmed.concat(new Uu(Eu, Eu.changes, fu, qu))) : uu
        }
      });

    function fu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [qu, Xu.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, uu))]
    }

    function Cu(uu, Eu) {
      let {
        version: ju,
        unconfirmed: fu
      } = uu.field(qu), {
        clientID: Cu
      } = uu.facet(Xu);
      ju += Eu.length;
      let bu = [],
        cu = null,
        Nu = 0;
      for (let Uu of Eu) {
        let uu = Nu < fu.length ? fu[Nu] : null;
        uu && uu.clientID == Uu.clientID ? (cu && (cu = cu.map(uu.changes, !0)), bu = su.L.mapEffects(bu, Uu.changes), Nu++) : (bu = su.L.mapEffects(bu, Uu.changes), Uu.effects && (bu = bu.concat(Uu.effects)), cu = cu ? cu.compose(Uu.changes) : Uu.changes)
      }
      if (Nu && (fu = fu.slice(Nu)), fu.length && (cu && (fu = fu.map((uu => {
          let Eu = uu.changes.map(cu);
          return cu = cu.map(uu.changes, !0), new Uu(uu.origin, Eu, su.L.mapEffects(uu.effects, cu), Cu)
        }))), bu.length)) {
        let uu = fu.reduce(((uu, Eu) => uu.compose(Eu.changes)), su.ChangeSet.empty(fu[0].changes.length));
        bu = su.L.mapEffects(bu, uu)
      }
      return cu ? uu.update({
        changes: cu,
        effects: bu,
        annotations: [su.Q.addToHistory.of(!1), su.Q.remote.of(!0), lu.of(new Zu(ju, fu))],
        filter: !1
      }) : uu.update({
        annotations: [lu.of(new Zu(ju, fu))]
      })
    }

    function bu(uu) {
      return uu.field(qu).unconfirmed
    }

    function cu(uu) {
      return uu.field(qu).version
    }
  },
  41592: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => YE
    });
    var su = ju(41580);
    class Uu {
      constructor(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        let fu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Cu = arguments.length > 10 ? arguments[10] : void 0;
        this.p = uu, this.stack = Eu, this.state = ju, this.reducePos = su, this.pos = Uu, this.score = Zu, this.buffer = Xu, this.bufferBase = lu, this.curContext = qu, this.lookAhead = fu, this.parent = Cu
      }
      toString() {
        return `[${this.stack.filter(((uu,Eu)=>Eu%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = uu.parser.context;
        return new Uu(uu, [], Eu, ju, ju, 0, [], 0, su ? new Zu(su, su.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(uu, Eu) {
        this.stack.push(this.state, Eu, this.bufferBase + this.buffer.length), this.state = uu
      }
      reduce(uu) {
        var Eu;
        let ju = uu >> 19,
          su = 65535 & uu,
          {
            parser: Uu
          } = this.p,
          Zu = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          Xu = Uu.dynamicPrecedence(su);
        if (Xu && (this.score += Xu), 0 == ju) return this.pushState(Uu.getGoto(this.state, su, !0), this.reducePos), su < Uu.minRepeatTerm && this.storeNode(su, this.reducePos, this.reducePos, Zu ? 8 : 4, !0), void this.reduceContext(su, this.reducePos);
        let lu = this.stack.length - 3 * (ju - 1) - (262144 & uu ? 6 : 0),
          qu = lu ? this.stack[lu - 2] : this.p.HY[0].from,
          fu = this.reducePos - qu;
        fu >= 2e3 && !(null === (Eu = this.p.parser.nodeSet.types[su]) || void 0 === Eu ? void 0 : Eu.isAnonymous) && (qu == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = fu) : this.p.lastBigReductionSize < fu && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = qu, this.p.lastBigReductionSize = fu));
        let Cu = lu ? this.stack[lu - 1] : 0,
          bu = this.bufferBase + this.buffer.length - Cu;
        if (su < Uu.minRepeatTerm || 131072 & uu) {
          let uu = Uu.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(su, qu, uu, bu + 4, !0)
        }
        if (262144 & uu) this.state = this.stack[lu];
        else {
          let uu = this.stack[lu - 3];
          this.state = Uu.getGoto(uu, su, !0)
        }
        for (; this.stack.length > lu;) this.stack.pop();
        this.reduceContext(su, qu)
      }
      storeNode(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == uu && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let uu = this,
            su = this.buffer.length;
          if (0 == su && uu.parent && (su = uu.bufferBase - uu.parent.bufferBase, uu = uu.parent), su > 0 && 0 == uu.buffer[su - 4] && uu.buffer[su - 1] > -1) {
            if (Eu == ju) return;
            if (uu.buffer[su - 2] >= Eu) return void(uu.buffer[su - 2] = ju)
          }
        }
        if (Uu && this.pos != ju) {
          let Uu = this.buffer.length;
          if (Uu > 0 && (0 != this.buffer[Uu - 4] || this.buffer[Uu - 1] < 0)) {
            let uu = !1;
            for (let Eu = Uu; Eu > 0 && this.buffer[Eu - 2] > ju; Eu -= 4)
              if (this.buffer[Eu - 1] >= 0) {
                uu = !0;
                break
              } if (uu)
              for (; Uu > 0 && this.buffer[Uu - 2] > ju;) this.buffer[Uu] = this.buffer[Uu - 4], this.buffer[Uu + 1] = this.buffer[Uu - 3], this.buffer[Uu + 2] = this.buffer[Uu - 2], this.buffer[Uu + 3] = this.buffer[Uu - 1], Uu -= 4, su > 4 && (su -= 4)
          }
          this.buffer[Uu] = uu, this.buffer[Uu + 1] = Eu, this.buffer[Uu + 2] = ju, this.buffer[Uu + 3] = su
        } else this.buffer.push(uu, Eu, ju, su)
      }
      shift(uu, Eu, ju, su) {
        if (131072 & uu) this.pushState(65535 & uu, this.pos);
        else if (0 == (262144 & uu)) {
          let Uu = uu,
            {
              parser: Zu
            } = this.p;
          this.pos = su;
          let Xu = Zu.stateFlag(Uu, 1);
          !Xu && (su > ju || Eu <= Zu.maxNode) && (this.reducePos = su), this.pushState(Uu, Xu ? ju : Math.min(ju, this.reducePos)), this.shiftContext(Eu, ju), Eu <= Zu.maxNode && this.buffer.push(Eu, ju, su, 4)
        } else this.pos = su, this.shiftContext(Eu, ju), Eu <= this.p.parser.maxNode && this.buffer.push(Eu, ju, su, 4)
      }
      apply(uu, Eu, ju, su) {
        65536 & uu ? this.reduce(uu) : this.shift(uu, Eu, ju, su)
      }
      useNode(uu, Eu) {
        let ju = this.p.reused.length - 1;
        (ju < 0 || this.p.reused[ju] != uu) && (this.p.reused.push(uu), ju++);
        let su = this.pos;
        this.reducePos = this.pos = su + uu.length, this.pushState(Eu, su), this.buffer.push(ju, su, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, uu, this, this.p.stream.reset(this.pos - uu.length)))
      }
      split() {
        let uu = this,
          Eu = uu.buffer.length;
        for (; Eu > 0 && uu.buffer[Eu - 2] > uu.reducePos;) Eu -= 4;
        let ju = uu.buffer.slice(Eu),
          su = uu.bufferBase + Eu;
        for (; uu && su == uu.bufferBase;) uu = uu.parent;
        return new Uu(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, ju, su, this.curContext, this.lookAhead, uu)
      }
      recoverByDelete(uu, Eu) {
        let ju = uu <= this.p.parser.maxNode;
        ju && this.storeNode(uu, this.pos, Eu, 4), this.storeNode(0, this.pos, Eu, ju ? 8 : 4), this.pos = this.reducePos = Eu, this.score -= 190
      }
      canShift(uu) {
        for (let Eu = new Xu(this);;) {
          let ju = this.p.parser.stateSlot(Eu.state, 4) || this.p.parser.hasAction(Eu.state, uu);
          if (0 == ju) return !1;
          if (0 == (65536 & ju)) return !0;
          Eu.reduce(ju)
        }
      }
      recoverByInsert(uu) {
        if (this.stack.length >= 300) return [];
        let Eu = this.p.parser.nextStates(this.state);
        if (Eu.length > 8 || this.stack.length >= 120) {
          let ju = [];
          for (let su, Uu = 0; Uu < Eu.length; Uu += 2)(su = Eu[Uu + 1]) != this.state && this.p.parser.hasAction(su, uu) && ju.push(Eu[Uu], su);
          if (this.stack.length < 120)
            for (let uu = 0; ju.length < 8 && uu < Eu.length; uu += 2) {
              let su = Eu[uu + 1];
              ju.some(((uu, Eu) => 1 & Eu && uu == su)) || ju.push(Eu[uu], su)
            }
          Eu = ju
        }
        let ju = [];
        for (let su = 0; su < Eu.length && ju.length < 4; su += 2) {
          let uu = Eu[su + 1];
          if (uu == this.state) continue;
          let Uu = this.split();
          Uu.pushState(uu, this.pos), Uu.storeNode(0, Uu.pos, Uu.pos, 4, !0), Uu.shiftContext(Eu[su], this.pos), Uu.reducePos = this.pos, Uu.score -= 200, ju.push(Uu)
        }
        return ju
      }
      forceReduce() {
        let {
          parser: uu
        } = this.p, Eu = uu.stateSlot(this.state, 5);
        if (0 == (65536 & Eu)) return !1;
        if (!uu.validAction(this.state, Eu)) {
          let ju = Eu >> 19,
            su = 65535 & Eu,
            Uu = this.stack.length - 3 * ju;
          if (Uu < 0 || uu.getGoto(this.stack[Uu], su, !1) < 0) {
            let uu = this.findForcedReduction();
            if (null == uu) return !1;
            Eu = uu
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(Eu), !0
      }
      findForcedReduction() {
        let {
          parser: uu
        } = this.p, Eu = [], ju = (su, Uu) => {
          if (!Eu.includes(su)) return Eu.push(su), uu.allActions(su, (Eu => {
            if (393216 & Eu);
            else if (65536 & Eu) {
              let ju = (Eu >> 19) - Uu;
              if (ju > 1) {
                let su = 65535 & Eu,
                  Uu = this.stack.length - 3 * ju;
                if (Uu >= 0 && uu.getGoto(this.stack[Uu], su, !1) >= 0) return ju << 19 | 65536 | su
              }
            } else {
              let uu = ju(Eu, Uu + 1);
              if (null != uu) return uu
            }
          }))
        };
        return ju(this.state, 0)
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
        for (let Eu = 0; Eu < this.stack.length; Eu += 3)
          if (this.stack[Eu] != uu.stack[Eu]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(uu) {
        return this.p.parser.dialect.flags[uu]
      }
      shiftContext(uu, Eu) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, uu, this, this.p.stream.reset(Eu)))
      }
      reduceContext(uu, Eu) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, uu, this, this.p.stream.reset(Eu)))
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
          let Eu = new Zu(this.curContext.tracker, uu);
          Eu.hash != this.curContext.hash && this.emitContext(), this.curContext = Eu
        }
      }
      setLookAhead(uu) {
        return !(uu <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = uu, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class Zu {
      constructor(uu, Eu) {
        this.tracker = uu, this.context = Eu, this.hash = uu.strict ? uu.hash(Eu) : 0
      }
    }
    class Xu {
      constructor(uu) {
        this.start = uu, this.state = uu.state, this.stack = uu.stack, this.base = this.stack.length
      }
      reduce(uu) {
        let Eu = 65535 & uu,
          ju = uu >> 19;
        0 == ju ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (ju - 1);
        let su = this.start.p.parser.getGoto(this.stack[this.base - 3], Eu, !0);
        this.state = su
      }
    }
    class lu {
      constructor(uu, Eu, ju) {
        this.stack = uu, this.pos = Eu, this.index = ju, this.buffer = uu.buffer, 0 == this.index && this.maybeNext()
      }
      static create(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.bufferBase + uu.buffer.length;
        return new lu(uu, Eu, Eu - uu.bufferBase)
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
        return new lu(this.stack, this.pos, this.index)
      }
    }

    function qu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof uu) return uu;
      let ju = null;
      for (let su = 0, Uu = 0; su < uu.length;) {
        let Zu = 0;
        for (;;) {
          let Eu = uu.charCodeAt(su++),
            ju = !1;
          if (126 == Eu) {
            Zu = 65535;
            break
          }
          Eu >= 92 && Eu--, Eu >= 34 && Eu--;
          let Uu = Eu - 32;
          if (Uu >= 46 && (Uu -= 46, ju = !0), Zu += Uu, ju) break;
          Zu *= 46
        }
        ju ? ju[Uu++] = Zu : ju = new Eu(Zu)
      }
      return ju
    }
    class fu {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const Cu = new fu;
    class bu {
      constructor(uu, Eu) {
        this.input = uu, this.HY = Eu, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Cu, this.rangeIndex = 0, this.pos = this.chunkPos = Eu[0].from, this.range = Eu[0], this.end = Eu[Eu.length - 1].to, this.readNext()
      }
      resolveOffset(uu, Eu) {
        let ju = this.range,
          su = this.rangeIndex,
          Uu = this.pos + uu;
        for (; Uu < ju.from;) {
          if (!su) return null;
          let uu = this.HY[--su];
          Uu -= ju.from - uu.to, ju = uu
        }
        for (; Eu < 0 ? Uu > ju.to : Uu >= ju.to;) {
          if (su == this.HY.length - 1) return null;
          let uu = this.HY[++su];
          Uu += uu.from - ju.to, ju = uu
        }
        return Uu
      }
      clipPos(uu) {
        if (uu >= this.range.from && uu < this.range.to) return uu;
        for (let Eu of this.HY)
          if (Eu.to > uu) return Math.max(uu, Eu.from);
        return this.end
      }
      peek(uu) {
        let Eu, ju, su = this.chunkOff + uu;
        if (su >= 0 && su < this.chunk.length) Eu = this.pos + uu, ju = this.chunk.charCodeAt(su);
        else {
          let su = this.resolveOffset(uu, 1);
          if (null == su) return -1;
          if (Eu = su, Eu >= this.chunk2Pos && Eu < this.chunk2Pos + this.chunk2.length) ju = this.chunk2.charCodeAt(Eu - this.chunk2Pos);
          else {
            let uu = this.rangeIndex,
              su = this.range;
            for (; su.to <= Eu;) su = this.HY[++uu];
            this.chunk2 = this.input.chunk(this.chunk2Pos = Eu), Eu + this.chunk2.length > su.to && (this.chunk2 = this.chunk2.slice(0, su.to - Eu)), ju = this.chunk2.charCodeAt(0)
          }
        }
        return Eu >= this.token.lookAhead && (this.token.lookAhead = Eu + 1), ju
      }
      acceptToken(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = Eu ? this.resolveOffset(Eu, -1) : this.pos;
        if (null == ju || ju < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = uu, this.token.end = ju
      }
      acceptTokenTo(uu, Eu) {
        this.token.value = uu, this.token.end = Eu
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: uu,
            chunkPos: Eu
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = uu, this.chunk2Pos = Eu, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let uu = this.input.chunk(this.pos),
            Eu = this.pos + uu.length;
          this.chunk = Eu > this.range.to ? uu.slice(0, this.range.to - this.pos) : uu, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += uu; this.pos + uu >= this.range.to;) {
          if (this.rangeIndex == this.HY.length - 1) return this.setDone();
          uu -= this.range.to - this.pos, this.range = this.HY[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += uu, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.HY[this.rangeIndex = this.HY.length - 1], this.chunk = "", this.next = -1
      }
      reset(uu, Eu) {
        if (Eu ? (this.token = Eu, Eu.start = uu, Eu.lookAhead = uu + 1, Eu.value = Eu.extended = -1) : this.token = Cu, this.pos != uu) {
          if (this.pos = uu, uu == this.end) return this.setDone(), this;
          for (; uu < this.range.from;) this.range = this.HY[--this.rangeIndex];
          for (; uu >= this.range.to;) this.range = this.HY[++this.rangeIndex];
          uu >= this.chunkPos && uu < this.chunkPos + this.chunk.length ? this.chunkOff = uu - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(uu, Eu) {
        if (uu >= this.chunkPos && Eu <= this.chunkPos + this.chunk.length) return this.chunk.slice(uu - this.chunkPos, Eu - this.chunkPos);
        if (uu >= this.chunk2Pos && Eu <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(uu - this.chunk2Pos, Eu - this.chunk2Pos);
        if (uu >= this.range.from && Eu <= this.range.to) return this.input.read(uu, Eu);
        let ju = "";
        for (let su of this.HY) {
          if (su.from >= Eu) break;
          su.to > uu && (ju += this.input.read(Math.max(su.from, uu), Math.min(su.to, Eu)))
        }
        return ju
      }
    }
    class cu {
      constructor(uu, Eu) {
        this.data = uu, this.id = Eu
      }
      token(uu, Eu) {
        let {
          parser: ju
        } = Eu.p;
        Yu(this.data, uu, Eu, this.id, ju.data, ju.tokenPrecTable)
      }
    }
    cu.prototype.contextual = cu.prototype.fallback = cu.prototype.extend = !1;
    class Nu {
      constructor(uu, Eu, ju) {
        this.precTable = Eu, this.elseToken = ju, this.data = "string" == typeof uu ? qu(uu) : uu
      }
      token(uu, Eu) {
        let ju = uu.pos,
          su = 0;
        for (;;) {
          let ju = uu.next < 0,
            Uu = uu.resolveOffset(1, 1);
          if (Yu(this.data, uu, Eu, 0, this.data, this.precTable), uu.token.value > -1) break;
          if (null == this.elseToken) return;
          if (ju || su++, null == Uu) break;
          uu.reset(Uu, uu.token)
        }
        su && (uu.reset(ju, uu.token), uu.acceptToken(this.elseToken, su))
      }
    }
    Nu.prototype.contextual = cu.prototype.fallback = cu.prototype.extend = !1;
    class Ou {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = uu, this.contextual = !!Eu.contextual, this.fallback = !!Eu.fallback, this.extend = !!Eu.extend
      }
    }

    function Yu(uu, Eu, ju, su, Uu, Zu) {
      let Xu = 0,
        lu = 1 << su,
        {
          dialect: qu
        } = ju.p.parser;
      uu: for (; 0 != (lu & uu[Xu]);) {
        let ju = uu[Xu + 1];
        for (let bu = Xu + 3; bu < ju; bu += 2)
          if ((uu[bu + 1] & lu) > 0) {
            let ju = uu[bu];
            if (qu.allows(ju) && (-1 == Eu.token.value || Eu.token.value == ju || Du(ju, Eu.token.value, Uu, Zu))) {
              Eu.acceptToken(ju);
              break
            }
          } let su = Eu.next,
          fu = 0,
          Cu = uu[Xu + 2];
        if (!(Eu.next < 0 && Cu > fu && 65535 == uu[ju + 3 * Cu - 3])) {
          for (; fu < Cu;) {
            let Uu = fu + Cu >> 1,
              Zu = ju + Uu + (Uu << 1),
              lu = uu[Zu],
              qu = uu[Zu + 1] || 65536;
            if (su < lu) Cu = Uu;
            else {
              if (!(su >= qu)) {
                Xu = uu[Zu + 2], Eu.advance();
                continue uu
              }
              fu = Uu + 1
            }
          }
          break
        }
        Xu = uu[ju + 3 * Cu - 1]
      }
    }

    function hu(uu, Eu, ju) {
      for (let su, Uu = Eu; 65535 != (su = uu[Uu]); Uu++)
        if (su == ju) return Uu - Eu;
      return -1
    }

    function Du(uu, Eu, ju, su) {
      let Uu = hu(ju, su, Eu);
      return Uu < 0 || hu(ju, su, uu) < Uu
    }
    const gu = "undefined" != typeof process && {
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
    let Mu = null;

    function eu(uu, Eu, ju) {
      let Uu = uu.cursor(su.g.IncludeAnonymous);
      for (Uu.moveTo(Eu);;)
        if (!(ju < 0 ? Uu.childBefore(Eu) : Uu.childAfter(Eu)))
          for (;;) {
            if ((ju < 0 ? Uu.to < Eu : Uu.from > Eu) && !Uu.type.isError) return ju < 0 ? Math.max(0, Math.min(Uu.to - 1, Eu - 25)) : Math.min(uu.length, Math.max(Uu.from + 1, Eu + 25));
            if (ju < 0 ? Uu.prevSibling() : Uu.nextSibling()) break;
            if (!Uu.parent()) return ju < 0 ? 0 : uu.length
          }
    }
    class Gu {
      constructor(uu, Eu) {
        this.fragments = uu, this.nodeSet = Eu, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let uu = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (uu) {
          for (this.safeFrom = uu.openStart ? eu(uu.tree, uu.from + uu.offset, 1) - uu.offset : uu.from, this.safeTo = uu.openEnd ? eu(uu.tree, uu.to + uu.offset, -1) - uu.offset : uu.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(uu.tree), this.start.push(-uu.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(uu) {
        if (uu < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= uu;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let Eu = this.trees.length - 1;
          if (Eu < 0) return this.nextFragment(), null;
          let ju = this.trees[Eu],
            Uu = this.index[Eu];
          if (Uu == ju.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let Zu = ju.children[Uu],
            Xu = this.start[Eu] + ju.positions[Uu];
          if (Xu > uu) return this.nextStart = Xu, null;
          if (Zu instanceof su.y) {
            if (Xu == uu) {
              if (Xu < this.safeFrom) return null;
              let uu = Xu + Zu.length;
              if (uu <= this.safeTo) {
                let Eu = Zu.prop(su.j.lookAhead);
                if (!Eu || uu + Eu < this.fragment.to) return Zu
              }
            }
            this.index[Eu]++, Xu + Zu.length >= Math.max(this.safeFrom, uu) && (this.trees.push(Zu), this.start.push(Xu), this.index.push(0))
          } else this.index[Eu]++, this.nextStart = Xu + Zu.length
        }
      }
    }
    class pu {
      constructor(uu, Eu) {
        this.stream = Eu, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = uu.tokenizers.map((uu => new fu))
      }
      getActions(uu) {
        let Eu = 0,
          ju = null,
          {
            parser: su
          } = uu.p,
          {
            tokenizers: Uu
          } = su,
          Zu = su.stateSlot(uu.state, 3),
          Xu = uu.curContext ? uu.curContext.hash : 0,
          lu = 0;
        for (let qu = 0; qu < Uu.length; qu++) {
          if (0 == (1 << qu & Zu)) continue;
          let su = Uu[qu],
            fu = this.tokens[qu];
          if ((!ju || su.fallback) && ((su.contextual || fu.start != uu.pos || fu.mask != Zu || fu.context != Xu) && (this.updateCachedToken(fu, su, uu), fu.mask = Zu, fu.context = Xu), fu.lookAhead > fu.end + 25 && (lu = Math.max(fu.lookAhead, lu)), 0 != fu.value)) {
            let Uu = Eu;
            if (fu.extended > -1 && (Eu = this.addActions(uu, fu.extended, fu.end, Eu)), Eu = this.addActions(uu, fu.value, fu.end, Eu), !su.extend && (ju = fu, Eu > Uu)) break
          }
        }
        for (; this.actions.length > Eu;) this.actions.pop();
        return lu && uu.setLookAhead(lu), ju || uu.pos != this.stream.end || (ju = new fu, ju.value = uu.p.parser.eofTerm, ju.start = ju.end = uu.pos, Eu = this.addActions(uu, ju.value, ju.end, Eu)), this.mainToken = ju, this.actions
      }
      getMainToken(uu) {
        if (this.mainToken) return this.mainToken;
        let Eu = new fu,
          {
            pos: ju,
            p: su
          } = uu;
        return Eu.start = ju, Eu.end = Math.min(ju + 1, su.stream.end), Eu.value = ju == su.stream.end ? su.parser.eofTerm : 0, Eu
      }
      updateCachedToken(uu, Eu, ju) {
        let su = this.stream.clipPos(ju.pos);
        if (Eu.token(this.stream.reset(su, uu), ju), uu.value > -1) {
          let {
            parser: Eu
          } = ju.p;
          for (let su = 0; su < Eu.specialized.length; su++)
            if (Eu.specialized[su] == uu.value) {
              let Uu = Eu.specializers[su](this.stream.read(uu.start, uu.end), ju);
              if (Uu >= 0 && ju.p.parser.dialect.allows(Uu >> 1)) {
                0 == (1 & Uu) ? uu.value = Uu >> 1 : uu.extended = Uu >> 1;
                break
              }
            }
        } else uu.value = 0, uu.end = this.stream.clipPos(su + 1)
      }
      putAction(uu, Eu, ju, su) {
        for (let Uu = 0; Uu < su; Uu += 3)
          if (this.actions[Uu] == uu) return su;
        return this.actions[su++] = uu, this.actions[su++] = Eu, this.actions[su++] = ju, su
      }
      addActions(uu, Eu, ju, su) {
        let {
          state: Uu
        } = uu, {
          parser: Zu
        } = uu.p, {
          data: Xu
        } = Zu;
        for (let lu = 0; lu < 2; lu++)
          for (let uu = Zu.stateSlot(Uu, lu ? 2 : 1);; uu += 3) {
            if (65535 == Xu[uu]) {
              if (1 != Xu[uu + 1]) {
                0 == su && 2 == Xu[uu + 1] && (su = this.putAction(ou(Xu, uu + 2), Eu, ju, su));
                break
              }
              uu = ou(Xu, uu + 2)
            }
            Xu[uu] == Eu && (su = this.putAction(ou(Xu, uu + 1), Eu, ju, su))
          }
        return su
      }
    }
    class wu {
      constructor(uu, Eu, ju, su) {
        this.parser = uu, this.input = Eu, this.HY = su, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new bu(Eu, su), this.tokens = new pu(uu, this.stream), this.topTerm = uu.top[1];
        let {
          from: Zu
        } = su[0];
        this.stacks = [Uu.start(this, uu.top[0], Zu)], this.fragments = ju.length && this.stream.end - Zu > 4 * uu.bufferLength ? new Gu(ju, uu.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let uu, Eu, ju = this.stacks,
          su = this.minStackPos,
          Uu = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == ju.length) {
          let [uu] = ju;
          for (; uu.forceReduce() && uu.stack.length && uu.stack[uu.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let Zu = 0; Zu < ju.length; Zu++) {
          let Xu = ju[Zu];
          for (;;) {
            if (this.tokens.mainToken = null, Xu.pos > su) Uu.push(Xu);
            else {
              if (this.advanceStack(Xu, Uu, ju)) continue;
              {
                uu || (uu = [], Eu = []), uu.push(Xu);
                let ju = this.tokens.getMainToken(Xu);
                Eu.push(ju.value, ju.end)
              }
            }
            break
          }
        }
        if (!Uu.length) {
          let Eu = uu && function(uu) {
            let Eu = null;
            for (let ju of uu) {
              let uu = ju.p.stoppedAt;
              (ju.pos == ju.p.stream.end || null != uu && ju.pos > uu) && ju.p.parser.stateFlag(ju.state, 2) && (!Eu || Eu.score < ju.score) && (Eu = ju)
            }
            return Eu
          }(uu);
          if (Eu) return gu && console.log("Finish with " + this.stackID(Eu)), this.stackToTree(Eu);
          if (this.parser.strict) throw gu && uu && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + su);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && uu) {
          let ju = null != this.stoppedAt && uu[0].pos > this.stoppedAt ? uu[0] : this.runRecovery(uu, Eu, Uu);
          if (ju) return gu && console.log("Force-finish " + this.stackID(ju)), this.stackToTree(ju.forceAll())
        }
        if (this.recovering) {
          let uu = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Uu.length > uu)
            for (Uu.sort(((uu, Eu) => Eu.score - uu.score)); Uu.length > uu;) Uu.pop();
          Uu.some((uu => uu.reducePos > su)) && this.recovering--
        } else if (Uu.length > 1) {
          uu: for (let uu = 0; uu < Uu.length - 1; uu++) {
            let Eu = Uu[uu];
            for (let ju = uu + 1; ju < Uu.length; ju++) {
              let su = Uu[ju];
              if (Eu.sameState(su) || Eu.buffer.length > 500 && su.buffer.length > 500) {
                if (!((Eu.score - su.score || Eu.buffer.length - su.buffer.length) > 0)) {
                  Uu.splice(uu--, 1);
                  continue uu
                }
                Uu.splice(ju--, 1)
              }
            }
          }
          Uu.length > 12 && (Uu.sort(((uu, Eu) => Eu.score - uu.score)), Uu.splice(12, Uu.length - 12))
        }
        this.minStackPos = Uu[0].pos;
        for (let Zu = 1; Zu < Uu.length; Zu++) Uu[Zu].pos < this.minStackPos && (this.minStackPos = Uu[Zu].pos);
        return null
      }
      stopAt(uu) {
        if (null != this.stoppedAt && this.stoppedAt < uu) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = uu
      }
      advanceStack(uu, Eu, ju) {
        let Uu = uu.pos,
          {
            parser: Zu
          } = this,
          Xu = gu ? this.stackID(uu) + " -> " : "";
        if (null != this.stoppedAt && Uu > this.stoppedAt) return uu.forceReduce() ? uu : null;
        if (this.fragments) {
          let Eu = uu.curContext && uu.curContext.tracker.strict,
            ju = Eu ? uu.curContext.hash : 0;
          for (let lu = this.fragments.nodeAt(Uu); lu;) {
            let Uu = this.parser.nodeSet.types[lu.type.id] == lu.type ? Zu.getGoto(uu.state, lu.type.id) : -1;
            if (Uu > -1 && lu.length && (!Eu || (lu.prop(su.j.contextHash) || 0) == ju)) return uu.useNode(lu, Uu), gu && console.log(Xu + this.stackID(uu) + ` (via reuse of ${Zu.getName(lu.type.id)})`), !0;
            if (!(lu instanceof su.y) || 0 == lu.children.length || lu.positions[0] > 0) break;
            let qu = lu.children[0];
            if (!(qu instanceof su.y && 0 == lu.positions[0])) break;
            lu = qu
          }
        }
        let lu = Zu.stateSlot(uu.state, 4);
        if (lu > 0) return uu.reduce(lu), gu && console.log(Xu + this.stackID(uu) + ` (via always-reduce ${Zu.getName(65535&lu)})`), !0;
        if (uu.stack.length >= 8400)
          for (; uu.stack.length > 6e3 && uu.forceReduce(););
        let qu = this.tokens.getActions(uu);
        for (let su = 0; su < qu.length;) {
          let lu = qu[su++],
            fu = qu[su++],
            Cu = qu[su++],
            bu = su == qu.length || !ju,
            cu = bu ? uu : uu.split(),
            Nu = this.tokens.mainToken;
          if (cu.apply(lu, fu, Nu ? Nu.start : cu.pos, Cu), gu && console.log(Xu + this.stackID(cu) + ` (via ${0==(65536&lu)?"shift":`reduce of ${Zu.getName(65535&lu)}`} for ${Zu.getName(fu)} @ ${Uu}${cu==uu?"":", split"})`), bu) return !0;
          cu.pos > Uu ? Eu.push(cu) : ju.push(cu)
        }
        return !1
      }
      advanceFully(uu, Eu) {
        let ju = uu.pos;
        for (;;) {
          if (!this.advanceStack(uu, null, null)) return !1;
          if (uu.pos > ju) return Ju(uu, Eu), !0
        }
      }
      runRecovery(uu, Eu, ju) {
        let su = null,
          Uu = !1;
        for (let Zu = 0; Zu < uu.length; Zu++) {
          let Xu = uu[Zu],
            lu = Eu[Zu << 1],
            qu = Eu[1 + (Zu << 1)],
            fu = gu ? this.stackID(Xu) + " -> " : "";
          if (Xu.deadEnd) {
            if (Uu) continue;
            if (Uu = !0, Xu.restart(), gu && console.log(fu + this.stackID(Xu) + " (restarted)"), this.advanceFully(Xu, ju)) continue
          }
          let Cu = Xu.split(),
            bu = fu;
          for (let uu = 0; uu < 10 && Cu.forceReduce(); uu++) {
            if (gu && console.log(bu + this.stackID(Cu) + " (via force-reduce)"), this.advanceFully(Cu, ju)) break;
            gu && (bu = this.stackID(Cu) + " -> ")
          }
          for (let uu of Xu.recoverByInsert(lu)) gu && console.log(fu + this.stackID(uu) + " (via recover-insert)"), this.advanceFully(uu, ju);
          this.stream.end > Xu.pos ? (qu == Xu.pos && (qu++, lu = 0), Xu.recoverByDelete(lu, qu), gu && console.log(fu + this.stackID(Xu) + ` (via recover-delete ${this.parser.getName(lu)})`), Ju(Xu, ju)) : (!su || su.score < Cu.score) && (su = Cu)
        }
        return su
      }
      stackToTree(uu) {
        return uu.close(), su.y.build({
          buffer: lu.create(uu),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.HY[0].from,
          length: uu.pos - this.HY[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(uu) {
        let Eu = (Mu || (Mu = new WeakMap)).get(uu);
        return Eu || Mu.set(uu, Eu = String.fromCodePoint(this.nextStackID++)), Eu + uu
      }
    }

    function Ju(uu, Eu) {
      for (let ju = 0; ju < Eu.length; ju++) {
        let su = Eu[ju];
        if (su.pos == uu.pos && su.sameState(uu)) return void(Eu[ju].score < uu.score && (Eu[ju] = uu))
      }
      Eu.push(uu)
    }
    class du {
      constructor(uu, Eu, ju) {
        this.source = uu, this.flags = Eu, this.disabled = ju
      }
      allows(uu) {
        return !this.disabled || 0 == this.disabled[uu]
      }
    }
    const au = uu => uu;
    class Pu extends su.r {
      constructor(uu) {
        if (super(), this.wrappers = [], 14 != uu.version) throw new RangeError(`Parser version (${uu.version}) doesn't match runtime version (14)`);
        let Eu = uu.nodeNames.split(" ");
        this.minRepeatTerm = Eu.length;
        for (let su = 0; su < uu.repeatNodeCount; su++) Eu.push("");
        let ju = Object.keys(uu.topRules).map((Eu => uu.topRules[Eu][1])),
          Uu = [];
        for (let su = 0; su < Eu.length; su++) Uu.push([]);

        function Zu(uu, Eu, ju) {
          Uu[uu].push([Eu, Eu.deserialize(String(ju))])
        }
        if (uu.nodeProps)
          for (let lu of uu.nodeProps) {
            let uu = lu[0];
            "string" == typeof uu && (uu = su.j[uu]);
            for (let Eu = 1; Eu < lu.length;) {
              let ju = lu[Eu++];
              if (ju >= 0) Zu(ju, uu, lu[Eu++]);
              else {
                let su = lu[Eu + -ju];
                for (let Uu = -ju; Uu > 0; Uu--) Zu(lu[Eu++], uu, su);
                Eu++
              }
            }
          }
        this.nodeSet = new su.l(Eu.map(((Eu, Zu) => su.n.define({
          name: Zu >= this.minRepeatTerm ? void 0 : Eu,
          id: Zu,
          props: Uu[Zu],
          top: ju.indexOf(Zu) > -1,
          error: 0 == Zu,
          skipped: uu.skippedNodes && uu.skippedNodes.indexOf(Zu) > -1
        })))), uu.propSources && (this.nodeSet = this.nodeSet.extend(...uu.propSources)), this.strict = !1, this.bufferLength = su.c;
        let Xu = qu(uu.tokenData);
        this.context = uu.context, this.specializerSpecs = uu.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let su = 0; su < this.specializerSpecs.length; su++) this.specialized[su] = this.specializerSpecs[su].term;
        this.specializers = this.specializerSpecs.map(ku), this.states = qu(uu.states, Uint32Array), this.data = qu(uu.stateData), this.goto = qu(uu.goto), this.maxTerm = uu.maxTerm, this.tokenizers = uu.tokenizers.map((uu => "number" == typeof uu ? new cu(Xu, uu) : uu)), this.topRules = uu.topRules, this.dialects = uu.dialects || {}, this.dynamicPrecedences = uu.dynamicPrecedences || null, this.tokenPrecTable = uu.tokenPrec, this.termNames = uu.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(uu, Eu, ju) {
        let su = new wu(this, uu, Eu, ju);
        for (let Uu of this.wrappers) su = Uu(su, uu, Eu, ju);
        return su
      }
      getGoto(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = this.goto;
        if (Eu >= su[0]) return -1;
        for (let Uu = su[Eu + 1];;) {
          let Eu = su[Uu++],
            Zu = 1 & Eu,
            Xu = su[Uu++];
          if (Zu && ju) return Xu;
          for (let ju = Uu + (Eu >> 1); Uu < ju; Uu++)
            if (su[Uu] == uu) return Xu;
          if (Zu) return -1
        }
      }
      hasAction(uu, Eu) {
        let ju = this.data;
        for (let su = 0; su < 2; su++)
          for (let Uu, Zu = this.stateSlot(uu, su ? 2 : 1);; Zu += 3) {
            if (65535 == (Uu = ju[Zu])) {
              if (1 != ju[Zu + 1]) {
                if (2 == ju[Zu + 1]) return ou(ju, Zu + 2);
                break
              }
              Uu = ju[Zu = ou(ju, Zu + 2)]
            }
            if (Uu == Eu || 0 == Uu) return ou(ju, Zu + 1)
          }
        return 0
      }
      stateSlot(uu, Eu) {
        return this.states[6 * uu + Eu]
      }
      stateFlag(uu, Eu) {
        return (this.stateSlot(uu, 0) & Eu) > 0
      }
      validAction(uu, Eu) {
        return !!this.allActions(uu, (uu => uu == Eu || null))
      }
      allActions(uu, Eu) {
        let ju = this.stateSlot(uu, 4),
          su = ju ? Eu(ju) : void 0;
        for (let Uu = this.stateSlot(uu, 1); null == su; Uu += 3) {
          if (65535 == this.data[Uu]) {
            if (1 != this.data[Uu + 1]) break;
            Uu = ou(this.data, Uu + 2)
          }
          su = Eu(ou(this.data, Uu + 1))
        }
        return su
      }
      nextStates(uu) {
        let Eu = [];
        for (let ju = this.stateSlot(uu, 1);; ju += 3) {
          if (65535 == this.data[ju]) {
            if (1 != this.data[ju + 1]) break;
            ju = ou(this.data, ju + 2)
          }
          if (0 == (1 & this.data[ju + 2])) {
            let uu = this.data[ju + 1];
            Eu.some(((Eu, ju) => 1 & ju && Eu == uu)) || Eu.push(this.data[ju], uu)
          }
        }
        return Eu
      }
      configure(uu) {
        let Eu = Object.assign(Object.create(Pu.prototype), this);
        if (uu.props && (Eu.nodeSet = this.nodeSet.extend(...uu.props)), uu.top) {
          let ju = this.topRules[uu.top];
          if (!ju) throw new RangeError(`Invalid top rule name ${uu.top}`);
          Eu.top = ju
        }
        return uu.tokenizers && (Eu.tokenizers = this.tokenizers.map((Eu => {
          let ju = uu.tokenizers.find((uu => uu.from == Eu));
          return ju ? ju.to : Eu
        }))), uu.specializers && (Eu.specializers = this.specializers.slice(), Eu.specializerSpecs = this.specializerSpecs.map(((ju, su) => {
          let Uu = uu.specializers.find((uu => uu.from == ju.external));
          if (!Uu) return ju;
          let Zu = Object.assign(Object.assign({}, ju), {
            external: Uu.to
          });
          return Eu.specializers[su] = ku(Zu), Zu
        }))), uu.contextTracker && (Eu.context = uu.contextTracker), uu.dialect && (Eu.dialect = this.parseDialect(uu.dialect)), null != uu.strict && (Eu.strict = uu.strict), uu.wrap && (Eu.wrappers = Eu.wrappers.concat(uu.wrap)), null != uu.bufferLength && (Eu.bufferLength = uu.bufferLength), Eu
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
        let Eu = this.dynamicPrecedences;
        return null == Eu ? 0 : Eu[uu] || 0
      }
      parseDialect(uu) {
        let Eu = Object.keys(this.dialects),
          ju = Eu.map((() => !1));
        if (uu)
          for (let Uu of uu.split(" ")) {
            let uu = Eu.indexOf(Uu);
            uu >= 0 && (ju[uu] = !0)
          }
        let su = null;
        for (let Uu = 0; Uu < Eu.length; Uu++)
          if (!ju[Uu])
            for (let uu, ju = this.dialects[Eu[Uu]]; 65535 != (uu = this.data[ju++]);)(su || (su = new Uint8Array(this.maxTerm + 1)))[uu] = 1;
        return new du(uu, ju, su)
      }
      static deserialize(uu) {
        return new Pu(uu)
      }
    }

    function ou(uu, Eu) {
      return uu[Eu] | uu[Eu + 1] << 16
    }

    function ku(uu) {
      if (uu.external) {
        let Eu = uu.extend ? 1 : 0;
        return (ju, su) => uu.external(ju, su) << 1 | Eu
      }
      return uu.get
    }
    var mu = ju(41586);
    const vu = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      Ku = new class {
        constructor(uu) {
          this.start = uu.start, this.shift = uu.shift || au, this.reduce = uu.reduce || au, this.reuse = uu.reuse || au, this.hash = uu.hash || (() => 0), this.strict = !1 !== uu.strict
        }
      }({
        start: !1,
        shift: (uu, Eu) => 5 == Eu || 6 == Eu || 320 == Eu ? uu : 321 == Eu,
        strict: !1
      }),
      Vu = new Ou(((uu, Eu) => {
        let {
          next: ju
        } = uu;
        (125 == ju || -1 == ju || Eu.context) && uu.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      ru = new Ou(((uu, Eu) => {
        let ju, {
          next: su
        } = uu;
        vu.indexOf(su) > -1 || (47 != su || 47 != (ju = uu.peek(1)) && 42 != ju) && (125 == su || 59 == su || -1 == su || Eu.context || uu.acceptToken(316))
      }), {
        contextual: !0
      }),
      Qu = new Ou(((uu, Eu) => {
        91 != uu.next || Eu.context || uu.acceptToken(317)
      }), {
        contextual: !0
      }),
      iu = new Ou(((uu, Eu) => {
        let {
          next: ju
        } = uu;
        if (43 == ju || 45 == ju) {
          if (uu.advance(), ju == uu.next) {
            uu.advance();
            let ju = !Eu.context && Eu.canShift(1);
            uu.acceptToken(ju ? 1 : 2)
          }
        } else 63 == ju && 46 == uu.peek(1) && (uu.advance(), uu.advance(), (uu.next < 48 || uu.next > 57) && uu.acceptToken(3))
      }), {
        contextual: !0
      });

    function Wu(uu, Eu) {
      return uu >= 65 && uu <= 90 || uu >= 97 && uu <= 122 || 95 == uu || uu >= 192 || !Eu && uu >= 48 && uu <= 57
    }
    const Su = new Ou(((uu, Eu) => {
        if (60 != uu.next || !Eu.dialectEnabled(0)) return;
        if (uu.advance(), 47 == uu.next) return;
        let ju = 0;
        for (; vu.indexOf(uu.next) > -1;) uu.advance(), ju++;
        if (Wu(uu.next, !0)) {
          for (uu.advance(), ju++; Wu(uu.next, !1);) uu.advance(), ju++;
          for (; vu.indexOf(uu.next) > -1;) uu.advance(), ju++;
          if (44 == uu.next) return;
          for (let Eu = 0;; Eu++) {
            if (7 == Eu) {
              if (!Wu(uu.next, !0)) return;
              break
            }
            if (uu.next != "extends".charCodeAt(Eu)) break;
            uu.advance(), ju++
          }
        }
        uu.acceptToken(4, -ju)
      })),
      Iu = (0, mu.g)({
        "get set async static": mu.l.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": mu.l.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": mu.l.operatorKeyword,
        "let var const using function class extends": mu.l.definitionKeyword,
        "import export from": mu.l.moduleKeyword,
        "with debugger new": mu.l.keyword,
        TemplateString: mu.l.special(mu.l.string),
        super: mu.l.atom,
        BooleanLiteral: mu.l.bool,
        this: mu.l.self,
        null: mu.l.null,
        Star: mu.l.modifier,
        VariableName: mu.l.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": mu.l.function(mu.l.variableName),
        VariableDefinition: mu.l.definition(mu.l.variableName),
        Label: mu.l.labelName,
        PropertyName: mu.l.propertyName,
        PrivatePropertyName: mu.l.special(mu.l.propertyName),
        "CallExpression/MemberExpression/PropertyName": mu.l.function(mu.l.propertyName),
        "FunctionDeclaration/VariableDefinition": mu.l.function(mu.l.definition(mu.l.variableName)),
        "ClassDeclaration/VariableDefinition": mu.l.definition(mu.l.className),
        "NewExpression/VariableName": mu.l.className,
        PropertyDefinition: mu.l.definition(mu.l.propertyName),
        PrivatePropertyDefinition: mu.l.definition(mu.l.special(mu.l.propertyName)),
        UpdateOp: mu.l.updateOperator,
        "LineComment Hashbang": mu.l.lineComment,
        BlockComment: mu.l.blockComment,
        Number: mu.l.number,
        String: mu.l.string,
        Escape: mu.l.escape,
        ArithOp: mu.l.arithmeticOperator,
        LogicOp: mu.l.logicOperator,
        BitOp: mu.l.bitwiseOperator,
        CompareOp: mu.l.compareOperator,
        RegExp: mu.l.regexp,
        Equals: mu.l.definitionOperator,
        Arrow: mu.l.function(mu.l.punctuation),
        ": Spread": mu.l.punctuation,
        "( )": mu.l.paren,
        "[ ]": mu.l.squareBracket,
        "{ }": mu.l.brace,
        "InterpolationStart InterpolationEnd": mu.l.special(mu.l.brace),
        ".": mu.l.derefOperator,
        ", ;": mu.l.separator,
        "@": mu.l.meta,
        TypeName: mu.l.typeName,
        TypeDefinition: mu.l.definition(mu.l.typeName),
        "type enum interface implements namespace module declare": mu.l.definitionKeyword,
        "abstract global Privacy readonly override": mu.l.modifier,
        "is keyof unique infer asserts": mu.l.operatorKeyword,
        JSXAttributeValue: mu.l.attributeValue,
        JSXText: mu.l.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": mu.l.angleBracket,
        "JSXIdentifier JSXNameSpacedName": mu.l.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": mu.l.attributeName,
        "JSXBuiltin/JSXIdentifier": mu.l.standard(mu.l.tagName)
      }),
      Fu = {
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
      Bu = {
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
      Lu = {
        __proto__: null,
        "<": 193
      },
      tu = Pu.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: Ku,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [Iu],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [ru, Qu, iu, Su, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Vu, new Nu("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new Nu("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: uu => Fu[uu] || -1
        }, {
          term: 343,
          get: uu => Bu[uu] || -1
        }, {
          term: 95,
          get: uu => Lu[uu] || -1
        }],
        tokenPrec: 15201
      });
    var xu = ju(41571),
      Tu = ju(41550),
      Hu = ju(41553),
      Au = ju(41541);
    const nu = [(0, Au.r)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, Au.r)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, Au.r)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, Au.r)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, Au.r)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, Au.r)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, Au.r)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, Au.r)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, Au.r)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, Au.r)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, Au.r)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      yu = nu.concat([(0, Au.r)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, Au.r)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, Au.r)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      zu = new su.p,
      Ru = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function uE(uu) {
      return (Eu, ju) => {
        let su = Eu.node.getChild("VariableDefinition");
        return su && ju(su, uu), !0
      }
    }
    const EE = ["FunctionDeclaration"],
      jE = {
        FunctionDeclaration: uE("function"),
        ClassDeclaration: uE("class"),
        ClassExpression: () => !0,
        EnumDeclaration: uE("constant"),
        TypeAliasDeclaration: uE("type"),
        NamespaceDeclaration: uE("namespace"),
        VariableDefinition(uu, Eu) {
          uu.matchContext(EE) || Eu(uu, "variable")
        },
        TypeDefinition(uu, Eu) {
          Eu(uu, "type")
        },
        __proto__: null
      };

    function sE(uu, Eu) {
      let ju = zu.get(Eu);
      if (ju) return ju;
      let Uu = [],
        Zu = !0;

      function Xu(Eu, ju) {
        let su = uu.sliceString(Eu.from, Eu.to);
        Uu.push({
          label: su,
          type: ju
        })
      }
      return Eu.cursor(su.g.IncludeAnonymous).iterate((Eu => {
        if (Zu) Zu = !1;
        else if (Eu.name) {
          let uu = jE[Eu.name];
          if (uu && uu(Eu, Xu) || Ru.has(Eu.name)) return !1
        } else if (Eu.to - Eu.from > 8192) {
          for (let ju of sE(uu, Eu.node)) Uu.push(ju);
          return !1
        }
      })), zu.set(Eu, Uu), Uu
    }
    const UE = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      ZE = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function XE(uu) {
      let Eu = (0, xu.qb)(uu.state).resolveInner(uu.pos, -1);
      if (ZE.indexOf(Eu.name) > -1) return null;
      let ju = "VariableName" == Eu.name || Eu.to - Eu.from < 20 && UE.test(uu.state.sliceDoc(Eu.from, Eu.to));
      if (!ju && !uu.explicit) return null;
      let su = [];
      for (let Uu = Eu; Uu; Uu = Uu.parent) Ru.has(Uu.name) && (su = su.concat(sE(uu.state.doc, Uu)));
      return {
        options: su,
        from: ju ? Eu.from : uu.pos,
        validFor: UE
      }
    }
    const lE = xu.i.define({
        name: "javascript",
        parser: tu.configure({
          props: [xu.Y.add({
            IfStatement: (0, xu.q)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, xu.q)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: xu.A,
            SwitchBody: uu => {
              let Eu = uu.textAfter,
                ju = /^\s*\}/.test(Eu),
                su = /^\s*(case|default)\b/.test(Eu);
              return uu.baseIndent + (ju ? 0 : su ? 1 : 2) * uu.unit
            },
            Block: (0, xu.x)({
              closing: "}"
            }),
            ArrowFunction: uu => uu.baseIndent + uu.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, xu.q)({
              except: /^\s*{/
            }),
            JSXElement(uu) {
              let Eu = /^\s*<\//.test(uu.textAfter);
              return uu.lineIndent(uu.node.from) + (Eu ? 0 : uu.unit)
            },
            JSXEscape(uu) {
              let Eu = /\s*\}/.test(uu.textAfter);
              return uu.lineIndent(uu.node.from) + (Eu ? 0 : uu.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": uu => uu.column(uu.node.from) + uu.unit
          }), xu.M.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": xu.E,
            BlockComment: uu => ({
              from: uu.from + 2,
              to: uu.to - 2
            }),
            JSXElement(uu) {
              let Eu = uu.firstChild;
              if (!Eu || "JSXSelfClosingTag" == Eu.name) return null;
              let ju = uu.lastChild;
              return {
                from: Eu.to,
                to: ju.type.isError ? uu.to : ju.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(uu) {
              var Eu;
              let ju = null === (Eu = uu.firstChild) || void 0 === Eu ? void 0 : Eu.nextSibling,
                su = uu.lastChild;
              return !ju || ju.type.isError ? null : {
                from: ju.to,
                to: su.type.isError ? uu.to : su.from
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
      qE = {
        test: uu => /^JSX/.test(uu.name),
        facet: (0, xu.v)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      fE = lE.configure({
        dialect: "ts"
      }, "typescript"),
      CE = lE.configure({
        dialect: "jsx",
        props: [xu.gb.add((uu => uu.isTop ? [qE] : void 0))]
      }),
      bE = lE.configure({
        dialect: "jsx ts",
        props: [xu.gb.add((uu => uu.isTop ? [qE] : void 0))]
      }, "typescript");
    let cE = uu => ({
      label: uu,
      type: "keyword"
    });
    const NE = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(cE),
      OE = NE.concat(["declare", "implements", "private", "protected", "public"].map(cE));

    function YE() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Eu = uu.jsx ? uu.typescript ? bE : CE : uu.typescript ? fE : lE,
        ju = uu.typescript ? yu.concat(OE) : nu.concat(NE);
      return new xu.m(Eu, [lE.data.of({
        autocomplete: (0, Au.p)(ZE, (0, Au.l)(ju))
      }), lE.data.of({
        autocomplete: XE
      }), uu.jsx ? gE : []])
    }

    function hE(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uu.length;
      for (let su = null === Eu || void 0 === Eu ? void 0 : Eu.firstChild; su; su = su.nextSibling)
        if ("JSXIdentifier" == su.name || "JSXBuiltin" == su.name || "JSXNamespacedName" == su.name || "JSXMemberExpression" == su.name) return uu.sliceString(su.from, Math.min(su.to, ju));
      return ""
    }
    const DE = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      gE = Hu.l.inputHandler.of(((uu, Eu, ju, su, Uu) => {
        if ((DE ? uu.composing : uu.compositionStarted) || uu.state.readOnly || Eu != ju || ">" != su && "/" != su || !lE.isActiveAt(uu.state, Eu, -1)) return !1;
        let Zu = Uu(),
          {
            state: Xu
          } = Zu,
          lu = Xu.changeByRange((uu => {
            var Eu;
            let ju, {
                head: Uu
              } = uu,
              Zu = (0, xu.qb)(Xu).resolveInner(Uu - 1, -1);
            if ("JSXStartTag" == Zu.name && (Zu = Zu.parent), Xu.doc.sliceString(Uu - 1, Uu) != su || "JSXAttributeValue" == Zu.name && Zu.to > Uu);
            else {
              if (">" == su && "JSXFragmentTag" == Zu.name) return {
                range: uu,
                changes: {
                  from: Uu,
                  insert: "</>"
                }
              };
              if ("/" == su && "JSXStartCloseTag" == Zu.name) {
                let uu = Zu.parent,
                  su = uu.parent;
                if (su && uu.from == Uu - 2 && ((ju = hE(Xu.doc, su.firstChild, Uu)) || "JSXFragmentTag" == (null === (Eu = su.firstChild) || void 0 === Eu ? void 0 : Eu.name))) {
                  let uu = `${ju}>`;
                  return {
                    range: Tu.l.cursor(Uu + uu.length, -1),
                    changes: {
                      from: Uu,
                      insert: uu
                    }
                  }
                }
              } else if (">" == su) {
                let Eu = function(uu) {
                  for (;;) {
                    if ("JSXOpenTag" == uu.name || "JSXSelfClosingTag" == uu.name || "JSXFragmentTag" == uu.name) return uu;
                    if ("JSXEscape" == uu.name || !uu.parent) return null;
                    uu = uu.parent
                  }
                }(Zu);
                if (Eu && "JSXOpenTag" == Eu.name && !/^\/?>|^<\//.test(Xu.doc.sliceString(Uu, Uu + 2)) && (ju = hE(Xu.doc, Eu, Uu))) return {
                  range: uu,
                  changes: {
                    from: Uu,
                    insert: `</${ju}>`
                  }
                }
              }
            }
            return {
              range: uu
            }
          }));
        return !lu.changes.empty && (uu.dispatch([Zu, Xu.update(lu, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41571: (uu, Eu, ju) => {
    ju.d(Eu, {
      $: () => Tu,
      A: () => Lu,
      C: () => gE,
      E: () => nu,
      I: () => fE,
      M: () => Au,
      Q: () => Du,
      U: () => mu,
      X: () => Ku,
      Y: () => ru,
      cb: () => vu,
      d: () => eE,
      db: () => ku,
      e: () => Vu,
      eb: () => BE,
      gb: () => bu,
      i: () => Ou,
      kb: () => JE,
      m: () => Pu,
      ob: () => hu,
      p: () => WE,
      q: () => tu,
      qb: () => Yu,
      s: () => PE,
      v: () => Cu,
      x: () => Fu
    });
    var su, Uu = ju(41580),
      Zu = ju(41550),
      Xu = ju(41553),
      lu = ju(41586),
      qu = ju(41556);
    const fu = new Uu.j;

    function Cu(uu) {
      return Zu.r.define({
        combine: uu ? Eu => Eu.concat(uu) : void 0
      })
    }
    const bu = new Uu.j;
    class cu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = uu, this.name = su, Zu.o.prototype.hasOwnProperty("tree") || Object.defineProperty(Zu.o.prototype, "tree", {
          get() {
            return Yu(this)
          }
        }), this.parser = Eu, this.extension = [au.of(this), Zu.o.languageData.of(((uu, Eu, ju) => {
          let su = Nu(uu, Eu, ju),
            Uu = su.type.prop(fu);
          if (!Uu) return [];
          let Zu = uu.facet(Uu),
            Xu = su.type.prop(bu);
          if (Xu) {
            let Uu = su.resolve(Eu - su.from, ju);
            for (let Eu of Xu)
              if (Eu.test(Uu, uu)) {
                let ju = uu.facet(Eu.facet);
                return "replace" == Eu.type ? ju : ju.concat(Zu)
              }
          }
          return Zu
        }))].concat(ju)
      }
      isActiveAt(uu, Eu) {
        return Nu(uu, Eu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(fu) == this.data
      }
      findRegions(uu) {
        let Eu = uu.facet(au);
        if ((null === Eu || void 0 === Eu ? void 0 : Eu.data) == this.data) return [{
          from: 0,
          to: uu.doc.length
        }];
        if (!Eu || !Eu.allowsNesting) return [];
        let ju = [],
          su = (uu, Eu) => {
            if (uu.prop(fu) == this.data) return void ju.push({
              from: Eu,
              to: Eu + uu.length
            });
            let Zu = uu.prop(Uu.j.mounted);
            if (Zu) {
              if (Zu.tree.prop(fu) == this.data) {
                if (Zu.overlay)
                  for (let uu of Zu.overlay) ju.push({
                    from: uu.from + Eu,
                    to: uu.to + Eu
                  });
                else ju.push({
                  from: Eu,
                  to: Eu + uu.length
                });
                return
              }
              if (Zu.overlay) {
                let uu = ju.length;
                if (su(Zu.tree, Zu.overlay[0].from + Eu), ju.length > uu) return
              }
            }
            for (let ju = 0; ju < uu.children.length; ju++) {
              let Zu = uu.children[ju];
              Zu instanceof Uu.y && su(Zu, uu.positions[ju] + Eu)
            }
          };
        return su(Yu(uu), 0), ju
      }
      get allowsNesting() {
        return !0
      }
    }

    function Nu(uu, Eu, ju) {
      let su = uu.facet(au),
        Zu = Yu(uu).topNode;
      if (!su || su.allowsNesting)
        for (let Xu = Zu; Xu; Xu = Xu.enter(Eu, ju, Uu.g.ExcludeBuffers | Uu.g.EnterBracketed)) Xu.type.isTop && (Zu = Xu);
      return Zu
    }
    cu.setState = Zu.L.define();
    class Ou extends cu {
      constructor(uu, Eu, ju) {
        super(uu, Eu, [], ju), this.parser = Eu
      }
      static define(uu) {
        let Eu = Cu(uu.languageData);
        return new Ou(Eu, uu.parser.configure({
          props: [fu.add((uu => uu.isTop ? Eu : void 0))]
        }), uu.name)
      }
      configure(uu, Eu) {
        return new Ou(this.data, this.parser.configure(uu), Eu || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Yu(uu) {
      let Eu = uu.field(cu.state, !1);
      return Eu ? Eu.tree : Uu.y.empty
    }

    function hu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.doc.length;
      var ju;
      return (null === (ju = uu.field(cu.state, !1)) || void 0 === ju ? void 0 : ju.context.isDone(Eu)) || !1
    }

    function Du(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.viewport.to,
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        su = function(uu, Eu) {
          let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var su;
          let Uu = null === (su = uu.field(cu.state, !1)) || void 0 === su ? void 0 : su.context;
          if (!Uu) return null;
          let Zu = Uu.viewport;
          Uu.updateViewport({
            from: 0,
            to: Eu
          });
          let Xu = Uu.isDone(Eu) || Uu.work(ju, Eu) ? Uu.tree : null;
          return Uu.updateViewport(Zu), Xu
        }(uu.state, Eu, ju);
      return su != Yu(uu.state) && uu.dispatch({}), !!su
    }
    class gu {
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
      read(uu, Eu) {
        let ju = this.cursorPos - this.string.length;
        return uu < ju || Eu >= this.cursorPos ? this.doc.sliceString(uu, Eu) : this.string.slice(uu - ju, Eu - ju)
      }
    }
    let Mu = null;
    class eu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          su = arguments.length > 3 ? arguments[3] : void 0,
          Uu = arguments.length > 4 ? arguments[4] : void 0,
          Zu = arguments.length > 5 ? arguments[5] : void 0,
          Xu = arguments.length > 6 ? arguments[6] : void 0,
          lu = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = uu, this.state = Eu, this.fragments = ju, this.tree = su, this.treeLen = Uu, this.viewport = Zu, this.skipped = Xu, this.scheduleOn = lu, this.parse = null, this.tempSkipped = []
      }
      static create(uu, Eu, ju) {
        return new eu(uu, Eu, [], Uu.y.empty, 0, ju, [], null)
      }
      startParse() {
        return this.parser.startParse(new gu(this.state.doc), this.fragments)
      }
      work(uu, Eu) {
        return null != Eu && Eu >= this.state.doc.length && (Eu = void 0), this.tree != Uu.y.empty && this.isDone(null !== Eu && void 0 !== Eu ? Eu : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var ju;
          if ("number" == typeof uu) {
            let Eu = Date.now() + uu;
            uu = () => Date.now() > Eu
          }
          for (this.parse || (this.parse = this.startParse()), null != Eu && (null == this.parse.stoppedAt || this.parse.stoppedAt > Eu) && Eu < this.state.doc.length && this.parse.stopAt(Eu);;) {
            let su = this.parse.advance();
            if (su) {
              if (this.fragments = this.withoutTempSkipped(Uu.v.addTree(su, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (ju = this.parse.stoppedAt) && void 0 !== ju ? ju : this.state.doc.length, this.tree = su, this.parse = null, !(this.treeLen < (null !== Eu && void 0 !== Eu ? Eu : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (uu()) return !1
          }
        }))
      }
      takeTree() {
        let uu, Eu;
        this.parse && (uu = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > uu) && this.parse.stopAt(uu), this.withContext((() => {
          for (; !(Eu = this.parse.advance()););
        })), this.treeLen = uu, this.tree = Eu, this.fragments = this.withoutTempSkipped(Uu.v.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(uu) {
        let Eu = Mu;
        Mu = this;
        try {
          return uu()
        } finally {
          Mu = Eu
        }
      }
      withoutTempSkipped(uu) {
        for (let Eu; Eu = this.tempSkipped.pop();) uu = Gu(uu, Eu.from, Eu.to);
        return uu
      }
      changes(uu, Eu) {
        let {
          fragments: ju,
          tree: su,
          treeLen: Zu,
          viewport: Xu,
          skipped: lu
        } = this;
        if (this.takeTree(), !uu.empty) {
          let Eu = [];
          if (uu.iterChangedRanges(((uu, ju, su, Uu) => Eu.push({
              fromA: uu,
              toA: ju,
              fromB: su,
              toB: Uu
            }))), ju = Uu.v.applyChanges(ju, Eu), su = Uu.y.empty, Zu = 0, Xu = {
              from: uu.mapPos(Xu.from, -1),
              to: uu.mapPos(Xu.to, 1)
            }, this.skipped.length) {
            lu = [];
            for (let Eu of this.skipped) {
              let ju = uu.mapPos(Eu.from, 1),
                su = uu.mapPos(Eu.to, -1);
              ju < su && lu.push({
                from: ju,
                to: su
              })
            }
          }
        }
        return new eu(this.parser, Eu, ju, su, Zu, Xu, lu, this.scheduleOn)
      }
      updateViewport(uu) {
        if (this.viewport.from == uu.from && this.viewport.to == uu.to) return !1;
        this.viewport = uu;
        let Eu = this.skipped.length;
        for (let ju = 0; ju < this.skipped.length; ju++) {
          let {
            from: Eu,
            to: su
          } = this.skipped[ju];
          Eu < uu.to && su > uu.from && (this.fragments = Gu(this.fragments, Eu, su), this.skipped.splice(ju--, 1))
        }
        return !(this.skipped.length >= Eu) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(uu, Eu) {
        this.skipped.push({
          from: uu,
          to: Eu
        })
      }
      static getSkippingParser(uu) {
        return new class extends Uu.r {
          createParse(Eu, ju, su) {
            let Zu = su[0].from,
              Xu = su[su.length - 1].to;
            return {
              parsedPos: Zu,
              advance() {
                let Eu = Mu;
                if (Eu) {
                  for (let uu of su) Eu.tempSkipped.push(uu);
                  uu && (Eu.scheduleOn = Eu.scheduleOn ? Promise.all([Eu.scheduleOn, uu]) : uu)
                }
                return this.parsedPos = Xu, new Uu.y(Uu.n.none, [], [], Xu - Zu)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(uu) {
        uu = Math.min(uu, this.state.doc.length);
        let Eu = this.fragments;
        return this.treeLen >= uu && Eu.length && 0 == Eu[0].from && Eu[0].to >= uu
      }
      static get() {
        return Mu
      }
    }

    function Gu(uu, Eu, ju) {
      return Uu.v.applyChanges(uu, [{
        fromA: Eu,
        toA: ju,
        fromB: Eu,
        toB: ju
      }])
    }
    class pu {
      constructor(uu) {
        this.context = uu, this.tree = uu.tree
      }
      apply(uu) {
        if (!uu.docChanged && this.tree == this.context.tree) return this;
        let Eu = this.context.changes(uu.changes, uu.state),
          ju = this.context.treeLen == uu.startState.doc.length ? void 0 : Math.max(uu.changes.mapPos(this.context.treeLen), Eu.viewport.to);
        return Eu.work(20, ju) || Eu.takeTree(), new pu(Eu)
      }
      static init(uu) {
        let Eu = Math.min(3e3, uu.doc.length),
          ju = eu.create(uu.facet(au).parser, uu, {
            from: 0,
            to: Eu
          });
        return ju.work(20, Eu) || ju.takeTree(), new pu(ju)
      }
    }
    cu.state = Zu.N.define({
      create: pu.init,
      update(uu, Eu) {
        for (let ju of Eu.effects)
          if (ju.is(cu.setState)) return ju.value;
        return Eu.startState.facet(au) != Eu.state.facet(au) ? pu.init(Eu.state) : uu.apply(Eu)
      }
    });
    let wu = uu => {
      let Eu = setTimeout((() => uu()), 500);
      return () => clearTimeout(Eu)
    };
    "undefined" != typeof requestIdleCallback && (wu = uu => {
      let Eu = -1,
        ju = setTimeout((() => {
          Eu = requestIdleCallback(uu, {
            timeout: 400
          })
        }), 100);
      return () => Eu < 0 ? clearTimeout(ju) : cancelIdleCallback(Eu)
    });
    const Ju = "undefined" != typeof navigator && (null === (su = navigator.scheduling) || void 0 === su ? void 0 : su.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      du = Xu.o.fromClass(class {
        constructor(uu) {
          this.view = uu, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(uu) {
          let Eu = this.view.state.field(cu.state).context;
          (Eu.updateViewport(uu.view.viewport) || this.view.viewport.to > Eu.treeLen) && this.scheduleWork(), (uu.docChanged || uu.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(Eu)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: uu
          } = this.view, Eu = uu.field(cu.state);
          Eu.tree == Eu.context.tree && Eu.context.isDone(uu.doc.length) || (this.working = wu(this.work))
        }
        work(uu) {
          this.working = null;
          let Eu = Date.now();
          if (this.chunkEnd < Eu && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = Eu + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: ju,
            viewport: {
              to: su
            }
          } = this.view, Uu = ju.field(cu.state);
          if (Uu.tree == Uu.context.tree && Uu.context.isDone(su + 1e5)) return;
          let Zu = Date.now() + Math.min(this.chunkBudget, 100, uu && !Ju ? Math.max(25, uu.timeRemaining() - 5) : 1e9),
            Xu = Uu.context.treeLen < su && ju.doc.length > su + 1e3,
            lu = Uu.context.work((() => Ju && Ju() || Date.now() > Zu), su + (Xu ? 0 : 1e5));
          this.chunkBudget -= Date.now() - Eu, (lu || this.chunkBudget <= 0) && (Uu.context.takeTree(), this.view.dispatch({
            effects: cu.setState.of(new pu(Uu.context))
          })), this.chunkBudget > 0 && (!lu || Xu) && this.scheduleWork(), this.checkAsyncSchedule(Uu.context)
        }
        checkAsyncSchedule(uu) {
          uu.scheduleOn && (this.workScheduled++, uu.scheduleOn.then((() => this.scheduleWork())).catch((uu => (0, Xu.Y)(this.view.state, uu))).then((() => this.workScheduled--)), uu.scheduleOn = null)
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
      au = Zu.r.define({
        combine: uu => uu.length ? uu[0] : null,
        enables: uu => [cu.state, du, Xu.l.contentAttributes.compute([uu], (Eu => {
          let ju = Eu.facet(uu);
          return ju && ju.name ? {
            "data-language": ju.name
          } : {}
        }))]
      });
    class Pu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = uu, this.support = Eu, this.extension = [uu, Eu]
      }
    }
    const ou = Zu.r.define(),
      ku = Zu.r.define({
        combine: uu => {
          if (!uu.length) return "  ";
          let Eu = uu[0];
          if (!Eu || /\S/.test(Eu) || Array.from(Eu).some((uu => uu != Eu[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(uu[0]));
          return Eu
        }
      });

    function mu(uu) {
      let Eu = uu.facet(ku);
      return 9 == Eu.charCodeAt(0) ? uu.tabSize * Eu.length : Eu.length
    }

    function vu(uu, Eu) {
      let ju = "",
        su = uu.tabSize,
        Uu = uu.facet(ku)[0];
      if ("\t" == Uu) {
        for (; Eu >= su;) ju += "\t", Eu -= su;
        Uu = " "
      }
      for (let Zu = 0; Zu < Eu; Zu++) ju += Uu;
      return ju
    }

    function Ku(uu, Eu) {
      uu instanceof Zu.o && (uu = new Vu(uu));
      for (let su of uu.state.facet(ou)) {
        let ju = su(uu, Eu);
        if (void 0 !== ju) return ju
      }
      let ju = Yu(uu.state);
      return ju.length >= Eu ? function(uu, Eu, ju) {
        let su = Eu.resolveStack(ju),
          Uu = Eu.resolveInner(ju, -1).resolve(ju, 0).enterUnfinishedNodesBefore(ju);
        if (Uu != su.node) {
          let uu = [];
          for (let Eu = Uu; Eu && !(Eu.from < su.node.from || Eu.to > su.node.to || Eu.from == su.node.from && Eu.type == su.node.type); Eu = Eu.parent) uu.push(Eu);
          for (let Eu = uu.length - 1; Eu >= 0; Eu--) su = {
            node: uu[Eu],
            next: su
          }
        }
        return Qu(su, uu, ju)
      }(uu, ju, Eu) : null
    }
    class Vu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = uu, this.options = Eu, this.unit = mu(uu)
      }
      lineAt(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ju = this.state.doc.lineAt(uu),
          {
            simulateBreak: su,
            simulateDoubleBreak: Uu
          } = this.options;
        return null != su && su >= ju.from && su <= ju.to ? Uu && su == uu ? {
          text: "",
          from: uu
        } : (Eu < 0 ? su < uu : su <= uu) ? {
          text: ju.text.slice(su - ju.from),
          from: su
        } : {
          text: ju.text.slice(0, su - ju.from),
          from: ju.from
        } : ju
      }
      textAfterPos(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && uu == this.options.simulateBreak) return "";
        let {
          text: ju,
          from: su
        } = this.lineAt(uu, Eu);
        return ju.slice(uu - su, Math.min(ju.length, uu + 100 - su))
      }
      column(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: ju,
            from: su
          } = this.lineAt(uu, Eu),
          Uu = this.countColumn(ju, uu - su),
          Zu = this.options.overrideIndentation ? this.options.overrideIndentation(su) : -1;
        return Zu > -1 && (Uu += Zu - this.countColumn(ju, ju.search(/\S|$/))), Uu
      }
      countColumn(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.length;
        return (0, Zu.bb)(uu, this.state.tabSize, Eu)
      }
      lineIndent(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: ju,
            from: su
          } = this.lineAt(uu, Eu),
          Uu = this.options.overrideIndentation;
        if (Uu) {
          let uu = Uu(su);
          if (uu > -1) return uu
        }
        return this.countColumn(ju, ju.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const ru = new Uu.j;

    function Qu(uu, Eu, ju) {
      for (let su = uu; su; su = su.next) {
        let uu = iu(su.node);
        if (uu) return uu(Su.create(Eu, ju, su))
      }
      return 0
    }

    function iu(uu) {
      let Eu = uu.type.prop(ru);
      if (Eu) return Eu;
      let ju, su = uu.firstChild;
      if (su && (ju = su.type.prop(Uu.j.closedBy))) {
        let Eu = uu.lastChild,
          su = Eu && ju.indexOf(Eu.name) > -1;
        return uu => Bu(uu, !0, 1, void 0, su && ! function(uu) {
          return uu.pos == uu.options.simulateBreak && uu.options.simulateDoubleBreak
        }(uu) ? Eu.from : void 0)
      }
      return null == uu.parent ? Wu : null
    }

    function Wu() {
      return 0
    }
    class Su extends Vu {
      constructor(uu, Eu, ju) {
        super(uu.state, uu.options), this.base = uu, this.pos = Eu, this.context = ju
      }
      get node() {
        return this.context.node
      }
      static create(uu, Eu, ju) {
        return new Su(uu, Eu, ju)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(uu) {
        let Eu = this.state.doc.lineAt(uu.from);
        for (;;) {
          let ju = uu.resolve(Eu.from);
          for (; ju.parent && ju.parent.from == ju.from;) ju = ju.parent;
          if (Iu(ju, uu)) break;
          Eu = this.state.doc.lineAt(ju.from)
        }
        return this.lineIndent(Eu.from)
      }
      continue () {
        return Qu(this.context.next, this.base, this.pos)
      }
    }

    function Iu(uu, Eu) {
      for (let ju = Eu; ju; ju = ju.parent)
        if (uu == ju) return !0;
      return !1
    }

    function Fu(uu) {
      let {
        closing: Eu,
        align: ju = !0,
        units: su = 1
      } = uu;
      return uu => Bu(uu, ju, su, Eu)
    }

    function Bu(uu, Eu, ju, su, Uu) {
      let Zu = uu.textAfter,
        Xu = Zu.match(/^\s*/)[0].length,
        lu = su && Zu.slice(Xu, Xu + su.length) == su || Uu == uu.pos + Xu,
        qu = Eu ? function(uu) {
          let Eu = uu.node,
            ju = Eu.childAfter(Eu.from),
            su = Eu.lastChild;
          if (!ju) return null;
          let Uu = uu.options.simulateBreak,
            Zu = uu.state.doc.lineAt(ju.from),
            Xu = null == Uu || Uu <= Zu.from ? Zu.to : Math.min(Zu.to, Uu);
          for (let lu = ju.to;;) {
            let uu = Eu.childAfter(lu);
            if (!uu || uu == su) return null;
            if (!uu.type.isSkipped) {
              if (uu.from >= Xu) return null;
              let Eu = /^ */.exec(Zu.text.slice(ju.to - Zu.from))[0].length;
              return {
                from: ju.from,
                to: ju.to + Eu
              }
            }
            lu = uu.to
          }
        }(uu) : null;
      return qu ? lu ? uu.column(qu.from) : uu.column(qu.to) : uu.baseIndent + (lu ? 0 : uu.unit * ju)
    }
    const Lu = uu => uu.baseIndent;

    function tu() {
      let {
        except: uu,
        units: Eu = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return ju => {
        let su = uu && uu.test(ju.textAfter);
        return ju.baseIndent + (su ? 0 : Eu * ju.unit)
      }
    }
    const xu = 200;

    function Tu() {
      return Zu.o.transactionFilter.of((uu => {
        if (!uu.docChanged || !uu.isUserEvent("input.type") && !uu.isUserEvent("input.complete")) return uu;
        let Eu = uu.startState.languageDataAt("indentOnInput", uu.startState.selection.main.head);
        if (!Eu.length) return uu;
        let ju = uu.newDoc,
          {
            head: su
          } = uu.newSelection.main,
          Uu = ju.lineAt(su);
        if (su > Uu.from + xu) return uu;
        let Zu = ju.sliceString(Uu.from, su);
        if (!Eu.some((uu => uu.test(Zu)))) return uu;
        let {
          state: Xu
        } = uu, lu = -1, qu = [];
        for (let {
            head: fu
          }
          of Xu.selection.HY) {
          let uu = Xu.doc.lineAt(fu);
          if (uu.from == lu) continue;
          lu = uu.from;
          let Eu = Ku(Xu, uu.from);
          if (null == Eu) continue;
          let ju = /^\s*/.exec(uu.text)[0],
            su = vu(Xu, Eu);
          ju != su && qu.push({
            from: uu.from,
            to: uu.from + ju.length,
            insert: su
          })
        }
        return qu.length ? [uu, {
          changes: qu,
          sequential: !0
        }] : uu
      }))
    }
    const Hu = Zu.r.define(),
      Au = new Uu.j;

    function nu(uu) {
      let Eu = uu.firstChild,
        ju = uu.lastChild;
      return Eu && Eu.to < ju.from ? {
        from: Eu.to,
        to: ju.type.isError ? uu.to : ju.from
      } : null
    }

    function yu(uu) {
      let Eu = uu.lastChild;
      return Eu && Eu.to == uu.to && Eu.type.isError
    }

    function zu(uu, Eu, ju) {
      for (let su of uu.facet(Hu)) {
        let Uu = su(uu, Eu, ju);
        if (Uu) return Uu
      }
      return function(uu, Eu, ju) {
        let su = Yu(uu);
        if (su.length < ju) return null;
        let Uu = null;
        for (let Zu = su.resolveStack(ju, 1); Zu; Zu = Zu.next) {
          let Xu = Zu.node;
          if (Xu.to <= ju || Xu.from > ju) continue;
          if (Uu && Xu.from < Eu) break;
          let lu = Xu.type.prop(Au);
          if (lu && (Xu.to < su.length - 50 || su.length == uu.doc.length || !yu(Xu))) {
            let su = lu(Xu, uu);
            su && su.from <= ju && su.from >= Eu && su.to > ju && (Uu = su)
          }
        }
        return Uu
      }(uu, Eu, ju)
    }

    function Ru(uu, Eu) {
      let ju = Eu.mapPos(uu.from, 1),
        su = Eu.mapPos(uu.to, -1);
      return ju >= su ? void 0 : {
        from: ju,
        to: su
      }
    }
    const uE = Zu.L.define({
        map: Ru
      }),
      EE = Zu.L.define({
        map: Ru
      });

    function jE(uu) {
      let Eu = [];
      for (let {
          head: ju
        }
        of uu.state.selection.HY) Eu.some((uu => uu.from <= ju && uu.to >= ju)) || Eu.push(uu.lineBlockAt(ju));
      return Eu
    }
    const sE = Zu.N.define({
      create: () => Xu.e.none,
      update(uu, Eu) {
        Eu.isUserEvent("delete") && Eu.changes.iterChangedRanges(((Eu, ju) => uu = UE(uu, Eu, ju))), uu = uu.map(Eu.changes);
        for (let ju of Eu.effects)
          if (ju.is(uE) && !XE(uu, ju.value.from, ju.value.to)) {
            let {
              preparePlaceholder: su
            } = Eu.state.facet(bE), Uu = su ? Xu.e.replace({
              widget: new YE(su(Eu.state, ju.value))
            }) : OE;
            uu = uu.update({
              add: [Uu.range(ju.value.from, ju.value.to)]
            })
          } else ju.is(EE) && (uu = uu.update({
            filter: (uu, Eu) => ju.value.from != uu || ju.value.to != Eu,
            filterFrom: ju.value.from,
            filterTo: ju.value.to
          }));
        return Eu.selection && (uu = UE(uu, Eu.selection.main.head)), uu
      },
      provide: uu => Xu.l.Cs.from(uu),
      toJSON(uu, Eu) {
        let ju = [];
        return uu.between(0, Eu.doc.length, ((uu, Eu) => {
          ju.push(uu, Eu)
        })), ju
      },
      fromJSON(uu) {
        if (!Array.isArray(uu) || uu.length % 2) throw new RangeError("Invalid JSON for fold state");
        let Eu = [];
        for (let ju = 0; ju < uu.length;) {
          let su = uu[ju++],
            Uu = uu[ju++];
          if ("number" != typeof su || "number" != typeof Uu) throw new RangeError("Invalid JSON for fold state");
          Eu.push(OE.range(su, Uu))
        }
        return Xu.e.set(Eu, !0)
      }
    });

    function UE(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eu,
        su = !1;
      return uu.between(Eu, ju, ((uu, Uu) => {
        uu < ju && Uu > Eu && (su = !0)
      })), su ? uu.update({
        filterFrom: Eu,
        filterTo: ju,
        filter: (uu, su) => uu >= ju || su <= Eu
      }) : uu
    }

    function ZE(uu, Eu, ju) {
      var su;
      let Uu = null;
      return null === (su = uu.field(sE, !1)) || void 0 === su || su.between(Eu, ju, ((uu, Eu) => {
        (!Uu || Uu.from > uu) && (Uu = {
          from: uu,
          to: Eu
        })
      })), Uu
    }

    function XE(uu, Eu, ju) {
      let su = !1;
      return uu.between(Eu, Eu, ((uu, Uu) => {
        uu == Eu && Uu == ju && (su = !0)
      })), su
    }

    function lE(uu, Eu) {
      return uu.field(sE, !1) ? Eu : Eu.concat(Zu.L.appendConfig.of(cE()))
    }

    function qE(uu, Eu) {
      let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        su = uu.state.doc.lineAt(Eu.from).number,
        Uu = uu.state.doc.lineAt(Eu.to).number;
      return Xu.l.announce.of(`${uu.state.phrase(ju?"Folded lines":"Unfolded lines")} ${su} ${uu.state.phrase("to")} ${Uu}.`)
    }
    const fE = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: uu => {
          for (let Eu of jE(uu)) {
            let ju = zu(uu.state, Eu.from, Eu.to);
            if (ju) return uu.dispatch({
              effects: lE(uu.state, [uE.of(ju), qE(uu, ju)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: uu => {
          if (!uu.state.field(sE, !1)) return !1;
          let Eu = [];
          for (let ju of jE(uu)) {
            let su = ZE(uu.state, ju.from, ju.to);
            su && Eu.push(EE.of(su), qE(uu, su, !1))
          }
          return Eu.length && uu.dispatch({
            effects: Eu
          }), Eu.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: uu => {
          let {
            state: Eu
          } = uu, ju = [];
          for (let su = 0; su < Eu.doc.length;) {
            let Uu = uu.lineBlockAt(su),
              Zu = zu(Eu, Uu.from, Uu.to);
            Zu && ju.push(uE.of(Zu)), su = (Zu ? uu.lineBlockAt(Zu.to) : Uu).to + 1
          }
          return ju.length && uu.dispatch({
            effects: lE(uu.state, ju)
          }), !!ju.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: uu => {
          let Eu = uu.state.field(sE, !1);
          if (!Eu || !Eu.size) return !1;
          let ju = [];
          return Eu.between(0, uu.state.doc.length, ((uu, Eu) => {
            ju.push(EE.of({
              from: uu,
              to: Eu
            }))
          })), uu.dispatch({
            effects: ju
          }), !0
        }
      }],
      CE = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      bE = Zu.r.define({
        combine: uu => (0, Zu.Z)(uu, CE)
      });

    function cE(uu) {
      let Eu = [sE, ME];
      return uu && Eu.push(bE.of(uu)), Eu
    }

    function NE(uu, Eu) {
      let {
        state: ju
      } = uu, su = ju.facet(bE), Uu = Eu => {
        let ju = uu.lineBlockAt(uu.posAtDOM(Eu.target)),
          su = ZE(uu.state, ju.from, ju.to);
        su && uu.dispatch({
          effects: EE.of(su)
        }), Eu.preventDefault()
      };
      if (su.placeholderDOM) return su.placeholderDOM(uu, Uu, Eu);
      let Zu = document.createElement("span");
      return Zu.textContent = su.placeholderText, Zu.setAttribute("aria-label", ju.phrase("folded code")), Zu.title = ju.phrase("unfold"), Zu.className = "cm-foldPlaceholder", Zu.onclick = Uu, Zu
    }
    const OE = Xu.e.replace({
      widget: new class extends Xu.r {
        toDOM(uu) {
          return NE(uu, null)
        }
      }
    });
    class YE extends Xu.r {
      constructor(uu) {
        super(), this.value = uu
      }
      eq(uu) {
        return this.value == uu.value
      }
      toDOM(uu) {
        return NE(uu, this.value)
      }
    }
    const hE = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class DE extends Xu.n {
      constructor(uu, Eu) {
        super(), this.config = uu, this.open = Eu
      }
      eq(uu) {
        return this.config == uu.config && this.open == uu.open
      }
      toDOM(uu) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let Eu = document.createElement("span");
        return Eu.textContent = this.open ? this.config.openText : this.config.closedText, Eu.title = uu.state.phrase(this.open ? "Fold line" : "Unfold line"), Eu
      }
    }

    function gE() {
      let uu = {
          ...hE,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        Eu = new DE(uu, !0),
        ju = new DE(uu, !1),
        su = Xu.o.fromClass(class {
          constructor(uu) {
            this.from = uu.viewport.from, this.markers = this.buildMarkers(uu)
          }
          update(Eu) {
            (Eu.docChanged || Eu.viewportChanged || Eu.startState.facet(au) != Eu.state.facet(au) || Eu.startState.field(sE, !1) != Eu.state.field(sE, !1) || Yu(Eu.startState) != Yu(Eu.state) || uu.foldingChanged(Eu)) && (this.markers = this.buildMarkers(Eu.view))
          }
          buildMarkers(uu) {
            let su = new Zu.C;
            for (let Uu of uu.viewportLineBlocks) {
              let Zu = ZE(uu.state, Uu.from, Uu.to) ? ju : zu(uu.state, Uu.from, Uu.to) ? Eu : null;
              Zu && su.add(Uu.from, Uu.from, Zu)
            }
            return su.finish()
          }
        }),
        {
          domEventHandlers: Uu
        } = uu;
      return [su, (0, Xu.H)({
        class: "cm-foldGutter",
        markers(uu) {
          var Eu;
          return (null === (Eu = uu.plugin(su)) || void 0 === Eu ? void 0 : Eu.markers) || Zu.E.empty
        },
        initialSpacer: () => new DE(uu, !1),
        domEventHandlers: {
          ...Uu,
          click: (uu, Eu, ju) => {
            if (Uu.click && Uu.click(uu, Eu, ju)) return !0;
            let su = ZE(uu.state, Eu.from, Eu.to);
            if (su) return uu.dispatch({
              effects: EE.of(su)
            }), !0;
            let Zu = zu(uu.state, Eu.from, Eu.to);
            return !!Zu && (uu.dispatch({
              effects: uE.of(Zu)
            }), !0)
          }
        }
      }), cE()]
    }
    const ME = Xu.l.baseTheme({
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
    class eE {
      constructor(uu, Eu) {
        let ju;

        function su(uu) {
          let Eu = qu.e.newName();
          return (ju || (ju = Object.create(null)))["." + Eu] = uu, Eu
        }
        this.specs = uu;
        const Uu = "string" == typeof Eu.all ? Eu.all : Eu.all ? su(Eu.all) : void 0,
          Zu = Eu.scope;
        this.scope = Zu instanceof cu ? uu => uu.prop(fu) == Zu.data : Zu ? uu => uu == Zu : void 0, this.style = (0, lu.i)(uu.map((uu => ({
          tag: uu.tag,
          class: uu.class || su(Object.assign({}, uu, {
            tag: null
          }))
        }))), {
          all: Uu
        }).style, this.module = ju ? new qu.e(ju) : null, this.themeType = Eu.themeType
      }
      static define(uu, Eu) {
        return new eE(uu, Eu || {})
      }
    }
    const GE = Zu.r.define(),
      pE = Zu.r.define({
        combine: uu => uu.length ? [uu[0]] : null
      });

    function wE(uu) {
      let Eu = uu.facet(GE);
      return Eu.length ? Eu : uu.facet(pE)
    }

    function JE(uu, Eu) {
      let ju, su = [aE];
      return uu instanceof eE && (uu.module && su.push(Xu.l.styleModule.of(uu.module)), ju = uu.themeType), (null === Eu || void 0 === Eu ? void 0 : Eu.fallback) ? su.push(pE.of(uu)) : ju ? su.push(GE.computeN([Xu.l.darkTheme], (Eu => Eu.facet(Xu.l.darkTheme) == ("dark" == ju) ? [uu] : []))) : su.push(GE.of(uu)), su
    }
    class dE {
      constructor(uu) {
        this.markCache = Object.create(null), this.tree = Yu(uu.state), this.Cs = this.buildDeco(uu, wE(uu.state)), this.decoratedTo = uu.viewport.to
      }
      update(uu) {
        let Eu = Yu(uu.state),
          ju = wE(uu.state),
          su = ju != wE(uu.startState),
          {
            viewport: Uu
          } = uu.view,
          Zu = uu.changes.mapPos(this.decoratedTo, 1);
        Eu.length < Uu.to && !su && Eu.type == this.tree.type && Zu >= Uu.to ? (this.Cs = this.Cs.map(uu.changes), this.decoratedTo = Zu) : (Eu != this.tree || uu.viewportChanged || su) && (this.tree = Eu, this.Cs = this.buildDeco(uu.view, ju), this.decoratedTo = Uu.to)
      }
      buildDeco(uu, Eu) {
        if (!Eu || !this.tree.length) return Xu.e.none;
        let ju = new Zu.C;
        for (let {
            from: su,
            to: Uu
          }
          of uu.Q8)(0, lu.c)(this.tree, Eu, ((uu, Eu, su) => {
          ju.add(uu, Eu, this.markCache[su] || (this.markCache[su] = Xu.e.mark({
            class: su
          })))
        }), su, Uu);
        return ju.finish()
      }
    }
    const aE = Zu.y.high(Xu.o.fromClass(dE, {
        Cs: uu => uu.Cs
      })),
      PE = eE.define([{
        tag: lu.l.meta,
        color: "#404740"
      }, {
        tag: lu.l.link,
        textDecoration: "underline"
      }, {
        tag: lu.l.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: lu.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: lu.l.strong,
        fontWeight: "bold"
      }, {
        tag: lu.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: lu.l.keyword,
        color: "#708"
      }, {
        tag: [lu.l.atom, lu.l.bool, lu.l.url, lu.l.contentSeparator, lu.l.labelName],
        color: "#219"
      }, {
        tag: [lu.l.literal, lu.l.inserted],
        color: "#164"
      }, {
        tag: [lu.l.string, lu.l.deleted],
        color: "#a11"
      }, {
        tag: [lu.l.regexp, lu.l.escape, lu.l.special(lu.l.string)],
        color: "#e40"
      }, {
        tag: lu.l.definition(lu.l.variableName),
        color: "#00f"
      }, {
        tag: lu.l.local(lu.l.variableName),
        color: "#30a"
      }, {
        tag: [lu.l.typeName, lu.l.namespace],
        color: "#085"
      }, {
        tag: lu.l.className,
        color: "#167"
      }, {
        tag: [lu.l.special(lu.l.variableName), lu.l.macroName],
        color: "#256"
      }, {
        tag: lu.l.definition(lu.l.propertyName),
        color: "#00c"
      }, {
        tag: lu.l.comment,
        color: "#940"
      }, {
        tag: lu.l.invalid,
        color: "#f00"
      }]),
      oE = Xu.l.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      kE = 1e4,
      mE = "()[]{}",
      vE = Zu.r.define({
        combine: uu => (0, Zu.Z)(uu, {
          afterCursor: !0,
          brackets: mE,
          maxScanDistance: kE,
          renderMatch: rE
        })
      }),
      KE = Xu.e.mark({
        class: "cm-matchingBracket"
      }),
      VE = Xu.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function rE(uu) {
      let Eu = [],
        ju = uu.matched ? KE : VE;
      return Eu.push(ju.range(uu.start.from, uu.start.to)), uu.end && Eu.push(ju.range(uu.end.from, uu.end.to)), Eu
    }

    function QE(uu) {
      let Eu = [],
        ju = uu.facet(vE);
      for (let su of uu.selection.HY) {
        if (!su.empty) continue;
        let Uu = BE(uu, su.head, -1, ju) || su.head > 0 && BE(uu, su.head - 1, 1, ju) || ju.afterCursor && (BE(uu, su.head, 1, ju) || su.head < uu.doc.length && BE(uu, su.head + 1, -1, ju));
        Uu && (Eu = Eu.concat(ju.renderMatch(Uu, uu)))
      }
      return Xu.e.set(Eu, !0)
    }
    const iE = [Xu.o.fromClass(class {
      constructor(uu) {
        this.paused = !1, this.Cs = QE(uu.state)
      }
      update(uu) {
        (uu.docChanged || uu.selectionSet || this.paused) && (uu.view.composing ? (this.Cs = this.Cs.map(uu.changes), this.paused = !0) : (this.Cs = QE(uu.state), this.paused = !1))
      }
    }, {
      Cs: uu => uu.Cs
    }), oE];

    function WE() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [vE.of(uu), iE]
    }
    const SE = new Uu.j;

    function IE(uu, Eu, ju) {
      let su = uu.prop(Eu < 0 ? Uu.j.openedBy : Uu.j.closedBy);
      if (su) return su;
      if (1 == uu.name.length) {
        let su = ju.indexOf(uu.name);
        if (su > -1 && su % 2 == (Eu < 0 ? 1 : 0)) return [ju[su + Eu]]
      }
      return null
    }

    function FE(uu) {
      let Eu = uu.type.prop(SE);
      return Eu ? Eu(uu.node) : uu
    }

    function BE(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Uu = su.maxScanDistance || kE,
        Zu = su.brackets || mE,
        Xu = Yu(uu),
        lu = Xu.resolveInner(Eu, ju);
      for (let qu = lu; qu; qu = qu.parent) {
        let su = IE(qu.type, ju, Zu);
        if (su && qu.from < qu.to) {
          let Uu = FE(qu);
          if (Uu && (ju > 0 ? Eu >= Uu.from && Eu < Uu.to : Eu > Uu.from && Eu <= Uu.to)) return LE(uu, Eu, ju, qu, Uu, su, Zu)
        }
      }
      return function(uu, Eu, ju, su, Uu, Zu, Xu) {
        if (ju < 0 ? !Eu : Eu == uu.doc.length) return null;
        let lu = ju < 0 ? uu.sliceDoc(Eu - 1, Eu) : uu.sliceDoc(Eu, Eu + 1),
          qu = Xu.indexOf(lu);
        if (qu < 0 || qu % 2 == 0 != ju > 0) return null;
        let fu = {
            from: ju < 0 ? Eu - 1 : Eu,
            to: ju > 0 ? Eu + 1 : Eu
          },
          Cu = uu.doc.iterRange(Eu, ju > 0 ? uu.doc.length : 0),
          bu = 0;
        for (let cu = 0; !Cu.next().done && cu <= Zu;) {
          let uu = Cu.value;
          ju < 0 && (cu += uu.length);
          let Zu = Eu + cu * ju;
          for (let Eu = ju > 0 ? 0 : uu.length - 1, lu = ju > 0 ? uu.length : -1; Eu != lu; Eu += ju) {
            let lu = Xu.indexOf(uu[Eu]);
            if (!(lu < 0 || su.resolveInner(Zu + Eu, 1).type != Uu))
              if (lu % 2 == 0 == ju > 0) bu++;
              else {
                if (1 == bu) return {
                  start: fu,
                  end: {
                    from: Zu + Eu,
                    to: Zu + Eu + 1
                  },
                  matched: lu >> 1 == qu >> 1
                };
                bu--
              }
          }
          ju > 0 && (cu += uu.length)
        }
        return Cu.done ? {
          start: fu,
          matched: !1
        } : null
      }(uu, Eu, ju, Xu, lu.type, Uu, Zu)
    }

    function LE(uu, Eu, ju, su, Uu, Zu, Xu) {
      let lu = su.parent,
        qu = {
          from: Uu.from,
          to: Uu.to
        },
        fu = 0,
        Cu = null === lu || void 0 === lu ? void 0 : lu.cursor();
      if (Cu && (ju < 0 ? Cu.childBefore(su.from) : Cu.childAfter(su.to)))
        do {
          if (ju < 0 ? Cu.to <= su.from : Cu.from >= su.to) {
            if (0 == fu && Zu.indexOf(Cu.type.name) > -1 && Cu.from < Cu.to) {
              let uu = FE(Cu);
              return {
                start: qu,
                end: uu ? {
                  from: uu.from,
                  to: uu.to
                } : void 0,
                matched: !0
              }
            }
            if (IE(Cu.type, ju, Xu)) fu++;
            else if (IE(Cu.type, -ju, Xu)) {
              if (0 == fu) {
                let uu = FE(Cu);
                return {
                  start: qu,
                  end: uu && uu.from < uu.to ? {
                    from: uu.from,
                    to: uu.to
                  } : void 0,
                  matched: !1
                }
              }
              fu--
            }
          }
        } while (ju < 0 ? Cu.prevSibling() : Cu.nextSibling());
      return {
        start: qu,
        matched: !1
      }
    }
    const tE = Object.create(null),
      xE = [Uu.n.none],
      TE = [],
      HE = Object.create(null),
      AE = Object.create(null);
    for (let [zE, RE] of [
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
      ]) AE[zE] = yE(tE, RE);

    function nE(uu, Eu) {
      TE.indexOf(uu) > -1 || (TE.push(uu), console.warn(Eu))
    }

    function yE(uu, Eu) {
      let ju = [];
      for (let Uu of Eu.split(" ")) {
        let Eu = [];
        for (let ju of Uu.split(".")) {
          let su = uu[ju] || lu.l[ju];
          su ? "function" == typeof su ? Eu.length ? Eu = Eu.map(su) : nE(ju, `Modifier ${ju} used at start of tag`) : Eu.length ? nE(ju, `Tag ${ju} used as modifier`) : Eu = Array.isArray(su) ? su : [su] : nE(ju, `Unknown highlighting tag ${ju}`)
        }
        for (let uu of Eu) ju.push(uu)
      }
      if (!ju.length) return 0;
      let su = Eu.replace(/ /g, "_"),
        Zu = su + " " + ju.map((uu => uu.id)),
        Xu = HE[Zu];
      if (Xu) return Xu.id;
      let qu = HE[Zu] = Uu.n.define({
        id: xE.length,
        name: su,
        props: [(0, lu.g)({
          [su]: ju
        })]
      });
      return xE.push(qu), qu.id
    }
    Xu.h.RTL, Xu.h.LTR
  },
  41606: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Mu,
      h: () => wu
    });
    var su = ju(41553),
      Uu = ju(41550),
      Zu = ju(41563);
    class Xu {
      constructor(uu, Eu, ju) {
        this.from = uu, this.to = Eu, this.diagnostic = ju
      }
    }
    class lu {
      constructor(uu, Eu, ju) {
        this.diagnostics = uu, this.panel = Eu, this.selected = ju
      }
      static init(uu, Eu, ju) {
        let Zu = ju.facet(Gu).markerFilter;
        Zu && (uu = Zu(uu, ju));
        let Xu = uu.slice().sort(((uu, Eu) => uu.from - Eu.from || uu.to - Eu.to)),
          fu = new Uu.C,
          Cu = [],
          bu = 0,
          cu = ju.doc.iter(),
          Nu = 0,
          Ou = ju.doc.length;
        for (let Uu = 0;;) {
          let uu, Eu, ju = Uu == Xu.length ? null : Xu[Uu];
          if (!ju && !Cu.length) break;
          if (Cu.length) uu = bu, Eu = Cu.reduce(((uu, Eu) => Math.min(uu, Eu.to)), ju && ju.from > uu ? ju.from : 1e8);
          else {
            if (uu = ju.from, uu > Ou) break;
            Eu = ju.to, Cu.push(ju), Uu++
          }
          for (; Uu < Xu.length;) {
            let ju = Xu[Uu];
            if (ju.from != uu || !(ju.to > ju.from || ju.to == uu)) {
              Eu = Math.min(ju.from, Eu);
              break
            }
            Cu.push(ju), Uu++, Eu = Math.min(ju.to, Eu)
          }
          Eu = Math.min(Eu, Ou);
          let Zu = !1;
          if (Cu.some((ju => ju.from == uu && (ju.to == Eu || Eu == Ou))) && (Zu = uu == Eu, !Zu && Eu - uu < 10)) {
            let ju = uu - (Nu + cu.value.length);
            ju > 0 && (cu.next(ju), Nu = uu);
            for (let su = uu;;) {
              if (su >= Eu) {
                Zu = !0;
                break
              }
              if (!cu.lineBreak && Nu + cu.value.length > su) break;
              su = Nu + cu.value.length, Nu += cu.value.length, cu.next()
            }
          }
          let lu = Vu(Cu);
          if (Zu) fu.add(uu, uu, su.e.widget({
            widget: new au(lu),
            diagnostics: Cu.slice()
          }));
          else {
            let ju = Cu.reduce(((uu, Eu) => Eu.markClass ? uu + " " + Eu.markClass : uu), "");
            fu.add(uu, Eu, su.e.mark({
              class: "cm-lintRange cm-lintRange-" + lu + ju,
              diagnostics: Cu.slice(),
              inclusiveEnd: Cu.some((uu => uu.to > Eu))
            }))
          }
          if (bu = Eu, bu == Ou) break;
          for (let su = 0; su < Cu.length; su++) Cu[su].to <= bu && Cu.splice(su--, 1)
        }
        let Yu = fu.finish();
        return new lu(Yu, Eu, qu(Yu))
      }
    }

    function qu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        su = null;
      return uu.between(ju, 1e9, ((uu, ju, Uu) => {
        let {
          spec: Zu
        } = Uu;
        if (!(Eu && Zu.diagnostics.indexOf(Eu) < 0))
          if (su) {
            if (Zu.diagnostics.indexOf(su.diagnostic) < 0) return !1;
            su = new Xu(su.from, ju, su.diagnostic)
          } else su = new Xu(uu, ju, Eu || Zu.diagnostics[0])
      })), su
    }

    function fu(uu, Eu) {
      let ju = Eu.pos,
        su = Eu.end || ju,
        Uu = uu.state.facet(Gu).hideOn(uu, ju, su);
      if (null != Uu) return Uu;
      let Zu = uu.startState.doc.lineAt(Eu.pos);
      return !(!uu.effects.some((uu => uu.is(bu))) && !uu.changes.touchesRange(Zu.from, Math.max(Zu.to, su)))
    }

    function Cu(uu, Eu) {
      return uu.field(Ou, !1) ? Eu : Eu.concat(Uu.L.appendConfig.of(ru))
    }
    const bu = Uu.L.define(),
      cu = Uu.L.define(),
      Nu = Uu.L.define(),
      Ou = Uu.N.define({
        create: () => new lu(su.e.none, null, null),
        update(uu, Eu) {
          if (Eu.docChanged && uu.diagnostics.size) {
            let ju = uu.diagnostics.map(Eu.changes),
              su = null,
              Uu = uu.panel;
            if (uu.selected) {
              let Uu = Eu.changes.mapPos(uu.selected.from, 1);
              su = qu(ju, uu.selected.diagnostic, Uu) || qu(ju, null, Uu)
            }!ju.size && Uu && Eu.state.facet(Gu).autoPanel && (Uu = null), uu = new lu(ju, Uu, su)
          }
          for (let ju of Eu.effects)
            if (ju.is(bu)) {
              let su = Eu.state.facet(Gu).autoPanel ? ju.value.length ? ou.open : null : uu.panel;
              uu = lu.init(ju.value, su, Eu.state)
            } else ju.is(cu) ? uu = new lu(uu.diagnostics, ju.value ? ou.open : null, uu.selected) : ju.is(Nu) && (uu = new lu(uu.diagnostics, uu.panel, ju.value));
          return uu
        },
        provide: uu => [su.gb.from(uu, (uu => uu.panel)), su.l.Cs.from(uu, (uu => uu.diagnostics))]
      });
    const Yu = su.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function hu(uu, Eu, ju) {
      let su, {
          diagnostics: Uu
        } = uu.state.field(Ou),
        Zu = -1,
        Xu = -1;
      Uu.between(Eu - (ju < 0 ? 1 : 0), Eu + (ju > 0 ? 1 : 0), ((uu, Uu, lu) => {
        let {
          spec: qu
        } = lu;
        if (Eu >= uu && Eu <= Uu && (uu == Uu || (Eu > uu || ju > 0) && (Eu < Uu || ju < 0))) return su = qu.diagnostics, Zu = uu, Xu = Uu, !1
      }));
      let lu = uu.state.facet(Gu).tooltipFilter;
      return su && lu && (su = lu(su, uu.state)), su ? {
        pos: Zu,
        end: Xu,
        above: uu.state.doc.lineAt(Zu).to < Xu,
        create: () => ({
          dom: Du(uu, su)
        })
      } : null
    }

    function Du(uu, Eu) {
      return (0, Zu.b)("ul", {
        class: "cm-tooltip-lint"
      }, Eu.map((Eu => du(uu, Eu, !1))))
    }
    const gu = uu => {
        let Eu = uu.state.field(Ou, !1);
        return !(!Eu || !Eu.panel) && (uu.dispatch({
          effects: cu.of(!1)
        }), !0)
      },
      Mu = [{
        key: "Mod-Shift-m",
        run: uu => {
          let Eu = uu.state.field(Ou, !1);
          Eu && Eu.panel || uu.dispatch({
            effects: Cu(uu.state, [cu.of(!0)])
          });
          let ju = (0, su.D)(uu, ou.open);
          return ju && ju.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: uu => {
          let Eu = uu.state.field(Ou, !1);
          if (!Eu) return !1;
          let ju = uu.state.selection.main,
            su = qu(Eu.diagnostics, null, ju.to + 1);
          return !(!su && (su = qu(Eu.diagnostics, null, 0), !su || su.from == ju.from && su.to == ju.to)) && (uu.dispatch({
            selection: {
              anchor: su.from,
              head: su.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      eu = su.o.fromClass(class {
        constructor(uu) {
          this.view = uu, this.timeout = -1, this.set = !0;
          let {
            delay: Eu
          } = uu.state.facet(Gu);
          this.lintTime = Date.now() + Eu, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, Eu)
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
              sources: Eu
            } = uu.facet(Gu);
            Eu.length && function(uu, Eu, ju) {
              let su = [],
                Uu = -1;
              for (let Zu of uu) Zu.then((ju => {
                su.push(ju), clearTimeout(Uu), su.length == uu.length ? Eu(su) : Uu = setTimeout((() => Eu(su)), 200)
              }), ju)
            }(Eu.map((uu => Promise.resolve(uu(this.view)))), (Eu => {
              this.view.state.doc == uu.doc && this.view.dispatch(function(uu, Eu) {
                return {
                  effects: Cu(uu, [bu.of(Eu)])
                }
              }(this.view.state, Eu.reduce(((uu, Eu) => uu.concat(Eu)))))
            }), (uu => {
              (0, su.Y)(this.view.state, uu)
            }))
          }
        }
        update(uu) {
          let Eu = uu.state.facet(Gu);
          (uu.docChanged || Eu != uu.startState.facet(Gu) || Eu.needsRefresh && Eu.needsRefresh(uu)) && (this.lintTime = Date.now() + Eu.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, Eu.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const Gu = Uu.r.define({
      combine: uu => ({
        sources: uu.map((uu => uu.source)).filter((uu => null != uu)),
        ...(0, Uu.Z)(uu.map((uu => uu.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: pu,
          tooltipFilter: pu,
          needsRefresh: (uu, Eu) => uu ? Eu ? ju => uu(ju) || Eu(ju) : uu : Eu,
          hideOn: (uu, Eu) => uu ? Eu ? (ju, su, Uu) => uu(ju, su, Uu) || Eu(ju, su, Uu) : uu : Eu,
          autoPanel: (uu, Eu) => uu || Eu
        })
      })
    });

    function pu(uu, Eu) {
      return uu ? Eu ? (ju, su) => Eu(uu(ju, su), su) : uu : Eu
    }

    function wu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [Gu.of({
        source: uu,
        config: Eu
      }), eu, ru]
    }

    function Ju(uu) {
      let Eu = [];
      if (uu) uu: for (let {
          name: ju
        }
        of uu) {
        for (let uu = 0; uu < ju.length; uu++) {
          let su = ju[uu];
          if (/[a-zA-Z]/.test(su) && !Eu.some((uu => uu.toLowerCase() == su.toLowerCase()))) {
            Eu.push(su);
            continue uu
          }
        }
        Eu.push("")
      }
      return Eu
    }

    function du(uu, Eu, ju) {
      var su;
      let Uu = ju ? Ju(Eu.actions) : [];
      return (0, Zu.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + Eu.severity
      }, (0, Zu.b)("span", {
        class: "cm-diagnosticText"
      }, Eu.renderMessage ? Eu.renderMessage(uu) : Eu.message), null === (su = Eu.actions) || void 0 === su ? void 0 : su.map(((ju, su) => {
        let Xu = !1,
          lu = su => {
            if (su.preventDefault(), Xu) return;
            Xu = !0;
            let Uu = qu(uu.state.field(Ou).diagnostics, Eu);
            Uu && ju.apply(uu, Uu.from, Uu.to)
          },
          {
            name: fu
          } = ju,
          Cu = Uu[su] ? fu.indexOf(Uu[su]) : -1,
          bu = Cu < 0 ? fu : [fu.slice(0, Cu), (0, Zu.b)("u", fu.slice(Cu, Cu + 1)), fu.slice(Cu + 1)],
          cu = ju.markClass ? " " + ju.markClass : "";
        return (0, Zu.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + cu,
          onclick: lu,
          onmousedown: lu,
          "aria-label": ` Action: ${fu}${Cu<0?"":` (access key "${Uu[su]})"`}.`
        }, bu)
      })), Eu.source && (0, Zu.b)("div", {
        class: "cm-diagnosticSource"
      }, Eu.source))
    }
    class au extends su.r {
      constructor(uu) {
        super(), this.sev = uu
      }
      eq(uu) {
        return uu.sev == this.sev
      }
      toDOM() {
        return (0, Zu.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Pu {
      constructor(uu, Eu) {
        this.diagnostic = Eu, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = du(uu, Eu, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class ou {
      constructor(uu) {
        this.view = uu, this.items = [];
        this.list = (0, Zu.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: Eu => {
            if (!(Eu.ctrlKey || Eu.altKey || Eu.metaKey)) {
              if (27 == Eu.keyCode) gu(this.view), this.view.focus();
              else if (38 == Eu.keyCode || 33 == Eu.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == Eu.keyCode || 34 == Eu.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == Eu.keyCode) this.moveSelection(0);
              else if (35 == Eu.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == Eu.keyCode) this.view.focus();
              else {
                if (!(Eu.keyCode >= 65 && Eu.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: ju
                  } = this.items[this.selectedIndex], su = Ju(ju.actions);
                  for (let Uu = 0; Uu < su.length; Uu++)
                    if (su[Uu].toUpperCase().charCodeAt(0) == Eu.keyCode) {
                      let Eu = qu(this.view.state.field(Ou).diagnostics, ju);
                      Eu && ju.actions[Uu].apply(uu, Eu.from, Eu.to)
                    }
                }
              }
              Eu.preventDefault()
            }
          },
          onclick: uu => {
            for (let Eu = 0; Eu < this.items.length; Eu++) this.items[Eu].dom.contains(uu.target) && this.moveSelection(Eu)
          }
        }), this.dom = (0, Zu.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, Zu.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => gu(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let uu = this.view.state.field(Ou).selected;
        if (!uu) return -1;
        for (let Eu = 0; Eu < this.items.length; Eu++)
          if (this.items[Eu].diagnostic == uu.diagnostic) return Eu;
        return -1
      }
      update() {
        let {
          diagnostics: uu,
          selected: Eu
        } = this.view.state.field(Ou), ju = 0, su = !1, Uu = null, Zu = new Set;
        for (uu.between(0, this.view.state.doc.length, ((uu, Xu, lu) => {
            let {
              spec: qu
            } = lu;
            for (let fu of qu.diagnostics) {
              if (Zu.has(fu)) continue;
              Zu.add(fu);
              let uu, Xu = -1;
              for (let Eu = ju; Eu < this.items.length; Eu++)
                if (this.items[Eu].diagnostic == fu) {
                  Xu = Eu;
                  break
                } Xu < 0 ? (uu = new Pu(this.view, fu), this.items.splice(ju, 0, uu), su = !0) : (uu = this.items[Xu], Xu > ju && (this.items.splice(ju, Xu - ju), su = !0)), Eu && uu.diagnostic == Eu.diagnostic ? uu.dom.hasAttribute("aria-selected") || (uu.dom.setAttribute("aria-selected", "true"), Uu = uu) : uu.dom.hasAttribute("aria-selected") && uu.dom.removeAttribute("aria-selected"), ju++
            }
          })); ju < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) su = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Pu(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), su = !0), Uu ? (this.list.setAttribute("aria-activedescendant", Uu.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Uu.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: uu => {
            let {
              sel: Eu,
              panel: ju
            } = uu, su = ju.height / this.list.offsetHeight;
            Eu.top < ju.top ? this.list.scrollTop -= (ju.top - Eu.top) / su : Eu.bottom > ju.bottom && (this.list.scrollTop += (Eu.bottom - ju.bottom) / su)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), su && this.sync()
      }
      sync() {
        let uu = this.list.firstChild;

        function Eu() {
          let Eu = uu;
          uu = Eu.nextSibling, Eu.remove()
        }
        for (let ju of this.items)
          if (ju.dom.parentNode == this.list) {
            for (; uu != ju.dom;) Eu();
            uu = ju.dom.nextSibling
          } else this.list.insertBefore(ju.dom, uu);
        for (; uu;) Eu()
      }
      moveSelection(uu) {
        if (this.selectedIndex < 0) return;
        let Eu = qu(this.view.state.field(Ou).diagnostics, this.items[uu].diagnostic);
        Eu && this.view.dispatch({
          selection: {
            anchor: Eu.from,
            head: Eu.to
          },
          scrollIntoView: !0,
          effects: Nu.of(Eu)
        })
      }
      static open(uu) {
        return new ou(uu)
      }
    }

    function ku(uu) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(uu)}</svg>')`
    }

    function mu(uu) {
      return ku(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${uu}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const vu = su.l.baseTheme({
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
        backgroundImage: mu("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: mu("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: mu("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: mu("#66d")
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

    function Ku(uu) {
      return "error" == uu ? 4 : "warning" == uu ? 3 : "info" == uu ? 2 : 1
    }

    function Vu(uu) {
      let Eu = "hint",
        ju = 1;
      for (let su of uu) {
        let uu = Ku(su.severity);
        uu > ju && (ju = uu, Eu = su.severity)
      }
      return Eu
    }
    su.n;
    const ru = [Ou, su.l.Cs.compute([Ou], (uu => {
      let {
        selected: Eu,
        panel: ju
      } = uu.field(Ou);
      return Eu && ju && Eu.from != Eu.to ? su.e.set([Yu.range(Eu.from, Eu.to)]) : su.e.none
    })), (0, su.T)(hu, {
      hideOn: fu
    }), vu]
  },
  41598: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => zu,
      f: () => Du,
      h: () => Ru
    });
    var su = ju(41553),
      Uu = ju(41550),
      Zu = ju(41563);
    const Xu = "function" == typeof String.prototype.normalize ? uu => uu.normalize("NFKD") : uu => uu;
    class lu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.length,
          Uu = arguments.length > 4 ? arguments[4] : void 0,
          Zu = arguments.length > 5 ? arguments[5] : void 0;
        this.test = Zu, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = uu.iterRange(ju, su), this.bufferStart = ju, this.normalize = Uu ? uu => Uu(Xu(uu)) : Xu, this.query = this.normalize(Eu)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Uu.T)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let uu = this.peek();
          if (uu < 0) return this.done = !0, this;
          let Eu = (0, Uu.jb)(uu),
            ju = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Uu.X)(uu);
          let su = this.normalize(Eu);
          if (su.length)
            for (let Uu = 0, Zu = ju;; Uu++) {
              let uu = su.charCodeAt(Uu),
                Xu = this.match(uu, Zu, this.bufferPos + this.bufferStart);
              if (Uu == su.length - 1) {
                if (Xu) return this.value = Xu, this;
                break
              }
              Zu == ju && Uu < Eu.length && Eu.charCodeAt(Uu) == uu && Zu++
            }
        }
      }
      match(uu, Eu, ju) {
        let su = null;
        for (let Uu = 0; Uu < this.matches.length; Uu += 2) {
          let Eu = this.matches[Uu],
            Zu = !1;
          this.query.charCodeAt(Eu) == uu && (Eu == this.query.length - 1 ? su = {
            from: this.matches[Uu + 1],
            to: ju
          } : (this.matches[Uu]++, Zu = !0)), Zu || (this.matches.splice(Uu, 2), Uu -= 2)
        }
        return this.query.charCodeAt(0) == uu && (1 == this.query.length ? su = {
          from: Eu,
          to: ju
        } : this.matches.push(1, Eu)), su && this.test && !this.test(su.from, su.to, this.buffer, this.bufferStart) && (su = null), su
      }
    }
    "undefined" != typeof Symbol && (lu.prototype[Symbol.iterator] = function() {
      return this
    });
    const qu = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      fu = "gm" + (null == /x/.unicode ? "" : "u");
    class Cu {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uu.length;
        if (this.text = uu, this.to = Uu, this.curLine = "", this.done = !1, this.value = qu, /\\[sWDnr]|\n|\r|\[\^/.test(Eu)) return new Nu(uu, Eu, ju, su, Uu);
        this.re = new RegExp(Eu, fu + ((null === ju || void 0 === ju ? void 0 : ju.ignoreCase) ? "i" : "")), this.test = null === ju || void 0 === ju ? void 0 : ju.test, this.iter = uu.iter();
        let Zu = uu.lineAt(su);
        this.curLineStart = Zu.from, this.matchPos = Ou(uu, su), this.getLine(this.curLineStart)
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
          let Eu = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (Eu) {
            let ju = this.curLineStart + Eu.index,
              su = ju + Eu[0].length;
            if (this.matchPos = Ou(this.text, su + (ju == su ? 1 : 0)), ju == this.curLineStart + this.curLine.length && this.nextLine(), (ju < su || ju > this.value.to) && (!this.test || this.test(ju, su, Eu))) return this.value = {
              from: ju,
              to: su,
              match: Eu
            }, this;
            uu = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), uu = 0
          }
        }
      }
    }
    const bu = new WeakMap;
    class cu {
      constructor(uu, Eu) {
        this.from = uu, this.text = Eu
      }
      get to() {
        return this.from + this.text.length
      }
      static get(uu, Eu, ju) {
        let su = bu.get(uu);
        if (!su || su.from >= ju || su.to <= Eu) {
          let su = new cu(Eu, uu.sliceString(Eu, ju));
          return bu.set(uu, su), su
        }
        if (su.from == Eu && su.to == ju) return su;
        let {
          text: Uu,
          from: Zu
        } = su;
        return Zu > Eu && (Uu = uu.sliceString(Eu, Zu) + Uu, Zu = Eu), su.to < ju && (Uu += uu.sliceString(su.to, ju)), bu.set(uu, new cu(Zu, Uu)), new cu(Eu, Uu.slice(Eu - Zu, ju - Zu))
      }
    }
    class Nu {
      constructor(uu, Eu, ju, su, Uu) {
        this.text = uu, this.to = Uu, this.done = !1, this.value = qu, this.matchPos = Ou(uu, su), this.re = new RegExp(Eu, fu + ((null === ju || void 0 === ju ? void 0 : ju.ignoreCase) ? "i" : "")), this.test = null === ju || void 0 === ju ? void 0 : ju.test, this.flat = cu.get(uu, su, this.chunkEnd(su + 5e3))
      }
      chunkEnd(uu) {
        return uu >= this.to ? this.to : this.text.lineAt(uu).to
      }
      next() {
        for (;;) {
          let uu = this.re.lastIndex = this.matchPos - this.flat.from,
            Eu = this.re.exec(this.flat.text);
          if (Eu && !Eu[0] && Eu.index == uu && (this.re.lastIndex = uu + 1, Eu = this.re.exec(this.flat.text)), Eu) {
            let uu = this.flat.from + Eu.index,
              ju = uu + Eu[0].length;
            if ((this.flat.to >= this.to || Eu.index + Eu[0].length <= this.flat.text.length - 10) && (!this.test || this.test(uu, ju, Eu))) return this.value = {
              from: uu,
              to: ju,
              match: Eu
            }, this.matchPos = Ou(this.text, ju + (uu == ju ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = cu.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function Ou(uu, Eu) {
      if (Eu >= uu.length) return Eu;
      let ju, su = uu.lineAt(Eu);
      for (; Eu < su.to && (ju = su.text.charCodeAt(Eu - su.from)) >= 56320 && ju < 57344;) Eu++;
      return Eu
    }
    "undefined" != typeof Symbol && (Cu.prototype[Symbol.iterator] = Nu.prototype[Symbol.iterator] = function() {
      return this
    });
    const Yu = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      hu = Uu.r.define({
        combine: uu => (0, Uu.Z)(uu, Yu, {
          highlightWordAroundCursor: (uu, Eu) => uu || Eu,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function Du(uu) {
      let Eu = [pu, Gu];
      return uu && Eu.push(hu.of(uu)), Eu
    }
    const gu = su.e.mark({
        class: "cm-selectionMatch"
      }),
      Mu = su.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function eu(uu, Eu, ju, su) {
      return (0 == ju || uu(Eu.sliceDoc(ju - 1, ju)) != Uu.i.Word) && (su == Eu.doc.length || uu(Eu.sliceDoc(su, su + 1)) != Uu.i.Word)
    }
    const Gu = su.o.fromClass(class {
        constructor(uu) {
          this.Cs = this.getDeco(uu)
        }
        update(uu) {
          (uu.selectionSet || uu.docChanged || uu.viewportChanged) && (this.Cs = this.getDeco(uu.view))
        }
        getDeco(uu) {
          let Eu = uu.state.facet(hu),
            {
              state: ju
            } = uu,
            Zu = ju.selection;
          if (Zu.HY.length > 1) return su.e.none;
          let Xu, qu = Zu.main,
            fu = null;
          if (qu.empty) {
            if (!Eu.highlightWordAroundCursor) return su.e.none;
            let uu = ju.wordAt(qu.head);
            if (!uu) return su.e.none;
            fu = ju.charCategorizer(qu.head), Xu = ju.sliceDoc(uu.from, uu.to)
          } else {
            let uu = qu.to - qu.from;
            if (uu < Eu.minSelectionLength || uu > 200) return su.e.none;
            if (Eu.wholeWords) {
              if (Xu = ju.sliceDoc(qu.from, qu.to), fu = ju.charCategorizer(qu.head), !eu(fu, ju, qu.from, qu.to) || ! function(uu, Eu, ju, su) {
                  return uu(Eu.sliceDoc(ju, ju + 1)) == Uu.i.Word && uu(Eu.sliceDoc(su - 1, su)) == Uu.i.Word
                }(fu, ju, qu.from, qu.to)) return su.e.none
            } else if (Xu = ju.sliceDoc(qu.from, qu.to), !Xu) return su.e.none
          }
          let Cu = [];
          for (let Uu of uu.Q8) {
            let uu = new lu(ju.doc, Xu, Uu.from, Uu.to);
            for (; !uu.next().done;) {
              let {
                from: Uu,
                to: Zu
              } = uu.value;
              if ((!fu || eu(fu, ju, Uu, Zu)) && (qu.empty && Uu <= qu.from && Zu >= qu.to ? Cu.push(Mu.range(Uu, Zu)) : (Uu >= qu.to || Zu <= qu.from) && Cu.push(gu.range(Uu, Zu)), Cu.length > Eu.maxMatches)) return su.e.none
            }
          }
          return su.e.set(Cu)
        }
      }, {
        Cs: uu => uu.Cs
      }),
      pu = su.l.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const wu = Uu.r.define({
      combine: uu => (0, Uu.Z)(uu, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: uu => new uE(uu),
        scrollToMatch: uu => su.l.scrollIntoView(uu)
      })
    });
    class Ju {
      constructor(uu) {
        this.search = uu.search, this.caseSensitive = !!uu.caseSensitive, this.literal = !!uu.literal, this.regexp = !!uu.regexp, this.replace = uu.replace || "", this.valid = !!this.search && (!this.regexp || function(uu) {
          try {
            return new RegExp(uu, fu), !0
          } catch (Eu) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!uu.wholeWord, this.test = uu.test
      }
      unquote(uu) {
        return this.literal ? uu : uu.replace(/\\([nrt\\])/g, ((uu, Eu) => "n" == Eu ? "\n" : "r" == Eu ? "\r" : "t" == Eu ? "\t" : "\\"))
      }
      eq(uu) {
        return this.search == uu.search && this.replace == uu.replace && this.caseSensitive == uu.caseSensitive && this.regexp == uu.regexp && this.wholeWord == uu.wholeWord && this.test == uu.test
      }
      create() {
        return this.regexp ? new vu(this) : new Pu(this)
      }
      getCursor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = uu.doc ? uu : Uu.o.create({
            doc: uu
          });
        return null == ju && (ju = su.doc.length), this.regexp ? ou(this, su, Eu, ju) : au(this, su, Eu, ju)
      }
    }
    class du {
      constructor(uu) {
        this.spec = uu
      }
    }

    function au(uu, Eu, ju, su) {
      let Zu;
      var Xu, qu;
      return uu.wholeWord && (Xu = Eu.doc, qu = Eu.charCategorizer(Eu.selection.main.head), Zu = (uu, Eu, ju, su) => ((su > uu || su + ju.length < Eu) && (su = Math.max(0, uu - 2), ju = Xu.sliceString(su, Math.min(Xu.length, Eu + 2))), (qu(ku(ju, uu - su)) != Uu.i.Word || qu(mu(ju, uu - su)) != Uu.i.Word) && (qu(mu(ju, Eu - su)) != Uu.i.Word || qu(ku(ju, Eu - su)) != Uu.i.Word))), uu.test && (Zu = function(uu, Eu, ju) {
        return (su, Uu, Zu, Xu) => {
          if (ju && !ju(su, Uu, Zu, Xu)) return !1;
          let lu = su >= Xu && Uu <= Xu + Zu.length ? Zu.slice(su - Xu, Uu - Xu) : Eu.doc.sliceString(su, Uu);
          return uu(lu, Eu, su, Uu)
        }
      }(uu.test, Eu, Zu)), new lu(Eu.doc, uu.unquoted, ju, su, uu.caseSensitive ? void 0 : uu => uu.toLowerCase(), Zu)
    }
    class Pu extends du {
      constructor(uu) {
        super(uu)
      }
      nextMatch(uu, Eu, ju) {
        let su = au(this.spec, uu, ju, uu.doc.length).nextOverlapping();
        if (su.done) {
          let ju = Math.min(uu.doc.length, Eu + this.spec.unquoted.length);
          su = au(this.spec, uu, 0, ju).nextOverlapping()
        }
        return su.done || su.value.from == Eu && su.value.to == ju ? null : su.value
      }
      prevMatchInRange(uu, Eu, ju) {
        for (let su = ju;;) {
          let ju = Math.max(Eu, su - 1e4 - this.spec.unquoted.length),
            Uu = au(this.spec, uu, ju, su),
            Zu = null;
          for (; !Uu.nextOverlapping().done;) Zu = Uu.value;
          if (Zu) return Zu;
          if (ju == Eu) return null;
          su -= 1e4
        }
      }
      prevMatch(uu, Eu, ju) {
        let su = this.prevMatchInRange(uu, 0, Eu);
        return su || (su = this.prevMatchInRange(uu, Math.max(0, ju - this.spec.unquoted.length), uu.doc.length)), !su || su.from == Eu && su.to == ju ? null : su
      }
      getReplacement(uu) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(uu, Eu) {
        let ju = au(this.spec, uu, 0, uu.doc.length),
          su = [];
        for (; !ju.next().done;) {
          if (su.length >= Eu) return null;
          su.push(ju.value)
        }
        return su
      }
      highlight(uu, Eu, ju, su) {
        let Uu = au(this.spec, uu, Math.max(0, Eu - this.spec.unquoted.length), Math.min(ju + this.spec.unquoted.length, uu.doc.length));
        for (; !Uu.next().done;) su(Uu.value.from, Uu.value.to)
      }
    }

    function ou(uu, Eu, ju, su) {
      let Zu;
      var Xu;
      return uu.wholeWord && (Xu = Eu.charCategorizer(Eu.selection.main.head), Zu = (uu, Eu, ju) => !ju[0].length || (Xu(ku(ju.input, ju.index)) != Uu.i.Word || Xu(mu(ju.input, ju.index)) != Uu.i.Word) && (Xu(mu(ju.input, ju.index + ju[0].length)) != Uu.i.Word || Xu(ku(ju.input, ju.index + ju[0].length)) != Uu.i.Word)), uu.test && (Zu = function(uu, Eu, ju) {
        return (su, Uu, Zu) => (!ju || ju(su, Uu, Zu)) && uu(Zu[0], Eu, su, Uu)
      }(uu.test, Eu, Zu)), new Cu(Eu.doc, uu.search, {
        ignoreCase: !uu.caseSensitive,
        test: Zu
      }, ju, su)
    }

    function ku(uu, Eu) {
      return uu.slice((0, Uu.fb)(uu, Eu, !1), Eu)
    }

    function mu(uu, Eu) {
      return uu.slice(Eu, (0, Uu.fb)(uu, Eu))
    }
    class vu extends du {
      nextMatch(uu, Eu, ju) {
        let su = ou(this.spec, uu, ju, uu.doc.length).next();
        return su.done && (su = ou(this.spec, uu, 0, Eu).next()), su.done ? null : su.value
      }
      prevMatchInRange(uu, Eu, ju) {
        for (let su = 1;; su++) {
          let Uu = Math.max(Eu, ju - 1e4 * su),
            Zu = ou(this.spec, uu, Uu, ju),
            Xu = null;
          for (; !Zu.next().done;) Xu = Zu.value;
          if (Xu && (Uu == Eu || Xu.from > Uu + 10)) return Xu;
          if (Uu == Eu) return null
        }
      }
      prevMatch(uu, Eu, ju) {
        return this.prevMatchInRange(uu, 0, Eu) || this.prevMatchInRange(uu, ju, uu.doc.length)
      }
      getReplacement(uu) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((Eu, ju) => {
          if ("&" == ju) return uu.match[0];
          if ("$" == ju) return "$";
          for (let su = ju.length; su > 0; su--) {
            let Eu = +ju.slice(0, su);
            if (Eu > 0 && Eu < uu.match.length) return uu.match[Eu] + ju.slice(su)
          }
          return Eu
        }))
      }
      matchAll(uu, Eu) {
        let ju = ou(this.spec, uu, 0, uu.doc.length),
          su = [];
        for (; !ju.next().done;) {
          if (su.length >= Eu) return null;
          su.push(ju.value)
        }
        return su
      }
      highlight(uu, Eu, ju, su) {
        let Uu = ou(this.spec, uu, Math.max(0, Eu - 250), Math.min(ju + 250, uu.doc.length));
        for (; !Uu.next().done;) su(Uu.value.from, Uu.value.to)
      }
    }
    const Ku = Uu.L.define(),
      Vu = Uu.L.define(),
      ru = Uu.N.define({
        create: uu => new Qu(Hu(uu).create(), null),
        update(uu, Eu) {
          for (let ju of Eu.effects) ju.is(Ku) ? uu = new Qu(ju.value.create(), uu.panel) : ju.is(Vu) && (uu = new Qu(uu.query, ju.value ? Tu : null));
          return uu
        },
        provide: uu => su.gb.from(uu, (uu => uu.panel))
      });
    class Qu {
      constructor(uu, Eu) {
        this.query = uu, this.panel = Eu
      }
    }
    const iu = su.e.mark({
        class: "cm-searchMatch"
      }),
      Wu = su.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      Su = su.o.fromClass(class {
        constructor(uu) {
          this.view = uu, this.Cs = this.highlight(uu.state.field(ru))
        }
        update(uu) {
          let Eu = uu.state.field(ru);
          (Eu != uu.startState.field(ru) || uu.docChanged || uu.selectionSet || uu.viewportChanged) && (this.Cs = this.highlight(Eu))
        }
        highlight(uu) {
          let {
            query: Eu,
            panel: ju
          } = uu;
          if (!ju || !Eu.spec.valid) return su.e.none;
          let {
            view: Zu
          } = this, Xu = new Uu.C;
          for (let su = 0, Uu = Zu.Q8, lu = Uu.length; su < lu; su++) {
            let {
              from: uu,
              to: ju
            } = Uu[su];
            for (; su < lu - 1 && ju > Uu[su + 1].from - 500;) ju = Uu[++su].to;
            Eu.highlight(Zu.state, uu, ju, ((uu, Eu) => {
              let ju = Zu.state.selection.HY.some((ju => ju.from == uu && ju.to == Eu));
              Xu.add(uu, Eu, ju ? Wu : iu)
            }))
          }
          return Xu.finish()
        }
      }, {
        Cs: uu => uu.Cs
      });

    function Iu(uu) {
      return Eu => {
        let ju = Eu.state.field(ru, !1);
        return ju && ju.query.spec.valid ? uu(Eu, ju) : yu(Eu)
      }
    }
    const Fu = Iu(((uu, Eu) => {
        let {
          query: ju
        } = Eu, {
          to: su
        } = uu.state.selection.main, Zu = ju.nextMatch(uu.state, su, su);
        if (!Zu) return !1;
        let Xu = Uu.l.single(Zu.from, Zu.to),
          lu = uu.state.facet(wu);
        return uu.dispatch({
          selection: Xu,
          effects: [UE(uu, Zu), lu.scrollToMatch(Xu.main, uu)],
          userEvent: "select.search"
        }), nu(uu), !0
      })),
      Bu = Iu(((uu, Eu) => {
        let {
          query: ju
        } = Eu, {
          state: su
        } = uu, {
          from: Zu
        } = su.selection.main, Xu = ju.prevMatch(su, Zu, Zu);
        if (!Xu) return !1;
        let lu = Uu.l.single(Xu.from, Xu.to),
          qu = uu.state.facet(wu);
        return uu.dispatch({
          selection: lu,
          effects: [UE(uu, Xu), qu.scrollToMatch(lu.main, uu)],
          userEvent: "select.search"
        }), nu(uu), !0
      })),
      Lu = Iu(((uu, Eu) => {
        let {
          query: ju
        } = Eu, su = ju.matchAll(uu.state, 1e3);
        return !(!su || !su.length) && (uu.dispatch({
          selection: Uu.l.create(su.map((uu => Uu.l.range(uu.from, uu.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      tu = Iu(((uu, Eu) => {
        let {
          query: ju
        } = Eu, {
          state: Zu
        } = uu, {
          from: Xu,
          to: lu
        } = Zu.selection.main;
        if (Zu.readOnly) return !1;
        let qu = ju.nextMatch(Zu, Xu, Xu);
        if (!qu) return !1;
        let fu, Cu, bu = qu,
          cu = [],
          Nu = [];
        bu.from == Xu && bu.to == lu && (Cu = Zu.toText(ju.getReplacement(bu)), cu.push({
          from: bu.from,
          to: bu.to,
          insert: Cu
        }), bu = ju.nextMatch(Zu, bu.from, bu.to), Nu.push(su.l.announce.of(Zu.phrase("replaced match on line $", Zu.doc.lineAt(Xu).number) + ".")));
        let Ou = uu.state.changes(cu);
        return bu && (fu = Uu.l.single(bu.from, bu.to).map(Ou), Nu.push(UE(uu, bu)), Nu.push(Zu.facet(wu).scrollToMatch(fu.main, uu))), uu.dispatch({
          changes: Ou,
          selection: fu,
          effects: Nu,
          userEvent: "input.replace"
        }), !0
      })),
      xu = Iu(((uu, Eu) => {
        let {
          query: ju
        } = Eu;
        if (uu.state.readOnly) return !1;
        let Uu = ju.matchAll(uu.state, 1e9).map((uu => {
          let {
            from: Eu,
            to: su
          } = uu;
          return {
            from: Eu,
            to: su,
            insert: ju.getReplacement(uu)
          }
        }));
        if (!Uu.length) return !1;
        let Zu = uu.state.phrase("replaced $ matches", Uu.length) + ".";
        return uu.dispatch({
          changes: Uu,
          effects: su.l.announce.of(Zu),
          userEvent: "input.replace.all"
        }), !0
      }));

    function Tu(uu) {
      return uu.state.facet(wu).createPanel(uu)
    }

    function Hu(uu, Eu) {
      var ju, su, Uu, Zu, Xu;
      let lu = uu.selection.main,
        qu = lu.empty || lu.to > lu.from + 100 ? "" : uu.sliceDoc(lu.from, lu.to);
      if (Eu && !qu) return Eu;
      let fu = uu.facet(wu);
      return new Ju({
        search: (null !== (ju = null === Eu || void 0 === Eu ? void 0 : Eu.literal) && void 0 !== ju ? ju : fu.literal) ? qu : qu.replace(/\n/g, "\\n"),
        caseSensitive: null !== (su = null === Eu || void 0 === Eu ? void 0 : Eu.caseSensitive) && void 0 !== su ? su : fu.caseSensitive,
        literal: null !== (Uu = null === Eu || void 0 === Eu ? void 0 : Eu.literal) && void 0 !== Uu ? Uu : fu.literal,
        regexp: null !== (Zu = null === Eu || void 0 === Eu ? void 0 : Eu.regexp) && void 0 !== Zu ? Zu : fu.regexp,
        wholeWord: null !== (Xu = null === Eu || void 0 === Eu ? void 0 : Eu.wholeWord) && void 0 !== Xu ? Xu : fu.wholeWord
      })
    }

    function Au(uu) {
      let Eu = (0, su.D)(uu, Tu);
      return Eu && Eu.dom.querySelector("[main-field]")
    }

    function nu(uu) {
      let Eu = Au(uu);
      Eu && Eu == uu.root.activeElement && Eu.select()
    }
    const yu = uu => {
        let Eu = uu.state.field(ru, !1);
        if (Eu && Eu.panel) {
          let ju = Au(uu);
          if (ju && ju != uu.root.activeElement) {
            let su = Hu(uu.state, Eu.query.spec);
            su.valid && uu.dispatch({
              effects: Ku.of(su)
            }), ju.focus(), ju.select()
          }
        } else uu.dispatch({
          effects: [Vu.of(!0), Eu ? Ku.of(Hu(uu.state, Eu.query.spec)) : Uu.L.appendConfig.of(XE)]
        });
        return !0
      },
      zu = uu => {
        let Eu = uu.state.field(ru, !1);
        if (!Eu || !Eu.panel) return !1;
        let ju = (0, su.D)(uu, Tu);
        return ju && ju.dom.contains(uu.root.activeElement) && uu.focus(), uu.dispatch({
          effects: Vu.of(!1)
        }), !0
      },
      Ru = [{
        key: "Mod-f",
        run: yu,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: Fu,
        shift: Bu,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: Fu,
        shift: Bu,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: zu,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu, su = Eu.selection;
          if (su.HY.length > 1 || su.main.empty) return !1;
          let {
            from: Zu,
            to: Xu
          } = su.main, qu = [], fu = 0;
          for (let Cu = new lu(Eu.doc, Eu.sliceDoc(Zu, Xu)); !Cu.next().done;) {
            if (qu.length > 1e3) return !1;
            Cu.value.from == Zu && (fu = qu.length), qu.push(Uu.l.range(Cu.value.from, Cu.value.to))
          }
          return ju(Eu.update({
            selection: Uu.l.create(qu, fu),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: uu => {
          let {
            state: Eu
          } = uu, ju = String(Eu.doc.lineAt(uu.state.selection.main.head).number), {
            close: Zu,
            result: Xu
          } = (0, su.eb)(uu, {
            label: Eu.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: ju
            },
            focus: !0,
            submitLabel: Eu.phrase("go")
          });
          return Xu.then((ju => {
            let Xu = ju && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(ju.elements.line.value);
            if (!Xu) return void uu.dispatch({
              effects: Zu
            });
            let lu = Eu.doc.lineAt(Eu.selection.main.head),
              [, qu, fu, Cu, bu] = Xu,
              cu = Cu ? +Cu.slice(1) : 0,
              Nu = fu ? +fu : lu.number;
            if (fu && bu) {
              let uu = Nu / 100;
              qu && (uu = uu * ("-" == qu ? -1 : 1) + lu.number / Eu.doc.lines), Nu = Math.round(Eu.doc.lines * uu)
            } else fu && qu && (Nu = Nu * ("-" == qu ? -1 : 1) + lu.number);
            let Ou = Eu.doc.line(Math.max(1, Math.min(Eu.doc.lines, Nu))),
              Yu = Uu.l.cursor(Ou.from + Math.max(0, Math.min(cu, Ou.length)));
            uu.dispatch({
              effects: [Zu, su.l.scrollIntoView(Yu.from, {
                y: "center"
              })],
              selection: Yu
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu, {
            HY: Zu
          } = Eu.selection;
          if (Zu.some((uu => uu.from === uu.to))) return (uu => {
            let {
              state: Eu,
              dispatch: ju
            } = uu, {
              selection: su
            } = Eu, Zu = Uu.l.create(su.HY.map((uu => Eu.wordAt(uu.head) || Uu.l.cursor(uu.head))), su.mainIndex);
            return !Zu.eq(su) && (ju(Eu.update({
              selection: Zu
            })), !0)
          })({
            state: Eu,
            dispatch: ju
          });
          let Xu = Eu.sliceDoc(Zu[0].from, Zu[0].to);
          if (Eu.selection.HY.some((uu => Eu.sliceDoc(uu.from, uu.to) != Xu))) return !1;
          let qu = function(uu, Eu) {
            let {
              main: ju,
              HY: su
            } = uu.selection, Uu = uu.wordAt(ju.head), Zu = Uu && Uu.from == ju.from && Uu.to == ju.to;
            for (let Xu = !1, qu = new lu(uu.doc, Eu, su[su.length - 1].to);;) {
              if (qu.next(), !qu.done) {
                if (Xu && su.some((uu => uu.from == qu.value.from))) continue;
                if (Zu) {
                  let Eu = uu.wordAt(qu.value.from);
                  if (!Eu || Eu.from != qu.value.from || Eu.to != qu.value.to) continue
                }
                return qu.value
              }
              if (Xu) return null;
              qu = new lu(uu.doc, Eu, 0, Math.max(0, su[su.length - 1].from - 1)), Xu = !0
            }
          }(Eu, Xu);
          return !!qu && (ju(Eu.update({
            selection: Eu.selection.addRange(Uu.l.range(qu.from, qu.to), !1),
            effects: su.l.scrollIntoView(qu.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class uE {
      constructor(uu) {
        this.view = uu;
        let Eu = this.query = uu.state.field(ru).query.spec;

        function ju(uu, Eu, ju) {
          return (0, Zu.b)("button", {
            class: "cm-button",
            name: uu,
            onclick: Eu,
            type: "button"
          }, ju)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, Zu.b)("input", {
          value: Eu.search,
          placeholder: EE(uu, "Find"),
          "aria-label": EE(uu, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, Zu.b)("input", {
          value: Eu.replace,
          placeholder: EE(uu, "Replace"),
          "aria-label": EE(uu, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, Zu.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: Eu.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, Zu.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: Eu.regexp,
          onchange: this.commit
        }), this.wordField = (0, Zu.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: Eu.wholeWord,
          onchange: this.commit
        }), this.dom = (0, Zu.b)("div", {
          onkeydown: uu => this.keydown(uu),
          class: "cm-search"
        }, [this.searchField, ju("next", (() => Fu(uu)), [EE(uu, "next")]), ju("prev", (() => Bu(uu)), [EE(uu, "previous")]), ju("select", (() => Lu(uu)), [EE(uu, "all")]), (0, Zu.b)("label", null, [this.caseField, EE(uu, "match case")]), (0, Zu.b)("label", null, [this.reField, EE(uu, "regexp")]), (0, Zu.b)("label", null, [this.wordField, EE(uu, "by word")]), ...uu.state.readOnly ? [] : [(0, Zu.b)("br"), this.replaceField, ju("replace", (() => tu(uu)), [EE(uu, "replace")]), ju("replaceAll", (() => xu(uu)), [EE(uu, "replace all")])], (0, Zu.b)("button", {
          name: "close",
          onclick: () => zu(uu),
          "aria-label": EE(uu, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let uu = new Ju({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        uu.eq(this.query) || (this.query = uu, this.view.dispatch({
          effects: Ku.of(uu)
        }))
      }
      keydown(uu) {
        (0, su.ab)(this.view, uu, "search-panel") ? uu.preventDefault(): 13 == uu.keyCode && uu.target == this.searchField ? (uu.preventDefault(), (uu.shiftKey ? Bu : Fu)(this.view)) : 13 == uu.keyCode && uu.target == this.replaceField && (uu.preventDefault(), tu(this.view))
      }
      update(uu) {
        for (let Eu of uu.transactions)
          for (let uu of Eu.effects) uu.is(Ku) && !uu.value.eq(this.query) && this.setQuery(uu.value)
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
        return this.view.state.facet(wu).top
      }
    }

    function EE(uu, Eu) {
      return uu.state.phrase(Eu)
    }
    const jE = 30,
      sE = /[\s\.,:;?!]/;

    function UE(uu, Eu) {
      let {
        from: ju,
        to: Uu
      } = Eu, Zu = uu.state.doc.lineAt(ju), Xu = uu.state.doc.lineAt(Uu).to, lu = Math.max(Zu.from, ju - jE), qu = Math.min(Xu, Uu + jE), fu = uu.state.sliceDoc(lu, qu);
      if (lu != Zu.from)
        for (let su = 0; su < jE; su++)
          if (!sE.test(fu[su + 1]) && sE.test(fu[su])) {
            fu = fu.slice(su);
            break
          } if (qu != Xu)
        for (let su = fu.length - 1; su > fu.length - jE; su--)
          if (!sE.test(fu[su - 1]) && sE.test(fu[su])) {
            fu = fu.slice(0, su);
            break
          } return su.l.announce.of(`${uu.state.phrase("current match")}. ${fu} ${uu.state.phrase("on line")} ${Zu.number}.`)
    }
    const ZE = su.l.baseTheme({
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
      XE = [ru, Uu.y.low(Su), ZE]
  },
  41553: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => vu,
      h: () => fE,
      l: () => PU,
      n: () => lX,
      o: () => nE,
      r: () => ku,
      v: () => mZ,
      w: () => zU,
      A: () => lZ,
      D: () => zZ,
      G: () => AZ,
      H: () => cX,
      M: () => MZ,
      L: () => vX,
      Q: () => YZ,
      T: () => HZ,
      V: () => QU,
      X: () => PX,
      Y: () => xE,
      _: () => wZ,
      $: () => PZ,
      ab: () => SU,
      eb: () => sX,
      gb: () => jX,
      ib: () => FZ
    });
    for (var su = ju(41550), Uu = ju(41556), Zu = {
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
      }, Xu = {
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
      }, lu = "undefined" != typeof navigator && /Mac/.test(navigator.platform), qu = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), fu = 0; fu < 10; fu++) Zu[48 + fu] = Zu[96 + fu] = String(fu);
    for (fu = 1; fu <= 24; fu++) Zu[fu + 111] = "F" + fu;
    for (fu = 65; fu <= 90; fu++) Zu[fu] = String.fromCharCode(fu + 32), Xu[fu] = String.fromCharCode(fu);
    for (var Cu in Zu) Xu.hasOwnProperty(Cu) || (Xu[Cu] = Zu[Cu]);
    var bu = ju(41563);
    let cu = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      Nu = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const Ou = /Edge\/(\d+)/.exec(cu.userAgent),
      Yu = /MSIE \d/.test(cu.userAgent),
      hu = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(cu.userAgent),
      Du = !!(Yu || hu || Ou),
      gu = !Du && /gecko\/(\d+)/i.test(cu.userAgent),
      Mu = !Du && /Chrome\/(\d+)/.exec(cu.userAgent),
      eu = "webkitFontSmoothing" in Nu.documentElement.style,
      Gu = !Du && /Apple Computer/.test(cu.vendor),
      pu = Gu && (/Mobile\/\w+/.test(cu.userAgent) || cu.maxTouchPoints > 2);
    var wu = {
      mac: pu || /Mac/.test(cu.platform),
      windows: /Win/.test(cu.platform),
      linux: /Linux|X11/.test(cu.platform),
      ie: Du,
      ie_version: Yu ? Nu.documentMode || 6 : hu ? +hu[1] : Ou ? +Ou[1] : 0,
      gecko: gu,
      gecko_version: gu ? +(/Firefox\/(\d+)/.exec(cu.userAgent) || [0, 0])[1] : 0,
      chrome: !!Mu,
      chrome_version: Mu ? +Mu[1] : 0,
      ios: pu,
      android: /Android\b/.test(cu.userAgent),
      webkit: eu,
      webkit_version: eu ? +(/\bAppleWebKit\/(\d+)/.exec(cu.userAgent) || [0, 0])[1] : 0,
      safari: Gu,
      safari_version: Gu ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(cu.userAgent) || [0, 0])[1] : 0,
      tabSize: null != Nu.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function Ju(uu, Eu) {
      for (let ju in uu) "class" == ju && Eu.class ? Eu.class += " " + uu.class : "style" == ju && Eu.style ? Eu.style += ";" + uu.style : Eu[ju] = uu[ju];
      return Eu
    }
    const du = Object.create(null);

    function au(uu, Eu, ju) {
      if (uu == Eu) return !0;
      uu || (uu = du), Eu || (Eu = du);
      let su = Object.keys(uu),
        Uu = Object.keys(Eu);
      if (su.length - (ju && su.indexOf(ju) > -1 ? 1 : 0) != Uu.length - (ju && Uu.indexOf(ju) > -1 ? 1 : 0)) return !1;
      for (let Zu of su)
        if (Zu != ju && (-1 == Uu.indexOf(Zu) || uu[Zu] !== Eu[Zu])) return !1;
      return !0
    }

    function Pu(uu, Eu, ju) {
      let su = !1;
      if (Eu)
        for (let Uu in Eu) ju && Uu in ju || (su = !0, "style" == Uu ? uu.style.cssText = "" : uu.removeAttribute(Uu));
      if (ju)
        for (let Uu in ju) Eu && Eu[Uu] == ju[Uu] || (su = !0, "style" == Uu ? uu.style.cssText = ju[Uu] : uu.setAttribute(Uu, ju[Uu]));
      return su
    }

    function ou(uu) {
      let Eu = Object.create(null);
      for (let ju = 0; ju < uu.attributes.length; ju++) {
        let su = uu.attributes[ju];
        Eu[su.name] = su.value
      }
      return Eu
    }
    class ku {
      eq(uu) {
        return !1
      }
      updateDOM(uu, Eu, ju) {
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
      coordsAt(uu, Eu, ju) {
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
    var mu = function(uu) {
      return uu[uu.Text = 0] = "Text", uu[uu.WidgetBefore = 1] = "WidgetBefore", uu[uu.WidgetAfter = 2] = "WidgetAfter", uu[uu.WidgetRange = 3] = "WidgetRange", uu
    }(mu || (mu = {}));
    class vu extends su.I {
      constructor(uu, Eu, ju, su) {
        super(), this.startSide = uu, this.endSide = Eu, this.widget = ju, this.spec = su
      }
      get heightRelevant() {
        return !1
      }
      static mark(uu) {
        return new Ku(uu)
      }
      static widget(uu) {
        let Eu = Math.max(-1e4, Math.min(1e4, uu.side || 0)),
          ju = !!uu.block;
        return Eu += ju && !uu.inlineOrder ? Eu > 0 ? 3e8 : -4e8 : Eu > 0 ? 1e8 : -1e8, new ru(uu, Eu, Eu, ju, uu.widget || null, !1)
      }
      static replace(uu) {
        let Eu, ju, su = !!uu.block;
        if (uu.isBlockGap) Eu = -5e8, ju = 4e8;
        else {
          let {
            start: Uu,
            end: Zu
          } = Qu(uu, su);
          Eu = (Uu ? su ? -3e8 : -1 : 5e8) - 1, ju = 1 + (Zu ? su ? 2e8 : 1 : -6e8)
        }
        return new ru(uu, Eu, ju, su, uu.widget || null, !0)
      }
      static line(uu) {
        return new Vu(uu)
      }
      static set(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return su.E.of(uu, Eu)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    vu.none = su.E.empty;
    class Ku extends vu {
      constructor(uu) {
        let {
          start: Eu,
          end: ju
        } = Qu(uu);
        super(Eu ? -1 : 5e8, ju ? 1 : -6e8, null, uu), this.tagName = uu.tagName || "span", this.attrs = uu.class && uu.attributes ? Ju(uu.attributes, {
          class: uu.class
        }) : uu.class ? {
          class: uu.class
        } : uu.attributes || du
      }
      eq(uu) {
        return this == uu || uu instanceof Ku && this.tagName == uu.tagName && au(this.attrs, uu.attrs)
      }
      range(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        if (uu >= Eu) throw new RangeError("Mark decorations may not be empty");
        return super.range(uu, Eu)
      }
    }
    Ku.prototype.point = !1;
    class Vu extends vu {
      constructor(uu) {
        super(-2e8, -2e8, null, uu)
      }
      eq(uu) {
        return uu instanceof Vu && this.spec.class == uu.spec.class && au(this.spec.attributes, uu.spec.attributes)
      }
      range(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        if (Eu != uu) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(uu, Eu)
      }
    }
    Vu.prototype.mapMode = su.u.TrackBefore, Vu.prototype.point = !0;
    class ru extends vu {
      constructor(uu, Eu, ju, Uu, Zu, Xu) {
        super(Eu, ju, Zu, uu), this.block = Uu, this.isReplace = Xu, this.mapMode = Uu ? Eu <= 0 ? su.u.TrackBefore : su.u.TrackAfter : su.u.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? mu.WidgetRange : this.startSide <= 0 ? mu.WidgetBefore : mu.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(uu) {
        return uu instanceof ru && (Eu = this.widget, ju = uu.widget, Eu == ju || !!(Eu && ju && Eu.compare(ju))) && this.block == uu.block && this.startSide == uu.startSide && this.endSide == uu.endSide;
        var Eu, ju
      }
      range(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu;
        if (this.isReplace && (uu > Eu || uu == Eu && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && Eu != uu) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(uu, Eu)
      }
    }

    function Qu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: ju,
          inclusiveEnd: su
        } = uu;
      return null == ju && (ju = uu.inclusive), null == su && (su = uu.inclusive), {
        start: null !== ju && void 0 !== ju ? ju : Eu,
        end: null !== su && void 0 !== su ? su : Eu
      }
    }

    function iu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Uu = ju.length - 1;
      Uu >= 0 && ju[Uu] + su >= uu ? ju[Uu] = Math.max(ju[Uu], Eu) : ju.push(uu, Eu)
    }
    ru.prototype.point = !0;
    class Wu extends su.I {
      constructor(uu, Eu) {
        super(), this.tagName = uu, this.attributes = Eu
      }
      eq(uu) {
        return uu == this || uu instanceof Wu && this.tagName == uu.tagName && au(this.attributes, uu.attributes)
      }
      static create(uu) {
        return new Wu(uu.tagName, uu.attributes || du)
      }
      static set(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return su.E.of(uu, Eu)
      }
    }

    function Su(uu) {
      let Eu;
      return Eu = 11 == uu.nodeType ? uu.getSelection ? uu : uu.ownerDocument : uu, Eu.getSelection()
    }

    function Iu(uu, Eu) {
      return !!Eu && (uu == Eu || uu.contains(1 != Eu.nodeType ? Eu.parentNode : Eu))
    }

    function Fu(uu, Eu) {
      if (!Eu.anchorNode) return !1;
      try {
        return Iu(uu, Eu.anchorNode)
      } catch (ju) {
        return !1
      }
    }

    function Bu(uu) {
      return 3 == uu.nodeType ? sE(uu, 0, uu.nodeValue.length).getClientRects() : 1 == uu.nodeType ? uu.getClientRects() : []
    }

    function Lu(uu, Eu, ju, su) {
      return !!ju && (Tu(uu, Eu, ju, su, -1) || Tu(uu, Eu, ju, su, 1))
    }

    function tu(uu) {
      for (var Eu = 0;; Eu++)
        if (!(uu = uu.previousSibling)) return Eu
    }

    function xu(uu) {
      return 1 == uu.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(uu.nodeName)
    }

    function Tu(uu, Eu, ju, su, Uu) {
      for (;;) {
        if (uu == ju && Eu == su) return !0;
        if (Eu == (Uu < 0 ? 0 : Hu(uu))) {
          if ("DIV" == uu.nodeName) return !1;
          let ju = uu.parentNode;
          if (!ju || 1 != ju.nodeType) return !1;
          Eu = tu(uu) + (Uu < 0 ? 0 : 1), uu = ju
        } else {
          if (1 != uu.nodeType) return !1;
          if (1 == (uu = uu.childNodes[Eu + (Uu < 0 ? -1 : 0)]).nodeType && "false" == uu.contentEditable) return !1;
          Eu = Uu < 0 ? Hu(uu) : 0
        }
      }
    }

    function Hu(uu) {
      return 3 == uu.nodeType ? uu.nodeValue.length : uu.childNodes.length
    }

    function Au(uu, Eu) {
      let ju = Eu ? uu.left : uu.right;
      return {
        left: ju,
        right: ju,
        top: uu.top,
        bottom: uu.bottom
      }
    }

    function nu(uu) {
      let Eu = uu.visualViewport;
      return Eu ? {
        left: 0,
        right: Eu.width,
        top: 0,
        bottom: Eu.height
      } : {
        left: 0,
        right: uu.innerWidth,
        top: 0,
        bottom: uu.innerHeight
      }
    }

    function yu(uu, Eu) {
      let ju = Eu.width / uu.offsetWidth,
        su = Eu.height / uu.offsetHeight;
      return (ju > .995 && ju < 1.005 || !isFinite(ju) || Math.abs(Eu.width - uu.offsetWidth) < 1) && (ju = 1), (su > .995 && su < 1.005 || !isFinite(su) || Math.abs(Eu.height - uu.offsetHeight) < 1) && (su = 1), {
        scaleX: ju,
        scaleY: su
      }
    }

    function zu(uu) {
      let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        ju = uu.ownerDocument,
        su = null,
        Uu = null;
      for (let Zu = uu.parentNode; Zu && (Zu != ju.body && (Eu && !su || !Uu));)
        if (1 == Zu.nodeType) !Uu && Zu.scrollHeight > Zu.clientHeight && (Uu = Zu), Eu && !su && Zu.scrollWidth > Zu.clientWidth && (su = Zu), Zu = Zu.assignedSlot || Zu.parentNode;
        else {
          if (11 != Zu.nodeType) break;
          Zu = Zu.host
        } return {
        x: su,
        y: Uu
      }
    }
    Wu.prototype.startSide = Wu.prototype.endSide = -1;
    class Ru {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(uu) {
        return this.anchorNode == uu.anchorNode && this.anchorOffset == uu.anchorOffset && this.focusNode == uu.focusNode && this.focusOffset == uu.focusOffset
      }
      setRange(uu) {
        let {
          anchorNode: Eu,
          focusNode: ju
        } = uu;
        this.set(Eu, Math.min(uu.anchorOffset, Eu ? Hu(Eu) : 0), ju, Math.min(uu.focusOffset, ju ? Hu(ju) : 0))
      }
      set(uu, Eu, ju, su) {
        this.anchorNode = uu, this.anchorOffset = Eu, this.focusNode = ju, this.focusOffset = su
      }
    }
    let uE, EE = null;

    function jE(uu) {
      if (uu.setActive) return uu.setActive();
      if (EE) return uu.focus(EE);
      let Eu = [];
      for (let ju = uu; ju && (Eu.push(ju, ju.scrollTop, ju.scrollLeft), ju != ju.ownerDocument); ju = ju.parentNode);
      if (uu.focus(null == EE ? {
          get preventScroll() {
            return EE = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !EE) {
        EE = !1;
        for (let uu = 0; uu < Eu.length;) {
          let ju = Eu[uu++],
            su = Eu[uu++],
            Uu = Eu[uu++];
          ju.scrollTop != su && (ju.scrollTop = su), ju.scrollLeft != Uu && (ju.scrollLeft = Uu)
        }
      }
    }

    function sE(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eu,
        su = uE || (uE = document.createRange());
      return su.setEnd(uu, ju), su.setStart(uu, Eu), su
    }

    function UE(uu, Eu, ju, su) {
      let Uu = {
        key: Eu,
        code: Eu,
        keyCode: ju,
        which: ju,
        cancelable: !0
      };
      su && ({
        altKey: Uu.altKey,
        ctrlKey: Uu.ctrlKey,
        shiftKey: Uu.shiftKey,
        metaKey: Uu.metaKey
      } = su);
      let Zu = new KeyboardEvent("keydown", Uu);
      Zu.synthetic = !0, uu.dispatchEvent(Zu);
      let Xu = new KeyboardEvent("keyup", Uu);
      return Xu.synthetic = !0, uu.dispatchEvent(Xu), Zu.defaultPrevented || Xu.defaultPrevented
    }

    function ZE(uu) {
      return uu instanceof Window ? uu.pageYOffset > Math.max(0, uu.document.documentElement.scrollHeight - uu.innerHeight - 4) : uu.scrollTop > Math.max(1, uu.scrollHeight - uu.clientHeight - 4)
    }

    function XE(uu, Eu) {
      for (let ju = uu, su = Eu;;) {
        if (3 == ju.nodeType && su > 0) return {
          node: ju,
          offset: su
        };
        if (1 == ju.nodeType && su > 0) {
          if ("false" == ju.contentEditable) return null;
          ju = ju.childNodes[su - 1], su = Hu(ju)
        } else {
          if (!ju.parentNode || xu(ju)) return null;
          su = tu(ju), ju = ju.parentNode
        }
      }
    }

    function lE(uu, Eu) {
      for (let ju = uu, su = Eu;;) {
        if (3 == ju.nodeType && su < ju.nodeValue.length) return {
          node: ju,
          offset: su
        };
        if (1 == ju.nodeType && su < ju.childNodes.length) {
          if ("false" == ju.contentEditable) return null;
          ju = ju.childNodes[su], su = 0
        } else {
          if (!ju.parentNode || xu(ju)) return null;
          su = tu(ju) + 1, ju = ju.parentNode
        }
      }
    }
    wu.safari && wu.safari_version >= 26 && (EE = !1);
    class qE {
      constructor(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = uu, this.offset = Eu, this.precise = ju
      }
      static before(uu, Eu) {
        return new qE(uu.parentNode, tu(uu), Eu)
      }
      static after(uu, Eu) {
        return new qE(uu.parentNode, tu(uu) + 1, Eu)
      }
    }
    var fE = function(uu) {
      return uu[uu.LTR = 0] = "LTR", uu[uu.RTL = 1] = "RTL", uu
    }(fE || (fE = {}));
    const CE = fE.LTR,
      bE = fE.RTL;

    function cE(uu) {
      let Eu = [];
      for (let ju = 0; ju < uu.length; ju++) Eu.push(1 << +uu[ju]);
      return Eu
    }
    const NE = cE("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      OE = cE("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      YE = Object.create(null),
      hE = [];
    for (let KX of ["()", "[]", "{}"]) {
      let uu = KX.charCodeAt(0),
        Eu = KX.charCodeAt(1);
      YE[uu] = Eu, YE[Eu] = -uu
    }

    function DE(uu) {
      return uu <= 247 ? NE[uu] : 1424 <= uu && uu <= 1524 ? 2 : 1536 <= uu && uu <= 1785 ? OE[uu - 1536] : 1774 <= uu && uu <= 2220 ? 4 : 8192 <= uu && uu <= 8204 ? 256 : 64336 <= uu && uu <= 65023 ? 4 : 1
    }
    const gE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class ME {
      get dir() {
        return this.level % 2 ? bE : CE
      }
      constructor(uu, Eu, ju) {
        this.from = uu, this.to = Eu, this.level = ju
      }
      side(uu, Eu) {
        return this.dir == Eu == uu ? this.to : this.from
      }
      forward(uu, Eu) {
        return uu == (this.dir == Eu)
      }
      static find(uu, Eu, ju, su) {
        let Uu = -1;
        for (let Zu = 0; Zu < uu.length; Zu++) {
          let Xu = uu[Zu];
          if (Xu.from <= Eu && Xu.to >= Eu) {
            if (Xu.level == ju) return Zu;
            (Uu < 0 || (0 != su ? su < 0 ? Xu.from < Eu : Xu.to > Eu : uu[Uu].level > Xu.level)) && (Uu = Zu)
          }
        }
        if (Uu < 0) throw new RangeError("Index out of range");
        return Uu
      }
    }

    function eE(uu, Eu) {
      if (uu.length != Eu.length) return !1;
      for (let ju = 0; ju < uu.length; ju++) {
        let su = uu[ju],
          Uu = Eu[ju];
        if (su.from != Uu.from || su.to != Uu.to || su.direction != Uu.direction || !eE(su.inner, Uu.inner)) return !1
      }
      return !0
    }
    const GE = [];

    function pE(uu, Eu, ju, su, Uu, Zu, Xu) {
      let lu = su % 2 ? 2 : 1;
      if (su % 2 == Uu % 2)
        for (let qu = Eu, fu = 0; qu < ju;) {
          let Eu = !0,
            Cu = !1;
          if (fu == Zu.length || qu < Zu[fu].from) {
            let uu = GE[qu];
            uu != lu && (Eu = !1, Cu = 16 == uu)
          }
          let bu = Eu || 1 != lu ? null : [],
            cu = Eu ? su : su + 1,
            Nu = qu;
          uu: for (;;)
            if (fu < Zu.length && Nu == Zu[fu].from) {
              if (Cu) break uu;
              let Ou = Zu[fu];
              if (!Eu)
                for (let uu = Ou.to, Eu = fu + 1;;) {
                  if (uu == ju) break uu;
                  if (!(Eu < Zu.length && Zu[Eu].from == uu)) {
                    if (GE[uu] == lu) break uu;
                    break
                  }
                  uu = Zu[Eu++].to
                }
              if (fu++, bu) bu.push(Ou);
              else {
                Ou.from > qu && Xu.push(new ME(qu, Ou.from, cu)), wE(uu, Ou.direction == CE != !(cu % 2) ? su + 1 : su, Uu, Ou.inner, Ou.from, Ou.to, Xu), qu = Ou.to
              }
              Nu = Ou.to
            } else {
              if (Nu == ju || (Eu ? GE[Nu] != lu : GE[Nu] == lu)) break;
              Nu++
            } bu ? pE(uu, qu, Nu, su + 1, Uu, bu, Xu) : qu < Nu && Xu.push(new ME(qu, Nu, cu)), qu = Nu
        } else
          for (let qu = ju, fu = Zu.length; qu > Eu;) {
            let ju = !0,
              Cu = !1;
            if (!fu || qu > Zu[fu - 1].to) {
              let uu = GE[qu - 1];
              uu != lu && (ju = !1, Cu = 16 == uu)
            }
            let bu = ju || 1 != lu ? null : [],
              cu = ju ? su : su + 1,
              Nu = qu;
            uu: for (;;)
              if (fu && Nu == Zu[fu - 1].to) {
                if (Cu) break uu;
                let Ou = Zu[--fu];
                if (!ju)
                  for (let uu = Ou.from, ju = fu;;) {
                    if (uu == Eu) break uu;
                    if (!ju || Zu[ju - 1].to != uu) {
                      if (GE[uu - 1] == lu) break uu;
                      break
                    }
                    uu = Zu[--ju].from
                  }
                if (bu) bu.push(Ou);
                else {
                  Ou.to < qu && Xu.push(new ME(Ou.to, qu, cu)), wE(uu, Ou.direction == CE != !(cu % 2) ? su + 1 : su, Uu, Ou.inner, Ou.from, Ou.to, Xu), qu = Ou.from
                }
                Nu = Ou.from
              } else {
                if (Nu == Eu || (ju ? GE[Nu - 1] != lu : GE[Nu - 1] == lu)) break;
                Nu--
              } bu ? pE(uu, Nu, qu, su + 1, Uu, bu, Xu) : Nu < qu && Xu.push(new ME(Nu, qu, cu)), qu = Nu
          }
    }

    function wE(uu, Eu, ju, su, Uu, Zu, Xu) {
      let lu = Eu % 2 ? 2 : 1;
      ! function(uu, Eu, ju, su, Uu) {
        for (let Zu = 0; Zu <= su.length; Zu++) {
          let Xu = Zu ? su[Zu - 1].to : Eu,
            lu = Zu < su.length ? su[Zu].from : ju,
            qu = Zu ? 256 : Uu;
          for (let Eu = Xu, ju = qu, su = qu; Eu < lu; Eu++) {
            let Uu = DE(uu.charCodeAt(Eu));
            512 == Uu ? Uu = ju : 8 == Uu && 4 == su && (Uu = 16), GE[Eu] = 4 == Uu ? 2 : Uu, 7 & Uu && (su = Uu), ju = Uu
          }
          for (let uu = Xu, Eu = qu, su = qu; uu < lu; uu++) {
            let Uu = GE[uu];
            if (128 == Uu) uu < lu - 1 && Eu == GE[uu + 1] && 24 & Eu ? Uu = GE[uu] = Eu : GE[uu] = 256;
            else if (64 == Uu) {
              let Uu = uu + 1;
              for (; Uu < lu && 64 == GE[Uu];) Uu++;
              let Zu = uu && 8 == Eu || Uu < ju && 8 == GE[Uu] ? 1 == su ? 1 : 8 : 256;
              for (let Eu = uu; Eu < Uu; Eu++) GE[Eu] = Zu;
              uu = Uu - 1
            } else 8 == Uu && 1 == su && (GE[uu] = 1);
            Eu = Uu, 7 & Uu && (su = Uu)
          }
        }
      }(uu, Uu, Zu, su, lu),
      function(uu, Eu, ju, su, Uu) {
        let Zu = 1 == Uu ? 2 : 1;
        for (let Xu = 0, lu = 0, qu = 0; Xu <= su.length; Xu++) {
          let fu = Xu ? su[Xu - 1].to : Eu,
            Cu = Xu < su.length ? su[Xu].from : ju;
          for (let Eu, ju, su, Xu = fu; Xu < Cu; Xu++)
            if (ju = YE[Eu = uu.charCodeAt(Xu)])
              if (ju < 0) {
                for (let uu = lu - 3; uu >= 0; uu -= 3)
                  if (hE[uu + 1] == -ju) {
                    let Eu = hE[uu + 2],
                      ju = 2 & Eu ? Uu : 4 & Eu ? 1 & Eu ? Zu : Uu : 0;
                    ju && (GE[Xu] = GE[hE[uu]] = ju), lu = uu;
                    break
                  }
              } else {
                if (189 == hE.length) break;
                hE[lu++] = Xu, hE[lu++] = Eu, hE[lu++] = qu
              }
          else if (2 == (su = GE[Xu]) || 1 == su) {
            let uu = su == Uu;
            qu = uu ? 0 : 1;
            for (let Eu = lu - 3; Eu >= 0; Eu -= 3) {
              let ju = hE[Eu + 2];
              if (2 & ju) break;
              if (uu) hE[Eu + 2] |= 2;
              else {
                if (4 & ju) break;
                hE[Eu + 2] |= 4
              }
            }
          }
        }
      }(uu, Uu, Zu, su, lu),
      function(uu, Eu, ju, su) {
        for (let Uu = 0, Zu = su; Uu <= ju.length; Uu++) {
          let Xu = Uu ? ju[Uu - 1].to : uu,
            lu = Uu < ju.length ? ju[Uu].from : Eu;
          for (let qu = Xu; qu < lu;) {
            let Xu = GE[qu];
            if (256 == Xu) {
              let Xu = qu + 1;
              for (;;)
                if (Xu == lu) {
                  if (Uu == ju.length) break;
                  Xu = ju[Uu++].to, lu = Uu < ju.length ? ju[Uu].from : Eu
                } else {
                  if (256 != GE[Xu]) break;
                  Xu++
                } let fu = 1 == Zu,
                Cu = fu == (1 == (Xu < Eu ? GE[Xu] : su)) ? fu ? 1 : 2 : su;
              for (let Eu = Xu, su = Uu, Zu = su ? ju[su - 1].to : uu; Eu > qu;) Eu == Zu && (Eu = ju[--su].from, Zu = su ? ju[su - 1].to : uu), GE[--Eu] = Cu;
              qu = Xu
            } else Zu = Xu, qu++
          }
        }
      }(Uu, Zu, su, lu), pE(uu, Uu, Zu, Eu, ju, su, Xu)
    }

    function JE(uu, Eu, ju) {
      if (!uu) return [new ME(0, 0, Eu == bE ? 1 : 0)];
      if (Eu == CE && !ju.length && !gE.test(uu)) return dE(uu.length);
      if (ju.length)
        for (; uu.length > GE.length;) GE[GE.length] = 256;
      let su = [],
        Uu = Eu == CE ? 0 : 1;
      return wE(uu, Uu, Uu, ju, 0, uu.length, su), su
    }

    function dE(uu) {
      return [new ME(0, uu, 0)]
    }
    let aE = "";

    function PE(uu, Eu, ju, Uu, Zu) {
      var Xu;
      let lu = Uu.head - uu.from,
        qu = ME.find(Eu, lu, null !== (Xu = Uu.bidiLevel) && void 0 !== Xu ? Xu : -1, Uu.assoc),
        fu = Eu[qu],
        Cu = fu.side(Zu, ju);
      if (lu == Cu) {
        let uu = qu += Zu ? 1 : -1;
        if (uu < 0 || uu >= Eu.length) return null;
        fu = Eu[qu = uu], lu = fu.side(!Zu, ju), Cu = fu.side(Zu, ju)
      }
      let bu = (0, su.fb)(uu.text, lu, fu.forward(Zu, ju));
      (bu < fu.from || bu > fu.to) && (bu = Cu), aE = uu.text.slice(Math.min(lu, bu), Math.max(lu, bu));
      let cu = qu == (Zu ? Eu.length - 1 : 0) ? null : Eu[qu + (Zu ? 1 : -1)];
      return cu && bu == Cu && cu.level + (Zu ? 0 : 1) < fu.level ? su.l.cursor(cu.side(!Zu, ju) + uu.from, cu.forward(Zu, ju) ? 1 : -1, cu.level) : su.l.cursor(bu + uu.from, fu.forward(Zu, ju) ? -1 : 1, fu.level)
    }

    function oE(uu, Eu, ju) {
      for (let su = Eu; su < ju; su++) {
        let Eu = DE(uu.charCodeAt(su));
        if (1 == Eu) return CE;
        if (2 == Eu || 4 == Eu) return bE
      }
      return CE
    }
    const kE = su.r.define(),
      mE = su.r.define(),
      vE = su.r.define(),
      KE = su.r.define(),
      VE = su.r.define(),
      rE = su.r.define(),
      QE = su.r.define(),
      iE = su.r.define(),
      WE = su.r.define(),
      SE = su.r.define({
        combine: uu => uu.some((uu => uu))
      }),
      IE = su.r.define({
        combine: uu => uu.some((uu => uu))
      }),
      FE = su.r.define();
    class BE {
      constructor(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = uu, this.y = Eu, this.x = ju, this.yMargin = su, this.xMargin = Uu, this.isSnapshot = Zu
      }
      map(uu) {
        return uu.empty ? this : new BE(this.range.map(uu), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(uu) {
        return this.range.to <= uu.doc.length ? this : new BE(su.l.cursor(uu.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const LE = su.L.define({
        map: (uu, Eu) => uu.map(Eu)
      }),
      tE = su.L.define();

    function xE(uu, Eu, ju) {
      let su = uu.facet(KE);
      su.length ? su[0](Eu) : window.onerror && window.onerror(String(Eu), ju, void 0, void 0, Eu) || (ju ? console.error(ju + ":", Eu) : console.error(Eu))
    }
    const TE = su.r.define({
      combine: uu => !uu.length || uu[0]
    });
    let HE = 0;
    const AE = su.r.define({
      combine: uu => uu.filter(((Eu, ju) => {
        for (let su = 0; su < ju; su++)
          if (uu[su].plugin == Eu.plugin) return !1;
        return !0
      }))
    });
    class nE {
      constructor(uu, Eu, ju, su, Uu) {
        this.id = uu, this.create = Eu, this.domEventHandlers = ju, this.domEventObservers = su, this.baseExtensions = Uu(this), this.extension = this.baseExtensions.concat(AE.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(uu) {
        return this.baseExtensions.concat(AE.of({
          plugin: this,
          arg: uu
        }))
      }
      static define(uu, Eu) {
        const {
          eventHandlers: ju,
          eventObservers: su,
          provide: Uu,
          Cs: Zu
        } = Eu || {};
        return new nE(HE++, uu, ju, su, (uu => {
          let Eu = [];
          return Zu && Eu.push(uj.of((Eu => {
            let ju = Eu.plugin(uu);
            return ju ? Zu(ju) : vu.none
          }))), Uu && Eu.push(Uu(uu)), Eu
        }))
      }
      static fromClass(uu, Eu) {
        return nE.define(((Eu, ju) => new uu(Eu, ju)), Eu)
      }
    }
    class yE {
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
            } catch (Eu) {
              if (xE(uu.state, Eu, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (ju) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(uu, this.spec.arg)
        } catch (Eu) {
          xE(uu.state, Eu, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(uu) {
        var Eu;
        if (null === (Eu = this.value) || void 0 === Eu ? void 0 : Eu.destroy) try {
          this.value.destroy()
        } catch (ju) {
          xE(uu.state, ju, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const zE = su.r.define(),
      RE = su.r.define(),
      uj = su.r.define(),
      Ej = su.r.define(),
      jj = su.r.define(),
      sj = su.r.define(),
      Uj = su.r.define();

    function Zj(uu, Eu) {
      let ju = uu.state.facet(Uj);
      if (!ju.length) return ju;
      let Uu = ju.map((Eu => Eu instanceof Function ? Eu(uu) : Eu)),
        Zu = [];
      return su.E.spans(Uu, Eu.from, Eu.to, {
        point() {},
        span(uu, ju, su, Uu) {
          let Xu = uu - Eu.from,
            lu = ju - Eu.from,
            qu = Zu;
          for (let Zu = su.length - 1; Zu >= 0; Zu--, Uu--) {
            let uu, ju = su[Zu].spec.bidiIsolate;
            if (null == ju && (ju = oE(Eu.text, Xu, lu)), Uu > 0 && qu.length && (uu = qu[qu.length - 1]).to == Xu && uu.direction == ju) uu.to = lu, qu = uu.inner;
            else {
              let uu = {
                from: Xu,
                to: lu,
                direction: ju,
                inner: []
              };
              qu.push(uu), qu = uu.inner
            }
          }
        }
      }), Zu
    }
    const Xj = su.r.define();

    function lj(uu) {
      let Eu = 0,
        ju = 0,
        su = 0,
        Uu = 0;
      for (let Zu of uu.state.facet(Xj)) {
        let Xu = Zu(uu);
        Xu && (null != Xu.left && (Eu = Math.max(Eu, Xu.left)), null != Xu.right && (ju = Math.max(ju, Xu.right)), null != Xu.top && (su = Math.max(su, Xu.top)), null != Xu.bottom && (Uu = Math.max(Uu, Xu.bottom)))
      }
      return {
        left: Eu,
        right: ju,
        top: su,
        bottom: Uu
      }
    }
    const qj = su.r.define();
    class fj {
      constructor(uu, Eu, ju, su) {
        this.fromA = uu, this.toA = Eu, this.fromB = ju, this.toB = su
      }
      join(uu) {
        return new fj(Math.min(this.fromA, uu.fromA), Math.max(this.toA, uu.toA), Math.min(this.fromB, uu.fromB), Math.max(this.toB, uu.toB))
      }
      addToSet(uu) {
        let Eu = uu.length,
          ju = this;
        for (; Eu > 0; Eu--) {
          let su = uu[Eu - 1];
          if (!(su.fromA > ju.toA)) {
            if (su.toA < ju.fromA) break;
            ju = ju.join(su), uu.splice(Eu - 1, 1)
          }
        }
        return uu.splice(Eu, 0, ju), uu
      }
      static extendWithRanges(uu, Eu) {
        if (0 == Eu.length) return uu;
        let ju = [];
        for (let su = 0, Uu = 0, Zu = 0;;) {
          let Xu = su < uu.length ? uu[su].fromB : 1e9,
            lu = Uu < Eu.length ? Eu[Uu] : 1e9,
            qu = Math.min(Xu, lu);
          if (1e9 == qu) break;
          let fu = qu + Zu,
            Cu = qu,
            bu = fu;
          for (;;)
            if (Uu < Eu.length && Eu[Uu] <= Cu) {
              let ju = Eu[Uu + 1];
              Uu += 2, Cu = Math.max(Cu, ju);
              for (let Eu = su; Eu < uu.length && uu[Eu].fromB <= Cu; Eu++) Zu = uu[Eu].toA - uu[Eu].toB;
              bu = Math.max(bu, ju + Zu)
            } else {
              if (!(su < uu.length && uu[su].fromB <= Cu)) break;
              {
                let Eu = uu[su++];
                Cu = Math.max(Cu, Eu.toB), bu = Math.max(bu, Eu.toA), Zu = Eu.toA - Eu.toB
              }
            } ju.push(new fj(fu, bu, qu, Cu))
        }
        return ju
      }
    }
    class Cj {
      constructor(uu, Eu, ju) {
        this.view = uu, this.state = Eu, this.transactions = ju, this.flags = 0, this.startState = uu.state, this.changes = su.ChangeSet.empty(this.startState.doc.length);
        for (let su of ju) this.changes = this.changes.compose(su.changes);
        let Uu = [];
        this.changes.iterChangedRanges(((uu, Eu, ju, su) => Uu.push(new fj(uu, Eu, ju, su)))), this.changedRanges = Uu
      }
      static create(uu, Eu, ju) {
        return new Cj(uu, Eu, ju)
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
    const bj = [];
    class cj {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = uu, this.length = Eu, this.flags = ju, this.parent = null, uu.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return bj
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
          uu && function(uu, Eu) {
            for (let ju = uu.attributes.length - 1; ju >= 0; ju--) {
              let su = uu.attributes[ju].name;
              null == Eu[su] && uu.removeAttribute(su)
            }
            for (let ju in Eu) {
              let su = Eu[ju];
              "style" == ju ? uu.style.cssText = su : uu.getAttribute(ju) != su && uu.setAttribute(ju, su)
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
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let ju of this.children) {
          if (ju == uu) return Eu;
          Eu += ju.length + ju.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(uu) {
        return this.posBefore(uu) + uu.length
      }
      covers(uu) {
        return !0
      }
      coordsIn(uu, Eu) {
        return null
      }
      domPosFor(uu, Eu) {
        let ju = tu(this.dom),
          su = this.length ? uu > 0 : Eu > 0;
        return new qE(this.parent.dom, ju + (su ? 1 : 0), 0 == uu || uu == this.length)
      }
      markDirty(uu) {
        this.flags &= -3, uu && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let uu = this; uu; uu = uu.parent)
          if (uu instanceof Yj) return uu;
        return null
      }
      static get(uu) {
        return uu.cmTile
      }
    }
    class Nj extends cj {
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
        let Eu, ju = this.dom,
          su = null,
          Uu = (null === uu || void 0 === uu ? void 0 : uu.node) == ju ? uu : null,
          Zu = 0;
        for (let Xu of this.children) {
          if (Xu.sync(uu), Zu += Xu.length + Xu.breakAfter, Eu = su ? su.nextSibling : ju.firstChild, Uu && Eu != Xu.dom && (Uu.written = !0), Xu.dom.parentNode == ju)
            for (; Eu && Eu != Xu.dom;) Eu = Oj(Eu);
          else ju.insertBefore(Xu.dom, Eu);
          su = Xu.dom
        }
        for (Eu = su ? su.nextSibling : ju.firstChild, Uu && Eu && (Uu.written = !0); Eu;) Eu = Oj(Eu);
        this.length = Zu
      }
    }

    function Oj(uu) {
      let Eu = uu.nextSibling;
      return uu.parentNode.removeChild(uu), Eu
    }
    class Yj extends Nj {
      constructor(uu, Eu) {
        super(Eu), this.view = uu
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
          let Eu = cj.get(uu);
          if (Eu && this.owns(Eu)) return Eu;
          uu = uu.parentNode
        }
      }
      blockTiles(uu) {
        for (let Eu = [], ju = this, su = 0, Uu = 0;;)
          if (su == ju.children.length) {
            if (!Eu.length) return;
            ju = ju.parent, ju.breakAfter && Uu++, su = Eu.pop()
          } else {
            let Zu = ju.children[su++];
            if (Zu instanceof hj) Eu.push(su), ju = Zu, su = 0;
            else {
              let Eu = Uu + Zu.length,
                ju = uu(Zu, Uu);
              if (void 0 !== ju) return ju;
              Uu = Eu + Zu.breakAfter
            }
          }
      }
      resolveBlock(uu, Eu) {
        let ju, su, Uu = -1,
          Zu = -1;
        if (this.blockTiles(((Xu, lu) => {
            let qu = lu + Xu.length;
            if (uu >= lu && uu <= qu) {
              if (Xu.isWidget() && Eu >= -1 && Eu <= 1) {
                if (32 & Xu.flags) return !0;
                16 & Xu.flags && (ju = void 0)
              }(lu < uu || uu == qu && (Eu < -1 ? Xu.length : Xu.covers(1))) && (!ju || !Xu.isWidget() && ju.isWidget()) && (ju = Xu, Uu = uu - lu), (qu > uu || uu == lu && (Eu > 1 ? Xu.length : Xu.covers(-1))) && (!su || !Xu.isWidget() && su.isWidget()) && (su = Xu, Zu = uu - lu)
            }
          })), !ju && !su) throw new Error("No tile at position " + uu);
        return ju && Eu < 0 || !su ? {
          tile: ju,
          offset: Uu
        } : {
          tile: su,
          offset: Zu
        }
      }
    }
    class hj extends Nj {
      constructor(uu, Eu) {
        super(uu), this.wrapper = Eu
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
      static of (uu, Eu) {
        let ju = new hj(Eu || document.createElement(uu.tagName), uu);
        return Eu || (ju.flags |= 4), ju
      }
    }
    class Dj extends Nj {
      constructor(uu, Eu) {
        super(uu), this.attrs = Eu
      }
      isLine() {
        return !0
      }
      static start(uu, Eu, ju) {
        let su = new Dj(Eu || document.createElement("div"), uu);
        return Eu && ju || (su.flags |= 4), su
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(uu, Eu, ju) {
        let su = null,
          Uu = -1,
          Zu = null,
          Xu = -1;
        ! function uu(lu, qu) {
          for (let fu = 0, Cu = 0; fu < lu.children.length && Cu <= qu; fu++) {
            let bu = lu.children[fu],
              cu = Cu + bu.length;
            cu >= qu && (bu.isComposite() ? uu(bu, qu - Cu) : (!Zu || Zu.isHidden && (Eu > 0 || ju && gj(Zu, bu))) && (cu > qu || 32 & bu.flags) ? (Zu = bu, Xu = qu - Cu) : (Cu < qu || 16 & bu.flags && !bu.isHidden) && (su = bu, Uu = qu - Cu)), Cu = cu
          }
        }(this, uu);
        let lu = (Eu < 0 ? su : Zu) || su || Zu;
        return lu ? {
          tile: lu,
          offset: lu == su ? Uu : Xu
        } : null
      }
      coordsIn(uu, Eu) {
        let ju = this.resolveInline(uu, Eu, !0);
        return ju ? ju.tile.coordsIn(Math.max(0, ju.offset), Eu) : function(uu) {
          let Eu = uu.dom.lastChild;
          if (!Eu) return uu.dom.getBoundingClientRect();
          let ju = Bu(Eu);
          return ju[ju.length - 1] || null
        }(this)
      }
      domIn(uu, Eu) {
        let ju = this.resolveInline(uu, Eu);
        if (ju) {
          let {
            tile: uu,
            offset: su
          } = ju;
          if (this.dom.contains(uu.dom)) return uu.isText() ? new qE(uu.dom, Math.min(uu.dom.nodeValue.length, su)) : uu.domPosFor(su, 16 & uu.flags ? 1 : 32 & uu.flags ? -1 : Eu);
          let Uu = ju.tile.parent,
            Zu = !1;
          for (let Eu of Uu.children) {
            if (Zu) return new qE(Eu.dom, 0);
            Eu == ju.tile && (Zu = !0)
          }
        }
        return new qE(this.dom, 0)
      }
    }

    function gj(uu, Eu) {
      let ju = uu.coordsIn(0, 1),
        su = Eu.coordsIn(0, 1);
      return ju && su && su.top < ju.bottom
    }
    class Mj extends Nj {
      constructor(uu, Eu) {
        super(uu), this.mark = Eu
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (uu, Eu) {
        let ju = new Mj(Eu || document.createElement(uu.tagName), uu);
        return Eu || (ju.flags |= 4), ju
      }
    }
    class ej extends cj {
      constructor(uu, Eu) {
        super(uu, Eu.length), this.text = Eu
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
      coordsIn(uu, Eu) {
        let ju = this.dom.nodeValue.length;
        uu > ju && (uu = ju);
        let su = uu,
          Uu = uu,
          Zu = 0;
        0 == uu && Eu < 0 || uu == ju && Eu >= 0 ? wu.chrome || wu.gecko || (uu ? (su--, Zu = 1) : Uu < ju && (Uu++, Zu = -1)) : Eu < 0 ? su-- : Uu < ju && Uu++;
        let Xu = sE(this.dom, su, Uu).getClientRects();
        if (!Xu.length) return null;
        let lu = Xu[(Zu ? Zu < 0 : Eu >= 0) ? 0 : Xu.length - 1];
        return wu.safari && !Zu && 0 == lu.width && (lu = Array.prototype.find.call(Xu, (uu => uu.width)) || lu), Zu ? Au(lu, Zu < 0) : lu || null
      }
      static of (uu, Eu) {
        let ju = new ej(Eu || document.createTextNode(uu), uu);
        return Eu || (ju.flags |= 2), ju
      }
    }
    class Gj extends cj {
      constructor(uu, Eu, ju, su) {
        super(uu, Eu, su), this.widget = ju
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
      coordsIn(uu, Eu) {
        return this.coordsInWidget(uu, Eu, !1)
      }
      coordsInWidget(uu, Eu, ju) {
        let su = this.widget.coordsAt(this.dom, uu, Eu);
        if (su) return su;
        if (ju) return Au(this.dom.getBoundingClientRect(), this.length ? 0 == uu : Eu <= 0);
        {
          let Eu = this.dom.getClientRects(),
            ju = null;
          if (!Eu.length) return null;
          let su = !!(16 & this.flags) || !(32 & this.flags) && uu > 0;
          for (let Uu = su ? Eu.length - 1 : 0; ju = Eu[Uu], !(uu > 0 ? 0 == Uu : Uu == Eu.length - 1 || ju.top < ju.bottom); Uu += su ? -1 : 1);
          return Au(ju, !su)
        }
      }
      get overrideDOMText() {
        if (!this.length) return su.P.empty;
        let {
          root: uu
        } = this;
        if (!uu) return su.P.empty;
        let Eu = this.posAtStart;
        return uu.view.state.doc.slice(Eu, Eu + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (uu, Eu, ju, su, Uu) {
        return Uu || (Uu = uu.toDOM(Eu), uu.editable || (Uu.contentEditable = "false")), new Gj(Uu, ju, uu, su)
      }
    }
    class pj extends cj {
      constructor(uu) {
        let Eu = document.createElement("img");
        Eu.className = "cm-widgetBuffer", Eu.setAttribute("aria-hidden", "true"), super(Eu, 0, uu)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return su.P.empty
      }
      coordsIn(uu) {
        return this.dom.getBoundingClientRect()
      }
    }
    class wj {
      constructor(uu) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = uu
      }
      advance(uu, Eu, ju) {
        let {
          tile: su,
          index: Uu,
          beforeBreak: Zu,
          parents: Xu
        } = this;
        for (; uu || Eu > 0;)
          if (su.isComposite())
            if (Zu) {
              if (!uu) break;
              ju && ju.break(), uu--, Zu = !1
            } else if (Uu == su.children.length) {
          if (!uu && !Xu.length) break;
          ju && ju.leave(su), Zu = !!su.breakAfter, ({
            tile: su,
            index: Uu
          } = Xu.pop()), Uu++
        } else {
          let lu = su.children[Uu],
            qu = lu.breakAfter;
          !(Eu > 0 ? lu.length <= uu : lu.length < uu) || ju && !1 === ju.skip(lu, 0, lu.length) && lu.isComposite ? (Xu.push({
            tile: su,
            index: Uu
          }), su = lu, Uu = 0, ju && lu.isComposite() && ju.enter(lu)) : (Zu = !!qu, Uu++, uu -= lu.length)
        } else if (Uu == su.length) Zu = !!su.breakAfter, ({
          tile: su,
          index: Uu
        } = Xu.pop()), Uu++;
        else {
          if (!uu) break;
          {
            let Eu = Math.min(uu, su.length - Uu);
            ju && ju.skip(su, Uu, Uu + Eu), uu -= Eu, Uu += Eu
          }
        }
        return this.tile = su, this.index = Uu, this.beforeBreak = Zu, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class Jj {
      constructor(uu, Eu, ju, su) {
        this.from = uu, this.to = Eu, this.wrapper = ju, this.rank = su
      }
    }
    class dj {
      constructor(uu, Eu, ju) {
        this.cache = uu, this.root = Eu, this.blockWrappers = ju, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(uu, Eu, ju, su) {
        var Uu;
        this.flushBuffer();
        let Zu = this.ensureMarks(Eu, ju),
          Xu = Zu.lastChild;
        if (Xu && Xu.isText() && !(8 & Xu.flags) && Xu.length + uu.length < 512) {
          this.cache.reused.set(Xu, 2), (Zu.children[Zu.children.length - 1] = new ej(Xu.dom, Xu.text + uu)).parent = Zu
        } else Zu.append(su || ej.of(uu, null === (Uu = this.cache.find(ej)) || void 0 === Uu ? void 0 : Uu.dom));
        this.pos += uu.length, this.afterWidget = null
      }
      addComposition(uu, Eu) {
        let ju = this.curLine;
        ju.dom != Eu.line.dom && (ju.setDOM(this.cache.reused.has(Eu.line) ? Kj(Eu.line.dom) : Eu.line.dom), this.cache.reused.set(Eu.line, 2));
        let su = ju;
        for (let Xu = Eu.marks.length - 1; Xu >= 0; Xu--) {
          let uu = Eu.marks[Xu],
            ju = su.lastChild;
          if (ju instanceof Mj && ju.mark.eq(uu.mark)) ju.dom != uu.dom && ju.setDOM(Kj(uu.dom)), su = ju;
          else {
            if (this.cache.reused.get(uu)) {
              let Eu = cj.get(uu.dom);
              Eu && Eu.setDOM(Kj(uu.dom))
            }
            let Eu = Mj.of(uu.mark, uu.dom);
            su.append(Eu), su = Eu
          }
          this.cache.reused.set(uu, 2)
        }
        let Uu = cj.get(uu.text);
        Uu && this.cache.reused.set(Uu, 2);
        let Zu = new ej(uu.text, uu.text.nodeValue);
        Zu.flags |= 8, su.append(Zu)
      }
      addInlineWidget(uu, Eu, ju) {
        let su = this.afterWidget && 48 & uu.flags && (48 & this.afterWidget.flags) == (48 & uu.flags);
        su || this.flushBuffer();
        let Uu = this.ensureMarks(Eu, ju);
        su || 16 & uu.flags || Uu.append(this.getBuffer(1)), Uu.append(uu), this.pos += uu.length, this.afterWidget = uu
      }
      addMark(uu, Eu, ju) {
        this.flushBuffer(), this.ensureMarks(Eu, ju).append(uu), this.pos += uu.length, this.afterWidget = null
      }
      addBlockWidget(uu) {
        this.getBlockPos().append(uu), this.pos += uu.length, this.lastBlock = uu, this.endLine()
      }
      continueWidget(uu) {
        (this.afterWidget || this.lastBlock).length += uu, this.pos += uu
      }
      addLineStart(uu, Eu) {
        var ju;
        uu || (uu = vj);
        let su = Dj.start(uu, Eu || (null === (ju = this.cache.find(Dj)) || void 0 === ju ? void 0 : ju.dom), !!Eu);
        this.getBlockPos().append(this.lastBlock = this.curLine = su)
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
      ensureMarks(uu, Eu) {
        var ju;
        let su = this.curLine;
        for (let Uu = uu.length - 1; Uu >= 0; Uu--) {
          let Zu, Xu = uu[Uu];
          if (Eu > 0 && (Zu = su.lastChild) && Zu instanceof Mj && Zu.mark.eq(Xu)) su = Zu, Eu--;
          else {
            let uu = Mj.of(Xu, null === (ju = this.cache.find(Mj, (uu => uu.mark.eq(Xu)))) || void 0 === ju ? void 0 : ju.dom);
            su.append(uu), su = uu, Eu = 0
          }
        }
        return su
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let uu = this.curLine.lastChild;
          uu && mj(this.curLine, !1) && ("BR" == uu.dom.nodeName || !uu.isWidget() || wu.ios && mj(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(rj, 0, 32) || new Gj(rj.toDOM(), 0, rj, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let uu = this.wrappers.length - 1; uu >= 0; uu--) this.wrappers[uu].to < this.pos && this.wrappers.splice(uu, 1);
        for (let uu = this.blockWrappers; uu.value && uu.from <= this.pos; uu.next())
          if (uu.to >= this.pos) {
            let Eu = new Jj(uu.from, uu.to, uu.value, uu.rank),
              ju = this.wrappers.length;
            for (; ju > 0 && (this.wrappers[ju - 1].rank - Eu.rank || this.wrappers[ju - 1].to - Eu.to) < 0;) ju--;
            this.wrappers.splice(ju, 0, Eu)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var uu;
        this.updateBlockWrappers();
        let Eu = this.root;
        for (let ju of this.wrappers) {
          let su = Eu.lastChild;
          if (ju.from < this.pos && su instanceof hj && su.wrapper.eq(ju.wrapper)) Eu = su;
          else {
            let su = hj.of(ju.wrapper, null === (uu = this.cache.find(hj, (uu => uu.wrapper.eq(ju.wrapper)))) || void 0 === uu ? void 0 : uu.dom);
            Eu.append(su), Eu = su
          }
        }
        return Eu
      }
      blockPosCovered() {
        let uu = this.lastBlock;
        return null != uu && !uu.breakAfter && (!uu.isWidget() || (160 & uu.flags) > 0)
      }
      getBuffer(uu) {
        let Eu = 2 | (uu < 0 ? 16 : 32),
          ju = this.cache.find(pj, void 0, 1);
        return ju && (ju.flags = Eu), ju || new pj(Eu)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class aj {
      constructor(uu) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = uu.iter()
      }
      skip(uu) {
        this.textOff + uu <= this.text.length ? this.textOff += uu : (this.skipCount += uu - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(uu) {
        if (this.textOff == this.text.length) {
          let {
            value: Eu,
            lineBreak: ju,
            done: su
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, su) throw new Error("Ran out of text content when drawing inline views");
          this.text = Eu;
          let Uu = this.textOff = Math.min(uu, Eu.length);
          return ju ? null : Eu.slice(0, Uu)
        }
        let Eu = Math.min(this.text.length, this.textOff + uu),
          ju = this.text.slice(this.textOff, Eu);
        return this.textOff = Eu, ju
      }
    }
    const Pj = [Gj, Dj, ej, Mj, pj, hj, Yj];
    for (let KX = 0; KX < Pj.length; KX++) Pj[KX].bucket = KX;
    class oj {
      constructor(uu) {
        this.view = uu, this.buckets = Pj.map((() => [])), this.index = Pj.map((() => 0)), this.reused = new Map
      }
      add(uu) {
        let Eu = uu.constructor.bucket,
          ju = this.buckets[Eu];
        ju.length < 6 ? ju.push(uu) : ju[this.index[Eu] = (this.index[Eu] + 1) % 6] = uu
      }
      find(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          su = uu.bucket,
          Uu = this.buckets[su],
          Zu = this.index[su];
        for (let Xu = Uu.length - 1; Xu >= 0; Xu--) {
          let uu = (Xu + Zu) % Uu.length,
            lu = Uu[uu];
          if ((!Eu || Eu(lu)) && !this.reused.has(lu)) return Uu.splice(uu, 1), uu < Zu && this.index[su]--, this.reused.set(lu, ju), lu
        }
        return null
      }
      findWidget(uu, Eu, ju) {
        let su = this.buckets[0];
        if (su.length)
          for (let Uu = 0, Zu = 0;; Uu++) {
            if (Uu == su.length) {
              if (Zu) return null;
              Zu = 1, Uu = 0
            }
            let Xu = su[Uu];
            if (!this.reused.has(Xu) && (0 == Zu ? Xu.widget.compare(uu) : Xu.widget.constructor == uu.constructor && uu.updateDOM(Xu.dom, this.view, Xu.widget))) return su.splice(Uu, 1), Uu < this.index[0] && this.index[0]--, Xu.widget == uu && Xu.length == Eu && (497 & Xu.flags) == ju ? (this.reused.set(Xu, 1), Xu) : (this.reused.set(Xu, 2), new Gj(Xu.dom, Eu, uu, -498 & Xu.flags | ju))
          }
      }
      reuse(uu) {
        return this.reused.set(uu, 1), uu
      }
      maybeReuse(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(uu)) return this.reused.set(uu, Eu), uu.dom
      }
      clear() {
        for (let uu = 0; uu < this.buckets.length; uu++) this.buckets[uu].length = this.index[uu] = 0
      }
    }
    class kj {
      constructor(uu, Eu, ju, Uu, Zu) {
        this.view = uu, this.Cs = Uu, this.disallowBlockEffectsFor = Zu, this.openWidget = !1, this.openMarks = 0, this.cache = new oj(uu), this.text = new aj(uu.state.doc), this.builder = new dj(this.cache, new Yj(uu, uu.contentDOM), su.E.iter(ju)), this.cache.reused.set(Eu, 2), this.old = new wj(Eu), this.reuseWalker = {
          skip: (uu, Eu, ju) => {
            if (this.cache.add(uu), uu.isComposite()) return !1
          },
          enter: uu => this.cache.add(uu),
          leave: () => {},
          break: () => {}
        }
      }
      run(uu, Eu) {
        let ju = Eu && this.getCompositionContext(Eu.text);
        for (let su = 0, Uu = 0, Zu = 0;;) {
          let Xu = Zu < uu.length ? uu[Zu++] : null,
            lu = Xu ? Xu.fromA : this.old.root.length;
          if (lu > su) {
            let uu = lu - su;
            this.preserve(uu, !Zu, !Xu), su = lu, Uu += uu
          }
          if (!Xu) break;
          Eu && Xu.fromA <= Eu.range.fromA && Xu.toA >= Eu.range.toA ? (this.forward(Xu.fromA, Eu.range.fromA, Eu.range.fromA < Eu.range.toA ? 1 : -1), this.emit(Uu, Eu.range.fromB), this.cache.clear(), this.builder.addComposition(Eu, ju), this.text.skip(Eu.range.toB - Eu.range.fromB), this.forward(Eu.range.fromA, Xu.toA), this.emit(Eu.range.toB, Xu.toB)) : (this.forward(Xu.fromA, Xu.toA), this.emit(Uu, Xu.toB)), Uu = Xu.toB, su = Xu.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(uu, Eu, ju) {
        let su = function(uu) {
            let Eu = [];
            for (let ju = uu.parents.length; ju > 1; ju--) {
              let su = ju == uu.parents.length ? uu.tile : uu.parents[ju].tile;
              su instanceof Mj && Eu.push(su.mark)
            }
            return Eu
          }(this.old),
          Uu = this.openMarks;
        this.old.advance(uu, ju ? 1 : -1, {
          skip: (uu, Eu, ju) => {
            if (uu.isWidget())
              if (this.openWidget) this.builder.continueWidget(ju - Eu);
              else {
                let Zu = ju > 0 || Eu < uu.length ? Gj.of(uu.widget, this.view, ju - Eu, 496 & uu.flags, this.cache.maybeReuse(uu)) : this.cache.reuse(uu);
                256 & Zu.flags ? (Zu.flags &= -2, this.builder.addBlockWidget(Zu)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(Zu, su, Uu), Uu = su.length)
              }
            else if (uu.isText()) this.builder.ensureLine(null), Eu || ju != uu.length || this.cache.reused.has(uu) ? (this.cache.add(uu), this.builder.addText(uu.text.slice(Eu, ju), su, Uu)) : this.builder.addText(uu.text, su, Uu, this.cache.reuse(uu)), Uu = su.length;
            else if (uu.isLine()) uu.flags &= -2, this.cache.reused.set(uu, 1), this.builder.addLine(uu);
            else if (uu instanceof pj) this.cache.add(uu);
            else {
              if (!(uu instanceof Mj)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(uu, su, Uu), this.cache.reused.set(uu, 1), Uu = su.length
            }
            this.openWidget = !1
          },
          enter: uu => {
            uu.isLine() ? this.builder.addLineStart(uu.attrs, this.cache.maybeReuse(uu)) : (this.cache.add(uu), uu instanceof Mj && su.unshift(uu.mark)), this.openWidget = !1
          },
          leave: uu => {
            uu.isLine() ? su.length && (su.length = Uu = 0) : uu instanceof Mj && (su.shift(), Uu = Math.min(Uu, su.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(uu)
      }
      emit(uu, Eu) {
        let ju = null,
          Uu = this.builder,
          Zu = 0,
          Xu = su.E.spans(this.Cs, uu, Eu, {
            point: (uu, Eu, su, Xu, lu, qu) => {
              if (su instanceof ru) {
                if (this.disallowBlockEffectsFor[qu]) {
                  if (su.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (Eu > this.view.state.doc.lineAt(uu).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (Zu = Xu.length, lu > Xu.length) Uu.continueWidget(Eu - uu);
                else {
                  let Zu = su.widget || (su.block ? Vj.block : Vj.inline),
                    qu = function(uu) {
                      let Eu = uu.isReplace ? (uu.startSide < 0 ? 64 : 0) | (uu.endSide > 0 ? 128 : 0) : uu.startSide > 0 ? 32 : 16;
                      uu.block && (Eu |= 256);
                      return Eu
                    }(su),
                    fu = this.cache.findWidget(Zu, Eu - uu, qu) || Gj.of(Zu, this.view, Eu - uu, qu);
                  su.block ? (su.startSide > 0 && Uu.addLineStartIfNotCovered(ju), Uu.addBlockWidget(fu)) : (Uu.ensureLine(ju), Uu.addInlineWidget(fu, Xu, lu))
                }
                ju = null
              } else ju = function(uu, Eu) {
                let ju = Eu.spec.attributes,
                  su = Eu.spec.class;
                if (!ju && !su) return uu;
                uu || (uu = {
                  class: "cm-line"
                });
                ju && Ju(ju, uu);
                su && (uu.class += " " + su);
                return uu
              }(ju, su);
              Eu > uu && this.text.skip(Eu - uu)
            },
            span: (uu, Eu, su, Zu) => {
              for (let Xu = uu; Xu < Eu;) {
                let lu = this.text.next(Math.min(512, Eu - Xu));
                null == lu ? (Uu.addLineStartIfNotCovered(ju), Uu.addBreak(), Xu++) : (Uu.ensureLine(ju), Uu.addText(lu, su, Xu == uu ? Zu : su.length), Xu += lu.length), ju = null
              }
            }
          });
        Uu.addLineStartIfNotCovered(ju), this.openWidget = Xu > Zu, this.openMarks = Xu
      }
      forward(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        Eu - uu <= 10 ? this.old.advance(Eu - uu, ju, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(Eu - uu - 10, -1), this.old.advance(5, ju, this.reuseWalker))
      }
      getCompositionContext(uu) {
        let Eu = [],
          ju = null;
        for (let su = uu.parentNode;; su = su.parentNode) {
          let uu = cj.get(su);
          if (su == this.view.contentDOM) break;
          uu instanceof Mj ? Eu.push(uu) : (null === uu || void 0 === uu ? void 0 : uu.isLine()) ? ju = uu : uu instanceof hj || ("DIV" != su.nodeName || ju || su == this.view.contentDOM ? ju || Eu.push(Mj.of(new Ku({
            tagName: su.nodeName.toLowerCase(),
            attributes: ou(su)
          }), su)) : ju = new Dj(su, vj))
        }
        return {
          line: ju,
          marks: Eu
        }
      }
    }

    function mj(uu, Eu) {
      let ju = uu => {
        for (let su of uu.children)
          if ((Eu ? su.isText() : su.length) || ju(su)) return !0;
        return !1
      };
      return ju(uu)
    }
    const vj = {
      class: "cm-line"
    };

    function Kj(uu) {
      let Eu = cj.get(uu);
      return Eu && Eu.setDOM(uu.cloneNode()), uu
    }
    class Vj extends ku {
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
    Vj.inline = new Vj("span"), Vj.block = new Vj("div");
    const rj = new class extends ku {
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
    class Qj {
      constructor(uu) {
        this.view = uu, this.Cs = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = vu.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Yj(uu, uu.contentDOM), this.updateInner([new fj(0, 0, 0, uu.state.doc.length)], null)
      }
      update(uu) {
        var Eu;
        let ju = uu.changedRanges;
        this.minWidth > 0 && ju.length && (ju.every((uu => {
          let {
            fromA: Eu,
            toA: ju
          } = uu;
          return ju < this.minWidthFrom || Eu > this.minWidthTo
        })) ? (this.minWidthFrom = uu.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = uu.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(uu);
        let Uu = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (Eu = this.domChanged) || void 0 === Eu ? void 0 : Eu.newSel) ? Uu = this.domChanged.newSel.head : function(uu, Eu) {
          let ju = !1;
          Eu && uu.iterChangedRanges(((uu, su) => {
            uu < Eu.to && su > Eu.from && (ju = !0)
          }));
          return ju
        }(uu.changes, this.hasComposition) || uu.selectionSet || (Uu = uu.state.selection.main.head));
        let Zu = Uu > -1 ? function(uu, Eu, ju) {
          let su = Wj(uu, ju);
          if (!su) return null;
          let {
            node: Uu,
            from: Zu,
            to: Xu
          } = su, lu = Uu.nodeValue;
          if (/[\n\r]/.test(lu)) return null;
          if (uu.state.doc.sliceString(su.from, su.to) != lu) return null;
          let qu = Eu.invertedDesc;
          return {
            range: new fj(qu.mapPos(Zu), qu.mapPos(Xu), Zu, Xu),
            text: Uu
          }
        }(this.view, uu.changes, Uu) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: Eu,
            to: su
          } = this.hasComposition;
          ju = new fj(Eu, su, uu.changes.mapPos(Eu, -1), uu.changes.mapPos(su, 1)).addToSet(ju.slice())
        }
        this.hasComposition = Zu ? {
          from: Zu.range.fromB,
          to: Zu.range.toB
        } : null, (wu.ie || wu.chrome) && !Zu && uu && uu.state.doc.lines != uu.startState.doc.lines && (this.forceSelection = !0);
        let Xu = this.Cs,
          lu = this.blockWrappers;
        this.updateDeco();
        let qu = function(uu, Eu, ju) {
          let Uu = new Sj;
          return su.E.compare(uu, Eu, ju, Uu), Uu.changes
        }(Xu, this.Cs, uu.changes);
        qu.length && (ju = fj.extendWithRanges(ju, qu));
        let fu = function(uu, Eu, ju) {
          let Uu = new Ij;
          return su.E.compare(uu, Eu, ju, Uu), Uu.changes
        }(lu, this.blockWrappers, uu.changes);
        return fu.length && (ju = fj.extendWithRanges(ju, fu)), Zu && !ju.some((uu => uu.fromA <= Zu.range.fromA && uu.toA >= Zu.range.toA)) && (ju = Zu.range.addToSet(ju.slice())), !(2 & this.tile.flags && 0 == ju.length) && (this.updateInner(ju, Zu), uu.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(uu, Eu) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: ju
        } = this.view;
        ju.ignore((() => {
          if (Eu || uu.length) {
            let ju = this.tile,
              su = new kj(this.view, ju, this.blockWrappers, this.Cs, this.dynamicDecorationMap);
            Eu && cj.get(Eu.text) && su.cache.reused.set(cj.get(Eu.text), 2), this.tile = su.run(uu, Eu), ij(ju, su.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let su = wu.chrome || wu.ios ? {
            node: ju.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(su), !su || !su.written && ju.selectionRange.focusNode == su.node && this.tile.dom.contains(su.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let su = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Uu of this.tile.children) Uu.isWidget() && Uu.widget instanceof Fj && su.push(Uu.dom);
        ju.updateGaps(su)
      }
      updateEditContextFormatting(uu) {
        this.editContextFormatting = this.editContextFormatting.map(uu.changes);
        for (let Eu of uu.transactions)
          for (let uu of Eu.effects) uu.is(tE) && (this.editContextFormatting = uu.value)
      }
      updateSelection() {
        let uu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: Eu
        } = this.tile, ju = this.view.root.activeElement, su = ju == Eu, Uu = !su && !(this.view.state.facet(TE) || Eu.tabIndex > -1) && Fu(Eu, this.view.observer.selectionRange) && !(ju && Eu.contains(ju));
        if (!(su || uu || Uu)) return;
        let Zu = this.forceSelection;
        this.forceSelection = !1;
        let Xu, lu, qu = this.view.state.selection.main;
        if (qu.empty ? lu = Xu = this.inlineDOMNearPos(qu.anchor, qu.assoc || 1) : (lu = this.inlineDOMNearPos(qu.head, qu.head == qu.from ? 1 : -1), Xu = this.inlineDOMNearPos(qu.anchor, qu.anchor == qu.from ? 1 : -1)), wu.gecko && qu.empty && !this.hasComposition && (1 == (fu = Xu).node.nodeType && fu.node.firstChild && (0 == fu.offset || "false" == fu.node.childNodes[fu.offset - 1].contentEditable) && (fu.offset == fu.node.childNodes.length || "false" == fu.node.childNodes[fu.offset].contentEditable))) {
          let uu = document.createTextNode("");
          this.view.observer.ignore((() => Xu.node.insertBefore(uu, Xu.node.childNodes[Xu.offset] || null))), Xu = lu = new qE(uu, 0), Zu = !0
        }
        var fu;
        let Cu = this.view.observer.selectionRange;
        !Zu && Cu.focusNode && (Lu(Xu.node, Xu.offset, Cu.anchorNode, Cu.anchorOffset) && Lu(lu.node, lu.offset, Cu.focusNode, Cu.focusOffset) || this.suppressWidgetCursorChange(Cu, qu)) || (this.view.observer.ignore((() => {
          wu.android && wu.chrome && Eu.contains(Cu.focusNode) && function(uu, Eu) {
            for (let ju = uu; ju && ju != Eu; ju = ju.assignedSlot || ju.parentNode)
              if (1 == ju.nodeType && "false" == ju.contentEditable) return !0;
            return !1
          }(Cu.focusNode, Eu) && (Eu.blur(), Eu.focus({
            preventScroll: !0
          }));
          let uu = Su(this.view.root);
          if (uu)
            if (qu.empty) {
              if (wu.gecko) {
                let uu = (su = Xu.node, Zu = Xu.offset, 1 != su.nodeType ? 0 : (Zu && "false" == su.childNodes[Zu - 1].contentEditable ? 1 : 0) | (Zu < su.childNodes.length && "false" == su.childNodes[Zu].contentEditable ? 2 : 0));
                if (uu && 3 != uu) {
                  let Eu = (1 == uu ? XE : lE)(Xu.node, Xu.offset);
                  Eu && (Xu = new qE(Eu.node, Eu.offset))
                }
              }
              uu.collapse(Xu.node, Xu.offset), null != qu.bidiLevel && void 0 !== uu.caretBidiLevel && (uu.caretBidiLevel = qu.bidiLevel)
            } else if (uu.extend) {
            uu.collapse(Xu.node, Xu.offset);
            try {
              uu.extend(lu.node, lu.offset)
            } catch (fu) {}
          } else {
            let Eu = document.createRange();
            qu.anchor > qu.head && ([Xu, lu] = [lu, Xu]), Eu.setEnd(lu.node, lu.offset), Eu.setStart(Xu.node, Xu.offset), uu.removeAllRanges(), uu.addRange(Eu)
          } else;
          var su, Zu;
          Uu && this.view.root.activeElement == Eu && (Eu.blur(), ju && ju.focus())
        })), this.view.observer.setSelectionRange(Xu, lu)), this.impreciseAnchor = Xu.precise ? null : new qE(Cu.anchorNode, Cu.anchorOffset), this.impreciseHead = lu.precise ? null : new qE(Cu.focusNode, Cu.focusOffset)
      }
      suppressWidgetCursorChange(uu, Eu) {
        return this.hasComposition && Eu.empty && Lu(uu.focusNode, uu.focusOffset, uu.anchorNode, uu.anchorOffset) && this.posFromDOM(uu.focusNode, uu.focusOffset) == Eu.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: uu
        } = this, Eu = uu.state.selection.main, ju = Su(uu.root), {
          anchorNode: su,
          anchorOffset: Uu
        } = uu.observer.selectionRange;
        if (!ju || !Eu.empty || !Eu.assoc || !ju.modify) return;
        let Zu = this.lineAt(Eu.head, Eu.assoc);
        if (!Zu) return;
        let Xu = Zu.posAtStart;
        if (Eu.head == Xu || Eu.head == Xu + Zu.length) return;
        let lu = this.coordsAt(Eu.head, -1),
          qu = this.coordsAt(Eu.head, 1);
        if (!lu || !qu || lu.bottom > qu.top) return;
        let fu = this.domAtPos(Eu.head + Eu.assoc, Eu.assoc);
        ju.collapse(fu.node, fu.offset), ju.modify("move", Eu.assoc < 0 ? "forward" : "backward", "lineboundary"), uu.observer.readSelectionRange();
        let Cu = uu.observer.selectionRange;
        uu.docView.posFromDOM(Cu.anchorNode, Cu.anchorOffset) != Eu.from && ju.collapse(su, Uu)
      }
      posFromDOM(uu, Eu) {
        let ju = this.tile.nearest(uu);
        if (!ju) return 2 & this.tile.dom.compareDocumentPosition(uu) ? 0 : this.view.state.doc.length;
        let su = ju.posAtStart;
        if (!ju.isComposite()) return ju.isText() ? uu == ju.dom ? su + Eu : su + (Eu ? ju.length : 0) : su;
        {
          let Uu;
          if (uu == ju.dom) Uu = ju.dom.childNodes[Eu];
          else {
            let su = 0 == Hu(uu) ? 0 : 0 == Eu ? -1 : 1;
            for (;;) {
              let Eu = uu.parentNode;
              if (Eu == ju.dom) break;
              0 == su && Eu.firstChild != Eu.lastChild && (su = uu == Eu.firstChild ? -1 : 1), uu = Eu
            }
            Uu = su < 0 ? uu : uu.nextSibling
          }
          if (Uu == ju.dom.firstChild) return su;
          for (; Uu && !cj.get(Uu);) Uu = Uu.nextSibling;
          if (!Uu) return su + ju.length;
          for (let uu = 0, Eu = su;; uu++) {
            let su = ju.children[uu];
            if (su.dom == Uu) return Eu;
            Eu += su.length + su.breakAfter
          }
        }
      }
      domAtPos(uu, Eu) {
        let {
          tile: ju,
          offset: su
        } = this.tile.resolveBlock(uu, Eu);
        return ju.isWidget() ? ju.domPosFor(uu, Eu) : ju.domIn(su, Eu)
      }
      inlineDOMNearPos(uu, Eu) {
        let ju, su, Uu = -1,
          Zu = !1,
          Xu = -1,
          lu = !1;
        return this.tile.blockTiles(((Eu, qu) => {
          if (Eu.isWidget()) {
            if (32 & Eu.flags && qu >= uu) return !0;
            16 & Eu.flags && (Zu = !0)
          } else {
            let fu = qu + Eu.length;
            if (qu <= uu && (ju = Eu, Uu = uu - qu, Zu = fu < uu), fu >= uu && !su && (su = Eu, Xu = uu - qu, lu = qu > uu), qu > uu && su) return !0
          }
        })), ju || su ? (Zu && su ? ju = null : lu && ju && (su = null), ju && Eu < 0 || !su ? ju.domIn(Uu, Eu) : su.domIn(Xu, Eu)) : this.domAtPos(uu, Eu)
      }
      coordsAt(uu, Eu) {
        let {
          tile: ju,
          offset: su
        } = this.tile.resolveBlock(uu, Eu);
        return ju.isWidget() ? ju.widget instanceof Fj ? null : ju.coordsInWidget(su, Eu, !0) : ju.coordsIn(su, Eu)
      }
      lineAt(uu, Eu) {
        let {
          tile: ju
        } = this.tile.resolveBlock(uu, Eu);
        return ju.isLine() ? ju : null
      }
      coordsForChar(uu) {
        let {
          tile: Eu,
          offset: ju
        } = this.tile.resolveBlock(uu, 1);
        if (!Eu.isLine()) return null;
        return function uu(Eu, ju) {
          if (Eu.isComposite())
            for (let su of Eu.children) {
              if (su.length >= ju) {
                let Eu = uu(su, ju);
                if (Eu) return Eu
              }
              if ((ju -= su.length) < 0) break
            } else if (Eu.isText() && ju < Eu.length) {
              let uu = (0, su.fb)(Eu.text, ju);
              if (uu == ju) return null;
              let Uu = sE(Eu.dom, ju, uu).getClientRects();
              for (let Eu = 0; Eu < Uu.length; Eu++) {
                let uu = Uu[Eu];
                if (Eu == Uu.length - 1 || uu.top < uu.bottom && uu.left < uu.right) return uu
              }
            } return null
        }(Eu, ju)
      }
      measureVisibleLineHeights(uu) {
        let Eu = [],
          {
            from: ju,
            to: su
          } = uu,
          Uu = this.view.contentDOM.clientWidth,
          Zu = Uu > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          Xu = -1,
          lu = this.view.textDirection == fE.LTR,
          qu = 0,
          fu = (uu, Cu, bu) => {
            for (let cu = 0; cu < uu.children.length && !(Cu > su); cu++) {
              let su = uu.children[cu],
                Nu = Cu + su.length,
                Ou = su.dom.getBoundingClientRect(),
                {
                  height: Yu
                } = Ou;
              if (bu && !cu && (qu += Ou.top - bu.top), su instanceof hj) Nu > ju && fu(su, Cu, Ou);
              else if (Cu >= ju && (qu > 0 && Eu.push(-qu), Eu.push(Yu + qu), qu = 0, Zu)) {
                let uu = su.dom.lastChild,
                  Eu = uu ? Bu(uu) : [];
                if (Eu.length) {
                  let uu = Eu[Eu.length - 1],
                    ju = lu ? uu.right - Ou.left : Ou.right - uu.left;
                  ju > Xu && (Xu = ju, this.minWidth = Uu, this.minWidthFrom = Cu, this.minWidthTo = Nu)
                }
              }
              bu && cu == uu.children.length - 1 && (qu += bu.bottom - Ou.bottom), Cu = Nu + su.breakAfter
            }
          };
        return fu(this.tile, 0, null), Eu
      }
      textDirectionAt(uu) {
        let {
          tile: Eu
        } = this.tile.resolveBlock(uu, 1);
        return "rtl" == getComputedStyle(Eu.dom).direction ? fE.RTL : fE.LTR
      }
      measureTextSize() {
        let uu = this.tile.blockTiles((uu => {
          if (uu.isLine() && uu.children.length && uu.length <= 20) {
            let Eu, ju = 0;
            for (let su of uu.children) {
              if (!su.isText() || /[^ -~]/.test(su.text)) return;
              let uu = Bu(su.dom);
              if (1 != uu.length) return;
              ju += uu[0].width, Eu = uu[0].height
            }
            if (ju) return {
              lineHeight: uu.dom.getBoundingClientRect().height,
              charWidth: ju / uu.length,
              textHeight: Eu
            }
          }
        }));
        if (uu) return uu;
        let Eu, ju, su, Uu = document.createElement("div");
        return Uu.className = "cm-line", Uu.style.width = "99999px", Uu.style.position = "absolute", Uu.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Uu);
          let uu = Bu(Uu.firstChild)[0];
          Eu = Uu.getBoundingClientRect().height, ju = uu && uu.width ? uu.width / 27 : 7, su = uu && uu.height ? uu.height : Eu, Uu.remove()
        })), {
          lineHeight: Eu,
          charWidth: ju,
          textHeight: su
        }
      }
      computeBlockGapDeco() {
        let uu = [],
          Eu = this.view.viewState;
        for (let ju = 0, su = 0;; su++) {
          let Uu = su == Eu.viewports.length ? null : Eu.viewports[su],
            Zu = Uu ? Uu.from - 1 : this.view.state.doc.length;
          if (Zu > ju) {
            let su = (Eu.lineBlockAt(Zu).bottom - Eu.lineBlockAt(ju).top) / this.view.scaleY;
            uu.push(vu.replace({
              widget: new Fj(su),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(ju, Zu))
          }
          if (!Uu) break;
          ju = Uu.to + 1
        }
        return vu.set(uu)
      }
      updateDeco() {
        let uu = 1,
          Eu = this.view.state.facet(uj).map((Eu => (this.dynamicDecorationMap[uu++] = "function" == typeof Eu) ? Eu(this.view) : Eu)),
          ju = !1,
          Uu = this.view.state.facet(jj).map(((uu, Eu) => {
            let su = "function" == typeof uu;
            return su && (ju = !0), su ? uu(this.view) : uu
          }));
        for (Uu.length && (this.dynamicDecorationMap[uu++] = ju, Eu.push(su.E.join(Uu))), this.Cs = [this.editContextFormatting, ...Eu, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; uu < this.Cs.length;) this.dynamicDecorationMap[uu++] = !1;
        this.blockWrappers = this.view.state.facet(Ej).map((uu => "function" == typeof uu ? uu(this.view) : uu))
      }
      scrollIntoView(uu) {
        var Eu;
        if (uu.isSnapshot) {
          let Eu = this.view.viewState.lineBlockAt(uu.range.head);
          return this.view.scrollDOM.scrollTop = Eu.top - uu.yMargin, void(this.view.scrollDOM.scrollLeft = uu.xMargin)
        }
        for (let Cu of this.view.state.facet(FE)) try {
          if (Cu(this.view, uu.range, uu)) return !0
        } catch (fu) {
          xE(this.view.state, fu, "scroll handler")
        }
        let ju, {
            range: su
          } = uu,
          Uu = this.coordsAt(su.head, null !== (Eu = su.assoc) && void 0 !== Eu ? Eu : su.empty ? 0 : su.head > su.anchor ? -1 : 1);
        if (!Uu) return;
        !su.empty && (ju = this.coordsAt(su.anchor, su.anchor > su.head ? -1 : 1)) && (Uu = {
          left: Math.min(Uu.left, ju.left),
          top: Math.min(Uu.top, ju.top),
          right: Math.max(Uu.right, ju.right),
          bottom: Math.max(Uu.bottom, ju.bottom)
        });
        let Zu = lj(this.view),
          Xu = {
            left: Uu.left - Zu.left,
            top: Uu.top - Zu.top,
            right: Uu.right + Zu.right,
            bottom: Uu.bottom + Zu.bottom
          },
          {
            offsetWidth: lu,
            offsetHeight: qu
          } = this.view.scrollDOM;
        if (function(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
            let qu = uu.ownerDocument,
              fu = qu.defaultView || window;
            for (let Cu = uu, bu = !1; Cu && !bu;)
              if (1 == Cu.nodeType) {
                let uu, cu = Cu == qu.body,
                  Nu = 1,
                  Ou = 1;
                if (cu) uu = nu(fu);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(Cu).position) && (bu = !0), Cu.scrollHeight <= Cu.clientHeight && Cu.scrollWidth <= Cu.clientWidth) {
                    Cu = Cu.assignedSlot || Cu.parentNode;
                    continue
                  }
                  let Eu = Cu.getBoundingClientRect();
                  ({
                    scaleX: Nu,
                    scaleY: Ou
                  } = yu(Cu, Eu)), uu = {
                    left: Eu.left,
                    right: Eu.left + Cu.clientWidth * Nu,
                    top: Eu.top,
                    bottom: Eu.top + Cu.clientHeight * Ou
                  }
                }
                let Yu = 0,
                  hu = 0;
                if ("nearest" == Uu) Eu.top < uu.top + Xu ? (hu = Eu.top - (uu.top + Xu), ju > 0 && Eu.bottom > uu.bottom + hu && (hu = Eu.bottom - uu.bottom + Xu)) : Eu.bottom > uu.bottom - Xu && (hu = Eu.bottom - uu.bottom + Xu, ju < 0 && Eu.top - hu < uu.top && (hu = Eu.top - (uu.top + Xu)));
                else {
                  let su = Eu.bottom - Eu.top,
                    Zu = uu.bottom - uu.top;
                  hu = ("center" == Uu && su <= Zu ? Eu.top + su / 2 - Zu / 2 : "start" == Uu || "center" == Uu && ju < 0 ? Eu.top - Xu : Eu.bottom - Zu + Xu) - uu.top
                }
                if ("nearest" == su ? Eu.left < uu.left + Zu ? (Yu = Eu.left - (uu.left + Zu), ju > 0 && Eu.right > uu.right + Yu && (Yu = Eu.right - uu.right + Zu)) : Eu.right > uu.right - Zu && (Yu = Eu.right - uu.right + Zu, ju < 0 && Eu.left < uu.left + Yu && (Yu = Eu.left - (uu.left + Zu))) : Yu = ("center" == su ? Eu.left + (Eu.right - Eu.left) / 2 - (uu.right - uu.left) / 2 : "start" == su == lu ? Eu.left - Zu : Eu.right - (uu.right - uu.left) + Zu) - uu.left, Yu || hu)
                  if (cu) fu.scrollBy(Yu, hu);
                  else {
                    let uu = 0,
                      ju = 0;
                    if (hu) {
                      let uu = Cu.scrollTop;
                      Cu.scrollTop += hu / Ou, ju = (Cu.scrollTop - uu) * Ou
                    }
                    if (Yu) {
                      let Eu = Cu.scrollLeft;
                      Cu.scrollLeft += Yu / Nu, uu = (Cu.scrollLeft - Eu) * Nu
                    }
                    Eu = {
                      left: Eu.left - uu,
                      top: Eu.top - ju,
                      right: Eu.right - uu,
                      bottom: Eu.bottom - ju
                    }, uu && Math.abs(uu - Yu) < 1 && (su = "nearest"), ju && Math.abs(ju - hu) < 1 && (Uu = "nearest")
                  } if (cu) break;
                (Eu.top < uu.top || Eu.bottom > uu.bottom || Eu.left < uu.left || Eu.right > uu.right) && (Eu = {
                  left: Math.max(Eu.left, uu.left),
                  right: Math.min(Eu.right, uu.right),
                  top: Math.max(Eu.top, uu.top),
                  bottom: Math.min(Eu.bottom, uu.bottom)
                }), Cu = Cu.assignedSlot || Cu.parentNode
              } else {
                if (11 != Cu.nodeType) break;
                Cu = Cu.host
              }
          }(this.view.scrollDOM, Xu, su.head < su.anchor ? -1 : 1, uu.x, uu.y, Math.max(Math.min(uu.xMargin, lu), -lu), Math.max(Math.min(uu.yMargin, qu), -qu), this.view.textDirection == fE.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Uu.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Uu.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let uu = this.view.docView.lineAt(su.head, 1);
          uu && uu.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(uu) {
        let Eu = uu => uu.isWidget() || uu.children.some(Eu);
        return Eu(this.tile.resolveBlock(uu, 1).tile)
      }
      destroy() {
        ij(this.tile)
      }
    }

    function ij(uu, Eu) {
      let ju = null === Eu || void 0 === Eu ? void 0 : Eu.get(uu);
      if (1 != ju) {
        null == ju && uu.destroy();
        for (let ju of uu.children) ij(ju, Eu)
      }
    }

    function Wj(uu, Eu) {
      let ju = uu.observer.selectionRange;
      if (!ju.focusNode) return null;
      let su = XE(ju.focusNode, ju.focusOffset),
        Uu = lE(ju.focusNode, ju.focusOffset),
        Zu = su || Uu;
      if (Uu && su && Uu.node != su.node) {
        let Eu = cj.get(Uu.node);
        if (!Eu || Eu.isText() && Eu.text != Uu.node.nodeValue) Zu = Uu;
        else if (uu.docView.lastCompositionAfterCursor) {
          let uu = cj.get(su.node);
          !uu || uu.isText() && uu.text != su.node.nodeValue || (Zu = Uu)
        }
      }
      if (uu.docView.lastCompositionAfterCursor = Zu != su, !Zu) return null;
      let Xu = Eu - Zu.offset;
      return {
        from: Xu,
        to: Xu + Zu.node.nodeValue.length,
        node: Zu.node
      }
    }
    let Sj = class {
      constructor() {
        this.changes = []
      }
      compareRange(uu, Eu) {
        iu(uu, Eu, this.changes)
      }
      comparePoint(uu, Eu) {
        iu(uu, Eu, this.changes)
      }
      boundChange(uu) {
        iu(uu, uu, this.changes)
      }
    };
    class Ij {
      constructor() {
        this.changes = []
      }
      compareRange(uu, Eu) {
        iu(uu, Eu, this.changes)
      }
      comparePoint() {}
      boundChange(uu) {
        iu(uu, uu, this.changes)
      }
    }
    class Fj extends ku {
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

    function Bj(uu, Eu, ju) {
      let su = uu.lineBlockAt(Eu);
      if (Array.isArray(su.type)) {
        let uu;
        for (let Uu of su.type) {
          if (Uu.from > Eu) break;
          if (!(Uu.to < Eu)) {
            if (Uu.from < Eu && Uu.to > Eu) return Uu;
            uu && (Uu.type != mu.Text || uu.type == Uu.type && !(ju < 0 ? Uu.from < Eu : Uu.to > Eu)) || (uu = Uu)
          }
        }
        return uu || su
      }
      return su
    }

    function Lj(uu, Eu, ju, su) {
      let Uu = uu.state.doc.lineAt(Eu.head),
        Zu = uu.bidiSpans(Uu),
        Xu = uu.textDirectionAt(Uu.from);
      for (let lu = Eu, qu = null;;) {
        let Eu = PE(Uu, Zu, Xu, lu, ju),
          fu = aE;
        if (!Eu) {
          if (Uu.number == (ju ? uu.state.doc.lines : 1)) return lu;
          fu = "\n", Uu = uu.state.doc.line(Uu.number + (ju ? 1 : -1)), Zu = uu.bidiSpans(Uu), Eu = uu.visualLineSide(Uu, !ju)
        }
        if (qu) {
          if (!qu(fu)) return lu
        } else {
          if (!su) return Eu;
          qu = su(fu)
        }
        lu = Eu
      }
    }

    function tj(uu, Eu, ju) {
      for (;;) {
        let su = 0;
        for (let Uu of uu) Uu.between(Eu - 1, Eu + 1, ((uu, Uu, Zu) => {
          if (Eu > uu && Eu < Uu) {
            let Zu = su || ju || (Eu - uu < Uu - Eu ? -1 : 1);
            Eu = Zu < 0 ? uu : Uu, su = Zu
          }
        }));
        if (!su) return Eu
      }
    }

    function xj(uu, Eu) {
      let ju = null;
      for (let Uu = 0; Uu < Eu.HY.length; Uu++) {
        let Zu = Eu.HY[Uu],
          Xu = null;
        if (Zu.empty) {
          let Eu = tj(uu, Zu.from, 0);
          Eu != Zu.from && (Xu = su.l.cursor(Eu, -1))
        } else {
          let Eu = tj(uu, Zu.from, -1),
            ju = tj(uu, Zu.to, 1);
          Eu == Zu.from && ju == Zu.to || (Xu = su.l.range(Zu.from == Zu.anchor ? Eu : ju, Zu.from == Zu.head ? Eu : ju))
        }
        Xu && (ju || (ju = Eu.HY.slice()), ju[Uu] = Xu)
      }
      return ju ? su.l.create(ju, Eu.mainIndex) : Eu
    }

    function Tj(uu, Eu, ju) {
      let Uu = tj(uu.state.facet(sj).map((Eu => Eu(uu))), ju.from, Eu.head > ju.from ? -1 : 1);
      return Uu == ju.from ? ju : su.l.cursor(Uu, Uu < ju.from ? 1 : -1)
    }
    class Hj {
      constructor(uu, Eu) {
        this.pos = uu, this.assoc = Eu
      }
    }

    function Aj(uu, Eu, ju, Uu) {
      let Zu, Xu = uu.contentDOM.getBoundingClientRect(),
        lu = Xu.top + uu.viewState.paddingTop,
        {
          x: qu,
          y: fu
        } = Eu,
        Cu = fu - lu;
      for (;;) {
        if (Cu < 0) return new Hj(0, 1);
        if (Cu > uu.viewState.docHeight) return new Hj(uu.state.doc.length, -1);
        if (Zu = uu.elementAtHeight(Cu), null == Uu) break;
        if (Zu.type == mu.Text) {
          if (Uu < 0 ? Zu.to < uu.viewport.from : Zu.from > uu.viewport.to) break;
          let Eu = uu.docView.coordsAt(Uu < 0 ? Zu.from : Zu.to, Uu > 0 ? -1 : 1);
          if (Eu && (Uu < 0 ? Eu.top <= Cu + lu : Eu.bottom >= Cu + lu)) break
        }
        let Eu = uu.viewState.heightOracle.textHeight / 2;
        Cu = Uu > 0 ? Zu.bottom + Eu : Zu.top - Eu
      }
      if (uu.viewport.from >= Zu.to || uu.viewport.to <= Zu.from) {
        if (ju) return null;
        if (Zu.type == mu.Text) {
          let Eu = function(uu, Eu, ju, Uu, Zu) {
            let Xu = Math.round((Uu - Eu.left) * uu.defaultCharacterWidth);
            if (uu.lineWrapping && ju.height > 1.5 * uu.defaultLineHeight) {
              let Eu = uu.viewState.heightOracle.textHeight;
              Xu += Math.floor((Zu - ju.top - .5 * (uu.defaultLineHeight - Eu)) / Eu) * uu.viewState.heightOracle.lineLength
            }
            let lu = uu.state.sliceDoc(ju.from, ju.to);
            return ju.from + (0, su.gb)(lu, Xu, uu.state.tabSize)
          }(uu, Xu, Zu, qu, fu);
          return new Hj(Eu, Eu == Zu.from ? 1 : -1)
        }
      }
      if (Zu.type != mu.Text) return Cu < (Zu.top + Zu.bottom) / 2 ? new Hj(Zu.from, 1) : new Hj(Zu.to, -1);
      let bu = uu.docView.lineAt(Zu.from, 2);
      return bu && bu.length == Zu.length || (bu = uu.docView.lineAt(Zu.from, -2)), new nj(uu, qu, fu, uu.textDirectionAt(Zu.from)).scanTile(bu, Zu.from)
    }
    class nj {
      constructor(uu, Eu, ju, su) {
        this.view = uu, this.x = Eu, this.y = ju, this.baseDir = su, this.line = null, this.spans = null
      }
      bidiSpansAt(uu) {
        return (!this.line || this.line.from > uu || this.line.to < uu) && (this.line = this.view.state.doc.lineAt(uu), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(uu, Eu) {
        let {
          line: ju,
          spans: su
        } = this.bidiSpansAt(uu);
        return su[ME.find(su, uu - ju.from, -1, Eu)].level == this.baseDir
      }
      dirAt(uu, Eu) {
        let {
          line: ju,
          spans: su
        } = this.bidiSpansAt(uu);
        return su[ME.find(su, uu - ju.from, -1, Eu)].dir
      }
      bidiIn(uu, Eu) {
        let {
          spans: ju,
          line: su
        } = this.bidiSpansAt(uu);
        return ju.length > 1 || ju.length && (ju[0].level != this.baseDir || ju[0].to + su.from < Eu)
      }
      scan(uu, Eu) {
        let ju, su, Uu, Zu = 0,
          Xu = uu.length - 1,
          lu = new Set,
          qu = this.bidiIn(uu[0], uu[Xu]),
          fu = -1,
          Cu = 1e9;
        uu: for (; Zu < Xu;) {
          let bu = Xu - Zu,
            cu = Zu + Xu >> 1;
          Eu: if (lu.has(cu)) {
            let uu = Zu + Math.floor(Math.random() * bu);
            for (let Eu = 0; Eu < bu; Eu++) {
              if (!lu.has(uu)) {
                cu = uu;
                break Eu
              }
              uu++, uu == Xu && (uu = Zu)
            }
            break uu
          } lu.add(cu);
          let Nu = Eu(cu);
          if (Nu)
            for (let Eu = 0; Eu < Nu.length; Eu++) {
              let lu = Nu[Eu],
                bu = 0;
              if (!(0 == lu.width && Nu.length > 1)) {
                if (lu.bottom < this.y)(!ju || ju.bottom < lu.bottom) && (ju = lu), bu = 1;
                else if (lu.top > this.y)(!su || su.top > lu.top) && (su = lu), bu = -1;
                else {
                  let uu = lu.left > this.x ? this.x - lu.left : lu.right < this.x ? this.x - lu.right : 0,
                    Eu = Math.abs(uu);
                  Eu < Cu && (fu = cu, Cu = Eu, Uu = lu), uu && (bu = uu < 0 == (this.baseDir == fE.LTR) ? -1 : 1)
                } - 1 != bu || qu && !this.baseDirAt(uu[cu], 1) ? 1 != bu || qu && !this.baseDirAt(uu[cu + 1], -1) || (Zu = cu + 1) : Xu = cu
              }
            }
        }
        if (!Uu) {
          let Uu = ju && (!su || this.y - ju.bottom < su.top - this.y) ? ju : su;
          return this.y = (Uu.top + Uu.bottom) / 2, this.scan(uu, Eu)
        }
        if (Cu) {
          if (ju && ju.bottom > Uu.top) return this.y = ju.bottom - 1, this.scan(uu, Eu);
          if (su && su.top < Uu.bottom) return this.y = su.top + 1, this.scan(uu, Eu)
        }
        let bu = (qu ? this.dirAt(uu[fu], 1) : this.baseDir) == fE.LTR;
        return {
          i: fu,
          after: this.x > (Uu.left + Uu.right) / 2 == bu
        }
      }
      scanText(uu, Eu) {
        let ju = [];
        for (let Zu = 0; Zu < uu.length; Zu = (0, su.fb)(uu.text, Zu)) ju.push(Eu + Zu);
        ju.push(Eu + uu.length);
        let Uu = this.scan(ju, (su => {
          let Uu = ju[su] - Eu,
            Zu = ju[su + 1] - Eu;
          return sE(uu.dom, Uu, Zu).getClientRects()
        }));
        return Uu.after ? new Hj(ju[Uu.i + 1], -1) : new Hj(ju[Uu.i], 1)
      }
      scanTile(uu, Eu) {
        if (!uu.length) return new Hj(Eu, 1);
        if (1 == uu.children.length) {
          let ju = uu.children[0];
          if (ju.isText()) return this.scanText(ju, Eu);
          if (ju.isComposite()) return this.scanTile(ju, Eu)
        }
        let ju = [Eu];
        for (let Xu = 0, lu = Eu; Xu < uu.children.length; Xu++) ju.push(lu += uu.children[Xu].length);
        let su = this.scan(ju, (Eu => {
            let ju = uu.children[Eu];
            return 48 & ju.flags ? null : (1 == ju.dom.nodeType ? ju.dom : sE(ju.dom, 0, ju.length)).getClientRects()
          })),
          Uu = uu.children[su.i],
          Zu = ju[su.i];
        return Uu.isText() ? this.scanText(Uu, Zu) : Uu.isComposite() ? this.scanTile(Uu, Zu) : su.after ? new Hj(ju[su.i + 1], -1) : new Hj(Zu, 1)
      }
    }
    const yj = "\uffff";
    class zj {
      constructor(uu, Eu) {
        this.points = uu, this.view = Eu, this.text = "", this.lineSeparator = Eu.state.facet(su.o.lineSeparator)
      }
      append(uu) {
        this.text += uu
      }
      lineBreak() {
        this.text += yj
      }
      readRange(uu, Eu) {
        if (!uu) return this;
        let ju = uu.parentNode;
        for (let su = uu;;) {
          this.findPointBefore(ju, su);
          let uu = this.text.length;
          this.readNode(su);
          let Uu = cj.get(su),
            Zu = su.nextSibling;
          if (Zu == Eu) {
            (null === Uu || void 0 === Uu ? void 0 : Uu.breakAfter) && !Zu && ju != this.view.contentDOM && this.lineBreak();
            break
          }
          let Xu = cj.get(Zu);
          (Uu && Xu ? Uu.breakAfter : (Uu ? Uu.breakAfter : xu(su)) || xu(Zu) && ("BR" != su.nodeName || (null === Uu || void 0 === Uu ? void 0 : Uu.isWidget())) && this.text.length > uu) && !us(Zu, Eu) && this.lineBreak(), su = Zu
        }
        return this.findPointBefore(ju, Eu), this
      }
      readTextNode(uu) {
        let Eu = uu.nodeValue;
        for (let ju of this.points) ju.node == uu && (ju.pos = this.text.length + Math.min(ju.offset, Eu.length));
        for (let ju = 0, su = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Uu, Zu = -1,
            Xu = 1;
          if (this.lineSeparator ? (Zu = Eu.indexOf(this.lineSeparator, ju), Xu = this.lineSeparator.length) : (Uu = su.exec(Eu)) && (Zu = Uu.index, Xu = Uu[0].length), this.append(Eu.slice(ju, Zu < 0 ? Eu.length : Zu)), Zu < 0) break;
          if (this.lineBreak(), Xu > 1)
            for (let Eu of this.points) Eu.node == uu && Eu.pos > this.text.length && (Eu.pos -= Xu - 1);
          ju = Zu + Xu
        }
      }
      readNode(uu) {
        let Eu = cj.get(uu),
          ju = Eu && Eu.overrideDOMText;
        if (null != ju) {
          this.findPointInside(uu, ju.length);
          for (let uu = ju.iter(); !uu.next().done;) uu.lineBreak ? this.lineBreak() : this.append(uu.value)
        } else 3 == uu.nodeType ? this.readTextNode(uu) : "BR" == uu.nodeName ? uu.nextSibling && this.lineBreak() : 1 == uu.nodeType && this.readRange(uu.firstChild, null)
      }
      findPointBefore(uu, Eu) {
        for (let ju of this.points) ju.node == uu && uu.childNodes[ju.offset] == Eu && (ju.pos = this.text.length)
      }
      findPointInside(uu, Eu) {
        for (let ju of this.points)(3 == uu.nodeType ? ju.node == uu : uu.contains(ju.node)) && (ju.pos = this.text.length + (Rj(uu, ju.node, ju.offset) ? Eu : 0))
      }
    }

    function Rj(uu, Eu, ju) {
      for (;;) {
        if (!Eu || ju < Hu(Eu)) return !1;
        if (Eu == uu) return !0;
        ju = tu(Eu) + 1, Eu = Eu.parentNode
      }
    }

    function us(uu, Eu) {
      let ju;
      for (; uu != Eu && uu; uu = uu.nextSibling) {
        let Eu = cj.get(uu);
        if (!(null === Eu || void 0 === Eu ? void 0 : Eu.isWidget())) return !1;
        Eu && (ju || (ju = [])).push(Eu)
      }
      if (ju)
        for (let su of ju) {
          let uu = su.overrideDOMText;
          if (null === uu || void 0 === uu ? void 0 : uu.length) return !1
        }
      return !0
    }
    class Es {
      constructor(uu, Eu) {
        this.node = uu, this.offset = Eu, this.pos = -1
      }
    }
    class ss {
      constructor(uu, Eu, ju, Uu) {
        this.typeOver = Uu, this.bounds = null, this.text = "", this.domChanged = Eu > -1;
        let {
          impreciseHead: Zu,
          impreciseAnchor: Xu
        } = uu.docView, lu = uu.state.selection;
        if (uu.state.readOnly && Eu > -1) this.newSel = null;
        else if (Eu > -1 && (this.bounds = Us(uu.docView.tile, Eu, ju, 0))) {
          let Eu = Zu || Xu ? [] : function(uu) {
              let Eu = [];
              if (uu.root.activeElement != uu.contentDOM) return Eu;
              let {
                anchorNode: ju,
                anchorOffset: su,
                focusNode: Uu,
                focusOffset: Zu
              } = uu.observer.selectionRange;
              ju && (Eu.push(new Es(ju, su)), Uu == ju && Zu == su || Eu.push(new Es(Uu, Zu)));
              return Eu
            }(uu),
            ju = new zj(Eu, uu);
          ju.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = ju.text, this.newSel = function(uu, Eu) {
            if (0 == uu.length) return null;
            let ju = uu[0].pos,
              Uu = 2 == uu.length ? uu[1].pos : ju;
            return ju > -1 && Uu > -1 ? su.l.single(ju + Eu, Uu + Eu) : null
          }(Eu, this.bounds.from)
        } else {
          let Eu = uu.observer.selectionRange,
            ju = Zu && Zu.node == Eu.focusNode && Zu.offset == Eu.focusOffset || !Iu(uu.contentDOM, Eu.focusNode) ? lu.main.head : uu.docView.posFromDOM(Eu.focusNode, Eu.focusOffset),
            Uu = Xu && Xu.node == Eu.anchorNode && Xu.offset == Eu.anchorOffset || !Iu(uu.contentDOM, Eu.anchorNode) ? lu.main.anchor : uu.docView.posFromDOM(Eu.anchorNode, Eu.anchorOffset),
            qu = uu.viewport;
          if ((wu.ios || wu.chrome) && lu.main.empty && ju != Uu && (qu.from > 0 || qu.to < uu.state.doc.length)) {
            let Eu = Math.min(ju, Uu),
              su = Math.max(ju, Uu),
              Zu = qu.from - Eu,
              Xu = qu.to - su;
            0 != Zu && 1 != Zu && 0 != Eu || 0 != Xu && -1 != Xu && su != uu.state.doc.length || (ju = 0, Uu = uu.state.doc.length)
          }
          if (uu.inputState.composing > -1 && lu.HY.length > 1) this.newSel = lu.replaceRange(su.l.range(Uu, ju));
          else if (uu.lineWrapping && Uu == ju && (!lu.main.empty || lu.main.head != ju) && uu.inputState.lastTouchTime > Date.now() - 100) {
            let Eu = uu.coordsAtPos(ju, -1),
              Uu = 0;
            Eu && (Uu = uu.inputState.lastTouchY <= Eu.bottom ? -1 : 1), this.newSel = su.l.create([su.l.cursor(ju, Uu)])
          } else this.newSel = su.l.single(Uu, ju)
        }
      }
    }

    function Us(uu, Eu, ju, su) {
      if (uu.isComposite()) {
        let Uu = -1,
          Zu = -1,
          Xu = -1,
          lu = -1;
        for (let qu = 0, fu = su, Cu = su; qu < uu.children.length; qu++) {
          let su = uu.children[qu],
            bu = fu + su.length;
          if (fu < Eu && bu > ju) return Us(su, Eu, ju, fu);
          if (bu >= Eu && -1 == Uu && (Uu = qu, Zu = fu), fu > ju && su.dom.parentNode == uu.dom) {
            Xu = qu, lu = Cu;
            break
          }
          Cu = bu, fu = bu + su.breakAfter
        }
        return {
          from: Zu,
          to: lu < 0 ? su + uu.length : lu,
          startDOM: (Uu ? uu.children[Uu - 1].dom.nextSibling : null) || uu.dom.firstChild,
          endDOM: Xu < uu.children.length && Xu >= 0 ? uu.children[Xu].dom : null
        }
      }
      return uu.isText() ? {
        from: su,
        to: su + uu.length,
        startDOM: uu.dom,
        endDOM: uu.dom.nextSibling
      } : null
    }

    function Zs(uu, Eu) {
      let ju, {
          newSel: Uu
        } = Eu,
        {
          state: Zu
        } = uu,
        Xu = Zu.selection.main,
        lu = uu.inputState.lastKeyTime > Date.now() - 100 ? uu.inputState.lastKeyCode : -1;
      if (Eu.bounds) {
        let {
          from: uu,
          to: Uu
        } = Eu.bounds, qu = Xu.from, fu = null;
        (8 === lu || wu.android && Eu.text.length < Uu - uu) && (qu = Xu.to, fu = "end");
        let Cu, bu, cu = Zu.doc.sliceString(uu, Uu, yj);
        !Xu.empty && Xu.from >= uu && Xu.to <= Uu && (Eu.typeOver || cu != Eu.text) && cu.slice(0, Xu.from - uu) == Eu.text.slice(0, Xu.from - uu) && cu.slice(Xu.to - uu) == Eu.text.slice(Cu = Eu.text.length - (cu.length - (Xu.to - uu))) ? ju = {
          from: Xu.from,
          to: Xu.to,
          insert: su.P.of(Eu.text.slice(Xu.from - uu, Cu).split(yj))
        } : (bu = ls(cu, Eu.text, qu - uu, fu)) && (wu.chrome && 13 == lu && bu.toB == bu.from + 2 && Eu.text.slice(bu.from, bu.toB) == yj + yj && bu.toB--, ju = {
          from: uu + bu.from,
          to: uu + bu.toA,
          insert: su.P.of(Eu.text.slice(bu.from, bu.toB).split(yj))
        })
      } else Uu && (!uu.hasFocus && Zu.facet(TE) || qs(Uu, Xu)) && (Uu = null);
      if (!ju && !Uu) return !1;
      if ((wu.mac || wu.android) && ju && ju.from == ju.to && ju.from == Xu.head - 1 && /^\. ?$/.test(ju.insert.toString()) && "off" == uu.contentDOM.getAttribute("autocorrect") ? (Uu && 2 == ju.insert.length && (Uu = su.l.single(Uu.main.anchor - 1, Uu.main.head - 1)), ju = {
          from: ju.from,
          to: ju.to,
          insert: su.P.of([ju.insert.toString().replace(".", " ")])
        }) : Zu.doc.lineAt(Xu.from).to < Xu.to && uu.docView.lineHasWidget(Xu.to) && uu.inputState.insertingTextAt > Date.now() - 50 ? ju = {
          from: Xu.from,
          to: Xu.to,
          insert: Zu.toText(uu.inputState.insertingText)
        } : wu.chrome && ju && ju.from == ju.to && ju.from == Xu.head && "\n " == ju.insert.toString() && uu.lineWrapping && (Uu && (Uu = su.l.single(Uu.main.anchor - 1, Uu.main.head - 1)), ju = {
          from: Xu.from,
          to: Xu.to,
          insert: su.P.of([" "])
        }), ju) return Xs(uu, ju, Uu, lu);
      if (Uu && !qs(Uu, Xu)) {
        let Eu = !1,
          ju = "select";
        return uu.inputState.lastSelectionTime > Date.now() - 50 && ("select" == uu.inputState.lastSelectionOrigin && (Eu = !0), ju = uu.inputState.lastSelectionOrigin, "select.pointer" == ju && (Uu = xj(Zu.facet(sj).map((Eu => Eu(uu))), Uu))), uu.dispatch({
          selection: Uu,
          scrollIntoView: Eu,
          userEvent: ju
        }), !0
      }
      return !1
    }

    function Xs(uu, Eu, ju) {
      let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (wu.ios && uu.inputState.flushIOSKey(Eu)) return !0;
      let Zu = uu.state.selection.main;
      if (wu.android && (Eu.to == Zu.to && (Eu.from == Zu.from || Eu.from == Zu.from - 1 && " " == uu.state.sliceDoc(Eu.from, Zu.from)) && 1 == Eu.insert.length && 2 == Eu.insert.lines && UE(uu.contentDOM, "Enter", 13) || (Eu.from == Zu.from - 1 && Eu.to == Zu.to && 0 == Eu.insert.length || 8 == Uu && Eu.insert.length < Eu.to - Eu.from && Eu.to > Zu.head) && UE(uu.contentDOM, "Backspace", 8) || Eu.from == Zu.from && Eu.to == Zu.to + 1 && 0 == Eu.insert.length && UE(uu.contentDOM, "Delete", 46))) return !0;
      let Xu, lu = Eu.insert.toString();
      uu.inputState.composing >= 0 && uu.inputState.composing++;
      let qu = () => Xu || (Xu = function(uu, Eu, ju) {
        let Uu, Zu = uu.state,
          Xu = Zu.selection.main,
          lu = -1;
        if (Eu.from == Eu.to && Eu.from < Xu.from || Eu.from > Xu.to) {
          let ju = Eu.from < Xu.from ? -1 : 1,
            su = ju < 0 ? Xu.from : Xu.to,
            Uu = tj(Zu.facet(sj).map((Eu => Eu(uu))), su, ju);
          Eu.from == Uu && (lu = Uu)
        }
        if (lu > -1) Uu = {
          changes: Eu,
          selection: su.l.cursor(Eu.from + Eu.insert.length, -1)
        };
        else if (Eu.from >= Xu.from && Eu.to <= Xu.to && Eu.to - Eu.from >= (Xu.to - Xu.from) / 3 && (!ju || ju.main.empty && ju.main.from == Eu.from + Eu.insert.length) && uu.inputState.composing < 0) {
          let ju = Xu.from < Eu.from ? Zu.sliceDoc(Xu.from, Eu.from) : "",
            su = Xu.to > Eu.to ? Zu.sliceDoc(Eu.to, Xu.to) : "";
          Uu = Zu.replaceSelection(uu.state.toText(ju + Eu.insert.sliceString(0, void 0, uu.state.lineBreak) + su))
        } else {
          let lu = Zu.changes(Eu),
            qu = ju && ju.main.to <= lu.newLength ? ju.main : void 0;
          if (Zu.selection.HY.length > 1 && (uu.inputState.composing >= 0 || uu.inputState.compositionPendingChange) && Eu.to <= Xu.to + 10 && Eu.to >= Xu.to - 10) {
            let fu, Cu = uu.state.sliceDoc(Eu.from, Eu.to),
              bu = ju && Wj(uu, ju.main.head);
            if (bu) {
              let uu = Eu.insert.length - (Eu.to - Eu.from);
              fu = {
                from: bu.from,
                to: bu.to - uu
              }
            } else fu = uu.state.doc.lineAt(Xu.head);
            let cu = Xu.to - Eu.to;
            Uu = Zu.changeByRange((ju => {
              if (ju.from == Xu.from && ju.to == Xu.to) return {
                changes: lu,
                range: qu || ju.map(lu)
              };
              let Uu = ju.to - cu,
                bu = Uu - Cu.length;
              if (uu.state.sliceDoc(bu, Uu) != Cu || Uu >= fu.from && bu <= fu.to) return {
                range: ju
              };
              let Nu = Zu.changes({
                  from: bu,
                  to: Uu,
                  insert: Eu.insert
                }),
                Ou = ju.to - Xu.to;
              return {
                changes: Nu,
                range: qu ? su.l.range(Math.max(0, qu.anchor + Ou), Math.max(0, qu.head + Ou)) : ju.map(Nu)
              }
            }))
          } else Uu = {
            changes: lu,
            selection: qu && Zu.selection.replaceRange(qu)
          }
        }
        let qu = "input.type";
        (uu.composing || uu.inputState.compositionPendingChange && uu.inputState.compositionEndedAt > Date.now() - 50) && (uu.inputState.compositionPendingChange = !1, qu += ".compose", uu.inputState.compositionFirstChange && (qu += ".start", uu.inputState.compositionFirstChange = !1));
        return Zu.update(Uu, {
          userEvent: qu,
          scrollIntoView: !0
        })
      }(uu, Eu, ju));
      return uu.state.facet(rE).some((ju => ju(uu, Eu.from, Eu.to, lu, qu))) || uu.dispatch(qu()), !0
    }

    function ls(uu, Eu, ju, su) {
      let Uu = Math.min(uu.length, Eu.length),
        Zu = 0;
      for (; Zu < Uu && uu.charCodeAt(Zu) == Eu.charCodeAt(Zu);) Zu++;
      if (Zu == Uu && uu.length == Eu.length) return null;
      let Xu = uu.length,
        lu = Eu.length;
      for (; Xu > 0 && lu > 0 && uu.charCodeAt(Xu - 1) == Eu.charCodeAt(lu - 1);) Xu--, lu--;
      if ("end" == su) {
        ju -= Xu + Math.max(0, Zu - Math.min(Xu, lu)) - Zu
      }
      if (Xu < Zu && uu.length < Eu.length) {
        Zu -= ju <= Zu && ju >= Xu ? Zu - ju : 0, lu = Zu + (lu - Xu), Xu = Zu
      } else if (lu < Zu) {
        Zu -= ju <= Zu && ju >= lu ? Zu - ju : 0, Xu = Zu + (Xu - lu), lu = Zu
      }
      return {
        from: Zu,
        toA: Xu,
        toB: lu
      }
    }

    function qs(uu, Eu) {
      return Eu.head == uu.main.head && Eu.anchor == uu.main.anchor
    }
    class fs {
      setSelectionOrigin(uu) {
        this.lastSelectionOrigin = uu, this.lastSelectionTime = Date.now()
      }
      constructor(uu) {
        this.view = uu, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = uu.hasFocus, wu.safari && uu.contentDOM.addEventListener("input", (() => null)), wu.gecko && function(uu) {
          rs.has(uu) || (rs.add(uu), uu.addEventListener("copy", (() => {})), uu.addEventListener("cut", (() => {})))
        }(uu.contentDOM.ownerDocument)
      }
      handleEvent(uu) {
        (function(uu, Eu) {
          if (!Eu.bubbles) return !0;
          if (Eu.defaultPrevented) return !1;
          for (let ju, su = Eu.target; su != uu.contentDOM; su = su.parentNode)
            if (!su || 11 == su.nodeType || (ju = cj.get(su)) && ju.isWidget() && !ju.isHidden && ju.widget.ignoreEvent(Eu)) return !1;
          return !0
        })(this.view, uu) && !this.ignoreDuringComposition(uu) && ("keydown" == uu.type && this.keydown(uu) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(uu.type, uu))) : this.runHandlers(uu.type, uu)))
      }
      runHandlers(uu, Eu) {
        let ju = this.handlers[uu];
        if (ju) {
          for (let uu of ju.observers) uu(this.view, Eu);
          for (let uu of ju.handlers) {
            if (Eu.defaultPrevented) break;
            if (uu(this.view, Eu)) {
              Eu.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(uu) {
        let Eu = bs(uu),
          ju = this.handlers,
          su = this.view.contentDOM;
        for (let Uu in Eu)
          if ("scroll" != Uu) {
            let uu = !Eu[Uu].handlers.length,
              Zu = ju[Uu];
            Zu && uu != !Zu.handlers.length && (su.removeEventListener(Uu, this.handleEvent), Zu = null), Zu || su.addEventListener(Uu, this.handleEvent, {
              passive: uu
            })
          } for (let Uu in ju) "scroll" == Uu || Eu[Uu] || su.removeEventListener(Uu, this.handleEvent);
        this.handlers = Eu
      }
      keydown(uu) {
        if (this.lastKeyCode = uu.keyCode, this.lastKeyTime = Date.now(), 9 == uu.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != uu.keyCode && Os.indexOf(uu.keyCode) < 0 && (this.tabFocusMode = -1), wu.android && wu.chrome && !uu.synthetic && (13 == uu.keyCode || 8 == uu.keyCode)) return this.view.observer.delayAndroidKey(uu.key, uu.keyCode), !0;
        let Eu;
        return !wu.ios || uu.synthetic || uu.altKey || uu.metaKey || uu.shiftKey || !((Eu = cs.find((Eu => Eu.keyCode == uu.keyCode))) && !uu.ctrlKey || Ns.indexOf(uu.key) > -1 && uu.ctrlKey) ? (229 != uu.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = Eu || uu, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(uu) {
        let Eu = this.pendingIOSKey;
        return !!Eu && (!("Enter" == Eu.key && uu && uu.from < uu.to && /^\S+$/.test(uu.insert.toString())) && (this.pendingIOSKey = void 0, UE(this.view.contentDOM, Eu.key, Eu.keyCode, Eu instanceof KeyboardEvent ? Eu : void 0)))
      }
      ignoreDuringComposition(uu) {
        return !(!/^key/.test(uu.type) || uu.synthetic) && (this.composing > 0 || !!(wu.safari && !wu.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function Cs(uu, Eu) {
      return (ju, su) => {
        try {
          return Eu.call(uu, su, ju)
        } catch (Uu) {
          xE(ju.state, Uu)
        }
      }
    }

    function bs(uu) {
      let Eu = Object.create(null);

      function ju(uu) {
        return Eu[uu] || (Eu[uu] = {
          observers: [],
          handlers: []
        })
      }
      for (let su of uu) {
        let uu = su.spec,
          Eu = uu && uu.plugin.domEventHandlers,
          Uu = uu && uu.plugin.domEventObservers;
        if (Eu)
          for (let Zu in Eu) {
            let uu = Eu[Zu];
            uu && ju(Zu).handlers.push(Cs(su.value, uu))
          }
        if (Uu)
          for (let Zu in Uu) {
            let uu = Uu[Zu];
            uu && ju(Zu).observers.push(Cs(su.value, uu))
          }
      }
      for (let su in Ds) ju(su).handlers.push(Ds[su]);
      for (let su in gs) ju(su).observers.push(gs[su]);
      return Eu
    }
    const cs = [{
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
      Ns = "dthko",
      Os = [16, 17, 18, 20, 91, 92, 224, 225];

    function Ys(uu) {
      return .7 * Math.max(0, uu) + 8
    }
    class hs {
      constructor(uu, Eu, ju, Uu) {
        this.view = uu, this.startEvent = Eu, this.style = ju, this.mustSelect = Uu, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = Eu, this.scrollParents = zu(uu.contentDOM), this.atoms = uu.state.facet(sj).map((Eu => Eu(uu)));
        let Zu = uu.contentDOM.ownerDocument;
        Zu.addEventListener("mousemove", this.move = this.move.bind(this)), Zu.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = Eu.shiftKey, this.multiple = uu.state.facet(su.o.allowMultipleSelections) && function(uu, Eu) {
          let ju = uu.state.facet(kE);
          return ju.length ? ju[0](Eu) : wu.mac ? Eu.metaKey : Eu.ctrlKey
        }(uu, Eu), this.dragging = !(! function(uu, Eu) {
          let {
            main: ju
          } = uu.state.selection;
          if (ju.empty) return !1;
          let su = Su(uu.root);
          if (!su || 0 == su.rangeCount) return !0;
          let Uu = su.getRangeAt(0).getClientRects();
          for (let Zu = 0; Zu < Uu.length; Zu++) {
            let uu = Uu[Zu];
            if (uu.left <= Eu.clientX && uu.right >= Eu.clientX && uu.top <= Eu.clientY && uu.bottom >= Eu.clientY) return !0
          }
          return !1
        }(uu, Eu) || 1 != os(Eu)) && null
      }
      start(uu) {
        !1 === this.dragging && this.select(uu)
      }
      move(uu) {
        if (0 == uu.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (Eu = this.startEvent, ju = uu, Math.max(Math.abs(Eu.clientX - ju.clientX), Math.abs(Eu.clientY - ju.clientY)) < 10)) return;
        var Eu, ju;
        this.select(this.lastEvent = uu);
        let su = 0,
          Uu = 0,
          Zu = 0,
          Xu = 0,
          lu = this.view.win.innerWidth,
          qu = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: Zu,
          right: lu
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: Xu,
          bottom: qu
        } = this.scrollParents.y.getBoundingClientRect());
        let fu = lj(this.view);
        uu.clientX - fu.left <= Zu + 6 ? su = -Ys(Zu - uu.clientX) : uu.clientX + fu.right >= lu - 6 && (su = Ys(uu.clientX - lu)), uu.clientY - fu.top <= Xu + 6 ? Uu = -Ys(Xu - uu.clientY) : uu.clientY + fu.bottom >= qu - 6 && (Uu = Ys(uu.clientY - qu)), this.setScrollSpeed(su, Uu)
      }
      up(uu) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || uu.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let uu = this.view.contentDOM.ownerDocument;
        uu.removeEventListener("mousemove", this.move), uu.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(uu, Eu) {
        this.scrollSpeed = {
          x: uu,
          y: Eu
        }, uu || Eu ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: uu,
          y: Eu
        } = this.scrollSpeed;
        uu && this.scrollParents.x && (this.scrollParents.x.scrollLeft += uu, uu = 0), Eu && this.scrollParents.y && (this.scrollParents.y.scrollTop += Eu, Eu = 0), (uu || Eu) && this.view.win.scrollBy(uu, Eu), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(uu) {
        let {
          view: Eu
        } = this, ju = xj(this.atoms, this.style.get(uu, this.extend, this.multiple));
        !this.mustSelect && ju.eq(Eu.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: ju,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(uu) {
        uu.transactions.some((uu => uu.isUserEvent("input.type"))) ? this.destroy() : this.style.update(uu) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const Ds = Object.create(null),
      gs = Object.create(null),
      Ms = wu.ie && wu.ie_version < 15 || wu.ios && wu.webkit_version < 604;

    function es(uu, Eu, ju) {
      for (let su of uu.facet(Eu)) ju = su(ju, uu);
      return ju
    }

    function Gs(uu, Eu) {
      Eu = es(uu.state, iE, Eu);
      let ju, {
          state: Uu
        } = uu,
        Zu = 1,
        Xu = Uu.toText(Eu),
        lu = Xu.lines == Uu.selection.HY.length;
      if (null != ms && Uu.selection.HY.every((uu => uu.empty)) && ms == Xu.toString()) {
        let uu = -1;
        ju = Uu.changeByRange((ju => {
          let qu = Uu.doc.lineAt(ju.from);
          if (qu.from == uu) return {
            range: ju
          };
          uu = qu.from;
          let fu = Uu.toText((lu ? Xu.line(Zu++).text : Eu) + Uu.lineBreak);
          return {
            changes: {
              from: qu.from,
              insert: fu
            },
            range: su.l.cursor(ju.from + fu.length)
          }
        }))
      } else ju = lu ? Uu.changeByRange((uu => {
        let Eu = Xu.line(Zu++);
        return {
          changes: {
            from: uu.from,
            to: uu.to,
            insert: Eu.text
          },
          range: su.l.cursor(uu.from + Eu.length)
        }
      })) : Uu.replaceSelection(Xu);
      uu.dispatch(ju, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function ps(uu, Eu, ju, Uu) {
      if (1 == Uu) return su.l.cursor(Eu, ju);
      if (2 == Uu) return function(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Uu = uu.charCategorizer(Eu),
          Zu = uu.doc.lineAt(Eu),
          Xu = Eu - Zu.from;
        if (0 == Zu.length) return su.l.cursor(Eu);
        0 == Xu ? ju = 1 : Xu == Zu.length && (ju = -1);
        let lu = Xu,
          qu = Xu;
        ju < 0 ? lu = (0, su.fb)(Zu.text, Xu, !1) : qu = (0, su.fb)(Zu.text, Xu);
        let fu = Uu(Zu.text.slice(lu, qu));
        for (; lu > 0;) {
          let uu = (0, su.fb)(Zu.text, lu, !1);
          if (Uu(Zu.text.slice(uu, lu)) != fu) break;
          lu = uu
        }
        for (; qu < Zu.length;) {
          let uu = (0, su.fb)(Zu.text, qu);
          if (Uu(Zu.text.slice(qu, uu)) != fu) break;
          qu = uu
        }
        return su.l.range(lu + Zu.from, qu + Zu.from)
      }(uu.state, Eu, ju);
      {
        let Uu = uu.docView.lineAt(Eu, ju),
          Zu = uu.state.doc.lineAt(Uu ? Uu.posAtEnd : Eu),
          Xu = Uu ? Uu.posAtStart : Zu.from,
          lu = Uu ? Uu.posAtEnd : Zu.to;
        return lu < uu.state.doc.length && lu == Zu.to && lu++, su.l.range(Xu, lu)
      }
    }
    gs.scroll = uu => {
      uu.inputState.lastScrollTop = uu.scrollDOM.scrollTop, uu.inputState.lastScrollLeft = uu.scrollDOM.scrollLeft
    }, gs.wheel = gs.mousewheel = uu => {
      uu.inputState.lastWheelEvent = Date.now()
    }, Ds.keydown = (uu, Eu) => (uu.inputState.setSelectionOrigin("select"), 27 == Eu.keyCode && 0 != uu.inputState.tabFocusMode && (uu.inputState.tabFocusMode = Date.now() + 2e3), !1), gs.touchstart = (uu, Eu) => {
      let ju = uu.inputState,
        su = Eu.targetTouches[0];
      ju.lastTouchTime = Date.now(), su && (ju.lastTouchX = su.clientX, ju.lastTouchY = su.clientY), ju.setSelectionOrigin("select.pointer")
    }, gs.touchmove = uu => {
      uu.inputState.setSelectionOrigin("select.pointer")
    }, Ds.mousedown = (uu, Eu) => {
      if (uu.observer.flush(), uu.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let ju = null;
      for (let su of uu.state.facet(vE))
        if (ju = su(uu, Eu), ju) break;
      if (ju || 0 != Eu.button || (ju = function(uu, Eu) {
          let ju = uu.posAndSideAtCoords({
              x: Eu.clientX,
              y: Eu.clientY
            }, !1),
            Uu = os(Eu),
            Zu = uu.state.selection;
          return {
            update(uu) {
              uu.docChanged && (ju.pos = uu.changes.mapPos(ju.pos), Zu = Zu.map(uu.changes))
            },
            get(Eu, Xu, lu) {
              let qu, fu = uu.posAndSideAtCoords({
                  x: Eu.clientX,
                  y: Eu.clientY
                }, !1),
                Cu = ps(uu, fu.pos, fu.assoc, Uu);
              if (ju.pos != fu.pos && !Xu) {
                let Eu = ps(uu, ju.pos, ju.assoc, Uu),
                  Zu = Math.min(Eu.from, Cu.from),
                  Xu = Math.max(Eu.to, Cu.to);
                Cu = Zu < Cu.from ? su.l.range(Zu, Xu, Cu.assoc) : su.l.range(Xu, Zu, Cu.assoc)
              }
              return Xu ? Zu.replaceRange(Zu.main.extend(Cu.from, Cu.to, Cu.assoc)) : lu && 1 == Uu && Zu.HY.length > 1 && (qu = function(uu, Eu) {
                for (let ju = 0; ju < uu.HY.length; ju++) {
                  let {
                    from: Uu,
                    to: Zu
                  } = uu.HY[ju];
                  if (Uu <= Eu && Zu >= Eu) return su.l.create(uu.HY.slice(0, ju).concat(uu.HY.slice(ju + 1)), uu.mainIndex == ju ? 0 : uu.mainIndex - (uu.mainIndex > ju ? 1 : 0))
                }
                return null
              }(Zu, fu.pos)) ? qu : lu ? Zu.addRange(Cu) : su.l.create([Cu])
            }
          }
        }(uu, Eu)), ju) {
        let su = !uu.hasFocus;
        uu.inputState.startMouseSelection(new hs(uu, Eu, ju, su)), su && uu.observer.ignore((() => {
          jE(uu.contentDOM);
          let Eu = uu.root.activeElement;
          Eu && !Eu.contains(uu.contentDOM) && Eu.blur()
        }));
        let Uu = uu.inputState.mouseSelection;
        if (Uu) return Uu.start(Eu), !1 === Uu.dragging
      } else uu.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const ws = wu.ie && wu.ie_version <= 11;
    let ds = null,
      as = 0,
      Ps = 0;

    function os(uu) {
      if (!ws) return uu.detail;
      let Eu = ds,
        ju = Ps;
      return ds = uu, Ps = Date.now(), as = !Eu || ju > Date.now() - 400 && Math.abs(Eu.clientX - uu.clientX) < 2 && Math.abs(Eu.clientY - uu.clientY) < 2 ? (as + 1) % 3 : 1
    }

    function ks(uu, Eu, ju, su) {
      if (!(ju = es(uu.state, iE, ju))) return;
      let Uu = uu.posAtCoords({
          x: Eu.clientX,
          y: Eu.clientY
        }, !1),
        {
          draggedContent: Zu
        } = uu.inputState,
        Xu = su && Zu && function(uu, Eu) {
          let ju = uu.state.facet(mE);
          return ju.length ? ju[0](Eu) : wu.mac ? !Eu.altKey : !Eu.ctrlKey
        }(uu, Eu) ? {
          from: Zu.from,
          to: Zu.to
        } : null,
        lu = {
          from: Uu,
          insert: ju
        },
        qu = uu.state.changes(Xu ? [Xu, lu] : lu);
      uu.focus(), uu.dispatch({
        changes: qu,
        selection: {
          anchor: qu.mapPos(Uu, -1),
          head: qu.mapPos(Uu, 1)
        },
        userEvent: Xu ? "move.drop" : "input.drop"
      }), uu.inputState.draggedContent = null
    }
    Ds.dragstart = (uu, Eu) => {
      let {
        selection: {
          main: ju
        }
      } = uu.state;
      if (Eu.target.draggable) {
        let Uu = uu.docView.tile.nearest(Eu.target);
        if (Uu && Uu.isWidget()) {
          let uu = Uu.posAtStart,
            Eu = uu + Uu.length;
          (uu >= ju.to || Eu <= ju.from) && (ju = su.l.range(uu, Eu))
        }
      }
      let {
        inputState: Uu
      } = uu;
      return Uu.mouseSelection && (Uu.mouseSelection.dragging = !0), Uu.draggedContent = ju, Eu.dataTransfer && (Eu.dataTransfer.setData("Text", es(uu.state, WE, uu.state.sliceDoc(ju.from, ju.to))), Eu.dataTransfer.effectAllowed = "copyMove"), !1
    }, Ds.dragend = uu => (uu.inputState.draggedContent = null, !1), Ds.drop = (uu, Eu) => {
      if (!Eu.dataTransfer) return !1;
      if (uu.state.readOnly) return !0;
      let ju = Eu.dataTransfer.files;
      if (ju && ju.length) {
        let su = Array(ju.length),
          Uu = 0,
          Zu = () => {
            ++Uu == ju.length && ks(uu, Eu, su.filter((uu => null != uu)).join(uu.state.lineBreak), !1)
          };
        for (let uu = 0; uu < ju.length; uu++) {
          let Eu = new FileReader;
          Eu.onerror = Zu, Eu.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(Eu.result) || (su[uu] = Eu.result), Zu()
          }, Eu.readAsText(ju[uu])
        }
        return !0
      } {
        let ju = Eu.dataTransfer.getData("Text");
        if (ju) return ks(uu, Eu, ju, !0), !0
      }
      return !1
    }, Ds.paste = (uu, Eu) => {
      if (uu.state.readOnly) return !0;
      uu.observer.flush();
      let ju = Ms ? null : Eu.clipboardData;
      return ju ? (Gs(uu, ju.getData("text/plain") || ju.getData("text/uri-list")), !0) : (function(uu) {
        let Eu = uu.dom.parentNode;
        if (!Eu) return;
        let ju = Eu.appendChild(document.createElement("textarea"));
        ju.style.cssText = "position: fixed; left: -10000px; top: 10px", ju.focus(), setTimeout((() => {
          uu.focus(), ju.remove(), Gs(uu, ju.value)
        }), 50)
      }(uu), !1)
    };
    let ms = null;
    Ds.copy = Ds.cut = (uu, Eu) => {
      if (!Fu(uu.contentDOM, uu.observer.selectionRange)) return !1;
      let {
        text: ju,
        HY: su,
        linewise: Uu
      } = function(uu) {
        let Eu = [],
          ju = [],
          su = !1;
        for (let Uu of uu.selection.HY) Uu.empty || (Eu.push(uu.sliceDoc(Uu.from, Uu.to)), ju.push(Uu));
        if (!Eu.length) {
          let Uu = -1;
          for (let {
              from: su
            }
            of uu.selection.HY) {
            let Zu = uu.doc.lineAt(su);
            Zu.number > Uu && (Eu.push(Zu.text), ju.push({
              from: Zu.from,
              to: Math.min(uu.doc.length, Zu.to + 1)
            })), Uu = Zu.number
          }
          su = !0
        }
        return {
          text: es(uu, WE, Eu.join(uu.lineBreak)),
          HY: ju,
          linewise: su
        }
      }(uu.state);
      if (!ju && !Uu) return !1;
      ms = Uu ? ju : null, "cut" != Eu.type || uu.state.readOnly || uu.dispatch({
        changes: su,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let Zu = Ms ? null : Eu.clipboardData;
      return Zu ? (Zu.clearData(), Zu.setData("text/plain", ju), !0) : (function(uu, Eu) {
        let ju = uu.dom.parentNode;
        if (!ju) return;
        let su = ju.appendChild(document.createElement("textarea"));
        su.style.cssText = "position: fixed; left: -10000px; top: 10px", su.value = Eu, su.focus(), su.selectionEnd = Eu.length, su.selectionStart = 0, setTimeout((() => {
          su.remove(), uu.focus()
        }), 50)
      }(uu, ju), !1)
    };
    const vs = su.b.define();

    function Ks(uu, Eu) {
      let ju = [];
      for (let su of uu.facet(QE)) {
        let Uu = su(uu, Eu);
        Uu && ju.push(Uu)
      }
      return ju.length ? uu.update({
        effects: ju,
        annotations: vs.of(!0)
      }) : null
    }

    function Vs(uu) {
      setTimeout((() => {
        let Eu = uu.hasFocus;
        if (Eu != uu.inputState.notifiedFocused) {
          let ju = Ks(uu.state, Eu);
          ju ? uu.dispatch(ju) : uu.update([])
        }
      }), 10)
    }
    gs.focus = uu => {
      uu.inputState.lastFocusTime = Date.now(), uu.scrollDOM.scrollTop || !uu.inputState.lastScrollTop && !uu.inputState.lastScrollLeft || (uu.scrollDOM.scrollTop = uu.inputState.lastScrollTop, uu.scrollDOM.scrollLeft = uu.inputState.lastScrollLeft), Vs(uu)
    }, gs.blur = uu => {
      uu.observer.clearSelectionRange(), Vs(uu)
    }, gs.compositionstart = gs.compositionupdate = uu => {
      uu.observer.editContext || (null == uu.inputState.compositionFirstChange && (uu.inputState.compositionFirstChange = !0), uu.inputState.composing < 0 && (uu.inputState.composing = 0))
    }, gs.compositionend = uu => {
      uu.observer.editContext || (uu.inputState.composing = -1, uu.inputState.compositionEndedAt = Date.now(), uu.inputState.compositionPendingKey = !0, uu.inputState.compositionPendingChange = uu.observer.pendingRecords().length > 0, uu.inputState.compositionFirstChange = null, wu.chrome && wu.android ? uu.observer.flushSoon() : uu.inputState.compositionPendingChange ? Promise.resolve().then((() => uu.observer.flush())) : setTimeout((() => {
        uu.inputState.composing < 0 && uu.docView.hasComposition && uu.update([])
      }), 50))
    }, gs.contextmenu = uu => {
      uu.inputState.lastContextMenu = Date.now()
    }, Ds.beforeinput = (uu, Eu) => {
      var ju, su;
      if ("insertText" != Eu.inputType && "insertCompositionText" != Eu.inputType || (uu.inputState.insertingText = Eu.data, uu.inputState.insertingTextAt = Date.now()), "insertReplacementText" == Eu.inputType && uu.observer.editContext) {
        let su = null === (ju = Eu.dataTransfer) || void 0 === ju ? void 0 : ju.getData("text/plain"),
          Uu = Eu.getTargetRanges();
        if (su && Uu.length) {
          let Eu = Uu[0],
            ju = uu.posAtDOM(Eu.startContainer, Eu.startOffset),
            Zu = uu.posAtDOM(Eu.endContainer, Eu.endOffset);
          return Xs(uu, {
            from: ju,
            to: Zu,
            insert: uu.state.toText(su)
          }, null), !0
        }
      }
      let Uu;
      if (wu.chrome && wu.android && (Uu = cs.find((uu => uu.inputType == Eu.inputType))) && (uu.observer.delayAndroidKey(Uu.key, Uu.keyCode), "Backspace" == Uu.key || "Delete" == Uu.key)) {
        let Eu = (null === (su = window.visualViewport) || void 0 === su ? void 0 : su.height) || 0;
        setTimeout((() => {
          var ju;
          ((null === (ju = window.visualViewport) || void 0 === ju ? void 0 : ju.height) || 0) > Eu + 10 && uu.hasFocus && (uu.contentDOM.blur(), uu.focus())
        }), 100)
      }
      return wu.ios && "deleteContentForward" == Eu.inputType && uu.observer.flushSoon(), wu.safari && "insertText" == Eu.inputType && uu.inputState.composing >= 0 && setTimeout((() => gs.compositionend(uu, Eu)), 20), !1
    };
    const rs = new Set;
    const Qs = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let is = !1;

    function Ws() {
      is = !1
    }
    class Ss {
      constructor(uu) {
        this.lineWrapping = uu, this.doc = su.P.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(uu, Eu) {
        let ju = this.doc.lineAt(Eu).number - this.doc.lineAt(uu).number + 1;
        return this.lineWrapping && (ju += Math.max(0, Math.ceil((Eu - uu - ju * this.lineLength * .5) / this.lineLength))), this.lineHeight * ju
      }
      heightForLine(uu) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((uu - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(uu) {
        return this.doc = uu, this
      }
      mustRefreshForWrapping(uu) {
        return Qs.indexOf(uu) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(uu) {
        let Eu = !1;
        for (let ju = 0; ju < uu.length; ju++) {
          let su = uu[ju];
          su < 0 ? ju++ : this.heightSamples[Math.floor(10 * su)] || (Eu = !0, this.heightSamples[Math.floor(10 * su)] = !0)
        }
        return Eu
      }
      refresh(uu, Eu, ju, su, Uu, Zu) {
        let Xu = Qs.indexOf(uu) > -1,
          lu = Math.abs(Eu - this.lineHeight) > .3 || this.lineWrapping != Xu || Math.abs(ju - this.charWidth) > .1;
        if (this.lineWrapping = Xu, this.lineHeight = Eu, this.charWidth = ju, this.textHeight = su, this.lineLength = Uu, lu) {
          this.heightSamples = {};
          for (let uu = 0; uu < Zu.length; uu++) {
            let Eu = Zu[uu];
            Eu < 0 ? uu++ : this.heightSamples[Math.floor(10 * Eu)] = !0
          }
        }
        return lu
      }
    }
    class Is {
      constructor(uu, Eu) {
        this.from = uu, this.heights = Eu, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class Fs {
      constructor(uu, Eu, ju, su, Uu) {
        this.from = uu, this.length = Eu, this.top = ju, this.height = su, this._content = Uu
      }
      get type() {
        return "number" == typeof this._content ? mu.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof ru ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(uu) {
        let Eu = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(uu._content) ? uu._content : [uu]);
        return new Fs(this.from, this.length + uu.length, this.top, this.height + uu.height, Eu)
      }
    }
    var Bs = function(uu) {
      return uu[uu.ByPos = 0] = "ByPos", uu[uu.ByHeight = 1] = "ByHeight", uu[uu.ByPosNoHeight = 2] = "ByPosNoHeight", uu
    }(Bs || (Bs = {}));
    const Ls = .001;
    class ts {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = uu, this.height = Eu, this.flags = ju
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(uu) {
        this.flags = (uu ? 2 : 0) | -3 & this.flags
      }
      setHeight(uu) {
        this.height != uu && (Math.abs(this.height - uu) > Ls && (is = !0), this.height = uu)
      }
      replace(uu, Eu, ju) {
        return ts.of(ju)
      }
      decomposeLeft(uu, Eu) {
        Eu.push(this)
      }
      decomposeRight(uu, Eu) {
        Eu.push(this)
      }
      applyChanges(uu, Eu, ju, su) {
        let Uu = this,
          Zu = ju.doc;
        for (let Xu = su.length - 1; Xu >= 0; Xu--) {
          let {
            fromA: lu,
            toA: qu,
            fromB: fu,
            toB: Cu
          } = su[Xu], bu = Uu.lineAt(lu, Bs.ByPosNoHeight, ju.setDoc(Eu), 0, 0), cu = bu.to >= qu ? bu : Uu.lineAt(qu, Bs.ByPosNoHeight, ju, 0, 0);
          for (Cu += cu.to - qu, qu = cu.to; Xu > 0 && bu.from <= su[Xu - 1].toA;) lu = su[Xu - 1].fromA, fu = su[Xu - 1].fromB, Xu--, lu < bu.from && (bu = Uu.lineAt(lu, Bs.ByPosNoHeight, ju, 0, 0));
          fu += bu.from - lu, lu = bu.from;
          let Nu = Rs.build(ju.setDoc(Zu), uu, fu, Cu);
          Uu = xs(Uu, Uu.replace(lu, qu, Nu))
        }
        return Uu.updateHeight(ju, 0)
      }
      static empty() {
        return new As(0, 0, 0)
      }
      static of (uu) {
        if (1 == uu.length) return uu[0];
        let Eu = 0,
          ju = uu.length,
          su = 0,
          Uu = 0;
        for (;;)
          if (Eu == ju)
            if (su > 2 * Uu) {
              let Uu = uu[Eu - 1];
              Uu.break ? uu.splice(--Eu, 1, Uu.left, null, Uu.right) : uu.splice(--Eu, 1, Uu.left, Uu.right), ju += 1 + Uu.break, su -= Uu.size
            } else {
              if (!(Uu > 2 * su)) break;
              {
                let Eu = uu[ju];
                Eu.break ? uu.splice(ju, 1, Eu.left, null, Eu.right) : uu.splice(ju, 1, Eu.left, Eu.right), ju += 2 + Eu.break, Uu -= Eu.size
              }
            }
        else if (su < Uu) {
          let ju = uu[Eu++];
          ju && (su += ju.size)
        } else {
          let Eu = uu[--ju];
          Eu && (Uu += Eu.size)
        }
        let Zu = 0;
        return null == uu[Eu - 1] ? (Zu = 1, Eu--) : null == uu[Eu] && (Zu = 1, ju++), new ys(ts.of(uu.slice(0, Eu)), Zu, ts.of(uu.slice(ju)))
      }
    }

    function xs(uu, Eu) {
      return uu == Eu ? uu : (uu.constructor != Eu.constructor && (is = !0), Eu)
    }
    ts.prototype.size = 1;
    const Ts = vu.replace({});
    class Hs extends ts {
      constructor(uu, Eu, ju) {
        super(uu, Eu), this.deco = ju, this.spaceAbove = 0
      }
      mainBlock(uu, Eu) {
        return new Fs(Eu, this.length, uu + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(uu, Eu, ju, su) {
        return this.spaceAbove && uu < ju + this.spaceAbove ? new Fs(su, 0, ju, this.spaceAbove, Ts) : this.mainBlock(ju, su)
      }
      lineAt(uu, Eu, ju, su, Uu) {
        let Zu = this.mainBlock(su, Uu);
        return this.spaceAbove ? this.blockAt(0, ju, su, Uu).join(Zu) : Zu
      }
      forEachLine(uu, Eu, ju, su, Uu, Zu) {
        uu <= Uu + this.length && Eu >= Uu && Zu(this.lineAt(0, Bs.ByPos, ju, su, Uu))
      }
      setMeasuredHeight(uu) {
        let Eu = uu.heights[uu.index++];
        Eu < 0 ? (this.spaceAbove = -Eu, Eu = uu.heights[uu.index++]) : this.spaceAbove = 0, this.setHeight(Eu)
      }
      updateHeight(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 3 ? arguments[3] : void 0;
        return ju && ju.from <= Eu && ju.more && this.setMeasuredHeight(ju), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class As extends Hs {
      constructor(uu, Eu, ju) {
        super(uu, Eu, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = ju
      }
      mainBlock(uu, Eu) {
        return new Fs(Eu, this.length, uu + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(uu, Eu, ju) {
        let su = ju[0];
        return 1 == ju.length && (su instanceof As || su instanceof ns && 4 & su.flags) && Math.abs(this.length - su.length) < 10 ? (su instanceof ns ? su = new As(su.length, this.height, this.spaceAbove) : su.height = this.height, this.outdated || (su.outdated = !1), su) : ts.of(ju)
      }
      updateHeight(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 ? arguments[3] : void 0;
        return su && su.from <= Eu && su.more ? this.setMeasuredHeight(su) : (ju || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, uu.heightForLine(this.length - this.collapsed)) + this.breaks * uu.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class ns extends ts {
      constructor(uu) {
        super(uu, 0)
      }
      heightMetrics(uu, Eu) {
        let ju, su = uu.doc.lineAt(Eu).number,
          Uu = uu.doc.lineAt(Eu + this.length).number,
          Zu = Uu - su + 1,
          Xu = 0;
        if (uu.lineWrapping) {
          let Eu = Math.min(this.height, uu.lineHeight * Zu);
          ju = Eu / Zu, this.length > Zu + 1 && (Xu = (this.height - Eu) / (this.length - Zu - 1))
        } else ju = this.height / Zu;
        return {
          firstLine: su,
          lastLine: Uu,
          perLine: ju,
          perChar: Xu
        }
      }
      blockAt(uu, Eu, ju, su) {
        let {
          firstLine: Uu,
          lastLine: Zu,
          perLine: Xu,
          perChar: lu
        } = this.heightMetrics(Eu, su);
        if (Eu.lineWrapping) {
          let Uu = su + (uu < Eu.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (uu - ju) / this.height)) * this.length)),
            Zu = Eu.doc.lineAt(Uu),
            qu = Xu + Zu.length * lu,
            fu = Math.max(ju, uu - qu / 2);
          return new Fs(Zu.from, Zu.length, fu, qu, 0)
        } {
          let su = Math.max(0, Math.min(Zu - Uu, Math.floor((uu - ju) / Xu))),
            {
              from: lu,
              length: qu
            } = Eu.doc.line(Uu + su);
          return new Fs(lu, qu, ju + Xu * su, Xu, 0)
        }
      }
      lineAt(uu, Eu, ju, su, Uu) {
        if (Eu == Bs.ByHeight) return this.blockAt(uu, ju, su, Uu);
        if (Eu == Bs.ByPosNoHeight) {
          let {
            from: Eu,
            to: su
          } = ju.doc.lineAt(uu);
          return new Fs(Eu, su - Eu, 0, 0, 0)
        }
        let {
          firstLine: Zu,
          perLine: Xu,
          perChar: lu
        } = this.heightMetrics(ju, Uu), qu = ju.doc.lineAt(uu), fu = Xu + qu.length * lu, Cu = qu.number - Zu, bu = su + Xu * Cu + lu * (qu.from - Uu - Cu);
        return new Fs(qu.from, qu.length, Math.max(su, Math.min(bu, su + this.height - fu)), fu, 0)
      }
      forEachLine(uu, Eu, ju, su, Uu, Zu) {
        uu = Math.max(uu, Uu), Eu = Math.min(Eu, Uu + this.length);
        let {
          firstLine: Xu,
          perLine: lu,
          perChar: qu
        } = this.heightMetrics(ju, Uu);
        for (let fu = uu, Cu = su; fu <= Eu;) {
          let Eu = ju.doc.lineAt(fu);
          if (fu == uu) {
            let ju = Eu.number - Xu;
            Cu += lu * ju + qu * (uu - Uu - ju)
          }
          let su = lu + qu * Eu.length;
          Zu(new Fs(Eu.from, Eu.length, Cu, su, 0)), Cu += su, fu = Eu.to + 1
        }
      }
      replace(uu, Eu, ju) {
        let su = this.length - Eu;
        if (su > 0) {
          let uu = ju[ju.length - 1];
          uu instanceof ns ? ju[ju.length - 1] = new ns(uu.length + su) : ju.push(null, new ns(su - 1))
        }
        if (uu > 0) {
          let Eu = ju[0];
          Eu instanceof ns ? ju[0] = new ns(uu + Eu.length) : ju.unshift(new ns(uu - 1), null)
        }
        return ts.of(ju)
      }
      decomposeLeft(uu, Eu) {
        Eu.push(new ns(uu - 1), null)
      }
      decomposeRight(uu, Eu) {
        Eu.push(null, new ns(this.length - uu - 1))
      }
      updateHeight(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 ? arguments[3] : void 0,
          Uu = Eu + this.length;
        if (su && su.from <= Eu + this.length && su.more) {
          let ju = [],
            Zu = Math.max(Eu, su.from),
            Xu = -1;
          for (su.from > Eu && ju.push(new ns(su.from - Eu - 1).updateHeight(uu, Eu)); Zu <= Uu && su.more;) {
            let Eu = uu.doc.lineAt(Zu).length;
            ju.length && ju.push(null);
            let Uu = su.heights[su.index++],
              lu = 0;
            Uu < 0 && (lu = -Uu, Uu = su.heights[su.index++]), -1 == Xu ? Xu = Uu : Math.abs(Uu - Xu) >= Ls && (Xu = -2);
            let qu = new As(Eu, Uu, lu);
            qu.outdated = !1, ju.push(qu), Zu += Eu + 1
          }
          Zu <= Uu && ju.push(null, new ns(Uu - Zu).updateHeight(uu, Zu));
          let lu = ts.of(ju);
          return (Xu < 0 || Math.abs(lu.height - this.height) >= Ls || Math.abs(Xu - this.heightMetrics(uu, Eu).perLine) >= Ls) && (is = !0), xs(this, lu)
        }
        return (ju || this.outdated) && (this.setHeight(uu.heightForGap(Eu, Eu + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class ys extends ts {
      constructor(uu, Eu, ju) {
        super(uu.length + Eu + ju.length, uu.height + ju.height, Eu | (uu.outdated || ju.outdated ? 2 : 0)), this.left = uu, this.right = ju, this.size = uu.size + ju.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(uu, Eu, ju, su) {
        let Uu = ju + this.left.height;
        return uu < Uu ? this.left.blockAt(uu, Eu, ju, su) : this.right.blockAt(uu, Eu, Uu, su + this.left.length + this.break)
      }
      lineAt(uu, Eu, ju, su, Uu) {
        let Zu = su + this.left.height,
          Xu = Uu + this.left.length + this.break,
          lu = Eu == Bs.ByHeight ? uu < Zu : uu < Xu,
          qu = lu ? this.left.lineAt(uu, Eu, ju, su, Uu) : this.right.lineAt(uu, Eu, ju, Zu, Xu);
        if (this.break || (lu ? qu.to < Xu : qu.from > Xu)) return qu;
        let fu = Eu == Bs.ByPosNoHeight ? Bs.ByPosNoHeight : Bs.ByPos;
        return lu ? qu.join(this.right.lineAt(Xu, fu, ju, Zu, Xu)) : this.left.lineAt(Xu, fu, ju, su, Uu).join(qu)
      }
      forEachLine(uu, Eu, ju, su, Uu, Zu) {
        let Xu = su + this.left.height,
          lu = Uu + this.left.length + this.break;
        if (this.break) uu < lu && this.left.forEachLine(uu, Eu, ju, su, Uu, Zu), Eu >= lu && this.right.forEachLine(uu, Eu, ju, Xu, lu, Zu);
        else {
          let qu = this.lineAt(lu, Bs.ByPos, ju, su, Uu);
          uu < qu.from && this.left.forEachLine(uu, qu.from - 1, ju, su, Uu, Zu), qu.to >= uu && qu.from <= Eu && Zu(qu), Eu > qu.to && this.right.forEachLine(qu.to + 1, Eu, ju, Xu, lu, Zu)
        }
      }
      replace(uu, Eu, ju) {
        let su = this.left.length + this.break;
        if (Eu < su) return this.balanced(this.left.replace(uu, Eu, ju), this.right);
        if (uu > this.left.length) return this.balanced(this.left, this.right.replace(uu - su, Eu - su, ju));
        let Uu = [];
        uu > 0 && this.decomposeLeft(uu, Uu);
        let Zu = Uu.length;
        for (let Xu of ju) Uu.push(Xu);
        if (uu > 0 && zs(Uu, Zu - 1), Eu < this.length) {
          let uu = Uu.length;
          this.decomposeRight(Eu, Uu), zs(Uu, uu)
        }
        return ts.of(Uu)
      }
      decomposeLeft(uu, Eu) {
        let ju = this.left.length;
        if (uu <= ju) return this.left.decomposeLeft(uu, Eu);
        Eu.push(this.left), this.break && (ju++, uu >= ju && Eu.push(null)), uu > ju && this.right.decomposeLeft(uu - ju, Eu)
      }
      decomposeRight(uu, Eu) {
        let ju = this.left.length,
          su = ju + this.break;
        if (uu >= su) return this.right.decomposeRight(uu - su, Eu);
        uu < ju && this.left.decomposeRight(uu, Eu), this.break && uu < su && Eu.push(null), Eu.push(this.right)
      }
      balanced(uu, Eu) {
        return uu.size > 2 * Eu.size || Eu.size > 2 * uu.size ? ts.of(this.break ? [uu, null, Eu] : [uu, Eu]) : (this.left = xs(this.left, uu), this.right = xs(this.right, Eu), this.setHeight(uu.height + Eu.height), this.outdated = uu.outdated || Eu.outdated, this.size = uu.size + Eu.size, this.length = uu.length + this.break+Eu.length, this)
      }
      updateHeight(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Uu,
            right: Zu
          } = this,
          Xu = Eu + Uu.length + this.break,
          lu = null;
        return su && su.from <= Eu + Uu.length && su.more ? lu = Uu = Uu.updateHeight(uu, Eu, ju, su) : Uu.updateHeight(uu, Eu, ju), su && su.from <= Xu + Zu.length && su.more ? lu = Zu = Zu.updateHeight(uu, Xu, ju, su) : Zu.updateHeight(uu, Xu, ju), lu ? this.balanced(Uu, Zu) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function zs(uu, Eu) {
      let ju, su;
      null == uu[Eu] && (ju = uu[Eu - 1]) instanceof ns && (su = uu[Eu + 1]) instanceof ns && uu.splice(Eu - 1, 3, new ns(ju.length + 1 + su.length))
    }
    class Rs {
      constructor(uu, Eu) {
        this.pos = uu, this.oracle = Eu, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = uu
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(uu, Eu) {
        if (this.lineStart > -1) {
          let uu = Math.min(Eu, this.lineEnd),
            ju = this.nodes[this.nodes.length - 1];
          ju instanceof As ? ju.length += uu - this.pos : (uu > this.pos || !this.isCovered) && this.nodes.push(new As(uu - this.pos, -1, 0)), this.writtenTo = uu, Eu > uu && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = Eu
      }
      point(uu, Eu, ju) {
        if (uu < Eu || ju.heightRelevant) {
          let su = ju.widget ? ju.widget.estimatedHeight : 0,
            Uu = ju.widget ? ju.widget.lineBreaks : 0;
          su < 0 && (su = this.oracle.lineHeight);
          let Zu = Eu - uu;
          ju.block ? this.DEu(new Hs(Zu, su, ju)) : (Zu || Uu || su >= 5) && this.addLineDeco(su, Uu, Zu)
        } else Eu > uu && this.span(uu, Eu);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: uu,
          to: Eu
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = uu, this.lineEnd = Eu, this.writtenTo < uu && ((this.writtenTo < uu - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, uu - 1)), this.nodes.push(null)), this.pos > uu && this.nodes.push(new As(this.pos - uu, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(uu, Eu) {
        let ju = new ns(Eu - uu);
        return this.oracle.doc.lineAt(uu).to == Eu && (ju.flags |= 4), ju
      }
      ensureLine() {
        this.enterLine();
        let uu = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (uu instanceof As) return uu;
        let Eu = new As(0, -1, 0);
        return this.nodes.push(Eu), Eu
      }
      DEu(uu) {
        this.enterLine();
        let Eu = uu.deco;
        Eu && Eu.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(uu), this.writtenTo = this.pos = this.pos + uu.length, Eu && Eu.endSide > 0 && (this.covering = uu)
      }
      addLineDeco(uu, Eu, ju) {
        let su = this.ensureLine();
        su.length += ju, su.collapsed += ju, su.widgetHeight = Math.max(su.widgetHeight, uu), su.breaks += Eu, this.writtenTo = this.pos = this.pos + ju
      }
      finish(uu) {
        let Eu = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || Eu instanceof As || this.isCovered ? (this.writtenTo < this.pos || null == Eu) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new As(0, -1, 0));
        let ju = uu;
        for (let su of this.nodes) su instanceof As && su.updateHeight(this.oracle, ju), ju += su ? su.length : 1;
        return this.nodes
      }
      static build(uu, Eu, ju, Uu) {
        let Zu = new Rs(ju, uu);
        return su.E.spans(Eu, ju, Uu, Zu, 0), Zu.finish(ju)
      }
    }
    class uU {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(uu, Eu, ju, su) {
        (uu < Eu || ju && ju.heightRelevant || su && su.heightRelevant) && iu(uu, Eu, this.changes, 5)
      }
    }

    function EU(uu, Eu) {
      let ju = uu.getBoundingClientRect(),
        su = uu.ownerDocument,
        Uu = su.defaultView || window,
        Zu = Math.max(0, ju.left),
        Xu = Math.min(Uu.innerWidth, ju.right),
        lu = Math.max(0, ju.top),
        qu = Math.min(Uu.innerHeight, ju.bottom);
      for (let fu = uu.parentNode; fu && fu != su.body;)
        if (1 == fu.nodeType) {
          let Eu = fu,
            ju = window.getComputedStyle(Eu);
          if ((Eu.scrollHeight > Eu.clientHeight || Eu.scrollWidth > Eu.clientWidth) && "visible" != ju.overflow) {
            let ju = Eu.getBoundingClientRect();
            Zu = Math.max(Zu, ju.left), Xu = Math.min(Xu, ju.right), lu = Math.max(lu, ju.top), qu = Math.min(fu == uu.parentNode ? Uu.innerHeight : qu, ju.bottom)
          }
          fu = "absolute" == ju.position || "fixed" == ju.position ? Eu.offsetParent : Eu.parentNode
        } else {
          if (11 != fu.nodeType) break;
          fu = fu.host
        } return {
        left: Zu - ju.left,
        right: Math.max(Zu, Xu) - ju.left,
        top: lu - (ju.top + Eu),
        bottom: Math.max(lu, qu) - (ju.top + Eu)
      }
    }

    function jU(uu, Eu) {
      let ju = uu.getBoundingClientRect();
      return {
        left: 0,
        right: ju.right - ju.left,
        top: Eu,
        bottom: ju.bottom - (ju.top + Eu)
      }
    }
    class sU {
      constructor(uu, Eu, ju, su) {
        this.from = uu, this.to = Eu, this.size = ju, this.displaySize = su
      }
      static same(uu, Eu) {
        if (uu.length != Eu.length) return !1;
        for (let ju = 0; ju < uu.length; ju++) {
          let su = uu[ju],
            Uu = Eu[ju];
          if (su.from != Uu.from || su.to != Uu.to || su.size != Uu.size) return !1
        }
        return !0
      }
      draw(uu, Eu) {
        return vu.replace({
          widget: new UU(this.displaySize * (Eu ? uu.scaleY : uu.scaleX), Eu)
        }).range(this.from, this.to)
      }
    }
    class UU extends ku {
      constructor(uu, Eu) {
        super(), this.size = uu, this.vertical = Eu
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
    class ZU {
      constructor(uu, Eu) {
        this.view = uu, this.state = Eu, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = fU, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = fE.LTR, this.Q8 = [], this.mustEnforceCursorAssoc = !1;
        let ju = Eu.facet(RE).some((uu => "function" != typeof uu && "cm-lineWrapping" == uu.class));
        this.heightOracle = new Ss(ju), this.stateDeco = CU(Eu), this.heightMap = ts.empty().applyChanges(this.stateDeco, su.P.empty, this.heightOracle.setDoc(Eu.doc), [new fj(0, 0, 0, Eu.doc.length)]);
        for (let su = 0; su < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); su++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = vu.set(this.lineGaps.map((uu => uu.draw(this, !1)))), this.scrollParent = uu.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let uu = [this.viewport],
          {
            main: Eu
          } = this.state.selection;
        for (let ju = 0; ju <= 1; ju++) {
          let su = ju ? Eu.head : Eu.anchor;
          if (!uu.some((uu => {
              let {
                from: Eu,
                to: ju
              } = uu;
              return su >= Eu && su <= ju
            }))) {
            let {
              from: Eu,
              to: ju
            } = this.lineBlockAt(su);
            uu.push(new XU(Eu, ju))
          }
        }
        return this.viewports = uu.sort(((uu, Eu) => uu.from - Eu.from)), this.updateScaler()
      }
      updateScaler() {
        let uu = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? fU : new bU(this.heightOracle, this.heightMap, this.viewports), uu.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (uu => {
          this.viewportLines.push(cU(uu, this.scaler))
        }))
      }
      update(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = uu.state;
        let ju = this.stateDeco;
        this.stateDeco = CU(this.state);
        let Uu = uu.changedRanges,
          Zu = fj.extendWithRanges(Uu, function(uu, Eu, ju) {
            let Uu = new uU;
            return su.E.compare(uu, Eu, ju, Uu, 0), Uu.changes
          }(ju, this.stateDeco, uu ? uu.changes : su.ChangeSet.empty(this.state.doc.length))),
          Xu = this.heightMap.height,
          lu = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        Ws(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, uu.startState.doc, this.heightOracle.setDoc(this.state.doc), Zu), (this.heightMap.height != Xu || is) && (uu.flags |= 2), lu ? (this.scrollAnchorPos = uu.changes.mapPos(lu.from, -1), this.scrollAnchorHeight = lu.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = Xu);
        let qu = Zu.length ? this.mapViewport(this.viewport, uu.changes) : this.viewport;
        (Eu && (Eu.range.head < qu.from || Eu.range.head > qu.to) || !this.viewportIsAppropriate(qu)) && (qu = this.getViewport(0, Eu));
        let fu = qu.from != this.viewport.from || qu.to != this.viewport.to;
        this.viewport = qu, uu.flags |= this.updateForViewport(), (fu || !uu.changes.empty || 2 & uu.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, uu.changes))), uu.flags |= this.computeVisibleRanges(uu.changes), Eu && (this.scrollTarget = Eu), !this.mustEnforceCursorAssoc && (uu.selectionSet || uu.focusChanged) && uu.view.lineWrapping && uu.state.selection.main.empty && uu.state.selection.main.assoc && !uu.state.facet(IE) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: uu
        } = this, Eu = uu.contentDOM, ju = window.getComputedStyle(Eu), Uu = this.heightOracle, Zu = ju.whiteSpace;
        this.defaultTextDirection = "rtl" == ju.direction ? fE.RTL : fE.LTR;
        let Xu = this.heightOracle.mustRefreshForWrapping(Zu) || "refresh" === this.mustMeasureContent,
          lu = Eu.getBoundingClientRect(),
          qu = Xu || this.mustMeasureContent || this.contentDOMHeight != lu.height;
        this.contentDOMHeight = lu.height, this.mustMeasureContent = !1;
        let fu = 0,
          Cu = 0;
        if (lu.width && lu.height) {
          let {
            scaleX: uu,
            scaleY: ju
          } = yu(Eu, lu);
          (uu > .005 && Math.abs(this.scaleX - uu) > .005 || ju > .005 && Math.abs(this.scaleY - ju) > .005) && (this.scaleX = uu, this.scaleY = ju, fu |= 16, Xu = qu = !0)
        }
        let bu = (parseInt(ju.paddingTop) || 0) * this.scaleY,
          cu = (parseInt(ju.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == bu && this.paddingBottom == cu || (this.paddingTop = bu, this.paddingBottom = cu, fu |= 18), this.editorWidth != uu.scrollDOM.clientWidth && (Uu.lineWrapping && (qu = !0), this.editorWidth = uu.scrollDOM.clientWidth, fu |= 16);
        let Nu = zu(this.view.contentDOM, !1).y;
        Nu != this.scrollParent && (this.scrollParent = Nu, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let Ou = this.getScrollOffset();
        this.scrollOffset != Ou && (this.scrollAnchorHeight = -1, this.scrollOffset = Ou), this.scrolledToBottom = ZE(this.scrollParent || uu.win);
        let Yu = (this.printing ? jU : EU)(Eu, this.paddingTop),
          hu = Yu.top - this.pixelViewport.top,
          Du = Yu.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Yu;
        let gu = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (gu != this.inView && (this.inView = gu, gu && (qu = !0)), !this.inView && !this.scrollTarget && ! function(uu) {
            let Eu = uu.getBoundingClientRect(),
              ju = uu.ownerDocument.defaultView || window;
            return Eu.left < ju.innerWidth && Eu.right > 0 && Eu.top < ju.innerHeight && Eu.bottom > 0
          }(uu.dom)) return 0;
        let Mu = lu.width;
        if (this.contentDOMWidth == Mu && this.editorHeight == uu.scrollDOM.clientHeight || (this.contentDOMWidth = lu.width, this.editorHeight = uu.scrollDOM.clientHeight, fu |= 16), qu) {
          let Eu = uu.docView.measureVisibleLineHeights(this.viewport);
          if (Uu.mustRefreshForHeights(Eu) && (Xu = !0), Xu || Uu.lineWrapping && Math.abs(Mu - this.contentDOMWidth) > Uu.charWidth) {
            let {
              lineHeight: ju,
              charWidth: su,
              textHeight: lu
            } = uu.docView.measureTextSize();
            Xu = ju > 0 && Uu.refresh(Zu, ju, su, lu, Math.max(5, Mu / su), Eu), Xu && (uu.docView.minWidth = 0, fu |= 16)
          }
          hu > 0 && Du > 0 ? Cu = Math.max(hu, Du) : hu < 0 && Du < 0 && (Cu = Math.min(hu, Du)), Ws();
          for (let ju of this.viewports) {
            let Zu = ju.from == this.viewport.from ? Eu : uu.docView.measureVisibleLineHeights(ju);
            this.heightMap = (Xu ? ts.empty().applyChanges(this.stateDeco, su.P.empty, this.heightOracle, [new fj(0, 0, 0, uu.state.doc.length)]) : this.heightMap).updateHeight(Uu, 0, Xu, new Is(ju.from, Zu))
          }
          is && (fu |= 2)
        }
        let eu = !this.viewportIsAppropriate(this.viewport, Cu) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return eu && (2 & fu && (fu |= this.updateScaler()), this.viewport = this.getViewport(Cu, this.scrollTarget), fu |= this.updateForViewport()), (2 & fu || eu) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(Xu ? [] : this.lineGaps, uu)), fu |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, uu.docView.enforceCursorAssoc()), fu
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(uu, Eu) {
        let ju = .5 - Math.max(-.5, Math.min(.5, uu / 1e3 / 2)),
          su = this.heightMap,
          Uu = this.heightOracle,
          {
            visibleTop: Zu,
            visibleBottom: Xu
          } = this,
          lu = new XU(su.lineAt(Zu - 1e3 * ju, Bs.ByHeight, Uu, 0, 0).from, su.lineAt(Xu + 1e3 * (1 - ju), Bs.ByHeight, Uu, 0, 0).to);
        if (Eu) {
          let {
            head: uu
          } = Eu.range;
          if (uu < lu.from || uu > lu.to) {
            let ju, Zu = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              Xu = su.lineAt(uu, Bs.ByPos, Uu, 0, 0);
            ju = "center" == Eu.y ? (Xu.top + Xu.bottom) / 2 - Zu / 2 : "start" == Eu.y || "nearest" == Eu.y && uu < lu.from ? Xu.top : Xu.bottom - Zu, lu = new XU(su.lineAt(ju - 500, Bs.ByHeight, Uu, 0, 0).from, su.lineAt(ju + Zu + 500, Bs.ByHeight, Uu, 0, 0).to)
          }
        }
        return lu
      }
      mapViewport(uu, Eu) {
        let ju = Eu.mapPos(uu.from, -1),
          su = Eu.mapPos(uu.to, 1);
        return new XU(this.heightMap.lineAt(ju, Bs.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(su, Bs.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(uu) {
        let {
          from: Eu,
          to: ju
        } = uu, su = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Uu
        } = this.heightMap.lineAt(Eu, Bs.ByPos, this.heightOracle, 0, 0), {
          bottom: Zu
        } = this.heightMap.lineAt(ju, Bs.ByPos, this.heightOracle, 0, 0), {
          visibleTop: Xu,
          visibleBottom: lu
        } = this;
        return (0 == Eu || Uu <= Xu - Math.max(10, Math.min(-su, 250))) && (ju == this.state.doc.length || Zu >= lu + Math.max(10, Math.min(su, 250))) && Uu > Xu - 2e3 && Zu < lu + 2e3
      }
      mapLineGaps(uu, Eu) {
        if (!uu.length || Eu.empty) return uu;
        let ju = [];
        for (let su of uu) Eu.touchesRange(su.from, su.to) || ju.push(new sU(Eu.mapPos(su.from), Eu.mapPos(su.to), su.size, su.displaySize));
        return ju
      }
      ensureLineGaps(uu, Eu) {
        let ju = this.heightOracle.lineWrapping,
          Uu = ju ? 1e4 : 2e3,
          Zu = Uu >> 1,
          Xu = Uu << 1;
        if (this.defaultTextDirection != fE.LTR && !ju) return [];
        let lu = [],
          qu = (Uu, Xu, fu, Cu) => {
            if (Xu - Uu < Zu) return;
            let bu = this.state.selection.main,
              cu = [bu.from];
            bu.empty || cu.push(bu.to);
            for (let uu of cu)
              if (uu > Uu && uu < Xu) return qu(Uu, uu - 10, fu, Cu), void qu(uu + 10, Xu, fu, Cu);
            let Nu = function(uu, Eu) {
              for (let ju of uu)
                if (Eu(ju)) return ju;
              return
            }(uu, (uu => uu.from >= fu.from && uu.to <= fu.to && Math.abs(uu.from - Uu) < Zu && Math.abs(uu.to - Xu) < Zu && !cu.some((Eu => uu.from < Eu && uu.to > Eu))));
            if (!Nu) {
              if (Xu < fu.to && Eu && ju && Eu.Q8.some((uu => uu.from <= Xu && uu.to >= Xu))) {
                let uu = Eu.moveToLineBoundary(su.l.cursor(Xu), !1, !0).head;
                uu > Uu && (Xu = uu)
              }
              let uu = this.gapSize(fu, Uu, Xu, Cu);
              Nu = new sU(Uu, Xu, uu, ju || uu < 2e6 ? uu : 2e6)
            }
            lu.push(Nu)
          },
          fu = Eu => {
            if (Eu.length < Xu || Eu.type != mu.Text) return;
            let Zu = function(uu, Eu, ju) {
              let Uu = [],
                Zu = uu,
                Xu = 0;
              su.E.spans(ju, uu, Eu, {
                span() {},
                point(uu, Eu) {
                  uu > Zu && (Uu.push({
                    from: Zu,
                    to: uu
                  }), Xu += uu - Zu), Zu = Eu
                }
              }, 20), Zu < Eu && (Uu.push({
                from: Zu,
                to: Eu
              }), Xu += Eu - Zu);
              return {
                total: Xu,
                HY: Uu
              }
            }(Eu.from, Eu.to, this.stateDeco);
            if (Zu.total < Xu) return;
            let lu, fu, Cu = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (ju) {
              let uu, ju, su = Uu / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != Cu) {
                let Uu = qU(Zu, Cu),
                  Xu = ((this.visibleBottom - this.visibleTop) / 2 + su) / Eu.height;
                uu = Uu - Xu, ju = Uu + Xu
              } else uu = (this.visibleTop - Eu.top - su) / Eu.height, ju = (this.visibleBottom - Eu.top + su) / Eu.height;
              lu = lU(Zu, uu), fu = lU(Zu, ju)
            } else {
              let ju = Zu.total * this.heightOracle.charWidth,
                su = Uu * this.heightOracle.charWidth,
                Xu = 0;
              if (ju > 2e6)
                for (let Uu of uu) Uu.from >= Eu.from && Uu.from < Eu.to && Uu.size != Uu.displaySize && Uu.from * this.heightOracle.charWidth + Xu < this.pixelViewport.left && (Xu = Uu.size - Uu.displaySize);
              let qu, bu, cu = this.pixelViewport.left + Xu,
                Nu = this.pixelViewport.right + Xu;
              if (null != Cu) {
                let uu = qU(Zu, Cu),
                  Eu = ((Nu - cu) / 2 + su) / ju;
                qu = uu - Eu, bu = uu + Eu
              } else qu = (cu - su) / ju, bu = (Nu + su) / ju;
              lu = lU(Zu, qu), fu = lU(Zu, bu)
            }
            lu > Eu.from && qu(Eu.from, lu, Eu, Zu), fu < Eu.to && qu(fu, Eu.to, Eu, Zu)
          };
        for (let su of this.viewportLines) Array.isArray(su.type) ? su.type.forEach(fu) : fu(su);
        return lu
      }
      gapSize(uu, Eu, ju, su) {
        let Uu = qU(su, ju) - qU(su, Eu);
        return this.heightOracle.lineWrapping ? uu.height * Uu : su.total * this.heightOracle.charWidth * Uu
      }
      updateLineGaps(uu) {
        sU.same(uu, this.lineGaps) || (this.lineGaps = uu, this.lineGapDeco = vu.set(uu.map((uu => uu.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(uu) {
        let Eu = this.stateDeco;
        this.lineGaps.length && (Eu = Eu.concat(this.lineGapDeco));
        let ju = [];
        su.E.spans(Eu, this.viewport.from, this.viewport.to, {
          span(uu, Eu) {
            ju.push({
              from: uu,
              to: Eu
            })
          },
          point() {}
        }, 20);
        let Uu = 0;
        if (ju.length != this.Q8.length) Uu = 12;
        else
          for (let su = 0; su < ju.length && !(8 & Uu); su++) {
            let Eu = this.Q8[su],
              Zu = ju[su];
            Eu.from == Zu.from && Eu.to == Zu.to || (Uu |= 4, uu && uu.mapPos(Eu.from, -1) == Zu.from && uu.mapPos(Eu.to, 1) == Zu.to || (Uu |= 8))
          }
        return this.Q8 = ju, Uu
      }
      lineBlockAt(uu) {
        return uu >= this.viewport.from && uu <= this.viewport.to && this.viewportLines.find((Eu => Eu.from <= uu && Eu.to >= uu)) || cU(this.heightMap.lineAt(uu, Bs.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(uu) {
        return uu >= this.viewportLines[0].top && uu <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((Eu => Eu.top <= uu && Eu.bottom >= uu)) || cU(this.heightMap.lineAt(this.scaler.fromDOM(uu), Bs.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(uu) {
        let Eu = this.lineBlockAtHeight(uu + 8);
        return Eu.from >= this.viewport.from || this.viewportLines[0].top - uu > 200 ? Eu : this.viewportLines[0]
      }
      elementAtHeight(uu) {
        return cU(this.heightMap.blockAt(this.scaler.fromDOM(uu), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class XU {
      constructor(uu, Eu) {
        this.from = uu, this.to = Eu
      }
    }

    function lU(uu, Eu) {
      let {
        total: ju,
        HY: su
      } = uu;
      if (Eu <= 0) return su[0].from;
      if (Eu >= 1) return su[su.length - 1].to;
      let Uu = Math.floor(ju * Eu);
      for (let Zu = 0;; Zu++) {
        let {
          from: uu,
          to: Eu
        } = su[Zu], ju = Eu - uu;
        if (Uu <= ju) return uu + Uu;
        Uu -= ju
      }
    }

    function qU(uu, Eu) {
      let ju = 0;
      for (let {
          from: su,
          to: Uu
        }
        of uu.HY) {
        if (Eu <= Uu) {
          ju += Eu - su;
          break
        }
        ju += Uu - su
      }
      return ju / uu.total
    }
    const fU = {
      toDOM: uu => uu,
      fromDOM: uu => uu,
      scale: 1,
      eq(uu) {
        return uu == this
      }
    };

    function CU(uu) {
      let Eu = uu.facet(uj).filter((uu => "function" != typeof uu)),
        ju = uu.facet(jj).filter((uu => "function" != typeof uu));
      return ju.length && Eu.push(su.E.join(ju)), Eu
    }
    class bU {
      constructor(uu, Eu, ju) {
        let su = 0,
          Uu = 0,
          Zu = 0;
        this.viewports = ju.map((ju => {
          let {
            from: Uu,
            to: Zu
          } = ju, Xu = Eu.lineAt(Uu, Bs.ByPos, uu, 0, 0).top, lu = Eu.lineAt(Zu, Bs.ByPos, uu, 0, 0).bottom;
          return su += lu - Xu, {
            from: Uu,
            to: Zu,
            top: Xu,
            bottom: lu,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - su) / (Eu.height - su);
        for (let Xu of this.viewports) Xu.domTop = Zu + (Xu.top - Uu) * this.scale, Zu = Xu.domBottom = Xu.domTop + (Xu.bottom - Xu.top), Uu = Xu.bottom
      }
      toDOM(uu) {
        for (let Eu = 0, ju = 0, su = 0;; Eu++) {
          let Uu = Eu < this.viewports.length ? this.viewports[Eu] : null;
          if (!Uu || uu < Uu.top) return su + (uu - ju) * this.scale;
          if (uu <= Uu.bottom) return Uu.domTop + (uu - Uu.top);
          ju = Uu.bottom, su = Uu.domBottom
        }
      }
      fromDOM(uu) {
        for (let Eu = 0, ju = 0, su = 0;; Eu++) {
          let Uu = Eu < this.viewports.length ? this.viewports[Eu] : null;
          if (!Uu || uu < Uu.domTop) return ju + (uu - su) / this.scale;
          if (uu <= Uu.domBottom) return Uu.top + (uu - Uu.domTop);
          ju = Uu.bottom, su = Uu.domBottom
        }
      }
      eq(uu) {
        return uu instanceof bU && (this.scale == uu.scale && this.viewports.length == uu.viewports.length && this.viewports.every(((Eu, ju) => Eu.from == uu.viewports[ju].from && Eu.to == uu.viewports[ju].to)))
      }
    }

    function cU(uu, Eu) {
      if (1 == Eu.scale) return uu;
      let ju = Eu.toDOM(uu.top),
        su = Eu.toDOM(uu.bottom);
      return new Fs(uu.from, uu.length, ju, su - ju, Array.isArray(uu._content) ? uu._content.map((uu => cU(uu, Eu))) : uu._content)
    }
    const NU = su.r.define({
        combine: uu => uu.join(" ")
      }),
      OU = su.r.define({
        combine: uu => uu.indexOf(!0) > -1
      }),
      YU = Uu.e.newName(),
      hU = Uu.e.newName(),
      DU = Uu.e.newName(),
      gU = {
        "&light": "." + hU,
        "&dark": "." + DU
      };

    function MU(uu, Eu, ju) {
      return new Uu.e(Eu, {
        finish: Eu => /&/.test(Eu) ? Eu.replace(/&\w*/, (Eu => {
          if ("&" == Eu) return uu;
          if (!ju || !ju[Eu]) throw new RangeError(`Unsupported selector: ${Eu}`);
          return ju[Eu]
        })) : uu + " " + Eu
      })
    }
    const eU = MU("." + YU, {
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
      }, gU),
      GU = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      pU = wu.ie && wu.ie_version <= 11;
    class wU {
      constructor(uu) {
        this.view = uu, this.active = !1, this.editContext = null, this.selectionRange = new Ru, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = uu.contentDOM, this.observer = new MutationObserver((Eu => {
          for (let uu of Eu) this.queue.push(uu);
          (wu.ie && wu.ie_version <= 11 || wu.ios && uu.composing) && Eu.some((uu => "childList" == uu.type && uu.removedNodes.length || "characterData" == uu.type && uu.oldValue.length > uu.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !wu.android || !1 === uu.constructor.EDIT_CONTEXT || wu.chrome && wu.chrome_version < 126 || (this.editContext = new aU(uu), uu.state.facet(TE) && (uu.contentDOM.editContext = this.editContext.editContext)), pU && (this.onCharData = uu => {
          this.queue.push({
            target: uu.target,
            type: "characterData",
            oldValue: uu.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.rD = this.rD.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var uu;
          (null === (uu = this.view.docView) || void 0 === uu ? void 0 : uu.lastUpdate) < Date.now() - 75 && this.rD()
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
      rD() {
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
        if (this.gapIntersection && (uu.length != this.gaps.length || this.gaps.some(((Eu, ju) => Eu != uu[ju])))) {
          this.gapIntersection.disconnect();
          for (let Eu of uu) this.gapIntersection.observe(Eu);
          this.gaps = uu
        }
      }
      onSelectionChange(uu) {
        let Eu = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: ju
        } = this, su = this.selectionRange;
        if (ju.state.facet(TE) ? ju.root.activeElement != this.dom : !Fu(this.dom, su)) return;
        let Uu = su.anchorNode && ju.docView.tile.nearest(su.anchorNode);
        Uu && Uu.isWidget() && Uu.widget.ignoreEvent(uu) ? Eu || (this.selectionChanged = !1) : (wu.ie && wu.ie_version <= 11 || wu.android && wu.chrome) && !ju.state.selection.main.empty && su.focusNode && Lu(su.focusNode, su.focusOffset, su.anchorNode, su.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: uu
        } = this, Eu = Su(uu.root);
        if (!Eu) return !1;
        let ju = wu.safari && 11 == uu.root.nodeType && uu.root.activeElement == this.dom && function(uu, Eu) {
          if (Eu.getComposedRanges) {
            let ju = Eu.getComposedRanges(uu.root)[0];
            if (ju) return dU(uu, ju)
          }
          let ju = null;

          function su(uu) {
            uu.preventDefault(), uu.stopImmediatePropagation(), ju = uu.getTargetRanges()[0]
          }
          return uu.contentDOM.addEventListener("beforeinput", su, !0), uu.dom.ownerDocument.execCommand("indent"), uu.contentDOM.removeEventListener("beforeinput", su, !0), ju ? dU(uu, ju) : null
        }(this.view, Eu) || Eu;
        if (!ju || this.selectionRange.eq(ju)) return !1;
        let su = Fu(this.dom, ju);
        return su && !this.selectionChanged && uu.inputState.lastFocusTime > Date.now() - 200 && uu.inputState.lastTouchTime < Date.now() - 300 && function(uu, Eu) {
          let ju = Eu.focusNode,
            su = Eu.focusOffset;
          if (!ju || Eu.anchorNode != ju || Eu.anchorOffset != su) return !1;
          for (su = Math.min(su, Hu(ju));;)
            if (su) {
              if (1 != ju.nodeType) return !1;
              let uu = ju.childNodes[su - 1];
              "false" == uu.contentEditable ? su-- : (ju = uu, su = Hu(ju))
            } else {
              if (ju == uu) return !0;
              su = tu(ju), ju = ju.parentNode
            }
        }(this.dom, ju) ? (this.view.inputState.lastFocusTime = 0, uu.docView.updateSelection(), !1) : (this.selectionRange.setRange(ju), su && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(uu, Eu) {
        this.selectionRange.set(uu.node, uu.offset, Eu.node, Eu.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let uu = 0,
          Eu = null;
        for (let ju = this.dom; ju;)
          if (1 == ju.nodeType) !Eu && uu < this.scrollTargets.length && this.scrollTargets[uu] == ju ? uu++ : Eu || (Eu = this.scrollTargets.slice(0, uu)), Eu && Eu.push(ju), ju = ju.assignedSlot || ju.parentNode;
          else {
            if (11 != ju.nodeType) break;
            ju = ju.host
          } if (uu < this.scrollTargets.length && !Eu && (Eu = this.scrollTargets.slice(0, uu)), Eu) {
          for (let uu of this.scrollTargets) uu.removeEventListener("scroll", this.onScroll);
          for (let uu of this.scrollTargets = Eu) uu.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, GU), pU && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), pU && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(uu, Eu) {
        var ju;
        if (!this.delayedAndroidKey) {
          let uu = () => {
            let uu = this.delayedAndroidKey;
            if (uu) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = uu.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && uu.force && UE(this.dom, uu.key, uu.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(uu)
        }
        this.delayedAndroidKey && "Enter" != uu || (this.delayedAndroidKey = {
          key: uu,
          keyCode: Eu,
          force: this.lastChange < Date.now() - 50 || !!(null === (ju = this.delayedAndroidKey) || void 0 === ju ? void 0 : ju.force)
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
        let Eu = -1,
          ju = -1,
          su = !1;
        for (let Uu of uu) {
          let uu = this.readMutation(Uu);
          uu && (uu.typeOver && (su = !0), -1 == Eu ? ({
            from: Eu,
            to: ju
          } = uu) : (Eu = Math.min(uu.from, Eu), ju = Math.max(uu.to, ju)))
        }
        return {
          from: Eu,
          to: ju,
          typeOver: su
        }
      }
      readChange() {
        let {
          from: uu,
          to: Eu,
          typeOver: ju
        } = this.processRecords(), su = this.selectionChanged && Fu(this.dom, this.selectionRange);
        if (uu < 0 && !su) return null;
        uu > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Uu = new ss(this.view, uu, Eu, ju);
        return this.view.docView.domChanged = {
          newSel: Uu.newSel ? Uu.newSel.main : null
        }, Uu
      }
      flush() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        uu && this.readSelectionRange();
        let Eu = this.readChange();
        if (!Eu) return this.view.requestMeasure(), !1;
        let ju = this.view.state,
          su = Zs(this.view, Eu);
        return this.view.state == ju && (Eu.domChanged || Eu.newSel && !qs(this.view.state.selection, Eu.newSel.main)) && this.view.update([]), su
      }
      readMutation(uu) {
        let Eu = this.view.docView.tile.nearest(uu.target);
        if (!Eu || Eu.isWidget()) return null;
        if (Eu.markDirty("attributes" == uu.type), "childList" == uu.type) {
          let ju = JU(Eu, uu.previousSibling || uu.target.previousSibling, -1),
            su = JU(Eu, uu.nextSibling || uu.target.nextSibling, 1);
          return {
            from: ju ? Eu.posAfter(ju) : Eu.posAtStart,
            to: su ? Eu.posBefore(su) : Eu.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == uu.type ? {
          from: Eu.posAtStart,
          to: Eu.posAtEnd,
          typeOver: uu.target.nodeValue == uu.oldValue
        } : null
      }
      setWindow(uu) {
        uu != this.win && (this.removeWindowListeners(this.win), this.win = uu, this.addWindowListeners(this.win))
      }
      addWindowListeners(uu) {
        uu.addEventListener("resize", this.rD), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : uu.addEventListener("beforeprint", this.onPrint), uu.addEventListener("scroll", this.onScroll), uu.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(uu) {
        uu.removeEventListener("scroll", this.onScroll), uu.removeEventListener("resize", this.rD), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : uu.removeEventListener("beforeprint", this.onPrint), uu.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(uu) {
        this.editContext && (this.editContext.update(uu), uu.startState.facet(TE) != uu.state.facet(TE) && (uu.view.contentDOM.editContext = uu.state.facet(TE) ? this.editContext.editContext : null))
      }
      destroy() {
        var uu, Eu, ju;
        this.stop(), null === (uu = this.intersection) || void 0 === uu || uu.disconnect(), null === (Eu = this.gapIntersection) || void 0 === Eu || Eu.disconnect(), null === (ju = this.resizeScroll) || void 0 === ju || ju.disconnect();
        for (let su of this.scrollTargets) su.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function JU(uu, Eu, ju) {
      for (; Eu;) {
        let su = cj.get(Eu);
        if (su && su.parent == uu) return su;
        let Uu = Eu.parentNode;
        Eu = Uu != uu.dom ? Uu : ju > 0 ? Eu.nextSibling : Eu.previousSibling
      }
      return null
    }

    function dU(uu, Eu) {
      let ju = Eu.startContainer,
        su = Eu.startOffset,
        Uu = Eu.endContainer,
        Zu = Eu.endOffset,
        Xu = uu.docView.domAtPos(uu.state.selection.main.anchor, 1);
      return Lu(Xu.node, Xu.offset, Uu, Zu) && ([ju, su, Uu, Zu] = [Uu, Zu, ju, su]), {
        anchorNode: ju,
        anchorOffset: su,
        focusNode: Uu,
        focusOffset: Zu
      }
    }
    class aU {
      constructor(uu) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(uu.state);
        let Eu = this.editContext = new window.EditContext({
          text: uu.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, uu.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(uu.state.selection.main.head)
        });
        this.handlers.textupdate = ju => {
          let Uu = uu.state.selection.main,
            {
              anchor: Zu,
              head: Xu
            } = Uu,
            lu = this.toEditorPos(ju.updateRangeStart),
            qu = this.toEditorPos(ju.updateRangeEnd);
          uu.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: ju.updateRangeStart,
            editorBase: lu,
            drifted: !1
          });
          let fu = qu - lu > ju.text.length;
          lu == this.from && Zu < this.from ? lu = Zu : qu == this.to && Zu > this.to && (qu = Zu);
          let Cu = ls(uu.state.sliceDoc(lu, qu), ju.text, (fu ? Uu.from : Uu.to) - lu, fu ? "end" : null);
          if (!Cu) {
            let Eu = su.l.single(this.toEditorPos(ju.selectionStart), this.toEditorPos(ju.selectionEnd));
            return void(qs(Eu, Uu) || uu.dispatch({
              selection: Eu,
              userEvent: "select"
            }))
          }
          let bu = {
            from: Cu.from + lu,
            to: Cu.toA + lu,
            insert: su.P.of(ju.text.slice(Cu.from, Cu.toB).split("\n"))
          };
          if ((wu.mac || wu.android) && bu.from == Xu - 1 && /^\. ?$/.test(ju.text) && "off" == uu.contentDOM.getAttribute("autocorrect") && (bu = {
              from: lu,
              to: qu,
              insert: su.P.of([ju.text.replace(".", " ")])
            }), this.pendingContextChange = bu, !uu.state.readOnly) {
            let Eu = this.to - this.from + (bu.to - bu.from + bu.insert.length);
            Xs(uu, bu, su.l.single(this.toEditorPos(ju.selectionStart, Eu), this.toEditorPos(ju.selectionEnd, Eu)))
          }
          this.pendingContextChange && (this.revertPending(uu.state), this.setSelection(uu.state)), bu.from < bu.to && !bu.insert.length && uu.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(Eu.text.slice(Math.max(0, ju.updateRangeStart - 1), Math.min(Eu.text.length, ju.updateRangeStart + 1))) && this.handlers.compositionend(ju)
        }, this.handlers.characterboundsupdate = ju => {
          let su = [],
            Uu = null;
          for (let Eu = this.toEditorPos(ju.rangeStart), Zu = this.toEditorPos(ju.rangeEnd); Eu < Zu; Eu++) {
            let ju = uu.coordsForChar(Eu);
            Uu = ju && new DOMRect(ju.left, ju.top, ju.right - ju.left, ju.bottom - ju.top) || Uu || new DOMRect, su.push(Uu)
          }
          Eu.updateCharacterBounds(ju.rangeStart, su)
        }, this.handlers.textformatupdate = Eu => {
          let ju = [];
          for (let uu of Eu.getTextFormats()) {
            let Eu = uu.underlineStyle,
              su = uu.underlineThickness;
            if (!/none/i.test(Eu) && !/none/i.test(su)) {
              let Uu = this.toEditorPos(uu.rangeStart),
                Zu = this.toEditorPos(uu.rangeEnd);
              if (Uu < Zu) {
                let uu = `text-decoration: underline ${/^[a-z]/.test(Eu)?Eu+" ":"Dashed"==Eu?"dashed ":"Squiggle"==Eu?"wavy ":""}${/thin/i.test(su)?1:2}px`;
                ju.push(vu.mark({
                  attributes: {
                    style: uu
                  }
                }).range(Uu, Zu))
              }
            }
          }
          uu.dispatch({
            effects: tE.of(vu.set(ju))
          })
        }, this.handlers.compositionstart = () => {
          uu.inputState.composing < 0 && (uu.inputState.composing = 0, uu.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (uu.inputState.composing = -1, uu.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: Eu
            } = this.composing;
            this.composing = null, Eu && this.reset(uu.state)
          }
        };
        for (let ju in this.handlers) Eu.addEventListener(ju, this.handlers[ju]);
        this.measureReq = {
          read: uu => {
            this.editContext.updateControlBounds(uu.contentDOM.getBoundingClientRect());
            let Eu = Su(uu.root);
            Eu && Eu.rangeCount && this.editContext.updateSelectionBounds(Eu.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(uu) {
        let Eu = 0,
          ju = !1,
          su = this.pendingContextChange;
        return uu.changes.iterChanges(((Uu, Zu, Xu, lu, qu) => {
          if (ju) return;
          let fu = qu.length - (Zu - Uu);
          if (su && Zu >= su.to) {
            if (su.from == Uu && su.to == Zu && su.insert.eq(qu)) return su = this.pendingContextChange = null, Eu += fu, void(this.to += fu);
            su = null, this.revertPending(uu.state)
          }
          if (Uu += Eu, (Zu += Eu) <= this.from) this.from += fu, this.to += fu;
          else if (Uu < this.to) {
            if (Uu < this.from || Zu > this.to || this.to - this.from + qu.length > 3e4) return void(ju = !0);
            this.editContext.updateText(this.toContextPos(Uu), this.toContextPos(Zu), qu.toString()), this.to += fu
          }
          Eu += fu
        })), su && !ju && this.revertPending(uu.state), !ju
      }
      update(uu) {
        let Eu = this.pendingContextChange,
          ju = uu.startState.selection.main;
        this.composing && (this.composing.drifted || !uu.changes.touchesRange(ju.from, ju.to) && uu.transactions.some((uu => !uu.isUserEvent("input.type") && uu.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = uu.changes.mapPos(this.composing.editorBase)) : this.applyEdits(uu) && this.rangeIsValid(uu.state) ? (uu.docChanged || uu.selectionSet || Eu) && this.setSelection(uu.state) : (this.pendingContextChange = null, this.reset(uu.state)), (uu.geometryChanged || uu.docChanged || uu.selectionSet) && uu.view.requestMeasure(this.measureReq)
      }
      resetRange(uu) {
        let {
          head: Eu
        } = uu.selection.main;
        this.from = Math.max(0, Eu - 1e4), this.to = Math.min(uu.doc.length, Eu + 1e4)
      }
      reset(uu) {
        this.resetRange(uu), this.editContext.updateText(0, this.editContext.text.length, uu.doc.sliceString(this.from, this.to)), this.setSelection(uu)
      }
      revertPending(uu) {
        let Eu = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(Eu.from), this.toContextPos(Eu.from + Eu.insert.length), uu.doc.sliceString(Eu.from, Eu.to))
      }
      setSelection(uu) {
        let {
          main: Eu
        } = uu.selection, ju = this.toContextPos(Math.max(this.from, Math.min(this.to, Eu.anchor))), su = this.toContextPos(Eu.head);
        this.editContext.selectionStart == ju && this.editContext.selectionEnd == su || this.editContext.updateSelection(ju, su)
      }
      rangeIsValid(uu) {
        let {
          head: Eu
        } = uu.selection.main;
        return !(this.from > 0 && Eu - this.from < 500 || this.to < uu.doc.length && this.to - Eu < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        uu = Math.min(uu, Eu);
        let ju = this.composing;
        return ju && ju.drifted ? ju.editorBase + (uu - ju.contextBase) : uu + this.from
      }
      toContextPos(uu) {
        let Eu = this.composing;
        return Eu && Eu.drifted ? Eu.contextBase + (uu - Eu.editorBase) : uu - this.from
      }
      destroy() {
        for (let uu in this.handlers) this.editContext.removeEventListener(uu, this.handlers[uu])
      }
    }
    class PU {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get Q8() {
        return this.viewState.Q8
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
        var Eu;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), uu.parent && uu.parent.appendChild(this.dom);
        let {
          dispatch: ju
        } = uu;
        this.dispatchTransactions = uu.dispatchTransactions || ju && (uu => uu.forEach((uu => ju(uu, this)))) || (uu => this.update(uu)), this.dispatch = this.dispatch.bind(this), this._root = uu.root || function(uu) {
          for (; uu;) {
            if (uu && (9 == uu.nodeType || 11 == uu.nodeType && uu.host)) return uu;
            uu = uu.assignedSlot || uu.parentNode
          }
          return null
        }(uu.parent) || document, this.viewState = new ZU(this, uu.state || su.o.create(uu)), uu.scrollTo && uu.scrollTo.is(LE) && (this.viewState.scrollTarget = uu.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(AE).map((uu => new yE(uu)));
        for (let su of this.plugins) su.update(this);
        this.observer = new wU(this), this.inputState = new fs(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Qj(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (Eu = document.fonts) || void 0 === Eu ? void 0 : Eu.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        let Uu = 1 == Eu.length && Eu[0] instanceof su.Q ? Eu : 1 == Eu.length && Array.isArray(Eu[0]) ? Eu[0] : [this.state.update(...Eu)];
        this.dispatchTransactions(Uu, this)
      }
      update(uu) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let Eu, ju = !1,
          Uu = !1,
          Zu = this.state;
        for (let su of uu) {
          if (su.startState != Zu) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          Zu = su.state
        }
        if (this.destroyed) return void(this.viewState.state = Zu);
        let Xu = this.hasFocus,
          lu = 0,
          qu = null;
        uu.some((uu => uu.annotation(vs))) ? (this.inputState.notifiedFocused = Xu, lu = 1) : Xu != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Xu, qu = Ks(Zu, Xu), qu || (lu = 1));
        let fu = this.observer.delayedAndroidKey,
          Cu = null;
        if (fu ? (this.observer.clearDelayedAndroidKey(), Cu = this.observer.readChange(), (Cu && !this.state.doc.eq(Zu.doc) || !this.state.selection.eq(Zu.selection)) && (Cu = null)) : this.observer.clear(), Zu.facet(su.o.phrases) != this.state.facet(su.o.phrases)) return this.setState(Zu);
        Eu = Cj.create(this, Zu, uu), Eu.flags |= lu;
        let bu = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let Eu of uu) {
            if (bu && (bu = bu.map(Eu.changes)), Eu.scrollIntoView) {
              let {
                main: uu
              } = Eu.state.selection, {
                x: ju,
                y: Uu
              } = this.state.facet(PU.cursorScrollMargin);
              bu = new BE(uu.empty ? uu : su.l.cursor(uu.head, uu.head > uu.anchor ? -1 : 1), "nearest", "nearest", Uu, ju)
            }
            for (let uu of Eu.effects) uu.is(LE) && (bu = uu.value.clip(this.state))
          }
          this.viewState.update(Eu, bu), this.bidiCache = mU.update(this.bidiCache, Eu.changes), Eu.empty || (this.updatePlugins(Eu), this.inputState.update(Eu)), ju = this.docView.update(Eu), this.state.facet(qj) != this.styleModules && this.mountStyles(), Uu = this.updateAttrs(), this.showAnnouncements(uu), this.docView.updateSelection(ju, uu.some((uu => uu.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (Eu.startState.facet(NU) != Eu.state.facet(NU) && (this.viewState.mustMeasureContent = !0), (ju || Uu || bu || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), ju && this.docViewUpdate(), !Eu.empty)
          for (let su of this.state.facet(VE)) try {
            su(Eu)
          } catch (cu) {
            xE(this.state, cu, "update listener")
          }(qu || Cu) && Promise.resolve().then((() => {
            qu && this.state == qu.startState && this.dispatch(qu), Cu && !Zs(this, Cu) && fu.force && UE(this.contentDOM, fu.key, fu.keyCode)
          }))
      }
      setState(uu) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = uu);
        this.updateState = 2;
        let Eu = this.hasFocus;
        try {
          for (let uu of this.plugins) uu.destroy(this);
          this.viewState = new ZU(this, uu), this.plugins = uu.facet(AE).map((uu => new yE(uu))), this.pluginMap.clear();
          for (let uu of this.plugins) uu.update(this);
          this.docView.destroy(), this.docView = new Qj(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        Eu && this.focus(), this.requestMeasure()
      }
      updatePlugins(uu) {
        let Eu = uu.startState.facet(AE),
          ju = uu.state.facet(AE);
        if (Eu != ju) {
          let su = [];
          for (let Uu of ju) {
            let ju = Eu.indexOf(Uu);
            if (ju < 0) su.push(new yE(Uu));
            else {
              let Eu = this.plugins[ju];
              Eu.mustUpdate = uu, su.push(Eu)
            }
          }
          for (let Eu of this.plugins) Eu.mustUpdate != uu && Eu.destroy(this);
          this.plugins = su, this.pluginMap.clear()
        } else
          for (let su of this.plugins) su.mustUpdate = uu;
        for (let su = 0; su < this.plugins.length; su++) this.plugins[su].update(this);
        Eu != ju && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let Eu of this.plugins) {
          let ju = Eu.value;
          if (ju && ju.docViewUpdate) try {
            ju.docViewUpdate(this)
          } catch (uu) {
            xE(this.state, uu, "doc view update listener")
          }
        }
      }
      measure() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, uu && this.observer.forceFlush();
        let Eu = null,
          ju = this.viewState.scrollParent,
          su = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Uu,
            scrollAnchorHeight: Zu
          } = this.viewState;
        Math.abs(su - this.viewState.scrollOffset) > 1 && (Zu = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let uu = 0;; uu++) {
            if (Zu < 0)
              if (ZE(ju || this.win)) Uu = -1, Zu = this.viewState.heightMap.height;
              else {
                let uu = this.viewState.scrollAnchorAt(su);
                Uu = uu.from, Zu = uu.top
              } this.updateState = 1;
            let lu = this.viewState.measure();
            if (!lu && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (uu > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let qu = [];
            4 & lu || ([this.measureRequests, qu] = [qu, this.measureRequests]);
            let fu = qu.map((uu => {
                try {
                  return uu.read(this)
                } catch (Eu) {
                  return xE(this.state, Eu), kU
                }
              })),
              Cu = Cj.create(this, this.state, []),
              bu = !1;
            Cu.flags |= lu, Eu ? Eu.flags |= lu : Eu = Cu, this.updateState = 2, Cu.empty || (this.updatePlugins(Cu), this.inputState.update(Cu), this.updateAttrs(), bu = this.docView.update(Cu), bu && this.docViewUpdate());
            for (let uu = 0; uu < qu.length; uu++)
              if (fu[uu] != kU) try {
                let Eu = qu[uu];
                Eu.write && Eu.write(fu[uu], this)
              } catch (Xu) {
                xE(this.state, Xu)
              }
            if (bu && this.docView.updateSelection(!0), !Cu.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, Zu = -1;
                  continue
                } {
                  let uu = ((Uu < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Uu).top) - Zu) / this.scaleY;
                  if ((uu > 1 || uu < -1) && (ju == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    su += uu, ju ? ju.scrollTop += uu : this.win.scrollBy(0, uu), Zu = -1;
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
        if (Eu && !Eu.empty)
          for (let lu of this.state.facet(VE)) lu(Eu)
      }
      get themeClasses() {
        return YU + " " + (this.state.facet(OU) ? DU : hU) + " " + this.state.facet(NU)
      }
      updateAttrs() {
        let uu = vU(this, zE, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          Eu = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(TE) ? "true" : "false",
            class: "cm-content",
            style: `${wu.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (Eu["aria-readonly"] = "true"), vU(this, RE, Eu);
        let ju = this.observer.ignore((() => {
          let ju = Pu(this.contentDOM, this.contentAttrs, Eu),
            su = Pu(this.dom, this.editorAttrs, uu);
          return ju || su
        }));
        return this.editorAttrs = uu, this.contentAttrs = Eu, ju
      }
      showAnnouncements(uu) {
        let Eu = !0;
        for (let ju of uu)
          for (let uu of ju.effects)
            if (uu.is(PU.announce)) {
              Eu && (this.announceDOM.textContent = ""), Eu = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = uu.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(qj);
        let uu = this.state.facet(PU.cspNonce);
        Uu.e.mount(this.root, this.styleModules.concat(eU).reverse(), uu ? {
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
            for (let Eu = 0; Eu < this.measureRequests.length; Eu++)
              if (this.measureRequests[Eu].key === uu.key) return void(this.measureRequests[Eu] = uu);
          this.measureRequests.push(uu)
        }
      }
      plugin(uu) {
        let Eu = this.pluginMap.get(uu);
        return (void 0 === Eu || Eu && Eu.plugin != uu) && this.pluginMap.set(uu, Eu = this.plugins.find((Eu => Eu.plugin == uu)) || null), Eu && Eu.update(this).value
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
      moveByChar(uu, Eu, ju) {
        return Tj(this, uu, Lj(this, uu, Eu, ju))
      }
      moveByGroup(uu, Eu) {
        return Tj(this, uu, Lj(this, uu, Eu, (Eu => function(uu, Eu, ju) {
          let Uu = uu.state.charCategorizer(Eu),
            Zu = Uu(ju);
          return uu => {
            let Eu = Uu(uu);
            return Zu == su.i.Space && (Zu = Eu), Zu == Eu
          }
        }(this, uu.head, Eu))))
      }
      visualLineSide(uu, Eu) {
        let ju = this.bidiSpans(uu),
          Uu = this.textDirectionAt(uu.from),
          Zu = ju[Eu ? ju.length - 1 : 0];
        return su.l.cursor(Zu.side(Eu, Uu) + uu.from, Zu.forward(!Eu, Uu) ? 1 : -1)
      }
      moveToLineBoundary(uu, Eu) {
        return function(uu, Eu, ju, Uu) {
          let Zu = Bj(uu, Eu.head, Eu.assoc || -1),
            Xu = Uu && Zu.type == mu.Text && (uu.lineWrapping || Zu.widgetLineBreaks) ? uu.coordsAtPos(Eu.assoc < 0 && Eu.head > Zu.from ? Eu.head - 1 : Eu.head) : null;
          if (Xu) {
            let Eu = uu.dom.getBoundingClientRect(),
              Uu = uu.textDirectionAt(Zu.from),
              lu = uu.posAtCoords({
                x: ju == (Uu == fE.LTR) ? Eu.right - 1 : Eu.left + 1,
                y: (Xu.top + Xu.bottom) / 2
              });
            if (null != lu) return su.l.cursor(lu, ju ? -1 : 1)
          }
          return su.l.cursor(ju ? Zu.to : Zu.from, ju ? -1 : 1)
        }(this, uu, Eu, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(uu, Eu, ju) {
        return Tj(this, uu, function(uu, Eu, ju, Uu) {
          let Zu = Eu.head,
            Xu = ju ? 1 : -1;
          if (Zu == (ju ? uu.state.doc.length : 0)) return su.l.cursor(Zu, Eu.assoc);
          let lu, qu = Eu.goalColumn,
            fu = uu.contentDOM.getBoundingClientRect(),
            Cu = uu.coordsAtPos(Zu, Eu.assoc || ((Eu.empty ? ju : Eu.head == Eu.from) ? 1 : -1)),
            bu = uu.documentTop;
          if (Cu) null == qu && (qu = Cu.left - fu.left), lu = Xu < 0 ? Cu.top : Cu.bottom;
          else {
            let Eu = uu.viewState.lineBlockAt(Zu);
            null == qu && (qu = Math.min(fu.right - fu.left, uu.defaultCharacterWidth * (Zu - Eu.from))), lu = (Xu < 0 ? Eu.top : Eu.bottom) + bu
          }
          let cu = fu.left + qu,
            Nu = uu.viewState.heightOracle.textHeight >> 1,
            Ou = null !== Uu && void 0 !== Uu ? Uu : Nu;
          for (let Yu = 0;; Yu += Nu) {
            let Eu = lu + (Ou + Yu) * Xu,
              Uu = Aj(uu, {
                x: cu,
                y: Eu
              }, !1, Xu);
            if (ju ? Eu > fu.bottom : Eu < fu.top) return su.l.cursor(Uu.pos, Uu.assoc);
            let Zu = uu.coordsAtPos(Uu.pos, Uu.assoc),
              Cu = Zu ? (Zu.top + Zu.bottom) / 2 : 0;
            if (!Zu || (ju ? Cu > lu : Cu < lu)) return su.l.cursor(Uu.pos, Uu.assoc, void 0, qu)
          }
        }(this, uu, Eu, ju))
      }
      domAtPos(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(uu, Eu)
      }
      posAtDOM(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(uu, Eu)
      }
      posAtCoords(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let ju = Aj(this, uu, Eu);
        return ju && ju.pos
      }
      posAndSideAtCoords(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Aj(this, uu, Eu)
      }
      coordsAtPos(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let ju = this.docView.coordsAt(uu, Eu);
        if (!ju || ju.left == ju.right) return ju;
        let su = this.state.doc.lineAt(uu),
          Uu = this.bidiSpans(su);
        return Au(ju, Uu[ME.find(Uu, uu - su.from, -1, Eu)].dir == fE.LTR == Eu > 0)
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
        return !this.state.facet(SE) || uu < this.viewport.from || uu > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(uu))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(uu) {
        if (uu.length > oU) return dE(uu.length);
        let Eu, ju = this.textDirectionAt(uu.from);
        for (let Uu of this.bidiCache)
          if (Uu.from == uu.from && Uu.dir == ju && (Uu.fresh || eE(Uu.isolates, Eu = Zj(this, uu)))) return Uu.order;
        Eu || (Eu = Zj(this, uu));
        let su = JE(uu.text, ju, Eu);
        return this.bidiCache.push(new mU(uu.from, uu.to, ju, Eu, !0, su)), su
      }
      get hasFocus() {
        var uu;
        return (this.dom.ownerDocument.hasFocus() || wu.safari && (null === (uu = this.inputState) || void 0 === uu ? void 0 : uu.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          jE(this.contentDOM), this.docView.updateSelection()
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
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var ju, Uu, Zu, Xu;
        return LE.of(new BE("number" == typeof uu ? su.l.cursor(uu) : uu, null !== (ju = Eu.y) && void 0 !== ju ? ju : "nearest", null !== (Uu = Eu.x) && void 0 !== Uu ? Uu : "nearest", null !== (Zu = Eu.yMargin) && void 0 !== Zu ? Zu : 5, null !== (Xu = Eu.xMargin) && void 0 !== Xu ? Xu : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: uu,
          scrollLeft: Eu
        } = this.scrollDOM, ju = this.viewState.scrollAnchorAt(uu);
        return LE.of(new BE(su.l.cursor(ju.from), "start", "start", ju.top - uu, Eu, !0))
      }
      setTabFocusMode(uu) {
        null == uu ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof uu ? this.inputState.tabFocusMode = uu ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + uu)
      }
      static domEventHandlers(uu) {
        return nE.define((() => ({})), {
          eventHandlers: uu
        })
      }
      static domEventObservers(uu) {
        return nE.define((() => ({})), {
          eventObservers: uu
        })
      }
      static theme(uu, Eu) {
        let ju = Uu.e.newName(),
          su = [NU.of(ju), qj.of(MU(`.${ju}`, uu))];
        return Eu && Eu.dark && su.push(OU.of(!0)), su
      }
      static baseTheme(uu) {
        return su.y.lowest(qj.of(MU("." + YU, uu, gU)))
      }
      static findFromDOM(uu) {
        var Eu;
        let ju = uu.querySelector(".cm-content"),
          su = ju && cj.get(ju) || cj.get(uu);
        return (null === (Eu = null === su || void 0 === su ? void 0 : su.root) || void 0 === Eu ? void 0 : Eu.view) || null
      }
    }
    PU.styleModule = qj, PU.inputHandler = rE, PU.clipboardInputFilter = iE, PU.clipboardOutputFilter = WE, PU.scrollHandler = FE, PU.focusChangeEffect = QE, PU.perLineTextDirection = SE, PU.exceptionSink = KE, PU.updateListener = VE, PU.editable = TE, PU.mouseSelectionStyle = vE, PU.dragMovesSelection = mE, PU.clickAddsSelectionRange = kE, PU.Cs = uj, PU.blockWrappers = Ej, PU.outerDecorations = jj, PU.atomicRanges = sj, PU.bidiIsolatedRanges = Uj, PU.cursorScrollMargin = su.r.define({
      combine: uu => {
        let Eu = 5,
          ju = 5;
        for (let su of uu) "number" == typeof su ? Eu = ju = su : ({
          x: Eu,
          y: ju
        } = su);
        return {
          x: Eu,
          y: ju
        }
      }
    }), PU.scrollMargins = Xj, PU.darkTheme = OU, PU.cspNonce = su.r.define({
      combine: uu => uu.length ? uu[0] : ""
    }), PU.contentAttributes = RE, PU.editorAttributes = zE, PU.lineWrapping = PU.contentAttributes.of({
      class: "cm-lineWrapping"
    }), PU.announce = su.L.define();
    const oU = 4096,
      kU = {};
    class mU {
      constructor(uu, Eu, ju, su, Uu, Zu) {
        this.from = uu, this.to = Eu, this.dir = ju, this.isolates = su, this.fresh = Uu, this.order = Zu
      }
      static update(uu, Eu) {
        if (Eu.empty && !uu.some((uu => uu.fresh))) return uu;
        let ju = [],
          su = uu.length ? uu[uu.length - 1].dir : fE.LTR;
        for (let Uu = Math.max(0, uu.length - 10); Uu < uu.length; Uu++) {
          let Zu = uu[Uu];
          Zu.dir != su || Eu.touchesRange(Zu.from, Zu.to) || ju.push(new mU(Eu.mapPos(Zu.from, 1), Eu.mapPos(Zu.to, -1), Zu.dir, Zu.isolates, !1, Zu.order))
        }
        return ju
      }
    }

    function vU(uu, Eu, ju) {
      for (let su = uu.state.facet(Eu), Uu = su.length - 1; Uu >= 0; Uu--) {
        let Eu = su[Uu],
          Zu = "function" == typeof Eu ? Eu(uu) : Eu;
        Zu && Ju(Zu, ju)
      }
      return ju
    }
    const KU = wu.mac ? "mac" : wu.windows ? "win" : wu.linux ? "linux" : "key";

    function VU(uu, Eu, ju) {
      return Eu.altKey && (uu = "Alt-" + uu), Eu.ctrlKey && (uu = "Ctrl-" + uu), Eu.metaKey && (uu = "Meta-" + uu), !1 !== ju && Eu.shiftKey && (uu = "Shift-" + uu), uu
    }
    const rU = su.y.default(PU.domEventHandlers({
        keydown: (uu, Eu) => LU(WU(Eu.state), uu, Eu, "editor")
      })),
      QU = su.r.define({
        enables: rU
      }),
      iU = new WeakMap;

    function WU(uu) {
      let Eu = uu.facet(QU),
        ju = iU.get(Eu);
      return ju || iU.set(Eu, ju = function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KU,
          ju = Object.create(null),
          su = Object.create(null),
          Uu = (uu, Eu) => {
            let ju = su[uu];
            if (null == ju) su[uu] = Eu;
            else if (ju != Eu) throw new Error("Key binding " + uu + " is used both as a regular binding and as a multi-stroke prefix")
          },
          Zu = (uu, su, Zu, Xu, lu) => {
            var qu, fu;
            let Cu = ju[uu] || (ju[uu] = Object.create(null)),
              bu = su.split(/ (?!$)/).map((uu => function(uu, Eu) {
                const ju = uu.split(/-(?!$)/);
                let su, Uu, Zu, Xu, lu = ju[ju.length - 1];
                "Space" == lu && (lu = " ");
                for (let qu = 0; qu < ju.length - 1; ++qu) {
                  const uu = ju[qu];
                  if (/^(cmd|meta|m)$/i.test(uu)) Xu = !0;
                  else if (/^a(lt)?$/i.test(uu)) su = !0;
                  else if (/^(c|ctrl|control)$/i.test(uu)) Uu = !0;
                  else if (/^s(hift)?$/i.test(uu)) Zu = !0;
                  else {
                    if (!/^mod$/i.test(uu)) throw new Error("Unrecognized modifier name: " + uu);
                    "mac" == Eu ? Xu = !0 : Uu = !0
                  }
                }
                return su && (lu = "Alt-" + lu), Uu && (lu = "Ctrl-" + lu), Xu && (lu = "Meta-" + lu), Zu && (lu = "Shift-" + lu), lu
              }(uu, Eu)));
            for (let Eu = 1; Eu < bu.length; Eu++) {
              let ju = bu.slice(0, Eu).join(" ");
              Uu(ju, !0), Cu[ju] || (Cu[ju] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [Eu => {
                  let su = IU = {
                    view: Eu,
                    prefix: ju,
                    scope: uu
                  };
                  return setTimeout((() => {
                    IU == su && (IU = null)
                  }), FU), !0
                }]
              })
            }
            let cu = bu.join(" ");
            Uu(cu, !1);
            let Nu = Cu[cu] || (Cu[cu] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (fu = null === (qu = Cu._any) || void 0 === qu ? void 0 : qu.run) || void 0 === fu ? void 0 : fu.slice()) || []
            });
            Zu && Nu.run.push(Zu), Xu && (Nu.preventDefault = !0), lu && (Nu.stopPropagation = !0)
          };
        for (let Xu of uu) {
          let uu = Xu.scope ? Xu.scope.split(" ") : ["editor"];
          if (Xu.any)
            for (let Eu of uu) {
              let uu = ju[Eu] || (ju[Eu] = Object.create(null));
              uu._any || (uu._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: su
              } = Xu;
              for (let Eu in uu) uu[Eu].run.push((uu => su(uu, BU)))
            }
          let su = Xu[Eu] || Xu.key;
          if (su)
            for (let Eu of uu) Zu(Eu, su, Xu.run, Xu.preventDefault, Xu.stopPropagation), Xu.shift && Zu(Eu, "Shift-" + su, Xu.shift, Xu.preventDefault, Xu.stopPropagation)
        }
        return ju
      }(Eu.reduce(((uu, Eu) => uu.concat(Eu)), []))), ju
    }

    function SU(uu, Eu, ju) {
      return LU(WU(uu.state), Eu, uu, ju)
    }
    let IU = null;
    const FU = 4e3;
    let BU = null;

    function LU(uu, Eu, ju, Uu) {
      BU = Eu;
      let fu = function(uu) {
          var Eu = !(lu && uu.metaKey && uu.shiftKey && !uu.ctrlKey && !uu.altKey || qu && uu.shiftKey && uu.key && 1 == uu.key.length || "Unidentified" == uu.key) && uu.key || (uu.shiftKey ? Xu : Zu)[uu.keyCode] || uu.key || "Unidentified";
          return "Esc" == Eu && (Eu = "Escape"), "Del" == Eu && (Eu = "Delete"), "Left" == Eu && (Eu = "ArrowLeft"), "Up" == Eu && (Eu = "ArrowUp"), "Right" == Eu && (Eu = "ArrowRight"), "Down" == Eu && (Eu = "ArrowDown"), Eu
        }(Eu),
        Cu = (0, su.T)(fu, 0),
        bu = (0, su.X)(Cu) == fu.length && " " != fu,
        cu = "",
        Nu = !1,
        Ou = !1,
        Yu = !1;
      IU && IU.view == ju && IU.scope == Uu && (cu = IU.prefix + " ", Os.indexOf(Eu.keyCode) < 0 && (Ou = !0, IU = null));
      let hu, Du, gu = new Set,
        Mu = uu => {
          if (uu) {
            for (let Eu of uu.run)
              if (!gu.has(Eu) && (gu.add(Eu), Eu(ju))) return uu.stopPropagation && (Yu = !0), !0;
            uu.preventDefault && (uu.stopPropagation && (Yu = !0), Ou = !0)
          }
          return !1
        },
        eu = uu[Uu];
      return eu && (Mu(eu[cu + VU(fu, Eu, !bu)]) ? Nu = !0 : !bu || !(Eu.altKey || Eu.metaKey || Eu.ctrlKey) || wu.windows && Eu.ctrlKey && Eu.altKey || wu.mac && Eu.altKey && !Eu.ctrlKey && !Eu.metaKey || !(hu = Zu[Eu.keyCode]) || hu == fu ? bu && Eu.shiftKey && Mu(eu[cu + VU(fu, Eu, !0)]) && (Nu = !0) : (Mu(eu[cu + VU(hu, Eu, !0)]) || Eu.shiftKey && (Du = Xu[Eu.keyCode]) != fu && Du != hu && Mu(eu[cu + VU(Du, Eu, !1)])) && (Nu = !0), !Nu && Mu(eu._any) && (Nu = !0)), Ou && (Nu = !0), Nu && Yu && Eu.stopPropagation(), BU = null, Nu
    }
    class tU {
      constructor(uu, Eu, ju, su, Uu) {
        this.className = uu, this.left = Eu, this.top = ju, this.width = su, this.height = Uu
      }
      draw() {
        let uu = document.createElement("div");
        return uu.className = this.className, this.adjust(uu), uu
      }
      update(uu, Eu) {
        return Eu.className == this.className && (this.adjust(uu), !0)
      }
      adjust(uu) {
        uu.style.left = this.left + "px", uu.style.top = this.top + "px", null != this.width && (uu.style.width = this.width + "px"), uu.style.height = this.height + "px"
      }
      eq(uu) {
        return this.left == uu.left && this.top == uu.top && this.width == uu.width && this.height == uu.height && this.className == uu.className
      }
      static forRange(uu, Eu, ju) {
        if (ju.empty) {
          let su = uu.coordsAtPos(ju.head, ju.assoc || 1);
          if (!su) return [];
          let Uu = xU(uu);
          return [new tU(Eu, su.left - Uu.left, su.top - Uu.top, null, su.bottom - su.top)]
        }
        return function(uu, Eu, ju) {
          if (ju.to <= uu.viewport.from || ju.from >= uu.viewport.to) return [];
          let su = Math.max(ju.from, uu.viewport.from),
            Uu = Math.min(ju.to, uu.viewport.to),
            Zu = uu.textDirection == fE.LTR,
            Xu = uu.contentDOM,
            lu = Xu.getBoundingClientRect(),
            qu = xU(uu),
            fu = Xu.querySelector(".cm-line"),
            Cu = fu && window.getComputedStyle(fu),
            bu = lu.left + (Cu ? parseInt(Cu.paddingLeft) + Math.min(0, parseInt(Cu.textIndent)) : 0),
            cu = lu.right - (Cu ? parseInt(Cu.paddingRight) : 0),
            Nu = Bj(uu, su, 1),
            Ou = Bj(uu, Uu, -1),
            Yu = Nu.type == mu.Text ? Nu : null,
            hu = Ou.type == mu.Text ? Ou : null;
          Yu && (uu.lineWrapping || Nu.widgetLineBreaks) && (Yu = TU(uu, su, 1, Yu));
          hu && (uu.lineWrapping || Ou.widgetLineBreaks) && (hu = TU(uu, Uu, -1, hu));
          if (Yu && hu && Yu.from == hu.from && Yu.to == hu.to) return gu(Mu(ju.from, ju.to, Yu));
          {
            let Eu = Yu ? Mu(ju.from, null, Yu) : eu(Nu, !1),
              su = hu ? Mu(null, ju.to, hu) : eu(Ou, !0),
              Uu = [];
            return (Yu || Nu).to < (hu || Ou).from - (Yu && hu ? 1 : 0) || Nu.widgetLineBreaks > 1 && Eu.bottom + uu.defaultLineHeight / 2 < su.top ? Uu.push(Du(bu, Eu.bottom, cu, su.top)) : Eu.bottom < su.top && uu.elementAtHeight((Eu.bottom + su.top) / 2).type == mu.Text && (Eu.bottom = su.top = (Eu.bottom + su.top) / 2), gu(Eu).concat(Uu).concat(gu(su))
          }

          function Du(uu, ju, su, Uu) {
            return new tU(Eu, uu - qu.left, ju - qu.top, Math.max(0, su - uu), Uu - ju)
          }

          function gu(uu) {
            let {
              top: Eu,
              bottom: ju,
              horizontal: su
            } = uu, Uu = [];
            for (let Zu = 0; Zu < su.length; Zu += 2) Uu.push(Du(su[Zu], Eu, su[Zu + 1], ju));
            return Uu
          }

          function Mu(Eu, ju, su) {
            let Uu = 1e9,
              Xu = -1e9,
              lu = [];

            function qu(Eu, ju, qu, fu, Cu) {
              let Nu = uu.coordsAtPos(Eu, Eu == su.to ? -2 : 2),
                Ou = uu.coordsAtPos(qu, qu == su.from ? 2 : -2);
              Nu && Ou && (Uu = Math.min(Nu.top, Ou.top, Uu), Xu = Math.max(Nu.bottom, Ou.bottom, Xu), Cu == fE.LTR ? lu.push(Zu && ju ? bu : Nu.left, Zu && fu ? cu : Ou.right) : lu.push(!Zu && fu ? bu : Ou.left, !Zu && ju ? cu : Nu.right))
            }
            let fu = null !== Eu && void 0 !== Eu ? Eu : su.from,
              Cu = null !== ju && void 0 !== ju ? ju : su.to;
            for (let Zu of uu.Q8)
              if (Zu.to > fu && Zu.from < Cu)
                for (let su = Math.max(Zu.from, fu), Uu = Math.min(Zu.to, Cu);;) {
                  let Zu = uu.state.doc.lineAt(su);
                  for (let Xu of uu.bidiSpans(Zu)) {
                    let uu = Xu.from + Zu.from,
                      lu = Xu.to + Zu.from;
                    if (uu >= Uu) break;
                    lu > su && qu(Math.max(uu, su), null == Eu && uu <= fu, Math.min(lu, Uu), null == ju && lu >= Cu, Xu.dir)
                  }
                  if (su = Zu.to + 1, su >= Uu) break
                }
            return 0 == lu.length && qu(fu, null == Eu, Cu, null == ju, uu.textDirection), {
              top: Uu,
              bottom: Xu,
              horizontal: lu
            }
          }

          function eu(uu, Eu) {
            let ju = lu.top + (Eu ? uu.top : uu.bottom);
            return {
              top: ju,
              bottom: ju,
              horizontal: []
            }
          }
        }(uu, Eu, ju)
      }
    }

    function xU(uu) {
      let Eu = uu.scrollDOM.getBoundingClientRect();
      return {
        left: (uu.textDirection == fE.LTR ? Eu.left : Eu.right - uu.scrollDOM.clientWidth * uu.scaleX) - uu.scrollDOM.scrollLeft * uu.scaleX,
        top: Eu.top - uu.scrollDOM.scrollTop * uu.scaleY
      }
    }

    function TU(uu, Eu, ju, su) {
      let Uu = uu.coordsAtPos(Eu, 2 * ju);
      if (!Uu) return su;
      let Zu = uu.dom.getBoundingClientRect(),
        Xu = (Uu.top + Uu.bottom) / 2,
        lu = uu.posAtCoords({
          x: Zu.left + 1,
          y: Xu
        }),
        qu = uu.posAtCoords({
          x: Zu.right - 1,
          y: Xu
        });
      return null == lu || null == qu ? su : {
        from: Math.max(su.from, Math.min(lu, qu)),
        to: Math.min(su.to, Math.max(lu, qu))
      }
    }
    class HU {
      constructor(uu, Eu) {
        this.view = uu, this.layer = Eu, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = uu.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), Eu.above && this.dom.classList.add("cm-layer-above"), Eu.class && this.dom.classList.add(Eu.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(uu.state), uu.requestMeasure(this.measureReq), Eu.mount && Eu.mount(this.dom, uu)
      }
      update(uu) {
        uu.startState.facet(AU) != uu.state.facet(AU) && this.setOrder(uu.state), (this.layer.update(uu, this.dom) || uu.geometryChanged) && (this.scale(), uu.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(uu) {
        !1 !== this.layer.updateOnDocViewUpdate && uu.requestMeasure(this.measureReq)
      }
      setOrder(uu) {
        let Eu = 0,
          ju = uu.facet(AU);
        for (; Eu < ju.length && ju[Eu] != this.layer;) Eu++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - Eu)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: uu,
          scaleY: Eu
        } = this.view;
        uu == this.scaleX && Eu == this.scaleY || (this.scaleX = uu, this.scaleY = Eu, this.dom.style.transform = `scale(${1/uu}, ${1/Eu})`)
      }
      draw(uu) {
        if (uu.length != this.drawn.length || uu.some(((uu, Eu) => {
            return ju = uu, su = this.drawn[Eu], !(ju.constructor == su.constructor && ju.eq(su));
            var ju, su
          }))) {
          let Eu = this.dom.firstChild,
            ju = 0;
          for (let su of uu) su.update && Eu && su.constructor && this.drawn[ju].constructor && su.update(Eu, this.drawn[ju]) ? (Eu = Eu.nextSibling, ju++) : this.dom.insertBefore(su.draw(), Eu);
          for (; Eu;) {
            let uu = Eu.nextSibling;
            Eu.remove(), Eu = uu
          }
          this.drawn = uu, wu.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const AU = su.r.define();

    function nU(uu) {
      return [nE.define((Eu => new HU(Eu, uu))), AU.of(uu)]
    }
    const yU = su.r.define({
      combine: uu => (0, su.Z)(uu, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (uu, Eu) => Math.min(uu, Eu),
        drawRangeCursor: (uu, Eu) => uu || Eu
      })
    });

    function zU() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [yU.of(uu), uZ, jZ, sZ, IE.of(!0)]
    }

    function RU(uu) {
      return uu.startState.facet(yU) != uu.state.facet(yU)
    }
    const uZ = nU({
      above: !0,
      markers(uu) {
        let {
          state: Eu
        } = uu, ju = Eu.facet(yU), Uu = [];
        for (let Zu of Eu.selection.HY) {
          let Xu = Zu == Eu.selection.main;
          if (Zu.empty || ju.drawRangeCursor && !(Xu && wu.ios && ju.iosSelectionHandles)) {
            let Eu = Xu ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              ju = Zu.empty ? Zu : su.l.cursor(Zu.head, Zu.assoc);
            for (let su of tU.forRange(uu, Eu, ju)) Uu.push(su)
          }
        }
        return Uu
      },
      update(uu, Eu) {
        uu.transactions.some((uu => uu.selection)) && (Eu.style.animationName = "cm-blink" == Eu.style.animationName ? "cm-blink2" : "cm-blink");
        let ju = RU(uu);
        return ju && EZ(uu.state, Eu), uu.docChanged || uu.selectionSet || ju
      },
      mount(uu, Eu) {
        EZ(Eu.state, uu)
      },
      class: "cm-cursorLayer"
    });

    function EZ(uu, Eu) {
      Eu.style.animationDuration = uu.facet(yU).cursorBlinkRate + "ms"
    }
    const jZ = nU({
        above: !1,
        markers(uu) {
          let Eu = [],
            {
              main: ju,
              HY: Uu
            } = uu.state.selection;
          for (let su of Uu)
            if (!su.empty)
              for (let ju of tU.forRange(uu, "cm-selectionBackground", su)) Eu.push(ju);
          if (wu.ios && !ju.empty && uu.state.facet(yU).iosSelectionHandles) {
            for (let Uu of tU.forRange(uu, "cm-selectionHandle cm-selectionHandle-start", su.l.cursor(ju.from, 1))) Eu.push(Uu);
            for (let Uu of tU.forRange(uu, "cm-selectionHandle cm-selectionHandle-end", su.l.cursor(ju.to, 1))) Eu.push(Uu)
          }
          return Eu
        },
        update: (uu, Eu) => uu.docChanged || uu.selectionSet || uu.viewportChanged || RU(uu),
        class: "cm-selectionLayer"
      }),
      sZ = su.y.highest(PU.theme({
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
      UZ = su.L.define({
        map: (uu, Eu) => null == uu ? null : Eu.mapPos(uu)
      }),
      ZZ = su.N.define({
        create: () => null,
        update: (uu, Eu) => (null != uu && (uu = Eu.changes.mapPos(uu)), Eu.effects.reduce(((uu, Eu) => Eu.is(UZ) ? Eu.value : uu), uu))
      }),
      XZ = nE.fromClass(class {
        constructor(uu) {
          this.view = uu, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(uu) {
          var Eu;
          let ju = uu.state.field(ZZ);
          null == ju ? null != this.cursor && (null === (Eu = this.cursor) || void 0 === Eu || Eu.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (uu.startState.field(ZZ) != ju || uu.docChanged || uu.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: uu
          } = this, Eu = uu.state.field(ZZ), ju = null != Eu && uu.coordsAtPos(Eu);
          if (!ju) return null;
          let su = uu.scrollDOM.getBoundingClientRect();
          return {
            left: ju.left - su.left + uu.scrollDOM.scrollLeft * uu.scaleX,
            top: ju.top - su.top + uu.scrollDOM.scrollTop * uu.scaleY,
            height: ju.bottom - ju.top
          }
        }
        drawCursor(uu) {
          if (this.cursor) {
            let {
              scaleX: Eu,
              scaleY: ju
            } = this.view;
            uu ? (this.cursor.style.left = uu.left / Eu + "px", this.cursor.style.top = uu.top / ju + "px", this.cursor.style.height = uu.height / ju + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(uu) {
          this.view.state.field(ZZ) != uu && this.view.dispatch({
            effects: UZ.of(uu)
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

    function lZ() {
      return [ZZ, XZ]
    }

    function qZ(uu, Eu, ju, su, Uu) {
      Eu.lastIndex = 0;
      for (let Zu, Xu = uu.iterRange(ju, su), lu = ju; !Xu.next().done; lu += Xu.value.length)
        if (!Xu.lineBreak)
          for (; Zu = Eu.exec(Xu.value);) Uu(lu + Zu.index, Zu)
    }
    class fZ {
      constructor(uu) {
        const {
          regexp: Eu,
          decoration: ju,
          decorate: su,
          boundary: Uu,
          maxLength: Zu = 1e3
        } = uu;
        if (!Eu.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = Eu, su) this.addMatch = (uu, Eu, ju, Uu) => su(Uu, ju, ju + uu[0].length, uu, Eu);
        else if ("function" == typeof ju) this.addMatch = (uu, Eu, su, Uu) => {
          let Zu = ju(uu, Eu, su);
          Zu && Uu(su, su + uu[0].length, Zu)
        };
        else {
          if (!ju) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (uu, Eu, su, Uu) => Uu(su, su + uu[0].length, ju)
        }
        this.boundary = Uu, this.maxLength = Zu
      }
      createDeco(uu) {
        let Eu = new su.C,
          ju = Eu.add.bind(Eu);
        for (let {
            from: su,
            to: Uu
          }
          of
          function(uu, Eu) {
            let ju = uu.Q8;
            if (1 == ju.length && ju[0].from == uu.viewport.from && ju[0].to == uu.viewport.to) return ju;
            let su = [];
            for (let {
                from: Uu,
                to: Zu
              }
              of ju) Uu = Math.max(uu.state.doc.lineAt(Uu).from, Uu - Eu), Zu = Math.min(uu.state.doc.lineAt(Zu).to, Zu + Eu), su.length && su[su.length - 1].to >= Uu ? su[su.length - 1].to = Zu : su.push({
              from: Uu,
              to: Zu
            });
            return su
          }(uu, this.maxLength)) qZ(uu.state.doc, this.regexp, su, Uu, ((Eu, su) => this.addMatch(su, uu, Eu, ju)));
        return Eu.finish()
      }
      updateDeco(uu, Eu) {
        let ju = 1e9,
          su = -1;
        return uu.docChanged && uu.changes.iterChanges(((Eu, Uu, Zu, Xu) => {
          Xu >= uu.view.viewport.from && Zu <= uu.view.viewport.to && (ju = Math.min(Zu, ju), su = Math.max(Xu, su))
        })), uu.viewportMoved || su - ju > 1e3 ? this.createDeco(uu.view) : su > -1 ? this.updateRange(uu.view, Eu.map(uu.changes), ju, su) : Eu
      }
      updateRange(uu, Eu, ju, su) {
        for (let Uu of uu.Q8) {
          let Zu = Math.max(Uu.from, ju),
            Xu = Math.min(Uu.to, su);
          if (Xu >= Zu) {
            let ju = uu.state.doc.lineAt(Zu),
              su = ju.to < Xu ? uu.state.doc.lineAt(Xu) : ju,
              lu = Math.max(Uu.from, ju.from),
              qu = Math.min(Uu.to, su.to);
            if (this.boundary) {
              for (; Zu > ju.from; Zu--)
                if (this.boundary.test(ju.text[Zu - 1 - ju.from])) {
                  lu = Zu;
                  break
                } for (; Xu < su.to; Xu++)
                if (this.boundary.test(su.text[Xu - su.from])) {
                  qu = Xu;
                  break
                }
            }
            let fu, Cu = [],
              bu = (uu, Eu, ju) => Cu.push(ju.range(uu, Eu));
            if (ju == su)
              for (this.regexp.lastIndex = lu - ju.from;
                (fu = this.regexp.exec(ju.text)) && fu.index < qu - ju.from;) this.addMatch(fu, uu, fu.index + ju.from, bu);
            else qZ(uu.state.doc, this.regexp, lu, qu, ((Eu, ju) => this.addMatch(ju, uu, Eu, bu)));
            Eu = Eu.update({
              filterFrom: lu,
              filterTo: qu,
              filter: (uu, Eu) => uu < lu || Eu > qu,
              add: Cu
            })
          }
        }
        return Eu
      }
    }
    const CZ = null != /x/.unicode ? "gu" : "g",
      bZ = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", CZ),
      cZ = {
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
    let NZ = null;
    const OZ = su.r.define({
      combine(uu) {
        let Eu = (0, su.Z)(uu, {
          render: null,
          specialChars: bZ,
          addSpecialChars: null
        });
        return (Eu.replaceTabs = ! function() {
          var uu;
          if (null == NZ && "undefined" != typeof document && document.body) {
            let Eu = document.body.style;
            NZ = null != (null !== (uu = Eu.tabSize) && void 0 !== uu ? uu : Eu.MozTabSize)
          }
          return NZ || !1
        }()) && (Eu.specialChars = new RegExp("\t|" + Eu.specialChars.source, CZ)), Eu.addSpecialChars && (Eu.specialChars = new RegExp(Eu.specialChars.source + "|" + Eu.addSpecialChars.source, CZ)), Eu
      }
    });

    function YZ() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [OZ.of(uu), hZ || (hZ = nE.fromClass(class {
        constructor(uu) {
          this.view = uu, this.Cs = vu.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(uu.state.facet(OZ)), this.Cs = this.decorator.createDeco(uu)
        }
        makeDecorator(uu) {
          return new fZ({
            regexp: uu.specialChars,
            decoration: (Eu, ju, Uu) => {
              let {
                doc: Zu
              } = ju.state, Xu = (0, su.T)(Eu[0], 0);
              if (9 == Xu) {
                let uu = Zu.lineAt(Uu),
                  Eu = ju.state.tabSize,
                  Xu = (0, su.bb)(uu.text, Eu, Uu - uu.from);
                return vu.replace({
                  widget: new gZ((Eu - Xu % Eu) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[Xu] || (this.decorationCache[Xu] = vu.replace({
                widget: new DZ(uu, Xu)
              }))
            },
            boundary: uu.replaceTabs ? void 0 : /[^]/
          })
        }
        update(uu) {
          let Eu = uu.state.facet(OZ);
          uu.startState.facet(OZ) != Eu ? (this.decorator = this.makeDecorator(Eu), this.Cs = this.decorator.createDeco(uu.view)) : this.Cs = this.decorator.updateDeco(uu, this.Cs)
        }
      }, {
        Cs: uu => uu.Cs
      }))]
    }
    let hZ = null;
    class DZ extends ku {
      constructor(uu, Eu) {
        super(), this.options = uu, this.code = Eu
      }
      eq(uu) {
        return uu.code == this.code
      }
      toDOM(uu) {
        let Eu = function(uu) {
            return uu >= 32 ? "\u2022" : 10 == uu ? "\u2424" : String.fromCharCode(9216 + uu)
          }(this.code),
          ju = uu.state.phrase("Control character") + " " + (cZ[this.code] || "0x" + this.code.toString(16)),
          su = this.options.render && this.options.render(this.code, ju, Eu);
        if (su) return su;
        let Uu = document.createElement("span");
        return Uu.textContent = Eu, Uu.title = ju, Uu.setAttribute("aria-label", ju), Uu.className = "cm-specialChar", Uu
      }
      ignoreEvent() {
        return !1
      }
    }
    class gZ extends ku {
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

    function MZ() {
      return GZ
    }
    const eZ = vu.line({
        class: "cm-activeLine"
      }),
      GZ = nE.fromClass(class {
        constructor(uu) {
          this.Cs = this.getDeco(uu)
        }
        update(uu) {
          (uu.docChanged || uu.selectionSet) && (this.Cs = this.getDeco(uu.view))
        }
        getDeco(uu) {
          let Eu = -1,
            ju = [];
          for (let su of uu.state.selection.HY) {
            let Uu = uu.lineBlockAt(su.head);
            Uu.from > Eu && (ju.push(eZ.range(Uu.from)), Eu = Uu.from)
          }
          return vu.set(ju)
        }
      }, {
        Cs: uu => uu.Cs
      });
    class pZ extends ku {
      constructor(uu) {
        super(), this.content = uu
      }
      toDOM(uu) {
        let Eu = document.createElement("span");
        return Eu.className = "cm-placeholder", Eu.style.pointerEvents = "none", Eu.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(uu) : this.content.cloneNode(!0)), Eu.setAttribute("aria-hidden", "true"), Eu
      }
      coordsAt(uu) {
        let Eu = uu.firstChild ? Bu(uu.firstChild) : [];
        if (!Eu.length) return null;
        let ju = window.getComputedStyle(uu.parentNode),
          su = Au(Eu[0], "rtl" != ju.direction),
          Uu = parseInt(ju.lineHeight);
        return su.bottom - su.top > 1.5 * Uu ? {
          left: su.left,
          right: su.right,
          top: su.top,
          bottom: su.top + Uu
        } : su
      }
      ignoreEvent() {
        return !1
      }
    }

    function wZ(uu) {
      let Eu = nE.fromClass(class {
        constructor(Eu) {
          this.view = Eu, this.placeholder = uu ? vu.set([vu.widget({
            widget: new pZ(uu),
            side: 1
          }).range(0)]) : vu.none
        }
        get Cs() {
          return this.view.state.doc.length ? vu.none : this.placeholder
        }
      }, {
        Cs: uu => uu.Cs
      });
      return "string" == typeof uu ? [Eu, PU.contentAttributes.of({
        "aria-placeholder": uu
      })] : Eu
    }
    const JZ = 2e3;

    function dZ(uu, Eu) {
      let ju = uu.posAtCoords({
          x: Eu.clientX,
          y: Eu.clientY
        }, !1),
        Uu = uu.state.doc.lineAt(ju),
        Zu = ju - Uu.from,
        Xu = Zu > JZ ? -1 : Zu == Uu.length ? function(uu, Eu) {
          let ju = uu.coordsAtPos(uu.viewport.from);
          return ju ? Math.round(Math.abs((ju.left - Eu) / uu.defaultCharacterWidth)) : -1
        }(uu, Eu.clientX) : (0, su.bb)(Uu.text, uu.state.tabSize, ju - Uu.from);
      return {
        line: Uu.number,
        col: Xu,
        off: Zu
      }
    }

    function aZ(uu, Eu) {
      let ju = dZ(uu, Eu),
        Uu = uu.state.selection;
      return ju ? {
        update(uu) {
          if (uu.docChanged) {
            let Eu = uu.changes.mapPos(uu.startState.doc.line(ju.line).from),
              su = uu.state.doc.lineAt(Eu);
            ju = {
              line: su.number,
              col: ju.col,
              off: Math.min(ju.off, su.length)
            }, Uu = Uu.map(uu.changes)
          }
        },
        get(Eu, Zu, Xu) {
          let lu = dZ(uu, Eu);
          if (!lu) return Uu;
          let qu = function(uu, Eu, ju) {
            let Uu = Math.min(Eu.line, ju.line),
              Zu = Math.max(Eu.line, ju.line),
              Xu = [];
            if (Eu.off > JZ || ju.off > JZ || Eu.col < 0 || ju.col < 0) {
              let lu = Math.min(Eu.off, ju.off),
                qu = Math.max(Eu.off, ju.off);
              for (let Eu = Uu; Eu <= Zu; Eu++) {
                let ju = uu.doc.line(Eu);
                ju.length <= qu && Xu.push(su.l.range(ju.from + lu, ju.to + qu))
              }
            } else {
              let lu = Math.min(Eu.col, ju.col),
                qu = Math.max(Eu.col, ju.col);
              for (let Eu = Uu; Eu <= Zu; Eu++) {
                let ju = uu.doc.line(Eu),
                  Uu = (0, su.gb)(ju.text, lu, uu.tabSize, !0);
                if (Uu < 0) Xu.push(su.l.cursor(ju.to));
                else {
                  let Eu = (0, su.gb)(ju.text, qu, uu.tabSize);
                  Xu.push(su.l.range(ju.from + Uu, ju.from + Eu))
                }
              }
            }
            return Xu
          }(uu.state, ju, lu);
          return qu.length ? Xu ? su.l.create(qu.concat(Uu.HY)) : su.l.create(qu) : Uu
        }
      } : null
    }

    function PZ(uu) {
      let Eu = (null === uu || void 0 === uu ? void 0 : uu.eventFilter) || (uu => uu.altKey && 0 == uu.button);
      return PU.mouseSelectionStyle.of(((uu, ju) => Eu(ju) ? aZ(uu, ju) : null))
    }
    const oZ = {
        Alt: [18, uu => !!uu.altKey],
        Control: [17, uu => !!uu.ctrlKey],
        Shift: [16, uu => !!uu.shiftKey],
        Meta: [91, uu => !!uu.metaKey]
      },
      kZ = {
        style: "cursor: crosshair"
      };

    function mZ() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [Eu, ju] = oZ[uu.key || "Alt"],
        su = nE.fromClass(class {
          constructor(uu) {
            this.view = uu, this.isDown = !1
          }
          set(uu) {
            this.isDown != uu && (this.isDown = uu, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(uu) {
              this.set(uu.keyCode == Eu || ju(uu))
            },
            keyup(uu) {
              uu.keyCode != Eu && ju(uu) || this.set(!1)
            },
            mousemove(uu) {
              this.set(ju(uu))
            }
          }
        });
      return [su, PU.contentAttributes.of((uu => {
        var Eu;
        return (null === (Eu = uu.plugin(su)) || void 0 === Eu ? void 0 : Eu.isDown) ? kZ : null
      }))]
    }
    const vZ = "-10000px";
    class KZ {
      constructor(uu, Eu, ju, su) {
        this.facet = Eu, this.createTooltipView = ju, this.removeTooltipView = su, this.input = uu.state.facet(Eu), this.tooltips = this.input.filter((uu => uu));
        let Uu = null;
        this.tooltipViews = this.tooltips.map((uu => Uu = ju(uu, Uu)))
      }
      update(uu, Eu) {
        var ju;
        let su = uu.state.facet(this.facet),
          Uu = su.filter((uu => uu));
        if (su === this.input) {
          for (let Eu of this.tooltipViews) Eu.update && Eu.update(uu);
          return !1
        }
        let Zu = [],
          Xu = Eu ? [] : null;
        for (let lu = 0; lu < Uu.length; lu++) {
          let ju = Uu[lu],
            su = -1;
          if (ju) {
            for (let uu = 0; uu < this.tooltips.length; uu++) {
              let Eu = this.tooltips[uu];
              Eu && Eu.create == ju.create && (su = uu)
            }
            if (su < 0) Zu[lu] = this.createTooltipView(ju, lu ? Zu[lu - 1] : null), Xu && (Xu[lu] = !!ju.above);
            else {
              let ju = Zu[lu] = this.tooltipViews[su];
              Xu && (Xu[lu] = Eu[su]), ju.update && ju.update(uu)
            }
          }
        }
        for (let lu of this.tooltipViews) Zu.indexOf(lu) < 0 && (this.removeTooltipView(lu), null === (ju = lu.destroy) || void 0 === ju || ju.call(lu));
        return Eu && (Xu.forEach(((uu, ju) => Eu[ju] = uu)), Eu.length = Xu.length), this.input = su, this.tooltips = Uu, this.tooltipViews = Zu, !0
      }
    }

    function VZ(uu) {
      let Eu = uu.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: Eu.clientHeight,
        right: Eu.clientWidth
      }
    }
    const rZ = su.r.define({
        combine: uu => {
          var Eu, ju, su;
          return {
            position: wu.ios ? "absolute" : (null === (Eu = uu.find((uu => uu.position))) || void 0 === Eu ? void 0 : Eu.position) || "fixed",
            parent: (null === (ju = uu.find((uu => uu.parent))) || void 0 === ju ? void 0 : ju.parent) || null,
            tooltipSpace: (null === (su = uu.find((uu => uu.tooltipSpace))) || void 0 === su ? void 0 : su.tooltipSpace) || VZ
          }
        }
      }),
      QZ = new WeakMap,
      iZ = nE.fromClass(class {
        constructor(uu) {
          this.view = uu, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let Eu = uu.state.facet(rZ);
          this.position = Eu.position, this.parent = Eu.parent, this.classes = uu.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new KZ(uu, FZ, ((uu, Eu) => this.createTooltip(uu, Eu)), (uu => {
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
          let Eu = this.manager.update(uu, this.above);
          Eu && this.observeIntersection();
          let ju = Eu || uu.geometryChanged,
            su = uu.state.facet(rZ);
          if (su.position != this.position && !this.madeAbsolute) {
            this.position = su.position;
            for (let uu of this.manager.tooltipViews) uu.dom.style.position = this.position;
            ju = !0
          }
          if (su.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = su.parent, this.createContainer();
            for (let uu of this.manager.tooltipViews) this.container.appendChild(uu.dom);
            ju = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          ju && this.maybeMeasure()
        }
        createTooltip(uu, Eu) {
          let ju = uu.create(this.view),
            su = Eu ? Eu.dom : null;
          if (ju.dom.classList.add("cm-tooltip"), uu.arrow && !ju.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let uu = document.createElement("div");
            uu.className = "cm-tooltip-arrow", ju.dom.appendChild(uu)
          }
          return ju.dom.style.position = this.position, ju.dom.style.top = vZ, ju.dom.style.left = "0px", this.container.insertBefore(ju.dom, su), ju.mount && ju.mount(this.view), this.resizeObserver && this.resizeObserver.observe(ju.dom), ju
        }
        destroy() {
          var uu, Eu, ju;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let su of this.manager.tooltipViews) su.dom.remove(), null === (uu = su.destroy) || void 0 === uu || uu.call(su);
          this.parent && this.container.remove(), null === (Eu = this.resizeObserver) || void 0 === Eu || Eu.disconnect(), null === (ju = this.intersectionObserver) || void 0 === ju || ju.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let uu = 1,
            Eu = 1,
            ju = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: uu
            } = this.manager.tooltipViews[0];
            if (wu.safari) {
              let Eu = uu.getBoundingClientRect();
              ju = Math.abs(Eu.top + 1e4) > 1 || Math.abs(Eu.left) > 1
            } else ju = !!uu.offsetParent && uu.offsetParent != this.container.ownerDocument.body
          }
          if (ju || "absolute" == this.position)
            if (this.parent) {
              let ju = this.parent.getBoundingClientRect();
              ju.width && ju.height && (uu = ju.width / this.parent.offsetWidth, Eu = ju.height / this.parent.offsetHeight)
            } else({
              scaleX: uu,
              scaleY: Eu
            } = this.view.viewState);
          let su = this.view.scrollDOM.getBoundingClientRect(),
            Uu = lj(this.view);
          return {
            visible: {
              left: su.left + Uu.left,
              top: su.top + Uu.top,
              right: su.right - Uu.right,
              bottom: su.bottom - Uu.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((uu, Eu) => {
              let ju = this.manager.tooltipViews[Eu];
              return ju.getCoords ? ju.getCoords(uu.pos) : this.view.coordsAtPos(uu.pos)
            })),
            size: this.manager.tooltipViews.map((uu => {
              let {
                dom: Eu
              } = uu;
              return Eu.getBoundingClientRect()
            })),
            space: this.view.state.facet(rZ).tooltipSpace(this.view),
            scaleX: uu,
            scaleY: Eu,
            makeAbsolute: ju
          }
        }
        writeMeasure(uu) {
          var Eu;
          if (uu.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let uu of this.manager.tooltipViews) uu.dom.style.position = "absolute"
          }
          let {
            visible: ju,
            space: su,
            scaleX: Uu,
            scaleY: Zu
          } = uu, Xu = [];
          for (let lu = 0; lu < this.manager.tooltips.length; lu++) {
            let qu = this.manager.tooltips[lu],
              fu = this.manager.tooltipViews[lu],
              {
                dom: Cu
              } = fu,
              bu = uu.pos[lu],
              cu = uu.size[lu];
            if (!bu || !1 !== qu.clip && (bu.bottom <= Math.max(ju.top, su.top) || bu.top >= Math.min(ju.bottom, su.bottom) || bu.right < Math.max(ju.left, su.left) - .1 || bu.left > Math.min(ju.right, su.right) + .1)) {
              Cu.style.top = vZ;
              continue
            }
            let Nu = qu.arrow ? fu.dom.querySelector(".cm-tooltip-arrow") : null,
              Ou = Nu ? 7 : 0,
              Yu = cu.right - cu.left,
              hu = null !== (Eu = QZ.get(fu)) && void 0 !== Eu ? Eu : cu.bottom - cu.top,
              Du = fu.offset || IZ,
              gu = this.view.textDirection == fE.LTR,
              Mu = cu.width > su.right - su.left ? gu ? su.left : su.right - cu.width : gu ? Math.max(su.left, Math.min(bu.left - (Nu ? 14 : 0) + Du.x, su.right - Yu)) : Math.min(Math.max(su.left, bu.left - Yu + (Nu ? 14 : 0) - Du.x), su.right - Yu),
              eu = this.above[lu];
            !qu.strictSide && (eu ? bu.top - hu - Ou - Du.y < su.top : bu.bottom + hu + Ou + Du.y > su.bottom) && eu == su.bottom - bu.bottom > bu.top - su.top && (eu = this.above[lu] = !eu);
            let Gu = (eu ? bu.top - su.top : su.bottom - bu.bottom) - Ou;
            if (Gu < hu && !1 !== fu.resize) {
              if (Gu < this.view.defaultLineHeight) {
                Cu.style.top = vZ;
                continue
              }
              QZ.set(fu, hu), Cu.style.height = (hu = Gu) / Zu + "px"
            } else Cu.style.height && (Cu.style.height = "");
            let pu = eu ? bu.top - hu - Ou - Du.y : bu.bottom + Ou + Du.y,
              wu = Mu + Yu;
            if (!0 !== fu.overlap)
              for (let uu of Xu) uu.left < wu && uu.right > Mu && uu.top < pu + hu && uu.bottom > pu && (pu = eu ? uu.top - hu - 2 - Ou : uu.bottom + Ou + 2);
            if ("absolute" == this.position ? (Cu.style.top = (pu - uu.parent.top) / Zu + "px", WZ(Cu, (Mu - uu.parent.left) / Uu)) : (Cu.style.top = pu / Zu + "px", WZ(Cu, Mu / Uu)), Nu) {
              let uu = bu.left + (gu ? Du.x : -Du.x) - (Mu + 14 - 7);
              Nu.style.left = uu / Uu + "px"
            }!0 !== fu.overlap && Xu.push({
              left: Mu,
              top: pu,
              right: wu,
              bottom: pu + hu
            }), Cu.classList.toggle("cm-tooltip-above", eu), Cu.classList.toggle("cm-tooltip-below", !eu), fu.positioned && fu.positioned(uu.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let uu of this.manager.tooltipViews) uu.dom.style.top = vZ
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function WZ(uu, Eu) {
      let ju = parseInt(uu.style.left, 10);
      (isNaN(ju) || Math.abs(Eu - ju) > 1) && (uu.style.left = Eu + "px")
    }
    const SZ = PU.baseTheme({
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
      IZ = {
        x: 0,
        y: 0
      },
      FZ = su.r.define({
        enables: [iZ, SZ]
      }),
      BZ = su.r.define({
        combine: uu => uu.reduce(((uu, Eu) => uu.concat(Eu)), [])
      });
    class LZ {
      static create(uu) {
        return new LZ(uu)
      }
      constructor(uu) {
        this.view = uu, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new KZ(uu, BZ, ((uu, Eu) => this.createHostedView(uu, Eu)), (uu => uu.dom.remove()))
      }
      createHostedView(uu, Eu) {
        let ju = uu.create(this.view);
        return ju.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(ju.dom, Eu ? Eu.dom.nextSibling : this.dom.firstChild), this.mounted && ju.mount && ju.mount(this.view), ju
      }
      mount(uu) {
        for (let Eu of this.manager.tooltipViews) Eu.mount && Eu.mount(uu);
        this.mounted = !0
      }
      positioned(uu) {
        for (let Eu of this.manager.tooltipViews) Eu.positioned && Eu.positioned(uu)
      }
      update(uu) {
        this.manager.update(uu)
      }
      destroy() {
        var uu;
        for (let Eu of this.manager.tooltipViews) null === (uu = Eu.destroy) || void 0 === uu || uu.call(Eu)
      }
      passProp(uu) {
        let Eu;
        for (let ju of this.manager.tooltipViews) {
          let su = ju[uu];
          if (void 0 !== su)
            if (void 0 === Eu) Eu = su;
            else if (Eu !== su) return
        }
        return Eu
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
    const tZ = FZ.compute([BZ], (uu => {
      let Eu = uu.facet(BZ);
      return 0 === Eu.length ? null : {
        pos: Math.min(...Eu.map((uu => uu.pos))),
        end: Math.max(...Eu.map((uu => {
          var Eu;
          return null !== (Eu = uu.end) && void 0 !== Eu ? Eu : uu.pos
        }))),
        create: LZ.create,
        above: Eu[0].above,
        arrow: Eu.some((uu => uu.arrow))
      }
    }));
    class xZ {
      constructor(uu, Eu, ju, su, Uu) {
        this.view = uu, this.source = Eu, this.field = ju, this.setHover = su, this.hoverTime = Uu, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: Eu
        } = this, ju = uu.docView.tile.nearest(Eu.target);
        if (!ju) return;
        let su, Uu = 1;
        if (ju.isWidget()) su = ju.posAtStart;
        else {
          if (su = uu.posAtCoords(Eu), null == su) return;
          let ju = uu.coordsAtPos(su);
          if (!ju || Eu.y < ju.top || Eu.y > ju.bottom || Eu.x < ju.left - uu.defaultCharacterWidth || Eu.x > ju.right + uu.defaultCharacterWidth) return;
          let Zu = uu.bidiSpans(uu.state.doc.lineAt(su)).find((uu => uu.from <= su && uu.to >= su)),
            Xu = Zu && Zu.dir == fE.RTL ? -1 : 1;
          Uu = Eu.x < ju.left ? -Xu : Xu
        }
        let Zu = this.source(uu, su, Uu);
        if (null === Zu || void 0 === Zu ? void 0 : Zu.then) {
          let Eu = this.pending = {
            pos: su
          };
          Zu.then((ju => {
            this.pending == Eu && (this.pending = null, !ju || Array.isArray(ju) && !ju.length || uu.dispatch({
              effects: this.setHover.of(Array.isArray(ju) ? ju : [ju])
            }))
          }), (Eu => xE(uu.state, Eu, "hover tooltip")))
        } else !Zu || Array.isArray(Zu) && !Zu.length || uu.dispatch({
          effects: this.setHover.of(Array.isArray(Zu) ? Zu : [Zu])
        })
      }
      get tooltip() {
        let uu = this.view.plugin(iZ),
          Eu = uu ? uu.manager.tooltips.findIndex((uu => uu.create == LZ.create)) : -1;
        return Eu > -1 ? uu.manager.tooltipViews[Eu] : null
      }
      mousemove(uu) {
        var Eu, ju;
        this.lastMove = {
          x: uu.clientX,
          y: uu.clientY,
          target: uu.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: su,
          tooltip: Uu
        } = this;
        if (su.length && Uu && ! function(uu, Eu) {
            let ju, {
              left: su,
              right: Uu,
              top: Zu,
              bottom: Xu
            } = uu.getBoundingClientRect();
            if (ju = uu.querySelector(".cm-tooltip-arrow")) {
              let uu = ju.getBoundingClientRect();
              Zu = Math.min(uu.top, Zu), Xu = Math.max(uu.bottom, Xu)
            }
            return Eu.clientX >= su - TZ && Eu.clientX <= Uu + TZ && Eu.clientY >= Zu - TZ && Eu.clientY <= Xu + TZ
          }(Uu.dom, uu) || this.pending) {
          let {
            pos: Uu
          } = su[0] || this.pending, Zu = null !== (ju = null === (Eu = su[0]) || void 0 === Eu ? void 0 : Eu.end) && void 0 !== ju ? ju : Uu;
          (Uu == Zu ? this.view.posAtCoords(this.lastMove) == Uu : function(uu, Eu, ju, su, Uu) {
            let Zu = uu.scrollDOM.getBoundingClientRect(),
              Xu = uu.documentTop + uu.documentPadding.top + uu.contentHeight;
            if (Zu.left > su || Zu.right < su || Zu.top > Uu || Math.min(Zu.bottom, Xu) < Uu) return !1;
            let lu = uu.posAtCoords({
              x: su,
              y: Uu
            }, !1);
            return lu >= Eu && lu <= ju
          }(this.view, Uu, Zu, uu.clientX, uu.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(uu) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: Eu
        } = this;
        if (Eu.length) {
          let {
            tooltip: Eu
          } = this;
          Eu && Eu.dom.contains(uu.relatedTarget) ? this.watchTooltipLeave(Eu.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(uu) {
        let Eu = ju => {
          uu.removeEventListener("mouseleave", Eu), this.active.length && !this.view.dom.contains(ju.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        uu.addEventListener("mouseleave", Eu)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const TZ = 4;

    function HZ(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ju = su.L.define(),
        Uu = su.N.define({
          create: () => [],
          update(uu, Uu) {
            if (uu.length && (Eu.hideOnChange && (Uu.docChanged || Uu.selection) ? uu = [] : Eu.hideOn && (uu = uu.filter((uu => !Eu.hideOn(Uu, uu)))), Uu.docChanged)) {
              let Eu = [];
              for (let ju of uu) {
                let uu = Uu.changes.mapPos(ju.pos, -1, su.u.TrackDel);
                if (null != uu) {
                  let su = Object.assign(Object.create(null), ju);
                  su.pos = uu, null != su.end && (su.end = Uu.changes.mapPos(su.end)), Eu.push(su)
                }
              }
              uu = Eu
            }
            for (let Eu of Uu.effects) Eu.is(ju) && (uu = Eu.value), Eu.is(nZ) && (uu = []);
            return uu
          },
          provide: uu => BZ.from(uu)
        });
      return {
        active: Uu,
        extension: [Uu, nE.define((su => new xZ(su, uu, Uu, ju, Eu.hoverTime || 300))), tZ]
      }
    }

    function AZ(uu, Eu) {
      let ju = uu.plugin(iZ);
      if (!ju) return null;
      let su = ju.manager.tooltips.indexOf(Eu);
      return su < 0 ? null : ju.manager.tooltipViews[su]
    }
    const nZ = su.L.define();
    const yZ = su.r.define({
      combine(uu) {
        let Eu, ju;
        for (let su of uu) Eu = Eu || su.topContainer, ju = ju || su.bottomContainer;
        return {
          topContainer: Eu,
          bottomContainer: ju
        }
      }
    });

    function zZ(uu, Eu) {
      let ju = uu.plugin(RZ),
        su = ju ? ju.specs.indexOf(Eu) : -1;
      return su > -1 ? ju.panels[su] : null
    }
    const RZ = nE.fromClass(class {
      constructor(uu) {
        this.input = uu.state.facet(jX), this.specs = this.input.filter((uu => uu)), this.panels = this.specs.map((Eu => Eu(uu)));
        let Eu = uu.state.facet(yZ);
        this.top = new uX(uu, !0, Eu.topContainer), this.bottom = new uX(uu, !1, Eu.bottomContainer), this.top.sync(this.panels.filter((uu => uu.top))), this.bottom.sync(this.panels.filter((uu => !uu.top)));
        for (let ju of this.panels) ju.dom.classList.add("cm-panel"), ju.mount && ju.mount()
      }
      update(uu) {
        let Eu = uu.state.facet(yZ);
        this.top.container != Eu.topContainer && (this.top.sync([]), this.top = new uX(uu.view, !0, Eu.topContainer)), this.bottom.container != Eu.bottomContainer && (this.bottom.sync([]), this.bottom = new uX(uu.view, !1, Eu.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let ju = uu.state.facet(jX);
        if (ju != this.input) {
          let Eu = ju.filter((uu => uu)),
            su = [],
            Uu = [],
            Zu = [],
            Xu = [];
          for (let ju of Eu) {
            let Eu, lu = this.specs.indexOf(ju);
            lu < 0 ? (Eu = ju(uu.view), Xu.push(Eu)) : (Eu = this.panels[lu], Eu.update && Eu.update(uu)), su.push(Eu), (Eu.top ? Uu : Zu).push(Eu)
          }
          this.specs = Eu, this.panels = su, this.top.sync(Uu), this.bottom.sync(Zu);
          for (let uu of Xu) uu.dom.classList.add("cm-panel"), uu.mount && uu.mount()
        } else
          for (let su of this.panels) su.update && su.update(uu)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: uu => PU.scrollMargins.of((Eu => {
        let ju = Eu.plugin(uu);
        return ju && {
          top: ju.top.scrollMargin(),
          bottom: ju.bottom.scrollMargin()
        }
      }))
    });
    class uX {
      constructor(uu, Eu, ju) {
        this.view = uu, this.top = Eu, this.container = ju, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(uu) {
        for (let Eu of this.panels) Eu.destroy && uu.indexOf(Eu) < 0 && Eu.destroy();
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
        for (let Eu of this.panels)
          if (Eu.dom.parentNode == this.dom) {
            for (; uu != Eu.dom;) uu = EX(uu);
            uu = uu.nextSibling
          } else this.dom.insertBefore(Eu.dom, uu);
        for (; uu;) uu = EX(uu)
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

    function EX(uu) {
      let Eu = uu.nextSibling;
      return uu.remove(), Eu
    }
    const jX = su.r.define({
      enables: RZ
    });

    function sX(uu, Eu) {
      let ju, Uu = new Promise((uu => ju = uu)),
        Zu = uu => function(uu, Eu, ju) {
          let su = Eu.content ? Eu.content(uu, (() => Xu(null))) : null;
          if (!su) {
            if (su = (0, bu.b)("form"), Eu.input) {
              let uu = (0, bu.b)("input", Eu.input);
              /^(text|password|number|email|tel|url)$/.test(uu.type) && uu.classList.add("cm-textfield"), uu.name || (uu.name = "input"), su.appendChild((0, bu.b)("label", (Eu.label || "") + ": ", uu))
            } else su.appendChild(document.createTextNode(Eu.label || ""));
            su.appendChild(document.createTextNode(" ")), su.appendChild((0, bu.b)("button", {
              class: "cm-button",
              type: "submit"
            }, Eu.submitLabel || "OK"))
          }
          let Uu = "FORM" == su.nodeName ? [su] : su.querySelectorAll("form");
          for (let lu = 0; lu < Uu.length; lu++) {
            let uu = Uu[lu];
            uu.addEventListener("keydown", (Eu => {
              27 == Eu.keyCode ? (Eu.preventDefault(), Xu(null)) : 13 == Eu.keyCode && (Eu.preventDefault(), Xu(uu))
            })), uu.addEventListener("submit", (Eu => {
              Eu.preventDefault(), Xu(uu)
            }))
          }
          let Zu = (0, bu.b)("div", su, (0, bu.b)("button", {
            onclick: () => Xu(null),
            "aria-label": uu.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          Eu.class && (Zu.className = Eu.class);

          function Xu(Eu) {
            Zu.contains(Zu.ownerDocument.activeElement) && uu.focus(), ju(Eu)
          }
          return Zu.classList.add("cm-dialog"), {
            dom: Zu,
            top: Eu.top,
            mount: () => {
              if (Eu.focus) {
                let uu;
                uu = "string" == typeof Eu.focus ? su.querySelector(Eu.focus) : su.querySelector("input") || su.querySelector("button"), uu && "select" in uu ? uu.select() : uu && "focus" in uu && uu.focus()
              }
            }
          }
        }(uu, Eu, ju);
      uu.state.field(UX, !1) ? uu.dispatch({
        effects: ZX.of(Zu)
      }) : uu.dispatch({
        effects: su.L.appendConfig.of(UX.init((() => [Zu])))
      });
      let Xu = XX.of(Zu);
      return {
        close: Xu,
        result: Uu.then((Eu => ((uu.win.queueMicrotask || (Eu => uu.win.setTimeout(Eu, 10)))((() => {
          uu.state.field(UX).indexOf(Zu) > -1 && uu.dispatch({
            effects: Xu
          })
        })), Eu)))
      }
    }
    const UX = su.N.define({
        create: () => [],
        update(uu, Eu) {
          for (let ju of Eu.effects) ju.is(ZX) ? uu = [ju.value].concat(uu) : ju.is(XX) && (uu = uu.filter((uu => uu != ju.value)));
          return uu
        },
        provide: uu => jX.computeN([uu], (Eu => Eu.field(uu)))
      }),
      ZX = su.L.define(),
      XX = su.L.define();
    class lX extends su.I {
      compare(uu) {
        return this == uu || this.constructor == uu.constructor && this.eq(uu)
      }
      eq(uu) {
        return !1
      }
      destroy(uu) {}
    }
    lX.prototype.elementClass = "", lX.prototype.toDOM = void 0, lX.prototype.mapMode = su.u.TrackBefore, lX.prototype.startSide = lX.prototype.endSide = -1, lX.prototype.point = !0;
    const qX = su.r.define(),
      fX = su.r.define(),
      CX = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => su.E.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      bX = su.r.define();

    function cX(uu) {
      return [OX(), bX.of({
        ...CX,
        ...uu
      })]
    }
    const NX = su.r.define({
      combine: uu => uu.some((uu => uu))
    });

    function OX(uu) {
      let Eu = [YX];
      return uu && !1 === uu.fixed && Eu.push(NX.of(!0)), Eu
    }
    const YX = nE.fromClass(class {
      constructor(uu) {
        this.view = uu, this.domAfter = null, this.prevViewport = uu.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = uu.state.facet(bX).map((Eu => new MX(uu, Eu))), this.fixed = !uu.state.facet(NX);
        for (let Eu of this.gutters) "after" == Eu.config.side ? this.getDOMAfter().appendChild(Eu.dom) : this.dom.appendChild(Eu.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), uu.scrollDOM.insertBefore(this.dom, uu.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(uu) {
        if (this.updateGutters(uu)) {
          let Eu = this.prevViewport,
            ju = uu.view.viewport,
            su = Math.min(Eu.to, ju.to) - Math.max(Eu.from, ju.from);
          this.syncGutters(su < .8 * (ju.to - ju.from))
        }
        if (uu.geometryChanged) {
          let uu = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = uu, this.domAfter && (this.domAfter.style.minHeight = uu)
        }
        this.view.state.facet(NX) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = uu.view.viewport
      }
      syncGutters(uu) {
        let Eu = this.dom.nextSibling;
        uu && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let ju = su.E.iter(this.view.state.facet(qX), this.view.viewport.from),
          Uu = [],
          Zu = this.gutters.map((uu => new gX(uu, this.view.viewport, -this.view.documentPadding.top)));
        for (let su of this.view.viewportLineBlocks)
          if (Uu.length && (Uu = []), Array.isArray(su.type)) {
            let uu = !0;
            for (let Eu of su.type)
              if (Eu.type == mu.Text && uu) {
                DX(ju, Uu, Eu.from);
                for (let uu of Zu) uu.line(this.view, Eu, Uu);
                uu = !1
              } else if (Eu.widget)
              for (let uu of Zu) uu.widget(this.view, Eu)
          } else if (su.type == mu.Text) {
          DX(ju, Uu, su.from);
          for (let uu of Zu) uu.line(this.view, su, Uu)
        } else if (su.widget)
          for (let uu of Zu) uu.widget(this.view, su);
        for (let su of Zu) su.finish();
        uu && (this.view.scrollDOM.insertBefore(this.dom, Eu), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(uu) {
        let Eu = uu.startState.facet(bX),
          ju = uu.state.facet(bX),
          Uu = uu.docChanged || uu.heightChanged || uu.viewportChanged || !su.E.eq(uu.startState.facet(qX), uu.state.facet(qX), uu.view.viewport.from, uu.view.viewport.to);
        if (Eu == ju)
          for (let su of this.gutters) su.update(uu) && (Uu = !0);
        else {
          Uu = !0;
          let su = [];
          for (let Uu of ju) {
            let ju = Eu.indexOf(Uu);
            ju < 0 ? su.push(new MX(this.view, Uu)) : (this.gutters[ju].update(uu), su.push(this.gutters[ju]))
          }
          for (let uu of this.gutters) uu.dom.remove(), su.indexOf(uu) < 0 && uu.destroy();
          for (let uu of su) "after" == uu.config.side ? this.getDOMAfter().appendChild(uu.dom) : this.dom.appendChild(uu.dom);
          this.gutters = su
        }
        return Uu
      }
      destroy() {
        for (let uu of this.gutters) uu.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: uu => PU.scrollMargins.of((Eu => {
        let ju = Eu.plugin(uu);
        if (!ju || 0 == ju.gutters.length || !ju.fixed) return null;
        let su = ju.dom.offsetWidth * Eu.scaleX,
          Uu = ju.domAfter ? ju.domAfter.offsetWidth * Eu.scaleX : 0;
        return Eu.textDirection == fE.LTR ? {
          left: su,
          right: Uu
        } : {
          right: su,
          left: Uu
        }
      }))
    });

    function hX(uu) {
      return Array.isArray(uu) ? uu : [uu]
    }

    function DX(uu, Eu, ju) {
      for (; uu.value && uu.from <= ju;) uu.from == ju && Eu.push(uu.value), uu.next()
    }
    class gX {
      constructor(uu, Eu, ju) {
        this.gutter = uu, this.height = ju, this.i = 0, this.cursor = su.E.iter(uu.markers, Eu.from)
      }
      addElement(uu, Eu, ju) {
        let {
          gutter: su
        } = this, Uu = (Eu.top - this.height) / uu.scaleY, Zu = Eu.height / uu.scaleY;
        if (this.i == su.elements.length) {
          let Eu = new eX(uu, Zu, Uu, ju);
          su.elements.push(Eu), su.dom.appendChild(Eu.dom)
        } else su.elements[this.i].update(uu, Zu, Uu, ju);
        this.height = Eu.bottom, this.i++
      }
      line(uu, Eu, ju) {
        let su = [];
        DX(this.cursor, su, Eu.from), ju.length && (su = su.concat(ju));
        let Uu = this.gutter.config.lineMarker(uu, Eu, su);
        Uu && su.unshift(Uu);
        let Zu = this.gutter;
        (0 != su.length || Zu.config.renderEmptyElements) && this.addElement(uu, Eu, su)
      }
      widget(uu, Eu) {
        let ju = this.gutter.config.widgetMarker(uu, Eu.widget, Eu),
          su = ju ? [ju] : null;
        for (let Uu of uu.state.facet(fX)) {
          let ju = Uu(uu, Eu.widget, Eu);
          ju && (su || (su = [])).push(ju)
        }
        su && this.addElement(uu, Eu, su)
      }
      finish() {
        let uu = this.gutter;
        for (; uu.elements.length > this.i;) {
          let Eu = uu.elements.pop();
          uu.dom.removeChild(Eu.dom), Eu.destroy()
        }
      }
    }
    class MX {
      constructor(uu, Eu) {
        this.view = uu, this.config = Eu, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let ju in Eu.domEventHandlers) this.dom.addEventListener(ju, (su => {
          let Uu, Zu = su.target;
          if (Zu != this.dom && this.dom.contains(Zu)) {
            for (; Zu.parentNode != this.dom;) Zu = Zu.parentNode;
            let uu = Zu.getBoundingClientRect();
            Uu = (uu.top + uu.bottom) / 2
          } else Uu = su.clientY;
          let Xu = uu.lineBlockAtHeight(Uu - uu.documentTop);
          Eu.domEventHandlers[ju](uu, Xu, su) && su.preventDefault()
        }));
        this.markers = hX(Eu.markers(uu)), Eu.initialSpacer && (this.spacer = new eX(uu, 0, 0, [Eu.initialSpacer(uu)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(uu) {
        let Eu = this.markers;
        if (this.markers = hX(this.config.markers(uu.view)), this.spacer && this.config.updateSpacer) {
          let Eu = this.config.updateSpacer(this.spacer.markers[0], uu);
          Eu != this.spacer.markers[0] && this.spacer.update(uu.view, 0, 0, [Eu])
        }
        let ju = uu.view.viewport;
        return !su.E.eq(this.markers, Eu, ju.from, ju.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(uu)
      }
      destroy() {
        for (let uu of this.elements) uu.destroy()
      }
    }
    class eX {
      constructor(uu, Eu, ju, su) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(uu, Eu, ju, su)
      }
      update(uu, Eu, ju, su) {
        this.height != Eu && (this.height = Eu, this.dom.style.height = Eu + "px"), this.above != ju && (this.dom.style.marginTop = (this.above = ju) ? ju + "px" : ""),
          function(uu, Eu) {
            if (uu.length != Eu.length) return !1;
            for (let ju = 0; ju < uu.length; ju++)
              if (!uu[ju].compare(Eu[ju])) return !1;
            return !0
          }(this.markers, su) || this.setMarkers(uu, su)
      }
      setMarkers(uu, Eu) {
        let ju = "cm-gutterElement",
          su = this.dom.firstChild;
        for (let Uu = 0, Zu = 0;;) {
          let Xu = Zu,
            lu = Uu < Eu.length ? Eu[Uu++] : null,
            qu = !1;
          if (lu) {
            let uu = lu.elementClass;
            uu && (ju += " " + uu);
            for (let Eu = Zu; Eu < this.markers.length; Eu++)
              if (this.markers[Eu].compare(lu)) {
                Xu = Eu, qu = !0;
                break
              }
          } else Xu = this.markers.length;
          for (; Zu < Xu;) {
            let uu = this.markers[Zu++];
            if (uu.toDOM) {
              uu.destroy(su);
              let Eu = su.nextSibling;
              su.remove(), su = Eu
            }
          }
          if (!lu) break;
          lu.toDOM && (qu ? su = su.nextSibling : this.dom.insertBefore(lu.toDOM(uu), su)), qu && Zu++
        }
        this.dom.className = ju, this.markers = Eu
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const GX = su.r.define(),
      pX = su.r.define(),
      wX = su.r.define({
        combine: uu => (0, su.Z)(uu, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(uu, Eu) {
            let ju = Object.assign({}, uu);
            for (let su in Eu) {
              let uu = ju[su],
                Uu = Eu[su];
              ju[su] = uu ? (Eu, ju, su) => uu(Eu, ju, su) || Uu(Eu, ju, su) : Uu
            }
            return ju
          }
        })
      });
    class JX extends lX {
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

    function dX(uu, Eu) {
      return uu.state.facet(wX).formatNumber(Eu, uu.state)
    }
    const aX = bX.compute([wX], (uu => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: uu => uu.state.facet(GX),
      lineMarker: (uu, Eu, ju) => ju.some((uu => uu.toDOM)) ? null : new JX(dX(uu, uu.state.doc.lineAt(Eu.from).number)),
      widgetMarker: (uu, Eu, ju) => {
        for (let su of uu.state.facet(pX)) {
          let Uu = su(uu, Eu, ju);
          if (Uu) return Uu
        }
        return null
      },
      lineMarkerChange: uu => uu.startState.facet(wX) != uu.state.facet(wX),
      initialSpacer: uu => new JX(dX(uu, oX(uu.state.doc.lines))),
      updateSpacer(uu, Eu) {
        let ju = dX(Eu.view, oX(Eu.view.state.doc.lines));
        return ju == uu.number ? uu : new JX(ju)
      },
      domEventHandlers: uu.facet(wX).domEventHandlers,
      side: "before"
    })));

    function PX() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [wX.of(uu), OX(), aX]
    }

    function oX(uu) {
      let Eu = 9;
      for (; Eu < uu;) Eu = 10 * Eu + 9;
      return Eu
    }
    const kX = new class extends lX {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      mX = qX.compute(["selection"], (uu => {
        let Eu = [],
          ju = -1;
        for (let su of uu.selection.HY) {
          let Uu = uu.doc.lineAt(su.head).from;
          Uu > ju && (ju = Uu, Eu.push(kX.range(Uu)))
        }
        return su.E.of(Eu)
      }));

    function vX() {
      return mX
    }
  },
  41580: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su,
      g: () => Nu,
      j: () => Xu,
      l: () => Cu,
      n: () => fu,
      p: () => Ku,
      r: () => ru,
      v: () => Vu,
      y: () => Ou
    });
    const su = 1024;
    let Uu = 0;
    class Zu {
      constructor(uu, Eu) {
        this.from = uu, this.to = Eu
      }
    }
    class Xu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Uu++, this.perNode = !!uu.perNode, this.deserialize = uu.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = uu.combine || null
      }
      add(uu) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof uu && (uu = fu.match(uu)), Eu => {
          let ju = uu(Eu);
          return void 0 === ju ? null : [this, ju]
        }
      }
    }
    Xu.closedBy = new Xu({
      deserialize: uu => uu.split(" ")
    }), Xu.openedBy = new Xu({
      deserialize: uu => uu.split(" ")
    }), Xu.group = new Xu({
      deserialize: uu => uu.split(" ")
    }), Xu.isolate = new Xu({
      deserialize: uu => {
        if (uu && "rtl" != uu && "ltr" != uu && "auto" != uu) throw new RangeError("Invalid value for isolate: " + uu);
        return uu || "auto"
      }
    }), Xu.contextHash = new Xu({
      perNode: !0
    }), Xu.lookAhead = new Xu({
      perNode: !0
    }), Xu.mounted = new Xu({
      perNode: !0
    });
    class lu {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = uu, this.overlay = Eu, this.parser = ju, this.bracketed = su
      }
      static get(uu) {
        return uu && uu.props && uu.props[Xu.mounted.id]
      }
    }
    const qu = Object.create(null);
    class fu {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = uu, this.props = Eu, this.id = ju, this.flags = su
      }
      static define(uu) {
        let Eu = uu.props && uu.props.length ? Object.create(null) : qu,
          ju = (uu.top ? 1 : 0) | (uu.skipped ? 2 : 0) | (uu.error ? 4 : 0) | (null == uu.name ? 8 : 0),
          su = new fu(uu.name || "", Eu, uu.id, ju);
        if (uu.props)
          for (let Uu of uu.props)
            if (Array.isArray(Uu) || (Uu = Uu(su)), Uu) {
              if (Uu[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              Eu[Uu[0].id] = Uu[1]
            } return su
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
          let Eu = this.prop(Xu.group);
          return !!Eu && Eu.indexOf(uu) > -1
        }
        return this.id == uu
      }
      static match(uu) {
        let Eu = Object.create(null);
        for (let ju in uu)
          for (let su of ju.split(" ")) Eu[su] = uu[ju];
        return uu => {
          for (let ju = uu.prop(Xu.group), su = -1; su < (ju ? ju.length : 0); su++) {
            let Uu = Eu[su < 0 ? uu.name : ju[su]];
            if (Uu) return Uu
          }
        }
      }
    }
    fu.none = new fu("", Object.create(null), 0, 8);
    class Cu {
      constructor(uu) {
        this.types = uu;
        for (let Eu = 0; Eu < uu.length; Eu++)
          if (uu[Eu].id != Eu) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let uu = [];
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        for (let Uu of this.types) {
          let Eu = null;
          for (let uu of ju) {
            let ju = uu(Uu);
            if (ju) {
              Eu || (Eu = Object.assign({}, Uu.props));
              let uu = ju[1],
                su = ju[0];
              su.combine && su.id in Eu && (uu = su.combine(Eu[su.id], uu)), Eu[su.id] = uu
            }
          }
          uu.push(Eu ? new fu(Uu.name, Eu, Uu.id, Uu.flags) : Uu)
        }
        return new Cu(uu)
      }
    }
    const bu = new WeakMap,
      cu = new WeakMap;
    var Nu;
    ! function(uu) {
      uu[uu.ExcludeBuffers = 1] = "ExcludeBuffers", uu[uu.IncludeAnonymous = 2] = "IncludeAnonymous", uu[uu.IgnoreMounts = 4] = "IgnoreMounts", uu[uu.IgnoreOverlays = 8] = "IgnoreOverlays", uu[uu.EnterBracketed = 16] = "EnterBracketed"
    }(Nu || (Nu = {}));
    class Ou {
      constructor(uu, Eu, ju, su, Uu) {
        if (this.type = uu, this.children = Eu, this.positions = ju, this.length = su, this.props = null, Uu && Uu.length) {
          this.props = Object.create(null);
          for (let [uu, Eu] of Uu) this.props["number" == typeof uu ? uu : uu.id] = Eu
        }
      }
      toString() {
        let uu = lu.get(this);
        if (uu && !uu.overlay) return uu.tree.toString();
        let Eu = "";
        for (let ju of this.children) {
          let uu = ju.toString();
          uu && (Eu && (Eu += ","), Eu += uu)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (Eu.length ? "(" + Eu + ")" : "") : Eu
      }
      cursor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Pu(this.topNode, uu)
      }
      cursorAt(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = bu.get(this) || this.topNode,
          su = new Pu(ju);
        return su.moveTo(uu, Eu), bu.set(this, su._tree), su
      }
      get topNode() {
        return new eu(this, 0, 0, null)
      }
      resolve(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = gu(bu.get(this) || this.topNode, uu, Eu, !1);
        return bu.set(this, ju), ju
      }
      resolveInner(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = gu(cu.get(this) || this.topNode, uu, Eu, !0);
        return cu.set(this, ju), ju
      }
      resolveStack(uu) {
        return function(uu, Eu, ju) {
          let su = uu.resolveInner(Eu, ju),
            Uu = null;
          for (let Zu = su instanceof eu ? su : su.context.parent; Zu; Zu = Zu.parent)
            if (Zu.index < 0) {
              let uu = Zu.parent;
              (Uu || (Uu = [su])).push(uu.resolve(Eu, ju)), Zu = uu
            } else {
              let uu = lu.get(Zu.tree);
              if (uu && uu.overlay && uu.overlay[0].from <= Eu && uu.overlay[uu.overlay.length - 1].to >= Eu) {
                let Xu = new eu(uu.tree, uu.overlay[0].from + Zu.from, -1, Zu);
                (Uu || (Uu = [su])).push(gu(Xu, Eu, ju, !1))
              }
            } return Uu ? du(Uu) : su
        }(this, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(uu) {
        let {
          enter: Eu,
          leave: ju,
          from: su = 0,
          to: Uu = this.length
        } = uu, Zu = uu.mode || 0, Xu = (Zu & Nu.IncludeAnonymous) > 0;
        for (let lu = this.cursor(Zu | Nu.IncludeAnonymous);;) {
          let uu = !1;
          if (lu.from <= Uu && lu.to >= su && (!Xu && lu.type.isAnonymous || !1 !== Eu(lu))) {
            if (lu.firstChild()) continue;
            uu = !0
          }
          for (; uu && ju && (Xu || !lu.type.isAnonymous) && ju(lu), !lu.nextSibling();) {
            if (!lu.parent()) return;
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
          for (let Eu in this.props) uu.push([+Eu, this.props[Eu]]);
        return uu
      }
      balance() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : vu(fu.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((uu, Eu, ju) => new Ou(this.type, uu, Eu, ju, this.propValues)), uu.makeTree || ((uu, Eu, ju) => new Ou(fu.none, uu, Eu, ju)))
      }
      static build(uu) {
        return function(uu) {
          var Eu;
          let {
            buffer: ju,
            nodeSet: Uu,
            maxBufferLength: Zu = su,
            reused: lu = [],
            minRepeatType: qu = Uu.types.length
          } = uu, fu = Array.isArray(ju) ? new Yu(ju, ju.length) : ju, Cu = Uu.types, bu = 0, cu = 0;

          function Nu(uu, Eu, ju, su, Xu, Ou) {
            let {
              id: Yu,
              start: wu,
              end: Ju,
              size: du
            } = fu, au = cu, Pu = bu;
            if (du < 0) {
              if (fu.next(), -1 == du) {
                let Eu = lu[Yu];
                return ju.push(Eu), void su.push(wu - uu)
              }
              if (-3 == du) return void(bu = Yu);
              if (-4 == du) return void(cu = Yu);
              throw new RangeError(`Unrecognized record size: ${du}`)
            }
            let ou, ku, mu = Cu[Yu],
              Ku = wu - uu;
            if (Ju - wu <= Zu && (ku = Gu(fu.pos - Eu, Xu))) {
              let Eu = new Uint16Array(ku.size - ku.skip),
                ju = fu.pos - ku.size,
                su = Eu.length;
              for (; fu.pos > ju;) su = pu(ku.start, Eu, su);
              ou = new hu(Eu, Ju - ku.start, Uu), Ku = ku.start - uu
            } else {
              let uu = fu.pos - du;
              fu.next();
              let Eu = [],
                ju = [],
                su = Yu >= qu ? Yu : -1,
                Uu = 0,
                Xu = Ju;
              for (; fu.pos > uu;) su >= 0 && fu.id == su && fu.size >= 0 ? (fu.end <= Xu - Zu && (Mu(Eu, ju, wu, Uu, fu.end, Xu, su, au, Pu), Uu = Eu.length, Xu = fu.end), fu.next()) : Ou > 2500 ? Du(wu, uu, Eu, ju) : Nu(wu, uu, Eu, ju, su, Ou + 1);
              if (su >= 0 && Uu > 0 && Uu < Eu.length && Mu(Eu, ju, wu, Uu, wu, Xu, su, au, Pu), Eu.reverse(), ju.reverse(), su > -1 && Uu > 0) {
                let uu = gu(mu, Pu);
                ou = vu(mu, Eu, ju, 0, Eu.length, 0, Ju - wu, uu, uu)
              } else ou = eu(mu, Eu, ju, Ju - wu, au - Ju, Pu)
            }
            ju.push(ou), su.push(Ku)
          }

          function Du(uu, Eu, ju, su) {
            let Xu = [],
              lu = 0,
              qu = -1;
            for (; fu.pos > Eu;) {
              let {
                id: uu,
                start: Eu,
                end: ju,
                size: su
              } = fu;
              if (su > 4) fu.next();
              else {
                if (qu > -1 && Eu < qu) break;
                qu < 0 && (qu = ju - Zu), Xu.push(uu, Eu, ju), lu++, fu.next()
              }
            }
            if (lu) {
              let Eu = new Uint16Array(4 * lu),
                Zu = Xu[Xu.length - 2];
              for (let uu = Xu.length - 3, ju = 0; uu >= 0; uu -= 3) Eu[ju++] = Xu[uu], Eu[ju++] = Xu[uu + 1] - Zu, Eu[ju++] = Xu[uu + 2] - Zu, Eu[ju++] = ju;
              ju.push(new hu(Eu, Xu[2] - Zu, Uu)), su.push(Zu - uu)
            }
          }

          function gu(uu, Eu) {
            return (ju, su, Uu) => {
              let Zu, lu, qu = 0,
                fu = ju.length - 1;
              if (fu >= 0 && (Zu = ju[fu]) instanceof Ou) {
                if (!fu && Zu.type == uu && Zu.length == Uu) return Zu;
                (lu = Zu.prop(Xu.lookAhead)) && (qu = su[fu] + Zu.length + lu)
              }
              return eu(uu, ju, su, Uu, qu, Eu)
            }
          }

          function Mu(uu, Eu, ju, su, Zu, Xu, lu, qu, fu) {
            let Cu = [],
              bu = [];
            for (; uu.length > su;) Cu.push(uu.pop()), bu.push(Eu.pop() + ju - Zu);
            uu.push(eu(Uu.types[lu], Cu, bu, Xu - Zu, qu - Xu, fu)), Eu.push(Zu - ju)
          }

          function eu(uu, Eu, ju, su, Uu, Zu, lu) {
            if (Zu) {
              let uu = [Xu.contextHash, Zu];
              lu = lu ? [uu].concat(lu) : [uu]
            }
            if (Uu > 25) {
              let uu = [Xu.lookAhead, Uu];
              lu = lu ? [uu].concat(lu) : [uu]
            }
            return new Ou(uu, Eu, ju, su, lu)
          }

          function Gu(uu, Eu) {
            let ju = fu.fork(),
              su = 0,
              Uu = 0,
              Xu = 0,
              lu = ju.end - Zu,
              Cu = {
                size: 0,
                start: 0,
                skip: 0
              };
            uu: for (let Zu = ju.pos - uu; ju.pos > Zu;) {
              let uu = ju.size;
              if (ju.id == Eu && uu >= 0) {
                Cu.size = su, Cu.start = Uu, Cu.skip = Xu, Xu += 4, su += 4, ju.next();
                continue
              }
              let fu = ju.pos - uu;
              if (uu < 0 || fu < Zu || ju.start < lu) break;
              let bu = ju.id >= qu ? 4 : 0,
                cu = ju.start;
              for (ju.next(); ju.pos > fu;) {
                if (ju.size < 0) {
                  if (-3 != ju.size && -4 != ju.size) break uu;
                  bu += 4
                } else ju.id >= qu && (bu += 4);
                ju.next()
              }
              Uu = cu, su += uu, Xu += bu
            }
            return (Eu < 0 || su == uu) && (Cu.size = su, Cu.start = Uu, Cu.skip = Xu), Cu.size > 4 ? Cu : void 0
          }

          function pu(uu, Eu, ju) {
            let {
              id: su,
              start: Uu,
              end: Zu,
              size: Xu
            } = fu;
            if (fu.next(), Xu >= 0 && su < qu) {
              let lu = ju;
              if (Xu > 4) {
                let su = fu.pos - (Xu - 4);
                for (; fu.pos > su;) ju = pu(uu, Eu, ju)
              }
              Eu[--ju] = lu, Eu[--ju] = Zu - uu, Eu[--ju] = Uu - uu, Eu[--ju] = su
            } else - 3 == Xu ? bu = su : -4 == Xu && (cu = su);
            return ju
          }
          let wu = [],
            Ju = [];
          for (; fu.pos > 0;) Nu(uu.start || 0, uu.bufferStart || 0, wu, Ju, -1, 0);
          let du = null !== (Eu = uu.length) && void 0 !== Eu ? Eu : wu.length ? Ju[0] + wu[0].length : 0;
          return new Ou(Cu[uu.topID], wu.reverse(), Ju.reverse(), du)
        }(uu)
      }
    }
    Ou.empty = new Ou(fu.none, [], [], 0);
    class Yu {
      constructor(uu, Eu) {
        this.buffer = uu, this.index = Eu
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
        return new Yu(this.buffer, this.index)
      }
    }
    class hu {
      constructor(uu, Eu, ju) {
        this.buffer = uu, this.length = Eu, this.set = ju
      }
      get type() {
        return fu.none
      }
      toString() {
        let uu = [];
        for (let Eu = 0; Eu < this.buffer.length;) uu.push(this.childString(Eu)), Eu = this.buffer[Eu + 3];
        return uu.join(",")
      }
      childString(uu) {
        let Eu = this.buffer[uu],
          ju = this.buffer[uu + 3],
          su = this.set.types[Eu],
          Uu = su.name;
        if (/\W/.test(Uu) && !su.isError && (Uu = JSON.stringify(Uu)), ju == (uu += 4)) return Uu;
        let Zu = [];
        for (; uu < ju;) Zu.push(this.childString(uu)), uu = this.buffer[uu + 3];
        return Uu + "(" + Zu.join(",") + ")"
      }
      findChild(uu, Eu, ju, su, Uu) {
        let {
          buffer: Zu
        } = this, Xu = -1;
        for (let lu = uu; lu != Eu && !(Du(Uu, su, Zu[lu + 1], Zu[lu + 2]) && (Xu = lu, ju > 0)); lu = Zu[lu + 3]);
        return Xu
      }
      slice(uu, Eu, ju) {
        let su = this.buffer,
          Uu = new Uint16Array(Eu - uu),
          Zu = 0;
        for (let Xu = uu, lu = 0; Xu < Eu;) {
          Uu[lu++] = su[Xu++], Uu[lu++] = su[Xu++] - ju;
          let Eu = Uu[lu++] = su[Xu++] - ju;
          Uu[lu++] = su[Xu++] - uu, Zu = Math.max(Zu, Eu)
        }
        return new hu(Uu, Zu, this.set)
      }
    }

    function Du(uu, Eu, ju, su) {
      switch (uu) {
        case -2:
          return ju < Eu;
        case -1:
          return su >= Eu && ju < Eu;
        case 0:
          return ju < Eu && su > Eu;
        case 1:
          return ju <= Eu && su > Eu;
        case 2:
          return su > Eu;
        case 4:
          return !0
      }
    }

    function gu(uu, Eu, ju, su) {
      for (var Uu; uu.from == uu.to || (ju < 1 ? uu.from >= Eu : uu.from > Eu) || (ju > -1 ? uu.to <= Eu : uu.to < Eu);) {
        let Eu = !su && uu instanceof eu && uu.index < 0 ? null : uu.parent;
        if (!Eu) return uu;
        uu = Eu
      }
      let Zu = su ? 0 : Nu.IgnoreOverlays;
      if (su)
        for (let Xu = uu, lu = Xu.parent; lu; Xu = lu, lu = Xu.parent) Xu instanceof eu && Xu.index < 0 && (null === (Uu = lu.enter(Eu, ju, Zu)) || void 0 === Uu ? void 0 : Uu.from) != Xu.from && (uu = lu);
      for (;;) {
        let su = uu.enter(Eu, ju, Zu);
        if (!su) return uu;
        uu = su
      }
    }
    class Mu {
      cursor() {
        return new Pu(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(uu) {
        let Eu = Gu(this, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return Eu.length ? Eu[0] : null
      }
      getChildren(uu) {
        return Gu(this, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(uu) {
        return gu(this, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(uu) {
        return gu(this, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(uu) {
        return pu(this.parent, uu)
      }
      enterUnfinishedNodesBefore(uu) {
        let Eu = this.childBefore(uu),
          ju = this;
        for (; Eu;) {
          let uu = Eu.lastChild;
          if (!uu || uu.to != Eu.to) break;
          uu.type.isError && uu.from == uu.to ? (ju = Eu, Eu = uu.prevSibling) : Eu = uu
        }
        return ju
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class eu extends Mu {
      constructor(uu, Eu, ju, su) {
        super(), this._tree = uu, this.from = Eu, this.index = ju, this._parent = su
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
      nextChild(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let Zu = this;;) {
          for (let {
              children: Xu,
              positions: qu
            } = Zu._tree, fu = Eu > 0 ? Xu.length : -1; uu != fu; uu += Eu) {
            let fu, Cu = Xu[uu],
              bu = qu[uu] + Zu.from;
            if (Uu & Nu.EnterBracketed && Cu instanceof Ou && (fu = lu.get(Cu)) && !fu.overlay && fu.bracketed && ju >= bu && ju <= bu + Cu.length || Du(su, ju, bu, bu + Cu.length))
              if (Cu instanceof hu) {
                if (Uu & Nu.ExcludeBuffers) continue;
                let Xu = Cu.findChild(0, Cu.buffer.length, Eu, ju - bu, su);
                if (Xu > -1) return new Ju(new wu(Zu, Cu, uu, bu), null, Xu)
              } else if (Uu & Nu.IncludeAnonymous || !Cu.type.isAnonymous || ou(Cu)) {
              let Xu;
              if (!(Uu & Nu.IgnoreMounts) && (Xu = lu.get(Cu)) && !Xu.overlay) return new eu(Xu.tree, bu, uu, Zu);
              let qu = new eu(Cu, bu, uu, Zu);
              return Uu & Nu.IncludeAnonymous || !qu.type.isAnonymous ? qu : qu.nextChild(Eu < 0 ? Cu.children.length - 1 : 0, Eu, ju, su, Uu)
            }
          }
          if (Uu & Nu.IncludeAnonymous || !Zu.type.isAnonymous) return null;
          if (uu = Zu.index >= 0 ? Zu.index + Eu : Eu < 0 ? -1 : Zu._parent._tree.children.length, Zu = Zu._parent, !Zu) return null
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
      enter(uu, Eu) {
        let ju, su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(su & Nu.IgnoreOverlays) && (ju = lu.get(this._tree)) && ju.overlay) {
          let Uu = uu - this.from,
            Zu = su & Nu.EnterBracketed && ju.bracketed;
          for (let {
              from: uu,
              to: su
            }
            of ju.overlay)
            if ((Eu > 0 || Zu ? uu <= Uu : uu < Uu) && (Eu < 0 || Zu ? su >= Uu : su > Uu)) return new eu(ju.tree, ju.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, uu, Eu, su)
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

    function Gu(uu, Eu, ju, su) {
      let Uu = uu.cursor(),
        Zu = [];
      if (!Uu.firstChild()) return Zu;
      if (null != ju)
        for (let Xu = !1; !Xu;)
          if (Xu = Uu.type.is(ju), !Uu.nextSibling()) return Zu;
      for (;;) {
        if (null != su && Uu.type.is(su)) return Zu;
        if (Uu.type.is(Eu) && Zu.push(Uu.node), !Uu.nextSibling()) return null == su ? Zu : []
      }
    }

    function pu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eu.length - 1;
      for (let su = uu; ju >= 0; su = su.parent) {
        if (!su) return !1;
        if (!su.type.isAnonymous) {
          if (Eu[ju] && Eu[ju] != su.name) return !1;
          ju--
        }
      }
      return !0
    }
    class wu {
      constructor(uu, Eu, ju, su) {
        this.parent = uu, this.buffer = Eu, this.index = ju, this.start = su
      }
    }
    class Ju extends Mu {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(uu, Eu, ju) {
        super(), this.context = uu, this._parent = Eu, this.index = ju, this.type = uu.buffer.set.types[uu.buffer.buffer[ju]]
      }
      child(uu, Eu, ju) {
        let {
          buffer: su
        } = this.context, Uu = su.findChild(this.index + 4, su.buffer[this.index + 3], uu, Eu - this.context.start, ju);
        return Uu < 0 ? null : new Ju(this.context, this, Uu)
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
      enter(uu, Eu) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Nu.ExcludeBuffers) return null;
        let {
          buffer: ju
        } = this.context, su = ju.findChild(this.index + 4, ju.buffer[this.index + 3], Eu > 0 ? 1 : -1, uu - this.context.start, Eu);
        return su < 0 ? null : new Ju(this.context, this, su)
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
        } = this.context, Eu = uu.buffer[this.index + 3];
        return Eu < (this._parent ? uu.buffer[this._parent.index + 3] : uu.buffer.length) ? new Ju(this.context, this._parent, Eu) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: uu
        } = this.context, Eu = this._parent ? this._parent.index + 4 : 0;
        return this.index == Eu ? this.externalSibling(-1) : new Ju(this.context, this._parent, uu.findChild(Eu, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let uu = [],
          Eu = [],
          {
            buffer: ju
          } = this.context,
          su = this.index + 4,
          Uu = ju.buffer[this.index + 3];
        if (Uu > su) {
          let Zu = ju.buffer[this.index + 1];
          uu.push(ju.slice(su, Uu, Zu)), Eu.push(0)
        }
        return new Ou(this.type, uu, Eu, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function du(uu) {
      if (!uu.length) return null;
      let Eu = 0,
        ju = uu[0];
      for (let Zu = 1; Zu < uu.length; Zu++) {
        let su = uu[Zu];
        (su.from > ju.from || su.to < ju.to) && (ju = su, Eu = Zu)
      }
      let su = ju instanceof eu && ju.index < 0 ? null : ju.parent,
        Uu = uu.slice();
      return su ? Uu[Eu] = su : Uu.splice(Eu, 1), new au(Uu, ju)
    }
    class au {
      constructor(uu, Eu) {
        this.heads = uu, this.node = Eu
      }
      get next() {
        return du(this.heads)
      }
    }
    class Pu {
      get name() {
        return this.type.name
      }
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = Eu & ~Nu.EnterBracketed, uu instanceof eu) this.yieldNode(uu);
        else {
          this._tree = uu.context.parent, this.buffer = uu.context;
          for (let Eu = uu._parent; Eu; Eu = Eu._parent) this.stack.unshift(Eu.index);
          this.bufferNode = uu, this.yieldBuf(uu.index)
        }
      }
      yieldNode(uu) {
        return !!uu && (this._tree = uu, this.type = uu.type, this.from = uu.from, this.to = uu.to, !0)
      }
      yieldBuf(uu, Eu) {
        this.index = uu;
        let {
          start: ju,
          buffer: su
        } = this.buffer;
        return this.type = Eu || su.set.types[su.buffer[uu]], this.from = ju + su.buffer[uu + 1], this.to = ju + su.buffer[uu + 2], !0
      }
      yield(uu) {
        return !!uu && (uu instanceof eu ? (this.buffer = null, this.yieldNode(uu)) : (this.buffer = uu.context, this.yieldBuf(uu.index, uu.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(uu, Eu, ju) {
        if (!this.buffer) return this.yield(this._tree.nextChild(uu < 0 ? this._tree._tree.children.length - 1 : 0, uu, Eu, ju, this.mode));
        let {
          buffer: su
        } = this.buffer, Uu = su.findChild(this.index + 4, su.buffer[this.index + 3], uu, Eu - this.buffer.start, ju);
        return !(Uu < 0) && (this.stack.push(this.index), this.yieldBuf(Uu))
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
      enter(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(ju & Nu.ExcludeBuffers) && this.enterChild(1, uu, Eu) : this.yield(this._tree.enter(uu, Eu, ju))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & Nu.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let uu = this.mode & Nu.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(uu)
      }
      sibling(uu) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + uu, uu, 0, 4, this.mode));
        let {
          buffer: Eu
        } = this.buffer, ju = this.stack.length - 1;
        if (uu < 0) {
          let uu = ju < 0 ? 0 : this.stack[ju] + 4;
          if (this.index != uu) return this.yieldBuf(Eu.findChild(uu, this.index, -1, 0, 4))
        } else {
          let uu = Eu.buffer[this.index + 3];
          if (uu < (ju < 0 ? Eu.buffer.length : Eu.buffer[this.stack[ju] + 3])) return this.yieldBuf(uu)
        }
        return ju < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + uu, uu, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(uu) {
        let Eu, ju, {
          buffer: su
        } = this;
        if (su) {
          if (uu > 0) {
            if (this.index < su.buffer.buffer.length) return !1
          } else
            for (let uu = 0; uu < this.index; uu++)
              if (su.buffer.buffer[uu + 3] < this.index) return !1;
          ({
            index: Eu,
            parent: ju
          } = su)
        } else({
          index: Eu,
          _parent: ju
        } = this._tree);
        for (; ju;
          ({
            index: Eu,
            _parent: ju
          } = ju))
          if (Eu > -1)
            for (let su = Eu + uu, Uu = uu < 0 ? -1 : ju._tree.children.length; su != Uu; su += uu) {
              let uu = ju._tree.children[su];
              if (this.mode & Nu.IncludeAnonymous || uu instanceof hu || !uu.type.isAnonymous || ou(uu)) return !1
            }
        return !0
      }
      move(uu, Eu) {
        if (Eu && this.enterChild(uu, 0, 4)) return !0;
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
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (Eu < 1 ? this.from >= uu : this.from > uu) || (Eu > -1 ? this.to <= uu : this.to < uu)) && this.parent(););
        for (; this.enterChild(1, uu, Eu););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let uu = this.bufferNode,
          Eu = null,
          ju = 0;
        if (uu && uu.context == this.buffer) uu: for (let su = this.index, Uu = this.stack.length; Uu >= 0;) {
          for (let Zu = uu; Zu; Zu = Zu._parent)
            if (Zu.index == su) {
              if (su == this.index) return Zu;
              Eu = Zu, ju = Uu + 1;
              break uu
            } su = this.stack[--Uu]
        }
        for (let su = ju; su < this.stack.length; su++) Eu = new Ju(this.buffer, Eu, this.stack[su]);
        return this.bufferNode = new Ju(this.buffer, Eu, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(uu, Eu) {
        for (let ju = 0;;) {
          let su = !1;
          if (this.type.isAnonymous || !1 !== uu(this)) {
            if (this.firstChild()) {
              ju++;
              continue
            }
            this.type.isAnonymous || (su = !0)
          }
          for (;;) {
            if (su && Eu && Eu(this), su = this.type.isAnonymous, !ju) return;
            if (this.nextSibling()) break;
            this.parent(), ju--, su = !0
          }
        }
      }
      matchContext(uu) {
        if (!this.buffer) return pu(this.node.parent, uu);
        let {
          buffer: Eu
        } = this.buffer, {
          types: ju
        } = Eu.set;
        for (let su = uu.length - 1, Uu = this.stack.length - 1; su >= 0; Uu--) {
          if (Uu < 0) return pu(this._tree, uu, su);
          let Zu = ju[Eu.buffer[this.stack[Uu]]];
          if (!Zu.isAnonymous) {
            if (uu[su] && uu[su] != Zu.name) return !1;
            su--
          }
        }
        return !0
      }
    }

    function ou(uu) {
      return uu.children.some((uu => uu instanceof hu || !uu.type.isAnonymous || ou(uu)))
    }
    const ku = new WeakMap;

    function mu(uu, Eu) {
      if (!uu.isAnonymous || Eu instanceof hu || Eu.type != uu) return 1;
      let ju = ku.get(Eu);
      if (null == ju) {
        ju = 1;
        for (let su of Eu.children) {
          if (su.type != uu || !(su instanceof Ou)) {
            ju = 1;
            break
          }
          ju += mu(uu, su)
        }
        ku.set(Eu, ju)
      }
      return ju
    }

    function vu(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
      let fu = 0;
      for (let Nu = su; Nu < Uu; Nu++) fu += mu(uu, Eu[Nu]);
      let Cu = Math.ceil(1.5 * fu / 8),
        bu = [],
        cu = [];
      return function Eu(ju, su, Uu, Xu, lu) {
        for (let fu = Uu; fu < Xu;) {
          let Uu = fu,
            Nu = su[fu],
            Ou = mu(uu, ju[fu]);
          for (fu++; fu < Xu; fu++) {
            let Eu = mu(uu, ju[fu]);
            if (Ou + Eu >= Cu) break;
            Ou += Eu
          }
          if (fu == Uu + 1) {
            if (Ou > Cu) {
              let uu = ju[Uu];
              Eu(uu.children, uu.positions, 0, uu.children.length, su[Uu] + lu);
              continue
            }
            bu.push(ju[Uu])
          } else {
            let Eu = su[fu - 1] + ju[fu - 1].length - Nu;
            bu.push(vu(uu, ju, su, Uu, fu, Nu, Eu, null, qu))
          }
          cu.push(Nu + lu - Zu)
        }
      }(Eu, ju, su, Uu, 0), (lu || qu)(bu, cu, Xu)
    }
    class Ku {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(uu, Eu, ju) {
        let su = this.map.get(uu);
        su || this.map.set(uu, su = new Map), su.set(Eu, ju)
      }
      getBuffer(uu, Eu) {
        let ju = this.map.get(uu);
        return ju && ju.get(Eu)
      }
      set(uu, Eu) {
        uu instanceof Ju ? this.setBuffer(uu.context.buffer, uu.index, Eu) : uu instanceof eu && this.map.set(uu.tree, Eu)
      }
      get(uu) {
        return uu instanceof Ju ? this.getBuffer(uu.context.buffer, uu.index) : uu instanceof eu ? this.map.get(uu.tree) : void 0
      }
      cursorSet(uu, Eu) {
        uu.buffer ? this.setBuffer(uu.buffer.buffer, uu.index, Eu) : this.map.set(uu.tree, Eu)
      }
      cursorGet(uu) {
        return uu.buffer ? this.getBuffer(uu.buffer.buffer, uu.index) : this.map.get(uu.tree)
      }
    }
    class Vu {
      constructor(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = uu, this.to = Eu, this.tree = ju, this.offset = su, this.open = (Uu ? 1 : 0) | (Zu ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = [new Vu(0, uu.length, uu, 0, !1, ju)];
        for (let Uu of Eu) Uu.to > uu.length && su.push(Uu);
        return su
      }
      static applyChanges(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!Eu.length) return uu;
        let su = [],
          Uu = 1,
          Zu = uu.length ? uu[0] : null;
        for (let Xu = 0, lu = 0, qu = 0;; Xu++) {
          let fu = Xu < Eu.length ? Eu[Xu] : null,
            Cu = fu ? fu.fromA : 1e9;
          if (Cu - lu >= ju)
            for (; Zu && Zu.from < Cu;) {
              let Eu = Zu;
              if (lu >= Eu.from || Cu <= Eu.to || qu) {
                let uu = Math.max(Eu.from, lu) - qu,
                  ju = Math.min(Eu.to, Cu) - qu;
                Eu = uu >= ju ? null : new Vu(uu, ju, Eu.tree, Eu.offset + qu, Xu > 0, !!fu)
              }
              if (Eu && su.push(Eu), Zu.to > Cu) break;
              Zu = Uu < uu.length ? uu[Uu++] : null
            }
          if (!fu) break;
          lu = fu.toA, qu = fu.toA - fu.toB
        }
        return su
      }
    }
    class ru {
      startParse(uu, Eu, ju) {
        return "string" == typeof uu && (uu = new Qu(uu)), ju = ju ? ju.length ? ju.map((uu => new Zu(uu.from, uu.to))) : [new Zu(0, 0)] : [new Zu(0, uu.length)], this.createParse(uu, Eu || [], ju)
      }
      parse(uu, Eu, ju) {
        let su = this.startParse(uu, Eu, ju);
        for (;;) {
          let uu = su.advance();
          if (uu) return uu
        }
      }
    }
    class Qu {
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
      read(uu, Eu) {
        return this.string.slice(uu, Eu)
      }
    }
    new Xu({
      perNode: !0
    })
  },
  41586: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => cu,
      g: () => qu,
      i: () => bu,
      l: () => ku
    });
    var su = ju(41580);
    let Uu = 0;
    class Zu {
      constructor(uu, Eu, ju, su) {
        this.name = uu, this.set = Eu, this.base = ju, this.modified = su, this.id = Uu++
      }
      toString() {
        let {
          name: uu
        } = this;
        for (let Eu of this.modified) Eu.name && (uu = `${Eu.name}(${uu})`);
        return uu
      }
      static define(uu, Eu) {
        let ju = "string" == typeof uu ? uu : "?";
        if (uu instanceof Zu && (Eu = uu), null === Eu || void 0 === Eu ? void 0 : Eu.base) throw new Error("Can not derive from a modified tag");
        let su = new Zu(ju, [], null, []);
        if (su.set.push(su), Eu)
          for (let Uu of Eu.set) su.set.push(Uu);
        return su
      }
      static defineModifier(uu) {
        let Eu = new lu(uu);
        return uu => uu.modified.indexOf(Eu) > -1 ? uu : lu.get(uu.base || uu, uu.modified.concat(Eu).sort(((uu, Eu) => uu.id - Eu.id)))
      }
    }
    let Xu = 0;
    class lu {
      constructor(uu) {
        this.name = uu, this.instances = [], this.id = Xu++
      }
      static get(uu, Eu) {
        if (!Eu.length) return uu;
        let ju = Eu[0].instances.find((ju => {
          return ju.base == uu && (su = Eu, Uu = ju.modified, su.length == Uu.length && su.every(((uu, Eu) => uu == Uu[Eu])));
          var su, Uu
        }));
        if (ju) return ju;
        let su = [],
          Uu = new Zu(uu.name, su, uu, Eu);
        for (let Zu of Eu) Zu.instances.push(Uu);
        let Xu = function(uu) {
          let Eu = [
            []
          ];
          for (let ju = 0; ju < uu.length; ju++)
            for (let su = 0, Uu = Eu.length; su < Uu; su++) Eu.push(Eu[su].concat(uu[ju]));
          return Eu.sort(((uu, Eu) => Eu.length - uu.length))
        }(Eu);
        for (let Zu of uu.set)
          if (!Zu.modified.length)
            for (let uu of Xu) su.push(lu.get(Zu, uu));
        return Uu
      }
    }

    function qu(uu) {
      let Eu = Object.create(null);
      for (let ju in uu) {
        let su = uu[ju];
        Array.isArray(su) || (su = [su]);
        for (let uu of ju.split(" "))
          if (uu) {
            let ju = [],
              Uu = 2,
              Zu = uu;
            for (let Eu = 0;;) {
              if ("..." == Zu && Eu > 0 && Eu + 3 == uu.length) {
                Uu = 1;
                break
              }
              let su = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Zu);
              if (!su) throw new RangeError("Invalid path: " + uu);
              if (ju.push("*" == su[0] ? "" : '"' == su[0][0] ? JSON.parse(su[0]) : su[0]), Eu += su[0].length, Eu == uu.length) break;
              let Xu = uu[Eu++];
              if (Eu == uu.length && "!" == Xu) {
                Uu = 0;
                break
              }
              if ("/" != Xu) throw new RangeError("Invalid path: " + uu);
              Zu = uu.slice(Eu)
            }
            let Xu = ju.length - 1,
              lu = ju[Xu];
            if (!lu) throw new RangeError("Invalid path: " + uu);
            let qu = new Cu(su, Uu, Xu > 0 ? ju.slice(0, Xu) : null);
            Eu[lu] = qu.sort(Eu[lu])
          }
      }
      return fu.add(Eu)
    }
    const fu = new su.j({
      combine(uu, Eu) {
        let ju, su, Uu;
        for (; uu || Eu;) {
          if (!uu || Eu && uu.depth >= Eu.depth ? (Uu = Eu, Eu = Eu.next) : (Uu = uu, uu = uu.next), ju && ju.mode == Uu.mode && !Uu.context && !ju.context) continue;
          let Zu = new Cu(Uu.tags, Uu.mode, Uu.context);
          ju ? ju.next = Zu : su = Zu, ju = Zu
        }
        return su
      }
    });
    class Cu {
      constructor(uu, Eu, ju, su) {
        this.tags = uu, this.mode = Eu, this.context = ju, this.next = su
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

    function bu(uu, Eu) {
      let ju = Object.create(null);
      for (let Zu of uu)
        if (Array.isArray(Zu.tag))
          for (let uu of Zu.tag) ju[uu.id] = Zu.class;
        else ju[Zu.tag.id] = Zu.class;
      let {
        scope: su,
        all: Uu = null
      } = Eu || {};
      return {
        style: uu => {
          let Eu = Uu;
          for (let su of uu)
            for (let uu of su.set) {
              let su = ju[uu.id];
              if (su) {
                Eu = Eu ? Eu + " " + su : su;
                break
              }
            }
          return Eu
        },
        scope: su
      }
    }

    function cu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uu.length,
        Zu = new Nu(su, Array.isArray(Eu) ? Eu : [Eu], ju);
      Zu.highlightRange(uu.cursor(), su, Uu, "", Zu.highlighters), Zu.flush(Uu)
    }
    Cu.empty = new Cu([], 2, null);
    class Nu {
      constructor(uu, Eu, ju) {
        this.at = uu, this.highlighters = Eu, this.span = ju, this.class = ""
      }
      startSpan(uu, Eu) {
        Eu != this.class && (this.flush(uu), uu > this.at && (this.at = uu), this.class = Eu)
      }
      flush(uu) {
        uu > this.at && this.class && this.span(this.at, uu, this.class)
      }
      highlightRange(uu, Eu, ju, Uu, Zu) {
        let {
          type: Xu,
          from: lu,
          to: qu
        } = uu;
        if (lu >= ju || qu <= Eu) return;
        Xu.isTop && (Zu = this.highlighters.filter((uu => !uu.scope || uu.scope(Xu))));
        let bu = Uu,
          cu = function(uu) {
            let Eu = uu.type.prop(fu);
            for (; Eu && Eu.context && !uu.matchContext(Eu.context);) Eu = Eu.next;
            return Eu || null
          }(uu) || Cu.empty,
          Nu = function(uu, Eu) {
            let ju = null;
            for (let su of uu) {
              let uu = su.style(Eu);
              uu && (ju = ju ? ju + " " + uu : uu)
            }
            return ju
          }(Zu, cu.tags);
        if (Nu && (bu && (bu += " "), bu += Nu, 1 == cu.mode && (Uu += (Uu ? " " : "") + Nu)), this.startSpan(Math.max(Eu, lu), bu), cu.opaque) return;
        let Ou = uu.tree && uu.tree.prop(su.j.mounted);
        if (Ou && Ou.overlay) {
          let su = uu.node.enter(Ou.overlay[0].from + lu, 1),
            Xu = this.highlighters.filter((uu => !uu.scope || uu.scope(Ou.tree.type))),
            fu = uu.firstChild();
          for (let Cu = 0, cu = lu;; Cu++) {
            let Nu = Cu < Ou.overlay.length ? Ou.overlay[Cu] : null,
              Yu = Nu ? Nu.from + lu : qu,
              hu = Math.max(Eu, cu),
              Du = Math.min(ju, Yu);
            if (hu < Du && fu)
              for (; uu.from < Du && (this.highlightRange(uu, hu, Du, Uu, Zu), this.startSpan(Math.min(Du, uu.to), bu), !(uu.to >= Yu) && uu.nextSibling()););
            if (!Nu || Yu > ju) break;
            cu = Nu.to + lu, cu > Eu && (this.highlightRange(su.cursor(), Math.max(Eu, Nu.from + lu), Math.min(ju, cu), "", Xu), this.startSpan(Math.min(ju, cu), bu))
          }
          fu && uu.parent()
        } else if (uu.firstChild()) {
          Ou && (Uu = "");
          do {
            if (!(uu.to <= Eu)) {
              if (uu.from >= ju) break;
              this.highlightRange(uu, Eu, ju, Uu, Zu), this.startSpan(Math.min(ju, uu.to), bu)
            }
          } while (uu.nextSibling());
          uu.parent()
        }
      }
    }
    const Ou = Zu.define,
      Yu = Ou(),
      hu = Ou(),
      Du = Ou(hu),
      gu = Ou(hu),
      Mu = Ou(),
      eu = Ou(Mu),
      Gu = Ou(Mu),
      pu = Ou(),
      wu = Ou(pu),
      Ju = Ou(),
      du = Ou(),
      au = Ou(),
      Pu = Ou(au),
      ou = Ou(),
      ku = {
        comment: Yu,
        lineComment: Ou(Yu),
        blockComment: Ou(Yu),
        docComment: Ou(Yu),
        name: hu,
        variableName: Ou(hu),
        typeName: Du,
        tagName: Ou(Du),
        propertyName: gu,
        attributeName: Ou(gu),
        className: Ou(hu),
        labelName: Ou(hu),
        namespace: Ou(hu),
        macroName: Ou(hu),
        literal: Mu,
        string: eu,
        docString: Ou(eu),
        character: Ou(eu),
        attributeValue: Ou(eu),
        number: Gu,
        integer: Ou(Gu),
        float: Ou(Gu),
        bool: Ou(Mu),
        regexp: Ou(Mu),
        escape: Ou(Mu),
        color: Ou(Mu),
        url: Ou(Mu),
        keyword: Ju,
        self: Ou(Ju),
        null: Ou(Ju),
        atom: Ou(Ju),
        unit: Ou(Ju),
        modifier: Ou(Ju),
        operatorKeyword: Ou(Ju),
        controlKeyword: Ou(Ju),
        definitionKeyword: Ou(Ju),
        moduleKeyword: Ou(Ju),
        operator: du,
        derefOperator: Ou(du),
        arithmeticOperator: Ou(du),
        logicOperator: Ou(du),
        bitwiseOperator: Ou(du),
        compareOperator: Ou(du),
        updateOperator: Ou(du),
        definitionOperator: Ou(du),
        typeOperator: Ou(du),
        controlOperator: Ou(du),
        punctuation: au,
        separator: Ou(au),
        bracket: Pu,
        angleBracket: Ou(Pu),
        squareBracket: Ou(Pu),
        paren: Ou(Pu),
        brace: Ou(Pu),
        content: pu,
        heading: wu,
        heading1: Ou(wu),
        heading2: Ou(wu),
        heading3: Ou(wu),
        heading4: Ou(wu),
        heading5: Ou(wu),
        heading6: Ou(wu),
        contentSeparator: Ou(pu),
        list: Ou(pu),
        quote: Ou(pu),
        emphasis: Ou(pu),
        strong: Ou(pu),
        link: Ou(pu),
        monospace: Ou(pu),
        strikethrough: Ou(pu),
        inserted: Ou(),
        deleted: Ou(),
        changed: Ou(),
        invalid: Ou(),
        meta: ou,
        documentMeta: Ou(ou),
        annotation: Ou(ou),
        processingInstruction: Ou(ou),
        definition: Zu.defineModifier("definition"),
        constant: Zu.defineModifier("constant"),
        function: Zu.defineModifier("function"),
        standard: Zu.defineModifier("standard"),
        local: Zu.defineModifier("local"),
        special: Zu.defineModifier("special")
      };
    for (let mu in ku) {
      let uu = ku[mu];
      uu instanceof Zu && (uu.name = mu)
    }
    bu([{
      tag: ku.link,
      class: "tok-link"
    }, {
      tag: ku.heading,
      class: "tok-heading"
    }, {
      tag: ku.emphasis,
      class: "tok-emphasis"
    }, {
      tag: ku.strong,
      class: "tok-strong"
    }, {
      tag: ku.keyword,
      class: "tok-keyword"
    }, {
      tag: ku.atom,
      class: "tok-atom"
    }, {
      tag: ku.bool,
      class: "tok-bool"
    }, {
      tag: ku.url,
      class: "tok-url"
    }, {
      tag: ku.labelName,
      class: "tok-labelName"
    }, {
      tag: ku.inserted,
      class: "tok-inserted"
    }, {
      tag: ku.deleted,
      class: "tok-deleted"
    }, {
      tag: ku.literal,
      class: "tok-literal"
    }, {
      tag: ku.string,
      class: "tok-string"
    }, {
      tag: ku.number,
      class: "tok-number"
    }, {
      tag: [ku.regexp, ku.escape, ku.special(ku.string)],
      class: "tok-string2"
    }, {
      tag: ku.variableName,
      class: "tok-variableName"
    }, {
      tag: ku.local(ku.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: ku.definition(ku.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: ku.special(ku.variableName),
      class: "tok-variableName2"
    }, {
      tag: ku.definition(ku.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: ku.typeName,
      class: "tok-typeName"
    }, {
      tag: ku.namespace,
      class: "tok-namespace"
    }, {
      tag: ku.className,
      class: "tok-className"
    }, {
      tag: ku.macroName,
      class: "tok-macroName"
    }, {
      tag: ku.propertyName,
      class: "tok-propertyName"
    }, {
      tag: ku.operator,
      class: "tok-operator"
    }, {
      tag: ku.comment,
      class: "tok-comment"
    }, {
      tag: ku.meta,
      class: "tok-meta"
    }, {
      tag: ku.invalid,
      class: "tok-invalid"
    }, {
      tag: ku.punctuation,
      class: "tok-punctuation"
    }])
  },
  41596: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu.l,
      d: () => Xu.y,
      g: () => Xu.L,
      i: () => Xu.N,
      l: () => lu.o,
      p: () => wj,
      s: () => lu.T,
      u: () => lu.ib
    });
    var su = ju(1435),
      Uu = ju(1432),
      Zu = ju(58),
      Xu = ju(41550),
      lu = ju(41553),
      qu = ju(41571),
      fu = ju(41580);

    function Cu(uu, Eu) {
      return ju => {
        let {
          state: su,
          dispatch: Uu
        } = ju;
        if (su.readOnly) return !1;
        let Zu = uu(Eu, su);
        return !!Zu && (Uu(su.update(Zu)), !0)
      }
    }
    const bu = Cu(Du, 0),
      cu = Cu(hu, 0),
      Nu = Cu(((uu, Eu) => hu(uu, Eu, function(uu) {
        let Eu = [];
        for (let ju of uu.selection.HY) {
          let su = uu.doc.lineAt(ju.from),
            Uu = ju.to <= su.to ? su : uu.doc.lineAt(ju.to);
          Uu.from > su.from && Uu.from == ju.to && (Uu = ju.to == su.to + 1 ? su : uu.doc.lineAt(ju.to - 1));
          let Zu = Eu.length - 1;
          Zu >= 0 && Eu[Zu].to > su.from ? Eu[Zu].to = Uu.to : Eu.push({
            from: su.from + /^\s*/.exec(su.text)[0].length,
            to: Uu.to
          })
        }
        return Eu
      }(Eu))), 0);

    function Ou(uu, Eu) {
      let ju = uu.languageDataAt("commentTokens", Eu, 1);
      return ju.length ? ju[0] : {}
    }
    const Yu = 50;

    function hu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eu.selection.HY,
        su = ju.map((uu => Ou(Eu, uu.from).block));
      if (!su.every((uu => uu))) return null;
      let Uu = ju.map(((uu, ju) => function(uu, Eu, ju, su) {
        let Uu, Zu, {
            open: Xu,
            close: lu
          } = Eu,
          qu = uu.sliceDoc(ju - Yu, ju),
          fu = uu.sliceDoc(su, su + Yu),
          Cu = /\s*$/.exec(qu)[0].length,
          bu = /^\s*/.exec(fu)[0].length,
          cu = qu.length - Cu;
        if (qu.slice(cu - Xu.length, cu) == Xu && fu.slice(bu, bu + lu.length) == lu) return {
          open: {
            pos: ju - Cu,
            margin: Cu && 1
          },
          close: {
            pos: su + bu,
            margin: bu && 1
          }
        };
        su - ju <= 2 * Yu ? Uu = Zu = uu.sliceDoc(ju, su) : (Uu = uu.sliceDoc(ju, ju + Yu), Zu = uu.sliceDoc(su - Yu, su));
        let Nu = /^\s*/.exec(Uu)[0].length,
          Ou = /\s*$/.exec(Zu)[0].length,
          hu = Zu.length - Ou - lu.length;
        return Uu.slice(Nu, Nu + Xu.length) == Xu && Zu.slice(hu, hu + lu.length) == lu ? {
          open: {
            pos: ju + Nu + Xu.length,
            margin: /\s/.test(Uu.charAt(Nu + Xu.length)) ? 1 : 0
          },
          close: {
            pos: su - Ou - lu.length,
            margin: /\s/.test(Zu.charAt(hu - 1)) ? 1 : 0
          }
        } : null
      }(Eu, su[ju], uu.from, uu.to)));
      if (2 != uu && !Uu.every((uu => uu))) return {
        changes: Eu.changes(ju.map(((uu, Eu) => Uu[Eu] ? [] : [{
          from: uu.from,
          insert: su[Eu].open + " "
        }, {
          from: uu.to,
          insert: " " + su[Eu].close
        }])))
      };
      if (1 != uu && Uu.some((uu => uu))) {
        let uu = [];
        for (let Eu, ju = 0; ju < Uu.length; ju++)
          if (Eu = Uu[ju]) {
            let Uu = su[ju],
              {
                open: Zu,
                close: Xu
              } = Eu;
            uu.push({
              from: Zu.pos - Uu.open.length,
              to: Zu.pos + Zu.margin
            }, {
              from: Xu.pos - Xu.margin,
              to: Xu.pos + Uu.close.length
            })
          } return {
          changes: uu
        }
      }
      return null
    }

    function Du(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eu.selection.HY,
        su = [],
        Uu = -1;
      uu: for (let {
          from: Zu,
          to: Xu
        }
        of ju) {
        let uu, ju = su.length,
          lu = 1e9;
        for (let qu = Zu; qu <= Xu;) {
          let ju = Eu.doc.lineAt(qu);
          if (void 0 == uu && (uu = Ou(Eu, ju.from).line, !uu)) continue uu;
          if (ju.from > Uu && (Zu == Xu || Xu > ju.from)) {
            Uu = ju.from;
            let Eu = /^\s*/.exec(ju.text)[0].length,
              Zu = Eu == ju.length,
              Xu = ju.text.slice(Eu, Eu + uu.length) == uu ? Eu : -1;
            Eu < ju.text.length && Eu < lu && (lu = Eu), su.push({
              line: ju,
              comment: Xu,
              token: uu,
              indent: Eu,
              empty: Zu,
              single: !1
            })
          }
          qu = ju.to + 1
        }
        if (lu < 1e9)
          for (let Eu = ju; Eu < su.length; Eu++) su[Eu].indent < su[Eu].line.text.length && (su[Eu].indent = lu);
        su.length == ju + 1 && (su[ju].single = !0)
      }
      if (2 != uu && su.some((uu => uu.comment < 0 && (!uu.empty || uu.single)))) {
        let uu = [];
        for (let {
            line: Eu,
            token: Uu,
            indent: Zu,
            empty: Xu,
            single: lu
          }
          of su) !lu && Xu || uu.push({
          from: Eu.from + Zu,
          insert: Uu + " "
        });
        let ju = Eu.changes(uu);
        return {
          changes: ju,
          selection: Eu.selection.map(ju, 1)
        }
      }
      if (1 != uu && su.some((uu => uu.comment >= 0))) {
        let uu = [];
        for (let {
            line: Eu,
            comment: ju,
            token: Uu
          }
          of su)
          if (ju >= 0) {
            let su = Eu.from + ju,
              Zu = su + Uu.length;
            " " == Eu.text[Zu - Eu.from] && Zu++, uu.push({
              from: su,
              to: Zu
            })
          } return {
          changes: uu
        }
      }
      return null
    }
    const gu = Xu.b.define(),
      Mu = Xu.b.define(),
      eu = Xu.r.define(),
      Gu = Xu.r.define({
        combine: uu => (0, Xu.Z)(uu, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (uu, Eu) => Eu
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (uu, Eu) => (ju, su) => uu(ju, su) || Eu(ju, su)
        })
      }),
      pu = Xu.N.define({
        create: () => Su.empty,
        update(uu, Eu) {
          let ju = Eu.state.facet(Gu),
            su = Eu.annotation(gu);
          if (su) {
            let Uu = ou.fromTransaction(Eu, su.selection),
              Zu = su.side,
              Xu = 0 == Zu ? uu.undone : uu.done;
            return Xu = Uu ? ku(Xu, Xu.length, ju.minDepth, Uu) : Vu(Xu, Eu.startState.selection), new Su(0 == Zu ? su.rest : Xu, 0 == Zu ? Xu : su.rest)
          }
          let Uu = Eu.annotation(Mu);
          if ("full" != Uu && "before" != Uu || (uu = uu.isolate()), !1 === Eu.annotation(Xu.Q.addToHistory)) return Eu.changes.empty ? uu : uu.addMapping(Eu.changes.desc);
          let Zu = ou.fromTransaction(Eu),
            lu = Eu.annotation(Xu.Q.time),
            qu = Eu.annotation(Xu.Q.userEvent);
          return Zu ? uu = uu.addChanges(Zu, lu, qu, ju, Eu) : Eu.selection && (uu = uu.addSelection(Eu.startState.selection, lu, qu, ju.newGroupDelay)), "full" != Uu && "after" != Uu || (uu = uu.isolate()), uu
        },
        toJSON: uu => ({
          done: uu.done.map((uu => uu.toJSON())),
          undone: uu.undone.map((uu => uu.toJSON()))
        }),
        fromJSON: uu => new Su(uu.done.map(ou.fromJSON), uu.undone.map(ou.fromJSON))
      });

    function wu(uu, Eu) {
      return function(ju) {
        let {
          state: su,
          dispatch: Uu
        } = ju;
        if (!Eu && su.readOnly) return !1;
        let Zu = su.field(pu, !1);
        if (!Zu) return !1;
        let Xu = Zu.pop(uu, su, Eu);
        return !!Xu && (Uu(Xu), !0)
      }
    }
    const Ju = wu(0, !1),
      du = wu(1, !1),
      au = wu(0, !0),
      Pu = wu(1, !0);
    class ou {
      constructor(uu, Eu, ju, su, Uu) {
        this.changes = uu, this.effects = Eu, this.mapped = ju, this.startSelection = su, this.selectionsAfter = Uu
      }
      setSelAfter(uu) {
        return new ou(this.changes, this.effects, this.mapped, this.startSelection, uu)
      }
      toJSON() {
        var uu, Eu, ju;
        return {
          changes: null === (uu = this.changes) || void 0 === uu ? void 0 : uu.toJSON(),
          mapped: null === (Eu = this.mapped) || void 0 === Eu ? void 0 : Eu.toJSON(),
          startSelection: null === (ju = this.startSelection) || void 0 === ju ? void 0 : ju.toJSON(),
          selectionsAfter: this.selectionsAfter.map((uu => uu.toJSON()))
        }
      }
      static fromJSON(uu) {
        return new ou(uu.changes && Xu.ChangeSet.fromJSON(uu.changes), [], uu.mapped && Xu.e.fromJSON(uu.mapped), uu.startSelection && Xu.l.fromJSON(uu.startSelection), uu.selectionsAfter.map(Xu.l.fromJSON))
      }
      static fromTransaction(uu, Eu) {
        let ju = vu;
        for (let su of uu.startState.facet(eu)) {
          let Eu = su(uu);
          Eu.length && (ju = ju.concat(Eu))
        }
        return !ju.length && uu.changes.empty ? null : new ou(uu.changes.invert(uu.startState.doc), ju, void 0, Eu || uu.startState.selection, vu)
      }
      static selection(uu) {
        return new ou(void 0, vu, void 0, void 0, uu)
      }
    }

    function ku(uu, Eu, ju, su) {
      let Uu = Eu + 1 > ju + 20 ? Eu - ju - 1 : 0,
        Zu = uu.slice(Uu, Eu);
      return Zu.push(su), Zu
    }

    function mu(uu, Eu) {
      return uu.length ? Eu.length ? uu.concat(Eu) : uu : Eu
    }
    const vu = [],
      Ku = 200;

    function Vu(uu, Eu) {
      if (uu.length) {
        let ju = uu[uu.length - 1],
          su = ju.selectionsAfter.slice(Math.max(0, ju.selectionsAfter.length - Ku));
        return su.length && su[su.length - 1].eq(Eu) ? uu : (su.push(Eu), ku(uu, uu.length - 1, 1e9, ju.setSelAfter(su)))
      }
      return [ou.selection([Eu])]
    }

    function ru(uu) {
      let Eu = uu[uu.length - 1],
        ju = uu.slice();
      return ju[uu.length - 1] = Eu.setSelAfter(Eu.selectionsAfter.slice(0, Eu.selectionsAfter.length - 1)), ju
    }

    function Qu(uu, Eu) {
      if (!uu.length) return uu;
      let ju = uu.length,
        su = vu;
      for (; ju;) {
        let Uu = iu(uu[ju - 1], Eu, su);
        if (Uu.changes && !Uu.changes.empty || Uu.effects.length) {
          let Eu = uu.slice(0, ju);
          return Eu[ju - 1] = Uu, Eu
        }
        Eu = Uu.mapped, ju--, su = Uu.selectionsAfter
      }
      return su.length ? [ou.selection(su)] : vu
    }

    function iu(uu, Eu, ju) {
      let su = mu(uu.selectionsAfter.length ? uu.selectionsAfter.map((uu => uu.map(Eu))) : vu, ju);
      if (!uu.changes) return ou.selection(su);
      let Uu = uu.changes.map(Eu),
        Zu = Eu.mapDesc(uu.changes, !0),
        lu = uu.mapped ? uu.mapped.composeDesc(Zu) : Zu;
      return new ou(Uu, Xu.L.mapEffects(uu.effects, Eu), lu, uu.startSelection.map(Zu), su)
    }
    const Wu = /^(input\.type|delete)($|\.)/;
    class Su {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = uu, this.undone = Eu, this.prevTime = ju, this.prevUserEvent = su
      }
      isolate() {
        return this.prevTime ? new Su(this.done, this.undone) : this
      }
      addChanges(uu, Eu, ju, su, Uu) {
        let Zu = this.done,
          lu = Zu[Zu.length - 1];
        return Zu = lu && lu.changes && !lu.changes.empty && uu.changes && (!ju || Wu.test(ju)) && (!lu.selectionsAfter.length && Eu - this.prevTime < su.newGroupDelay && su.joinToEvent(Uu, function(uu, Eu) {
          let ju = [],
            su = !1;
          return uu.iterChangedRanges(((uu, Eu) => ju.push(uu, Eu))), Eu.iterChangedRanges(((uu, Eu, Uu, Zu) => {
            for (let Xu = 0; Xu < ju.length;) {
              let uu = ju[Xu++],
                Eu = ju[Xu++];
              Zu >= uu && Uu <= Eu && (su = !0)
            }
          })), su
        }(lu.changes, uu.changes)) || "input.type.compose" == ju) ? ku(Zu, Zu.length - 1, su.minDepth, new ou(uu.changes.compose(lu.changes), mu(Xu.L.mapEffects(uu.effects, lu.changes), lu.effects), lu.mapped, lu.startSelection, vu)) : ku(Zu, Zu.length, su.minDepth, uu), new Su(Zu, vu, Eu, ju)
      }
      addSelection(uu, Eu, ju, su) {
        let Uu = this.done.length ? this.done[this.done.length - 1].selectionsAfter : vu;
        return Uu.length > 0 && Eu - this.prevTime < su && ju == this.prevUserEvent && ju && /^select($|\.)/.test(ju) && (Zu = Uu[Uu.length - 1], Xu = uu, Zu.HY.length == Xu.HY.length && 0 === Zu.HY.filter(((uu, Eu) => uu.empty != Xu.HY[Eu].empty)).length) ? this : new Su(Vu(this.done, uu), this.undone, Eu, ju);
        var Zu, Xu
      }
      addMapping(uu) {
        return new Su(Qu(this.done, uu), Qu(this.undone, uu), this.prevTime, this.prevUserEvent)
      }
      pop(uu, Eu, ju) {
        let su = 0 == uu ? this.done : this.undone;
        if (0 == su.length) return null;
        let Uu = su[su.length - 1],
          Zu = Uu.selectionsAfter[0] || (Uu.startSelection ? Uu.startSelection.map(Uu.changes.invertedDesc, 1) : Eu.selection);
        if (ju && Uu.selectionsAfter.length) return Eu.update({
          selection: Uu.selectionsAfter[Uu.selectionsAfter.length - 1],
          annotations: gu.of({
            side: uu,
            rest: ru(su),
            selection: Zu
          }),
          userEvent: 0 == uu ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Uu.changes) {
          let ju = 1 == su.length ? vu : su.slice(0, su.length - 1);
          return Uu.mapped && (ju = Qu(ju, Uu.mapped)), Eu.update({
            changes: Uu.changes,
            selection: Uu.startSelection,
            effects: Uu.effects,
            annotations: gu.of({
              side: uu,
              rest: ju,
              selection: Zu
            }),
            filter: !1,
            userEvent: 0 == uu ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    Su.empty = new Su(vu, vu);
    const Iu = [{
      key: "Mod-z",
      run: Ju,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: du,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: du,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: au,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Pu,
      preventDefault: !0
    }];

    function Fu(uu, Eu) {
      return Xu.l.create(uu.HY.map(Eu), uu.mainIndex)
    }

    function Bu(uu, Eu) {
      return uu.update({
        selection: Eu,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function Lu(uu, Eu) {
      let {
        state: ju,
        dispatch: su
      } = uu, Uu = Fu(ju.selection, Eu);
      return !Uu.eq(ju.selection, !0) && (su(Bu(ju, Uu)), !0)
    }

    function tu(uu, Eu) {
      return Xu.l.cursor(Eu ? uu.to : uu.from)
    }

    function xu(uu, Eu) {
      return Lu(uu, (ju => ju.empty ? uu.moveByChar(ju, Eu) : tu(ju, Eu)))
    }

    function Tu(uu) {
      return uu.textDirectionAt(uu.state.selection.main.head) == lu.h.LTR
    }
    const Hu = uu => xu(uu, !Tu(uu)),
      Au = uu => xu(uu, Tu(uu));

    function nu(uu, Eu) {
      return Lu(uu, (ju => ju.empty ? uu.moveByGroup(ju, Eu) : tu(ju, Eu)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function yu(uu, Eu, ju) {
      if (Eu.type.prop(ju)) return !0;
      let su = Eu.to - Eu.from;
      return su && (su > 2 || /[^\s,.;:]/.test(uu.sliceDoc(Eu.from, Eu.to))) || Eu.firstChild
    }

    function zu(uu, Eu, ju) {
      let su, Uu, Zu = (0, qu.qb)(uu).resolveInner(Eu.head),
        lu = ju ? fu.j.closedBy : fu.j.openedBy;
      for (let Xu = Eu.head;;) {
        let Eu = ju ? Zu.childAfter(Xu) : Zu.childBefore(Xu);
        if (!Eu) break;
        yu(uu, Eu, lu) ? Zu = Eu : Xu = ju ? Eu.to : Eu.from
      }
      return Uu = Zu.type.prop(lu) && (su = ju ? (0, qu.eb)(uu, Zu.from, 1) : (0, qu.eb)(uu, Zu.to, -1)) && su.matched ? ju ? su.end.to : su.end.from : ju ? Zu.to : Zu.from, Xu.l.cursor(Uu, ju ? -1 : 1)
    }

    function Ru(uu, Eu) {
      return Lu(uu, (ju => {
        if (!ju.empty) return tu(ju, Eu);
        let su = uu.moveVertically(ju, Eu);
        return su.head != ju.head ? su : uu.moveToLineBoundary(ju, Eu)
      }))
    }
    const uE = uu => Ru(uu, !1),
      EE = uu => Ru(uu, !0);

    function jE(uu) {
      let Eu, ju = uu.scrollDOM.clientHeight < uu.scrollDOM.scrollHeight - 2,
        su = 0,
        Uu = 0;
      if (ju) {
        for (let Eu of uu.state.facet(lu.l.scrollMargins)) {
          let ju = Eu(uu);
          (null === ju || void 0 === ju ? void 0 : ju.top) && (su = Math.max(null === ju || void 0 === ju ? void 0 : ju.top, su)), (null === ju || void 0 === ju ? void 0 : ju.bottom) && (Uu = Math.max(null === ju || void 0 === ju ? void 0 : ju.bottom, Uu))
        }
        Eu = uu.scrollDOM.clientHeight - su - Uu
      } else Eu = (uu.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: su,
        marginBottom: Uu,
        selfScroll: ju,
        height: Math.max(uu.defaultLineHeight, Eu - 5)
      }
    }

    function sE(uu, Eu) {
      let ju, su = jE(uu),
        {
          state: Uu
        } = uu,
        Zu = Fu(Uu.selection, (ju => ju.empty ? uu.moveVertically(ju, Eu, su.height) : tu(ju, Eu)));
      if (Zu.eq(Uu.selection)) return !1;
      if (su.selfScroll) {
        let Eu = uu.coordsAtPos(Uu.selection.main.head),
          Xu = uu.scrollDOM.getBoundingClientRect(),
          qu = Xu.top + su.marginTop,
          fu = Xu.bottom - su.marginBottom;
        Eu && Eu.top > qu && Eu.bottom < fu && (ju = lu.l.scrollIntoView(Zu.main.head, {
          y: "start",
          yMargin: Eu.top - qu
        }))
      }
      return uu.dispatch(Bu(Uu, Zu), {
        effects: ju
      }), !0
    }
    const UE = uu => sE(uu, !1),
      ZE = uu => sE(uu, !0);

    function XE(uu, Eu, ju) {
      let su = uu.lineBlockAt(Eu.head),
        Uu = uu.moveToLineBoundary(Eu, ju);
      if (Uu.head == Eu.head && Uu.head != (ju ? su.to : su.from) && (Uu = uu.moveToLineBoundary(Eu, ju, !1)), !ju && Uu.head == su.from && su.length) {
        let ju = /^\s*/.exec(uu.state.sliceDoc(su.from, Math.min(su.from + 100, su.to)))[0].length;
        ju && Eu.head != su.from + ju && (Uu = Xu.l.cursor(su.from + ju))
      }
      return Uu
    }

    function lE(uu, Eu, ju) {
      let su = !1,
        Uu = Fu(uu.selection, (Eu => {
          let Uu = (0, qu.eb)(uu, Eu.head, -1) || (0, qu.eb)(uu, Eu.head, 1) || Eu.head > 0 && (0, qu.eb)(uu, Eu.head - 1, 1) || Eu.head < uu.doc.length && (0, qu.eb)(uu, Eu.head + 1, -1);
          if (!Uu || !Uu.end) return Eu;
          su = !0;
          let Zu = Uu.start.from == Eu.head ? Uu.end.to : Uu.end.from;
          return ju ? Xu.l.range(Eu.anchor, Zu) : Xu.l.cursor(Zu)
        }));
      return !!su && (Eu(Bu(uu, Uu)), !0)
    }

    function qE(uu, Eu) {
      let ju = Fu(uu.state.selection, (uu => {
        let ju = Eu(uu);
        return Xu.l.range(uu.anchor, ju.head, ju.goalColumn, ju.bidiLevel || void 0, ju.assoc)
      }));
      return !ju.eq(uu.state.selection) && (uu.dispatch(Bu(uu.state, ju)), !0)
    }

    function fE(uu, Eu) {
      return qE(uu, (ju => uu.moveByChar(ju, Eu)))
    }
    const CE = uu => fE(uu, !Tu(uu)),
      bE = uu => fE(uu, Tu(uu));

    function cE(uu, Eu) {
      return qE(uu, (ju => uu.moveByGroup(ju, Eu)))
    }

    function NE(uu, Eu) {
      return qE(uu, (ju => uu.moveVertically(ju, Eu)))
    }
    const OE = uu => NE(uu, !1),
      YE = uu => NE(uu, !0);

    function hE(uu, Eu) {
      return qE(uu, (ju => uu.moveVertically(ju, Eu, jE(uu).height)))
    }
    const DE = uu => hE(uu, !1),
      gE = uu => hE(uu, !0),
      ME = uu => {
        let {
          state: Eu,
          dispatch: ju
        } = uu;
        return ju(Bu(Eu, {
          anchor: 0
        })), !0
      },
      eE = uu => {
        let {
          state: Eu,
          dispatch: ju
        } = uu;
        return ju(Bu(Eu, {
          anchor: Eu.doc.length
        })), !0
      },
      GE = uu => {
        let {
          state: Eu,
          dispatch: ju
        } = uu;
        return ju(Bu(Eu, {
          anchor: Eu.selection.main.anchor,
          head: 0
        })), !0
      },
      pE = uu => {
        let {
          state: Eu,
          dispatch: ju
        } = uu;
        return ju(Bu(Eu, {
          anchor: Eu.selection.main.anchor,
          head: Eu.doc.length
        })), !0
      };

    function wE(uu, Eu) {
      let {
        state: ju
      } = uu, su = ju.selection, Uu = ju.selection.HY.slice();
      for (let Zu of ju.selection.HY) {
        let su = ju.doc.lineAt(Zu.head);
        if (Eu ? su.to < uu.state.doc.length : su.from > 0)
          for (let ju = Zu;;) {
            let Zu = uu.moveVertically(ju, Eu);
            if (Zu.head < su.from || Zu.head > su.to) {
              Uu.some((uu => uu.head == Zu.head)) || Uu.push(Zu);
              break
            }
            if (Zu.head == ju.head) break;
            ju = Zu
          }
      }
      return Uu.length != su.HY.length && (uu.dispatch(Bu(ju, Xu.l.create(Uu, Uu.length - 1))), !0)
    }

    function JE(uu, Eu) {
      if (uu.state.readOnly) return !1;
      let ju = "delete.selection",
        {
          state: su
        } = uu,
        Uu = su.changeByRange((su => {
          let {
            from: Uu,
            to: Zu
          } = su;
          if (Uu == Zu) {
            let Xu = Eu(su);
            Xu < Uu ? (ju = "delete.backward", Xu = dE(uu, Xu, !1)) : Xu > Uu && (ju = "delete.forward", Xu = dE(uu, Xu, !0)), Uu = Math.min(Uu, Xu), Zu = Math.max(Zu, Xu)
          } else Uu = dE(uu, Uu, !1), Zu = dE(uu, Zu, !0);
          return Uu == Zu ? {
            range: su
          } : {
            changes: {
              from: Uu,
              to: Zu
            },
            range: Xu.l.cursor(Uu, Uu < su.head ? -1 : 1)
          }
        }));
      return !Uu.changes.empty && (uu.dispatch(su.update(Uu, {
        scrollIntoView: !0,
        userEvent: ju,
        effects: "delete.selection" == ju ? lu.l.announce.of(su.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function dE(uu, Eu, ju) {
      if (uu instanceof lu.l)
        for (let su of uu.state.facet(lu.l.atomicRanges).map((Eu => Eu(uu)))) su.between(Eu, Eu, ((uu, su) => {
          uu < Eu && su > Eu && (Eu = ju ? su : uu)
        }));
      return Eu
    }
    const aE = (uu, Eu, ju) => JE(uu, (su => {
        let Uu, Zu, lu = su.from,
          {
            state: fu
          } = uu,
          Cu = fu.doc.lineAt(lu);
        if (ju && !Eu && lu > Cu.from && lu < Cu.from + 200 && !/[^ \t]/.test(Uu = Cu.text.slice(0, lu - Cu.from))) {
          if ("\t" == Uu[Uu.length - 1]) return lu - 1;
          let uu = (0, Xu.bb)(Uu, fu.tabSize) % (0, qu.U)(fu) || (0, qu.U)(fu);
          for (let Eu = 0; Eu < uu && " " == Uu[Uu.length - 1 - Eu]; Eu++) lu--;
          Zu = lu
        } else Zu = (0, Xu.fb)(Cu.text, lu - Cu.from, Eu, Eu) + Cu.from, Zu == lu && Cu.number != (Eu ? fu.doc.lines : 1) ? Zu += Eu ? 1 : -1 : !Eu && /[\ufe00-\ufe0f]/.test(Cu.text.slice(Zu - Cu.from, lu - Cu.from)) && (Zu = (0, Xu.fb)(Cu.text, Zu - Cu.from, !1, !1) + Cu.from);
        return Zu
      })),
      PE = uu => aE(uu, !1, !0),
      oE = uu => aE(uu, !0, !1),
      kE = (uu, Eu) => JE(uu, (ju => {
        let su = ju.head,
          {
            state: Uu
          } = uu,
          Zu = Uu.doc.lineAt(su),
          lu = Uu.charCategorizer(su);
        for (let uu = null;;) {
          if (su == (Eu ? Zu.to : Zu.from)) {
            su == ju.head && Zu.number != (Eu ? Uu.doc.lines : 1) && (su += Eu ? 1 : -1);
            break
          }
          let qu = (0, Xu.fb)(Zu.text, su - Zu.from, Eu) + Zu.from,
            fu = Zu.text.slice(Math.min(su, qu) - Zu.from, Math.max(su, qu) - Zu.from),
            Cu = lu(fu);
          if (null != uu && Cu != uu) break;
          " " == fu && su == ju.head || (uu = Cu), su = qu
        }
        return su
      })),
      mE = uu => kE(uu, !1);

    function vE(uu) {
      let Eu = [],
        ju = -1;
      for (let su of uu.selection.HY) {
        let Uu = uu.doc.lineAt(su.from),
          Zu = uu.doc.lineAt(su.to);
        if (su.empty || su.to != Zu.from || (Zu = uu.doc.lineAt(su.to - 1)), ju >= Uu.number) {
          let uu = Eu[Eu.length - 1];
          uu.to = Zu.to, uu.HY.push(su)
        } else Eu.push({
          from: Uu.from,
          to: Zu.to,
          HY: [su]
        });
        ju = Zu.number + 1
      }
      return Eu
    }

    function KE(uu, Eu, ju) {
      if (uu.readOnly) return !1;
      let su = [],
        Uu = [];
      for (let Zu of vE(uu)) {
        if (ju ? Zu.to == uu.doc.length : 0 == Zu.from) continue;
        let Eu = uu.doc.lineAt(ju ? Zu.to + 1 : Zu.from - 1),
          lu = Eu.length + 1;
        if (ju) {
          su.push({
            from: Zu.to,
            to: Eu.to
          }, {
            from: Zu.from,
            insert: Eu.text + uu.lineBreak
          });
          for (let Eu of Zu.HY) Uu.push(Xu.l.range(Math.min(uu.doc.length, Eu.anchor + lu), Math.min(uu.doc.length, Eu.head + lu)))
        } else {
          su.push({
            from: Eu.from,
            to: Zu.from
          }, {
            from: Zu.to,
            insert: uu.lineBreak + Eu.text
          });
          for (let uu of Zu.HY) Uu.push(Xu.l.range(uu.anchor - lu, uu.head - lu))
        }
      }
      return !!su.length && (Eu(uu.update({
        changes: su,
        scrollIntoView: !0,
        selection: Xu.l.create(Uu, uu.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function VE(uu, Eu, ju) {
      if (uu.readOnly) return !1;
      let su = [];
      for (let Zu of vE(uu)) ju ? su.push({
        from: Zu.from,
        insert: uu.doc.slice(Zu.from, Zu.to) + uu.lineBreak
      }) : su.push({
        from: Zu.to,
        insert: uu.lineBreak + uu.doc.slice(Zu.from, Zu.to)
      });
      let Uu = uu.changes(su);
      return Eu(uu.update({
        changes: Uu,
        selection: uu.selection.map(Uu, ju ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const rE = QE(!1);

    function QE(uu) {
      return Eu => {
        let {
          state: ju,
          dispatch: su
        } = Eu;
        if (ju.readOnly) return !1;
        let Uu = ju.changeByRange((Eu => {
          let {
            from: su,
            to: Uu
          } = Eu, Zu = ju.doc.lineAt(su), lu = !uu && su == Uu && function(uu, Eu) {
            if (/\(\)|\[\]|\{\}/.test(uu.sliceDoc(Eu - 1, Eu + 1))) return {
              from: Eu,
              to: Eu
            };
            let ju, su = (0, qu.qb)(uu).resolveInner(Eu),
              Uu = su.childBefore(Eu),
              Zu = su.childAfter(Eu);
            return Uu && Zu && Uu.to <= Eu && Zu.from >= Eu && (ju = Uu.type.prop(fu.j.closedBy)) && ju.indexOf(Zu.name) > -1 && uu.doc.lineAt(Uu.to).from == uu.doc.lineAt(Zu.from).from && !/\S/.test(uu.sliceDoc(Uu.to, Zu.from)) ? {
              from: Uu.to,
              to: Zu.from
            } : null
          }(ju, su);
          uu && (su = Uu = (Uu <= Zu.to ? Zu : ju.doc.lineAt(Uu)).to);
          let Cu = new qu.e(ju, {
              simulateBreak: su,
              simulateDoubleBreak: !!lu
            }),
            bu = (0, qu.X)(Cu, su);
          for (null == bu && (bu = (0, Xu.bb)(/^\s*/.exec(ju.doc.lineAt(su).text)[0], ju.tabSize)); Uu < Zu.to && /\s/.test(Zu.text[Uu - Zu.from]);) Uu++;
          lu ? ({
            from: su,
            to: Uu
          } = lu) : su > Zu.from && su < Zu.from + 100 && !/\S/.test(Zu.text.slice(0, su)) && (su = Zu.from);
          let cu = ["", (0, qu.cb)(ju, bu)];
          return lu && cu.push((0, qu.cb)(ju, Cu.lineIndent(Zu.from, -1))), {
            changes: {
              from: su,
              to: Uu,
              insert: Xu.P.of(cu)
            },
            range: Xu.l.cursor(su + 1 + cu[1].length)
          }
        }));
        return su(ju.update(Uu, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function iE(uu, Eu) {
      let ju = -1;
      return uu.changeByRange((su => {
        let Uu = [];
        for (let Xu = su.from; Xu <= su.to;) {
          let Zu = uu.doc.lineAt(Xu);
          Zu.number > ju && (su.empty || su.to > Zu.from) && (Eu(Zu, Uu, su), ju = Zu.number), Xu = Zu.to + 1
        }
        let Zu = uu.changes(Uu);
        return {
          changes: Uu,
          range: Xu.l.range(Zu.mapPos(su.anchor, 1), Zu.mapPos(su.head, 1))
        }
      }))
    }
    const WE = uu => {
        let {
          state: Eu,
          dispatch: ju
        } = uu;
        return !Eu.readOnly && (ju(Eu.update(iE(Eu, ((uu, ju) => {
          ju.push({
            from: uu.from,
            insert: Eu.facet(qu.db)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      SE = uu => {
        let {
          state: Eu,
          dispatch: ju
        } = uu;
        return !Eu.readOnly && (ju(Eu.update(iE(Eu, ((uu, ju) => {
          let su = /^\s*/.exec(uu.text)[0];
          if (!su) return;
          let Uu = (0, Xu.bb)(su, Eu.tabSize),
            Zu = 0,
            lu = (0, qu.cb)(Eu, Math.max(0, Uu - (0, qu.U)(Eu)));
          for (; Zu < su.length && Zu < lu.length && su.charCodeAt(Zu) == lu.charCodeAt(Zu);) Zu++;
          ju.push({
            from: uu.from + Zu,
            to: uu.from + su.length,
            insert: lu.slice(Zu)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      IE = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: uu => Lu(uu, (Eu => zu(uu.state, Eu, !Tu(uu)))),
        shift: uu => qE(uu, (Eu => zu(uu.state, Eu, !Tu(uu))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: uu => Lu(uu, (Eu => zu(uu.state, Eu, Tu(uu)))),
        shift: uu => qE(uu, (Eu => zu(uu.state, Eu, Tu(uu))))
      }, {
        key: "Alt-ArrowUp",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu;
          return KE(Eu, ju, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu;
          return VE(Eu, ju, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu;
          return KE(Eu, ju, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu;
          return VE(Eu, ju, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: uu => wE(uu, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: uu => wE(uu, !0)
      }, {
        key: "Escape",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu, su = Eu.selection, Uu = null;
          return su.HY.length > 1 ? Uu = Xu.l.create([su.main]) : su.main.empty || (Uu = Xu.l.create([Xu.l.cursor(su.main.head)])), !!Uu && (ju(Bu(Eu, Uu)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: QE(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu, su = vE(Eu).map((uu => {
            let {
              from: ju,
              to: su
            } = uu;
            return Xu.l.range(ju, Math.min(su + 1, Eu.doc.length))
          }));
          return ju(Eu.update({
            selection: Xu.l.create(su),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu, su = Fu(Eu.selection, (uu => {
            let ju = (0, qu.qb)(Eu),
              su = ju.resolveStack(uu.from, 1);
            if (uu.empty) {
              let Eu = ju.resolveStack(uu.from, -1);
              Eu.node.from >= su.node.from && Eu.node.to <= su.node.to && (su = Eu)
            }
            for (let Eu = su; Eu; Eu = Eu.next) {
              let {
                node: ju
              } = Eu;
              if ((ju.from < uu.from && ju.to >= uu.to || ju.to > uu.to && ju.from <= uu.from) && Eu.next) return Xu.l.range(ju.to, ju.from)
            }
            return uu
          }));
          return !su.eq(Eu.selection) && (ju(Bu(Eu, su)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: SE
      }, {
        key: "Mod-]",
        run: WE
      }, {
        key: "Mod-Alt-\\",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu;
          if (Eu.readOnly) return !1;
          let su = Object.create(null),
            Uu = new qu.e(Eu, {
              overrideIndentation: uu => {
                let Eu = su[uu];
                return null == Eu ? -1 : Eu
              }
            }),
            Zu = iE(Eu, ((uu, ju, Zu) => {
              let Xu = (0, qu.X)(Uu, uu.from);
              if (null == Xu) return;
              /\S/.test(uu.text) || (Xu = 0);
              let lu = /^\s*/.exec(uu.text)[0],
                fu = (0, qu.cb)(Eu, Xu);
              (lu != fu || Zu.from < uu.from + lu.length) && (su[uu.from] = Xu, ju.push({
                from: uu.from,
                to: uu.from + lu.length,
                insert: fu
              }))
            }));
          return Zu.changes.empty || ju(Eu.update(Zu, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: uu => {
          if (uu.state.readOnly) return !1;
          let {
            state: Eu
          } = uu, ju = Eu.changes(vE(Eu).map((uu => {
            let {
              from: ju,
              to: su
            } = uu;
            return ju > 0 ? ju-- : su < Eu.doc.length && su++, {
              from: ju,
              to: su
            }
          }))), su = Fu(Eu.selection, (Eu => {
            let ju;
            if (uu.lineWrapping) {
              let su = uu.lineBlockAt(Eu.head),
                Uu = uu.coordsAtPos(Eu.head, Eu.assoc || 1);
              Uu && (ju = su.bottom + uu.documentTop - Uu.bottom + uu.defaultLineHeight / 2)
            }
            return uu.moveVertically(Eu, !0, ju)
          })).map(ju);
          return uu.dispatch({
            changes: ju,
            selection: su,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu;
          return lE(Eu, ju, !1)
        }
      }, {
        key: "Mod-/",
        run: uu => {
          let {
            state: Eu
          } = uu, ju = Eu.doc.lineAt(Eu.selection.main.from), su = Ou(uu.state, ju.from);
          return su.line ? bu(uu) : !!su.block && Nu(uu)
        }
      }, {
        key: "Alt-A",
        run: cu
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: uu => (uu.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: Hu,
        shift: CE,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: uu => nu(uu, !Tu(uu)),
        shift: uu => cE(uu, !Tu(uu)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: uu => Lu(uu, (Eu => XE(uu, Eu, !Tu(uu)))),
        shift: uu => qE(uu, (Eu => XE(uu, Eu, !Tu(uu)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: Au,
        shift: bE,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: uu => nu(uu, Tu(uu)),
        shift: uu => cE(uu, Tu(uu)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: uu => Lu(uu, (Eu => XE(uu, Eu, Tu(uu)))),
        shift: uu => qE(uu, (Eu => XE(uu, Eu, Tu(uu)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: uE,
        shift: OE,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: ME,
        shift: GE
      }, {
        mac: "Ctrl-ArrowUp",
        run: UE,
        shift: DE
      }, {
        key: "ArrowDown",
        run: EE,
        shift: YE,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: eE,
        shift: pE
      }, {
        mac: "Ctrl-ArrowDown",
        run: ZE,
        shift: gE
      }, {
        key: "PageUp",
        run: UE,
        shift: DE
      }, {
        key: "PageDown",
        run: ZE,
        shift: gE
      }, {
        key: "Home",
        run: uu => Lu(uu, (Eu => XE(uu, Eu, !1))),
        shift: uu => qE(uu, (Eu => XE(uu, Eu, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: ME,
        shift: GE
      }, {
        key: "End",
        run: uu => Lu(uu, (Eu => XE(uu, Eu, !0))),
        shift: uu => qE(uu, (Eu => XE(uu, Eu, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: eE,
        shift: pE
      }, {
        key: "Enter",
        run: rE,
        shift: rE
      }, {
        key: "Mod-a",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu;
          return ju(Eu.update({
            selection: {
              anchor: 0,
              head: Eu.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: PE,
        shift: PE,
        preventDefault: !0
      }, {
        key: "Delete",
        run: oE,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: mE,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: uu => kE(uu, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: uu => JE(uu, (Eu => {
          let ju = uu.moveToLineBoundary(Eu, !1).head;
          return Eu.head > ju ? ju : Math.max(0, Eu.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: uu => JE(uu, (Eu => {
          let ju = uu.moveToLineBoundary(Eu, !0).head;
          return Eu.head < ju ? ju : Math.min(uu.state.doc.length, Eu.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: Hu,
        shift: CE,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: Au,
        shift: bE
      }, {
        key: "Ctrl-p",
        run: uE,
        shift: OE
      }, {
        key: "Ctrl-n",
        run: EE,
        shift: YE
      }, {
        key: "Ctrl-a",
        run: uu => Lu(uu, (Eu => Xu.l.cursor(uu.lineBlockAt(Eu.head).from, 1))),
        shift: uu => qE(uu, (Eu => Xu.l.cursor(uu.lineBlockAt(Eu.head).from)))
      }, {
        key: "Ctrl-e",
        run: uu => Lu(uu, (Eu => Xu.l.cursor(uu.lineBlockAt(Eu.head).to, -1))),
        shift: uu => qE(uu, (Eu => Xu.l.cursor(uu.lineBlockAt(Eu.head).to)))
      }, {
        key: "Ctrl-d",
        run: oE
      }, {
        key: "Ctrl-h",
        run: PE
      }, {
        key: "Ctrl-k",
        run: uu => JE(uu, (Eu => {
          let ju = uu.lineBlockAt(Eu.head).to;
          return Eu.head < ju ? ju : Math.min(uu.state.doc.length, Eu.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: mE
      }, {
        key: "Ctrl-o",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu;
          if (Eu.readOnly) return !1;
          let su = Eu.changeByRange((uu => ({
            changes: {
              from: uu.from,
              to: uu.to,
              insert: Xu.P.of(["", ""])
            },
            range: Xu.l.cursor(uu.from)
          })));
          return ju(Eu.update(su, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: uu => {
          let {
            state: Eu,
            dispatch: ju
          } = uu;
          if (Eu.readOnly) return !1;
          let su = Eu.changeByRange((uu => {
            if (!uu.empty || 0 == uu.from || uu.from == Eu.doc.length) return {
              range: uu
            };
            let ju = uu.from,
              su = Eu.doc.lineAt(ju),
              Uu = ju == su.from ? ju - 1 : (0, Xu.fb)(su.text, ju - su.from, !1) + su.from,
              Zu = ju == su.to ? ju + 1 : (0, Xu.fb)(su.text, ju - su.from, !0) + su.from;
            return {
              changes: {
                from: Uu,
                to: Zu,
                insert: Eu.doc.slice(ju, Zu).append(Eu.doc.slice(Uu, ju))
              },
              range: Xu.l.cursor(Zu)
            }
          }));
          return !su.changes.empty && (ju(Eu.update(su, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: ZE
      }].map((uu => ({
        mac: uu.key,
        run: uu.run,
        shift: uu.shift
      }))))),
      FE = {
        key: "Tab",
        run: WE,
        shift: SE
      };
    var BE = ju(41598),
      LE = ju(41541),
      tE = ju(41606),
      xE = function(uu) {
        void 0 === uu && (uu = {});
        var {
          crosshairCursor: Eu = !1
        } = uu, ju = [];
        !1 !== uu.closeBracketsKeymap && (ju = ju.concat(LE.d)), !1 !== uu.defaultKeymap && (ju = ju.concat(IE)), !1 !== uu.searchKeymap && (ju = ju.concat(BE.h)), !1 !== uu.historyKeymap && (ju = ju.concat(Iu)), !1 !== uu.foldKeymap && (ju = ju.concat(qu.I)), !1 !== uu.completionKeymap && (ju = ju.concat(LE.m)), !1 !== uu.lintKeymap && (ju = ju.concat(tE.e));
        var su = [];
        return !1 !== uu.lineNumbers && su.push((0, lu.X)()), !1 !== uu.highlightActiveLineGutter && su.push((0, lu.L)()), !1 !== uu.highlightSpecialChars && su.push((0, lu.Q)()), !1 !== uu.history && su.push(function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [pu, Gu.of(uu), lu.l.domEventHandlers({
            beforeinput(uu, Eu) {
              let ju = "historyUndo" == uu.inputType ? Ju : "historyRedo" == uu.inputType ? du : null;
              return !!ju && (uu.preventDefault(), ju(Eu))
            }
          })]
        }()), !1 !== uu.foldGutter && su.push((0, qu.C)()), !1 !== uu.drawSelection && su.push((0, lu.w)()), !1 !== uu.dropCursor && su.push((0, lu.A)()), !1 !== uu.allowMultipleSelections && su.push(Xu.o.allowMultipleSelections.of(!0)), !1 !== uu.indentOnInput && su.push((0, qu.$)()), !1 !== uu.syntaxHighlighting && su.push((0, qu.kb)(qu.s, {
          fallback: !0
        })), !1 !== uu.bracketMatching && su.push((0, qu.p)()), !1 !== uu.closeBrackets && su.push((0, LE.h)()), !1 !== uu.autocompletion && su.push((0, LE.b)()), !1 !== uu.rectangularSelection && su.push((0, lu.$)()), !1 !== Eu && su.push((0, lu.v)()), !1 !== uu.highlightActiveLine && su.push((0, lu.M)()), !1 !== uu.highlightSelectionMatches && su.push((0, BE.f)()), uu.tabSize && "number" === typeof uu.tabSize && su.push(qu.db.of(" ".repeat(uu.tabSize))), su.concat([lu.V.of(ju.flat())]).filter(Boolean)
      },
      TE = ju(41586);
    const HE = "#e5c07b",
      AE = "#e06c75",
      nE = "#56b6c2",
      yE = "#ffffff",
      zE = "#abb2bf",
      RE = "#7d8799",
      uj = "#61afef",
      Ej = "#98c379",
      jj = "#d19a66",
      sj = "#c678dd",
      Uj = "#21252b",
      Zj = "#2c313a",
      Xj = "#282c34",
      lj = "#353a42",
      qj = "#3E4451",
      fj = "#528bff",
      Cj = lu.l.theme({
        "&": {
          color: zE,
          backgroundColor: Xj
        },
        ".cm-content": {
          caretColor: fj
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: fj
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: qj
        },
        ".cm-panels": {
          backgroundColor: Uj,
          color: zE
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
          backgroundColor: Xj,
          color: RE,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Zj
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: lj
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: lj,
          borderBottomColor: lj
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Zj,
            color: zE
          }
        }
      }, {
        dark: !0
      }),
      bj = qu.d.define([{
        tag: TE.l.keyword,
        color: sj
      }, {
        tag: [TE.l.name, TE.l.deleted, TE.l.character, TE.l.propertyName, TE.l.macroName],
        color: AE
      }, {
        tag: [TE.l.function(TE.l.variableName), TE.l.labelName],
        color: uj
      }, {
        tag: [TE.l.color, TE.l.constant(TE.l.name), TE.l.standard(TE.l.name)],
        color: jj
      }, {
        tag: [TE.l.definition(TE.l.name), TE.l.separator],
        color: zE
      }, {
        tag: [TE.l.typeName, TE.l.className, TE.l.number, TE.l.changed, TE.l.annotation, TE.l.modifier, TE.l.self, TE.l.namespace],
        color: HE
      }, {
        tag: [TE.l.operator, TE.l.operatorKeyword, TE.l.url, TE.l.escape, TE.l.regexp, TE.l.link, TE.l.special(TE.l.string)],
        color: nE
      }, {
        tag: [TE.l.meta, TE.l.comment],
        color: RE
      }, {
        tag: TE.l.strong,
        fontWeight: "bold"
      }, {
        tag: TE.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: TE.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: TE.l.link,
        color: RE,
        textDecoration: "underline"
      }, {
        tag: TE.l.heading,
        fontWeight: "bold",
        color: AE
      }, {
        tag: [TE.l.atom, TE.l.bool, TE.l.special(TE.l.variableName)],
        color: jj
      }, {
        tag: [TE.l.processingInstruction, TE.l.string, TE.l.inserted],
        color: Ej
      }, {
        tag: TE.l.invalid,
        color: yE
      }]),
      cj = [Cj, (0, qu.kb)(bj)];
    var Nj = lu.l.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Oj {
      constructor(uu, Eu) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = Eu, this.timeoutMS = Eu, this.callbacks.push(uu)
      }
      Tb() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var uu = this.callbacks.slice();
          this.callbacks.length = 0, uu.forEach((uu => {
            try {
              uu()
            } catch (Eu) {
              console.error("TimeoutLatch callback error:", Eu)
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
    class Yj {
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
            uu.Tb(), uu.isDone && this.remove(uu)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var hj = null,
      Dj = Xu.b.define(),
      gj = [];

    function Mj(uu) {
      var {
        value: Eu,
        selection: ju,
        onChange: su,
        onStatistics: Uu,
        onCreateEditor: qu,
        onUpdate: fu,
        extensions: Cu = gj,
        autoFocus: bu,
        theme: cu = "light",
        height: Nu = null,
        minHeight: Ou = null,
        maxHeight: Yu = null,
        width: hu = null,
        minWidth: Du = null,
        maxWidth: gu = null,
        placeholder: Mu = "",
        editable: eu = !0,
        readOnly: Gu = !1,
        indentWithTab: pu = !0,
        basicSetup: wu = !0,
        root: Ju,
        initialState: du
      } = uu, [au, Pu] = (0, Zu.useState)(), [ou, ku] = (0, Zu.useState)(), [mu, vu] = (0, Zu.useState)(), Ku = (0, Zu.useState)((() => ({
        current: null
      })))[0], Vu = (0, Zu.useState)((() => ({
        current: null
      })))[0], ru = lu.l.theme({
        "&": {
          height: Nu,
          minHeight: Ou,
          maxHeight: Yu,
          width: hu,
          minWidth: Du,
          maxWidth: gu
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Qu = lu.l.updateListener.of((uu => {
        if (uu.docChanged && "function" === typeof su && !uu.transactions.some((uu => uu.annotation(Dj)))) {
          Ku.current ? Ku.current.reset() : (Ku.current = new Oj((() => {
            if (Vu.current) {
              var uu = Vu.current;
              Vu.current = null, uu()
            }
            Ku.current = null
          }), 200), ("undefined" === typeof window ? new Yj : (hj || (hj = new Yj), hj)).add(Ku.current));
          var Eu = uu.state.doc.toString();
          su(Eu, uu)
        }
        Uu && Uu((uu => ({
          line: uu.state.doc.lineAt(uu.state.selection.main.from),
          lineCount: uu.state.doc.lines,
          lineBreak: uu.state.lineBreak,
          length: uu.state.doc.length,
          readOnly: uu.state.readOnly,
          tabSize: uu.state.tabSize,
          selection: uu.state.selection,
          selectionAsSingle: uu.state.selection.asSingle().main,
          HY: uu.state.selection.HY,
          selectionCode: uu.state.sliceDoc(uu.state.selection.main.from, uu.state.selection.main.to),
          selections: uu.state.selection.HY.map((Eu => uu.state.sliceDoc(Eu.from, Eu.to))),
          selectedText: uu.state.selection.HY.some((uu => !uu.empty))
        }))(uu))
      })), iu = function(uu) {
        void 0 === uu && (uu = {});
        var {
          indentWithTab: Eu = !0,
          editable: ju = !0,
          readOnly: su = !1,
          theme: Uu = "light",
          placeholder: Zu = "",
          basicSetup: qu = !0
        } = uu, fu = [];
        switch (Eu && fu.unshift(lu.V.of([FE])), qu && ("boolean" === typeof qu ? fu.unshift(xE()) : fu.unshift(xE(qu))), Zu && fu.unshift((0, lu._)(Zu)), Uu) {
          case "light":
            fu.push(Nj);
            break;
          case "dark":
            fu.push(cj);
            break;
          case "none":
            break;
          default:
            fu.push(Uu)
        }
        return !1 === ju && fu.push(lu.l.editable.of(!1)), su && fu.push(Xu.o.readOnly.of(!0)), [...fu]
      }({
        theme: cu,
        editable: eu,
        readOnly: Gu,
        placeholder: Mu,
        indentWithTab: pu,
        basicSetup: wu
      }), Wu = [Qu, ru, ...iu];
      return fu && "function" === typeof fu && Wu.push(lu.l.updateListener.of(fu)), Wu = Wu.concat(Cu), (0, Zu.useLayoutEffect)((() => {
        if (au && !mu) {
          var uu = {
              doc: Eu,
              selection: ju,
              extensions: Wu
            },
            su = du ? Xu.o.fromJSON(du.json, uu, du.fields) : Xu.o.create(uu);
          if (vu(su), !ou) {
            var Uu = new lu.l({
              state: su,
              parent: au,
              root: Ju
            });
            ku(Uu), qu && qu(Uu, su)
          }
        }
        return () => {
          ou && (vu(void 0), ku(void 0))
        }
      }), [au, mu]), (0, Zu.useEffect)((() => {
        uu.container && Pu(uu.container)
      }), [uu.container]), (0, Zu.useEffect)((() => () => {
        ou && (ou.destroy(), ku(void 0)), Ku.current && (Ku.current.cancel(), Ku.current = null)
      }), [ou]), (0, Zu.useEffect)((() => {
        bu && ou && ou.focus()
      }), [bu, ou]), (0, Zu.useEffect)((() => {
        ou && ou.dispatch({
          effects: Xu.L.reconfigure.of(Wu)
        })
      }), [cu, Cu, Nu, Ou, Yu, hu, Du, gu, Mu, eu, Gu, pu, wu, su, fu]), (0, Zu.useEffect)((() => {
        if (void 0 !== Eu) {
          var uu = ou ? ou.state.doc.toString() : "";
          if (ou && Eu !== uu) {
            var ju = () => {
              ou && Eu !== ou.state.doc.toString() && ou.dispatch({
                changes: {
                  from: 0,
                  to: ou.state.doc.toString().length,
                  insert: Eu || ""
                },
                annotations: [Dj.of(!0)]
              })
            };
            Ku.current && !Ku.current.isDone ? Vu.current = ju : ju()
          }
        }
      }), [Eu, ou]), {
        state: mu,
        setState: vu,
        view: ou,
        setView: ku,
        container: au,
        setContainer: Pu
      }
    }
    var ej = ju(1154),
      Gj = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      pj = (0, Zu.forwardRef)(((uu, Eu) => {
        var {
          className: ju,
          value: Xu = "",
          selection: lu,
          extensions: qu = [],
          onChange: fu,
          onStatistics: Cu,
          onCreateEditor: bu,
          onUpdate: cu,
          autoFocus: Nu,
          theme: Ou = "light",
          height: Yu,
          minHeight: hu,
          maxHeight: Du,
          width: gu,
          minWidth: Mu,
          maxWidth: eu,
          basicSetup: Gu,
          placeholder: pu,
          indentWithTab: wu,
          editable: Ju,
          readOnly: du,
          root: au,
          initialState: Pu
        } = uu, ou = (0, Uu.b)(uu, Gj), ku = (0, Zu.useRef)(null), {
          state: mu,
          view: vu,
          container: Ku,
          setContainer: Vu
        } = Mj({
          root: au,
          value: Xu,
          autoFocus: Nu,
          theme: Ou,
          height: Yu,
          minHeight: hu,
          maxHeight: Du,
          width: gu,
          minWidth: Mu,
          maxWidth: eu,
          basicSetup: Gu,
          placeholder: pu,
          indentWithTab: wu,
          editable: Ju,
          readOnly: du,
          selection: lu,
          onChange: fu,
          onStatistics: Cu,
          onCreateEditor: bu,
          onUpdate: cu,
          extensions: qu,
          initialState: Pu
        });
        (0, Zu.useImperativeHandle)(Eu, (() => ({
          editor: ku.current,
          state: mu,
          view: vu
        })), [ku, Ku, mu, vu]);
        var ru = (0, Zu.useCallback)((uu => {
          ku.current = uu, Vu(uu)
        }), [Vu]);
        if ("string" !== typeof Xu) throw new Error("value must be typeof string but got " + typeof Xu);
        var Qu = "string" === typeof Ou ? "cm-theme-" + Ou : "cm-theme";
        return (0, ej.jsx)("div", (0, su.d)({
          ref: ru,
          className: Qu + (ju ? " " + ju : "")
        }, ou))
      }));
    pj.displayName = "CodeMirror";
    const wj = pj
  },
  41563: (uu, Eu, ju) => {
    function su() {
      var uu = arguments[0];
      "string" == typeof uu && (uu = document.createElement(uu));
      var Eu = 1,
        ju = arguments[1];
      if (ju && "object" == typeof ju && null == ju.nodeType && !Array.isArray(ju)) {
        for (var su in ju)
          if (Object.prototype.hasOwnProperty.call(ju, su)) {
            var Zu = ju[su];
            "string" == typeof Zu ? uu.setAttribute(su, Zu) : null != Zu && (uu[su] = Zu)
          } Eu++
      }
      for (; Eu < arguments.length; Eu++) Uu(uu, arguments[Eu]);
      return uu
    }

    function Uu(uu, Eu) {
      if ("string" == typeof Eu) uu.appendChild(document.createTextNode(Eu));
      else if (null == Eu);
      else if (null != Eu.nodeType) uu.appendChild(Eu);
      else {
        if (!Array.isArray(Eu)) throw new RangeError("Unsupported child node: " + Eu);
        for (var ju = 0; ju < Eu.length; ju++) Uu(uu, Eu[ju])
      }
    }
    ju.d(Eu, {
      b: () => su
    })
  },
  41556: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu
    });
    const su = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Uu = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      Zu = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class Xu {
      constructor(uu, Eu) {
        this.rules = [];
        let {
          finish: ju
        } = Eu || {};

        function su(uu) {
          return /^@/.test(uu) ? [uu] : uu.split(/,\s*/)
        }

        function Uu(uu, Eu, Zu, Xu) {
          let lu = [],
            qu = /^@(\w+)\b/.exec(uu[0]),
            fu = qu && "keyframes" == qu[1];
          if (qu && null == Eu) return Zu.push(uu[0] + ";");
          for (let ju in Eu) {
            let Xu = Eu[ju];
            if (/&/.test(ju)) Uu(ju.split(/,\s*/).map((Eu => uu.map((uu => Eu.replace(/&/, uu))))).reduce(((uu, Eu) => uu.concat(Eu))), Xu, Zu);
            else if (Xu && "object" == typeof Xu) {
              if (!qu) throw new RangeError("The value of a property (" + ju + ") should be a primitive value.");
              Uu(su(ju), Xu, lu, fu)
            } else null != Xu && lu.push(ju.replace(/_.*/, "").replace(/[A-Z]/g, (uu => "-" + uu.toLowerCase())) + ": " + Xu + ";")
          }(lu.length || fu) && Zu.push((!ju || qu || Xu ? uu : uu.map(ju)).join(", ") + " {" + lu.join(" ") + "}")
        }
        for (let Zu in uu) Uu(su(Zu), uu[Zu], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let uu = Zu[su] || 1;
        return Zu[su] = uu + 1, "\u037c" + uu.toString(36)
      }
      static mount(uu, Eu, ju) {
        let su = uu[Uu],
          Zu = ju && ju.nonce;
        su ? Zu && su.setNonce(Zu) : su = new qu(uu, Zu), su.mount(Array.isArray(Eu) ? Eu : [Eu], uu)
      }
    }
    let lu = new Map;
    class qu {
      constructor(uu, Eu) {
        let ju = uu.ownerDocument || uu,
          su = ju.defaultView;
        if (!uu.head && uu.adoptedStyleSheets && su.CSSStyleSheet) {
          let Eu = lu.get(ju);
          if (Eu) return uu[Uu] = Eu;
          this.sheet = new su.CSSStyleSheet, lu.set(ju, this)
        } else this.styleTag = ju.createElement("style"), Eu && this.styleTag.setAttribute("nonce", Eu);
        this.modules = [], uu[Uu] = this
      }
      mount(uu, Eu) {
        let ju = this.sheet,
          su = 0,
          Uu = 0;
        for (let Zu = 0; Zu < uu.length; Zu++) {
          let Eu = uu[Zu],
            Xu = this.modules.indexOf(Eu);
          if (Xu < Uu && Xu > -1 && (this.modules.splice(Xu, 1), Uu--, Xu = -1), -1 == Xu) {
            if (this.modules.splice(Uu++, 0, Eu), ju)
              for (let uu = 0; uu < Eu.rules.length; uu++) ju.insertRule(Eu.rules[uu], su++)
          } else {
            for (; Uu < Xu;) su += this.modules[Uu++].rules.length;
            su += Eu.rules.length, Uu++
          }
        }
        if (ju) Eu.adoptedStyleSheets.indexOf(this.sheet) < 0 && (Eu.adoptedStyleSheets = [this.sheet, ...Eu.adoptedStyleSheets]);
        else {
          let uu = "";
          for (let Eu = 0; Eu < this.modules.length; Eu++) uu += this.modules[Eu].getRules() + "\n";
          this.styleTag.textContent = uu;
          let ju = Eu.head || Eu;
          this.styleTag.parentNode != ju && ju.insertBefore(this.styleTag, ju.firstChild)
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