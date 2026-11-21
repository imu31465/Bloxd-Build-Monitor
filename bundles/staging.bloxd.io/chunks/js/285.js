export const id = 285;
export const ids = [285];
export const modules = {
  41267: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => jJ,
      g: () => iJ,
      k: () => GJ,
      o: () => gd,
      p: () => XJ,
      t: () => Cd,
      x: () => QJ
    });
    var pd = kd(41273),
      Nd = kd(41282),
      Wd = kd(41303);
    class Pd {
      constructor(dd, Jd, kd, pd) {
        this.state = dd, this.pos = Jd, this.explicit = kd, this.view = pd, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(dd) {
        let Jd = (0, Wd.gb)(this.state).resolveInner(this.pos, -1);
        for (; Jd && dd.indexOf(Jd.name) < 0;) Jd = Jd.parent;
        return Jd ? {
          from: Jd.from,
          to: this.pos,
          text: this.state.sliceDoc(Jd.from, this.pos),
          type: Jd.type
        } : null
      }
      matchBefore(dd) {
        let Jd = this.state.doc.lineAt(this.pos),
          kd = Math.max(Jd.from, this.pos - 250),
          pd = Jd.text.slice(kd - Jd.from, this.pos - Jd.from),
          Nd = pd.search(ld(dd, !1));
        return Nd < 0 ? null : {
          from: kd + Nd,
          to: this.pos,
          text: pd.slice(Nd)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(dd, Jd, kd) {
        "abort" == dd && this.abortListeners && (this.abortListeners.push(Jd), kd && kd.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function Zd(dd) {
      let Jd = Object.keys(dd).join(""),
        kd = /\w/.test(Jd);
      return kd && (Jd = Jd.replace(/\w/g, "")), `[${kd?"\\w":""}${Jd.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function gd(dd) {
      let Jd = dd.map((dd => "string" == typeof dd ? {
          label: dd
        } : dd)),
        [kd, pd] = Jd.every((dd => /^\w+$/.test(dd.label))) ? [/\w*$/, /\w+$/] : function(dd) {
          let Jd = Object.create(null),
            kd = Object.create(null);
          for (let {
              label: Nd
            }
            of dd) {
            Jd[Nd[0]] = !0;
            for (let dd = 1; dd < Nd.length; dd++) kd[Nd[dd]] = !0
          }
          let pd = Zd(Jd) + Zd(kd) + "*$";
          return [new RegExp("^" + pd), new RegExp(pd)]
        }(Jd);
      return dd => {
        let Nd = dd.matchBefore(pd);
        return Nd || dd.explicit ? {
          from: Nd ? Nd.from : dd.pos,
          options: Jd,
          validFor: kd
        } : null
      }
    }

    function Cd(dd, Jd) {
      return kd => {
        for (let Jd = (0, Wd.gb)(kd.state).resolveInner(kd.pos, -1); Jd; Jd = Jd.parent) {
          if (dd.indexOf(Jd.name) > -1) return null;
          if (Jd.type.isTop) break
        }
        return Jd(kd)
      }
    }
    class Kd {
      constructor(dd, Jd, kd, pd) {
        this.completion = dd, this.source = Jd, this.match = kd, this.score = pd
      }
    }

    function od(dd) {
      return dd.selection.main.from
    }

    function ld(dd, Jd) {
      var kd;
      let {
        source: pd
      } = dd, Nd = Jd && "^" != pd[0], Wd = "$" != pd[pd.length - 1];
      return Nd || Wd ? new RegExp(`${Nd?"^":""}(?:${pd})${Wd?"$":""}`, null !== (kd = dd.flags) && void 0 !== kd ? kd : dd.ignoreCase ? "i" : "") : dd
    }
    const Qd = pd.b.define();

    function Ld(dd, Jd, kd, Nd) {
      let {
        main: Wd
      } = dd.selection, Pd = kd - Wd.from, Zd = Nd - Wd.from;
      return {
        ...dd.changeByRange((gd => {
          if (gd != Wd && kd != Nd && dd.sliceDoc(gd.from + Pd, gd.from + Zd) != dd.sliceDoc(kd, Nd)) return {
            range: gd
          };
          let Cd = dd.toText(Jd);
          return {
            changes: {
              from: gd.from + Pd,
              to: Nd == Wd.from ? gd.to : gd.from + Zd,
              insert: Cd
            },
            range: pd.k.cursor(gd.from + Pd + Cd.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Od = new WeakMap;

    function ed(dd) {
      if (!Array.isArray(dd)) return dd;
      let Jd = Od.get(dd);
      return Jd || Od.set(dd, Jd = gd(dd)), Jd
    }
    const Rd = pd.C.define(),
      Id = pd.C.define();
    class Gd {
      constructor(dd) {
        this.pattern = dd, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let Jd = 0; Jd < dd.length;) {
          let kd = (0, pd.K)(dd, Jd),
            Nd = (0, pd.O)(kd);
          this.chars.push(kd);
          let Wd = dd.slice(Jd, Jd + Nd),
            Pd = Wd.toUpperCase();
          this.folded.push((0, pd.K)(Pd == Wd ? Wd.toLowerCase() : Pd, 0)), Jd += Nd
        }
        this.astral = dd.length != this.chars.length
      }
      ret(dd, Jd) {
        return this.score = dd, this.matched = Jd, this
      }
      match(dd) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (dd.length < this.pattern.length) return null;
        let {
          chars: Jd,
          folded: kd,
          any: Nd,
          precise: Wd,
          byWord: Pd
        } = this;
        if (1 == Jd.length) {
          let Nd = (0, pd.K)(dd, 0),
            Wd = (0, pd.O)(Nd),
            Pd = Wd == dd.length ? 0 : -100;
          if (Nd == Jd[0]);
          else {
            if (Nd != kd[0]) return null;
            Pd += -200
          }
          return this.ret(Pd, [0, Wd])
        }
        let Zd = dd.indexOf(this.pattern);
        if (0 == Zd) return this.ret(dd.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let gd = Jd.length,
          Cd = 0;
        if (Zd < 0) {
          for (let Wd = 0, Pd = Math.min(dd.length, 200); Wd < Pd && Cd < gd;) {
            let Pd = (0, pd.K)(dd, Wd);
            Pd != Jd[Cd] && Pd != kd[Cd] || (Nd[Cd++] = Wd), Wd += (0, pd.O)(Pd)
          }
          if (Cd < gd) return null
        }
        let Kd = 0,
          od = 0,
          ld = !1,
          Qd = 0,
          Ld = -1,
          Od = -1,
          ed = /[a-z]/.test(dd),
          Rd = !0;
        for (let Id = 0, Gd = Math.min(dd.length, 200), vd = 0; Id < Gd && od < gd;) {
          let Nd = (0, pd.K)(dd, Id);
          Zd < 0 && (Kd < gd && Nd == Jd[Kd] && (Wd[Kd++] = Id), Qd < gd && (Nd == Jd[Qd] || Nd == kd[Qd] ? (0 == Qd && (Ld = Id), Od = Id + 1, Qd++) : Qd = 0));
          let Cd, Gd = Nd < 255 ? Nd >= 48 && Nd <= 57 || Nd >= 97 && Nd <= 122 ? 2 : Nd >= 65 && Nd <= 90 ? 1 : 0 : (Cd = (0, pd._)(Nd)) != Cd.toLowerCase() ? 1 : Cd != Cd.toUpperCase() ? 2 : 0;
          (!Id || 1 == Gd && ed || 0 == vd && 0 != Gd) && (Jd[od] == Nd || kd[od] == Nd && (ld = !0) ? Pd[od++] = Id : Pd.length && (Rd = !1)), vd = Gd, Id += (0, pd.O)(Nd)
        }
        return od == gd && 0 == Pd[0] && Rd ? this.result((ld ? -200 : 0) - 100, Pd, dd) : Qd == gd && 0 == Ld ? this.ret(-200 - dd.length + (Od == dd.length ? 0 : -100), [0, Od]) : Zd > -1 ? this.ret(-700 - dd.length, [Zd, Zd + this.pattern.length]) : Qd == gd ? this.ret(-900 - dd.length, [Ld, Od]) : od == gd ? this.result((ld ? -200 : 0) - 100 - 700 + (Rd ? 0 : -1100), Pd, dd) : 2 == Jd.length ? null : this.result((Nd[0] ? -700 : 0) - 200 - 1100, Nd, dd)
      }
      result(dd, Jd, kd) {
        let Nd = [],
          Wd = 0;
        for (let Pd of Jd) {
          let dd = Pd + (this.astral ? (0, pd.O)((0, pd.K)(kd, Pd)) : 1);
          Wd && Nd[Wd - 1] == Pd ? Nd[Wd - 1] = dd : (Nd[Wd++] = Pd, Nd[Wd++] = dd)
        }
        return this.ret(dd - kd.length, Nd)
      }
    }
    class vd {
      constructor(dd) {
        this.pattern = dd, this.matched = [], this.score = 0, this.folded = dd.toLowerCase()
      }
      match(dd) {
        if (dd.length < this.pattern.length) return null;
        let Jd = dd.slice(0, this.pattern.length),
          kd = Jd == this.pattern ? 0 : Jd.toLowerCase() == this.folded ? -200 : null;
        return null == kd ? null : (this.matched = [0, Jd.length], this.score = kd + (dd.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const xd = pd.o.define({
      combine: dd => (0, pd.R)(dd, {
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
        positionInfo: Bd,
        filterStrict: !1,
        compareCompletions: (dd, Jd) => (dd.sortText || dd.label).localeCompare(Jd.sortText || Jd.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (dd, Jd) => dd && Jd,
        closeOnBlur: (dd, Jd) => dd && Jd,
        icons: (dd, Jd) => dd && Jd,
        tooltipClass: (dd, Jd) => kd => qd(dd(kd), Jd(kd)),
        optionClass: (dd, Jd) => kd => qd(dd(kd), Jd(kd)),
        addToOptions: (dd, Jd) => dd.concat(Jd),
        filterStrict: (dd, Jd) => dd || Jd
      })
    });

    function qd(dd, Jd) {
      return dd ? Jd ? dd + " " + Jd : dd : Jd
    }

    function Bd(dd, Jd, kd, pd, Wd, Pd) {
      let Zd, gd, Cd = dd.textDirection == Nd.e.RTL,
        Kd = Cd,
        od = !1,
        ld = "top",
        Qd = Jd.left - Wd.left,
        Ld = Wd.right - Jd.right,
        Od = pd.right - pd.left,
        ed = pd.bottom - pd.top;
      if (Kd && Qd < Math.min(Od, Ld) ? Kd = !1 : !Kd && Ld < Math.min(Od, Qd) && (Kd = !0), Od <= (Kd ? Qd : Ld)) Zd = Math.max(Wd.top, Math.min(kd.top, Wd.bottom - ed)) - Jd.top, gd = Math.min(400, Kd ? Qd : Ld);
      else {
        od = !0, gd = Math.min(400, (Cd ? Jd.right : Wd.right - Jd.left) - 30);
        let dd = Wd.bottom - Jd.bottom;
        dd >= ed || dd > Jd.top ? Zd = kd.bottom - Jd.top : (ld = "bottom", Zd = Jd.bottom - kd.top)
      }
      return {
        style: `${ld}: ${Zd/((Jd.bottom-Jd.top)/Pd.offsetHeight)}px; max-width: ${gd/((Jd.right-Jd.left)/Pd.offsetWidth)}px`,
        class: "cm-completionInfo-" + (od ? Cd ? "left-narrow" : "right-narrow" : Kd ? "left" : "right")
      }
    }
    const sd = pd.C.define();

    function ad(dd, Jd, kd) {
      if (dd <= kd) return {
        from: 0,
        to: dd
      };
      if (Jd < 0 && (Jd = 0), Jd <= dd >> 1) {
        let dd = Math.floor(Jd / kd);
        return {
          from: dd * kd,
          to: (dd + 1) * kd
        }
      }
      let pd = Math.floor((dd - Jd) / kd);
      return {
        from: dd - (pd + 1) * kd,
        to: dd - pd * kd
      }
    }
    class Md {
      constructor(dd, Jd, kd) {
        this.view = dd, this.stateField = Jd, this.applyCompletion = kd, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: dd => this.placeInfo(dd),
          key: this
        }, this.space = null, this.currentClass = "";
        let pd = dd.state.field(Jd),
          {
            options: Nd,
            selected: Wd
          } = pd.open,
          Pd = dd.state.facet(xd);
        this.optionContent = function(dd) {
          let Jd = dd.addToOptions.slice();
          return dd.icons && Jd.push({
            render(dd) {
              let Jd = document.createElement("div");
              return Jd.classList.add("cm-completionIcon"), dd.type && Jd.classList.add(...dd.type.split(/\s+/g).map((dd => "cm-completionIcon-" + dd))), Jd.setAttribute("aria-hidden", "true"), Jd
            },
            position: 20
          }), Jd.push({
            render(dd, Jd, kd, pd) {
              let Nd = document.createElement("span");
              Nd.className = "cm-completionLabel";
              let Wd = dd.displayLabel || dd.label,
                Pd = 0;
              for (let Zd = 0; Zd < pd.length;) {
                let dd = pd[Zd++],
                  Jd = pd[Zd++];
                dd > Pd && Nd.appendChild(document.createTextNode(Wd.slice(Pd, dd)));
                let kd = Nd.appendChild(document.createElement("span"));
                kd.appendChild(document.createTextNode(Wd.slice(dd, Jd))), kd.className = "cm-completionMatchedText", Pd = Jd
              }
              return Pd < Wd.length && Nd.appendChild(document.createTextNode(Wd.slice(Pd))), Nd
            },
            position: 50
          }, {
            render(dd) {
              if (!dd.detail) return null;
              let Jd = document.createElement("span");
              return Jd.className = "cm-completionDetail", Jd.textContent = dd.detail, Jd
            },
            position: 80
          }), Jd.sort(((dd, Jd) => dd.position - Jd.position)).map((dd => dd.render))
        }(Pd), this.optionClass = Pd.optionClass, this.tooltipClass = Pd.tooltipClass, this.range = ad(Nd.length, Wd, Pd.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(dd.state), this.dom.addEventListener("mousedown", (kd => {
          let {
            options: pd
          } = dd.state.field(Jd).open;
          for (let Jd, Nd = kd.target; Nd && Nd != this.dom; Nd = Nd.parentNode)
            if ("LI" == Nd.nodeName && (Jd = /-(\d+)$/.exec(Nd.id)) && +Jd[1] < pd.length) return this.applyCompletion(dd, pd[+Jd[1]]), void kd.preventDefault();
          if (kd.target == this.list) {
            let Jd = this.list.classList.contains("cm-completionListIncompleteTop") && kd.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && kd.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != Jd && (dd.dispatch({
              effects: sd.of(Jd)
            }), kd.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (Jd => {
          let kd = dd.state.field(this.stateField, !1);
          kd && kd.tooltip && dd.state.facet(xd).closeOnBlur && Jd.relatedTarget != dd.contentDOM && dd.dispatch({
            effects: Id.of(null)
          })
        })), this.showOptions(Nd, pd.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(dd, Jd) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(dd, Jd, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(dd) {
        var Jd;
        let kd = dd.state.field(this.stateField),
          pd = dd.startState.field(this.stateField);
        if (this.updateTooltipClass(dd.state), kd != pd) {
          let {
            options: Nd,
            selected: Wd,
            disabled: Pd
          } = kd.open;
          pd.open && pd.open.options == Nd || (this.range = ad(Nd.length, Wd, dd.state.facet(xd).maxRenderedOptions), this.showOptions(Nd, kd.id)), this.updateSel(), Pd != (null === (Jd = pd.open) || void 0 === Jd ? void 0 : Jd.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!Pd)
        }
      }
      updateTooltipClass(dd) {
        let Jd = this.tooltipClass(dd);
        if (Jd != this.currentClass) {
          for (let dd of this.currentClass.split(" ")) dd && this.dom.classList.remove(dd);
          for (let dd of Jd.split(" ")) dd && this.dom.classList.add(dd);
          this.currentClass = Jd
        }
      }
      positioned(dd) {
        this.space = dd, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let dd = this.view.state.field(this.stateField),
          Jd = dd.open;
        (Jd.selected > -1 && Jd.selected < this.range.from || Jd.selected >= this.range.to) && (this.range = ad(Jd.options.length, Jd.selected, this.view.state.facet(xd).maxRenderedOptions), this.showOptions(Jd.options, dd.id));
        let kd = this.updateSelectedOption(Jd.selected);
        if (kd) {
          this.destroyInfo();
          let {
            completion: pd
          } = Jd.options[Jd.selected], {
            info: Wd
          } = pd;
          if (!Wd) return;
          let Pd = "string" === typeof Wd ? document.createTextNode(Wd) : Wd(pd);
          if (!Pd) return;
          "then" in Pd ? Pd.then((Jd => {
            Jd && this.view.state.field(this.stateField, !1) == dd && this.addInfoPane(Jd, pd)
          })).catch((dd => (0, Nd.$)(this.view.state, dd, "completion info"))) : (this.addInfoPane(Pd, pd), kd.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(dd, Jd) {
        this.destroyInfo();
        let kd = this.info = document.createElement("div");
        if (kd.className = "cm-tooltip cm-completionInfo", kd.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != dd.nodeType) kd.appendChild(dd), this.infoDestroy = null;
        else {
          let {
            dom: Jd,
            destroy: pd
          } = dd;
          kd.appendChild(Jd), this.infoDestroy = pd || null
        }
        this.dom.appendChild(kd), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(dd) {
        let Jd = null;
        for (let kd = this.list.firstChild, pd = this.range.from; kd; kd = kd.nextSibling, pd++) "LI" == kd.nodeName && kd.id ? pd == dd ? kd.hasAttribute("aria-selected") || (kd.setAttribute("aria-selected", "true"), Jd = kd) : kd.hasAttribute("aria-selected") && (kd.removeAttribute("aria-selected"), kd.removeAttribute("aria-describedby")) : pd--;
        return Jd && function(dd, Jd) {
          let kd = dd.getBoundingClientRect(),
            pd = Jd.getBoundingClientRect(),
            Nd = kd.height / dd.offsetHeight;
          pd.top < kd.top ? dd.scrollTop -= (kd.top - pd.top) / Nd : pd.bottom > kd.bottom && (dd.scrollTop += (pd.bottom - kd.bottom) / Nd)
        }(this.list, Jd), Jd
      }
      measureInfo() {
        let dd = this.dom.querySelector("[aria-selected]");
        if (!dd || !this.info) return null;
        let Jd = this.dom.getBoundingClientRect(),
          kd = this.info.getBoundingClientRect(),
          pd = dd.getBoundingClientRect(),
          Nd = this.space;
        if (!Nd) {
          let dd = this.dom.ownerDocument.documentElement;
          Nd = {
            left: 0,
            top: 0,
            right: dd.clientWidth,
            bottom: dd.clientHeight
          }
        }
        return pd.top > Math.min(Nd.bottom, Jd.bottom) - 10 || pd.bottom < Math.max(Nd.top, Jd.top) + 10 ? null : this.view.state.facet(xd).positionInfo(this.view, Jd, pd, kd, Nd, this.dom)
      }
      placeInfo(dd) {
        this.info && (dd ? (dd.style && (this.info.style.cssText = dd.style), this.info.className = "cm-tooltip cm-completionInfo " + (dd.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(dd, Jd, kd) {
        const pd = document.createElement("ul");
        pd.id = Jd, pd.setAttribute("role", "listbox"), pd.setAttribute("aria-expanded", "true"), pd.setAttribute("aria-label", this.view.state.phrase("Completions")), pd.addEventListener("mousedown", (dd => {
          dd.target == pd && dd.preventDefault()
        }));
        let Nd = null;
        for (let Wd = kd.from; Wd < kd.to; Wd++) {
          let {
            completion: Pd,
            match: Zd
          } = dd[Wd], {
            section: gd
          } = Pd;
          if (gd) {
            let dd = "string" == typeof gd ? gd : gd.name;
            if (dd != Nd && (Wd > kd.from || 0 == kd.from))
              if (Nd = dd, "string" != typeof gd && gd.header) pd.appendChild(gd.header(gd));
              else {
                pd.appendChild(document.createElement("completion-section")).textContent = dd
              }
          }
          const Cd = pd.appendChild(document.createElement("li"));
          Cd.id = Jd + "-" + Wd, Cd.setAttribute("role", "option");
          let Kd = this.optionClass(Pd);
          Kd && (Cd.className = Kd);
          for (let dd of this.optionContent) {
            let Jd = dd(Pd, this.view.state, this.view, Zd);
            Jd && Cd.appendChild(Jd)
          }
        }
        return kd.from && pd.classList.add("cm-completionListIncompleteTop"), kd.to < dd.length && pd.classList.add("cm-completionListIncompleteBottom"), pd
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Fd(dd, Jd) {
      return kd => new Md(kd, dd, Jd)
    }

    function Yd(dd) {
      return 100 * (dd.boost || 0) + (dd.apply ? 10 : 0) + (dd.info ? 5 : 0) + (dd.type ? 1 : 0)
    }
    class md {
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        this.options = dd, this.attrs = Jd, this.tooltip = kd, this.timestamp = pd, this.selected = Nd, this.disabled = Wd
      }
      setSelected(dd, Jd) {
        return dd == this.selected || dd >= this.options.length ? this : new md(this.options, Xd(Jd, dd), this.tooltip, this.timestamp, dd, this.disabled)
      }
      static build(dd, Jd, kd, pd, Nd, Wd) {
        if (pd && !Wd && dd.some((dd => dd.isPending))) return pd.setDisabled();
        let Pd = function(dd, Jd) {
          let kd = [],
            pd = null,
            Nd = null,
            Wd = dd => {
              kd.push(dd);
              let {
                section: Jd
              } = dd.completion;
              if (Jd) {
                pd || (pd = []);
                let dd = "string" == typeof Jd ? Jd : Jd.name;
                pd.some((Jd => Jd.name == dd)) || pd.push("string" == typeof Jd ? {
                  name: dd
                } : Jd)
              }
            },
            Pd = Jd.facet(xd);
          for (let od of dd)
            if (od.hasResult()) {
              let dd = od.result.getMatch;
              if (!1 === od.result.filter)
                for (let Jd of od.result.options) Wd(new Kd(Jd, od.source, dd ? dd(Jd) : [], 1e9 - kd.length));
              else {
                let kd, pd = Jd.sliceDoc(od.from, od.to),
                  Zd = Pd.filterStrict ? new vd(pd) : new Gd(pd);
                for (let Jd of od.result.options)
                  if (kd = Zd.match(Jd.label)) {
                    let pd = Jd.displayLabel ? dd ? dd(Jd, kd.matched) : [] : kd.matched,
                      Pd = kd.score + (Jd.boost || 0);
                    if (Wd(new Kd(Jd, od.source, pd, Pd)), "object" == typeof Jd.section && "dynamic" === Jd.section.rank) {
                      let {
                        name: dd
                      } = Jd.section;
                      Nd || (Nd = Object.create(null)), Nd[dd] = Math.max(Pd, Nd[dd] || -1e9)
                    }
                  }
              }
            } if (pd) {
            let dd = Object.create(null),
              Jd = 0,
              Wd = (dd, Jd) => ("dynamic" === dd.rank && "dynamic" === Jd.rank ? Nd[Jd.name] - Nd[dd.name] : 0) || ("number" == typeof dd.rank ? dd.rank : 1e9) - ("number" == typeof Jd.rank ? Jd.rank : 1e9) || (dd.name < Jd.name ? -1 : 1);
            for (let kd of pd.sort(Wd)) Jd -= 1e5, dd[kd.name] = Jd;
            for (let pd of kd) {
              let {
                section: Jd
              } = pd.completion;
              Jd && (pd.score += dd["string" == typeof Jd ? Jd : Jd.name])
            }
          }
          let Zd = [],
            gd = null,
            Cd = Pd.compareCompletions;
          for (let Kd of kd.sort(((dd, Jd) => Jd.score - dd.score || Cd(dd.completion, Jd.completion)))) {
            let dd = Kd.completion;
            !gd || gd.label != dd.label || gd.detail != dd.detail || null != gd.type && null != dd.type && gd.type != dd.type || gd.apply != dd.apply || gd.boost != dd.boost ? Zd.push(Kd) : Yd(Kd.completion) > Yd(gd) && (Zd[Zd.length - 1] = Kd), gd = Kd.completion
          }
          return Zd
        }(dd, Jd);
        if (!Pd.length) return pd && dd.some((dd => dd.isPending)) ? pd.setDisabled() : null;
        let Zd = Jd.facet(xd).selectOnOpen ? 0 : -1;
        if (pd && pd.selected != Zd && -1 != pd.selected) {
          let dd = pd.options[pd.selected].completion;
          for (let Jd = 0; Jd < Pd.length; Jd++)
            if (Pd[Jd].completion == dd) {
              Zd = Jd;
              break
            }
        }
        return new md(Pd, Xd(kd, Zd), {
          pos: dd.reduce(((dd, Jd) => Jd.hasResult() ? Math.min(dd, Jd.from) : dd), 1e8),
          create: cd,
          above: Nd.aboveCursor
        }, pd ? pd.timestamp : Date.now(), Zd, !1)
      }
      map(dd) {
        return new md(this.options, this.attrs, {
          ...this.tooltip,
          pos: dd.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new md(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class bd {
      constructor(dd, Jd, kd) {
        this.active = dd, this.id = Jd, this.open = kd
      }
      static start() {
        return new bd(fd, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(dd) {
        let {
          state: Jd
        } = dd, kd = Jd.facet(xd), pd = (kd.override || Jd.languageDataAt("autocomplete", od(Jd)).map(ed)).map((Jd => (this.active.find((dd => dd.source == Jd)) || new Ud(Jd, this.active.some((dd => 0 != dd.state)) ? 1 : 0)).update(dd, kd)));
        pd.length == this.active.length && pd.every(((dd, Jd) => dd == this.active[Jd])) && (pd = this.active);
        let Nd = this.open,
          Wd = dd.effects.some((dd => dd.is(Dd)));
        Nd && dd.docChanged && (Nd = Nd.map(dd.changes)), dd.selection || pd.some((Jd => Jd.hasResult() && dd.changes.touchesRange(Jd.from, Jd.to))) || ! function(dd, Jd) {
          if (dd == Jd) return !0;
          for (let kd = 0, pd = 0;;) {
            for (; kd < dd.length && !dd[kd].hasResult();) kd++;
            for (; pd < Jd.length && !Jd[pd].hasResult();) pd++;
            let Nd = kd == dd.length,
              Wd = pd == Jd.length;
            if (Nd || Wd) return Nd == Wd;
            if (dd[kd++].result != Jd[pd++].result) return !1
          }
        }(pd, this.active) || Wd ? Nd = md.build(pd, Jd, this.id, Nd, kd, Wd) : Nd && Nd.disabled && !pd.some((dd => dd.isPending)) && (Nd = null), !Nd && pd.every((dd => !dd.isPending)) && pd.some((dd => dd.hasResult())) && (pd = pd.map((dd => dd.hasResult() ? new Ud(dd.source, 0) : dd)));
        for (let Pd of dd.effects) Pd.is(sd) && (Nd = Nd && Nd.setSelected(Pd.value, this.id));
        return pd == this.active && Nd == this.open ? this : new bd(pd, this.id, Nd)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Sd : jd
      }
    }
    const Sd = {
        "aria-autocomplete": "list"
      },
      jd = {};

    function Xd(dd, Jd) {
      let kd = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": dd
      };
      return Jd > -1 && (kd["aria-activedescendant"] = dd + "-" + Jd), kd
    }
    const fd = [];

    function nd(dd, Jd) {
      if (dd.isUserEvent("input.complete")) {
        let kd = dd.annotation(Qd);
        if (kd && Jd.activateOnCompletion(kd)) return 12
      }
      let kd = dd.isUserEvent("input.type");
      return kd && Jd.activateOnTyping ? 5 : kd ? 1 : dd.isUserEvent("delete.backward") ? 2 : dd.selection ? 8 : dd.docChanged ? 16 : 0
    }
    class Ud {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = dd, this.state = Jd, this.explicit = kd
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(dd, Jd) {
        let kd = nd(dd, Jd),
          pd = this;
        (8 & kd || 16 & kd && this.touches(dd)) && (pd = new Ud(pd.source, 0)), 4 & kd && 0 == pd.state && (pd = new Ud(this.source, 1)), pd = pd.updateFor(dd, kd);
        for (let Nd of dd.effects)
          if (Nd.is(Rd)) pd = new Ud(pd.source, 1, Nd.value);
          else if (Nd.is(Id)) pd = new Ud(pd.source, 0);
        else if (Nd.is(Dd))
          for (let dd of Nd.value) dd.source == pd.source && (pd = dd);
        return pd
      }
      updateFor(dd, Jd) {
        return this.map(dd.changes)
      }
      map(dd) {
        return this
      }
      touches(dd) {
        return dd.changes.touchesRange(od(dd.state))
      }
    }
    class yd extends Ud {
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        super(dd, 3, Jd), this.limit = kd, this.result = pd, this.from = Nd, this.to = Wd
      }
      hasResult() {
        return !0
      }
      updateFor(dd, Jd) {
        var kd;
        if (!(3 & Jd)) return this.map(dd.changes);
        let pd = this.result;
        pd.map && !dd.changes.empty && (pd = pd.map(pd, dd.changes));
        let Nd = dd.changes.mapPos(this.from),
          Wd = dd.changes.mapPos(this.to, 1),
          Zd = od(dd.state);
        if (Zd > Wd || !pd || 2 & Jd && (od(dd.startState) == this.from || Zd < this.limit)) return new Ud(this.source, 4 & Jd ? 1 : 0);
        let gd = dd.changes.mapPos(this.limit);
        return function(dd, Jd, kd, pd) {
          if (!dd) return !1;
          let Nd = Jd.sliceDoc(kd, pd);
          return "function" == typeof dd ? dd(Nd, kd, pd, Jd) : ld(dd, !0).test(Nd)
        }(pd.validFor, dd.state, Nd, Wd) ? new yd(this.source, this.explicit, gd, pd, Nd, Wd) : pd.update && (pd = pd.update(pd, Nd, Wd, new Pd(dd.state, Zd, !1))) ? new yd(this.source, this.explicit, gd, pd, pd.from, null !== (kd = pd.to) && void 0 !== kd ? kd : od(dd.state)) : new Ud(this.source, 1, this.explicit)
      }
      map(dd) {
        if (dd.empty) return this;
        return (this.result.map ? this.result.map(this.result, dd) : this.result) ? new yd(this.source, this.explicit, dd.mapPos(this.limit), this.result, dd.mapPos(this.from), dd.mapPos(this.to, 1)) : new Ud(this.source, 0)
      }
      touches(dd) {
        return dd.changes.touchesRange(this.from, this.to)
      }
    }
    const Dd = pd.C.define({
        map: (dd, Jd) => dd.map((dd => dd.map(Jd)))
      }),
      Td = pd.E.define({
        create: () => bd.start(),
        update: (dd, Jd) => dd.update(Jd),
        provide: dd => [Nd.sb.from(dd, (dd => dd.tooltip)), Nd.i.contentAttributes.from(dd, (dd => dd.attrs))]
      });

    function Ed(dd, Jd) {
      const kd = Jd.completion.apply || Jd.completion.label;
      let pd = dd.state.field(Td).active.find((dd => dd.source == Jd.source));
      return pd instanceof yd && ("string" == typeof kd ? dd.dispatch({
        ...Ld(dd.state, kd, pd.from, pd.to),
        annotations: Qd.of(Jd.completion)
      }) : kd(dd, Jd.completion, pd.from, pd.to), !0)
    }
    const cd = Fd(Td, Ed);

    function hd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return kd => {
        let pd = kd.state.field(Td, !1);
        if (!pd || !pd.open || pd.open.disabled || Date.now() - pd.open.timestamp < kd.state.facet(xd).interactionDelay) return !1;
        let Wd, Pd = 1;
        "page" == Jd && (Wd = (0, Nd.I)(kd, pd.open.tooltip)) && (Pd = Math.max(2, Math.floor(Wd.dom.offsetHeight / Wd.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: Zd
        } = pd.open.options, gd = pd.open.selected > -1 ? pd.open.selected + Pd * (dd ? 1 : -1) : dd ? 0 : Zd - 1;
        return gd < 0 ? gd = "page" == Jd ? 0 : Zd - 1 : gd >= Zd && (gd = "page" == Jd ? Zd - 1 : 0), kd.dispatch({
          effects: sd.of(gd)
        }), !0
      }
    }
    const rd = dd => !!dd.state.field(Td, !1) && (dd.dispatch({
      effects: Rd.of(!0)
    }), !0);
    class ud {
      constructor(dd, Jd) {
        this.active = dd, this.context = Jd, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const td = Nd.p.fromClass(class {
        constructor(dd) {
          this.view = dd, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let Jd of dd.state.field(Td).active) Jd.isPending && this.startQuery(Jd)
        }
        update(dd) {
          let Jd = dd.state.field(Td),
            kd = dd.state.facet(xd);
          if (!dd.selectionSet && !dd.docChanged && dd.startState.field(Td) == Jd) return;
          let pd = dd.transactions.some((dd => {
            let Jd = nd(dd, kd);
            return 8 & Jd || (dd.selection || dd.docChanged) && !(3 & Jd)
          }));
          for (let Zd = 0; Zd < this.running.length; Zd++) {
            let Jd = this.running[Zd];
            if (pd || Jd.context.abortOnDocChange && dd.docChanged || Jd.updates.length + dd.transactions.length > 50 && Date.now() - Jd.time > 1e3) {
              for (let dd of Jd.context.abortListeners) try {
                dd()
              } catch (Pd) {
                (0, Nd.$)(this.view.state, Pd)
              }
              Jd.context.abortListeners = null, this.running.splice(Zd--, 1)
            } else Jd.updates.push(...dd.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), dd.transactions.some((dd => dd.effects.some((dd => dd.is(Rd))))) && (this.pendingStart = !0);
          let Wd = this.pendingStart ? 50 : kd.activateOnTypingDelay;
          if (this.debounceUpdate = Jd.active.some((dd => dd.isPending && !this.running.some((Jd => Jd.active.source == dd.source)))) ? setTimeout((() => this.startUpdate()), Wd) : -1, 0 != this.composing)
            for (let Nd of dd.transactions) Nd.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Nd.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: dd
          } = this.view, Jd = dd.field(Td);
          for (let kd of Jd.active) kd.isPending && !this.running.some((dd => dd.active.source == kd.source)) && this.startQuery(kd);
          this.running.length && Jd.open && Jd.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(xd).updateSyncTime))
        }
        startQuery(dd) {
          let {
            state: Jd
          } = this.view, kd = od(Jd), pd = new Pd(Jd, kd, dd.explicit, this.view), Wd = new ud(dd, pd);
          this.running.push(Wd), Promise.resolve(dd.source(pd)).then((dd => {
            Wd.context.aborted || (Wd.done = dd || null, this.scheduleAccept())
          }), (dd => {
            this.view.dispatch({
              effects: Id.of(null)
            }), (0, Nd.$)(this.view.state, dd)
          }))
        }
        scheduleAccept() {
          this.running.every((dd => void 0 !== dd.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(xd).updateSyncTime))
        }
        accept() {
          var dd;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let Jd = [],
            kd = this.view.state.facet(xd),
            pd = this.view.state.field(Td);
          for (let Nd = 0; Nd < this.running.length; Nd++) {
            let Wd = this.running[Nd];
            if (void 0 === Wd.done) continue;
            if (this.running.splice(Nd--, 1), Wd.done) {
              let pd = od(Wd.updates.length ? Wd.updates[0].startState : this.view.state),
                Nd = Math.min(pd, Wd.done.from + (Wd.active.explicit ? 0 : 1)),
                Pd = new yd(Wd.active.source, Wd.active.explicit, Nd, Wd.done, Wd.done.from, null !== (dd = Wd.done.to) && void 0 !== dd ? dd : pd);
              for (let dd of Wd.updates) Pd = Pd.update(dd, kd);
              if (Pd.hasResult()) {
                Jd.push(Pd);
                continue
              }
            }
            let Pd = pd.active.find((dd => dd.source == Wd.active.source));
            if (Pd && Pd.isPending)
              if (null == Wd.done) {
                let dd = new Ud(Wd.active.source, 0);
                for (let Jd of Wd.updates) dd = dd.update(Jd, kd);
                dd.isPending || Jd.push(dd)
              } else this.startQuery(Pd)
          }(Jd.length || pd.open && pd.open.disabled) && this.view.dispatch({
            effects: Dd.of(Jd)
          })
        }
      }, {
        eventHandlers: {
          blur(dd) {
            let Jd = this.view.state.field(Td, !1);
            if (Jd && Jd.tooltip && this.view.state.facet(xd).closeOnBlur) {
              let kd = Jd.open && (0, Nd.I)(this.view, Jd.open.tooltip);
              kd && kd.dom.contains(dd.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: Id.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: Rd.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      Vd = "object" == typeof navigator && /Win/.test(navigator.platform),
      zd = pd.t.highest(Nd.i.domEventHandlers({
        keydown(dd, Jd) {
          let kd = Jd.state.field(Td, !1);
          if (!kd || !kd.open || kd.open.disabled || kd.open.selected < 0 || dd.key.length > 1 || dd.ctrlKey && (!Vd || !dd.altKey) || dd.metaKey) return !1;
          let pd = kd.open.options[kd.open.selected],
            Nd = kd.active.find((dd => dd.source == pd.source)),
            Wd = pd.completion.commitCharacters || Nd.result.commitCharacters;
          return Wd && Wd.indexOf(dd.key) > -1 && Ed(Jd, pd), !1
        }
      })),
      Hd = Nd.i.baseTheme({
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
    class wd {
      constructor(dd, Jd, kd, pd) {
        this.field = dd, this.line = Jd, this.from = kd, this.to = pd
      }
    }
    class Ad {
      constructor(dd, Jd, kd) {
        this.field = dd, this.from = Jd, this.to = kd
      }
      map(dd) {
        let Jd = dd.mapPos(this.from, -1, pd.s.TrackDel),
          kd = dd.mapPos(this.to, 1, pd.s.TrackDel);
        return null == Jd || null == kd ? null : new Ad(this.field, Jd, kd)
      }
    }
    class dJ {
      constructor(dd, Jd) {
        this.lines = dd, this.fieldPositions = Jd
      }
      instantiate(dd, Jd) {
        let kd = [],
          pd = [Jd],
          Nd = dd.doc.lineAt(Jd),
          Pd = /^\s*/.exec(Nd.text)[0];
        for (let gd of this.lines) {
          if (kd.length) {
            let kd = Pd,
              Nd = /^\t*/.exec(gd)[0].length;
            for (let Jd = 0; Jd < Nd; Jd++) kd += dd.facet(Wd.Y);
            pd.push(Jd + kd.length - Nd), gd = kd + gd.slice(Nd)
          }
          kd.push(gd), Jd += gd.length + 1
        }
        let Zd = this.fieldPositions.map((dd => new Ad(dd.field, pd[dd.line] + dd.from, pd[dd.line] + dd.to)));
        return {
          text: kd,
          UO: Zd
        }
      }
      static parse(dd) {
        let Jd, kd = [],
          pd = [],
          Nd = [];
        for (let Wd of dd.split(/\r\n?|\n/)) {
          for (; Jd = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Wd);) {
            let dd = Jd[1] ? +Jd[1] : null,
              Pd = Jd[2] || Jd[3] || "",
              Zd = -1,
              gd = Pd.replace(/\\[{}]/g, (dd => dd[1]));
            for (let Jd = 0; Jd < kd.length; Jd++)(null != dd ? kd[Jd].seq == dd : gd && kd[Jd].name == gd) && (Zd = Jd);
            if (Zd < 0) {
              let Jd = 0;
              for (; Jd < kd.length && (null == dd || null != kd[Jd].seq && kd[Jd].seq < dd);) Jd++;
              kd.splice(Jd, 0, {
                seq: dd,
                name: gd
              }), Zd = Jd;
              for (let dd of Nd) dd.field >= Zd && dd.field++
            }
            for (let kd of Nd)
              if (kd.line == pd.length && kd.from > Jd.index) {
                let dd = Jd[2] ? 3 + (Jd[1] || "").length : 2;
                kd.from -= dd, kd.to -= dd
              } Nd.push(new wd(Zd, pd.length, Jd.index, Jd.index + gd.length)), Wd = Wd.slice(0, Jd.index) + Pd + Wd.slice(Jd.index + Jd[0].length)
          }
          Wd = Wd.replace(/\\([{}])/g, ((dd, Jd, kd) => {
            for (let Wd of Nd) Wd.line == pd.length && Wd.from > kd && (Wd.from--, Wd.to--);
            return Jd
          })), pd.push(Wd)
        }
        return new dJ(pd, Nd)
      }
    }
    let JJ = Nd.b.widget({
        widget: new class extends Nd.s {
          toDOM() {
            let dd = document.createElement("span");
            return dd.className = "cm-snippetFieldPosition", dd
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      kJ = Nd.b.mark({
        class: "cm-snippetField"
      });
    class pJ {
      constructor(dd, Jd) {
        this.UO = dd, this.active = Jd, this.deco = Nd.b.set(dd.map((dd => (dd.from == dd.to ? JJ : kJ).range(dd.from, dd.to))), !0)
      }
      map(dd) {
        let Jd = [];
        for (let kd of this.UO) {
          let pd = kd.map(dd);
          if (!pd) return null;
          Jd.push(pd)
        }
        return new pJ(Jd, this.active)
      }
      selectionInsideField(dd) {
        return dd.UO.every((dd => this.UO.some((Jd => Jd.field == this.active && Jd.from <= dd.from && Jd.to >= dd.to))))
      }
    }
    const NJ = pd.C.define({
        map: (dd, Jd) => dd && dd.map(Jd)
      }),
      WJ = pd.C.define(),
      PJ = pd.E.define({
        create: () => null,
        update(dd, Jd) {
          for (let kd of Jd.effects) {
            if (kd.is(NJ)) return kd.value;
            if (kd.is(WJ) && dd) return new pJ(dd.UO, kd.value)
          }
          return dd && Jd.docChanged && (dd = dd.map(Jd.changes)), dd && Jd.selection && !dd.selectionInsideField(Jd.selection) && (dd = null), dd
        },
        provide: dd => Nd.i.RW.from(dd, (dd => dd ? dd.deco : Nd.b.none))
      });

    function ZJ(dd, Jd) {
      return pd.k.create(dd.filter((dd => dd.field == Jd)).map((dd => pd.k.range(dd.from, dd.to))))
    }

    function gJ(dd) {
      let Jd = dJ.parse(dd);
      return (dd, kd, Nd, Wd) => {
        let {
          text: Pd,
          UO: Zd
        } = Jd.instantiate(dd.state, Nd), {
          main: gd
        } = dd.state.selection, Cd = {
          changes: {
            from: Nd,
            to: Wd == gd.from ? gd.to : Wd,
            insert: pd.I.of(Pd)
          },
          scrollIntoView: !0,
          annotations: kd ? [Qd.of(kd), pd.J.userEvent.of("input.complete")] : void 0
        };
        if (Zd.length && (Cd.selection = ZJ(Zd, 0)), Zd.some((dd => dd.field > 0))) {
          let Jd = new pJ(Zd, 0),
            kd = Cd.effects = [NJ.of(Jd)];
          void 0 === dd.state.field(PJ, !1) && kd.push(pd.C.appendConfig.of([PJ, lJ, LJ, Hd]))
        }
        dd.dispatch(dd.state.update(Cd))
      }
    }

    function CJ(dd) {
      return Jd => {
        let {
          state: kd,
          dispatch: pd
        } = Jd, Nd = kd.field(PJ, !1);
        if (!Nd || dd < 0 && 0 == Nd.active) return !1;
        let Wd = Nd.active + dd,
          Pd = dd > 0 && !Nd.UO.some((Jd => Jd.field == Wd + dd));
        return pd(kd.update({
          selection: ZJ(Nd.UO, Wd),
          effects: NJ.of(Pd ? null : new pJ(Nd.UO, Wd)),
          scrollIntoView: !0
        })), !0
      }
    }
    const KJ = [{
        key: "Tab",
        run: CJ(1),
        shift: CJ(-1)
      }, {
        key: "Escape",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd;
          return !!Jd.field(PJ, !1) && (kd(Jd.update({
            effects: NJ.of(null)
          })), !0)
        }
      }],
      oJ = pd.o.define({
        combine: dd => dd.length ? dd[0] : KJ
      }),
      lJ = pd.t.highest(Nd.X.compute([oJ], (dd => dd.facet(oJ))));

    function QJ(dd, Jd) {
      return {
        ...Jd,
        apply: gJ(dd)
      }
    }
    const LJ = Nd.i.domEventHandlers({
      mousedown(dd, Jd) {
        let kd, pd = Jd.state.field(PJ, !1);
        if (!pd || null == (kd = Jd.posAtCoords({
            x: dd.clientX,
            y: dd.clientY
          }))) return !1;
        let Nd = pd.UO.find((dd => dd.from <= kd && dd.to >= kd));
        return !(!Nd || Nd.field == pd.active) && (Jd.dispatch({
          selection: ZJ(pd.UO, Nd.field),
          effects: NJ.of(pd.UO.some((dd => dd.field > Nd.field)) ? new pJ(pd.UO, Nd.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const OJ = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      eJ = pd.C.define({
        map(dd, Jd) {
          let kd = Jd.mapPos(dd, -1, pd.s.TrackAfter);
          return null == kd ? void 0 : kd
        }
      }),
      RJ = new class extends pd.A {};
    RJ.startSide = 1, RJ.endSide = -1;
    const IJ = pd.E.define({
      create: () => pd.x.empty,
      update(dd, Jd) {
        if (dd = dd.map(Jd.changes), Jd.selection) {
          let kd = Jd.state.doc.lineAt(Jd.selection.main.head);
          dd = dd.update({
            filter: dd => dd >= kd.from && dd <= kd.to
          })
        }
        for (let kd of Jd.effects) kd.is(eJ) && (dd = dd.update({
          add: [RJ.range(kd.value, kd.value + 1)]
        }));
        return dd
      }
    });

    function GJ() {
      return [sJ, IJ]
    }
    const vJ = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function xJ(dd) {
      for (let Jd = 0; Jd < 16; Jd += 2)
        if (vJ.charCodeAt(Jd) == dd) return vJ.charAt(Jd + 1);
      return (0, pd._)(dd < 128 ? dd : dd + 1)
    }

    function qJ(dd, Jd) {
      return dd.languageDataAt("closeBrackets", Jd)[0] || OJ
    }
    const BJ = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      sJ = Nd.i.inputHandler.of(((dd, Jd, kd, Nd) => {
        if ((BJ ? dd.composing : dd.compositionStarted) || dd.state.readOnly) return !1;
        let Wd = dd.state.selection.main;
        if (Nd.length > 2 || 2 == Nd.length && 1 == (0, pd.O)((0, pd.K)(Nd, 0)) || Jd != Wd.from || kd != Wd.to) return !1;
        let Pd = function(dd, Jd) {
          let kd = qJ(dd, dd.selection.main.head),
            Nd = kd.brackets || OJ.brackets;
          for (let Wd of Nd) {
            let Pd = xJ((0, pd.K)(Wd, 0));
            if (Jd == Wd) return Pd == Wd ? mJ(dd, Wd, Nd.indexOf(Wd + Wd + Wd) > -1, kd) : FJ(dd, Wd, Pd, kd.before || OJ.before);
            if (Jd == Pd && aJ(dd, dd.selection.main.from)) return YJ(dd, Wd, Pd)
          }
          return null
        }(dd.state, Nd);
        return !!Pd && (dd.dispatch(Pd), !0)
      })),
      iJ = [{
        key: "Backspace",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd;
          if (Jd.readOnly) return !1;
          let Nd = qJ(Jd, Jd.selection.main.head).brackets || OJ.brackets,
            Wd = null,
            Pd = Jd.changeByRange((dd => {
              if (dd.empty) {
                let kd = function(dd, Jd) {
                  let kd = dd.sliceString(Jd - 2, Jd);
                  return (0, pd.O)((0, pd.K)(kd, 0)) == kd.length ? kd : kd.slice(1)
                }(Jd.doc, dd.head);
                for (let Wd of Nd)
                  if (Wd == kd && MJ(Jd.doc, dd.head) == xJ((0, pd.K)(Wd, 0))) return {
                    changes: {
                      from: dd.head - Wd.length,
                      to: dd.head + Wd.length
                    },
                    range: pd.k.cursor(dd.head - Wd.length)
                  }
              }
              return {
                range: Wd = dd
              }
            }));
          return Wd || kd(Jd.update(Pd, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !Wd
        }
      }];

    function aJ(dd, Jd) {
      let kd = !1;
      return dd.field(IJ).between(0, dd.doc.length, (dd => {
        dd == Jd && (kd = !0)
      })), kd
    }

    function MJ(dd, Jd) {
      let kd = dd.sliceString(Jd, Jd + 2);
      return kd.slice(0, (0, pd.O)((0, pd.K)(kd, 0)))
    }

    function FJ(dd, Jd, kd, Nd) {
      let Wd = null,
        Pd = dd.changeByRange((Pd => {
          if (!Pd.empty) return {
            changes: [{
              insert: Jd,
              from: Pd.from
            }, {
              insert: kd,
              from: Pd.to
            }],
            effects: eJ.of(Pd.to + Jd.length),
            range: pd.k.range(Pd.anchor + Jd.length, Pd.head + Jd.length)
          };
          let Zd = MJ(dd.doc, Pd.head);
          return !Zd || /\s/.test(Zd) || Nd.indexOf(Zd) > -1 ? {
            changes: {
              insert: Jd + kd,
              from: Pd.head
            },
            effects: eJ.of(Pd.head + Jd.length),
            range: pd.k.cursor(Pd.head + Jd.length)
          } : {
            range: Wd = Pd
          }
        }));
      return Wd ? null : dd.update(Pd, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function YJ(dd, Jd, kd) {
      let Nd = null,
        Wd = dd.changeByRange((Jd => Jd.empty && MJ(dd.doc, Jd.head) == kd ? {
          changes: {
            from: Jd.head,
            to: Jd.head + kd.length,
            insert: kd
          },
          range: pd.k.cursor(Jd.head + kd.length)
        } : Nd = {
          range: Jd
        }));
      return Nd ? null : dd.update(Wd, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function mJ(dd, Jd, kd, Nd) {
      let Pd = Nd.stringPrefixes || OJ.stringPrefixes,
        Zd = null,
        gd = dd.changeByRange((Nd => {
          if (!Nd.empty) return {
            changes: [{
              insert: Jd,
              from: Nd.from
            }, {
              insert: Jd,
              from: Nd.to
            }],
            effects: eJ.of(Nd.to + Jd.length),
            range: pd.k.range(Nd.anchor + Jd.length, Nd.head + Jd.length)
          };
          let gd, Cd = Nd.head,
            Kd = MJ(dd.doc, Cd);
          if (Kd == Jd) {
            if (bJ(dd, Cd)) return {
              changes: {
                insert: Jd + Jd,
                from: Cd
              },
              effects: eJ.of(Cd + Jd.length),
              range: pd.k.cursor(Cd + Jd.length)
            };
            if (aJ(dd, Cd)) {
              let Nd = kd && dd.sliceDoc(Cd, Cd + 3 * Jd.length) == Jd + Jd + Jd ? Jd + Jd + Jd : Jd;
              return {
                changes: {
                  from: Cd,
                  to: Cd + Nd.length,
                  insert: Nd
                },
                range: pd.k.cursor(Cd + Nd.length)
              }
            }
          } else {
            if (kd && dd.sliceDoc(Cd - 2 * Jd.length, Cd) == Jd + Jd && (gd = SJ(dd, Cd - 2 * Jd.length, Pd)) > -1 && bJ(dd, gd)) return {
              changes: {
                insert: Jd + Jd + Jd + Jd,
                from: Cd
              },
              effects: eJ.of(Cd + Jd.length),
              range: pd.k.cursor(Cd + Jd.length)
            };
            if (dd.charCategorizer(Cd)(Kd) != pd.i.Word && SJ(dd, Cd, Pd) > -1 && ! function(dd, Jd, kd, pd) {
                let Nd = (0, Wd.gb)(dd).resolveInner(Jd, -1),
                  Pd = pd.reduce(((dd, Jd) => Math.max(dd, Jd.length)), 0);
                for (let Wd = 0; Wd < 5; Wd++) {
                  let Wd = dd.sliceDoc(Nd.from, Math.min(Nd.to, Nd.from + kd.length + Pd)),
                    Zd = Wd.indexOf(kd);
                  if (!Zd || Zd > -1 && pd.indexOf(Wd.slice(0, Zd)) > -1) {
                    let Jd = Nd.firstChild;
                    for (; Jd && Jd.from == Nd.from && Jd.to - Jd.from > kd.length + Zd;) {
                      if (dd.sliceDoc(Jd.to - kd.length, Jd.to) == kd) return !1;
                      Jd = Jd.firstChild
                    }
                    return !0
                  }
                  let gd = Nd.to == Jd && Nd.parent;
                  if (!gd) break;
                  Nd = gd
                }
                return !1
              }(dd, Cd, Jd, Pd)) return {
              changes: {
                insert: Jd + Jd,
                from: Cd
              },
              effects: eJ.of(Cd + Jd.length),
              range: pd.k.cursor(Cd + Jd.length)
            }
          }
          return {
            range: Zd = Nd
          }
        }));
      return Zd ? null : dd.update(gd, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function bJ(dd, Jd) {
      let kd = (0, Wd.gb)(dd).resolveInner(Jd + 1);
      return kd.parent && kd.from == Jd
    }

    function SJ(dd, Jd, kd) {
      let Nd = dd.charCategorizer(Jd);
      if (Nd(dd.sliceDoc(Jd - 1, Jd)) != pd.i.Word) return Jd;
      for (let Wd of kd) {
        let kd = Jd - Wd.length;
        if (dd.sliceDoc(kd, Jd) == Wd && Nd(dd.sliceDoc(kd - 1, kd)) != pd.i.Word) return kd
      }
      return -1
    }

    function jJ() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [zd, Td, xd.of(dd), td, fJ, Hd]
    }
    const XJ = [{
        key: "Ctrl-Space",
        run: rd
      }, {
        mac: "Alt-`",
        run: rd
      }, {
        mac: "Alt-i",
        run: rd
      }, {
        key: "Escape",
        run: dd => {
          let Jd = dd.state.field(Td, !1);
          return !(!Jd || !Jd.active.some((dd => 0 != dd.state))) && (dd.dispatch({
            effects: Id.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: hd(!0)
      }, {
        key: "ArrowUp",
        run: hd(!1)
      }, {
        key: "PageDown",
        run: hd(!0, "page")
      }, {
        key: "PageUp",
        run: hd(!1, "page")
      }, {
        key: "Enter",
        run: dd => {
          let Jd = dd.state.field(Td, !1);
          return !(dd.state.readOnly || !Jd || !Jd.open || Jd.open.selected < 0 || Jd.open.disabled || Date.now() - Jd.open.timestamp < dd.state.facet(xd).interactionDelay) && Ed(dd, Jd.open.options[Jd.open.selected])
        }
      }],
      fJ = pd.t.highest(Nd.X.computeN([xd], (dd => dd.facet(xd).defaultKeymap ? [XJ] : [])))
  },
  41424: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd,
      f: () => ld,
      g: () => Kd,
      h: () => od
    });
    var pd = kd(41273);
    class Nd {
      constructor(dd, Jd, kd, pd) {
        this.origin = dd, this.changes = Jd, this.effects = kd, this.clientID = pd
      }
    }
    class Wd {
      constructor(dd, Jd) {
        this.version = dd, this.unconfirmed = Jd
      }
    }
    const Pd = pd.o.define({
        combine(dd) {
          let Jd = (0, pd.R)(dd, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: dd => dd
          });
          return null == Jd.clientID && (Jd.clientID = dd.length && dd[0].generatedID || ""), Jd
        }
      }),
      Zd = pd.b.define(),
      gd = pd.E.define({
        create: dd => new Wd(dd.facet(Pd).startVersion, []),
        update(dd, Jd) {
          let kd = Jd.annotation(Zd);
          if (kd) return kd;
          let {
            sharedEffects: pd,
            clientID: gd
          } = Jd.startState.facet(Pd), Cd = pd(Jd);
          return Cd.length || !Jd.changes.empty ? new Wd(dd.version, dd.unconfirmed.concat(new Nd(Jd, Jd.changes, Cd, gd))) : dd
        }
      });

    function Cd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [gd, Pd.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, dd))]
    }

    function Kd(dd, Jd) {
      let {
        version: kd,
        unconfirmed: Cd
      } = dd.field(gd), {
        clientID: Kd
      } = dd.facet(Pd);
      kd += Jd.length;
      let od = [],
        ld = null,
        Qd = 0;
      for (let Nd of Jd) {
        let dd = Qd < Cd.length ? Cd[Qd] : null;
        dd && dd.clientID == Nd.clientID ? (ld && (ld = ld.map(dd.changes, !0)), od = pd.C.mapEffects(od, Nd.changes), Qd++) : (od = pd.C.mapEffects(od, Nd.changes), Nd.effects && (od = od.concat(Nd.effects)), ld = ld ? ld.compose(Nd.changes) : Nd.changes)
      }
      if (Qd && (Cd = Cd.slice(Qd)), Cd.length && (ld && (Cd = Cd.map((dd => {
          let Jd = dd.changes.map(ld);
          return ld = ld.map(dd.changes, !0), new Nd(dd.origin, Jd, pd.C.mapEffects(dd.effects, ld), Kd)
        }))), od.length)) {
        let dd = Cd.reduce(((dd, Jd) => dd.compose(Jd.changes)), pd.ChangeSet.empty(Cd[0].changes.length));
        od = pd.C.mapEffects(od, dd)
      }
      return ld ? dd.update({
        changes: ld,
        effects: od,
        annotations: [pd.J.addToHistory.of(!1), pd.J.remote.of(!0), Zd.of(new Wd(kd, Cd))],
        filter: !1
      }) : dd.update({
        annotations: [Zd.of(new Wd(kd, Cd))]
      })
    }

    function od(dd) {
      return dd.field(gd).unconfirmed
    }

    function ld(dd) {
      return dd.field(gd).version
    }
  },
  41321: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => eJ
    });
    var pd = kd(41306);
    class Nd {
      constructor(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        let Cd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Kd = arguments.length > 10 ? arguments[10] : void 0;
        this.p = dd, this.stack = Jd, this.state = kd, this.reducePos = pd, this.pos = Nd, this.score = Wd, this.buffer = Pd, this.bufferBase = Zd, this.curContext = gd, this.lookAhead = Cd, this.parent = Kd
      }
      toString() {
        return `[${this.stack.filter(((dd,Jd)=>Jd%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = dd.parser.context;
        return new Nd(dd, [], Jd, kd, kd, 0, [], 0, pd ? new Wd(pd, pd.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(dd, Jd) {
        this.stack.push(this.state, Jd, this.bufferBase + this.buffer.length), this.state = dd
      }
      reduce(dd) {
        var Jd;
        let kd = dd >> 19,
          pd = 65535 & dd,
          {
            parser: Nd
          } = this.p,
          Wd = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          Pd = Nd.dynamicPrecedence(pd);
        if (Pd && (this.score += Pd), 0 == kd) return this.pushState(Nd.getGoto(this.state, pd, !0), this.reducePos), pd < Nd.minRepeatTerm && this.storeNode(pd, this.reducePos, this.reducePos, Wd ? 8 : 4, !0), void this.reduceContext(pd, this.reducePos);
        let Zd = this.stack.length - 3 * (kd - 1) - (262144 & dd ? 6 : 0),
          gd = Zd ? this.stack[Zd - 2] : this.p.UO[0].from,
          Cd = this.reducePos - gd;
        Cd >= 2e3 && !(null === (Jd = this.p.parser.nodeSet.types[pd]) || void 0 === Jd ? void 0 : Jd.isAnonymous) && (gd == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Cd) : this.p.lastBigReductionSize < Cd && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = gd, this.p.lastBigReductionSize = Cd));
        let Kd = Zd ? this.stack[Zd - 1] : 0,
          od = this.bufferBase + this.buffer.length - Kd;
        if (pd < Nd.minRepeatTerm || 131072 & dd) {
          let dd = Nd.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(pd, gd, dd, od + 4, !0)
        }
        if (262144 & dd) this.state = this.stack[Zd];
        else {
          let dd = this.stack[Zd - 3];
          this.state = Nd.getGoto(dd, pd, !0)
        }
        for (; this.stack.length > Zd;) this.stack.pop();
        this.reduceContext(pd, gd)
      }
      storeNode(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == dd && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let dd = this,
            pd = this.buffer.length;
          if (0 == pd && dd.parent && (pd = dd.bufferBase - dd.parent.bufferBase, dd = dd.parent), pd > 0 && 0 == dd.buffer[pd - 4] && dd.buffer[pd - 1] > -1) {
            if (Jd == kd) return;
            if (dd.buffer[pd - 2] >= Jd) return void(dd.buffer[pd - 2] = kd)
          }
        }
        if (Nd && this.pos != kd) {
          let Nd = this.buffer.length;
          if (Nd > 0 && (0 != this.buffer[Nd - 4] || this.buffer[Nd - 1] < 0)) {
            let dd = !1;
            for (let Jd = Nd; Jd > 0 && this.buffer[Jd - 2] > kd; Jd -= 4)
              if (this.buffer[Jd - 1] >= 0) {
                dd = !0;
                break
              } if (dd)
              for (; Nd > 0 && this.buffer[Nd - 2] > kd;) this.buffer[Nd] = this.buffer[Nd - 4], this.buffer[Nd + 1] = this.buffer[Nd - 3], this.buffer[Nd + 2] = this.buffer[Nd - 2], this.buffer[Nd + 3] = this.buffer[Nd - 1], Nd -= 4, pd > 4 && (pd -= 4)
          }
          this.buffer[Nd] = dd, this.buffer[Nd + 1] = Jd, this.buffer[Nd + 2] = kd, this.buffer[Nd + 3] = pd
        } else this.buffer.push(dd, Jd, kd, pd)
      }
      shift(dd, Jd, kd, pd) {
        if (131072 & dd) this.pushState(65535 & dd, this.pos);
        else if (0 == (262144 & dd)) {
          let Nd = dd,
            {
              parser: Wd
            } = this.p;
          this.pos = pd;
          let Pd = Wd.stateFlag(Nd, 1);
          !Pd && (pd > kd || Jd <= Wd.maxNode) && (this.reducePos = pd), this.pushState(Nd, Pd ? kd : Math.min(kd, this.reducePos)), this.shiftContext(Jd, kd), Jd <= Wd.maxNode && this.buffer.push(Jd, kd, pd, 4)
        } else this.pos = pd, this.shiftContext(Jd, kd), Jd <= this.p.parser.maxNode && this.buffer.push(Jd, kd, pd, 4)
      }
      apply(dd, Jd, kd, pd) {
        65536 & dd ? this.reduce(dd) : this.shift(dd, Jd, kd, pd)
      }
      useNode(dd, Jd) {
        let kd = this.p.reused.length - 1;
        (kd < 0 || this.p.reused[kd] != dd) && (this.p.reused.push(dd), kd++);
        let pd = this.pos;
        this.reducePos = this.pos = pd + dd.length, this.pushState(Jd, pd), this.buffer.push(kd, pd, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, dd, this, this.p.stream.reset(this.pos - dd.length)))
      }
      split() {
        let dd = this,
          Jd = dd.buffer.length;
        for (; Jd > 0 && dd.buffer[Jd - 2] > dd.reducePos;) Jd -= 4;
        let kd = dd.buffer.slice(Jd),
          pd = dd.bufferBase + Jd;
        for (; dd && pd == dd.bufferBase;) dd = dd.parent;
        return new Nd(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, kd, pd, this.curContext, this.lookAhead, dd)
      }
      recoverByDelete(dd, Jd) {
        let kd = dd <= this.p.parser.maxNode;
        kd && this.storeNode(dd, this.pos, Jd, 4), this.storeNode(0, this.pos, Jd, kd ? 8 : 4), this.pos = this.reducePos = Jd, this.score -= 190
      }
      canShift(dd) {
        for (let Jd = new Pd(this);;) {
          let kd = this.p.parser.stateSlot(Jd.state, 4) || this.p.parser.hasAction(Jd.state, dd);
          if (0 == kd) return !1;
          if (0 == (65536 & kd)) return !0;
          Jd.reduce(kd)
        }
      }
      recoverByInsert(dd) {
        if (this.stack.length >= 300) return [];
        let Jd = this.p.parser.nextStates(this.state);
        if (Jd.length > 8 || this.stack.length >= 120) {
          let kd = [];
          for (let pd, Nd = 0; Nd < Jd.length; Nd += 2)(pd = Jd[Nd + 1]) != this.state && this.p.parser.hasAction(pd, dd) && kd.push(Jd[Nd], pd);
          if (this.stack.length < 120)
            for (let dd = 0; kd.length < 8 && dd < Jd.length; dd += 2) {
              let pd = Jd[dd + 1];
              kd.some(((dd, Jd) => 1 & Jd && dd == pd)) || kd.push(Jd[dd], pd)
            }
          Jd = kd
        }
        let kd = [];
        for (let pd = 0; pd < Jd.length && kd.length < 4; pd += 2) {
          let dd = Jd[pd + 1];
          if (dd == this.state) continue;
          let Nd = this.split();
          Nd.pushState(dd, this.pos), Nd.storeNode(0, Nd.pos, Nd.pos, 4, !0), Nd.shiftContext(Jd[pd], this.pos), Nd.reducePos = this.pos, Nd.score -= 200, kd.push(Nd)
        }
        return kd
      }
      forceReduce() {
        let {
          parser: dd
        } = this.p, Jd = dd.stateSlot(this.state, 5);
        if (0 == (65536 & Jd)) return !1;
        if (!dd.validAction(this.state, Jd)) {
          let kd = Jd >> 19,
            pd = 65535 & Jd,
            Nd = this.stack.length - 3 * kd;
          if (Nd < 0 || dd.getGoto(this.stack[Nd], pd, !1) < 0) {
            let dd = this.findForcedReduction();
            if (null == dd) return !1;
            Jd = dd
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(Jd), !0
      }
      findForcedReduction() {
        let {
          parser: dd
        } = this.p, Jd = [], kd = (pd, Nd) => {
          if (!Jd.includes(pd)) return Jd.push(pd), dd.allActions(pd, (Jd => {
            if (393216 & Jd);
            else if (65536 & Jd) {
              let kd = (Jd >> 19) - Nd;
              if (kd > 1) {
                let pd = 65535 & Jd,
                  Nd = this.stack.length - 3 * kd;
                if (Nd >= 0 && dd.getGoto(this.stack[Nd], pd, !1) >= 0) return kd << 19 | 65536 | pd
              }
            } else {
              let dd = kd(Jd, Nd + 1);
              if (null != dd) return dd
            }
          }))
        };
        return kd(this.state, 0)
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
          parser: dd
        } = this.p;
        return 65535 == dd.data[dd.stateSlot(this.state, 1)] && !dd.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(dd) {
        if (this.state != dd.state || this.stack.length != dd.stack.length) return !1;
        for (let Jd = 0; Jd < this.stack.length; Jd += 3)
          if (this.stack[Jd] != dd.stack[Jd]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(dd) {
        return this.p.parser.dialect.flags[dd]
      }
      shiftContext(dd, Jd) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, dd, this, this.p.stream.reset(Jd)))
      }
      reduceContext(dd, Jd) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, dd, this, this.p.stream.reset(Jd)))
      }
      emitContext() {
        let dd = this.buffer.length - 1;
        (dd < 0 || -3 != this.buffer[dd]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let dd = this.buffer.length - 1;
        (dd < 0 || -4 != this.buffer[dd]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(dd) {
        if (dd != this.curContext.context) {
          let Jd = new Wd(this.curContext.tracker, dd);
          Jd.hash != this.curContext.hash && this.emitContext(), this.curContext = Jd
        }
      }
      setLookAhead(dd) {
        return !(dd <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = dd, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class Wd {
      constructor(dd, Jd) {
        this.tracker = dd, this.context = Jd, this.hash = dd.strict ? dd.hash(Jd) : 0
      }
    }
    class Pd {
      constructor(dd) {
        this.start = dd, this.state = dd.state, this.stack = dd.stack, this.base = this.stack.length
      }
      reduce(dd) {
        let Jd = 65535 & dd,
          kd = dd >> 19;
        0 == kd ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (kd - 1);
        let pd = this.start.p.parser.getGoto(this.stack[this.base - 3], Jd, !0);
        this.state = pd
      }
    }
    class Zd {
      constructor(dd, Jd, kd) {
        this.stack = dd, this.pos = Jd, this.index = kd, this.buffer = dd.buffer, 0 == this.index && this.maybeNext()
      }
      static create(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.bufferBase + dd.buffer.length;
        return new Zd(dd, Jd, Jd - dd.bufferBase)
      }
      maybeNext() {
        let dd = this.stack.parent;
        null != dd && (this.index = this.stack.bufferBase - dd.bufferBase, this.stack = dd, this.buffer = dd.buffer)
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
        return new Zd(this.stack, this.pos, this.index)
      }
    }

    function gd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof dd) return dd;
      let kd = null;
      for (let pd = 0, Nd = 0; pd < dd.length;) {
        let Wd = 0;
        for (;;) {
          let Jd = dd.charCodeAt(pd++),
            kd = !1;
          if (126 == Jd) {
            Wd = 65535;
            break
          }
          Jd >= 92 && Jd--, Jd >= 34 && Jd--;
          let Nd = Jd - 32;
          if (Nd >= 46 && (Nd -= 46, kd = !0), Wd += Nd, kd) break;
          Wd *= 46
        }
        kd ? kd[Nd++] = Wd : kd = new Jd(Wd)
      }
      return kd
    }
    class Cd {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const Kd = new Cd;
    class od {
      constructor(dd, Jd) {
        this.input = dd, this.UO = Jd, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Kd, this.rangeIndex = 0, this.pos = this.chunkPos = Jd[0].from, this.range = Jd[0], this.end = Jd[Jd.length - 1].to, this.readNext()
      }
      resolveOffset(dd, Jd) {
        let kd = this.range,
          pd = this.rangeIndex,
          Nd = this.pos + dd;
        for (; Nd < kd.from;) {
          if (!pd) return null;
          let dd = this.UO[--pd];
          Nd -= kd.from - dd.to, kd = dd
        }
        for (; Jd < 0 ? Nd > kd.to : Nd >= kd.to;) {
          if (pd == this.UO.length - 1) return null;
          let dd = this.UO[++pd];
          Nd += dd.from - kd.to, kd = dd
        }
        return Nd
      }
      clipPos(dd) {
        if (dd >= this.range.from && dd < this.range.to) return dd;
        for (let Jd of this.UO)
          if (Jd.to > dd) return Math.max(dd, Jd.from);
        return this.end
      }
      peek(dd) {
        let Jd, kd, pd = this.chunkOff + dd;
        if (pd >= 0 && pd < this.chunk.length) Jd = this.pos + dd, kd = this.chunk.charCodeAt(pd);
        else {
          let pd = this.resolveOffset(dd, 1);
          if (null == pd) return -1;
          if (Jd = pd, Jd >= this.chunk2Pos && Jd < this.chunk2Pos + this.chunk2.length) kd = this.chunk2.charCodeAt(Jd - this.chunk2Pos);
          else {
            let dd = this.rangeIndex,
              pd = this.range;
            for (; pd.to <= Jd;) pd = this.UO[++dd];
            this.chunk2 = this.input.chunk(this.chunk2Pos = Jd), Jd + this.chunk2.length > pd.to && (this.chunk2 = this.chunk2.slice(0, pd.to - Jd)), kd = this.chunk2.charCodeAt(0)
          }
        }
        return Jd >= this.token.lookAhead && (this.token.lookAhead = Jd + 1), kd
      }
      acceptToken(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = Jd ? this.resolveOffset(Jd, -1) : this.pos;
        if (null == kd || kd < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = dd, this.token.end = kd
      }
      acceptTokenTo(dd, Jd) {
        this.token.value = dd, this.token.end = Jd
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: dd,
            chunkPos: Jd
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = dd, this.chunk2Pos = Jd, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let dd = this.input.chunk(this.pos),
            Jd = this.pos + dd.length;
          this.chunk = Jd > this.range.to ? dd.slice(0, this.range.to - this.pos) : dd, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += dd; this.pos + dd >= this.range.to;) {
          if (this.rangeIndex == this.UO.length - 1) return this.setDone();
          dd -= this.range.to - this.pos, this.range = this.UO[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += dd, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.UO[this.rangeIndex = this.UO.length - 1], this.chunk = "", this.next = -1
      }
      reset(dd, Jd) {
        if (Jd ? (this.token = Jd, Jd.start = dd, Jd.lookAhead = dd + 1, Jd.value = Jd.extended = -1) : this.token = Kd, this.pos != dd) {
          if (this.pos = dd, dd == this.end) return this.setDone(), this;
          for (; dd < this.range.from;) this.range = this.UO[--this.rangeIndex];
          for (; dd >= this.range.to;) this.range = this.UO[++this.rangeIndex];
          dd >= this.chunkPos && dd < this.chunkPos + this.chunk.length ? this.chunkOff = dd - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(dd, Jd) {
        if (dd >= this.chunkPos && Jd <= this.chunkPos + this.chunk.length) return this.chunk.slice(dd - this.chunkPos, Jd - this.chunkPos);
        if (dd >= this.chunk2Pos && Jd <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(dd - this.chunk2Pos, Jd - this.chunk2Pos);
        if (dd >= this.range.from && Jd <= this.range.to) return this.input.read(dd, Jd);
        let kd = "";
        for (let pd of this.UO) {
          if (pd.from >= Jd) break;
          pd.to > dd && (kd += this.input.read(Math.max(pd.from, dd), Math.min(pd.to, Jd)))
        }
        return kd
      }
    }
    class ld {
      constructor(dd, Jd) {
        this.data = dd, this.id = Jd
      }
      token(dd, Jd) {
        let {
          parser: kd
        } = Jd.p;
        Od(this.data, dd, Jd, this.id, kd.data, kd.tokenPrecTable)
      }
    }
    ld.prototype.contextual = ld.prototype.fallback = ld.prototype.extend = !1;
    class Qd {
      constructor(dd, Jd, kd) {
        this.precTable = Jd, this.elseToken = kd, this.data = "string" == typeof dd ? gd(dd) : dd
      }
      token(dd, Jd) {
        let kd = dd.pos,
          pd = 0;
        for (;;) {
          let kd = dd.next < 0,
            Nd = dd.resolveOffset(1, 1);
          if (Od(this.data, dd, Jd, 0, this.data, this.precTable), dd.token.value > -1) break;
          if (null == this.elseToken) return;
          if (kd || pd++, null == Nd) break;
          dd.reset(Nd, dd.token)
        }
        pd && (dd.reset(kd, dd.token), dd.acceptToken(this.elseToken, pd))
      }
    }
    Qd.prototype.contextual = ld.prototype.fallback = ld.prototype.extend = !1;
    class Ld {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = dd, this.contextual = !!Jd.contextual, this.fallback = !!Jd.fallback, this.extend = !!Jd.extend
      }
    }

    function Od(dd, Jd, kd, pd, Nd, Wd) {
      let Pd = 0,
        Zd = 1 << pd,
        {
          dialect: gd
        } = kd.p.parser;
      dd: for (; 0 != (Zd & dd[Pd]);) {
        let kd = dd[Pd + 1];
        for (let od = Pd + 3; od < kd; od += 2)
          if ((dd[od + 1] & Zd) > 0) {
            let kd = dd[od];
            if (gd.allows(kd) && (-1 == Jd.token.value || Jd.token.value == kd || Rd(kd, Jd.token.value, Nd, Wd))) {
              Jd.acceptToken(kd);
              break
            }
          } let pd = Jd.next,
          Cd = 0,
          Kd = dd[Pd + 2];
        if (!(Jd.next < 0 && Kd > Cd && 65535 == dd[kd + 3 * Kd - 3])) {
          for (; Cd < Kd;) {
            let Nd = Cd + Kd >> 1,
              Wd = kd + Nd + (Nd << 1),
              Zd = dd[Wd],
              gd = dd[Wd + 1] || 65536;
            if (pd < Zd) Kd = Nd;
            else {
              if (!(pd >= gd)) {
                Pd = dd[Wd + 2], Jd.advance();
                continue dd
              }
              Cd = Nd + 1
            }
          }
          break
        }
        Pd = dd[kd + 3 * Kd - 1]
      }
    }

    function ed(dd, Jd, kd) {
      for (let pd, Nd = Jd; 65535 != (pd = dd[Nd]); Nd++)
        if (pd == kd) return Nd - Jd;
      return -1
    }

    function Rd(dd, Jd, kd, pd) {
      let Nd = ed(kd, pd, Jd);
      return Nd < 0 || ed(kd, pd, dd) < Nd
    }
    const Id = "undefined" != typeof process && {
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
    let Gd = null;

    function vd(dd, Jd, kd) {
      let Nd = dd.cursor(pd.e.IncludeAnonymous);
      for (Nd.moveTo(Jd);;)
        if (!(kd < 0 ? Nd.childBefore(Jd) : Nd.childAfter(Jd)))
          for (;;) {
            if ((kd < 0 ? Nd.to < Jd : Nd.from > Jd) && !Nd.type.isError) return kd < 0 ? Math.max(0, Math.min(Nd.to - 1, Jd - 25)) : Math.min(dd.length, Math.max(Nd.from + 1, Jd + 25));
            if (kd < 0 ? Nd.prevSibling() : Nd.nextSibling()) break;
            if (!Nd.parent()) return kd < 0 ? 0 : dd.length
          }
    }
    class xd {
      constructor(dd, Jd) {
        this.fragments = dd, this.nodeSet = Jd, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let dd = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (dd) {
          for (this.safeFrom = dd.openStart ? vd(dd.tree, dd.from + dd.offset, 1) - dd.offset : dd.from, this.safeTo = dd.openEnd ? vd(dd.tree, dd.to + dd.offset, -1) - dd.offset : dd.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(dd.tree), this.start.push(-dd.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(dd) {
        if (dd < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= dd;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let Jd = this.trees.length - 1;
          if (Jd < 0) return this.nextFragment(), null;
          let kd = this.trees[Jd],
            Nd = this.index[Jd];
          if (Nd == kd.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let Wd = kd.children[Nd],
            Pd = this.start[Jd] + kd.positions[Nd];
          if (Pd > dd) return this.nextStart = Pd, null;
          if (Wd instanceof pd.s) {
            if (Pd == dd) {
              if (Pd < this.safeFrom) return null;
              let dd = Pd + Wd.length;
              if (dd <= this.safeTo) {
                let Jd = Wd.prop(pd.f.lookAhead);
                if (!Jd || dd + Jd < this.fragment.to) return Wd
              }
            }
            this.index[Jd]++, Pd + Wd.length >= Math.max(this.safeFrom, dd) && (this.trees.push(Wd), this.start.push(Pd), this.index.push(0))
          } else this.index[Jd]++, this.nextStart = Pd + Wd.length
        }
      }
    }
    class qd {
      constructor(dd, Jd) {
        this.stream = Jd, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = dd.tokenizers.map((dd => new Cd))
      }
      getActions(dd) {
        let Jd = 0,
          kd = null,
          {
            parser: pd
          } = dd.p,
          {
            tokenizers: Nd
          } = pd,
          Wd = pd.stateSlot(dd.state, 3),
          Pd = dd.curContext ? dd.curContext.hash : 0,
          Zd = 0;
        for (let gd = 0; gd < Nd.length; gd++) {
          if (0 == (1 << gd & Wd)) continue;
          let pd = Nd[gd],
            Cd = this.tokens[gd];
          if ((!kd || pd.fallback) && ((pd.contextual || Cd.start != dd.pos || Cd.mask != Wd || Cd.context != Pd) && (this.updateCachedToken(Cd, pd, dd), Cd.mask = Wd, Cd.context = Pd), Cd.lookAhead > Cd.end + 25 && (Zd = Math.max(Cd.lookAhead, Zd)), 0 != Cd.value)) {
            let Nd = Jd;
            if (Cd.extended > -1 && (Jd = this.addActions(dd, Cd.extended, Cd.end, Jd)), Jd = this.addActions(dd, Cd.value, Cd.end, Jd), !pd.extend && (kd = Cd, Jd > Nd)) break
          }
        }
        for (; this.actions.length > Jd;) this.actions.pop();
        return Zd && dd.setLookAhead(Zd), kd || dd.pos != this.stream.end || (kd = new Cd, kd.value = dd.p.parser.eofTerm, kd.start = kd.end = dd.pos, Jd = this.addActions(dd, kd.value, kd.end, Jd)), this.mainToken = kd, this.actions
      }
      getMainToken(dd) {
        if (this.mainToken) return this.mainToken;
        let Jd = new Cd,
          {
            pos: kd,
            p: pd
          } = dd;
        return Jd.start = kd, Jd.end = Math.min(kd + 1, pd.stream.end), Jd.value = kd == pd.stream.end ? pd.parser.eofTerm : 0, Jd
      }
      updateCachedToken(dd, Jd, kd) {
        let pd = this.stream.clipPos(kd.pos);
        if (Jd.token(this.stream.reset(pd, dd), kd), dd.value > -1) {
          let {
            parser: Jd
          } = kd.p;
          for (let pd = 0; pd < Jd.specialized.length; pd++)
            if (Jd.specialized[pd] == dd.value) {
              let Nd = Jd.specializers[pd](this.stream.read(dd.start, dd.end), kd);
              if (Nd >= 0 && kd.p.parser.dialect.allows(Nd >> 1)) {
                0 == (1 & Nd) ? dd.value = Nd >> 1 : dd.extended = Nd >> 1;
                break
              }
            }
        } else dd.value = 0, dd.end = this.stream.clipPos(pd + 1)
      }
      putAction(dd, Jd, kd, pd) {
        for (let Nd = 0; Nd < pd; Nd += 3)
          if (this.actions[Nd] == dd) return pd;
        return this.actions[pd++] = dd, this.actions[pd++] = Jd, this.actions[pd++] = kd, pd
      }
      addActions(dd, Jd, kd, pd) {
        let {
          state: Nd
        } = dd, {
          parser: Wd
        } = dd.p, {
          data: Pd
        } = Wd;
        for (let Zd = 0; Zd < 2; Zd++)
          for (let dd = Wd.stateSlot(Nd, Zd ? 2 : 1);; dd += 3) {
            if (65535 == Pd[dd]) {
              if (1 != Pd[dd + 1]) {
                0 == pd && 2 == Pd[dd + 1] && (pd = this.putAction(Yd(Pd, dd + 2), Jd, kd, pd));
                break
              }
              dd = Yd(Pd, dd + 2)
            }
            Pd[dd] == Jd && (pd = this.putAction(Yd(Pd, dd + 1), Jd, kd, pd))
          }
        return pd
      }
    }
    class Bd {
      constructor(dd, Jd, kd, pd) {
        this.parser = dd, this.input = Jd, this.UO = pd, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new od(Jd, pd), this.tokens = new qd(dd, this.stream), this.topTerm = dd.top[1];
        let {
          from: Wd
        } = pd[0];
        this.stacks = [Nd.start(this, dd.top[0], Wd)], this.fragments = kd.length && this.stream.end - Wd > 4 * dd.bufferLength ? new xd(kd, dd.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let dd, Jd, kd = this.stacks,
          pd = this.minStackPos,
          Nd = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == kd.length) {
          let [dd] = kd;
          for (; dd.forceReduce() && dd.stack.length && dd.stack[dd.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let Wd = 0; Wd < kd.length; Wd++) {
          let Pd = kd[Wd];
          for (;;) {
            if (this.tokens.mainToken = null, Pd.pos > pd) Nd.push(Pd);
            else {
              if (this.advanceStack(Pd, Nd, kd)) continue;
              {
                dd || (dd = [], Jd = []), dd.push(Pd);
                let kd = this.tokens.getMainToken(Pd);
                Jd.push(kd.value, kd.end)
              }
            }
            break
          }
        }
        if (!Nd.length) {
          let Jd = dd && function(dd) {
            let Jd = null;
            for (let kd of dd) {
              let dd = kd.p.stoppedAt;
              (kd.pos == kd.p.stream.end || null != dd && kd.pos > dd) && kd.p.parser.stateFlag(kd.state, 2) && (!Jd || Jd.score < kd.score) && (Jd = kd)
            }
            return Jd
          }(dd);
          if (Jd) return Id && console.log("Finish with " + this.stackID(Jd)), this.stackToTree(Jd);
          if (this.parser.strict) throw Id && dd && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + pd);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && dd) {
          let kd = null != this.stoppedAt && dd[0].pos > this.stoppedAt ? dd[0] : this.runRecovery(dd, Jd, Nd);
          if (kd) return Id && console.log("Force-finish " + this.stackID(kd)), this.stackToTree(kd.forceAll())
        }
        if (this.recovering) {
          let dd = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Nd.length > dd)
            for (Nd.sort(((dd, Jd) => Jd.score - dd.score)); Nd.length > dd;) Nd.pop();
          Nd.some((dd => dd.reducePos > pd)) && this.recovering--
        } else if (Nd.length > 1) {
          dd: for (let dd = 0; dd < Nd.length - 1; dd++) {
            let Jd = Nd[dd];
            for (let kd = dd + 1; kd < Nd.length; kd++) {
              let pd = Nd[kd];
              if (Jd.sameState(pd) || Jd.buffer.length > 500 && pd.buffer.length > 500) {
                if (!((Jd.score - pd.score || Jd.buffer.length - pd.buffer.length) > 0)) {
                  Nd.splice(dd--, 1);
                  continue dd
                }
                Nd.splice(kd--, 1)
              }
            }
          }
          Nd.length > 12 && (Nd.sort(((dd, Jd) => Jd.score - dd.score)), Nd.splice(12, Nd.length - 12))
        }
        this.minStackPos = Nd[0].pos;
        for (let Wd = 1; Wd < Nd.length; Wd++) Nd[Wd].pos < this.minStackPos && (this.minStackPos = Nd[Wd].pos);
        return null
      }
      stopAt(dd) {
        if (null != this.stoppedAt && this.stoppedAt < dd) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = dd
      }
      advanceStack(dd, Jd, kd) {
        let Nd = dd.pos,
          {
            parser: Wd
          } = this,
          Pd = Id ? this.stackID(dd) + " -> " : "";
        if (null != this.stoppedAt && Nd > this.stoppedAt) return dd.forceReduce() ? dd : null;
        if (this.fragments) {
          let Jd = dd.curContext && dd.curContext.tracker.strict,
            kd = Jd ? dd.curContext.hash : 0;
          for (let Zd = this.fragments.nodeAt(Nd); Zd;) {
            let Nd = this.parser.nodeSet.types[Zd.type.id] == Zd.type ? Wd.getGoto(dd.state, Zd.type.id) : -1;
            if (Nd > -1 && Zd.length && (!Jd || (Zd.prop(pd.f.contextHash) || 0) == kd)) return dd.useNode(Zd, Nd), Id && console.log(Pd + this.stackID(dd) + ` (via reuse of ${Wd.getName(Zd.type.id)})`), !0;
            if (!(Zd instanceof pd.s) || 0 == Zd.children.length || Zd.positions[0] > 0) break;
            let gd = Zd.children[0];
            if (!(gd instanceof pd.s && 0 == Zd.positions[0])) break;
            Zd = gd
          }
        }
        let Zd = Wd.stateSlot(dd.state, 4);
        if (Zd > 0) return dd.reduce(Zd), Id && console.log(Pd + this.stackID(dd) + ` (via always-reduce ${Wd.getName(65535&Zd)})`), !0;
        if (dd.stack.length >= 8400)
          for (; dd.stack.length > 6e3 && dd.forceReduce(););
        let gd = this.tokens.getActions(dd);
        for (let pd = 0; pd < gd.length;) {
          let Zd = gd[pd++],
            Cd = gd[pd++],
            Kd = gd[pd++],
            od = pd == gd.length || !kd,
            ld = od ? dd : dd.split(),
            Qd = this.tokens.mainToken;
          if (ld.apply(Zd, Cd, Qd ? Qd.start : ld.pos, Kd), Id && console.log(Pd + this.stackID(ld) + ` (via ${0==(65536&Zd)?"shift":`reduce of ${Wd.getName(65535&Zd)}`} for ${Wd.getName(Cd)} @ ${Nd}${ld==dd?"":", split"})`), od) return !0;
          ld.pos > Nd ? Jd.push(ld) : kd.push(ld)
        }
        return !1
      }
      advanceFully(dd, Jd) {
        let kd = dd.pos;
        for (;;) {
          if (!this.advanceStack(dd, null, null)) return !1;
          if (dd.pos > kd) return sd(dd, Jd), !0
        }
      }
      runRecovery(dd, Jd, kd) {
        let pd = null,
          Nd = !1;
        for (let Wd = 0; Wd < dd.length; Wd++) {
          let Pd = dd[Wd],
            Zd = Jd[Wd << 1],
            gd = Jd[1 + (Wd << 1)],
            Cd = Id ? this.stackID(Pd) + " -> " : "";
          if (Pd.deadEnd) {
            if (Nd) continue;
            if (Nd = !0, Pd.restart(), Id && console.log(Cd + this.stackID(Pd) + " (restarted)"), this.advanceFully(Pd, kd)) continue
          }
          let Kd = Pd.split(),
            od = Cd;
          for (let dd = 0; dd < 10 && Kd.forceReduce(); dd++) {
            if (Id && console.log(od + this.stackID(Kd) + " (via force-reduce)"), this.advanceFully(Kd, kd)) break;
            Id && (od = this.stackID(Kd) + " -> ")
          }
          for (let dd of Pd.recoverByInsert(Zd)) Id && console.log(Cd + this.stackID(dd) + " (via recover-insert)"), this.advanceFully(dd, kd);
          this.stream.end > Pd.pos ? (gd == Pd.pos && (gd++, Zd = 0), Pd.recoverByDelete(Zd, gd), Id && console.log(Cd + this.stackID(Pd) + ` (via recover-delete ${this.parser.getName(Zd)})`), sd(Pd, kd)) : (!pd || pd.score < Kd.score) && (pd = Kd)
        }
        return pd
      }
      stackToTree(dd) {
        return dd.close(), pd.s.build({
          buffer: Zd.create(dd),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.UO[0].from,
          length: dd.pos - this.UO[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(dd) {
        let Jd = (Gd || (Gd = new WeakMap)).get(dd);
        return Jd || Gd.set(dd, Jd = String.fromCodePoint(this.nextStackID++)), Jd + dd
      }
    }

    function sd(dd, Jd) {
      for (let kd = 0; kd < Jd.length; kd++) {
        let pd = Jd[kd];
        if (pd.pos == dd.pos && pd.sameState(dd)) return void(Jd[kd].score < dd.score && (Jd[kd] = dd))
      }
      Jd.push(dd)
    }
    class ad {
      constructor(dd, Jd, kd) {
        this.source = dd, this.flags = Jd, this.disabled = kd
      }
      allows(dd) {
        return !this.disabled || 0 == this.disabled[dd]
      }
    }
    const Md = dd => dd;
    class Fd extends pd.o {
      constructor(dd) {
        if (super(), this.wrappers = [], 14 != dd.version) throw new RangeError(`Parser version (${dd.version}) doesn't match runtime version (14)`);
        let Jd = dd.nodeNames.split(" ");
        this.minRepeatTerm = Jd.length;
        for (let pd = 0; pd < dd.repeatNodeCount; pd++) Jd.push("");
        let kd = Object.keys(dd.topRules).map((Jd => dd.topRules[Jd][1])),
          Nd = [];
        for (let pd = 0; pd < Jd.length; pd++) Nd.push([]);

        function Wd(dd, Jd, kd) {
          Nd[dd].push([Jd, Jd.deserialize(String(kd))])
        }
        if (dd.nodeProps)
          for (let Zd of dd.nodeProps) {
            let dd = Zd[0];
            "string" == typeof dd && (dd = pd.f[dd]);
            for (let Jd = 1; Jd < Zd.length;) {
              let kd = Zd[Jd++];
              if (kd >= 0) Wd(kd, dd, Zd[Jd++]);
              else {
                let pd = Zd[Jd + -kd];
                for (let Nd = -kd; Nd > 0; Nd--) Wd(Zd[Jd++], dd, pd);
                Jd++
              }
            }
          }
        this.nodeSet = new pd.g(Jd.map(((Jd, Wd) => pd.i.define({
          name: Wd >= this.minRepeatTerm ? void 0 : Jd,
          id: Wd,
          props: Nd[Wd],
          top: kd.indexOf(Wd) > -1,
          error: 0 == Wd,
          skipped: dd.skippedNodes && dd.skippedNodes.indexOf(Wd) > -1
        })))), dd.propSources && (this.nodeSet = this.nodeSet.extend(...dd.propSources)), this.strict = !1, this.bufferLength = pd.c;
        let Pd = gd(dd.tokenData);
        this.context = dd.context, this.specializerSpecs = dd.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let pd = 0; pd < this.specializerSpecs.length; pd++) this.specialized[pd] = this.specializerSpecs[pd].term;
        this.specializers = this.specializerSpecs.map(md), this.states = gd(dd.states, Uint32Array), this.data = gd(dd.stateData), this.goto = gd(dd.goto), this.maxTerm = dd.maxTerm, this.tokenizers = dd.tokenizers.map((dd => "number" == typeof dd ? new ld(Pd, dd) : dd)), this.topRules = dd.topRules, this.dialects = dd.dialects || {}, this.dynamicPrecedences = dd.dynamicPrecedences || null, this.tokenPrecTable = dd.tokenPrec, this.termNames = dd.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(dd, Jd, kd) {
        let pd = new Bd(this, dd, Jd, kd);
        for (let Nd of this.wrappers) pd = Nd(pd, dd, Jd, kd);
        return pd
      }
      getGoto(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = this.goto;
        if (Jd >= pd[0]) return -1;
        for (let Nd = pd[Jd + 1];;) {
          let Jd = pd[Nd++],
            Wd = 1 & Jd,
            Pd = pd[Nd++];
          if (Wd && kd) return Pd;
          for (let kd = Nd + (Jd >> 1); Nd < kd; Nd++)
            if (pd[Nd] == dd) return Pd;
          if (Wd) return -1
        }
      }
      hasAction(dd, Jd) {
        let kd = this.data;
        for (let pd = 0; pd < 2; pd++)
          for (let Nd, Wd = this.stateSlot(dd, pd ? 2 : 1);; Wd += 3) {
            if (65535 == (Nd = kd[Wd])) {
              if (1 != kd[Wd + 1]) {
                if (2 == kd[Wd + 1]) return Yd(kd, Wd + 2);
                break
              }
              Nd = kd[Wd = Yd(kd, Wd + 2)]
            }
            if (Nd == Jd || 0 == Nd) return Yd(kd, Wd + 1)
          }
        return 0
      }
      stateSlot(dd, Jd) {
        return this.states[6 * dd + Jd]
      }
      stateFlag(dd, Jd) {
        return (this.stateSlot(dd, 0) & Jd) > 0
      }
      validAction(dd, Jd) {
        return !!this.allActions(dd, (dd => dd == Jd || null))
      }
      allActions(dd, Jd) {
        let kd = this.stateSlot(dd, 4),
          pd = kd ? Jd(kd) : void 0;
        for (let Nd = this.stateSlot(dd, 1); null == pd; Nd += 3) {
          if (65535 == this.data[Nd]) {
            if (1 != this.data[Nd + 1]) break;
            Nd = Yd(this.data, Nd + 2)
          }
          pd = Jd(Yd(this.data, Nd + 1))
        }
        return pd
      }
      nextStates(dd) {
        let Jd = [];
        for (let kd = this.stateSlot(dd, 1);; kd += 3) {
          if (65535 == this.data[kd]) {
            if (1 != this.data[kd + 1]) break;
            kd = Yd(this.data, kd + 2)
          }
          if (0 == (1 & this.data[kd + 2])) {
            let dd = this.data[kd + 1];
            Jd.some(((Jd, kd) => 1 & kd && Jd == dd)) || Jd.push(this.data[kd], dd)
          }
        }
        return Jd
      }
      configure(dd) {
        let Jd = Object.assign(Object.create(Fd.prototype), this);
        if (dd.props && (Jd.nodeSet = this.nodeSet.extend(...dd.props)), dd.top) {
          let kd = this.topRules[dd.top];
          if (!kd) throw new RangeError(`Invalid top rule name ${dd.top}`);
          Jd.top = kd
        }
        return dd.tokenizers && (Jd.tokenizers = this.tokenizers.map((Jd => {
          let kd = dd.tokenizers.find((dd => dd.from == Jd));
          return kd ? kd.to : Jd
        }))), dd.specializers && (Jd.specializers = this.specializers.slice(), Jd.specializerSpecs = this.specializerSpecs.map(((kd, pd) => {
          let Nd = dd.specializers.find((dd => dd.from == kd.external));
          if (!Nd) return kd;
          let Wd = Object.assign(Object.assign({}, kd), {
            external: Nd.to
          });
          return Jd.specializers[pd] = md(Wd), Wd
        }))), dd.contextTracker && (Jd.context = dd.contextTracker), dd.dialect && (Jd.dialect = this.parseDialect(dd.dialect)), null != dd.strict && (Jd.strict = dd.strict), dd.wrap && (Jd.wrappers = Jd.wrappers.concat(dd.wrap)), null != dd.bufferLength && (Jd.bufferLength = dd.bufferLength), Jd
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(dd) {
        return this.termNames ? this.termNames[dd] : String(dd <= this.maxNode && this.nodeSet.types[dd].name || dd)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(dd) {
        let Jd = this.dynamicPrecedences;
        return null == Jd ? 0 : Jd[dd] || 0
      }
      parseDialect(dd) {
        let Jd = Object.keys(this.dialects),
          kd = Jd.map((() => !1));
        if (dd)
          for (let Nd of dd.split(" ")) {
            let dd = Jd.indexOf(Nd);
            dd >= 0 && (kd[dd] = !0)
          }
        let pd = null;
        for (let Nd = 0; Nd < Jd.length; Nd++)
          if (!kd[Nd])
            for (let dd, kd = this.dialects[Jd[Nd]]; 65535 != (dd = this.data[kd++]);)(pd || (pd = new Uint8Array(this.maxTerm + 1)))[dd] = 1;
        return new ad(dd, kd, pd)
      }
      static deserialize(dd) {
        return new Fd(dd)
      }
    }

    function Yd(dd, Jd) {
      return dd[Jd] | dd[Jd + 1] << 16
    }

    function md(dd) {
      if (dd.external) {
        let Jd = dd.extend ? 1 : 0;
        return (kd, pd) => dd.external(kd, pd) << 1 | Jd
      }
      return dd.get
    }
    var bd = kd(41314);
    const Sd = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      jd = new class {
        constructor(dd) {
          this.start = dd.start, this.shift = dd.shift || Md, this.reduce = dd.reduce || Md, this.reuse = dd.reuse || Md, this.hash = dd.hash || (() => 0), this.strict = !1 !== dd.strict
        }
      }({
        start: !1,
        shift: (dd, Jd) => 5 == Jd || 6 == Jd || 320 == Jd ? dd : 321 == Jd,
        strict: !1
      }),
      Xd = new Ld(((dd, Jd) => {
        let {
          next: kd
        } = dd;
        (125 == kd || -1 == kd || Jd.context) && dd.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      fd = new Ld(((dd, Jd) => {
        let kd, {
          next: pd
        } = dd;
        Sd.indexOf(pd) > -1 || (47 != pd || 47 != (kd = dd.peek(1)) && 42 != kd) && (125 == pd || 59 == pd || -1 == pd || Jd.context || dd.acceptToken(316))
      }), {
        contextual: !0
      }),
      nd = new Ld(((dd, Jd) => {
        91 != dd.next || Jd.context || dd.acceptToken(317)
      }), {
        contextual: !0
      }),
      Ud = new Ld(((dd, Jd) => {
        let {
          next: kd
        } = dd;
        if (43 == kd || 45 == kd) {
          if (dd.advance(), kd == dd.next) {
            dd.advance();
            let kd = !Jd.context && Jd.canShift(1);
            dd.acceptToken(kd ? 1 : 2)
          }
        } else 63 == kd && 46 == dd.peek(1) && (dd.advance(), dd.advance(), (dd.next < 48 || dd.next > 57) && dd.acceptToken(3))
      }), {
        contextual: !0
      });

    function yd(dd, Jd) {
      return dd >= 65 && dd <= 90 || dd >= 97 && dd <= 122 || 95 == dd || dd >= 192 || !Jd && dd >= 48 && dd <= 57
    }
    const Dd = new Ld(((dd, Jd) => {
        if (60 != dd.next || !Jd.dialectEnabled(0)) return;
        if (dd.advance(), 47 == dd.next) return;
        let kd = 0;
        for (; Sd.indexOf(dd.next) > -1;) dd.advance(), kd++;
        if (yd(dd.next, !0)) {
          for (dd.advance(), kd++; yd(dd.next, !1);) dd.advance(), kd++;
          for (; Sd.indexOf(dd.next) > -1;) dd.advance(), kd++;
          if (44 == dd.next) return;
          for (let Jd = 0;; Jd++) {
            if (7 == Jd) {
              if (!yd(dd.next, !0)) return;
              break
            }
            if (dd.next != "extends".charCodeAt(Jd)) break;
            dd.advance(), kd++
          }
        }
        dd.acceptToken(4, -kd)
      })),
      Td = (0, bd.i)({
        "get set async static": bd.m.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": bd.m.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": bd.m.operatorKeyword,
        "let var const using function class extends": bd.m.definitionKeyword,
        "import export from": bd.m.moduleKeyword,
        "with debugger new": bd.m.keyword,
        TemplateString: bd.m.special(bd.m.string),
        super: bd.m.atom,
        BooleanLiteral: bd.m.bool,
        this: bd.m.self,
        null: bd.m.null,
        Star: bd.m.modifier,
        VariableName: bd.m.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": bd.m.function(bd.m.variableName),
        VariableDefinition: bd.m.definition(bd.m.variableName),
        Label: bd.m.labelName,
        PropertyName: bd.m.propertyName,
        PrivatePropertyName: bd.m.special(bd.m.propertyName),
        "CallExpression/MemberExpression/PropertyName": bd.m.function(bd.m.propertyName),
        "FunctionDeclaration/VariableDefinition": bd.m.function(bd.m.definition(bd.m.variableName)),
        "ClassDeclaration/VariableDefinition": bd.m.definition(bd.m.className),
        "NewExpression/VariableName": bd.m.className,
        PropertyDefinition: bd.m.definition(bd.m.propertyName),
        PrivatePropertyDefinition: bd.m.definition(bd.m.special(bd.m.propertyName)),
        UpdateOp: bd.m.updateOperator,
        "LineComment Hashbang": bd.m.lineComment,
        BlockComment: bd.m.blockComment,
        Number: bd.m.number,
        String: bd.m.string,
        Escape: bd.m.escape,
        ArithOp: bd.m.arithmeticOperator,
        LogicOp: bd.m.logicOperator,
        BitOp: bd.m.bitwiseOperator,
        CompareOp: bd.m.compareOperator,
        RegExp: bd.m.regexp,
        Equals: bd.m.definitionOperator,
        Arrow: bd.m.function(bd.m.punctuation),
        ": Spread": bd.m.punctuation,
        "( )": bd.m.paren,
        "[ ]": bd.m.squareBracket,
        "{ }": bd.m.brace,
        "InterpolationStart InterpolationEnd": bd.m.special(bd.m.brace),
        ".": bd.m.derefOperator,
        ", ;": bd.m.separator,
        "@": bd.m.meta,
        TypeName: bd.m.typeName,
        TypeDefinition: bd.m.definition(bd.m.typeName),
        "type enum interface implements namespace module declare": bd.m.definitionKeyword,
        "abstract global Privacy readonly override": bd.m.modifier,
        "is keyof unique infer asserts": bd.m.operatorKeyword,
        JSXAttributeValue: bd.m.attributeValue,
        JSXText: bd.m.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": bd.m.angleBracket,
        "JSXIdentifier JSXNameSpacedName": bd.m.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": bd.m.attributeName,
        "JSXBuiltin/JSXIdentifier": bd.m.standard(bd.m.tagName)
      }),
      Ed = {
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
      cd = {
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
      hd = {
        __proto__: null,
        "<": 193
      },
      rd = Fd.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: jd,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [Td],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [fd, nd, Ud, Dd, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Xd, new Qd("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new Qd("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: dd => Ed[dd] || -1
        }, {
          term: 343,
          get: dd => cd[dd] || -1
        }, {
          term: 95,
          get: dd => hd[dd] || -1
        }],
        tokenPrec: 15201
      });
    var ud = kd(41303),
      td = kd(41273),
      Vd = kd(41282),
      zd = kd(41267);
    const Hd = [(0, zd.x)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, zd.x)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, zd.x)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, zd.x)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, zd.x)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, zd.x)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, zd.x)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, zd.x)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, zd.x)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, zd.x)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, zd.x)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      wd = Hd.concat([(0, zd.x)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, zd.x)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, zd.x)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      Ad = new pd.m,
      dJ = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function JJ(dd) {
      return (Jd, kd) => {
        let pd = Jd.node.getChild("VariableDefinition");
        return pd && kd(pd, dd), !0
      }
    }
    const kJ = ["FunctionDeclaration"],
      pJ = {
        FunctionDeclaration: JJ("function"),
        ClassDeclaration: JJ("class"),
        ClassExpression: () => !0,
        EnumDeclaration: JJ("constant"),
        TypeAliasDeclaration: JJ("type"),
        NamespaceDeclaration: JJ("namespace"),
        VariableDefinition(dd, Jd) {
          dd.matchContext(kJ) || Jd(dd, "variable")
        },
        TypeDefinition(dd, Jd) {
          Jd(dd, "type")
        },
        __proto__: null
      };

    function NJ(dd, Jd) {
      let kd = Ad.get(Jd);
      if (kd) return kd;
      let Nd = [],
        Wd = !0;

      function Pd(Jd, kd) {
        let pd = dd.sliceString(Jd.from, Jd.to);
        Nd.push({
          label: pd,
          type: kd
        })
      }
      return Jd.cursor(pd.e.IncludeAnonymous).iterate((Jd => {
        if (Wd) Wd = !1;
        else if (Jd.name) {
          let dd = pJ[Jd.name];
          if (dd && dd(Jd, Pd) || dJ.has(Jd.name)) return !1
        } else if (Jd.to - Jd.from > 8192) {
          for (let kd of NJ(dd, Jd.node)) Nd.push(kd);
          return !1
        }
      })), Ad.set(Jd, Nd), Nd
    }
    const WJ = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      PJ = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function ZJ(dd) {
      let Jd = (0, ud.gb)(dd.state).resolveInner(dd.pos, -1);
      if (PJ.indexOf(Jd.name) > -1) return null;
      let kd = "VariableName" == Jd.name || Jd.to - Jd.from < 20 && WJ.test(dd.state.sliceDoc(Jd.from, Jd.to));
      if (!kd && !dd.explicit) return null;
      let pd = [];
      for (let Nd = Jd; Nd; Nd = Nd.parent) dJ.has(Nd.name) && (pd = pd.concat(NJ(dd.state.doc, Nd)));
      return {
        options: pd,
        from: kd ? Jd.from : dd.pos,
        validFor: WJ
      }
    }
    const gJ = ud.i.define({
        name: "javascript",
        parser: rd.configure({
          props: [ud.U.add({
            IfStatement: (0, ud.r)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, ud.r)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: ud.z,
            SwitchBody: dd => {
              let Jd = dd.textAfter,
                kd = /^\s*\}/.test(Jd),
                pd = /^\s*(case|default)\b/.test(Jd);
              return dd.baseIndent + (kd ? 0 : pd ? 1 : 2) * dd.unit
            },
            Block: (0, ud.y)({
              closing: "}"
            }),
            ArrowFunction: dd => dd.baseIndent + dd.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, ud.r)({
              except: /^\s*{/
            }),
            JSXElement(dd) {
              let Jd = /^\s*<\//.test(dd.textAfter);
              return dd.lineIndent(dd.node.from) + (Jd ? 0 : dd.unit)
            },
            JSXEscape(dd) {
              let Jd = /\s*\}/.test(dd.textAfter);
              return dd.lineIndent(dd.node.from) + (Jd ? 0 : dd.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": dd => dd.column(dd.node.from) + dd.unit
          }), ud.I.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": ud.C,
            BlockComment: dd => ({
              from: dd.from + 2,
              to: dd.to - 2
            }),
            JSXElement(dd) {
              let Jd = dd.firstChild;
              if (!Jd || "JSXSelfClosingTag" == Jd.name) return null;
              let kd = dd.lastChild;
              return {
                from: Jd.to,
                to: kd.type.isError ? dd.to : kd.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(dd) {
              var Jd;
              let kd = null === (Jd = dd.firstChild) || void 0 === Jd ? void 0 : Jd.nextSibling,
                pd = dd.lastChild;
              return !kd || kd.type.isError ? null : {
                from: kd.to,
                to: pd.type.isError ? dd.to : pd.from
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
      CJ = {
        test: dd => /^JSX/.test(dd.name),
        facet: (0, ud.w)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      KJ = gJ.configure({
        dialect: "ts"
      }, "typescript"),
      oJ = gJ.configure({
        dialect: "jsx",
        props: [ud.ab.add((dd => dd.isTop ? [CJ] : void 0))]
      }),
      lJ = gJ.configure({
        dialect: "jsx ts",
        props: [ud.ab.add((dd => dd.isTop ? [CJ] : void 0))]
      }, "typescript");
    let QJ = dd => ({
      label: dd,
      type: "keyword"
    });
    const LJ = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(QJ),
      OJ = LJ.concat(["declare", "implements", "private", "protected", "public"].map(QJ));

    function eJ() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Jd = dd.jsx ? dd.typescript ? lJ : oJ : dd.typescript ? KJ : gJ,
        kd = dd.typescript ? wd.concat(OJ) : Hd.concat(LJ);
      return new ud.m(Jd, [gJ.data.of({
        autocomplete: (0, zd.t)(PJ, (0, zd.o)(kd))
      }), gJ.data.of({
        autocomplete: ZJ
      }), dd.jsx ? GJ : []])
    }

    function RJ(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd.length;
      for (let pd = null === Jd || void 0 === Jd ? void 0 : Jd.firstChild; pd; pd = pd.nextSibling)
        if ("JSXIdentifier" == pd.name || "JSXBuiltin" == pd.name || "JSXNamespacedName" == pd.name || "JSXMemberExpression" == pd.name) return dd.sliceString(pd.from, Math.min(pd.to, kd));
      return ""
    }
    const IJ = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      GJ = Vd.i.inputHandler.of(((dd, Jd, kd, pd, Nd) => {
        if ((IJ ? dd.composing : dd.compositionStarted) || dd.state.readOnly || Jd != kd || ">" != pd && "/" != pd || !gJ.isActiveAt(dd.state, Jd, -1)) return !1;
        let Wd = Nd(),
          {
            state: Pd
          } = Wd,
          Zd = Pd.changeByRange((dd => {
            var Jd;
            let kd, {
                head: Nd
              } = dd,
              Wd = (0, ud.gb)(Pd).resolveInner(Nd - 1, -1);
            if ("JSXStartTag" == Wd.name && (Wd = Wd.parent), Pd.doc.sliceString(Nd - 1, Nd) != pd || "JSXAttributeValue" == Wd.name && Wd.to > Nd);
            else {
              if (">" == pd && "JSXFragmentTag" == Wd.name) return {
                range: dd,
                changes: {
                  from: Nd,
                  insert: "</>"
                }
              };
              if ("/" == pd && "JSXStartCloseTag" == Wd.name) {
                let dd = Wd.parent,
                  pd = dd.parent;
                if (pd && dd.from == Nd - 2 && ((kd = RJ(Pd.doc, pd.firstChild, Nd)) || "JSXFragmentTag" == (null === (Jd = pd.firstChild) || void 0 === Jd ? void 0 : Jd.name))) {
                  let dd = `${kd}>`;
                  return {
                    range: td.k.cursor(Nd + dd.length, -1),
                    changes: {
                      from: Nd,
                      insert: dd
                    }
                  }
                }
              } else if (">" == pd) {
                let Jd = function(dd) {
                  for (;;) {
                    if ("JSXOpenTag" == dd.name || "JSXSelfClosingTag" == dd.name || "JSXFragmentTag" == dd.name) return dd;
                    if ("JSXEscape" == dd.name || !dd.parent) return null;
                    dd = dd.parent
                  }
                }(Wd);
                if (Jd && "JSXOpenTag" == Jd.name && !/^\/?>|^<\//.test(Pd.doc.sliceString(Nd, Nd + 2)) && (kd = RJ(Pd.doc, Jd, Nd))) return {
                  range: dd,
                  changes: {
                    from: Nd,
                    insert: `</${kd}>`
                  }
                }
              }
            }
            return {
              range: dd
            }
          }));
        return !Zd.changes.empty && (dd.dispatch([Wd, Pd.update(Zd, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41303: (dd, Jd, kd) => {
    kd.d(Jd, {
      $: () => cJ,
      B: () => GJ,
      C: () => Hd,
      F: () => KJ,
      I: () => zd,
      J: () => Rd,
      N: () => bd,
      Q: () => jd,
      U: () => fd,
      V: () => td,
      X: () => Sd,
      Y: () => md,
      ab: () => od,
      c: () => xJ,
      db: () => iJ,
      e: () => Xd,
      eb: () => ed,
      gb: () => Od,
      i: () => Ld,
      m: () => Fd,
      n: () => yJ,
      r: () => rd,
      s: () => FJ,
      w: () => Kd,
      y: () => Ed,
      z: () => hd
    });
    var pd, Nd = kd(41306),
      Wd = kd(41273),
      Pd = kd(41282),
      Zd = kd(41314),
      gd = kd(41289);
    const Cd = new Nd.f;

    function Kd(dd) {
      return Wd.o.define({
        combine: dd ? Jd => Jd.concat(dd) : void 0
      })
    }
    const od = new Nd.f;
    class ld {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = dd, this.name = pd, Wd.l.prototype.hasOwnProperty("tree") || Object.defineProperty(Wd.l.prototype, "tree", {
          get() {
            return Od(this)
          }
        }), this.parser = Jd, this.extension = [Md.of(this), Wd.l.languageData.of(((dd, Jd, kd) => {
          let pd = Qd(dd, Jd, kd),
            Nd = pd.type.prop(Cd);
          if (!Nd) return [];
          let Wd = dd.facet(Nd),
            Pd = pd.type.prop(od);
          if (Pd) {
            let Nd = pd.resolve(Jd - pd.from, kd);
            for (let Jd of Pd)
              if (Jd.test(Nd, dd)) {
                let kd = dd.facet(Jd.facet);
                return "replace" == Jd.type ? kd : kd.concat(Wd)
              }
          }
          return Wd
        }))].concat(kd)
      }
      isActiveAt(dd, Jd) {
        return Qd(dd, Jd, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Cd) == this.data
      }
      findRegions(dd) {
        let Jd = dd.facet(Md);
        if ((null === Jd || void 0 === Jd ? void 0 : Jd.data) == this.data) return [{
          from: 0,
          to: dd.doc.length
        }];
        if (!Jd || !Jd.allowsNesting) return [];
        let kd = [],
          pd = (dd, Jd) => {
            if (dd.prop(Cd) == this.data) return void kd.push({
              from: Jd,
              to: Jd + dd.length
            });
            let Wd = dd.prop(Nd.f.mounted);
            if (Wd) {
              if (Wd.tree.prop(Cd) == this.data) {
                if (Wd.overlay)
                  for (let dd of Wd.overlay) kd.push({
                    from: dd.from + Jd,
                    to: dd.to + Jd
                  });
                else kd.push({
                  from: Jd,
                  to: Jd + dd.length
                });
                return
              }
              if (Wd.overlay) {
                let dd = kd.length;
                if (pd(Wd.tree, Wd.overlay[0].from + Jd), kd.length > dd) return
              }
            }
            for (let kd = 0; kd < dd.children.length; kd++) {
              let Wd = dd.children[kd];
              Wd instanceof Nd.s && pd(Wd, dd.positions[kd] + Jd)
            }
          };
        return pd(Od(dd), 0), kd
      }
      get allowsNesting() {
        return !0
      }
    }

    function Qd(dd, Jd, kd) {
      let pd = dd.facet(Md),
        Wd = Od(dd).topNode;
      if (!pd || pd.allowsNesting)
        for (let Pd = Wd; Pd; Pd = Pd.enter(Jd, kd, Nd.e.ExcludeBuffers | Nd.e.EnterBracketed)) Pd.type.isTop && (Wd = Pd);
      return Wd
    }
    ld.setState = Wd.C.define();
    class Ld extends ld {
      constructor(dd, Jd, kd) {
        super(dd, Jd, [], kd), this.parser = Jd
      }
      static define(dd) {
        let Jd = Kd(dd.languageData);
        return new Ld(Jd, dd.parser.configure({
          props: [Cd.add((dd => dd.isTop ? Jd : void 0))]
        }), dd.name)
      }
      configure(dd, Jd) {
        return new Ld(this.data, this.parser.configure(dd), Jd || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Od(dd) {
      let Jd = dd.field(ld.state, !1);
      return Jd ? Jd.tree : Nd.s.empty
    }

    function ed(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.doc.length;
      var kd;
      return (null === (kd = dd.field(ld.state, !1)) || void 0 === kd ? void 0 : kd.context.isDone(Jd)) || !1
    }

    function Rd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.viewport.to,
        kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        pd = function(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var pd;
          let Nd = null === (pd = dd.field(ld.state, !1)) || void 0 === pd ? void 0 : pd.context;
          if (!Nd) return null;
          let Wd = Nd.viewport;
          Nd.updateViewport({
            from: 0,
            to: Jd
          });
          let Pd = Nd.isDone(Jd) || Nd.work(kd, Jd) ? Nd.tree : null;
          return Nd.updateViewport(Wd), Pd
        }(dd.state, Jd, kd);
      return pd != Od(dd.state) && dd.dispatch({}), !!pd
    }
    class Id {
      constructor(dd) {
        this.doc = dd, this.cursorPos = 0, this.string = "", this.cursor = dd.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(dd) {
        return this.string = this.cursor.next(dd - this.cursorPos).value, this.cursorPos = dd + this.string.length, this.cursorPos - this.string.length
      }
      chunk(dd) {
        return this.syncTo(dd), this.string
      }
      get lineChunks() {
        return !0
      }
      read(dd, Jd) {
        let kd = this.cursorPos - this.string.length;
        return dd < kd || Jd >= this.cursorPos ? this.doc.sliceString(dd, Jd) : this.string.slice(dd - kd, Jd - kd)
      }
    }
    let Gd = null;
    class vd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          pd = arguments.length > 3 ? arguments[3] : void 0,
          Nd = arguments.length > 4 ? arguments[4] : void 0,
          Wd = arguments.length > 5 ? arguments[5] : void 0,
          Pd = arguments.length > 6 ? arguments[6] : void 0,
          Zd = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = dd, this.state = Jd, this.fragments = kd, this.tree = pd, this.treeLen = Nd, this.viewport = Wd, this.skipped = Pd, this.scheduleOn = Zd, this.parse = null, this.tempSkipped = []
      }
      static create(dd, Jd, kd) {
        return new vd(dd, Jd, [], Nd.s.empty, 0, kd, [], null)
      }
      startParse() {
        return this.parser.startParse(new Id(this.state.doc), this.fragments)
      }
      work(dd, Jd) {
        return null != Jd && Jd >= this.state.doc.length && (Jd = void 0), this.tree != Nd.s.empty && this.isDone(null !== Jd && void 0 !== Jd ? Jd : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var kd;
          if ("number" == typeof dd) {
            let Jd = Date.now() + dd;
            dd = () => Date.now() > Jd
          }
          for (this.parse || (this.parse = this.startParse()), null != Jd && (null == this.parse.stoppedAt || this.parse.stoppedAt > Jd) && Jd < this.state.doc.length && this.parse.stopAt(Jd);;) {
            let pd = this.parse.advance();
            if (pd) {
              if (this.fragments = this.withoutTempSkipped(Nd.q.addTree(pd, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (kd = this.parse.stoppedAt) && void 0 !== kd ? kd : this.state.doc.length, this.tree = pd, this.parse = null, !(this.treeLen < (null !== Jd && void 0 !== Jd ? Jd : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (dd()) return !1
          }
        }))
      }
      takeTree() {
        let dd, Jd;
        this.parse && (dd = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > dd) && this.parse.stopAt(dd), this.withContext((() => {
          for (; !(Jd = this.parse.advance()););
        })), this.treeLen = dd, this.tree = Jd, this.fragments = this.withoutTempSkipped(Nd.q.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(dd) {
        let Jd = Gd;
        Gd = this;
        try {
          return dd()
        } finally {
          Gd = Jd
        }
      }
      withoutTempSkipped(dd) {
        for (let Jd; Jd = this.tempSkipped.pop();) dd = xd(dd, Jd.from, Jd.to);
        return dd
      }
      changes(dd, Jd) {
        let {
          fragments: kd,
          tree: pd,
          treeLen: Wd,
          viewport: Pd,
          skipped: Zd
        } = this;
        if (this.takeTree(), !dd.empty) {
          let Jd = [];
          if (dd.iterChangedRanges(((dd, kd, pd, Nd) => Jd.push({
              fromA: dd,
              toA: kd,
              fromB: pd,
              toB: Nd
            }))), kd = Nd.q.applyChanges(kd, Jd), pd = Nd.s.empty, Wd = 0, Pd = {
              from: dd.mapPos(Pd.from, -1),
              to: dd.mapPos(Pd.to, 1)
            }, this.skipped.length) {
            Zd = [];
            for (let Jd of this.skipped) {
              let kd = dd.mapPos(Jd.from, 1),
                pd = dd.mapPos(Jd.to, -1);
              kd < pd && Zd.push({
                from: kd,
                to: pd
              })
            }
          }
        }
        return new vd(this.parser, Jd, kd, pd, Wd, Pd, Zd, this.scheduleOn)
      }
      updateViewport(dd) {
        if (this.viewport.from == dd.from && this.viewport.to == dd.to) return !1;
        this.viewport = dd;
        let Jd = this.skipped.length;
        for (let kd = 0; kd < this.skipped.length; kd++) {
          let {
            from: Jd,
            to: pd
          } = this.skipped[kd];
          Jd < dd.to && pd > dd.from && (this.fragments = xd(this.fragments, Jd, pd), this.skipped.splice(kd--, 1))
        }
        return !(this.skipped.length >= Jd) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(dd, Jd) {
        this.skipped.push({
          from: dd,
          to: Jd
        })
      }
      static getSkippingParser(dd) {
        return new class extends Nd.o {
          createParse(Jd, kd, pd) {
            let Wd = pd[0].from,
              Pd = pd[pd.length - 1].to;
            return {
              parsedPos: Wd,
              advance() {
                let Jd = Gd;
                if (Jd) {
                  for (let dd of pd) Jd.tempSkipped.push(dd);
                  dd && (Jd.scheduleOn = Jd.scheduleOn ? Promise.all([Jd.scheduleOn, dd]) : dd)
                }
                return this.parsedPos = Pd, new Nd.s(Nd.i.none, [], [], Pd - Wd)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(dd) {
        dd = Math.min(dd, this.state.doc.length);
        let Jd = this.fragments;
        return this.treeLen >= dd && Jd.length && 0 == Jd[0].from && Jd[0].to >= dd
      }
      static get() {
        return Gd
      }
    }

    function xd(dd, Jd, kd) {
      return Nd.q.applyChanges(dd, [{
        fromA: Jd,
        toA: kd,
        fromB: Jd,
        toB: kd
      }])
    }
    class qd {
      constructor(dd) {
        this.context = dd, this.tree = dd.tree
      }
      apply(dd) {
        if (!dd.docChanged && this.tree == this.context.tree) return this;
        let Jd = this.context.changes(dd.changes, dd.state),
          kd = this.context.treeLen == dd.startState.doc.length ? void 0 : Math.max(dd.changes.mapPos(this.context.treeLen), Jd.viewport.to);
        return Jd.work(20, kd) || Jd.takeTree(), new qd(Jd)
      }
      static init(dd) {
        let Jd = Math.min(3e3, dd.doc.length),
          kd = vd.create(dd.facet(Md).parser, dd, {
            from: 0,
            to: Jd
          });
        return kd.work(20, Jd) || kd.takeTree(), new qd(kd)
      }
    }
    ld.state = Wd.E.define({
      create: qd.init,
      update(dd, Jd) {
        for (let kd of Jd.effects)
          if (kd.is(ld.setState)) return kd.value;
        return Jd.startState.facet(Md) != Jd.state.facet(Md) ? qd.init(Jd.state) : dd.apply(Jd)
      }
    });
    let Bd = dd => {
      let Jd = setTimeout((() => dd()), 500);
      return () => clearTimeout(Jd)
    };
    "undefined" != typeof requestIdleCallback && (Bd = dd => {
      let Jd = -1,
        kd = setTimeout((() => {
          Jd = requestIdleCallback(dd, {
            timeout: 400
          })
        }), 100);
      return () => Jd < 0 ? clearTimeout(kd) : cancelIdleCallback(Jd)
    });
    const sd = "undefined" != typeof navigator && (null === (pd = navigator.scheduling) || void 0 === pd ? void 0 : pd.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      ad = Pd.p.fromClass(class {
        constructor(dd) {
          this.view = dd, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(dd) {
          let Jd = this.view.state.field(ld.state).context;
          (Jd.updateViewport(dd.view.viewport) || this.view.viewport.to > Jd.treeLen) && this.scheduleWork(), (dd.docChanged || dd.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(Jd)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: dd
          } = this.view, Jd = dd.field(ld.state);
          Jd.tree == Jd.context.tree && Jd.context.isDone(dd.doc.length) || (this.working = Bd(this.work))
        }
        work(dd) {
          this.working = null;
          let Jd = Date.now();
          if (this.chunkEnd < Jd && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = Jd + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: kd,
            viewport: {
              to: pd
            }
          } = this.view, Nd = kd.field(ld.state);
          if (Nd.tree == Nd.context.tree && Nd.context.isDone(pd + 1e5)) return;
          let Wd = Date.now() + Math.min(this.chunkBudget, 100, dd && !sd ? Math.max(25, dd.timeRemaining() - 5) : 1e9),
            Pd = Nd.context.treeLen < pd && kd.doc.length > pd + 1e3,
            Zd = Nd.context.work((() => sd && sd() || Date.now() > Wd), pd + (Pd ? 0 : 1e5));
          this.chunkBudget -= Date.now() - Jd, (Zd || this.chunkBudget <= 0) && (Nd.context.takeTree(), this.view.dispatch({
            effects: ld.setState.of(new qd(Nd.context))
          })), this.chunkBudget > 0 && (!Zd || Pd) && this.scheduleWork(), this.checkAsyncSchedule(Nd.context)
        }
        checkAsyncSchedule(dd) {
          dd.scheduleOn && (this.workScheduled++, dd.scheduleOn.then((() => this.scheduleWork())).catch((dd => (0, Pd.$)(this.view.state, dd))).then((() => this.workScheduled--)), dd.scheduleOn = null)
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
      Md = Wd.o.define({
        combine: dd => dd.length ? dd[0] : null,
        enables: dd => [ld.state, ad, Pd.i.contentAttributes.compute([dd], (Jd => {
          let kd = Jd.facet(dd);
          return kd && kd.name ? {
            "data-language": kd.name
          } : {}
        }))]
      });
    class Fd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = dd, this.support = Jd, this.extension = [dd, Jd]
      }
    }
    const Yd = Wd.o.define(),
      md = Wd.o.define({
        combine: dd => {
          if (!dd.length) return "  ";
          let Jd = dd[0];
          if (!Jd || /\S/.test(Jd) || Array.from(Jd).some((dd => dd != Jd[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(dd[0]));
          return Jd
        }
      });

    function bd(dd) {
      let Jd = dd.facet(md);
      return 9 == Jd.charCodeAt(0) ? dd.tabSize * Jd.length : Jd.length
    }

    function Sd(dd, Jd) {
      let kd = "",
        pd = dd.tabSize,
        Nd = dd.facet(md)[0];
      if ("\t" == Nd) {
        for (; Jd >= pd;) kd += "\t", Jd -= pd;
        Nd = " "
      }
      for (let Wd = 0; Wd < Jd; Wd++) kd += Nd;
      return kd
    }

    function jd(dd, Jd) {
      dd instanceof Wd.l && (dd = new Xd(dd));
      for (let pd of dd.state.facet(Yd)) {
        let kd = pd(dd, Jd);
        if (void 0 !== kd) return kd
      }
      let kd = Od(dd.state);
      return kd.length >= Jd ? function(dd, Jd, kd) {
        let pd = Jd.resolveStack(kd),
          Nd = Jd.resolveInner(kd, -1).resolve(kd, 0).enterUnfinishedNodesBefore(kd);
        if (Nd != pd.node) {
          let dd = [];
          for (let Jd = Nd; Jd && !(Jd.from < pd.node.from || Jd.to > pd.node.to || Jd.from == pd.node.from && Jd.type == pd.node.type); Jd = Jd.parent) dd.push(Jd);
          for (let Jd = dd.length - 1; Jd >= 0; Jd--) pd = {
            node: dd[Jd],
            next: pd
          }
        }
        return nd(pd, dd, kd)
      }(dd, kd, Jd) : null
    }
    class Xd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = dd, this.options = Jd, this.unit = bd(dd)
      }
      lineAt(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          kd = this.state.doc.lineAt(dd),
          {
            simulateBreak: pd,
            simulateDoubleBreak: Nd
          } = this.options;
        return null != pd && pd >= kd.from && pd <= kd.to ? Nd && pd == dd ? {
          text: "",
          from: dd
        } : (Jd < 0 ? pd < dd : pd <= dd) ? {
          text: kd.text.slice(pd - kd.from),
          from: pd
        } : {
          text: kd.text.slice(0, pd - kd.from),
          from: kd.from
        } : kd
      }
      textAfterPos(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && dd == this.options.simulateBreak) return "";
        let {
          text: kd,
          from: pd
        } = this.lineAt(dd, Jd);
        return kd.slice(dd - pd, Math.min(kd.length, dd + 100 - pd))
      }
      column(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: kd,
            from: pd
          } = this.lineAt(dd, Jd),
          Nd = this.countColumn(kd, dd - pd),
          Wd = this.options.overrideIndentation ? this.options.overrideIndentation(pd) : -1;
        return Wd > -1 && (Nd += Wd - this.countColumn(kd, kd.search(/\S|$/))), Nd
      }
      countColumn(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.length;
        return (0, Wd.V)(dd, this.state.tabSize, Jd)
      }
      lineIndent(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: kd,
            from: pd
          } = this.lineAt(dd, Jd),
          Nd = this.options.overrideIndentation;
        if (Nd) {
          let dd = Nd(pd);
          if (dd > -1) return dd
        }
        return this.countColumn(kd, kd.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const fd = new Nd.f;

    function nd(dd, Jd, kd) {
      for (let pd = dd; pd; pd = pd.next) {
        let dd = Ud(pd.node);
        if (dd) return dd(Dd.create(Jd, kd, pd))
      }
      return 0
    }

    function Ud(dd) {
      let Jd = dd.type.prop(fd);
      if (Jd) return Jd;
      let kd, pd = dd.firstChild;
      if (pd && (kd = pd.type.prop(Nd.f.closedBy))) {
        let Jd = dd.lastChild,
          pd = Jd && kd.indexOf(Jd.name) > -1;
        return dd => cd(dd, !0, 1, void 0, pd && ! function(dd) {
          return dd.pos == dd.options.simulateBreak && dd.options.simulateDoubleBreak
        }(dd) ? Jd.from : void 0)
      }
      return null == dd.parent ? yd : null
    }

    function yd() {
      return 0
    }
    class Dd extends Xd {
      constructor(dd, Jd, kd) {
        super(dd.state, dd.options), this.base = dd, this.pos = Jd, this.context = kd
      }
      get node() {
        return this.context.node
      }
      static create(dd, Jd, kd) {
        return new Dd(dd, Jd, kd)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(dd) {
        let Jd = this.state.doc.lineAt(dd.from);
        for (;;) {
          let kd = dd.resolve(Jd.from);
          for (; kd.parent && kd.parent.from == kd.from;) kd = kd.parent;
          if (Td(kd, dd)) break;
          Jd = this.state.doc.lineAt(kd.from)
        }
        return this.lineIndent(Jd.from)
      }
      continue () {
        return nd(this.context.next, this.base, this.pos)
      }
    }

    function Td(dd, Jd) {
      for (let kd = Jd; kd; kd = kd.parent)
        if (dd == kd) return !0;
      return !1
    }

    function Ed(dd) {
      let {
        closing: Jd,
        align: kd = !0,
        units: pd = 1
      } = dd;
      return dd => cd(dd, kd, pd, Jd)
    }

    function cd(dd, Jd, kd, pd, Nd) {
      let Wd = dd.textAfter,
        Pd = Wd.match(/^\s*/)[0].length,
        Zd = pd && Wd.slice(Pd, Pd + pd.length) == pd || Nd == dd.pos + Pd,
        gd = Jd ? function(dd) {
          let Jd = dd.node,
            kd = Jd.childAfter(Jd.from),
            pd = Jd.lastChild;
          if (!kd) return null;
          let Nd = dd.options.simulateBreak,
            Wd = dd.state.doc.lineAt(kd.from),
            Pd = null == Nd || Nd <= Wd.from ? Wd.to : Math.min(Wd.to, Nd);
          for (let Zd = kd.to;;) {
            let dd = Jd.childAfter(Zd);
            if (!dd || dd == pd) return null;
            if (!dd.type.isSkipped) {
              if (dd.from >= Pd) return null;
              let Jd = /^ */.exec(Wd.text.slice(kd.to - Wd.from))[0].length;
              return {
                from: kd.from,
                to: kd.to + Jd
              }
            }
            Zd = dd.to
          }
        }(dd) : null;
      return gd ? Zd ? dd.column(gd.from) : dd.column(gd.to) : dd.baseIndent + (Zd ? 0 : dd.unit * kd)
    }
    const hd = dd => dd.baseIndent;

    function rd() {
      let {
        except: dd,
        units: Jd = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return kd => {
        let pd = dd && dd.test(kd.textAfter);
        return kd.baseIndent + (pd ? 0 : Jd * kd.unit)
      }
    }
    const ud = 200;

    function td() {
      return Wd.l.transactionFilter.of((dd => {
        if (!dd.docChanged || !dd.isUserEvent("input.type") && !dd.isUserEvent("input.complete")) return dd;
        let Jd = dd.startState.languageDataAt("indentOnInput", dd.startState.selection.main.head);
        if (!Jd.length) return dd;
        let kd = dd.newDoc,
          {
            head: pd
          } = dd.newSelection.main,
          Nd = kd.lineAt(pd);
        if (pd > Nd.from + ud) return dd;
        let Wd = kd.sliceString(Nd.from, pd);
        if (!Jd.some((dd => dd.test(Wd)))) return dd;
        let {
          state: Pd
        } = dd, Zd = -1, gd = [];
        for (let {
            head: Cd
          }
          of Pd.selection.UO) {
          let dd = Pd.doc.lineAt(Cd);
          if (dd.from == Zd) continue;
          Zd = dd.from;
          let Jd = jd(Pd, dd.from);
          if (null == Jd) continue;
          let kd = /^\s*/.exec(dd.text)[0],
            pd = Sd(Pd, Jd);
          kd != pd && gd.push({
            from: dd.from,
            to: dd.from + kd.length,
            insert: pd
          })
        }
        return gd.length ? [dd, {
          changes: gd,
          sequential: !0
        }] : dd
      }))
    }
    const Vd = Wd.o.define(),
      zd = new Nd.f;

    function Hd(dd) {
      let Jd = dd.firstChild,
        kd = dd.lastChild;
      return Jd && Jd.to < kd.from ? {
        from: Jd.to,
        to: kd.type.isError ? dd.to : kd.from
      } : null
    }

    function wd(dd) {
      let Jd = dd.lastChild;
      return Jd && Jd.to == dd.to && Jd.type.isError
    }

    function Ad(dd, Jd, kd) {
      for (let pd of dd.facet(Vd)) {
        let Nd = pd(dd, Jd, kd);
        if (Nd) return Nd
      }
      return function(dd, Jd, kd) {
        let pd = Od(dd);
        if (pd.length < kd) return null;
        let Nd = null;
        for (let Wd = pd.resolveStack(kd, 1); Wd; Wd = Wd.next) {
          let Pd = Wd.node;
          if (Pd.to <= kd || Pd.from > kd) continue;
          if (Nd && Pd.from < Jd) break;
          let Zd = Pd.type.prop(zd);
          if (Zd && (Pd.to < pd.length - 50 || pd.length == dd.doc.length || !wd(Pd))) {
            let pd = Zd(Pd, dd);
            pd && pd.from <= kd && pd.from >= Jd && pd.to > kd && (Nd = pd)
          }
        }
        return Nd
      }(dd, Jd, kd)
    }

    function dJ(dd, Jd) {
      let kd = Jd.mapPos(dd.from, 1),
        pd = Jd.mapPos(dd.to, -1);
      return kd >= pd ? void 0 : {
        from: kd,
        to: pd
      }
    }
    const JJ = Wd.C.define({
        map: dJ
      }),
      kJ = Wd.C.define({
        map: dJ
      });

    function pJ(dd) {
      let Jd = [];
      for (let {
          head: kd
        }
        of dd.state.selection.UO) Jd.some((dd => dd.from <= kd && dd.to >= kd)) || Jd.push(dd.lineBlockAt(kd));
      return Jd
    }
    const NJ = Wd.E.define({
      create: () => Pd.b.none,
      update(dd, Jd) {
        Jd.isUserEvent("delete") && Jd.changes.iterChangedRanges(((Jd, kd) => dd = WJ(dd, Jd, kd))), dd = dd.map(Jd.changes);
        for (let kd of Jd.effects)
          if (kd.is(JJ) && !ZJ(dd, kd.value.from, kd.value.to)) {
            let {
              preparePlaceholder: pd
            } = Jd.state.facet(lJ), Nd = pd ? Pd.b.replace({
              widget: new eJ(pd(Jd.state, kd.value))
            }) : OJ;
            dd = dd.update({
              add: [Nd.range(kd.value.from, kd.value.to)]
            })
          } else kd.is(kJ) && (dd = dd.update({
            filter: (dd, Jd) => kd.value.from != dd || kd.value.to != Jd,
            filterFrom: kd.value.from,
            filterTo: kd.value.to
          }));
        return Jd.selection && (dd = WJ(dd, Jd.selection.main.head)), dd
      },
      provide: dd => Pd.i.RW.from(dd),
      toJSON(dd, Jd) {
        let kd = [];
        return dd.between(0, Jd.doc.length, ((dd, Jd) => {
          kd.push(dd, Jd)
        })), kd
      },
      fromJSON(dd) {
        if (!Array.isArray(dd) || dd.length % 2) throw new RangeError("Invalid JSON for fold state");
        let Jd = [];
        for (let kd = 0; kd < dd.length;) {
          let pd = dd[kd++],
            Nd = dd[kd++];
          if ("number" != typeof pd || "number" != typeof Nd) throw new RangeError("Invalid JSON for fold state");
          Jd.push(OJ.range(pd, Nd))
        }
        return Pd.b.set(Jd, !0)
      }
    });

    function WJ(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jd,
        pd = !1;
      return dd.between(Jd, kd, ((dd, Nd) => {
        dd < kd && Nd > Jd && (pd = !0)
      })), pd ? dd.update({
        filterFrom: Jd,
        filterTo: kd,
        filter: (dd, pd) => dd >= kd || pd <= Jd
      }) : dd
    }

    function PJ(dd, Jd, kd) {
      var pd;
      let Nd = null;
      return null === (pd = dd.field(NJ, !1)) || void 0 === pd || pd.between(Jd, kd, ((dd, Jd) => {
        (!Nd || Nd.from > dd) && (Nd = {
          from: dd,
          to: Jd
        })
      })), Nd
    }

    function ZJ(dd, Jd, kd) {
      let pd = !1;
      return dd.between(Jd, Jd, ((dd, Nd) => {
        dd == Jd && Nd == kd && (pd = !0)
      })), pd
    }

    function gJ(dd, Jd) {
      return dd.field(NJ, !1) ? Jd : Jd.concat(Wd.C.appendConfig.of(QJ()))
    }

    function CJ(dd, Jd) {
      let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        pd = dd.state.doc.lineAt(Jd.from).number,
        Nd = dd.state.doc.lineAt(Jd.to).number;
      return Pd.i.announce.of(`${dd.state.phrase(kd?"Folded lines":"Unfolded lines")} ${pd} ${dd.state.phrase("to")} ${Nd}.`)
    }
    const KJ = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: dd => {
          for (let Jd of pJ(dd)) {
            let kd = Ad(dd.state, Jd.from, Jd.to);
            if (kd) return dd.dispatch({
              effects: gJ(dd.state, [JJ.of(kd), CJ(dd, kd)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: dd => {
          if (!dd.state.field(NJ, !1)) return !1;
          let Jd = [];
          for (let kd of pJ(dd)) {
            let pd = PJ(dd.state, kd.from, kd.to);
            pd && Jd.push(kJ.of(pd), CJ(dd, pd, !1))
          }
          return Jd.length && dd.dispatch({
            effects: Jd
          }), Jd.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: dd => {
          let {
            state: Jd
          } = dd, kd = [];
          for (let pd = 0; pd < Jd.doc.length;) {
            let Nd = dd.lineBlockAt(pd),
              Wd = Ad(Jd, Nd.from, Nd.to);
            Wd && kd.push(JJ.of(Wd)), pd = (Wd ? dd.lineBlockAt(Wd.to) : Nd).to + 1
          }
          return kd.length && dd.dispatch({
            effects: gJ(dd.state, kd)
          }), !!kd.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: dd => {
          let Jd = dd.state.field(NJ, !1);
          if (!Jd || !Jd.size) return !1;
          let kd = [];
          return Jd.between(0, dd.state.doc.length, ((dd, Jd) => {
            kd.push(kJ.of({
              from: dd,
              to: Jd
            }))
          })), dd.dispatch({
            effects: kd
          }), !0
        }
      }],
      oJ = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      lJ = Wd.o.define({
        combine: dd => (0, Wd.R)(dd, oJ)
      });

    function QJ(dd) {
      let Jd = [NJ, vJ];
      return dd && Jd.push(lJ.of(dd)), Jd
    }

    function LJ(dd, Jd) {
      let {
        state: kd
      } = dd, pd = kd.facet(lJ), Nd = Jd => {
        let kd = dd.lineBlockAt(dd.posAtDOM(Jd.target)),
          pd = PJ(dd.state, kd.from, kd.to);
        pd && dd.dispatch({
          effects: kJ.of(pd)
        }), Jd.preventDefault()
      };
      if (pd.placeholderDOM) return pd.placeholderDOM(dd, Nd, Jd);
      let Wd = document.createElement("span");
      return Wd.textContent = pd.placeholderText, Wd.setAttribute("aria-label", kd.phrase("folded code")), Wd.title = kd.phrase("unfold"), Wd.className = "cm-foldPlaceholder", Wd.onclick = Nd, Wd
    }
    const OJ = Pd.b.replace({
      widget: new class extends Pd.s {
        toDOM(dd) {
          return LJ(dd, null)
        }
      }
    });
    class eJ extends Pd.s {
      constructor(dd) {
        super(), this.value = dd
      }
      eq(dd) {
        return this.value == dd.value
      }
      toDOM(dd) {
        return LJ(dd, this.value)
      }
    }
    const RJ = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class IJ extends Pd.m {
      constructor(dd, Jd) {
        super(), this.config = dd, this.open = Jd
      }
      eq(dd) {
        return this.config == dd.config && this.open == dd.open
      }
      toDOM(dd) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let Jd = document.createElement("span");
        return Jd.textContent = this.open ? this.config.openText : this.config.closedText, Jd.title = dd.state.phrase(this.open ? "Fold line" : "Unfold line"), Jd
      }
    }

    function GJ() {
      let dd = {
          ...RJ,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        Jd = new IJ(dd, !0),
        kd = new IJ(dd, !1),
        pd = Pd.p.fromClass(class {
          constructor(dd) {
            this.from = dd.viewport.from, this.markers = this.buildMarkers(dd)
          }
          update(Jd) {
            (Jd.docChanged || Jd.viewportChanged || Jd.startState.facet(Md) != Jd.state.facet(Md) || Jd.startState.field(NJ, !1) != Jd.state.field(NJ, !1) || Od(Jd.startState) != Od(Jd.state) || dd.foldingChanged(Jd)) && (this.markers = this.buildMarkers(Jd.view))
          }
          buildMarkers(dd) {
            let pd = new Wd.v;
            for (let Nd of dd.viewportLineBlocks) {
              let Wd = PJ(dd.state, Nd.from, Nd.to) ? kd : Ad(dd.state, Nd.from, Nd.to) ? Jd : null;
              Wd && pd.add(Nd.from, Nd.from, Wd)
            }
            return pd.finish()
          }
        }),
        {
          domEventHandlers: Nd
        } = dd;
      return [pd, (0, Pd.L)({
        class: "cm-foldGutter",
        markers(dd) {
          var Jd;
          return (null === (Jd = dd.plugin(pd)) || void 0 === Jd ? void 0 : Jd.markers) || Wd.x.empty
        },
        initialSpacer: () => new IJ(dd, !1),
        domEventHandlers: {
          ...Nd,
          click: (dd, Jd, kd) => {
            if (Nd.click && Nd.click(dd, Jd, kd)) return !0;
            let pd = PJ(dd.state, Jd.from, Jd.to);
            if (pd) return dd.dispatch({
              effects: kJ.of(pd)
            }), !0;
            let Wd = Ad(dd.state, Jd.from, Jd.to);
            return !!Wd && (dd.dispatch({
              effects: JJ.of(Wd)
            }), !0)
          }
        }
      }), QJ()]
    }
    const vJ = Pd.i.baseTheme({
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
    class xJ {
      constructor(dd, Jd) {
        let kd;

        function pd(dd) {
          let Jd = gd.e.newName();
          return (kd || (kd = Object.create(null)))["." + Jd] = dd, Jd
        }
        this.specs = dd;
        const Nd = "string" == typeof Jd.all ? Jd.all : Jd.all ? pd(Jd.all) : void 0,
          Wd = Jd.scope;
        this.scope = Wd instanceof ld ? dd => dd.prop(Cd) == Wd.data : Wd ? dd => dd == Wd : void 0, this.style = (0, Zd.l)(dd.map((dd => ({
          tag: dd.tag,
          class: dd.class || pd(Object.assign({}, dd, {
            tag: null
          }))
        }))), {
          all: Nd
        }).style, this.module = kd ? new gd.e(kd) : null, this.themeType = Jd.themeType
      }
      static define(dd, Jd) {
        return new xJ(dd, Jd || {})
      }
    }
    const qJ = Wd.o.define(),
      BJ = Wd.o.define({
        combine: dd => dd.length ? [dd[0]] : null
      });

    function sJ(dd) {
      let Jd = dd.facet(qJ);
      return Jd.length ? Jd : dd.facet(BJ)
    }

    function iJ(dd, Jd) {
      let kd, pd = [MJ];
      return dd instanceof xJ && (dd.module && pd.push(Pd.i.styleModule.of(dd.module)), kd = dd.themeType), (null === Jd || void 0 === Jd ? void 0 : Jd.fallback) ? pd.push(BJ.of(dd)) : kd ? pd.push(qJ.computeN([Pd.i.darkTheme], (Jd => Jd.facet(Pd.i.darkTheme) == ("dark" == kd) ? [dd] : []))) : pd.push(qJ.of(dd)), pd
    }
    class aJ {
      constructor(dd) {
        this.markCache = Object.create(null), this.tree = Od(dd.state), this.RW = this.buildDeco(dd, sJ(dd.state)), this.decoratedTo = dd.viewport.to
      }
      update(dd) {
        let Jd = Od(dd.state),
          kd = sJ(dd.state),
          pd = kd != sJ(dd.startState),
          {
            viewport: Nd
          } = dd.view,
          Wd = dd.changes.mapPos(this.decoratedTo, 1);
        Jd.length < Nd.to && !pd && Jd.type == this.tree.type && Wd >= Nd.to ? (this.RW = this.RW.map(dd.changes), this.decoratedTo = Wd) : (Jd != this.tree || dd.viewportChanged || pd) && (this.tree = Jd, this.RW = this.buildDeco(dd.view, kd), this.decoratedTo = Nd.to)
      }
      buildDeco(dd, Jd) {
        if (!Jd || !this.tree.length) return Pd.b.none;
        let kd = new Wd.v;
        for (let {
            from: pd,
            to: Nd
          }
          of dd.R6)(0, Zd.e)(this.tree, Jd, ((dd, Jd, pd) => {
          kd.add(dd, Jd, this.markCache[pd] || (this.markCache[pd] = Pd.b.mark({
            class: pd
          })))
        }), pd, Nd);
        return kd.finish()
      }
    }
    const MJ = Wd.t.high(Pd.p.fromClass(aJ, {
        RW: dd => dd.RW
      })),
      FJ = xJ.define([{
        tag: Zd.m.meta,
        color: "#404740"
      }, {
        tag: Zd.m.link,
        textDecoration: "underline"
      }, {
        tag: Zd.m.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: Zd.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: Zd.m.strong,
        fontWeight: "bold"
      }, {
        tag: Zd.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Zd.m.keyword,
        color: "#708"
      }, {
        tag: [Zd.m.atom, Zd.m.bool, Zd.m.url, Zd.m.contentSeparator, Zd.m.labelName],
        color: "#219"
      }, {
        tag: [Zd.m.literal, Zd.m.inserted],
        color: "#164"
      }, {
        tag: [Zd.m.string, Zd.m.deleted],
        color: "#a11"
      }, {
        tag: [Zd.m.regexp, Zd.m.escape, Zd.m.special(Zd.m.string)],
        color: "#e40"
      }, {
        tag: Zd.m.definition(Zd.m.variableName),
        color: "#00f"
      }, {
        tag: Zd.m.local(Zd.m.variableName),
        color: "#30a"
      }, {
        tag: [Zd.m.typeName, Zd.m.namespace],
        color: "#085"
      }, {
        tag: Zd.m.className,
        color: "#167"
      }, {
        tag: [Zd.m.special(Zd.m.variableName), Zd.m.macroName],
        color: "#256"
      }, {
        tag: Zd.m.definition(Zd.m.propertyName),
        color: "#00c"
      }, {
        tag: Zd.m.comment,
        color: "#940"
      }, {
        tag: Zd.m.invalid,
        color: "#f00"
      }]),
      YJ = Pd.i.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      mJ = 1e4,
      bJ = "()[]{}",
      SJ = Wd.o.define({
        combine: dd => (0, Wd.R)(dd, {
          afterCursor: !0,
          brackets: bJ,
          maxScanDistance: mJ,
          renderMatch: fJ
        })
      }),
      jJ = Pd.b.mark({
        class: "cm-matchingBracket"
      }),
      XJ = Pd.b.mark({
        class: "cm-nonmatchingBracket"
      });

    function fJ(dd) {
      let Jd = [],
        kd = dd.matched ? jJ : XJ;
      return Jd.push(kd.range(dd.start.from, dd.start.to)), dd.end && Jd.push(kd.range(dd.end.from, dd.end.to)), Jd
    }

    function nJ(dd) {
      let Jd = [],
        kd = dd.facet(SJ);
      for (let pd of dd.selection.UO) {
        if (!pd.empty) continue;
        let Nd = cJ(dd, pd.head, -1, kd) || pd.head > 0 && cJ(dd, pd.head - 1, 1, kd) || kd.afterCursor && (cJ(dd, pd.head, 1, kd) || pd.head < dd.doc.length && cJ(dd, pd.head + 1, -1, kd));
        Nd && (Jd = Jd.concat(kd.renderMatch(Nd, dd)))
      }
      return Pd.b.set(Jd, !0)
    }
    const UJ = [Pd.p.fromClass(class {
      constructor(dd) {
        this.paused = !1, this.RW = nJ(dd.state)
      }
      update(dd) {
        (dd.docChanged || dd.selectionSet || this.paused) && (dd.view.composing ? (this.RW = this.RW.map(dd.changes), this.paused = !0) : (this.RW = nJ(dd.state), this.paused = !1))
      }
    }, {
      RW: dd => dd.RW
    }), YJ];

    function yJ() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [SJ.of(dd), UJ]
    }
    const DJ = new Nd.f;

    function TJ(dd, Jd, kd) {
      let pd = dd.prop(Jd < 0 ? Nd.f.openedBy : Nd.f.closedBy);
      if (pd) return pd;
      if (1 == dd.name.length) {
        let pd = kd.indexOf(dd.name);
        if (pd > -1 && pd % 2 == (Jd < 0 ? 1 : 0)) return [kd[pd + Jd]]
      }
      return null
    }

    function EJ(dd) {
      let Jd = dd.type.prop(DJ);
      return Jd ? Jd(dd.node) : dd
    }

    function cJ(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Nd = pd.maxScanDistance || mJ,
        Wd = pd.brackets || bJ,
        Pd = Od(dd),
        Zd = Pd.resolveInner(Jd, kd);
      for (let gd = Zd; gd; gd = gd.parent) {
        let pd = TJ(gd.type, kd, Wd);
        if (pd && gd.from < gd.to) {
          let Nd = EJ(gd);
          if (Nd && (kd > 0 ? Jd >= Nd.from && Jd < Nd.to : Jd > Nd.from && Jd <= Nd.to)) return hJ(dd, Jd, kd, gd, Nd, pd, Wd)
        }
      }
      return function(dd, Jd, kd, pd, Nd, Wd, Pd) {
        if (kd < 0 ? !Jd : Jd == dd.doc.length) return null;
        let Zd = kd < 0 ? dd.sliceDoc(Jd - 1, Jd) : dd.sliceDoc(Jd, Jd + 1),
          gd = Pd.indexOf(Zd);
        if (gd < 0 || gd % 2 == 0 != kd > 0) return null;
        let Cd = {
            from: kd < 0 ? Jd - 1 : Jd,
            to: kd > 0 ? Jd + 1 : Jd
          },
          Kd = dd.doc.iterRange(Jd, kd > 0 ? dd.doc.length : 0),
          od = 0;
        for (let ld = 0; !Kd.next().done && ld <= Wd;) {
          let dd = Kd.value;
          kd < 0 && (ld += dd.length);
          let Wd = Jd + ld * kd;
          for (let Jd = kd > 0 ? 0 : dd.length - 1, Zd = kd > 0 ? dd.length : -1; Jd != Zd; Jd += kd) {
            let Zd = Pd.indexOf(dd[Jd]);
            if (!(Zd < 0 || pd.resolveInner(Wd + Jd, 1).type != Nd))
              if (Zd % 2 == 0 == kd > 0) od++;
              else {
                if (1 == od) return {
                  start: Cd,
                  end: {
                    from: Wd + Jd,
                    to: Wd + Jd + 1
                  },
                  matched: Zd >> 1 == gd >> 1
                };
                od--
              }
          }
          kd > 0 && (ld += dd.length)
        }
        return Kd.done ? {
          start: Cd,
          matched: !1
        } : null
      }(dd, Jd, kd, Pd, Zd.type, Nd, Wd)
    }

    function hJ(dd, Jd, kd, pd, Nd, Wd, Pd) {
      let Zd = pd.parent,
        gd = {
          from: Nd.from,
          to: Nd.to
        },
        Cd = 0,
        Kd = null === Zd || void 0 === Zd ? void 0 : Zd.cursor();
      if (Kd && (kd < 0 ? Kd.childBefore(pd.from) : Kd.childAfter(pd.to)))
        do {
          if (kd < 0 ? Kd.to <= pd.from : Kd.from >= pd.to) {
            if (0 == Cd && Wd.indexOf(Kd.type.name) > -1 && Kd.from < Kd.to) {
              let dd = EJ(Kd);
              return {
                start: gd,
                end: dd ? {
                  from: dd.from,
                  to: dd.to
                } : void 0,
                matched: !0
              }
            }
            if (TJ(Kd.type, kd, Pd)) Cd++;
            else if (TJ(Kd.type, -kd, Pd)) {
              if (0 == Cd) {
                let dd = EJ(Kd);
                return {
                  start: gd,
                  end: dd && dd.from < dd.to ? {
                    from: dd.from,
                    to: dd.to
                  } : void 0,
                  matched: !1
                }
              }
              Cd--
            }
          }
        } while (kd < 0 ? Kd.prevSibling() : Kd.nextSibling());
      return {
        start: gd,
        matched: !1
      }
    }
    const rJ = Object.create(null),
      uJ = [Nd.i.none],
      tJ = [],
      VJ = Object.create(null),
      zJ = Object.create(null);
    for (let [AJ, dk] of [
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
      ]) zJ[AJ] = wJ(rJ, dk);

    function HJ(dd, Jd) {
      tJ.indexOf(dd) > -1 || (tJ.push(dd), console.warn(Jd))
    }

    function wJ(dd, Jd) {
      let kd = [];
      for (let Nd of Jd.split(" ")) {
        let Jd = [];
        for (let kd of Nd.split(".")) {
          let pd = dd[kd] || Zd.m[kd];
          pd ? "function" == typeof pd ? Jd.length ? Jd = Jd.map(pd) : HJ(kd, `Modifier ${kd} used at start of tag`) : Jd.length ? HJ(kd, `Tag ${kd} used as modifier`) : Jd = Array.isArray(pd) ? pd : [pd] : HJ(kd, `Unknown highlighting tag ${kd}`)
        }
        for (let dd of Jd) kd.push(dd)
      }
      if (!kd.length) return 0;
      let pd = Jd.replace(/ /g, "_"),
        Wd = pd + " " + kd.map((dd => dd.id)),
        Pd = VJ[Wd];
      if (Pd) return Pd.id;
      let gd = VJ[Wd] = Nd.i.define({
        id: uJ.length,
        name: pd,
        props: [(0, Zd.i)({
          [pd]: kd
        })]
      });
      return uJ.push(gd), gd.id
    }
    Pd.e.RTL, Pd.e.LTR
  },
  41337: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Gd,
      g: () => Bd
    });
    var pd = kd(41282),
      Nd = kd(41273),
      Wd = kd(41298);
    class Pd {
      constructor(dd, Jd, kd) {
        this.from = dd, this.to = Jd, this.diagnostic = kd
      }
    }
    class Zd {
      constructor(dd, Jd, kd) {
        this.diagnostics = dd, this.panel = Jd, this.selected = kd
      }
      static init(dd, Jd, kd) {
        let Wd = kd.facet(xd).markerFilter;
        Wd && (dd = Wd(dd, kd));
        let Pd = dd.slice().sort(((dd, Jd) => dd.from - Jd.from || dd.to - Jd.to)),
          Cd = new Nd.v,
          Kd = [],
          od = 0,
          ld = kd.doc.iter(),
          Qd = 0,
          Ld = kd.doc.length;
        for (let Nd = 0;;) {
          let dd, Jd, kd = Nd == Pd.length ? null : Pd[Nd];
          if (!kd && !Kd.length) break;
          if (Kd.length) dd = od, Jd = Kd.reduce(((dd, Jd) => Math.min(dd, Jd.to)), kd && kd.from > dd ? kd.from : 1e8);
          else {
            if (dd = kd.from, dd > Ld) break;
            Jd = kd.to, Kd.push(kd), Nd++
          }
          for (; Nd < Pd.length;) {
            let kd = Pd[Nd];
            if (kd.from != dd || !(kd.to > kd.from || kd.to == dd)) {
              Jd = Math.min(kd.from, Jd);
              break
            }
            Kd.push(kd), Nd++, Jd = Math.min(kd.to, Jd)
          }
          Jd = Math.min(Jd, Ld);
          let Wd = !1;
          if (Kd.some((kd => kd.from == dd && (kd.to == Jd || Jd == Ld))) && (Wd = dd == Jd, !Wd && Jd - dd < 10)) {
            let kd = dd - (Qd + ld.value.length);
            kd > 0 && (ld.next(kd), Qd = dd);
            for (let pd = dd;;) {
              if (pd >= Jd) {
                Wd = !0;
                break
              }
              if (!ld.lineBreak && Qd + ld.value.length > pd) break;
              pd = Qd + ld.value.length, Qd += ld.value.length, ld.next()
            }
          }
          let Zd = Xd(Kd);
          if (Wd) Cd.add(dd, dd, pd.b.widget({
            widget: new Md(Zd),
            diagnostics: Kd.slice()
          }));
          else {
            let kd = Kd.reduce(((dd, Jd) => Jd.markClass ? dd + " " + Jd.markClass : dd), "");
            Cd.add(dd, Jd, pd.b.mark({
              class: "cm-lintRange cm-lintRange-" + Zd + kd,
              diagnostics: Kd.slice(),
              inclusiveEnd: Kd.some((dd => dd.to > Jd))
            }))
          }
          if (od = Jd, od == Ld) break;
          for (let pd = 0; pd < Kd.length; pd++) Kd[pd].to <= od && Kd.splice(pd--, 1)
        }
        let Od = Cd.finish();
        return new Zd(Od, Jd, gd(Od))
      }
    }

    function gd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pd = null;
      return dd.between(kd, 1e9, ((dd, kd, Nd) => {
        let {
          spec: Wd
        } = Nd;
        if (!(Jd && Wd.diagnostics.indexOf(Jd) < 0))
          if (pd) {
            if (Wd.diagnostics.indexOf(pd.diagnostic) < 0) return !1;
            pd = new Pd(pd.from, kd, pd.diagnostic)
          } else pd = new Pd(dd, kd, Jd || Wd.diagnostics[0])
      })), pd
    }

    function Cd(dd, Jd) {
      let kd = Jd.pos,
        pd = Jd.end || kd,
        Nd = dd.state.facet(xd).hideOn(dd, kd, pd);
      if (null != Nd) return Nd;
      let Wd = dd.startState.doc.lineAt(Jd.pos);
      return !(!dd.effects.some((dd => dd.is(od))) && !dd.changes.touchesRange(Wd.from, Math.max(Wd.to, pd)))
    }

    function Kd(dd, Jd) {
      return dd.field(Ld, !1) ? Jd : Jd.concat(Nd.C.appendConfig.of(fd))
    }
    const od = Nd.C.define(),
      ld = Nd.C.define(),
      Qd = Nd.C.define(),
      Ld = Nd.E.define({
        create: () => new Zd(pd.b.none, null, null),
        update(dd, Jd) {
          if (Jd.docChanged && dd.diagnostics.size) {
            let kd = dd.diagnostics.map(Jd.changes),
              pd = null,
              Nd = dd.panel;
            if (dd.selected) {
              let Nd = Jd.changes.mapPos(dd.selected.from, 1);
              pd = gd(kd, dd.selected.diagnostic, Nd) || gd(kd, null, Nd)
            }!kd.size && Nd && Jd.state.facet(xd).autoPanel && (Nd = null), dd = new Zd(kd, Nd, pd)
          }
          for (let kd of Jd.effects)
            if (kd.is(od)) {
              let pd = Jd.state.facet(xd).autoPanel ? kd.value.length ? Yd.open : null : dd.panel;
              dd = Zd.init(kd.value, pd, Jd.state)
            } else kd.is(ld) ? dd = new Zd(dd.diagnostics, kd.value ? Yd.open : null, dd.selected) : kd.is(Qd) && (dd = new Zd(dd.diagnostics, dd.panel, kd.value));
          return dd
        },
        provide: dd => [pd.ob.from(dd, (dd => dd.panel)), pd.i.RW.from(dd, (dd => dd.diagnostics))]
      });
    const Od = pd.b.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function ed(dd, Jd, kd) {
      let pd, {
          diagnostics: Nd
        } = dd.state.field(Ld),
        Wd = -1,
        Pd = -1;
      Nd.between(Jd - (kd < 0 ? 1 : 0), Jd + (kd > 0 ? 1 : 0), ((dd, Nd, Zd) => {
        let {
          spec: gd
        } = Zd;
        if (Jd >= dd && Jd <= Nd && (dd == Nd || (Jd > dd || kd > 0) && (Jd < Nd || kd < 0))) return pd = gd.diagnostics, Wd = dd, Pd = Nd, !1
      }));
      let Zd = dd.state.facet(xd).tooltipFilter;
      return pd && Zd && (pd = Zd(pd, dd.state)), pd ? {
        pos: Wd,
        end: Pd,
        above: dd.state.doc.lineAt(Wd).to < Pd,
        create: () => ({
          dom: Rd(dd, pd)
        })
      } : null
    }

    function Rd(dd, Jd) {
      return (0, Wd.d)("ul", {
        class: "cm-tooltip-lint"
      }, Jd.map((Jd => ad(dd, Jd, !1))))
    }
    const Id = dd => {
        let Jd = dd.state.field(Ld, !1);
        return !(!Jd || !Jd.panel) && (dd.dispatch({
          effects: ld.of(!1)
        }), !0)
      },
      Gd = [{
        key: "Mod-Shift-m",
        run: dd => {
          let Jd = dd.state.field(Ld, !1);
          Jd && Jd.panel || dd.dispatch({
            effects: Kd(dd.state, [ld.of(!0)])
          });
          let kd = (0, pd.F)(dd, Yd.open);
          return kd && kd.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: dd => {
          let Jd = dd.state.field(Ld, !1);
          if (!Jd) return !1;
          let kd = dd.state.selection.main,
            pd = gd(Jd.diagnostics, null, kd.to + 1);
          return !(!pd && (pd = gd(Jd.diagnostics, null, 0), !pd || pd.from == kd.from && pd.to == kd.to)) && (dd.dispatch({
            selection: {
              anchor: pd.from,
              head: pd.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      vd = pd.p.fromClass(class {
        constructor(dd) {
          this.view = dd, this.timeout = -1, this.set = !0;
          let {
            delay: Jd
          } = dd.state.facet(xd);
          this.lintTime = Date.now() + Jd, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, Jd)
        }
        run() {
          clearTimeout(this.timeout);
          let dd = Date.now();
          if (dd < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - dd);
          else {
            this.set = !1;
            let {
              state: dd
            } = this.view, {
              sources: Jd
            } = dd.facet(xd);
            Jd.length && function(dd, Jd, kd) {
              let pd = [],
                Nd = -1;
              for (let Wd of dd) Wd.then((kd => {
                pd.push(kd), clearTimeout(Nd), pd.length == dd.length ? Jd(pd) : Nd = setTimeout((() => Jd(pd)), 200)
              }), kd)
            }(Jd.map((dd => Promise.resolve(dd(this.view)))), (Jd => {
              this.view.state.doc == dd.doc && this.view.dispatch(function(dd, Jd) {
                return {
                  effects: Kd(dd, [od.of(Jd)])
                }
              }(this.view.state, Jd.reduce(((dd, Jd) => dd.concat(Jd)))))
            }), (dd => {
              (0, pd.$)(this.view.state, dd)
            }))
          }
        }
        update(dd) {
          let Jd = dd.state.facet(xd);
          (dd.docChanged || Jd != dd.startState.facet(xd) || Jd.needsRefresh && Jd.needsRefresh(dd)) && (this.lintTime = Date.now() + Jd.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, Jd.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const xd = Nd.o.define({
      combine: dd => ({
        sources: dd.map((dd => dd.source)).filter((dd => null != dd)),
        ...(0, Nd.R)(dd.map((dd => dd.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: qd,
          tooltipFilter: qd,
          needsRefresh: (dd, Jd) => dd ? Jd ? kd => dd(kd) || Jd(kd) : dd : Jd,
          hideOn: (dd, Jd) => dd ? Jd ? (kd, pd, Nd) => dd(kd, pd, Nd) || Jd(kd, pd, Nd) : dd : Jd,
          autoPanel: (dd, Jd) => dd || Jd
        })
      })
    });

    function qd(dd, Jd) {
      return dd ? Jd ? (kd, pd) => Jd(dd(kd, pd), pd) : dd : Jd
    }

    function Bd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [xd.of({
        source: dd,
        config: Jd
      }), vd, fd]
    }

    function sd(dd) {
      let Jd = [];
      if (dd) dd: for (let {
          name: kd
        }
        of dd) {
        for (let dd = 0; dd < kd.length; dd++) {
          let pd = kd[dd];
          if (/[a-zA-Z]/.test(pd) && !Jd.some((dd => dd.toLowerCase() == pd.toLowerCase()))) {
            Jd.push(pd);
            continue dd
          }
        }
        Jd.push("")
      }
      return Jd
    }

    function ad(dd, Jd, kd) {
      var pd;
      let Nd = kd ? sd(Jd.actions) : [];
      return (0, Wd.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + Jd.severity
      }, (0, Wd.d)("span", {
        class: "cm-diagnosticText"
      }, Jd.renderMessage ? Jd.renderMessage(dd) : Jd.message), null === (pd = Jd.actions) || void 0 === pd ? void 0 : pd.map(((kd, pd) => {
        let Pd = !1,
          Zd = pd => {
            if (pd.preventDefault(), Pd) return;
            Pd = !0;
            let Nd = gd(dd.state.field(Ld).diagnostics, Jd);
            Nd && kd.apply(dd, Nd.from, Nd.to)
          },
          {
            name: Cd
          } = kd,
          Kd = Nd[pd] ? Cd.indexOf(Nd[pd]) : -1,
          od = Kd < 0 ? Cd : [Cd.slice(0, Kd), (0, Wd.d)("u", Cd.slice(Kd, Kd + 1)), Cd.slice(Kd + 1)],
          ld = kd.markClass ? " " + kd.markClass : "";
        return (0, Wd.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + ld,
          onclick: Zd,
          onmousedown: Zd,
          "aria-label": ` Action: ${Cd}${Kd<0?"":` (access key "${Nd[pd]})"`}.`
        }, od)
      })), Jd.source && (0, Wd.d)("div", {
        class: "cm-diagnosticSource"
      }, Jd.source))
    }
    class Md extends pd.s {
      constructor(dd) {
        super(), this.sev = dd
      }
      eq(dd) {
        return dd.sev == this.sev
      }
      toDOM() {
        return (0, Wd.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Fd {
      constructor(dd, Jd) {
        this.diagnostic = Jd, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = ad(dd, Jd, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class Yd {
      constructor(dd) {
        this.view = dd, this.items = [];
        this.list = (0, Wd.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: Jd => {
            if (!(Jd.ctrlKey || Jd.altKey || Jd.metaKey)) {
              if (27 == Jd.keyCode) Id(this.view), this.view.focus();
              else if (38 == Jd.keyCode || 33 == Jd.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == Jd.keyCode || 34 == Jd.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == Jd.keyCode) this.moveSelection(0);
              else if (35 == Jd.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == Jd.keyCode) this.view.focus();
              else {
                if (!(Jd.keyCode >= 65 && Jd.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: kd
                  } = this.items[this.selectedIndex], pd = sd(kd.actions);
                  for (let Nd = 0; Nd < pd.length; Nd++)
                    if (pd[Nd].toUpperCase().charCodeAt(0) == Jd.keyCode) {
                      let Jd = gd(this.view.state.field(Ld).diagnostics, kd);
                      Jd && kd.actions[Nd].apply(dd, Jd.from, Jd.to)
                    }
                }
              }
              Jd.preventDefault()
            }
          },
          onclick: dd => {
            for (let Jd = 0; Jd < this.items.length; Jd++) this.items[Jd].dom.contains(dd.target) && this.moveSelection(Jd)
          }
        }), this.dom = (0, Wd.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, Wd.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => Id(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let dd = this.view.state.field(Ld).selected;
        if (!dd) return -1;
        for (let Jd = 0; Jd < this.items.length; Jd++)
          if (this.items[Jd].diagnostic == dd.diagnostic) return Jd;
        return -1
      }
      update() {
        let {
          diagnostics: dd,
          selected: Jd
        } = this.view.state.field(Ld), kd = 0, pd = !1, Nd = null, Wd = new Set;
        for (dd.between(0, this.view.state.doc.length, ((dd, Pd, Zd) => {
            let {
              spec: gd
            } = Zd;
            for (let Cd of gd.diagnostics) {
              if (Wd.has(Cd)) continue;
              Wd.add(Cd);
              let dd, Pd = -1;
              for (let Jd = kd; Jd < this.items.length; Jd++)
                if (this.items[Jd].diagnostic == Cd) {
                  Pd = Jd;
                  break
                } Pd < 0 ? (dd = new Fd(this.view, Cd), this.items.splice(kd, 0, dd), pd = !0) : (dd = this.items[Pd], Pd > kd && (this.items.splice(kd, Pd - kd), pd = !0)), Jd && dd.diagnostic == Jd.diagnostic ? dd.dom.hasAttribute("aria-selected") || (dd.dom.setAttribute("aria-selected", "true"), Nd = dd) : dd.dom.hasAttribute("aria-selected") && dd.dom.removeAttribute("aria-selected"), kd++
            }
          })); kd < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) pd = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Fd(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), pd = !0), Nd ? (this.list.setAttribute("aria-activedescendant", Nd.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Nd.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: dd => {
            let {
              sel: Jd,
              panel: kd
            } = dd, pd = kd.height / this.list.offsetHeight;
            Jd.top < kd.top ? this.list.scrollTop -= (kd.top - Jd.top) / pd : Jd.bottom > kd.bottom && (this.list.scrollTop += (Jd.bottom - kd.bottom) / pd)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), pd && this.sync()
      }
      sync() {
        let dd = this.list.firstChild;

        function Jd() {
          let Jd = dd;
          dd = Jd.nextSibling, Jd.remove()
        }
        for (let kd of this.items)
          if (kd.dom.parentNode == this.list) {
            for (; dd != kd.dom;) Jd();
            dd = kd.dom.nextSibling
          } else this.list.insertBefore(kd.dom, dd);
        for (; dd;) Jd()
      }
      moveSelection(dd) {
        if (this.selectedIndex < 0) return;
        let Jd = gd(this.view.state.field(Ld).diagnostics, this.items[dd].diagnostic);
        Jd && this.view.dispatch({
          selection: {
            anchor: Jd.from,
            head: Jd.to
          },
          scrollIntoView: !0,
          effects: Qd.of(Jd)
        })
      }
      static open(dd) {
        return new Yd(dd)
      }
    }

    function md(dd) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(dd)}</svg>')`
    }

    function bd(dd) {
      return md(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${dd}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Sd = pd.i.baseTheme({
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
        backgroundImage: bd("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: bd("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: bd("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: bd("#66d")
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

    function jd(dd) {
      return "error" == dd ? 4 : "warning" == dd ? 3 : "info" == dd ? 2 : 1
    }

    function Xd(dd) {
      let Jd = "hint",
        kd = 1;
      for (let pd of dd) {
        let dd = jd(pd.severity);
        dd > kd && (kd = dd, Jd = pd.severity)
      }
      return Jd
    }
    pd.m;
    const fd = [Ld, pd.i.RW.compute([Ld], (dd => {
      let {
        selected: Jd,
        panel: kd
      } = dd.field(Ld);
      return Jd && kd && Jd.from != Jd.to ? pd.b.set([Od.range(Jd.from, Jd.to)]) : pd.b.none
    })), (0, pd.T)(ed, {
      hideOn: Cd
    }), Sd]
  },
  41330: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Ad,
      e: () => Rd,
      i: () => dJ
    });
    var pd = kd(41282),
      Nd = kd(41273),
      Wd = kd(41298);
    const Pd = "function" == typeof String.prototype.normalize ? dd => dd.normalize("NFKD") : dd => dd;
    class Zd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd.length,
          Nd = arguments.length > 4 ? arguments[4] : void 0,
          Wd = arguments.length > 5 ? arguments[5] : void 0;
        this.test = Wd, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = dd.iterRange(kd, pd), this.bufferStart = kd, this.normalize = Nd ? dd => Nd(Pd(dd)) : Pd, this.query = this.normalize(Jd)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Nd.K)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let dd = this.peek();
          if (dd < 0) return this.done = !0, this;
          let Jd = (0, Nd._)(dd),
            kd = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Nd.O)(dd);
          let pd = this.normalize(Jd);
          if (pd.length)
            for (let Nd = 0, Wd = kd;; Nd++) {
              let dd = pd.charCodeAt(Nd),
                Pd = this.match(dd, Wd, this.bufferPos + this.bufferStart);
              if (Nd == pd.length - 1) {
                if (Pd) return this.value = Pd, this;
                break
              }
              Wd == kd && Nd < Jd.length && Jd.charCodeAt(Nd) == dd && Wd++
            }
        }
      }
      match(dd, Jd, kd) {
        let pd = null;
        for (let Nd = 0; Nd < this.matches.length; Nd += 2) {
          let Jd = this.matches[Nd],
            Wd = !1;
          this.query.charCodeAt(Jd) == dd && (Jd == this.query.length - 1 ? pd = {
            from: this.matches[Nd + 1],
            to: kd
          } : (this.matches[Nd]++, Wd = !0)), Wd || (this.matches.splice(Nd, 2), Nd -= 2)
        }
        return this.query.charCodeAt(0) == dd && (1 == this.query.length ? pd = {
          from: Jd,
          to: kd
        } : this.matches.push(1, Jd)), pd && this.test && !this.test(pd.from, pd.to, this.buffer, this.bufferStart) && (pd = null), pd
      }
    }
    "undefined" != typeof Symbol && (Zd.prototype[Symbol.iterator] = function() {
      return this
    });
    const gd = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Cd = "gm" + (null == /x/.unicode ? "" : "u");
    class Kd {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dd.length;
        if (this.text = dd, this.to = Nd, this.curLine = "", this.done = !1, this.value = gd, /\\[sWDnr]|\n|\r|\[\^/.test(Jd)) return new Qd(dd, Jd, kd, pd, Nd);
        this.re = new RegExp(Jd, Cd + ((null === kd || void 0 === kd ? void 0 : kd.ignoreCase) ? "i" : "")), this.test = null === kd || void 0 === kd ? void 0 : kd.test, this.iter = dd.iter();
        let Wd = dd.lineAt(pd);
        this.curLineStart = Wd.from, this.matchPos = Ld(dd, pd), this.getLine(this.curLineStart)
      }
      getLine(dd) {
        this.iter.next(dd), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let dd = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = dd;
          let Jd = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (Jd) {
            let kd = this.curLineStart + Jd.index,
              pd = kd + Jd[0].length;
            if (this.matchPos = Ld(this.text, pd + (kd == pd ? 1 : 0)), kd == this.curLineStart + this.curLine.length && this.nextLine(), (kd < pd || kd > this.value.to) && (!this.test || this.test(kd, pd, Jd))) return this.value = {
              from: kd,
              to: pd,
              match: Jd
            }, this;
            dd = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), dd = 0
          }
        }
      }
    }
    const od = new WeakMap;
    class ld {
      constructor(dd, Jd) {
        this.from = dd, this.text = Jd
      }
      get to() {
        return this.from + this.text.length
      }
      static get(dd, Jd, kd) {
        let pd = od.get(dd);
        if (!pd || pd.from >= kd || pd.to <= Jd) {
          let pd = new ld(Jd, dd.sliceString(Jd, kd));
          return od.set(dd, pd), pd
        }
        if (pd.from == Jd && pd.to == kd) return pd;
        let {
          text: Nd,
          from: Wd
        } = pd;
        return Wd > Jd && (Nd = dd.sliceString(Jd, Wd) + Nd, Wd = Jd), pd.to < kd && (Nd += dd.sliceString(pd.to, kd)), od.set(dd, new ld(Wd, Nd)), new ld(Jd, Nd.slice(Jd - Wd, kd - Wd))
      }
    }
    class Qd {
      constructor(dd, Jd, kd, pd, Nd) {
        this.text = dd, this.to = Nd, this.done = !1, this.value = gd, this.matchPos = Ld(dd, pd), this.re = new RegExp(Jd, Cd + ((null === kd || void 0 === kd ? void 0 : kd.ignoreCase) ? "i" : "")), this.test = null === kd || void 0 === kd ? void 0 : kd.test, this.flat = ld.get(dd, pd, this.chunkEnd(pd + 5e3))
      }
      chunkEnd(dd) {
        return dd >= this.to ? this.to : this.text.lineAt(dd).to
      }
      next() {
        for (;;) {
          let dd = this.re.lastIndex = this.matchPos - this.flat.from,
            Jd = this.re.exec(this.flat.text);
          if (Jd && !Jd[0] && Jd.index == dd && (this.re.lastIndex = dd + 1, Jd = this.re.exec(this.flat.text)), Jd) {
            let dd = this.flat.from + Jd.index,
              kd = dd + Jd[0].length;
            if ((this.flat.to >= this.to || Jd.index + Jd[0].length <= this.flat.text.length - 10) && (!this.test || this.test(dd, kd, Jd))) return this.value = {
              from: dd,
              to: kd,
              match: Jd
            }, this.matchPos = Ld(this.text, kd + (dd == kd ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = ld.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function Ld(dd, Jd) {
      if (Jd >= dd.length) return Jd;
      let kd, pd = dd.lineAt(Jd);
      for (; Jd < pd.to && (kd = pd.text.charCodeAt(Jd - pd.from)) >= 56320 && kd < 57344;) Jd++;
      return Jd
    }
    "undefined" != typeof Symbol && (Kd.prototype[Symbol.iterator] = Qd.prototype[Symbol.iterator] = function() {
      return this
    });
    const Od = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      ed = Nd.o.define({
        combine: dd => (0, Nd.R)(dd, Od, {
          highlightWordAroundCursor: (dd, Jd) => dd || Jd,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function Rd(dd) {
      let Jd = [qd, xd];
      return dd && Jd.push(ed.of(dd)), Jd
    }
    const Id = pd.b.mark({
        class: "cm-selectionMatch"
      }),
      Gd = pd.b.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function vd(dd, Jd, kd, pd) {
      return (0 == kd || dd(Jd.sliceDoc(kd - 1, kd)) != Nd.i.Word) && (pd == Jd.doc.length || dd(Jd.sliceDoc(pd, pd + 1)) != Nd.i.Word)
    }
    const xd = pd.p.fromClass(class {
        constructor(dd) {
          this.RW = this.getDeco(dd)
        }
        update(dd) {
          (dd.selectionSet || dd.docChanged || dd.viewportChanged) && (this.RW = this.getDeco(dd.view))
        }
        getDeco(dd) {
          let Jd = dd.state.facet(ed),
            {
              state: kd
            } = dd,
            Wd = kd.selection;
          if (Wd.UO.length > 1) return pd.b.none;
          let Pd, gd = Wd.main,
            Cd = null;
          if (gd.empty) {
            if (!Jd.highlightWordAroundCursor) return pd.b.none;
            let dd = kd.wordAt(gd.head);
            if (!dd) return pd.b.none;
            Cd = kd.charCategorizer(gd.head), Pd = kd.sliceDoc(dd.from, dd.to)
          } else {
            let dd = gd.to - gd.from;
            if (dd < Jd.minSelectionLength || dd > 200) return pd.b.none;
            if (Jd.wholeWords) {
              if (Pd = kd.sliceDoc(gd.from, gd.to), Cd = kd.charCategorizer(gd.head), !vd(Cd, kd, gd.from, gd.to) || ! function(dd, Jd, kd, pd) {
                  return dd(Jd.sliceDoc(kd, kd + 1)) == Nd.i.Word && dd(Jd.sliceDoc(pd - 1, pd)) == Nd.i.Word
                }(Cd, kd, gd.from, gd.to)) return pd.b.none
            } else if (Pd = kd.sliceDoc(gd.from, gd.to), !Pd) return pd.b.none
          }
          let Kd = [];
          for (let Nd of dd.R6) {
            let dd = new Zd(kd.doc, Pd, Nd.from, Nd.to);
            for (; !dd.next().done;) {
              let {
                from: Nd,
                to: Wd
              } = dd.value;
              if ((!Cd || vd(Cd, kd, Nd, Wd)) && (gd.empty && Nd <= gd.from && Wd >= gd.to ? Kd.push(Gd.range(Nd, Wd)) : (Nd >= gd.to || Wd <= gd.from) && Kd.push(Id.range(Nd, Wd)), Kd.length > Jd.maxMatches)) return pd.b.none
            }
          }
          return pd.b.set(Kd)
        }
      }, {
        RW: dd => dd.RW
      }),
      qd = pd.i.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const Bd = Nd.o.define({
      combine: dd => (0, Nd.R)(dd, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: dd => new JJ(dd),
        scrollToMatch: dd => pd.i.scrollIntoView(dd)
      })
    });
    class sd {
      constructor(dd) {
        this.search = dd.search, this.caseSensitive = !!dd.caseSensitive, this.literal = !!dd.literal, this.regexp = !!dd.regexp, this.replace = dd.replace || "", this.valid = !!this.search && (!this.regexp || function(dd) {
          try {
            return new RegExp(dd, Cd), !0
          } catch (Jd) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!dd.wholeWord, this.test = dd.test
      }
      unquote(dd) {
        return this.literal ? dd : dd.replace(/\\([nrt\\])/g, ((dd, Jd) => "n" == Jd ? "\n" : "r" == Jd ? "\r" : "t" == Jd ? "\t" : "\\"))
      }
      eq(dd) {
        return this.search == dd.search && this.replace == dd.replace && this.caseSensitive == dd.caseSensitive && this.regexp == dd.regexp && this.wholeWord == dd.wholeWord && this.test == dd.test
      }
      create() {
        return this.regexp ? new Sd(this) : new Fd(this)
      }
      getCursor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = dd.doc ? dd : Nd.l.create({
            doc: dd
          });
        return null == kd && (kd = pd.doc.length), this.regexp ? Yd(this, pd, Jd, kd) : Md(this, pd, Jd, kd)
      }
    }
    class ad {
      constructor(dd) {
        this.spec = dd
      }
    }

    function Md(dd, Jd, kd, pd) {
      let Wd;
      var Pd, gd;
      return dd.wholeWord && (Pd = Jd.doc, gd = Jd.charCategorizer(Jd.selection.main.head), Wd = (dd, Jd, kd, pd) => ((pd > dd || pd + kd.length < Jd) && (pd = Math.max(0, dd - 2), kd = Pd.sliceString(pd, Math.min(Pd.length, Jd + 2))), (gd(md(kd, dd - pd)) != Nd.i.Word || gd(bd(kd, dd - pd)) != Nd.i.Word) && (gd(bd(kd, Jd - pd)) != Nd.i.Word || gd(md(kd, Jd - pd)) != Nd.i.Word))), dd.test && (Wd = function(dd, Jd, kd) {
        return (pd, Nd, Wd, Pd) => {
          if (kd && !kd(pd, Nd, Wd, Pd)) return !1;
          let Zd = pd >= Pd && Nd <= Pd + Wd.length ? Wd.slice(pd - Pd, Nd - Pd) : Jd.doc.sliceString(pd, Nd);
          return dd(Zd, Jd, pd, Nd)
        }
      }(dd.test, Jd, Wd)), new Zd(Jd.doc, dd.unquoted, kd, pd, dd.caseSensitive ? void 0 : dd => dd.toLowerCase(), Wd)
    }
    class Fd extends ad {
      constructor(dd) {
        super(dd)
      }
      nextMatch(dd, Jd, kd) {
        let pd = Md(this.spec, dd, kd, dd.doc.length).nextOverlapping();
        if (pd.done) {
          let kd = Math.min(dd.doc.length, Jd + this.spec.unquoted.length);
          pd = Md(this.spec, dd, 0, kd).nextOverlapping()
        }
        return pd.done || pd.value.from == Jd && pd.value.to == kd ? null : pd.value
      }
      prevMatchInRange(dd, Jd, kd) {
        for (let pd = kd;;) {
          let kd = Math.max(Jd, pd - 1e4 - this.spec.unquoted.length),
            Nd = Md(this.spec, dd, kd, pd),
            Wd = null;
          for (; !Nd.nextOverlapping().done;) Wd = Nd.value;
          if (Wd) return Wd;
          if (kd == Jd) return null;
          pd -= 1e4
        }
      }
      prevMatch(dd, Jd, kd) {
        let pd = this.prevMatchInRange(dd, 0, Jd);
        return pd || (pd = this.prevMatchInRange(dd, Math.max(0, kd - this.spec.unquoted.length), dd.doc.length)), !pd || pd.from == Jd && pd.to == kd ? null : pd
      }
      getReplacement(dd) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(dd, Jd) {
        let kd = Md(this.spec, dd, 0, dd.doc.length),
          pd = [];
        for (; !kd.next().done;) {
          if (pd.length >= Jd) return null;
          pd.push(kd.value)
        }
        return pd
      }
      highlight(dd, Jd, kd, pd) {
        let Nd = Md(this.spec, dd, Math.max(0, Jd - this.spec.unquoted.length), Math.min(kd + this.spec.unquoted.length, dd.doc.length));
        for (; !Nd.next().done;) pd(Nd.value.from, Nd.value.to)
      }
    }

    function Yd(dd, Jd, kd, pd) {
      let Wd;
      var Pd;
      return dd.wholeWord && (Pd = Jd.charCategorizer(Jd.selection.main.head), Wd = (dd, Jd, kd) => !kd[0].length || (Pd(md(kd.input, kd.index)) != Nd.i.Word || Pd(bd(kd.input, kd.index)) != Nd.i.Word) && (Pd(bd(kd.input, kd.index + kd[0].length)) != Nd.i.Word || Pd(md(kd.input, kd.index + kd[0].length)) != Nd.i.Word)), dd.test && (Wd = function(dd, Jd, kd) {
        return (pd, Nd, Wd) => (!kd || kd(pd, Nd, Wd)) && dd(Wd[0], Jd, pd, Nd)
      }(dd.test, Jd, Wd)), new Kd(Jd.doc, dd.search, {
        ignoreCase: !dd.caseSensitive,
        test: Wd
      }, kd, pd)
    }

    function md(dd, Jd) {
      return dd.slice((0, Nd.X)(dd, Jd, !1), Jd)
    }

    function bd(dd, Jd) {
      return dd.slice(Jd, (0, Nd.X)(dd, Jd))
    }
    class Sd extends ad {
      nextMatch(dd, Jd, kd) {
        let pd = Yd(this.spec, dd, kd, dd.doc.length).next();
        return pd.done && (pd = Yd(this.spec, dd, 0, Jd).next()), pd.done ? null : pd.value
      }
      prevMatchInRange(dd, Jd, kd) {
        for (let pd = 1;; pd++) {
          let Nd = Math.max(Jd, kd - 1e4 * pd),
            Wd = Yd(this.spec, dd, Nd, kd),
            Pd = null;
          for (; !Wd.next().done;) Pd = Wd.value;
          if (Pd && (Nd == Jd || Pd.from > Nd + 10)) return Pd;
          if (Nd == Jd) return null
        }
      }
      prevMatch(dd, Jd, kd) {
        return this.prevMatchInRange(dd, 0, Jd) || this.prevMatchInRange(dd, kd, dd.doc.length)
      }
      getReplacement(dd) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((Jd, kd) => {
          if ("&" == kd) return dd.match[0];
          if ("$" == kd) return "$";
          for (let pd = kd.length; pd > 0; pd--) {
            let Jd = +kd.slice(0, pd);
            if (Jd > 0 && Jd < dd.match.length) return dd.match[Jd] + kd.slice(pd)
          }
          return Jd
        }))
      }
      matchAll(dd, Jd) {
        let kd = Yd(this.spec, dd, 0, dd.doc.length),
          pd = [];
        for (; !kd.next().done;) {
          if (pd.length >= Jd) return null;
          pd.push(kd.value)
        }
        return pd
      }
      highlight(dd, Jd, kd, pd) {
        let Nd = Yd(this.spec, dd, Math.max(0, Jd - 250), Math.min(kd + 250, dd.doc.length));
        for (; !Nd.next().done;) pd(Nd.value.from, Nd.value.to)
      }
    }
    const jd = Nd.C.define(),
      Xd = Nd.C.define(),
      fd = Nd.E.define({
        create: dd => new nd(Vd(dd).create(), null),
        update(dd, Jd) {
          for (let kd of Jd.effects) kd.is(jd) ? dd = new nd(kd.value.create(), dd.panel) : kd.is(Xd) && (dd = new nd(dd.query, kd.value ? td : null));
          return dd
        },
        provide: dd => pd.ob.from(dd, (dd => dd.panel))
      });
    class nd {
      constructor(dd, Jd) {
        this.query = dd, this.panel = Jd
      }
    }
    const Ud = pd.b.mark({
        class: "cm-searchMatch"
      }),
      yd = pd.b.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      Dd = pd.p.fromClass(class {
        constructor(dd) {
          this.view = dd, this.RW = this.highlight(dd.state.field(fd))
        }
        update(dd) {
          let Jd = dd.state.field(fd);
          (Jd != dd.startState.field(fd) || dd.docChanged || dd.selectionSet || dd.viewportChanged) && (this.RW = this.highlight(Jd))
        }
        highlight(dd) {
          let {
            query: Jd,
            panel: kd
          } = dd;
          if (!kd || !Jd.spec.valid) return pd.b.none;
          let {
            view: Wd
          } = this, Pd = new Nd.v;
          for (let pd = 0, Nd = Wd.R6, Zd = Nd.length; pd < Zd; pd++) {
            let {
              from: dd,
              to: kd
            } = Nd[pd];
            for (; pd < Zd - 1 && kd > Nd[pd + 1].from - 500;) kd = Nd[++pd].to;
            Jd.highlight(Wd.state, dd, kd, ((dd, Jd) => {
              let kd = Wd.state.selection.UO.some((kd => kd.from == dd && kd.to == Jd));
              Pd.add(dd, Jd, kd ? yd : Ud)
            }))
          }
          return Pd.finish()
        }
      }, {
        RW: dd => dd.RW
      });

    function Td(dd) {
      return Jd => {
        let kd = Jd.state.field(fd, !1);
        return kd && kd.query.spec.valid ? dd(Jd, kd) : wd(Jd)
      }
    }
    const Ed = Td(((dd, Jd) => {
        let {
          query: kd
        } = Jd, {
          to: pd
        } = dd.state.selection.main, Wd = kd.nextMatch(dd.state, pd, pd);
        if (!Wd) return !1;
        let Pd = Nd.k.single(Wd.from, Wd.to),
          Zd = dd.state.facet(Bd);
        return dd.dispatch({
          selection: Pd,
          effects: [WJ(dd, Wd), Zd.scrollToMatch(Pd.main, dd)],
          userEvent: "select.search"
        }), Hd(dd), !0
      })),
      cd = Td(((dd, Jd) => {
        let {
          query: kd
        } = Jd, {
          state: pd
        } = dd, {
          from: Wd
        } = pd.selection.main, Pd = kd.prevMatch(pd, Wd, Wd);
        if (!Pd) return !1;
        let Zd = Nd.k.single(Pd.from, Pd.to),
          gd = dd.state.facet(Bd);
        return dd.dispatch({
          selection: Zd,
          effects: [WJ(dd, Pd), gd.scrollToMatch(Zd.main, dd)],
          userEvent: "select.search"
        }), Hd(dd), !0
      })),
      hd = Td(((dd, Jd) => {
        let {
          query: kd
        } = Jd, pd = kd.matchAll(dd.state, 1e3);
        return !(!pd || !pd.length) && (dd.dispatch({
          selection: Nd.k.create(pd.map((dd => Nd.k.range(dd.from, dd.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      rd = Td(((dd, Jd) => {
        let {
          query: kd
        } = Jd, {
          state: Wd
        } = dd, {
          from: Pd,
          to: Zd
        } = Wd.selection.main;
        if (Wd.readOnly) return !1;
        let gd = kd.nextMatch(Wd, Pd, Pd);
        if (!gd) return !1;
        let Cd, Kd, od = gd,
          ld = [],
          Qd = [];
        od.from == Pd && od.to == Zd && (Kd = Wd.toText(kd.getReplacement(od)), ld.push({
          from: od.from,
          to: od.to,
          insert: Kd
        }), od = kd.nextMatch(Wd, od.from, od.to), Qd.push(pd.i.announce.of(Wd.phrase("replaced match on line $", Wd.doc.lineAt(Pd).number) + ".")));
        let Ld = dd.state.changes(ld);
        return od && (Cd = Nd.k.single(od.from, od.to).map(Ld), Qd.push(WJ(dd, od)), Qd.push(Wd.facet(Bd).scrollToMatch(Cd.main, dd))), dd.dispatch({
          changes: Ld,
          selection: Cd,
          effects: Qd,
          userEvent: "input.replace"
        }), !0
      })),
      ud = Td(((dd, Jd) => {
        let {
          query: kd
        } = Jd;
        if (dd.state.readOnly) return !1;
        let Nd = kd.matchAll(dd.state, 1e9).map((dd => {
          let {
            from: Jd,
            to: pd
          } = dd;
          return {
            from: Jd,
            to: pd,
            insert: kd.getReplacement(dd)
          }
        }));
        if (!Nd.length) return !1;
        let Wd = dd.state.phrase("replaced $ matches", Nd.length) + ".";
        return dd.dispatch({
          changes: Nd,
          effects: pd.i.announce.of(Wd),
          userEvent: "input.replace.all"
        }), !0
      }));

    function td(dd) {
      return dd.state.facet(Bd).createPanel(dd)
    }

    function Vd(dd, Jd) {
      var kd, pd, Nd, Wd, Pd;
      let Zd = dd.selection.main,
        gd = Zd.empty || Zd.to > Zd.from + 100 ? "" : dd.sliceDoc(Zd.from, Zd.to);
      if (Jd && !gd) return Jd;
      let Cd = dd.facet(Bd);
      return new sd({
        search: (null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.literal) && void 0 !== kd ? kd : Cd.literal) ? gd : gd.replace(/\n/g, "\\n"),
        caseSensitive: null !== (pd = null === Jd || void 0 === Jd ? void 0 : Jd.caseSensitive) && void 0 !== pd ? pd : Cd.caseSensitive,
        literal: null !== (Nd = null === Jd || void 0 === Jd ? void 0 : Jd.literal) && void 0 !== Nd ? Nd : Cd.literal,
        regexp: null !== (Wd = null === Jd || void 0 === Jd ? void 0 : Jd.regexp) && void 0 !== Wd ? Wd : Cd.regexp,
        wholeWord: null !== (Pd = null === Jd || void 0 === Jd ? void 0 : Jd.wholeWord) && void 0 !== Pd ? Pd : Cd.wholeWord
      })
    }

    function zd(dd) {
      let Jd = (0, pd.F)(dd, td);
      return Jd && Jd.dom.querySelector("[main-field]")
    }

    function Hd(dd) {
      let Jd = zd(dd);
      Jd && Jd == dd.root.activeElement && Jd.select()
    }
    const wd = dd => {
        let Jd = dd.state.field(fd, !1);
        if (Jd && Jd.panel) {
          let kd = zd(dd);
          if (kd && kd != dd.root.activeElement) {
            let pd = Vd(dd.state, Jd.query.spec);
            pd.valid && dd.dispatch({
              effects: jd.of(pd)
            }), kd.focus(), kd.select()
          }
        } else dd.dispatch({
          effects: [Xd.of(!0), Jd ? jd.of(Vd(dd.state, Jd.query.spec)) : Nd.C.appendConfig.of(ZJ)]
        });
        return !0
      },
      Ad = dd => {
        let Jd = dd.state.field(fd, !1);
        if (!Jd || !Jd.panel) return !1;
        let kd = (0, pd.F)(dd, td);
        return kd && kd.dom.contains(dd.root.activeElement) && dd.focus(), dd.dispatch({
          effects: Xd.of(!1)
        }), !0
      },
      dJ = [{
        key: "Mod-f",
        run: wd,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: Ed,
        shift: cd,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: Ed,
        shift: cd,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: Ad,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd, pd = Jd.selection;
          if (pd.UO.length > 1 || pd.main.empty) return !1;
          let {
            from: Wd,
            to: Pd
          } = pd.main, gd = [], Cd = 0;
          for (let Kd = new Zd(Jd.doc, Jd.sliceDoc(Wd, Pd)); !Kd.next().done;) {
            if (gd.length > 1e3) return !1;
            Kd.value.from == Wd && (Cd = gd.length), gd.push(Nd.k.range(Kd.value.from, Kd.value.to))
          }
          return kd(Jd.update({
            selection: Nd.k.create(gd, Cd),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: dd => {
          let {
            state: Jd
          } = dd, kd = String(Jd.doc.lineAt(dd.state.selection.main.head).number), {
            close: Wd,
            result: Pd
          } = (0, pd.kb)(dd, {
            label: Jd.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: kd
            },
            focus: !0,
            submitLabel: Jd.phrase("go")
          });
          return Pd.then((kd => {
            let Pd = kd && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(kd.elements.line.value);
            if (!Pd) return void dd.dispatch({
              effects: Wd
            });
            let Zd = Jd.doc.lineAt(Jd.selection.main.head),
              [, gd, Cd, Kd, od] = Pd,
              ld = Kd ? +Kd.slice(1) : 0,
              Qd = Cd ? +Cd : Zd.number;
            if (Cd && od) {
              let dd = Qd / 100;
              gd && (dd = dd * ("-" == gd ? -1 : 1) + Zd.number / Jd.doc.lines), Qd = Math.round(Jd.doc.lines * dd)
            } else Cd && gd && (Qd = Qd * ("-" == gd ? -1 : 1) + Zd.number);
            let Ld = Jd.doc.line(Math.max(1, Math.min(Jd.doc.lines, Qd))),
              Od = Nd.k.cursor(Ld.from + Math.max(0, Math.min(ld, Ld.length)));
            dd.dispatch({
              effects: [Wd, pd.i.scrollIntoView(Od.from, {
                y: "center"
              })],
              selection: Od
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd, {
            UO: Wd
          } = Jd.selection;
          if (Wd.some((dd => dd.from === dd.to))) return (dd => {
            let {
              state: Jd,
              dispatch: kd
            } = dd, {
              selection: pd
            } = Jd, Wd = Nd.k.create(pd.UO.map((dd => Jd.wordAt(dd.head) || Nd.k.cursor(dd.head))), pd.mainIndex);
            return !Wd.eq(pd) && (kd(Jd.update({
              selection: Wd
            })), !0)
          })({
            state: Jd,
            dispatch: kd
          });
          let Pd = Jd.sliceDoc(Wd[0].from, Wd[0].to);
          if (Jd.selection.UO.some((dd => Jd.sliceDoc(dd.from, dd.to) != Pd))) return !1;
          let gd = function(dd, Jd) {
            let {
              main: kd,
              UO: pd
            } = dd.selection, Nd = dd.wordAt(kd.head), Wd = Nd && Nd.from == kd.from && Nd.to == kd.to;
            for (let Pd = !1, gd = new Zd(dd.doc, Jd, pd[pd.length - 1].to);;) {
              if (gd.next(), !gd.done) {
                if (Pd && pd.some((dd => dd.from == gd.value.from))) continue;
                if (Wd) {
                  let Jd = dd.wordAt(gd.value.from);
                  if (!Jd || Jd.from != gd.value.from || Jd.to != gd.value.to) continue
                }
                return gd.value
              }
              if (Pd) return null;
              gd = new Zd(dd.doc, Jd, 0, Math.max(0, pd[pd.length - 1].from - 1)), Pd = !0
            }
          }(Jd, Pd);
          return !!gd && (kd(Jd.update({
            selection: Jd.selection.addRange(Nd.k.range(gd.from, gd.to), !1),
            effects: pd.i.scrollIntoView(gd.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class JJ {
      constructor(dd) {
        this.view = dd;
        let Jd = this.query = dd.state.field(fd).query.spec;

        function kd(dd, Jd, kd) {
          return (0, Wd.d)("button", {
            class: "cm-button",
            name: dd,
            onclick: Jd,
            type: "button"
          }, kd)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, Wd.d)("input", {
          value: Jd.search,
          placeholder: kJ(dd, "Find"),
          "aria-label": kJ(dd, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, Wd.d)("input", {
          value: Jd.replace,
          placeholder: kJ(dd, "Replace"),
          "aria-label": kJ(dd, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, Wd.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: Jd.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, Wd.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: Jd.regexp,
          onchange: this.commit
        }), this.wordField = (0, Wd.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: Jd.wholeWord,
          onchange: this.commit
        }), this.dom = (0, Wd.d)("div", {
          onkeydown: dd => this.keydown(dd),
          class: "cm-search"
        }, [this.searchField, kd("next", (() => Ed(dd)), [kJ(dd, "next")]), kd("prev", (() => cd(dd)), [kJ(dd, "previous")]), kd("select", (() => hd(dd)), [kJ(dd, "all")]), (0, Wd.d)("label", null, [this.caseField, kJ(dd, "match case")]), (0, Wd.d)("label", null, [this.reField, kJ(dd, "regexp")]), (0, Wd.d)("label", null, [this.wordField, kJ(dd, "by word")]), ...dd.state.readOnly ? [] : [(0, Wd.d)("br"), this.replaceField, kd("replace", (() => rd(dd)), [kJ(dd, "replace")]), kd("replaceAll", (() => ud(dd)), [kJ(dd, "replace all")])], (0, Wd.d)("button", {
          name: "close",
          onclick: () => Ad(dd),
          "aria-label": kJ(dd, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let dd = new sd({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        dd.eq(this.query) || (this.query = dd, this.view.dispatch({
          effects: jd.of(dd)
        }))
      }
      keydown(dd) {
        (0, pd.gb)(this.view, dd, "search-panel") ? dd.preventDefault(): 13 == dd.keyCode && dd.target == this.searchField ? (dd.preventDefault(), (dd.shiftKey ? cd : Ed)(this.view)) : 13 == dd.keyCode && dd.target == this.replaceField && (dd.preventDefault(), rd(this.view))
      }
      update(dd) {
        for (let Jd of dd.transactions)
          for (let dd of Jd.effects) dd.is(jd) && !dd.value.eq(this.query) && this.setQuery(dd.value)
      }
      setQuery(dd) {
        this.query = dd, this.searchField.value = dd.search, this.replaceField.value = dd.replace, this.caseField.checked = dd.caseSensitive, this.reField.checked = dd.regexp, this.wordField.checked = dd.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(Bd).top
      }
    }

    function kJ(dd, Jd) {
      return dd.state.phrase(Jd)
    }
    const pJ = 30,
      NJ = /[\s\.,:;?!]/;

    function WJ(dd, Jd) {
      let {
        from: kd,
        to: Nd
      } = Jd, Wd = dd.state.doc.lineAt(kd), Pd = dd.state.doc.lineAt(Nd).to, Zd = Math.max(Wd.from, kd - pJ), gd = Math.min(Pd, Nd + pJ), Cd = dd.state.sliceDoc(Zd, gd);
      if (Zd != Wd.from)
        for (let pd = 0; pd < pJ; pd++)
          if (!NJ.test(Cd[pd + 1]) && NJ.test(Cd[pd])) {
            Cd = Cd.slice(pd);
            break
          } if (gd != Pd)
        for (let pd = Cd.length - 1; pd > Cd.length - pJ; pd--)
          if (!NJ.test(Cd[pd - 1]) && NJ.test(Cd[pd])) {
            Cd = Cd.slice(0, pd);
            break
          } return pd.i.announce.of(`${dd.state.phrase("current match")}. ${Cd} ${dd.state.phrase("on line")} ${Wd.number}.`)
    }
    const PJ = pd.i.baseTheme({
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
      ZJ = [fd, Nd.t.low(Dd), PJ]
  },
  41282: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Sd,
      e: () => KJ,
      i: () => FN,
      m: () => gP,
      p: () => HJ,
      s: () => md,
      w: () => bW,
      y: () => AN,
      B: () => gW,
      F: () => AW,
      I: () => zW,
      L: () => QP,
      O: () => vW,
      M: () => SP,
      Q: () => eW,
      T: () => VW,
      X: () => nN,
      Z: () => FP,
      $: () => uJ,
      ab: () => sW,
      db: () => FW,
      gb: () => DN,
      kb: () => NP,
      ob: () => pP,
      sb: () => EW
    });
    for (var pd = kd(41273), Nd = kd(41289), Wd = {
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
      }, Pd = {
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
      }, Zd = "undefined" != typeof navigator && /Mac/.test(navigator.platform), gd = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Cd = 0; Cd < 10; Cd++) Wd[48 + Cd] = Wd[96 + Cd] = String(Cd);
    for (Cd = 1; Cd <= 24; Cd++) Wd[Cd + 111] = "F" + Cd;
    for (Cd = 65; Cd <= 90; Cd++) Wd[Cd] = String.fromCharCode(Cd + 32), Pd[Cd] = String.fromCharCode(Cd);
    for (var Kd in Wd) Pd.hasOwnProperty(Kd) || (Pd[Kd] = Wd[Kd]);
    var od = kd(41298);
    let ld = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      Qd = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const Ld = /Edge\/(\d+)/.exec(ld.userAgent),
      Od = /MSIE \d/.test(ld.userAgent),
      ed = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ld.userAgent),
      Rd = !!(Od || ed || Ld),
      Id = !Rd && /gecko\/(\d+)/i.test(ld.userAgent),
      Gd = !Rd && /Chrome\/(\d+)/.exec(ld.userAgent),
      vd = "webkitFontSmoothing" in Qd.documentElement.style,
      xd = !Rd && /Apple Computer/.test(ld.vendor),
      qd = xd && (/Mobile\/\w+/.test(ld.userAgent) || ld.maxTouchPoints > 2);
    var Bd = {
      mac: qd || /Mac/.test(ld.platform),
      windows: /Win/.test(ld.platform),
      linux: /Linux|X11/.test(ld.platform),
      ie: Rd,
      ie_version: Od ? Qd.documentMode || 6 : ed ? +ed[1] : Ld ? +Ld[1] : 0,
      gecko: Id,
      gecko_version: Id ? +(/Firefox\/(\d+)/.exec(ld.userAgent) || [0, 0])[1] : 0,
      chrome: !!Gd,
      chrome_version: Gd ? +Gd[1] : 0,
      ios: qd,
      android: /Android\b/.test(ld.userAgent),
      webkit: vd,
      webkit_version: vd ? +(/\bAppleWebKit\/(\d+)/.exec(ld.userAgent) || [0, 0])[1] : 0,
      safari: xd,
      safari_version: xd ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(ld.userAgent) || [0, 0])[1] : 0,
      tabSize: null != Qd.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function sd(dd, Jd) {
      for (let kd in dd) "class" == kd && Jd.class ? Jd.class += " " + dd.class : "style" == kd && Jd.style ? Jd.style += ";" + dd.style : Jd[kd] = dd[kd];
      return Jd
    }
    const ad = Object.create(null);

    function Md(dd, Jd, kd) {
      if (dd == Jd) return !0;
      dd || (dd = ad), Jd || (Jd = ad);
      let pd = Object.keys(dd),
        Nd = Object.keys(Jd);
      if (pd.length - (kd && pd.indexOf(kd) > -1 ? 1 : 0) != Nd.length - (kd && Nd.indexOf(kd) > -1 ? 1 : 0)) return !1;
      for (let Wd of pd)
        if (Wd != kd && (-1 == Nd.indexOf(Wd) || dd[Wd] !== Jd[Wd])) return !1;
      return !0
    }

    function Fd(dd, Jd, kd) {
      let pd = !1;
      if (Jd)
        for (let Nd in Jd) kd && Nd in kd || (pd = !0, "style" == Nd ? dd.style.cssText = "" : dd.removeAttribute(Nd));
      if (kd)
        for (let Nd in kd) Jd && Jd[Nd] == kd[Nd] || (pd = !0, "style" == Nd ? dd.style.cssText = kd[Nd] : dd.setAttribute(Nd, kd[Nd]));
      return pd
    }

    function Yd(dd) {
      let Jd = Object.create(null);
      for (let kd = 0; kd < dd.attributes.length; kd++) {
        let pd = dd.attributes[kd];
        Jd[pd.name] = pd.value
      }
      return Jd
    }
    class md {
      eq(dd) {
        return !1
      }
      updateDOM(dd, Jd, kd) {
        return !1
      }
      compare(dd) {
        return this == dd || this.constructor == dd.constructor && this.eq(dd)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(dd) {
        return !0
      }
      coordsAt(dd, Jd, kd) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(dd) {}
    }
    var bd = function(dd) {
      return dd[dd.Text = 0] = "Text", dd[dd.WidgetBefore = 1] = "WidgetBefore", dd[dd.WidgetAfter = 2] = "WidgetAfter", dd[dd.WidgetRange = 3] = "WidgetRange", dd
    }(bd || (bd = {}));
    class Sd extends pd.A {
      constructor(dd, Jd, kd, pd) {
        super(), this.startSide = dd, this.endSide = Jd, this.widget = kd, this.spec = pd
      }
      get heightRelevant() {
        return !1
      }
      static mark(dd) {
        return new jd(dd)
      }
      static widget(dd) {
        let Jd = Math.max(-1e4, Math.min(1e4, dd.side || 0)),
          kd = !!dd.block;
        return Jd += kd && !dd.inlineOrder ? Jd > 0 ? 3e8 : -4e8 : Jd > 0 ? 1e8 : -1e8, new fd(dd, Jd, Jd, kd, dd.widget || null, !1)
      }
      static replace(dd) {
        let Jd, kd, pd = !!dd.block;
        if (dd.isBlockGap) Jd = -5e8, kd = 4e8;
        else {
          let {
            start: Nd,
            end: Wd
          } = nd(dd, pd);
          Jd = (Nd ? pd ? -3e8 : -1 : 5e8) - 1, kd = 1 + (Wd ? pd ? 2e8 : 1 : -6e8)
        }
        return new fd(dd, Jd, kd, pd, dd.widget || null, !0)
      }
      static line(dd) {
        return new Xd(dd)
      }
      static set(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return pd.x.of(dd, Jd)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Sd.none = pd.x.empty;
    class jd extends Sd {
      constructor(dd) {
        let {
          start: Jd,
          end: kd
        } = nd(dd);
        super(Jd ? -1 : 5e8, kd ? 1 : -6e8, null, dd), this.tagName = dd.tagName || "span", this.attrs = dd.class && dd.attributes ? sd(dd.attributes, {
          class: dd.class
        }) : dd.class ? {
          class: dd.class
        } : dd.attributes || ad
      }
      eq(dd) {
        return this == dd || dd instanceof jd && this.tagName == dd.tagName && Md(this.attrs, dd.attrs)
      }
      range(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        if (dd >= Jd) throw new RangeError("Mark decorations may not be empty");
        return super.range(dd, Jd)
      }
    }
    jd.prototype.point = !1;
    class Xd extends Sd {
      constructor(dd) {
        super(-2e8, -2e8, null, dd)
      }
      eq(dd) {
        return dd instanceof Xd && this.spec.class == dd.spec.class && Md(this.spec.attributes, dd.spec.attributes)
      }
      range(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        if (Jd != dd) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(dd, Jd)
      }
    }
    Xd.prototype.mapMode = pd.s.TrackBefore, Xd.prototype.point = !0;
    class fd extends Sd {
      constructor(dd, Jd, kd, Nd, Wd, Pd) {
        super(Jd, kd, Wd, dd), this.block = Nd, this.isReplace = Pd, this.mapMode = Nd ? Jd <= 0 ? pd.s.TrackBefore : pd.s.TrackAfter : pd.s.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? bd.WidgetRange : this.startSide <= 0 ? bd.WidgetBefore : bd.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(dd) {
        return dd instanceof fd && (Jd = this.widget, kd = dd.widget, Jd == kd || !!(Jd && kd && Jd.compare(kd))) && this.block == dd.block && this.startSide == dd.startSide && this.endSide == dd.endSide;
        var Jd, kd
      }
      range(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd;
        if (this.isReplace && (dd > Jd || dd == Jd && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && Jd != dd) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(dd, Jd)
      }
    }

    function nd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: kd,
          inclusiveEnd: pd
        } = dd;
      return null == kd && (kd = dd.inclusive), null == pd && (pd = dd.inclusive), {
        start: null !== kd && void 0 !== kd ? kd : Jd,
        end: null !== pd && void 0 !== pd ? pd : Jd
      }
    }

    function Ud(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Nd = kd.length - 1;
      Nd >= 0 && kd[Nd] + pd >= dd ? kd[Nd] = Math.max(kd[Nd], Jd) : kd.push(dd, Jd)
    }
    fd.prototype.point = !0;
    class yd extends pd.A {
      constructor(dd, Jd) {
        super(), this.tagName = dd, this.attributes = Jd
      }
      eq(dd) {
        return dd == this || dd instanceof yd && this.tagName == dd.tagName && Md(this.attributes, dd.attributes)
      }
      static create(dd) {
        return new yd(dd.tagName, dd.attributes || ad)
      }
      static set(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return pd.x.of(dd, Jd)
      }
    }

    function Dd(dd) {
      let Jd;
      return Jd = 11 == dd.nodeType ? dd.getSelection ? dd : dd.ownerDocument : dd, Jd.getSelection()
    }

    function Td(dd, Jd) {
      return !!Jd && (dd == Jd || dd.contains(1 != Jd.nodeType ? Jd.parentNode : Jd))
    }

    function Ed(dd, Jd) {
      if (!Jd.anchorNode) return !1;
      try {
        return Td(dd, Jd.anchorNode)
      } catch (kd) {
        return !1
      }
    }

    function cd(dd) {
      return 3 == dd.nodeType ? NJ(dd, 0, dd.nodeValue.length).getClientRects() : 1 == dd.nodeType ? dd.getClientRects() : []
    }

    function hd(dd, Jd, kd, pd) {
      return !!kd && (td(dd, Jd, kd, pd, -1) || td(dd, Jd, kd, pd, 1))
    }

    function rd(dd) {
      for (var Jd = 0;; Jd++)
        if (!(dd = dd.previousSibling)) return Jd
    }

    function ud(dd) {
      return 1 == dd.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(dd.nodeName)
    }

    function td(dd, Jd, kd, pd, Nd) {
      for (;;) {
        if (dd == kd && Jd == pd) return !0;
        if (Jd == (Nd < 0 ? 0 : Vd(dd))) {
          if ("DIV" == dd.nodeName) return !1;
          let kd = dd.parentNode;
          if (!kd || 1 != kd.nodeType) return !1;
          Jd = rd(dd) + (Nd < 0 ? 0 : 1), dd = kd
        } else {
          if (1 != dd.nodeType) return !1;
          if (1 == (dd = dd.childNodes[Jd + (Nd < 0 ? -1 : 0)]).nodeType && "false" == dd.contentEditable) return !1;
          Jd = Nd < 0 ? Vd(dd) : 0
        }
      }
    }

    function Vd(dd) {
      return 3 == dd.nodeType ? dd.nodeValue.length : dd.childNodes.length
    }

    function zd(dd, Jd) {
      let kd = Jd ? dd.left : dd.right;
      return {
        left: kd,
        right: kd,
        top: dd.top,
        bottom: dd.bottom
      }
    }

    function Hd(dd) {
      let Jd = dd.visualViewport;
      return Jd ? {
        left: 0,
        right: Jd.width,
        top: 0,
        bottom: Jd.height
      } : {
        left: 0,
        right: dd.innerWidth,
        top: 0,
        bottom: dd.innerHeight
      }
    }

    function wd(dd, Jd) {
      let kd = Jd.width / dd.offsetWidth,
        pd = Jd.height / dd.offsetHeight;
      return (kd > .995 && kd < 1.005 || !isFinite(kd) || Math.abs(Jd.width - dd.offsetWidth) < 1) && (kd = 1), (pd > .995 && pd < 1.005 || !isFinite(pd) || Math.abs(Jd.height - dd.offsetHeight) < 1) && (pd = 1), {
        scaleX: kd,
        scaleY: pd
      }
    }

    function Ad(dd) {
      let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        kd = dd.ownerDocument,
        pd = null,
        Nd = null;
      for (let Wd = dd.parentNode; Wd && (Wd != kd.body && (Jd && !pd || !Nd));)
        if (1 == Wd.nodeType) !Nd && Wd.scrollHeight > Wd.clientHeight && (Nd = Wd), Jd && !pd && Wd.scrollWidth > Wd.clientWidth && (pd = Wd), Wd = Wd.assignedSlot || Wd.parentNode;
        else {
          if (11 != Wd.nodeType) break;
          Wd = Wd.host
        } return {
        x: pd,
        y: Nd
      }
    }
    yd.prototype.startSide = yd.prototype.endSide = -1;
    class dJ {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(dd) {
        return this.anchorNode == dd.anchorNode && this.anchorOffset == dd.anchorOffset && this.focusNode == dd.focusNode && this.focusOffset == dd.focusOffset
      }
      setRange(dd) {
        let {
          anchorNode: Jd,
          focusNode: kd
        } = dd;
        this.set(Jd, Math.min(dd.anchorOffset, Jd ? Vd(Jd) : 0), kd, Math.min(dd.focusOffset, kd ? Vd(kd) : 0))
      }
      set(dd, Jd, kd, pd) {
        this.anchorNode = dd, this.anchorOffset = Jd, this.focusNode = kd, this.focusOffset = pd
      }
    }
    let JJ, kJ = null;

    function pJ(dd) {
      if (dd.setActive) return dd.setActive();
      if (kJ) return dd.focus(kJ);
      let Jd = [];
      for (let kd = dd; kd && (Jd.push(kd, kd.scrollTop, kd.scrollLeft), kd != kd.ownerDocument); kd = kd.parentNode);
      if (dd.focus(null == kJ ? {
          get preventScroll() {
            return kJ = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !kJ) {
        kJ = !1;
        for (let dd = 0; dd < Jd.length;) {
          let kd = Jd[dd++],
            pd = Jd[dd++],
            Nd = Jd[dd++];
          kd.scrollTop != pd && (kd.scrollTop = pd), kd.scrollLeft != Nd && (kd.scrollLeft = Nd)
        }
      }
    }

    function NJ(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jd,
        pd = JJ || (JJ = document.createRange());
      return pd.setEnd(dd, kd), pd.setStart(dd, Jd), pd
    }

    function WJ(dd, Jd, kd, pd) {
      let Nd = {
        key: Jd,
        code: Jd,
        keyCode: kd,
        which: kd,
        cancelable: !0
      };
      pd && ({
        altKey: Nd.altKey,
        ctrlKey: Nd.ctrlKey,
        shiftKey: Nd.shiftKey,
        metaKey: Nd.metaKey
      } = pd);
      let Wd = new KeyboardEvent("keydown", Nd);
      Wd.synthetic = !0, dd.dispatchEvent(Wd);
      let Pd = new KeyboardEvent("keyup", Nd);
      return Pd.synthetic = !0, dd.dispatchEvent(Pd), Wd.defaultPrevented || Pd.defaultPrevented
    }

    function PJ(dd) {
      return dd instanceof Window ? dd.pageYOffset > Math.max(0, dd.document.documentElement.scrollHeight - dd.innerHeight - 4) : dd.scrollTop > Math.max(1, dd.scrollHeight - dd.clientHeight - 4)
    }

    function ZJ(dd, Jd) {
      for (let kd = dd, pd = Jd;;) {
        if (3 == kd.nodeType && pd > 0) return {
          node: kd,
          offset: pd
        };
        if (1 == kd.nodeType && pd > 0) {
          if ("false" == kd.contentEditable) return null;
          kd = kd.childNodes[pd - 1], pd = Vd(kd)
        } else {
          if (!kd.parentNode || ud(kd)) return null;
          pd = rd(kd), kd = kd.parentNode
        }
      }
    }

    function gJ(dd, Jd) {
      for (let kd = dd, pd = Jd;;) {
        if (3 == kd.nodeType && pd < kd.nodeValue.length) return {
          node: kd,
          offset: pd
        };
        if (1 == kd.nodeType && pd < kd.childNodes.length) {
          if ("false" == kd.contentEditable) return null;
          kd = kd.childNodes[pd], pd = 0
        } else {
          if (!kd.parentNode || ud(kd)) return null;
          pd = rd(kd) + 1, kd = kd.parentNode
        }
      }
    }
    Bd.safari && Bd.safari_version >= 26 && (kJ = !1);
    class CJ {
      constructor(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = dd, this.offset = Jd, this.precise = kd
      }
      static before(dd, Jd) {
        return new CJ(dd.parentNode, rd(dd), Jd)
      }
      static after(dd, Jd) {
        return new CJ(dd.parentNode, rd(dd) + 1, Jd)
      }
    }
    var KJ = function(dd) {
      return dd[dd.LTR = 0] = "LTR", dd[dd.RTL = 1] = "RTL", dd
    }(KJ || (KJ = {}));
    const oJ = KJ.LTR,
      lJ = KJ.RTL;

    function QJ(dd) {
      let Jd = [];
      for (let kd = 0; kd < dd.length; kd++) Jd.push(1 << +dd[kd]);
      return Jd
    }
    const LJ = QJ("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      OJ = QJ("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      eJ = Object.create(null),
      RJ = [];
    for (let jP of ["()", "[]", "{}"]) {
      let dd = jP.charCodeAt(0),
        Jd = jP.charCodeAt(1);
      eJ[dd] = Jd, eJ[Jd] = -dd
    }

    function IJ(dd) {
      return dd <= 247 ? LJ[dd] : 1424 <= dd && dd <= 1524 ? 2 : 1536 <= dd && dd <= 1785 ? OJ[dd - 1536] : 1774 <= dd && dd <= 2220 ? 4 : 8192 <= dd && dd <= 8204 ? 256 : 64336 <= dd && dd <= 65023 ? 4 : 1
    }
    const GJ = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class vJ {
      get dir() {
        return this.level % 2 ? lJ : oJ
      }
      constructor(dd, Jd, kd) {
        this.from = dd, this.to = Jd, this.level = kd
      }
      side(dd, Jd) {
        return this.dir == Jd == dd ? this.to : this.from
      }
      forward(dd, Jd) {
        return dd == (this.dir == Jd)
      }
      static find(dd, Jd, kd, pd) {
        let Nd = -1;
        for (let Wd = 0; Wd < dd.length; Wd++) {
          let Pd = dd[Wd];
          if (Pd.from <= Jd && Pd.to >= Jd) {
            if (Pd.level == kd) return Wd;
            (Nd < 0 || (0 != pd ? pd < 0 ? Pd.from < Jd : Pd.to > Jd : dd[Nd].level > Pd.level)) && (Nd = Wd)
          }
        }
        if (Nd < 0) throw new RangeError("Index out of range");
        return Nd
      }
    }

    function xJ(dd, Jd) {
      if (dd.length != Jd.length) return !1;
      for (let kd = 0; kd < dd.length; kd++) {
        let pd = dd[kd],
          Nd = Jd[kd];
        if (pd.from != Nd.from || pd.to != Nd.to || pd.direction != Nd.direction || !xJ(pd.inner, Nd.inner)) return !1
      }
      return !0
    }
    const qJ = [];

    function BJ(dd, Jd, kd, pd, Nd, Wd, Pd) {
      let Zd = pd % 2 ? 2 : 1;
      if (pd % 2 == Nd % 2)
        for (let gd = Jd, Cd = 0; gd < kd;) {
          let Jd = !0,
            Kd = !1;
          if (Cd == Wd.length || gd < Wd[Cd].from) {
            let dd = qJ[gd];
            dd != Zd && (Jd = !1, Kd = 16 == dd)
          }
          let od = Jd || 1 != Zd ? null : [],
            ld = Jd ? pd : pd + 1,
            Qd = gd;
          dd: for (;;)
            if (Cd < Wd.length && Qd == Wd[Cd].from) {
              if (Kd) break dd;
              let Ld = Wd[Cd];
              if (!Jd)
                for (let dd = Ld.to, Jd = Cd + 1;;) {
                  if (dd == kd) break dd;
                  if (!(Jd < Wd.length && Wd[Jd].from == dd)) {
                    if (qJ[dd] == Zd) break dd;
                    break
                  }
                  dd = Wd[Jd++].to
                }
              if (Cd++, od) od.push(Ld);
              else {
                Ld.from > gd && Pd.push(new vJ(gd, Ld.from, ld)), sJ(dd, Ld.direction == oJ != !(ld % 2) ? pd + 1 : pd, Nd, Ld.inner, Ld.from, Ld.to, Pd), gd = Ld.to
              }
              Qd = Ld.to
            } else {
              if (Qd == kd || (Jd ? qJ[Qd] != Zd : qJ[Qd] == Zd)) break;
              Qd++
            } od ? BJ(dd, gd, Qd, pd + 1, Nd, od, Pd) : gd < Qd && Pd.push(new vJ(gd, Qd, ld)), gd = Qd
        } else
          for (let gd = kd, Cd = Wd.length; gd > Jd;) {
            let kd = !0,
              Kd = !1;
            if (!Cd || gd > Wd[Cd - 1].to) {
              let dd = qJ[gd - 1];
              dd != Zd && (kd = !1, Kd = 16 == dd)
            }
            let od = kd || 1 != Zd ? null : [],
              ld = kd ? pd : pd + 1,
              Qd = gd;
            dd: for (;;)
              if (Cd && Qd == Wd[Cd - 1].to) {
                if (Kd) break dd;
                let Ld = Wd[--Cd];
                if (!kd)
                  for (let dd = Ld.from, kd = Cd;;) {
                    if (dd == Jd) break dd;
                    if (!kd || Wd[kd - 1].to != dd) {
                      if (qJ[dd - 1] == Zd) break dd;
                      break
                    }
                    dd = Wd[--kd].from
                  }
                if (od) od.push(Ld);
                else {
                  Ld.to < gd && Pd.push(new vJ(Ld.to, gd, ld)), sJ(dd, Ld.direction == oJ != !(ld % 2) ? pd + 1 : pd, Nd, Ld.inner, Ld.from, Ld.to, Pd), gd = Ld.from
                }
                Qd = Ld.from
              } else {
                if (Qd == Jd || (kd ? qJ[Qd - 1] != Zd : qJ[Qd - 1] == Zd)) break;
                Qd--
              } od ? BJ(dd, Qd, gd, pd + 1, Nd, od, Pd) : Qd < gd && Pd.push(new vJ(Qd, gd, ld)), gd = Qd
          }
    }

    function sJ(dd, Jd, kd, pd, Nd, Wd, Pd) {
      let Zd = Jd % 2 ? 2 : 1;
      ! function(dd, Jd, kd, pd, Nd) {
        for (let Wd = 0; Wd <= pd.length; Wd++) {
          let Pd = Wd ? pd[Wd - 1].to : Jd,
            Zd = Wd < pd.length ? pd[Wd].from : kd,
            gd = Wd ? 256 : Nd;
          for (let Jd = Pd, kd = gd, pd = gd; Jd < Zd; Jd++) {
            let Nd = IJ(dd.charCodeAt(Jd));
            512 == Nd ? Nd = kd : 8 == Nd && 4 == pd && (Nd = 16), qJ[Jd] = 4 == Nd ? 2 : Nd, 7 & Nd && (pd = Nd), kd = Nd
          }
          for (let dd = Pd, Jd = gd, pd = gd; dd < Zd; dd++) {
            let Nd = qJ[dd];
            if (128 == Nd) dd < Zd - 1 && Jd == qJ[dd + 1] && 24 & Jd ? Nd = qJ[dd] = Jd : qJ[dd] = 256;
            else if (64 == Nd) {
              let Nd = dd + 1;
              for (; Nd < Zd && 64 == qJ[Nd];) Nd++;
              let Wd = dd && 8 == Jd || Nd < kd && 8 == qJ[Nd] ? 1 == pd ? 1 : 8 : 256;
              for (let Jd = dd; Jd < Nd; Jd++) qJ[Jd] = Wd;
              dd = Nd - 1
            } else 8 == Nd && 1 == pd && (qJ[dd] = 1);
            Jd = Nd, 7 & Nd && (pd = Nd)
          }
        }
      }(dd, Nd, Wd, pd, Zd),
      function(dd, Jd, kd, pd, Nd) {
        let Wd = 1 == Nd ? 2 : 1;
        for (let Pd = 0, Zd = 0, gd = 0; Pd <= pd.length; Pd++) {
          let Cd = Pd ? pd[Pd - 1].to : Jd,
            Kd = Pd < pd.length ? pd[Pd].from : kd;
          for (let Jd, kd, pd, Pd = Cd; Pd < Kd; Pd++)
            if (kd = eJ[Jd = dd.charCodeAt(Pd)])
              if (kd < 0) {
                for (let dd = Zd - 3; dd >= 0; dd -= 3)
                  if (RJ[dd + 1] == -kd) {
                    let Jd = RJ[dd + 2],
                      kd = 2 & Jd ? Nd : 4 & Jd ? 1 & Jd ? Wd : Nd : 0;
                    kd && (qJ[Pd] = qJ[RJ[dd]] = kd), Zd = dd;
                    break
                  }
              } else {
                if (189 == RJ.length) break;
                RJ[Zd++] = Pd, RJ[Zd++] = Jd, RJ[Zd++] = gd
              }
          else if (2 == (pd = qJ[Pd]) || 1 == pd) {
            let dd = pd == Nd;
            gd = dd ? 0 : 1;
            for (let Jd = Zd - 3; Jd >= 0; Jd -= 3) {
              let kd = RJ[Jd + 2];
              if (2 & kd) break;
              if (dd) RJ[Jd + 2] |= 2;
              else {
                if (4 & kd) break;
                RJ[Jd + 2] |= 4
              }
            }
          }
        }
      }(dd, Nd, Wd, pd, Zd),
      function(dd, Jd, kd, pd) {
        for (let Nd = 0, Wd = pd; Nd <= kd.length; Nd++) {
          let Pd = Nd ? kd[Nd - 1].to : dd,
            Zd = Nd < kd.length ? kd[Nd].from : Jd;
          for (let gd = Pd; gd < Zd;) {
            let Pd = qJ[gd];
            if (256 == Pd) {
              let Pd = gd + 1;
              for (;;)
                if (Pd == Zd) {
                  if (Nd == kd.length) break;
                  Pd = kd[Nd++].to, Zd = Nd < kd.length ? kd[Nd].from : Jd
                } else {
                  if (256 != qJ[Pd]) break;
                  Pd++
                } let Cd = 1 == Wd,
                Kd = Cd == (1 == (Pd < Jd ? qJ[Pd] : pd)) ? Cd ? 1 : 2 : pd;
              for (let Jd = Pd, pd = Nd, Wd = pd ? kd[pd - 1].to : dd; Jd > gd;) Jd == Wd && (Jd = kd[--pd].from, Wd = pd ? kd[pd - 1].to : dd), qJ[--Jd] = Kd;
              gd = Pd
            } else Wd = Pd, gd++
          }
        }
      }(Nd, Wd, pd, Zd), BJ(dd, Nd, Wd, Jd, kd, pd, Pd)
    }

    function iJ(dd, Jd, kd) {
      if (!dd) return [new vJ(0, 0, Jd == lJ ? 1 : 0)];
      if (Jd == oJ && !kd.length && !GJ.test(dd)) return aJ(dd.length);
      if (kd.length)
        for (; dd.length > qJ.length;) qJ[qJ.length] = 256;
      let pd = [],
        Nd = Jd == oJ ? 0 : 1;
      return sJ(dd, Nd, Nd, kd, 0, dd.length, pd), pd
    }

    function aJ(dd) {
      return [new vJ(0, dd, 0)]
    }
    let MJ = "";

    function FJ(dd, Jd, kd, Nd, Wd) {
      var Pd;
      let Zd = Nd.head - dd.from,
        gd = vJ.find(Jd, Zd, null !== (Pd = Nd.bidiLevel) && void 0 !== Pd ? Pd : -1, Nd.assoc),
        Cd = Jd[gd],
        Kd = Cd.side(Wd, kd);
      if (Zd == Kd) {
        let dd = gd += Wd ? 1 : -1;
        if (dd < 0 || dd >= Jd.length) return null;
        Cd = Jd[gd = dd], Zd = Cd.side(!Wd, kd), Kd = Cd.side(Wd, kd)
      }
      let od = (0, pd.X)(dd.text, Zd, Cd.forward(Wd, kd));
      (od < Cd.from || od > Cd.to) && (od = Kd), MJ = dd.text.slice(Math.min(Zd, od), Math.max(Zd, od));
      let ld = gd == (Wd ? Jd.length - 1 : 0) ? null : Jd[gd + (Wd ? 1 : -1)];
      return ld && od == Kd && ld.level + (Wd ? 0 : 1) < Cd.level ? pd.k.cursor(ld.side(!Wd, kd) + dd.from, ld.forward(Wd, kd) ? 1 : -1, ld.level) : pd.k.cursor(od + dd.from, Cd.forward(Wd, kd) ? -1 : 1, Cd.level)
    }

    function YJ(dd, Jd, kd) {
      for (let pd = Jd; pd < kd; pd++) {
        let Jd = IJ(dd.charCodeAt(pd));
        if (1 == Jd) return oJ;
        if (2 == Jd || 4 == Jd) return lJ
      }
      return oJ
    }
    const mJ = pd.o.define(),
      bJ = pd.o.define(),
      SJ = pd.o.define(),
      jJ = pd.o.define(),
      XJ = pd.o.define(),
      fJ = pd.o.define(),
      nJ = pd.o.define(),
      UJ = pd.o.define(),
      yJ = pd.o.define(),
      DJ = pd.o.define({
        combine: dd => dd.some((dd => dd))
      }),
      TJ = pd.o.define({
        combine: dd => dd.some((dd => dd))
      }),
      EJ = pd.o.define();
    class cJ {
      constructor(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = dd, this.y = Jd, this.x = kd, this.yMargin = pd, this.xMargin = Nd, this.isSnapshot = Wd
      }
      map(dd) {
        return dd.empty ? this : new cJ(this.range.map(dd), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(dd) {
        return this.range.to <= dd.doc.length ? this : new cJ(pd.k.cursor(dd.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const hJ = pd.C.define({
        map: (dd, Jd) => dd.map(Jd)
      }),
      rJ = pd.C.define();

    function uJ(dd, Jd, kd) {
      let pd = dd.facet(jJ);
      pd.length ? pd[0](Jd) : window.onerror && window.onerror(String(Jd), kd, void 0, void 0, Jd) || (kd ? console.error(kd + ":", Jd) : console.error(Jd))
    }
    const tJ = pd.o.define({
      combine: dd => !dd.length || dd[0]
    });
    let VJ = 0;
    const zJ = pd.o.define({
      combine: dd => dd.filter(((Jd, kd) => {
        for (let pd = 0; pd < kd; pd++)
          if (dd[pd].plugin == Jd.plugin) return !1;
        return !0
      }))
    });
    class HJ {
      constructor(dd, Jd, kd, pd, Nd) {
        this.id = dd, this.create = Jd, this.domEventHandlers = kd, this.domEventObservers = pd, this.baseExtensions = Nd(this), this.extension = this.baseExtensions.concat(zJ.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(dd) {
        return this.baseExtensions.concat(zJ.of({
          plugin: this,
          arg: dd
        }))
      }
      static define(dd, Jd) {
        const {
          eventHandlers: kd,
          eventObservers: pd,
          provide: Nd,
          RW: Wd
        } = Jd || {};
        return new HJ(VJ++, dd, kd, pd, (dd => {
          let Jd = [];
          return Wd && Jd.push(Jk.of((Jd => {
            let kd = Jd.plugin(dd);
            return kd ? Wd(kd) : Sd.none
          }))), Nd && Jd.push(Nd(dd)), Jd
        }))
      }
      static fromClass(dd, Jd) {
        return HJ.define(((Jd, kd) => new dd(Jd, kd)), Jd)
      }
    }
    class wJ {
      constructor(dd) {
        this.spec = dd, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(dd) {
        if (this.value) {
          if (this.mustUpdate) {
            let dd = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(dd)
            } catch (Jd) {
              if (uJ(dd.state, Jd, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (kd) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(dd, this.spec.arg)
        } catch (Jd) {
          uJ(dd.state, Jd, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(dd) {
        var Jd;
        if (null === (Jd = this.value) || void 0 === Jd ? void 0 : Jd.destroy) try {
          this.value.destroy()
        } catch (kd) {
          uJ(dd.state, kd, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const AJ = pd.o.define(),
      dk = pd.o.define(),
      Jk = pd.o.define(),
      kk = pd.o.define(),
      pk = pd.o.define(),
      Nk = pd.o.define(),
      Wk = pd.o.define();

    function Pk(dd, Jd) {
      let kd = dd.state.facet(Wk);
      if (!kd.length) return kd;
      let Nd = kd.map((Jd => Jd instanceof Function ? Jd(dd) : Jd)),
        Wd = [];
      return pd.x.spans(Nd, Jd.from, Jd.to, {
        point() {},
        span(dd, kd, pd, Nd) {
          let Pd = dd - Jd.from,
            Zd = kd - Jd.from,
            gd = Wd;
          for (let Wd = pd.length - 1; Wd >= 0; Wd--, Nd--) {
            let dd, kd = pd[Wd].spec.bidiIsolate;
            if (null == kd && (kd = YJ(Jd.text, Pd, Zd)), Nd > 0 && gd.length && (dd = gd[gd.length - 1]).to == Pd && dd.direction == kd) dd.to = Zd, gd = dd.inner;
            else {
              let dd = {
                from: Pd,
                to: Zd,
                direction: kd,
                inner: []
              };
              gd.push(dd), gd = dd.inner
            }
          }
        }
      }), Wd
    }
    const Zk = pd.o.define();

    function gk(dd) {
      let Jd = 0,
        kd = 0,
        pd = 0,
        Nd = 0;
      for (let Wd of dd.state.facet(Zk)) {
        let Pd = Wd(dd);
        Pd && (null != Pd.left && (Jd = Math.max(Jd, Pd.left)), null != Pd.right && (kd = Math.max(kd, Pd.right)), null != Pd.top && (pd = Math.max(pd, Pd.top)), null != Pd.bottom && (Nd = Math.max(Nd, Pd.bottom)))
      }
      return {
        left: Jd,
        right: kd,
        top: pd,
        bottom: Nd
      }
    }
    const Ck = pd.o.define();
    class Kk {
      constructor(dd, Jd, kd, pd) {
        this.fromA = dd, this.toA = Jd, this.fromB = kd, this.toB = pd
      }
      join(dd) {
        return new Kk(Math.min(this.fromA, dd.fromA), Math.max(this.toA, dd.toA), Math.min(this.fromB, dd.fromB), Math.max(this.toB, dd.toB))
      }
      addToSet(dd) {
        let Jd = dd.length,
          kd = this;
        for (; Jd > 0; Jd--) {
          let pd = dd[Jd - 1];
          if (!(pd.fromA > kd.toA)) {
            if (pd.toA < kd.fromA) break;
            kd = kd.join(pd), dd.splice(Jd - 1, 1)
          }
        }
        return dd.splice(Jd, 0, kd), dd
      }
      static extendWithRanges(dd, Jd) {
        if (0 == Jd.length) return dd;
        let kd = [];
        for (let pd = 0, Nd = 0, Wd = 0;;) {
          let Pd = pd < dd.length ? dd[pd].fromB : 1e9,
            Zd = Nd < Jd.length ? Jd[Nd] : 1e9,
            gd = Math.min(Pd, Zd);
          if (1e9 == gd) break;
          let Cd = gd + Wd,
            Kd = gd,
            od = Cd;
          for (;;)
            if (Nd < Jd.length && Jd[Nd] <= Kd) {
              let kd = Jd[Nd + 1];
              Nd += 2, Kd = Math.max(Kd, kd);
              for (let Jd = pd; Jd < dd.length && dd[Jd].fromB <= Kd; Jd++) Wd = dd[Jd].toA - dd[Jd].toB;
              od = Math.max(od, kd + Wd)
            } else {
              if (!(pd < dd.length && dd[pd].fromB <= Kd)) break;
              {
                let Jd = dd[pd++];
                Kd = Math.max(Kd, Jd.toB), od = Math.max(od, Jd.toA), Wd = Jd.toA - Jd.toB
              }
            } kd.push(new Kk(Cd, od, gd, Kd))
        }
        return kd
      }
    }
    class lk {
      constructor(dd, Jd, kd) {
        this.view = dd, this.state = Jd, this.transactions = kd, this.flags = 0, this.startState = dd.state, this.changes = pd.ChangeSet.empty(this.startState.doc.length);
        for (let pd of kd) this.changes = this.changes.compose(pd.changes);
        let Nd = [];
        this.changes.iterChangedRanges(((dd, Jd, kd, pd) => Nd.push(new Kk(dd, Jd, kd, pd)))), this.changedRanges = Nd
      }
      static create(dd, Jd, kd) {
        return new lk(dd, Jd, kd)
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
        return this.transactions.some((dd => dd.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const Qk = [];
    class Lk {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = dd, this.length = Jd, this.flags = kd, this.parent = null, dd.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Qk
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
      sync(dd) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let dd = this.domAttrs;
          dd && function(dd, Jd) {
            for (let kd = dd.attributes.length - 1; kd >= 0; kd--) {
              let pd = dd.attributes[kd].name;
              null == Jd[pd] && dd.removeAttribute(pd)
            }
            for (let kd in Jd) {
              let pd = Jd[kd];
              "style" == kd ? dd.style.cssText = pd : dd.getAttribute(kd) != pd && dd.setAttribute(kd, pd)
            }
          }(this.dom, dd)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(dd) {
        this.dom = dd, dd.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let kd of this.children) {
          if (kd == dd) return Jd;
          Jd += kd.length + kd.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(dd) {
        return this.posBefore(dd) + dd.length
      }
      covers(dd) {
        return !0
      }
      coordsIn(dd, Jd) {
        return null
      }
      domPosFor(dd, Jd) {
        let kd = rd(this.dom),
          pd = this.length ? dd > 0 : Jd > 0;
        return new CJ(this.parent.dom, kd + (pd ? 1 : 0), 0 == dd || dd == this.length)
      }
      markDirty(dd) {
        this.flags &= -3, dd && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let dd = this; dd; dd = dd.parent)
          if (dd instanceof Rk) return dd;
        return null
      }
      static get(dd) {
        return dd.cmTile
      }
    }
    class Ok extends Lk {
      constructor(dd) {
        super(dd, 0), this._children = []
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
      append(dd) {
        this.children.push(dd), dd.parent = this
      }
      sync(dd) {
        if (2 & this.flags) return;
        super.sync(dd);
        let Jd, kd = this.dom,
          pd = null,
          Nd = (null === dd || void 0 === dd ? void 0 : dd.node) == kd ? dd : null,
          Wd = 0;
        for (let Pd of this.children) {
          if (Pd.sync(dd), Wd += Pd.length + Pd.breakAfter, Jd = pd ? pd.nextSibling : kd.firstChild, Nd && Jd != Pd.dom && (Nd.written = !0), Pd.dom.parentNode == kd)
            for (; Jd && Jd != Pd.dom;) Jd = ek(Jd);
          else kd.insertBefore(Pd.dom, Jd);
          pd = Pd.dom
        }
        for (Jd = pd ? pd.nextSibling : kd.firstChild, Nd && Jd && (Nd.written = !0); Jd;) Jd = ek(Jd);
        this.length = Wd
      }
    }

    function ek(dd) {
      let Jd = dd.nextSibling;
      return dd.parentNode.removeChild(dd), Jd
    }
    class Rk extends Ok {
      constructor(dd, Jd) {
        super(Jd), this.view = dd
      }
      owns(dd) {
        for (; dd; dd = dd.parent)
          if (dd == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(dd) {
        for (;;) {
          if (!dd) return null;
          let Jd = Lk.get(dd);
          if (Jd && this.owns(Jd)) return Jd;
          dd = dd.parentNode
        }
      }
      blockTiles(dd) {
        for (let Jd = [], kd = this, pd = 0, Nd = 0;;)
          if (pd == kd.children.length) {
            if (!Jd.length) return;
            kd = kd.parent, kd.breakAfter && Nd++, pd = Jd.pop()
          } else {
            let Wd = kd.children[pd++];
            if (Wd instanceof Ik) Jd.push(pd), kd = Wd, pd = 0;
            else {
              let Jd = Nd + Wd.length,
                kd = dd(Wd, Nd);
              if (void 0 !== kd) return kd;
              Nd = Jd + Wd.breakAfter
            }
          }
      }
      resolveBlock(dd, Jd) {
        let kd, pd, Nd = -1,
          Wd = -1;
        if (this.blockTiles(((Pd, Zd) => {
            let gd = Zd + Pd.length;
            if (dd >= Zd && dd <= gd) {
              if (Pd.isWidget() && Jd >= -1 && Jd <= 1) {
                if (32 & Pd.flags) return !0;
                16 & Pd.flags && (kd = void 0)
              }(Zd < dd || dd == gd && (Jd < -1 ? Pd.length : Pd.covers(1))) && (!kd || !Pd.isWidget() && kd.isWidget()) && (kd = Pd, Nd = dd - Zd), (gd > dd || dd == Zd && (Jd > 1 ? Pd.length : Pd.covers(-1))) && (!pd || !Pd.isWidget() && pd.isWidget()) && (pd = Pd, Wd = dd - Zd)
            }
          })), !kd && !pd) throw new Error("No tile at position " + dd);
        return kd && Jd < 0 || !pd ? {
          tile: kd,
          offset: Nd
        } : {
          tile: pd,
          offset: Wd
        }
      }
    }
    class Ik extends Ok {
      constructor(dd, Jd) {
        super(dd), this.wrapper = Jd
      }
      isBlock() {
        return !0
      }
      covers(dd) {
        return !!this.children.length && (dd < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (dd, Jd) {
        let kd = new Ik(Jd || document.createElement(dd.tagName), dd);
        return Jd || (kd.flags |= 4), kd
      }
    }
    class Gk extends Ok {
      constructor(dd, Jd) {
        super(dd), this.attrs = Jd
      }
      isLine() {
        return !0
      }
      static start(dd, Jd, kd) {
        let pd = new Gk(Jd || document.createElement("div"), dd);
        return Jd && kd || (pd.flags |= 4), pd
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(dd, Jd, kd) {
        let pd = null,
          Nd = -1,
          Wd = null,
          Pd = -1;
        ! function dd(Zd, gd) {
          for (let Cd = 0, Kd = 0; Cd < Zd.children.length && Kd <= gd; Cd++) {
            let od = Zd.children[Cd],
              ld = Kd + od.length;
            ld >= gd && (od.isComposite() ? dd(od, gd - Kd) : (!Wd || Wd.isHidden && (Jd > 0 || kd && vk(Wd, od))) && (ld > gd || 32 & od.flags) ? (Wd = od, Pd = gd - Kd) : (Kd < gd || 16 & od.flags && !od.isHidden) && (pd = od, Nd = gd - Kd)), Kd = ld
          }
        }(this, dd);
        let Zd = (Jd < 0 ? pd : Wd) || pd || Wd;
        return Zd ? {
          tile: Zd,
          offset: Zd == pd ? Nd : Pd
        } : null
      }
      coordsIn(dd, Jd) {
        let kd = this.resolveInline(dd, Jd, !0);
        return kd ? kd.tile.coordsIn(Math.max(0, kd.offset), Jd) : function(dd) {
          let Jd = dd.dom.lastChild;
          if (!Jd) return dd.dom.getBoundingClientRect();
          let kd = cd(Jd);
          return kd[kd.length - 1] || null
        }(this)
      }
      domIn(dd, Jd) {
        let kd = this.resolveInline(dd, Jd);
        if (kd) {
          let {
            tile: dd,
            offset: pd
          } = kd;
          if (this.dom.contains(dd.dom)) return dd.isText() ? new CJ(dd.dom, Math.min(dd.dom.nodeValue.length, pd)) : dd.domPosFor(pd, 16 & dd.flags ? 1 : 32 & dd.flags ? -1 : Jd);
          let Nd = kd.tile.parent,
            Wd = !1;
          for (let Jd of Nd.children) {
            if (Wd) return new CJ(Jd.dom, 0);
            Jd == kd.tile && (Wd = !0)
          }
        }
        return new CJ(this.dom, 0)
      }
    }

    function vk(dd, Jd) {
      let kd = dd.coordsIn(0, 1),
        pd = Jd.coordsIn(0, 1);
      return kd && pd && pd.top < kd.bottom
    }
    class xk extends Ok {
      constructor(dd, Jd) {
        super(dd), this.mark = Jd
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (dd, Jd) {
        let kd = new xk(Jd || document.createElement(dd.tagName), dd);
        return Jd || (kd.flags |= 4), kd
      }
    }
    class qk extends Lk {
      constructor(dd, Jd) {
        super(dd, Jd.length), this.text = Jd
      }
      sync(dd) {
        2 & this.flags || (super.sync(dd), this.dom.nodeValue != this.text && (dd && dd.node == this.dom && (dd.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(dd, Jd) {
        let kd = this.dom.nodeValue.length;
        dd > kd && (dd = kd);
        let pd = dd,
          Nd = dd,
          Wd = 0;
        0 == dd && Jd < 0 || dd == kd && Jd >= 0 ? Bd.chrome || Bd.gecko || (dd ? (pd--, Wd = 1) : Nd < kd && (Nd++, Wd = -1)) : Jd < 0 ? pd-- : Nd < kd && Nd++;
        let Pd = NJ(this.dom, pd, Nd).getClientRects();
        if (!Pd.length) return null;
        let Zd = Pd[(Wd ? Wd < 0 : Jd >= 0) ? 0 : Pd.length - 1];
        return Bd.safari && !Wd && 0 == Zd.width && (Zd = Array.prototype.find.call(Pd, (dd => dd.width)) || Zd), Wd ? zd(Zd, Wd < 0) : Zd || null
      }
      static of (dd, Jd) {
        let kd = new qk(Jd || document.createTextNode(dd), dd);
        return Jd || (kd.flags |= 2), kd
      }
    }
    class Bk extends Lk {
      constructor(dd, Jd, kd, pd) {
        super(dd, Jd, pd), this.widget = kd
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(dd) {
        return !(48 & this.flags) && (this.flags & (dd < 0 ? 64 : 128)) > 0
      }
      coordsIn(dd, Jd) {
        return this.coordsInWidget(dd, Jd, !1)
      }
      coordsInWidget(dd, Jd, kd) {
        let pd = this.widget.coordsAt(this.dom, dd, Jd);
        if (pd) return pd;
        if (kd) return zd(this.dom.getBoundingClientRect(), this.length ? 0 == dd : Jd <= 0);
        {
          let Jd = this.dom.getClientRects(),
            kd = null;
          if (!Jd.length) return null;
          let pd = !!(16 & this.flags) || !(32 & this.flags) && dd > 0;
          for (let Nd = pd ? Jd.length - 1 : 0; kd = Jd[Nd], !(dd > 0 ? 0 == Nd : Nd == Jd.length - 1 || kd.top < kd.bottom); Nd += pd ? -1 : 1);
          return zd(kd, !pd)
        }
      }
      get overrideDOMText() {
        if (!this.length) return pd.I.empty;
        let {
          root: dd
        } = this;
        if (!dd) return pd.I.empty;
        let Jd = this.posAtStart;
        return dd.view.state.doc.slice(Jd, Jd + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (dd, Jd, kd, pd, Nd) {
        return Nd || (Nd = dd.toDOM(Jd), dd.editable || (Nd.contentEditable = "false")), new Bk(Nd, kd, dd, pd)
      }
    }
    class sk extends Lk {
      constructor(dd) {
        let Jd = document.createElement("img");
        Jd.className = "cm-widgetBuffer", Jd.setAttribute("aria-hidden", "true"), super(Jd, 0, dd)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return pd.I.empty
      }
      coordsIn(dd) {
        return this.dom.getBoundingClientRect()
      }
    }
    class ik {
      constructor(dd) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = dd
      }
      advance(dd, Jd, kd) {
        let {
          tile: pd,
          index: Nd,
          beforeBreak: Wd,
          parents: Pd
        } = this;
        for (; dd || Jd > 0;)
          if (pd.isComposite())
            if (Wd) {
              if (!dd) break;
              kd && kd.break(), dd--, Wd = !1
            } else if (Nd == pd.children.length) {
          if (!dd && !Pd.length) break;
          kd && kd.leave(pd), Wd = !!pd.breakAfter, ({
            tile: pd,
            index: Nd
          } = Pd.pop()), Nd++
        } else {
          let Zd = pd.children[Nd],
            gd = Zd.breakAfter;
          !(Jd > 0 ? Zd.length <= dd : Zd.length < dd) || kd && !1 === kd.skip(Zd, 0, Zd.length) && Zd.isComposite ? (Pd.push({
            tile: pd,
            index: Nd
          }), pd = Zd, Nd = 0, kd && Zd.isComposite() && kd.enter(Zd)) : (Wd = !!gd, Nd++, dd -= Zd.length)
        } else if (Nd == pd.length) Wd = !!pd.breakAfter, ({
          tile: pd,
          index: Nd
        } = Pd.pop()), Nd++;
        else {
          if (!dd) break;
          {
            let Jd = Math.min(dd, pd.length - Nd);
            kd && kd.skip(pd, Nd, Nd + Jd), dd -= Jd, Nd += Jd
          }
        }
        return this.tile = pd, this.index = Nd, this.beforeBreak = Wd, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class ak {
      constructor(dd, Jd, kd, pd) {
        this.from = dd, this.to = Jd, this.wrapper = kd, this.rank = pd
      }
    }
    class Mk {
      constructor(dd, Jd, kd) {
        this.cache = dd, this.root = Jd, this.blockWrappers = kd, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(dd, Jd, kd, pd) {
        var Nd;
        this.flushBuffer();
        let Wd = this.ensureMarks(Jd, kd),
          Pd = Wd.lastChild;
        if (Pd && Pd.isText() && !(8 & Pd.flags) && Pd.length + dd.length < 512) {
          this.cache.reused.set(Pd, 2), (Wd.children[Wd.children.length - 1] = new qk(Pd.dom, Pd.text + dd)).parent = Wd
        } else Wd.append(pd || qk.of(dd, null === (Nd = this.cache.find(qk)) || void 0 === Nd ? void 0 : Nd.dom));
        this.pos += dd.length, this.afterWidget = null
      }
      addComposition(dd, Jd) {
        let kd = this.curLine;
        kd.dom != Jd.line.dom && (kd.setDOM(this.cache.reused.has(Jd.line) ? Xk(Jd.line.dom) : Jd.line.dom), this.cache.reused.set(Jd.line, 2));
        let pd = kd;
        for (let Pd = Jd.marks.length - 1; Pd >= 0; Pd--) {
          let dd = Jd.marks[Pd],
            kd = pd.lastChild;
          if (kd instanceof xk && kd.mark.eq(dd.mark)) kd.dom != dd.dom && kd.setDOM(Xk(dd.dom)), pd = kd;
          else {
            if (this.cache.reused.get(dd)) {
              let Jd = Lk.get(dd.dom);
              Jd && Jd.setDOM(Xk(dd.dom))
            }
            let Jd = xk.of(dd.mark, dd.dom);
            pd.append(Jd), pd = Jd
          }
          this.cache.reused.set(dd, 2)
        }
        let Nd = Lk.get(dd.text);
        Nd && this.cache.reused.set(Nd, 2);
        let Wd = new qk(dd.text, dd.text.nodeValue);
        Wd.flags |= 8, pd.append(Wd)
      }
      addInlineWidget(dd, Jd, kd) {
        let pd = this.afterWidget && 48 & dd.flags && (48 & this.afterWidget.flags) == (48 & dd.flags);
        pd || this.flushBuffer();
        let Nd = this.ensureMarks(Jd, kd);
        pd || 16 & dd.flags || Nd.append(this.getBuffer(1)), Nd.append(dd), this.pos += dd.length, this.afterWidget = dd
      }
      addMark(dd, Jd, kd) {
        this.flushBuffer(), this.ensureMarks(Jd, kd).append(dd), this.pos += dd.length, this.afterWidget = null
      }
      addBlockWidget(dd) {
        this.getBlockPos().append(dd), this.pos += dd.length, this.lastBlock = dd, this.endLine()
      }
      continueWidget(dd) {
        (this.afterWidget || this.lastBlock).length += dd, this.pos += dd
      }
      addLineStart(dd, Jd) {
        var kd;
        dd || (dd = jk);
        let pd = Gk.start(dd, Jd || (null === (kd = this.cache.find(Gk)) || void 0 === kd ? void 0 : kd.dom), !!Jd);
        this.getBlockPos().append(this.lastBlock = this.curLine = pd)
      }
      addLine(dd) {
        this.getBlockPos().append(dd), this.pos += dd.length, this.lastBlock = dd, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(dd) {
        this.blockPosCovered() || this.addLineStart(dd)
      }
      ensureLine(dd) {
        this.curLine || this.addLineStart(dd)
      }
      ensureMarks(dd, Jd) {
        var kd;
        let pd = this.curLine;
        for (let Nd = dd.length - 1; Nd >= 0; Nd--) {
          let Wd, Pd = dd[Nd];
          if (Jd > 0 && (Wd = pd.lastChild) && Wd instanceof xk && Wd.mark.eq(Pd)) pd = Wd, Jd--;
          else {
            let dd = xk.of(Pd, null === (kd = this.cache.find(xk, (dd => dd.mark.eq(Pd)))) || void 0 === kd ? void 0 : kd.dom);
            pd.append(dd), pd = dd, Jd = 0
          }
        }
        return pd
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let dd = this.curLine.lastChild;
          dd && Sk(this.curLine, !1) && ("BR" == dd.dom.nodeName || !dd.isWidget() || Bd.ios && Sk(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(nk, 0, 32) || new Bk(nk.toDOM(), 0, nk, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let dd = this.wrappers.length - 1; dd >= 0; dd--) this.wrappers[dd].to < this.pos && this.wrappers.splice(dd, 1);
        for (let dd = this.blockWrappers; dd.value && dd.from <= this.pos; dd.next())
          if (dd.to >= this.pos) {
            let Jd = new ak(dd.from, dd.to, dd.value, dd.rank),
              kd = this.wrappers.length;
            for (; kd > 0 && (this.wrappers[kd - 1].rank - Jd.rank || this.wrappers[kd - 1].to - Jd.to) < 0;) kd--;
            this.wrappers.splice(kd, 0, Jd)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var dd;
        this.updateBlockWrappers();
        let Jd = this.root;
        for (let kd of this.wrappers) {
          let pd = Jd.lastChild;
          if (kd.from < this.pos && pd instanceof Ik && pd.wrapper.eq(kd.wrapper)) Jd = pd;
          else {
            let pd = Ik.of(kd.wrapper, null === (dd = this.cache.find(Ik, (dd => dd.wrapper.eq(kd.wrapper)))) || void 0 === dd ? void 0 : dd.dom);
            Jd.append(pd), Jd = pd
          }
        }
        return Jd
      }
      blockPosCovered() {
        let dd = this.lastBlock;
        return null != dd && !dd.breakAfter && (!dd.isWidget() || (160 & dd.flags) > 0)
      }
      getBuffer(dd) {
        let Jd = 2 | (dd < 0 ? 16 : 32),
          kd = this.cache.find(sk, void 0, 1);
        return kd && (kd.flags = Jd), kd || new sk(Jd)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Fk {
      constructor(dd) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = dd.iter()
      }
      skip(dd) {
        this.textOff + dd <= this.text.length ? this.textOff += dd : (this.skipCount += dd - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(dd) {
        if (this.textOff == this.text.length) {
          let {
            value: Jd,
            lineBreak: kd,
            done: pd
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, pd) throw new Error("Ran out of text content when drawing inline views");
          this.text = Jd;
          let Nd = this.textOff = Math.min(dd, Jd.length);
          return kd ? null : Jd.slice(0, Nd)
        }
        let Jd = Math.min(this.text.length, this.textOff + dd),
          kd = this.text.slice(this.textOff, Jd);
        return this.textOff = Jd, kd
      }
    }
    const Yk = [Bk, Gk, qk, xk, sk, Ik, Rk];
    for (let jP = 0; jP < Yk.length; jP++) Yk[jP].bucket = jP;
    class mk {
      constructor(dd) {
        this.view = dd, this.buckets = Yk.map((() => [])), this.index = Yk.map((() => 0)), this.reused = new Map
      }
      add(dd) {
        let Jd = dd.constructor.bucket,
          kd = this.buckets[Jd];
        kd.length < 6 ? kd.push(dd) : kd[this.index[Jd] = (this.index[Jd] + 1) % 6] = dd
      }
      find(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          pd = dd.bucket,
          Nd = this.buckets[pd],
          Wd = this.index[pd];
        for (let Pd = Nd.length - 1; Pd >= 0; Pd--) {
          let dd = (Pd + Wd) % Nd.length,
            Zd = Nd[dd];
          if ((!Jd || Jd(Zd)) && !this.reused.has(Zd)) return Nd.splice(dd, 1), dd < Wd && this.index[pd]--, this.reused.set(Zd, kd), Zd
        }
        return null
      }
      findWidget(dd, Jd, kd) {
        let pd = this.buckets[0];
        if (pd.length)
          for (let Nd = 0, Wd = 0;; Nd++) {
            if (Nd == pd.length) {
              if (Wd) return null;
              Wd = 1, Nd = 0
            }
            let Pd = pd[Nd];
            if (!this.reused.has(Pd) && (0 == Wd ? Pd.widget.compare(dd) : Pd.widget.constructor == dd.constructor && dd.updateDOM(Pd.dom, this.view, Pd.widget))) return pd.splice(Nd, 1), Nd < this.index[0] && this.index[0]--, Pd.widget == dd && Pd.length == Jd && (497 & Pd.flags) == kd ? (this.reused.set(Pd, 1), Pd) : (this.reused.set(Pd, 2), new Bk(Pd.dom, Jd, dd, -498 & Pd.flags | kd))
          }
      }
      reuse(dd) {
        return this.reused.set(dd, 1), dd
      }
      maybeReuse(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(dd)) return this.reused.set(dd, Jd), dd.dom
      }
      clear() {
        for (let dd = 0; dd < this.buckets.length; dd++) this.buckets[dd].length = this.index[dd] = 0
      }
    }
    class bk {
      constructor(dd, Jd, kd, Nd, Wd) {
        this.view = dd, this.RW = Nd, this.disallowBlockEffectsFor = Wd, this.openWidget = !1, this.openMarks = 0, this.cache = new mk(dd), this.text = new Fk(dd.state.doc), this.builder = new Mk(this.cache, new Rk(dd, dd.contentDOM), pd.x.iter(kd)), this.cache.reused.set(Jd, 2), this.old = new ik(Jd), this.reuseWalker = {
          skip: (dd, Jd, kd) => {
            if (this.cache.add(dd), dd.isComposite()) return !1
          },
          enter: dd => this.cache.add(dd),
          leave: () => {},
          break: () => {}
        }
      }
      run(dd, Jd) {
        let kd = Jd && this.getCompositionContext(Jd.text);
        for (let pd = 0, Nd = 0, Wd = 0;;) {
          let Pd = Wd < dd.length ? dd[Wd++] : null,
            Zd = Pd ? Pd.fromA : this.old.root.length;
          if (Zd > pd) {
            let dd = Zd - pd;
            this.preserve(dd, !Wd, !Pd), pd = Zd, Nd += dd
          }
          if (!Pd) break;
          Jd && Pd.fromA <= Jd.range.fromA && Pd.toA >= Jd.range.toA ? (this.forward(Pd.fromA, Jd.range.fromA, Jd.range.fromA < Jd.range.toA ? 1 : -1), this.emit(Nd, Jd.range.fromB), this.cache.clear(), this.builder.addComposition(Jd, kd), this.text.skip(Jd.range.toB - Jd.range.fromB), this.forward(Jd.range.fromA, Pd.toA), this.emit(Jd.range.toB, Pd.toB)) : (this.forward(Pd.fromA, Pd.toA), this.emit(Nd, Pd.toB)), Nd = Pd.toB, pd = Pd.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(dd, Jd, kd) {
        let pd = function(dd) {
            let Jd = [];
            for (let kd = dd.parents.length; kd > 1; kd--) {
              let pd = kd == dd.parents.length ? dd.tile : dd.parents[kd].tile;
              pd instanceof xk && Jd.push(pd.mark)
            }
            return Jd
          }(this.old),
          Nd = this.openMarks;
        this.old.advance(dd, kd ? 1 : -1, {
          skip: (dd, Jd, kd) => {
            if (dd.isWidget())
              if (this.openWidget) this.builder.continueWidget(kd - Jd);
              else {
                let Wd = kd > 0 || Jd < dd.length ? Bk.of(dd.widget, this.view, kd - Jd, 496 & dd.flags, this.cache.maybeReuse(dd)) : this.cache.reuse(dd);
                256 & Wd.flags ? (Wd.flags &= -2, this.builder.addBlockWidget(Wd)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(Wd, pd, Nd), Nd = pd.length)
              }
            else if (dd.isText()) this.builder.ensureLine(null), Jd || kd != dd.length || this.cache.reused.has(dd) ? (this.cache.add(dd), this.builder.addText(dd.text.slice(Jd, kd), pd, Nd)) : this.builder.addText(dd.text, pd, Nd, this.cache.reuse(dd)), Nd = pd.length;
            else if (dd.isLine()) dd.flags &= -2, this.cache.reused.set(dd, 1), this.builder.addLine(dd);
            else if (dd instanceof sk) this.cache.add(dd);
            else {
              if (!(dd instanceof xk)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(dd, pd, Nd), this.cache.reused.set(dd, 1), Nd = pd.length
            }
            this.openWidget = !1
          },
          enter: dd => {
            dd.isLine() ? this.builder.addLineStart(dd.attrs, this.cache.maybeReuse(dd)) : (this.cache.add(dd), dd instanceof xk && pd.unshift(dd.mark)), this.openWidget = !1
          },
          leave: dd => {
            dd.isLine() ? pd.length && (pd.length = Nd = 0) : dd instanceof xk && (pd.shift(), Nd = Math.min(Nd, pd.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(dd)
      }
      emit(dd, Jd) {
        let kd = null,
          Nd = this.builder,
          Wd = 0,
          Pd = pd.x.spans(this.RW, dd, Jd, {
            point: (dd, Jd, pd, Pd, Zd, gd) => {
              if (pd instanceof fd) {
                if (this.disallowBlockEffectsFor[gd]) {
                  if (pd.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (Jd > this.view.state.doc.lineAt(dd).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (Wd = Pd.length, Zd > Pd.length) Nd.continueWidget(Jd - dd);
                else {
                  let Wd = pd.widget || (pd.block ? fk.block : fk.inline),
                    gd = function(dd) {
                      let Jd = dd.isReplace ? (dd.startSide < 0 ? 64 : 0) | (dd.endSide > 0 ? 128 : 0) : dd.startSide > 0 ? 32 : 16;
                      dd.block && (Jd |= 256);
                      return Jd
                    }(pd),
                    Cd = this.cache.findWidget(Wd, Jd - dd, gd) || Bk.of(Wd, this.view, Jd - dd, gd);
                  pd.block ? (pd.startSide > 0 && Nd.addLineStartIfNotCovered(kd), Nd.addBlockWidget(Cd)) : (Nd.ensureLine(kd), Nd.addInlineWidget(Cd, Pd, Zd))
                }
                kd = null
              } else kd = function(dd, Jd) {
                let kd = Jd.spec.attributes,
                  pd = Jd.spec.class;
                if (!kd && !pd) return dd;
                dd || (dd = {
                  class: "cm-line"
                });
                kd && sd(kd, dd);
                pd && (dd.class += " " + pd);
                return dd
              }(kd, pd);
              Jd > dd && this.text.skip(Jd - dd)
            },
            span: (dd, Jd, pd, Wd) => {
              for (let Pd = dd; Pd < Jd;) {
                let Zd = this.text.next(Math.min(512, Jd - Pd));
                null == Zd ? (Nd.addLineStartIfNotCovered(kd), Nd.addBreak(), Pd++) : (Nd.ensureLine(kd), Nd.addText(Zd, pd, Pd == dd ? Wd : pd.length), Pd += Zd.length), kd = null
              }
            }
          });
        Nd.addLineStartIfNotCovered(kd), this.openWidget = Pd > Wd, this.openMarks = Pd
      }
      forward(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        Jd - dd <= 10 ? this.old.advance(Jd - dd, kd, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(Jd - dd - 10, -1), this.old.advance(5, kd, this.reuseWalker))
      }
      getCompositionContext(dd) {
        let Jd = [],
          kd = null;
        for (let pd = dd.parentNode;; pd = pd.parentNode) {
          let dd = Lk.get(pd);
          if (pd == this.view.contentDOM) break;
          dd instanceof xk ? Jd.push(dd) : (null === dd || void 0 === dd ? void 0 : dd.isLine()) ? kd = dd : dd instanceof Ik || ("DIV" != pd.nodeName || kd || pd == this.view.contentDOM ? kd || Jd.push(xk.of(new jd({
            tagName: pd.nodeName.toLowerCase(),
            attributes: Yd(pd)
          }), pd)) : kd = new Gk(pd, jk))
        }
        return {
          line: kd,
          marks: Jd
        }
      }
    }

    function Sk(dd, Jd) {
      let kd = dd => {
        for (let pd of dd.children)
          if ((Jd ? pd.isText() : pd.length) || kd(pd)) return !0;
        return !1
      };
      return kd(dd)
    }
    const jk = {
      class: "cm-line"
    };

    function Xk(dd) {
      let Jd = Lk.get(dd);
      return Jd && Jd.setDOM(dd.cloneNode()), dd
    }
    class fk extends md {
      constructor(dd) {
        super(), this.tag = dd
      }
      eq(dd) {
        return dd.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(dd) {
        return dd.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    fk.inline = new fk("span"), fk.block = new fk("div");
    const nk = new class extends md {
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
    class Uk {
      constructor(dd) {
        this.view = dd, this.RW = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Sd.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Rk(dd, dd.contentDOM), this.updateInner([new Kk(0, 0, 0, dd.state.doc.length)], null)
      }
      update(dd) {
        var Jd;
        let kd = dd.changedRanges;
        this.minWidth > 0 && kd.length && (kd.every((dd => {
          let {
            fromA: Jd,
            toA: kd
          } = dd;
          return kd < this.minWidthFrom || Jd > this.minWidthTo
        })) ? (this.minWidthFrom = dd.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = dd.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(dd);
        let Nd = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (Jd = this.domChanged) || void 0 === Jd ? void 0 : Jd.newSel) ? Nd = this.domChanged.newSel.head : function(dd, Jd) {
          let kd = !1;
          Jd && dd.iterChangedRanges(((dd, pd) => {
            dd < Jd.to && pd > Jd.from && (kd = !0)
          }));
          return kd
        }(dd.changes, this.hasComposition) || dd.selectionSet || (Nd = dd.state.selection.main.head));
        let Wd = Nd > -1 ? function(dd, Jd, kd) {
          let pd = Dk(dd, kd);
          if (!pd) return null;
          let {
            node: Nd,
            from: Wd,
            to: Pd
          } = pd, Zd = Nd.nodeValue;
          if (/[\n\r]/.test(Zd)) return null;
          if (dd.state.doc.sliceString(pd.from, pd.to) != Zd) return null;
          let gd = Jd.invertedDesc;
          return {
            range: new Kk(gd.mapPos(Wd), gd.mapPos(Pd), Wd, Pd),
            text: Nd
          }
        }(this.view, dd.changes, Nd) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: Jd,
            to: pd
          } = this.hasComposition;
          kd = new Kk(Jd, pd, dd.changes.mapPos(Jd, -1), dd.changes.mapPos(pd, 1)).addToSet(kd.slice())
        }
        this.hasComposition = Wd ? {
          from: Wd.range.fromB,
          to: Wd.range.toB
        } : null, (Bd.ie || Bd.chrome) && !Wd && dd && dd.state.doc.lines != dd.startState.doc.lines && (this.forceSelection = !0);
        let Pd = this.RW,
          Zd = this.blockWrappers;
        this.updateDeco();
        let gd = function(dd, Jd, kd) {
          let Nd = new Tk;
          return pd.x.compare(dd, Jd, kd, Nd), Nd.changes
        }(Pd, this.RW, dd.changes);
        gd.length && (kd = Kk.extendWithRanges(kd, gd));
        let Cd = function(dd, Jd, kd) {
          let Nd = new Ek;
          return pd.x.compare(dd, Jd, kd, Nd), Nd.changes
        }(Zd, this.blockWrappers, dd.changes);
        return Cd.length && (kd = Kk.extendWithRanges(kd, Cd)), Wd && !kd.some((dd => dd.fromA <= Wd.range.fromA && dd.toA >= Wd.range.toA)) && (kd = Wd.range.addToSet(kd.slice())), !(2 & this.tile.flags && 0 == kd.length) && (this.updateInner(kd, Wd), dd.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(dd, Jd) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: kd
        } = this.view;
        kd.ignore((() => {
          if (Jd || dd.length) {
            let kd = this.tile,
              pd = new bk(this.view, kd, this.blockWrappers, this.RW, this.dynamicDecorationMap);
            Jd && Lk.get(Jd.text) && pd.cache.reused.set(Lk.get(Jd.text), 2), this.tile = pd.run(dd, Jd), yk(kd, pd.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let pd = Bd.chrome || Bd.ios ? {
            node: kd.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(pd), !pd || !pd.written && kd.selectionRange.focusNode == pd.node && this.tile.dom.contains(pd.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let pd = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Nd of this.tile.children) Nd.isWidget() && Nd.widget instanceof ck && pd.push(Nd.dom);
        kd.updateGaps(pd)
      }
      updateEditContextFormatting(dd) {
        this.editContextFormatting = this.editContextFormatting.map(dd.changes);
        for (let Jd of dd.transactions)
          for (let dd of Jd.effects) dd.is(rJ) && (this.editContextFormatting = dd.value)
      }
      updateSelection() {
        let dd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: Jd
        } = this.tile, kd = this.view.root.activeElement, pd = kd == Jd, Nd = !pd && !(this.view.state.facet(tJ) || Jd.tabIndex > -1) && Ed(Jd, this.view.observer.selectionRange) && !(kd && Jd.contains(kd));
        if (!(pd || dd || Nd)) return;
        let Wd = this.forceSelection;
        this.forceSelection = !1;
        let Pd, Zd, gd = this.view.state.selection.main;
        if (gd.empty ? Zd = Pd = this.inlineDOMNearPos(gd.anchor, gd.assoc || 1) : (Zd = this.inlineDOMNearPos(gd.head, gd.head == gd.from ? 1 : -1), Pd = this.inlineDOMNearPos(gd.anchor, gd.anchor == gd.from ? 1 : -1)), Bd.gecko && gd.empty && !this.hasComposition && (1 == (Cd = Pd).node.nodeType && Cd.node.firstChild && (0 == Cd.offset || "false" == Cd.node.childNodes[Cd.offset - 1].contentEditable) && (Cd.offset == Cd.node.childNodes.length || "false" == Cd.node.childNodes[Cd.offset].contentEditable))) {
          let dd = document.createTextNode("");
          this.view.observer.ignore((() => Pd.node.insertBefore(dd, Pd.node.childNodes[Pd.offset] || null))), Pd = Zd = new CJ(dd, 0), Wd = !0
        }
        var Cd;
        let Kd = this.view.observer.selectionRange;
        !Wd && Kd.focusNode && (hd(Pd.node, Pd.offset, Kd.anchorNode, Kd.anchorOffset) && hd(Zd.node, Zd.offset, Kd.focusNode, Kd.focusOffset) || this.suppressWidgetCursorChange(Kd, gd)) || (this.view.observer.ignore((() => {
          Bd.android && Bd.chrome && Jd.contains(Kd.focusNode) && function(dd, Jd) {
            for (let kd = dd; kd && kd != Jd; kd = kd.assignedSlot || kd.parentNode)
              if (1 == kd.nodeType && "false" == kd.contentEditable) return !0;
            return !1
          }(Kd.focusNode, Jd) && (Jd.blur(), Jd.focus({
            preventScroll: !0
          }));
          let dd = Dd(this.view.root);
          if (dd)
            if (gd.empty) {
              if (Bd.gecko) {
                let dd = (pd = Pd.node, Wd = Pd.offset, 1 != pd.nodeType ? 0 : (Wd && "false" == pd.childNodes[Wd - 1].contentEditable ? 1 : 0) | (Wd < pd.childNodes.length && "false" == pd.childNodes[Wd].contentEditable ? 2 : 0));
                if (dd && 3 != dd) {
                  let Jd = (1 == dd ? ZJ : gJ)(Pd.node, Pd.offset);
                  Jd && (Pd = new CJ(Jd.node, Jd.offset))
                }
              }
              dd.collapse(Pd.node, Pd.offset), null != gd.bidiLevel && void 0 !== dd.caretBidiLevel && (dd.caretBidiLevel = gd.bidiLevel)
            } else if (dd.extend) {
            dd.collapse(Pd.node, Pd.offset);
            try {
              dd.extend(Zd.node, Zd.offset)
            } catch (Cd) {}
          } else {
            let Jd = document.createRange();
            gd.anchor > gd.head && ([Pd, Zd] = [Zd, Pd]), Jd.setEnd(Zd.node, Zd.offset), Jd.setStart(Pd.node, Pd.offset), dd.removeAllRanges(), dd.addRange(Jd)
          } else;
          var pd, Wd;
          Nd && this.view.root.activeElement == Jd && (Jd.blur(), kd && kd.focus())
        })), this.view.observer.setSelectionRange(Pd, Zd)), this.impreciseAnchor = Pd.precise ? null : new CJ(Kd.anchorNode, Kd.anchorOffset), this.impreciseHead = Zd.precise ? null : new CJ(Kd.focusNode, Kd.focusOffset)
      }
      suppressWidgetCursorChange(dd, Jd) {
        return this.hasComposition && Jd.empty && hd(dd.focusNode, dd.focusOffset, dd.anchorNode, dd.anchorOffset) && this.posFromDOM(dd.focusNode, dd.focusOffset) == Jd.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: dd
        } = this, Jd = dd.state.selection.main, kd = Dd(dd.root), {
          anchorNode: pd,
          anchorOffset: Nd
        } = dd.observer.selectionRange;
        if (!kd || !Jd.empty || !Jd.assoc || !kd.modify) return;
        let Wd = this.lineAt(Jd.head, Jd.assoc);
        if (!Wd) return;
        let Pd = Wd.posAtStart;
        if (Jd.head == Pd || Jd.head == Pd + Wd.length) return;
        let Zd = this.coordsAt(Jd.head, -1),
          gd = this.coordsAt(Jd.head, 1);
        if (!Zd || !gd || Zd.bottom > gd.top) return;
        let Cd = this.domAtPos(Jd.head + Jd.assoc, Jd.assoc);
        kd.collapse(Cd.node, Cd.offset), kd.modify("move", Jd.assoc < 0 ? "forward" : "backward", "lineboundary"), dd.observer.readSelectionRange();
        let Kd = dd.observer.selectionRange;
        dd.docView.posFromDOM(Kd.anchorNode, Kd.anchorOffset) != Jd.from && kd.collapse(pd, Nd)
      }
      posFromDOM(dd, Jd) {
        let kd = this.tile.nearest(dd);
        if (!kd) return 2 & this.tile.dom.compareDocumentPosition(dd) ? 0 : this.view.state.doc.length;
        let pd = kd.posAtStart;
        if (!kd.isComposite()) return kd.isText() ? dd == kd.dom ? pd + Jd : pd + (Jd ? kd.length : 0) : pd;
        {
          let Nd;
          if (dd == kd.dom) Nd = kd.dom.childNodes[Jd];
          else {
            let pd = 0 == Vd(dd) ? 0 : 0 == Jd ? -1 : 1;
            for (;;) {
              let Jd = dd.parentNode;
              if (Jd == kd.dom) break;
              0 == pd && Jd.firstChild != Jd.lastChild && (pd = dd == Jd.firstChild ? -1 : 1), dd = Jd
            }
            Nd = pd < 0 ? dd : dd.nextSibling
          }
          if (Nd == kd.dom.firstChild) return pd;
          for (; Nd && !Lk.get(Nd);) Nd = Nd.nextSibling;
          if (!Nd) return pd + kd.length;
          for (let dd = 0, Jd = pd;; dd++) {
            let pd = kd.children[dd];
            if (pd.dom == Nd) return Jd;
            Jd += pd.length + pd.breakAfter
          }
        }
      }
      domAtPos(dd, Jd) {
        let {
          tile: kd,
          offset: pd
        } = this.tile.resolveBlock(dd, Jd);
        return kd.isWidget() ? kd.domPosFor(dd, Jd) : kd.domIn(pd, Jd)
      }
      inlineDOMNearPos(dd, Jd) {
        let kd, pd, Nd = -1,
          Wd = !1,
          Pd = -1,
          Zd = !1;
        return this.tile.blockTiles(((Jd, gd) => {
          if (Jd.isWidget()) {
            if (32 & Jd.flags && gd >= dd) return !0;
            16 & Jd.flags && (Wd = !0)
          } else {
            let Cd = gd + Jd.length;
            if (gd <= dd && (kd = Jd, Nd = dd - gd, Wd = Cd < dd), Cd >= dd && !pd && (pd = Jd, Pd = dd - gd, Zd = gd > dd), gd > dd && pd) return !0
          }
        })), kd || pd ? (Wd && pd ? kd = null : Zd && kd && (pd = null), kd && Jd < 0 || !pd ? kd.domIn(Nd, Jd) : pd.domIn(Pd, Jd)) : this.domAtPos(dd, Jd)
      }
      coordsAt(dd, Jd) {
        let {
          tile: kd,
          offset: pd
        } = this.tile.resolveBlock(dd, Jd);
        return kd.isWidget() ? kd.widget instanceof ck ? null : kd.coordsInWidget(pd, Jd, !0) : kd.coordsIn(pd, Jd)
      }
      lineAt(dd, Jd) {
        let {
          tile: kd
        } = this.tile.resolveBlock(dd, Jd);
        return kd.isLine() ? kd : null
      }
      coordsForChar(dd) {
        let {
          tile: Jd,
          offset: kd
        } = this.tile.resolveBlock(dd, 1);
        if (!Jd.isLine()) return null;
        return function dd(Jd, kd) {
          if (Jd.isComposite())
            for (let pd of Jd.children) {
              if (pd.length >= kd) {
                let Jd = dd(pd, kd);
                if (Jd) return Jd
              }
              if ((kd -= pd.length) < 0) break
            } else if (Jd.isText() && kd < Jd.length) {
              let dd = (0, pd.X)(Jd.text, kd);
              if (dd == kd) return null;
              let Nd = NJ(Jd.dom, kd, dd).getClientRects();
              for (let Jd = 0; Jd < Nd.length; Jd++) {
                let dd = Nd[Jd];
                if (Jd == Nd.length - 1 || dd.top < dd.bottom && dd.left < dd.right) return dd
              }
            } return null
        }(Jd, kd)
      }
      measureVisibleLineHeights(dd) {
        let Jd = [],
          {
            from: kd,
            to: pd
          } = dd,
          Nd = this.view.contentDOM.clientWidth,
          Wd = Nd > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          Pd = -1,
          Zd = this.view.textDirection == KJ.LTR,
          gd = 0,
          Cd = (dd, Kd, od) => {
            for (let ld = 0; ld < dd.children.length && !(Kd > pd); ld++) {
              let pd = dd.children[ld],
                Qd = Kd + pd.length,
                Ld = pd.dom.getBoundingClientRect(),
                {
                  height: Od
                } = Ld;
              if (od && !ld && (gd += Ld.top - od.top), pd instanceof Ik) Qd > kd && Cd(pd, Kd, Ld);
              else if (Kd >= kd && (gd > 0 && Jd.push(-gd), Jd.push(Od + gd), gd = 0, Wd)) {
                let dd = pd.dom.lastChild,
                  Jd = dd ? cd(dd) : [];
                if (Jd.length) {
                  let dd = Jd[Jd.length - 1],
                    kd = Zd ? dd.right - Ld.left : Ld.right - dd.left;
                  kd > Pd && (Pd = kd, this.minWidth = Nd, this.minWidthFrom = Kd, this.minWidthTo = Qd)
                }
              }
              od && ld == dd.children.length - 1 && (gd += od.bottom - Ld.bottom), Kd = Qd + pd.breakAfter
            }
          };
        return Cd(this.tile, 0, null), Jd
      }
      textDirectionAt(dd) {
        let {
          tile: Jd
        } = this.tile.resolveBlock(dd, 1);
        return "rtl" == getComputedStyle(Jd.dom).direction ? KJ.RTL : KJ.LTR
      }
      measureTextSize() {
        let dd = this.tile.blockTiles((dd => {
          if (dd.isLine() && dd.children.length && dd.length <= 20) {
            let Jd, kd = 0;
            for (let pd of dd.children) {
              if (!pd.isText() || /[^ -~]/.test(pd.text)) return;
              let dd = cd(pd.dom);
              if (1 != dd.length) return;
              kd += dd[0].width, Jd = dd[0].height
            }
            if (kd) return {
              lineHeight: dd.dom.getBoundingClientRect().height,
              charWidth: kd / dd.length,
              textHeight: Jd
            }
          }
        }));
        if (dd) return dd;
        let Jd, kd, pd, Nd = document.createElement("div");
        return Nd.className = "cm-line", Nd.style.width = "99999px", Nd.style.position = "absolute", Nd.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Nd);
          let dd = cd(Nd.firstChild)[0];
          Jd = Nd.getBoundingClientRect().height, kd = dd && dd.width ? dd.width / 27 : 7, pd = dd && dd.height ? dd.height : Jd, Nd.remove()
        })), {
          lineHeight: Jd,
          charWidth: kd,
          textHeight: pd
        }
      }
      computeBlockGapDeco() {
        let dd = [],
          Jd = this.view.viewState;
        for (let kd = 0, pd = 0;; pd++) {
          let Nd = pd == Jd.viewports.length ? null : Jd.viewports[pd],
            Wd = Nd ? Nd.from - 1 : this.view.state.doc.length;
          if (Wd > kd) {
            let pd = (Jd.lineBlockAt(Wd).bottom - Jd.lineBlockAt(kd).top) / this.view.scaleY;
            dd.push(Sd.replace({
              widget: new ck(pd),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(kd, Wd))
          }
          if (!Nd) break;
          kd = Nd.to + 1
        }
        return Sd.set(dd)
      }
      updateDeco() {
        let dd = 1,
          Jd = this.view.state.facet(Jk).map((Jd => (this.dynamicDecorationMap[dd++] = "function" == typeof Jd) ? Jd(this.view) : Jd)),
          kd = !1,
          Nd = this.view.state.facet(pk).map(((dd, Jd) => {
            let pd = "function" == typeof dd;
            return pd && (kd = !0), pd ? dd(this.view) : dd
          }));
        for (Nd.length && (this.dynamicDecorationMap[dd++] = kd, Jd.push(pd.x.join(Nd))), this.RW = [this.editContextFormatting, ...Jd, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; dd < this.RW.length;) this.dynamicDecorationMap[dd++] = !1;
        this.blockWrappers = this.view.state.facet(kk).map((dd => "function" == typeof dd ? dd(this.view) : dd))
      }
      scrollIntoView(dd) {
        var Jd;
        if (dd.isSnapshot) {
          let Jd = this.view.viewState.lineBlockAt(dd.range.head);
          return this.view.scrollDOM.scrollTop = Jd.top - dd.yMargin, void(this.view.scrollDOM.scrollLeft = dd.xMargin)
        }
        for (let Kd of this.view.state.facet(EJ)) try {
          if (Kd(this.view, dd.range, dd)) return !0
        } catch (Cd) {
          uJ(this.view.state, Cd, "scroll handler")
        }
        let kd, {
            range: pd
          } = dd,
          Nd = this.coordsAt(pd.head, null !== (Jd = pd.assoc) && void 0 !== Jd ? Jd : pd.empty ? 0 : pd.head > pd.anchor ? -1 : 1);
        if (!Nd) return;
        !pd.empty && (kd = this.coordsAt(pd.anchor, pd.anchor > pd.head ? -1 : 1)) && (Nd = {
          left: Math.min(Nd.left, kd.left),
          top: Math.min(Nd.top, kd.top),
          right: Math.max(Nd.right, kd.right),
          bottom: Math.max(Nd.bottom, kd.bottom)
        });
        let Wd = gk(this.view),
          Pd = {
            left: Nd.left - Wd.left,
            top: Nd.top - Wd.top,
            right: Nd.right + Wd.right,
            bottom: Nd.bottom + Wd.bottom
          },
          {
            offsetWidth: Zd,
            offsetHeight: gd
          } = this.view.scrollDOM;
        if (function(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
            let gd = dd.ownerDocument,
              Cd = gd.defaultView || window;
            for (let Kd = dd, od = !1; Kd && !od;)
              if (1 == Kd.nodeType) {
                let dd, ld = Kd == gd.body,
                  Qd = 1,
                  Ld = 1;
                if (ld) dd = Hd(Cd);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(Kd).position) && (od = !0), Kd.scrollHeight <= Kd.clientHeight && Kd.scrollWidth <= Kd.clientWidth) {
                    Kd = Kd.assignedSlot || Kd.parentNode;
                    continue
                  }
                  let Jd = Kd.getBoundingClientRect();
                  ({
                    scaleX: Qd,
                    scaleY: Ld
                  } = wd(Kd, Jd)), dd = {
                    left: Jd.left,
                    right: Jd.left + Kd.clientWidth * Qd,
                    top: Jd.top,
                    bottom: Jd.top + Kd.clientHeight * Ld
                  }
                }
                let Od = 0,
                  ed = 0;
                if ("nearest" == Nd) Jd.top < dd.top + Pd ? (ed = Jd.top - (dd.top + Pd), kd > 0 && Jd.bottom > dd.bottom + ed && (ed = Jd.bottom - dd.bottom + Pd)) : Jd.bottom > dd.bottom - Pd && (ed = Jd.bottom - dd.bottom + Pd, kd < 0 && Jd.top - ed < dd.top && (ed = Jd.top - (dd.top + Pd)));
                else {
                  let pd = Jd.bottom - Jd.top,
                    Wd = dd.bottom - dd.top;
                  ed = ("center" == Nd && pd <= Wd ? Jd.top + pd / 2 - Wd / 2 : "start" == Nd || "center" == Nd && kd < 0 ? Jd.top - Pd : Jd.bottom - Wd + Pd) - dd.top
                }
                if ("nearest" == pd ? Jd.left < dd.left + Wd ? (Od = Jd.left - (dd.left + Wd), kd > 0 && Jd.right > dd.right + Od && (Od = Jd.right - dd.right + Wd)) : Jd.right > dd.right - Wd && (Od = Jd.right - dd.right + Wd, kd < 0 && Jd.left < dd.left + Od && (Od = Jd.left - (dd.left + Wd))) : Od = ("center" == pd ? Jd.left + (Jd.right - Jd.left) / 2 - (dd.right - dd.left) / 2 : "start" == pd == Zd ? Jd.left - Wd : Jd.right - (dd.right - dd.left) + Wd) - dd.left, Od || ed)
                  if (ld) Cd.scrollBy(Od, ed);
                  else {
                    let dd = 0,
                      kd = 0;
                    if (ed) {
                      let dd = Kd.scrollTop;
                      Kd.scrollTop += ed / Ld, kd = (Kd.scrollTop - dd) * Ld
                    }
                    if (Od) {
                      let Jd = Kd.scrollLeft;
                      Kd.scrollLeft += Od / Qd, dd = (Kd.scrollLeft - Jd) * Qd
                    }
                    Jd = {
                      left: Jd.left - dd,
                      top: Jd.top - kd,
                      right: Jd.right - dd,
                      bottom: Jd.bottom - kd
                    }, dd && Math.abs(dd - Od) < 1 && (pd = "nearest"), kd && Math.abs(kd - ed) < 1 && (Nd = "nearest")
                  } if (ld) break;
                (Jd.top < dd.top || Jd.bottom > dd.bottom || Jd.left < dd.left || Jd.right > dd.right) && (Jd = {
                  left: Math.max(Jd.left, dd.left),
                  right: Math.min(Jd.right, dd.right),
                  top: Math.max(Jd.top, dd.top),
                  bottom: Math.min(Jd.bottom, dd.bottom)
                }), Kd = Kd.assignedSlot || Kd.parentNode
              } else {
                if (11 != Kd.nodeType) break;
                Kd = Kd.host
              }
          }(this.view.scrollDOM, Pd, pd.head < pd.anchor ? -1 : 1, dd.x, dd.y, Math.max(Math.min(dd.xMargin, Zd), -Zd), Math.max(Math.min(dd.yMargin, gd), -gd), this.view.textDirection == KJ.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Nd.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Nd.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let dd = this.view.docView.lineAt(pd.head, 1);
          dd && dd.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(dd) {
        let Jd = dd => dd.isWidget() || dd.children.some(Jd);
        return Jd(this.tile.resolveBlock(dd, 1).tile)
      }
      destroy() {
        yk(this.tile)
      }
    }

    function yk(dd, Jd) {
      let kd = null === Jd || void 0 === Jd ? void 0 : Jd.get(dd);
      if (1 != kd) {
        null == kd && dd.destroy();
        for (let kd of dd.children) yk(kd, Jd)
      }
    }

    function Dk(dd, Jd) {
      let kd = dd.observer.selectionRange;
      if (!kd.focusNode) return null;
      let pd = ZJ(kd.focusNode, kd.focusOffset),
        Nd = gJ(kd.focusNode, kd.focusOffset),
        Wd = pd || Nd;
      if (Nd && pd && Nd.node != pd.node) {
        let Jd = Lk.get(Nd.node);
        if (!Jd || Jd.isText() && Jd.text != Nd.node.nodeValue) Wd = Nd;
        else if (dd.docView.lastCompositionAfterCursor) {
          let dd = Lk.get(pd.node);
          !dd || dd.isText() && dd.text != pd.node.nodeValue || (Wd = Nd)
        }
      }
      if (dd.docView.lastCompositionAfterCursor = Wd != pd, !Wd) return null;
      let Pd = Jd - Wd.offset;
      return {
        from: Pd,
        to: Pd + Wd.node.nodeValue.length,
        node: Wd.node
      }
    }
    let Tk = class {
      constructor() {
        this.changes = []
      }
      compareRange(dd, Jd) {
        Ud(dd, Jd, this.changes)
      }
      comparePoint(dd, Jd) {
        Ud(dd, Jd, this.changes)
      }
      boundChange(dd) {
        Ud(dd, dd, this.changes)
      }
    };
    class Ek {
      constructor() {
        this.changes = []
      }
      compareRange(dd, Jd) {
        Ud(dd, Jd, this.changes)
      }
      comparePoint() {}
      boundChange(dd) {
        Ud(dd, dd, this.changes)
      }
    }
    class ck extends md {
      constructor(dd) {
        super(), this.height = dd
      }
      toDOM() {
        let dd = document.createElement("div");
        return dd.className = "cm-gap", this.updateDOM(dd), dd
      }
      eq(dd) {
        return dd.height == this.height
      }
      updateDOM(dd) {
        return dd.style.height = this.height + "px", !0
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

    function hk(dd, Jd, kd) {
      let pd = dd.lineBlockAt(Jd);
      if (Array.isArray(pd.type)) {
        let dd;
        for (let Nd of pd.type) {
          if (Nd.from > Jd) break;
          if (!(Nd.to < Jd)) {
            if (Nd.from < Jd && Nd.to > Jd) return Nd;
            dd && (Nd.type != bd.Text || dd.type == Nd.type && !(kd < 0 ? Nd.from < Jd : Nd.to > Jd)) || (dd = Nd)
          }
        }
        return dd || pd
      }
      return pd
    }

    function rk(dd, Jd, kd, pd) {
      let Nd = dd.state.doc.lineAt(Jd.head),
        Wd = dd.bidiSpans(Nd),
        Pd = dd.textDirectionAt(Nd.from);
      for (let Zd = Jd, gd = null;;) {
        let Jd = FJ(Nd, Wd, Pd, Zd, kd),
          Cd = MJ;
        if (!Jd) {
          if (Nd.number == (kd ? dd.state.doc.lines : 1)) return Zd;
          Cd = "\n", Nd = dd.state.doc.line(Nd.number + (kd ? 1 : -1)), Wd = dd.bidiSpans(Nd), Jd = dd.visualLineSide(Nd, !kd)
        }
        if (gd) {
          if (!gd(Cd)) return Zd
        } else {
          if (!pd) return Jd;
          gd = pd(Cd)
        }
        Zd = Jd
      }
    }

    function uk(dd, Jd, kd) {
      for (;;) {
        let pd = 0;
        for (let Nd of dd) Nd.between(Jd - 1, Jd + 1, ((dd, Nd, Wd) => {
          if (Jd > dd && Jd < Nd) {
            let Wd = pd || kd || (Jd - dd < Nd - Jd ? -1 : 1);
            Jd = Wd < 0 ? dd : Nd, pd = Wd
          }
        }));
        if (!pd) return Jd
      }
    }

    function tk(dd, Jd) {
      let kd = null;
      for (let Nd = 0; Nd < Jd.UO.length; Nd++) {
        let Wd = Jd.UO[Nd],
          Pd = null;
        if (Wd.empty) {
          let Jd = uk(dd, Wd.from, 0);
          Jd != Wd.from && (Pd = pd.k.cursor(Jd, -1))
        } else {
          let Jd = uk(dd, Wd.from, -1),
            kd = uk(dd, Wd.to, 1);
          Jd == Wd.from && kd == Wd.to || (Pd = pd.k.range(Wd.from == Wd.anchor ? Jd : kd, Wd.from == Wd.head ? Jd : kd))
        }
        Pd && (kd || (kd = Jd.UO.slice()), kd[Nd] = Pd)
      }
      return kd ? pd.k.create(kd, Jd.mainIndex) : Jd
    }

    function Vk(dd, Jd, kd) {
      let Nd = uk(dd.state.facet(Nk).map((Jd => Jd(dd))), kd.from, Jd.head > kd.from ? -1 : 1);
      return Nd == kd.from ? kd : pd.k.cursor(Nd, Nd < kd.from ? 1 : -1)
    }
    class zk {
      constructor(dd, Jd) {
        this.pos = dd, this.assoc = Jd
      }
    }

    function Hk(dd, Jd, kd, Nd) {
      let Wd, Pd = dd.contentDOM.getBoundingClientRect(),
        Zd = Pd.top + dd.viewState.paddingTop,
        {
          x: gd,
          y: Cd
        } = Jd,
        Kd = Cd - Zd;
      for (;;) {
        if (Kd < 0) return new zk(0, 1);
        if (Kd > dd.viewState.docHeight) return new zk(dd.state.doc.length, -1);
        if (Wd = dd.elementAtHeight(Kd), null == Nd) break;
        if (Wd.type == bd.Text) {
          if (Nd < 0 ? Wd.to < dd.viewport.from : Wd.from > dd.viewport.to) break;
          let Jd = dd.docView.coordsAt(Nd < 0 ? Wd.from : Wd.to, Nd > 0 ? -1 : 1);
          if (Jd && (Nd < 0 ? Jd.top <= Kd + Zd : Jd.bottom >= Kd + Zd)) break
        }
        let Jd = dd.viewState.heightOracle.textHeight / 2;
        Kd = Nd > 0 ? Wd.bottom + Jd : Wd.top - Jd
      }
      if (dd.viewport.from >= Wd.to || dd.viewport.to <= Wd.from) {
        if (kd) return null;
        if (Wd.type == bd.Text) {
          let Jd = function(dd, Jd, kd, Nd, Wd) {
            let Pd = Math.round((Nd - Jd.left) * dd.defaultCharacterWidth);
            if (dd.lineWrapping && kd.height > 1.5 * dd.defaultLineHeight) {
              let Jd = dd.viewState.heightOracle.textHeight;
              Pd += Math.floor((Wd - kd.top - .5 * (dd.defaultLineHeight - Jd)) / Jd) * dd.viewState.heightOracle.lineLength
            }
            let Zd = dd.state.sliceDoc(kd.from, kd.to);
            return kd.from + (0, pd.Z)(Zd, Pd, dd.state.tabSize)
          }(dd, Pd, Wd, gd, Cd);
          return new zk(Jd, Jd == Wd.from ? 1 : -1)
        }
      }
      if (Wd.type != bd.Text) return Kd < (Wd.top + Wd.bottom) / 2 ? new zk(Wd.from, 1) : new zk(Wd.to, -1);
      let od = dd.docView.lineAt(Wd.from, 2);
      return od && od.length == Wd.length || (od = dd.docView.lineAt(Wd.from, -2)), new wk(dd, gd, Cd, dd.textDirectionAt(Wd.from)).scanTile(od, Wd.from)
    }
    class wk {
      constructor(dd, Jd, kd, pd) {
        this.view = dd, this.x = Jd, this.y = kd, this.baseDir = pd, this.line = null, this.spans = null
      }
      bidiSpansAt(dd) {
        return (!this.line || this.line.from > dd || this.line.to < dd) && (this.line = this.view.state.doc.lineAt(dd), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(dd, Jd) {
        let {
          line: kd,
          spans: pd
        } = this.bidiSpansAt(dd);
        return pd[vJ.find(pd, dd - kd.from, -1, Jd)].level == this.baseDir
      }
      dirAt(dd, Jd) {
        let {
          line: kd,
          spans: pd
        } = this.bidiSpansAt(dd);
        return pd[vJ.find(pd, dd - kd.from, -1, Jd)].dir
      }
      bidiIn(dd, Jd) {
        let {
          spans: kd,
          line: pd
        } = this.bidiSpansAt(dd);
        return kd.length > 1 || kd.length && (kd[0].level != this.baseDir || kd[0].to + pd.from < Jd)
      }
      scan(dd, Jd) {
        let kd, pd, Nd, Wd = 0,
          Pd = dd.length - 1,
          Zd = new Set,
          gd = this.bidiIn(dd[0], dd[Pd]),
          Cd = -1,
          Kd = 1e9;
        dd: for (; Wd < Pd;) {
          let od = Pd - Wd,
            ld = Wd + Pd >> 1;
          Jd: if (Zd.has(ld)) {
            let dd = Wd + Math.floor(Math.random() * od);
            for (let Jd = 0; Jd < od; Jd++) {
              if (!Zd.has(dd)) {
                ld = dd;
                break Jd
              }
              dd++, dd == Pd && (dd = Wd)
            }
            break dd
          } Zd.add(ld);
          let Qd = Jd(ld);
          if (Qd)
            for (let Jd = 0; Jd < Qd.length; Jd++) {
              let Zd = Qd[Jd],
                od = 0;
              if (!(0 == Zd.width && Qd.length > 1)) {
                if (Zd.bottom < this.y)(!kd || kd.bottom < Zd.bottom) && (kd = Zd), od = 1;
                else if (Zd.top > this.y)(!pd || pd.top > Zd.top) && (pd = Zd), od = -1;
                else {
                  let dd = Zd.left > this.x ? this.x - Zd.left : Zd.right < this.x ? this.x - Zd.right : 0,
                    Jd = Math.abs(dd);
                  Jd < Kd && (Cd = ld, Kd = Jd, Nd = Zd), dd && (od = dd < 0 == (this.baseDir == KJ.LTR) ? -1 : 1)
                } - 1 != od || gd && !this.baseDirAt(dd[ld], 1) ? 1 != od || gd && !this.baseDirAt(dd[ld + 1], -1) || (Wd = ld + 1) : Pd = ld
              }
            }
        }
        if (!Nd) {
          let Nd = kd && (!pd || this.y - kd.bottom < pd.top - this.y) ? kd : pd;
          return this.y = (Nd.top + Nd.bottom) / 2, this.scan(dd, Jd)
        }
        if (Kd) {
          if (kd && kd.bottom > Nd.top) return this.y = kd.bottom - 1, this.scan(dd, Jd);
          if (pd && pd.top < Nd.bottom) return this.y = pd.top + 1, this.scan(dd, Jd)
        }
        let od = (gd ? this.dirAt(dd[Cd], 1) : this.baseDir) == KJ.LTR;
        return {
          i: Cd,
          after: this.x > (Nd.left + Nd.right) / 2 == od
        }
      }
      scanText(dd, Jd) {
        let kd = [];
        for (let Wd = 0; Wd < dd.length; Wd = (0, pd.X)(dd.text, Wd)) kd.push(Jd + Wd);
        kd.push(Jd + dd.length);
        let Nd = this.scan(kd, (pd => {
          let Nd = kd[pd] - Jd,
            Wd = kd[pd + 1] - Jd;
          return NJ(dd.dom, Nd, Wd).getClientRects()
        }));
        return Nd.after ? new zk(kd[Nd.i + 1], -1) : new zk(kd[Nd.i], 1)
      }
      scanTile(dd, Jd) {
        if (!dd.length) return new zk(Jd, 1);
        if (1 == dd.children.length) {
          let kd = dd.children[0];
          if (kd.isText()) return this.scanText(kd, Jd);
          if (kd.isComposite()) return this.scanTile(kd, Jd)
        }
        let kd = [Jd];
        for (let Pd = 0, Zd = Jd; Pd < dd.children.length; Pd++) kd.push(Zd += dd.children[Pd].length);
        let pd = this.scan(kd, (Jd => {
            let kd = dd.children[Jd];
            return 48 & kd.flags ? null : (1 == kd.dom.nodeType ? kd.dom : NJ(kd.dom, 0, kd.length)).getClientRects()
          })),
          Nd = dd.children[pd.i],
          Wd = kd[pd.i];
        return Nd.isText() ? this.scanText(Nd, Wd) : Nd.isComposite() ? this.scanTile(Nd, Wd) : pd.after ? new zk(kd[pd.i + 1], -1) : new zk(Wd, 1)
      }
    }
    const Ak = "\uffff";
    class dp {
      constructor(dd, Jd) {
        this.points = dd, this.view = Jd, this.text = "", this.lineSeparator = Jd.state.facet(pd.l.lineSeparator)
      }
      append(dd) {
        this.text += dd
      }
      lineBreak() {
        this.text += Ak
      }
      readRange(dd, Jd) {
        if (!dd) return this;
        let kd = dd.parentNode;
        for (let pd = dd;;) {
          this.findPointBefore(kd, pd);
          let dd = this.text.length;
          this.readNode(pd);
          let Nd = Lk.get(pd),
            Wd = pd.nextSibling;
          if (Wd == Jd) {
            (null === Nd || void 0 === Nd ? void 0 : Nd.breakAfter) && !Wd && kd != this.view.contentDOM && this.lineBreak();
            break
          }
          let Pd = Lk.get(Wd);
          (Nd && Pd ? Nd.breakAfter : (Nd ? Nd.breakAfter : ud(pd)) || ud(Wd) && ("BR" != pd.nodeName || (null === Nd || void 0 === Nd ? void 0 : Nd.isWidget())) && this.text.length > dd) && !kp(Wd, Jd) && this.lineBreak(), pd = Wd
        }
        return this.findPointBefore(kd, Jd), this
      }
      readTextNode(dd) {
        let Jd = dd.nodeValue;
        for (let kd of this.points) kd.node == dd && (kd.pos = this.text.length + Math.min(kd.offset, Jd.length));
        for (let kd = 0, pd = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Nd, Wd = -1,
            Pd = 1;
          if (this.lineSeparator ? (Wd = Jd.indexOf(this.lineSeparator, kd), Pd = this.lineSeparator.length) : (Nd = pd.exec(Jd)) && (Wd = Nd.index, Pd = Nd[0].length), this.append(Jd.slice(kd, Wd < 0 ? Jd.length : Wd)), Wd < 0) break;
          if (this.lineBreak(), Pd > 1)
            for (let Jd of this.points) Jd.node == dd && Jd.pos > this.text.length && (Jd.pos -= Pd - 1);
          kd = Wd + Pd
        }
      }
      readNode(dd) {
        let Jd = Lk.get(dd),
          kd = Jd && Jd.overrideDOMText;
        if (null != kd) {
          this.findPointInside(dd, kd.length);
          for (let dd = kd.iter(); !dd.next().done;) dd.lineBreak ? this.lineBreak() : this.append(dd.value)
        } else 3 == dd.nodeType ? this.readTextNode(dd) : "BR" == dd.nodeName ? dd.nextSibling && this.lineBreak() : 1 == dd.nodeType && this.readRange(dd.firstChild, null)
      }
      findPointBefore(dd, Jd) {
        for (let kd of this.points) kd.node == dd && dd.childNodes[kd.offset] == Jd && (kd.pos = this.text.length)
      }
      findPointInside(dd, Jd) {
        for (let kd of this.points)(3 == dd.nodeType ? kd.node == dd : dd.contains(kd.node)) && (kd.pos = this.text.length + (Jp(dd, kd.node, kd.offset) ? Jd : 0))
      }
    }

    function Jp(dd, Jd, kd) {
      for (;;) {
        if (!Jd || kd < Vd(Jd)) return !1;
        if (Jd == dd) return !0;
        kd = rd(Jd) + 1, Jd = Jd.parentNode
      }
    }

    function kp(dd, Jd) {
      let kd;
      for (; dd != Jd && dd; dd = dd.nextSibling) {
        let Jd = Lk.get(dd);
        if (!(null === Jd || void 0 === Jd ? void 0 : Jd.isWidget())) return !1;
        Jd && (kd || (kd = [])).push(Jd)
      }
      if (kd)
        for (let pd of kd) {
          let dd = pd.overrideDOMText;
          if (null === dd || void 0 === dd ? void 0 : dd.length) return !1
        }
      return !0
    }
    class pp {
      constructor(dd, Jd) {
        this.node = dd, this.offset = Jd, this.pos = -1
      }
    }
    class Np {
      constructor(dd, Jd, kd, Nd) {
        this.typeOver = Nd, this.bounds = null, this.text = "", this.domChanged = Jd > -1;
        let {
          impreciseHead: Wd,
          impreciseAnchor: Pd
        } = dd.docView, Zd = dd.state.selection;
        if (dd.state.readOnly && Jd > -1) this.newSel = null;
        else if (Jd > -1 && (this.bounds = Wp(dd.docView.tile, Jd, kd, 0))) {
          let Jd = Wd || Pd ? [] : function(dd) {
              let Jd = [];
              if (dd.root.activeElement != dd.contentDOM) return Jd;
              let {
                anchorNode: kd,
                anchorOffset: pd,
                focusNode: Nd,
                focusOffset: Wd
              } = dd.observer.selectionRange;
              kd && (Jd.push(new pp(kd, pd)), Nd == kd && Wd == pd || Jd.push(new pp(Nd, Wd)));
              return Jd
            }(dd),
            kd = new dp(Jd, dd);
          kd.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = kd.text, this.newSel = function(dd, Jd) {
            if (0 == dd.length) return null;
            let kd = dd[0].pos,
              Nd = 2 == dd.length ? dd[1].pos : kd;
            return kd > -1 && Nd > -1 ? pd.k.single(kd + Jd, Nd + Jd) : null
          }(Jd, this.bounds.from)
        } else {
          let Jd = dd.observer.selectionRange,
            kd = Wd && Wd.node == Jd.focusNode && Wd.offset == Jd.focusOffset || !Td(dd.contentDOM, Jd.focusNode) ? Zd.main.head : dd.docView.posFromDOM(Jd.focusNode, Jd.focusOffset),
            Nd = Pd && Pd.node == Jd.anchorNode && Pd.offset == Jd.anchorOffset || !Td(dd.contentDOM, Jd.anchorNode) ? Zd.main.anchor : dd.docView.posFromDOM(Jd.anchorNode, Jd.anchorOffset),
            gd = dd.viewport;
          if ((Bd.ios || Bd.chrome) && Zd.main.empty && kd != Nd && (gd.from > 0 || gd.to < dd.state.doc.length)) {
            let Jd = Math.min(kd, Nd),
              pd = Math.max(kd, Nd),
              Wd = gd.from - Jd,
              Pd = gd.to - pd;
            0 != Wd && 1 != Wd && 0 != Jd || 0 != Pd && -1 != Pd && pd != dd.state.doc.length || (kd = 0, Nd = dd.state.doc.length)
          }
          if (dd.inputState.composing > -1 && Zd.UO.length > 1) this.newSel = Zd.replaceRange(pd.k.range(Nd, kd));
          else if (dd.lineWrapping && Nd == kd && (!Zd.main.empty || Zd.main.head != kd) && dd.inputState.lastTouchTime > Date.now() - 100) {
            let Jd = dd.coordsAtPos(kd, -1),
              Nd = 0;
            Jd && (Nd = dd.inputState.lastTouchY <= Jd.bottom ? -1 : 1), this.newSel = pd.k.create([pd.k.cursor(kd, Nd)])
          } else this.newSel = pd.k.single(Nd, kd)
        }
      }
    }

    function Wp(dd, Jd, kd, pd) {
      if (dd.isComposite()) {
        let Nd = -1,
          Wd = -1,
          Pd = -1,
          Zd = -1;
        for (let gd = 0, Cd = pd, Kd = pd; gd < dd.children.length; gd++) {
          let pd = dd.children[gd],
            od = Cd + pd.length;
          if (Cd < Jd && od > kd) return Wp(pd, Jd, kd, Cd);
          if (od >= Jd && -1 == Nd && (Nd = gd, Wd = Cd), Cd > kd && pd.dom.parentNode == dd.dom) {
            Pd = gd, Zd = Kd;
            break
          }
          Kd = od, Cd = od + pd.breakAfter
        }
        return {
          from: Wd,
          to: Zd < 0 ? pd + dd.length : Zd,
          startDOM: (Nd ? dd.children[Nd - 1].dom.nextSibling : null) || dd.dom.firstChild,
          endDOM: Pd < dd.children.length && Pd >= 0 ? dd.children[Pd].dom : null
        }
      }
      return dd.isText() ? {
        from: pd,
        to: pd + dd.length,
        startDOM: dd.dom,
        endDOM: dd.dom.nextSibling
      } : null
    }

    function Pp(dd, Jd) {
      let kd, {
          newSel: Nd
        } = Jd,
        {
          state: Wd
        } = dd,
        Pd = Wd.selection.main,
        Zd = dd.inputState.lastKeyTime > Date.now() - 100 ? dd.inputState.lastKeyCode : -1;
      if (Jd.bounds) {
        let {
          from: dd,
          to: Nd
        } = Jd.bounds, gd = Pd.from, Cd = null;
        (8 === Zd || Bd.android && Jd.text.length < Nd - dd) && (gd = Pd.to, Cd = "end");
        let Kd, od, ld = Wd.doc.sliceString(dd, Nd, Ak);
        !Pd.empty && Pd.from >= dd && Pd.to <= Nd && (Jd.typeOver || ld != Jd.text) && ld.slice(0, Pd.from - dd) == Jd.text.slice(0, Pd.from - dd) && ld.slice(Pd.to - dd) == Jd.text.slice(Kd = Jd.text.length - (ld.length - (Pd.to - dd))) ? kd = {
          from: Pd.from,
          to: Pd.to,
          insert: pd.I.of(Jd.text.slice(Pd.from - dd, Kd).split(Ak))
        } : (od = gp(ld, Jd.text, gd - dd, Cd)) && (Bd.chrome && 13 == Zd && od.toB == od.from + 2 && Jd.text.slice(od.from, od.toB) == Ak + Ak && od.toB--, kd = {
          from: dd + od.from,
          to: dd + od.toA,
          insert: pd.I.of(Jd.text.slice(od.from, od.toB).split(Ak))
        })
      } else Nd && (!dd.hasFocus && Wd.facet(tJ) || Cp(Nd, Pd)) && (Nd = null);
      if (!kd && !Nd) return !1;
      if ((Bd.mac || Bd.android) && kd && kd.from == kd.to && kd.from == Pd.head - 1 && /^\. ?$/.test(kd.insert.toString()) && "off" == dd.contentDOM.getAttribute("autocorrect") ? (Nd && 2 == kd.insert.length && (Nd = pd.k.single(Nd.main.anchor - 1, Nd.main.head - 1)), kd = {
          from: kd.from,
          to: kd.to,
          insert: pd.I.of([kd.insert.toString().replace(".", " ")])
        }) : Wd.doc.lineAt(Pd.from).to < Pd.to && dd.docView.lineHasWidget(Pd.to) && dd.inputState.insertingTextAt > Date.now() - 50 ? kd = {
          from: Pd.from,
          to: Pd.to,
          insert: Wd.toText(dd.inputState.insertingText)
        } : Bd.chrome && kd && kd.from == kd.to && kd.from == Pd.head && "\n " == kd.insert.toString() && dd.lineWrapping && (Nd && (Nd = pd.k.single(Nd.main.anchor - 1, Nd.main.head - 1)), kd = {
          from: Pd.from,
          to: Pd.to,
          insert: pd.I.of([" "])
        }), kd) return Zp(dd, kd, Nd, Zd);
      if (Nd && !Cp(Nd, Pd)) {
        let Jd = !1,
          kd = "select";
        return dd.inputState.lastSelectionTime > Date.now() - 50 && ("select" == dd.inputState.lastSelectionOrigin && (Jd = !0), kd = dd.inputState.lastSelectionOrigin, "select.pointer" == kd && (Nd = tk(Wd.facet(Nk).map((Jd => Jd(dd))), Nd))), dd.dispatch({
          selection: Nd,
          scrollIntoView: Jd,
          userEvent: kd
        }), !0
      }
      return !1
    }

    function Zp(dd, Jd, kd) {
      let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (Bd.ios && dd.inputState.flushIOSKey(Jd)) return !0;
      let Wd = dd.state.selection.main;
      if (Bd.android && (Jd.to == Wd.to && (Jd.from == Wd.from || Jd.from == Wd.from - 1 && " " == dd.state.sliceDoc(Jd.from, Wd.from)) && 1 == Jd.insert.length && 2 == Jd.insert.lines && WJ(dd.contentDOM, "Enter", 13) || (Jd.from == Wd.from - 1 && Jd.to == Wd.to && 0 == Jd.insert.length || 8 == Nd && Jd.insert.length < Jd.to - Jd.from && Jd.to > Wd.head) && WJ(dd.contentDOM, "Backspace", 8) || Jd.from == Wd.from && Jd.to == Wd.to + 1 && 0 == Jd.insert.length && WJ(dd.contentDOM, "Delete", 46))) return !0;
      let Pd, Zd = Jd.insert.toString();
      dd.inputState.composing >= 0 && dd.inputState.composing++;
      let gd = () => Pd || (Pd = function(dd, Jd, kd) {
        let Nd, Wd = dd.state,
          Pd = Wd.selection.main,
          Zd = -1;
        if (Jd.from == Jd.to && Jd.from < Pd.from || Jd.from > Pd.to) {
          let kd = Jd.from < Pd.from ? -1 : 1,
            pd = kd < 0 ? Pd.from : Pd.to,
            Nd = uk(Wd.facet(Nk).map((Jd => Jd(dd))), pd, kd);
          Jd.from == Nd && (Zd = Nd)
        }
        if (Zd > -1) Nd = {
          changes: Jd,
          selection: pd.k.cursor(Jd.from + Jd.insert.length, -1)
        };
        else if (Jd.from >= Pd.from && Jd.to <= Pd.to && Jd.to - Jd.from >= (Pd.to - Pd.from) / 3 && (!kd || kd.main.empty && kd.main.from == Jd.from + Jd.insert.length) && dd.inputState.composing < 0) {
          let kd = Pd.from < Jd.from ? Wd.sliceDoc(Pd.from, Jd.from) : "",
            pd = Pd.to > Jd.to ? Wd.sliceDoc(Jd.to, Pd.to) : "";
          Nd = Wd.replaceSelection(dd.state.toText(kd + Jd.insert.sliceString(0, void 0, dd.state.lineBreak) + pd))
        } else {
          let Zd = Wd.changes(Jd),
            gd = kd && kd.main.to <= Zd.newLength ? kd.main : void 0;
          if (Wd.selection.UO.length > 1 && (dd.inputState.composing >= 0 || dd.inputState.compositionPendingChange) && Jd.to <= Pd.to + 10 && Jd.to >= Pd.to - 10) {
            let Cd, Kd = dd.state.sliceDoc(Jd.from, Jd.to),
              od = kd && Dk(dd, kd.main.head);
            if (od) {
              let dd = Jd.insert.length - (Jd.to - Jd.from);
              Cd = {
                from: od.from,
                to: od.to - dd
              }
            } else Cd = dd.state.doc.lineAt(Pd.head);
            let ld = Pd.to - Jd.to;
            Nd = Wd.changeByRange((kd => {
              if (kd.from == Pd.from && kd.to == Pd.to) return {
                changes: Zd,
                range: gd || kd.map(Zd)
              };
              let Nd = kd.to - ld,
                od = Nd - Kd.length;
              if (dd.state.sliceDoc(od, Nd) != Kd || Nd >= Cd.from && od <= Cd.to) return {
                range: kd
              };
              let Qd = Wd.changes({
                  from: od,
                  to: Nd,
                  insert: Jd.insert
                }),
                Ld = kd.to - Pd.to;
              return {
                changes: Qd,
                range: gd ? pd.k.range(Math.max(0, gd.anchor + Ld), Math.max(0, gd.head + Ld)) : kd.map(Qd)
              }
            }))
          } else Nd = {
            changes: Zd,
            selection: gd && Wd.selection.replaceRange(gd)
          }
        }
        let gd = "input.type";
        (dd.composing || dd.inputState.compositionPendingChange && dd.inputState.compositionEndedAt > Date.now() - 50) && (dd.inputState.compositionPendingChange = !1, gd += ".compose", dd.inputState.compositionFirstChange && (gd += ".start", dd.inputState.compositionFirstChange = !1));
        return Wd.update(Nd, {
          userEvent: gd,
          scrollIntoView: !0
        })
      }(dd, Jd, kd));
      return dd.state.facet(fJ).some((kd => kd(dd, Jd.from, Jd.to, Zd, gd))) || dd.dispatch(gd()), !0
    }

    function gp(dd, Jd, kd, pd) {
      let Nd = Math.min(dd.length, Jd.length),
        Wd = 0;
      for (; Wd < Nd && dd.charCodeAt(Wd) == Jd.charCodeAt(Wd);) Wd++;
      if (Wd == Nd && dd.length == Jd.length) return null;
      let Pd = dd.length,
        Zd = Jd.length;
      for (; Pd > 0 && Zd > 0 && dd.charCodeAt(Pd - 1) == Jd.charCodeAt(Zd - 1);) Pd--, Zd--;
      if ("end" == pd) {
        kd -= Pd + Math.max(0, Wd - Math.min(Pd, Zd)) - Wd
      }
      if (Pd < Wd && dd.length < Jd.length) {
        Wd -= kd <= Wd && kd >= Pd ? Wd - kd : 0, Zd = Wd + (Zd - Pd), Pd = Wd
      } else if (Zd < Wd) {
        Wd -= kd <= Wd && kd >= Zd ? Wd - kd : 0, Pd = Wd + (Pd - Zd), Zd = Wd
      }
      return {
        from: Wd,
        toA: Pd,
        toB: Zd
      }
    }

    function Cp(dd, Jd) {
      return Jd.head == dd.main.head && Jd.anchor == dd.main.anchor
    }
    class Kp {
      setSelectionOrigin(dd) {
        this.lastSelectionOrigin = dd, this.lastSelectionTime = Date.now()
      }
      constructor(dd) {
        this.view = dd, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = dd.hasFocus, Bd.safari && dd.contentDOM.addEventListener("input", (() => null)), Bd.gecko && function(dd) {
          Xp.has(dd) || (Xp.add(dd), dd.addEventListener("copy", (() => {})), dd.addEventListener("cut", (() => {})))
        }(dd.contentDOM.ownerDocument)
      }
      handleEvent(dd) {
        (function(dd, Jd) {
          if (!Jd.bubbles) return !0;
          if (Jd.defaultPrevented) return !1;
          for (let kd, pd = Jd.target; pd != dd.contentDOM; pd = pd.parentNode)
            if (!pd || 11 == pd.nodeType || (kd = Lk.get(pd)) && kd.isWidget() && !kd.isHidden && kd.widget.ignoreEvent(Jd)) return !1;
          return !0
        })(this.view, dd) && !this.ignoreDuringComposition(dd) && ("keydown" == dd.type && this.keydown(dd) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(dd.type, dd))) : this.runHandlers(dd.type, dd)))
      }
      runHandlers(dd, Jd) {
        let kd = this.handlers[dd];
        if (kd) {
          for (let dd of kd.observers) dd(this.view, Jd);
          for (let dd of kd.handlers) {
            if (Jd.defaultPrevented) break;
            if (dd(this.view, Jd)) {
              Jd.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(dd) {
        let Jd = lp(dd),
          kd = this.handlers,
          pd = this.view.contentDOM;
        for (let Nd in Jd)
          if ("scroll" != Nd) {
            let dd = !Jd[Nd].handlers.length,
              Wd = kd[Nd];
            Wd && dd != !Wd.handlers.length && (pd.removeEventListener(Nd, this.handleEvent), Wd = null), Wd || pd.addEventListener(Nd, this.handleEvent, {
              passive: dd
            })
          } for (let Nd in kd) "scroll" == Nd || Jd[Nd] || pd.removeEventListener(Nd, this.handleEvent);
        this.handlers = Jd
      }
      keydown(dd) {
        if (this.lastKeyCode = dd.keyCode, this.lastKeyTime = Date.now(), 9 == dd.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != dd.keyCode && Op.indexOf(dd.keyCode) < 0 && (this.tabFocusMode = -1), Bd.android && Bd.chrome && !dd.synthetic && (13 == dd.keyCode || 8 == dd.keyCode)) return this.view.observer.delayAndroidKey(dd.key, dd.keyCode), !0;
        let Jd;
        return !Bd.ios || dd.synthetic || dd.altKey || dd.metaKey || dd.shiftKey || !((Jd = Qp.find((Jd => Jd.keyCode == dd.keyCode))) && !dd.ctrlKey || Lp.indexOf(dd.key) > -1 && dd.ctrlKey) ? (229 != dd.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = Jd || dd, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(dd) {
        let Jd = this.pendingIOSKey;
        return !!Jd && (!("Enter" == Jd.key && dd && dd.from < dd.to && /^\S+$/.test(dd.insert.toString())) && (this.pendingIOSKey = void 0, WJ(this.view.contentDOM, Jd.key, Jd.keyCode, Jd instanceof KeyboardEvent ? Jd : void 0)))
      }
      ignoreDuringComposition(dd) {
        return !(!/^key/.test(dd.type) || dd.synthetic) && (this.composing > 0 || !!(Bd.safari && !Bd.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(dd) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = dd
      }
      update(dd) {
        this.view.observer.update(dd), this.mouseSelection && this.mouseSelection.update(dd), this.draggedContent && dd.docChanged && (this.draggedContent = this.draggedContent.map(dd.changes)), dd.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function op(dd, Jd) {
      return (kd, pd) => {
        try {
          return Jd.call(dd, pd, kd)
        } catch (Nd) {
          uJ(kd.state, Nd)
        }
      }
    }

    function lp(dd) {
      let Jd = Object.create(null);

      function kd(dd) {
        return Jd[dd] || (Jd[dd] = {
          observers: [],
          handlers: []
        })
      }
      for (let pd of dd) {
        let dd = pd.spec,
          Jd = dd && dd.plugin.domEventHandlers,
          Nd = dd && dd.plugin.domEventObservers;
        if (Jd)
          for (let Wd in Jd) {
            let dd = Jd[Wd];
            dd && kd(Wd).handlers.push(op(pd.value, dd))
          }
        if (Nd)
          for (let Wd in Nd) {
            let dd = Nd[Wd];
            dd && kd(Wd).observers.push(op(pd.value, dd))
          }
      }
      for (let pd in Ip) kd(pd).handlers.push(Ip[pd]);
      for (let pd in Gp) kd(pd).observers.push(Gp[pd]);
      return Jd
    }
    const Qp = [{
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
      Lp = "dthko",
      Op = [16, 17, 18, 20, 91, 92, 224, 225];

    function ep(dd) {
      return .7 * Math.max(0, dd) + 8
    }
    class Rp {
      constructor(dd, Jd, kd, Nd) {
        this.view = dd, this.startEvent = Jd, this.style = kd, this.mustSelect = Nd, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = Jd, this.scrollParents = Ad(dd.contentDOM), this.atoms = dd.state.facet(Nk).map((Jd => Jd(dd)));
        let Wd = dd.contentDOM.ownerDocument;
        Wd.addEventListener("mousemove", this.move = this.move.bind(this)), Wd.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = Jd.shiftKey, this.multiple = dd.state.facet(pd.l.allowMultipleSelections) && function(dd, Jd) {
          let kd = dd.state.facet(mJ);
          return kd.length ? kd[0](Jd) : Bd.mac ? Jd.metaKey : Jd.ctrlKey
        }(dd, Jd), this.dragging = !(! function(dd, Jd) {
          let {
            main: kd
          } = dd.state.selection;
          if (kd.empty) return !1;
          let pd = Dd(dd.root);
          if (!pd || 0 == pd.rangeCount) return !0;
          let Nd = pd.getRangeAt(0).getClientRects();
          for (let Wd = 0; Wd < Nd.length; Wd++) {
            let dd = Nd[Wd];
            if (dd.left <= Jd.clientX && dd.right >= Jd.clientX && dd.top <= Jd.clientY && dd.bottom >= Jd.clientY) return !0
          }
          return !1
        }(dd, Jd) || 1 != Fp(Jd)) && null
      }
      start(dd) {
        !1 === this.dragging && this.select(dd)
      }
      move(dd) {
        if (0 == dd.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (Jd = this.startEvent, kd = dd, Math.max(Math.abs(Jd.clientX - kd.clientX), Math.abs(Jd.clientY - kd.clientY)) < 10)) return;
        var Jd, kd;
        this.select(this.lastEvent = dd);
        let pd = 0,
          Nd = 0,
          Wd = 0,
          Pd = 0,
          Zd = this.view.win.innerWidth,
          gd = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: Wd,
          right: Zd
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: Pd,
          bottom: gd
        } = this.scrollParents.y.getBoundingClientRect());
        let Cd = gk(this.view);
        dd.clientX - Cd.left <= Wd + 6 ? pd = -ep(Wd - dd.clientX) : dd.clientX + Cd.right >= Zd - 6 && (pd = ep(dd.clientX - Zd)), dd.clientY - Cd.top <= Pd + 6 ? Nd = -ep(Pd - dd.clientY) : dd.clientY + Cd.bottom >= gd - 6 && (Nd = ep(dd.clientY - gd)), this.setScrollSpeed(pd, Nd)
      }
      up(dd) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || dd.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let dd = this.view.contentDOM.ownerDocument;
        dd.removeEventListener("mousemove", this.move), dd.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(dd, Jd) {
        this.scrollSpeed = {
          x: dd,
          y: Jd
        }, dd || Jd ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: dd,
          y: Jd
        } = this.scrollSpeed;
        dd && this.scrollParents.x && (this.scrollParents.x.scrollLeft += dd, dd = 0), Jd && this.scrollParents.y && (this.scrollParents.y.scrollTop += Jd, Jd = 0), (dd || Jd) && this.view.win.scrollBy(dd, Jd), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(dd) {
        let {
          view: Jd
        } = this, kd = tk(this.atoms, this.style.get(dd, this.extend, this.multiple));
        !this.mustSelect && kd.eq(Jd.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: kd,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(dd) {
        dd.transactions.some((dd => dd.isUserEvent("input.type"))) ? this.destroy() : this.style.update(dd) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const Ip = Object.create(null),
      Gp = Object.create(null),
      vp = Bd.ie && Bd.ie_version < 15 || Bd.ios && Bd.webkit_version < 604;

    function xp(dd, Jd, kd) {
      for (let pd of dd.facet(Jd)) kd = pd(kd, dd);
      return kd
    }

    function qp(dd, Jd) {
      Jd = xp(dd.state, UJ, Jd);
      let kd, {
          state: Nd
        } = dd,
        Wd = 1,
        Pd = Nd.toText(Jd),
        Zd = Pd.lines == Nd.selection.UO.length;
      if (null != mp && Nd.selection.UO.every((dd => dd.empty)) && mp == Pd.toString()) {
        let dd = -1;
        kd = Nd.changeByRange((kd => {
          let gd = Nd.doc.lineAt(kd.from);
          if (gd.from == dd) return {
            range: kd
          };
          dd = gd.from;
          let Cd = Nd.toText((Zd ? Pd.line(Wd++).text : Jd) + Nd.lineBreak);
          return {
            changes: {
              from: gd.from,
              insert: Cd
            },
            range: pd.k.cursor(kd.from + Cd.length)
          }
        }))
      } else kd = Zd ? Nd.changeByRange((dd => {
        let Jd = Pd.line(Wd++);
        return {
          changes: {
            from: dd.from,
            to: dd.to,
            insert: Jd.text
          },
          range: pd.k.cursor(dd.from + Jd.length)
        }
      })) : Nd.replaceSelection(Pd);
      dd.dispatch(kd, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function Bp(dd, Jd, kd, Nd) {
      if (1 == Nd) return pd.k.cursor(Jd, kd);
      if (2 == Nd) return function(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Nd = dd.charCategorizer(Jd),
          Wd = dd.doc.lineAt(Jd),
          Pd = Jd - Wd.from;
        if (0 == Wd.length) return pd.k.cursor(Jd);
        0 == Pd ? kd = 1 : Pd == Wd.length && (kd = -1);
        let Zd = Pd,
          gd = Pd;
        kd < 0 ? Zd = (0, pd.X)(Wd.text, Pd, !1) : gd = (0, pd.X)(Wd.text, Pd);
        let Cd = Nd(Wd.text.slice(Zd, gd));
        for (; Zd > 0;) {
          let dd = (0, pd.X)(Wd.text, Zd, !1);
          if (Nd(Wd.text.slice(dd, Zd)) != Cd) break;
          Zd = dd
        }
        for (; gd < Wd.length;) {
          let dd = (0, pd.X)(Wd.text, gd);
          if (Nd(Wd.text.slice(gd, dd)) != Cd) break;
          gd = dd
        }
        return pd.k.range(Zd + Wd.from, gd + Wd.from)
      }(dd.state, Jd, kd);
      {
        let Nd = dd.docView.lineAt(Jd, kd),
          Wd = dd.state.doc.lineAt(Nd ? Nd.posAtEnd : Jd),
          Pd = Nd ? Nd.posAtStart : Wd.from,
          Zd = Nd ? Nd.posAtEnd : Wd.to;
        return Zd < dd.state.doc.length && Zd == Wd.to && Zd++, pd.k.range(Pd, Zd)
      }
    }
    Gp.scroll = dd => {
      dd.inputState.lastScrollTop = dd.scrollDOM.scrollTop, dd.inputState.lastScrollLeft = dd.scrollDOM.scrollLeft
    }, Gp.wheel = Gp.mousewheel = dd => {
      dd.inputState.lastWheelEvent = Date.now()
    }, Ip.keydown = (dd, Jd) => (dd.inputState.setSelectionOrigin("select"), 27 == Jd.keyCode && 0 != dd.inputState.tabFocusMode && (dd.inputState.tabFocusMode = Date.now() + 2e3), !1), Gp.touchstart = (dd, Jd) => {
      let kd = dd.inputState,
        pd = Jd.targetTouches[0];
      kd.lastTouchTime = Date.now(), pd && (kd.lastTouchX = pd.clientX, kd.lastTouchY = pd.clientY), kd.setSelectionOrigin("select.pointer")
    }, Gp.touchmove = dd => {
      dd.inputState.setSelectionOrigin("select.pointer")
    }, Ip.mousedown = (dd, Jd) => {
      if (dd.observer.flush(), dd.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let kd = null;
      for (let pd of dd.state.facet(SJ))
        if (kd = pd(dd, Jd), kd) break;
      if (kd || 0 != Jd.button || (kd = function(dd, Jd) {
          let kd = dd.posAndSideAtCoords({
              x: Jd.clientX,
              y: Jd.clientY
            }, !1),
            Nd = Fp(Jd),
            Wd = dd.state.selection;
          return {
            update(dd) {
              dd.docChanged && (kd.pos = dd.changes.mapPos(kd.pos), Wd = Wd.map(dd.changes))
            },
            get(Jd, Pd, Zd) {
              let gd, Cd = dd.posAndSideAtCoords({
                  x: Jd.clientX,
                  y: Jd.clientY
                }, !1),
                Kd = Bp(dd, Cd.pos, Cd.assoc, Nd);
              if (kd.pos != Cd.pos && !Pd) {
                let Jd = Bp(dd, kd.pos, kd.assoc, Nd),
                  Wd = Math.min(Jd.from, Kd.from),
                  Pd = Math.max(Jd.to, Kd.to);
                Kd = Wd < Kd.from ? pd.k.range(Wd, Pd, Kd.assoc) : pd.k.range(Pd, Wd, Kd.assoc)
              }
              return Pd ? Wd.replaceRange(Wd.main.extend(Kd.from, Kd.to, Kd.assoc)) : Zd && 1 == Nd && Wd.UO.length > 1 && (gd = function(dd, Jd) {
                for (let kd = 0; kd < dd.UO.length; kd++) {
                  let {
                    from: Nd,
                    to: Wd
                  } = dd.UO[kd];
                  if (Nd <= Jd && Wd >= Jd) return pd.k.create(dd.UO.slice(0, kd).concat(dd.UO.slice(kd + 1)), dd.mainIndex == kd ? 0 : dd.mainIndex - (dd.mainIndex > kd ? 1 : 0))
                }
                return null
              }(Wd, Cd.pos)) ? gd : Zd ? Wd.addRange(Kd) : pd.k.create([Kd])
            }
          }
        }(dd, Jd)), kd) {
        let pd = !dd.hasFocus;
        dd.inputState.startMouseSelection(new Rp(dd, Jd, kd, pd)), pd && dd.observer.ignore((() => {
          pJ(dd.contentDOM);
          let Jd = dd.root.activeElement;
          Jd && !Jd.contains(dd.contentDOM) && Jd.blur()
        }));
        let Nd = dd.inputState.mouseSelection;
        if (Nd) return Nd.start(Jd), !1 === Nd.dragging
      } else dd.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const sp = Bd.ie && Bd.ie_version <= 11;
    let ip = null,
      ap = 0,
      Mp = 0;

    function Fp(dd) {
      if (!sp) return dd.detail;
      let Jd = ip,
        kd = Mp;
      return ip = dd, Mp = Date.now(), ap = !Jd || kd > Date.now() - 400 && Math.abs(Jd.clientX - dd.clientX) < 2 && Math.abs(Jd.clientY - dd.clientY) < 2 ? (ap + 1) % 3 : 1
    }

    function Yp(dd, Jd, kd, pd) {
      if (!(kd = xp(dd.state, UJ, kd))) return;
      let Nd = dd.posAtCoords({
          x: Jd.clientX,
          y: Jd.clientY
        }, !1),
        {
          draggedContent: Wd
        } = dd.inputState,
        Pd = pd && Wd && function(dd, Jd) {
          let kd = dd.state.facet(bJ);
          return kd.length ? kd[0](Jd) : Bd.mac ? !Jd.altKey : !Jd.ctrlKey
        }(dd, Jd) ? {
          from: Wd.from,
          to: Wd.to
        } : null,
        Zd = {
          from: Nd,
          insert: kd
        },
        gd = dd.state.changes(Pd ? [Pd, Zd] : Zd);
      dd.focus(), dd.dispatch({
        changes: gd,
        selection: {
          anchor: gd.mapPos(Nd, -1),
          head: gd.mapPos(Nd, 1)
        },
        userEvent: Pd ? "move.drop" : "input.drop"
      }), dd.inputState.draggedContent = null
    }
    Ip.dragstart = (dd, Jd) => {
      let {
        selection: {
          main: kd
        }
      } = dd.state;
      if (Jd.target.draggable) {
        let Nd = dd.docView.tile.nearest(Jd.target);
        if (Nd && Nd.isWidget()) {
          let dd = Nd.posAtStart,
            Jd = dd + Nd.length;
          (dd >= kd.to || Jd <= kd.from) && (kd = pd.k.range(dd, Jd))
        }
      }
      let {
        inputState: Nd
      } = dd;
      return Nd.mouseSelection && (Nd.mouseSelection.dragging = !0), Nd.draggedContent = kd, Jd.dataTransfer && (Jd.dataTransfer.setData("Text", xp(dd.state, yJ, dd.state.sliceDoc(kd.from, kd.to))), Jd.dataTransfer.effectAllowed = "copyMove"), !1
    }, Ip.dragend = dd => (dd.inputState.draggedContent = null, !1), Ip.drop = (dd, Jd) => {
      if (!Jd.dataTransfer) return !1;
      if (dd.state.readOnly) return !0;
      let kd = Jd.dataTransfer.files;
      if (kd && kd.length) {
        let pd = Array(kd.length),
          Nd = 0,
          Wd = () => {
            ++Nd == kd.length && Yp(dd, Jd, pd.filter((dd => null != dd)).join(dd.state.lineBreak), !1)
          };
        for (let dd = 0; dd < kd.length; dd++) {
          let Jd = new FileReader;
          Jd.onerror = Wd, Jd.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(Jd.result) || (pd[dd] = Jd.result), Wd()
          }, Jd.readAsText(kd[dd])
        }
        return !0
      } {
        let kd = Jd.dataTransfer.getData("Text");
        if (kd) return Yp(dd, Jd, kd, !0), !0
      }
      return !1
    }, Ip.paste = (dd, Jd) => {
      if (dd.state.readOnly) return !0;
      dd.observer.flush();
      let kd = vp ? null : Jd.clipboardData;
      return kd ? (qp(dd, kd.getData("text/plain") || kd.getData("text/uri-list")), !0) : (function(dd) {
        let Jd = dd.dom.parentNode;
        if (!Jd) return;
        let kd = Jd.appendChild(document.createElement("textarea"));
        kd.style.cssText = "position: fixed; left: -10000px; top: 10px", kd.focus(), setTimeout((() => {
          dd.focus(), kd.remove(), qp(dd, kd.value)
        }), 50)
      }(dd), !1)
    };
    let mp = null;
    Ip.copy = Ip.cut = (dd, Jd) => {
      if (!Ed(dd.contentDOM, dd.observer.selectionRange)) return !1;
      let {
        text: kd,
        UO: pd,
        linewise: Nd
      } = function(dd) {
        let Jd = [],
          kd = [],
          pd = !1;
        for (let Nd of dd.selection.UO) Nd.empty || (Jd.push(dd.sliceDoc(Nd.from, Nd.to)), kd.push(Nd));
        if (!Jd.length) {
          let Nd = -1;
          for (let {
              from: pd
            }
            of dd.selection.UO) {
            let Wd = dd.doc.lineAt(pd);
            Wd.number > Nd && (Jd.push(Wd.text), kd.push({
              from: Wd.from,
              to: Math.min(dd.doc.length, Wd.to + 1)
            })), Nd = Wd.number
          }
          pd = !0
        }
        return {
          text: xp(dd, yJ, Jd.join(dd.lineBreak)),
          UO: kd,
          linewise: pd
        }
      }(dd.state);
      if (!kd && !Nd) return !1;
      mp = Nd ? kd : null, "cut" != Jd.type || dd.state.readOnly || dd.dispatch({
        changes: pd,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let Wd = vp ? null : Jd.clipboardData;
      return Wd ? (Wd.clearData(), Wd.setData("text/plain", kd), !0) : (function(dd, Jd) {
        let kd = dd.dom.parentNode;
        if (!kd) return;
        let pd = kd.appendChild(document.createElement("textarea"));
        pd.style.cssText = "position: fixed; left: -10000px; top: 10px", pd.value = Jd, pd.focus(), pd.selectionEnd = Jd.length, pd.selectionStart = 0, setTimeout((() => {
          pd.remove(), dd.focus()
        }), 50)
      }(dd, kd), !1)
    };
    const bp = pd.b.define();

    function Sp(dd, Jd) {
      let kd = [];
      for (let pd of dd.facet(nJ)) {
        let Nd = pd(dd, Jd);
        Nd && kd.push(Nd)
      }
      return kd.length ? dd.update({
        effects: kd,
        annotations: bp.of(!0)
      }) : null
    }

    function jp(dd) {
      setTimeout((() => {
        let Jd = dd.hasFocus;
        if (Jd != dd.inputState.notifiedFocused) {
          let kd = Sp(dd.state, Jd);
          kd ? dd.dispatch(kd) : dd.update([])
        }
      }), 10)
    }
    Gp.focus = dd => {
      dd.inputState.lastFocusTime = Date.now(), dd.scrollDOM.scrollTop || !dd.inputState.lastScrollTop && !dd.inputState.lastScrollLeft || (dd.scrollDOM.scrollTop = dd.inputState.lastScrollTop, dd.scrollDOM.scrollLeft = dd.inputState.lastScrollLeft), jp(dd)
    }, Gp.blur = dd => {
      dd.observer.clearSelectionRange(), jp(dd)
    }, Gp.compositionstart = Gp.compositionupdate = dd => {
      dd.observer.editContext || (null == dd.inputState.compositionFirstChange && (dd.inputState.compositionFirstChange = !0), dd.inputState.composing < 0 && (dd.inputState.composing = 0))
    }, Gp.compositionend = dd => {
      dd.observer.editContext || (dd.inputState.composing = -1, dd.inputState.compositionEndedAt = Date.now(), dd.inputState.compositionPendingKey = !0, dd.inputState.compositionPendingChange = dd.observer.pendingRecords().length > 0, dd.inputState.compositionFirstChange = null, Bd.chrome && Bd.android ? dd.observer.flushSoon() : dd.inputState.compositionPendingChange ? Promise.resolve().then((() => dd.observer.flush())) : setTimeout((() => {
        dd.inputState.composing < 0 && dd.docView.hasComposition && dd.update([])
      }), 50))
    }, Gp.contextmenu = dd => {
      dd.inputState.lastContextMenu = Date.now()
    }, Ip.beforeinput = (dd, Jd) => {
      var kd, pd;
      if ("insertText" != Jd.inputType && "insertCompositionText" != Jd.inputType || (dd.inputState.insertingText = Jd.data, dd.inputState.insertingTextAt = Date.now()), "insertReplacementText" == Jd.inputType && dd.observer.editContext) {
        let pd = null === (kd = Jd.dataTransfer) || void 0 === kd ? void 0 : kd.getData("text/plain"),
          Nd = Jd.getTargetRanges();
        if (pd && Nd.length) {
          let Jd = Nd[0],
            kd = dd.posAtDOM(Jd.startContainer, Jd.startOffset),
            Wd = dd.posAtDOM(Jd.endContainer, Jd.endOffset);
          return Zp(dd, {
            from: kd,
            to: Wd,
            insert: dd.state.toText(pd)
          }, null), !0
        }
      }
      let Nd;
      if (Bd.chrome && Bd.android && (Nd = Qp.find((dd => dd.inputType == Jd.inputType))) && (dd.observer.delayAndroidKey(Nd.key, Nd.keyCode), "Backspace" == Nd.key || "Delete" == Nd.key)) {
        let Jd = (null === (pd = window.visualViewport) || void 0 === pd ? void 0 : pd.height) || 0;
        setTimeout((() => {
          var kd;
          ((null === (kd = window.visualViewport) || void 0 === kd ? void 0 : kd.height) || 0) > Jd + 10 && dd.hasFocus && (dd.contentDOM.blur(), dd.focus())
        }), 100)
      }
      return Bd.ios && "deleteContentForward" == Jd.inputType && dd.observer.flushSoon(), Bd.safari && "insertText" == Jd.inputType && dd.inputState.composing >= 0 && setTimeout((() => Gp.compositionend(dd, Jd)), 20), !1
    };
    const Xp = new Set;
    const fp = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let np = !1;

    function Up() {
      np = !1
    }
    class yp {
      constructor(dd) {
        this.lineWrapping = dd, this.doc = pd.I.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(dd, Jd) {
        let kd = this.doc.lineAt(Jd).number - this.doc.lineAt(dd).number + 1;
        return this.lineWrapping && (kd += Math.max(0, Math.ceil((Jd - dd - kd * this.lineLength * .5) / this.lineLength))), this.lineHeight * kd
      }
      heightForLine(dd) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((dd - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(dd) {
        return this.doc = dd, this
      }
      mustRefreshForWrapping(dd) {
        return fp.indexOf(dd) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(dd) {
        let Jd = !1;
        for (let kd = 0; kd < dd.length; kd++) {
          let pd = dd[kd];
          pd < 0 ? kd++ : this.heightSamples[Math.floor(10 * pd)] || (Jd = !0, this.heightSamples[Math.floor(10 * pd)] = !0)
        }
        return Jd
      }
      refresh(dd, Jd, kd, pd, Nd, Wd) {
        let Pd = fp.indexOf(dd) > -1,
          Zd = Math.abs(Jd - this.lineHeight) > .3 || this.lineWrapping != Pd || Math.abs(kd - this.charWidth) > .1;
        if (this.lineWrapping = Pd, this.lineHeight = Jd, this.charWidth = kd, this.textHeight = pd, this.lineLength = Nd, Zd) {
          this.heightSamples = {};
          for (let dd = 0; dd < Wd.length; dd++) {
            let Jd = Wd[dd];
            Jd < 0 ? dd++ : this.heightSamples[Math.floor(10 * Jd)] = !0
          }
        }
        return Zd
      }
    }
    class Dp {
      constructor(dd, Jd) {
        this.from = dd, this.heights = Jd, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class Tp {
      constructor(dd, Jd, kd, pd, Nd) {
        this.from = dd, this.length = Jd, this.top = kd, this.height = pd, this._content = Nd
      }
      get type() {
        return "number" == typeof this._content ? bd.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof fd ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(dd) {
        let Jd = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(dd._content) ? dd._content : [dd]);
        return new Tp(this.from, this.length + dd.length, this.top, this.height + dd.height, Jd)
      }
    }
    var Ep = function(dd) {
      return dd[dd.ByPos = 0] = "ByPos", dd[dd.ByHeight = 1] = "ByHeight", dd[dd.ByPosNoHeight = 2] = "ByPosNoHeight", dd
    }(Ep || (Ep = {}));
    const cp = .001;
    class hp {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = dd, this.height = Jd, this.flags = kd
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(dd) {
        this.flags = (dd ? 2 : 0) | -3 & this.flags
      }
      setHeight(dd) {
        this.height != dd && (Math.abs(this.height - dd) > cp && (np = !0), this.height = dd)
      }
      replace(dd, Jd, kd) {
        return hp.of(kd)
      }
      decomposeLeft(dd, Jd) {
        Jd.push(this)
      }
      decomposeRight(dd, Jd) {
        Jd.push(this)
      }
      applyChanges(dd, Jd, kd, pd) {
        let Nd = this,
          Wd = kd.doc;
        for (let Pd = pd.length - 1; Pd >= 0; Pd--) {
          let {
            fromA: Zd,
            toA: gd,
            fromB: Cd,
            toB: Kd
          } = pd[Pd], od = Nd.lineAt(Zd, Ep.ByPosNoHeight, kd.setDoc(Jd), 0, 0), ld = od.to >= gd ? od : Nd.lineAt(gd, Ep.ByPosNoHeight, kd, 0, 0);
          for (Kd += ld.to - gd, gd = ld.to; Pd > 0 && od.from <= pd[Pd - 1].toA;) Zd = pd[Pd - 1].fromA, Cd = pd[Pd - 1].fromB, Pd--, Zd < od.from && (od = Nd.lineAt(Zd, Ep.ByPosNoHeight, kd, 0, 0));
          Cd += od.from - Zd, Zd = od.from;
          let Qd = dN.build(kd.setDoc(Wd), dd, Cd, Kd);
          Nd = rp(Nd, Nd.replace(Zd, gd, Qd))
        }
        return Nd.updateHeight(kd, 0)
      }
      static empty() {
        return new zp(0, 0, 0)
      }
      static of (dd) {
        if (1 == dd.length) return dd[0];
        let Jd = 0,
          kd = dd.length,
          pd = 0,
          Nd = 0;
        for (;;)
          if (Jd == kd)
            if (pd > 2 * Nd) {
              let Nd = dd[Jd - 1];
              Nd.break ? dd.splice(--Jd, 1, Nd.left, null, Nd.right) : dd.splice(--Jd, 1, Nd.left, Nd.right), kd += 1 + Nd.break, pd -= Nd.size
            } else {
              if (!(Nd > 2 * pd)) break;
              {
                let Jd = dd[kd];
                Jd.break ? dd.splice(kd, 1, Jd.left, null, Jd.right) : dd.splice(kd, 1, Jd.left, Jd.right), kd += 2 + Jd.break, Nd -= Jd.size
              }
            }
        else if (pd < Nd) {
          let kd = dd[Jd++];
          kd && (pd += kd.size)
        } else {
          let Jd = dd[--kd];
          Jd && (Nd += Jd.size)
        }
        let Wd = 0;
        return null == dd[Jd - 1] ? (Wd = 1, Jd--) : null == dd[Jd] && (Wd = 1, kd++), new wp(hp.of(dd.slice(0, Jd)), Wd, hp.of(dd.slice(kd)))
      }
    }

    function rp(dd, Jd) {
      return dd == Jd ? dd : (dd.constructor != Jd.constructor && (np = !0), Jd)
    }
    hp.prototype.size = 1;
    const tp = Sd.replace({});
    class Vp extends hp {
      constructor(dd, Jd, kd) {
        super(dd, Jd), this.deco = kd, this.spaceAbove = 0
      }
      mainBlock(dd, Jd) {
        return new Tp(Jd, this.length, dd + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(dd, Jd, kd, pd) {
        return this.spaceAbove && dd < kd + this.spaceAbove ? new Tp(pd, 0, kd, this.spaceAbove, tp) : this.mainBlock(kd, pd)
      }
      lineAt(dd, Jd, kd, pd, Nd) {
        let Wd = this.mainBlock(pd, Nd);
        return this.spaceAbove ? this.blockAt(0, kd, pd, Nd).join(Wd) : Wd
      }
      forEachLine(dd, Jd, kd, pd, Nd, Wd) {
        dd <= Nd + this.length && Jd >= Nd && Wd(this.lineAt(0, Ep.ByPos, kd, pd, Nd))
      }
      setMeasuredHeight(dd) {
        let Jd = dd.heights[dd.index++];
        Jd < 0 ? (this.spaceAbove = -Jd, Jd = dd.heights[dd.index++]) : this.spaceAbove = 0, this.setHeight(Jd)
      }
      updateHeight(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 3 ? arguments[3] : void 0;
        return kd && kd.from <= Jd && kd.more && this.setMeasuredHeight(kd), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class zp extends Vp {
      constructor(dd, Jd, kd) {
        super(dd, Jd, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = kd
      }
      mainBlock(dd, Jd) {
        return new Tp(Jd, this.length, dd + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(dd, Jd, kd) {
        let pd = kd[0];
        return 1 == kd.length && (pd instanceof zp || pd instanceof Hp && 4 & pd.flags) && Math.abs(this.length - pd.length) < 10 ? (pd instanceof Hp ? pd = new zp(pd.length, this.height, this.spaceAbove) : pd.height = this.height, this.outdated || (pd.outdated = !1), pd) : hp.of(kd)
      }
      updateHeight(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 ? arguments[3] : void 0;
        return pd && pd.from <= Jd && pd.more ? this.setMeasuredHeight(pd) : (kd || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, dd.heightForLine(this.length - this.collapsed)) + this.breaks * dd.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class Hp extends hp {
      constructor(dd) {
        super(dd, 0)
      }
      heightMetrics(dd, Jd) {
        let kd, pd = dd.doc.lineAt(Jd).number,
          Nd = dd.doc.lineAt(Jd + this.length).number,
          Wd = Nd - pd + 1,
          Pd = 0;
        if (dd.lineWrapping) {
          let Jd = Math.min(this.height, dd.lineHeight * Wd);
          kd = Jd / Wd, this.length > Wd + 1 && (Pd = (this.height - Jd) / (this.length - Wd - 1))
        } else kd = this.height / Wd;
        return {
          firstLine: pd,
          lastLine: Nd,
          perLine: kd,
          perChar: Pd
        }
      }
      blockAt(dd, Jd, kd, pd) {
        let {
          firstLine: Nd,
          lastLine: Wd,
          perLine: Pd,
          perChar: Zd
        } = this.heightMetrics(Jd, pd);
        if (Jd.lineWrapping) {
          let Nd = pd + (dd < Jd.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (dd - kd) / this.height)) * this.length)),
            Wd = Jd.doc.lineAt(Nd),
            gd = Pd + Wd.length * Zd,
            Cd = Math.max(kd, dd - gd / 2);
          return new Tp(Wd.from, Wd.length, Cd, gd, 0)
        } {
          let pd = Math.max(0, Math.min(Wd - Nd, Math.floor((dd - kd) / Pd))),
            {
              from: Zd,
              length: gd
            } = Jd.doc.line(Nd + pd);
          return new Tp(Zd, gd, kd + Pd * pd, Pd, 0)
        }
      }
      lineAt(dd, Jd, kd, pd, Nd) {
        if (Jd == Ep.ByHeight) return this.blockAt(dd, kd, pd, Nd);
        if (Jd == Ep.ByPosNoHeight) {
          let {
            from: Jd,
            to: pd
          } = kd.doc.lineAt(dd);
          return new Tp(Jd, pd - Jd, 0, 0, 0)
        }
        let {
          firstLine: Wd,
          perLine: Pd,
          perChar: Zd
        } = this.heightMetrics(kd, Nd), gd = kd.doc.lineAt(dd), Cd = Pd + gd.length * Zd, Kd = gd.number - Wd, od = pd + Pd * Kd + Zd * (gd.from - Nd - Kd);
        return new Tp(gd.from, gd.length, Math.max(pd, Math.min(od, pd + this.height - Cd)), Cd, 0)
      }
      forEachLine(dd, Jd, kd, pd, Nd, Wd) {
        dd = Math.max(dd, Nd), Jd = Math.min(Jd, Nd + this.length);
        let {
          firstLine: Pd,
          perLine: Zd,
          perChar: gd
        } = this.heightMetrics(kd, Nd);
        for (let Cd = dd, Kd = pd; Cd <= Jd;) {
          let Jd = kd.doc.lineAt(Cd);
          if (Cd == dd) {
            let kd = Jd.number - Pd;
            Kd += Zd * kd + gd * (dd - Nd - kd)
          }
          let pd = Zd + gd * Jd.length;
          Wd(new Tp(Jd.from, Jd.length, Kd, pd, 0)), Kd += pd, Cd = Jd.to + 1
        }
      }
      replace(dd, Jd, kd) {
        let pd = this.length - Jd;
        if (pd > 0) {
          let dd = kd[kd.length - 1];
          dd instanceof Hp ? kd[kd.length - 1] = new Hp(dd.length + pd) : kd.push(null, new Hp(pd - 1))
        }
        if (dd > 0) {
          let Jd = kd[0];
          Jd instanceof Hp ? kd[0] = new Hp(dd + Jd.length) : kd.unshift(new Hp(dd - 1), null)
        }
        return hp.of(kd)
      }
      decomposeLeft(dd, Jd) {
        Jd.push(new Hp(dd - 1), null)
      }
      decomposeRight(dd, Jd) {
        Jd.push(null, new Hp(this.length - dd - 1))
      }
      updateHeight(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 ? arguments[3] : void 0,
          Nd = Jd + this.length;
        if (pd && pd.from <= Jd + this.length && pd.more) {
          let kd = [],
            Wd = Math.max(Jd, pd.from),
            Pd = -1;
          for (pd.from > Jd && kd.push(new Hp(pd.from - Jd - 1).updateHeight(dd, Jd)); Wd <= Nd && pd.more;) {
            let Jd = dd.doc.lineAt(Wd).length;
            kd.length && kd.push(null);
            let Nd = pd.heights[pd.index++],
              Zd = 0;
            Nd < 0 && (Zd = -Nd, Nd = pd.heights[pd.index++]), -1 == Pd ? Pd = Nd : Math.abs(Nd - Pd) >= cp && (Pd = -2);
            let gd = new zp(Jd, Nd, Zd);
            gd.outdated = !1, kd.push(gd), Wd += Jd + 1
          }
          Wd <= Nd && kd.push(null, new Hp(Nd - Wd).updateHeight(dd, Wd));
          let Zd = hp.of(kd);
          return (Pd < 0 || Math.abs(Zd.height - this.height) >= cp || Math.abs(Pd - this.heightMetrics(dd, Jd).perLine) >= cp) && (np = !0), rp(this, Zd)
        }
        return (kd || this.outdated) && (this.setHeight(dd.heightForGap(Jd, Jd + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class wp extends hp {
      constructor(dd, Jd, kd) {
        super(dd.length + Jd + kd.length, dd.height + kd.height, Jd | (dd.outdated || kd.outdated ? 2 : 0)), this.left = dd, this.right = kd, this.size = dd.size + kd.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(dd, Jd, kd, pd) {
        let Nd = kd + this.left.height;
        return dd < Nd ? this.left.blockAt(dd, Jd, kd, pd) : this.right.blockAt(dd, Jd, Nd, pd + this.left.length + this.break)
      }
      lineAt(dd, Jd, kd, pd, Nd) {
        let Wd = pd + this.left.height,
          Pd = Nd + this.left.length + this.break,
          Zd = Jd == Ep.ByHeight ? dd < Wd : dd < Pd,
          gd = Zd ? this.left.lineAt(dd, Jd, kd, pd, Nd) : this.right.lineAt(dd, Jd, kd, Wd, Pd);
        if (this.break || (Zd ? gd.to < Pd : gd.from > Pd)) return gd;
        let Cd = Jd == Ep.ByPosNoHeight ? Ep.ByPosNoHeight : Ep.ByPos;
        return Zd ? gd.join(this.right.lineAt(Pd, Cd, kd, Wd, Pd)) : this.left.lineAt(Pd, Cd, kd, pd, Nd).join(gd)
      }
      forEachLine(dd, Jd, kd, pd, Nd, Wd) {
        let Pd = pd + this.left.height,
          Zd = Nd + this.left.length + this.break;
        if (this.break) dd < Zd && this.left.forEachLine(dd, Jd, kd, pd, Nd, Wd), Jd >= Zd && this.right.forEachLine(dd, Jd, kd, Pd, Zd, Wd);
        else {
          let gd = this.lineAt(Zd, Ep.ByPos, kd, pd, Nd);
          dd < gd.from && this.left.forEachLine(dd, gd.from - 1, kd, pd, Nd, Wd), gd.to >= dd && gd.from <= Jd && Wd(gd), Jd > gd.to && this.right.forEachLine(gd.to + 1, Jd, kd, Pd, Zd, Wd)
        }
      }
      replace(dd, Jd, kd) {
        let pd = this.left.length + this.break;
        if (Jd < pd) return this.balanced(this.left.replace(dd, Jd, kd), this.right);
        if (dd > this.left.length) return this.balanced(this.left, this.right.replace(dd - pd, Jd - pd, kd));
        let Nd = [];
        dd > 0 && this.decomposeLeft(dd, Nd);
        let Wd = Nd.length;
        for (let Pd of kd) Nd.push(Pd);
        if (dd > 0 && Ap(Nd, Wd - 1), Jd < this.length) {
          let dd = Nd.length;
          this.decomposeRight(Jd, Nd), Ap(Nd, dd)
        }
        return hp.of(Nd)
      }
      decomposeLeft(dd, Jd) {
        let kd = this.left.length;
        if (dd <= kd) return this.left.decomposeLeft(dd, Jd);
        Jd.push(this.left), this.break && (kd++, dd >= kd && Jd.push(null)), dd > kd && this.right.decomposeLeft(dd - kd, Jd)
      }
      decomposeRight(dd, Jd) {
        let kd = this.left.length,
          pd = kd + this.break;
        if (dd >= pd) return this.right.decomposeRight(dd - pd, Jd);
        dd < kd && this.left.decomposeRight(dd, Jd), this.break && dd < pd && Jd.push(null), Jd.push(this.right)
      }
      balanced(dd, Jd) {
        return dd.size > 2 * Jd.size || Jd.size > 2 * dd.size ? hp.of(this.break ? [dd, null, Jd] : [dd, Jd]) : (this.left = rp(this.left, dd), this.right = rp(this.right, Jd), this.setHeight(dd.height + Jd.height), this.outdated = dd.outdated || Jd.outdated, this.size = dd.size + Jd.size, this.length = dd.length + this.break+Jd.length, this)
      }
      updateHeight(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Nd,
            right: Wd
          } = this,
          Pd = Jd + Nd.length + this.break,
          Zd = null;
        return pd && pd.from <= Jd + Nd.length && pd.more ? Zd = Nd = Nd.updateHeight(dd, Jd, kd, pd) : Nd.updateHeight(dd, Jd, kd), pd && pd.from <= Pd + Wd.length && pd.more ? Zd = Wd = Wd.updateHeight(dd, Pd, kd, pd) : Wd.updateHeight(dd, Pd, kd), Zd ? this.balanced(Nd, Wd) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function Ap(dd, Jd) {
      let kd, pd;
      null == dd[Jd] && (kd = dd[Jd - 1]) instanceof Hp && (pd = dd[Jd + 1]) instanceof Hp && dd.splice(Jd - 1, 3, new Hp(kd.length + 1 + pd.length))
    }
    class dN {
      constructor(dd, Jd) {
        this.pos = dd, this.oracle = Jd, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = dd
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(dd, Jd) {
        if (this.lineStart > -1) {
          let dd = Math.min(Jd, this.lineEnd),
            kd = this.nodes[this.nodes.length - 1];
          kd instanceof zp ? kd.length += dd - this.pos : (dd > this.pos || !this.isCovered) && this.nodes.push(new zp(dd - this.pos, -1, 0)), this.writtenTo = dd, Jd > dd && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = Jd
      }
      point(dd, Jd, kd) {
        if (dd < Jd || kd.heightRelevant) {
          let pd = kd.widget ? kd.widget.estimatedHeight : 0,
            Nd = kd.widget ? kd.widget.lineBreaks : 0;
          pd < 0 && (pd = this.oracle.lineHeight);
          let Wd = Jd - dd;
          kd.block ? this.aJd(new Vp(Wd, pd, kd)) : (Wd || Nd || pd >= 5) && this.addLineDeco(pd, Nd, Wd)
        } else Jd > dd && this.span(dd, Jd);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: dd,
          to: Jd
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = dd, this.lineEnd = Jd, this.writtenTo < dd && ((this.writtenTo < dd - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, dd - 1)), this.nodes.push(null)), this.pos > dd && this.nodes.push(new zp(this.pos - dd, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(dd, Jd) {
        let kd = new Hp(Jd - dd);
        return this.oracle.doc.lineAt(dd).to == Jd && (kd.flags |= 4), kd
      }
      ensureLine() {
        this.enterLine();
        let dd = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (dd instanceof zp) return dd;
        let Jd = new zp(0, -1, 0);
        return this.nodes.push(Jd), Jd
      }
      aJd(dd) {
        this.enterLine();
        let Jd = dd.deco;
        Jd && Jd.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(dd), this.writtenTo = this.pos = this.pos + dd.length, Jd && Jd.endSide > 0 && (this.covering = dd)
      }
      addLineDeco(dd, Jd, kd) {
        let pd = this.ensureLine();
        pd.length += kd, pd.collapsed += kd, pd.widgetHeight = Math.max(pd.widgetHeight, dd), pd.breaks += Jd, this.writtenTo = this.pos = this.pos + kd
      }
      finish(dd) {
        let Jd = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || Jd instanceof zp || this.isCovered ? (this.writtenTo < this.pos || null == Jd) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new zp(0, -1, 0));
        let kd = dd;
        for (let pd of this.nodes) pd instanceof zp && pd.updateHeight(this.oracle, kd), kd += pd ? pd.length : 1;
        return this.nodes
      }
      static build(dd, Jd, kd, Nd) {
        let Wd = new dN(kd, dd);
        return pd.x.spans(Jd, kd, Nd, Wd, 0), Wd.finish(kd)
      }
    }
    class JN {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(dd, Jd, kd, pd) {
        (dd < Jd || kd && kd.heightRelevant || pd && pd.heightRelevant) && Ud(dd, Jd, this.changes, 5)
      }
    }

    function kN(dd, Jd) {
      let kd = dd.getBoundingClientRect(),
        pd = dd.ownerDocument,
        Nd = pd.defaultView || window,
        Wd = Math.max(0, kd.left),
        Pd = Math.min(Nd.innerWidth, kd.right),
        Zd = Math.max(0, kd.top),
        gd = Math.min(Nd.innerHeight, kd.bottom);
      for (let Cd = dd.parentNode; Cd && Cd != pd.body;)
        if (1 == Cd.nodeType) {
          let Jd = Cd,
            kd = window.getComputedStyle(Jd);
          if ((Jd.scrollHeight > Jd.clientHeight || Jd.scrollWidth > Jd.clientWidth) && "visible" != kd.overflow) {
            let kd = Jd.getBoundingClientRect();
            Wd = Math.max(Wd, kd.left), Pd = Math.min(Pd, kd.right), Zd = Math.max(Zd, kd.top), gd = Math.min(Cd == dd.parentNode ? Nd.innerHeight : gd, kd.bottom)
          }
          Cd = "absolute" == kd.position || "fixed" == kd.position ? Jd.offsetParent : Jd.parentNode
        } else {
          if (11 != Cd.nodeType) break;
          Cd = Cd.host
        } return {
        left: Wd - kd.left,
        right: Math.max(Wd, Pd) - kd.left,
        top: Zd - (kd.top + Jd),
        bottom: Math.max(Zd, gd) - (kd.top + Jd)
      }
    }

    function pN(dd, Jd) {
      let kd = dd.getBoundingClientRect();
      return {
        left: 0,
        right: kd.right - kd.left,
        top: Jd,
        bottom: kd.bottom - (kd.top + Jd)
      }
    }
    class NN {
      constructor(dd, Jd, kd, pd) {
        this.from = dd, this.to = Jd, this.size = kd, this.displaySize = pd
      }
      static same(dd, Jd) {
        if (dd.length != Jd.length) return !1;
        for (let kd = 0; kd < dd.length; kd++) {
          let pd = dd[kd],
            Nd = Jd[kd];
          if (pd.from != Nd.from || pd.to != Nd.to || pd.size != Nd.size) return !1
        }
        return !0
      }
      draw(dd, Jd) {
        return Sd.replace({
          widget: new WN(this.displaySize * (Jd ? dd.scaleY : dd.scaleX), Jd)
        }).range(this.from, this.to)
      }
    }
    class WN extends md {
      constructor(dd, Jd) {
        super(), this.size = dd, this.vertical = Jd
      }
      eq(dd) {
        return dd.size == this.size && dd.vertical == this.vertical
      }
      toDOM() {
        let dd = document.createElement("div");
        return this.vertical ? dd.style.height = this.size + "px" : (dd.style.width = this.size + "px", dd.style.height = "2px", dd.style.display = "inline-block"), dd
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class PN {
      constructor(dd, Jd) {
        this.view = dd, this.state = Jd, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = KN, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = KJ.LTR, this.R6 = [], this.mustEnforceCursorAssoc = !1;
        let kd = Jd.facet(dk).some((dd => "function" != typeof dd && "cm-lineWrapping" == dd.class));
        this.heightOracle = new yp(kd), this.stateDeco = oN(Jd), this.heightMap = hp.empty().applyChanges(this.stateDeco, pd.I.empty, this.heightOracle.setDoc(Jd.doc), [new Kk(0, 0, 0, Jd.doc.length)]);
        for (let pd = 0; pd < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); pd++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Sd.set(this.lineGaps.map((dd => dd.draw(this, !1)))), this.scrollParent = dd.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let dd = [this.viewport],
          {
            main: Jd
          } = this.state.selection;
        for (let kd = 0; kd <= 1; kd++) {
          let pd = kd ? Jd.head : Jd.anchor;
          if (!dd.some((dd => {
              let {
                from: Jd,
                to: kd
              } = dd;
              return pd >= Jd && pd <= kd
            }))) {
            let {
              from: Jd,
              to: kd
            } = this.lineBlockAt(pd);
            dd.push(new ZN(Jd, kd))
          }
        }
        return this.viewports = dd.sort(((dd, Jd) => dd.from - Jd.from)), this.updateScaler()
      }
      updateScaler() {
        let dd = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? KN : new lN(this.heightOracle, this.heightMap, this.viewports), dd.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (dd => {
          this.viewportLines.push(QN(dd, this.scaler))
        }))
      }
      update(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = dd.state;
        let kd = this.stateDeco;
        this.stateDeco = oN(this.state);
        let Nd = dd.changedRanges,
          Wd = Kk.extendWithRanges(Nd, function(dd, Jd, kd) {
            let Nd = new JN;
            return pd.x.compare(dd, Jd, kd, Nd, 0), Nd.changes
          }(kd, this.stateDeco, dd ? dd.changes : pd.ChangeSet.empty(this.state.doc.length))),
          Pd = this.heightMap.height,
          Zd = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        Up(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, dd.startState.doc, this.heightOracle.setDoc(this.state.doc), Wd), (this.heightMap.height != Pd || np) && (dd.flags |= 2), Zd ? (this.scrollAnchorPos = dd.changes.mapPos(Zd.from, -1), this.scrollAnchorHeight = Zd.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = Pd);
        let gd = Wd.length ? this.mapViewport(this.viewport, dd.changes) : this.viewport;
        (Jd && (Jd.range.head < gd.from || Jd.range.head > gd.to) || !this.viewportIsAppropriate(gd)) && (gd = this.getViewport(0, Jd));
        let Cd = gd.from != this.viewport.from || gd.to != this.viewport.to;
        this.viewport = gd, dd.flags |= this.updateForViewport(), (Cd || !dd.changes.empty || 2 & dd.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, dd.changes))), dd.flags |= this.computeVisibleRanges(dd.changes), Jd && (this.scrollTarget = Jd), !this.mustEnforceCursorAssoc && (dd.selectionSet || dd.focusChanged) && dd.view.lineWrapping && dd.state.selection.main.empty && dd.state.selection.main.assoc && !dd.state.facet(TJ) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: dd
        } = this, Jd = dd.contentDOM, kd = window.getComputedStyle(Jd), Nd = this.heightOracle, Wd = kd.whiteSpace;
        this.defaultTextDirection = "rtl" == kd.direction ? KJ.RTL : KJ.LTR;
        let Pd = this.heightOracle.mustRefreshForWrapping(Wd) || "refresh" === this.mustMeasureContent,
          Zd = Jd.getBoundingClientRect(),
          gd = Pd || this.mustMeasureContent || this.contentDOMHeight != Zd.height;
        this.contentDOMHeight = Zd.height, this.mustMeasureContent = !1;
        let Cd = 0,
          Kd = 0;
        if (Zd.width && Zd.height) {
          let {
            scaleX: dd,
            scaleY: kd
          } = wd(Jd, Zd);
          (dd > .005 && Math.abs(this.scaleX - dd) > .005 || kd > .005 && Math.abs(this.scaleY - kd) > .005) && (this.scaleX = dd, this.scaleY = kd, Cd |= 16, Pd = gd = !0)
        }
        let od = (parseInt(kd.paddingTop) || 0) * this.scaleY,
          ld = (parseInt(kd.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == od && this.paddingBottom == ld || (this.paddingTop = od, this.paddingBottom = ld, Cd |= 18), this.editorWidth != dd.scrollDOM.clientWidth && (Nd.lineWrapping && (gd = !0), this.editorWidth = dd.scrollDOM.clientWidth, Cd |= 16);
        let Qd = Ad(this.view.contentDOM, !1).y;
        Qd != this.scrollParent && (this.scrollParent = Qd, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let Ld = this.getScrollOffset();
        this.scrollOffset != Ld && (this.scrollAnchorHeight = -1, this.scrollOffset = Ld), this.scrolledToBottom = PJ(this.scrollParent || dd.win);
        let Od = (this.printing ? pN : kN)(Jd, this.paddingTop),
          ed = Od.top - this.pixelViewport.top,
          Rd = Od.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Od;
        let Id = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (Id != this.inView && (this.inView = Id, Id && (gd = !0)), !this.inView && !this.scrollTarget && ! function(dd) {
            let Jd = dd.getBoundingClientRect(),
              kd = dd.ownerDocument.defaultView || window;
            return Jd.left < kd.innerWidth && Jd.right > 0 && Jd.top < kd.innerHeight && Jd.bottom > 0
          }(dd.dom)) return 0;
        let Gd = Zd.width;
        if (this.contentDOMWidth == Gd && this.editorHeight == dd.scrollDOM.clientHeight || (this.contentDOMWidth = Zd.width, this.editorHeight = dd.scrollDOM.clientHeight, Cd |= 16), gd) {
          let Jd = dd.docView.measureVisibleLineHeights(this.viewport);
          if (Nd.mustRefreshForHeights(Jd) && (Pd = !0), Pd || Nd.lineWrapping && Math.abs(Gd - this.contentDOMWidth) > Nd.charWidth) {
            let {
              lineHeight: kd,
              charWidth: pd,
              textHeight: Zd
            } = dd.docView.measureTextSize();
            Pd = kd > 0 && Nd.refresh(Wd, kd, pd, Zd, Math.max(5, Gd / pd), Jd), Pd && (dd.docView.minWidth = 0, Cd |= 16)
          }
          ed > 0 && Rd > 0 ? Kd = Math.max(ed, Rd) : ed < 0 && Rd < 0 && (Kd = Math.min(ed, Rd)), Up();
          for (let kd of this.viewports) {
            let Wd = kd.from == this.viewport.from ? Jd : dd.docView.measureVisibleLineHeights(kd);
            this.heightMap = (Pd ? hp.empty().applyChanges(this.stateDeco, pd.I.empty, this.heightOracle, [new Kk(0, 0, 0, dd.state.doc.length)]) : this.heightMap).updateHeight(Nd, 0, Pd, new Dp(kd.from, Wd))
          }
          np && (Cd |= 2)
        }
        let vd = !this.viewportIsAppropriate(this.viewport, Kd) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return vd && (2 & Cd && (Cd |= this.updateScaler()), this.viewport = this.getViewport(Kd, this.scrollTarget), Cd |= this.updateForViewport()), (2 & Cd || vd) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(Pd ? [] : this.lineGaps, dd)), Cd |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, dd.docView.enforceCursorAssoc()), Cd
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(dd, Jd) {
        let kd = .5 - Math.max(-.5, Math.min(.5, dd / 1e3 / 2)),
          pd = this.heightMap,
          Nd = this.heightOracle,
          {
            visibleTop: Wd,
            visibleBottom: Pd
          } = this,
          Zd = new ZN(pd.lineAt(Wd - 1e3 * kd, Ep.ByHeight, Nd, 0, 0).from, pd.lineAt(Pd + 1e3 * (1 - kd), Ep.ByHeight, Nd, 0, 0).to);
        if (Jd) {
          let {
            head: dd
          } = Jd.range;
          if (dd < Zd.from || dd > Zd.to) {
            let kd, Wd = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              Pd = pd.lineAt(dd, Ep.ByPos, Nd, 0, 0);
            kd = "center" == Jd.y ? (Pd.top + Pd.bottom) / 2 - Wd / 2 : "start" == Jd.y || "nearest" == Jd.y && dd < Zd.from ? Pd.top : Pd.bottom - Wd, Zd = new ZN(pd.lineAt(kd - 500, Ep.ByHeight, Nd, 0, 0).from, pd.lineAt(kd + Wd + 500, Ep.ByHeight, Nd, 0, 0).to)
          }
        }
        return Zd
      }
      mapViewport(dd, Jd) {
        let kd = Jd.mapPos(dd.from, -1),
          pd = Jd.mapPos(dd.to, 1);
        return new ZN(this.heightMap.lineAt(kd, Ep.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(pd, Ep.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(dd) {
        let {
          from: Jd,
          to: kd
        } = dd, pd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Nd
        } = this.heightMap.lineAt(Jd, Ep.ByPos, this.heightOracle, 0, 0), {
          bottom: Wd
        } = this.heightMap.lineAt(kd, Ep.ByPos, this.heightOracle, 0, 0), {
          visibleTop: Pd,
          visibleBottom: Zd
        } = this;
        return (0 == Jd || Nd <= Pd - Math.max(10, Math.min(-pd, 250))) && (kd == this.state.doc.length || Wd >= Zd + Math.max(10, Math.min(pd, 250))) && Nd > Pd - 2e3 && Wd < Zd + 2e3
      }
      mapLineGaps(dd, Jd) {
        if (!dd.length || Jd.empty) return dd;
        let kd = [];
        for (let pd of dd) Jd.touchesRange(pd.from, pd.to) || kd.push(new NN(Jd.mapPos(pd.from), Jd.mapPos(pd.to), pd.size, pd.displaySize));
        return kd
      }
      ensureLineGaps(dd, Jd) {
        let kd = this.heightOracle.lineWrapping,
          Nd = kd ? 1e4 : 2e3,
          Wd = Nd >> 1,
          Pd = Nd << 1;
        if (this.defaultTextDirection != KJ.LTR && !kd) return [];
        let Zd = [],
          gd = (Nd, Pd, Cd, Kd) => {
            if (Pd - Nd < Wd) return;
            let od = this.state.selection.main,
              ld = [od.from];
            od.empty || ld.push(od.to);
            for (let dd of ld)
              if (dd > Nd && dd < Pd) return gd(Nd, dd - 10, Cd, Kd), void gd(dd + 10, Pd, Cd, Kd);
            let Qd = function(dd, Jd) {
              for (let kd of dd)
                if (Jd(kd)) return kd;
              return
            }(dd, (dd => dd.from >= Cd.from && dd.to <= Cd.to && Math.abs(dd.from - Nd) < Wd && Math.abs(dd.to - Pd) < Wd && !ld.some((Jd => dd.from < Jd && dd.to > Jd))));
            if (!Qd) {
              if (Pd < Cd.to && Jd && kd && Jd.R6.some((dd => dd.from <= Pd && dd.to >= Pd))) {
                let dd = Jd.moveToLineBoundary(pd.k.cursor(Pd), !1, !0).head;
                dd > Nd && (Pd = dd)
              }
              let dd = this.gapSize(Cd, Nd, Pd, Kd);
              Qd = new NN(Nd, Pd, dd, kd || dd < 2e6 ? dd : 2e6)
            }
            Zd.push(Qd)
          },
          Cd = Jd => {
            if (Jd.length < Pd || Jd.type != bd.Text) return;
            let Wd = function(dd, Jd, kd) {
              let Nd = [],
                Wd = dd,
                Pd = 0;
              pd.x.spans(kd, dd, Jd, {
                span() {},
                point(dd, Jd) {
                  dd > Wd && (Nd.push({
                    from: Wd,
                    to: dd
                  }), Pd += dd - Wd), Wd = Jd
                }
              }, 20), Wd < Jd && (Nd.push({
                from: Wd,
                to: Jd
              }), Pd += Jd - Wd);
              return {
                total: Pd,
                UO: Nd
              }
            }(Jd.from, Jd.to, this.stateDeco);
            if (Wd.total < Pd) return;
            let Zd, Cd, Kd = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (kd) {
              let dd, kd, pd = Nd / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != Kd) {
                let Nd = CN(Wd, Kd),
                  Pd = ((this.visibleBottom - this.visibleTop) / 2 + pd) / Jd.height;
                dd = Nd - Pd, kd = Nd + Pd
              } else dd = (this.visibleTop - Jd.top - pd) / Jd.height, kd = (this.visibleBottom - Jd.top + pd) / Jd.height;
              Zd = gN(Wd, dd), Cd = gN(Wd, kd)
            } else {
              let kd = Wd.total * this.heightOracle.charWidth,
                pd = Nd * this.heightOracle.charWidth,
                Pd = 0;
              if (kd > 2e6)
                for (let Nd of dd) Nd.from >= Jd.from && Nd.from < Jd.to && Nd.size != Nd.displaySize && Nd.from * this.heightOracle.charWidth + Pd < this.pixelViewport.left && (Pd = Nd.size - Nd.displaySize);
              let gd, od, ld = this.pixelViewport.left + Pd,
                Qd = this.pixelViewport.right + Pd;
              if (null != Kd) {
                let dd = CN(Wd, Kd),
                  Jd = ((Qd - ld) / 2 + pd) / kd;
                gd = dd - Jd, od = dd + Jd
              } else gd = (ld - pd) / kd, od = (Qd + pd) / kd;
              Zd = gN(Wd, gd), Cd = gN(Wd, od)
            }
            Zd > Jd.from && gd(Jd.from, Zd, Jd, Wd), Cd < Jd.to && gd(Cd, Jd.to, Jd, Wd)
          };
        for (let pd of this.viewportLines) Array.isArray(pd.type) ? pd.type.forEach(Cd) : Cd(pd);
        return Zd
      }
      gapSize(dd, Jd, kd, pd) {
        let Nd = CN(pd, kd) - CN(pd, Jd);
        return this.heightOracle.lineWrapping ? dd.height * Nd : pd.total * this.heightOracle.charWidth * Nd
      }
      updateLineGaps(dd) {
        NN.same(dd, this.lineGaps) || (this.lineGaps = dd, this.lineGapDeco = Sd.set(dd.map((dd => dd.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(dd) {
        let Jd = this.stateDeco;
        this.lineGaps.length && (Jd = Jd.concat(this.lineGapDeco));
        let kd = [];
        pd.x.spans(Jd, this.viewport.from, this.viewport.to, {
          span(dd, Jd) {
            kd.push({
              from: dd,
              to: Jd
            })
          },
          point() {}
        }, 20);
        let Nd = 0;
        if (kd.length != this.R6.length) Nd = 12;
        else
          for (let pd = 0; pd < kd.length && !(8 & Nd); pd++) {
            let Jd = this.R6[pd],
              Wd = kd[pd];
            Jd.from == Wd.from && Jd.to == Wd.to || (Nd |= 4, dd && dd.mapPos(Jd.from, -1) == Wd.from && dd.mapPos(Jd.to, 1) == Wd.to || (Nd |= 8))
          }
        return this.R6 = kd, Nd
      }
      lineBlockAt(dd) {
        return dd >= this.viewport.from && dd <= this.viewport.to && this.viewportLines.find((Jd => Jd.from <= dd && Jd.to >= dd)) || QN(this.heightMap.lineAt(dd, Ep.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(dd) {
        return dd >= this.viewportLines[0].top && dd <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((Jd => Jd.top <= dd && Jd.bottom >= dd)) || QN(this.heightMap.lineAt(this.scaler.fromDOM(dd), Ep.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(dd) {
        let Jd = this.lineBlockAtHeight(dd + 8);
        return Jd.from >= this.viewport.from || this.viewportLines[0].top - dd > 200 ? Jd : this.viewportLines[0]
      }
      elementAtHeight(dd) {
        return QN(this.heightMap.blockAt(this.scaler.fromDOM(dd), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class ZN {
      constructor(dd, Jd) {
        this.from = dd, this.to = Jd
      }
    }

    function gN(dd, Jd) {
      let {
        total: kd,
        UO: pd
      } = dd;
      if (Jd <= 0) return pd[0].from;
      if (Jd >= 1) return pd[pd.length - 1].to;
      let Nd = Math.floor(kd * Jd);
      for (let Wd = 0;; Wd++) {
        let {
          from: dd,
          to: Jd
        } = pd[Wd], kd = Jd - dd;
        if (Nd <= kd) return dd + Nd;
        Nd -= kd
      }
    }

    function CN(dd, Jd) {
      let kd = 0;
      for (let {
          from: pd,
          to: Nd
        }
        of dd.UO) {
        if (Jd <= Nd) {
          kd += Jd - pd;
          break
        }
        kd += Nd - pd
      }
      return kd / dd.total
    }
    const KN = {
      toDOM: dd => dd,
      fromDOM: dd => dd,
      scale: 1,
      eq(dd) {
        return dd == this
      }
    };

    function oN(dd) {
      let Jd = dd.facet(Jk).filter((dd => "function" != typeof dd)),
        kd = dd.facet(pk).filter((dd => "function" != typeof dd));
      return kd.length && Jd.push(pd.x.join(kd)), Jd
    }
    class lN {
      constructor(dd, Jd, kd) {
        let pd = 0,
          Nd = 0,
          Wd = 0;
        this.viewports = kd.map((kd => {
          let {
            from: Nd,
            to: Wd
          } = kd, Pd = Jd.lineAt(Nd, Ep.ByPos, dd, 0, 0).top, Zd = Jd.lineAt(Wd, Ep.ByPos, dd, 0, 0).bottom;
          return pd += Zd - Pd, {
            from: Nd,
            to: Wd,
            top: Pd,
            bottom: Zd,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - pd) / (Jd.height - pd);
        for (let Pd of this.viewports) Pd.domTop = Wd + (Pd.top - Nd) * this.scale, Wd = Pd.domBottom = Pd.domTop + (Pd.bottom - Pd.top), Nd = Pd.bottom
      }
      toDOM(dd) {
        for (let Jd = 0, kd = 0, pd = 0;; Jd++) {
          let Nd = Jd < this.viewports.length ? this.viewports[Jd] : null;
          if (!Nd || dd < Nd.top) return pd + (dd - kd) * this.scale;
          if (dd <= Nd.bottom) return Nd.domTop + (dd - Nd.top);
          kd = Nd.bottom, pd = Nd.domBottom
        }
      }
      fromDOM(dd) {
        for (let Jd = 0, kd = 0, pd = 0;; Jd++) {
          let Nd = Jd < this.viewports.length ? this.viewports[Jd] : null;
          if (!Nd || dd < Nd.domTop) return kd + (dd - pd) / this.scale;
          if (dd <= Nd.domBottom) return Nd.top + (dd - Nd.domTop);
          kd = Nd.bottom, pd = Nd.domBottom
        }
      }
      eq(dd) {
        return dd instanceof lN && (this.scale == dd.scale && this.viewports.length == dd.viewports.length && this.viewports.every(((Jd, kd) => Jd.from == dd.viewports[kd].from && Jd.to == dd.viewports[kd].to)))
      }
    }

    function QN(dd, Jd) {
      if (1 == Jd.scale) return dd;
      let kd = Jd.toDOM(dd.top),
        pd = Jd.toDOM(dd.bottom);
      return new Tp(dd.from, dd.length, kd, pd - kd, Array.isArray(dd._content) ? dd._content.map((dd => QN(dd, Jd))) : dd._content)
    }
    const LN = pd.o.define({
        combine: dd => dd.join(" ")
      }),
      ON = pd.o.define({
        combine: dd => dd.indexOf(!0) > -1
      }),
      eN = Nd.e.newName(),
      RN = Nd.e.newName(),
      IN = Nd.e.newName(),
      GN = {
        "&light": "." + RN,
        "&dark": "." + IN
      };

    function vN(dd, Jd, kd) {
      return new Nd.e(Jd, {
        finish: Jd => /&/.test(Jd) ? Jd.replace(/&\w*/, (Jd => {
          if ("&" == Jd) return dd;
          if (!kd || !kd[Jd]) throw new RangeError(`Unsupported selector: ${Jd}`);
          return kd[Jd]
        })) : dd + " " + Jd
      })
    }
    const xN = vN("." + eN, {
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
      }, GN),
      qN = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      BN = Bd.ie && Bd.ie_version <= 11;
    class sN {
      constructor(dd) {
        this.view = dd, this.active = !1, this.editContext = null, this.selectionRange = new dJ, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = dd.contentDOM, this.observer = new MutationObserver((Jd => {
          for (let dd of Jd) this.queue.push(dd);
          (Bd.ie && Bd.ie_version <= 11 || Bd.ios && dd.composing) && Jd.some((dd => "childList" == dd.type && dd.removedNodes.length || "characterData" == dd.type && dd.oldValue.length > dd.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !Bd.android || !1 === dd.constructor.EDIT_CONTEXT || Bd.chrome && Bd.chrome_version < 126 || (this.editContext = new MN(dd), dd.state.facet(tJ) && (dd.contentDOM.editContext = this.editContext.editContext)), BN && (this.onCharData = dd => {
          this.queue.push({
            target: dd.target,
            type: "characterData",
            oldValue: dd.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.xI = this.xI.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var dd;
          (null === (dd = this.view.docView) || void 0 === dd ? void 0 : dd.lastUpdate) < Date.now() - 75 && this.xI()
        })), this.resizeScroll.observe(dd.scrollDOM)), this.addWindowListeners(this.win = dd.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((dd => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), dd.length > 0 && dd[dd.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((dd => {
          dd.length > 0 && dd[dd.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(dd) {
        this.view.inputState.runHandlers("scroll", dd), this.intersecting && this.view.measure()
      }
      onScroll(dd) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(dd)
      }
      xI() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(dd) {
        ("change" != dd.type && dd.type || dd.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(dd) {
        if (this.gapIntersection && (dd.length != this.gaps.length || this.gaps.some(((Jd, kd) => Jd != dd[kd])))) {
          this.gapIntersection.disconnect();
          for (let Jd of dd) this.gapIntersection.observe(Jd);
          this.gaps = dd
        }
      }
      onSelectionChange(dd) {
        let Jd = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: kd
        } = this, pd = this.selectionRange;
        if (kd.state.facet(tJ) ? kd.root.activeElement != this.dom : !Ed(this.dom, pd)) return;
        let Nd = pd.anchorNode && kd.docView.tile.nearest(pd.anchorNode);
        Nd && Nd.isWidget() && Nd.widget.ignoreEvent(dd) ? Jd || (this.selectionChanged = !1) : (Bd.ie && Bd.ie_version <= 11 || Bd.android && Bd.chrome) && !kd.state.selection.main.empty && pd.focusNode && hd(pd.focusNode, pd.focusOffset, pd.anchorNode, pd.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: dd
        } = this, Jd = Dd(dd.root);
        if (!Jd) return !1;
        let kd = Bd.safari && 11 == dd.root.nodeType && dd.root.activeElement == this.dom && function(dd, Jd) {
          if (Jd.getComposedRanges) {
            let kd = Jd.getComposedRanges(dd.root)[0];
            if (kd) return aN(dd, kd)
          }
          let kd = null;

          function pd(dd) {
            dd.preventDefault(), dd.stopImmediatePropagation(), kd = dd.getTargetRanges()[0]
          }
          return dd.contentDOM.addEventListener("beforeinput", pd, !0), dd.dom.ownerDocument.execCommand("indent"), dd.contentDOM.removeEventListener("beforeinput", pd, !0), kd ? aN(dd, kd) : null
        }(this.view, Jd) || Jd;
        if (!kd || this.selectionRange.eq(kd)) return !1;
        let pd = Ed(this.dom, kd);
        return pd && !this.selectionChanged && dd.inputState.lastFocusTime > Date.now() - 200 && dd.inputState.lastTouchTime < Date.now() - 300 && function(dd, Jd) {
          let kd = Jd.focusNode,
            pd = Jd.focusOffset;
          if (!kd || Jd.anchorNode != kd || Jd.anchorOffset != pd) return !1;
          for (pd = Math.min(pd, Vd(kd));;)
            if (pd) {
              if (1 != kd.nodeType) return !1;
              let dd = kd.childNodes[pd - 1];
              "false" == dd.contentEditable ? pd-- : (kd = dd, pd = Vd(kd))
            } else {
              if (kd == dd) return !0;
              pd = rd(kd), kd = kd.parentNode
            }
        }(this.dom, kd) ? (this.view.inputState.lastFocusTime = 0, dd.docView.updateSelection(), !1) : (this.selectionRange.setRange(kd), pd && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(dd, Jd) {
        this.selectionRange.set(dd.node, dd.offset, Jd.node, Jd.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let dd = 0,
          Jd = null;
        for (let kd = this.dom; kd;)
          if (1 == kd.nodeType) !Jd && dd < this.scrollTargets.length && this.scrollTargets[dd] == kd ? dd++ : Jd || (Jd = this.scrollTargets.slice(0, dd)), Jd && Jd.push(kd), kd = kd.assignedSlot || kd.parentNode;
          else {
            if (11 != kd.nodeType) break;
            kd = kd.host
          } if (dd < this.scrollTargets.length && !Jd && (Jd = this.scrollTargets.slice(0, dd)), Jd) {
          for (let dd of this.scrollTargets) dd.removeEventListener("scroll", this.onScroll);
          for (let dd of this.scrollTargets = Jd) dd.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(dd) {
        if (!this.active) return dd();
        try {
          return this.stop(), dd()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, qN), BN && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), BN && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(dd, Jd) {
        var kd;
        if (!this.delayedAndroidKey) {
          let dd = () => {
            let dd = this.delayedAndroidKey;
            if (dd) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = dd.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && dd.force && WJ(this.dom, dd.key, dd.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(dd)
        }
        this.delayedAndroidKey && "Enter" != dd || (this.delayedAndroidKey = {
          key: dd,
          keyCode: Jd,
          force: this.lastChange < Date.now() - 50 || !!(null === (kd = this.delayedAndroidKey) || void 0 === kd ? void 0 : kd.force)
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
        for (let dd of this.observer.takeRecords()) this.queue.push(dd);
        return this.queue
      }
      processRecords() {
        let dd = this.pendingRecords();
        dd.length && (this.queue = []);
        let Jd = -1,
          kd = -1,
          pd = !1;
        for (let Nd of dd) {
          let dd = this.readMutation(Nd);
          dd && (dd.typeOver && (pd = !0), -1 == Jd ? ({
            from: Jd,
            to: kd
          } = dd) : (Jd = Math.min(dd.from, Jd), kd = Math.max(dd.to, kd)))
        }
        return {
          from: Jd,
          to: kd,
          typeOver: pd
        }
      }
      readChange() {
        let {
          from: dd,
          to: Jd,
          typeOver: kd
        } = this.processRecords(), pd = this.selectionChanged && Ed(this.dom, this.selectionRange);
        if (dd < 0 && !pd) return null;
        dd > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Nd = new Np(this.view, dd, Jd, kd);
        return this.view.docView.domChanged = {
          newSel: Nd.newSel ? Nd.newSel.main : null
        }, Nd
      }
      flush() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        dd && this.readSelectionRange();
        let Jd = this.readChange();
        if (!Jd) return this.view.requestMeasure(), !1;
        let kd = this.view.state,
          pd = Pp(this.view, Jd);
        return this.view.state == kd && (Jd.domChanged || Jd.newSel && !Cp(this.view.state.selection, Jd.newSel.main)) && this.view.update([]), pd
      }
      readMutation(dd) {
        let Jd = this.view.docView.tile.nearest(dd.target);
        if (!Jd || Jd.isWidget()) return null;
        if (Jd.markDirty("attributes" == dd.type), "childList" == dd.type) {
          let kd = iN(Jd, dd.previousSibling || dd.target.previousSibling, -1),
            pd = iN(Jd, dd.nextSibling || dd.target.nextSibling, 1);
          return {
            from: kd ? Jd.posAfter(kd) : Jd.posAtStart,
            to: pd ? Jd.posBefore(pd) : Jd.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == dd.type ? {
          from: Jd.posAtStart,
          to: Jd.posAtEnd,
          typeOver: dd.target.nodeValue == dd.oldValue
        } : null
      }
      setWindow(dd) {
        dd != this.win && (this.removeWindowListeners(this.win), this.win = dd, this.addWindowListeners(this.win))
      }
      addWindowListeners(dd) {
        dd.addEventListener("resize", this.xI), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : dd.addEventListener("beforeprint", this.onPrint), dd.addEventListener("scroll", this.onScroll), dd.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(dd) {
        dd.removeEventListener("scroll", this.onScroll), dd.removeEventListener("resize", this.xI), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : dd.removeEventListener("beforeprint", this.onPrint), dd.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(dd) {
        this.editContext && (this.editContext.update(dd), dd.startState.facet(tJ) != dd.state.facet(tJ) && (dd.view.contentDOM.editContext = dd.state.facet(tJ) ? this.editContext.editContext : null))
      }
      destroy() {
        var dd, Jd, kd;
        this.stop(), null === (dd = this.intersection) || void 0 === dd || dd.disconnect(), null === (Jd = this.gapIntersection) || void 0 === Jd || Jd.disconnect(), null === (kd = this.resizeScroll) || void 0 === kd || kd.disconnect();
        for (let pd of this.scrollTargets) pd.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function iN(dd, Jd, kd) {
      for (; Jd;) {
        let pd = Lk.get(Jd);
        if (pd && pd.parent == dd) return pd;
        let Nd = Jd.parentNode;
        Jd = Nd != dd.dom ? Nd : kd > 0 ? Jd.nextSibling : Jd.previousSibling
      }
      return null
    }

    function aN(dd, Jd) {
      let kd = Jd.startContainer,
        pd = Jd.startOffset,
        Nd = Jd.endContainer,
        Wd = Jd.endOffset,
        Pd = dd.docView.domAtPos(dd.state.selection.main.anchor, 1);
      return hd(Pd.node, Pd.offset, Nd, Wd) && ([kd, pd, Nd, Wd] = [Nd, Wd, kd, pd]), {
        anchorNode: kd,
        anchorOffset: pd,
        focusNode: Nd,
        focusOffset: Wd
      }
    }
    class MN {
      constructor(dd) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(dd.state);
        let Jd = this.editContext = new window.EditContext({
          text: dd.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, dd.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(dd.state.selection.main.head)
        });
        this.handlers.textupdate = kd => {
          let Nd = dd.state.selection.main,
            {
              anchor: Wd,
              head: Pd
            } = Nd,
            Zd = this.toEditorPos(kd.updateRangeStart),
            gd = this.toEditorPos(kd.updateRangeEnd);
          dd.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: kd.updateRangeStart,
            editorBase: Zd,
            drifted: !1
          });
          let Cd = gd - Zd > kd.text.length;
          Zd == this.from && Wd < this.from ? Zd = Wd : gd == this.to && Wd > this.to && (gd = Wd);
          let Kd = gp(dd.state.sliceDoc(Zd, gd), kd.text, (Cd ? Nd.from : Nd.to) - Zd, Cd ? "end" : null);
          if (!Kd) {
            let Jd = pd.k.single(this.toEditorPos(kd.selectionStart), this.toEditorPos(kd.selectionEnd));
            return void(Cp(Jd, Nd) || dd.dispatch({
              selection: Jd,
              userEvent: "select"
            }))
          }
          let od = {
            from: Kd.from + Zd,
            to: Kd.toA + Zd,
            insert: pd.I.of(kd.text.slice(Kd.from, Kd.toB).split("\n"))
          };
          if ((Bd.mac || Bd.android) && od.from == Pd - 1 && /^\. ?$/.test(kd.text) && "off" == dd.contentDOM.getAttribute("autocorrect") && (od = {
              from: Zd,
              to: gd,
              insert: pd.I.of([kd.text.replace(".", " ")])
            }), this.pendingContextChange = od, !dd.state.readOnly) {
            let Jd = this.to - this.from + (od.to - od.from + od.insert.length);
            Zp(dd, od, pd.k.single(this.toEditorPos(kd.selectionStart, Jd), this.toEditorPos(kd.selectionEnd, Jd)))
          }
          this.pendingContextChange && (this.revertPending(dd.state), this.setSelection(dd.state)), od.from < od.to && !od.insert.length && dd.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(Jd.text.slice(Math.max(0, kd.updateRangeStart - 1), Math.min(Jd.text.length, kd.updateRangeStart + 1))) && this.handlers.compositionend(kd)
        }, this.handlers.characterboundsupdate = kd => {
          let pd = [],
            Nd = null;
          for (let Jd = this.toEditorPos(kd.rangeStart), Wd = this.toEditorPos(kd.rangeEnd); Jd < Wd; Jd++) {
            let kd = dd.coordsForChar(Jd);
            Nd = kd && new DOMRect(kd.left, kd.top, kd.right - kd.left, kd.bottom - kd.top) || Nd || new DOMRect, pd.push(Nd)
          }
          Jd.updateCharacterBounds(kd.rangeStart, pd)
        }, this.handlers.textformatupdate = Jd => {
          let kd = [];
          for (let dd of Jd.getTextFormats()) {
            let Jd = dd.underlineStyle,
              pd = dd.underlineThickness;
            if (!/none/i.test(Jd) && !/none/i.test(pd)) {
              let Nd = this.toEditorPos(dd.rangeStart),
                Wd = this.toEditorPos(dd.rangeEnd);
              if (Nd < Wd) {
                let dd = `text-decoration: underline ${/^[a-z]/.test(Jd)?Jd+" ":"Dashed"==Jd?"dashed ":"Squiggle"==Jd?"wavy ":""}${/thin/i.test(pd)?1:2}px`;
                kd.push(Sd.mark({
                  attributes: {
                    style: dd
                  }
                }).range(Nd, Wd))
              }
            }
          }
          dd.dispatch({
            effects: rJ.of(Sd.set(kd))
          })
        }, this.handlers.compositionstart = () => {
          dd.inputState.composing < 0 && (dd.inputState.composing = 0, dd.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (dd.inputState.composing = -1, dd.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: Jd
            } = this.composing;
            this.composing = null, Jd && this.reset(dd.state)
          }
        };
        for (let kd in this.handlers) Jd.addEventListener(kd, this.handlers[kd]);
        this.measureReq = {
          read: dd => {
            this.editContext.updateControlBounds(dd.contentDOM.getBoundingClientRect());
            let Jd = Dd(dd.root);
            Jd && Jd.rangeCount && this.editContext.updateSelectionBounds(Jd.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(dd) {
        let Jd = 0,
          kd = !1,
          pd = this.pendingContextChange;
        return dd.changes.iterChanges(((Nd, Wd, Pd, Zd, gd) => {
          if (kd) return;
          let Cd = gd.length - (Wd - Nd);
          if (pd && Wd >= pd.to) {
            if (pd.from == Nd && pd.to == Wd && pd.insert.eq(gd)) return pd = this.pendingContextChange = null, Jd += Cd, void(this.to += Cd);
            pd = null, this.revertPending(dd.state)
          }
          if (Nd += Jd, (Wd += Jd) <= this.from) this.from += Cd, this.to += Cd;
          else if (Nd < this.to) {
            if (Nd < this.from || Wd > this.to || this.to - this.from + gd.length > 3e4) return void(kd = !0);
            this.editContext.updateText(this.toContextPos(Nd), this.toContextPos(Wd), gd.toString()), this.to += Cd
          }
          Jd += Cd
        })), pd && !kd && this.revertPending(dd.state), !kd
      }
      update(dd) {
        let Jd = this.pendingContextChange,
          kd = dd.startState.selection.main;
        this.composing && (this.composing.drifted || !dd.changes.touchesRange(kd.from, kd.to) && dd.transactions.some((dd => !dd.isUserEvent("input.type") && dd.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = dd.changes.mapPos(this.composing.editorBase)) : this.applyEdits(dd) && this.rangeIsValid(dd.state) ? (dd.docChanged || dd.selectionSet || Jd) && this.setSelection(dd.state) : (this.pendingContextChange = null, this.reset(dd.state)), (dd.geometryChanged || dd.docChanged || dd.selectionSet) && dd.view.requestMeasure(this.measureReq)
      }
      resetRange(dd) {
        let {
          head: Jd
        } = dd.selection.main;
        this.from = Math.max(0, Jd - 1e4), this.to = Math.min(dd.doc.length, Jd + 1e4)
      }
      reset(dd) {
        this.resetRange(dd), this.editContext.updateText(0, this.editContext.text.length, dd.doc.sliceString(this.from, this.to)), this.setSelection(dd)
      }
      revertPending(dd) {
        let Jd = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(Jd.from), this.toContextPos(Jd.from + Jd.insert.length), dd.doc.sliceString(Jd.from, Jd.to))
      }
      setSelection(dd) {
        let {
          main: Jd
        } = dd.selection, kd = this.toContextPos(Math.max(this.from, Math.min(this.to, Jd.anchor))), pd = this.toContextPos(Jd.head);
        this.editContext.selectionStart == kd && this.editContext.selectionEnd == pd || this.editContext.updateSelection(kd, pd)
      }
      rangeIsValid(dd) {
        let {
          head: Jd
        } = dd.selection.main;
        return !(this.from > 0 && Jd - this.from < 500 || this.to < dd.doc.length && this.to - Jd < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        dd = Math.min(dd, Jd);
        let kd = this.composing;
        return kd && kd.drifted ? kd.editorBase + (dd - kd.contextBase) : dd + this.from
      }
      toContextPos(dd) {
        let Jd = this.composing;
        return Jd && Jd.drifted ? Jd.contextBase + (dd - Jd.editorBase) : dd - this.from
      }
      destroy() {
        for (let dd in this.handlers) this.editContext.removeEventListener(dd, this.handlers[dd])
      }
    }
    class FN {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get R6() {
        return this.viewState.R6
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
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Jd;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), dd.parent && dd.parent.appendChild(this.dom);
        let {
          dispatch: kd
        } = dd;
        this.dispatchTransactions = dd.dispatchTransactions || kd && (dd => dd.forEach((dd => kd(dd, this)))) || (dd => this.update(dd)), this.dispatch = this.dispatch.bind(this), this._root = dd.root || function(dd) {
          for (; dd;) {
            if (dd && (9 == dd.nodeType || 11 == dd.nodeType && dd.host)) return dd;
            dd = dd.assignedSlot || dd.parentNode
          }
          return null
        }(dd.parent) || document, this.viewState = new PN(this, dd.state || pd.l.create(dd)), dd.scrollTo && dd.scrollTo.is(hJ) && (this.viewState.scrollTarget = dd.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(zJ).map((dd => new wJ(dd)));
        for (let pd of this.plugins) pd.update(this);
        this.observer = new sN(this), this.inputState = new Kp(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Uk(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (Jd = document.fonts) || void 0 === Jd ? void 0 : Jd.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        let Nd = 1 == Jd.length && Jd[0] instanceof pd.J ? Jd : 1 == Jd.length && Array.isArray(Jd[0]) ? Jd[0] : [this.state.update(...Jd)];
        this.dispatchTransactions(Nd, this)
      }
      update(dd) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let Jd, kd = !1,
          Nd = !1,
          Wd = this.state;
        for (let pd of dd) {
          if (pd.startState != Wd) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          Wd = pd.state
        }
        if (this.destroyed) return void(this.viewState.state = Wd);
        let Pd = this.hasFocus,
          Zd = 0,
          gd = null;
        dd.some((dd => dd.annotation(bp))) ? (this.inputState.notifiedFocused = Pd, Zd = 1) : Pd != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Pd, gd = Sp(Wd, Pd), gd || (Zd = 1));
        let Cd = this.observer.delayedAndroidKey,
          Kd = null;
        if (Cd ? (this.observer.clearDelayedAndroidKey(), Kd = this.observer.readChange(), (Kd && !this.state.doc.eq(Wd.doc) || !this.state.selection.eq(Wd.selection)) && (Kd = null)) : this.observer.clear(), Wd.facet(pd.l.phrases) != this.state.facet(pd.l.phrases)) return this.setState(Wd);
        Jd = lk.create(this, Wd, dd), Jd.flags |= Zd;
        let od = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let Jd of dd) {
            if (od && (od = od.map(Jd.changes)), Jd.scrollIntoView) {
              let {
                main: dd
              } = Jd.state.selection, {
                x: kd,
                y: Nd
              } = this.state.facet(FN.cursorScrollMargin);
              od = new cJ(dd.empty ? dd : pd.k.cursor(dd.head, dd.head > dd.anchor ? -1 : 1), "nearest", "nearest", Nd, kd)
            }
            for (let dd of Jd.effects) dd.is(hJ) && (od = dd.value.clip(this.state))
          }
          this.viewState.update(Jd, od), this.bidiCache = bN.update(this.bidiCache, Jd.changes), Jd.empty || (this.updatePlugins(Jd), this.inputState.update(Jd)), kd = this.docView.update(Jd), this.state.facet(Ck) != this.styleModules && this.mountStyles(), Nd = this.updateAttrs(), this.showAnnouncements(dd), this.docView.updateSelection(kd, dd.some((dd => dd.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (Jd.startState.facet(LN) != Jd.state.facet(LN) && (this.viewState.mustMeasureContent = !0), (kd || Nd || od || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), kd && this.docViewUpdate(), !Jd.empty)
          for (let pd of this.state.facet(XJ)) try {
            pd(Jd)
          } catch (ld) {
            uJ(this.state, ld, "update listener")
          }(gd || Kd) && Promise.resolve().then((() => {
            gd && this.state == gd.startState && this.dispatch(gd), Kd && !Pp(this, Kd) && Cd.force && WJ(this.contentDOM, Cd.key, Cd.keyCode)
          }))
      }
      setState(dd) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = dd);
        this.updateState = 2;
        let Jd = this.hasFocus;
        try {
          for (let dd of this.plugins) dd.destroy(this);
          this.viewState = new PN(this, dd), this.plugins = dd.facet(zJ).map((dd => new wJ(dd))), this.pluginMap.clear();
          for (let dd of this.plugins) dd.update(this);
          this.docView.destroy(), this.docView = new Uk(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        Jd && this.focus(), this.requestMeasure()
      }
      updatePlugins(dd) {
        let Jd = dd.startState.facet(zJ),
          kd = dd.state.facet(zJ);
        if (Jd != kd) {
          let pd = [];
          for (let Nd of kd) {
            let kd = Jd.indexOf(Nd);
            if (kd < 0) pd.push(new wJ(Nd));
            else {
              let Jd = this.plugins[kd];
              Jd.mustUpdate = dd, pd.push(Jd)
            }
          }
          for (let Jd of this.plugins) Jd.mustUpdate != dd && Jd.destroy(this);
          this.plugins = pd, this.pluginMap.clear()
        } else
          for (let pd of this.plugins) pd.mustUpdate = dd;
        for (let pd = 0; pd < this.plugins.length; pd++) this.plugins[pd].update(this);
        Jd != kd && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let Jd of this.plugins) {
          let kd = Jd.value;
          if (kd && kd.docViewUpdate) try {
            kd.docViewUpdate(this)
          } catch (dd) {
            uJ(this.state, dd, "doc view update listener")
          }
        }
      }
      measure() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, dd && this.observer.forceFlush();
        let Jd = null,
          kd = this.viewState.scrollParent,
          pd = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Nd,
            scrollAnchorHeight: Wd
          } = this.viewState;
        Math.abs(pd - this.viewState.scrollOffset) > 1 && (Wd = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let dd = 0;; dd++) {
            if (Wd < 0)
              if (PJ(kd || this.win)) Nd = -1, Wd = this.viewState.heightMap.height;
              else {
                let dd = this.viewState.scrollAnchorAt(pd);
                Nd = dd.from, Wd = dd.top
              } this.updateState = 1;
            let Zd = this.viewState.measure();
            if (!Zd && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (dd > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let gd = [];
            4 & Zd || ([this.measureRequests, gd] = [gd, this.measureRequests]);
            let Cd = gd.map((dd => {
                try {
                  return dd.read(this)
                } catch (Jd) {
                  return uJ(this.state, Jd), mN
                }
              })),
              Kd = lk.create(this, this.state, []),
              od = !1;
            Kd.flags |= Zd, Jd ? Jd.flags |= Zd : Jd = Kd, this.updateState = 2, Kd.empty || (this.updatePlugins(Kd), this.inputState.update(Kd), this.updateAttrs(), od = this.docView.update(Kd), od && this.docViewUpdate());
            for (let dd = 0; dd < gd.length; dd++)
              if (Cd[dd] != mN) try {
                let Jd = gd[dd];
                Jd.write && Jd.write(Cd[dd], this)
              } catch (Pd) {
                uJ(this.state, Pd)
              }
            if (od && this.docView.updateSelection(!0), !Kd.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, Wd = -1;
                  continue
                } {
                  let dd = ((Nd < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Nd).top) - Wd) / this.scaleY;
                  if ((dd > 1 || dd < -1) && (kd == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    pd += dd, kd ? kd.scrollTop += dd : this.win.scrollBy(0, dd), Wd = -1;
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
        if (Jd && !Jd.empty)
          for (let Zd of this.state.facet(XJ)) Zd(Jd)
      }
      get themeClasses() {
        return eN + " " + (this.state.facet(ON) ? IN : RN) + " " + this.state.facet(LN)
      }
      updateAttrs() {
        let dd = SN(this, AJ, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          Jd = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(tJ) ? "true" : "false",
            class: "cm-content",
            style: `${Bd.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (Jd["aria-readonly"] = "true"), SN(this, dk, Jd);
        let kd = this.observer.ignore((() => {
          let kd = Fd(this.contentDOM, this.contentAttrs, Jd),
            pd = Fd(this.dom, this.editorAttrs, dd);
          return kd || pd
        }));
        return this.editorAttrs = dd, this.contentAttrs = Jd, kd
      }
      showAnnouncements(dd) {
        let Jd = !0;
        for (let kd of dd)
          for (let dd of kd.effects)
            if (dd.is(FN.announce)) {
              Jd && (this.announceDOM.textContent = ""), Jd = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = dd.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Ck);
        let dd = this.state.facet(FN.cspNonce);
        Nd.e.mount(this.root, this.styleModules.concat(xN).reverse(), dd ? {
          nonce: dd
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(dd) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), dd) {
          if (this.measureRequests.indexOf(dd) > -1) return;
          if (null != dd.key)
            for (let Jd = 0; Jd < this.measureRequests.length; Jd++)
              if (this.measureRequests[Jd].key === dd.key) return void(this.measureRequests[Jd] = dd);
          this.measureRequests.push(dd)
        }
      }
      plugin(dd) {
        let Jd = this.pluginMap.get(dd);
        return (void 0 === Jd || Jd && Jd.plugin != dd) && this.pluginMap.set(dd, Jd = this.plugins.find((Jd => Jd.plugin == dd)) || null), Jd && Jd.update(this).value
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
      elementAtHeight(dd) {
        return this.readMeasured(), this.viewState.elementAtHeight(dd)
      }
      lineBlockAtHeight(dd) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(dd)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(dd) {
        return this.viewState.lineBlockAt(dd)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(dd, Jd, kd) {
        return Vk(this, dd, rk(this, dd, Jd, kd))
      }
      moveByGroup(dd, Jd) {
        return Vk(this, dd, rk(this, dd, Jd, (Jd => function(dd, Jd, kd) {
          let Nd = dd.state.charCategorizer(Jd),
            Wd = Nd(kd);
          return dd => {
            let Jd = Nd(dd);
            return Wd == pd.i.Space && (Wd = Jd), Wd == Jd
          }
        }(this, dd.head, Jd))))
      }
      visualLineSide(dd, Jd) {
        let kd = this.bidiSpans(dd),
          Nd = this.textDirectionAt(dd.from),
          Wd = kd[Jd ? kd.length - 1 : 0];
        return pd.k.cursor(Wd.side(Jd, Nd) + dd.from, Wd.forward(!Jd, Nd) ? 1 : -1)
      }
      moveToLineBoundary(dd, Jd) {
        return function(dd, Jd, kd, Nd) {
          let Wd = hk(dd, Jd.head, Jd.assoc || -1),
            Pd = Nd && Wd.type == bd.Text && (dd.lineWrapping || Wd.widgetLineBreaks) ? dd.coordsAtPos(Jd.assoc < 0 && Jd.head > Wd.from ? Jd.head - 1 : Jd.head) : null;
          if (Pd) {
            let Jd = dd.dom.getBoundingClientRect(),
              Nd = dd.textDirectionAt(Wd.from),
              Zd = dd.posAtCoords({
                x: kd == (Nd == KJ.LTR) ? Jd.right - 1 : Jd.left + 1,
                y: (Pd.top + Pd.bottom) / 2
              });
            if (null != Zd) return pd.k.cursor(Zd, kd ? -1 : 1)
          }
          return pd.k.cursor(kd ? Wd.to : Wd.from, kd ? -1 : 1)
        }(this, dd, Jd, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(dd, Jd, kd) {
        return Vk(this, dd, function(dd, Jd, kd, Nd) {
          let Wd = Jd.head,
            Pd = kd ? 1 : -1;
          if (Wd == (kd ? dd.state.doc.length : 0)) return pd.k.cursor(Wd, Jd.assoc);
          let Zd, gd = Jd.goalColumn,
            Cd = dd.contentDOM.getBoundingClientRect(),
            Kd = dd.coordsAtPos(Wd, Jd.assoc || ((Jd.empty ? kd : Jd.head == Jd.from) ? 1 : -1)),
            od = dd.documentTop;
          if (Kd) null == gd && (gd = Kd.left - Cd.left), Zd = Pd < 0 ? Kd.top : Kd.bottom;
          else {
            let Jd = dd.viewState.lineBlockAt(Wd);
            null == gd && (gd = Math.min(Cd.right - Cd.left, dd.defaultCharacterWidth * (Wd - Jd.from))), Zd = (Pd < 0 ? Jd.top : Jd.bottom) + od
          }
          let ld = Cd.left + gd,
            Qd = dd.viewState.heightOracle.textHeight >> 1,
            Ld = null !== Nd && void 0 !== Nd ? Nd : Qd;
          for (let Od = 0;; Od += Qd) {
            let Jd = Zd + (Ld + Od) * Pd,
              Nd = Hk(dd, {
                x: ld,
                y: Jd
              }, !1, Pd);
            if (kd ? Jd > Cd.bottom : Jd < Cd.top) return pd.k.cursor(Nd.pos, Nd.assoc);
            let Wd = dd.coordsAtPos(Nd.pos, Nd.assoc),
              Kd = Wd ? (Wd.top + Wd.bottom) / 2 : 0;
            if (!Wd || (kd ? Kd > Zd : Kd < Zd)) return pd.k.cursor(Nd.pos, Nd.assoc, void 0, gd)
          }
        }(this, dd, Jd, kd))
      }
      domAtPos(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(dd, Jd)
      }
      posAtDOM(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(dd, Jd)
      }
      posAtCoords(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let kd = Hk(this, dd, Jd);
        return kd && kd.pos
      }
      posAndSideAtCoords(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Hk(this, dd, Jd)
      }
      coordsAtPos(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let kd = this.docView.coordsAt(dd, Jd);
        if (!kd || kd.left == kd.right) return kd;
        let pd = this.state.doc.lineAt(dd),
          Nd = this.bidiSpans(pd);
        return zd(kd, Nd[vJ.find(Nd, dd - pd.from, -1, Jd)].dir == KJ.LTR == Jd > 0)
      }
      coordsForChar(dd) {
        return this.readMeasured(), this.docView.coordsForChar(dd)
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
      textDirectionAt(dd) {
        return !this.state.facet(DJ) || dd < this.viewport.from || dd > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(dd))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(dd) {
        if (dd.length > YN) return aJ(dd.length);
        let Jd, kd = this.textDirectionAt(dd.from);
        for (let Nd of this.bidiCache)
          if (Nd.from == dd.from && Nd.dir == kd && (Nd.fresh || xJ(Nd.isolates, Jd = Pk(this, dd)))) return Nd.order;
        Jd || (Jd = Pk(this, dd));
        let pd = iJ(dd.text, kd, Jd);
        return this.bidiCache.push(new bN(dd.from, dd.to, kd, Jd, !0, pd)), pd
      }
      get hasFocus() {
        var dd;
        return (this.dom.ownerDocument.hasFocus() || Bd.safari && (null === (dd = this.inputState) || void 0 === dd ? void 0 : dd.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          pJ(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(dd) {
        this._root != dd && (this._root = dd, this.observer.setWindow((9 == dd.nodeType ? dd : dd.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let dd of this.plugins) dd.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var kd, Nd, Wd, Pd;
        return hJ.of(new cJ("number" == typeof dd ? pd.k.cursor(dd) : dd, null !== (kd = Jd.y) && void 0 !== kd ? kd : "nearest", null !== (Nd = Jd.x) && void 0 !== Nd ? Nd : "nearest", null !== (Wd = Jd.yMargin) && void 0 !== Wd ? Wd : 5, null !== (Pd = Jd.xMargin) && void 0 !== Pd ? Pd : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: dd,
          scrollLeft: Jd
        } = this.scrollDOM, kd = this.viewState.scrollAnchorAt(dd);
        return hJ.of(new cJ(pd.k.cursor(kd.from), "start", "start", kd.top - dd, Jd, !0))
      }
      setTabFocusMode(dd) {
        null == dd ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof dd ? this.inputState.tabFocusMode = dd ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + dd)
      }
      static domEventHandlers(dd) {
        return HJ.define((() => ({})), {
          eventHandlers: dd
        })
      }
      static domEventObservers(dd) {
        return HJ.define((() => ({})), {
          eventObservers: dd
        })
      }
      static theme(dd, Jd) {
        let kd = Nd.e.newName(),
          pd = [LN.of(kd), Ck.of(vN(`.${kd}`, dd))];
        return Jd && Jd.dark && pd.push(ON.of(!0)), pd
      }
      static baseTheme(dd) {
        return pd.t.lowest(Ck.of(vN("." + eN, dd, GN)))
      }
      static findFromDOM(dd) {
        var Jd;
        let kd = dd.querySelector(".cm-content"),
          pd = kd && Lk.get(kd) || Lk.get(dd);
        return (null === (Jd = null === pd || void 0 === pd ? void 0 : pd.root) || void 0 === Jd ? void 0 : Jd.view) || null
      }
    }
    FN.styleModule = Ck, FN.inputHandler = fJ, FN.clipboardInputFilter = UJ, FN.clipboardOutputFilter = yJ, FN.scrollHandler = EJ, FN.focusChangeEffect = nJ, FN.perLineTextDirection = DJ, FN.exceptionSink = jJ, FN.updateListener = XJ, FN.editable = tJ, FN.mouseSelectionStyle = SJ, FN.dragMovesSelection = bJ, FN.clickAddsSelectionRange = mJ, FN.RW = Jk, FN.blockWrappers = kk, FN.outerDecorations = pk, FN.atomicRanges = Nk, FN.bidiIsolatedRanges = Wk, FN.cursorScrollMargin = pd.o.define({
      combine: dd => {
        let Jd = 5,
          kd = 5;
        for (let pd of dd) "number" == typeof pd ? Jd = kd = pd : ({
          x: Jd,
          y: kd
        } = pd);
        return {
          x: Jd,
          y: kd
        }
      }
    }), FN.scrollMargins = Zk, FN.darkTheme = ON, FN.cspNonce = pd.o.define({
      combine: dd => dd.length ? dd[0] : ""
    }), FN.contentAttributes = dk, FN.editorAttributes = AJ, FN.lineWrapping = FN.contentAttributes.of({
      class: "cm-lineWrapping"
    }), FN.announce = pd.C.define();
    const YN = 4096,
      mN = {};
    class bN {
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        this.from = dd, this.to = Jd, this.dir = kd, this.isolates = pd, this.fresh = Nd, this.order = Wd
      }
      static update(dd, Jd) {
        if (Jd.empty && !dd.some((dd => dd.fresh))) return dd;
        let kd = [],
          pd = dd.length ? dd[dd.length - 1].dir : KJ.LTR;
        for (let Nd = Math.max(0, dd.length - 10); Nd < dd.length; Nd++) {
          let Wd = dd[Nd];
          Wd.dir != pd || Jd.touchesRange(Wd.from, Wd.to) || kd.push(new bN(Jd.mapPos(Wd.from, 1), Jd.mapPos(Wd.to, -1), Wd.dir, Wd.isolates, !1, Wd.order))
        }
        return kd
      }
    }

    function SN(dd, Jd, kd) {
      for (let pd = dd.state.facet(Jd), Nd = pd.length - 1; Nd >= 0; Nd--) {
        let Jd = pd[Nd],
          Wd = "function" == typeof Jd ? Jd(dd) : Jd;
        Wd && sd(Wd, kd)
      }
      return kd
    }
    const jN = Bd.mac ? "mac" : Bd.windows ? "win" : Bd.linux ? "linux" : "key";

    function XN(dd, Jd, kd) {
      return Jd.altKey && (dd = "Alt-" + dd), Jd.ctrlKey && (dd = "Ctrl-" + dd), Jd.metaKey && (dd = "Meta-" + dd), !1 !== kd && Jd.shiftKey && (dd = "Shift-" + dd), dd
    }
    const fN = pd.t.default(FN.domEventHandlers({
        keydown: (dd, Jd) => hN(yN(Jd.state), dd, Jd, "editor")
      })),
      nN = pd.o.define({
        enables: fN
      }),
      UN = new WeakMap;

    function yN(dd) {
      let Jd = dd.facet(nN),
        kd = UN.get(Jd);
      return kd || UN.set(Jd, kd = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jN,
          kd = Object.create(null),
          pd = Object.create(null),
          Nd = (dd, Jd) => {
            let kd = pd[dd];
            if (null == kd) pd[dd] = Jd;
            else if (kd != Jd) throw new Error("Key binding " + dd + " is used both as a regular binding and as a multi-stroke prefix")
          },
          Wd = (dd, pd, Wd, Pd, Zd) => {
            var gd, Cd;
            let Kd = kd[dd] || (kd[dd] = Object.create(null)),
              od = pd.split(/ (?!$)/).map((dd => function(dd, Jd) {
                const kd = dd.split(/-(?!$)/);
                let pd, Nd, Wd, Pd, Zd = kd[kd.length - 1];
                "Space" == Zd && (Zd = " ");
                for (let gd = 0; gd < kd.length - 1; ++gd) {
                  const dd = kd[gd];
                  if (/^(cmd|meta|m)$/i.test(dd)) Pd = !0;
                  else if (/^a(lt)?$/i.test(dd)) pd = !0;
                  else if (/^(c|ctrl|control)$/i.test(dd)) Nd = !0;
                  else if (/^s(hift)?$/i.test(dd)) Wd = !0;
                  else {
                    if (!/^mod$/i.test(dd)) throw new Error("Unrecognized modifier name: " + dd);
                    "mac" == Jd ? Pd = !0 : Nd = !0
                  }
                }
                return pd && (Zd = "Alt-" + Zd), Nd && (Zd = "Ctrl-" + Zd), Pd && (Zd = "Meta-" + Zd), Wd && (Zd = "Shift-" + Zd), Zd
              }(dd, Jd)));
            for (let Jd = 1; Jd < od.length; Jd++) {
              let kd = od.slice(0, Jd).join(" ");
              Nd(kd, !0), Kd[kd] || (Kd[kd] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [Jd => {
                  let pd = TN = {
                    view: Jd,
                    prefix: kd,
                    scope: dd
                  };
                  return setTimeout((() => {
                    TN == pd && (TN = null)
                  }), EN), !0
                }]
              })
            }
            let ld = od.join(" ");
            Nd(ld, !1);
            let Qd = Kd[ld] || (Kd[ld] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Cd = null === (gd = Kd._any) || void 0 === gd ? void 0 : gd.run) || void 0 === Cd ? void 0 : Cd.slice()) || []
            });
            Wd && Qd.run.push(Wd), Pd && (Qd.preventDefault = !0), Zd && (Qd.stopPropagation = !0)
          };
        for (let Pd of dd) {
          let dd = Pd.scope ? Pd.scope.split(" ") : ["editor"];
          if (Pd.any)
            for (let Jd of dd) {
              let dd = kd[Jd] || (kd[Jd] = Object.create(null));
              dd._any || (dd._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: pd
              } = Pd;
              for (let Jd in dd) dd[Jd].run.push((dd => pd(dd, cN)))
            }
          let pd = Pd[Jd] || Pd.key;
          if (pd)
            for (let Jd of dd) Wd(Jd, pd, Pd.run, Pd.preventDefault, Pd.stopPropagation), Pd.shift && Wd(Jd, "Shift-" + pd, Pd.shift, Pd.preventDefault, Pd.stopPropagation)
        }
        return kd
      }(Jd.reduce(((dd, Jd) => dd.concat(Jd)), []))), kd
    }

    function DN(dd, Jd, kd) {
      return hN(yN(dd.state), Jd, dd, kd)
    }
    let TN = null;
    const EN = 4e3;
    let cN = null;

    function hN(dd, Jd, kd, Nd) {
      cN = Jd;
      let Cd = function(dd) {
          var Jd = !(Zd && dd.metaKey && dd.shiftKey && !dd.ctrlKey && !dd.altKey || gd && dd.shiftKey && dd.key && 1 == dd.key.length || "Unidentified" == dd.key) && dd.key || (dd.shiftKey ? Pd : Wd)[dd.keyCode] || dd.key || "Unidentified";
          return "Esc" == Jd && (Jd = "Escape"), "Del" == Jd && (Jd = "Delete"), "Left" == Jd && (Jd = "ArrowLeft"), "Up" == Jd && (Jd = "ArrowUp"), "Right" == Jd && (Jd = "ArrowRight"), "Down" == Jd && (Jd = "ArrowDown"), Jd
        }(Jd),
        Kd = (0, pd.K)(Cd, 0),
        od = (0, pd.O)(Kd) == Cd.length && " " != Cd,
        ld = "",
        Qd = !1,
        Ld = !1,
        Od = !1;
      TN && TN.view == kd && TN.scope == Nd && (ld = TN.prefix + " ", Op.indexOf(Jd.keyCode) < 0 && (Ld = !0, TN = null));
      let ed, Rd, Id = new Set,
        Gd = dd => {
          if (dd) {
            for (let Jd of dd.run)
              if (!Id.has(Jd) && (Id.add(Jd), Jd(kd))) return dd.stopPropagation && (Od = !0), !0;
            dd.preventDefault && (dd.stopPropagation && (Od = !0), Ld = !0)
          }
          return !1
        },
        vd = dd[Nd];
      return vd && (Gd(vd[ld + XN(Cd, Jd, !od)]) ? Qd = !0 : !od || !(Jd.altKey || Jd.metaKey || Jd.ctrlKey) || Bd.windows && Jd.ctrlKey && Jd.altKey || Bd.mac && Jd.altKey && !Jd.ctrlKey && !Jd.metaKey || !(ed = Wd[Jd.keyCode]) || ed == Cd ? od && Jd.shiftKey && Gd(vd[ld + XN(Cd, Jd, !0)]) && (Qd = !0) : (Gd(vd[ld + XN(ed, Jd, !0)]) || Jd.shiftKey && (Rd = Pd[Jd.keyCode]) != Cd && Rd != ed && Gd(vd[ld + XN(Rd, Jd, !1)])) && (Qd = !0), !Qd && Gd(vd._any) && (Qd = !0)), Ld && (Qd = !0), Qd && Od && Jd.stopPropagation(), cN = null, Qd
    }
    class rN {
      constructor(dd, Jd, kd, pd, Nd) {
        this.className = dd, this.left = Jd, this.top = kd, this.width = pd, this.height = Nd
      }
      draw() {
        let dd = document.createElement("div");
        return dd.className = this.className, this.adjust(dd), dd
      }
      update(dd, Jd) {
        return Jd.className == this.className && (this.adjust(dd), !0)
      }
      adjust(dd) {
        dd.style.left = this.left + "px", dd.style.top = this.top + "px", null != this.width && (dd.style.width = this.width + "px"), dd.style.height = this.height + "px"
      }
      eq(dd) {
        return this.left == dd.left && this.top == dd.top && this.width == dd.width && this.height == dd.height && this.className == dd.className
      }
      static forRange(dd, Jd, kd) {
        if (kd.empty) {
          let pd = dd.coordsAtPos(kd.head, kd.assoc || 1);
          if (!pd) return [];
          let Nd = uN(dd);
          return [new rN(Jd, pd.left - Nd.left, pd.top - Nd.top, null, pd.bottom - pd.top)]
        }
        return function(dd, Jd, kd) {
          if (kd.to <= dd.viewport.from || kd.from >= dd.viewport.to) return [];
          let pd = Math.max(kd.from, dd.viewport.from),
            Nd = Math.min(kd.to, dd.viewport.to),
            Wd = dd.textDirection == KJ.LTR,
            Pd = dd.contentDOM,
            Zd = Pd.getBoundingClientRect(),
            gd = uN(dd),
            Cd = Pd.querySelector(".cm-line"),
            Kd = Cd && window.getComputedStyle(Cd),
            od = Zd.left + (Kd ? parseInt(Kd.paddingLeft) + Math.min(0, parseInt(Kd.textIndent)) : 0),
            ld = Zd.right - (Kd ? parseInt(Kd.paddingRight) : 0),
            Qd = hk(dd, pd, 1),
            Ld = hk(dd, Nd, -1),
            Od = Qd.type == bd.Text ? Qd : null,
            ed = Ld.type == bd.Text ? Ld : null;
          Od && (dd.lineWrapping || Qd.widgetLineBreaks) && (Od = tN(dd, pd, 1, Od));
          ed && (dd.lineWrapping || Ld.widgetLineBreaks) && (ed = tN(dd, Nd, -1, ed));
          if (Od && ed && Od.from == ed.from && Od.to == ed.to) return Id(Gd(kd.from, kd.to, Od));
          {
            let Jd = Od ? Gd(kd.from, null, Od) : vd(Qd, !1),
              pd = ed ? Gd(null, kd.to, ed) : vd(Ld, !0),
              Nd = [];
            return (Od || Qd).to < (ed || Ld).from - (Od && ed ? 1 : 0) || Qd.widgetLineBreaks > 1 && Jd.bottom + dd.defaultLineHeight / 2 < pd.top ? Nd.push(Rd(od, Jd.bottom, ld, pd.top)) : Jd.bottom < pd.top && dd.elementAtHeight((Jd.bottom + pd.top) / 2).type == bd.Text && (Jd.bottom = pd.top = (Jd.bottom + pd.top) / 2), Id(Jd).concat(Nd).concat(Id(pd))
          }

          function Rd(dd, kd, pd, Nd) {
            return new rN(Jd, dd - gd.left, kd - gd.top, Math.max(0, pd - dd), Nd - kd)
          }

          function Id(dd) {
            let {
              top: Jd,
              bottom: kd,
              horizontal: pd
            } = dd, Nd = [];
            for (let Wd = 0; Wd < pd.length; Wd += 2) Nd.push(Rd(pd[Wd], Jd, pd[Wd + 1], kd));
            return Nd
          }

          function Gd(Jd, kd, pd) {
            let Nd = 1e9,
              Pd = -1e9,
              Zd = [];

            function gd(Jd, kd, gd, Cd, Kd) {
              let Qd = dd.coordsAtPos(Jd, Jd == pd.to ? -2 : 2),
                Ld = dd.coordsAtPos(gd, gd == pd.from ? 2 : -2);
              Qd && Ld && (Nd = Math.min(Qd.top, Ld.top, Nd), Pd = Math.max(Qd.bottom, Ld.bottom, Pd), Kd == KJ.LTR ? Zd.push(Wd && kd ? od : Qd.left, Wd && Cd ? ld : Ld.right) : Zd.push(!Wd && Cd ? od : Ld.left, !Wd && kd ? ld : Qd.right))
            }
            let Cd = null !== Jd && void 0 !== Jd ? Jd : pd.from,
              Kd = null !== kd && void 0 !== kd ? kd : pd.to;
            for (let Wd of dd.R6)
              if (Wd.to > Cd && Wd.from < Kd)
                for (let pd = Math.max(Wd.from, Cd), Nd = Math.min(Wd.to, Kd);;) {
                  let Wd = dd.state.doc.lineAt(pd);
                  for (let Pd of dd.bidiSpans(Wd)) {
                    let dd = Pd.from + Wd.from,
                      Zd = Pd.to + Wd.from;
                    if (dd >= Nd) break;
                    Zd > pd && gd(Math.max(dd, pd), null == Jd && dd <= Cd, Math.min(Zd, Nd), null == kd && Zd >= Kd, Pd.dir)
                  }
                  if (pd = Wd.to + 1, pd >= Nd) break
                }
            return 0 == Zd.length && gd(Cd, null == Jd, Kd, null == kd, dd.textDirection), {
              top: Nd,
              bottom: Pd,
              horizontal: Zd
            }
          }

          function vd(dd, Jd) {
            let kd = Zd.top + (Jd ? dd.top : dd.bottom);
            return {
              top: kd,
              bottom: kd,
              horizontal: []
            }
          }
        }(dd, Jd, kd)
      }
    }

    function uN(dd) {
      let Jd = dd.scrollDOM.getBoundingClientRect();
      return {
        left: (dd.textDirection == KJ.LTR ? Jd.left : Jd.right - dd.scrollDOM.clientWidth * dd.scaleX) - dd.scrollDOM.scrollLeft * dd.scaleX,
        top: Jd.top - dd.scrollDOM.scrollTop * dd.scaleY
      }
    }

    function tN(dd, Jd, kd, pd) {
      let Nd = dd.coordsAtPos(Jd, 2 * kd);
      if (!Nd) return pd;
      let Wd = dd.dom.getBoundingClientRect(),
        Pd = (Nd.top + Nd.bottom) / 2,
        Zd = dd.posAtCoords({
          x: Wd.left + 1,
          y: Pd
        }),
        gd = dd.posAtCoords({
          x: Wd.right - 1,
          y: Pd
        });
      return null == Zd || null == gd ? pd : {
        from: Math.max(pd.from, Math.min(Zd, gd)),
        to: Math.min(pd.to, Math.max(Zd, gd))
      }
    }
    class VN {
      constructor(dd, Jd) {
        this.view = dd, this.layer = Jd, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = dd.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), Jd.above && this.dom.classList.add("cm-layer-above"), Jd.class && this.dom.classList.add(Jd.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(dd.state), dd.requestMeasure(this.measureReq), Jd.mount && Jd.mount(this.dom, dd)
      }
      update(dd) {
        dd.startState.facet(zN) != dd.state.facet(zN) && this.setOrder(dd.state), (this.layer.update(dd, this.dom) || dd.geometryChanged) && (this.scale(), dd.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(dd) {
        !1 !== this.layer.updateOnDocViewUpdate && dd.requestMeasure(this.measureReq)
      }
      setOrder(dd) {
        let Jd = 0,
          kd = dd.facet(zN);
        for (; Jd < kd.length && kd[Jd] != this.layer;) Jd++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - Jd)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: dd,
          scaleY: Jd
        } = this.view;
        dd == this.scaleX && Jd == this.scaleY || (this.scaleX = dd, this.scaleY = Jd, this.dom.style.transform = `scale(${1/dd}, ${1/Jd})`)
      }
      draw(dd) {
        if (dd.length != this.drawn.length || dd.some(((dd, Jd) => {
            return kd = dd, pd = this.drawn[Jd], !(kd.constructor == pd.constructor && kd.eq(pd));
            var kd, pd
          }))) {
          let Jd = this.dom.firstChild,
            kd = 0;
          for (let pd of dd) pd.update && Jd && pd.constructor && this.drawn[kd].constructor && pd.update(Jd, this.drawn[kd]) ? (Jd = Jd.nextSibling, kd++) : this.dom.insertBefore(pd.draw(), Jd);
          for (; Jd;) {
            let dd = Jd.nextSibling;
            Jd.remove(), Jd = dd
          }
          this.drawn = dd, Bd.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const zN = pd.o.define();

    function HN(dd) {
      return [HJ.define((Jd => new VN(Jd, dd))), zN.of(dd)]
    }
    const wN = pd.o.define({
      combine: dd => (0, pd.R)(dd, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (dd, Jd) => Math.min(dd, Jd),
        drawRangeCursor: (dd, Jd) => dd || Jd
      })
    });

    function AN() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [wN.of(dd), JW, pW, NW, TJ.of(!0)]
    }

    function dW(dd) {
      return dd.startState.facet(wN) != dd.state.facet(wN)
    }
    const JW = HN({
      above: !0,
      markers(dd) {
        let {
          state: Jd
        } = dd, kd = Jd.facet(wN), Nd = [];
        for (let Wd of Jd.selection.UO) {
          let Pd = Wd == Jd.selection.main;
          if (Wd.empty || kd.drawRangeCursor && !(Pd && Bd.ios && kd.iosSelectionHandles)) {
            let Jd = Pd ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              kd = Wd.empty ? Wd : pd.k.cursor(Wd.head, Wd.assoc);
            for (let pd of rN.forRange(dd, Jd, kd)) Nd.push(pd)
          }
        }
        return Nd
      },
      update(dd, Jd) {
        dd.transactions.some((dd => dd.selection)) && (Jd.style.animationName = "cm-blink" == Jd.style.animationName ? "cm-blink2" : "cm-blink");
        let kd = dW(dd);
        return kd && kW(dd.state, Jd), dd.docChanged || dd.selectionSet || kd
      },
      mount(dd, Jd) {
        kW(Jd.state, dd)
      },
      class: "cm-cursorLayer"
    });

    function kW(dd, Jd) {
      Jd.style.animationDuration = dd.facet(wN).cursorBlinkRate + "ms"
    }
    const pW = HN({
        above: !1,
        markers(dd) {
          let Jd = [],
            {
              main: kd,
              UO: Nd
            } = dd.state.selection;
          for (let pd of Nd)
            if (!pd.empty)
              for (let kd of rN.forRange(dd, "cm-selectionBackground", pd)) Jd.push(kd);
          if (Bd.ios && !kd.empty && dd.state.facet(wN).iosSelectionHandles) {
            for (let Nd of rN.forRange(dd, "cm-selectionHandle cm-selectionHandle-start", pd.k.cursor(kd.from, 1))) Jd.push(Nd);
            for (let Nd of rN.forRange(dd, "cm-selectionHandle cm-selectionHandle-end", pd.k.cursor(kd.to, 1))) Jd.push(Nd)
          }
          return Jd
        },
        update: (dd, Jd) => dd.docChanged || dd.selectionSet || dd.viewportChanged || dW(dd),
        class: "cm-selectionLayer"
      }),
      NW = pd.t.highest(FN.theme({
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
      WW = pd.C.define({
        map: (dd, Jd) => null == dd ? null : Jd.mapPos(dd)
      }),
      PW = pd.E.define({
        create: () => null,
        update: (dd, Jd) => (null != dd && (dd = Jd.changes.mapPos(dd)), Jd.effects.reduce(((dd, Jd) => Jd.is(WW) ? Jd.value : dd), dd))
      }),
      ZW = HJ.fromClass(class {
        constructor(dd) {
          this.view = dd, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(dd) {
          var Jd;
          let kd = dd.state.field(PW);
          null == kd ? null != this.cursor && (null === (Jd = this.cursor) || void 0 === Jd || Jd.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (dd.startState.field(PW) != kd || dd.docChanged || dd.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: dd
          } = this, Jd = dd.state.field(PW), kd = null != Jd && dd.coordsAtPos(Jd);
          if (!kd) return null;
          let pd = dd.scrollDOM.getBoundingClientRect();
          return {
            left: kd.left - pd.left + dd.scrollDOM.scrollLeft * dd.scaleX,
            top: kd.top - pd.top + dd.scrollDOM.scrollTop * dd.scaleY,
            height: kd.bottom - kd.top
          }
        }
        drawCursor(dd) {
          if (this.cursor) {
            let {
              scaleX: Jd,
              scaleY: kd
            } = this.view;
            dd ? (this.cursor.style.left = dd.left / Jd + "px", this.cursor.style.top = dd.top / kd + "px", this.cursor.style.height = dd.height / kd + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(dd) {
          this.view.state.field(PW) != dd && this.view.dispatch({
            effects: WW.of(dd)
          })
        }
      }, {
        eventObservers: {
          dragover(dd) {
            this.setDropPos(this.view.posAtCoords({
              x: dd.clientX,
              y: dd.clientY
            }))
          },
          dragleave(dd) {
            dd.target != this.view.contentDOM && this.view.contentDOM.contains(dd.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function gW() {
      return [PW, ZW]
    }

    function CW(dd, Jd, kd, pd, Nd) {
      Jd.lastIndex = 0;
      for (let Wd, Pd = dd.iterRange(kd, pd), Zd = kd; !Pd.next().done; Zd += Pd.value.length)
        if (!Pd.lineBreak)
          for (; Wd = Jd.exec(Pd.value);) Nd(Zd + Wd.index, Wd)
    }
    class KW {
      constructor(dd) {
        const {
          regexp: Jd,
          decoration: kd,
          decorate: pd,
          boundary: Nd,
          maxLength: Wd = 1e3
        } = dd;
        if (!Jd.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = Jd, pd) this.addMatch = (dd, Jd, kd, Nd) => pd(Nd, kd, kd + dd[0].length, dd, Jd);
        else if ("function" == typeof kd) this.addMatch = (dd, Jd, pd, Nd) => {
          let Wd = kd(dd, Jd, pd);
          Wd && Nd(pd, pd + dd[0].length, Wd)
        };
        else {
          if (!kd) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (dd, Jd, pd, Nd) => Nd(pd, pd + dd[0].length, kd)
        }
        this.boundary = Nd, this.maxLength = Wd
      }
      createDeco(dd) {
        let Jd = new pd.v,
          kd = Jd.add.bind(Jd);
        for (let {
            from: pd,
            to: Nd
          }
          of
          function(dd, Jd) {
            let kd = dd.R6;
            if (1 == kd.length && kd[0].from == dd.viewport.from && kd[0].to == dd.viewport.to) return kd;
            let pd = [];
            for (let {
                from: Nd,
                to: Wd
              }
              of kd) Nd = Math.max(dd.state.doc.lineAt(Nd).from, Nd - Jd), Wd = Math.min(dd.state.doc.lineAt(Wd).to, Wd + Jd), pd.length && pd[pd.length - 1].to >= Nd ? pd[pd.length - 1].to = Wd : pd.push({
              from: Nd,
              to: Wd
            });
            return pd
          }(dd, this.maxLength)) CW(dd.state.doc, this.regexp, pd, Nd, ((Jd, pd) => this.addMatch(pd, dd, Jd, kd)));
        return Jd.finish()
      }
      updateDeco(dd, Jd) {
        let kd = 1e9,
          pd = -1;
        return dd.docChanged && dd.changes.iterChanges(((Jd, Nd, Wd, Pd) => {
          Pd >= dd.view.viewport.from && Wd <= dd.view.viewport.to && (kd = Math.min(Wd, kd), pd = Math.max(Pd, pd))
        })), dd.viewportMoved || pd - kd > 1e3 ? this.createDeco(dd.view) : pd > -1 ? this.updateRange(dd.view, Jd.map(dd.changes), kd, pd) : Jd
      }
      updateRange(dd, Jd, kd, pd) {
        for (let Nd of dd.R6) {
          let Wd = Math.max(Nd.from, kd),
            Pd = Math.min(Nd.to, pd);
          if (Pd >= Wd) {
            let kd = dd.state.doc.lineAt(Wd),
              pd = kd.to < Pd ? dd.state.doc.lineAt(Pd) : kd,
              Zd = Math.max(Nd.from, kd.from),
              gd = Math.min(Nd.to, pd.to);
            if (this.boundary) {
              for (; Wd > kd.from; Wd--)
                if (this.boundary.test(kd.text[Wd - 1 - kd.from])) {
                  Zd = Wd;
                  break
                } for (; Pd < pd.to; Pd++)
                if (this.boundary.test(pd.text[Pd - pd.from])) {
                  gd = Pd;
                  break
                }
            }
            let Cd, Kd = [],
              od = (dd, Jd, kd) => Kd.push(kd.range(dd, Jd));
            if (kd == pd)
              for (this.regexp.lastIndex = Zd - kd.from;
                (Cd = this.regexp.exec(kd.text)) && Cd.index < gd - kd.from;) this.addMatch(Cd, dd, Cd.index + kd.from, od);
            else CW(dd.state.doc, this.regexp, Zd, gd, ((Jd, kd) => this.addMatch(kd, dd, Jd, od)));
            Jd = Jd.update({
              filterFrom: Zd,
              filterTo: gd,
              filter: (dd, Jd) => dd < Zd || Jd > gd,
              add: Kd
            })
          }
        }
        return Jd
      }
    }
    const oW = null != /x/.unicode ? "gu" : "g",
      lW = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", oW),
      QW = {
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
    let LW = null;
    const OW = pd.o.define({
      combine(dd) {
        let Jd = (0, pd.R)(dd, {
          render: null,
          specialChars: lW,
          addSpecialChars: null
        });
        return (Jd.replaceTabs = ! function() {
          var dd;
          if (null == LW && "undefined" != typeof document && document.body) {
            let Jd = document.body.style;
            LW = null != (null !== (dd = Jd.tabSize) && void 0 !== dd ? dd : Jd.MozTabSize)
          }
          return LW || !1
        }()) && (Jd.specialChars = new RegExp("\t|" + Jd.specialChars.source, oW)), Jd.addSpecialChars && (Jd.specialChars = new RegExp(Jd.specialChars.source + "|" + Jd.addSpecialChars.source, oW)), Jd
      }
    });

    function eW() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [OW.of(dd), RW || (RW = HJ.fromClass(class {
        constructor(dd) {
          this.view = dd, this.RW = Sd.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(dd.state.facet(OW)), this.RW = this.decorator.createDeco(dd)
        }
        makeDecorator(dd) {
          return new KW({
            regexp: dd.specialChars,
            decoration: (Jd, kd, Nd) => {
              let {
                doc: Wd
              } = kd.state, Pd = (0, pd.K)(Jd[0], 0);
              if (9 == Pd) {
                let dd = Wd.lineAt(Nd),
                  Jd = kd.state.tabSize,
                  Pd = (0, pd.V)(dd.text, Jd, Nd - dd.from);
                return Sd.replace({
                  widget: new GW((Jd - Pd % Jd) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[Pd] || (this.decorationCache[Pd] = Sd.replace({
                widget: new IW(dd, Pd)
              }))
            },
            boundary: dd.replaceTabs ? void 0 : /[^]/
          })
        }
        update(dd) {
          let Jd = dd.state.facet(OW);
          dd.startState.facet(OW) != Jd ? (this.decorator = this.makeDecorator(Jd), this.RW = this.decorator.createDeco(dd.view)) : this.RW = this.decorator.updateDeco(dd, this.RW)
        }
      }, {
        RW: dd => dd.RW
      }))]
    }
    let RW = null;
    class IW extends md {
      constructor(dd, Jd) {
        super(), this.options = dd, this.code = Jd
      }
      eq(dd) {
        return dd.code == this.code
      }
      toDOM(dd) {
        let Jd = function(dd) {
            return dd >= 32 ? "\u2022" : 10 == dd ? "\u2424" : String.fromCharCode(9216 + dd)
          }(this.code),
          kd = dd.state.phrase("Control character") + " " + (QW[this.code] || "0x" + this.code.toString(16)),
          pd = this.options.render && this.options.render(this.code, kd, Jd);
        if (pd) return pd;
        let Nd = document.createElement("span");
        return Nd.textContent = Jd, Nd.title = kd, Nd.setAttribute("aria-label", kd), Nd.className = "cm-specialChar", Nd
      }
      ignoreEvent() {
        return !1
      }
    }
    class GW extends md {
      constructor(dd) {
        super(), this.width = dd
      }
      eq(dd) {
        return dd.width == this.width
      }
      toDOM() {
        let dd = document.createElement("span");
        return dd.textContent = "\t", dd.className = "cm-tab", dd.style.width = this.width + "px", dd
      }
      ignoreEvent() {
        return !1
      }
    }

    function vW() {
      return qW
    }
    const xW = Sd.line({
        class: "cm-activeLine"
      }),
      qW = HJ.fromClass(class {
        constructor(dd) {
          this.RW = this.getDeco(dd)
        }
        update(dd) {
          (dd.docChanged || dd.selectionSet) && (this.RW = this.getDeco(dd.view))
        }
        getDeco(dd) {
          let Jd = -1,
            kd = [];
          for (let pd of dd.state.selection.UO) {
            let Nd = dd.lineBlockAt(pd.head);
            Nd.from > Jd && (kd.push(xW.range(Nd.from)), Jd = Nd.from)
          }
          return Sd.set(kd)
        }
      }, {
        RW: dd => dd.RW
      });
    class BW extends md {
      constructor(dd) {
        super(), this.content = dd
      }
      toDOM(dd) {
        let Jd = document.createElement("span");
        return Jd.className = "cm-placeholder", Jd.style.pointerEvents = "none", Jd.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(dd) : this.content.cloneNode(!0)), Jd.setAttribute("aria-hidden", "true"), Jd
      }
      coordsAt(dd) {
        let Jd = dd.firstChild ? cd(dd.firstChild) : [];
        if (!Jd.length) return null;
        let kd = window.getComputedStyle(dd.parentNode),
          pd = zd(Jd[0], "rtl" != kd.direction),
          Nd = parseInt(kd.lineHeight);
        return pd.bottom - pd.top > 1.5 * Nd ? {
          left: pd.left,
          right: pd.right,
          top: pd.top,
          bottom: pd.top + Nd
        } : pd
      }
      ignoreEvent() {
        return !1
      }
    }

    function sW(dd) {
      let Jd = HJ.fromClass(class {
        constructor(Jd) {
          this.view = Jd, this.placeholder = dd ? Sd.set([Sd.widget({
            widget: new BW(dd),
            side: 1
          }).range(0)]) : Sd.none
        }
        get RW() {
          return this.view.state.doc.length ? Sd.none : this.placeholder
        }
      }, {
        RW: dd => dd.RW
      });
      return "string" == typeof dd ? [Jd, FN.contentAttributes.of({
        "aria-placeholder": dd
      })] : Jd
    }
    const iW = 2e3;

    function aW(dd, Jd) {
      let kd = dd.posAtCoords({
          x: Jd.clientX,
          y: Jd.clientY
        }, !1),
        Nd = dd.state.doc.lineAt(kd),
        Wd = kd - Nd.from,
        Pd = Wd > iW ? -1 : Wd == Nd.length ? function(dd, Jd) {
          let kd = dd.coordsAtPos(dd.viewport.from);
          return kd ? Math.round(Math.abs((kd.left - Jd) / dd.defaultCharacterWidth)) : -1
        }(dd, Jd.clientX) : (0, pd.V)(Nd.text, dd.state.tabSize, kd - Nd.from);
      return {
        line: Nd.number,
        col: Pd,
        off: Wd
      }
    }

    function MW(dd, Jd) {
      let kd = aW(dd, Jd),
        Nd = dd.state.selection;
      return kd ? {
        update(dd) {
          if (dd.docChanged) {
            let Jd = dd.changes.mapPos(dd.startState.doc.line(kd.line).from),
              pd = dd.state.doc.lineAt(Jd);
            kd = {
              line: pd.number,
              col: kd.col,
              off: Math.min(kd.off, pd.length)
            }, Nd = Nd.map(dd.changes)
          }
        },
        get(Jd, Wd, Pd) {
          let Zd = aW(dd, Jd);
          if (!Zd) return Nd;
          let gd = function(dd, Jd, kd) {
            let Nd = Math.min(Jd.line, kd.line),
              Wd = Math.max(Jd.line, kd.line),
              Pd = [];
            if (Jd.off > iW || kd.off > iW || Jd.col < 0 || kd.col < 0) {
              let Zd = Math.min(Jd.off, kd.off),
                gd = Math.max(Jd.off, kd.off);
              for (let Jd = Nd; Jd <= Wd; Jd++) {
                let kd = dd.doc.line(Jd);
                kd.length <= gd && Pd.push(pd.k.range(kd.from + Zd, kd.to + gd))
              }
            } else {
              let Zd = Math.min(Jd.col, kd.col),
                gd = Math.max(Jd.col, kd.col);
              for (let Jd = Nd; Jd <= Wd; Jd++) {
                let kd = dd.doc.line(Jd),
                  Nd = (0, pd.Z)(kd.text, Zd, dd.tabSize, !0);
                if (Nd < 0) Pd.push(pd.k.cursor(kd.to));
                else {
                  let Jd = (0, pd.Z)(kd.text, gd, dd.tabSize);
                  Pd.push(pd.k.range(kd.from + Nd, kd.from + Jd))
                }
              }
            }
            return Pd
          }(dd.state, kd, Zd);
          return gd.length ? Pd ? pd.k.create(gd.concat(Nd.UO)) : pd.k.create(gd) : Nd
        }
      } : null
    }

    function FW(dd) {
      let Jd = (null === dd || void 0 === dd ? void 0 : dd.eventFilter) || (dd => dd.altKey && 0 == dd.button);
      return FN.mouseSelectionStyle.of(((dd, kd) => Jd(kd) ? MW(dd, kd) : null))
    }
    const YW = {
        Alt: [18, dd => !!dd.altKey],
        Control: [17, dd => !!dd.ctrlKey],
        Shift: [16, dd => !!dd.shiftKey],
        Meta: [91, dd => !!dd.metaKey]
      },
      mW = {
        style: "cursor: crosshair"
      };

    function bW() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [Jd, kd] = YW[dd.key || "Alt"],
        pd = HJ.fromClass(class {
          constructor(dd) {
            this.view = dd, this.isDown = !1
          }
          set(dd) {
            this.isDown != dd && (this.isDown = dd, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(dd) {
              this.set(dd.keyCode == Jd || kd(dd))
            },
            keyup(dd) {
              dd.keyCode != Jd && kd(dd) || this.set(!1)
            },
            mousemove(dd) {
              this.set(kd(dd))
            }
          }
        });
      return [pd, FN.contentAttributes.of((dd => {
        var Jd;
        return (null === (Jd = dd.plugin(pd)) || void 0 === Jd ? void 0 : Jd.isDown) ? mW : null
      }))]
    }
    const SW = "-10000px";
    class jW {
      constructor(dd, Jd, kd, pd) {
        this.facet = Jd, this.createTooltipView = kd, this.removeTooltipView = pd, this.input = dd.state.facet(Jd), this.tooltips = this.input.filter((dd => dd));
        let Nd = null;
        this.tooltipViews = this.tooltips.map((dd => Nd = kd(dd, Nd)))
      }
      update(dd, Jd) {
        var kd;
        let pd = dd.state.facet(this.facet),
          Nd = pd.filter((dd => dd));
        if (pd === this.input) {
          for (let Jd of this.tooltipViews) Jd.update && Jd.update(dd);
          return !1
        }
        let Wd = [],
          Pd = Jd ? [] : null;
        for (let Zd = 0; Zd < Nd.length; Zd++) {
          let kd = Nd[Zd],
            pd = -1;
          if (kd) {
            for (let dd = 0; dd < this.tooltips.length; dd++) {
              let Jd = this.tooltips[dd];
              Jd && Jd.create == kd.create && (pd = dd)
            }
            if (pd < 0) Wd[Zd] = this.createTooltipView(kd, Zd ? Wd[Zd - 1] : null), Pd && (Pd[Zd] = !!kd.above);
            else {
              let kd = Wd[Zd] = this.tooltipViews[pd];
              Pd && (Pd[Zd] = Jd[pd]), kd.update && kd.update(dd)
            }
          }
        }
        for (let Zd of this.tooltipViews) Wd.indexOf(Zd) < 0 && (this.removeTooltipView(Zd), null === (kd = Zd.destroy) || void 0 === kd || kd.call(Zd));
        return Jd && (Pd.forEach(((dd, kd) => Jd[kd] = dd)), Jd.length = Pd.length), this.input = pd, this.tooltips = Nd, this.tooltipViews = Wd, !0
      }
    }

    function XW(dd) {
      let Jd = dd.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: Jd.clientHeight,
        right: Jd.clientWidth
      }
    }
    const fW = pd.o.define({
        combine: dd => {
          var Jd, kd, pd;
          return {
            position: Bd.ios ? "absolute" : (null === (Jd = dd.find((dd => dd.position))) || void 0 === Jd ? void 0 : Jd.position) || "fixed",
            parent: (null === (kd = dd.find((dd => dd.parent))) || void 0 === kd ? void 0 : kd.parent) || null,
            tooltipSpace: (null === (pd = dd.find((dd => dd.tooltipSpace))) || void 0 === pd ? void 0 : pd.tooltipSpace) || XW
          }
        }
      }),
      nW = new WeakMap,
      UW = HJ.fromClass(class {
        constructor(dd) {
          this.view = dd, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let Jd = dd.state.facet(fW);
          this.position = Jd.position, this.parent = Jd.parent, this.classes = dd.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new jW(dd, EW, ((dd, Jd) => this.createTooltip(dd, Jd)), (dd => {
            this.resizeObserver && this.resizeObserver.unobserve(dd.dom), dd.dom.remove()
          })), this.above = this.manager.tooltips.map((dd => !!dd.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((dd => {
            Date.now() > this.lastTransaction - 50 && dd.length > 0 && dd[dd.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), dd.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let dd of this.manager.tooltipViews) this.intersectionObserver.observe(dd.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(dd) {
          dd.transactions.length && (this.lastTransaction = Date.now());
          let Jd = this.manager.update(dd, this.above);
          Jd && this.observeIntersection();
          let kd = Jd || dd.geometryChanged,
            pd = dd.state.facet(fW);
          if (pd.position != this.position && !this.madeAbsolute) {
            this.position = pd.position;
            for (let dd of this.manager.tooltipViews) dd.dom.style.position = this.position;
            kd = !0
          }
          if (pd.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = pd.parent, this.createContainer();
            for (let dd of this.manager.tooltipViews) this.container.appendChild(dd.dom);
            kd = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          kd && this.maybeMeasure()
        }
        createTooltip(dd, Jd) {
          let kd = dd.create(this.view),
            pd = Jd ? Jd.dom : null;
          if (kd.dom.classList.add("cm-tooltip"), dd.arrow && !kd.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let dd = document.createElement("div");
            dd.className = "cm-tooltip-arrow", kd.dom.appendChild(dd)
          }
          return kd.dom.style.position = this.position, kd.dom.style.top = SW, kd.dom.style.left = "0px", this.container.insertBefore(kd.dom, pd), kd.mount && kd.mount(this.view), this.resizeObserver && this.resizeObserver.observe(kd.dom), kd
        }
        destroy() {
          var dd, Jd, kd;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let pd of this.manager.tooltipViews) pd.dom.remove(), null === (dd = pd.destroy) || void 0 === dd || dd.call(pd);
          this.parent && this.container.remove(), null === (Jd = this.resizeObserver) || void 0 === Jd || Jd.disconnect(), null === (kd = this.intersectionObserver) || void 0 === kd || kd.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let dd = 1,
            Jd = 1,
            kd = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: dd
            } = this.manager.tooltipViews[0];
            if (Bd.safari) {
              let Jd = dd.getBoundingClientRect();
              kd = Math.abs(Jd.top + 1e4) > 1 || Math.abs(Jd.left) > 1
            } else kd = !!dd.offsetParent && dd.offsetParent != this.container.ownerDocument.body
          }
          if (kd || "absolute" == this.position)
            if (this.parent) {
              let kd = this.parent.getBoundingClientRect();
              kd.width && kd.height && (dd = kd.width / this.parent.offsetWidth, Jd = kd.height / this.parent.offsetHeight)
            } else({
              scaleX: dd,
              scaleY: Jd
            } = this.view.viewState);
          let pd = this.view.scrollDOM.getBoundingClientRect(),
            Nd = gk(this.view);
          return {
            visible: {
              left: pd.left + Nd.left,
              top: pd.top + Nd.top,
              right: pd.right - Nd.right,
              bottom: pd.bottom - Nd.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((dd, Jd) => {
              let kd = this.manager.tooltipViews[Jd];
              return kd.getCoords ? kd.getCoords(dd.pos) : this.view.coordsAtPos(dd.pos)
            })),
            size: this.manager.tooltipViews.map((dd => {
              let {
                dom: Jd
              } = dd;
              return Jd.getBoundingClientRect()
            })),
            space: this.view.state.facet(fW).tooltipSpace(this.view),
            scaleX: dd,
            scaleY: Jd,
            makeAbsolute: kd
          }
        }
        writeMeasure(dd) {
          var Jd;
          if (dd.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let dd of this.manager.tooltipViews) dd.dom.style.position = "absolute"
          }
          let {
            visible: kd,
            space: pd,
            scaleX: Nd,
            scaleY: Wd
          } = dd, Pd = [];
          for (let Zd = 0; Zd < this.manager.tooltips.length; Zd++) {
            let gd = this.manager.tooltips[Zd],
              Cd = this.manager.tooltipViews[Zd],
              {
                dom: Kd
              } = Cd,
              od = dd.pos[Zd],
              ld = dd.size[Zd];
            if (!od || !1 !== gd.clip && (od.bottom <= Math.max(kd.top, pd.top) || od.top >= Math.min(kd.bottom, pd.bottom) || od.right < Math.max(kd.left, pd.left) - .1 || od.left > Math.min(kd.right, pd.right) + .1)) {
              Kd.style.top = SW;
              continue
            }
            let Qd = gd.arrow ? Cd.dom.querySelector(".cm-tooltip-arrow") : null,
              Ld = Qd ? 7 : 0,
              Od = ld.right - ld.left,
              ed = null !== (Jd = nW.get(Cd)) && void 0 !== Jd ? Jd : ld.bottom - ld.top,
              Rd = Cd.offset || TW,
              Id = this.view.textDirection == KJ.LTR,
              Gd = ld.width > pd.right - pd.left ? Id ? pd.left : pd.right - ld.width : Id ? Math.max(pd.left, Math.min(od.left - (Qd ? 14 : 0) + Rd.x, pd.right - Od)) : Math.min(Math.max(pd.left, od.left - Od + (Qd ? 14 : 0) - Rd.x), pd.right - Od),
              vd = this.above[Zd];
            !gd.strictSide && (vd ? od.top - ed - Ld - Rd.y < pd.top : od.bottom + ed + Ld + Rd.y > pd.bottom) && vd == pd.bottom - od.bottom > od.top - pd.top && (vd = this.above[Zd] = !vd);
            let xd = (vd ? od.top - pd.top : pd.bottom - od.bottom) - Ld;
            if (xd < ed && !1 !== Cd.resize) {
              if (xd < this.view.defaultLineHeight) {
                Kd.style.top = SW;
                continue
              }
              nW.set(Cd, ed), Kd.style.height = (ed = xd) / Wd + "px"
            } else Kd.style.height && (Kd.style.height = "");
            let qd = vd ? od.top - ed - Ld - Rd.y : od.bottom + Ld + Rd.y,
              Bd = Gd + Od;
            if (!0 !== Cd.overlap)
              for (let dd of Pd) dd.left < Bd && dd.right > Gd && dd.top < qd + ed && dd.bottom > qd && (qd = vd ? dd.top - ed - 2 - Ld : dd.bottom + Ld + 2);
            if ("absolute" == this.position ? (Kd.style.top = (qd - dd.parent.top) / Wd + "px", yW(Kd, (Gd - dd.parent.left) / Nd)) : (Kd.style.top = qd / Wd + "px", yW(Kd, Gd / Nd)), Qd) {
              let dd = od.left + (Id ? Rd.x : -Rd.x) - (Gd + 14 - 7);
              Qd.style.left = dd / Nd + "px"
            }!0 !== Cd.overlap && Pd.push({
              left: Gd,
              top: qd,
              right: Bd,
              bottom: qd + ed
            }), Kd.classList.toggle("cm-tooltip-above", vd), Kd.classList.toggle("cm-tooltip-below", !vd), Cd.positioned && Cd.positioned(dd.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let dd of this.manager.tooltipViews) dd.dom.style.top = SW
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function yW(dd, Jd) {
      let kd = parseInt(dd.style.left, 10);
      (isNaN(kd) || Math.abs(Jd - kd) > 1) && (dd.style.left = Jd + "px")
    }
    const DW = FN.baseTheme({
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
      TW = {
        x: 0,
        y: 0
      },
      EW = pd.o.define({
        enables: [UW, DW]
      }),
      cW = pd.o.define({
        combine: dd => dd.reduce(((dd, Jd) => dd.concat(Jd)), [])
      });
    class hW {
      static create(dd) {
        return new hW(dd)
      }
      constructor(dd) {
        this.view = dd, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new jW(dd, cW, ((dd, Jd) => this.createHostedView(dd, Jd)), (dd => dd.dom.remove()))
      }
      createHostedView(dd, Jd) {
        let kd = dd.create(this.view);
        return kd.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(kd.dom, Jd ? Jd.dom.nextSibling : this.dom.firstChild), this.mounted && kd.mount && kd.mount(this.view), kd
      }
      mount(dd) {
        for (let Jd of this.manager.tooltipViews) Jd.mount && Jd.mount(dd);
        this.mounted = !0
      }
      positioned(dd) {
        for (let Jd of this.manager.tooltipViews) Jd.positioned && Jd.positioned(dd)
      }
      update(dd) {
        this.manager.update(dd)
      }
      destroy() {
        var dd;
        for (let Jd of this.manager.tooltipViews) null === (dd = Jd.destroy) || void 0 === dd || dd.call(Jd)
      }
      passProp(dd) {
        let Jd;
        for (let kd of this.manager.tooltipViews) {
          let pd = kd[dd];
          if (void 0 !== pd)
            if (void 0 === Jd) Jd = pd;
            else if (Jd !== pd) return
        }
        return Jd
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
    const rW = EW.compute([cW], (dd => {
      let Jd = dd.facet(cW);
      return 0 === Jd.length ? null : {
        pos: Math.min(...Jd.map((dd => dd.pos))),
        end: Math.max(...Jd.map((dd => {
          var Jd;
          return null !== (Jd = dd.end) && void 0 !== Jd ? Jd : dd.pos
        }))),
        create: hW.create,
        above: Jd[0].above,
        arrow: Jd.some((dd => dd.arrow))
      }
    }));
    class uW {
      constructor(dd, Jd, kd, pd, Nd) {
        this.view = dd, this.source = Jd, this.field = kd, this.setHover = pd, this.hoverTime = Nd, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: dd.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), dd.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), dd.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let dd = Date.now() - this.lastMove.time;
        dd < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - dd) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: dd,
          lastMove: Jd
        } = this, kd = dd.docView.tile.nearest(Jd.target);
        if (!kd) return;
        let pd, Nd = 1;
        if (kd.isWidget()) pd = kd.posAtStart;
        else {
          if (pd = dd.posAtCoords(Jd), null == pd) return;
          let kd = dd.coordsAtPos(pd);
          if (!kd || Jd.y < kd.top || Jd.y > kd.bottom || Jd.x < kd.left - dd.defaultCharacterWidth || Jd.x > kd.right + dd.defaultCharacterWidth) return;
          let Wd = dd.bidiSpans(dd.state.doc.lineAt(pd)).find((dd => dd.from <= pd && dd.to >= pd)),
            Pd = Wd && Wd.dir == KJ.RTL ? -1 : 1;
          Nd = Jd.x < kd.left ? -Pd : Pd
        }
        let Wd = this.source(dd, pd, Nd);
        if (null === Wd || void 0 === Wd ? void 0 : Wd.then) {
          let Jd = this.pending = {
            pos: pd
          };
          Wd.then((kd => {
            this.pending == Jd && (this.pending = null, !kd || Array.isArray(kd) && !kd.length || dd.dispatch({
              effects: this.setHover.of(Array.isArray(kd) ? kd : [kd])
            }))
          }), (Jd => uJ(dd.state, Jd, "hover tooltip")))
        } else !Wd || Array.isArray(Wd) && !Wd.length || dd.dispatch({
          effects: this.setHover.of(Array.isArray(Wd) ? Wd : [Wd])
        })
      }
      get tooltip() {
        let dd = this.view.plugin(UW),
          Jd = dd ? dd.manager.tooltips.findIndex((dd => dd.create == hW.create)) : -1;
        return Jd > -1 ? dd.manager.tooltipViews[Jd] : null
      }
      mousemove(dd) {
        var Jd, kd;
        this.lastMove = {
          x: dd.clientX,
          y: dd.clientY,
          target: dd.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: pd,
          tooltip: Nd
        } = this;
        if (pd.length && Nd && ! function(dd, Jd) {
            let kd, {
              left: pd,
              right: Nd,
              top: Wd,
              bottom: Pd
            } = dd.getBoundingClientRect();
            if (kd = dd.querySelector(".cm-tooltip-arrow")) {
              let dd = kd.getBoundingClientRect();
              Wd = Math.min(dd.top, Wd), Pd = Math.max(dd.bottom, Pd)
            }
            return Jd.clientX >= pd - tW && Jd.clientX <= Nd + tW && Jd.clientY >= Wd - tW && Jd.clientY <= Pd + tW
          }(Nd.dom, dd) || this.pending) {
          let {
            pos: Nd
          } = pd[0] || this.pending, Wd = null !== (kd = null === (Jd = pd[0]) || void 0 === Jd ? void 0 : Jd.end) && void 0 !== kd ? kd : Nd;
          (Nd == Wd ? this.view.posAtCoords(this.lastMove) == Nd : function(dd, Jd, kd, pd, Nd) {
            let Wd = dd.scrollDOM.getBoundingClientRect(),
              Pd = dd.documentTop + dd.documentPadding.top + dd.contentHeight;
            if (Wd.left > pd || Wd.right < pd || Wd.top > Nd || Math.min(Wd.bottom, Pd) < Nd) return !1;
            let Zd = dd.posAtCoords({
              x: pd,
              y: Nd
            }, !1);
            return Zd >= Jd && Zd <= kd
          }(this.view, Nd, Wd, dd.clientX, dd.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(dd) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: Jd
        } = this;
        if (Jd.length) {
          let {
            tooltip: Jd
          } = this;
          Jd && Jd.dom.contains(dd.relatedTarget) ? this.watchTooltipLeave(Jd.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(dd) {
        let Jd = kd => {
          dd.removeEventListener("mouseleave", Jd), this.active.length && !this.view.dom.contains(kd.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        dd.addEventListener("mouseleave", Jd)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const tW = 4;

    function VW(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        kd = pd.C.define(),
        Nd = pd.E.define({
          create: () => [],
          update(dd, Nd) {
            if (dd.length && (Jd.hideOnChange && (Nd.docChanged || Nd.selection) ? dd = [] : Jd.hideOn && (dd = dd.filter((dd => !Jd.hideOn(Nd, dd)))), Nd.docChanged)) {
              let Jd = [];
              for (let kd of dd) {
                let dd = Nd.changes.mapPos(kd.pos, -1, pd.s.TrackDel);
                if (null != dd) {
                  let pd = Object.assign(Object.create(null), kd);
                  pd.pos = dd, null != pd.end && (pd.end = Nd.changes.mapPos(pd.end)), Jd.push(pd)
                }
              }
              dd = Jd
            }
            for (let Jd of Nd.effects) Jd.is(kd) && (dd = Jd.value), Jd.is(HW) && (dd = []);
            return dd
          },
          provide: dd => cW.from(dd)
        });
      return {
        active: Nd,
        extension: [Nd, HJ.define((pd => new uW(pd, dd, Nd, kd, Jd.hoverTime || 300))), rW]
      }
    }

    function zW(dd, Jd) {
      let kd = dd.plugin(UW);
      if (!kd) return null;
      let pd = kd.manager.tooltips.indexOf(Jd);
      return pd < 0 ? null : kd.manager.tooltipViews[pd]
    }
    const HW = pd.C.define();
    const wW = pd.o.define({
      combine(dd) {
        let Jd, kd;
        for (let pd of dd) Jd = Jd || pd.topContainer, kd = kd || pd.bottomContainer;
        return {
          topContainer: Jd,
          bottomContainer: kd
        }
      }
    });

    function AW(dd, Jd) {
      let kd = dd.plugin(dP),
        pd = kd ? kd.specs.indexOf(Jd) : -1;
      return pd > -1 ? kd.panels[pd] : null
    }
    const dP = HJ.fromClass(class {
      constructor(dd) {
        this.input = dd.state.facet(pP), this.specs = this.input.filter((dd => dd)), this.panels = this.specs.map((Jd => Jd(dd)));
        let Jd = dd.state.facet(wW);
        this.top = new JP(dd, !0, Jd.topContainer), this.bottom = new JP(dd, !1, Jd.bottomContainer), this.top.sync(this.panels.filter((dd => dd.top))), this.bottom.sync(this.panels.filter((dd => !dd.top)));
        for (let kd of this.panels) kd.dom.classList.add("cm-panel"), kd.mount && kd.mount()
      }
      update(dd) {
        let Jd = dd.state.facet(wW);
        this.top.container != Jd.topContainer && (this.top.sync([]), this.top = new JP(dd.view, !0, Jd.topContainer)), this.bottom.container != Jd.bottomContainer && (this.bottom.sync([]), this.bottom = new JP(dd.view, !1, Jd.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let kd = dd.state.facet(pP);
        if (kd != this.input) {
          let Jd = kd.filter((dd => dd)),
            pd = [],
            Nd = [],
            Wd = [],
            Pd = [];
          for (let kd of Jd) {
            let Jd, Zd = this.specs.indexOf(kd);
            Zd < 0 ? (Jd = kd(dd.view), Pd.push(Jd)) : (Jd = this.panels[Zd], Jd.update && Jd.update(dd)), pd.push(Jd), (Jd.top ? Nd : Wd).push(Jd)
          }
          this.specs = Jd, this.panels = pd, this.top.sync(Nd), this.bottom.sync(Wd);
          for (let dd of Pd) dd.dom.classList.add("cm-panel"), dd.mount && dd.mount()
        } else
          for (let pd of this.panels) pd.update && pd.update(dd)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: dd => FN.scrollMargins.of((Jd => {
        let kd = Jd.plugin(dd);
        return kd && {
          top: kd.top.scrollMargin(),
          bottom: kd.bottom.scrollMargin()
        }
      }))
    });
    class JP {
      constructor(dd, Jd, kd) {
        this.view = dd, this.top = Jd, this.container = kd, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(dd) {
        for (let Jd of this.panels) Jd.destroy && dd.indexOf(Jd) < 0 && Jd.destroy();
        this.panels = dd, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let dd = this.container || this.view.dom;
          dd.insertBefore(this.dom, this.top ? dd.firstChild : null)
        }
        let dd = this.dom.firstChild;
        for (let Jd of this.panels)
          if (Jd.dom.parentNode == this.dom) {
            for (; dd != Jd.dom;) dd = kP(dd);
            dd = dd.nextSibling
          } else this.dom.insertBefore(Jd.dom, dd);
        for (; dd;) dd = kP(dd)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let dd of this.classes.split(" ")) dd && this.container.classList.remove(dd);
          for (let dd of (this.classes = this.view.themeClasses).split(" ")) dd && this.container.classList.add(dd)
        }
      }
    }

    function kP(dd) {
      let Jd = dd.nextSibling;
      return dd.remove(), Jd
    }
    const pP = pd.o.define({
      enables: dP
    });

    function NP(dd, Jd) {
      let kd, Nd = new Promise((dd => kd = dd)),
        Wd = dd => function(dd, Jd, kd) {
          let pd = Jd.content ? Jd.content(dd, (() => Pd(null))) : null;
          if (!pd) {
            if (pd = (0, od.d)("form"), Jd.input) {
              let dd = (0, od.d)("input", Jd.input);
              /^(text|password|number|email|tel|url)$/.test(dd.type) && dd.classList.add("cm-textfield"), dd.name || (dd.name = "input"), pd.appendChild((0, od.d)("label", (Jd.label || "") + ": ", dd))
            } else pd.appendChild(document.createTextNode(Jd.label || ""));
            pd.appendChild(document.createTextNode(" ")), pd.appendChild((0, od.d)("button", {
              class: "cm-button",
              type: "submit"
            }, Jd.submitLabel || "OK"))
          }
          let Nd = "FORM" == pd.nodeName ? [pd] : pd.querySelectorAll("form");
          for (let Zd = 0; Zd < Nd.length; Zd++) {
            let dd = Nd[Zd];
            dd.addEventListener("keydown", (Jd => {
              27 == Jd.keyCode ? (Jd.preventDefault(), Pd(null)) : 13 == Jd.keyCode && (Jd.preventDefault(), Pd(dd))
            })), dd.addEventListener("submit", (Jd => {
              Jd.preventDefault(), Pd(dd)
            }))
          }
          let Wd = (0, od.d)("div", pd, (0, od.d)("button", {
            onclick: () => Pd(null),
            "aria-label": dd.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          Jd.class && (Wd.className = Jd.class);

          function Pd(Jd) {
            Wd.contains(Wd.ownerDocument.activeElement) && dd.focus(), kd(Jd)
          }
          return Wd.classList.add("cm-dialog"), {
            dom: Wd,
            top: Jd.top,
            mount: () => {
              if (Jd.focus) {
                let dd;
                dd = "string" == typeof Jd.focus ? pd.querySelector(Jd.focus) : pd.querySelector("input") || pd.querySelector("button"), dd && "select" in dd ? dd.select() : dd && "focus" in dd && dd.focus()
              }
            }
          }
        }(dd, Jd, kd);
      dd.state.field(WP, !1) ? dd.dispatch({
        effects: PP.of(Wd)
      }) : dd.dispatch({
        effects: pd.C.appendConfig.of(WP.init((() => [Wd])))
      });
      let Pd = ZP.of(Wd);
      return {
        close: Pd,
        result: Nd.then((Jd => ((dd.win.queueMicrotask || (Jd => dd.win.setTimeout(Jd, 10)))((() => {
          dd.state.field(WP).indexOf(Wd) > -1 && dd.dispatch({
            effects: Pd
          })
        })), Jd)))
      }
    }
    const WP = pd.E.define({
        create: () => [],
        update(dd, Jd) {
          for (let kd of Jd.effects) kd.is(PP) ? dd = [kd.value].concat(dd) : kd.is(ZP) && (dd = dd.filter((dd => dd != kd.value)));
          return dd
        },
        provide: dd => pP.computeN([dd], (Jd => Jd.field(dd)))
      }),
      PP = pd.C.define(),
      ZP = pd.C.define();
    class gP extends pd.A {
      compare(dd) {
        return this == dd || this.constructor == dd.constructor && this.eq(dd)
      }
      eq(dd) {
        return !1
      }
      destroy(dd) {}
    }
    gP.prototype.elementClass = "", gP.prototype.toDOM = void 0, gP.prototype.mapMode = pd.s.TrackBefore, gP.prototype.startSide = gP.prototype.endSide = -1, gP.prototype.point = !0;
    const CP = pd.o.define(),
      KP = pd.o.define(),
      oP = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => pd.x.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      lP = pd.o.define();

    function QP(dd) {
      return [OP(), lP.of({
        ...oP,
        ...dd
      })]
    }
    const LP = pd.o.define({
      combine: dd => dd.some((dd => dd))
    });

    function OP(dd) {
      let Jd = [eP];
      return dd && !1 === dd.fixed && Jd.push(LP.of(!0)), Jd
    }
    const eP = HJ.fromClass(class {
      constructor(dd) {
        this.view = dd, this.domAfter = null, this.prevViewport = dd.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = dd.state.facet(lP).map((Jd => new vP(dd, Jd))), this.fixed = !dd.state.facet(LP);
        for (let Jd of this.gutters) "after" == Jd.config.side ? this.getDOMAfter().appendChild(Jd.dom) : this.dom.appendChild(Jd.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), dd.scrollDOM.insertBefore(this.dom, dd.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(dd) {
        if (this.updateGutters(dd)) {
          let Jd = this.prevViewport,
            kd = dd.view.viewport,
            pd = Math.min(Jd.to, kd.to) - Math.max(Jd.from, kd.from);
          this.syncGutters(pd < .8 * (kd.to - kd.from))
        }
        if (dd.geometryChanged) {
          let dd = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = dd, this.domAfter && (this.domAfter.style.minHeight = dd)
        }
        this.view.state.facet(LP) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = dd.view.viewport
      }
      syncGutters(dd) {
        let Jd = this.dom.nextSibling;
        dd && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let kd = pd.x.iter(this.view.state.facet(CP), this.view.viewport.from),
          Nd = [],
          Wd = this.gutters.map((dd => new GP(dd, this.view.viewport, -this.view.documentPadding.top)));
        for (let pd of this.view.viewportLineBlocks)
          if (Nd.length && (Nd = []), Array.isArray(pd.type)) {
            let dd = !0;
            for (let Jd of pd.type)
              if (Jd.type == bd.Text && dd) {
                IP(kd, Nd, Jd.from);
                for (let dd of Wd) dd.line(this.view, Jd, Nd);
                dd = !1
              } else if (Jd.widget)
              for (let dd of Wd) dd.widget(this.view, Jd)
          } else if (pd.type == bd.Text) {
          IP(kd, Nd, pd.from);
          for (let dd of Wd) dd.line(this.view, pd, Nd)
        } else if (pd.widget)
          for (let dd of Wd) dd.widget(this.view, pd);
        for (let pd of Wd) pd.finish();
        dd && (this.view.scrollDOM.insertBefore(this.dom, Jd), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(dd) {
        let Jd = dd.startState.facet(lP),
          kd = dd.state.facet(lP),
          Nd = dd.docChanged || dd.heightChanged || dd.viewportChanged || !pd.x.eq(dd.startState.facet(CP), dd.state.facet(CP), dd.view.viewport.from, dd.view.viewport.to);
        if (Jd == kd)
          for (let pd of this.gutters) pd.update(dd) && (Nd = !0);
        else {
          Nd = !0;
          let pd = [];
          for (let Nd of kd) {
            let kd = Jd.indexOf(Nd);
            kd < 0 ? pd.push(new vP(this.view, Nd)) : (this.gutters[kd].update(dd), pd.push(this.gutters[kd]))
          }
          for (let dd of this.gutters) dd.dom.remove(), pd.indexOf(dd) < 0 && dd.destroy();
          for (let dd of pd) "after" == dd.config.side ? this.getDOMAfter().appendChild(dd.dom) : this.dom.appendChild(dd.dom);
          this.gutters = pd
        }
        return Nd
      }
      destroy() {
        for (let dd of this.gutters) dd.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: dd => FN.scrollMargins.of((Jd => {
        let kd = Jd.plugin(dd);
        if (!kd || 0 == kd.gutters.length || !kd.fixed) return null;
        let pd = kd.dom.offsetWidth * Jd.scaleX,
          Nd = kd.domAfter ? kd.domAfter.offsetWidth * Jd.scaleX : 0;
        return Jd.textDirection == KJ.LTR ? {
          left: pd,
          right: Nd
        } : {
          right: pd,
          left: Nd
        }
      }))
    });

    function RP(dd) {
      return Array.isArray(dd) ? dd : [dd]
    }

    function IP(dd, Jd, kd) {
      for (; dd.value && dd.from <= kd;) dd.from == kd && Jd.push(dd.value), dd.next()
    }
    class GP {
      constructor(dd, Jd, kd) {
        this.gutter = dd, this.height = kd, this.i = 0, this.cursor = pd.x.iter(dd.markers, Jd.from)
      }
      addElement(dd, Jd, kd) {
        let {
          gutter: pd
        } = this, Nd = (Jd.top - this.height) / dd.scaleY, Wd = Jd.height / dd.scaleY;
        if (this.i == pd.elements.length) {
          let Jd = new xP(dd, Wd, Nd, kd);
          pd.elements.push(Jd), pd.dom.appendChild(Jd.dom)
        } else pd.elements[this.i].update(dd, Wd, Nd, kd);
        this.height = Jd.bottom, this.i++
      }
      line(dd, Jd, kd) {
        let pd = [];
        IP(this.cursor, pd, Jd.from), kd.length && (pd = pd.concat(kd));
        let Nd = this.gutter.config.lineMarker(dd, Jd, pd);
        Nd && pd.unshift(Nd);
        let Wd = this.gutter;
        (0 != pd.length || Wd.config.renderEmptyElements) && this.addElement(dd, Jd, pd)
      }
      widget(dd, Jd) {
        let kd = this.gutter.config.widgetMarker(dd, Jd.widget, Jd),
          pd = kd ? [kd] : null;
        for (let Nd of dd.state.facet(KP)) {
          let kd = Nd(dd, Jd.widget, Jd);
          kd && (pd || (pd = [])).push(kd)
        }
        pd && this.addElement(dd, Jd, pd)
      }
      finish() {
        let dd = this.gutter;
        for (; dd.elements.length > this.i;) {
          let Jd = dd.elements.pop();
          dd.dom.removeChild(Jd.dom), Jd.destroy()
        }
      }
    }
    class vP {
      constructor(dd, Jd) {
        this.view = dd, this.config = Jd, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let kd in Jd.domEventHandlers) this.dom.addEventListener(kd, (pd => {
          let Nd, Wd = pd.target;
          if (Wd != this.dom && this.dom.contains(Wd)) {
            for (; Wd.parentNode != this.dom;) Wd = Wd.parentNode;
            let dd = Wd.getBoundingClientRect();
            Nd = (dd.top + dd.bottom) / 2
          } else Nd = pd.clientY;
          let Pd = dd.lineBlockAtHeight(Nd - dd.documentTop);
          Jd.domEventHandlers[kd](dd, Pd, pd) && pd.preventDefault()
        }));
        this.markers = RP(Jd.markers(dd)), Jd.initialSpacer && (this.spacer = new xP(dd, 0, 0, [Jd.initialSpacer(dd)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(dd) {
        let Jd = this.markers;
        if (this.markers = RP(this.config.markers(dd.view)), this.spacer && this.config.updateSpacer) {
          let Jd = this.config.updateSpacer(this.spacer.markers[0], dd);
          Jd != this.spacer.markers[0] && this.spacer.update(dd.view, 0, 0, [Jd])
        }
        let kd = dd.view.viewport;
        return !pd.x.eq(this.markers, Jd, kd.from, kd.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(dd)
      }
      destroy() {
        for (let dd of this.elements) dd.destroy()
      }
    }
    class xP {
      constructor(dd, Jd, kd, pd) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(dd, Jd, kd, pd)
      }
      update(dd, Jd, kd, pd) {
        this.height != Jd && (this.height = Jd, this.dom.style.height = Jd + "px"), this.above != kd && (this.dom.style.marginTop = (this.above = kd) ? kd + "px" : ""),
          function(dd, Jd) {
            if (dd.length != Jd.length) return !1;
            for (let kd = 0; kd < dd.length; kd++)
              if (!dd[kd].compare(Jd[kd])) return !1;
            return !0
          }(this.markers, pd) || this.setMarkers(dd, pd)
      }
      setMarkers(dd, Jd) {
        let kd = "cm-gutterElement",
          pd = this.dom.firstChild;
        for (let Nd = 0, Wd = 0;;) {
          let Pd = Wd,
            Zd = Nd < Jd.length ? Jd[Nd++] : null,
            gd = !1;
          if (Zd) {
            let dd = Zd.elementClass;
            dd && (kd += " " + dd);
            for (let Jd = Wd; Jd < this.markers.length; Jd++)
              if (this.markers[Jd].compare(Zd)) {
                Pd = Jd, gd = !0;
                break
              }
          } else Pd = this.markers.length;
          for (; Wd < Pd;) {
            let dd = this.markers[Wd++];
            if (dd.toDOM) {
              dd.destroy(pd);
              let Jd = pd.nextSibling;
              pd.remove(), pd = Jd
            }
          }
          if (!Zd) break;
          Zd.toDOM && (gd ? pd = pd.nextSibling : this.dom.insertBefore(Zd.toDOM(dd), pd)), gd && Wd++
        }
        this.dom.className = kd, this.markers = Jd
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const qP = pd.o.define(),
      BP = pd.o.define(),
      sP = pd.o.define({
        combine: dd => (0, pd.R)(dd, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(dd, Jd) {
            let kd = Object.assign({}, dd);
            for (let pd in Jd) {
              let dd = kd[pd],
                Nd = Jd[pd];
              kd[pd] = dd ? (Jd, kd, pd) => dd(Jd, kd, pd) || Nd(Jd, kd, pd) : Nd
            }
            return kd
          }
        })
      });
    class iP extends gP {
      constructor(dd) {
        super(), this.number = dd
      }
      eq(dd) {
        return this.number == dd.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function aP(dd, Jd) {
      return dd.state.facet(sP).formatNumber(Jd, dd.state)
    }
    const MP = lP.compute([sP], (dd => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: dd => dd.state.facet(qP),
      lineMarker: (dd, Jd, kd) => kd.some((dd => dd.toDOM)) ? null : new iP(aP(dd, dd.state.doc.lineAt(Jd.from).number)),
      widgetMarker: (dd, Jd, kd) => {
        for (let pd of dd.state.facet(BP)) {
          let Nd = pd(dd, Jd, kd);
          if (Nd) return Nd
        }
        return null
      },
      lineMarkerChange: dd => dd.startState.facet(sP) != dd.state.facet(sP),
      initialSpacer: dd => new iP(aP(dd, YP(dd.state.doc.lines))),
      updateSpacer(dd, Jd) {
        let kd = aP(Jd.view, YP(Jd.view.state.doc.lines));
        return kd == dd.number ? dd : new iP(kd)
      },
      domEventHandlers: dd.facet(sP).domEventHandlers,
      side: "before"
    })));

    function FP() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [sP.of(dd), OP(), MP]
    }

    function YP(dd) {
      let Jd = 9;
      for (; Jd < dd;) Jd = 10 * Jd + 9;
      return Jd
    }
    const mP = new class extends gP {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      bP = CP.compute(["selection"], (dd => {
        let Jd = [],
          kd = -1;
        for (let pd of dd.selection.UO) {
          let Nd = dd.doc.lineAt(pd.head).from;
          Nd > kd && (kd = Nd, Jd.push(mP.range(Nd)))
        }
        return pd.x.of(Jd)
      }));

    function SP() {
      return bP
    }
  },
  41306: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      e: () => Qd,
      f: () => Pd,
      g: () => Kd,
      i: () => Cd,
      m: () => jd,
      o: () => fd,
      q: () => Xd,
      s: () => Ld
    });
    const pd = 1024;
    let Nd = 0;
    class Wd {
      constructor(dd, Jd) {
        this.from = dd, this.to = Jd
      }
    }
    class Pd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Nd++, this.perNode = !!dd.perNode, this.deserialize = dd.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = dd.combine || null
      }
      add(dd) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof dd && (dd = Cd.match(dd)), Jd => {
          let kd = dd(Jd);
          return void 0 === kd ? null : [this, kd]
        }
      }
    }
    Pd.closedBy = new Pd({
      deserialize: dd => dd.split(" ")
    }), Pd.openedBy = new Pd({
      deserialize: dd => dd.split(" ")
    }), Pd.group = new Pd({
      deserialize: dd => dd.split(" ")
    }), Pd.isolate = new Pd({
      deserialize: dd => {
        if (dd && "rtl" != dd && "ltr" != dd && "auto" != dd) throw new RangeError("Invalid value for isolate: " + dd);
        return dd || "auto"
      }
    }), Pd.contextHash = new Pd({
      perNode: !0
    }), Pd.lookAhead = new Pd({
      perNode: !0
    }), Pd.mounted = new Pd({
      perNode: !0
    });
    class Zd {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = dd, this.overlay = Jd, this.parser = kd, this.bracketed = pd
      }
      static get(dd) {
        return dd && dd.props && dd.props[Pd.mounted.id]
      }
    }
    const gd = Object.create(null);
    class Cd {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = dd, this.props = Jd, this.id = kd, this.flags = pd
      }
      static define(dd) {
        let Jd = dd.props && dd.props.length ? Object.create(null) : gd,
          kd = (dd.top ? 1 : 0) | (dd.skipped ? 2 : 0) | (dd.error ? 4 : 0) | (null == dd.name ? 8 : 0),
          pd = new Cd(dd.name || "", Jd, dd.id, kd);
        if (dd.props)
          for (let Nd of dd.props)
            if (Array.isArray(Nd) || (Nd = Nd(pd)), Nd) {
              if (Nd[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              Jd[Nd[0].id] = Nd[1]
            } return pd
      }
      prop(dd) {
        return this.props[dd.id]
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
      is(dd) {
        if ("string" == typeof dd) {
          if (this.name == dd) return !0;
          let Jd = this.prop(Pd.group);
          return !!Jd && Jd.indexOf(dd) > -1
        }
        return this.id == dd
      }
      static match(dd) {
        let Jd = Object.create(null);
        for (let kd in dd)
          for (let pd of kd.split(" ")) Jd[pd] = dd[kd];
        return dd => {
          for (let kd = dd.prop(Pd.group), pd = -1; pd < (kd ? kd.length : 0); pd++) {
            let Nd = Jd[pd < 0 ? dd.name : kd[pd]];
            if (Nd) return Nd
          }
        }
      }
    }
    Cd.none = new Cd("", Object.create(null), 0, 8);
    class Kd {
      constructor(dd) {
        this.types = dd;
        for (let Jd = 0; Jd < dd.length; Jd++)
          if (dd[Jd].id != Jd) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let dd = [];
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        for (let Nd of this.types) {
          let Jd = null;
          for (let dd of kd) {
            let kd = dd(Nd);
            if (kd) {
              Jd || (Jd = Object.assign({}, Nd.props));
              let dd = kd[1],
                pd = kd[0];
              pd.combine && pd.id in Jd && (dd = pd.combine(Jd[pd.id], dd)), Jd[pd.id] = dd
            }
          }
          dd.push(Jd ? new Cd(Nd.name, Jd, Nd.id, Nd.flags) : Nd)
        }
        return new Kd(dd)
      }
    }
    const od = new WeakMap,
      ld = new WeakMap;
    var Qd;
    ! function(dd) {
      dd[dd.ExcludeBuffers = 1] = "ExcludeBuffers", dd[dd.IncludeAnonymous = 2] = "IncludeAnonymous", dd[dd.IgnoreMounts = 4] = "IgnoreMounts", dd[dd.IgnoreOverlays = 8] = "IgnoreOverlays", dd[dd.EnterBracketed = 16] = "EnterBracketed"
    }(Qd || (Qd = {}));
    class Ld {
      constructor(dd, Jd, kd, pd, Nd) {
        if (this.type = dd, this.children = Jd, this.positions = kd, this.length = pd, this.props = null, Nd && Nd.length) {
          this.props = Object.create(null);
          for (let [dd, Jd] of Nd) this.props["number" == typeof dd ? dd : dd.id] = Jd
        }
      }
      toString() {
        let dd = Zd.get(this);
        if (dd && !dd.overlay) return dd.tree.toString();
        let Jd = "";
        for (let kd of this.children) {
          let dd = kd.toString();
          dd && (Jd && (Jd += ","), Jd += dd)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (Jd.length ? "(" + Jd + ")" : "") : Jd
      }
      cursor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Fd(this.topNode, dd)
      }
      cursorAt(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = od.get(this) || this.topNode,
          pd = new Fd(kd);
        return pd.moveTo(dd, Jd), od.set(this, pd._tree), pd
      }
      get topNode() {
        return new vd(this, 0, 0, null)
      }
      resolve(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = Id(od.get(this) || this.topNode, dd, Jd, !1);
        return od.set(this, kd), kd
      }
      resolveInner(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = Id(ld.get(this) || this.topNode, dd, Jd, !0);
        return ld.set(this, kd), kd
      }
      resolveStack(dd) {
        return function(dd, Jd, kd) {
          let pd = dd.resolveInner(Jd, kd),
            Nd = null;
          for (let Wd = pd instanceof vd ? pd : pd.context.parent; Wd; Wd = Wd.parent)
            if (Wd.index < 0) {
              let dd = Wd.parent;
              (Nd || (Nd = [pd])).push(dd.resolve(Jd, kd)), Wd = dd
            } else {
              let dd = Zd.get(Wd.tree);
              if (dd && dd.overlay && dd.overlay[0].from <= Jd && dd.overlay[dd.overlay.length - 1].to >= Jd) {
                let Pd = new vd(dd.tree, dd.overlay[0].from + Wd.from, -1, Wd);
                (Nd || (Nd = [pd])).push(Id(Pd, Jd, kd, !1))
              }
            } return Nd ? ad(Nd) : pd
        }(this, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(dd) {
        let {
          enter: Jd,
          leave: kd,
          from: pd = 0,
          to: Nd = this.length
        } = dd, Wd = dd.mode || 0, Pd = (Wd & Qd.IncludeAnonymous) > 0;
        for (let Zd = this.cursor(Wd | Qd.IncludeAnonymous);;) {
          let dd = !1;
          if (Zd.from <= Nd && Zd.to >= pd && (!Pd && Zd.type.isAnonymous || !1 !== Jd(Zd))) {
            if (Zd.firstChild()) continue;
            dd = !0
          }
          for (; dd && kd && (Pd || !Zd.type.isAnonymous) && kd(Zd), !Zd.nextSibling();) {
            if (!Zd.parent()) return;
            dd = !0
          }
        }
      }
      prop(dd) {
        return dd.perNode ? this.props ? this.props[dd.id] : void 0 : this.type.prop(dd)
      }
      get propValues() {
        let dd = [];
        if (this.props)
          for (let Jd in this.props) dd.push([+Jd, this.props[Jd]]);
        return dd
      }
      balance() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Sd(Cd.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((dd, Jd, kd) => new Ld(this.type, dd, Jd, kd, this.propValues)), dd.makeTree || ((dd, Jd, kd) => new Ld(Cd.none, dd, Jd, kd)))
      }
      static build(dd) {
        return function(dd) {
          var Jd;
          let {
            buffer: kd,
            nodeSet: Nd,
            maxBufferLength: Wd = pd,
            reused: Zd = [],
            minRepeatType: gd = Nd.types.length
          } = dd, Cd = Array.isArray(kd) ? new Od(kd, kd.length) : kd, Kd = Nd.types, od = 0, ld = 0;

          function Qd(dd, Jd, kd, pd, Pd, Ld) {
            let {
              id: Od,
              start: Bd,
              end: sd,
              size: ad
            } = Cd, Md = ld, Fd = od;
            if (ad < 0) {
              if (Cd.next(), -1 == ad) {
                let Jd = Zd[Od];
                return kd.push(Jd), void pd.push(Bd - dd)
              }
              if (-3 == ad) return void(od = Od);
              if (-4 == ad) return void(ld = Od);
              throw new RangeError(`Unrecognized record size: ${ad}`)
            }
            let Yd, md, bd = Kd[Od],
              jd = Bd - dd;
            if (sd - Bd <= Wd && (md = xd(Cd.pos - Jd, Pd))) {
              let Jd = new Uint16Array(md.size - md.skip),
                kd = Cd.pos - md.size,
                pd = Jd.length;
              for (; Cd.pos > kd;) pd = qd(md.start, Jd, pd);
              Yd = new ed(Jd, sd - md.start, Nd), jd = md.start - dd
            } else {
              let dd = Cd.pos - ad;
              Cd.next();
              let Jd = [],
                kd = [],
                pd = Od >= gd ? Od : -1,
                Nd = 0,
                Pd = sd;
              for (; Cd.pos > dd;) pd >= 0 && Cd.id == pd && Cd.size >= 0 ? (Cd.end <= Pd - Wd && (Gd(Jd, kd, Bd, Nd, Cd.end, Pd, pd, Md, Fd), Nd = Jd.length, Pd = Cd.end), Cd.next()) : Ld > 2500 ? Rd(Bd, dd, Jd, kd) : Qd(Bd, dd, Jd, kd, pd, Ld + 1);
              if (pd >= 0 && Nd > 0 && Nd < Jd.length && Gd(Jd, kd, Bd, Nd, Bd, Pd, pd, Md, Fd), Jd.reverse(), kd.reverse(), pd > -1 && Nd > 0) {
                let dd = Id(bd, Fd);
                Yd = Sd(bd, Jd, kd, 0, Jd.length, 0, sd - Bd, dd, dd)
              } else Yd = vd(bd, Jd, kd, sd - Bd, Md - sd, Fd)
            }
            kd.push(Yd), pd.push(jd)
          }

          function Rd(dd, Jd, kd, pd) {
            let Pd = [],
              Zd = 0,
              gd = -1;
            for (; Cd.pos > Jd;) {
              let {
                id: dd,
                start: Jd,
                end: kd,
                size: pd
              } = Cd;
              if (pd > 4) Cd.next();
              else {
                if (gd > -1 && Jd < gd) break;
                gd < 0 && (gd = kd - Wd), Pd.push(dd, Jd, kd), Zd++, Cd.next()
              }
            }
            if (Zd) {
              let Jd = new Uint16Array(4 * Zd),
                Wd = Pd[Pd.length - 2];
              for (let dd = Pd.length - 3, kd = 0; dd >= 0; dd -= 3) Jd[kd++] = Pd[dd], Jd[kd++] = Pd[dd + 1] - Wd, Jd[kd++] = Pd[dd + 2] - Wd, Jd[kd++] = kd;
              kd.push(new ed(Jd, Pd[2] - Wd, Nd)), pd.push(Wd - dd)
            }
          }

          function Id(dd, Jd) {
            return (kd, pd, Nd) => {
              let Wd, Zd, gd = 0,
                Cd = kd.length - 1;
              if (Cd >= 0 && (Wd = kd[Cd]) instanceof Ld) {
                if (!Cd && Wd.type == dd && Wd.length == Nd) return Wd;
                (Zd = Wd.prop(Pd.lookAhead)) && (gd = pd[Cd] + Wd.length + Zd)
              }
              return vd(dd, kd, pd, Nd, gd, Jd)
            }
          }

          function Gd(dd, Jd, kd, pd, Wd, Pd, Zd, gd, Cd) {
            let Kd = [],
              od = [];
            for (; dd.length > pd;) Kd.push(dd.pop()), od.push(Jd.pop() + kd - Wd);
            dd.push(vd(Nd.types[Zd], Kd, od, Pd - Wd, gd - Pd, Cd)), Jd.push(Wd - kd)
          }

          function vd(dd, Jd, kd, pd, Nd, Wd, Zd) {
            if (Wd) {
              let dd = [Pd.contextHash, Wd];
              Zd = Zd ? [dd].concat(Zd) : [dd]
            }
            if (Nd > 25) {
              let dd = [Pd.lookAhead, Nd];
              Zd = Zd ? [dd].concat(Zd) : [dd]
            }
            return new Ld(dd, Jd, kd, pd, Zd)
          }

          function xd(dd, Jd) {
            let kd = Cd.fork(),
              pd = 0,
              Nd = 0,
              Pd = 0,
              Zd = kd.end - Wd,
              Kd = {
                size: 0,
                start: 0,
                skip: 0
              };
            dd: for (let Wd = kd.pos - dd; kd.pos > Wd;) {
              let dd = kd.size;
              if (kd.id == Jd && dd >= 0) {
                Kd.size = pd, Kd.start = Nd, Kd.skip = Pd, Pd += 4, pd += 4, kd.next();
                continue
              }
              let Cd = kd.pos - dd;
              if (dd < 0 || Cd < Wd || kd.start < Zd) break;
              let od = kd.id >= gd ? 4 : 0,
                ld = kd.start;
              for (kd.next(); kd.pos > Cd;) {
                if (kd.size < 0) {
                  if (-3 != kd.size && -4 != kd.size) break dd;
                  od += 4
                } else kd.id >= gd && (od += 4);
                kd.next()
              }
              Nd = ld, pd += dd, Pd += od
            }
            return (Jd < 0 || pd == dd) && (Kd.size = pd, Kd.start = Nd, Kd.skip = Pd), Kd.size > 4 ? Kd : void 0
          }

          function qd(dd, Jd, kd) {
            let {
              id: pd,
              start: Nd,
              end: Wd,
              size: Pd
            } = Cd;
            if (Cd.next(), Pd >= 0 && pd < gd) {
              let Zd = kd;
              if (Pd > 4) {
                let pd = Cd.pos - (Pd - 4);
                for (; Cd.pos > pd;) kd = qd(dd, Jd, kd)
              }
              Jd[--kd] = Zd, Jd[--kd] = Wd - dd, Jd[--kd] = Nd - dd, Jd[--kd] = pd
            } else - 3 == Pd ? od = pd : -4 == Pd && (ld = pd);
            return kd
          }
          let Bd = [],
            sd = [];
          for (; Cd.pos > 0;) Qd(dd.start || 0, dd.bufferStart || 0, Bd, sd, -1, 0);
          let ad = null !== (Jd = dd.length) && void 0 !== Jd ? Jd : Bd.length ? sd[0] + Bd[0].length : 0;
          return new Ld(Kd[dd.topID], Bd.reverse(), sd.reverse(), ad)
        }(dd)
      }
    }
    Ld.empty = new Ld(Cd.none, [], [], 0);
    class Od {
      constructor(dd, Jd) {
        this.buffer = dd, this.index = Jd
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
        return new Od(this.buffer, this.index)
      }
    }
    class ed {
      constructor(dd, Jd, kd) {
        this.buffer = dd, this.length = Jd, this.set = kd
      }
      get type() {
        return Cd.none
      }
      toString() {
        let dd = [];
        for (let Jd = 0; Jd < this.buffer.length;) dd.push(this.childString(Jd)), Jd = this.buffer[Jd + 3];
        return dd.join(",")
      }
      childString(dd) {
        let Jd = this.buffer[dd],
          kd = this.buffer[dd + 3],
          pd = this.set.types[Jd],
          Nd = pd.name;
        if (/\W/.test(Nd) && !pd.isError && (Nd = JSON.stringify(Nd)), kd == (dd += 4)) return Nd;
        let Wd = [];
        for (; dd < kd;) Wd.push(this.childString(dd)), dd = this.buffer[dd + 3];
        return Nd + "(" + Wd.join(",") + ")"
      }
      findChild(dd, Jd, kd, pd, Nd) {
        let {
          buffer: Wd
        } = this, Pd = -1;
        for (let Zd = dd; Zd != Jd && !(Rd(Nd, pd, Wd[Zd + 1], Wd[Zd + 2]) && (Pd = Zd, kd > 0)); Zd = Wd[Zd + 3]);
        return Pd
      }
      slice(dd, Jd, kd) {
        let pd = this.buffer,
          Nd = new Uint16Array(Jd - dd),
          Wd = 0;
        for (let Pd = dd, Zd = 0; Pd < Jd;) {
          Nd[Zd++] = pd[Pd++], Nd[Zd++] = pd[Pd++] - kd;
          let Jd = Nd[Zd++] = pd[Pd++] - kd;
          Nd[Zd++] = pd[Pd++] - dd, Wd = Math.max(Wd, Jd)
        }
        return new ed(Nd, Wd, this.set)
      }
    }

    function Rd(dd, Jd, kd, pd) {
      switch (dd) {
        case -2:
          return kd < Jd;
        case -1:
          return pd >= Jd && kd < Jd;
        case 0:
          return kd < Jd && pd > Jd;
        case 1:
          return kd <= Jd && pd > Jd;
        case 2:
          return pd > Jd;
        case 4:
          return !0
      }
    }

    function Id(dd, Jd, kd, pd) {
      for (var Nd; dd.from == dd.to || (kd < 1 ? dd.from >= Jd : dd.from > Jd) || (kd > -1 ? dd.to <= Jd : dd.to < Jd);) {
        let Jd = !pd && dd instanceof vd && dd.index < 0 ? null : dd.parent;
        if (!Jd) return dd;
        dd = Jd
      }
      let Wd = pd ? 0 : Qd.IgnoreOverlays;
      if (pd)
        for (let Pd = dd, Zd = Pd.parent; Zd; Pd = Zd, Zd = Pd.parent) Pd instanceof vd && Pd.index < 0 && (null === (Nd = Zd.enter(Jd, kd, Wd)) || void 0 === Nd ? void 0 : Nd.from) != Pd.from && (dd = Zd);
      for (;;) {
        let pd = dd.enter(Jd, kd, Wd);
        if (!pd) return dd;
        dd = pd
      }
    }
    class Gd {
      cursor() {
        return new Fd(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(dd) {
        let Jd = xd(this, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return Jd.length ? Jd[0] : null
      }
      getChildren(dd) {
        return xd(this, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(dd) {
        return Id(this, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(dd) {
        return Id(this, dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(dd) {
        return qd(this.parent, dd)
      }
      enterUnfinishedNodesBefore(dd) {
        let Jd = this.childBefore(dd),
          kd = this;
        for (; Jd;) {
          let dd = Jd.lastChild;
          if (!dd || dd.to != Jd.to) break;
          dd.type.isError && dd.from == dd.to ? (kd = Jd, Jd = dd.prevSibling) : Jd = dd
        }
        return kd
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class vd extends Gd {
      constructor(dd, Jd, kd, pd) {
        super(), this._tree = dd, this.from = Jd, this.index = kd, this._parent = pd
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
      nextChild(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let Wd = this;;) {
          for (let {
              children: Pd,
              positions: gd
            } = Wd._tree, Cd = Jd > 0 ? Pd.length : -1; dd != Cd; dd += Jd) {
            let Cd, Kd = Pd[dd],
              od = gd[dd] + Wd.from;
            if (Nd & Qd.EnterBracketed && Kd instanceof Ld && (Cd = Zd.get(Kd)) && !Cd.overlay && Cd.bracketed && kd >= od && kd <= od + Kd.length || Rd(pd, kd, od, od + Kd.length))
              if (Kd instanceof ed) {
                if (Nd & Qd.ExcludeBuffers) continue;
                let Pd = Kd.findChild(0, Kd.buffer.length, Jd, kd - od, pd);
                if (Pd > -1) return new sd(new Bd(Wd, Kd, dd, od), null, Pd)
              } else if (Nd & Qd.IncludeAnonymous || !Kd.type.isAnonymous || Yd(Kd)) {
              let Pd;
              if (!(Nd & Qd.IgnoreMounts) && (Pd = Zd.get(Kd)) && !Pd.overlay) return new vd(Pd.tree, od, dd, Wd);
              let gd = new vd(Kd, od, dd, Wd);
              return Nd & Qd.IncludeAnonymous || !gd.type.isAnonymous ? gd : gd.nextChild(Jd < 0 ? Kd.children.length - 1 : 0, Jd, kd, pd, Nd)
            }
          }
          if (Nd & Qd.IncludeAnonymous || !Wd.type.isAnonymous) return null;
          if (dd = Wd.index >= 0 ? Wd.index + Jd : Jd < 0 ? -1 : Wd._parent._tree.children.length, Wd = Wd._parent, !Wd) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(dd) {
        return this.nextChild(0, 1, dd, 2)
      }
      childBefore(dd) {
        return this.nextChild(this._tree.children.length - 1, -1, dd, -2)
      }
      prop(dd) {
        return this._tree.prop(dd)
      }
      enter(dd, Jd) {
        let kd, pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(pd & Qd.IgnoreOverlays) && (kd = Zd.get(this._tree)) && kd.overlay) {
          let Nd = dd - this.from,
            Wd = pd & Qd.EnterBracketed && kd.bracketed;
          for (let {
              from: dd,
              to: pd
            }
            of kd.overlay)
            if ((Jd > 0 || Wd ? dd <= Nd : dd < Nd) && (Jd < 0 || Wd ? pd >= Nd : pd > Nd)) return new vd(kd.tree, kd.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, dd, Jd, pd)
      }
      nextSignificantParent() {
        let dd = this;
        for (; dd.type.isAnonymous && dd._parent;) dd = dd._parent;
        return dd
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

    function xd(dd, Jd, kd, pd) {
      let Nd = dd.cursor(),
        Wd = [];
      if (!Nd.firstChild()) return Wd;
      if (null != kd)
        for (let Pd = !1; !Pd;)
          if (Pd = Nd.type.is(kd), !Nd.nextSibling()) return Wd;
      for (;;) {
        if (null != pd && Nd.type.is(pd)) return Wd;
        if (Nd.type.is(Jd) && Wd.push(Nd.node), !Nd.nextSibling()) return null == pd ? Wd : []
      }
    }

    function qd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jd.length - 1;
      for (let pd = dd; kd >= 0; pd = pd.parent) {
        if (!pd) return !1;
        if (!pd.type.isAnonymous) {
          if (Jd[kd] && Jd[kd] != pd.name) return !1;
          kd--
        }
      }
      return !0
    }
    class Bd {
      constructor(dd, Jd, kd, pd) {
        this.parent = dd, this.buffer = Jd, this.index = kd, this.start = pd
      }
    }
    class sd extends Gd {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(dd, Jd, kd) {
        super(), this.context = dd, this._parent = Jd, this.index = kd, this.type = dd.buffer.set.types[dd.buffer.buffer[kd]]
      }
      child(dd, Jd, kd) {
        let {
          buffer: pd
        } = this.context, Nd = pd.findChild(this.index + 4, pd.buffer[this.index + 3], dd, Jd - this.context.start, kd);
        return Nd < 0 ? null : new sd(this.context, this, Nd)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(dd) {
        return this.child(1, dd, 2)
      }
      childBefore(dd) {
        return this.child(-1, dd, -2)
      }
      prop(dd) {
        return this.type.prop(dd)
      }
      enter(dd, Jd) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Qd.ExcludeBuffers) return null;
        let {
          buffer: kd
        } = this.context, pd = kd.findChild(this.index + 4, kd.buffer[this.index + 3], Jd > 0 ? 1 : -1, dd - this.context.start, Jd);
        return pd < 0 ? null : new sd(this.context, this, pd)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(dd) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + dd, dd, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: dd
        } = this.context, Jd = dd.buffer[this.index + 3];
        return Jd < (this._parent ? dd.buffer[this._parent.index + 3] : dd.buffer.length) ? new sd(this.context, this._parent, Jd) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: dd
        } = this.context, Jd = this._parent ? this._parent.index + 4 : 0;
        return this.index == Jd ? this.externalSibling(-1) : new sd(this.context, this._parent, dd.findChild(Jd, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let dd = [],
          Jd = [],
          {
            buffer: kd
          } = this.context,
          pd = this.index + 4,
          Nd = kd.buffer[this.index + 3];
        if (Nd > pd) {
          let Wd = kd.buffer[this.index + 1];
          dd.push(kd.slice(pd, Nd, Wd)), Jd.push(0)
        }
        return new Ld(this.type, dd, Jd, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function ad(dd) {
      if (!dd.length) return null;
      let Jd = 0,
        kd = dd[0];
      for (let Wd = 1; Wd < dd.length; Wd++) {
        let pd = dd[Wd];
        (pd.from > kd.from || pd.to < kd.to) && (kd = pd, Jd = Wd)
      }
      let pd = kd instanceof vd && kd.index < 0 ? null : kd.parent,
        Nd = dd.slice();
      return pd ? Nd[Jd] = pd : Nd.splice(Jd, 1), new Md(Nd, kd)
    }
    class Md {
      constructor(dd, Jd) {
        this.heads = dd, this.node = Jd
      }
      get next() {
        return ad(this.heads)
      }
    }
    class Fd {
      get name() {
        return this.type.name
      }
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = Jd & ~Qd.EnterBracketed, dd instanceof vd) this.yieldNode(dd);
        else {
          this._tree = dd.context.parent, this.buffer = dd.context;
          for (let Jd = dd._parent; Jd; Jd = Jd._parent) this.stack.unshift(Jd.index);
          this.bufferNode = dd, this.yieldBuf(dd.index)
        }
      }
      yieldNode(dd) {
        return !!dd && (this._tree = dd, this.type = dd.type, this.from = dd.from, this.to = dd.to, !0)
      }
      yieldBuf(dd, Jd) {
        this.index = dd;
        let {
          start: kd,
          buffer: pd
        } = this.buffer;
        return this.type = Jd || pd.set.types[pd.buffer[dd]], this.from = kd + pd.buffer[dd + 1], this.to = kd + pd.buffer[dd + 2], !0
      }
      yield(dd) {
        return !!dd && (dd instanceof vd ? (this.buffer = null, this.yieldNode(dd)) : (this.buffer = dd.context, this.yieldBuf(dd.index, dd.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(dd, Jd, kd) {
        if (!this.buffer) return this.yield(this._tree.nextChild(dd < 0 ? this._tree._tree.children.length - 1 : 0, dd, Jd, kd, this.mode));
        let {
          buffer: pd
        } = this.buffer, Nd = pd.findChild(this.index + 4, pd.buffer[this.index + 3], dd, Jd - this.buffer.start, kd);
        return !(Nd < 0) && (this.stack.push(this.index), this.yieldBuf(Nd))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(dd) {
        return this.enterChild(1, dd, 2)
      }
      childBefore(dd) {
        return this.enterChild(-1, dd, -2)
      }
      enter(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(kd & Qd.ExcludeBuffers) && this.enterChild(1, dd, Jd) : this.yield(this._tree.enter(dd, Jd, kd))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & Qd.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let dd = this.mode & Qd.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(dd)
      }
      sibling(dd) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + dd, dd, 0, 4, this.mode));
        let {
          buffer: Jd
        } = this.buffer, kd = this.stack.length - 1;
        if (dd < 0) {
          let dd = kd < 0 ? 0 : this.stack[kd] + 4;
          if (this.index != dd) return this.yieldBuf(Jd.findChild(dd, this.index, -1, 0, 4))
        } else {
          let dd = Jd.buffer[this.index + 3];
          if (dd < (kd < 0 ? Jd.buffer.length : Jd.buffer[this.stack[kd] + 3])) return this.yieldBuf(dd)
        }
        return kd < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + dd, dd, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(dd) {
        let Jd, kd, {
          buffer: pd
        } = this;
        if (pd) {
          if (dd > 0) {
            if (this.index < pd.buffer.buffer.length) return !1
          } else
            for (let dd = 0; dd < this.index; dd++)
              if (pd.buffer.buffer[dd + 3] < this.index) return !1;
          ({
            index: Jd,
            parent: kd
          } = pd)
        } else({
          index: Jd,
          _parent: kd
        } = this._tree);
        for (; kd;
          ({
            index: Jd,
            _parent: kd
          } = kd))
          if (Jd > -1)
            for (let pd = Jd + dd, Nd = dd < 0 ? -1 : kd._tree.children.length; pd != Nd; pd += dd) {
              let dd = kd._tree.children[pd];
              if (this.mode & Qd.IncludeAnonymous || dd instanceof ed || !dd.type.isAnonymous || Yd(dd)) return !1
            }
        return !0
      }
      move(dd, Jd) {
        if (Jd && this.enterChild(dd, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(dd)) return !0;
          if (this.atLastNode(dd) || !this.parent()) return !1
        }
      }
      next() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, dd)
      }
      prev() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, dd)
      }
      moveTo(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (Jd < 1 ? this.from >= dd : this.from > dd) || (Jd > -1 ? this.to <= dd : this.to < dd)) && this.parent(););
        for (; this.enterChild(1, dd, Jd););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let dd = this.bufferNode,
          Jd = null,
          kd = 0;
        if (dd && dd.context == this.buffer) dd: for (let pd = this.index, Nd = this.stack.length; Nd >= 0;) {
          for (let Wd = dd; Wd; Wd = Wd._parent)
            if (Wd.index == pd) {
              if (pd == this.index) return Wd;
              Jd = Wd, kd = Nd + 1;
              break dd
            } pd = this.stack[--Nd]
        }
        for (let pd = kd; pd < this.stack.length; pd++) Jd = new sd(this.buffer, Jd, this.stack[pd]);
        return this.bufferNode = new sd(this.buffer, Jd, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(dd, Jd) {
        for (let kd = 0;;) {
          let pd = !1;
          if (this.type.isAnonymous || !1 !== dd(this)) {
            if (this.firstChild()) {
              kd++;
              continue
            }
            this.type.isAnonymous || (pd = !0)
          }
          for (;;) {
            if (pd && Jd && Jd(this), pd = this.type.isAnonymous, !kd) return;
            if (this.nextSibling()) break;
            this.parent(), kd--, pd = !0
          }
        }
      }
      matchContext(dd) {
        if (!this.buffer) return qd(this.node.parent, dd);
        let {
          buffer: Jd
        } = this.buffer, {
          types: kd
        } = Jd.set;
        for (let pd = dd.length - 1, Nd = this.stack.length - 1; pd >= 0; Nd--) {
          if (Nd < 0) return qd(this._tree, dd, pd);
          let Wd = kd[Jd.buffer[this.stack[Nd]]];
          if (!Wd.isAnonymous) {
            if (dd[pd] && dd[pd] != Wd.name) return !1;
            pd--
          }
        }
        return !0
      }
    }

    function Yd(dd) {
      return dd.children.some((dd => dd instanceof ed || !dd.type.isAnonymous || Yd(dd)))
    }
    const md = new WeakMap;

    function bd(dd, Jd) {
      if (!dd.isAnonymous || Jd instanceof ed || Jd.type != dd) return 1;
      let kd = md.get(Jd);
      if (null == kd) {
        kd = 1;
        for (let pd of Jd.children) {
          if (pd.type != dd || !(pd instanceof Ld)) {
            kd = 1;
            break
          }
          kd += bd(dd, pd)
        }
        md.set(Jd, kd)
      }
      return kd
    }

    function Sd(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
      let Cd = 0;
      for (let Qd = pd; Qd < Nd; Qd++) Cd += bd(dd, Jd[Qd]);
      let Kd = Math.ceil(1.5 * Cd / 8),
        od = [],
        ld = [];
      return function Jd(kd, pd, Nd, Pd, Zd) {
        for (let Cd = Nd; Cd < Pd;) {
          let Nd = Cd,
            Qd = pd[Cd],
            Ld = bd(dd, kd[Cd]);
          for (Cd++; Cd < Pd; Cd++) {
            let Jd = bd(dd, kd[Cd]);
            if (Ld + Jd >= Kd) break;
            Ld += Jd
          }
          if (Cd == Nd + 1) {
            if (Ld > Kd) {
              let dd = kd[Nd];
              Jd(dd.children, dd.positions, 0, dd.children.length, pd[Nd] + Zd);
              continue
            }
            od.push(kd[Nd])
          } else {
            let Jd = pd[Cd - 1] + kd[Cd - 1].length - Qd;
            od.push(Sd(dd, kd, pd, Nd, Cd, Qd, Jd, null, gd))
          }
          ld.push(Qd + Zd - Wd)
        }
      }(Jd, kd, pd, Nd, 0), (Zd || gd)(od, ld, Pd)
    }
    class jd {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(dd, Jd, kd) {
        let pd = this.map.get(dd);
        pd || this.map.set(dd, pd = new Map), pd.set(Jd, kd)
      }
      getBuffer(dd, Jd) {
        let kd = this.map.get(dd);
        return kd && kd.get(Jd)
      }
      set(dd, Jd) {
        dd instanceof sd ? this.setBuffer(dd.context.buffer, dd.index, Jd) : dd instanceof vd && this.map.set(dd.tree, Jd)
      }
      get(dd) {
        return dd instanceof sd ? this.getBuffer(dd.context.buffer, dd.index) : dd instanceof vd ? this.map.get(dd.tree) : void 0
      }
      cursorSet(dd, Jd) {
        dd.buffer ? this.setBuffer(dd.buffer.buffer, dd.index, Jd) : this.map.set(dd.tree, Jd)
      }
      cursorGet(dd) {
        return dd.buffer ? this.getBuffer(dd.buffer.buffer, dd.index) : this.map.get(dd.tree)
      }
    }
    class Xd {
      constructor(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = dd, this.to = Jd, this.tree = kd, this.offset = pd, this.open = (Nd ? 1 : 0) | (Wd ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = [new Xd(0, dd.length, dd, 0, !1, kd)];
        for (let Nd of Jd) Nd.to > dd.length && pd.push(Nd);
        return pd
      }
      static applyChanges(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!Jd.length) return dd;
        let pd = [],
          Nd = 1,
          Wd = dd.length ? dd[0] : null;
        for (let Pd = 0, Zd = 0, gd = 0;; Pd++) {
          let Cd = Pd < Jd.length ? Jd[Pd] : null,
            Kd = Cd ? Cd.fromA : 1e9;
          if (Kd - Zd >= kd)
            for (; Wd && Wd.from < Kd;) {
              let Jd = Wd;
              if (Zd >= Jd.from || Kd <= Jd.to || gd) {
                let dd = Math.max(Jd.from, Zd) - gd,
                  kd = Math.min(Jd.to, Kd) - gd;
                Jd = dd >= kd ? null : new Xd(dd, kd, Jd.tree, Jd.offset + gd, Pd > 0, !!Cd)
              }
              if (Jd && pd.push(Jd), Wd.to > Kd) break;
              Wd = Nd < dd.length ? dd[Nd++] : null
            }
          if (!Cd) break;
          Zd = Cd.toA, gd = Cd.toA - Cd.toB
        }
        return pd
      }
    }
    class fd {
      startParse(dd, Jd, kd) {
        return "string" == typeof dd && (dd = new nd(dd)), kd = kd ? kd.length ? kd.map((dd => new Wd(dd.from, dd.to))) : [new Wd(0, 0)] : [new Wd(0, dd.length)], this.createParse(dd, Jd || [], kd)
      }
      parse(dd, Jd, kd) {
        let pd = this.startParse(dd, Jd, kd);
        for (;;) {
          let dd = pd.advance();
          if (dd) return dd
        }
      }
    }
    class nd {
      constructor(dd) {
        this.string = dd
      }
      get length() {
        return this.string.length
      }
      chunk(dd) {
        return this.string.slice(dd)
      }
      get lineChunks() {
        return !1
      }
      read(dd, Jd) {
        return this.string.slice(dd, Jd)
      }
    }
    new Pd({
      perNode: !0
    })
  },
  41314: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => ld,
      i: () => gd,
      l: () => od,
      m: () => md
    });
    var pd = kd(41306);
    let Nd = 0;
    class Wd {
      constructor(dd, Jd, kd, pd) {
        this.name = dd, this.set = Jd, this.base = kd, this.modified = pd, this.id = Nd++
      }
      toString() {
        let {
          name: dd
        } = this;
        for (let Jd of this.modified) Jd.name && (dd = `${Jd.name}(${dd})`);
        return dd
      }
      static define(dd, Jd) {
        let kd = "string" == typeof dd ? dd : "?";
        if (dd instanceof Wd && (Jd = dd), null === Jd || void 0 === Jd ? void 0 : Jd.base) throw new Error("Can not derive from a modified tag");
        let pd = new Wd(kd, [], null, []);
        if (pd.set.push(pd), Jd)
          for (let Nd of Jd.set) pd.set.push(Nd);
        return pd
      }
      static defineModifier(dd) {
        let Jd = new Zd(dd);
        return dd => dd.modified.indexOf(Jd) > -1 ? dd : Zd.get(dd.base || dd, dd.modified.concat(Jd).sort(((dd, Jd) => dd.id - Jd.id)))
      }
    }
    let Pd = 0;
    class Zd {
      constructor(dd) {
        this.name = dd, this.instances = [], this.id = Pd++
      }
      static get(dd, Jd) {
        if (!Jd.length) return dd;
        let kd = Jd[0].instances.find((kd => {
          return kd.base == dd && (pd = Jd, Nd = kd.modified, pd.length == Nd.length && pd.every(((dd, Jd) => dd == Nd[Jd])));
          var pd, Nd
        }));
        if (kd) return kd;
        let pd = [],
          Nd = new Wd(dd.name, pd, dd, Jd);
        for (let Wd of Jd) Wd.instances.push(Nd);
        let Pd = function(dd) {
          let Jd = [
            []
          ];
          for (let kd = 0; kd < dd.length; kd++)
            for (let pd = 0, Nd = Jd.length; pd < Nd; pd++) Jd.push(Jd[pd].concat(dd[kd]));
          return Jd.sort(((dd, Jd) => Jd.length - dd.length))
        }(Jd);
        for (let Wd of dd.set)
          if (!Wd.modified.length)
            for (let dd of Pd) pd.push(Zd.get(Wd, dd));
        return Nd
      }
    }

    function gd(dd) {
      let Jd = Object.create(null);
      for (let kd in dd) {
        let pd = dd[kd];
        Array.isArray(pd) || (pd = [pd]);
        for (let dd of kd.split(" "))
          if (dd) {
            let kd = [],
              Nd = 2,
              Wd = dd;
            for (let Jd = 0;;) {
              if ("..." == Wd && Jd > 0 && Jd + 3 == dd.length) {
                Nd = 1;
                break
              }
              let pd = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Wd);
              if (!pd) throw new RangeError("Invalid path: " + dd);
              if (kd.push("*" == pd[0] ? "" : '"' == pd[0][0] ? JSON.parse(pd[0]) : pd[0]), Jd += pd[0].length, Jd == dd.length) break;
              let Pd = dd[Jd++];
              if (Jd == dd.length && "!" == Pd) {
                Nd = 0;
                break
              }
              if ("/" != Pd) throw new RangeError("Invalid path: " + dd);
              Wd = dd.slice(Jd)
            }
            let Pd = kd.length - 1,
              Zd = kd[Pd];
            if (!Zd) throw new RangeError("Invalid path: " + dd);
            let gd = new Kd(pd, Nd, Pd > 0 ? kd.slice(0, Pd) : null);
            Jd[Zd] = gd.sort(Jd[Zd])
          }
      }
      return Cd.add(Jd)
    }
    const Cd = new pd.f({
      combine(dd, Jd) {
        let kd, pd, Nd;
        for (; dd || Jd;) {
          if (!dd || Jd && dd.depth >= Jd.depth ? (Nd = Jd, Jd = Jd.next) : (Nd = dd, dd = dd.next), kd && kd.mode == Nd.mode && !Nd.context && !kd.context) continue;
          let Wd = new Kd(Nd.tags, Nd.mode, Nd.context);
          kd ? kd.next = Wd : pd = Wd, kd = Wd
        }
        return pd
      }
    });
    class Kd {
      constructor(dd, Jd, kd, pd) {
        this.tags = dd, this.mode = Jd, this.context = kd, this.next = pd
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(dd) {
        return !dd || dd.depth < this.depth ? (this.next = dd, this) : (dd.next = this.sort(dd.next), dd)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function od(dd, Jd) {
      let kd = Object.create(null);
      for (let Wd of dd)
        if (Array.isArray(Wd.tag))
          for (let dd of Wd.tag) kd[dd.id] = Wd.class;
        else kd[Wd.tag.id] = Wd.class;
      let {
        scope: pd,
        all: Nd = null
      } = Jd || {};
      return {
        style: dd => {
          let Jd = Nd;
          for (let pd of dd)
            for (let dd of pd.set) {
              let pd = kd[dd.id];
              if (pd) {
                Jd = Jd ? Jd + " " + pd : pd;
                break
              }
            }
          return Jd
        },
        scope: pd
      }
    }

    function ld(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dd.length,
        Wd = new Qd(pd, Array.isArray(Jd) ? Jd : [Jd], kd);
      Wd.highlightRange(dd.cursor(), pd, Nd, "", Wd.highlighters), Wd.flush(Nd)
    }
    Kd.empty = new Kd([], 2, null);
    class Qd {
      constructor(dd, Jd, kd) {
        this.at = dd, this.highlighters = Jd, this.span = kd, this.class = ""
      }
      startSpan(dd, Jd) {
        Jd != this.class && (this.flush(dd), dd > this.at && (this.at = dd), this.class = Jd)
      }
      flush(dd) {
        dd > this.at && this.class && this.span(this.at, dd, this.class)
      }
      highlightRange(dd, Jd, kd, Nd, Wd) {
        let {
          type: Pd,
          from: Zd,
          to: gd
        } = dd;
        if (Zd >= kd || gd <= Jd) return;
        Pd.isTop && (Wd = this.highlighters.filter((dd => !dd.scope || dd.scope(Pd))));
        let od = Nd,
          ld = function(dd) {
            let Jd = dd.type.prop(Cd);
            for (; Jd && Jd.context && !dd.matchContext(Jd.context);) Jd = Jd.next;
            return Jd || null
          }(dd) || Kd.empty,
          Qd = function(dd, Jd) {
            let kd = null;
            for (let pd of dd) {
              let dd = pd.style(Jd);
              dd && (kd = kd ? kd + " " + dd : dd)
            }
            return kd
          }(Wd, ld.tags);
        if (Qd && (od && (od += " "), od += Qd, 1 == ld.mode && (Nd += (Nd ? " " : "") + Qd)), this.startSpan(Math.max(Jd, Zd), od), ld.opaque) return;
        let Ld = dd.tree && dd.tree.prop(pd.f.mounted);
        if (Ld && Ld.overlay) {
          let pd = dd.node.enter(Ld.overlay[0].from + Zd, 1),
            Pd = this.highlighters.filter((dd => !dd.scope || dd.scope(Ld.tree.type))),
            Cd = dd.firstChild();
          for (let Kd = 0, ld = Zd;; Kd++) {
            let Qd = Kd < Ld.overlay.length ? Ld.overlay[Kd] : null,
              Od = Qd ? Qd.from + Zd : gd,
              ed = Math.max(Jd, ld),
              Rd = Math.min(kd, Od);
            if (ed < Rd && Cd)
              for (; dd.from < Rd && (this.highlightRange(dd, ed, Rd, Nd, Wd), this.startSpan(Math.min(Rd, dd.to), od), !(dd.to >= Od) && dd.nextSibling()););
            if (!Qd || Od > kd) break;
            ld = Qd.to + Zd, ld > Jd && (this.highlightRange(pd.cursor(), Math.max(Jd, Qd.from + Zd), Math.min(kd, ld), "", Pd), this.startSpan(Math.min(kd, ld), od))
          }
          Cd && dd.parent()
        } else if (dd.firstChild()) {
          Ld && (Nd = "");
          do {
            if (!(dd.to <= Jd)) {
              if (dd.from >= kd) break;
              this.highlightRange(dd, Jd, kd, Nd, Wd), this.startSpan(Math.min(kd, dd.to), od)
            }
          } while (dd.nextSibling());
          dd.parent()
        }
      }
    }
    const Ld = Wd.define,
      Od = Ld(),
      ed = Ld(),
      Rd = Ld(ed),
      Id = Ld(ed),
      Gd = Ld(),
      vd = Ld(Gd),
      xd = Ld(Gd),
      qd = Ld(),
      Bd = Ld(qd),
      sd = Ld(),
      ad = Ld(),
      Md = Ld(),
      Fd = Ld(Md),
      Yd = Ld(),
      md = {
        comment: Od,
        lineComment: Ld(Od),
        blockComment: Ld(Od),
        docComment: Ld(Od),
        name: ed,
        variableName: Ld(ed),
        typeName: Rd,
        tagName: Ld(Rd),
        propertyName: Id,
        attributeName: Ld(Id),
        className: Ld(ed),
        labelName: Ld(ed),
        namespace: Ld(ed),
        macroName: Ld(ed),
        literal: Gd,
        string: vd,
        docString: Ld(vd),
        character: Ld(vd),
        attributeValue: Ld(vd),
        number: xd,
        integer: Ld(xd),
        float: Ld(xd),
        bool: Ld(Gd),
        regexp: Ld(Gd),
        escape: Ld(Gd),
        color: Ld(Gd),
        url: Ld(Gd),
        keyword: sd,
        self: Ld(sd),
        null: Ld(sd),
        atom: Ld(sd),
        unit: Ld(sd),
        modifier: Ld(sd),
        operatorKeyword: Ld(sd),
        controlKeyword: Ld(sd),
        definitionKeyword: Ld(sd),
        moduleKeyword: Ld(sd),
        operator: ad,
        derefOperator: Ld(ad),
        arithmeticOperator: Ld(ad),
        logicOperator: Ld(ad),
        bitwiseOperator: Ld(ad),
        compareOperator: Ld(ad),
        updateOperator: Ld(ad),
        definitionOperator: Ld(ad),
        typeOperator: Ld(ad),
        controlOperator: Ld(ad),
        punctuation: Md,
        separator: Ld(Md),
        bracket: Fd,
        angleBracket: Ld(Fd),
        squareBracket: Ld(Fd),
        paren: Ld(Fd),
        brace: Ld(Fd),
        content: qd,
        heading: Bd,
        heading1: Ld(Bd),
        heading2: Ld(Bd),
        heading3: Ld(Bd),
        heading4: Ld(Bd),
        heading5: Ld(Bd),
        heading6: Ld(Bd),
        contentSeparator: Ld(qd),
        list: Ld(qd),
        quote: Ld(qd),
        emphasis: Ld(qd),
        strong: Ld(qd),
        link: Ld(qd),
        monospace: Ld(qd),
        strikethrough: Ld(qd),
        inserted: Ld(),
        deleted: Ld(),
        changed: Ld(),
        invalid: Ld(),
        meta: Yd,
        documentMeta: Ld(Yd),
        annotation: Ld(Yd),
        processingInstruction: Ld(Yd),
        definition: Wd.defineModifier("definition"),
        constant: Wd.defineModifier("constant"),
        function: Wd.defineModifier("function"),
        standard: Wd.defineModifier("standard"),
        local: Wd.defineModifier("local"),
        special: Wd.defineModifier("special")
      };
    for (let bd in md) {
      let dd = md[bd];
      dd instanceof Wd && (dd.name = bd)
    }
    od([{
      tag: md.link,
      class: "tok-link"
    }, {
      tag: md.heading,
      class: "tok-heading"
    }, {
      tag: md.emphasis,
      class: "tok-emphasis"
    }, {
      tag: md.strong,
      class: "tok-strong"
    }, {
      tag: md.keyword,
      class: "tok-keyword"
    }, {
      tag: md.atom,
      class: "tok-atom"
    }, {
      tag: md.bool,
      class: "tok-bool"
    }, {
      tag: md.url,
      class: "tok-url"
    }, {
      tag: md.labelName,
      class: "tok-labelName"
    }, {
      tag: md.inserted,
      class: "tok-inserted"
    }, {
      tag: md.deleted,
      class: "tok-deleted"
    }, {
      tag: md.literal,
      class: "tok-literal"
    }, {
      tag: md.string,
      class: "tok-string"
    }, {
      tag: md.number,
      class: "tok-number"
    }, {
      tag: [md.regexp, md.escape, md.special(md.string)],
      class: "tok-string2"
    }, {
      tag: md.variableName,
      class: "tok-variableName"
    }, {
      tag: md.local(md.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: md.definition(md.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: md.special(md.variableName),
      class: "tok-variableName2"
    }, {
      tag: md.definition(md.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: md.typeName,
      class: "tok-typeName"
    }, {
      tag: md.namespace,
      class: "tok-namespace"
    }, {
      tag: md.className,
      class: "tok-className"
    }, {
      tag: md.macroName,
      class: "tok-macroName"
    }, {
      tag: md.propertyName,
      class: "tok-propertyName"
    }, {
      tag: md.operator,
      class: "tok-operator"
    }, {
      tag: md.comment,
      class: "tok-comment"
    }, {
      tag: md.meta,
      class: "tok-meta"
    }, {
      tag: md.invalid,
      class: "tok-invalid"
    }, {
      tag: md.punctuation,
      class: "tok-punctuation"
    }])
  },
  41324: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd.i,
      d: () => Pd.t,
      h: () => Pd.C,
      i: () => Pd.E,
      m: () => Zd.p,
      q: () => ik,
      u: () => Zd.T,
      v: () => Zd.sb
    });
    var pd = kd(1398),
      Nd = kd(1396),
      Wd = kd(56),
      Pd = kd(41273),
      Zd = kd(41282),
      gd = kd(41303),
      Cd = kd(41306);

    function Kd(dd, Jd) {
      return kd => {
        let {
          state: pd,
          dispatch: Nd
        } = kd;
        if (pd.readOnly) return !1;
        let Wd = dd(Jd, pd);
        return !!Wd && (Nd(pd.update(Wd)), !0)
      }
    }
    const od = Kd(Rd, 0),
      ld = Kd(ed, 0),
      Qd = Kd(((dd, Jd) => ed(dd, Jd, function(dd) {
        let Jd = [];
        for (let kd of dd.selection.UO) {
          let pd = dd.doc.lineAt(kd.from),
            Nd = kd.to <= pd.to ? pd : dd.doc.lineAt(kd.to);
          Nd.from > pd.from && Nd.from == kd.to && (Nd = kd.to == pd.to + 1 ? pd : dd.doc.lineAt(kd.to - 1));
          let Wd = Jd.length - 1;
          Wd >= 0 && Jd[Wd].to > pd.from ? Jd[Wd].to = Nd.to : Jd.push({
            from: pd.from + /^\s*/.exec(pd.text)[0].length,
            to: Nd.to
          })
        }
        return Jd
      }(Jd))), 0);

    function Ld(dd, Jd) {
      let kd = dd.languageDataAt("commentTokens", Jd, 1);
      return kd.length ? kd[0] : {}
    }
    const Od = 50;

    function ed(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jd.selection.UO,
        pd = kd.map((dd => Ld(Jd, dd.from).block));
      if (!pd.every((dd => dd))) return null;
      let Nd = kd.map(((dd, kd) => function(dd, Jd, kd, pd) {
        let Nd, Wd, {
            open: Pd,
            close: Zd
          } = Jd,
          gd = dd.sliceDoc(kd - Od, kd),
          Cd = dd.sliceDoc(pd, pd + Od),
          Kd = /\s*$/.exec(gd)[0].length,
          od = /^\s*/.exec(Cd)[0].length,
          ld = gd.length - Kd;
        if (gd.slice(ld - Pd.length, ld) == Pd && Cd.slice(od, od + Zd.length) == Zd) return {
          open: {
            pos: kd - Kd,
            margin: Kd && 1
          },
          close: {
            pos: pd + od,
            margin: od && 1
          }
        };
        pd - kd <= 2 * Od ? Nd = Wd = dd.sliceDoc(kd, pd) : (Nd = dd.sliceDoc(kd, kd + Od), Wd = dd.sliceDoc(pd - Od, pd));
        let Qd = /^\s*/.exec(Nd)[0].length,
          Ld = /\s*$/.exec(Wd)[0].length,
          ed = Wd.length - Ld - Zd.length;
        return Nd.slice(Qd, Qd + Pd.length) == Pd && Wd.slice(ed, ed + Zd.length) == Zd ? {
          open: {
            pos: kd + Qd + Pd.length,
            margin: /\s/.test(Nd.charAt(Qd + Pd.length)) ? 1 : 0
          },
          close: {
            pos: pd - Ld - Zd.length,
            margin: /\s/.test(Wd.charAt(ed - 1)) ? 1 : 0
          }
        } : null
      }(Jd, pd[kd], dd.from, dd.to)));
      if (2 != dd && !Nd.every((dd => dd))) return {
        changes: Jd.changes(kd.map(((dd, Jd) => Nd[Jd] ? [] : [{
          from: dd.from,
          insert: pd[Jd].open + " "
        }, {
          from: dd.to,
          insert: " " + pd[Jd].close
        }])))
      };
      if (1 != dd && Nd.some((dd => dd))) {
        let dd = [];
        for (let Jd, kd = 0; kd < Nd.length; kd++)
          if (Jd = Nd[kd]) {
            let Nd = pd[kd],
              {
                open: Wd,
                close: Pd
              } = Jd;
            dd.push({
              from: Wd.pos - Nd.open.length,
              to: Wd.pos + Wd.margin
            }, {
              from: Pd.pos - Pd.margin,
              to: Pd.pos + Nd.close.length
            })
          } return {
          changes: dd
        }
      }
      return null
    }

    function Rd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jd.selection.UO,
        pd = [],
        Nd = -1;
      dd: for (let {
          from: Wd,
          to: Pd
        }
        of kd) {
        let dd, kd = pd.length,
          Zd = 1e9;
        for (let gd = Wd; gd <= Pd;) {
          let kd = Jd.doc.lineAt(gd);
          if (void 0 == dd && (dd = Ld(Jd, kd.from).line, !dd)) continue dd;
          if (kd.from > Nd && (Wd == Pd || Pd > kd.from)) {
            Nd = kd.from;
            let Jd = /^\s*/.exec(kd.text)[0].length,
              Wd = Jd == kd.length,
              Pd = kd.text.slice(Jd, Jd + dd.length) == dd ? Jd : -1;
            Jd < kd.text.length && Jd < Zd && (Zd = Jd), pd.push({
              line: kd,
              comment: Pd,
              token: dd,
              indent: Jd,
              empty: Wd,
              single: !1
            })
          }
          gd = kd.to + 1
        }
        if (Zd < 1e9)
          for (let Jd = kd; Jd < pd.length; Jd++) pd[Jd].indent < pd[Jd].line.text.length && (pd[Jd].indent = Zd);
        pd.length == kd + 1 && (pd[kd].single = !0)
      }
      if (2 != dd && pd.some((dd => dd.comment < 0 && (!dd.empty || dd.single)))) {
        let dd = [];
        for (let {
            line: Jd,
            token: Nd,
            indent: Wd,
            empty: Pd,
            single: Zd
          }
          of pd) !Zd && Pd || dd.push({
          from: Jd.from + Wd,
          insert: Nd + " "
        });
        let kd = Jd.changes(dd);
        return {
          changes: kd,
          selection: Jd.selection.map(kd, 1)
        }
      }
      if (1 != dd && pd.some((dd => dd.comment >= 0))) {
        let dd = [];
        for (let {
            line: Jd,
            comment: kd,
            token: Nd
          }
          of pd)
          if (kd >= 0) {
            let pd = Jd.from + kd,
              Wd = pd + Nd.length;
            " " == Jd.text[Wd - Jd.from] && Wd++, dd.push({
              from: pd,
              to: Wd
            })
          } return {
          changes: dd
        }
      }
      return null
    }
    const Id = Pd.b.define(),
      Gd = Pd.b.define(),
      vd = Pd.o.define(),
      xd = Pd.o.define({
        combine: dd => (0, Pd.R)(dd, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (dd, Jd) => Jd
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (dd, Jd) => (kd, pd) => dd(kd, pd) || Jd(kd, pd)
        })
      }),
      qd = Pd.E.define({
        create: () => Dd.empty,
        update(dd, Jd) {
          let kd = Jd.state.facet(xd),
            pd = Jd.annotation(Id);
          if (pd) {
            let Nd = Yd.fromTransaction(Jd, pd.selection),
              Wd = pd.side,
              Pd = 0 == Wd ? dd.undone : dd.done;
            return Pd = Nd ? md(Pd, Pd.length, kd.minDepth, Nd) : Xd(Pd, Jd.startState.selection), new Dd(0 == Wd ? pd.rest : Pd, 0 == Wd ? Pd : pd.rest)
          }
          let Nd = Jd.annotation(Gd);
          if ("full" != Nd && "before" != Nd || (dd = dd.isolate()), !1 === Jd.annotation(Pd.J.addToHistory)) return Jd.changes.empty ? dd : dd.addMapping(Jd.changes.desc);
          let Wd = Yd.fromTransaction(Jd),
            Zd = Jd.annotation(Pd.J.time),
            gd = Jd.annotation(Pd.J.userEvent);
          return Wd ? dd = dd.addChanges(Wd, Zd, gd, kd, Jd) : Jd.selection && (dd = dd.addSelection(Jd.startState.selection, Zd, gd, kd.newGroupDelay)), "full" != Nd && "after" != Nd || (dd = dd.isolate()), dd
        },
        toJSON: dd => ({
          done: dd.done.map((dd => dd.toJSON())),
          undone: dd.undone.map((dd => dd.toJSON()))
        }),
        fromJSON: dd => new Dd(dd.done.map(Yd.fromJSON), dd.undone.map(Yd.fromJSON))
      });

    function Bd(dd, Jd) {
      return function(kd) {
        let {
          state: pd,
          dispatch: Nd
        } = kd;
        if (!Jd && pd.readOnly) return !1;
        let Wd = pd.field(qd, !1);
        if (!Wd) return !1;
        let Pd = Wd.pop(dd, pd, Jd);
        return !!Pd && (Nd(Pd), !0)
      }
    }
    const sd = Bd(0, !1),
      ad = Bd(1, !1),
      Md = Bd(0, !0),
      Fd = Bd(1, !0);
    class Yd {
      constructor(dd, Jd, kd, pd, Nd) {
        this.changes = dd, this.effects = Jd, this.mapped = kd, this.startSelection = pd, this.selectionsAfter = Nd
      }
      setSelAfter(dd) {
        return new Yd(this.changes, this.effects, this.mapped, this.startSelection, dd)
      }
      toJSON() {
        var dd, Jd, kd;
        return {
          changes: null === (dd = this.changes) || void 0 === dd ? void 0 : dd.toJSON(),
          mapped: null === (Jd = this.mapped) || void 0 === Jd ? void 0 : Jd.toJSON(),
          startSelection: null === (kd = this.startSelection) || void 0 === kd ? void 0 : kd.toJSON(),
          selectionsAfter: this.selectionsAfter.map((dd => dd.toJSON()))
        }
      }
      static fromJSON(dd) {
        return new Yd(dd.changes && Pd.ChangeSet.fromJSON(dd.changes), [], dd.mapped && Pd.e.fromJSON(dd.mapped), dd.startSelection && Pd.k.fromJSON(dd.startSelection), dd.selectionsAfter.map(Pd.k.fromJSON))
      }
      static fromTransaction(dd, Jd) {
        let kd = Sd;
        for (let pd of dd.startState.facet(vd)) {
          let Jd = pd(dd);
          Jd.length && (kd = kd.concat(Jd))
        }
        return !kd.length && dd.changes.empty ? null : new Yd(dd.changes.invert(dd.startState.doc), kd, void 0, Jd || dd.startState.selection, Sd)
      }
      static selection(dd) {
        return new Yd(void 0, Sd, void 0, void 0, dd)
      }
    }

    function md(dd, Jd, kd, pd) {
      let Nd = Jd + 1 > kd + 20 ? Jd - kd - 1 : 0,
        Wd = dd.slice(Nd, Jd);
      return Wd.push(pd), Wd
    }

    function bd(dd, Jd) {
      return dd.length ? Jd.length ? dd.concat(Jd) : dd : Jd
    }
    const Sd = [],
      jd = 200;

    function Xd(dd, Jd) {
      if (dd.length) {
        let kd = dd[dd.length - 1],
          pd = kd.selectionsAfter.slice(Math.max(0, kd.selectionsAfter.length - jd));
        return pd.length && pd[pd.length - 1].eq(Jd) ? dd : (pd.push(Jd), md(dd, dd.length - 1, 1e9, kd.setSelAfter(pd)))
      }
      return [Yd.selection([Jd])]
    }

    function fd(dd) {
      let Jd = dd[dd.length - 1],
        kd = dd.slice();
      return kd[dd.length - 1] = Jd.setSelAfter(Jd.selectionsAfter.slice(0, Jd.selectionsAfter.length - 1)), kd
    }

    function nd(dd, Jd) {
      if (!dd.length) return dd;
      let kd = dd.length,
        pd = Sd;
      for (; kd;) {
        let Nd = Ud(dd[kd - 1], Jd, pd);
        if (Nd.changes && !Nd.changes.empty || Nd.effects.length) {
          let Jd = dd.slice(0, kd);
          return Jd[kd - 1] = Nd, Jd
        }
        Jd = Nd.mapped, kd--, pd = Nd.selectionsAfter
      }
      return pd.length ? [Yd.selection(pd)] : Sd
    }

    function Ud(dd, Jd, kd) {
      let pd = bd(dd.selectionsAfter.length ? dd.selectionsAfter.map((dd => dd.map(Jd))) : Sd, kd);
      if (!dd.changes) return Yd.selection(pd);
      let Nd = dd.changes.map(Jd),
        Wd = Jd.mapDesc(dd.changes, !0),
        Zd = dd.mapped ? dd.mapped.composeDesc(Wd) : Wd;
      return new Yd(Nd, Pd.C.mapEffects(dd.effects, Jd), Zd, dd.startSelection.map(Wd), pd)
    }
    const yd = /^(input\.type|delete)($|\.)/;
    class Dd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = dd, this.undone = Jd, this.prevTime = kd, this.prevUserEvent = pd
      }
      isolate() {
        return this.prevTime ? new Dd(this.done, this.undone) : this
      }
      addChanges(dd, Jd, kd, pd, Nd) {
        let Wd = this.done,
          Zd = Wd[Wd.length - 1];
        return Wd = Zd && Zd.changes && !Zd.changes.empty && dd.changes && (!kd || yd.test(kd)) && (!Zd.selectionsAfter.length && Jd - this.prevTime < pd.newGroupDelay && pd.joinToEvent(Nd, function(dd, Jd) {
          let kd = [],
            pd = !1;
          return dd.iterChangedRanges(((dd, Jd) => kd.push(dd, Jd))), Jd.iterChangedRanges(((dd, Jd, Nd, Wd) => {
            for (let Pd = 0; Pd < kd.length;) {
              let dd = kd[Pd++],
                Jd = kd[Pd++];
              Wd >= dd && Nd <= Jd && (pd = !0)
            }
          })), pd
        }(Zd.changes, dd.changes)) || "input.type.compose" == kd) ? md(Wd, Wd.length - 1, pd.minDepth, new Yd(dd.changes.compose(Zd.changes), bd(Pd.C.mapEffects(dd.effects, Zd.changes), Zd.effects), Zd.mapped, Zd.startSelection, Sd)) : md(Wd, Wd.length, pd.minDepth, dd), new Dd(Wd, Sd, Jd, kd)
      }
      addSelection(dd, Jd, kd, pd) {
        let Nd = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Sd;
        return Nd.length > 0 && Jd - this.prevTime < pd && kd == this.prevUserEvent && kd && /^select($|\.)/.test(kd) && (Wd = Nd[Nd.length - 1], Pd = dd, Wd.UO.length == Pd.UO.length && 0 === Wd.UO.filter(((dd, Jd) => dd.empty != Pd.UO[Jd].empty)).length) ? this : new Dd(Xd(this.done, dd), this.undone, Jd, kd);
        var Wd, Pd
      }
      addMapping(dd) {
        return new Dd(nd(this.done, dd), nd(this.undone, dd), this.prevTime, this.prevUserEvent)
      }
      pop(dd, Jd, kd) {
        let pd = 0 == dd ? this.done : this.undone;
        if (0 == pd.length) return null;
        let Nd = pd[pd.length - 1],
          Wd = Nd.selectionsAfter[0] || (Nd.startSelection ? Nd.startSelection.map(Nd.changes.invertedDesc, 1) : Jd.selection);
        if (kd && Nd.selectionsAfter.length) return Jd.update({
          selection: Nd.selectionsAfter[Nd.selectionsAfter.length - 1],
          annotations: Id.of({
            side: dd,
            rest: fd(pd),
            selection: Wd
          }),
          userEvent: 0 == dd ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Nd.changes) {
          let kd = 1 == pd.length ? Sd : pd.slice(0, pd.length - 1);
          return Nd.mapped && (kd = nd(kd, Nd.mapped)), Jd.update({
            changes: Nd.changes,
            selection: Nd.startSelection,
            effects: Nd.effects,
            annotations: Id.of({
              side: dd,
              rest: kd,
              selection: Wd
            }),
            filter: !1,
            userEvent: 0 == dd ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    Dd.empty = new Dd(Sd, Sd);
    const Td = [{
      key: "Mod-z",
      run: sd,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: ad,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: ad,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Md,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Fd,
      preventDefault: !0
    }];

    function Ed(dd, Jd) {
      return Pd.k.create(dd.UO.map(Jd), dd.mainIndex)
    }

    function cd(dd, Jd) {
      return dd.update({
        selection: Jd,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function hd(dd, Jd) {
      let {
        state: kd,
        dispatch: pd
      } = dd, Nd = Ed(kd.selection, Jd);
      return !Nd.eq(kd.selection, !0) && (pd(cd(kd, Nd)), !0)
    }

    function rd(dd, Jd) {
      return Pd.k.cursor(Jd ? dd.to : dd.from)
    }

    function ud(dd, Jd) {
      return hd(dd, (kd => kd.empty ? dd.moveByChar(kd, Jd) : rd(kd, Jd)))
    }

    function td(dd) {
      return dd.textDirectionAt(dd.state.selection.main.head) == Zd.e.LTR
    }
    const Vd = dd => ud(dd, !td(dd)),
      zd = dd => ud(dd, td(dd));

    function Hd(dd, Jd) {
      return hd(dd, (kd => kd.empty ? dd.moveByGroup(kd, Jd) : rd(kd, Jd)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function wd(dd, Jd, kd) {
      if (Jd.type.prop(kd)) return !0;
      let pd = Jd.to - Jd.from;
      return pd && (pd > 2 || /[^\s,.;:]/.test(dd.sliceDoc(Jd.from, Jd.to))) || Jd.firstChild
    }

    function Ad(dd, Jd, kd) {
      let pd, Nd, Wd = (0, gd.gb)(dd).resolveInner(Jd.head),
        Zd = kd ? Cd.f.closedBy : Cd.f.openedBy;
      for (let Pd = Jd.head;;) {
        let Jd = kd ? Wd.childAfter(Pd) : Wd.childBefore(Pd);
        if (!Jd) break;
        wd(dd, Jd, Zd) ? Wd = Jd : Pd = kd ? Jd.to : Jd.from
      }
      return Nd = Wd.type.prop(Zd) && (pd = kd ? (0, gd.$)(dd, Wd.from, 1) : (0, gd.$)(dd, Wd.to, -1)) && pd.matched ? kd ? pd.end.to : pd.end.from : kd ? Wd.to : Wd.from, Pd.k.cursor(Nd, kd ? -1 : 1)
    }

    function dJ(dd, Jd) {
      return hd(dd, (kd => {
        if (!kd.empty) return rd(kd, Jd);
        let pd = dd.moveVertically(kd, Jd);
        return pd.head != kd.head ? pd : dd.moveToLineBoundary(kd, Jd)
      }))
    }
    const JJ = dd => dJ(dd, !1),
      kJ = dd => dJ(dd, !0);

    function pJ(dd) {
      let Jd, kd = dd.scrollDOM.clientHeight < dd.scrollDOM.scrollHeight - 2,
        pd = 0,
        Nd = 0;
      if (kd) {
        for (let Jd of dd.state.facet(Zd.i.scrollMargins)) {
          let kd = Jd(dd);
          (null === kd || void 0 === kd ? void 0 : kd.top) && (pd = Math.max(null === kd || void 0 === kd ? void 0 : kd.top, pd)), (null === kd || void 0 === kd ? void 0 : kd.bottom) && (Nd = Math.max(null === kd || void 0 === kd ? void 0 : kd.bottom, Nd))
        }
        Jd = dd.scrollDOM.clientHeight - pd - Nd
      } else Jd = (dd.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: pd,
        marginBottom: Nd,
        selfScroll: kd,
        height: Math.max(dd.defaultLineHeight, Jd - 5)
      }
    }

    function NJ(dd, Jd) {
      let kd, pd = pJ(dd),
        {
          state: Nd
        } = dd,
        Wd = Ed(Nd.selection, (kd => kd.empty ? dd.moveVertically(kd, Jd, pd.height) : rd(kd, Jd)));
      if (Wd.eq(Nd.selection)) return !1;
      if (pd.selfScroll) {
        let Jd = dd.coordsAtPos(Nd.selection.main.head),
          Pd = dd.scrollDOM.getBoundingClientRect(),
          gd = Pd.top + pd.marginTop,
          Cd = Pd.bottom - pd.marginBottom;
        Jd && Jd.top > gd && Jd.bottom < Cd && (kd = Zd.i.scrollIntoView(Wd.main.head, {
          y: "start",
          yMargin: Jd.top - gd
        }))
      }
      return dd.dispatch(cd(Nd, Wd), {
        effects: kd
      }), !0
    }
    const WJ = dd => NJ(dd, !1),
      PJ = dd => NJ(dd, !0);

    function ZJ(dd, Jd, kd) {
      let pd = dd.lineBlockAt(Jd.head),
        Nd = dd.moveToLineBoundary(Jd, kd);
      if (Nd.head == Jd.head && Nd.head != (kd ? pd.to : pd.from) && (Nd = dd.moveToLineBoundary(Jd, kd, !1)), !kd && Nd.head == pd.from && pd.length) {
        let kd = /^\s*/.exec(dd.state.sliceDoc(pd.from, Math.min(pd.from + 100, pd.to)))[0].length;
        kd && Jd.head != pd.from + kd && (Nd = Pd.k.cursor(pd.from + kd))
      }
      return Nd
    }

    function gJ(dd, Jd, kd) {
      let pd = !1,
        Nd = Ed(dd.selection, (Jd => {
          let Nd = (0, gd.$)(dd, Jd.head, -1) || (0, gd.$)(dd, Jd.head, 1) || Jd.head > 0 && (0, gd.$)(dd, Jd.head - 1, 1) || Jd.head < dd.doc.length && (0, gd.$)(dd, Jd.head + 1, -1);
          if (!Nd || !Nd.end) return Jd;
          pd = !0;
          let Wd = Nd.start.from == Jd.head ? Nd.end.to : Nd.end.from;
          return kd ? Pd.k.range(Jd.anchor, Wd) : Pd.k.cursor(Wd)
        }));
      return !!pd && (Jd(cd(dd, Nd)), !0)
    }

    function CJ(dd, Jd) {
      let kd = Ed(dd.state.selection, (dd => {
        let kd = Jd(dd);
        return Pd.k.range(dd.anchor, kd.head, kd.goalColumn, kd.bidiLevel || void 0, kd.assoc)
      }));
      return !kd.eq(dd.state.selection) && (dd.dispatch(cd(dd.state, kd)), !0)
    }

    function KJ(dd, Jd) {
      return CJ(dd, (kd => dd.moveByChar(kd, Jd)))
    }
    const oJ = dd => KJ(dd, !td(dd)),
      lJ = dd => KJ(dd, td(dd));

    function QJ(dd, Jd) {
      return CJ(dd, (kd => dd.moveByGroup(kd, Jd)))
    }

    function LJ(dd, Jd) {
      return CJ(dd, (kd => dd.moveVertically(kd, Jd)))
    }
    const OJ = dd => LJ(dd, !1),
      eJ = dd => LJ(dd, !0);

    function RJ(dd, Jd) {
      return CJ(dd, (kd => dd.moveVertically(kd, Jd, pJ(dd).height)))
    }
    const IJ = dd => RJ(dd, !1),
      GJ = dd => RJ(dd, !0),
      vJ = dd => {
        let {
          state: Jd,
          dispatch: kd
        } = dd;
        return kd(cd(Jd, {
          anchor: 0
        })), !0
      },
      xJ = dd => {
        let {
          state: Jd,
          dispatch: kd
        } = dd;
        return kd(cd(Jd, {
          anchor: Jd.doc.length
        })), !0
      },
      qJ = dd => {
        let {
          state: Jd,
          dispatch: kd
        } = dd;
        return kd(cd(Jd, {
          anchor: Jd.selection.main.anchor,
          head: 0
        })), !0
      },
      BJ = dd => {
        let {
          state: Jd,
          dispatch: kd
        } = dd;
        return kd(cd(Jd, {
          anchor: Jd.selection.main.anchor,
          head: Jd.doc.length
        })), !0
      };

    function sJ(dd, Jd) {
      let {
        state: kd
      } = dd, pd = kd.selection, Nd = kd.selection.UO.slice();
      for (let Wd of kd.selection.UO) {
        let pd = kd.doc.lineAt(Wd.head);
        if (Jd ? pd.to < dd.state.doc.length : pd.from > 0)
          for (let kd = Wd;;) {
            let Wd = dd.moveVertically(kd, Jd);
            if (Wd.head < pd.from || Wd.head > pd.to) {
              Nd.some((dd => dd.head == Wd.head)) || Nd.push(Wd);
              break
            }
            if (Wd.head == kd.head) break;
            kd = Wd
          }
      }
      return Nd.length != pd.UO.length && (dd.dispatch(cd(kd, Pd.k.create(Nd, Nd.length - 1))), !0)
    }

    function iJ(dd, Jd) {
      if (dd.state.readOnly) return !1;
      let kd = "delete.selection",
        {
          state: pd
        } = dd,
        Nd = pd.changeByRange((pd => {
          let {
            from: Nd,
            to: Wd
          } = pd;
          if (Nd == Wd) {
            let Pd = Jd(pd);
            Pd < Nd ? (kd = "delete.backward", Pd = aJ(dd, Pd, !1)) : Pd > Nd && (kd = "delete.forward", Pd = aJ(dd, Pd, !0)), Nd = Math.min(Nd, Pd), Wd = Math.max(Wd, Pd)
          } else Nd = aJ(dd, Nd, !1), Wd = aJ(dd, Wd, !0);
          return Nd == Wd ? {
            range: pd
          } : {
            changes: {
              from: Nd,
              to: Wd
            },
            range: Pd.k.cursor(Nd, Nd < pd.head ? -1 : 1)
          }
        }));
      return !Nd.changes.empty && (dd.dispatch(pd.update(Nd, {
        scrollIntoView: !0,
        userEvent: kd,
        effects: "delete.selection" == kd ? Zd.i.announce.of(pd.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function aJ(dd, Jd, kd) {
      if (dd instanceof Zd.i)
        for (let pd of dd.state.facet(Zd.i.atomicRanges).map((Jd => Jd(dd)))) pd.between(Jd, Jd, ((dd, pd) => {
          dd < Jd && pd > Jd && (Jd = kd ? pd : dd)
        }));
      return Jd
    }
    const MJ = (dd, Jd, kd) => iJ(dd, (pd => {
        let Nd, Wd, Zd = pd.from,
          {
            state: Cd
          } = dd,
          Kd = Cd.doc.lineAt(Zd);
        if (kd && !Jd && Zd > Kd.from && Zd < Kd.from + 200 && !/[^ \t]/.test(Nd = Kd.text.slice(0, Zd - Kd.from))) {
          if ("\t" == Nd[Nd.length - 1]) return Zd - 1;
          let dd = (0, Pd.V)(Nd, Cd.tabSize) % (0, gd.N)(Cd) || (0, gd.N)(Cd);
          for (let Jd = 0; Jd < dd && " " == Nd[Nd.length - 1 - Jd]; Jd++) Zd--;
          Wd = Zd
        } else Wd = (0, Pd.X)(Kd.text, Zd - Kd.from, Jd, Jd) + Kd.from, Wd == Zd && Kd.number != (Jd ? Cd.doc.lines : 1) ? Wd += Jd ? 1 : -1 : !Jd && /[\ufe00-\ufe0f]/.test(Kd.text.slice(Wd - Kd.from, Zd - Kd.from)) && (Wd = (0, Pd.X)(Kd.text, Wd - Kd.from, !1, !1) + Kd.from);
        return Wd
      })),
      FJ = dd => MJ(dd, !1, !0),
      YJ = dd => MJ(dd, !0, !1),
      mJ = (dd, Jd) => iJ(dd, (kd => {
        let pd = kd.head,
          {
            state: Nd
          } = dd,
          Wd = Nd.doc.lineAt(pd),
          Zd = Nd.charCategorizer(pd);
        for (let dd = null;;) {
          if (pd == (Jd ? Wd.to : Wd.from)) {
            pd == kd.head && Wd.number != (Jd ? Nd.doc.lines : 1) && (pd += Jd ? 1 : -1);
            break
          }
          let gd = (0, Pd.X)(Wd.text, pd - Wd.from, Jd) + Wd.from,
            Cd = Wd.text.slice(Math.min(pd, gd) - Wd.from, Math.max(pd, gd) - Wd.from),
            Kd = Zd(Cd);
          if (null != dd && Kd != dd) break;
          " " == Cd && pd == kd.head || (dd = Kd), pd = gd
        }
        return pd
      })),
      bJ = dd => mJ(dd, !1);

    function SJ(dd) {
      let Jd = [],
        kd = -1;
      for (let pd of dd.selection.UO) {
        let Nd = dd.doc.lineAt(pd.from),
          Wd = dd.doc.lineAt(pd.to);
        if (pd.empty || pd.to != Wd.from || (Wd = dd.doc.lineAt(pd.to - 1)), kd >= Nd.number) {
          let dd = Jd[Jd.length - 1];
          dd.to = Wd.to, dd.UO.push(pd)
        } else Jd.push({
          from: Nd.from,
          to: Wd.to,
          UO: [pd]
        });
        kd = Wd.number + 1
      }
      return Jd
    }

    function jJ(dd, Jd, kd) {
      if (dd.readOnly) return !1;
      let pd = [],
        Nd = [];
      for (let Wd of SJ(dd)) {
        if (kd ? Wd.to == dd.doc.length : 0 == Wd.from) continue;
        let Jd = dd.doc.lineAt(kd ? Wd.to + 1 : Wd.from - 1),
          Zd = Jd.length + 1;
        if (kd) {
          pd.push({
            from: Wd.to,
            to: Jd.to
          }, {
            from: Wd.from,
            insert: Jd.text + dd.lineBreak
          });
          for (let Jd of Wd.UO) Nd.push(Pd.k.range(Math.min(dd.doc.length, Jd.anchor + Zd), Math.min(dd.doc.length, Jd.head + Zd)))
        } else {
          pd.push({
            from: Jd.from,
            to: Wd.from
          }, {
            from: Wd.to,
            insert: dd.lineBreak + Jd.text
          });
          for (let dd of Wd.UO) Nd.push(Pd.k.range(dd.anchor - Zd, dd.head - Zd))
        }
      }
      return !!pd.length && (Jd(dd.update({
        changes: pd,
        scrollIntoView: !0,
        selection: Pd.k.create(Nd, dd.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function XJ(dd, Jd, kd) {
      if (dd.readOnly) return !1;
      let pd = [];
      for (let Wd of SJ(dd)) kd ? pd.push({
        from: Wd.from,
        insert: dd.doc.slice(Wd.from, Wd.to) + dd.lineBreak
      }) : pd.push({
        from: Wd.to,
        insert: dd.lineBreak + dd.doc.slice(Wd.from, Wd.to)
      });
      let Nd = dd.changes(pd);
      return Jd(dd.update({
        changes: Nd,
        selection: dd.selection.map(Nd, kd ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const fJ = nJ(!1);

    function nJ(dd) {
      return Jd => {
        let {
          state: kd,
          dispatch: pd
        } = Jd;
        if (kd.readOnly) return !1;
        let Nd = kd.changeByRange((Jd => {
          let {
            from: pd,
            to: Nd
          } = Jd, Wd = kd.doc.lineAt(pd), Zd = !dd && pd == Nd && function(dd, Jd) {
            if (/\(\)|\[\]|\{\}/.test(dd.sliceDoc(Jd - 1, Jd + 1))) return {
              from: Jd,
              to: Jd
            };
            let kd, pd = (0, gd.gb)(dd).resolveInner(Jd),
              Nd = pd.childBefore(Jd),
              Wd = pd.childAfter(Jd);
            return Nd && Wd && Nd.to <= Jd && Wd.from >= Jd && (kd = Nd.type.prop(Cd.f.closedBy)) && kd.indexOf(Wd.name) > -1 && dd.doc.lineAt(Nd.to).from == dd.doc.lineAt(Wd.from).from && !/\S/.test(dd.sliceDoc(Nd.to, Wd.from)) ? {
              from: Nd.to,
              to: Wd.from
            } : null
          }(kd, pd);
          dd && (pd = Nd = (Nd <= Wd.to ? Wd : kd.doc.lineAt(Nd)).to);
          let Kd = new gd.e(kd, {
              simulateBreak: pd,
              simulateDoubleBreak: !!Zd
            }),
            od = (0, gd.Q)(Kd, pd);
          for (null == od && (od = (0, Pd.V)(/^\s*/.exec(kd.doc.lineAt(pd).text)[0], kd.tabSize)); Nd < Wd.to && /\s/.test(Wd.text[Nd - Wd.from]);) Nd++;
          Zd ? ({
            from: pd,
            to: Nd
          } = Zd) : pd > Wd.from && pd < Wd.from + 100 && !/\S/.test(Wd.text.slice(0, pd)) && (pd = Wd.from);
          let ld = ["", (0, gd.X)(kd, od)];
          return Zd && ld.push((0, gd.X)(kd, Kd.lineIndent(Wd.from, -1))), {
            changes: {
              from: pd,
              to: Nd,
              insert: Pd.I.of(ld)
            },
            range: Pd.k.cursor(pd + 1 + ld[1].length)
          }
        }));
        return pd(kd.update(Nd, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function UJ(dd, Jd) {
      let kd = -1;
      return dd.changeByRange((pd => {
        let Nd = [];
        for (let Pd = pd.from; Pd <= pd.to;) {
          let Wd = dd.doc.lineAt(Pd);
          Wd.number > kd && (pd.empty || pd.to > Wd.from) && (Jd(Wd, Nd, pd), kd = Wd.number), Pd = Wd.to + 1
        }
        let Wd = dd.changes(Nd);
        return {
          changes: Nd,
          range: Pd.k.range(Wd.mapPos(pd.anchor, 1), Wd.mapPos(pd.head, 1))
        }
      }))
    }
    const yJ = dd => {
        let {
          state: Jd,
          dispatch: kd
        } = dd;
        return !Jd.readOnly && (kd(Jd.update(UJ(Jd, ((dd, kd) => {
          kd.push({
            from: dd.from,
            insert: Jd.facet(gd.Y)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      DJ = dd => {
        let {
          state: Jd,
          dispatch: kd
        } = dd;
        return !Jd.readOnly && (kd(Jd.update(UJ(Jd, ((dd, kd) => {
          let pd = /^\s*/.exec(dd.text)[0];
          if (!pd) return;
          let Nd = (0, Pd.V)(pd, Jd.tabSize),
            Wd = 0,
            Zd = (0, gd.X)(Jd, Math.max(0, Nd - (0, gd.N)(Jd)));
          for (; Wd < pd.length && Wd < Zd.length && pd.charCodeAt(Wd) == Zd.charCodeAt(Wd);) Wd++;
          kd.push({
            from: dd.from + Wd,
            to: dd.from + pd.length,
            insert: Zd.slice(Wd)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      TJ = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: dd => hd(dd, (Jd => Ad(dd.state, Jd, !td(dd)))),
        shift: dd => CJ(dd, (Jd => Ad(dd.state, Jd, !td(dd))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: dd => hd(dd, (Jd => Ad(dd.state, Jd, td(dd)))),
        shift: dd => CJ(dd, (Jd => Ad(dd.state, Jd, td(dd))))
      }, {
        key: "Alt-ArrowUp",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd;
          return jJ(Jd, kd, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd;
          return XJ(Jd, kd, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd;
          return jJ(Jd, kd, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd;
          return XJ(Jd, kd, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: dd => sJ(dd, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: dd => sJ(dd, !0)
      }, {
        key: "Escape",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd, pd = Jd.selection, Nd = null;
          return pd.UO.length > 1 ? Nd = Pd.k.create([pd.main]) : pd.main.empty || (Nd = Pd.k.create([Pd.k.cursor(pd.main.head)])), !!Nd && (kd(cd(Jd, Nd)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: nJ(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd, pd = SJ(Jd).map((dd => {
            let {
              from: kd,
              to: pd
            } = dd;
            return Pd.k.range(kd, Math.min(pd + 1, Jd.doc.length))
          }));
          return kd(Jd.update({
            selection: Pd.k.create(pd),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd, pd = Ed(Jd.selection, (dd => {
            let kd = (0, gd.gb)(Jd),
              pd = kd.resolveStack(dd.from, 1);
            if (dd.empty) {
              let Jd = kd.resolveStack(dd.from, -1);
              Jd.node.from >= pd.node.from && Jd.node.to <= pd.node.to && (pd = Jd)
            }
            for (let Jd = pd; Jd; Jd = Jd.next) {
              let {
                node: kd
              } = Jd;
              if ((kd.from < dd.from && kd.to >= dd.to || kd.to > dd.to && kd.from <= dd.from) && Jd.next) return Pd.k.range(kd.to, kd.from)
            }
            return dd
          }));
          return !pd.eq(Jd.selection) && (kd(cd(Jd, pd)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: DJ
      }, {
        key: "Mod-]",
        run: yJ
      }, {
        key: "Mod-Alt-\\",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd;
          if (Jd.readOnly) return !1;
          let pd = Object.create(null),
            Nd = new gd.e(Jd, {
              overrideIndentation: dd => {
                let Jd = pd[dd];
                return null == Jd ? -1 : Jd
              }
            }),
            Wd = UJ(Jd, ((dd, kd, Wd) => {
              let Pd = (0, gd.Q)(Nd, dd.from);
              if (null == Pd) return;
              /\S/.test(dd.text) || (Pd = 0);
              let Zd = /^\s*/.exec(dd.text)[0],
                Cd = (0, gd.X)(Jd, Pd);
              (Zd != Cd || Wd.from < dd.from + Zd.length) && (pd[dd.from] = Pd, kd.push({
                from: dd.from,
                to: dd.from + Zd.length,
                insert: Cd
              }))
            }));
          return Wd.changes.empty || kd(Jd.update(Wd, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: dd => {
          if (dd.state.readOnly) return !1;
          let {
            state: Jd
          } = dd, kd = Jd.changes(SJ(Jd).map((dd => {
            let {
              from: kd,
              to: pd
            } = dd;
            return kd > 0 ? kd-- : pd < Jd.doc.length && pd++, {
              from: kd,
              to: pd
            }
          }))), pd = Ed(Jd.selection, (Jd => {
            let kd;
            if (dd.lineWrapping) {
              let pd = dd.lineBlockAt(Jd.head),
                Nd = dd.coordsAtPos(Jd.head, Jd.assoc || 1);
              Nd && (kd = pd.bottom + dd.documentTop - Nd.bottom + dd.defaultLineHeight / 2)
            }
            return dd.moveVertically(Jd, !0, kd)
          })).map(kd);
          return dd.dispatch({
            changes: kd,
            selection: pd,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd;
          return gJ(Jd, kd, !1)
        }
      }, {
        key: "Mod-/",
        run: dd => {
          let {
            state: Jd
          } = dd, kd = Jd.doc.lineAt(Jd.selection.main.from), pd = Ld(dd.state, kd.from);
          return pd.line ? od(dd) : !!pd.block && Qd(dd)
        }
      }, {
        key: "Alt-A",
        run: ld
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: dd => (dd.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: Vd,
        shift: oJ,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: dd => Hd(dd, !td(dd)),
        shift: dd => QJ(dd, !td(dd)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: dd => hd(dd, (Jd => ZJ(dd, Jd, !td(dd)))),
        shift: dd => CJ(dd, (Jd => ZJ(dd, Jd, !td(dd)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: zd,
        shift: lJ,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: dd => Hd(dd, td(dd)),
        shift: dd => QJ(dd, td(dd)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: dd => hd(dd, (Jd => ZJ(dd, Jd, td(dd)))),
        shift: dd => CJ(dd, (Jd => ZJ(dd, Jd, td(dd)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: JJ,
        shift: OJ,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: vJ,
        shift: qJ
      }, {
        mac: "Ctrl-ArrowUp",
        run: WJ,
        shift: IJ
      }, {
        key: "ArrowDown",
        run: kJ,
        shift: eJ,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: xJ,
        shift: BJ
      }, {
        mac: "Ctrl-ArrowDown",
        run: PJ,
        shift: GJ
      }, {
        key: "PageUp",
        run: WJ,
        shift: IJ
      }, {
        key: "PageDown",
        run: PJ,
        shift: GJ
      }, {
        key: "Home",
        run: dd => hd(dd, (Jd => ZJ(dd, Jd, !1))),
        shift: dd => CJ(dd, (Jd => ZJ(dd, Jd, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: vJ,
        shift: qJ
      }, {
        key: "End",
        run: dd => hd(dd, (Jd => ZJ(dd, Jd, !0))),
        shift: dd => CJ(dd, (Jd => ZJ(dd, Jd, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: xJ,
        shift: BJ
      }, {
        key: "Enter",
        run: fJ,
        shift: fJ
      }, {
        key: "Mod-a",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd;
          return kd(Jd.update({
            selection: {
              anchor: 0,
              head: Jd.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: FJ,
        shift: FJ,
        preventDefault: !0
      }, {
        key: "Delete",
        run: YJ,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: bJ,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: dd => mJ(dd, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: dd => iJ(dd, (Jd => {
          let kd = dd.moveToLineBoundary(Jd, !1).head;
          return Jd.head > kd ? kd : Math.max(0, Jd.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: dd => iJ(dd, (Jd => {
          let kd = dd.moveToLineBoundary(Jd, !0).head;
          return Jd.head < kd ? kd : Math.min(dd.state.doc.length, Jd.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: Vd,
        shift: oJ,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: zd,
        shift: lJ
      }, {
        key: "Ctrl-p",
        run: JJ,
        shift: OJ
      }, {
        key: "Ctrl-n",
        run: kJ,
        shift: eJ
      }, {
        key: "Ctrl-a",
        run: dd => hd(dd, (Jd => Pd.k.cursor(dd.lineBlockAt(Jd.head).from, 1))),
        shift: dd => CJ(dd, (Jd => Pd.k.cursor(dd.lineBlockAt(Jd.head).from)))
      }, {
        key: "Ctrl-e",
        run: dd => hd(dd, (Jd => Pd.k.cursor(dd.lineBlockAt(Jd.head).to, -1))),
        shift: dd => CJ(dd, (Jd => Pd.k.cursor(dd.lineBlockAt(Jd.head).to)))
      }, {
        key: "Ctrl-d",
        run: YJ
      }, {
        key: "Ctrl-h",
        run: FJ
      }, {
        key: "Ctrl-k",
        run: dd => iJ(dd, (Jd => {
          let kd = dd.lineBlockAt(Jd.head).to;
          return Jd.head < kd ? kd : Math.min(dd.state.doc.length, Jd.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: bJ
      }, {
        key: "Ctrl-o",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd;
          if (Jd.readOnly) return !1;
          let pd = Jd.changeByRange((dd => ({
            changes: {
              from: dd.from,
              to: dd.to,
              insert: Pd.I.of(["", ""])
            },
            range: Pd.k.cursor(dd.from)
          })));
          return kd(Jd.update(pd, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: dd => {
          let {
            state: Jd,
            dispatch: kd
          } = dd;
          if (Jd.readOnly) return !1;
          let pd = Jd.changeByRange((dd => {
            if (!dd.empty || 0 == dd.from || dd.from == Jd.doc.length) return {
              range: dd
            };
            let kd = dd.from,
              pd = Jd.doc.lineAt(kd),
              Nd = kd == pd.from ? kd - 1 : (0, Pd.X)(pd.text, kd - pd.from, !1) + pd.from,
              Wd = kd == pd.to ? kd + 1 : (0, Pd.X)(pd.text, kd - pd.from, !0) + pd.from;
            return {
              changes: {
                from: Nd,
                to: Wd,
                insert: Jd.doc.slice(kd, Wd).append(Jd.doc.slice(Nd, kd))
              },
              range: Pd.k.cursor(Wd)
            }
          }));
          return !pd.changes.empty && (kd(Jd.update(pd, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: PJ
      }].map((dd => ({
        mac: dd.key,
        run: dd.run,
        shift: dd.shift
      }))))),
      EJ = {
        key: "Tab",
        run: yJ,
        shift: DJ
      };
    var cJ = kd(41330),
      hJ = kd(41267),
      rJ = kd(41337),
      uJ = function(dd) {
        void 0 === dd && (dd = {});
        var {
          crosshairCursor: Jd = !1
        } = dd, kd = [];
        !1 !== dd.closeBracketsKeymap && (kd = kd.concat(hJ.g)), !1 !== dd.defaultKeymap && (kd = kd.concat(TJ)), !1 !== dd.searchKeymap && (kd = kd.concat(cJ.i)), !1 !== dd.historyKeymap && (kd = kd.concat(Td)), !1 !== dd.foldKeymap && (kd = kd.concat(gd.F)), !1 !== dd.completionKeymap && (kd = kd.concat(hJ.p)), !1 !== dd.lintKeymap && (kd = kd.concat(rJ.c));
        var pd = [];
        return !1 !== dd.lineNumbers && pd.push((0, Zd.Z)()), !1 !== dd.highlightActiveLineGutter && pd.push((0, Zd.M)()), !1 !== dd.highlightSpecialChars && pd.push((0, Zd.Q)()), !1 !== dd.history && pd.push(function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [qd, xd.of(dd), Zd.i.domEventHandlers({
            beforeinput(dd, Jd) {
              let kd = "historyUndo" == dd.inputType ? sd : "historyRedo" == dd.inputType ? ad : null;
              return !!kd && (dd.preventDefault(), kd(Jd))
            }
          })]
        }()), !1 !== dd.foldGutter && pd.push((0, gd.B)()), !1 !== dd.drawSelection && pd.push((0, Zd.y)()), !1 !== dd.dropCursor && pd.push((0, Zd.B)()), !1 !== dd.allowMultipleSelections && pd.push(Pd.l.allowMultipleSelections.of(!0)), !1 !== dd.indentOnInput && pd.push((0, gd.V)()), !1 !== dd.syntaxHighlighting && pd.push((0, gd.db)(gd.s, {
          fallback: !0
        })), !1 !== dd.bracketMatching && pd.push((0, gd.n)()), !1 !== dd.closeBrackets && pd.push((0, hJ.k)()), !1 !== dd.autocompletion && pd.push((0, hJ.c)()), !1 !== dd.rectangularSelection && pd.push((0, Zd.db)()), !1 !== Jd && pd.push((0, Zd.w)()), !1 !== dd.highlightActiveLine && pd.push((0, Zd.O)()), !1 !== dd.highlightSelectionMatches && pd.push((0, cJ.e)()), dd.tabSize && "number" === typeof dd.tabSize && pd.push(gd.Y.of(" ".repeat(dd.tabSize))), pd.concat([Zd.X.of(kd.flat())]).filter(Boolean)
      },
      tJ = kd(41314);
    const VJ = "#e5c07b",
      zJ = "#e06c75",
      HJ = "#56b6c2",
      wJ = "#ffffff",
      AJ = "#abb2bf",
      dk = "#7d8799",
      Jk = "#61afef",
      kk = "#98c379",
      pk = "#d19a66",
      Nk = "#c678dd",
      Wk = "#21252b",
      Pk = "#2c313a",
      Zk = "#282c34",
      gk = "#353a42",
      Ck = "#3E4451",
      Kk = "#528bff",
      lk = Zd.i.theme({
        "&": {
          color: AJ,
          backgroundColor: Zk
        },
        ".cm-content": {
          caretColor: Kk
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Kk
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Ck
        },
        ".cm-panels": {
          backgroundColor: Wk,
          color: AJ
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
          backgroundColor: Zk,
          color: dk,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Pk
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: gk
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: gk,
          borderBottomColor: gk
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Pk,
            color: AJ
          }
        }
      }, {
        dark: !0
      }),
      Qk = gd.c.define([{
        tag: tJ.m.keyword,
        color: Nk
      }, {
        tag: [tJ.m.name, tJ.m.deleted, tJ.m.character, tJ.m.propertyName, tJ.m.macroName],
        color: zJ
      }, {
        tag: [tJ.m.function(tJ.m.variableName), tJ.m.labelName],
        color: Jk
      }, {
        tag: [tJ.m.color, tJ.m.constant(tJ.m.name), tJ.m.standard(tJ.m.name)],
        color: pk
      }, {
        tag: [tJ.m.definition(tJ.m.name), tJ.m.separator],
        color: AJ
      }, {
        tag: [tJ.m.typeName, tJ.m.className, tJ.m.number, tJ.m.changed, tJ.m.annotation, tJ.m.modifier, tJ.m.self, tJ.m.namespace],
        color: VJ
      }, {
        tag: [tJ.m.operator, tJ.m.operatorKeyword, tJ.m.url, tJ.m.escape, tJ.m.regexp, tJ.m.link, tJ.m.special(tJ.m.string)],
        color: HJ
      }, {
        tag: [tJ.m.meta, tJ.m.comment],
        color: dk
      }, {
        tag: tJ.m.strong,
        fontWeight: "bold"
      }, {
        tag: tJ.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: tJ.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: tJ.m.link,
        color: dk,
        textDecoration: "underline"
      }, {
        tag: tJ.m.heading,
        fontWeight: "bold",
        color: zJ
      }, {
        tag: [tJ.m.atom, tJ.m.bool, tJ.m.special(tJ.m.variableName)],
        color: pk
      }, {
        tag: [tJ.m.processingInstruction, tJ.m.string, tJ.m.inserted],
        color: kk
      }, {
        tag: tJ.m.invalid,
        color: wJ
      }]),
      Lk = [lk, (0, gd.db)(Qk)];
    var Ok = Zd.i.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class ek {
      constructor(dd, Jd) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = Jd, this.timeoutMS = Jd, this.callbacks.push(dd)
      }
      Do() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var dd = this.callbacks.slice();
          this.callbacks.length = 0, dd.forEach((dd => {
            try {
              dd()
            } catch (Jd) {
              console.error("TimeoutLatch callback error:", Jd)
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
    class Rk {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(dd) {
        this.latches.add(dd), this.start()
      }
      remove(dd) {
        this.latches.delete(dd), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((dd => {
            dd.Do(), dd.isDone && this.remove(dd)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Ik = null,
      Gk = Pd.b.define(),
      vk = [];

    function xk(dd) {
      var {
        value: Jd,
        selection: kd,
        onChange: pd,
        onStatistics: Nd,
        onCreateEditor: gd,
        onUpdate: Cd,
        extensions: Kd = vk,
        autoFocus: od,
        theme: ld = "light",
        height: Qd = null,
        minHeight: Ld = null,
        maxHeight: Od = null,
        width: ed = null,
        minWidth: Rd = null,
        maxWidth: Id = null,
        placeholder: Gd = "",
        editable: vd = !0,
        readOnly: xd = !1,
        indentWithTab: qd = !0,
        basicSetup: Bd = !0,
        root: sd,
        initialState: ad
      } = dd, [Md, Fd] = (0, Wd.useState)(), [Yd, md] = (0, Wd.useState)(), [bd, Sd] = (0, Wd.useState)(), jd = (0, Wd.useState)((() => ({
        current: null
      })))[0], Xd = (0, Wd.useState)((() => ({
        current: null
      })))[0], fd = Zd.i.theme({
        "&": {
          height: Qd,
          minHeight: Ld,
          maxHeight: Od,
          width: ed,
          minWidth: Rd,
          maxWidth: Id
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), nd = Zd.i.updateListener.of((dd => {
        if (dd.docChanged && "function" === typeof pd && !dd.transactions.some((dd => dd.annotation(Gk)))) {
          jd.current ? jd.current.reset() : (jd.current = new ek((() => {
            if (Xd.current) {
              var dd = Xd.current;
              Xd.current = null, dd()
            }
            jd.current = null
          }), 200), ("undefined" === typeof window ? new Rk : (Ik || (Ik = new Rk), Ik)).add(jd.current));
          var Jd = dd.state.doc.toString();
          pd(Jd, dd)
        }
        Nd && Nd((dd => ({
          line: dd.state.doc.lineAt(dd.state.selection.main.from),
          lineCount: dd.state.doc.lines,
          lineBreak: dd.state.lineBreak,
          length: dd.state.doc.length,
          readOnly: dd.state.readOnly,
          tabSize: dd.state.tabSize,
          selection: dd.state.selection,
          selectionAsSingle: dd.state.selection.asSingle().main,
          UO: dd.state.selection.UO,
          selectionCode: dd.state.sliceDoc(dd.state.selection.main.from, dd.state.selection.main.to),
          selections: dd.state.selection.UO.map((Jd => dd.state.sliceDoc(Jd.from, Jd.to))),
          selectedText: dd.state.selection.UO.some((dd => !dd.empty))
        }))(dd))
      })), Ud = function(dd) {
        void 0 === dd && (dd = {});
        var {
          indentWithTab: Jd = !0,
          editable: kd = !0,
          readOnly: pd = !1,
          theme: Nd = "light",
          placeholder: Wd = "",
          basicSetup: gd = !0
        } = dd, Cd = [];
        switch (Jd && Cd.unshift(Zd.X.of([EJ])), gd && ("boolean" === typeof gd ? Cd.unshift(uJ()) : Cd.unshift(uJ(gd))), Wd && Cd.unshift((0, Zd.ab)(Wd)), Nd) {
          case "light":
            Cd.push(Ok);
            break;
          case "dark":
            Cd.push(Lk);
            break;
          case "none":
            break;
          default:
            Cd.push(Nd)
        }
        return !1 === kd && Cd.push(Zd.i.editable.of(!1)), pd && Cd.push(Pd.l.readOnly.of(!0)), [...Cd]
      }({
        theme: ld,
        editable: vd,
        readOnly: xd,
        placeholder: Gd,
        indentWithTab: qd,
        basicSetup: Bd
      }), yd = [nd, fd, ...Ud];
      return Cd && "function" === typeof Cd && yd.push(Zd.i.updateListener.of(Cd)), yd = yd.concat(Kd), (0, Wd.useLayoutEffect)((() => {
        if (Md && !bd) {
          var dd = {
              doc: Jd,
              selection: kd,
              extensions: yd
            },
            pd = ad ? Pd.l.fromJSON(ad.json, dd, ad.fields) : Pd.l.create(dd);
          if (Sd(pd), !Yd) {
            var Nd = new Zd.i({
              state: pd,
              parent: Md,
              root: sd
            });
            md(Nd), gd && gd(Nd, pd)
          }
        }
        return () => {
          Yd && (Sd(void 0), md(void 0))
        }
      }), [Md, bd]), (0, Wd.useEffect)((() => {
        dd.container && Fd(dd.container)
      }), [dd.container]), (0, Wd.useEffect)((() => () => {
        Yd && (Yd.destroy(), md(void 0)), jd.current && (jd.current.cancel(), jd.current = null)
      }), [Yd]), (0, Wd.useEffect)((() => {
        od && Yd && Yd.focus()
      }), [od, Yd]), (0, Wd.useEffect)((() => {
        Yd && Yd.dispatch({
          effects: Pd.C.reconfigure.of(yd)
        })
      }), [ld, Kd, Qd, Ld, Od, ed, Rd, Id, Gd, vd, xd, qd, Bd, pd, Cd]), (0, Wd.useEffect)((() => {
        if (void 0 !== Jd) {
          var dd = Yd ? Yd.state.doc.toString() : "";
          if (Yd && Jd !== dd) {
            var kd = () => {
              Yd && Jd !== Yd.state.doc.toString() && Yd.dispatch({
                changes: {
                  from: 0,
                  to: Yd.state.doc.toString().length,
                  insert: Jd || ""
                },
                annotations: [Gk.of(!0)]
              })
            };
            jd.current && !jd.current.isDone ? Xd.current = kd : kd()
          }
        }
      }), [Jd, Yd]), {
        state: bd,
        setState: Sd,
        view: Yd,
        setView: md,
        container: Md,
        setContainer: Fd
      }
    }
    var qk = kd(1103),
      Bk = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      sk = (0, Wd.forwardRef)(((dd, Jd) => {
        var {
          className: kd,
          value: Pd = "",
          selection: Zd,
          extensions: gd = [],
          onChange: Cd,
          onStatistics: Kd,
          onCreateEditor: od,
          onUpdate: ld,
          autoFocus: Qd,
          theme: Ld = "light",
          height: Od,
          minHeight: ed,
          maxHeight: Rd,
          width: Id,
          minWidth: Gd,
          maxWidth: vd,
          basicSetup: xd,
          placeholder: qd,
          indentWithTab: Bd,
          editable: sd,
          readOnly: ad,
          root: Md,
          initialState: Fd
        } = dd, Yd = (0, Nd.b)(dd, Bk), md = (0, Wd.useRef)(null), {
          state: bd,
          view: Sd,
          container: jd,
          setContainer: Xd
        } = xk({
          root: Md,
          value: Pd,
          autoFocus: Qd,
          theme: Ld,
          height: Od,
          minHeight: ed,
          maxHeight: Rd,
          width: Id,
          minWidth: Gd,
          maxWidth: vd,
          basicSetup: xd,
          placeholder: qd,
          indentWithTab: Bd,
          editable: sd,
          readOnly: ad,
          selection: Zd,
          onChange: Cd,
          onStatistics: Kd,
          onCreateEditor: od,
          onUpdate: ld,
          extensions: gd,
          initialState: Fd
        });
        (0, Wd.useImperativeHandle)(Jd, (() => ({
          editor: md.current,
          state: bd,
          view: Sd
        })), [md, jd, bd, Sd]);
        var fd = (0, Wd.useCallback)((dd => {
          md.current = dd, Xd(dd)
        }), [Xd]);
        if ("string" !== typeof Pd) throw new Error("value must be typeof string but got " + typeof Pd);
        var nd = "string" === typeof Ld ? "cm-theme-" + Ld : "cm-theme";
        return (0, qk.jsx)("div", (0, pd.c)({
          ref: fd,
          className: nd + (kd ? " " + kd : "")
        }, Yd))
      }));
    sk.displayName = "CodeMirror";
    const ik = sk
  },
  41298: (dd, Jd, kd) => {
    function pd() {
      var dd = arguments[0];
      "string" == typeof dd && (dd = document.createElement(dd));
      var Jd = 1,
        kd = arguments[1];
      if (kd && "object" == typeof kd && null == kd.nodeType && !Array.isArray(kd)) {
        for (var pd in kd)
          if (Object.prototype.hasOwnProperty.call(kd, pd)) {
            var Wd = kd[pd];
            "string" == typeof Wd ? dd.setAttribute(pd, Wd) : null != Wd && (dd[pd] = Wd)
          } Jd++
      }
      for (; Jd < arguments.length; Jd++) Nd(dd, arguments[Jd]);
      return dd
    }

    function Nd(dd, Jd) {
      if ("string" == typeof Jd) dd.appendChild(document.createTextNode(Jd));
      else if (null == Jd);
      else if (null != Jd.nodeType) dd.appendChild(Jd);
      else {
        if (!Array.isArray(Jd)) throw new RangeError("Unsupported child node: " + Jd);
        for (var kd = 0; kd < Jd.length; kd++) Nd(dd, Jd[kd])
      }
    }
    kd.d(Jd, {
      d: () => pd
    })
  },
  41289: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    const pd = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Nd = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      Wd = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class Pd {
      constructor(dd, Jd) {
        this.rules = [];
        let {
          finish: kd
        } = Jd || {};

        function pd(dd) {
          return /^@/.test(dd) ? [dd] : dd.split(/,\s*/)
        }

        function Nd(dd, Jd, Wd, Pd) {
          let Zd = [],
            gd = /^@(\w+)\b/.exec(dd[0]),
            Cd = gd && "keyframes" == gd[1];
          if (gd && null == Jd) return Wd.push(dd[0] + ";");
          for (let kd in Jd) {
            let Pd = Jd[kd];
            if (/&/.test(kd)) Nd(kd.split(/,\s*/).map((Jd => dd.map((dd => Jd.replace(/&/, dd))))).reduce(((dd, Jd) => dd.concat(Jd))), Pd, Wd);
            else if (Pd && "object" == typeof Pd) {
              if (!gd) throw new RangeError("The value of a property (" + kd + ") should be a primitive value.");
              Nd(pd(kd), Pd, Zd, Cd)
            } else null != Pd && Zd.push(kd.replace(/_.*/, "").replace(/[A-Z]/g, (dd => "-" + dd.toLowerCase())) + ": " + Pd + ";")
          }(Zd.length || Cd) && Wd.push((!kd || gd || Pd ? dd : dd.map(kd)).join(", ") + " {" + Zd.join(" ") + "}")
        }
        for (let Wd in dd) Nd(pd(Wd), dd[Wd], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let dd = Wd[pd] || 1;
        return Wd[pd] = dd + 1, "\u037c" + dd.toString(36)
      }
      static mount(dd, Jd, kd) {
        let pd = dd[Nd],
          Wd = kd && kd.nonce;
        pd ? Wd && pd.setNonce(Wd) : pd = new gd(dd, Wd), pd.mount(Array.isArray(Jd) ? Jd : [Jd], dd)
      }
    }
    let Zd = new Map;
    class gd {
      constructor(dd, Jd) {
        let kd = dd.ownerDocument || dd,
          pd = kd.defaultView;
        if (!dd.head && dd.adoptedStyleSheets && pd.CSSStyleSheet) {
          let Jd = Zd.get(kd);
          if (Jd) return dd[Nd] = Jd;
          this.sheet = new pd.CSSStyleSheet, Zd.set(kd, this)
        } else this.styleTag = kd.createElement("style"), Jd && this.styleTag.setAttribute("nonce", Jd);
        this.modules = [], dd[Nd] = this
      }
      mount(dd, Jd) {
        let kd = this.sheet,
          pd = 0,
          Nd = 0;
        for (let Wd = 0; Wd < dd.length; Wd++) {
          let Jd = dd[Wd],
            Pd = this.modules.indexOf(Jd);
          if (Pd < Nd && Pd > -1 && (this.modules.splice(Pd, 1), Nd--, Pd = -1), -1 == Pd) {
            if (this.modules.splice(Nd++, 0, Jd), kd)
              for (let dd = 0; dd < Jd.rules.length; dd++) kd.insertRule(Jd.rules[dd], pd++)
          } else {
            for (; Nd < Pd;) pd += this.modules[Nd++].rules.length;
            pd += Jd.rules.length, Nd++
          }
        }
        if (kd) Jd.adoptedStyleSheets.indexOf(this.sheet) < 0 && (Jd.adoptedStyleSheets = [this.sheet, ...Jd.adoptedStyleSheets]);
        else {
          let dd = "";
          for (let Jd = 0; Jd < this.modules.length; Jd++) dd += this.modules[Jd].getRules() + "\n";
          this.styleTag.textContent = dd;
          let kd = Jd.head || Jd;
          this.styleTag.parentNode != kd && kd.insertBefore(this.styleTag, kd.firstChild)
        }
      }
      setNonce(dd) {
        this.styleTag && this.styleTag.getAttribute("nonce") != dd && this.styleTag.setAttribute("nonce", dd)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);