export const id = 603;
export const ids = [603];
export const modules = {
  44501: (ee, ie, He) => {
    He.d(ie, {
      e: () => ai,
      i: () => ti,
      j: () => Bi,
      l: () => Fe,
      o: () => ci,
      p: () => Je,
      q: () => ki
    });
    var ye = He(44509),
      be = He(44518),
      Me = He(44533);
    class Ke {
      constructor(ee, ie, He, ye) {
        this.state = ee, this.pos = ie, this.explicit = He, this.view = ye, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(ee) {
        let ie = (0, Me.tb)(this.state).resolveInner(this.pos, -1);
        for (; ie && ee.indexOf(ie.name) < 0;) ie = ie.parent;
        return ie ? {
          from: ie.from,
          to: this.pos,
          text: this.state.sliceDoc(ie.from, this.pos),
          type: ie.type
        } : null
      }
      matchBefore(ee) {
        let ie = this.state.doc.lineAt(this.pos),
          He = Math.max(ie.from, this.pos - 250),
          ye = ie.text.slice(He - ie.from, this.pos - ie.from),
          be = ye.search(ke(ee, !1));
        return be < 0 ? null : {
          from: He + be,
          to: this.pos,
          text: ye.slice(be)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(ee, ie, He) {
        "abort" == ee && this.abortListeners && (this.abortListeners.push(ie), He && He.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function Ue(ee) {
      let ie = Object.keys(ee).join(""),
        He = /\w/.test(ie);
      return He && (ie = ie.replace(/\w/g, "")), `[${He?"\\w":""}${ie.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function Fe(ee) {
      let ie = ee.map((ee => "string" == typeof ee ? {
          label: ee
        } : ee)),
        [He, ye] = ie.every((ee => /^\w+$/.test(ee.label))) ? [/\w*$/, /\w+$/] : function(ee) {
          let ie = Object.create(null),
            He = Object.create(null);
          for (let {
              label: be
            }
            of ee) {
            ie[be[0]] = !0;
            for (let ee = 1; ee < be.length; ee++) He[be[ee]] = !0
          }
          let ye = Ue(ie) + Ue(He) + "*$";
          return [new RegExp("^" + ye), new RegExp(ye)]
        }(ie);
      return ee => {
        let be = ee.matchBefore(ye);
        return be || ee.explicit ? {
          from: be ? be.from : ee.pos,
          options: ie,
          validFor: He
        } : null
      }
    }

    function Je(ee, ie) {
      return He => {
        for (let ie = (0, Me.tb)(He.state).resolveInner(He.pos, -1); ie; ie = ie.parent) {
          if (ee.indexOf(ie.name) > -1) return null;
          if (ie.type.isTop) break
        }
        return ie(He)
      }
    }
    class oe {
      constructor(ee, ie, He, ye) {
        this.completion = ee, this.source = ie, this.match = He, this.score = ye
      }
    }

    function Re(ee) {
      return ee.selection.main.from
    }

    function ke(ee, ie) {
      var He;
      let {
        source: ye
      } = ee, be = ie && "^" != ye[0], Me = "$" != ye[ye.length - 1];
      return be || Me ? new RegExp(`${be?"^":""}(?:${ye})${Me?"$":""}`, null !== (He = ee.flags) && void 0 !== He ? He : ee.ignoreCase ? "i" : "") : ee
    }
    const qe = ye.e.define();

    function fe(ee, ie, He, be) {
      let {
        main: Me
      } = ee.selection, Ke = He - Me.from, Ue = be - Me.from;
      return {
        ...ee.changeByRange((Fe => {
          if (Fe != Me && He != be && ee.sliceDoc(Fe.from + Ke, Fe.from + Ue) != ee.sliceDoc(He, be)) return {
            range: Fe
          };
          let Je = ee.toText(ie);
          return {
            changes: {
              from: Fe.from + Ke,
              to: be == Me.from ? Fe.to : Fe.from + Ue,
              insert: Je
            },
            range: ye.k.cursor(Fe.from + Ke + Je.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Te = new WeakMap;

    function pe(ee) {
      if (!Array.isArray(ee)) return ee;
      let ie = Te.get(ee);
      return ie || Te.set(ee, ie = Fe(ee)), ie
    }
    const Xe = ye.K.define(),
      ze = ye.K.define();
    class Be {
      constructor(ee) {
        this.pattern = ee, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let ie = 0; ie < ee.length;) {
          let He = (0, ye.X)(ee, ie),
            be = (0, ye.$)(He);
          this.chars.push(He);
          let Me = ee.slice(ie, ie + be),
            Ke = Me.toUpperCase();
          this.folded.push((0, ye.X)(Ke == Me ? Me.toLowerCase() : Ke, 0)), ie += be
        }
        this.astral = ee.length != this.chars.length
      }
      ret(ee, ie) {
        return this.score = ee, this.matched = ie, this
      }
      match(ee) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (ee.length < this.pattern.length) return null;
        let {
          chars: ie,
          folded: He,
          any: be,
          precise: Me,
          byWord: Ke
        } = this;
        if (1 == ie.length) {
          let be = (0, ye.X)(ee, 0),
            Me = (0, ye.$)(be),
            Ke = Me == ee.length ? 0 : -100;
          if (be == ie[0]);
          else {
            if (be != He[0]) return null;
            Ke += -200
          }
          return this.ret(Ke, [0, Me])
        }
        let Ue = ee.indexOf(this.pattern);
        if (0 == Ue) return this.ret(ee.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let Fe = ie.length,
          Je = 0;
        if (Ue < 0) {
          for (let Me = 0, Ke = Math.min(ee.length, 200); Me < Ke && Je < Fe;) {
            let Ke = (0, ye.X)(ee, Me);
            Ke != ie[Je] && Ke != He[Je] || (be[Je++] = Me), Me += (0, ye.$)(Ke)
          }
          if (Je < Fe) return null
        }
        let oe = 0,
          Re = 0,
          ke = !1,
          qe = 0,
          fe = -1,
          Te = -1,
          pe = /[a-z]/.test(ee),
          Xe = !0;
        for (let ze = 0, Be = Math.min(ee.length, 200), Ee = 0; ze < Be && Re < Fe;) {
          let be = (0, ye.X)(ee, ze);
          Ue < 0 && (oe < Fe && be == ie[oe] && (Me[oe++] = ze), qe < Fe && (be == ie[qe] || be == He[qe] ? (0 == qe && (fe = ze), Te = ze + 1, qe++) : qe = 0));
          let Je, Be = be < 255 ? be >= 48 && be <= 57 || be >= 97 && be <= 122 ? 2 : be >= 65 && be <= 90 ? 1 : 0 : (Je = (0, ye.pb)(be)) != Je.toLowerCase() ? 1 : Je != Je.toUpperCase() ? 2 : 0;
          (!ze || 1 == Be && pe || 0 == Ee && 0 != Be) && (ie[Re] == be || He[Re] == be && (ke = !0) ? Ke[Re++] = ze : Ke.length && (Xe = !1)), Ee = Be, ze += (0, ye.$)(be)
        }
        return Re == Fe && 0 == Ke[0] && Xe ? this.result((ke ? -200 : 0) - 100, Ke, ee) : qe == Fe && 0 == fe ? this.ret(-200 - ee.length + (Te == ee.length ? 0 : -100), [0, Te]) : Ue > -1 ? this.ret(-700 - ee.length, [Ue, Ue + this.pattern.length]) : qe == Fe ? this.ret(-900 - ee.length, [fe, Te]) : Re == Fe ? this.result((ke ? -200 : 0) - 100 - 700 + (Xe ? 0 : -1100), Ke, ee) : 2 == ie.length ? null : this.result((be[0] ? -700 : 0) - 200 - 1100, be, ee)
      }
      result(ee, ie, He) {
        let be = [],
          Me = 0;
        for (let Ke of ie) {
          let ee = Ke + (this.astral ? (0, ye.$)((0, ye.X)(He, Ke)) : 1);
          Me && be[Me - 1] == Ke ? be[Me - 1] = ee : (be[Me++] = Ke, be[Me++] = ee)
        }
        return this.ret(ee - He.length, be)
      }
    }
    class Ee {
      constructor(ee) {
        this.pattern = ee, this.matched = [], this.score = 0, this.folded = ee.toLowerCase()
      }
      match(ee) {
        if (ee.length < this.pattern.length) return null;
        let ie = ee.slice(0, this.pattern.length),
          He = ie == this.pattern ? 0 : ie.toLowerCase() == this.folded ? -200 : null;
        return null == He ? null : (this.matched = [0, ie.length], this.score = He + (ee.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const ge = ye.q.define({
      combine: ee => (0, ye.cb)(ee, {
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
        positionInfo: de,
        filterStrict: !1,
        compareCompletions: (ee, ie) => (ee.sortText || ee.label).localeCompare(ie.sortText || ie.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (ee, ie) => ee && ie,
        closeOnBlur: (ee, ie) => ee && ie,
        icons: (ee, ie) => ee && ie,
        tooltipClass: (ee, ie) => He => Oe(ee(He), ie(He)),
        optionClass: (ee, ie) => He => Oe(ee(He), ie(He)),
        addToOptions: (ee, ie) => ee.concat(ie),
        filterStrict: (ee, ie) => ee || ie
      })
    });

    function Oe(ee, ie) {
      return ee ? ie ? ee + " " + ie : ee : ie
    }

    function de(ee, ie, He, ye, Me, Ke) {
      let Ue, Fe, Je = ee.textDirection == be.h.RTL,
        oe = Je,
        Re = !1,
        ke = "top",
        qe = ie.left - Me.left,
        fe = Me.right - ie.right,
        Te = ye.right - ye.left,
        pe = ye.bottom - ye.top;
      if (oe && qe < Math.min(Te, fe) ? oe = !1 : !oe && fe < Math.min(Te, qe) && (oe = !0), Te <= (oe ? qe : fe)) Ue = Math.max(Me.top, Math.min(He.top, Me.bottom - pe)) - ie.top, Fe = Math.min(400, oe ? qe : fe);
      else {
        Re = !0, Fe = Math.min(400, (Je ? ie.right : Me.right - ie.left) - 30);
        let ee = Me.bottom - ie.bottom;
        ee >= pe || ee > ie.top ? Ue = He.bottom - ie.top : (ke = "bottom", Ue = ie.bottom - He.top)
      }
      return {
        style: `${ke}: ${Ue/((ie.bottom-ie.top)/Ke.offsetHeight)}px; max-width: ${Fe/((ie.right-ie.left)/Ke.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Re ? Je ? "left-narrow" : "right-narrow" : oe ? "left" : "right")
      }
    }
    const We = ye.K.define();

    function te(ee, ie, He) {
      if (ee <= He) return {
        from: 0,
        to: ee
      };
      if (ie < 0 && (ie = 0), ie <= ee >> 1) {
        let ee = Math.floor(ie / He);
        return {
          from: ee * He,
          to: (ee + 1) * He
        }
      }
      let ye = Math.floor((ee - ie) / He);
      return {
        from: ee - (ye + 1) * He,
        to: ee - ye * He
      }
    }
    class Ze {
      constructor(ee, ie, He) {
        this.view = ee, this.stateField = ie, this.applyCompletion = He, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: ee => this.placeInfo(ee),
          key: this
        }, this.space = null, this.currentClass = "";
        let ye = ee.state.field(ie),
          {
            options: be,
            selected: Me
          } = ye.open,
          Ke = ee.state.facet(ge);
        this.optionContent = function(ee) {
          let ie = ee.addToOptions.slice();
          return ee.icons && ie.push({
            render(ee) {
              let ie = document.createElement("div");
              return ie.classList.add("cm-completionIcon"), ee.type && ie.classList.add(...ee.type.split(/\s+/g).map((ee => "cm-completionIcon-" + ee))), ie.setAttribute("aria-hidden", "true"), ie
            },
            position: 20
          }), ie.push({
            render(ee, ie, He, ye) {
              let be = document.createElement("span");
              be.className = "cm-completionLabel";
              let Me = ee.displayLabel || ee.label,
                Ke = 0;
              for (let Ue = 0; Ue < ye.length;) {
                let ee = ye[Ue++],
                  ie = ye[Ue++];
                ee > Ke && be.appendChild(document.createTextNode(Me.slice(Ke, ee)));
                let He = be.appendChild(document.createElement("span"));
                He.appendChild(document.createTextNode(Me.slice(ee, ie))), He.className = "cm-completionMatchedText", Ke = ie
              }
              return Ke < Me.length && be.appendChild(document.createTextNode(Me.slice(Ke))), be
            },
            position: 50
          }, {
            render(ee) {
              if (!ee.detail) return null;
              let ie = document.createElement("span");
              return ie.className = "cm-completionDetail", ie.textContent = ee.detail, ie
            },
            position: 80
          }), ie.sort(((ee, ie) => ee.position - ie.position)).map((ee => ee.render))
        }(Ke), this.optionClass = Ke.optionClass, this.tooltipClass = Ke.tooltipClass, this.range = te(be.length, Me, Ke.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(ee.state), this.dom.addEventListener("mousedown", (He => {
          let {
            options: ye
          } = ee.state.field(ie).open;
          for (let ie, be = He.target; be && be != this.dom; be = be.parentNode)
            if ("LI" == be.nodeName && (ie = /-(\d+)$/.exec(be.id)) && +ie[1] < ye.length) return this.applyCompletion(ee, ye[+ie[1]]), void He.preventDefault();
          if (He.target == this.list) {
            let ie = this.list.classList.contains("cm-completionListIncompleteTop") && He.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && He.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != ie && (ee.dispatch({
              effects: We.of(ie)
            }), He.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (ie => {
          let He = ee.state.field(this.stateField, !1);
          He && He.tooltip && ee.state.facet(ge).closeOnBlur && ie.relatedTarget != ee.contentDOM && ee.dispatch({
            effects: ze.of(null)
          })
        })), this.showOptions(be, ye.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(ee, ie) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(ee, ie, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(ee) {
        var ie;
        let He = ee.state.field(this.stateField),
          ye = ee.startState.field(this.stateField);
        if (this.updateTooltipClass(ee.state), He != ye) {
          let {
            options: be,
            selected: Me,
            disabled: Ke
          } = He.open;
          ye.open && ye.open.options == be || (this.range = te(be.length, Me, ee.state.facet(ge).maxRenderedOptions), this.showOptions(be, He.id)), this.updateSel(), Ke != (null === (ie = ye.open) || void 0 === ie ? void 0 : ie.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!Ke)
        }
      }
      updateTooltipClass(ee) {
        let ie = this.tooltipClass(ee);
        if (ie != this.currentClass) {
          for (let ee of this.currentClass.split(" ")) ee && this.dom.classList.remove(ee);
          for (let ee of ie.split(" ")) ee && this.dom.classList.add(ee);
          this.currentClass = ie
        }
      }
      positioned(ee) {
        this.space = ee, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let ee = this.view.state.field(this.stateField),
          ie = ee.open;
        (ie.selected > -1 && ie.selected < this.range.from || ie.selected >= this.range.to) && (this.range = te(ie.options.length, ie.selected, this.view.state.facet(ge).maxRenderedOptions), this.showOptions(ie.options, ee.id));
        let He = this.updateSelectedOption(ie.selected);
        if (He) {
          this.destroyInfo();
          let {
            completion: ye
          } = ie.options[ie.selected], {
            info: Me
          } = ye;
          if (!Me) return;
          let Ke = "string" === typeof Me ? document.createTextNode(Me) : Me(ye);
          if (!Ke) return;
          "then" in Ke ? Ke.then((ie => {
            ie && this.view.state.field(this.stateField, !1) == ee && this.addInfoPane(ie, ye)
          })).catch((ee => (0, be.U)(this.view.state, ee, "completion info"))) : (this.addInfoPane(Ke, ye), He.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(ee, ie) {
        this.destroyInfo();
        let He = this.info = document.createElement("div");
        if (He.className = "cm-tooltip cm-completionInfo", He.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != ee.nodeType) He.appendChild(ee), this.infoDestroy = null;
        else {
          let {
            dom: ie,
            destroy: ye
          } = ee;
          He.appendChild(ie), this.infoDestroy = ye || null
        }
        this.dom.appendChild(He), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(ee) {
        let ie = null;
        for (let He = this.list.firstChild, ye = this.range.from; He; He = He.nextSibling, ye++) "LI" == He.nodeName && He.id ? ye == ee ? He.hasAttribute("aria-selected") || (He.setAttribute("aria-selected", "true"), ie = He) : He.hasAttribute("aria-selected") && (He.removeAttribute("aria-selected"), He.removeAttribute("aria-describedby")) : ye--;
        return ie && function(ee, ie) {
          let He = ee.getBoundingClientRect(),
            ye = ie.getBoundingClientRect(),
            be = He.height / ee.offsetHeight;
          ye.top < He.top ? ee.scrollTop -= (He.top - ye.top) / be : ye.bottom > He.bottom && (ee.scrollTop += (ye.bottom - He.bottom) / be)
        }(this.list, ie), ie
      }
      measureInfo() {
        let ee = this.dom.querySelector("[aria-selected]");
        if (!ee || !this.info) return null;
        let ie = this.dom.getBoundingClientRect(),
          He = this.info.getBoundingClientRect(),
          ye = ee.getBoundingClientRect(),
          be = this.space;
        if (!be) {
          let ee = this.dom.ownerDocument.documentElement;
          be = {
            left: 0,
            top: 0,
            right: ee.clientWidth,
            bottom: ee.clientHeight
          }
        }
        return ye.top > Math.min(be.bottom, ie.bottom) - 10 || ye.bottom < Math.max(be.top, ie.top) + 10 ? null : this.view.state.facet(ge).positionInfo(this.view, ie, ye, He, be, this.dom)
      }
      placeInfo(ee) {
        this.info && (ee ? (ee.style && (this.info.style.cssText = ee.style), this.info.className = "cm-tooltip cm-completionInfo " + (ee.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(ee, ie, He) {
        const ye = document.createElement("ul");
        ye.id = ie, ye.setAttribute("role", "listbox"), ye.setAttribute("aria-expanded", "true"), ye.setAttribute("aria-label", this.view.state.phrase("Completions")), ye.addEventListener("mousedown", (ee => {
          ee.target == ye && ee.preventDefault()
        }));
        let be = null;
        for (let Me = He.from; Me < He.to; Me++) {
          let {
            completion: Ke,
            match: Ue
          } = ee[Me], {
            section: Fe
          } = Ke;
          if (Fe) {
            let ee = "string" == typeof Fe ? Fe : Fe.name;
            if (ee != be && (Me > He.from || 0 == He.from))
              if (be = ee, "string" != typeof Fe && Fe.header) ye.appendChild(Fe.header(Fe));
              else {
                ye.appendChild(document.createElement("completion-section")).textContent = ee
              }
          }
          const Je = ye.appendChild(document.createElement("li"));
          Je.id = ie + "-" + Me, Je.setAttribute("role", "option");
          let oe = this.optionClass(Ke);
          oe && (Je.className = oe);
          for (let ee of this.optionContent) {
            let ie = ee(Ke, this.view.state, this.view, Ue);
            ie && Je.appendChild(ie)
          }
        }
        return He.from && ye.classList.add("cm-completionListIncompleteTop"), He.to < ee.length && ye.classList.add("cm-completionListIncompleteBottom"), ye
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function we(ee, ie) {
      return He => new Ze(He, ee, ie)
    }

    function De(ee) {
      return 100 * (ee.boost || 0) + (ee.apply ? 10 : 0) + (ee.info ? 5 : 0) + (ee.type ? 1 : 0)
    }
    class Pe {
      constructor(ee, ie, He, ye, be, Me) {
        this.options = ee, this.attrs = ie, this.tooltip = He, this.timestamp = ye, this.selected = be, this.disabled = Me
      }
      setSelected(ee, ie) {
        return ee == this.selected || ee >= this.options.length ? this : new Pe(this.options, ae(ie, ee), this.tooltip, this.timestamp, ee, this.disabled)
      }
      static build(ee, ie, He, ye, be, Me) {
        if (ye && !Me && ee.some((ee => ee.isPending))) return ye.setDisabled();
        let Ke = function(ee, ie) {
          let He = [],
            ye = null,
            be = null,
            Me = ee => {
              He.push(ee);
              let {
                section: ie
              } = ee.completion;
              if (ie) {
                ye || (ye = []);
                let ee = "string" == typeof ie ? ie : ie.name;
                ye.some((ie => ie.name == ee)) || ye.push("string" == typeof ie ? {
                  name: ee
                } : ie)
              }
            },
            Ke = ie.facet(ge);
          for (let Re of ee)
            if (Re.hasResult()) {
              let ee = Re.result.getMatch;
              if (!1 === Re.result.filter)
                for (let ie of Re.result.options) Me(new oe(ie, Re.source, ee ? ee(ie) : [], 1e9 - He.length));
              else {
                let He, ye = ie.sliceDoc(Re.from, Re.to),
                  Ue = Ke.filterStrict ? new Ee(ye) : new Be(ye);
                for (let ie of Re.result.options)
                  if (He = Ue.match(ie.label)) {
                    let ye = ie.displayLabel ? ee ? ee(ie, He.matched) : [] : He.matched,
                      Ke = He.score + (ie.boost || 0);
                    if (Me(new oe(ie, Re.source, ye, Ke)), "object" == typeof ie.section && "dynamic" === ie.section.rank) {
                      let {
                        name: ee
                      } = ie.section;
                      be || (be = Object.create(null)), be[ee] = Math.max(Ke, be[ee] || -1e9)
                    }
                  }
              }
            } if (ye) {
            let ee = Object.create(null),
              ie = 0,
              Me = (ee, ie) => ("dynamic" === ee.rank && "dynamic" === ie.rank ? be[ie.name] - be[ee.name] : 0) || ("number" == typeof ee.rank ? ee.rank : 1e9) - ("number" == typeof ie.rank ? ie.rank : 1e9) || (ee.name < ie.name ? -1 : 1);
            for (let He of ye.sort(Me)) ie -= 1e5, ee[He.name] = ie;
            for (let ye of He) {
              let {
                section: ie
              } = ye.completion;
              ie && (ye.score += ee["string" == typeof ie ? ie : ie.name])
            }
          }
          let Ue = [],
            Fe = null,
            Je = Ke.compareCompletions;
          for (let oe of He.sort(((ee, ie) => ie.score - ee.score || Je(ee.completion, ie.completion)))) {
            let ee = oe.completion;
            !Fe || Fe.label != ee.label || Fe.detail != ee.detail || null != Fe.type && null != ee.type && Fe.type != ee.type || Fe.apply != ee.apply || Fe.boost != ee.boost ? Ue.push(oe) : De(oe.completion) > De(Fe) && (Ue[Ue.length - 1] = oe), Fe = oe.completion
          }
          return Ue
        }(ee, ie);
        if (!Ke.length) return ye && ee.some((ee => ee.isPending)) ? ye.setDisabled() : null;
        let Ue = ie.facet(ge).selectOnOpen ? 0 : -1;
        if (ye && ye.selected != Ue && -1 != ye.selected) {
          let ee = ye.options[ye.selected].completion;
          for (let ie = 0; ie < Ke.length; ie++)
            if (Ke[ie].completion == ee) {
              Ue = ie;
              break
            }
        }
        return new Pe(Ke, ae(He, Ue), {
          pos: ee.reduce(((ee, ie) => ie.hasResult() ? Math.min(ee, ie.from) : ee), 1e8),
          create: le,
          above: be.aboveCursor
        }, ye ? ye.timestamp : Date.now(), Ue, !1)
      }
      map(ee) {
        return new Pe(this.options, this.attrs, {
          ...this.tooltip,
          pos: ee.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new Pe(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Ae {
      constructor(ee, ie, He) {
        this.active = ee, this.id = ie, this.open = He
      }
      static start() {
        return new Ae(ce, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(ee) {
        let {
          state: ie
        } = ee, He = ie.facet(ge), ye = (He.override || ie.languageDataAt("autocomplete", Re(ie)).map(pe)).map((ie => (this.active.find((ee => ee.source == ie)) || new Le(ie, this.active.some((ee => 0 != ee.state)) ? 1 : 0)).update(ee, He)));
        ye.length == this.active.length && ye.every(((ee, ie) => ee == this.active[ie])) && (ye = this.active);
        let be = this.open,
          Me = ee.effects.some((ee => ee.is(ve)));
        be && ee.docChanged && (be = be.map(ee.changes)), ee.selection || ye.some((ie => ie.hasResult() && ee.changes.touchesRange(ie.from, ie.to))) || ! function(ee, ie) {
          if (ee == ie) return !0;
          for (let He = 0, ye = 0;;) {
            for (; He < ee.length && !ee[He].hasResult();) He++;
            for (; ye < ie.length && !ie[ye].hasResult();) ye++;
            let be = He == ee.length,
              Me = ye == ie.length;
            if (be || Me) return be == Me;
            if (ee[He++].result != ie[ye++].result) return !1
          }
        }(ye, this.active) || Me ? be = Pe.build(ye, ie, this.id, be, He, Me) : be && be.disabled && !ye.some((ee => ee.isPending)) && (be = null), !be && ye.every((ee => !ee.isPending)) && ye.some((ee => ee.hasResult())) && (ye = ye.map((ee => ee.hasResult() ? new Le(ee.source, 0) : ee)));
        for (let Ke of ee.effects) Ke.is(We) && (be = be && be.setSelected(Ke.value, this.id));
        return ye == this.active && be == this.open ? this : new Ae(ye, this.id, be)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Ye : Ve
      }
    }
    const Ye = {
        "aria-autocomplete": "list"
      },
      Ve = {};

    function ae(ee, ie) {
      let He = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": ee
      };
      return ie > -1 && (He["aria-activedescendant"] = ee + "-" + ie), He
    }
    const ce = [];

    function xe(ee, ie) {
      if (ee.isUserEvent("input.complete")) {
        let He = ee.annotation(qe);
        if (He && ie.activateOnCompletion(He)) return 12
      }
      let He = ee.isUserEvent("input.type");
      return He && ie.activateOnTyping ? 5 : He ? 1 : ee.isUserEvent("delete.backward") ? 2 : ee.selection ? 8 : ee.docChanged ? 16 : 0
    }
    class Le {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = ee, this.state = ie, this.explicit = He
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(ee, ie) {
        let He = xe(ee, ie),
          ye = this;
        (8 & He || 16 & He && this.touches(ee)) && (ye = new Le(ye.source, 0)), 4 & He && 0 == ye.state && (ye = new Le(this.source, 1)), ye = ye.updateFor(ee, He);
        for (let be of ee.effects)
          if (be.is(Xe)) ye = new Le(ye.source, 1, be.value);
          else if (be.is(ze)) ye = new Le(ye.source, 0);
        else if (be.is(ve))
          for (let ee of be.value) ee.source == ye.source && (ye = ee);
        return ye
      }
      updateFor(ee, ie) {
        return this.map(ee.changes)
      }
      map(ee) {
        return this
      }
      touches(ee) {
        return ee.changes.touchesRange(Re(ee.state))
      }
    }
    class Ce extends Le {
      constructor(ee, ie, He, ye, be, Me) {
        super(ee, 3, ie), this.limit = He, this.result = ye, this.from = be, this.to = Me
      }
      hasResult() {
        return !0
      }
      updateFor(ee, ie) {
        var He;
        if (!(3 & ie)) return this.map(ee.changes);
        let ye = this.result;
        ye.map && !ee.changes.empty && (ye = ye.map(ye, ee.changes));
        let be = ee.changes.mapPos(this.from),
          Me = ee.changes.mapPos(this.to, 1),
          Ue = Re(ee.state);
        if (Ue > Me || !ye || 2 & ie && (Re(ee.startState) == this.from || Ue < this.limit)) return new Le(this.source, 4 & ie ? 1 : 0);
        let Fe = ee.changes.mapPos(this.limit);
        return function(ee, ie, He, ye) {
          if (!ee) return !1;
          let be = ie.sliceDoc(He, ye);
          return "function" == typeof ee ? ee(be, He, ye, ie) : ke(ee, !0).test(be)
        }(ye.validFor, ee.state, be, Me) ? new Ce(this.source, this.explicit, Fe, ye, be, Me) : ye.update && (ye = ye.update(ye, be, Me, new Ke(ee.state, Ue, !1))) ? new Ce(this.source, this.explicit, Fe, ye, ye.from, null !== (He = ye.to) && void 0 !== He ? He : Re(ee.state)) : new Le(this.source, 1, this.explicit)
      }
      map(ee) {
        if (ee.empty) return this;
        return (this.result.map ? this.result.map(this.result, ee) : this.result) ? new Ce(this.source, this.explicit, ee.mapPos(this.limit), this.result, ee.mapPos(this.from), ee.mapPos(this.to, 1)) : new Le(this.source, 0)
      }
      touches(ee) {
        return ee.changes.touchesRange(this.from, this.to)
      }
    }
    const ve = ye.K.define({
        map: (ee, ie) => ee.map((ee => ee.map(ie)))
      }),
      ue = ye.N.define({
        create: () => Ae.start(),
        update: (ee, ie) => ee.update(ie),
        provide: ee => [be.jb.from(ee, (ee => ee.tooltip)), be.i.contentAttributes.from(ee, (ee => ee.attrs))]
      });

    function me(ee, ie) {
      const He = ie.completion.apply || ie.completion.label;
      let ye = ee.state.field(ue).active.find((ee => ee.source == ie.source));
      return ye instanceof Ce && ("string" == typeof He ? ee.dispatch({
        ...fe(ee.state, He, ye.from, ye.to),
        annotations: qe.of(ie.completion)
      }) : He(ee, ie.completion, ye.from, ye.to), !0)
    }
    const le = we(ue, me);

    function Se(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return He => {
        let ye = He.state.field(ue, !1);
        if (!ye || !ye.open || ye.open.disabled || Date.now() - ye.open.timestamp < He.state.facet(ge).interactionDelay) return !1;
        let Me, Ke = 1;
        "page" == ie && (Me = (0, be.y)(He, ye.open.tooltip)) && (Ke = Math.max(2, Math.floor(Me.dom.offsetHeight / Me.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: Ue
        } = ye.open.options, Fe = ye.open.selected > -1 ? ye.open.selected + Ke * (ee ? 1 : -1) : ee ? 0 : Ue - 1;
        return Fe < 0 ? Fe = "page" == ie ? 0 : Ue - 1 : Fe >= Ue && (Fe = "page" == ie ? Ue - 1 : 0), He.dispatch({
          effects: We.of(Fe)
        }), !0
      }
    }
    const ne = ee => !!ee.state.field(ue, !1) && (ee.dispatch({
      effects: Xe.of(!0)
    }), !0);
    class je {
      constructor(ee, ie) {
        this.active = ee, this.context = ie, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const se = be.o.fromClass(class {
        constructor(ee) {
          this.view = ee, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let ie of ee.state.field(ue).active) ie.isPending && this.startQuery(ie)
        }
        update(ee) {
          let ie = ee.state.field(ue),
            He = ee.state.facet(ge);
          if (!ee.selectionSet && !ee.docChanged && ee.startState.field(ue) == ie) return;
          let ye = ee.transactions.some((ee => {
            let ie = xe(ee, He);
            return 8 & ie || (ee.selection || ee.docChanged) && !(3 & ie)
          }));
          for (let Ue = 0; Ue < this.running.length; Ue++) {
            let ie = this.running[Ue];
            if (ye || ie.context.abortOnDocChange && ee.docChanged || ie.updates.length + ee.transactions.length > 50 && Date.now() - ie.time > 1e3) {
              for (let ee of ie.context.abortListeners) try {
                ee()
              } catch (Ke) {
                (0, be.U)(this.view.state, Ke)
              }
              ie.context.abortListeners = null, this.running.splice(Ue--, 1)
            } else ie.updates.push(...ee.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), ee.transactions.some((ee => ee.effects.some((ee => ee.is(Xe))))) && (this.pendingStart = !0);
          let Me = this.pendingStart ? 50 : He.activateOnTypingDelay;
          if (this.debounceUpdate = ie.active.some((ee => ee.isPending && !this.running.some((ie => ie.active.source == ee.source)))) ? setTimeout((() => this.startUpdate()), Me) : -1, 0 != this.composing)
            for (let be of ee.transactions) be.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && be.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: ee
          } = this.view, ie = ee.field(ue);
          for (let He of ie.active) He.isPending && !this.running.some((ee => ee.active.source == He.source)) && this.startQuery(He);
          this.running.length && ie.open && ie.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(ge).updateSyncTime))
        }
        startQuery(ee) {
          let {
            state: ie
          } = this.view, He = Re(ie), ye = new Ke(ie, He, ee.explicit, this.view), Me = new je(ee, ye);
          this.running.push(Me), Promise.resolve(ee.source(ye)).then((ee => {
            Me.context.aborted || (Me.done = ee || null, this.scheduleAccept())
          }), (ee => {
            this.view.dispatch({
              effects: ze.of(null)
            }), (0, be.U)(this.view.state, ee)
          }))
        }
        scheduleAccept() {
          this.running.every((ee => void 0 !== ee.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(ge).updateSyncTime))
        }
        accept() {
          var ee;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let ie = [],
            He = this.view.state.facet(ge),
            ye = this.view.state.field(ue);
          for (let be = 0; be < this.running.length; be++) {
            let Me = this.running[be];
            if (void 0 === Me.done) continue;
            if (this.running.splice(be--, 1), Me.done) {
              let ye = Re(Me.updates.length ? Me.updates[0].startState : this.view.state),
                be = Math.min(ye, Me.done.from + (Me.active.explicit ? 0 : 1)),
                Ke = new Ce(Me.active.source, Me.active.explicit, be, Me.done, Me.done.from, null !== (ee = Me.done.to) && void 0 !== ee ? ee : ye);
              for (let ee of Me.updates) Ke = Ke.update(ee, He);
              if (Ke.hasResult()) {
                ie.push(Ke);
                continue
              }
            }
            let Ke = ye.active.find((ee => ee.source == Me.active.source));
            if (Ke && Ke.isPending)
              if (null == Me.done) {
                let ee = new Le(Me.active.source, 0);
                for (let ie of Me.updates) ee = ee.update(ie, He);
                ee.isPending || ie.push(ee)
              } else this.startQuery(Ke)
          }(ie.length || ye.open && ye.open.disabled) && this.view.dispatch({
            effects: ve.of(ie)
          })
        }
      }, {
        eventHandlers: {
          blur(ee) {
            let ie = this.view.state.field(ue, !1);
            if (ie && ie.tooltip && this.view.state.facet(ge).closeOnBlur) {
              let He = ie.open && (0, be.y)(this.view, ie.open.tooltip);
              He && He.dom.contains(ee.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: ze.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: Xe.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      Ie = "object" == typeof navigator && /Win/.test(navigator.platform),
      he = ye.x.highest(be.i.domEventHandlers({
        keydown(ee, ie) {
          let He = ie.state.field(ue, !1);
          if (!He || !He.open || He.open.disabled || He.open.selected < 0 || ee.key.length > 1 || ee.ctrlKey && (!Ie || !ee.altKey) || ee.metaKey) return !1;
          let ye = He.open.options[He.open.selected],
            be = He.active.find((ee => ee.source == ye.source)),
            Me = ye.completion.commitCharacters || be.result.commitCharacters;
          return Me && Me.indexOf(ee.key) > -1 && me(ie, ye), !1
        }
      })),
      Ne = be.i.baseTheme({
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
    class Ge {
      constructor(ee, ie, He, ye) {
        this.field = ee, this.line = ie, this.from = He, this.to = ye
      }
    }
    class re {
      constructor(ee, ie, He) {
        this.field = ee, this.from = ie, this.to = He
      }
      map(ee) {
        let ie = ee.mapPos(this.from, -1, ye.t.TrackDel),
          He = ee.mapPos(this.to, 1, ye.t.TrackDel);
        return null == ie || null == He ? null : new re(this.field, ie, He)
      }
    }
    class Qe {
      constructor(ee, ie) {
        this.lines = ee, this.fieldPositions = ie
      }
      instantiate(ee, ie) {
        let He = [],
          ye = [ie],
          be = ee.doc.lineAt(ie),
          Ke = /^\s*/.exec(be.text)[0];
        for (let Fe of this.lines) {
          if (He.length) {
            let He = Ke,
              be = /^\t*/.exec(Fe)[0].length;
            for (let ie = 0; ie < be; ie++) He += ee.facet(Me.db);
            ye.push(ie + He.length - be), Fe = He + Fe.slice(be)
          }
          He.push(Fe), ie += Fe.length + 1
        }
        let Ue = this.fieldPositions.map((ee => new re(ee.field, ye[ee.line] + ee.from, ye[ee.line] + ee.to)));
        return {
          text: He,
          zp: Ue
        }
      }
      static parse(ee) {
        let ie, He = [],
          ye = [],
          be = [];
        for (let Me of ee.split(/\r\n?|\n/)) {
          for (; ie = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Me);) {
            let ee = ie[1] ? +ie[1] : null,
              Ke = ie[2] || ie[3] || "",
              Ue = -1,
              Fe = Ke.replace(/\\[{}]/g, (ee => ee[1]));
            for (let ie = 0; ie < He.length; ie++)(null != ee ? He[ie].seq == ee : Fe && He[ie].name == Fe) && (Ue = ie);
            if (Ue < 0) {
              let ie = 0;
              for (; ie < He.length && (null == ee || null != He[ie].seq && He[ie].seq < ee);) ie++;
              He.splice(ie, 0, {
                seq: ee,
                name: Fe
              }), Ue = ie;
              for (let ee of be) ee.field >= Ue && ee.field++
            }
            for (let He of be)
              if (He.line == ye.length && He.from > ie.index) {
                let ee = ie[2] ? 3 + (ie[1] || "").length : 2;
                He.from -= ee, He.to -= ee
              } be.push(new Ge(Ue, ye.length, ie.index, ie.index + Fe.length)), Me = Me.slice(0, ie.index) + Ke + Me.slice(ie.index + ie[0].length)
          }
          Me = Me.replace(/\\([{}])/g, ((ee, ie, He) => {
            for (let Me of be) Me.line == ye.length && Me.from > He && (Me.from--, Me.to--);
            return ie
          })), ye.push(Me)
        }
        return new Qe(ye, be)
      }
    }
    let ei = be.e.widget({
        widget: new class extends be.p {
          toDOM() {
            let ee = document.createElement("span");
            return ee.className = "cm-snippetFieldPosition", ee
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      ii = be.e.mark({
        class: "cm-snippetField"
      });
    class Hi {
      constructor(ee, ie) {
        this.zp = ee, this.active = ie, this.deco = be.e.set(ee.map((ee => (ee.from == ee.to ? ei : ii).range(ee.from, ee.to))), !0)
      }
      map(ee) {
        let ie = [];
        for (let He of this.zp) {
          let ye = He.map(ee);
          if (!ye) return null;
          ie.push(ye)
        }
        return new Hi(ie, this.active)
      }
      selectionInsideField(ee) {
        return ee.zp.every((ee => this.zp.some((ie => ie.field == this.active && ie.from <= ee.from && ie.to >= ee.to))))
      }
    }
    const yi = ye.K.define({
        map: (ee, ie) => ee && ee.map(ie)
      }),
      bi = ye.K.define(),
      Mi = ye.N.define({
        create: () => null,
        update(ee, ie) {
          for (let He of ie.effects) {
            if (He.is(yi)) return He.value;
            if (He.is(bi) && ee) return new Hi(ee.zp, He.value)
          }
          return ee && ie.docChanged && (ee = ee.map(ie.changes)), ee && ie.selection && !ee.selectionInsideField(ie.selection) && (ee = null), ee
        },
        provide: ee => be.i.MM.from(ee, (ee => ee ? ee.deco : be.e.none))
      });

    function Ki(ee, ie) {
      return ye.k.create(ee.filter((ee => ee.field == ie)).map((ee => ye.k.range(ee.from, ee.to))))
    }

    function Ui(ee) {
      let ie = Qe.parse(ee);
      return (ee, He, be, Me) => {
        let {
          text: Ke,
          zp: Ue
        } = ie.instantiate(ee.state, be), {
          main: Fe
        } = ee.state.selection, Je = {
          changes: {
            from: be,
            to: Me == Fe.from ? Fe.to : Me,
            insert: ye.R.of(Ke)
          },
          scrollIntoView: !0,
          annotations: He ? [qe.of(He), ye.T.userEvent.of("input.complete")] : void 0
        };
        if (Ue.length && (Je.selection = Ki(Ue, 0)), Ue.some((ee => ee.field > 0))) {
          let ie = new Hi(Ue, 0),
            He = Je.effects = [yi.of(ie)];
          void 0 === ee.state.field(Mi, !1) && He.push(ye.K.appendConfig.of([Mi, Ri, qi, Ne]))
        }
        ee.dispatch(ee.state.update(Je))
      }
    }

    function Fi(ee) {
      return ie => {
        let {
          state: He,
          dispatch: ye
        } = ie, be = He.field(Mi, !1);
        if (!be || ee < 0 && 0 == be.active) return !1;
        let Me = be.active + ee,
          Ke = ee > 0 && !be.zp.some((ie => ie.field == Me + ee));
        return ye(He.update({
          selection: Ki(be.zp, Me),
          effects: yi.of(Ke ? null : new Hi(be.zp, Me)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Ji = [{
        key: "Tab",
        run: Fi(1),
        shift: Fi(-1)
      }, {
        key: "Escape",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee;
          return !!ie.field(Mi, !1) && (He(ie.update({
            effects: yi.of(null)
          })), !0)
        }
      }],
      oi = ye.q.define({
        combine: ee => ee.length ? ee[0] : Ji
      }),
      Ri = ye.x.highest(be.P.compute([oi], (ee => ee.facet(oi))));

    function ki(ee, ie) {
      return {
        ...ie,
        apply: Ui(ee)
      }
    }
    const qi = be.i.domEventHandlers({
      mousedown(ee, ie) {
        let He, ye = ie.state.field(Mi, !1);
        if (!ye || null == (He = ie.posAtCoords({
            x: ee.clientX,
            y: ee.clientY
          }))) return !1;
        let be = ye.zp.find((ee => ee.from <= He && ee.to >= He));
        return !(!be || be.field == ye.active) && (ie.dispatch({
          selection: Ki(ye.zp, be.field),
          effects: yi.of(ye.zp.some((ee => ee.field > be.field)) ? new Hi(ye.zp, be.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const fi = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      Ti = ye.K.define({
        map(ee, ie) {
          let He = ie.mapPos(ee, -1, ye.t.TrackAfter);
          return null == He ? void 0 : He
        }
      }),
      Xi = new class extends ye.G {};
    Xi.startSide = 1, Xi.endSide = -1;
    const zi = ye.N.define({
      create: () => ye.D.empty,
      update(ee, ie) {
        if (ee = ee.map(ie.changes), ie.selection) {
          let He = ie.state.doc.lineAt(ie.selection.main.head);
          ee = ee.update({
            filter: ee => ee >= He.from && ee <= He.to
          })
        }
        for (let He of ie.effects) He.is(Ti) && (ee = ee.update({
          add: [Xi.range(He.value, He.value + 1)]
        }));
        return ee
      }
    });

    function Bi() {
      return [Wi, zi]
    }
    const Ei = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function gi(ee) {
      for (let ie = 0; ie < 16; ie += 2)
        if (Ei.charCodeAt(ie) == ee) return Ei.charAt(ie + 1);
      return (0, ye.pb)(ee < 128 ? ee : ee + 1)
    }

    function Oi(ee, ie) {
      return ee.languageDataAt("closeBrackets", ie)[0] || fi
    }
    const di = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Wi = be.i.inputHandler.of(((ee, ie, He, be) => {
        if ((di ? ee.composing : ee.compositionStarted) || ee.state.readOnly) return !1;
        let Me = ee.state.selection.main;
        if (be.length > 2 || 2 == be.length && 1 == (0, ye.$)((0, ye.X)(be, 0)) || ie != Me.from || He != Me.to) return !1;
        let Ke = function(ee, ie) {
          let He = Oi(ee, ee.selection.main.head),
            be = He.brackets || fi.brackets;
          for (let Me of be) {
            let Ke = gi((0, ye.X)(Me, 0));
            if (ie == Me) return Ke == Me ? Ai(ee, Me, be.indexOf(Me + Me + Me) > -1, He) : Di(ee, Me, Ke, He.before || fi.before);
            if (ie == Ke && Zi(ee, ee.selection.main.from)) return Pi(ee, Me, Ke)
          }
          return null
        }(ee.state, be);
        return !!Ke && (ee.dispatch(Ke), !0)
      })),
      ti = [{
        key: "Backspace",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee;
          if (ie.readOnly) return !1;
          let be = Oi(ie, ie.selection.main.head).brackets || fi.brackets,
            Me = null,
            Ke = ie.changeByRange((ee => {
              if (ee.empty) {
                let He = function(ee, ie) {
                  let He = ee.sliceString(ie - 2, ie);
                  return (0, ye.$)((0, ye.X)(He, 0)) == He.length ? He : He.slice(1)
                }(ie.doc, ee.head);
                for (let Me of be)
                  if (Me == He && wi(ie.doc, ee.head) == gi((0, ye.X)(Me, 0))) return {
                    changes: {
                      from: ee.head - Me.length,
                      to: ee.head + Me.length
                    },
                    range: ye.k.cursor(ee.head - Me.length)
                  }
              }
              return {
                range: Me = ee
              }
            }));
          return Me || He(ie.update(Ke, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !Me
        }
      }];

    function Zi(ee, ie) {
      let He = !1;
      return ee.field(zi).between(0, ee.doc.length, (ee => {
        ee == ie && (He = !0)
      })), He
    }

    function wi(ee, ie) {
      let He = ee.sliceString(ie, ie + 2);
      return He.slice(0, (0, ye.$)((0, ye.X)(He, 0)))
    }

    function Di(ee, ie, He, be) {
      let Me = null,
        Ke = ee.changeByRange((Ke => {
          if (!Ke.empty) return {
            changes: [{
              insert: ie,
              from: Ke.from
            }, {
              insert: He,
              from: Ke.to
            }],
            effects: Ti.of(Ke.to + ie.length),
            range: ye.k.range(Ke.anchor + ie.length, Ke.head + ie.length)
          };
          let Ue = wi(ee.doc, Ke.head);
          return !Ue || /\s/.test(Ue) || be.indexOf(Ue) > -1 ? {
            changes: {
              insert: ie + He,
              from: Ke.head
            },
            effects: Ti.of(Ke.head + ie.length),
            range: ye.k.cursor(Ke.head + ie.length)
          } : {
            range: Me = Ke
          }
        }));
      return Me ? null : ee.update(Ke, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Pi(ee, ie, He) {
      let be = null,
        Me = ee.changeByRange((ie => ie.empty && wi(ee.doc, ie.head) == He ? {
          changes: {
            from: ie.head,
            to: ie.head + He.length,
            insert: He
          },
          range: ye.k.cursor(ie.head + He.length)
        } : be = {
          range: ie
        }));
      return be ? null : ee.update(Me, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Ai(ee, ie, He, be) {
      let Ke = be.stringPrefixes || fi.stringPrefixes,
        Ue = null,
        Fe = ee.changeByRange((be => {
          if (!be.empty) return {
            changes: [{
              insert: ie,
              from: be.from
            }, {
              insert: ie,
              from: be.to
            }],
            effects: Ti.of(be.to + ie.length),
            range: ye.k.range(be.anchor + ie.length, be.head + ie.length)
          };
          let Fe, Je = be.head,
            oe = wi(ee.doc, Je);
          if (oe == ie) {
            if (Yi(ee, Je)) return {
              changes: {
                insert: ie + ie,
                from: Je
              },
              effects: Ti.of(Je + ie.length),
              range: ye.k.cursor(Je + ie.length)
            };
            if (Zi(ee, Je)) {
              let be = He && ee.sliceDoc(Je, Je + 3 * ie.length) == ie + ie + ie ? ie + ie + ie : ie;
              return {
                changes: {
                  from: Je,
                  to: Je + be.length,
                  insert: be
                },
                range: ye.k.cursor(Je + be.length)
              }
            }
          } else {
            if (He && ee.sliceDoc(Je - 2 * ie.length, Je) == ie + ie && (Fe = Vi(ee, Je - 2 * ie.length, Ke)) > -1 && Yi(ee, Fe)) return {
              changes: {
                insert: ie + ie + ie + ie,
                from: Je
              },
              effects: Ti.of(Je + ie.length),
              range: ye.k.cursor(Je + ie.length)
            };
            if (ee.charCategorizer(Je)(oe) != ye.i.Word && Vi(ee, Je, Ke) > -1 && ! function(ee, ie, He, ye) {
                let be = (0, Me.tb)(ee).resolveInner(ie, -1),
                  Ke = ye.reduce(((ee, ie) => Math.max(ee, ie.length)), 0);
                for (let Me = 0; Me < 5; Me++) {
                  let Me = ee.sliceDoc(be.from, Math.min(be.to, be.from + He.length + Ke)),
                    Ue = Me.indexOf(He);
                  if (!Ue || Ue > -1 && ye.indexOf(Me.slice(0, Ue)) > -1) {
                    let ie = be.firstChild;
                    for (; ie && ie.from == be.from && ie.to - ie.from > He.length + Ue;) {
                      if (ee.sliceDoc(ie.to - He.length, ie.to) == He) return !1;
                      ie = ie.firstChild
                    }
                    return !0
                  }
                  let Fe = be.to == ie && be.parent;
                  if (!Fe) break;
                  be = Fe
                }
                return !1
              }(ee, Je, ie, Ke)) return {
              changes: {
                insert: ie + ie,
                from: Je
              },
              effects: Ti.of(Je + ie.length),
              range: ye.k.cursor(Je + ie.length)
            }
          }
          return {
            range: Ue = be
          }
        }));
      return Ue ? null : ee.update(Fe, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Yi(ee, ie) {
      let He = (0, Me.tb)(ee).resolveInner(ie + 1);
      return He.parent && He.from == ie
    }

    function Vi(ee, ie, He) {
      let be = ee.charCategorizer(ie);
      if (be(ee.sliceDoc(ie - 1, ie)) != ye.i.Word) return ie;
      for (let Me of He) {
        let He = ie - Me.length;
        if (ee.sliceDoc(He, ie) == Me && be(ee.sliceDoc(He - 1, He)) != ye.i.Word) return He
      }
      return -1
    }

    function ai() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [he, ue, ge.of(ee), se, xi, Ne]
    }
    const ci = [{
        key: "Ctrl-Space",
        run: ne
      }, {
        mac: "Alt-`",
        run: ne
      }, {
        mac: "Alt-i",
        run: ne
      }, {
        key: "Escape",
        run: ee => {
          let ie = ee.state.field(ue, !1);
          return !(!ie || !ie.active.some((ee => 0 != ee.state))) && (ee.dispatch({
            effects: ze.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: Se(!0)
      }, {
        key: "ArrowUp",
        run: Se(!1)
      }, {
        key: "PageDown",
        run: Se(!0, "page")
      }, {
        key: "PageUp",
        run: Se(!1, "page")
      }, {
        key: "Enter",
        run: ee => {
          let ie = ee.state.field(ue, !1);
          return !(ee.state.readOnly || !ie || !ie.open || ie.open.selected < 0 || ie.open.disabled || Date.now() - ie.open.timestamp < ee.state.facet(ge).interactionDelay) && me(ee, ie.open.options[ie.open.selected])
        }
      }],
      xi = ye.x.highest(be.P.computeN([ge], (ee => ee.facet(ge).defaultKeymap ? [ci] : [])))
  },
  44643: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je,
      e: () => ke,
      h: () => oe,
      k: () => Re
    });
    var ye = He(44509);
    class be {
      constructor(ee, ie, He, ye) {
        this.origin = ee, this.changes = ie, this.effects = He, this.clientID = ye
      }
    }
    class Me {
      constructor(ee, ie) {
        this.version = ee, this.unconfirmed = ie
      }
    }
    const Ke = ye.q.define({
        combine(ee) {
          let ie = (0, ye.cb)(ee, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: ee => ee
          });
          return null == ie.clientID && (ie.clientID = ee.length && ee[0].generatedID || ""), ie
        }
      }),
      Ue = ye.e.define(),
      Fe = ye.N.define({
        create: ee => new Me(ee.facet(Ke).startVersion, []),
        update(ee, ie) {
          let He = ie.annotation(Ue);
          if (He) return He;
          let {
            sharedEffects: ye,
            clientID: Fe
          } = ie.startState.facet(Ke), Je = ye(ie);
          return Je.length || !ie.changes.empty ? new Me(ee.version, ee.unconfirmed.concat(new be(ie, ie.changes, Je, Fe))) : ee
        }
      });

    function Je() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Fe, Ke.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, ee))]
    }

    function oe(ee, ie) {
      let {
        version: He,
        unconfirmed: Je
      } = ee.field(Fe), {
        clientID: oe
      } = ee.facet(Ke);
      He += ie.length;
      let Re = [],
        ke = null,
        qe = 0;
      for (let be of ie) {
        let ee = qe < Je.length ? Je[qe] : null;
        ee && ee.clientID == be.clientID ? (ke && (ke = ke.map(ee.changes, !0)), Re = ye.K.mapEffects(Re, be.changes), qe++) : (Re = ye.K.mapEffects(Re, be.changes), be.effects && (Re = Re.concat(be.effects)), ke = ke ? ke.compose(be.changes) : be.changes)
      }
      if (qe && (Je = Je.slice(qe)), Je.length && (ke && (Je = Je.map((ee => {
          let ie = ee.changes.map(ke);
          return ke = ke.map(ee.changes, !0), new be(ee.origin, ie, ye.K.mapEffects(ee.effects, ke), oe)
        }))), Re.length)) {
        let ee = Je.reduce(((ee, ie) => ee.compose(ie.changes)), ye.ChangeSet.empty(Je[0].changes.length));
        Re = ye.K.mapEffects(Re, ee)
      }
      return ke ? ee.update({
        changes: ke,
        effects: Re,
        annotations: [ye.T.addToHistory.of(!1), ye.T.remote.of(!0), Ue.of(new Me(He, Je))],
        filter: !1
      }) : ee.update({
        annotations: [Ue.of(new Me(He, Je))]
      })
    }

    function Re(ee) {
      return ee.field(Fe).unconfirmed
    }

    function ke(ee) {
      return ee.field(Fe).version
    }
  },
  44546: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ti
    });
    var ye = He(44538);
    class be {
      constructor(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        let Je = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          oe = arguments.length > 10 ? arguments[10] : void 0;
        this.p = ee, this.stack = ie, this.state = He, this.reducePos = ye, this.pos = be, this.score = Me, this.buffer = Ke, this.bufferBase = Ue, this.curContext = Fe, this.lookAhead = Je, this.parent = oe
      }
      toString() {
        return `[${this.stack.filter(((ee,ie)=>ie%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = ee.parser.context;
        return new be(ee, [], ie, He, He, 0, [], 0, ye ? new Me(ye, ye.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(ee, ie) {
        this.stack.push(this.state, ie, this.bufferBase + this.buffer.length), this.state = ee
      }
      reduce(ee) {
        var ie;
        let He = ee >> 19,
          ye = 65535 & ee,
          {
            parser: be
          } = this.p,
          Me = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          Ke = be.dynamicPrecedence(ye);
        if (Ke && (this.score += Ke), 0 == He) return this.pushState(be.getGoto(this.state, ye, !0), this.reducePos), ye < be.minRepeatTerm && this.storeNode(ye, this.reducePos, this.reducePos, Me ? 8 : 4, !0), void this.reduceContext(ye, this.reducePos);
        let Ue = this.stack.length - 3 * (He - 1) - (262144 & ee ? 6 : 0),
          Fe = Ue ? this.stack[Ue - 2] : this.p.zp[0].from,
          Je = this.reducePos - Fe;
        Je >= 2e3 && !(null === (ie = this.p.parser.nodeSet.types[ye]) || void 0 === ie ? void 0 : ie.isAnonymous) && (Fe == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Je) : this.p.lastBigReductionSize < Je && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = Fe, this.p.lastBigReductionSize = Je));
        let oe = Ue ? this.stack[Ue - 1] : 0,
          Re = this.bufferBase + this.buffer.length - oe;
        if (ye < be.minRepeatTerm || 131072 & ee) {
          let ee = be.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(ye, Fe, ee, Re + 4, !0)
        }
        if (262144 & ee) this.state = this.stack[Ue];
        else {
          let ee = this.stack[Ue - 3];
          this.state = be.getGoto(ee, ye, !0)
        }
        for (; this.stack.length > Ue;) this.stack.pop();
        this.reduceContext(ye, Fe)
      }
      storeNode(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == ee && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let ee = this,
            ye = this.buffer.length;
          if (0 == ye && ee.parent && (ye = ee.bufferBase - ee.parent.bufferBase, ee = ee.parent), ye > 0 && 0 == ee.buffer[ye - 4] && ee.buffer[ye - 1] > -1) {
            if (ie == He) return;
            if (ee.buffer[ye - 2] >= ie) return void(ee.buffer[ye - 2] = He)
          }
        }
        if (be && this.pos != He) {
          let be = this.buffer.length;
          if (be > 0 && (0 != this.buffer[be - 4] || this.buffer[be - 1] < 0)) {
            let ee = !1;
            for (let ie = be; ie > 0 && this.buffer[ie - 2] > He; ie -= 4)
              if (this.buffer[ie - 1] >= 0) {
                ee = !0;
                break
              } if (ee)
              for (; be > 0 && this.buffer[be - 2] > He;) this.buffer[be] = this.buffer[be - 4], this.buffer[be + 1] = this.buffer[be - 3], this.buffer[be + 2] = this.buffer[be - 2], this.buffer[be + 3] = this.buffer[be - 1], be -= 4, ye > 4 && (ye -= 4)
          }
          this.buffer[be] = ee, this.buffer[be + 1] = ie, this.buffer[be + 2] = He, this.buffer[be + 3] = ye
        } else this.buffer.push(ee, ie, He, ye)
      }
      shift(ee, ie, He, ye) {
        if (131072 & ee) this.pushState(65535 & ee, this.pos);
        else if (0 == (262144 & ee)) {
          let be = ee,
            {
              parser: Me
            } = this.p;
          this.pos = ye;
          let Ke = Me.stateFlag(be, 1);
          !Ke && (ye > He || ie <= Me.maxNode) && (this.reducePos = ye), this.pushState(be, Ke ? He : Math.min(He, this.reducePos)), this.shiftContext(ie, He), ie <= Me.maxNode && this.buffer.push(ie, He, ye, 4)
        } else this.pos = ye, this.shiftContext(ie, He), ie <= this.p.parser.maxNode && this.buffer.push(ie, He, ye, 4)
      }
      apply(ee, ie, He, ye) {
        65536 & ee ? this.reduce(ee) : this.shift(ee, ie, He, ye)
      }
      useNode(ee, ie) {
        let He = this.p.reused.length - 1;
        (He < 0 || this.p.reused[He] != ee) && (this.p.reused.push(ee), He++);
        let ye = this.pos;
        this.reducePos = this.pos = ye + ee.length, this.pushState(ie, ye), this.buffer.push(He, ye, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, ee, this, this.p.stream.reset(this.pos - ee.length)))
      }
      split() {
        let ee = this,
          ie = ee.buffer.length;
        for (; ie > 0 && ee.buffer[ie - 2] > ee.reducePos;) ie -= 4;
        let He = ee.buffer.slice(ie),
          ye = ee.bufferBase + ie;
        for (; ee && ye == ee.bufferBase;) ee = ee.parent;
        return new be(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, He, ye, this.curContext, this.lookAhead, ee)
      }
      recoverByDelete(ee, ie) {
        let He = ee <= this.p.parser.maxNode;
        He && this.storeNode(ee, this.pos, ie, 4), this.storeNode(0, this.pos, ie, He ? 8 : 4), this.pos = this.reducePos = ie, this.score -= 190
      }
      canShift(ee) {
        for (let ie = new Ke(this);;) {
          let He = this.p.parser.stateSlot(ie.state, 4) || this.p.parser.hasAction(ie.state, ee);
          if (0 == He) return !1;
          if (0 == (65536 & He)) return !0;
          ie.reduce(He)
        }
      }
      recoverByInsert(ee) {
        if (this.stack.length >= 300) return [];
        let ie = this.p.parser.nextStates(this.state);
        if (ie.length > 8 || this.stack.length >= 120) {
          let He = [];
          for (let ye, be = 0; be < ie.length; be += 2)(ye = ie[be + 1]) != this.state && this.p.parser.hasAction(ye, ee) && He.push(ie[be], ye);
          if (this.stack.length < 120)
            for (let ee = 0; He.length < 8 && ee < ie.length; ee += 2) {
              let ye = ie[ee + 1];
              He.some(((ee, ie) => 1 & ie && ee == ye)) || He.push(ie[ee], ye)
            }
          ie = He
        }
        let He = [];
        for (let ye = 0; ye < ie.length && He.length < 4; ye += 2) {
          let ee = ie[ye + 1];
          if (ee == this.state) continue;
          let be = this.split();
          be.pushState(ee, this.pos), be.storeNode(0, be.pos, be.pos, 4, !0), be.shiftContext(ie[ye], this.pos), be.reducePos = this.pos, be.score -= 200, He.push(be)
        }
        return He
      }
      forceReduce() {
        let {
          parser: ee
        } = this.p, ie = ee.stateSlot(this.state, 5);
        if (0 == (65536 & ie)) return !1;
        if (!ee.validAction(this.state, ie)) {
          let He = ie >> 19,
            ye = 65535 & ie,
            be = this.stack.length - 3 * He;
          if (be < 0 || ee.getGoto(this.stack[be], ye, !1) < 0) {
            let ee = this.findForcedReduction();
            if (null == ee) return !1;
            ie = ee
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(ie), !0
      }
      findForcedReduction() {
        let {
          parser: ee
        } = this.p, ie = [], He = (ye, be) => {
          if (!ie.includes(ye)) return ie.push(ye), ee.allActions(ye, (ie => {
            if (393216 & ie);
            else if (65536 & ie) {
              let He = (ie >> 19) - be;
              if (He > 1) {
                let ye = 65535 & ie,
                  be = this.stack.length - 3 * He;
                if (be >= 0 && ee.getGoto(this.stack[be], ye, !1) >= 0) return He << 19 | 65536 | ye
              }
            } else {
              let ee = He(ie, be + 1);
              if (null != ee) return ee
            }
          }))
        };
        return He(this.state, 0)
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
          parser: ee
        } = this.p;
        return 65535 == ee.data[ee.stateSlot(this.state, 1)] && !ee.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(ee) {
        if (this.state != ee.state || this.stack.length != ee.stack.length) return !1;
        for (let ie = 0; ie < this.stack.length; ie += 3)
          if (this.stack[ie] != ee.stack[ie]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(ee) {
        return this.p.parser.dialect.flags[ee]
      }
      shiftContext(ee, ie) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, ee, this, this.p.stream.reset(ie)))
      }
      reduceContext(ee, ie) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, ee, this, this.p.stream.reset(ie)))
      }
      emitContext() {
        let ee = this.buffer.length - 1;
        (ee < 0 || -3 != this.buffer[ee]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let ee = this.buffer.length - 1;
        (ee < 0 || -4 != this.buffer[ee]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(ee) {
        if (ee != this.curContext.context) {
          let ie = new Me(this.curContext.tracker, ee);
          ie.hash != this.curContext.hash && this.emitContext(), this.curContext = ie
        }
      }
      setLookAhead(ee) {
        return !(ee <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = ee, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class Me {
      constructor(ee, ie) {
        this.tracker = ee, this.context = ie, this.hash = ee.strict ? ee.hash(ie) : 0
      }
    }
    class Ke {
      constructor(ee) {
        this.start = ee, this.state = ee.state, this.stack = ee.stack, this.base = this.stack.length
      }
      reduce(ee) {
        let ie = 65535 & ee,
          He = ee >> 19;
        0 == He ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (He - 1);
        let ye = this.start.p.parser.getGoto(this.stack[this.base - 3], ie, !0);
        this.state = ye
      }
    }
    class Ue {
      constructor(ee, ie, He) {
        this.stack = ee, this.pos = ie, this.index = He, this.buffer = ee.buffer, 0 == this.index && this.maybeNext()
      }
      static create(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.bufferBase + ee.buffer.length;
        return new Ue(ee, ie, ie - ee.bufferBase)
      }
      maybeNext() {
        let ee = this.stack.parent;
        null != ee && (this.index = this.stack.bufferBase - ee.bufferBase, this.stack = ee, this.buffer = ee.buffer)
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
        return new Ue(this.stack, this.pos, this.index)
      }
    }

    function Fe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof ee) return ee;
      let He = null;
      for (let ye = 0, be = 0; ye < ee.length;) {
        let Me = 0;
        for (;;) {
          let ie = ee.charCodeAt(ye++),
            He = !1;
          if (126 == ie) {
            Me = 65535;
            break
          }
          ie >= 92 && ie--, ie >= 34 && ie--;
          let be = ie - 32;
          if (be >= 46 && (be -= 46, He = !0), Me += be, He) break;
          Me *= 46
        }
        He ? He[be++] = Me : He = new ie(Me)
      }
      return He
    }
    class Je {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const oe = new Je;
    class Re {
      constructor(ee, ie) {
        this.input = ee, this.zp = ie, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = oe, this.rangeIndex = 0, this.pos = this.chunkPos = ie[0].from, this.range = ie[0], this.end = ie[ie.length - 1].to, this.readNext()
      }
      resolveOffset(ee, ie) {
        let He = this.range,
          ye = this.rangeIndex,
          be = this.pos + ee;
        for (; be < He.from;) {
          if (!ye) return null;
          let ee = this.zp[--ye];
          be -= He.from - ee.to, He = ee
        }
        for (; ie < 0 ? be > He.to : be >= He.to;) {
          if (ye == this.zp.length - 1) return null;
          let ee = this.zp[++ye];
          be += ee.from - He.to, He = ee
        }
        return be
      }
      clipPos(ee) {
        if (ee >= this.range.from && ee < this.range.to) return ee;
        for (let ie of this.zp)
          if (ie.to > ee) return Math.max(ee, ie.from);
        return this.end
      }
      peek(ee) {
        let ie, He, ye = this.chunkOff + ee;
        if (ye >= 0 && ye < this.chunk.length) ie = this.pos + ee, He = this.chunk.charCodeAt(ye);
        else {
          let ye = this.resolveOffset(ee, 1);
          if (null == ye) return -1;
          if (ie = ye, ie >= this.chunk2Pos && ie < this.chunk2Pos + this.chunk2.length) He = this.chunk2.charCodeAt(ie - this.chunk2Pos);
          else {
            let ee = this.rangeIndex,
              ye = this.range;
            for (; ye.to <= ie;) ye = this.zp[++ee];
            this.chunk2 = this.input.chunk(this.chunk2Pos = ie), ie + this.chunk2.length > ye.to && (this.chunk2 = this.chunk2.slice(0, ye.to - ie)), He = this.chunk2.charCodeAt(0)
          }
        }
        return ie >= this.token.lookAhead && (this.token.lookAhead = ie + 1), He
      }
      acceptToken(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = ie ? this.resolveOffset(ie, -1) : this.pos;
        if (null == He || He < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = ee, this.token.end = He
      }
      acceptTokenTo(ee, ie) {
        this.token.value = ee, this.token.end = ie
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: ee,
            chunkPos: ie
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = ee, this.chunk2Pos = ie, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let ee = this.input.chunk(this.pos),
            ie = this.pos + ee.length;
          this.chunk = ie > this.range.to ? ee.slice(0, this.range.to - this.pos) : ee, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += ee; this.pos + ee >= this.range.to;) {
          if (this.rangeIndex == this.zp.length - 1) return this.setDone();
          ee -= this.range.to - this.pos, this.range = this.zp[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += ee, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.zp[this.rangeIndex = this.zp.length - 1], this.chunk = "", this.next = -1
      }
      reset(ee, ie) {
        if (ie ? (this.token = ie, ie.start = ee, ie.lookAhead = ee + 1, ie.value = ie.extended = -1) : this.token = oe, this.pos != ee) {
          if (this.pos = ee, ee == this.end) return this.setDone(), this;
          for (; ee < this.range.from;) this.range = this.zp[--this.rangeIndex];
          for (; ee >= this.range.to;) this.range = this.zp[++this.rangeIndex];
          ee >= this.chunkPos && ee < this.chunkPos + this.chunk.length ? this.chunkOff = ee - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(ee, ie) {
        if (ee >= this.chunkPos && ie <= this.chunkPos + this.chunk.length) return this.chunk.slice(ee - this.chunkPos, ie - this.chunkPos);
        if (ee >= this.chunk2Pos && ie <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(ee - this.chunk2Pos, ie - this.chunk2Pos);
        if (ee >= this.range.from && ie <= this.range.to) return this.input.read(ee, ie);
        let He = "";
        for (let ye of this.zp) {
          if (ye.from >= ie) break;
          ye.to > ee && (He += this.input.read(Math.max(ye.from, ee), Math.min(ye.to, ie)))
        }
        return He
      }
    }
    class ke {
      constructor(ee, ie) {
        this.data = ee, this.id = ie
      }
      token(ee, ie) {
        let {
          parser: He
        } = ie.p;
        Te(this.data, ee, ie, this.id, He.data, He.tokenPrecTable)
      }
    }
    ke.prototype.contextual = ke.prototype.fallback = ke.prototype.extend = !1;
    class qe {
      constructor(ee, ie, He) {
        this.precTable = ie, this.elseToken = He, this.data = "string" == typeof ee ? Fe(ee) : ee
      }
      token(ee, ie) {
        let He = ee.pos,
          ye = 0;
        for (;;) {
          let He = ee.next < 0,
            be = ee.resolveOffset(1, 1);
          if (Te(this.data, ee, ie, 0, this.data, this.precTable), ee.token.value > -1) break;
          if (null == this.elseToken) return;
          if (He || ye++, null == be) break;
          ee.reset(be, ee.token)
        }
        ye && (ee.reset(He, ee.token), ee.acceptToken(this.elseToken, ye))
      }
    }
    qe.prototype.contextual = ke.prototype.fallback = ke.prototype.extend = !1;
    class fe {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = ee, this.contextual = !!ie.contextual, this.fallback = !!ie.fallback, this.extend = !!ie.extend
      }
    }

    function Te(ee, ie, He, ye, be, Me) {
      let Ke = 0,
        Ue = 1 << ye,
        {
          dialect: Fe
        } = He.p.parser;
      ee: for (; 0 != (Ue & ee[Ke]);) {
        let He = ee[Ke + 1];
        for (let Re = Ke + 3; Re < He; Re += 2)
          if ((ee[Re + 1] & Ue) > 0) {
            let He = ee[Re];
            if (Fe.allows(He) && (-1 == ie.token.value || ie.token.value == He || Xe(He, ie.token.value, be, Me))) {
              ie.acceptToken(He);
              break
            }
          } let ye = ie.next,
          Je = 0,
          oe = ee[Ke + 2];
        if (!(ie.next < 0 && oe > Je && 65535 == ee[He + 3 * oe - 3])) {
          for (; Je < oe;) {
            let be = Je + oe >> 1,
              Me = He + be + (be << 1),
              Ue = ee[Me],
              Fe = ee[Me + 1] || 65536;
            if (ye < Ue) oe = be;
            else {
              if (!(ye >= Fe)) {
                Ke = ee[Me + 2], ie.advance();
                continue ee
              }
              Je = be + 1
            }
          }
          break
        }
        Ke = ee[He + 3 * oe - 1]
      }
    }

    function pe(ee, ie, He) {
      for (let ye, be = ie; 65535 != (ye = ee[be]); be++)
        if (ye == He) return be - ie;
      return -1
    }

    function Xe(ee, ie, He, ye) {
      let be = pe(He, ye, ie);
      return be < 0 || pe(He, ye, ee) < be
    }
    const ze = "undefined" != typeof process && {
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
    let Be = null;

    function Ee(ee, ie, He) {
      let be = ee.cursor(ye.e.IncludeAnonymous);
      for (be.moveTo(ie);;)
        if (!(He < 0 ? be.childBefore(ie) : be.childAfter(ie)))
          for (;;) {
            if ((He < 0 ? be.to < ie : be.from > ie) && !be.type.isError) return He < 0 ? Math.max(0, Math.min(be.to - 1, ie - 25)) : Math.min(ee.length, Math.max(be.from + 1, ie + 25));
            if (He < 0 ? be.prevSibling() : be.nextSibling()) break;
            if (!be.parent()) return He < 0 ? 0 : ee.length
          }
    }
    class ge {
      constructor(ee, ie) {
        this.fragments = ee, this.nodeSet = ie, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let ee = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (ee) {
          for (this.safeFrom = ee.openStart ? Ee(ee.tree, ee.from + ee.offset, 1) - ee.offset : ee.from, this.safeTo = ee.openEnd ? Ee(ee.tree, ee.to + ee.offset, -1) - ee.offset : ee.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(ee.tree), this.start.push(-ee.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(ee) {
        if (ee < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= ee;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let ie = this.trees.length - 1;
          if (ie < 0) return this.nextFragment(), null;
          let He = this.trees[ie],
            be = this.index[ie];
          if (be == He.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let Me = He.children[be],
            Ke = this.start[ie] + He.positions[be];
          if (Ke > ee) return this.nextStart = Ke, null;
          if (Me instanceof ye.u) {
            if (Ke == ee) {
              if (Ke < this.safeFrom) return null;
              let ee = Ke + Me.length;
              if (ee <= this.safeTo) {
                let ie = Me.prop(ye.h.lookAhead);
                if (!ie || ee + ie < this.fragment.to) return Me
              }
            }
            this.index[ie]++, Ke + Me.length >= Math.max(this.safeFrom, ee) && (this.trees.push(Me), this.start.push(Ke), this.index.push(0))
          } else this.index[ie]++, this.nextStart = Ke + Me.length
        }
      }
    }
    class Oe {
      constructor(ee, ie) {
        this.stream = ie, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = ee.tokenizers.map((ee => new Je))
      }
      getActions(ee) {
        let ie = 0,
          He = null,
          {
            parser: ye
          } = ee.p,
          {
            tokenizers: be
          } = ye,
          Me = ye.stateSlot(ee.state, 3),
          Ke = ee.curContext ? ee.curContext.hash : 0,
          Ue = 0;
        for (let Fe = 0; Fe < be.length; Fe++) {
          if (0 == (1 << Fe & Me)) continue;
          let ye = be[Fe],
            Je = this.tokens[Fe];
          if ((!He || ye.fallback) && ((ye.contextual || Je.start != ee.pos || Je.mask != Me || Je.context != Ke) && (this.updateCachedToken(Je, ye, ee), Je.mask = Me, Je.context = Ke), Je.lookAhead > Je.end + 25 && (Ue = Math.max(Je.lookAhead, Ue)), 0 != Je.value)) {
            let be = ie;
            if (Je.extended > -1 && (ie = this.addActions(ee, Je.extended, Je.end, ie)), ie = this.addActions(ee, Je.value, Je.end, ie), !ye.extend && (He = Je, ie > be)) break
          }
        }
        for (; this.actions.length > ie;) this.actions.pop();
        return Ue && ee.setLookAhead(Ue), He || ee.pos != this.stream.end || (He = new Je, He.value = ee.p.parser.eofTerm, He.start = He.end = ee.pos, ie = this.addActions(ee, He.value, He.end, ie)), this.mainToken = He, this.actions
      }
      getMainToken(ee) {
        if (this.mainToken) return this.mainToken;
        let ie = new Je,
          {
            pos: He,
            p: ye
          } = ee;
        return ie.start = He, ie.end = Math.min(He + 1, ye.stream.end), ie.value = He == ye.stream.end ? ye.parser.eofTerm : 0, ie
      }
      updateCachedToken(ee, ie, He) {
        let ye = this.stream.clipPos(He.pos);
        if (ie.token(this.stream.reset(ye, ee), He), ee.value > -1) {
          let {
            parser: ie
          } = He.p;
          for (let ye = 0; ye < ie.specialized.length; ye++)
            if (ie.specialized[ye] == ee.value) {
              let be = ie.specializers[ye](this.stream.read(ee.start, ee.end), He);
              if (be >= 0 && He.p.parser.dialect.allows(be >> 1)) {
                0 == (1 & be) ? ee.value = be >> 1 : ee.extended = be >> 1;
                break
              }
            }
        } else ee.value = 0, ee.end = this.stream.clipPos(ye + 1)
      }
      putAction(ee, ie, He, ye) {
        for (let be = 0; be < ye; be += 3)
          if (this.actions[be] == ee) return ye;
        return this.actions[ye++] = ee, this.actions[ye++] = ie, this.actions[ye++] = He, ye
      }
      addActions(ee, ie, He, ye) {
        let {
          state: be
        } = ee, {
          parser: Me
        } = ee.p, {
          data: Ke
        } = Me;
        for (let Ue = 0; Ue < 2; Ue++)
          for (let ee = Me.stateSlot(be, Ue ? 2 : 1);; ee += 3) {
            if (65535 == Ke[ee]) {
              if (1 != Ke[ee + 1]) {
                0 == ye && 2 == Ke[ee + 1] && (ye = this.putAction(De(Ke, ee + 2), ie, He, ye));
                break
              }
              ee = De(Ke, ee + 2)
            }
            Ke[ee] == ie && (ye = this.putAction(De(Ke, ee + 1), ie, He, ye))
          }
        return ye
      }
    }
    class de {
      constructor(ee, ie, He, ye) {
        this.parser = ee, this.input = ie, this.zp = ye, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Re(ie, ye), this.tokens = new Oe(ee, this.stream), this.topTerm = ee.top[1];
        let {
          from: Me
        } = ye[0];
        this.stacks = [be.start(this, ee.top[0], Me)], this.fragments = He.length && this.stream.end - Me > 4 * ee.bufferLength ? new ge(He, ee.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let ee, ie, He = this.stacks,
          ye = this.minStackPos,
          be = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == He.length) {
          let [ee] = He;
          for (; ee.forceReduce() && ee.stack.length && ee.stack[ee.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let Me = 0; Me < He.length; Me++) {
          let Ke = He[Me];
          for (;;) {
            if (this.tokens.mainToken = null, Ke.pos > ye) be.push(Ke);
            else {
              if (this.advanceStack(Ke, be, He)) continue;
              {
                ee || (ee = [], ie = []), ee.push(Ke);
                let He = this.tokens.getMainToken(Ke);
                ie.push(He.value, He.end)
              }
            }
            break
          }
        }
        if (!be.length) {
          let ie = ee && function(ee) {
            let ie = null;
            for (let He of ee) {
              let ee = He.p.stoppedAt;
              (He.pos == He.p.stream.end || null != ee && He.pos > ee) && He.p.parser.stateFlag(He.state, 2) && (!ie || ie.score < He.score) && (ie = He)
            }
            return ie
          }(ee);
          if (ie) return ze && console.log("Finish with " + this.stackID(ie)), this.stackToTree(ie);
          if (this.parser.strict) throw ze && ee && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + ye);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && ee) {
          let He = null != this.stoppedAt && ee[0].pos > this.stoppedAt ? ee[0] : this.runRecovery(ee, ie, be);
          if (He) return ze && console.log("Force-finish " + this.stackID(He)), this.stackToTree(He.forceAll())
        }
        if (this.recovering) {
          let ee = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (be.length > ee)
            for (be.sort(((ee, ie) => ie.score - ee.score)); be.length > ee;) be.pop();
          be.some((ee => ee.reducePos > ye)) && this.recovering--
        } else if (be.length > 1) {
          ee: for (let ee = 0; ee < be.length - 1; ee++) {
            let ie = be[ee];
            for (let He = ee + 1; He < be.length; He++) {
              let ye = be[He];
              if (ie.sameState(ye) || ie.buffer.length > 500 && ye.buffer.length > 500) {
                if (!((ie.score - ye.score || ie.buffer.length - ye.buffer.length) > 0)) {
                  be.splice(ee--, 1);
                  continue ee
                }
                be.splice(He--, 1)
              }
            }
          }
          be.length > 12 && (be.sort(((ee, ie) => ie.score - ee.score)), be.splice(12, be.length - 12))
        }
        this.minStackPos = be[0].pos;
        for (let Me = 1; Me < be.length; Me++) be[Me].pos < this.minStackPos && (this.minStackPos = be[Me].pos);
        return null
      }
      stopAt(ee) {
        if (null != this.stoppedAt && this.stoppedAt < ee) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = ee
      }
      advanceStack(ee, ie, He) {
        let be = ee.pos,
          {
            parser: Me
          } = this,
          Ke = ze ? this.stackID(ee) + " -> " : "";
        if (null != this.stoppedAt && be > this.stoppedAt) return ee.forceReduce() ? ee : null;
        if (this.fragments) {
          let ie = ee.curContext && ee.curContext.tracker.strict,
            He = ie ? ee.curContext.hash : 0;
          for (let Ue = this.fragments.nodeAt(be); Ue;) {
            let be = this.parser.nodeSet.types[Ue.type.id] == Ue.type ? Me.getGoto(ee.state, Ue.type.id) : -1;
            if (be > -1 && Ue.length && (!ie || (Ue.prop(ye.h.contextHash) || 0) == He)) return ee.useNode(Ue, be), ze && console.log(Ke + this.stackID(ee) + ` (via reuse of ${Me.getName(Ue.type.id)})`), !0;
            if (!(Ue instanceof ye.u) || 0 == Ue.children.length || Ue.positions[0] > 0) break;
            let Fe = Ue.children[0];
            if (!(Fe instanceof ye.u && 0 == Ue.positions[0])) break;
            Ue = Fe
          }
        }
        let Ue = Me.stateSlot(ee.state, 4);
        if (Ue > 0) return ee.reduce(Ue), ze && console.log(Ke + this.stackID(ee) + ` (via always-reduce ${Me.getName(65535&Ue)})`), !0;
        if (ee.stack.length >= 8400)
          for (; ee.stack.length > 6e3 && ee.forceReduce(););
        let Fe = this.tokens.getActions(ee);
        for (let ye = 0; ye < Fe.length;) {
          let Ue = Fe[ye++],
            Je = Fe[ye++],
            oe = Fe[ye++],
            Re = ye == Fe.length || !He,
            ke = Re ? ee : ee.split(),
            qe = this.tokens.mainToken;
          if (ke.apply(Ue, Je, qe ? qe.start : ke.pos, oe), ze && console.log(Ke + this.stackID(ke) + ` (via ${0==(65536&Ue)?"shift":`reduce of ${Me.getName(65535&Ue)}`} for ${Me.getName(Je)} @ ${be}${ke==ee?"":", split"})`), Re) return !0;
          ke.pos > be ? ie.push(ke) : He.push(ke)
        }
        return !1
      }
      advanceFully(ee, ie) {
        let He = ee.pos;
        for (;;) {
          if (!this.advanceStack(ee, null, null)) return !1;
          if (ee.pos > He) return We(ee, ie), !0
        }
      }
      runRecovery(ee, ie, He) {
        let ye = null,
          be = !1;
        for (let Me = 0; Me < ee.length; Me++) {
          let Ke = ee[Me],
            Ue = ie[Me << 1],
            Fe = ie[1 + (Me << 1)],
            Je = ze ? this.stackID(Ke) + " -> " : "";
          if (Ke.deadEnd) {
            if (be) continue;
            if (be = !0, Ke.restart(), ze && console.log(Je + this.stackID(Ke) + " (restarted)"), this.advanceFully(Ke, He)) continue
          }
          let oe = Ke.split(),
            Re = Je;
          for (let ee = 0; ee < 10 && oe.forceReduce(); ee++) {
            if (ze && console.log(Re + this.stackID(oe) + " (via force-reduce)"), this.advanceFully(oe, He)) break;
            ze && (Re = this.stackID(oe) + " -> ")
          }
          for (let ee of Ke.recoverByInsert(Ue)) ze && console.log(Je + this.stackID(ee) + " (via recover-insert)"), this.advanceFully(ee, He);
          this.stream.end > Ke.pos ? (Fe == Ke.pos && (Fe++, Ue = 0), Ke.recoverByDelete(Ue, Fe), ze && console.log(Je + this.stackID(Ke) + ` (via recover-delete ${this.parser.getName(Ue)})`), We(Ke, He)) : (!ye || ye.score < oe.score) && (ye = oe)
        }
        return ye
      }
      stackToTree(ee) {
        return ee.close(), ye.u.build({
          buffer: Ue.create(ee),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.zp[0].from,
          length: ee.pos - this.zp[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(ee) {
        let ie = (Be || (Be = new WeakMap)).get(ee);
        return ie || Be.set(ee, ie = String.fromCodePoint(this.nextStackID++)), ie + ee
      }
    }

    function We(ee, ie) {
      for (let He = 0; He < ie.length; He++) {
        let ye = ie[He];
        if (ye.pos == ee.pos && ye.sameState(ee)) return void(ie[He].score < ee.score && (ie[He] = ee))
      }
      ie.push(ee)
    }
    class te {
      constructor(ee, ie, He) {
        this.source = ee, this.flags = ie, this.disabled = He
      }
      allows(ee) {
        return !this.disabled || 0 == this.disabled[ee]
      }
    }
    const Ze = ee => ee;
    class we extends ye.r {
      constructor(ee) {
        if (super(), this.wrappers = [], 14 != ee.version) throw new RangeError(`Parser version (${ee.version}) doesn't match runtime version (14)`);
        let ie = ee.nodeNames.split(" ");
        this.minRepeatTerm = ie.length;
        for (let ye = 0; ye < ee.repeatNodeCount; ye++) ie.push("");
        let He = Object.keys(ee.topRules).map((ie => ee.topRules[ie][1])),
          be = [];
        for (let ye = 0; ye < ie.length; ye++) be.push([]);

        function Me(ee, ie, He) {
          be[ee].push([ie, ie.deserialize(String(He))])
        }
        if (ee.nodeProps)
          for (let Ue of ee.nodeProps) {
            let ee = Ue[0];
            "string" == typeof ee && (ee = ye.h[ee]);
            for (let ie = 1; ie < Ue.length;) {
              let He = Ue[ie++];
              if (He >= 0) Me(He, ee, Ue[ie++]);
              else {
                let ye = Ue[ie + -He];
                for (let be = -He; be > 0; be--) Me(Ue[ie++], ee, ye);
                ie++
              }
            }
          }
        this.nodeSet = new ye.j(ie.map(((ie, Me) => ye.l.define({
          name: Me >= this.minRepeatTerm ? void 0 : ie,
          id: Me,
          props: be[Me],
          top: He.indexOf(Me) > -1,
          error: 0 == Me,
          skipped: ee.skippedNodes && ee.skippedNodes.indexOf(Me) > -1
        })))), ee.propSources && (this.nodeSet = this.nodeSet.extend(...ee.propSources)), this.strict = !1, this.bufferLength = ye.c;
        let Ke = Fe(ee.tokenData);
        this.context = ee.context, this.specializerSpecs = ee.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let ye = 0; ye < this.specializerSpecs.length; ye++) this.specialized[ye] = this.specializerSpecs[ye].term;
        this.specializers = this.specializerSpecs.map(Pe), this.states = Fe(ee.states, Uint32Array), this.data = Fe(ee.stateData), this.goto = Fe(ee.goto), this.maxTerm = ee.maxTerm, this.tokenizers = ee.tokenizers.map((ee => "number" == typeof ee ? new ke(Ke, ee) : ee)), this.topRules = ee.topRules, this.dialects = ee.dialects || {}, this.dynamicPrecedences = ee.dynamicPrecedences || null, this.tokenPrecTable = ee.tokenPrec, this.termNames = ee.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(ee, ie, He) {
        let ye = new de(this, ee, ie, He);
        for (let be of this.wrappers) ye = be(ye, ee, ie, He);
        return ye
      }
      getGoto(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = this.goto;
        if (ie >= ye[0]) return -1;
        for (let be = ye[ie + 1];;) {
          let ie = ye[be++],
            Me = 1 & ie,
            Ke = ye[be++];
          if (Me && He) return Ke;
          for (let He = be + (ie >> 1); be < He; be++)
            if (ye[be] == ee) return Ke;
          if (Me) return -1
        }
      }
      hasAction(ee, ie) {
        let He = this.data;
        for (let ye = 0; ye < 2; ye++)
          for (let be, Me = this.stateSlot(ee, ye ? 2 : 1);; Me += 3) {
            if (65535 == (be = He[Me])) {
              if (1 != He[Me + 1]) {
                if (2 == He[Me + 1]) return De(He, Me + 2);
                break
              }
              be = He[Me = De(He, Me + 2)]
            }
            if (be == ie || 0 == be) return De(He, Me + 1)
          }
        return 0
      }
      stateSlot(ee, ie) {
        return this.states[6 * ee + ie]
      }
      stateFlag(ee, ie) {
        return (this.stateSlot(ee, 0) & ie) > 0
      }
      validAction(ee, ie) {
        return !!this.allActions(ee, (ee => ee == ie || null))
      }
      allActions(ee, ie) {
        let He = this.stateSlot(ee, 4),
          ye = He ? ie(He) : void 0;
        for (let be = this.stateSlot(ee, 1); null == ye; be += 3) {
          if (65535 == this.data[be]) {
            if (1 != this.data[be + 1]) break;
            be = De(this.data, be + 2)
          }
          ye = ie(De(this.data, be + 1))
        }
        return ye
      }
      nextStates(ee) {
        let ie = [];
        for (let He = this.stateSlot(ee, 1);; He += 3) {
          if (65535 == this.data[He]) {
            if (1 != this.data[He + 1]) break;
            He = De(this.data, He + 2)
          }
          if (0 == (1 & this.data[He + 2])) {
            let ee = this.data[He + 1];
            ie.some(((ie, He) => 1 & He && ie == ee)) || ie.push(this.data[He], ee)
          }
        }
        return ie
      }
      configure(ee) {
        let ie = Object.assign(Object.create(we.prototype), this);
        if (ee.props && (ie.nodeSet = this.nodeSet.extend(...ee.props)), ee.top) {
          let He = this.topRules[ee.top];
          if (!He) throw new RangeError(`Invalid top rule name ${ee.top}`);
          ie.top = He
        }
        return ee.tokenizers && (ie.tokenizers = this.tokenizers.map((ie => {
          let He = ee.tokenizers.find((ee => ee.from == ie));
          return He ? He.to : ie
        }))), ee.specializers && (ie.specializers = this.specializers.slice(), ie.specializerSpecs = this.specializerSpecs.map(((He, ye) => {
          let be = ee.specializers.find((ee => ee.from == He.external));
          if (!be) return He;
          let Me = Object.assign(Object.assign({}, He), {
            external: be.to
          });
          return ie.specializers[ye] = Pe(Me), Me
        }))), ee.contextTracker && (ie.context = ee.contextTracker), ee.dialect && (ie.dialect = this.parseDialect(ee.dialect)), null != ee.strict && (ie.strict = ee.strict), ee.wrap && (ie.wrappers = ie.wrappers.concat(ee.wrap)), null != ee.bufferLength && (ie.bufferLength = ee.bufferLength), ie
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(ee) {
        return this.termNames ? this.termNames[ee] : String(ee <= this.maxNode && this.nodeSet.types[ee].name || ee)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(ee) {
        let ie = this.dynamicPrecedences;
        return null == ie ? 0 : ie[ee] || 0
      }
      parseDialect(ee) {
        let ie = Object.keys(this.dialects),
          He = ie.map((() => !1));
        if (ee)
          for (let be of ee.split(" ")) {
            let ee = ie.indexOf(be);
            ee >= 0 && (He[ee] = !0)
          }
        let ye = null;
        for (let be = 0; be < ie.length; be++)
          if (!He[be])
            for (let ee, He = this.dialects[ie[be]]; 65535 != (ee = this.data[He++]);)(ye || (ye = new Uint8Array(this.maxTerm + 1)))[ee] = 1;
        return new te(ee, He, ye)
      }
      static deserialize(ee) {
        return new we(ee)
      }
    }

    function De(ee, ie) {
      return ee[ie] | ee[ie + 1] << 16
    }

    function Pe(ee) {
      if (ee.external) {
        let ie = ee.extend ? 1 : 0;
        return (He, ye) => ee.external(He, ye) << 1 | ie
      }
      return ee.get
    }
    var Ae = He(44543);
    const Ye = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      Ve = new class {
        constructor(ee) {
          this.start = ee.start, this.shift = ee.shift || Ze, this.reduce = ee.reduce || Ze, this.reuse = ee.reuse || Ze, this.hash = ee.hash || (() => 0), this.strict = !1 !== ee.strict
        }
      }({
        start: !1,
        shift: (ee, ie) => 5 == ie || 6 == ie || 320 == ie ? ee : 321 == ie,
        strict: !1
      }),
      ae = new fe(((ee, ie) => {
        let {
          next: He
        } = ee;
        (125 == He || -1 == He || ie.context) && ee.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      ce = new fe(((ee, ie) => {
        let He, {
          next: ye
        } = ee;
        Ye.indexOf(ye) > -1 || (47 != ye || 47 != (He = ee.peek(1)) && 42 != He) && (125 == ye || 59 == ye || -1 == ye || ie.context || ee.acceptToken(316))
      }), {
        contextual: !0
      }),
      xe = new fe(((ee, ie) => {
        91 != ee.next || ie.context || ee.acceptToken(317)
      }), {
        contextual: !0
      }),
      Le = new fe(((ee, ie) => {
        let {
          next: He
        } = ee;
        if (43 == He || 45 == He) {
          if (ee.advance(), He == ee.next) {
            ee.advance();
            let He = !ie.context && ie.canShift(1);
            ee.acceptToken(He ? 1 : 2)
          }
        } else 63 == He && 46 == ee.peek(1) && (ee.advance(), ee.advance(), (ee.next < 48 || ee.next > 57) && ee.acceptToken(3))
      }), {
        contextual: !0
      });

    function Ce(ee, ie) {
      return ee >= 65 && ee <= 90 || ee >= 97 && ee <= 122 || 95 == ee || ee >= 192 || !ie && ee >= 48 && ee <= 57
    }
    const ve = new fe(((ee, ie) => {
        if (60 != ee.next || !ie.dialectEnabled(0)) return;
        if (ee.advance(), 47 == ee.next) return;
        let He = 0;
        for (; Ye.indexOf(ee.next) > -1;) ee.advance(), He++;
        if (Ce(ee.next, !0)) {
          for (ee.advance(), He++; Ce(ee.next, !1);) ee.advance(), He++;
          for (; Ye.indexOf(ee.next) > -1;) ee.advance(), He++;
          if (44 == ee.next) return;
          for (let ie = 0;; ie++) {
            if (7 == ie) {
              if (!Ce(ee.next, !0)) return;
              break
            }
            if (ee.next != "extends".charCodeAt(ie)) break;
            ee.advance(), He++
          }
        }
        ee.acceptToken(4, -He)
      })),
      ue = (0, Ae.f)({
        "get set async static": Ae.n.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Ae.n.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Ae.n.operatorKeyword,
        "let var const using function class extends": Ae.n.definitionKeyword,
        "import export from": Ae.n.moduleKeyword,
        "with debugger new": Ae.n.keyword,
        TemplateString: Ae.n.special(Ae.n.string),
        super: Ae.n.atom,
        BooleanLiteral: Ae.n.bool,
        this: Ae.n.self,
        null: Ae.n.null,
        Star: Ae.n.modifier,
        VariableName: Ae.n.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Ae.n.function(Ae.n.variableName),
        VariableDefinition: Ae.n.definition(Ae.n.variableName),
        Label: Ae.n.labelName,
        PropertyName: Ae.n.propertyName,
        PrivatePropertyName: Ae.n.special(Ae.n.propertyName),
        "CallExpression/MemberExpression/PropertyName": Ae.n.function(Ae.n.propertyName),
        "FunctionDeclaration/VariableDefinition": Ae.n.function(Ae.n.definition(Ae.n.variableName)),
        "ClassDeclaration/VariableDefinition": Ae.n.definition(Ae.n.className),
        "NewExpression/VariableName": Ae.n.className,
        PropertyDefinition: Ae.n.definition(Ae.n.propertyName),
        PrivatePropertyDefinition: Ae.n.definition(Ae.n.special(Ae.n.propertyName)),
        UpdateOp: Ae.n.updateOperator,
        "LineComment Hashbang": Ae.n.lineComment,
        BlockComment: Ae.n.blockComment,
        Number: Ae.n.number,
        String: Ae.n.string,
        Escape: Ae.n.escape,
        ArithOp: Ae.n.arithmeticOperator,
        LogicOp: Ae.n.logicOperator,
        BitOp: Ae.n.bitwiseOperator,
        CompareOp: Ae.n.compareOperator,
        RegExp: Ae.n.regexp,
        Equals: Ae.n.definitionOperator,
        Arrow: Ae.n.function(Ae.n.punctuation),
        ": Spread": Ae.n.punctuation,
        "( )": Ae.n.paren,
        "[ ]": Ae.n.squareBracket,
        "{ }": Ae.n.brace,
        "InterpolationStart InterpolationEnd": Ae.n.special(Ae.n.brace),
        ".": Ae.n.derefOperator,
        ", ;": Ae.n.separator,
        "@": Ae.n.meta,
        TypeName: Ae.n.typeName,
        TypeDefinition: Ae.n.definition(Ae.n.typeName),
        "type enum interface implements namespace module declare": Ae.n.definitionKeyword,
        "abstract global Privacy readonly override": Ae.n.modifier,
        "is keyof unique infer asserts": Ae.n.operatorKeyword,
        JSXAttributeValue: Ae.n.attributeValue,
        JSXText: Ae.n.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Ae.n.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Ae.n.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Ae.n.attributeName,
        "JSXBuiltin/JSXIdentifier": Ae.n.standard(Ae.n.tagName)
      }),
      me = {
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
      le = {
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
      Se = {
        __proto__: null,
        "<": 193
      },
      ne = we.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: Ve,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [ue],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [ce, xe, Le, ve, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, ae, new qe("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new qe("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: ee => me[ee] || -1
        }, {
          term: 343,
          get: ee => le[ee] || -1
        }, {
          term: 95,
          get: ee => Se[ee] || -1
        }],
        tokenPrec: 15201
      });
    var je = He(44533),
      se = He(44509),
      Ie = He(44518),
      he = He(44501);
    const Ne = [(0, he.q)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, he.q)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, he.q)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, he.q)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, he.q)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, he.q)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, he.q)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, he.q)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, he.q)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, he.q)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, he.q)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      Ge = Ne.concat([(0, he.q)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, he.q)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, he.q)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      re = new ye.n,
      Qe = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function ei(ee) {
      return (ie, He) => {
        let ye = ie.node.getChild("VariableDefinition");
        return ye && He(ye, ee), !0
      }
    }
    const ii = ["FunctionDeclaration"],
      Hi = {
        FunctionDeclaration: ei("function"),
        ClassDeclaration: ei("class"),
        ClassExpression: () => !0,
        EnumDeclaration: ei("constant"),
        TypeAliasDeclaration: ei("type"),
        NamespaceDeclaration: ei("namespace"),
        VariableDefinition(ee, ie) {
          ee.matchContext(ii) || ie(ee, "variable")
        },
        TypeDefinition(ee, ie) {
          ie(ee, "type")
        },
        __proto__: null
      };

    function yi(ee, ie) {
      let He = re.get(ie);
      if (He) return He;
      let be = [],
        Me = !0;

      function Ke(ie, He) {
        let ye = ee.sliceString(ie.from, ie.to);
        be.push({
          label: ye,
          type: He
        })
      }
      return ie.cursor(ye.e.IncludeAnonymous).iterate((ie => {
        if (Me) Me = !1;
        else if (ie.name) {
          let ee = Hi[ie.name];
          if (ee && ee(ie, Ke) || Qe.has(ie.name)) return !1
        } else if (ie.to - ie.from > 8192) {
          for (let He of yi(ee, ie.node)) be.push(He);
          return !1
        }
      })), re.set(ie, be), be
    }
    const bi = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      Mi = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Ki(ee) {
      let ie = (0, je.tb)(ee.state).resolveInner(ee.pos, -1);
      if (Mi.indexOf(ie.name) > -1) return null;
      let He = "VariableName" == ie.name || ie.to - ie.from < 20 && bi.test(ee.state.sliceDoc(ie.from, ie.to));
      if (!He && !ee.explicit) return null;
      let ye = [];
      for (let be = ie; be; be = be.parent) Qe.has(be.name) && (ye = ye.concat(yi(ee.state.doc, be)));
      return {
        options: ye,
        from: He ? ie.from : ee.pos,
        validFor: bi
      }
    }
    const Ui = je.i.define({
        name: "javascript",
        parser: ne.configure({
          props: [je.U.add({
            IfStatement: (0, je.r)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, je.r)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: je.A,
            SwitchBody: ee => {
              let ie = ee.textAfter,
                He = /^\s*\}/.test(ie),
                ye = /^\s*(case|default)\b/.test(ie);
              return ee.baseIndent + (He ? 0 : ye ? 1 : 2) * ee.unit
            },
            Block: (0, je.x)({
              closing: "}"
            }),
            ArrowFunction: ee => ee.baseIndent + ee.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, je.r)({
              except: /^\s*{/
            }),
            JSXElement(ee) {
              let ie = /^\s*<\//.test(ee.textAfter);
              return ee.lineIndent(ee.node.from) + (ie ? 0 : ee.unit)
            },
            JSXEscape(ee) {
              let ie = /\s*\}/.test(ee.textAfter);
              return ee.lineIndent(ee.node.from) + (ie ? 0 : ee.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": ee => ee.column(ee.node.from) + ee.unit
          }), je.J.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": je.E,
            BlockComment: ee => ({
              from: ee.from + 2,
              to: ee.to - 2
            }),
            JSXElement(ee) {
              let ie = ee.firstChild;
              if (!ie || "JSXSelfClosingTag" == ie.name) return null;
              let He = ee.lastChild;
              return {
                from: ie.to,
                to: He.type.isError ? ee.to : He.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(ee) {
              var ie;
              let He = null === (ie = ee.firstChild) || void 0 === ie ? void 0 : ie.nextSibling,
                ye = ee.lastChild;
              return !He || He.type.isError ? null : {
                from: He.to,
                to: ye.type.isError ? ee.to : ye.from
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
      Fi = {
        test: ee => /^JSX/.test(ee.name),
        facet: (0, je.v)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Ji = Ui.configure({
        dialect: "ts"
      }, "typescript"),
      oi = Ui.configure({
        dialect: "jsx",
        props: [je.ib.add((ee => ee.isTop ? [Fi] : void 0))]
      }),
      Ri = Ui.configure({
        dialect: "jsx ts",
        props: [je.ib.add((ee => ee.isTop ? [Fi] : void 0))]
      }, "typescript");
    let ki = ee => ({
      label: ee,
      type: "keyword"
    });
    const qi = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(ki),
      fi = qi.concat(["declare", "implements", "private", "protected", "public"].map(ki));

    function Ti() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        ie = ee.jsx ? ee.typescript ? Ri : oi : ee.typescript ? Ji : Ui,
        He = ee.typescript ? Ge.concat(fi) : Ne.concat(qi);
      return new je.l(ie, [Ui.data.of({
        autocomplete: (0, he.p)(Mi, (0, he.l)(He))
      }), Ui.data.of({
        autocomplete: Ki
      }), ee.jsx ? Bi : []])
    }

    function Xi(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ee.length;
      for (let ye = null === ie || void 0 === ie ? void 0 : ie.firstChild; ye; ye = ye.nextSibling)
        if ("JSXIdentifier" == ye.name || "JSXBuiltin" == ye.name || "JSXNamespacedName" == ye.name || "JSXMemberExpression" == ye.name) return ee.sliceString(ye.from, Math.min(ye.to, He));
      return ""
    }
    const zi = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Bi = Ie.i.inputHandler.of(((ee, ie, He, ye, be) => {
        if ((zi ? ee.composing : ee.compositionStarted) || ee.state.readOnly || ie != He || ">" != ye && "/" != ye || !Ui.isActiveAt(ee.state, ie, -1)) return !1;
        let Me = be(),
          {
            state: Ke
          } = Me,
          Ue = Ke.changeByRange((ee => {
            var ie;
            let He, {
                head: be
              } = ee,
              Me = (0, je.tb)(Ke).resolveInner(be - 1, -1);
            if ("JSXStartTag" == Me.name && (Me = Me.parent), Ke.doc.sliceString(be - 1, be) != ye || "JSXAttributeValue" == Me.name && Me.to > be);
            else {
              if (">" == ye && "JSXFragmentTag" == Me.name) return {
                range: ee,
                changes: {
                  from: be,
                  insert: "</>"
                }
              };
              if ("/" == ye && "JSXStartCloseTag" == Me.name) {
                let ee = Me.parent,
                  ye = ee.parent;
                if (ye && ee.from == be - 2 && ((He = Xi(Ke.doc, ye.firstChild, be)) || "JSXFragmentTag" == (null === (ie = ye.firstChild) || void 0 === ie ? void 0 : ie.name))) {
                  let ee = `${He}>`;
                  return {
                    range: se.k.cursor(be + ee.length, -1),
                    changes: {
                      from: be,
                      insert: ee
                    }
                  }
                }
              } else if (">" == ye) {
                let ie = function(ee) {
                  for (;;) {
                    if ("JSXOpenTag" == ee.name || "JSXSelfClosingTag" == ee.name || "JSXFragmentTag" == ee.name) return ee;
                    if ("JSXEscape" == ee.name || !ee.parent) return null;
                    ee = ee.parent
                  }
                }(Me);
                if (ie && "JSXOpenTag" == ie.name && !/^\/?>|^<\//.test(Ke.doc.sliceString(be, be + 2)) && (He = Xi(Ke.doc, ie, be))) return {
                  range: ee,
                  changes: {
                    from: be,
                    insert: `</${He}>`
                  }
                }
              }
            }
            return {
              range: ee
            }
          }));
        return !Ue.changes.empty && (ee.dispatch([Me, Ke.update(Ue, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  44533: (ee, ie, He) => {
    He.d(ie, {
      $: () => Ye,
      A: () => Se,
      B: () => Bi,
      E: () => Ne,
      F: () => Ji,
      J: () => he,
      K: () => Xe,
      M: () => Ae,
      Q: () => Ve,
      U: () => ce,
      Y: () => se,
      d: () => gi,
      db: () => Pe,
      gb: () => Si,
      h: () => ae,
      i: () => fe,
      ib: () => Re,
      l: () => we,
      mb: () => ti,
      p: () => vi,
      qb: () => pe,
      r: () => ne,
      t: () => Di,
      tb: () => Te,
      v: () => oe,
      x: () => me
    });
    var ye, be = He(44538),
      Me = He(44509),
      Ke = He(44518),
      Ue = He(44543),
      Fe = He(44522);
    const Je = new be.h;

    function oe(ee) {
      return Me.q.define({
        combine: ee ? ie => ie.concat(ee) : void 0
      })
    }
    const Re = new be.h;
    class ke {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = ee, this.name = ye, Me.o.prototype.hasOwnProperty("tree") || Object.defineProperty(Me.o.prototype, "tree", {
          get() {
            return Te(this)
          }
        }), this.parser = ie, this.extension = [Ze.of(this), Me.o.languageData.of(((ee, ie, He) => {
          let ye = qe(ee, ie, He),
            be = ye.type.prop(Je);
          if (!be) return [];
          let Me = ee.facet(be),
            Ke = ye.type.prop(Re);
          if (Ke) {
            let be = ye.resolve(ie - ye.from, He);
            for (let ie of Ke)
              if (ie.test(be, ee)) {
                let He = ee.facet(ie.facet);
                return "replace" == ie.type ? He : He.concat(Me)
              }
          }
          return Me
        }))].concat(He)
      }
      isActiveAt(ee, ie) {
        return qe(ee, ie, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Je) == this.data
      }
      findRegions(ee) {
        let ie = ee.facet(Ze);
        if ((null === ie || void 0 === ie ? void 0 : ie.data) == this.data) return [{
          from: 0,
          to: ee.doc.length
        }];
        if (!ie || !ie.allowsNesting) return [];
        let He = [],
          ye = (ee, ie) => {
            if (ee.prop(Je) == this.data) return void He.push({
              from: ie,
              to: ie + ee.length
            });
            let Me = ee.prop(be.h.mounted);
            if (Me) {
              if (Me.tree.prop(Je) == this.data) {
                if (Me.overlay)
                  for (let ee of Me.overlay) He.push({
                    from: ee.from + ie,
                    to: ee.to + ie
                  });
                else He.push({
                  from: ie,
                  to: ie + ee.length
                });
                return
              }
              if (Me.overlay) {
                let ee = He.length;
                if (ye(Me.tree, Me.overlay[0].from + ie), He.length > ee) return
              }
            }
            for (let He = 0; He < ee.children.length; He++) {
              let Me = ee.children[He];
              Me instanceof be.u && ye(Me, ee.positions[He] + ie)
            }
          };
        return ye(Te(ee), 0), He
      }
      get allowsNesting() {
        return !0
      }
    }

    function qe(ee, ie, He) {
      let ye = ee.facet(Ze),
        Me = Te(ee).topNode;
      if (!ye || ye.allowsNesting)
        for (let Ke = Me; Ke; Ke = Ke.enter(ie, He, be.e.ExcludeBuffers | be.e.EnterBracketed)) Ke.type.isTop && (Me = Ke);
      return Me
    }
    ke.setState = Me.K.define();
    class fe extends ke {
      constructor(ee, ie, He) {
        super(ee, ie, [], He), this.parser = ie
      }
      static define(ee) {
        let ie = oe(ee.languageData);
        return new fe(ie, ee.parser.configure({
          props: [Je.add((ee => ee.isTop ? ie : void 0))]
        }), ee.name)
      }
      configure(ee, ie) {
        return new fe(this.data, this.parser.configure(ee), ie || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Te(ee) {
      let ie = ee.field(ke.state, !1);
      return ie ? ie.tree : be.u.empty
    }

    function pe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.doc.length;
      var He;
      return (null === (He = ee.field(ke.state, !1)) || void 0 === He ? void 0 : He.context.isDone(ie)) || !1
    }

    function Xe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.viewport.to,
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        ye = function(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var ye;
          let be = null === (ye = ee.field(ke.state, !1)) || void 0 === ye ? void 0 : ye.context;
          if (!be) return null;
          let Me = be.viewport;
          be.updateViewport({
            from: 0,
            to: ie
          });
          let Ke = be.isDone(ie) || be.work(He, ie) ? be.tree : null;
          return be.updateViewport(Me), Ke
        }(ee.state, ie, He);
      return ye != Te(ee.state) && ee.dispatch({}), !!ye
    }
    class ze {
      constructor(ee) {
        this.doc = ee, this.cursorPos = 0, this.string = "", this.cursor = ee.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(ee) {
        return this.string = this.cursor.next(ee - this.cursorPos).value, this.cursorPos = ee + this.string.length, this.cursorPos - this.string.length
      }
      chunk(ee) {
        return this.syncTo(ee), this.string
      }
      get lineChunks() {
        return !0
      }
      read(ee, ie) {
        let He = this.cursorPos - this.string.length;
        return ee < He || ie >= this.cursorPos ? this.doc.sliceString(ee, ie) : this.string.slice(ee - He, ie - He)
      }
    }
    let Be = null;
    class Ee {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          ye = arguments.length > 3 ? arguments[3] : void 0,
          be = arguments.length > 4 ? arguments[4] : void 0,
          Me = arguments.length > 5 ? arguments[5] : void 0,
          Ke = arguments.length > 6 ? arguments[6] : void 0,
          Ue = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = ee, this.state = ie, this.fragments = He, this.tree = ye, this.treeLen = be, this.viewport = Me, this.skipped = Ke, this.scheduleOn = Ue, this.parse = null, this.tempSkipped = []
      }
      static create(ee, ie, He) {
        return new Ee(ee, ie, [], be.u.empty, 0, He, [], null)
      }
      startParse() {
        return this.parser.startParse(new ze(this.state.doc), this.fragments)
      }
      work(ee, ie) {
        return null != ie && ie >= this.state.doc.length && (ie = void 0), this.tree != be.u.empty && this.isDone(null !== ie && void 0 !== ie ? ie : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var He;
          if ("number" == typeof ee) {
            let ie = Date.now() + ee;
            ee = () => Date.now() > ie
          }
          for (this.parse || (this.parse = this.startParse()), null != ie && (null == this.parse.stoppedAt || this.parse.stoppedAt > ie) && ie < this.state.doc.length && this.parse.stopAt(ie);;) {
            let ye = this.parse.advance();
            if (ye) {
              if (this.fragments = this.withoutTempSkipped(be.s.addTree(ye, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (He = this.parse.stoppedAt) && void 0 !== He ? He : this.state.doc.length, this.tree = ye, this.parse = null, !(this.treeLen < (null !== ie && void 0 !== ie ? ie : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (ee()) return !1
          }
        }))
      }
      takeTree() {
        let ee, ie;
        this.parse && (ee = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > ee) && this.parse.stopAt(ee), this.withContext((() => {
          for (; !(ie = this.parse.advance()););
        })), this.treeLen = ee, this.tree = ie, this.fragments = this.withoutTempSkipped(be.s.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(ee) {
        let ie = Be;
        Be = this;
        try {
          return ee()
        } finally {
          Be = ie
        }
      }
      withoutTempSkipped(ee) {
        for (let ie; ie = this.tempSkipped.pop();) ee = ge(ee, ie.from, ie.to);
        return ee
      }
      changes(ee, ie) {
        let {
          fragments: He,
          tree: ye,
          treeLen: Me,
          viewport: Ke,
          skipped: Ue
        } = this;
        if (this.takeTree(), !ee.empty) {
          let ie = [];
          if (ee.iterChangedRanges(((ee, He, ye, be) => ie.push({
              fromA: ee,
              toA: He,
              fromB: ye,
              toB: be
            }))), He = be.s.applyChanges(He, ie), ye = be.u.empty, Me = 0, Ke = {
              from: ee.mapPos(Ke.from, -1),
              to: ee.mapPos(Ke.to, 1)
            }, this.skipped.length) {
            Ue = [];
            for (let ie of this.skipped) {
              let He = ee.mapPos(ie.from, 1),
                ye = ee.mapPos(ie.to, -1);
              He < ye && Ue.push({
                from: He,
                to: ye
              })
            }
          }
        }
        return new Ee(this.parser, ie, He, ye, Me, Ke, Ue, this.scheduleOn)
      }
      updateViewport(ee) {
        if (this.viewport.from == ee.from && this.viewport.to == ee.to) return !1;
        this.viewport = ee;
        let ie = this.skipped.length;
        for (let He = 0; He < this.skipped.length; He++) {
          let {
            from: ie,
            to: ye
          } = this.skipped[He];
          ie < ee.to && ye > ee.from && (this.fragments = ge(this.fragments, ie, ye), this.skipped.splice(He--, 1))
        }
        return !(this.skipped.length >= ie) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(ee, ie) {
        this.skipped.push({
          from: ee,
          to: ie
        })
      }
      static getSkippingParser(ee) {
        return new class extends be.r {
          createParse(ie, He, ye) {
            let Me = ye[0].from,
              Ke = ye[ye.length - 1].to;
            return {
              parsedPos: Me,
              advance() {
                let ie = Be;
                if (ie) {
                  for (let ee of ye) ie.tempSkipped.push(ee);
                  ee && (ie.scheduleOn = ie.scheduleOn ? Promise.all([ie.scheduleOn, ee]) : ee)
                }
                return this.parsedPos = Ke, new be.u(be.l.none, [], [], Ke - Me)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(ee) {
        ee = Math.min(ee, this.state.doc.length);
        let ie = this.fragments;
        return this.treeLen >= ee && ie.length && 0 == ie[0].from && ie[0].to >= ee
      }
      static get() {
        return Be
      }
    }

    function ge(ee, ie, He) {
      return be.s.applyChanges(ee, [{
        fromA: ie,
        toA: He,
        fromB: ie,
        toB: He
      }])
    }
    class Oe {
      constructor(ee) {
        this.context = ee, this.tree = ee.tree
      }
      apply(ee) {
        if (!ee.docChanged && this.tree == this.context.tree) return this;
        let ie = this.context.changes(ee.changes, ee.state),
          He = this.context.treeLen == ee.startState.doc.length ? void 0 : Math.max(ee.changes.mapPos(this.context.treeLen), ie.viewport.to);
        return ie.work(20, He) || ie.takeTree(), new Oe(ie)
      }
      static init(ee) {
        let ie = Math.min(3e3, ee.doc.length),
          He = Ee.create(ee.facet(Ze).parser, ee, {
            from: 0,
            to: ie
          });
        return He.work(20, ie) || He.takeTree(), new Oe(He)
      }
    }
    ke.state = Me.N.define({
      create: Oe.init,
      update(ee, ie) {
        for (let He of ie.effects)
          if (He.is(ke.setState)) return He.value;
        return ie.startState.facet(Ze) != ie.state.facet(Ze) ? Oe.init(ie.state) : ee.apply(ie)
      }
    });
    let de = ee => {
      let ie = setTimeout((() => ee()), 500);
      return () => clearTimeout(ie)
    };
    "undefined" != typeof requestIdleCallback && (de = ee => {
      let ie = -1,
        He = setTimeout((() => {
          ie = requestIdleCallback(ee, {
            timeout: 400
          })
        }), 100);
      return () => ie < 0 ? clearTimeout(He) : cancelIdleCallback(ie)
    });
    const We = "undefined" != typeof navigator && (null === (ye = navigator.scheduling) || void 0 === ye ? void 0 : ye.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      te = Ke.o.fromClass(class {
        constructor(ee) {
          this.view = ee, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(ee) {
          let ie = this.view.state.field(ke.state).context;
          (ie.updateViewport(ee.view.viewport) || this.view.viewport.to > ie.treeLen) && this.scheduleWork(), (ee.docChanged || ee.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(ie)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: ee
          } = this.view, ie = ee.field(ke.state);
          ie.tree == ie.context.tree && ie.context.isDone(ee.doc.length) || (this.working = de(this.work))
        }
        work(ee) {
          this.working = null;
          let ie = Date.now();
          if (this.chunkEnd < ie && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = ie + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: He,
            viewport: {
              to: ye
            }
          } = this.view, be = He.field(ke.state);
          if (be.tree == be.context.tree && be.context.isDone(ye + 1e5)) return;
          let Me = Date.now() + Math.min(this.chunkBudget, 100, ee && !We ? Math.max(25, ee.timeRemaining() - 5) : 1e9),
            Ke = be.context.treeLen < ye && He.doc.length > ye + 1e3,
            Ue = be.context.work((() => We && We() || Date.now() > Me), ye + (Ke ? 0 : 1e5));
          this.chunkBudget -= Date.now() - ie, (Ue || this.chunkBudget <= 0) && (be.context.takeTree(), this.view.dispatch({
            effects: ke.setState.of(new Oe(be.context))
          })), this.chunkBudget > 0 && (!Ue || Ke) && this.scheduleWork(), this.checkAsyncSchedule(be.context)
        }
        checkAsyncSchedule(ee) {
          ee.scheduleOn && (this.workScheduled++, ee.scheduleOn.then((() => this.scheduleWork())).catch((ee => (0, Ke.U)(this.view.state, ee))).then((() => this.workScheduled--)), ee.scheduleOn = null)
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
      Ze = Me.q.define({
        combine: ee => ee.length ? ee[0] : null,
        enables: ee => [ke.state, te, Ke.i.contentAttributes.compute([ee], (ie => {
          let He = ie.facet(ee);
          return He && He.name ? {
            "data-language": He.name
          } : {}
        }))]
      });
    class we {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = ee, this.support = ie, this.extension = [ee, ie]
      }
    }
    const De = Me.q.define(),
      Pe = Me.q.define({
        combine: ee => {
          if (!ee.length) return "  ";
          let ie = ee[0];
          if (!ie || /\S/.test(ie) || Array.from(ie).some((ee => ee != ie[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(ee[0]));
          return ie
        }
      });

    function Ae(ee) {
      let ie = ee.facet(Pe);
      return 9 == ie.charCodeAt(0) ? ee.tabSize * ie.length : ie.length
    }

    function Ye(ee, ie) {
      let He = "",
        ye = ee.tabSize,
        be = ee.facet(Pe)[0];
      if ("\t" == be) {
        for (; ie >= ye;) He += "\t", ie -= ye;
        be = " "
      }
      for (let Me = 0; Me < ie; Me++) He += be;
      return He
    }

    function Ve(ee, ie) {
      ee instanceof Me.o && (ee = new ae(ee));
      for (let ye of ee.state.facet(De)) {
        let He = ye(ee, ie);
        if (void 0 !== He) return He
      }
      let He = Te(ee.state);
      return He.length >= ie ? function(ee, ie, He) {
        let ye = ie.resolveStack(He),
          be = ie.resolveInner(He, -1).resolve(He, 0).enterUnfinishedNodesBefore(He);
        if (be != ye.node) {
          let ee = [];
          for (let ie = be; ie && !(ie.from < ye.node.from || ie.to > ye.node.to || ie.from == ye.node.from && ie.type == ye.node.type); ie = ie.parent) ee.push(ie);
          for (let ie = ee.length - 1; ie >= 0; ie--) ye = {
            node: ee[ie],
            next: ye
          }
        }
        return xe(ye, ee, He)
      }(ee, He, ie) : null
    }
    class ae {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = ee, this.options = ie, this.unit = Ae(ee)
      }
      lineAt(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = this.state.doc.lineAt(ee),
          {
            simulateBreak: ye,
            simulateDoubleBreak: be
          } = this.options;
        return null != ye && ye >= He.from && ye <= He.to ? be && ye == ee ? {
          text: "",
          from: ee
        } : (ie < 0 ? ye < ee : ye <= ee) ? {
          text: He.text.slice(ye - He.from),
          from: ye
        } : {
          text: He.text.slice(0, ye - He.from),
          from: He.from
        } : He
      }
      textAfterPos(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && ee == this.options.simulateBreak) return "";
        let {
          text: He,
          from: ye
        } = this.lineAt(ee, ie);
        return He.slice(ee - ye, Math.min(He.length, ee + 100 - ye))
      }
      column(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: He,
            from: ye
          } = this.lineAt(ee, ie),
          be = this.countColumn(He, ee - ye),
          Me = this.options.overrideIndentation ? this.options.overrideIndentation(ye) : -1;
        return Me > -1 && (be += Me - this.countColumn(He, He.search(/\S|$/))), be
      }
      countColumn(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.length;
        return (0, Me.gb)(ee, this.state.tabSize, ie)
      }
      lineIndent(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: He,
            from: ye
          } = this.lineAt(ee, ie),
          be = this.options.overrideIndentation;
        if (be) {
          let ee = be(ye);
          if (ee > -1) return ee
        }
        return this.countColumn(He, He.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const ce = new be.h;

    function xe(ee, ie, He) {
      for (let ye = ee; ye; ye = ye.next) {
        let ee = Le(ye.node);
        if (ee) return ee(ve.create(ie, He, ye))
      }
      return 0
    }

    function Le(ee) {
      let ie = ee.type.prop(ce);
      if (ie) return ie;
      let He, ye = ee.firstChild;
      if (ye && (He = ye.type.prop(be.h.closedBy))) {
        let ie = ee.lastChild,
          ye = ie && He.indexOf(ie.name) > -1;
        return ee => le(ee, !0, 1, void 0, ye && ! function(ee) {
          return ee.pos == ee.options.simulateBreak && ee.options.simulateDoubleBreak
        }(ee) ? ie.from : void 0)
      }
      return null == ee.parent ? Ce : null
    }

    function Ce() {
      return 0
    }
    class ve extends ae {
      constructor(ee, ie, He) {
        super(ee.state, ee.options), this.base = ee, this.pos = ie, this.context = He
      }
      get node() {
        return this.context.node
      }
      static create(ee, ie, He) {
        return new ve(ee, ie, He)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(ee) {
        let ie = this.state.doc.lineAt(ee.from);
        for (;;) {
          let He = ee.resolve(ie.from);
          for (; He.parent && He.parent.from == He.from;) He = He.parent;
          if (ue(He, ee)) break;
          ie = this.state.doc.lineAt(He.from)
        }
        return this.lineIndent(ie.from)
      }
      continue () {
        return xe(this.context.next, this.base, this.pos)
      }
    }

    function ue(ee, ie) {
      for (let He = ie; He; He = He.parent)
        if (ee == He) return !0;
      return !1
    }

    function me(ee) {
      let {
        closing: ie,
        align: He = !0,
        units: ye = 1
      } = ee;
      return ee => le(ee, He, ye, ie)
    }

    function le(ee, ie, He, ye, be) {
      let Me = ee.textAfter,
        Ke = Me.match(/^\s*/)[0].length,
        Ue = ye && Me.slice(Ke, Ke + ye.length) == ye || be == ee.pos + Ke,
        Fe = ie ? function(ee) {
          let ie = ee.node,
            He = ie.childAfter(ie.from),
            ye = ie.lastChild;
          if (!He) return null;
          let be = ee.options.simulateBreak,
            Me = ee.state.doc.lineAt(He.from),
            Ke = null == be || be <= Me.from ? Me.to : Math.min(Me.to, be);
          for (let Ue = He.to;;) {
            let ee = ie.childAfter(Ue);
            if (!ee || ee == ye) return null;
            if (!ee.type.isSkipped) {
              if (ee.from >= Ke) return null;
              let ie = /^ */.exec(Me.text.slice(He.to - Me.from))[0].length;
              return {
                from: He.from,
                to: He.to + ie
              }
            }
            Ue = ee.to
          }
        }(ee) : null;
      return Fe ? Ue ? ee.column(Fe.from) : ee.column(Fe.to) : ee.baseIndent + (Ue ? 0 : ee.unit * He)
    }
    const Se = ee => ee.baseIndent;

    function ne() {
      let {
        except: ee,
        units: ie = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return He => {
        let ye = ee && ee.test(He.textAfter);
        return He.baseIndent + (ye ? 0 : ie * He.unit)
      }
    }
    const je = 200;

    function se() {
      return Me.o.transactionFilter.of((ee => {
        if (!ee.docChanged || !ee.isUserEvent("input.type") && !ee.isUserEvent("input.complete")) return ee;
        let ie = ee.startState.languageDataAt("indentOnInput", ee.startState.selection.main.head);
        if (!ie.length) return ee;
        let He = ee.newDoc,
          {
            head: ye
          } = ee.newSelection.main,
          be = He.lineAt(ye);
        if (ye > be.from + je) return ee;
        let Me = He.sliceString(be.from, ye);
        if (!ie.some((ee => ee.test(Me)))) return ee;
        let {
          state: Ke
        } = ee, Ue = -1, Fe = [];
        for (let {
            head: Je
          }
          of Ke.selection.zp) {
          let ee = Ke.doc.lineAt(Je);
          if (ee.from == Ue) continue;
          Ue = ee.from;
          let ie = Ve(Ke, ee.from);
          if (null == ie) continue;
          let He = /^\s*/.exec(ee.text)[0],
            ye = Ye(Ke, ie);
          He != ye && Fe.push({
            from: ee.from,
            to: ee.from + He.length,
            insert: ye
          })
        }
        return Fe.length ? [ee, {
          changes: Fe,
          sequential: !0
        }] : ee
      }))
    }
    const Ie = Me.q.define(),
      he = new be.h;

    function Ne(ee) {
      let ie = ee.firstChild,
        He = ee.lastChild;
      return ie && ie.to < He.from ? {
        from: ie.to,
        to: He.type.isError ? ee.to : He.from
      } : null
    }

    function Ge(ee) {
      let ie = ee.lastChild;
      return ie && ie.to == ee.to && ie.type.isError
    }

    function re(ee, ie, He) {
      for (let ye of ee.facet(Ie)) {
        let be = ye(ee, ie, He);
        if (be) return be
      }
      return function(ee, ie, He) {
        let ye = Te(ee);
        if (ye.length < He) return null;
        let be = null;
        for (let Me = ye.resolveStack(He, 1); Me; Me = Me.next) {
          let Ke = Me.node;
          if (Ke.to <= He || Ke.from > He) continue;
          if (be && Ke.from < ie) break;
          let Ue = Ke.type.prop(he);
          if (Ue && (Ke.to < ye.length - 50 || ye.length == ee.doc.length || !Ge(Ke))) {
            let ye = Ue(Ke, ee);
            ye && ye.from <= He && ye.from >= ie && ye.to > He && (be = ye)
          }
        }
        return be
      }(ee, ie, He)
    }

    function Qe(ee, ie) {
      let He = ie.mapPos(ee.from, 1),
        ye = ie.mapPos(ee.to, -1);
      return He >= ye ? void 0 : {
        from: He,
        to: ye
      }
    }
    const ei = Me.K.define({
        map: Qe
      }),
      ii = Me.K.define({
        map: Qe
      });

    function Hi(ee) {
      let ie = [];
      for (let {
          head: He
        }
        of ee.state.selection.zp) ie.some((ee => ee.from <= He && ee.to >= He)) || ie.push(ee.lineBlockAt(He));
      return ie
    }
    const yi = Me.N.define({
      create: () => Ke.e.none,
      update(ee, ie) {
        ie.isUserEvent("delete") && ie.changes.iterChangedRanges(((ie, He) => ee = bi(ee, ie, He))), ee = ee.map(ie.changes);
        for (let He of ie.effects)
          if (He.is(ei) && !Ki(ee, He.value.from, He.value.to)) {
            let {
              preparePlaceholder: ye
            } = ie.state.facet(Ri), be = ye ? Ke.e.replace({
              widget: new Ti(ye(ie.state, He.value))
            }) : fi;
            ee = ee.update({
              add: [be.range(He.value.from, He.value.to)]
            })
          } else He.is(ii) && (ee = ee.update({
            filter: (ee, ie) => He.value.from != ee || He.value.to != ie,
            filterFrom: He.value.from,
            filterTo: He.value.to
          }));
        return ie.selection && (ee = bi(ee, ie.selection.main.head)), ee
      },
      provide: ee => Ke.i.MM.from(ee),
      toJSON(ee, ie) {
        let He = [];
        return ee.between(0, ie.doc.length, ((ee, ie) => {
          He.push(ee, ie)
        })), He
      },
      fromJSON(ee) {
        if (!Array.isArray(ee) || ee.length % 2) throw new RangeError("Invalid JSON for fold state");
        let ie = [];
        for (let He = 0; He < ee.length;) {
          let ye = ee[He++],
            be = ee[He++];
          if ("number" != typeof ye || "number" != typeof be) throw new RangeError("Invalid JSON for fold state");
          ie.push(fi.range(ye, be))
        }
        return Ke.e.set(ie, !0)
      }
    });

    function bi(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ie,
        ye = !1;
      return ee.between(ie, He, ((ee, be) => {
        ee < He && be > ie && (ye = !0)
      })), ye ? ee.update({
        filterFrom: ie,
        filterTo: He,
        filter: (ee, ye) => ee >= He || ye <= ie
      }) : ee
    }

    function Mi(ee, ie, He) {
      var ye;
      let be = null;
      return null === (ye = ee.field(yi, !1)) || void 0 === ye || ye.between(ie, He, ((ee, ie) => {
        (!be || be.from > ee) && (be = {
          from: ee,
          to: ie
        })
      })), be
    }

    function Ki(ee, ie, He) {
      let ye = !1;
      return ee.between(ie, ie, ((ee, be) => {
        ee == ie && be == He && (ye = !0)
      })), ye
    }

    function Ui(ee, ie) {
      return ee.field(yi, !1) ? ie : ie.concat(Me.K.appendConfig.of(ki()))
    }

    function Fi(ee, ie) {
      let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        ye = ee.state.doc.lineAt(ie.from).number,
        be = ee.state.doc.lineAt(ie.to).number;
      return Ke.i.announce.of(`${ee.state.phrase(He?"Folded lines":"Unfolded lines")} ${ye} ${ee.state.phrase("to")} ${be}.`)
    }
    const Ji = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: ee => {
          for (let ie of Hi(ee)) {
            let He = re(ee.state, ie.from, ie.to);
            if (He) return ee.dispatch({
              effects: Ui(ee.state, [ei.of(He), Fi(ee, He)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: ee => {
          if (!ee.state.field(yi, !1)) return !1;
          let ie = [];
          for (let He of Hi(ee)) {
            let ye = Mi(ee.state, He.from, He.to);
            ye && ie.push(ii.of(ye), Fi(ee, ye, !1))
          }
          return ie.length && ee.dispatch({
            effects: ie
          }), ie.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: ee => {
          let {
            state: ie
          } = ee, He = [];
          for (let ye = 0; ye < ie.doc.length;) {
            let be = ee.lineBlockAt(ye),
              Me = re(ie, be.from, be.to);
            Me && He.push(ei.of(Me)), ye = (Me ? ee.lineBlockAt(Me.to) : be).to + 1
          }
          return He.length && ee.dispatch({
            effects: Ui(ee.state, He)
          }), !!He.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: ee => {
          let ie = ee.state.field(yi, !1);
          if (!ie || !ie.size) return !1;
          let He = [];
          return ie.between(0, ee.state.doc.length, ((ee, ie) => {
            He.push(ii.of({
              from: ee,
              to: ie
            }))
          })), ee.dispatch({
            effects: He
          }), !0
        }
      }],
      oi = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Ri = Me.q.define({
        combine: ee => (0, Me.cb)(ee, oi)
      });

    function ki(ee) {
      let ie = [yi, Ei];
      return ee && ie.push(Ri.of(ee)), ie
    }

    function qi(ee, ie) {
      let {
        state: He
      } = ee, ye = He.facet(Ri), be = ie => {
        let He = ee.lineBlockAt(ee.posAtDOM(ie.target)),
          ye = Mi(ee.state, He.from, He.to);
        ye && ee.dispatch({
          effects: ii.of(ye)
        }), ie.preventDefault()
      };
      if (ye.placeholderDOM) return ye.placeholderDOM(ee, be, ie);
      let Me = document.createElement("span");
      return Me.textContent = ye.placeholderText, Me.setAttribute("aria-label", He.phrase("folded code")), Me.title = He.phrase("unfold"), Me.className = "cm-foldPlaceholder", Me.onclick = be, Me
    }
    const fi = Ke.e.replace({
      widget: new class extends Ke.p {
        toDOM(ee) {
          return qi(ee, null)
        }
      }
    });
    class Ti extends Ke.p {
      constructor(ee) {
        super(), this.value = ee
      }
      eq(ee) {
        return this.value == ee.value
      }
      toDOM(ee) {
        return qi(ee, this.value)
      }
    }
    const Xi = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class zi extends Ke.k {
      constructor(ee, ie) {
        super(), this.config = ee, this.open = ie
      }
      eq(ee) {
        return this.config == ee.config && this.open == ee.open
      }
      toDOM(ee) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let ie = document.createElement("span");
        return ie.textContent = this.open ? this.config.openText : this.config.closedText, ie.title = ee.state.phrase(this.open ? "Fold line" : "Unfold line"), ie
      }
    }

    function Bi() {
      let ee = {
          ...Xi,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        ie = new zi(ee, !0),
        He = new zi(ee, !1),
        ye = Ke.o.fromClass(class {
          constructor(ee) {
            this.from = ee.viewport.from, this.markers = this.buildMarkers(ee)
          }
          update(ie) {
            (ie.docChanged || ie.viewportChanged || ie.startState.facet(Ze) != ie.state.facet(Ze) || ie.startState.field(yi, !1) != ie.state.field(yi, !1) || Te(ie.startState) != Te(ie.state) || ee.foldingChanged(ie)) && (this.markers = this.buildMarkers(ie.view))
          }
          buildMarkers(ee) {
            let ye = new Me.z;
            for (let be of ee.viewportLineBlocks) {
              let Me = Mi(ee.state, be.from, be.to) ? He : re(ee.state, be.from, be.to) ? ie : null;
              Me && ye.add(be.from, be.from, Me)
            }
            return ye.finish()
          }
        }),
        {
          domEventHandlers: be
        } = ee;
      return [ye, (0, Ke.B)({
        class: "cm-foldGutter",
        markers(ee) {
          var ie;
          return (null === (ie = ee.plugin(ye)) || void 0 === ie ? void 0 : ie.markers) || Me.D.empty
        },
        initialSpacer: () => new zi(ee, !1),
        domEventHandlers: {
          ...be,
          click: (ee, ie, He) => {
            if (be.click && be.click(ee, ie, He)) return !0;
            let ye = Mi(ee.state, ie.from, ie.to);
            if (ye) return ee.dispatch({
              effects: ii.of(ye)
            }), !0;
            let Me = re(ee.state, ie.from, ie.to);
            return !!Me && (ee.dispatch({
              effects: ei.of(Me)
            }), !0)
          }
        }
      }), ki()]
    }
    const Ei = Ke.i.baseTheme({
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
    class gi {
      constructor(ee, ie) {
        let He;

        function ye(ee) {
          let ie = Fe.d.newName();
          return (He || (He = Object.create(null)))["." + ie] = ee, ie
        }
        this.specs = ee;
        const be = "string" == typeof ie.all ? ie.all : ie.all ? ye(ie.all) : void 0,
          Me = ie.scope;
        this.scope = Me instanceof ke ? ee => ee.prop(Je) == Me.data : Me ? ee => ee == Me : void 0, this.style = (0, Ue.j)(ee.map((ee => ({
          tag: ee.tag,
          class: ee.class || ye(Object.assign({}, ee, {
            tag: null
          }))
        }))), {
          all: be
        }).style, this.module = He ? new Fe.d(He) : null, this.themeType = ie.themeType
      }
      static define(ee, ie) {
        return new gi(ee, ie || {})
      }
    }
    const Oi = Me.q.define(),
      di = Me.q.define({
        combine: ee => ee.length ? [ee[0]] : null
      });

    function Wi(ee) {
      let ie = ee.facet(Oi);
      return ie.length ? ie : ee.facet(di)
    }

    function ti(ee, ie) {
      let He, ye = [wi];
      return ee instanceof gi && (ee.module && ye.push(Ke.i.styleModule.of(ee.module)), He = ee.themeType), (null === ie || void 0 === ie ? void 0 : ie.fallback) ? ye.push(di.of(ee)) : He ? ye.push(Oi.computeN([Ke.i.darkTheme], (ie => ie.facet(Ke.i.darkTheme) == ("dark" == He) ? [ee] : []))) : ye.push(Oi.of(ee)), ye
    }
    class Zi {
      constructor(ee) {
        this.markCache = Object.create(null), this.tree = Te(ee.state), this.MM = this.buildDeco(ee, Wi(ee.state)), this.decoratedTo = ee.viewport.to
      }
      update(ee) {
        let ie = Te(ee.state),
          He = Wi(ee.state),
          ye = He != Wi(ee.startState),
          {
            viewport: be
          } = ee.view,
          Me = ee.changes.mapPos(this.decoratedTo, 1);
        ie.length < be.to && !ye && ie.type == this.tree.type && Me >= be.to ? (this.MM = this.MM.map(ee.changes), this.decoratedTo = Me) : (ie != this.tree || ee.viewportChanged || ye) && (this.tree = ie, this.MM = this.buildDeco(ee.view, He), this.decoratedTo = be.to)
      }
      buildDeco(ee, ie) {
        if (!ie || !this.tree.length) return Ke.e.none;
        let He = new Me.z;
        for (let {
            from: ye,
            to: be
          }
          of ee.Xie)(0, Ue.d)(this.tree, ie, ((ee, ie, ye) => {
          He.add(ee, ie, this.markCache[ye] || (this.markCache[ye] = Ke.e.mark({
            class: ye
          })))
        }), ye, be);
        return He.finish()
      }
    }
    const wi = Me.x.high(Ke.o.fromClass(Zi, {
        MM: ee => ee.MM
      })),
      Di = gi.define([{
        tag: Ue.n.meta,
        color: "#404740"
      }, {
        tag: Ue.n.link,
        textDecoration: "underline"
      }, {
        tag: Ue.n.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: Ue.n.emphasis,
        fontStyle: "italic"
      }, {
        tag: Ue.n.strong,
        fontWeight: "bold"
      }, {
        tag: Ue.n.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Ue.n.keyword,
        color: "#708"
      }, {
        tag: [Ue.n.atom, Ue.n.bool, Ue.n.url, Ue.n.contentSeparator, Ue.n.labelName],
        color: "#219"
      }, {
        tag: [Ue.n.literal, Ue.n.inserted],
        color: "#164"
      }, {
        tag: [Ue.n.string, Ue.n.deleted],
        color: "#a11"
      }, {
        tag: [Ue.n.regexp, Ue.n.escape, Ue.n.special(Ue.n.string)],
        color: "#e40"
      }, {
        tag: Ue.n.definition(Ue.n.variableName),
        color: "#00f"
      }, {
        tag: Ue.n.local(Ue.n.variableName),
        color: "#30a"
      }, {
        tag: [Ue.n.typeName, Ue.n.namespace],
        color: "#085"
      }, {
        tag: Ue.n.className,
        color: "#167"
      }, {
        tag: [Ue.n.special(Ue.n.variableName), Ue.n.macroName],
        color: "#256"
      }, {
        tag: Ue.n.definition(Ue.n.propertyName),
        color: "#00c"
      }, {
        tag: Ue.n.comment,
        color: "#940"
      }, {
        tag: Ue.n.invalid,
        color: "#f00"
      }]),
      Pi = Ke.i.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Ai = 1e4,
      Yi = "()[]{}",
      Vi = Me.q.define({
        combine: ee => (0, Me.cb)(ee, {
          afterCursor: !0,
          brackets: Yi,
          maxScanDistance: Ai,
          renderMatch: xi
        })
      }),
      ai = Ke.e.mark({
        class: "cm-matchingBracket"
      }),
      ci = Ke.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function xi(ee) {
      let ie = [],
        He = ee.matched ? ai : ci;
      return ie.push(He.range(ee.start.from, ee.start.to)), ee.end && ie.push(He.range(ee.end.from, ee.end.to)), ie
    }

    function Li(ee) {
      let ie = [],
        He = ee.facet(Vi);
      for (let ye of ee.selection.zp) {
        if (!ye.empty) continue;
        let be = Si(ee, ye.head, -1, He) || ye.head > 0 && Si(ee, ye.head - 1, 1, He) || He.afterCursor && (Si(ee, ye.head, 1, He) || ye.head < ee.doc.length && Si(ee, ye.head + 1, -1, He));
        be && (ie = ie.concat(He.renderMatch(be, ee)))
      }
      return Ke.e.set(ie, !0)
    }
    const Ci = [Ke.o.fromClass(class {
      constructor(ee) {
        this.paused = !1, this.MM = Li(ee.state)
      }
      update(ee) {
        (ee.docChanged || ee.selectionSet || this.paused) && (ee.view.composing ? (this.MM = this.MM.map(ee.changes), this.paused = !0) : (this.MM = Li(ee.state), this.paused = !1))
      }
    }, {
      MM: ee => ee.MM
    }), Pi];

    function vi() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Vi.of(ee), Ci]
    }
    const ui = new be.h;

    function mi(ee, ie, He) {
      let ye = ee.prop(ie < 0 ? be.h.openedBy : be.h.closedBy);
      if (ye) return ye;
      if (1 == ee.name.length) {
        let ye = He.indexOf(ee.name);
        if (ye > -1 && ye % 2 == (ie < 0 ? 1 : 0)) return [He[ye + ie]]
      }
      return null
    }

    function li(ee) {
      let ie = ee.type.prop(ui);
      return ie ? ie(ee.node) : ee
    }

    function Si(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        be = ye.maxScanDistance || Ai,
        Me = ye.brackets || Yi,
        Ke = Te(ee),
        Ue = Ke.resolveInner(ie, He);
      for (let Fe = Ue; Fe; Fe = Fe.parent) {
        let ye = mi(Fe.type, He, Me);
        if (ye && Fe.from < Fe.to) {
          let be = li(Fe);
          if (be && (He > 0 ? ie >= be.from && ie < be.to : ie > be.from && ie <= be.to)) return ni(ee, ie, He, Fe, be, ye, Me)
        }
      }
      return function(ee, ie, He, ye, be, Me, Ke) {
        if (He < 0 ? !ie : ie == ee.doc.length) return null;
        let Ue = He < 0 ? ee.sliceDoc(ie - 1, ie) : ee.sliceDoc(ie, ie + 1),
          Fe = Ke.indexOf(Ue);
        if (Fe < 0 || Fe % 2 == 0 != He > 0) return null;
        let Je = {
            from: He < 0 ? ie - 1 : ie,
            to: He > 0 ? ie + 1 : ie
          },
          oe = ee.doc.iterRange(ie, He > 0 ? ee.doc.length : 0),
          Re = 0;
        for (let ke = 0; !oe.next().done && ke <= Me;) {
          let ee = oe.value;
          He < 0 && (ke += ee.length);
          let Me = ie + ke * He;
          for (let ie = He > 0 ? 0 : ee.length - 1, Ue = He > 0 ? ee.length : -1; ie != Ue; ie += He) {
            let Ue = Ke.indexOf(ee[ie]);
            if (!(Ue < 0 || ye.resolveInner(Me + ie, 1).type != be))
              if (Ue % 2 == 0 == He > 0) Re++;
              else {
                if (1 == Re) return {
                  start: Je,
                  end: {
                    from: Me + ie,
                    to: Me + ie + 1
                  },
                  matched: Ue >> 1 == Fe >> 1
                };
                Re--
              }
          }
          He > 0 && (ke += ee.length)
        }
        return oe.done ? {
          start: Je,
          matched: !1
        } : null
      }(ee, ie, He, Ke, Ue.type, be, Me)
    }

    function ni(ee, ie, He, ye, be, Me, Ke) {
      let Ue = ye.parent,
        Fe = {
          from: be.from,
          to: be.to
        },
        Je = 0,
        oe = null === Ue || void 0 === Ue ? void 0 : Ue.cursor();
      if (oe && (He < 0 ? oe.childBefore(ye.from) : oe.childAfter(ye.to)))
        do {
          if (He < 0 ? oe.to <= ye.from : oe.from >= ye.to) {
            if (0 == Je && Me.indexOf(oe.type.name) > -1 && oe.from < oe.to) {
              let ee = li(oe);
              return {
                start: Fe,
                end: ee ? {
                  from: ee.from,
                  to: ee.to
                } : void 0,
                matched: !0
              }
            }
            if (mi(oe.type, He, Ke)) Je++;
            else if (mi(oe.type, -He, Ke)) {
              if (0 == Je) {
                let ee = li(oe);
                return {
                  start: Fe,
                  end: ee && ee.from < ee.to ? {
                    from: ee.from,
                    to: ee.to
                  } : void 0,
                  matched: !1
                }
              }
              Je--
            }
          }
        } while (He < 0 ? oe.prevSibling() : oe.nextSibling());
      return {
        start: Fe,
        matched: !1
      }
    }
    const ji = Object.create(null),
      si = [be.l.none],
      Ii = [],
      Ni = Object.create(null),
      Gi = Object.create(null);
    for (let [eH, iH] of [
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
      ]) Gi[eH] = Qi(ji, iH);

    function ri(ee, ie) {
      Ii.indexOf(ee) > -1 || (Ii.push(ee), console.warn(ie))
    }

    function Qi(ee, ie) {
      let He = [];
      for (let be of ie.split(" ")) {
        let ie = [];
        for (let He of be.split(".")) {
          let ye = ee[He] || Ue.n[He];
          ye ? "function" == typeof ye ? ie.length ? ie = ie.map(ye) : ri(He, `Modifier ${He} used at start of tag`) : ie.length ? ri(He, `Tag ${He} used as modifier`) : ie = Array.isArray(ye) ? ye : [ye] : ri(He, `Unknown highlighting tag ${He}`)
        }
        for (let ee of ie) He.push(ee)
      }
      if (!He.length) return 0;
      let ye = ie.replace(/ /g, "_"),
        Me = ye + " " + He.map((ee => ee.id)),
        Ke = Ni[Me];
      if (Ke) return Ke.id;
      let Fe = Ni[Me] = be.l.define({
        id: si.length,
        name: ye,
        props: [(0, Ue.f)({
          [ye]: He
        })]
      });
      return si.push(Fe), Fe.id
    }
    Ke.h.RTL, Ke.h.LTR
  },
  44559: (ee, ie, He) => {
    He.d(ie, {
      d: () => Be,
      h: () => de
    });
    var ye = He(44518),
      be = He(44509),
      Me = He(44525);
    class Ke {
      constructor(ee, ie, He) {
        this.from = ee, this.to = ie, this.diagnostic = He
      }
    }
    class Ue {
      constructor(ee, ie, He) {
        this.diagnostics = ee, this.panel = ie, this.selected = He
      }
      static init(ee, ie, He) {
        let Me = He.facet(ge).markerFilter;
        Me && (ee = Me(ee, He));
        let Ke = ee.slice().sort(((ee, ie) => ee.from - ie.from || ee.to - ie.to)),
          Je = new be.z,
          oe = [],
          Re = 0,
          ke = He.doc.iter(),
          qe = 0,
          fe = He.doc.length;
        for (let be = 0;;) {
          let ee, ie, He = be == Ke.length ? null : Ke[be];
          if (!He && !oe.length) break;
          if (oe.length) ee = Re, ie = oe.reduce(((ee, ie) => Math.min(ee, ie.to)), He && He.from > ee ? He.from : 1e8);
          else {
            if (ee = He.from, ee > fe) break;
            ie = He.to, oe.push(He), be++
          }
          for (; be < Ke.length;) {
            let He = Ke[be];
            if (He.from != ee || !(He.to > He.from || He.to == ee)) {
              ie = Math.min(He.from, ie);
              break
            }
            oe.push(He), be++, ie = Math.min(He.to, ie)
          }
          ie = Math.min(ie, fe);
          let Me = !1;
          if (oe.some((He => He.from == ee && (He.to == ie || ie == fe))) && (Me = ee == ie, !Me && ie - ee < 10)) {
            let He = ee - (qe + ke.value.length);
            He > 0 && (ke.next(He), qe = ee);
            for (let ye = ee;;) {
              if (ye >= ie) {
                Me = !0;
                break
              }
              if (!ke.lineBreak && qe + ke.value.length > ye) break;
              ye = qe + ke.value.length, qe += ke.value.length, ke.next()
            }
          }
          let Ue = ae(oe);
          if (Me) Je.add(ee, ee, ye.e.widget({
            widget: new Ze(Ue),
            diagnostics: oe.slice()
          }));
          else {
            let He = oe.reduce(((ee, ie) => ie.markClass ? ee + " " + ie.markClass : ee), "");
            Je.add(ee, ie, ye.e.mark({
              class: "cm-lintRange cm-lintRange-" + Ue + He,
              diagnostics: oe.slice(),
              inclusiveEnd: oe.some((ee => ee.to > ie))
            }))
          }
          if (Re = ie, Re == fe) break;
          for (let ye = 0; ye < oe.length; ye++) oe[ye].to <= Re && oe.splice(ye--, 1)
        }
        let Te = Je.finish();
        return new Ue(Te, ie, Fe(Te))
      }
    }

    function Fe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ye = null;
      return ee.between(He, 1e9, ((ee, He, be) => {
        let {
          spec: Me
        } = be;
        if (!(ie && Me.diagnostics.indexOf(ie) < 0))
          if (ye) {
            if (Me.diagnostics.indexOf(ye.diagnostic) < 0) return !1;
            ye = new Ke(ye.from, He, ye.diagnostic)
          } else ye = new Ke(ee, He, ie || Me.diagnostics[0])
      })), ye
    }

    function Je(ee, ie) {
      let He = ie.pos,
        ye = ie.end || He,
        be = ee.state.facet(ge).hideOn(ee, He, ye);
      if (null != be) return be;
      let Me = ee.startState.doc.lineAt(ie.pos);
      return !(!ee.effects.some((ee => ee.is(Re))) && !ee.changes.touchesRange(Me.from, Math.max(Me.to, ye)))
    }

    function oe(ee, ie) {
      return ee.field(fe, !1) ? ie : ie.concat(be.K.appendConfig.of(ce))
    }
    const Re = be.K.define(),
      ke = be.K.define(),
      qe = be.K.define(),
      fe = be.N.define({
        create: () => new Ue(ye.e.none, null, null),
        update(ee, ie) {
          if (ie.docChanged && ee.diagnostics.size) {
            let He = ee.diagnostics.map(ie.changes),
              ye = null,
              be = ee.panel;
            if (ee.selected) {
              let be = ie.changes.mapPos(ee.selected.from, 1);
              ye = Fe(He, ee.selected.diagnostic, be) || Fe(He, null, be)
            }!He.size && be && ie.state.facet(ge).autoPanel && (be = null), ee = new Ue(He, be, ye)
          }
          for (let He of ie.effects)
            if (He.is(Re)) {
              let ye = ie.state.facet(ge).autoPanel ? He.value.length ? De.open : null : ee.panel;
              ee = Ue.init(He.value, ye, ie.state)
            } else He.is(ke) ? ee = new Ue(ee.diagnostics, He.value ? De.open : null, ee.selected) : He.is(qe) && (ee = new Ue(ee.diagnostics, ee.panel, He.value));
          return ee
        },
        provide: ee => [ye.fb.from(ee, (ee => ee.panel)), ye.i.MM.from(ee, (ee => ee.diagnostics))]
      });
    const Te = ye.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function pe(ee, ie, He) {
      let ye, {
          diagnostics: be
        } = ee.state.field(fe),
        Me = -1,
        Ke = -1;
      be.between(ie - (He < 0 ? 1 : 0), ie + (He > 0 ? 1 : 0), ((ee, be, Ue) => {
        let {
          spec: Fe
        } = Ue;
        if (ie >= ee && ie <= be && (ee == be || (ie > ee || He > 0) && (ie < be || He < 0))) return ye = Fe.diagnostics, Me = ee, Ke = be, !1
      }));
      let Ue = ee.state.facet(ge).tooltipFilter;
      return ye && Ue && (ye = Ue(ye, ee.state)), ye ? {
        pos: Me,
        end: Ke,
        above: ee.state.doc.lineAt(Me).to < Ke,
        create: () => ({
          dom: Xe(ee, ye)
        })
      } : null
    }

    function Xe(ee, ie) {
      return (0, Me.e)("ul", {
        class: "cm-tooltip-lint"
      }, ie.map((ie => te(ee, ie, !1))))
    }
    const ze = ee => {
        let ie = ee.state.field(fe, !1);
        return !(!ie || !ie.panel) && (ee.dispatch({
          effects: ke.of(!1)
        }), !0)
      },
      Be = [{
        key: "Mod-Shift-m",
        run: ee => {
          let ie = ee.state.field(fe, !1);
          ie && ie.panel || ee.dispatch({
            effects: oe(ee.state, [ke.of(!0)])
          });
          let He = (0, ye.w)(ee, De.open);
          return He && He.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: ee => {
          let ie = ee.state.field(fe, !1);
          if (!ie) return !1;
          let He = ee.state.selection.main,
            ye = Fe(ie.diagnostics, null, He.to + 1);
          return !(!ye && (ye = Fe(ie.diagnostics, null, 0), !ye || ye.from == He.from && ye.to == He.to)) && (ee.dispatch({
            selection: {
              anchor: ye.from,
              head: ye.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      Ee = ye.o.fromClass(class {
        constructor(ee) {
          this.view = ee, this.timeout = -1, this.set = !0;
          let {
            delay: ie
          } = ee.state.facet(ge);
          this.lintTime = Date.now() + ie, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, ie)
        }
        run() {
          clearTimeout(this.timeout);
          let ee = Date.now();
          if (ee < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - ee);
          else {
            this.set = !1;
            let {
              state: ee
            } = this.view, {
              sources: ie
            } = ee.facet(ge);
            ie.length && function(ee, ie, He) {
              let ye = [],
                be = -1;
              for (let Me of ee) Me.then((He => {
                ye.push(He), clearTimeout(be), ye.length == ee.length ? ie(ye) : be = setTimeout((() => ie(ye)), 200)
              }), He)
            }(ie.map((ee => Promise.resolve(ee(this.view)))), (ie => {
              this.view.state.doc == ee.doc && this.view.dispatch(function(ee, ie) {
                return {
                  effects: oe(ee, [Re.of(ie)])
                }
              }(this.view.state, ie.reduce(((ee, ie) => ee.concat(ie)))))
            }), (ee => {
              (0, ye.U)(this.view.state, ee)
            }))
          }
        }
        update(ee) {
          let ie = ee.state.facet(ge);
          (ee.docChanged || ie != ee.startState.facet(ge) || ie.needsRefresh && ie.needsRefresh(ee)) && (this.lintTime = Date.now() + ie.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, ie.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const ge = be.q.define({
      combine: ee => ({
        sources: ee.map((ee => ee.source)).filter((ee => null != ee)),
        ...(0, be.cb)(ee.map((ee => ee.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: Oe,
          tooltipFilter: Oe,
          needsRefresh: (ee, ie) => ee ? ie ? He => ee(He) || ie(He) : ee : ie,
          hideOn: (ee, ie) => ee ? ie ? (He, ye, be) => ee(He, ye, be) || ie(He, ye, be) : ee : ie,
          autoPanel: (ee, ie) => ee || ie
        })
      })
    });

    function Oe(ee, ie) {
      return ee ? ie ? (He, ye) => ie(ee(He, ye), ye) : ee : ie
    }

    function de(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [ge.of({
        source: ee,
        config: ie
      }), Ee, ce]
    }

    function We(ee) {
      let ie = [];
      if (ee) ee: for (let {
          name: He
        }
        of ee) {
        for (let ee = 0; ee < He.length; ee++) {
          let ye = He[ee];
          if (/[a-zA-Z]/.test(ye) && !ie.some((ee => ee.toLowerCase() == ye.toLowerCase()))) {
            ie.push(ye);
            continue ee
          }
        }
        ie.push("")
      }
      return ie
    }

    function te(ee, ie, He) {
      var ye;
      let be = He ? We(ie.actions) : [];
      return (0, Me.e)("li", {
        class: "cm-diagnostic cm-diagnostic-" + ie.severity
      }, (0, Me.e)("span", {
        class: "cm-diagnosticText"
      }, ie.renderMessage ? ie.renderMessage(ee) : ie.message), null === (ye = ie.actions) || void 0 === ye ? void 0 : ye.map(((He, ye) => {
        let Ke = !1,
          Ue = ye => {
            if (ye.preventDefault(), Ke) return;
            Ke = !0;
            let be = Fe(ee.state.field(fe).diagnostics, ie);
            be && He.apply(ee, be.from, be.to)
          },
          {
            name: Je
          } = He,
          oe = be[ye] ? Je.indexOf(be[ye]) : -1,
          Re = oe < 0 ? Je : [Je.slice(0, oe), (0, Me.e)("u", Je.slice(oe, oe + 1)), Je.slice(oe + 1)],
          ke = He.markClass ? " " + He.markClass : "";
        return (0, Me.e)("button", {
          type: "button",
          class: "cm-diagnosticAction" + ke,
          onclick: Ue,
          onmousedown: Ue,
          "aria-label": ` Action: ${Je}${oe<0?"":` (access key "${be[ye]})"`}.`
        }, Re)
      })), ie.source && (0, Me.e)("div", {
        class: "cm-diagnosticSource"
      }, ie.source))
    }
    class Ze extends ye.p {
      constructor(ee) {
        super(), this.sev = ee
      }
      eq(ee) {
        return ee.sev == this.sev
      }
      toDOM() {
        return (0, Me.e)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class we {
      constructor(ee, ie) {
        this.diagnostic = ie, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = te(ee, ie, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class De {
      constructor(ee) {
        this.view = ee, this.items = [];
        this.list = (0, Me.e)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: ie => {
            if (!(ie.ctrlKey || ie.altKey || ie.metaKey)) {
              if (27 == ie.keyCode) ze(this.view), this.view.focus();
              else if (38 == ie.keyCode || 33 == ie.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == ie.keyCode || 34 == ie.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == ie.keyCode) this.moveSelection(0);
              else if (35 == ie.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == ie.keyCode) this.view.focus();
              else {
                if (!(ie.keyCode >= 65 && ie.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: He
                  } = this.items[this.selectedIndex], ye = We(He.actions);
                  for (let be = 0; be < ye.length; be++)
                    if (ye[be].toUpperCase().charCodeAt(0) == ie.keyCode) {
                      let ie = Fe(this.view.state.field(fe).diagnostics, He);
                      ie && He.actions[be].apply(ee, ie.from, ie.to)
                    }
                }
              }
              ie.preventDefault()
            }
          },
          onclick: ee => {
            for (let ie = 0; ie < this.items.length; ie++) this.items[ie].dom.contains(ee.target) && this.moveSelection(ie)
          }
        }), this.dom = (0, Me.e)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, Me.e)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => ze(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let ee = this.view.state.field(fe).selected;
        if (!ee) return -1;
        for (let ie = 0; ie < this.items.length; ie++)
          if (this.items[ie].diagnostic == ee.diagnostic) return ie;
        return -1
      }
      update() {
        let {
          diagnostics: ee,
          selected: ie
        } = this.view.state.field(fe), He = 0, ye = !1, be = null, Me = new Set;
        for (ee.between(0, this.view.state.doc.length, ((ee, Ke, Ue) => {
            let {
              spec: Fe
            } = Ue;
            for (let Je of Fe.diagnostics) {
              if (Me.has(Je)) continue;
              Me.add(Je);
              let ee, Ke = -1;
              for (let ie = He; ie < this.items.length; ie++)
                if (this.items[ie].diagnostic == Je) {
                  Ke = ie;
                  break
                } Ke < 0 ? (ee = new we(this.view, Je), this.items.splice(He, 0, ee), ye = !0) : (ee = this.items[Ke], Ke > He && (this.items.splice(He, Ke - He), ye = !0)), ie && ee.diagnostic == ie.diagnostic ? ee.dom.hasAttribute("aria-selected") || (ee.dom.setAttribute("aria-selected", "true"), be = ee) : ee.dom.hasAttribute("aria-selected") && ee.dom.removeAttribute("aria-selected"), He++
            }
          })); He < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) ye = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new we(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), ye = !0), be ? (this.list.setAttribute("aria-activedescendant", be.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: be.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: ee => {
            let {
              sel: ie,
              panel: He
            } = ee, ye = He.height / this.list.offsetHeight;
            ie.top < He.top ? this.list.scrollTop -= (He.top - ie.top) / ye : ie.bottom > He.bottom && (this.list.scrollTop += (ie.bottom - He.bottom) / ye)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), ye && this.sync()
      }
      sync() {
        let ee = this.list.firstChild;

        function ie() {
          let ie = ee;
          ee = ie.nextSibling, ie.remove()
        }
        for (let He of this.items)
          if (He.dom.parentNode == this.list) {
            for (; ee != He.dom;) ie();
            ee = He.dom.nextSibling
          } else this.list.insertBefore(He.dom, ee);
        for (; ee;) ie()
      }
      moveSelection(ee) {
        if (this.selectedIndex < 0) return;
        let ie = Fe(this.view.state.field(fe).diagnostics, this.items[ee].diagnostic);
        ie && this.view.dispatch({
          selection: {
            anchor: ie.from,
            head: ie.to
          },
          scrollIntoView: !0,
          effects: qe.of(ie)
        })
      }
      static open(ee) {
        return new De(ee)
      }
    }

    function Pe(ee) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(ee)}</svg>')`
    }

    function Ae(ee) {
      return Pe(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${ee}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Ye = ye.i.baseTheme({
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
        backgroundImage: Ae("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Ae("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Ae("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Ae("#66d")
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

    function Ve(ee) {
      return "error" == ee ? 4 : "warning" == ee ? 3 : "info" == ee ? 2 : 1
    }

    function ae(ee) {
      let ie = "hint",
        He = 1;
      for (let ye of ee) {
        let ee = Ve(ye.severity);
        ee > He && (He = ee, ie = ye.severity)
      }
      return ie
    }
    ye.k;
    const ce = [fe, ye.i.MM.compute([fe], (ee => {
      let {
        selected: ie,
        panel: He
      } = ee.field(fe);
      return ie && He && ie.from != ie.to ? ye.e.set([Te.range(ie.from, ie.to)]) : ye.e.none
    })), (0, ye.N)(pe, {
      hideOn: Je
    }), Ye]
  },
  44551: (ee, ie, He) => {
    He.d(ie, {
      d: () => re,
      e: () => Xe,
      f: () => Qe
    });
    var ye = He(44518),
      be = He(44509),
      Me = He(44525);
    const Ke = "function" == typeof String.prototype.normalize ? ee => ee.normalize("NFKD") : ee => ee;
    class Ue {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ee.length,
          be = arguments.length > 4 ? arguments[4] : void 0,
          Me = arguments.length > 5 ? arguments[5] : void 0;
        this.test = Me, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = ee.iterRange(He, ye), this.bufferStart = He, this.normalize = be ? ee => be(Ke(ee)) : Ke, this.query = this.normalize(ie)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, be.X)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let ee = this.peek();
          if (ee < 0) return this.done = !0, this;
          let ie = (0, be.pb)(ee),
            He = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, be.$)(ee);
          let ye = this.normalize(ie);
          if (ye.length)
            for (let be = 0, Me = He;; be++) {
              let ee = ye.charCodeAt(be),
                Ke = this.match(ee, Me, this.bufferPos + this.bufferStart);
              if (be == ye.length - 1) {
                if (Ke) return this.value = Ke, this;
                break
              }
              Me == He && be < ie.length && ie.charCodeAt(be) == ee && Me++
            }
        }
      }
      match(ee, ie, He) {
        let ye = null;
        for (let be = 0; be < this.matches.length; be += 2) {
          let ie = this.matches[be],
            Me = !1;
          this.query.charCodeAt(ie) == ee && (ie == this.query.length - 1 ? ye = {
            from: this.matches[be + 1],
            to: He
          } : (this.matches[be]++, Me = !0)), Me || (this.matches.splice(be, 2), be -= 2)
        }
        return this.query.charCodeAt(0) == ee && (1 == this.query.length ? ye = {
          from: ie,
          to: He
        } : this.matches.push(1, ie)), ye && this.test && !this.test(ye.from, ye.to, this.buffer, this.bufferStart) && (ye = null), ye
      }
    }
    "undefined" != typeof Symbol && (Ue.prototype[Symbol.iterator] = function() {
      return this
    });
    const Fe = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Je = "gm" + (null == /x/.unicode ? "" : "u");
    class oe {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ee.length;
        if (this.text = ee, this.to = be, this.curLine = "", this.done = !1, this.value = Fe, /\\[sWDnr]|\n|\r|\[\^/.test(ie)) return new qe(ee, ie, He, ye, be);
        this.re = new RegExp(ie, Je + ((null === He || void 0 === He ? void 0 : He.ignoreCase) ? "i" : "")), this.test = null === He || void 0 === He ? void 0 : He.test, this.iter = ee.iter();
        let Me = ee.lineAt(ye);
        this.curLineStart = Me.from, this.matchPos = fe(ee, ye), this.getLine(this.curLineStart)
      }
      getLine(ee) {
        this.iter.next(ee), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let ee = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = ee;
          let ie = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (ie) {
            let He = this.curLineStart + ie.index,
              ye = He + ie[0].length;
            if (this.matchPos = fe(this.text, ye + (He == ye ? 1 : 0)), He == this.curLineStart + this.curLine.length && this.nextLine(), (He < ye || He > this.value.to) && (!this.test || this.test(He, ye, ie))) return this.value = {
              from: He,
              to: ye,
              match: ie
            }, this;
            ee = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), ee = 0
          }
        }
      }
    }
    const Re = new WeakMap;
    class ke {
      constructor(ee, ie) {
        this.from = ee, this.text = ie
      }
      get to() {
        return this.from + this.text.length
      }
      static get(ee, ie, He) {
        let ye = Re.get(ee);
        if (!ye || ye.from >= He || ye.to <= ie) {
          let ye = new ke(ie, ee.sliceString(ie, He));
          return Re.set(ee, ye), ye
        }
        if (ye.from == ie && ye.to == He) return ye;
        let {
          text: be,
          from: Me
        } = ye;
        return Me > ie && (be = ee.sliceString(ie, Me) + be, Me = ie), ye.to < He && (be += ee.sliceString(ye.to, He)), Re.set(ee, new ke(Me, be)), new ke(ie, be.slice(ie - Me, He - Me))
      }
    }
    class qe {
      constructor(ee, ie, He, ye, be) {
        this.text = ee, this.to = be, this.done = !1, this.value = Fe, this.matchPos = fe(ee, ye), this.re = new RegExp(ie, Je + ((null === He || void 0 === He ? void 0 : He.ignoreCase) ? "i" : "")), this.test = null === He || void 0 === He ? void 0 : He.test, this.flat = ke.get(ee, ye, this.chunkEnd(ye + 5e3))
      }
      chunkEnd(ee) {
        return ee >= this.to ? this.to : this.text.lineAt(ee).to
      }
      next() {
        for (;;) {
          let ee = this.re.lastIndex = this.matchPos - this.flat.from,
            ie = this.re.exec(this.flat.text);
          if (ie && !ie[0] && ie.index == ee && (this.re.lastIndex = ee + 1, ie = this.re.exec(this.flat.text)), ie) {
            let ee = this.flat.from + ie.index,
              He = ee + ie[0].length;
            if ((this.flat.to >= this.to || ie.index + ie[0].length <= this.flat.text.length - 10) && (!this.test || this.test(ee, He, ie))) return this.value = {
              from: ee,
              to: He,
              match: ie
            }, this.matchPos = fe(this.text, He + (ee == He ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = ke.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function fe(ee, ie) {
      if (ie >= ee.length) return ie;
      let He, ye = ee.lineAt(ie);
      for (; ie < ye.to && (He = ye.text.charCodeAt(ie - ye.from)) >= 56320 && He < 57344;) ie++;
      return ie
    }
    "undefined" != typeof Symbol && (oe.prototype[Symbol.iterator] = qe.prototype[Symbol.iterator] = function() {
      return this
    });
    const Te = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      pe = be.q.define({
        combine: ee => (0, be.cb)(ee, Te, {
          highlightWordAroundCursor: (ee, ie) => ee || ie,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function Xe(ee) {
      let ie = [Oe, ge];
      return ee && ie.push(pe.of(ee)), ie
    }
    const ze = ye.e.mark({
        class: "cm-selectionMatch"
      }),
      Be = ye.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function Ee(ee, ie, He, ye) {
      return (0 == He || ee(ie.sliceDoc(He - 1, He)) != be.i.Word) && (ye == ie.doc.length || ee(ie.sliceDoc(ye, ye + 1)) != be.i.Word)
    }
    const ge = ye.o.fromClass(class {
        constructor(ee) {
          this.MM = this.getDeco(ee)
        }
        update(ee) {
          (ee.selectionSet || ee.docChanged || ee.viewportChanged) && (this.MM = this.getDeco(ee.view))
        }
        getDeco(ee) {
          let ie = ee.state.facet(pe),
            {
              state: He
            } = ee,
            Me = He.selection;
          if (Me.zp.length > 1) return ye.e.none;
          let Ke, Fe = Me.main,
            Je = null;
          if (Fe.empty) {
            if (!ie.highlightWordAroundCursor) return ye.e.none;
            let ee = He.wordAt(Fe.head);
            if (!ee) return ye.e.none;
            Je = He.charCategorizer(Fe.head), Ke = He.sliceDoc(ee.from, ee.to)
          } else {
            let ee = Fe.to - Fe.from;
            if (ee < ie.minSelectionLength || ee > 200) return ye.e.none;
            if (ie.wholeWords) {
              if (Ke = He.sliceDoc(Fe.from, Fe.to), Je = He.charCategorizer(Fe.head), !Ee(Je, He, Fe.from, Fe.to) || ! function(ee, ie, He, ye) {
                  return ee(ie.sliceDoc(He, He + 1)) == be.i.Word && ee(ie.sliceDoc(ye - 1, ye)) == be.i.Word
                }(Je, He, Fe.from, Fe.to)) return ye.e.none
            } else if (Ke = He.sliceDoc(Fe.from, Fe.to), !Ke) return ye.e.none
          }
          let oe = [];
          for (let be of ee.Xie) {
            let ee = new Ue(He.doc, Ke, be.from, be.to);
            for (; !ee.next().done;) {
              let {
                from: be,
                to: Me
              } = ee.value;
              if ((!Je || Ee(Je, He, be, Me)) && (Fe.empty && be <= Fe.from && Me >= Fe.to ? oe.push(Be.range(be, Me)) : (be >= Fe.to || Me <= Fe.from) && oe.push(ze.range(be, Me)), oe.length > ie.maxMatches)) return ye.e.none
            }
          }
          return ye.e.set(oe)
        }
      }, {
        MM: ee => ee.MM
      }),
      Oe = ye.i.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const de = be.q.define({
      combine: ee => (0, be.cb)(ee, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: ee => new ei(ee),
        scrollToMatch: ee => ye.i.scrollIntoView(ee)
      })
    });
    class We {
      constructor(ee) {
        this.search = ee.search, this.caseSensitive = !!ee.caseSensitive, this.literal = !!ee.literal, this.regexp = !!ee.regexp, this.replace = ee.replace || "", this.valid = !!this.search && (!this.regexp || function(ee) {
          try {
            return new RegExp(ee, Je), !0
          } catch (ie) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!ee.wholeWord, this.test = ee.test
      }
      unquote(ee) {
        return this.literal ? ee : ee.replace(/\\([nrt\\])/g, ((ee, ie) => "n" == ie ? "\n" : "r" == ie ? "\r" : "t" == ie ? "\t" : "\\"))
      }
      eq(ee) {
        return this.search == ee.search && this.replace == ee.replace && this.caseSensitive == ee.caseSensitive && this.regexp == ee.regexp && this.wholeWord == ee.wholeWord && this.test == ee.test
      }
      create() {
        return this.regexp ? new Ye(this) : new we(this)
      }
      getCursor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = ee.doc ? ee : be.o.create({
            doc: ee
          });
        return null == He && (He = ye.doc.length), this.regexp ? De(this, ye, ie, He) : Ze(this, ye, ie, He)
      }
    }
    class te {
      constructor(ee) {
        this.spec = ee
      }
    }

    function Ze(ee, ie, He, ye) {
      let Me;
      var Ke, Fe;
      return ee.wholeWord && (Ke = ie.doc, Fe = ie.charCategorizer(ie.selection.main.head), Me = (ee, ie, He, ye) => ((ye > ee || ye + He.length < ie) && (ye = Math.max(0, ee - 2), He = Ke.sliceString(ye, Math.min(Ke.length, ie + 2))), (Fe(Pe(He, ee - ye)) != be.i.Word || Fe(Ae(He, ee - ye)) != be.i.Word) && (Fe(Ae(He, ie - ye)) != be.i.Word || Fe(Pe(He, ie - ye)) != be.i.Word))), ee.test && (Me = function(ee, ie, He) {
        return (ye, be, Me, Ke) => {
          if (He && !He(ye, be, Me, Ke)) return !1;
          let Ue = ye >= Ke && be <= Ke + Me.length ? Me.slice(ye - Ke, be - Ke) : ie.doc.sliceString(ye, be);
          return ee(Ue, ie, ye, be)
        }
      }(ee.test, ie, Me)), new Ue(ie.doc, ee.unquoted, He, ye, ee.caseSensitive ? void 0 : ee => ee.toLowerCase(), Me)
    }
    class we extends te {
      constructor(ee) {
        super(ee)
      }
      nextMatch(ee, ie, He) {
        let ye = Ze(this.spec, ee, He, ee.doc.length).nextOverlapping();
        if (ye.done) {
          let He = Math.min(ee.doc.length, ie + this.spec.unquoted.length);
          ye = Ze(this.spec, ee, 0, He).nextOverlapping()
        }
        return ye.done || ye.value.from == ie && ye.value.to == He ? null : ye.value
      }
      prevMatchInRange(ee, ie, He) {
        for (let ye = He;;) {
          let He = Math.max(ie, ye - 1e4 - this.spec.unquoted.length),
            be = Ze(this.spec, ee, He, ye),
            Me = null;
          for (; !be.nextOverlapping().done;) Me = be.value;
          if (Me) return Me;
          if (He == ie) return null;
          ye -= 1e4
        }
      }
      prevMatch(ee, ie, He) {
        let ye = this.prevMatchInRange(ee, 0, ie);
        return ye || (ye = this.prevMatchInRange(ee, Math.max(0, He - this.spec.unquoted.length), ee.doc.length)), !ye || ye.from == ie && ye.to == He ? null : ye
      }
      getReplacement(ee) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(ee, ie) {
        let He = Ze(this.spec, ee, 0, ee.doc.length),
          ye = [];
        for (; !He.next().done;) {
          if (ye.length >= ie) return null;
          ye.push(He.value)
        }
        return ye
      }
      highlight(ee, ie, He, ye) {
        let be = Ze(this.spec, ee, Math.max(0, ie - this.spec.unquoted.length), Math.min(He + this.spec.unquoted.length, ee.doc.length));
        for (; !be.next().done;) ye(be.value.from, be.value.to)
      }
    }

    function De(ee, ie, He, ye) {
      let Me;
      var Ke;
      return ee.wholeWord && (Ke = ie.charCategorizer(ie.selection.main.head), Me = (ee, ie, He) => !He[0].length || (Ke(Pe(He.input, He.index)) != be.i.Word || Ke(Ae(He.input, He.index)) != be.i.Word) && (Ke(Ae(He.input, He.index + He[0].length)) != be.i.Word || Ke(Pe(He.input, He.index + He[0].length)) != be.i.Word)), ee.test && (Me = function(ee, ie, He) {
        return (ye, be, Me) => (!He || He(ye, be, Me)) && ee(Me[0], ie, ye, be)
      }(ee.test, ie, Me)), new oe(ie.doc, ee.search, {
        ignoreCase: !ee.caseSensitive,
        test: Me
      }, He, ye)
    }

    function Pe(ee, ie) {
      return ee.slice((0, be.kb)(ee, ie, !1), ie)
    }

    function Ae(ee, ie) {
      return ee.slice(ie, (0, be.kb)(ee, ie))
    }
    class Ye extends te {
      nextMatch(ee, ie, He) {
        let ye = De(this.spec, ee, He, ee.doc.length).next();
        return ye.done && (ye = De(this.spec, ee, 0, ie).next()), ye.done ? null : ye.value
      }
      prevMatchInRange(ee, ie, He) {
        for (let ye = 1;; ye++) {
          let be = Math.max(ie, He - 1e4 * ye),
            Me = De(this.spec, ee, be, He),
            Ke = null;
          for (; !Me.next().done;) Ke = Me.value;
          if (Ke && (be == ie || Ke.from > be + 10)) return Ke;
          if (be == ie) return null
        }
      }
      prevMatch(ee, ie, He) {
        return this.prevMatchInRange(ee, 0, ie) || this.prevMatchInRange(ee, He, ee.doc.length)
      }
      getReplacement(ee) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((ie, He) => {
          if ("&" == He) return ee.match[0];
          if ("$" == He) return "$";
          for (let ye = He.length; ye > 0; ye--) {
            let ie = +He.slice(0, ye);
            if (ie > 0 && ie < ee.match.length) return ee.match[ie] + He.slice(ye)
          }
          return ie
        }))
      }
      matchAll(ee, ie) {
        let He = De(this.spec, ee, 0, ee.doc.length),
          ye = [];
        for (; !He.next().done;) {
          if (ye.length >= ie) return null;
          ye.push(He.value)
        }
        return ye
      }
      highlight(ee, ie, He, ye) {
        let be = De(this.spec, ee, Math.max(0, ie - 250), Math.min(He + 250, ee.doc.length));
        for (; !be.next().done;) ye(be.value.from, be.value.to)
      }
    }
    const Ve = be.K.define(),
      ae = be.K.define(),
      ce = be.N.define({
        create: ee => new xe(Ie(ee).create(), null),
        update(ee, ie) {
          for (let He of ie.effects) He.is(Ve) ? ee = new xe(He.value.create(), ee.panel) : He.is(ae) && (ee = new xe(ee.query, He.value ? se : null));
          return ee
        },
        provide: ee => ye.fb.from(ee, (ee => ee.panel))
      });
    class xe {
      constructor(ee, ie) {
        this.query = ee, this.panel = ie
      }
    }
    const Le = ye.e.mark({
        class: "cm-searchMatch"
      }),
      Ce = ye.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      ve = ye.o.fromClass(class {
        constructor(ee) {
          this.view = ee, this.MM = this.highlight(ee.state.field(ce))
        }
        update(ee) {
          let ie = ee.state.field(ce);
          (ie != ee.startState.field(ce) || ee.docChanged || ee.selectionSet || ee.viewportChanged) && (this.MM = this.highlight(ie))
        }
        highlight(ee) {
          let {
            query: ie,
            panel: He
          } = ee;
          if (!He || !ie.spec.valid) return ye.e.none;
          let {
            view: Me
          } = this, Ke = new be.z;
          for (let ye = 0, be = Me.Xie, Ue = be.length; ye < Ue; ye++) {
            let {
              from: ee,
              to: He
            } = be[ye];
            for (; ye < Ue - 1 && He > be[ye + 1].from - 500;) He = be[++ye].to;
            ie.highlight(Me.state, ee, He, ((ee, ie) => {
              let He = Me.state.selection.zp.some((He => He.from == ee && He.to == ie));
              Ke.add(ee, ie, He ? Ce : Le)
            }))
          }
          return Ke.finish()
        }
      }, {
        MM: ee => ee.MM
      });

    function ue(ee) {
      return ie => {
        let He = ie.state.field(ce, !1);
        return He && He.query.spec.valid ? ee(ie, He) : Ge(ie)
      }
    }
    const me = ue(((ee, ie) => {
        let {
          query: He
        } = ie, {
          to: ye
        } = ee.state.selection.main, Me = He.nextMatch(ee.state, ye, ye);
        if (!Me) return !1;
        let Ke = be.k.single(Me.from, Me.to),
          Ue = ee.state.facet(de);
        return ee.dispatch({
          selection: Ke,
          effects: [bi(ee, Me), Ue.scrollToMatch(Ke.main, ee)],
          userEvent: "select.search"
        }), Ne(ee), !0
      })),
      le = ue(((ee, ie) => {
        let {
          query: He
        } = ie, {
          state: ye
        } = ee, {
          from: Me
        } = ye.selection.main, Ke = He.prevMatch(ye, Me, Me);
        if (!Ke) return !1;
        let Ue = be.k.single(Ke.from, Ke.to),
          Fe = ee.state.facet(de);
        return ee.dispatch({
          selection: Ue,
          effects: [bi(ee, Ke), Fe.scrollToMatch(Ue.main, ee)],
          userEvent: "select.search"
        }), Ne(ee), !0
      })),
      Se = ue(((ee, ie) => {
        let {
          query: He
        } = ie, ye = He.matchAll(ee.state, 1e3);
        return !(!ye || !ye.length) && (ee.dispatch({
          selection: be.k.create(ye.map((ee => be.k.range(ee.from, ee.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      ne = ue(((ee, ie) => {
        let {
          query: He
        } = ie, {
          state: Me
        } = ee, {
          from: Ke,
          to: Ue
        } = Me.selection.main;
        if (Me.readOnly) return !1;
        let Fe = He.nextMatch(Me, Ke, Ke);
        if (!Fe) return !1;
        let Je, oe, Re = Fe,
          ke = [],
          qe = [];
        Re.from == Ke && Re.to == Ue && (oe = Me.toText(He.getReplacement(Re)), ke.push({
          from: Re.from,
          to: Re.to,
          insert: oe
        }), Re = He.nextMatch(Me, Re.from, Re.to), qe.push(ye.i.announce.of(Me.phrase("replaced match on line $", Me.doc.lineAt(Ke).number) + ".")));
        let fe = ee.state.changes(ke);
        return Re && (Je = be.k.single(Re.from, Re.to).map(fe), qe.push(bi(ee, Re)), qe.push(Me.facet(de).scrollToMatch(Je.main, ee))), ee.dispatch({
          changes: fe,
          selection: Je,
          effects: qe,
          userEvent: "input.replace"
        }), !0
      })),
      je = ue(((ee, ie) => {
        let {
          query: He
        } = ie;
        if (ee.state.readOnly) return !1;
        let be = He.matchAll(ee.state, 1e9).map((ee => {
          let {
            from: ie,
            to: ye
          } = ee;
          return {
            from: ie,
            to: ye,
            insert: He.getReplacement(ee)
          }
        }));
        if (!be.length) return !1;
        let Me = ee.state.phrase("replaced $ matches", be.length) + ".";
        return ee.dispatch({
          changes: be,
          effects: ye.i.announce.of(Me),
          userEvent: "input.replace.all"
        }), !0
      }));

    function se(ee) {
      return ee.state.facet(de).createPanel(ee)
    }

    function Ie(ee, ie) {
      var He, ye, be, Me, Ke;
      let Ue = ee.selection.main,
        Fe = Ue.empty || Ue.to > Ue.from + 100 ? "" : ee.sliceDoc(Ue.from, Ue.to);
      if (ie && !Fe) return ie;
      let Je = ee.facet(de);
      return new We({
        search: (null !== (He = null === ie || void 0 === ie ? void 0 : ie.literal) && void 0 !== He ? He : Je.literal) ? Fe : Fe.replace(/\n/g, "\\n"),
        caseSensitive: null !== (ye = null === ie || void 0 === ie ? void 0 : ie.caseSensitive) && void 0 !== ye ? ye : Je.caseSensitive,
        literal: null !== (be = null === ie || void 0 === ie ? void 0 : ie.literal) && void 0 !== be ? be : Je.literal,
        regexp: null !== (Me = null === ie || void 0 === ie ? void 0 : ie.regexp) && void 0 !== Me ? Me : Je.regexp,
        wholeWord: null !== (Ke = null === ie || void 0 === ie ? void 0 : ie.wholeWord) && void 0 !== Ke ? Ke : Je.wholeWord
      })
    }

    function he(ee) {
      let ie = (0, ye.w)(ee, se);
      return ie && ie.dom.querySelector("[main-field]")
    }

    function Ne(ee) {
      let ie = he(ee);
      ie && ie == ee.root.activeElement && ie.select()
    }
    const Ge = ee => {
        let ie = ee.state.field(ce, !1);
        if (ie && ie.panel) {
          let He = he(ee);
          if (He && He != ee.root.activeElement) {
            let ye = Ie(ee.state, ie.query.spec);
            ye.valid && ee.dispatch({
              effects: Ve.of(ye)
            }), He.focus(), He.select()
          }
        } else ee.dispatch({
          effects: [ae.of(!0), ie ? Ve.of(Ie(ee.state, ie.query.spec)) : be.K.appendConfig.of(Ki)]
        });
        return !0
      },
      re = ee => {
        let ie = ee.state.field(ce, !1);
        if (!ie || !ie.panel) return !1;
        let He = (0, ye.w)(ee, se);
        return He && He.dom.contains(ee.root.activeElement) && ee.focus(), ee.dispatch({
          effects: ae.of(!1)
        }), !0
      },
      Qe = [{
        key: "Mod-f",
        run: Ge,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: me,
        shift: le,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: me,
        shift: le,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: re,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee, ye = ie.selection;
          if (ye.zp.length > 1 || ye.main.empty) return !1;
          let {
            from: Me,
            to: Ke
          } = ye.main, Fe = [], Je = 0;
          for (let oe = new Ue(ie.doc, ie.sliceDoc(Me, Ke)); !oe.next().done;) {
            if (Fe.length > 1e3) return !1;
            oe.value.from == Me && (Je = Fe.length), Fe.push(be.k.range(oe.value.from, oe.value.to))
          }
          return He(ie.update({
            selection: be.k.create(Fe, Je),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: ee => {
          let {
            state: ie
          } = ee, He = String(ie.doc.lineAt(ee.state.selection.main.head).number), {
            close: Me,
            result: Ke
          } = (0, ye.cb)(ee, {
            label: ie.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: He
            },
            focus: !0,
            submitLabel: ie.phrase("go")
          });
          return Ke.then((He => {
            let Ke = He && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(He.elements.line.value);
            if (!Ke) return void ee.dispatch({
              effects: Me
            });
            let Ue = ie.doc.lineAt(ie.selection.main.head),
              [, Fe, Je, oe, Re] = Ke,
              ke = oe ? +oe.slice(1) : 0,
              qe = Je ? +Je : Ue.number;
            if (Je && Re) {
              let ee = qe / 100;
              Fe && (ee = ee * ("-" == Fe ? -1 : 1) + Ue.number / ie.doc.lines), qe = Math.round(ie.doc.lines * ee)
            } else Je && Fe && (qe = qe * ("-" == Fe ? -1 : 1) + Ue.number);
            let fe = ie.doc.line(Math.max(1, Math.min(ie.doc.lines, qe))),
              Te = be.k.cursor(fe.from + Math.max(0, Math.min(ke, fe.length)));
            ee.dispatch({
              effects: [Me, ye.i.scrollIntoView(Te.from, {
                y: "center"
              })],
              selection: Te
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee, {
            zp: Me
          } = ie.selection;
          if (Me.some((ee => ee.from === ee.to))) return (ee => {
            let {
              state: ie,
              dispatch: He
            } = ee, {
              selection: ye
            } = ie, Me = be.k.create(ye.zp.map((ee => ie.wordAt(ee.head) || be.k.cursor(ee.head))), ye.mainIndex);
            return !Me.eq(ye) && (He(ie.update({
              selection: Me
            })), !0)
          })({
            state: ie,
            dispatch: He
          });
          let Ke = ie.sliceDoc(Me[0].from, Me[0].to);
          if (ie.selection.zp.some((ee => ie.sliceDoc(ee.from, ee.to) != Ke))) return !1;
          let Fe = function(ee, ie) {
            let {
              main: He,
              zp: ye
            } = ee.selection, be = ee.wordAt(He.head), Me = be && be.from == He.from && be.to == He.to;
            for (let Ke = !1, Fe = new Ue(ee.doc, ie, ye[ye.length - 1].to);;) {
              if (Fe.next(), !Fe.done) {
                if (Ke && ye.some((ee => ee.from == Fe.value.from))) continue;
                if (Me) {
                  let ie = ee.wordAt(Fe.value.from);
                  if (!ie || ie.from != Fe.value.from || ie.to != Fe.value.to) continue
                }
                return Fe.value
              }
              if (Ke) return null;
              Fe = new Ue(ee.doc, ie, 0, Math.max(0, ye[ye.length - 1].from - 1)), Ke = !0
            }
          }(ie, Ke);
          return !!Fe && (He(ie.update({
            selection: ie.selection.addRange(be.k.range(Fe.from, Fe.to), !1),
            effects: ye.i.scrollIntoView(Fe.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class ei {
      constructor(ee) {
        this.view = ee;
        let ie = this.query = ee.state.field(ce).query.spec;

        function He(ee, ie, He) {
          return (0, Me.e)("button", {
            class: "cm-button",
            name: ee,
            onclick: ie,
            type: "button"
          }, He)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, Me.e)("input", {
          value: ie.search,
          placeholder: ii(ee, "Find"),
          "aria-label": ii(ee, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, Me.e)("input", {
          value: ie.replace,
          placeholder: ii(ee, "Replace"),
          "aria-label": ii(ee, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, Me.e)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: ie.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, Me.e)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: ie.regexp,
          onchange: this.commit
        }), this.wordField = (0, Me.e)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: ie.wholeWord,
          onchange: this.commit
        }), this.dom = (0, Me.e)("div", {
          onkeydown: ee => this.keydown(ee),
          class: "cm-search"
        }, [this.searchField, He("next", (() => me(ee)), [ii(ee, "next")]), He("prev", (() => le(ee)), [ii(ee, "previous")]), He("select", (() => Se(ee)), [ii(ee, "all")]), (0, Me.e)("label", null, [this.caseField, ii(ee, "match case")]), (0, Me.e)("label", null, [this.reField, ii(ee, "regexp")]), (0, Me.e)("label", null, [this.wordField, ii(ee, "by word")]), ...ee.state.readOnly ? [] : [(0, Me.e)("br"), this.replaceField, He("replace", (() => ne(ee)), [ii(ee, "replace")]), He("replaceAll", (() => je(ee)), [ii(ee, "replace all")])], (0, Me.e)("button", {
          name: "close",
          onclick: () => re(ee),
          "aria-label": ii(ee, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let ee = new We({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        ee.eq(this.query) || (this.query = ee, this.view.dispatch({
          effects: Ve.of(ee)
        }))
      }
      keydown(ee) {
        (0, ye._)(this.view, ee, "search-panel") ? ee.preventDefault(): 13 == ee.keyCode && ee.target == this.searchField ? (ee.preventDefault(), (ee.shiftKey ? le : me)(this.view)) : 13 == ee.keyCode && ee.target == this.replaceField && (ee.preventDefault(), ne(this.view))
      }
      update(ee) {
        for (let ie of ee.transactions)
          for (let ee of ie.effects) ee.is(Ve) && !ee.value.eq(this.query) && this.setQuery(ee.value)
      }
      setQuery(ee) {
        this.query = ee, this.searchField.value = ee.search, this.replaceField.value = ee.replace, this.caseField.checked = ee.caseSensitive, this.reField.checked = ee.regexp, this.wordField.checked = ee.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(de).top
      }
    }

    function ii(ee, ie) {
      return ee.state.phrase(ie)
    }
    const Hi = 30,
      yi = /[\s\.,:;?!]/;

    function bi(ee, ie) {
      let {
        from: He,
        to: be
      } = ie, Me = ee.state.doc.lineAt(He), Ke = ee.state.doc.lineAt(be).to, Ue = Math.max(Me.from, He - Hi), Fe = Math.min(Ke, be + Hi), Je = ee.state.sliceDoc(Ue, Fe);
      if (Ue != Me.from)
        for (let ye = 0; ye < Hi; ye++)
          if (!yi.test(Je[ye + 1]) && yi.test(Je[ye])) {
            Je = Je.slice(ye);
            break
          } if (Fe != Ke)
        for (let ye = Je.length - 1; ye > Je.length - Hi; ye--)
          if (!yi.test(Je[ye - 1]) && yi.test(Je[ye])) {
            Je = Je.slice(0, ye);
            break
          } return ye.i.announce.of(`${ee.state.phrase("current match")}. ${Je} ${ee.state.phrase("on line")} ${Me.number}.`)
    }
    const Mi = ye.i.baseTheme({
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
      Ki = [ce, be.x.low(ve), Mi]
  },
  44518: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ye,
      h: () => Ji,
      i: () => wb,
      k: () => UK,
      o: () => ri,
      p: () => Pe,
      s: () => AM,
      t: () => rb,
      u: () => UM,
      w: () => rM,
      y: () => hM,
      B: () => kK,
      G: () => BM,
      F: () => YK,
      J: () => TM,
      N: () => IM,
      P: () => xb,
      Q: () => wK,
      U: () => si,
      X: () => dM,
      Y: () => wM,
      _: () => vb,
      cb: () => yK,
      fb: () => HK,
      jb: () => mM
    });
    for (var ye = He(44509), be = He(44522), Me = {
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
      }, Ke = {
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
      }, Ue = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Fe = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Je = 0; Je < 10; Je++) Me[48 + Je] = Me[96 + Je] = String(Je);
    for (Je = 1; Je <= 24; Je++) Me[Je + 111] = "F" + Je;
    for (Je = 65; Je <= 90; Je++) Me[Je] = String.fromCharCode(Je + 32), Ke[Je] = String.fromCharCode(Je);
    for (var oe in Me) Ke.hasOwnProperty(oe) || (Ke[oe] = Me[oe]);
    var Re = He(44525);
    let ke = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      qe = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const fe = /Edge\/(\d+)/.exec(ke.userAgent),
      Te = /MSIE \d/.test(ke.userAgent),
      pe = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ke.userAgent),
      Xe = !!(Te || pe || fe),
      ze = !Xe && /gecko\/(\d+)/i.test(ke.userAgent),
      Be = !Xe && /Chrome\/(\d+)/.exec(ke.userAgent),
      Ee = "webkitFontSmoothing" in qe.documentElement.style,
      ge = !Xe && /Apple Computer/.test(ke.vendor),
      Oe = ge && (/Mobile\/\w+/.test(ke.userAgent) || ke.maxTouchPoints > 2);
    var de = {
      mac: Oe || /Mac/.test(ke.platform),
      windows: /Win/.test(ke.platform),
      linux: /Linux|X11/.test(ke.platform),
      ie: Xe,
      ie_version: Te ? qe.documentMode || 6 : pe ? +pe[1] : fe ? +fe[1] : 0,
      gecko: ze,
      gecko_version: ze ? +(/Firefox\/(\d+)/.exec(ke.userAgent) || [0, 0])[1] : 0,
      chrome: !!Be,
      chrome_version: Be ? +Be[1] : 0,
      ios: Oe,
      android: /Android\b/.test(ke.userAgent),
      webkit: Ee,
      webkit_version: Ee ? +(/\bAppleWebKit\/(\d+)/.exec(ke.userAgent) || [0, 0])[1] : 0,
      safari: ge,
      safari_version: ge ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(ke.userAgent) || [0, 0])[1] : 0,
      tabSize: null != qe.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function We(ee, ie) {
      for (let He in ee) "class" == He && ie.class ? ie.class += " " + ee.class : "style" == He && ie.style ? ie.style += ";" + ee.style : ie[He] = ee[He];
      return ie
    }
    const te = Object.create(null);

    function Ze(ee, ie, He) {
      if (ee == ie) return !0;
      ee || (ee = te), ie || (ie = te);
      let ye = Object.keys(ee),
        be = Object.keys(ie);
      if (ye.length - (He && ye.indexOf(He) > -1 ? 1 : 0) != be.length - (He && be.indexOf(He) > -1 ? 1 : 0)) return !1;
      for (let Me of ye)
        if (Me != He && (-1 == be.indexOf(Me) || ee[Me] !== ie[Me])) return !1;
      return !0
    }

    function we(ee, ie, He) {
      let ye = !1;
      if (ie)
        for (let be in ie) He && be in He || (ye = !0, "style" == be ? ee.style.cssText = "" : ee.removeAttribute(be));
      if (He)
        for (let be in He) ie && ie[be] == He[be] || (ye = !0, "style" == be ? ee.style.cssText = He[be] : ee.setAttribute(be, He[be]));
      return ye
    }

    function De(ee) {
      let ie = Object.create(null);
      for (let He = 0; He < ee.attributes.length; He++) {
        let ye = ee.attributes[He];
        ie[ye.name] = ye.value
      }
      return ie
    }
    class Pe {
      eq(ee) {
        return !1
      }
      updateDOM(ee, ie, He) {
        return !1
      }
      compare(ee) {
        return this == ee || this.constructor == ee.constructor && this.eq(ee)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(ee) {
        return !0
      }
      coordsAt(ee, ie, He) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(ee) {}
    }
    var Ae = function(ee) {
      return ee[ee.Text = 0] = "Text", ee[ee.WidgetBefore = 1] = "WidgetBefore", ee[ee.WidgetAfter = 2] = "WidgetAfter", ee[ee.WidgetRange = 3] = "WidgetRange", ee
    }(Ae || (Ae = {}));
    class Ye extends ye.G {
      constructor(ee, ie, He, ye) {
        super(), this.startSide = ee, this.endSide = ie, this.widget = He, this.spec = ye
      }
      get heightRelevant() {
        return !1
      }
      static mark(ee) {
        return new Ve(ee)
      }
      static widget(ee) {
        let ie = Math.max(-1e4, Math.min(1e4, ee.side || 0)),
          He = !!ee.block;
        return ie += He && !ee.inlineOrder ? ie > 0 ? 3e8 : -4e8 : ie > 0 ? 1e8 : -1e8, new ce(ee, ie, ie, He, ee.widget || null, !1)
      }
      static replace(ee) {
        let ie, He, ye = !!ee.block;
        if (ee.isBlockGap) ie = -5e8, He = 4e8;
        else {
          let {
            start: be,
            end: Me
          } = xe(ee, ye);
          ie = (be ? ye ? -3e8 : -1 : 5e8) - 1, He = 1 + (Me ? ye ? 2e8 : 1 : -6e8)
        }
        return new ce(ee, ie, He, ye, ee.widget || null, !0)
      }
      static line(ee) {
        return new ae(ee)
      }
      static set(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return ye.D.of(ee, ie)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Ye.none = ye.D.empty;
    class Ve extends Ye {
      constructor(ee) {
        let {
          start: ie,
          end: He
        } = xe(ee);
        super(ie ? -1 : 5e8, He ? 1 : -6e8, null, ee), this.tagName = ee.tagName || "span", this.attrs = ee.class && ee.attributes ? We(ee.attributes, {
          class: ee.class
        }) : ee.class ? {
          class: ee.class
        } : ee.attributes || te
      }
      eq(ee) {
        return this == ee || ee instanceof Ve && this.tagName == ee.tagName && Ze(this.attrs, ee.attrs)
      }
      range(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee;
        if (ee >= ie) throw new RangeError("Mark decorations may not be empty");
        return super.range(ee, ie)
      }
    }
    Ve.prototype.point = !1;
    class ae extends Ye {
      constructor(ee) {
        super(-2e8, -2e8, null, ee)
      }
      eq(ee) {
        return ee instanceof ae && this.spec.class == ee.spec.class && Ze(this.spec.attributes, ee.spec.attributes)
      }
      range(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee;
        if (ie != ee) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(ee, ie)
      }
    }
    ae.prototype.mapMode = ye.t.TrackBefore, ae.prototype.point = !0;
    class ce extends Ye {
      constructor(ee, ie, He, be, Me, Ke) {
        super(ie, He, Me, ee), this.block = be, this.isReplace = Ke, this.mapMode = be ? ie <= 0 ? ye.t.TrackBefore : ye.t.TrackAfter : ye.t.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Ae.WidgetRange : this.startSide <= 0 ? Ae.WidgetBefore : Ae.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(ee) {
        return ee instanceof ce && (ie = this.widget, He = ee.widget, ie == He || !!(ie && He && ie.compare(He))) && this.block == ee.block && this.startSide == ee.startSide && this.endSide == ee.endSide;
        var ie, He
      }
      range(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee;
        if (this.isReplace && (ee > ie || ee == ie && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && ie != ee) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(ee, ie)
      }
    }

    function xe(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: He,
          inclusiveEnd: ye
        } = ee;
      return null == He && (He = ee.inclusive), null == ye && (ye = ee.inclusive), {
        start: null !== He && void 0 !== He ? He : ie,
        end: null !== ye && void 0 !== ye ? ye : ie
      }
    }

    function Le(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        be = He.length - 1;
      be >= 0 && He[be] + ye >= ee ? He[be] = Math.max(He[be], ie) : He.push(ee, ie)
    }
    ce.prototype.point = !0;
    class Ce extends ye.G {
      constructor(ee, ie) {
        super(), this.tagName = ee, this.attributes = ie
      }
      eq(ee) {
        return ee == this || ee instanceof Ce && this.tagName == ee.tagName && Ze(this.attributes, ee.attributes)
      }
      static create(ee) {
        return new Ce(ee.tagName, ee.attributes || te)
      }
      static set(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return ye.D.of(ee, ie)
      }
    }

    function ve(ee) {
      let ie;
      return ie = 11 == ee.nodeType ? ee.getSelection ? ee : ee.ownerDocument : ee, ie.getSelection()
    }

    function ue(ee, ie) {
      return !!ie && (ee == ie || ee.contains(1 != ie.nodeType ? ie.parentNode : ie))
    }

    function me(ee, ie) {
      if (!ie.anchorNode) return !1;
      try {
        return ue(ee, ie.anchorNode)
      } catch (He) {
        return !1
      }
    }

    function le(ee) {
      return 3 == ee.nodeType ? yi(ee, 0, ee.nodeValue.length).getClientRects() : 1 == ee.nodeType ? ee.getClientRects() : []
    }

    function Se(ee, ie, He, ye) {
      return !!He && (se(ee, ie, He, ye, -1) || se(ee, ie, He, ye, 1))
    }

    function ne(ee) {
      for (var ie = 0;; ie++)
        if (!(ee = ee.previousSibling)) return ie
    }

    function je(ee) {
      return 1 == ee.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(ee.nodeName)
    }

    function se(ee, ie, He, ye, be) {
      for (;;) {
        if (ee == He && ie == ye) return !0;
        if (ie == (be < 0 ? 0 : Ie(ee))) {
          if ("DIV" == ee.nodeName) return !1;
          let He = ee.parentNode;
          if (!He || 1 != He.nodeType) return !1;
          ie = ne(ee) + (be < 0 ? 0 : 1), ee = He
        } else {
          if (1 != ee.nodeType) return !1;
          if (1 == (ee = ee.childNodes[ie + (be < 0 ? -1 : 0)]).nodeType && "false" == ee.contentEditable) return !1;
          ie = be < 0 ? Ie(ee) : 0
        }
      }
    }

    function Ie(ee) {
      return 3 == ee.nodeType ? ee.nodeValue.length : ee.childNodes.length
    }

    function he(ee, ie) {
      let He = ie ? ee.left : ee.right;
      return {
        left: He,
        right: He,
        top: ee.top,
        bottom: ee.bottom
      }
    }

    function Ne(ee) {
      let ie = ee.visualViewport;
      return ie ? {
        left: 0,
        right: ie.width,
        top: 0,
        bottom: ie.height
      } : {
        left: 0,
        right: ee.innerWidth,
        top: 0,
        bottom: ee.innerHeight
      }
    }

    function Ge(ee, ie) {
      let He = ie.width / ee.offsetWidth,
        ye = ie.height / ee.offsetHeight;
      return (He > .995 && He < 1.005 || !isFinite(He) || Math.abs(ie.width - ee.offsetWidth) < 1) && (He = 1), (ye > .995 && ye < 1.005 || !isFinite(ye) || Math.abs(ie.height - ee.offsetHeight) < 1) && (ye = 1), {
        scaleX: He,
        scaleY: ye
      }
    }

    function re(ee) {
      let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        He = ee.ownerDocument,
        ye = null,
        be = null;
      for (let Me = ee.parentNode; Me && (Me != He.body && (ie && !ye || !be));)
        if (1 == Me.nodeType) !be && Me.scrollHeight > Me.clientHeight && (be = Me), ie && !ye && Me.scrollWidth > Me.clientWidth && (ye = Me), Me = Me.assignedSlot || Me.parentNode;
        else {
          if (11 != Me.nodeType) break;
          Me = Me.host
        } return {
        x: ye,
        y: be
      }
    }
    Ce.prototype.startSide = Ce.prototype.endSide = -1;
    class Qe {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(ee) {
        return this.anchorNode == ee.anchorNode && this.anchorOffset == ee.anchorOffset && this.focusNode == ee.focusNode && this.focusOffset == ee.focusOffset
      }
      setRange(ee) {
        let {
          anchorNode: ie,
          focusNode: He
        } = ee;
        this.set(ie, Math.min(ee.anchorOffset, ie ? Ie(ie) : 0), He, Math.min(ee.focusOffset, He ? Ie(He) : 0))
      }
      set(ee, ie, He, ye) {
        this.anchorNode = ee, this.anchorOffset = ie, this.focusNode = He, this.focusOffset = ye
      }
    }
    let ei, ii = null;

    function Hi(ee) {
      if (ee.setActive) return ee.setActive();
      if (ii) return ee.focus(ii);
      let ie = [];
      for (let He = ee; He && (ie.push(He, He.scrollTop, He.scrollLeft), He != He.ownerDocument); He = He.parentNode);
      if (ee.focus(null == ii ? {
          get preventScroll() {
            return ii = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !ii) {
        ii = !1;
        for (let ee = 0; ee < ie.length;) {
          let He = ie[ee++],
            ye = ie[ee++],
            be = ie[ee++];
          He.scrollTop != ye && (He.scrollTop = ye), He.scrollLeft != be && (He.scrollLeft = be)
        }
      }
    }

    function yi(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ie,
        ye = ei || (ei = document.createRange());
      return ye.setEnd(ee, He), ye.setStart(ee, ie), ye
    }

    function bi(ee, ie, He, ye) {
      let be = {
        key: ie,
        code: ie,
        keyCode: He,
        which: He,
        cancelable: !0
      };
      ye && ({
        altKey: be.altKey,
        ctrlKey: be.ctrlKey,
        shiftKey: be.shiftKey,
        metaKey: be.metaKey
      } = ye);
      let Me = new KeyboardEvent("keydown", be);
      Me.synthetic = !0, ee.dispatchEvent(Me);
      let Ke = new KeyboardEvent("keyup", be);
      return Ke.synthetic = !0, ee.dispatchEvent(Ke), Me.defaultPrevented || Ke.defaultPrevented
    }

    function Mi(ee) {
      return ee instanceof Window ? ee.pageYOffset > Math.max(0, ee.document.documentElement.scrollHeight - ee.innerHeight - 4) : ee.scrollTop > Math.max(1, ee.scrollHeight - ee.clientHeight - 4)
    }

    function Ki(ee, ie) {
      for (let He = ee, ye = ie;;) {
        if (3 == He.nodeType && ye > 0) return {
          node: He,
          offset: ye
        };
        if (1 == He.nodeType && ye > 0) {
          if ("false" == He.contentEditable) return null;
          He = He.childNodes[ye - 1], ye = Ie(He)
        } else {
          if (!He.parentNode || je(He)) return null;
          ye = ne(He), He = He.parentNode
        }
      }
    }

    function Ui(ee, ie) {
      for (let He = ee, ye = ie;;) {
        if (3 == He.nodeType && ye < He.nodeValue.length) return {
          node: He,
          offset: ye
        };
        if (1 == He.nodeType && ye < He.childNodes.length) {
          if ("false" == He.contentEditable) return null;
          He = He.childNodes[ye], ye = 0
        } else {
          if (!He.parentNode || je(He)) return null;
          ye = ne(He) + 1, He = He.parentNode
        }
      }
    }
    de.safari && de.safari_version >= 26 && (ii = !1);
    class Fi {
      constructor(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = ee, this.offset = ie, this.precise = He
      }
      static before(ee, ie) {
        return new Fi(ee.parentNode, ne(ee), ie)
      }
      static after(ee, ie) {
        return new Fi(ee.parentNode, ne(ee) + 1, ie)
      }
    }
    var Ji = function(ee) {
      return ee[ee.LTR = 0] = "LTR", ee[ee.RTL = 1] = "RTL", ee
    }(Ji || (Ji = {}));
    const oi = Ji.LTR,
      Ri = Ji.RTL;

    function ki(ee) {
      let ie = [];
      for (let He = 0; He < ee.length; He++) ie.push(1 << +ee[He]);
      return ie
    }
    const qi = ki("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      fi = ki("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      Ti = Object.create(null),
      Xi = [];
    for (let VK of ["()", "[]", "{}"]) {
      let ee = VK.charCodeAt(0),
        ie = VK.charCodeAt(1);
      Ti[ee] = ie, Ti[ie] = -ee
    }

    function zi(ee) {
      return ee <= 247 ? qi[ee] : 1424 <= ee && ee <= 1524 ? 2 : 1536 <= ee && ee <= 1785 ? fi[ee - 1536] : 1774 <= ee && ee <= 2220 ? 4 : 8192 <= ee && ee <= 8204 ? 256 : 64336 <= ee && ee <= 65023 ? 4 : 1
    }
    const Bi = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Ei {
      get dir() {
        return this.level % 2 ? Ri : oi
      }
      constructor(ee, ie, He) {
        this.from = ee, this.to = ie, this.level = He
      }
      side(ee, ie) {
        return this.dir == ie == ee ? this.to : this.from
      }
      forward(ee, ie) {
        return ee == (this.dir == ie)
      }
      static find(ee, ie, He, ye) {
        let be = -1;
        for (let Me = 0; Me < ee.length; Me++) {
          let Ke = ee[Me];
          if (Ke.from <= ie && Ke.to >= ie) {
            if (Ke.level == He) return Me;
            (be < 0 || (0 != ye ? ye < 0 ? Ke.from < ie : Ke.to > ie : ee[be].level > Ke.level)) && (be = Me)
          }
        }
        if (be < 0) throw new RangeError("Index out of range");
        return be
      }
    }

    function gi(ee, ie) {
      if (ee.length != ie.length) return !1;
      for (let He = 0; He < ee.length; He++) {
        let ye = ee[He],
          be = ie[He];
        if (ye.from != be.from || ye.to != be.to || ye.direction != be.direction || !gi(ye.inner, be.inner)) return !1
      }
      return !0
    }
    const Oi = [];

    function di(ee, ie, He, ye, be, Me, Ke) {
      let Ue = ye % 2 ? 2 : 1;
      if (ye % 2 == be % 2)
        for (let Fe = ie, Je = 0; Fe < He;) {
          let ie = !0,
            oe = !1;
          if (Je == Me.length || Fe < Me[Je].from) {
            let ee = Oi[Fe];
            ee != Ue && (ie = !1, oe = 16 == ee)
          }
          let Re = ie || 1 != Ue ? null : [],
            ke = ie ? ye : ye + 1,
            qe = Fe;
          ee: for (;;)
            if (Je < Me.length && qe == Me[Je].from) {
              if (oe) break ee;
              let fe = Me[Je];
              if (!ie)
                for (let ee = fe.to, ie = Je + 1;;) {
                  if (ee == He) break ee;
                  if (!(ie < Me.length && Me[ie].from == ee)) {
                    if (Oi[ee] == Ue) break ee;
                    break
                  }
                  ee = Me[ie++].to
                }
              if (Je++, Re) Re.push(fe);
              else {
                fe.from > Fe && Ke.push(new Ei(Fe, fe.from, ke)), Wi(ee, fe.direction == oi != !(ke % 2) ? ye + 1 : ye, be, fe.inner, fe.from, fe.to, Ke), Fe = fe.to
              }
              qe = fe.to
            } else {
              if (qe == He || (ie ? Oi[qe] != Ue : Oi[qe] == Ue)) break;
              qe++
            } Re ? di(ee, Fe, qe, ye + 1, be, Re, Ke) : Fe < qe && Ke.push(new Ei(Fe, qe, ke)), Fe = qe
        } else
          for (let Fe = He, Je = Me.length; Fe > ie;) {
            let He = !0,
              oe = !1;
            if (!Je || Fe > Me[Je - 1].to) {
              let ee = Oi[Fe - 1];
              ee != Ue && (He = !1, oe = 16 == ee)
            }
            let Re = He || 1 != Ue ? null : [],
              ke = He ? ye : ye + 1,
              qe = Fe;
            ee: for (;;)
              if (Je && qe == Me[Je - 1].to) {
                if (oe) break ee;
                let fe = Me[--Je];
                if (!He)
                  for (let ee = fe.from, He = Je;;) {
                    if (ee == ie) break ee;
                    if (!He || Me[He - 1].to != ee) {
                      if (Oi[ee - 1] == Ue) break ee;
                      break
                    }
                    ee = Me[--He].from
                  }
                if (Re) Re.push(fe);
                else {
                  fe.to < Fe && Ke.push(new Ei(fe.to, Fe, ke)), Wi(ee, fe.direction == oi != !(ke % 2) ? ye + 1 : ye, be, fe.inner, fe.from, fe.to, Ke), Fe = fe.from
                }
                qe = fe.from
              } else {
                if (qe == ie || (He ? Oi[qe - 1] != Ue : Oi[qe - 1] == Ue)) break;
                qe--
              } Re ? di(ee, qe, Fe, ye + 1, be, Re, Ke) : qe < Fe && Ke.push(new Ei(qe, Fe, ke)), Fe = qe
          }
    }

    function Wi(ee, ie, He, ye, be, Me, Ke) {
      let Ue = ie % 2 ? 2 : 1;
      ! function(ee, ie, He, ye, be) {
        for (let Me = 0; Me <= ye.length; Me++) {
          let Ke = Me ? ye[Me - 1].to : ie,
            Ue = Me < ye.length ? ye[Me].from : He,
            Fe = Me ? 256 : be;
          for (let ie = Ke, He = Fe, ye = Fe; ie < Ue; ie++) {
            let be = zi(ee.charCodeAt(ie));
            512 == be ? be = He : 8 == be && 4 == ye && (be = 16), Oi[ie] = 4 == be ? 2 : be, 7 & be && (ye = be), He = be
          }
          for (let ee = Ke, ie = Fe, ye = Fe; ee < Ue; ee++) {
            let be = Oi[ee];
            if (128 == be) ee < Ue - 1 && ie == Oi[ee + 1] && 24 & ie ? be = Oi[ee] = ie : Oi[ee] = 256;
            else if (64 == be) {
              let be = ee + 1;
              for (; be < Ue && 64 == Oi[be];) be++;
              let Me = ee && 8 == ie || be < He && 8 == Oi[be] ? 1 == ye ? 1 : 8 : 256;
              for (let ie = ee; ie < be; ie++) Oi[ie] = Me;
              ee = be - 1
            } else 8 == be && 1 == ye && (Oi[ee] = 1);
            ie = be, 7 & be && (ye = be)
          }
        }
      }(ee, be, Me, ye, Ue),
      function(ee, ie, He, ye, be) {
        let Me = 1 == be ? 2 : 1;
        for (let Ke = 0, Ue = 0, Fe = 0; Ke <= ye.length; Ke++) {
          let Je = Ke ? ye[Ke - 1].to : ie,
            oe = Ke < ye.length ? ye[Ke].from : He;
          for (let ie, He, ye, Ke = Je; Ke < oe; Ke++)
            if (He = Ti[ie = ee.charCodeAt(Ke)])
              if (He < 0) {
                for (let ee = Ue - 3; ee >= 0; ee -= 3)
                  if (Xi[ee + 1] == -He) {
                    let ie = Xi[ee + 2],
                      He = 2 & ie ? be : 4 & ie ? 1 & ie ? Me : be : 0;
                    He && (Oi[Ke] = Oi[Xi[ee]] = He), Ue = ee;
                    break
                  }
              } else {
                if (189 == Xi.length) break;
                Xi[Ue++] = Ke, Xi[Ue++] = ie, Xi[Ue++] = Fe
              }
          else if (2 == (ye = Oi[Ke]) || 1 == ye) {
            let ee = ye == be;
            Fe = ee ? 0 : 1;
            for (let ie = Ue - 3; ie >= 0; ie -= 3) {
              let He = Xi[ie + 2];
              if (2 & He) break;
              if (ee) Xi[ie + 2] |= 2;
              else {
                if (4 & He) break;
                Xi[ie + 2] |= 4
              }
            }
          }
        }
      }(ee, be, Me, ye, Ue),
      function(ee, ie, He, ye) {
        for (let be = 0, Me = ye; be <= He.length; be++) {
          let Ke = be ? He[be - 1].to : ee,
            Ue = be < He.length ? He[be].from : ie;
          for (let Fe = Ke; Fe < Ue;) {
            let Ke = Oi[Fe];
            if (256 == Ke) {
              let Ke = Fe + 1;
              for (;;)
                if (Ke == Ue) {
                  if (be == He.length) break;
                  Ke = He[be++].to, Ue = be < He.length ? He[be].from : ie
                } else {
                  if (256 != Oi[Ke]) break;
                  Ke++
                } let Je = 1 == Me,
                oe = Je == (1 == (Ke < ie ? Oi[Ke] : ye)) ? Je ? 1 : 2 : ye;
              for (let ie = Ke, ye = be, Me = ye ? He[ye - 1].to : ee; ie > Fe;) ie == Me && (ie = He[--ye].from, Me = ye ? He[ye - 1].to : ee), Oi[--ie] = oe;
              Fe = Ke
            } else Me = Ke, Fe++
          }
        }
      }(be, Me, ye, Ue), di(ee, be, Me, ie, He, ye, Ke)
    }

    function ti(ee, ie, He) {
      if (!ee) return [new Ei(0, 0, ie == Ri ? 1 : 0)];
      if (ie == oi && !He.length && !Bi.test(ee)) return Zi(ee.length);
      if (He.length)
        for (; ee.length > Oi.length;) Oi[Oi.length] = 256;
      let ye = [],
        be = ie == oi ? 0 : 1;
      return Wi(ee, be, be, He, 0, ee.length, ye), ye
    }

    function Zi(ee) {
      return [new Ei(0, ee, 0)]
    }
    let wi = "";

    function Di(ee, ie, He, be, Me) {
      var Ke;
      let Ue = be.head - ee.from,
        Fe = Ei.find(ie, Ue, null !== (Ke = be.bidiLevel) && void 0 !== Ke ? Ke : -1, be.assoc),
        Je = ie[Fe],
        oe = Je.side(Me, He);
      if (Ue == oe) {
        let ee = Fe += Me ? 1 : -1;
        if (ee < 0 || ee >= ie.length) return null;
        Je = ie[Fe = ee], Ue = Je.side(!Me, He), oe = Je.side(Me, He)
      }
      let Re = (0, ye.kb)(ee.text, Ue, Je.forward(Me, He));
      (Re < Je.from || Re > Je.to) && (Re = oe), wi = ee.text.slice(Math.min(Ue, Re), Math.max(Ue, Re));
      let ke = Fe == (Me ? ie.length - 1 : 0) ? null : ie[Fe + (Me ? 1 : -1)];
      return ke && Re == oe && ke.level + (Me ? 0 : 1) < Je.level ? ye.k.cursor(ke.side(!Me, He) + ee.from, ke.forward(Me, He) ? 1 : -1, ke.level) : ye.k.cursor(Re + ee.from, Je.forward(Me, He) ? -1 : 1, Je.level)
    }

    function Pi(ee, ie, He) {
      for (let ye = ie; ye < He; ye++) {
        let ie = zi(ee.charCodeAt(ye));
        if (1 == ie) return oi;
        if (2 == ie || 4 == ie) return Ri
      }
      return oi
    }
    const Ai = ye.q.define(),
      Yi = ye.q.define(),
      Vi = ye.q.define(),
      ai = ye.q.define(),
      ci = ye.q.define(),
      xi = ye.q.define(),
      Li = ye.q.define(),
      Ci = ye.q.define(),
      vi = ye.q.define(),
      ui = ye.q.define({
        combine: ee => ee.some((ee => ee))
      }),
      mi = ye.q.define({
        combine: ee => ee.some((ee => ee))
      }),
      li = ye.q.define();
    class Si {
      constructor(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = ee, this.y = ie, this.x = He, this.yMargin = ye, this.xMargin = be, this.isSnapshot = Me
      }
      map(ee) {
        return ee.empty ? this : new Si(this.range.map(ee), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(ee) {
        return this.range.to <= ee.doc.length ? this : new Si(ye.k.cursor(ee.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const ni = ye.K.define({
        map: (ee, ie) => ee.map(ie)
      }),
      ji = ye.K.define();

    function si(ee, ie, He) {
      let ye = ee.facet(ai);
      ye.length ? ye[0](ie) : window.onerror && window.onerror(String(ie), He, void 0, void 0, ie) || (He ? console.error(He + ":", ie) : console.error(ie))
    }
    const Ii = ye.q.define({
      combine: ee => !ee.length || ee[0]
    });
    let Ni = 0;
    const Gi = ye.q.define({
      combine: ee => ee.filter(((ie, He) => {
        for (let ye = 0; ye < He; ye++)
          if (ee[ye].plugin == ie.plugin) return !1;
        return !0
      }))
    });
    class ri {
      constructor(ee, ie, He, ye, be) {
        this.id = ee, this.create = ie, this.domEventHandlers = He, this.domEventObservers = ye, this.baseExtensions = be(this), this.extension = this.baseExtensions.concat(Gi.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(ee) {
        return this.baseExtensions.concat(Gi.of({
          plugin: this,
          arg: ee
        }))
      }
      static define(ee, ie) {
        const {
          eventHandlers: He,
          eventObservers: ye,
          provide: be,
          MM: Me
        } = ie || {};
        return new ri(Ni++, ee, He, ye, (ee => {
          let ie = [];
          return Me && ie.push(HH.of((ie => {
            let He = ie.plugin(ee);
            return He ? Me(He) : Ye.none
          }))), be && ie.push(be(ee)), ie
        }))
      }
      static fromClass(ee, ie) {
        return ri.define(((ie, He) => new ee(ie, He)), ie)
      }
    }
    class Qi {
      constructor(ee) {
        this.spec = ee, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(ee) {
        if (this.value) {
          if (this.mustUpdate) {
            let ee = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(ee)
            } catch (ie) {
              if (si(ee.state, ie, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (He) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(ee, this.spec.arg)
        } catch (ie) {
          si(ee.state, ie, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(ee) {
        var ie;
        if (null === (ie = this.value) || void 0 === ie ? void 0 : ie.destroy) try {
          this.value.destroy()
        } catch (He) {
          si(ee.state, He, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const eH = ye.q.define(),
      iH = ye.q.define(),
      HH = ye.q.define(),
      yH = ye.q.define(),
      bH = ye.q.define(),
      MH = ye.q.define(),
      KH = ye.q.define();

    function UH(ee, ie) {
      let He = ee.state.facet(KH);
      if (!He.length) return He;
      let be = He.map((ie => ie instanceof Function ? ie(ee) : ie)),
        Me = [];
      return ye.D.spans(be, ie.from, ie.to, {
        point() {},
        span(ee, He, ye, be) {
          let Ke = ee - ie.from,
            Ue = He - ie.from,
            Fe = Me;
          for (let Me = ye.length - 1; Me >= 0; Me--, be--) {
            let ee, He = ye[Me].spec.bidiIsolate;
            if (null == He && (He = Pi(ie.text, Ke, Ue)), be > 0 && Fe.length && (ee = Fe[Fe.length - 1]).to == Ke && ee.direction == He) ee.to = Ue, Fe = ee.inner;
            else {
              let ee = {
                from: Ke,
                to: Ue,
                direction: He,
                inner: []
              };
              Fe.push(ee), Fe = ee.inner
            }
          }
        }
      }), Me
    }
    const FH = ye.q.define();

    function JH(ee) {
      let ie = 0,
        He = 0,
        ye = 0,
        be = 0;
      for (let Me of ee.state.facet(FH)) {
        let Ke = Me(ee);
        Ke && (null != Ke.left && (ie = Math.max(ie, Ke.left)), null != Ke.right && (He = Math.max(He, Ke.right)), null != Ke.top && (ye = Math.max(ye, Ke.top)), null != Ke.bottom && (be = Math.max(be, Ke.bottom)))
      }
      return {
        left: ie,
        right: He,
        top: ye,
        bottom: be
      }
    }
    const oH = ye.q.define();
    class RH {
      constructor(ee, ie, He, ye) {
        this.fromA = ee, this.toA = ie, this.fromB = He, this.toB = ye
      }
      join(ee) {
        return new RH(Math.min(this.fromA, ee.fromA), Math.max(this.toA, ee.toA), Math.min(this.fromB, ee.fromB), Math.max(this.toB, ee.toB))
      }
      addToSet(ee) {
        let ie = ee.length,
          He = this;
        for (; ie > 0; ie--) {
          let ye = ee[ie - 1];
          if (!(ye.fromA > He.toA)) {
            if (ye.toA < He.fromA) break;
            He = He.join(ye), ee.splice(ie - 1, 1)
          }
        }
        return ee.splice(ie, 0, He), ee
      }
      static extendWithRanges(ee, ie) {
        if (0 == ie.length) return ee;
        let He = [];
        for (let ye = 0, be = 0, Me = 0;;) {
          let Ke = ye < ee.length ? ee[ye].fromB : 1e9,
            Ue = be < ie.length ? ie[be] : 1e9,
            Fe = Math.min(Ke, Ue);
          if (1e9 == Fe) break;
          let Je = Fe + Me,
            oe = Fe,
            Re = Je;
          for (;;)
            if (be < ie.length && ie[be] <= oe) {
              let He = ie[be + 1];
              be += 2, oe = Math.max(oe, He);
              for (let ie = ye; ie < ee.length && ee[ie].fromB <= oe; ie++) Me = ee[ie].toA - ee[ie].toB;
              Re = Math.max(Re, He + Me)
            } else {
              if (!(ye < ee.length && ee[ye].fromB <= oe)) break;
              {
                let ie = ee[ye++];
                oe = Math.max(oe, ie.toB), Re = Math.max(Re, ie.toA), Me = ie.toA - ie.toB
              }
            } He.push(new RH(Je, Re, Fe, oe))
        }
        return He
      }
    }
    class kH {
      constructor(ee, ie, He) {
        this.view = ee, this.state = ie, this.transactions = He, this.flags = 0, this.startState = ee.state, this.changes = ye.ChangeSet.empty(this.startState.doc.length);
        for (let ye of He) this.changes = this.changes.compose(ye.changes);
        let be = [];
        this.changes.iterChangedRanges(((ee, ie, He, ye) => be.push(new RH(ee, ie, He, ye)))), this.changedRanges = be
      }
      static create(ee, ie, He) {
        return new kH(ee, ie, He)
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
        return this.transactions.some((ee => ee.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const qH = [];
    class fH {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = ee, this.length = ie, this.flags = He, this.parent = null, ee.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return qH
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
      sync(ee) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let ee = this.domAttrs;
          ee && function(ee, ie) {
            for (let He = ee.attributes.length - 1; He >= 0; He--) {
              let ye = ee.attributes[He].name;
              null == ie[ye] && ee.removeAttribute(ye)
            }
            for (let He in ie) {
              let ye = ie[He];
              "style" == He ? ee.style.cssText = ye : ee.getAttribute(He) != ye && ee.setAttribute(He, ye)
            }
          }(this.dom, ee)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(ee) {
        this.dom = ee, ee.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let He of this.children) {
          if (He == ee) return ie;
          ie += He.length + He.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(ee) {
        return this.posBefore(ee) + ee.length
      }
      covers(ee) {
        return !0
      }
      coordsIn(ee, ie) {
        return null
      }
      domPosFor(ee, ie) {
        let He = ne(this.dom),
          ye = this.length ? ee > 0 : ie > 0;
        return new Fi(this.parent.dom, He + (ye ? 1 : 0), 0 == ee || ee == this.length)
      }
      markDirty(ee) {
        this.flags &= -3, ee && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let ee = this; ee; ee = ee.parent)
          if (ee instanceof XH) return ee;
        return null
      }
      static get(ee) {
        return ee.cmTile
      }
    }
    class TH extends fH {
      constructor(ee) {
        super(ee, 0), this._children = []
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
      append(ee) {
        this.children.push(ee), ee.parent = this
      }
      sync(ee) {
        if (2 & this.flags) return;
        super.sync(ee);
        let ie, He = this.dom,
          ye = null,
          be = (null === ee || void 0 === ee ? void 0 : ee.node) == He ? ee : null,
          Me = 0;
        for (let Ke of this.children) {
          if (Ke.sync(ee), Me += Ke.length + Ke.breakAfter, ie = ye ? ye.nextSibling : He.firstChild, be && ie != Ke.dom && (be.written = !0), Ke.dom.parentNode == He)
            for (; ie && ie != Ke.dom;) ie = pH(ie);
          else He.insertBefore(Ke.dom, ie);
          ye = Ke.dom
        }
        for (ie = ye ? ye.nextSibling : He.firstChild, be && ie && (be.written = !0); ie;) ie = pH(ie);
        this.length = Me
      }
    }

    function pH(ee) {
      let ie = ee.nextSibling;
      return ee.parentNode.removeChild(ee), ie
    }
    class XH extends TH {
      constructor(ee, ie) {
        super(ie), this.view = ee
      }
      owns(ee) {
        for (; ee; ee = ee.parent)
          if (ee == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(ee) {
        for (;;) {
          if (!ee) return null;
          let ie = fH.get(ee);
          if (ie && this.owns(ie)) return ie;
          ee = ee.parentNode
        }
      }
      blockTiles(ee) {
        for (let ie = [], He = this, ye = 0, be = 0;;)
          if (ye == He.children.length) {
            if (!ie.length) return;
            He = He.parent, He.breakAfter && be++, ye = ie.pop()
          } else {
            let Me = He.children[ye++];
            if (Me instanceof zH) ie.push(ye), He = Me, ye = 0;
            else {
              let ie = be + Me.length,
                He = ee(Me, be);
              if (void 0 !== He) return He;
              be = ie + Me.breakAfter
            }
          }
      }
      resolveBlock(ee, ie) {
        let He, ye, be = -1,
          Me = -1;
        if (this.blockTiles(((Ke, Ue) => {
            let Fe = Ue + Ke.length;
            if (ee >= Ue && ee <= Fe) {
              if (Ke.isWidget() && ie >= -1 && ie <= 1) {
                if (32 & Ke.flags) return !0;
                16 & Ke.flags && (He = void 0)
              }(Ue < ee || ee == Fe && (ie < -1 ? Ke.length : Ke.covers(1))) && (!He || !Ke.isWidget() && He.isWidget()) && (He = Ke, be = ee - Ue), (Fe > ee || ee == Ue && (ie > 1 ? Ke.length : Ke.covers(-1))) && (!ye || !Ke.isWidget() && ye.isWidget()) && (ye = Ke, Me = ee - Ue)
            }
          })), !He && !ye) throw new Error("No tile at position " + ee);
        return He && ie < 0 || !ye ? {
          tile: He,
          offset: be
        } : {
          tile: ye,
          offset: Me
        }
      }
    }
    class zH extends TH {
      constructor(ee, ie) {
        super(ee), this.wrapper = ie
      }
      isBlock() {
        return !0
      }
      covers(ee) {
        return !!this.children.length && (ee < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (ee, ie) {
        let He = new zH(ie || document.createElement(ee.tagName), ee);
        return ie || (He.flags |= 4), He
      }
    }
    class BH extends TH {
      constructor(ee, ie) {
        super(ee), this.attrs = ie
      }
      isLine() {
        return !0
      }
      static start(ee, ie, He) {
        let ye = new BH(ie || document.createElement("div"), ee);
        return ie && He || (ye.flags |= 4), ye
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(ee, ie, He) {
        let ye = null,
          be = -1,
          Me = null,
          Ke = -1;
        ! function ee(Ue, Fe) {
          for (let Je = 0, oe = 0; Je < Ue.children.length && oe <= Fe; Je++) {
            let Re = Ue.children[Je],
              ke = oe + Re.length;
            ke >= Fe && (Re.isComposite() ? ee(Re, Fe - oe) : (!Me || Me.isHidden && (ie > 0 || He && EH(Me, Re))) && (ke > Fe || 32 & Re.flags) ? (Me = Re, Ke = Fe - oe) : (oe < Fe || 16 & Re.flags && !Re.isHidden) && (ye = Re, be = Fe - oe)), oe = ke
          }
        }(this, ee);
        let Ue = (ie < 0 ? ye : Me) || ye || Me;
        return Ue ? {
          tile: Ue,
          offset: Ue == ye ? be : Ke
        } : null
      }
      coordsIn(ee, ie) {
        let He = this.resolveInline(ee, ie, !0);
        return He ? He.tile.coordsIn(Math.max(0, He.offset), ie) : function(ee) {
          let ie = ee.dom.lastChild;
          if (!ie) return ee.dom.getBoundingClientRect();
          let He = le(ie);
          return He[He.length - 1] || null
        }(this)
      }
      domIn(ee, ie) {
        let He = this.resolveInline(ee, ie);
        if (He) {
          let {
            tile: ee,
            offset: ye
          } = He;
          if (this.dom.contains(ee.dom)) return ee.isText() ? new Fi(ee.dom, Math.min(ee.dom.nodeValue.length, ye)) : ee.domPosFor(ye, 16 & ee.flags ? 1 : 32 & ee.flags ? -1 : ie);
          let be = He.tile.parent,
            Me = !1;
          for (let ie of be.children) {
            if (Me) return new Fi(ie.dom, 0);
            ie == He.tile && (Me = !0)
          }
        }
        return new Fi(this.dom, 0)
      }
    }

    function EH(ee, ie) {
      let He = ee.coordsIn(0, 1),
        ye = ie.coordsIn(0, 1);
      return He && ye && ye.top < He.bottom
    }
    class gH extends TH {
      constructor(ee, ie) {
        super(ee), this.mark = ie
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (ee, ie) {
        let He = new gH(ie || document.createElement(ee.tagName), ee);
        return ie || (He.flags |= 4), He
      }
    }
    class OH extends fH {
      constructor(ee, ie) {
        super(ee, ie.length), this.text = ie
      }
      sync(ee) {
        2 & this.flags || (super.sync(ee), this.dom.nodeValue != this.text && (ee && ee.node == this.dom && (ee.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(ee, ie) {
        let He = this.dom.nodeValue.length;
        ee > He && (ee = He);
        let ye = ee,
          be = ee,
          Me = 0;
        0 == ee && ie < 0 || ee == He && ie >= 0 ? de.chrome || de.gecko || (ee ? (ye--, Me = 1) : be < He && (be++, Me = -1)) : ie < 0 ? ye-- : be < He && be++;
        let Ke = yi(this.dom, ye, be).getClientRects();
        if (!Ke.length) return null;
        let Ue = Ke[(Me ? Me < 0 : ie >= 0) ? 0 : Ke.length - 1];
        return de.safari && !Me && 0 == Ue.width && (Ue = Array.prototype.find.call(Ke, (ee => ee.width)) || Ue), Me ? he(Ue, Me < 0) : Ue || null
      }
      static of (ee, ie) {
        let He = new OH(ie || document.createTextNode(ee), ee);
        return ie || (He.flags |= 2), He
      }
    }
    class dH extends fH {
      constructor(ee, ie, He, ye) {
        super(ee, ie, ye), this.widget = He
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(ee) {
        return !(48 & this.flags) && (this.flags & (ee < 0 ? 64 : 128)) > 0
      }
      coordsIn(ee, ie) {
        return this.coordsInWidget(ee, ie, !1)
      }
      coordsInWidget(ee, ie, He) {
        let ye = this.widget.coordsAt(this.dom, ee, ie);
        if (ye) return ye;
        if (He) return he(this.dom.getBoundingClientRect(), this.length ? 0 == ee : ie <= 0);
        {
          let ie = this.dom.getClientRects(),
            He = null;
          if (!ie.length) return null;
          let ye = !!(16 & this.flags) || !(32 & this.flags) && ee > 0;
          for (let be = ye ? ie.length - 1 : 0; He = ie[be], !(ee > 0 ? 0 == be : be == ie.length - 1 || He.top < He.bottom); be += ye ? -1 : 1);
          return he(He, !ye)
        }
      }
      get overrideDOMText() {
        if (!this.length) return ye.R.empty;
        let {
          root: ee
        } = this;
        if (!ee) return ye.R.empty;
        let ie = this.posAtStart;
        return ee.view.state.doc.slice(ie, ie + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (ee, ie, He, ye, be) {
        return be || (be = ee.toDOM(ie), ee.editable || (be.contentEditable = "false")), new dH(be, He, ee, ye)
      }
    }
    class WH extends fH {
      constructor(ee) {
        let ie = document.createElement("img");
        ie.className = "cm-widgetBuffer", ie.setAttribute("aria-hidden", "true"), super(ie, 0, ee)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return ye.R.empty
      }
      coordsIn(ee) {
        return this.dom.getBoundingClientRect()
      }
    }
    class tH {
      constructor(ee) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = ee
      }
      advance(ee, ie, He) {
        let {
          tile: ye,
          index: be,
          beforeBreak: Me,
          parents: Ke
        } = this;
        for (; ee || ie > 0;)
          if (ye.isComposite())
            if (Me) {
              if (!ee) break;
              He && He.break(), ee--, Me = !1
            } else if (be == ye.children.length) {
          if (!ee && !Ke.length) break;
          He && He.leave(ye), Me = !!ye.breakAfter, ({
            tile: ye,
            index: be
          } = Ke.pop()), be++
        } else {
          let Ue = ye.children[be],
            Fe = Ue.breakAfter;
          !(ie > 0 ? Ue.length <= ee : Ue.length < ee) || He && !1 === He.skip(Ue, 0, Ue.length) && Ue.isComposite ? (Ke.push({
            tile: ye,
            index: be
          }), ye = Ue, be = 0, He && Ue.isComposite() && He.enter(Ue)) : (Me = !!Fe, be++, ee -= Ue.length)
        } else if (be == ye.length) Me = !!ye.breakAfter, ({
          tile: ye,
          index: be
        } = Ke.pop()), be++;
        else {
          if (!ee) break;
          {
            let ie = Math.min(ee, ye.length - be);
            He && He.skip(ye, be, be + ie), ee -= ie, be += ie
          }
        }
        return this.tile = ye, this.index = be, this.beforeBreak = Me, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class ZH {
      constructor(ee, ie, He, ye) {
        this.from = ee, this.to = ie, this.wrapper = He, this.rank = ye
      }
    }
    class wH {
      constructor(ee, ie, He) {
        this.cache = ee, this.root = ie, this.blockWrappers = He, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(ee, ie, He, ye) {
        var be;
        this.flushBuffer();
        let Me = this.ensureMarks(ie, He),
          Ke = Me.lastChild;
        if (Ke && Ke.isText() && !(8 & Ke.flags) && Ke.length + ee.length < 512) {
          this.cache.reused.set(Ke, 2), (Me.children[Me.children.length - 1] = new OH(Ke.dom, Ke.text + ee)).parent = Me
        } else Me.append(ye || OH.of(ee, null === (be = this.cache.find(OH)) || void 0 === be ? void 0 : be.dom));
        this.pos += ee.length, this.afterWidget = null
      }
      addComposition(ee, ie) {
        let He = this.curLine;
        He.dom != ie.line.dom && (He.setDOM(this.cache.reused.has(ie.line) ? cH(ie.line.dom) : ie.line.dom), this.cache.reused.set(ie.line, 2));
        let ye = He;
        for (let Ke = ie.marks.length - 1; Ke >= 0; Ke--) {
          let ee = ie.marks[Ke],
            He = ye.lastChild;
          if (He instanceof gH && He.mark.eq(ee.mark)) He.dom != ee.dom && He.setDOM(cH(ee.dom)), ye = He;
          else {
            if (this.cache.reused.get(ee)) {
              let ie = fH.get(ee.dom);
              ie && ie.setDOM(cH(ee.dom))
            }
            let ie = gH.of(ee.mark, ee.dom);
            ye.append(ie), ye = ie
          }
          this.cache.reused.set(ee, 2)
        }
        let be = fH.get(ee.text);
        be && this.cache.reused.set(be, 2);
        let Me = new OH(ee.text, ee.text.nodeValue);
        Me.flags |= 8, ye.append(Me)
      }
      addInlineWidget(ee, ie, He) {
        let ye = this.afterWidget && 48 & ee.flags && (48 & this.afterWidget.flags) == (48 & ee.flags);
        ye || this.flushBuffer();
        let be = this.ensureMarks(ie, He);
        ye || 16 & ee.flags || be.append(this.getBuffer(1)), be.append(ee), this.pos += ee.length, this.afterWidget = ee
      }
      addMark(ee, ie, He) {
        this.flushBuffer(), this.ensureMarks(ie, He).append(ee), this.pos += ee.length, this.afterWidget = null
      }
      addBlockWidget(ee) {
        this.getBlockPos().append(ee), this.pos += ee.length, this.lastBlock = ee, this.endLine()
      }
      continueWidget(ee) {
        (this.afterWidget || this.lastBlock).length += ee, this.pos += ee
      }
      addLineStart(ee, ie) {
        var He;
        ee || (ee = aH);
        let ye = BH.start(ee, ie || (null === (He = this.cache.find(BH)) || void 0 === He ? void 0 : He.dom), !!ie);
        this.getBlockPos().append(this.lastBlock = this.curLine = ye)
      }
      addLine(ee) {
        this.getBlockPos().append(ee), this.pos += ee.length, this.lastBlock = ee, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(ee) {
        this.blockPosCovered() || this.addLineStart(ee)
      }
      ensureLine(ee) {
        this.curLine || this.addLineStart(ee)
      }
      ensureMarks(ee, ie) {
        var He;
        let ye = this.curLine;
        for (let be = ee.length - 1; be >= 0; be--) {
          let Me, Ke = ee[be];
          if (ie > 0 && (Me = ye.lastChild) && Me instanceof gH && Me.mark.eq(Ke)) ye = Me, ie--;
          else {
            let ee = gH.of(Ke, null === (He = this.cache.find(gH, (ee => ee.mark.eq(Ke)))) || void 0 === He ? void 0 : He.dom);
            ye.append(ee), ye = ee, ie = 0
          }
        }
        return ye
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let ee = this.curLine.lastChild;
          ee && VH(this.curLine, !1) && ("BR" == ee.dom.nodeName || !ee.isWidget() || de.ios && VH(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(LH, 0, 32) || new dH(LH.toDOM(), 0, LH, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let ee = this.wrappers.length - 1; ee >= 0; ee--) this.wrappers[ee].to < this.pos && this.wrappers.splice(ee, 1);
        for (let ee = this.blockWrappers; ee.value && ee.from <= this.pos; ee.next())
          if (ee.to >= this.pos) {
            let ie = new ZH(ee.from, ee.to, ee.value, ee.rank),
              He = this.wrappers.length;
            for (; He > 0 && (this.wrappers[He - 1].rank - ie.rank || this.wrappers[He - 1].to - ie.to) < 0;) He--;
            this.wrappers.splice(He, 0, ie)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var ee;
        this.updateBlockWrappers();
        let ie = this.root;
        for (let He of this.wrappers) {
          let ye = ie.lastChild;
          if (He.from < this.pos && ye instanceof zH && ye.wrapper.eq(He.wrapper)) ie = ye;
          else {
            let ye = zH.of(He.wrapper, null === (ee = this.cache.find(zH, (ee => ee.wrapper.eq(He.wrapper)))) || void 0 === ee ? void 0 : ee.dom);
            ie.append(ye), ie = ye
          }
        }
        return ie
      }
      blockPosCovered() {
        let ee = this.lastBlock;
        return null != ee && !ee.breakAfter && (!ee.isWidget() || (160 & ee.flags) > 0)
      }
      getBuffer(ee) {
        let ie = 2 | (ee < 0 ? 16 : 32),
          He = this.cache.find(WH, void 0, 1);
        return He && (He.flags = ie), He || new WH(ie)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class DH {
      constructor(ee) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = ee.iter()
      }
      skip(ee) {
        this.textOff + ee <= this.text.length ? this.textOff += ee : (this.skipCount += ee - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(ee) {
        if (this.textOff == this.text.length) {
          let {
            value: ie,
            lineBreak: He,
            done: ye
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, ye) throw new Error("Ran out of text content when drawing inline views");
          this.text = ie;
          let be = this.textOff = Math.min(ee, ie.length);
          return He ? null : ie.slice(0, be)
        }
        let ie = Math.min(this.text.length, this.textOff + ee),
          He = this.text.slice(this.textOff, ie);
        return this.textOff = ie, He
      }
    }
    const PH = [dH, BH, OH, gH, WH, zH, XH];
    for (let VK = 0; VK < PH.length; VK++) PH[VK].bucket = VK;
    class AH {
      constructor(ee) {
        this.view = ee, this.buckets = PH.map((() => [])), this.index = PH.map((() => 0)), this.reused = new Map
      }
      add(ee) {
        let ie = ee.constructor.bucket,
          He = this.buckets[ie];
        He.length < 6 ? He.push(ee) : He[this.index[ie] = (this.index[ie] + 1) % 6] = ee
      }
      find(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          ye = ee.bucket,
          be = this.buckets[ye],
          Me = this.index[ye];
        for (let Ke = be.length - 1; Ke >= 0; Ke--) {
          let ee = (Ke + Me) % be.length,
            Ue = be[ee];
          if ((!ie || ie(Ue)) && !this.reused.has(Ue)) return be.splice(ee, 1), ee < Me && this.index[ye]--, this.reused.set(Ue, He), Ue
        }
        return null
      }
      findWidget(ee, ie, He) {
        let ye = this.buckets[0];
        if (ye.length)
          for (let be = 0, Me = 0;; be++) {
            if (be == ye.length) {
              if (Me) return null;
              Me = 1, be = 0
            }
            let Ke = ye[be];
            if (!this.reused.has(Ke) && (0 == Me ? Ke.widget.compare(ee) : Ke.widget.constructor == ee.constructor && ee.updateDOM(Ke.dom, this.view, Ke.widget))) return ye.splice(be, 1), be < this.index[0] && this.index[0]--, Ke.widget == ee && Ke.length == ie && (497 & Ke.flags) == He ? (this.reused.set(Ke, 1), Ke) : (this.reused.set(Ke, 2), new dH(Ke.dom, ie, ee, -498 & Ke.flags | He))
          }
      }
      reuse(ee) {
        return this.reused.set(ee, 1), ee
      }
      maybeReuse(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(ee)) return this.reused.set(ee, ie), ee.dom
      }
      clear() {
        for (let ee = 0; ee < this.buckets.length; ee++) this.buckets[ee].length = this.index[ee] = 0
      }
    }
    class YH {
      constructor(ee, ie, He, be, Me) {
        this.view = ee, this.MM = be, this.disallowBlockEffectsFor = Me, this.openWidget = !1, this.openMarks = 0, this.cache = new AH(ee), this.text = new DH(ee.state.doc), this.builder = new wH(this.cache, new XH(ee, ee.contentDOM), ye.D.iter(He)), this.cache.reused.set(ie, 2), this.old = new tH(ie), this.reuseWalker = {
          skip: (ee, ie, He) => {
            if (this.cache.add(ee), ee.isComposite()) return !1
          },
          enter: ee => this.cache.add(ee),
          leave: () => {},
          break: () => {}
        }
      }
      run(ee, ie) {
        let He = ie && this.getCompositionContext(ie.text);
        for (let ye = 0, be = 0, Me = 0;;) {
          let Ke = Me < ee.length ? ee[Me++] : null,
            Ue = Ke ? Ke.fromA : this.old.root.length;
          if (Ue > ye) {
            let ee = Ue - ye;
            this.preserve(ee, !Me, !Ke), ye = Ue, be += ee
          }
          if (!Ke) break;
          ie && Ke.fromA <= ie.range.fromA && Ke.toA >= ie.range.toA ? (this.forward(Ke.fromA, ie.range.fromA, ie.range.fromA < ie.range.toA ? 1 : -1), this.emit(be, ie.range.fromB), this.cache.clear(), this.builder.addComposition(ie, He), this.text.skip(ie.range.toB - ie.range.fromB), this.forward(ie.range.fromA, Ke.toA), this.emit(ie.range.toB, Ke.toB)) : (this.forward(Ke.fromA, Ke.toA), this.emit(be, Ke.toB)), be = Ke.toB, ye = Ke.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(ee, ie, He) {
        let ye = function(ee) {
            let ie = [];
            for (let He = ee.parents.length; He > 1; He--) {
              let ye = He == ee.parents.length ? ee.tile : ee.parents[He].tile;
              ye instanceof gH && ie.push(ye.mark)
            }
            return ie
          }(this.old),
          be = this.openMarks;
        this.old.advance(ee, He ? 1 : -1, {
          skip: (ee, ie, He) => {
            if (ee.isWidget())
              if (this.openWidget) this.builder.continueWidget(He - ie);
              else {
                let Me = He > 0 || ie < ee.length ? dH.of(ee.widget, this.view, He - ie, 496 & ee.flags, this.cache.maybeReuse(ee)) : this.cache.reuse(ee);
                256 & Me.flags ? (Me.flags &= -2, this.builder.addBlockWidget(Me)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(Me, ye, be), be = ye.length)
              }
            else if (ee.isText()) this.builder.ensureLine(null), ie || He != ee.length || this.cache.reused.has(ee) ? (this.cache.add(ee), this.builder.addText(ee.text.slice(ie, He), ye, be)) : this.builder.addText(ee.text, ye, be, this.cache.reuse(ee)), be = ye.length;
            else if (ee.isLine()) ee.flags &= -2, this.cache.reused.set(ee, 1), this.builder.addLine(ee);
            else if (ee instanceof WH) this.cache.add(ee);
            else {
              if (!(ee instanceof gH)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(ee, ye, be), this.cache.reused.set(ee, 1), be = ye.length
            }
            this.openWidget = !1
          },
          enter: ee => {
            ee.isLine() ? this.builder.addLineStart(ee.attrs, this.cache.maybeReuse(ee)) : (this.cache.add(ee), ee instanceof gH && ye.unshift(ee.mark)), this.openWidget = !1
          },
          leave: ee => {
            ee.isLine() ? ye.length && (ye.length = be = 0) : ee instanceof gH && (ye.shift(), be = Math.min(be, ye.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(ee)
      }
      emit(ee, ie) {
        let He = null,
          be = this.builder,
          Me = 0,
          Ke = ye.D.spans(this.MM, ee, ie, {
            point: (ee, ie, ye, Ke, Ue, Fe) => {
              if (ye instanceof ce) {
                if (this.disallowBlockEffectsFor[Fe]) {
                  if (ye.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (ie > this.view.state.doc.lineAt(ee).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (Me = Ke.length, Ue > Ke.length) be.continueWidget(ie - ee);
                else {
                  let Me = ye.widget || (ye.block ? xH.block : xH.inline),
                    Fe = function(ee) {
                      let ie = ee.isReplace ? (ee.startSide < 0 ? 64 : 0) | (ee.endSide > 0 ? 128 : 0) : ee.startSide > 0 ? 32 : 16;
                      ee.block && (ie |= 256);
                      return ie
                    }(ye),
                    Je = this.cache.findWidget(Me, ie - ee, Fe) || dH.of(Me, this.view, ie - ee, Fe);
                  ye.block ? (ye.startSide > 0 && be.addLineStartIfNotCovered(He), be.addBlockWidget(Je)) : (be.ensureLine(He), be.addInlineWidget(Je, Ke, Ue))
                }
                He = null
              } else He = function(ee, ie) {
                let He = ie.spec.attributes,
                  ye = ie.spec.class;
                if (!He && !ye) return ee;
                ee || (ee = {
                  class: "cm-line"
                });
                He && We(He, ee);
                ye && (ee.class += " " + ye);
                return ee
              }(He, ye);
              ie > ee && this.text.skip(ie - ee)
            },
            span: (ee, ie, ye, Me) => {
              for (let Ke = ee; Ke < ie;) {
                let Ue = this.text.next(Math.min(512, ie - Ke));
                null == Ue ? (be.addLineStartIfNotCovered(He), be.addBreak(), Ke++) : (be.ensureLine(He), be.addText(Ue, ye, Ke == ee ? Me : ye.length), Ke += Ue.length), He = null
              }
            }
          });
        be.addLineStartIfNotCovered(He), this.openWidget = Ke > Me, this.openMarks = Ke
      }
      forward(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        ie - ee <= 10 ? this.old.advance(ie - ee, He, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(ie - ee - 10, -1), this.old.advance(5, He, this.reuseWalker))
      }
      getCompositionContext(ee) {
        let ie = [],
          He = null;
        for (let ye = ee.parentNode;; ye = ye.parentNode) {
          let ee = fH.get(ye);
          if (ye == this.view.contentDOM) break;
          ee instanceof gH ? ie.push(ee) : (null === ee || void 0 === ee ? void 0 : ee.isLine()) ? He = ee : ee instanceof zH || ("DIV" != ye.nodeName || He || ye == this.view.contentDOM ? He || ie.push(gH.of(new Ve({
            tagName: ye.nodeName.toLowerCase(),
            attributes: De(ye)
          }), ye)) : He = new BH(ye, aH))
        }
        return {
          line: He,
          marks: ie
        }
      }
    }

    function VH(ee, ie) {
      let He = ee => {
        for (let ye of ee.children)
          if ((ie ? ye.isText() : ye.length) || He(ye)) return !0;
        return !1
      };
      return He(ee)
    }
    const aH = {
      class: "cm-line"
    };

    function cH(ee) {
      let ie = fH.get(ee);
      return ie && ie.setDOM(ee.cloneNode()), ee
    }
    class xH extends Pe {
      constructor(ee) {
        super(), this.tag = ee
      }
      eq(ee) {
        return ee.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(ee) {
        return ee.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    xH.inline = new xH("span"), xH.block = new xH("div");
    const LH = new class extends Pe {
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
    class CH {
      constructor(ee) {
        this.view = ee, this.MM = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Ye.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new XH(ee, ee.contentDOM), this.updateInner([new RH(0, 0, 0, ee.state.doc.length)], null)
      }
      update(ee) {
        var ie;
        let He = ee.changedRanges;
        this.minWidth > 0 && He.length && (He.every((ee => {
          let {
            fromA: ie,
            toA: He
          } = ee;
          return He < this.minWidthFrom || ie > this.minWidthTo
        })) ? (this.minWidthFrom = ee.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = ee.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(ee);
        let be = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (ie = this.domChanged) || void 0 === ie ? void 0 : ie.newSel) ? be = this.domChanged.newSel.head : function(ee, ie) {
          let He = !1;
          ie && ee.iterChangedRanges(((ee, ye) => {
            ee < ie.to && ye > ie.from && (He = !0)
          }));
          return He
        }(ee.changes, this.hasComposition) || ee.selectionSet || (be = ee.state.selection.main.head));
        let Me = be > -1 ? function(ee, ie, He) {
          let ye = uH(ee, He);
          if (!ye) return null;
          let {
            node: be,
            from: Me,
            to: Ke
          } = ye, Ue = be.nodeValue;
          if (/[\n\r]/.test(Ue)) return null;
          if (ee.state.doc.sliceString(ye.from, ye.to) != Ue) return null;
          let Fe = ie.invertedDesc;
          return {
            range: new RH(Fe.mapPos(Me), Fe.mapPos(Ke), Me, Ke),
            text: be
          }
        }(this.view, ee.changes, be) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: ie,
            to: ye
          } = this.hasComposition;
          He = new RH(ie, ye, ee.changes.mapPos(ie, -1), ee.changes.mapPos(ye, 1)).addToSet(He.slice())
        }
        this.hasComposition = Me ? {
          from: Me.range.fromB,
          to: Me.range.toB
        } : null, (de.ie || de.chrome) && !Me && ee && ee.state.doc.lines != ee.startState.doc.lines && (this.forceSelection = !0);
        let Ke = this.MM,
          Ue = this.blockWrappers;
        this.updateDeco();
        let Fe = function(ee, ie, He) {
          let be = new mH;
          return ye.D.compare(ee, ie, He, be), be.changes
        }(Ke, this.MM, ee.changes);
        Fe.length && (He = RH.extendWithRanges(He, Fe));
        let Je = function(ee, ie, He) {
          let be = new lH;
          return ye.D.compare(ee, ie, He, be), be.changes
        }(Ue, this.blockWrappers, ee.changes);
        return Je.length && (He = RH.extendWithRanges(He, Je)), Me && !He.some((ee => ee.fromA <= Me.range.fromA && ee.toA >= Me.range.toA)) && (He = Me.range.addToSet(He.slice())), !(2 & this.tile.flags && 0 == He.length) && (this.updateInner(He, Me), ee.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(ee, ie) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: He
        } = this.view;
        He.ignore((() => {
          if (ie || ee.length) {
            let He = this.tile,
              ye = new YH(this.view, He, this.blockWrappers, this.MM, this.dynamicDecorationMap);
            ie && fH.get(ie.text) && ye.cache.reused.set(fH.get(ie.text), 2), this.tile = ye.run(ee, ie), vH(He, ye.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let ye = de.chrome || de.ios ? {
            node: He.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(ye), !ye || !ye.written && He.selectionRange.focusNode == ye.node && this.tile.dom.contains(ye.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let ye = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let be of this.tile.children) be.isWidget() && be.widget instanceof SH && ye.push(be.dom);
        He.updateGaps(ye)
      }
      updateEditContextFormatting(ee) {
        this.editContextFormatting = this.editContextFormatting.map(ee.changes);
        for (let ie of ee.transactions)
          for (let ee of ie.effects) ee.is(ji) && (this.editContextFormatting = ee.value)
      }
      updateSelection() {
        let ee = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: ie
        } = this.tile, He = this.view.root.activeElement, ye = He == ie, be = !ye && !(this.view.state.facet(Ii) || ie.tabIndex > -1) && me(ie, this.view.observer.selectionRange) && !(He && ie.contains(He));
        if (!(ye || ee || be)) return;
        let Me = this.forceSelection;
        this.forceSelection = !1;
        let Ke, Ue, Fe = this.view.state.selection.main;
        if (Fe.empty ? Ue = Ke = this.inlineDOMNearPos(Fe.anchor, Fe.assoc || 1) : (Ue = this.inlineDOMNearPos(Fe.head, Fe.head == Fe.from ? 1 : -1), Ke = this.inlineDOMNearPos(Fe.anchor, Fe.anchor == Fe.from ? 1 : -1)), de.gecko && Fe.empty && !this.hasComposition && (1 == (Je = Ke).node.nodeType && Je.node.firstChild && (0 == Je.offset || "false" == Je.node.childNodes[Je.offset - 1].contentEditable) && (Je.offset == Je.node.childNodes.length || "false" == Je.node.childNodes[Je.offset].contentEditable))) {
          let ee = document.createTextNode("");
          this.view.observer.ignore((() => Ke.node.insertBefore(ee, Ke.node.childNodes[Ke.offset] || null))), Ke = Ue = new Fi(ee, 0), Me = !0
        }
        var Je;
        let oe = this.view.observer.selectionRange;
        !Me && oe.focusNode && (Se(Ke.node, Ke.offset, oe.anchorNode, oe.anchorOffset) && Se(Ue.node, Ue.offset, oe.focusNode, oe.focusOffset) || this.suppressWidgetCursorChange(oe, Fe)) || (this.view.observer.ignore((() => {
          de.android && de.chrome && ie.contains(oe.focusNode) && function(ee, ie) {
            for (let He = ee; He && He != ie; He = He.assignedSlot || He.parentNode)
              if (1 == He.nodeType && "false" == He.contentEditable) return !0;
            return !1
          }(oe.focusNode, ie) && (ie.blur(), ie.focus({
            preventScroll: !0
          }));
          let ee = ve(this.view.root);
          if (ee)
            if (Fe.empty) {
              if (de.gecko) {
                let ee = (ye = Ke.node, Me = Ke.offset, 1 != ye.nodeType ? 0 : (Me && "false" == ye.childNodes[Me - 1].contentEditable ? 1 : 0) | (Me < ye.childNodes.length && "false" == ye.childNodes[Me].contentEditable ? 2 : 0));
                if (ee && 3 != ee) {
                  let ie = (1 == ee ? Ki : Ui)(Ke.node, Ke.offset);
                  ie && (Ke = new Fi(ie.node, ie.offset))
                }
              }
              ee.collapse(Ke.node, Ke.offset), null != Fe.bidiLevel && void 0 !== ee.caretBidiLevel && (ee.caretBidiLevel = Fe.bidiLevel)
            } else if (ee.extend) {
            ee.collapse(Ke.node, Ke.offset);
            try {
              ee.extend(Ue.node, Ue.offset)
            } catch (Je) {}
          } else {
            let ie = document.createRange();
            Fe.anchor > Fe.head && ([Ke, Ue] = [Ue, Ke]), ie.setEnd(Ue.node, Ue.offset), ie.setStart(Ke.node, Ke.offset), ee.removeAllRanges(), ee.addRange(ie)
          } else;
          var ye, Me;
          be && this.view.root.activeElement == ie && (ie.blur(), He && He.focus())
        })), this.view.observer.setSelectionRange(Ke, Ue)), this.impreciseAnchor = Ke.precise ? null : new Fi(oe.anchorNode, oe.anchorOffset), this.impreciseHead = Ue.precise ? null : new Fi(oe.focusNode, oe.focusOffset)
      }
      suppressWidgetCursorChange(ee, ie) {
        return this.hasComposition && ie.empty && Se(ee.focusNode, ee.focusOffset, ee.anchorNode, ee.anchorOffset) && this.posFromDOM(ee.focusNode, ee.focusOffset) == ie.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: ee
        } = this, ie = ee.state.selection.main, He = ve(ee.root), {
          anchorNode: ye,
          anchorOffset: be
        } = ee.observer.selectionRange;
        if (!He || !ie.empty || !ie.assoc || !He.modify) return;
        let Me = this.lineAt(ie.head, ie.assoc);
        if (!Me) return;
        let Ke = Me.posAtStart;
        if (ie.head == Ke || ie.head == Ke + Me.length) return;
        let Ue = this.coordsAt(ie.head, -1),
          Fe = this.coordsAt(ie.head, 1);
        if (!Ue || !Fe || Ue.bottom > Fe.top) return;
        let Je = this.domAtPos(ie.head + ie.assoc, ie.assoc);
        He.collapse(Je.node, Je.offset), He.modify("move", ie.assoc < 0 ? "forward" : "backward", "lineboundary"), ee.observer.readSelectionRange();
        let oe = ee.observer.selectionRange;
        ee.docView.posFromDOM(oe.anchorNode, oe.anchorOffset) != ie.from && He.collapse(ye, be)
      }
      posFromDOM(ee, ie) {
        let He = this.tile.nearest(ee);
        if (!He) return 2 & this.tile.dom.compareDocumentPosition(ee) ? 0 : this.view.state.doc.length;
        let ye = He.posAtStart;
        if (!He.isComposite()) return He.isText() ? ee == He.dom ? ye + ie : ye + (ie ? He.length : 0) : ye;
        {
          let be;
          if (ee == He.dom) be = He.dom.childNodes[ie];
          else {
            let ye = 0 == Ie(ee) ? 0 : 0 == ie ? -1 : 1;
            for (;;) {
              let ie = ee.parentNode;
              if (ie == He.dom) break;
              0 == ye && ie.firstChild != ie.lastChild && (ye = ee == ie.firstChild ? -1 : 1), ee = ie
            }
            be = ye < 0 ? ee : ee.nextSibling
          }
          if (be == He.dom.firstChild) return ye;
          for (; be && !fH.get(be);) be = be.nextSibling;
          if (!be) return ye + He.length;
          for (let ee = 0, ie = ye;; ee++) {
            let ye = He.children[ee];
            if (ye.dom == be) return ie;
            ie += ye.length + ye.breakAfter
          }
        }
      }
      domAtPos(ee, ie) {
        let {
          tile: He,
          offset: ye
        } = this.tile.resolveBlock(ee, ie);
        return He.isWidget() ? He.domPosFor(ee, ie) : He.domIn(ye, ie)
      }
      inlineDOMNearPos(ee, ie) {
        let He, ye, be = -1,
          Me = !1,
          Ke = -1,
          Ue = !1;
        return this.tile.blockTiles(((ie, Fe) => {
          if (ie.isWidget()) {
            if (32 & ie.flags && Fe >= ee) return !0;
            16 & ie.flags && (Me = !0)
          } else {
            let Je = Fe + ie.length;
            if (Fe <= ee && (He = ie, be = ee - Fe, Me = Je < ee), Je >= ee && !ye && (ye = ie, Ke = ee - Fe, Ue = Fe > ee), Fe > ee && ye) return !0
          }
        })), He || ye ? (Me && ye ? He = null : Ue && He && (ye = null), He && ie < 0 || !ye ? He.domIn(be, ie) : ye.domIn(Ke, ie)) : this.domAtPos(ee, ie)
      }
      coordsAt(ee, ie) {
        let {
          tile: He,
          offset: ye
        } = this.tile.resolveBlock(ee, ie);
        return He.isWidget() ? He.widget instanceof SH ? null : He.coordsInWidget(ye, ie, !0) : He.coordsIn(ye, ie)
      }
      lineAt(ee, ie) {
        let {
          tile: He
        } = this.tile.resolveBlock(ee, ie);
        return He.isLine() ? He : null
      }
      coordsForChar(ee) {
        let {
          tile: ie,
          offset: He
        } = this.tile.resolveBlock(ee, 1);
        if (!ie.isLine()) return null;
        return function ee(ie, He) {
          if (ie.isComposite())
            for (let ye of ie.children) {
              if (ye.length >= He) {
                let ie = ee(ye, He);
                if (ie) return ie
              }
              if ((He -= ye.length) < 0) break
            } else if (ie.isText() && He < ie.length) {
              let ee = (0, ye.kb)(ie.text, He);
              if (ee == He) return null;
              let be = yi(ie.dom, He, ee).getClientRects();
              for (let ie = 0; ie < be.length; ie++) {
                let ee = be[ie];
                if (ie == be.length - 1 || ee.top < ee.bottom && ee.left < ee.right) return ee
              }
            } return null
        }(ie, He)
      }
      measureVisibleLineHeights(ee) {
        let ie = [],
          {
            from: He,
            to: ye
          } = ee,
          be = this.view.contentDOM.clientWidth,
          Me = be > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          Ke = -1,
          Ue = this.view.textDirection == Ji.LTR,
          Fe = 0,
          Je = (ee, oe, Re) => {
            for (let ke = 0; ke < ee.children.length && !(oe > ye); ke++) {
              let ye = ee.children[ke],
                qe = oe + ye.length,
                fe = ye.dom.getBoundingClientRect(),
                {
                  height: Te
                } = fe;
              if (Re && !ke && (Fe += fe.top - Re.top), ye instanceof zH) qe > He && Je(ye, oe, fe);
              else if (oe >= He && (Fe > 0 && ie.push(-Fe), ie.push(Te + Fe), Fe = 0, Me)) {
                let ee = ye.dom.lastChild,
                  ie = ee ? le(ee) : [];
                if (ie.length) {
                  let ee = ie[ie.length - 1],
                    He = Ue ? ee.right - fe.left : fe.right - ee.left;
                  He > Ke && (Ke = He, this.minWidth = be, this.minWidthFrom = oe, this.minWidthTo = qe)
                }
              }
              Re && ke == ee.children.length - 1 && (Fe += Re.bottom - fe.bottom), oe = qe + ye.breakAfter
            }
          };
        return Je(this.tile, 0, null), ie
      }
      textDirectionAt(ee) {
        let {
          tile: ie
        } = this.tile.resolveBlock(ee, 1);
        return "rtl" == getComputedStyle(ie.dom).direction ? Ji.RTL : Ji.LTR
      }
      measureTextSize() {
        let ee = this.tile.blockTiles((ee => {
          if (ee.isLine() && ee.children.length && ee.length <= 20) {
            let ie, He = 0;
            for (let ye of ee.children) {
              if (!ye.isText() || /[^ -~]/.test(ye.text)) return;
              let ee = le(ye.dom);
              if (1 != ee.length) return;
              He += ee[0].width, ie = ee[0].height
            }
            if (He) return {
              lineHeight: ee.dom.getBoundingClientRect().height,
              charWidth: He / ee.length,
              textHeight: ie
            }
          }
        }));
        if (ee) return ee;
        let ie, He, ye, be = document.createElement("div");
        return be.className = "cm-line", be.style.width = "99999px", be.style.position = "absolute", be.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(be);
          let ee = le(be.firstChild)[0];
          ie = be.getBoundingClientRect().height, He = ee && ee.width ? ee.width / 27 : 7, ye = ee && ee.height ? ee.height : ie, be.remove()
        })), {
          lineHeight: ie,
          charWidth: He,
          textHeight: ye
        }
      }
      computeBlockGapDeco() {
        let ee = [],
          ie = this.view.viewState;
        for (let He = 0, ye = 0;; ye++) {
          let be = ye == ie.viewports.length ? null : ie.viewports[ye],
            Me = be ? be.from - 1 : this.view.state.doc.length;
          if (Me > He) {
            let ye = (ie.lineBlockAt(Me).bottom - ie.lineBlockAt(He).top) / this.view.scaleY;
            ee.push(Ye.replace({
              widget: new SH(ye),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(He, Me))
          }
          if (!be) break;
          He = be.to + 1
        }
        return Ye.set(ee)
      }
      updateDeco() {
        let ee = 1,
          ie = this.view.state.facet(HH).map((ie => (this.dynamicDecorationMap[ee++] = "function" == typeof ie) ? ie(this.view) : ie)),
          He = !1,
          be = this.view.state.facet(bH).map(((ee, ie) => {
            let ye = "function" == typeof ee;
            return ye && (He = !0), ye ? ee(this.view) : ee
          }));
        for (be.length && (this.dynamicDecorationMap[ee++] = He, ie.push(ye.D.join(be))), this.MM = [this.editContextFormatting, ...ie, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; ee < this.MM.length;) this.dynamicDecorationMap[ee++] = !1;
        this.blockWrappers = this.view.state.facet(yH).map((ee => "function" == typeof ee ? ee(this.view) : ee))
      }
      scrollIntoView(ee) {
        var ie;
        if (ee.isSnapshot) {
          let ie = this.view.viewState.lineBlockAt(ee.range.head);
          return this.view.scrollDOM.scrollTop = ie.top - ee.yMargin, void(this.view.scrollDOM.scrollLeft = ee.xMargin)
        }
        for (let oe of this.view.state.facet(li)) try {
          if (oe(this.view, ee.range, ee)) return !0
        } catch (Je) {
          si(this.view.state, Je, "scroll handler")
        }
        let He, {
            range: ye
          } = ee,
          be = this.coordsAt(ye.head, null !== (ie = ye.assoc) && void 0 !== ie ? ie : ye.empty ? 0 : ye.head > ye.anchor ? -1 : 1);
        if (!be) return;
        !ye.empty && (He = this.coordsAt(ye.anchor, ye.anchor > ye.head ? -1 : 1)) && (be = {
          left: Math.min(be.left, He.left),
          top: Math.min(be.top, He.top),
          right: Math.max(be.right, He.right),
          bottom: Math.max(be.bottom, He.bottom)
        });
        let Me = JH(this.view),
          Ke = {
            left: be.left - Me.left,
            top: be.top - Me.top,
            right: be.right + Me.right,
            bottom: be.bottom + Me.bottom
          },
          {
            offsetWidth: Ue,
            offsetHeight: Fe
          } = this.view.scrollDOM;
        if (function(ee, ie, He, ye, be, Me, Ke, Ue) {
            let Fe = ee.ownerDocument,
              Je = Fe.defaultView || window;
            for (let oe = ee, Re = !1; oe && !Re;)
              if (1 == oe.nodeType) {
                let ee, ke = oe == Fe.body,
                  qe = 1,
                  fe = 1;
                if (ke) ee = Ne(Je);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(oe).position) && (Re = !0), oe.scrollHeight <= oe.clientHeight && oe.scrollWidth <= oe.clientWidth) {
                    oe = oe.assignedSlot || oe.parentNode;
                    continue
                  }
                  let ie = oe.getBoundingClientRect();
                  ({
                    scaleX: qe,
                    scaleY: fe
                  } = Ge(oe, ie)), ee = {
                    left: ie.left,
                    right: ie.left + oe.clientWidth * qe,
                    top: ie.top,
                    bottom: ie.top + oe.clientHeight * fe
                  }
                }
                let Te = 0,
                  pe = 0;
                if ("nearest" == be) ie.top < ee.top + Ke ? (pe = ie.top - (ee.top + Ke), He > 0 && ie.bottom > ee.bottom + pe && (pe = ie.bottom - ee.bottom + Ke)) : ie.bottom > ee.bottom - Ke && (pe = ie.bottom - ee.bottom + Ke, He < 0 && ie.top - pe < ee.top && (pe = ie.top - (ee.top + Ke)));
                else {
                  let ye = ie.bottom - ie.top,
                    Me = ee.bottom - ee.top;
                  pe = ("center" == be && ye <= Me ? ie.top + ye / 2 - Me / 2 : "start" == be || "center" == be && He < 0 ? ie.top - Ke : ie.bottom - Me + Ke) - ee.top
                }
                if ("nearest" == ye ? ie.left < ee.left + Me ? (Te = ie.left - (ee.left + Me), He > 0 && ie.right > ee.right + Te && (Te = ie.right - ee.right + Me)) : ie.right > ee.right - Me && (Te = ie.right - ee.right + Me, He < 0 && ie.left < ee.left + Te && (Te = ie.left - (ee.left + Me))) : Te = ("center" == ye ? ie.left + (ie.right - ie.left) / 2 - (ee.right - ee.left) / 2 : "start" == ye == Ue ? ie.left - Me : ie.right - (ee.right - ee.left) + Me) - ee.left, Te || pe)
                  if (ke) Je.scrollBy(Te, pe);
                  else {
                    let ee = 0,
                      He = 0;
                    if (pe) {
                      let ee = oe.scrollTop;
                      oe.scrollTop += pe / fe, He = (oe.scrollTop - ee) * fe
                    }
                    if (Te) {
                      let ie = oe.scrollLeft;
                      oe.scrollLeft += Te / qe, ee = (oe.scrollLeft - ie) * qe
                    }
                    ie = {
                      left: ie.left - ee,
                      top: ie.top - He,
                      right: ie.right - ee,
                      bottom: ie.bottom - He
                    }, ee && Math.abs(ee - Te) < 1 && (ye = "nearest"), He && Math.abs(He - pe) < 1 && (be = "nearest")
                  } if (ke) break;
                (ie.top < ee.top || ie.bottom > ee.bottom || ie.left < ee.left || ie.right > ee.right) && (ie = {
                  left: Math.max(ie.left, ee.left),
                  right: Math.min(ie.right, ee.right),
                  top: Math.max(ie.top, ee.top),
                  bottom: Math.min(ie.bottom, ee.bottom)
                }), oe = oe.assignedSlot || oe.parentNode
              } else {
                if (11 != oe.nodeType) break;
                oe = oe.host
              }
          }(this.view.scrollDOM, Ke, ye.head < ye.anchor ? -1 : 1, ee.x, ee.y, Math.max(Math.min(ee.xMargin, Ue), -Ue), Math.max(Math.min(ee.yMargin, Fe), -Fe), this.view.textDirection == Ji.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (be.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || be.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let ee = this.view.docView.lineAt(ye.head, 1);
          ee && ee.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(ee) {
        let ie = ee => ee.isWidget() || ee.children.some(ie);
        return ie(this.tile.resolveBlock(ee, 1).tile)
      }
      destroy() {
        vH(this.tile)
      }
    }

    function vH(ee, ie) {
      let He = null === ie || void 0 === ie ? void 0 : ie.get(ee);
      if (1 != He) {
        null == He && ee.destroy();
        for (let He of ee.children) vH(He, ie)
      }
    }

    function uH(ee, ie) {
      let He = ee.observer.selectionRange;
      if (!He.focusNode) return null;
      let ye = Ki(He.focusNode, He.focusOffset),
        be = Ui(He.focusNode, He.focusOffset),
        Me = ye || be;
      if (be && ye && be.node != ye.node) {
        let ie = fH.get(be.node);
        if (!ie || ie.isText() && ie.text != be.node.nodeValue) Me = be;
        else if (ee.docView.lastCompositionAfterCursor) {
          let ee = fH.get(ye.node);
          !ee || ee.isText() && ee.text != ye.node.nodeValue || (Me = be)
        }
      }
      if (ee.docView.lastCompositionAfterCursor = Me != ye, !Me) return null;
      let Ke = ie - Me.offset;
      return {
        from: Ke,
        to: Ke + Me.node.nodeValue.length,
        node: Me.node
      }
    }
    let mH = class {
      constructor() {
        this.changes = []
      }
      compareRange(ee, ie) {
        Le(ee, ie, this.changes)
      }
      comparePoint(ee, ie) {
        Le(ee, ie, this.changes)
      }
      boundChange(ee) {
        Le(ee, ee, this.changes)
      }
    };
    class lH {
      constructor() {
        this.changes = []
      }
      compareRange(ee, ie) {
        Le(ee, ie, this.changes)
      }
      comparePoint() {}
      boundChange(ee) {
        Le(ee, ee, this.changes)
      }
    }
    class SH extends Pe {
      constructor(ee) {
        super(), this.height = ee
      }
      toDOM() {
        let ee = document.createElement("div");
        return ee.className = "cm-gap", this.updateDOM(ee), ee
      }
      eq(ee) {
        return ee.height == this.height
      }
      updateDOM(ee) {
        return ee.style.height = this.height + "px", !0
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

    function nH(ee, ie, He) {
      let ye = ee.lineBlockAt(ie);
      if (Array.isArray(ye.type)) {
        let ee;
        for (let be of ye.type) {
          if (be.from > ie) break;
          if (!(be.to < ie)) {
            if (be.from < ie && be.to > ie) return be;
            ee && (be.type != Ae.Text || ee.type == be.type && !(He < 0 ? be.from < ie : be.to > ie)) || (ee = be)
          }
        }
        return ee || ye
      }
      return ye
    }

    function jH(ee, ie, He, ye) {
      let be = ee.state.doc.lineAt(ie.head),
        Me = ee.bidiSpans(be),
        Ke = ee.textDirectionAt(be.from);
      for (let Ue = ie, Fe = null;;) {
        let ie = Di(be, Me, Ke, Ue, He),
          Je = wi;
        if (!ie) {
          if (be.number == (He ? ee.state.doc.lines : 1)) return Ue;
          Je = "\n", be = ee.state.doc.line(be.number + (He ? 1 : -1)), Me = ee.bidiSpans(be), ie = ee.visualLineSide(be, !He)
        }
        if (Fe) {
          if (!Fe(Je)) return Ue
        } else {
          if (!ye) return ie;
          Fe = ye(Je)
        }
        Ue = ie
      }
    }

    function sH(ee, ie, He) {
      for (;;) {
        let ye = 0;
        for (let be of ee) be.between(ie - 1, ie + 1, ((ee, be, Me) => {
          if (ie > ee && ie < be) {
            let Me = ye || He || (ie - ee < be - ie ? -1 : 1);
            ie = Me < 0 ? ee : be, ye = Me
          }
        }));
        if (!ye) return ie
      }
    }

    function IH(ee, ie) {
      let He = null;
      for (let be = 0; be < ie.zp.length; be++) {
        let Me = ie.zp[be],
          Ke = null;
        if (Me.empty) {
          let ie = sH(ee, Me.from, 0);
          ie != Me.from && (Ke = ye.k.cursor(ie, -1))
        } else {
          let ie = sH(ee, Me.from, -1),
            He = sH(ee, Me.to, 1);
          ie == Me.from && He == Me.to || (Ke = ye.k.range(Me.from == Me.anchor ? ie : He, Me.from == Me.head ? ie : He))
        }
        Ke && (He || (He = ie.zp.slice()), He[be] = Ke)
      }
      return He ? ye.k.create(He, ie.mainIndex) : ie
    }

    function hH(ee, ie, He) {
      let be = sH(ee.state.facet(MH).map((ie => ie(ee))), He.from, ie.head > He.from ? -1 : 1);
      return be == He.from ? He : ye.k.cursor(be, be < He.from ? 1 : -1)
    }
    class NH {
      constructor(ee, ie) {
        this.pos = ee, this.assoc = ie
      }
    }

    function GH(ee, ie, He, be) {
      let Me, Ke = ee.contentDOM.getBoundingClientRect(),
        Ue = Ke.top + ee.viewState.paddingTop,
        {
          x: Fe,
          y: Je
        } = ie,
        oe = Je - Ue;
      for (;;) {
        if (oe < 0) return new NH(0, 1);
        if (oe > ee.viewState.docHeight) return new NH(ee.state.doc.length, -1);
        if (Me = ee.elementAtHeight(oe), null == be) break;
        if (Me.type == Ae.Text) {
          if (be < 0 ? Me.to < ee.viewport.from : Me.from > ee.viewport.to) break;
          let ie = ee.docView.coordsAt(be < 0 ? Me.from : Me.to, be > 0 ? -1 : 1);
          if (ie && (be < 0 ? ie.top <= oe + Ue : ie.bottom >= oe + Ue)) break
        }
        let ie = ee.viewState.heightOracle.textHeight / 2;
        oe = be > 0 ? Me.bottom + ie : Me.top - ie
      }
      if (ee.viewport.from >= Me.to || ee.viewport.to <= Me.from) {
        if (He) return null;
        if (Me.type == Ae.Text) {
          let ie = function(ee, ie, He, be, Me) {
            let Ke = Math.round((be - ie.left) * ee.defaultCharacterWidth);
            if (ee.lineWrapping && He.height > 1.5 * ee.defaultLineHeight) {
              let ie = ee.viewState.heightOracle.textHeight;
              Ke += Math.floor((Me - He.top - .5 * (ee.defaultLineHeight - ie)) / ie) * ee.viewState.heightOracle.lineLength
            }
            let Ue = ee.state.sliceDoc(He.from, He.to);
            return He.from + (0, ye.ob)(Ue, Ke, ee.state.tabSize)
          }(ee, Ke, Me, Fe, Je);
          return new NH(ie, ie == Me.from ? 1 : -1)
        }
      }
      if (Me.type != Ae.Text) return oe < (Me.top + Me.bottom) / 2 ? new NH(Me.from, 1) : new NH(Me.to, -1);
      let Re = ee.docView.lineAt(Me.from, 2);
      return Re && Re.length == Me.length || (Re = ee.docView.lineAt(Me.from, -2)), new rH(ee, Fe, Je, ee.textDirectionAt(Me.from)).scanTile(Re, Me.from)
    }
    class rH {
      constructor(ee, ie, He, ye) {
        this.view = ee, this.x = ie, this.y = He, this.baseDir = ye, this.line = null, this.spans = null
      }
      bidiSpansAt(ee) {
        return (!this.line || this.line.from > ee || this.line.to < ee) && (this.line = this.view.state.doc.lineAt(ee), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(ee, ie) {
        let {
          line: He,
          spans: ye
        } = this.bidiSpansAt(ee);
        return ye[Ei.find(ye, ee - He.from, -1, ie)].level == this.baseDir
      }
      dirAt(ee, ie) {
        let {
          line: He,
          spans: ye
        } = this.bidiSpansAt(ee);
        return ye[Ei.find(ye, ee - He.from, -1, ie)].dir
      }
      bidiIn(ee, ie) {
        let {
          spans: He,
          line: ye
        } = this.bidiSpansAt(ee);
        return He.length > 1 || He.length && (He[0].level != this.baseDir || He[0].to + ye.from < ie)
      }
      scan(ee, ie) {
        let He, ye, be, Me = 0,
          Ke = ee.length - 1,
          Ue = new Set,
          Fe = this.bidiIn(ee[0], ee[Ke]),
          Je = -1,
          oe = 1e9;
        ee: for (; Me < Ke;) {
          let Re = Ke - Me,
            ke = Me + Ke >> 1;
          ie: if (Ue.has(ke)) {
            let ee = Me + Math.floor(Math.random() * Re);
            for (let ie = 0; ie < Re; ie++) {
              if (!Ue.has(ee)) {
                ke = ee;
                break ie
              }
              ee++, ee == Ke && (ee = Me)
            }
            break ee
          } Ue.add(ke);
          let qe = ie(ke);
          if (qe)
            for (let ie = 0; ie < qe.length; ie++) {
              let Ue = qe[ie],
                Re = 0;
              if (!(0 == Ue.width && qe.length > 1)) {
                if (Ue.bottom < this.y)(!He || He.bottom < Ue.bottom) && (He = Ue), Re = 1;
                else if (Ue.top > this.y)(!ye || ye.top > Ue.top) && (ye = Ue), Re = -1;
                else {
                  let ee = Ue.left > this.x ? this.x - Ue.left : Ue.right < this.x ? this.x - Ue.right : 0,
                    ie = Math.abs(ee);
                  ie < oe && (Je = ke, oe = ie, be = Ue), ee && (Re = ee < 0 == (this.baseDir == Ji.LTR) ? -1 : 1)
                } - 1 != Re || Fe && !this.baseDirAt(ee[ke], 1) ? 1 != Re || Fe && !this.baseDirAt(ee[ke + 1], -1) || (Me = ke + 1) : Ke = ke
              }
            }
        }
        if (!be) {
          let be = He && (!ye || this.y - He.bottom < ye.top - this.y) ? He : ye;
          return this.y = (be.top + be.bottom) / 2, this.scan(ee, ie)
        }
        if (oe) {
          if (He && He.bottom > be.top) return this.y = He.bottom - 1, this.scan(ee, ie);
          if (ye && ye.top < be.bottom) return this.y = ye.top + 1, this.scan(ee, ie)
        }
        let Re = (Fe ? this.dirAt(ee[Je], 1) : this.baseDir) == Ji.LTR;
        return {
          i: Je,
          after: this.x > (be.left + be.right) / 2 == Re
        }
      }
      scanText(ee, ie) {
        let He = [];
        for (let Me = 0; Me < ee.length; Me = (0, ye.kb)(ee.text, Me)) He.push(ie + Me);
        He.push(ie + ee.length);
        let be = this.scan(He, (ye => {
          let be = He[ye] - ie,
            Me = He[ye + 1] - ie;
          return yi(ee.dom, be, Me).getClientRects()
        }));
        return be.after ? new NH(He[be.i + 1], -1) : new NH(He[be.i], 1)
      }
      scanTile(ee, ie) {
        if (!ee.length) return new NH(ie, 1);
        if (1 == ee.children.length) {
          let He = ee.children[0];
          if (He.isText()) return this.scanText(He, ie);
          if (He.isComposite()) return this.scanTile(He, ie)
        }
        let He = [ie];
        for (let Ke = 0, Ue = ie; Ke < ee.children.length; Ke++) He.push(Ue += ee.children[Ke].length);
        let ye = this.scan(He, (ie => {
            let He = ee.children[ie];
            return 48 & He.flags ? null : (1 == He.dom.nodeType ? He.dom : yi(He.dom, 0, He.length)).getClientRects()
          })),
          be = ee.children[ye.i],
          Me = He[ye.i];
        return be.isText() ? this.scanText(be, Me) : be.isComposite() ? this.scanTile(be, Me) : ye.after ? new NH(He[ye.i + 1], -1) : new NH(Me, 1)
      }
    }
    const QH = "\uffff";
    class ey {
      constructor(ee, ie) {
        this.points = ee, this.view = ie, this.text = "", this.lineSeparator = ie.state.facet(ye.o.lineSeparator)
      }
      append(ee) {
        this.text += ee
      }
      lineBreak() {
        this.text += QH
      }
      readRange(ee, ie) {
        if (!ee) return this;
        let He = ee.parentNode;
        for (let ye = ee;;) {
          this.findPointBefore(He, ye);
          let ee = this.text.length;
          this.readNode(ye);
          let be = fH.get(ye),
            Me = ye.nextSibling;
          if (Me == ie) {
            (null === be || void 0 === be ? void 0 : be.breakAfter) && !Me && He != this.view.contentDOM && this.lineBreak();
            break
          }
          let Ke = fH.get(Me);
          (be && Ke ? be.breakAfter : (be ? be.breakAfter : je(ye)) || je(Me) && ("BR" != ye.nodeName || (null === be || void 0 === be ? void 0 : be.isWidget())) && this.text.length > ee) && !Hy(Me, ie) && this.lineBreak(), ye = Me
        }
        return this.findPointBefore(He, ie), this
      }
      readTextNode(ee) {
        let ie = ee.nodeValue;
        for (let He of this.points) He.node == ee && (He.pos = this.text.length + Math.min(He.offset, ie.length));
        for (let He = 0, ye = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let be, Me = -1,
            Ke = 1;
          if (this.lineSeparator ? (Me = ie.indexOf(this.lineSeparator, He), Ke = this.lineSeparator.length) : (be = ye.exec(ie)) && (Me = be.index, Ke = be[0].length), this.append(ie.slice(He, Me < 0 ? ie.length : Me)), Me < 0) break;
          if (this.lineBreak(), Ke > 1)
            for (let ie of this.points) ie.node == ee && ie.pos > this.text.length && (ie.pos -= Ke - 1);
          He = Me + Ke
        }
      }
      readNode(ee) {
        let ie = fH.get(ee),
          He = ie && ie.overrideDOMText;
        if (null != He) {
          this.findPointInside(ee, He.length);
          for (let ee = He.iter(); !ee.next().done;) ee.lineBreak ? this.lineBreak() : this.append(ee.value)
        } else 3 == ee.nodeType ? this.readTextNode(ee) : "BR" == ee.nodeName ? ee.nextSibling && this.lineBreak() : 1 == ee.nodeType && this.readRange(ee.firstChild, null)
      }
      findPointBefore(ee, ie) {
        for (let He of this.points) He.node == ee && ee.childNodes[He.offset] == ie && (He.pos = this.text.length)
      }
      findPointInside(ee, ie) {
        for (let He of this.points)(3 == ee.nodeType ? He.node == ee : ee.contains(He.node)) && (He.pos = this.text.length + (iy(ee, He.node, He.offset) ? ie : 0))
      }
    }

    function iy(ee, ie, He) {
      for (;;) {
        if (!ie || He < Ie(ie)) return !1;
        if (ie == ee) return !0;
        He = ne(ie) + 1, ie = ie.parentNode
      }
    }

    function Hy(ee, ie) {
      let He;
      for (; ee != ie && ee; ee = ee.nextSibling) {
        let ie = fH.get(ee);
        if (!(null === ie || void 0 === ie ? void 0 : ie.isWidget())) return !1;
        ie && (He || (He = [])).push(ie)
      }
      if (He)
        for (let ye of He) {
          let ee = ye.overrideDOMText;
          if (null === ee || void 0 === ee ? void 0 : ee.length) return !1
        }
      return !0
    }
    class yy {
      constructor(ee, ie) {
        this.node = ee, this.offset = ie, this.pos = -1
      }
    }
    class by {
      constructor(ee, ie, He, be) {
        this.typeOver = be, this.bounds = null, this.text = "", this.domChanged = ie > -1;
        let {
          impreciseHead: Me,
          impreciseAnchor: Ke
        } = ee.docView, Ue = ee.state.selection;
        if (ee.state.readOnly && ie > -1) this.newSel = null;
        else if (ie > -1 && (this.bounds = My(ee.docView.tile, ie, He, 0))) {
          let ie = Me || Ke ? [] : function(ee) {
              let ie = [];
              if (ee.root.activeElement != ee.contentDOM) return ie;
              let {
                anchorNode: He,
                anchorOffset: ye,
                focusNode: be,
                focusOffset: Me
              } = ee.observer.selectionRange;
              He && (ie.push(new yy(He, ye)), be == He && Me == ye || ie.push(new yy(be, Me)));
              return ie
            }(ee),
            He = new ey(ie, ee);
          He.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = He.text, this.newSel = function(ee, ie) {
            if (0 == ee.length) return null;
            let He = ee[0].pos,
              be = 2 == ee.length ? ee[1].pos : He;
            return He > -1 && be > -1 ? ye.k.single(He + ie, be + ie) : null
          }(ie, this.bounds.from)
        } else {
          let ie = ee.observer.selectionRange,
            He = Me && Me.node == ie.focusNode && Me.offset == ie.focusOffset || !ue(ee.contentDOM, ie.focusNode) ? Ue.main.head : ee.docView.posFromDOM(ie.focusNode, ie.focusOffset),
            be = Ke && Ke.node == ie.anchorNode && Ke.offset == ie.anchorOffset || !ue(ee.contentDOM, ie.anchorNode) ? Ue.main.anchor : ee.docView.posFromDOM(ie.anchorNode, ie.anchorOffset),
            Fe = ee.viewport;
          if ((de.ios || de.chrome) && Ue.main.empty && He != be && (Fe.from > 0 || Fe.to < ee.state.doc.length)) {
            let ie = Math.min(He, be),
              ye = Math.max(He, be),
              Me = Fe.from - ie,
              Ke = Fe.to - ye;
            0 != Me && 1 != Me && 0 != ie || 0 != Ke && -1 != Ke && ye != ee.state.doc.length || (He = 0, be = ee.state.doc.length)
          }
          if (ee.inputState.composing > -1 && Ue.zp.length > 1) this.newSel = Ue.replaceRange(ye.k.range(be, He));
          else if (ee.lineWrapping && be == He && (!Ue.main.empty || Ue.main.head != He) && ee.inputState.lastTouchTime > Date.now() - 100) {
            let ie = ee.coordsAtPos(He, -1),
              be = 0;
            ie && (be = ee.inputState.lastTouchY <= ie.bottom ? -1 : 1), this.newSel = ye.k.create([ye.k.cursor(He, be)])
          } else this.newSel = ye.k.single(be, He)
        }
      }
    }

    function My(ee, ie, He, ye) {
      if (ee.isComposite()) {
        let be = -1,
          Me = -1,
          Ke = -1,
          Ue = -1;
        for (let Fe = 0, Je = ye, oe = ye; Fe < ee.children.length; Fe++) {
          let ye = ee.children[Fe],
            Re = Je + ye.length;
          if (Je < ie && Re > He) return My(ye, ie, He, Je);
          if (Re >= ie && -1 == be && (be = Fe, Me = Je), Je > He && ye.dom.parentNode == ee.dom) {
            Ke = Fe, Ue = oe;
            break
          }
          oe = Re, Je = Re + ye.breakAfter
        }
        return {
          from: Me,
          to: Ue < 0 ? ye + ee.length : Ue,
          startDOM: (be ? ee.children[be - 1].dom.nextSibling : null) || ee.dom.firstChild,
          endDOM: Ke < ee.children.length && Ke >= 0 ? ee.children[Ke].dom : null
        }
      }
      return ee.isText() ? {
        from: ye,
        to: ye + ee.length,
        startDOM: ee.dom,
        endDOM: ee.dom.nextSibling
      } : null
    }

    function Ky(ee, ie) {
      let He, {
          newSel: be
        } = ie,
        {
          state: Me
        } = ee,
        Ke = Me.selection.main,
        Ue = ee.inputState.lastKeyTime > Date.now() - 100 ? ee.inputState.lastKeyCode : -1;
      if (ie.bounds) {
        let {
          from: ee,
          to: be
        } = ie.bounds, Fe = Ke.from, Je = null;
        (8 === Ue || de.android && ie.text.length < be - ee) && (Fe = Ke.to, Je = "end");
        let oe, Re, ke = Me.doc.sliceString(ee, be, QH);
        !Ke.empty && Ke.from >= ee && Ke.to <= be && (ie.typeOver || ke != ie.text) && ke.slice(0, Ke.from - ee) == ie.text.slice(0, Ke.from - ee) && ke.slice(Ke.to - ee) == ie.text.slice(oe = ie.text.length - (ke.length - (Ke.to - ee))) ? He = {
          from: Ke.from,
          to: Ke.to,
          insert: ye.R.of(ie.text.slice(Ke.from - ee, oe).split(QH))
        } : (Re = Fy(ke, ie.text, Fe - ee, Je)) && (de.chrome && 13 == Ue && Re.toB == Re.from + 2 && ie.text.slice(Re.from, Re.toB) == QH + QH && Re.toB--, He = {
          from: ee + Re.from,
          to: ee + Re.toA,
          insert: ye.R.of(ie.text.slice(Re.from, Re.toB).split(QH))
        })
      } else be && (!ee.hasFocus && Me.facet(Ii) || Jy(be, Ke)) && (be = null);
      if (!He && !be) return !1;
      if ((de.mac || de.android) && He && He.from == He.to && He.from == Ke.head - 1 && /^\. ?$/.test(He.insert.toString()) && "off" == ee.contentDOM.getAttribute("autocorrect") ? (be && 2 == He.insert.length && (be = ye.k.single(be.main.anchor - 1, be.main.head - 1)), He = {
          from: He.from,
          to: He.to,
          insert: ye.R.of([He.insert.toString().replace(".", " ")])
        }) : Me.doc.lineAt(Ke.from).to < Ke.to && ee.docView.lineHasWidget(Ke.to) && ee.inputState.insertingTextAt > Date.now() - 50 ? He = {
          from: Ke.from,
          to: Ke.to,
          insert: Me.toText(ee.inputState.insertingText)
        } : de.chrome && He && He.from == He.to && He.from == Ke.head && "\n " == He.insert.toString() && ee.lineWrapping && (be && (be = ye.k.single(be.main.anchor - 1, be.main.head - 1)), He = {
          from: Ke.from,
          to: Ke.to,
          insert: ye.R.of([" "])
        }), He) return Uy(ee, He, be, Ue);
      if (be && !Jy(be, Ke)) {
        let ie = !1,
          He = "select";
        return ee.inputState.lastSelectionTime > Date.now() - 50 && ("select" == ee.inputState.lastSelectionOrigin && (ie = !0), He = ee.inputState.lastSelectionOrigin, "select.pointer" == He && (be = IH(Me.facet(MH).map((ie => ie(ee))), be))), ee.dispatch({
          selection: be,
          scrollIntoView: ie,
          userEvent: He
        }), !0
      }
      return !1
    }

    function Uy(ee, ie, He) {
      let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (de.ios && ee.inputState.flushIOSKey(ie)) return !0;
      let Me = ee.state.selection.main;
      if (de.android && (ie.to == Me.to && (ie.from == Me.from || ie.from == Me.from - 1 && " " == ee.state.sliceDoc(ie.from, Me.from)) && 1 == ie.insert.length && 2 == ie.insert.lines && bi(ee.contentDOM, "Enter", 13) || (ie.from == Me.from - 1 && ie.to == Me.to && 0 == ie.insert.length || 8 == be && ie.insert.length < ie.to - ie.from && ie.to > Me.head) && bi(ee.contentDOM, "Backspace", 8) || ie.from == Me.from && ie.to == Me.to + 1 && 0 == ie.insert.length && bi(ee.contentDOM, "Delete", 46))) return !0;
      let Ke, Ue = ie.insert.toString();
      ee.inputState.composing >= 0 && ee.inputState.composing++;
      let Fe = () => Ke || (Ke = function(ee, ie, He) {
        let be, Me = ee.state,
          Ke = Me.selection.main,
          Ue = -1;
        if (ie.from == ie.to && ie.from < Ke.from || ie.from > Ke.to) {
          let He = ie.from < Ke.from ? -1 : 1,
            ye = He < 0 ? Ke.from : Ke.to,
            be = sH(Me.facet(MH).map((ie => ie(ee))), ye, He);
          ie.from == be && (Ue = be)
        }
        if (Ue > -1) be = {
          changes: ie,
          selection: ye.k.cursor(ie.from + ie.insert.length, -1)
        };
        else if (ie.from >= Ke.from && ie.to <= Ke.to && ie.to - ie.from >= (Ke.to - Ke.from) / 3 && (!He || He.main.empty && He.main.from == ie.from + ie.insert.length) && ee.inputState.composing < 0) {
          let He = Ke.from < ie.from ? Me.sliceDoc(Ke.from, ie.from) : "",
            ye = Ke.to > ie.to ? Me.sliceDoc(ie.to, Ke.to) : "";
          be = Me.replaceSelection(ee.state.toText(He + ie.insert.sliceString(0, void 0, ee.state.lineBreak) + ye))
        } else {
          let Ue = Me.changes(ie),
            Fe = He && He.main.to <= Ue.newLength ? He.main : void 0;
          if (Me.selection.zp.length > 1 && (ee.inputState.composing >= 0 || ee.inputState.compositionPendingChange) && ie.to <= Ke.to + 10 && ie.to >= Ke.to - 10) {
            let Je, oe = ee.state.sliceDoc(ie.from, ie.to),
              Re = He && uH(ee, He.main.head);
            if (Re) {
              let ee = ie.insert.length - (ie.to - ie.from);
              Je = {
                from: Re.from,
                to: Re.to - ee
              }
            } else Je = ee.state.doc.lineAt(Ke.head);
            let ke = Ke.to - ie.to;
            be = Me.changeByRange((He => {
              if (He.from == Ke.from && He.to == Ke.to) return {
                changes: Ue,
                range: Fe || He.map(Ue)
              };
              let be = He.to - ke,
                Re = be - oe.length;
              if (ee.state.sliceDoc(Re, be) != oe || be >= Je.from && Re <= Je.to) return {
                range: He
              };
              let qe = Me.changes({
                  from: Re,
                  to: be,
                  insert: ie.insert
                }),
                fe = He.to - Ke.to;
              return {
                changes: qe,
                range: Fe ? ye.k.range(Math.max(0, Fe.anchor + fe), Math.max(0, Fe.head + fe)) : He.map(qe)
              }
            }))
          } else be = {
            changes: Ue,
            selection: Fe && Me.selection.replaceRange(Fe)
          }
        }
        let Fe = "input.type";
        (ee.composing || ee.inputState.compositionPendingChange && ee.inputState.compositionEndedAt > Date.now() - 50) && (ee.inputState.compositionPendingChange = !1, Fe += ".compose", ee.inputState.compositionFirstChange && (Fe += ".start", ee.inputState.compositionFirstChange = !1));
        return Me.update(be, {
          userEvent: Fe,
          scrollIntoView: !0
        })
      }(ee, ie, He));
      return ee.state.facet(xi).some((He => He(ee, ie.from, ie.to, Ue, Fe))) || ee.dispatch(Fe()), !0
    }

    function Fy(ee, ie, He, ye) {
      let be = Math.min(ee.length, ie.length),
        Me = 0;
      for (; Me < be && ee.charCodeAt(Me) == ie.charCodeAt(Me);) Me++;
      if (Me == be && ee.length == ie.length) return null;
      let Ke = ee.length,
        Ue = ie.length;
      for (; Ke > 0 && Ue > 0 && ee.charCodeAt(Ke - 1) == ie.charCodeAt(Ue - 1);) Ke--, Ue--;
      if ("end" == ye) {
        He -= Ke + Math.max(0, Me - Math.min(Ke, Ue)) - Me
      }
      if (Ke < Me && ee.length < ie.length) {
        Me -= He <= Me && He >= Ke ? Me - He : 0, Ue = Me + (Ue - Ke), Ke = Me
      } else if (Ue < Me) {
        Me -= He <= Me && He >= Ue ? Me - He : 0, Ke = Me + (Ke - Ue), Ue = Me
      }
      return {
        from: Me,
        toA: Ke,
        toB: Ue
      }
    }

    function Jy(ee, ie) {
      return ie.head == ee.main.head && ie.anchor == ee.main.anchor
    }
    class oy {
      setSelectionOrigin(ee) {
        this.lastSelectionOrigin = ee, this.lastSelectionTime = Date.now()
      }
      constructor(ee) {
        this.view = ee, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = ee.hasFocus, de.safari && ee.contentDOM.addEventListener("input", (() => null)), de.gecko && function(ee) {
          cy.has(ee) || (cy.add(ee), ee.addEventListener("copy", (() => {})), ee.addEventListener("cut", (() => {})))
        }(ee.contentDOM.ownerDocument)
      }
      handleEvent(ee) {
        (function(ee, ie) {
          if (!ie.bubbles) return !0;
          if (ie.defaultPrevented) return !1;
          for (let He, ye = ie.target; ye != ee.contentDOM; ye = ye.parentNode)
            if (!ye || 11 == ye.nodeType || (He = fH.get(ye)) && He.isWidget() && !He.isHidden && He.widget.ignoreEvent(ie)) return !1;
          return !0
        })(this.view, ee) && !this.ignoreDuringComposition(ee) && ("keydown" == ee.type && this.keydown(ee) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(ee.type, ee))) : this.runHandlers(ee.type, ee)))
      }
      runHandlers(ee, ie) {
        let He = this.handlers[ee];
        if (He) {
          for (let ee of He.observers) ee(this.view, ie);
          for (let ee of He.handlers) {
            if (ie.defaultPrevented) break;
            if (ee(this.view, ie)) {
              ie.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(ee) {
        let ie = ky(ee),
          He = this.handlers,
          ye = this.view.contentDOM;
        for (let be in ie)
          if ("scroll" != be) {
            let ee = !ie[be].handlers.length,
              Me = He[be];
            Me && ee != !Me.handlers.length && (ye.removeEventListener(be, this.handleEvent), Me = null), Me || ye.addEventListener(be, this.handleEvent, {
              passive: ee
            })
          } for (let be in He) "scroll" == be || ie[be] || ye.removeEventListener(be, this.handleEvent);
        this.handlers = ie
      }
      keydown(ee) {
        if (this.lastKeyCode = ee.keyCode, this.lastKeyTime = Date.now(), 9 == ee.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != ee.keyCode && Ty.indexOf(ee.keyCode) < 0 && (this.tabFocusMode = -1), de.android && de.chrome && !ee.synthetic && (13 == ee.keyCode || 8 == ee.keyCode)) return this.view.observer.delayAndroidKey(ee.key, ee.keyCode), !0;
        let ie;
        return !de.ios || ee.synthetic || ee.altKey || ee.metaKey || ee.shiftKey || !((ie = qy.find((ie => ie.keyCode == ee.keyCode))) && !ee.ctrlKey || fy.indexOf(ee.key) > -1 && ee.ctrlKey) ? (229 != ee.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = ie || ee, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(ee) {
        let ie = this.pendingIOSKey;
        return !!ie && (!("Enter" == ie.key && ee && ee.from < ee.to && /^\S+$/.test(ee.insert.toString())) && (this.pendingIOSKey = void 0, bi(this.view.contentDOM, ie.key, ie.keyCode, ie instanceof KeyboardEvent ? ie : void 0)))
      }
      ignoreDuringComposition(ee) {
        return !(!/^key/.test(ee.type) || ee.synthetic) && (this.composing > 0 || !!(de.safari && !de.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(ee) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = ee
      }
      update(ee) {
        this.view.observer.update(ee), this.mouseSelection && this.mouseSelection.update(ee), this.draggedContent && ee.docChanged && (this.draggedContent = this.draggedContent.map(ee.changes)), ee.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function Ry(ee, ie) {
      return (He, ye) => {
        try {
          return ie.call(ee, ye, He)
        } catch (be) {
          si(He.state, be)
        }
      }
    }

    function ky(ee) {
      let ie = Object.create(null);

      function He(ee) {
        return ie[ee] || (ie[ee] = {
          observers: [],
          handlers: []
        })
      }
      for (let ye of ee) {
        let ee = ye.spec,
          ie = ee && ee.plugin.domEventHandlers,
          be = ee && ee.plugin.domEventObservers;
        if (ie)
          for (let Me in ie) {
            let ee = ie[Me];
            ee && He(Me).handlers.push(Ry(ye.value, ee))
          }
        if (be)
          for (let Me in be) {
            let ee = be[Me];
            ee && He(Me).observers.push(Ry(ye.value, ee))
          }
      }
      for (let ye in zy) He(ye).handlers.push(zy[ye]);
      for (let ye in By) He(ye).observers.push(By[ye]);
      return ie
    }
    const qy = [{
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
      fy = "dthko",
      Ty = [16, 17, 18, 20, 91, 92, 224, 225];

    function py(ee) {
      return .7 * Math.max(0, ee) + 8
    }
    class Xy {
      constructor(ee, ie, He, be) {
        this.view = ee, this.startEvent = ie, this.style = He, this.mustSelect = be, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = ie, this.scrollParents = re(ee.contentDOM), this.atoms = ee.state.facet(MH).map((ie => ie(ee)));
        let Me = ee.contentDOM.ownerDocument;
        Me.addEventListener("mousemove", this.move = this.move.bind(this)), Me.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = ie.shiftKey, this.multiple = ee.state.facet(ye.o.allowMultipleSelections) && function(ee, ie) {
          let He = ee.state.facet(Ai);
          return He.length ? He[0](ie) : de.mac ? ie.metaKey : ie.ctrlKey
        }(ee, ie), this.dragging = !(! function(ee, ie) {
          let {
            main: He
          } = ee.state.selection;
          if (He.empty) return !1;
          let ye = ve(ee.root);
          if (!ye || 0 == ye.rangeCount) return !0;
          let be = ye.getRangeAt(0).getClientRects();
          for (let Me = 0; Me < be.length; Me++) {
            let ee = be[Me];
            if (ee.left <= ie.clientX && ee.right >= ie.clientX && ee.top <= ie.clientY && ee.bottom >= ie.clientY) return !0
          }
          return !1
        }(ee, ie) || 1 != Dy(ie)) && null
      }
      start(ee) {
        !1 === this.dragging && this.select(ee)
      }
      move(ee) {
        if (0 == ee.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (ie = this.startEvent, He = ee, Math.max(Math.abs(ie.clientX - He.clientX), Math.abs(ie.clientY - He.clientY)) < 10)) return;
        var ie, He;
        this.select(this.lastEvent = ee);
        let ye = 0,
          be = 0,
          Me = 0,
          Ke = 0,
          Ue = this.view.win.innerWidth,
          Fe = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: Me,
          right: Ue
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: Ke,
          bottom: Fe
        } = this.scrollParents.y.getBoundingClientRect());
        let Je = JH(this.view);
        ee.clientX - Je.left <= Me + 6 ? ye = -py(Me - ee.clientX) : ee.clientX + Je.right >= Ue - 6 && (ye = py(ee.clientX - Ue)), ee.clientY - Je.top <= Ke + 6 ? be = -py(Ke - ee.clientY) : ee.clientY + Je.bottom >= Fe - 6 && (be = py(ee.clientY - Fe)), this.setScrollSpeed(ye, be)
      }
      up(ee) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || ee.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let ee = this.view.contentDOM.ownerDocument;
        ee.removeEventListener("mousemove", this.move), ee.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(ee, ie) {
        this.scrollSpeed = {
          x: ee,
          y: ie
        }, ee || ie ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: ee,
          y: ie
        } = this.scrollSpeed;
        ee && this.scrollParents.x && (this.scrollParents.x.scrollLeft += ee, ee = 0), ie && this.scrollParents.y && (this.scrollParents.y.scrollTop += ie, ie = 0), (ee || ie) && this.view.win.scrollBy(ee, ie), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(ee) {
        let {
          view: ie
        } = this, He = IH(this.atoms, this.style.get(ee, this.extend, this.multiple));
        !this.mustSelect && He.eq(ie.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: He,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(ee) {
        ee.transactions.some((ee => ee.isUserEvent("input.type"))) ? this.destroy() : this.style.update(ee) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const zy = Object.create(null),
      By = Object.create(null),
      Ey = de.ie && de.ie_version < 15 || de.ios && de.webkit_version < 604;

    function gy(ee, ie, He) {
      for (let ye of ee.facet(ie)) He = ye(He, ee);
      return He
    }

    function Oy(ee, ie) {
      ie = gy(ee.state, Ci, ie);
      let He, {
          state: be
        } = ee,
        Me = 1,
        Ke = be.toText(ie),
        Ue = Ke.lines == be.selection.zp.length;
      if (null != Ay && be.selection.zp.every((ee => ee.empty)) && Ay == Ke.toString()) {
        let ee = -1;
        He = be.changeByRange((He => {
          let Fe = be.doc.lineAt(He.from);
          if (Fe.from == ee) return {
            range: He
          };
          ee = Fe.from;
          let Je = be.toText((Ue ? Ke.line(Me++).text : ie) + be.lineBreak);
          return {
            changes: {
              from: Fe.from,
              insert: Je
            },
            range: ye.k.cursor(He.from + Je.length)
          }
        }))
      } else He = Ue ? be.changeByRange((ee => {
        let ie = Ke.line(Me++);
        return {
          changes: {
            from: ee.from,
            to: ee.to,
            insert: ie.text
          },
          range: ye.k.cursor(ee.from + ie.length)
        }
      })) : be.replaceSelection(Ke);
      ee.dispatch(He, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function dy(ee, ie, He, be) {
      if (1 == be) return ye.k.cursor(ie, He);
      if (2 == be) return function(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          be = ee.charCategorizer(ie),
          Me = ee.doc.lineAt(ie),
          Ke = ie - Me.from;
        if (0 == Me.length) return ye.k.cursor(ie);
        0 == Ke ? He = 1 : Ke == Me.length && (He = -1);
        let Ue = Ke,
          Fe = Ke;
        He < 0 ? Ue = (0, ye.kb)(Me.text, Ke, !1) : Fe = (0, ye.kb)(Me.text, Ke);
        let Je = be(Me.text.slice(Ue, Fe));
        for (; Ue > 0;) {
          let ee = (0, ye.kb)(Me.text, Ue, !1);
          if (be(Me.text.slice(ee, Ue)) != Je) break;
          Ue = ee
        }
        for (; Fe < Me.length;) {
          let ee = (0, ye.kb)(Me.text, Fe);
          if (be(Me.text.slice(Fe, ee)) != Je) break;
          Fe = ee
        }
        return ye.k.range(Ue + Me.from, Fe + Me.from)
      }(ee.state, ie, He);
      {
        let be = ee.docView.lineAt(ie, He),
          Me = ee.state.doc.lineAt(be ? be.posAtEnd : ie),
          Ke = be ? be.posAtStart : Me.from,
          Ue = be ? be.posAtEnd : Me.to;
        return Ue < ee.state.doc.length && Ue == Me.to && Ue++, ye.k.range(Ke, Ue)
      }
    }
    By.scroll = ee => {
      ee.inputState.lastScrollTop = ee.scrollDOM.scrollTop, ee.inputState.lastScrollLeft = ee.scrollDOM.scrollLeft
    }, By.wheel = By.mousewheel = ee => {
      ee.inputState.lastWheelEvent = Date.now()
    }, zy.keydown = (ee, ie) => (ee.inputState.setSelectionOrigin("select"), 27 == ie.keyCode && 0 != ee.inputState.tabFocusMode && (ee.inputState.tabFocusMode = Date.now() + 2e3), !1), By.touchstart = (ee, ie) => {
      let He = ee.inputState,
        ye = ie.targetTouches[0];
      He.lastTouchTime = Date.now(), ye && (He.lastTouchX = ye.clientX, He.lastTouchY = ye.clientY), He.setSelectionOrigin("select.pointer")
    }, By.touchmove = ee => {
      ee.inputState.setSelectionOrigin("select.pointer")
    }, zy.mousedown = (ee, ie) => {
      if (ee.observer.flush(), ee.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let He = null;
      for (let ye of ee.state.facet(Vi))
        if (He = ye(ee, ie), He) break;
      if (He || 0 != ie.button || (He = function(ee, ie) {
          let He = ee.posAndSideAtCoords({
              x: ie.clientX,
              y: ie.clientY
            }, !1),
            be = Dy(ie),
            Me = ee.state.selection;
          return {
            update(ee) {
              ee.docChanged && (He.pos = ee.changes.mapPos(He.pos), Me = Me.map(ee.changes))
            },
            get(ie, Ke, Ue) {
              let Fe, Je = ee.posAndSideAtCoords({
                  x: ie.clientX,
                  y: ie.clientY
                }, !1),
                oe = dy(ee, Je.pos, Je.assoc, be);
              if (He.pos != Je.pos && !Ke) {
                let ie = dy(ee, He.pos, He.assoc, be),
                  Me = Math.min(ie.from, oe.from),
                  Ke = Math.max(ie.to, oe.to);
                oe = Me < oe.from ? ye.k.range(Me, Ke, oe.assoc) : ye.k.range(Ke, Me, oe.assoc)
              }
              return Ke ? Me.replaceRange(Me.main.extend(oe.from, oe.to, oe.assoc)) : Ue && 1 == be && Me.zp.length > 1 && (Fe = function(ee, ie) {
                for (let He = 0; He < ee.zp.length; He++) {
                  let {
                    from: be,
                    to: Me
                  } = ee.zp[He];
                  if (be <= ie && Me >= ie) return ye.k.create(ee.zp.slice(0, He).concat(ee.zp.slice(He + 1)), ee.mainIndex == He ? 0 : ee.mainIndex - (ee.mainIndex > He ? 1 : 0))
                }
                return null
              }(Me, Je.pos)) ? Fe : Ue ? Me.addRange(oe) : ye.k.create([oe])
            }
          }
        }(ee, ie)), He) {
        let ye = !ee.hasFocus;
        ee.inputState.startMouseSelection(new Xy(ee, ie, He, ye)), ye && ee.observer.ignore((() => {
          Hi(ee.contentDOM);
          let ie = ee.root.activeElement;
          ie && !ie.contains(ee.contentDOM) && ie.blur()
        }));
        let be = ee.inputState.mouseSelection;
        if (be) return be.start(ie), !1 === be.dragging
      } else ee.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const Wy = de.ie && de.ie_version <= 11;
    let ty = null,
      Zy = 0,
      wy = 0;

    function Dy(ee) {
      if (!Wy) return ee.detail;
      let ie = ty,
        He = wy;
      return ty = ee, wy = Date.now(), Zy = !ie || He > Date.now() - 400 && Math.abs(ie.clientX - ee.clientX) < 2 && Math.abs(ie.clientY - ee.clientY) < 2 ? (Zy + 1) % 3 : 1
    }

    function Py(ee, ie, He, ye) {
      if (!(He = gy(ee.state, Ci, He))) return;
      let be = ee.posAtCoords({
          x: ie.clientX,
          y: ie.clientY
        }, !1),
        {
          draggedContent: Me
        } = ee.inputState,
        Ke = ye && Me && function(ee, ie) {
          let He = ee.state.facet(Yi);
          return He.length ? He[0](ie) : de.mac ? !ie.altKey : !ie.ctrlKey
        }(ee, ie) ? {
          from: Me.from,
          to: Me.to
        } : null,
        Ue = {
          from: be,
          insert: He
        },
        Fe = ee.state.changes(Ke ? [Ke, Ue] : Ue);
      ee.focus(), ee.dispatch({
        changes: Fe,
        selection: {
          anchor: Fe.mapPos(be, -1),
          head: Fe.mapPos(be, 1)
        },
        userEvent: Ke ? "move.drop" : "input.drop"
      }), ee.inputState.draggedContent = null
    }
    zy.dragstart = (ee, ie) => {
      let {
        selection: {
          main: He
        }
      } = ee.state;
      if (ie.target.draggable) {
        let be = ee.docView.tile.nearest(ie.target);
        if (be && be.isWidget()) {
          let ee = be.posAtStart,
            ie = ee + be.length;
          (ee >= He.to || ie <= He.from) && (He = ye.k.range(ee, ie))
        }
      }
      let {
        inputState: be
      } = ee;
      return be.mouseSelection && (be.mouseSelection.dragging = !0), be.draggedContent = He, ie.dataTransfer && (ie.dataTransfer.setData("Text", gy(ee.state, vi, ee.state.sliceDoc(He.from, He.to))), ie.dataTransfer.effectAllowed = "copyMove"), !1
    }, zy.dragend = ee => (ee.inputState.draggedContent = null, !1), zy.drop = (ee, ie) => {
      if (!ie.dataTransfer) return !1;
      if (ee.state.readOnly) return !0;
      let He = ie.dataTransfer.files;
      if (He && He.length) {
        let ye = Array(He.length),
          be = 0,
          Me = () => {
            ++be == He.length && Py(ee, ie, ye.filter((ee => null != ee)).join(ee.state.lineBreak), !1)
          };
        for (let ee = 0; ee < He.length; ee++) {
          let ie = new FileReader;
          ie.onerror = Me, ie.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(ie.result) || (ye[ee] = ie.result), Me()
          }, ie.readAsText(He[ee])
        }
        return !0
      } {
        let He = ie.dataTransfer.getData("Text");
        if (He) return Py(ee, ie, He, !0), !0
      }
      return !1
    }, zy.paste = (ee, ie) => {
      if (ee.state.readOnly) return !0;
      ee.observer.flush();
      let He = Ey ? null : ie.clipboardData;
      return He ? (Oy(ee, He.getData("text/plain") || He.getData("text/uri-list")), !0) : (function(ee) {
        let ie = ee.dom.parentNode;
        if (!ie) return;
        let He = ie.appendChild(document.createElement("textarea"));
        He.style.cssText = "position: fixed; left: -10000px; top: 10px", He.focus(), setTimeout((() => {
          ee.focus(), He.remove(), Oy(ee, He.value)
        }), 50)
      }(ee), !1)
    };
    let Ay = null;
    zy.copy = zy.cut = (ee, ie) => {
      if (!me(ee.contentDOM, ee.observer.selectionRange)) return !1;
      let {
        text: He,
        zp: ye,
        linewise: be
      } = function(ee) {
        let ie = [],
          He = [],
          ye = !1;
        for (let be of ee.selection.zp) be.empty || (ie.push(ee.sliceDoc(be.from, be.to)), He.push(be));
        if (!ie.length) {
          let be = -1;
          for (let {
              from: ye
            }
            of ee.selection.zp) {
            let Me = ee.doc.lineAt(ye);
            Me.number > be && (ie.push(Me.text), He.push({
              from: Me.from,
              to: Math.min(ee.doc.length, Me.to + 1)
            })), be = Me.number
          }
          ye = !0
        }
        return {
          text: gy(ee, vi, ie.join(ee.lineBreak)),
          zp: He,
          linewise: ye
        }
      }(ee.state);
      if (!He && !be) return !1;
      Ay = be ? He : null, "cut" != ie.type || ee.state.readOnly || ee.dispatch({
        changes: ye,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let Me = Ey ? null : ie.clipboardData;
      return Me ? (Me.clearData(), Me.setData("text/plain", He), !0) : (function(ee, ie) {
        let He = ee.dom.parentNode;
        if (!He) return;
        let ye = He.appendChild(document.createElement("textarea"));
        ye.style.cssText = "position: fixed; left: -10000px; top: 10px", ye.value = ie, ye.focus(), ye.selectionEnd = ie.length, ye.selectionStart = 0, setTimeout((() => {
          ye.remove(), ee.focus()
        }), 50)
      }(ee, He), !1)
    };
    const Yy = ye.e.define();

    function Vy(ee, ie) {
      let He = [];
      for (let ye of ee.facet(Li)) {
        let be = ye(ee, ie);
        be && He.push(be)
      }
      return He.length ? ee.update({
        effects: He,
        annotations: Yy.of(!0)
      }) : null
    }

    function ay(ee) {
      setTimeout((() => {
        let ie = ee.hasFocus;
        if (ie != ee.inputState.notifiedFocused) {
          let He = Vy(ee.state, ie);
          He ? ee.dispatch(He) : ee.update([])
        }
      }), 10)
    }
    By.focus = ee => {
      ee.inputState.lastFocusTime = Date.now(), ee.scrollDOM.scrollTop || !ee.inputState.lastScrollTop && !ee.inputState.lastScrollLeft || (ee.scrollDOM.scrollTop = ee.inputState.lastScrollTop, ee.scrollDOM.scrollLeft = ee.inputState.lastScrollLeft), ay(ee)
    }, By.blur = ee => {
      ee.observer.clearSelectionRange(), ay(ee)
    }, By.compositionstart = By.compositionupdate = ee => {
      ee.observer.editContext || (null == ee.inputState.compositionFirstChange && (ee.inputState.compositionFirstChange = !0), ee.inputState.composing < 0 && (ee.inputState.composing = 0))
    }, By.compositionend = ee => {
      ee.observer.editContext || (ee.inputState.composing = -1, ee.inputState.compositionEndedAt = Date.now(), ee.inputState.compositionPendingKey = !0, ee.inputState.compositionPendingChange = ee.observer.pendingRecords().length > 0, ee.inputState.compositionFirstChange = null, de.chrome && de.android ? ee.observer.flushSoon() : ee.inputState.compositionPendingChange ? Promise.resolve().then((() => ee.observer.flush())) : setTimeout((() => {
        ee.inputState.composing < 0 && ee.docView.hasComposition && ee.update([])
      }), 50))
    }, By.contextmenu = ee => {
      ee.inputState.lastContextMenu = Date.now()
    }, zy.beforeinput = (ee, ie) => {
      var He, ye;
      if ("insertText" != ie.inputType && "insertCompositionText" != ie.inputType || (ee.inputState.insertingText = ie.data, ee.inputState.insertingTextAt = Date.now()), "insertReplacementText" == ie.inputType && ee.observer.editContext) {
        let ye = null === (He = ie.dataTransfer) || void 0 === He ? void 0 : He.getData("text/plain"),
          be = ie.getTargetRanges();
        if (ye && be.length) {
          let ie = be[0],
            He = ee.posAtDOM(ie.startContainer, ie.startOffset),
            Me = ee.posAtDOM(ie.endContainer, ie.endOffset);
          return Uy(ee, {
            from: He,
            to: Me,
            insert: ee.state.toText(ye)
          }, null), !0
        }
      }
      let be;
      if (de.chrome && de.android && (be = qy.find((ee => ee.inputType == ie.inputType))) && (ee.observer.delayAndroidKey(be.key, be.keyCode), "Backspace" == be.key || "Delete" == be.key)) {
        let ie = (null === (ye = window.visualViewport) || void 0 === ye ? void 0 : ye.height) || 0;
        setTimeout((() => {
          var He;
          ((null === (He = window.visualViewport) || void 0 === He ? void 0 : He.height) || 0) > ie + 10 && ee.hasFocus && (ee.contentDOM.blur(), ee.focus())
        }), 100)
      }
      return de.ios && "deleteContentForward" == ie.inputType && ee.observer.flushSoon(), de.safari && "insertText" == ie.inputType && ee.inputState.composing >= 0 && setTimeout((() => By.compositionend(ee, ie)), 20), !1
    };
    const cy = new Set;
    const xy = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let Ly = !1;

    function Cy() {
      Ly = !1
    }
    class vy {
      constructor(ee) {
        this.lineWrapping = ee, this.doc = ye.R.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(ee, ie) {
        let He = this.doc.lineAt(ie).number - this.doc.lineAt(ee).number + 1;
        return this.lineWrapping && (He += Math.max(0, Math.ceil((ie - ee - He * this.lineLength * .5) / this.lineLength))), this.lineHeight * He
      }
      heightForLine(ee) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((ee - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(ee) {
        return this.doc = ee, this
      }
      mustRefreshForWrapping(ee) {
        return xy.indexOf(ee) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(ee) {
        let ie = !1;
        for (let He = 0; He < ee.length; He++) {
          let ye = ee[He];
          ye < 0 ? He++ : this.heightSamples[Math.floor(10 * ye)] || (ie = !0, this.heightSamples[Math.floor(10 * ye)] = !0)
        }
        return ie
      }
      refresh(ee, ie, He, ye, be, Me) {
        let Ke = xy.indexOf(ee) > -1,
          Ue = Math.abs(ie - this.lineHeight) > .3 || this.lineWrapping != Ke || Math.abs(He - this.charWidth) > .1;
        if (this.lineWrapping = Ke, this.lineHeight = ie, this.charWidth = He, this.textHeight = ye, this.lineLength = be, Ue) {
          this.heightSamples = {};
          for (let ee = 0; ee < Me.length; ee++) {
            let ie = Me[ee];
            ie < 0 ? ee++ : this.heightSamples[Math.floor(10 * ie)] = !0
          }
        }
        return Ue
      }
    }
    class uy {
      constructor(ee, ie) {
        this.from = ee, this.heights = ie, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class my {
      constructor(ee, ie, He, ye, be) {
        this.from = ee, this.length = ie, this.top = He, this.height = ye, this._content = be
      }
      get type() {
        return "number" == typeof this._content ? Ae.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof ce ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(ee) {
        let ie = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(ee._content) ? ee._content : [ee]);
        return new my(this.from, this.length + ee.length, this.top, this.height + ee.height, ie)
      }
    }
    var ly = function(ee) {
      return ee[ee.ByPos = 0] = "ByPos", ee[ee.ByHeight = 1] = "ByHeight", ee[ee.ByPosNoHeight = 2] = "ByPosNoHeight", ee
    }(ly || (ly = {}));
    const Sy = .001;
    class ny {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = ee, this.height = ie, this.flags = He
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(ee) {
        this.flags = (ee ? 2 : 0) | -3 & this.flags
      }
      setHeight(ee) {
        this.height != ee && (Math.abs(this.height - ee) > Sy && (Ly = !0), this.height = ee)
      }
      replace(ee, ie, He) {
        return ny.of(He)
      }
      decomposeLeft(ee, ie) {
        ie.push(this)
      }
      decomposeRight(ee, ie) {
        ie.push(this)
      }
      applyChanges(ee, ie, He, ye) {
        let be = this,
          Me = He.doc;
        for (let Ke = ye.length - 1; Ke >= 0; Ke--) {
          let {
            fromA: Ue,
            toA: Fe,
            fromB: Je,
            toB: oe
          } = ye[Ke], Re = be.lineAt(Ue, ly.ByPosNoHeight, He.setDoc(ie), 0, 0), ke = Re.to >= Fe ? Re : be.lineAt(Fe, ly.ByPosNoHeight, He, 0, 0);
          for (oe += ke.to - Fe, Fe = ke.to; Ke > 0 && Re.from <= ye[Ke - 1].toA;) Ue = ye[Ke - 1].fromA, Je = ye[Ke - 1].fromB, Ke--, Ue < Re.from && (Re = be.lineAt(Ue, ly.ByPosNoHeight, He, 0, 0));
          Je += Re.from - Ue, Ue = Re.from;
          let qe = Qy.build(He.setDoc(Me), ee, Je, oe);
          be = jy(be, be.replace(Ue, Fe, qe))
        }
        return be.updateHeight(He, 0)
      }
      static empty() {
        return new hy(0, 0, 0)
      }
      static of (ee) {
        if (1 == ee.length) return ee[0];
        let ie = 0,
          He = ee.length,
          ye = 0,
          be = 0;
        for (;;)
          if (ie == He)
            if (ye > 2 * be) {
              let be = ee[ie - 1];
              be.break ? ee.splice(--ie, 1, be.left, null, be.right) : ee.splice(--ie, 1, be.left, be.right), He += 1 + be.break, ye -= be.size
            } else {
              if (!(be > 2 * ye)) break;
              {
                let ie = ee[He];
                ie.break ? ee.splice(He, 1, ie.left, null, ie.right) : ee.splice(He, 1, ie.left, ie.right), He += 2 + ie.break, be -= ie.size
              }
            }
        else if (ye < be) {
          let He = ee[ie++];
          He && (ye += He.size)
        } else {
          let ie = ee[--He];
          ie && (be += ie.size)
        }
        let Me = 0;
        return null == ee[ie - 1] ? (Me = 1, ie--) : null == ee[ie] && (Me = 1, He++), new Gy(ny.of(ee.slice(0, ie)), Me, ny.of(ee.slice(He)))
      }
    }

    function jy(ee, ie) {
      return ee == ie ? ee : (ee.constructor != ie.constructor && (Ly = !0), ie)
    }
    ny.prototype.size = 1;
    const sy = Ye.replace({});
    class Iy extends ny {
      constructor(ee, ie, He) {
        super(ee, ie), this.deco = He, this.spaceAbove = 0
      }
      mainBlock(ee, ie) {
        return new my(ie, this.length, ee + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(ee, ie, He, ye) {
        return this.spaceAbove && ee < He + this.spaceAbove ? new my(ye, 0, He, this.spaceAbove, sy) : this.mainBlock(He, ye)
      }
      lineAt(ee, ie, He, ye, be) {
        let Me = this.mainBlock(ye, be);
        return this.spaceAbove ? this.blockAt(0, He, ye, be).join(Me) : Me
      }
      forEachLine(ee, ie, He, ye, be, Me) {
        ee <= be + this.length && ie >= be && Me(this.lineAt(0, ly.ByPos, He, ye, be))
      }
      setMeasuredHeight(ee) {
        let ie = ee.heights[ee.index++];
        ie < 0 ? (this.spaceAbove = -ie, ie = ee.heights[ee.index++]) : this.spaceAbove = 0, this.setHeight(ie)
      }
      updateHeight(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 3 ? arguments[3] : void 0;
        return He && He.from <= ie && He.more && this.setMeasuredHeight(He), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class hy extends Iy {
      constructor(ee, ie, He) {
        super(ee, ie, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = He
      }
      mainBlock(ee, ie) {
        return new my(ie, this.length, ee + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(ee, ie, He) {
        let ye = He[0];
        return 1 == He.length && (ye instanceof hy || ye instanceof Ny && 4 & ye.flags) && Math.abs(this.length - ye.length) < 10 ? (ye instanceof Ny ? ye = new hy(ye.length, this.height, this.spaceAbove) : ye.height = this.height, this.outdated || (ye.outdated = !1), ye) : ny.of(He)
      }
      updateHeight(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 ? arguments[3] : void 0;
        return ye && ye.from <= ie && ye.more ? this.setMeasuredHeight(ye) : (He || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, ee.heightForLine(this.length - this.collapsed)) + this.breaks * ee.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class Ny extends ny {
      constructor(ee) {
        super(ee, 0)
      }
      heightMetrics(ee, ie) {
        let He, ye = ee.doc.lineAt(ie).number,
          be = ee.doc.lineAt(ie + this.length).number,
          Me = be - ye + 1,
          Ke = 0;
        if (ee.lineWrapping) {
          let ie = Math.min(this.height, ee.lineHeight * Me);
          He = ie / Me, this.length > Me + 1 && (Ke = (this.height - ie) / (this.length - Me - 1))
        } else He = this.height / Me;
        return {
          firstLine: ye,
          lastLine: be,
          perLine: He,
          perChar: Ke
        }
      }
      blockAt(ee, ie, He, ye) {
        let {
          firstLine: be,
          lastLine: Me,
          perLine: Ke,
          perChar: Ue
        } = this.heightMetrics(ie, ye);
        if (ie.lineWrapping) {
          let be = ye + (ee < ie.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (ee - He) / this.height)) * this.length)),
            Me = ie.doc.lineAt(be),
            Fe = Ke + Me.length * Ue,
            Je = Math.max(He, ee - Fe / 2);
          return new my(Me.from, Me.length, Je, Fe, 0)
        } {
          let ye = Math.max(0, Math.min(Me - be, Math.floor((ee - He) / Ke))),
            {
              from: Ue,
              length: Fe
            } = ie.doc.line(be + ye);
          return new my(Ue, Fe, He + Ke * ye, Ke, 0)
        }
      }
      lineAt(ee, ie, He, ye, be) {
        if (ie == ly.ByHeight) return this.blockAt(ee, He, ye, be);
        if (ie == ly.ByPosNoHeight) {
          let {
            from: ie,
            to: ye
          } = He.doc.lineAt(ee);
          return new my(ie, ye - ie, 0, 0, 0)
        }
        let {
          firstLine: Me,
          perLine: Ke,
          perChar: Ue
        } = this.heightMetrics(He, be), Fe = He.doc.lineAt(ee), Je = Ke + Fe.length * Ue, oe = Fe.number - Me, Re = ye + Ke * oe + Ue * (Fe.from - be - oe);
        return new my(Fe.from, Fe.length, Math.max(ye, Math.min(Re, ye + this.height - Je)), Je, 0)
      }
      forEachLine(ee, ie, He, ye, be, Me) {
        ee = Math.max(ee, be), ie = Math.min(ie, be + this.length);
        let {
          firstLine: Ke,
          perLine: Ue,
          perChar: Fe
        } = this.heightMetrics(He, be);
        for (let Je = ee, oe = ye; Je <= ie;) {
          let ie = He.doc.lineAt(Je);
          if (Je == ee) {
            let He = ie.number - Ke;
            oe += Ue * He + Fe * (ee - be - He)
          }
          let ye = Ue + Fe * ie.length;
          Me(new my(ie.from, ie.length, oe, ye, 0)), oe += ye, Je = ie.to + 1
        }
      }
      replace(ee, ie, He) {
        let ye = this.length - ie;
        if (ye > 0) {
          let ee = He[He.length - 1];
          ee instanceof Ny ? He[He.length - 1] = new Ny(ee.length + ye) : He.push(null, new Ny(ye - 1))
        }
        if (ee > 0) {
          let ie = He[0];
          ie instanceof Ny ? He[0] = new Ny(ee + ie.length) : He.unshift(new Ny(ee - 1), null)
        }
        return ny.of(He)
      }
      decomposeLeft(ee, ie) {
        ie.push(new Ny(ee - 1), null)
      }
      decomposeRight(ee, ie) {
        ie.push(null, new Ny(this.length - ee - 1))
      }
      updateHeight(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 ? arguments[3] : void 0,
          be = ie + this.length;
        if (ye && ye.from <= ie + this.length && ye.more) {
          let He = [],
            Me = Math.max(ie, ye.from),
            Ke = -1;
          for (ye.from > ie && He.push(new Ny(ye.from - ie - 1).updateHeight(ee, ie)); Me <= be && ye.more;) {
            let ie = ee.doc.lineAt(Me).length;
            He.length && He.push(null);
            let be = ye.heights[ye.index++],
              Ue = 0;
            be < 0 && (Ue = -be, be = ye.heights[ye.index++]), -1 == Ke ? Ke = be : Math.abs(be - Ke) >= Sy && (Ke = -2);
            let Fe = new hy(ie, be, Ue);
            Fe.outdated = !1, He.push(Fe), Me += ie + 1
          }
          Me <= be && He.push(null, new Ny(be - Me).updateHeight(ee, Me));
          let Ue = ny.of(He);
          return (Ke < 0 || Math.abs(Ue.height - this.height) >= Sy || Math.abs(Ke - this.heightMetrics(ee, ie).perLine) >= Sy) && (Ly = !0), jy(this, Ue)
        }
        return (He || this.outdated) && (this.setHeight(ee.heightForGap(ie, ie + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class Gy extends ny {
      constructor(ee, ie, He) {
        super(ee.length + ie + He.length, ee.height + He.height, ie | (ee.outdated || He.outdated ? 2 : 0)), this.left = ee, this.right = He, this.size = ee.size + He.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(ee, ie, He, ye) {
        let be = He + this.left.height;
        return ee < be ? this.left.blockAt(ee, ie, He, ye) : this.right.blockAt(ee, ie, be, ye + this.left.length + this.break)
      }
      lineAt(ee, ie, He, ye, be) {
        let Me = ye + this.left.height,
          Ke = be + this.left.length + this.break,
          Ue = ie == ly.ByHeight ? ee < Me : ee < Ke,
          Fe = Ue ? this.left.lineAt(ee, ie, He, ye, be) : this.right.lineAt(ee, ie, He, Me, Ke);
        if (this.break || (Ue ? Fe.to < Ke : Fe.from > Ke)) return Fe;
        let Je = ie == ly.ByPosNoHeight ? ly.ByPosNoHeight : ly.ByPos;
        return Ue ? Fe.join(this.right.lineAt(Ke, Je, He, Me, Ke)) : this.left.lineAt(Ke, Je, He, ye, be).join(Fe)
      }
      forEachLine(ee, ie, He, ye, be, Me) {
        let Ke = ye + this.left.height,
          Ue = be + this.left.length + this.break;
        if (this.break) ee < Ue && this.left.forEachLine(ee, ie, He, ye, be, Me), ie >= Ue && this.right.forEachLine(ee, ie, He, Ke, Ue, Me);
        else {
          let Fe = this.lineAt(Ue, ly.ByPos, He, ye, be);
          ee < Fe.from && this.left.forEachLine(ee, Fe.from - 1, He, ye, be, Me), Fe.to >= ee && Fe.from <= ie && Me(Fe), ie > Fe.to && this.right.forEachLine(Fe.to + 1, ie, He, Ke, Ue, Me)
        }
      }
      replace(ee, ie, He) {
        let ye = this.left.length + this.break;
        if (ie < ye) return this.balanced(this.left.replace(ee, ie, He), this.right);
        if (ee > this.left.length) return this.balanced(this.left, this.right.replace(ee - ye, ie - ye, He));
        let be = [];
        ee > 0 && this.decomposeLeft(ee, be);
        let Me = be.length;
        for (let Ke of He) be.push(Ke);
        if (ee > 0 && ry(be, Me - 1), ie < this.length) {
          let ee = be.length;
          this.decomposeRight(ie, be), ry(be, ee)
        }
        return ny.of(be)
      }
      decomposeLeft(ee, ie) {
        let He = this.left.length;
        if (ee <= He) return this.left.decomposeLeft(ee, ie);
        ie.push(this.left), this.break && (He++, ee >= He && ie.push(null)), ee > He && this.right.decomposeLeft(ee - He, ie)
      }
      decomposeRight(ee, ie) {
        let He = this.left.length,
          ye = He + this.break;
        if (ee >= ye) return this.right.decomposeRight(ee - ye, ie);
        ee < He && this.left.decomposeRight(ee, ie), this.break && ee < ye && ie.push(null), ie.push(this.right)
      }
      balanced(ee, ie) {
        return ee.size > 2 * ie.size || ie.size > 2 * ee.size ? ny.of(this.break ? [ee, null, ie] : [ee, ie]) : (this.left = jy(this.left, ee), this.right = jy(this.right, ie), this.setHeight(ee.height + ie.height), this.outdated = ee.outdated || ie.outdated, this.size = ee.size + ie.size, this.length = ee.length + this.break+ie.length, this)
      }
      updateHeight(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: be,
            right: Me
          } = this,
          Ke = ie + be.length + this.break,
          Ue = null;
        return ye && ye.from <= ie + be.length && ye.more ? Ue = be = be.updateHeight(ee, ie, He, ye) : be.updateHeight(ee, ie, He), ye && ye.from <= Ke + Me.length && ye.more ? Ue = Me = Me.updateHeight(ee, Ke, He, ye) : Me.updateHeight(ee, Ke, He), Ue ? this.balanced(be, Me) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function ry(ee, ie) {
      let He, ye;
      null == ee[ie] && (He = ee[ie - 1]) instanceof Ny && (ye = ee[ie + 1]) instanceof Ny && ee.splice(ie - 1, 3, new Ny(He.length + 1 + ye.length))
    }
    class Qy {
      constructor(ee, ie) {
        this.pos = ee, this.oracle = ie, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = ee
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(ee, ie) {
        if (this.lineStart > -1) {
          let ee = Math.min(ie, this.lineEnd),
            He = this.nodes[this.nodes.length - 1];
          He instanceof hy ? He.length += ee - this.pos : (ee > this.pos || !this.isCovered) && this.nodes.push(new hy(ee - this.pos, -1, 0)), this.writtenTo = ee, ie > ee && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = ie
      }
      point(ee, ie, He) {
        if (ee < ie || He.heightRelevant) {
          let ye = He.widget ? He.widget.estimatedHeight : 0,
            be = He.widget ? He.widget.lineBreaks : 0;
          ye < 0 && (ye = this.oracle.lineHeight);
          let Me = ie - ee;
          He.block ? this.IHe(new Iy(Me, ye, He)) : (Me || be || ye >= 5) && this.addLineDeco(ye, be, Me)
        } else ie > ee && this.span(ee, ie);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: ee,
          to: ie
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = ee, this.lineEnd = ie, this.writtenTo < ee && ((this.writtenTo < ee - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, ee - 1)), this.nodes.push(null)), this.pos > ee && this.nodes.push(new hy(this.pos - ee, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(ee, ie) {
        let He = new Ny(ie - ee);
        return this.oracle.doc.lineAt(ee).to == ie && (He.flags |= 4), He
      }
      ensureLine() {
        this.enterLine();
        let ee = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (ee instanceof hy) return ee;
        let ie = new hy(0, -1, 0);
        return this.nodes.push(ie), ie
      }
      IHe(ee) {
        this.enterLine();
        let ie = ee.deco;
        ie && ie.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(ee), this.writtenTo = this.pos = this.pos + ee.length, ie && ie.endSide > 0 && (this.covering = ee)
      }
      addLineDeco(ee, ie, He) {
        let ye = this.ensureLine();
        ye.length += He, ye.collapsed += He, ye.widgetHeight = Math.max(ye.widgetHeight, ee), ye.breaks += ie, this.writtenTo = this.pos = this.pos + He
      }
      finish(ee) {
        let ie = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || ie instanceof hy || this.isCovered ? (this.writtenTo < this.pos || null == ie) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new hy(0, -1, 0));
        let He = ee;
        for (let ye of this.nodes) ye instanceof hy && ye.updateHeight(this.oracle, He), He += ye ? ye.length : 1;
        return this.nodes
      }
      static build(ee, ie, He, be) {
        let Me = new Qy(He, ee);
        return ye.D.spans(ie, He, be, Me, 0), Me.finish(He)
      }
    }
    class eb {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(ee, ie, He, ye) {
        (ee < ie || He && He.heightRelevant || ye && ye.heightRelevant) && Le(ee, ie, this.changes, 5)
      }
    }

    function ib(ee, ie) {
      let He = ee.getBoundingClientRect(),
        ye = ee.ownerDocument,
        be = ye.defaultView || window,
        Me = Math.max(0, He.left),
        Ke = Math.min(be.innerWidth, He.right),
        Ue = Math.max(0, He.top),
        Fe = Math.min(be.innerHeight, He.bottom);
      for (let Je = ee.parentNode; Je && Je != ye.body;)
        if (1 == Je.nodeType) {
          let ie = Je,
            He = window.getComputedStyle(ie);
          if ((ie.scrollHeight > ie.clientHeight || ie.scrollWidth > ie.clientWidth) && "visible" != He.overflow) {
            let He = ie.getBoundingClientRect();
            Me = Math.max(Me, He.left), Ke = Math.min(Ke, He.right), Ue = Math.max(Ue, He.top), Fe = Math.min(Je == ee.parentNode ? be.innerHeight : Fe, He.bottom)
          }
          Je = "absolute" == He.position || "fixed" == He.position ? ie.offsetParent : ie.parentNode
        } else {
          if (11 != Je.nodeType) break;
          Je = Je.host
        } return {
        left: Me - He.left,
        right: Math.max(Me, Ke) - He.left,
        top: Ue - (He.top + ie),
        bottom: Math.max(Ue, Fe) - (He.top + ie)
      }
    }

    function Hb(ee, ie) {
      let He = ee.getBoundingClientRect();
      return {
        left: 0,
        right: He.right - He.left,
        top: ie,
        bottom: He.bottom - (He.top + ie)
      }
    }
    class yb {
      constructor(ee, ie, He, ye) {
        this.from = ee, this.to = ie, this.size = He, this.displaySize = ye
      }
      static same(ee, ie) {
        if (ee.length != ie.length) return !1;
        for (let He = 0; He < ee.length; He++) {
          let ye = ee[He],
            be = ie[He];
          if (ye.from != be.from || ye.to != be.to || ye.size != be.size) return !1
        }
        return !0
      }
      draw(ee, ie) {
        return Ye.replace({
          widget: new bb(this.displaySize * (ie ? ee.scaleY : ee.scaleX), ie)
        }).range(this.from, this.to)
      }
    }
    class bb extends Pe {
      constructor(ee, ie) {
        super(), this.size = ee, this.vertical = ie
      }
      eq(ee) {
        return ee.size == this.size && ee.vertical == this.vertical
      }
      toDOM() {
        let ee = document.createElement("div");
        return this.vertical ? ee.style.height = this.size + "px" : (ee.style.width = this.size + "px", ee.style.height = "2px", ee.style.display = "inline-block"), ee
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class Mb {
      constructor(ee, ie) {
        this.view = ee, this.state = ie, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Jb, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Ji.LTR, this.Xie = [], this.mustEnforceCursorAssoc = !1;
        let He = ie.facet(iH).some((ee => "function" != typeof ee && "cm-lineWrapping" == ee.class));
        this.heightOracle = new vy(He), this.stateDeco = ob(ie), this.heightMap = ny.empty().applyChanges(this.stateDeco, ye.R.empty, this.heightOracle.setDoc(ie.doc), [new RH(0, 0, 0, ie.doc.length)]);
        for (let ye = 0; ye < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); ye++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Ye.set(this.lineGaps.map((ee => ee.draw(this, !1)))), this.scrollParent = ee.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let ee = [this.viewport],
          {
            main: ie
          } = this.state.selection;
        for (let He = 0; He <= 1; He++) {
          let ye = He ? ie.head : ie.anchor;
          if (!ee.some((ee => {
              let {
                from: ie,
                to: He
              } = ee;
              return ye >= ie && ye <= He
            }))) {
            let {
              from: ie,
              to: He
            } = this.lineBlockAt(ye);
            ee.push(new Kb(ie, He))
          }
        }
        return this.viewports = ee.sort(((ee, ie) => ee.from - ie.from)), this.updateScaler()
      }
      updateScaler() {
        let ee = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? Jb : new Rb(this.heightOracle, this.heightMap, this.viewports), ee.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (ee => {
          this.viewportLines.push(kb(ee, this.scaler))
        }))
      }
      update(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = ee.state;
        let He = this.stateDeco;
        this.stateDeco = ob(this.state);
        let be = ee.changedRanges,
          Me = RH.extendWithRanges(be, function(ee, ie, He) {
            let be = new eb;
            return ye.D.compare(ee, ie, He, be, 0), be.changes
          }(He, this.stateDeco, ee ? ee.changes : ye.ChangeSet.empty(this.state.doc.length))),
          Ke = this.heightMap.height,
          Ue = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        Cy(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, ee.startState.doc, this.heightOracle.setDoc(this.state.doc), Me), (this.heightMap.height != Ke || Ly) && (ee.flags |= 2), Ue ? (this.scrollAnchorPos = ee.changes.mapPos(Ue.from, -1), this.scrollAnchorHeight = Ue.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = Ke);
        let Fe = Me.length ? this.mapViewport(this.viewport, ee.changes) : this.viewport;
        (ie && (ie.range.head < Fe.from || ie.range.head > Fe.to) || !this.viewportIsAppropriate(Fe)) && (Fe = this.getViewport(0, ie));
        let Je = Fe.from != this.viewport.from || Fe.to != this.viewport.to;
        this.viewport = Fe, ee.flags |= this.updateForViewport(), (Je || !ee.changes.empty || 2 & ee.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, ee.changes))), ee.flags |= this.computeVisibleRanges(ee.changes), ie && (this.scrollTarget = ie), !this.mustEnforceCursorAssoc && (ee.selectionSet || ee.focusChanged) && ee.view.lineWrapping && ee.state.selection.main.empty && ee.state.selection.main.assoc && !ee.state.facet(mi) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: ee
        } = this, ie = ee.contentDOM, He = window.getComputedStyle(ie), be = this.heightOracle, Me = He.whiteSpace;
        this.defaultTextDirection = "rtl" == He.direction ? Ji.RTL : Ji.LTR;
        let Ke = this.heightOracle.mustRefreshForWrapping(Me) || "refresh" === this.mustMeasureContent,
          Ue = ie.getBoundingClientRect(),
          Fe = Ke || this.mustMeasureContent || this.contentDOMHeight != Ue.height;
        this.contentDOMHeight = Ue.height, this.mustMeasureContent = !1;
        let Je = 0,
          oe = 0;
        if (Ue.width && Ue.height) {
          let {
            scaleX: ee,
            scaleY: He
          } = Ge(ie, Ue);
          (ee > .005 && Math.abs(this.scaleX - ee) > .005 || He > .005 && Math.abs(this.scaleY - He) > .005) && (this.scaleX = ee, this.scaleY = He, Je |= 16, Ke = Fe = !0)
        }
        let Re = (parseInt(He.paddingTop) || 0) * this.scaleY,
          ke = (parseInt(He.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Re && this.paddingBottom == ke || (this.paddingTop = Re, this.paddingBottom = ke, Je |= 18), this.editorWidth != ee.scrollDOM.clientWidth && (be.lineWrapping && (Fe = !0), this.editorWidth = ee.scrollDOM.clientWidth, Je |= 16);
        let qe = re(this.view.contentDOM, !1).y;
        qe != this.scrollParent && (this.scrollParent = qe, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let fe = this.getScrollOffset();
        this.scrollOffset != fe && (this.scrollAnchorHeight = -1, this.scrollOffset = fe), this.scrolledToBottom = Mi(this.scrollParent || ee.win);
        let Te = (this.printing ? Hb : ib)(ie, this.paddingTop),
          pe = Te.top - this.pixelViewport.top,
          Xe = Te.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Te;
        let ze = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (ze != this.inView && (this.inView = ze, ze && (Fe = !0)), !this.inView && !this.scrollTarget && ! function(ee) {
            let ie = ee.getBoundingClientRect(),
              He = ee.ownerDocument.defaultView || window;
            return ie.left < He.innerWidth && ie.right > 0 && ie.top < He.innerHeight && ie.bottom > 0
          }(ee.dom)) return 0;
        let Be = Ue.width;
        if (this.contentDOMWidth == Be && this.editorHeight == ee.scrollDOM.clientHeight || (this.contentDOMWidth = Ue.width, this.editorHeight = ee.scrollDOM.clientHeight, Je |= 16), Fe) {
          let ie = ee.docView.measureVisibleLineHeights(this.viewport);
          if (be.mustRefreshForHeights(ie) && (Ke = !0), Ke || be.lineWrapping && Math.abs(Be - this.contentDOMWidth) > be.charWidth) {
            let {
              lineHeight: He,
              charWidth: ye,
              textHeight: Ue
            } = ee.docView.measureTextSize();
            Ke = He > 0 && be.refresh(Me, He, ye, Ue, Math.max(5, Be / ye), ie), Ke && (ee.docView.minWidth = 0, Je |= 16)
          }
          pe > 0 && Xe > 0 ? oe = Math.max(pe, Xe) : pe < 0 && Xe < 0 && (oe = Math.min(pe, Xe)), Cy();
          for (let He of this.viewports) {
            let Me = He.from == this.viewport.from ? ie : ee.docView.measureVisibleLineHeights(He);
            this.heightMap = (Ke ? ny.empty().applyChanges(this.stateDeco, ye.R.empty, this.heightOracle, [new RH(0, 0, 0, ee.state.doc.length)]) : this.heightMap).updateHeight(be, 0, Ke, new uy(He.from, Me))
          }
          Ly && (Je |= 2)
        }
        let Ee = !this.viewportIsAppropriate(this.viewport, oe) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return Ee && (2 & Je && (Je |= this.updateScaler()), this.viewport = this.getViewport(oe, this.scrollTarget), Je |= this.updateForViewport()), (2 & Je || Ee) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(Ke ? [] : this.lineGaps, ee)), Je |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, ee.docView.enforceCursorAssoc()), Je
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(ee, ie) {
        let He = .5 - Math.max(-.5, Math.min(.5, ee / 1e3 / 2)),
          ye = this.heightMap,
          be = this.heightOracle,
          {
            visibleTop: Me,
            visibleBottom: Ke
          } = this,
          Ue = new Kb(ye.lineAt(Me - 1e3 * He, ly.ByHeight, be, 0, 0).from, ye.lineAt(Ke + 1e3 * (1 - He), ly.ByHeight, be, 0, 0).to);
        if (ie) {
          let {
            head: ee
          } = ie.range;
          if (ee < Ue.from || ee > Ue.to) {
            let He, Me = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              Ke = ye.lineAt(ee, ly.ByPos, be, 0, 0);
            He = "center" == ie.y ? (Ke.top + Ke.bottom) / 2 - Me / 2 : "start" == ie.y || "nearest" == ie.y && ee < Ue.from ? Ke.top : Ke.bottom - Me, Ue = new Kb(ye.lineAt(He - 500, ly.ByHeight, be, 0, 0).from, ye.lineAt(He + Me + 500, ly.ByHeight, be, 0, 0).to)
          }
        }
        return Ue
      }
      mapViewport(ee, ie) {
        let He = ie.mapPos(ee.from, -1),
          ye = ie.mapPos(ee.to, 1);
        return new Kb(this.heightMap.lineAt(He, ly.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(ye, ly.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(ee) {
        let {
          from: ie,
          to: He
        } = ee, ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: be
        } = this.heightMap.lineAt(ie, ly.ByPos, this.heightOracle, 0, 0), {
          bottom: Me
        } = this.heightMap.lineAt(He, ly.ByPos, this.heightOracle, 0, 0), {
          visibleTop: Ke,
          visibleBottom: Ue
        } = this;
        return (0 == ie || be <= Ke - Math.max(10, Math.min(-ye, 250))) && (He == this.state.doc.length || Me >= Ue + Math.max(10, Math.min(ye, 250))) && be > Ke - 2e3 && Me < Ue + 2e3
      }
      mapLineGaps(ee, ie) {
        if (!ee.length || ie.empty) return ee;
        let He = [];
        for (let ye of ee) ie.touchesRange(ye.from, ye.to) || He.push(new yb(ie.mapPos(ye.from), ie.mapPos(ye.to), ye.size, ye.displaySize));
        return He
      }
      ensureLineGaps(ee, ie) {
        let He = this.heightOracle.lineWrapping,
          be = He ? 1e4 : 2e3,
          Me = be >> 1,
          Ke = be << 1;
        if (this.defaultTextDirection != Ji.LTR && !He) return [];
        let Ue = [],
          Fe = (be, Ke, Je, oe) => {
            if (Ke - be < Me) return;
            let Re = this.state.selection.main,
              ke = [Re.from];
            Re.empty || ke.push(Re.to);
            for (let ee of ke)
              if (ee > be && ee < Ke) return Fe(be, ee - 10, Je, oe), void Fe(ee + 10, Ke, Je, oe);
            let qe = function(ee, ie) {
              for (let He of ee)
                if (ie(He)) return He;
              return
            }(ee, (ee => ee.from >= Je.from && ee.to <= Je.to && Math.abs(ee.from - be) < Me && Math.abs(ee.to - Ke) < Me && !ke.some((ie => ee.from < ie && ee.to > ie))));
            if (!qe) {
              if (Ke < Je.to && ie && He && ie.Xie.some((ee => ee.from <= Ke && ee.to >= Ke))) {
                let ee = ie.moveToLineBoundary(ye.k.cursor(Ke), !1, !0).head;
                ee > be && (Ke = ee)
              }
              let ee = this.gapSize(Je, be, Ke, oe);
              qe = new yb(be, Ke, ee, He || ee < 2e6 ? ee : 2e6)
            }
            Ue.push(qe)
          },
          Je = ie => {
            if (ie.length < Ke || ie.type != Ae.Text) return;
            let Me = function(ee, ie, He) {
              let be = [],
                Me = ee,
                Ke = 0;
              ye.D.spans(He, ee, ie, {
                span() {},
                point(ee, ie) {
                  ee > Me && (be.push({
                    from: Me,
                    to: ee
                  }), Ke += ee - Me), Me = ie
                }
              }, 20), Me < ie && (be.push({
                from: Me,
                to: ie
              }), Ke += ie - Me);
              return {
                total: Ke,
                zp: be
              }
            }(ie.from, ie.to, this.stateDeco);
            if (Me.total < Ke) return;
            let Ue, Je, oe = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (He) {
              let ee, He, ye = be / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != oe) {
                let be = Fb(Me, oe),
                  Ke = ((this.visibleBottom - this.visibleTop) / 2 + ye) / ie.height;
                ee = be - Ke, He = be + Ke
              } else ee = (this.visibleTop - ie.top - ye) / ie.height, He = (this.visibleBottom - ie.top + ye) / ie.height;
              Ue = Ub(Me, ee), Je = Ub(Me, He)
            } else {
              let He = Me.total * this.heightOracle.charWidth,
                ye = be * this.heightOracle.charWidth,
                Ke = 0;
              if (He > 2e6)
                for (let be of ee) be.from >= ie.from && be.from < ie.to && be.size != be.displaySize && be.from * this.heightOracle.charWidth + Ke < this.pixelViewport.left && (Ke = be.size - be.displaySize);
              let Fe, Re, ke = this.pixelViewport.left + Ke,
                qe = this.pixelViewport.right + Ke;
              if (null != oe) {
                let ee = Fb(Me, oe),
                  ie = ((qe - ke) / 2 + ye) / He;
                Fe = ee - ie, Re = ee + ie
              } else Fe = (ke - ye) / He, Re = (qe + ye) / He;
              Ue = Ub(Me, Fe), Je = Ub(Me, Re)
            }
            Ue > ie.from && Fe(ie.from, Ue, ie, Me), Je < ie.to && Fe(Je, ie.to, ie, Me)
          };
        for (let ye of this.viewportLines) Array.isArray(ye.type) ? ye.type.forEach(Je) : Je(ye);
        return Ue
      }
      gapSize(ee, ie, He, ye) {
        let be = Fb(ye, He) - Fb(ye, ie);
        return this.heightOracle.lineWrapping ? ee.height * be : ye.total * this.heightOracle.charWidth * be
      }
      updateLineGaps(ee) {
        yb.same(ee, this.lineGaps) || (this.lineGaps = ee, this.lineGapDeco = Ye.set(ee.map((ee => ee.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(ee) {
        let ie = this.stateDeco;
        this.lineGaps.length && (ie = ie.concat(this.lineGapDeco));
        let He = [];
        ye.D.spans(ie, this.viewport.from, this.viewport.to, {
          span(ee, ie) {
            He.push({
              from: ee,
              to: ie
            })
          },
          point() {}
        }, 20);
        let be = 0;
        if (He.length != this.Xie.length) be = 12;
        else
          for (let ye = 0; ye < He.length && !(8 & be); ye++) {
            let ie = this.Xie[ye],
              Me = He[ye];
            ie.from == Me.from && ie.to == Me.to || (be |= 4, ee && ee.mapPos(ie.from, -1) == Me.from && ee.mapPos(ie.to, 1) == Me.to || (be |= 8))
          }
        return this.Xie = He, be
      }
      lineBlockAt(ee) {
        return ee >= this.viewport.from && ee <= this.viewport.to && this.viewportLines.find((ie => ie.from <= ee && ie.to >= ee)) || kb(this.heightMap.lineAt(ee, ly.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(ee) {
        return ee >= this.viewportLines[0].top && ee <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((ie => ie.top <= ee && ie.bottom >= ee)) || kb(this.heightMap.lineAt(this.scaler.fromDOM(ee), ly.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(ee) {
        let ie = this.lineBlockAtHeight(ee + 8);
        return ie.from >= this.viewport.from || this.viewportLines[0].top - ee > 200 ? ie : this.viewportLines[0]
      }
      elementAtHeight(ee) {
        return kb(this.heightMap.blockAt(this.scaler.fromDOM(ee), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class Kb {
      constructor(ee, ie) {
        this.from = ee, this.to = ie
      }
    }

    function Ub(ee, ie) {
      let {
        total: He,
        zp: ye
      } = ee;
      if (ie <= 0) return ye[0].from;
      if (ie >= 1) return ye[ye.length - 1].to;
      let be = Math.floor(He * ie);
      for (let Me = 0;; Me++) {
        let {
          from: ee,
          to: ie
        } = ye[Me], He = ie - ee;
        if (be <= He) return ee + be;
        be -= He
      }
    }

    function Fb(ee, ie) {
      let He = 0;
      for (let {
          from: ye,
          to: be
        }
        of ee.zp) {
        if (ie <= be) {
          He += ie - ye;
          break
        }
        He += be - ye
      }
      return He / ee.total
    }
    const Jb = {
      toDOM: ee => ee,
      fromDOM: ee => ee,
      scale: 1,
      eq(ee) {
        return ee == this
      }
    };

    function ob(ee) {
      let ie = ee.facet(HH).filter((ee => "function" != typeof ee)),
        He = ee.facet(bH).filter((ee => "function" != typeof ee));
      return He.length && ie.push(ye.D.join(He)), ie
    }
    class Rb {
      constructor(ee, ie, He) {
        let ye = 0,
          be = 0,
          Me = 0;
        this.viewports = He.map((He => {
          let {
            from: be,
            to: Me
          } = He, Ke = ie.lineAt(be, ly.ByPos, ee, 0, 0).top, Ue = ie.lineAt(Me, ly.ByPos, ee, 0, 0).bottom;
          return ye += Ue - Ke, {
            from: be,
            to: Me,
            top: Ke,
            bottom: Ue,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - ye) / (ie.height - ye);
        for (let Ke of this.viewports) Ke.domTop = Me + (Ke.top - be) * this.scale, Me = Ke.domBottom = Ke.domTop + (Ke.bottom - Ke.top), be = Ke.bottom
      }
      toDOM(ee) {
        for (let ie = 0, He = 0, ye = 0;; ie++) {
          let be = ie < this.viewports.length ? this.viewports[ie] : null;
          if (!be || ee < be.top) return ye + (ee - He) * this.scale;
          if (ee <= be.bottom) return be.domTop + (ee - be.top);
          He = be.bottom, ye = be.domBottom
        }
      }
      fromDOM(ee) {
        for (let ie = 0, He = 0, ye = 0;; ie++) {
          let be = ie < this.viewports.length ? this.viewports[ie] : null;
          if (!be || ee < be.domTop) return He + (ee - ye) / this.scale;
          if (ee <= be.domBottom) return be.top + (ee - be.domTop);
          He = be.bottom, ye = be.domBottom
        }
      }
      eq(ee) {
        return ee instanceof Rb && (this.scale == ee.scale && this.viewports.length == ee.viewports.length && this.viewports.every(((ie, He) => ie.from == ee.viewports[He].from && ie.to == ee.viewports[He].to)))
      }
    }

    function kb(ee, ie) {
      if (1 == ie.scale) return ee;
      let He = ie.toDOM(ee.top),
        ye = ie.toDOM(ee.bottom);
      return new my(ee.from, ee.length, He, ye - He, Array.isArray(ee._content) ? ee._content.map((ee => kb(ee, ie))) : ee._content)
    }
    const qb = ye.q.define({
        combine: ee => ee.join(" ")
      }),
      fb = ye.q.define({
        combine: ee => ee.indexOf(!0) > -1
      }),
      Tb = be.d.newName(),
      pb = be.d.newName(),
      Xb = be.d.newName(),
      zb = {
        "&light": "." + pb,
        "&dark": "." + Xb
      };

    function Bb(ee, ie, He) {
      return new be.d(ie, {
        finish: ie => /&/.test(ie) ? ie.replace(/&\w*/, (ie => {
          if ("&" == ie) return ee;
          if (!He || !He[ie]) throw new RangeError(`Unsupported selector: ${ie}`);
          return He[ie]
        })) : ee + " " + ie
      })
    }
    const Eb = Bb("." + Tb, {
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
      }, zb),
      gb = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Ob = de.ie && de.ie_version <= 11;
    class db {
      constructor(ee) {
        this.view = ee, this.active = !1, this.editContext = null, this.selectionRange = new Qe, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = ee.contentDOM, this.observer = new MutationObserver((ie => {
          for (let ee of ie) this.queue.push(ee);
          (de.ie && de.ie_version <= 11 || de.ios && ee.composing) && ie.some((ee => "childList" == ee.type && ee.removedNodes.length || "characterData" == ee.type && ee.oldValue.length > ee.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !de.android || !1 === ee.constructor.EDIT_CONTEXT || de.chrome && de.chrome_version < 126 || (this.editContext = new Zb(ee), ee.state.facet(Ii) && (ee.contentDOM.editContext = this.editContext.editContext)), Ob && (this.onCharData = ee => {
          this.queue.push({
            target: ee.target,
            type: "characterData",
            oldValue: ee.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.jB = this.jB.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var ee;
          (null === (ee = this.view.docView) || void 0 === ee ? void 0 : ee.lastUpdate) < Date.now() - 75 && this.jB()
        })), this.resizeScroll.observe(ee.scrollDOM)), this.addWindowListeners(this.win = ee.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((ee => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), ee.length > 0 && ee[ee.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((ee => {
          ee.length > 0 && ee[ee.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(ee) {
        this.view.inputState.runHandlers("scroll", ee), this.intersecting && this.view.measure()
      }
      onScroll(ee) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(ee)
      }
      jB() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(ee) {
        ("change" != ee.type && ee.type || ee.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(ee) {
        if (this.gapIntersection && (ee.length != this.gaps.length || this.gaps.some(((ie, He) => ie != ee[He])))) {
          this.gapIntersection.disconnect();
          for (let ie of ee) this.gapIntersection.observe(ie);
          this.gaps = ee
        }
      }
      onSelectionChange(ee) {
        let ie = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: He
        } = this, ye = this.selectionRange;
        if (He.state.facet(Ii) ? He.root.activeElement != this.dom : !me(this.dom, ye)) return;
        let be = ye.anchorNode && He.docView.tile.nearest(ye.anchorNode);
        be && be.isWidget() && be.widget.ignoreEvent(ee) ? ie || (this.selectionChanged = !1) : (de.ie && de.ie_version <= 11 || de.android && de.chrome) && !He.state.selection.main.empty && ye.focusNode && Se(ye.focusNode, ye.focusOffset, ye.anchorNode, ye.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: ee
        } = this, ie = ve(ee.root);
        if (!ie) return !1;
        let He = de.safari && 11 == ee.root.nodeType && ee.root.activeElement == this.dom && function(ee, ie) {
          if (ie.getComposedRanges) {
            let He = ie.getComposedRanges(ee.root)[0];
            if (He) return tb(ee, He)
          }
          let He = null;

          function ye(ee) {
            ee.preventDefault(), ee.stopImmediatePropagation(), He = ee.getTargetRanges()[0]
          }
          return ee.contentDOM.addEventListener("beforeinput", ye, !0), ee.dom.ownerDocument.execCommand("indent"), ee.contentDOM.removeEventListener("beforeinput", ye, !0), He ? tb(ee, He) : null
        }(this.view, ie) || ie;
        if (!He || this.selectionRange.eq(He)) return !1;
        let ye = me(this.dom, He);
        return ye && !this.selectionChanged && ee.inputState.lastFocusTime > Date.now() - 200 && ee.inputState.lastTouchTime < Date.now() - 300 && function(ee, ie) {
          let He = ie.focusNode,
            ye = ie.focusOffset;
          if (!He || ie.anchorNode != He || ie.anchorOffset != ye) return !1;
          for (ye = Math.min(ye, Ie(He));;)
            if (ye) {
              if (1 != He.nodeType) return !1;
              let ee = He.childNodes[ye - 1];
              "false" == ee.contentEditable ? ye-- : (He = ee, ye = Ie(He))
            } else {
              if (He == ee) return !0;
              ye = ne(He), He = He.parentNode
            }
        }(this.dom, He) ? (this.view.inputState.lastFocusTime = 0, ee.docView.updateSelection(), !1) : (this.selectionRange.setRange(He), ye && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(ee, ie) {
        this.selectionRange.set(ee.node, ee.offset, ie.node, ie.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let ee = 0,
          ie = null;
        for (let He = this.dom; He;)
          if (1 == He.nodeType) !ie && ee < this.scrollTargets.length && this.scrollTargets[ee] == He ? ee++ : ie || (ie = this.scrollTargets.slice(0, ee)), ie && ie.push(He), He = He.assignedSlot || He.parentNode;
          else {
            if (11 != He.nodeType) break;
            He = He.host
          } if (ee < this.scrollTargets.length && !ie && (ie = this.scrollTargets.slice(0, ee)), ie) {
          for (let ee of this.scrollTargets) ee.removeEventListener("scroll", this.onScroll);
          for (let ee of this.scrollTargets = ie) ee.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(ee) {
        if (!this.active) return ee();
        try {
          return this.stop(), ee()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, gb), Ob && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Ob && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(ee, ie) {
        var He;
        if (!this.delayedAndroidKey) {
          let ee = () => {
            let ee = this.delayedAndroidKey;
            if (ee) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = ee.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && ee.force && bi(this.dom, ee.key, ee.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(ee)
        }
        this.delayedAndroidKey && "Enter" != ee || (this.delayedAndroidKey = {
          key: ee,
          keyCode: ie,
          force: this.lastChange < Date.now() - 50 || !!(null === (He = this.delayedAndroidKey) || void 0 === He ? void 0 : He.force)
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
        for (let ee of this.observer.takeRecords()) this.queue.push(ee);
        return this.queue
      }
      processRecords() {
        let ee = this.pendingRecords();
        ee.length && (this.queue = []);
        let ie = -1,
          He = -1,
          ye = !1;
        for (let be of ee) {
          let ee = this.readMutation(be);
          ee && (ee.typeOver && (ye = !0), -1 == ie ? ({
            from: ie,
            to: He
          } = ee) : (ie = Math.min(ee.from, ie), He = Math.max(ee.to, He)))
        }
        return {
          from: ie,
          to: He,
          typeOver: ye
        }
      }
      readChange() {
        let {
          from: ee,
          to: ie,
          typeOver: He
        } = this.processRecords(), ye = this.selectionChanged && me(this.dom, this.selectionRange);
        if (ee < 0 && !ye) return null;
        ee > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let be = new by(this.view, ee, ie, He);
        return this.view.docView.domChanged = {
          newSel: be.newSel ? be.newSel.main : null
        }, be
      }
      flush() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        ee && this.readSelectionRange();
        let ie = this.readChange();
        if (!ie) return this.view.requestMeasure(), !1;
        let He = this.view.state,
          ye = Ky(this.view, ie);
        return this.view.state == He && (ie.domChanged || ie.newSel && !Jy(this.view.state.selection, ie.newSel.main)) && this.view.update([]), ye
      }
      readMutation(ee) {
        let ie = this.view.docView.tile.nearest(ee.target);
        if (!ie || ie.isWidget()) return null;
        if (ie.markDirty("attributes" == ee.type), "childList" == ee.type) {
          let He = Wb(ie, ee.previousSibling || ee.target.previousSibling, -1),
            ye = Wb(ie, ee.nextSibling || ee.target.nextSibling, 1);
          return {
            from: He ? ie.posAfter(He) : ie.posAtStart,
            to: ye ? ie.posBefore(ye) : ie.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == ee.type ? {
          from: ie.posAtStart,
          to: ie.posAtEnd,
          typeOver: ee.target.nodeValue == ee.oldValue
        } : null
      }
      setWindow(ee) {
        ee != this.win && (this.removeWindowListeners(this.win), this.win = ee, this.addWindowListeners(this.win))
      }
      addWindowListeners(ee) {
        ee.addEventListener("resize", this.jB), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : ee.addEventListener("beforeprint", this.onPrint), ee.addEventListener("scroll", this.onScroll), ee.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(ee) {
        ee.removeEventListener("scroll", this.onScroll), ee.removeEventListener("resize", this.jB), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : ee.removeEventListener("beforeprint", this.onPrint), ee.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(ee) {
        this.editContext && (this.editContext.update(ee), ee.startState.facet(Ii) != ee.state.facet(Ii) && (ee.view.contentDOM.editContext = ee.state.facet(Ii) ? this.editContext.editContext : null))
      }
      destroy() {
        var ee, ie, He;
        this.stop(), null === (ee = this.intersection) || void 0 === ee || ee.disconnect(), null === (ie = this.gapIntersection) || void 0 === ie || ie.disconnect(), null === (He = this.resizeScroll) || void 0 === He || He.disconnect();
        for (let ye of this.scrollTargets) ye.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function Wb(ee, ie, He) {
      for (; ie;) {
        let ye = fH.get(ie);
        if (ye && ye.parent == ee) return ye;
        let be = ie.parentNode;
        ie = be != ee.dom ? be : He > 0 ? ie.nextSibling : ie.previousSibling
      }
      return null
    }

    function tb(ee, ie) {
      let He = ie.startContainer,
        ye = ie.startOffset,
        be = ie.endContainer,
        Me = ie.endOffset,
        Ke = ee.docView.domAtPos(ee.state.selection.main.anchor, 1);
      return Se(Ke.node, Ke.offset, be, Me) && ([He, ye, be, Me] = [be, Me, He, ye]), {
        anchorNode: He,
        anchorOffset: ye,
        focusNode: be,
        focusOffset: Me
      }
    }
    class Zb {
      constructor(ee) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(ee.state);
        let ie = this.editContext = new window.EditContext({
          text: ee.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, ee.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(ee.state.selection.main.head)
        });
        this.handlers.textupdate = He => {
          let be = ee.state.selection.main,
            {
              anchor: Me,
              head: Ke
            } = be,
            Ue = this.toEditorPos(He.updateRangeStart),
            Fe = this.toEditorPos(He.updateRangeEnd);
          ee.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: He.updateRangeStart,
            editorBase: Ue,
            drifted: !1
          });
          let Je = Fe - Ue > He.text.length;
          Ue == this.from && Me < this.from ? Ue = Me : Fe == this.to && Me > this.to && (Fe = Me);
          let oe = Fy(ee.state.sliceDoc(Ue, Fe), He.text, (Je ? be.from : be.to) - Ue, Je ? "end" : null);
          if (!oe) {
            let ie = ye.k.single(this.toEditorPos(He.selectionStart), this.toEditorPos(He.selectionEnd));
            return void(Jy(ie, be) || ee.dispatch({
              selection: ie,
              userEvent: "select"
            }))
          }
          let Re = {
            from: oe.from + Ue,
            to: oe.toA + Ue,
            insert: ye.R.of(He.text.slice(oe.from, oe.toB).split("\n"))
          };
          if ((de.mac || de.android) && Re.from == Ke - 1 && /^\. ?$/.test(He.text) && "off" == ee.contentDOM.getAttribute("autocorrect") && (Re = {
              from: Ue,
              to: Fe,
              insert: ye.R.of([He.text.replace(".", " ")])
            }), this.pendingContextChange = Re, !ee.state.readOnly) {
            let ie = this.to - this.from + (Re.to - Re.from + Re.insert.length);
            Uy(ee, Re, ye.k.single(this.toEditorPos(He.selectionStart, ie), this.toEditorPos(He.selectionEnd, ie)))
          }
          this.pendingContextChange && (this.revertPending(ee.state), this.setSelection(ee.state)), Re.from < Re.to && !Re.insert.length && ee.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(ie.text.slice(Math.max(0, He.updateRangeStart - 1), Math.min(ie.text.length, He.updateRangeStart + 1))) && this.handlers.compositionend(He)
        }, this.handlers.characterboundsupdate = He => {
          let ye = [],
            be = null;
          for (let ie = this.toEditorPos(He.rangeStart), Me = this.toEditorPos(He.rangeEnd); ie < Me; ie++) {
            let He = ee.coordsForChar(ie);
            be = He && new DOMRect(He.left, He.top, He.right - He.left, He.bottom - He.top) || be || new DOMRect, ye.push(be)
          }
          ie.updateCharacterBounds(He.rangeStart, ye)
        }, this.handlers.textformatupdate = ie => {
          let He = [];
          for (let ee of ie.getTextFormats()) {
            let ie = ee.underlineStyle,
              ye = ee.underlineThickness;
            if (!/none/i.test(ie) && !/none/i.test(ye)) {
              let be = this.toEditorPos(ee.rangeStart),
                Me = this.toEditorPos(ee.rangeEnd);
              if (be < Me) {
                let ee = `text-decoration: underline ${/^[a-z]/.test(ie)?ie+" ":"Dashed"==ie?"dashed ":"Squiggle"==ie?"wavy ":""}${/thin/i.test(ye)?1:2}px`;
                He.push(Ye.mark({
                  attributes: {
                    style: ee
                  }
                }).range(be, Me))
              }
            }
          }
          ee.dispatch({
            effects: ji.of(Ye.set(He))
          })
        }, this.handlers.compositionstart = () => {
          ee.inputState.composing < 0 && (ee.inputState.composing = 0, ee.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (ee.inputState.composing = -1, ee.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: ie
            } = this.composing;
            this.composing = null, ie && this.reset(ee.state)
          }
        };
        for (let He in this.handlers) ie.addEventListener(He, this.handlers[He]);
        this.measureReq = {
          read: ee => {
            this.editContext.updateControlBounds(ee.contentDOM.getBoundingClientRect());
            let ie = ve(ee.root);
            ie && ie.rangeCount && this.editContext.updateSelectionBounds(ie.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(ee) {
        let ie = 0,
          He = !1,
          ye = this.pendingContextChange;
        return ee.changes.iterChanges(((be, Me, Ke, Ue, Fe) => {
          if (He) return;
          let Je = Fe.length - (Me - be);
          if (ye && Me >= ye.to) {
            if (ye.from == be && ye.to == Me && ye.insert.eq(Fe)) return ye = this.pendingContextChange = null, ie += Je, void(this.to += Je);
            ye = null, this.revertPending(ee.state)
          }
          if (be += ie, (Me += ie) <= this.from) this.from += Je, this.to += Je;
          else if (be < this.to) {
            if (be < this.from || Me > this.to || this.to - this.from + Fe.length > 3e4) return void(He = !0);
            this.editContext.updateText(this.toContextPos(be), this.toContextPos(Me), Fe.toString()), this.to += Je
          }
          ie += Je
        })), ye && !He && this.revertPending(ee.state), !He
      }
      update(ee) {
        let ie = this.pendingContextChange,
          He = ee.startState.selection.main;
        this.composing && (this.composing.drifted || !ee.changes.touchesRange(He.from, He.to) && ee.transactions.some((ee => !ee.isUserEvent("input.type") && ee.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = ee.changes.mapPos(this.composing.editorBase)) : this.applyEdits(ee) && this.rangeIsValid(ee.state) ? (ee.docChanged || ee.selectionSet || ie) && this.setSelection(ee.state) : (this.pendingContextChange = null, this.reset(ee.state)), (ee.geometryChanged || ee.docChanged || ee.selectionSet) && ee.view.requestMeasure(this.measureReq)
      }
      resetRange(ee) {
        let {
          head: ie
        } = ee.selection.main;
        this.from = Math.max(0, ie - 1e4), this.to = Math.min(ee.doc.length, ie + 1e4)
      }
      reset(ee) {
        this.resetRange(ee), this.editContext.updateText(0, this.editContext.text.length, ee.doc.sliceString(this.from, this.to)), this.setSelection(ee)
      }
      revertPending(ee) {
        let ie = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(ie.from), this.toContextPos(ie.from + ie.insert.length), ee.doc.sliceString(ie.from, ie.to))
      }
      setSelection(ee) {
        let {
          main: ie
        } = ee.selection, He = this.toContextPos(Math.max(this.from, Math.min(this.to, ie.anchor))), ye = this.toContextPos(ie.head);
        this.editContext.selectionStart == He && this.editContext.selectionEnd == ye || this.editContext.updateSelection(He, ye)
      }
      rangeIsValid(ee) {
        let {
          head: ie
        } = ee.selection.main;
        return !(this.from > 0 && ie - this.from < 500 || this.to < ee.doc.length && this.to - ie < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        ee = Math.min(ee, ie);
        let He = this.composing;
        return He && He.drifted ? He.editorBase + (ee - He.contextBase) : ee + this.from
      }
      toContextPos(ee) {
        let ie = this.composing;
        return ie && ie.drifted ? ie.contextBase + (ee - ie.editorBase) : ee - this.from
      }
      destroy() {
        for (let ee in this.handlers) this.editContext.removeEventListener(ee, this.handlers[ee])
      }
    }
    class wb {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get Xie() {
        return this.viewState.Xie
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
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var ie;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), ee.parent && ee.parent.appendChild(this.dom);
        let {
          dispatch: He
        } = ee;
        this.dispatchTransactions = ee.dispatchTransactions || He && (ee => ee.forEach((ee => He(ee, this)))) || (ee => this.update(ee)), this.dispatch = this.dispatch.bind(this), this._root = ee.root || function(ee) {
          for (; ee;) {
            if (ee && (9 == ee.nodeType || 11 == ee.nodeType && ee.host)) return ee;
            ee = ee.assignedSlot || ee.parentNode
          }
          return null
        }(ee.parent) || document, this.viewState = new Mb(this, ee.state || ye.o.create(ee)), ee.scrollTo && ee.scrollTo.is(ni) && (this.viewState.scrollTarget = ee.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Gi).map((ee => new Qi(ee)));
        for (let ye of this.plugins) ye.update(this);
        this.observer = new db(this), this.inputState = new oy(this), this.inputState.ensureHandlers(this.plugins), this.docView = new CH(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (ie = document.fonts) || void 0 === ie ? void 0 : ie.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        let be = 1 == ie.length && ie[0] instanceof ye.T ? ie : 1 == ie.length && Array.isArray(ie[0]) ? ie[0] : [this.state.update(...ie)];
        this.dispatchTransactions(be, this)
      }
      update(ee) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let ie, He = !1,
          be = !1,
          Me = this.state;
        for (let ye of ee) {
          if (ye.startState != Me) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          Me = ye.state
        }
        if (this.destroyed) return void(this.viewState.state = Me);
        let Ke = this.hasFocus,
          Ue = 0,
          Fe = null;
        ee.some((ee => ee.annotation(Yy))) ? (this.inputState.notifiedFocused = Ke, Ue = 1) : Ke != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Ke, Fe = Vy(Me, Ke), Fe || (Ue = 1));
        let Je = this.observer.delayedAndroidKey,
          oe = null;
        if (Je ? (this.observer.clearDelayedAndroidKey(), oe = this.observer.readChange(), (oe && !this.state.doc.eq(Me.doc) || !this.state.selection.eq(Me.selection)) && (oe = null)) : this.observer.clear(), Me.facet(ye.o.phrases) != this.state.facet(ye.o.phrases)) return this.setState(Me);
        ie = kH.create(this, Me, ee), ie.flags |= Ue;
        let Re = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let ie of ee) {
            if (Re && (Re = Re.map(ie.changes)), ie.scrollIntoView) {
              let {
                main: ee
              } = ie.state.selection, {
                x: He,
                y: be
              } = this.state.facet(wb.cursorScrollMargin);
              Re = new Si(ee.empty ? ee : ye.k.cursor(ee.head, ee.head > ee.anchor ? -1 : 1), "nearest", "nearest", be, He)
            }
            for (let ee of ie.effects) ee.is(ni) && (Re = ee.value.clip(this.state))
          }
          this.viewState.update(ie, Re), this.bidiCache = Ab.update(this.bidiCache, ie.changes), ie.empty || (this.updatePlugins(ie), this.inputState.update(ie)), He = this.docView.update(ie), this.state.facet(oH) != this.styleModules && this.mountStyles(), be = this.updateAttrs(), this.showAnnouncements(ee), this.docView.updateSelection(He, ee.some((ee => ee.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (ie.startState.facet(qb) != ie.state.facet(qb) && (this.viewState.mustMeasureContent = !0), (He || be || Re || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), He && this.docViewUpdate(), !ie.empty)
          for (let ye of this.state.facet(ci)) try {
            ye(ie)
          } catch (ke) {
            si(this.state, ke, "update listener")
          }(Fe || oe) && Promise.resolve().then((() => {
            Fe && this.state == Fe.startState && this.dispatch(Fe), oe && !Ky(this, oe) && Je.force && bi(this.contentDOM, Je.key, Je.keyCode)
          }))
      }
      setState(ee) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = ee);
        this.updateState = 2;
        let ie = this.hasFocus;
        try {
          for (let ee of this.plugins) ee.destroy(this);
          this.viewState = new Mb(this, ee), this.plugins = ee.facet(Gi).map((ee => new Qi(ee))), this.pluginMap.clear();
          for (let ee of this.plugins) ee.update(this);
          this.docView.destroy(), this.docView = new CH(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        ie && this.focus(), this.requestMeasure()
      }
      updatePlugins(ee) {
        let ie = ee.startState.facet(Gi),
          He = ee.state.facet(Gi);
        if (ie != He) {
          let ye = [];
          for (let be of He) {
            let He = ie.indexOf(be);
            if (He < 0) ye.push(new Qi(be));
            else {
              let ie = this.plugins[He];
              ie.mustUpdate = ee, ye.push(ie)
            }
          }
          for (let ie of this.plugins) ie.mustUpdate != ee && ie.destroy(this);
          this.plugins = ye, this.pluginMap.clear()
        } else
          for (let ye of this.plugins) ye.mustUpdate = ee;
        for (let ye = 0; ye < this.plugins.length; ye++) this.plugins[ye].update(this);
        ie != He && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let ie of this.plugins) {
          let He = ie.value;
          if (He && He.docViewUpdate) try {
            He.docViewUpdate(this)
          } catch (ee) {
            si(this.state, ee, "doc view update listener")
          }
        }
      }
      measure() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, ee && this.observer.forceFlush();
        let ie = null,
          He = this.viewState.scrollParent,
          ye = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: be,
            scrollAnchorHeight: Me
          } = this.viewState;
        Math.abs(ye - this.viewState.scrollOffset) > 1 && (Me = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let ee = 0;; ee++) {
            if (Me < 0)
              if (Mi(He || this.win)) be = -1, Me = this.viewState.heightMap.height;
              else {
                let ee = this.viewState.scrollAnchorAt(ye);
                be = ee.from, Me = ee.top
              } this.updateState = 1;
            let Ue = this.viewState.measure();
            if (!Ue && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (ee > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let Fe = [];
            4 & Ue || ([this.measureRequests, Fe] = [Fe, this.measureRequests]);
            let Je = Fe.map((ee => {
                try {
                  return ee.read(this)
                } catch (ie) {
                  return si(this.state, ie), Pb
                }
              })),
              oe = kH.create(this, this.state, []),
              Re = !1;
            oe.flags |= Ue, ie ? ie.flags |= Ue : ie = oe, this.updateState = 2, oe.empty || (this.updatePlugins(oe), this.inputState.update(oe), this.updateAttrs(), Re = this.docView.update(oe), Re && this.docViewUpdate());
            for (let ee = 0; ee < Fe.length; ee++)
              if (Je[ee] != Pb) try {
                let ie = Fe[ee];
                ie.write && ie.write(Je[ee], this)
              } catch (Ke) {
                si(this.state, Ke)
              }
            if (Re && this.docView.updateSelection(!0), !oe.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, Me = -1;
                  continue
                } {
                  let ee = ((be < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(be).top) - Me) / this.scaleY;
                  if ((ee > 1 || ee < -1) && (He == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    ye += ee, He ? He.scrollTop += ee : this.win.scrollBy(0, ee), Me = -1;
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
        if (ie && !ie.empty)
          for (let Ue of this.state.facet(ci)) Ue(ie)
      }
      get themeClasses() {
        return Tb + " " + (this.state.facet(fb) ? Xb : pb) + " " + this.state.facet(qb)
      }
      updateAttrs() {
        let ee = Yb(this, eH, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          ie = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Ii) ? "true" : "false",
            class: "cm-content",
            style: `${de.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (ie["aria-readonly"] = "true"), Yb(this, iH, ie);
        let He = this.observer.ignore((() => {
          let He = we(this.contentDOM, this.contentAttrs, ie),
            ye = we(this.dom, this.editorAttrs, ee);
          return He || ye
        }));
        return this.editorAttrs = ee, this.contentAttrs = ie, He
      }
      showAnnouncements(ee) {
        let ie = !0;
        for (let He of ee)
          for (let ee of He.effects)
            if (ee.is(wb.announce)) {
              ie && (this.announceDOM.textContent = ""), ie = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = ee.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(oH);
        let ee = this.state.facet(wb.cspNonce);
        be.d.mount(this.root, this.styleModules.concat(Eb).reverse(), ee ? {
          nonce: ee
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(ee) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), ee) {
          if (this.measureRequests.indexOf(ee) > -1) return;
          if (null != ee.key)
            for (let ie = 0; ie < this.measureRequests.length; ie++)
              if (this.measureRequests[ie].key === ee.key) return void(this.measureRequests[ie] = ee);
          this.measureRequests.push(ee)
        }
      }
      plugin(ee) {
        let ie = this.pluginMap.get(ee);
        return (void 0 === ie || ie && ie.plugin != ee) && this.pluginMap.set(ee, ie = this.plugins.find((ie => ie.plugin == ee)) || null), ie && ie.update(this).value
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
      elementAtHeight(ee) {
        return this.readMeasured(), this.viewState.elementAtHeight(ee)
      }
      lineBlockAtHeight(ee) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(ee)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(ee) {
        return this.viewState.lineBlockAt(ee)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(ee, ie, He) {
        return hH(this, ee, jH(this, ee, ie, He))
      }
      moveByGroup(ee, ie) {
        return hH(this, ee, jH(this, ee, ie, (ie => function(ee, ie, He) {
          let be = ee.state.charCategorizer(ie),
            Me = be(He);
          return ee => {
            let ie = be(ee);
            return Me == ye.i.Space && (Me = ie), Me == ie
          }
        }(this, ee.head, ie))))
      }
      visualLineSide(ee, ie) {
        let He = this.bidiSpans(ee),
          be = this.textDirectionAt(ee.from),
          Me = He[ie ? He.length - 1 : 0];
        return ye.k.cursor(Me.side(ie, be) + ee.from, Me.forward(!ie, be) ? 1 : -1)
      }
      moveToLineBoundary(ee, ie) {
        return function(ee, ie, He, be) {
          let Me = nH(ee, ie.head, ie.assoc || -1),
            Ke = be && Me.type == Ae.Text && (ee.lineWrapping || Me.widgetLineBreaks) ? ee.coordsAtPos(ie.assoc < 0 && ie.head > Me.from ? ie.head - 1 : ie.head) : null;
          if (Ke) {
            let ie = ee.dom.getBoundingClientRect(),
              be = ee.textDirectionAt(Me.from),
              Ue = ee.posAtCoords({
                x: He == (be == Ji.LTR) ? ie.right - 1 : ie.left + 1,
                y: (Ke.top + Ke.bottom) / 2
              });
            if (null != Ue) return ye.k.cursor(Ue, He ? -1 : 1)
          }
          return ye.k.cursor(He ? Me.to : Me.from, He ? -1 : 1)
        }(this, ee, ie, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(ee, ie, He) {
        return hH(this, ee, function(ee, ie, He, be) {
          let Me = ie.head,
            Ke = He ? 1 : -1;
          if (Me == (He ? ee.state.doc.length : 0)) return ye.k.cursor(Me, ie.assoc);
          let Ue, Fe = ie.goalColumn,
            Je = ee.contentDOM.getBoundingClientRect(),
            oe = ee.coordsAtPos(Me, ie.assoc || ((ie.empty ? He : ie.head == ie.from) ? 1 : -1)),
            Re = ee.documentTop;
          if (oe) null == Fe && (Fe = oe.left - Je.left), Ue = Ke < 0 ? oe.top : oe.bottom;
          else {
            let ie = ee.viewState.lineBlockAt(Me);
            null == Fe && (Fe = Math.min(Je.right - Je.left, ee.defaultCharacterWidth * (Me - ie.from))), Ue = (Ke < 0 ? ie.top : ie.bottom) + Re
          }
          let ke = Je.left + Fe,
            qe = ee.viewState.heightOracle.textHeight >> 1,
            fe = null !== be && void 0 !== be ? be : qe;
          for (let Te = 0;; Te += qe) {
            let ie = Ue + (fe + Te) * Ke,
              be = GH(ee, {
                x: ke,
                y: ie
              }, !1, Ke);
            if (He ? ie > Je.bottom : ie < Je.top) return ye.k.cursor(be.pos, be.assoc);
            let Me = ee.coordsAtPos(be.pos, be.assoc),
              oe = Me ? (Me.top + Me.bottom) / 2 : 0;
            if (!Me || (He ? oe > Ue : oe < Ue)) return ye.k.cursor(be.pos, be.assoc, void 0, Fe)
          }
        }(this, ee, ie, He))
      }
      domAtPos(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(ee, ie)
      }
      posAtDOM(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(ee, ie)
      }
      posAtCoords(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let He = GH(this, ee, ie);
        return He && He.pos
      }
      posAndSideAtCoords(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), GH(this, ee, ie)
      }
      coordsAtPos(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let He = this.docView.coordsAt(ee, ie);
        if (!He || He.left == He.right) return He;
        let ye = this.state.doc.lineAt(ee),
          be = this.bidiSpans(ye);
        return he(He, be[Ei.find(be, ee - ye.from, -1, ie)].dir == Ji.LTR == ie > 0)
      }
      coordsForChar(ee) {
        return this.readMeasured(), this.docView.coordsForChar(ee)
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
      textDirectionAt(ee) {
        return !this.state.facet(ui) || ee < this.viewport.from || ee > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(ee))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(ee) {
        if (ee.length > Db) return Zi(ee.length);
        let ie, He = this.textDirectionAt(ee.from);
        for (let be of this.bidiCache)
          if (be.from == ee.from && be.dir == He && (be.fresh || gi(be.isolates, ie = UH(this, ee)))) return be.order;
        ie || (ie = UH(this, ee));
        let ye = ti(ee.text, He, ie);
        return this.bidiCache.push(new Ab(ee.from, ee.to, He, ie, !0, ye)), ye
      }
      get hasFocus() {
        var ee;
        return (this.dom.ownerDocument.hasFocus() || de.safari && (null === (ee = this.inputState) || void 0 === ee ? void 0 : ee.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          Hi(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(ee) {
        this._root != ee && (this._root = ee, this.observer.setWindow((9 == ee.nodeType ? ee : ee.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let ee of this.plugins) ee.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var He, be, Me, Ke;
        return ni.of(new Si("number" == typeof ee ? ye.k.cursor(ee) : ee, null !== (He = ie.y) && void 0 !== He ? He : "nearest", null !== (be = ie.x) && void 0 !== be ? be : "nearest", null !== (Me = ie.yMargin) && void 0 !== Me ? Me : 5, null !== (Ke = ie.xMargin) && void 0 !== Ke ? Ke : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: ee,
          scrollLeft: ie
        } = this.scrollDOM, He = this.viewState.scrollAnchorAt(ee);
        return ni.of(new Si(ye.k.cursor(He.from), "start", "start", He.top - ee, ie, !0))
      }
      setTabFocusMode(ee) {
        null == ee ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof ee ? this.inputState.tabFocusMode = ee ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + ee)
      }
      static domEventHandlers(ee) {
        return ri.define((() => ({})), {
          eventHandlers: ee
        })
      }
      static domEventObservers(ee) {
        return ri.define((() => ({})), {
          eventObservers: ee
        })
      }
      static theme(ee, ie) {
        let He = be.d.newName(),
          ye = [qb.of(He), oH.of(Bb(`.${He}`, ee))];
        return ie && ie.dark && ye.push(fb.of(!0)), ye
      }
      static baseTheme(ee) {
        return ye.x.lowest(oH.of(Bb("." + Tb, ee, zb)))
      }
      static findFromDOM(ee) {
        var ie;
        let He = ee.querySelector(".cm-content"),
          ye = He && fH.get(He) || fH.get(ee);
        return (null === (ie = null === ye || void 0 === ye ? void 0 : ye.root) || void 0 === ie ? void 0 : ie.view) || null
      }
    }
    wb.styleModule = oH, wb.inputHandler = xi, wb.clipboardInputFilter = Ci, wb.clipboardOutputFilter = vi, wb.scrollHandler = li, wb.focusChangeEffect = Li, wb.perLineTextDirection = ui, wb.exceptionSink = ai, wb.updateListener = ci, wb.editable = Ii, wb.mouseSelectionStyle = Vi, wb.dragMovesSelection = Yi, wb.clickAddsSelectionRange = Ai, wb.MM = HH, wb.blockWrappers = yH, wb.outerDecorations = bH, wb.atomicRanges = MH, wb.bidiIsolatedRanges = KH, wb.cursorScrollMargin = ye.q.define({
      combine: ee => {
        let ie = 5,
          He = 5;
        for (let ye of ee) "number" == typeof ye ? ie = He = ye : ({
          x: ie,
          y: He
        } = ye);
        return {
          x: ie,
          y: He
        }
      }
    }), wb.scrollMargins = FH, wb.darkTheme = fb, wb.cspNonce = ye.q.define({
      combine: ee => ee.length ? ee[0] : ""
    }), wb.contentAttributes = iH, wb.editorAttributes = eH, wb.lineWrapping = wb.contentAttributes.of({
      class: "cm-lineWrapping"
    }), wb.announce = ye.K.define();
    const Db = 4096,
      Pb = {};
    class Ab {
      constructor(ee, ie, He, ye, be, Me) {
        this.from = ee, this.to = ie, this.dir = He, this.isolates = ye, this.fresh = be, this.order = Me
      }
      static update(ee, ie) {
        if (ie.empty && !ee.some((ee => ee.fresh))) return ee;
        let He = [],
          ye = ee.length ? ee[ee.length - 1].dir : Ji.LTR;
        for (let be = Math.max(0, ee.length - 10); be < ee.length; be++) {
          let Me = ee[be];
          Me.dir != ye || ie.touchesRange(Me.from, Me.to) || He.push(new Ab(ie.mapPos(Me.from, 1), ie.mapPos(Me.to, -1), Me.dir, Me.isolates, !1, Me.order))
        }
        return He
      }
    }

    function Yb(ee, ie, He) {
      for (let ye = ee.state.facet(ie), be = ye.length - 1; be >= 0; be--) {
        let ie = ye[be],
          Me = "function" == typeof ie ? ie(ee) : ie;
        Me && We(Me, He)
      }
      return He
    }
    const Vb = de.mac ? "mac" : de.windows ? "win" : de.linux ? "linux" : "key";

    function ab(ee, ie, He) {
      return ie.altKey && (ee = "Alt-" + ee), ie.ctrlKey && (ee = "Ctrl-" + ee), ie.metaKey && (ee = "Meta-" + ee), !1 !== He && ie.shiftKey && (ee = "Shift-" + ee), ee
    }
    const cb = ye.x.default(wb.domEventHandlers({
        keydown: (ee, ie) => Sb(Cb(ie.state), ee, ie, "editor")
      })),
      xb = ye.q.define({
        enables: cb
      }),
      Lb = new WeakMap;

    function Cb(ee) {
      let ie = ee.facet(xb),
        He = Lb.get(ie);
      return He || Lb.set(ie, He = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vb,
          He = Object.create(null),
          ye = Object.create(null),
          be = (ee, ie) => {
            let He = ye[ee];
            if (null == He) ye[ee] = ie;
            else if (He != ie) throw new Error("Key binding " + ee + " is used both as a regular binding and as a multi-stroke prefix")
          },
          Me = (ee, ye, Me, Ke, Ue) => {
            var Fe, Je;
            let oe = He[ee] || (He[ee] = Object.create(null)),
              Re = ye.split(/ (?!$)/).map((ee => function(ee, ie) {
                const He = ee.split(/-(?!$)/);
                let ye, be, Me, Ke, Ue = He[He.length - 1];
                "Space" == Ue && (Ue = " ");
                for (let Fe = 0; Fe < He.length - 1; ++Fe) {
                  const ee = He[Fe];
                  if (/^(cmd|meta|m)$/i.test(ee)) Ke = !0;
                  else if (/^a(lt)?$/i.test(ee)) ye = !0;
                  else if (/^(c|ctrl|control)$/i.test(ee)) be = !0;
                  else if (/^s(hift)?$/i.test(ee)) Me = !0;
                  else {
                    if (!/^mod$/i.test(ee)) throw new Error("Unrecognized modifier name: " + ee);
                    "mac" == ie ? Ke = !0 : be = !0
                  }
                }
                return ye && (Ue = "Alt-" + Ue), be && (Ue = "Ctrl-" + Ue), Ke && (Ue = "Meta-" + Ue), Me && (Ue = "Shift-" + Ue), Ue
              }(ee, ie)));
            for (let ie = 1; ie < Re.length; ie++) {
              let He = Re.slice(0, ie).join(" ");
              be(He, !0), oe[He] || (oe[He] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [ie => {
                  let ye = ub = {
                    view: ie,
                    prefix: He,
                    scope: ee
                  };
                  return setTimeout((() => {
                    ub == ye && (ub = null)
                  }), mb), !0
                }]
              })
            }
            let ke = Re.join(" ");
            be(ke, !1);
            let qe = oe[ke] || (oe[ke] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Je = null === (Fe = oe._any) || void 0 === Fe ? void 0 : Fe.run) || void 0 === Je ? void 0 : Je.slice()) || []
            });
            Me && qe.run.push(Me), Ke && (qe.preventDefault = !0), Ue && (qe.stopPropagation = !0)
          };
        for (let Ke of ee) {
          let ee = Ke.scope ? Ke.scope.split(" ") : ["editor"];
          if (Ke.any)
            for (let ie of ee) {
              let ee = He[ie] || (He[ie] = Object.create(null));
              ee._any || (ee._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: ye
              } = Ke;
              for (let ie in ee) ee[ie].run.push((ee => ye(ee, lb)))
            }
          let ye = Ke[ie] || Ke.key;
          if (ye)
            for (let ie of ee) Me(ie, ye, Ke.run, Ke.preventDefault, Ke.stopPropagation), Ke.shift && Me(ie, "Shift-" + ye, Ke.shift, Ke.preventDefault, Ke.stopPropagation)
        }
        return He
      }(ie.reduce(((ee, ie) => ee.concat(ie)), []))), He
    }

    function vb(ee, ie, He) {
      return Sb(Cb(ee.state), ie, ee, He)
    }
    let ub = null;
    const mb = 4e3;
    let lb = null;

    function Sb(ee, ie, He, be) {
      lb = ie;
      let Je = function(ee) {
          var ie = !(Ue && ee.metaKey && ee.shiftKey && !ee.ctrlKey && !ee.altKey || Fe && ee.shiftKey && ee.key && 1 == ee.key.length || "Unidentified" == ee.key) && ee.key || (ee.shiftKey ? Ke : Me)[ee.keyCode] || ee.key || "Unidentified";
          return "Esc" == ie && (ie = "Escape"), "Del" == ie && (ie = "Delete"), "Left" == ie && (ie = "ArrowLeft"), "Up" == ie && (ie = "ArrowUp"), "Right" == ie && (ie = "ArrowRight"), "Down" == ie && (ie = "ArrowDown"), ie
        }(ie),
        oe = (0, ye.X)(Je, 0),
        Re = (0, ye.$)(oe) == Je.length && " " != Je,
        ke = "",
        qe = !1,
        fe = !1,
        Te = !1;
      ub && ub.view == He && ub.scope == be && (ke = ub.prefix + " ", Ty.indexOf(ie.keyCode) < 0 && (fe = !0, ub = null));
      let pe, Xe, ze = new Set,
        Be = ee => {
          if (ee) {
            for (let ie of ee.run)
              if (!ze.has(ie) && (ze.add(ie), ie(He))) return ee.stopPropagation && (Te = !0), !0;
            ee.preventDefault && (ee.stopPropagation && (Te = !0), fe = !0)
          }
          return !1
        },
        Ee = ee[be];
      return Ee && (Be(Ee[ke + ab(Je, ie, !Re)]) ? qe = !0 : !Re || !(ie.altKey || ie.metaKey || ie.ctrlKey) || de.windows && ie.ctrlKey && ie.altKey || de.mac && ie.altKey && !ie.ctrlKey && !ie.metaKey || !(pe = Me[ie.keyCode]) || pe == Je ? Re && ie.shiftKey && Be(Ee[ke + ab(Je, ie, !0)]) && (qe = !0) : (Be(Ee[ke + ab(pe, ie, !0)]) || ie.shiftKey && (Xe = Ke[ie.keyCode]) != Je && Xe != pe && Be(Ee[ke + ab(Xe, ie, !1)])) && (qe = !0), !qe && Be(Ee._any) && (qe = !0)), fe && (qe = !0), qe && Te && ie.stopPropagation(), lb = null, qe
    }
    class nb {
      constructor(ee, ie, He, ye, be) {
        this.className = ee, this.left = ie, this.top = He, this.width = ye, this.height = be
      }
      draw() {
        let ee = document.createElement("div");
        return ee.className = this.className, this.adjust(ee), ee
      }
      update(ee, ie) {
        return ie.className == this.className && (this.adjust(ee), !0)
      }
      adjust(ee) {
        ee.style.left = this.left + "px", ee.style.top = this.top + "px", null != this.width && (ee.style.width = this.width + "px"), ee.style.height = this.height + "px"
      }
      eq(ee) {
        return this.left == ee.left && this.top == ee.top && this.width == ee.width && this.height == ee.height && this.className == ee.className
      }
      static forRange(ee, ie, He) {
        if (He.empty) {
          let ye = ee.coordsAtPos(He.head, He.assoc || 1);
          if (!ye) return [];
          let be = jb(ee);
          return [new nb(ie, ye.left - be.left, ye.top - be.top, null, ye.bottom - ye.top)]
        }
        return function(ee, ie, He) {
          if (He.to <= ee.viewport.from || He.from >= ee.viewport.to) return [];
          let ye = Math.max(He.from, ee.viewport.from),
            be = Math.min(He.to, ee.viewport.to),
            Me = ee.textDirection == Ji.LTR,
            Ke = ee.contentDOM,
            Ue = Ke.getBoundingClientRect(),
            Fe = jb(ee),
            Je = Ke.querySelector(".cm-line"),
            oe = Je && window.getComputedStyle(Je),
            Re = Ue.left + (oe ? parseInt(oe.paddingLeft) + Math.min(0, parseInt(oe.textIndent)) : 0),
            ke = Ue.right - (oe ? parseInt(oe.paddingRight) : 0),
            qe = nH(ee, ye, 1),
            fe = nH(ee, be, -1),
            Te = qe.type == Ae.Text ? qe : null,
            pe = fe.type == Ae.Text ? fe : null;
          Te && (ee.lineWrapping || qe.widgetLineBreaks) && (Te = sb(ee, ye, 1, Te));
          pe && (ee.lineWrapping || fe.widgetLineBreaks) && (pe = sb(ee, be, -1, pe));
          if (Te && pe && Te.from == pe.from && Te.to == pe.to) return ze(Be(He.from, He.to, Te));
          {
            let ie = Te ? Be(He.from, null, Te) : Ee(qe, !1),
              ye = pe ? Be(null, He.to, pe) : Ee(fe, !0),
              be = [];
            return (Te || qe).to < (pe || fe).from - (Te && pe ? 1 : 0) || qe.widgetLineBreaks > 1 && ie.bottom + ee.defaultLineHeight / 2 < ye.top ? be.push(Xe(Re, ie.bottom, ke, ye.top)) : ie.bottom < ye.top && ee.elementAtHeight((ie.bottom + ye.top) / 2).type == Ae.Text && (ie.bottom = ye.top = (ie.bottom + ye.top) / 2), ze(ie).concat(be).concat(ze(ye))
          }

          function Xe(ee, He, ye, be) {
            return new nb(ie, ee - Fe.left, He - Fe.top, Math.max(0, ye - ee), be - He)
          }

          function ze(ee) {
            let {
              top: ie,
              bottom: He,
              horizontal: ye
            } = ee, be = [];
            for (let Me = 0; Me < ye.length; Me += 2) be.push(Xe(ye[Me], ie, ye[Me + 1], He));
            return be
          }

          function Be(ie, He, ye) {
            let be = 1e9,
              Ke = -1e9,
              Ue = [];

            function Fe(ie, He, Fe, Je, oe) {
              let qe = ee.coordsAtPos(ie, ie == ye.to ? -2 : 2),
                fe = ee.coordsAtPos(Fe, Fe == ye.from ? 2 : -2);
              qe && fe && (be = Math.min(qe.top, fe.top, be), Ke = Math.max(qe.bottom, fe.bottom, Ke), oe == Ji.LTR ? Ue.push(Me && He ? Re : qe.left, Me && Je ? ke : fe.right) : Ue.push(!Me && Je ? Re : fe.left, !Me && He ? ke : qe.right))
            }
            let Je = null !== ie && void 0 !== ie ? ie : ye.from,
              oe = null !== He && void 0 !== He ? He : ye.to;
            for (let Me of ee.Xie)
              if (Me.to > Je && Me.from < oe)
                for (let ye = Math.max(Me.from, Je), be = Math.min(Me.to, oe);;) {
                  let Me = ee.state.doc.lineAt(ye);
                  for (let Ke of ee.bidiSpans(Me)) {
                    let ee = Ke.from + Me.from,
                      Ue = Ke.to + Me.from;
                    if (ee >= be) break;
                    Ue > ye && Fe(Math.max(ee, ye), null == ie && ee <= Je, Math.min(Ue, be), null == He && Ue >= oe, Ke.dir)
                  }
                  if (ye = Me.to + 1, ye >= be) break
                }
            return 0 == Ue.length && Fe(Je, null == ie, oe, null == He, ee.textDirection), {
              top: be,
              bottom: Ke,
              horizontal: Ue
            }
          }

          function Ee(ee, ie) {
            let He = Ue.top + (ie ? ee.top : ee.bottom);
            return {
              top: He,
              bottom: He,
              horizontal: []
            }
          }
        }(ee, ie, He)
      }
    }

    function jb(ee) {
      let ie = ee.scrollDOM.getBoundingClientRect();
      return {
        left: (ee.textDirection == Ji.LTR ? ie.left : ie.right - ee.scrollDOM.clientWidth * ee.scaleX) - ee.scrollDOM.scrollLeft * ee.scaleX,
        top: ie.top - ee.scrollDOM.scrollTop * ee.scaleY
      }
    }

    function sb(ee, ie, He, ye) {
      let be = ee.coordsAtPos(ie, 2 * He);
      if (!be) return ye;
      let Me = ee.dom.getBoundingClientRect(),
        Ke = (be.top + be.bottom) / 2,
        Ue = ee.posAtCoords({
          x: Me.left + 1,
          y: Ke
        }),
        Fe = ee.posAtCoords({
          x: Me.right - 1,
          y: Ke
        });
      return null == Ue || null == Fe ? ye : {
        from: Math.max(ye.from, Math.min(Ue, Fe)),
        to: Math.min(ye.to, Math.max(Ue, Fe))
      }
    }
    class Ib {
      constructor(ee, ie) {
        this.view = ee, this.layer = ie, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = ee.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), ie.above && this.dom.classList.add("cm-layer-above"), ie.class && this.dom.classList.add(ie.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(ee.state), ee.requestMeasure(this.measureReq), ie.mount && ie.mount(this.dom, ee)
      }
      update(ee) {
        ee.startState.facet(hb) != ee.state.facet(hb) && this.setOrder(ee.state), (this.layer.update(ee, this.dom) || ee.geometryChanged) && (this.scale(), ee.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(ee) {
        !1 !== this.layer.updateOnDocViewUpdate && ee.requestMeasure(this.measureReq)
      }
      setOrder(ee) {
        let ie = 0,
          He = ee.facet(hb);
        for (; ie < He.length && He[ie] != this.layer;) ie++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - ie)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: ee,
          scaleY: ie
        } = this.view;
        ee == this.scaleX && ie == this.scaleY || (this.scaleX = ee, this.scaleY = ie, this.dom.style.transform = `scale(${1/ee}, ${1/ie})`)
      }
      draw(ee) {
        if (ee.length != this.drawn.length || ee.some(((ee, ie) => {
            return He = ee, ye = this.drawn[ie], !(He.constructor == ye.constructor && He.eq(ye));
            var He, ye
          }))) {
          let ie = this.dom.firstChild,
            He = 0;
          for (let ye of ee) ye.update && ie && ye.constructor && this.drawn[He].constructor && ye.update(ie, this.drawn[He]) ? (ie = ie.nextSibling, He++) : this.dom.insertBefore(ye.draw(), ie);
          for (; ie;) {
            let ee = ie.nextSibling;
            ie.remove(), ie = ee
          }
          this.drawn = ee, de.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const hb = ye.q.define();

    function Nb(ee) {
      return [ri.define((ie => new Ib(ie, ee))), hb.of(ee)]
    }
    const Gb = ye.q.define({
      combine: ee => (0, ye.cb)(ee, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (ee, ie) => Math.min(ee, ie),
        drawRangeCursor: (ee, ie) => ee || ie
      })
    });

    function rb() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Gb.of(ee), eM, HM, yM, mi.of(!0)]
    }

    function Qb(ee) {
      return ee.startState.facet(Gb) != ee.state.facet(Gb)
    }
    const eM = Nb({
      above: !0,
      markers(ee) {
        let {
          state: ie
        } = ee, He = ie.facet(Gb), be = [];
        for (let Me of ie.selection.zp) {
          let Ke = Me == ie.selection.main;
          if (Me.empty || He.drawRangeCursor && !(Ke && de.ios && He.iosSelectionHandles)) {
            let ie = Ke ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              He = Me.empty ? Me : ye.k.cursor(Me.head, Me.assoc);
            for (let ye of nb.forRange(ee, ie, He)) be.push(ye)
          }
        }
        return be
      },
      update(ee, ie) {
        ee.transactions.some((ee => ee.selection)) && (ie.style.animationName = "cm-blink" == ie.style.animationName ? "cm-blink2" : "cm-blink");
        let He = Qb(ee);
        return He && iM(ee.state, ie), ee.docChanged || ee.selectionSet || He
      },
      mount(ee, ie) {
        iM(ie.state, ee)
      },
      class: "cm-cursorLayer"
    });

    function iM(ee, ie) {
      ie.style.animationDuration = ee.facet(Gb).cursorBlinkRate + "ms"
    }
    const HM = Nb({
        above: !1,
        markers(ee) {
          let ie = [],
            {
              main: He,
              zp: be
            } = ee.state.selection;
          for (let ye of be)
            if (!ye.empty)
              for (let He of nb.forRange(ee, "cm-selectionBackground", ye)) ie.push(He);
          if (de.ios && !He.empty && ee.state.facet(Gb).iosSelectionHandles) {
            for (let be of nb.forRange(ee, "cm-selectionHandle cm-selectionHandle-start", ye.k.cursor(He.from, 1))) ie.push(be);
            for (let be of nb.forRange(ee, "cm-selectionHandle cm-selectionHandle-end", ye.k.cursor(He.to, 1))) ie.push(be)
          }
          return ie
        },
        update: (ee, ie) => ee.docChanged || ee.selectionSet || ee.viewportChanged || Qb(ee),
        class: "cm-selectionLayer"
      }),
      yM = ye.x.highest(wb.theme({
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
      bM = ye.K.define({
        map: (ee, ie) => null == ee ? null : ie.mapPos(ee)
      }),
      MM = ye.N.define({
        create: () => null,
        update: (ee, ie) => (null != ee && (ee = ie.changes.mapPos(ee)), ie.effects.reduce(((ee, ie) => ie.is(bM) ? ie.value : ee), ee))
      }),
      KM = ri.fromClass(class {
        constructor(ee) {
          this.view = ee, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(ee) {
          var ie;
          let He = ee.state.field(MM);
          null == He ? null != this.cursor && (null === (ie = this.cursor) || void 0 === ie || ie.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (ee.startState.field(MM) != He || ee.docChanged || ee.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: ee
          } = this, ie = ee.state.field(MM), He = null != ie && ee.coordsAtPos(ie);
          if (!He) return null;
          let ye = ee.scrollDOM.getBoundingClientRect();
          return {
            left: He.left - ye.left + ee.scrollDOM.scrollLeft * ee.scaleX,
            top: He.top - ye.top + ee.scrollDOM.scrollTop * ee.scaleY,
            height: He.bottom - He.top
          }
        }
        drawCursor(ee) {
          if (this.cursor) {
            let {
              scaleX: ie,
              scaleY: He
            } = this.view;
            ee ? (this.cursor.style.left = ee.left / ie + "px", this.cursor.style.top = ee.top / He + "px", this.cursor.style.height = ee.height / He + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(ee) {
          this.view.state.field(MM) != ee && this.view.dispatch({
            effects: bM.of(ee)
          })
        }
      }, {
        eventObservers: {
          dragover(ee) {
            this.setDropPos(this.view.posAtCoords({
              x: ee.clientX,
              y: ee.clientY
            }))
          },
          dragleave(ee) {
            ee.target != this.view.contentDOM && this.view.contentDOM.contains(ee.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function UM() {
      return [MM, KM]
    }

    function FM(ee, ie, He, ye, be) {
      ie.lastIndex = 0;
      for (let Me, Ke = ee.iterRange(He, ye), Ue = He; !Ke.next().done; Ue += Ke.value.length)
        if (!Ke.lineBreak)
          for (; Me = ie.exec(Ke.value);) be(Ue + Me.index, Me)
    }
    class JM {
      constructor(ee) {
        const {
          regexp: ie,
          decoration: He,
          decorate: ye,
          boundary: be,
          maxLength: Me = 1e3
        } = ee;
        if (!ie.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = ie, ye) this.addMatch = (ee, ie, He, be) => ye(be, He, He + ee[0].length, ee, ie);
        else if ("function" == typeof He) this.addMatch = (ee, ie, ye, be) => {
          let Me = He(ee, ie, ye);
          Me && be(ye, ye + ee[0].length, Me)
        };
        else {
          if (!He) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (ee, ie, ye, be) => be(ye, ye + ee[0].length, He)
        }
        this.boundary = be, this.maxLength = Me
      }
      createDeco(ee) {
        let ie = new ye.z,
          He = ie.add.bind(ie);
        for (let {
            from: ye,
            to: be
          }
          of
          function(ee, ie) {
            let He = ee.Xie;
            if (1 == He.length && He[0].from == ee.viewport.from && He[0].to == ee.viewport.to) return He;
            let ye = [];
            for (let {
                from: be,
                to: Me
              }
              of He) be = Math.max(ee.state.doc.lineAt(be).from, be - ie), Me = Math.min(ee.state.doc.lineAt(Me).to, Me + ie), ye.length && ye[ye.length - 1].to >= be ? ye[ye.length - 1].to = Me : ye.push({
              from: be,
              to: Me
            });
            return ye
          }(ee, this.maxLength)) FM(ee.state.doc, this.regexp, ye, be, ((ie, ye) => this.addMatch(ye, ee, ie, He)));
        return ie.finish()
      }
      updateDeco(ee, ie) {
        let He = 1e9,
          ye = -1;
        return ee.docChanged && ee.changes.iterChanges(((ie, be, Me, Ke) => {
          Ke >= ee.view.viewport.from && Me <= ee.view.viewport.to && (He = Math.min(Me, He), ye = Math.max(Ke, ye))
        })), ee.viewportMoved || ye - He > 1e3 ? this.createDeco(ee.view) : ye > -1 ? this.updateRange(ee.view, ie.map(ee.changes), He, ye) : ie
      }
      updateRange(ee, ie, He, ye) {
        for (let be of ee.Xie) {
          let Me = Math.max(be.from, He),
            Ke = Math.min(be.to, ye);
          if (Ke >= Me) {
            let He = ee.state.doc.lineAt(Me),
              ye = He.to < Ke ? ee.state.doc.lineAt(Ke) : He,
              Ue = Math.max(be.from, He.from),
              Fe = Math.min(be.to, ye.to);
            if (this.boundary) {
              for (; Me > He.from; Me--)
                if (this.boundary.test(He.text[Me - 1 - He.from])) {
                  Ue = Me;
                  break
                } for (; Ke < ye.to; Ke++)
                if (this.boundary.test(ye.text[Ke - ye.from])) {
                  Fe = Ke;
                  break
                }
            }
            let Je, oe = [],
              Re = (ee, ie, He) => oe.push(He.range(ee, ie));
            if (He == ye)
              for (this.regexp.lastIndex = Ue - He.from;
                (Je = this.regexp.exec(He.text)) && Je.index < Fe - He.from;) this.addMatch(Je, ee, Je.index + He.from, Re);
            else FM(ee.state.doc, this.regexp, Ue, Fe, ((ie, He) => this.addMatch(He, ee, ie, Re)));
            ie = ie.update({
              filterFrom: Ue,
              filterTo: Fe,
              filter: (ee, ie) => ee < Ue || ie > Fe,
              add: oe
            })
          }
        }
        return ie
      }
    }
    const oM = null != /x/.unicode ? "gu" : "g",
      RM = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", oM),
      kM = {
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
    let qM = null;
    const fM = ye.q.define({
      combine(ee) {
        let ie = (0, ye.cb)(ee, {
          render: null,
          specialChars: RM,
          addSpecialChars: null
        });
        return (ie.replaceTabs = ! function() {
          var ee;
          if (null == qM && "undefined" != typeof document && document.body) {
            let ie = document.body.style;
            qM = null != (null !== (ee = ie.tabSize) && void 0 !== ee ? ee : ie.MozTabSize)
          }
          return qM || !1
        }()) && (ie.specialChars = new RegExp("\t|" + ie.specialChars.source, oM)), ie.addSpecialChars && (ie.specialChars = new RegExp(ie.specialChars.source + "|" + ie.addSpecialChars.source, oM)), ie
      }
    });

    function TM() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [fM.of(ee), pM || (pM = ri.fromClass(class {
        constructor(ee) {
          this.view = ee, this.MM = Ye.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(ee.state.facet(fM)), this.MM = this.decorator.createDeco(ee)
        }
        makeDecorator(ee) {
          return new JM({
            regexp: ee.specialChars,
            decoration: (ie, He, be) => {
              let {
                doc: Me
              } = He.state, Ke = (0, ye.X)(ie[0], 0);
              if (9 == Ke) {
                let ee = Me.lineAt(be),
                  ie = He.state.tabSize,
                  Ke = (0, ye.gb)(ee.text, ie, be - ee.from);
                return Ye.replace({
                  widget: new zM((ie - Ke % ie) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[Ke] || (this.decorationCache[Ke] = Ye.replace({
                widget: new XM(ee, Ke)
              }))
            },
            boundary: ee.replaceTabs ? void 0 : /[^]/
          })
        }
        update(ee) {
          let ie = ee.state.facet(fM);
          ee.startState.facet(fM) != ie ? (this.decorator = this.makeDecorator(ie), this.MM = this.decorator.createDeco(ee.view)) : this.MM = this.decorator.updateDeco(ee, this.MM)
        }
      }, {
        MM: ee => ee.MM
      }))]
    }
    let pM = null;
    class XM extends Pe {
      constructor(ee, ie) {
        super(), this.options = ee, this.code = ie
      }
      eq(ee) {
        return ee.code == this.code
      }
      toDOM(ee) {
        let ie = function(ee) {
            return ee >= 32 ? "\u2022" : 10 == ee ? "\u2424" : String.fromCharCode(9216 + ee)
          }(this.code),
          He = ee.state.phrase("Control character") + " " + (kM[this.code] || "0x" + this.code.toString(16)),
          ye = this.options.render && this.options.render(this.code, He, ie);
        if (ye) return ye;
        let be = document.createElement("span");
        return be.textContent = ie, be.title = He, be.setAttribute("aria-label", He), be.className = "cm-specialChar", be
      }
      ignoreEvent() {
        return !1
      }
    }
    class zM extends Pe {
      constructor(ee) {
        super(), this.width = ee
      }
      eq(ee) {
        return ee.width == this.width
      }
      toDOM() {
        let ee = document.createElement("span");
        return ee.textContent = "\t", ee.className = "cm-tab", ee.style.width = this.width + "px", ee
      }
      ignoreEvent() {
        return !1
      }
    }

    function BM() {
      return gM
    }
    const EM = Ye.line({
        class: "cm-activeLine"
      }),
      gM = ri.fromClass(class {
        constructor(ee) {
          this.MM = this.getDeco(ee)
        }
        update(ee) {
          (ee.docChanged || ee.selectionSet) && (this.MM = this.getDeco(ee.view))
        }
        getDeco(ee) {
          let ie = -1,
            He = [];
          for (let ye of ee.state.selection.zp) {
            let be = ee.lineBlockAt(ye.head);
            be.from > ie && (He.push(EM.range(be.from)), ie = be.from)
          }
          return Ye.set(He)
        }
      }, {
        MM: ee => ee.MM
      });
    class OM extends Pe {
      constructor(ee) {
        super(), this.content = ee
      }
      toDOM(ee) {
        let ie = document.createElement("span");
        return ie.className = "cm-placeholder", ie.style.pointerEvents = "none", ie.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(ee) : this.content.cloneNode(!0)), ie.setAttribute("aria-hidden", "true"), ie
      }
      coordsAt(ee) {
        let ie = ee.firstChild ? le(ee.firstChild) : [];
        if (!ie.length) return null;
        let He = window.getComputedStyle(ee.parentNode),
          ye = he(ie[0], "rtl" != He.direction),
          be = parseInt(He.lineHeight);
        return ye.bottom - ye.top > 1.5 * be ? {
          left: ye.left,
          right: ye.right,
          top: ye.top,
          bottom: ye.top + be
        } : ye
      }
      ignoreEvent() {
        return !1
      }
    }

    function dM(ee) {
      let ie = ri.fromClass(class {
        constructor(ie) {
          this.view = ie, this.placeholder = ee ? Ye.set([Ye.widget({
            widget: new OM(ee),
            side: 1
          }).range(0)]) : Ye.none
        }
        get MM() {
          return this.view.state.doc.length ? Ye.none : this.placeholder
        }
      }, {
        MM: ee => ee.MM
      });
      return "string" == typeof ee ? [ie, wb.contentAttributes.of({
        "aria-placeholder": ee
      })] : ie
    }
    const WM = 2e3;

    function tM(ee, ie) {
      let He = ee.posAtCoords({
          x: ie.clientX,
          y: ie.clientY
        }, !1),
        be = ee.state.doc.lineAt(He),
        Me = He - be.from,
        Ke = Me > WM ? -1 : Me == be.length ? function(ee, ie) {
          let He = ee.coordsAtPos(ee.viewport.from);
          return He ? Math.round(Math.abs((He.left - ie) / ee.defaultCharacterWidth)) : -1
        }(ee, ie.clientX) : (0, ye.gb)(be.text, ee.state.tabSize, He - be.from);
      return {
        line: be.number,
        col: Ke,
        off: Me
      }
    }

    function ZM(ee, ie) {
      let He = tM(ee, ie),
        be = ee.state.selection;
      return He ? {
        update(ee) {
          if (ee.docChanged) {
            let ie = ee.changes.mapPos(ee.startState.doc.line(He.line).from),
              ye = ee.state.doc.lineAt(ie);
            He = {
              line: ye.number,
              col: He.col,
              off: Math.min(He.off, ye.length)
            }, be = be.map(ee.changes)
          }
        },
        get(ie, Me, Ke) {
          let Ue = tM(ee, ie);
          if (!Ue) return be;
          let Fe = function(ee, ie, He) {
            let be = Math.min(ie.line, He.line),
              Me = Math.max(ie.line, He.line),
              Ke = [];
            if (ie.off > WM || He.off > WM || ie.col < 0 || He.col < 0) {
              let Ue = Math.min(ie.off, He.off),
                Fe = Math.max(ie.off, He.off);
              for (let ie = be; ie <= Me; ie++) {
                let He = ee.doc.line(ie);
                He.length <= Fe && Ke.push(ye.k.range(He.from + Ue, He.to + Fe))
              }
            } else {
              let Ue = Math.min(ie.col, He.col),
                Fe = Math.max(ie.col, He.col);
              for (let ie = be; ie <= Me; ie++) {
                let He = ee.doc.line(ie),
                  be = (0, ye.ob)(He.text, Ue, ee.tabSize, !0);
                if (be < 0) Ke.push(ye.k.cursor(He.to));
                else {
                  let ie = (0, ye.ob)(He.text, Fe, ee.tabSize);
                  Ke.push(ye.k.range(He.from + be, He.from + ie))
                }
              }
            }
            return Ke
          }(ee.state, He, Ue);
          return Fe.length ? Ke ? ye.k.create(Fe.concat(be.zp)) : ye.k.create(Fe) : be
        }
      } : null
    }

    function wM(ee) {
      let ie = (null === ee || void 0 === ee ? void 0 : ee.eventFilter) || (ee => ee.altKey && 0 == ee.button);
      return wb.mouseSelectionStyle.of(((ee, He) => ie(He) ? ZM(ee, He) : null))
    }
    const DM = {
        Alt: [18, ee => !!ee.altKey],
        Control: [17, ee => !!ee.ctrlKey],
        Shift: [16, ee => !!ee.shiftKey],
        Meta: [91, ee => !!ee.metaKey]
      },
      PM = {
        style: "cursor: crosshair"
      };

    function AM() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [ie, He] = DM[ee.key || "Alt"],
        ye = ri.fromClass(class {
          constructor(ee) {
            this.view = ee, this.isDown = !1
          }
          set(ee) {
            this.isDown != ee && (this.isDown = ee, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(ee) {
              this.set(ee.keyCode == ie || He(ee))
            },
            keyup(ee) {
              ee.keyCode != ie && He(ee) || this.set(!1)
            },
            mousemove(ee) {
              this.set(He(ee))
            }
          }
        });
      return [ye, wb.contentAttributes.of((ee => {
        var ie;
        return (null === (ie = ee.plugin(ye)) || void 0 === ie ? void 0 : ie.isDown) ? PM : null
      }))]
    }
    const YM = "-10000px";
    class VM {
      constructor(ee, ie, He, ye) {
        this.facet = ie, this.createTooltipView = He, this.removeTooltipView = ye, this.input = ee.state.facet(ie), this.tooltips = this.input.filter((ee => ee));
        let be = null;
        this.tooltipViews = this.tooltips.map((ee => be = He(ee, be)))
      }
      update(ee, ie) {
        var He;
        let ye = ee.state.facet(this.facet),
          be = ye.filter((ee => ee));
        if (ye === this.input) {
          for (let ie of this.tooltipViews) ie.update && ie.update(ee);
          return !1
        }
        let Me = [],
          Ke = ie ? [] : null;
        for (let Ue = 0; Ue < be.length; Ue++) {
          let He = be[Ue],
            ye = -1;
          if (He) {
            for (let ee = 0; ee < this.tooltips.length; ee++) {
              let ie = this.tooltips[ee];
              ie && ie.create == He.create && (ye = ee)
            }
            if (ye < 0) Me[Ue] = this.createTooltipView(He, Ue ? Me[Ue - 1] : null), Ke && (Ke[Ue] = !!He.above);
            else {
              let He = Me[Ue] = this.tooltipViews[ye];
              Ke && (Ke[Ue] = ie[ye]), He.update && He.update(ee)
            }
          }
        }
        for (let Ue of this.tooltipViews) Me.indexOf(Ue) < 0 && (this.removeTooltipView(Ue), null === (He = Ue.destroy) || void 0 === He || He.call(Ue));
        return ie && (Ke.forEach(((ee, He) => ie[He] = ee)), ie.length = Ke.length), this.input = ye, this.tooltips = be, this.tooltipViews = Me, !0
      }
    }

    function aM(ee) {
      let ie = ee.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: ie.clientHeight,
        right: ie.clientWidth
      }
    }
    const cM = ye.q.define({
        combine: ee => {
          var ie, He, ye;
          return {
            position: de.ios ? "absolute" : (null === (ie = ee.find((ee => ee.position))) || void 0 === ie ? void 0 : ie.position) || "fixed",
            parent: (null === (He = ee.find((ee => ee.parent))) || void 0 === He ? void 0 : He.parent) || null,
            tooltipSpace: (null === (ye = ee.find((ee => ee.tooltipSpace))) || void 0 === ye ? void 0 : ye.tooltipSpace) || aM
          }
        }
      }),
      xM = new WeakMap,
      LM = ri.fromClass(class {
        constructor(ee) {
          this.view = ee, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let ie = ee.state.facet(cM);
          this.position = ie.position, this.parent = ie.parent, this.classes = ee.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new VM(ee, mM, ((ee, ie) => this.createTooltip(ee, ie)), (ee => {
            this.resizeObserver && this.resizeObserver.unobserve(ee.dom), ee.dom.remove()
          })), this.above = this.manager.tooltips.map((ee => !!ee.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((ee => {
            Date.now() > this.lastTransaction - 50 && ee.length > 0 && ee[ee.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), ee.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let ee of this.manager.tooltipViews) this.intersectionObserver.observe(ee.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(ee) {
          ee.transactions.length && (this.lastTransaction = Date.now());
          let ie = this.manager.update(ee, this.above);
          ie && this.observeIntersection();
          let He = ie || ee.geometryChanged,
            ye = ee.state.facet(cM);
          if (ye.position != this.position && !this.madeAbsolute) {
            this.position = ye.position;
            for (let ee of this.manager.tooltipViews) ee.dom.style.position = this.position;
            He = !0
          }
          if (ye.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = ye.parent, this.createContainer();
            for (let ee of this.manager.tooltipViews) this.container.appendChild(ee.dom);
            He = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          He && this.maybeMeasure()
        }
        createTooltip(ee, ie) {
          let He = ee.create(this.view),
            ye = ie ? ie.dom : null;
          if (He.dom.classList.add("cm-tooltip"), ee.arrow && !He.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let ee = document.createElement("div");
            ee.className = "cm-tooltip-arrow", He.dom.appendChild(ee)
          }
          return He.dom.style.position = this.position, He.dom.style.top = YM, He.dom.style.left = "0px", this.container.insertBefore(He.dom, ye), He.mount && He.mount(this.view), this.resizeObserver && this.resizeObserver.observe(He.dom), He
        }
        destroy() {
          var ee, ie, He;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let ye of this.manager.tooltipViews) ye.dom.remove(), null === (ee = ye.destroy) || void 0 === ee || ee.call(ye);
          this.parent && this.container.remove(), null === (ie = this.resizeObserver) || void 0 === ie || ie.disconnect(), null === (He = this.intersectionObserver) || void 0 === He || He.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let ee = 1,
            ie = 1,
            He = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: ee
            } = this.manager.tooltipViews[0];
            if (de.safari) {
              let ie = ee.getBoundingClientRect();
              He = Math.abs(ie.top + 1e4) > 1 || Math.abs(ie.left) > 1
            } else He = !!ee.offsetParent && ee.offsetParent != this.container.ownerDocument.body
          }
          if (He || "absolute" == this.position)
            if (this.parent) {
              let He = this.parent.getBoundingClientRect();
              He.width && He.height && (ee = He.width / this.parent.offsetWidth, ie = He.height / this.parent.offsetHeight)
            } else({
              scaleX: ee,
              scaleY: ie
            } = this.view.viewState);
          let ye = this.view.scrollDOM.getBoundingClientRect(),
            be = JH(this.view);
          return {
            visible: {
              left: ye.left + be.left,
              top: ye.top + be.top,
              right: ye.right - be.right,
              bottom: ye.bottom - be.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((ee, ie) => {
              let He = this.manager.tooltipViews[ie];
              return He.getCoords ? He.getCoords(ee.pos) : this.view.coordsAtPos(ee.pos)
            })),
            size: this.manager.tooltipViews.map((ee => {
              let {
                dom: ie
              } = ee;
              return ie.getBoundingClientRect()
            })),
            space: this.view.state.facet(cM).tooltipSpace(this.view),
            scaleX: ee,
            scaleY: ie,
            makeAbsolute: He
          }
        }
        writeMeasure(ee) {
          var ie;
          if (ee.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let ee of this.manager.tooltipViews) ee.dom.style.position = "absolute"
          }
          let {
            visible: He,
            space: ye,
            scaleX: be,
            scaleY: Me
          } = ee, Ke = [];
          for (let Ue = 0; Ue < this.manager.tooltips.length; Ue++) {
            let Fe = this.manager.tooltips[Ue],
              Je = this.manager.tooltipViews[Ue],
              {
                dom: oe
              } = Je,
              Re = ee.pos[Ue],
              ke = ee.size[Ue];
            if (!Re || !1 !== Fe.clip && (Re.bottom <= Math.max(He.top, ye.top) || Re.top >= Math.min(He.bottom, ye.bottom) || Re.right < Math.max(He.left, ye.left) - .1 || Re.left > Math.min(He.right, ye.right) + .1)) {
              oe.style.top = YM;
              continue
            }
            let qe = Fe.arrow ? Je.dom.querySelector(".cm-tooltip-arrow") : null,
              fe = qe ? 7 : 0,
              Te = ke.right - ke.left,
              pe = null !== (ie = xM.get(Je)) && void 0 !== ie ? ie : ke.bottom - ke.top,
              Xe = Je.offset || uM,
              ze = this.view.textDirection == Ji.LTR,
              Be = ke.width > ye.right - ye.left ? ze ? ye.left : ye.right - ke.width : ze ? Math.max(ye.left, Math.min(Re.left - (qe ? 14 : 0) + Xe.x, ye.right - Te)) : Math.min(Math.max(ye.left, Re.left - Te + (qe ? 14 : 0) - Xe.x), ye.right - Te),
              Ee = this.above[Ue];
            !Fe.strictSide && (Ee ? Re.top - pe - fe - Xe.y < ye.top : Re.bottom + pe + fe + Xe.y > ye.bottom) && Ee == ye.bottom - Re.bottom > Re.top - ye.top && (Ee = this.above[Ue] = !Ee);
            let ge = (Ee ? Re.top - ye.top : ye.bottom - Re.bottom) - fe;
            if (ge < pe && !1 !== Je.resize) {
              if (ge < this.view.defaultLineHeight) {
                oe.style.top = YM;
                continue
              }
              xM.set(Je, pe), oe.style.height = (pe = ge) / Me + "px"
            } else oe.style.height && (oe.style.height = "");
            let Oe = Ee ? Re.top - pe - fe - Xe.y : Re.bottom + fe + Xe.y,
              de = Be + Te;
            if (!0 !== Je.overlap)
              for (let ee of Ke) ee.left < de && ee.right > Be && ee.top < Oe + pe && ee.bottom > Oe && (Oe = Ee ? ee.top - pe - 2 - fe : ee.bottom + fe + 2);
            if ("absolute" == this.position ? (oe.style.top = (Oe - ee.parent.top) / Me + "px", CM(oe, (Be - ee.parent.left) / be)) : (oe.style.top = Oe / Me + "px", CM(oe, Be / be)), qe) {
              let ee = Re.left + (ze ? Xe.x : -Xe.x) - (Be + 14 - 7);
              qe.style.left = ee / be + "px"
            }!0 !== Je.overlap && Ke.push({
              left: Be,
              top: Oe,
              right: de,
              bottom: Oe + pe
            }), oe.classList.toggle("cm-tooltip-above", Ee), oe.classList.toggle("cm-tooltip-below", !Ee), Je.positioned && Je.positioned(ee.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let ee of this.manager.tooltipViews) ee.dom.style.top = YM
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function CM(ee, ie) {
      let He = parseInt(ee.style.left, 10);
      (isNaN(He) || Math.abs(ie - He) > 1) && (ee.style.left = ie + "px")
    }
    const vM = wb.baseTheme({
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
      uM = {
        x: 0,
        y: 0
      },
      mM = ye.q.define({
        enables: [LM, vM]
      }),
      lM = ye.q.define({
        combine: ee => ee.reduce(((ee, ie) => ee.concat(ie)), [])
      });
    class SM {
      static create(ee) {
        return new SM(ee)
      }
      constructor(ee) {
        this.view = ee, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new VM(ee, lM, ((ee, ie) => this.createHostedView(ee, ie)), (ee => ee.dom.remove()))
      }
      createHostedView(ee, ie) {
        let He = ee.create(this.view);
        return He.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(He.dom, ie ? ie.dom.nextSibling : this.dom.firstChild), this.mounted && He.mount && He.mount(this.view), He
      }
      mount(ee) {
        for (let ie of this.manager.tooltipViews) ie.mount && ie.mount(ee);
        this.mounted = !0
      }
      positioned(ee) {
        for (let ie of this.manager.tooltipViews) ie.positioned && ie.positioned(ee)
      }
      update(ee) {
        this.manager.update(ee)
      }
      destroy() {
        var ee;
        for (let ie of this.manager.tooltipViews) null === (ee = ie.destroy) || void 0 === ee || ee.call(ie)
      }
      passProp(ee) {
        let ie;
        for (let He of this.manager.tooltipViews) {
          let ye = He[ee];
          if (void 0 !== ye)
            if (void 0 === ie) ie = ye;
            else if (ie !== ye) return
        }
        return ie
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
    const nM = mM.compute([lM], (ee => {
      let ie = ee.facet(lM);
      return 0 === ie.length ? null : {
        pos: Math.min(...ie.map((ee => ee.pos))),
        end: Math.max(...ie.map((ee => {
          var ie;
          return null !== (ie = ee.end) && void 0 !== ie ? ie : ee.pos
        }))),
        create: SM.create,
        above: ie[0].above,
        arrow: ie.some((ee => ee.arrow))
      }
    }));
    class jM {
      constructor(ee, ie, He, ye, be) {
        this.view = ee, this.source = ie, this.field = He, this.setHover = ye, this.hoverTime = be, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: ee.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), ee.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), ee.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let ee = Date.now() - this.lastMove.time;
        ee < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - ee) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: ee,
          lastMove: ie
        } = this, He = ee.docView.tile.nearest(ie.target);
        if (!He) return;
        let ye, be = 1;
        if (He.isWidget()) ye = He.posAtStart;
        else {
          if (ye = ee.posAtCoords(ie), null == ye) return;
          let He = ee.coordsAtPos(ye);
          if (!He || ie.y < He.top || ie.y > He.bottom || ie.x < He.left - ee.defaultCharacterWidth || ie.x > He.right + ee.defaultCharacterWidth) return;
          let Me = ee.bidiSpans(ee.state.doc.lineAt(ye)).find((ee => ee.from <= ye && ee.to >= ye)),
            Ke = Me && Me.dir == Ji.RTL ? -1 : 1;
          be = ie.x < He.left ? -Ke : Ke
        }
        let Me = this.source(ee, ye, be);
        if (null === Me || void 0 === Me ? void 0 : Me.then) {
          let ie = this.pending = {
            pos: ye
          };
          Me.then((He => {
            this.pending == ie && (this.pending = null, !He || Array.isArray(He) && !He.length || ee.dispatch({
              effects: this.setHover.of(Array.isArray(He) ? He : [He])
            }))
          }), (ie => si(ee.state, ie, "hover tooltip")))
        } else !Me || Array.isArray(Me) && !Me.length || ee.dispatch({
          effects: this.setHover.of(Array.isArray(Me) ? Me : [Me])
        })
      }
      get tooltip() {
        let ee = this.view.plugin(LM),
          ie = ee ? ee.manager.tooltips.findIndex((ee => ee.create == SM.create)) : -1;
        return ie > -1 ? ee.manager.tooltipViews[ie] : null
      }
      mousemove(ee) {
        var ie, He;
        this.lastMove = {
          x: ee.clientX,
          y: ee.clientY,
          target: ee.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: ye,
          tooltip: be
        } = this;
        if (ye.length && be && ! function(ee, ie) {
            let He, {
              left: ye,
              right: be,
              top: Me,
              bottom: Ke
            } = ee.getBoundingClientRect();
            if (He = ee.querySelector(".cm-tooltip-arrow")) {
              let ee = He.getBoundingClientRect();
              Me = Math.min(ee.top, Me), Ke = Math.max(ee.bottom, Ke)
            }
            return ie.clientX >= ye - sM && ie.clientX <= be + sM && ie.clientY >= Me - sM && ie.clientY <= Ke + sM
          }(be.dom, ee) || this.pending) {
          let {
            pos: be
          } = ye[0] || this.pending, Me = null !== (He = null === (ie = ye[0]) || void 0 === ie ? void 0 : ie.end) && void 0 !== He ? He : be;
          (be == Me ? this.view.posAtCoords(this.lastMove) == be : function(ee, ie, He, ye, be) {
            let Me = ee.scrollDOM.getBoundingClientRect(),
              Ke = ee.documentTop + ee.documentPadding.top + ee.contentHeight;
            if (Me.left > ye || Me.right < ye || Me.top > be || Math.min(Me.bottom, Ke) < be) return !1;
            let Ue = ee.posAtCoords({
              x: ye,
              y: be
            }, !1);
            return Ue >= ie && Ue <= He
          }(this.view, be, Me, ee.clientX, ee.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(ee) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: ie
        } = this;
        if (ie.length) {
          let {
            tooltip: ie
          } = this;
          ie && ie.dom.contains(ee.relatedTarget) ? this.watchTooltipLeave(ie.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(ee) {
        let ie = He => {
          ee.removeEventListener("mouseleave", ie), this.active.length && !this.view.dom.contains(He.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        ee.addEventListener("mouseleave", ie)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const sM = 4;

    function IM(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        He = ye.K.define(),
        be = ye.N.define({
          create: () => [],
          update(ee, be) {
            if (ee.length && (ie.hideOnChange && (be.docChanged || be.selection) ? ee = [] : ie.hideOn && (ee = ee.filter((ee => !ie.hideOn(be, ee)))), be.docChanged)) {
              let ie = [];
              for (let He of ee) {
                let ee = be.changes.mapPos(He.pos, -1, ye.t.TrackDel);
                if (null != ee) {
                  let ye = Object.assign(Object.create(null), He);
                  ye.pos = ee, null != ye.end && (ye.end = be.changes.mapPos(ye.end)), ie.push(ye)
                }
              }
              ee = ie
            }
            for (let ie of be.effects) ie.is(He) && (ee = ie.value), ie.is(NM) && (ee = []);
            return ee
          },
          provide: ee => lM.from(ee)
        });
      return {
        active: be,
        extension: [be, ri.define((ye => new jM(ye, ee, be, He, ie.hoverTime || 300))), nM]
      }
    }

    function hM(ee, ie) {
      let He = ee.plugin(LM);
      if (!He) return null;
      let ye = He.manager.tooltips.indexOf(ie);
      return ye < 0 ? null : He.manager.tooltipViews[ye]
    }
    const NM = ye.K.define();
    const GM = ye.q.define({
      combine(ee) {
        let ie, He;
        for (let ye of ee) ie = ie || ye.topContainer, He = He || ye.bottomContainer;
        return {
          topContainer: ie,
          bottomContainer: He
        }
      }
    });

    function rM(ee, ie) {
      let He = ee.plugin(QM),
        ye = He ? He.specs.indexOf(ie) : -1;
      return ye > -1 ? He.panels[ye] : null
    }
    const QM = ri.fromClass(class {
      constructor(ee) {
        this.input = ee.state.facet(HK), this.specs = this.input.filter((ee => ee)), this.panels = this.specs.map((ie => ie(ee)));
        let ie = ee.state.facet(GM);
        this.top = new eK(ee, !0, ie.topContainer), this.bottom = new eK(ee, !1, ie.bottomContainer), this.top.sync(this.panels.filter((ee => ee.top))), this.bottom.sync(this.panels.filter((ee => !ee.top)));
        for (let He of this.panels) He.dom.classList.add("cm-panel"), He.mount && He.mount()
      }
      update(ee) {
        let ie = ee.state.facet(GM);
        this.top.container != ie.topContainer && (this.top.sync([]), this.top = new eK(ee.view, !0, ie.topContainer)), this.bottom.container != ie.bottomContainer && (this.bottom.sync([]), this.bottom = new eK(ee.view, !1, ie.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let He = ee.state.facet(HK);
        if (He != this.input) {
          let ie = He.filter((ee => ee)),
            ye = [],
            be = [],
            Me = [],
            Ke = [];
          for (let He of ie) {
            let ie, Ue = this.specs.indexOf(He);
            Ue < 0 ? (ie = He(ee.view), Ke.push(ie)) : (ie = this.panels[Ue], ie.update && ie.update(ee)), ye.push(ie), (ie.top ? be : Me).push(ie)
          }
          this.specs = ie, this.panels = ye, this.top.sync(be), this.bottom.sync(Me);
          for (let ee of Ke) ee.dom.classList.add("cm-panel"), ee.mount && ee.mount()
        } else
          for (let ye of this.panels) ye.update && ye.update(ee)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: ee => wb.scrollMargins.of((ie => {
        let He = ie.plugin(ee);
        return He && {
          top: He.top.scrollMargin(),
          bottom: He.bottom.scrollMargin()
        }
      }))
    });
    class eK {
      constructor(ee, ie, He) {
        this.view = ee, this.top = ie, this.container = He, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(ee) {
        for (let ie of this.panels) ie.destroy && ee.indexOf(ie) < 0 && ie.destroy();
        this.panels = ee, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let ee = this.container || this.view.dom;
          ee.insertBefore(this.dom, this.top ? ee.firstChild : null)
        }
        let ee = this.dom.firstChild;
        for (let ie of this.panels)
          if (ie.dom.parentNode == this.dom) {
            for (; ee != ie.dom;) ee = iK(ee);
            ee = ee.nextSibling
          } else this.dom.insertBefore(ie.dom, ee);
        for (; ee;) ee = iK(ee)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let ee of this.classes.split(" ")) ee && this.container.classList.remove(ee);
          for (let ee of (this.classes = this.view.themeClasses).split(" ")) ee && this.container.classList.add(ee)
        }
      }
    }

    function iK(ee) {
      let ie = ee.nextSibling;
      return ee.remove(), ie
    }
    const HK = ye.q.define({
      enables: QM
    });

    function yK(ee, ie) {
      let He, be = new Promise((ee => He = ee)),
        Me = ee => function(ee, ie, He) {
          let ye = ie.content ? ie.content(ee, (() => Ke(null))) : null;
          if (!ye) {
            if (ye = (0, Re.e)("form"), ie.input) {
              let ee = (0, Re.e)("input", ie.input);
              /^(text|password|number|email|tel|url)$/.test(ee.type) && ee.classList.add("cm-textfield"), ee.name || (ee.name = "input"), ye.appendChild((0, Re.e)("label", (ie.label || "") + ": ", ee))
            } else ye.appendChild(document.createTextNode(ie.label || ""));
            ye.appendChild(document.createTextNode(" ")), ye.appendChild((0, Re.e)("button", {
              class: "cm-button",
              type: "submit"
            }, ie.submitLabel || "OK"))
          }
          let be = "FORM" == ye.nodeName ? [ye] : ye.querySelectorAll("form");
          for (let Ue = 0; Ue < be.length; Ue++) {
            let ee = be[Ue];
            ee.addEventListener("keydown", (ie => {
              27 == ie.keyCode ? (ie.preventDefault(), Ke(null)) : 13 == ie.keyCode && (ie.preventDefault(), Ke(ee))
            })), ee.addEventListener("submit", (ie => {
              ie.preventDefault(), Ke(ee)
            }))
          }
          let Me = (0, Re.e)("div", ye, (0, Re.e)("button", {
            onclick: () => Ke(null),
            "aria-label": ee.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          ie.class && (Me.className = ie.class);

          function Ke(ie) {
            Me.contains(Me.ownerDocument.activeElement) && ee.focus(), He(ie)
          }
          return Me.classList.add("cm-dialog"), {
            dom: Me,
            top: ie.top,
            mount: () => {
              if (ie.focus) {
                let ee;
                ee = "string" == typeof ie.focus ? ye.querySelector(ie.focus) : ye.querySelector("input") || ye.querySelector("button"), ee && "select" in ee ? ee.select() : ee && "focus" in ee && ee.focus()
              }
            }
          }
        }(ee, ie, He);
      ee.state.field(bK, !1) ? ee.dispatch({
        effects: MK.of(Me)
      }) : ee.dispatch({
        effects: ye.K.appendConfig.of(bK.init((() => [Me])))
      });
      let Ke = KK.of(Me);
      return {
        close: Ke,
        result: be.then((ie => ((ee.win.queueMicrotask || (ie => ee.win.setTimeout(ie, 10)))((() => {
          ee.state.field(bK).indexOf(Me) > -1 && ee.dispatch({
            effects: Ke
          })
        })), ie)))
      }
    }
    const bK = ye.N.define({
        create: () => [],
        update(ee, ie) {
          for (let He of ie.effects) He.is(MK) ? ee = [He.value].concat(ee) : He.is(KK) && (ee = ee.filter((ee => ee != He.value)));
          return ee
        },
        provide: ee => HK.computeN([ee], (ie => ie.field(ee)))
      }),
      MK = ye.K.define(),
      KK = ye.K.define();
    class UK extends ye.G {
      compare(ee) {
        return this == ee || this.constructor == ee.constructor && this.eq(ee)
      }
      eq(ee) {
        return !1
      }
      destroy(ee) {}
    }
    UK.prototype.elementClass = "", UK.prototype.toDOM = void 0, UK.prototype.mapMode = ye.t.TrackBefore, UK.prototype.startSide = UK.prototype.endSide = -1, UK.prototype.point = !0;
    const FK = ye.q.define(),
      JK = ye.q.define(),
      oK = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => ye.D.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      RK = ye.q.define();

    function kK(ee) {
      return [fK(), RK.of({
        ...oK,
        ...ee
      })]
    }
    const qK = ye.q.define({
      combine: ee => ee.some((ee => ee))
    });

    function fK(ee) {
      let ie = [TK];
      return ee && !1 === ee.fixed && ie.push(qK.of(!0)), ie
    }
    const TK = ri.fromClass(class {
      constructor(ee) {
        this.view = ee, this.domAfter = null, this.prevViewport = ee.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = ee.state.facet(RK).map((ie => new BK(ee, ie))), this.fixed = !ee.state.facet(qK);
        for (let ie of this.gutters) "after" == ie.config.side ? this.getDOMAfter().appendChild(ie.dom) : this.dom.appendChild(ie.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), ee.scrollDOM.insertBefore(this.dom, ee.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(ee) {
        if (this.updateGutters(ee)) {
          let ie = this.prevViewport,
            He = ee.view.viewport,
            ye = Math.min(ie.to, He.to) - Math.max(ie.from, He.from);
          this.syncGutters(ye < .8 * (He.to - He.from))
        }
        if (ee.geometryChanged) {
          let ee = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = ee, this.domAfter && (this.domAfter.style.minHeight = ee)
        }
        this.view.state.facet(qK) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = ee.view.viewport
      }
      syncGutters(ee) {
        let ie = this.dom.nextSibling;
        ee && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let He = ye.D.iter(this.view.state.facet(FK), this.view.viewport.from),
          be = [],
          Me = this.gutters.map((ee => new zK(ee, this.view.viewport, -this.view.documentPadding.top)));
        for (let ye of this.view.viewportLineBlocks)
          if (be.length && (be = []), Array.isArray(ye.type)) {
            let ee = !0;
            for (let ie of ye.type)
              if (ie.type == Ae.Text && ee) {
                XK(He, be, ie.from);
                for (let ee of Me) ee.line(this.view, ie, be);
                ee = !1
              } else if (ie.widget)
              for (let ee of Me) ee.widget(this.view, ie)
          } else if (ye.type == Ae.Text) {
          XK(He, be, ye.from);
          for (let ee of Me) ee.line(this.view, ye, be)
        } else if (ye.widget)
          for (let ee of Me) ee.widget(this.view, ye);
        for (let ye of Me) ye.finish();
        ee && (this.view.scrollDOM.insertBefore(this.dom, ie), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(ee) {
        let ie = ee.startState.facet(RK),
          He = ee.state.facet(RK),
          be = ee.docChanged || ee.heightChanged || ee.viewportChanged || !ye.D.eq(ee.startState.facet(FK), ee.state.facet(FK), ee.view.viewport.from, ee.view.viewport.to);
        if (ie == He)
          for (let ye of this.gutters) ye.update(ee) && (be = !0);
        else {
          be = !0;
          let ye = [];
          for (let be of He) {
            let He = ie.indexOf(be);
            He < 0 ? ye.push(new BK(this.view, be)) : (this.gutters[He].update(ee), ye.push(this.gutters[He]))
          }
          for (let ee of this.gutters) ee.dom.remove(), ye.indexOf(ee) < 0 && ee.destroy();
          for (let ee of ye) "after" == ee.config.side ? this.getDOMAfter().appendChild(ee.dom) : this.dom.appendChild(ee.dom);
          this.gutters = ye
        }
        return be
      }
      destroy() {
        for (let ee of this.gutters) ee.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: ee => wb.scrollMargins.of((ie => {
        let He = ie.plugin(ee);
        if (!He || 0 == He.gutters.length || !He.fixed) return null;
        let ye = He.dom.offsetWidth * ie.scaleX,
          be = He.domAfter ? He.domAfter.offsetWidth * ie.scaleX : 0;
        return ie.textDirection == Ji.LTR ? {
          left: ye,
          right: be
        } : {
          right: ye,
          left: be
        }
      }))
    });

    function pK(ee) {
      return Array.isArray(ee) ? ee : [ee]
    }

    function XK(ee, ie, He) {
      for (; ee.value && ee.from <= He;) ee.from == He && ie.push(ee.value), ee.next()
    }
    class zK {
      constructor(ee, ie, He) {
        this.gutter = ee, this.height = He, this.i = 0, this.cursor = ye.D.iter(ee.markers, ie.from)
      }
      addElement(ee, ie, He) {
        let {
          gutter: ye
        } = this, be = (ie.top - this.height) / ee.scaleY, Me = ie.height / ee.scaleY;
        if (this.i == ye.elements.length) {
          let ie = new EK(ee, Me, be, He);
          ye.elements.push(ie), ye.dom.appendChild(ie.dom)
        } else ye.elements[this.i].update(ee, Me, be, He);
        this.height = ie.bottom, this.i++
      }
      line(ee, ie, He) {
        let ye = [];
        XK(this.cursor, ye, ie.from), He.length && (ye = ye.concat(He));
        let be = this.gutter.config.lineMarker(ee, ie, ye);
        be && ye.unshift(be);
        let Me = this.gutter;
        (0 != ye.length || Me.config.renderEmptyElements) && this.addElement(ee, ie, ye)
      }
      widget(ee, ie) {
        let He = this.gutter.config.widgetMarker(ee, ie.widget, ie),
          ye = He ? [He] : null;
        for (let be of ee.state.facet(JK)) {
          let He = be(ee, ie.widget, ie);
          He && (ye || (ye = [])).push(He)
        }
        ye && this.addElement(ee, ie, ye)
      }
      finish() {
        let ee = this.gutter;
        for (; ee.elements.length > this.i;) {
          let ie = ee.elements.pop();
          ee.dom.removeChild(ie.dom), ie.destroy()
        }
      }
    }
    class BK {
      constructor(ee, ie) {
        this.view = ee, this.config = ie, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let He in ie.domEventHandlers) this.dom.addEventListener(He, (ye => {
          let be, Me = ye.target;
          if (Me != this.dom && this.dom.contains(Me)) {
            for (; Me.parentNode != this.dom;) Me = Me.parentNode;
            let ee = Me.getBoundingClientRect();
            be = (ee.top + ee.bottom) / 2
          } else be = ye.clientY;
          let Ke = ee.lineBlockAtHeight(be - ee.documentTop);
          ie.domEventHandlers[He](ee, Ke, ye) && ye.preventDefault()
        }));
        this.markers = pK(ie.markers(ee)), ie.initialSpacer && (this.spacer = new EK(ee, 0, 0, [ie.initialSpacer(ee)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(ee) {
        let ie = this.markers;
        if (this.markers = pK(this.config.markers(ee.view)), this.spacer && this.config.updateSpacer) {
          let ie = this.config.updateSpacer(this.spacer.markers[0], ee);
          ie != this.spacer.markers[0] && this.spacer.update(ee.view, 0, 0, [ie])
        }
        let He = ee.view.viewport;
        return !ye.D.eq(this.markers, ie, He.from, He.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(ee)
      }
      destroy() {
        for (let ee of this.elements) ee.destroy()
      }
    }
    class EK {
      constructor(ee, ie, He, ye) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(ee, ie, He, ye)
      }
      update(ee, ie, He, ye) {
        this.height != ie && (this.height = ie, this.dom.style.height = ie + "px"), this.above != He && (this.dom.style.marginTop = (this.above = He) ? He + "px" : ""),
          function(ee, ie) {
            if (ee.length != ie.length) return !1;
            for (let He = 0; He < ee.length; He++)
              if (!ee[He].compare(ie[He])) return !1;
            return !0
          }(this.markers, ye) || this.setMarkers(ee, ye)
      }
      setMarkers(ee, ie) {
        let He = "cm-gutterElement",
          ye = this.dom.firstChild;
        for (let be = 0, Me = 0;;) {
          let Ke = Me,
            Ue = be < ie.length ? ie[be++] : null,
            Fe = !1;
          if (Ue) {
            let ee = Ue.elementClass;
            ee && (He += " " + ee);
            for (let ie = Me; ie < this.markers.length; ie++)
              if (this.markers[ie].compare(Ue)) {
                Ke = ie, Fe = !0;
                break
              }
          } else Ke = this.markers.length;
          for (; Me < Ke;) {
            let ee = this.markers[Me++];
            if (ee.toDOM) {
              ee.destroy(ye);
              let ie = ye.nextSibling;
              ye.remove(), ye = ie
            }
          }
          if (!Ue) break;
          Ue.toDOM && (Fe ? ye = ye.nextSibling : this.dom.insertBefore(Ue.toDOM(ee), ye)), Fe && Me++
        }
        this.dom.className = He, this.markers = ie
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const gK = ye.q.define(),
      OK = ye.q.define(),
      dK = ye.q.define({
        combine: ee => (0, ye.cb)(ee, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(ee, ie) {
            let He = Object.assign({}, ee);
            for (let ye in ie) {
              let ee = He[ye],
                be = ie[ye];
              He[ye] = ee ? (ie, He, ye) => ee(ie, He, ye) || be(ie, He, ye) : be
            }
            return He
          }
        })
      });
    class WK extends UK {
      constructor(ee) {
        super(), this.number = ee
      }
      eq(ee) {
        return this.number == ee.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function tK(ee, ie) {
      return ee.state.facet(dK).formatNumber(ie, ee.state)
    }
    const ZK = RK.compute([dK], (ee => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: ee => ee.state.facet(gK),
      lineMarker: (ee, ie, He) => He.some((ee => ee.toDOM)) ? null : new WK(tK(ee, ee.state.doc.lineAt(ie.from).number)),
      widgetMarker: (ee, ie, He) => {
        for (let ye of ee.state.facet(OK)) {
          let be = ye(ee, ie, He);
          if (be) return be
        }
        return null
      },
      lineMarkerChange: ee => ee.startState.facet(dK) != ee.state.facet(dK),
      initialSpacer: ee => new WK(tK(ee, DK(ee.state.doc.lines))),
      updateSpacer(ee, ie) {
        let He = tK(ie.view, DK(ie.view.state.doc.lines));
        return He == ee.number ? ee : new WK(He)
      },
      domEventHandlers: ee.facet(dK).domEventHandlers,
      side: "before"
    })));

    function wK() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [dK.of(ee), fK(), ZK]
    }

    function DK(ee) {
      let ie = 9;
      for (; ie < ee;) ie = 10 * ie + 9;
      return ie
    }
    const PK = new class extends UK {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      AK = FK.compute(["selection"], (ee => {
        let ie = [],
          He = -1;
        for (let ye of ee.selection.zp) {
          let be = ee.doc.lineAt(ye.head).from;
          be > He && (He = be, ie.push(PK.range(be)))
        }
        return ye.D.of(ie)
      }));

    function YK() {
      return AK
    }
  },
  44538: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      e: () => qe,
      h: () => Ke,
      j: () => oe,
      l: () => Je,
      n: () => Ve,
      r: () => ce,
      s: () => ae,
      u: () => fe
    });
    const ye = 1024;
    let be = 0;
    class Me {
      constructor(ee, ie) {
        this.from = ee, this.to = ie
      }
    }
    class Ke {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = be++, this.perNode = !!ee.perNode, this.deserialize = ee.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = ee.combine || null
      }
      add(ee) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof ee && (ee = Je.match(ee)), ie => {
          let He = ee(ie);
          return void 0 === He ? null : [this, He]
        }
      }
    }
    Ke.closedBy = new Ke({
      deserialize: ee => ee.split(" ")
    }), Ke.openedBy = new Ke({
      deserialize: ee => ee.split(" ")
    }), Ke.group = new Ke({
      deserialize: ee => ee.split(" ")
    }), Ke.isolate = new Ke({
      deserialize: ee => {
        if (ee && "rtl" != ee && "ltr" != ee && "auto" != ee) throw new RangeError("Invalid value for isolate: " + ee);
        return ee || "auto"
      }
    }), Ke.contextHash = new Ke({
      perNode: !0
    }), Ke.lookAhead = new Ke({
      perNode: !0
    }), Ke.mounted = new Ke({
      perNode: !0
    });
    class Ue {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = ee, this.overlay = ie, this.parser = He, this.bracketed = ye
      }
      static get(ee) {
        return ee && ee.props && ee.props[Ke.mounted.id]
      }
    }
    const Fe = Object.create(null);
    class Je {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = ee, this.props = ie, this.id = He, this.flags = ye
      }
      static define(ee) {
        let ie = ee.props && ee.props.length ? Object.create(null) : Fe,
          He = (ee.top ? 1 : 0) | (ee.skipped ? 2 : 0) | (ee.error ? 4 : 0) | (null == ee.name ? 8 : 0),
          ye = new Je(ee.name || "", ie, ee.id, He);
        if (ee.props)
          for (let be of ee.props)
            if (Array.isArray(be) || (be = be(ye)), be) {
              if (be[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              ie[be[0].id] = be[1]
            } return ye
      }
      prop(ee) {
        return this.props[ee.id]
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
      is(ee) {
        if ("string" == typeof ee) {
          if (this.name == ee) return !0;
          let ie = this.prop(Ke.group);
          return !!ie && ie.indexOf(ee) > -1
        }
        return this.id == ee
      }
      static match(ee) {
        let ie = Object.create(null);
        for (let He in ee)
          for (let ye of He.split(" ")) ie[ye] = ee[He];
        return ee => {
          for (let He = ee.prop(Ke.group), ye = -1; ye < (He ? He.length : 0); ye++) {
            let be = ie[ye < 0 ? ee.name : He[ye]];
            if (be) return be
          }
        }
      }
    }
    Je.none = new Je("", Object.create(null), 0, 8);
    class oe {
      constructor(ee) {
        this.types = ee;
        for (let ie = 0; ie < ee.length; ie++)
          if (ee[ie].id != ie) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let ee = [];
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        for (let be of this.types) {
          let ie = null;
          for (let ee of He) {
            let He = ee(be);
            if (He) {
              ie || (ie = Object.assign({}, be.props));
              let ee = He[1],
                ye = He[0];
              ye.combine && ye.id in ie && (ee = ye.combine(ie[ye.id], ee)), ie[ye.id] = ee
            }
          }
          ee.push(ie ? new Je(be.name, ie, be.id, be.flags) : be)
        }
        return new oe(ee)
      }
    }
    const Re = new WeakMap,
      ke = new WeakMap;
    var qe;
    ! function(ee) {
      ee[ee.ExcludeBuffers = 1] = "ExcludeBuffers", ee[ee.IncludeAnonymous = 2] = "IncludeAnonymous", ee[ee.IgnoreMounts = 4] = "IgnoreMounts", ee[ee.IgnoreOverlays = 8] = "IgnoreOverlays", ee[ee.EnterBracketed = 16] = "EnterBracketed"
    }(qe || (qe = {}));
    class fe {
      constructor(ee, ie, He, ye, be) {
        if (this.type = ee, this.children = ie, this.positions = He, this.length = ye, this.props = null, be && be.length) {
          this.props = Object.create(null);
          for (let [ee, ie] of be) this.props["number" == typeof ee ? ee : ee.id] = ie
        }
      }
      toString() {
        let ee = Ue.get(this);
        if (ee && !ee.overlay) return ee.tree.toString();
        let ie = "";
        for (let He of this.children) {
          let ee = He.toString();
          ee && (ie && (ie += ","), ie += ee)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (ie.length ? "(" + ie + ")" : "") : ie
      }
      cursor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new we(this.topNode, ee)
      }
      cursorAt(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = Re.get(this) || this.topNode,
          ye = new we(He);
        return ye.moveTo(ee, ie), Re.set(this, ye._tree), ye
      }
      get topNode() {
        return new Ee(this, 0, 0, null)
      }
      resolve(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = ze(Re.get(this) || this.topNode, ee, ie, !1);
        return Re.set(this, He), He
      }
      resolveInner(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = ze(ke.get(this) || this.topNode, ee, ie, !0);
        return ke.set(this, He), He
      }
      resolveStack(ee) {
        return function(ee, ie, He) {
          let ye = ee.resolveInner(ie, He),
            be = null;
          for (let Me = ye instanceof Ee ? ye : ye.context.parent; Me; Me = Me.parent)
            if (Me.index < 0) {
              let ee = Me.parent;
              (be || (be = [ye])).push(ee.resolve(ie, He)), Me = ee
            } else {
              let ee = Ue.get(Me.tree);
              if (ee && ee.overlay && ee.overlay[0].from <= ie && ee.overlay[ee.overlay.length - 1].to >= ie) {
                let Ke = new Ee(ee.tree, ee.overlay[0].from + Me.from, -1, Me);
                (be || (be = [ye])).push(ze(Ke, ie, He, !1))
              }
            } return be ? te(be) : ye
        }(this, ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(ee) {
        let {
          enter: ie,
          leave: He,
          from: ye = 0,
          to: be = this.length
        } = ee, Me = ee.mode || 0, Ke = (Me & qe.IncludeAnonymous) > 0;
        for (let Ue = this.cursor(Me | qe.IncludeAnonymous);;) {
          let ee = !1;
          if (Ue.from <= be && Ue.to >= ye && (!Ke && Ue.type.isAnonymous || !1 !== ie(Ue))) {
            if (Ue.firstChild()) continue;
            ee = !0
          }
          for (; ee && He && (Ke || !Ue.type.isAnonymous) && He(Ue), !Ue.nextSibling();) {
            if (!Ue.parent()) return;
            ee = !0
          }
        }
      }
      prop(ee) {
        return ee.perNode ? this.props ? this.props[ee.id] : void 0 : this.type.prop(ee)
      }
      get propValues() {
        let ee = [];
        if (this.props)
          for (let ie in this.props) ee.push([+ie, this.props[ie]]);
        return ee
      }
      balance() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Ye(Je.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((ee, ie, He) => new fe(this.type, ee, ie, He, this.propValues)), ee.makeTree || ((ee, ie, He) => new fe(Je.none, ee, ie, He)))
      }
      static build(ee) {
        return function(ee) {
          var ie;
          let {
            buffer: He,
            nodeSet: be,
            maxBufferLength: Me = ye,
            reused: Ue = [],
            minRepeatType: Fe = be.types.length
          } = ee, Je = Array.isArray(He) ? new Te(He, He.length) : He, oe = be.types, Re = 0, ke = 0;

          function qe(ee, ie, He, ye, Ke, fe) {
            let {
              id: Te,
              start: de,
              end: We,
              size: te
            } = Je, Ze = ke, we = Re;
            if (te < 0) {
              if (Je.next(), -1 == te) {
                let ie = Ue[Te];
                return He.push(ie), void ye.push(de - ee)
              }
              if (-3 == te) return void(Re = Te);
              if (-4 == te) return void(ke = Te);
              throw new RangeError(`Unrecognized record size: ${te}`)
            }
            let De, Pe, Ae = oe[Te],
              Ve = de - ee;
            if (We - de <= Me && (Pe = ge(Je.pos - ie, Ke))) {
              let ie = new Uint16Array(Pe.size - Pe.skip),
                He = Je.pos - Pe.size,
                ye = ie.length;
              for (; Je.pos > He;) ye = Oe(Pe.start, ie, ye);
              De = new pe(ie, We - Pe.start, be), Ve = Pe.start - ee
            } else {
              let ee = Je.pos - te;
              Je.next();
              let ie = [],
                He = [],
                ye = Te >= Fe ? Te : -1,
                be = 0,
                Ke = We;
              for (; Je.pos > ee;) ye >= 0 && Je.id == ye && Je.size >= 0 ? (Je.end <= Ke - Me && (Be(ie, He, de, be, Je.end, Ke, ye, Ze, we), be = ie.length, Ke = Je.end), Je.next()) : fe > 2500 ? Xe(de, ee, ie, He) : qe(de, ee, ie, He, ye, fe + 1);
              if (ye >= 0 && be > 0 && be < ie.length && Be(ie, He, de, be, de, Ke, ye, Ze, we), ie.reverse(), He.reverse(), ye > -1 && be > 0) {
                let ee = ze(Ae, we);
                De = Ye(Ae, ie, He, 0, ie.length, 0, We - de, ee, ee)
              } else De = Ee(Ae, ie, He, We - de, Ze - We, we)
            }
            He.push(De), ye.push(Ve)
          }

          function Xe(ee, ie, He, ye) {
            let Ke = [],
              Ue = 0,
              Fe = -1;
            for (; Je.pos > ie;) {
              let {
                id: ee,
                start: ie,
                end: He,
                size: ye
              } = Je;
              if (ye > 4) Je.next();
              else {
                if (Fe > -1 && ie < Fe) break;
                Fe < 0 && (Fe = He - Me), Ke.push(ee, ie, He), Ue++, Je.next()
              }
            }
            if (Ue) {
              let ie = new Uint16Array(4 * Ue),
                Me = Ke[Ke.length - 2];
              for (let ee = Ke.length - 3, He = 0; ee >= 0; ee -= 3) ie[He++] = Ke[ee], ie[He++] = Ke[ee + 1] - Me, ie[He++] = Ke[ee + 2] - Me, ie[He++] = He;
              He.push(new pe(ie, Ke[2] - Me, be)), ye.push(Me - ee)
            }
          }

          function ze(ee, ie) {
            return (He, ye, be) => {
              let Me, Ue, Fe = 0,
                Je = He.length - 1;
              if (Je >= 0 && (Me = He[Je]) instanceof fe) {
                if (!Je && Me.type == ee && Me.length == be) return Me;
                (Ue = Me.prop(Ke.lookAhead)) && (Fe = ye[Je] + Me.length + Ue)
              }
              return Ee(ee, He, ye, be, Fe, ie)
            }
          }

          function Be(ee, ie, He, ye, Me, Ke, Ue, Fe, Je) {
            let oe = [],
              Re = [];
            for (; ee.length > ye;) oe.push(ee.pop()), Re.push(ie.pop() + He - Me);
            ee.push(Ee(be.types[Ue], oe, Re, Ke - Me, Fe - Ke, Je)), ie.push(Me - He)
          }

          function Ee(ee, ie, He, ye, be, Me, Ue) {
            if (Me) {
              let ee = [Ke.contextHash, Me];
              Ue = Ue ? [ee].concat(Ue) : [ee]
            }
            if (be > 25) {
              let ee = [Ke.lookAhead, be];
              Ue = Ue ? [ee].concat(Ue) : [ee]
            }
            return new fe(ee, ie, He, ye, Ue)
          }

          function ge(ee, ie) {
            let He = Je.fork(),
              ye = 0,
              be = 0,
              Ke = 0,
              Ue = He.end - Me,
              oe = {
                size: 0,
                start: 0,
                skip: 0
              };
            ee: for (let Me = He.pos - ee; He.pos > Me;) {
              let ee = He.size;
              if (He.id == ie && ee >= 0) {
                oe.size = ye, oe.start = be, oe.skip = Ke, Ke += 4, ye += 4, He.next();
                continue
              }
              let Je = He.pos - ee;
              if (ee < 0 || Je < Me || He.start < Ue) break;
              let Re = He.id >= Fe ? 4 : 0,
                ke = He.start;
              for (He.next(); He.pos > Je;) {
                if (He.size < 0) {
                  if (-3 != He.size && -4 != He.size) break ee;
                  Re += 4
                } else He.id >= Fe && (Re += 4);
                He.next()
              }
              be = ke, ye += ee, Ke += Re
            }
            return (ie < 0 || ye == ee) && (oe.size = ye, oe.start = be, oe.skip = Ke), oe.size > 4 ? oe : void 0
          }

          function Oe(ee, ie, He) {
            let {
              id: ye,
              start: be,
              end: Me,
              size: Ke
            } = Je;
            if (Je.next(), Ke >= 0 && ye < Fe) {
              let Ue = He;
              if (Ke > 4) {
                let ye = Je.pos - (Ke - 4);
                for (; Je.pos > ye;) He = Oe(ee, ie, He)
              }
              ie[--He] = Ue, ie[--He] = Me - ee, ie[--He] = be - ee, ie[--He] = ye
            } else - 3 == Ke ? Re = ye : -4 == Ke && (ke = ye);
            return He
          }
          let de = [],
            We = [];
          for (; Je.pos > 0;) qe(ee.start || 0, ee.bufferStart || 0, de, We, -1, 0);
          let te = null !== (ie = ee.length) && void 0 !== ie ? ie : de.length ? We[0] + de[0].length : 0;
          return new fe(oe[ee.topID], de.reverse(), We.reverse(), te)
        }(ee)
      }
    }
    fe.empty = new fe(Je.none, [], [], 0);
    class Te {
      constructor(ee, ie) {
        this.buffer = ee, this.index = ie
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
        return new Te(this.buffer, this.index)
      }
    }
    class pe {
      constructor(ee, ie, He) {
        this.buffer = ee, this.length = ie, this.set = He
      }
      get type() {
        return Je.none
      }
      toString() {
        let ee = [];
        for (let ie = 0; ie < this.buffer.length;) ee.push(this.childString(ie)), ie = this.buffer[ie + 3];
        return ee.join(",")
      }
      childString(ee) {
        let ie = this.buffer[ee],
          He = this.buffer[ee + 3],
          ye = this.set.types[ie],
          be = ye.name;
        if (/\W/.test(be) && !ye.isError && (be = JSON.stringify(be)), He == (ee += 4)) return be;
        let Me = [];
        for (; ee < He;) Me.push(this.childString(ee)), ee = this.buffer[ee + 3];
        return be + "(" + Me.join(",") + ")"
      }
      findChild(ee, ie, He, ye, be) {
        let {
          buffer: Me
        } = this, Ke = -1;
        for (let Ue = ee; Ue != ie && !(Xe(be, ye, Me[Ue + 1], Me[Ue + 2]) && (Ke = Ue, He > 0)); Ue = Me[Ue + 3]);
        return Ke
      }
      slice(ee, ie, He) {
        let ye = this.buffer,
          be = new Uint16Array(ie - ee),
          Me = 0;
        for (let Ke = ee, Ue = 0; Ke < ie;) {
          be[Ue++] = ye[Ke++], be[Ue++] = ye[Ke++] - He;
          let ie = be[Ue++] = ye[Ke++] - He;
          be[Ue++] = ye[Ke++] - ee, Me = Math.max(Me, ie)
        }
        return new pe(be, Me, this.set)
      }
    }

    function Xe(ee, ie, He, ye) {
      switch (ee) {
        case -2:
          return He < ie;
        case -1:
          return ye >= ie && He < ie;
        case 0:
          return He < ie && ye > ie;
        case 1:
          return He <= ie && ye > ie;
        case 2:
          return ye > ie;
        case 4:
          return !0
      }
    }

    function ze(ee, ie, He, ye) {
      for (var be; ee.from == ee.to || (He < 1 ? ee.from >= ie : ee.from > ie) || (He > -1 ? ee.to <= ie : ee.to < ie);) {
        let ie = !ye && ee instanceof Ee && ee.index < 0 ? null : ee.parent;
        if (!ie) return ee;
        ee = ie
      }
      let Me = ye ? 0 : qe.IgnoreOverlays;
      if (ye)
        for (let Ke = ee, Ue = Ke.parent; Ue; Ke = Ue, Ue = Ke.parent) Ke instanceof Ee && Ke.index < 0 && (null === (be = Ue.enter(ie, He, Me)) || void 0 === be ? void 0 : be.from) != Ke.from && (ee = Ue);
      for (;;) {
        let ye = ee.enter(ie, He, Me);
        if (!ye) return ee;
        ee = ye
      }
    }
    class Be {
      cursor() {
        return new we(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(ee) {
        let ie = ge(this, ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return ie.length ? ie[0] : null
      }
      getChildren(ee) {
        return ge(this, ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(ee) {
        return ze(this, ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(ee) {
        return ze(this, ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(ee) {
        return Oe(this.parent, ee)
      }
      enterUnfinishedNodesBefore(ee) {
        let ie = this.childBefore(ee),
          He = this;
        for (; ie;) {
          let ee = ie.lastChild;
          if (!ee || ee.to != ie.to) break;
          ee.type.isError && ee.from == ee.to ? (He = ie, ie = ee.prevSibling) : ie = ee
        }
        return He
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class Ee extends Be {
      constructor(ee, ie, He, ye) {
        super(), this._tree = ee, this.from = ie, this.index = He, this._parent = ye
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
      nextChild(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let Me = this;;) {
          for (let {
              children: Ke,
              positions: Fe
            } = Me._tree, Je = ie > 0 ? Ke.length : -1; ee != Je; ee += ie) {
            let Je, oe = Ke[ee],
              Re = Fe[ee] + Me.from;
            if (be & qe.EnterBracketed && oe instanceof fe && (Je = Ue.get(oe)) && !Je.overlay && Je.bracketed && He >= Re && He <= Re + oe.length || Xe(ye, He, Re, Re + oe.length))
              if (oe instanceof pe) {
                if (be & qe.ExcludeBuffers) continue;
                let Ke = oe.findChild(0, oe.buffer.length, ie, He - Re, ye);
                if (Ke > -1) return new We(new de(Me, oe, ee, Re), null, Ke)
              } else if (be & qe.IncludeAnonymous || !oe.type.isAnonymous || De(oe)) {
              let Ke;
              if (!(be & qe.IgnoreMounts) && (Ke = Ue.get(oe)) && !Ke.overlay) return new Ee(Ke.tree, Re, ee, Me);
              let Fe = new Ee(oe, Re, ee, Me);
              return be & qe.IncludeAnonymous || !Fe.type.isAnonymous ? Fe : Fe.nextChild(ie < 0 ? oe.children.length - 1 : 0, ie, He, ye, be)
            }
          }
          if (be & qe.IncludeAnonymous || !Me.type.isAnonymous) return null;
          if (ee = Me.index >= 0 ? Me.index + ie : ie < 0 ? -1 : Me._parent._tree.children.length, Me = Me._parent, !Me) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(ee) {
        return this.nextChild(0, 1, ee, 2)
      }
      childBefore(ee) {
        return this.nextChild(this._tree.children.length - 1, -1, ee, -2)
      }
      prop(ee) {
        return this._tree.prop(ee)
      }
      enter(ee, ie) {
        let He, ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(ye & qe.IgnoreOverlays) && (He = Ue.get(this._tree)) && He.overlay) {
          let be = ee - this.from,
            Me = ye & qe.EnterBracketed && He.bracketed;
          for (let {
              from: ee,
              to: ye
            }
            of He.overlay)
            if ((ie > 0 || Me ? ee <= be : ee < be) && (ie < 0 || Me ? ye >= be : ye > be)) return new Ee(He.tree, He.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, ee, ie, ye)
      }
      nextSignificantParent() {
        let ee = this;
        for (; ee.type.isAnonymous && ee._parent;) ee = ee._parent;
        return ee
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

    function ge(ee, ie, He, ye) {
      let be = ee.cursor(),
        Me = [];
      if (!be.firstChild()) return Me;
      if (null != He)
        for (let Ke = !1; !Ke;)
          if (Ke = be.type.is(He), !be.nextSibling()) return Me;
      for (;;) {
        if (null != ye && be.type.is(ye)) return Me;
        if (be.type.is(ie) && Me.push(be.node), !be.nextSibling()) return null == ye ? Me : []
      }
    }

    function Oe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ie.length - 1;
      for (let ye = ee; He >= 0; ye = ye.parent) {
        if (!ye) return !1;
        if (!ye.type.isAnonymous) {
          if (ie[He] && ie[He] != ye.name) return !1;
          He--
        }
      }
      return !0
    }
    class de {
      constructor(ee, ie, He, ye) {
        this.parent = ee, this.buffer = ie, this.index = He, this.start = ye
      }
    }
    class We extends Be {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(ee, ie, He) {
        super(), this.context = ee, this._parent = ie, this.index = He, this.type = ee.buffer.set.types[ee.buffer.buffer[He]]
      }
      child(ee, ie, He) {
        let {
          buffer: ye
        } = this.context, be = ye.findChild(this.index + 4, ye.buffer[this.index + 3], ee, ie - this.context.start, He);
        return be < 0 ? null : new We(this.context, this, be)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(ee) {
        return this.child(1, ee, 2)
      }
      childBefore(ee) {
        return this.child(-1, ee, -2)
      }
      prop(ee) {
        return this.type.prop(ee)
      }
      enter(ee, ie) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & qe.ExcludeBuffers) return null;
        let {
          buffer: He
        } = this.context, ye = He.findChild(this.index + 4, He.buffer[this.index + 3], ie > 0 ? 1 : -1, ee - this.context.start, ie);
        return ye < 0 ? null : new We(this.context, this, ye)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(ee) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + ee, ee, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: ee
        } = this.context, ie = ee.buffer[this.index + 3];
        return ie < (this._parent ? ee.buffer[this._parent.index + 3] : ee.buffer.length) ? new We(this.context, this._parent, ie) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: ee
        } = this.context, ie = this._parent ? this._parent.index + 4 : 0;
        return this.index == ie ? this.externalSibling(-1) : new We(this.context, this._parent, ee.findChild(ie, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let ee = [],
          ie = [],
          {
            buffer: He
          } = this.context,
          ye = this.index + 4,
          be = He.buffer[this.index + 3];
        if (be > ye) {
          let Me = He.buffer[this.index + 1];
          ee.push(He.slice(ye, be, Me)), ie.push(0)
        }
        return new fe(this.type, ee, ie, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function te(ee) {
      if (!ee.length) return null;
      let ie = 0,
        He = ee[0];
      for (let Me = 1; Me < ee.length; Me++) {
        let ye = ee[Me];
        (ye.from > He.from || ye.to < He.to) && (He = ye, ie = Me)
      }
      let ye = He instanceof Ee && He.index < 0 ? null : He.parent,
        be = ee.slice();
      return ye ? be[ie] = ye : be.splice(ie, 1), new Ze(be, He)
    }
    class Ze {
      constructor(ee, ie) {
        this.heads = ee, this.node = ie
      }
      get next() {
        return te(this.heads)
      }
    }
    class we {
      get name() {
        return this.type.name
      }
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = ie & ~qe.EnterBracketed, ee instanceof Ee) this.yieldNode(ee);
        else {
          this._tree = ee.context.parent, this.buffer = ee.context;
          for (let ie = ee._parent; ie; ie = ie._parent) this.stack.unshift(ie.index);
          this.bufferNode = ee, this.yieldBuf(ee.index)
        }
      }
      yieldNode(ee) {
        return !!ee && (this._tree = ee, this.type = ee.type, this.from = ee.from, this.to = ee.to, !0)
      }
      yieldBuf(ee, ie) {
        this.index = ee;
        let {
          start: He,
          buffer: ye
        } = this.buffer;
        return this.type = ie || ye.set.types[ye.buffer[ee]], this.from = He + ye.buffer[ee + 1], this.to = He + ye.buffer[ee + 2], !0
      }
      yield(ee) {
        return !!ee && (ee instanceof Ee ? (this.buffer = null, this.yieldNode(ee)) : (this.buffer = ee.context, this.yieldBuf(ee.index, ee.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(ee, ie, He) {
        if (!this.buffer) return this.yield(this._tree.nextChild(ee < 0 ? this._tree._tree.children.length - 1 : 0, ee, ie, He, this.mode));
        let {
          buffer: ye
        } = this.buffer, be = ye.findChild(this.index + 4, ye.buffer[this.index + 3], ee, ie - this.buffer.start, He);
        return !(be < 0) && (this.stack.push(this.index), this.yieldBuf(be))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(ee) {
        return this.enterChild(1, ee, 2)
      }
      childBefore(ee) {
        return this.enterChild(-1, ee, -2)
      }
      enter(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(He & qe.ExcludeBuffers) && this.enterChild(1, ee, ie) : this.yield(this._tree.enter(ee, ie, He))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & qe.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let ee = this.mode & qe.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(ee)
      }
      sibling(ee) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + ee, ee, 0, 4, this.mode));
        let {
          buffer: ie
        } = this.buffer, He = this.stack.length - 1;
        if (ee < 0) {
          let ee = He < 0 ? 0 : this.stack[He] + 4;
          if (this.index != ee) return this.yieldBuf(ie.findChild(ee, this.index, -1, 0, 4))
        } else {
          let ee = ie.buffer[this.index + 3];
          if (ee < (He < 0 ? ie.buffer.length : ie.buffer[this.stack[He] + 3])) return this.yieldBuf(ee)
        }
        return He < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + ee, ee, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(ee) {
        let ie, He, {
          buffer: ye
        } = this;
        if (ye) {
          if (ee > 0) {
            if (this.index < ye.buffer.buffer.length) return !1
          } else
            for (let ee = 0; ee < this.index; ee++)
              if (ye.buffer.buffer[ee + 3] < this.index) return !1;
          ({
            index: ie,
            parent: He
          } = ye)
        } else({
          index: ie,
          _parent: He
        } = this._tree);
        for (; He;
          ({
            index: ie,
            _parent: He
          } = He))
          if (ie > -1)
            for (let ye = ie + ee, be = ee < 0 ? -1 : He._tree.children.length; ye != be; ye += ee) {
              let ee = He._tree.children[ye];
              if (this.mode & qe.IncludeAnonymous || ee instanceof pe || !ee.type.isAnonymous || De(ee)) return !1
            }
        return !0
      }
      move(ee, ie) {
        if (ie && this.enterChild(ee, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(ee)) return !0;
          if (this.atLastNode(ee) || !this.parent()) return !1
        }
      }
      next() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, ee)
      }
      prev() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, ee)
      }
      moveTo(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (ie < 1 ? this.from >= ee : this.from > ee) || (ie > -1 ? this.to <= ee : this.to < ee)) && this.parent(););
        for (; this.enterChild(1, ee, ie););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let ee = this.bufferNode,
          ie = null,
          He = 0;
        if (ee && ee.context == this.buffer) ee: for (let ye = this.index, be = this.stack.length; be >= 0;) {
          for (let Me = ee; Me; Me = Me._parent)
            if (Me.index == ye) {
              if (ye == this.index) return Me;
              ie = Me, He = be + 1;
              break ee
            } ye = this.stack[--be]
        }
        for (let ye = He; ye < this.stack.length; ye++) ie = new We(this.buffer, ie, this.stack[ye]);
        return this.bufferNode = new We(this.buffer, ie, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(ee, ie) {
        for (let He = 0;;) {
          let ye = !1;
          if (this.type.isAnonymous || !1 !== ee(this)) {
            if (this.firstChild()) {
              He++;
              continue
            }
            this.type.isAnonymous || (ye = !0)
          }
          for (;;) {
            if (ye && ie && ie(this), ye = this.type.isAnonymous, !He) return;
            if (this.nextSibling()) break;
            this.parent(), He--, ye = !0
          }
        }
      }
      matchContext(ee) {
        if (!this.buffer) return Oe(this.node.parent, ee);
        let {
          buffer: ie
        } = this.buffer, {
          types: He
        } = ie.set;
        for (let ye = ee.length - 1, be = this.stack.length - 1; ye >= 0; be--) {
          if (be < 0) return Oe(this._tree, ee, ye);
          let Me = He[ie.buffer[this.stack[be]]];
          if (!Me.isAnonymous) {
            if (ee[ye] && ee[ye] != Me.name) return !1;
            ye--
          }
        }
        return !0
      }
    }

    function De(ee) {
      return ee.children.some((ee => ee instanceof pe || !ee.type.isAnonymous || De(ee)))
    }
    const Pe = new WeakMap;

    function Ae(ee, ie) {
      if (!ee.isAnonymous || ie instanceof pe || ie.type != ee) return 1;
      let He = Pe.get(ie);
      if (null == He) {
        He = 1;
        for (let ye of ie.children) {
          if (ye.type != ee || !(ye instanceof fe)) {
            He = 1;
            break
          }
          He += Ae(ee, ye)
        }
        Pe.set(ie, He)
      }
      return He
    }

    function Ye(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
      let Je = 0;
      for (let qe = ye; qe < be; qe++) Je += Ae(ee, ie[qe]);
      let oe = Math.ceil(1.5 * Je / 8),
        Re = [],
        ke = [];
      return function ie(He, ye, be, Ke, Ue) {
        for (let Je = be; Je < Ke;) {
          let be = Je,
            qe = ye[Je],
            fe = Ae(ee, He[Je]);
          for (Je++; Je < Ke; Je++) {
            let ie = Ae(ee, He[Je]);
            if (fe + ie >= oe) break;
            fe += ie
          }
          if (Je == be + 1) {
            if (fe > oe) {
              let ee = He[be];
              ie(ee.children, ee.positions, 0, ee.children.length, ye[be] + Ue);
              continue
            }
            Re.push(He[be])
          } else {
            let ie = ye[Je - 1] + He[Je - 1].length - qe;
            Re.push(Ye(ee, He, ye, be, Je, qe, ie, null, Fe))
          }
          ke.push(qe + Ue - Me)
        }
      }(ie, He, ye, be, 0), (Ue || Fe)(Re, ke, Ke)
    }
    class Ve {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(ee, ie, He) {
        let ye = this.map.get(ee);
        ye || this.map.set(ee, ye = new Map), ye.set(ie, He)
      }
      getBuffer(ee, ie) {
        let He = this.map.get(ee);
        return He && He.get(ie)
      }
      set(ee, ie) {
        ee instanceof We ? this.setBuffer(ee.context.buffer, ee.index, ie) : ee instanceof Ee && this.map.set(ee.tree, ie)
      }
      get(ee) {
        return ee instanceof We ? this.getBuffer(ee.context.buffer, ee.index) : ee instanceof Ee ? this.map.get(ee.tree) : void 0
      }
      cursorSet(ee, ie) {
        ee.buffer ? this.setBuffer(ee.buffer.buffer, ee.index, ie) : this.map.set(ee.tree, ie)
      }
      cursorGet(ee) {
        return ee.buffer ? this.getBuffer(ee.buffer.buffer, ee.index) : this.map.get(ee.tree)
      }
    }
    class ae {
      constructor(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = ee, this.to = ie, this.tree = He, this.offset = ye, this.open = (be ? 1 : 0) | (Me ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = [new ae(0, ee.length, ee, 0, !1, He)];
        for (let be of ie) be.to > ee.length && ye.push(be);
        return ye
      }
      static applyChanges(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!ie.length) return ee;
        let ye = [],
          be = 1,
          Me = ee.length ? ee[0] : null;
        for (let Ke = 0, Ue = 0, Fe = 0;; Ke++) {
          let Je = Ke < ie.length ? ie[Ke] : null,
            oe = Je ? Je.fromA : 1e9;
          if (oe - Ue >= He)
            for (; Me && Me.from < oe;) {
              let ie = Me;
              if (Ue >= ie.from || oe <= ie.to || Fe) {
                let ee = Math.max(ie.from, Ue) - Fe,
                  He = Math.min(ie.to, oe) - Fe;
                ie = ee >= He ? null : new ae(ee, He, ie.tree, ie.offset + Fe, Ke > 0, !!Je)
              }
              if (ie && ye.push(ie), Me.to > oe) break;
              Me = be < ee.length ? ee[be++] : null
            }
          if (!Je) break;
          Ue = Je.toA, Fe = Je.toA - Je.toB
        }
        return ye
      }
    }
    class ce {
      startParse(ee, ie, He) {
        return "string" == typeof ee && (ee = new xe(ee)), He = He ? He.length ? He.map((ee => new Me(ee.from, ee.to))) : [new Me(0, 0)] : [new Me(0, ee.length)], this.createParse(ee, ie || [], He)
      }
      parse(ee, ie, He) {
        let ye = this.startParse(ee, ie, He);
        for (;;) {
          let ee = ye.advance();
          if (ee) return ee
        }
      }
    }
    class xe {
      constructor(ee) {
        this.string = ee
      }
      get length() {
        return this.string.length
      }
      chunk(ee) {
        return this.string.slice(ee)
      }
      get lineChunks() {
        return !1
      }
      read(ee, ie) {
        return this.string.slice(ee, ie)
      }
    }
    new Ke({
      perNode: !0
    })
  },
  44543: (ee, ie, He) => {
    He.d(ie, {
      d: () => ke,
      f: () => Fe,
      j: () => Re,
      n: () => Pe
    });
    var ye = He(44538);
    let be = 0;
    class Me {
      constructor(ee, ie, He, ye) {
        this.name = ee, this.set = ie, this.base = He, this.modified = ye, this.id = be++
      }
      toString() {
        let {
          name: ee
        } = this;
        for (let ie of this.modified) ie.name && (ee = `${ie.name}(${ee})`);
        return ee
      }
      static define(ee, ie) {
        let He = "string" == typeof ee ? ee : "?";
        if (ee instanceof Me && (ie = ee), null === ie || void 0 === ie ? void 0 : ie.base) throw new Error("Can not derive from a modified tag");
        let ye = new Me(He, [], null, []);
        if (ye.set.push(ye), ie)
          for (let be of ie.set) ye.set.push(be);
        return ye
      }
      static defineModifier(ee) {
        let ie = new Ue(ee);
        return ee => ee.modified.indexOf(ie) > -1 ? ee : Ue.get(ee.base || ee, ee.modified.concat(ie).sort(((ee, ie) => ee.id - ie.id)))
      }
    }
    let Ke = 0;
    class Ue {
      constructor(ee) {
        this.name = ee, this.instances = [], this.id = Ke++
      }
      static get(ee, ie) {
        if (!ie.length) return ee;
        let He = ie[0].instances.find((He => {
          return He.base == ee && (ye = ie, be = He.modified, ye.length == be.length && ye.every(((ee, ie) => ee == be[ie])));
          var ye, be
        }));
        if (He) return He;
        let ye = [],
          be = new Me(ee.name, ye, ee, ie);
        for (let Me of ie) Me.instances.push(be);
        let Ke = function(ee) {
          let ie = [
            []
          ];
          for (let He = 0; He < ee.length; He++)
            for (let ye = 0, be = ie.length; ye < be; ye++) ie.push(ie[ye].concat(ee[He]));
          return ie.sort(((ee, ie) => ie.length - ee.length))
        }(ie);
        for (let Me of ee.set)
          if (!Me.modified.length)
            for (let ee of Ke) ye.push(Ue.get(Me, ee));
        return be
      }
    }

    function Fe(ee) {
      let ie = Object.create(null);
      for (let He in ee) {
        let ye = ee[He];
        Array.isArray(ye) || (ye = [ye]);
        for (let ee of He.split(" "))
          if (ee) {
            let He = [],
              be = 2,
              Me = ee;
            for (let ie = 0;;) {
              if ("..." == Me && ie > 0 && ie + 3 == ee.length) {
                be = 1;
                break
              }
              let ye = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Me);
              if (!ye) throw new RangeError("Invalid path: " + ee);
              if (He.push("*" == ye[0] ? "" : '"' == ye[0][0] ? JSON.parse(ye[0]) : ye[0]), ie += ye[0].length, ie == ee.length) break;
              let Ke = ee[ie++];
              if (ie == ee.length && "!" == Ke) {
                be = 0;
                break
              }
              if ("/" != Ke) throw new RangeError("Invalid path: " + ee);
              Me = ee.slice(ie)
            }
            let Ke = He.length - 1,
              Ue = He[Ke];
            if (!Ue) throw new RangeError("Invalid path: " + ee);
            let Fe = new oe(ye, be, Ke > 0 ? He.slice(0, Ke) : null);
            ie[Ue] = Fe.sort(ie[Ue])
          }
      }
      return Je.add(ie)
    }
    const Je = new ye.h({
      combine(ee, ie) {
        let He, ye, be;
        for (; ee || ie;) {
          if (!ee || ie && ee.depth >= ie.depth ? (be = ie, ie = ie.next) : (be = ee, ee = ee.next), He && He.mode == be.mode && !be.context && !He.context) continue;
          let Me = new oe(be.tags, be.mode, be.context);
          He ? He.next = Me : ye = Me, He = Me
        }
        return ye
      }
    });
    class oe {
      constructor(ee, ie, He, ye) {
        this.tags = ee, this.mode = ie, this.context = He, this.next = ye
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(ee) {
        return !ee || ee.depth < this.depth ? (this.next = ee, this) : (ee.next = this.sort(ee.next), ee)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function Re(ee, ie) {
      let He = Object.create(null);
      for (let Me of ee)
        if (Array.isArray(Me.tag))
          for (let ee of Me.tag) He[ee.id] = Me.class;
        else He[Me.tag.id] = Me.class;
      let {
        scope: ye,
        all: be = null
      } = ie || {};
      return {
        style: ee => {
          let ie = be;
          for (let ye of ee)
            for (let ee of ye.set) {
              let ye = He[ee.id];
              if (ye) {
                ie = ie ? ie + " " + ye : ye;
                break
              }
            }
          return ie
        },
        scope: ye
      }
    }

    function ke(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ee.length,
        Me = new qe(ye, Array.isArray(ie) ? ie : [ie], He);
      Me.highlightRange(ee.cursor(), ye, be, "", Me.highlighters), Me.flush(be)
    }
    oe.empty = new oe([], 2, null);
    class qe {
      constructor(ee, ie, He) {
        this.at = ee, this.highlighters = ie, this.span = He, this.class = ""
      }
      startSpan(ee, ie) {
        ie != this.class && (this.flush(ee), ee > this.at && (this.at = ee), this.class = ie)
      }
      flush(ee) {
        ee > this.at && this.class && this.span(this.at, ee, this.class)
      }
      highlightRange(ee, ie, He, be, Me) {
        let {
          type: Ke,
          from: Ue,
          to: Fe
        } = ee;
        if (Ue >= He || Fe <= ie) return;
        Ke.isTop && (Me = this.highlighters.filter((ee => !ee.scope || ee.scope(Ke))));
        let Re = be,
          ke = function(ee) {
            let ie = ee.type.prop(Je);
            for (; ie && ie.context && !ee.matchContext(ie.context);) ie = ie.next;
            return ie || null
          }(ee) || oe.empty,
          qe = function(ee, ie) {
            let He = null;
            for (let ye of ee) {
              let ee = ye.style(ie);
              ee && (He = He ? He + " " + ee : ee)
            }
            return He
          }(Me, ke.tags);
        if (qe && (Re && (Re += " "), Re += qe, 1 == ke.mode && (be += (be ? " " : "") + qe)), this.startSpan(Math.max(ie, Ue), Re), ke.opaque) return;
        let fe = ee.tree && ee.tree.prop(ye.h.mounted);
        if (fe && fe.overlay) {
          let ye = ee.node.enter(fe.overlay[0].from + Ue, 1),
            Ke = this.highlighters.filter((ee => !ee.scope || ee.scope(fe.tree.type))),
            Je = ee.firstChild();
          for (let oe = 0, ke = Ue;; oe++) {
            let qe = oe < fe.overlay.length ? fe.overlay[oe] : null,
              Te = qe ? qe.from + Ue : Fe,
              pe = Math.max(ie, ke),
              Xe = Math.min(He, Te);
            if (pe < Xe && Je)
              for (; ee.from < Xe && (this.highlightRange(ee, pe, Xe, be, Me), this.startSpan(Math.min(Xe, ee.to), Re), !(ee.to >= Te) && ee.nextSibling()););
            if (!qe || Te > He) break;
            ke = qe.to + Ue, ke > ie && (this.highlightRange(ye.cursor(), Math.max(ie, qe.from + Ue), Math.min(He, ke), "", Ke), this.startSpan(Math.min(He, ke), Re))
          }
          Je && ee.parent()
        } else if (ee.firstChild()) {
          fe && (be = "");
          do {
            if (!(ee.to <= ie)) {
              if (ee.from >= He) break;
              this.highlightRange(ee, ie, He, be, Me), this.startSpan(Math.min(He, ee.to), Re)
            }
          } while (ee.nextSibling());
          ee.parent()
        }
      }
    }
    const fe = Me.define,
      Te = fe(),
      pe = fe(),
      Xe = fe(pe),
      ze = fe(pe),
      Be = fe(),
      Ee = fe(Be),
      ge = fe(Be),
      Oe = fe(),
      de = fe(Oe),
      We = fe(),
      te = fe(),
      Ze = fe(),
      we = fe(Ze),
      De = fe(),
      Pe = {
        comment: Te,
        lineComment: fe(Te),
        blockComment: fe(Te),
        docComment: fe(Te),
        name: pe,
        variableName: fe(pe),
        typeName: Xe,
        tagName: fe(Xe),
        propertyName: ze,
        attributeName: fe(ze),
        className: fe(pe),
        labelName: fe(pe),
        namespace: fe(pe),
        macroName: fe(pe),
        literal: Be,
        string: Ee,
        docString: fe(Ee),
        character: fe(Ee),
        attributeValue: fe(Ee),
        number: ge,
        integer: fe(ge),
        float: fe(ge),
        bool: fe(Be),
        regexp: fe(Be),
        escape: fe(Be),
        color: fe(Be),
        url: fe(Be),
        keyword: We,
        self: fe(We),
        null: fe(We),
        atom: fe(We),
        unit: fe(We),
        modifier: fe(We),
        operatorKeyword: fe(We),
        controlKeyword: fe(We),
        definitionKeyword: fe(We),
        moduleKeyword: fe(We),
        operator: te,
        derefOperator: fe(te),
        arithmeticOperator: fe(te),
        logicOperator: fe(te),
        bitwiseOperator: fe(te),
        compareOperator: fe(te),
        updateOperator: fe(te),
        definitionOperator: fe(te),
        typeOperator: fe(te),
        controlOperator: fe(te),
        punctuation: Ze,
        separator: fe(Ze),
        bracket: we,
        angleBracket: fe(we),
        squareBracket: fe(we),
        paren: fe(we),
        brace: fe(we),
        content: Oe,
        heading: de,
        heading1: fe(de),
        heading2: fe(de),
        heading3: fe(de),
        heading4: fe(de),
        heading5: fe(de),
        heading6: fe(de),
        contentSeparator: fe(Oe),
        list: fe(Oe),
        quote: fe(Oe),
        emphasis: fe(Oe),
        strong: fe(Oe),
        link: fe(Oe),
        monospace: fe(Oe),
        strikethrough: fe(Oe),
        inserted: fe(),
        deleted: fe(),
        changed: fe(),
        invalid: fe(),
        meta: De,
        documentMeta: fe(De),
        annotation: fe(De),
        processingInstruction: fe(De),
        definition: Me.defineModifier("definition"),
        constant: Me.defineModifier("constant"),
        function: Me.defineModifier("function"),
        standard: Me.defineModifier("standard"),
        local: Me.defineModifier("local"),
        special: Me.defineModifier("special")
      };
    for (let Ae in Pe) {
      let ee = Pe[Ae];
      ee instanceof Me && (ee.name = Ae)
    }
    Re([{
      tag: Pe.link,
      class: "tok-link"
    }, {
      tag: Pe.heading,
      class: "tok-heading"
    }, {
      tag: Pe.emphasis,
      class: "tok-emphasis"
    }, {
      tag: Pe.strong,
      class: "tok-strong"
    }, {
      tag: Pe.keyword,
      class: "tok-keyword"
    }, {
      tag: Pe.atom,
      class: "tok-atom"
    }, {
      tag: Pe.bool,
      class: "tok-bool"
    }, {
      tag: Pe.url,
      class: "tok-url"
    }, {
      tag: Pe.labelName,
      class: "tok-labelName"
    }, {
      tag: Pe.inserted,
      class: "tok-inserted"
    }, {
      tag: Pe.deleted,
      class: "tok-deleted"
    }, {
      tag: Pe.literal,
      class: "tok-literal"
    }, {
      tag: Pe.string,
      class: "tok-string"
    }, {
      tag: Pe.number,
      class: "tok-number"
    }, {
      tag: [Pe.regexp, Pe.escape, Pe.special(Pe.string)],
      class: "tok-string2"
    }, {
      tag: Pe.variableName,
      class: "tok-variableName"
    }, {
      tag: Pe.local(Pe.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: Pe.definition(Pe.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: Pe.special(Pe.variableName),
      class: "tok-variableName2"
    }, {
      tag: Pe.definition(Pe.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: Pe.typeName,
      class: "tok-typeName"
    }, {
      tag: Pe.namespace,
      class: "tok-namespace"
    }, {
      tag: Pe.className,
      class: "tok-className"
    }, {
      tag: Pe.macroName,
      class: "tok-macroName"
    }, {
      tag: Pe.propertyName,
      class: "tok-propertyName"
    }, {
      tag: Pe.operator,
      class: "tok-operator"
    }, {
      tag: Pe.comment,
      class: "tok-comment"
    }, {
      tag: Pe.meta,
      class: "tok-meta"
    }, {
      tag: Pe.invalid,
      class: "tok-invalid"
    }, {
      tag: Pe.punctuation,
      class: "tok-punctuation"
    }])
  },
  44548: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue.i,
      h: () => Ke.x,
      j: () => Ke.K,
      n: () => Ke.N,
      r: () => Ue.o,
      t: () => tH,
      w: () => Ue.N,
      z: () => Ue.jb
    });
    var ye = He(1374),
      be = He(1365),
      Me = He(59),
      Ke = He(44509),
      Ue = He(44518),
      Fe = He(44533),
      Je = He(44538);

    function oe(ee, ie) {
      return He => {
        let {
          state: ye,
          dispatch: be
        } = He;
        if (ye.readOnly) return !1;
        let Me = ee(ie, ye);
        return !!Me && (be(ye.update(Me)), !0)
      }
    }
    const Re = oe(Xe, 0),
      ke = oe(pe, 0),
      qe = oe(((ee, ie) => pe(ee, ie, function(ee) {
        let ie = [];
        for (let He of ee.selection.zp) {
          let ye = ee.doc.lineAt(He.from),
            be = He.to <= ye.to ? ye : ee.doc.lineAt(He.to);
          be.from > ye.from && be.from == He.to && (be = He.to == ye.to + 1 ? ye : ee.doc.lineAt(He.to - 1));
          let Me = ie.length - 1;
          Me >= 0 && ie[Me].to > ye.from ? ie[Me].to = be.to : ie.push({
            from: ye.from + /^\s*/.exec(ye.text)[0].length,
            to: be.to
          })
        }
        return ie
      }(ie))), 0);

    function fe(ee, ie) {
      let He = ee.languageDataAt("commentTokens", ie, 1);
      return He.length ? He[0] : {}
    }
    const Te = 50;

    function pe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ie.selection.zp,
        ye = He.map((ee => fe(ie, ee.from).block));
      if (!ye.every((ee => ee))) return null;
      let be = He.map(((ee, He) => function(ee, ie, He, ye) {
        let be, Me, {
            open: Ke,
            close: Ue
          } = ie,
          Fe = ee.sliceDoc(He - Te, He),
          Je = ee.sliceDoc(ye, ye + Te),
          oe = /\s*$/.exec(Fe)[0].length,
          Re = /^\s*/.exec(Je)[0].length,
          ke = Fe.length - oe;
        if (Fe.slice(ke - Ke.length, ke) == Ke && Je.slice(Re, Re + Ue.length) == Ue) return {
          open: {
            pos: He - oe,
            margin: oe && 1
          },
          close: {
            pos: ye + Re,
            margin: Re && 1
          }
        };
        ye - He <= 2 * Te ? be = Me = ee.sliceDoc(He, ye) : (be = ee.sliceDoc(He, He + Te), Me = ee.sliceDoc(ye - Te, ye));
        let qe = /^\s*/.exec(be)[0].length,
          fe = /\s*$/.exec(Me)[0].length,
          pe = Me.length - fe - Ue.length;
        return be.slice(qe, qe + Ke.length) == Ke && Me.slice(pe, pe + Ue.length) == Ue ? {
          open: {
            pos: He + qe + Ke.length,
            margin: /\s/.test(be.charAt(qe + Ke.length)) ? 1 : 0
          },
          close: {
            pos: ye - fe - Ue.length,
            margin: /\s/.test(Me.charAt(pe - 1)) ? 1 : 0
          }
        } : null
      }(ie, ye[He], ee.from, ee.to)));
      if (2 != ee && !be.every((ee => ee))) return {
        changes: ie.changes(He.map(((ee, ie) => be[ie] ? [] : [{
          from: ee.from,
          insert: ye[ie].open + " "
        }, {
          from: ee.to,
          insert: " " + ye[ie].close
        }])))
      };
      if (1 != ee && be.some((ee => ee))) {
        let ee = [];
        for (let ie, He = 0; He < be.length; He++)
          if (ie = be[He]) {
            let be = ye[He],
              {
                open: Me,
                close: Ke
              } = ie;
            ee.push({
              from: Me.pos - be.open.length,
              to: Me.pos + Me.margin
            }, {
              from: Ke.pos - Ke.margin,
              to: Ke.pos + be.close.length
            })
          } return {
          changes: ee
        }
      }
      return null
    }

    function Xe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ie.selection.zp,
        ye = [],
        be = -1;
      ee: for (let {
          from: Me,
          to: Ke
        }
        of He) {
        let ee, He = ye.length,
          Ue = 1e9;
        for (let Fe = Me; Fe <= Ke;) {
          let He = ie.doc.lineAt(Fe);
          if (void 0 == ee && (ee = fe(ie, He.from).line, !ee)) continue ee;
          if (He.from > be && (Me == Ke || Ke > He.from)) {
            be = He.from;
            let ie = /^\s*/.exec(He.text)[0].length,
              Me = ie == He.length,
              Ke = He.text.slice(ie, ie + ee.length) == ee ? ie : -1;
            ie < He.text.length && ie < Ue && (Ue = ie), ye.push({
              line: He,
              comment: Ke,
              token: ee,
              indent: ie,
              empty: Me,
              single: !1
            })
          }
          Fe = He.to + 1
        }
        if (Ue < 1e9)
          for (let ie = He; ie < ye.length; ie++) ye[ie].indent < ye[ie].line.text.length && (ye[ie].indent = Ue);
        ye.length == He + 1 && (ye[He].single = !0)
      }
      if (2 != ee && ye.some((ee => ee.comment < 0 && (!ee.empty || ee.single)))) {
        let ee = [];
        for (let {
            line: ie,
            token: be,
            indent: Me,
            empty: Ke,
            single: Ue
          }
          of ye) !Ue && Ke || ee.push({
          from: ie.from + Me,
          insert: be + " "
        });
        let He = ie.changes(ee);
        return {
          changes: He,
          selection: ie.selection.map(He, 1)
        }
      }
      if (1 != ee && ye.some((ee => ee.comment >= 0))) {
        let ee = [];
        for (let {
            line: ie,
            comment: He,
            token: be
          }
          of ye)
          if (He >= 0) {
            let ye = ie.from + He,
              Me = ye + be.length;
            " " == ie.text[Me - ie.from] && Me++, ee.push({
              from: ye,
              to: Me
            })
          } return {
          changes: ee
        }
      }
      return null
    }
    const ze = Ke.e.define(),
      Be = Ke.e.define(),
      Ee = Ke.q.define(),
      ge = Ke.q.define({
        combine: ee => (0, Ke.cb)(ee, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (ee, ie) => ie
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (ee, ie) => (He, ye) => ee(He, ye) || ie(He, ye)
        })
      }),
      Oe = Ke.N.define({
        create: () => ve.empty,
        update(ee, ie) {
          let He = ie.state.facet(ge),
            ye = ie.annotation(ze);
          if (ye) {
            let be = De.fromTransaction(ie, ye.selection),
              Me = ye.side,
              Ke = 0 == Me ? ee.undone : ee.done;
            return Ke = be ? Pe(Ke, Ke.length, He.minDepth, be) : ae(Ke, ie.startState.selection), new ve(0 == Me ? ye.rest : Ke, 0 == Me ? Ke : ye.rest)
          }
          let be = ie.annotation(Be);
          if ("full" != be && "before" != be || (ee = ee.isolate()), !1 === ie.annotation(Ke.T.addToHistory)) return ie.changes.empty ? ee : ee.addMapping(ie.changes.desc);
          let Me = De.fromTransaction(ie),
            Ue = ie.annotation(Ke.T.time),
            Fe = ie.annotation(Ke.T.userEvent);
          return Me ? ee = ee.addChanges(Me, Ue, Fe, He, ie) : ie.selection && (ee = ee.addSelection(ie.startState.selection, Ue, Fe, He.newGroupDelay)), "full" != be && "after" != be || (ee = ee.isolate()), ee
        },
        toJSON: ee => ({
          done: ee.done.map((ee => ee.toJSON())),
          undone: ee.undone.map((ee => ee.toJSON()))
        }),
        fromJSON: ee => new ve(ee.done.map(De.fromJSON), ee.undone.map(De.fromJSON))
      });

    function de(ee, ie) {
      return function(He) {
        let {
          state: ye,
          dispatch: be
        } = He;
        if (!ie && ye.readOnly) return !1;
        let Me = ye.field(Oe, !1);
        if (!Me) return !1;
        let Ke = Me.pop(ee, ye, ie);
        return !!Ke && (be(Ke), !0)
      }
    }
    const We = de(0, !1),
      te = de(1, !1),
      Ze = de(0, !0),
      we = de(1, !0);
    class De {
      constructor(ee, ie, He, ye, be) {
        this.changes = ee, this.effects = ie, this.mapped = He, this.startSelection = ye, this.selectionsAfter = be
      }
      setSelAfter(ee) {
        return new De(this.changes, this.effects, this.mapped, this.startSelection, ee)
      }
      toJSON() {
        var ee, ie, He;
        return {
          changes: null === (ee = this.changes) || void 0 === ee ? void 0 : ee.toJSON(),
          mapped: null === (ie = this.mapped) || void 0 === ie ? void 0 : ie.toJSON(),
          startSelection: null === (He = this.startSelection) || void 0 === He ? void 0 : He.toJSON(),
          selectionsAfter: this.selectionsAfter.map((ee => ee.toJSON()))
        }
      }
      static fromJSON(ee) {
        return new De(ee.changes && Ke.ChangeSet.fromJSON(ee.changes), [], ee.mapped && Ke.g.fromJSON(ee.mapped), ee.startSelection && Ke.k.fromJSON(ee.startSelection), ee.selectionsAfter.map(Ke.k.fromJSON))
      }
      static fromTransaction(ee, ie) {
        let He = Ye;
        for (let ye of ee.startState.facet(Ee)) {
          let ie = ye(ee);
          ie.length && (He = He.concat(ie))
        }
        return !He.length && ee.changes.empty ? null : new De(ee.changes.invert(ee.startState.doc), He, void 0, ie || ee.startState.selection, Ye)
      }
      static selection(ee) {
        return new De(void 0, Ye, void 0, void 0, ee)
      }
    }

    function Pe(ee, ie, He, ye) {
      let be = ie + 1 > He + 20 ? ie - He - 1 : 0,
        Me = ee.slice(be, ie);
      return Me.push(ye), Me
    }

    function Ae(ee, ie) {
      return ee.length ? ie.length ? ee.concat(ie) : ee : ie
    }
    const Ye = [],
      Ve = 200;

    function ae(ee, ie) {
      if (ee.length) {
        let He = ee[ee.length - 1],
          ye = He.selectionsAfter.slice(Math.max(0, He.selectionsAfter.length - Ve));
        return ye.length && ye[ye.length - 1].eq(ie) ? ee : (ye.push(ie), Pe(ee, ee.length - 1, 1e9, He.setSelAfter(ye)))
      }
      return [De.selection([ie])]
    }

    function ce(ee) {
      let ie = ee[ee.length - 1],
        He = ee.slice();
      return He[ee.length - 1] = ie.setSelAfter(ie.selectionsAfter.slice(0, ie.selectionsAfter.length - 1)), He
    }

    function xe(ee, ie) {
      if (!ee.length) return ee;
      let He = ee.length,
        ye = Ye;
      for (; He;) {
        let be = Le(ee[He - 1], ie, ye);
        if (be.changes && !be.changes.empty || be.effects.length) {
          let ie = ee.slice(0, He);
          return ie[He - 1] = be, ie
        }
        ie = be.mapped, He--, ye = be.selectionsAfter
      }
      return ye.length ? [De.selection(ye)] : Ye
    }

    function Le(ee, ie, He) {
      let ye = Ae(ee.selectionsAfter.length ? ee.selectionsAfter.map((ee => ee.map(ie))) : Ye, He);
      if (!ee.changes) return De.selection(ye);
      let be = ee.changes.map(ie),
        Me = ie.mapDesc(ee.changes, !0),
        Ue = ee.mapped ? ee.mapped.composeDesc(Me) : Me;
      return new De(be, Ke.K.mapEffects(ee.effects, ie), Ue, ee.startSelection.map(Me), ye)
    }
    const Ce = /^(input\.type|delete)($|\.)/;
    class ve {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = ee, this.undone = ie, this.prevTime = He, this.prevUserEvent = ye
      }
      isolate() {
        return this.prevTime ? new ve(this.done, this.undone) : this
      }
      addChanges(ee, ie, He, ye, be) {
        let Me = this.done,
          Ue = Me[Me.length - 1];
        return Me = Ue && Ue.changes && !Ue.changes.empty && ee.changes && (!He || Ce.test(He)) && (!Ue.selectionsAfter.length && ie - this.prevTime < ye.newGroupDelay && ye.joinToEvent(be, function(ee, ie) {
          let He = [],
            ye = !1;
          return ee.iterChangedRanges(((ee, ie) => He.push(ee, ie))), ie.iterChangedRanges(((ee, ie, be, Me) => {
            for (let Ke = 0; Ke < He.length;) {
              let ee = He[Ke++],
                ie = He[Ke++];
              Me >= ee && be <= ie && (ye = !0)
            }
          })), ye
        }(Ue.changes, ee.changes)) || "input.type.compose" == He) ? Pe(Me, Me.length - 1, ye.minDepth, new De(ee.changes.compose(Ue.changes), Ae(Ke.K.mapEffects(ee.effects, Ue.changes), Ue.effects), Ue.mapped, Ue.startSelection, Ye)) : Pe(Me, Me.length, ye.minDepth, ee), new ve(Me, Ye, ie, He)
      }
      addSelection(ee, ie, He, ye) {
        let be = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Ye;
        return be.length > 0 && ie - this.prevTime < ye && He == this.prevUserEvent && He && /^select($|\.)/.test(He) && (Me = be[be.length - 1], Ke = ee, Me.zp.length == Ke.zp.length && 0 === Me.zp.filter(((ee, ie) => ee.empty != Ke.zp[ie].empty)).length) ? this : new ve(ae(this.done, ee), this.undone, ie, He);
        var Me, Ke
      }
      addMapping(ee) {
        return new ve(xe(this.done, ee), xe(this.undone, ee), this.prevTime, this.prevUserEvent)
      }
      pop(ee, ie, He) {
        let ye = 0 == ee ? this.done : this.undone;
        if (0 == ye.length) return null;
        let be = ye[ye.length - 1],
          Me = be.selectionsAfter[0] || (be.startSelection ? be.startSelection.map(be.changes.invertedDesc, 1) : ie.selection);
        if (He && be.selectionsAfter.length) return ie.update({
          selection: be.selectionsAfter[be.selectionsAfter.length - 1],
          annotations: ze.of({
            side: ee,
            rest: ce(ye),
            selection: Me
          }),
          userEvent: 0 == ee ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (be.changes) {
          let He = 1 == ye.length ? Ye : ye.slice(0, ye.length - 1);
          return be.mapped && (He = xe(He, be.mapped)), ie.update({
            changes: be.changes,
            selection: be.startSelection,
            effects: be.effects,
            annotations: ze.of({
              side: ee,
              rest: He,
              selection: Me
            }),
            filter: !1,
            userEvent: 0 == ee ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    ve.empty = new ve(Ye, Ye);
    const ue = [{
      key: "Mod-z",
      run: We,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: te,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: te,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Ze,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: we,
      preventDefault: !0
    }];

    function me(ee, ie) {
      return Ke.k.create(ee.zp.map(ie), ee.mainIndex)
    }

    function le(ee, ie) {
      return ee.update({
        selection: ie,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function Se(ee, ie) {
      let {
        state: He,
        dispatch: ye
      } = ee, be = me(He.selection, ie);
      return !be.eq(He.selection, !0) && (ye(le(He, be)), !0)
    }

    function ne(ee, ie) {
      return Ke.k.cursor(ie ? ee.to : ee.from)
    }

    function je(ee, ie) {
      return Se(ee, (He => He.empty ? ee.moveByChar(He, ie) : ne(He, ie)))
    }

    function se(ee) {
      return ee.textDirectionAt(ee.state.selection.main.head) == Ue.h.LTR
    }
    const Ie = ee => je(ee, !se(ee)),
      he = ee => je(ee, se(ee));

    function Ne(ee, ie) {
      return Se(ee, (He => He.empty ? ee.moveByGroup(He, ie) : ne(He, ie)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function Ge(ee, ie, He) {
      if (ie.type.prop(He)) return !0;
      let ye = ie.to - ie.from;
      return ye && (ye > 2 || /[^\s,.;:]/.test(ee.sliceDoc(ie.from, ie.to))) || ie.firstChild
    }

    function re(ee, ie, He) {
      let ye, be, Me = (0, Fe.tb)(ee).resolveInner(ie.head),
        Ue = He ? Je.h.closedBy : Je.h.openedBy;
      for (let Ke = ie.head;;) {
        let ie = He ? Me.childAfter(Ke) : Me.childBefore(Ke);
        if (!ie) break;
        Ge(ee, ie, Ue) ? Me = ie : Ke = He ? ie.to : ie.from
      }
      return be = Me.type.prop(Ue) && (ye = He ? (0, Fe.gb)(ee, Me.from, 1) : (0, Fe.gb)(ee, Me.to, -1)) && ye.matched ? He ? ye.end.to : ye.end.from : He ? Me.to : Me.from, Ke.k.cursor(be, He ? -1 : 1)
    }

    function Qe(ee, ie) {
      return Se(ee, (He => {
        if (!He.empty) return ne(He, ie);
        let ye = ee.moveVertically(He, ie);
        return ye.head != He.head ? ye : ee.moveToLineBoundary(He, ie)
      }))
    }
    const ei = ee => Qe(ee, !1),
      ii = ee => Qe(ee, !0);

    function Hi(ee) {
      let ie, He = ee.scrollDOM.clientHeight < ee.scrollDOM.scrollHeight - 2,
        ye = 0,
        be = 0;
      if (He) {
        for (let ie of ee.state.facet(Ue.i.scrollMargins)) {
          let He = ie(ee);
          (null === He || void 0 === He ? void 0 : He.top) && (ye = Math.max(null === He || void 0 === He ? void 0 : He.top, ye)), (null === He || void 0 === He ? void 0 : He.bottom) && (be = Math.max(null === He || void 0 === He ? void 0 : He.bottom, be))
        }
        ie = ee.scrollDOM.clientHeight - ye - be
      } else ie = (ee.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: ye,
        marginBottom: be,
        selfScroll: He,
        height: Math.max(ee.defaultLineHeight, ie - 5)
      }
    }

    function yi(ee, ie) {
      let He, ye = Hi(ee),
        {
          state: be
        } = ee,
        Me = me(be.selection, (He => He.empty ? ee.moveVertically(He, ie, ye.height) : ne(He, ie)));
      if (Me.eq(be.selection)) return !1;
      if (ye.selfScroll) {
        let ie = ee.coordsAtPos(be.selection.main.head),
          Ke = ee.scrollDOM.getBoundingClientRect(),
          Fe = Ke.top + ye.marginTop,
          Je = Ke.bottom - ye.marginBottom;
        ie && ie.top > Fe && ie.bottom < Je && (He = Ue.i.scrollIntoView(Me.main.head, {
          y: "start",
          yMargin: ie.top - Fe
        }))
      }
      return ee.dispatch(le(be, Me), {
        effects: He
      }), !0
    }
    const bi = ee => yi(ee, !1),
      Mi = ee => yi(ee, !0);

    function Ki(ee, ie, He) {
      let ye = ee.lineBlockAt(ie.head),
        be = ee.moveToLineBoundary(ie, He);
      if (be.head == ie.head && be.head != (He ? ye.to : ye.from) && (be = ee.moveToLineBoundary(ie, He, !1)), !He && be.head == ye.from && ye.length) {
        let He = /^\s*/.exec(ee.state.sliceDoc(ye.from, Math.min(ye.from + 100, ye.to)))[0].length;
        He && ie.head != ye.from + He && (be = Ke.k.cursor(ye.from + He))
      }
      return be
    }

    function Ui(ee, ie, He) {
      let ye = !1,
        be = me(ee.selection, (ie => {
          let be = (0, Fe.gb)(ee, ie.head, -1) || (0, Fe.gb)(ee, ie.head, 1) || ie.head > 0 && (0, Fe.gb)(ee, ie.head - 1, 1) || ie.head < ee.doc.length && (0, Fe.gb)(ee, ie.head + 1, -1);
          if (!be || !be.end) return ie;
          ye = !0;
          let Me = be.start.from == ie.head ? be.end.to : be.end.from;
          return He ? Ke.k.range(ie.anchor, Me) : Ke.k.cursor(Me)
        }));
      return !!ye && (ie(le(ee, be)), !0)
    }

    function Fi(ee, ie) {
      let He = me(ee.state.selection, (ee => {
        let He = ie(ee);
        return Ke.k.range(ee.anchor, He.head, He.goalColumn, He.bidiLevel || void 0, He.assoc)
      }));
      return !He.eq(ee.state.selection) && (ee.dispatch(le(ee.state, He)), !0)
    }

    function Ji(ee, ie) {
      return Fi(ee, (He => ee.moveByChar(He, ie)))
    }
    const oi = ee => Ji(ee, !se(ee)),
      Ri = ee => Ji(ee, se(ee));

    function ki(ee, ie) {
      return Fi(ee, (He => ee.moveByGroup(He, ie)))
    }

    function qi(ee, ie) {
      return Fi(ee, (He => ee.moveVertically(He, ie)))
    }
    const fi = ee => qi(ee, !1),
      Ti = ee => qi(ee, !0);

    function Xi(ee, ie) {
      return Fi(ee, (He => ee.moveVertically(He, ie, Hi(ee).height)))
    }
    const zi = ee => Xi(ee, !1),
      Bi = ee => Xi(ee, !0),
      Ei = ee => {
        let {
          state: ie,
          dispatch: He
        } = ee;
        return He(le(ie, {
          anchor: 0
        })), !0
      },
      gi = ee => {
        let {
          state: ie,
          dispatch: He
        } = ee;
        return He(le(ie, {
          anchor: ie.doc.length
        })), !0
      },
      Oi = ee => {
        let {
          state: ie,
          dispatch: He
        } = ee;
        return He(le(ie, {
          anchor: ie.selection.main.anchor,
          head: 0
        })), !0
      },
      di = ee => {
        let {
          state: ie,
          dispatch: He
        } = ee;
        return He(le(ie, {
          anchor: ie.selection.main.anchor,
          head: ie.doc.length
        })), !0
      };

    function Wi(ee, ie) {
      let {
        state: He
      } = ee, ye = He.selection, be = He.selection.zp.slice();
      for (let Me of He.selection.zp) {
        let ye = He.doc.lineAt(Me.head);
        if (ie ? ye.to < ee.state.doc.length : ye.from > 0)
          for (let He = Me;;) {
            let Me = ee.moveVertically(He, ie);
            if (Me.head < ye.from || Me.head > ye.to) {
              be.some((ee => ee.head == Me.head)) || be.push(Me);
              break
            }
            if (Me.head == He.head) break;
            He = Me
          }
      }
      return be.length != ye.zp.length && (ee.dispatch(le(He, Ke.k.create(be, be.length - 1))), !0)
    }

    function ti(ee, ie) {
      if (ee.state.readOnly) return !1;
      let He = "delete.selection",
        {
          state: ye
        } = ee,
        be = ye.changeByRange((ye => {
          let {
            from: be,
            to: Me
          } = ye;
          if (be == Me) {
            let Ke = ie(ye);
            Ke < be ? (He = "delete.backward", Ke = Zi(ee, Ke, !1)) : Ke > be && (He = "delete.forward", Ke = Zi(ee, Ke, !0)), be = Math.min(be, Ke), Me = Math.max(Me, Ke)
          } else be = Zi(ee, be, !1), Me = Zi(ee, Me, !0);
          return be == Me ? {
            range: ye
          } : {
            changes: {
              from: be,
              to: Me
            },
            range: Ke.k.cursor(be, be < ye.head ? -1 : 1)
          }
        }));
      return !be.changes.empty && (ee.dispatch(ye.update(be, {
        scrollIntoView: !0,
        userEvent: He,
        effects: "delete.selection" == He ? Ue.i.announce.of(ye.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function Zi(ee, ie, He) {
      if (ee instanceof Ue.i)
        for (let ye of ee.state.facet(Ue.i.atomicRanges).map((ie => ie(ee)))) ye.between(ie, ie, ((ee, ye) => {
          ee < ie && ye > ie && (ie = He ? ye : ee)
        }));
      return ie
    }
    const wi = (ee, ie, He) => ti(ee, (ye => {
        let be, Me, Ue = ye.from,
          {
            state: Je
          } = ee,
          oe = Je.doc.lineAt(Ue);
        if (He && !ie && Ue > oe.from && Ue < oe.from + 200 && !/[^ \t]/.test(be = oe.text.slice(0, Ue - oe.from))) {
          if ("\t" == be[be.length - 1]) return Ue - 1;
          let ee = (0, Ke.gb)(be, Je.tabSize) % (0, Fe.M)(Je) || (0, Fe.M)(Je);
          for (let ie = 0; ie < ee && " " == be[be.length - 1 - ie]; ie++) Ue--;
          Me = Ue
        } else Me = (0, Ke.kb)(oe.text, Ue - oe.from, ie, ie) + oe.from, Me == Ue && oe.number != (ie ? Je.doc.lines : 1) ? Me += ie ? 1 : -1 : !ie && /[\ufe00-\ufe0f]/.test(oe.text.slice(Me - oe.from, Ue - oe.from)) && (Me = (0, Ke.kb)(oe.text, Me - oe.from, !1, !1) + oe.from);
        return Me
      })),
      Di = ee => wi(ee, !1, !0),
      Pi = ee => wi(ee, !0, !1),
      Ai = (ee, ie) => ti(ee, (He => {
        let ye = He.head,
          {
            state: be
          } = ee,
          Me = be.doc.lineAt(ye),
          Ue = be.charCategorizer(ye);
        for (let ee = null;;) {
          if (ye == (ie ? Me.to : Me.from)) {
            ye == He.head && Me.number != (ie ? be.doc.lines : 1) && (ye += ie ? 1 : -1);
            break
          }
          let Fe = (0, Ke.kb)(Me.text, ye - Me.from, ie) + Me.from,
            Je = Me.text.slice(Math.min(ye, Fe) - Me.from, Math.max(ye, Fe) - Me.from),
            oe = Ue(Je);
          if (null != ee && oe != ee) break;
          " " == Je && ye == He.head || (ee = oe), ye = Fe
        }
        return ye
      })),
      Yi = ee => Ai(ee, !1);

    function Vi(ee) {
      let ie = [],
        He = -1;
      for (let ye of ee.selection.zp) {
        let be = ee.doc.lineAt(ye.from),
          Me = ee.doc.lineAt(ye.to);
        if (ye.empty || ye.to != Me.from || (Me = ee.doc.lineAt(ye.to - 1)), He >= be.number) {
          let ee = ie[ie.length - 1];
          ee.to = Me.to, ee.zp.push(ye)
        } else ie.push({
          from: be.from,
          to: Me.to,
          zp: [ye]
        });
        He = Me.number + 1
      }
      return ie
    }

    function ai(ee, ie, He) {
      if (ee.readOnly) return !1;
      let ye = [],
        be = [];
      for (let Me of Vi(ee)) {
        if (He ? Me.to == ee.doc.length : 0 == Me.from) continue;
        let ie = ee.doc.lineAt(He ? Me.to + 1 : Me.from - 1),
          Ue = ie.length + 1;
        if (He) {
          ye.push({
            from: Me.to,
            to: ie.to
          }, {
            from: Me.from,
            insert: ie.text + ee.lineBreak
          });
          for (let ie of Me.zp) be.push(Ke.k.range(Math.min(ee.doc.length, ie.anchor + Ue), Math.min(ee.doc.length, ie.head + Ue)))
        } else {
          ye.push({
            from: ie.from,
            to: Me.from
          }, {
            from: Me.to,
            insert: ee.lineBreak + ie.text
          });
          for (let ee of Me.zp) be.push(Ke.k.range(ee.anchor - Ue, ee.head - Ue))
        }
      }
      return !!ye.length && (ie(ee.update({
        changes: ye,
        scrollIntoView: !0,
        selection: Ke.k.create(be, ee.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function ci(ee, ie, He) {
      if (ee.readOnly) return !1;
      let ye = [];
      for (let Me of Vi(ee)) He ? ye.push({
        from: Me.from,
        insert: ee.doc.slice(Me.from, Me.to) + ee.lineBreak
      }) : ye.push({
        from: Me.to,
        insert: ee.lineBreak + ee.doc.slice(Me.from, Me.to)
      });
      let be = ee.changes(ye);
      return ie(ee.update({
        changes: be,
        selection: ee.selection.map(be, He ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const xi = Li(!1);

    function Li(ee) {
      return ie => {
        let {
          state: He,
          dispatch: ye
        } = ie;
        if (He.readOnly) return !1;
        let be = He.changeByRange((ie => {
          let {
            from: ye,
            to: be
          } = ie, Me = He.doc.lineAt(ye), Ue = !ee && ye == be && function(ee, ie) {
            if (/\(\)|\[\]|\{\}/.test(ee.sliceDoc(ie - 1, ie + 1))) return {
              from: ie,
              to: ie
            };
            let He, ye = (0, Fe.tb)(ee).resolveInner(ie),
              be = ye.childBefore(ie),
              Me = ye.childAfter(ie);
            return be && Me && be.to <= ie && Me.from >= ie && (He = be.type.prop(Je.h.closedBy)) && He.indexOf(Me.name) > -1 && ee.doc.lineAt(be.to).from == ee.doc.lineAt(Me.from).from && !/\S/.test(ee.sliceDoc(be.to, Me.from)) ? {
              from: be.to,
              to: Me.from
            } : null
          }(He, ye);
          ee && (ye = be = (be <= Me.to ? Me : He.doc.lineAt(be)).to);
          let oe = new Fe.h(He, {
              simulateBreak: ye,
              simulateDoubleBreak: !!Ue
            }),
            Re = (0, Fe.Q)(oe, ye);
          for (null == Re && (Re = (0, Ke.gb)(/^\s*/.exec(He.doc.lineAt(ye).text)[0], He.tabSize)); be < Me.to && /\s/.test(Me.text[be - Me.from]);) be++;
          Ue ? ({
            from: ye,
            to: be
          } = Ue) : ye > Me.from && ye < Me.from + 100 && !/\S/.test(Me.text.slice(0, ye)) && (ye = Me.from);
          let ke = ["", (0, Fe.$)(He, Re)];
          return Ue && ke.push((0, Fe.$)(He, oe.lineIndent(Me.from, -1))), {
            changes: {
              from: ye,
              to: be,
              insert: Ke.R.of(ke)
            },
            range: Ke.k.cursor(ye + 1 + ke[1].length)
          }
        }));
        return ye(He.update(be, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function Ci(ee, ie) {
      let He = -1;
      return ee.changeByRange((ye => {
        let be = [];
        for (let Ke = ye.from; Ke <= ye.to;) {
          let Me = ee.doc.lineAt(Ke);
          Me.number > He && (ye.empty || ye.to > Me.from) && (ie(Me, be, ye), He = Me.number), Ke = Me.to + 1
        }
        let Me = ee.changes(be);
        return {
          changes: be,
          range: Ke.k.range(Me.mapPos(ye.anchor, 1), Me.mapPos(ye.head, 1))
        }
      }))
    }
    const vi = ee => {
        let {
          state: ie,
          dispatch: He
        } = ee;
        return !ie.readOnly && (He(ie.update(Ci(ie, ((ee, He) => {
          He.push({
            from: ee.from,
            insert: ie.facet(Fe.db)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      ui = ee => {
        let {
          state: ie,
          dispatch: He
        } = ee;
        return !ie.readOnly && (He(ie.update(Ci(ie, ((ee, He) => {
          let ye = /^\s*/.exec(ee.text)[0];
          if (!ye) return;
          let be = (0, Ke.gb)(ye, ie.tabSize),
            Me = 0,
            Ue = (0, Fe.$)(ie, Math.max(0, be - (0, Fe.M)(ie)));
          for (; Me < ye.length && Me < Ue.length && ye.charCodeAt(Me) == Ue.charCodeAt(Me);) Me++;
          He.push({
            from: ee.from + Me,
            to: ee.from + ye.length,
            insert: Ue.slice(Me)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      mi = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: ee => Se(ee, (ie => re(ee.state, ie, !se(ee)))),
        shift: ee => Fi(ee, (ie => re(ee.state, ie, !se(ee))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: ee => Se(ee, (ie => re(ee.state, ie, se(ee)))),
        shift: ee => Fi(ee, (ie => re(ee.state, ie, se(ee))))
      }, {
        key: "Alt-ArrowUp",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee;
          return ai(ie, He, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee;
          return ci(ie, He, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee;
          return ai(ie, He, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee;
          return ci(ie, He, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: ee => Wi(ee, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: ee => Wi(ee, !0)
      }, {
        key: "Escape",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee, ye = ie.selection, be = null;
          return ye.zp.length > 1 ? be = Ke.k.create([ye.main]) : ye.main.empty || (be = Ke.k.create([Ke.k.cursor(ye.main.head)])), !!be && (He(le(ie, be)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Li(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee, ye = Vi(ie).map((ee => {
            let {
              from: He,
              to: ye
            } = ee;
            return Ke.k.range(He, Math.min(ye + 1, ie.doc.length))
          }));
          return He(ie.update({
            selection: Ke.k.create(ye),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee, ye = me(ie.selection, (ee => {
            let He = (0, Fe.tb)(ie),
              ye = He.resolveStack(ee.from, 1);
            if (ee.empty) {
              let ie = He.resolveStack(ee.from, -1);
              ie.node.from >= ye.node.from && ie.node.to <= ye.node.to && (ye = ie)
            }
            for (let ie = ye; ie; ie = ie.next) {
              let {
                node: He
              } = ie;
              if ((He.from < ee.from && He.to >= ee.to || He.to > ee.to && He.from <= ee.from) && ie.next) return Ke.k.range(He.to, He.from)
            }
            return ee
          }));
          return !ye.eq(ie.selection) && (He(le(ie, ye)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: ui
      }, {
        key: "Mod-]",
        run: vi
      }, {
        key: "Mod-Alt-\\",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee;
          if (ie.readOnly) return !1;
          let ye = Object.create(null),
            be = new Fe.h(ie, {
              overrideIndentation: ee => {
                let ie = ye[ee];
                return null == ie ? -1 : ie
              }
            }),
            Me = Ci(ie, ((ee, He, Me) => {
              let Ke = (0, Fe.Q)(be, ee.from);
              if (null == Ke) return;
              /\S/.test(ee.text) || (Ke = 0);
              let Ue = /^\s*/.exec(ee.text)[0],
                Je = (0, Fe.$)(ie, Ke);
              (Ue != Je || Me.from < ee.from + Ue.length) && (ye[ee.from] = Ke, He.push({
                from: ee.from,
                to: ee.from + Ue.length,
                insert: Je
              }))
            }));
          return Me.changes.empty || He(ie.update(Me, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: ee => {
          if (ee.state.readOnly) return !1;
          let {
            state: ie
          } = ee, He = ie.changes(Vi(ie).map((ee => {
            let {
              from: He,
              to: ye
            } = ee;
            return He > 0 ? He-- : ye < ie.doc.length && ye++, {
              from: He,
              to: ye
            }
          }))), ye = me(ie.selection, (ie => {
            let He;
            if (ee.lineWrapping) {
              let ye = ee.lineBlockAt(ie.head),
                be = ee.coordsAtPos(ie.head, ie.assoc || 1);
              be && (He = ye.bottom + ee.documentTop - be.bottom + ee.defaultLineHeight / 2)
            }
            return ee.moveVertically(ie, !0, He)
          })).map(He);
          return ee.dispatch({
            changes: He,
            selection: ye,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee;
          return Ui(ie, He, !1)
        }
      }, {
        key: "Mod-/",
        run: ee => {
          let {
            state: ie
          } = ee, He = ie.doc.lineAt(ie.selection.main.from), ye = fe(ee.state, He.from);
          return ye.line ? Re(ee) : !!ye.block && qe(ee)
        }
      }, {
        key: "Alt-A",
        run: ke
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: ee => (ee.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: Ie,
        shift: oi,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: ee => Ne(ee, !se(ee)),
        shift: ee => ki(ee, !se(ee)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: ee => Se(ee, (ie => Ki(ee, ie, !se(ee)))),
        shift: ee => Fi(ee, (ie => Ki(ee, ie, !se(ee)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: he,
        shift: Ri,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: ee => Ne(ee, se(ee)),
        shift: ee => ki(ee, se(ee)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: ee => Se(ee, (ie => Ki(ee, ie, se(ee)))),
        shift: ee => Fi(ee, (ie => Ki(ee, ie, se(ee)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: ei,
        shift: fi,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Ei,
        shift: Oi
      }, {
        mac: "Ctrl-ArrowUp",
        run: bi,
        shift: zi
      }, {
        key: "ArrowDown",
        run: ii,
        shift: Ti,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: gi,
        shift: di
      }, {
        mac: "Ctrl-ArrowDown",
        run: Mi,
        shift: Bi
      }, {
        key: "PageUp",
        run: bi,
        shift: zi
      }, {
        key: "PageDown",
        run: Mi,
        shift: Bi
      }, {
        key: "Home",
        run: ee => Se(ee, (ie => Ki(ee, ie, !1))),
        shift: ee => Fi(ee, (ie => Ki(ee, ie, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Ei,
        shift: Oi
      }, {
        key: "End",
        run: ee => Se(ee, (ie => Ki(ee, ie, !0))),
        shift: ee => Fi(ee, (ie => Ki(ee, ie, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: gi,
        shift: di
      }, {
        key: "Enter",
        run: xi,
        shift: xi
      }, {
        key: "Mod-a",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee;
          return He(ie.update({
            selection: {
              anchor: 0,
              head: ie.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Di,
        shift: Di,
        preventDefault: !0
      }, {
        key: "Delete",
        run: Pi,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Yi,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: ee => Ai(ee, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: ee => ti(ee, (ie => {
          let He = ee.moveToLineBoundary(ie, !1).head;
          return ie.head > He ? He : Math.max(0, ie.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: ee => ti(ee, (ie => {
          let He = ee.moveToLineBoundary(ie, !0).head;
          return ie.head < He ? He : Math.min(ee.state.doc.length, ie.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: Ie,
        shift: oi,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: he,
        shift: Ri
      }, {
        key: "Ctrl-p",
        run: ei,
        shift: fi
      }, {
        key: "Ctrl-n",
        run: ii,
        shift: Ti
      }, {
        key: "Ctrl-a",
        run: ee => Se(ee, (ie => Ke.k.cursor(ee.lineBlockAt(ie.head).from, 1))),
        shift: ee => Fi(ee, (ie => Ke.k.cursor(ee.lineBlockAt(ie.head).from)))
      }, {
        key: "Ctrl-e",
        run: ee => Se(ee, (ie => Ke.k.cursor(ee.lineBlockAt(ie.head).to, -1))),
        shift: ee => Fi(ee, (ie => Ke.k.cursor(ee.lineBlockAt(ie.head).to)))
      }, {
        key: "Ctrl-d",
        run: Pi
      }, {
        key: "Ctrl-h",
        run: Di
      }, {
        key: "Ctrl-k",
        run: ee => ti(ee, (ie => {
          let He = ee.lineBlockAt(ie.head).to;
          return ie.head < He ? He : Math.min(ee.state.doc.length, ie.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: Yi
      }, {
        key: "Ctrl-o",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee;
          if (ie.readOnly) return !1;
          let ye = ie.changeByRange((ee => ({
            changes: {
              from: ee.from,
              to: ee.to,
              insert: Ke.R.of(["", ""])
            },
            range: Ke.k.cursor(ee.from)
          })));
          return He(ie.update(ye, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: ee => {
          let {
            state: ie,
            dispatch: He
          } = ee;
          if (ie.readOnly) return !1;
          let ye = ie.changeByRange((ee => {
            if (!ee.empty || 0 == ee.from || ee.from == ie.doc.length) return {
              range: ee
            };
            let He = ee.from,
              ye = ie.doc.lineAt(He),
              be = He == ye.from ? He - 1 : (0, Ke.kb)(ye.text, He - ye.from, !1) + ye.from,
              Me = He == ye.to ? He + 1 : (0, Ke.kb)(ye.text, He - ye.from, !0) + ye.from;
            return {
              changes: {
                from: be,
                to: Me,
                insert: ie.doc.slice(He, Me).append(ie.doc.slice(be, He))
              },
              range: Ke.k.cursor(Me)
            }
          }));
          return !ye.changes.empty && (He(ie.update(ye, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: Mi
      }].map((ee => ({
        mac: ee.key,
        run: ee.run,
        shift: ee.shift
      }))))),
      li = {
        key: "Tab",
        run: vi,
        shift: ui
      };
    var Si = He(44551),
      ni = He(44501),
      ji = He(44559),
      si = function(ee) {
        void 0 === ee && (ee = {});
        var {
          crosshairCursor: ie = !1
        } = ee, He = [];
        !1 !== ee.closeBracketsKeymap && (He = He.concat(ni.i)), !1 !== ee.defaultKeymap && (He = He.concat(mi)), !1 !== ee.searchKeymap && (He = He.concat(Si.f)), !1 !== ee.historyKeymap && (He = He.concat(ue)), !1 !== ee.foldKeymap && (He = He.concat(Fe.F)), !1 !== ee.completionKeymap && (He = He.concat(ni.o)), !1 !== ee.lintKeymap && (He = He.concat(ji.d));
        var ye = [];
        return !1 !== ee.lineNumbers && ye.push((0, Ue.Q)()), !1 !== ee.highlightActiveLineGutter && ye.push((0, Ue.F)()), !1 !== ee.highlightSpecialChars && ye.push((0, Ue.J)()), !1 !== ee.history && ye.push(function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [Oe, ge.of(ee), Ue.i.domEventHandlers({
            beforeinput(ee, ie) {
              let He = "historyUndo" == ee.inputType ? We : "historyRedo" == ee.inputType ? te : null;
              return !!He && (ee.preventDefault(), He(ie))
            }
          })]
        }()), !1 !== ee.foldGutter && ye.push((0, Fe.B)()), !1 !== ee.drawSelection && ye.push((0, Ue.t)()), !1 !== ee.dropCursor && ye.push((0, Ue.u)()), !1 !== ee.allowMultipleSelections && ye.push(Ke.o.allowMultipleSelections.of(!0)), !1 !== ee.indentOnInput && ye.push((0, Fe.Y)()), !1 !== ee.syntaxHighlighting && ye.push((0, Fe.mb)(Fe.t, {
          fallback: !0
        })), !1 !== ee.bracketMatching && ye.push((0, Fe.p)()), !1 !== ee.closeBrackets && ye.push((0, ni.j)()), !1 !== ee.autocompletion && ye.push((0, ni.e)()), !1 !== ee.rectangularSelection && ye.push((0, Ue.Y)()), !1 !== ie && ye.push((0, Ue.s)()), !1 !== ee.highlightActiveLine && ye.push((0, Ue.G)()), !1 !== ee.highlightSelectionMatches && ye.push((0, Si.e)()), ee.tabSize && "number" === typeof ee.tabSize && ye.push(Fe.db.of(" ".repeat(ee.tabSize))), ye.concat([Ue.P.of(He.flat())]).filter(Boolean)
      },
      Ii = He(44543);
    const Ni = "#e5c07b",
      Gi = "#e06c75",
      ri = "#56b6c2",
      Qi = "#ffffff",
      eH = "#abb2bf",
      iH = "#7d8799",
      HH = "#61afef",
      yH = "#98c379",
      bH = "#d19a66",
      MH = "#c678dd",
      KH = "#21252b",
      UH = "#2c313a",
      FH = "#282c34",
      JH = "#353a42",
      oH = "#3E4451",
      RH = "#528bff",
      kH = Ue.i.theme({
        "&": {
          color: eH,
          backgroundColor: FH
        },
        ".cm-content": {
          caretColor: RH
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: RH
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: oH
        },
        ".cm-panels": {
          backgroundColor: KH,
          color: eH
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
          backgroundColor: FH,
          color: iH,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: UH
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: JH
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: JH,
          borderBottomColor: JH
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: UH,
            color: eH
          }
        }
      }, {
        dark: !0
      }),
      qH = Fe.d.define([{
        tag: Ii.n.keyword,
        color: MH
      }, {
        tag: [Ii.n.name, Ii.n.deleted, Ii.n.character, Ii.n.propertyName, Ii.n.macroName],
        color: Gi
      }, {
        tag: [Ii.n.function(Ii.n.variableName), Ii.n.labelName],
        color: HH
      }, {
        tag: [Ii.n.color, Ii.n.constant(Ii.n.name), Ii.n.standard(Ii.n.name)],
        color: bH
      }, {
        tag: [Ii.n.definition(Ii.n.name), Ii.n.separator],
        color: eH
      }, {
        tag: [Ii.n.typeName, Ii.n.className, Ii.n.number, Ii.n.changed, Ii.n.annotation, Ii.n.modifier, Ii.n.self, Ii.n.namespace],
        color: Ni
      }, {
        tag: [Ii.n.operator, Ii.n.operatorKeyword, Ii.n.url, Ii.n.escape, Ii.n.regexp, Ii.n.link, Ii.n.special(Ii.n.string)],
        color: ri
      }, {
        tag: [Ii.n.meta, Ii.n.comment],
        color: iH
      }, {
        tag: Ii.n.strong,
        fontWeight: "bold"
      }, {
        tag: Ii.n.emphasis,
        fontStyle: "italic"
      }, {
        tag: Ii.n.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Ii.n.link,
        color: iH,
        textDecoration: "underline"
      }, {
        tag: Ii.n.heading,
        fontWeight: "bold",
        color: Gi
      }, {
        tag: [Ii.n.atom, Ii.n.bool, Ii.n.special(Ii.n.variableName)],
        color: bH
      }, {
        tag: [Ii.n.processingInstruction, Ii.n.string, Ii.n.inserted],
        color: yH
      }, {
        tag: Ii.n.invalid,
        color: Qi
      }]),
      fH = [kH, (0, Fe.mb)(qH)];
    var TH = Ue.i.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class pH {
      constructor(ee, ie) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = ie, this.timeoutMS = ie, this.callbacks.push(ee)
      }
      YR() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var ee = this.callbacks.slice();
          this.callbacks.length = 0, ee.forEach((ee => {
            try {
              ee()
            } catch (ie) {
              console.error("TimeoutLatch callback error:", ie)
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
    class XH {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(ee) {
        this.latches.add(ee), this.start()
      }
      remove(ee) {
        this.latches.delete(ee), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((ee => {
            ee.YR(), ee.isDone && this.remove(ee)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var zH = null,
      BH = Ke.e.define(),
      EH = [];

    function gH(ee) {
      var {
        value: ie,
        selection: He,
        onChange: ye,
        onStatistics: be,
        onCreateEditor: Fe,
        onUpdate: Je,
        extensions: oe = EH,
        autoFocus: Re,
        theme: ke = "light",
        height: qe = null,
        minHeight: fe = null,
        maxHeight: Te = null,
        width: pe = null,
        minWidth: Xe = null,
        maxWidth: ze = null,
        placeholder: Be = "",
        editable: Ee = !0,
        readOnly: ge = !1,
        indentWithTab: Oe = !0,
        basicSetup: de = !0,
        root: We,
        initialState: te
      } = ee, [Ze, we] = (0, Me.useState)(), [De, Pe] = (0, Me.useState)(), [Ae, Ye] = (0, Me.useState)(), Ve = (0, Me.useState)((() => ({
        current: null
      })))[0], ae = (0, Me.useState)((() => ({
        current: null
      })))[0], ce = Ue.i.theme({
        "&": {
          height: qe,
          minHeight: fe,
          maxHeight: Te,
          width: pe,
          minWidth: Xe,
          maxWidth: ze
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), xe = Ue.i.updateListener.of((ee => {
        if (ee.docChanged && "function" === typeof ye && !ee.transactions.some((ee => ee.annotation(BH)))) {
          Ve.current ? Ve.current.reset() : (Ve.current = new pH((() => {
            if (ae.current) {
              var ee = ae.current;
              ae.current = null, ee()
            }
            Ve.current = null
          }), 200), ("undefined" === typeof window ? new XH : (zH || (zH = new XH), zH)).add(Ve.current));
          var ie = ee.state.doc.toString();
          ye(ie, ee)
        }
        be && be((ee => ({
          line: ee.state.doc.lineAt(ee.state.selection.main.from),
          lineCount: ee.state.doc.lines,
          lineBreak: ee.state.lineBreak,
          length: ee.state.doc.length,
          readOnly: ee.state.readOnly,
          tabSize: ee.state.tabSize,
          selection: ee.state.selection,
          selectionAsSingle: ee.state.selection.asSingle().main,
          zp: ee.state.selection.zp,
          selectionCode: ee.state.sliceDoc(ee.state.selection.main.from, ee.state.selection.main.to),
          selections: ee.state.selection.zp.map((ie => ee.state.sliceDoc(ie.from, ie.to))),
          selectedText: ee.state.selection.zp.some((ee => !ee.empty))
        }))(ee))
      })), Le = function(ee) {
        void 0 === ee && (ee = {});
        var {
          indentWithTab: ie = !0,
          editable: He = !0,
          readOnly: ye = !1,
          theme: be = "light",
          placeholder: Me = "",
          basicSetup: Fe = !0
        } = ee, Je = [];
        switch (ie && Je.unshift(Ue.P.of([li])), Fe && ("boolean" === typeof Fe ? Je.unshift(si()) : Je.unshift(si(Fe))), Me && Je.unshift((0, Ue.X)(Me)), be) {
          case "light":
            Je.push(TH);
            break;
          case "dark":
            Je.push(fH);
            break;
          case "none":
            break;
          default:
            Je.push(be)
        }
        return !1 === He && Je.push(Ue.i.editable.of(!1)), ye && Je.push(Ke.o.readOnly.of(!0)), [...Je]
      }({
        theme: ke,
        editable: Ee,
        readOnly: ge,
        placeholder: Be,
        indentWithTab: Oe,
        basicSetup: de
      }), Ce = [xe, ce, ...Le];
      return Je && "function" === typeof Je && Ce.push(Ue.i.updateListener.of(Je)), Ce = Ce.concat(oe), (0, Me.useLayoutEffect)((() => {
        if (Ze && !Ae) {
          var ee = {
              doc: ie,
              selection: He,
              extensions: Ce
            },
            ye = te ? Ke.o.fromJSON(te.json, ee, te.fields) : Ke.o.create(ee);
          if (Ye(ye), !De) {
            var be = new Ue.i({
              state: ye,
              parent: Ze,
              root: We
            });
            Pe(be), Fe && Fe(be, ye)
          }
        }
        return () => {
          De && (Ye(void 0), Pe(void 0))
        }
      }), [Ze, Ae]), (0, Me.useEffect)((() => {
        ee.container && we(ee.container)
      }), [ee.container]), (0, Me.useEffect)((() => () => {
        De && (De.destroy(), Pe(void 0)), Ve.current && (Ve.current.cancel(), Ve.current = null)
      }), [De]), (0, Me.useEffect)((() => {
        Re && De && De.focus()
      }), [Re, De]), (0, Me.useEffect)((() => {
        De && De.dispatch({
          effects: Ke.K.reconfigure.of(Ce)
        })
      }), [ke, oe, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, Oe, de, ye, Je]), (0, Me.useEffect)((() => {
        if (void 0 !== ie) {
          var ee = De ? De.state.doc.toString() : "";
          if (De && ie !== ee) {
            var He = () => {
              De && ie !== De.state.doc.toString() && De.dispatch({
                changes: {
                  from: 0,
                  to: De.state.doc.toString().length,
                  insert: ie || ""
                },
                annotations: [BH.of(!0)]
              })
            };
            Ve.current && !Ve.current.isDone ? ae.current = He : He()
          }
        }
      }), [ie, De]), {
        state: Ae,
        setState: Ye,
        view: De,
        setView: Pe,
        container: Ze,
        setContainer: we
      }
    }
    var OH = He(1228),
      dH = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      WH = (0, Me.forwardRef)(((ee, ie) => {
        var {
          className: He,
          value: Ke = "",
          selection: Ue,
          extensions: Fe = [],
          onChange: Je,
          onStatistics: oe,
          onCreateEditor: Re,
          onUpdate: ke,
          autoFocus: qe,
          theme: fe = "light",
          height: Te,
          minHeight: pe,
          maxHeight: Xe,
          width: ze,
          minWidth: Be,
          maxWidth: Ee,
          basicSetup: ge,
          placeholder: Oe,
          indentWithTab: de,
          editable: We,
          readOnly: te,
          root: Ze,
          initialState: we
        } = ee, De = (0, be.d)(ee, dH), Pe = (0, Me.useRef)(null), {
          state: Ae,
          view: Ye,
          container: Ve,
          setContainer: ae
        } = gH({
          root: Ze,
          value: Ke,
          autoFocus: qe,
          theme: fe,
          height: Te,
          minHeight: pe,
          maxHeight: Xe,
          width: ze,
          minWidth: Be,
          maxWidth: Ee,
          basicSetup: ge,
          placeholder: Oe,
          indentWithTab: de,
          editable: We,
          readOnly: te,
          selection: Ue,
          onChange: Je,
          onStatistics: oe,
          onCreateEditor: Re,
          onUpdate: ke,
          extensions: Fe,
          initialState: we
        });
        (0, Me.useImperativeHandle)(ie, (() => ({
          editor: Pe.current,
          state: Ae,
          view: Ye
        })), [Pe, Ve, Ae, Ye]);
        var ce = (0, Me.useCallback)((ee => {
          Pe.current = ee, ae(ee)
        }), [ae]);
        if ("string" !== typeof Ke) throw new Error("value must be typeof string but got " + typeof Ke);
        var xe = "string" === typeof fe ? "cm-theme-" + fe : "cm-theme";
        return (0, OH.jsx)("div", (0, ye.e)({
          ref: ce,
          className: xe + (He ? " " + He : "")
        }, De))
      }));
    WH.displayName = "CodeMirror";
    const tH = WH
  },
  44525: (ee, ie, He) => {
    function ye() {
      var ee = arguments[0];
      "string" == typeof ee && (ee = document.createElement(ee));
      var ie = 1,
        He = arguments[1];
      if (He && "object" == typeof He && null == He.nodeType && !Array.isArray(He)) {
        for (var ye in He)
          if (Object.prototype.hasOwnProperty.call(He, ye)) {
            var Me = He[ye];
            "string" == typeof Me ? ee.setAttribute(ye, Me) : null != Me && (ee[ye] = Me)
          } ie++
      }
      for (; ie < arguments.length; ie++) be(ee, arguments[ie]);
      return ee
    }

    function be(ee, ie) {
      if ("string" == typeof ie) ee.appendChild(document.createTextNode(ie));
      else if (null == ie);
      else if (null != ie.nodeType) ee.appendChild(ie);
      else {
        if (!Array.isArray(ie)) throw new RangeError("Unsupported child node: " + ie);
        for (var He = 0; He < ie.length; He++) be(ee, ie[He])
      }
    }
    He.d(ie, {
      e: () => ye
    })
  },
  44522: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    const ye = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      be = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      Me = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class Ke {
      constructor(ee, ie) {
        this.rules = [];
        let {
          finish: He
        } = ie || {};

        function ye(ee) {
          return /^@/.test(ee) ? [ee] : ee.split(/,\s*/)
        }

        function be(ee, ie, Me, Ke) {
          let Ue = [],
            Fe = /^@(\w+)\b/.exec(ee[0]),
            Je = Fe && "keyframes" == Fe[1];
          if (Fe && null == ie) return Me.push(ee[0] + ";");
          for (let He in ie) {
            let Ke = ie[He];
            if (/&/.test(He)) be(He.split(/,\s*/).map((ie => ee.map((ee => ie.replace(/&/, ee))))).reduce(((ee, ie) => ee.concat(ie))), Ke, Me);
            else if (Ke && "object" == typeof Ke) {
              if (!Fe) throw new RangeError("The value of a property (" + He + ") should be a primitive value.");
              be(ye(He), Ke, Ue, Je)
            } else null != Ke && Ue.push(He.replace(/_.*/, "").replace(/[A-Z]/g, (ee => "-" + ee.toLowerCase())) + ": " + Ke + ";")
          }(Ue.length || Je) && Me.push((!He || Fe || Ke ? ee : ee.map(He)).join(", ") + " {" + Ue.join(" ") + "}")
        }
        for (let Me in ee) be(ye(Me), ee[Me], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let ee = Me[ye] || 1;
        return Me[ye] = ee + 1, "\u037c" + ee.toString(36)
      }
      static mount(ee, ie, He) {
        let ye = ee[be],
          Me = He && He.nonce;
        ye ? Me && ye.setNonce(Me) : ye = new Fe(ee, Me), ye.mount(Array.isArray(ie) ? ie : [ie], ee)
      }
    }
    let Ue = new Map;
    class Fe {
      constructor(ee, ie) {
        let He = ee.ownerDocument || ee,
          ye = He.defaultView;
        if (!ee.head && ee.adoptedStyleSheets && ye.CSSStyleSheet) {
          let ie = Ue.get(He);
          if (ie) return ee[be] = ie;
          this.sheet = new ye.CSSStyleSheet, Ue.set(He, this)
        } else this.styleTag = He.createElement("style"), ie && this.styleTag.setAttribute("nonce", ie);
        this.modules = [], ee[be] = this
      }
      mount(ee, ie) {
        let He = this.sheet,
          ye = 0,
          be = 0;
        for (let Me = 0; Me < ee.length; Me++) {
          let ie = ee[Me],
            Ke = this.modules.indexOf(ie);
          if (Ke < be && Ke > -1 && (this.modules.splice(Ke, 1), be--, Ke = -1), -1 == Ke) {
            if (this.modules.splice(be++, 0, ie), He)
              for (let ee = 0; ee < ie.rules.length; ee++) He.insertRule(ie.rules[ee], ye++)
          } else {
            for (; be < Ke;) ye += this.modules[be++].rules.length;
            ye += ie.rules.length, be++
          }
        }
        if (He) ie.adoptedStyleSheets.indexOf(this.sheet) < 0 && (ie.adoptedStyleSheets = [this.sheet, ...ie.adoptedStyleSheets]);
        else {
          let ee = "";
          for (let ie = 0; ie < this.modules.length; ie++) ee += this.modules[ie].getRules() + "\n";
          this.styleTag.textContent = ee;
          let He = ie.head || ie;
          this.styleTag.parentNode != He && He.insertBefore(this.styleTag, He.firstChild)
        }
      }
      setNonce(ee) {
        this.styleTag && this.styleTag.getAttribute("nonce") != ee && this.styleTag.setAttribute("nonce", ee)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);