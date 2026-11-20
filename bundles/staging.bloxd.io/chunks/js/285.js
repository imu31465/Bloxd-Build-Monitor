export const id = 285;
export const ids = [285];
export const modules = {
  40593: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => xz,
      d: () => Yz,
      g: () => cz,
      k: () => dv,
      l: () => tz,
      m: () => Nv,
      o: () => Wz
    });
    var hv = Pv(40599),
      Sv = Pv(40605),
      ev = Pv(40626);
    class gv {
      constructor(vv, zv, Pv, hv) {
        this.state = vv, this.pos = zv, this.explicit = Pv, this.view = hv, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(vv) {
        let zv = (0, ev.tb)(this.state).resolveInner(this.pos, -1);
        for (; zv && vv.indexOf(zv.name) < 0;) zv = zv.parent;
        return zv ? {
          from: zv.from,
          to: this.pos,
          text: this.state.sliceDoc(zv.from, this.pos),
          type: zv.type
        } : null
      }
      matchBefore(vv) {
        let zv = this.state.doc.lineAt(this.pos),
          Pv = Math.max(zv.from, this.pos - 250),
          hv = zv.text.slice(Pv - zv.from, this.pos - zv.from),
          Sv = hv.search(Wv(vv, !1));
        return Sv < 0 ? null : {
          from: Pv + Sv,
          to: this.pos,
          text: hv.slice(Sv)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(vv, zv, Pv) {
        "abort" == vv && this.abortListeners && (this.abortListeners.push(zv), Pv && Pv.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function pv(vv) {
      let zv = Object.keys(vv).join(""),
        Pv = /\w/.test(zv);
      return Pv && (zv = zv.replace(/\w/g, "")), `[${Pv?"\\w":""}${zv.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function dv(vv) {
      let zv = vv.map((vv => "string" == typeof vv ? {
          label: vv
        } : vv)),
        [Pv, hv] = zv.every((vv => /^\w+$/.test(vv.label))) ? [/\w*$/, /\w+$/] : function(vv) {
          let zv = Object.create(null),
            Pv = Object.create(null);
          for (let {
              label: Sv
            }
            of vv) {
            zv[Sv[0]] = !0;
            for (let vv = 1; vv < Sv.length; vv++) Pv[Sv[vv]] = !0
          }
          let hv = pv(zv) + pv(Pv) + "*$";
          return [new RegExp("^" + hv), new RegExp(hv)]
        }(zv);
      return vv => {
        let Sv = vv.matchBefore(hv);
        return Sv || vv.explicit ? {
          from: Sv ? Sv.from : vv.pos,
          options: zv,
          validFor: Pv
        } : null
      }
    }

    function Nv(vv, zv) {
      return Pv => {
        for (let zv = (0, ev.tb)(Pv.state).resolveInner(Pv.pos, -1); zv; zv = zv.parent) {
          if (vv.indexOf(zv.name) > -1) return null;
          if (zv.type.isTop) break
        }
        return zv(Pv)
      }
    }
    class lv {
      constructor(vv, zv, Pv, hv) {
        this.completion = vv, this.source = zv, this.match = Pv, this.score = hv
      }
    }

    function Tv(vv) {
      return vv.selection.main.from
    }

    function Wv(vv, zv) {
      var Pv;
      let {
        source: hv
      } = vv, Sv = zv && "^" != hv[0], ev = "$" != hv[hv.length - 1];
      return Sv || ev ? new RegExp(`${Sv?"^":""}(?:${hv})${ev?"$":""}`, null !== (Pv = vv.flags) && void 0 !== Pv ? Pv : vv.ignoreCase ? "i" : "") : vv
    }
    const wv = hv.c.define();

    function av(vv, zv, Pv, Sv) {
      let {
        main: ev
      } = vv.selection, gv = Pv - ev.from, pv = Sv - ev.from;
      return {
        ...vv.changeByRange((dv => {
          if (dv != ev && Pv != Sv && vv.sliceDoc(dv.from + gv, dv.from + pv) != vv.sliceDoc(Pv, Sv)) return {
            range: dv
          };
          let Nv = vv.toText(zv);
          return {
            changes: {
              from: dv.from + gv,
              to: Sv == ev.from ? dv.to : dv.from + pv,
              insert: Nv
            },
            range: hv.j.cursor(dv.from + gv + Nv.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const sv = new WeakMap;

    function Cv(vv) {
      if (!Array.isArray(vv)) return vv;
      let zv = sv.get(vv);
      return zv || sv.set(vv, zv = dv(vv)), zv
    }
    const iv = hv.B.define(),
      cv = hv.B.define();
    class Gv {
      constructor(vv) {
        this.pattern = vv, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let zv = 0; zv < vv.length;) {
          let Pv = (0, hv.K)(vv, zv),
            Sv = (0, hv.L)(Pv);
          this.chars.push(Pv);
          let ev = vv.slice(zv, zv + Sv),
            gv = ev.toUpperCase();
          this.folded.push((0, hv.K)(gv == ev ? ev.toLowerCase() : gv, 0)), zv += Sv
        }
        this.astral = vv.length != this.chars.length
      }
      ret(vv, zv) {
        return this.score = vv, this.matched = zv, this
      }
      match(vv) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (vv.length < this.pattern.length) return null;
        let {
          chars: zv,
          folded: Pv,
          any: Sv,
          precise: ev,
          byWord: gv
        } = this;
        if (1 == zv.length) {
          let Sv = (0, hv.K)(vv, 0),
            ev = (0, hv.L)(Sv),
            gv = ev == vv.length ? 0 : -100;
          if (Sv == zv[0]);
          else {
            if (Sv != Pv[0]) return null;
            gv += -200
          }
          return this.ret(gv, [0, ev])
        }
        let pv = vv.indexOf(this.pattern);
        if (0 == pv) return this.ret(vv.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let dv = zv.length,
          Nv = 0;
        if (pv < 0) {
          for (let ev = 0, gv = Math.min(vv.length, 200); ev < gv && Nv < dv;) {
            let gv = (0, hv.K)(vv, ev);
            gv != zv[Nv] && gv != Pv[Nv] || (Sv[Nv++] = ev), ev += (0, hv.L)(gv)
          }
          if (Nv < dv) return null
        }
        let lv = 0,
          Tv = 0,
          Wv = !1,
          wv = 0,
          av = -1,
          sv = -1,
          Cv = /[a-z]/.test(vv),
          iv = !0;
        for (let cv = 0, Gv = Math.min(vv.length, 200), mv = 0; cv < Gv && Tv < dv;) {
          let Sv = (0, hv.K)(vv, cv);
          pv < 0 && (lv < dv && Sv == zv[lv] && (ev[lv++] = cv), wv < dv && (Sv == zv[wv] || Sv == Pv[wv] ? (0 == wv && (av = cv), sv = cv + 1, wv++) : wv = 0));
          let Nv, Gv = Sv < 255 ? Sv >= 48 && Sv <= 57 || Sv >= 97 && Sv <= 122 ? 2 : Sv >= 65 && Sv <= 90 ? 1 : 0 : (Nv = (0, hv._)(Sv)) != Nv.toLowerCase() ? 1 : Nv != Nv.toUpperCase() ? 2 : 0;
          (!cv || 1 == Gv && Cv || 0 == mv && 0 != Gv) && (zv[Tv] == Sv || Pv[Tv] == Sv && (Wv = !0) ? gv[Tv++] = cv : gv.length && (iv = !1)), mv = Gv, cv += (0, hv.L)(Sv)
        }
        return Tv == dv && 0 == gv[0] && iv ? this.result((Wv ? -200 : 0) - 100, gv, vv) : wv == dv && 0 == av ? this.ret(-200 - vv.length + (sv == vv.length ? 0 : -100), [0, sv]) : pv > -1 ? this.ret(-700 - vv.length, [pv, pv + this.pattern.length]) : wv == dv ? this.ret(-900 - vv.length, [av, sv]) : Tv == dv ? this.result((Wv ? -200 : 0) - 100 - 700 + (iv ? 0 : -1100), gv, vv) : 2 == zv.length ? null : this.result((Sv[0] ? -700 : 0) - 200 - 1100, Sv, vv)
      }
      result(vv, zv, Pv) {
        let Sv = [],
          ev = 0;
        for (let gv of zv) {
          let vv = gv + (this.astral ? (0, hv.L)((0, hv.K)(Pv, gv)) : 1);
          ev && Sv[ev - 1] == gv ? Sv[ev - 1] = vv : (Sv[ev++] = gv, Sv[ev++] = vv)
        }
        return this.ret(vv - Pv.length, Sv)
      }
    }
    class mv {
      constructor(vv) {
        this.pattern = vv, this.matched = [], this.score = 0, this.folded = vv.toLowerCase()
      }
      match(vv) {
        if (vv.length < this.pattern.length) return null;
        let zv = vv.slice(0, this.pattern.length),
          Pv = zv == this.pattern ? 0 : zv.toLowerCase() == this.folded ? -200 : null;
        return null == Pv ? null : (this.matched = [0, zv.length], this.score = Pv + (vv.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const jv = hv.q.define({
      combine: vv => (0, hv.O)(vv, {
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
        positionInfo: Fv,
        filterStrict: !1,
        compareCompletions: (vv, zv) => (vv.sortText || vv.label).localeCompare(zv.sortText || zv.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (vv, zv) => vv && zv,
        closeOnBlur: (vv, zv) => vv && zv,
        icons: (vv, zv) => vv && zv,
        tooltipClass: (vv, zv) => Pv => fv(vv(Pv), zv(Pv)),
        optionClass: (vv, zv) => Pv => fv(vv(Pv), zv(Pv)),
        addToOptions: (vv, zv) => vv.concat(zv),
        filterStrict: (vv, zv) => vv || zv
      })
    });

    function fv(vv, zv) {
      return vv ? zv ? vv + " " + zv : vv : zv
    }

    function Fv(vv, zv, Pv, hv, ev, gv) {
      let pv, dv, Nv = vv.textDirection == Sv.f.RTL,
        lv = Nv,
        Tv = !1,
        Wv = "top",
        wv = zv.left - ev.left,
        av = ev.right - zv.right,
        sv = hv.right - hv.left,
        Cv = hv.bottom - hv.top;
      if (lv && wv < Math.min(sv, av) ? lv = !1 : !lv && av < Math.min(sv, wv) && (lv = !0), sv <= (lv ? wv : av)) pv = Math.max(ev.top, Math.min(Pv.top, ev.bottom - Cv)) - zv.top, dv = Math.min(400, lv ? wv : av);
      else {
        Tv = !0, dv = Math.min(400, (Nv ? zv.right : ev.right - zv.left) - 30);
        let vv = ev.bottom - zv.bottom;
        vv >= Cv || vv > zv.top ? pv = Pv.bottom - zv.top : (Wv = "bottom", pv = zv.bottom - Pv.top)
      }
      return {
        style: `${Wv}: ${pv/((zv.bottom-zv.top)/gv.offsetHeight)}px; max-width: ${dv/((zv.right-zv.left)/gv.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Tv ? Nv ? "left-narrow" : "right-narrow" : lv ? "left" : "right")
      }
    }
    const Yv = hv.B.define();

    function nv(vv, zv, Pv) {
      if (vv <= Pv) return {
        from: 0,
        to: vv
      };
      if (zv < 0 && (zv = 0), zv <= vv >> 1) {
        let vv = Math.floor(zv / Pv);
        return {
          from: vv * Pv,
          to: (vv + 1) * Pv
        }
      }
      let hv = Math.floor((vv - zv) / Pv);
      return {
        from: vv - (hv + 1) * Pv,
        to: vv - hv * Pv
      }
    }
    class Ov {
      constructor(vv, zv, Pv) {
        this.view = vv, this.stateField = zv, this.applyCompletion = Pv, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: vv => this.placeInfo(vv),
          key: this
        }, this.space = null, this.currentClass = "";
        let hv = vv.state.field(zv),
          {
            options: Sv,
            selected: ev
          } = hv.open,
          gv = vv.state.facet(jv);
        this.optionContent = function(vv) {
          let zv = vv.addToOptions.slice();
          return vv.icons && zv.push({
            render(vv) {
              let zv = document.createElement("div");
              return zv.classList.add("cm-completionIcon"), vv.type && zv.classList.add(...vv.type.split(/\s+/g).map((vv => "cm-completionIcon-" + vv))), zv.setAttribute("aria-hidden", "true"), zv
            },
            position: 20
          }), zv.push({
            render(vv, zv, Pv, hv) {
              let Sv = document.createElement("span");
              Sv.className = "cm-completionLabel";
              let ev = vv.displayLabel || vv.label,
                gv = 0;
              for (let pv = 0; pv < hv.length;) {
                let vv = hv[pv++],
                  zv = hv[pv++];
                vv > gv && Sv.appendChild(document.createTextNode(ev.slice(gv, vv)));
                let Pv = Sv.appendChild(document.createElement("span"));
                Pv.appendChild(document.createTextNode(ev.slice(vv, zv))), Pv.className = "cm-completionMatchedText", gv = zv
              }
              return gv < ev.length && Sv.appendChild(document.createTextNode(ev.slice(gv))), Sv
            },
            position: 50
          }, {
            render(vv) {
              if (!vv.detail) return null;
              let zv = document.createElement("span");
              return zv.className = "cm-completionDetail", zv.textContent = vv.detail, zv
            },
            position: 80
          }), zv.sort(((vv, zv) => vv.position - zv.position)).map((vv => vv.render))
        }(gv), this.optionClass = gv.optionClass, this.tooltipClass = gv.tooltipClass, this.range = nv(Sv.length, ev, gv.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(vv.state), this.dom.addEventListener("mousedown", (Pv => {
          let {
            options: hv
          } = vv.state.field(zv).open;
          for (let zv, Sv = Pv.target; Sv && Sv != this.dom; Sv = Sv.parentNode)
            if ("LI" == Sv.nodeName && (zv = /-(\d+)$/.exec(Sv.id)) && +zv[1] < hv.length) return this.applyCompletion(vv, hv[+zv[1]]), void Pv.preventDefault();
          if (Pv.target == this.list) {
            let zv = this.list.classList.contains("cm-completionListIncompleteTop") && Pv.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && Pv.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != zv && (vv.dispatch({
              effects: Yv.of(zv)
            }), Pv.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (zv => {
          let Pv = vv.state.field(this.stateField, !1);
          Pv && Pv.tooltip && vv.state.facet(jv).closeOnBlur && zv.relatedTarget != vv.contentDOM && vv.dispatch({
            effects: cv.of(null)
          })
        })), this.showOptions(Sv, hv.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(vv, zv) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(vv, zv, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(vv) {
        var zv;
        let Pv = vv.state.field(this.stateField),
          hv = vv.startState.field(this.stateField);
        if (this.updateTooltipClass(vv.state), Pv != hv) {
          let {
            options: Sv,
            selected: ev,
            disabled: gv
          } = Pv.open;
          hv.open && hv.open.options == Sv || (this.range = nv(Sv.length, ev, vv.state.facet(jv).maxRenderedOptions), this.showOptions(Sv, Pv.id)), this.updateSel(), gv != (null === (zv = hv.open) || void 0 === zv ? void 0 : zv.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!gv)
        }
      }
      updateTooltipClass(vv) {
        let zv = this.tooltipClass(vv);
        if (zv != this.currentClass) {
          for (let vv of this.currentClass.split(" ")) vv && this.dom.classList.remove(vv);
          for (let vv of zv.split(" ")) vv && this.dom.classList.add(vv);
          this.currentClass = zv
        }
      }
      positioned(vv) {
        this.space = vv, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let vv = this.view.state.field(this.stateField),
          zv = vv.open;
        (zv.selected > -1 && zv.selected < this.range.from || zv.selected >= this.range.to) && (this.range = nv(zv.options.length, zv.selected, this.view.state.facet(jv).maxRenderedOptions), this.showOptions(zv.options, vv.id));
        let Pv = this.updateSelectedOption(zv.selected);
        if (Pv) {
          this.destroyInfo();
          let {
            completion: hv
          } = zv.options[zv.selected], {
            info: ev
          } = hv;
          if (!ev) return;
          let gv = "string" === typeof ev ? document.createTextNode(ev) : ev(hv);
          if (!gv) return;
          "then" in gv ? gv.then((zv => {
            zv && this.view.state.field(this.stateField, !1) == vv && this.addInfoPane(zv, hv)
          })).catch((vv => (0, Sv.U)(this.view.state, vv, "completion info"))) : (this.addInfoPane(gv, hv), Pv.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(vv, zv) {
        this.destroyInfo();
        let Pv = this.info = document.createElement("div");
        if (Pv.className = "cm-tooltip cm-completionInfo", Pv.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != vv.nodeType) Pv.appendChild(vv), this.infoDestroy = null;
        else {
          let {
            dom: zv,
            destroy: hv
          } = vv;
          Pv.appendChild(zv), this.infoDestroy = hv || null
        }
        this.dom.appendChild(Pv), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(vv) {
        let zv = null;
        for (let Pv = this.list.firstChild, hv = this.range.from; Pv; Pv = Pv.nextSibling, hv++) "LI" == Pv.nodeName && Pv.id ? hv == vv ? Pv.hasAttribute("aria-selected") || (Pv.setAttribute("aria-selected", "true"), zv = Pv) : Pv.hasAttribute("aria-selected") && (Pv.removeAttribute("aria-selected"), Pv.removeAttribute("aria-describedby")) : hv--;
        return zv && function(vv, zv) {
          let Pv = vv.getBoundingClientRect(),
            hv = zv.getBoundingClientRect(),
            Sv = Pv.height / vv.offsetHeight;
          hv.top < Pv.top ? vv.scrollTop -= (Pv.top - hv.top) / Sv : hv.bottom > Pv.bottom && (vv.scrollTop += (hv.bottom - Pv.bottom) / Sv)
        }(this.list, zv), zv
      }
      measureInfo() {
        let vv = this.dom.querySelector("[aria-selected]");
        if (!vv || !this.info) return null;
        let zv = this.dom.getBoundingClientRect(),
          Pv = this.info.getBoundingClientRect(),
          hv = vv.getBoundingClientRect(),
          Sv = this.space;
        if (!Sv) {
          let vv = this.dom.ownerDocument.documentElement;
          Sv = {
            left: 0,
            top: 0,
            right: vv.clientWidth,
            bottom: vv.clientHeight
          }
        }
        return hv.top > Math.min(Sv.bottom, zv.bottom) - 10 || hv.bottom < Math.max(Sv.top, zv.top) + 10 ? null : this.view.state.facet(jv).positionInfo(this.view, zv, hv, Pv, Sv, this.dom)
      }
      placeInfo(vv) {
        this.info && (vv ? (vv.style && (this.info.style.cssText = vv.style), this.info.className = "cm-tooltip cm-completionInfo " + (vv.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(vv, zv, Pv) {
        const hv = document.createElement("ul");
        hv.id = zv, hv.setAttribute("role", "listbox"), hv.setAttribute("aria-expanded", "true"), hv.setAttribute("aria-label", this.view.state.phrase("Completions")), hv.addEventListener("mousedown", (vv => {
          vv.target == hv && vv.preventDefault()
        }));
        let Sv = null;
        for (let ev = Pv.from; ev < Pv.to; ev++) {
          let {
            completion: gv,
            match: pv
          } = vv[ev], {
            section: dv
          } = gv;
          if (dv) {
            let vv = "string" == typeof dv ? dv : dv.name;
            if (vv != Sv && (ev > Pv.from || 0 == Pv.from))
              if (Sv = vv, "string" != typeof dv && dv.header) hv.appendChild(dv.header(dv));
              else {
                hv.appendChild(document.createElement("completion-section")).textContent = vv
              }
          }
          const Nv = hv.appendChild(document.createElement("li"));
          Nv.id = zv + "-" + ev, Nv.setAttribute("role", "option");
          let lv = this.optionClass(gv);
          lv && (Nv.className = lv);
          for (let vv of this.optionContent) {
            let zv = vv(gv, this.view.state, this.view, pv);
            zv && Nv.appendChild(zv)
          }
        }
        return Pv.from && hv.classList.add("cm-completionListIncompleteTop"), Pv.to < vv.length && hv.classList.add("cm-completionListIncompleteBottom"), hv
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Dv(vv, zv) {
      return Pv => new Ov(Pv, vv, zv)
    }

    function Kv(vv) {
      return 100 * (vv.boost || 0) + (vv.apply ? 10 : 0) + (vv.info ? 5 : 0) + (vv.type ? 1 : 0)
    }
    class Vv {
      constructor(vv, zv, Pv, hv, Sv, ev) {
        this.options = vv, this.attrs = zv, this.tooltip = Pv, this.timestamp = hv, this.selected = Sv, this.disabled = ev
      }
      setSelected(vv, zv) {
        return vv == this.selected || vv >= this.options.length ? this : new Vv(this.options, tv(zv, vv), this.tooltip, this.timestamp, vv, this.disabled)
      }
      static build(vv, zv, Pv, hv, Sv, ev) {
        if (hv && !ev && vv.some((vv => vv.isPending))) return hv.setDisabled();
        let gv = function(vv, zv) {
          let Pv = [],
            hv = null,
            Sv = null,
            ev = vv => {
              Pv.push(vv);
              let {
                section: zv
              } = vv.completion;
              if (zv) {
                hv || (hv = []);
                let vv = "string" == typeof zv ? zv : zv.name;
                hv.some((zv => zv.name == vv)) || hv.push("string" == typeof zv ? {
                  name: vv
                } : zv)
              }
            },
            gv = zv.facet(jv);
          for (let Tv of vv)
            if (Tv.hasResult()) {
              let vv = Tv.result.getMatch;
              if (!1 === Tv.result.filter)
                for (let zv of Tv.result.options) ev(new lv(zv, Tv.source, vv ? vv(zv) : [], 1e9 - Pv.length));
              else {
                let Pv, hv = zv.sliceDoc(Tv.from, Tv.to),
                  pv = gv.filterStrict ? new mv(hv) : new Gv(hv);
                for (let zv of Tv.result.options)
                  if (Pv = pv.match(zv.label)) {
                    let hv = zv.displayLabel ? vv ? vv(zv, Pv.matched) : [] : Pv.matched,
                      gv = Pv.score + (zv.boost || 0);
                    if (ev(new lv(zv, Tv.source, hv, gv)), "object" == typeof zv.section && "dynamic" === zv.section.rank) {
                      let {
                        name: vv
                      } = zv.section;
                      Sv || (Sv = Object.create(null)), Sv[vv] = Math.max(gv, Sv[vv] || -1e9)
                    }
                  }
              }
            } if (hv) {
            let vv = Object.create(null),
              zv = 0,
              ev = (vv, zv) => ("dynamic" === vv.rank && "dynamic" === zv.rank ? Sv[zv.name] - Sv[vv.name] : 0) || ("number" == typeof vv.rank ? vv.rank : 1e9) - ("number" == typeof zv.rank ? zv.rank : 1e9) || (vv.name < zv.name ? -1 : 1);
            for (let Pv of hv.sort(ev)) zv -= 1e5, vv[Pv.name] = zv;
            for (let hv of Pv) {
              let {
                section: zv
              } = hv.completion;
              zv && (hv.score += vv["string" == typeof zv ? zv : zv.name])
            }
          }
          let pv = [],
            dv = null,
            Nv = gv.compareCompletions;
          for (let lv of Pv.sort(((vv, zv) => zv.score - vv.score || Nv(vv.completion, zv.completion)))) {
            let vv = lv.completion;
            !dv || dv.label != vv.label || dv.detail != vv.detail || null != dv.type && null != vv.type && dv.type != vv.type || dv.apply != vv.apply || dv.boost != vv.boost ? pv.push(lv) : Kv(lv.completion) > Kv(dv) && (pv[pv.length - 1] = lv), dv = lv.completion
          }
          return pv
        }(vv, zv);
        if (!gv.length) return hv && vv.some((vv => vv.isPending)) ? hv.setDisabled() : null;
        let pv = zv.facet(jv).selectOnOpen ? 0 : -1;
        if (hv && hv.selected != pv && -1 != hv.selected) {
          let vv = hv.options[hv.selected].completion;
          for (let zv = 0; zv < gv.length; zv++)
            if (gv[zv].completion == vv) {
              pv = zv;
              break
            }
        }
        return new Vv(gv, tv(Pv, pv), {
          pos: vv.reduce(((vv, zv) => zv.hasResult() ? Math.min(vv, zv.from) : vv), 1e8),
          create: Mv,
          above: Sv.aboveCursor
        }, hv ? hv.timestamp : Date.now(), pv, !1)
      }
      map(vv) {
        return new Vv(this.options, this.attrs, {
          ...this.tooltip,
          pos: vv.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new Vv(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Uv {
      constructor(vv, zv, Pv) {
        this.active = vv, this.id = zv, this.open = Pv
      }
      static start() {
        return new Uv(qv, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(vv) {
        let {
          state: zv
        } = vv, Pv = zv.facet(jv), hv = (Pv.override || zv.languageDataAt("autocomplete", Tv(zv)).map(Cv)).map((zv => (this.active.find((vv => vv.source == zv)) || new Qv(zv, this.active.some((vv => 0 != vv.state)) ? 1 : 0)).update(vv, Pv)));
        hv.length == this.active.length && hv.every(((vv, zv) => vv == this.active[zv])) && (hv = this.active);
        let Sv = this.open,
          ev = vv.effects.some((vv => vv.is(Av)));
        Sv && vv.docChanged && (Sv = Sv.map(vv.changes)), vv.selection || hv.some((zv => zv.hasResult() && vv.changes.touchesRange(zv.from, zv.to))) || ! function(vv, zv) {
          if (vv == zv) return !0;
          for (let Pv = 0, hv = 0;;) {
            for (; Pv < vv.length && !vv[Pv].hasResult();) Pv++;
            for (; hv < zv.length && !zv[hv].hasResult();) hv++;
            let Sv = Pv == vv.length,
              ev = hv == zv.length;
            if (Sv || ev) return Sv == ev;
            if (vv[Pv++].result != zv[hv++].result) return !1
          }
        }(hv, this.active) || ev ? Sv = Vv.build(hv, zv, this.id, Sv, Pv, ev) : Sv && Sv.disabled && !hv.some((vv => vv.isPending)) && (Sv = null), !Sv && hv.every((vv => !vv.isPending)) && hv.some((vv => vv.hasResult())) && (hv = hv.map((vv => vv.hasResult() ? new Qv(vv.source, 0) : vv)));
        for (let gv of vv.effects) gv.is(Yv) && (Sv = Sv && Sv.setSelected(gv.value, this.id));
        return hv == this.active && Sv == this.open ? this : new Uv(hv, this.id, Sv)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Rv : xv
      }
    }
    const Rv = {
        "aria-autocomplete": "list"
      },
      xv = {};

    function tv(vv, zv) {
      let Pv = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": vv
      };
      return zv > -1 && (Pv["aria-activedescendant"] = vv + "-" + zv), Pv
    }
    const qv = [];

    function Iv(vv, zv) {
      if (vv.isUserEvent("input.complete")) {
        let Pv = vv.annotation(wv);
        if (Pv && zv.activateOnCompletion(Pv)) return 12
      }
      let Pv = vv.isUserEvent("input.type");
      return Pv && zv.activateOnTyping ? 5 : Pv ? 1 : vv.isUserEvent("delete.backward") ? 2 : vv.selection ? 8 : vv.docChanged ? 16 : 0
    }
    class Qv {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = vv, this.state = zv, this.explicit = Pv
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(vv, zv) {
        let Pv = Iv(vv, zv),
          hv = this;
        (8 & Pv || 16 & Pv && this.touches(vv)) && (hv = new Qv(hv.source, 0)), 4 & Pv && 0 == hv.state && (hv = new Qv(this.source, 1)), hv = hv.updateFor(vv, Pv);
        for (let Sv of vv.effects)
          if (Sv.is(iv)) hv = new Qv(hv.source, 1, Sv.value);
          else if (Sv.is(cv)) hv = new Qv(hv.source, 0);
        else if (Sv.is(Av))
          for (let vv of Sv.value) vv.source == hv.source && (hv = vv);
        return hv
      }
      updateFor(vv, zv) {
        return this.map(vv.changes)
      }
      map(vv) {
        return this
      }
      touches(vv) {
        return vv.changes.touchesRange(Tv(vv.state))
      }
    }
    class Zv extends Qv {
      constructor(vv, zv, Pv, hv, Sv, ev) {
        super(vv, 3, zv), this.limit = Pv, this.result = hv, this.from = Sv, this.to = ev
      }
      hasResult() {
        return !0
      }
      updateFor(vv, zv) {
        var Pv;
        if (!(3 & zv)) return this.map(vv.changes);
        let hv = this.result;
        hv.map && !vv.changes.empty && (hv = hv.map(hv, vv.changes));
        let Sv = vv.changes.mapPos(this.from),
          ev = vv.changes.mapPos(this.to, 1),
          pv = Tv(vv.state);
        if (pv > ev || !hv || 2 & zv && (Tv(vv.startState) == this.from || pv < this.limit)) return new Qv(this.source, 4 & zv ? 1 : 0);
        let dv = vv.changes.mapPos(this.limit);
        return function(vv, zv, Pv, hv) {
          if (!vv) return !1;
          let Sv = zv.sliceDoc(Pv, hv);
          return "function" == typeof vv ? vv(Sv, Pv, hv, zv) : Wv(vv, !0).test(Sv)
        }(hv.validFor, vv.state, Sv, ev) ? new Zv(this.source, this.explicit, dv, hv, Sv, ev) : hv.update && (hv = hv.update(hv, Sv, ev, new gv(vv.state, pv, !1))) ? new Zv(this.source, this.explicit, dv, hv, hv.from, null !== (Pv = hv.to) && void 0 !== Pv ? Pv : Tv(vv.state)) : new Qv(this.source, 1, this.explicit)
      }
      map(vv) {
        if (vv.empty) return this;
        return (this.result.map ? this.result.map(this.result, vv) : this.result) ? new Zv(this.source, this.explicit, vv.mapPos(this.limit), this.result, vv.mapPos(this.from), vv.mapPos(this.to, 1)) : new Qv(this.source, 0)
      }
      touches(vv) {
        return vv.changes.touchesRange(this.from, this.to)
      }
    }
    const Av = hv.B.define({
        map: (vv, zv) => vv.map((vv => vv.map(zv)))
      }),
      Lv = hv.E.define({
        create: () => Uv.start(),
        update: (vv, zv) => vv.update(zv),
        provide: vv => [Sv.eb.from(vv, (vv => vv.tooltip)), Sv.g.contentAttributes.from(vv, (vv => vv.attrs))]
      });

    function Hv(vv, zv) {
      const Pv = zv.completion.apply || zv.completion.label;
      let hv = vv.state.field(Lv).active.find((vv => vv.source == zv.source));
      return hv instanceof Zv && ("string" == typeof Pv ? vv.dispatch({
        ...av(vv.state, Pv, hv.from, hv.to),
        annotations: wv.of(zv.completion)
      }) : Pv(vv, zv.completion, hv.from, hv.to), !0)
    }
    const Mv = Dv(Lv, Hv);

    function yv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return Pv => {
        let hv = Pv.state.field(Lv, !1);
        if (!hv || !hv.open || hv.open.disabled || Date.now() - hv.open.timestamp < Pv.state.facet(jv).interactionDelay) return !1;
        let ev, gv = 1;
        "page" == zv && (ev = (0, Sv.B)(Pv, hv.open.tooltip)) && (gv = Math.max(2, Math.floor(ev.dom.offsetHeight / ev.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: pv
        } = hv.open.options, dv = hv.open.selected > -1 ? hv.open.selected + gv * (vv ? 1 : -1) : vv ? 0 : pv - 1;
        return dv < 0 ? dv = "page" == zv ? 0 : pv - 1 : dv >= pv && (dv = "page" == zv ? pv - 1 : 0), Pv.dispatch({
          effects: Yv.of(dv)
        }), !0
      }
    }
    const Bv = vv => !!vv.state.field(Lv, !1) && (vv.dispatch({
      effects: iv.of(!0)
    }), !0);
    class Jv {
      constructor(vv, zv) {
        this.active = vv, this.context = zv, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const Ev = Sv.j.fromClass(class {
        constructor(vv) {
          this.view = vv, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let zv of vv.state.field(Lv).active) zv.isPending && this.startQuery(zv)
        }
        update(vv) {
          let zv = vv.state.field(Lv),
            Pv = vv.state.facet(jv);
          if (!vv.selectionSet && !vv.docChanged && vv.startState.field(Lv) == zv) return;
          let hv = vv.transactions.some((vv => {
            let zv = Iv(vv, Pv);
            return 8 & zv || (vv.selection || vv.docChanged) && !(3 & zv)
          }));
          for (let pv = 0; pv < this.running.length; pv++) {
            let zv = this.running[pv];
            if (hv || zv.context.abortOnDocChange && vv.docChanged || zv.updates.length + vv.transactions.length > 50 && Date.now() - zv.time > 1e3) {
              for (let vv of zv.context.abortListeners) try {
                vv()
              } catch (gv) {
                (0, Sv.U)(this.view.state, gv)
              }
              zv.context.abortListeners = null, this.running.splice(pv--, 1)
            } else zv.updates.push(...vv.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), vv.transactions.some((vv => vv.effects.some((vv => vv.is(iv))))) && (this.pendingStart = !0);
          let ev = this.pendingStart ? 50 : Pv.activateOnTypingDelay;
          if (this.debounceUpdate = zv.active.some((vv => vv.isPending && !this.running.some((zv => zv.active.source == vv.source)))) ? setTimeout((() => this.startUpdate()), ev) : -1, 0 != this.composing)
            for (let Sv of vv.transactions) Sv.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Sv.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: vv
          } = this.view, zv = vv.field(Lv);
          for (let Pv of zv.active) Pv.isPending && !this.running.some((vv => vv.active.source == Pv.source)) && this.startQuery(Pv);
          this.running.length && zv.open && zv.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(jv).updateSyncTime))
        }
        startQuery(vv) {
          let {
            state: zv
          } = this.view, Pv = Tv(zv), hv = new gv(zv, Pv, vv.explicit, this.view), ev = new Jv(vv, hv);
          this.running.push(ev), Promise.resolve(vv.source(hv)).then((vv => {
            ev.context.aborted || (ev.done = vv || null, this.scheduleAccept())
          }), (vv => {
            this.view.dispatch({
              effects: cv.of(null)
            }), (0, Sv.U)(this.view.state, vv)
          }))
        }
        scheduleAccept() {
          this.running.every((vv => void 0 !== vv.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(jv).updateSyncTime))
        }
        accept() {
          var vv;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let zv = [],
            Pv = this.view.state.facet(jv),
            hv = this.view.state.field(Lv);
          for (let Sv = 0; Sv < this.running.length; Sv++) {
            let ev = this.running[Sv];
            if (void 0 === ev.done) continue;
            if (this.running.splice(Sv--, 1), ev.done) {
              let hv = Tv(ev.updates.length ? ev.updates[0].startState : this.view.state),
                Sv = Math.min(hv, ev.done.from + (ev.active.explicit ? 0 : 1)),
                gv = new Zv(ev.active.source, ev.active.explicit, Sv, ev.done, ev.done.from, null !== (vv = ev.done.to) && void 0 !== vv ? vv : hv);
              for (let vv of ev.updates) gv = gv.update(vv, Pv);
              if (gv.hasResult()) {
                zv.push(gv);
                continue
              }
            }
            let gv = hv.active.find((vv => vv.source == ev.active.source));
            if (gv && gv.isPending)
              if (null == ev.done) {
                let vv = new Qv(ev.active.source, 0);
                for (let zv of ev.updates) vv = vv.update(zv, Pv);
                vv.isPending || zv.push(vv)
              } else this.startQuery(gv)
          }(zv.length || hv.open && hv.open.disabled) && this.view.dispatch({
            effects: Av.of(zv)
          })
        }
      }, {
        eventHandlers: {
          blur(vv) {
            let zv = this.view.state.field(Lv, !1);
            if (zv && zv.tooltip && this.view.state.facet(jv).closeOnBlur) {
              let Pv = zv.open && (0, Sv.B)(this.view, zv.open.tooltip);
              Pv && Pv.dom.contains(vv.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: cv.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: iv.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      ov = "object" == typeof navigator && /Win/.test(navigator.platform),
      bv = hv.u.highest(Sv.g.domEventHandlers({
        keydown(vv, zv) {
          let Pv = zv.state.field(Lv, !1);
          if (!Pv || !Pv.open || Pv.open.disabled || Pv.open.selected < 0 || vv.key.length > 1 || vv.ctrlKey && (!ov || !vv.altKey) || vv.metaKey) return !1;
          let hv = Pv.open.options[Pv.open.selected],
            Sv = Pv.active.find((vv => vv.source == hv.source)),
            ev = hv.completion.commitCharacters || Sv.result.commitCharacters;
          return ev && ev.indexOf(vv.key) > -1 && Hv(zv, hv), !1
        }
      })),
      rv = Sv.g.baseTheme({
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
    class kv {
      constructor(vv, zv, Pv, hv) {
        this.field = vv, this.line = zv, this.from = Pv, this.to = hv
      }
    }
    class Xv {
      constructor(vv, zv, Pv) {
        this.field = vv, this.from = zv, this.to = Pv
      }
      map(vv) {
        let zv = vv.mapPos(this.from, -1, hv.r.TrackDel),
          Pv = vv.mapPos(this.to, 1, hv.r.TrackDel);
        return null == zv || null == Pv ? null : new Xv(this.field, zv, Pv)
      }
    }
    class uv {
      constructor(vv, zv) {
        this.lines = vv, this.fieldPositions = zv
      }
      instantiate(vv, zv) {
        let Pv = [],
          hv = [zv],
          Sv = vv.doc.lineAt(zv),
          gv = /^\s*/.exec(Sv.text)[0];
        for (let dv of this.lines) {
          if (Pv.length) {
            let Pv = gv,
              Sv = /^\t*/.exec(dv)[0].length;
            for (let zv = 0; zv < Sv; zv++) Pv += vv.facet(ev.cb);
            hv.push(zv + Pv.length - Sv), dv = Pv + dv.slice(Sv)
          }
          Pv.push(dv), zv += dv.length + 1
        }
        let pv = this.fieldPositions.map((vv => new Xv(vv.field, hv[vv.line] + vv.from, hv[vv.line] + vv.to)));
        return {
          text: Pv,
          PC: pv
        }
      }
      static parse(vv) {
        let zv, Pv = [],
          hv = [],
          Sv = [];
        for (let ev of vv.split(/\r\n?|\n/)) {
          for (; zv = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(ev);) {
            let vv = zv[1] ? +zv[1] : null,
              gv = zv[2] || zv[3] || "",
              pv = -1,
              dv = gv.replace(/\\[{}]/g, (vv => vv[1]));
            for (let zv = 0; zv < Pv.length; zv++)(null != vv ? Pv[zv].seq == vv : dv && Pv[zv].name == dv) && (pv = zv);
            if (pv < 0) {
              let zv = 0;
              for (; zv < Pv.length && (null == vv || null != Pv[zv].seq && Pv[zv].seq < vv);) zv++;
              Pv.splice(zv, 0, {
                seq: vv,
                name: dv
              }), pv = zv;
              for (let vv of Sv) vv.field >= pv && vv.field++
            }
            for (let Pv of Sv)
              if (Pv.line == hv.length && Pv.from > zv.index) {
                let vv = zv[2] ? 3 + (zv[1] || "").length : 2;
                Pv.from -= vv, Pv.to -= vv
              } Sv.push(new kv(pv, hv.length, zv.index, zv.index + dv.length)), ev = ev.slice(0, zv.index) + gv + ev.slice(zv.index + zv[0].length)
          }
          ev = ev.replace(/\\([{}])/g, ((vv, zv, Pv) => {
            for (let ev of Sv) ev.line == hv.length && ev.from > Pv && (ev.from--, ev.to--);
            return zv
          })), hv.push(ev)
        }
        return new uv(hv, Sv)
      }
    }
    let vz = Sv.c.widget({
        widget: new class extends Sv.m {
          toDOM() {
            let vv = document.createElement("span");
            return vv.className = "cm-snippetFieldPosition", vv
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      zz = Sv.c.mark({
        class: "cm-snippetField"
      });
    class Pz {
      constructor(vv, zv) {
        this.PC = vv, this.active = zv, this.deco = Sv.c.set(vv.map((vv => (vv.from == vv.to ? vz : zz).range(vv.from, vv.to))), !0)
      }
      map(vv) {
        let zv = [];
        for (let Pv of this.PC) {
          let hv = Pv.map(vv);
          if (!hv) return null;
          zv.push(hv)
        }
        return new Pz(zv, this.active)
      }
      selectionInsideField(vv) {
        return vv.PC.every((vv => this.PC.some((zv => zv.field == this.active && zv.from <= vv.from && zv.to >= vv.to))))
      }
    }
    const hz = hv.B.define({
        map: (vv, zv) => vv && vv.map(zv)
      }),
      Sz = hv.B.define(),
      ez = hv.E.define({
        create: () => null,
        update(vv, zv) {
          for (let Pv of zv.effects) {
            if (Pv.is(hz)) return Pv.value;
            if (Pv.is(Sz) && vv) return new Pz(vv.PC, Pv.value)
          }
          return vv && zv.docChanged && (vv = vv.map(zv.changes)), vv && zv.selection && !vv.selectionInsideField(zv.selection) && (vv = null), vv
        },
        provide: vv => Sv.g.de.from(vv, (vv => vv ? vv.deco : Sv.c.none))
      });

    function gz(vv, zv) {
      return hv.j.create(vv.filter((vv => vv.field == zv)).map((vv => hv.j.range(vv.from, vv.to))))
    }

    function pz(vv) {
      let zv = uv.parse(vv);
      return (vv, Pv, Sv, ev) => {
        let {
          text: gv,
          PC: pv
        } = zv.instantiate(vv.state, Sv), {
          main: dv
        } = vv.state.selection, Nv = {
          changes: {
            from: Sv,
            to: ev == dv.from ? dv.to : ev,
            insert: hv.H.of(gv)
          },
          scrollIntoView: !0,
          annotations: Pv ? [wv.of(Pv), hv.J.userEvent.of("input.complete")] : void 0
        };
        if (pv.length && (Nv.selection = gz(pv, 0)), pv.some((vv => vv.field > 0))) {
          let zv = new Pz(pv, 0),
            Pv = Nv.effects = [hz.of(zv)];
          void 0 === vv.state.field(ez, !1) && Pv.push(hv.B.appendConfig.of([ez, Tz, wz, rv]))
        }
        vv.dispatch(vv.state.update(Nv))
      }
    }

    function dz(vv) {
      return zv => {
        let {
          state: Pv,
          dispatch: hv
        } = zv, Sv = Pv.field(ez, !1);
        if (!Sv || vv < 0 && 0 == Sv.active) return !1;
        let ev = Sv.active + vv,
          gv = vv > 0 && !Sv.PC.some((zv => zv.field == ev + vv));
        return hv(Pv.update({
          selection: gz(Sv.PC, ev),
          effects: hz.of(gv ? null : new Pz(Sv.PC, ev)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Nz = [{
        key: "Tab",
        run: dz(1),
        shift: dz(-1)
      }, {
        key: "Escape",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv;
          return !!zv.field(ez, !1) && (Pv(zv.update({
            effects: hz.of(null)
          })), !0)
        }
      }],
      lz = hv.q.define({
        combine: vv => vv.length ? vv[0] : Nz
      }),
      Tz = hv.u.highest(Sv.P.compute([lz], (vv => vv.facet(lz))));

    function Wz(vv, zv) {
      return {
        ...zv,
        apply: pz(vv)
      }
    }
    const wz = Sv.g.domEventHandlers({
      mousedown(vv, zv) {
        let Pv, hv = zv.state.field(ez, !1);
        if (!hv || null == (Pv = zv.posAtCoords({
            x: vv.clientX,
            y: vv.clientY
          }))) return !1;
        let Sv = hv.PC.find((vv => vv.from <= Pv && vv.to >= Pv));
        return !(!Sv || Sv.field == hv.active) && (zv.dispatch({
          selection: gz(hv.PC, Sv.field),
          effects: hz.of(hv.PC.some((vv => vv.field > Sv.field)) ? new Pz(hv.PC, Sv.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const az = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      sz = hv.B.define({
        map(vv, zv) {
          let Pv = zv.mapPos(vv, -1, hv.r.TrackAfter);
          return null == Pv ? void 0 : Pv
        }
      }),
      Cz = new class extends hv.A {};
    Cz.startSide = 1, Cz.endSide = -1;
    const iz = hv.E.define({
      create: () => hv.y.empty,
      update(vv, zv) {
        if (vv = vv.map(zv.changes), zv.selection) {
          let Pv = zv.state.doc.lineAt(zv.selection.main.head);
          vv = vv.update({
            filter: vv => vv >= Pv.from && vv <= Pv.to
          })
        }
        for (let Pv of zv.effects) Pv.is(sz) && (vv = vv.update({
          add: [Cz.range(Pv.value, Pv.value + 1)]
        }));
        return vv
      }
    });

    function cz() {
      return [Fz, iz]
    }
    const Gz = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function mz(vv) {
      for (let zv = 0; zv < 16; zv += 2)
        if (Gz.charCodeAt(zv) == vv) return Gz.charAt(zv + 1);
      return (0, hv._)(vv < 128 ? vv : vv + 1)
    }

    function jz(vv, zv) {
      return vv.languageDataAt("closeBrackets", zv)[0] || az
    }
    const fz = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Fz = Sv.g.inputHandler.of(((vv, zv, Pv, Sv) => {
        if ((fz ? vv.composing : vv.compositionStarted) || vv.state.readOnly) return !1;
        let ev = vv.state.selection.main;
        if (Sv.length > 2 || 2 == Sv.length && 1 == (0, hv.L)((0, hv.K)(Sv, 0)) || zv != ev.from || Pv != ev.to) return !1;
        let gv = function(vv, zv) {
          let Pv = jz(vv, vv.selection.main.head),
            Sv = Pv.brackets || az.brackets;
          for (let ev of Sv) {
            let gv = mz((0, hv.K)(ev, 0));
            if (zv == ev) return gv == ev ? Vz(vv, ev, Sv.indexOf(ev + ev + ev) > -1, Pv) : Dz(vv, ev, gv, Pv.before || az.before);
            if (zv == gv && nz(vv, vv.selection.main.from)) return Kz(vv, ev, gv)
          }
          return null
        }(vv.state, Sv);
        return !!gv && (vv.dispatch(gv), !0)
      })),
      Yz = [{
        key: "Backspace",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv;
          if (zv.readOnly) return !1;
          let Sv = jz(zv, zv.selection.main.head).brackets || az.brackets,
            ev = null,
            gv = zv.changeByRange((vv => {
              if (vv.empty) {
                let Pv = function(vv, zv) {
                  let Pv = vv.sliceString(zv - 2, zv);
                  return (0, hv.L)((0, hv.K)(Pv, 0)) == Pv.length ? Pv : Pv.slice(1)
                }(zv.doc, vv.head);
                for (let ev of Sv)
                  if (ev == Pv && Oz(zv.doc, vv.head) == mz((0, hv.K)(ev, 0))) return {
                    changes: {
                      from: vv.head - ev.length,
                      to: vv.head + ev.length
                    },
                    range: hv.j.cursor(vv.head - ev.length)
                  }
              }
              return {
                range: ev = vv
              }
            }));
          return ev || Pv(zv.update(gv, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !ev
        }
      }];

    function nz(vv, zv) {
      let Pv = !1;
      return vv.field(iz).between(0, vv.doc.length, (vv => {
        vv == zv && (Pv = !0)
      })), Pv
    }

    function Oz(vv, zv) {
      let Pv = vv.sliceString(zv, zv + 2);
      return Pv.slice(0, (0, hv.L)((0, hv.K)(Pv, 0)))
    }

    function Dz(vv, zv, Pv, Sv) {
      let ev = null,
        gv = vv.changeByRange((gv => {
          if (!gv.empty) return {
            changes: [{
              insert: zv,
              from: gv.from
            }, {
              insert: Pv,
              from: gv.to
            }],
            effects: sz.of(gv.to + zv.length),
            range: hv.j.range(gv.anchor + zv.length, gv.head + zv.length)
          };
          let pv = Oz(vv.doc, gv.head);
          return !pv || /\s/.test(pv) || Sv.indexOf(pv) > -1 ? {
            changes: {
              insert: zv + Pv,
              from: gv.head
            },
            effects: sz.of(gv.head + zv.length),
            range: hv.j.cursor(gv.head + zv.length)
          } : {
            range: ev = gv
          }
        }));
      return ev ? null : vv.update(gv, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Kz(vv, zv, Pv) {
      let Sv = null,
        ev = vv.changeByRange((zv => zv.empty && Oz(vv.doc, zv.head) == Pv ? {
          changes: {
            from: zv.head,
            to: zv.head + Pv.length,
            insert: Pv
          },
          range: hv.j.cursor(zv.head + Pv.length)
        } : Sv = {
          range: zv
        }));
      return Sv ? null : vv.update(ev, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Vz(vv, zv, Pv, Sv) {
      let gv = Sv.stringPrefixes || az.stringPrefixes,
        pv = null,
        dv = vv.changeByRange((Sv => {
          if (!Sv.empty) return {
            changes: [{
              insert: zv,
              from: Sv.from
            }, {
              insert: zv,
              from: Sv.to
            }],
            effects: sz.of(Sv.to + zv.length),
            range: hv.j.range(Sv.anchor + zv.length, Sv.head + zv.length)
          };
          let dv, Nv = Sv.head,
            lv = Oz(vv.doc, Nv);
          if (lv == zv) {
            if (Uz(vv, Nv)) return {
              changes: {
                insert: zv + zv,
                from: Nv
              },
              effects: sz.of(Nv + zv.length),
              range: hv.j.cursor(Nv + zv.length)
            };
            if (nz(vv, Nv)) {
              let Sv = Pv && vv.sliceDoc(Nv, Nv + 3 * zv.length) == zv + zv + zv ? zv + zv + zv : zv;
              return {
                changes: {
                  from: Nv,
                  to: Nv + Sv.length,
                  insert: Sv
                },
                range: hv.j.cursor(Nv + Sv.length)
              }
            }
          } else {
            if (Pv && vv.sliceDoc(Nv - 2 * zv.length, Nv) == zv + zv && (dv = Rz(vv, Nv - 2 * zv.length, gv)) > -1 && Uz(vv, dv)) return {
              changes: {
                insert: zv + zv + zv + zv,
                from: Nv
              },
              effects: sz.of(Nv + zv.length),
              range: hv.j.cursor(Nv + zv.length)
            };
            if (vv.charCategorizer(Nv)(lv) != hv.f.Word && Rz(vv, Nv, gv) > -1 && ! function(vv, zv, Pv, hv) {
                let Sv = (0, ev.tb)(vv).resolveInner(zv, -1),
                  gv = hv.reduce(((vv, zv) => Math.max(vv, zv.length)), 0);
                for (let ev = 0; ev < 5; ev++) {
                  let ev = vv.sliceDoc(Sv.from, Math.min(Sv.to, Sv.from + Pv.length + gv)),
                    pv = ev.indexOf(Pv);
                  if (!pv || pv > -1 && hv.indexOf(ev.slice(0, pv)) > -1) {
                    let zv = Sv.firstChild;
                    for (; zv && zv.from == Sv.from && zv.to - zv.from > Pv.length + pv;) {
                      if (vv.sliceDoc(zv.to - Pv.length, zv.to) == Pv) return !1;
                      zv = zv.firstChild
                    }
                    return !0
                  }
                  let dv = Sv.to == zv && Sv.parent;
                  if (!dv) break;
                  Sv = dv
                }
                return !1
              }(vv, Nv, zv, gv)) return {
              changes: {
                insert: zv + zv,
                from: Nv
              },
              effects: sz.of(Nv + zv.length),
              range: hv.j.cursor(Nv + zv.length)
            }
          }
          return {
            range: pv = Sv
          }
        }));
      return pv ? null : vv.update(dv, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Uz(vv, zv) {
      let Pv = (0, ev.tb)(vv).resolveInner(zv + 1);
      return Pv.parent && Pv.from == zv
    }

    function Rz(vv, zv, Pv) {
      let Sv = vv.charCategorizer(zv);
      if (Sv(vv.sliceDoc(zv - 1, zv)) != hv.f.Word) return zv;
      for (let ev of Pv) {
        let Pv = zv - ev.length;
        if (vv.sliceDoc(Pv, zv) == ev && Sv(vv.sliceDoc(Pv - 1, Pv)) != hv.f.Word) return Pv
      }
      return -1
    }

    function xz() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [bv, Lv, jv.of(vv), Ev, qz, rv]
    }
    const tz = [{
        key: "Ctrl-Space",
        run: Bv
      }, {
        mac: "Alt-`",
        run: Bv
      }, {
        mac: "Alt-i",
        run: Bv
      }, {
        key: "Escape",
        run: vv => {
          let zv = vv.state.field(Lv, !1);
          return !(!zv || !zv.active.some((vv => 0 != vv.state))) && (vv.dispatch({
            effects: cv.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: yv(!0)
      }, {
        key: "ArrowUp",
        run: yv(!1)
      }, {
        key: "PageDown",
        run: yv(!0, "page")
      }, {
        key: "PageUp",
        run: yv(!1, "page")
      }, {
        key: "Enter",
        run: vv => {
          let zv = vv.state.field(Lv, !1);
          return !(vv.state.readOnly || !zv || !zv.open || zv.open.selected < 0 || zv.open.disabled || Date.now() - zv.open.timestamp < vv.state.facet(jv).interactionDelay) && Hv(vv, zv.open.options[zv.open.selected])
        }
      }],
      qz = hv.u.highest(Sv.P.computeN([jv], (vv => vv.facet(jv).defaultKeymap ? [tz] : [])))
  },
  40747: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      f: () => Wv,
      j: () => lv,
      n: () => Tv
    });
    var hv = Pv(40599);
    class Sv {
      constructor(vv, zv, Pv, hv) {
        this.origin = vv, this.changes = zv, this.effects = Pv, this.clientID = hv
      }
    }
    class ev {
      constructor(vv, zv) {
        this.version = vv, this.unconfirmed = zv
      }
    }
    const gv = hv.q.define({
        combine(vv) {
          let zv = (0, hv.O)(vv, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: vv => vv
          });
          return null == zv.clientID && (zv.clientID = vv.length && vv[0].generatedID || ""), zv
        }
      }),
      pv = hv.c.define(),
      dv = hv.E.define({
        create: vv => new ev(vv.facet(gv).startVersion, []),
        update(vv, zv) {
          let Pv = zv.annotation(pv);
          if (Pv) return Pv;
          let {
            sharedEffects: hv,
            clientID: dv
          } = zv.startState.facet(gv), Nv = hv(zv);
          return Nv.length || !zv.changes.empty ? new ev(vv.version, vv.unconfirmed.concat(new Sv(zv, zv.changes, Nv, dv))) : vv
        }
      });

    function Nv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [dv, gv.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, vv))]
    }

    function lv(vv, zv) {
      let {
        version: Pv,
        unconfirmed: Nv
      } = vv.field(dv), {
        clientID: lv
      } = vv.facet(gv);
      Pv += zv.length;
      let Tv = [],
        Wv = null,
        wv = 0;
      for (let Sv of zv) {
        let vv = wv < Nv.length ? Nv[wv] : null;
        vv && vv.clientID == Sv.clientID ? (Wv && (Wv = Wv.map(vv.changes, !0)), Tv = hv.B.mapEffects(Tv, Sv.changes), wv++) : (Tv = hv.B.mapEffects(Tv, Sv.changes), Sv.effects && (Tv = Tv.concat(Sv.effects)), Wv = Wv ? Wv.compose(Sv.changes) : Sv.changes)
      }
      if (wv && (Nv = Nv.slice(wv)), Nv.length && (Wv && (Nv = Nv.map((vv => {
          let zv = vv.changes.map(Wv);
          return Wv = Wv.map(vv.changes, !0), new Sv(vv.origin, zv, hv.B.mapEffects(vv.effects, Wv), lv)
        }))), Tv.length)) {
        let vv = Nv.reduce(((vv, zv) => vv.compose(zv.changes)), hv.ChangeSet.empty(Nv[0].changes.length));
        Tv = hv.B.mapEffects(Tv, vv)
      }
      return Wv ? vv.update({
        changes: Wv,
        effects: Tv,
        annotations: [hv.J.addToHistory.of(!1), hv.J.remote.of(!0), pv.of(new ev(Pv, Nv))],
        filter: !1
      }) : vv.update({
        annotations: [pv.of(new ev(Pv, Nv))]
      })
    }

    function Tv(vv) {
      return vv.field(dv).unconfirmed
    }

    function Wv(vv) {
      return vv.field(dv).version
    }
  },
  40648: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => sz
    });
    var hv = Pv(40632);
    class Sv {
      constructor(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        let Nv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          lv = arguments.length > 10 ? arguments[10] : void 0;
        this.p = vv, this.stack = zv, this.state = Pv, this.reducePos = hv, this.pos = Sv, this.score = ev, this.buffer = gv, this.bufferBase = pv, this.curContext = dv, this.lookAhead = Nv, this.parent = lv
      }
      toString() {
        return `[${this.stack.filter(((vv,zv)=>zv%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = vv.parser.context;
        return new Sv(vv, [], zv, Pv, Pv, 0, [], 0, hv ? new ev(hv, hv.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(vv, zv) {
        this.stack.push(this.state, zv, this.bufferBase + this.buffer.length), this.state = vv
      }
      reduce(vv) {
        var zv;
        let Pv = vv >> 19,
          hv = 65535 & vv,
          {
            parser: Sv
          } = this.p,
          ev = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          gv = Sv.dynamicPrecedence(hv);
        if (gv && (this.score += gv), 0 == Pv) return this.pushState(Sv.getGoto(this.state, hv, !0), this.reducePos), hv < Sv.minRepeatTerm && this.storeNode(hv, this.reducePos, this.reducePos, ev ? 8 : 4, !0), void this.reduceContext(hv, this.reducePos);
        let pv = this.stack.length - 3 * (Pv - 1) - (262144 & vv ? 6 : 0),
          dv = pv ? this.stack[pv - 2] : this.p.PC[0].from,
          Nv = this.reducePos - dv;
        Nv >= 2e3 && !(null === (zv = this.p.parser.nodeSet.types[hv]) || void 0 === zv ? void 0 : zv.isAnonymous) && (dv == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Nv) : this.p.lastBigReductionSize < Nv && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = dv, this.p.lastBigReductionSize = Nv));
        let lv = pv ? this.stack[pv - 1] : 0,
          Tv = this.bufferBase + this.buffer.length - lv;
        if (hv < Sv.minRepeatTerm || 131072 & vv) {
          let vv = Sv.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(hv, dv, vv, Tv + 4, !0)
        }
        if (262144 & vv) this.state = this.stack[pv];
        else {
          let vv = this.stack[pv - 3];
          this.state = Sv.getGoto(vv, hv, !0)
        }
        for (; this.stack.length > pv;) this.stack.pop();
        this.reduceContext(hv, dv)
      }
      storeNode(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == vv && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let vv = this,
            hv = this.buffer.length;
          if (0 == hv && vv.parent && (hv = vv.bufferBase - vv.parent.bufferBase, vv = vv.parent), hv > 0 && 0 == vv.buffer[hv - 4] && vv.buffer[hv - 1] > -1) {
            if (zv == Pv) return;
            if (vv.buffer[hv - 2] >= zv) return void(vv.buffer[hv - 2] = Pv)
          }
        }
        if (Sv && this.pos != Pv) {
          let Sv = this.buffer.length;
          if (Sv > 0 && (0 != this.buffer[Sv - 4] || this.buffer[Sv - 1] < 0)) {
            let vv = !1;
            for (let zv = Sv; zv > 0 && this.buffer[zv - 2] > Pv; zv -= 4)
              if (this.buffer[zv - 1] >= 0) {
                vv = !0;
                break
              } if (vv)
              for (; Sv > 0 && this.buffer[Sv - 2] > Pv;) this.buffer[Sv] = this.buffer[Sv - 4], this.buffer[Sv + 1] = this.buffer[Sv - 3], this.buffer[Sv + 2] = this.buffer[Sv - 2], this.buffer[Sv + 3] = this.buffer[Sv - 1], Sv -= 4, hv > 4 && (hv -= 4)
          }
          this.buffer[Sv] = vv, this.buffer[Sv + 1] = zv, this.buffer[Sv + 2] = Pv, this.buffer[Sv + 3] = hv
        } else this.buffer.push(vv, zv, Pv, hv)
      }
      shift(vv, zv, Pv, hv) {
        if (131072 & vv) this.pushState(65535 & vv, this.pos);
        else if (0 == (262144 & vv)) {
          let Sv = vv,
            {
              parser: ev
            } = this.p;
          this.pos = hv;
          let gv = ev.stateFlag(Sv, 1);
          !gv && (hv > Pv || zv <= ev.maxNode) && (this.reducePos = hv), this.pushState(Sv, gv ? Pv : Math.min(Pv, this.reducePos)), this.shiftContext(zv, Pv), zv <= ev.maxNode && this.buffer.push(zv, Pv, hv, 4)
        } else this.pos = hv, this.shiftContext(zv, Pv), zv <= this.p.parser.maxNode && this.buffer.push(zv, Pv, hv, 4)
      }
      apply(vv, zv, Pv, hv) {
        65536 & vv ? this.reduce(vv) : this.shift(vv, zv, Pv, hv)
      }
      useNode(vv, zv) {
        let Pv = this.p.reused.length - 1;
        (Pv < 0 || this.p.reused[Pv] != vv) && (this.p.reused.push(vv), Pv++);
        let hv = this.pos;
        this.reducePos = this.pos = hv + vv.length, this.pushState(zv, hv), this.buffer.push(Pv, hv, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, vv, this, this.p.stream.reset(this.pos - vv.length)))
      }
      split() {
        let vv = this,
          zv = vv.buffer.length;
        for (; zv > 0 && vv.buffer[zv - 2] > vv.reducePos;) zv -= 4;
        let Pv = vv.buffer.slice(zv),
          hv = vv.bufferBase + zv;
        for (; vv && hv == vv.bufferBase;) vv = vv.parent;
        return new Sv(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, Pv, hv, this.curContext, this.lookAhead, vv)
      }
      recoverByDelete(vv, zv) {
        let Pv = vv <= this.p.parser.maxNode;
        Pv && this.storeNode(vv, this.pos, zv, 4), this.storeNode(0, this.pos, zv, Pv ? 8 : 4), this.pos = this.reducePos = zv, this.score -= 190
      }
      canShift(vv) {
        for (let zv = new gv(this);;) {
          let Pv = this.p.parser.stateSlot(zv.state, 4) || this.p.parser.hasAction(zv.state, vv);
          if (0 == Pv) return !1;
          if (0 == (65536 & Pv)) return !0;
          zv.reduce(Pv)
        }
      }
      recoverByInsert(vv) {
        if (this.stack.length >= 300) return [];
        let zv = this.p.parser.nextStates(this.state);
        if (zv.length > 8 || this.stack.length >= 120) {
          let Pv = [];
          for (let hv, Sv = 0; Sv < zv.length; Sv += 2)(hv = zv[Sv + 1]) != this.state && this.p.parser.hasAction(hv, vv) && Pv.push(zv[Sv], hv);
          if (this.stack.length < 120)
            for (let vv = 0; Pv.length < 8 && vv < zv.length; vv += 2) {
              let hv = zv[vv + 1];
              Pv.some(((vv, zv) => 1 & zv && vv == hv)) || Pv.push(zv[vv], hv)
            }
          zv = Pv
        }
        let Pv = [];
        for (let hv = 0; hv < zv.length && Pv.length < 4; hv += 2) {
          let vv = zv[hv + 1];
          if (vv == this.state) continue;
          let Sv = this.split();
          Sv.pushState(vv, this.pos), Sv.storeNode(0, Sv.pos, Sv.pos, 4, !0), Sv.shiftContext(zv[hv], this.pos), Sv.reducePos = this.pos, Sv.score -= 200, Pv.push(Sv)
        }
        return Pv
      }
      forceReduce() {
        let {
          parser: vv
        } = this.p, zv = vv.stateSlot(this.state, 5);
        if (0 == (65536 & zv)) return !1;
        if (!vv.validAction(this.state, zv)) {
          let Pv = zv >> 19,
            hv = 65535 & zv,
            Sv = this.stack.length - 3 * Pv;
          if (Sv < 0 || vv.getGoto(this.stack[Sv], hv, !1) < 0) {
            let vv = this.findForcedReduction();
            if (null == vv) return !1;
            zv = vv
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(zv), !0
      }
      findForcedReduction() {
        let {
          parser: vv
        } = this.p, zv = [], Pv = (hv, Sv) => {
          if (!zv.includes(hv)) return zv.push(hv), vv.allActions(hv, (zv => {
            if (393216 & zv);
            else if (65536 & zv) {
              let Pv = (zv >> 19) - Sv;
              if (Pv > 1) {
                let hv = 65535 & zv,
                  Sv = this.stack.length - 3 * Pv;
                if (Sv >= 0 && vv.getGoto(this.stack[Sv], hv, !1) >= 0) return Pv << 19 | 65536 | hv
              }
            } else {
              let vv = Pv(zv, Sv + 1);
              if (null != vv) return vv
            }
          }))
        };
        return Pv(this.state, 0)
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
          parser: vv
        } = this.p;
        return 65535 == vv.data[vv.stateSlot(this.state, 1)] && !vv.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(vv) {
        if (this.state != vv.state || this.stack.length != vv.stack.length) return !1;
        for (let zv = 0; zv < this.stack.length; zv += 3)
          if (this.stack[zv] != vv.stack[zv]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(vv) {
        return this.p.parser.dialect.flags[vv]
      }
      shiftContext(vv, zv) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, vv, this, this.p.stream.reset(zv)))
      }
      reduceContext(vv, zv) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, vv, this, this.p.stream.reset(zv)))
      }
      emitContext() {
        let vv = this.buffer.length - 1;
        (vv < 0 || -3 != this.buffer[vv]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let vv = this.buffer.length - 1;
        (vv < 0 || -4 != this.buffer[vv]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(vv) {
        if (vv != this.curContext.context) {
          let zv = new ev(this.curContext.tracker, vv);
          zv.hash != this.curContext.hash && this.emitContext(), this.curContext = zv
        }
      }
      setLookAhead(vv) {
        return !(vv <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = vv, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class ev {
      constructor(vv, zv) {
        this.tracker = vv, this.context = zv, this.hash = vv.strict ? vv.hash(zv) : 0
      }
    }
    class gv {
      constructor(vv) {
        this.start = vv, this.state = vv.state, this.stack = vv.stack, this.base = this.stack.length
      }
      reduce(vv) {
        let zv = 65535 & vv,
          Pv = vv >> 19;
        0 == Pv ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (Pv - 1);
        let hv = this.start.p.parser.getGoto(this.stack[this.base - 3], zv, !0);
        this.state = hv
      }
    }
    class pv {
      constructor(vv, zv, Pv) {
        this.stack = vv, this.pos = zv, this.index = Pv, this.buffer = vv.buffer, 0 == this.index && this.maybeNext()
      }
      static create(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv.bufferBase + vv.buffer.length;
        return new pv(vv, zv, zv - vv.bufferBase)
      }
      maybeNext() {
        let vv = this.stack.parent;
        null != vv && (this.index = this.stack.bufferBase - vv.bufferBase, this.stack = vv, this.buffer = vv.buffer)
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
        return new pv(this.stack, this.pos, this.index)
      }
    }

    function dv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof vv) return vv;
      let Pv = null;
      for (let hv = 0, Sv = 0; hv < vv.length;) {
        let ev = 0;
        for (;;) {
          let zv = vv.charCodeAt(hv++),
            Pv = !1;
          if (126 == zv) {
            ev = 65535;
            break
          }
          zv >= 92 && zv--, zv >= 34 && zv--;
          let Sv = zv - 32;
          if (Sv >= 46 && (Sv -= 46, Pv = !0), ev += Sv, Pv) break;
          ev *= 46
        }
        Pv ? Pv[Sv++] = ev : Pv = new zv(ev)
      }
      return Pv
    }
    class Nv {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const lv = new Nv;
    class Tv {
      constructor(vv, zv) {
        this.input = vv, this.PC = zv, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = lv, this.rangeIndex = 0, this.pos = this.chunkPos = zv[0].from, this.range = zv[0], this.end = zv[zv.length - 1].to, this.readNext()
      }
      resolveOffset(vv, zv) {
        let Pv = this.range,
          hv = this.rangeIndex,
          Sv = this.pos + vv;
        for (; Sv < Pv.from;) {
          if (!hv) return null;
          let vv = this.PC[--hv];
          Sv -= Pv.from - vv.to, Pv = vv
        }
        for (; zv < 0 ? Sv > Pv.to : Sv >= Pv.to;) {
          if (hv == this.PC.length - 1) return null;
          let vv = this.PC[++hv];
          Sv += vv.from - Pv.to, Pv = vv
        }
        return Sv
      }
      clipPos(vv) {
        if (vv >= this.range.from && vv < this.range.to) return vv;
        for (let zv of this.PC)
          if (zv.to > vv) return Math.max(vv, zv.from);
        return this.end
      }
      peek(vv) {
        let zv, Pv, hv = this.chunkOff + vv;
        if (hv >= 0 && hv < this.chunk.length) zv = this.pos + vv, Pv = this.chunk.charCodeAt(hv);
        else {
          let hv = this.resolveOffset(vv, 1);
          if (null == hv) return -1;
          if (zv = hv, zv >= this.chunk2Pos && zv < this.chunk2Pos + this.chunk2.length) Pv = this.chunk2.charCodeAt(zv - this.chunk2Pos);
          else {
            let vv = this.rangeIndex,
              hv = this.range;
            for (; hv.to <= zv;) hv = this.PC[++vv];
            this.chunk2 = this.input.chunk(this.chunk2Pos = zv), zv + this.chunk2.length > hv.to && (this.chunk2 = this.chunk2.slice(0, hv.to - zv)), Pv = this.chunk2.charCodeAt(0)
          }
        }
        return zv >= this.token.lookAhead && (this.token.lookAhead = zv + 1), Pv
      }
      acceptToken(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = zv ? this.resolveOffset(zv, -1) : this.pos;
        if (null == Pv || Pv < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = vv, this.token.end = Pv
      }
      acceptTokenTo(vv, zv) {
        this.token.value = vv, this.token.end = zv
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: vv,
            chunkPos: zv
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = vv, this.chunk2Pos = zv, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let vv = this.input.chunk(this.pos),
            zv = this.pos + vv.length;
          this.chunk = zv > this.range.to ? vv.slice(0, this.range.to - this.pos) : vv, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += vv; this.pos + vv >= this.range.to;) {
          if (this.rangeIndex == this.PC.length - 1) return this.setDone();
          vv -= this.range.to - this.pos, this.range = this.PC[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += vv, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.PC[this.rangeIndex = this.PC.length - 1], this.chunk = "", this.next = -1
      }
      reset(vv, zv) {
        if (zv ? (this.token = zv, zv.start = vv, zv.lookAhead = vv + 1, zv.value = zv.extended = -1) : this.token = lv, this.pos != vv) {
          if (this.pos = vv, vv == this.end) return this.setDone(), this;
          for (; vv < this.range.from;) this.range = this.PC[--this.rangeIndex];
          for (; vv >= this.range.to;) this.range = this.PC[++this.rangeIndex];
          vv >= this.chunkPos && vv < this.chunkPos + this.chunk.length ? this.chunkOff = vv - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(vv, zv) {
        if (vv >= this.chunkPos && zv <= this.chunkPos + this.chunk.length) return this.chunk.slice(vv - this.chunkPos, zv - this.chunkPos);
        if (vv >= this.chunk2Pos && zv <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(vv - this.chunk2Pos, zv - this.chunk2Pos);
        if (vv >= this.range.from && zv <= this.range.to) return this.input.read(vv, zv);
        let Pv = "";
        for (let hv of this.PC) {
          if (hv.from >= zv) break;
          hv.to > vv && (Pv += this.input.read(Math.max(hv.from, vv), Math.min(hv.to, zv)))
        }
        return Pv
      }
    }
    class Wv {
      constructor(vv, zv) {
        this.data = vv, this.id = zv
      }
      token(vv, zv) {
        let {
          parser: Pv
        } = zv.p;
        sv(this.data, vv, zv, this.id, Pv.data, Pv.tokenPrecTable)
      }
    }
    Wv.prototype.contextual = Wv.prototype.fallback = Wv.prototype.extend = !1;
    class wv {
      constructor(vv, zv, Pv) {
        this.precTable = zv, this.elseToken = Pv, this.data = "string" == typeof vv ? dv(vv) : vv
      }
      token(vv, zv) {
        let Pv = vv.pos,
          hv = 0;
        for (;;) {
          let Pv = vv.next < 0,
            Sv = vv.resolveOffset(1, 1);
          if (sv(this.data, vv, zv, 0, this.data, this.precTable), vv.token.value > -1) break;
          if (null == this.elseToken) return;
          if (Pv || hv++, null == Sv) break;
          vv.reset(Sv, vv.token)
        }
        hv && (vv.reset(Pv, vv.token), vv.acceptToken(this.elseToken, hv))
      }
    }
    wv.prototype.contextual = Wv.prototype.fallback = Wv.prototype.extend = !1;
    class av {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = vv, this.contextual = !!zv.contextual, this.fallback = !!zv.fallback, this.extend = !!zv.extend
      }
    }

    function sv(vv, zv, Pv, hv, Sv, ev) {
      let gv = 0,
        pv = 1 << hv,
        {
          dialect: dv
        } = Pv.p.parser;
      vv: for (; 0 != (pv & vv[gv]);) {
        let Pv = vv[gv + 1];
        for (let Tv = gv + 3; Tv < Pv; Tv += 2)
          if ((vv[Tv + 1] & pv) > 0) {
            let Pv = vv[Tv];
            if (dv.allows(Pv) && (-1 == zv.token.value || zv.token.value == Pv || iv(Pv, zv.token.value, Sv, ev))) {
              zv.acceptToken(Pv);
              break
            }
          } let hv = zv.next,
          Nv = 0,
          lv = vv[gv + 2];
        if (!(zv.next < 0 && lv > Nv && 65535 == vv[Pv + 3 * lv - 3])) {
          for (; Nv < lv;) {
            let Sv = Nv + lv >> 1,
              ev = Pv + Sv + (Sv << 1),
              pv = vv[ev],
              dv = vv[ev + 1] || 65536;
            if (hv < pv) lv = Sv;
            else {
              if (!(hv >= dv)) {
                gv = vv[ev + 2], zv.advance();
                continue vv
              }
              Nv = Sv + 1
            }
          }
          break
        }
        gv = vv[Pv + 3 * lv - 1]
      }
    }

    function Cv(vv, zv, Pv) {
      for (let hv, Sv = zv; 65535 != (hv = vv[Sv]); Sv++)
        if (hv == Pv) return Sv - zv;
      return -1
    }

    function iv(vv, zv, Pv, hv) {
      let Sv = Cv(Pv, hv, zv);
      return Sv < 0 || Cv(Pv, hv, vv) < Sv
    }
    const cv = "undefined" != typeof process && {
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
    let Gv = null;

    function mv(vv, zv, Pv) {
      let Sv = vv.cursor(hv.h.IncludeAnonymous);
      for (Sv.moveTo(zv);;)
        if (!(Pv < 0 ? Sv.childBefore(zv) : Sv.childAfter(zv)))
          for (;;) {
            if ((Pv < 0 ? Sv.to < zv : Sv.from > zv) && !Sv.type.isError) return Pv < 0 ? Math.max(0, Math.min(Sv.to - 1, zv - 25)) : Math.min(vv.length, Math.max(Sv.from + 1, zv + 25));
            if (Pv < 0 ? Sv.prevSibling() : Sv.nextSibling()) break;
            if (!Sv.parent()) return Pv < 0 ? 0 : vv.length
          }
    }
    class jv {
      constructor(vv, zv) {
        this.fragments = vv, this.nodeSet = zv, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let vv = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (vv) {
          for (this.safeFrom = vv.openStart ? mv(vv.tree, vv.from + vv.offset, 1) - vv.offset : vv.from, this.safeTo = vv.openEnd ? mv(vv.tree, vv.to + vv.offset, -1) - vv.offset : vv.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(vv.tree), this.start.push(-vv.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(vv) {
        if (vv < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= vv;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let zv = this.trees.length - 1;
          if (zv < 0) return this.nextFragment(), null;
          let Pv = this.trees[zv],
            Sv = this.index[zv];
          if (Sv == Pv.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let ev = Pv.children[Sv],
            gv = this.start[zv] + Pv.positions[Sv];
          if (gv > vv) return this.nextStart = gv, null;
          if (ev instanceof hv.E) {
            if (gv == vv) {
              if (gv < this.safeFrom) return null;
              let vv = gv + ev.length;
              if (vv <= this.safeTo) {
                let zv = ev.prop(hv.l.lookAhead);
                if (!zv || vv + zv < this.fragment.to) return ev
              }
            }
            this.index[zv]++, gv + ev.length >= Math.max(this.safeFrom, vv) && (this.trees.push(ev), this.start.push(gv), this.index.push(0))
          } else this.index[zv]++, this.nextStart = gv + ev.length
        }
      }
    }
    class fv {
      constructor(vv, zv) {
        this.stream = zv, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = vv.tokenizers.map((vv => new Nv))
      }
      getActions(vv) {
        let zv = 0,
          Pv = null,
          {
            parser: hv
          } = vv.p,
          {
            tokenizers: Sv
          } = hv,
          ev = hv.stateSlot(vv.state, 3),
          gv = vv.curContext ? vv.curContext.hash : 0,
          pv = 0;
        for (let dv = 0; dv < Sv.length; dv++) {
          if (0 == (1 << dv & ev)) continue;
          let hv = Sv[dv],
            Nv = this.tokens[dv];
          if ((!Pv || hv.fallback) && ((hv.contextual || Nv.start != vv.pos || Nv.mask != ev || Nv.context != gv) && (this.updateCachedToken(Nv, hv, vv), Nv.mask = ev, Nv.context = gv), Nv.lookAhead > Nv.end + 25 && (pv = Math.max(Nv.lookAhead, pv)), 0 != Nv.value)) {
            let Sv = zv;
            if (Nv.extended > -1 && (zv = this.addActions(vv, Nv.extended, Nv.end, zv)), zv = this.addActions(vv, Nv.value, Nv.end, zv), !hv.extend && (Pv = Nv, zv > Sv)) break
          }
        }
        for (; this.actions.length > zv;) this.actions.pop();
        return pv && vv.setLookAhead(pv), Pv || vv.pos != this.stream.end || (Pv = new Nv, Pv.value = vv.p.parser.eofTerm, Pv.start = Pv.end = vv.pos, zv = this.addActions(vv, Pv.value, Pv.end, zv)), this.mainToken = Pv, this.actions
      }
      getMainToken(vv) {
        if (this.mainToken) return this.mainToken;
        let zv = new Nv,
          {
            pos: Pv,
            p: hv
          } = vv;
        return zv.start = Pv, zv.end = Math.min(Pv + 1, hv.stream.end), zv.value = Pv == hv.stream.end ? hv.parser.eofTerm : 0, zv
      }
      updateCachedToken(vv, zv, Pv) {
        let hv = this.stream.clipPos(Pv.pos);
        if (zv.token(this.stream.reset(hv, vv), Pv), vv.value > -1) {
          let {
            parser: zv
          } = Pv.p;
          for (let hv = 0; hv < zv.specialized.length; hv++)
            if (zv.specialized[hv] == vv.value) {
              let Sv = zv.specializers[hv](this.stream.read(vv.start, vv.end), Pv);
              if (Sv >= 0 && Pv.p.parser.dialect.allows(Sv >> 1)) {
                0 == (1 & Sv) ? vv.value = Sv >> 1 : vv.extended = Sv >> 1;
                break
              }
            }
        } else vv.value = 0, vv.end = this.stream.clipPos(hv + 1)
      }
      putAction(vv, zv, Pv, hv) {
        for (let Sv = 0; Sv < hv; Sv += 3)
          if (this.actions[Sv] == vv) return hv;
        return this.actions[hv++] = vv, this.actions[hv++] = zv, this.actions[hv++] = Pv, hv
      }
      addActions(vv, zv, Pv, hv) {
        let {
          state: Sv
        } = vv, {
          parser: ev
        } = vv.p, {
          data: gv
        } = ev;
        for (let pv = 0; pv < 2; pv++)
          for (let vv = ev.stateSlot(Sv, pv ? 2 : 1);; vv += 3) {
            if (65535 == gv[vv]) {
              if (1 != gv[vv + 1]) {
                0 == hv && 2 == gv[vv + 1] && (hv = this.putAction(Kv(gv, vv + 2), zv, Pv, hv));
                break
              }
              vv = Kv(gv, vv + 2)
            }
            gv[vv] == zv && (hv = this.putAction(Kv(gv, vv + 1), zv, Pv, hv))
          }
        return hv
      }
    }
    class Fv {
      constructor(vv, zv, Pv, hv) {
        this.parser = vv, this.input = zv, this.PC = hv, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Tv(zv, hv), this.tokens = new fv(vv, this.stream), this.topTerm = vv.top[1];
        let {
          from: ev
        } = hv[0];
        this.stacks = [Sv.start(this, vv.top[0], ev)], this.fragments = Pv.length && this.stream.end - ev > 4 * vv.bufferLength ? new jv(Pv, vv.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let vv, zv, Pv = this.stacks,
          hv = this.minStackPos,
          Sv = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == Pv.length) {
          let [vv] = Pv;
          for (; vv.forceReduce() && vv.stack.length && vv.stack[vv.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let ev = 0; ev < Pv.length; ev++) {
          let gv = Pv[ev];
          for (;;) {
            if (this.tokens.mainToken = null, gv.pos > hv) Sv.push(gv);
            else {
              if (this.advanceStack(gv, Sv, Pv)) continue;
              {
                vv || (vv = [], zv = []), vv.push(gv);
                let Pv = this.tokens.getMainToken(gv);
                zv.push(Pv.value, Pv.end)
              }
            }
            break
          }
        }
        if (!Sv.length) {
          let zv = vv && function(vv) {
            let zv = null;
            for (let Pv of vv) {
              let vv = Pv.p.stoppedAt;
              (Pv.pos == Pv.p.stream.end || null != vv && Pv.pos > vv) && Pv.p.parser.stateFlag(Pv.state, 2) && (!zv || zv.score < Pv.score) && (zv = Pv)
            }
            return zv
          }(vv);
          if (zv) return cv && console.log("Finish with " + this.stackID(zv)), this.stackToTree(zv);
          if (this.parser.strict) throw cv && vv && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + hv);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && vv) {
          let Pv = null != this.stoppedAt && vv[0].pos > this.stoppedAt ? vv[0] : this.runRecovery(vv, zv, Sv);
          if (Pv) return cv && console.log("Force-finish " + this.stackID(Pv)), this.stackToTree(Pv.forceAll())
        }
        if (this.recovering) {
          let vv = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Sv.length > vv)
            for (Sv.sort(((vv, zv) => zv.score - vv.score)); Sv.length > vv;) Sv.pop();
          Sv.some((vv => vv.reducePos > hv)) && this.recovering--
        } else if (Sv.length > 1) {
          vv: for (let vv = 0; vv < Sv.length - 1; vv++) {
            let zv = Sv[vv];
            for (let Pv = vv + 1; Pv < Sv.length; Pv++) {
              let hv = Sv[Pv];
              if (zv.sameState(hv) || zv.buffer.length > 500 && hv.buffer.length > 500) {
                if (!((zv.score - hv.score || zv.buffer.length - hv.buffer.length) > 0)) {
                  Sv.splice(vv--, 1);
                  continue vv
                }
                Sv.splice(Pv--, 1)
              }
            }
          }
          Sv.length > 12 && (Sv.sort(((vv, zv) => zv.score - vv.score)), Sv.splice(12, Sv.length - 12))
        }
        this.minStackPos = Sv[0].pos;
        for (let ev = 1; ev < Sv.length; ev++) Sv[ev].pos < this.minStackPos && (this.minStackPos = Sv[ev].pos);
        return null
      }
      stopAt(vv) {
        if (null != this.stoppedAt && this.stoppedAt < vv) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = vv
      }
      advanceStack(vv, zv, Pv) {
        let Sv = vv.pos,
          {
            parser: ev
          } = this,
          gv = cv ? this.stackID(vv) + " -> " : "";
        if (null != this.stoppedAt && Sv > this.stoppedAt) return vv.forceReduce() ? vv : null;
        if (this.fragments) {
          let zv = vv.curContext && vv.curContext.tracker.strict,
            Pv = zv ? vv.curContext.hash : 0;
          for (let pv = this.fragments.nodeAt(Sv); pv;) {
            let Sv = this.parser.nodeSet.types[pv.type.id] == pv.type ? ev.getGoto(vv.state, pv.type.id) : -1;
            if (Sv > -1 && pv.length && (!zv || (pv.prop(hv.l.contextHash) || 0) == Pv)) return vv.useNode(pv, Sv), cv && console.log(gv + this.stackID(vv) + ` (via reuse of ${ev.getName(pv.type.id)})`), !0;
            if (!(pv instanceof hv.E) || 0 == pv.children.length || pv.positions[0] > 0) break;
            let dv = pv.children[0];
            if (!(dv instanceof hv.E && 0 == pv.positions[0])) break;
            pv = dv
          }
        }
        let pv = ev.stateSlot(vv.state, 4);
        if (pv > 0) return vv.reduce(pv), cv && console.log(gv + this.stackID(vv) + ` (via always-reduce ${ev.getName(65535&pv)})`), !0;
        if (vv.stack.length >= 8400)
          for (; vv.stack.length > 6e3 && vv.forceReduce(););
        let dv = this.tokens.getActions(vv);
        for (let hv = 0; hv < dv.length;) {
          let pv = dv[hv++],
            Nv = dv[hv++],
            lv = dv[hv++],
            Tv = hv == dv.length || !Pv,
            Wv = Tv ? vv : vv.split(),
            wv = this.tokens.mainToken;
          if (Wv.apply(pv, Nv, wv ? wv.start : Wv.pos, lv), cv && console.log(gv + this.stackID(Wv) + ` (via ${0==(65536&pv)?"shift":`reduce of ${ev.getName(65535&pv)}`} for ${ev.getName(Nv)} @ ${Sv}${Wv==vv?"":", split"})`), Tv) return !0;
          Wv.pos > Sv ? zv.push(Wv) : Pv.push(Wv)
        }
        return !1
      }
      advanceFully(vv, zv) {
        let Pv = vv.pos;
        for (;;) {
          if (!this.advanceStack(vv, null, null)) return !1;
          if (vv.pos > Pv) return Yv(vv, zv), !0
        }
      }
      runRecovery(vv, zv, Pv) {
        let hv = null,
          Sv = !1;
        for (let ev = 0; ev < vv.length; ev++) {
          let gv = vv[ev],
            pv = zv[ev << 1],
            dv = zv[1 + (ev << 1)],
            Nv = cv ? this.stackID(gv) + " -> " : "";
          if (gv.deadEnd) {
            if (Sv) continue;
            if (Sv = !0, gv.restart(), cv && console.log(Nv + this.stackID(gv) + " (restarted)"), this.advanceFully(gv, Pv)) continue
          }
          let lv = gv.split(),
            Tv = Nv;
          for (let vv = 0; vv < 10 && lv.forceReduce(); vv++) {
            if (cv && console.log(Tv + this.stackID(lv) + " (via force-reduce)"), this.advanceFully(lv, Pv)) break;
            cv && (Tv = this.stackID(lv) + " -> ")
          }
          for (let vv of gv.recoverByInsert(pv)) cv && console.log(Nv + this.stackID(vv) + " (via recover-insert)"), this.advanceFully(vv, Pv);
          this.stream.end > gv.pos ? (dv == gv.pos && (dv++, pv = 0), gv.recoverByDelete(pv, dv), cv && console.log(Nv + this.stackID(gv) + ` (via recover-delete ${this.parser.getName(pv)})`), Yv(gv, Pv)) : (!hv || hv.score < lv.score) && (hv = lv)
        }
        return hv
      }
      stackToTree(vv) {
        return vv.close(), hv.E.build({
          buffer: pv.create(vv),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.PC[0].from,
          length: vv.pos - this.PC[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(vv) {
        let zv = (Gv || (Gv = new WeakMap)).get(vv);
        return zv || Gv.set(vv, zv = String.fromCodePoint(this.nextStackID++)), zv + vv
      }
    }

    function Yv(vv, zv) {
      for (let Pv = 0; Pv < zv.length; Pv++) {
        let hv = zv[Pv];
        if (hv.pos == vv.pos && hv.sameState(vv)) return void(zv[Pv].score < vv.score && (zv[Pv] = vv))
      }
      zv.push(vv)
    }
    class nv {
      constructor(vv, zv, Pv) {
        this.source = vv, this.flags = zv, this.disabled = Pv
      }
      allows(vv) {
        return !this.disabled || 0 == this.disabled[vv]
      }
    }
    const Ov = vv => vv;
    class Dv extends hv.z {
      constructor(vv) {
        if (super(), this.wrappers = [], 14 != vv.version) throw new RangeError(`Parser version (${vv.version}) doesn't match runtime version (14)`);
        let zv = vv.nodeNames.split(" ");
        this.minRepeatTerm = zv.length;
        for (let hv = 0; hv < vv.repeatNodeCount; hv++) zv.push("");
        let Pv = Object.keys(vv.topRules).map((zv => vv.topRules[zv][1])),
          Sv = [];
        for (let hv = 0; hv < zv.length; hv++) Sv.push([]);

        function ev(vv, zv, Pv) {
          Sv[vv].push([zv, zv.deserialize(String(Pv))])
        }
        if (vv.nodeProps)
          for (let pv of vv.nodeProps) {
            let vv = pv[0];
            "string" == typeof vv && (vv = hv.l[vv]);
            for (let zv = 1; zv < pv.length;) {
              let Pv = pv[zv++];
              if (Pv >= 0) ev(Pv, vv, pv[zv++]);
              else {
                let hv = pv[zv + -Pv];
                for (let Sv = -Pv; Sv > 0; Sv--) ev(pv[zv++], vv, hv);
                zv++
              }
            }
          }
        this.nodeSet = new hv.p(zv.map(((zv, ev) => hv.r.define({
          name: ev >= this.minRepeatTerm ? void 0 : zv,
          id: ev,
          props: Sv[ev],
          top: Pv.indexOf(ev) > -1,
          error: 0 == ev,
          skipped: vv.skippedNodes && vv.skippedNodes.indexOf(ev) > -1
        })))), vv.propSources && (this.nodeSet = this.nodeSet.extend(...vv.propSources)), this.strict = !1, this.bufferLength = hv.e;
        let gv = dv(vv.tokenData);
        this.context = vv.context, this.specializerSpecs = vv.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let hv = 0; hv < this.specializerSpecs.length; hv++) this.specialized[hv] = this.specializerSpecs[hv].term;
        this.specializers = this.specializerSpecs.map(Vv), this.states = dv(vv.states, Uint32Array), this.data = dv(vv.stateData), this.goto = dv(vv.goto), this.maxTerm = vv.maxTerm, this.tokenizers = vv.tokenizers.map((vv => "number" == typeof vv ? new Wv(gv, vv) : vv)), this.topRules = vv.topRules, this.dialects = vv.dialects || {}, this.dynamicPrecedences = vv.dynamicPrecedences || null, this.tokenPrecTable = vv.tokenPrec, this.termNames = vv.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(vv, zv, Pv) {
        let hv = new Fv(this, vv, zv, Pv);
        for (let Sv of this.wrappers) hv = Sv(hv, vv, zv, Pv);
        return hv
      }
      getGoto(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = this.goto;
        if (zv >= hv[0]) return -1;
        for (let Sv = hv[zv + 1];;) {
          let zv = hv[Sv++],
            ev = 1 & zv,
            gv = hv[Sv++];
          if (ev && Pv) return gv;
          for (let Pv = Sv + (zv >> 1); Sv < Pv; Sv++)
            if (hv[Sv] == vv) return gv;
          if (ev) return -1
        }
      }
      hasAction(vv, zv) {
        let Pv = this.data;
        for (let hv = 0; hv < 2; hv++)
          for (let Sv, ev = this.stateSlot(vv, hv ? 2 : 1);; ev += 3) {
            if (65535 == (Sv = Pv[ev])) {
              if (1 != Pv[ev + 1]) {
                if (2 == Pv[ev + 1]) return Kv(Pv, ev + 2);
                break
              }
              Sv = Pv[ev = Kv(Pv, ev + 2)]
            }
            if (Sv == zv || 0 == Sv) return Kv(Pv, ev + 1)
          }
        return 0
      }
      stateSlot(vv, zv) {
        return this.states[6 * vv + zv]
      }
      stateFlag(vv, zv) {
        return (this.stateSlot(vv, 0) & zv) > 0
      }
      validAction(vv, zv) {
        return !!this.allActions(vv, (vv => vv == zv || null))
      }
      allActions(vv, zv) {
        let Pv = this.stateSlot(vv, 4),
          hv = Pv ? zv(Pv) : void 0;
        for (let Sv = this.stateSlot(vv, 1); null == hv; Sv += 3) {
          if (65535 == this.data[Sv]) {
            if (1 != this.data[Sv + 1]) break;
            Sv = Kv(this.data, Sv + 2)
          }
          hv = zv(Kv(this.data, Sv + 1))
        }
        return hv
      }
      nextStates(vv) {
        let zv = [];
        for (let Pv = this.stateSlot(vv, 1);; Pv += 3) {
          if (65535 == this.data[Pv]) {
            if (1 != this.data[Pv + 1]) break;
            Pv = Kv(this.data, Pv + 2)
          }
          if (0 == (1 & this.data[Pv + 2])) {
            let vv = this.data[Pv + 1];
            zv.some(((zv, Pv) => 1 & Pv && zv == vv)) || zv.push(this.data[Pv], vv)
          }
        }
        return zv
      }
      configure(vv) {
        let zv = Object.assign(Object.create(Dv.prototype), this);
        if (vv.props && (zv.nodeSet = this.nodeSet.extend(...vv.props)), vv.top) {
          let Pv = this.topRules[vv.top];
          if (!Pv) throw new RangeError(`Invalid top rule name ${vv.top}`);
          zv.top = Pv
        }
        return vv.tokenizers && (zv.tokenizers = this.tokenizers.map((zv => {
          let Pv = vv.tokenizers.find((vv => vv.from == zv));
          return Pv ? Pv.to : zv
        }))), vv.specializers && (zv.specializers = this.specializers.slice(), zv.specializerSpecs = this.specializerSpecs.map(((Pv, hv) => {
          let Sv = vv.specializers.find((vv => vv.from == Pv.external));
          if (!Sv) return Pv;
          let ev = Object.assign(Object.assign({}, Pv), {
            external: Sv.to
          });
          return zv.specializers[hv] = Vv(ev), ev
        }))), vv.contextTracker && (zv.context = vv.contextTracker), vv.dialect && (zv.dialect = this.parseDialect(vv.dialect)), null != vv.strict && (zv.strict = vv.strict), vv.wrap && (zv.wrappers = zv.wrappers.concat(vv.wrap)), null != vv.bufferLength && (zv.bufferLength = vv.bufferLength), zv
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(vv) {
        return this.termNames ? this.termNames[vv] : String(vv <= this.maxNode && this.nodeSet.types[vv].name || vv)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(vv) {
        let zv = this.dynamicPrecedences;
        return null == zv ? 0 : zv[vv] || 0
      }
      parseDialect(vv) {
        let zv = Object.keys(this.dialects),
          Pv = zv.map((() => !1));
        if (vv)
          for (let Sv of vv.split(" ")) {
            let vv = zv.indexOf(Sv);
            vv >= 0 && (Pv[vv] = !0)
          }
        let hv = null;
        for (let Sv = 0; Sv < zv.length; Sv++)
          if (!Pv[Sv])
            for (let vv, Pv = this.dialects[zv[Sv]]; 65535 != (vv = this.data[Pv++]);)(hv || (hv = new Uint8Array(this.maxTerm + 1)))[vv] = 1;
        return new nv(vv, Pv, hv)
      }
      static deserialize(vv) {
        return new Dv(vv)
      }
    }

    function Kv(vv, zv) {
      return vv[zv] | vv[zv + 1] << 16
    }

    function Vv(vv) {
      if (vv.external) {
        let zv = vv.extend ? 1 : 0;
        return (Pv, hv) => vv.external(Pv, hv) << 1 | zv
      }
      return vv.get
    }
    var Uv = Pv(40640);
    const Rv = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      xv = new class {
        constructor(vv) {
          this.start = vv.start, this.shift = vv.shift || Ov, this.reduce = vv.reduce || Ov, this.reuse = vv.reuse || Ov, this.hash = vv.hash || (() => 0), this.strict = !1 !== vv.strict
        }
      }({
        start: !1,
        shift: (vv, zv) => 5 == zv || 6 == zv || 320 == zv ? vv : 321 == zv,
        strict: !1
      }),
      tv = new av(((vv, zv) => {
        let {
          next: Pv
        } = vv;
        (125 == Pv || -1 == Pv || zv.context) && vv.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      qv = new av(((vv, zv) => {
        let Pv, {
          next: hv
        } = vv;
        Rv.indexOf(hv) > -1 || (47 != hv || 47 != (Pv = vv.peek(1)) && 42 != Pv) && (125 == hv || 59 == hv || -1 == hv || zv.context || vv.acceptToken(316))
      }), {
        contextual: !0
      }),
      Iv = new av(((vv, zv) => {
        91 != vv.next || zv.context || vv.acceptToken(317)
      }), {
        contextual: !0
      }),
      Qv = new av(((vv, zv) => {
        let {
          next: Pv
        } = vv;
        if (43 == Pv || 45 == Pv) {
          if (vv.advance(), Pv == vv.next) {
            vv.advance();
            let Pv = !zv.context && zv.canShift(1);
            vv.acceptToken(Pv ? 1 : 2)
          }
        } else 63 == Pv && 46 == vv.peek(1) && (vv.advance(), vv.advance(), (vv.next < 48 || vv.next > 57) && vv.acceptToken(3))
      }), {
        contextual: !0
      });

    function Zv(vv, zv) {
      return vv >= 65 && vv <= 90 || vv >= 97 && vv <= 122 || 95 == vv || vv >= 192 || !zv && vv >= 48 && vv <= 57
    }
    const Av = new av(((vv, zv) => {
        if (60 != vv.next || !zv.dialectEnabled(0)) return;
        if (vv.advance(), 47 == vv.next) return;
        let Pv = 0;
        for (; Rv.indexOf(vv.next) > -1;) vv.advance(), Pv++;
        if (Zv(vv.next, !0)) {
          for (vv.advance(), Pv++; Zv(vv.next, !1);) vv.advance(), Pv++;
          for (; Rv.indexOf(vv.next) > -1;) vv.advance(), Pv++;
          if (44 == vv.next) return;
          for (let zv = 0;; zv++) {
            if (7 == zv) {
              if (!Zv(vv.next, !0)) return;
              break
            }
            if (vv.next != "extends".charCodeAt(zv)) break;
            vv.advance(), Pv++
          }
        }
        vv.acceptToken(4, -Pv)
      })),
      Lv = (0, Uv.f)({
        "get set async static": Uv.l.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Uv.l.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Uv.l.operatorKeyword,
        "let var const using function class extends": Uv.l.definitionKeyword,
        "import export from": Uv.l.moduleKeyword,
        "with debugger new": Uv.l.keyword,
        TemplateString: Uv.l.special(Uv.l.string),
        super: Uv.l.atom,
        BooleanLiteral: Uv.l.bool,
        this: Uv.l.self,
        null: Uv.l.null,
        Star: Uv.l.modifier,
        VariableName: Uv.l.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Uv.l.function(Uv.l.variableName),
        VariableDefinition: Uv.l.definition(Uv.l.variableName),
        Label: Uv.l.labelName,
        PropertyName: Uv.l.propertyName,
        PrivatePropertyName: Uv.l.special(Uv.l.propertyName),
        "CallExpression/MemberExpression/PropertyName": Uv.l.function(Uv.l.propertyName),
        "FunctionDeclaration/VariableDefinition": Uv.l.function(Uv.l.definition(Uv.l.variableName)),
        "ClassDeclaration/VariableDefinition": Uv.l.definition(Uv.l.className),
        "NewExpression/VariableName": Uv.l.className,
        PropertyDefinition: Uv.l.definition(Uv.l.propertyName),
        PrivatePropertyDefinition: Uv.l.definition(Uv.l.special(Uv.l.propertyName)),
        UpdateOp: Uv.l.updateOperator,
        "LineComment Hashbang": Uv.l.lineComment,
        BlockComment: Uv.l.blockComment,
        Number: Uv.l.number,
        String: Uv.l.string,
        Escape: Uv.l.escape,
        ArithOp: Uv.l.arithmeticOperator,
        LogicOp: Uv.l.logicOperator,
        BitOp: Uv.l.bitwiseOperator,
        CompareOp: Uv.l.compareOperator,
        RegExp: Uv.l.regexp,
        Equals: Uv.l.definitionOperator,
        Arrow: Uv.l.function(Uv.l.punctuation),
        ": Spread": Uv.l.punctuation,
        "( )": Uv.l.paren,
        "[ ]": Uv.l.squareBracket,
        "{ }": Uv.l.brace,
        "InterpolationStart InterpolationEnd": Uv.l.special(Uv.l.brace),
        ".": Uv.l.derefOperator,
        ", ;": Uv.l.separator,
        "@": Uv.l.meta,
        TypeName: Uv.l.typeName,
        TypeDefinition: Uv.l.definition(Uv.l.typeName),
        "type enum interface implements namespace module declare": Uv.l.definitionKeyword,
        "abstract global Privacy readonly override": Uv.l.modifier,
        "is keyof unique infer asserts": Uv.l.operatorKeyword,
        JSXAttributeValue: Uv.l.attributeValue,
        JSXText: Uv.l.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Uv.l.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Uv.l.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Uv.l.attributeName,
        "JSXBuiltin/JSXIdentifier": Uv.l.standard(Uv.l.tagName)
      }),
      Hv = {
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
      Mv = {
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
      yv = {
        __proto__: null,
        "<": 193
      },
      Bv = Dv.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: xv,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [Lv],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [qv, Iv, Qv, Av, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, tv, new wv("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new wv("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: vv => Hv[vv] || -1
        }, {
          term: 343,
          get: vv => Mv[vv] || -1
        }, {
          term: 95,
          get: vv => yv[vv] || -1
        }],
        tokenPrec: 15201
      });
    var Jv = Pv(40626),
      Ev = Pv(40599),
      ov = Pv(40605),
      bv = Pv(40593);
    const rv = [(0, bv.o)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, bv.o)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, bv.o)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, bv.o)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, bv.o)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, bv.o)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, bv.o)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, bv.o)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, bv.o)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, bv.o)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, bv.o)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      kv = rv.concat([(0, bv.o)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, bv.o)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, bv.o)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      Xv = new hv.v,
      uv = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function vz(vv) {
      return (zv, Pv) => {
        let hv = zv.node.getChild("VariableDefinition");
        return hv && Pv(hv, vv), !0
      }
    }
    const zz = ["FunctionDeclaration"],
      Pz = {
        FunctionDeclaration: vz("function"),
        ClassDeclaration: vz("class"),
        ClassExpression: () => !0,
        EnumDeclaration: vz("constant"),
        TypeAliasDeclaration: vz("type"),
        NamespaceDeclaration: vz("namespace"),
        VariableDefinition(vv, zv) {
          vv.matchContext(zz) || zv(vv, "variable")
        },
        TypeDefinition(vv, zv) {
          zv(vv, "type")
        },
        __proto__: null
      };

    function hz(vv, zv) {
      let Pv = Xv.get(zv);
      if (Pv) return Pv;
      let Sv = [],
        ev = !0;

      function gv(zv, Pv) {
        let hv = vv.sliceString(zv.from, zv.to);
        Sv.push({
          label: hv,
          type: Pv
        })
      }
      return zv.cursor(hv.h.IncludeAnonymous).iterate((zv => {
        if (ev) ev = !1;
        else if (zv.name) {
          let vv = Pz[zv.name];
          if (vv && vv(zv, gv) || uv.has(zv.name)) return !1
        } else if (zv.to - zv.from > 8192) {
          for (let Pv of hz(vv, zv.node)) Sv.push(Pv);
          return !1
        }
      })), Xv.set(zv, Sv), Sv
    }
    const Sz = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      ez = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function gz(vv) {
      let zv = (0, Jv.tb)(vv.state).resolveInner(vv.pos, -1);
      if (ez.indexOf(zv.name) > -1) return null;
      let Pv = "VariableName" == zv.name || zv.to - zv.from < 20 && Sz.test(vv.state.sliceDoc(zv.from, zv.to));
      if (!Pv && !vv.explicit) return null;
      let hv = [];
      for (let Sv = zv; Sv; Sv = Sv.parent) uv.has(Sv.name) && (hv = hv.concat(hz(vv.state.doc, Sv)));
      return {
        options: hv,
        from: Pv ? zv.from : vv.pos,
        validFor: Sz
      }
    }
    const pz = Jv.i.define({
        name: "javascript",
        parser: Bv.configure({
          props: [Jv.T.add({
            IfStatement: (0, Jv.o)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, Jv.o)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: Jv.x,
            SwitchBody: vv => {
              let zv = vv.textAfter,
                Pv = /^\s*\}/.test(zv),
                hv = /^\s*(case|default)\b/.test(zv);
              return vv.baseIndent + (Pv ? 0 : hv ? 1 : 2) * vv.unit
            },
            Block: (0, Jv.t)({
              closing: "}"
            }),
            ArrowFunction: vv => vv.baseIndent + vv.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, Jv.o)({
              except: /^\s*{/
            }),
            JSXElement(vv) {
              let zv = /^\s*<\//.test(vv.textAfter);
              return vv.lineIndent(vv.node.from) + (zv ? 0 : vv.unit)
            },
            JSXEscape(vv) {
              let zv = /\s*\}/.test(vv.textAfter);
              return vv.lineIndent(vv.node.from) + (zv ? 0 : vv.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": vv => vv.column(vv.node.from) + vv.unit
          }), Jv.J.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": Jv.D,
            BlockComment: vv => ({
              from: vv.from + 2,
              to: vv.to - 2
            }),
            JSXElement(vv) {
              let zv = vv.firstChild;
              if (!zv || "JSXSelfClosingTag" == zv.name) return null;
              let Pv = vv.lastChild;
              return {
                from: zv.to,
                to: Pv.type.isError ? vv.to : Pv.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(vv) {
              var zv;
              let Pv = null === (zv = vv.firstChild) || void 0 === zv ? void 0 : zv.nextSibling,
                hv = vv.lastChild;
              return !Pv || Pv.type.isError ? null : {
                from: Pv.to,
                to: hv.type.isError ? vv.to : hv.from
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
      dz = {
        test: vv => /^JSX/.test(vv.name),
        facet: (0, Jv.s)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Nz = pz.configure({
        dialect: "ts"
      }, "typescript"),
      lz = pz.configure({
        dialect: "jsx",
        props: [Jv.ib.add((vv => vv.isTop ? [dz] : void 0))]
      }),
      Tz = pz.configure({
        dialect: "jsx ts",
        props: [Jv.ib.add((vv => vv.isTop ? [dz] : void 0))]
      }, "typescript");
    let Wz = vv => ({
      label: vv,
      type: "keyword"
    });
    const wz = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Wz),
      az = wz.concat(["declare", "implements", "private", "protected", "public"].map(Wz));

    function sz() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        zv = vv.jsx ? vv.typescript ? Tz : lz : vv.typescript ? Nz : pz,
        Pv = vv.typescript ? kv.concat(az) : rv.concat(wz);
      return new Jv.m(zv, [pz.data.of({
        autocomplete: (0, bv.m)(ez, (0, bv.k)(Pv))
      }), pz.data.of({
        autocomplete: gz
      }), vv.jsx ? cz : []])
    }

    function Cz(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vv.length;
      for (let hv = null === zv || void 0 === zv ? void 0 : zv.firstChild; hv; hv = hv.nextSibling)
        if ("JSXIdentifier" == hv.name || "JSXBuiltin" == hv.name || "JSXNamespacedName" == hv.name || "JSXMemberExpression" == hv.name) return vv.sliceString(hv.from, Math.min(hv.to, Pv));
      return ""
    }
    const iz = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      cz = ov.g.inputHandler.of(((vv, zv, Pv, hv, Sv) => {
        if ((iz ? vv.composing : vv.compositionStarted) || vv.state.readOnly || zv != Pv || ">" != hv && "/" != hv || !pz.isActiveAt(vv.state, zv, -1)) return !1;
        let ev = Sv(),
          {
            state: gv
          } = ev,
          pv = gv.changeByRange((vv => {
            var zv;
            let Pv, {
                head: Sv
              } = vv,
              ev = (0, Jv.tb)(gv).resolveInner(Sv - 1, -1);
            if ("JSXStartTag" == ev.name && (ev = ev.parent), gv.doc.sliceString(Sv - 1, Sv) != hv || "JSXAttributeValue" == ev.name && ev.to > Sv);
            else {
              if (">" == hv && "JSXFragmentTag" == ev.name) return {
                range: vv,
                changes: {
                  from: Sv,
                  insert: "</>"
                }
              };
              if ("/" == hv && "JSXStartCloseTag" == ev.name) {
                let vv = ev.parent,
                  hv = vv.parent;
                if (hv && vv.from == Sv - 2 && ((Pv = Cz(gv.doc, hv.firstChild, Sv)) || "JSXFragmentTag" == (null === (zv = hv.firstChild) || void 0 === zv ? void 0 : zv.name))) {
                  let vv = `${Pv}>`;
                  return {
                    range: Ev.j.cursor(Sv + vv.length, -1),
                    changes: {
                      from: Sv,
                      insert: vv
                    }
                  }
                }
              } else if (">" == hv) {
                let zv = function(vv) {
                  for (;;) {
                    if ("JSXOpenTag" == vv.name || "JSXSelfClosingTag" == vv.name || "JSXFragmentTag" == vv.name) return vv;
                    if ("JSXEscape" == vv.name || !vv.parent) return null;
                    vv = vv.parent
                  }
                }(ev);
                if (zv && "JSXOpenTag" == zv.name && !/^\/?>|^<\//.test(gv.doc.sliceString(Sv, Sv + 2)) && (Pv = Cz(gv.doc, zv, Sv))) return {
                  range: vv,
                  changes: {
                    from: Sv,
                    insert: `</${Pv}>`
                  }
                }
              }
            }
            return {
              range: vv
            }
          }));
        return !pv.changes.empty && (vv.dispatch([ev, gv.update(pv, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40626: (vv, zv, Pv) => {
    Pv.d(zv, {
      $: () => Rv,
      A: () => cz,
      D: () => rv,
      H: () => Nz,
      J: () => bv,
      L: () => iv,
      N: () => Uv,
      R: () => xv,
      T: () => qv,
      X: () => Ev,
      cb: () => Vv,
      d: () => mz,
      eb: () => Mz,
      g: () => tv,
      i: () => av,
      ib: () => Tv,
      m: () => Dv,
      mb: () => Yz,
      n: () => Zz,
      o: () => Bv,
      p: () => Dz,
      qb: () => Cv,
      s: () => lv,
      t: () => Hv,
      tb: () => sv,
      x: () => yv
    });
    var hv, Sv = Pv(40632),
      ev = Pv(40599),
      gv = Pv(40605),
      pv = Pv(40640),
      dv = Pv(40612);
    const Nv = new Sv.l;

    function lv(vv) {
      return ev.q.define({
        combine: vv ? zv => zv.concat(vv) : void 0
      })
    }
    const Tv = new Sv.l;
    class Wv {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = vv, this.name = hv, ev.n.prototype.hasOwnProperty("tree") || Object.defineProperty(ev.n.prototype, "tree", {
          get() {
            return sv(this)
          }
        }), this.parser = zv, this.extension = [Ov.of(this), ev.n.languageData.of(((vv, zv, Pv) => {
          let hv = wv(vv, zv, Pv),
            Sv = hv.type.prop(Nv);
          if (!Sv) return [];
          let ev = vv.facet(Sv),
            gv = hv.type.prop(Tv);
          if (gv) {
            let Sv = hv.resolve(zv - hv.from, Pv);
            for (let zv of gv)
              if (zv.test(Sv, vv)) {
                let Pv = vv.facet(zv.facet);
                return "replace" == zv.type ? Pv : Pv.concat(ev)
              }
          }
          return ev
        }))].concat(Pv)
      }
      isActiveAt(vv, zv) {
        return wv(vv, zv, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Nv) == this.data
      }
      findRegions(vv) {
        let zv = vv.facet(Ov);
        if ((null === zv || void 0 === zv ? void 0 : zv.data) == this.data) return [{
          from: 0,
          to: vv.doc.length
        }];
        if (!zv || !zv.allowsNesting) return [];
        let Pv = [],
          hv = (vv, zv) => {
            if (vv.prop(Nv) == this.data) return void Pv.push({
              from: zv,
              to: zv + vv.length
            });
            let ev = vv.prop(Sv.l.mounted);
            if (ev) {
              if (ev.tree.prop(Nv) == this.data) {
                if (ev.overlay)
                  for (let vv of ev.overlay) Pv.push({
                    from: vv.from + zv,
                    to: vv.to + zv
                  });
                else Pv.push({
                  from: zv,
                  to: zv + vv.length
                });
                return
              }
              if (ev.overlay) {
                let vv = Pv.length;
                if (hv(ev.tree, ev.overlay[0].from + zv), Pv.length > vv) return
              }
            }
            for (let Pv = 0; Pv < vv.children.length; Pv++) {
              let ev = vv.children[Pv];
              ev instanceof Sv.E && hv(ev, vv.positions[Pv] + zv)
            }
          };
        return hv(sv(vv), 0), Pv
      }
      get allowsNesting() {
        return !0
      }
    }

    function wv(vv, zv, Pv) {
      let hv = vv.facet(Ov),
        ev = sv(vv).topNode;
      if (!hv || hv.allowsNesting)
        for (let gv = ev; gv; gv = gv.enter(zv, Pv, Sv.h.ExcludeBuffers | Sv.h.EnterBracketed)) gv.type.isTop && (ev = gv);
      return ev
    }
    Wv.setState = ev.B.define();
    class av extends Wv {
      constructor(vv, zv, Pv) {
        super(vv, zv, [], Pv), this.parser = zv
      }
      static define(vv) {
        let zv = lv(vv.languageData);
        return new av(zv, vv.parser.configure({
          props: [Nv.add((vv => vv.isTop ? zv : void 0))]
        }), vv.name)
      }
      configure(vv, zv) {
        return new av(this.data, this.parser.configure(vv), zv || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function sv(vv) {
      let zv = vv.field(Wv.state, !1);
      return zv ? zv.tree : Sv.E.empty
    }

    function Cv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv.doc.length;
      var Pv;
      return (null === (Pv = vv.field(Wv.state, !1)) || void 0 === Pv ? void 0 : Pv.context.isDone(zv)) || !1
    }

    function iv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv.viewport.to,
        Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        hv = function(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var hv;
          let Sv = null === (hv = vv.field(Wv.state, !1)) || void 0 === hv ? void 0 : hv.context;
          if (!Sv) return null;
          let ev = Sv.viewport;
          Sv.updateViewport({
            from: 0,
            to: zv
          });
          let gv = Sv.isDone(zv) || Sv.work(Pv, zv) ? Sv.tree : null;
          return Sv.updateViewport(ev), gv
        }(vv.state, zv, Pv);
      return hv != sv(vv.state) && vv.dispatch({}), !!hv
    }
    class cv {
      constructor(vv) {
        this.doc = vv, this.cursorPos = 0, this.string = "", this.cursor = vv.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(vv) {
        return this.string = this.cursor.next(vv - this.cursorPos).value, this.cursorPos = vv + this.string.length, this.cursorPos - this.string.length
      }
      chunk(vv) {
        return this.syncTo(vv), this.string
      }
      get lineChunks() {
        return !0
      }
      read(vv, zv) {
        let Pv = this.cursorPos - this.string.length;
        return vv < Pv || zv >= this.cursorPos ? this.doc.sliceString(vv, zv) : this.string.slice(vv - Pv, zv - Pv)
      }
    }
    let Gv = null;
    class mv {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          hv = arguments.length > 3 ? arguments[3] : void 0,
          Sv = arguments.length > 4 ? arguments[4] : void 0,
          ev = arguments.length > 5 ? arguments[5] : void 0,
          gv = arguments.length > 6 ? arguments[6] : void 0,
          pv = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = vv, this.state = zv, this.fragments = Pv, this.tree = hv, this.treeLen = Sv, this.viewport = ev, this.skipped = gv, this.scheduleOn = pv, this.parse = null, this.tempSkipped = []
      }
      static create(vv, zv, Pv) {
        return new mv(vv, zv, [], Sv.E.empty, 0, Pv, [], null)
      }
      startParse() {
        return this.parser.startParse(new cv(this.state.doc), this.fragments)
      }
      work(vv, zv) {
        return null != zv && zv >= this.state.doc.length && (zv = void 0), this.tree != Sv.E.empty && this.isDone(null !== zv && void 0 !== zv ? zv : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var Pv;
          if ("number" == typeof vv) {
            let zv = Date.now() + vv;
            vv = () => Date.now() > zv
          }
          for (this.parse || (this.parse = this.startParse()), null != zv && (null == this.parse.stoppedAt || this.parse.stoppedAt > zv) && zv < this.state.doc.length && this.parse.stopAt(zv);;) {
            let hv = this.parse.advance();
            if (hv) {
              if (this.fragments = this.withoutTempSkipped(Sv.B.addTree(hv, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (Pv = this.parse.stoppedAt) && void 0 !== Pv ? Pv : this.state.doc.length, this.tree = hv, this.parse = null, !(this.treeLen < (null !== zv && void 0 !== zv ? zv : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (vv()) return !1
          }
        }))
      }
      takeTree() {
        let vv, zv;
        this.parse && (vv = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > vv) && this.parse.stopAt(vv), this.withContext((() => {
          for (; !(zv = this.parse.advance()););
        })), this.treeLen = vv, this.tree = zv, this.fragments = this.withoutTempSkipped(Sv.B.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(vv) {
        let zv = Gv;
        Gv = this;
        try {
          return vv()
        } finally {
          Gv = zv
        }
      }
      withoutTempSkipped(vv) {
        for (let zv; zv = this.tempSkipped.pop();) vv = jv(vv, zv.from, zv.to);
        return vv
      }
      changes(vv, zv) {
        let {
          fragments: Pv,
          tree: hv,
          treeLen: ev,
          viewport: gv,
          skipped: pv
        } = this;
        if (this.takeTree(), !vv.empty) {
          let zv = [];
          if (vv.iterChangedRanges(((vv, Pv, hv, Sv) => zv.push({
              fromA: vv,
              toA: Pv,
              fromB: hv,
              toB: Sv
            }))), Pv = Sv.B.applyChanges(Pv, zv), hv = Sv.E.empty, ev = 0, gv = {
              from: vv.mapPos(gv.from, -1),
              to: vv.mapPos(gv.to, 1)
            }, this.skipped.length) {
            pv = [];
            for (let zv of this.skipped) {
              let Pv = vv.mapPos(zv.from, 1),
                hv = vv.mapPos(zv.to, -1);
              Pv < hv && pv.push({
                from: Pv,
                to: hv
              })
            }
          }
        }
        return new mv(this.parser, zv, Pv, hv, ev, gv, pv, this.scheduleOn)
      }
      updateViewport(vv) {
        if (this.viewport.from == vv.from && this.viewport.to == vv.to) return !1;
        this.viewport = vv;
        let zv = this.skipped.length;
        for (let Pv = 0; Pv < this.skipped.length; Pv++) {
          let {
            from: zv,
            to: hv
          } = this.skipped[Pv];
          zv < vv.to && hv > vv.from && (this.fragments = jv(this.fragments, zv, hv), this.skipped.splice(Pv--, 1))
        }
        return !(this.skipped.length >= zv) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(vv, zv) {
        this.skipped.push({
          from: vv,
          to: zv
        })
      }
      static getSkippingParser(vv) {
        return new class extends Sv.z {
          createParse(zv, Pv, hv) {
            let ev = hv[0].from,
              gv = hv[hv.length - 1].to;
            return {
              parsedPos: ev,
              advance() {
                let zv = Gv;
                if (zv) {
                  for (let vv of hv) zv.tempSkipped.push(vv);
                  vv && (zv.scheduleOn = zv.scheduleOn ? Promise.all([zv.scheduleOn, vv]) : vv)
                }
                return this.parsedPos = gv, new Sv.E(Sv.r.none, [], [], gv - ev)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(vv) {
        vv = Math.min(vv, this.state.doc.length);
        let zv = this.fragments;
        return this.treeLen >= vv && zv.length && 0 == zv[0].from && zv[0].to >= vv
      }
      static get() {
        return Gv
      }
    }

    function jv(vv, zv, Pv) {
      return Sv.B.applyChanges(vv, [{
        fromA: zv,
        toA: Pv,
        fromB: zv,
        toB: Pv
      }])
    }
    class fv {
      constructor(vv) {
        this.context = vv, this.tree = vv.tree
      }
      apply(vv) {
        if (!vv.docChanged && this.tree == this.context.tree) return this;
        let zv = this.context.changes(vv.changes, vv.state),
          Pv = this.context.treeLen == vv.startState.doc.length ? void 0 : Math.max(vv.changes.mapPos(this.context.treeLen), zv.viewport.to);
        return zv.work(20, Pv) || zv.takeTree(), new fv(zv)
      }
      static init(vv) {
        let zv = Math.min(3e3, vv.doc.length),
          Pv = mv.create(vv.facet(Ov).parser, vv, {
            from: 0,
            to: zv
          });
        return Pv.work(20, zv) || Pv.takeTree(), new fv(Pv)
      }
    }
    Wv.state = ev.E.define({
      create: fv.init,
      update(vv, zv) {
        for (let Pv of zv.effects)
          if (Pv.is(Wv.setState)) return Pv.value;
        return zv.startState.facet(Ov) != zv.state.facet(Ov) ? fv.init(zv.state) : vv.apply(zv)
      }
    });
    let Fv = vv => {
      let zv = setTimeout((() => vv()), 500);
      return () => clearTimeout(zv)
    };
    "undefined" != typeof requestIdleCallback && (Fv = vv => {
      let zv = -1,
        Pv = setTimeout((() => {
          zv = requestIdleCallback(vv, {
            timeout: 400
          })
        }), 100);
      return () => zv < 0 ? clearTimeout(Pv) : cancelIdleCallback(zv)
    });
    const Yv = "undefined" != typeof navigator && (null === (hv = navigator.scheduling) || void 0 === hv ? void 0 : hv.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      nv = gv.j.fromClass(class {
        constructor(vv) {
          this.view = vv, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(vv) {
          let zv = this.view.state.field(Wv.state).context;
          (zv.updateViewport(vv.view.viewport) || this.view.viewport.to > zv.treeLen) && this.scheduleWork(), (vv.docChanged || vv.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(zv)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: vv
          } = this.view, zv = vv.field(Wv.state);
          zv.tree == zv.context.tree && zv.context.isDone(vv.doc.length) || (this.working = Fv(this.work))
        }
        work(vv) {
          this.working = null;
          let zv = Date.now();
          if (this.chunkEnd < zv && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = zv + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: Pv,
            viewport: {
              to: hv
            }
          } = this.view, Sv = Pv.field(Wv.state);
          if (Sv.tree == Sv.context.tree && Sv.context.isDone(hv + 1e5)) return;
          let ev = Date.now() + Math.min(this.chunkBudget, 100, vv && !Yv ? Math.max(25, vv.timeRemaining() - 5) : 1e9),
            gv = Sv.context.treeLen < hv && Pv.doc.length > hv + 1e3,
            pv = Sv.context.work((() => Yv && Yv() || Date.now() > ev), hv + (gv ? 0 : 1e5));
          this.chunkBudget -= Date.now() - zv, (pv || this.chunkBudget <= 0) && (Sv.context.takeTree(), this.view.dispatch({
            effects: Wv.setState.of(new fv(Sv.context))
          })), this.chunkBudget > 0 && (!pv || gv) && this.scheduleWork(), this.checkAsyncSchedule(Sv.context)
        }
        checkAsyncSchedule(vv) {
          vv.scheduleOn && (this.workScheduled++, vv.scheduleOn.then((() => this.scheduleWork())).catch((vv => (0, gv.U)(this.view.state, vv))).then((() => this.workScheduled--)), vv.scheduleOn = null)
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
      Ov = ev.q.define({
        combine: vv => vv.length ? vv[0] : null,
        enables: vv => [Wv.state, nv, gv.g.contentAttributes.compute([vv], (zv => {
          let Pv = zv.facet(vv);
          return Pv && Pv.name ? {
            "data-language": Pv.name
          } : {}
        }))]
      });
    class Dv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = vv, this.support = zv, this.extension = [vv, zv]
      }
    }
    const Kv = ev.q.define(),
      Vv = ev.q.define({
        combine: vv => {
          if (!vv.length) return "  ";
          let zv = vv[0];
          if (!zv || /\S/.test(zv) || Array.from(zv).some((vv => vv != zv[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(vv[0]));
          return zv
        }
      });

    function Uv(vv) {
      let zv = vv.facet(Vv);
      return 9 == zv.charCodeAt(0) ? vv.tabSize * zv.length : zv.length
    }

    function Rv(vv, zv) {
      let Pv = "",
        hv = vv.tabSize,
        Sv = vv.facet(Vv)[0];
      if ("\t" == Sv) {
        for (; zv >= hv;) Pv += "\t", zv -= hv;
        Sv = " "
      }
      for (let ev = 0; ev < zv; ev++) Pv += Sv;
      return Pv
    }

    function xv(vv, zv) {
      vv instanceof ev.n && (vv = new tv(vv));
      for (let hv of vv.state.facet(Kv)) {
        let Pv = hv(vv, zv);
        if (void 0 !== Pv) return Pv
      }
      let Pv = sv(vv.state);
      return Pv.length >= zv ? function(vv, zv, Pv) {
        let hv = zv.resolveStack(Pv),
          Sv = zv.resolveInner(Pv, -1).resolve(Pv, 0).enterUnfinishedNodesBefore(Pv);
        if (Sv != hv.node) {
          let vv = [];
          for (let zv = Sv; zv && !(zv.from < hv.node.from || zv.to > hv.node.to || zv.from == hv.node.from && zv.type == hv.node.type); zv = zv.parent) vv.push(zv);
          for (let zv = vv.length - 1; zv >= 0; zv--) hv = {
            node: vv[zv],
            next: hv
          }
        }
        return Iv(hv, vv, Pv)
      }(vv, Pv, zv) : null
    }
    class tv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = vv, this.options = zv, this.unit = Uv(vv)
      }
      lineAt(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Pv = this.state.doc.lineAt(vv),
          {
            simulateBreak: hv,
            simulateDoubleBreak: Sv
          } = this.options;
        return null != hv && hv >= Pv.from && hv <= Pv.to ? Sv && hv == vv ? {
          text: "",
          from: vv
        } : (zv < 0 ? hv < vv : hv <= vv) ? {
          text: Pv.text.slice(hv - Pv.from),
          from: hv
        } : {
          text: Pv.text.slice(0, hv - Pv.from),
          from: Pv.from
        } : Pv
      }
      textAfterPos(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && vv == this.options.simulateBreak) return "";
        let {
          text: Pv,
          from: hv
        } = this.lineAt(vv, zv);
        return Pv.slice(vv - hv, Math.min(Pv.length, vv + 100 - hv))
      }
      column(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Pv,
            from: hv
          } = this.lineAt(vv, zv),
          Sv = this.countColumn(Pv, vv - hv),
          ev = this.options.overrideIndentation ? this.options.overrideIndentation(hv) : -1;
        return ev > -1 && (Sv += ev - this.countColumn(Pv, Pv.search(/\S|$/))), Sv
      }
      countColumn(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv.length;
        return (0, ev.S)(vv, this.state.tabSize, zv)
      }
      lineIndent(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Pv,
            from: hv
          } = this.lineAt(vv, zv),
          Sv = this.options.overrideIndentation;
        if (Sv) {
          let vv = Sv(hv);
          if (vv > -1) return vv
        }
        return this.countColumn(Pv, Pv.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const qv = new Sv.l;

    function Iv(vv, zv, Pv) {
      for (let hv = vv; hv; hv = hv.next) {
        let vv = Qv(hv.node);
        if (vv) return vv(Av.create(zv, Pv, hv))
      }
      return 0
    }

    function Qv(vv) {
      let zv = vv.type.prop(qv);
      if (zv) return zv;
      let Pv, hv = vv.firstChild;
      if (hv && (Pv = hv.type.prop(Sv.l.closedBy))) {
        let zv = vv.lastChild,
          hv = zv && Pv.indexOf(zv.name) > -1;
        return vv => Mv(vv, !0, 1, void 0, hv && ! function(vv) {
          return vv.pos == vv.options.simulateBreak && vv.options.simulateDoubleBreak
        }(vv) ? zv.from : void 0)
      }
      return null == vv.parent ? Zv : null
    }

    function Zv() {
      return 0
    }
    class Av extends tv {
      constructor(vv, zv, Pv) {
        super(vv.state, vv.options), this.base = vv, this.pos = zv, this.context = Pv
      }
      get node() {
        return this.context.node
      }
      static create(vv, zv, Pv) {
        return new Av(vv, zv, Pv)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(vv) {
        let zv = this.state.doc.lineAt(vv.from);
        for (;;) {
          let Pv = vv.resolve(zv.from);
          for (; Pv.parent && Pv.parent.from == Pv.from;) Pv = Pv.parent;
          if (Lv(Pv, vv)) break;
          zv = this.state.doc.lineAt(Pv.from)
        }
        return this.lineIndent(zv.from)
      }
      continue () {
        return Iv(this.context.next, this.base, this.pos)
      }
    }

    function Lv(vv, zv) {
      for (let Pv = zv; Pv; Pv = Pv.parent)
        if (vv == Pv) return !0;
      return !1
    }

    function Hv(vv) {
      let {
        closing: zv,
        align: Pv = !0,
        units: hv = 1
      } = vv;
      return vv => Mv(vv, Pv, hv, zv)
    }

    function Mv(vv, zv, Pv, hv, Sv) {
      let ev = vv.textAfter,
        gv = ev.match(/^\s*/)[0].length,
        pv = hv && ev.slice(gv, gv + hv.length) == hv || Sv == vv.pos + gv,
        dv = zv ? function(vv) {
          let zv = vv.node,
            Pv = zv.childAfter(zv.from),
            hv = zv.lastChild;
          if (!Pv) return null;
          let Sv = vv.options.simulateBreak,
            ev = vv.state.doc.lineAt(Pv.from),
            gv = null == Sv || Sv <= ev.from ? ev.to : Math.min(ev.to, Sv);
          for (let pv = Pv.to;;) {
            let vv = zv.childAfter(pv);
            if (!vv || vv == hv) return null;
            if (!vv.type.isSkipped) {
              if (vv.from >= gv) return null;
              let zv = /^ */.exec(ev.text.slice(Pv.to - ev.from))[0].length;
              return {
                from: Pv.from,
                to: Pv.to + zv
              }
            }
            pv = vv.to
          }
        }(vv) : null;
      return dv ? pv ? vv.column(dv.from) : vv.column(dv.to) : vv.baseIndent + (pv ? 0 : vv.unit * Pv)
    }
    const yv = vv => vv.baseIndent;

    function Bv() {
      let {
        except: vv,
        units: zv = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Pv => {
        let hv = vv && vv.test(Pv.textAfter);
        return Pv.baseIndent + (hv ? 0 : zv * Pv.unit)
      }
    }
    const Jv = 200;

    function Ev() {
      return ev.n.transactionFilter.of((vv => {
        if (!vv.docChanged || !vv.isUserEvent("input.type") && !vv.isUserEvent("input.complete")) return vv;
        let zv = vv.startState.languageDataAt("indentOnInput", vv.startState.selection.main.head);
        if (!zv.length) return vv;
        let Pv = vv.newDoc,
          {
            head: hv
          } = vv.newSelection.main,
          Sv = Pv.lineAt(hv);
        if (hv > Sv.from + Jv) return vv;
        let ev = Pv.sliceString(Sv.from, hv);
        if (!zv.some((vv => vv.test(ev)))) return vv;
        let {
          state: gv
        } = vv, pv = -1, dv = [];
        for (let {
            head: Nv
          }
          of gv.selection.PC) {
          let vv = gv.doc.lineAt(Nv);
          if (vv.from == pv) continue;
          pv = vv.from;
          let zv = xv(gv, vv.from);
          if (null == zv) continue;
          let Pv = /^\s*/.exec(vv.text)[0],
            hv = Rv(gv, zv);
          Pv != hv && dv.push({
            from: vv.from,
            to: vv.from + Pv.length,
            insert: hv
          })
        }
        return dv.length ? [vv, {
          changes: dv,
          sequential: !0
        }] : vv
      }))
    }
    const ov = ev.q.define(),
      bv = new Sv.l;

    function rv(vv) {
      let zv = vv.firstChild,
        Pv = vv.lastChild;
      return zv && zv.to < Pv.from ? {
        from: zv.to,
        to: Pv.type.isError ? vv.to : Pv.from
      } : null
    }

    function kv(vv) {
      let zv = vv.lastChild;
      return zv && zv.to == vv.to && zv.type.isError
    }

    function Xv(vv, zv, Pv) {
      for (let hv of vv.facet(ov)) {
        let Sv = hv(vv, zv, Pv);
        if (Sv) return Sv
      }
      return function(vv, zv, Pv) {
        let hv = sv(vv);
        if (hv.length < Pv) return null;
        let Sv = null;
        for (let ev = hv.resolveStack(Pv, 1); ev; ev = ev.next) {
          let gv = ev.node;
          if (gv.to <= Pv || gv.from > Pv) continue;
          if (Sv && gv.from < zv) break;
          let pv = gv.type.prop(bv);
          if (pv && (gv.to < hv.length - 50 || hv.length == vv.doc.length || !kv(gv))) {
            let hv = pv(gv, vv);
            hv && hv.from <= Pv && hv.from >= zv && hv.to > Pv && (Sv = hv)
          }
        }
        return Sv
      }(vv, zv, Pv)
    }

    function uv(vv, zv) {
      let Pv = zv.mapPos(vv.from, 1),
        hv = zv.mapPos(vv.to, -1);
      return Pv >= hv ? void 0 : {
        from: Pv,
        to: hv
      }
    }
    const vz = ev.B.define({
        map: uv
      }),
      zz = ev.B.define({
        map: uv
      });

    function Pz(vv) {
      let zv = [];
      for (let {
          head: Pv
        }
        of vv.state.selection.PC) zv.some((vv => vv.from <= Pv && vv.to >= Pv)) || zv.push(vv.lineBlockAt(Pv));
      return zv
    }
    const hz = ev.E.define({
      create: () => gv.c.none,
      update(vv, zv) {
        zv.isUserEvent("delete") && zv.changes.iterChangedRanges(((zv, Pv) => vv = Sz(vv, zv, Pv))), vv = vv.map(zv.changes);
        for (let Pv of zv.effects)
          if (Pv.is(vz) && !gz(vv, Pv.value.from, Pv.value.to)) {
            let {
              preparePlaceholder: hv
            } = zv.state.facet(Tz), Sv = hv ? gv.c.replace({
              widget: new sz(hv(zv.state, Pv.value))
            }) : az;
            vv = vv.update({
              add: [Sv.range(Pv.value.from, Pv.value.to)]
            })
          } else Pv.is(zz) && (vv = vv.update({
            filter: (vv, zv) => Pv.value.from != vv || Pv.value.to != zv,
            filterFrom: Pv.value.from,
            filterTo: Pv.value.to
          }));
        return zv.selection && (vv = Sz(vv, zv.selection.main.head)), vv
      },
      provide: vv => gv.g.de.from(vv),
      toJSON(vv, zv) {
        let Pv = [];
        return vv.between(0, zv.doc.length, ((vv, zv) => {
          Pv.push(vv, zv)
        })), Pv
      },
      fromJSON(vv) {
        if (!Array.isArray(vv) || vv.length % 2) throw new RangeError("Invalid JSON for fold state");
        let zv = [];
        for (let Pv = 0; Pv < vv.length;) {
          let hv = vv[Pv++],
            Sv = vv[Pv++];
          if ("number" != typeof hv || "number" != typeof Sv) throw new RangeError("Invalid JSON for fold state");
          zv.push(az.range(hv, Sv))
        }
        return gv.c.set(zv, !0)
      }
    });

    function Sz(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zv,
        hv = !1;
      return vv.between(zv, Pv, ((vv, Sv) => {
        vv < Pv && Sv > zv && (hv = !0)
      })), hv ? vv.update({
        filterFrom: zv,
        filterTo: Pv,
        filter: (vv, hv) => vv >= Pv || hv <= zv
      }) : vv
    }

    function ez(vv, zv, Pv) {
      var hv;
      let Sv = null;
      return null === (hv = vv.field(hz, !1)) || void 0 === hv || hv.between(zv, Pv, ((vv, zv) => {
        (!Sv || Sv.from > vv) && (Sv = {
          from: vv,
          to: zv
        })
      })), Sv
    }

    function gz(vv, zv, Pv) {
      let hv = !1;
      return vv.between(zv, zv, ((vv, Sv) => {
        vv == zv && Sv == Pv && (hv = !0)
      })), hv
    }

    function pz(vv, zv) {
      return vv.field(hz, !1) ? zv : zv.concat(ev.B.appendConfig.of(Wz()))
    }

    function dz(vv, zv) {
      let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        hv = vv.state.doc.lineAt(zv.from).number,
        Sv = vv.state.doc.lineAt(zv.to).number;
      return gv.g.announce.of(`${vv.state.phrase(Pv?"Folded lines":"Unfolded lines")} ${hv} ${vv.state.phrase("to")} ${Sv}.`)
    }
    const Nz = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: vv => {
          for (let zv of Pz(vv)) {
            let Pv = Xv(vv.state, zv.from, zv.to);
            if (Pv) return vv.dispatch({
              effects: pz(vv.state, [vz.of(Pv), dz(vv, Pv)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: vv => {
          if (!vv.state.field(hz, !1)) return !1;
          let zv = [];
          for (let Pv of Pz(vv)) {
            let hv = ez(vv.state, Pv.from, Pv.to);
            hv && zv.push(zz.of(hv), dz(vv, hv, !1))
          }
          return zv.length && vv.dispatch({
            effects: zv
          }), zv.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: vv => {
          let {
            state: zv
          } = vv, Pv = [];
          for (let hv = 0; hv < zv.doc.length;) {
            let Sv = vv.lineBlockAt(hv),
              ev = Xv(zv, Sv.from, Sv.to);
            ev && Pv.push(vz.of(ev)), hv = (ev ? vv.lineBlockAt(ev.to) : Sv).to + 1
          }
          return Pv.length && vv.dispatch({
            effects: pz(vv.state, Pv)
          }), !!Pv.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: vv => {
          let zv = vv.state.field(hz, !1);
          if (!zv || !zv.size) return !1;
          let Pv = [];
          return zv.between(0, vv.state.doc.length, ((vv, zv) => {
            Pv.push(zz.of({
              from: vv,
              to: zv
            }))
          })), vv.dispatch({
            effects: Pv
          }), !0
        }
      }],
      lz = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Tz = ev.q.define({
        combine: vv => (0, ev.O)(vv, lz)
      });

    function Wz(vv) {
      let zv = [hz, Gz];
      return vv && zv.push(Tz.of(vv)), zv
    }

    function wz(vv, zv) {
      let {
        state: Pv
      } = vv, hv = Pv.facet(Tz), Sv = zv => {
        let Pv = vv.lineBlockAt(vv.posAtDOM(zv.target)),
          hv = ez(vv.state, Pv.from, Pv.to);
        hv && vv.dispatch({
          effects: zz.of(hv)
        }), zv.preventDefault()
      };
      if (hv.placeholderDOM) return hv.placeholderDOM(vv, Sv, zv);
      let ev = document.createElement("span");
      return ev.textContent = hv.placeholderText, ev.setAttribute("aria-label", Pv.phrase("folded code")), ev.title = Pv.phrase("unfold"), ev.className = "cm-foldPlaceholder", ev.onclick = Sv, ev
    }
    const az = gv.c.replace({
      widget: new class extends gv.m {
        toDOM(vv) {
          return wz(vv, null)
        }
      }
    });
    class sz extends gv.m {
      constructor(vv) {
        super(), this.value = vv
      }
      eq(vv) {
        return this.value == vv.value
      }
      toDOM(vv) {
        return wz(vv, this.value)
      }
    }
    const Cz = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class iz extends gv.h {
      constructor(vv, zv) {
        super(), this.config = vv, this.open = zv
      }
      eq(vv) {
        return this.config == vv.config && this.open == vv.open
      }
      toDOM(vv) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let zv = document.createElement("span");
        return zv.textContent = this.open ? this.config.openText : this.config.closedText, zv.title = vv.state.phrase(this.open ? "Fold line" : "Unfold line"), zv
      }
    }

    function cz() {
      let vv = {
          ...Cz,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        zv = new iz(vv, !0),
        Pv = new iz(vv, !1),
        hv = gv.j.fromClass(class {
          constructor(vv) {
            this.from = vv.viewport.from, this.markers = this.buildMarkers(vv)
          }
          update(zv) {
            (zv.docChanged || zv.viewportChanged || zv.startState.facet(Ov) != zv.state.facet(Ov) || zv.startState.field(hz, !1) != zv.state.field(hz, !1) || sv(zv.startState) != sv(zv.state) || vv.foldingChanged(zv)) && (this.markers = this.buildMarkers(zv.view))
          }
          buildMarkers(vv) {
            let hv = new ev.x;
            for (let Sv of vv.viewportLineBlocks) {
              let ev = ez(vv.state, Sv.from, Sv.to) ? Pv : Xv(vv.state, Sv.from, Sv.to) ? zv : null;
              ev && hv.add(Sv.from, Sv.from, ev)
            }
            return hv.finish()
          }
        }),
        {
          domEventHandlers: Sv
        } = vv;
      return [hv, (0, gv.F)({
        class: "cm-foldGutter",
        markers(vv) {
          var zv;
          return (null === (zv = vv.plugin(hv)) || void 0 === zv ? void 0 : zv.markers) || ev.y.empty
        },
        initialSpacer: () => new iz(vv, !1),
        domEventHandlers: {
          ...Sv,
          click: (vv, zv, Pv) => {
            if (Sv.click && Sv.click(vv, zv, Pv)) return !0;
            let hv = ez(vv.state, zv.from, zv.to);
            if (hv) return vv.dispatch({
              effects: zz.of(hv)
            }), !0;
            let ev = Xv(vv.state, zv.from, zv.to);
            return !!ev && (vv.dispatch({
              effects: vz.of(ev)
            }), !0)
          }
        }
      }), Wz()]
    }
    const Gz = gv.g.baseTheme({
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
    class mz {
      constructor(vv, zv) {
        let Pv;

        function hv(vv) {
          let zv = dv.c.newName();
          return (Pv || (Pv = Object.create(null)))["." + zv] = vv, zv
        }
        this.specs = vv;
        const Sv = "string" == typeof zv.all ? zv.all : zv.all ? hv(zv.all) : void 0,
          ev = zv.scope;
        this.scope = ev instanceof Wv ? vv => vv.prop(Nv) == ev.data : ev ? vv => vv == ev : void 0, this.style = (0, pv.j)(vv.map((vv => ({
          tag: vv.tag,
          class: vv.class || hv(Object.assign({}, vv, {
            tag: null
          }))
        }))), {
          all: Sv
        }).style, this.module = Pv ? new dv.c(Pv) : null, this.themeType = zv.themeType
      }
      static define(vv, zv) {
        return new mz(vv, zv || {})
      }
    }
    const jz = ev.q.define(),
      fz = ev.q.define({
        combine: vv => vv.length ? [vv[0]] : null
      });

    function Fz(vv) {
      let zv = vv.facet(jz);
      return zv.length ? zv : vv.facet(fz)
    }

    function Yz(vv, zv) {
      let Pv, hv = [Oz];
      return vv instanceof mz && (vv.module && hv.push(gv.g.styleModule.of(vv.module)), Pv = vv.themeType), (null === zv || void 0 === zv ? void 0 : zv.fallback) ? hv.push(fz.of(vv)) : Pv ? hv.push(jz.computeN([gv.g.darkTheme], (zv => zv.facet(gv.g.darkTheme) == ("dark" == Pv) ? [vv] : []))) : hv.push(jz.of(vv)), hv
    }
    class nz {
      constructor(vv) {
        this.markCache = Object.create(null), this.tree = sv(vv.state), this.de = this.buildDeco(vv, Fz(vv.state)), this.decoratedTo = vv.viewport.to
      }
      update(vv) {
        let zv = sv(vv.state),
          Pv = Fz(vv.state),
          hv = Pv != Fz(vv.startState),
          {
            viewport: Sv
          } = vv.view,
          ev = vv.changes.mapPos(this.decoratedTo, 1);
        zv.length < Sv.to && !hv && zv.type == this.tree.type && ev >= Sv.to ? (this.de = this.de.map(vv.changes), this.decoratedTo = ev) : (zv != this.tree || vv.viewportChanged || hv) && (this.tree = zv, this.de = this.buildDeco(vv.view, Pv), this.decoratedTo = Sv.to)
      }
      buildDeco(vv, zv) {
        if (!zv || !this.tree.length) return gv.c.none;
        let Pv = new ev.x;
        for (let {
            from: hv,
            to: Sv
          }
          of vv.e_)(0, pv.b)(this.tree, zv, ((vv, zv, hv) => {
          Pv.add(vv, zv, this.markCache[hv] || (this.markCache[hv] = gv.c.mark({
            class: hv
          })))
        }), hv, Sv);
        return Pv.finish()
      }
    }
    const Oz = ev.u.high(gv.j.fromClass(nz, {
        de: vv => vv.de
      })),
      Dz = mz.define([{
        tag: pv.l.meta,
        color: "#404740"
      }, {
        tag: pv.l.link,
        textDecoration: "underline"
      }, {
        tag: pv.l.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: pv.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: pv.l.strong,
        fontWeight: "bold"
      }, {
        tag: pv.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: pv.l.keyword,
        color: "#708"
      }, {
        tag: [pv.l.atom, pv.l.bool, pv.l.url, pv.l.contentSeparator, pv.l.labelName],
        color: "#219"
      }, {
        tag: [pv.l.literal, pv.l.inserted],
        color: "#164"
      }, {
        tag: [pv.l.string, pv.l.deleted],
        color: "#a11"
      }, {
        tag: [pv.l.regexp, pv.l.escape, pv.l.special(pv.l.string)],
        color: "#e40"
      }, {
        tag: pv.l.definition(pv.l.variableName),
        color: "#00f"
      }, {
        tag: pv.l.local(pv.l.variableName),
        color: "#30a"
      }, {
        tag: [pv.l.typeName, pv.l.namespace],
        color: "#085"
      }, {
        tag: pv.l.className,
        color: "#167"
      }, {
        tag: [pv.l.special(pv.l.variableName), pv.l.macroName],
        color: "#256"
      }, {
        tag: pv.l.definition(pv.l.propertyName),
        color: "#00c"
      }, {
        tag: pv.l.comment,
        color: "#940"
      }, {
        tag: pv.l.invalid,
        color: "#f00"
      }]),
      Kz = gv.g.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Vz = 1e4,
      Uz = "()[]{}",
      Rz = ev.q.define({
        combine: vv => (0, ev.O)(vv, {
          afterCursor: !0,
          brackets: Uz,
          maxScanDistance: Vz,
          renderMatch: qz
        })
      }),
      xz = gv.c.mark({
        class: "cm-matchingBracket"
      }),
      tz = gv.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function qz(vv) {
      let zv = [],
        Pv = vv.matched ? xz : tz;
      return zv.push(Pv.range(vv.start.from, vv.start.to)), vv.end && zv.push(Pv.range(vv.end.from, vv.end.to)), zv
    }

    function Iz(vv) {
      let zv = [],
        Pv = vv.facet(Rz);
      for (let hv of vv.selection.PC) {
        if (!hv.empty) continue;
        let Sv = Mz(vv, hv.head, -1, Pv) || hv.head > 0 && Mz(vv, hv.head - 1, 1, Pv) || Pv.afterCursor && (Mz(vv, hv.head, 1, Pv) || hv.head < vv.doc.length && Mz(vv, hv.head + 1, -1, Pv));
        Sv && (zv = zv.concat(Pv.renderMatch(Sv, vv)))
      }
      return gv.c.set(zv, !0)
    }
    const Qz = [gv.j.fromClass(class {
      constructor(vv) {
        this.paused = !1, this.de = Iz(vv.state)
      }
      update(vv) {
        (vv.docChanged || vv.selectionSet || this.paused) && (vv.view.composing ? (this.de = this.de.map(vv.changes), this.paused = !0) : (this.de = Iz(vv.state), this.paused = !1))
      }
    }, {
      de: vv => vv.de
    }), Kz];

    function Zz() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Rz.of(vv), Qz]
    }
    const Az = new Sv.l;

    function Lz(vv, zv, Pv) {
      let hv = vv.prop(zv < 0 ? Sv.l.openedBy : Sv.l.closedBy);
      if (hv) return hv;
      if (1 == vv.name.length) {
        let hv = Pv.indexOf(vv.name);
        if (hv > -1 && hv % 2 == (zv < 0 ? 1 : 0)) return [Pv[hv + zv]]
      }
      return null
    }

    function Hz(vv) {
      let zv = vv.type.prop(Az);
      return zv ? zv(vv.node) : vv
    }

    function Mz(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Sv = hv.maxScanDistance || Vz,
        ev = hv.brackets || Uz,
        gv = sv(vv),
        pv = gv.resolveInner(zv, Pv);
      for (let dv = pv; dv; dv = dv.parent) {
        let hv = Lz(dv.type, Pv, ev);
        if (hv && dv.from < dv.to) {
          let Sv = Hz(dv);
          if (Sv && (Pv > 0 ? zv >= Sv.from && zv < Sv.to : zv > Sv.from && zv <= Sv.to)) return yz(vv, zv, Pv, dv, Sv, hv, ev)
        }
      }
      return function(vv, zv, Pv, hv, Sv, ev, gv) {
        if (Pv < 0 ? !zv : zv == vv.doc.length) return null;
        let pv = Pv < 0 ? vv.sliceDoc(zv - 1, zv) : vv.sliceDoc(zv, zv + 1),
          dv = gv.indexOf(pv);
        if (dv < 0 || dv % 2 == 0 != Pv > 0) return null;
        let Nv = {
            from: Pv < 0 ? zv - 1 : zv,
            to: Pv > 0 ? zv + 1 : zv
          },
          lv = vv.doc.iterRange(zv, Pv > 0 ? vv.doc.length : 0),
          Tv = 0;
        for (let Wv = 0; !lv.next().done && Wv <= ev;) {
          let vv = lv.value;
          Pv < 0 && (Wv += vv.length);
          let ev = zv + Wv * Pv;
          for (let zv = Pv > 0 ? 0 : vv.length - 1, pv = Pv > 0 ? vv.length : -1; zv != pv; zv += Pv) {
            let pv = gv.indexOf(vv[zv]);
            if (!(pv < 0 || hv.resolveInner(ev + zv, 1).type != Sv))
              if (pv % 2 == 0 == Pv > 0) Tv++;
              else {
                if (1 == Tv) return {
                  start: Nv,
                  end: {
                    from: ev + zv,
                    to: ev + zv + 1
                  },
                  matched: pv >> 1 == dv >> 1
                };
                Tv--
              }
          }
          Pv > 0 && (Wv += vv.length)
        }
        return lv.done ? {
          start: Nv,
          matched: !1
        } : null
      }(vv, zv, Pv, gv, pv.type, Sv, ev)
    }

    function yz(vv, zv, Pv, hv, Sv, ev, gv) {
      let pv = hv.parent,
        dv = {
          from: Sv.from,
          to: Sv.to
        },
        Nv = 0,
        lv = null === pv || void 0 === pv ? void 0 : pv.cursor();
      if (lv && (Pv < 0 ? lv.childBefore(hv.from) : lv.childAfter(hv.to)))
        do {
          if (Pv < 0 ? lv.to <= hv.from : lv.from >= hv.to) {
            if (0 == Nv && ev.indexOf(lv.type.name) > -1 && lv.from < lv.to) {
              let vv = Hz(lv);
              return {
                start: dv,
                end: vv ? {
                  from: vv.from,
                  to: vv.to
                } : void 0,
                matched: !0
              }
            }
            if (Lz(lv.type, Pv, gv)) Nv++;
            else if (Lz(lv.type, -Pv, gv)) {
              if (0 == Nv) {
                let vv = Hz(lv);
                return {
                  start: dv,
                  end: vv && vv.from < vv.to ? {
                    from: vv.from,
                    to: vv.to
                  } : void 0,
                  matched: !1
                }
              }
              Nv--
            }
          }
        } while (Pv < 0 ? lv.prevSibling() : lv.nextSibling());
      return {
        start: dv,
        matched: !1
      }
    }
    const Bz = Object.create(null),
      Jz = [Sv.r.none],
      Ez = [],
      oz = Object.create(null),
      bz = Object.create(null);
    for (let [Xz, uz] of [
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
      ]) bz[Xz] = kz(Bz, uz);

    function rz(vv, zv) {
      Ez.indexOf(vv) > -1 || (Ez.push(vv), console.warn(zv))
    }

    function kz(vv, zv) {
      let Pv = [];
      for (let Sv of zv.split(" ")) {
        let zv = [];
        for (let Pv of Sv.split(".")) {
          let hv = vv[Pv] || pv.l[Pv];
          hv ? "function" == typeof hv ? zv.length ? zv = zv.map(hv) : rz(Pv, `Modifier ${Pv} used at start of tag`) : zv.length ? rz(Pv, `Tag ${Pv} used as modifier`) : zv = Array.isArray(hv) ? hv : [hv] : rz(Pv, `Unknown highlighting tag ${Pv}`)
        }
        for (let vv of zv) Pv.push(vv)
      }
      if (!Pv.length) return 0;
      let hv = zv.replace(/ /g, "_"),
        ev = hv + " " + Pv.map((vv => vv.id)),
        gv = oz[ev];
      if (gv) return gv.id;
      let dv = oz[ev] = Sv.r.define({
        id: Jz.length,
        name: hv,
        props: [(0, pv.f)({
          [hv]: Pv
        })]
      });
      return Jz.push(dv), dv.id
    }
    gv.f.RTL, gv.f.LTR
  },
  40666: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Gv,
      e: () => Fv
    });
    var hv = Pv(40605),
      Sv = Pv(40599),
      ev = Pv(40618);
    class gv {
      constructor(vv, zv, Pv) {
        this.from = vv, this.to = zv, this.diagnostic = Pv
      }
    }
    class pv {
      constructor(vv, zv, Pv) {
        this.diagnostics = vv, this.panel = zv, this.selected = Pv
      }
      static init(vv, zv, Pv) {
        let ev = Pv.facet(jv).markerFilter;
        ev && (vv = ev(vv, Pv));
        let gv = vv.slice().sort(((vv, zv) => vv.from - zv.from || vv.to - zv.to)),
          Nv = new Sv.x,
          lv = [],
          Tv = 0,
          Wv = Pv.doc.iter(),
          wv = 0,
          av = Pv.doc.length;
        for (let Sv = 0;;) {
          let vv, zv, Pv = Sv == gv.length ? null : gv[Sv];
          if (!Pv && !lv.length) break;
          if (lv.length) vv = Tv, zv = lv.reduce(((vv, zv) => Math.min(vv, zv.to)), Pv && Pv.from > vv ? Pv.from : 1e8);
          else {
            if (vv = Pv.from, vv > av) break;
            zv = Pv.to, lv.push(Pv), Sv++
          }
          for (; Sv < gv.length;) {
            let Pv = gv[Sv];
            if (Pv.from != vv || !(Pv.to > Pv.from || Pv.to == vv)) {
              zv = Math.min(Pv.from, zv);
              break
            }
            lv.push(Pv), Sv++, zv = Math.min(Pv.to, zv)
          }
          zv = Math.min(zv, av);
          let ev = !1;
          if (lv.some((Pv => Pv.from == vv && (Pv.to == zv || zv == av))) && (ev = vv == zv, !ev && zv - vv < 10)) {
            let Pv = vv - (wv + Wv.value.length);
            Pv > 0 && (Wv.next(Pv), wv = vv);
            for (let hv = vv;;) {
              if (hv >= zv) {
                ev = !0;
                break
              }
              if (!Wv.lineBreak && wv + Wv.value.length > hv) break;
              hv = wv + Wv.value.length, wv += Wv.value.length, Wv.next()
            }
          }
          let pv = tv(lv);
          if (ev) Nv.add(vv, vv, hv.c.widget({
            widget: new Ov(pv),
            diagnostics: lv.slice()
          }));
          else {
            let Pv = lv.reduce(((vv, zv) => zv.markClass ? vv + " " + zv.markClass : vv), "");
            Nv.add(vv, zv, hv.c.mark({
              class: "cm-lintRange cm-lintRange-" + pv + Pv,
              diagnostics: lv.slice(),
              inclusiveEnd: lv.some((vv => vv.to > zv))
            }))
          }
          if (Tv = zv, Tv == av) break;
          for (let hv = 0; hv < lv.length; hv++) lv[hv].to <= Tv && lv.splice(hv--, 1)
        }
        let sv = Nv.finish();
        return new pv(sv, zv, dv(sv))
      }
    }

    function dv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hv = null;
      return vv.between(Pv, 1e9, ((vv, Pv, Sv) => {
        let {
          spec: ev
        } = Sv;
        if (!(zv && ev.diagnostics.indexOf(zv) < 0))
          if (hv) {
            if (ev.diagnostics.indexOf(hv.diagnostic) < 0) return !1;
            hv = new gv(hv.from, Pv, hv.diagnostic)
          } else hv = new gv(vv, Pv, zv || ev.diagnostics[0])
      })), hv
    }

    function Nv(vv, zv) {
      let Pv = zv.pos,
        hv = zv.end || Pv,
        Sv = vv.state.facet(jv).hideOn(vv, Pv, hv);
      if (null != Sv) return Sv;
      let ev = vv.startState.doc.lineAt(zv.pos);
      return !(!vv.effects.some((vv => vv.is(Tv))) && !vv.changes.touchesRange(ev.from, Math.max(ev.to, hv)))
    }

    function lv(vv, zv) {
      return vv.field(av, !1) ? zv : zv.concat(Sv.B.appendConfig.of(qv))
    }
    const Tv = Sv.B.define(),
      Wv = Sv.B.define(),
      wv = Sv.B.define(),
      av = Sv.E.define({
        create: () => new pv(hv.c.none, null, null),
        update(vv, zv) {
          if (zv.docChanged && vv.diagnostics.size) {
            let Pv = vv.diagnostics.map(zv.changes),
              hv = null,
              Sv = vv.panel;
            if (vv.selected) {
              let Sv = zv.changes.mapPos(vv.selected.from, 1);
              hv = dv(Pv, vv.selected.diagnostic, Sv) || dv(Pv, null, Sv)
            }!Pv.size && Sv && zv.state.facet(jv).autoPanel && (Sv = null), vv = new pv(Pv, Sv, hv)
          }
          for (let Pv of zv.effects)
            if (Pv.is(Tv)) {
              let hv = zv.state.facet(jv).autoPanel ? Pv.value.length ? Kv.open : null : vv.panel;
              vv = pv.init(Pv.value, hv, zv.state)
            } else Pv.is(Wv) ? vv = new pv(vv.diagnostics, Pv.value ? Kv.open : null, vv.selected) : Pv.is(wv) && (vv = new pv(vv.diagnostics, vv.panel, Pv.value));
          return vv
        },
        provide: vv => [hv.cb.from(vv, (vv => vv.panel)), hv.g.de.from(vv, (vv => vv.diagnostics))]
      });
    const sv = hv.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function Cv(vv, zv, Pv) {
      let hv, {
          diagnostics: Sv
        } = vv.state.field(av),
        ev = -1,
        gv = -1;
      Sv.between(zv - (Pv < 0 ? 1 : 0), zv + (Pv > 0 ? 1 : 0), ((vv, Sv, pv) => {
        let {
          spec: dv
        } = pv;
        if (zv >= vv && zv <= Sv && (vv == Sv || (zv > vv || Pv > 0) && (zv < Sv || Pv < 0))) return hv = dv.diagnostics, ev = vv, gv = Sv, !1
      }));
      let pv = vv.state.facet(jv).tooltipFilter;
      return hv && pv && (hv = pv(hv, vv.state)), hv ? {
        pos: ev,
        end: gv,
        above: vv.state.doc.lineAt(ev).to < gv,
        create: () => ({
          dom: iv(vv, hv)
        })
      } : null
    }

    function iv(vv, zv) {
      return (0, ev.b)("ul", {
        class: "cm-tooltip-lint"
      }, zv.map((zv => nv(vv, zv, !1))))
    }
    const cv = vv => {
        let zv = vv.state.field(av, !1);
        return !(!zv || !zv.panel) && (vv.dispatch({
          effects: Wv.of(!1)
        }), !0)
      },
      Gv = [{
        key: "Mod-Shift-m",
        run: vv => {
          let zv = vv.state.field(av, !1);
          zv && zv.panel || vv.dispatch({
            effects: lv(vv.state, [Wv.of(!0)])
          });
          let Pv = (0, hv.x)(vv, Kv.open);
          return Pv && Pv.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: vv => {
          let zv = vv.state.field(av, !1);
          if (!zv) return !1;
          let Pv = vv.state.selection.main,
            hv = dv(zv.diagnostics, null, Pv.to + 1);
          return !(!hv && (hv = dv(zv.diagnostics, null, 0), !hv || hv.from == Pv.from && hv.to == Pv.to)) && (vv.dispatch({
            selection: {
              anchor: hv.from,
              head: hv.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      mv = hv.j.fromClass(class {
        constructor(vv) {
          this.view = vv, this.timeout = -1, this.set = !0;
          let {
            delay: zv
          } = vv.state.facet(jv);
          this.lintTime = Date.now() + zv, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, zv)
        }
        run() {
          clearTimeout(this.timeout);
          let vv = Date.now();
          if (vv < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - vv);
          else {
            this.set = !1;
            let {
              state: vv
            } = this.view, {
              sources: zv
            } = vv.facet(jv);
            zv.length && function(vv, zv, Pv) {
              let hv = [],
                Sv = -1;
              for (let ev of vv) ev.then((Pv => {
                hv.push(Pv), clearTimeout(Sv), hv.length == vv.length ? zv(hv) : Sv = setTimeout((() => zv(hv)), 200)
              }), Pv)
            }(zv.map((vv => Promise.resolve(vv(this.view)))), (zv => {
              this.view.state.doc == vv.doc && this.view.dispatch(function(vv, zv) {
                return {
                  effects: lv(vv, [Tv.of(zv)])
                }
              }(this.view.state, zv.reduce(((vv, zv) => vv.concat(zv)))))
            }), (vv => {
              (0, hv.U)(this.view.state, vv)
            }))
          }
        }
        update(vv) {
          let zv = vv.state.facet(jv);
          (vv.docChanged || zv != vv.startState.facet(jv) || zv.needsRefresh && zv.needsRefresh(vv)) && (this.lintTime = Date.now() + zv.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, zv.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const jv = Sv.q.define({
      combine: vv => ({
        sources: vv.map((vv => vv.source)).filter((vv => null != vv)),
        ...(0, Sv.O)(vv.map((vv => vv.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: fv,
          tooltipFilter: fv,
          needsRefresh: (vv, zv) => vv ? zv ? Pv => vv(Pv) || zv(Pv) : vv : zv,
          hideOn: (vv, zv) => vv ? zv ? (Pv, hv, Sv) => vv(Pv, hv, Sv) || zv(Pv, hv, Sv) : vv : zv,
          autoPanel: (vv, zv) => vv || zv
        })
      })
    });

    function fv(vv, zv) {
      return vv ? zv ? (Pv, hv) => zv(vv(Pv, hv), hv) : vv : zv
    }

    function Fv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [jv.of({
        source: vv,
        config: zv
      }), mv, qv]
    }

    function Yv(vv) {
      let zv = [];
      if (vv) vv: for (let {
          name: Pv
        }
        of vv) {
        for (let vv = 0; vv < Pv.length; vv++) {
          let hv = Pv[vv];
          if (/[a-zA-Z]/.test(hv) && !zv.some((vv => vv.toLowerCase() == hv.toLowerCase()))) {
            zv.push(hv);
            continue vv
          }
        }
        zv.push("")
      }
      return zv
    }

    function nv(vv, zv, Pv) {
      var hv;
      let Sv = Pv ? Yv(zv.actions) : [];
      return (0, ev.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + zv.severity
      }, (0, ev.b)("span", {
        class: "cm-diagnosticText"
      }, zv.renderMessage ? zv.renderMessage(vv) : zv.message), null === (hv = zv.actions) || void 0 === hv ? void 0 : hv.map(((Pv, hv) => {
        let gv = !1,
          pv = hv => {
            if (hv.preventDefault(), gv) return;
            gv = !0;
            let Sv = dv(vv.state.field(av).diagnostics, zv);
            Sv && Pv.apply(vv, Sv.from, Sv.to)
          },
          {
            name: Nv
          } = Pv,
          lv = Sv[hv] ? Nv.indexOf(Sv[hv]) : -1,
          Tv = lv < 0 ? Nv : [Nv.slice(0, lv), (0, ev.b)("u", Nv.slice(lv, lv + 1)), Nv.slice(lv + 1)],
          Wv = Pv.markClass ? " " + Pv.markClass : "";
        return (0, ev.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + Wv,
          onclick: pv,
          onmousedown: pv,
          "aria-label": ` Action: ${Nv}${lv<0?"":` (access key "${Sv[hv]})"`}.`
        }, Tv)
      })), zv.source && (0, ev.b)("div", {
        class: "cm-diagnosticSource"
      }, zv.source))
    }
    class Ov extends hv.m {
      constructor(vv) {
        super(), this.sev = vv
      }
      eq(vv) {
        return vv.sev == this.sev
      }
      toDOM() {
        return (0, ev.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Dv {
      constructor(vv, zv) {
        this.diagnostic = zv, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = nv(vv, zv, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class Kv {
      constructor(vv) {
        this.view = vv, this.items = [];
        this.list = (0, ev.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: zv => {
            if (!(zv.ctrlKey || zv.altKey || zv.metaKey)) {
              if (27 == zv.keyCode) cv(this.view), this.view.focus();
              else if (38 == zv.keyCode || 33 == zv.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == zv.keyCode || 34 == zv.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == zv.keyCode) this.moveSelection(0);
              else if (35 == zv.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == zv.keyCode) this.view.focus();
              else {
                if (!(zv.keyCode >= 65 && zv.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: Pv
                  } = this.items[this.selectedIndex], hv = Yv(Pv.actions);
                  for (let Sv = 0; Sv < hv.length; Sv++)
                    if (hv[Sv].toUpperCase().charCodeAt(0) == zv.keyCode) {
                      let zv = dv(this.view.state.field(av).diagnostics, Pv);
                      zv && Pv.actions[Sv].apply(vv, zv.from, zv.to)
                    }
                }
              }
              zv.preventDefault()
            }
          },
          onclick: vv => {
            for (let zv = 0; zv < this.items.length; zv++) this.items[zv].dom.contains(vv.target) && this.moveSelection(zv)
          }
        }), this.dom = (0, ev.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, ev.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => cv(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let vv = this.view.state.field(av).selected;
        if (!vv) return -1;
        for (let zv = 0; zv < this.items.length; zv++)
          if (this.items[zv].diagnostic == vv.diagnostic) return zv;
        return -1
      }
      update() {
        let {
          diagnostics: vv,
          selected: zv
        } = this.view.state.field(av), Pv = 0, hv = !1, Sv = null, ev = new Set;
        for (vv.between(0, this.view.state.doc.length, ((vv, gv, pv) => {
            let {
              spec: dv
            } = pv;
            for (let Nv of dv.diagnostics) {
              if (ev.has(Nv)) continue;
              ev.add(Nv);
              let vv, gv = -1;
              for (let zv = Pv; zv < this.items.length; zv++)
                if (this.items[zv].diagnostic == Nv) {
                  gv = zv;
                  break
                } gv < 0 ? (vv = new Dv(this.view, Nv), this.items.splice(Pv, 0, vv), hv = !0) : (vv = this.items[gv], gv > Pv && (this.items.splice(Pv, gv - Pv), hv = !0)), zv && vv.diagnostic == zv.diagnostic ? vv.dom.hasAttribute("aria-selected") || (vv.dom.setAttribute("aria-selected", "true"), Sv = vv) : vv.dom.hasAttribute("aria-selected") && vv.dom.removeAttribute("aria-selected"), Pv++
            }
          })); Pv < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) hv = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Dv(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), hv = !0), Sv ? (this.list.setAttribute("aria-activedescendant", Sv.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Sv.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: vv => {
            let {
              sel: zv,
              panel: Pv
            } = vv, hv = Pv.height / this.list.offsetHeight;
            zv.top < Pv.top ? this.list.scrollTop -= (Pv.top - zv.top) / hv : zv.bottom > Pv.bottom && (this.list.scrollTop += (zv.bottom - Pv.bottom) / hv)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), hv && this.sync()
      }
      sync() {
        let vv = this.list.firstChild;

        function zv() {
          let zv = vv;
          vv = zv.nextSibling, zv.remove()
        }
        for (let Pv of this.items)
          if (Pv.dom.parentNode == this.list) {
            for (; vv != Pv.dom;) zv();
            vv = Pv.dom.nextSibling
          } else this.list.insertBefore(Pv.dom, vv);
        for (; vv;) zv()
      }
      moveSelection(vv) {
        if (this.selectedIndex < 0) return;
        let zv = dv(this.view.state.field(av).diagnostics, this.items[vv].diagnostic);
        zv && this.view.dispatch({
          selection: {
            anchor: zv.from,
            head: zv.to
          },
          scrollIntoView: !0,
          effects: wv.of(zv)
        })
      }
      static open(vv) {
        return new Kv(vv)
      }
    }

    function Vv(vv) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(vv)}</svg>')`
    }

    function Uv(vv) {
      return Vv(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${vv}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Rv = hv.g.baseTheme({
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
        backgroundImage: Uv("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Uv("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Uv("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Uv("#66d")
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

    function xv(vv) {
      return "error" == vv ? 4 : "warning" == vv ? 3 : "info" == vv ? 2 : 1
    }

    function tv(vv) {
      let zv = "hint",
        Pv = 1;
      for (let hv of vv) {
        let vv = xv(hv.severity);
        vv > Pv && (Pv = vv, zv = hv.severity)
      }
      return zv
    }
    hv.h;
    const qv = [av, hv.g.de.compute([av], (vv => {
      let {
        selected: zv,
        panel: Pv
      } = vv.field(av);
      return zv && Pv && zv.from != zv.to ? hv.c.set([sv.range(zv.from, zv.to)]) : hv.c.none
    })), (0, hv.O)(Cv, {
      hideOn: Nv
    }), Rv]
  },
  40660: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Xv,
      f: () => iv,
      g: () => uv
    });
    var hv = Pv(40605),
      Sv = Pv(40599),
      ev = Pv(40618);
    const gv = "function" == typeof String.prototype.normalize ? vv => vv.normalize("NFKD") : vv => vv;
    class pv {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv.length,
          Sv = arguments.length > 4 ? arguments[4] : void 0,
          ev = arguments.length > 5 ? arguments[5] : void 0;
        this.test = ev, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = vv.iterRange(Pv, hv), this.bufferStart = Pv, this.normalize = Sv ? vv => Sv(gv(vv)) : gv, this.query = this.normalize(zv)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Sv.K)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let vv = this.peek();
          if (vv < 0) return this.done = !0, this;
          let zv = (0, Sv._)(vv),
            Pv = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Sv.L)(vv);
          let hv = this.normalize(zv);
          if (hv.length)
            for (let Sv = 0, ev = Pv;; Sv++) {
              let vv = hv.charCodeAt(Sv),
                gv = this.match(vv, ev, this.bufferPos + this.bufferStart);
              if (Sv == hv.length - 1) {
                if (gv) return this.value = gv, this;
                break
              }
              ev == Pv && Sv < zv.length && zv.charCodeAt(Sv) == vv && ev++
            }
        }
      }
      match(vv, zv, Pv) {
        let hv = null;
        for (let Sv = 0; Sv < this.matches.length; Sv += 2) {
          let zv = this.matches[Sv],
            ev = !1;
          this.query.charCodeAt(zv) == vv && (zv == this.query.length - 1 ? hv = {
            from: this.matches[Sv + 1],
            to: Pv
          } : (this.matches[Sv]++, ev = !0)), ev || (this.matches.splice(Sv, 2), Sv -= 2)
        }
        return this.query.charCodeAt(0) == vv && (1 == this.query.length ? hv = {
          from: zv,
          to: Pv
        } : this.matches.push(1, zv)), hv && this.test && !this.test(hv.from, hv.to, this.buffer, this.bufferStart) && (hv = null), hv
      }
    }
    "undefined" != typeof Symbol && (pv.prototype[Symbol.iterator] = function() {
      return this
    });
    const dv = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Nv = "gm" + (null == /x/.unicode ? "" : "u");
    class lv {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : vv.length;
        if (this.text = vv, this.to = Sv, this.curLine = "", this.done = !1, this.value = dv, /\\[sWDnr]|\n|\r|\[\^/.test(zv)) return new wv(vv, zv, Pv, hv, Sv);
        this.re = new RegExp(zv, Nv + ((null === Pv || void 0 === Pv ? void 0 : Pv.ignoreCase) ? "i" : "")), this.test = null === Pv || void 0 === Pv ? void 0 : Pv.test, this.iter = vv.iter();
        let ev = vv.lineAt(hv);
        this.curLineStart = ev.from, this.matchPos = av(vv, hv), this.getLine(this.curLineStart)
      }
      getLine(vv) {
        this.iter.next(vv), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let vv = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = vv;
          let zv = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (zv) {
            let Pv = this.curLineStart + zv.index,
              hv = Pv + zv[0].length;
            if (this.matchPos = av(this.text, hv + (Pv == hv ? 1 : 0)), Pv == this.curLineStart + this.curLine.length && this.nextLine(), (Pv < hv || Pv > this.value.to) && (!this.test || this.test(Pv, hv, zv))) return this.value = {
              from: Pv,
              to: hv,
              match: zv
            }, this;
            vv = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), vv = 0
          }
        }
      }
    }
    const Tv = new WeakMap;
    class Wv {
      constructor(vv, zv) {
        this.from = vv, this.text = zv
      }
      get to() {
        return this.from + this.text.length
      }
      static get(vv, zv, Pv) {
        let hv = Tv.get(vv);
        if (!hv || hv.from >= Pv || hv.to <= zv) {
          let hv = new Wv(zv, vv.sliceString(zv, Pv));
          return Tv.set(vv, hv), hv
        }
        if (hv.from == zv && hv.to == Pv) return hv;
        let {
          text: Sv,
          from: ev
        } = hv;
        return ev > zv && (Sv = vv.sliceString(zv, ev) + Sv, ev = zv), hv.to < Pv && (Sv += vv.sliceString(hv.to, Pv)), Tv.set(vv, new Wv(ev, Sv)), new Wv(zv, Sv.slice(zv - ev, Pv - ev))
      }
    }
    class wv {
      constructor(vv, zv, Pv, hv, Sv) {
        this.text = vv, this.to = Sv, this.done = !1, this.value = dv, this.matchPos = av(vv, hv), this.re = new RegExp(zv, Nv + ((null === Pv || void 0 === Pv ? void 0 : Pv.ignoreCase) ? "i" : "")), this.test = null === Pv || void 0 === Pv ? void 0 : Pv.test, this.flat = Wv.get(vv, hv, this.chunkEnd(hv + 5e3))
      }
      chunkEnd(vv) {
        return vv >= this.to ? this.to : this.text.lineAt(vv).to
      }
      next() {
        for (;;) {
          let vv = this.re.lastIndex = this.matchPos - this.flat.from,
            zv = this.re.exec(this.flat.text);
          if (zv && !zv[0] && zv.index == vv && (this.re.lastIndex = vv + 1, zv = this.re.exec(this.flat.text)), zv) {
            let vv = this.flat.from + zv.index,
              Pv = vv + zv[0].length;
            if ((this.flat.to >= this.to || zv.index + zv[0].length <= this.flat.text.length - 10) && (!this.test || this.test(vv, Pv, zv))) return this.value = {
              from: vv,
              to: Pv,
              match: zv
            }, this.matchPos = av(this.text, Pv + (vv == Pv ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = Wv.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function av(vv, zv) {
      if (zv >= vv.length) return zv;
      let Pv, hv = vv.lineAt(zv);
      for (; zv < hv.to && (Pv = hv.text.charCodeAt(zv - hv.from)) >= 56320 && Pv < 57344;) zv++;
      return zv
    }
    "undefined" != typeof Symbol && (lv.prototype[Symbol.iterator] = wv.prototype[Symbol.iterator] = function() {
      return this
    });
    const sv = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      Cv = Sv.q.define({
        combine: vv => (0, Sv.O)(vv, sv, {
          highlightWordAroundCursor: (vv, zv) => vv || zv,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function iv(vv) {
      let zv = [fv, jv];
      return vv && zv.push(Cv.of(vv)), zv
    }
    const cv = hv.c.mark({
        class: "cm-selectionMatch"
      }),
      Gv = hv.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function mv(vv, zv, Pv, hv) {
      return (0 == Pv || vv(zv.sliceDoc(Pv - 1, Pv)) != Sv.f.Word) && (hv == zv.doc.length || vv(zv.sliceDoc(hv, hv + 1)) != Sv.f.Word)
    }
    const jv = hv.j.fromClass(class {
        constructor(vv) {
          this.de = this.getDeco(vv)
        }
        update(vv) {
          (vv.selectionSet || vv.docChanged || vv.viewportChanged) && (this.de = this.getDeco(vv.view))
        }
        getDeco(vv) {
          let zv = vv.state.facet(Cv),
            {
              state: Pv
            } = vv,
            ev = Pv.selection;
          if (ev.PC.length > 1) return hv.c.none;
          let gv, dv = ev.main,
            Nv = null;
          if (dv.empty) {
            if (!zv.highlightWordAroundCursor) return hv.c.none;
            let vv = Pv.wordAt(dv.head);
            if (!vv) return hv.c.none;
            Nv = Pv.charCategorizer(dv.head), gv = Pv.sliceDoc(vv.from, vv.to)
          } else {
            let vv = dv.to - dv.from;
            if (vv < zv.minSelectionLength || vv > 200) return hv.c.none;
            if (zv.wholeWords) {
              if (gv = Pv.sliceDoc(dv.from, dv.to), Nv = Pv.charCategorizer(dv.head), !mv(Nv, Pv, dv.from, dv.to) || ! function(vv, zv, Pv, hv) {
                  return vv(zv.sliceDoc(Pv, Pv + 1)) == Sv.f.Word && vv(zv.sliceDoc(hv - 1, hv)) == Sv.f.Word
                }(Nv, Pv, dv.from, dv.to)) return hv.c.none
            } else if (gv = Pv.sliceDoc(dv.from, dv.to), !gv) return hv.c.none
          }
          let lv = [];
          for (let Sv of vv.e_) {
            let vv = new pv(Pv.doc, gv, Sv.from, Sv.to);
            for (; !vv.next().done;) {
              let {
                from: Sv,
                to: ev
              } = vv.value;
              if ((!Nv || mv(Nv, Pv, Sv, ev)) && (dv.empty && Sv <= dv.from && ev >= dv.to ? lv.push(Gv.range(Sv, ev)) : (Sv >= dv.to || ev <= dv.from) && lv.push(cv.range(Sv, ev)), lv.length > zv.maxMatches)) return hv.c.none
            }
          }
          return hv.c.set(lv)
        }
      }, {
        de: vv => vv.de
      }),
      fv = hv.g.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const Fv = Sv.q.define({
      combine: vv => (0, Sv.O)(vv, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: vv => new vz(vv),
        scrollToMatch: vv => hv.g.scrollIntoView(vv)
      })
    });
    class Yv {
      constructor(vv) {
        this.search = vv.search, this.caseSensitive = !!vv.caseSensitive, this.literal = !!vv.literal, this.regexp = !!vv.regexp, this.replace = vv.replace || "", this.valid = !!this.search && (!this.regexp || function(vv) {
          try {
            return new RegExp(vv, Nv), !0
          } catch (zv) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!vv.wholeWord, this.test = vv.test
      }
      unquote(vv) {
        return this.literal ? vv : vv.replace(/\\([nrt\\])/g, ((vv, zv) => "n" == zv ? "\n" : "r" == zv ? "\r" : "t" == zv ? "\t" : "\\"))
      }
      eq(vv) {
        return this.search == vv.search && this.replace == vv.replace && this.caseSensitive == vv.caseSensitive && this.regexp == vv.regexp && this.wholeWord == vv.wholeWord && this.test == vv.test
      }
      create() {
        return this.regexp ? new Rv(this) : new Dv(this)
      }
      getCursor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = vv.doc ? vv : Sv.n.create({
            doc: vv
          });
        return null == Pv && (Pv = hv.doc.length), this.regexp ? Kv(this, hv, zv, Pv) : Ov(this, hv, zv, Pv)
      }
    }
    class nv {
      constructor(vv) {
        this.spec = vv
      }
    }

    function Ov(vv, zv, Pv, hv) {
      let ev;
      var gv, dv;
      return vv.wholeWord && (gv = zv.doc, dv = zv.charCategorizer(zv.selection.main.head), ev = (vv, zv, Pv, hv) => ((hv > vv || hv + Pv.length < zv) && (hv = Math.max(0, vv - 2), Pv = gv.sliceString(hv, Math.min(gv.length, zv + 2))), (dv(Vv(Pv, vv - hv)) != Sv.f.Word || dv(Uv(Pv, vv - hv)) != Sv.f.Word) && (dv(Uv(Pv, zv - hv)) != Sv.f.Word || dv(Vv(Pv, zv - hv)) != Sv.f.Word))), vv.test && (ev = function(vv, zv, Pv) {
        return (hv, Sv, ev, gv) => {
          if (Pv && !Pv(hv, Sv, ev, gv)) return !1;
          let pv = hv >= gv && Sv <= gv + ev.length ? ev.slice(hv - gv, Sv - gv) : zv.doc.sliceString(hv, Sv);
          return vv(pv, zv, hv, Sv)
        }
      }(vv.test, zv, ev)), new pv(zv.doc, vv.unquoted, Pv, hv, vv.caseSensitive ? void 0 : vv => vv.toLowerCase(), ev)
    }
    class Dv extends nv {
      constructor(vv) {
        super(vv)
      }
      nextMatch(vv, zv, Pv) {
        let hv = Ov(this.spec, vv, Pv, vv.doc.length).nextOverlapping();
        if (hv.done) {
          let Pv = Math.min(vv.doc.length, zv + this.spec.unquoted.length);
          hv = Ov(this.spec, vv, 0, Pv).nextOverlapping()
        }
        return hv.done || hv.value.from == zv && hv.value.to == Pv ? null : hv.value
      }
      prevMatchInRange(vv, zv, Pv) {
        for (let hv = Pv;;) {
          let Pv = Math.max(zv, hv - 1e4 - this.spec.unquoted.length),
            Sv = Ov(this.spec, vv, Pv, hv),
            ev = null;
          for (; !Sv.nextOverlapping().done;) ev = Sv.value;
          if (ev) return ev;
          if (Pv == zv) return null;
          hv -= 1e4
        }
      }
      prevMatch(vv, zv, Pv) {
        let hv = this.prevMatchInRange(vv, 0, zv);
        return hv || (hv = this.prevMatchInRange(vv, Math.max(0, Pv - this.spec.unquoted.length), vv.doc.length)), !hv || hv.from == zv && hv.to == Pv ? null : hv
      }
      getReplacement(vv) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(vv, zv) {
        let Pv = Ov(this.spec, vv, 0, vv.doc.length),
          hv = [];
        for (; !Pv.next().done;) {
          if (hv.length >= zv) return null;
          hv.push(Pv.value)
        }
        return hv
      }
      highlight(vv, zv, Pv, hv) {
        let Sv = Ov(this.spec, vv, Math.max(0, zv - this.spec.unquoted.length), Math.min(Pv + this.spec.unquoted.length, vv.doc.length));
        for (; !Sv.next().done;) hv(Sv.value.from, Sv.value.to)
      }
    }

    function Kv(vv, zv, Pv, hv) {
      let ev;
      var gv;
      return vv.wholeWord && (gv = zv.charCategorizer(zv.selection.main.head), ev = (vv, zv, Pv) => !Pv[0].length || (gv(Vv(Pv.input, Pv.index)) != Sv.f.Word || gv(Uv(Pv.input, Pv.index)) != Sv.f.Word) && (gv(Uv(Pv.input, Pv.index + Pv[0].length)) != Sv.f.Word || gv(Vv(Pv.input, Pv.index + Pv[0].length)) != Sv.f.Word)), vv.test && (ev = function(vv, zv, Pv) {
        return (hv, Sv, ev) => (!Pv || Pv(hv, Sv, ev)) && vv(ev[0], zv, hv, Sv)
      }(vv.test, zv, ev)), new lv(zv.doc, vv.search, {
        ignoreCase: !vv.caseSensitive,
        test: ev
      }, Pv, hv)
    }

    function Vv(vv, zv) {
      return vv.slice((0, Sv.W)(vv, zv, !1), zv)
    }

    function Uv(vv, zv) {
      return vv.slice(zv, (0, Sv.W)(vv, zv))
    }
    class Rv extends nv {
      nextMatch(vv, zv, Pv) {
        let hv = Kv(this.spec, vv, Pv, vv.doc.length).next();
        return hv.done && (hv = Kv(this.spec, vv, 0, zv).next()), hv.done ? null : hv.value
      }
      prevMatchInRange(vv, zv, Pv) {
        for (let hv = 1;; hv++) {
          let Sv = Math.max(zv, Pv - 1e4 * hv),
            ev = Kv(this.spec, vv, Sv, Pv),
            gv = null;
          for (; !ev.next().done;) gv = ev.value;
          if (gv && (Sv == zv || gv.from > Sv + 10)) return gv;
          if (Sv == zv) return null
        }
      }
      prevMatch(vv, zv, Pv) {
        return this.prevMatchInRange(vv, 0, zv) || this.prevMatchInRange(vv, Pv, vv.doc.length)
      }
      getReplacement(vv) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((zv, Pv) => {
          if ("&" == Pv) return vv.match[0];
          if ("$" == Pv) return "$";
          for (let hv = Pv.length; hv > 0; hv--) {
            let zv = +Pv.slice(0, hv);
            if (zv > 0 && zv < vv.match.length) return vv.match[zv] + Pv.slice(hv)
          }
          return zv
        }))
      }
      matchAll(vv, zv) {
        let Pv = Kv(this.spec, vv, 0, vv.doc.length),
          hv = [];
        for (; !Pv.next().done;) {
          if (hv.length >= zv) return null;
          hv.push(Pv.value)
        }
        return hv
      }
      highlight(vv, zv, Pv, hv) {
        let Sv = Kv(this.spec, vv, Math.max(0, zv - 250), Math.min(Pv + 250, vv.doc.length));
        for (; !Sv.next().done;) hv(Sv.value.from, Sv.value.to)
      }
    }
    const xv = Sv.B.define(),
      tv = Sv.B.define(),
      qv = Sv.E.define({
        create: vv => new Iv(ov(vv).create(), null),
        update(vv, zv) {
          for (let Pv of zv.effects) Pv.is(xv) ? vv = new Iv(Pv.value.create(), vv.panel) : Pv.is(tv) && (vv = new Iv(vv.query, Pv.value ? Ev : null));
          return vv
        },
        provide: vv => hv.cb.from(vv, (vv => vv.panel))
      });
    class Iv {
      constructor(vv, zv) {
        this.query = vv, this.panel = zv
      }
    }
    const Qv = hv.c.mark({
        class: "cm-searchMatch"
      }),
      Zv = hv.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      Av = hv.j.fromClass(class {
        constructor(vv) {
          this.view = vv, this.de = this.highlight(vv.state.field(qv))
        }
        update(vv) {
          let zv = vv.state.field(qv);
          (zv != vv.startState.field(qv) || vv.docChanged || vv.selectionSet || vv.viewportChanged) && (this.de = this.highlight(zv))
        }
        highlight(vv) {
          let {
            query: zv,
            panel: Pv
          } = vv;
          if (!Pv || !zv.spec.valid) return hv.c.none;
          let {
            view: ev
          } = this, gv = new Sv.x;
          for (let hv = 0, Sv = ev.e_, pv = Sv.length; hv < pv; hv++) {
            let {
              from: vv,
              to: Pv
            } = Sv[hv];
            for (; hv < pv - 1 && Pv > Sv[hv + 1].from - 500;) Pv = Sv[++hv].to;
            zv.highlight(ev.state, vv, Pv, ((vv, zv) => {
              let Pv = ev.state.selection.PC.some((Pv => Pv.from == vv && Pv.to == zv));
              gv.add(vv, zv, Pv ? Zv : Qv)
            }))
          }
          return gv.finish()
        }
      }, {
        de: vv => vv.de
      });

    function Lv(vv) {
      return zv => {
        let Pv = zv.state.field(qv, !1);
        return Pv && Pv.query.spec.valid ? vv(zv, Pv) : kv(zv)
      }
    }
    const Hv = Lv(((vv, zv) => {
        let {
          query: Pv
        } = zv, {
          to: hv
        } = vv.state.selection.main, ev = Pv.nextMatch(vv.state, hv, hv);
        if (!ev) return !1;
        let gv = Sv.j.single(ev.from, ev.to),
          pv = vv.state.facet(Fv);
        return vv.dispatch({
          selection: gv,
          effects: [Sz(vv, ev), pv.scrollToMatch(gv.main, vv)],
          userEvent: "select.search"
        }), rv(vv), !0
      })),
      Mv = Lv(((vv, zv) => {
        let {
          query: Pv
        } = zv, {
          state: hv
        } = vv, {
          from: ev
        } = hv.selection.main, gv = Pv.prevMatch(hv, ev, ev);
        if (!gv) return !1;
        let pv = Sv.j.single(gv.from, gv.to),
          dv = vv.state.facet(Fv);
        return vv.dispatch({
          selection: pv,
          effects: [Sz(vv, gv), dv.scrollToMatch(pv.main, vv)],
          userEvent: "select.search"
        }), rv(vv), !0
      })),
      yv = Lv(((vv, zv) => {
        let {
          query: Pv
        } = zv, hv = Pv.matchAll(vv.state, 1e3);
        return !(!hv || !hv.length) && (vv.dispatch({
          selection: Sv.j.create(hv.map((vv => Sv.j.range(vv.from, vv.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      Bv = Lv(((vv, zv) => {
        let {
          query: Pv
        } = zv, {
          state: ev
        } = vv, {
          from: gv,
          to: pv
        } = ev.selection.main;
        if (ev.readOnly) return !1;
        let dv = Pv.nextMatch(ev, gv, gv);
        if (!dv) return !1;
        let Nv, lv, Tv = dv,
          Wv = [],
          wv = [];
        Tv.from == gv && Tv.to == pv && (lv = ev.toText(Pv.getReplacement(Tv)), Wv.push({
          from: Tv.from,
          to: Tv.to,
          insert: lv
        }), Tv = Pv.nextMatch(ev, Tv.from, Tv.to), wv.push(hv.g.announce.of(ev.phrase("replaced match on line $", ev.doc.lineAt(gv).number) + ".")));
        let av = vv.state.changes(Wv);
        return Tv && (Nv = Sv.j.single(Tv.from, Tv.to).map(av), wv.push(Sz(vv, Tv)), wv.push(ev.facet(Fv).scrollToMatch(Nv.main, vv))), vv.dispatch({
          changes: av,
          selection: Nv,
          effects: wv,
          userEvent: "input.replace"
        }), !0
      })),
      Jv = Lv(((vv, zv) => {
        let {
          query: Pv
        } = zv;
        if (vv.state.readOnly) return !1;
        let Sv = Pv.matchAll(vv.state, 1e9).map((vv => {
          let {
            from: zv,
            to: hv
          } = vv;
          return {
            from: zv,
            to: hv,
            insert: Pv.getReplacement(vv)
          }
        }));
        if (!Sv.length) return !1;
        let ev = vv.state.phrase("replaced $ matches", Sv.length) + ".";
        return vv.dispatch({
          changes: Sv,
          effects: hv.g.announce.of(ev),
          userEvent: "input.replace.all"
        }), !0
      }));

    function Ev(vv) {
      return vv.state.facet(Fv).createPanel(vv)
    }

    function ov(vv, zv) {
      var Pv, hv, Sv, ev, gv;
      let pv = vv.selection.main,
        dv = pv.empty || pv.to > pv.from + 100 ? "" : vv.sliceDoc(pv.from, pv.to);
      if (zv && !dv) return zv;
      let Nv = vv.facet(Fv);
      return new Yv({
        search: (null !== (Pv = null === zv || void 0 === zv ? void 0 : zv.literal) && void 0 !== Pv ? Pv : Nv.literal) ? dv : dv.replace(/\n/g, "\\n"),
        caseSensitive: null !== (hv = null === zv || void 0 === zv ? void 0 : zv.caseSensitive) && void 0 !== hv ? hv : Nv.caseSensitive,
        literal: null !== (Sv = null === zv || void 0 === zv ? void 0 : zv.literal) && void 0 !== Sv ? Sv : Nv.literal,
        regexp: null !== (ev = null === zv || void 0 === zv ? void 0 : zv.regexp) && void 0 !== ev ? ev : Nv.regexp,
        wholeWord: null !== (gv = null === zv || void 0 === zv ? void 0 : zv.wholeWord) && void 0 !== gv ? gv : Nv.wholeWord
      })
    }

    function bv(vv) {
      let zv = (0, hv.x)(vv, Ev);
      return zv && zv.dom.querySelector("[main-field]")
    }

    function rv(vv) {
      let zv = bv(vv);
      zv && zv == vv.root.activeElement && zv.select()
    }
    const kv = vv => {
        let zv = vv.state.field(qv, !1);
        if (zv && zv.panel) {
          let Pv = bv(vv);
          if (Pv && Pv != vv.root.activeElement) {
            let hv = ov(vv.state, zv.query.spec);
            hv.valid && vv.dispatch({
              effects: xv.of(hv)
            }), Pv.focus(), Pv.select()
          }
        } else vv.dispatch({
          effects: [tv.of(!0), zv ? xv.of(ov(vv.state, zv.query.spec)) : Sv.B.appendConfig.of(gz)]
        });
        return !0
      },
      Xv = vv => {
        let zv = vv.state.field(qv, !1);
        if (!zv || !zv.panel) return !1;
        let Pv = (0, hv.x)(vv, Ev);
        return Pv && Pv.dom.contains(vv.root.activeElement) && vv.focus(), vv.dispatch({
          effects: tv.of(!1)
        }), !0
      },
      uv = [{
        key: "Mod-f",
        run: kv,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: Hv,
        shift: Mv,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: Hv,
        shift: Mv,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: Xv,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv, hv = zv.selection;
          if (hv.PC.length > 1 || hv.main.empty) return !1;
          let {
            from: ev,
            to: gv
          } = hv.main, dv = [], Nv = 0;
          for (let lv = new pv(zv.doc, zv.sliceDoc(ev, gv)); !lv.next().done;) {
            if (dv.length > 1e3) return !1;
            lv.value.from == ev && (Nv = dv.length), dv.push(Sv.j.range(lv.value.from, lv.value.to))
          }
          return Pv(zv.update({
            selection: Sv.j.create(dv, Nv),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: vv => {
          let {
            state: zv
          } = vv, Pv = String(zv.doc.lineAt(vv.state.selection.main.head).number), {
            close: ev,
            result: gv
          } = (0, hv._)(vv, {
            label: zv.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: Pv
            },
            focus: !0,
            submitLabel: zv.phrase("go")
          });
          return gv.then((Pv => {
            let gv = Pv && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(Pv.elements.line.value);
            if (!gv) return void vv.dispatch({
              effects: ev
            });
            let pv = zv.doc.lineAt(zv.selection.main.head),
              [, dv, Nv, lv, Tv] = gv,
              Wv = lv ? +lv.slice(1) : 0,
              wv = Nv ? +Nv : pv.number;
            if (Nv && Tv) {
              let vv = wv / 100;
              dv && (vv = vv * ("-" == dv ? -1 : 1) + pv.number / zv.doc.lines), wv = Math.round(zv.doc.lines * vv)
            } else Nv && dv && (wv = wv * ("-" == dv ? -1 : 1) + pv.number);
            let av = zv.doc.line(Math.max(1, Math.min(zv.doc.lines, wv))),
              sv = Sv.j.cursor(av.from + Math.max(0, Math.min(Wv, av.length)));
            vv.dispatch({
              effects: [ev, hv.g.scrollIntoView(sv.from, {
                y: "center"
              })],
              selection: sv
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv, {
            PC: ev
          } = zv.selection;
          if (ev.some((vv => vv.from === vv.to))) return (vv => {
            let {
              state: zv,
              dispatch: Pv
            } = vv, {
              selection: hv
            } = zv, ev = Sv.j.create(hv.PC.map((vv => zv.wordAt(vv.head) || Sv.j.cursor(vv.head))), hv.mainIndex);
            return !ev.eq(hv) && (Pv(zv.update({
              selection: ev
            })), !0)
          })({
            state: zv,
            dispatch: Pv
          });
          let gv = zv.sliceDoc(ev[0].from, ev[0].to);
          if (zv.selection.PC.some((vv => zv.sliceDoc(vv.from, vv.to) != gv))) return !1;
          let dv = function(vv, zv) {
            let {
              main: Pv,
              PC: hv
            } = vv.selection, Sv = vv.wordAt(Pv.head), ev = Sv && Sv.from == Pv.from && Sv.to == Pv.to;
            for (let gv = !1, dv = new pv(vv.doc, zv, hv[hv.length - 1].to);;) {
              if (dv.next(), !dv.done) {
                if (gv && hv.some((vv => vv.from == dv.value.from))) continue;
                if (ev) {
                  let zv = vv.wordAt(dv.value.from);
                  if (!zv || zv.from != dv.value.from || zv.to != dv.value.to) continue
                }
                return dv.value
              }
              if (gv) return null;
              dv = new pv(vv.doc, zv, 0, Math.max(0, hv[hv.length - 1].from - 1)), gv = !0
            }
          }(zv, gv);
          return !!dv && (Pv(zv.update({
            selection: zv.selection.addRange(Sv.j.range(dv.from, dv.to), !1),
            effects: hv.g.scrollIntoView(dv.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class vz {
      constructor(vv) {
        this.view = vv;
        let zv = this.query = vv.state.field(qv).query.spec;

        function Pv(vv, zv, Pv) {
          return (0, ev.b)("button", {
            class: "cm-button",
            name: vv,
            onclick: zv,
            type: "button"
          }, Pv)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, ev.b)("input", {
          value: zv.search,
          placeholder: zz(vv, "Find"),
          "aria-label": zz(vv, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, ev.b)("input", {
          value: zv.replace,
          placeholder: zz(vv, "Replace"),
          "aria-label": zz(vv, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, ev.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: zv.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, ev.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: zv.regexp,
          onchange: this.commit
        }), this.wordField = (0, ev.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: zv.wholeWord,
          onchange: this.commit
        }), this.dom = (0, ev.b)("div", {
          onkeydown: vv => this.keydown(vv),
          class: "cm-search"
        }, [this.searchField, Pv("next", (() => Hv(vv)), [zz(vv, "next")]), Pv("prev", (() => Mv(vv)), [zz(vv, "previous")]), Pv("select", (() => yv(vv)), [zz(vv, "all")]), (0, ev.b)("label", null, [this.caseField, zz(vv, "match case")]), (0, ev.b)("label", null, [this.reField, zz(vv, "regexp")]), (0, ev.b)("label", null, [this.wordField, zz(vv, "by word")]), ...vv.state.readOnly ? [] : [(0, ev.b)("br"), this.replaceField, Pv("replace", (() => Bv(vv)), [zz(vv, "replace")]), Pv("replaceAll", (() => Jv(vv)), [zz(vv, "replace all")])], (0, ev.b)("button", {
          name: "close",
          onclick: () => Xv(vv),
          "aria-label": zz(vv, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let vv = new Yv({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        vv.eq(this.query) || (this.query = vv, this.view.dispatch({
          effects: xv.of(vv)
        }))
      }
      keydown(vv) {
        (0, hv.Y)(this.view, vv, "search-panel") ? vv.preventDefault(): 13 == vv.keyCode && vv.target == this.searchField ? (vv.preventDefault(), (vv.shiftKey ? Mv : Hv)(this.view)) : 13 == vv.keyCode && vv.target == this.replaceField && (vv.preventDefault(), Bv(this.view))
      }
      update(vv) {
        for (let zv of vv.transactions)
          for (let vv of zv.effects) vv.is(xv) && !vv.value.eq(this.query) && this.setQuery(vv.value)
      }
      setQuery(vv) {
        this.query = vv, this.searchField.value = vv.search, this.replaceField.value = vv.replace, this.caseField.checked = vv.caseSensitive, this.reField.checked = vv.regexp, this.wordField.checked = vv.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(Fv).top
      }
    }

    function zz(vv, zv) {
      return vv.state.phrase(zv)
    }
    const Pz = 30,
      hz = /[\s\.,:;?!]/;

    function Sz(vv, zv) {
      let {
        from: Pv,
        to: Sv
      } = zv, ev = vv.state.doc.lineAt(Pv), gv = vv.state.doc.lineAt(Sv).to, pv = Math.max(ev.from, Pv - Pz), dv = Math.min(gv, Sv + Pz), Nv = vv.state.sliceDoc(pv, dv);
      if (pv != ev.from)
        for (let hv = 0; hv < Pz; hv++)
          if (!hz.test(Nv[hv + 1]) && hz.test(Nv[hv])) {
            Nv = Nv.slice(hv);
            break
          } if (dv != gv)
        for (let hv = Nv.length - 1; hv > Nv.length - Pz; hv--)
          if (!hz.test(Nv[hv - 1]) && hz.test(Nv[hv])) {
            Nv = Nv.slice(0, hv);
            break
          } return hv.g.announce.of(`${vv.state.phrase("current match")}. ${Nv} ${vv.state.phrase("on line")} ${ev.number}.`)
    }
    const ez = hv.g.baseTheme({
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
      gz = [qv, Sv.u.low(Av), ez]
  },
  40605: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Rv,
      f: () => Nz,
      g: () => nS,
      h: () => eg,
      j: () => rz,
      m: () => Vv,
      p: () => Ke,
      r: () => rS,
      v: () => ee,
      x: () => re,
      B: () => Ee,
      F: () => lg,
      L: () => ie,
      I: () => Vg,
      M: () => we,
      O: () => Je,
      P: () => tS,
      Q: () => ng,
      U: () => Jz,
      W: () => je,
      X: () => ne,
      Y: () => QS,
      _: () => zg,
      cb: () => vg,
      eb: () => Ae
    });
    for (var hv = Pv(40599), Sv = Pv(40612), ev = {
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
      }, gv = {
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
      }, pv = "undefined" != typeof navigator && /Mac/.test(navigator.platform), dv = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Nv = 0; Nv < 10; Nv++) ev[48 + Nv] = ev[96 + Nv] = String(Nv);
    for (Nv = 1; Nv <= 24; Nv++) ev[Nv + 111] = "F" + Nv;
    for (Nv = 65; Nv <= 90; Nv++) ev[Nv] = String.fromCharCode(Nv + 32), gv[Nv] = String.fromCharCode(Nv);
    for (var lv in ev) gv.hasOwnProperty(lv) || (gv[lv] = ev[lv]);
    var Tv = Pv(40618);
    let Wv = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      wv = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const av = /Edge\/(\d+)/.exec(Wv.userAgent),
      sv = /MSIE \d/.test(Wv.userAgent),
      Cv = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Wv.userAgent),
      iv = !!(sv || Cv || av),
      cv = !iv && /gecko\/(\d+)/i.test(Wv.userAgent),
      Gv = !iv && /Chrome\/(\d+)/.exec(Wv.userAgent),
      mv = "webkitFontSmoothing" in wv.documentElement.style,
      jv = !iv && /Apple Computer/.test(Wv.vendor),
      fv = jv && (/Mobile\/\w+/.test(Wv.userAgent) || Wv.maxTouchPoints > 2);
    var Fv = {
      mac: fv || /Mac/.test(Wv.platform),
      windows: /Win/.test(Wv.platform),
      linux: /Linux|X11/.test(Wv.platform),
      ie: iv,
      ie_version: sv ? wv.documentMode || 6 : Cv ? +Cv[1] : av ? +av[1] : 0,
      gecko: cv,
      gecko_version: cv ? +(/Firefox\/(\d+)/.exec(Wv.userAgent) || [0, 0])[1] : 0,
      chrome: !!Gv,
      chrome_version: Gv ? +Gv[1] : 0,
      ios: fv,
      android: /Android\b/.test(Wv.userAgent),
      webkit: mv,
      webkit_version: mv ? +(/\bAppleWebKit\/(\d+)/.exec(Wv.userAgent) || [0, 0])[1] : 0,
      safari: jv,
      safari_version: jv ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Wv.userAgent) || [0, 0])[1] : 0,
      tabSize: null != wv.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function Yv(vv, zv) {
      for (let Pv in vv) "class" == Pv && zv.class ? zv.class += " " + vv.class : "style" == Pv && zv.style ? zv.style += ";" + vv.style : zv[Pv] = vv[Pv];
      return zv
    }
    const nv = Object.create(null);

    function Ov(vv, zv, Pv) {
      if (vv == zv) return !0;
      vv || (vv = nv), zv || (zv = nv);
      let hv = Object.keys(vv),
        Sv = Object.keys(zv);
      if (hv.length - (Pv && hv.indexOf(Pv) > -1 ? 1 : 0) != Sv.length - (Pv && Sv.indexOf(Pv) > -1 ? 1 : 0)) return !1;
      for (let ev of hv)
        if (ev != Pv && (-1 == Sv.indexOf(ev) || vv[ev] !== zv[ev])) return !1;
      return !0
    }

    function Dv(vv, zv, Pv) {
      let hv = !1;
      if (zv)
        for (let Sv in zv) Pv && Sv in Pv || (hv = !0, "style" == Sv ? vv.style.cssText = "" : vv.removeAttribute(Sv));
      if (Pv)
        for (let Sv in Pv) zv && zv[Sv] == Pv[Sv] || (hv = !0, "style" == Sv ? vv.style.cssText = Pv[Sv] : vv.setAttribute(Sv, Pv[Sv]));
      return hv
    }

    function Kv(vv) {
      let zv = Object.create(null);
      for (let Pv = 0; Pv < vv.attributes.length; Pv++) {
        let hv = vv.attributes[Pv];
        zv[hv.name] = hv.value
      }
      return zv
    }
    class Vv {
      eq(vv) {
        return !1
      }
      updateDOM(vv, zv, Pv) {
        return !1
      }
      compare(vv) {
        return this == vv || this.constructor == vv.constructor && this.eq(vv)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(vv) {
        return !0
      }
      coordsAt(vv, zv, Pv) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(vv) {}
    }
    var Uv = function(vv) {
      return vv[vv.Text = 0] = "Text", vv[vv.WidgetBefore = 1] = "WidgetBefore", vv[vv.WidgetAfter = 2] = "WidgetAfter", vv[vv.WidgetRange = 3] = "WidgetRange", vv
    }(Uv || (Uv = {}));
    class Rv extends hv.A {
      constructor(vv, zv, Pv, hv) {
        super(), this.startSide = vv, this.endSide = zv, this.widget = Pv, this.spec = hv
      }
      get heightRelevant() {
        return !1
      }
      static mark(vv) {
        return new xv(vv)
      }
      static widget(vv) {
        let zv = Math.max(-1e4, Math.min(1e4, vv.side || 0)),
          Pv = !!vv.block;
        return zv += Pv && !vv.inlineOrder ? zv > 0 ? 3e8 : -4e8 : zv > 0 ? 1e8 : -1e8, new qv(vv, zv, zv, Pv, vv.widget || null, !1)
      }
      static replace(vv) {
        let zv, Pv, hv = !!vv.block;
        if (vv.isBlockGap) zv = -5e8, Pv = 4e8;
        else {
          let {
            start: Sv,
            end: ev
          } = Iv(vv, hv);
          zv = (Sv ? hv ? -3e8 : -1 : 5e8) - 1, Pv = 1 + (ev ? hv ? 2e8 : 1 : -6e8)
        }
        return new qv(vv, zv, Pv, hv, vv.widget || null, !0)
      }
      static line(vv) {
        return new tv(vv)
      }
      static set(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return hv.y.of(vv, zv)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Rv.none = hv.y.empty;
    class xv extends Rv {
      constructor(vv) {
        let {
          start: zv,
          end: Pv
        } = Iv(vv);
        super(zv ? -1 : 5e8, Pv ? 1 : -6e8, null, vv), this.tagName = vv.tagName || "span", this.attrs = vv.class && vv.attributes ? Yv(vv.attributes, {
          class: vv.class
        }) : vv.class ? {
          class: vv.class
        } : vv.attributes || nv
      }
      eq(vv) {
        return this == vv || vv instanceof xv && this.tagName == vv.tagName && Ov(this.attrs, vv.attrs)
      }
      range(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv;
        if (vv >= zv) throw new RangeError("Mark decorations may not be empty");
        return super.range(vv, zv)
      }
    }
    xv.prototype.point = !1;
    class tv extends Rv {
      constructor(vv) {
        super(-2e8, -2e8, null, vv)
      }
      eq(vv) {
        return vv instanceof tv && this.spec.class == vv.spec.class && Ov(this.spec.attributes, vv.spec.attributes)
      }
      range(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv;
        if (zv != vv) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(vv, zv)
      }
    }
    tv.prototype.mapMode = hv.r.TrackBefore, tv.prototype.point = !0;
    class qv extends Rv {
      constructor(vv, zv, Pv, Sv, ev, gv) {
        super(zv, Pv, ev, vv), this.block = Sv, this.isReplace = gv, this.mapMode = Sv ? zv <= 0 ? hv.r.TrackBefore : hv.r.TrackAfter : hv.r.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Uv.WidgetRange : this.startSide <= 0 ? Uv.WidgetBefore : Uv.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(vv) {
        return vv instanceof qv && (zv = this.widget, Pv = vv.widget, zv == Pv || !!(zv && Pv && zv.compare(Pv))) && this.block == vv.block && this.startSide == vv.startSide && this.endSide == vv.endSide;
        var zv, Pv
      }
      range(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vv;
        if (this.isReplace && (vv > zv || vv == zv && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && zv != vv) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(vv, zv)
      }
    }

    function Iv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: Pv,
          inclusiveEnd: hv
        } = vv;
      return null == Pv && (Pv = vv.inclusive), null == hv && (hv = vv.inclusive), {
        start: null !== Pv && void 0 !== Pv ? Pv : zv,
        end: null !== hv && void 0 !== hv ? hv : zv
      }
    }

    function Qv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Sv = Pv.length - 1;
      Sv >= 0 && Pv[Sv] + hv >= vv ? Pv[Sv] = Math.max(Pv[Sv], zv) : Pv.push(vv, zv)
    }
    qv.prototype.point = !0;
    class Zv extends hv.A {
      constructor(vv, zv) {
        super(), this.tagName = vv, this.attributes = zv
      }
      eq(vv) {
        return vv == this || vv instanceof Zv && this.tagName == vv.tagName && Ov(this.attributes, vv.attributes)
      }
      static create(vv) {
        return new Zv(vv.tagName, vv.attributes || nv)
      }
      static set(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return hv.y.of(vv, zv)
      }
    }

    function Av(vv) {
      let zv;
      return zv = 11 == vv.nodeType ? vv.getSelection ? vv : vv.ownerDocument : vv, zv.getSelection()
    }

    function Lv(vv, zv) {
      return !!zv && (vv == zv || vv.contains(1 != zv.nodeType ? zv.parentNode : zv))
    }

    function Hv(vv, zv) {
      if (!zv.anchorNode) return !1;
      try {
        return Lv(vv, zv.anchorNode)
      } catch (Pv) {
        return !1
      }
    }

    function Mv(vv) {
      return 3 == vv.nodeType ? hz(vv, 0, vv.nodeValue.length).getClientRects() : 1 == vv.nodeType ? vv.getClientRects() : []
    }

    function yv(vv, zv, Pv, hv) {
      return !!Pv && (Ev(vv, zv, Pv, hv, -1) || Ev(vv, zv, Pv, hv, 1))
    }

    function Bv(vv) {
      for (var zv = 0;; zv++)
        if (!(vv = vv.previousSibling)) return zv
    }

    function Jv(vv) {
      return 1 == vv.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(vv.nodeName)
    }

    function Ev(vv, zv, Pv, hv, Sv) {
      for (;;) {
        if (vv == Pv && zv == hv) return !0;
        if (zv == (Sv < 0 ? 0 : ov(vv))) {
          if ("DIV" == vv.nodeName) return !1;
          let Pv = vv.parentNode;
          if (!Pv || 1 != Pv.nodeType) return !1;
          zv = Bv(vv) + (Sv < 0 ? 0 : 1), vv = Pv
        } else {
          if (1 != vv.nodeType) return !1;
          if (1 == (vv = vv.childNodes[zv + (Sv < 0 ? -1 : 0)]).nodeType && "false" == vv.contentEditable) return !1;
          zv = Sv < 0 ? ov(vv) : 0
        }
      }
    }

    function ov(vv) {
      return 3 == vv.nodeType ? vv.nodeValue.length : vv.childNodes.length
    }

    function bv(vv, zv) {
      let Pv = zv ? vv.left : vv.right;
      return {
        left: Pv,
        right: Pv,
        top: vv.top,
        bottom: vv.bottom
      }
    }

    function rv(vv) {
      let zv = vv.visualViewport;
      return zv ? {
        left: 0,
        right: zv.width,
        top: 0,
        bottom: zv.height
      } : {
        left: 0,
        right: vv.innerWidth,
        top: 0,
        bottom: vv.innerHeight
      }
    }

    function kv(vv, zv) {
      let Pv = zv.width / vv.offsetWidth,
        hv = zv.height / vv.offsetHeight;
      return (Pv > .995 && Pv < 1.005 || !isFinite(Pv) || Math.abs(zv.width - vv.offsetWidth) < 1) && (Pv = 1), (hv > .995 && hv < 1.005 || !isFinite(hv) || Math.abs(zv.height - vv.offsetHeight) < 1) && (hv = 1), {
        scaleX: Pv,
        scaleY: hv
      }
    }

    function Xv(vv) {
      let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        Pv = vv.ownerDocument,
        hv = null,
        Sv = null;
      for (let ev = vv.parentNode; ev && (ev != Pv.body && (zv && !hv || !Sv));)
        if (1 == ev.nodeType) !Sv && ev.scrollHeight > ev.clientHeight && (Sv = ev), zv && !hv && ev.scrollWidth > ev.clientWidth && (hv = ev), ev = ev.assignedSlot || ev.parentNode;
        else {
          if (11 != ev.nodeType) break;
          ev = ev.host
        } return {
        x: hv,
        y: Sv
      }
    }
    Zv.prototype.startSide = Zv.prototype.endSide = -1;
    class uv {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(vv) {
        return this.anchorNode == vv.anchorNode && this.anchorOffset == vv.anchorOffset && this.focusNode == vv.focusNode && this.focusOffset == vv.focusOffset
      }
      setRange(vv) {
        let {
          anchorNode: zv,
          focusNode: Pv
        } = vv;
        this.set(zv, Math.min(vv.anchorOffset, zv ? ov(zv) : 0), Pv, Math.min(vv.focusOffset, Pv ? ov(Pv) : 0))
      }
      set(vv, zv, Pv, hv) {
        this.anchorNode = vv, this.anchorOffset = zv, this.focusNode = Pv, this.focusOffset = hv
      }
    }
    let vz, zz = null;

    function Pz(vv) {
      if (vv.setActive) return vv.setActive();
      if (zz) return vv.focus(zz);
      let zv = [];
      for (let Pv = vv; Pv && (zv.push(Pv, Pv.scrollTop, Pv.scrollLeft), Pv != Pv.ownerDocument); Pv = Pv.parentNode);
      if (vv.focus(null == zz ? {
          get preventScroll() {
            return zz = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !zz) {
        zz = !1;
        for (let vv = 0; vv < zv.length;) {
          let Pv = zv[vv++],
            hv = zv[vv++],
            Sv = zv[vv++];
          Pv.scrollTop != hv && (Pv.scrollTop = hv), Pv.scrollLeft != Sv && (Pv.scrollLeft = Sv)
        }
      }
    }

    function hz(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zv,
        hv = vz || (vz = document.createRange());
      return hv.setEnd(vv, Pv), hv.setStart(vv, zv), hv
    }

    function Sz(vv, zv, Pv, hv) {
      let Sv = {
        key: zv,
        code: zv,
        keyCode: Pv,
        which: Pv,
        cancelable: !0
      };
      hv && ({
        altKey: Sv.altKey,
        ctrlKey: Sv.ctrlKey,
        shiftKey: Sv.shiftKey,
        metaKey: Sv.metaKey
      } = hv);
      let ev = new KeyboardEvent("keydown", Sv);
      ev.synthetic = !0, vv.dispatchEvent(ev);
      let gv = new KeyboardEvent("keyup", Sv);
      return gv.synthetic = !0, vv.dispatchEvent(gv), ev.defaultPrevented || gv.defaultPrevented
    }

    function ez(vv) {
      return vv instanceof Window ? vv.pageYOffset > Math.max(0, vv.document.documentElement.scrollHeight - vv.innerHeight - 4) : vv.scrollTop > Math.max(1, vv.scrollHeight - vv.clientHeight - 4)
    }

    function gz(vv, zv) {
      for (let Pv = vv, hv = zv;;) {
        if (3 == Pv.nodeType && hv > 0) return {
          node: Pv,
          offset: hv
        };
        if (1 == Pv.nodeType && hv > 0) {
          if ("false" == Pv.contentEditable) return null;
          Pv = Pv.childNodes[hv - 1], hv = ov(Pv)
        } else {
          if (!Pv.parentNode || Jv(Pv)) return null;
          hv = Bv(Pv), Pv = Pv.parentNode
        }
      }
    }

    function pz(vv, zv) {
      for (let Pv = vv, hv = zv;;) {
        if (3 == Pv.nodeType && hv < Pv.nodeValue.length) return {
          node: Pv,
          offset: hv
        };
        if (1 == Pv.nodeType && hv < Pv.childNodes.length) {
          if ("false" == Pv.contentEditable) return null;
          Pv = Pv.childNodes[hv], hv = 0
        } else {
          if (!Pv.parentNode || Jv(Pv)) return null;
          hv = Bv(Pv) + 1, Pv = Pv.parentNode
        }
      }
    }
    Fv.safari && Fv.safari_version >= 26 && (zz = !1);
    class dz {
      constructor(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = vv, this.offset = zv, this.precise = Pv
      }
      static before(vv, zv) {
        return new dz(vv.parentNode, Bv(vv), zv)
      }
      static after(vv, zv) {
        return new dz(vv.parentNode, Bv(vv) + 1, zv)
      }
    }
    var Nz = function(vv) {
      return vv[vv.LTR = 0] = "LTR", vv[vv.RTL = 1] = "RTL", vv
    }(Nz || (Nz = {}));
    const lz = Nz.LTR,
      Tz = Nz.RTL;

    function Wz(vv) {
      let zv = [];
      for (let Pv = 0; Pv < vv.length; Pv++) zv.push(1 << +vv[Pv]);
      return zv
    }
    const wz = Wz("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      az = Wz("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      sz = Object.create(null),
      Cz = [];
    for (let Ug of ["()", "[]", "{}"]) {
      let vv = Ug.charCodeAt(0),
        zv = Ug.charCodeAt(1);
      sz[vv] = zv, sz[zv] = -vv
    }

    function iz(vv) {
      return vv <= 247 ? wz[vv] : 1424 <= vv && vv <= 1524 ? 2 : 1536 <= vv && vv <= 1785 ? az[vv - 1536] : 1774 <= vv && vv <= 2220 ? 4 : 8192 <= vv && vv <= 8204 ? 256 : 64336 <= vv && vv <= 65023 ? 4 : 1
    }
    const cz = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Gz {
      get dir() {
        return this.level % 2 ? Tz : lz
      }
      constructor(vv, zv, Pv) {
        this.from = vv, this.to = zv, this.level = Pv
      }
      side(vv, zv) {
        return this.dir == zv == vv ? this.to : this.from
      }
      forward(vv, zv) {
        return vv == (this.dir == zv)
      }
      static find(vv, zv, Pv, hv) {
        let Sv = -1;
        for (let ev = 0; ev < vv.length; ev++) {
          let gv = vv[ev];
          if (gv.from <= zv && gv.to >= zv) {
            if (gv.level == Pv) return ev;
            (Sv < 0 || (0 != hv ? hv < 0 ? gv.from < zv : gv.to > zv : vv[Sv].level > gv.level)) && (Sv = ev)
          }
        }
        if (Sv < 0) throw new RangeError("Index out of range");
        return Sv
      }
    }

    function mz(vv, zv) {
      if (vv.length != zv.length) return !1;
      for (let Pv = 0; Pv < vv.length; Pv++) {
        let hv = vv[Pv],
          Sv = zv[Pv];
        if (hv.from != Sv.from || hv.to != Sv.to || hv.direction != Sv.direction || !mz(hv.inner, Sv.inner)) return !1
      }
      return !0
    }
    const jz = [];

    function fz(vv, zv, Pv, hv, Sv, ev, gv) {
      let pv = hv % 2 ? 2 : 1;
      if (hv % 2 == Sv % 2)
        for (let dv = zv, Nv = 0; dv < Pv;) {
          let zv = !0,
            lv = !1;
          if (Nv == ev.length || dv < ev[Nv].from) {
            let vv = jz[dv];
            vv != pv && (zv = !1, lv = 16 == vv)
          }
          let Tv = zv || 1 != pv ? null : [],
            Wv = zv ? hv : hv + 1,
            wv = dv;
          vv: for (;;)
            if (Nv < ev.length && wv == ev[Nv].from) {
              if (lv) break vv;
              let av = ev[Nv];
              if (!zv)
                for (let vv = av.to, zv = Nv + 1;;) {
                  if (vv == Pv) break vv;
                  if (!(zv < ev.length && ev[zv].from == vv)) {
                    if (jz[vv] == pv) break vv;
                    break
                  }
                  vv = ev[zv++].to
                }
              if (Nv++, Tv) Tv.push(av);
              else {
                av.from > dv && gv.push(new Gz(dv, av.from, Wv)), Fz(vv, av.direction == lz != !(Wv % 2) ? hv + 1 : hv, Sv, av.inner, av.from, av.to, gv), dv = av.to
              }
              wv = av.to
            } else {
              if (wv == Pv || (zv ? jz[wv] != pv : jz[wv] == pv)) break;
              wv++
            } Tv ? fz(vv, dv, wv, hv + 1, Sv, Tv, gv) : dv < wv && gv.push(new Gz(dv, wv, Wv)), dv = wv
        } else
          for (let dv = Pv, Nv = ev.length; dv > zv;) {
            let Pv = !0,
              lv = !1;
            if (!Nv || dv > ev[Nv - 1].to) {
              let vv = jz[dv - 1];
              vv != pv && (Pv = !1, lv = 16 == vv)
            }
            let Tv = Pv || 1 != pv ? null : [],
              Wv = Pv ? hv : hv + 1,
              wv = dv;
            vv: for (;;)
              if (Nv && wv == ev[Nv - 1].to) {
                if (lv) break vv;
                let av = ev[--Nv];
                if (!Pv)
                  for (let vv = av.from, Pv = Nv;;) {
                    if (vv == zv) break vv;
                    if (!Pv || ev[Pv - 1].to != vv) {
                      if (jz[vv - 1] == pv) break vv;
                      break
                    }
                    vv = ev[--Pv].from
                  }
                if (Tv) Tv.push(av);
                else {
                  av.to < dv && gv.push(new Gz(av.to, dv, Wv)), Fz(vv, av.direction == lz != !(Wv % 2) ? hv + 1 : hv, Sv, av.inner, av.from, av.to, gv), dv = av.from
                }
                wv = av.from
              } else {
                if (wv == zv || (Pv ? jz[wv - 1] != pv : jz[wv - 1] == pv)) break;
                wv--
              } Tv ? fz(vv, wv, dv, hv + 1, Sv, Tv, gv) : wv < dv && gv.push(new Gz(wv, dv, Wv)), dv = wv
          }
    }

    function Fz(vv, zv, Pv, hv, Sv, ev, gv) {
      let pv = zv % 2 ? 2 : 1;
      ! function(vv, zv, Pv, hv, Sv) {
        for (let ev = 0; ev <= hv.length; ev++) {
          let gv = ev ? hv[ev - 1].to : zv,
            pv = ev < hv.length ? hv[ev].from : Pv,
            dv = ev ? 256 : Sv;
          for (let zv = gv, Pv = dv, hv = dv; zv < pv; zv++) {
            let Sv = iz(vv.charCodeAt(zv));
            512 == Sv ? Sv = Pv : 8 == Sv && 4 == hv && (Sv = 16), jz[zv] = 4 == Sv ? 2 : Sv, 7 & Sv && (hv = Sv), Pv = Sv
          }
          for (let vv = gv, zv = dv, hv = dv; vv < pv; vv++) {
            let Sv = jz[vv];
            if (128 == Sv) vv < pv - 1 && zv == jz[vv + 1] && 24 & zv ? Sv = jz[vv] = zv : jz[vv] = 256;
            else if (64 == Sv) {
              let Sv = vv + 1;
              for (; Sv < pv && 64 == jz[Sv];) Sv++;
              let ev = vv && 8 == zv || Sv < Pv && 8 == jz[Sv] ? 1 == hv ? 1 : 8 : 256;
              for (let zv = vv; zv < Sv; zv++) jz[zv] = ev;
              vv = Sv - 1
            } else 8 == Sv && 1 == hv && (jz[vv] = 1);
            zv = Sv, 7 & Sv && (hv = Sv)
          }
        }
      }(vv, Sv, ev, hv, pv),
      function(vv, zv, Pv, hv, Sv) {
        let ev = 1 == Sv ? 2 : 1;
        for (let gv = 0, pv = 0, dv = 0; gv <= hv.length; gv++) {
          let Nv = gv ? hv[gv - 1].to : zv,
            lv = gv < hv.length ? hv[gv].from : Pv;
          for (let zv, Pv, hv, gv = Nv; gv < lv; gv++)
            if (Pv = sz[zv = vv.charCodeAt(gv)])
              if (Pv < 0) {
                for (let vv = pv - 3; vv >= 0; vv -= 3)
                  if (Cz[vv + 1] == -Pv) {
                    let zv = Cz[vv + 2],
                      Pv = 2 & zv ? Sv : 4 & zv ? 1 & zv ? ev : Sv : 0;
                    Pv && (jz[gv] = jz[Cz[vv]] = Pv), pv = vv;
                    break
                  }
              } else {
                if (189 == Cz.length) break;
                Cz[pv++] = gv, Cz[pv++] = zv, Cz[pv++] = dv
              }
          else if (2 == (hv = jz[gv]) || 1 == hv) {
            let vv = hv == Sv;
            dv = vv ? 0 : 1;
            for (let zv = pv - 3; zv >= 0; zv -= 3) {
              let Pv = Cz[zv + 2];
              if (2 & Pv) break;
              if (vv) Cz[zv + 2] |= 2;
              else {
                if (4 & Pv) break;
                Cz[zv + 2] |= 4
              }
            }
          }
        }
      }(vv, Sv, ev, hv, pv),
      function(vv, zv, Pv, hv) {
        for (let Sv = 0, ev = hv; Sv <= Pv.length; Sv++) {
          let gv = Sv ? Pv[Sv - 1].to : vv,
            pv = Sv < Pv.length ? Pv[Sv].from : zv;
          for (let dv = gv; dv < pv;) {
            let gv = jz[dv];
            if (256 == gv) {
              let gv = dv + 1;
              for (;;)
                if (gv == pv) {
                  if (Sv == Pv.length) break;
                  gv = Pv[Sv++].to, pv = Sv < Pv.length ? Pv[Sv].from : zv
                } else {
                  if (256 != jz[gv]) break;
                  gv++
                } let Nv = 1 == ev,
                lv = Nv == (1 == (gv < zv ? jz[gv] : hv)) ? Nv ? 1 : 2 : hv;
              for (let zv = gv, hv = Sv, ev = hv ? Pv[hv - 1].to : vv; zv > dv;) zv == ev && (zv = Pv[--hv].from, ev = hv ? Pv[hv - 1].to : vv), jz[--zv] = lv;
              dv = gv
            } else ev = gv, dv++
          }
        }
      }(Sv, ev, hv, pv), fz(vv, Sv, ev, zv, Pv, hv, gv)
    }

    function Yz(vv, zv, Pv) {
      if (!vv) return [new Gz(0, 0, zv == Tz ? 1 : 0)];
      if (zv == lz && !Pv.length && !cz.test(vv)) return nz(vv.length);
      if (Pv.length)
        for (; vv.length > jz.length;) jz[jz.length] = 256;
      let hv = [],
        Sv = zv == lz ? 0 : 1;
      return Fz(vv, Sv, Sv, Pv, 0, vv.length, hv), hv
    }

    function nz(vv) {
      return [new Gz(0, vv, 0)]
    }
    let Oz = "";

    function Dz(vv, zv, Pv, Sv, ev) {
      var gv;
      let pv = Sv.head - vv.from,
        dv = Gz.find(zv, pv, null !== (gv = Sv.bidiLevel) && void 0 !== gv ? gv : -1, Sv.assoc),
        Nv = zv[dv],
        lv = Nv.side(ev, Pv);
      if (pv == lv) {
        let vv = dv += ev ? 1 : -1;
        if (vv < 0 || vv >= zv.length) return null;
        Nv = zv[dv = vv], pv = Nv.side(!ev, Pv), lv = Nv.side(ev, Pv)
      }
      let Tv = (0, hv.W)(vv.text, pv, Nv.forward(ev, Pv));
      (Tv < Nv.from || Tv > Nv.to) && (Tv = lv), Oz = vv.text.slice(Math.min(pv, Tv), Math.max(pv, Tv));
      let Wv = dv == (ev ? zv.length - 1 : 0) ? null : zv[dv + (ev ? 1 : -1)];
      return Wv && Tv == lv && Wv.level + (ev ? 0 : 1) < Nv.level ? hv.j.cursor(Wv.side(!ev, Pv) + vv.from, Wv.forward(ev, Pv) ? 1 : -1, Wv.level) : hv.j.cursor(Tv + vv.from, Nv.forward(ev, Pv) ? -1 : 1, Nv.level)
    }

    function Kz(vv, zv, Pv) {
      for (let hv = zv; hv < Pv; hv++) {
        let zv = iz(vv.charCodeAt(hv));
        if (1 == zv) return lz;
        if (2 == zv || 4 == zv) return Tz
      }
      return lz
    }
    const Vz = hv.q.define(),
      Uz = hv.q.define(),
      Rz = hv.q.define(),
      xz = hv.q.define(),
      tz = hv.q.define(),
      qz = hv.q.define(),
      Iz = hv.q.define(),
      Qz = hv.q.define(),
      Zz = hv.q.define(),
      Az = hv.q.define({
        combine: vv => vv.some((vv => vv))
      }),
      Lz = hv.q.define({
        combine: vv => vv.some((vv => vv))
      }),
      Hz = hv.q.define();
    class Mz {
      constructor(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = vv, this.y = zv, this.x = Pv, this.yMargin = hv, this.xMargin = Sv, this.isSnapshot = ev
      }
      map(vv) {
        return vv.empty ? this : new Mz(this.range.map(vv), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(vv) {
        return this.range.to <= vv.doc.length ? this : new Mz(hv.j.cursor(vv.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const yz = hv.B.define({
        map: (vv, zv) => vv.map(zv)
      }),
      Bz = hv.B.define();

    function Jz(vv, zv, Pv) {
      let hv = vv.facet(xz);
      hv.length ? hv[0](zv) : window.onerror && window.onerror(String(zv), Pv, void 0, void 0, zv) || (Pv ? console.error(Pv + ":", zv) : console.error(zv))
    }
    const Ez = hv.q.define({
      combine: vv => !vv.length || vv[0]
    });
    let oz = 0;
    const bz = hv.q.define({
      combine: vv => vv.filter(((zv, Pv) => {
        for (let hv = 0; hv < Pv; hv++)
          if (vv[hv].plugin == zv.plugin) return !1;
        return !0
      }))
    });
    class rz {
      constructor(vv, zv, Pv, hv, Sv) {
        this.id = vv, this.create = zv, this.domEventHandlers = Pv, this.domEventObservers = hv, this.baseExtensions = Sv(this), this.extension = this.baseExtensions.concat(bz.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(vv) {
        return this.baseExtensions.concat(bz.of({
          plugin: this,
          arg: vv
        }))
      }
      static define(vv, zv) {
        const {
          eventHandlers: Pv,
          eventObservers: hv,
          provide: Sv,
          de: ev
        } = zv || {};
        return new rz(oz++, vv, Pv, hv, (vv => {
          let zv = [];
          return ev && zv.push(vP.of((zv => {
            let Pv = zv.plugin(vv);
            return Pv ? ev(Pv) : Rv.none
          }))), Sv && zv.push(Sv(vv)), zv
        }))
      }
      static fromClass(vv, zv) {
        return rz.define(((zv, Pv) => new vv(zv, Pv)), zv)
      }
    }
    class kz {
      constructor(vv) {
        this.spec = vv, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(vv) {
        if (this.value) {
          if (this.mustUpdate) {
            let vv = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(vv)
            } catch (zv) {
              if (Jz(vv.state, zv, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (Pv) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(vv, this.spec.arg)
        } catch (zv) {
          Jz(vv.state, zv, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(vv) {
        var zv;
        if (null === (zv = this.value) || void 0 === zv ? void 0 : zv.destroy) try {
          this.value.destroy()
        } catch (Pv) {
          Jz(vv.state, Pv, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const Xz = hv.q.define(),
      uz = hv.q.define(),
      vP = hv.q.define(),
      zP = hv.q.define(),
      PP = hv.q.define(),
      hP = hv.q.define(),
      SP = hv.q.define();

    function eP(vv, zv) {
      let Pv = vv.state.facet(SP);
      if (!Pv.length) return Pv;
      let Sv = Pv.map((zv => zv instanceof Function ? zv(vv) : zv)),
        ev = [];
      return hv.y.spans(Sv, zv.from, zv.to, {
        point() {},
        span(vv, Pv, hv, Sv) {
          let gv = vv - zv.from,
            pv = Pv - zv.from,
            dv = ev;
          for (let ev = hv.length - 1; ev >= 0; ev--, Sv--) {
            let vv, Pv = hv[ev].spec.bidiIsolate;
            if (null == Pv && (Pv = Kz(zv.text, gv, pv)), Sv > 0 && dv.length && (vv = dv[dv.length - 1]).to == gv && vv.direction == Pv) vv.to = pv, dv = vv.inner;
            else {
              let vv = {
                from: gv,
                to: pv,
                direction: Pv,
                inner: []
              };
              dv.push(vv), dv = vv.inner
            }
          }
        }
      }), ev
    }
    const gP = hv.q.define();

    function pP(vv) {
      let zv = 0,
        Pv = 0,
        hv = 0,
        Sv = 0;
      for (let ev of vv.state.facet(gP)) {
        let gv = ev(vv);
        gv && (null != gv.left && (zv = Math.max(zv, gv.left)), null != gv.right && (Pv = Math.max(Pv, gv.right)), null != gv.top && (hv = Math.max(hv, gv.top)), null != gv.bottom && (Sv = Math.max(Sv, gv.bottom)))
      }
      return {
        left: zv,
        right: Pv,
        top: hv,
        bottom: Sv
      }
    }
    const dP = hv.q.define();
    class NP {
      constructor(vv, zv, Pv, hv) {
        this.fromA = vv, this.toA = zv, this.fromB = Pv, this.toB = hv
      }
      join(vv) {
        return new NP(Math.min(this.fromA, vv.fromA), Math.max(this.toA, vv.toA), Math.min(this.fromB, vv.fromB), Math.max(this.toB, vv.toB))
      }
      addToSet(vv) {
        let zv = vv.length,
          Pv = this;
        for (; zv > 0; zv--) {
          let hv = vv[zv - 1];
          if (!(hv.fromA > Pv.toA)) {
            if (hv.toA < Pv.fromA) break;
            Pv = Pv.join(hv), vv.splice(zv - 1, 1)
          }
        }
        return vv.splice(zv, 0, Pv), vv
      }
      static extendWithRanges(vv, zv) {
        if (0 == zv.length) return vv;
        let Pv = [];
        for (let hv = 0, Sv = 0, ev = 0;;) {
          let gv = hv < vv.length ? vv[hv].fromB : 1e9,
            pv = Sv < zv.length ? zv[Sv] : 1e9,
            dv = Math.min(gv, pv);
          if (1e9 == dv) break;
          let Nv = dv + ev,
            lv = dv,
            Tv = Nv;
          for (;;)
            if (Sv < zv.length && zv[Sv] <= lv) {
              let Pv = zv[Sv + 1];
              Sv += 2, lv = Math.max(lv, Pv);
              for (let zv = hv; zv < vv.length && vv[zv].fromB <= lv; zv++) ev = vv[zv].toA - vv[zv].toB;
              Tv = Math.max(Tv, Pv + ev)
            } else {
              if (!(hv < vv.length && vv[hv].fromB <= lv)) break;
              {
                let zv = vv[hv++];
                lv = Math.max(lv, zv.toB), Tv = Math.max(Tv, zv.toA), ev = zv.toA - zv.toB
              }
            } Pv.push(new NP(Nv, Tv, dv, lv))
        }
        return Pv
      }
    }
    class lP {
      constructor(vv, zv, Pv) {
        this.view = vv, this.state = zv, this.transactions = Pv, this.flags = 0, this.startState = vv.state, this.changes = hv.ChangeSet.empty(this.startState.doc.length);
        for (let hv of Pv) this.changes = this.changes.compose(hv.changes);
        let Sv = [];
        this.changes.iterChangedRanges(((vv, zv, Pv, hv) => Sv.push(new NP(vv, zv, Pv, hv)))), this.changedRanges = Sv
      }
      static create(vv, zv, Pv) {
        return new lP(vv, zv, Pv)
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
        return this.transactions.some((vv => vv.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const TP = [];
    class WP {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = vv, this.length = zv, this.flags = Pv, this.parent = null, vv.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return TP
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
      sync(vv) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let vv = this.domAttrs;
          vv && function(vv, zv) {
            for (let Pv = vv.attributes.length - 1; Pv >= 0; Pv--) {
              let hv = vv.attributes[Pv].name;
              null == zv[hv] && vv.removeAttribute(hv)
            }
            for (let Pv in zv) {
              let hv = zv[Pv];
              "style" == Pv ? vv.style.cssText = hv : vv.getAttribute(Pv) != hv && vv.setAttribute(Pv, hv)
            }
          }(this.dom, vv)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(vv) {
        this.dom = vv, vv.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let Pv of this.children) {
          if (Pv == vv) return zv;
          zv += Pv.length + Pv.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(vv) {
        return this.posBefore(vv) + vv.length
      }
      covers(vv) {
        return !0
      }
      coordsIn(vv, zv) {
        return null
      }
      domPosFor(vv, zv) {
        let Pv = Bv(this.dom),
          hv = this.length ? vv > 0 : zv > 0;
        return new dz(this.parent.dom, Pv + (hv ? 1 : 0), 0 == vv || vv == this.length)
      }
      markDirty(vv) {
        this.flags &= -3, vv && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let vv = this; vv; vv = vv.parent)
          if (vv instanceof sP) return vv;
        return null
      }
      static get(vv) {
        return vv.cmTile
      }
    }
    class wP extends WP {
      constructor(vv) {
        super(vv, 0), this._children = []
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
      append(vv) {
        this.children.push(vv), vv.parent = this
      }
      sync(vv) {
        if (2 & this.flags) return;
        super.sync(vv);
        let zv, Pv = this.dom,
          hv = null,
          Sv = (null === vv || void 0 === vv ? void 0 : vv.node) == Pv ? vv : null,
          ev = 0;
        for (let gv of this.children) {
          if (gv.sync(vv), ev += gv.length + gv.breakAfter, zv = hv ? hv.nextSibling : Pv.firstChild, Sv && zv != gv.dom && (Sv.written = !0), gv.dom.parentNode == Pv)
            for (; zv && zv != gv.dom;) zv = aP(zv);
          else Pv.insertBefore(gv.dom, zv);
          hv = gv.dom
        }
        for (zv = hv ? hv.nextSibling : Pv.firstChild, Sv && zv && (Sv.written = !0); zv;) zv = aP(zv);
        this.length = ev
      }
    }

    function aP(vv) {
      let zv = vv.nextSibling;
      return vv.parentNode.removeChild(vv), zv
    }
    class sP extends wP {
      constructor(vv, zv) {
        super(zv), this.view = vv
      }
      owns(vv) {
        for (; vv; vv = vv.parent)
          if (vv == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(vv) {
        for (;;) {
          if (!vv) return null;
          let zv = WP.get(vv);
          if (zv && this.owns(zv)) return zv;
          vv = vv.parentNode
        }
      }
      blockTiles(vv) {
        for (let zv = [], Pv = this, hv = 0, Sv = 0;;)
          if (hv == Pv.children.length) {
            if (!zv.length) return;
            Pv = Pv.parent, Pv.breakAfter && Sv++, hv = zv.pop()
          } else {
            let ev = Pv.children[hv++];
            if (ev instanceof CP) zv.push(hv), Pv = ev, hv = 0;
            else {
              let zv = Sv + ev.length,
                Pv = vv(ev, Sv);
              if (void 0 !== Pv) return Pv;
              Sv = zv + ev.breakAfter
            }
          }
      }
      resolveBlock(vv, zv) {
        let Pv, hv, Sv = -1,
          ev = -1;
        if (this.blockTiles(((gv, pv) => {
            let dv = pv + gv.length;
            if (vv >= pv && vv <= dv) {
              if (gv.isWidget() && zv >= -1 && zv <= 1) {
                if (32 & gv.flags) return !0;
                16 & gv.flags && (Pv = void 0)
              }(pv < vv || vv == dv && (zv < -1 ? gv.length : gv.covers(1))) && (!Pv || !gv.isWidget() && Pv.isWidget()) && (Pv = gv, Sv = vv - pv), (dv > vv || vv == pv && (zv > 1 ? gv.length : gv.covers(-1))) && (!hv || !gv.isWidget() && hv.isWidget()) && (hv = gv, ev = vv - pv)
            }
          })), !Pv && !hv) throw new Error("No tile at position " + vv);
        return Pv && zv < 0 || !hv ? {
          tile: Pv,
          offset: Sv
        } : {
          tile: hv,
          offset: ev
        }
      }
    }
    class CP extends wP {
      constructor(vv, zv) {
        super(vv), this.wrapper = zv
      }
      isBlock() {
        return !0
      }
      covers(vv) {
        return !!this.children.length && (vv < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (vv, zv) {
        let Pv = new CP(zv || document.createElement(vv.tagName), vv);
        return zv || (Pv.flags |= 4), Pv
      }
    }
    class iP extends wP {
      constructor(vv, zv) {
        super(vv), this.attrs = zv
      }
      isLine() {
        return !0
      }
      static start(vv, zv, Pv) {
        let hv = new iP(zv || document.createElement("div"), vv);
        return zv && Pv || (hv.flags |= 4), hv
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(vv, zv, Pv) {
        let hv = null,
          Sv = -1,
          ev = null,
          gv = -1;
        ! function vv(pv, dv) {
          for (let Nv = 0, lv = 0; Nv < pv.children.length && lv <= dv; Nv++) {
            let Tv = pv.children[Nv],
              Wv = lv + Tv.length;
            Wv >= dv && (Tv.isComposite() ? vv(Tv, dv - lv) : (!ev || ev.isHidden && (zv > 0 || Pv && cP(ev, Tv))) && (Wv > dv || 32 & Tv.flags) ? (ev = Tv, gv = dv - lv) : (lv < dv || 16 & Tv.flags && !Tv.isHidden) && (hv = Tv, Sv = dv - lv)), lv = Wv
          }
        }(this, vv);
        let pv = (zv < 0 ? hv : ev) || hv || ev;
        return pv ? {
          tile: pv,
          offset: pv == hv ? Sv : gv
        } : null
      }
      coordsIn(vv, zv) {
        let Pv = this.resolveInline(vv, zv, !0);
        return Pv ? Pv.tile.coordsIn(Math.max(0, Pv.offset), zv) : function(vv) {
          let zv = vv.dom.lastChild;
          if (!zv) return vv.dom.getBoundingClientRect();
          let Pv = Mv(zv);
          return Pv[Pv.length - 1] || null
        }(this)
      }
      domIn(vv, zv) {
        let Pv = this.resolveInline(vv, zv);
        if (Pv) {
          let {
            tile: vv,
            offset: hv
          } = Pv;
          if (this.dom.contains(vv.dom)) return vv.isText() ? new dz(vv.dom, Math.min(vv.dom.nodeValue.length, hv)) : vv.domPosFor(hv, 16 & vv.flags ? 1 : 32 & vv.flags ? -1 : zv);
          let Sv = Pv.tile.parent,
            ev = !1;
          for (let zv of Sv.children) {
            if (ev) return new dz(zv.dom, 0);
            zv == Pv.tile && (ev = !0)
          }
        }
        return new dz(this.dom, 0)
      }
    }

    function cP(vv, zv) {
      let Pv = vv.coordsIn(0, 1),
        hv = zv.coordsIn(0, 1);
      return Pv && hv && hv.top < Pv.bottom
    }
    class GP extends wP {
      constructor(vv, zv) {
        super(vv), this.mark = zv
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (vv, zv) {
        let Pv = new GP(zv || document.createElement(vv.tagName), vv);
        return zv || (Pv.flags |= 4), Pv
      }
    }
    class mP extends WP {
      constructor(vv, zv) {
        super(vv, zv.length), this.text = zv
      }
      sync(vv) {
        2 & this.flags || (super.sync(vv), this.dom.nodeValue != this.text && (vv && vv.node == this.dom && (vv.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(vv, zv) {
        let Pv = this.dom.nodeValue.length;
        vv > Pv && (vv = Pv);
        let hv = vv,
          Sv = vv,
          ev = 0;
        0 == vv && zv < 0 || vv == Pv && zv >= 0 ? Fv.chrome || Fv.gecko || (vv ? (hv--, ev = 1) : Sv < Pv && (Sv++, ev = -1)) : zv < 0 ? hv-- : Sv < Pv && Sv++;
        let gv = hz(this.dom, hv, Sv).getClientRects();
        if (!gv.length) return null;
        let pv = gv[(ev ? ev < 0 : zv >= 0) ? 0 : gv.length - 1];
        return Fv.safari && !ev && 0 == pv.width && (pv = Array.prototype.find.call(gv, (vv => vv.width)) || pv), ev ? bv(pv, ev < 0) : pv || null
      }
      static of (vv, zv) {
        let Pv = new mP(zv || document.createTextNode(vv), vv);
        return zv || (Pv.flags |= 2), Pv
      }
    }
    class jP extends WP {
      constructor(vv, zv, Pv, hv) {
        super(vv, zv, hv), this.widget = Pv
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(vv) {
        return !(48 & this.flags) && (this.flags & (vv < 0 ? 64 : 128)) > 0
      }
      coordsIn(vv, zv) {
        return this.coordsInWidget(vv, zv, !1)
      }
      coordsInWidget(vv, zv, Pv) {
        let hv = this.widget.coordsAt(this.dom, vv, zv);
        if (hv) return hv;
        if (Pv) return bv(this.dom.getBoundingClientRect(), this.length ? 0 == vv : zv <= 0);
        {
          let zv = this.dom.getClientRects(),
            Pv = null;
          if (!zv.length) return null;
          let hv = !!(16 & this.flags) || !(32 & this.flags) && vv > 0;
          for (let Sv = hv ? zv.length - 1 : 0; Pv = zv[Sv], !(vv > 0 ? 0 == Sv : Sv == zv.length - 1 || Pv.top < Pv.bottom); Sv += hv ? -1 : 1);
          return bv(Pv, !hv)
        }
      }
      get overrideDOMText() {
        if (!this.length) return hv.H.empty;
        let {
          root: vv
        } = this;
        if (!vv) return hv.H.empty;
        let zv = this.posAtStart;
        return vv.view.state.doc.slice(zv, zv + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (vv, zv, Pv, hv, Sv) {
        return Sv || (Sv = vv.toDOM(zv), vv.editable || (Sv.contentEditable = "false")), new jP(Sv, Pv, vv, hv)
      }
    }
    class fP extends WP {
      constructor(vv) {
        let zv = document.createElement("img");
        zv.className = "cm-widgetBuffer", zv.setAttribute("aria-hidden", "true"), super(zv, 0, vv)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return hv.H.empty
      }
      coordsIn(vv) {
        return this.dom.getBoundingClientRect()
      }
    }
    class FP {
      constructor(vv) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = vv
      }
      advance(vv, zv, Pv) {
        let {
          tile: hv,
          index: Sv,
          beforeBreak: ev,
          parents: gv
        } = this;
        for (; vv || zv > 0;)
          if (hv.isComposite())
            if (ev) {
              if (!vv) break;
              Pv && Pv.break(), vv--, ev = !1
            } else if (Sv == hv.children.length) {
          if (!vv && !gv.length) break;
          Pv && Pv.leave(hv), ev = !!hv.breakAfter, ({
            tile: hv,
            index: Sv
          } = gv.pop()), Sv++
        } else {
          let pv = hv.children[Sv],
            dv = pv.breakAfter;
          !(zv > 0 ? pv.length <= vv : pv.length < vv) || Pv && !1 === Pv.skip(pv, 0, pv.length) && pv.isComposite ? (gv.push({
            tile: hv,
            index: Sv
          }), hv = pv, Sv = 0, Pv && pv.isComposite() && Pv.enter(pv)) : (ev = !!dv, Sv++, vv -= pv.length)
        } else if (Sv == hv.length) ev = !!hv.breakAfter, ({
          tile: hv,
          index: Sv
        } = gv.pop()), Sv++;
        else {
          if (!vv) break;
          {
            let zv = Math.min(vv, hv.length - Sv);
            Pv && Pv.skip(hv, Sv, Sv + zv), vv -= zv, Sv += zv
          }
        }
        return this.tile = hv, this.index = Sv, this.beforeBreak = ev, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class YP {
      constructor(vv, zv, Pv, hv) {
        this.from = vv, this.to = zv, this.wrapper = Pv, this.rank = hv
      }
    }
    class nP {
      constructor(vv, zv, Pv) {
        this.cache = vv, this.root = zv, this.blockWrappers = Pv, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(vv, zv, Pv, hv) {
        var Sv;
        this.flushBuffer();
        let ev = this.ensureMarks(zv, Pv),
          gv = ev.lastChild;
        if (gv && gv.isText() && !(8 & gv.flags) && gv.length + vv.length < 512) {
          this.cache.reused.set(gv, 2), (ev.children[ev.children.length - 1] = new mP(gv.dom, gv.text + vv)).parent = ev
        } else ev.append(hv || mP.of(vv, null === (Sv = this.cache.find(mP)) || void 0 === Sv ? void 0 : Sv.dom));
        this.pos += vv.length, this.afterWidget = null
      }
      addComposition(vv, zv) {
        let Pv = this.curLine;
        Pv.dom != zv.line.dom && (Pv.setDOM(this.cache.reused.has(zv.line) ? xP(zv.line.dom) : zv.line.dom), this.cache.reused.set(zv.line, 2));
        let hv = Pv;
        for (let gv = zv.marks.length - 1; gv >= 0; gv--) {
          let vv = zv.marks[gv],
            Pv = hv.lastChild;
          if (Pv instanceof GP && Pv.mark.eq(vv.mark)) Pv.dom != vv.dom && Pv.setDOM(xP(vv.dom)), hv = Pv;
          else {
            if (this.cache.reused.get(vv)) {
              let zv = WP.get(vv.dom);
              zv && zv.setDOM(xP(vv.dom))
            }
            let zv = GP.of(vv.mark, vv.dom);
            hv.append(zv), hv = zv
          }
          this.cache.reused.set(vv, 2)
        }
        let Sv = WP.get(vv.text);
        Sv && this.cache.reused.set(Sv, 2);
        let ev = new mP(vv.text, vv.text.nodeValue);
        ev.flags |= 8, hv.append(ev)
      }
      addInlineWidget(vv, zv, Pv) {
        let hv = this.afterWidget && 48 & vv.flags && (48 & this.afterWidget.flags) == (48 & vv.flags);
        hv || this.flushBuffer();
        let Sv = this.ensureMarks(zv, Pv);
        hv || 16 & vv.flags || Sv.append(this.getBuffer(1)), Sv.append(vv), this.pos += vv.length, this.afterWidget = vv
      }
      addMark(vv, zv, Pv) {
        this.flushBuffer(), this.ensureMarks(zv, Pv).append(vv), this.pos += vv.length, this.afterWidget = null
      }
      addBlockWidget(vv) {
        this.getBlockPos().append(vv), this.pos += vv.length, this.lastBlock = vv, this.endLine()
      }
      continueWidget(vv) {
        (this.afterWidget || this.lastBlock).length += vv, this.pos += vv
      }
      addLineStart(vv, zv) {
        var Pv;
        vv || (vv = RP);
        let hv = iP.start(vv, zv || (null === (Pv = this.cache.find(iP)) || void 0 === Pv ? void 0 : Pv.dom), !!zv);
        this.getBlockPos().append(this.lastBlock = this.curLine = hv)
      }
      addLine(vv) {
        this.getBlockPos().append(vv), this.pos += vv.length, this.lastBlock = vv, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(vv) {
        this.blockPosCovered() || this.addLineStart(vv)
      }
      ensureLine(vv) {
        this.curLine || this.addLineStart(vv)
      }
      ensureMarks(vv, zv) {
        var Pv;
        let hv = this.curLine;
        for (let Sv = vv.length - 1; Sv >= 0; Sv--) {
          let ev, gv = vv[Sv];
          if (zv > 0 && (ev = hv.lastChild) && ev instanceof GP && ev.mark.eq(gv)) hv = ev, zv--;
          else {
            let vv = GP.of(gv, null === (Pv = this.cache.find(GP, (vv => vv.mark.eq(gv)))) || void 0 === Pv ? void 0 : Pv.dom);
            hv.append(vv), hv = vv, zv = 0
          }
        }
        return hv
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let vv = this.curLine.lastChild;
          vv && UP(this.curLine, !1) && ("BR" == vv.dom.nodeName || !vv.isWidget() || Fv.ios && UP(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(qP, 0, 32) || new jP(qP.toDOM(), 0, qP, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let vv = this.wrappers.length - 1; vv >= 0; vv--) this.wrappers[vv].to < this.pos && this.wrappers.splice(vv, 1);
        for (let vv = this.blockWrappers; vv.value && vv.from <= this.pos; vv.next())
          if (vv.to >= this.pos) {
            let zv = new YP(vv.from, vv.to, vv.value, vv.rank),
              Pv = this.wrappers.length;
            for (; Pv > 0 && (this.wrappers[Pv - 1].rank - zv.rank || this.wrappers[Pv - 1].to - zv.to) < 0;) Pv--;
            this.wrappers.splice(Pv, 0, zv)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var vv;
        this.updateBlockWrappers();
        let zv = this.root;
        for (let Pv of this.wrappers) {
          let hv = zv.lastChild;
          if (Pv.from < this.pos && hv instanceof CP && hv.wrapper.eq(Pv.wrapper)) zv = hv;
          else {
            let hv = CP.of(Pv.wrapper, null === (vv = this.cache.find(CP, (vv => vv.wrapper.eq(Pv.wrapper)))) || void 0 === vv ? void 0 : vv.dom);
            zv.append(hv), zv = hv
          }
        }
        return zv
      }
      blockPosCovered() {
        let vv = this.lastBlock;
        return null != vv && !vv.breakAfter && (!vv.isWidget() || (160 & vv.flags) > 0)
      }
      getBuffer(vv) {
        let zv = 2 | (vv < 0 ? 16 : 32),
          Pv = this.cache.find(fP, void 0, 1);
        return Pv && (Pv.flags = zv), Pv || new fP(zv)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class OP {
      constructor(vv) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = vv.iter()
      }
      skip(vv) {
        this.textOff + vv <= this.text.length ? this.textOff += vv : (this.skipCount += vv - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(vv) {
        if (this.textOff == this.text.length) {
          let {
            value: zv,
            lineBreak: Pv,
            done: hv
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, hv) throw new Error("Ran out of text content when drawing inline views");
          this.text = zv;
          let Sv = this.textOff = Math.min(vv, zv.length);
          return Pv ? null : zv.slice(0, Sv)
        }
        let zv = Math.min(this.text.length, this.textOff + vv),
          Pv = this.text.slice(this.textOff, zv);
        return this.textOff = zv, Pv
      }
    }
    const DP = [jP, iP, mP, GP, fP, CP, sP];
    for (let Ug = 0; Ug < DP.length; Ug++) DP[Ug].bucket = Ug;
    class KP {
      constructor(vv) {
        this.view = vv, this.buckets = DP.map((() => [])), this.index = DP.map((() => 0)), this.reused = new Map
      }
      add(vv) {
        let zv = vv.constructor.bucket,
          Pv = this.buckets[zv];
        Pv.length < 6 ? Pv.push(vv) : Pv[this.index[zv] = (this.index[zv] + 1) % 6] = vv
      }
      find(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          hv = vv.bucket,
          Sv = this.buckets[hv],
          ev = this.index[hv];
        for (let gv = Sv.length - 1; gv >= 0; gv--) {
          let vv = (gv + ev) % Sv.length,
            pv = Sv[vv];
          if ((!zv || zv(pv)) && !this.reused.has(pv)) return Sv.splice(vv, 1), vv < ev && this.index[hv]--, this.reused.set(pv, Pv), pv
        }
        return null
      }
      findWidget(vv, zv, Pv) {
        let hv = this.buckets[0];
        if (hv.length)
          for (let Sv = 0, ev = 0;; Sv++) {
            if (Sv == hv.length) {
              if (ev) return null;
              ev = 1, Sv = 0
            }
            let gv = hv[Sv];
            if (!this.reused.has(gv) && (0 == ev ? gv.widget.compare(vv) : gv.widget.constructor == vv.constructor && vv.updateDOM(gv.dom, this.view, gv.widget))) return hv.splice(Sv, 1), Sv < this.index[0] && this.index[0]--, gv.widget == vv && gv.length == zv && (497 & gv.flags) == Pv ? (this.reused.set(gv, 1), gv) : (this.reused.set(gv, 2), new jP(gv.dom, zv, vv, -498 & gv.flags | Pv))
          }
      }
      reuse(vv) {
        return this.reused.set(vv, 1), vv
      }
      maybeReuse(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(vv)) return this.reused.set(vv, zv), vv.dom
      }
      clear() {
        for (let vv = 0; vv < this.buckets.length; vv++) this.buckets[vv].length = this.index[vv] = 0
      }
    }
    class VP {
      constructor(vv, zv, Pv, Sv, ev) {
        this.view = vv, this.de = Sv, this.disallowBlockEffectsFor = ev, this.openWidget = !1, this.openMarks = 0, this.cache = new KP(vv), this.text = new OP(vv.state.doc), this.builder = new nP(this.cache, new sP(vv, vv.contentDOM), hv.y.iter(Pv)), this.cache.reused.set(zv, 2), this.old = new FP(zv), this.reuseWalker = {
          skip: (vv, zv, Pv) => {
            if (this.cache.add(vv), vv.isComposite()) return !1
          },
          enter: vv => this.cache.add(vv),
          leave: () => {},
          break: () => {}
        }
      }
      run(vv, zv) {
        let Pv = zv && this.getCompositionContext(zv.text);
        for (let hv = 0, Sv = 0, ev = 0;;) {
          let gv = ev < vv.length ? vv[ev++] : null,
            pv = gv ? gv.fromA : this.old.root.length;
          if (pv > hv) {
            let vv = pv - hv;
            this.preserve(vv, !ev, !gv), hv = pv, Sv += vv
          }
          if (!gv) break;
          zv && gv.fromA <= zv.range.fromA && gv.toA >= zv.range.toA ? (this.forward(gv.fromA, zv.range.fromA, zv.range.fromA < zv.range.toA ? 1 : -1), this.emit(Sv, zv.range.fromB), this.cache.clear(), this.builder.addComposition(zv, Pv), this.text.skip(zv.range.toB - zv.range.fromB), this.forward(zv.range.fromA, gv.toA), this.emit(zv.range.toB, gv.toB)) : (this.forward(gv.fromA, gv.toA), this.emit(Sv, gv.toB)), Sv = gv.toB, hv = gv.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(vv, zv, Pv) {
        let hv = function(vv) {
            let zv = [];
            for (let Pv = vv.parents.length; Pv > 1; Pv--) {
              let hv = Pv == vv.parents.length ? vv.tile : vv.parents[Pv].tile;
              hv instanceof GP && zv.push(hv.mark)
            }
            return zv
          }(this.old),
          Sv = this.openMarks;
        this.old.advance(vv, Pv ? 1 : -1, {
          skip: (vv, zv, Pv) => {
            if (vv.isWidget())
              if (this.openWidget) this.builder.continueWidget(Pv - zv);
              else {
                let ev = Pv > 0 || zv < vv.length ? jP.of(vv.widget, this.view, Pv - zv, 496 & vv.flags, this.cache.maybeReuse(vv)) : this.cache.reuse(vv);
                256 & ev.flags ? (ev.flags &= -2, this.builder.addBlockWidget(ev)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(ev, hv, Sv), Sv = hv.length)
              }
            else if (vv.isText()) this.builder.ensureLine(null), zv || Pv != vv.length || this.cache.reused.has(vv) ? (this.cache.add(vv), this.builder.addText(vv.text.slice(zv, Pv), hv, Sv)) : this.builder.addText(vv.text, hv, Sv, this.cache.reuse(vv)), Sv = hv.length;
            else if (vv.isLine()) vv.flags &= -2, this.cache.reused.set(vv, 1), this.builder.addLine(vv);
            else if (vv instanceof fP) this.cache.add(vv);
            else {
              if (!(vv instanceof GP)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(vv, hv, Sv), this.cache.reused.set(vv, 1), Sv = hv.length
            }
            this.openWidget = !1
          },
          enter: vv => {
            vv.isLine() ? this.builder.addLineStart(vv.attrs, this.cache.maybeReuse(vv)) : (this.cache.add(vv), vv instanceof GP && hv.unshift(vv.mark)), this.openWidget = !1
          },
          leave: vv => {
            vv.isLine() ? hv.length && (hv.length = Sv = 0) : vv instanceof GP && (hv.shift(), Sv = Math.min(Sv, hv.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(vv)
      }
      emit(vv, zv) {
        let Pv = null,
          Sv = this.builder,
          ev = 0,
          gv = hv.y.spans(this.de, vv, zv, {
            point: (vv, zv, hv, gv, pv, dv) => {
              if (hv instanceof qv) {
                if (this.disallowBlockEffectsFor[dv]) {
                  if (hv.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (zv > this.view.state.doc.lineAt(vv).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (ev = gv.length, pv > gv.length) Sv.continueWidget(zv - vv);
                else {
                  let ev = hv.widget || (hv.block ? tP.block : tP.inline),
                    dv = function(vv) {
                      let zv = vv.isReplace ? (vv.startSide < 0 ? 64 : 0) | (vv.endSide > 0 ? 128 : 0) : vv.startSide > 0 ? 32 : 16;
                      vv.block && (zv |= 256);
                      return zv
                    }(hv),
                    Nv = this.cache.findWidget(ev, zv - vv, dv) || jP.of(ev, this.view, zv - vv, dv);
                  hv.block ? (hv.startSide > 0 && Sv.addLineStartIfNotCovered(Pv), Sv.addBlockWidget(Nv)) : (Sv.ensureLine(Pv), Sv.addInlineWidget(Nv, gv, pv))
                }
                Pv = null
              } else Pv = function(vv, zv) {
                let Pv = zv.spec.attributes,
                  hv = zv.spec.class;
                if (!Pv && !hv) return vv;
                vv || (vv = {
                  class: "cm-line"
                });
                Pv && Yv(Pv, vv);
                hv && (vv.class += " " + hv);
                return vv
              }(Pv, hv);
              zv > vv && this.text.skip(zv - vv)
            },
            span: (vv, zv, hv, ev) => {
              for (let gv = vv; gv < zv;) {
                let pv = this.text.next(Math.min(512, zv - gv));
                null == pv ? (Sv.addLineStartIfNotCovered(Pv), Sv.addBreak(), gv++) : (Sv.ensureLine(Pv), Sv.addText(pv, hv, gv == vv ? ev : hv.length), gv += pv.length), Pv = null
              }
            }
          });
        Sv.addLineStartIfNotCovered(Pv), this.openWidget = gv > ev, this.openMarks = gv
      }
      forward(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        zv - vv <= 10 ? this.old.advance(zv - vv, Pv, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(zv - vv - 10, -1), this.old.advance(5, Pv, this.reuseWalker))
      }
      getCompositionContext(vv) {
        let zv = [],
          Pv = null;
        for (let hv = vv.parentNode;; hv = hv.parentNode) {
          let vv = WP.get(hv);
          if (hv == this.view.contentDOM) break;
          vv instanceof GP ? zv.push(vv) : (null === vv || void 0 === vv ? void 0 : vv.isLine()) ? Pv = vv : vv instanceof CP || ("DIV" != hv.nodeName || Pv || hv == this.view.contentDOM ? Pv || zv.push(GP.of(new xv({
            tagName: hv.nodeName.toLowerCase(),
            attributes: Kv(hv)
          }), hv)) : Pv = new iP(hv, RP))
        }
        return {
          line: Pv,
          marks: zv
        }
      }
    }

    function UP(vv, zv) {
      let Pv = vv => {
        for (let hv of vv.children)
          if ((zv ? hv.isText() : hv.length) || Pv(hv)) return !0;
        return !1
      };
      return Pv(vv)
    }
    const RP = {
      class: "cm-line"
    };

    function xP(vv) {
      let zv = WP.get(vv);
      return zv && zv.setDOM(vv.cloneNode()), vv
    }
    class tP extends Vv {
      constructor(vv) {
        super(), this.tag = vv
      }
      eq(vv) {
        return vv.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(vv) {
        return vv.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    tP.inline = new tP("span"), tP.block = new tP("div");
    const qP = new class extends Vv {
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
    class IP {
      constructor(vv) {
        this.view = vv, this.de = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Rv.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new sP(vv, vv.contentDOM), this.updateInner([new NP(0, 0, 0, vv.state.doc.length)], null)
      }
      update(vv) {
        var zv;
        let Pv = vv.changedRanges;
        this.minWidth > 0 && Pv.length && (Pv.every((vv => {
          let {
            fromA: zv,
            toA: Pv
          } = vv;
          return Pv < this.minWidthFrom || zv > this.minWidthTo
        })) ? (this.minWidthFrom = vv.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = vv.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(vv);
        let Sv = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (zv = this.domChanged) || void 0 === zv ? void 0 : zv.newSel) ? Sv = this.domChanged.newSel.head : function(vv, zv) {
          let Pv = !1;
          zv && vv.iterChangedRanges(((vv, hv) => {
            vv < zv.to && hv > zv.from && (Pv = !0)
          }));
          return Pv
        }(vv.changes, this.hasComposition) || vv.selectionSet || (Sv = vv.state.selection.main.head));
        let ev = Sv > -1 ? function(vv, zv, Pv) {
          let hv = ZP(vv, Pv);
          if (!hv) return null;
          let {
            node: Sv,
            from: ev,
            to: gv
          } = hv, pv = Sv.nodeValue;
          if (/[\n\r]/.test(pv)) return null;
          if (vv.state.doc.sliceString(hv.from, hv.to) != pv) return null;
          let dv = zv.invertedDesc;
          return {
            range: new NP(dv.mapPos(ev), dv.mapPos(gv), ev, gv),
            text: Sv
          }
        }(this.view, vv.changes, Sv) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: zv,
            to: hv
          } = this.hasComposition;
          Pv = new NP(zv, hv, vv.changes.mapPos(zv, -1), vv.changes.mapPos(hv, 1)).addToSet(Pv.slice())
        }
        this.hasComposition = ev ? {
          from: ev.range.fromB,
          to: ev.range.toB
        } : null, (Fv.ie || Fv.chrome) && !ev && vv && vv.state.doc.lines != vv.startState.doc.lines && (this.forceSelection = !0);
        let gv = this.de,
          pv = this.blockWrappers;
        this.updateDeco();
        let dv = function(vv, zv, Pv) {
          let Sv = new AP;
          return hv.y.compare(vv, zv, Pv, Sv), Sv.changes
        }(gv, this.de, vv.changes);
        dv.length && (Pv = NP.extendWithRanges(Pv, dv));
        let Nv = function(vv, zv, Pv) {
          let Sv = new LP;
          return hv.y.compare(vv, zv, Pv, Sv), Sv.changes
        }(pv, this.blockWrappers, vv.changes);
        return Nv.length && (Pv = NP.extendWithRanges(Pv, Nv)), ev && !Pv.some((vv => vv.fromA <= ev.range.fromA && vv.toA >= ev.range.toA)) && (Pv = ev.range.addToSet(Pv.slice())), !(2 & this.tile.flags && 0 == Pv.length) && (this.updateInner(Pv, ev), vv.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(vv, zv) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: Pv
        } = this.view;
        Pv.ignore((() => {
          if (zv || vv.length) {
            let Pv = this.tile,
              hv = new VP(this.view, Pv, this.blockWrappers, this.de, this.dynamicDecorationMap);
            zv && WP.get(zv.text) && hv.cache.reused.set(WP.get(zv.text), 2), this.tile = hv.run(vv, zv), QP(Pv, hv.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let hv = Fv.chrome || Fv.ios ? {
            node: Pv.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(hv), !hv || !hv.written && Pv.selectionRange.focusNode == hv.node && this.tile.dom.contains(hv.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let hv = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Sv of this.tile.children) Sv.isWidget() && Sv.widget instanceof HP && hv.push(Sv.dom);
        Pv.updateGaps(hv)
      }
      updateEditContextFormatting(vv) {
        this.editContextFormatting = this.editContextFormatting.map(vv.changes);
        for (let zv of vv.transactions)
          for (let vv of zv.effects) vv.is(Bz) && (this.editContextFormatting = vv.value)
      }
      updateSelection() {
        let vv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: zv
        } = this.tile, Pv = this.view.root.activeElement, hv = Pv == zv, Sv = !hv && !(this.view.state.facet(Ez) || zv.tabIndex > -1) && Hv(zv, this.view.observer.selectionRange) && !(Pv && zv.contains(Pv));
        if (!(hv || vv || Sv)) return;
        let ev = this.forceSelection;
        this.forceSelection = !1;
        let gv, pv, dv = this.view.state.selection.main;
        if (dv.empty ? pv = gv = this.inlineDOMNearPos(dv.anchor, dv.assoc || 1) : (pv = this.inlineDOMNearPos(dv.head, dv.head == dv.from ? 1 : -1), gv = this.inlineDOMNearPos(dv.anchor, dv.anchor == dv.from ? 1 : -1)), Fv.gecko && dv.empty && !this.hasComposition && (1 == (Nv = gv).node.nodeType && Nv.node.firstChild && (0 == Nv.offset || "false" == Nv.node.childNodes[Nv.offset - 1].contentEditable) && (Nv.offset == Nv.node.childNodes.length || "false" == Nv.node.childNodes[Nv.offset].contentEditable))) {
          let vv = document.createTextNode("");
          this.view.observer.ignore((() => gv.node.insertBefore(vv, gv.node.childNodes[gv.offset] || null))), gv = pv = new dz(vv, 0), ev = !0
        }
        var Nv;
        let lv = this.view.observer.selectionRange;
        !ev && lv.focusNode && (yv(gv.node, gv.offset, lv.anchorNode, lv.anchorOffset) && yv(pv.node, pv.offset, lv.focusNode, lv.focusOffset) || this.suppressWidgetCursorChange(lv, dv)) || (this.view.observer.ignore((() => {
          Fv.android && Fv.chrome && zv.contains(lv.focusNode) && function(vv, zv) {
            for (let Pv = vv; Pv && Pv != zv; Pv = Pv.assignedSlot || Pv.parentNode)
              if (1 == Pv.nodeType && "false" == Pv.contentEditable) return !0;
            return !1
          }(lv.focusNode, zv) && (zv.blur(), zv.focus({
            preventScroll: !0
          }));
          let vv = Av(this.view.root);
          if (vv)
            if (dv.empty) {
              if (Fv.gecko) {
                let vv = (hv = gv.node, ev = gv.offset, 1 != hv.nodeType ? 0 : (ev && "false" == hv.childNodes[ev - 1].contentEditable ? 1 : 0) | (ev < hv.childNodes.length && "false" == hv.childNodes[ev].contentEditable ? 2 : 0));
                if (vv && 3 != vv) {
                  let zv = (1 == vv ? gz : pz)(gv.node, gv.offset);
                  zv && (gv = new dz(zv.node, zv.offset))
                }
              }
              vv.collapse(gv.node, gv.offset), null != dv.bidiLevel && void 0 !== vv.caretBidiLevel && (vv.caretBidiLevel = dv.bidiLevel)
            } else if (vv.extend) {
            vv.collapse(gv.node, gv.offset);
            try {
              vv.extend(pv.node, pv.offset)
            } catch (Nv) {}
          } else {
            let zv = document.createRange();
            dv.anchor > dv.head && ([gv, pv] = [pv, gv]), zv.setEnd(pv.node, pv.offset), zv.setStart(gv.node, gv.offset), vv.removeAllRanges(), vv.addRange(zv)
          } else;
          var hv, ev;
          Sv && this.view.root.activeElement == zv && (zv.blur(), Pv && Pv.focus())
        })), this.view.observer.setSelectionRange(gv, pv)), this.impreciseAnchor = gv.precise ? null : new dz(lv.anchorNode, lv.anchorOffset), this.impreciseHead = pv.precise ? null : new dz(lv.focusNode, lv.focusOffset)
      }
      suppressWidgetCursorChange(vv, zv) {
        return this.hasComposition && zv.empty && yv(vv.focusNode, vv.focusOffset, vv.anchorNode, vv.anchorOffset) && this.posFromDOM(vv.focusNode, vv.focusOffset) == zv.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: vv
        } = this, zv = vv.state.selection.main, Pv = Av(vv.root), {
          anchorNode: hv,
          anchorOffset: Sv
        } = vv.observer.selectionRange;
        if (!Pv || !zv.empty || !zv.assoc || !Pv.modify) return;
        let ev = this.lineAt(zv.head, zv.assoc);
        if (!ev) return;
        let gv = ev.posAtStart;
        if (zv.head == gv || zv.head == gv + ev.length) return;
        let pv = this.coordsAt(zv.head, -1),
          dv = this.coordsAt(zv.head, 1);
        if (!pv || !dv || pv.bottom > dv.top) return;
        let Nv = this.domAtPos(zv.head + zv.assoc, zv.assoc);
        Pv.collapse(Nv.node, Nv.offset), Pv.modify("move", zv.assoc < 0 ? "forward" : "backward", "lineboundary"), vv.observer.readSelectionRange();
        let lv = vv.observer.selectionRange;
        vv.docView.posFromDOM(lv.anchorNode, lv.anchorOffset) != zv.from && Pv.collapse(hv, Sv)
      }
      posFromDOM(vv, zv) {
        let Pv = this.tile.nearest(vv);
        if (!Pv) return 2 & this.tile.dom.compareDocumentPosition(vv) ? 0 : this.view.state.doc.length;
        let hv = Pv.posAtStart;
        if (!Pv.isComposite()) return Pv.isText() ? vv == Pv.dom ? hv + zv : hv + (zv ? Pv.length : 0) : hv;
        {
          let Sv;
          if (vv == Pv.dom) Sv = Pv.dom.childNodes[zv];
          else {
            let hv = 0 == ov(vv) ? 0 : 0 == zv ? -1 : 1;
            for (;;) {
              let zv = vv.parentNode;
              if (zv == Pv.dom) break;
              0 == hv && zv.firstChild != zv.lastChild && (hv = vv == zv.firstChild ? -1 : 1), vv = zv
            }
            Sv = hv < 0 ? vv : vv.nextSibling
          }
          if (Sv == Pv.dom.firstChild) return hv;
          for (; Sv && !WP.get(Sv);) Sv = Sv.nextSibling;
          if (!Sv) return hv + Pv.length;
          for (let vv = 0, zv = hv;; vv++) {
            let hv = Pv.children[vv];
            if (hv.dom == Sv) return zv;
            zv += hv.length + hv.breakAfter
          }
        }
      }
      domAtPos(vv, zv) {
        let {
          tile: Pv,
          offset: hv
        } = this.tile.resolveBlock(vv, zv);
        return Pv.isWidget() ? Pv.domPosFor(vv, zv) : Pv.domIn(hv, zv)
      }
      inlineDOMNearPos(vv, zv) {
        let Pv, hv, Sv = -1,
          ev = !1,
          gv = -1,
          pv = !1;
        return this.tile.blockTiles(((zv, dv) => {
          if (zv.isWidget()) {
            if (32 & zv.flags && dv >= vv) return !0;
            16 & zv.flags && (ev = !0)
          } else {
            let Nv = dv + zv.length;
            if (dv <= vv && (Pv = zv, Sv = vv - dv, ev = Nv < vv), Nv >= vv && !hv && (hv = zv, gv = vv - dv, pv = dv > vv), dv > vv && hv) return !0
          }
        })), Pv || hv ? (ev && hv ? Pv = null : pv && Pv && (hv = null), Pv && zv < 0 || !hv ? Pv.domIn(Sv, zv) : hv.domIn(gv, zv)) : this.domAtPos(vv, zv)
      }
      coordsAt(vv, zv) {
        let {
          tile: Pv,
          offset: hv
        } = this.tile.resolveBlock(vv, zv);
        return Pv.isWidget() ? Pv.widget instanceof HP ? null : Pv.coordsInWidget(hv, zv, !0) : Pv.coordsIn(hv, zv)
      }
      lineAt(vv, zv) {
        let {
          tile: Pv
        } = this.tile.resolveBlock(vv, zv);
        return Pv.isLine() ? Pv : null
      }
      coordsForChar(vv) {
        let {
          tile: zv,
          offset: Pv
        } = this.tile.resolveBlock(vv, 1);
        if (!zv.isLine()) return null;
        return function vv(zv, Pv) {
          if (zv.isComposite())
            for (let hv of zv.children) {
              if (hv.length >= Pv) {
                let zv = vv(hv, Pv);
                if (zv) return zv
              }
              if ((Pv -= hv.length) < 0) break
            } else if (zv.isText() && Pv < zv.length) {
              let vv = (0, hv.W)(zv.text, Pv);
              if (vv == Pv) return null;
              let Sv = hz(zv.dom, Pv, vv).getClientRects();
              for (let zv = 0; zv < Sv.length; zv++) {
                let vv = Sv[zv];
                if (zv == Sv.length - 1 || vv.top < vv.bottom && vv.left < vv.right) return vv
              }
            } return null
        }(zv, Pv)
      }
      measureVisibleLineHeights(vv) {
        let zv = [],
          {
            from: Pv,
            to: hv
          } = vv,
          Sv = this.view.contentDOM.clientWidth,
          ev = Sv > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          gv = -1,
          pv = this.view.textDirection == Nz.LTR,
          dv = 0,
          Nv = (vv, lv, Tv) => {
            for (let Wv = 0; Wv < vv.children.length && !(lv > hv); Wv++) {
              let hv = vv.children[Wv],
                wv = lv + hv.length,
                av = hv.dom.getBoundingClientRect(),
                {
                  height: sv
                } = av;
              if (Tv && !Wv && (dv += av.top - Tv.top), hv instanceof CP) wv > Pv && Nv(hv, lv, av);
              else if (lv >= Pv && (dv > 0 && zv.push(-dv), zv.push(sv + dv), dv = 0, ev)) {
                let vv = hv.dom.lastChild,
                  zv = vv ? Mv(vv) : [];
                if (zv.length) {
                  let vv = zv[zv.length - 1],
                    Pv = pv ? vv.right - av.left : av.right - vv.left;
                  Pv > gv && (gv = Pv, this.minWidth = Sv, this.minWidthFrom = lv, this.minWidthTo = wv)
                }
              }
              Tv && Wv == vv.children.length - 1 && (dv += Tv.bottom - av.bottom), lv = wv + hv.breakAfter
            }
          };
        return Nv(this.tile, 0, null), zv
      }
      textDirectionAt(vv) {
        let {
          tile: zv
        } = this.tile.resolveBlock(vv, 1);
        return "rtl" == getComputedStyle(zv.dom).direction ? Nz.RTL : Nz.LTR
      }
      measureTextSize() {
        let vv = this.tile.blockTiles((vv => {
          if (vv.isLine() && vv.children.length && vv.length <= 20) {
            let zv, Pv = 0;
            for (let hv of vv.children) {
              if (!hv.isText() || /[^ -~]/.test(hv.text)) return;
              let vv = Mv(hv.dom);
              if (1 != vv.length) return;
              Pv += vv[0].width, zv = vv[0].height
            }
            if (Pv) return {
              lineHeight: vv.dom.getBoundingClientRect().height,
              charWidth: Pv / vv.length,
              textHeight: zv
            }
          }
        }));
        if (vv) return vv;
        let zv, Pv, hv, Sv = document.createElement("div");
        return Sv.className = "cm-line", Sv.style.width = "99999px", Sv.style.position = "absolute", Sv.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Sv);
          let vv = Mv(Sv.firstChild)[0];
          zv = Sv.getBoundingClientRect().height, Pv = vv && vv.width ? vv.width / 27 : 7, hv = vv && vv.height ? vv.height : zv, Sv.remove()
        })), {
          lineHeight: zv,
          charWidth: Pv,
          textHeight: hv
        }
      }
      computeBlockGapDeco() {
        let vv = [],
          zv = this.view.viewState;
        for (let Pv = 0, hv = 0;; hv++) {
          let Sv = hv == zv.viewports.length ? null : zv.viewports[hv],
            ev = Sv ? Sv.from - 1 : this.view.state.doc.length;
          if (ev > Pv) {
            let hv = (zv.lineBlockAt(ev).bottom - zv.lineBlockAt(Pv).top) / this.view.scaleY;
            vv.push(Rv.replace({
              widget: new HP(hv),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(Pv, ev))
          }
          if (!Sv) break;
          Pv = Sv.to + 1
        }
        return Rv.set(vv)
      }
      updateDeco() {
        let vv = 1,
          zv = this.view.state.facet(vP).map((zv => (this.dynamicDecorationMap[vv++] = "function" == typeof zv) ? zv(this.view) : zv)),
          Pv = !1,
          Sv = this.view.state.facet(PP).map(((vv, zv) => {
            let hv = "function" == typeof vv;
            return hv && (Pv = !0), hv ? vv(this.view) : vv
          }));
        for (Sv.length && (this.dynamicDecorationMap[vv++] = Pv, zv.push(hv.y.join(Sv))), this.de = [this.editContextFormatting, ...zv, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; vv < this.de.length;) this.dynamicDecorationMap[vv++] = !1;
        this.blockWrappers = this.view.state.facet(zP).map((vv => "function" == typeof vv ? vv(this.view) : vv))
      }
      scrollIntoView(vv) {
        var zv;
        if (vv.isSnapshot) {
          let zv = this.view.viewState.lineBlockAt(vv.range.head);
          return this.view.scrollDOM.scrollTop = zv.top - vv.yMargin, void(this.view.scrollDOM.scrollLeft = vv.xMargin)
        }
        for (let lv of this.view.state.facet(Hz)) try {
          if (lv(this.view, vv.range, vv)) return !0
        } catch (Nv) {
          Jz(this.view.state, Nv, "scroll handler")
        }
        let Pv, {
            range: hv
          } = vv,
          Sv = this.coordsAt(hv.head, null !== (zv = hv.assoc) && void 0 !== zv ? zv : hv.empty ? 0 : hv.head > hv.anchor ? -1 : 1);
        if (!Sv) return;
        !hv.empty && (Pv = this.coordsAt(hv.anchor, hv.anchor > hv.head ? -1 : 1)) && (Sv = {
          left: Math.min(Sv.left, Pv.left),
          top: Math.min(Sv.top, Pv.top),
          right: Math.max(Sv.right, Pv.right),
          bottom: Math.max(Sv.bottom, Pv.bottom)
        });
        let ev = pP(this.view),
          gv = {
            left: Sv.left - ev.left,
            top: Sv.top - ev.top,
            right: Sv.right + ev.right,
            bottom: Sv.bottom + ev.bottom
          },
          {
            offsetWidth: pv,
            offsetHeight: dv
          } = this.view.scrollDOM;
        if (function(vv, zv, Pv, hv, Sv, ev, gv, pv) {
            let dv = vv.ownerDocument,
              Nv = dv.defaultView || window;
            for (let lv = vv, Tv = !1; lv && !Tv;)
              if (1 == lv.nodeType) {
                let vv, Wv = lv == dv.body,
                  wv = 1,
                  av = 1;
                if (Wv) vv = rv(Nv);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(lv).position) && (Tv = !0), lv.scrollHeight <= lv.clientHeight && lv.scrollWidth <= lv.clientWidth) {
                    lv = lv.assignedSlot || lv.parentNode;
                    continue
                  }
                  let zv = lv.getBoundingClientRect();
                  ({
                    scaleX: wv,
                    scaleY: av
                  } = kv(lv, zv)), vv = {
                    left: zv.left,
                    right: zv.left + lv.clientWidth * wv,
                    top: zv.top,
                    bottom: zv.top + lv.clientHeight * av
                  }
                }
                let sv = 0,
                  Cv = 0;
                if ("nearest" == Sv) zv.top < vv.top + gv ? (Cv = zv.top - (vv.top + gv), Pv > 0 && zv.bottom > vv.bottom + Cv && (Cv = zv.bottom - vv.bottom + gv)) : zv.bottom > vv.bottom - gv && (Cv = zv.bottom - vv.bottom + gv, Pv < 0 && zv.top - Cv < vv.top && (Cv = zv.top - (vv.top + gv)));
                else {
                  let hv = zv.bottom - zv.top,
                    ev = vv.bottom - vv.top;
                  Cv = ("center" == Sv && hv <= ev ? zv.top + hv / 2 - ev / 2 : "start" == Sv || "center" == Sv && Pv < 0 ? zv.top - gv : zv.bottom - ev + gv) - vv.top
                }
                if ("nearest" == hv ? zv.left < vv.left + ev ? (sv = zv.left - (vv.left + ev), Pv > 0 && zv.right > vv.right + sv && (sv = zv.right - vv.right + ev)) : zv.right > vv.right - ev && (sv = zv.right - vv.right + ev, Pv < 0 && zv.left < vv.left + sv && (sv = zv.left - (vv.left + ev))) : sv = ("center" == hv ? zv.left + (zv.right - zv.left) / 2 - (vv.right - vv.left) / 2 : "start" == hv == pv ? zv.left - ev : zv.right - (vv.right - vv.left) + ev) - vv.left, sv || Cv)
                  if (Wv) Nv.scrollBy(sv, Cv);
                  else {
                    let vv = 0,
                      Pv = 0;
                    if (Cv) {
                      let vv = lv.scrollTop;
                      lv.scrollTop += Cv / av, Pv = (lv.scrollTop - vv) * av
                    }
                    if (sv) {
                      let zv = lv.scrollLeft;
                      lv.scrollLeft += sv / wv, vv = (lv.scrollLeft - zv) * wv
                    }
                    zv = {
                      left: zv.left - vv,
                      top: zv.top - Pv,
                      right: zv.right - vv,
                      bottom: zv.bottom - Pv
                    }, vv && Math.abs(vv - sv) < 1 && (hv = "nearest"), Pv && Math.abs(Pv - Cv) < 1 && (Sv = "nearest")
                  } if (Wv) break;
                (zv.top < vv.top || zv.bottom > vv.bottom || zv.left < vv.left || zv.right > vv.right) && (zv = {
                  left: Math.max(zv.left, vv.left),
                  right: Math.min(zv.right, vv.right),
                  top: Math.max(zv.top, vv.top),
                  bottom: Math.min(zv.bottom, vv.bottom)
                }), lv = lv.assignedSlot || lv.parentNode
              } else {
                if (11 != lv.nodeType) break;
                lv = lv.host
              }
          }(this.view.scrollDOM, gv, hv.head < hv.anchor ? -1 : 1, vv.x, vv.y, Math.max(Math.min(vv.xMargin, pv), -pv), Math.max(Math.min(vv.yMargin, dv), -dv), this.view.textDirection == Nz.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Sv.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Sv.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let vv = this.view.docView.lineAt(hv.head, 1);
          vv && vv.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(vv) {
        let zv = vv => vv.isWidget() || vv.children.some(zv);
        return zv(this.tile.resolveBlock(vv, 1).tile)
      }
      destroy() {
        QP(this.tile)
      }
    }

    function QP(vv, zv) {
      let Pv = null === zv || void 0 === zv ? void 0 : zv.get(vv);
      if (1 != Pv) {
        null == Pv && vv.destroy();
        for (let Pv of vv.children) QP(Pv, zv)
      }
    }

    function ZP(vv, zv) {
      let Pv = vv.observer.selectionRange;
      if (!Pv.focusNode) return null;
      let hv = gz(Pv.focusNode, Pv.focusOffset),
        Sv = pz(Pv.focusNode, Pv.focusOffset),
        ev = hv || Sv;
      if (Sv && hv && Sv.node != hv.node) {
        let zv = WP.get(Sv.node);
        if (!zv || zv.isText() && zv.text != Sv.node.nodeValue) ev = Sv;
        else if (vv.docView.lastCompositionAfterCursor) {
          let vv = WP.get(hv.node);
          !vv || vv.isText() && vv.text != hv.node.nodeValue || (ev = Sv)
        }
      }
      if (vv.docView.lastCompositionAfterCursor = ev != hv, !ev) return null;
      let gv = zv - ev.offset;
      return {
        from: gv,
        to: gv + ev.node.nodeValue.length,
        node: ev.node
      }
    }
    let AP = class {
      constructor() {
        this.changes = []
      }
      compareRange(vv, zv) {
        Qv(vv, zv, this.changes)
      }
      comparePoint(vv, zv) {
        Qv(vv, zv, this.changes)
      }
      boundChange(vv) {
        Qv(vv, vv, this.changes)
      }
    };
    class LP {
      constructor() {
        this.changes = []
      }
      compareRange(vv, zv) {
        Qv(vv, zv, this.changes)
      }
      comparePoint() {}
      boundChange(vv) {
        Qv(vv, vv, this.changes)
      }
    }
    class HP extends Vv {
      constructor(vv) {
        super(), this.height = vv
      }
      toDOM() {
        let vv = document.createElement("div");
        return vv.className = "cm-gap", this.updateDOM(vv), vv
      }
      eq(vv) {
        return vv.height == this.height
      }
      updateDOM(vv) {
        return vv.style.height = this.height + "px", !0
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

    function MP(vv, zv, Pv) {
      let hv = vv.lineBlockAt(zv);
      if (Array.isArray(hv.type)) {
        let vv;
        for (let Sv of hv.type) {
          if (Sv.from > zv) break;
          if (!(Sv.to < zv)) {
            if (Sv.from < zv && Sv.to > zv) return Sv;
            vv && (Sv.type != Uv.Text || vv.type == Sv.type && !(Pv < 0 ? Sv.from < zv : Sv.to > zv)) || (vv = Sv)
          }
        }
        return vv || hv
      }
      return hv
    }

    function yP(vv, zv, Pv, hv) {
      let Sv = vv.state.doc.lineAt(zv.head),
        ev = vv.bidiSpans(Sv),
        gv = vv.textDirectionAt(Sv.from);
      for (let pv = zv, dv = null;;) {
        let zv = Dz(Sv, ev, gv, pv, Pv),
          Nv = Oz;
        if (!zv) {
          if (Sv.number == (Pv ? vv.state.doc.lines : 1)) return pv;
          Nv = "\n", Sv = vv.state.doc.line(Sv.number + (Pv ? 1 : -1)), ev = vv.bidiSpans(Sv), zv = vv.visualLineSide(Sv, !Pv)
        }
        if (dv) {
          if (!dv(Nv)) return pv
        } else {
          if (!hv) return zv;
          dv = hv(Nv)
        }
        pv = zv
      }
    }

    function BP(vv, zv, Pv) {
      for (;;) {
        let hv = 0;
        for (let Sv of vv) Sv.between(zv - 1, zv + 1, ((vv, Sv, ev) => {
          if (zv > vv && zv < Sv) {
            let ev = hv || Pv || (zv - vv < Sv - zv ? -1 : 1);
            zv = ev < 0 ? vv : Sv, hv = ev
          }
        }));
        if (!hv) return zv
      }
    }

    function JP(vv, zv) {
      let Pv = null;
      for (let Sv = 0; Sv < zv.PC.length; Sv++) {
        let ev = zv.PC[Sv],
          gv = null;
        if (ev.empty) {
          let zv = BP(vv, ev.from, 0);
          zv != ev.from && (gv = hv.j.cursor(zv, -1))
        } else {
          let zv = BP(vv, ev.from, -1),
            Pv = BP(vv, ev.to, 1);
          zv == ev.from && Pv == ev.to || (gv = hv.j.range(ev.from == ev.anchor ? zv : Pv, ev.from == ev.head ? zv : Pv))
        }
        gv && (Pv || (Pv = zv.PC.slice()), Pv[Sv] = gv)
      }
      return Pv ? hv.j.create(Pv, zv.mainIndex) : zv
    }

    function EP(vv, zv, Pv) {
      let Sv = BP(vv.state.facet(hP).map((zv => zv(vv))), Pv.from, zv.head > Pv.from ? -1 : 1);
      return Sv == Pv.from ? Pv : hv.j.cursor(Sv, Sv < Pv.from ? 1 : -1)
    }
    class oP {
      constructor(vv, zv) {
        this.pos = vv, this.assoc = zv
      }
    }

    function bP(vv, zv, Pv, Sv) {
      let ev, gv = vv.contentDOM.getBoundingClientRect(),
        pv = gv.top + vv.viewState.paddingTop,
        {
          x: dv,
          y: Nv
        } = zv,
        lv = Nv - pv;
      for (;;) {
        if (lv < 0) return new oP(0, 1);
        if (lv > vv.viewState.docHeight) return new oP(vv.state.doc.length, -1);
        if (ev = vv.elementAtHeight(lv), null == Sv) break;
        if (ev.type == Uv.Text) {
          if (Sv < 0 ? ev.to < vv.viewport.from : ev.from > vv.viewport.to) break;
          let zv = vv.docView.coordsAt(Sv < 0 ? ev.from : ev.to, Sv > 0 ? -1 : 1);
          if (zv && (Sv < 0 ? zv.top <= lv + pv : zv.bottom >= lv + pv)) break
        }
        let zv = vv.viewState.heightOracle.textHeight / 2;
        lv = Sv > 0 ? ev.bottom + zv : ev.top - zv
      }
      if (vv.viewport.from >= ev.to || vv.viewport.to <= ev.from) {
        if (Pv) return null;
        if (ev.type == Uv.Text) {
          let zv = function(vv, zv, Pv, Sv, ev) {
            let gv = Math.round((Sv - zv.left) * vv.defaultCharacterWidth);
            if (vv.lineWrapping && Pv.height > 1.5 * vv.defaultLineHeight) {
              let zv = vv.viewState.heightOracle.textHeight;
              gv += Math.floor((ev - Pv.top - .5 * (vv.defaultLineHeight - zv)) / zv) * vv.viewState.heightOracle.lineLength
            }
            let pv = vv.state.sliceDoc(Pv.from, Pv.to);
            return Pv.from + (0, hv.Z)(pv, gv, vv.state.tabSize)
          }(vv, gv, ev, dv, Nv);
          return new oP(zv, zv == ev.from ? 1 : -1)
        }
      }
      if (ev.type != Uv.Text) return lv < (ev.top + ev.bottom) / 2 ? new oP(ev.from, 1) : new oP(ev.to, -1);
      let Tv = vv.docView.lineAt(ev.from, 2);
      return Tv && Tv.length == ev.length || (Tv = vv.docView.lineAt(ev.from, -2)), new rP(vv, dv, Nv, vv.textDirectionAt(ev.from)).scanTile(Tv, ev.from)
    }
    class rP {
      constructor(vv, zv, Pv, hv) {
        this.view = vv, this.x = zv, this.y = Pv, this.baseDir = hv, this.line = null, this.spans = null
      }
      bidiSpansAt(vv) {
        return (!this.line || this.line.from > vv || this.line.to < vv) && (this.line = this.view.state.doc.lineAt(vv), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(vv, zv) {
        let {
          line: Pv,
          spans: hv
        } = this.bidiSpansAt(vv);
        return hv[Gz.find(hv, vv - Pv.from, -1, zv)].level == this.baseDir
      }
      dirAt(vv, zv) {
        let {
          line: Pv,
          spans: hv
        } = this.bidiSpansAt(vv);
        return hv[Gz.find(hv, vv - Pv.from, -1, zv)].dir
      }
      bidiIn(vv, zv) {
        let {
          spans: Pv,
          line: hv
        } = this.bidiSpansAt(vv);
        return Pv.length > 1 || Pv.length && (Pv[0].level != this.baseDir || Pv[0].to + hv.from < zv)
      }
      scan(vv, zv) {
        let Pv, hv, Sv, ev = 0,
          gv = vv.length - 1,
          pv = new Set,
          dv = this.bidiIn(vv[0], vv[gv]),
          Nv = -1,
          lv = 1e9;
        vv: for (; ev < gv;) {
          let Tv = gv - ev,
            Wv = ev + gv >> 1;
          zv: if (pv.has(Wv)) {
            let vv = ev + Math.floor(Math.random() * Tv);
            for (let zv = 0; zv < Tv; zv++) {
              if (!pv.has(vv)) {
                Wv = vv;
                break zv
              }
              vv++, vv == gv && (vv = ev)
            }
            break vv
          } pv.add(Wv);
          let wv = zv(Wv);
          if (wv)
            for (let zv = 0; zv < wv.length; zv++) {
              let pv = wv[zv],
                Tv = 0;
              if (!(0 == pv.width && wv.length > 1)) {
                if (pv.bottom < this.y)(!Pv || Pv.bottom < pv.bottom) && (Pv = pv), Tv = 1;
                else if (pv.top > this.y)(!hv || hv.top > pv.top) && (hv = pv), Tv = -1;
                else {
                  let vv = pv.left > this.x ? this.x - pv.left : pv.right < this.x ? this.x - pv.right : 0,
                    zv = Math.abs(vv);
                  zv < lv && (Nv = Wv, lv = zv, Sv = pv), vv && (Tv = vv < 0 == (this.baseDir == Nz.LTR) ? -1 : 1)
                } - 1 != Tv || dv && !this.baseDirAt(vv[Wv], 1) ? 1 != Tv || dv && !this.baseDirAt(vv[Wv + 1], -1) || (ev = Wv + 1) : gv = Wv
              }
            }
        }
        if (!Sv) {
          let Sv = Pv && (!hv || this.y - Pv.bottom < hv.top - this.y) ? Pv : hv;
          return this.y = (Sv.top + Sv.bottom) / 2, this.scan(vv, zv)
        }
        if (lv) {
          if (Pv && Pv.bottom > Sv.top) return this.y = Pv.bottom - 1, this.scan(vv, zv);
          if (hv && hv.top < Sv.bottom) return this.y = hv.top + 1, this.scan(vv, zv)
        }
        let Tv = (dv ? this.dirAt(vv[Nv], 1) : this.baseDir) == Nz.LTR;
        return {
          i: Nv,
          after: this.x > (Sv.left + Sv.right) / 2 == Tv
        }
      }
      scanText(vv, zv) {
        let Pv = [];
        for (let ev = 0; ev < vv.length; ev = (0, hv.W)(vv.text, ev)) Pv.push(zv + ev);
        Pv.push(zv + vv.length);
        let Sv = this.scan(Pv, (hv => {
          let Sv = Pv[hv] - zv,
            ev = Pv[hv + 1] - zv;
          return hz(vv.dom, Sv, ev).getClientRects()
        }));
        return Sv.after ? new oP(Pv[Sv.i + 1], -1) : new oP(Pv[Sv.i], 1)
      }
      scanTile(vv, zv) {
        if (!vv.length) return new oP(zv, 1);
        if (1 == vv.children.length) {
          let Pv = vv.children[0];
          if (Pv.isText()) return this.scanText(Pv, zv);
          if (Pv.isComposite()) return this.scanTile(Pv, zv)
        }
        let Pv = [zv];
        for (let gv = 0, pv = zv; gv < vv.children.length; gv++) Pv.push(pv += vv.children[gv].length);
        let hv = this.scan(Pv, (zv => {
            let Pv = vv.children[zv];
            return 48 & Pv.flags ? null : (1 == Pv.dom.nodeType ? Pv.dom : hz(Pv.dom, 0, Pv.length)).getClientRects()
          })),
          Sv = vv.children[hv.i],
          ev = Pv[hv.i];
        return Sv.isText() ? this.scanText(Sv, ev) : Sv.isComposite() ? this.scanTile(Sv, ev) : hv.after ? new oP(Pv[hv.i + 1], -1) : new oP(ev, 1)
      }
    }
    const kP = "\uffff";
    class XP {
      constructor(vv, zv) {
        this.points = vv, this.view = zv, this.text = "", this.lineSeparator = zv.state.facet(hv.n.lineSeparator)
      }
      append(vv) {
        this.text += vv
      }
      lineBreak() {
        this.text += kP
      }
      readRange(vv, zv) {
        if (!vv) return this;
        let Pv = vv.parentNode;
        for (let hv = vv;;) {
          this.findPointBefore(Pv, hv);
          let vv = this.text.length;
          this.readNode(hv);
          let Sv = WP.get(hv),
            ev = hv.nextSibling;
          if (ev == zv) {
            (null === Sv || void 0 === Sv ? void 0 : Sv.breakAfter) && !ev && Pv != this.view.contentDOM && this.lineBreak();
            break
          }
          let gv = WP.get(ev);
          (Sv && gv ? Sv.breakAfter : (Sv ? Sv.breakAfter : Jv(hv)) || Jv(ev) && ("BR" != hv.nodeName || (null === Sv || void 0 === Sv ? void 0 : Sv.isWidget())) && this.text.length > vv) && !vh(ev, zv) && this.lineBreak(), hv = ev
        }
        return this.findPointBefore(Pv, zv), this
      }
      readTextNode(vv) {
        let zv = vv.nodeValue;
        for (let Pv of this.points) Pv.node == vv && (Pv.pos = this.text.length + Math.min(Pv.offset, zv.length));
        for (let Pv = 0, hv = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Sv, ev = -1,
            gv = 1;
          if (this.lineSeparator ? (ev = zv.indexOf(this.lineSeparator, Pv), gv = this.lineSeparator.length) : (Sv = hv.exec(zv)) && (ev = Sv.index, gv = Sv[0].length), this.append(zv.slice(Pv, ev < 0 ? zv.length : ev)), ev < 0) break;
          if (this.lineBreak(), gv > 1)
            for (let zv of this.points) zv.node == vv && zv.pos > this.text.length && (zv.pos -= gv - 1);
          Pv = ev + gv
        }
      }
      readNode(vv) {
        let zv = WP.get(vv),
          Pv = zv && zv.overrideDOMText;
        if (null != Pv) {
          this.findPointInside(vv, Pv.length);
          for (let vv = Pv.iter(); !vv.next().done;) vv.lineBreak ? this.lineBreak() : this.append(vv.value)
        } else 3 == vv.nodeType ? this.readTextNode(vv) : "BR" == vv.nodeName ? vv.nextSibling && this.lineBreak() : 1 == vv.nodeType && this.readRange(vv.firstChild, null)
      }
      findPointBefore(vv, zv) {
        for (let Pv of this.points) Pv.node == vv && vv.childNodes[Pv.offset] == zv && (Pv.pos = this.text.length)
      }
      findPointInside(vv, zv) {
        for (let Pv of this.points)(3 == vv.nodeType ? Pv.node == vv : vv.contains(Pv.node)) && (Pv.pos = this.text.length + (uP(vv, Pv.node, Pv.offset) ? zv : 0))
      }
    }

    function uP(vv, zv, Pv) {
      for (;;) {
        if (!zv || Pv < ov(zv)) return !1;
        if (zv == vv) return !0;
        Pv = Bv(zv) + 1, zv = zv.parentNode
      }
    }

    function vh(vv, zv) {
      let Pv;
      for (; vv != zv && vv; vv = vv.nextSibling) {
        let zv = WP.get(vv);
        if (!(null === zv || void 0 === zv ? void 0 : zv.isWidget())) return !1;
        zv && (Pv || (Pv = [])).push(zv)
      }
      if (Pv)
        for (let hv of Pv) {
          let vv = hv.overrideDOMText;
          if (null === vv || void 0 === vv ? void 0 : vv.length) return !1
        }
      return !0
    }
    class zh {
      constructor(vv, zv) {
        this.node = vv, this.offset = zv, this.pos = -1
      }
    }
    class Ph {
      constructor(vv, zv, Pv, Sv) {
        this.typeOver = Sv, this.bounds = null, this.text = "", this.domChanged = zv > -1;
        let {
          impreciseHead: ev,
          impreciseAnchor: gv
        } = vv.docView, pv = vv.state.selection;
        if (vv.state.readOnly && zv > -1) this.newSel = null;
        else if (zv > -1 && (this.bounds = hh(vv.docView.tile, zv, Pv, 0))) {
          let zv = ev || gv ? [] : function(vv) {
              let zv = [];
              if (vv.root.activeElement != vv.contentDOM) return zv;
              let {
                anchorNode: Pv,
                anchorOffset: hv,
                focusNode: Sv,
                focusOffset: ev
              } = vv.observer.selectionRange;
              Pv && (zv.push(new zh(Pv, hv)), Sv == Pv && ev == hv || zv.push(new zh(Sv, ev)));
              return zv
            }(vv),
            Pv = new XP(zv, vv);
          Pv.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = Pv.text, this.newSel = function(vv, zv) {
            if (0 == vv.length) return null;
            let Pv = vv[0].pos,
              Sv = 2 == vv.length ? vv[1].pos : Pv;
            return Pv > -1 && Sv > -1 ? hv.j.single(Pv + zv, Sv + zv) : null
          }(zv, this.bounds.from)
        } else {
          let zv = vv.observer.selectionRange,
            Pv = ev && ev.node == zv.focusNode && ev.offset == zv.focusOffset || !Lv(vv.contentDOM, zv.focusNode) ? pv.main.head : vv.docView.posFromDOM(zv.focusNode, zv.focusOffset),
            Sv = gv && gv.node == zv.anchorNode && gv.offset == zv.anchorOffset || !Lv(vv.contentDOM, zv.anchorNode) ? pv.main.anchor : vv.docView.posFromDOM(zv.anchorNode, zv.anchorOffset),
            dv = vv.viewport;
          if ((Fv.ios || Fv.chrome) && pv.main.empty && Pv != Sv && (dv.from > 0 || dv.to < vv.state.doc.length)) {
            let zv = Math.min(Pv, Sv),
              hv = Math.max(Pv, Sv),
              ev = dv.from - zv,
              gv = dv.to - hv;
            0 != ev && 1 != ev && 0 != zv || 0 != gv && -1 != gv && hv != vv.state.doc.length || (Pv = 0, Sv = vv.state.doc.length)
          }
          if (vv.inputState.composing > -1 && pv.PC.length > 1) this.newSel = pv.replaceRange(hv.j.range(Sv, Pv));
          else if (vv.lineWrapping && Sv == Pv && (!pv.main.empty || pv.main.head != Pv) && vv.inputState.lastTouchTime > Date.now() - 100) {
            let zv = vv.coordsAtPos(Pv, -1),
              Sv = 0;
            zv && (Sv = vv.inputState.lastTouchY <= zv.bottom ? -1 : 1), this.newSel = hv.j.create([hv.j.cursor(Pv, Sv)])
          } else this.newSel = hv.j.single(Sv, Pv)
        }
      }
    }

    function hh(vv, zv, Pv, hv) {
      if (vv.isComposite()) {
        let Sv = -1,
          ev = -1,
          gv = -1,
          pv = -1;
        for (let dv = 0, Nv = hv, lv = hv; dv < vv.children.length; dv++) {
          let hv = vv.children[dv],
            Tv = Nv + hv.length;
          if (Nv < zv && Tv > Pv) return hh(hv, zv, Pv, Nv);
          if (Tv >= zv && -1 == Sv && (Sv = dv, ev = Nv), Nv > Pv && hv.dom.parentNode == vv.dom) {
            gv = dv, pv = lv;
            break
          }
          lv = Tv, Nv = Tv + hv.breakAfter
        }
        return {
          from: ev,
          to: pv < 0 ? hv + vv.length : pv,
          startDOM: (Sv ? vv.children[Sv - 1].dom.nextSibling : null) || vv.dom.firstChild,
          endDOM: gv < vv.children.length && gv >= 0 ? vv.children[gv].dom : null
        }
      }
      return vv.isText() ? {
        from: hv,
        to: hv + vv.length,
        startDOM: vv.dom,
        endDOM: vv.dom.nextSibling
      } : null
    }

    function Sh(vv, zv) {
      let Pv, {
          newSel: Sv
        } = zv,
        {
          state: ev
        } = vv,
        gv = ev.selection.main,
        pv = vv.inputState.lastKeyTime > Date.now() - 100 ? vv.inputState.lastKeyCode : -1;
      if (zv.bounds) {
        let {
          from: vv,
          to: Sv
        } = zv.bounds, dv = gv.from, Nv = null;
        (8 === pv || Fv.android && zv.text.length < Sv - vv) && (dv = gv.to, Nv = "end");
        let lv, Tv, Wv = ev.doc.sliceString(vv, Sv, kP);
        !gv.empty && gv.from >= vv && gv.to <= Sv && (zv.typeOver || Wv != zv.text) && Wv.slice(0, gv.from - vv) == zv.text.slice(0, gv.from - vv) && Wv.slice(gv.to - vv) == zv.text.slice(lv = zv.text.length - (Wv.length - (gv.to - vv))) ? Pv = {
          from: gv.from,
          to: gv.to,
          insert: hv.H.of(zv.text.slice(gv.from - vv, lv).split(kP))
        } : (Tv = gh(Wv, zv.text, dv - vv, Nv)) && (Fv.chrome && 13 == pv && Tv.toB == Tv.from + 2 && zv.text.slice(Tv.from, Tv.toB) == kP + kP && Tv.toB--, Pv = {
          from: vv + Tv.from,
          to: vv + Tv.toA,
          insert: hv.H.of(zv.text.slice(Tv.from, Tv.toB).split(kP))
        })
      } else Sv && (!vv.hasFocus && ev.facet(Ez) || ph(Sv, gv)) && (Sv = null);
      if (!Pv && !Sv) return !1;
      if ((Fv.mac || Fv.android) && Pv && Pv.from == Pv.to && Pv.from == gv.head - 1 && /^\. ?$/.test(Pv.insert.toString()) && "off" == vv.contentDOM.getAttribute("autocorrect") ? (Sv && 2 == Pv.insert.length && (Sv = hv.j.single(Sv.main.anchor - 1, Sv.main.head - 1)), Pv = {
          from: Pv.from,
          to: Pv.to,
          insert: hv.H.of([Pv.insert.toString().replace(".", " ")])
        }) : ev.doc.lineAt(gv.from).to < gv.to && vv.docView.lineHasWidget(gv.to) && vv.inputState.insertingTextAt > Date.now() - 50 ? Pv = {
          from: gv.from,
          to: gv.to,
          insert: ev.toText(vv.inputState.insertingText)
        } : Fv.chrome && Pv && Pv.from == Pv.to && Pv.from == gv.head && "\n " == Pv.insert.toString() && vv.lineWrapping && (Sv && (Sv = hv.j.single(Sv.main.anchor - 1, Sv.main.head - 1)), Pv = {
          from: gv.from,
          to: gv.to,
          insert: hv.H.of([" "])
        }), Pv) return eh(vv, Pv, Sv, pv);
      if (Sv && !ph(Sv, gv)) {
        let zv = !1,
          Pv = "select";
        return vv.inputState.lastSelectionTime > Date.now() - 50 && ("select" == vv.inputState.lastSelectionOrigin && (zv = !0), Pv = vv.inputState.lastSelectionOrigin, "select.pointer" == Pv && (Sv = JP(ev.facet(hP).map((zv => zv(vv))), Sv))), vv.dispatch({
          selection: Sv,
          scrollIntoView: zv,
          userEvent: Pv
        }), !0
      }
      return !1
    }

    function eh(vv, zv, Pv) {
      let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (Fv.ios && vv.inputState.flushIOSKey(zv)) return !0;
      let ev = vv.state.selection.main;
      if (Fv.android && (zv.to == ev.to && (zv.from == ev.from || zv.from == ev.from - 1 && " " == vv.state.sliceDoc(zv.from, ev.from)) && 1 == zv.insert.length && 2 == zv.insert.lines && Sz(vv.contentDOM, "Enter", 13) || (zv.from == ev.from - 1 && zv.to == ev.to && 0 == zv.insert.length || 8 == Sv && zv.insert.length < zv.to - zv.from && zv.to > ev.head) && Sz(vv.contentDOM, "Backspace", 8) || zv.from == ev.from && zv.to == ev.to + 1 && 0 == zv.insert.length && Sz(vv.contentDOM, "Delete", 46))) return !0;
      let gv, pv = zv.insert.toString();
      vv.inputState.composing >= 0 && vv.inputState.composing++;
      let dv = () => gv || (gv = function(vv, zv, Pv) {
        let Sv, ev = vv.state,
          gv = ev.selection.main,
          pv = -1;
        if (zv.from == zv.to && zv.from < gv.from || zv.from > gv.to) {
          let Pv = zv.from < gv.from ? -1 : 1,
            hv = Pv < 0 ? gv.from : gv.to,
            Sv = BP(ev.facet(hP).map((zv => zv(vv))), hv, Pv);
          zv.from == Sv && (pv = Sv)
        }
        if (pv > -1) Sv = {
          changes: zv,
          selection: hv.j.cursor(zv.from + zv.insert.length, -1)
        };
        else if (zv.from >= gv.from && zv.to <= gv.to && zv.to - zv.from >= (gv.to - gv.from) / 3 && (!Pv || Pv.main.empty && Pv.main.from == zv.from + zv.insert.length) && vv.inputState.composing < 0) {
          let Pv = gv.from < zv.from ? ev.sliceDoc(gv.from, zv.from) : "",
            hv = gv.to > zv.to ? ev.sliceDoc(zv.to, gv.to) : "";
          Sv = ev.replaceSelection(vv.state.toText(Pv + zv.insert.sliceString(0, void 0, vv.state.lineBreak) + hv))
        } else {
          let pv = ev.changes(zv),
            dv = Pv && Pv.main.to <= pv.newLength ? Pv.main : void 0;
          if (ev.selection.PC.length > 1 && (vv.inputState.composing >= 0 || vv.inputState.compositionPendingChange) && zv.to <= gv.to + 10 && zv.to >= gv.to - 10) {
            let Nv, lv = vv.state.sliceDoc(zv.from, zv.to),
              Tv = Pv && ZP(vv, Pv.main.head);
            if (Tv) {
              let vv = zv.insert.length - (zv.to - zv.from);
              Nv = {
                from: Tv.from,
                to: Tv.to - vv
              }
            } else Nv = vv.state.doc.lineAt(gv.head);
            let Wv = gv.to - zv.to;
            Sv = ev.changeByRange((Pv => {
              if (Pv.from == gv.from && Pv.to == gv.to) return {
                changes: pv,
                range: dv || Pv.map(pv)
              };
              let Sv = Pv.to - Wv,
                Tv = Sv - lv.length;
              if (vv.state.sliceDoc(Tv, Sv) != lv || Sv >= Nv.from && Tv <= Nv.to) return {
                range: Pv
              };
              let wv = ev.changes({
                  from: Tv,
                  to: Sv,
                  insert: zv.insert
                }),
                av = Pv.to - gv.to;
              return {
                changes: wv,
                range: dv ? hv.j.range(Math.max(0, dv.anchor + av), Math.max(0, dv.head + av)) : Pv.map(wv)
              }
            }))
          } else Sv = {
            changes: pv,
            selection: dv && ev.selection.replaceRange(dv)
          }
        }
        let dv = "input.type";
        (vv.composing || vv.inputState.compositionPendingChange && vv.inputState.compositionEndedAt > Date.now() - 50) && (vv.inputState.compositionPendingChange = !1, dv += ".compose", vv.inputState.compositionFirstChange && (dv += ".start", vv.inputState.compositionFirstChange = !1));
        return ev.update(Sv, {
          userEvent: dv,
          scrollIntoView: !0
        })
      }(vv, zv, Pv));
      return vv.state.facet(qz).some((Pv => Pv(vv, zv.from, zv.to, pv, dv))) || vv.dispatch(dv()), !0
    }

    function gh(vv, zv, Pv, hv) {
      let Sv = Math.min(vv.length, zv.length),
        ev = 0;
      for (; ev < Sv && vv.charCodeAt(ev) == zv.charCodeAt(ev);) ev++;
      if (ev == Sv && vv.length == zv.length) return null;
      let gv = vv.length,
        pv = zv.length;
      for (; gv > 0 && pv > 0 && vv.charCodeAt(gv - 1) == zv.charCodeAt(pv - 1);) gv--, pv--;
      if ("end" == hv) {
        Pv -= gv + Math.max(0, ev - Math.min(gv, pv)) - ev
      }
      if (gv < ev && vv.length < zv.length) {
        ev -= Pv <= ev && Pv >= gv ? ev - Pv : 0, pv = ev + (pv - gv), gv = ev
      } else if (pv < ev) {
        ev -= Pv <= ev && Pv >= pv ? ev - Pv : 0, gv = ev + (gv - pv), pv = ev
      }
      return {
        from: ev,
        toA: gv,
        toB: pv
      }
    }

    function ph(vv, zv) {
      return zv.head == vv.main.head && zv.anchor == vv.main.anchor
    }
    class dh {
      setSelectionOrigin(vv) {
        this.lastSelectionOrigin = vv, this.lastSelectionTime = Date.now()
      }
      constructor(vv) {
        this.view = vv, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = vv.hasFocus, Fv.safari && vv.contentDOM.addEventListener("input", (() => null)), Fv.gecko && function(vv) {
          xh.has(vv) || (xh.add(vv), vv.addEventListener("copy", (() => {})), vv.addEventListener("cut", (() => {})))
        }(vv.contentDOM.ownerDocument)
      }
      handleEvent(vv) {
        (function(vv, zv) {
          if (!zv.bubbles) return !0;
          if (zv.defaultPrevented) return !1;
          for (let Pv, hv = zv.target; hv != vv.contentDOM; hv = hv.parentNode)
            if (!hv || 11 == hv.nodeType || (Pv = WP.get(hv)) && Pv.isWidget() && !Pv.isHidden && Pv.widget.ignoreEvent(zv)) return !1;
          return !0
        })(this.view, vv) && !this.ignoreDuringComposition(vv) && ("keydown" == vv.type && this.keydown(vv) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(vv.type, vv))) : this.runHandlers(vv.type, vv)))
      }
      runHandlers(vv, zv) {
        let Pv = this.handlers[vv];
        if (Pv) {
          for (let vv of Pv.observers) vv(this.view, zv);
          for (let vv of Pv.handlers) {
            if (zv.defaultPrevented) break;
            if (vv(this.view, zv)) {
              zv.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(vv) {
        let zv = lh(vv),
          Pv = this.handlers,
          hv = this.view.contentDOM;
        for (let Sv in zv)
          if ("scroll" != Sv) {
            let vv = !zv[Sv].handlers.length,
              ev = Pv[Sv];
            ev && vv != !ev.handlers.length && (hv.removeEventListener(Sv, this.handleEvent), ev = null), ev || hv.addEventListener(Sv, this.handleEvent, {
              passive: vv
            })
          } for (let Sv in Pv) "scroll" == Sv || zv[Sv] || hv.removeEventListener(Sv, this.handleEvent);
        this.handlers = zv
      }
      keydown(vv) {
        if (this.lastKeyCode = vv.keyCode, this.lastKeyTime = Date.now(), 9 == vv.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != vv.keyCode && wh.indexOf(vv.keyCode) < 0 && (this.tabFocusMode = -1), Fv.android && Fv.chrome && !vv.synthetic && (13 == vv.keyCode || 8 == vv.keyCode)) return this.view.observer.delayAndroidKey(vv.key, vv.keyCode), !0;
        let zv;
        return !Fv.ios || vv.synthetic || vv.altKey || vv.metaKey || vv.shiftKey || !((zv = Th.find((zv => zv.keyCode == vv.keyCode))) && !vv.ctrlKey || Wh.indexOf(vv.key) > -1 && vv.ctrlKey) ? (229 != vv.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = zv || vv, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(vv) {
        let zv = this.pendingIOSKey;
        return !!zv && (!("Enter" == zv.key && vv && vv.from < vv.to && /^\S+$/.test(vv.insert.toString())) && (this.pendingIOSKey = void 0, Sz(this.view.contentDOM, zv.key, zv.keyCode, zv instanceof KeyboardEvent ? zv : void 0)))
      }
      ignoreDuringComposition(vv) {
        return !(!/^key/.test(vv.type) || vv.synthetic) && (this.composing > 0 || !!(Fv.safari && !Fv.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(vv) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = vv
      }
      update(vv) {
        this.view.observer.update(vv), this.mouseSelection && this.mouseSelection.update(vv), this.draggedContent && vv.docChanged && (this.draggedContent = this.draggedContent.map(vv.changes)), vv.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function Nh(vv, zv) {
      return (Pv, hv) => {
        try {
          return zv.call(vv, hv, Pv)
        } catch (Sv) {
          Jz(Pv.state, Sv)
        }
      }
    }

    function lh(vv) {
      let zv = Object.create(null);

      function Pv(vv) {
        return zv[vv] || (zv[vv] = {
          observers: [],
          handlers: []
        })
      }
      for (let hv of vv) {
        let vv = hv.spec,
          zv = vv && vv.plugin.domEventHandlers,
          Sv = vv && vv.plugin.domEventObservers;
        if (zv)
          for (let ev in zv) {
            let vv = zv[ev];
            vv && Pv(ev).handlers.push(Nh(hv.value, vv))
          }
        if (Sv)
          for (let ev in Sv) {
            let vv = Sv[ev];
            vv && Pv(ev).observers.push(Nh(hv.value, vv))
          }
      }
      for (let hv in Ch) Pv(hv).handlers.push(Ch[hv]);
      for (let hv in ih) Pv(hv).observers.push(ih[hv]);
      return zv
    }
    const Th = [{
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
      Wh = "dthko",
      wh = [16, 17, 18, 20, 91, 92, 224, 225];

    function ah(vv) {
      return .7 * Math.max(0, vv) + 8
    }
    class sh {
      constructor(vv, zv, Pv, Sv) {
        this.view = vv, this.startEvent = zv, this.style = Pv, this.mustSelect = Sv, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = zv, this.scrollParents = Xv(vv.contentDOM), this.atoms = vv.state.facet(hP).map((zv => zv(vv)));
        let ev = vv.contentDOM.ownerDocument;
        ev.addEventListener("mousemove", this.move = this.move.bind(this)), ev.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = zv.shiftKey, this.multiple = vv.state.facet(hv.n.allowMultipleSelections) && function(vv, zv) {
          let Pv = vv.state.facet(Vz);
          return Pv.length ? Pv[0](zv) : Fv.mac ? zv.metaKey : zv.ctrlKey
        }(vv, zv), this.dragging = !(! function(vv, zv) {
          let {
            main: Pv
          } = vv.state.selection;
          if (Pv.empty) return !1;
          let hv = Av(vv.root);
          if (!hv || 0 == hv.rangeCount) return !0;
          let Sv = hv.getRangeAt(0).getClientRects();
          for (let ev = 0; ev < Sv.length; ev++) {
            let vv = Sv[ev];
            if (vv.left <= zv.clientX && vv.right >= zv.clientX && vv.top <= zv.clientY && vv.bottom >= zv.clientY) return !0
          }
          return !1
        }(vv, zv) || 1 != Oh(zv)) && null
      }
      start(vv) {
        !1 === this.dragging && this.select(vv)
      }
      move(vv) {
        if (0 == vv.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (zv = this.startEvent, Pv = vv, Math.max(Math.abs(zv.clientX - Pv.clientX), Math.abs(zv.clientY - Pv.clientY)) < 10)) return;
        var zv, Pv;
        this.select(this.lastEvent = vv);
        let hv = 0,
          Sv = 0,
          ev = 0,
          gv = 0,
          pv = this.view.win.innerWidth,
          dv = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: ev,
          right: pv
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: gv,
          bottom: dv
        } = this.scrollParents.y.getBoundingClientRect());
        let Nv = pP(this.view);
        vv.clientX - Nv.left <= ev + 6 ? hv = -ah(ev - vv.clientX) : vv.clientX + Nv.right >= pv - 6 && (hv = ah(vv.clientX - pv)), vv.clientY - Nv.top <= gv + 6 ? Sv = -ah(gv - vv.clientY) : vv.clientY + Nv.bottom >= dv - 6 && (Sv = ah(vv.clientY - dv)), this.setScrollSpeed(hv, Sv)
      }
      up(vv) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || vv.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let vv = this.view.contentDOM.ownerDocument;
        vv.removeEventListener("mousemove", this.move), vv.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(vv, zv) {
        this.scrollSpeed = {
          x: vv,
          y: zv
        }, vv || zv ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: vv,
          y: zv
        } = this.scrollSpeed;
        vv && this.scrollParents.x && (this.scrollParents.x.scrollLeft += vv, vv = 0), zv && this.scrollParents.y && (this.scrollParents.y.scrollTop += zv, zv = 0), (vv || zv) && this.view.win.scrollBy(vv, zv), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(vv) {
        let {
          view: zv
        } = this, Pv = JP(this.atoms, this.style.get(vv, this.extend, this.multiple));
        !this.mustSelect && Pv.eq(zv.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: Pv,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(vv) {
        vv.transactions.some((vv => vv.isUserEvent("input.type"))) ? this.destroy() : this.style.update(vv) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const Ch = Object.create(null),
      ih = Object.create(null),
      ch = Fv.ie && Fv.ie_version < 15 || Fv.ios && Fv.webkit_version < 604;

    function Gh(vv, zv, Pv) {
      for (let hv of vv.facet(zv)) Pv = hv(Pv, vv);
      return Pv
    }

    function mh(vv, zv) {
      zv = Gh(vv.state, Qz, zv);
      let Pv, {
          state: Sv
        } = vv,
        ev = 1,
        gv = Sv.toText(zv),
        pv = gv.lines == Sv.selection.PC.length;
      if (null != Kh && Sv.selection.PC.every((vv => vv.empty)) && Kh == gv.toString()) {
        let vv = -1;
        Pv = Sv.changeByRange((Pv => {
          let dv = Sv.doc.lineAt(Pv.from);
          if (dv.from == vv) return {
            range: Pv
          };
          vv = dv.from;
          let Nv = Sv.toText((pv ? gv.line(ev++).text : zv) + Sv.lineBreak);
          return {
            changes: {
              from: dv.from,
              insert: Nv
            },
            range: hv.j.cursor(Pv.from + Nv.length)
          }
        }))
      } else Pv = pv ? Sv.changeByRange((vv => {
        let zv = gv.line(ev++);
        return {
          changes: {
            from: vv.from,
            to: vv.to,
            insert: zv.text
          },
          range: hv.j.cursor(vv.from + zv.length)
        }
      })) : Sv.replaceSelection(gv);
      vv.dispatch(Pv, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function jh(vv, zv, Pv, Sv) {
      if (1 == Sv) return hv.j.cursor(zv, Pv);
      if (2 == Sv) return function(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Sv = vv.charCategorizer(zv),
          ev = vv.doc.lineAt(zv),
          gv = zv - ev.from;
        if (0 == ev.length) return hv.j.cursor(zv);
        0 == gv ? Pv = 1 : gv == ev.length && (Pv = -1);
        let pv = gv,
          dv = gv;
        Pv < 0 ? pv = (0, hv.W)(ev.text, gv, !1) : dv = (0, hv.W)(ev.text, gv);
        let Nv = Sv(ev.text.slice(pv, dv));
        for (; pv > 0;) {
          let vv = (0, hv.W)(ev.text, pv, !1);
          if (Sv(ev.text.slice(vv, pv)) != Nv) break;
          pv = vv
        }
        for (; dv < ev.length;) {
          let vv = (0, hv.W)(ev.text, dv);
          if (Sv(ev.text.slice(dv, vv)) != Nv) break;
          dv = vv
        }
        return hv.j.range(pv + ev.from, dv + ev.from)
      }(vv.state, zv, Pv);
      {
        let Sv = vv.docView.lineAt(zv, Pv),
          ev = vv.state.doc.lineAt(Sv ? Sv.posAtEnd : zv),
          gv = Sv ? Sv.posAtStart : ev.from,
          pv = Sv ? Sv.posAtEnd : ev.to;
        return pv < vv.state.doc.length && pv == ev.to && pv++, hv.j.range(gv, pv)
      }
    }
    ih.scroll = vv => {
      vv.inputState.lastScrollTop = vv.scrollDOM.scrollTop, vv.inputState.lastScrollLeft = vv.scrollDOM.scrollLeft
    }, ih.wheel = ih.mousewheel = vv => {
      vv.inputState.lastWheelEvent = Date.now()
    }, Ch.keydown = (vv, zv) => (vv.inputState.setSelectionOrigin("select"), 27 == zv.keyCode && 0 != vv.inputState.tabFocusMode && (vv.inputState.tabFocusMode = Date.now() + 2e3), !1), ih.touchstart = (vv, zv) => {
      let Pv = vv.inputState,
        hv = zv.targetTouches[0];
      Pv.lastTouchTime = Date.now(), hv && (Pv.lastTouchX = hv.clientX, Pv.lastTouchY = hv.clientY), Pv.setSelectionOrigin("select.pointer")
    }, ih.touchmove = vv => {
      vv.inputState.setSelectionOrigin("select.pointer")
    }, Ch.mousedown = (vv, zv) => {
      if (vv.observer.flush(), vv.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let Pv = null;
      for (let hv of vv.state.facet(Rz))
        if (Pv = hv(vv, zv), Pv) break;
      if (Pv || 0 != zv.button || (Pv = function(vv, zv) {
          let Pv = vv.posAndSideAtCoords({
              x: zv.clientX,
              y: zv.clientY
            }, !1),
            Sv = Oh(zv),
            ev = vv.state.selection;
          return {
            update(vv) {
              vv.docChanged && (Pv.pos = vv.changes.mapPos(Pv.pos), ev = ev.map(vv.changes))
            },
            get(zv, gv, pv) {
              let dv, Nv = vv.posAndSideAtCoords({
                  x: zv.clientX,
                  y: zv.clientY
                }, !1),
                lv = jh(vv, Nv.pos, Nv.assoc, Sv);
              if (Pv.pos != Nv.pos && !gv) {
                let zv = jh(vv, Pv.pos, Pv.assoc, Sv),
                  ev = Math.min(zv.from, lv.from),
                  gv = Math.max(zv.to, lv.to);
                lv = ev < lv.from ? hv.j.range(ev, gv, lv.assoc) : hv.j.range(gv, ev, lv.assoc)
              }
              return gv ? ev.replaceRange(ev.main.extend(lv.from, lv.to, lv.assoc)) : pv && 1 == Sv && ev.PC.length > 1 && (dv = function(vv, zv) {
                for (let Pv = 0; Pv < vv.PC.length; Pv++) {
                  let {
                    from: Sv,
                    to: ev
                  } = vv.PC[Pv];
                  if (Sv <= zv && ev >= zv) return hv.j.create(vv.PC.slice(0, Pv).concat(vv.PC.slice(Pv + 1)), vv.mainIndex == Pv ? 0 : vv.mainIndex - (vv.mainIndex > Pv ? 1 : 0))
                }
                return null
              }(ev, Nv.pos)) ? dv : pv ? ev.addRange(lv) : hv.j.create([lv])
            }
          }
        }(vv, zv)), Pv) {
        let hv = !vv.hasFocus;
        vv.inputState.startMouseSelection(new sh(vv, zv, Pv, hv)), hv && vv.observer.ignore((() => {
          Pz(vv.contentDOM);
          let zv = vv.root.activeElement;
          zv && !zv.contains(vv.contentDOM) && zv.blur()
        }));
        let Sv = vv.inputState.mouseSelection;
        if (Sv) return Sv.start(zv), !1 === Sv.dragging
      } else vv.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const fh = Fv.ie && Fv.ie_version <= 11;
    let Fh = null,
      Yh = 0,
      nh = 0;

    function Oh(vv) {
      if (!fh) return vv.detail;
      let zv = Fh,
        Pv = nh;
      return Fh = vv, nh = Date.now(), Yh = !zv || Pv > Date.now() - 400 && Math.abs(zv.clientX - vv.clientX) < 2 && Math.abs(zv.clientY - vv.clientY) < 2 ? (Yh + 1) % 3 : 1
    }

    function Dh(vv, zv, Pv, hv) {
      if (!(Pv = Gh(vv.state, Qz, Pv))) return;
      let Sv = vv.posAtCoords({
          x: zv.clientX,
          y: zv.clientY
        }, !1),
        {
          draggedContent: ev
        } = vv.inputState,
        gv = hv && ev && function(vv, zv) {
          let Pv = vv.state.facet(Uz);
          return Pv.length ? Pv[0](zv) : Fv.mac ? !zv.altKey : !zv.ctrlKey
        }(vv, zv) ? {
          from: ev.from,
          to: ev.to
        } : null,
        pv = {
          from: Sv,
          insert: Pv
        },
        dv = vv.state.changes(gv ? [gv, pv] : pv);
      vv.focus(), vv.dispatch({
        changes: dv,
        selection: {
          anchor: dv.mapPos(Sv, -1),
          head: dv.mapPos(Sv, 1)
        },
        userEvent: gv ? "move.drop" : "input.drop"
      }), vv.inputState.draggedContent = null
    }
    Ch.dragstart = (vv, zv) => {
      let {
        selection: {
          main: Pv
        }
      } = vv.state;
      if (zv.target.draggable) {
        let Sv = vv.docView.tile.nearest(zv.target);
        if (Sv && Sv.isWidget()) {
          let vv = Sv.posAtStart,
            zv = vv + Sv.length;
          (vv >= Pv.to || zv <= Pv.from) && (Pv = hv.j.range(vv, zv))
        }
      }
      let {
        inputState: Sv
      } = vv;
      return Sv.mouseSelection && (Sv.mouseSelection.dragging = !0), Sv.draggedContent = Pv, zv.dataTransfer && (zv.dataTransfer.setData("Text", Gh(vv.state, Zz, vv.state.sliceDoc(Pv.from, Pv.to))), zv.dataTransfer.effectAllowed = "copyMove"), !1
    }, Ch.dragend = vv => (vv.inputState.draggedContent = null, !1), Ch.drop = (vv, zv) => {
      if (!zv.dataTransfer) return !1;
      if (vv.state.readOnly) return !0;
      let Pv = zv.dataTransfer.files;
      if (Pv && Pv.length) {
        let hv = Array(Pv.length),
          Sv = 0,
          ev = () => {
            ++Sv == Pv.length && Dh(vv, zv, hv.filter((vv => null != vv)).join(vv.state.lineBreak), !1)
          };
        for (let vv = 0; vv < Pv.length; vv++) {
          let zv = new FileReader;
          zv.onerror = ev, zv.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(zv.result) || (hv[vv] = zv.result), ev()
          }, zv.readAsText(Pv[vv])
        }
        return !0
      } {
        let Pv = zv.dataTransfer.getData("Text");
        if (Pv) return Dh(vv, zv, Pv, !0), !0
      }
      return !1
    }, Ch.paste = (vv, zv) => {
      if (vv.state.readOnly) return !0;
      vv.observer.flush();
      let Pv = ch ? null : zv.clipboardData;
      return Pv ? (mh(vv, Pv.getData("text/plain") || Pv.getData("text/uri-list")), !0) : (function(vv) {
        let zv = vv.dom.parentNode;
        if (!zv) return;
        let Pv = zv.appendChild(document.createElement("textarea"));
        Pv.style.cssText = "position: fixed; left: -10000px; top: 10px", Pv.focus(), setTimeout((() => {
          vv.focus(), Pv.remove(), mh(vv, Pv.value)
        }), 50)
      }(vv), !1)
    };
    let Kh = null;
    Ch.copy = Ch.cut = (vv, zv) => {
      if (!Hv(vv.contentDOM, vv.observer.selectionRange)) return !1;
      let {
        text: Pv,
        PC: hv,
        linewise: Sv
      } = function(vv) {
        let zv = [],
          Pv = [],
          hv = !1;
        for (let Sv of vv.selection.PC) Sv.empty || (zv.push(vv.sliceDoc(Sv.from, Sv.to)), Pv.push(Sv));
        if (!zv.length) {
          let Sv = -1;
          for (let {
              from: hv
            }
            of vv.selection.PC) {
            let ev = vv.doc.lineAt(hv);
            ev.number > Sv && (zv.push(ev.text), Pv.push({
              from: ev.from,
              to: Math.min(vv.doc.length, ev.to + 1)
            })), Sv = ev.number
          }
          hv = !0
        }
        return {
          text: Gh(vv, Zz, zv.join(vv.lineBreak)),
          PC: Pv,
          linewise: hv
        }
      }(vv.state);
      if (!Pv && !Sv) return !1;
      Kh = Sv ? Pv : null, "cut" != zv.type || vv.state.readOnly || vv.dispatch({
        changes: hv,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let ev = ch ? null : zv.clipboardData;
      return ev ? (ev.clearData(), ev.setData("text/plain", Pv), !0) : (function(vv, zv) {
        let Pv = vv.dom.parentNode;
        if (!Pv) return;
        let hv = Pv.appendChild(document.createElement("textarea"));
        hv.style.cssText = "position: fixed; left: -10000px; top: 10px", hv.value = zv, hv.focus(), hv.selectionEnd = zv.length, hv.selectionStart = 0, setTimeout((() => {
          hv.remove(), vv.focus()
        }), 50)
      }(vv, Pv), !1)
    };
    const Vh = hv.c.define();

    function Uh(vv, zv) {
      let Pv = [];
      for (let hv of vv.facet(Iz)) {
        let Sv = hv(vv, zv);
        Sv && Pv.push(Sv)
      }
      return Pv.length ? vv.update({
        effects: Pv,
        annotations: Vh.of(!0)
      }) : null
    }

    function Rh(vv) {
      setTimeout((() => {
        let zv = vv.hasFocus;
        if (zv != vv.inputState.notifiedFocused) {
          let Pv = Uh(vv.state, zv);
          Pv ? vv.dispatch(Pv) : vv.update([])
        }
      }), 10)
    }
    ih.focus = vv => {
      vv.inputState.lastFocusTime = Date.now(), vv.scrollDOM.scrollTop || !vv.inputState.lastScrollTop && !vv.inputState.lastScrollLeft || (vv.scrollDOM.scrollTop = vv.inputState.lastScrollTop, vv.scrollDOM.scrollLeft = vv.inputState.lastScrollLeft), Rh(vv)
    }, ih.blur = vv => {
      vv.observer.clearSelectionRange(), Rh(vv)
    }, ih.compositionstart = ih.compositionupdate = vv => {
      vv.observer.editContext || (null == vv.inputState.compositionFirstChange && (vv.inputState.compositionFirstChange = !0), vv.inputState.composing < 0 && (vv.inputState.composing = 0))
    }, ih.compositionend = vv => {
      vv.observer.editContext || (vv.inputState.composing = -1, vv.inputState.compositionEndedAt = Date.now(), vv.inputState.compositionPendingKey = !0, vv.inputState.compositionPendingChange = vv.observer.pendingRecords().length > 0, vv.inputState.compositionFirstChange = null, Fv.chrome && Fv.android ? vv.observer.flushSoon() : vv.inputState.compositionPendingChange ? Promise.resolve().then((() => vv.observer.flush())) : setTimeout((() => {
        vv.inputState.composing < 0 && vv.docView.hasComposition && vv.update([])
      }), 50))
    }, ih.contextmenu = vv => {
      vv.inputState.lastContextMenu = Date.now()
    }, Ch.beforeinput = (vv, zv) => {
      var Pv, hv;
      if ("insertText" != zv.inputType && "insertCompositionText" != zv.inputType || (vv.inputState.insertingText = zv.data, vv.inputState.insertingTextAt = Date.now()), "insertReplacementText" == zv.inputType && vv.observer.editContext) {
        let hv = null === (Pv = zv.dataTransfer) || void 0 === Pv ? void 0 : Pv.getData("text/plain"),
          Sv = zv.getTargetRanges();
        if (hv && Sv.length) {
          let zv = Sv[0],
            Pv = vv.posAtDOM(zv.startContainer, zv.startOffset),
            ev = vv.posAtDOM(zv.endContainer, zv.endOffset);
          return eh(vv, {
            from: Pv,
            to: ev,
            insert: vv.state.toText(hv)
          }, null), !0
        }
      }
      let Sv;
      if (Fv.chrome && Fv.android && (Sv = Th.find((vv => vv.inputType == zv.inputType))) && (vv.observer.delayAndroidKey(Sv.key, Sv.keyCode), "Backspace" == Sv.key || "Delete" == Sv.key)) {
        let zv = (null === (hv = window.visualViewport) || void 0 === hv ? void 0 : hv.height) || 0;
        setTimeout((() => {
          var Pv;
          ((null === (Pv = window.visualViewport) || void 0 === Pv ? void 0 : Pv.height) || 0) > zv + 10 && vv.hasFocus && (vv.contentDOM.blur(), vv.focus())
        }), 100)
      }
      return Fv.ios && "deleteContentForward" == zv.inputType && vv.observer.flushSoon(), Fv.safari && "insertText" == zv.inputType && vv.inputState.composing >= 0 && setTimeout((() => ih.compositionend(vv, zv)), 20), !1
    };
    const xh = new Set;
    const th = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let qh = !1;

    function Ih() {
      qh = !1
    }
    class Qh {
      constructor(vv) {
        this.lineWrapping = vv, this.doc = hv.H.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(vv, zv) {
        let Pv = this.doc.lineAt(zv).number - this.doc.lineAt(vv).number + 1;
        return this.lineWrapping && (Pv += Math.max(0, Math.ceil((zv - vv - Pv * this.lineLength * .5) / this.lineLength))), this.lineHeight * Pv
      }
      heightForLine(vv) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((vv - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(vv) {
        return this.doc = vv, this
      }
      mustRefreshForWrapping(vv) {
        return th.indexOf(vv) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(vv) {
        let zv = !1;
        for (let Pv = 0; Pv < vv.length; Pv++) {
          let hv = vv[Pv];
          hv < 0 ? Pv++ : this.heightSamples[Math.floor(10 * hv)] || (zv = !0, this.heightSamples[Math.floor(10 * hv)] = !0)
        }
        return zv
      }
      refresh(vv, zv, Pv, hv, Sv, ev) {
        let gv = th.indexOf(vv) > -1,
          pv = Math.abs(zv - this.lineHeight) > .3 || this.lineWrapping != gv || Math.abs(Pv - this.charWidth) > .1;
        if (this.lineWrapping = gv, this.lineHeight = zv, this.charWidth = Pv, this.textHeight = hv, this.lineLength = Sv, pv) {
          this.heightSamples = {};
          for (let vv = 0; vv < ev.length; vv++) {
            let zv = ev[vv];
            zv < 0 ? vv++ : this.heightSamples[Math.floor(10 * zv)] = !0
          }
        }
        return pv
      }
    }
    class Zh {
      constructor(vv, zv) {
        this.from = vv, this.heights = zv, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class Ah {
      constructor(vv, zv, Pv, hv, Sv) {
        this.from = vv, this.length = zv, this.top = Pv, this.height = hv, this._content = Sv
      }
      get type() {
        return "number" == typeof this._content ? Uv.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof qv ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(vv) {
        let zv = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(vv._content) ? vv._content : [vv]);
        return new Ah(this.from, this.length + vv.length, this.top, this.height + vv.height, zv)
      }
    }
    var Lh = function(vv) {
      return vv[vv.ByPos = 0] = "ByPos", vv[vv.ByHeight = 1] = "ByHeight", vv[vv.ByPosNoHeight = 2] = "ByPosNoHeight", vv
    }(Lh || (Lh = {}));
    const Hh = .001;
    class Mh {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = vv, this.height = zv, this.flags = Pv
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(vv) {
        this.flags = (vv ? 2 : 0) | -3 & this.flags
      }
      setHeight(vv) {
        this.height != vv && (Math.abs(this.height - vv) > Hh && (qh = !0), this.height = vv)
      }
      replace(vv, zv, Pv) {
        return Mh.of(Pv)
      }
      decomposeLeft(vv, zv) {
        zv.push(this)
      }
      decomposeRight(vv, zv) {
        zv.push(this)
      }
      applyChanges(vv, zv, Pv, hv) {
        let Sv = this,
          ev = Pv.doc;
        for (let gv = hv.length - 1; gv >= 0; gv--) {
          let {
            fromA: pv,
            toA: dv,
            fromB: Nv,
            toB: lv
          } = hv[gv], Tv = Sv.lineAt(pv, Lh.ByPosNoHeight, Pv.setDoc(zv), 0, 0), Wv = Tv.to >= dv ? Tv : Sv.lineAt(dv, Lh.ByPosNoHeight, Pv, 0, 0);
          for (lv += Wv.to - dv, dv = Wv.to; gv > 0 && Tv.from <= hv[gv - 1].toA;) pv = hv[gv - 1].fromA, Nv = hv[gv - 1].fromB, gv--, pv < Tv.from && (Tv = Sv.lineAt(pv, Lh.ByPosNoHeight, Pv, 0, 0));
          Nv += Tv.from - pv, pv = Tv.from;
          let wv = kh.build(Pv.setDoc(ev), vv, Nv, lv);
          Sv = yh(Sv, Sv.replace(pv, dv, wv))
        }
        return Sv.updateHeight(Pv, 0)
      }
      static empty() {
        return new Eh(0, 0, 0)
      }
      static of (vv) {
        if (1 == vv.length) return vv[0];
        let zv = 0,
          Pv = vv.length,
          hv = 0,
          Sv = 0;
        for (;;)
          if (zv == Pv)
            if (hv > 2 * Sv) {
              let Sv = vv[zv - 1];
              Sv.break ? vv.splice(--zv, 1, Sv.left, null, Sv.right) : vv.splice(--zv, 1, Sv.left, Sv.right), Pv += 1 + Sv.break, hv -= Sv.size
            } else {
              if (!(Sv > 2 * hv)) break;
              {
                let zv = vv[Pv];
                zv.break ? vv.splice(Pv, 1, zv.left, null, zv.right) : vv.splice(Pv, 1, zv.left, zv.right), Pv += 2 + zv.break, Sv -= zv.size
              }
            }
        else if (hv < Sv) {
          let Pv = vv[zv++];
          Pv && (hv += Pv.size)
        } else {
          let zv = vv[--Pv];
          zv && (Sv += zv.size)
        }
        let ev = 0;
        return null == vv[zv - 1] ? (ev = 1, zv--) : null == vv[zv] && (ev = 1, Pv++), new bh(Mh.of(vv.slice(0, zv)), ev, Mh.of(vv.slice(Pv)))
      }
    }

    function yh(vv, zv) {
      return vv == zv ? vv : (vv.constructor != zv.constructor && (qh = !0), zv)
    }
    Mh.prototype.size = 1;
    const Bh = Rv.replace({});
    class Jh extends Mh {
      constructor(vv, zv, Pv) {
        super(vv, zv), this.deco = Pv, this.spaceAbove = 0
      }
      mainBlock(vv, zv) {
        return new Ah(zv, this.length, vv + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(vv, zv, Pv, hv) {
        return this.spaceAbove && vv < Pv + this.spaceAbove ? new Ah(hv, 0, Pv, this.spaceAbove, Bh) : this.mainBlock(Pv, hv)
      }
      lineAt(vv, zv, Pv, hv, Sv) {
        let ev = this.mainBlock(hv, Sv);
        return this.spaceAbove ? this.blockAt(0, Pv, hv, Sv).join(ev) : ev
      }
      forEachLine(vv, zv, Pv, hv, Sv, ev) {
        vv <= Sv + this.length && zv >= Sv && ev(this.lineAt(0, Lh.ByPos, Pv, hv, Sv))
      }
      setMeasuredHeight(vv) {
        let zv = vv.heights[vv.index++];
        zv < 0 ? (this.spaceAbove = -zv, zv = vv.heights[vv.index++]) : this.spaceAbove = 0, this.setHeight(zv)
      }
      updateHeight(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 3 ? arguments[3] : void 0;
        return Pv && Pv.from <= zv && Pv.more && this.setMeasuredHeight(Pv), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class Eh extends Jh {
      constructor(vv, zv, Pv) {
        super(vv, zv, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = Pv
      }
      mainBlock(vv, zv) {
        return new Ah(zv, this.length, vv + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(vv, zv, Pv) {
        let hv = Pv[0];
        return 1 == Pv.length && (hv instanceof Eh || hv instanceof oh && 4 & hv.flags) && Math.abs(this.length - hv.length) < 10 ? (hv instanceof oh ? hv = new Eh(hv.length, this.height, this.spaceAbove) : hv.height = this.height, this.outdated || (hv.outdated = !1), hv) : Mh.of(Pv)
      }
      updateHeight(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 ? arguments[3] : void 0;
        return hv && hv.from <= zv && hv.more ? this.setMeasuredHeight(hv) : (Pv || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, vv.heightForLine(this.length - this.collapsed)) + this.breaks * vv.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class oh extends Mh {
      constructor(vv) {
        super(vv, 0)
      }
      heightMetrics(vv, zv) {
        let Pv, hv = vv.doc.lineAt(zv).number,
          Sv = vv.doc.lineAt(zv + this.length).number,
          ev = Sv - hv + 1,
          gv = 0;
        if (vv.lineWrapping) {
          let zv = Math.min(this.height, vv.lineHeight * ev);
          Pv = zv / ev, this.length > ev + 1 && (gv = (this.height - zv) / (this.length - ev - 1))
        } else Pv = this.height / ev;
        return {
          firstLine: hv,
          lastLine: Sv,
          perLine: Pv,
          perChar: gv
        }
      }
      blockAt(vv, zv, Pv, hv) {
        let {
          firstLine: Sv,
          lastLine: ev,
          perLine: gv,
          perChar: pv
        } = this.heightMetrics(zv, hv);
        if (zv.lineWrapping) {
          let Sv = hv + (vv < zv.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (vv - Pv) / this.height)) * this.length)),
            ev = zv.doc.lineAt(Sv),
            dv = gv + ev.length * pv,
            Nv = Math.max(Pv, vv - dv / 2);
          return new Ah(ev.from, ev.length, Nv, dv, 0)
        } {
          let hv = Math.max(0, Math.min(ev - Sv, Math.floor((vv - Pv) / gv))),
            {
              from: pv,
              length: dv
            } = zv.doc.line(Sv + hv);
          return new Ah(pv, dv, Pv + gv * hv, gv, 0)
        }
      }
      lineAt(vv, zv, Pv, hv, Sv) {
        if (zv == Lh.ByHeight) return this.blockAt(vv, Pv, hv, Sv);
        if (zv == Lh.ByPosNoHeight) {
          let {
            from: zv,
            to: hv
          } = Pv.doc.lineAt(vv);
          return new Ah(zv, hv - zv, 0, 0, 0)
        }
        let {
          firstLine: ev,
          perLine: gv,
          perChar: pv
        } = this.heightMetrics(Pv, Sv), dv = Pv.doc.lineAt(vv), Nv = gv + dv.length * pv, lv = dv.number - ev, Tv = hv + gv * lv + pv * (dv.from - Sv - lv);
        return new Ah(dv.from, dv.length, Math.max(hv, Math.min(Tv, hv + this.height - Nv)), Nv, 0)
      }
      forEachLine(vv, zv, Pv, hv, Sv, ev) {
        vv = Math.max(vv, Sv), zv = Math.min(zv, Sv + this.length);
        let {
          firstLine: gv,
          perLine: pv,
          perChar: dv
        } = this.heightMetrics(Pv, Sv);
        for (let Nv = vv, lv = hv; Nv <= zv;) {
          let zv = Pv.doc.lineAt(Nv);
          if (Nv == vv) {
            let Pv = zv.number - gv;
            lv += pv * Pv + dv * (vv - Sv - Pv)
          }
          let hv = pv + dv * zv.length;
          ev(new Ah(zv.from, zv.length, lv, hv, 0)), lv += hv, Nv = zv.to + 1
        }
      }
      replace(vv, zv, Pv) {
        let hv = this.length - zv;
        if (hv > 0) {
          let vv = Pv[Pv.length - 1];
          vv instanceof oh ? Pv[Pv.length - 1] = new oh(vv.length + hv) : Pv.push(null, new oh(hv - 1))
        }
        if (vv > 0) {
          let zv = Pv[0];
          zv instanceof oh ? Pv[0] = new oh(vv + zv.length) : Pv.unshift(new oh(vv - 1), null)
        }
        return Mh.of(Pv)
      }
      decomposeLeft(vv, zv) {
        zv.push(new oh(vv - 1), null)
      }
      decomposeRight(vv, zv) {
        zv.push(null, new oh(this.length - vv - 1))
      }
      updateHeight(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 ? arguments[3] : void 0,
          Sv = zv + this.length;
        if (hv && hv.from <= zv + this.length && hv.more) {
          let Pv = [],
            ev = Math.max(zv, hv.from),
            gv = -1;
          for (hv.from > zv && Pv.push(new oh(hv.from - zv - 1).updateHeight(vv, zv)); ev <= Sv && hv.more;) {
            let zv = vv.doc.lineAt(ev).length;
            Pv.length && Pv.push(null);
            let Sv = hv.heights[hv.index++],
              pv = 0;
            Sv < 0 && (pv = -Sv, Sv = hv.heights[hv.index++]), -1 == gv ? gv = Sv : Math.abs(Sv - gv) >= Hh && (gv = -2);
            let dv = new Eh(zv, Sv, pv);
            dv.outdated = !1, Pv.push(dv), ev += zv + 1
          }
          ev <= Sv && Pv.push(null, new oh(Sv - ev).updateHeight(vv, ev));
          let pv = Mh.of(Pv);
          return (gv < 0 || Math.abs(pv.height - this.height) >= Hh || Math.abs(gv - this.heightMetrics(vv, zv).perLine) >= Hh) && (qh = !0), yh(this, pv)
        }
        return (Pv || this.outdated) && (this.setHeight(vv.heightForGap(zv, zv + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class bh extends Mh {
      constructor(vv, zv, Pv) {
        super(vv.length + zv + Pv.length, vv.height + Pv.height, zv | (vv.outdated || Pv.outdated ? 2 : 0)), this.left = vv, this.right = Pv, this.size = vv.size + Pv.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(vv, zv, Pv, hv) {
        let Sv = Pv + this.left.height;
        return vv < Sv ? this.left.blockAt(vv, zv, Pv, hv) : this.right.blockAt(vv, zv, Sv, hv + this.left.length + this.break)
      }
      lineAt(vv, zv, Pv, hv, Sv) {
        let ev = hv + this.left.height,
          gv = Sv + this.left.length + this.break,
          pv = zv == Lh.ByHeight ? vv < ev : vv < gv,
          dv = pv ? this.left.lineAt(vv, zv, Pv, hv, Sv) : this.right.lineAt(vv, zv, Pv, ev, gv);
        if (this.break || (pv ? dv.to < gv : dv.from > gv)) return dv;
        let Nv = zv == Lh.ByPosNoHeight ? Lh.ByPosNoHeight : Lh.ByPos;
        return pv ? dv.join(this.right.lineAt(gv, Nv, Pv, ev, gv)) : this.left.lineAt(gv, Nv, Pv, hv, Sv).join(dv)
      }
      forEachLine(vv, zv, Pv, hv, Sv, ev) {
        let gv = hv + this.left.height,
          pv = Sv + this.left.length + this.break;
        if (this.break) vv < pv && this.left.forEachLine(vv, zv, Pv, hv, Sv, ev), zv >= pv && this.right.forEachLine(vv, zv, Pv, gv, pv, ev);
        else {
          let dv = this.lineAt(pv, Lh.ByPos, Pv, hv, Sv);
          vv < dv.from && this.left.forEachLine(vv, dv.from - 1, Pv, hv, Sv, ev), dv.to >= vv && dv.from <= zv && ev(dv), zv > dv.to && this.right.forEachLine(dv.to + 1, zv, Pv, gv, pv, ev)
        }
      }
      replace(vv, zv, Pv) {
        let hv = this.left.length + this.break;
        if (zv < hv) return this.balanced(this.left.replace(vv, zv, Pv), this.right);
        if (vv > this.left.length) return this.balanced(this.left, this.right.replace(vv - hv, zv - hv, Pv));
        let Sv = [];
        vv > 0 && this.decomposeLeft(vv, Sv);
        let ev = Sv.length;
        for (let gv of Pv) Sv.push(gv);
        if (vv > 0 && rh(Sv, ev - 1), zv < this.length) {
          let vv = Sv.length;
          this.decomposeRight(zv, Sv), rh(Sv, vv)
        }
        return Mh.of(Sv)
      }
      decomposeLeft(vv, zv) {
        let Pv = this.left.length;
        if (vv <= Pv) return this.left.decomposeLeft(vv, zv);
        zv.push(this.left), this.break && (Pv++, vv >= Pv && zv.push(null)), vv > Pv && this.right.decomposeLeft(vv - Pv, zv)
      }
      decomposeRight(vv, zv) {
        let Pv = this.left.length,
          hv = Pv + this.break;
        if (vv >= hv) return this.right.decomposeRight(vv - hv, zv);
        vv < Pv && this.left.decomposeRight(vv, zv), this.break && vv < hv && zv.push(null), zv.push(this.right)
      }
      balanced(vv, zv) {
        return vv.size > 2 * zv.size || zv.size > 2 * vv.size ? Mh.of(this.break ? [vv, null, zv] : [vv, zv]) : (this.left = yh(this.left, vv), this.right = yh(this.right, zv), this.setHeight(vv.height + zv.height), this.outdated = vv.outdated || zv.outdated, this.size = vv.size + zv.size, this.length = vv.length + this.break+zv.length, this)
      }
      updateHeight(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Sv,
            right: ev
          } = this,
          gv = zv + Sv.length + this.break,
          pv = null;
        return hv && hv.from <= zv + Sv.length && hv.more ? pv = Sv = Sv.updateHeight(vv, zv, Pv, hv) : Sv.updateHeight(vv, zv, Pv), hv && hv.from <= gv + ev.length && hv.more ? pv = ev = ev.updateHeight(vv, gv, Pv, hv) : ev.updateHeight(vv, gv, Pv), pv ? this.balanced(Sv, ev) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function rh(vv, zv) {
      let Pv, hv;
      null == vv[zv] && (Pv = vv[zv - 1]) instanceof oh && (hv = vv[zv + 1]) instanceof oh && vv.splice(zv - 1, 3, new oh(Pv.length + 1 + hv.length))
    }
    class kh {
      constructor(vv, zv) {
        this.pos = vv, this.oracle = zv, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = vv
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(vv, zv) {
        if (this.lineStart > -1) {
          let vv = Math.min(zv, this.lineEnd),
            Pv = this.nodes[this.nodes.length - 1];
          Pv instanceof Eh ? Pv.length += vv - this.pos : (vv > this.pos || !this.isCovered) && this.nodes.push(new Eh(vv - this.pos, -1, 0)), this.writtenTo = vv, zv > vv && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = zv
      }
      point(vv, zv, Pv) {
        if (vv < zv || Pv.heightRelevant) {
          let hv = Pv.widget ? Pv.widget.estimatedHeight : 0,
            Sv = Pv.widget ? Pv.widget.lineBreaks : 0;
          hv < 0 && (hv = this.oracle.lineHeight);
          let ev = zv - vv;
          Pv.block ? this.evv(new Jh(ev, hv, Pv)) : (ev || Sv || hv >= 5) && this.addLineDeco(hv, Sv, ev)
        } else zv > vv && this.span(vv, zv);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: vv,
          to: zv
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = vv, this.lineEnd = zv, this.writtenTo < vv && ((this.writtenTo < vv - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, vv - 1)), this.nodes.push(null)), this.pos > vv && this.nodes.push(new Eh(this.pos - vv, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(vv, zv) {
        let Pv = new oh(zv - vv);
        return this.oracle.doc.lineAt(vv).to == zv && (Pv.flags |= 4), Pv
      }
      ensureLine() {
        this.enterLine();
        let vv = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (vv instanceof Eh) return vv;
        let zv = new Eh(0, -1, 0);
        return this.nodes.push(zv), zv
      }
      evv(vv) {
        this.enterLine();
        let zv = vv.deco;
        zv && zv.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(vv), this.writtenTo = this.pos = this.pos + vv.length, zv && zv.endSide > 0 && (this.covering = vv)
      }
      addLineDeco(vv, zv, Pv) {
        let hv = this.ensureLine();
        hv.length += Pv, hv.collapsed += Pv, hv.widgetHeight = Math.max(hv.widgetHeight, vv), hv.breaks += zv, this.writtenTo = this.pos = this.pos + Pv
      }
      finish(vv) {
        let zv = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || zv instanceof Eh || this.isCovered ? (this.writtenTo < this.pos || null == zv) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new Eh(0, -1, 0));
        let Pv = vv;
        for (let hv of this.nodes) hv instanceof Eh && hv.updateHeight(this.oracle, Pv), Pv += hv ? hv.length : 1;
        return this.nodes
      }
      static build(vv, zv, Pv, Sv) {
        let ev = new kh(Pv, vv);
        return hv.y.spans(zv, Pv, Sv, ev, 0), ev.finish(Pv)
      }
    }
    class Xh {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(vv, zv, Pv, hv) {
        (vv < zv || Pv && Pv.heightRelevant || hv && hv.heightRelevant) && Qv(vv, zv, this.changes, 5)
      }
    }

    function uh(vv, zv) {
      let Pv = vv.getBoundingClientRect(),
        hv = vv.ownerDocument,
        Sv = hv.defaultView || window,
        ev = Math.max(0, Pv.left),
        gv = Math.min(Sv.innerWidth, Pv.right),
        pv = Math.max(0, Pv.top),
        dv = Math.min(Sv.innerHeight, Pv.bottom);
      for (let Nv = vv.parentNode; Nv && Nv != hv.body;)
        if (1 == Nv.nodeType) {
          let zv = Nv,
            Pv = window.getComputedStyle(zv);
          if ((zv.scrollHeight > zv.clientHeight || zv.scrollWidth > zv.clientWidth) && "visible" != Pv.overflow) {
            let Pv = zv.getBoundingClientRect();
            ev = Math.max(ev, Pv.left), gv = Math.min(gv, Pv.right), pv = Math.max(pv, Pv.top), dv = Math.min(Nv == vv.parentNode ? Sv.innerHeight : dv, Pv.bottom)
          }
          Nv = "absolute" == Pv.position || "fixed" == Pv.position ? zv.offsetParent : zv.parentNode
        } else {
          if (11 != Nv.nodeType) break;
          Nv = Nv.host
        } return {
        left: ev - Pv.left,
        right: Math.max(ev, gv) - Pv.left,
        top: pv - (Pv.top + zv),
        bottom: Math.max(pv, dv) - (Pv.top + zv)
      }
    }

    function vS(vv, zv) {
      let Pv = vv.getBoundingClientRect();
      return {
        left: 0,
        right: Pv.right - Pv.left,
        top: zv,
        bottom: Pv.bottom - (Pv.top + zv)
      }
    }
    class zS {
      constructor(vv, zv, Pv, hv) {
        this.from = vv, this.to = zv, this.size = Pv, this.displaySize = hv
      }
      static same(vv, zv) {
        if (vv.length != zv.length) return !1;
        for (let Pv = 0; Pv < vv.length; Pv++) {
          let hv = vv[Pv],
            Sv = zv[Pv];
          if (hv.from != Sv.from || hv.to != Sv.to || hv.size != Sv.size) return !1
        }
        return !0
      }
      draw(vv, zv) {
        return Rv.replace({
          widget: new PS(this.displaySize * (zv ? vv.scaleY : vv.scaleX), zv)
        }).range(this.from, this.to)
      }
    }
    class PS extends Vv {
      constructor(vv, zv) {
        super(), this.size = vv, this.vertical = zv
      }
      eq(vv) {
        return vv.size == this.size && vv.vertical == this.vertical
      }
      toDOM() {
        let vv = document.createElement("div");
        return this.vertical ? vv.style.height = this.size + "px" : (vv.style.width = this.size + "px", vv.style.height = "2px", vv.style.display = "inline-block"), vv
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class hS {
      constructor(vv, zv) {
        this.view = vv, this.state = zv, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = pS, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Nz.LTR, this.e_ = [], this.mustEnforceCursorAssoc = !1;
        let Pv = zv.facet(uz).some((vv => "function" != typeof vv && "cm-lineWrapping" == vv.class));
        this.heightOracle = new Qh(Pv), this.stateDeco = dS(zv), this.heightMap = Mh.empty().applyChanges(this.stateDeco, hv.H.empty, this.heightOracle.setDoc(zv.doc), [new NP(0, 0, 0, zv.doc.length)]);
        for (let hv = 0; hv < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); hv++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Rv.set(this.lineGaps.map((vv => vv.draw(this, !1)))), this.scrollParent = vv.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let vv = [this.viewport],
          {
            main: zv
          } = this.state.selection;
        for (let Pv = 0; Pv <= 1; Pv++) {
          let hv = Pv ? zv.head : zv.anchor;
          if (!vv.some((vv => {
              let {
                from: zv,
                to: Pv
              } = vv;
              return hv >= zv && hv <= Pv
            }))) {
            let {
              from: zv,
              to: Pv
            } = this.lineBlockAt(hv);
            vv.push(new SS(zv, Pv))
          }
        }
        return this.viewports = vv.sort(((vv, zv) => vv.from - zv.from)), this.updateScaler()
      }
      updateScaler() {
        let vv = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? pS : new NS(this.heightOracle, this.heightMap, this.viewports), vv.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (vv => {
          this.viewportLines.push(lS(vv, this.scaler))
        }))
      }
      update(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = vv.state;
        let Pv = this.stateDeco;
        this.stateDeco = dS(this.state);
        let Sv = vv.changedRanges,
          ev = NP.extendWithRanges(Sv, function(vv, zv, Pv) {
            let Sv = new Xh;
            return hv.y.compare(vv, zv, Pv, Sv, 0), Sv.changes
          }(Pv, this.stateDeco, vv ? vv.changes : hv.ChangeSet.empty(this.state.doc.length))),
          gv = this.heightMap.height,
          pv = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        Ih(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, vv.startState.doc, this.heightOracle.setDoc(this.state.doc), ev), (this.heightMap.height != gv || qh) && (vv.flags |= 2), pv ? (this.scrollAnchorPos = vv.changes.mapPos(pv.from, -1), this.scrollAnchorHeight = pv.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = gv);
        let dv = ev.length ? this.mapViewport(this.viewport, vv.changes) : this.viewport;
        (zv && (zv.range.head < dv.from || zv.range.head > dv.to) || !this.viewportIsAppropriate(dv)) && (dv = this.getViewport(0, zv));
        let Nv = dv.from != this.viewport.from || dv.to != this.viewport.to;
        this.viewport = dv, vv.flags |= this.updateForViewport(), (Nv || !vv.changes.empty || 2 & vv.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, vv.changes))), vv.flags |= this.computeVisibleRanges(vv.changes), zv && (this.scrollTarget = zv), !this.mustEnforceCursorAssoc && (vv.selectionSet || vv.focusChanged) && vv.view.lineWrapping && vv.state.selection.main.empty && vv.state.selection.main.assoc && !vv.state.facet(Lz) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: vv
        } = this, zv = vv.contentDOM, Pv = window.getComputedStyle(zv), Sv = this.heightOracle, ev = Pv.whiteSpace;
        this.defaultTextDirection = "rtl" == Pv.direction ? Nz.RTL : Nz.LTR;
        let gv = this.heightOracle.mustRefreshForWrapping(ev) || "refresh" === this.mustMeasureContent,
          pv = zv.getBoundingClientRect(),
          dv = gv || this.mustMeasureContent || this.contentDOMHeight != pv.height;
        this.contentDOMHeight = pv.height, this.mustMeasureContent = !1;
        let Nv = 0,
          lv = 0;
        if (pv.width && pv.height) {
          let {
            scaleX: vv,
            scaleY: Pv
          } = kv(zv, pv);
          (vv > .005 && Math.abs(this.scaleX - vv) > .005 || Pv > .005 && Math.abs(this.scaleY - Pv) > .005) && (this.scaleX = vv, this.scaleY = Pv, Nv |= 16, gv = dv = !0)
        }
        let Tv = (parseInt(Pv.paddingTop) || 0) * this.scaleY,
          Wv = (parseInt(Pv.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Tv && this.paddingBottom == Wv || (this.paddingTop = Tv, this.paddingBottom = Wv, Nv |= 18), this.editorWidth != vv.scrollDOM.clientWidth && (Sv.lineWrapping && (dv = !0), this.editorWidth = vv.scrollDOM.clientWidth, Nv |= 16);
        let wv = Xv(this.view.contentDOM, !1).y;
        wv != this.scrollParent && (this.scrollParent = wv, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let av = this.getScrollOffset();
        this.scrollOffset != av && (this.scrollAnchorHeight = -1, this.scrollOffset = av), this.scrolledToBottom = ez(this.scrollParent || vv.win);
        let sv = (this.printing ? vS : uh)(zv, this.paddingTop),
          Cv = sv.top - this.pixelViewport.top,
          iv = sv.bottom - this.pixelViewport.bottom;
        this.pixelViewport = sv;
        let cv = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (cv != this.inView && (this.inView = cv, cv && (dv = !0)), !this.inView && !this.scrollTarget && ! function(vv) {
            let zv = vv.getBoundingClientRect(),
              Pv = vv.ownerDocument.defaultView || window;
            return zv.left < Pv.innerWidth && zv.right > 0 && zv.top < Pv.innerHeight && zv.bottom > 0
          }(vv.dom)) return 0;
        let Gv = pv.width;
        if (this.contentDOMWidth == Gv && this.editorHeight == vv.scrollDOM.clientHeight || (this.contentDOMWidth = pv.width, this.editorHeight = vv.scrollDOM.clientHeight, Nv |= 16), dv) {
          let zv = vv.docView.measureVisibleLineHeights(this.viewport);
          if (Sv.mustRefreshForHeights(zv) && (gv = !0), gv || Sv.lineWrapping && Math.abs(Gv - this.contentDOMWidth) > Sv.charWidth) {
            let {
              lineHeight: Pv,
              charWidth: hv,
              textHeight: pv
            } = vv.docView.measureTextSize();
            gv = Pv > 0 && Sv.refresh(ev, Pv, hv, pv, Math.max(5, Gv / hv), zv), gv && (vv.docView.minWidth = 0, Nv |= 16)
          }
          Cv > 0 && iv > 0 ? lv = Math.max(Cv, iv) : Cv < 0 && iv < 0 && (lv = Math.min(Cv, iv)), Ih();
          for (let Pv of this.viewports) {
            let ev = Pv.from == this.viewport.from ? zv : vv.docView.measureVisibleLineHeights(Pv);
            this.heightMap = (gv ? Mh.empty().applyChanges(this.stateDeco, hv.H.empty, this.heightOracle, [new NP(0, 0, 0, vv.state.doc.length)]) : this.heightMap).updateHeight(Sv, 0, gv, new Zh(Pv.from, ev))
          }
          qh && (Nv |= 2)
        }
        let mv = !this.viewportIsAppropriate(this.viewport, lv) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return mv && (2 & Nv && (Nv |= this.updateScaler()), this.viewport = this.getViewport(lv, this.scrollTarget), Nv |= this.updateForViewport()), (2 & Nv || mv) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(gv ? [] : this.lineGaps, vv)), Nv |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, vv.docView.enforceCursorAssoc()), Nv
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(vv, zv) {
        let Pv = .5 - Math.max(-.5, Math.min(.5, vv / 1e3 / 2)),
          hv = this.heightMap,
          Sv = this.heightOracle,
          {
            visibleTop: ev,
            visibleBottom: gv
          } = this,
          pv = new SS(hv.lineAt(ev - 1e3 * Pv, Lh.ByHeight, Sv, 0, 0).from, hv.lineAt(gv + 1e3 * (1 - Pv), Lh.ByHeight, Sv, 0, 0).to);
        if (zv) {
          let {
            head: vv
          } = zv.range;
          if (vv < pv.from || vv > pv.to) {
            let Pv, ev = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              gv = hv.lineAt(vv, Lh.ByPos, Sv, 0, 0);
            Pv = "center" == zv.y ? (gv.top + gv.bottom) / 2 - ev / 2 : "start" == zv.y || "nearest" == zv.y && vv < pv.from ? gv.top : gv.bottom - ev, pv = new SS(hv.lineAt(Pv - 500, Lh.ByHeight, Sv, 0, 0).from, hv.lineAt(Pv + ev + 500, Lh.ByHeight, Sv, 0, 0).to)
          }
        }
        return pv
      }
      mapViewport(vv, zv) {
        let Pv = zv.mapPos(vv.from, -1),
          hv = zv.mapPos(vv.to, 1);
        return new SS(this.heightMap.lineAt(Pv, Lh.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(hv, Lh.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(vv) {
        let {
          from: zv,
          to: Pv
        } = vv, hv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Sv
        } = this.heightMap.lineAt(zv, Lh.ByPos, this.heightOracle, 0, 0), {
          bottom: ev
        } = this.heightMap.lineAt(Pv, Lh.ByPos, this.heightOracle, 0, 0), {
          visibleTop: gv,
          visibleBottom: pv
        } = this;
        return (0 == zv || Sv <= gv - Math.max(10, Math.min(-hv, 250))) && (Pv == this.state.doc.length || ev >= pv + Math.max(10, Math.min(hv, 250))) && Sv > gv - 2e3 && ev < pv + 2e3
      }
      mapLineGaps(vv, zv) {
        if (!vv.length || zv.empty) return vv;
        let Pv = [];
        for (let hv of vv) zv.touchesRange(hv.from, hv.to) || Pv.push(new zS(zv.mapPos(hv.from), zv.mapPos(hv.to), hv.size, hv.displaySize));
        return Pv
      }
      ensureLineGaps(vv, zv) {
        let Pv = this.heightOracle.lineWrapping,
          Sv = Pv ? 1e4 : 2e3,
          ev = Sv >> 1,
          gv = Sv << 1;
        if (this.defaultTextDirection != Nz.LTR && !Pv) return [];
        let pv = [],
          dv = (Sv, gv, Nv, lv) => {
            if (gv - Sv < ev) return;
            let Tv = this.state.selection.main,
              Wv = [Tv.from];
            Tv.empty || Wv.push(Tv.to);
            for (let vv of Wv)
              if (vv > Sv && vv < gv) return dv(Sv, vv - 10, Nv, lv), void dv(vv + 10, gv, Nv, lv);
            let wv = function(vv, zv) {
              for (let Pv of vv)
                if (zv(Pv)) return Pv;
              return
            }(vv, (vv => vv.from >= Nv.from && vv.to <= Nv.to && Math.abs(vv.from - Sv) < ev && Math.abs(vv.to - gv) < ev && !Wv.some((zv => vv.from < zv && vv.to > zv))));
            if (!wv) {
              if (gv < Nv.to && zv && Pv && zv.e_.some((vv => vv.from <= gv && vv.to >= gv))) {
                let vv = zv.moveToLineBoundary(hv.j.cursor(gv), !1, !0).head;
                vv > Sv && (gv = vv)
              }
              let vv = this.gapSize(Nv, Sv, gv, lv);
              wv = new zS(Sv, gv, vv, Pv || vv < 2e6 ? vv : 2e6)
            }
            pv.push(wv)
          },
          Nv = zv => {
            if (zv.length < gv || zv.type != Uv.Text) return;
            let ev = function(vv, zv, Pv) {
              let Sv = [],
                ev = vv,
                gv = 0;
              hv.y.spans(Pv, vv, zv, {
                span() {},
                point(vv, zv) {
                  vv > ev && (Sv.push({
                    from: ev,
                    to: vv
                  }), gv += vv - ev), ev = zv
                }
              }, 20), ev < zv && (Sv.push({
                from: ev,
                to: zv
              }), gv += zv - ev);
              return {
                total: gv,
                PC: Sv
              }
            }(zv.from, zv.to, this.stateDeco);
            if (ev.total < gv) return;
            let pv, Nv, lv = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (Pv) {
              let vv, Pv, hv = Sv / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != lv) {
                let Sv = gS(ev, lv),
                  gv = ((this.visibleBottom - this.visibleTop) / 2 + hv) / zv.height;
                vv = Sv - gv, Pv = Sv + gv
              } else vv = (this.visibleTop - zv.top - hv) / zv.height, Pv = (this.visibleBottom - zv.top + hv) / zv.height;
              pv = eS(ev, vv), Nv = eS(ev, Pv)
            } else {
              let Pv = ev.total * this.heightOracle.charWidth,
                hv = Sv * this.heightOracle.charWidth,
                gv = 0;
              if (Pv > 2e6)
                for (let Sv of vv) Sv.from >= zv.from && Sv.from < zv.to && Sv.size != Sv.displaySize && Sv.from * this.heightOracle.charWidth + gv < this.pixelViewport.left && (gv = Sv.size - Sv.displaySize);
              let dv, Tv, Wv = this.pixelViewport.left + gv,
                wv = this.pixelViewport.right + gv;
              if (null != lv) {
                let vv = gS(ev, lv),
                  zv = ((wv - Wv) / 2 + hv) / Pv;
                dv = vv - zv, Tv = vv + zv
              } else dv = (Wv - hv) / Pv, Tv = (wv + hv) / Pv;
              pv = eS(ev, dv), Nv = eS(ev, Tv)
            }
            pv > zv.from && dv(zv.from, pv, zv, ev), Nv < zv.to && dv(Nv, zv.to, zv, ev)
          };
        for (let hv of this.viewportLines) Array.isArray(hv.type) ? hv.type.forEach(Nv) : Nv(hv);
        return pv
      }
      gapSize(vv, zv, Pv, hv) {
        let Sv = gS(hv, Pv) - gS(hv, zv);
        return this.heightOracle.lineWrapping ? vv.height * Sv : hv.total * this.heightOracle.charWidth * Sv
      }
      updateLineGaps(vv) {
        zS.same(vv, this.lineGaps) || (this.lineGaps = vv, this.lineGapDeco = Rv.set(vv.map((vv => vv.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(vv) {
        let zv = this.stateDeco;
        this.lineGaps.length && (zv = zv.concat(this.lineGapDeco));
        let Pv = [];
        hv.y.spans(zv, this.viewport.from, this.viewport.to, {
          span(vv, zv) {
            Pv.push({
              from: vv,
              to: zv
            })
          },
          point() {}
        }, 20);
        let Sv = 0;
        if (Pv.length != this.e_.length) Sv = 12;
        else
          for (let hv = 0; hv < Pv.length && !(8 & Sv); hv++) {
            let zv = this.e_[hv],
              ev = Pv[hv];
            zv.from == ev.from && zv.to == ev.to || (Sv |= 4, vv && vv.mapPos(zv.from, -1) == ev.from && vv.mapPos(zv.to, 1) == ev.to || (Sv |= 8))
          }
        return this.e_ = Pv, Sv
      }
      lineBlockAt(vv) {
        return vv >= this.viewport.from && vv <= this.viewport.to && this.viewportLines.find((zv => zv.from <= vv && zv.to >= vv)) || lS(this.heightMap.lineAt(vv, Lh.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(vv) {
        return vv >= this.viewportLines[0].top && vv <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((zv => zv.top <= vv && zv.bottom >= vv)) || lS(this.heightMap.lineAt(this.scaler.fromDOM(vv), Lh.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(vv) {
        let zv = this.lineBlockAtHeight(vv + 8);
        return zv.from >= this.viewport.from || this.viewportLines[0].top - vv > 200 ? zv : this.viewportLines[0]
      }
      elementAtHeight(vv) {
        return lS(this.heightMap.blockAt(this.scaler.fromDOM(vv), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class SS {
      constructor(vv, zv) {
        this.from = vv, this.to = zv
      }
    }

    function eS(vv, zv) {
      let {
        total: Pv,
        PC: hv
      } = vv;
      if (zv <= 0) return hv[0].from;
      if (zv >= 1) return hv[hv.length - 1].to;
      let Sv = Math.floor(Pv * zv);
      for (let ev = 0;; ev++) {
        let {
          from: vv,
          to: zv
        } = hv[ev], Pv = zv - vv;
        if (Sv <= Pv) return vv + Sv;
        Sv -= Pv
      }
    }

    function gS(vv, zv) {
      let Pv = 0;
      for (let {
          from: hv,
          to: Sv
        }
        of vv.PC) {
        if (zv <= Sv) {
          Pv += zv - hv;
          break
        }
        Pv += Sv - hv
      }
      return Pv / vv.total
    }
    const pS = {
      toDOM: vv => vv,
      fromDOM: vv => vv,
      scale: 1,
      eq(vv) {
        return vv == this
      }
    };

    function dS(vv) {
      let zv = vv.facet(vP).filter((vv => "function" != typeof vv)),
        Pv = vv.facet(PP).filter((vv => "function" != typeof vv));
      return Pv.length && zv.push(hv.y.join(Pv)), zv
    }
    class NS {
      constructor(vv, zv, Pv) {
        let hv = 0,
          Sv = 0,
          ev = 0;
        this.viewports = Pv.map((Pv => {
          let {
            from: Sv,
            to: ev
          } = Pv, gv = zv.lineAt(Sv, Lh.ByPos, vv, 0, 0).top, pv = zv.lineAt(ev, Lh.ByPos, vv, 0, 0).bottom;
          return hv += pv - gv, {
            from: Sv,
            to: ev,
            top: gv,
            bottom: pv,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - hv) / (zv.height - hv);
        for (let gv of this.viewports) gv.domTop = ev + (gv.top - Sv) * this.scale, ev = gv.domBottom = gv.domTop + (gv.bottom - gv.top), Sv = gv.bottom
      }
      toDOM(vv) {
        for (let zv = 0, Pv = 0, hv = 0;; zv++) {
          let Sv = zv < this.viewports.length ? this.viewports[zv] : null;
          if (!Sv || vv < Sv.top) return hv + (vv - Pv) * this.scale;
          if (vv <= Sv.bottom) return Sv.domTop + (vv - Sv.top);
          Pv = Sv.bottom, hv = Sv.domBottom
        }
      }
      fromDOM(vv) {
        for (let zv = 0, Pv = 0, hv = 0;; zv++) {
          let Sv = zv < this.viewports.length ? this.viewports[zv] : null;
          if (!Sv || vv < Sv.domTop) return Pv + (vv - hv) / this.scale;
          if (vv <= Sv.domBottom) return Sv.top + (vv - Sv.domTop);
          Pv = Sv.bottom, hv = Sv.domBottom
        }
      }
      eq(vv) {
        return vv instanceof NS && (this.scale == vv.scale && this.viewports.length == vv.viewports.length && this.viewports.every(((zv, Pv) => zv.from == vv.viewports[Pv].from && zv.to == vv.viewports[Pv].to)))
      }
    }

    function lS(vv, zv) {
      if (1 == zv.scale) return vv;
      let Pv = zv.toDOM(vv.top),
        hv = zv.toDOM(vv.bottom);
      return new Ah(vv.from, vv.length, Pv, hv - Pv, Array.isArray(vv._content) ? vv._content.map((vv => lS(vv, zv))) : vv._content)
    }
    const TS = hv.q.define({
        combine: vv => vv.join(" ")
      }),
      WS = hv.q.define({
        combine: vv => vv.indexOf(!0) > -1
      }),
      wS = Sv.c.newName(),
      aS = Sv.c.newName(),
      sS = Sv.c.newName(),
      CS = {
        "&light": "." + aS,
        "&dark": "." + sS
      };

    function iS(vv, zv, Pv) {
      return new Sv.c(zv, {
        finish: zv => /&/.test(zv) ? zv.replace(/&\w*/, (zv => {
          if ("&" == zv) return vv;
          if (!Pv || !Pv[zv]) throw new RangeError(`Unsupported selector: ${zv}`);
          return Pv[zv]
        })) : vv + " " + zv
      })
    }
    const cS = iS("." + wS, {
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
      }, CS),
      GS = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      mS = Fv.ie && Fv.ie_version <= 11;
    class jS {
      constructor(vv) {
        this.view = vv, this.active = !1, this.editContext = null, this.selectionRange = new uv, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = vv.contentDOM, this.observer = new MutationObserver((zv => {
          for (let vv of zv) this.queue.push(vv);
          (Fv.ie && Fv.ie_version <= 11 || Fv.ios && vv.composing) && zv.some((vv => "childList" == vv.type && vv.removedNodes.length || "characterData" == vv.type && vv.oldValue.length > vv.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !Fv.android || !1 === vv.constructor.EDIT_CONTEXT || Fv.chrome && Fv.chrome_version < 126 || (this.editContext = new YS(vv), vv.state.facet(Ez) && (vv.contentDOM.editContext = this.editContext.editContext)), mS && (this.onCharData = vv => {
          this.queue.push({
            target: vv.target,
            type: "characterData",
            oldValue: vv.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.mG = this.mG.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var vv;
          (null === (vv = this.view.docView) || void 0 === vv ? void 0 : vv.lastUpdate) < Date.now() - 75 && this.mG()
        })), this.resizeScroll.observe(vv.scrollDOM)), this.addWindowListeners(this.win = vv.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((vv => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), vv.length > 0 && vv[vv.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((vv => {
          vv.length > 0 && vv[vv.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(vv) {
        this.view.inputState.runHandlers("scroll", vv), this.intersecting && this.view.measure()
      }
      onScroll(vv) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(vv)
      }
      mG() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(vv) {
        ("change" != vv.type && vv.type || vv.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(vv) {
        if (this.gapIntersection && (vv.length != this.gaps.length || this.gaps.some(((zv, Pv) => zv != vv[Pv])))) {
          this.gapIntersection.disconnect();
          for (let zv of vv) this.gapIntersection.observe(zv);
          this.gaps = vv
        }
      }
      onSelectionChange(vv) {
        let zv = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: Pv
        } = this, hv = this.selectionRange;
        if (Pv.state.facet(Ez) ? Pv.root.activeElement != this.dom : !Hv(this.dom, hv)) return;
        let Sv = hv.anchorNode && Pv.docView.tile.nearest(hv.anchorNode);
        Sv && Sv.isWidget() && Sv.widget.ignoreEvent(vv) ? zv || (this.selectionChanged = !1) : (Fv.ie && Fv.ie_version <= 11 || Fv.android && Fv.chrome) && !Pv.state.selection.main.empty && hv.focusNode && yv(hv.focusNode, hv.focusOffset, hv.anchorNode, hv.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: vv
        } = this, zv = Av(vv.root);
        if (!zv) return !1;
        let Pv = Fv.safari && 11 == vv.root.nodeType && vv.root.activeElement == this.dom && function(vv, zv) {
          if (zv.getComposedRanges) {
            let Pv = zv.getComposedRanges(vv.root)[0];
            if (Pv) return FS(vv, Pv)
          }
          let Pv = null;

          function hv(vv) {
            vv.preventDefault(), vv.stopImmediatePropagation(), Pv = vv.getTargetRanges()[0]
          }
          return vv.contentDOM.addEventListener("beforeinput", hv, !0), vv.dom.ownerDocument.execCommand("indent"), vv.contentDOM.removeEventListener("beforeinput", hv, !0), Pv ? FS(vv, Pv) : null
        }(this.view, zv) || zv;
        if (!Pv || this.selectionRange.eq(Pv)) return !1;
        let hv = Hv(this.dom, Pv);
        return hv && !this.selectionChanged && vv.inputState.lastFocusTime > Date.now() - 200 && vv.inputState.lastTouchTime < Date.now() - 300 && function(vv, zv) {
          let Pv = zv.focusNode,
            hv = zv.focusOffset;
          if (!Pv || zv.anchorNode != Pv || zv.anchorOffset != hv) return !1;
          for (hv = Math.min(hv, ov(Pv));;)
            if (hv) {
              if (1 != Pv.nodeType) return !1;
              let vv = Pv.childNodes[hv - 1];
              "false" == vv.contentEditable ? hv-- : (Pv = vv, hv = ov(Pv))
            } else {
              if (Pv == vv) return !0;
              hv = Bv(Pv), Pv = Pv.parentNode
            }
        }(this.dom, Pv) ? (this.view.inputState.lastFocusTime = 0, vv.docView.updateSelection(), !1) : (this.selectionRange.setRange(Pv), hv && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(vv, zv) {
        this.selectionRange.set(vv.node, vv.offset, zv.node, zv.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let vv = 0,
          zv = null;
        for (let Pv = this.dom; Pv;)
          if (1 == Pv.nodeType) !zv && vv < this.scrollTargets.length && this.scrollTargets[vv] == Pv ? vv++ : zv || (zv = this.scrollTargets.slice(0, vv)), zv && zv.push(Pv), Pv = Pv.assignedSlot || Pv.parentNode;
          else {
            if (11 != Pv.nodeType) break;
            Pv = Pv.host
          } if (vv < this.scrollTargets.length && !zv && (zv = this.scrollTargets.slice(0, vv)), zv) {
          for (let vv of this.scrollTargets) vv.removeEventListener("scroll", this.onScroll);
          for (let vv of this.scrollTargets = zv) vv.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(vv) {
        if (!this.active) return vv();
        try {
          return this.stop(), vv()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, GS), mS && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), mS && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(vv, zv) {
        var Pv;
        if (!this.delayedAndroidKey) {
          let vv = () => {
            let vv = this.delayedAndroidKey;
            if (vv) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = vv.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && vv.force && Sz(this.dom, vv.key, vv.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(vv)
        }
        this.delayedAndroidKey && "Enter" != vv || (this.delayedAndroidKey = {
          key: vv,
          keyCode: zv,
          force: this.lastChange < Date.now() - 50 || !!(null === (Pv = this.delayedAndroidKey) || void 0 === Pv ? void 0 : Pv.force)
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
        for (let vv of this.observer.takeRecords()) this.queue.push(vv);
        return this.queue
      }
      processRecords() {
        let vv = this.pendingRecords();
        vv.length && (this.queue = []);
        let zv = -1,
          Pv = -1,
          hv = !1;
        for (let Sv of vv) {
          let vv = this.readMutation(Sv);
          vv && (vv.typeOver && (hv = !0), -1 == zv ? ({
            from: zv,
            to: Pv
          } = vv) : (zv = Math.min(vv.from, zv), Pv = Math.max(vv.to, Pv)))
        }
        return {
          from: zv,
          to: Pv,
          typeOver: hv
        }
      }
      readChange() {
        let {
          from: vv,
          to: zv,
          typeOver: Pv
        } = this.processRecords(), hv = this.selectionChanged && Hv(this.dom, this.selectionRange);
        if (vv < 0 && !hv) return null;
        vv > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Sv = new Ph(this.view, vv, zv, Pv);
        return this.view.docView.domChanged = {
          newSel: Sv.newSel ? Sv.newSel.main : null
        }, Sv
      }
      flush() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        vv && this.readSelectionRange();
        let zv = this.readChange();
        if (!zv) return this.view.requestMeasure(), !1;
        let Pv = this.view.state,
          hv = Sh(this.view, zv);
        return this.view.state == Pv && (zv.domChanged || zv.newSel && !ph(this.view.state.selection, zv.newSel.main)) && this.view.update([]), hv
      }
      readMutation(vv) {
        let zv = this.view.docView.tile.nearest(vv.target);
        if (!zv || zv.isWidget()) return null;
        if (zv.markDirty("attributes" == vv.type), "childList" == vv.type) {
          let Pv = fS(zv, vv.previousSibling || vv.target.previousSibling, -1),
            hv = fS(zv, vv.nextSibling || vv.target.nextSibling, 1);
          return {
            from: Pv ? zv.posAfter(Pv) : zv.posAtStart,
            to: hv ? zv.posBefore(hv) : zv.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == vv.type ? {
          from: zv.posAtStart,
          to: zv.posAtEnd,
          typeOver: vv.target.nodeValue == vv.oldValue
        } : null
      }
      setWindow(vv) {
        vv != this.win && (this.removeWindowListeners(this.win), this.win = vv, this.addWindowListeners(this.win))
      }
      addWindowListeners(vv) {
        vv.addEventListener("resize", this.mG), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : vv.addEventListener("beforeprint", this.onPrint), vv.addEventListener("scroll", this.onScroll), vv.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(vv) {
        vv.removeEventListener("scroll", this.onScroll), vv.removeEventListener("resize", this.mG), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : vv.removeEventListener("beforeprint", this.onPrint), vv.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(vv) {
        this.editContext && (this.editContext.update(vv), vv.startState.facet(Ez) != vv.state.facet(Ez) && (vv.view.contentDOM.editContext = vv.state.facet(Ez) ? this.editContext.editContext : null))
      }
      destroy() {
        var vv, zv, Pv;
        this.stop(), null === (vv = this.intersection) || void 0 === vv || vv.disconnect(), null === (zv = this.gapIntersection) || void 0 === zv || zv.disconnect(), null === (Pv = this.resizeScroll) || void 0 === Pv || Pv.disconnect();
        for (let hv of this.scrollTargets) hv.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function fS(vv, zv, Pv) {
      for (; zv;) {
        let hv = WP.get(zv);
        if (hv && hv.parent == vv) return hv;
        let Sv = zv.parentNode;
        zv = Sv != vv.dom ? Sv : Pv > 0 ? zv.nextSibling : zv.previousSibling
      }
      return null
    }

    function FS(vv, zv) {
      let Pv = zv.startContainer,
        hv = zv.startOffset,
        Sv = zv.endContainer,
        ev = zv.endOffset,
        gv = vv.docView.domAtPos(vv.state.selection.main.anchor, 1);
      return yv(gv.node, gv.offset, Sv, ev) && ([Pv, hv, Sv, ev] = [Sv, ev, Pv, hv]), {
        anchorNode: Pv,
        anchorOffset: hv,
        focusNode: Sv,
        focusOffset: ev
      }
    }
    class YS {
      constructor(vv) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(vv.state);
        let zv = this.editContext = new window.EditContext({
          text: vv.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, vv.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(vv.state.selection.main.head)
        });
        this.handlers.textupdate = Pv => {
          let Sv = vv.state.selection.main,
            {
              anchor: ev,
              head: gv
            } = Sv,
            pv = this.toEditorPos(Pv.updateRangeStart),
            dv = this.toEditorPos(Pv.updateRangeEnd);
          vv.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: Pv.updateRangeStart,
            editorBase: pv,
            drifted: !1
          });
          let Nv = dv - pv > Pv.text.length;
          pv == this.from && ev < this.from ? pv = ev : dv == this.to && ev > this.to && (dv = ev);
          let lv = gh(vv.state.sliceDoc(pv, dv), Pv.text, (Nv ? Sv.from : Sv.to) - pv, Nv ? "end" : null);
          if (!lv) {
            let zv = hv.j.single(this.toEditorPos(Pv.selectionStart), this.toEditorPos(Pv.selectionEnd));
            return void(ph(zv, Sv) || vv.dispatch({
              selection: zv,
              userEvent: "select"
            }))
          }
          let Tv = {
            from: lv.from + pv,
            to: lv.toA + pv,
            insert: hv.H.of(Pv.text.slice(lv.from, lv.toB).split("\n"))
          };
          if ((Fv.mac || Fv.android) && Tv.from == gv - 1 && /^\. ?$/.test(Pv.text) && "off" == vv.contentDOM.getAttribute("autocorrect") && (Tv = {
              from: pv,
              to: dv,
              insert: hv.H.of([Pv.text.replace(".", " ")])
            }), this.pendingContextChange = Tv, !vv.state.readOnly) {
            let zv = this.to - this.from + (Tv.to - Tv.from + Tv.insert.length);
            eh(vv, Tv, hv.j.single(this.toEditorPos(Pv.selectionStart, zv), this.toEditorPos(Pv.selectionEnd, zv)))
          }
          this.pendingContextChange && (this.revertPending(vv.state), this.setSelection(vv.state)), Tv.from < Tv.to && !Tv.insert.length && vv.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(zv.text.slice(Math.max(0, Pv.updateRangeStart - 1), Math.min(zv.text.length, Pv.updateRangeStart + 1))) && this.handlers.compositionend(Pv)
        }, this.handlers.characterboundsupdate = Pv => {
          let hv = [],
            Sv = null;
          for (let zv = this.toEditorPos(Pv.rangeStart), ev = this.toEditorPos(Pv.rangeEnd); zv < ev; zv++) {
            let Pv = vv.coordsForChar(zv);
            Sv = Pv && new DOMRect(Pv.left, Pv.top, Pv.right - Pv.left, Pv.bottom - Pv.top) || Sv || new DOMRect, hv.push(Sv)
          }
          zv.updateCharacterBounds(Pv.rangeStart, hv)
        }, this.handlers.textformatupdate = zv => {
          let Pv = [];
          for (let vv of zv.getTextFormats()) {
            let zv = vv.underlineStyle,
              hv = vv.underlineThickness;
            if (!/none/i.test(zv) && !/none/i.test(hv)) {
              let Sv = this.toEditorPos(vv.rangeStart),
                ev = this.toEditorPos(vv.rangeEnd);
              if (Sv < ev) {
                let vv = `text-decoration: underline ${/^[a-z]/.test(zv)?zv+" ":"Dashed"==zv?"dashed ":"Squiggle"==zv?"wavy ":""}${/thin/i.test(hv)?1:2}px`;
                Pv.push(Rv.mark({
                  attributes: {
                    style: vv
                  }
                }).range(Sv, ev))
              }
            }
          }
          vv.dispatch({
            effects: Bz.of(Rv.set(Pv))
          })
        }, this.handlers.compositionstart = () => {
          vv.inputState.composing < 0 && (vv.inputState.composing = 0, vv.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (vv.inputState.composing = -1, vv.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: zv
            } = this.composing;
            this.composing = null, zv && this.reset(vv.state)
          }
        };
        for (let Pv in this.handlers) zv.addEventListener(Pv, this.handlers[Pv]);
        this.measureReq = {
          read: vv => {
            this.editContext.updateControlBounds(vv.contentDOM.getBoundingClientRect());
            let zv = Av(vv.root);
            zv && zv.rangeCount && this.editContext.updateSelectionBounds(zv.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(vv) {
        let zv = 0,
          Pv = !1,
          hv = this.pendingContextChange;
        return vv.changes.iterChanges(((Sv, ev, gv, pv, dv) => {
          if (Pv) return;
          let Nv = dv.length - (ev - Sv);
          if (hv && ev >= hv.to) {
            if (hv.from == Sv && hv.to == ev && hv.insert.eq(dv)) return hv = this.pendingContextChange = null, zv += Nv, void(this.to += Nv);
            hv = null, this.revertPending(vv.state)
          }
          if (Sv += zv, (ev += zv) <= this.from) this.from += Nv, this.to += Nv;
          else if (Sv < this.to) {
            if (Sv < this.from || ev > this.to || this.to - this.from + dv.length > 3e4) return void(Pv = !0);
            this.editContext.updateText(this.toContextPos(Sv), this.toContextPos(ev), dv.toString()), this.to += Nv
          }
          zv += Nv
        })), hv && !Pv && this.revertPending(vv.state), !Pv
      }
      update(vv) {
        let zv = this.pendingContextChange,
          Pv = vv.startState.selection.main;
        this.composing && (this.composing.drifted || !vv.changes.touchesRange(Pv.from, Pv.to) && vv.transactions.some((vv => !vv.isUserEvent("input.type") && vv.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = vv.changes.mapPos(this.composing.editorBase)) : this.applyEdits(vv) && this.rangeIsValid(vv.state) ? (vv.docChanged || vv.selectionSet || zv) && this.setSelection(vv.state) : (this.pendingContextChange = null, this.reset(vv.state)), (vv.geometryChanged || vv.docChanged || vv.selectionSet) && vv.view.requestMeasure(this.measureReq)
      }
      resetRange(vv) {
        let {
          head: zv
        } = vv.selection.main;
        this.from = Math.max(0, zv - 1e4), this.to = Math.min(vv.doc.length, zv + 1e4)
      }
      reset(vv) {
        this.resetRange(vv), this.editContext.updateText(0, this.editContext.text.length, vv.doc.sliceString(this.from, this.to)), this.setSelection(vv)
      }
      revertPending(vv) {
        let zv = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(zv.from), this.toContextPos(zv.from + zv.insert.length), vv.doc.sliceString(zv.from, zv.to))
      }
      setSelection(vv) {
        let {
          main: zv
        } = vv.selection, Pv = this.toContextPos(Math.max(this.from, Math.min(this.to, zv.anchor))), hv = this.toContextPos(zv.head);
        this.editContext.selectionStart == Pv && this.editContext.selectionEnd == hv || this.editContext.updateSelection(Pv, hv)
      }
      rangeIsValid(vv) {
        let {
          head: zv
        } = vv.selection.main;
        return !(this.from > 0 && zv - this.from < 500 || this.to < vv.doc.length && this.to - zv < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        vv = Math.min(vv, zv);
        let Pv = this.composing;
        return Pv && Pv.drifted ? Pv.editorBase + (vv - Pv.contextBase) : vv + this.from
      }
      toContextPos(vv) {
        let zv = this.composing;
        return zv && zv.drifted ? zv.contextBase + (vv - zv.editorBase) : vv - this.from
      }
      destroy() {
        for (let vv in this.handlers) this.editContext.removeEventListener(vv, this.handlers[vv])
      }
    }
    class nS {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get e_() {
        return this.viewState.e_
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
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var zv;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), vv.parent && vv.parent.appendChild(this.dom);
        let {
          dispatch: Pv
        } = vv;
        this.dispatchTransactions = vv.dispatchTransactions || Pv && (vv => vv.forEach((vv => Pv(vv, this)))) || (vv => this.update(vv)), this.dispatch = this.dispatch.bind(this), this._root = vv.root || function(vv) {
          for (; vv;) {
            if (vv && (9 == vv.nodeType || 11 == vv.nodeType && vv.host)) return vv;
            vv = vv.assignedSlot || vv.parentNode
          }
          return null
        }(vv.parent) || document, this.viewState = new hS(this, vv.state || hv.n.create(vv)), vv.scrollTo && vv.scrollTo.is(yz) && (this.viewState.scrollTarget = vv.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(bz).map((vv => new kz(vv)));
        for (let hv of this.plugins) hv.update(this);
        this.observer = new jS(this), this.inputState = new dh(this), this.inputState.ensureHandlers(this.plugins), this.docView = new IP(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (zv = document.fonts) || void 0 === zv ? void 0 : zv.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        let Sv = 1 == zv.length && zv[0] instanceof hv.J ? zv : 1 == zv.length && Array.isArray(zv[0]) ? zv[0] : [this.state.update(...zv)];
        this.dispatchTransactions(Sv, this)
      }
      update(vv) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let zv, Pv = !1,
          Sv = !1,
          ev = this.state;
        for (let hv of vv) {
          if (hv.startState != ev) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          ev = hv.state
        }
        if (this.destroyed) return void(this.viewState.state = ev);
        let gv = this.hasFocus,
          pv = 0,
          dv = null;
        vv.some((vv => vv.annotation(Vh))) ? (this.inputState.notifiedFocused = gv, pv = 1) : gv != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = gv, dv = Uh(ev, gv), dv || (pv = 1));
        let Nv = this.observer.delayedAndroidKey,
          lv = null;
        if (Nv ? (this.observer.clearDelayedAndroidKey(), lv = this.observer.readChange(), (lv && !this.state.doc.eq(ev.doc) || !this.state.selection.eq(ev.selection)) && (lv = null)) : this.observer.clear(), ev.facet(hv.n.phrases) != this.state.facet(hv.n.phrases)) return this.setState(ev);
        zv = lP.create(this, ev, vv), zv.flags |= pv;
        let Tv = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let zv of vv) {
            if (Tv && (Tv = Tv.map(zv.changes)), zv.scrollIntoView) {
              let {
                main: vv
              } = zv.state.selection, {
                x: Pv,
                y: Sv
              } = this.state.facet(nS.cursorScrollMargin);
              Tv = new Mz(vv.empty ? vv : hv.j.cursor(vv.head, vv.head > vv.anchor ? -1 : 1), "nearest", "nearest", Sv, Pv)
            }
            for (let vv of zv.effects) vv.is(yz) && (Tv = vv.value.clip(this.state))
          }
          this.viewState.update(zv, Tv), this.bidiCache = KS.update(this.bidiCache, zv.changes), zv.empty || (this.updatePlugins(zv), this.inputState.update(zv)), Pv = this.docView.update(zv), this.state.facet(dP) != this.styleModules && this.mountStyles(), Sv = this.updateAttrs(), this.showAnnouncements(vv), this.docView.updateSelection(Pv, vv.some((vv => vv.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (zv.startState.facet(TS) != zv.state.facet(TS) && (this.viewState.mustMeasureContent = !0), (Pv || Sv || Tv || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), Pv && this.docViewUpdate(), !zv.empty)
          for (let hv of this.state.facet(tz)) try {
            hv(zv)
          } catch (Wv) {
            Jz(this.state, Wv, "update listener")
          }(dv || lv) && Promise.resolve().then((() => {
            dv && this.state == dv.startState && this.dispatch(dv), lv && !Sh(this, lv) && Nv.force && Sz(this.contentDOM, Nv.key, Nv.keyCode)
          }))
      }
      setState(vv) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = vv);
        this.updateState = 2;
        let zv = this.hasFocus;
        try {
          for (let vv of this.plugins) vv.destroy(this);
          this.viewState = new hS(this, vv), this.plugins = vv.facet(bz).map((vv => new kz(vv))), this.pluginMap.clear();
          for (let vv of this.plugins) vv.update(this);
          this.docView.destroy(), this.docView = new IP(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        zv && this.focus(), this.requestMeasure()
      }
      updatePlugins(vv) {
        let zv = vv.startState.facet(bz),
          Pv = vv.state.facet(bz);
        if (zv != Pv) {
          let hv = [];
          for (let Sv of Pv) {
            let Pv = zv.indexOf(Sv);
            if (Pv < 0) hv.push(new kz(Sv));
            else {
              let zv = this.plugins[Pv];
              zv.mustUpdate = vv, hv.push(zv)
            }
          }
          for (let zv of this.plugins) zv.mustUpdate != vv && zv.destroy(this);
          this.plugins = hv, this.pluginMap.clear()
        } else
          for (let hv of this.plugins) hv.mustUpdate = vv;
        for (let hv = 0; hv < this.plugins.length; hv++) this.plugins[hv].update(this);
        zv != Pv && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let zv of this.plugins) {
          let Pv = zv.value;
          if (Pv && Pv.docViewUpdate) try {
            Pv.docViewUpdate(this)
          } catch (vv) {
            Jz(this.state, vv, "doc view update listener")
          }
        }
      }
      measure() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, vv && this.observer.forceFlush();
        let zv = null,
          Pv = this.viewState.scrollParent,
          hv = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Sv,
            scrollAnchorHeight: ev
          } = this.viewState;
        Math.abs(hv - this.viewState.scrollOffset) > 1 && (ev = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let vv = 0;; vv++) {
            if (ev < 0)
              if (ez(Pv || this.win)) Sv = -1, ev = this.viewState.heightMap.height;
              else {
                let vv = this.viewState.scrollAnchorAt(hv);
                Sv = vv.from, ev = vv.top
              } this.updateState = 1;
            let pv = this.viewState.measure();
            if (!pv && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (vv > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let dv = [];
            4 & pv || ([this.measureRequests, dv] = [dv, this.measureRequests]);
            let Nv = dv.map((vv => {
                try {
                  return vv.read(this)
                } catch (zv) {
                  return Jz(this.state, zv), DS
                }
              })),
              lv = lP.create(this, this.state, []),
              Tv = !1;
            lv.flags |= pv, zv ? zv.flags |= pv : zv = lv, this.updateState = 2, lv.empty || (this.updatePlugins(lv), this.inputState.update(lv), this.updateAttrs(), Tv = this.docView.update(lv), Tv && this.docViewUpdate());
            for (let vv = 0; vv < dv.length; vv++)
              if (Nv[vv] != DS) try {
                let zv = dv[vv];
                zv.write && zv.write(Nv[vv], this)
              } catch (gv) {
                Jz(this.state, gv)
              }
            if (Tv && this.docView.updateSelection(!0), !lv.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, ev = -1;
                  continue
                } {
                  let vv = ((Sv < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Sv).top) - ev) / this.scaleY;
                  if ((vv > 1 || vv < -1) && (Pv == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    hv += vv, Pv ? Pv.scrollTop += vv : this.win.scrollBy(0, vv), ev = -1;
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
        if (zv && !zv.empty)
          for (let pv of this.state.facet(tz)) pv(zv)
      }
      get themeClasses() {
        return wS + " " + (this.state.facet(WS) ? sS : aS) + " " + this.state.facet(TS)
      }
      updateAttrs() {
        let vv = VS(this, Xz, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          zv = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Ez) ? "true" : "false",
            class: "cm-content",
            style: `${Fv.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (zv["aria-readonly"] = "true"), VS(this, uz, zv);
        let Pv = this.observer.ignore((() => {
          let Pv = Dv(this.contentDOM, this.contentAttrs, zv),
            hv = Dv(this.dom, this.editorAttrs, vv);
          return Pv || hv
        }));
        return this.editorAttrs = vv, this.contentAttrs = zv, Pv
      }
      showAnnouncements(vv) {
        let zv = !0;
        for (let Pv of vv)
          for (let vv of Pv.effects)
            if (vv.is(nS.announce)) {
              zv && (this.announceDOM.textContent = ""), zv = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = vv.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(dP);
        let vv = this.state.facet(nS.cspNonce);
        Sv.c.mount(this.root, this.styleModules.concat(cS).reverse(), vv ? {
          nonce: vv
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(vv) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), vv) {
          if (this.measureRequests.indexOf(vv) > -1) return;
          if (null != vv.key)
            for (let zv = 0; zv < this.measureRequests.length; zv++)
              if (this.measureRequests[zv].key === vv.key) return void(this.measureRequests[zv] = vv);
          this.measureRequests.push(vv)
        }
      }
      plugin(vv) {
        let zv = this.pluginMap.get(vv);
        return (void 0 === zv || zv && zv.plugin != vv) && this.pluginMap.set(vv, zv = this.plugins.find((zv => zv.plugin == vv)) || null), zv && zv.update(this).value
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
      elementAtHeight(vv) {
        return this.readMeasured(), this.viewState.elementAtHeight(vv)
      }
      lineBlockAtHeight(vv) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(vv)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(vv) {
        return this.viewState.lineBlockAt(vv)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(vv, zv, Pv) {
        return EP(this, vv, yP(this, vv, zv, Pv))
      }
      moveByGroup(vv, zv) {
        return EP(this, vv, yP(this, vv, zv, (zv => function(vv, zv, Pv) {
          let Sv = vv.state.charCategorizer(zv),
            ev = Sv(Pv);
          return vv => {
            let zv = Sv(vv);
            return ev == hv.f.Space && (ev = zv), ev == zv
          }
        }(this, vv.head, zv))))
      }
      visualLineSide(vv, zv) {
        let Pv = this.bidiSpans(vv),
          Sv = this.textDirectionAt(vv.from),
          ev = Pv[zv ? Pv.length - 1 : 0];
        return hv.j.cursor(ev.side(zv, Sv) + vv.from, ev.forward(!zv, Sv) ? 1 : -1)
      }
      moveToLineBoundary(vv, zv) {
        return function(vv, zv, Pv, Sv) {
          let ev = MP(vv, zv.head, zv.assoc || -1),
            gv = Sv && ev.type == Uv.Text && (vv.lineWrapping || ev.widgetLineBreaks) ? vv.coordsAtPos(zv.assoc < 0 && zv.head > ev.from ? zv.head - 1 : zv.head) : null;
          if (gv) {
            let zv = vv.dom.getBoundingClientRect(),
              Sv = vv.textDirectionAt(ev.from),
              pv = vv.posAtCoords({
                x: Pv == (Sv == Nz.LTR) ? zv.right - 1 : zv.left + 1,
                y: (gv.top + gv.bottom) / 2
              });
            if (null != pv) return hv.j.cursor(pv, Pv ? -1 : 1)
          }
          return hv.j.cursor(Pv ? ev.to : ev.from, Pv ? -1 : 1)
        }(this, vv, zv, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(vv, zv, Pv) {
        return EP(this, vv, function(vv, zv, Pv, Sv) {
          let ev = zv.head,
            gv = Pv ? 1 : -1;
          if (ev == (Pv ? vv.state.doc.length : 0)) return hv.j.cursor(ev, zv.assoc);
          let pv, dv = zv.goalColumn,
            Nv = vv.contentDOM.getBoundingClientRect(),
            lv = vv.coordsAtPos(ev, zv.assoc || ((zv.empty ? Pv : zv.head == zv.from) ? 1 : -1)),
            Tv = vv.documentTop;
          if (lv) null == dv && (dv = lv.left - Nv.left), pv = gv < 0 ? lv.top : lv.bottom;
          else {
            let zv = vv.viewState.lineBlockAt(ev);
            null == dv && (dv = Math.min(Nv.right - Nv.left, vv.defaultCharacterWidth * (ev - zv.from))), pv = (gv < 0 ? zv.top : zv.bottom) + Tv
          }
          let Wv = Nv.left + dv,
            wv = vv.viewState.heightOracle.textHeight >> 1,
            av = null !== Sv && void 0 !== Sv ? Sv : wv;
          for (let sv = 0;; sv += wv) {
            let zv = pv + (av + sv) * gv,
              Sv = bP(vv, {
                x: Wv,
                y: zv
              }, !1, gv);
            if (Pv ? zv > Nv.bottom : zv < Nv.top) return hv.j.cursor(Sv.pos, Sv.assoc);
            let ev = vv.coordsAtPos(Sv.pos, Sv.assoc),
              lv = ev ? (ev.top + ev.bottom) / 2 : 0;
            if (!ev || (Pv ? lv > pv : lv < pv)) return hv.j.cursor(Sv.pos, Sv.assoc, void 0, dv)
          }
        }(this, vv, zv, Pv))
      }
      domAtPos(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(vv, zv)
      }
      posAtDOM(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(vv, zv)
      }
      posAtCoords(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let Pv = bP(this, vv, zv);
        return Pv && Pv.pos
      }
      posAndSideAtCoords(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), bP(this, vv, zv)
      }
      coordsAtPos(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let Pv = this.docView.coordsAt(vv, zv);
        if (!Pv || Pv.left == Pv.right) return Pv;
        let hv = this.state.doc.lineAt(vv),
          Sv = this.bidiSpans(hv);
        return bv(Pv, Sv[Gz.find(Sv, vv - hv.from, -1, zv)].dir == Nz.LTR == zv > 0)
      }
      coordsForChar(vv) {
        return this.readMeasured(), this.docView.coordsForChar(vv)
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
      textDirectionAt(vv) {
        return !this.state.facet(Az) || vv < this.viewport.from || vv > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(vv))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(vv) {
        if (vv.length > OS) return nz(vv.length);
        let zv, Pv = this.textDirectionAt(vv.from);
        for (let Sv of this.bidiCache)
          if (Sv.from == vv.from && Sv.dir == Pv && (Sv.fresh || mz(Sv.isolates, zv = eP(this, vv)))) return Sv.order;
        zv || (zv = eP(this, vv));
        let hv = Yz(vv.text, Pv, zv);
        return this.bidiCache.push(new KS(vv.from, vv.to, Pv, zv, !0, hv)), hv
      }
      get hasFocus() {
        var vv;
        return (this.dom.ownerDocument.hasFocus() || Fv.safari && (null === (vv = this.inputState) || void 0 === vv ? void 0 : vv.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          Pz(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(vv) {
        this._root != vv && (this._root = vv, this.observer.setWindow((9 == vv.nodeType ? vv : vv.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let vv of this.plugins) vv.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var Pv, Sv, ev, gv;
        return yz.of(new Mz("number" == typeof vv ? hv.j.cursor(vv) : vv, null !== (Pv = zv.y) && void 0 !== Pv ? Pv : "nearest", null !== (Sv = zv.x) && void 0 !== Sv ? Sv : "nearest", null !== (ev = zv.yMargin) && void 0 !== ev ? ev : 5, null !== (gv = zv.xMargin) && void 0 !== gv ? gv : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: vv,
          scrollLeft: zv
        } = this.scrollDOM, Pv = this.viewState.scrollAnchorAt(vv);
        return yz.of(new Mz(hv.j.cursor(Pv.from), "start", "start", Pv.top - vv, zv, !0))
      }
      setTabFocusMode(vv) {
        null == vv ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof vv ? this.inputState.tabFocusMode = vv ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + vv)
      }
      static domEventHandlers(vv) {
        return rz.define((() => ({})), {
          eventHandlers: vv
        })
      }
      static domEventObservers(vv) {
        return rz.define((() => ({})), {
          eventObservers: vv
        })
      }
      static theme(vv, zv) {
        let Pv = Sv.c.newName(),
          hv = [TS.of(Pv), dP.of(iS(`.${Pv}`, vv))];
        return zv && zv.dark && hv.push(WS.of(!0)), hv
      }
      static baseTheme(vv) {
        return hv.u.lowest(dP.of(iS("." + wS, vv, CS)))
      }
      static findFromDOM(vv) {
        var zv;
        let Pv = vv.querySelector(".cm-content"),
          hv = Pv && WP.get(Pv) || WP.get(vv);
        return (null === (zv = null === hv || void 0 === hv ? void 0 : hv.root) || void 0 === zv ? void 0 : zv.view) || null
      }
    }
    nS.styleModule = dP, nS.inputHandler = qz, nS.clipboardInputFilter = Qz, nS.clipboardOutputFilter = Zz, nS.scrollHandler = Hz, nS.focusChangeEffect = Iz, nS.perLineTextDirection = Az, nS.exceptionSink = xz, nS.updateListener = tz, nS.editable = Ez, nS.mouseSelectionStyle = Rz, nS.dragMovesSelection = Uz, nS.clickAddsSelectionRange = Vz, nS.de = vP, nS.blockWrappers = zP, nS.outerDecorations = PP, nS.atomicRanges = hP, nS.bidiIsolatedRanges = SP, nS.cursorScrollMargin = hv.q.define({
      combine: vv => {
        let zv = 5,
          Pv = 5;
        for (let hv of vv) "number" == typeof hv ? zv = Pv = hv : ({
          x: zv,
          y: Pv
        } = hv);
        return {
          x: zv,
          y: Pv
        }
      }
    }), nS.scrollMargins = gP, nS.darkTheme = WS, nS.cspNonce = hv.q.define({
      combine: vv => vv.length ? vv[0] : ""
    }), nS.contentAttributes = uz, nS.editorAttributes = Xz, nS.lineWrapping = nS.contentAttributes.of({
      class: "cm-lineWrapping"
    }), nS.announce = hv.B.define();
    const OS = 4096,
      DS = {};
    class KS {
      constructor(vv, zv, Pv, hv, Sv, ev) {
        this.from = vv, this.to = zv, this.dir = Pv, this.isolates = hv, this.fresh = Sv, this.order = ev
      }
      static update(vv, zv) {
        if (zv.empty && !vv.some((vv => vv.fresh))) return vv;
        let Pv = [],
          hv = vv.length ? vv[vv.length - 1].dir : Nz.LTR;
        for (let Sv = Math.max(0, vv.length - 10); Sv < vv.length; Sv++) {
          let ev = vv[Sv];
          ev.dir != hv || zv.touchesRange(ev.from, ev.to) || Pv.push(new KS(zv.mapPos(ev.from, 1), zv.mapPos(ev.to, -1), ev.dir, ev.isolates, !1, ev.order))
        }
        return Pv
      }
    }

    function VS(vv, zv, Pv) {
      for (let hv = vv.state.facet(zv), Sv = hv.length - 1; Sv >= 0; Sv--) {
        let zv = hv[Sv],
          ev = "function" == typeof zv ? zv(vv) : zv;
        ev && Yv(ev, Pv)
      }
      return Pv
    }
    const US = Fv.mac ? "mac" : Fv.windows ? "win" : Fv.linux ? "linux" : "key";

    function RS(vv, zv, Pv) {
      return zv.altKey && (vv = "Alt-" + vv), zv.ctrlKey && (vv = "Ctrl-" + vv), zv.metaKey && (vv = "Meta-" + vv), !1 !== Pv && zv.shiftKey && (vv = "Shift-" + vv), vv
    }
    const xS = hv.u.default(nS.domEventHandlers({
        keydown: (vv, zv) => HS(IS(zv.state), vv, zv, "editor")
      })),
      tS = hv.q.define({
        enables: xS
      }),
      qS = new WeakMap;

    function IS(vv) {
      let zv = vv.facet(tS),
        Pv = qS.get(zv);
      return Pv || qS.set(zv, Pv = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : US,
          Pv = Object.create(null),
          hv = Object.create(null),
          Sv = (vv, zv) => {
            let Pv = hv[vv];
            if (null == Pv) hv[vv] = zv;
            else if (Pv != zv) throw new Error("Key binding " + vv + " is used both as a regular binding and as a multi-stroke prefix")
          },
          ev = (vv, hv, ev, gv, pv) => {
            var dv, Nv;
            let lv = Pv[vv] || (Pv[vv] = Object.create(null)),
              Tv = hv.split(/ (?!$)/).map((vv => function(vv, zv) {
                const Pv = vv.split(/-(?!$)/);
                let hv, Sv, ev, gv, pv = Pv[Pv.length - 1];
                "Space" == pv && (pv = " ");
                for (let dv = 0; dv < Pv.length - 1; ++dv) {
                  const vv = Pv[dv];
                  if (/^(cmd|meta|m)$/i.test(vv)) gv = !0;
                  else if (/^a(lt)?$/i.test(vv)) hv = !0;
                  else if (/^(c|ctrl|control)$/i.test(vv)) Sv = !0;
                  else if (/^s(hift)?$/i.test(vv)) ev = !0;
                  else {
                    if (!/^mod$/i.test(vv)) throw new Error("Unrecognized modifier name: " + vv);
                    "mac" == zv ? gv = !0 : Sv = !0
                  }
                }
                return hv && (pv = "Alt-" + pv), Sv && (pv = "Ctrl-" + pv), gv && (pv = "Meta-" + pv), ev && (pv = "Shift-" + pv), pv
              }(vv, zv)));
            for (let zv = 1; zv < Tv.length; zv++) {
              let Pv = Tv.slice(0, zv).join(" ");
              Sv(Pv, !0), lv[Pv] || (lv[Pv] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [zv => {
                  let hv = ZS = {
                    view: zv,
                    prefix: Pv,
                    scope: vv
                  };
                  return setTimeout((() => {
                    ZS == hv && (ZS = null)
                  }), AS), !0
                }]
              })
            }
            let Wv = Tv.join(" ");
            Sv(Wv, !1);
            let wv = lv[Wv] || (lv[Wv] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Nv = null === (dv = lv._any) || void 0 === dv ? void 0 : dv.run) || void 0 === Nv ? void 0 : Nv.slice()) || []
            });
            ev && wv.run.push(ev), gv && (wv.preventDefault = !0), pv && (wv.stopPropagation = !0)
          };
        for (let gv of vv) {
          let vv = gv.scope ? gv.scope.split(" ") : ["editor"];
          if (gv.any)
            for (let zv of vv) {
              let vv = Pv[zv] || (Pv[zv] = Object.create(null));
              vv._any || (vv._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: hv
              } = gv;
              for (let zv in vv) vv[zv].run.push((vv => hv(vv, LS)))
            }
          let hv = gv[zv] || gv.key;
          if (hv)
            for (let zv of vv) ev(zv, hv, gv.run, gv.preventDefault, gv.stopPropagation), gv.shift && ev(zv, "Shift-" + hv, gv.shift, gv.preventDefault, gv.stopPropagation)
        }
        return Pv
      }(zv.reduce(((vv, zv) => vv.concat(zv)), []))), Pv
    }

    function QS(vv, zv, Pv) {
      return HS(IS(vv.state), zv, vv, Pv)
    }
    let ZS = null;
    const AS = 4e3;
    let LS = null;

    function HS(vv, zv, Pv, Sv) {
      LS = zv;
      let Nv = function(vv) {
          var zv = !(pv && vv.metaKey && vv.shiftKey && !vv.ctrlKey && !vv.altKey || dv && vv.shiftKey && vv.key && 1 == vv.key.length || "Unidentified" == vv.key) && vv.key || (vv.shiftKey ? gv : ev)[vv.keyCode] || vv.key || "Unidentified";
          return "Esc" == zv && (zv = "Escape"), "Del" == zv && (zv = "Delete"), "Left" == zv && (zv = "ArrowLeft"), "Up" == zv && (zv = "ArrowUp"), "Right" == zv && (zv = "ArrowRight"), "Down" == zv && (zv = "ArrowDown"), zv
        }(zv),
        lv = (0, hv.K)(Nv, 0),
        Tv = (0, hv.L)(lv) == Nv.length && " " != Nv,
        Wv = "",
        wv = !1,
        av = !1,
        sv = !1;
      ZS && ZS.view == Pv && ZS.scope == Sv && (Wv = ZS.prefix + " ", wh.indexOf(zv.keyCode) < 0 && (av = !0, ZS = null));
      let Cv, iv, cv = new Set,
        Gv = vv => {
          if (vv) {
            for (let zv of vv.run)
              if (!cv.has(zv) && (cv.add(zv), zv(Pv))) return vv.stopPropagation && (sv = !0), !0;
            vv.preventDefault && (vv.stopPropagation && (sv = !0), av = !0)
          }
          return !1
        },
        mv = vv[Sv];
      return mv && (Gv(mv[Wv + RS(Nv, zv, !Tv)]) ? wv = !0 : !Tv || !(zv.altKey || zv.metaKey || zv.ctrlKey) || Fv.windows && zv.ctrlKey && zv.altKey || Fv.mac && zv.altKey && !zv.ctrlKey && !zv.metaKey || !(Cv = ev[zv.keyCode]) || Cv == Nv ? Tv && zv.shiftKey && Gv(mv[Wv + RS(Nv, zv, !0)]) && (wv = !0) : (Gv(mv[Wv + RS(Cv, zv, !0)]) || zv.shiftKey && (iv = gv[zv.keyCode]) != Nv && iv != Cv && Gv(mv[Wv + RS(iv, zv, !1)])) && (wv = !0), !wv && Gv(mv._any) && (wv = !0)), av && (wv = !0), wv && sv && zv.stopPropagation(), LS = null, wv
    }
    class MS {
      constructor(vv, zv, Pv, hv, Sv) {
        this.className = vv, this.left = zv, this.top = Pv, this.width = hv, this.height = Sv
      }
      draw() {
        let vv = document.createElement("div");
        return vv.className = this.className, this.adjust(vv), vv
      }
      update(vv, zv) {
        return zv.className == this.className && (this.adjust(vv), !0)
      }
      adjust(vv) {
        vv.style.left = this.left + "px", vv.style.top = this.top + "px", null != this.width && (vv.style.width = this.width + "px"), vv.style.height = this.height + "px"
      }
      eq(vv) {
        return this.left == vv.left && this.top == vv.top && this.width == vv.width && this.height == vv.height && this.className == vv.className
      }
      static forRange(vv, zv, Pv) {
        if (Pv.empty) {
          let hv = vv.coordsAtPos(Pv.head, Pv.assoc || 1);
          if (!hv) return [];
          let Sv = yS(vv);
          return [new MS(zv, hv.left - Sv.left, hv.top - Sv.top, null, hv.bottom - hv.top)]
        }
        return function(vv, zv, Pv) {
          if (Pv.to <= vv.viewport.from || Pv.from >= vv.viewport.to) return [];
          let hv = Math.max(Pv.from, vv.viewport.from),
            Sv = Math.min(Pv.to, vv.viewport.to),
            ev = vv.textDirection == Nz.LTR,
            gv = vv.contentDOM,
            pv = gv.getBoundingClientRect(),
            dv = yS(vv),
            Nv = gv.querySelector(".cm-line"),
            lv = Nv && window.getComputedStyle(Nv),
            Tv = pv.left + (lv ? parseInt(lv.paddingLeft) + Math.min(0, parseInt(lv.textIndent)) : 0),
            Wv = pv.right - (lv ? parseInt(lv.paddingRight) : 0),
            wv = MP(vv, hv, 1),
            av = MP(vv, Sv, -1),
            sv = wv.type == Uv.Text ? wv : null,
            Cv = av.type == Uv.Text ? av : null;
          sv && (vv.lineWrapping || wv.widgetLineBreaks) && (sv = BS(vv, hv, 1, sv));
          Cv && (vv.lineWrapping || av.widgetLineBreaks) && (Cv = BS(vv, Sv, -1, Cv));
          if (sv && Cv && sv.from == Cv.from && sv.to == Cv.to) return cv(Gv(Pv.from, Pv.to, sv));
          {
            let zv = sv ? Gv(Pv.from, null, sv) : mv(wv, !1),
              hv = Cv ? Gv(null, Pv.to, Cv) : mv(av, !0),
              Sv = [];
            return (sv || wv).to < (Cv || av).from - (sv && Cv ? 1 : 0) || wv.widgetLineBreaks > 1 && zv.bottom + vv.defaultLineHeight / 2 < hv.top ? Sv.push(iv(Tv, zv.bottom, Wv, hv.top)) : zv.bottom < hv.top && vv.elementAtHeight((zv.bottom + hv.top) / 2).type == Uv.Text && (zv.bottom = hv.top = (zv.bottom + hv.top) / 2), cv(zv).concat(Sv).concat(cv(hv))
          }

          function iv(vv, Pv, hv, Sv) {
            return new MS(zv, vv - dv.left, Pv - dv.top, Math.max(0, hv - vv), Sv - Pv)
          }

          function cv(vv) {
            let {
              top: zv,
              bottom: Pv,
              horizontal: hv
            } = vv, Sv = [];
            for (let ev = 0; ev < hv.length; ev += 2) Sv.push(iv(hv[ev], zv, hv[ev + 1], Pv));
            return Sv
          }

          function Gv(zv, Pv, hv) {
            let Sv = 1e9,
              gv = -1e9,
              pv = [];

            function dv(zv, Pv, dv, Nv, lv) {
              let wv = vv.coordsAtPos(zv, zv == hv.to ? -2 : 2),
                av = vv.coordsAtPos(dv, dv == hv.from ? 2 : -2);
              wv && av && (Sv = Math.min(wv.top, av.top, Sv), gv = Math.max(wv.bottom, av.bottom, gv), lv == Nz.LTR ? pv.push(ev && Pv ? Tv : wv.left, ev && Nv ? Wv : av.right) : pv.push(!ev && Nv ? Tv : av.left, !ev && Pv ? Wv : wv.right))
            }
            let Nv = null !== zv && void 0 !== zv ? zv : hv.from,
              lv = null !== Pv && void 0 !== Pv ? Pv : hv.to;
            for (let ev of vv.e_)
              if (ev.to > Nv && ev.from < lv)
                for (let hv = Math.max(ev.from, Nv), Sv = Math.min(ev.to, lv);;) {
                  let ev = vv.state.doc.lineAt(hv);
                  for (let gv of vv.bidiSpans(ev)) {
                    let vv = gv.from + ev.from,
                      pv = gv.to + ev.from;
                    if (vv >= Sv) break;
                    pv > hv && dv(Math.max(vv, hv), null == zv && vv <= Nv, Math.min(pv, Sv), null == Pv && pv >= lv, gv.dir)
                  }
                  if (hv = ev.to + 1, hv >= Sv) break
                }
            return 0 == pv.length && dv(Nv, null == zv, lv, null == Pv, vv.textDirection), {
              top: Sv,
              bottom: gv,
              horizontal: pv
            }
          }

          function mv(vv, zv) {
            let Pv = pv.top + (zv ? vv.top : vv.bottom);
            return {
              top: Pv,
              bottom: Pv,
              horizontal: []
            }
          }
        }(vv, zv, Pv)
      }
    }

    function yS(vv) {
      let zv = vv.scrollDOM.getBoundingClientRect();
      return {
        left: (vv.textDirection == Nz.LTR ? zv.left : zv.right - vv.scrollDOM.clientWidth * vv.scaleX) - vv.scrollDOM.scrollLeft * vv.scaleX,
        top: zv.top - vv.scrollDOM.scrollTop * vv.scaleY
      }
    }

    function BS(vv, zv, Pv, hv) {
      let Sv = vv.coordsAtPos(zv, 2 * Pv);
      if (!Sv) return hv;
      let ev = vv.dom.getBoundingClientRect(),
        gv = (Sv.top + Sv.bottom) / 2,
        pv = vv.posAtCoords({
          x: ev.left + 1,
          y: gv
        }),
        dv = vv.posAtCoords({
          x: ev.right - 1,
          y: gv
        });
      return null == pv || null == dv ? hv : {
        from: Math.max(hv.from, Math.min(pv, dv)),
        to: Math.min(hv.to, Math.max(pv, dv))
      }
    }
    class JS {
      constructor(vv, zv) {
        this.view = vv, this.layer = zv, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = vv.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), zv.above && this.dom.classList.add("cm-layer-above"), zv.class && this.dom.classList.add(zv.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(vv.state), vv.requestMeasure(this.measureReq), zv.mount && zv.mount(this.dom, vv)
      }
      update(vv) {
        vv.startState.facet(ES) != vv.state.facet(ES) && this.setOrder(vv.state), (this.layer.update(vv, this.dom) || vv.geometryChanged) && (this.scale(), vv.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(vv) {
        !1 !== this.layer.updateOnDocViewUpdate && vv.requestMeasure(this.measureReq)
      }
      setOrder(vv) {
        let zv = 0,
          Pv = vv.facet(ES);
        for (; zv < Pv.length && Pv[zv] != this.layer;) zv++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - zv)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: vv,
          scaleY: zv
        } = this.view;
        vv == this.scaleX && zv == this.scaleY || (this.scaleX = vv, this.scaleY = zv, this.dom.style.transform = `scale(${1/vv}, ${1/zv})`)
      }
      draw(vv) {
        if (vv.length != this.drawn.length || vv.some(((vv, zv) => {
            return Pv = vv, hv = this.drawn[zv], !(Pv.constructor == hv.constructor && Pv.eq(hv));
            var Pv, hv
          }))) {
          let zv = this.dom.firstChild,
            Pv = 0;
          for (let hv of vv) hv.update && zv && hv.constructor && this.drawn[Pv].constructor && hv.update(zv, this.drawn[Pv]) ? (zv = zv.nextSibling, Pv++) : this.dom.insertBefore(hv.draw(), zv);
          for (; zv;) {
            let vv = zv.nextSibling;
            zv.remove(), zv = vv
          }
          this.drawn = vv, Fv.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const ES = hv.q.define();

    function oS(vv) {
      return [rz.define((zv => new JS(zv, vv))), ES.of(vv)]
    }
    const bS = hv.q.define({
      combine: vv => (0, hv.O)(vv, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (vv, zv) => Math.min(vv, zv),
        drawRangeCursor: (vv, zv) => vv || zv
      })
    });

    function rS() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [bS.of(vv), XS, ve, ze, Lz.of(!0)]
    }

    function kS(vv) {
      return vv.startState.facet(bS) != vv.state.facet(bS)
    }
    const XS = oS({
      above: !0,
      markers(vv) {
        let {
          state: zv
        } = vv, Pv = zv.facet(bS), Sv = [];
        for (let ev of zv.selection.PC) {
          let gv = ev == zv.selection.main;
          if (ev.empty || Pv.drawRangeCursor && !(gv && Fv.ios && Pv.iosSelectionHandles)) {
            let zv = gv ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              Pv = ev.empty ? ev : hv.j.cursor(ev.head, ev.assoc);
            for (let hv of MS.forRange(vv, zv, Pv)) Sv.push(hv)
          }
        }
        return Sv
      },
      update(vv, zv) {
        vv.transactions.some((vv => vv.selection)) && (zv.style.animationName = "cm-blink" == zv.style.animationName ? "cm-blink2" : "cm-blink");
        let Pv = kS(vv);
        return Pv && uS(vv.state, zv), vv.docChanged || vv.selectionSet || Pv
      },
      mount(vv, zv) {
        uS(zv.state, vv)
      },
      class: "cm-cursorLayer"
    });

    function uS(vv, zv) {
      zv.style.animationDuration = vv.facet(bS).cursorBlinkRate + "ms"
    }
    const ve = oS({
        above: !1,
        markers(vv) {
          let zv = [],
            {
              main: Pv,
              PC: Sv
            } = vv.state.selection;
          for (let hv of Sv)
            if (!hv.empty)
              for (let Pv of MS.forRange(vv, "cm-selectionBackground", hv)) zv.push(Pv);
          if (Fv.ios && !Pv.empty && vv.state.facet(bS).iosSelectionHandles) {
            for (let Sv of MS.forRange(vv, "cm-selectionHandle cm-selectionHandle-start", hv.j.cursor(Pv.from, 1))) zv.push(Sv);
            for (let Sv of MS.forRange(vv, "cm-selectionHandle cm-selectionHandle-end", hv.j.cursor(Pv.to, 1))) zv.push(Sv)
          }
          return zv
        },
        update: (vv, zv) => vv.docChanged || vv.selectionSet || vv.viewportChanged || kS(vv),
        class: "cm-selectionLayer"
      }),
      ze = hv.u.highest(nS.theme({
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
      Pe = hv.B.define({
        map: (vv, zv) => null == vv ? null : zv.mapPos(vv)
      }),
      he = hv.E.define({
        create: () => null,
        update: (vv, zv) => (null != vv && (vv = zv.changes.mapPos(vv)), zv.effects.reduce(((vv, zv) => zv.is(Pe) ? zv.value : vv), vv))
      }),
      Se = rz.fromClass(class {
        constructor(vv) {
          this.view = vv, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(vv) {
          var zv;
          let Pv = vv.state.field(he);
          null == Pv ? null != this.cursor && (null === (zv = this.cursor) || void 0 === zv || zv.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (vv.startState.field(he) != Pv || vv.docChanged || vv.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: vv
          } = this, zv = vv.state.field(he), Pv = null != zv && vv.coordsAtPos(zv);
          if (!Pv) return null;
          let hv = vv.scrollDOM.getBoundingClientRect();
          return {
            left: Pv.left - hv.left + vv.scrollDOM.scrollLeft * vv.scaleX,
            top: Pv.top - hv.top + vv.scrollDOM.scrollTop * vv.scaleY,
            height: Pv.bottom - Pv.top
          }
        }
        drawCursor(vv) {
          if (this.cursor) {
            let {
              scaleX: zv,
              scaleY: Pv
            } = this.view;
            vv ? (this.cursor.style.left = vv.left / zv + "px", this.cursor.style.top = vv.top / Pv + "px", this.cursor.style.height = vv.height / Pv + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(vv) {
          this.view.state.field(he) != vv && this.view.dispatch({
            effects: Pe.of(vv)
          })
        }
      }, {
        eventObservers: {
          dragover(vv) {
            this.setDropPos(this.view.posAtCoords({
              x: vv.clientX,
              y: vv.clientY
            }))
          },
          dragleave(vv) {
            vv.target != this.view.contentDOM && this.view.contentDOM.contains(vv.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function ee() {
      return [he, Se]
    }

    function ge(vv, zv, Pv, hv, Sv) {
      zv.lastIndex = 0;
      for (let ev, gv = vv.iterRange(Pv, hv), pv = Pv; !gv.next().done; pv += gv.value.length)
        if (!gv.lineBreak)
          for (; ev = zv.exec(gv.value);) Sv(pv + ev.index, ev)
    }
    class pe {
      constructor(vv) {
        const {
          regexp: zv,
          decoration: Pv,
          decorate: hv,
          boundary: Sv,
          maxLength: ev = 1e3
        } = vv;
        if (!zv.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = zv, hv) this.addMatch = (vv, zv, Pv, Sv) => hv(Sv, Pv, Pv + vv[0].length, vv, zv);
        else if ("function" == typeof Pv) this.addMatch = (vv, zv, hv, Sv) => {
          let ev = Pv(vv, zv, hv);
          ev && Sv(hv, hv + vv[0].length, ev)
        };
        else {
          if (!Pv) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (vv, zv, hv, Sv) => Sv(hv, hv + vv[0].length, Pv)
        }
        this.boundary = Sv, this.maxLength = ev
      }
      createDeco(vv) {
        let zv = new hv.x,
          Pv = zv.add.bind(zv);
        for (let {
            from: hv,
            to: Sv
          }
          of
          function(vv, zv) {
            let Pv = vv.e_;
            if (1 == Pv.length && Pv[0].from == vv.viewport.from && Pv[0].to == vv.viewport.to) return Pv;
            let hv = [];
            for (let {
                from: Sv,
                to: ev
              }
              of Pv) Sv = Math.max(vv.state.doc.lineAt(Sv).from, Sv - zv), ev = Math.min(vv.state.doc.lineAt(ev).to, ev + zv), hv.length && hv[hv.length - 1].to >= Sv ? hv[hv.length - 1].to = ev : hv.push({
              from: Sv,
              to: ev
            });
            return hv
          }(vv, this.maxLength)) ge(vv.state.doc, this.regexp, hv, Sv, ((zv, hv) => this.addMatch(hv, vv, zv, Pv)));
        return zv.finish()
      }
      updateDeco(vv, zv) {
        let Pv = 1e9,
          hv = -1;
        return vv.docChanged && vv.changes.iterChanges(((zv, Sv, ev, gv) => {
          gv >= vv.view.viewport.from && ev <= vv.view.viewport.to && (Pv = Math.min(ev, Pv), hv = Math.max(gv, hv))
        })), vv.viewportMoved || hv - Pv > 1e3 ? this.createDeco(vv.view) : hv > -1 ? this.updateRange(vv.view, zv.map(vv.changes), Pv, hv) : zv
      }
      updateRange(vv, zv, Pv, hv) {
        for (let Sv of vv.e_) {
          let ev = Math.max(Sv.from, Pv),
            gv = Math.min(Sv.to, hv);
          if (gv >= ev) {
            let Pv = vv.state.doc.lineAt(ev),
              hv = Pv.to < gv ? vv.state.doc.lineAt(gv) : Pv,
              pv = Math.max(Sv.from, Pv.from),
              dv = Math.min(Sv.to, hv.to);
            if (this.boundary) {
              for (; ev > Pv.from; ev--)
                if (this.boundary.test(Pv.text[ev - 1 - Pv.from])) {
                  pv = ev;
                  break
                } for (; gv < hv.to; gv++)
                if (this.boundary.test(hv.text[gv - hv.from])) {
                  dv = gv;
                  break
                }
            }
            let Nv, lv = [],
              Tv = (vv, zv, Pv) => lv.push(Pv.range(vv, zv));
            if (Pv == hv)
              for (this.regexp.lastIndex = pv - Pv.from;
                (Nv = this.regexp.exec(Pv.text)) && Nv.index < dv - Pv.from;) this.addMatch(Nv, vv, Nv.index + Pv.from, Tv);
            else ge(vv.state.doc, this.regexp, pv, dv, ((zv, Pv) => this.addMatch(Pv, vv, zv, Tv)));
            zv = zv.update({
              filterFrom: pv,
              filterTo: dv,
              filter: (vv, zv) => vv < pv || zv > dv,
              add: lv
            })
          }
        }
        return zv
      }
    }
    const de = null != /x/.unicode ? "gu" : "g",
      Ne = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", de),
      le = {
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
    let Te = null;
    const We = hv.q.define({
      combine(vv) {
        let zv = (0, hv.O)(vv, {
          render: null,
          specialChars: Ne,
          addSpecialChars: null
        });
        return (zv.replaceTabs = ! function() {
          var vv;
          if (null == Te && "undefined" != typeof document && document.body) {
            let zv = document.body.style;
            Te = null != (null !== (vv = zv.tabSize) && void 0 !== vv ? vv : zv.MozTabSize)
          }
          return Te || !1
        }()) && (zv.specialChars = new RegExp("\t|" + zv.specialChars.source, de)), zv.addSpecialChars && (zv.specialChars = new RegExp(zv.specialChars.source + "|" + zv.addSpecialChars.source, de)), zv
      }
    });

    function we() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [We.of(vv), ae || (ae = rz.fromClass(class {
        constructor(vv) {
          this.view = vv, this.de = Rv.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(vv.state.facet(We)), this.de = this.decorator.createDeco(vv)
        }
        makeDecorator(vv) {
          return new pe({
            regexp: vv.specialChars,
            decoration: (zv, Pv, Sv) => {
              let {
                doc: ev
              } = Pv.state, gv = (0, hv.K)(zv[0], 0);
              if (9 == gv) {
                let vv = ev.lineAt(Sv),
                  zv = Pv.state.tabSize,
                  gv = (0, hv.S)(vv.text, zv, Sv - vv.from);
                return Rv.replace({
                  widget: new Ce((zv - gv % zv) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[gv] || (this.decorationCache[gv] = Rv.replace({
                widget: new se(vv, gv)
              }))
            },
            boundary: vv.replaceTabs ? void 0 : /[^]/
          })
        }
        update(vv) {
          let zv = vv.state.facet(We);
          vv.startState.facet(We) != zv ? (this.decorator = this.makeDecorator(zv), this.de = this.decorator.createDeco(vv.view)) : this.de = this.decorator.updateDeco(vv, this.de)
        }
      }, {
        de: vv => vv.de
      }))]
    }
    let ae = null;
    class se extends Vv {
      constructor(vv, zv) {
        super(), this.options = vv, this.code = zv
      }
      eq(vv) {
        return vv.code == this.code
      }
      toDOM(vv) {
        let zv = function(vv) {
            return vv >= 32 ? "\u2022" : 10 == vv ? "\u2424" : String.fromCharCode(9216 + vv)
          }(this.code),
          Pv = vv.state.phrase("Control character") + " " + (le[this.code] || "0x" + this.code.toString(16)),
          hv = this.options.render && this.options.render(this.code, Pv, zv);
        if (hv) return hv;
        let Sv = document.createElement("span");
        return Sv.textContent = zv, Sv.title = Pv, Sv.setAttribute("aria-label", Pv), Sv.className = "cm-specialChar", Sv
      }
      ignoreEvent() {
        return !1
      }
    }
    class Ce extends Vv {
      constructor(vv) {
        super(), this.width = vv
      }
      eq(vv) {
        return vv.width == this.width
      }
      toDOM() {
        let vv = document.createElement("span");
        return vv.textContent = "\t", vv.className = "cm-tab", vv.style.width = this.width + "px", vv
      }
      ignoreEvent() {
        return !1
      }
    }

    function ie() {
      return Ge
    }
    const ce = Rv.line({
        class: "cm-activeLine"
      }),
      Ge = rz.fromClass(class {
        constructor(vv) {
          this.de = this.getDeco(vv)
        }
        update(vv) {
          (vv.docChanged || vv.selectionSet) && (this.de = this.getDeco(vv.view))
        }
        getDeco(vv) {
          let zv = -1,
            Pv = [];
          for (let hv of vv.state.selection.PC) {
            let Sv = vv.lineBlockAt(hv.head);
            Sv.from > zv && (Pv.push(ce.range(Sv.from)), zv = Sv.from)
          }
          return Rv.set(Pv)
        }
      }, {
        de: vv => vv.de
      });
    class me extends Vv {
      constructor(vv) {
        super(), this.content = vv
      }
      toDOM(vv) {
        let zv = document.createElement("span");
        return zv.className = "cm-placeholder", zv.style.pointerEvents = "none", zv.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(vv) : this.content.cloneNode(!0)), zv.setAttribute("aria-hidden", "true"), zv
      }
      coordsAt(vv) {
        let zv = vv.firstChild ? Mv(vv.firstChild) : [];
        if (!zv.length) return null;
        let Pv = window.getComputedStyle(vv.parentNode),
          hv = bv(zv[0], "rtl" != Pv.direction),
          Sv = parseInt(Pv.lineHeight);
        return hv.bottom - hv.top > 1.5 * Sv ? {
          left: hv.left,
          right: hv.right,
          top: hv.top,
          bottom: hv.top + Sv
        } : hv
      }
      ignoreEvent() {
        return !1
      }
    }

    function je(vv) {
      let zv = rz.fromClass(class {
        constructor(zv) {
          this.view = zv, this.placeholder = vv ? Rv.set([Rv.widget({
            widget: new me(vv),
            side: 1
          }).range(0)]) : Rv.none
        }
        get de() {
          return this.view.state.doc.length ? Rv.none : this.placeholder
        }
      }, {
        de: vv => vv.de
      });
      return "string" == typeof vv ? [zv, nS.contentAttributes.of({
        "aria-placeholder": vv
      })] : zv
    }
    const fe = 2e3;

    function Fe(vv, zv) {
      let Pv = vv.posAtCoords({
          x: zv.clientX,
          y: zv.clientY
        }, !1),
        Sv = vv.state.doc.lineAt(Pv),
        ev = Pv - Sv.from,
        gv = ev > fe ? -1 : ev == Sv.length ? function(vv, zv) {
          let Pv = vv.coordsAtPos(vv.viewport.from);
          return Pv ? Math.round(Math.abs((Pv.left - zv) / vv.defaultCharacterWidth)) : -1
        }(vv, zv.clientX) : (0, hv.S)(Sv.text, vv.state.tabSize, Pv - Sv.from);
      return {
        line: Sv.number,
        col: gv,
        off: ev
      }
    }

    function Ye(vv, zv) {
      let Pv = Fe(vv, zv),
        Sv = vv.state.selection;
      return Pv ? {
        update(vv) {
          if (vv.docChanged) {
            let zv = vv.changes.mapPos(vv.startState.doc.line(Pv.line).from),
              hv = vv.state.doc.lineAt(zv);
            Pv = {
              line: hv.number,
              col: Pv.col,
              off: Math.min(Pv.off, hv.length)
            }, Sv = Sv.map(vv.changes)
          }
        },
        get(zv, ev, gv) {
          let pv = Fe(vv, zv);
          if (!pv) return Sv;
          let dv = function(vv, zv, Pv) {
            let Sv = Math.min(zv.line, Pv.line),
              ev = Math.max(zv.line, Pv.line),
              gv = [];
            if (zv.off > fe || Pv.off > fe || zv.col < 0 || Pv.col < 0) {
              let pv = Math.min(zv.off, Pv.off),
                dv = Math.max(zv.off, Pv.off);
              for (let zv = Sv; zv <= ev; zv++) {
                let Pv = vv.doc.line(zv);
                Pv.length <= dv && gv.push(hv.j.range(Pv.from + pv, Pv.to + dv))
              }
            } else {
              let pv = Math.min(zv.col, Pv.col),
                dv = Math.max(zv.col, Pv.col);
              for (let zv = Sv; zv <= ev; zv++) {
                let Pv = vv.doc.line(zv),
                  Sv = (0, hv.Z)(Pv.text, pv, vv.tabSize, !0);
                if (Sv < 0) gv.push(hv.j.cursor(Pv.to));
                else {
                  let zv = (0, hv.Z)(Pv.text, dv, vv.tabSize);
                  gv.push(hv.j.range(Pv.from + Sv, Pv.from + zv))
                }
              }
            }
            return gv
          }(vv.state, Pv, pv);
          return dv.length ? gv ? hv.j.create(dv.concat(Sv.PC)) : hv.j.create(dv) : Sv
        }
      } : null
    }

    function ne(vv) {
      let zv = (null === vv || void 0 === vv ? void 0 : vv.eventFilter) || (vv => vv.altKey && 0 == vv.button);
      return nS.mouseSelectionStyle.of(((vv, Pv) => zv(Pv) ? Ye(vv, Pv) : null))
    }
    const Oe = {
        Alt: [18, vv => !!vv.altKey],
        Control: [17, vv => !!vv.ctrlKey],
        Shift: [16, vv => !!vv.shiftKey],
        Meta: [91, vv => !!vv.metaKey]
      },
      De = {
        style: "cursor: crosshair"
      };

    function Ke() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [zv, Pv] = Oe[vv.key || "Alt"],
        hv = rz.fromClass(class {
          constructor(vv) {
            this.view = vv, this.isDown = !1
          }
          set(vv) {
            this.isDown != vv && (this.isDown = vv, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(vv) {
              this.set(vv.keyCode == zv || Pv(vv))
            },
            keyup(vv) {
              vv.keyCode != zv && Pv(vv) || this.set(!1)
            },
            mousemove(vv) {
              this.set(Pv(vv))
            }
          }
        });
      return [hv, nS.contentAttributes.of((vv => {
        var zv;
        return (null === (zv = vv.plugin(hv)) || void 0 === zv ? void 0 : zv.isDown) ? De : null
      }))]
    }
    const Ve = "-10000px";
    class Ue {
      constructor(vv, zv, Pv, hv) {
        this.facet = zv, this.createTooltipView = Pv, this.removeTooltipView = hv, this.input = vv.state.facet(zv), this.tooltips = this.input.filter((vv => vv));
        let Sv = null;
        this.tooltipViews = this.tooltips.map((vv => Sv = Pv(vv, Sv)))
      }
      update(vv, zv) {
        var Pv;
        let hv = vv.state.facet(this.facet),
          Sv = hv.filter((vv => vv));
        if (hv === this.input) {
          for (let zv of this.tooltipViews) zv.update && zv.update(vv);
          return !1
        }
        let ev = [],
          gv = zv ? [] : null;
        for (let pv = 0; pv < Sv.length; pv++) {
          let Pv = Sv[pv],
            hv = -1;
          if (Pv) {
            for (let vv = 0; vv < this.tooltips.length; vv++) {
              let zv = this.tooltips[vv];
              zv && zv.create == Pv.create && (hv = vv)
            }
            if (hv < 0) ev[pv] = this.createTooltipView(Pv, pv ? ev[pv - 1] : null), gv && (gv[pv] = !!Pv.above);
            else {
              let Pv = ev[pv] = this.tooltipViews[hv];
              gv && (gv[pv] = zv[hv]), Pv.update && Pv.update(vv)
            }
          }
        }
        for (let pv of this.tooltipViews) ev.indexOf(pv) < 0 && (this.removeTooltipView(pv), null === (Pv = pv.destroy) || void 0 === Pv || Pv.call(pv));
        return zv && (gv.forEach(((vv, Pv) => zv[Pv] = vv)), zv.length = gv.length), this.input = hv, this.tooltips = Sv, this.tooltipViews = ev, !0
      }
    }

    function Re(vv) {
      let zv = vv.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: zv.clientHeight,
        right: zv.clientWidth
      }
    }
    const xe = hv.q.define({
        combine: vv => {
          var zv, Pv, hv;
          return {
            position: Fv.ios ? "absolute" : (null === (zv = vv.find((vv => vv.position))) || void 0 === zv ? void 0 : zv.position) || "fixed",
            parent: (null === (Pv = vv.find((vv => vv.parent))) || void 0 === Pv ? void 0 : Pv.parent) || null,
            tooltipSpace: (null === (hv = vv.find((vv => vv.tooltipSpace))) || void 0 === hv ? void 0 : hv.tooltipSpace) || Re
          }
        }
      }),
      te = new WeakMap,
      qe = rz.fromClass(class {
        constructor(vv) {
          this.view = vv, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let zv = vv.state.facet(xe);
          this.position = zv.position, this.parent = zv.parent, this.classes = vv.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Ue(vv, Ae, ((vv, zv) => this.createTooltip(vv, zv)), (vv => {
            this.resizeObserver && this.resizeObserver.unobserve(vv.dom), vv.dom.remove()
          })), this.above = this.manager.tooltips.map((vv => !!vv.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((vv => {
            Date.now() > this.lastTransaction - 50 && vv.length > 0 && vv[vv.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), vv.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let vv of this.manager.tooltipViews) this.intersectionObserver.observe(vv.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(vv) {
          vv.transactions.length && (this.lastTransaction = Date.now());
          let zv = this.manager.update(vv, this.above);
          zv && this.observeIntersection();
          let Pv = zv || vv.geometryChanged,
            hv = vv.state.facet(xe);
          if (hv.position != this.position && !this.madeAbsolute) {
            this.position = hv.position;
            for (let vv of this.manager.tooltipViews) vv.dom.style.position = this.position;
            Pv = !0
          }
          if (hv.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = hv.parent, this.createContainer();
            for (let vv of this.manager.tooltipViews) this.container.appendChild(vv.dom);
            Pv = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          Pv && this.maybeMeasure()
        }
        createTooltip(vv, zv) {
          let Pv = vv.create(this.view),
            hv = zv ? zv.dom : null;
          if (Pv.dom.classList.add("cm-tooltip"), vv.arrow && !Pv.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let vv = document.createElement("div");
            vv.className = "cm-tooltip-arrow", Pv.dom.appendChild(vv)
          }
          return Pv.dom.style.position = this.position, Pv.dom.style.top = Ve, Pv.dom.style.left = "0px", this.container.insertBefore(Pv.dom, hv), Pv.mount && Pv.mount(this.view), this.resizeObserver && this.resizeObserver.observe(Pv.dom), Pv
        }
        destroy() {
          var vv, zv, Pv;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let hv of this.manager.tooltipViews) hv.dom.remove(), null === (vv = hv.destroy) || void 0 === vv || vv.call(hv);
          this.parent && this.container.remove(), null === (zv = this.resizeObserver) || void 0 === zv || zv.disconnect(), null === (Pv = this.intersectionObserver) || void 0 === Pv || Pv.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let vv = 1,
            zv = 1,
            Pv = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: vv
            } = this.manager.tooltipViews[0];
            if (Fv.safari) {
              let zv = vv.getBoundingClientRect();
              Pv = Math.abs(zv.top + 1e4) > 1 || Math.abs(zv.left) > 1
            } else Pv = !!vv.offsetParent && vv.offsetParent != this.container.ownerDocument.body
          }
          if (Pv || "absolute" == this.position)
            if (this.parent) {
              let Pv = this.parent.getBoundingClientRect();
              Pv.width && Pv.height && (vv = Pv.width / this.parent.offsetWidth, zv = Pv.height / this.parent.offsetHeight)
            } else({
              scaleX: vv,
              scaleY: zv
            } = this.view.viewState);
          let hv = this.view.scrollDOM.getBoundingClientRect(),
            Sv = pP(this.view);
          return {
            visible: {
              left: hv.left + Sv.left,
              top: hv.top + Sv.top,
              right: hv.right - Sv.right,
              bottom: hv.bottom - Sv.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((vv, zv) => {
              let Pv = this.manager.tooltipViews[zv];
              return Pv.getCoords ? Pv.getCoords(vv.pos) : this.view.coordsAtPos(vv.pos)
            })),
            size: this.manager.tooltipViews.map((vv => {
              let {
                dom: zv
              } = vv;
              return zv.getBoundingClientRect()
            })),
            space: this.view.state.facet(xe).tooltipSpace(this.view),
            scaleX: vv,
            scaleY: zv,
            makeAbsolute: Pv
          }
        }
        writeMeasure(vv) {
          var zv;
          if (vv.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let vv of this.manager.tooltipViews) vv.dom.style.position = "absolute"
          }
          let {
            visible: Pv,
            space: hv,
            scaleX: Sv,
            scaleY: ev
          } = vv, gv = [];
          for (let pv = 0; pv < this.manager.tooltips.length; pv++) {
            let dv = this.manager.tooltips[pv],
              Nv = this.manager.tooltipViews[pv],
              {
                dom: lv
              } = Nv,
              Tv = vv.pos[pv],
              Wv = vv.size[pv];
            if (!Tv || !1 !== dv.clip && (Tv.bottom <= Math.max(Pv.top, hv.top) || Tv.top >= Math.min(Pv.bottom, hv.bottom) || Tv.right < Math.max(Pv.left, hv.left) - .1 || Tv.left > Math.min(Pv.right, hv.right) + .1)) {
              lv.style.top = Ve;
              continue
            }
            let wv = dv.arrow ? Nv.dom.querySelector(".cm-tooltip-arrow") : null,
              av = wv ? 7 : 0,
              sv = Wv.right - Wv.left,
              Cv = null !== (zv = te.get(Nv)) && void 0 !== zv ? zv : Wv.bottom - Wv.top,
              iv = Nv.offset || Ze,
              cv = this.view.textDirection == Nz.LTR,
              Gv = Wv.width > hv.right - hv.left ? cv ? hv.left : hv.right - Wv.width : cv ? Math.max(hv.left, Math.min(Tv.left - (wv ? 14 : 0) + iv.x, hv.right - sv)) : Math.min(Math.max(hv.left, Tv.left - sv + (wv ? 14 : 0) - iv.x), hv.right - sv),
              mv = this.above[pv];
            !dv.strictSide && (mv ? Tv.top - Cv - av - iv.y < hv.top : Tv.bottom + Cv + av + iv.y > hv.bottom) && mv == hv.bottom - Tv.bottom > Tv.top - hv.top && (mv = this.above[pv] = !mv);
            let jv = (mv ? Tv.top - hv.top : hv.bottom - Tv.bottom) - av;
            if (jv < Cv && !1 !== Nv.resize) {
              if (jv < this.view.defaultLineHeight) {
                lv.style.top = Ve;
                continue
              }
              te.set(Nv, Cv), lv.style.height = (Cv = jv) / ev + "px"
            } else lv.style.height && (lv.style.height = "");
            let fv = mv ? Tv.top - Cv - av - iv.y : Tv.bottom + av + iv.y,
              Fv = Gv + sv;
            if (!0 !== Nv.overlap)
              for (let vv of gv) vv.left < Fv && vv.right > Gv && vv.top < fv + Cv && vv.bottom > fv && (fv = mv ? vv.top - Cv - 2 - av : vv.bottom + av + 2);
            if ("absolute" == this.position ? (lv.style.top = (fv - vv.parent.top) / ev + "px", Ie(lv, (Gv - vv.parent.left) / Sv)) : (lv.style.top = fv / ev + "px", Ie(lv, Gv / Sv)), wv) {
              let vv = Tv.left + (cv ? iv.x : -iv.x) - (Gv + 14 - 7);
              wv.style.left = vv / Sv + "px"
            }!0 !== Nv.overlap && gv.push({
              left: Gv,
              top: fv,
              right: Fv,
              bottom: fv + Cv
            }), lv.classList.toggle("cm-tooltip-above", mv), lv.classList.toggle("cm-tooltip-below", !mv), Nv.positioned && Nv.positioned(vv.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let vv of this.manager.tooltipViews) vv.dom.style.top = Ve
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function Ie(vv, zv) {
      let Pv = parseInt(vv.style.left, 10);
      (isNaN(Pv) || Math.abs(zv - Pv) > 1) && (vv.style.left = zv + "px")
    }
    const Qe = nS.baseTheme({
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
      Ze = {
        x: 0,
        y: 0
      },
      Ae = hv.q.define({
        enables: [qe, Qe]
      }),
      Le = hv.q.define({
        combine: vv => vv.reduce(((vv, zv) => vv.concat(zv)), [])
      });
    class He {
      static create(vv) {
        return new He(vv)
      }
      constructor(vv) {
        this.view = vv, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Ue(vv, Le, ((vv, zv) => this.createHostedView(vv, zv)), (vv => vv.dom.remove()))
      }
      createHostedView(vv, zv) {
        let Pv = vv.create(this.view);
        return Pv.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(Pv.dom, zv ? zv.dom.nextSibling : this.dom.firstChild), this.mounted && Pv.mount && Pv.mount(this.view), Pv
      }
      mount(vv) {
        for (let zv of this.manager.tooltipViews) zv.mount && zv.mount(vv);
        this.mounted = !0
      }
      positioned(vv) {
        for (let zv of this.manager.tooltipViews) zv.positioned && zv.positioned(vv)
      }
      update(vv) {
        this.manager.update(vv)
      }
      destroy() {
        var vv;
        for (let zv of this.manager.tooltipViews) null === (vv = zv.destroy) || void 0 === vv || vv.call(zv)
      }
      passProp(vv) {
        let zv;
        for (let Pv of this.manager.tooltipViews) {
          let hv = Pv[vv];
          if (void 0 !== hv)
            if (void 0 === zv) zv = hv;
            else if (zv !== hv) return
        }
        return zv
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
    const Me = Ae.compute([Le], (vv => {
      let zv = vv.facet(Le);
      return 0 === zv.length ? null : {
        pos: Math.min(...zv.map((vv => vv.pos))),
        end: Math.max(...zv.map((vv => {
          var zv;
          return null !== (zv = vv.end) && void 0 !== zv ? zv : vv.pos
        }))),
        create: He.create,
        above: zv[0].above,
        arrow: zv.some((vv => vv.arrow))
      }
    }));
    class ye {
      constructor(vv, zv, Pv, hv, Sv) {
        this.view = vv, this.source = zv, this.field = Pv, this.setHover = hv, this.hoverTime = Sv, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: vv.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), vv.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), vv.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let vv = Date.now() - this.lastMove.time;
        vv < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - vv) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: vv,
          lastMove: zv
        } = this, Pv = vv.docView.tile.nearest(zv.target);
        if (!Pv) return;
        let hv, Sv = 1;
        if (Pv.isWidget()) hv = Pv.posAtStart;
        else {
          if (hv = vv.posAtCoords(zv), null == hv) return;
          let Pv = vv.coordsAtPos(hv);
          if (!Pv || zv.y < Pv.top || zv.y > Pv.bottom || zv.x < Pv.left - vv.defaultCharacterWidth || zv.x > Pv.right + vv.defaultCharacterWidth) return;
          let ev = vv.bidiSpans(vv.state.doc.lineAt(hv)).find((vv => vv.from <= hv && vv.to >= hv)),
            gv = ev && ev.dir == Nz.RTL ? -1 : 1;
          Sv = zv.x < Pv.left ? -gv : gv
        }
        let ev = this.source(vv, hv, Sv);
        if (null === ev || void 0 === ev ? void 0 : ev.then) {
          let zv = this.pending = {
            pos: hv
          };
          ev.then((Pv => {
            this.pending == zv && (this.pending = null, !Pv || Array.isArray(Pv) && !Pv.length || vv.dispatch({
              effects: this.setHover.of(Array.isArray(Pv) ? Pv : [Pv])
            }))
          }), (zv => Jz(vv.state, zv, "hover tooltip")))
        } else !ev || Array.isArray(ev) && !ev.length || vv.dispatch({
          effects: this.setHover.of(Array.isArray(ev) ? ev : [ev])
        })
      }
      get tooltip() {
        let vv = this.view.plugin(qe),
          zv = vv ? vv.manager.tooltips.findIndex((vv => vv.create == He.create)) : -1;
        return zv > -1 ? vv.manager.tooltipViews[zv] : null
      }
      mousemove(vv) {
        var zv, Pv;
        this.lastMove = {
          x: vv.clientX,
          y: vv.clientY,
          target: vv.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: hv,
          tooltip: Sv
        } = this;
        if (hv.length && Sv && ! function(vv, zv) {
            let Pv, {
              left: hv,
              right: Sv,
              top: ev,
              bottom: gv
            } = vv.getBoundingClientRect();
            if (Pv = vv.querySelector(".cm-tooltip-arrow")) {
              let vv = Pv.getBoundingClientRect();
              ev = Math.min(vv.top, ev), gv = Math.max(vv.bottom, gv)
            }
            return zv.clientX >= hv - Be && zv.clientX <= Sv + Be && zv.clientY >= ev - Be && zv.clientY <= gv + Be
          }(Sv.dom, vv) || this.pending) {
          let {
            pos: Sv
          } = hv[0] || this.pending, ev = null !== (Pv = null === (zv = hv[0]) || void 0 === zv ? void 0 : zv.end) && void 0 !== Pv ? Pv : Sv;
          (Sv == ev ? this.view.posAtCoords(this.lastMove) == Sv : function(vv, zv, Pv, hv, Sv) {
            let ev = vv.scrollDOM.getBoundingClientRect(),
              gv = vv.documentTop + vv.documentPadding.top + vv.contentHeight;
            if (ev.left > hv || ev.right < hv || ev.top > Sv || Math.min(ev.bottom, gv) < Sv) return !1;
            let pv = vv.posAtCoords({
              x: hv,
              y: Sv
            }, !1);
            return pv >= zv && pv <= Pv
          }(this.view, Sv, ev, vv.clientX, vv.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(vv) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: zv
        } = this;
        if (zv.length) {
          let {
            tooltip: zv
          } = this;
          zv && zv.dom.contains(vv.relatedTarget) ? this.watchTooltipLeave(zv.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(vv) {
        let zv = Pv => {
          vv.removeEventListener("mouseleave", zv), this.active.length && !this.view.dom.contains(Pv.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        vv.addEventListener("mouseleave", zv)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const Be = 4;

    function Je(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Pv = hv.B.define(),
        Sv = hv.E.define({
          create: () => [],
          update(vv, Sv) {
            if (vv.length && (zv.hideOnChange && (Sv.docChanged || Sv.selection) ? vv = [] : zv.hideOn && (vv = vv.filter((vv => !zv.hideOn(Sv, vv)))), Sv.docChanged)) {
              let zv = [];
              for (let Pv of vv) {
                let vv = Sv.changes.mapPos(Pv.pos, -1, hv.r.TrackDel);
                if (null != vv) {
                  let hv = Object.assign(Object.create(null), Pv);
                  hv.pos = vv, null != hv.end && (hv.end = Sv.changes.mapPos(hv.end)), zv.push(hv)
                }
              }
              vv = zv
            }
            for (let zv of Sv.effects) zv.is(Pv) && (vv = zv.value), zv.is(oe) && (vv = []);
            return vv
          },
          provide: vv => Le.from(vv)
        });
      return {
        active: Sv,
        extension: [Sv, rz.define((hv => new ye(hv, vv, Sv, Pv, zv.hoverTime || 300))), Me]
      }
    }

    function Ee(vv, zv) {
      let Pv = vv.plugin(qe);
      if (!Pv) return null;
      let hv = Pv.manager.tooltips.indexOf(zv);
      return hv < 0 ? null : Pv.manager.tooltipViews[hv]
    }
    const oe = hv.B.define();
    const be = hv.q.define({
      combine(vv) {
        let zv, Pv;
        for (let hv of vv) zv = zv || hv.topContainer, Pv = Pv || hv.bottomContainer;
        return {
          topContainer: zv,
          bottomContainer: Pv
        }
      }
    });

    function re(vv, zv) {
      let Pv = vv.plugin(ke),
        hv = Pv ? Pv.specs.indexOf(zv) : -1;
      return hv > -1 ? Pv.panels[hv] : null
    }
    const ke = rz.fromClass(class {
      constructor(vv) {
        this.input = vv.state.facet(vg), this.specs = this.input.filter((vv => vv)), this.panels = this.specs.map((zv => zv(vv)));
        let zv = vv.state.facet(be);
        this.top = new Xe(vv, !0, zv.topContainer), this.bottom = new Xe(vv, !1, zv.bottomContainer), this.top.sync(this.panels.filter((vv => vv.top))), this.bottom.sync(this.panels.filter((vv => !vv.top)));
        for (let Pv of this.panels) Pv.dom.classList.add("cm-panel"), Pv.mount && Pv.mount()
      }
      update(vv) {
        let zv = vv.state.facet(be);
        this.top.container != zv.topContainer && (this.top.sync([]), this.top = new Xe(vv.view, !0, zv.topContainer)), this.bottom.container != zv.bottomContainer && (this.bottom.sync([]), this.bottom = new Xe(vv.view, !1, zv.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let Pv = vv.state.facet(vg);
        if (Pv != this.input) {
          let zv = Pv.filter((vv => vv)),
            hv = [],
            Sv = [],
            ev = [],
            gv = [];
          for (let Pv of zv) {
            let zv, pv = this.specs.indexOf(Pv);
            pv < 0 ? (zv = Pv(vv.view), gv.push(zv)) : (zv = this.panels[pv], zv.update && zv.update(vv)), hv.push(zv), (zv.top ? Sv : ev).push(zv)
          }
          this.specs = zv, this.panels = hv, this.top.sync(Sv), this.bottom.sync(ev);
          for (let vv of gv) vv.dom.classList.add("cm-panel"), vv.mount && vv.mount()
        } else
          for (let hv of this.panels) hv.update && hv.update(vv)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: vv => nS.scrollMargins.of((zv => {
        let Pv = zv.plugin(vv);
        return Pv && {
          top: Pv.top.scrollMargin(),
          bottom: Pv.bottom.scrollMargin()
        }
      }))
    });
    class Xe {
      constructor(vv, zv, Pv) {
        this.view = vv, this.top = zv, this.container = Pv, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(vv) {
        for (let zv of this.panels) zv.destroy && vv.indexOf(zv) < 0 && zv.destroy();
        this.panels = vv, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let vv = this.container || this.view.dom;
          vv.insertBefore(this.dom, this.top ? vv.firstChild : null)
        }
        let vv = this.dom.firstChild;
        for (let zv of this.panels)
          if (zv.dom.parentNode == this.dom) {
            for (; vv != zv.dom;) vv = ue(vv);
            vv = vv.nextSibling
          } else this.dom.insertBefore(zv.dom, vv);
        for (; vv;) vv = ue(vv)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let vv of this.classes.split(" ")) vv && this.container.classList.remove(vv);
          for (let vv of (this.classes = this.view.themeClasses).split(" ")) vv && this.container.classList.add(vv)
        }
      }
    }

    function ue(vv) {
      let zv = vv.nextSibling;
      return vv.remove(), zv
    }
    const vg = hv.q.define({
      enables: ke
    });

    function zg(vv, zv) {
      let Pv, Sv = new Promise((vv => Pv = vv)),
        ev = vv => function(vv, zv, Pv) {
          let hv = zv.content ? zv.content(vv, (() => gv(null))) : null;
          if (!hv) {
            if (hv = (0, Tv.b)("form"), zv.input) {
              let vv = (0, Tv.b)("input", zv.input);
              /^(text|password|number|email|tel|url)$/.test(vv.type) && vv.classList.add("cm-textfield"), vv.name || (vv.name = "input"), hv.appendChild((0, Tv.b)("label", (zv.label || "") + ": ", vv))
            } else hv.appendChild(document.createTextNode(zv.label || ""));
            hv.appendChild(document.createTextNode(" ")), hv.appendChild((0, Tv.b)("button", {
              class: "cm-button",
              type: "submit"
            }, zv.submitLabel || "OK"))
          }
          let Sv = "FORM" == hv.nodeName ? [hv] : hv.querySelectorAll("form");
          for (let pv = 0; pv < Sv.length; pv++) {
            let vv = Sv[pv];
            vv.addEventListener("keydown", (zv => {
              27 == zv.keyCode ? (zv.preventDefault(), gv(null)) : 13 == zv.keyCode && (zv.preventDefault(), gv(vv))
            })), vv.addEventListener("submit", (zv => {
              zv.preventDefault(), gv(vv)
            }))
          }
          let ev = (0, Tv.b)("div", hv, (0, Tv.b)("button", {
            onclick: () => gv(null),
            "aria-label": vv.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          zv.class && (ev.className = zv.class);

          function gv(zv) {
            ev.contains(ev.ownerDocument.activeElement) && vv.focus(), Pv(zv)
          }
          return ev.classList.add("cm-dialog"), {
            dom: ev,
            top: zv.top,
            mount: () => {
              if (zv.focus) {
                let vv;
                vv = "string" == typeof zv.focus ? hv.querySelector(zv.focus) : hv.querySelector("input") || hv.querySelector("button"), vv && "select" in vv ? vv.select() : vv && "focus" in vv && vv.focus()
              }
            }
          }
        }(vv, zv, Pv);
      vv.state.field(Pg, !1) ? vv.dispatch({
        effects: hg.of(ev)
      }) : vv.dispatch({
        effects: hv.B.appendConfig.of(Pg.init((() => [ev])))
      });
      let gv = Sg.of(ev);
      return {
        close: gv,
        result: Sv.then((zv => ((vv.win.queueMicrotask || (zv => vv.win.setTimeout(zv, 10)))((() => {
          vv.state.field(Pg).indexOf(ev) > -1 && vv.dispatch({
            effects: gv
          })
        })), zv)))
      }
    }
    const Pg = hv.E.define({
        create: () => [],
        update(vv, zv) {
          for (let Pv of zv.effects) Pv.is(hg) ? vv = [Pv.value].concat(vv) : Pv.is(Sg) && (vv = vv.filter((vv => vv != Pv.value)));
          return vv
        },
        provide: vv => vg.computeN([vv], (zv => zv.field(vv)))
      }),
      hg = hv.B.define(),
      Sg = hv.B.define();
    class eg extends hv.A {
      compare(vv) {
        return this == vv || this.constructor == vv.constructor && this.eq(vv)
      }
      eq(vv) {
        return !1
      }
      destroy(vv) {}
    }
    eg.prototype.elementClass = "", eg.prototype.toDOM = void 0, eg.prototype.mapMode = hv.r.TrackBefore, eg.prototype.startSide = eg.prototype.endSide = -1, eg.prototype.point = !0;
    const gg = hv.q.define(),
      pg = hv.q.define(),
      dg = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => hv.y.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Ng = hv.q.define();

    function lg(vv) {
      return [Wg(), Ng.of({
        ...dg,
        ...vv
      })]
    }
    const Tg = hv.q.define({
      combine: vv => vv.some((vv => vv))
    });

    function Wg(vv) {
      let zv = [wg];
      return vv && !1 === vv.fixed && zv.push(Tg.of(!0)), zv
    }
    const wg = rz.fromClass(class {
      constructor(vv) {
        this.view = vv, this.domAfter = null, this.prevViewport = vv.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = vv.state.facet(Ng).map((zv => new ig(vv, zv))), this.fixed = !vv.state.facet(Tg);
        for (let zv of this.gutters) "after" == zv.config.side ? this.getDOMAfter().appendChild(zv.dom) : this.dom.appendChild(zv.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), vv.scrollDOM.insertBefore(this.dom, vv.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(vv) {
        if (this.updateGutters(vv)) {
          let zv = this.prevViewport,
            Pv = vv.view.viewport,
            hv = Math.min(zv.to, Pv.to) - Math.max(zv.from, Pv.from);
          this.syncGutters(hv < .8 * (Pv.to - Pv.from))
        }
        if (vv.geometryChanged) {
          let vv = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = vv, this.domAfter && (this.domAfter.style.minHeight = vv)
        }
        this.view.state.facet(Tg) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = vv.view.viewport
      }
      syncGutters(vv) {
        let zv = this.dom.nextSibling;
        vv && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let Pv = hv.y.iter(this.view.state.facet(gg), this.view.viewport.from),
          Sv = [],
          ev = this.gutters.map((vv => new Cg(vv, this.view.viewport, -this.view.documentPadding.top)));
        for (let hv of this.view.viewportLineBlocks)
          if (Sv.length && (Sv = []), Array.isArray(hv.type)) {
            let vv = !0;
            for (let zv of hv.type)
              if (zv.type == Uv.Text && vv) {
                sg(Pv, Sv, zv.from);
                for (let vv of ev) vv.line(this.view, zv, Sv);
                vv = !1
              } else if (zv.widget)
              for (let vv of ev) vv.widget(this.view, zv)
          } else if (hv.type == Uv.Text) {
          sg(Pv, Sv, hv.from);
          for (let vv of ev) vv.line(this.view, hv, Sv)
        } else if (hv.widget)
          for (let vv of ev) vv.widget(this.view, hv);
        for (let hv of ev) hv.finish();
        vv && (this.view.scrollDOM.insertBefore(this.dom, zv), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(vv) {
        let zv = vv.startState.facet(Ng),
          Pv = vv.state.facet(Ng),
          Sv = vv.docChanged || vv.heightChanged || vv.viewportChanged || !hv.y.eq(vv.startState.facet(gg), vv.state.facet(gg), vv.view.viewport.from, vv.view.viewport.to);
        if (zv == Pv)
          for (let hv of this.gutters) hv.update(vv) && (Sv = !0);
        else {
          Sv = !0;
          let hv = [];
          for (let Sv of Pv) {
            let Pv = zv.indexOf(Sv);
            Pv < 0 ? hv.push(new ig(this.view, Sv)) : (this.gutters[Pv].update(vv), hv.push(this.gutters[Pv]))
          }
          for (let vv of this.gutters) vv.dom.remove(), hv.indexOf(vv) < 0 && vv.destroy();
          for (let vv of hv) "after" == vv.config.side ? this.getDOMAfter().appendChild(vv.dom) : this.dom.appendChild(vv.dom);
          this.gutters = hv
        }
        return Sv
      }
      destroy() {
        for (let vv of this.gutters) vv.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: vv => nS.scrollMargins.of((zv => {
        let Pv = zv.plugin(vv);
        if (!Pv || 0 == Pv.gutters.length || !Pv.fixed) return null;
        let hv = Pv.dom.offsetWidth * zv.scaleX,
          Sv = Pv.domAfter ? Pv.domAfter.offsetWidth * zv.scaleX : 0;
        return zv.textDirection == Nz.LTR ? {
          left: hv,
          right: Sv
        } : {
          right: hv,
          left: Sv
        }
      }))
    });

    function ag(vv) {
      return Array.isArray(vv) ? vv : [vv]
    }

    function sg(vv, zv, Pv) {
      for (; vv.value && vv.from <= Pv;) vv.from == Pv && zv.push(vv.value), vv.next()
    }
    class Cg {
      constructor(vv, zv, Pv) {
        this.gutter = vv, this.height = Pv, this.i = 0, this.cursor = hv.y.iter(vv.markers, zv.from)
      }
      addElement(vv, zv, Pv) {
        let {
          gutter: hv
        } = this, Sv = (zv.top - this.height) / vv.scaleY, ev = zv.height / vv.scaleY;
        if (this.i == hv.elements.length) {
          let zv = new cg(vv, ev, Sv, Pv);
          hv.elements.push(zv), hv.dom.appendChild(zv.dom)
        } else hv.elements[this.i].update(vv, ev, Sv, Pv);
        this.height = zv.bottom, this.i++
      }
      line(vv, zv, Pv) {
        let hv = [];
        sg(this.cursor, hv, zv.from), Pv.length && (hv = hv.concat(Pv));
        let Sv = this.gutter.config.lineMarker(vv, zv, hv);
        Sv && hv.unshift(Sv);
        let ev = this.gutter;
        (0 != hv.length || ev.config.renderEmptyElements) && this.addElement(vv, zv, hv)
      }
      widget(vv, zv) {
        let Pv = this.gutter.config.widgetMarker(vv, zv.widget, zv),
          hv = Pv ? [Pv] : null;
        for (let Sv of vv.state.facet(pg)) {
          let Pv = Sv(vv, zv.widget, zv);
          Pv && (hv || (hv = [])).push(Pv)
        }
        hv && this.addElement(vv, zv, hv)
      }
      finish() {
        let vv = this.gutter;
        for (; vv.elements.length > this.i;) {
          let zv = vv.elements.pop();
          vv.dom.removeChild(zv.dom), zv.destroy()
        }
      }
    }
    class ig {
      constructor(vv, zv) {
        this.view = vv, this.config = zv, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let Pv in zv.domEventHandlers) this.dom.addEventListener(Pv, (hv => {
          let Sv, ev = hv.target;
          if (ev != this.dom && this.dom.contains(ev)) {
            for (; ev.parentNode != this.dom;) ev = ev.parentNode;
            let vv = ev.getBoundingClientRect();
            Sv = (vv.top + vv.bottom) / 2
          } else Sv = hv.clientY;
          let gv = vv.lineBlockAtHeight(Sv - vv.documentTop);
          zv.domEventHandlers[Pv](vv, gv, hv) && hv.preventDefault()
        }));
        this.markers = ag(zv.markers(vv)), zv.initialSpacer && (this.spacer = new cg(vv, 0, 0, [zv.initialSpacer(vv)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(vv) {
        let zv = this.markers;
        if (this.markers = ag(this.config.markers(vv.view)), this.spacer && this.config.updateSpacer) {
          let zv = this.config.updateSpacer(this.spacer.markers[0], vv);
          zv != this.spacer.markers[0] && this.spacer.update(vv.view, 0, 0, [zv])
        }
        let Pv = vv.view.viewport;
        return !hv.y.eq(this.markers, zv, Pv.from, Pv.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(vv)
      }
      destroy() {
        for (let vv of this.elements) vv.destroy()
      }
    }
    class cg {
      constructor(vv, zv, Pv, hv) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(vv, zv, Pv, hv)
      }
      update(vv, zv, Pv, hv) {
        this.height != zv && (this.height = zv, this.dom.style.height = zv + "px"), this.above != Pv && (this.dom.style.marginTop = (this.above = Pv) ? Pv + "px" : ""),
          function(vv, zv) {
            if (vv.length != zv.length) return !1;
            for (let Pv = 0; Pv < vv.length; Pv++)
              if (!vv[Pv].compare(zv[Pv])) return !1;
            return !0
          }(this.markers, hv) || this.setMarkers(vv, hv)
      }
      setMarkers(vv, zv) {
        let Pv = "cm-gutterElement",
          hv = this.dom.firstChild;
        for (let Sv = 0, ev = 0;;) {
          let gv = ev,
            pv = Sv < zv.length ? zv[Sv++] : null,
            dv = !1;
          if (pv) {
            let vv = pv.elementClass;
            vv && (Pv += " " + vv);
            for (let zv = ev; zv < this.markers.length; zv++)
              if (this.markers[zv].compare(pv)) {
                gv = zv, dv = !0;
                break
              }
          } else gv = this.markers.length;
          for (; ev < gv;) {
            let vv = this.markers[ev++];
            if (vv.toDOM) {
              vv.destroy(hv);
              let zv = hv.nextSibling;
              hv.remove(), hv = zv
            }
          }
          if (!pv) break;
          pv.toDOM && (dv ? hv = hv.nextSibling : this.dom.insertBefore(pv.toDOM(vv), hv)), dv && ev++
        }
        this.dom.className = Pv, this.markers = zv
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const Gg = hv.q.define(),
      mg = hv.q.define(),
      jg = hv.q.define({
        combine: vv => (0, hv.O)(vv, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(vv, zv) {
            let Pv = Object.assign({}, vv);
            for (let hv in zv) {
              let vv = Pv[hv],
                Sv = zv[hv];
              Pv[hv] = vv ? (zv, Pv, hv) => vv(zv, Pv, hv) || Sv(zv, Pv, hv) : Sv
            }
            return Pv
          }
        })
      });
    class fg extends eg {
      constructor(vv) {
        super(), this.number = vv
      }
      eq(vv) {
        return this.number == vv.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function Fg(vv, zv) {
      return vv.state.facet(jg).formatNumber(zv, vv.state)
    }
    const Yg = Ng.compute([jg], (vv => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: vv => vv.state.facet(Gg),
      lineMarker: (vv, zv, Pv) => Pv.some((vv => vv.toDOM)) ? null : new fg(Fg(vv, vv.state.doc.lineAt(zv.from).number)),
      widgetMarker: (vv, zv, Pv) => {
        for (let hv of vv.state.facet(mg)) {
          let Sv = hv(vv, zv, Pv);
          if (Sv) return Sv
        }
        return null
      },
      lineMarkerChange: vv => vv.startState.facet(jg) != vv.state.facet(jg),
      initialSpacer: vv => new fg(Fg(vv, Og(vv.state.doc.lines))),
      updateSpacer(vv, zv) {
        let Pv = Fg(zv.view, Og(zv.view.state.doc.lines));
        return Pv == vv.number ? vv : new fg(Pv)
      },
      domEventHandlers: vv.facet(jg).domEventHandlers,
      side: "before"
    })));

    function ng() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [jg.of(vv), Wg(), Yg]
    }

    function Og(vv) {
      let zv = 9;
      for (; zv < vv;) zv = 10 * zv + 9;
      return zv
    }
    const Dg = new class extends eg {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      Kg = gg.compute(["selection"], (vv => {
        let zv = [],
          Pv = -1;
        for (let hv of vv.selection.PC) {
          let Sv = vv.doc.lineAt(hv.head).from;
          Sv > Pv && (Pv = Sv, zv.push(Dg.range(Sv)))
        }
        return hv.y.of(zv)
      }));

    function Vg() {
      return Kg
    }
  },
  40632: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => tv,
      E: () => av,
      e: () => hv,
      h: () => wv,
      l: () => gv,
      p: () => lv,
      r: () => Nv,
      v: () => xv,
      z: () => qv
    });
    const hv = 1024;
    let Sv = 0;
    class ev {
      constructor(vv, zv) {
        this.from = vv, this.to = zv
      }
    }
    class gv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Sv++, this.perNode = !!vv.perNode, this.deserialize = vv.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = vv.combine || null
      }
      add(vv) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof vv && (vv = Nv.match(vv)), zv => {
          let Pv = vv(zv);
          return void 0 === Pv ? null : [this, Pv]
        }
      }
    }
    gv.closedBy = new gv({
      deserialize: vv => vv.split(" ")
    }), gv.openedBy = new gv({
      deserialize: vv => vv.split(" ")
    }), gv.group = new gv({
      deserialize: vv => vv.split(" ")
    }), gv.isolate = new gv({
      deserialize: vv => {
        if (vv && "rtl" != vv && "ltr" != vv && "auto" != vv) throw new RangeError("Invalid value for isolate: " + vv);
        return vv || "auto"
      }
    }), gv.contextHash = new gv({
      perNode: !0
    }), gv.lookAhead = new gv({
      perNode: !0
    }), gv.mounted = new gv({
      perNode: !0
    });
    class pv {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = vv, this.overlay = zv, this.parser = Pv, this.bracketed = hv
      }
      static get(vv) {
        return vv && vv.props && vv.props[gv.mounted.id]
      }
    }
    const dv = Object.create(null);
    class Nv {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = vv, this.props = zv, this.id = Pv, this.flags = hv
      }
      static define(vv) {
        let zv = vv.props && vv.props.length ? Object.create(null) : dv,
          Pv = (vv.top ? 1 : 0) | (vv.skipped ? 2 : 0) | (vv.error ? 4 : 0) | (null == vv.name ? 8 : 0),
          hv = new Nv(vv.name || "", zv, vv.id, Pv);
        if (vv.props)
          for (let Sv of vv.props)
            if (Array.isArray(Sv) || (Sv = Sv(hv)), Sv) {
              if (Sv[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              zv[Sv[0].id] = Sv[1]
            } return hv
      }
      prop(vv) {
        return this.props[vv.id]
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
      is(vv) {
        if ("string" == typeof vv) {
          if (this.name == vv) return !0;
          let zv = this.prop(gv.group);
          return !!zv && zv.indexOf(vv) > -1
        }
        return this.id == vv
      }
      static match(vv) {
        let zv = Object.create(null);
        for (let Pv in vv)
          for (let hv of Pv.split(" ")) zv[hv] = vv[Pv];
        return vv => {
          for (let Pv = vv.prop(gv.group), hv = -1; hv < (Pv ? Pv.length : 0); hv++) {
            let Sv = zv[hv < 0 ? vv.name : Pv[hv]];
            if (Sv) return Sv
          }
        }
      }
    }
    Nv.none = new Nv("", Object.create(null), 0, 8);
    class lv {
      constructor(vv) {
        this.types = vv;
        for (let zv = 0; zv < vv.length; zv++)
          if (vv[zv].id != zv) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let vv = [];
        for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
        for (let Sv of this.types) {
          let zv = null;
          for (let vv of Pv) {
            let Pv = vv(Sv);
            if (Pv) {
              zv || (zv = Object.assign({}, Sv.props));
              let vv = Pv[1],
                hv = Pv[0];
              hv.combine && hv.id in zv && (vv = hv.combine(zv[hv.id], vv)), zv[hv.id] = vv
            }
          }
          vv.push(zv ? new Nv(Sv.name, zv, Sv.id, Sv.flags) : Sv)
        }
        return new lv(vv)
      }
    }
    const Tv = new WeakMap,
      Wv = new WeakMap;
    var wv;
    ! function(vv) {
      vv[vv.ExcludeBuffers = 1] = "ExcludeBuffers", vv[vv.IncludeAnonymous = 2] = "IncludeAnonymous", vv[vv.IgnoreMounts = 4] = "IgnoreMounts", vv[vv.IgnoreOverlays = 8] = "IgnoreOverlays", vv[vv.EnterBracketed = 16] = "EnterBracketed"
    }(wv || (wv = {}));
    class av {
      constructor(vv, zv, Pv, hv, Sv) {
        if (this.type = vv, this.children = zv, this.positions = Pv, this.length = hv, this.props = null, Sv && Sv.length) {
          this.props = Object.create(null);
          for (let [vv, zv] of Sv) this.props["number" == typeof vv ? vv : vv.id] = zv
        }
      }
      toString() {
        let vv = pv.get(this);
        if (vv && !vv.overlay) return vv.tree.toString();
        let zv = "";
        for (let Pv of this.children) {
          let vv = Pv.toString();
          vv && (zv && (zv += ","), zv += vv)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (zv.length ? "(" + zv + ")" : "") : zv
      }
      cursor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Dv(this.topNode, vv)
      }
      cursorAt(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = Tv.get(this) || this.topNode,
          hv = new Dv(Pv);
        return hv.moveTo(vv, zv), Tv.set(this, hv._tree), hv
      }
      get topNode() {
        return new mv(this, 0, 0, null)
      }
      resolve(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = cv(Tv.get(this) || this.topNode, vv, zv, !1);
        return Tv.set(this, Pv), Pv
      }
      resolveInner(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = cv(Wv.get(this) || this.topNode, vv, zv, !0);
        return Wv.set(this, Pv), Pv
      }
      resolveStack(vv) {
        return function(vv, zv, Pv) {
          let hv = vv.resolveInner(zv, Pv),
            Sv = null;
          for (let ev = hv instanceof mv ? hv : hv.context.parent; ev; ev = ev.parent)
            if (ev.index < 0) {
              let vv = ev.parent;
              (Sv || (Sv = [hv])).push(vv.resolve(zv, Pv)), ev = vv
            } else {
              let vv = pv.get(ev.tree);
              if (vv && vv.overlay && vv.overlay[0].from <= zv && vv.overlay[vv.overlay.length - 1].to >= zv) {
                let gv = new mv(vv.tree, vv.overlay[0].from + ev.from, -1, ev);
                (Sv || (Sv = [hv])).push(cv(gv, zv, Pv, !1))
              }
            } return Sv ? nv(Sv) : hv
        }(this, vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(vv) {
        let {
          enter: zv,
          leave: Pv,
          from: hv = 0,
          to: Sv = this.length
        } = vv, ev = vv.mode || 0, gv = (ev & wv.IncludeAnonymous) > 0;
        for (let pv = this.cursor(ev | wv.IncludeAnonymous);;) {
          let vv = !1;
          if (pv.from <= Sv && pv.to >= hv && (!gv && pv.type.isAnonymous || !1 !== zv(pv))) {
            if (pv.firstChild()) continue;
            vv = !0
          }
          for (; vv && Pv && (gv || !pv.type.isAnonymous) && Pv(pv), !pv.nextSibling();) {
            if (!pv.parent()) return;
            vv = !0
          }
        }
      }
      prop(vv) {
        return vv.perNode ? this.props ? this.props[vv.id] : void 0 : this.type.prop(vv)
      }
      get propValues() {
        let vv = [];
        if (this.props)
          for (let zv in this.props) vv.push([+zv, this.props[zv]]);
        return vv
      }
      balance() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Rv(Nv.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((vv, zv, Pv) => new av(this.type, vv, zv, Pv, this.propValues)), vv.makeTree || ((vv, zv, Pv) => new av(Nv.none, vv, zv, Pv)))
      }
      static build(vv) {
        return function(vv) {
          var zv;
          let {
            buffer: Pv,
            nodeSet: Sv,
            maxBufferLength: ev = hv,
            reused: pv = [],
            minRepeatType: dv = Sv.types.length
          } = vv, Nv = Array.isArray(Pv) ? new sv(Pv, Pv.length) : Pv, lv = Sv.types, Tv = 0, Wv = 0;

          function wv(vv, zv, Pv, hv, gv, av) {
            let {
              id: sv,
              start: Fv,
              end: Yv,
              size: nv
            } = Nv, Ov = Wv, Dv = Tv;
            if (nv < 0) {
              if (Nv.next(), -1 == nv) {
                let zv = pv[sv];
                return Pv.push(zv), void hv.push(Fv - vv)
              }
              if (-3 == nv) return void(Tv = sv);
              if (-4 == nv) return void(Wv = sv);
              throw new RangeError(`Unrecognized record size: ${nv}`)
            }
            let Kv, Vv, Uv = lv[sv],
              xv = Fv - vv;
            if (Yv - Fv <= ev && (Vv = jv(Nv.pos - zv, gv))) {
              let zv = new Uint16Array(Vv.size - Vv.skip),
                Pv = Nv.pos - Vv.size,
                hv = zv.length;
              for (; Nv.pos > Pv;) hv = fv(Vv.start, zv, hv);
              Kv = new Cv(zv, Yv - Vv.start, Sv), xv = Vv.start - vv
            } else {
              let vv = Nv.pos - nv;
              Nv.next();
              let zv = [],
                Pv = [],
                hv = sv >= dv ? sv : -1,
                Sv = 0,
                gv = Yv;
              for (; Nv.pos > vv;) hv >= 0 && Nv.id == hv && Nv.size >= 0 ? (Nv.end <= gv - ev && (Gv(zv, Pv, Fv, Sv, Nv.end, gv, hv, Ov, Dv), Sv = zv.length, gv = Nv.end), Nv.next()) : av > 2500 ? iv(Fv, vv, zv, Pv) : wv(Fv, vv, zv, Pv, hv, av + 1);
              if (hv >= 0 && Sv > 0 && Sv < zv.length && Gv(zv, Pv, Fv, Sv, Fv, gv, hv, Ov, Dv), zv.reverse(), Pv.reverse(), hv > -1 && Sv > 0) {
                let vv = cv(Uv, Dv);
                Kv = Rv(Uv, zv, Pv, 0, zv.length, 0, Yv - Fv, vv, vv)
              } else Kv = mv(Uv, zv, Pv, Yv - Fv, Ov - Yv, Dv)
            }
            Pv.push(Kv), hv.push(xv)
          }

          function iv(vv, zv, Pv, hv) {
            let gv = [],
              pv = 0,
              dv = -1;
            for (; Nv.pos > zv;) {
              let {
                id: vv,
                start: zv,
                end: Pv,
                size: hv
              } = Nv;
              if (hv > 4) Nv.next();
              else {
                if (dv > -1 && zv < dv) break;
                dv < 0 && (dv = Pv - ev), gv.push(vv, zv, Pv), pv++, Nv.next()
              }
            }
            if (pv) {
              let zv = new Uint16Array(4 * pv),
                ev = gv[gv.length - 2];
              for (let vv = gv.length - 3, Pv = 0; vv >= 0; vv -= 3) zv[Pv++] = gv[vv], zv[Pv++] = gv[vv + 1] - ev, zv[Pv++] = gv[vv + 2] - ev, zv[Pv++] = Pv;
              Pv.push(new Cv(zv, gv[2] - ev, Sv)), hv.push(ev - vv)
            }
          }

          function cv(vv, zv) {
            return (Pv, hv, Sv) => {
              let ev, pv, dv = 0,
                Nv = Pv.length - 1;
              if (Nv >= 0 && (ev = Pv[Nv]) instanceof av) {
                if (!Nv && ev.type == vv && ev.length == Sv) return ev;
                (pv = ev.prop(gv.lookAhead)) && (dv = hv[Nv] + ev.length + pv)
              }
              return mv(vv, Pv, hv, Sv, dv, zv)
            }
          }

          function Gv(vv, zv, Pv, hv, ev, gv, pv, dv, Nv) {
            let lv = [],
              Tv = [];
            for (; vv.length > hv;) lv.push(vv.pop()), Tv.push(zv.pop() + Pv - ev);
            vv.push(mv(Sv.types[pv], lv, Tv, gv - ev, dv - gv, Nv)), zv.push(ev - Pv)
          }

          function mv(vv, zv, Pv, hv, Sv, ev, pv) {
            if (ev) {
              let vv = [gv.contextHash, ev];
              pv = pv ? [vv].concat(pv) : [vv]
            }
            if (Sv > 25) {
              let vv = [gv.lookAhead, Sv];
              pv = pv ? [vv].concat(pv) : [vv]
            }
            return new av(vv, zv, Pv, hv, pv)
          }

          function jv(vv, zv) {
            let Pv = Nv.fork(),
              hv = 0,
              Sv = 0,
              gv = 0,
              pv = Pv.end - ev,
              lv = {
                size: 0,
                start: 0,
                skip: 0
              };
            vv: for (let ev = Pv.pos - vv; Pv.pos > ev;) {
              let vv = Pv.size;
              if (Pv.id == zv && vv >= 0) {
                lv.size = hv, lv.start = Sv, lv.skip = gv, gv += 4, hv += 4, Pv.next();
                continue
              }
              let Nv = Pv.pos - vv;
              if (vv < 0 || Nv < ev || Pv.start < pv) break;
              let Tv = Pv.id >= dv ? 4 : 0,
                Wv = Pv.start;
              for (Pv.next(); Pv.pos > Nv;) {
                if (Pv.size < 0) {
                  if (-3 != Pv.size && -4 != Pv.size) break vv;
                  Tv += 4
                } else Pv.id >= dv && (Tv += 4);
                Pv.next()
              }
              Sv = Wv, hv += vv, gv += Tv
            }
            return (zv < 0 || hv == vv) && (lv.size = hv, lv.start = Sv, lv.skip = gv), lv.size > 4 ? lv : void 0
          }

          function fv(vv, zv, Pv) {
            let {
              id: hv,
              start: Sv,
              end: ev,
              size: gv
            } = Nv;
            if (Nv.next(), gv >= 0 && hv < dv) {
              let pv = Pv;
              if (gv > 4) {
                let hv = Nv.pos - (gv - 4);
                for (; Nv.pos > hv;) Pv = fv(vv, zv, Pv)
              }
              zv[--Pv] = pv, zv[--Pv] = ev - vv, zv[--Pv] = Sv - vv, zv[--Pv] = hv
            } else - 3 == gv ? Tv = hv : -4 == gv && (Wv = hv);
            return Pv
          }
          let Fv = [],
            Yv = [];
          for (; Nv.pos > 0;) wv(vv.start || 0, vv.bufferStart || 0, Fv, Yv, -1, 0);
          let nv = null !== (zv = vv.length) && void 0 !== zv ? zv : Fv.length ? Yv[0] + Fv[0].length : 0;
          return new av(lv[vv.topID], Fv.reverse(), Yv.reverse(), nv)
        }(vv)
      }
    }
    av.empty = new av(Nv.none, [], [], 0);
    class sv {
      constructor(vv, zv) {
        this.buffer = vv, this.index = zv
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
        return new sv(this.buffer, this.index)
      }
    }
    class Cv {
      constructor(vv, zv, Pv) {
        this.buffer = vv, this.length = zv, this.set = Pv
      }
      get type() {
        return Nv.none
      }
      toString() {
        let vv = [];
        for (let zv = 0; zv < this.buffer.length;) vv.push(this.childString(zv)), zv = this.buffer[zv + 3];
        return vv.join(",")
      }
      childString(vv) {
        let zv = this.buffer[vv],
          Pv = this.buffer[vv + 3],
          hv = this.set.types[zv],
          Sv = hv.name;
        if (/\W/.test(Sv) && !hv.isError && (Sv = JSON.stringify(Sv)), Pv == (vv += 4)) return Sv;
        let ev = [];
        for (; vv < Pv;) ev.push(this.childString(vv)), vv = this.buffer[vv + 3];
        return Sv + "(" + ev.join(",") + ")"
      }
      findChild(vv, zv, Pv, hv, Sv) {
        let {
          buffer: ev
        } = this, gv = -1;
        for (let pv = vv; pv != zv && !(iv(Sv, hv, ev[pv + 1], ev[pv + 2]) && (gv = pv, Pv > 0)); pv = ev[pv + 3]);
        return gv
      }
      slice(vv, zv, Pv) {
        let hv = this.buffer,
          Sv = new Uint16Array(zv - vv),
          ev = 0;
        for (let gv = vv, pv = 0; gv < zv;) {
          Sv[pv++] = hv[gv++], Sv[pv++] = hv[gv++] - Pv;
          let zv = Sv[pv++] = hv[gv++] - Pv;
          Sv[pv++] = hv[gv++] - vv, ev = Math.max(ev, zv)
        }
        return new Cv(Sv, ev, this.set)
      }
    }

    function iv(vv, zv, Pv, hv) {
      switch (vv) {
        case -2:
          return Pv < zv;
        case -1:
          return hv >= zv && Pv < zv;
        case 0:
          return Pv < zv && hv > zv;
        case 1:
          return Pv <= zv && hv > zv;
        case 2:
          return hv > zv;
        case 4:
          return !0
      }
    }

    function cv(vv, zv, Pv, hv) {
      for (var Sv; vv.from == vv.to || (Pv < 1 ? vv.from >= zv : vv.from > zv) || (Pv > -1 ? vv.to <= zv : vv.to < zv);) {
        let zv = !hv && vv instanceof mv && vv.index < 0 ? null : vv.parent;
        if (!zv) return vv;
        vv = zv
      }
      let ev = hv ? 0 : wv.IgnoreOverlays;
      if (hv)
        for (let gv = vv, pv = gv.parent; pv; gv = pv, pv = gv.parent) gv instanceof mv && gv.index < 0 && (null === (Sv = pv.enter(zv, Pv, ev)) || void 0 === Sv ? void 0 : Sv.from) != gv.from && (vv = pv);
      for (;;) {
        let hv = vv.enter(zv, Pv, ev);
        if (!hv) return vv;
        vv = hv
      }
    }
    class Gv {
      cursor() {
        return new Dv(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(vv) {
        let zv = jv(this, vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return zv.length ? zv[0] : null
      }
      getChildren(vv) {
        return jv(this, vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(vv) {
        return cv(this, vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(vv) {
        return cv(this, vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(vv) {
        return fv(this.parent, vv)
      }
      enterUnfinishedNodesBefore(vv) {
        let zv = this.childBefore(vv),
          Pv = this;
        for (; zv;) {
          let vv = zv.lastChild;
          if (!vv || vv.to != zv.to) break;
          vv.type.isError && vv.from == vv.to ? (Pv = zv, zv = vv.prevSibling) : zv = vv
        }
        return Pv
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class mv extends Gv {
      constructor(vv, zv, Pv, hv) {
        super(), this._tree = vv, this.from = zv, this.index = Pv, this._parent = hv
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
      nextChild(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let ev = this;;) {
          for (let {
              children: gv,
              positions: dv
            } = ev._tree, Nv = zv > 0 ? gv.length : -1; vv != Nv; vv += zv) {
            let Nv, lv = gv[vv],
              Tv = dv[vv] + ev.from;
            if (Sv & wv.EnterBracketed && lv instanceof av && (Nv = pv.get(lv)) && !Nv.overlay && Nv.bracketed && Pv >= Tv && Pv <= Tv + lv.length || iv(hv, Pv, Tv, Tv + lv.length))
              if (lv instanceof Cv) {
                if (Sv & wv.ExcludeBuffers) continue;
                let gv = lv.findChild(0, lv.buffer.length, zv, Pv - Tv, hv);
                if (gv > -1) return new Yv(new Fv(ev, lv, vv, Tv), null, gv)
              } else if (Sv & wv.IncludeAnonymous || !lv.type.isAnonymous || Kv(lv)) {
              let gv;
              if (!(Sv & wv.IgnoreMounts) && (gv = pv.get(lv)) && !gv.overlay) return new mv(gv.tree, Tv, vv, ev);
              let dv = new mv(lv, Tv, vv, ev);
              return Sv & wv.IncludeAnonymous || !dv.type.isAnonymous ? dv : dv.nextChild(zv < 0 ? lv.children.length - 1 : 0, zv, Pv, hv, Sv)
            }
          }
          if (Sv & wv.IncludeAnonymous || !ev.type.isAnonymous) return null;
          if (vv = ev.index >= 0 ? ev.index + zv : zv < 0 ? -1 : ev._parent._tree.children.length, ev = ev._parent, !ev) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(vv) {
        return this.nextChild(0, 1, vv, 2)
      }
      childBefore(vv) {
        return this.nextChild(this._tree.children.length - 1, -1, vv, -2)
      }
      prop(vv) {
        return this._tree.prop(vv)
      }
      enter(vv, zv) {
        let Pv, hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(hv & wv.IgnoreOverlays) && (Pv = pv.get(this._tree)) && Pv.overlay) {
          let Sv = vv - this.from,
            ev = hv & wv.EnterBracketed && Pv.bracketed;
          for (let {
              from: vv,
              to: hv
            }
            of Pv.overlay)
            if ((zv > 0 || ev ? vv <= Sv : vv < Sv) && (zv < 0 || ev ? hv >= Sv : hv > Sv)) return new mv(Pv.tree, Pv.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, vv, zv, hv)
      }
      nextSignificantParent() {
        let vv = this;
        for (; vv.type.isAnonymous && vv._parent;) vv = vv._parent;
        return vv
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

    function jv(vv, zv, Pv, hv) {
      let Sv = vv.cursor(),
        ev = [];
      if (!Sv.firstChild()) return ev;
      if (null != Pv)
        for (let gv = !1; !gv;)
          if (gv = Sv.type.is(Pv), !Sv.nextSibling()) return ev;
      for (;;) {
        if (null != hv && Sv.type.is(hv)) return ev;
        if (Sv.type.is(zv) && ev.push(Sv.node), !Sv.nextSibling()) return null == hv ? ev : []
      }
    }

    function fv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zv.length - 1;
      for (let hv = vv; Pv >= 0; hv = hv.parent) {
        if (!hv) return !1;
        if (!hv.type.isAnonymous) {
          if (zv[Pv] && zv[Pv] != hv.name) return !1;
          Pv--
        }
      }
      return !0
    }
    class Fv {
      constructor(vv, zv, Pv, hv) {
        this.parent = vv, this.buffer = zv, this.index = Pv, this.start = hv
      }
    }
    class Yv extends Gv {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(vv, zv, Pv) {
        super(), this.context = vv, this._parent = zv, this.index = Pv, this.type = vv.buffer.set.types[vv.buffer.buffer[Pv]]
      }
      child(vv, zv, Pv) {
        let {
          buffer: hv
        } = this.context, Sv = hv.findChild(this.index + 4, hv.buffer[this.index + 3], vv, zv - this.context.start, Pv);
        return Sv < 0 ? null : new Yv(this.context, this, Sv)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(vv) {
        return this.child(1, vv, 2)
      }
      childBefore(vv) {
        return this.child(-1, vv, -2)
      }
      prop(vv) {
        return this.type.prop(vv)
      }
      enter(vv, zv) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & wv.ExcludeBuffers) return null;
        let {
          buffer: Pv
        } = this.context, hv = Pv.findChild(this.index + 4, Pv.buffer[this.index + 3], zv > 0 ? 1 : -1, vv - this.context.start, zv);
        return hv < 0 ? null : new Yv(this.context, this, hv)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(vv) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + vv, vv, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: vv
        } = this.context, zv = vv.buffer[this.index + 3];
        return zv < (this._parent ? vv.buffer[this._parent.index + 3] : vv.buffer.length) ? new Yv(this.context, this._parent, zv) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: vv
        } = this.context, zv = this._parent ? this._parent.index + 4 : 0;
        return this.index == zv ? this.externalSibling(-1) : new Yv(this.context, this._parent, vv.findChild(zv, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let vv = [],
          zv = [],
          {
            buffer: Pv
          } = this.context,
          hv = this.index + 4,
          Sv = Pv.buffer[this.index + 3];
        if (Sv > hv) {
          let ev = Pv.buffer[this.index + 1];
          vv.push(Pv.slice(hv, Sv, ev)), zv.push(0)
        }
        return new av(this.type, vv, zv, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function nv(vv) {
      if (!vv.length) return null;
      let zv = 0,
        Pv = vv[0];
      for (let ev = 1; ev < vv.length; ev++) {
        let hv = vv[ev];
        (hv.from > Pv.from || hv.to < Pv.to) && (Pv = hv, zv = ev)
      }
      let hv = Pv instanceof mv && Pv.index < 0 ? null : Pv.parent,
        Sv = vv.slice();
      return hv ? Sv[zv] = hv : Sv.splice(zv, 1), new Ov(Sv, Pv)
    }
    class Ov {
      constructor(vv, zv) {
        this.heads = vv, this.node = zv
      }
      get next() {
        return nv(this.heads)
      }
    }
    class Dv {
      get name() {
        return this.type.name
      }
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = zv & ~wv.EnterBracketed, vv instanceof mv) this.yieldNode(vv);
        else {
          this._tree = vv.context.parent, this.buffer = vv.context;
          for (let zv = vv._parent; zv; zv = zv._parent) this.stack.unshift(zv.index);
          this.bufferNode = vv, this.yieldBuf(vv.index)
        }
      }
      yieldNode(vv) {
        return !!vv && (this._tree = vv, this.type = vv.type, this.from = vv.from, this.to = vv.to, !0)
      }
      yieldBuf(vv, zv) {
        this.index = vv;
        let {
          start: Pv,
          buffer: hv
        } = this.buffer;
        return this.type = zv || hv.set.types[hv.buffer[vv]], this.from = Pv + hv.buffer[vv + 1], this.to = Pv + hv.buffer[vv + 2], !0
      }
      yield(vv) {
        return !!vv && (vv instanceof mv ? (this.buffer = null, this.yieldNode(vv)) : (this.buffer = vv.context, this.yieldBuf(vv.index, vv.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(vv, zv, Pv) {
        if (!this.buffer) return this.yield(this._tree.nextChild(vv < 0 ? this._tree._tree.children.length - 1 : 0, vv, zv, Pv, this.mode));
        let {
          buffer: hv
        } = this.buffer, Sv = hv.findChild(this.index + 4, hv.buffer[this.index + 3], vv, zv - this.buffer.start, Pv);
        return !(Sv < 0) && (this.stack.push(this.index), this.yieldBuf(Sv))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(vv) {
        return this.enterChild(1, vv, 2)
      }
      childBefore(vv) {
        return this.enterChild(-1, vv, -2)
      }
      enter(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(Pv & wv.ExcludeBuffers) && this.enterChild(1, vv, zv) : this.yield(this._tree.enter(vv, zv, Pv))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & wv.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let vv = this.mode & wv.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(vv)
      }
      sibling(vv) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + vv, vv, 0, 4, this.mode));
        let {
          buffer: zv
        } = this.buffer, Pv = this.stack.length - 1;
        if (vv < 0) {
          let vv = Pv < 0 ? 0 : this.stack[Pv] + 4;
          if (this.index != vv) return this.yieldBuf(zv.findChild(vv, this.index, -1, 0, 4))
        } else {
          let vv = zv.buffer[this.index + 3];
          if (vv < (Pv < 0 ? zv.buffer.length : zv.buffer[this.stack[Pv] + 3])) return this.yieldBuf(vv)
        }
        return Pv < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + vv, vv, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(vv) {
        let zv, Pv, {
          buffer: hv
        } = this;
        if (hv) {
          if (vv > 0) {
            if (this.index < hv.buffer.buffer.length) return !1
          } else
            for (let vv = 0; vv < this.index; vv++)
              if (hv.buffer.buffer[vv + 3] < this.index) return !1;
          ({
            index: zv,
            parent: Pv
          } = hv)
        } else({
          index: zv,
          _parent: Pv
        } = this._tree);
        for (; Pv;
          ({
            index: zv,
            _parent: Pv
          } = Pv))
          if (zv > -1)
            for (let hv = zv + vv, Sv = vv < 0 ? -1 : Pv._tree.children.length; hv != Sv; hv += vv) {
              let vv = Pv._tree.children[hv];
              if (this.mode & wv.IncludeAnonymous || vv instanceof Cv || !vv.type.isAnonymous || Kv(vv)) return !1
            }
        return !0
      }
      move(vv, zv) {
        if (zv && this.enterChild(vv, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(vv)) return !0;
          if (this.atLastNode(vv) || !this.parent()) return !1
        }
      }
      next() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, vv)
      }
      prev() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, vv)
      }
      moveTo(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (zv < 1 ? this.from >= vv : this.from > vv) || (zv > -1 ? this.to <= vv : this.to < vv)) && this.parent(););
        for (; this.enterChild(1, vv, zv););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let vv = this.bufferNode,
          zv = null,
          Pv = 0;
        if (vv && vv.context == this.buffer) vv: for (let hv = this.index, Sv = this.stack.length; Sv >= 0;) {
          for (let ev = vv; ev; ev = ev._parent)
            if (ev.index == hv) {
              if (hv == this.index) return ev;
              zv = ev, Pv = Sv + 1;
              break vv
            } hv = this.stack[--Sv]
        }
        for (let hv = Pv; hv < this.stack.length; hv++) zv = new Yv(this.buffer, zv, this.stack[hv]);
        return this.bufferNode = new Yv(this.buffer, zv, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(vv, zv) {
        for (let Pv = 0;;) {
          let hv = !1;
          if (this.type.isAnonymous || !1 !== vv(this)) {
            if (this.firstChild()) {
              Pv++;
              continue
            }
            this.type.isAnonymous || (hv = !0)
          }
          for (;;) {
            if (hv && zv && zv(this), hv = this.type.isAnonymous, !Pv) return;
            if (this.nextSibling()) break;
            this.parent(), Pv--, hv = !0
          }
        }
      }
      matchContext(vv) {
        if (!this.buffer) return fv(this.node.parent, vv);
        let {
          buffer: zv
        } = this.buffer, {
          types: Pv
        } = zv.set;
        for (let hv = vv.length - 1, Sv = this.stack.length - 1; hv >= 0; Sv--) {
          if (Sv < 0) return fv(this._tree, vv, hv);
          let ev = Pv[zv.buffer[this.stack[Sv]]];
          if (!ev.isAnonymous) {
            if (vv[hv] && vv[hv] != ev.name) return !1;
            hv--
          }
        }
        return !0
      }
    }

    function Kv(vv) {
      return vv.children.some((vv => vv instanceof Cv || !vv.type.isAnonymous || Kv(vv)))
    }
    const Vv = new WeakMap;

    function Uv(vv, zv) {
      if (!vv.isAnonymous || zv instanceof Cv || zv.type != vv) return 1;
      let Pv = Vv.get(zv);
      if (null == Pv) {
        Pv = 1;
        for (let hv of zv.children) {
          if (hv.type != vv || !(hv instanceof av)) {
            Pv = 1;
            break
          }
          Pv += Uv(vv, hv)
        }
        Vv.set(zv, Pv)
      }
      return Pv
    }

    function Rv(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
      let Nv = 0;
      for (let wv = hv; wv < Sv; wv++) Nv += Uv(vv, zv[wv]);
      let lv = Math.ceil(1.5 * Nv / 8),
        Tv = [],
        Wv = [];
      return function zv(Pv, hv, Sv, gv, pv) {
        for (let Nv = Sv; Nv < gv;) {
          let Sv = Nv,
            wv = hv[Nv],
            av = Uv(vv, Pv[Nv]);
          for (Nv++; Nv < gv; Nv++) {
            let zv = Uv(vv, Pv[Nv]);
            if (av + zv >= lv) break;
            av += zv
          }
          if (Nv == Sv + 1) {
            if (av > lv) {
              let vv = Pv[Sv];
              zv(vv.children, vv.positions, 0, vv.children.length, hv[Sv] + pv);
              continue
            }
            Tv.push(Pv[Sv])
          } else {
            let zv = hv[Nv - 1] + Pv[Nv - 1].length - wv;
            Tv.push(Rv(vv, Pv, hv, Sv, Nv, wv, zv, null, dv))
          }
          Wv.push(wv + pv - ev)
        }
      }(zv, Pv, hv, Sv, 0), (pv || dv)(Tv, Wv, gv)
    }
    class xv {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(vv, zv, Pv) {
        let hv = this.map.get(vv);
        hv || this.map.set(vv, hv = new Map), hv.set(zv, Pv)
      }
      getBuffer(vv, zv) {
        let Pv = this.map.get(vv);
        return Pv && Pv.get(zv)
      }
      set(vv, zv) {
        vv instanceof Yv ? this.setBuffer(vv.context.buffer, vv.index, zv) : vv instanceof mv && this.map.set(vv.tree, zv)
      }
      get(vv) {
        return vv instanceof Yv ? this.getBuffer(vv.context.buffer, vv.index) : vv instanceof mv ? this.map.get(vv.tree) : void 0
      }
      cursorSet(vv, zv) {
        vv.buffer ? this.setBuffer(vv.buffer.buffer, vv.index, zv) : this.map.set(vv.tree, zv)
      }
      cursorGet(vv) {
        return vv.buffer ? this.getBuffer(vv.buffer.buffer, vv.index) : this.map.get(vv.tree)
      }
    }
    class tv {
      constructor(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = vv, this.to = zv, this.tree = Pv, this.offset = hv, this.open = (Sv ? 1 : 0) | (ev ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = [new tv(0, vv.length, vv, 0, !1, Pv)];
        for (let Sv of zv) Sv.to > vv.length && hv.push(Sv);
        return hv
      }
      static applyChanges(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!zv.length) return vv;
        let hv = [],
          Sv = 1,
          ev = vv.length ? vv[0] : null;
        for (let gv = 0, pv = 0, dv = 0;; gv++) {
          let Nv = gv < zv.length ? zv[gv] : null,
            lv = Nv ? Nv.fromA : 1e9;
          if (lv - pv >= Pv)
            for (; ev && ev.from < lv;) {
              let zv = ev;
              if (pv >= zv.from || lv <= zv.to || dv) {
                let vv = Math.max(zv.from, pv) - dv,
                  Pv = Math.min(zv.to, lv) - dv;
                zv = vv >= Pv ? null : new tv(vv, Pv, zv.tree, zv.offset + dv, gv > 0, !!Nv)
              }
              if (zv && hv.push(zv), ev.to > lv) break;
              ev = Sv < vv.length ? vv[Sv++] : null
            }
          if (!Nv) break;
          pv = Nv.toA, dv = Nv.toA - Nv.toB
        }
        return hv
      }
    }
    class qv {
      startParse(vv, zv, Pv) {
        return "string" == typeof vv && (vv = new Iv(vv)), Pv = Pv ? Pv.length ? Pv.map((vv => new ev(vv.from, vv.to))) : [new ev(0, 0)] : [new ev(0, vv.length)], this.createParse(vv, zv || [], Pv)
      }
      parse(vv, zv, Pv) {
        let hv = this.startParse(vv, zv, Pv);
        for (;;) {
          let vv = hv.advance();
          if (vv) return vv
        }
      }
    }
    class Iv {
      constructor(vv) {
        this.string = vv
      }
      get length() {
        return this.string.length
      }
      chunk(vv) {
        return this.string.slice(vv)
      }
      get lineChunks() {
        return !1
      }
      read(vv, zv) {
        return this.string.slice(vv, zv)
      }
    }
    new gv({
      perNode: !0
    })
  },
  40640: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Wv,
      f: () => dv,
      j: () => Tv,
      l: () => Vv
    });
    var hv = Pv(40632);
    let Sv = 0;
    class ev {
      constructor(vv, zv, Pv, hv) {
        this.name = vv, this.set = zv, this.base = Pv, this.modified = hv, this.id = Sv++
      }
      toString() {
        let {
          name: vv
        } = this;
        for (let zv of this.modified) zv.name && (vv = `${zv.name}(${vv})`);
        return vv
      }
      static define(vv, zv) {
        let Pv = "string" == typeof vv ? vv : "?";
        if (vv instanceof ev && (zv = vv), null === zv || void 0 === zv ? void 0 : zv.base) throw new Error("Can not derive from a modified tag");
        let hv = new ev(Pv, [], null, []);
        if (hv.set.push(hv), zv)
          for (let Sv of zv.set) hv.set.push(Sv);
        return hv
      }
      static defineModifier(vv) {
        let zv = new pv(vv);
        return vv => vv.modified.indexOf(zv) > -1 ? vv : pv.get(vv.base || vv, vv.modified.concat(zv).sort(((vv, zv) => vv.id - zv.id)))
      }
    }
    let gv = 0;
    class pv {
      constructor(vv) {
        this.name = vv, this.instances = [], this.id = gv++
      }
      static get(vv, zv) {
        if (!zv.length) return vv;
        let Pv = zv[0].instances.find((Pv => {
          return Pv.base == vv && (hv = zv, Sv = Pv.modified, hv.length == Sv.length && hv.every(((vv, zv) => vv == Sv[zv])));
          var hv, Sv
        }));
        if (Pv) return Pv;
        let hv = [],
          Sv = new ev(vv.name, hv, vv, zv);
        for (let ev of zv) ev.instances.push(Sv);
        let gv = function(vv) {
          let zv = [
            []
          ];
          for (let Pv = 0; Pv < vv.length; Pv++)
            for (let hv = 0, Sv = zv.length; hv < Sv; hv++) zv.push(zv[hv].concat(vv[Pv]));
          return zv.sort(((vv, zv) => zv.length - vv.length))
        }(zv);
        for (let ev of vv.set)
          if (!ev.modified.length)
            for (let vv of gv) hv.push(pv.get(ev, vv));
        return Sv
      }
    }

    function dv(vv) {
      let zv = Object.create(null);
      for (let Pv in vv) {
        let hv = vv[Pv];
        Array.isArray(hv) || (hv = [hv]);
        for (let vv of Pv.split(" "))
          if (vv) {
            let Pv = [],
              Sv = 2,
              ev = vv;
            for (let zv = 0;;) {
              if ("..." == ev && zv > 0 && zv + 3 == vv.length) {
                Sv = 1;
                break
              }
              let hv = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(ev);
              if (!hv) throw new RangeError("Invalid path: " + vv);
              if (Pv.push("*" == hv[0] ? "" : '"' == hv[0][0] ? JSON.parse(hv[0]) : hv[0]), zv += hv[0].length, zv == vv.length) break;
              let gv = vv[zv++];
              if (zv == vv.length && "!" == gv) {
                Sv = 0;
                break
              }
              if ("/" != gv) throw new RangeError("Invalid path: " + vv);
              ev = vv.slice(zv)
            }
            let gv = Pv.length - 1,
              pv = Pv[gv];
            if (!pv) throw new RangeError("Invalid path: " + vv);
            let dv = new lv(hv, Sv, gv > 0 ? Pv.slice(0, gv) : null);
            zv[pv] = dv.sort(zv[pv])
          }
      }
      return Nv.add(zv)
    }
    const Nv = new hv.l({
      combine(vv, zv) {
        let Pv, hv, Sv;
        for (; vv || zv;) {
          if (!vv || zv && vv.depth >= zv.depth ? (Sv = zv, zv = zv.next) : (Sv = vv, vv = vv.next), Pv && Pv.mode == Sv.mode && !Sv.context && !Pv.context) continue;
          let ev = new lv(Sv.tags, Sv.mode, Sv.context);
          Pv ? Pv.next = ev : hv = ev, Pv = ev
        }
        return hv
      }
    });
    class lv {
      constructor(vv, zv, Pv, hv) {
        this.tags = vv, this.mode = zv, this.context = Pv, this.next = hv
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(vv) {
        return !vv || vv.depth < this.depth ? (this.next = vv, this) : (vv.next = this.sort(vv.next), vv)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function Tv(vv, zv) {
      let Pv = Object.create(null);
      for (let ev of vv)
        if (Array.isArray(ev.tag))
          for (let vv of ev.tag) Pv[vv.id] = ev.class;
        else Pv[ev.tag.id] = ev.class;
      let {
        scope: hv,
        all: Sv = null
      } = zv || {};
      return {
        style: vv => {
          let zv = Sv;
          for (let hv of vv)
            for (let vv of hv.set) {
              let hv = Pv[vv.id];
              if (hv) {
                zv = zv ? zv + " " + hv : hv;
                break
              }
            }
          return zv
        },
        scope: hv
      }
    }

    function Wv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : vv.length,
        ev = new wv(hv, Array.isArray(zv) ? zv : [zv], Pv);
      ev.highlightRange(vv.cursor(), hv, Sv, "", ev.highlighters), ev.flush(Sv)
    }
    lv.empty = new lv([], 2, null);
    class wv {
      constructor(vv, zv, Pv) {
        this.at = vv, this.highlighters = zv, this.span = Pv, this.class = ""
      }
      startSpan(vv, zv) {
        zv != this.class && (this.flush(vv), vv > this.at && (this.at = vv), this.class = zv)
      }
      flush(vv) {
        vv > this.at && this.class && this.span(this.at, vv, this.class)
      }
      highlightRange(vv, zv, Pv, Sv, ev) {
        let {
          type: gv,
          from: pv,
          to: dv
        } = vv;
        if (pv >= Pv || dv <= zv) return;
        gv.isTop && (ev = this.highlighters.filter((vv => !vv.scope || vv.scope(gv))));
        let Tv = Sv,
          Wv = function(vv) {
            let zv = vv.type.prop(Nv);
            for (; zv && zv.context && !vv.matchContext(zv.context);) zv = zv.next;
            return zv || null
          }(vv) || lv.empty,
          wv = function(vv, zv) {
            let Pv = null;
            for (let hv of vv) {
              let vv = hv.style(zv);
              vv && (Pv = Pv ? Pv + " " + vv : vv)
            }
            return Pv
          }(ev, Wv.tags);
        if (wv && (Tv && (Tv += " "), Tv += wv, 1 == Wv.mode && (Sv += (Sv ? " " : "") + wv)), this.startSpan(Math.max(zv, pv), Tv), Wv.opaque) return;
        let av = vv.tree && vv.tree.prop(hv.l.mounted);
        if (av && av.overlay) {
          let hv = vv.node.enter(av.overlay[0].from + pv, 1),
            gv = this.highlighters.filter((vv => !vv.scope || vv.scope(av.tree.type))),
            Nv = vv.firstChild();
          for (let lv = 0, Wv = pv;; lv++) {
            let wv = lv < av.overlay.length ? av.overlay[lv] : null,
              sv = wv ? wv.from + pv : dv,
              Cv = Math.max(zv, Wv),
              iv = Math.min(Pv, sv);
            if (Cv < iv && Nv)
              for (; vv.from < iv && (this.highlightRange(vv, Cv, iv, Sv, ev), this.startSpan(Math.min(iv, vv.to), Tv), !(vv.to >= sv) && vv.nextSibling()););
            if (!wv || sv > Pv) break;
            Wv = wv.to + pv, Wv > zv && (this.highlightRange(hv.cursor(), Math.max(zv, wv.from + pv), Math.min(Pv, Wv), "", gv), this.startSpan(Math.min(Pv, Wv), Tv))
          }
          Nv && vv.parent()
        } else if (vv.firstChild()) {
          av && (Sv = "");
          do {
            if (!(vv.to <= zv)) {
              if (vv.from >= Pv) break;
              this.highlightRange(vv, zv, Pv, Sv, ev), this.startSpan(Math.min(Pv, vv.to), Tv)
            }
          } while (vv.nextSibling());
          vv.parent()
        }
      }
    }
    const av = ev.define,
      sv = av(),
      Cv = av(),
      iv = av(Cv),
      cv = av(Cv),
      Gv = av(),
      mv = av(Gv),
      jv = av(Gv),
      fv = av(),
      Fv = av(fv),
      Yv = av(),
      nv = av(),
      Ov = av(),
      Dv = av(Ov),
      Kv = av(),
      Vv = {
        comment: sv,
        lineComment: av(sv),
        blockComment: av(sv),
        docComment: av(sv),
        name: Cv,
        variableName: av(Cv),
        typeName: iv,
        tagName: av(iv),
        propertyName: cv,
        attributeName: av(cv),
        className: av(Cv),
        labelName: av(Cv),
        namespace: av(Cv),
        macroName: av(Cv),
        literal: Gv,
        string: mv,
        docString: av(mv),
        character: av(mv),
        attributeValue: av(mv),
        number: jv,
        integer: av(jv),
        float: av(jv),
        bool: av(Gv),
        regexp: av(Gv),
        escape: av(Gv),
        color: av(Gv),
        url: av(Gv),
        keyword: Yv,
        self: av(Yv),
        null: av(Yv),
        atom: av(Yv),
        unit: av(Yv),
        modifier: av(Yv),
        operatorKeyword: av(Yv),
        controlKeyword: av(Yv),
        definitionKeyword: av(Yv),
        moduleKeyword: av(Yv),
        operator: nv,
        derefOperator: av(nv),
        arithmeticOperator: av(nv),
        logicOperator: av(nv),
        bitwiseOperator: av(nv),
        compareOperator: av(nv),
        updateOperator: av(nv),
        definitionOperator: av(nv),
        typeOperator: av(nv),
        controlOperator: av(nv),
        punctuation: Ov,
        separator: av(Ov),
        bracket: Dv,
        angleBracket: av(Dv),
        squareBracket: av(Dv),
        paren: av(Dv),
        brace: av(Dv),
        content: fv,
        heading: Fv,
        heading1: av(Fv),
        heading2: av(Fv),
        heading3: av(Fv),
        heading4: av(Fv),
        heading5: av(Fv),
        heading6: av(Fv),
        contentSeparator: av(fv),
        list: av(fv),
        quote: av(fv),
        emphasis: av(fv),
        strong: av(fv),
        link: av(fv),
        monospace: av(fv),
        strikethrough: av(fv),
        inserted: av(),
        deleted: av(),
        changed: av(),
        invalid: av(),
        meta: Kv,
        documentMeta: av(Kv),
        annotation: av(Kv),
        processingInstruction: av(Kv),
        definition: ev.defineModifier("definition"),
        constant: ev.defineModifier("constant"),
        function: ev.defineModifier("function"),
        standard: ev.defineModifier("standard"),
        local: ev.defineModifier("local"),
        special: ev.defineModifier("special")
      };
    for (let Uv in Vv) {
      let vv = Vv[Uv];
      vv instanceof ev && (vv.name = Uv)
    }
    Tv([{
      tag: Vv.link,
      class: "tok-link"
    }, {
      tag: Vv.heading,
      class: "tok-heading"
    }, {
      tag: Vv.emphasis,
      class: "tok-emphasis"
    }, {
      tag: Vv.strong,
      class: "tok-strong"
    }, {
      tag: Vv.keyword,
      class: "tok-keyword"
    }, {
      tag: Vv.atom,
      class: "tok-atom"
    }, {
      tag: Vv.bool,
      class: "tok-bool"
    }, {
      tag: Vv.url,
      class: "tok-url"
    }, {
      tag: Vv.labelName,
      class: "tok-labelName"
    }, {
      tag: Vv.inserted,
      class: "tok-inserted"
    }, {
      tag: Vv.deleted,
      class: "tok-deleted"
    }, {
      tag: Vv.literal,
      class: "tok-literal"
    }, {
      tag: Vv.string,
      class: "tok-string"
    }, {
      tag: Vv.number,
      class: "tok-number"
    }, {
      tag: [Vv.regexp, Vv.escape, Vv.special(Vv.string)],
      class: "tok-string2"
    }, {
      tag: Vv.variableName,
      class: "tok-variableName"
    }, {
      tag: Vv.local(Vv.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: Vv.definition(Vv.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: Vv.special(Vv.variableName),
      class: "tok-variableName2"
    }, {
      tag: Vv.definition(Vv.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: Vv.typeName,
      class: "tok-typeName"
    }, {
      tag: Vv.namespace,
      class: "tok-namespace"
    }, {
      tag: Vv.className,
      class: "tok-className"
    }, {
      tag: Vv.macroName,
      class: "tok-macroName"
    }, {
      tag: Vv.propertyName,
      class: "tok-propertyName"
    }, {
      tag: Vv.operator,
      class: "tok-operator"
    }, {
      tag: Vv.comment,
      class: "tok-comment"
    }, {
      tag: Vv.meta,
      class: "tok-meta"
    }, {
      tag: Vv.invalid,
      class: "tok-invalid"
    }, {
      tag: Vv.punctuation,
      class: "tok-punctuation"
    }])
  },
  40656: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv.g,
      e: () => gv.u,
      h: () => gv.B,
      i: () => gv.E,
      k: () => pv.j,
      m: () => FP,
      o: () => pv.O,
      p: () => pv.eb
    });
    var hv = Pv(1362),
      Sv = Pv(1354),
      ev = Pv(52),
      gv = Pv(40599),
      pv = Pv(40605),
      dv = Pv(40626),
      Nv = Pv(40632);

    function lv(vv, zv) {
      return Pv => {
        let {
          state: hv,
          dispatch: Sv
        } = Pv;
        if (hv.readOnly) return !1;
        let ev = vv(zv, hv);
        return !!ev && (Sv(hv.update(ev)), !0)
      }
    }
    const Tv = lv(iv, 0),
      Wv = lv(Cv, 0),
      wv = lv(((vv, zv) => Cv(vv, zv, function(vv) {
        let zv = [];
        for (let Pv of vv.selection.PC) {
          let hv = vv.doc.lineAt(Pv.from),
            Sv = Pv.to <= hv.to ? hv : vv.doc.lineAt(Pv.to);
          Sv.from > hv.from && Sv.from == Pv.to && (Sv = Pv.to == hv.to + 1 ? hv : vv.doc.lineAt(Pv.to - 1));
          let ev = zv.length - 1;
          ev >= 0 && zv[ev].to > hv.from ? zv[ev].to = Sv.to : zv.push({
            from: hv.from + /^\s*/.exec(hv.text)[0].length,
            to: Sv.to
          })
        }
        return zv
      }(zv))), 0);

    function av(vv, zv) {
      let Pv = vv.languageDataAt("commentTokens", zv, 1);
      return Pv.length ? Pv[0] : {}
    }
    const sv = 50;

    function Cv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zv.selection.PC,
        hv = Pv.map((vv => av(zv, vv.from).block));
      if (!hv.every((vv => vv))) return null;
      let Sv = Pv.map(((vv, Pv) => function(vv, zv, Pv, hv) {
        let Sv, ev, {
            open: gv,
            close: pv
          } = zv,
          dv = vv.sliceDoc(Pv - sv, Pv),
          Nv = vv.sliceDoc(hv, hv + sv),
          lv = /\s*$/.exec(dv)[0].length,
          Tv = /^\s*/.exec(Nv)[0].length,
          Wv = dv.length - lv;
        if (dv.slice(Wv - gv.length, Wv) == gv && Nv.slice(Tv, Tv + pv.length) == pv) return {
          open: {
            pos: Pv - lv,
            margin: lv && 1
          },
          close: {
            pos: hv + Tv,
            margin: Tv && 1
          }
        };
        hv - Pv <= 2 * sv ? Sv = ev = vv.sliceDoc(Pv, hv) : (Sv = vv.sliceDoc(Pv, Pv + sv), ev = vv.sliceDoc(hv - sv, hv));
        let wv = /^\s*/.exec(Sv)[0].length,
          av = /\s*$/.exec(ev)[0].length,
          Cv = ev.length - av - pv.length;
        return Sv.slice(wv, wv + gv.length) == gv && ev.slice(Cv, Cv + pv.length) == pv ? {
          open: {
            pos: Pv + wv + gv.length,
            margin: /\s/.test(Sv.charAt(wv + gv.length)) ? 1 : 0
          },
          close: {
            pos: hv - av - pv.length,
            margin: /\s/.test(ev.charAt(Cv - 1)) ? 1 : 0
          }
        } : null
      }(zv, hv[Pv], vv.from, vv.to)));
      if (2 != vv && !Sv.every((vv => vv))) return {
        changes: zv.changes(Pv.map(((vv, zv) => Sv[zv] ? [] : [{
          from: vv.from,
          insert: hv[zv].open + " "
        }, {
          from: vv.to,
          insert: " " + hv[zv].close
        }])))
      };
      if (1 != vv && Sv.some((vv => vv))) {
        let vv = [];
        for (let zv, Pv = 0; Pv < Sv.length; Pv++)
          if (zv = Sv[Pv]) {
            let Sv = hv[Pv],
              {
                open: ev,
                close: gv
              } = zv;
            vv.push({
              from: ev.pos - Sv.open.length,
              to: ev.pos + ev.margin
            }, {
              from: gv.pos - gv.margin,
              to: gv.pos + Sv.close.length
            })
          } return {
          changes: vv
        }
      }
      return null
    }

    function iv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zv.selection.PC,
        hv = [],
        Sv = -1;
      vv: for (let {
          from: ev,
          to: gv
        }
        of Pv) {
        let vv, Pv = hv.length,
          pv = 1e9;
        for (let dv = ev; dv <= gv;) {
          let Pv = zv.doc.lineAt(dv);
          if (void 0 == vv && (vv = av(zv, Pv.from).line, !vv)) continue vv;
          if (Pv.from > Sv && (ev == gv || gv > Pv.from)) {
            Sv = Pv.from;
            let zv = /^\s*/.exec(Pv.text)[0].length,
              ev = zv == Pv.length,
              gv = Pv.text.slice(zv, zv + vv.length) == vv ? zv : -1;
            zv < Pv.text.length && zv < pv && (pv = zv), hv.push({
              line: Pv,
              comment: gv,
              token: vv,
              indent: zv,
              empty: ev,
              single: !1
            })
          }
          dv = Pv.to + 1
        }
        if (pv < 1e9)
          for (let zv = Pv; zv < hv.length; zv++) hv[zv].indent < hv[zv].line.text.length && (hv[zv].indent = pv);
        hv.length == Pv + 1 && (hv[Pv].single = !0)
      }
      if (2 != vv && hv.some((vv => vv.comment < 0 && (!vv.empty || vv.single)))) {
        let vv = [];
        for (let {
            line: zv,
            token: Sv,
            indent: ev,
            empty: gv,
            single: pv
          }
          of hv) !pv && gv || vv.push({
          from: zv.from + ev,
          insert: Sv + " "
        });
        let Pv = zv.changes(vv);
        return {
          changes: Pv,
          selection: zv.selection.map(Pv, 1)
        }
      }
      if (1 != vv && hv.some((vv => vv.comment >= 0))) {
        let vv = [];
        for (let {
            line: zv,
            comment: Pv,
            token: Sv
          }
          of hv)
          if (Pv >= 0) {
            let hv = zv.from + Pv,
              ev = hv + Sv.length;
            " " == zv.text[ev - zv.from] && ev++, vv.push({
              from: hv,
              to: ev
            })
          } return {
          changes: vv
        }
      }
      return null
    }
    const cv = gv.c.define(),
      Gv = gv.c.define(),
      mv = gv.q.define(),
      jv = gv.q.define({
        combine: vv => (0, gv.O)(vv, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (vv, zv) => zv
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (vv, zv) => (Pv, hv) => vv(Pv, hv) || zv(Pv, hv)
        })
      }),
      fv = gv.E.define({
        create: () => Av.empty,
        update(vv, zv) {
          let Pv = zv.state.facet(jv),
            hv = zv.annotation(cv);
          if (hv) {
            let Sv = Kv.fromTransaction(zv, hv.selection),
              ev = hv.side,
              gv = 0 == ev ? vv.undone : vv.done;
            return gv = Sv ? Vv(gv, gv.length, Pv.minDepth, Sv) : tv(gv, zv.startState.selection), new Av(0 == ev ? hv.rest : gv, 0 == ev ? gv : hv.rest)
          }
          let Sv = zv.annotation(Gv);
          if ("full" != Sv && "before" != Sv || (vv = vv.isolate()), !1 === zv.annotation(gv.J.addToHistory)) return zv.changes.empty ? vv : vv.addMapping(zv.changes.desc);
          let ev = Kv.fromTransaction(zv),
            pv = zv.annotation(gv.J.time),
            dv = zv.annotation(gv.J.userEvent);
          return ev ? vv = vv.addChanges(ev, pv, dv, Pv, zv) : zv.selection && (vv = vv.addSelection(zv.startState.selection, pv, dv, Pv.newGroupDelay)), "full" != Sv && "after" != Sv || (vv = vv.isolate()), vv
        },
        toJSON: vv => ({
          done: vv.done.map((vv => vv.toJSON())),
          undone: vv.undone.map((vv => vv.toJSON()))
        }),
        fromJSON: vv => new Av(vv.done.map(Kv.fromJSON), vv.undone.map(Kv.fromJSON))
      });

    function Fv(vv, zv) {
      return function(Pv) {
        let {
          state: hv,
          dispatch: Sv
        } = Pv;
        if (!zv && hv.readOnly) return !1;
        let ev = hv.field(fv, !1);
        if (!ev) return !1;
        let gv = ev.pop(vv, hv, zv);
        return !!gv && (Sv(gv), !0)
      }
    }
    const Yv = Fv(0, !1),
      nv = Fv(1, !1),
      Ov = Fv(0, !0),
      Dv = Fv(1, !0);
    class Kv {
      constructor(vv, zv, Pv, hv, Sv) {
        this.changes = vv, this.effects = zv, this.mapped = Pv, this.startSelection = hv, this.selectionsAfter = Sv
      }
      setSelAfter(vv) {
        return new Kv(this.changes, this.effects, this.mapped, this.startSelection, vv)
      }
      toJSON() {
        var vv, zv, Pv;
        return {
          changes: null === (vv = this.changes) || void 0 === vv ? void 0 : vv.toJSON(),
          mapped: null === (zv = this.mapped) || void 0 === zv ? void 0 : zv.toJSON(),
          startSelection: null === (Pv = this.startSelection) || void 0 === Pv ? void 0 : Pv.toJSON(),
          selectionsAfter: this.selectionsAfter.map((vv => vv.toJSON()))
        }
      }
      static fromJSON(vv) {
        return new Kv(vv.changes && gv.ChangeSet.fromJSON(vv.changes), [], vv.mapped && gv.e.fromJSON(vv.mapped), vv.startSelection && gv.j.fromJSON(vv.startSelection), vv.selectionsAfter.map(gv.j.fromJSON))
      }
      static fromTransaction(vv, zv) {
        let Pv = Rv;
        for (let hv of vv.startState.facet(mv)) {
          let zv = hv(vv);
          zv.length && (Pv = Pv.concat(zv))
        }
        return !Pv.length && vv.changes.empty ? null : new Kv(vv.changes.invert(vv.startState.doc), Pv, void 0, zv || vv.startState.selection, Rv)
      }
      static selection(vv) {
        return new Kv(void 0, Rv, void 0, void 0, vv)
      }
    }

    function Vv(vv, zv, Pv, hv) {
      let Sv = zv + 1 > Pv + 20 ? zv - Pv - 1 : 0,
        ev = vv.slice(Sv, zv);
      return ev.push(hv), ev
    }

    function Uv(vv, zv) {
      return vv.length ? zv.length ? vv.concat(zv) : vv : zv
    }
    const Rv = [],
      xv = 200;

    function tv(vv, zv) {
      if (vv.length) {
        let Pv = vv[vv.length - 1],
          hv = Pv.selectionsAfter.slice(Math.max(0, Pv.selectionsAfter.length - xv));
        return hv.length && hv[hv.length - 1].eq(zv) ? vv : (hv.push(zv), Vv(vv, vv.length - 1, 1e9, Pv.setSelAfter(hv)))
      }
      return [Kv.selection([zv])]
    }

    function qv(vv) {
      let zv = vv[vv.length - 1],
        Pv = vv.slice();
      return Pv[vv.length - 1] = zv.setSelAfter(zv.selectionsAfter.slice(0, zv.selectionsAfter.length - 1)), Pv
    }

    function Iv(vv, zv) {
      if (!vv.length) return vv;
      let Pv = vv.length,
        hv = Rv;
      for (; Pv;) {
        let Sv = Qv(vv[Pv - 1], zv, hv);
        if (Sv.changes && !Sv.changes.empty || Sv.effects.length) {
          let zv = vv.slice(0, Pv);
          return zv[Pv - 1] = Sv, zv
        }
        zv = Sv.mapped, Pv--, hv = Sv.selectionsAfter
      }
      return hv.length ? [Kv.selection(hv)] : Rv
    }

    function Qv(vv, zv, Pv) {
      let hv = Uv(vv.selectionsAfter.length ? vv.selectionsAfter.map((vv => vv.map(zv))) : Rv, Pv);
      if (!vv.changes) return Kv.selection(hv);
      let Sv = vv.changes.map(zv),
        ev = zv.mapDesc(vv.changes, !0),
        pv = vv.mapped ? vv.mapped.composeDesc(ev) : ev;
      return new Kv(Sv, gv.B.mapEffects(vv.effects, zv), pv, vv.startSelection.map(ev), hv)
    }
    const Zv = /^(input\.type|delete)($|\.)/;
    class Av {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = vv, this.undone = zv, this.prevTime = Pv, this.prevUserEvent = hv
      }
      isolate() {
        return this.prevTime ? new Av(this.done, this.undone) : this
      }
      addChanges(vv, zv, Pv, hv, Sv) {
        let ev = this.done,
          pv = ev[ev.length - 1];
        return ev = pv && pv.changes && !pv.changes.empty && vv.changes && (!Pv || Zv.test(Pv)) && (!pv.selectionsAfter.length && zv - this.prevTime < hv.newGroupDelay && hv.joinToEvent(Sv, function(vv, zv) {
          let Pv = [],
            hv = !1;
          return vv.iterChangedRanges(((vv, zv) => Pv.push(vv, zv))), zv.iterChangedRanges(((vv, zv, Sv, ev) => {
            for (let gv = 0; gv < Pv.length;) {
              let vv = Pv[gv++],
                zv = Pv[gv++];
              ev >= vv && Sv <= zv && (hv = !0)
            }
          })), hv
        }(pv.changes, vv.changes)) || "input.type.compose" == Pv) ? Vv(ev, ev.length - 1, hv.minDepth, new Kv(vv.changes.compose(pv.changes), Uv(gv.B.mapEffects(vv.effects, pv.changes), pv.effects), pv.mapped, pv.startSelection, Rv)) : Vv(ev, ev.length, hv.minDepth, vv), new Av(ev, Rv, zv, Pv)
      }
      addSelection(vv, zv, Pv, hv) {
        let Sv = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Rv;
        return Sv.length > 0 && zv - this.prevTime < hv && Pv == this.prevUserEvent && Pv && /^select($|\.)/.test(Pv) && (ev = Sv[Sv.length - 1], gv = vv, ev.PC.length == gv.PC.length && 0 === ev.PC.filter(((vv, zv) => vv.empty != gv.PC[zv].empty)).length) ? this : new Av(tv(this.done, vv), this.undone, zv, Pv);
        var ev, gv
      }
      addMapping(vv) {
        return new Av(Iv(this.done, vv), Iv(this.undone, vv), this.prevTime, this.prevUserEvent)
      }
      pop(vv, zv, Pv) {
        let hv = 0 == vv ? this.done : this.undone;
        if (0 == hv.length) return null;
        let Sv = hv[hv.length - 1],
          ev = Sv.selectionsAfter[0] || (Sv.startSelection ? Sv.startSelection.map(Sv.changes.invertedDesc, 1) : zv.selection);
        if (Pv && Sv.selectionsAfter.length) return zv.update({
          selection: Sv.selectionsAfter[Sv.selectionsAfter.length - 1],
          annotations: cv.of({
            side: vv,
            rest: qv(hv),
            selection: ev
          }),
          userEvent: 0 == vv ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Sv.changes) {
          let Pv = 1 == hv.length ? Rv : hv.slice(0, hv.length - 1);
          return Sv.mapped && (Pv = Iv(Pv, Sv.mapped)), zv.update({
            changes: Sv.changes,
            selection: Sv.startSelection,
            effects: Sv.effects,
            annotations: cv.of({
              side: vv,
              rest: Pv,
              selection: ev
            }),
            filter: !1,
            userEvent: 0 == vv ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    Av.empty = new Av(Rv, Rv);
    const Lv = [{
      key: "Mod-z",
      run: Yv,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: nv,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: nv,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Ov,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Dv,
      preventDefault: !0
    }];

    function Hv(vv, zv) {
      return gv.j.create(vv.PC.map(zv), vv.mainIndex)
    }

    function Mv(vv, zv) {
      return vv.update({
        selection: zv,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function yv(vv, zv) {
      let {
        state: Pv,
        dispatch: hv
      } = vv, Sv = Hv(Pv.selection, zv);
      return !Sv.eq(Pv.selection, !0) && (hv(Mv(Pv, Sv)), !0)
    }

    function Bv(vv, zv) {
      return gv.j.cursor(zv ? vv.to : vv.from)
    }

    function Jv(vv, zv) {
      return yv(vv, (Pv => Pv.empty ? vv.moveByChar(Pv, zv) : Bv(Pv, zv)))
    }

    function Ev(vv) {
      return vv.textDirectionAt(vv.state.selection.main.head) == pv.f.LTR
    }
    const ov = vv => Jv(vv, !Ev(vv)),
      bv = vv => Jv(vv, Ev(vv));

    function rv(vv, zv) {
      return yv(vv, (Pv => Pv.empty ? vv.moveByGroup(Pv, zv) : Bv(Pv, zv)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function kv(vv, zv, Pv) {
      if (zv.type.prop(Pv)) return !0;
      let hv = zv.to - zv.from;
      return hv && (hv > 2 || /[^\s,.;:]/.test(vv.sliceDoc(zv.from, zv.to))) || zv.firstChild
    }

    function Xv(vv, zv, Pv) {
      let hv, Sv, ev = (0, dv.tb)(vv).resolveInner(zv.head),
        pv = Pv ? Nv.l.closedBy : Nv.l.openedBy;
      for (let gv = zv.head;;) {
        let zv = Pv ? ev.childAfter(gv) : ev.childBefore(gv);
        if (!zv) break;
        kv(vv, zv, pv) ? ev = zv : gv = Pv ? zv.to : zv.from
      }
      return Sv = ev.type.prop(pv) && (hv = Pv ? (0, dv.eb)(vv, ev.from, 1) : (0, dv.eb)(vv, ev.to, -1)) && hv.matched ? Pv ? hv.end.to : hv.end.from : Pv ? ev.to : ev.from, gv.j.cursor(Sv, Pv ? -1 : 1)
    }

    function uv(vv, zv) {
      return yv(vv, (Pv => {
        if (!Pv.empty) return Bv(Pv, zv);
        let hv = vv.moveVertically(Pv, zv);
        return hv.head != Pv.head ? hv : vv.moveToLineBoundary(Pv, zv)
      }))
    }
    const vz = vv => uv(vv, !1),
      zz = vv => uv(vv, !0);

    function Pz(vv) {
      let zv, Pv = vv.scrollDOM.clientHeight < vv.scrollDOM.scrollHeight - 2,
        hv = 0,
        Sv = 0;
      if (Pv) {
        for (let zv of vv.state.facet(pv.g.scrollMargins)) {
          let Pv = zv(vv);
          (null === Pv || void 0 === Pv ? void 0 : Pv.top) && (hv = Math.max(null === Pv || void 0 === Pv ? void 0 : Pv.top, hv)), (null === Pv || void 0 === Pv ? void 0 : Pv.bottom) && (Sv = Math.max(null === Pv || void 0 === Pv ? void 0 : Pv.bottom, Sv))
        }
        zv = vv.scrollDOM.clientHeight - hv - Sv
      } else zv = (vv.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: hv,
        marginBottom: Sv,
        selfScroll: Pv,
        height: Math.max(vv.defaultLineHeight, zv - 5)
      }
    }

    function hz(vv, zv) {
      let Pv, hv = Pz(vv),
        {
          state: Sv
        } = vv,
        ev = Hv(Sv.selection, (Pv => Pv.empty ? vv.moveVertically(Pv, zv, hv.height) : Bv(Pv, zv)));
      if (ev.eq(Sv.selection)) return !1;
      if (hv.selfScroll) {
        let zv = vv.coordsAtPos(Sv.selection.main.head),
          gv = vv.scrollDOM.getBoundingClientRect(),
          dv = gv.top + hv.marginTop,
          Nv = gv.bottom - hv.marginBottom;
        zv && zv.top > dv && zv.bottom < Nv && (Pv = pv.g.scrollIntoView(ev.main.head, {
          y: "start",
          yMargin: zv.top - dv
        }))
      }
      return vv.dispatch(Mv(Sv, ev), {
        effects: Pv
      }), !0
    }
    const Sz = vv => hz(vv, !1),
      ez = vv => hz(vv, !0);

    function gz(vv, zv, Pv) {
      let hv = vv.lineBlockAt(zv.head),
        Sv = vv.moveToLineBoundary(zv, Pv);
      if (Sv.head == zv.head && Sv.head != (Pv ? hv.to : hv.from) && (Sv = vv.moveToLineBoundary(zv, Pv, !1)), !Pv && Sv.head == hv.from && hv.length) {
        let Pv = /^\s*/.exec(vv.state.sliceDoc(hv.from, Math.min(hv.from + 100, hv.to)))[0].length;
        Pv && zv.head != hv.from + Pv && (Sv = gv.j.cursor(hv.from + Pv))
      }
      return Sv
    }

    function pz(vv, zv, Pv) {
      let hv = !1,
        Sv = Hv(vv.selection, (zv => {
          let Sv = (0, dv.eb)(vv, zv.head, -1) || (0, dv.eb)(vv, zv.head, 1) || zv.head > 0 && (0, dv.eb)(vv, zv.head - 1, 1) || zv.head < vv.doc.length && (0, dv.eb)(vv, zv.head + 1, -1);
          if (!Sv || !Sv.end) return zv;
          hv = !0;
          let ev = Sv.start.from == zv.head ? Sv.end.to : Sv.end.from;
          return Pv ? gv.j.range(zv.anchor, ev) : gv.j.cursor(ev)
        }));
      return !!hv && (zv(Mv(vv, Sv)), !0)
    }

    function dz(vv, zv) {
      let Pv = Hv(vv.state.selection, (vv => {
        let Pv = zv(vv);
        return gv.j.range(vv.anchor, Pv.head, Pv.goalColumn, Pv.bidiLevel || void 0, Pv.assoc)
      }));
      return !Pv.eq(vv.state.selection) && (vv.dispatch(Mv(vv.state, Pv)), !0)
    }

    function Nz(vv, zv) {
      return dz(vv, (Pv => vv.moveByChar(Pv, zv)))
    }
    const lz = vv => Nz(vv, !Ev(vv)),
      Tz = vv => Nz(vv, Ev(vv));

    function Wz(vv, zv) {
      return dz(vv, (Pv => vv.moveByGroup(Pv, zv)))
    }

    function wz(vv, zv) {
      return dz(vv, (Pv => vv.moveVertically(Pv, zv)))
    }
    const az = vv => wz(vv, !1),
      sz = vv => wz(vv, !0);

    function Cz(vv, zv) {
      return dz(vv, (Pv => vv.moveVertically(Pv, zv, Pz(vv).height)))
    }
    const iz = vv => Cz(vv, !1),
      cz = vv => Cz(vv, !0),
      Gz = vv => {
        let {
          state: zv,
          dispatch: Pv
        } = vv;
        return Pv(Mv(zv, {
          anchor: 0
        })), !0
      },
      mz = vv => {
        let {
          state: zv,
          dispatch: Pv
        } = vv;
        return Pv(Mv(zv, {
          anchor: zv.doc.length
        })), !0
      },
      jz = vv => {
        let {
          state: zv,
          dispatch: Pv
        } = vv;
        return Pv(Mv(zv, {
          anchor: zv.selection.main.anchor,
          head: 0
        })), !0
      },
      fz = vv => {
        let {
          state: zv,
          dispatch: Pv
        } = vv;
        return Pv(Mv(zv, {
          anchor: zv.selection.main.anchor,
          head: zv.doc.length
        })), !0
      };

    function Fz(vv, zv) {
      let {
        state: Pv
      } = vv, hv = Pv.selection, Sv = Pv.selection.PC.slice();
      for (let ev of Pv.selection.PC) {
        let hv = Pv.doc.lineAt(ev.head);
        if (zv ? hv.to < vv.state.doc.length : hv.from > 0)
          for (let Pv = ev;;) {
            let ev = vv.moveVertically(Pv, zv);
            if (ev.head < hv.from || ev.head > hv.to) {
              Sv.some((vv => vv.head == ev.head)) || Sv.push(ev);
              break
            }
            if (ev.head == Pv.head) break;
            Pv = ev
          }
      }
      return Sv.length != hv.PC.length && (vv.dispatch(Mv(Pv, gv.j.create(Sv, Sv.length - 1))), !0)
    }

    function Yz(vv, zv) {
      if (vv.state.readOnly) return !1;
      let Pv = "delete.selection",
        {
          state: hv
        } = vv,
        Sv = hv.changeByRange((hv => {
          let {
            from: Sv,
            to: ev
          } = hv;
          if (Sv == ev) {
            let gv = zv(hv);
            gv < Sv ? (Pv = "delete.backward", gv = nz(vv, gv, !1)) : gv > Sv && (Pv = "delete.forward", gv = nz(vv, gv, !0)), Sv = Math.min(Sv, gv), ev = Math.max(ev, gv)
          } else Sv = nz(vv, Sv, !1), ev = nz(vv, ev, !0);
          return Sv == ev ? {
            range: hv
          } : {
            changes: {
              from: Sv,
              to: ev
            },
            range: gv.j.cursor(Sv, Sv < hv.head ? -1 : 1)
          }
        }));
      return !Sv.changes.empty && (vv.dispatch(hv.update(Sv, {
        scrollIntoView: !0,
        userEvent: Pv,
        effects: "delete.selection" == Pv ? pv.g.announce.of(hv.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function nz(vv, zv, Pv) {
      if (vv instanceof pv.g)
        for (let hv of vv.state.facet(pv.g.atomicRanges).map((zv => zv(vv)))) hv.between(zv, zv, ((vv, hv) => {
          vv < zv && hv > zv && (zv = Pv ? hv : vv)
        }));
      return zv
    }
    const Oz = (vv, zv, Pv) => Yz(vv, (hv => {
        let Sv, ev, pv = hv.from,
          {
            state: Nv
          } = vv,
          lv = Nv.doc.lineAt(pv);
        if (Pv && !zv && pv > lv.from && pv < lv.from + 200 && !/[^ \t]/.test(Sv = lv.text.slice(0, pv - lv.from))) {
          if ("\t" == Sv[Sv.length - 1]) return pv - 1;
          let vv = (0, gv.S)(Sv, Nv.tabSize) % (0, dv.N)(Nv) || (0, dv.N)(Nv);
          for (let zv = 0; zv < vv && " " == Sv[Sv.length - 1 - zv]; zv++) pv--;
          ev = pv
        } else ev = (0, gv.W)(lv.text, pv - lv.from, zv, zv) + lv.from, ev == pv && lv.number != (zv ? Nv.doc.lines : 1) ? ev += zv ? 1 : -1 : !zv && /[\ufe00-\ufe0f]/.test(lv.text.slice(ev - lv.from, pv - lv.from)) && (ev = (0, gv.W)(lv.text, ev - lv.from, !1, !1) + lv.from);
        return ev
      })),
      Dz = vv => Oz(vv, !1, !0),
      Kz = vv => Oz(vv, !0, !1),
      Vz = (vv, zv) => Yz(vv, (Pv => {
        let hv = Pv.head,
          {
            state: Sv
          } = vv,
          ev = Sv.doc.lineAt(hv),
          pv = Sv.charCategorizer(hv);
        for (let vv = null;;) {
          if (hv == (zv ? ev.to : ev.from)) {
            hv == Pv.head && ev.number != (zv ? Sv.doc.lines : 1) && (hv += zv ? 1 : -1);
            break
          }
          let dv = (0, gv.W)(ev.text, hv - ev.from, zv) + ev.from,
            Nv = ev.text.slice(Math.min(hv, dv) - ev.from, Math.max(hv, dv) - ev.from),
            lv = pv(Nv);
          if (null != vv && lv != vv) break;
          " " == Nv && hv == Pv.head || (vv = lv), hv = dv
        }
        return hv
      })),
      Uz = vv => Vz(vv, !1);

    function Rz(vv) {
      let zv = [],
        Pv = -1;
      for (let hv of vv.selection.PC) {
        let Sv = vv.doc.lineAt(hv.from),
          ev = vv.doc.lineAt(hv.to);
        if (hv.empty || hv.to != ev.from || (ev = vv.doc.lineAt(hv.to - 1)), Pv >= Sv.number) {
          let vv = zv[zv.length - 1];
          vv.to = ev.to, vv.PC.push(hv)
        } else zv.push({
          from: Sv.from,
          to: ev.to,
          PC: [hv]
        });
        Pv = ev.number + 1
      }
      return zv
    }

    function xz(vv, zv, Pv) {
      if (vv.readOnly) return !1;
      let hv = [],
        Sv = [];
      for (let ev of Rz(vv)) {
        if (Pv ? ev.to == vv.doc.length : 0 == ev.from) continue;
        let zv = vv.doc.lineAt(Pv ? ev.to + 1 : ev.from - 1),
          pv = zv.length + 1;
        if (Pv) {
          hv.push({
            from: ev.to,
            to: zv.to
          }, {
            from: ev.from,
            insert: zv.text + vv.lineBreak
          });
          for (let zv of ev.PC) Sv.push(gv.j.range(Math.min(vv.doc.length, zv.anchor + pv), Math.min(vv.doc.length, zv.head + pv)))
        } else {
          hv.push({
            from: zv.from,
            to: ev.from
          }, {
            from: ev.to,
            insert: vv.lineBreak + zv.text
          });
          for (let vv of ev.PC) Sv.push(gv.j.range(vv.anchor - pv, vv.head - pv))
        }
      }
      return !!hv.length && (zv(vv.update({
        changes: hv,
        scrollIntoView: !0,
        selection: gv.j.create(Sv, vv.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function tz(vv, zv, Pv) {
      if (vv.readOnly) return !1;
      let hv = [];
      for (let ev of Rz(vv)) Pv ? hv.push({
        from: ev.from,
        insert: vv.doc.slice(ev.from, ev.to) + vv.lineBreak
      }) : hv.push({
        from: ev.to,
        insert: vv.lineBreak + vv.doc.slice(ev.from, ev.to)
      });
      let Sv = vv.changes(hv);
      return zv(vv.update({
        changes: Sv,
        selection: vv.selection.map(Sv, Pv ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const qz = Iz(!1);

    function Iz(vv) {
      return zv => {
        let {
          state: Pv,
          dispatch: hv
        } = zv;
        if (Pv.readOnly) return !1;
        let Sv = Pv.changeByRange((zv => {
          let {
            from: hv,
            to: Sv
          } = zv, ev = Pv.doc.lineAt(hv), pv = !vv && hv == Sv && function(vv, zv) {
            if (/\(\)|\[\]|\{\}/.test(vv.sliceDoc(zv - 1, zv + 1))) return {
              from: zv,
              to: zv
            };
            let Pv, hv = (0, dv.tb)(vv).resolveInner(zv),
              Sv = hv.childBefore(zv),
              ev = hv.childAfter(zv);
            return Sv && ev && Sv.to <= zv && ev.from >= zv && (Pv = Sv.type.prop(Nv.l.closedBy)) && Pv.indexOf(ev.name) > -1 && vv.doc.lineAt(Sv.to).from == vv.doc.lineAt(ev.from).from && !/\S/.test(vv.sliceDoc(Sv.to, ev.from)) ? {
              from: Sv.to,
              to: ev.from
            } : null
          }(Pv, hv);
          vv && (hv = Sv = (Sv <= ev.to ? ev : Pv.doc.lineAt(Sv)).to);
          let lv = new dv.g(Pv, {
              simulateBreak: hv,
              simulateDoubleBreak: !!pv
            }),
            Tv = (0, dv.R)(lv, hv);
          for (null == Tv && (Tv = (0, gv.S)(/^\s*/.exec(Pv.doc.lineAt(hv).text)[0], Pv.tabSize)); Sv < ev.to && /\s/.test(ev.text[Sv - ev.from]);) Sv++;
          pv ? ({
            from: hv,
            to: Sv
          } = pv) : hv > ev.from && hv < ev.from + 100 && !/\S/.test(ev.text.slice(0, hv)) && (hv = ev.from);
          let Wv = ["", (0, dv.$)(Pv, Tv)];
          return pv && Wv.push((0, dv.$)(Pv, lv.lineIndent(ev.from, -1))), {
            changes: {
              from: hv,
              to: Sv,
              insert: gv.H.of(Wv)
            },
            range: gv.j.cursor(hv + 1 + Wv[1].length)
          }
        }));
        return hv(Pv.update(Sv, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function Qz(vv, zv) {
      let Pv = -1;
      return vv.changeByRange((hv => {
        let Sv = [];
        for (let gv = hv.from; gv <= hv.to;) {
          let ev = vv.doc.lineAt(gv);
          ev.number > Pv && (hv.empty || hv.to > ev.from) && (zv(ev, Sv, hv), Pv = ev.number), gv = ev.to + 1
        }
        let ev = vv.changes(Sv);
        return {
          changes: Sv,
          range: gv.j.range(ev.mapPos(hv.anchor, 1), ev.mapPos(hv.head, 1))
        }
      }))
    }
    const Zz = vv => {
        let {
          state: zv,
          dispatch: Pv
        } = vv;
        return !zv.readOnly && (Pv(zv.update(Qz(zv, ((vv, Pv) => {
          Pv.push({
            from: vv.from,
            insert: zv.facet(dv.cb)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      Az = vv => {
        let {
          state: zv,
          dispatch: Pv
        } = vv;
        return !zv.readOnly && (Pv(zv.update(Qz(zv, ((vv, Pv) => {
          let hv = /^\s*/.exec(vv.text)[0];
          if (!hv) return;
          let Sv = (0, gv.S)(hv, zv.tabSize),
            ev = 0,
            pv = (0, dv.$)(zv, Math.max(0, Sv - (0, dv.N)(zv)));
          for (; ev < hv.length && ev < pv.length && hv.charCodeAt(ev) == pv.charCodeAt(ev);) ev++;
          Pv.push({
            from: vv.from + ev,
            to: vv.from + hv.length,
            insert: pv.slice(ev)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      Lz = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: vv => yv(vv, (zv => Xv(vv.state, zv, !Ev(vv)))),
        shift: vv => dz(vv, (zv => Xv(vv.state, zv, !Ev(vv))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: vv => yv(vv, (zv => Xv(vv.state, zv, Ev(vv)))),
        shift: vv => dz(vv, (zv => Xv(vv.state, zv, Ev(vv))))
      }, {
        key: "Alt-ArrowUp",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv;
          return xz(zv, Pv, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv;
          return tz(zv, Pv, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv;
          return xz(zv, Pv, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv;
          return tz(zv, Pv, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: vv => Fz(vv, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: vv => Fz(vv, !0)
      }, {
        key: "Escape",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv, hv = zv.selection, Sv = null;
          return hv.PC.length > 1 ? Sv = gv.j.create([hv.main]) : hv.main.empty || (Sv = gv.j.create([gv.j.cursor(hv.main.head)])), !!Sv && (Pv(Mv(zv, Sv)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Iz(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv, hv = Rz(zv).map((vv => {
            let {
              from: Pv,
              to: hv
            } = vv;
            return gv.j.range(Pv, Math.min(hv + 1, zv.doc.length))
          }));
          return Pv(zv.update({
            selection: gv.j.create(hv),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv, hv = Hv(zv.selection, (vv => {
            let Pv = (0, dv.tb)(zv),
              hv = Pv.resolveStack(vv.from, 1);
            if (vv.empty) {
              let zv = Pv.resolveStack(vv.from, -1);
              zv.node.from >= hv.node.from && zv.node.to <= hv.node.to && (hv = zv)
            }
            for (let zv = hv; zv; zv = zv.next) {
              let {
                node: Pv
              } = zv;
              if ((Pv.from < vv.from && Pv.to >= vv.to || Pv.to > vv.to && Pv.from <= vv.from) && zv.next) return gv.j.range(Pv.to, Pv.from)
            }
            return vv
          }));
          return !hv.eq(zv.selection) && (Pv(Mv(zv, hv)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: Az
      }, {
        key: "Mod-]",
        run: Zz
      }, {
        key: "Mod-Alt-\\",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv;
          if (zv.readOnly) return !1;
          let hv = Object.create(null),
            Sv = new dv.g(zv, {
              overrideIndentation: vv => {
                let zv = hv[vv];
                return null == zv ? -1 : zv
              }
            }),
            ev = Qz(zv, ((vv, Pv, ev) => {
              let gv = (0, dv.R)(Sv, vv.from);
              if (null == gv) return;
              /\S/.test(vv.text) || (gv = 0);
              let pv = /^\s*/.exec(vv.text)[0],
                Nv = (0, dv.$)(zv, gv);
              (pv != Nv || ev.from < vv.from + pv.length) && (hv[vv.from] = gv, Pv.push({
                from: vv.from,
                to: vv.from + pv.length,
                insert: Nv
              }))
            }));
          return ev.changes.empty || Pv(zv.update(ev, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: vv => {
          if (vv.state.readOnly) return !1;
          let {
            state: zv
          } = vv, Pv = zv.changes(Rz(zv).map((vv => {
            let {
              from: Pv,
              to: hv
            } = vv;
            return Pv > 0 ? Pv-- : hv < zv.doc.length && hv++, {
              from: Pv,
              to: hv
            }
          }))), hv = Hv(zv.selection, (zv => {
            let Pv;
            if (vv.lineWrapping) {
              let hv = vv.lineBlockAt(zv.head),
                Sv = vv.coordsAtPos(zv.head, zv.assoc || 1);
              Sv && (Pv = hv.bottom + vv.documentTop - Sv.bottom + vv.defaultLineHeight / 2)
            }
            return vv.moveVertically(zv, !0, Pv)
          })).map(Pv);
          return vv.dispatch({
            changes: Pv,
            selection: hv,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv;
          return pz(zv, Pv, !1)
        }
      }, {
        key: "Mod-/",
        run: vv => {
          let {
            state: zv
          } = vv, Pv = zv.doc.lineAt(zv.selection.main.from), hv = av(vv.state, Pv.from);
          return hv.line ? Tv(vv) : !!hv.block && wv(vv)
        }
      }, {
        key: "Alt-A",
        run: Wv
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: vv => (vv.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: ov,
        shift: lz,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: vv => rv(vv, !Ev(vv)),
        shift: vv => Wz(vv, !Ev(vv)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: vv => yv(vv, (zv => gz(vv, zv, !Ev(vv)))),
        shift: vv => dz(vv, (zv => gz(vv, zv, !Ev(vv)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: bv,
        shift: Tz,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: vv => rv(vv, Ev(vv)),
        shift: vv => Wz(vv, Ev(vv)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: vv => yv(vv, (zv => gz(vv, zv, Ev(vv)))),
        shift: vv => dz(vv, (zv => gz(vv, zv, Ev(vv)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: vz,
        shift: az,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Gz,
        shift: jz
      }, {
        mac: "Ctrl-ArrowUp",
        run: Sz,
        shift: iz
      }, {
        key: "ArrowDown",
        run: zz,
        shift: sz,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: mz,
        shift: fz
      }, {
        mac: "Ctrl-ArrowDown",
        run: ez,
        shift: cz
      }, {
        key: "PageUp",
        run: Sz,
        shift: iz
      }, {
        key: "PageDown",
        run: ez,
        shift: cz
      }, {
        key: "Home",
        run: vv => yv(vv, (zv => gz(vv, zv, !1))),
        shift: vv => dz(vv, (zv => gz(vv, zv, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Gz,
        shift: jz
      }, {
        key: "End",
        run: vv => yv(vv, (zv => gz(vv, zv, !0))),
        shift: vv => dz(vv, (zv => gz(vv, zv, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: mz,
        shift: fz
      }, {
        key: "Enter",
        run: qz,
        shift: qz
      }, {
        key: "Mod-a",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv;
          return Pv(zv.update({
            selection: {
              anchor: 0,
              head: zv.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Dz,
        shift: Dz,
        preventDefault: !0
      }, {
        key: "Delete",
        run: Kz,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Uz,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: vv => Vz(vv, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: vv => Yz(vv, (zv => {
          let Pv = vv.moveToLineBoundary(zv, !1).head;
          return zv.head > Pv ? Pv : Math.max(0, zv.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: vv => Yz(vv, (zv => {
          let Pv = vv.moveToLineBoundary(zv, !0).head;
          return zv.head < Pv ? Pv : Math.min(vv.state.doc.length, zv.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: ov,
        shift: lz,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: bv,
        shift: Tz
      }, {
        key: "Ctrl-p",
        run: vz,
        shift: az
      }, {
        key: "Ctrl-n",
        run: zz,
        shift: sz
      }, {
        key: "Ctrl-a",
        run: vv => yv(vv, (zv => gv.j.cursor(vv.lineBlockAt(zv.head).from, 1))),
        shift: vv => dz(vv, (zv => gv.j.cursor(vv.lineBlockAt(zv.head).from)))
      }, {
        key: "Ctrl-e",
        run: vv => yv(vv, (zv => gv.j.cursor(vv.lineBlockAt(zv.head).to, -1))),
        shift: vv => dz(vv, (zv => gv.j.cursor(vv.lineBlockAt(zv.head).to)))
      }, {
        key: "Ctrl-d",
        run: Kz
      }, {
        key: "Ctrl-h",
        run: Dz
      }, {
        key: "Ctrl-k",
        run: vv => Yz(vv, (zv => {
          let Pv = vv.lineBlockAt(zv.head).to;
          return zv.head < Pv ? Pv : Math.min(vv.state.doc.length, zv.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: Uz
      }, {
        key: "Ctrl-o",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv;
          if (zv.readOnly) return !1;
          let hv = zv.changeByRange((vv => ({
            changes: {
              from: vv.from,
              to: vv.to,
              insert: gv.H.of(["", ""])
            },
            range: gv.j.cursor(vv.from)
          })));
          return Pv(zv.update(hv, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: vv => {
          let {
            state: zv,
            dispatch: Pv
          } = vv;
          if (zv.readOnly) return !1;
          let hv = zv.changeByRange((vv => {
            if (!vv.empty || 0 == vv.from || vv.from == zv.doc.length) return {
              range: vv
            };
            let Pv = vv.from,
              hv = zv.doc.lineAt(Pv),
              Sv = Pv == hv.from ? Pv - 1 : (0, gv.W)(hv.text, Pv - hv.from, !1) + hv.from,
              ev = Pv == hv.to ? Pv + 1 : (0, gv.W)(hv.text, Pv - hv.from, !0) + hv.from;
            return {
              changes: {
                from: Sv,
                to: ev,
                insert: zv.doc.slice(Pv, ev).append(zv.doc.slice(Sv, Pv))
              },
              range: gv.j.cursor(ev)
            }
          }));
          return !hv.changes.empty && (Pv(zv.update(hv, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: ez
      }].map((vv => ({
        mac: vv.key,
        run: vv.run,
        shift: vv.shift
      }))))),
      Hz = {
        key: "Tab",
        run: Zz,
        shift: Az
      };
    var Mz = Pv(40660),
      yz = Pv(40593),
      Bz = Pv(40666),
      Jz = function(vv) {
        void 0 === vv && (vv = {});
        var {
          crosshairCursor: zv = !1
        } = vv, Pv = [];
        !1 !== vv.closeBracketsKeymap && (Pv = Pv.concat(yz.d)), !1 !== vv.defaultKeymap && (Pv = Pv.concat(Lz)), !1 !== vv.searchKeymap && (Pv = Pv.concat(Mz.g)), !1 !== vv.historyKeymap && (Pv = Pv.concat(Lv)), !1 !== vv.foldKeymap && (Pv = Pv.concat(dv.H)), !1 !== vv.completionKeymap && (Pv = Pv.concat(yz.l)), !1 !== vv.lintKeymap && (Pv = Pv.concat(Bz.b));
        var hv = [];
        return !1 !== vv.lineNumbers && hv.push((0, pv.Q)()), !1 !== vv.highlightActiveLineGutter && hv.push((0, pv.I)()), !1 !== vv.highlightSpecialChars && hv.push((0, pv.M)()), !1 !== vv.history && hv.push(function() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [fv, jv.of(vv), pv.g.domEventHandlers({
            beforeinput(vv, zv) {
              let Pv = "historyUndo" == vv.inputType ? Yv : "historyRedo" == vv.inputType ? nv : null;
              return !!Pv && (vv.preventDefault(), Pv(zv))
            }
          })]
        }()), !1 !== vv.foldGutter && hv.push((0, dv.A)()), !1 !== vv.drawSelection && hv.push((0, pv.r)()), !1 !== vv.dropCursor && hv.push((0, pv.v)()), !1 !== vv.allowMultipleSelections && hv.push(gv.n.allowMultipleSelections.of(!0)), !1 !== vv.indentOnInput && hv.push((0, dv.X)()), !1 !== vv.syntaxHighlighting && hv.push((0, dv.mb)(dv.p, {
          fallback: !0
        })), !1 !== vv.bracketMatching && hv.push((0, dv.n)()), !1 !== vv.closeBrackets && hv.push((0, yz.g)()), !1 !== vv.autocompletion && hv.push((0, yz.c)()), !1 !== vv.rectangularSelection && hv.push((0, pv.X)()), !1 !== zv && hv.push((0, pv.p)()), !1 !== vv.highlightActiveLine && hv.push((0, pv.L)()), !1 !== vv.highlightSelectionMatches && hv.push((0, Mz.f)()), vv.tabSize && "number" === typeof vv.tabSize && hv.push(dv.cb.of(" ".repeat(vv.tabSize))), hv.concat([pv.P.of(Pv.flat())]).filter(Boolean)
      },
      Ez = Pv(40640);
    const oz = "#e5c07b",
      bz = "#e06c75",
      rz = "#56b6c2",
      kz = "#ffffff",
      Xz = "#abb2bf",
      uz = "#7d8799",
      vP = "#61afef",
      zP = "#98c379",
      PP = "#d19a66",
      hP = "#c678dd",
      SP = "#21252b",
      eP = "#2c313a",
      gP = "#282c34",
      pP = "#353a42",
      dP = "#3E4451",
      NP = "#528bff",
      lP = pv.g.theme({
        "&": {
          color: Xz,
          backgroundColor: gP
        },
        ".cm-content": {
          caretColor: NP
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: NP
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: dP
        },
        ".cm-panels": {
          backgroundColor: SP,
          color: Xz
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
          backgroundColor: gP,
          color: uz,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: eP
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: pP
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: pP,
          borderBottomColor: pP
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: eP,
            color: Xz
          }
        }
      }, {
        dark: !0
      }),
      TP = dv.d.define([{
        tag: Ez.l.keyword,
        color: hP
      }, {
        tag: [Ez.l.name, Ez.l.deleted, Ez.l.character, Ez.l.propertyName, Ez.l.macroName],
        color: bz
      }, {
        tag: [Ez.l.function(Ez.l.variableName), Ez.l.labelName],
        color: vP
      }, {
        tag: [Ez.l.color, Ez.l.constant(Ez.l.name), Ez.l.standard(Ez.l.name)],
        color: PP
      }, {
        tag: [Ez.l.definition(Ez.l.name), Ez.l.separator],
        color: Xz
      }, {
        tag: [Ez.l.typeName, Ez.l.className, Ez.l.number, Ez.l.changed, Ez.l.annotation, Ez.l.modifier, Ez.l.self, Ez.l.namespace],
        color: oz
      }, {
        tag: [Ez.l.operator, Ez.l.operatorKeyword, Ez.l.url, Ez.l.escape, Ez.l.regexp, Ez.l.link, Ez.l.special(Ez.l.string)],
        color: rz
      }, {
        tag: [Ez.l.meta, Ez.l.comment],
        color: uz
      }, {
        tag: Ez.l.strong,
        fontWeight: "bold"
      }, {
        tag: Ez.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: Ez.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Ez.l.link,
        color: uz,
        textDecoration: "underline"
      }, {
        tag: Ez.l.heading,
        fontWeight: "bold",
        color: bz
      }, {
        tag: [Ez.l.atom, Ez.l.bool, Ez.l.special(Ez.l.variableName)],
        color: PP
      }, {
        tag: [Ez.l.processingInstruction, Ez.l.string, Ez.l.inserted],
        color: zP
      }, {
        tag: Ez.l.invalid,
        color: kz
      }]),
      WP = [lP, (0, dv.mb)(TP)];
    var wP = pv.g.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class aP {
      constructor(vv, zv) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = zv, this.timeoutMS = zv, this.callbacks.push(vv)
      }
      MT() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var vv = this.callbacks.slice();
          this.callbacks.length = 0, vv.forEach((vv => {
            try {
              vv()
            } catch (zv) {
              console.error("TimeoutLatch callback error:", zv)
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
    class sP {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(vv) {
        this.latches.add(vv), this.start()
      }
      remove(vv) {
        this.latches.delete(vv), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((vv => {
            vv.MT(), vv.isDone && this.remove(vv)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var CP = null,
      iP = gv.c.define(),
      cP = [];

    function GP(vv) {
      var {
        value: zv,
        selection: Pv,
        onChange: hv,
        onStatistics: Sv,
        onCreateEditor: dv,
        onUpdate: Nv,
        extensions: lv = cP,
        autoFocus: Tv,
        theme: Wv = "light",
        height: wv = null,
        minHeight: av = null,
        maxHeight: sv = null,
        width: Cv = null,
        minWidth: iv = null,
        maxWidth: cv = null,
        placeholder: Gv = "",
        editable: mv = !0,
        readOnly: jv = !1,
        indentWithTab: fv = !0,
        basicSetup: Fv = !0,
        root: Yv,
        initialState: nv
      } = vv, [Ov, Dv] = (0, ev.useState)(), [Kv, Vv] = (0, ev.useState)(), [Uv, Rv] = (0, ev.useState)(), xv = (0, ev.useState)((() => ({
        current: null
      })))[0], tv = (0, ev.useState)((() => ({
        current: null
      })))[0], qv = pv.g.theme({
        "&": {
          height: wv,
          minHeight: av,
          maxHeight: sv,
          width: Cv,
          minWidth: iv,
          maxWidth: cv
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Iv = pv.g.updateListener.of((vv => {
        if (vv.docChanged && "function" === typeof hv && !vv.transactions.some((vv => vv.annotation(iP)))) {
          xv.current ? xv.current.reset() : (xv.current = new aP((() => {
            if (tv.current) {
              var vv = tv.current;
              tv.current = null, vv()
            }
            xv.current = null
          }), 200), ("undefined" === typeof window ? new sP : (CP || (CP = new sP), CP)).add(xv.current));
          var zv = vv.state.doc.toString();
          hv(zv, vv)
        }
        Sv && Sv((vv => ({
          line: vv.state.doc.lineAt(vv.state.selection.main.from),
          lineCount: vv.state.doc.lines,
          lineBreak: vv.state.lineBreak,
          length: vv.state.doc.length,
          readOnly: vv.state.readOnly,
          tabSize: vv.state.tabSize,
          selection: vv.state.selection,
          selectionAsSingle: vv.state.selection.asSingle().main,
          PC: vv.state.selection.PC,
          selectionCode: vv.state.sliceDoc(vv.state.selection.main.from, vv.state.selection.main.to),
          selections: vv.state.selection.PC.map((zv => vv.state.sliceDoc(zv.from, zv.to))),
          selectedText: vv.state.selection.PC.some((vv => !vv.empty))
        }))(vv))
      })), Qv = function(vv) {
        void 0 === vv && (vv = {});
        var {
          indentWithTab: zv = !0,
          editable: Pv = !0,
          readOnly: hv = !1,
          theme: Sv = "light",
          placeholder: ev = "",
          basicSetup: dv = !0
        } = vv, Nv = [];
        switch (zv && Nv.unshift(pv.P.of([Hz])), dv && ("boolean" === typeof dv ? Nv.unshift(Jz()) : Nv.unshift(Jz(dv))), ev && Nv.unshift((0, pv.W)(ev)), Sv) {
          case "light":
            Nv.push(wP);
            break;
          case "dark":
            Nv.push(WP);
            break;
          case "none":
            break;
          default:
            Nv.push(Sv)
        }
        return !1 === Pv && Nv.push(pv.g.editable.of(!1)), hv && Nv.push(gv.n.readOnly.of(!0)), [...Nv]
      }({
        theme: Wv,
        editable: mv,
        readOnly: jv,
        placeholder: Gv,
        indentWithTab: fv,
        basicSetup: Fv
      }), Zv = [Iv, qv, ...Qv];
      return Nv && "function" === typeof Nv && Zv.push(pv.g.updateListener.of(Nv)), Zv = Zv.concat(lv), (0, ev.useLayoutEffect)((() => {
        if (Ov && !Uv) {
          var vv = {
              doc: zv,
              selection: Pv,
              extensions: Zv
            },
            hv = nv ? gv.n.fromJSON(nv.json, vv, nv.fields) : gv.n.create(vv);
          if (Rv(hv), !Kv) {
            var Sv = new pv.g({
              state: hv,
              parent: Ov,
              root: Yv
            });
            Vv(Sv), dv && dv(Sv, hv)
          }
        }
        return () => {
          Kv && (Rv(void 0), Vv(void 0))
        }
      }), [Ov, Uv]), (0, ev.useEffect)((() => {
        vv.container && Dv(vv.container)
      }), [vv.container]), (0, ev.useEffect)((() => () => {
        Kv && (Kv.destroy(), Vv(void 0)), xv.current && (xv.current.cancel(), xv.current = null)
      }), [Kv]), (0, ev.useEffect)((() => {
        Tv && Kv && Kv.focus()
      }), [Tv, Kv]), (0, ev.useEffect)((() => {
        Kv && Kv.dispatch({
          effects: gv.B.reconfigure.of(Zv)
        })
      }), [Wv, lv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, hv, Nv]), (0, ev.useEffect)((() => {
        if (void 0 !== zv) {
          var vv = Kv ? Kv.state.doc.toString() : "";
          if (Kv && zv !== vv) {
            var Pv = () => {
              Kv && zv !== Kv.state.doc.toString() && Kv.dispatch({
                changes: {
                  from: 0,
                  to: Kv.state.doc.toString().length,
                  insert: zv || ""
                },
                annotations: [iP.of(!0)]
              })
            };
            xv.current && !xv.current.isDone ? tv.current = Pv : Pv()
          }
        }
      }), [zv, Kv]), {
        state: Uv,
        setState: Rv,
        view: Kv,
        setView: Vv,
        container: Ov,
        setContainer: Dv
      }
    }
    var mP = Pv(1082),
      jP = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      fP = (0, ev.forwardRef)(((vv, zv) => {
        var {
          className: Pv,
          value: gv = "",
          selection: pv,
          extensions: dv = [],
          onChange: Nv,
          onStatistics: lv,
          onCreateEditor: Tv,
          onUpdate: Wv,
          autoFocus: wv,
          theme: av = "light",
          height: sv,
          minHeight: Cv,
          maxHeight: iv,
          width: cv,
          minWidth: Gv,
          maxWidth: mv,
          basicSetup: jv,
          placeholder: fv,
          indentWithTab: Fv,
          editable: Yv,
          readOnly: nv,
          root: Ov,
          initialState: Dv
        } = vv, Kv = (0, Sv.c)(vv, jP), Vv = (0, ev.useRef)(null), {
          state: Uv,
          view: Rv,
          container: xv,
          setContainer: tv
        } = GP({
          root: Ov,
          value: gv,
          autoFocus: wv,
          theme: av,
          height: sv,
          minHeight: Cv,
          maxHeight: iv,
          width: cv,
          minWidth: Gv,
          maxWidth: mv,
          basicSetup: jv,
          placeholder: fv,
          indentWithTab: Fv,
          editable: Yv,
          readOnly: nv,
          selection: pv,
          onChange: Nv,
          onStatistics: lv,
          onCreateEditor: Tv,
          onUpdate: Wv,
          extensions: dv,
          initialState: Dv
        });
        (0, ev.useImperativeHandle)(zv, (() => ({
          editor: Vv.current,
          state: Uv,
          view: Rv
        })), [Vv, xv, Uv, Rv]);
        var qv = (0, ev.useCallback)((vv => {
          Vv.current = vv, tv(vv)
        }), [tv]);
        if ("string" !== typeof gv) throw new Error("value must be typeof string but got " + typeof gv);
        var Iv = "string" === typeof av ? "cm-theme-" + av : "cm-theme";
        return (0, mP.jsx)("div", (0, hv.c)({
          ref: qv,
          className: Iv + (Pv ? " " + Pv : "")
        }, Kv))
      }));
    fP.displayName = "CodeMirror";
    const FP = fP
  },
  40618: (vv, zv, Pv) => {
    function hv() {
      var vv = arguments[0];
      "string" == typeof vv && (vv = document.createElement(vv));
      var zv = 1,
        Pv = arguments[1];
      if (Pv && "object" == typeof Pv && null == Pv.nodeType && !Array.isArray(Pv)) {
        for (var hv in Pv)
          if (Object.prototype.hasOwnProperty.call(Pv, hv)) {
            var ev = Pv[hv];
            "string" == typeof ev ? vv.setAttribute(hv, ev) : null != ev && (vv[hv] = ev)
          } zv++
      }
      for (; zv < arguments.length; zv++) Sv(vv, arguments[zv]);
      return vv
    }

    function Sv(vv, zv) {
      if ("string" == typeof zv) vv.appendChild(document.createTextNode(zv));
      else if (null == zv);
      else if (null != zv.nodeType) vv.appendChild(zv);
      else {
        if (!Array.isArray(zv)) throw new RangeError("Unsupported child node: " + zv);
        for (var Pv = 0; Pv < zv.length; Pv++) Sv(vv, zv[Pv])
      }
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  40612: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    const hv = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Sv = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      ev = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class gv {
      constructor(vv, zv) {
        this.rules = [];
        let {
          finish: Pv
        } = zv || {};

        function hv(vv) {
          return /^@/.test(vv) ? [vv] : vv.split(/,\s*/)
        }

        function Sv(vv, zv, ev, gv) {
          let pv = [],
            dv = /^@(\w+)\b/.exec(vv[0]),
            Nv = dv && "keyframes" == dv[1];
          if (dv && null == zv) return ev.push(vv[0] + ";");
          for (let Pv in zv) {
            let gv = zv[Pv];
            if (/&/.test(Pv)) Sv(Pv.split(/,\s*/).map((zv => vv.map((vv => zv.replace(/&/, vv))))).reduce(((vv, zv) => vv.concat(zv))), gv, ev);
            else if (gv && "object" == typeof gv) {
              if (!dv) throw new RangeError("The value of a property (" + Pv + ") should be a primitive value.");
              Sv(hv(Pv), gv, pv, Nv)
            } else null != gv && pv.push(Pv.replace(/_.*/, "").replace(/[A-Z]/g, (vv => "-" + vv.toLowerCase())) + ": " + gv + ";")
          }(pv.length || Nv) && ev.push((!Pv || dv || gv ? vv : vv.map(Pv)).join(", ") + " {" + pv.join(" ") + "}")
        }
        for (let ev in vv) Sv(hv(ev), vv[ev], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let vv = ev[hv] || 1;
        return ev[hv] = vv + 1, "\u037c" + vv.toString(36)
      }
      static mount(vv, zv, Pv) {
        let hv = vv[Sv],
          ev = Pv && Pv.nonce;
        hv ? ev && hv.setNonce(ev) : hv = new dv(vv, ev), hv.mount(Array.isArray(zv) ? zv : [zv], vv)
      }
    }
    let pv = new Map;
    class dv {
      constructor(vv, zv) {
        let Pv = vv.ownerDocument || vv,
          hv = Pv.defaultView;
        if (!vv.head && vv.adoptedStyleSheets && hv.CSSStyleSheet) {
          let zv = pv.get(Pv);
          if (zv) return vv[Sv] = zv;
          this.sheet = new hv.CSSStyleSheet, pv.set(Pv, this)
        } else this.styleTag = Pv.createElement("style"), zv && this.styleTag.setAttribute("nonce", zv);
        this.modules = [], vv[Sv] = this
      }
      mount(vv, zv) {
        let Pv = this.sheet,
          hv = 0,
          Sv = 0;
        for (let ev = 0; ev < vv.length; ev++) {
          let zv = vv[ev],
            gv = this.modules.indexOf(zv);
          if (gv < Sv && gv > -1 && (this.modules.splice(gv, 1), Sv--, gv = -1), -1 == gv) {
            if (this.modules.splice(Sv++, 0, zv), Pv)
              for (let vv = 0; vv < zv.rules.length; vv++) Pv.insertRule(zv.rules[vv], hv++)
          } else {
            for (; Sv < gv;) hv += this.modules[Sv++].rules.length;
            hv += zv.rules.length, Sv++
          }
        }
        if (Pv) zv.adoptedStyleSheets.indexOf(this.sheet) < 0 && (zv.adoptedStyleSheets = [this.sheet, ...zv.adoptedStyleSheets]);
        else {
          let vv = "";
          for (let zv = 0; zv < this.modules.length; zv++) vv += this.modules[zv].getRules() + "\n";
          this.styleTag.textContent = vv;
          let Pv = zv.head || zv;
          this.styleTag.parentNode != Pv && Pv.insertBefore(this.styleTag, Pv.firstChild)
        }
      }
      setNonce(vv) {
        this.styleTag && this.styleTag.getAttribute("nonce") != vv && this.styleTag.setAttribute("nonce", vv)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);