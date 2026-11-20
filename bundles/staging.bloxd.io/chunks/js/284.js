export const id = 284;
export const ids = [284];
export const modules = {
  40422: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => jt,
      d: () => Jt,
      e: () => Bt,
      h: () => vz,
      j: () => At,
      n: () => Uz,
      o: () => Nt
    });
    var Fz = sz(40427),
      Wz = sz(40434),
      Xz = sz(40448);
    class Oz {
      constructor(zz, tz, sz, Fz) {
        this.state = zz, this.pos = tz, this.explicit = sz, this.view = Fz, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(zz) {
        let tz = (0, Xz.mb)(this.state).resolveInner(this.pos, -1);
        for (; tz && zz.indexOf(tz.name) < 0;) tz = tz.parent;
        return tz ? {
          from: tz.from,
          to: this.pos,
          text: this.state.sliceDoc(tz.from, this.pos),
          type: tz.type
        } : null
      }
      matchBefore(zz) {
        let tz = this.state.doc.lineAt(this.pos),
          sz = Math.max(tz.from, this.pos - 250),
          Fz = tz.text.slice(sz - tz.from, this.pos - tz.from),
          Wz = Fz.search(Nz(zz, !1));
        return Wz < 0 ? null : {
          from: sz + Wz,
          to: this.pos,
          text: Fz.slice(Wz)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(zz, tz, sz) {
        "abort" == zz && this.abortListeners && (this.abortListeners.push(tz), sz && sz.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function oz(zz) {
      let tz = Object.keys(zz).join(""),
        sz = /\w/.test(tz);
      return sz && (tz = tz.replace(/\w/g, "")), `[${sz?"\\w":""}${tz.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function vz(zz) {
      let tz = zz.map((zz => "string" == typeof zz ? {
          label: zz
        } : zz)),
        [sz, Fz] = tz.every((zz => /^\w+$/.test(zz.label))) ? [/\w*$/, /\w+$/] : function(zz) {
          let tz = Object.create(null),
            sz = Object.create(null);
          for (let {
              label: Wz
            }
            of zz) {
            tz[Wz[0]] = !0;
            for (let zz = 1; zz < Wz.length; zz++) sz[Wz[zz]] = !0
          }
          let Fz = oz(tz) + oz(sz) + "*$";
          return [new RegExp("^" + Fz), new RegExp(Fz)]
        }(tz);
      return zz => {
        let Wz = zz.matchBefore(Fz);
        return Wz || zz.explicit ? {
          from: Wz ? Wz.from : zz.pos,
          options: tz,
          validFor: sz
        } : null
      }
    }

    function Uz(zz, tz) {
      return sz => {
        for (let tz = (0, Xz.mb)(sz.state).resolveInner(sz.pos, -1); tz; tz = tz.parent) {
          if (zz.indexOf(tz.name) > -1) return null;
          if (tz.type.isTop) break
        }
        return tz(sz)
      }
    }
    class Kz {
      constructor(zz, tz, sz, Fz) {
        this.completion = zz, this.source = tz, this.match = sz, this.score = Fz
      }
    }

    function uz(zz) {
      return zz.selection.main.from
    }

    function Nz(zz, tz) {
      var sz;
      let {
        source: Fz
      } = zz, Wz = tz && "^" != Fz[0], Xz = "$" != Fz[Fz.length - 1];
      return Wz || Xz ? new RegExp(`${Wz?"^":""}(?:${Fz})${Xz?"$":""}`, null !== (sz = zz.flags) && void 0 !== sz ? sz : zz.ignoreCase ? "i" : "") : zz
    }
    const bz = Fz.e.define();

    function wz(zz, tz, sz, Wz) {
      let {
        main: Xz
      } = zz.selection, Oz = sz - Xz.from, oz = Wz - Xz.from;
      return {
        ...zz.changeByRange((vz => {
          if (vz != Xz && sz != Wz && zz.sliceDoc(vz.from + Oz, vz.from + oz) != zz.sliceDoc(sz, Wz)) return {
            range: vz
          };
          let Uz = zz.toText(tz);
          return {
            changes: {
              from: vz.from + Oz,
              to: Wz == Xz.from ? vz.to : vz.from + oz,
              insert: Uz
            },
            range: Fz.l.cursor(vz.from + Oz + Uz.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Dz = new WeakMap;

    function gz(zz) {
      if (!Array.isArray(zz)) return zz;
      let tz = Dz.get(zz);
      return tz || Dz.set(zz, tz = vz(zz)), tz
    }
    const Hz = Fz.F.define(),
      Bz = Fz.F.define();
    class Pz {
      constructor(zz) {
        this.pattern = zz, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let tz = 0; tz < zz.length;) {
          let sz = (0, Fz.L)(zz, tz),
            Wz = (0, Fz.P)(sz);
          this.chars.push(sz);
          let Xz = zz.slice(tz, tz + Wz),
            Oz = Xz.toUpperCase();
          this.folded.push((0, Fz.L)(Oz == Xz ? Xz.toLowerCase() : Oz, 0)), tz += Wz
        }
        this.astral = zz.length != this.chars.length
      }
      ret(zz, tz) {
        return this.score = zz, this.matched = tz, this
      }
      match(zz) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (zz.length < this.pattern.length) return null;
        let {
          chars: tz,
          folded: sz,
          any: Wz,
          precise: Xz,
          byWord: Oz
        } = this;
        if (1 == tz.length) {
          let Wz = (0, Fz.L)(zz, 0),
            Xz = (0, Fz.P)(Wz),
            Oz = Xz == zz.length ? 0 : -100;
          if (Wz == tz[0]);
          else {
            if (Wz != sz[0]) return null;
            Oz += -200
          }
          return this.ret(Oz, [0, Xz])
        }
        let oz = zz.indexOf(this.pattern);
        if (0 == oz) return this.ret(zz.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let vz = tz.length,
          Uz = 0;
        if (oz < 0) {
          for (let Xz = 0, Oz = Math.min(zz.length, 200); Xz < Oz && Uz < vz;) {
            let Oz = (0, Fz.L)(zz, Xz);
            Oz != tz[Uz] && Oz != sz[Uz] || (Wz[Uz++] = Xz), Xz += (0, Fz.P)(Oz)
          }
          if (Uz < vz) return null
        }
        let Kz = 0,
          uz = 0,
          Nz = !1,
          bz = 0,
          wz = -1,
          Dz = -1,
          gz = /[a-z]/.test(zz),
          Hz = !0;
        for (let Bz = 0, Pz = Math.min(zz.length, 200), rz = 0; Bz < Pz && uz < vz;) {
          let Wz = (0, Fz.L)(zz, Bz);
          oz < 0 && (Kz < vz && Wz == tz[Kz] && (Xz[Kz++] = Bz), bz < vz && (Wz == tz[bz] || Wz == sz[bz] ? (0 == bz && (wz = Bz), Dz = Bz + 1, bz++) : bz = 0));
          let Uz, Pz = Wz < 255 ? Wz >= 48 && Wz <= 57 || Wz >= 97 && Wz <= 122 ? 2 : Wz >= 65 && Wz <= 90 ? 1 : 0 : (Uz = (0, Fz.bb)(Wz)) != Uz.toLowerCase() ? 1 : Uz != Uz.toUpperCase() ? 2 : 0;
          (!Bz || 1 == Pz && gz || 0 == rz && 0 != Pz) && (tz[uz] == Wz || sz[uz] == Wz && (Nz = !0) ? Oz[uz++] = Bz : Oz.length && (Hz = !1)), rz = Pz, Bz += (0, Fz.P)(Wz)
        }
        return uz == vz && 0 == Oz[0] && Hz ? this.result((Nz ? -200 : 0) - 100, Oz, zz) : bz == vz && 0 == wz ? this.ret(-200 - zz.length + (Dz == zz.length ? 0 : -100), [0, Dz]) : oz > -1 ? this.ret(-700 - zz.length, [oz, oz + this.pattern.length]) : bz == vz ? this.ret(-900 - zz.length, [wz, Dz]) : uz == vz ? this.result((Nz ? -200 : 0) - 100 - 700 + (Hz ? 0 : -1100), Oz, zz) : 2 == tz.length ? null : this.result((Wz[0] ? -700 : 0) - 200 - 1100, Wz, zz)
      }
      result(zz, tz, sz) {
        let Wz = [],
          Xz = 0;
        for (let Oz of tz) {
          let zz = Oz + (this.astral ? (0, Fz.P)((0, Fz.L)(sz, Oz)) : 1);
          Xz && Wz[Xz - 1] == Oz ? Wz[Xz - 1] = zz : (Wz[Xz++] = Oz, Wz[Xz++] = zz)
        }
        return this.ret(zz - sz.length, Wz)
      }
    }
    class rz {
      constructor(zz) {
        this.pattern = zz, this.matched = [], this.score = 0, this.folded = zz.toLowerCase()
      }
      match(zz) {
        if (zz.length < this.pattern.length) return null;
        let tz = zz.slice(0, this.pattern.length),
          sz = tz == this.pattern ? 0 : tz.toLowerCase() == this.folded ? -200 : null;
        return null == sz ? null : (this.matched = [0, tz.length], this.score = sz + (zz.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const Yz = Fz.q.define({
      combine: zz => (0, Fz.Q)(zz, {
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
        positionInfo: mz,
        filterStrict: !1,
        compareCompletions: (zz, tz) => (zz.sortText || zz.label).localeCompare(tz.sortText || tz.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (zz, tz) => zz && tz,
        closeOnBlur: (zz, tz) => zz && tz,
        icons: (zz, tz) => zz && tz,
        tooltipClass: (zz, tz) => sz => xz(zz(sz), tz(sz)),
        optionClass: (zz, tz) => sz => xz(zz(sz), tz(sz)),
        addToOptions: (zz, tz) => zz.concat(tz),
        filterStrict: (zz, tz) => zz || tz
      })
    });

    function xz(zz, tz) {
      return zz ? tz ? zz + " " + tz : zz : tz
    }

    function mz(zz, tz, sz, Fz, Xz, Oz) {
      let oz, vz, Uz = zz.textDirection == Wz.f.RTL,
        Kz = Uz,
        uz = !1,
        Nz = "top",
        bz = tz.left - Xz.left,
        wz = Xz.right - tz.right,
        Dz = Fz.right - Fz.left,
        gz = Fz.bottom - Fz.top;
      if (Kz && bz < Math.min(Dz, wz) ? Kz = !1 : !Kz && wz < Math.min(Dz, bz) && (Kz = !0), Dz <= (Kz ? bz : wz)) oz = Math.max(Xz.top, Math.min(sz.top, Xz.bottom - gz)) - tz.top, vz = Math.min(400, Kz ? bz : wz);
      else {
        uz = !0, vz = Math.min(400, (Uz ? tz.right : Xz.right - tz.left) - 30);
        let zz = Xz.bottom - tz.bottom;
        zz >= gz || zz > tz.top ? oz = sz.bottom - tz.top : (Nz = "bottom", oz = tz.bottom - sz.top)
      }
      return {
        style: `${Nz}: ${oz/((tz.bottom-tz.top)/Oz.offsetHeight)}px; max-width: ${vz/((tz.right-tz.left)/Oz.offsetWidth)}px`,
        class: "cm-completionInfo-" + (uz ? Uz ? "left-narrow" : "right-narrow" : Kz ? "left" : "right")
      }
    }
    const Jz = Fz.F.define();

    function Iz(zz, tz, sz) {
      if (zz <= sz) return {
        from: 0,
        to: zz
      };
      if (tz < 0 && (tz = 0), tz <= zz >> 1) {
        let zz = Math.floor(tz / sz);
        return {
          from: zz * sz,
          to: (zz + 1) * sz
        }
      }
      let Fz = Math.floor((zz - tz) / sz);
      return {
        from: zz - (Fz + 1) * sz,
        to: zz - Fz * sz
      }
    }
    class Cz {
      constructor(zz, tz, sz) {
        this.view = zz, this.stateField = tz, this.applyCompletion = sz, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: zz => this.placeInfo(zz),
          key: this
        }, this.space = null, this.currentClass = "";
        let Fz = zz.state.field(tz),
          {
            options: Wz,
            selected: Xz
          } = Fz.open,
          Oz = zz.state.facet(Yz);
        this.optionContent = function(zz) {
          let tz = zz.addToOptions.slice();
          return zz.icons && tz.push({
            render(zz) {
              let tz = document.createElement("div");
              return tz.classList.add("cm-completionIcon"), zz.type && tz.classList.add(...zz.type.split(/\s+/g).map((zz => "cm-completionIcon-" + zz))), tz.setAttribute("aria-hidden", "true"), tz
            },
            position: 20
          }), tz.push({
            render(zz, tz, sz, Fz) {
              let Wz = document.createElement("span");
              Wz.className = "cm-completionLabel";
              let Xz = zz.displayLabel || zz.label,
                Oz = 0;
              for (let oz = 0; oz < Fz.length;) {
                let zz = Fz[oz++],
                  tz = Fz[oz++];
                zz > Oz && Wz.appendChild(document.createTextNode(Xz.slice(Oz, zz)));
                let sz = Wz.appendChild(document.createElement("span"));
                sz.appendChild(document.createTextNode(Xz.slice(zz, tz))), sz.className = "cm-completionMatchedText", Oz = tz
              }
              return Oz < Xz.length && Wz.appendChild(document.createTextNode(Xz.slice(Oz))), Wz
            },
            position: 50
          }, {
            render(zz) {
              if (!zz.detail) return null;
              let tz = document.createElement("span");
              return tz.className = "cm-completionDetail", tz.textContent = zz.detail, tz
            },
            position: 80
          }), tz.sort(((zz, tz) => zz.position - tz.position)).map((zz => zz.render))
        }(Oz), this.optionClass = Oz.optionClass, this.tooltipClass = Oz.tooltipClass, this.range = Iz(Wz.length, Xz, Oz.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(zz.state), this.dom.addEventListener("mousedown", (sz => {
          let {
            options: Fz
          } = zz.state.field(tz).open;
          for (let tz, Wz = sz.target; Wz && Wz != this.dom; Wz = Wz.parentNode)
            if ("LI" == Wz.nodeName && (tz = /-(\d+)$/.exec(Wz.id)) && +tz[1] < Fz.length) return this.applyCompletion(zz, Fz[+tz[1]]), void sz.preventDefault();
          if (sz.target == this.list) {
            let tz = this.list.classList.contains("cm-completionListIncompleteTop") && sz.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && sz.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != tz && (zz.dispatch({
              effects: Jz.of(tz)
            }), sz.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (tz => {
          let sz = zz.state.field(this.stateField, !1);
          sz && sz.tooltip && zz.state.facet(Yz).closeOnBlur && tz.relatedTarget != zz.contentDOM && zz.dispatch({
            effects: Bz.of(null)
          })
        })), this.showOptions(Wz, Fz.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(zz, tz) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(zz, tz, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(zz) {
        var tz;
        let sz = zz.state.field(this.stateField),
          Fz = zz.startState.field(this.stateField);
        if (this.updateTooltipClass(zz.state), sz != Fz) {
          let {
            options: Wz,
            selected: Xz,
            disabled: Oz
          } = sz.open;
          Fz.open && Fz.open.options == Wz || (this.range = Iz(Wz.length, Xz, zz.state.facet(Yz).maxRenderedOptions), this.showOptions(Wz, sz.id)), this.updateSel(), Oz != (null === (tz = Fz.open) || void 0 === tz ? void 0 : tz.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!Oz)
        }
      }
      updateTooltipClass(zz) {
        let tz = this.tooltipClass(zz);
        if (tz != this.currentClass) {
          for (let zz of this.currentClass.split(" ")) zz && this.dom.classList.remove(zz);
          for (let zz of tz.split(" ")) zz && this.dom.classList.add(zz);
          this.currentClass = tz
        }
      }
      positioned(zz) {
        this.space = zz, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let zz = this.view.state.field(this.stateField),
          tz = zz.open;
        (tz.selected > -1 && tz.selected < this.range.from || tz.selected >= this.range.to) && (this.range = Iz(tz.options.length, tz.selected, this.view.state.facet(Yz).maxRenderedOptions), this.showOptions(tz.options, zz.id));
        let sz = this.updateSelectedOption(tz.selected);
        if (sz) {
          this.destroyInfo();
          let {
            completion: Fz
          } = tz.options[tz.selected], {
            info: Xz
          } = Fz;
          if (!Xz) return;
          let Oz = "string" === typeof Xz ? document.createTextNode(Xz) : Xz(Fz);
          if (!Oz) return;
          "then" in Oz ? Oz.then((tz => {
            tz && this.view.state.field(this.stateField, !1) == zz && this.addInfoPane(tz, Fz)
          })).catch((zz => (0, Wz.Z)(this.view.state, zz, "completion info"))) : (this.addInfoPane(Oz, Fz), sz.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(zz, tz) {
        this.destroyInfo();
        let sz = this.info = document.createElement("div");
        if (sz.className = "cm-tooltip cm-completionInfo", sz.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != zz.nodeType) sz.appendChild(zz), this.infoDestroy = null;
        else {
          let {
            dom: tz,
            destroy: Fz
          } = zz;
          sz.appendChild(tz), this.infoDestroy = Fz || null
        }
        this.dom.appendChild(sz), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(zz) {
        let tz = null;
        for (let sz = this.list.firstChild, Fz = this.range.from; sz; sz = sz.nextSibling, Fz++) "LI" == sz.nodeName && sz.id ? Fz == zz ? sz.hasAttribute("aria-selected") || (sz.setAttribute("aria-selected", "true"), tz = sz) : sz.hasAttribute("aria-selected") && (sz.removeAttribute("aria-selected"), sz.removeAttribute("aria-describedby")) : Fz--;
        return tz && function(zz, tz) {
          let sz = zz.getBoundingClientRect(),
            Fz = tz.getBoundingClientRect(),
            Wz = sz.height / zz.offsetHeight;
          Fz.top < sz.top ? zz.scrollTop -= (sz.top - Fz.top) / Wz : Fz.bottom > sz.bottom && (zz.scrollTop += (Fz.bottom - sz.bottom) / Wz)
        }(this.list, tz), tz
      }
      measureInfo() {
        let zz = this.dom.querySelector("[aria-selected]");
        if (!zz || !this.info) return null;
        let tz = this.dom.getBoundingClientRect(),
          sz = this.info.getBoundingClientRect(),
          Fz = zz.getBoundingClientRect(),
          Wz = this.space;
        if (!Wz) {
          let zz = this.dom.ownerDocument.documentElement;
          Wz = {
            left: 0,
            top: 0,
            right: zz.clientWidth,
            bottom: zz.clientHeight
          }
        }
        return Fz.top > Math.min(Wz.bottom, tz.bottom) - 10 || Fz.bottom < Math.max(Wz.top, tz.top) + 10 ? null : this.view.state.facet(Yz).positionInfo(this.view, tz, Fz, sz, Wz, this.dom)
      }
      placeInfo(zz) {
        this.info && (zz ? (zz.style && (this.info.style.cssText = zz.style), this.info.className = "cm-tooltip cm-completionInfo " + (zz.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(zz, tz, sz) {
        const Fz = document.createElement("ul");
        Fz.id = tz, Fz.setAttribute("role", "listbox"), Fz.setAttribute("aria-expanded", "true"), Fz.setAttribute("aria-label", this.view.state.phrase("Completions")), Fz.addEventListener("mousedown", (zz => {
          zz.target == Fz && zz.preventDefault()
        }));
        let Wz = null;
        for (let Xz = sz.from; Xz < sz.to; Xz++) {
          let {
            completion: Oz,
            match: oz
          } = zz[Xz], {
            section: vz
          } = Oz;
          if (vz) {
            let zz = "string" == typeof vz ? vz : vz.name;
            if (zz != Wz && (Xz > sz.from || 0 == sz.from))
              if (Wz = zz, "string" != typeof vz && vz.header) Fz.appendChild(vz.header(vz));
              else {
                Fz.appendChild(document.createElement("completion-section")).textContent = zz
              }
          }
          const Uz = Fz.appendChild(document.createElement("li"));
          Uz.id = tz + "-" + Xz, Uz.setAttribute("role", "option");
          let Kz = this.optionClass(Oz);
          Kz && (Uz.className = Kz);
          for (let zz of this.optionContent) {
            let tz = zz(Oz, this.view.state, this.view, oz);
            tz && Uz.appendChild(tz)
          }
        }
        return sz.from && Fz.classList.add("cm-completionListIncompleteTop"), sz.to < zz.length && Fz.classList.add("cm-completionListIncompleteBottom"), Fz
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function ez(zz, tz) {
      return sz => new Cz(sz, zz, tz)
    }

    function Zz(zz) {
      return 100 * (zz.boost || 0) + (zz.apply ? 10 : 0) + (zz.info ? 5 : 0) + (zz.type ? 1 : 0)
    }
    class Gz {
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        this.options = zz, this.attrs = tz, this.tooltip = sz, this.timestamp = Fz, this.selected = Wz, this.disabled = Xz
      }
      setSelected(zz, tz) {
        return zz == this.selected || zz >= this.options.length ? this : new Gz(this.options, Az(tz, zz), this.tooltip, this.timestamp, zz, this.disabled)
      }
      static build(zz, tz, sz, Fz, Wz, Xz) {
        if (Fz && !Xz && zz.some((zz => zz.isPending))) return Fz.setDisabled();
        let Oz = function(zz, tz) {
          let sz = [],
            Fz = null,
            Wz = null,
            Xz = zz => {
              sz.push(zz);
              let {
                section: tz
              } = zz.completion;
              if (tz) {
                Fz || (Fz = []);
                let zz = "string" == typeof tz ? tz : tz.name;
                Fz.some((tz => tz.name == zz)) || Fz.push("string" == typeof tz ? {
                  name: zz
                } : tz)
              }
            },
            Oz = tz.facet(Yz);
          for (let uz of zz)
            if (uz.hasResult()) {
              let zz = uz.result.getMatch;
              if (!1 === uz.result.filter)
                for (let tz of uz.result.options) Xz(new Kz(tz, uz.source, zz ? zz(tz) : [], 1e9 - sz.length));
              else {
                let sz, Fz = tz.sliceDoc(uz.from, uz.to),
                  oz = Oz.filterStrict ? new rz(Fz) : new Pz(Fz);
                for (let tz of uz.result.options)
                  if (sz = oz.match(tz.label)) {
                    let Fz = tz.displayLabel ? zz ? zz(tz, sz.matched) : [] : sz.matched,
                      Oz = sz.score + (tz.boost || 0);
                    if (Xz(new Kz(tz, uz.source, Fz, Oz)), "object" == typeof tz.section && "dynamic" === tz.section.rank) {
                      let {
                        name: zz
                      } = tz.section;
                      Wz || (Wz = Object.create(null)), Wz[zz] = Math.max(Oz, Wz[zz] || -1e9)
                    }
                  }
              }
            } if (Fz) {
            let zz = Object.create(null),
              tz = 0,
              Xz = (zz, tz) => ("dynamic" === zz.rank && "dynamic" === tz.rank ? Wz[tz.name] - Wz[zz.name] : 0) || ("number" == typeof zz.rank ? zz.rank : 1e9) - ("number" == typeof tz.rank ? tz.rank : 1e9) || (zz.name < tz.name ? -1 : 1);
            for (let sz of Fz.sort(Xz)) tz -= 1e5, zz[sz.name] = tz;
            for (let Fz of sz) {
              let {
                section: tz
              } = Fz.completion;
              tz && (Fz.score += zz["string" == typeof tz ? tz : tz.name])
            }
          }
          let oz = [],
            vz = null,
            Uz = Oz.compareCompletions;
          for (let Kz of sz.sort(((zz, tz) => tz.score - zz.score || Uz(zz.completion, tz.completion)))) {
            let zz = Kz.completion;
            !vz || vz.label != zz.label || vz.detail != zz.detail || null != vz.type && null != zz.type && vz.type != zz.type || vz.apply != zz.apply || vz.boost != zz.boost ? oz.push(Kz) : Zz(Kz.completion) > Zz(vz) && (oz[oz.length - 1] = Kz), vz = Kz.completion
          }
          return oz
        }(zz, tz);
        if (!Oz.length) return Fz && zz.some((zz => zz.isPending)) ? Fz.setDisabled() : null;
        let oz = tz.facet(Yz).selectOnOpen ? 0 : -1;
        if (Fz && Fz.selected != oz && -1 != Fz.selected) {
          let zz = Fz.options[Fz.selected].completion;
          for (let tz = 0; tz < Oz.length; tz++)
            if (Oz[tz].completion == zz) {
              oz = tz;
              break
            }
        }
        return new Gz(Oz, Az(sz, oz), {
          pos: zz.reduce(((zz, tz) => tz.hasResult() ? Math.min(zz, tz.from) : zz), 1e8),
          create: Lz,
          above: Wz.aboveCursor
        }, Fz ? Fz.timestamp : Date.now(), oz, !1)
      }
      map(zz) {
        return new Gz(this.options, this.attrs, {
          ...this.tooltip,
          pos: zz.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new Gz(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Tz {
      constructor(zz, tz, sz) {
        this.active = zz, this.id = tz, this.open = sz
      }
      static start() {
        return new Tz(yz, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(zz) {
        let {
          state: tz
        } = zz, sz = tz.facet(Yz), Fz = (sz.override || tz.languageDataAt("autocomplete", uz(tz)).map(gz)).map((tz => (this.active.find((zz => zz.source == tz)) || new dz(tz, this.active.some((zz => 0 != zz.state)) ? 1 : 0)).update(zz, sz)));
        Fz.length == this.active.length && Fz.every(((zz, tz) => zz == this.active[tz])) && (Fz = this.active);
        let Wz = this.open,
          Xz = zz.effects.some((zz => zz.is(Qz)));
        Wz && zz.docChanged && (Wz = Wz.map(zz.changes)), zz.selection || Fz.some((tz => tz.hasResult() && zz.changes.touchesRange(tz.from, tz.to))) || ! function(zz, tz) {
          if (zz == tz) return !0;
          for (let sz = 0, Fz = 0;;) {
            for (; sz < zz.length && !zz[sz].hasResult();) sz++;
            for (; Fz < tz.length && !tz[Fz].hasResult();) Fz++;
            let Wz = sz == zz.length,
              Xz = Fz == tz.length;
            if (Wz || Xz) return Wz == Xz;
            if (zz[sz++].result != tz[Fz++].result) return !1
          }
        }(Fz, this.active) || Xz ? Wz = Gz.build(Fz, tz, this.id, Wz, sz, Xz) : Wz && Wz.disabled && !Fz.some((zz => zz.isPending)) && (Wz = null), !Wz && Fz.every((zz => !zz.isPending)) && Fz.some((zz => zz.hasResult())) && (Fz = Fz.map((zz => zz.hasResult() ? new dz(zz.source, 0) : zz)));
        for (let Oz of zz.effects) Oz.is(Jz) && (Wz = Wz && Wz.setSelected(Oz.value, this.id));
        return Fz == this.active && Wz == this.open ? this : new Tz(Fz, this.id, Wz)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? cz : jz
      }
    }
    const cz = {
        "aria-autocomplete": "list"
      },
      jz = {};

    function Az(zz, tz) {
      let sz = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": zz
      };
      return tz > -1 && (sz["aria-activedescendant"] = zz + "-" + tz), sz
    }
    const yz = [];

    function Mz(zz, tz) {
      if (zz.isUserEvent("input.complete")) {
        let sz = zz.annotation(bz);
        if (sz && tz.activateOnCompletion(sz)) return 12
      }
      let sz = zz.isUserEvent("input.type");
      return sz && tz.activateOnTyping ? 5 : sz ? 1 : zz.isUserEvent("delete.backward") ? 2 : zz.selection ? 8 : zz.docChanged ? 16 : 0
    }
    class dz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = zz, this.state = tz, this.explicit = sz
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(zz, tz) {
        let sz = Mz(zz, tz),
          Fz = this;
        (8 & sz || 16 & sz && this.touches(zz)) && (Fz = new dz(Fz.source, 0)), 4 & sz && 0 == Fz.state && (Fz = new dz(this.source, 1)), Fz = Fz.updateFor(zz, sz);
        for (let Wz of zz.effects)
          if (Wz.is(Hz)) Fz = new dz(Fz.source, 1, Wz.value);
          else if (Wz.is(Bz)) Fz = new dz(Fz.source, 0);
        else if (Wz.is(Qz))
          for (let zz of Wz.value) zz.source == Fz.source && (Fz = zz);
        return Fz
      }
      updateFor(zz, tz) {
        return this.map(zz.changes)
      }
      map(zz) {
        return this
      }
      touches(zz) {
        return zz.changes.touchesRange(uz(zz.state))
      }
    }
    class hz extends dz {
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        super(zz, 3, tz), this.limit = sz, this.result = Fz, this.from = Wz, this.to = Xz
      }
      hasResult() {
        return !0
      }
      updateFor(zz, tz) {
        var sz;
        if (!(3 & tz)) return this.map(zz.changes);
        let Fz = this.result;
        Fz.map && !zz.changes.empty && (Fz = Fz.map(Fz, zz.changes));
        let Wz = zz.changes.mapPos(this.from),
          Xz = zz.changes.mapPos(this.to, 1),
          oz = uz(zz.state);
        if (oz > Xz || !Fz || 2 & tz && (uz(zz.startState) == this.from || oz < this.limit)) return new dz(this.source, 4 & tz ? 1 : 0);
        let vz = zz.changes.mapPos(this.limit);
        return function(zz, tz, sz, Fz) {
          if (!zz) return !1;
          let Wz = tz.sliceDoc(sz, Fz);
          return "function" == typeof zz ? zz(Wz, sz, Fz, tz) : Nz(zz, !0).test(Wz)
        }(Fz.validFor, zz.state, Wz, Xz) ? new hz(this.source, this.explicit, vz, Fz, Wz, Xz) : Fz.update && (Fz = Fz.update(Fz, Wz, Xz, new Oz(zz.state, oz, !1))) ? new hz(this.source, this.explicit, vz, Fz, Fz.from, null !== (sz = Fz.to) && void 0 !== sz ? sz : uz(zz.state)) : new dz(this.source, 1, this.explicit)
      }
      map(zz) {
        if (zz.empty) return this;
        return (this.result.map ? this.result.map(this.result, zz) : this.result) ? new hz(this.source, this.explicit, zz.mapPos(this.limit), this.result, zz.mapPos(this.from), zz.mapPos(this.to, 1)) : new dz(this.source, 0)
      }
      touches(zz) {
        return zz.changes.touchesRange(this.from, this.to)
      }
    }
    const Qz = Fz.F.define({
        map: (zz, tz) => zz.map((zz => zz.map(tz)))
      }),
      kz = Fz.H.define({
        create: () => Tz.start(),
        update: (zz, tz) => zz.update(tz),
        provide: zz => [Wz.lb.from(zz, (zz => zz.tooltip)), Wz.i.contentAttributes.from(zz, (zz => zz.attrs))]
      });

    function iz(zz, tz) {
      const sz = tz.completion.apply || tz.completion.label;
      let Fz = zz.state.field(kz).active.find((zz => zz.source == tz.source));
      return Fz instanceof hz && ("string" == typeof sz ? zz.dispatch({
        ...wz(zz.state, sz, Fz.from, Fz.to),
        annotations: bz.of(tz.completion)
      }) : sz(zz, tz.completion, Fz.from, Fz.to), !0)
    }
    const Lz = ez(kz, iz);

    function lz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return sz => {
        let Fz = sz.state.field(kz, !1);
        if (!Fz || !Fz.open || Fz.open.disabled || Date.now() - Fz.open.timestamp < sz.state.facet(Yz).interactionDelay) return !1;
        let Xz, Oz = 1;
        "page" == tz && (Xz = (0, Wz.E)(sz, Fz.open.tooltip)) && (Oz = Math.max(2, Math.floor(Xz.dom.offsetHeight / Xz.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: oz
        } = Fz.open.options, vz = Fz.open.selected > -1 ? Fz.open.selected + Oz * (zz ? 1 : -1) : zz ? 0 : oz - 1;
        return vz < 0 ? vz = "page" == tz ? 0 : oz - 1 : vz >= oz && (vz = "page" == tz ? oz - 1 : 0), sz.dispatch({
          effects: Jz.of(vz)
        }), !0
      }
    }
    const nz = zz => !!zz.state.field(kz, !1) && (zz.dispatch({
      effects: Hz.of(!0)
    }), !0);
    class az {
      constructor(zz, tz) {
        this.active = zz, this.context = tz, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const qz = Wz.p.fromClass(class {
        constructor(zz) {
          this.view = zz, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let tz of zz.state.field(kz).active) tz.isPending && this.startQuery(tz)
        }
        update(zz) {
          let tz = zz.state.field(kz),
            sz = zz.state.facet(Yz);
          if (!zz.selectionSet && !zz.docChanged && zz.startState.field(kz) == tz) return;
          let Fz = zz.transactions.some((zz => {
            let tz = Mz(zz, sz);
            return 8 & tz || (zz.selection || zz.docChanged) && !(3 & tz)
          }));
          for (let oz = 0; oz < this.running.length; oz++) {
            let tz = this.running[oz];
            if (Fz || tz.context.abortOnDocChange && zz.docChanged || tz.updates.length + zz.transactions.length > 50 && Date.now() - tz.time > 1e3) {
              for (let zz of tz.context.abortListeners) try {
                zz()
              } catch (Oz) {
                (0, Wz.Z)(this.view.state, Oz)
              }
              tz.context.abortListeners = null, this.running.splice(oz--, 1)
            } else tz.updates.push(...zz.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), zz.transactions.some((zz => zz.effects.some((zz => zz.is(Hz))))) && (this.pendingStart = !0);
          let Xz = this.pendingStart ? 50 : sz.activateOnTypingDelay;
          if (this.debounceUpdate = tz.active.some((zz => zz.isPending && !this.running.some((tz => tz.active.source == zz.source)))) ? setTimeout((() => this.startUpdate()), Xz) : -1, 0 != this.composing)
            for (let Wz of zz.transactions) Wz.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Wz.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: zz
          } = this.view, tz = zz.field(kz);
          for (let sz of tz.active) sz.isPending && !this.running.some((zz => zz.active.source == sz.source)) && this.startQuery(sz);
          this.running.length && tz.open && tz.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Yz).updateSyncTime))
        }
        startQuery(zz) {
          let {
            state: tz
          } = this.view, sz = uz(tz), Fz = new Oz(tz, sz, zz.explicit, this.view), Xz = new az(zz, Fz);
          this.running.push(Xz), Promise.resolve(zz.source(Fz)).then((zz => {
            Xz.context.aborted || (Xz.done = zz || null, this.scheduleAccept())
          }), (zz => {
            this.view.dispatch({
              effects: Bz.of(null)
            }), (0, Wz.Z)(this.view.state, zz)
          }))
        }
        scheduleAccept() {
          this.running.every((zz => void 0 !== zz.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Yz).updateSyncTime))
        }
        accept() {
          var zz;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let tz = [],
            sz = this.view.state.facet(Yz),
            Fz = this.view.state.field(kz);
          for (let Wz = 0; Wz < this.running.length; Wz++) {
            let Xz = this.running[Wz];
            if (void 0 === Xz.done) continue;
            if (this.running.splice(Wz--, 1), Xz.done) {
              let Fz = uz(Xz.updates.length ? Xz.updates[0].startState : this.view.state),
                Wz = Math.min(Fz, Xz.done.from + (Xz.active.explicit ? 0 : 1)),
                Oz = new hz(Xz.active.source, Xz.active.explicit, Wz, Xz.done, Xz.done.from, null !== (zz = Xz.done.to) && void 0 !== zz ? zz : Fz);
              for (let zz of Xz.updates) Oz = Oz.update(zz, sz);
              if (Oz.hasResult()) {
                tz.push(Oz);
                continue
              }
            }
            let Oz = Fz.active.find((zz => zz.source == Xz.active.source));
            if (Oz && Oz.isPending)
              if (null == Xz.done) {
                let zz = new dz(Xz.active.source, 0);
                for (let tz of Xz.updates) zz = zz.update(tz, sz);
                zz.isPending || tz.push(zz)
              } else this.startQuery(Oz)
          }(tz.length || Fz.open && Fz.open.disabled) && this.view.dispatch({
            effects: Qz.of(tz)
          })
        }
      }, {
        eventHandlers: {
          blur(zz) {
            let tz = this.view.state.field(kz, !1);
            if (tz && tz.tooltip && this.view.state.facet(Yz).closeOnBlur) {
              let sz = tz.open && (0, Wz.E)(this.view, tz.open.tooltip);
              sz && sz.dom.contains(zz.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: Bz.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: Hz.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      Sz = "object" == typeof navigator && /Win/.test(navigator.platform),
      Vz = Fz.x.highest(Wz.i.domEventHandlers({
        keydown(zz, tz) {
          let sz = tz.state.field(kz, !1);
          if (!sz || !sz.open || sz.open.disabled || sz.open.selected < 0 || zz.key.length > 1 || zz.ctrlKey && (!Sz || !zz.altKey) || zz.metaKey) return !1;
          let Fz = sz.open.options[sz.open.selected],
            Wz = sz.active.find((zz => zz.source == Fz.source)),
            Xz = Fz.completion.commitCharacters || Wz.result.commitCharacters;
          return Xz && Xz.indexOf(zz.key) > -1 && iz(tz, Fz), !1
        }
      })),
      Rz = Wz.i.baseTheme({
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
    class pz {
      constructor(zz, tz, sz, Fz) {
        this.field = zz, this.line = tz, this.from = sz, this.to = Fz
      }
    }
    class fz {
      constructor(zz, tz, sz) {
        this.field = zz, this.from = tz, this.to = sz
      }
      map(zz) {
        let tz = zz.mapPos(this.from, -1, Fz.u.TrackDel),
          sz = zz.mapPos(this.to, 1, Fz.u.TrackDel);
        return null == tz || null == sz ? null : new fz(this.field, tz, sz)
      }
    }
    class Ez {
      constructor(zz, tz) {
        this.lines = zz, this.fieldPositions = tz
      }
      instantiate(zz, tz) {
        let sz = [],
          Fz = [tz],
          Wz = zz.doc.lineAt(tz),
          Oz = /^\s*/.exec(Wz.text)[0];
        for (let vz of this.lines) {
          if (sz.length) {
            let sz = Oz,
              Wz = /^\t*/.exec(vz)[0].length;
            for (let tz = 0; tz < Wz; tz++) sz += zz.facet(Xz.ab);
            Fz.push(tz + sz.length - Wz), vz = sz + vz.slice(Wz)
          }
          sz.push(vz), tz += vz.length + 1
        }
        let oz = this.fieldPositions.map((zz => new fz(zz.field, Fz[zz.line] + zz.from, Fz[zz.line] + zz.to)));
        return {
          text: sz,
          du: oz
        }
      }
      static parse(zz) {
        let tz, sz = [],
          Fz = [],
          Wz = [];
        for (let Xz of zz.split(/\r\n?|\n/)) {
          for (; tz = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Xz);) {
            let zz = tz[1] ? +tz[1] : null,
              Oz = tz[2] || tz[3] || "",
              oz = -1,
              vz = Oz.replace(/\\[{}]/g, (zz => zz[1]));
            for (let tz = 0; tz < sz.length; tz++)(null != zz ? sz[tz].seq == zz : vz && sz[tz].name == vz) && (oz = tz);
            if (oz < 0) {
              let tz = 0;
              for (; tz < sz.length && (null == zz || null != sz[tz].seq && sz[tz].seq < zz);) tz++;
              sz.splice(tz, 0, {
                seq: zz,
                name: vz
              }), oz = tz;
              for (let zz of Wz) zz.field >= oz && zz.field++
            }
            for (let sz of Wz)
              if (sz.line == Fz.length && sz.from > tz.index) {
                let zz = tz[2] ? 3 + (tz[1] || "").length : 2;
                sz.from -= zz, sz.to -= zz
              } Wz.push(new pz(oz, Fz.length, tz.index, tz.index + vz.length)), Xz = Xz.slice(0, tz.index) + Oz + Xz.slice(tz.index + tz[0].length)
          }
          Xz = Xz.replace(/\\([{}])/g, ((zz, tz, sz) => {
            for (let Xz of Wz) Xz.line == Fz.length && Xz.from > sz && (Xz.from--, Xz.to--);
            return tz
          })), Fz.push(Xz)
        }
        return new Ez(Fz, Wz)
      }
    }
    let zt = Wz.b.widget({
        widget: new class extends Wz.q {
          toDOM() {
            let zz = document.createElement("span");
            return zz.className = "cm-snippetFieldPosition", zz
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      tt = Wz.b.mark({
        class: "cm-snippetField"
      });
    class st {
      constructor(zz, tz) {
        this.du = zz, this.active = tz, this.deco = Wz.b.set(zz.map((zz => (zz.from == zz.to ? zt : tt).range(zz.from, zz.to))), !0)
      }
      map(zz) {
        let tz = [];
        for (let sz of this.du) {
          let Fz = sz.map(zz);
          if (!Fz) return null;
          tz.push(Fz)
        }
        return new st(tz, this.active)
      }
      selectionInsideField(zz) {
        return zz.du.every((zz => this.du.some((tz => tz.field == this.active && tz.from <= zz.from && tz.to >= zz.to))))
      }
    }
    const Ft = Fz.F.define({
        map: (zz, tz) => zz && zz.map(tz)
      }),
      Wt = Fz.F.define(),
      Xt = Fz.H.define({
        create: () => null,
        update(zz, tz) {
          for (let sz of tz.effects) {
            if (sz.is(Ft)) return sz.value;
            if (sz.is(Wt) && zz) return new st(zz.du, sz.value)
          }
          return zz && tz.docChanged && (zz = zz.map(tz.changes)), zz && tz.selection && !zz.selectionInsideField(tz.selection) && (zz = null), zz
        },
        provide: zz => Wz.i.sW.from(zz, (zz => zz ? zz.deco : Wz.b.none))
      });

    function Ot(zz, tz) {
      return Fz.l.create(zz.filter((zz => zz.field == tz)).map((zz => Fz.l.range(zz.from, zz.to))))
    }

    function ot(zz) {
      let tz = Ez.parse(zz);
      return (zz, sz, Wz, Xz) => {
        let {
          text: Oz,
          du: oz
        } = tz.instantiate(zz.state, Wz), {
          main: vz
        } = zz.state.selection, Uz = {
          changes: {
            from: Wz,
            to: Xz == vz.from ? vz.to : Xz,
            insert: Fz.I.of(Oz)
          },
          scrollIntoView: !0,
          annotations: sz ? [bz.of(sz), Fz.K.userEvent.of("input.complete")] : void 0
        };
        if (oz.length && (Uz.selection = Ot(oz, 0)), oz.some((zz => zz.field > 0))) {
          let tz = new st(oz, 0),
            sz = Uz.effects = [Ft.of(tz)];
          void 0 === zz.state.field(Xt, !1) && sz.push(Fz.F.appendConfig.of([Xt, ut, bt, Rz]))
        }
        zz.dispatch(zz.state.update(Uz))
      }
    }

    function vt(zz) {
      return tz => {
        let {
          state: sz,
          dispatch: Fz
        } = tz, Wz = sz.field(Xt, !1);
        if (!Wz || zz < 0 && 0 == Wz.active) return !1;
        let Xz = Wz.active + zz,
          Oz = zz > 0 && !Wz.du.some((tz => tz.field == Xz + zz));
        return Fz(sz.update({
          selection: Ot(Wz.du, Xz),
          effects: Ft.of(Oz ? null : new st(Wz.du, Xz)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Ut = [{
        key: "Tab",
        run: vt(1),
        shift: vt(-1)
      }, {
        key: "Escape",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz;
          return !!tz.field(Xt, !1) && (sz(tz.update({
            effects: Ft.of(null)
          })), !0)
        }
      }],
      Kt = Fz.q.define({
        combine: zz => zz.length ? zz[0] : Ut
      }),
      ut = Fz.x.highest(Wz.T.compute([Kt], (zz => zz.facet(Kt))));

    function Nt(zz, tz) {
      return {
        ...tz,
        apply: ot(zz)
      }
    }
    const bt = Wz.i.domEventHandlers({
      mousedown(zz, tz) {
        let sz, Fz = tz.state.field(Xt, !1);
        if (!Fz || null == (sz = tz.posAtCoords({
            x: zz.clientX,
            y: zz.clientY
          }))) return !1;
        let Wz = Fz.du.find((zz => zz.from <= sz && zz.to >= sz));
        return !(!Wz || Wz.field == Fz.active) && (tz.dispatch({
          selection: Ot(Fz.du, Wz.field),
          effects: Ft.of(Fz.du.some((zz => zz.field > Wz.field)) ? new st(Fz.du, Wz.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const wt = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      Dt = Fz.F.define({
        map(zz, tz) {
          let sz = tz.mapPos(zz, -1, Fz.u.TrackAfter);
          return null == sz ? void 0 : sz
        }
      }),
      gt = new class extends Fz.E {};
    gt.startSide = 1, gt.endSide = -1;
    const Ht = Fz.H.define({
      create: () => Fz.B.empty,
      update(zz, tz) {
        if (zz = zz.map(tz.changes), tz.selection) {
          let sz = tz.state.doc.lineAt(tz.selection.main.head);
          zz = zz.update({
            filter: zz => zz >= sz.from && zz <= sz.to
          })
        }
        for (let sz of tz.effects) sz.is(Dt) && (zz = zz.update({
          add: [gt.range(sz.value, sz.value + 1)]
        }));
        return zz
      }
    });

    function Bt() {
      return [mt, Ht]
    }
    const Pt = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function rt(zz) {
      for (let tz = 0; tz < 16; tz += 2)
        if (Pt.charCodeAt(tz) == zz) return Pt.charAt(tz + 1);
      return (0, Fz.bb)(zz < 128 ? zz : zz + 1)
    }

    function Yt(zz, tz) {
      return zz.languageDataAt("closeBrackets", tz)[0] || wt
    }
    const xt = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      mt = Wz.i.inputHandler.of(((zz, tz, sz, Wz) => {
        if ((xt ? zz.composing : zz.compositionStarted) || zz.state.readOnly) return !1;
        let Xz = zz.state.selection.main;
        if (Wz.length > 2 || 2 == Wz.length && 1 == (0, Fz.P)((0, Fz.L)(Wz, 0)) || tz != Xz.from || sz != Xz.to) return !1;
        let Oz = function(zz, tz) {
          let sz = Yt(zz, zz.selection.main.head),
            Wz = sz.brackets || wt.brackets;
          for (let Xz of Wz) {
            let Oz = rt((0, Fz.L)(Xz, 0));
            if (tz == Xz) return Oz == Xz ? Gt(zz, Xz, Wz.indexOf(Xz + Xz + Xz) > -1, sz) : et(zz, Xz, Oz, sz.before || wt.before);
            if (tz == Oz && It(zz, zz.selection.main.from)) return Zt(zz, Xz, Oz)
          }
          return null
        }(zz.state, Wz);
        return !!Oz && (zz.dispatch(Oz), !0)
      })),
      Jt = [{
        key: "Backspace",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz;
          if (tz.readOnly) return !1;
          let Wz = Yt(tz, tz.selection.main.head).brackets || wt.brackets,
            Xz = null,
            Oz = tz.changeByRange((zz => {
              if (zz.empty) {
                let sz = function(zz, tz) {
                  let sz = zz.sliceString(tz - 2, tz);
                  return (0, Fz.P)((0, Fz.L)(sz, 0)) == sz.length ? sz : sz.slice(1)
                }(tz.doc, zz.head);
                for (let Xz of Wz)
                  if (Xz == sz && Ct(tz.doc, zz.head) == rt((0, Fz.L)(Xz, 0))) return {
                    changes: {
                      from: zz.head - Xz.length,
                      to: zz.head + Xz.length
                    },
                    range: Fz.l.cursor(zz.head - Xz.length)
                  }
              }
              return {
                range: Xz = zz
              }
            }));
          return Xz || sz(tz.update(Oz, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !Xz
        }
      }];

    function It(zz, tz) {
      let sz = !1;
      return zz.field(Ht).between(0, zz.doc.length, (zz => {
        zz == tz && (sz = !0)
      })), sz
    }

    function Ct(zz, tz) {
      let sz = zz.sliceString(tz, tz + 2);
      return sz.slice(0, (0, Fz.P)((0, Fz.L)(sz, 0)))
    }

    function et(zz, tz, sz, Wz) {
      let Xz = null,
        Oz = zz.changeByRange((Oz => {
          if (!Oz.empty) return {
            changes: [{
              insert: tz,
              from: Oz.from
            }, {
              insert: sz,
              from: Oz.to
            }],
            effects: Dt.of(Oz.to + tz.length),
            range: Fz.l.range(Oz.anchor + tz.length, Oz.head + tz.length)
          };
          let oz = Ct(zz.doc, Oz.head);
          return !oz || /\s/.test(oz) || Wz.indexOf(oz) > -1 ? {
            changes: {
              insert: tz + sz,
              from: Oz.head
            },
            effects: Dt.of(Oz.head + tz.length),
            range: Fz.l.cursor(Oz.head + tz.length)
          } : {
            range: Xz = Oz
          }
        }));
      return Xz ? null : zz.update(Oz, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Zt(zz, tz, sz) {
      let Wz = null,
        Xz = zz.changeByRange((tz => tz.empty && Ct(zz.doc, tz.head) == sz ? {
          changes: {
            from: tz.head,
            to: tz.head + sz.length,
            insert: sz
          },
          range: Fz.l.cursor(tz.head + sz.length)
        } : Wz = {
          range: tz
        }));
      return Wz ? null : zz.update(Xz, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Gt(zz, tz, sz, Wz) {
      let Oz = Wz.stringPrefixes || wt.stringPrefixes,
        oz = null,
        vz = zz.changeByRange((Wz => {
          if (!Wz.empty) return {
            changes: [{
              insert: tz,
              from: Wz.from
            }, {
              insert: tz,
              from: Wz.to
            }],
            effects: Dt.of(Wz.to + tz.length),
            range: Fz.l.range(Wz.anchor + tz.length, Wz.head + tz.length)
          };
          let vz, Uz = Wz.head,
            Kz = Ct(zz.doc, Uz);
          if (Kz == tz) {
            if (Tt(zz, Uz)) return {
              changes: {
                insert: tz + tz,
                from: Uz
              },
              effects: Dt.of(Uz + tz.length),
              range: Fz.l.cursor(Uz + tz.length)
            };
            if (It(zz, Uz)) {
              let Wz = sz && zz.sliceDoc(Uz, Uz + 3 * tz.length) == tz + tz + tz ? tz + tz + tz : tz;
              return {
                changes: {
                  from: Uz,
                  to: Uz + Wz.length,
                  insert: Wz
                },
                range: Fz.l.cursor(Uz + Wz.length)
              }
            }
          } else {
            if (sz && zz.sliceDoc(Uz - 2 * tz.length, Uz) == tz + tz && (vz = ct(zz, Uz - 2 * tz.length, Oz)) > -1 && Tt(zz, vz)) return {
              changes: {
                insert: tz + tz + tz + tz,
                from: Uz
              },
              effects: Dt.of(Uz + tz.length),
              range: Fz.l.cursor(Uz + tz.length)
            };
            if (zz.charCategorizer(Uz)(Kz) != Fz.i.Word && ct(zz, Uz, Oz) > -1 && ! function(zz, tz, sz, Fz) {
                let Wz = (0, Xz.mb)(zz).resolveInner(tz, -1),
                  Oz = Fz.reduce(((zz, tz) => Math.max(zz, tz.length)), 0);
                for (let Xz = 0; Xz < 5; Xz++) {
                  let Xz = zz.sliceDoc(Wz.from, Math.min(Wz.to, Wz.from + sz.length + Oz)),
                    oz = Xz.indexOf(sz);
                  if (!oz || oz > -1 && Fz.indexOf(Xz.slice(0, oz)) > -1) {
                    let tz = Wz.firstChild;
                    for (; tz && tz.from == Wz.from && tz.to - tz.from > sz.length + oz;) {
                      if (zz.sliceDoc(tz.to - sz.length, tz.to) == sz) return !1;
                      tz = tz.firstChild
                    }
                    return !0
                  }
                  let vz = Wz.to == tz && Wz.parent;
                  if (!vz) break;
                  Wz = vz
                }
                return !1
              }(zz, Uz, tz, Oz)) return {
              changes: {
                insert: tz + tz,
                from: Uz
              },
              effects: Dt.of(Uz + tz.length),
              range: Fz.l.cursor(Uz + tz.length)
            }
          }
          return {
            range: oz = Wz
          }
        }));
      return oz ? null : zz.update(vz, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Tt(zz, tz) {
      let sz = (0, Xz.mb)(zz).resolveInner(tz + 1);
      return sz.parent && sz.from == tz
    }

    function ct(zz, tz, sz) {
      let Wz = zz.charCategorizer(tz);
      if (Wz(zz.sliceDoc(tz - 1, tz)) != Fz.i.Word) return tz;
      for (let Xz of sz) {
        let sz = tz - Xz.length;
        if (zz.sliceDoc(sz, tz) == Xz && Wz(zz.sliceDoc(sz - 1, sz)) != Fz.i.Word) return sz
      }
      return -1
    }

    function jt() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Vz, kz, Yz.of(zz), qz, yt, Rz]
    }
    const At = [{
        key: "Ctrl-Space",
        run: nz
      }, {
        mac: "Alt-`",
        run: nz
      }, {
        mac: "Alt-i",
        run: nz
      }, {
        key: "Escape",
        run: zz => {
          let tz = zz.state.field(kz, !1);
          return !(!tz || !tz.active.some((zz => 0 != zz.state))) && (zz.dispatch({
            effects: Bz.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: lz(!0)
      }, {
        key: "ArrowUp",
        run: lz(!1)
      }, {
        key: "PageDown",
        run: lz(!0, "page")
      }, {
        key: "PageUp",
        run: lz(!1, "page")
      }, {
        key: "Enter",
        run: zz => {
          let tz = zz.state.field(kz, !1);
          return !(zz.state.readOnly || !tz || !tz.open || tz.open.selected < 0 || tz.open.disabled || Date.now() - tz.open.timestamp < zz.state.facet(Yz).interactionDelay) && iz(zz, tz.open.options[tz.open.selected])
        }
      }],
      yt = Fz.x.highest(Wz.T.computeN([Yz], (zz => zz.facet(Yz).defaultKeymap ? [At] : [])))
  },
  40566: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Uz,
      d: () => Nz,
      e: () => Kz,
      f: () => uz
    });
    var Fz = sz(40427);
    class Wz {
      constructor(zz, tz, sz, Fz) {
        this.origin = zz, this.changes = tz, this.effects = sz, this.clientID = Fz
      }
    }
    class Xz {
      constructor(zz, tz) {
        this.version = zz, this.unconfirmed = tz
      }
    }
    const Oz = Fz.q.define({
        combine(zz) {
          let tz = (0, Fz.Q)(zz, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: zz => zz
          });
          return null == tz.clientID && (tz.clientID = zz.length && zz[0].generatedID || ""), tz
        }
      }),
      oz = Fz.e.define(),
      vz = Fz.H.define({
        create: zz => new Xz(zz.facet(Oz).startVersion, []),
        update(zz, tz) {
          let sz = tz.annotation(oz);
          if (sz) return sz;
          let {
            sharedEffects: Fz,
            clientID: vz
          } = tz.startState.facet(Oz), Uz = Fz(tz);
          return Uz.length || !tz.changes.empty ? new Xz(zz.version, zz.unconfirmed.concat(new Wz(tz, tz.changes, Uz, vz))) : zz
        }
      });

    function Uz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [vz, Oz.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, zz))]
    }

    function Kz(zz, tz) {
      let {
        version: sz,
        unconfirmed: Uz
      } = zz.field(vz), {
        clientID: Kz
      } = zz.facet(Oz);
      sz += tz.length;
      let uz = [],
        Nz = null,
        bz = 0;
      for (let Wz of tz) {
        let zz = bz < Uz.length ? Uz[bz] : null;
        zz && zz.clientID == Wz.clientID ? (Nz && (Nz = Nz.map(zz.changes, !0)), uz = Fz.F.mapEffects(uz, Wz.changes), bz++) : (uz = Fz.F.mapEffects(uz, Wz.changes), Wz.effects && (uz = uz.concat(Wz.effects)), Nz = Nz ? Nz.compose(Wz.changes) : Wz.changes)
      }
      if (bz && (Uz = Uz.slice(bz)), Uz.length && (Nz && (Uz = Uz.map((zz => {
          let tz = zz.changes.map(Nz);
          return Nz = Nz.map(zz.changes, !0), new Wz(zz.origin, tz, Fz.F.mapEffects(zz.effects, Nz), Kz)
        }))), uz.length)) {
        let zz = Uz.reduce(((zz, tz) => zz.compose(tz.changes)), Fz.ChangeSet.empty(Uz[0].changes.length));
        uz = Fz.F.mapEffects(uz, zz)
      }
      return Nz ? zz.update({
        changes: Nz,
        effects: uz,
        annotations: [Fz.K.addToHistory.of(!1), Fz.K.remote.of(!0), oz.of(new Xz(sz, Uz))],
        filter: !1
      }) : zz.update({
        annotations: [oz.of(new Xz(sz, Uz))]
      })
    }

    function uz(zz) {
      return zz.field(vz).unconfirmed
    }

    function Nz(zz) {
      return zz.field(vz).version
    }
  },
  40471: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Dt
    });
    var Fz = sz(40457);
    class Wz {
      constructor(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        let Uz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Kz = arguments.length > 10 ? arguments[10] : void 0;
        this.p = zz, this.stack = tz, this.state = sz, this.reducePos = Fz, this.pos = Wz, this.score = Xz, this.buffer = Oz, this.bufferBase = oz, this.curContext = vz, this.lookAhead = Uz, this.parent = Kz
      }
      toString() {
        return `[${this.stack.filter(((zz,tz)=>tz%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = zz.parser.context;
        return new Wz(zz, [], tz, sz, sz, 0, [], 0, Fz ? new Xz(Fz, Fz.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(zz, tz) {
        this.stack.push(this.state, tz, this.bufferBase + this.buffer.length), this.state = zz
      }
      reduce(zz) {
        var tz;
        let sz = zz >> 19,
          Fz = 65535 & zz,
          {
            parser: Wz
          } = this.p,
          Xz = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          Oz = Wz.dynamicPrecedence(Fz);
        if (Oz && (this.score += Oz), 0 == sz) return this.pushState(Wz.getGoto(this.state, Fz, !0), this.reducePos), Fz < Wz.minRepeatTerm && this.storeNode(Fz, this.reducePos, this.reducePos, Xz ? 8 : 4, !0), void this.reduceContext(Fz, this.reducePos);
        let oz = this.stack.length - 3 * (sz - 1) - (262144 & zz ? 6 : 0),
          vz = oz ? this.stack[oz - 2] : this.p.du[0].from,
          Uz = this.reducePos - vz;
        Uz >= 2e3 && !(null === (tz = this.p.parser.nodeSet.types[Fz]) || void 0 === tz ? void 0 : tz.isAnonymous) && (vz == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Uz) : this.p.lastBigReductionSize < Uz && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = vz, this.p.lastBigReductionSize = Uz));
        let Kz = oz ? this.stack[oz - 1] : 0,
          uz = this.bufferBase + this.buffer.length - Kz;
        if (Fz < Wz.minRepeatTerm || 131072 & zz) {
          let zz = Wz.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Fz, vz, zz, uz + 4, !0)
        }
        if (262144 & zz) this.state = this.stack[oz];
        else {
          let zz = this.stack[oz - 3];
          this.state = Wz.getGoto(zz, Fz, !0)
        }
        for (; this.stack.length > oz;) this.stack.pop();
        this.reduceContext(Fz, vz)
      }
      storeNode(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == zz && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let zz = this,
            Fz = this.buffer.length;
          if (0 == Fz && zz.parent && (Fz = zz.bufferBase - zz.parent.bufferBase, zz = zz.parent), Fz > 0 && 0 == zz.buffer[Fz - 4] && zz.buffer[Fz - 1] > -1) {
            if (tz == sz) return;
            if (zz.buffer[Fz - 2] >= tz) return void(zz.buffer[Fz - 2] = sz)
          }
        }
        if (Wz && this.pos != sz) {
          let Wz = this.buffer.length;
          if (Wz > 0 && (0 != this.buffer[Wz - 4] || this.buffer[Wz - 1] < 0)) {
            let zz = !1;
            for (let tz = Wz; tz > 0 && this.buffer[tz - 2] > sz; tz -= 4)
              if (this.buffer[tz - 1] >= 0) {
                zz = !0;
                break
              } if (zz)
              for (; Wz > 0 && this.buffer[Wz - 2] > sz;) this.buffer[Wz] = this.buffer[Wz - 4], this.buffer[Wz + 1] = this.buffer[Wz - 3], this.buffer[Wz + 2] = this.buffer[Wz - 2], this.buffer[Wz + 3] = this.buffer[Wz - 1], Wz -= 4, Fz > 4 && (Fz -= 4)
          }
          this.buffer[Wz] = zz, this.buffer[Wz + 1] = tz, this.buffer[Wz + 2] = sz, this.buffer[Wz + 3] = Fz
        } else this.buffer.push(zz, tz, sz, Fz)
      }
      shift(zz, tz, sz, Fz) {
        if (131072 & zz) this.pushState(65535 & zz, this.pos);
        else if (0 == (262144 & zz)) {
          let Wz = zz,
            {
              parser: Xz
            } = this.p;
          this.pos = Fz;
          let Oz = Xz.stateFlag(Wz, 1);
          !Oz && (Fz > sz || tz <= Xz.maxNode) && (this.reducePos = Fz), this.pushState(Wz, Oz ? sz : Math.min(sz, this.reducePos)), this.shiftContext(tz, sz), tz <= Xz.maxNode && this.buffer.push(tz, sz, Fz, 4)
        } else this.pos = Fz, this.shiftContext(tz, sz), tz <= this.p.parser.maxNode && this.buffer.push(tz, sz, Fz, 4)
      }
      apply(zz, tz, sz, Fz) {
        65536 & zz ? this.reduce(zz) : this.shift(zz, tz, sz, Fz)
      }
      useNode(zz, tz) {
        let sz = this.p.reused.length - 1;
        (sz < 0 || this.p.reused[sz] != zz) && (this.p.reused.push(zz), sz++);
        let Fz = this.pos;
        this.reducePos = this.pos = Fz + zz.length, this.pushState(tz, Fz), this.buffer.push(sz, Fz, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, zz, this, this.p.stream.reset(this.pos - zz.length)))
      }
      split() {
        let zz = this,
          tz = zz.buffer.length;
        for (; tz > 0 && zz.buffer[tz - 2] > zz.reducePos;) tz -= 4;
        let sz = zz.buffer.slice(tz),
          Fz = zz.bufferBase + tz;
        for (; zz && Fz == zz.bufferBase;) zz = zz.parent;
        return new Wz(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, sz, Fz, this.curContext, this.lookAhead, zz)
      }
      recoverByDelete(zz, tz) {
        let sz = zz <= this.p.parser.maxNode;
        sz && this.storeNode(zz, this.pos, tz, 4), this.storeNode(0, this.pos, tz, sz ? 8 : 4), this.pos = this.reducePos = tz, this.score -= 190
      }
      canShift(zz) {
        for (let tz = new Oz(this);;) {
          let sz = this.p.parser.stateSlot(tz.state, 4) || this.p.parser.hasAction(tz.state, zz);
          if (0 == sz) return !1;
          if (0 == (65536 & sz)) return !0;
          tz.reduce(sz)
        }
      }
      recoverByInsert(zz) {
        if (this.stack.length >= 300) return [];
        let tz = this.p.parser.nextStates(this.state);
        if (tz.length > 8 || this.stack.length >= 120) {
          let sz = [];
          for (let Fz, Wz = 0; Wz < tz.length; Wz += 2)(Fz = tz[Wz + 1]) != this.state && this.p.parser.hasAction(Fz, zz) && sz.push(tz[Wz], Fz);
          if (this.stack.length < 120)
            for (let zz = 0; sz.length < 8 && zz < tz.length; zz += 2) {
              let Fz = tz[zz + 1];
              sz.some(((zz, tz) => 1 & tz && zz == Fz)) || sz.push(tz[zz], Fz)
            }
          tz = sz
        }
        let sz = [];
        for (let Fz = 0; Fz < tz.length && sz.length < 4; Fz += 2) {
          let zz = tz[Fz + 1];
          if (zz == this.state) continue;
          let Wz = this.split();
          Wz.pushState(zz, this.pos), Wz.storeNode(0, Wz.pos, Wz.pos, 4, !0), Wz.shiftContext(tz[Fz], this.pos), Wz.reducePos = this.pos, Wz.score -= 200, sz.push(Wz)
        }
        return sz
      }
      forceReduce() {
        let {
          parser: zz
        } = this.p, tz = zz.stateSlot(this.state, 5);
        if (0 == (65536 & tz)) return !1;
        if (!zz.validAction(this.state, tz)) {
          let sz = tz >> 19,
            Fz = 65535 & tz,
            Wz = this.stack.length - 3 * sz;
          if (Wz < 0 || zz.getGoto(this.stack[Wz], Fz, !1) < 0) {
            let zz = this.findForcedReduction();
            if (null == zz) return !1;
            tz = zz
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(tz), !0
      }
      findForcedReduction() {
        let {
          parser: zz
        } = this.p, tz = [], sz = (Fz, Wz) => {
          if (!tz.includes(Fz)) return tz.push(Fz), zz.allActions(Fz, (tz => {
            if (393216 & tz);
            else if (65536 & tz) {
              let sz = (tz >> 19) - Wz;
              if (sz > 1) {
                let Fz = 65535 & tz,
                  Wz = this.stack.length - 3 * sz;
                if (Wz >= 0 && zz.getGoto(this.stack[Wz], Fz, !1) >= 0) return sz << 19 | 65536 | Fz
              }
            } else {
              let zz = sz(tz, Wz + 1);
              if (null != zz) return zz
            }
          }))
        };
        return sz(this.state, 0)
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
          parser: zz
        } = this.p;
        return 65535 == zz.data[zz.stateSlot(this.state, 1)] && !zz.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(zz) {
        if (this.state != zz.state || this.stack.length != zz.stack.length) return !1;
        for (let tz = 0; tz < this.stack.length; tz += 3)
          if (this.stack[tz] != zz.stack[tz]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(zz) {
        return this.p.parser.dialect.flags[zz]
      }
      shiftContext(zz, tz) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, zz, this, this.p.stream.reset(tz)))
      }
      reduceContext(zz, tz) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, zz, this, this.p.stream.reset(tz)))
      }
      emitContext() {
        let zz = this.buffer.length - 1;
        (zz < 0 || -3 != this.buffer[zz]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let zz = this.buffer.length - 1;
        (zz < 0 || -4 != this.buffer[zz]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(zz) {
        if (zz != this.curContext.context) {
          let tz = new Xz(this.curContext.tracker, zz);
          tz.hash != this.curContext.hash && this.emitContext(), this.curContext = tz
        }
      }
      setLookAhead(zz) {
        return !(zz <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = zz, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class Xz {
      constructor(zz, tz) {
        this.tracker = zz, this.context = tz, this.hash = zz.strict ? zz.hash(tz) : 0
      }
    }
    class Oz {
      constructor(zz) {
        this.start = zz, this.state = zz.state, this.stack = zz.stack, this.base = this.stack.length
      }
      reduce(zz) {
        let tz = 65535 & zz,
          sz = zz >> 19;
        0 == sz ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (sz - 1);
        let Fz = this.start.p.parser.getGoto(this.stack[this.base - 3], tz, !0);
        this.state = Fz
      }
    }
    class oz {
      constructor(zz, tz, sz) {
        this.stack = zz, this.pos = tz, this.index = sz, this.buffer = zz.buffer, 0 == this.index && this.maybeNext()
      }
      static create(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.bufferBase + zz.buffer.length;
        return new oz(zz, tz, tz - zz.bufferBase)
      }
      maybeNext() {
        let zz = this.stack.parent;
        null != zz && (this.index = this.stack.bufferBase - zz.bufferBase, this.stack = zz, this.buffer = zz.buffer)
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
        return new oz(this.stack, this.pos, this.index)
      }
    }

    function vz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof zz) return zz;
      let sz = null;
      for (let Fz = 0, Wz = 0; Fz < zz.length;) {
        let Xz = 0;
        for (;;) {
          let tz = zz.charCodeAt(Fz++),
            sz = !1;
          if (126 == tz) {
            Xz = 65535;
            break
          }
          tz >= 92 && tz--, tz >= 34 && tz--;
          let Wz = tz - 32;
          if (Wz >= 46 && (Wz -= 46, sz = !0), Xz += Wz, sz) break;
          Xz *= 46
        }
        sz ? sz[Wz++] = Xz : sz = new tz(Xz)
      }
      return sz
    }
    class Uz {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const Kz = new Uz;
    class uz {
      constructor(zz, tz) {
        this.input = zz, this.du = tz, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Kz, this.rangeIndex = 0, this.pos = this.chunkPos = tz[0].from, this.range = tz[0], this.end = tz[tz.length - 1].to, this.readNext()
      }
      resolveOffset(zz, tz) {
        let sz = this.range,
          Fz = this.rangeIndex,
          Wz = this.pos + zz;
        for (; Wz < sz.from;) {
          if (!Fz) return null;
          let zz = this.du[--Fz];
          Wz -= sz.from - zz.to, sz = zz
        }
        for (; tz < 0 ? Wz > sz.to : Wz >= sz.to;) {
          if (Fz == this.du.length - 1) return null;
          let zz = this.du[++Fz];
          Wz += zz.from - sz.to, sz = zz
        }
        return Wz
      }
      clipPos(zz) {
        if (zz >= this.range.from && zz < this.range.to) return zz;
        for (let tz of this.du)
          if (tz.to > zz) return Math.max(zz, tz.from);
        return this.end
      }
      peek(zz) {
        let tz, sz, Fz = this.chunkOff + zz;
        if (Fz >= 0 && Fz < this.chunk.length) tz = this.pos + zz, sz = this.chunk.charCodeAt(Fz);
        else {
          let Fz = this.resolveOffset(zz, 1);
          if (null == Fz) return -1;
          if (tz = Fz, tz >= this.chunk2Pos && tz < this.chunk2Pos + this.chunk2.length) sz = this.chunk2.charCodeAt(tz - this.chunk2Pos);
          else {
            let zz = this.rangeIndex,
              Fz = this.range;
            for (; Fz.to <= tz;) Fz = this.du[++zz];
            this.chunk2 = this.input.chunk(this.chunk2Pos = tz), tz + this.chunk2.length > Fz.to && (this.chunk2 = this.chunk2.slice(0, Fz.to - tz)), sz = this.chunk2.charCodeAt(0)
          }
        }
        return tz >= this.token.lookAhead && (this.token.lookAhead = tz + 1), sz
      }
      acceptToken(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = tz ? this.resolveOffset(tz, -1) : this.pos;
        if (null == sz || sz < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = zz, this.token.end = sz
      }
      acceptTokenTo(zz, tz) {
        this.token.value = zz, this.token.end = tz
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: zz,
            chunkPos: tz
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = zz, this.chunk2Pos = tz, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let zz = this.input.chunk(this.pos),
            tz = this.pos + zz.length;
          this.chunk = tz > this.range.to ? zz.slice(0, this.range.to - this.pos) : zz, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += zz; this.pos + zz >= this.range.to;) {
          if (this.rangeIndex == this.du.length - 1) return this.setDone();
          zz -= this.range.to - this.pos, this.range = this.du[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += zz, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.du[this.rangeIndex = this.du.length - 1], this.chunk = "", this.next = -1
      }
      reset(zz, tz) {
        if (tz ? (this.token = tz, tz.start = zz, tz.lookAhead = zz + 1, tz.value = tz.extended = -1) : this.token = Kz, this.pos != zz) {
          if (this.pos = zz, zz == this.end) return this.setDone(), this;
          for (; zz < this.range.from;) this.range = this.du[--this.rangeIndex];
          for (; zz >= this.range.to;) this.range = this.du[++this.rangeIndex];
          zz >= this.chunkPos && zz < this.chunkPos + this.chunk.length ? this.chunkOff = zz - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(zz, tz) {
        if (zz >= this.chunkPos && tz <= this.chunkPos + this.chunk.length) return this.chunk.slice(zz - this.chunkPos, tz - this.chunkPos);
        if (zz >= this.chunk2Pos && tz <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(zz - this.chunk2Pos, tz - this.chunk2Pos);
        if (zz >= this.range.from && tz <= this.range.to) return this.input.read(zz, tz);
        let sz = "";
        for (let Fz of this.du) {
          if (Fz.from >= tz) break;
          Fz.to > zz && (sz += this.input.read(Math.max(Fz.from, zz), Math.min(Fz.to, tz)))
        }
        return sz
      }
    }
    class Nz {
      constructor(zz, tz) {
        this.data = zz, this.id = tz
      }
      token(zz, tz) {
        let {
          parser: sz
        } = tz.p;
        Dz(this.data, zz, tz, this.id, sz.data, sz.tokenPrecTable)
      }
    }
    Nz.prototype.contextual = Nz.prototype.fallback = Nz.prototype.extend = !1;
    class bz {
      constructor(zz, tz, sz) {
        this.precTable = tz, this.elseToken = sz, this.data = "string" == typeof zz ? vz(zz) : zz
      }
      token(zz, tz) {
        let sz = zz.pos,
          Fz = 0;
        for (;;) {
          let sz = zz.next < 0,
            Wz = zz.resolveOffset(1, 1);
          if (Dz(this.data, zz, tz, 0, this.data, this.precTable), zz.token.value > -1) break;
          if (null == this.elseToken) return;
          if (sz || Fz++, null == Wz) break;
          zz.reset(Wz, zz.token)
        }
        Fz && (zz.reset(sz, zz.token), zz.acceptToken(this.elseToken, Fz))
      }
    }
    bz.prototype.contextual = Nz.prototype.fallback = Nz.prototype.extend = !1;
    class wz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = zz, this.contextual = !!tz.contextual, this.fallback = !!tz.fallback, this.extend = !!tz.extend
      }
    }

    function Dz(zz, tz, sz, Fz, Wz, Xz) {
      let Oz = 0,
        oz = 1 << Fz,
        {
          dialect: vz
        } = sz.p.parser;
      zz: for (; 0 != (oz & zz[Oz]);) {
        let sz = zz[Oz + 1];
        for (let uz = Oz + 3; uz < sz; uz += 2)
          if ((zz[uz + 1] & oz) > 0) {
            let sz = zz[uz];
            if (vz.allows(sz) && (-1 == tz.token.value || tz.token.value == sz || Hz(sz, tz.token.value, Wz, Xz))) {
              tz.acceptToken(sz);
              break
            }
          } let Fz = tz.next,
          Uz = 0,
          Kz = zz[Oz + 2];
        if (!(tz.next < 0 && Kz > Uz && 65535 == zz[sz + 3 * Kz - 3])) {
          for (; Uz < Kz;) {
            let Wz = Uz + Kz >> 1,
              Xz = sz + Wz + (Wz << 1),
              oz = zz[Xz],
              vz = zz[Xz + 1] || 65536;
            if (Fz < oz) Kz = Wz;
            else {
              if (!(Fz >= vz)) {
                Oz = zz[Xz + 2], tz.advance();
                continue zz
              }
              Uz = Wz + 1
            }
          }
          break
        }
        Oz = zz[sz + 3 * Kz - 1]
      }
    }

    function gz(zz, tz, sz) {
      for (let Fz, Wz = tz; 65535 != (Fz = zz[Wz]); Wz++)
        if (Fz == sz) return Wz - tz;
      return -1
    }

    function Hz(zz, tz, sz, Fz) {
      let Wz = gz(sz, Fz, tz);
      return Wz < 0 || gz(sz, Fz, zz) < Wz
    }
    const Bz = "undefined" != typeof process && {
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
    let Pz = null;

    function rz(zz, tz, sz) {
      let Wz = zz.cursor(Fz.d.IncludeAnonymous);
      for (Wz.moveTo(tz);;)
        if (!(sz < 0 ? Wz.childBefore(tz) : Wz.childAfter(tz)))
          for (;;) {
            if ((sz < 0 ? Wz.to < tz : Wz.from > tz) && !Wz.type.isError) return sz < 0 ? Math.max(0, Math.min(Wz.to - 1, tz - 25)) : Math.min(zz.length, Math.max(Wz.from + 1, tz + 25));
            if (sz < 0 ? Wz.prevSibling() : Wz.nextSibling()) break;
            if (!Wz.parent()) return sz < 0 ? 0 : zz.length
          }
    }
    class Yz {
      constructor(zz, tz) {
        this.fragments = zz, this.nodeSet = tz, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let zz = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (zz) {
          for (this.safeFrom = zz.openStart ? rz(zz.tree, zz.from + zz.offset, 1) - zz.offset : zz.from, this.safeTo = zz.openEnd ? rz(zz.tree, zz.to + zz.offset, -1) - zz.offset : zz.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(zz.tree), this.start.push(-zz.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(zz) {
        if (zz < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= zz;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let tz = this.trees.length - 1;
          if (tz < 0) return this.nextFragment(), null;
          let sz = this.trees[tz],
            Wz = this.index[tz];
          if (Wz == sz.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let Xz = sz.children[Wz],
            Oz = this.start[tz] + sz.positions[Wz];
          if (Oz > zz) return this.nextStart = Oz, null;
          if (Xz instanceof Fz.r) {
            if (Oz == zz) {
              if (Oz < this.safeFrom) return null;
              let zz = Oz + Xz.length;
              if (zz <= this.safeTo) {
                let tz = Xz.prop(Fz.e.lookAhead);
                if (!tz || zz + tz < this.fragment.to) return Xz
              }
            }
            this.index[tz]++, Oz + Xz.length >= Math.max(this.safeFrom, zz) && (this.trees.push(Xz), this.start.push(Oz), this.index.push(0))
          } else this.index[tz]++, this.nextStart = Oz + Xz.length
        }
      }
    }
    class xz {
      constructor(zz, tz) {
        this.stream = tz, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = zz.tokenizers.map((zz => new Uz))
      }
      getActions(zz) {
        let tz = 0,
          sz = null,
          {
            parser: Fz
          } = zz.p,
          {
            tokenizers: Wz
          } = Fz,
          Xz = Fz.stateSlot(zz.state, 3),
          Oz = zz.curContext ? zz.curContext.hash : 0,
          oz = 0;
        for (let vz = 0; vz < Wz.length; vz++) {
          if (0 == (1 << vz & Xz)) continue;
          let Fz = Wz[vz],
            Uz = this.tokens[vz];
          if ((!sz || Fz.fallback) && ((Fz.contextual || Uz.start != zz.pos || Uz.mask != Xz || Uz.context != Oz) && (this.updateCachedToken(Uz, Fz, zz), Uz.mask = Xz, Uz.context = Oz), Uz.lookAhead > Uz.end + 25 && (oz = Math.max(Uz.lookAhead, oz)), 0 != Uz.value)) {
            let Wz = tz;
            if (Uz.extended > -1 && (tz = this.addActions(zz, Uz.extended, Uz.end, tz)), tz = this.addActions(zz, Uz.value, Uz.end, tz), !Fz.extend && (sz = Uz, tz > Wz)) break
          }
        }
        for (; this.actions.length > tz;) this.actions.pop();
        return oz && zz.setLookAhead(oz), sz || zz.pos != this.stream.end || (sz = new Uz, sz.value = zz.p.parser.eofTerm, sz.start = sz.end = zz.pos, tz = this.addActions(zz, sz.value, sz.end, tz)), this.mainToken = sz, this.actions
      }
      getMainToken(zz) {
        if (this.mainToken) return this.mainToken;
        let tz = new Uz,
          {
            pos: sz,
            p: Fz
          } = zz;
        return tz.start = sz, tz.end = Math.min(sz + 1, Fz.stream.end), tz.value = sz == Fz.stream.end ? Fz.parser.eofTerm : 0, tz
      }
      updateCachedToken(zz, tz, sz) {
        let Fz = this.stream.clipPos(sz.pos);
        if (tz.token(this.stream.reset(Fz, zz), sz), zz.value > -1) {
          let {
            parser: tz
          } = sz.p;
          for (let Fz = 0; Fz < tz.specialized.length; Fz++)
            if (tz.specialized[Fz] == zz.value) {
              let Wz = tz.specializers[Fz](this.stream.read(zz.start, zz.end), sz);
              if (Wz >= 0 && sz.p.parser.dialect.allows(Wz >> 1)) {
                0 == (1 & Wz) ? zz.value = Wz >> 1 : zz.extended = Wz >> 1;
                break
              }
            }
        } else zz.value = 0, zz.end = this.stream.clipPos(Fz + 1)
      }
      putAction(zz, tz, sz, Fz) {
        for (let Wz = 0; Wz < Fz; Wz += 3)
          if (this.actions[Wz] == zz) return Fz;
        return this.actions[Fz++] = zz, this.actions[Fz++] = tz, this.actions[Fz++] = sz, Fz
      }
      addActions(zz, tz, sz, Fz) {
        let {
          state: Wz
        } = zz, {
          parser: Xz
        } = zz.p, {
          data: Oz
        } = Xz;
        for (let oz = 0; oz < 2; oz++)
          for (let zz = Xz.stateSlot(Wz, oz ? 2 : 1);; zz += 3) {
            if (65535 == Oz[zz]) {
              if (1 != Oz[zz + 1]) {
                0 == Fz && 2 == Oz[zz + 1] && (Fz = this.putAction(Zz(Oz, zz + 2), tz, sz, Fz));
                break
              }
              zz = Zz(Oz, zz + 2)
            }
            Oz[zz] == tz && (Fz = this.putAction(Zz(Oz, zz + 1), tz, sz, Fz))
          }
        return Fz
      }
    }
    class mz {
      constructor(zz, tz, sz, Fz) {
        this.parser = zz, this.input = tz, this.du = Fz, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new uz(tz, Fz), this.tokens = new xz(zz, this.stream), this.topTerm = zz.top[1];
        let {
          from: Xz
        } = Fz[0];
        this.stacks = [Wz.start(this, zz.top[0], Xz)], this.fragments = sz.length && this.stream.end - Xz > 4 * zz.bufferLength ? new Yz(sz, zz.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let zz, tz, sz = this.stacks,
          Fz = this.minStackPos,
          Wz = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == sz.length) {
          let [zz] = sz;
          for (; zz.forceReduce() && zz.stack.length && zz.stack[zz.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let Xz = 0; Xz < sz.length; Xz++) {
          let Oz = sz[Xz];
          for (;;) {
            if (this.tokens.mainToken = null, Oz.pos > Fz) Wz.push(Oz);
            else {
              if (this.advanceStack(Oz, Wz, sz)) continue;
              {
                zz || (zz = [], tz = []), zz.push(Oz);
                let sz = this.tokens.getMainToken(Oz);
                tz.push(sz.value, sz.end)
              }
            }
            break
          }
        }
        if (!Wz.length) {
          let tz = zz && function(zz) {
            let tz = null;
            for (let sz of zz) {
              let zz = sz.p.stoppedAt;
              (sz.pos == sz.p.stream.end || null != zz && sz.pos > zz) && sz.p.parser.stateFlag(sz.state, 2) && (!tz || tz.score < sz.score) && (tz = sz)
            }
            return tz
          }(zz);
          if (tz) return Bz && console.log("Finish with " + this.stackID(tz)), this.stackToTree(tz);
          if (this.parser.strict) throw Bz && zz && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Fz);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && zz) {
          let sz = null != this.stoppedAt && zz[0].pos > this.stoppedAt ? zz[0] : this.runRecovery(zz, tz, Wz);
          if (sz) return Bz && console.log("Force-finish " + this.stackID(sz)), this.stackToTree(sz.forceAll())
        }
        if (this.recovering) {
          let zz = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Wz.length > zz)
            for (Wz.sort(((zz, tz) => tz.score - zz.score)); Wz.length > zz;) Wz.pop();
          Wz.some((zz => zz.reducePos > Fz)) && this.recovering--
        } else if (Wz.length > 1) {
          zz: for (let zz = 0; zz < Wz.length - 1; zz++) {
            let tz = Wz[zz];
            for (let sz = zz + 1; sz < Wz.length; sz++) {
              let Fz = Wz[sz];
              if (tz.sameState(Fz) || tz.buffer.length > 500 && Fz.buffer.length > 500) {
                if (!((tz.score - Fz.score || tz.buffer.length - Fz.buffer.length) > 0)) {
                  Wz.splice(zz--, 1);
                  continue zz
                }
                Wz.splice(sz--, 1)
              }
            }
          }
          Wz.length > 12 && (Wz.sort(((zz, tz) => tz.score - zz.score)), Wz.splice(12, Wz.length - 12))
        }
        this.minStackPos = Wz[0].pos;
        for (let Xz = 1; Xz < Wz.length; Xz++) Wz[Xz].pos < this.minStackPos && (this.minStackPos = Wz[Xz].pos);
        return null
      }
      stopAt(zz) {
        if (null != this.stoppedAt && this.stoppedAt < zz) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = zz
      }
      advanceStack(zz, tz, sz) {
        let Wz = zz.pos,
          {
            parser: Xz
          } = this,
          Oz = Bz ? this.stackID(zz) + " -> " : "";
        if (null != this.stoppedAt && Wz > this.stoppedAt) return zz.forceReduce() ? zz : null;
        if (this.fragments) {
          let tz = zz.curContext && zz.curContext.tracker.strict,
            sz = tz ? zz.curContext.hash : 0;
          for (let oz = this.fragments.nodeAt(Wz); oz;) {
            let Wz = this.parser.nodeSet.types[oz.type.id] == oz.type ? Xz.getGoto(zz.state, oz.type.id) : -1;
            if (Wz > -1 && oz.length && (!tz || (oz.prop(Fz.e.contextHash) || 0) == sz)) return zz.useNode(oz, Wz), Bz && console.log(Oz + this.stackID(zz) + ` (via reuse of ${Xz.getName(oz.type.id)})`), !0;
            if (!(oz instanceof Fz.r) || 0 == oz.children.length || oz.positions[0] > 0) break;
            let vz = oz.children[0];
            if (!(vz instanceof Fz.r && 0 == oz.positions[0])) break;
            oz = vz
          }
        }
        let oz = Xz.stateSlot(zz.state, 4);
        if (oz > 0) return zz.reduce(oz), Bz && console.log(Oz + this.stackID(zz) + ` (via always-reduce ${Xz.getName(65535&oz)})`), !0;
        if (zz.stack.length >= 8400)
          for (; zz.stack.length > 6e3 && zz.forceReduce(););
        let vz = this.tokens.getActions(zz);
        for (let Fz = 0; Fz < vz.length;) {
          let oz = vz[Fz++],
            Uz = vz[Fz++],
            Kz = vz[Fz++],
            uz = Fz == vz.length || !sz,
            Nz = uz ? zz : zz.split(),
            bz = this.tokens.mainToken;
          if (Nz.apply(oz, Uz, bz ? bz.start : Nz.pos, Kz), Bz && console.log(Oz + this.stackID(Nz) + ` (via ${0==(65536&oz)?"shift":`reduce of ${Xz.getName(65535&oz)}`} for ${Xz.getName(Uz)} @ ${Wz}${Nz==zz?"":", split"})`), uz) return !0;
          Nz.pos > Wz ? tz.push(Nz) : sz.push(Nz)
        }
        return !1
      }
      advanceFully(zz, tz) {
        let sz = zz.pos;
        for (;;) {
          if (!this.advanceStack(zz, null, null)) return !1;
          if (zz.pos > sz) return Jz(zz, tz), !0
        }
      }
      runRecovery(zz, tz, sz) {
        let Fz = null,
          Wz = !1;
        for (let Xz = 0; Xz < zz.length; Xz++) {
          let Oz = zz[Xz],
            oz = tz[Xz << 1],
            vz = tz[1 + (Xz << 1)],
            Uz = Bz ? this.stackID(Oz) + " -> " : "";
          if (Oz.deadEnd) {
            if (Wz) continue;
            if (Wz = !0, Oz.restart(), Bz && console.log(Uz + this.stackID(Oz) + " (restarted)"), this.advanceFully(Oz, sz)) continue
          }
          let Kz = Oz.split(),
            uz = Uz;
          for (let zz = 0; zz < 10 && Kz.forceReduce(); zz++) {
            if (Bz && console.log(uz + this.stackID(Kz) + " (via force-reduce)"), this.advanceFully(Kz, sz)) break;
            Bz && (uz = this.stackID(Kz) + " -> ")
          }
          for (let zz of Oz.recoverByInsert(oz)) Bz && console.log(Uz + this.stackID(zz) + " (via recover-insert)"), this.advanceFully(zz, sz);
          this.stream.end > Oz.pos ? (vz == Oz.pos && (vz++, oz = 0), Oz.recoverByDelete(oz, vz), Bz && console.log(Uz + this.stackID(Oz) + ` (via recover-delete ${this.parser.getName(oz)})`), Jz(Oz, sz)) : (!Fz || Fz.score < Kz.score) && (Fz = Kz)
        }
        return Fz
      }
      stackToTree(zz) {
        return zz.close(), Fz.r.build({
          buffer: oz.create(zz),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.du[0].from,
          length: zz.pos - this.du[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(zz) {
        let tz = (Pz || (Pz = new WeakMap)).get(zz);
        return tz || Pz.set(zz, tz = String.fromCodePoint(this.nextStackID++)), tz + zz
      }
    }

    function Jz(zz, tz) {
      for (let sz = 0; sz < tz.length; sz++) {
        let Fz = tz[sz];
        if (Fz.pos == zz.pos && Fz.sameState(zz)) return void(tz[sz].score < zz.score && (tz[sz] = zz))
      }
      tz.push(zz)
    }
    class Iz {
      constructor(zz, tz, sz) {
        this.source = zz, this.flags = tz, this.disabled = sz
      }
      allows(zz) {
        return !this.disabled || 0 == this.disabled[zz]
      }
    }
    const Cz = zz => zz;
    class ez extends Fz.m {
      constructor(zz) {
        if (super(), this.wrappers = [], 14 != zz.version) throw new RangeError(`Parser version (${zz.version}) doesn't match runtime version (14)`);
        let tz = zz.nodeNames.split(" ");
        this.minRepeatTerm = tz.length;
        for (let Fz = 0; Fz < zz.repeatNodeCount; Fz++) tz.push("");
        let sz = Object.keys(zz.topRules).map((tz => zz.topRules[tz][1])),
          Wz = [];
        for (let Fz = 0; Fz < tz.length; Fz++) Wz.push([]);

        function Xz(zz, tz, sz) {
          Wz[zz].push([tz, tz.deserialize(String(sz))])
        }
        if (zz.nodeProps)
          for (let oz of zz.nodeProps) {
            let zz = oz[0];
            "string" == typeof zz && (zz = Fz.e[zz]);
            for (let tz = 1; tz < oz.length;) {
              let sz = oz[tz++];
              if (sz >= 0) Xz(sz, zz, oz[tz++]);
              else {
                let Fz = oz[tz + -sz];
                for (let Wz = -sz; Wz > 0; Wz--) Xz(oz[tz++], zz, Fz);
                tz++
              }
            }
          }
        this.nodeSet = new Fz.i(tz.map(((tz, Xz) => Fz.j.define({
          name: Xz >= this.minRepeatTerm ? void 0 : tz,
          id: Xz,
          props: Wz[Xz],
          top: sz.indexOf(Xz) > -1,
          error: 0 == Xz,
          skipped: zz.skippedNodes && zz.skippedNodes.indexOf(Xz) > -1
        })))), zz.propSources && (this.nodeSet = this.nodeSet.extend(...zz.propSources)), this.strict = !1, this.bufferLength = Fz.b;
        let Oz = vz(zz.tokenData);
        this.context = zz.context, this.specializerSpecs = zz.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Fz = 0; Fz < this.specializerSpecs.length; Fz++) this.specialized[Fz] = this.specializerSpecs[Fz].term;
        this.specializers = this.specializerSpecs.map(Gz), this.states = vz(zz.states, Uint32Array), this.data = vz(zz.stateData), this.goto = vz(zz.goto), this.maxTerm = zz.maxTerm, this.tokenizers = zz.tokenizers.map((zz => "number" == typeof zz ? new Nz(Oz, zz) : zz)), this.topRules = zz.topRules, this.dialects = zz.dialects || {}, this.dynamicPrecedences = zz.dynamicPrecedences || null, this.tokenPrecTable = zz.tokenPrec, this.termNames = zz.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(zz, tz, sz) {
        let Fz = new mz(this, zz, tz, sz);
        for (let Wz of this.wrappers) Fz = Wz(Fz, zz, tz, sz);
        return Fz
      }
      getGoto(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = this.goto;
        if (tz >= Fz[0]) return -1;
        for (let Wz = Fz[tz + 1];;) {
          let tz = Fz[Wz++],
            Xz = 1 & tz,
            Oz = Fz[Wz++];
          if (Xz && sz) return Oz;
          for (let sz = Wz + (tz >> 1); Wz < sz; Wz++)
            if (Fz[Wz] == zz) return Oz;
          if (Xz) return -1
        }
      }
      hasAction(zz, tz) {
        let sz = this.data;
        for (let Fz = 0; Fz < 2; Fz++)
          for (let Wz, Xz = this.stateSlot(zz, Fz ? 2 : 1);; Xz += 3) {
            if (65535 == (Wz = sz[Xz])) {
              if (1 != sz[Xz + 1]) {
                if (2 == sz[Xz + 1]) return Zz(sz, Xz + 2);
                break
              }
              Wz = sz[Xz = Zz(sz, Xz + 2)]
            }
            if (Wz == tz || 0 == Wz) return Zz(sz, Xz + 1)
          }
        return 0
      }
      stateSlot(zz, tz) {
        return this.states[6 * zz + tz]
      }
      stateFlag(zz, tz) {
        return (this.stateSlot(zz, 0) & tz) > 0
      }
      validAction(zz, tz) {
        return !!this.allActions(zz, (zz => zz == tz || null))
      }
      allActions(zz, tz) {
        let sz = this.stateSlot(zz, 4),
          Fz = sz ? tz(sz) : void 0;
        for (let Wz = this.stateSlot(zz, 1); null == Fz; Wz += 3) {
          if (65535 == this.data[Wz]) {
            if (1 != this.data[Wz + 1]) break;
            Wz = Zz(this.data, Wz + 2)
          }
          Fz = tz(Zz(this.data, Wz + 1))
        }
        return Fz
      }
      nextStates(zz) {
        let tz = [];
        for (let sz = this.stateSlot(zz, 1);; sz += 3) {
          if (65535 == this.data[sz]) {
            if (1 != this.data[sz + 1]) break;
            sz = Zz(this.data, sz + 2)
          }
          if (0 == (1 & this.data[sz + 2])) {
            let zz = this.data[sz + 1];
            tz.some(((tz, sz) => 1 & sz && tz == zz)) || tz.push(this.data[sz], zz)
          }
        }
        return tz
      }
      configure(zz) {
        let tz = Object.assign(Object.create(ez.prototype), this);
        if (zz.props && (tz.nodeSet = this.nodeSet.extend(...zz.props)), zz.top) {
          let sz = this.topRules[zz.top];
          if (!sz) throw new RangeError(`Invalid top rule name ${zz.top}`);
          tz.top = sz
        }
        return zz.tokenizers && (tz.tokenizers = this.tokenizers.map((tz => {
          let sz = zz.tokenizers.find((zz => zz.from == tz));
          return sz ? sz.to : tz
        }))), zz.specializers && (tz.specializers = this.specializers.slice(), tz.specializerSpecs = this.specializerSpecs.map(((sz, Fz) => {
          let Wz = zz.specializers.find((zz => zz.from == sz.external));
          if (!Wz) return sz;
          let Xz = Object.assign(Object.assign({}, sz), {
            external: Wz.to
          });
          return tz.specializers[Fz] = Gz(Xz), Xz
        }))), zz.contextTracker && (tz.context = zz.contextTracker), zz.dialect && (tz.dialect = this.parseDialect(zz.dialect)), null != zz.strict && (tz.strict = zz.strict), zz.wrap && (tz.wrappers = tz.wrappers.concat(zz.wrap)), null != zz.bufferLength && (tz.bufferLength = zz.bufferLength), tz
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(zz) {
        return this.termNames ? this.termNames[zz] : String(zz <= this.maxNode && this.nodeSet.types[zz].name || zz)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(zz) {
        let tz = this.dynamicPrecedences;
        return null == tz ? 0 : tz[zz] || 0
      }
      parseDialect(zz) {
        let tz = Object.keys(this.dialects),
          sz = tz.map((() => !1));
        if (zz)
          for (let Wz of zz.split(" ")) {
            let zz = tz.indexOf(Wz);
            zz >= 0 && (sz[zz] = !0)
          }
        let Fz = null;
        for (let Wz = 0; Wz < tz.length; Wz++)
          if (!sz[Wz])
            for (let zz, sz = this.dialects[tz[Wz]]; 65535 != (zz = this.data[sz++]);)(Fz || (Fz = new Uint8Array(this.maxTerm + 1)))[zz] = 1;
        return new Iz(zz, sz, Fz)
      }
      static deserialize(zz) {
        return new ez(zz)
      }
    }

    function Zz(zz, tz) {
      return zz[tz] | zz[tz + 1] << 16
    }

    function Gz(zz) {
      if (zz.external) {
        let tz = zz.extend ? 1 : 0;
        return (sz, Fz) => zz.external(sz, Fz) << 1 | tz
      }
      return zz.get
    }
    var Tz = sz(40463);
    const cz = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      jz = new class {
        constructor(zz) {
          this.start = zz.start, this.shift = zz.shift || Cz, this.reduce = zz.reduce || Cz, this.reuse = zz.reuse || Cz, this.hash = zz.hash || (() => 0), this.strict = !1 !== zz.strict
        }
      }({
        start: !1,
        shift: (zz, tz) => 5 == tz || 6 == tz || 320 == tz ? zz : 321 == tz,
        strict: !1
      }),
      Az = new wz(((zz, tz) => {
        let {
          next: sz
        } = zz;
        (125 == sz || -1 == sz || tz.context) && zz.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      yz = new wz(((zz, tz) => {
        let sz, {
          next: Fz
        } = zz;
        cz.indexOf(Fz) > -1 || (47 != Fz || 47 != (sz = zz.peek(1)) && 42 != sz) && (125 == Fz || 59 == Fz || -1 == Fz || tz.context || zz.acceptToken(316))
      }), {
        contextual: !0
      }),
      Mz = new wz(((zz, tz) => {
        91 != zz.next || tz.context || zz.acceptToken(317)
      }), {
        contextual: !0
      }),
      dz = new wz(((zz, tz) => {
        let {
          next: sz
        } = zz;
        if (43 == sz || 45 == sz) {
          if (zz.advance(), sz == zz.next) {
            zz.advance();
            let sz = !tz.context && tz.canShift(1);
            zz.acceptToken(sz ? 1 : 2)
          }
        } else 63 == sz && 46 == zz.peek(1) && (zz.advance(), zz.advance(), (zz.next < 48 || zz.next > 57) && zz.acceptToken(3))
      }), {
        contextual: !0
      });

    function hz(zz, tz) {
      return zz >= 65 && zz <= 90 || zz >= 97 && zz <= 122 || 95 == zz || zz >= 192 || !tz && zz >= 48 && zz <= 57
    }
    const Qz = new wz(((zz, tz) => {
        if (60 != zz.next || !tz.dialectEnabled(0)) return;
        if (zz.advance(), 47 == zz.next) return;
        let sz = 0;
        for (; cz.indexOf(zz.next) > -1;) zz.advance(), sz++;
        if (hz(zz.next, !0)) {
          for (zz.advance(), sz++; hz(zz.next, !1);) zz.advance(), sz++;
          for (; cz.indexOf(zz.next) > -1;) zz.advance(), sz++;
          if (44 == zz.next) return;
          for (let tz = 0;; tz++) {
            if (7 == tz) {
              if (!hz(zz.next, !0)) return;
              break
            }
            if (zz.next != "extends".charCodeAt(tz)) break;
            zz.advance(), sz++
          }
        }
        zz.acceptToken(4, -sz)
      })),
      kz = (0, Tz.e)({
        "get set async static": Tz.j.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Tz.j.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Tz.j.operatorKeyword,
        "let var const using function class extends": Tz.j.definitionKeyword,
        "import export from": Tz.j.moduleKeyword,
        "with debugger new": Tz.j.keyword,
        TemplateString: Tz.j.special(Tz.j.string),
        super: Tz.j.atom,
        BooleanLiteral: Tz.j.bool,
        this: Tz.j.self,
        null: Tz.j.null,
        Star: Tz.j.modifier,
        VariableName: Tz.j.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Tz.j.function(Tz.j.variableName),
        VariableDefinition: Tz.j.definition(Tz.j.variableName),
        Label: Tz.j.labelName,
        PropertyName: Tz.j.propertyName,
        PrivatePropertyName: Tz.j.special(Tz.j.propertyName),
        "CallExpression/MemberExpression/PropertyName": Tz.j.function(Tz.j.propertyName),
        "FunctionDeclaration/VariableDefinition": Tz.j.function(Tz.j.definition(Tz.j.variableName)),
        "ClassDeclaration/VariableDefinition": Tz.j.definition(Tz.j.className),
        "NewExpression/VariableName": Tz.j.className,
        PropertyDefinition: Tz.j.definition(Tz.j.propertyName),
        PrivatePropertyDefinition: Tz.j.definition(Tz.j.special(Tz.j.propertyName)),
        UpdateOp: Tz.j.updateOperator,
        "LineComment Hashbang": Tz.j.lineComment,
        BlockComment: Tz.j.blockComment,
        Number: Tz.j.number,
        String: Tz.j.string,
        Escape: Tz.j.escape,
        ArithOp: Tz.j.arithmeticOperator,
        LogicOp: Tz.j.logicOperator,
        BitOp: Tz.j.bitwiseOperator,
        CompareOp: Tz.j.compareOperator,
        RegExp: Tz.j.regexp,
        Equals: Tz.j.definitionOperator,
        Arrow: Tz.j.function(Tz.j.punctuation),
        ": Spread": Tz.j.punctuation,
        "( )": Tz.j.paren,
        "[ ]": Tz.j.squareBracket,
        "{ }": Tz.j.brace,
        "InterpolationStart InterpolationEnd": Tz.j.special(Tz.j.brace),
        ".": Tz.j.derefOperator,
        ", ;": Tz.j.separator,
        "@": Tz.j.meta,
        TypeName: Tz.j.typeName,
        TypeDefinition: Tz.j.definition(Tz.j.typeName),
        "type enum interface implements namespace module declare": Tz.j.definitionKeyword,
        "abstract global Privacy readonly override": Tz.j.modifier,
        "is keyof unique infer asserts": Tz.j.operatorKeyword,
        JSXAttributeValue: Tz.j.attributeValue,
        JSXText: Tz.j.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Tz.j.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Tz.j.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Tz.j.attributeName,
        "JSXBuiltin/JSXIdentifier": Tz.j.standard(Tz.j.tagName)
      }),
      iz = {
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
      Lz = {
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
      lz = {
        __proto__: null,
        "<": 193
      },
      nz = ez.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: jz,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [kz],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [yz, Mz, dz, Qz, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Az, new bz("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new bz("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: zz => iz[zz] || -1
        }, {
          term: 343,
          get: zz => Lz[zz] || -1
        }, {
          term: 95,
          get: zz => lz[zz] || -1
        }],
        tokenPrec: 15201
      });
    var az = sz(40448),
      qz = sz(40427),
      Sz = sz(40434),
      Vz = sz(40422);
    const Rz = [(0, Vz.o)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, Vz.o)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, Vz.o)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, Vz.o)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, Vz.o)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, Vz.o)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, Vz.o)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, Vz.o)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, Vz.o)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, Vz.o)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, Vz.o)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      pz = Rz.concat([(0, Vz.o)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, Vz.o)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, Vz.o)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      fz = new Fz.k,
      Ez = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function zt(zz) {
      return (tz, sz) => {
        let Fz = tz.node.getChild("VariableDefinition");
        return Fz && sz(Fz, zz), !0
      }
    }
    const tt = ["FunctionDeclaration"],
      st = {
        FunctionDeclaration: zt("function"),
        ClassDeclaration: zt("class"),
        ClassExpression: () => !0,
        EnumDeclaration: zt("constant"),
        TypeAliasDeclaration: zt("type"),
        NamespaceDeclaration: zt("namespace"),
        VariableDefinition(zz, tz) {
          zz.matchContext(tt) || tz(zz, "variable")
        },
        TypeDefinition(zz, tz) {
          tz(zz, "type")
        },
        __proto__: null
      };

    function Ft(zz, tz) {
      let sz = fz.get(tz);
      if (sz) return sz;
      let Wz = [],
        Xz = !0;

      function Oz(tz, sz) {
        let Fz = zz.sliceString(tz.from, tz.to);
        Wz.push({
          label: Fz,
          type: sz
        })
      }
      return tz.cursor(Fz.d.IncludeAnonymous).iterate((tz => {
        if (Xz) Xz = !1;
        else if (tz.name) {
          let zz = st[tz.name];
          if (zz && zz(tz, Oz) || Ez.has(tz.name)) return !1
        } else if (tz.to - tz.from > 8192) {
          for (let sz of Ft(zz, tz.node)) Wz.push(sz);
          return !1
        }
      })), fz.set(tz, Wz), Wz
    }
    const Wt = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      Xt = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Ot(zz) {
      let tz = (0, az.mb)(zz.state).resolveInner(zz.pos, -1);
      if (Xt.indexOf(tz.name) > -1) return null;
      let sz = "VariableName" == tz.name || tz.to - tz.from < 20 && Wt.test(zz.state.sliceDoc(tz.from, tz.to));
      if (!sz && !zz.explicit) return null;
      let Fz = [];
      for (let Wz = tz; Wz; Wz = Wz.parent) Ez.has(Wz.name) && (Fz = Fz.concat(Ft(zz.state.doc, Wz)));
      return {
        options: Fz,
        from: sz ? tz.from : zz.pos,
        validFor: Wt
      }
    }
    const ot = az.f.define({
        name: "javascript",
        parser: nz.configure({
          props: [az.R.add({
            IfStatement: (0, az.l)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, az.l)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: az.t,
            SwitchBody: zz => {
              let tz = zz.textAfter,
                sz = /^\s*\}/.test(tz),
                Fz = /^\s*(case|default)\b/.test(tz);
              return zz.baseIndent + (sz ? 0 : Fz ? 1 : 2) * zz.unit
            },
            Block: (0, az.r)({
              closing: "}"
            }),
            ArrowFunction: zz => zz.baseIndent + zz.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, az.l)({
              except: /^\s*{/
            }),
            JSXElement(zz) {
              let tz = /^\s*<\//.test(zz.textAfter);
              return zz.lineIndent(zz.node.from) + (tz ? 0 : zz.unit)
            },
            JSXEscape(zz) {
              let tz = /\s*\}/.test(zz.textAfter);
              return zz.lineIndent(zz.node.from) + (tz ? 0 : zz.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": zz => zz.column(zz.node.from) + zz.unit
          }), az.E.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": az.x,
            BlockComment: zz => ({
              from: zz.from + 2,
              to: zz.to - 2
            }),
            JSXElement(zz) {
              let tz = zz.firstChild;
              if (!tz || "JSXSelfClosingTag" == tz.name) return null;
              let sz = zz.lastChild;
              return {
                from: tz.to,
                to: sz.type.isError ? zz.to : sz.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(zz) {
              var tz;
              let sz = null === (tz = zz.firstChild) || void 0 === tz ? void 0 : tz.nextSibling,
                Fz = zz.lastChild;
              return !sz || sz.type.isError ? null : {
                from: sz.to,
                to: Fz.type.isError ? zz.to : Fz.from
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
      vt = {
        test: zz => /^JSX/.test(zz.name),
        facet: (0, az.p)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Ut = ot.configure({
        dialect: "ts"
      }, "typescript"),
      Kt = ot.configure({
        dialect: "jsx",
        props: [az.hb.add((zz => zz.isTop ? [vt] : void 0))]
      }),
      ut = ot.configure({
        dialect: "jsx ts",
        props: [az.hb.add((zz => zz.isTop ? [vt] : void 0))]
      }, "typescript");
    let Nt = zz => ({
      label: zz,
      type: "keyword"
    });
    const bt = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Nt),
      wt = bt.concat(["declare", "implements", "private", "protected", "public"].map(Nt));

    function Dt() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        tz = zz.jsx ? zz.typescript ? ut : Kt : zz.typescript ? Ut : ot,
        sz = zz.typescript ? pz.concat(wt) : Rz.concat(bt);
      return new az.g(tz, [ot.data.of({
        autocomplete: (0, Vz.n)(Xt, (0, Vz.h)(sz))
      }), ot.data.of({
        autocomplete: Ot
      }), zz.jsx ? Bt : []])
    }

    function gt(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz.length;
      for (let Fz = null === tz || void 0 === tz ? void 0 : tz.firstChild; Fz; Fz = Fz.nextSibling)
        if ("JSXIdentifier" == Fz.name || "JSXBuiltin" == Fz.name || "JSXNamespacedName" == Fz.name || "JSXMemberExpression" == Fz.name) return zz.sliceString(Fz.from, Math.min(Fz.to, sz));
      return ""
    }
    const Ht = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Bt = Sz.i.inputHandler.of(((zz, tz, sz, Fz, Wz) => {
        if ((Ht ? zz.composing : zz.compositionStarted) || zz.state.readOnly || tz != sz || ">" != Fz && "/" != Fz || !ot.isActiveAt(zz.state, tz, -1)) return !1;
        let Xz = Wz(),
          {
            state: Oz
          } = Xz,
          oz = Oz.changeByRange((zz => {
            var tz;
            let sz, {
                head: Wz
              } = zz,
              Xz = (0, az.mb)(Oz).resolveInner(Wz - 1, -1);
            if ("JSXStartTag" == Xz.name && (Xz = Xz.parent), Oz.doc.sliceString(Wz - 1, Wz) != Fz || "JSXAttributeValue" == Xz.name && Xz.to > Wz);
            else {
              if (">" == Fz && "JSXFragmentTag" == Xz.name) return {
                range: zz,
                changes: {
                  from: Wz,
                  insert: "</>"
                }
              };
              if ("/" == Fz && "JSXStartCloseTag" == Xz.name) {
                let zz = Xz.parent,
                  Fz = zz.parent;
                if (Fz && zz.from == Wz - 2 && ((sz = gt(Oz.doc, Fz.firstChild, Wz)) || "JSXFragmentTag" == (null === (tz = Fz.firstChild) || void 0 === tz ? void 0 : tz.name))) {
                  let zz = `${sz}>`;
                  return {
                    range: qz.l.cursor(Wz + zz.length, -1),
                    changes: {
                      from: Wz,
                      insert: zz
                    }
                  }
                }
              } else if (">" == Fz) {
                let tz = function(zz) {
                  for (;;) {
                    if ("JSXOpenTag" == zz.name || "JSXSelfClosingTag" == zz.name || "JSXFragmentTag" == zz.name) return zz;
                    if ("JSXEscape" == zz.name || !zz.parent) return null;
                    zz = zz.parent
                  }
                }(Xz);
                if (tz && "JSXOpenTag" == tz.name && !/^\/?>|^<\//.test(Oz.doc.sliceString(Wz, Wz + 2)) && (sz = gt(Oz.doc, tz, Wz))) return {
                  range: zz,
                  changes: {
                    from: Wz,
                    insert: `</${sz}>`
                  }
                }
              }
            }
            return {
              range: zz
            }
          }));
        return !oz.changes.empty && (zz.dispatch([Xz, Oz.update(oz, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40448: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Ut,
      E: () => Vz,
      H: () => Hz,
      L: () => Tz,
      O: () => jz,
      R: () => yz,
      V: () => qz,
      Y: () => cz,
      ab: () => Gz,
      c: () => rt,
      d: () => Az,
      eb: () => Lt,
      f: () => wz,
      g: () => ez,
      hb: () => uz,
      ib: () => Jt,
      jb: () => gz,
      k: () => ht,
      l: () => nz,
      m: () => et,
      mb: () => Dz,
      p: () => Kz,
      r: () => iz,
      t: () => lz,
      w: () => Bt,
      x: () => Rz
    });
    var Fz, Wz = sz(40457),
      Xz = sz(40427),
      Oz = sz(40434),
      oz = sz(40463),
      vz = sz(40440);
    const Uz = new Wz.e;

    function Kz(zz) {
      return Xz.q.define({
        combine: zz ? tz => tz.concat(zz) : void 0
      })
    }
    const uz = new Wz.e;
    class Nz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = zz, this.name = Fz, Xz.p.prototype.hasOwnProperty("tree") || Object.defineProperty(Xz.p.prototype, "tree", {
          get() {
            return Dz(this)
          }
        }), this.parser = tz, this.extension = [Cz.of(this), Xz.p.languageData.of(((zz, tz, sz) => {
          let Fz = bz(zz, tz, sz),
            Wz = Fz.type.prop(Uz);
          if (!Wz) return [];
          let Xz = zz.facet(Wz),
            Oz = Fz.type.prop(uz);
          if (Oz) {
            let Wz = Fz.resolve(tz - Fz.from, sz);
            for (let tz of Oz)
              if (tz.test(Wz, zz)) {
                let sz = zz.facet(tz.facet);
                return "replace" == tz.type ? sz : sz.concat(Xz)
              }
          }
          return Xz
        }))].concat(sz)
      }
      isActiveAt(zz, tz) {
        return bz(zz, tz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Uz) == this.data
      }
      findRegions(zz) {
        let tz = zz.facet(Cz);
        if ((null === tz || void 0 === tz ? void 0 : tz.data) == this.data) return [{
          from: 0,
          to: zz.doc.length
        }];
        if (!tz || !tz.allowsNesting) return [];
        let sz = [],
          Fz = (zz, tz) => {
            if (zz.prop(Uz) == this.data) return void sz.push({
              from: tz,
              to: tz + zz.length
            });
            let Xz = zz.prop(Wz.e.mounted);
            if (Xz) {
              if (Xz.tree.prop(Uz) == this.data) {
                if (Xz.overlay)
                  for (let zz of Xz.overlay) sz.push({
                    from: zz.from + tz,
                    to: zz.to + tz
                  });
                else sz.push({
                  from: tz,
                  to: tz + zz.length
                });
                return
              }
              if (Xz.overlay) {
                let zz = sz.length;
                if (Fz(Xz.tree, Xz.overlay[0].from + tz), sz.length > zz) return
              }
            }
            for (let sz = 0; sz < zz.children.length; sz++) {
              let Xz = zz.children[sz];
              Xz instanceof Wz.r && Fz(Xz, zz.positions[sz] + tz)
            }
          };
        return Fz(Dz(zz), 0), sz
      }
      get allowsNesting() {
        return !0
      }
    }

    function bz(zz, tz, sz) {
      let Fz = zz.facet(Cz),
        Xz = Dz(zz).topNode;
      if (!Fz || Fz.allowsNesting)
        for (let Oz = Xz; Oz; Oz = Oz.enter(tz, sz, Wz.d.ExcludeBuffers | Wz.d.EnterBracketed)) Oz.type.isTop && (Xz = Oz);
      return Xz
    }
    Nz.setState = Xz.F.define();
    class wz extends Nz {
      constructor(zz, tz, sz) {
        super(zz, tz, [], sz), this.parser = tz
      }
      static define(zz) {
        let tz = Kz(zz.languageData);
        return new wz(tz, zz.parser.configure({
          props: [Uz.add((zz => zz.isTop ? tz : void 0))]
        }), zz.name)
      }
      configure(zz, tz) {
        return new wz(this.data, this.parser.configure(zz), tz || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Dz(zz) {
      let tz = zz.field(Nz.state, !1);
      return tz ? tz.tree : Wz.r.empty
    }

    function gz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.doc.length;
      var sz;
      return (null === (sz = zz.field(Nz.state, !1)) || void 0 === sz ? void 0 : sz.context.isDone(tz)) || !1
    }

    function Hz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.viewport.to,
        sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Fz = function(zz, tz) {
          let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Fz;
          let Wz = null === (Fz = zz.field(Nz.state, !1)) || void 0 === Fz ? void 0 : Fz.context;
          if (!Wz) return null;
          let Xz = Wz.viewport;
          Wz.updateViewport({
            from: 0,
            to: tz
          });
          let Oz = Wz.isDone(tz) || Wz.work(sz, tz) ? Wz.tree : null;
          return Wz.updateViewport(Xz), Oz
        }(zz.state, tz, sz);
      return Fz != Dz(zz.state) && zz.dispatch({}), !!Fz
    }
    class Bz {
      constructor(zz) {
        this.doc = zz, this.cursorPos = 0, this.string = "", this.cursor = zz.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(zz) {
        return this.string = this.cursor.next(zz - this.cursorPos).value, this.cursorPos = zz + this.string.length, this.cursorPos - this.string.length
      }
      chunk(zz) {
        return this.syncTo(zz), this.string
      }
      get lineChunks() {
        return !0
      }
      read(zz, tz) {
        let sz = this.cursorPos - this.string.length;
        return zz < sz || tz >= this.cursorPos ? this.doc.sliceString(zz, tz) : this.string.slice(zz - sz, tz - sz)
      }
    }
    let Pz = null;
    class rz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Fz = arguments.length > 3 ? arguments[3] : void 0,
          Wz = arguments.length > 4 ? arguments[4] : void 0,
          Xz = arguments.length > 5 ? arguments[5] : void 0,
          Oz = arguments.length > 6 ? arguments[6] : void 0,
          oz = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = zz, this.state = tz, this.fragments = sz, this.tree = Fz, this.treeLen = Wz, this.viewport = Xz, this.skipped = Oz, this.scheduleOn = oz, this.parse = null, this.tempSkipped = []
      }
      static create(zz, tz, sz) {
        return new rz(zz, tz, [], Wz.r.empty, 0, sz, [], null)
      }
      startParse() {
        return this.parser.startParse(new Bz(this.state.doc), this.fragments)
      }
      work(zz, tz) {
        return null != tz && tz >= this.state.doc.length && (tz = void 0), this.tree != Wz.r.empty && this.isDone(null !== tz && void 0 !== tz ? tz : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var sz;
          if ("number" == typeof zz) {
            let tz = Date.now() + zz;
            zz = () => Date.now() > tz
          }
          for (this.parse || (this.parse = this.startParse()), null != tz && (null == this.parse.stoppedAt || this.parse.stoppedAt > tz) && tz < this.state.doc.length && this.parse.stopAt(tz);;) {
            let Fz = this.parse.advance();
            if (Fz) {
              if (this.fragments = this.withoutTempSkipped(Wz.o.addTree(Fz, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (sz = this.parse.stoppedAt) && void 0 !== sz ? sz : this.state.doc.length, this.tree = Fz, this.parse = null, !(this.treeLen < (null !== tz && void 0 !== tz ? tz : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (zz()) return !1
          }
        }))
      }
      takeTree() {
        let zz, tz;
        this.parse && (zz = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > zz) && this.parse.stopAt(zz), this.withContext((() => {
          for (; !(tz = this.parse.advance()););
        })), this.treeLen = zz, this.tree = tz, this.fragments = this.withoutTempSkipped(Wz.o.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(zz) {
        let tz = Pz;
        Pz = this;
        try {
          return zz()
        } finally {
          Pz = tz
        }
      }
      withoutTempSkipped(zz) {
        for (let tz; tz = this.tempSkipped.pop();) zz = Yz(zz, tz.from, tz.to);
        return zz
      }
      changes(zz, tz) {
        let {
          fragments: sz,
          tree: Fz,
          treeLen: Xz,
          viewport: Oz,
          skipped: oz
        } = this;
        if (this.takeTree(), !zz.empty) {
          let tz = [];
          if (zz.iterChangedRanges(((zz, sz, Fz, Wz) => tz.push({
              fromA: zz,
              toA: sz,
              fromB: Fz,
              toB: Wz
            }))), sz = Wz.o.applyChanges(sz, tz), Fz = Wz.r.empty, Xz = 0, Oz = {
              from: zz.mapPos(Oz.from, -1),
              to: zz.mapPos(Oz.to, 1)
            }, this.skipped.length) {
            oz = [];
            for (let tz of this.skipped) {
              let sz = zz.mapPos(tz.from, 1),
                Fz = zz.mapPos(tz.to, -1);
              sz < Fz && oz.push({
                from: sz,
                to: Fz
              })
            }
          }
        }
        return new rz(this.parser, tz, sz, Fz, Xz, Oz, oz, this.scheduleOn)
      }
      updateViewport(zz) {
        if (this.viewport.from == zz.from && this.viewport.to == zz.to) return !1;
        this.viewport = zz;
        let tz = this.skipped.length;
        for (let sz = 0; sz < this.skipped.length; sz++) {
          let {
            from: tz,
            to: Fz
          } = this.skipped[sz];
          tz < zz.to && Fz > zz.from && (this.fragments = Yz(this.fragments, tz, Fz), this.skipped.splice(sz--, 1))
        }
        return !(this.skipped.length >= tz) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(zz, tz) {
        this.skipped.push({
          from: zz,
          to: tz
        })
      }
      static getSkippingParser(zz) {
        return new class extends Wz.m {
          createParse(tz, sz, Fz) {
            let Xz = Fz[0].from,
              Oz = Fz[Fz.length - 1].to;
            return {
              parsedPos: Xz,
              advance() {
                let tz = Pz;
                if (tz) {
                  for (let zz of Fz) tz.tempSkipped.push(zz);
                  zz && (tz.scheduleOn = tz.scheduleOn ? Promise.all([tz.scheduleOn, zz]) : zz)
                }
                return this.parsedPos = Oz, new Wz.r(Wz.j.none, [], [], Oz - Xz)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(zz) {
        zz = Math.min(zz, this.state.doc.length);
        let tz = this.fragments;
        return this.treeLen >= zz && tz.length && 0 == tz[0].from && tz[0].to >= zz
      }
      static get() {
        return Pz
      }
    }

    function Yz(zz, tz, sz) {
      return Wz.o.applyChanges(zz, [{
        fromA: tz,
        toA: sz,
        fromB: tz,
        toB: sz
      }])
    }
    class xz {
      constructor(zz) {
        this.context = zz, this.tree = zz.tree
      }
      apply(zz) {
        if (!zz.docChanged && this.tree == this.context.tree) return this;
        let tz = this.context.changes(zz.changes, zz.state),
          sz = this.context.treeLen == zz.startState.doc.length ? void 0 : Math.max(zz.changes.mapPos(this.context.treeLen), tz.viewport.to);
        return tz.work(20, sz) || tz.takeTree(), new xz(tz)
      }
      static init(zz) {
        let tz = Math.min(3e3, zz.doc.length),
          sz = rz.create(zz.facet(Cz).parser, zz, {
            from: 0,
            to: tz
          });
        return sz.work(20, tz) || sz.takeTree(), new xz(sz)
      }
    }
    Nz.state = Xz.H.define({
      create: xz.init,
      update(zz, tz) {
        for (let sz of tz.effects)
          if (sz.is(Nz.setState)) return sz.value;
        return tz.startState.facet(Cz) != tz.state.facet(Cz) ? xz.init(tz.state) : zz.apply(tz)
      }
    });
    let mz = zz => {
      let tz = setTimeout((() => zz()), 500);
      return () => clearTimeout(tz)
    };
    "undefined" != typeof requestIdleCallback && (mz = zz => {
      let tz = -1,
        sz = setTimeout((() => {
          tz = requestIdleCallback(zz, {
            timeout: 400
          })
        }), 100);
      return () => tz < 0 ? clearTimeout(sz) : cancelIdleCallback(tz)
    });
    const Jz = "undefined" != typeof navigator && (null === (Fz = navigator.scheduling) || void 0 === Fz ? void 0 : Fz.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      Iz = Oz.p.fromClass(class {
        constructor(zz) {
          this.view = zz, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(zz) {
          let tz = this.view.state.field(Nz.state).context;
          (tz.updateViewport(zz.view.viewport) || this.view.viewport.to > tz.treeLen) && this.scheduleWork(), (zz.docChanged || zz.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(tz)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: zz
          } = this.view, tz = zz.field(Nz.state);
          tz.tree == tz.context.tree && tz.context.isDone(zz.doc.length) || (this.working = mz(this.work))
        }
        work(zz) {
          this.working = null;
          let tz = Date.now();
          if (this.chunkEnd < tz && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = tz + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: sz,
            viewport: {
              to: Fz
            }
          } = this.view, Wz = sz.field(Nz.state);
          if (Wz.tree == Wz.context.tree && Wz.context.isDone(Fz + 1e5)) return;
          let Xz = Date.now() + Math.min(this.chunkBudget, 100, zz && !Jz ? Math.max(25, zz.timeRemaining() - 5) : 1e9),
            Oz = Wz.context.treeLen < Fz && sz.doc.length > Fz + 1e3,
            oz = Wz.context.work((() => Jz && Jz() || Date.now() > Xz), Fz + (Oz ? 0 : 1e5));
          this.chunkBudget -= Date.now() - tz, (oz || this.chunkBudget <= 0) && (Wz.context.takeTree(), this.view.dispatch({
            effects: Nz.setState.of(new xz(Wz.context))
          })), this.chunkBudget > 0 && (!oz || Oz) && this.scheduleWork(), this.checkAsyncSchedule(Wz.context)
        }
        checkAsyncSchedule(zz) {
          zz.scheduleOn && (this.workScheduled++, zz.scheduleOn.then((() => this.scheduleWork())).catch((zz => (0, Oz.Z)(this.view.state, zz))).then((() => this.workScheduled--)), zz.scheduleOn = null)
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
      Cz = Xz.q.define({
        combine: zz => zz.length ? zz[0] : null,
        enables: zz => [Nz.state, Iz, Oz.i.contentAttributes.compute([zz], (tz => {
          let sz = tz.facet(zz);
          return sz && sz.name ? {
            "data-language": sz.name
          } : {}
        }))]
      });
    class ez {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = zz, this.support = tz, this.extension = [zz, tz]
      }
    }
    const Zz = Xz.q.define(),
      Gz = Xz.q.define({
        combine: zz => {
          if (!zz.length) return "  ";
          let tz = zz[0];
          if (!tz || /\S/.test(tz) || Array.from(tz).some((zz => zz != tz[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(zz[0]));
          return tz
        }
      });

    function Tz(zz) {
      let tz = zz.facet(Gz);
      return 9 == tz.charCodeAt(0) ? zz.tabSize * tz.length : tz.length
    }

    function cz(zz, tz) {
      let sz = "",
        Fz = zz.tabSize,
        Wz = zz.facet(Gz)[0];
      if ("\t" == Wz) {
        for (; tz >= Fz;) sz += "\t", tz -= Fz;
        Wz = " "
      }
      for (let Xz = 0; Xz < tz; Xz++) sz += Wz;
      return sz
    }

    function jz(zz, tz) {
      zz instanceof Xz.p && (zz = new Az(zz));
      for (let Fz of zz.state.facet(Zz)) {
        let sz = Fz(zz, tz);
        if (void 0 !== sz) return sz
      }
      let sz = Dz(zz.state);
      return sz.length >= tz ? function(zz, tz, sz) {
        let Fz = tz.resolveStack(sz),
          Wz = tz.resolveInner(sz, -1).resolve(sz, 0).enterUnfinishedNodesBefore(sz);
        if (Wz != Fz.node) {
          let zz = [];
          for (let tz = Wz; tz && !(tz.from < Fz.node.from || tz.to > Fz.node.to || tz.from == Fz.node.from && tz.type == Fz.node.type); tz = tz.parent) zz.push(tz);
          for (let tz = zz.length - 1; tz >= 0; tz--) Fz = {
            node: zz[tz],
            next: Fz
          }
        }
        return Mz(Fz, zz, sz)
      }(zz, sz, tz) : null
    }
    class Az {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = zz, this.options = tz, this.unit = Tz(zz)
      }
      lineAt(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sz = this.state.doc.lineAt(zz),
          {
            simulateBreak: Fz,
            simulateDoubleBreak: Wz
          } = this.options;
        return null != Fz && Fz >= sz.from && Fz <= sz.to ? Wz && Fz == zz ? {
          text: "",
          from: zz
        } : (tz < 0 ? Fz < zz : Fz <= zz) ? {
          text: sz.text.slice(Fz - sz.from),
          from: Fz
        } : {
          text: sz.text.slice(0, Fz - sz.from),
          from: sz.from
        } : sz
      }
      textAfterPos(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && zz == this.options.simulateBreak) return "";
        let {
          text: sz,
          from: Fz
        } = this.lineAt(zz, tz);
        return sz.slice(zz - Fz, Math.min(sz.length, zz + 100 - Fz))
      }
      column(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: sz,
            from: Fz
          } = this.lineAt(zz, tz),
          Wz = this.countColumn(sz, zz - Fz),
          Xz = this.options.overrideIndentation ? this.options.overrideIndentation(Fz) : -1;
        return Xz > -1 && (Wz += Xz - this.countColumn(sz, sz.search(/\S|$/))), Wz
      }
      countColumn(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.length;
        return (0, Xz.U)(zz, this.state.tabSize, tz)
      }
      lineIndent(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: sz,
            from: Fz
          } = this.lineAt(zz, tz),
          Wz = this.options.overrideIndentation;
        if (Wz) {
          let zz = Wz(Fz);
          if (zz > -1) return zz
        }
        return this.countColumn(sz, sz.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const yz = new Wz.e;

    function Mz(zz, tz, sz) {
      for (let Fz = zz; Fz; Fz = Fz.next) {
        let zz = dz(Fz.node);
        if (zz) return zz(Qz.create(tz, sz, Fz))
      }
      return 0
    }

    function dz(zz) {
      let tz = zz.type.prop(yz);
      if (tz) return tz;
      let sz, Fz = zz.firstChild;
      if (Fz && (sz = Fz.type.prop(Wz.e.closedBy))) {
        let tz = zz.lastChild,
          Fz = tz && sz.indexOf(tz.name) > -1;
        return zz => Lz(zz, !0, 1, void 0, Fz && ! function(zz) {
          return zz.pos == zz.options.simulateBreak && zz.options.simulateDoubleBreak
        }(zz) ? tz.from : void 0)
      }
      return null == zz.parent ? hz : null
    }

    function hz() {
      return 0
    }
    class Qz extends Az {
      constructor(zz, tz, sz) {
        super(zz.state, zz.options), this.base = zz, this.pos = tz, this.context = sz
      }
      get node() {
        return this.context.node
      }
      static create(zz, tz, sz) {
        return new Qz(zz, tz, sz)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(zz) {
        let tz = this.state.doc.lineAt(zz.from);
        for (;;) {
          let sz = zz.resolve(tz.from);
          for (; sz.parent && sz.parent.from == sz.from;) sz = sz.parent;
          if (kz(sz, zz)) break;
          tz = this.state.doc.lineAt(sz.from)
        }
        return this.lineIndent(tz.from)
      }
      continue () {
        return Mz(this.context.next, this.base, this.pos)
      }
    }

    function kz(zz, tz) {
      for (let sz = tz; sz; sz = sz.parent)
        if (zz == sz) return !0;
      return !1
    }

    function iz(zz) {
      let {
        closing: tz,
        align: sz = !0,
        units: Fz = 1
      } = zz;
      return zz => Lz(zz, sz, Fz, tz)
    }

    function Lz(zz, tz, sz, Fz, Wz) {
      let Xz = zz.textAfter,
        Oz = Xz.match(/^\s*/)[0].length,
        oz = Fz && Xz.slice(Oz, Oz + Fz.length) == Fz || Wz == zz.pos + Oz,
        vz = tz ? function(zz) {
          let tz = zz.node,
            sz = tz.childAfter(tz.from),
            Fz = tz.lastChild;
          if (!sz) return null;
          let Wz = zz.options.simulateBreak,
            Xz = zz.state.doc.lineAt(sz.from),
            Oz = null == Wz || Wz <= Xz.from ? Xz.to : Math.min(Xz.to, Wz);
          for (let oz = sz.to;;) {
            let zz = tz.childAfter(oz);
            if (!zz || zz == Fz) return null;
            if (!zz.type.isSkipped) {
              if (zz.from >= Oz) return null;
              let tz = /^ */.exec(Xz.text.slice(sz.to - Xz.from))[0].length;
              return {
                from: sz.from,
                to: sz.to + tz
              }
            }
            oz = zz.to
          }
        }(zz) : null;
      return vz ? oz ? zz.column(vz.from) : zz.column(vz.to) : zz.baseIndent + (oz ? 0 : zz.unit * sz)
    }
    const lz = zz => zz.baseIndent;

    function nz() {
      let {
        except: zz,
        units: tz = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return sz => {
        let Fz = zz && zz.test(sz.textAfter);
        return sz.baseIndent + (Fz ? 0 : tz * sz.unit)
      }
    }
    const az = 200;

    function qz() {
      return Xz.p.transactionFilter.of((zz => {
        if (!zz.docChanged || !zz.isUserEvent("input.type") && !zz.isUserEvent("input.complete")) return zz;
        let tz = zz.startState.languageDataAt("indentOnInput", zz.startState.selection.main.head);
        if (!tz.length) return zz;
        let sz = zz.newDoc,
          {
            head: Fz
          } = zz.newSelection.main,
          Wz = sz.lineAt(Fz);
        if (Fz > Wz.from + az) return zz;
        let Xz = sz.sliceString(Wz.from, Fz);
        if (!tz.some((zz => zz.test(Xz)))) return zz;
        let {
          state: Oz
        } = zz, oz = -1, vz = [];
        for (let {
            head: Uz
          }
          of Oz.selection.du) {
          let zz = Oz.doc.lineAt(Uz);
          if (zz.from == oz) continue;
          oz = zz.from;
          let tz = jz(Oz, zz.from);
          if (null == tz) continue;
          let sz = /^\s*/.exec(zz.text)[0],
            Fz = cz(Oz, tz);
          sz != Fz && vz.push({
            from: zz.from,
            to: zz.from + sz.length,
            insert: Fz
          })
        }
        return vz.length ? [zz, {
          changes: vz,
          sequential: !0
        }] : zz
      }))
    }
    const Sz = Xz.q.define(),
      Vz = new Wz.e;

    function Rz(zz) {
      let tz = zz.firstChild,
        sz = zz.lastChild;
      return tz && tz.to < sz.from ? {
        from: tz.to,
        to: sz.type.isError ? zz.to : sz.from
      } : null
    }

    function pz(zz) {
      let tz = zz.lastChild;
      return tz && tz.to == zz.to && tz.type.isError
    }

    function fz(zz, tz, sz) {
      for (let Fz of zz.facet(Sz)) {
        let Wz = Fz(zz, tz, sz);
        if (Wz) return Wz
      }
      return function(zz, tz, sz) {
        let Fz = Dz(zz);
        if (Fz.length < sz) return null;
        let Wz = null;
        for (let Xz = Fz.resolveStack(sz, 1); Xz; Xz = Xz.next) {
          let Oz = Xz.node;
          if (Oz.to <= sz || Oz.from > sz) continue;
          if (Wz && Oz.from < tz) break;
          let oz = Oz.type.prop(Vz);
          if (oz && (Oz.to < Fz.length - 50 || Fz.length == zz.doc.length || !pz(Oz))) {
            let Fz = oz(Oz, zz);
            Fz && Fz.from <= sz && Fz.from >= tz && Fz.to > sz && (Wz = Fz)
          }
        }
        return Wz
      }(zz, tz, sz)
    }

    function Ez(zz, tz) {
      let sz = tz.mapPos(zz.from, 1),
        Fz = tz.mapPos(zz.to, -1);
      return sz >= Fz ? void 0 : {
        from: sz,
        to: Fz
      }
    }
    const zt = Xz.F.define({
        map: Ez
      }),
      tt = Xz.F.define({
        map: Ez
      });

    function st(zz) {
      let tz = [];
      for (let {
          head: sz
        }
        of zz.state.selection.du) tz.some((zz => zz.from <= sz && zz.to >= sz)) || tz.push(zz.lineBlockAt(sz));
      return tz
    }
    const Ft = Xz.H.define({
      create: () => Oz.b.none,
      update(zz, tz) {
        tz.isUserEvent("delete") && tz.changes.iterChangedRanges(((tz, sz) => zz = Wt(zz, tz, sz))), zz = zz.map(tz.changes);
        for (let sz of tz.effects)
          if (sz.is(zt) && !Ot(zz, sz.value.from, sz.value.to)) {
            let {
              preparePlaceholder: Fz
            } = tz.state.facet(ut), Wz = Fz ? Oz.b.replace({
              widget: new Dt(Fz(tz.state, sz.value))
            }) : wt;
            zz = zz.update({
              add: [Wz.range(sz.value.from, sz.value.to)]
            })
          } else sz.is(tt) && (zz = zz.update({
            filter: (zz, tz) => sz.value.from != zz || sz.value.to != tz,
            filterFrom: sz.value.from,
            filterTo: sz.value.to
          }));
        return tz.selection && (zz = Wt(zz, tz.selection.main.head)), zz
      },
      provide: zz => Oz.i.sW.from(zz),
      toJSON(zz, tz) {
        let sz = [];
        return zz.between(0, tz.doc.length, ((zz, tz) => {
          sz.push(zz, tz)
        })), sz
      },
      fromJSON(zz) {
        if (!Array.isArray(zz) || zz.length % 2) throw new RangeError("Invalid JSON for fold state");
        let tz = [];
        for (let sz = 0; sz < zz.length;) {
          let Fz = zz[sz++],
            Wz = zz[sz++];
          if ("number" != typeof Fz || "number" != typeof Wz) throw new RangeError("Invalid JSON for fold state");
          tz.push(wt.range(Fz, Wz))
        }
        return Oz.b.set(tz, !0)
      }
    });

    function Wt(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tz,
        Fz = !1;
      return zz.between(tz, sz, ((zz, Wz) => {
        zz < sz && Wz > tz && (Fz = !0)
      })), Fz ? zz.update({
        filterFrom: tz,
        filterTo: sz,
        filter: (zz, Fz) => zz >= sz || Fz <= tz
      }) : zz
    }

    function Xt(zz, tz, sz) {
      var Fz;
      let Wz = null;
      return null === (Fz = zz.field(Ft, !1)) || void 0 === Fz || Fz.between(tz, sz, ((zz, tz) => {
        (!Wz || Wz.from > zz) && (Wz = {
          from: zz,
          to: tz
        })
      })), Wz
    }

    function Ot(zz, tz, sz) {
      let Fz = !1;
      return zz.between(tz, tz, ((zz, Wz) => {
        zz == tz && Wz == sz && (Fz = !0)
      })), Fz
    }

    function ot(zz, tz) {
      return zz.field(Ft, !1) ? tz : tz.concat(Xz.F.appendConfig.of(Nt()))
    }

    function vt(zz, tz) {
      let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Fz = zz.state.doc.lineAt(tz.from).number,
        Wz = zz.state.doc.lineAt(tz.to).number;
      return Oz.i.announce.of(`${zz.state.phrase(sz?"Folded lines":"Unfolded lines")} ${Fz} ${zz.state.phrase("to")} ${Wz}.`)
    }
    const Ut = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: zz => {
          for (let tz of st(zz)) {
            let sz = fz(zz.state, tz.from, tz.to);
            if (sz) return zz.dispatch({
              effects: ot(zz.state, [zt.of(sz), vt(zz, sz)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: zz => {
          if (!zz.state.field(Ft, !1)) return !1;
          let tz = [];
          for (let sz of st(zz)) {
            let Fz = Xt(zz.state, sz.from, sz.to);
            Fz && tz.push(tt.of(Fz), vt(zz, Fz, !1))
          }
          return tz.length && zz.dispatch({
            effects: tz
          }), tz.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: zz => {
          let {
            state: tz
          } = zz, sz = [];
          for (let Fz = 0; Fz < tz.doc.length;) {
            let Wz = zz.lineBlockAt(Fz),
              Xz = fz(tz, Wz.from, Wz.to);
            Xz && sz.push(zt.of(Xz)), Fz = (Xz ? zz.lineBlockAt(Xz.to) : Wz).to + 1
          }
          return sz.length && zz.dispatch({
            effects: ot(zz.state, sz)
          }), !!sz.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: zz => {
          let tz = zz.state.field(Ft, !1);
          if (!tz || !tz.size) return !1;
          let sz = [];
          return tz.between(0, zz.state.doc.length, ((zz, tz) => {
            sz.push(tt.of({
              from: zz,
              to: tz
            }))
          })), zz.dispatch({
            effects: sz
          }), !0
        }
      }],
      Kt = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      ut = Xz.q.define({
        combine: zz => (0, Xz.Q)(zz, Kt)
      });

    function Nt(zz) {
      let tz = [Ft, Pt];
      return zz && tz.push(ut.of(zz)), tz
    }

    function bt(zz, tz) {
      let {
        state: sz
      } = zz, Fz = sz.facet(ut), Wz = tz => {
        let sz = zz.lineBlockAt(zz.posAtDOM(tz.target)),
          Fz = Xt(zz.state, sz.from, sz.to);
        Fz && zz.dispatch({
          effects: tt.of(Fz)
        }), tz.preventDefault()
      };
      if (Fz.placeholderDOM) return Fz.placeholderDOM(zz, Wz, tz);
      let Xz = document.createElement("span");
      return Xz.textContent = Fz.placeholderText, Xz.setAttribute("aria-label", sz.phrase("folded code")), Xz.title = sz.phrase("unfold"), Xz.className = "cm-foldPlaceholder", Xz.onclick = Wz, Xz
    }
    const wt = Oz.b.replace({
      widget: new class extends Oz.q {
        toDOM(zz) {
          return bt(zz, null)
        }
      }
    });
    class Dt extends Oz.q {
      constructor(zz) {
        super(), this.value = zz
      }
      eq(zz) {
        return this.value == zz.value
      }
      toDOM(zz) {
        return bt(zz, this.value)
      }
    }
    const gt = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class Ht extends Oz.m {
      constructor(zz, tz) {
        super(), this.config = zz, this.open = tz
      }
      eq(zz) {
        return this.config == zz.config && this.open == zz.open
      }
      toDOM(zz) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let tz = document.createElement("span");
        return tz.textContent = this.open ? this.config.openText : this.config.closedText, tz.title = zz.state.phrase(this.open ? "Fold line" : "Unfold line"), tz
      }
    }

    function Bt() {
      let zz = {
          ...gt,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        tz = new Ht(zz, !0),
        sz = new Ht(zz, !1),
        Fz = Oz.p.fromClass(class {
          constructor(zz) {
            this.from = zz.viewport.from, this.markers = this.buildMarkers(zz)
          }
          update(tz) {
            (tz.docChanged || tz.viewportChanged || tz.startState.facet(Cz) != tz.state.facet(Cz) || tz.startState.field(Ft, !1) != tz.state.field(Ft, !1) || Dz(tz.startState) != Dz(tz.state) || zz.foldingChanged(tz)) && (this.markers = this.buildMarkers(tz.view))
          }
          buildMarkers(zz) {
            let Fz = new Xz.y;
            for (let Wz of zz.viewportLineBlocks) {
              let Xz = Xt(zz.state, Wz.from, Wz.to) ? sz : fz(zz.state, Wz.from, Wz.to) ? tz : null;
              Xz && Fz.add(Wz.from, Wz.from, Xz)
            }
            return Fz.finish()
          }
        }),
        {
          domEventHandlers: Wz
        } = zz;
      return [Fz, (0, Oz.F)({
        class: "cm-foldGutter",
        markers(zz) {
          var tz;
          return (null === (tz = zz.plugin(Fz)) || void 0 === tz ? void 0 : tz.markers) || Xz.B.empty
        },
        initialSpacer: () => new Ht(zz, !1),
        domEventHandlers: {
          ...Wz,
          click: (zz, tz, sz) => {
            if (Wz.click && Wz.click(zz, tz, sz)) return !0;
            let Fz = Xt(zz.state, tz.from, tz.to);
            if (Fz) return zz.dispatch({
              effects: tt.of(Fz)
            }), !0;
            let Xz = fz(zz.state, tz.from, tz.to);
            return !!Xz && (zz.dispatch({
              effects: zt.of(Xz)
            }), !0)
          }
        }
      }), Nt()]
    }
    const Pt = Oz.i.baseTheme({
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
    class rt {
      constructor(zz, tz) {
        let sz;

        function Fz(zz) {
          let tz = vz.e.newName();
          return (sz || (sz = Object.create(null)))["." + tz] = zz, tz
        }
        this.specs = zz;
        const Wz = "string" == typeof tz.all ? tz.all : tz.all ? Fz(tz.all) : void 0,
          Xz = tz.scope;
        this.scope = Xz instanceof Nz ? zz => zz.prop(Uz) == Xz.data : Xz ? zz => zz == Xz : void 0, this.style = (0, oz.f)(zz.map((zz => ({
          tag: zz.tag,
          class: zz.class || Fz(Object.assign({}, zz, {
            tag: null
          }))
        }))), {
          all: Wz
        }).style, this.module = sz ? new vz.e(sz) : null, this.themeType = tz.themeType
      }
      static define(zz, tz) {
        return new rt(zz, tz || {})
      }
    }
    const Yt = Xz.q.define(),
      xt = Xz.q.define({
        combine: zz => zz.length ? [zz[0]] : null
      });

    function mt(zz) {
      let tz = zz.facet(Yt);
      return tz.length ? tz : zz.facet(xt)
    }

    function Jt(zz, tz) {
      let sz, Fz = [Ct];
      return zz instanceof rt && (zz.module && Fz.push(Oz.i.styleModule.of(zz.module)), sz = zz.themeType), (null === tz || void 0 === tz ? void 0 : tz.fallback) ? Fz.push(xt.of(zz)) : sz ? Fz.push(Yt.computeN([Oz.i.darkTheme], (tz => tz.facet(Oz.i.darkTheme) == ("dark" == sz) ? [zz] : []))) : Fz.push(Yt.of(zz)), Fz
    }
    class It {
      constructor(zz) {
        this.markCache = Object.create(null), this.tree = Dz(zz.state), this.sW = this.buildDeco(zz, mt(zz.state)), this.decoratedTo = zz.viewport.to
      }
      update(zz) {
        let tz = Dz(zz.state),
          sz = mt(zz.state),
          Fz = sz != mt(zz.startState),
          {
            viewport: Wz
          } = zz.view,
          Xz = zz.changes.mapPos(this.decoratedTo, 1);
        tz.length < Wz.to && !Fz && tz.type == this.tree.type && Xz >= Wz.to ? (this.sW = this.sW.map(zz.changes), this.decoratedTo = Xz) : (tz != this.tree || zz.viewportChanged || Fz) && (this.tree = tz, this.sW = this.buildDeco(zz.view, sz), this.decoratedTo = Wz.to)
      }
      buildDeco(zz, tz) {
        if (!tz || !this.tree.length) return Oz.b.none;
        let sz = new Xz.y;
        for (let {
            from: Fz,
            to: Wz
          }
          of zz.U_)(0, oz.c)(this.tree, tz, ((zz, tz, Fz) => {
          sz.add(zz, tz, this.markCache[Fz] || (this.markCache[Fz] = Oz.b.mark({
            class: Fz
          })))
        }), Fz, Wz);
        return sz.finish()
      }
    }
    const Ct = Xz.x.high(Oz.p.fromClass(It, {
        sW: zz => zz.sW
      })),
      et = rt.define([{
        tag: oz.j.meta,
        color: "#404740"
      }, {
        tag: oz.j.link,
        textDecoration: "underline"
      }, {
        tag: oz.j.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: oz.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: oz.j.strong,
        fontWeight: "bold"
      }, {
        tag: oz.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: oz.j.keyword,
        color: "#708"
      }, {
        tag: [oz.j.atom, oz.j.bool, oz.j.url, oz.j.contentSeparator, oz.j.labelName],
        color: "#219"
      }, {
        tag: [oz.j.literal, oz.j.inserted],
        color: "#164"
      }, {
        tag: [oz.j.string, oz.j.deleted],
        color: "#a11"
      }, {
        tag: [oz.j.regexp, oz.j.escape, oz.j.special(oz.j.string)],
        color: "#e40"
      }, {
        tag: oz.j.definition(oz.j.variableName),
        color: "#00f"
      }, {
        tag: oz.j.local(oz.j.variableName),
        color: "#30a"
      }, {
        tag: [oz.j.typeName, oz.j.namespace],
        color: "#085"
      }, {
        tag: oz.j.className,
        color: "#167"
      }, {
        tag: [oz.j.special(oz.j.variableName), oz.j.macroName],
        color: "#256"
      }, {
        tag: oz.j.definition(oz.j.propertyName),
        color: "#00c"
      }, {
        tag: oz.j.comment,
        color: "#940"
      }, {
        tag: oz.j.invalid,
        color: "#f00"
      }]),
      Zt = Oz.i.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Gt = 1e4,
      Tt = "()[]{}",
      ct = Xz.q.define({
        combine: zz => (0, Xz.Q)(zz, {
          afterCursor: !0,
          brackets: Tt,
          maxScanDistance: Gt,
          renderMatch: yt
        })
      }),
      jt = Oz.b.mark({
        class: "cm-matchingBracket"
      }),
      At = Oz.b.mark({
        class: "cm-nonmatchingBracket"
      });

    function yt(zz) {
      let tz = [],
        sz = zz.matched ? jt : At;
      return tz.push(sz.range(zz.start.from, zz.start.to)), zz.end && tz.push(sz.range(zz.end.from, zz.end.to)), tz
    }

    function Mt(zz) {
      let tz = [],
        sz = zz.facet(ct);
      for (let Fz of zz.selection.du) {
        if (!Fz.empty) continue;
        let Wz = Lt(zz, Fz.head, -1, sz) || Fz.head > 0 && Lt(zz, Fz.head - 1, 1, sz) || sz.afterCursor && (Lt(zz, Fz.head, 1, sz) || Fz.head < zz.doc.length && Lt(zz, Fz.head + 1, -1, sz));
        Wz && (tz = tz.concat(sz.renderMatch(Wz, zz)))
      }
      return Oz.b.set(tz, !0)
    }
    const dt = [Oz.p.fromClass(class {
      constructor(zz) {
        this.paused = !1, this.sW = Mt(zz.state)
      }
      update(zz) {
        (zz.docChanged || zz.selectionSet || this.paused) && (zz.view.composing ? (this.sW = this.sW.map(zz.changes), this.paused = !0) : (this.sW = Mt(zz.state), this.paused = !1))
      }
    }, {
      sW: zz => zz.sW
    }), Zt];

    function ht() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ct.of(zz), dt]
    }
    const Qt = new Wz.e;

    function kt(zz, tz, sz) {
      let Fz = zz.prop(tz < 0 ? Wz.e.openedBy : Wz.e.closedBy);
      if (Fz) return Fz;
      if (1 == zz.name.length) {
        let Fz = sz.indexOf(zz.name);
        if (Fz > -1 && Fz % 2 == (tz < 0 ? 1 : 0)) return [sz[Fz + tz]]
      }
      return null
    }

    function it(zz) {
      let tz = zz.type.prop(Qt);
      return tz ? tz(zz.node) : zz
    }

    function Lt(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Wz = Fz.maxScanDistance || Gt,
        Xz = Fz.brackets || Tt,
        Oz = Dz(zz),
        oz = Oz.resolveInner(tz, sz);
      for (let vz = oz; vz; vz = vz.parent) {
        let Fz = kt(vz.type, sz, Xz);
        if (Fz && vz.from < vz.to) {
          let Wz = it(vz);
          if (Wz && (sz > 0 ? tz >= Wz.from && tz < Wz.to : tz > Wz.from && tz <= Wz.to)) return lt(zz, tz, sz, vz, Wz, Fz, Xz)
        }
      }
      return function(zz, tz, sz, Fz, Wz, Xz, Oz) {
        if (sz < 0 ? !tz : tz == zz.doc.length) return null;
        let oz = sz < 0 ? zz.sliceDoc(tz - 1, tz) : zz.sliceDoc(tz, tz + 1),
          vz = Oz.indexOf(oz);
        if (vz < 0 || vz % 2 == 0 != sz > 0) return null;
        let Uz = {
            from: sz < 0 ? tz - 1 : tz,
            to: sz > 0 ? tz + 1 : tz
          },
          Kz = zz.doc.iterRange(tz, sz > 0 ? zz.doc.length : 0),
          uz = 0;
        for (let Nz = 0; !Kz.next().done && Nz <= Xz;) {
          let zz = Kz.value;
          sz < 0 && (Nz += zz.length);
          let Xz = tz + Nz * sz;
          for (let tz = sz > 0 ? 0 : zz.length - 1, oz = sz > 0 ? zz.length : -1; tz != oz; tz += sz) {
            let oz = Oz.indexOf(zz[tz]);
            if (!(oz < 0 || Fz.resolveInner(Xz + tz, 1).type != Wz))
              if (oz % 2 == 0 == sz > 0) uz++;
              else {
                if (1 == uz) return {
                  start: Uz,
                  end: {
                    from: Xz + tz,
                    to: Xz + tz + 1
                  },
                  matched: oz >> 1 == vz >> 1
                };
                uz--
              }
          }
          sz > 0 && (Nz += zz.length)
        }
        return Kz.done ? {
          start: Uz,
          matched: !1
        } : null
      }(zz, tz, sz, Oz, oz.type, Wz, Xz)
    }

    function lt(zz, tz, sz, Fz, Wz, Xz, Oz) {
      let oz = Fz.parent,
        vz = {
          from: Wz.from,
          to: Wz.to
        },
        Uz = 0,
        Kz = null === oz || void 0 === oz ? void 0 : oz.cursor();
      if (Kz && (sz < 0 ? Kz.childBefore(Fz.from) : Kz.childAfter(Fz.to)))
        do {
          if (sz < 0 ? Kz.to <= Fz.from : Kz.from >= Fz.to) {
            if (0 == Uz && Xz.indexOf(Kz.type.name) > -1 && Kz.from < Kz.to) {
              let zz = it(Kz);
              return {
                start: vz,
                end: zz ? {
                  from: zz.from,
                  to: zz.to
                } : void 0,
                matched: !0
              }
            }
            if (kt(Kz.type, sz, Oz)) Uz++;
            else if (kt(Kz.type, -sz, Oz)) {
              if (0 == Uz) {
                let zz = it(Kz);
                return {
                  start: vz,
                  end: zz && zz.from < zz.to ? {
                    from: zz.from,
                    to: zz.to
                  } : void 0,
                  matched: !1
                }
              }
              Uz--
            }
          }
        } while (sz < 0 ? Kz.prevSibling() : Kz.nextSibling());
      return {
        start: vz,
        matched: !1
      }
    }
    const nt = Object.create(null),
      qt = [Wz.j.none],
      St = [],
      Vt = Object.create(null),
      Rt = Object.create(null);
    for (let [Et, zs] of [
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
      ]) Rt[Et] = ft(nt, zs);

    function pt(zz, tz) {
      St.indexOf(zz) > -1 || (St.push(zz), console.warn(tz))
    }

    function ft(zz, tz) {
      let sz = [];
      for (let Wz of tz.split(" ")) {
        let tz = [];
        for (let sz of Wz.split(".")) {
          let Fz = zz[sz] || oz.j[sz];
          Fz ? "function" == typeof Fz ? tz.length ? tz = tz.map(Fz) : pt(sz, `Modifier ${sz} used at start of tag`) : tz.length ? pt(sz, `Tag ${sz} used as modifier`) : tz = Array.isArray(Fz) ? Fz : [Fz] : pt(sz, `Unknown highlighting tag ${sz}`)
        }
        for (let zz of tz) sz.push(zz)
      }
      if (!sz.length) return 0;
      let Fz = tz.replace(/ /g, "_"),
        Xz = Fz + " " + sz.map((zz => zz.id)),
        Oz = Vt[Xz];
      if (Oz) return Oz.id;
      let vz = Vt[Xz] = Wz.j.define({
        id: qt.length,
        name: Fz,
        props: [(0, oz.e)({
          [Fz]: sz
        })]
      });
      return qt.push(vz), vz.id
    }
    Oz.f.RTL, Oz.f.LTR
  },
  40493: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Pz,
      f: () => mz
    });
    var Fz = sz(40434),
      Wz = sz(40427),
      Xz = sz(40446);
    class Oz {
      constructor(zz, tz, sz) {
        this.from = zz, this.to = tz, this.diagnostic = sz
      }
    }
    class oz {
      constructor(zz, tz, sz) {
        this.diagnostics = zz, this.panel = tz, this.selected = sz
      }
      static init(zz, tz, sz) {
        let Xz = sz.facet(Yz).markerFilter;
        Xz && (zz = Xz(zz, sz));
        let Oz = zz.slice().sort(((zz, tz) => zz.from - tz.from || zz.to - tz.to)),
          Uz = new Wz.y,
          Kz = [],
          uz = 0,
          Nz = sz.doc.iter(),
          bz = 0,
          wz = sz.doc.length;
        for (let Wz = 0;;) {
          let zz, tz, sz = Wz == Oz.length ? null : Oz[Wz];
          if (!sz && !Kz.length) break;
          if (Kz.length) zz = uz, tz = Kz.reduce(((zz, tz) => Math.min(zz, tz.to)), sz && sz.from > zz ? sz.from : 1e8);
          else {
            if (zz = sz.from, zz > wz) break;
            tz = sz.to, Kz.push(sz), Wz++
          }
          for (; Wz < Oz.length;) {
            let sz = Oz[Wz];
            if (sz.from != zz || !(sz.to > sz.from || sz.to == zz)) {
              tz = Math.min(sz.from, tz);
              break
            }
            Kz.push(sz), Wz++, tz = Math.min(sz.to, tz)
          }
          tz = Math.min(tz, wz);
          let Xz = !1;
          if (Kz.some((sz => sz.from == zz && (sz.to == tz || tz == wz))) && (Xz = zz == tz, !Xz && tz - zz < 10)) {
            let sz = zz - (bz + Nz.value.length);
            sz > 0 && (Nz.next(sz), bz = zz);
            for (let Fz = zz;;) {
              if (Fz >= tz) {
                Xz = !0;
                break
              }
              if (!Nz.lineBreak && bz + Nz.value.length > Fz) break;
              Fz = bz + Nz.value.length, bz += Nz.value.length, Nz.next()
            }
          }
          let oz = Az(Kz);
          if (Xz) Uz.add(zz, zz, Fz.b.widget({
            widget: new Cz(oz),
            diagnostics: Kz.slice()
          }));
          else {
            let sz = Kz.reduce(((zz, tz) => tz.markClass ? zz + " " + tz.markClass : zz), "");
            Uz.add(zz, tz, Fz.b.mark({
              class: "cm-lintRange cm-lintRange-" + oz + sz,
              diagnostics: Kz.slice(),
              inclusiveEnd: Kz.some((zz => zz.to > tz))
            }))
          }
          if (uz = tz, uz == wz) break;
          for (let Fz = 0; Fz < Kz.length; Fz++) Kz[Fz].to <= uz && Kz.splice(Fz--, 1)
        }
        let Dz = Uz.finish();
        return new oz(Dz, tz, vz(Dz))
      }
    }

    function vz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Fz = null;
      return zz.between(sz, 1e9, ((zz, sz, Wz) => {
        let {
          spec: Xz
        } = Wz;
        if (!(tz && Xz.diagnostics.indexOf(tz) < 0))
          if (Fz) {
            if (Xz.diagnostics.indexOf(Fz.diagnostic) < 0) return !1;
            Fz = new Oz(Fz.from, sz, Fz.diagnostic)
          } else Fz = new Oz(zz, sz, tz || Xz.diagnostics[0])
      })), Fz
    }

    function Uz(zz, tz) {
      let sz = tz.pos,
        Fz = tz.end || sz,
        Wz = zz.state.facet(Yz).hideOn(zz, sz, Fz);
      if (null != Wz) return Wz;
      let Xz = zz.startState.doc.lineAt(tz.pos);
      return !(!zz.effects.some((zz => zz.is(uz))) && !zz.changes.touchesRange(Xz.from, Math.max(Xz.to, Fz)))
    }

    function Kz(zz, tz) {
      return zz.field(wz, !1) ? tz : tz.concat(Wz.F.appendConfig.of(yz))
    }
    const uz = Wz.F.define(),
      Nz = Wz.F.define(),
      bz = Wz.F.define(),
      wz = Wz.H.define({
        create: () => new oz(Fz.b.none, null, null),
        update(zz, tz) {
          if (tz.docChanged && zz.diagnostics.size) {
            let sz = zz.diagnostics.map(tz.changes),
              Fz = null,
              Wz = zz.panel;
            if (zz.selected) {
              let Wz = tz.changes.mapPos(zz.selected.from, 1);
              Fz = vz(sz, zz.selected.diagnostic, Wz) || vz(sz, null, Wz)
            }!sz.size && Wz && tz.state.facet(Yz).autoPanel && (Wz = null), zz = new oz(sz, Wz, Fz)
          }
          for (let sz of tz.effects)
            if (sz.is(uz)) {
              let Fz = tz.state.facet(Yz).autoPanel ? sz.value.length ? Zz.open : null : zz.panel;
              zz = oz.init(sz.value, Fz, tz.state)
            } else sz.is(Nz) ? zz = new oz(zz.diagnostics, sz.value ? Zz.open : null, zz.selected) : sz.is(bz) && (zz = new oz(zz.diagnostics, zz.panel, sz.value));
          return zz
        },
        provide: zz => [Fz.jb.from(zz, (zz => zz.panel)), Fz.i.sW.from(zz, (zz => zz.diagnostics))]
      });
    const Dz = Fz.b.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function gz(zz, tz, sz) {
      let Fz, {
          diagnostics: Wz
        } = zz.state.field(wz),
        Xz = -1,
        Oz = -1;
      Wz.between(tz - (sz < 0 ? 1 : 0), tz + (sz > 0 ? 1 : 0), ((zz, Wz, oz) => {
        let {
          spec: vz
        } = oz;
        if (tz >= zz && tz <= Wz && (zz == Wz || (tz > zz || sz > 0) && (tz < Wz || sz < 0))) return Fz = vz.diagnostics, Xz = zz, Oz = Wz, !1
      }));
      let oz = zz.state.facet(Yz).tooltipFilter;
      return Fz && oz && (Fz = oz(Fz, zz.state)), Fz ? {
        pos: Xz,
        end: Oz,
        above: zz.state.doc.lineAt(Xz).to < Oz,
        create: () => ({
          dom: Hz(zz, Fz)
        })
      } : null
    }

    function Hz(zz, tz) {
      return (0, Xz.b)("ul", {
        class: "cm-tooltip-lint"
      }, tz.map((tz => Iz(zz, tz, !1))))
    }
    const Bz = zz => {
        let tz = zz.state.field(wz, !1);
        return !(!tz || !tz.panel) && (zz.dispatch({
          effects: Nz.of(!1)
        }), !0)
      },
      Pz = [{
        key: "Mod-Shift-m",
        run: zz => {
          let tz = zz.state.field(wz, !1);
          tz && tz.panel || zz.dispatch({
            effects: Kz(zz.state, [Nz.of(!0)])
          });
          let sz = (0, Fz.C)(zz, Zz.open);
          return sz && sz.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: zz => {
          let tz = zz.state.field(wz, !1);
          if (!tz) return !1;
          let sz = zz.state.selection.main,
            Fz = vz(tz.diagnostics, null, sz.to + 1);
          return !(!Fz && (Fz = vz(tz.diagnostics, null, 0), !Fz || Fz.from == sz.from && Fz.to == sz.to)) && (zz.dispatch({
            selection: {
              anchor: Fz.from,
              head: Fz.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      rz = Fz.p.fromClass(class {
        constructor(zz) {
          this.view = zz, this.timeout = -1, this.set = !0;
          let {
            delay: tz
          } = zz.state.facet(Yz);
          this.lintTime = Date.now() + tz, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, tz)
        }
        run() {
          clearTimeout(this.timeout);
          let zz = Date.now();
          if (zz < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - zz);
          else {
            this.set = !1;
            let {
              state: zz
            } = this.view, {
              sources: tz
            } = zz.facet(Yz);
            tz.length && function(zz, tz, sz) {
              let Fz = [],
                Wz = -1;
              for (let Xz of zz) Xz.then((sz => {
                Fz.push(sz), clearTimeout(Wz), Fz.length == zz.length ? tz(Fz) : Wz = setTimeout((() => tz(Fz)), 200)
              }), sz)
            }(tz.map((zz => Promise.resolve(zz(this.view)))), (tz => {
              this.view.state.doc == zz.doc && this.view.dispatch(function(zz, tz) {
                return {
                  effects: Kz(zz, [uz.of(tz)])
                }
              }(this.view.state, tz.reduce(((zz, tz) => zz.concat(tz)))))
            }), (zz => {
              (0, Fz.Z)(this.view.state, zz)
            }))
          }
        }
        update(zz) {
          let tz = zz.state.facet(Yz);
          (zz.docChanged || tz != zz.startState.facet(Yz) || tz.needsRefresh && tz.needsRefresh(zz)) && (this.lintTime = Date.now() + tz.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, tz.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const Yz = Wz.q.define({
      combine: zz => ({
        sources: zz.map((zz => zz.source)).filter((zz => null != zz)),
        ...(0, Wz.Q)(zz.map((zz => zz.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: xz,
          tooltipFilter: xz,
          needsRefresh: (zz, tz) => zz ? tz ? sz => zz(sz) || tz(sz) : zz : tz,
          hideOn: (zz, tz) => zz ? tz ? (sz, Fz, Wz) => zz(sz, Fz, Wz) || tz(sz, Fz, Wz) : zz : tz,
          autoPanel: (zz, tz) => zz || tz
        })
      })
    });

    function xz(zz, tz) {
      return zz ? tz ? (sz, Fz) => tz(zz(sz, Fz), Fz) : zz : tz
    }

    function mz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [Yz.of({
        source: zz,
        config: tz
      }), rz, yz]
    }

    function Jz(zz) {
      let tz = [];
      if (zz) zz: for (let {
          name: sz
        }
        of zz) {
        for (let zz = 0; zz < sz.length; zz++) {
          let Fz = sz[zz];
          if (/[a-zA-Z]/.test(Fz) && !tz.some((zz => zz.toLowerCase() == Fz.toLowerCase()))) {
            tz.push(Fz);
            continue zz
          }
        }
        tz.push("")
      }
      return tz
    }

    function Iz(zz, tz, sz) {
      var Fz;
      let Wz = sz ? Jz(tz.actions) : [];
      return (0, Xz.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + tz.severity
      }, (0, Xz.b)("span", {
        class: "cm-diagnosticText"
      }, tz.renderMessage ? tz.renderMessage(zz) : tz.message), null === (Fz = tz.actions) || void 0 === Fz ? void 0 : Fz.map(((sz, Fz) => {
        let Oz = !1,
          oz = Fz => {
            if (Fz.preventDefault(), Oz) return;
            Oz = !0;
            let Wz = vz(zz.state.field(wz).diagnostics, tz);
            Wz && sz.apply(zz, Wz.from, Wz.to)
          },
          {
            name: Uz
          } = sz,
          Kz = Wz[Fz] ? Uz.indexOf(Wz[Fz]) : -1,
          uz = Kz < 0 ? Uz : [Uz.slice(0, Kz), (0, Xz.b)("u", Uz.slice(Kz, Kz + 1)), Uz.slice(Kz + 1)],
          Nz = sz.markClass ? " " + sz.markClass : "";
        return (0, Xz.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + Nz,
          onclick: oz,
          onmousedown: oz,
          "aria-label": ` Action: ${Uz}${Kz<0?"":` (access key "${Wz[Fz]})"`}.`
        }, uz)
      })), tz.source && (0, Xz.b)("div", {
        class: "cm-diagnosticSource"
      }, tz.source))
    }
    class Cz extends Fz.q {
      constructor(zz) {
        super(), this.sev = zz
      }
      eq(zz) {
        return zz.sev == this.sev
      }
      toDOM() {
        return (0, Xz.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class ez {
      constructor(zz, tz) {
        this.diagnostic = tz, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = Iz(zz, tz, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class Zz {
      constructor(zz) {
        this.view = zz, this.items = [];
        this.list = (0, Xz.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: tz => {
            if (!(tz.ctrlKey || tz.altKey || tz.metaKey)) {
              if (27 == tz.keyCode) Bz(this.view), this.view.focus();
              else if (38 == tz.keyCode || 33 == tz.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == tz.keyCode || 34 == tz.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == tz.keyCode) this.moveSelection(0);
              else if (35 == tz.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == tz.keyCode) this.view.focus();
              else {
                if (!(tz.keyCode >= 65 && tz.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: sz
                  } = this.items[this.selectedIndex], Fz = Jz(sz.actions);
                  for (let Wz = 0; Wz < Fz.length; Wz++)
                    if (Fz[Wz].toUpperCase().charCodeAt(0) == tz.keyCode) {
                      let tz = vz(this.view.state.field(wz).diagnostics, sz);
                      tz && sz.actions[Wz].apply(zz, tz.from, tz.to)
                    }
                }
              }
              tz.preventDefault()
            }
          },
          onclick: zz => {
            for (let tz = 0; tz < this.items.length; tz++) this.items[tz].dom.contains(zz.target) && this.moveSelection(tz)
          }
        }), this.dom = (0, Xz.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, Xz.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => Bz(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let zz = this.view.state.field(wz).selected;
        if (!zz) return -1;
        for (let tz = 0; tz < this.items.length; tz++)
          if (this.items[tz].diagnostic == zz.diagnostic) return tz;
        return -1
      }
      update() {
        let {
          diagnostics: zz,
          selected: tz
        } = this.view.state.field(wz), sz = 0, Fz = !1, Wz = null, Xz = new Set;
        for (zz.between(0, this.view.state.doc.length, ((zz, Oz, oz) => {
            let {
              spec: vz
            } = oz;
            for (let Uz of vz.diagnostics) {
              if (Xz.has(Uz)) continue;
              Xz.add(Uz);
              let zz, Oz = -1;
              for (let tz = sz; tz < this.items.length; tz++)
                if (this.items[tz].diagnostic == Uz) {
                  Oz = tz;
                  break
                } Oz < 0 ? (zz = new ez(this.view, Uz), this.items.splice(sz, 0, zz), Fz = !0) : (zz = this.items[Oz], Oz > sz && (this.items.splice(sz, Oz - sz), Fz = !0)), tz && zz.diagnostic == tz.diagnostic ? zz.dom.hasAttribute("aria-selected") || (zz.dom.setAttribute("aria-selected", "true"), Wz = zz) : zz.dom.hasAttribute("aria-selected") && zz.dom.removeAttribute("aria-selected"), sz++
            }
          })); sz < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Fz = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new ez(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Fz = !0), Wz ? (this.list.setAttribute("aria-activedescendant", Wz.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Wz.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: zz => {
            let {
              sel: tz,
              panel: sz
            } = zz, Fz = sz.height / this.list.offsetHeight;
            tz.top < sz.top ? this.list.scrollTop -= (sz.top - tz.top) / Fz : tz.bottom > sz.bottom && (this.list.scrollTop += (tz.bottom - sz.bottom) / Fz)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Fz && this.sync()
      }
      sync() {
        let zz = this.list.firstChild;

        function tz() {
          let tz = zz;
          zz = tz.nextSibling, tz.remove()
        }
        for (let sz of this.items)
          if (sz.dom.parentNode == this.list) {
            for (; zz != sz.dom;) tz();
            zz = sz.dom.nextSibling
          } else this.list.insertBefore(sz.dom, zz);
        for (; zz;) tz()
      }
      moveSelection(zz) {
        if (this.selectedIndex < 0) return;
        let tz = vz(this.view.state.field(wz).diagnostics, this.items[zz].diagnostic);
        tz && this.view.dispatch({
          selection: {
            anchor: tz.from,
            head: tz.to
          },
          scrollIntoView: !0,
          effects: bz.of(tz)
        })
      }
      static open(zz) {
        return new Zz(zz)
      }
    }

    function Gz(zz) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(zz)}</svg>')`
    }

    function Tz(zz) {
      return Gz(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${zz}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const cz = Fz.i.baseTheme({
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
        backgroundImage: Tz("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Tz("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Tz("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Tz("#66d")
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

    function jz(zz) {
      return "error" == zz ? 4 : "warning" == zz ? 3 : "info" == zz ? 2 : 1
    }

    function Az(zz) {
      let tz = "hint",
        sz = 1;
      for (let Fz of zz) {
        let zz = jz(Fz.severity);
        zz > sz && (sz = zz, tz = Fz.severity)
      }
      return tz
    }
    Fz.m;
    const yz = [wz, Fz.i.sW.compute([wz], (zz => {
      let {
        selected: tz,
        panel: sz
      } = zz.field(wz);
      return tz && sz && tz.from != tz.to ? Fz.b.set([Dz.range(tz.from, tz.to)]) : Fz.b.none
    })), (0, Fz.Q)(gz, {
      hideOn: Uz
    }), cz]
  },
  40486: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => fz,
      d: () => Hz,
      e: () => Ez
    });
    var Fz = sz(40434),
      Wz = sz(40427),
      Xz = sz(40446);
    const Oz = "function" == typeof String.prototype.normalize ? zz => zz.normalize("NFKD") : zz => zz;
    class oz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.length,
          Wz = arguments.length > 4 ? arguments[4] : void 0,
          Xz = arguments.length > 5 ? arguments[5] : void 0;
        this.test = Xz, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = zz.iterRange(sz, Fz), this.bufferStart = sz, this.normalize = Wz ? zz => Wz(Oz(zz)) : Oz, this.query = this.normalize(tz)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Wz.L)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let zz = this.peek();
          if (zz < 0) return this.done = !0, this;
          let tz = (0, Wz.bb)(zz),
            sz = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Wz.P)(zz);
          let Fz = this.normalize(tz);
          if (Fz.length)
            for (let Wz = 0, Xz = sz;; Wz++) {
              let zz = Fz.charCodeAt(Wz),
                Oz = this.match(zz, Xz, this.bufferPos + this.bufferStart);
              if (Wz == Fz.length - 1) {
                if (Oz) return this.value = Oz, this;
                break
              }
              Xz == sz && Wz < tz.length && tz.charCodeAt(Wz) == zz && Xz++
            }
        }
      }
      match(zz, tz, sz) {
        let Fz = null;
        for (let Wz = 0; Wz < this.matches.length; Wz += 2) {
          let tz = this.matches[Wz],
            Xz = !1;
          this.query.charCodeAt(tz) == zz && (tz == this.query.length - 1 ? Fz = {
            from: this.matches[Wz + 1],
            to: sz
          } : (this.matches[Wz]++, Xz = !0)), Xz || (this.matches.splice(Wz, 2), Wz -= 2)
        }
        return this.query.charCodeAt(0) == zz && (1 == this.query.length ? Fz = {
          from: tz,
          to: sz
        } : this.matches.push(1, tz)), Fz && this.test && !this.test(Fz.from, Fz.to, this.buffer, this.bufferStart) && (Fz = null), Fz
      }
    }
    "undefined" != typeof Symbol && (oz.prototype[Symbol.iterator] = function() {
      return this
    });
    const vz = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Uz = "gm" + (null == /x/.unicode ? "" : "u");
    class Kz {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zz.length;
        if (this.text = zz, this.to = Wz, this.curLine = "", this.done = !1, this.value = vz, /\\[sWDnr]|\n|\r|\[\^/.test(tz)) return new bz(zz, tz, sz, Fz, Wz);
        this.re = new RegExp(tz, Uz + ((null === sz || void 0 === sz ? void 0 : sz.ignoreCase) ? "i" : "")), this.test = null === sz || void 0 === sz ? void 0 : sz.test, this.iter = zz.iter();
        let Xz = zz.lineAt(Fz);
        this.curLineStart = Xz.from, this.matchPos = wz(zz, Fz), this.getLine(this.curLineStart)
      }
      getLine(zz) {
        this.iter.next(zz), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let zz = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = zz;
          let tz = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (tz) {
            let sz = this.curLineStart + tz.index,
              Fz = sz + tz[0].length;
            if (this.matchPos = wz(this.text, Fz + (sz == Fz ? 1 : 0)), sz == this.curLineStart + this.curLine.length && this.nextLine(), (sz < Fz || sz > this.value.to) && (!this.test || this.test(sz, Fz, tz))) return this.value = {
              from: sz,
              to: Fz,
              match: tz
            }, this;
            zz = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), zz = 0
          }
        }
      }
    }
    const uz = new WeakMap;
    class Nz {
      constructor(zz, tz) {
        this.from = zz, this.text = tz
      }
      get to() {
        return this.from + this.text.length
      }
      static get(zz, tz, sz) {
        let Fz = uz.get(zz);
        if (!Fz || Fz.from >= sz || Fz.to <= tz) {
          let Fz = new Nz(tz, zz.sliceString(tz, sz));
          return uz.set(zz, Fz), Fz
        }
        if (Fz.from == tz && Fz.to == sz) return Fz;
        let {
          text: Wz,
          from: Xz
        } = Fz;
        return Xz > tz && (Wz = zz.sliceString(tz, Xz) + Wz, Xz = tz), Fz.to < sz && (Wz += zz.sliceString(Fz.to, sz)), uz.set(zz, new Nz(Xz, Wz)), new Nz(tz, Wz.slice(tz - Xz, sz - Xz))
      }
    }
    class bz {
      constructor(zz, tz, sz, Fz, Wz) {
        this.text = zz, this.to = Wz, this.done = !1, this.value = vz, this.matchPos = wz(zz, Fz), this.re = new RegExp(tz, Uz + ((null === sz || void 0 === sz ? void 0 : sz.ignoreCase) ? "i" : "")), this.test = null === sz || void 0 === sz ? void 0 : sz.test, this.flat = Nz.get(zz, Fz, this.chunkEnd(Fz + 5e3))
      }
      chunkEnd(zz) {
        return zz >= this.to ? this.to : this.text.lineAt(zz).to
      }
      next() {
        for (;;) {
          let zz = this.re.lastIndex = this.matchPos - this.flat.from,
            tz = this.re.exec(this.flat.text);
          if (tz && !tz[0] && tz.index == zz && (this.re.lastIndex = zz + 1, tz = this.re.exec(this.flat.text)), tz) {
            let zz = this.flat.from + tz.index,
              sz = zz + tz[0].length;
            if ((this.flat.to >= this.to || tz.index + tz[0].length <= this.flat.text.length - 10) && (!this.test || this.test(zz, sz, tz))) return this.value = {
              from: zz,
              to: sz,
              match: tz
            }, this.matchPos = wz(this.text, sz + (zz == sz ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = Nz.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function wz(zz, tz) {
      if (tz >= zz.length) return tz;
      let sz, Fz = zz.lineAt(tz);
      for (; tz < Fz.to && (sz = Fz.text.charCodeAt(tz - Fz.from)) >= 56320 && sz < 57344;) tz++;
      return tz
    }
    "undefined" != typeof Symbol && (Kz.prototype[Symbol.iterator] = bz.prototype[Symbol.iterator] = function() {
      return this
    });
    const Dz = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      gz = Wz.q.define({
        combine: zz => (0, Wz.Q)(zz, Dz, {
          highlightWordAroundCursor: (zz, tz) => zz || tz,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function Hz(zz) {
      let tz = [xz, Yz];
      return zz && tz.push(gz.of(zz)), tz
    }
    const Bz = Fz.b.mark({
        class: "cm-selectionMatch"
      }),
      Pz = Fz.b.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function rz(zz, tz, sz, Fz) {
      return (0 == sz || zz(tz.sliceDoc(sz - 1, sz)) != Wz.i.Word) && (Fz == tz.doc.length || zz(tz.sliceDoc(Fz, Fz + 1)) != Wz.i.Word)
    }
    const Yz = Fz.p.fromClass(class {
        constructor(zz) {
          this.sW = this.getDeco(zz)
        }
        update(zz) {
          (zz.selectionSet || zz.docChanged || zz.viewportChanged) && (this.sW = this.getDeco(zz.view))
        }
        getDeco(zz) {
          let tz = zz.state.facet(gz),
            {
              state: sz
            } = zz,
            Xz = sz.selection;
          if (Xz.du.length > 1) return Fz.b.none;
          let Oz, vz = Xz.main,
            Uz = null;
          if (vz.empty) {
            if (!tz.highlightWordAroundCursor) return Fz.b.none;
            let zz = sz.wordAt(vz.head);
            if (!zz) return Fz.b.none;
            Uz = sz.charCategorizer(vz.head), Oz = sz.sliceDoc(zz.from, zz.to)
          } else {
            let zz = vz.to - vz.from;
            if (zz < tz.minSelectionLength || zz > 200) return Fz.b.none;
            if (tz.wholeWords) {
              if (Oz = sz.sliceDoc(vz.from, vz.to), Uz = sz.charCategorizer(vz.head), !rz(Uz, sz, vz.from, vz.to) || ! function(zz, tz, sz, Fz) {
                  return zz(tz.sliceDoc(sz, sz + 1)) == Wz.i.Word && zz(tz.sliceDoc(Fz - 1, Fz)) == Wz.i.Word
                }(Uz, sz, vz.from, vz.to)) return Fz.b.none
            } else if (Oz = sz.sliceDoc(vz.from, vz.to), !Oz) return Fz.b.none
          }
          let Kz = [];
          for (let Wz of zz.U_) {
            let zz = new oz(sz.doc, Oz, Wz.from, Wz.to);
            for (; !zz.next().done;) {
              let {
                from: Wz,
                to: Xz
              } = zz.value;
              if ((!Uz || rz(Uz, sz, Wz, Xz)) && (vz.empty && Wz <= vz.from && Xz >= vz.to ? Kz.push(Pz.range(Wz, Xz)) : (Wz >= vz.to || Xz <= vz.from) && Kz.push(Bz.range(Wz, Xz)), Kz.length > tz.maxMatches)) return Fz.b.none
            }
          }
          return Fz.b.set(Kz)
        }
      }, {
        sW: zz => zz.sW
      }),
      xz = Fz.i.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const mz = Wz.q.define({
      combine: zz => (0, Wz.Q)(zz, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: zz => new zt(zz),
        scrollToMatch: zz => Fz.i.scrollIntoView(zz)
      })
    });
    class Jz {
      constructor(zz) {
        this.search = zz.search, this.caseSensitive = !!zz.caseSensitive, this.literal = !!zz.literal, this.regexp = !!zz.regexp, this.replace = zz.replace || "", this.valid = !!this.search && (!this.regexp || function(zz) {
          try {
            return new RegExp(zz, Uz), !0
          } catch (tz) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!zz.wholeWord, this.test = zz.test
      }
      unquote(zz) {
        return this.literal ? zz : zz.replace(/\\([nrt\\])/g, ((zz, tz) => "n" == tz ? "\n" : "r" == tz ? "\r" : "t" == tz ? "\t" : "\\"))
      }
      eq(zz) {
        return this.search == zz.search && this.replace == zz.replace && this.caseSensitive == zz.caseSensitive && this.regexp == zz.regexp && this.wholeWord == zz.wholeWord && this.test == zz.test
      }
      create() {
        return this.regexp ? new cz(this) : new ez(this)
      }
      getCursor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = zz.doc ? zz : Wz.p.create({
            doc: zz
          });
        return null == sz && (sz = Fz.doc.length), this.regexp ? Zz(this, Fz, tz, sz) : Cz(this, Fz, tz, sz)
      }
    }
    class Iz {
      constructor(zz) {
        this.spec = zz
      }
    }

    function Cz(zz, tz, sz, Fz) {
      let Xz;
      var Oz, vz;
      return zz.wholeWord && (Oz = tz.doc, vz = tz.charCategorizer(tz.selection.main.head), Xz = (zz, tz, sz, Fz) => ((Fz > zz || Fz + sz.length < tz) && (Fz = Math.max(0, zz - 2), sz = Oz.sliceString(Fz, Math.min(Oz.length, tz + 2))), (vz(Gz(sz, zz - Fz)) != Wz.i.Word || vz(Tz(sz, zz - Fz)) != Wz.i.Word) && (vz(Tz(sz, tz - Fz)) != Wz.i.Word || vz(Gz(sz, tz - Fz)) != Wz.i.Word))), zz.test && (Xz = function(zz, tz, sz) {
        return (Fz, Wz, Xz, Oz) => {
          if (sz && !sz(Fz, Wz, Xz, Oz)) return !1;
          let oz = Fz >= Oz && Wz <= Oz + Xz.length ? Xz.slice(Fz - Oz, Wz - Oz) : tz.doc.sliceString(Fz, Wz);
          return zz(oz, tz, Fz, Wz)
        }
      }(zz.test, tz, Xz)), new oz(tz.doc, zz.unquoted, sz, Fz, zz.caseSensitive ? void 0 : zz => zz.toLowerCase(), Xz)
    }
    class ez extends Iz {
      constructor(zz) {
        super(zz)
      }
      nextMatch(zz, tz, sz) {
        let Fz = Cz(this.spec, zz, sz, zz.doc.length).nextOverlapping();
        if (Fz.done) {
          let sz = Math.min(zz.doc.length, tz + this.spec.unquoted.length);
          Fz = Cz(this.spec, zz, 0, sz).nextOverlapping()
        }
        return Fz.done || Fz.value.from == tz && Fz.value.to == sz ? null : Fz.value
      }
      prevMatchInRange(zz, tz, sz) {
        for (let Fz = sz;;) {
          let sz = Math.max(tz, Fz - 1e4 - this.spec.unquoted.length),
            Wz = Cz(this.spec, zz, sz, Fz),
            Xz = null;
          for (; !Wz.nextOverlapping().done;) Xz = Wz.value;
          if (Xz) return Xz;
          if (sz == tz) return null;
          Fz -= 1e4
        }
      }
      prevMatch(zz, tz, sz) {
        let Fz = this.prevMatchInRange(zz, 0, tz);
        return Fz || (Fz = this.prevMatchInRange(zz, Math.max(0, sz - this.spec.unquoted.length), zz.doc.length)), !Fz || Fz.from == tz && Fz.to == sz ? null : Fz
      }
      getReplacement(zz) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(zz, tz) {
        let sz = Cz(this.spec, zz, 0, zz.doc.length),
          Fz = [];
        for (; !sz.next().done;) {
          if (Fz.length >= tz) return null;
          Fz.push(sz.value)
        }
        return Fz
      }
      highlight(zz, tz, sz, Fz) {
        let Wz = Cz(this.spec, zz, Math.max(0, tz - this.spec.unquoted.length), Math.min(sz + this.spec.unquoted.length, zz.doc.length));
        for (; !Wz.next().done;) Fz(Wz.value.from, Wz.value.to)
      }
    }

    function Zz(zz, tz, sz, Fz) {
      let Xz;
      var Oz;
      return zz.wholeWord && (Oz = tz.charCategorizer(tz.selection.main.head), Xz = (zz, tz, sz) => !sz[0].length || (Oz(Gz(sz.input, sz.index)) != Wz.i.Word || Oz(Tz(sz.input, sz.index)) != Wz.i.Word) && (Oz(Tz(sz.input, sz.index + sz[0].length)) != Wz.i.Word || Oz(Gz(sz.input, sz.index + sz[0].length)) != Wz.i.Word)), zz.test && (Xz = function(zz, tz, sz) {
        return (Fz, Wz, Xz) => (!sz || sz(Fz, Wz, Xz)) && zz(Xz[0], tz, Fz, Wz)
      }(zz.test, tz, Xz)), new Kz(tz.doc, zz.search, {
        ignoreCase: !zz.caseSensitive,
        test: Xz
      }, sz, Fz)
    }

    function Gz(zz, tz) {
      return zz.slice((0, Wz.Y)(zz, tz, !1), tz)
    }

    function Tz(zz, tz) {
      return zz.slice(tz, (0, Wz.Y)(zz, tz))
    }
    class cz extends Iz {
      nextMatch(zz, tz, sz) {
        let Fz = Zz(this.spec, zz, sz, zz.doc.length).next();
        return Fz.done && (Fz = Zz(this.spec, zz, 0, tz).next()), Fz.done ? null : Fz.value
      }
      prevMatchInRange(zz, tz, sz) {
        for (let Fz = 1;; Fz++) {
          let Wz = Math.max(tz, sz - 1e4 * Fz),
            Xz = Zz(this.spec, zz, Wz, sz),
            Oz = null;
          for (; !Xz.next().done;) Oz = Xz.value;
          if (Oz && (Wz == tz || Oz.from > Wz + 10)) return Oz;
          if (Wz == tz) return null
        }
      }
      prevMatch(zz, tz, sz) {
        return this.prevMatchInRange(zz, 0, tz) || this.prevMatchInRange(zz, sz, zz.doc.length)
      }
      getReplacement(zz) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((tz, sz) => {
          if ("&" == sz) return zz.match[0];
          if ("$" == sz) return "$";
          for (let Fz = sz.length; Fz > 0; Fz--) {
            let tz = +sz.slice(0, Fz);
            if (tz > 0 && tz < zz.match.length) return zz.match[tz] + sz.slice(Fz)
          }
          return tz
        }))
      }
      matchAll(zz, tz) {
        let sz = Zz(this.spec, zz, 0, zz.doc.length),
          Fz = [];
        for (; !sz.next().done;) {
          if (Fz.length >= tz) return null;
          Fz.push(sz.value)
        }
        return Fz
      }
      highlight(zz, tz, sz, Fz) {
        let Wz = Zz(this.spec, zz, Math.max(0, tz - 250), Math.min(sz + 250, zz.doc.length));
        for (; !Wz.next().done;) Fz(Wz.value.from, Wz.value.to)
      }
    }
    const jz = Wz.F.define(),
      Az = Wz.F.define(),
      yz = Wz.H.define({
        create: zz => new Mz(Sz(zz).create(), null),
        update(zz, tz) {
          for (let sz of tz.effects) sz.is(jz) ? zz = new Mz(sz.value.create(), zz.panel) : sz.is(Az) && (zz = new Mz(zz.query, sz.value ? qz : null));
          return zz
        },
        provide: zz => Fz.jb.from(zz, (zz => zz.panel))
      });
    class Mz {
      constructor(zz, tz) {
        this.query = zz, this.panel = tz
      }
    }
    const dz = Fz.b.mark({
        class: "cm-searchMatch"
      }),
      hz = Fz.b.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      Qz = Fz.p.fromClass(class {
        constructor(zz) {
          this.view = zz, this.sW = this.highlight(zz.state.field(yz))
        }
        update(zz) {
          let tz = zz.state.field(yz);
          (tz != zz.startState.field(yz) || zz.docChanged || zz.selectionSet || zz.viewportChanged) && (this.sW = this.highlight(tz))
        }
        highlight(zz) {
          let {
            query: tz,
            panel: sz
          } = zz;
          if (!sz || !tz.spec.valid) return Fz.b.none;
          let {
            view: Xz
          } = this, Oz = new Wz.y;
          for (let Fz = 0, Wz = Xz.U_, oz = Wz.length; Fz < oz; Fz++) {
            let {
              from: zz,
              to: sz
            } = Wz[Fz];
            for (; Fz < oz - 1 && sz > Wz[Fz + 1].from - 500;) sz = Wz[++Fz].to;
            tz.highlight(Xz.state, zz, sz, ((zz, tz) => {
              let sz = Xz.state.selection.du.some((sz => sz.from == zz && sz.to == tz));
              Oz.add(zz, tz, sz ? hz : dz)
            }))
          }
          return Oz.finish()
        }
      }, {
        sW: zz => zz.sW
      });

    function kz(zz) {
      return tz => {
        let sz = tz.state.field(yz, !1);
        return sz && sz.query.spec.valid ? zz(tz, sz) : pz(tz)
      }
    }
    const iz = kz(((zz, tz) => {
        let {
          query: sz
        } = tz, {
          to: Fz
        } = zz.state.selection.main, Xz = sz.nextMatch(zz.state, Fz, Fz);
        if (!Xz) return !1;
        let Oz = Wz.l.single(Xz.from, Xz.to),
          oz = zz.state.facet(mz);
        return zz.dispatch({
          selection: Oz,
          effects: [Wt(zz, Xz), oz.scrollToMatch(Oz.main, zz)],
          userEvent: "select.search"
        }), Rz(zz), !0
      })),
      Lz = kz(((zz, tz) => {
        let {
          query: sz
        } = tz, {
          state: Fz
        } = zz, {
          from: Xz
        } = Fz.selection.main, Oz = sz.prevMatch(Fz, Xz, Xz);
        if (!Oz) return !1;
        let oz = Wz.l.single(Oz.from, Oz.to),
          vz = zz.state.facet(mz);
        return zz.dispatch({
          selection: oz,
          effects: [Wt(zz, Oz), vz.scrollToMatch(oz.main, zz)],
          userEvent: "select.search"
        }), Rz(zz), !0
      })),
      lz = kz(((zz, tz) => {
        let {
          query: sz
        } = tz, Fz = sz.matchAll(zz.state, 1e3);
        return !(!Fz || !Fz.length) && (zz.dispatch({
          selection: Wz.l.create(Fz.map((zz => Wz.l.range(zz.from, zz.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      nz = kz(((zz, tz) => {
        let {
          query: sz
        } = tz, {
          state: Xz
        } = zz, {
          from: Oz,
          to: oz
        } = Xz.selection.main;
        if (Xz.readOnly) return !1;
        let vz = sz.nextMatch(Xz, Oz, Oz);
        if (!vz) return !1;
        let Uz, Kz, uz = vz,
          Nz = [],
          bz = [];
        uz.from == Oz && uz.to == oz && (Kz = Xz.toText(sz.getReplacement(uz)), Nz.push({
          from: uz.from,
          to: uz.to,
          insert: Kz
        }), uz = sz.nextMatch(Xz, uz.from, uz.to), bz.push(Fz.i.announce.of(Xz.phrase("replaced match on line $", Xz.doc.lineAt(Oz).number) + ".")));
        let wz = zz.state.changes(Nz);
        return uz && (Uz = Wz.l.single(uz.from, uz.to).map(wz), bz.push(Wt(zz, uz)), bz.push(Xz.facet(mz).scrollToMatch(Uz.main, zz))), zz.dispatch({
          changes: wz,
          selection: Uz,
          effects: bz,
          userEvent: "input.replace"
        }), !0
      })),
      az = kz(((zz, tz) => {
        let {
          query: sz
        } = tz;
        if (zz.state.readOnly) return !1;
        let Wz = sz.matchAll(zz.state, 1e9).map((zz => {
          let {
            from: tz,
            to: Fz
          } = zz;
          return {
            from: tz,
            to: Fz,
            insert: sz.getReplacement(zz)
          }
        }));
        if (!Wz.length) return !1;
        let Xz = zz.state.phrase("replaced $ matches", Wz.length) + ".";
        return zz.dispatch({
          changes: Wz,
          effects: Fz.i.announce.of(Xz),
          userEvent: "input.replace.all"
        }), !0
      }));

    function qz(zz) {
      return zz.state.facet(mz).createPanel(zz)
    }

    function Sz(zz, tz) {
      var sz, Fz, Wz, Xz, Oz;
      let oz = zz.selection.main,
        vz = oz.empty || oz.to > oz.from + 100 ? "" : zz.sliceDoc(oz.from, oz.to);
      if (tz && !vz) return tz;
      let Uz = zz.facet(mz);
      return new Jz({
        search: (null !== (sz = null === tz || void 0 === tz ? void 0 : tz.literal) && void 0 !== sz ? sz : Uz.literal) ? vz : vz.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Fz = null === tz || void 0 === tz ? void 0 : tz.caseSensitive) && void 0 !== Fz ? Fz : Uz.caseSensitive,
        literal: null !== (Wz = null === tz || void 0 === tz ? void 0 : tz.literal) && void 0 !== Wz ? Wz : Uz.literal,
        regexp: null !== (Xz = null === tz || void 0 === tz ? void 0 : tz.regexp) && void 0 !== Xz ? Xz : Uz.regexp,
        wholeWord: null !== (Oz = null === tz || void 0 === tz ? void 0 : tz.wholeWord) && void 0 !== Oz ? Oz : Uz.wholeWord
      })
    }

    function Vz(zz) {
      let tz = (0, Fz.C)(zz, qz);
      return tz && tz.dom.querySelector("[main-field]")
    }

    function Rz(zz) {
      let tz = Vz(zz);
      tz && tz == zz.root.activeElement && tz.select()
    }
    const pz = zz => {
        let tz = zz.state.field(yz, !1);
        if (tz && tz.panel) {
          let sz = Vz(zz);
          if (sz && sz != zz.root.activeElement) {
            let Fz = Sz(zz.state, tz.query.spec);
            Fz.valid && zz.dispatch({
              effects: jz.of(Fz)
            }), sz.focus(), sz.select()
          }
        } else zz.dispatch({
          effects: [Az.of(!0), tz ? jz.of(Sz(zz.state, tz.query.spec)) : Wz.F.appendConfig.of(Ot)]
        });
        return !0
      },
      fz = zz => {
        let tz = zz.state.field(yz, !1);
        if (!tz || !tz.panel) return !1;
        let sz = (0, Fz.C)(zz, qz);
        return sz && sz.dom.contains(zz.root.activeElement) && zz.focus(), zz.dispatch({
          effects: Az.of(!1)
        }), !0
      },
      Ez = [{
        key: "Mod-f",
        run: pz,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: iz,
        shift: Lz,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: iz,
        shift: Lz,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: fz,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz, Fz = tz.selection;
          if (Fz.du.length > 1 || Fz.main.empty) return !1;
          let {
            from: Xz,
            to: Oz
          } = Fz.main, vz = [], Uz = 0;
          for (let Kz = new oz(tz.doc, tz.sliceDoc(Xz, Oz)); !Kz.next().done;) {
            if (vz.length > 1e3) return !1;
            Kz.value.from == Xz && (Uz = vz.length), vz.push(Wz.l.range(Kz.value.from, Kz.value.to))
          }
          return sz(tz.update({
            selection: Wz.l.create(vz, Uz),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: zz => {
          let {
            state: tz
          } = zz, sz = String(tz.doc.lineAt(zz.state.selection.main.head).number), {
            close: Xz,
            result: Oz
          } = (0, Fz.hb)(zz, {
            label: tz.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: sz
            },
            focus: !0,
            submitLabel: tz.phrase("go")
          });
          return Oz.then((sz => {
            let Oz = sz && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(sz.elements.line.value);
            if (!Oz) return void zz.dispatch({
              effects: Xz
            });
            let oz = tz.doc.lineAt(tz.selection.main.head),
              [, vz, Uz, Kz, uz] = Oz,
              Nz = Kz ? +Kz.slice(1) : 0,
              bz = Uz ? +Uz : oz.number;
            if (Uz && uz) {
              let zz = bz / 100;
              vz && (zz = zz * ("-" == vz ? -1 : 1) + oz.number / tz.doc.lines), bz = Math.round(tz.doc.lines * zz)
            } else Uz && vz && (bz = bz * ("-" == vz ? -1 : 1) + oz.number);
            let wz = tz.doc.line(Math.max(1, Math.min(tz.doc.lines, bz))),
              Dz = Wz.l.cursor(wz.from + Math.max(0, Math.min(Nz, wz.length)));
            zz.dispatch({
              effects: [Xz, Fz.i.scrollIntoView(Dz.from, {
                y: "center"
              })],
              selection: Dz
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz, {
            du: Xz
          } = tz.selection;
          if (Xz.some((zz => zz.from === zz.to))) return (zz => {
            let {
              state: tz,
              dispatch: sz
            } = zz, {
              selection: Fz
            } = tz, Xz = Wz.l.create(Fz.du.map((zz => tz.wordAt(zz.head) || Wz.l.cursor(zz.head))), Fz.mainIndex);
            return !Xz.eq(Fz) && (sz(tz.update({
              selection: Xz
            })), !0)
          })({
            state: tz,
            dispatch: sz
          });
          let Oz = tz.sliceDoc(Xz[0].from, Xz[0].to);
          if (tz.selection.du.some((zz => tz.sliceDoc(zz.from, zz.to) != Oz))) return !1;
          let vz = function(zz, tz) {
            let {
              main: sz,
              du: Fz
            } = zz.selection, Wz = zz.wordAt(sz.head), Xz = Wz && Wz.from == sz.from && Wz.to == sz.to;
            for (let Oz = !1, vz = new oz(zz.doc, tz, Fz[Fz.length - 1].to);;) {
              if (vz.next(), !vz.done) {
                if (Oz && Fz.some((zz => zz.from == vz.value.from))) continue;
                if (Xz) {
                  let tz = zz.wordAt(vz.value.from);
                  if (!tz || tz.from != vz.value.from || tz.to != vz.value.to) continue
                }
                return vz.value
              }
              if (Oz) return null;
              vz = new oz(zz.doc, tz, 0, Math.max(0, Fz[Fz.length - 1].from - 1)), Oz = !0
            }
          }(tz, Oz);
          return !!vz && (sz(tz.update({
            selection: tz.selection.addRange(Wz.l.range(vz.from, vz.to), !1),
            effects: Fz.i.scrollIntoView(vz.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class zt {
      constructor(zz) {
        this.view = zz;
        let tz = this.query = zz.state.field(yz).query.spec;

        function sz(zz, tz, sz) {
          return (0, Xz.b)("button", {
            class: "cm-button",
            name: zz,
            onclick: tz,
            type: "button"
          }, sz)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, Xz.b)("input", {
          value: tz.search,
          placeholder: tt(zz, "Find"),
          "aria-label": tt(zz, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, Xz.b)("input", {
          value: tz.replace,
          placeholder: tt(zz, "Replace"),
          "aria-label": tt(zz, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, Xz.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: tz.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, Xz.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: tz.regexp,
          onchange: this.commit
        }), this.wordField = (0, Xz.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: tz.wholeWord,
          onchange: this.commit
        }), this.dom = (0, Xz.b)("div", {
          onkeydown: zz => this.keydown(zz),
          class: "cm-search"
        }, [this.searchField, sz("next", (() => iz(zz)), [tt(zz, "next")]), sz("prev", (() => Lz(zz)), [tt(zz, "previous")]), sz("select", (() => lz(zz)), [tt(zz, "all")]), (0, Xz.b)("label", null, [this.caseField, tt(zz, "match case")]), (0, Xz.b)("label", null, [this.reField, tt(zz, "regexp")]), (0, Xz.b)("label", null, [this.wordField, tt(zz, "by word")]), ...zz.state.readOnly ? [] : [(0, Xz.b)("br"), this.replaceField, sz("replace", (() => nz(zz)), [tt(zz, "replace")]), sz("replaceAll", (() => az(zz)), [tt(zz, "replace all")])], (0, Xz.b)("button", {
          name: "close",
          onclick: () => fz(zz),
          "aria-label": tt(zz, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let zz = new Jz({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        zz.eq(this.query) || (this.query = zz, this.view.dispatch({
          effects: jz.of(zz)
        }))
      }
      keydown(zz) {
        (0, Fz.fb)(this.view, zz, "search-panel") ? zz.preventDefault(): 13 == zz.keyCode && zz.target == this.searchField ? (zz.preventDefault(), (zz.shiftKey ? Lz : iz)(this.view)) : 13 == zz.keyCode && zz.target == this.replaceField && (zz.preventDefault(), nz(this.view))
      }
      update(zz) {
        for (let tz of zz.transactions)
          for (let zz of tz.effects) zz.is(jz) && !zz.value.eq(this.query) && this.setQuery(zz.value)
      }
      setQuery(zz) {
        this.query = zz, this.searchField.value = zz.search, this.replaceField.value = zz.replace, this.caseField.checked = zz.caseSensitive, this.reField.checked = zz.regexp, this.wordField.checked = zz.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(mz).top
      }
    }

    function tt(zz, tz) {
      return zz.state.phrase(tz)
    }
    const st = 30,
      Ft = /[\s\.,:;?!]/;

    function Wt(zz, tz) {
      let {
        from: sz,
        to: Wz
      } = tz, Xz = zz.state.doc.lineAt(sz), Oz = zz.state.doc.lineAt(Wz).to, oz = Math.max(Xz.from, sz - st), vz = Math.min(Oz, Wz + st), Uz = zz.state.sliceDoc(oz, vz);
      if (oz != Xz.from)
        for (let Fz = 0; Fz < st; Fz++)
          if (!Ft.test(Uz[Fz + 1]) && Ft.test(Uz[Fz])) {
            Uz = Uz.slice(Fz);
            break
          } if (vz != Oz)
        for (let Fz = Uz.length - 1; Fz > Uz.length - st; Fz--)
          if (!Ft.test(Uz[Fz - 1]) && Ft.test(Uz[Fz])) {
            Uz = Uz.slice(0, Fz);
            break
          } return Fz.i.announce.of(`${zz.state.phrase("current match")}. ${Uz} ${zz.state.phrase("on line")} ${Xz.number}.`)
    }
    const Xt = Fz.i.baseTheme({
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
      Ot = [yz, Wz.x.low(Qz), Xt]
  },
  40434: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => cz,
      f: () => Ut,
      i: () => ZW,
      m: () => vO,
      p: () => pt,
      q: () => Gz,
      t: () => cX,
      x: () => EW,
      B: () => vX,
      C: () => EX,
      E: () => RX,
      F: () => bO,
      L: () => rX,
      I: () => jO,
      M: () => gX,
      Q: () => VX,
      T: () => dW,
      V: () => ZO,
      Z: () => qt,
      bb: () => JX,
      db: () => ZX,
      fb: () => kW,
      hb: () => WO,
      jb: () => FO,
      lb: () => LX
    });
    for (var Fz = sz(40427), Wz = sz(40440), Xz = {
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
      }, Oz = {
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
      }, oz = "undefined" != typeof navigator && /Mac/.test(navigator.platform), vz = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Uz = 0; Uz < 10; Uz++) Xz[48 + Uz] = Xz[96 + Uz] = String(Uz);
    for (Uz = 1; Uz <= 24; Uz++) Xz[Uz + 111] = "F" + Uz;
    for (Uz = 65; Uz <= 90; Uz++) Xz[Uz] = String.fromCharCode(Uz + 32), Oz[Uz] = String.fromCharCode(Uz);
    for (var Kz in Xz) Oz.hasOwnProperty(Kz) || (Oz[Kz] = Xz[Kz]);
    var uz = sz(40446);
    let Nz = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      bz = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const wz = /Edge\/(\d+)/.exec(Nz.userAgent),
      Dz = /MSIE \d/.test(Nz.userAgent),
      gz = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Nz.userAgent),
      Hz = !!(Dz || gz || wz),
      Bz = !Hz && /gecko\/(\d+)/i.test(Nz.userAgent),
      Pz = !Hz && /Chrome\/(\d+)/.exec(Nz.userAgent),
      rz = "webkitFontSmoothing" in bz.documentElement.style,
      Yz = !Hz && /Apple Computer/.test(Nz.vendor),
      xz = Yz && (/Mobile\/\w+/.test(Nz.userAgent) || Nz.maxTouchPoints > 2);
    var mz = {
      mac: xz || /Mac/.test(Nz.platform),
      windows: /Win/.test(Nz.platform),
      linux: /Linux|X11/.test(Nz.platform),
      ie: Hz,
      ie_version: Dz ? bz.documentMode || 6 : gz ? +gz[1] : wz ? +wz[1] : 0,
      gecko: Bz,
      gecko_version: Bz ? +(/Firefox\/(\d+)/.exec(Nz.userAgent) || [0, 0])[1] : 0,
      chrome: !!Pz,
      chrome_version: Pz ? +Pz[1] : 0,
      ios: xz,
      android: /Android\b/.test(Nz.userAgent),
      webkit: rz,
      webkit_version: rz ? +(/\bAppleWebKit\/(\d+)/.exec(Nz.userAgent) || [0, 0])[1] : 0,
      safari: Yz,
      safari_version: Yz ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Nz.userAgent) || [0, 0])[1] : 0,
      tabSize: null != bz.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function Jz(zz, tz) {
      for (let sz in zz) "class" == sz && tz.class ? tz.class += " " + zz.class : "style" == sz && tz.style ? tz.style += ";" + zz.style : tz[sz] = zz[sz];
      return tz
    }
    const Iz = Object.create(null);

    function Cz(zz, tz, sz) {
      if (zz == tz) return !0;
      zz || (zz = Iz), tz || (tz = Iz);
      let Fz = Object.keys(zz),
        Wz = Object.keys(tz);
      if (Fz.length - (sz && Fz.indexOf(sz) > -1 ? 1 : 0) != Wz.length - (sz && Wz.indexOf(sz) > -1 ? 1 : 0)) return !1;
      for (let Xz of Fz)
        if (Xz != sz && (-1 == Wz.indexOf(Xz) || zz[Xz] !== tz[Xz])) return !1;
      return !0
    }

    function ez(zz, tz, sz) {
      let Fz = !1;
      if (tz)
        for (let Wz in tz) sz && Wz in sz || (Fz = !0, "style" == Wz ? zz.style.cssText = "" : zz.removeAttribute(Wz));
      if (sz)
        for (let Wz in sz) tz && tz[Wz] == sz[Wz] || (Fz = !0, "style" == Wz ? zz.style.cssText = sz[Wz] : zz.setAttribute(Wz, sz[Wz]));
      return Fz
    }

    function Zz(zz) {
      let tz = Object.create(null);
      for (let sz = 0; sz < zz.attributes.length; sz++) {
        let Fz = zz.attributes[sz];
        tz[Fz.name] = Fz.value
      }
      return tz
    }
    class Gz {
      eq(zz) {
        return !1
      }
      updateDOM(zz, tz, sz) {
        return !1
      }
      compare(zz) {
        return this == zz || this.constructor == zz.constructor && this.eq(zz)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(zz) {
        return !0
      }
      coordsAt(zz, tz, sz) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(zz) {}
    }
    var Tz = function(zz) {
      return zz[zz.Text = 0] = "Text", zz[zz.WidgetBefore = 1] = "WidgetBefore", zz[zz.WidgetAfter = 2] = "WidgetAfter", zz[zz.WidgetRange = 3] = "WidgetRange", zz
    }(Tz || (Tz = {}));
    class cz extends Fz.E {
      constructor(zz, tz, sz, Fz) {
        super(), this.startSide = zz, this.endSide = tz, this.widget = sz, this.spec = Fz
      }
      get heightRelevant() {
        return !1
      }
      static mark(zz) {
        return new jz(zz)
      }
      static widget(zz) {
        let tz = Math.max(-1e4, Math.min(1e4, zz.side || 0)),
          sz = !!zz.block;
        return tz += sz && !zz.inlineOrder ? tz > 0 ? 3e8 : -4e8 : tz > 0 ? 1e8 : -1e8, new yz(zz, tz, tz, sz, zz.widget || null, !1)
      }
      static replace(zz) {
        let tz, sz, Fz = !!zz.block;
        if (zz.isBlockGap) tz = -5e8, sz = 4e8;
        else {
          let {
            start: Wz,
            end: Xz
          } = Mz(zz, Fz);
          tz = (Wz ? Fz ? -3e8 : -1 : 5e8) - 1, sz = 1 + (Xz ? Fz ? 2e8 : 1 : -6e8)
        }
        return new yz(zz, tz, sz, Fz, zz.widget || null, !0)
      }
      static line(zz) {
        return new Az(zz)
      }
      static set(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Fz.B.of(zz, tz)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    cz.none = Fz.B.empty;
    class jz extends cz {
      constructor(zz) {
        let {
          start: tz,
          end: sz
        } = Mz(zz);
        super(tz ? -1 : 5e8, sz ? 1 : -6e8, null, zz), this.tagName = zz.tagName || "span", this.attrs = zz.class && zz.attributes ? Jz(zz.attributes, {
          class: zz.class
        }) : zz.class ? {
          class: zz.class
        } : zz.attributes || Iz
      }
      eq(zz) {
        return this == zz || zz instanceof jz && this.tagName == zz.tagName && Cz(this.attrs, zz.attrs)
      }
      range(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        if (zz >= tz) throw new RangeError("Mark decorations may not be empty");
        return super.range(zz, tz)
      }
    }
    jz.prototype.point = !1;
    class Az extends cz {
      constructor(zz) {
        super(-2e8, -2e8, null, zz)
      }
      eq(zz) {
        return zz instanceof Az && this.spec.class == zz.spec.class && Cz(this.spec.attributes, zz.spec.attributes)
      }
      range(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        if (tz != zz) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(zz, tz)
      }
    }
    Az.prototype.mapMode = Fz.u.TrackBefore, Az.prototype.point = !0;
    class yz extends cz {
      constructor(zz, tz, sz, Wz, Xz, Oz) {
        super(tz, sz, Xz, zz), this.block = Wz, this.isReplace = Oz, this.mapMode = Wz ? tz <= 0 ? Fz.u.TrackBefore : Fz.u.TrackAfter : Fz.u.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Tz.WidgetRange : this.startSide <= 0 ? Tz.WidgetBefore : Tz.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(zz) {
        return zz instanceof yz && (tz = this.widget, sz = zz.widget, tz == sz || !!(tz && sz && tz.compare(sz))) && this.block == zz.block && this.startSide == zz.startSide && this.endSide == zz.endSide;
        var tz, sz
      }
      range(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        if (this.isReplace && (zz > tz || zz == tz && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && tz != zz) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(zz, tz)
      }
    }

    function Mz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: sz,
          inclusiveEnd: Fz
        } = zz;
      return null == sz && (sz = zz.inclusive), null == Fz && (Fz = zz.inclusive), {
        start: null !== sz && void 0 !== sz ? sz : tz,
        end: null !== Fz && void 0 !== Fz ? Fz : tz
      }
    }

    function dz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wz = sz.length - 1;
      Wz >= 0 && sz[Wz] + Fz >= zz ? sz[Wz] = Math.max(sz[Wz], tz) : sz.push(zz, tz)
    }
    yz.prototype.point = !0;
    class hz extends Fz.E {
      constructor(zz, tz) {
        super(), this.tagName = zz, this.attributes = tz
      }
      eq(zz) {
        return zz == this || zz instanceof hz && this.tagName == zz.tagName && Cz(this.attributes, zz.attributes)
      }
      static create(zz) {
        return new hz(zz.tagName, zz.attributes || Iz)
      }
      static set(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Fz.B.of(zz, tz)
      }
    }

    function Qz(zz) {
      let tz;
      return tz = 11 == zz.nodeType ? zz.getSelection ? zz : zz.ownerDocument : zz, tz.getSelection()
    }

    function kz(zz, tz) {
      return !!tz && (zz == tz || zz.contains(1 != tz.nodeType ? tz.parentNode : tz))
    }

    function iz(zz, tz) {
      if (!tz.anchorNode) return !1;
      try {
        return kz(zz, tz.anchorNode)
      } catch (sz) {
        return !1
      }
    }

    function Lz(zz) {
      return 3 == zz.nodeType ? Ft(zz, 0, zz.nodeValue.length).getClientRects() : 1 == zz.nodeType ? zz.getClientRects() : []
    }

    function lz(zz, tz, sz, Fz) {
      return !!sz && (qz(zz, tz, sz, Fz, -1) || qz(zz, tz, sz, Fz, 1))
    }

    function nz(zz) {
      for (var tz = 0;; tz++)
        if (!(zz = zz.previousSibling)) return tz
    }

    function az(zz) {
      return 1 == zz.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(zz.nodeName)
    }

    function qz(zz, tz, sz, Fz, Wz) {
      for (;;) {
        if (zz == sz && tz == Fz) return !0;
        if (tz == (Wz < 0 ? 0 : Sz(zz))) {
          if ("DIV" == zz.nodeName) return !1;
          let sz = zz.parentNode;
          if (!sz || 1 != sz.nodeType) return !1;
          tz = nz(zz) + (Wz < 0 ? 0 : 1), zz = sz
        } else {
          if (1 != zz.nodeType) return !1;
          if (1 == (zz = zz.childNodes[tz + (Wz < 0 ? -1 : 0)]).nodeType && "false" == zz.contentEditable) return !1;
          tz = Wz < 0 ? Sz(zz) : 0
        }
      }
    }

    function Sz(zz) {
      return 3 == zz.nodeType ? zz.nodeValue.length : zz.childNodes.length
    }

    function Vz(zz, tz) {
      let sz = tz ? zz.left : zz.right;
      return {
        left: sz,
        right: sz,
        top: zz.top,
        bottom: zz.bottom
      }
    }

    function Rz(zz) {
      let tz = zz.visualViewport;
      return tz ? {
        left: 0,
        right: tz.width,
        top: 0,
        bottom: tz.height
      } : {
        left: 0,
        right: zz.innerWidth,
        top: 0,
        bottom: zz.innerHeight
      }
    }

    function pz(zz, tz) {
      let sz = tz.width / zz.offsetWidth,
        Fz = tz.height / zz.offsetHeight;
      return (sz > .995 && sz < 1.005 || !isFinite(sz) || Math.abs(tz.width - zz.offsetWidth) < 1) && (sz = 1), (Fz > .995 && Fz < 1.005 || !isFinite(Fz) || Math.abs(tz.height - zz.offsetHeight) < 1) && (Fz = 1), {
        scaleX: sz,
        scaleY: Fz
      }
    }

    function fz(zz) {
      let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        sz = zz.ownerDocument,
        Fz = null,
        Wz = null;
      for (let Xz = zz.parentNode; Xz && (Xz != sz.body && (tz && !Fz || !Wz));)
        if (1 == Xz.nodeType) !Wz && Xz.scrollHeight > Xz.clientHeight && (Wz = Xz), tz && !Fz && Xz.scrollWidth > Xz.clientWidth && (Fz = Xz), Xz = Xz.assignedSlot || Xz.parentNode;
        else {
          if (11 != Xz.nodeType) break;
          Xz = Xz.host
        } return {
        x: Fz,
        y: Wz
      }
    }
    hz.prototype.startSide = hz.prototype.endSide = -1;
    class Ez {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(zz) {
        return this.anchorNode == zz.anchorNode && this.anchorOffset == zz.anchorOffset && this.focusNode == zz.focusNode && this.focusOffset == zz.focusOffset
      }
      setRange(zz) {
        let {
          anchorNode: tz,
          focusNode: sz
        } = zz;
        this.set(tz, Math.min(zz.anchorOffset, tz ? Sz(tz) : 0), sz, Math.min(zz.focusOffset, sz ? Sz(sz) : 0))
      }
      set(zz, tz, sz, Fz) {
        this.anchorNode = zz, this.anchorOffset = tz, this.focusNode = sz, this.focusOffset = Fz
      }
    }
    let zt, tt = null;

    function st(zz) {
      if (zz.setActive) return zz.setActive();
      if (tt) return zz.focus(tt);
      let tz = [];
      for (let sz = zz; sz && (tz.push(sz, sz.scrollTop, sz.scrollLeft), sz != sz.ownerDocument); sz = sz.parentNode);
      if (zz.focus(null == tt ? {
          get preventScroll() {
            return tt = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !tt) {
        tt = !1;
        for (let zz = 0; zz < tz.length;) {
          let sz = tz[zz++],
            Fz = tz[zz++],
            Wz = tz[zz++];
          sz.scrollTop != Fz && (sz.scrollTop = Fz), sz.scrollLeft != Wz && (sz.scrollLeft = Wz)
        }
      }
    }

    function Ft(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tz,
        Fz = zt || (zt = document.createRange());
      return Fz.setEnd(zz, sz), Fz.setStart(zz, tz), Fz
    }

    function Wt(zz, tz, sz, Fz) {
      let Wz = {
        key: tz,
        code: tz,
        keyCode: sz,
        which: sz,
        cancelable: !0
      };
      Fz && ({
        altKey: Wz.altKey,
        ctrlKey: Wz.ctrlKey,
        shiftKey: Wz.shiftKey,
        metaKey: Wz.metaKey
      } = Fz);
      let Xz = new KeyboardEvent("keydown", Wz);
      Xz.synthetic = !0, zz.dispatchEvent(Xz);
      let Oz = new KeyboardEvent("keyup", Wz);
      return Oz.synthetic = !0, zz.dispatchEvent(Oz), Xz.defaultPrevented || Oz.defaultPrevented
    }

    function Xt(zz) {
      return zz instanceof Window ? zz.pageYOffset > Math.max(0, zz.document.documentElement.scrollHeight - zz.innerHeight - 4) : zz.scrollTop > Math.max(1, zz.scrollHeight - zz.clientHeight - 4)
    }

    function Ot(zz, tz) {
      for (let sz = zz, Fz = tz;;) {
        if (3 == sz.nodeType && Fz > 0) return {
          node: sz,
          offset: Fz
        };
        if (1 == sz.nodeType && Fz > 0) {
          if ("false" == sz.contentEditable) return null;
          sz = sz.childNodes[Fz - 1], Fz = Sz(sz)
        } else {
          if (!sz.parentNode || az(sz)) return null;
          Fz = nz(sz), sz = sz.parentNode
        }
      }
    }

    function ot(zz, tz) {
      for (let sz = zz, Fz = tz;;) {
        if (3 == sz.nodeType && Fz < sz.nodeValue.length) return {
          node: sz,
          offset: Fz
        };
        if (1 == sz.nodeType && Fz < sz.childNodes.length) {
          if ("false" == sz.contentEditable) return null;
          sz = sz.childNodes[Fz], Fz = 0
        } else {
          if (!sz.parentNode || az(sz)) return null;
          Fz = nz(sz) + 1, sz = sz.parentNode
        }
      }
    }
    mz.safari && mz.safari_version >= 26 && (tt = !1);
    class vt {
      constructor(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = zz, this.offset = tz, this.precise = sz
      }
      static before(zz, tz) {
        return new vt(zz.parentNode, nz(zz), tz)
      }
      static after(zz, tz) {
        return new vt(zz.parentNode, nz(zz) + 1, tz)
      }
    }
    var Ut = function(zz) {
      return zz[zz.LTR = 0] = "LTR", zz[zz.RTL = 1] = "RTL", zz
    }(Ut || (Ut = {}));
    const Kt = Ut.LTR,
      ut = Ut.RTL;

    function Nt(zz) {
      let tz = [];
      for (let sz = 0; sz < zz.length; sz++) tz.push(1 << +zz[sz]);
      return tz
    }
    const bt = Nt("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      wt = Nt("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      Dt = Object.create(null),
      gt = [];
    for (let AO of ["()", "[]", "{}"]) {
      let zz = AO.charCodeAt(0),
        tz = AO.charCodeAt(1);
      Dt[zz] = tz, Dt[tz] = -zz
    }

    function Ht(zz) {
      return zz <= 247 ? bt[zz] : 1424 <= zz && zz <= 1524 ? 2 : 1536 <= zz && zz <= 1785 ? wt[zz - 1536] : 1774 <= zz && zz <= 2220 ? 4 : 8192 <= zz && zz <= 8204 ? 256 : 64336 <= zz && zz <= 65023 ? 4 : 1
    }
    const Bt = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Pt {
      get dir() {
        return this.level % 2 ? ut : Kt
      }
      constructor(zz, tz, sz) {
        this.from = zz, this.to = tz, this.level = sz
      }
      side(zz, tz) {
        return this.dir == tz == zz ? this.to : this.from
      }
      forward(zz, tz) {
        return zz == (this.dir == tz)
      }
      static find(zz, tz, sz, Fz) {
        let Wz = -1;
        for (let Xz = 0; Xz < zz.length; Xz++) {
          let Oz = zz[Xz];
          if (Oz.from <= tz && Oz.to >= tz) {
            if (Oz.level == sz) return Xz;
            (Wz < 0 || (0 != Fz ? Fz < 0 ? Oz.from < tz : Oz.to > tz : zz[Wz].level > Oz.level)) && (Wz = Xz)
          }
        }
        if (Wz < 0) throw new RangeError("Index out of range");
        return Wz
      }
    }

    function rt(zz, tz) {
      if (zz.length != tz.length) return !1;
      for (let sz = 0; sz < zz.length; sz++) {
        let Fz = zz[sz],
          Wz = tz[sz];
        if (Fz.from != Wz.from || Fz.to != Wz.to || Fz.direction != Wz.direction || !rt(Fz.inner, Wz.inner)) return !1
      }
      return !0
    }
    const Yt = [];

    function xt(zz, tz, sz, Fz, Wz, Xz, Oz) {
      let oz = Fz % 2 ? 2 : 1;
      if (Fz % 2 == Wz % 2)
        for (let vz = tz, Uz = 0; vz < sz;) {
          let tz = !0,
            Kz = !1;
          if (Uz == Xz.length || vz < Xz[Uz].from) {
            let zz = Yt[vz];
            zz != oz && (tz = !1, Kz = 16 == zz)
          }
          let uz = tz || 1 != oz ? null : [],
            Nz = tz ? Fz : Fz + 1,
            bz = vz;
          zz: for (;;)
            if (Uz < Xz.length && bz == Xz[Uz].from) {
              if (Kz) break zz;
              let wz = Xz[Uz];
              if (!tz)
                for (let zz = wz.to, tz = Uz + 1;;) {
                  if (zz == sz) break zz;
                  if (!(tz < Xz.length && Xz[tz].from == zz)) {
                    if (Yt[zz] == oz) break zz;
                    break
                  }
                  zz = Xz[tz++].to
                }
              if (Uz++, uz) uz.push(wz);
              else {
                wz.from > vz && Oz.push(new Pt(vz, wz.from, Nz)), mt(zz, wz.direction == Kt != !(Nz % 2) ? Fz + 1 : Fz, Wz, wz.inner, wz.from, wz.to, Oz), vz = wz.to
              }
              bz = wz.to
            } else {
              if (bz == sz || (tz ? Yt[bz] != oz : Yt[bz] == oz)) break;
              bz++
            } uz ? xt(zz, vz, bz, Fz + 1, Wz, uz, Oz) : vz < bz && Oz.push(new Pt(vz, bz, Nz)), vz = bz
        } else
          for (let vz = sz, Uz = Xz.length; vz > tz;) {
            let sz = !0,
              Kz = !1;
            if (!Uz || vz > Xz[Uz - 1].to) {
              let zz = Yt[vz - 1];
              zz != oz && (sz = !1, Kz = 16 == zz)
            }
            let uz = sz || 1 != oz ? null : [],
              Nz = sz ? Fz : Fz + 1,
              bz = vz;
            zz: for (;;)
              if (Uz && bz == Xz[Uz - 1].to) {
                if (Kz) break zz;
                let wz = Xz[--Uz];
                if (!sz)
                  for (let zz = wz.from, sz = Uz;;) {
                    if (zz == tz) break zz;
                    if (!sz || Xz[sz - 1].to != zz) {
                      if (Yt[zz - 1] == oz) break zz;
                      break
                    }
                    zz = Xz[--sz].from
                  }
                if (uz) uz.push(wz);
                else {
                  wz.to < vz && Oz.push(new Pt(wz.to, vz, Nz)), mt(zz, wz.direction == Kt != !(Nz % 2) ? Fz + 1 : Fz, Wz, wz.inner, wz.from, wz.to, Oz), vz = wz.from
                }
                bz = wz.from
              } else {
                if (bz == tz || (sz ? Yt[bz - 1] != oz : Yt[bz - 1] == oz)) break;
                bz--
              } uz ? xt(zz, bz, vz, Fz + 1, Wz, uz, Oz) : bz < vz && Oz.push(new Pt(bz, vz, Nz)), vz = bz
          }
    }

    function mt(zz, tz, sz, Fz, Wz, Xz, Oz) {
      let oz = tz % 2 ? 2 : 1;
      ! function(zz, tz, sz, Fz, Wz) {
        for (let Xz = 0; Xz <= Fz.length; Xz++) {
          let Oz = Xz ? Fz[Xz - 1].to : tz,
            oz = Xz < Fz.length ? Fz[Xz].from : sz,
            vz = Xz ? 256 : Wz;
          for (let tz = Oz, sz = vz, Fz = vz; tz < oz; tz++) {
            let Wz = Ht(zz.charCodeAt(tz));
            512 == Wz ? Wz = sz : 8 == Wz && 4 == Fz && (Wz = 16), Yt[tz] = 4 == Wz ? 2 : Wz, 7 & Wz && (Fz = Wz), sz = Wz
          }
          for (let zz = Oz, tz = vz, Fz = vz; zz < oz; zz++) {
            let Wz = Yt[zz];
            if (128 == Wz) zz < oz - 1 && tz == Yt[zz + 1] && 24 & tz ? Wz = Yt[zz] = tz : Yt[zz] = 256;
            else if (64 == Wz) {
              let Wz = zz + 1;
              for (; Wz < oz && 64 == Yt[Wz];) Wz++;
              let Xz = zz && 8 == tz || Wz < sz && 8 == Yt[Wz] ? 1 == Fz ? 1 : 8 : 256;
              for (let tz = zz; tz < Wz; tz++) Yt[tz] = Xz;
              zz = Wz - 1
            } else 8 == Wz && 1 == Fz && (Yt[zz] = 1);
            tz = Wz, 7 & Wz && (Fz = Wz)
          }
        }
      }(zz, Wz, Xz, Fz, oz),
      function(zz, tz, sz, Fz, Wz) {
        let Xz = 1 == Wz ? 2 : 1;
        for (let Oz = 0, oz = 0, vz = 0; Oz <= Fz.length; Oz++) {
          let Uz = Oz ? Fz[Oz - 1].to : tz,
            Kz = Oz < Fz.length ? Fz[Oz].from : sz;
          for (let tz, sz, Fz, Oz = Uz; Oz < Kz; Oz++)
            if (sz = Dt[tz = zz.charCodeAt(Oz)])
              if (sz < 0) {
                for (let zz = oz - 3; zz >= 0; zz -= 3)
                  if (gt[zz + 1] == -sz) {
                    let tz = gt[zz + 2],
                      sz = 2 & tz ? Wz : 4 & tz ? 1 & tz ? Xz : Wz : 0;
                    sz && (Yt[Oz] = Yt[gt[zz]] = sz), oz = zz;
                    break
                  }
              } else {
                if (189 == gt.length) break;
                gt[oz++] = Oz, gt[oz++] = tz, gt[oz++] = vz
              }
          else if (2 == (Fz = Yt[Oz]) || 1 == Fz) {
            let zz = Fz == Wz;
            vz = zz ? 0 : 1;
            for (let tz = oz - 3; tz >= 0; tz -= 3) {
              let sz = gt[tz + 2];
              if (2 & sz) break;
              if (zz) gt[tz + 2] |= 2;
              else {
                if (4 & sz) break;
                gt[tz + 2] |= 4
              }
            }
          }
        }
      }(zz, Wz, Xz, Fz, oz),
      function(zz, tz, sz, Fz) {
        for (let Wz = 0, Xz = Fz; Wz <= sz.length; Wz++) {
          let Oz = Wz ? sz[Wz - 1].to : zz,
            oz = Wz < sz.length ? sz[Wz].from : tz;
          for (let vz = Oz; vz < oz;) {
            let Oz = Yt[vz];
            if (256 == Oz) {
              let Oz = vz + 1;
              for (;;)
                if (Oz == oz) {
                  if (Wz == sz.length) break;
                  Oz = sz[Wz++].to, oz = Wz < sz.length ? sz[Wz].from : tz
                } else {
                  if (256 != Yt[Oz]) break;
                  Oz++
                } let Uz = 1 == Xz,
                Kz = Uz == (1 == (Oz < tz ? Yt[Oz] : Fz)) ? Uz ? 1 : 2 : Fz;
              for (let tz = Oz, Fz = Wz, Xz = Fz ? sz[Fz - 1].to : zz; tz > vz;) tz == Xz && (tz = sz[--Fz].from, Xz = Fz ? sz[Fz - 1].to : zz), Yt[--tz] = Kz;
              vz = Oz
            } else Xz = Oz, vz++
          }
        }
      }(Wz, Xz, Fz, oz), xt(zz, Wz, Xz, tz, sz, Fz, Oz)
    }

    function Jt(zz, tz, sz) {
      if (!zz) return [new Pt(0, 0, tz == ut ? 1 : 0)];
      if (tz == Kt && !sz.length && !Bt.test(zz)) return It(zz.length);
      if (sz.length)
        for (; zz.length > Yt.length;) Yt[Yt.length] = 256;
      let Fz = [],
        Wz = tz == Kt ? 0 : 1;
      return mt(zz, Wz, Wz, sz, 0, zz.length, Fz), Fz
    }

    function It(zz) {
      return [new Pt(0, zz, 0)]
    }
    let Ct = "";

    function et(zz, tz, sz, Wz, Xz) {
      var Oz;
      let oz = Wz.head - zz.from,
        vz = Pt.find(tz, oz, null !== (Oz = Wz.bidiLevel) && void 0 !== Oz ? Oz : -1, Wz.assoc),
        Uz = tz[vz],
        Kz = Uz.side(Xz, sz);
      if (oz == Kz) {
        let zz = vz += Xz ? 1 : -1;
        if (zz < 0 || zz >= tz.length) return null;
        Uz = tz[vz = zz], oz = Uz.side(!Xz, sz), Kz = Uz.side(Xz, sz)
      }
      let uz = (0, Fz.Y)(zz.text, oz, Uz.forward(Xz, sz));
      (uz < Uz.from || uz > Uz.to) && (uz = Kz), Ct = zz.text.slice(Math.min(oz, uz), Math.max(oz, uz));
      let Nz = vz == (Xz ? tz.length - 1 : 0) ? null : tz[vz + (Xz ? 1 : -1)];
      return Nz && uz == Kz && Nz.level + (Xz ? 0 : 1) < Uz.level ? Fz.l.cursor(Nz.side(!Xz, sz) + zz.from, Nz.forward(Xz, sz) ? 1 : -1, Nz.level) : Fz.l.cursor(uz + zz.from, Uz.forward(Xz, sz) ? -1 : 1, Uz.level)
    }

    function Zt(zz, tz, sz) {
      for (let Fz = tz; Fz < sz; Fz++) {
        let tz = Ht(zz.charCodeAt(Fz));
        if (1 == tz) return Kt;
        if (2 == tz || 4 == tz) return ut
      }
      return Kt
    }
    const Gt = Fz.q.define(),
      Tt = Fz.q.define(),
      ct = Fz.q.define(),
      jt = Fz.q.define(),
      At = Fz.q.define(),
      yt = Fz.q.define(),
      Mt = Fz.q.define(),
      dt = Fz.q.define(),
      ht = Fz.q.define(),
      Qt = Fz.q.define({
        combine: zz => zz.some((zz => zz))
      }),
      kt = Fz.q.define({
        combine: zz => zz.some((zz => zz))
      }),
      it = Fz.q.define();
    class Lt {
      constructor(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = zz, this.y = tz, this.x = sz, this.yMargin = Fz, this.xMargin = Wz, this.isSnapshot = Xz
      }
      map(zz) {
        return zz.empty ? this : new Lt(this.range.map(zz), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(zz) {
        return this.range.to <= zz.doc.length ? this : new Lt(Fz.l.cursor(zz.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const lt = Fz.F.define({
        map: (zz, tz) => zz.map(tz)
      }),
      nt = Fz.F.define();

    function qt(zz, tz, sz) {
      let Fz = zz.facet(jt);
      Fz.length ? Fz[0](tz) : window.onerror && window.onerror(String(tz), sz, void 0, void 0, tz) || (sz ? console.error(sz + ":", tz) : console.error(tz))
    }
    const St = Fz.q.define({
      combine: zz => !zz.length || zz[0]
    });
    let Vt = 0;
    const Rt = Fz.q.define({
      combine: zz => zz.filter(((tz, sz) => {
        for (let Fz = 0; Fz < sz; Fz++)
          if (zz[Fz].plugin == tz.plugin) return !1;
        return !0
      }))
    });
    class pt {
      constructor(zz, tz, sz, Fz, Wz) {
        this.id = zz, this.create = tz, this.domEventHandlers = sz, this.domEventObservers = Fz, this.baseExtensions = Wz(this), this.extension = this.baseExtensions.concat(Rt.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(zz) {
        return this.baseExtensions.concat(Rt.of({
          plugin: this,
          arg: zz
        }))
      }
      static define(zz, tz) {
        const {
          eventHandlers: sz,
          eventObservers: Fz,
          provide: Wz,
          sW: Xz
        } = tz || {};
        return new pt(Vt++, zz, sz, Fz, (zz => {
          let tz = [];
          return Xz && tz.push(ts.of((tz => {
            let sz = tz.plugin(zz);
            return sz ? Xz(sz) : cz.none
          }))), Wz && tz.push(Wz(zz)), tz
        }))
      }
      static fromClass(zz, tz) {
        return pt.define(((tz, sz) => new zz(tz, sz)), tz)
      }
    }
    class ft {
      constructor(zz) {
        this.spec = zz, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(zz) {
        if (this.value) {
          if (this.mustUpdate) {
            let zz = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(zz)
            } catch (tz) {
              if (qt(zz.state, tz, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (sz) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(zz, this.spec.arg)
        } catch (tz) {
          qt(zz.state, tz, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(zz) {
        var tz;
        if (null === (tz = this.value) || void 0 === tz ? void 0 : tz.destroy) try {
          this.value.destroy()
        } catch (sz) {
          qt(zz.state, sz, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const Et = Fz.q.define(),
      zs = Fz.q.define(),
      ts = Fz.q.define(),
      ss = Fz.q.define(),
      Fs = Fz.q.define(),
      Ws = Fz.q.define(),
      Xs = Fz.q.define();

    function Os(zz, tz) {
      let sz = zz.state.facet(Xs);
      if (!sz.length) return sz;
      let Wz = sz.map((tz => tz instanceof Function ? tz(zz) : tz)),
        Xz = [];
      return Fz.B.spans(Wz, tz.from, tz.to, {
        point() {},
        span(zz, sz, Fz, Wz) {
          let Oz = zz - tz.from,
            oz = sz - tz.from,
            vz = Xz;
          for (let Xz = Fz.length - 1; Xz >= 0; Xz--, Wz--) {
            let zz, sz = Fz[Xz].spec.bidiIsolate;
            if (null == sz && (sz = Zt(tz.text, Oz, oz)), Wz > 0 && vz.length && (zz = vz[vz.length - 1]).to == Oz && zz.direction == sz) zz.to = oz, vz = zz.inner;
            else {
              let zz = {
                from: Oz,
                to: oz,
                direction: sz,
                inner: []
              };
              vz.push(zz), vz = zz.inner
            }
          }
        }
      }), Xz
    }
    const os = Fz.q.define();

    function vs(zz) {
      let tz = 0,
        sz = 0,
        Fz = 0,
        Wz = 0;
      for (let Xz of zz.state.facet(os)) {
        let Oz = Xz(zz);
        Oz && (null != Oz.left && (tz = Math.max(tz, Oz.left)), null != Oz.right && (sz = Math.max(sz, Oz.right)), null != Oz.top && (Fz = Math.max(Fz, Oz.top)), null != Oz.bottom && (Wz = Math.max(Wz, Oz.bottom)))
      }
      return {
        left: tz,
        right: sz,
        top: Fz,
        bottom: Wz
      }
    }
    const Us = Fz.q.define();
    class Ks {
      constructor(zz, tz, sz, Fz) {
        this.fromA = zz, this.toA = tz, this.fromB = sz, this.toB = Fz
      }
      join(zz) {
        return new Ks(Math.min(this.fromA, zz.fromA), Math.max(this.toA, zz.toA), Math.min(this.fromB, zz.fromB), Math.max(this.toB, zz.toB))
      }
      addToSet(zz) {
        let tz = zz.length,
          sz = this;
        for (; tz > 0; tz--) {
          let Fz = zz[tz - 1];
          if (!(Fz.fromA > sz.toA)) {
            if (Fz.toA < sz.fromA) break;
            sz = sz.join(Fz), zz.splice(tz - 1, 1)
          }
        }
        return zz.splice(tz, 0, sz), zz
      }
      static extendWithRanges(zz, tz) {
        if (0 == tz.length) return zz;
        let sz = [];
        for (let Fz = 0, Wz = 0, Xz = 0;;) {
          let Oz = Fz < zz.length ? zz[Fz].fromB : 1e9,
            oz = Wz < tz.length ? tz[Wz] : 1e9,
            vz = Math.min(Oz, oz);
          if (1e9 == vz) break;
          let Uz = vz + Xz,
            Kz = vz,
            uz = Uz;
          for (;;)
            if (Wz < tz.length && tz[Wz] <= Kz) {
              let sz = tz[Wz + 1];
              Wz += 2, Kz = Math.max(Kz, sz);
              for (let tz = Fz; tz < zz.length && zz[tz].fromB <= Kz; tz++) Xz = zz[tz].toA - zz[tz].toB;
              uz = Math.max(uz, sz + Xz)
            } else {
              if (!(Fz < zz.length && zz[Fz].fromB <= Kz)) break;
              {
                let tz = zz[Fz++];
                Kz = Math.max(Kz, tz.toB), uz = Math.max(uz, tz.toA), Xz = tz.toA - tz.toB
              }
            } sz.push(new Ks(Uz, uz, vz, Kz))
        }
        return sz
      }
    }
    class us {
      constructor(zz, tz, sz) {
        this.view = zz, this.state = tz, this.transactions = sz, this.flags = 0, this.startState = zz.state, this.changes = Fz.ChangeSet.empty(this.startState.doc.length);
        for (let Fz of sz) this.changes = this.changes.compose(Fz.changes);
        let Wz = [];
        this.changes.iterChangedRanges(((zz, tz, sz, Fz) => Wz.push(new Ks(zz, tz, sz, Fz)))), this.changedRanges = Wz
      }
      static create(zz, tz, sz) {
        return new us(zz, tz, sz)
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
        return this.transactions.some((zz => zz.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const Ns = [];
    class bs {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = zz, this.length = tz, this.flags = sz, this.parent = null, zz.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Ns
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
      sync(zz) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let zz = this.domAttrs;
          zz && function(zz, tz) {
            for (let sz = zz.attributes.length - 1; sz >= 0; sz--) {
              let Fz = zz.attributes[sz].name;
              null == tz[Fz] && zz.removeAttribute(Fz)
            }
            for (let sz in tz) {
              let Fz = tz[sz];
              "style" == sz ? zz.style.cssText = Fz : zz.getAttribute(sz) != Fz && zz.setAttribute(sz, Fz)
            }
          }(this.dom, zz)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(zz) {
        this.dom = zz, zz.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let sz of this.children) {
          if (sz == zz) return tz;
          tz += sz.length + sz.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(zz) {
        return this.posBefore(zz) + zz.length
      }
      covers(zz) {
        return !0
      }
      coordsIn(zz, tz) {
        return null
      }
      domPosFor(zz, tz) {
        let sz = nz(this.dom),
          Fz = this.length ? zz > 0 : tz > 0;
        return new vt(this.parent.dom, sz + (Fz ? 1 : 0), 0 == zz || zz == this.length)
      }
      markDirty(zz) {
        this.flags &= -3, zz && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let zz = this; zz; zz = zz.parent)
          if (zz instanceof gs) return zz;
        return null
      }
      static get(zz) {
        return zz.cmTile
      }
    }
    class ws extends bs {
      constructor(zz) {
        super(zz, 0), this._children = []
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
      append(zz) {
        this.children.push(zz), zz.parent = this
      }
      sync(zz) {
        if (2 & this.flags) return;
        super.sync(zz);
        let tz, sz = this.dom,
          Fz = null,
          Wz = (null === zz || void 0 === zz ? void 0 : zz.node) == sz ? zz : null,
          Xz = 0;
        for (let Oz of this.children) {
          if (Oz.sync(zz), Xz += Oz.length + Oz.breakAfter, tz = Fz ? Fz.nextSibling : sz.firstChild, Wz && tz != Oz.dom && (Wz.written = !0), Oz.dom.parentNode == sz)
            for (; tz && tz != Oz.dom;) tz = Ds(tz);
          else sz.insertBefore(Oz.dom, tz);
          Fz = Oz.dom
        }
        for (tz = Fz ? Fz.nextSibling : sz.firstChild, Wz && tz && (Wz.written = !0); tz;) tz = Ds(tz);
        this.length = Xz
      }
    }

    function Ds(zz) {
      let tz = zz.nextSibling;
      return zz.parentNode.removeChild(zz), tz
    }
    class gs extends ws {
      constructor(zz, tz) {
        super(tz), this.view = zz
      }
      owns(zz) {
        for (; zz; zz = zz.parent)
          if (zz == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(zz) {
        for (;;) {
          if (!zz) return null;
          let tz = bs.get(zz);
          if (tz && this.owns(tz)) return tz;
          zz = zz.parentNode
        }
      }
      blockTiles(zz) {
        for (let tz = [], sz = this, Fz = 0, Wz = 0;;)
          if (Fz == sz.children.length) {
            if (!tz.length) return;
            sz = sz.parent, sz.breakAfter && Wz++, Fz = tz.pop()
          } else {
            let Xz = sz.children[Fz++];
            if (Xz instanceof Hs) tz.push(Fz), sz = Xz, Fz = 0;
            else {
              let tz = Wz + Xz.length,
                sz = zz(Xz, Wz);
              if (void 0 !== sz) return sz;
              Wz = tz + Xz.breakAfter
            }
          }
      }
      resolveBlock(zz, tz) {
        let sz, Fz, Wz = -1,
          Xz = -1;
        if (this.blockTiles(((Oz, oz) => {
            let vz = oz + Oz.length;
            if (zz >= oz && zz <= vz) {
              if (Oz.isWidget() && tz >= -1 && tz <= 1) {
                if (32 & Oz.flags) return !0;
                16 & Oz.flags && (sz = void 0)
              }(oz < zz || zz == vz && (tz < -1 ? Oz.length : Oz.covers(1))) && (!sz || !Oz.isWidget() && sz.isWidget()) && (sz = Oz, Wz = zz - oz), (vz > zz || zz == oz && (tz > 1 ? Oz.length : Oz.covers(-1))) && (!Fz || !Oz.isWidget() && Fz.isWidget()) && (Fz = Oz, Xz = zz - oz)
            }
          })), !sz && !Fz) throw new Error("No tile at position " + zz);
        return sz && tz < 0 || !Fz ? {
          tile: sz,
          offset: Wz
        } : {
          tile: Fz,
          offset: Xz
        }
      }
    }
    class Hs extends ws {
      constructor(zz, tz) {
        super(zz), this.wrapper = tz
      }
      isBlock() {
        return !0
      }
      covers(zz) {
        return !!this.children.length && (zz < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (zz, tz) {
        let sz = new Hs(tz || document.createElement(zz.tagName), zz);
        return tz || (sz.flags |= 4), sz
      }
    }
    class Bs extends ws {
      constructor(zz, tz) {
        super(zz), this.attrs = tz
      }
      isLine() {
        return !0
      }
      static start(zz, tz, sz) {
        let Fz = new Bs(tz || document.createElement("div"), zz);
        return tz && sz || (Fz.flags |= 4), Fz
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(zz, tz, sz) {
        let Fz = null,
          Wz = -1,
          Xz = null,
          Oz = -1;
        ! function zz(oz, vz) {
          for (let Uz = 0, Kz = 0; Uz < oz.children.length && Kz <= vz; Uz++) {
            let uz = oz.children[Uz],
              Nz = Kz + uz.length;
            Nz >= vz && (uz.isComposite() ? zz(uz, vz - Kz) : (!Xz || Xz.isHidden && (tz > 0 || sz && Ps(Xz, uz))) && (Nz > vz || 32 & uz.flags) ? (Xz = uz, Oz = vz - Kz) : (Kz < vz || 16 & uz.flags && !uz.isHidden) && (Fz = uz, Wz = vz - Kz)), Kz = Nz
          }
        }(this, zz);
        let oz = (tz < 0 ? Fz : Xz) || Fz || Xz;
        return oz ? {
          tile: oz,
          offset: oz == Fz ? Wz : Oz
        } : null
      }
      coordsIn(zz, tz) {
        let sz = this.resolveInline(zz, tz, !0);
        return sz ? sz.tile.coordsIn(Math.max(0, sz.offset), tz) : function(zz) {
          let tz = zz.dom.lastChild;
          if (!tz) return zz.dom.getBoundingClientRect();
          let sz = Lz(tz);
          return sz[sz.length - 1] || null
        }(this)
      }
      domIn(zz, tz) {
        let sz = this.resolveInline(zz, tz);
        if (sz) {
          let {
            tile: zz,
            offset: Fz
          } = sz;
          if (this.dom.contains(zz.dom)) return zz.isText() ? new vt(zz.dom, Math.min(zz.dom.nodeValue.length, Fz)) : zz.domPosFor(Fz, 16 & zz.flags ? 1 : 32 & zz.flags ? -1 : tz);
          let Wz = sz.tile.parent,
            Xz = !1;
          for (let tz of Wz.children) {
            if (Xz) return new vt(tz.dom, 0);
            tz == sz.tile && (Xz = !0)
          }
        }
        return new vt(this.dom, 0)
      }
    }

    function Ps(zz, tz) {
      let sz = zz.coordsIn(0, 1),
        Fz = tz.coordsIn(0, 1);
      return sz && Fz && Fz.top < sz.bottom
    }
    class rs extends ws {
      constructor(zz, tz) {
        super(zz), this.mark = tz
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (zz, tz) {
        let sz = new rs(tz || document.createElement(zz.tagName), zz);
        return tz || (sz.flags |= 4), sz
      }
    }
    class Ys extends bs {
      constructor(zz, tz) {
        super(zz, tz.length), this.text = tz
      }
      sync(zz) {
        2 & this.flags || (super.sync(zz), this.dom.nodeValue != this.text && (zz && zz.node == this.dom && (zz.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(zz, tz) {
        let sz = this.dom.nodeValue.length;
        zz > sz && (zz = sz);
        let Fz = zz,
          Wz = zz,
          Xz = 0;
        0 == zz && tz < 0 || zz == sz && tz >= 0 ? mz.chrome || mz.gecko || (zz ? (Fz--, Xz = 1) : Wz < sz && (Wz++, Xz = -1)) : tz < 0 ? Fz-- : Wz < sz && Wz++;
        let Oz = Ft(this.dom, Fz, Wz).getClientRects();
        if (!Oz.length) return null;
        let oz = Oz[(Xz ? Xz < 0 : tz >= 0) ? 0 : Oz.length - 1];
        return mz.safari && !Xz && 0 == oz.width && (oz = Array.prototype.find.call(Oz, (zz => zz.width)) || oz), Xz ? Vz(oz, Xz < 0) : oz || null
      }
      static of (zz, tz) {
        let sz = new Ys(tz || document.createTextNode(zz), zz);
        return tz || (sz.flags |= 2), sz
      }
    }
    class xs extends bs {
      constructor(zz, tz, sz, Fz) {
        super(zz, tz, Fz), this.widget = sz
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(zz) {
        return !(48 & this.flags) && (this.flags & (zz < 0 ? 64 : 128)) > 0
      }
      coordsIn(zz, tz) {
        return this.coordsInWidget(zz, tz, !1)
      }
      coordsInWidget(zz, tz, sz) {
        let Fz = this.widget.coordsAt(this.dom, zz, tz);
        if (Fz) return Fz;
        if (sz) return Vz(this.dom.getBoundingClientRect(), this.length ? 0 == zz : tz <= 0);
        {
          let tz = this.dom.getClientRects(),
            sz = null;
          if (!tz.length) return null;
          let Fz = !!(16 & this.flags) || !(32 & this.flags) && zz > 0;
          for (let Wz = Fz ? tz.length - 1 : 0; sz = tz[Wz], !(zz > 0 ? 0 == Wz : Wz == tz.length - 1 || sz.top < sz.bottom); Wz += Fz ? -1 : 1);
          return Vz(sz, !Fz)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Fz.I.empty;
        let {
          root: zz
        } = this;
        if (!zz) return Fz.I.empty;
        let tz = this.posAtStart;
        return zz.view.state.doc.slice(tz, tz + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (zz, tz, sz, Fz, Wz) {
        return Wz || (Wz = zz.toDOM(tz), zz.editable || (Wz.contentEditable = "false")), new xs(Wz, sz, zz, Fz)
      }
    }
    class ms extends bs {
      constructor(zz) {
        let tz = document.createElement("img");
        tz.className = "cm-widgetBuffer", tz.setAttribute("aria-hidden", "true"), super(tz, 0, zz)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Fz.I.empty
      }
      coordsIn(zz) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Is {
      constructor(zz) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = zz
      }
      advance(zz, tz, sz) {
        let {
          tile: Fz,
          index: Wz,
          beforeBreak: Xz,
          parents: Oz
        } = this;
        for (; zz || tz > 0;)
          if (Fz.isComposite())
            if (Xz) {
              if (!zz) break;
              sz && sz.break(), zz--, Xz = !1
            } else if (Wz == Fz.children.length) {
          if (!zz && !Oz.length) break;
          sz && sz.leave(Fz), Xz = !!Fz.breakAfter, ({
            tile: Fz,
            index: Wz
          } = Oz.pop()), Wz++
        } else {
          let oz = Fz.children[Wz],
            vz = oz.breakAfter;
          !(tz > 0 ? oz.length <= zz : oz.length < zz) || sz && !1 === sz.skip(oz, 0, oz.length) && oz.isComposite ? (Oz.push({
            tile: Fz,
            index: Wz
          }), Fz = oz, Wz = 0, sz && oz.isComposite() && sz.enter(oz)) : (Xz = !!vz, Wz++, zz -= oz.length)
        } else if (Wz == Fz.length) Xz = !!Fz.breakAfter, ({
          tile: Fz,
          index: Wz
        } = Oz.pop()), Wz++;
        else {
          if (!zz) break;
          {
            let tz = Math.min(zz, Fz.length - Wz);
            sz && sz.skip(Fz, Wz, Wz + tz), zz -= tz, Wz += tz
          }
        }
        return this.tile = Fz, this.index = Wz, this.beforeBreak = Xz, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class Cs {
      constructor(zz, tz, sz, Fz) {
        this.from = zz, this.to = tz, this.wrapper = sz, this.rank = Fz
      }
    }
    class es {
      constructor(zz, tz, sz) {
        this.cache = zz, this.root = tz, this.blockWrappers = sz, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(zz, tz, sz, Fz) {
        var Wz;
        this.flushBuffer();
        let Xz = this.ensureMarks(tz, sz),
          Oz = Xz.lastChild;
        if (Oz && Oz.isText() && !(8 & Oz.flags) && Oz.length + zz.length < 512) {
          this.cache.reused.set(Oz, 2), (Xz.children[Xz.children.length - 1] = new Ys(Oz.dom, Oz.text + zz)).parent = Xz
        } else Xz.append(Fz || Ys.of(zz, null === (Wz = this.cache.find(Ys)) || void 0 === Wz ? void 0 : Wz.dom));
        this.pos += zz.length, this.afterWidget = null
      }
      addComposition(zz, tz) {
        let sz = this.curLine;
        sz.dom != tz.line.dom && (sz.setDOM(this.cache.reused.has(tz.line) ? Ms(tz.line.dom) : tz.line.dom), this.cache.reused.set(tz.line, 2));
        let Fz = sz;
        for (let Oz = tz.marks.length - 1; Oz >= 0; Oz--) {
          let zz = tz.marks[Oz],
            sz = Fz.lastChild;
          if (sz instanceof rs && sz.mark.eq(zz.mark)) sz.dom != zz.dom && sz.setDOM(Ms(zz.dom)), Fz = sz;
          else {
            if (this.cache.reused.get(zz)) {
              let tz = bs.get(zz.dom);
              tz && tz.setDOM(Ms(zz.dom))
            }
            let tz = rs.of(zz.mark, zz.dom);
            Fz.append(tz), Fz = tz
          }
          this.cache.reused.set(zz, 2)
        }
        let Wz = bs.get(zz.text);
        Wz && this.cache.reused.set(Wz, 2);
        let Xz = new Ys(zz.text, zz.text.nodeValue);
        Xz.flags |= 8, Fz.append(Xz)
      }
      addInlineWidget(zz, tz, sz) {
        let Fz = this.afterWidget && 48 & zz.flags && (48 & this.afterWidget.flags) == (48 & zz.flags);
        Fz || this.flushBuffer();
        let Wz = this.ensureMarks(tz, sz);
        Fz || 16 & zz.flags || Wz.append(this.getBuffer(1)), Wz.append(zz), this.pos += zz.length, this.afterWidget = zz
      }
      addMark(zz, tz, sz) {
        this.flushBuffer(), this.ensureMarks(tz, sz).append(zz), this.pos += zz.length, this.afterWidget = null
      }
      addBlockWidget(zz) {
        this.getBlockPos().append(zz), this.pos += zz.length, this.lastBlock = zz, this.endLine()
      }
      continueWidget(zz) {
        (this.afterWidget || this.lastBlock).length += zz, this.pos += zz
      }
      addLineStart(zz, tz) {
        var sz;
        zz || (zz = ys);
        let Fz = Bs.start(zz, tz || (null === (sz = this.cache.find(Bs)) || void 0 === sz ? void 0 : sz.dom), !!tz);
        this.getBlockPos().append(this.lastBlock = this.curLine = Fz)
      }
      addLine(zz) {
        this.getBlockPos().append(zz), this.pos += zz.length, this.lastBlock = zz, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(zz) {
        this.blockPosCovered() || this.addLineStart(zz)
      }
      ensureLine(zz) {
        this.curLine || this.addLineStart(zz)
      }
      ensureMarks(zz, tz) {
        var sz;
        let Fz = this.curLine;
        for (let Wz = zz.length - 1; Wz >= 0; Wz--) {
          let Xz, Oz = zz[Wz];
          if (tz > 0 && (Xz = Fz.lastChild) && Xz instanceof rs && Xz.mark.eq(Oz)) Fz = Xz, tz--;
          else {
            let zz = rs.of(Oz, null === (sz = this.cache.find(rs, (zz => zz.mark.eq(Oz)))) || void 0 === sz ? void 0 : sz.dom);
            Fz.append(zz), Fz = zz, tz = 0
          }
        }
        return Fz
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let zz = this.curLine.lastChild;
          zz && As(this.curLine, !1) && ("BR" == zz.dom.nodeName || !zz.isWidget() || mz.ios && As(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(hs, 0, 32) || new xs(hs.toDOM(), 0, hs, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let zz = this.wrappers.length - 1; zz >= 0; zz--) this.wrappers[zz].to < this.pos && this.wrappers.splice(zz, 1);
        for (let zz = this.blockWrappers; zz.value && zz.from <= this.pos; zz.next())
          if (zz.to >= this.pos) {
            let tz = new Cs(zz.from, zz.to, zz.value, zz.rank),
              sz = this.wrappers.length;
            for (; sz > 0 && (this.wrappers[sz - 1].rank - tz.rank || this.wrappers[sz - 1].to - tz.to) < 0;) sz--;
            this.wrappers.splice(sz, 0, tz)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var zz;
        this.updateBlockWrappers();
        let tz = this.root;
        for (let sz of this.wrappers) {
          let Fz = tz.lastChild;
          if (sz.from < this.pos && Fz instanceof Hs && Fz.wrapper.eq(sz.wrapper)) tz = Fz;
          else {
            let Fz = Hs.of(sz.wrapper, null === (zz = this.cache.find(Hs, (zz => zz.wrapper.eq(sz.wrapper)))) || void 0 === zz ? void 0 : zz.dom);
            tz.append(Fz), tz = Fz
          }
        }
        return tz
      }
      blockPosCovered() {
        let zz = this.lastBlock;
        return null != zz && !zz.breakAfter && (!zz.isWidget() || (160 & zz.flags) > 0)
      }
      getBuffer(zz) {
        let tz = 2 | (zz < 0 ? 16 : 32),
          sz = this.cache.find(ms, void 0, 1);
        return sz && (sz.flags = tz), sz || new ms(tz)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Zs {
      constructor(zz) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = zz.iter()
      }
      skip(zz) {
        this.textOff + zz <= this.text.length ? this.textOff += zz : (this.skipCount += zz - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(zz) {
        if (this.textOff == this.text.length) {
          let {
            value: tz,
            lineBreak: sz,
            done: Fz
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Fz) throw new Error("Ran out of text content when drawing inline views");
          this.text = tz;
          let Wz = this.textOff = Math.min(zz, tz.length);
          return sz ? null : tz.slice(0, Wz)
        }
        let tz = Math.min(this.text.length, this.textOff + zz),
          sz = this.text.slice(this.textOff, tz);
        return this.textOff = tz, sz
      }
    }
    const Gs = [xs, Bs, Ys, rs, ms, Hs, gs];
    for (let AO = 0; AO < Gs.length; AO++) Gs[AO].bucket = AO;
    class Ts {
      constructor(zz) {
        this.view = zz, this.buckets = Gs.map((() => [])), this.index = Gs.map((() => 0)), this.reused = new Map
      }
      add(zz) {
        let tz = zz.constructor.bucket,
          sz = this.buckets[tz];
        sz.length < 6 ? sz.push(zz) : sz[this.index[tz] = (this.index[tz] + 1) % 6] = zz
      }
      find(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Fz = zz.bucket,
          Wz = this.buckets[Fz],
          Xz = this.index[Fz];
        for (let Oz = Wz.length - 1; Oz >= 0; Oz--) {
          let zz = (Oz + Xz) % Wz.length,
            oz = Wz[zz];
          if ((!tz || tz(oz)) && !this.reused.has(oz)) return Wz.splice(zz, 1), zz < Xz && this.index[Fz]--, this.reused.set(oz, sz), oz
        }
        return null
      }
      findWidget(zz, tz, sz) {
        let Fz = this.buckets[0];
        if (Fz.length)
          for (let Wz = 0, Xz = 0;; Wz++) {
            if (Wz == Fz.length) {
              if (Xz) return null;
              Xz = 1, Wz = 0
            }
            let Oz = Fz[Wz];
            if (!this.reused.has(Oz) && (0 == Xz ? Oz.widget.compare(zz) : Oz.widget.constructor == zz.constructor && zz.updateDOM(Oz.dom, this.view, Oz.widget))) return Fz.splice(Wz, 1), Wz < this.index[0] && this.index[0]--, Oz.widget == zz && Oz.length == tz && (497 & Oz.flags) == sz ? (this.reused.set(Oz, 1), Oz) : (this.reused.set(Oz, 2), new xs(Oz.dom, tz, zz, -498 & Oz.flags | sz))
          }
      }
      reuse(zz) {
        return this.reused.set(zz, 1), zz
      }
      maybeReuse(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(zz)) return this.reused.set(zz, tz), zz.dom
      }
      clear() {
        for (let zz = 0; zz < this.buckets.length; zz++) this.buckets[zz].length = this.index[zz] = 0
      }
    }
    class cs {
      constructor(zz, tz, sz, Wz, Xz) {
        this.view = zz, this.sW = Wz, this.disallowBlockEffectsFor = Xz, this.openWidget = !1, this.openMarks = 0, this.cache = new Ts(zz), this.text = new Zs(zz.state.doc), this.builder = new es(this.cache, new gs(zz, zz.contentDOM), Fz.B.iter(sz)), this.cache.reused.set(tz, 2), this.old = new Is(tz), this.reuseWalker = {
          skip: (zz, tz, sz) => {
            if (this.cache.add(zz), zz.isComposite()) return !1
          },
          enter: zz => this.cache.add(zz),
          leave: () => {},
          break: () => {}
        }
      }
      run(zz, tz) {
        let sz = tz && this.getCompositionContext(tz.text);
        for (let Fz = 0, Wz = 0, Xz = 0;;) {
          let Oz = Xz < zz.length ? zz[Xz++] : null,
            oz = Oz ? Oz.fromA : this.old.root.length;
          if (oz > Fz) {
            let zz = oz - Fz;
            this.preserve(zz, !Xz, !Oz), Fz = oz, Wz += zz
          }
          if (!Oz) break;
          tz && Oz.fromA <= tz.range.fromA && Oz.toA >= tz.range.toA ? (this.forward(Oz.fromA, tz.range.fromA, tz.range.fromA < tz.range.toA ? 1 : -1), this.emit(Wz, tz.range.fromB), this.cache.clear(), this.builder.addComposition(tz, sz), this.text.skip(tz.range.toB - tz.range.fromB), this.forward(tz.range.fromA, Oz.toA), this.emit(tz.range.toB, Oz.toB)) : (this.forward(Oz.fromA, Oz.toA), this.emit(Wz, Oz.toB)), Wz = Oz.toB, Fz = Oz.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(zz, tz, sz) {
        let Fz = function(zz) {
            let tz = [];
            for (let sz = zz.parents.length; sz > 1; sz--) {
              let Fz = sz == zz.parents.length ? zz.tile : zz.parents[sz].tile;
              Fz instanceof rs && tz.push(Fz.mark)
            }
            return tz
          }(this.old),
          Wz = this.openMarks;
        this.old.advance(zz, sz ? 1 : -1, {
          skip: (zz, tz, sz) => {
            if (zz.isWidget())
              if (this.openWidget) this.builder.continueWidget(sz - tz);
              else {
                let Xz = sz > 0 || tz < zz.length ? xs.of(zz.widget, this.view, sz - tz, 496 & zz.flags, this.cache.maybeReuse(zz)) : this.cache.reuse(zz);
                256 & Xz.flags ? (Xz.flags &= -2, this.builder.addBlockWidget(Xz)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(Xz, Fz, Wz), Wz = Fz.length)
              }
            else if (zz.isText()) this.builder.ensureLine(null), tz || sz != zz.length || this.cache.reused.has(zz) ? (this.cache.add(zz), this.builder.addText(zz.text.slice(tz, sz), Fz, Wz)) : this.builder.addText(zz.text, Fz, Wz, this.cache.reuse(zz)), Wz = Fz.length;
            else if (zz.isLine()) zz.flags &= -2, this.cache.reused.set(zz, 1), this.builder.addLine(zz);
            else if (zz instanceof ms) this.cache.add(zz);
            else {
              if (!(zz instanceof rs)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(zz, Fz, Wz), this.cache.reused.set(zz, 1), Wz = Fz.length
            }
            this.openWidget = !1
          },
          enter: zz => {
            zz.isLine() ? this.builder.addLineStart(zz.attrs, this.cache.maybeReuse(zz)) : (this.cache.add(zz), zz instanceof rs && Fz.unshift(zz.mark)), this.openWidget = !1
          },
          leave: zz => {
            zz.isLine() ? Fz.length && (Fz.length = Wz = 0) : zz instanceof rs && (Fz.shift(), Wz = Math.min(Wz, Fz.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(zz)
      }
      emit(zz, tz) {
        let sz = null,
          Wz = this.builder,
          Xz = 0,
          Oz = Fz.B.spans(this.sW, zz, tz, {
            point: (zz, tz, Fz, Oz, oz, vz) => {
              if (Fz instanceof yz) {
                if (this.disallowBlockEffectsFor[vz]) {
                  if (Fz.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (tz > this.view.state.doc.lineAt(zz).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (Xz = Oz.length, oz > Oz.length) Wz.continueWidget(tz - zz);
                else {
                  let Xz = Fz.widget || (Fz.block ? ds.block : ds.inline),
                    vz = function(zz) {
                      let tz = zz.isReplace ? (zz.startSide < 0 ? 64 : 0) | (zz.endSide > 0 ? 128 : 0) : zz.startSide > 0 ? 32 : 16;
                      zz.block && (tz |= 256);
                      return tz
                    }(Fz),
                    Uz = this.cache.findWidget(Xz, tz - zz, vz) || xs.of(Xz, this.view, tz - zz, vz);
                  Fz.block ? (Fz.startSide > 0 && Wz.addLineStartIfNotCovered(sz), Wz.addBlockWidget(Uz)) : (Wz.ensureLine(sz), Wz.addInlineWidget(Uz, Oz, oz))
                }
                sz = null
              } else sz = function(zz, tz) {
                let sz = tz.spec.attributes,
                  Fz = tz.spec.class;
                if (!sz && !Fz) return zz;
                zz || (zz = {
                  class: "cm-line"
                });
                sz && Jz(sz, zz);
                Fz && (zz.class += " " + Fz);
                return zz
              }(sz, Fz);
              tz > zz && this.text.skip(tz - zz)
            },
            span: (zz, tz, Fz, Xz) => {
              for (let Oz = zz; Oz < tz;) {
                let oz = this.text.next(Math.min(512, tz - Oz));
                null == oz ? (Wz.addLineStartIfNotCovered(sz), Wz.addBreak(), Oz++) : (Wz.ensureLine(sz), Wz.addText(oz, Fz, Oz == zz ? Xz : Fz.length), Oz += oz.length), sz = null
              }
            }
          });
        Wz.addLineStartIfNotCovered(sz), this.openWidget = Oz > Xz, this.openMarks = Oz
      }
      forward(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        tz - zz <= 10 ? this.old.advance(tz - zz, sz, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(tz - zz - 10, -1), this.old.advance(5, sz, this.reuseWalker))
      }
      getCompositionContext(zz) {
        let tz = [],
          sz = null;
        for (let Fz = zz.parentNode;; Fz = Fz.parentNode) {
          let zz = bs.get(Fz);
          if (Fz == this.view.contentDOM) break;
          zz instanceof rs ? tz.push(zz) : (null === zz || void 0 === zz ? void 0 : zz.isLine()) ? sz = zz : zz instanceof Hs || ("DIV" != Fz.nodeName || sz || Fz == this.view.contentDOM ? sz || tz.push(rs.of(new jz({
            tagName: Fz.nodeName.toLowerCase(),
            attributes: Zz(Fz)
          }), Fz)) : sz = new Bs(Fz, ys))
        }
        return {
          line: sz,
          marks: tz
        }
      }
    }

    function As(zz, tz) {
      let sz = zz => {
        for (let Fz of zz.children)
          if ((tz ? Fz.isText() : Fz.length) || sz(Fz)) return !0;
        return !1
      };
      return sz(zz)
    }
    const ys = {
      class: "cm-line"
    };

    function Ms(zz) {
      let tz = bs.get(zz);
      return tz && tz.setDOM(zz.cloneNode()), zz
    }
    class ds extends Gz {
      constructor(zz) {
        super(), this.tag = zz
      }
      eq(zz) {
        return zz.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(zz) {
        return zz.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    ds.inline = new ds("span"), ds.block = new ds("div");
    const hs = new class extends Gz {
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
    class Qs {
      constructor(zz) {
        this.view = zz, this.sW = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = cz.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new gs(zz, zz.contentDOM), this.updateInner([new Ks(0, 0, 0, zz.state.doc.length)], null)
      }
      update(zz) {
        var tz;
        let sz = zz.changedRanges;
        this.minWidth > 0 && sz.length && (sz.every((zz => {
          let {
            fromA: tz,
            toA: sz
          } = zz;
          return sz < this.minWidthFrom || tz > this.minWidthTo
        })) ? (this.minWidthFrom = zz.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = zz.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(zz);
        let Wz = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (tz = this.domChanged) || void 0 === tz ? void 0 : tz.newSel) ? Wz = this.domChanged.newSel.head : function(zz, tz) {
          let sz = !1;
          tz && zz.iterChangedRanges(((zz, Fz) => {
            zz < tz.to && Fz > tz.from && (sz = !0)
          }));
          return sz
        }(zz.changes, this.hasComposition) || zz.selectionSet || (Wz = zz.state.selection.main.head));
        let Xz = Wz > -1 ? function(zz, tz, sz) {
          let Fz = is(zz, sz);
          if (!Fz) return null;
          let {
            node: Wz,
            from: Xz,
            to: Oz
          } = Fz, oz = Wz.nodeValue;
          if (/[\n\r]/.test(oz)) return null;
          if (zz.state.doc.sliceString(Fz.from, Fz.to) != oz) return null;
          let vz = tz.invertedDesc;
          return {
            range: new Ks(vz.mapPos(Xz), vz.mapPos(Oz), Xz, Oz),
            text: Wz
          }
        }(this.view, zz.changes, Wz) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: tz,
            to: Fz
          } = this.hasComposition;
          sz = new Ks(tz, Fz, zz.changes.mapPos(tz, -1), zz.changes.mapPos(Fz, 1)).addToSet(sz.slice())
        }
        this.hasComposition = Xz ? {
          from: Xz.range.fromB,
          to: Xz.range.toB
        } : null, (mz.ie || mz.chrome) && !Xz && zz && zz.state.doc.lines != zz.startState.doc.lines && (this.forceSelection = !0);
        let Oz = this.sW,
          oz = this.blockWrappers;
        this.updateDeco();
        let vz = function(zz, tz, sz) {
          let Wz = new Ls;
          return Fz.B.compare(zz, tz, sz, Wz), Wz.changes
        }(Oz, this.sW, zz.changes);
        vz.length && (sz = Ks.extendWithRanges(sz, vz));
        let Uz = function(zz, tz, sz) {
          let Wz = new ls;
          return Fz.B.compare(zz, tz, sz, Wz), Wz.changes
        }(oz, this.blockWrappers, zz.changes);
        return Uz.length && (sz = Ks.extendWithRanges(sz, Uz)), Xz && !sz.some((zz => zz.fromA <= Xz.range.fromA && zz.toA >= Xz.range.toA)) && (sz = Xz.range.addToSet(sz.slice())), !(2 & this.tile.flags && 0 == sz.length) && (this.updateInner(sz, Xz), zz.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(zz, tz) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: sz
        } = this.view;
        sz.ignore((() => {
          if (tz || zz.length) {
            let sz = this.tile,
              Fz = new cs(this.view, sz, this.blockWrappers, this.sW, this.dynamicDecorationMap);
            tz && bs.get(tz.text) && Fz.cache.reused.set(bs.get(tz.text), 2), this.tile = Fz.run(zz, tz), ks(sz, Fz.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Fz = mz.chrome || mz.ios ? {
            node: sz.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Fz), !Fz || !Fz.written && sz.selectionRange.focusNode == Fz.node && this.tile.dom.contains(Fz.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Fz = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Wz of this.tile.children) Wz.isWidget() && Wz.widget instanceof ns && Fz.push(Wz.dom);
        sz.updateGaps(Fz)
      }
      updateEditContextFormatting(zz) {
        this.editContextFormatting = this.editContextFormatting.map(zz.changes);
        for (let tz of zz.transactions)
          for (let zz of tz.effects) zz.is(nt) && (this.editContextFormatting = zz.value)
      }
      updateSelection() {
        let zz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: tz
        } = this.tile, sz = this.view.root.activeElement, Fz = sz == tz, Wz = !Fz && !(this.view.state.facet(St) || tz.tabIndex > -1) && iz(tz, this.view.observer.selectionRange) && !(sz && tz.contains(sz));
        if (!(Fz || zz || Wz)) return;
        let Xz = this.forceSelection;
        this.forceSelection = !1;
        let Oz, oz, vz = this.view.state.selection.main;
        if (vz.empty ? oz = Oz = this.inlineDOMNearPos(vz.anchor, vz.assoc || 1) : (oz = this.inlineDOMNearPos(vz.head, vz.head == vz.from ? 1 : -1), Oz = this.inlineDOMNearPos(vz.anchor, vz.anchor == vz.from ? 1 : -1)), mz.gecko && vz.empty && !this.hasComposition && (1 == (Uz = Oz).node.nodeType && Uz.node.firstChild && (0 == Uz.offset || "false" == Uz.node.childNodes[Uz.offset - 1].contentEditable) && (Uz.offset == Uz.node.childNodes.length || "false" == Uz.node.childNodes[Uz.offset].contentEditable))) {
          let zz = document.createTextNode("");
          this.view.observer.ignore((() => Oz.node.insertBefore(zz, Oz.node.childNodes[Oz.offset] || null))), Oz = oz = new vt(zz, 0), Xz = !0
        }
        var Uz;
        let Kz = this.view.observer.selectionRange;
        !Xz && Kz.focusNode && (lz(Oz.node, Oz.offset, Kz.anchorNode, Kz.anchorOffset) && lz(oz.node, oz.offset, Kz.focusNode, Kz.focusOffset) || this.suppressWidgetCursorChange(Kz, vz)) || (this.view.observer.ignore((() => {
          mz.android && mz.chrome && tz.contains(Kz.focusNode) && function(zz, tz) {
            for (let sz = zz; sz && sz != tz; sz = sz.assignedSlot || sz.parentNode)
              if (1 == sz.nodeType && "false" == sz.contentEditable) return !0;
            return !1
          }(Kz.focusNode, tz) && (tz.blur(), tz.focus({
            preventScroll: !0
          }));
          let zz = Qz(this.view.root);
          if (zz)
            if (vz.empty) {
              if (mz.gecko) {
                let zz = (Fz = Oz.node, Xz = Oz.offset, 1 != Fz.nodeType ? 0 : (Xz && "false" == Fz.childNodes[Xz - 1].contentEditable ? 1 : 0) | (Xz < Fz.childNodes.length && "false" == Fz.childNodes[Xz].contentEditable ? 2 : 0));
                if (zz && 3 != zz) {
                  let tz = (1 == zz ? Ot : ot)(Oz.node, Oz.offset);
                  tz && (Oz = new vt(tz.node, tz.offset))
                }
              }
              zz.collapse(Oz.node, Oz.offset), null != vz.bidiLevel && void 0 !== zz.caretBidiLevel && (zz.caretBidiLevel = vz.bidiLevel)
            } else if (zz.extend) {
            zz.collapse(Oz.node, Oz.offset);
            try {
              zz.extend(oz.node, oz.offset)
            } catch (Uz) {}
          } else {
            let tz = document.createRange();
            vz.anchor > vz.head && ([Oz, oz] = [oz, Oz]), tz.setEnd(oz.node, oz.offset), tz.setStart(Oz.node, Oz.offset), zz.removeAllRanges(), zz.addRange(tz)
          } else;
          var Fz, Xz;
          Wz && this.view.root.activeElement == tz && (tz.blur(), sz && sz.focus())
        })), this.view.observer.setSelectionRange(Oz, oz)), this.impreciseAnchor = Oz.precise ? null : new vt(Kz.anchorNode, Kz.anchorOffset), this.impreciseHead = oz.precise ? null : new vt(Kz.focusNode, Kz.focusOffset)
      }
      suppressWidgetCursorChange(zz, tz) {
        return this.hasComposition && tz.empty && lz(zz.focusNode, zz.focusOffset, zz.anchorNode, zz.anchorOffset) && this.posFromDOM(zz.focusNode, zz.focusOffset) == tz.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: zz
        } = this, tz = zz.state.selection.main, sz = Qz(zz.root), {
          anchorNode: Fz,
          anchorOffset: Wz
        } = zz.observer.selectionRange;
        if (!sz || !tz.empty || !tz.assoc || !sz.modify) return;
        let Xz = this.lineAt(tz.head, tz.assoc);
        if (!Xz) return;
        let Oz = Xz.posAtStart;
        if (tz.head == Oz || tz.head == Oz + Xz.length) return;
        let oz = this.coordsAt(tz.head, -1),
          vz = this.coordsAt(tz.head, 1);
        if (!oz || !vz || oz.bottom > vz.top) return;
        let Uz = this.domAtPos(tz.head + tz.assoc, tz.assoc);
        sz.collapse(Uz.node, Uz.offset), sz.modify("move", tz.assoc < 0 ? "forward" : "backward", "lineboundary"), zz.observer.readSelectionRange();
        let Kz = zz.observer.selectionRange;
        zz.docView.posFromDOM(Kz.anchorNode, Kz.anchorOffset) != tz.from && sz.collapse(Fz, Wz)
      }
      posFromDOM(zz, tz) {
        let sz = this.tile.nearest(zz);
        if (!sz) return 2 & this.tile.dom.compareDocumentPosition(zz) ? 0 : this.view.state.doc.length;
        let Fz = sz.posAtStart;
        if (!sz.isComposite()) return sz.isText() ? zz == sz.dom ? Fz + tz : Fz + (tz ? sz.length : 0) : Fz;
        {
          let Wz;
          if (zz == sz.dom) Wz = sz.dom.childNodes[tz];
          else {
            let Fz = 0 == Sz(zz) ? 0 : 0 == tz ? -1 : 1;
            for (;;) {
              let tz = zz.parentNode;
              if (tz == sz.dom) break;
              0 == Fz && tz.firstChild != tz.lastChild && (Fz = zz == tz.firstChild ? -1 : 1), zz = tz
            }
            Wz = Fz < 0 ? zz : zz.nextSibling
          }
          if (Wz == sz.dom.firstChild) return Fz;
          for (; Wz && !bs.get(Wz);) Wz = Wz.nextSibling;
          if (!Wz) return Fz + sz.length;
          for (let zz = 0, tz = Fz;; zz++) {
            let Fz = sz.children[zz];
            if (Fz.dom == Wz) return tz;
            tz += Fz.length + Fz.breakAfter
          }
        }
      }
      domAtPos(zz, tz) {
        let {
          tile: sz,
          offset: Fz
        } = this.tile.resolveBlock(zz, tz);
        return sz.isWidget() ? sz.domPosFor(zz, tz) : sz.domIn(Fz, tz)
      }
      inlineDOMNearPos(zz, tz) {
        let sz, Fz, Wz = -1,
          Xz = !1,
          Oz = -1,
          oz = !1;
        return this.tile.blockTiles(((tz, vz) => {
          if (tz.isWidget()) {
            if (32 & tz.flags && vz >= zz) return !0;
            16 & tz.flags && (Xz = !0)
          } else {
            let Uz = vz + tz.length;
            if (vz <= zz && (sz = tz, Wz = zz - vz, Xz = Uz < zz), Uz >= zz && !Fz && (Fz = tz, Oz = zz - vz, oz = vz > zz), vz > zz && Fz) return !0
          }
        })), sz || Fz ? (Xz && Fz ? sz = null : oz && sz && (Fz = null), sz && tz < 0 || !Fz ? sz.domIn(Wz, tz) : Fz.domIn(Oz, tz)) : this.domAtPos(zz, tz)
      }
      coordsAt(zz, tz) {
        let {
          tile: sz,
          offset: Fz
        } = this.tile.resolveBlock(zz, tz);
        return sz.isWidget() ? sz.widget instanceof ns ? null : sz.coordsInWidget(Fz, tz, !0) : sz.coordsIn(Fz, tz)
      }
      lineAt(zz, tz) {
        let {
          tile: sz
        } = this.tile.resolveBlock(zz, tz);
        return sz.isLine() ? sz : null
      }
      coordsForChar(zz) {
        let {
          tile: tz,
          offset: sz
        } = this.tile.resolveBlock(zz, 1);
        if (!tz.isLine()) return null;
        return function zz(tz, sz) {
          if (tz.isComposite())
            for (let Fz of tz.children) {
              if (Fz.length >= sz) {
                let tz = zz(Fz, sz);
                if (tz) return tz
              }
              if ((sz -= Fz.length) < 0) break
            } else if (tz.isText() && sz < tz.length) {
              let zz = (0, Fz.Y)(tz.text, sz);
              if (zz == sz) return null;
              let Wz = Ft(tz.dom, sz, zz).getClientRects();
              for (let tz = 0; tz < Wz.length; tz++) {
                let zz = Wz[tz];
                if (tz == Wz.length - 1 || zz.top < zz.bottom && zz.left < zz.right) return zz
              }
            } return null
        }(tz, sz)
      }
      measureVisibleLineHeights(zz) {
        let tz = [],
          {
            from: sz,
            to: Fz
          } = zz,
          Wz = this.view.contentDOM.clientWidth,
          Xz = Wz > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          Oz = -1,
          oz = this.view.textDirection == Ut.LTR,
          vz = 0,
          Uz = (zz, Kz, uz) => {
            for (let Nz = 0; Nz < zz.children.length && !(Kz > Fz); Nz++) {
              let Fz = zz.children[Nz],
                bz = Kz + Fz.length,
                wz = Fz.dom.getBoundingClientRect(),
                {
                  height: Dz
                } = wz;
              if (uz && !Nz && (vz += wz.top - uz.top), Fz instanceof Hs) bz > sz && Uz(Fz, Kz, wz);
              else if (Kz >= sz && (vz > 0 && tz.push(-vz), tz.push(Dz + vz), vz = 0, Xz)) {
                let zz = Fz.dom.lastChild,
                  tz = zz ? Lz(zz) : [];
                if (tz.length) {
                  let zz = tz[tz.length - 1],
                    sz = oz ? zz.right - wz.left : wz.right - zz.left;
                  sz > Oz && (Oz = sz, this.minWidth = Wz, this.minWidthFrom = Kz, this.minWidthTo = bz)
                }
              }
              uz && Nz == zz.children.length - 1 && (vz += uz.bottom - wz.bottom), Kz = bz + Fz.breakAfter
            }
          };
        return Uz(this.tile, 0, null), tz
      }
      textDirectionAt(zz) {
        let {
          tile: tz
        } = this.tile.resolveBlock(zz, 1);
        return "rtl" == getComputedStyle(tz.dom).direction ? Ut.RTL : Ut.LTR
      }
      measureTextSize() {
        let zz = this.tile.blockTiles((zz => {
          if (zz.isLine() && zz.children.length && zz.length <= 20) {
            let tz, sz = 0;
            for (let Fz of zz.children) {
              if (!Fz.isText() || /[^ -~]/.test(Fz.text)) return;
              let zz = Lz(Fz.dom);
              if (1 != zz.length) return;
              sz += zz[0].width, tz = zz[0].height
            }
            if (sz) return {
              lineHeight: zz.dom.getBoundingClientRect().height,
              charWidth: sz / zz.length,
              textHeight: tz
            }
          }
        }));
        if (zz) return zz;
        let tz, sz, Fz, Wz = document.createElement("div");
        return Wz.className = "cm-line", Wz.style.width = "99999px", Wz.style.position = "absolute", Wz.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Wz);
          let zz = Lz(Wz.firstChild)[0];
          tz = Wz.getBoundingClientRect().height, sz = zz && zz.width ? zz.width / 27 : 7, Fz = zz && zz.height ? zz.height : tz, Wz.remove()
        })), {
          lineHeight: tz,
          charWidth: sz,
          textHeight: Fz
        }
      }
      computeBlockGapDeco() {
        let zz = [],
          tz = this.view.viewState;
        for (let sz = 0, Fz = 0;; Fz++) {
          let Wz = Fz == tz.viewports.length ? null : tz.viewports[Fz],
            Xz = Wz ? Wz.from - 1 : this.view.state.doc.length;
          if (Xz > sz) {
            let Fz = (tz.lineBlockAt(Xz).bottom - tz.lineBlockAt(sz).top) / this.view.scaleY;
            zz.push(cz.replace({
              widget: new ns(Fz),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(sz, Xz))
          }
          if (!Wz) break;
          sz = Wz.to + 1
        }
        return cz.set(zz)
      }
      updateDeco() {
        let zz = 1,
          tz = this.view.state.facet(ts).map((tz => (this.dynamicDecorationMap[zz++] = "function" == typeof tz) ? tz(this.view) : tz)),
          sz = !1,
          Wz = this.view.state.facet(Fs).map(((zz, tz) => {
            let Fz = "function" == typeof zz;
            return Fz && (sz = !0), Fz ? zz(this.view) : zz
          }));
        for (Wz.length && (this.dynamicDecorationMap[zz++] = sz, tz.push(Fz.B.join(Wz))), this.sW = [this.editContextFormatting, ...tz, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; zz < this.sW.length;) this.dynamicDecorationMap[zz++] = !1;
        this.blockWrappers = this.view.state.facet(ss).map((zz => "function" == typeof zz ? zz(this.view) : zz))
      }
      scrollIntoView(zz) {
        var tz;
        if (zz.isSnapshot) {
          let tz = this.view.viewState.lineBlockAt(zz.range.head);
          return this.view.scrollDOM.scrollTop = tz.top - zz.yMargin, void(this.view.scrollDOM.scrollLeft = zz.xMargin)
        }
        for (let Kz of this.view.state.facet(it)) try {
          if (Kz(this.view, zz.range, zz)) return !0
        } catch (Uz) {
          qt(this.view.state, Uz, "scroll handler")
        }
        let sz, {
            range: Fz
          } = zz,
          Wz = this.coordsAt(Fz.head, null !== (tz = Fz.assoc) && void 0 !== tz ? tz : Fz.empty ? 0 : Fz.head > Fz.anchor ? -1 : 1);
        if (!Wz) return;
        !Fz.empty && (sz = this.coordsAt(Fz.anchor, Fz.anchor > Fz.head ? -1 : 1)) && (Wz = {
          left: Math.min(Wz.left, sz.left),
          top: Math.min(Wz.top, sz.top),
          right: Math.max(Wz.right, sz.right),
          bottom: Math.max(Wz.bottom, sz.bottom)
        });
        let Xz = vs(this.view),
          Oz = {
            left: Wz.left - Xz.left,
            top: Wz.top - Xz.top,
            right: Wz.right + Xz.right,
            bottom: Wz.bottom + Xz.bottom
          },
          {
            offsetWidth: oz,
            offsetHeight: vz
          } = this.view.scrollDOM;
        if (function(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
            let vz = zz.ownerDocument,
              Uz = vz.defaultView || window;
            for (let Kz = zz, uz = !1; Kz && !uz;)
              if (1 == Kz.nodeType) {
                let zz, Nz = Kz == vz.body,
                  bz = 1,
                  wz = 1;
                if (Nz) zz = Rz(Uz);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(Kz).position) && (uz = !0), Kz.scrollHeight <= Kz.clientHeight && Kz.scrollWidth <= Kz.clientWidth) {
                    Kz = Kz.assignedSlot || Kz.parentNode;
                    continue
                  }
                  let tz = Kz.getBoundingClientRect();
                  ({
                    scaleX: bz,
                    scaleY: wz
                  } = pz(Kz, tz)), zz = {
                    left: tz.left,
                    right: tz.left + Kz.clientWidth * bz,
                    top: tz.top,
                    bottom: tz.top + Kz.clientHeight * wz
                  }
                }
                let Dz = 0,
                  gz = 0;
                if ("nearest" == Wz) tz.top < zz.top + Oz ? (gz = tz.top - (zz.top + Oz), sz > 0 && tz.bottom > zz.bottom + gz && (gz = tz.bottom - zz.bottom + Oz)) : tz.bottom > zz.bottom - Oz && (gz = tz.bottom - zz.bottom + Oz, sz < 0 && tz.top - gz < zz.top && (gz = tz.top - (zz.top + Oz)));
                else {
                  let Fz = tz.bottom - tz.top,
                    Xz = zz.bottom - zz.top;
                  gz = ("center" == Wz && Fz <= Xz ? tz.top + Fz / 2 - Xz / 2 : "start" == Wz || "center" == Wz && sz < 0 ? tz.top - Oz : tz.bottom - Xz + Oz) - zz.top
                }
                if ("nearest" == Fz ? tz.left < zz.left + Xz ? (Dz = tz.left - (zz.left + Xz), sz > 0 && tz.right > zz.right + Dz && (Dz = tz.right - zz.right + Xz)) : tz.right > zz.right - Xz && (Dz = tz.right - zz.right + Xz, sz < 0 && tz.left < zz.left + Dz && (Dz = tz.left - (zz.left + Xz))) : Dz = ("center" == Fz ? tz.left + (tz.right - tz.left) / 2 - (zz.right - zz.left) / 2 : "start" == Fz == oz ? tz.left - Xz : tz.right - (zz.right - zz.left) + Xz) - zz.left, Dz || gz)
                  if (Nz) Uz.scrollBy(Dz, gz);
                  else {
                    let zz = 0,
                      sz = 0;
                    if (gz) {
                      let zz = Kz.scrollTop;
                      Kz.scrollTop += gz / wz, sz = (Kz.scrollTop - zz) * wz
                    }
                    if (Dz) {
                      let tz = Kz.scrollLeft;
                      Kz.scrollLeft += Dz / bz, zz = (Kz.scrollLeft - tz) * bz
                    }
                    tz = {
                      left: tz.left - zz,
                      top: tz.top - sz,
                      right: tz.right - zz,
                      bottom: tz.bottom - sz
                    }, zz && Math.abs(zz - Dz) < 1 && (Fz = "nearest"), sz && Math.abs(sz - gz) < 1 && (Wz = "nearest")
                  } if (Nz) break;
                (tz.top < zz.top || tz.bottom > zz.bottom || tz.left < zz.left || tz.right > zz.right) && (tz = {
                  left: Math.max(tz.left, zz.left),
                  right: Math.min(tz.right, zz.right),
                  top: Math.max(tz.top, zz.top),
                  bottom: Math.min(tz.bottom, zz.bottom)
                }), Kz = Kz.assignedSlot || Kz.parentNode
              } else {
                if (11 != Kz.nodeType) break;
                Kz = Kz.host
              }
          }(this.view.scrollDOM, Oz, Fz.head < Fz.anchor ? -1 : 1, zz.x, zz.y, Math.max(Math.min(zz.xMargin, oz), -oz), Math.max(Math.min(zz.yMargin, vz), -vz), this.view.textDirection == Ut.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Wz.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Wz.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let zz = this.view.docView.lineAt(Fz.head, 1);
          zz && zz.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(zz) {
        let tz = zz => zz.isWidget() || zz.children.some(tz);
        return tz(this.tile.resolveBlock(zz, 1).tile)
      }
      destroy() {
        ks(this.tile)
      }
    }

    function ks(zz, tz) {
      let sz = null === tz || void 0 === tz ? void 0 : tz.get(zz);
      if (1 != sz) {
        null == sz && zz.destroy();
        for (let sz of zz.children) ks(sz, tz)
      }
    }

    function is(zz, tz) {
      let sz = zz.observer.selectionRange;
      if (!sz.focusNode) return null;
      let Fz = Ot(sz.focusNode, sz.focusOffset),
        Wz = ot(sz.focusNode, sz.focusOffset),
        Xz = Fz || Wz;
      if (Wz && Fz && Wz.node != Fz.node) {
        let tz = bs.get(Wz.node);
        if (!tz || tz.isText() && tz.text != Wz.node.nodeValue) Xz = Wz;
        else if (zz.docView.lastCompositionAfterCursor) {
          let zz = bs.get(Fz.node);
          !zz || zz.isText() && zz.text != Fz.node.nodeValue || (Xz = Wz)
        }
      }
      if (zz.docView.lastCompositionAfterCursor = Xz != Fz, !Xz) return null;
      let Oz = tz - Xz.offset;
      return {
        from: Oz,
        to: Oz + Xz.node.nodeValue.length,
        node: Xz.node
      }
    }
    let Ls = class {
      constructor() {
        this.changes = []
      }
      compareRange(zz, tz) {
        dz(zz, tz, this.changes)
      }
      comparePoint(zz, tz) {
        dz(zz, tz, this.changes)
      }
      boundChange(zz) {
        dz(zz, zz, this.changes)
      }
    };
    class ls {
      constructor() {
        this.changes = []
      }
      compareRange(zz, tz) {
        dz(zz, tz, this.changes)
      }
      comparePoint() {}
      boundChange(zz) {
        dz(zz, zz, this.changes)
      }
    }
    class ns extends Gz {
      constructor(zz) {
        super(), this.height = zz
      }
      toDOM() {
        let zz = document.createElement("div");
        return zz.className = "cm-gap", this.updateDOM(zz), zz
      }
      eq(zz) {
        return zz.height == this.height
      }
      updateDOM(zz) {
        return zz.style.height = this.height + "px", !0
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

    function as(zz, tz, sz) {
      let Fz = zz.lineBlockAt(tz);
      if (Array.isArray(Fz.type)) {
        let zz;
        for (let Wz of Fz.type) {
          if (Wz.from > tz) break;
          if (!(Wz.to < tz)) {
            if (Wz.from < tz && Wz.to > tz) return Wz;
            zz && (Wz.type != Tz.Text || zz.type == Wz.type && !(sz < 0 ? Wz.from < tz : Wz.to > tz)) || (zz = Wz)
          }
        }
        return zz || Fz
      }
      return Fz
    }

    function qs(zz, tz, sz, Fz) {
      let Wz = zz.state.doc.lineAt(tz.head),
        Xz = zz.bidiSpans(Wz),
        Oz = zz.textDirectionAt(Wz.from);
      for (let oz = tz, vz = null;;) {
        let tz = et(Wz, Xz, Oz, oz, sz),
          Uz = Ct;
        if (!tz) {
          if (Wz.number == (sz ? zz.state.doc.lines : 1)) return oz;
          Uz = "\n", Wz = zz.state.doc.line(Wz.number + (sz ? 1 : -1)), Xz = zz.bidiSpans(Wz), tz = zz.visualLineSide(Wz, !sz)
        }
        if (vz) {
          if (!vz(Uz)) return oz
        } else {
          if (!Fz) return tz;
          vz = Fz(Uz)
        }
        oz = tz
      }
    }

    function Ss(zz, tz, sz) {
      for (;;) {
        let Fz = 0;
        for (let Wz of zz) Wz.between(tz - 1, tz + 1, ((zz, Wz, Xz) => {
          if (tz > zz && tz < Wz) {
            let Xz = Fz || sz || (tz - zz < Wz - tz ? -1 : 1);
            tz = Xz < 0 ? zz : Wz, Fz = Xz
          }
        }));
        if (!Fz) return tz
      }
    }

    function Vs(zz, tz) {
      let sz = null;
      for (let Wz = 0; Wz < tz.du.length; Wz++) {
        let Xz = tz.du[Wz],
          Oz = null;
        if (Xz.empty) {
          let tz = Ss(zz, Xz.from, 0);
          tz != Xz.from && (Oz = Fz.l.cursor(tz, -1))
        } else {
          let tz = Ss(zz, Xz.from, -1),
            sz = Ss(zz, Xz.to, 1);
          tz == Xz.from && sz == Xz.to || (Oz = Fz.l.range(Xz.from == Xz.anchor ? tz : sz, Xz.from == Xz.head ? tz : sz))
        }
        Oz && (sz || (sz = tz.du.slice()), sz[Wz] = Oz)
      }
      return sz ? Fz.l.create(sz, tz.mainIndex) : tz
    }

    function Rs(zz, tz, sz) {
      let Wz = Ss(zz.state.facet(Ws).map((tz => tz(zz))), sz.from, tz.head > sz.from ? -1 : 1);
      return Wz == sz.from ? sz : Fz.l.cursor(Wz, Wz < sz.from ? 1 : -1)
    }
    class ps {
      constructor(zz, tz) {
        this.pos = zz, this.assoc = tz
      }
    }

    function fs(zz, tz, sz, Wz) {
      let Xz, Oz = zz.contentDOM.getBoundingClientRect(),
        oz = Oz.top + zz.viewState.paddingTop,
        {
          x: vz,
          y: Uz
        } = tz,
        Kz = Uz - oz;
      for (;;) {
        if (Kz < 0) return new ps(0, 1);
        if (Kz > zz.viewState.docHeight) return new ps(zz.state.doc.length, -1);
        if (Xz = zz.elementAtHeight(Kz), null == Wz) break;
        if (Xz.type == Tz.Text) {
          if (Wz < 0 ? Xz.to < zz.viewport.from : Xz.from > zz.viewport.to) break;
          let tz = zz.docView.coordsAt(Wz < 0 ? Xz.from : Xz.to, Wz > 0 ? -1 : 1);
          if (tz && (Wz < 0 ? tz.top <= Kz + oz : tz.bottom >= Kz + oz)) break
        }
        let tz = zz.viewState.heightOracle.textHeight / 2;
        Kz = Wz > 0 ? Xz.bottom + tz : Xz.top - tz
      }
      if (zz.viewport.from >= Xz.to || zz.viewport.to <= Xz.from) {
        if (sz) return null;
        if (Xz.type == Tz.Text) {
          let tz = function(zz, tz, sz, Wz, Xz) {
            let Oz = Math.round((Wz - tz.left) * zz.defaultCharacterWidth);
            if (zz.lineWrapping && sz.height > 1.5 * zz.defaultLineHeight) {
              let tz = zz.viewState.heightOracle.textHeight;
              Oz += Math.floor((Xz - sz.top - .5 * (zz.defaultLineHeight - tz)) / tz) * zz.viewState.heightOracle.lineLength
            }
            let oz = zz.state.sliceDoc(sz.from, sz.to);
            return sz.from + (0, Fz._)(oz, Oz, zz.state.tabSize)
          }(zz, Oz, Xz, vz, Uz);
          return new ps(tz, tz == Xz.from ? 1 : -1)
        }
      }
      if (Xz.type != Tz.Text) return Kz < (Xz.top + Xz.bottom) / 2 ? new ps(Xz.from, 1) : new ps(Xz.to, -1);
      let uz = zz.docView.lineAt(Xz.from, 2);
      return uz && uz.length == Xz.length || (uz = zz.docView.lineAt(Xz.from, -2)), new Es(zz, vz, Uz, zz.textDirectionAt(Xz.from)).scanTile(uz, Xz.from)
    }
    class Es {
      constructor(zz, tz, sz, Fz) {
        this.view = zz, this.x = tz, this.y = sz, this.baseDir = Fz, this.line = null, this.spans = null
      }
      bidiSpansAt(zz) {
        return (!this.line || this.line.from > zz || this.line.to < zz) && (this.line = this.view.state.doc.lineAt(zz), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(zz, tz) {
        let {
          line: sz,
          spans: Fz
        } = this.bidiSpansAt(zz);
        return Fz[Pt.find(Fz, zz - sz.from, -1, tz)].level == this.baseDir
      }
      dirAt(zz, tz) {
        let {
          line: sz,
          spans: Fz
        } = this.bidiSpansAt(zz);
        return Fz[Pt.find(Fz, zz - sz.from, -1, tz)].dir
      }
      bidiIn(zz, tz) {
        let {
          spans: sz,
          line: Fz
        } = this.bidiSpansAt(zz);
        return sz.length > 1 || sz.length && (sz[0].level != this.baseDir || sz[0].to + Fz.from < tz)
      }
      scan(zz, tz) {
        let sz, Fz, Wz, Xz = 0,
          Oz = zz.length - 1,
          oz = new Set,
          vz = this.bidiIn(zz[0], zz[Oz]),
          Uz = -1,
          Kz = 1e9;
        zz: for (; Xz < Oz;) {
          let uz = Oz - Xz,
            Nz = Xz + Oz >> 1;
          tz: if (oz.has(Nz)) {
            let zz = Xz + Math.floor(Math.random() * uz);
            for (let tz = 0; tz < uz; tz++) {
              if (!oz.has(zz)) {
                Nz = zz;
                break tz
              }
              zz++, zz == Oz && (zz = Xz)
            }
            break zz
          } oz.add(Nz);
          let bz = tz(Nz);
          if (bz)
            for (let tz = 0; tz < bz.length; tz++) {
              let oz = bz[tz],
                uz = 0;
              if (!(0 == oz.width && bz.length > 1)) {
                if (oz.bottom < this.y)(!sz || sz.bottom < oz.bottom) && (sz = oz), uz = 1;
                else if (oz.top > this.y)(!Fz || Fz.top > oz.top) && (Fz = oz), uz = -1;
                else {
                  let zz = oz.left > this.x ? this.x - oz.left : oz.right < this.x ? this.x - oz.right : 0,
                    tz = Math.abs(zz);
                  tz < Kz && (Uz = Nz, Kz = tz, Wz = oz), zz && (uz = zz < 0 == (this.baseDir == Ut.LTR) ? -1 : 1)
                } - 1 != uz || vz && !this.baseDirAt(zz[Nz], 1) ? 1 != uz || vz && !this.baseDirAt(zz[Nz + 1], -1) || (Xz = Nz + 1) : Oz = Nz
              }
            }
        }
        if (!Wz) {
          let Wz = sz && (!Fz || this.y - sz.bottom < Fz.top - this.y) ? sz : Fz;
          return this.y = (Wz.top + Wz.bottom) / 2, this.scan(zz, tz)
        }
        if (Kz) {
          if (sz && sz.bottom > Wz.top) return this.y = sz.bottom - 1, this.scan(zz, tz);
          if (Fz && Fz.top < Wz.bottom) return this.y = Fz.top + 1, this.scan(zz, tz)
        }
        let uz = (vz ? this.dirAt(zz[Uz], 1) : this.baseDir) == Ut.LTR;
        return {
          i: Uz,
          after: this.x > (Wz.left + Wz.right) / 2 == uz
        }
      }
      scanText(zz, tz) {
        let sz = [];
        for (let Xz = 0; Xz < zz.length; Xz = (0, Fz.Y)(zz.text, Xz)) sz.push(tz + Xz);
        sz.push(tz + zz.length);
        let Wz = this.scan(sz, (Fz => {
          let Wz = sz[Fz] - tz,
            Xz = sz[Fz + 1] - tz;
          return Ft(zz.dom, Wz, Xz).getClientRects()
        }));
        return Wz.after ? new ps(sz[Wz.i + 1], -1) : new ps(sz[Wz.i], 1)
      }
      scanTile(zz, tz) {
        if (!zz.length) return new ps(tz, 1);
        if (1 == zz.children.length) {
          let sz = zz.children[0];
          if (sz.isText()) return this.scanText(sz, tz);
          if (sz.isComposite()) return this.scanTile(sz, tz)
        }
        let sz = [tz];
        for (let Oz = 0, oz = tz; Oz < zz.children.length; Oz++) sz.push(oz += zz.children[Oz].length);
        let Fz = this.scan(sz, (tz => {
            let sz = zz.children[tz];
            return 48 & sz.flags ? null : (1 == sz.dom.nodeType ? sz.dom : Ft(sz.dom, 0, sz.length)).getClientRects()
          })),
          Wz = zz.children[Fz.i],
          Xz = sz[Fz.i];
        return Wz.isText() ? this.scanText(Wz, Xz) : Wz.isComposite() ? this.scanTile(Wz, Xz) : Fz.after ? new ps(sz[Fz.i + 1], -1) : new ps(Xz, 1)
      }
    }
    const zF = "\uffff";
    class tF {
      constructor(zz, tz) {
        this.points = zz, this.view = tz, this.text = "", this.lineSeparator = tz.state.facet(Fz.p.lineSeparator)
      }
      append(zz) {
        this.text += zz
      }
      lineBreak() {
        this.text += zF
      }
      readRange(zz, tz) {
        if (!zz) return this;
        let sz = zz.parentNode;
        for (let Fz = zz;;) {
          this.findPointBefore(sz, Fz);
          let zz = this.text.length;
          this.readNode(Fz);
          let Wz = bs.get(Fz),
            Xz = Fz.nextSibling;
          if (Xz == tz) {
            (null === Wz || void 0 === Wz ? void 0 : Wz.breakAfter) && !Xz && sz != this.view.contentDOM && this.lineBreak();
            break
          }
          let Oz = bs.get(Xz);
          (Wz && Oz ? Wz.breakAfter : (Wz ? Wz.breakAfter : az(Fz)) || az(Xz) && ("BR" != Fz.nodeName || (null === Wz || void 0 === Wz ? void 0 : Wz.isWidget())) && this.text.length > zz) && !FF(Xz, tz) && this.lineBreak(), Fz = Xz
        }
        return this.findPointBefore(sz, tz), this
      }
      readTextNode(zz) {
        let tz = zz.nodeValue;
        for (let sz of this.points) sz.node == zz && (sz.pos = this.text.length + Math.min(sz.offset, tz.length));
        for (let sz = 0, Fz = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Wz, Xz = -1,
            Oz = 1;
          if (this.lineSeparator ? (Xz = tz.indexOf(this.lineSeparator, sz), Oz = this.lineSeparator.length) : (Wz = Fz.exec(tz)) && (Xz = Wz.index, Oz = Wz[0].length), this.append(tz.slice(sz, Xz < 0 ? tz.length : Xz)), Xz < 0) break;
          if (this.lineBreak(), Oz > 1)
            for (let tz of this.points) tz.node == zz && tz.pos > this.text.length && (tz.pos -= Oz - 1);
          sz = Xz + Oz
        }
      }
      readNode(zz) {
        let tz = bs.get(zz),
          sz = tz && tz.overrideDOMText;
        if (null != sz) {
          this.findPointInside(zz, sz.length);
          for (let zz = sz.iter(); !zz.next().done;) zz.lineBreak ? this.lineBreak() : this.append(zz.value)
        } else 3 == zz.nodeType ? this.readTextNode(zz) : "BR" == zz.nodeName ? zz.nextSibling && this.lineBreak() : 1 == zz.nodeType && this.readRange(zz.firstChild, null)
      }
      findPointBefore(zz, tz) {
        for (let sz of this.points) sz.node == zz && zz.childNodes[sz.offset] == tz && (sz.pos = this.text.length)
      }
      findPointInside(zz, tz) {
        for (let sz of this.points)(3 == zz.nodeType ? sz.node == zz : zz.contains(sz.node)) && (sz.pos = this.text.length + (sF(zz, sz.node, sz.offset) ? tz : 0))
      }
    }

    function sF(zz, tz, sz) {
      for (;;) {
        if (!tz || sz < Sz(tz)) return !1;
        if (tz == zz) return !0;
        sz = nz(tz) + 1, tz = tz.parentNode
      }
    }

    function FF(zz, tz) {
      let sz;
      for (; zz != tz && zz; zz = zz.nextSibling) {
        let tz = bs.get(zz);
        if (!(null === tz || void 0 === tz ? void 0 : tz.isWidget())) return !1;
        tz && (sz || (sz = [])).push(tz)
      }
      if (sz)
        for (let Fz of sz) {
          let zz = Fz.overrideDOMText;
          if (null === zz || void 0 === zz ? void 0 : zz.length) return !1
        }
      return !0
    }
    class WF {
      constructor(zz, tz) {
        this.node = zz, this.offset = tz, this.pos = -1
      }
    }
    class XF {
      constructor(zz, tz, sz, Wz) {
        this.typeOver = Wz, this.bounds = null, this.text = "", this.domChanged = tz > -1;
        let {
          impreciseHead: Xz,
          impreciseAnchor: Oz
        } = zz.docView, oz = zz.state.selection;
        if (zz.state.readOnly && tz > -1) this.newSel = null;
        else if (tz > -1 && (this.bounds = OF(zz.docView.tile, tz, sz, 0))) {
          let tz = Xz || Oz ? [] : function(zz) {
              let tz = [];
              if (zz.root.activeElement != zz.contentDOM) return tz;
              let {
                anchorNode: sz,
                anchorOffset: Fz,
                focusNode: Wz,
                focusOffset: Xz
              } = zz.observer.selectionRange;
              sz && (tz.push(new WF(sz, Fz)), Wz == sz && Xz == Fz || tz.push(new WF(Wz, Xz)));
              return tz
            }(zz),
            sz = new tF(tz, zz);
          sz.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = sz.text, this.newSel = function(zz, tz) {
            if (0 == zz.length) return null;
            let sz = zz[0].pos,
              Wz = 2 == zz.length ? zz[1].pos : sz;
            return sz > -1 && Wz > -1 ? Fz.l.single(sz + tz, Wz + tz) : null
          }(tz, this.bounds.from)
        } else {
          let tz = zz.observer.selectionRange,
            sz = Xz && Xz.node == tz.focusNode && Xz.offset == tz.focusOffset || !kz(zz.contentDOM, tz.focusNode) ? oz.main.head : zz.docView.posFromDOM(tz.focusNode, tz.focusOffset),
            Wz = Oz && Oz.node == tz.anchorNode && Oz.offset == tz.anchorOffset || !kz(zz.contentDOM, tz.anchorNode) ? oz.main.anchor : zz.docView.posFromDOM(tz.anchorNode, tz.anchorOffset),
            vz = zz.viewport;
          if ((mz.ios || mz.chrome) && oz.main.empty && sz != Wz && (vz.from > 0 || vz.to < zz.state.doc.length)) {
            let tz = Math.min(sz, Wz),
              Fz = Math.max(sz, Wz),
              Xz = vz.from - tz,
              Oz = vz.to - Fz;
            0 != Xz && 1 != Xz && 0 != tz || 0 != Oz && -1 != Oz && Fz != zz.state.doc.length || (sz = 0, Wz = zz.state.doc.length)
          }
          if (zz.inputState.composing > -1 && oz.du.length > 1) this.newSel = oz.replaceRange(Fz.l.range(Wz, sz));
          else if (zz.lineWrapping && Wz == sz && (!oz.main.empty || oz.main.head != sz) && zz.inputState.lastTouchTime > Date.now() - 100) {
            let tz = zz.coordsAtPos(sz, -1),
              Wz = 0;
            tz && (Wz = zz.inputState.lastTouchY <= tz.bottom ? -1 : 1), this.newSel = Fz.l.create([Fz.l.cursor(sz, Wz)])
          } else this.newSel = Fz.l.single(Wz, sz)
        }
      }
    }

    function OF(zz, tz, sz, Fz) {
      if (zz.isComposite()) {
        let Wz = -1,
          Xz = -1,
          Oz = -1,
          oz = -1;
        for (let vz = 0, Uz = Fz, Kz = Fz; vz < zz.children.length; vz++) {
          let Fz = zz.children[vz],
            uz = Uz + Fz.length;
          if (Uz < tz && uz > sz) return OF(Fz, tz, sz, Uz);
          if (uz >= tz && -1 == Wz && (Wz = vz, Xz = Uz), Uz > sz && Fz.dom.parentNode == zz.dom) {
            Oz = vz, oz = Kz;
            break
          }
          Kz = uz, Uz = uz + Fz.breakAfter
        }
        return {
          from: Xz,
          to: oz < 0 ? Fz + zz.length : oz,
          startDOM: (Wz ? zz.children[Wz - 1].dom.nextSibling : null) || zz.dom.firstChild,
          endDOM: Oz < zz.children.length && Oz >= 0 ? zz.children[Oz].dom : null
        }
      }
      return zz.isText() ? {
        from: Fz,
        to: Fz + zz.length,
        startDOM: zz.dom,
        endDOM: zz.dom.nextSibling
      } : null
    }

    function oF(zz, tz) {
      let sz, {
          newSel: Wz
        } = tz,
        {
          state: Xz
        } = zz,
        Oz = Xz.selection.main,
        oz = zz.inputState.lastKeyTime > Date.now() - 100 ? zz.inputState.lastKeyCode : -1;
      if (tz.bounds) {
        let {
          from: zz,
          to: Wz
        } = tz.bounds, vz = Oz.from, Uz = null;
        (8 === oz || mz.android && tz.text.length < Wz - zz) && (vz = Oz.to, Uz = "end");
        let Kz, uz, Nz = Xz.doc.sliceString(zz, Wz, zF);
        !Oz.empty && Oz.from >= zz && Oz.to <= Wz && (tz.typeOver || Nz != tz.text) && Nz.slice(0, Oz.from - zz) == tz.text.slice(0, Oz.from - zz) && Nz.slice(Oz.to - zz) == tz.text.slice(Kz = tz.text.length - (Nz.length - (Oz.to - zz))) ? sz = {
          from: Oz.from,
          to: Oz.to,
          insert: Fz.I.of(tz.text.slice(Oz.from - zz, Kz).split(zF))
        } : (uz = UF(Nz, tz.text, vz - zz, Uz)) && (mz.chrome && 13 == oz && uz.toB == uz.from + 2 && tz.text.slice(uz.from, uz.toB) == zF + zF && uz.toB--, sz = {
          from: zz + uz.from,
          to: zz + uz.toA,
          insert: Fz.I.of(tz.text.slice(uz.from, uz.toB).split(zF))
        })
      } else Wz && (!zz.hasFocus && Xz.facet(St) || KF(Wz, Oz)) && (Wz = null);
      if (!sz && !Wz) return !1;
      if ((mz.mac || mz.android) && sz && sz.from == sz.to && sz.from == Oz.head - 1 && /^\. ?$/.test(sz.insert.toString()) && "off" == zz.contentDOM.getAttribute("autocorrect") ? (Wz && 2 == sz.insert.length && (Wz = Fz.l.single(Wz.main.anchor - 1, Wz.main.head - 1)), sz = {
          from: sz.from,
          to: sz.to,
          insert: Fz.I.of([sz.insert.toString().replace(".", " ")])
        }) : Xz.doc.lineAt(Oz.from).to < Oz.to && zz.docView.lineHasWidget(Oz.to) && zz.inputState.insertingTextAt > Date.now() - 50 ? sz = {
          from: Oz.from,
          to: Oz.to,
          insert: Xz.toText(zz.inputState.insertingText)
        } : mz.chrome && sz && sz.from == sz.to && sz.from == Oz.head && "\n " == sz.insert.toString() && zz.lineWrapping && (Wz && (Wz = Fz.l.single(Wz.main.anchor - 1, Wz.main.head - 1)), sz = {
          from: Oz.from,
          to: Oz.to,
          insert: Fz.I.of([" "])
        }), sz) return vF(zz, sz, Wz, oz);
      if (Wz && !KF(Wz, Oz)) {
        let tz = !1,
          sz = "select";
        return zz.inputState.lastSelectionTime > Date.now() - 50 && ("select" == zz.inputState.lastSelectionOrigin && (tz = !0), sz = zz.inputState.lastSelectionOrigin, "select.pointer" == sz && (Wz = Vs(Xz.facet(Ws).map((tz => tz(zz))), Wz))), zz.dispatch({
          selection: Wz,
          scrollIntoView: tz,
          userEvent: sz
        }), !0
      }
      return !1
    }

    function vF(zz, tz, sz) {
      let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (mz.ios && zz.inputState.flushIOSKey(tz)) return !0;
      let Xz = zz.state.selection.main;
      if (mz.android && (tz.to == Xz.to && (tz.from == Xz.from || tz.from == Xz.from - 1 && " " == zz.state.sliceDoc(tz.from, Xz.from)) && 1 == tz.insert.length && 2 == tz.insert.lines && Wt(zz.contentDOM, "Enter", 13) || (tz.from == Xz.from - 1 && tz.to == Xz.to && 0 == tz.insert.length || 8 == Wz && tz.insert.length < tz.to - tz.from && tz.to > Xz.head) && Wt(zz.contentDOM, "Backspace", 8) || tz.from == Xz.from && tz.to == Xz.to + 1 && 0 == tz.insert.length && Wt(zz.contentDOM, "Delete", 46))) return !0;
      let Oz, oz = tz.insert.toString();
      zz.inputState.composing >= 0 && zz.inputState.composing++;
      let vz = () => Oz || (Oz = function(zz, tz, sz) {
        let Wz, Xz = zz.state,
          Oz = Xz.selection.main,
          oz = -1;
        if (tz.from == tz.to && tz.from < Oz.from || tz.from > Oz.to) {
          let sz = tz.from < Oz.from ? -1 : 1,
            Fz = sz < 0 ? Oz.from : Oz.to,
            Wz = Ss(Xz.facet(Ws).map((tz => tz(zz))), Fz, sz);
          tz.from == Wz && (oz = Wz)
        }
        if (oz > -1) Wz = {
          changes: tz,
          selection: Fz.l.cursor(tz.from + tz.insert.length, -1)
        };
        else if (tz.from >= Oz.from && tz.to <= Oz.to && tz.to - tz.from >= (Oz.to - Oz.from) / 3 && (!sz || sz.main.empty && sz.main.from == tz.from + tz.insert.length) && zz.inputState.composing < 0) {
          let sz = Oz.from < tz.from ? Xz.sliceDoc(Oz.from, tz.from) : "",
            Fz = Oz.to > tz.to ? Xz.sliceDoc(tz.to, Oz.to) : "";
          Wz = Xz.replaceSelection(zz.state.toText(sz + tz.insert.sliceString(0, void 0, zz.state.lineBreak) + Fz))
        } else {
          let oz = Xz.changes(tz),
            vz = sz && sz.main.to <= oz.newLength ? sz.main : void 0;
          if (Xz.selection.du.length > 1 && (zz.inputState.composing >= 0 || zz.inputState.compositionPendingChange) && tz.to <= Oz.to + 10 && tz.to >= Oz.to - 10) {
            let Uz, Kz = zz.state.sliceDoc(tz.from, tz.to),
              uz = sz && is(zz, sz.main.head);
            if (uz) {
              let zz = tz.insert.length - (tz.to - tz.from);
              Uz = {
                from: uz.from,
                to: uz.to - zz
              }
            } else Uz = zz.state.doc.lineAt(Oz.head);
            let Nz = Oz.to - tz.to;
            Wz = Xz.changeByRange((sz => {
              if (sz.from == Oz.from && sz.to == Oz.to) return {
                changes: oz,
                range: vz || sz.map(oz)
              };
              let Wz = sz.to - Nz,
                uz = Wz - Kz.length;
              if (zz.state.sliceDoc(uz, Wz) != Kz || Wz >= Uz.from && uz <= Uz.to) return {
                range: sz
              };
              let bz = Xz.changes({
                  from: uz,
                  to: Wz,
                  insert: tz.insert
                }),
                wz = sz.to - Oz.to;
              return {
                changes: bz,
                range: vz ? Fz.l.range(Math.max(0, vz.anchor + wz), Math.max(0, vz.head + wz)) : sz.map(bz)
              }
            }))
          } else Wz = {
            changes: oz,
            selection: vz && Xz.selection.replaceRange(vz)
          }
        }
        let vz = "input.type";
        (zz.composing || zz.inputState.compositionPendingChange && zz.inputState.compositionEndedAt > Date.now() - 50) && (zz.inputState.compositionPendingChange = !1, vz += ".compose", zz.inputState.compositionFirstChange && (vz += ".start", zz.inputState.compositionFirstChange = !1));
        return Xz.update(Wz, {
          userEvent: vz,
          scrollIntoView: !0
        })
      }(zz, tz, sz));
      return zz.state.facet(yt).some((sz => sz(zz, tz.from, tz.to, oz, vz))) || zz.dispatch(vz()), !0
    }

    function UF(zz, tz, sz, Fz) {
      let Wz = Math.min(zz.length, tz.length),
        Xz = 0;
      for (; Xz < Wz && zz.charCodeAt(Xz) == tz.charCodeAt(Xz);) Xz++;
      if (Xz == Wz && zz.length == tz.length) return null;
      let Oz = zz.length,
        oz = tz.length;
      for (; Oz > 0 && oz > 0 && zz.charCodeAt(Oz - 1) == tz.charCodeAt(oz - 1);) Oz--, oz--;
      if ("end" == Fz) {
        sz -= Oz + Math.max(0, Xz - Math.min(Oz, oz)) - Xz
      }
      if (Oz < Xz && zz.length < tz.length) {
        Xz -= sz <= Xz && sz >= Oz ? Xz - sz : 0, oz = Xz + (oz - Oz), Oz = Xz
      } else if (oz < Xz) {
        Xz -= sz <= Xz && sz >= oz ? Xz - sz : 0, Oz = Xz + (Oz - oz), oz = Xz
      }
      return {
        from: Xz,
        toA: Oz,
        toB: oz
      }
    }

    function KF(zz, tz) {
      return tz.head == zz.main.head && tz.anchor == zz.main.anchor
    }
    class uF {
      setSelectionOrigin(zz) {
        this.lastSelectionOrigin = zz, this.lastSelectionTime = Date.now()
      }
      constructor(zz) {
        this.view = zz, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = zz.hasFocus, mz.safari && zz.contentDOM.addEventListener("input", (() => null)), mz.gecko && function(zz) {
          MF.has(zz) || (MF.add(zz), zz.addEventListener("copy", (() => {})), zz.addEventListener("cut", (() => {})))
        }(zz.contentDOM.ownerDocument)
      }
      handleEvent(zz) {
        (function(zz, tz) {
          if (!tz.bubbles) return !0;
          if (tz.defaultPrevented) return !1;
          for (let sz, Fz = tz.target; Fz != zz.contentDOM; Fz = Fz.parentNode)
            if (!Fz || 11 == Fz.nodeType || (sz = bs.get(Fz)) && sz.isWidget() && !sz.isHidden && sz.widget.ignoreEvent(tz)) return !1;
          return !0
        })(this.view, zz) && !this.ignoreDuringComposition(zz) && ("keydown" == zz.type && this.keydown(zz) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(zz.type, zz))) : this.runHandlers(zz.type, zz)))
      }
      runHandlers(zz, tz) {
        let sz = this.handlers[zz];
        if (sz) {
          for (let zz of sz.observers) zz(this.view, tz);
          for (let zz of sz.handlers) {
            if (tz.defaultPrevented) break;
            if (zz(this.view, tz)) {
              tz.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(zz) {
        let tz = bF(zz),
          sz = this.handlers,
          Fz = this.view.contentDOM;
        for (let Wz in tz)
          if ("scroll" != Wz) {
            let zz = !tz[Wz].handlers.length,
              Xz = sz[Wz];
            Xz && zz != !Xz.handlers.length && (Fz.removeEventListener(Wz, this.handleEvent), Xz = null), Xz || Fz.addEventListener(Wz, this.handleEvent, {
              passive: zz
            })
          } for (let Wz in sz) "scroll" == Wz || tz[Wz] || Fz.removeEventListener(Wz, this.handleEvent);
        this.handlers = tz
      }
      keydown(zz) {
        if (this.lastKeyCode = zz.keyCode, this.lastKeyTime = Date.now(), 9 == zz.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != zz.keyCode && gF.indexOf(zz.keyCode) < 0 && (this.tabFocusMode = -1), mz.android && mz.chrome && !zz.synthetic && (13 == zz.keyCode || 8 == zz.keyCode)) return this.view.observer.delayAndroidKey(zz.key, zz.keyCode), !0;
        let tz;
        return !mz.ios || zz.synthetic || zz.altKey || zz.metaKey || zz.shiftKey || !((tz = wF.find((tz => tz.keyCode == zz.keyCode))) && !zz.ctrlKey || DF.indexOf(zz.key) > -1 && zz.ctrlKey) ? (229 != zz.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = tz || zz, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(zz) {
        let tz = this.pendingIOSKey;
        return !!tz && (!("Enter" == tz.key && zz && zz.from < zz.to && /^\S+$/.test(zz.insert.toString())) && (this.pendingIOSKey = void 0, Wt(this.view.contentDOM, tz.key, tz.keyCode, tz instanceof KeyboardEvent ? tz : void 0)))
      }
      ignoreDuringComposition(zz) {
        return !(!/^key/.test(zz.type) || zz.synthetic) && (this.composing > 0 || !!(mz.safari && !mz.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(zz) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = zz
      }
      update(zz) {
        this.view.observer.update(zz), this.mouseSelection && this.mouseSelection.update(zz), this.draggedContent && zz.docChanged && (this.draggedContent = this.draggedContent.map(zz.changes)), zz.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function NF(zz, tz) {
      return (sz, Fz) => {
        try {
          return tz.call(zz, Fz, sz)
        } catch (Wz) {
          qt(sz.state, Wz)
        }
      }
    }

    function bF(zz) {
      let tz = Object.create(null);

      function sz(zz) {
        return tz[zz] || (tz[zz] = {
          observers: [],
          handlers: []
        })
      }
      for (let Fz of zz) {
        let zz = Fz.spec,
          tz = zz && zz.plugin.domEventHandlers,
          Wz = zz && zz.plugin.domEventObservers;
        if (tz)
          for (let Xz in tz) {
            let zz = tz[Xz];
            zz && sz(Xz).handlers.push(NF(Fz.value, zz))
          }
        if (Wz)
          for (let Xz in Wz) {
            let zz = Wz[Xz];
            zz && sz(Xz).observers.push(NF(Fz.value, zz))
          }
      }
      for (let Fz in PF) sz(Fz).handlers.push(PF[Fz]);
      for (let Fz in rF) sz(Fz).observers.push(rF[Fz]);
      return tz
    }
    const wF = [{
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
      DF = "dthko",
      gF = [16, 17, 18, 20, 91, 92, 224, 225];

    function HF(zz) {
      return .7 * Math.max(0, zz) + 8
    }
    class BF {
      constructor(zz, tz, sz, Wz) {
        this.view = zz, this.startEvent = tz, this.style = sz, this.mustSelect = Wz, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = tz, this.scrollParents = fz(zz.contentDOM), this.atoms = zz.state.facet(Ws).map((tz => tz(zz)));
        let Xz = zz.contentDOM.ownerDocument;
        Xz.addEventListener("mousemove", this.move = this.move.bind(this)), Xz.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = tz.shiftKey, this.multiple = zz.state.facet(Fz.p.allowMultipleSelections) && function(zz, tz) {
          let sz = zz.state.facet(Gt);
          return sz.length ? sz[0](tz) : mz.mac ? tz.metaKey : tz.ctrlKey
        }(zz, tz), this.dragging = !(! function(zz, tz) {
          let {
            main: sz
          } = zz.state.selection;
          if (sz.empty) return !1;
          let Fz = Qz(zz.root);
          if (!Fz || 0 == Fz.rangeCount) return !0;
          let Wz = Fz.getRangeAt(0).getClientRects();
          for (let Xz = 0; Xz < Wz.length; Xz++) {
            let zz = Wz[Xz];
            if (zz.left <= tz.clientX && zz.right >= tz.clientX && zz.top <= tz.clientY && zz.bottom >= tz.clientY) return !0
          }
          return !1
        }(zz, tz) || 1 != GF(tz)) && null
      }
      start(zz) {
        !1 === this.dragging && this.select(zz)
      }
      move(zz) {
        if (0 == zz.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (tz = this.startEvent, sz = zz, Math.max(Math.abs(tz.clientX - sz.clientX), Math.abs(tz.clientY - sz.clientY)) < 10)) return;
        var tz, sz;
        this.select(this.lastEvent = zz);
        let Fz = 0,
          Wz = 0,
          Xz = 0,
          Oz = 0,
          oz = this.view.win.innerWidth,
          vz = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: Xz,
          right: oz
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: Oz,
          bottom: vz
        } = this.scrollParents.y.getBoundingClientRect());
        let Uz = vs(this.view);
        zz.clientX - Uz.left <= Xz + 6 ? Fz = -HF(Xz - zz.clientX) : zz.clientX + Uz.right >= oz - 6 && (Fz = HF(zz.clientX - oz)), zz.clientY - Uz.top <= Oz + 6 ? Wz = -HF(Oz - zz.clientY) : zz.clientY + Uz.bottom >= vz - 6 && (Wz = HF(zz.clientY - vz)), this.setScrollSpeed(Fz, Wz)
      }
      up(zz) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || zz.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let zz = this.view.contentDOM.ownerDocument;
        zz.removeEventListener("mousemove", this.move), zz.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(zz, tz) {
        this.scrollSpeed = {
          x: zz,
          y: tz
        }, zz || tz ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: zz,
          y: tz
        } = this.scrollSpeed;
        zz && this.scrollParents.x && (this.scrollParents.x.scrollLeft += zz, zz = 0), tz && this.scrollParents.y && (this.scrollParents.y.scrollTop += tz, tz = 0), (zz || tz) && this.view.win.scrollBy(zz, tz), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(zz) {
        let {
          view: tz
        } = this, sz = Vs(this.atoms, this.style.get(zz, this.extend, this.multiple));
        !this.mustSelect && sz.eq(tz.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: sz,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(zz) {
        zz.transactions.some((zz => zz.isUserEvent("input.type"))) ? this.destroy() : this.style.update(zz) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const PF = Object.create(null),
      rF = Object.create(null),
      YF = mz.ie && mz.ie_version < 15 || mz.ios && mz.webkit_version < 604;

    function xF(zz, tz, sz) {
      for (let Fz of zz.facet(tz)) sz = Fz(sz, zz);
      return sz
    }

    function mF(zz, tz) {
      tz = xF(zz.state, dt, tz);
      let sz, {
          state: Wz
        } = zz,
        Xz = 1,
        Oz = Wz.toText(tz),
        oz = Oz.lines == Wz.selection.du.length;
      if (null != cF && Wz.selection.du.every((zz => zz.empty)) && cF == Oz.toString()) {
        let zz = -1;
        sz = Wz.changeByRange((sz => {
          let vz = Wz.doc.lineAt(sz.from);
          if (vz.from == zz) return {
            range: sz
          };
          zz = vz.from;
          let Uz = Wz.toText((oz ? Oz.line(Xz++).text : tz) + Wz.lineBreak);
          return {
            changes: {
              from: vz.from,
              insert: Uz
            },
            range: Fz.l.cursor(sz.from + Uz.length)
          }
        }))
      } else sz = oz ? Wz.changeByRange((zz => {
        let tz = Oz.line(Xz++);
        return {
          changes: {
            from: zz.from,
            to: zz.to,
            insert: tz.text
          },
          range: Fz.l.cursor(zz.from + tz.length)
        }
      })) : Wz.replaceSelection(Oz);
      zz.dispatch(sz, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function JF(zz, tz, sz, Wz) {
      if (1 == Wz) return Fz.l.cursor(tz, sz);
      if (2 == Wz) return function(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Wz = zz.charCategorizer(tz),
          Xz = zz.doc.lineAt(tz),
          Oz = tz - Xz.from;
        if (0 == Xz.length) return Fz.l.cursor(tz);
        0 == Oz ? sz = 1 : Oz == Xz.length && (sz = -1);
        let oz = Oz,
          vz = Oz;
        sz < 0 ? oz = (0, Fz.Y)(Xz.text, Oz, !1) : vz = (0, Fz.Y)(Xz.text, Oz);
        let Uz = Wz(Xz.text.slice(oz, vz));
        for (; oz > 0;) {
          let zz = (0, Fz.Y)(Xz.text, oz, !1);
          if (Wz(Xz.text.slice(zz, oz)) != Uz) break;
          oz = zz
        }
        for (; vz < Xz.length;) {
          let zz = (0, Fz.Y)(Xz.text, vz);
          if (Wz(Xz.text.slice(vz, zz)) != Uz) break;
          vz = zz
        }
        return Fz.l.range(oz + Xz.from, vz + Xz.from)
      }(zz.state, tz, sz);
      {
        let Wz = zz.docView.lineAt(tz, sz),
          Xz = zz.state.doc.lineAt(Wz ? Wz.posAtEnd : tz),
          Oz = Wz ? Wz.posAtStart : Xz.from,
          oz = Wz ? Wz.posAtEnd : Xz.to;
        return oz < zz.state.doc.length && oz == Xz.to && oz++, Fz.l.range(Oz, oz)
      }
    }
    rF.scroll = zz => {
      zz.inputState.lastScrollTop = zz.scrollDOM.scrollTop, zz.inputState.lastScrollLeft = zz.scrollDOM.scrollLeft
    }, rF.wheel = rF.mousewheel = zz => {
      zz.inputState.lastWheelEvent = Date.now()
    }, PF.keydown = (zz, tz) => (zz.inputState.setSelectionOrigin("select"), 27 == tz.keyCode && 0 != zz.inputState.tabFocusMode && (zz.inputState.tabFocusMode = Date.now() + 2e3), !1), rF.touchstart = (zz, tz) => {
      let sz = zz.inputState,
        Fz = tz.targetTouches[0];
      sz.lastTouchTime = Date.now(), Fz && (sz.lastTouchX = Fz.clientX, sz.lastTouchY = Fz.clientY), sz.setSelectionOrigin("select.pointer")
    }, rF.touchmove = zz => {
      zz.inputState.setSelectionOrigin("select.pointer")
    }, PF.mousedown = (zz, tz) => {
      if (zz.observer.flush(), zz.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let sz = null;
      for (let Fz of zz.state.facet(ct))
        if (sz = Fz(zz, tz), sz) break;
      if (sz || 0 != tz.button || (sz = function(zz, tz) {
          let sz = zz.posAndSideAtCoords({
              x: tz.clientX,
              y: tz.clientY
            }, !1),
            Wz = GF(tz),
            Xz = zz.state.selection;
          return {
            update(zz) {
              zz.docChanged && (sz.pos = zz.changes.mapPos(sz.pos), Xz = Xz.map(zz.changes))
            },
            get(tz, Oz, oz) {
              let vz, Uz = zz.posAndSideAtCoords({
                  x: tz.clientX,
                  y: tz.clientY
                }, !1),
                Kz = JF(zz, Uz.pos, Uz.assoc, Wz);
              if (sz.pos != Uz.pos && !Oz) {
                let tz = JF(zz, sz.pos, sz.assoc, Wz),
                  Xz = Math.min(tz.from, Kz.from),
                  Oz = Math.max(tz.to, Kz.to);
                Kz = Xz < Kz.from ? Fz.l.range(Xz, Oz, Kz.assoc) : Fz.l.range(Oz, Xz, Kz.assoc)
              }
              return Oz ? Xz.replaceRange(Xz.main.extend(Kz.from, Kz.to, Kz.assoc)) : oz && 1 == Wz && Xz.du.length > 1 && (vz = function(zz, tz) {
                for (let sz = 0; sz < zz.du.length; sz++) {
                  let {
                    from: Wz,
                    to: Xz
                  } = zz.du[sz];
                  if (Wz <= tz && Xz >= tz) return Fz.l.create(zz.du.slice(0, sz).concat(zz.du.slice(sz + 1)), zz.mainIndex == sz ? 0 : zz.mainIndex - (zz.mainIndex > sz ? 1 : 0))
                }
                return null
              }(Xz, Uz.pos)) ? vz : oz ? Xz.addRange(Kz) : Fz.l.create([Kz])
            }
          }
        }(zz, tz)), sz) {
        let Fz = !zz.hasFocus;
        zz.inputState.startMouseSelection(new BF(zz, tz, sz, Fz)), Fz && zz.observer.ignore((() => {
          st(zz.contentDOM);
          let tz = zz.root.activeElement;
          tz && !tz.contains(zz.contentDOM) && tz.blur()
        }));
        let Wz = zz.inputState.mouseSelection;
        if (Wz) return Wz.start(tz), !1 === Wz.dragging
      } else zz.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const IF = mz.ie && mz.ie_version <= 11;
    let CF = null,
      eF = 0,
      ZF = 0;

    function GF(zz) {
      if (!IF) return zz.detail;
      let tz = CF,
        sz = ZF;
      return CF = zz, ZF = Date.now(), eF = !tz || sz > Date.now() - 400 && Math.abs(tz.clientX - zz.clientX) < 2 && Math.abs(tz.clientY - zz.clientY) < 2 ? (eF + 1) % 3 : 1
    }

    function TF(zz, tz, sz, Fz) {
      if (!(sz = xF(zz.state, dt, sz))) return;
      let Wz = zz.posAtCoords({
          x: tz.clientX,
          y: tz.clientY
        }, !1),
        {
          draggedContent: Xz
        } = zz.inputState,
        Oz = Fz && Xz && function(zz, tz) {
          let sz = zz.state.facet(Tt);
          return sz.length ? sz[0](tz) : mz.mac ? !tz.altKey : !tz.ctrlKey
        }(zz, tz) ? {
          from: Xz.from,
          to: Xz.to
        } : null,
        oz = {
          from: Wz,
          insert: sz
        },
        vz = zz.state.changes(Oz ? [Oz, oz] : oz);
      zz.focus(), zz.dispatch({
        changes: vz,
        selection: {
          anchor: vz.mapPos(Wz, -1),
          head: vz.mapPos(Wz, 1)
        },
        userEvent: Oz ? "move.drop" : "input.drop"
      }), zz.inputState.draggedContent = null
    }
    PF.dragstart = (zz, tz) => {
      let {
        selection: {
          main: sz
        }
      } = zz.state;
      if (tz.target.draggable) {
        let Wz = zz.docView.tile.nearest(tz.target);
        if (Wz && Wz.isWidget()) {
          let zz = Wz.posAtStart,
            tz = zz + Wz.length;
          (zz >= sz.to || tz <= sz.from) && (sz = Fz.l.range(zz, tz))
        }
      }
      let {
        inputState: Wz
      } = zz;
      return Wz.mouseSelection && (Wz.mouseSelection.dragging = !0), Wz.draggedContent = sz, tz.dataTransfer && (tz.dataTransfer.setData("Text", xF(zz.state, ht, zz.state.sliceDoc(sz.from, sz.to))), tz.dataTransfer.effectAllowed = "copyMove"), !1
    }, PF.dragend = zz => (zz.inputState.draggedContent = null, !1), PF.drop = (zz, tz) => {
      if (!tz.dataTransfer) return !1;
      if (zz.state.readOnly) return !0;
      let sz = tz.dataTransfer.files;
      if (sz && sz.length) {
        let Fz = Array(sz.length),
          Wz = 0,
          Xz = () => {
            ++Wz == sz.length && TF(zz, tz, Fz.filter((zz => null != zz)).join(zz.state.lineBreak), !1)
          };
        for (let zz = 0; zz < sz.length; zz++) {
          let tz = new FileReader;
          tz.onerror = Xz, tz.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(tz.result) || (Fz[zz] = tz.result), Xz()
          }, tz.readAsText(sz[zz])
        }
        return !0
      } {
        let sz = tz.dataTransfer.getData("Text");
        if (sz) return TF(zz, tz, sz, !0), !0
      }
      return !1
    }, PF.paste = (zz, tz) => {
      if (zz.state.readOnly) return !0;
      zz.observer.flush();
      let sz = YF ? null : tz.clipboardData;
      return sz ? (mF(zz, sz.getData("text/plain") || sz.getData("text/uri-list")), !0) : (function(zz) {
        let tz = zz.dom.parentNode;
        if (!tz) return;
        let sz = tz.appendChild(document.createElement("textarea"));
        sz.style.cssText = "position: fixed; left: -10000px; top: 10px", sz.focus(), setTimeout((() => {
          zz.focus(), sz.remove(), mF(zz, sz.value)
        }), 50)
      }(zz), !1)
    };
    let cF = null;
    PF.copy = PF.cut = (zz, tz) => {
      if (!iz(zz.contentDOM, zz.observer.selectionRange)) return !1;
      let {
        text: sz,
        du: Fz,
        linewise: Wz
      } = function(zz) {
        let tz = [],
          sz = [],
          Fz = !1;
        for (let Wz of zz.selection.du) Wz.empty || (tz.push(zz.sliceDoc(Wz.from, Wz.to)), sz.push(Wz));
        if (!tz.length) {
          let Wz = -1;
          for (let {
              from: Fz
            }
            of zz.selection.du) {
            let Xz = zz.doc.lineAt(Fz);
            Xz.number > Wz && (tz.push(Xz.text), sz.push({
              from: Xz.from,
              to: Math.min(zz.doc.length, Xz.to + 1)
            })), Wz = Xz.number
          }
          Fz = !0
        }
        return {
          text: xF(zz, ht, tz.join(zz.lineBreak)),
          du: sz,
          linewise: Fz
        }
      }(zz.state);
      if (!sz && !Wz) return !1;
      cF = Wz ? sz : null, "cut" != tz.type || zz.state.readOnly || zz.dispatch({
        changes: Fz,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let Xz = YF ? null : tz.clipboardData;
      return Xz ? (Xz.clearData(), Xz.setData("text/plain", sz), !0) : (function(zz, tz) {
        let sz = zz.dom.parentNode;
        if (!sz) return;
        let Fz = sz.appendChild(document.createElement("textarea"));
        Fz.style.cssText = "position: fixed; left: -10000px; top: 10px", Fz.value = tz, Fz.focus(), Fz.selectionEnd = tz.length, Fz.selectionStart = 0, setTimeout((() => {
          Fz.remove(), zz.focus()
        }), 50)
      }(zz, sz), !1)
    };
    const jF = Fz.e.define();

    function AF(zz, tz) {
      let sz = [];
      for (let Fz of zz.facet(Mt)) {
        let Wz = Fz(zz, tz);
        Wz && sz.push(Wz)
      }
      return sz.length ? zz.update({
        effects: sz,
        annotations: jF.of(!0)
      }) : null
    }

    function yF(zz) {
      setTimeout((() => {
        let tz = zz.hasFocus;
        if (tz != zz.inputState.notifiedFocused) {
          let sz = AF(zz.state, tz);
          sz ? zz.dispatch(sz) : zz.update([])
        }
      }), 10)
    }
    rF.focus = zz => {
      zz.inputState.lastFocusTime = Date.now(), zz.scrollDOM.scrollTop || !zz.inputState.lastScrollTop && !zz.inputState.lastScrollLeft || (zz.scrollDOM.scrollTop = zz.inputState.lastScrollTop, zz.scrollDOM.scrollLeft = zz.inputState.lastScrollLeft), yF(zz)
    }, rF.blur = zz => {
      zz.observer.clearSelectionRange(), yF(zz)
    }, rF.compositionstart = rF.compositionupdate = zz => {
      zz.observer.editContext || (null == zz.inputState.compositionFirstChange && (zz.inputState.compositionFirstChange = !0), zz.inputState.composing < 0 && (zz.inputState.composing = 0))
    }, rF.compositionend = zz => {
      zz.observer.editContext || (zz.inputState.composing = -1, zz.inputState.compositionEndedAt = Date.now(), zz.inputState.compositionPendingKey = !0, zz.inputState.compositionPendingChange = zz.observer.pendingRecords().length > 0, zz.inputState.compositionFirstChange = null, mz.chrome && mz.android ? zz.observer.flushSoon() : zz.inputState.compositionPendingChange ? Promise.resolve().then((() => zz.observer.flush())) : setTimeout((() => {
        zz.inputState.composing < 0 && zz.docView.hasComposition && zz.update([])
      }), 50))
    }, rF.contextmenu = zz => {
      zz.inputState.lastContextMenu = Date.now()
    }, PF.beforeinput = (zz, tz) => {
      var sz, Fz;
      if ("insertText" != tz.inputType && "insertCompositionText" != tz.inputType || (zz.inputState.insertingText = tz.data, zz.inputState.insertingTextAt = Date.now()), "insertReplacementText" == tz.inputType && zz.observer.editContext) {
        let Fz = null === (sz = tz.dataTransfer) || void 0 === sz ? void 0 : sz.getData("text/plain"),
          Wz = tz.getTargetRanges();
        if (Fz && Wz.length) {
          let tz = Wz[0],
            sz = zz.posAtDOM(tz.startContainer, tz.startOffset),
            Xz = zz.posAtDOM(tz.endContainer, tz.endOffset);
          return vF(zz, {
            from: sz,
            to: Xz,
            insert: zz.state.toText(Fz)
          }, null), !0
        }
      }
      let Wz;
      if (mz.chrome && mz.android && (Wz = wF.find((zz => zz.inputType == tz.inputType))) && (zz.observer.delayAndroidKey(Wz.key, Wz.keyCode), "Backspace" == Wz.key || "Delete" == Wz.key)) {
        let tz = (null === (Fz = window.visualViewport) || void 0 === Fz ? void 0 : Fz.height) || 0;
        setTimeout((() => {
          var sz;
          ((null === (sz = window.visualViewport) || void 0 === sz ? void 0 : sz.height) || 0) > tz + 10 && zz.hasFocus && (zz.contentDOM.blur(), zz.focus())
        }), 100)
      }
      return mz.ios && "deleteContentForward" == tz.inputType && zz.observer.flushSoon(), mz.safari && "insertText" == tz.inputType && zz.inputState.composing >= 0 && setTimeout((() => rF.compositionend(zz, tz)), 20), !1
    };
    const MF = new Set;
    const dF = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let hF = !1;

    function QF() {
      hF = !1
    }
    class kF {
      constructor(zz) {
        this.lineWrapping = zz, this.doc = Fz.I.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(zz, tz) {
        let sz = this.doc.lineAt(tz).number - this.doc.lineAt(zz).number + 1;
        return this.lineWrapping && (sz += Math.max(0, Math.ceil((tz - zz - sz * this.lineLength * .5) / this.lineLength))), this.lineHeight * sz
      }
      heightForLine(zz) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((zz - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(zz) {
        return this.doc = zz, this
      }
      mustRefreshForWrapping(zz) {
        return dF.indexOf(zz) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(zz) {
        let tz = !1;
        for (let sz = 0; sz < zz.length; sz++) {
          let Fz = zz[sz];
          Fz < 0 ? sz++ : this.heightSamples[Math.floor(10 * Fz)] || (tz = !0, this.heightSamples[Math.floor(10 * Fz)] = !0)
        }
        return tz
      }
      refresh(zz, tz, sz, Fz, Wz, Xz) {
        let Oz = dF.indexOf(zz) > -1,
          oz = Math.abs(tz - this.lineHeight) > .3 || this.lineWrapping != Oz || Math.abs(sz - this.charWidth) > .1;
        if (this.lineWrapping = Oz, this.lineHeight = tz, this.charWidth = sz, this.textHeight = Fz, this.lineLength = Wz, oz) {
          this.heightSamples = {};
          for (let zz = 0; zz < Xz.length; zz++) {
            let tz = Xz[zz];
            tz < 0 ? zz++ : this.heightSamples[Math.floor(10 * tz)] = !0
          }
        }
        return oz
      }
    }
    class iF {
      constructor(zz, tz) {
        this.from = zz, this.heights = tz, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class LF {
      constructor(zz, tz, sz, Fz, Wz) {
        this.from = zz, this.length = tz, this.top = sz, this.height = Fz, this._content = Wz
      }
      get type() {
        return "number" == typeof this._content ? Tz.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof yz ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(zz) {
        let tz = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(zz._content) ? zz._content : [zz]);
        return new LF(this.from, this.length + zz.length, this.top, this.height + zz.height, tz)
      }
    }
    var lF = function(zz) {
      return zz[zz.ByPos = 0] = "ByPos", zz[zz.ByHeight = 1] = "ByHeight", zz[zz.ByPosNoHeight = 2] = "ByPosNoHeight", zz
    }(lF || (lF = {}));
    const nF = .001;
    class aF {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = zz, this.height = tz, this.flags = sz
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(zz) {
        this.flags = (zz ? 2 : 0) | -3 & this.flags
      }
      setHeight(zz) {
        this.height != zz && (Math.abs(this.height - zz) > nF && (hF = !0), this.height = zz)
      }
      replace(zz, tz, sz) {
        return aF.of(sz)
      }
      decomposeLeft(zz, tz) {
        tz.push(this)
      }
      decomposeRight(zz, tz) {
        tz.push(this)
      }
      applyChanges(zz, tz, sz, Fz) {
        let Wz = this,
          Xz = sz.doc;
        for (let Oz = Fz.length - 1; Oz >= 0; Oz--) {
          let {
            fromA: oz,
            toA: vz,
            fromB: Uz,
            toB: Kz
          } = Fz[Oz], uz = Wz.lineAt(oz, lF.ByPosNoHeight, sz.setDoc(tz), 0, 0), Nz = uz.to >= vz ? uz : Wz.lineAt(vz, lF.ByPosNoHeight, sz, 0, 0);
          for (Kz += Nz.to - vz, vz = Nz.to; Oz > 0 && uz.from <= Fz[Oz - 1].toA;) oz = Fz[Oz - 1].fromA, Uz = Fz[Oz - 1].fromB, Oz--, oz < uz.from && (uz = Wz.lineAt(oz, lF.ByPosNoHeight, sz, 0, 0));
          Uz += uz.from - oz, oz = uz.from;
          let bz = zW.build(sz.setDoc(Xz), zz, Uz, Kz);
          Wz = qF(Wz, Wz.replace(oz, vz, bz))
        }
        return Wz.updateHeight(sz, 0)
      }
      static empty() {
        return new RF(0, 0, 0)
      }
      static of (zz) {
        if (1 == zz.length) return zz[0];
        let tz = 0,
          sz = zz.length,
          Fz = 0,
          Wz = 0;
        for (;;)
          if (tz == sz)
            if (Fz > 2 * Wz) {
              let Wz = zz[tz - 1];
              Wz.break ? zz.splice(--tz, 1, Wz.left, null, Wz.right) : zz.splice(--tz, 1, Wz.left, Wz.right), sz += 1 + Wz.break, Fz -= Wz.size
            } else {
              if (!(Wz > 2 * Fz)) break;
              {
                let tz = zz[sz];
                tz.break ? zz.splice(sz, 1, tz.left, null, tz.right) : zz.splice(sz, 1, tz.left, tz.right), sz += 2 + tz.break, Wz -= tz.size
              }
            }
        else if (Fz < Wz) {
          let sz = zz[tz++];
          sz && (Fz += sz.size)
        } else {
          let tz = zz[--sz];
          tz && (Wz += tz.size)
        }
        let Xz = 0;
        return null == zz[tz - 1] ? (Xz = 1, tz--) : null == zz[tz] && (Xz = 1, sz++), new fF(aF.of(zz.slice(0, tz)), Xz, aF.of(zz.slice(sz)))
      }
    }

    function qF(zz, tz) {
      return zz == tz ? zz : (zz.constructor != tz.constructor && (hF = !0), tz)
    }
    aF.prototype.size = 1;
    const SF = cz.replace({});
    class VF extends aF {
      constructor(zz, tz, sz) {
        super(zz, tz), this.deco = sz, this.spaceAbove = 0
      }
      mainBlock(zz, tz) {
        return new LF(tz, this.length, zz + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(zz, tz, sz, Fz) {
        return this.spaceAbove && zz < sz + this.spaceAbove ? new LF(Fz, 0, sz, this.spaceAbove, SF) : this.mainBlock(sz, Fz)
      }
      lineAt(zz, tz, sz, Fz, Wz) {
        let Xz = this.mainBlock(Fz, Wz);
        return this.spaceAbove ? this.blockAt(0, sz, Fz, Wz).join(Xz) : Xz
      }
      forEachLine(zz, tz, sz, Fz, Wz, Xz) {
        zz <= Wz + this.length && tz >= Wz && Xz(this.lineAt(0, lF.ByPos, sz, Fz, Wz))
      }
      setMeasuredHeight(zz) {
        let tz = zz.heights[zz.index++];
        tz < 0 ? (this.spaceAbove = -tz, tz = zz.heights[zz.index++]) : this.spaceAbove = 0, this.setHeight(tz)
      }
      updateHeight(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 3 ? arguments[3] : void 0;
        return sz && sz.from <= tz && sz.more && this.setMeasuredHeight(sz), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class RF extends VF {
      constructor(zz, tz, sz) {
        super(zz, tz, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = sz
      }
      mainBlock(zz, tz) {
        return new LF(tz, this.length, zz + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(zz, tz, sz) {
        let Fz = sz[0];
        return 1 == sz.length && (Fz instanceof RF || Fz instanceof pF && 4 & Fz.flags) && Math.abs(this.length - Fz.length) < 10 ? (Fz instanceof pF ? Fz = new RF(Fz.length, this.height, this.spaceAbove) : Fz.height = this.height, this.outdated || (Fz.outdated = !1), Fz) : aF.of(sz)
      }
      updateHeight(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        return Fz && Fz.from <= tz && Fz.more ? this.setMeasuredHeight(Fz) : (sz || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, zz.heightForLine(this.length - this.collapsed)) + this.breaks * zz.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class pF extends aF {
      constructor(zz) {
        super(zz, 0)
      }
      heightMetrics(zz, tz) {
        let sz, Fz = zz.doc.lineAt(tz).number,
          Wz = zz.doc.lineAt(tz + this.length).number,
          Xz = Wz - Fz + 1,
          Oz = 0;
        if (zz.lineWrapping) {
          let tz = Math.min(this.height, zz.lineHeight * Xz);
          sz = tz / Xz, this.length > Xz + 1 && (Oz = (this.height - tz) / (this.length - Xz - 1))
        } else sz = this.height / Xz;
        return {
          firstLine: Fz,
          lastLine: Wz,
          perLine: sz,
          perChar: Oz
        }
      }
      blockAt(zz, tz, sz, Fz) {
        let {
          firstLine: Wz,
          lastLine: Xz,
          perLine: Oz,
          perChar: oz
        } = this.heightMetrics(tz, Fz);
        if (tz.lineWrapping) {
          let Wz = Fz + (zz < tz.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (zz - sz) / this.height)) * this.length)),
            Xz = tz.doc.lineAt(Wz),
            vz = Oz + Xz.length * oz,
            Uz = Math.max(sz, zz - vz / 2);
          return new LF(Xz.from, Xz.length, Uz, vz, 0)
        } {
          let Fz = Math.max(0, Math.min(Xz - Wz, Math.floor((zz - sz) / Oz))),
            {
              from: oz,
              length: vz
            } = tz.doc.line(Wz + Fz);
          return new LF(oz, vz, sz + Oz * Fz, Oz, 0)
        }
      }
      lineAt(zz, tz, sz, Fz, Wz) {
        if (tz == lF.ByHeight) return this.blockAt(zz, sz, Fz, Wz);
        if (tz == lF.ByPosNoHeight) {
          let {
            from: tz,
            to: Fz
          } = sz.doc.lineAt(zz);
          return new LF(tz, Fz - tz, 0, 0, 0)
        }
        let {
          firstLine: Xz,
          perLine: Oz,
          perChar: oz
        } = this.heightMetrics(sz, Wz), vz = sz.doc.lineAt(zz), Uz = Oz + vz.length * oz, Kz = vz.number - Xz, uz = Fz + Oz * Kz + oz * (vz.from - Wz - Kz);
        return new LF(vz.from, vz.length, Math.max(Fz, Math.min(uz, Fz + this.height - Uz)), Uz, 0)
      }
      forEachLine(zz, tz, sz, Fz, Wz, Xz) {
        zz = Math.max(zz, Wz), tz = Math.min(tz, Wz + this.length);
        let {
          firstLine: Oz,
          perLine: oz,
          perChar: vz
        } = this.heightMetrics(sz, Wz);
        for (let Uz = zz, Kz = Fz; Uz <= tz;) {
          let tz = sz.doc.lineAt(Uz);
          if (Uz == zz) {
            let sz = tz.number - Oz;
            Kz += oz * sz + vz * (zz - Wz - sz)
          }
          let Fz = oz + vz * tz.length;
          Xz(new LF(tz.from, tz.length, Kz, Fz, 0)), Kz += Fz, Uz = tz.to + 1
        }
      }
      replace(zz, tz, sz) {
        let Fz = this.length - tz;
        if (Fz > 0) {
          let zz = sz[sz.length - 1];
          zz instanceof pF ? sz[sz.length - 1] = new pF(zz.length + Fz) : sz.push(null, new pF(Fz - 1))
        }
        if (zz > 0) {
          let tz = sz[0];
          tz instanceof pF ? sz[0] = new pF(zz + tz.length) : sz.unshift(new pF(zz - 1), null)
        }
        return aF.of(sz)
      }
      decomposeLeft(zz, tz) {
        tz.push(new pF(zz - 1), null)
      }
      decomposeRight(zz, tz) {
        tz.push(null, new pF(this.length - zz - 1))
      }
      updateHeight(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 ? arguments[3] : void 0,
          Wz = tz + this.length;
        if (Fz && Fz.from <= tz + this.length && Fz.more) {
          let sz = [],
            Xz = Math.max(tz, Fz.from),
            Oz = -1;
          for (Fz.from > tz && sz.push(new pF(Fz.from - tz - 1).updateHeight(zz, tz)); Xz <= Wz && Fz.more;) {
            let tz = zz.doc.lineAt(Xz).length;
            sz.length && sz.push(null);
            let Wz = Fz.heights[Fz.index++],
              oz = 0;
            Wz < 0 && (oz = -Wz, Wz = Fz.heights[Fz.index++]), -1 == Oz ? Oz = Wz : Math.abs(Wz - Oz) >= nF && (Oz = -2);
            let vz = new RF(tz, Wz, oz);
            vz.outdated = !1, sz.push(vz), Xz += tz + 1
          }
          Xz <= Wz && sz.push(null, new pF(Wz - Xz).updateHeight(zz, Xz));
          let oz = aF.of(sz);
          return (Oz < 0 || Math.abs(oz.height - this.height) >= nF || Math.abs(Oz - this.heightMetrics(zz, tz).perLine) >= nF) && (hF = !0), qF(this, oz)
        }
        return (sz || this.outdated) && (this.setHeight(zz.heightForGap(tz, tz + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class fF extends aF {
      constructor(zz, tz, sz) {
        super(zz.length + tz + sz.length, zz.height + sz.height, tz | (zz.outdated || sz.outdated ? 2 : 0)), this.left = zz, this.right = sz, this.size = zz.size + sz.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(zz, tz, sz, Fz) {
        let Wz = sz + this.left.height;
        return zz < Wz ? this.left.blockAt(zz, tz, sz, Fz) : this.right.blockAt(zz, tz, Wz, Fz + this.left.length + this.break)
      }
      lineAt(zz, tz, sz, Fz, Wz) {
        let Xz = Fz + this.left.height,
          Oz = Wz + this.left.length + this.break,
          oz = tz == lF.ByHeight ? zz < Xz : zz < Oz,
          vz = oz ? this.left.lineAt(zz, tz, sz, Fz, Wz) : this.right.lineAt(zz, tz, sz, Xz, Oz);
        if (this.break || (oz ? vz.to < Oz : vz.from > Oz)) return vz;
        let Uz = tz == lF.ByPosNoHeight ? lF.ByPosNoHeight : lF.ByPos;
        return oz ? vz.join(this.right.lineAt(Oz, Uz, sz, Xz, Oz)) : this.left.lineAt(Oz, Uz, sz, Fz, Wz).join(vz)
      }
      forEachLine(zz, tz, sz, Fz, Wz, Xz) {
        let Oz = Fz + this.left.height,
          oz = Wz + this.left.length + this.break;
        if (this.break) zz < oz && this.left.forEachLine(zz, tz, sz, Fz, Wz, Xz), tz >= oz && this.right.forEachLine(zz, tz, sz, Oz, oz, Xz);
        else {
          let vz = this.lineAt(oz, lF.ByPos, sz, Fz, Wz);
          zz < vz.from && this.left.forEachLine(zz, vz.from - 1, sz, Fz, Wz, Xz), vz.to >= zz && vz.from <= tz && Xz(vz), tz > vz.to && this.right.forEachLine(vz.to + 1, tz, sz, Oz, oz, Xz)
        }
      }
      replace(zz, tz, sz) {
        let Fz = this.left.length + this.break;
        if (tz < Fz) return this.balanced(this.left.replace(zz, tz, sz), this.right);
        if (zz > this.left.length) return this.balanced(this.left, this.right.replace(zz - Fz, tz - Fz, sz));
        let Wz = [];
        zz > 0 && this.decomposeLeft(zz, Wz);
        let Xz = Wz.length;
        for (let Oz of sz) Wz.push(Oz);
        if (zz > 0 && EF(Wz, Xz - 1), tz < this.length) {
          let zz = Wz.length;
          this.decomposeRight(tz, Wz), EF(Wz, zz)
        }
        return aF.of(Wz)
      }
      decomposeLeft(zz, tz) {
        let sz = this.left.length;
        if (zz <= sz) return this.left.decomposeLeft(zz, tz);
        tz.push(this.left), this.break && (sz++, zz >= sz && tz.push(null)), zz > sz && this.right.decomposeLeft(zz - sz, tz)
      }
      decomposeRight(zz, tz) {
        let sz = this.left.length,
          Fz = sz + this.break;
        if (zz >= Fz) return this.right.decomposeRight(zz - Fz, tz);
        zz < sz && this.left.decomposeRight(zz, tz), this.break && zz < Fz && tz.push(null), tz.push(this.right)
      }
      balanced(zz, tz) {
        return zz.size > 2 * tz.size || tz.size > 2 * zz.size ? aF.of(this.break ? [zz, null, tz] : [zz, tz]) : (this.left = qF(this.left, zz), this.right = qF(this.right, tz), this.setHeight(zz.height + tz.height), this.outdated = zz.outdated || tz.outdated, this.size = zz.size + tz.size, this.length = zz.length + this.break+tz.length, this)
      }
      updateHeight(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Wz,
            right: Xz
          } = this,
          Oz = tz + Wz.length + this.break,
          oz = null;
        return Fz && Fz.from <= tz + Wz.length && Fz.more ? oz = Wz = Wz.updateHeight(zz, tz, sz, Fz) : Wz.updateHeight(zz, tz, sz), Fz && Fz.from <= Oz + Xz.length && Fz.more ? oz = Xz = Xz.updateHeight(zz, Oz, sz, Fz) : Xz.updateHeight(zz, Oz, sz), oz ? this.balanced(Wz, Xz) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function EF(zz, tz) {
      let sz, Fz;
      null == zz[tz] && (sz = zz[tz - 1]) instanceof pF && (Fz = zz[tz + 1]) instanceof pF && zz.splice(tz - 1, 3, new pF(sz.length + 1 + Fz.length))
    }
    class zW {
      constructor(zz, tz) {
        this.pos = zz, this.oracle = tz, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = zz
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(zz, tz) {
        if (this.lineStart > -1) {
          let zz = Math.min(tz, this.lineEnd),
            sz = this.nodes[this.nodes.length - 1];
          sz instanceof RF ? sz.length += zz - this.pos : (zz > this.pos || !this.isCovered) && this.nodes.push(new RF(zz - this.pos, -1, 0)), this.writtenTo = zz, tz > zz && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = tz
      }
      point(zz, tz, sz) {
        if (zz < tz || sz.heightRelevant) {
          let Fz = sz.widget ? sz.widget.estimatedHeight : 0,
            Wz = sz.widget ? sz.widget.lineBreaks : 0;
          Fz < 0 && (Fz = this.oracle.lineHeight);
          let Xz = tz - zz;
          sz.block ? this.yzz(new VF(Xz, Fz, sz)) : (Xz || Wz || Fz >= 5) && this.addLineDeco(Fz, Wz, Xz)
        } else tz > zz && this.span(zz, tz);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: zz,
          to: tz
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = zz, this.lineEnd = tz, this.writtenTo < zz && ((this.writtenTo < zz - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, zz - 1)), this.nodes.push(null)), this.pos > zz && this.nodes.push(new RF(this.pos - zz, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(zz, tz) {
        let sz = new pF(tz - zz);
        return this.oracle.doc.lineAt(zz).to == tz && (sz.flags |= 4), sz
      }
      ensureLine() {
        this.enterLine();
        let zz = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (zz instanceof RF) return zz;
        let tz = new RF(0, -1, 0);
        return this.nodes.push(tz), tz
      }
      yzz(zz) {
        this.enterLine();
        let tz = zz.deco;
        tz && tz.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(zz), this.writtenTo = this.pos = this.pos + zz.length, tz && tz.endSide > 0 && (this.covering = zz)
      }
      addLineDeco(zz, tz, sz) {
        let Fz = this.ensureLine();
        Fz.length += sz, Fz.collapsed += sz, Fz.widgetHeight = Math.max(Fz.widgetHeight, zz), Fz.breaks += tz, this.writtenTo = this.pos = this.pos + sz
      }
      finish(zz) {
        let tz = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || tz instanceof RF || this.isCovered ? (this.writtenTo < this.pos || null == tz) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new RF(0, -1, 0));
        let sz = zz;
        for (let Fz of this.nodes) Fz instanceof RF && Fz.updateHeight(this.oracle, sz), sz += Fz ? Fz.length : 1;
        return this.nodes
      }
      static build(zz, tz, sz, Wz) {
        let Xz = new zW(sz, zz);
        return Fz.B.spans(tz, sz, Wz, Xz, 0), Xz.finish(sz)
      }
    }
    class tW {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(zz, tz, sz, Fz) {
        (zz < tz || sz && sz.heightRelevant || Fz && Fz.heightRelevant) && dz(zz, tz, this.changes, 5)
      }
    }

    function sW(zz, tz) {
      let sz = zz.getBoundingClientRect(),
        Fz = zz.ownerDocument,
        Wz = Fz.defaultView || window,
        Xz = Math.max(0, sz.left),
        Oz = Math.min(Wz.innerWidth, sz.right),
        oz = Math.max(0, sz.top),
        vz = Math.min(Wz.innerHeight, sz.bottom);
      for (let Uz = zz.parentNode; Uz && Uz != Fz.body;)
        if (1 == Uz.nodeType) {
          let tz = Uz,
            sz = window.getComputedStyle(tz);
          if ((tz.scrollHeight > tz.clientHeight || tz.scrollWidth > tz.clientWidth) && "visible" != sz.overflow) {
            let sz = tz.getBoundingClientRect();
            Xz = Math.max(Xz, sz.left), Oz = Math.min(Oz, sz.right), oz = Math.max(oz, sz.top), vz = Math.min(Uz == zz.parentNode ? Wz.innerHeight : vz, sz.bottom)
          }
          Uz = "absolute" == sz.position || "fixed" == sz.position ? tz.offsetParent : tz.parentNode
        } else {
          if (11 != Uz.nodeType) break;
          Uz = Uz.host
        } return {
        left: Xz - sz.left,
        right: Math.max(Xz, Oz) - sz.left,
        top: oz - (sz.top + tz),
        bottom: Math.max(oz, vz) - (sz.top + tz)
      }
    }

    function FW(zz, tz) {
      let sz = zz.getBoundingClientRect();
      return {
        left: 0,
        right: sz.right - sz.left,
        top: tz,
        bottom: sz.bottom - (sz.top + tz)
      }
    }
    class WW {
      constructor(zz, tz, sz, Fz) {
        this.from = zz, this.to = tz, this.size = sz, this.displaySize = Fz
      }
      static same(zz, tz) {
        if (zz.length != tz.length) return !1;
        for (let sz = 0; sz < zz.length; sz++) {
          let Fz = zz[sz],
            Wz = tz[sz];
          if (Fz.from != Wz.from || Fz.to != Wz.to || Fz.size != Wz.size) return !1
        }
        return !0
      }
      draw(zz, tz) {
        return cz.replace({
          widget: new XW(this.displaySize * (tz ? zz.scaleY : zz.scaleX), tz)
        }).range(this.from, this.to)
      }
    }
    class XW extends Gz {
      constructor(zz, tz) {
        super(), this.size = zz, this.vertical = tz
      }
      eq(zz) {
        return zz.size == this.size && zz.vertical == this.vertical
      }
      toDOM() {
        let zz = document.createElement("div");
        return this.vertical ? zz.style.height = this.size + "px" : (zz.style.width = this.size + "px", zz.style.height = "2px", zz.style.display = "inline-block"), zz
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class OW {
      constructor(zz, tz) {
        this.view = zz, this.state = tz, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = KW, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Ut.LTR, this.U_ = [], this.mustEnforceCursorAssoc = !1;
        let sz = tz.facet(zs).some((zz => "function" != typeof zz && "cm-lineWrapping" == zz.class));
        this.heightOracle = new kF(sz), this.stateDeco = uW(tz), this.heightMap = aF.empty().applyChanges(this.stateDeco, Fz.I.empty, this.heightOracle.setDoc(tz.doc), [new Ks(0, 0, 0, tz.doc.length)]);
        for (let Fz = 0; Fz < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Fz++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = cz.set(this.lineGaps.map((zz => zz.draw(this, !1)))), this.scrollParent = zz.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let zz = [this.viewport],
          {
            main: tz
          } = this.state.selection;
        for (let sz = 0; sz <= 1; sz++) {
          let Fz = sz ? tz.head : tz.anchor;
          if (!zz.some((zz => {
              let {
                from: tz,
                to: sz
              } = zz;
              return Fz >= tz && Fz <= sz
            }))) {
            let {
              from: tz,
              to: sz
            } = this.lineBlockAt(Fz);
            zz.push(new oW(tz, sz))
          }
        }
        return this.viewports = zz.sort(((zz, tz) => zz.from - tz.from)), this.updateScaler()
      }
      updateScaler() {
        let zz = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? KW : new NW(this.heightOracle, this.heightMap, this.viewports), zz.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (zz => {
          this.viewportLines.push(bW(zz, this.scaler))
        }))
      }
      update(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = zz.state;
        let sz = this.stateDeco;
        this.stateDeco = uW(this.state);
        let Wz = zz.changedRanges,
          Xz = Ks.extendWithRanges(Wz, function(zz, tz, sz) {
            let Wz = new tW;
            return Fz.B.compare(zz, tz, sz, Wz, 0), Wz.changes
          }(sz, this.stateDeco, zz ? zz.changes : Fz.ChangeSet.empty(this.state.doc.length))),
          Oz = this.heightMap.height,
          oz = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        QF(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, zz.startState.doc, this.heightOracle.setDoc(this.state.doc), Xz), (this.heightMap.height != Oz || hF) && (zz.flags |= 2), oz ? (this.scrollAnchorPos = zz.changes.mapPos(oz.from, -1), this.scrollAnchorHeight = oz.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = Oz);
        let vz = Xz.length ? this.mapViewport(this.viewport, zz.changes) : this.viewport;
        (tz && (tz.range.head < vz.from || tz.range.head > vz.to) || !this.viewportIsAppropriate(vz)) && (vz = this.getViewport(0, tz));
        let Uz = vz.from != this.viewport.from || vz.to != this.viewport.to;
        this.viewport = vz, zz.flags |= this.updateForViewport(), (Uz || !zz.changes.empty || 2 & zz.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, zz.changes))), zz.flags |= this.computeVisibleRanges(zz.changes), tz && (this.scrollTarget = tz), !this.mustEnforceCursorAssoc && (zz.selectionSet || zz.focusChanged) && zz.view.lineWrapping && zz.state.selection.main.empty && zz.state.selection.main.assoc && !zz.state.facet(kt) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: zz
        } = this, tz = zz.contentDOM, sz = window.getComputedStyle(tz), Wz = this.heightOracle, Xz = sz.whiteSpace;
        this.defaultTextDirection = "rtl" == sz.direction ? Ut.RTL : Ut.LTR;
        let Oz = this.heightOracle.mustRefreshForWrapping(Xz) || "refresh" === this.mustMeasureContent,
          oz = tz.getBoundingClientRect(),
          vz = Oz || this.mustMeasureContent || this.contentDOMHeight != oz.height;
        this.contentDOMHeight = oz.height, this.mustMeasureContent = !1;
        let Uz = 0,
          Kz = 0;
        if (oz.width && oz.height) {
          let {
            scaleX: zz,
            scaleY: sz
          } = pz(tz, oz);
          (zz > .005 && Math.abs(this.scaleX - zz) > .005 || sz > .005 && Math.abs(this.scaleY - sz) > .005) && (this.scaleX = zz, this.scaleY = sz, Uz |= 16, Oz = vz = !0)
        }
        let uz = (parseInt(sz.paddingTop) || 0) * this.scaleY,
          Nz = (parseInt(sz.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == uz && this.paddingBottom == Nz || (this.paddingTop = uz, this.paddingBottom = Nz, Uz |= 18), this.editorWidth != zz.scrollDOM.clientWidth && (Wz.lineWrapping && (vz = !0), this.editorWidth = zz.scrollDOM.clientWidth, Uz |= 16);
        let bz = fz(this.view.contentDOM, !1).y;
        bz != this.scrollParent && (this.scrollParent = bz, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let wz = this.getScrollOffset();
        this.scrollOffset != wz && (this.scrollAnchorHeight = -1, this.scrollOffset = wz), this.scrolledToBottom = Xt(this.scrollParent || zz.win);
        let Dz = (this.printing ? FW : sW)(tz, this.paddingTop),
          gz = Dz.top - this.pixelViewport.top,
          Hz = Dz.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Dz;
        let Bz = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (Bz != this.inView && (this.inView = Bz, Bz && (vz = !0)), !this.inView && !this.scrollTarget && ! function(zz) {
            let tz = zz.getBoundingClientRect(),
              sz = zz.ownerDocument.defaultView || window;
            return tz.left < sz.innerWidth && tz.right > 0 && tz.top < sz.innerHeight && tz.bottom > 0
          }(zz.dom)) return 0;
        let Pz = oz.width;
        if (this.contentDOMWidth == Pz && this.editorHeight == zz.scrollDOM.clientHeight || (this.contentDOMWidth = oz.width, this.editorHeight = zz.scrollDOM.clientHeight, Uz |= 16), vz) {
          let tz = zz.docView.measureVisibleLineHeights(this.viewport);
          if (Wz.mustRefreshForHeights(tz) && (Oz = !0), Oz || Wz.lineWrapping && Math.abs(Pz - this.contentDOMWidth) > Wz.charWidth) {
            let {
              lineHeight: sz,
              charWidth: Fz,
              textHeight: oz
            } = zz.docView.measureTextSize();
            Oz = sz > 0 && Wz.refresh(Xz, sz, Fz, oz, Math.max(5, Pz / Fz), tz), Oz && (zz.docView.minWidth = 0, Uz |= 16)
          }
          gz > 0 && Hz > 0 ? Kz = Math.max(gz, Hz) : gz < 0 && Hz < 0 && (Kz = Math.min(gz, Hz)), QF();
          for (let sz of this.viewports) {
            let Xz = sz.from == this.viewport.from ? tz : zz.docView.measureVisibleLineHeights(sz);
            this.heightMap = (Oz ? aF.empty().applyChanges(this.stateDeco, Fz.I.empty, this.heightOracle, [new Ks(0, 0, 0, zz.state.doc.length)]) : this.heightMap).updateHeight(Wz, 0, Oz, new iF(sz.from, Xz))
          }
          hF && (Uz |= 2)
        }
        let rz = !this.viewportIsAppropriate(this.viewport, Kz) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return rz && (2 & Uz && (Uz |= this.updateScaler()), this.viewport = this.getViewport(Kz, this.scrollTarget), Uz |= this.updateForViewport()), (2 & Uz || rz) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(Oz ? [] : this.lineGaps, zz)), Uz |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, zz.docView.enforceCursorAssoc()), Uz
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(zz, tz) {
        let sz = .5 - Math.max(-.5, Math.min(.5, zz / 1e3 / 2)),
          Fz = this.heightMap,
          Wz = this.heightOracle,
          {
            visibleTop: Xz,
            visibleBottom: Oz
          } = this,
          oz = new oW(Fz.lineAt(Xz - 1e3 * sz, lF.ByHeight, Wz, 0, 0).from, Fz.lineAt(Oz + 1e3 * (1 - sz), lF.ByHeight, Wz, 0, 0).to);
        if (tz) {
          let {
            head: zz
          } = tz.range;
          if (zz < oz.from || zz > oz.to) {
            let sz, Xz = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              Oz = Fz.lineAt(zz, lF.ByPos, Wz, 0, 0);
            sz = "center" == tz.y ? (Oz.top + Oz.bottom) / 2 - Xz / 2 : "start" == tz.y || "nearest" == tz.y && zz < oz.from ? Oz.top : Oz.bottom - Xz, oz = new oW(Fz.lineAt(sz - 500, lF.ByHeight, Wz, 0, 0).from, Fz.lineAt(sz + Xz + 500, lF.ByHeight, Wz, 0, 0).to)
          }
        }
        return oz
      }
      mapViewport(zz, tz) {
        let sz = tz.mapPos(zz.from, -1),
          Fz = tz.mapPos(zz.to, 1);
        return new oW(this.heightMap.lineAt(sz, lF.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Fz, lF.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(zz) {
        let {
          from: tz,
          to: sz
        } = zz, Fz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Wz
        } = this.heightMap.lineAt(tz, lF.ByPos, this.heightOracle, 0, 0), {
          bottom: Xz
        } = this.heightMap.lineAt(sz, lF.ByPos, this.heightOracle, 0, 0), {
          visibleTop: Oz,
          visibleBottom: oz
        } = this;
        return (0 == tz || Wz <= Oz - Math.max(10, Math.min(-Fz, 250))) && (sz == this.state.doc.length || Xz >= oz + Math.max(10, Math.min(Fz, 250))) && Wz > Oz - 2e3 && Xz < oz + 2e3
      }
      mapLineGaps(zz, tz) {
        if (!zz.length || tz.empty) return zz;
        let sz = [];
        for (let Fz of zz) tz.touchesRange(Fz.from, Fz.to) || sz.push(new WW(tz.mapPos(Fz.from), tz.mapPos(Fz.to), Fz.size, Fz.displaySize));
        return sz
      }
      ensureLineGaps(zz, tz) {
        let sz = this.heightOracle.lineWrapping,
          Wz = sz ? 1e4 : 2e3,
          Xz = Wz >> 1,
          Oz = Wz << 1;
        if (this.defaultTextDirection != Ut.LTR && !sz) return [];
        let oz = [],
          vz = (Wz, Oz, Uz, Kz) => {
            if (Oz - Wz < Xz) return;
            let uz = this.state.selection.main,
              Nz = [uz.from];
            uz.empty || Nz.push(uz.to);
            for (let zz of Nz)
              if (zz > Wz && zz < Oz) return vz(Wz, zz - 10, Uz, Kz), void vz(zz + 10, Oz, Uz, Kz);
            let bz = function(zz, tz) {
              for (let sz of zz)
                if (tz(sz)) return sz;
              return
            }(zz, (zz => zz.from >= Uz.from && zz.to <= Uz.to && Math.abs(zz.from - Wz) < Xz && Math.abs(zz.to - Oz) < Xz && !Nz.some((tz => zz.from < tz && zz.to > tz))));
            if (!bz) {
              if (Oz < Uz.to && tz && sz && tz.U_.some((zz => zz.from <= Oz && zz.to >= Oz))) {
                let zz = tz.moveToLineBoundary(Fz.l.cursor(Oz), !1, !0).head;
                zz > Wz && (Oz = zz)
              }
              let zz = this.gapSize(Uz, Wz, Oz, Kz);
              bz = new WW(Wz, Oz, zz, sz || zz < 2e6 ? zz : 2e6)
            }
            oz.push(bz)
          },
          Uz = tz => {
            if (tz.length < Oz || tz.type != Tz.Text) return;
            let Xz = function(zz, tz, sz) {
              let Wz = [],
                Xz = zz,
                Oz = 0;
              Fz.B.spans(sz, zz, tz, {
                span() {},
                point(zz, tz) {
                  zz > Xz && (Wz.push({
                    from: Xz,
                    to: zz
                  }), Oz += zz - Xz), Xz = tz
                }
              }, 20), Xz < tz && (Wz.push({
                from: Xz,
                to: tz
              }), Oz += tz - Xz);
              return {
                total: Oz,
                du: Wz
              }
            }(tz.from, tz.to, this.stateDeco);
            if (Xz.total < Oz) return;
            let oz, Uz, Kz = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (sz) {
              let zz, sz, Fz = Wz / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != Kz) {
                let Wz = UW(Xz, Kz),
                  Oz = ((this.visibleBottom - this.visibleTop) / 2 + Fz) / tz.height;
                zz = Wz - Oz, sz = Wz + Oz
              } else zz = (this.visibleTop - tz.top - Fz) / tz.height, sz = (this.visibleBottom - tz.top + Fz) / tz.height;
              oz = vW(Xz, zz), Uz = vW(Xz, sz)
            } else {
              let sz = Xz.total * this.heightOracle.charWidth,
                Fz = Wz * this.heightOracle.charWidth,
                Oz = 0;
              if (sz > 2e6)
                for (let Wz of zz) Wz.from >= tz.from && Wz.from < tz.to && Wz.size != Wz.displaySize && Wz.from * this.heightOracle.charWidth + Oz < this.pixelViewport.left && (Oz = Wz.size - Wz.displaySize);
              let vz, uz, Nz = this.pixelViewport.left + Oz,
                bz = this.pixelViewport.right + Oz;
              if (null != Kz) {
                let zz = UW(Xz, Kz),
                  tz = ((bz - Nz) / 2 + Fz) / sz;
                vz = zz - tz, uz = zz + tz
              } else vz = (Nz - Fz) / sz, uz = (bz + Fz) / sz;
              oz = vW(Xz, vz), Uz = vW(Xz, uz)
            }
            oz > tz.from && vz(tz.from, oz, tz, Xz), Uz < tz.to && vz(Uz, tz.to, tz, Xz)
          };
        for (let Fz of this.viewportLines) Array.isArray(Fz.type) ? Fz.type.forEach(Uz) : Uz(Fz);
        return oz
      }
      gapSize(zz, tz, sz, Fz) {
        let Wz = UW(Fz, sz) - UW(Fz, tz);
        return this.heightOracle.lineWrapping ? zz.height * Wz : Fz.total * this.heightOracle.charWidth * Wz
      }
      updateLineGaps(zz) {
        WW.same(zz, this.lineGaps) || (this.lineGaps = zz, this.lineGapDeco = cz.set(zz.map((zz => zz.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(zz) {
        let tz = this.stateDeco;
        this.lineGaps.length && (tz = tz.concat(this.lineGapDeco));
        let sz = [];
        Fz.B.spans(tz, this.viewport.from, this.viewport.to, {
          span(zz, tz) {
            sz.push({
              from: zz,
              to: tz
            })
          },
          point() {}
        }, 20);
        let Wz = 0;
        if (sz.length != this.U_.length) Wz = 12;
        else
          for (let Fz = 0; Fz < sz.length && !(8 & Wz); Fz++) {
            let tz = this.U_[Fz],
              Xz = sz[Fz];
            tz.from == Xz.from && tz.to == Xz.to || (Wz |= 4, zz && zz.mapPos(tz.from, -1) == Xz.from && zz.mapPos(tz.to, 1) == Xz.to || (Wz |= 8))
          }
        return this.U_ = sz, Wz
      }
      lineBlockAt(zz) {
        return zz >= this.viewport.from && zz <= this.viewport.to && this.viewportLines.find((tz => tz.from <= zz && tz.to >= zz)) || bW(this.heightMap.lineAt(zz, lF.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(zz) {
        return zz >= this.viewportLines[0].top && zz <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((tz => tz.top <= zz && tz.bottom >= zz)) || bW(this.heightMap.lineAt(this.scaler.fromDOM(zz), lF.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(zz) {
        let tz = this.lineBlockAtHeight(zz + 8);
        return tz.from >= this.viewport.from || this.viewportLines[0].top - zz > 200 ? tz : this.viewportLines[0]
      }
      elementAtHeight(zz) {
        return bW(this.heightMap.blockAt(this.scaler.fromDOM(zz), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class oW {
      constructor(zz, tz) {
        this.from = zz, this.to = tz
      }
    }

    function vW(zz, tz) {
      let {
        total: sz,
        du: Fz
      } = zz;
      if (tz <= 0) return Fz[0].from;
      if (tz >= 1) return Fz[Fz.length - 1].to;
      let Wz = Math.floor(sz * tz);
      for (let Xz = 0;; Xz++) {
        let {
          from: zz,
          to: tz
        } = Fz[Xz], sz = tz - zz;
        if (Wz <= sz) return zz + Wz;
        Wz -= sz
      }
    }

    function UW(zz, tz) {
      let sz = 0;
      for (let {
          from: Fz,
          to: Wz
        }
        of zz.du) {
        if (tz <= Wz) {
          sz += tz - Fz;
          break
        }
        sz += Wz - Fz
      }
      return sz / zz.total
    }
    const KW = {
      toDOM: zz => zz,
      fromDOM: zz => zz,
      scale: 1,
      eq(zz) {
        return zz == this
      }
    };

    function uW(zz) {
      let tz = zz.facet(ts).filter((zz => "function" != typeof zz)),
        sz = zz.facet(Fs).filter((zz => "function" != typeof zz));
      return sz.length && tz.push(Fz.B.join(sz)), tz
    }
    class NW {
      constructor(zz, tz, sz) {
        let Fz = 0,
          Wz = 0,
          Xz = 0;
        this.viewports = sz.map((sz => {
          let {
            from: Wz,
            to: Xz
          } = sz, Oz = tz.lineAt(Wz, lF.ByPos, zz, 0, 0).top, oz = tz.lineAt(Xz, lF.ByPos, zz, 0, 0).bottom;
          return Fz += oz - Oz, {
            from: Wz,
            to: Xz,
            top: Oz,
            bottom: oz,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Fz) / (tz.height - Fz);
        for (let Oz of this.viewports) Oz.domTop = Xz + (Oz.top - Wz) * this.scale, Xz = Oz.domBottom = Oz.domTop + (Oz.bottom - Oz.top), Wz = Oz.bottom
      }
      toDOM(zz) {
        for (let tz = 0, sz = 0, Fz = 0;; tz++) {
          let Wz = tz < this.viewports.length ? this.viewports[tz] : null;
          if (!Wz || zz < Wz.top) return Fz + (zz - sz) * this.scale;
          if (zz <= Wz.bottom) return Wz.domTop + (zz - Wz.top);
          sz = Wz.bottom, Fz = Wz.domBottom
        }
      }
      fromDOM(zz) {
        for (let tz = 0, sz = 0, Fz = 0;; tz++) {
          let Wz = tz < this.viewports.length ? this.viewports[tz] : null;
          if (!Wz || zz < Wz.domTop) return sz + (zz - Fz) / this.scale;
          if (zz <= Wz.domBottom) return Wz.top + (zz - Wz.domTop);
          sz = Wz.bottom, Fz = Wz.domBottom
        }
      }
      eq(zz) {
        return zz instanceof NW && (this.scale == zz.scale && this.viewports.length == zz.viewports.length && this.viewports.every(((tz, sz) => tz.from == zz.viewports[sz].from && tz.to == zz.viewports[sz].to)))
      }
    }

    function bW(zz, tz) {
      if (1 == tz.scale) return zz;
      let sz = tz.toDOM(zz.top),
        Fz = tz.toDOM(zz.bottom);
      return new LF(zz.from, zz.length, sz, Fz - sz, Array.isArray(zz._content) ? zz._content.map((zz => bW(zz, tz))) : zz._content)
    }
    const wW = Fz.q.define({
        combine: zz => zz.join(" ")
      }),
      DW = Fz.q.define({
        combine: zz => zz.indexOf(!0) > -1
      }),
      gW = Wz.e.newName(),
      HW = Wz.e.newName(),
      BW = Wz.e.newName(),
      PW = {
        "&light": "." + HW,
        "&dark": "." + BW
      };

    function rW(zz, tz, sz) {
      return new Wz.e(tz, {
        finish: tz => /&/.test(tz) ? tz.replace(/&\w*/, (tz => {
          if ("&" == tz) return zz;
          if (!sz || !sz[tz]) throw new RangeError(`Unsupported selector: ${tz}`);
          return sz[tz]
        })) : zz + " " + tz
      })
    }
    const YW = rW("." + gW, {
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
      }, PW),
      xW = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      mW = mz.ie && mz.ie_version <= 11;
    class JW {
      constructor(zz) {
        this.view = zz, this.active = !1, this.editContext = null, this.selectionRange = new Ez, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = zz.contentDOM, this.observer = new MutationObserver((tz => {
          for (let zz of tz) this.queue.push(zz);
          (mz.ie && mz.ie_version <= 11 || mz.ios && zz.composing) && tz.some((zz => "childList" == zz.type && zz.removedNodes.length || "characterData" == zz.type && zz.oldValue.length > zz.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !mz.android || !1 === zz.constructor.EDIT_CONTEXT || mz.chrome && mz.chrome_version < 126 || (this.editContext = new eW(zz), zz.state.facet(St) && (zz.contentDOM.editContext = this.editContext.editContext)), mW && (this.onCharData = zz => {
          this.queue.push({
            target: zz.target,
            type: "characterData",
            oldValue: zz.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.YB = this.YB.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var zz;
          (null === (zz = this.view.docView) || void 0 === zz ? void 0 : zz.lastUpdate) < Date.now() - 75 && this.YB()
        })), this.resizeScroll.observe(zz.scrollDOM)), this.addWindowListeners(this.win = zz.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((zz => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), zz.length > 0 && zz[zz.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((zz => {
          zz.length > 0 && zz[zz.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(zz) {
        this.view.inputState.runHandlers("scroll", zz), this.intersecting && this.view.measure()
      }
      onScroll(zz) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(zz)
      }
      YB() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(zz) {
        ("change" != zz.type && zz.type || zz.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(zz) {
        if (this.gapIntersection && (zz.length != this.gaps.length || this.gaps.some(((tz, sz) => tz != zz[sz])))) {
          this.gapIntersection.disconnect();
          for (let tz of zz) this.gapIntersection.observe(tz);
          this.gaps = zz
        }
      }
      onSelectionChange(zz) {
        let tz = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: sz
        } = this, Fz = this.selectionRange;
        if (sz.state.facet(St) ? sz.root.activeElement != this.dom : !iz(this.dom, Fz)) return;
        let Wz = Fz.anchorNode && sz.docView.tile.nearest(Fz.anchorNode);
        Wz && Wz.isWidget() && Wz.widget.ignoreEvent(zz) ? tz || (this.selectionChanged = !1) : (mz.ie && mz.ie_version <= 11 || mz.android && mz.chrome) && !sz.state.selection.main.empty && Fz.focusNode && lz(Fz.focusNode, Fz.focusOffset, Fz.anchorNode, Fz.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: zz
        } = this, tz = Qz(zz.root);
        if (!tz) return !1;
        let sz = mz.safari && 11 == zz.root.nodeType && zz.root.activeElement == this.dom && function(zz, tz) {
          if (tz.getComposedRanges) {
            let sz = tz.getComposedRanges(zz.root)[0];
            if (sz) return CW(zz, sz)
          }
          let sz = null;

          function Fz(zz) {
            zz.preventDefault(), zz.stopImmediatePropagation(), sz = zz.getTargetRanges()[0]
          }
          return zz.contentDOM.addEventListener("beforeinput", Fz, !0), zz.dom.ownerDocument.execCommand("indent"), zz.contentDOM.removeEventListener("beforeinput", Fz, !0), sz ? CW(zz, sz) : null
        }(this.view, tz) || tz;
        if (!sz || this.selectionRange.eq(sz)) return !1;
        let Fz = iz(this.dom, sz);
        return Fz && !this.selectionChanged && zz.inputState.lastFocusTime > Date.now() - 200 && zz.inputState.lastTouchTime < Date.now() - 300 && function(zz, tz) {
          let sz = tz.focusNode,
            Fz = tz.focusOffset;
          if (!sz || tz.anchorNode != sz || tz.anchorOffset != Fz) return !1;
          for (Fz = Math.min(Fz, Sz(sz));;)
            if (Fz) {
              if (1 != sz.nodeType) return !1;
              let zz = sz.childNodes[Fz - 1];
              "false" == zz.contentEditable ? Fz-- : (sz = zz, Fz = Sz(sz))
            } else {
              if (sz == zz) return !0;
              Fz = nz(sz), sz = sz.parentNode
            }
        }(this.dom, sz) ? (this.view.inputState.lastFocusTime = 0, zz.docView.updateSelection(), !1) : (this.selectionRange.setRange(sz), Fz && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(zz, tz) {
        this.selectionRange.set(zz.node, zz.offset, tz.node, tz.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let zz = 0,
          tz = null;
        for (let sz = this.dom; sz;)
          if (1 == sz.nodeType) !tz && zz < this.scrollTargets.length && this.scrollTargets[zz] == sz ? zz++ : tz || (tz = this.scrollTargets.slice(0, zz)), tz && tz.push(sz), sz = sz.assignedSlot || sz.parentNode;
          else {
            if (11 != sz.nodeType) break;
            sz = sz.host
          } if (zz < this.scrollTargets.length && !tz && (tz = this.scrollTargets.slice(0, zz)), tz) {
          for (let zz of this.scrollTargets) zz.removeEventListener("scroll", this.onScroll);
          for (let zz of this.scrollTargets = tz) zz.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(zz) {
        if (!this.active) return zz();
        try {
          return this.stop(), zz()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, xW), mW && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), mW && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(zz, tz) {
        var sz;
        if (!this.delayedAndroidKey) {
          let zz = () => {
            let zz = this.delayedAndroidKey;
            if (zz) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = zz.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && zz.force && Wt(this.dom, zz.key, zz.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(zz)
        }
        this.delayedAndroidKey && "Enter" != zz || (this.delayedAndroidKey = {
          key: zz,
          keyCode: tz,
          force: this.lastChange < Date.now() - 50 || !!(null === (sz = this.delayedAndroidKey) || void 0 === sz ? void 0 : sz.force)
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
        for (let zz of this.observer.takeRecords()) this.queue.push(zz);
        return this.queue
      }
      processRecords() {
        let zz = this.pendingRecords();
        zz.length && (this.queue = []);
        let tz = -1,
          sz = -1,
          Fz = !1;
        for (let Wz of zz) {
          let zz = this.readMutation(Wz);
          zz && (zz.typeOver && (Fz = !0), -1 == tz ? ({
            from: tz,
            to: sz
          } = zz) : (tz = Math.min(zz.from, tz), sz = Math.max(zz.to, sz)))
        }
        return {
          from: tz,
          to: sz,
          typeOver: Fz
        }
      }
      readChange() {
        let {
          from: zz,
          to: tz,
          typeOver: sz
        } = this.processRecords(), Fz = this.selectionChanged && iz(this.dom, this.selectionRange);
        if (zz < 0 && !Fz) return null;
        zz > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Wz = new XF(this.view, zz, tz, sz);
        return this.view.docView.domChanged = {
          newSel: Wz.newSel ? Wz.newSel.main : null
        }, Wz
      }
      flush() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        zz && this.readSelectionRange();
        let tz = this.readChange();
        if (!tz) return this.view.requestMeasure(), !1;
        let sz = this.view.state,
          Fz = oF(this.view, tz);
        return this.view.state == sz && (tz.domChanged || tz.newSel && !KF(this.view.state.selection, tz.newSel.main)) && this.view.update([]), Fz
      }
      readMutation(zz) {
        let tz = this.view.docView.tile.nearest(zz.target);
        if (!tz || tz.isWidget()) return null;
        if (tz.markDirty("attributes" == zz.type), "childList" == zz.type) {
          let sz = IW(tz, zz.previousSibling || zz.target.previousSibling, -1),
            Fz = IW(tz, zz.nextSibling || zz.target.nextSibling, 1);
          return {
            from: sz ? tz.posAfter(sz) : tz.posAtStart,
            to: Fz ? tz.posBefore(Fz) : tz.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == zz.type ? {
          from: tz.posAtStart,
          to: tz.posAtEnd,
          typeOver: zz.target.nodeValue == zz.oldValue
        } : null
      }
      setWindow(zz) {
        zz != this.win && (this.removeWindowListeners(this.win), this.win = zz, this.addWindowListeners(this.win))
      }
      addWindowListeners(zz) {
        zz.addEventListener("resize", this.YB), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : zz.addEventListener("beforeprint", this.onPrint), zz.addEventListener("scroll", this.onScroll), zz.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(zz) {
        zz.removeEventListener("scroll", this.onScroll), zz.removeEventListener("resize", this.YB), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : zz.removeEventListener("beforeprint", this.onPrint), zz.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(zz) {
        this.editContext && (this.editContext.update(zz), zz.startState.facet(St) != zz.state.facet(St) && (zz.view.contentDOM.editContext = zz.state.facet(St) ? this.editContext.editContext : null))
      }
      destroy() {
        var zz, tz, sz;
        this.stop(), null === (zz = this.intersection) || void 0 === zz || zz.disconnect(), null === (tz = this.gapIntersection) || void 0 === tz || tz.disconnect(), null === (sz = this.resizeScroll) || void 0 === sz || sz.disconnect();
        for (let Fz of this.scrollTargets) Fz.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function IW(zz, tz, sz) {
      for (; tz;) {
        let Fz = bs.get(tz);
        if (Fz && Fz.parent == zz) return Fz;
        let Wz = tz.parentNode;
        tz = Wz != zz.dom ? Wz : sz > 0 ? tz.nextSibling : tz.previousSibling
      }
      return null
    }

    function CW(zz, tz) {
      let sz = tz.startContainer,
        Fz = tz.startOffset,
        Wz = tz.endContainer,
        Xz = tz.endOffset,
        Oz = zz.docView.domAtPos(zz.state.selection.main.anchor, 1);
      return lz(Oz.node, Oz.offset, Wz, Xz) && ([sz, Fz, Wz, Xz] = [Wz, Xz, sz, Fz]), {
        anchorNode: sz,
        anchorOffset: Fz,
        focusNode: Wz,
        focusOffset: Xz
      }
    }
    class eW {
      constructor(zz) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(zz.state);
        let tz = this.editContext = new window.EditContext({
          text: zz.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, zz.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(zz.state.selection.main.head)
        });
        this.handlers.textupdate = sz => {
          let Wz = zz.state.selection.main,
            {
              anchor: Xz,
              head: Oz
            } = Wz,
            oz = this.toEditorPos(sz.updateRangeStart),
            vz = this.toEditorPos(sz.updateRangeEnd);
          zz.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: sz.updateRangeStart,
            editorBase: oz,
            drifted: !1
          });
          let Uz = vz - oz > sz.text.length;
          oz == this.from && Xz < this.from ? oz = Xz : vz == this.to && Xz > this.to && (vz = Xz);
          let Kz = UF(zz.state.sliceDoc(oz, vz), sz.text, (Uz ? Wz.from : Wz.to) - oz, Uz ? "end" : null);
          if (!Kz) {
            let tz = Fz.l.single(this.toEditorPos(sz.selectionStart), this.toEditorPos(sz.selectionEnd));
            return void(KF(tz, Wz) || zz.dispatch({
              selection: tz,
              userEvent: "select"
            }))
          }
          let uz = {
            from: Kz.from + oz,
            to: Kz.toA + oz,
            insert: Fz.I.of(sz.text.slice(Kz.from, Kz.toB).split("\n"))
          };
          if ((mz.mac || mz.android) && uz.from == Oz - 1 && /^\. ?$/.test(sz.text) && "off" == zz.contentDOM.getAttribute("autocorrect") && (uz = {
              from: oz,
              to: vz,
              insert: Fz.I.of([sz.text.replace(".", " ")])
            }), this.pendingContextChange = uz, !zz.state.readOnly) {
            let tz = this.to - this.from + (uz.to - uz.from + uz.insert.length);
            vF(zz, uz, Fz.l.single(this.toEditorPos(sz.selectionStart, tz), this.toEditorPos(sz.selectionEnd, tz)))
          }
          this.pendingContextChange && (this.revertPending(zz.state), this.setSelection(zz.state)), uz.from < uz.to && !uz.insert.length && zz.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(tz.text.slice(Math.max(0, sz.updateRangeStart - 1), Math.min(tz.text.length, sz.updateRangeStart + 1))) && this.handlers.compositionend(sz)
        }, this.handlers.characterboundsupdate = sz => {
          let Fz = [],
            Wz = null;
          for (let tz = this.toEditorPos(sz.rangeStart), Xz = this.toEditorPos(sz.rangeEnd); tz < Xz; tz++) {
            let sz = zz.coordsForChar(tz);
            Wz = sz && new DOMRect(sz.left, sz.top, sz.right - sz.left, sz.bottom - sz.top) || Wz || new DOMRect, Fz.push(Wz)
          }
          tz.updateCharacterBounds(sz.rangeStart, Fz)
        }, this.handlers.textformatupdate = tz => {
          let sz = [];
          for (let zz of tz.getTextFormats()) {
            let tz = zz.underlineStyle,
              Fz = zz.underlineThickness;
            if (!/none/i.test(tz) && !/none/i.test(Fz)) {
              let Wz = this.toEditorPos(zz.rangeStart),
                Xz = this.toEditorPos(zz.rangeEnd);
              if (Wz < Xz) {
                let zz = `text-decoration: underline ${/^[a-z]/.test(tz)?tz+" ":"Dashed"==tz?"dashed ":"Squiggle"==tz?"wavy ":""}${/thin/i.test(Fz)?1:2}px`;
                sz.push(cz.mark({
                  attributes: {
                    style: zz
                  }
                }).range(Wz, Xz))
              }
            }
          }
          zz.dispatch({
            effects: nt.of(cz.set(sz))
          })
        }, this.handlers.compositionstart = () => {
          zz.inputState.composing < 0 && (zz.inputState.composing = 0, zz.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (zz.inputState.composing = -1, zz.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: tz
            } = this.composing;
            this.composing = null, tz && this.reset(zz.state)
          }
        };
        for (let sz in this.handlers) tz.addEventListener(sz, this.handlers[sz]);
        this.measureReq = {
          read: zz => {
            this.editContext.updateControlBounds(zz.contentDOM.getBoundingClientRect());
            let tz = Qz(zz.root);
            tz && tz.rangeCount && this.editContext.updateSelectionBounds(tz.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(zz) {
        let tz = 0,
          sz = !1,
          Fz = this.pendingContextChange;
        return zz.changes.iterChanges(((Wz, Xz, Oz, oz, vz) => {
          if (sz) return;
          let Uz = vz.length - (Xz - Wz);
          if (Fz && Xz >= Fz.to) {
            if (Fz.from == Wz && Fz.to == Xz && Fz.insert.eq(vz)) return Fz = this.pendingContextChange = null, tz += Uz, void(this.to += Uz);
            Fz = null, this.revertPending(zz.state)
          }
          if (Wz += tz, (Xz += tz) <= this.from) this.from += Uz, this.to += Uz;
          else if (Wz < this.to) {
            if (Wz < this.from || Xz > this.to || this.to - this.from + vz.length > 3e4) return void(sz = !0);
            this.editContext.updateText(this.toContextPos(Wz), this.toContextPos(Xz), vz.toString()), this.to += Uz
          }
          tz += Uz
        })), Fz && !sz && this.revertPending(zz.state), !sz
      }
      update(zz) {
        let tz = this.pendingContextChange,
          sz = zz.startState.selection.main;
        this.composing && (this.composing.drifted || !zz.changes.touchesRange(sz.from, sz.to) && zz.transactions.some((zz => !zz.isUserEvent("input.type") && zz.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = zz.changes.mapPos(this.composing.editorBase)) : this.applyEdits(zz) && this.rangeIsValid(zz.state) ? (zz.docChanged || zz.selectionSet || tz) && this.setSelection(zz.state) : (this.pendingContextChange = null, this.reset(zz.state)), (zz.geometryChanged || zz.docChanged || zz.selectionSet) && zz.view.requestMeasure(this.measureReq)
      }
      resetRange(zz) {
        let {
          head: tz
        } = zz.selection.main;
        this.from = Math.max(0, tz - 1e4), this.to = Math.min(zz.doc.length, tz + 1e4)
      }
      reset(zz) {
        this.resetRange(zz), this.editContext.updateText(0, this.editContext.text.length, zz.doc.sliceString(this.from, this.to)), this.setSelection(zz)
      }
      revertPending(zz) {
        let tz = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(tz.from), this.toContextPos(tz.from + tz.insert.length), zz.doc.sliceString(tz.from, tz.to))
      }
      setSelection(zz) {
        let {
          main: tz
        } = zz.selection, sz = this.toContextPos(Math.max(this.from, Math.min(this.to, tz.anchor))), Fz = this.toContextPos(tz.head);
        this.editContext.selectionStart == sz && this.editContext.selectionEnd == Fz || this.editContext.updateSelection(sz, Fz)
      }
      rangeIsValid(zz) {
        let {
          head: tz
        } = zz.selection.main;
        return !(this.from > 0 && tz - this.from < 500 || this.to < zz.doc.length && this.to - tz < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        zz = Math.min(zz, tz);
        let sz = this.composing;
        return sz && sz.drifted ? sz.editorBase + (zz - sz.contextBase) : zz + this.from
      }
      toContextPos(zz) {
        let tz = this.composing;
        return tz && tz.drifted ? tz.contextBase + (zz - tz.editorBase) : zz - this.from
      }
      destroy() {
        for (let zz in this.handlers) this.editContext.removeEventListener(zz, this.handlers[zz])
      }
    }
    class ZW {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get U_() {
        return this.viewState.U_
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
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var tz;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), zz.parent && zz.parent.appendChild(this.dom);
        let {
          dispatch: sz
        } = zz;
        this.dispatchTransactions = zz.dispatchTransactions || sz && (zz => zz.forEach((zz => sz(zz, this)))) || (zz => this.update(zz)), this.dispatch = this.dispatch.bind(this), this._root = zz.root || function(zz) {
          for (; zz;) {
            if (zz && (9 == zz.nodeType || 11 == zz.nodeType && zz.host)) return zz;
            zz = zz.assignedSlot || zz.parentNode
          }
          return null
        }(zz.parent) || document, this.viewState = new OW(this, zz.state || Fz.p.create(zz)), zz.scrollTo && zz.scrollTo.is(lt) && (this.viewState.scrollTarget = zz.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Rt).map((zz => new ft(zz)));
        for (let Fz of this.plugins) Fz.update(this);
        this.observer = new JW(this), this.inputState = new uF(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Qs(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (tz = document.fonts) || void 0 === tz ? void 0 : tz.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        let Wz = 1 == tz.length && tz[0] instanceof Fz.K ? tz : 1 == tz.length && Array.isArray(tz[0]) ? tz[0] : [this.state.update(...tz)];
        this.dispatchTransactions(Wz, this)
      }
      update(zz) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let tz, sz = !1,
          Wz = !1,
          Xz = this.state;
        for (let Fz of zz) {
          if (Fz.startState != Xz) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          Xz = Fz.state
        }
        if (this.destroyed) return void(this.viewState.state = Xz);
        let Oz = this.hasFocus,
          oz = 0,
          vz = null;
        zz.some((zz => zz.annotation(jF))) ? (this.inputState.notifiedFocused = Oz, oz = 1) : Oz != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Oz, vz = AF(Xz, Oz), vz || (oz = 1));
        let Uz = this.observer.delayedAndroidKey,
          Kz = null;
        if (Uz ? (this.observer.clearDelayedAndroidKey(), Kz = this.observer.readChange(), (Kz && !this.state.doc.eq(Xz.doc) || !this.state.selection.eq(Xz.selection)) && (Kz = null)) : this.observer.clear(), Xz.facet(Fz.p.phrases) != this.state.facet(Fz.p.phrases)) return this.setState(Xz);
        tz = us.create(this, Xz, zz), tz.flags |= oz;
        let uz = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let tz of zz) {
            if (uz && (uz = uz.map(tz.changes)), tz.scrollIntoView) {
              let {
                main: zz
              } = tz.state.selection, {
                x: sz,
                y: Wz
              } = this.state.facet(ZW.cursorScrollMargin);
              uz = new Lt(zz.empty ? zz : Fz.l.cursor(zz.head, zz.head > zz.anchor ? -1 : 1), "nearest", "nearest", Wz, sz)
            }
            for (let zz of tz.effects) zz.is(lt) && (uz = zz.value.clip(this.state))
          }
          this.viewState.update(tz, uz), this.bidiCache = cW.update(this.bidiCache, tz.changes), tz.empty || (this.updatePlugins(tz), this.inputState.update(tz)), sz = this.docView.update(tz), this.state.facet(Us) != this.styleModules && this.mountStyles(), Wz = this.updateAttrs(), this.showAnnouncements(zz), this.docView.updateSelection(sz, zz.some((zz => zz.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (tz.startState.facet(wW) != tz.state.facet(wW) && (this.viewState.mustMeasureContent = !0), (sz || Wz || uz || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), sz && this.docViewUpdate(), !tz.empty)
          for (let Fz of this.state.facet(At)) try {
            Fz(tz)
          } catch (Nz) {
            qt(this.state, Nz, "update listener")
          }(vz || Kz) && Promise.resolve().then((() => {
            vz && this.state == vz.startState && this.dispatch(vz), Kz && !oF(this, Kz) && Uz.force && Wt(this.contentDOM, Uz.key, Uz.keyCode)
          }))
      }
      setState(zz) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = zz);
        this.updateState = 2;
        let tz = this.hasFocus;
        try {
          for (let zz of this.plugins) zz.destroy(this);
          this.viewState = new OW(this, zz), this.plugins = zz.facet(Rt).map((zz => new ft(zz))), this.pluginMap.clear();
          for (let zz of this.plugins) zz.update(this);
          this.docView.destroy(), this.docView = new Qs(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        tz && this.focus(), this.requestMeasure()
      }
      updatePlugins(zz) {
        let tz = zz.startState.facet(Rt),
          sz = zz.state.facet(Rt);
        if (tz != sz) {
          let Fz = [];
          for (let Wz of sz) {
            let sz = tz.indexOf(Wz);
            if (sz < 0) Fz.push(new ft(Wz));
            else {
              let tz = this.plugins[sz];
              tz.mustUpdate = zz, Fz.push(tz)
            }
          }
          for (let tz of this.plugins) tz.mustUpdate != zz && tz.destroy(this);
          this.plugins = Fz, this.pluginMap.clear()
        } else
          for (let Fz of this.plugins) Fz.mustUpdate = zz;
        for (let Fz = 0; Fz < this.plugins.length; Fz++) this.plugins[Fz].update(this);
        tz != sz && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let tz of this.plugins) {
          let sz = tz.value;
          if (sz && sz.docViewUpdate) try {
            sz.docViewUpdate(this)
          } catch (zz) {
            qt(this.state, zz, "doc view update listener")
          }
        }
      }
      measure() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, zz && this.observer.forceFlush();
        let tz = null,
          sz = this.viewState.scrollParent,
          Fz = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Wz,
            scrollAnchorHeight: Xz
          } = this.viewState;
        Math.abs(Fz - this.viewState.scrollOffset) > 1 && (Xz = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let zz = 0;; zz++) {
            if (Xz < 0)
              if (Xt(sz || this.win)) Wz = -1, Xz = this.viewState.heightMap.height;
              else {
                let zz = this.viewState.scrollAnchorAt(Fz);
                Wz = zz.from, Xz = zz.top
              } this.updateState = 1;
            let oz = this.viewState.measure();
            if (!oz && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (zz > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let vz = [];
            4 & oz || ([this.measureRequests, vz] = [vz, this.measureRequests]);
            let Uz = vz.map((zz => {
                try {
                  return zz.read(this)
                } catch (tz) {
                  return qt(this.state, tz), TW
                }
              })),
              Kz = us.create(this, this.state, []),
              uz = !1;
            Kz.flags |= oz, tz ? tz.flags |= oz : tz = Kz, this.updateState = 2, Kz.empty || (this.updatePlugins(Kz), this.inputState.update(Kz), this.updateAttrs(), uz = this.docView.update(Kz), uz && this.docViewUpdate());
            for (let zz = 0; zz < vz.length; zz++)
              if (Uz[zz] != TW) try {
                let tz = vz[zz];
                tz.write && tz.write(Uz[zz], this)
              } catch (Oz) {
                qt(this.state, Oz)
              }
            if (uz && this.docView.updateSelection(!0), !Kz.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, Xz = -1;
                  continue
                } {
                  let zz = ((Wz < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Wz).top) - Xz) / this.scaleY;
                  if ((zz > 1 || zz < -1) && (sz == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Fz += zz, sz ? sz.scrollTop += zz : this.win.scrollBy(0, zz), Xz = -1;
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
        if (tz && !tz.empty)
          for (let oz of this.state.facet(At)) oz(tz)
      }
      get themeClasses() {
        return gW + " " + (this.state.facet(DW) ? BW : HW) + " " + this.state.facet(wW)
      }
      updateAttrs() {
        let zz = jW(this, Et, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          tz = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(St) ? "true" : "false",
            class: "cm-content",
            style: `${mz.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (tz["aria-readonly"] = "true"), jW(this, zs, tz);
        let sz = this.observer.ignore((() => {
          let sz = ez(this.contentDOM, this.contentAttrs, tz),
            Fz = ez(this.dom, this.editorAttrs, zz);
          return sz || Fz
        }));
        return this.editorAttrs = zz, this.contentAttrs = tz, sz
      }
      showAnnouncements(zz) {
        let tz = !0;
        for (let sz of zz)
          for (let zz of sz.effects)
            if (zz.is(ZW.announce)) {
              tz && (this.announceDOM.textContent = ""), tz = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = zz.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Us);
        let zz = this.state.facet(ZW.cspNonce);
        Wz.e.mount(this.root, this.styleModules.concat(YW).reverse(), zz ? {
          nonce: zz
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(zz) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), zz) {
          if (this.measureRequests.indexOf(zz) > -1) return;
          if (null != zz.key)
            for (let tz = 0; tz < this.measureRequests.length; tz++)
              if (this.measureRequests[tz].key === zz.key) return void(this.measureRequests[tz] = zz);
          this.measureRequests.push(zz)
        }
      }
      plugin(zz) {
        let tz = this.pluginMap.get(zz);
        return (void 0 === tz || tz && tz.plugin != zz) && this.pluginMap.set(zz, tz = this.plugins.find((tz => tz.plugin == zz)) || null), tz && tz.update(this).value
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
      elementAtHeight(zz) {
        return this.readMeasured(), this.viewState.elementAtHeight(zz)
      }
      lineBlockAtHeight(zz) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(zz)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(zz) {
        return this.viewState.lineBlockAt(zz)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(zz, tz, sz) {
        return Rs(this, zz, qs(this, zz, tz, sz))
      }
      moveByGroup(zz, tz) {
        return Rs(this, zz, qs(this, zz, tz, (tz => function(zz, tz, sz) {
          let Wz = zz.state.charCategorizer(tz),
            Xz = Wz(sz);
          return zz => {
            let tz = Wz(zz);
            return Xz == Fz.i.Space && (Xz = tz), Xz == tz
          }
        }(this, zz.head, tz))))
      }
      visualLineSide(zz, tz) {
        let sz = this.bidiSpans(zz),
          Wz = this.textDirectionAt(zz.from),
          Xz = sz[tz ? sz.length - 1 : 0];
        return Fz.l.cursor(Xz.side(tz, Wz) + zz.from, Xz.forward(!tz, Wz) ? 1 : -1)
      }
      moveToLineBoundary(zz, tz) {
        return function(zz, tz, sz, Wz) {
          let Xz = as(zz, tz.head, tz.assoc || -1),
            Oz = Wz && Xz.type == Tz.Text && (zz.lineWrapping || Xz.widgetLineBreaks) ? zz.coordsAtPos(tz.assoc < 0 && tz.head > Xz.from ? tz.head - 1 : tz.head) : null;
          if (Oz) {
            let tz = zz.dom.getBoundingClientRect(),
              Wz = zz.textDirectionAt(Xz.from),
              oz = zz.posAtCoords({
                x: sz == (Wz == Ut.LTR) ? tz.right - 1 : tz.left + 1,
                y: (Oz.top + Oz.bottom) / 2
              });
            if (null != oz) return Fz.l.cursor(oz, sz ? -1 : 1)
          }
          return Fz.l.cursor(sz ? Xz.to : Xz.from, sz ? -1 : 1)
        }(this, zz, tz, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(zz, tz, sz) {
        return Rs(this, zz, function(zz, tz, sz, Wz) {
          let Xz = tz.head,
            Oz = sz ? 1 : -1;
          if (Xz == (sz ? zz.state.doc.length : 0)) return Fz.l.cursor(Xz, tz.assoc);
          let oz, vz = tz.goalColumn,
            Uz = zz.contentDOM.getBoundingClientRect(),
            Kz = zz.coordsAtPos(Xz, tz.assoc || ((tz.empty ? sz : tz.head == tz.from) ? 1 : -1)),
            uz = zz.documentTop;
          if (Kz) null == vz && (vz = Kz.left - Uz.left), oz = Oz < 0 ? Kz.top : Kz.bottom;
          else {
            let tz = zz.viewState.lineBlockAt(Xz);
            null == vz && (vz = Math.min(Uz.right - Uz.left, zz.defaultCharacterWidth * (Xz - tz.from))), oz = (Oz < 0 ? tz.top : tz.bottom) + uz
          }
          let Nz = Uz.left + vz,
            bz = zz.viewState.heightOracle.textHeight >> 1,
            wz = null !== Wz && void 0 !== Wz ? Wz : bz;
          for (let Dz = 0;; Dz += bz) {
            let tz = oz + (wz + Dz) * Oz,
              Wz = fs(zz, {
                x: Nz,
                y: tz
              }, !1, Oz);
            if (sz ? tz > Uz.bottom : tz < Uz.top) return Fz.l.cursor(Wz.pos, Wz.assoc);
            let Xz = zz.coordsAtPos(Wz.pos, Wz.assoc),
              Kz = Xz ? (Xz.top + Xz.bottom) / 2 : 0;
            if (!Xz || (sz ? Kz > oz : Kz < oz)) return Fz.l.cursor(Wz.pos, Wz.assoc, void 0, vz)
          }
        }(this, zz, tz, sz))
      }
      domAtPos(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(zz, tz)
      }
      posAtDOM(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(zz, tz)
      }
      posAtCoords(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let sz = fs(this, zz, tz);
        return sz && sz.pos
      }
      posAndSideAtCoords(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), fs(this, zz, tz)
      }
      coordsAtPos(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let sz = this.docView.coordsAt(zz, tz);
        if (!sz || sz.left == sz.right) return sz;
        let Fz = this.state.doc.lineAt(zz),
          Wz = this.bidiSpans(Fz);
        return Vz(sz, Wz[Pt.find(Wz, zz - Fz.from, -1, tz)].dir == Ut.LTR == tz > 0)
      }
      coordsForChar(zz) {
        return this.readMeasured(), this.docView.coordsForChar(zz)
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
      textDirectionAt(zz) {
        return !this.state.facet(Qt) || zz < this.viewport.from || zz > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(zz))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(zz) {
        if (zz.length > GW) return It(zz.length);
        let tz, sz = this.textDirectionAt(zz.from);
        for (let Wz of this.bidiCache)
          if (Wz.from == zz.from && Wz.dir == sz && (Wz.fresh || rt(Wz.isolates, tz = Os(this, zz)))) return Wz.order;
        tz || (tz = Os(this, zz));
        let Fz = Jt(zz.text, sz, tz);
        return this.bidiCache.push(new cW(zz.from, zz.to, sz, tz, !0, Fz)), Fz
      }
      get hasFocus() {
        var zz;
        return (this.dom.ownerDocument.hasFocus() || mz.safari && (null === (zz = this.inputState) || void 0 === zz ? void 0 : zz.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          st(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(zz) {
        this._root != zz && (this._root = zz, this.observer.setWindow((9 == zz.nodeType ? zz : zz.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let zz of this.plugins) zz.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var sz, Wz, Xz, Oz;
        return lt.of(new Lt("number" == typeof zz ? Fz.l.cursor(zz) : zz, null !== (sz = tz.y) && void 0 !== sz ? sz : "nearest", null !== (Wz = tz.x) && void 0 !== Wz ? Wz : "nearest", null !== (Xz = tz.yMargin) && void 0 !== Xz ? Xz : 5, null !== (Oz = tz.xMargin) && void 0 !== Oz ? Oz : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: zz,
          scrollLeft: tz
        } = this.scrollDOM, sz = this.viewState.scrollAnchorAt(zz);
        return lt.of(new Lt(Fz.l.cursor(sz.from), "start", "start", sz.top - zz, tz, !0))
      }
      setTabFocusMode(zz) {
        null == zz ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof zz ? this.inputState.tabFocusMode = zz ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + zz)
      }
      static domEventHandlers(zz) {
        return pt.define((() => ({})), {
          eventHandlers: zz
        })
      }
      static domEventObservers(zz) {
        return pt.define((() => ({})), {
          eventObservers: zz
        })
      }
      static theme(zz, tz) {
        let sz = Wz.e.newName(),
          Fz = [wW.of(sz), Us.of(rW(`.${sz}`, zz))];
        return tz && tz.dark && Fz.push(DW.of(!0)), Fz
      }
      static baseTheme(zz) {
        return Fz.x.lowest(Us.of(rW("." + gW, zz, PW)))
      }
      static findFromDOM(zz) {
        var tz;
        let sz = zz.querySelector(".cm-content"),
          Fz = sz && bs.get(sz) || bs.get(zz);
        return (null === (tz = null === Fz || void 0 === Fz ? void 0 : Fz.root) || void 0 === tz ? void 0 : tz.view) || null
      }
    }
    ZW.styleModule = Us, ZW.inputHandler = yt, ZW.clipboardInputFilter = dt, ZW.clipboardOutputFilter = ht, ZW.scrollHandler = it, ZW.focusChangeEffect = Mt, ZW.perLineTextDirection = Qt, ZW.exceptionSink = jt, ZW.updateListener = At, ZW.editable = St, ZW.mouseSelectionStyle = ct, ZW.dragMovesSelection = Tt, ZW.clickAddsSelectionRange = Gt, ZW.sW = ts, ZW.blockWrappers = ss, ZW.outerDecorations = Fs, ZW.atomicRanges = Ws, ZW.bidiIsolatedRanges = Xs, ZW.cursorScrollMargin = Fz.q.define({
      combine: zz => {
        let tz = 5,
          sz = 5;
        for (let Fz of zz) "number" == typeof Fz ? tz = sz = Fz : ({
          x: tz,
          y: sz
        } = Fz);
        return {
          x: tz,
          y: sz
        }
      }
    }), ZW.scrollMargins = os, ZW.darkTheme = DW, ZW.cspNonce = Fz.q.define({
      combine: zz => zz.length ? zz[0] : ""
    }), ZW.contentAttributes = zs, ZW.editorAttributes = Et, ZW.lineWrapping = ZW.contentAttributes.of({
      class: "cm-lineWrapping"
    }), ZW.announce = Fz.F.define();
    const GW = 4096,
      TW = {};
    class cW {
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        this.from = zz, this.to = tz, this.dir = sz, this.isolates = Fz, this.fresh = Wz, this.order = Xz
      }
      static update(zz, tz) {
        if (tz.empty && !zz.some((zz => zz.fresh))) return zz;
        let sz = [],
          Fz = zz.length ? zz[zz.length - 1].dir : Ut.LTR;
        for (let Wz = Math.max(0, zz.length - 10); Wz < zz.length; Wz++) {
          let Xz = zz[Wz];
          Xz.dir != Fz || tz.touchesRange(Xz.from, Xz.to) || sz.push(new cW(tz.mapPos(Xz.from, 1), tz.mapPos(Xz.to, -1), Xz.dir, Xz.isolates, !1, Xz.order))
        }
        return sz
      }
    }

    function jW(zz, tz, sz) {
      for (let Fz = zz.state.facet(tz), Wz = Fz.length - 1; Wz >= 0; Wz--) {
        let tz = Fz[Wz],
          Xz = "function" == typeof tz ? tz(zz) : tz;
        Xz && Jz(Xz, sz)
      }
      return sz
    }
    const AW = mz.mac ? "mac" : mz.windows ? "win" : mz.linux ? "linux" : "key";

    function yW(zz, tz, sz) {
      return tz.altKey && (zz = "Alt-" + zz), tz.ctrlKey && (zz = "Ctrl-" + zz), tz.metaKey && (zz = "Meta-" + zz), !1 !== sz && tz.shiftKey && (zz = "Shift-" + zz), zz
    }
    const MW = Fz.x.default(ZW.domEventHandlers({
        keydown: (zz, tz) => nW(QW(tz.state), zz, tz, "editor")
      })),
      dW = Fz.q.define({
        enables: MW
      }),
      hW = new WeakMap;

    function QW(zz) {
      let tz = zz.facet(dW),
        sz = hW.get(tz);
      return sz || hW.set(tz, sz = function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AW,
          sz = Object.create(null),
          Fz = Object.create(null),
          Wz = (zz, tz) => {
            let sz = Fz[zz];
            if (null == sz) Fz[zz] = tz;
            else if (sz != tz) throw new Error("Key binding " + zz + " is used both as a regular binding and as a multi-stroke prefix")
          },
          Xz = (zz, Fz, Xz, Oz, oz) => {
            var vz, Uz;
            let Kz = sz[zz] || (sz[zz] = Object.create(null)),
              uz = Fz.split(/ (?!$)/).map((zz => function(zz, tz) {
                const sz = zz.split(/-(?!$)/);
                let Fz, Wz, Xz, Oz, oz = sz[sz.length - 1];
                "Space" == oz && (oz = " ");
                for (let vz = 0; vz < sz.length - 1; ++vz) {
                  const zz = sz[vz];
                  if (/^(cmd|meta|m)$/i.test(zz)) Oz = !0;
                  else if (/^a(lt)?$/i.test(zz)) Fz = !0;
                  else if (/^(c|ctrl|control)$/i.test(zz)) Wz = !0;
                  else if (/^s(hift)?$/i.test(zz)) Xz = !0;
                  else {
                    if (!/^mod$/i.test(zz)) throw new Error("Unrecognized modifier name: " + zz);
                    "mac" == tz ? Oz = !0 : Wz = !0
                  }
                }
                return Fz && (oz = "Alt-" + oz), Wz && (oz = "Ctrl-" + oz), Oz && (oz = "Meta-" + oz), Xz && (oz = "Shift-" + oz), oz
              }(zz, tz)));
            for (let tz = 1; tz < uz.length; tz++) {
              let sz = uz.slice(0, tz).join(" ");
              Wz(sz, !0), Kz[sz] || (Kz[sz] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [tz => {
                  let Fz = iW = {
                    view: tz,
                    prefix: sz,
                    scope: zz
                  };
                  return setTimeout((() => {
                    iW == Fz && (iW = null)
                  }), LW), !0
                }]
              })
            }
            let Nz = uz.join(" ");
            Wz(Nz, !1);
            let bz = Kz[Nz] || (Kz[Nz] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Uz = null === (vz = Kz._any) || void 0 === vz ? void 0 : vz.run) || void 0 === Uz ? void 0 : Uz.slice()) || []
            });
            Xz && bz.run.push(Xz), Oz && (bz.preventDefault = !0), oz && (bz.stopPropagation = !0)
          };
        for (let Oz of zz) {
          let zz = Oz.scope ? Oz.scope.split(" ") : ["editor"];
          if (Oz.any)
            for (let tz of zz) {
              let zz = sz[tz] || (sz[tz] = Object.create(null));
              zz._any || (zz._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Fz
              } = Oz;
              for (let tz in zz) zz[tz].run.push((zz => Fz(zz, lW)))
            }
          let Fz = Oz[tz] || Oz.key;
          if (Fz)
            for (let tz of zz) Xz(tz, Fz, Oz.run, Oz.preventDefault, Oz.stopPropagation), Oz.shift && Xz(tz, "Shift-" + Fz, Oz.shift, Oz.preventDefault, Oz.stopPropagation)
        }
        return sz
      }(tz.reduce(((zz, tz) => zz.concat(tz)), []))), sz
    }

    function kW(zz, tz, sz) {
      return nW(QW(zz.state), tz, zz, sz)
    }
    let iW = null;
    const LW = 4e3;
    let lW = null;

    function nW(zz, tz, sz, Wz) {
      lW = tz;
      let Uz = function(zz) {
          var tz = !(oz && zz.metaKey && zz.shiftKey && !zz.ctrlKey && !zz.altKey || vz && zz.shiftKey && zz.key && 1 == zz.key.length || "Unidentified" == zz.key) && zz.key || (zz.shiftKey ? Oz : Xz)[zz.keyCode] || zz.key || "Unidentified";
          return "Esc" == tz && (tz = "Escape"), "Del" == tz && (tz = "Delete"), "Left" == tz && (tz = "ArrowLeft"), "Up" == tz && (tz = "ArrowUp"), "Right" == tz && (tz = "ArrowRight"), "Down" == tz && (tz = "ArrowDown"), tz
        }(tz),
        Kz = (0, Fz.L)(Uz, 0),
        uz = (0, Fz.P)(Kz) == Uz.length && " " != Uz,
        Nz = "",
        bz = !1,
        wz = !1,
        Dz = !1;
      iW && iW.view == sz && iW.scope == Wz && (Nz = iW.prefix + " ", gF.indexOf(tz.keyCode) < 0 && (wz = !0, iW = null));
      let gz, Hz, Bz = new Set,
        Pz = zz => {
          if (zz) {
            for (let tz of zz.run)
              if (!Bz.has(tz) && (Bz.add(tz), tz(sz))) return zz.stopPropagation && (Dz = !0), !0;
            zz.preventDefault && (zz.stopPropagation && (Dz = !0), wz = !0)
          }
          return !1
        },
        rz = zz[Wz];
      return rz && (Pz(rz[Nz + yW(Uz, tz, !uz)]) ? bz = !0 : !uz || !(tz.altKey || tz.metaKey || tz.ctrlKey) || mz.windows && tz.ctrlKey && tz.altKey || mz.mac && tz.altKey && !tz.ctrlKey && !tz.metaKey || !(gz = Xz[tz.keyCode]) || gz == Uz ? uz && tz.shiftKey && Pz(rz[Nz + yW(Uz, tz, !0)]) && (bz = !0) : (Pz(rz[Nz + yW(gz, tz, !0)]) || tz.shiftKey && (Hz = Oz[tz.keyCode]) != Uz && Hz != gz && Pz(rz[Nz + yW(Hz, tz, !1)])) && (bz = !0), !bz && Pz(rz._any) && (bz = !0)), wz && (bz = !0), bz && Dz && tz.stopPropagation(), lW = null, bz
    }
    class aW {
      constructor(zz, tz, sz, Fz, Wz) {
        this.className = zz, this.left = tz, this.top = sz, this.width = Fz, this.height = Wz
      }
      draw() {
        let zz = document.createElement("div");
        return zz.className = this.className, this.adjust(zz), zz
      }
      update(zz, tz) {
        return tz.className == this.className && (this.adjust(zz), !0)
      }
      adjust(zz) {
        zz.style.left = this.left + "px", zz.style.top = this.top + "px", null != this.width && (zz.style.width = this.width + "px"), zz.style.height = this.height + "px"
      }
      eq(zz) {
        return this.left == zz.left && this.top == zz.top && this.width == zz.width && this.height == zz.height && this.className == zz.className
      }
      static forRange(zz, tz, sz) {
        if (sz.empty) {
          let Fz = zz.coordsAtPos(sz.head, sz.assoc || 1);
          if (!Fz) return [];
          let Wz = qW(zz);
          return [new aW(tz, Fz.left - Wz.left, Fz.top - Wz.top, null, Fz.bottom - Fz.top)]
        }
        return function(zz, tz, sz) {
          if (sz.to <= zz.viewport.from || sz.from >= zz.viewport.to) return [];
          let Fz = Math.max(sz.from, zz.viewport.from),
            Wz = Math.min(sz.to, zz.viewport.to),
            Xz = zz.textDirection == Ut.LTR,
            Oz = zz.contentDOM,
            oz = Oz.getBoundingClientRect(),
            vz = qW(zz),
            Uz = Oz.querySelector(".cm-line"),
            Kz = Uz && window.getComputedStyle(Uz),
            uz = oz.left + (Kz ? parseInt(Kz.paddingLeft) + Math.min(0, parseInt(Kz.textIndent)) : 0),
            Nz = oz.right - (Kz ? parseInt(Kz.paddingRight) : 0),
            bz = as(zz, Fz, 1),
            wz = as(zz, Wz, -1),
            Dz = bz.type == Tz.Text ? bz : null,
            gz = wz.type == Tz.Text ? wz : null;
          Dz && (zz.lineWrapping || bz.widgetLineBreaks) && (Dz = SW(zz, Fz, 1, Dz));
          gz && (zz.lineWrapping || wz.widgetLineBreaks) && (gz = SW(zz, Wz, -1, gz));
          if (Dz && gz && Dz.from == gz.from && Dz.to == gz.to) return Bz(Pz(sz.from, sz.to, Dz));
          {
            let tz = Dz ? Pz(sz.from, null, Dz) : rz(bz, !1),
              Fz = gz ? Pz(null, sz.to, gz) : rz(wz, !0),
              Wz = [];
            return (Dz || bz).to < (gz || wz).from - (Dz && gz ? 1 : 0) || bz.widgetLineBreaks > 1 && tz.bottom + zz.defaultLineHeight / 2 < Fz.top ? Wz.push(Hz(uz, tz.bottom, Nz, Fz.top)) : tz.bottom < Fz.top && zz.elementAtHeight((tz.bottom + Fz.top) / 2).type == Tz.Text && (tz.bottom = Fz.top = (tz.bottom + Fz.top) / 2), Bz(tz).concat(Wz).concat(Bz(Fz))
          }

          function Hz(zz, sz, Fz, Wz) {
            return new aW(tz, zz - vz.left, sz - vz.top, Math.max(0, Fz - zz), Wz - sz)
          }

          function Bz(zz) {
            let {
              top: tz,
              bottom: sz,
              horizontal: Fz
            } = zz, Wz = [];
            for (let Xz = 0; Xz < Fz.length; Xz += 2) Wz.push(Hz(Fz[Xz], tz, Fz[Xz + 1], sz));
            return Wz
          }

          function Pz(tz, sz, Fz) {
            let Wz = 1e9,
              Oz = -1e9,
              oz = [];

            function vz(tz, sz, vz, Uz, Kz) {
              let bz = zz.coordsAtPos(tz, tz == Fz.to ? -2 : 2),
                wz = zz.coordsAtPos(vz, vz == Fz.from ? 2 : -2);
              bz && wz && (Wz = Math.min(bz.top, wz.top, Wz), Oz = Math.max(bz.bottom, wz.bottom, Oz), Kz == Ut.LTR ? oz.push(Xz && sz ? uz : bz.left, Xz && Uz ? Nz : wz.right) : oz.push(!Xz && Uz ? uz : wz.left, !Xz && sz ? Nz : bz.right))
            }
            let Uz = null !== tz && void 0 !== tz ? tz : Fz.from,
              Kz = null !== sz && void 0 !== sz ? sz : Fz.to;
            for (let Xz of zz.U_)
              if (Xz.to > Uz && Xz.from < Kz)
                for (let Fz = Math.max(Xz.from, Uz), Wz = Math.min(Xz.to, Kz);;) {
                  let Xz = zz.state.doc.lineAt(Fz);
                  for (let Oz of zz.bidiSpans(Xz)) {
                    let zz = Oz.from + Xz.from,
                      oz = Oz.to + Xz.from;
                    if (zz >= Wz) break;
                    oz > Fz && vz(Math.max(zz, Fz), null == tz && zz <= Uz, Math.min(oz, Wz), null == sz && oz >= Kz, Oz.dir)
                  }
                  if (Fz = Xz.to + 1, Fz >= Wz) break
                }
            return 0 == oz.length && vz(Uz, null == tz, Kz, null == sz, zz.textDirection), {
              top: Wz,
              bottom: Oz,
              horizontal: oz
            }
          }

          function rz(zz, tz) {
            let sz = oz.top + (tz ? zz.top : zz.bottom);
            return {
              top: sz,
              bottom: sz,
              horizontal: []
            }
          }
        }(zz, tz, sz)
      }
    }

    function qW(zz) {
      let tz = zz.scrollDOM.getBoundingClientRect();
      return {
        left: (zz.textDirection == Ut.LTR ? tz.left : tz.right - zz.scrollDOM.clientWidth * zz.scaleX) - zz.scrollDOM.scrollLeft * zz.scaleX,
        top: tz.top - zz.scrollDOM.scrollTop * zz.scaleY
      }
    }

    function SW(zz, tz, sz, Fz) {
      let Wz = zz.coordsAtPos(tz, 2 * sz);
      if (!Wz) return Fz;
      let Xz = zz.dom.getBoundingClientRect(),
        Oz = (Wz.top + Wz.bottom) / 2,
        oz = zz.posAtCoords({
          x: Xz.left + 1,
          y: Oz
        }),
        vz = zz.posAtCoords({
          x: Xz.right - 1,
          y: Oz
        });
      return null == oz || null == vz ? Fz : {
        from: Math.max(Fz.from, Math.min(oz, vz)),
        to: Math.min(Fz.to, Math.max(oz, vz))
      }
    }
    class VW {
      constructor(zz, tz) {
        this.view = zz, this.layer = tz, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = zz.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), tz.above && this.dom.classList.add("cm-layer-above"), tz.class && this.dom.classList.add(tz.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(zz.state), zz.requestMeasure(this.measureReq), tz.mount && tz.mount(this.dom, zz)
      }
      update(zz) {
        zz.startState.facet(RW) != zz.state.facet(RW) && this.setOrder(zz.state), (this.layer.update(zz, this.dom) || zz.geometryChanged) && (this.scale(), zz.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(zz) {
        !1 !== this.layer.updateOnDocViewUpdate && zz.requestMeasure(this.measureReq)
      }
      setOrder(zz) {
        let tz = 0,
          sz = zz.facet(RW);
        for (; tz < sz.length && sz[tz] != this.layer;) tz++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - tz)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: zz,
          scaleY: tz
        } = this.view;
        zz == this.scaleX && tz == this.scaleY || (this.scaleX = zz, this.scaleY = tz, this.dom.style.transform = `scale(${1/zz}, ${1/tz})`)
      }
      draw(zz) {
        if (zz.length != this.drawn.length || zz.some(((zz, tz) => {
            return sz = zz, Fz = this.drawn[tz], !(sz.constructor == Fz.constructor && sz.eq(Fz));
            var sz, Fz
          }))) {
          let tz = this.dom.firstChild,
            sz = 0;
          for (let Fz of zz) Fz.update && tz && Fz.constructor && this.drawn[sz].constructor && Fz.update(tz, this.drawn[sz]) ? (tz = tz.nextSibling, sz++) : this.dom.insertBefore(Fz.draw(), tz);
          for (; tz;) {
            let zz = tz.nextSibling;
            tz.remove(), tz = zz
          }
          this.drawn = zz, mz.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const RW = Fz.q.define();

    function pW(zz) {
      return [pt.define((tz => new VW(tz, zz))), RW.of(zz)]
    }
    const fW = Fz.q.define({
      combine: zz => (0, Fz.Q)(zz, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (zz, tz) => Math.min(zz, tz),
        drawRangeCursor: (zz, tz) => zz || tz
      })
    });

    function EW() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [fW.of(zz), tX, FX, WX, kt.of(!0)]
    }

    function zX(zz) {
      return zz.startState.facet(fW) != zz.state.facet(fW)
    }
    const tX = pW({
      above: !0,
      markers(zz) {
        let {
          state: tz
        } = zz, sz = tz.facet(fW), Wz = [];
        for (let Xz of tz.selection.du) {
          let Oz = Xz == tz.selection.main;
          if (Xz.empty || sz.drawRangeCursor && !(Oz && mz.ios && sz.iosSelectionHandles)) {
            let tz = Oz ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              sz = Xz.empty ? Xz : Fz.l.cursor(Xz.head, Xz.assoc);
            for (let Fz of aW.forRange(zz, tz, sz)) Wz.push(Fz)
          }
        }
        return Wz
      },
      update(zz, tz) {
        zz.transactions.some((zz => zz.selection)) && (tz.style.animationName = "cm-blink" == tz.style.animationName ? "cm-blink2" : "cm-blink");
        let sz = zX(zz);
        return sz && sX(zz.state, tz), zz.docChanged || zz.selectionSet || sz
      },
      mount(zz, tz) {
        sX(tz.state, zz)
      },
      class: "cm-cursorLayer"
    });

    function sX(zz, tz) {
      tz.style.animationDuration = zz.facet(fW).cursorBlinkRate + "ms"
    }
    const FX = pW({
        above: !1,
        markers(zz) {
          let tz = [],
            {
              main: sz,
              du: Wz
            } = zz.state.selection;
          for (let Fz of Wz)
            if (!Fz.empty)
              for (let sz of aW.forRange(zz, "cm-selectionBackground", Fz)) tz.push(sz);
          if (mz.ios && !sz.empty && zz.state.facet(fW).iosSelectionHandles) {
            for (let Wz of aW.forRange(zz, "cm-selectionHandle cm-selectionHandle-start", Fz.l.cursor(sz.from, 1))) tz.push(Wz);
            for (let Wz of aW.forRange(zz, "cm-selectionHandle cm-selectionHandle-end", Fz.l.cursor(sz.to, 1))) tz.push(Wz)
          }
          return tz
        },
        update: (zz, tz) => zz.docChanged || zz.selectionSet || zz.viewportChanged || zX(zz),
        class: "cm-selectionLayer"
      }),
      WX = Fz.x.highest(ZW.theme({
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
      XX = Fz.F.define({
        map: (zz, tz) => null == zz ? null : tz.mapPos(zz)
      }),
      OX = Fz.H.define({
        create: () => null,
        update: (zz, tz) => (null != zz && (zz = tz.changes.mapPos(zz)), tz.effects.reduce(((zz, tz) => tz.is(XX) ? tz.value : zz), zz))
      }),
      oX = pt.fromClass(class {
        constructor(zz) {
          this.view = zz, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(zz) {
          var tz;
          let sz = zz.state.field(OX);
          null == sz ? null != this.cursor && (null === (tz = this.cursor) || void 0 === tz || tz.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (zz.startState.field(OX) != sz || zz.docChanged || zz.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: zz
          } = this, tz = zz.state.field(OX), sz = null != tz && zz.coordsAtPos(tz);
          if (!sz) return null;
          let Fz = zz.scrollDOM.getBoundingClientRect();
          return {
            left: sz.left - Fz.left + zz.scrollDOM.scrollLeft * zz.scaleX,
            top: sz.top - Fz.top + zz.scrollDOM.scrollTop * zz.scaleY,
            height: sz.bottom - sz.top
          }
        }
        drawCursor(zz) {
          if (this.cursor) {
            let {
              scaleX: tz,
              scaleY: sz
            } = this.view;
            zz ? (this.cursor.style.left = zz.left / tz + "px", this.cursor.style.top = zz.top / sz + "px", this.cursor.style.height = zz.height / sz + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(zz) {
          this.view.state.field(OX) != zz && this.view.dispatch({
            effects: XX.of(zz)
          })
        }
      }, {
        eventObservers: {
          dragover(zz) {
            this.setDropPos(this.view.posAtCoords({
              x: zz.clientX,
              y: zz.clientY
            }))
          },
          dragleave(zz) {
            zz.target != this.view.contentDOM && this.view.contentDOM.contains(zz.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function vX() {
      return [OX, oX]
    }

    function UX(zz, tz, sz, Fz, Wz) {
      tz.lastIndex = 0;
      for (let Xz, Oz = zz.iterRange(sz, Fz), oz = sz; !Oz.next().done; oz += Oz.value.length)
        if (!Oz.lineBreak)
          for (; Xz = tz.exec(Oz.value);) Wz(oz + Xz.index, Xz)
    }
    class KX {
      constructor(zz) {
        const {
          regexp: tz,
          decoration: sz,
          decorate: Fz,
          boundary: Wz,
          maxLength: Xz = 1e3
        } = zz;
        if (!tz.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = tz, Fz) this.addMatch = (zz, tz, sz, Wz) => Fz(Wz, sz, sz + zz[0].length, zz, tz);
        else if ("function" == typeof sz) this.addMatch = (zz, tz, Fz, Wz) => {
          let Xz = sz(zz, tz, Fz);
          Xz && Wz(Fz, Fz + zz[0].length, Xz)
        };
        else {
          if (!sz) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (zz, tz, Fz, Wz) => Wz(Fz, Fz + zz[0].length, sz)
        }
        this.boundary = Wz, this.maxLength = Xz
      }
      createDeco(zz) {
        let tz = new Fz.y,
          sz = tz.add.bind(tz);
        for (let {
            from: Fz,
            to: Wz
          }
          of
          function(zz, tz) {
            let sz = zz.U_;
            if (1 == sz.length && sz[0].from == zz.viewport.from && sz[0].to == zz.viewport.to) return sz;
            let Fz = [];
            for (let {
                from: Wz,
                to: Xz
              }
              of sz) Wz = Math.max(zz.state.doc.lineAt(Wz).from, Wz - tz), Xz = Math.min(zz.state.doc.lineAt(Xz).to, Xz + tz), Fz.length && Fz[Fz.length - 1].to >= Wz ? Fz[Fz.length - 1].to = Xz : Fz.push({
              from: Wz,
              to: Xz
            });
            return Fz
          }(zz, this.maxLength)) UX(zz.state.doc, this.regexp, Fz, Wz, ((tz, Fz) => this.addMatch(Fz, zz, tz, sz)));
        return tz.finish()
      }
      updateDeco(zz, tz) {
        let sz = 1e9,
          Fz = -1;
        return zz.docChanged && zz.changes.iterChanges(((tz, Wz, Xz, Oz) => {
          Oz >= zz.view.viewport.from && Xz <= zz.view.viewport.to && (sz = Math.min(Xz, sz), Fz = Math.max(Oz, Fz))
        })), zz.viewportMoved || Fz - sz > 1e3 ? this.createDeco(zz.view) : Fz > -1 ? this.updateRange(zz.view, tz.map(zz.changes), sz, Fz) : tz
      }
      updateRange(zz, tz, sz, Fz) {
        for (let Wz of zz.U_) {
          let Xz = Math.max(Wz.from, sz),
            Oz = Math.min(Wz.to, Fz);
          if (Oz >= Xz) {
            let sz = zz.state.doc.lineAt(Xz),
              Fz = sz.to < Oz ? zz.state.doc.lineAt(Oz) : sz,
              oz = Math.max(Wz.from, sz.from),
              vz = Math.min(Wz.to, Fz.to);
            if (this.boundary) {
              for (; Xz > sz.from; Xz--)
                if (this.boundary.test(sz.text[Xz - 1 - sz.from])) {
                  oz = Xz;
                  break
                } for (; Oz < Fz.to; Oz++)
                if (this.boundary.test(Fz.text[Oz - Fz.from])) {
                  vz = Oz;
                  break
                }
            }
            let Uz, Kz = [],
              uz = (zz, tz, sz) => Kz.push(sz.range(zz, tz));
            if (sz == Fz)
              for (this.regexp.lastIndex = oz - sz.from;
                (Uz = this.regexp.exec(sz.text)) && Uz.index < vz - sz.from;) this.addMatch(Uz, zz, Uz.index + sz.from, uz);
            else UX(zz.state.doc, this.regexp, oz, vz, ((tz, sz) => this.addMatch(sz, zz, tz, uz)));
            tz = tz.update({
              filterFrom: oz,
              filterTo: vz,
              filter: (zz, tz) => zz < oz || tz > vz,
              add: Kz
            })
          }
        }
        return tz
      }
    }
    const uX = null != /x/.unicode ? "gu" : "g",
      NX = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", uX),
      bX = {
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
    let wX = null;
    const DX = Fz.q.define({
      combine(zz) {
        let tz = (0, Fz.Q)(zz, {
          render: null,
          specialChars: NX,
          addSpecialChars: null
        });
        return (tz.replaceTabs = ! function() {
          var zz;
          if (null == wX && "undefined" != typeof document && document.body) {
            let tz = document.body.style;
            wX = null != (null !== (zz = tz.tabSize) && void 0 !== zz ? zz : tz.MozTabSize)
          }
          return wX || !1
        }()) && (tz.specialChars = new RegExp("\t|" + tz.specialChars.source, uX)), tz.addSpecialChars && (tz.specialChars = new RegExp(tz.specialChars.source + "|" + tz.addSpecialChars.source, uX)), tz
      }
    });

    function gX() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [DX.of(zz), HX || (HX = pt.fromClass(class {
        constructor(zz) {
          this.view = zz, this.sW = cz.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(zz.state.facet(DX)), this.sW = this.decorator.createDeco(zz)
        }
        makeDecorator(zz) {
          return new KX({
            regexp: zz.specialChars,
            decoration: (tz, sz, Wz) => {
              let {
                doc: Xz
              } = sz.state, Oz = (0, Fz.L)(tz[0], 0);
              if (9 == Oz) {
                let zz = Xz.lineAt(Wz),
                  tz = sz.state.tabSize,
                  Oz = (0, Fz.U)(zz.text, tz, Wz - zz.from);
                return cz.replace({
                  widget: new PX((tz - Oz % tz) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[Oz] || (this.decorationCache[Oz] = cz.replace({
                widget: new BX(zz, Oz)
              }))
            },
            boundary: zz.replaceTabs ? void 0 : /[^]/
          })
        }
        update(zz) {
          let tz = zz.state.facet(DX);
          zz.startState.facet(DX) != tz ? (this.decorator = this.makeDecorator(tz), this.sW = this.decorator.createDeco(zz.view)) : this.sW = this.decorator.updateDeco(zz, this.sW)
        }
      }, {
        sW: zz => zz.sW
      }))]
    }
    let HX = null;
    class BX extends Gz {
      constructor(zz, tz) {
        super(), this.options = zz, this.code = tz
      }
      eq(zz) {
        return zz.code == this.code
      }
      toDOM(zz) {
        let tz = function(zz) {
            return zz >= 32 ? "\u2022" : 10 == zz ? "\u2424" : String.fromCharCode(9216 + zz)
          }(this.code),
          sz = zz.state.phrase("Control character") + " " + (bX[this.code] || "0x" + this.code.toString(16)),
          Fz = this.options.render && this.options.render(this.code, sz, tz);
        if (Fz) return Fz;
        let Wz = document.createElement("span");
        return Wz.textContent = tz, Wz.title = sz, Wz.setAttribute("aria-label", sz), Wz.className = "cm-specialChar", Wz
      }
      ignoreEvent() {
        return !1
      }
    }
    class PX extends Gz {
      constructor(zz) {
        super(), this.width = zz
      }
      eq(zz) {
        return zz.width == this.width
      }
      toDOM() {
        let zz = document.createElement("span");
        return zz.textContent = "\t", zz.className = "cm-tab", zz.style.width = this.width + "px", zz
      }
      ignoreEvent() {
        return !1
      }
    }

    function rX() {
      return xX
    }
    const YX = cz.line({
        class: "cm-activeLine"
      }),
      xX = pt.fromClass(class {
        constructor(zz) {
          this.sW = this.getDeco(zz)
        }
        update(zz) {
          (zz.docChanged || zz.selectionSet) && (this.sW = this.getDeco(zz.view))
        }
        getDeco(zz) {
          let tz = -1,
            sz = [];
          for (let Fz of zz.state.selection.du) {
            let Wz = zz.lineBlockAt(Fz.head);
            Wz.from > tz && (sz.push(YX.range(Wz.from)), tz = Wz.from)
          }
          return cz.set(sz)
        }
      }, {
        sW: zz => zz.sW
      });
    class mX extends Gz {
      constructor(zz) {
        super(), this.content = zz
      }
      toDOM(zz) {
        let tz = document.createElement("span");
        return tz.className = "cm-placeholder", tz.style.pointerEvents = "none", tz.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(zz) : this.content.cloneNode(!0)), tz.setAttribute("aria-hidden", "true"), tz
      }
      coordsAt(zz) {
        let tz = zz.firstChild ? Lz(zz.firstChild) : [];
        if (!tz.length) return null;
        let sz = window.getComputedStyle(zz.parentNode),
          Fz = Vz(tz[0], "rtl" != sz.direction),
          Wz = parseInt(sz.lineHeight);
        return Fz.bottom - Fz.top > 1.5 * Wz ? {
          left: Fz.left,
          right: Fz.right,
          top: Fz.top,
          bottom: Fz.top + Wz
        } : Fz
      }
      ignoreEvent() {
        return !1
      }
    }

    function JX(zz) {
      let tz = pt.fromClass(class {
        constructor(tz) {
          this.view = tz, this.placeholder = zz ? cz.set([cz.widget({
            widget: new mX(zz),
            side: 1
          }).range(0)]) : cz.none
        }
        get sW() {
          return this.view.state.doc.length ? cz.none : this.placeholder
        }
      }, {
        sW: zz => zz.sW
      });
      return "string" == typeof zz ? [tz, ZW.contentAttributes.of({
        "aria-placeholder": zz
      })] : tz
    }
    const IX = 2e3;

    function CX(zz, tz) {
      let sz = zz.posAtCoords({
          x: tz.clientX,
          y: tz.clientY
        }, !1),
        Wz = zz.state.doc.lineAt(sz),
        Xz = sz - Wz.from,
        Oz = Xz > IX ? -1 : Xz == Wz.length ? function(zz, tz) {
          let sz = zz.coordsAtPos(zz.viewport.from);
          return sz ? Math.round(Math.abs((sz.left - tz) / zz.defaultCharacterWidth)) : -1
        }(zz, tz.clientX) : (0, Fz.U)(Wz.text, zz.state.tabSize, sz - Wz.from);
      return {
        line: Wz.number,
        col: Oz,
        off: Xz
      }
    }

    function eX(zz, tz) {
      let sz = CX(zz, tz),
        Wz = zz.state.selection;
      return sz ? {
        update(zz) {
          if (zz.docChanged) {
            let tz = zz.changes.mapPos(zz.startState.doc.line(sz.line).from),
              Fz = zz.state.doc.lineAt(tz);
            sz = {
              line: Fz.number,
              col: sz.col,
              off: Math.min(sz.off, Fz.length)
            }, Wz = Wz.map(zz.changes)
          }
        },
        get(tz, Xz, Oz) {
          let oz = CX(zz, tz);
          if (!oz) return Wz;
          let vz = function(zz, tz, sz) {
            let Wz = Math.min(tz.line, sz.line),
              Xz = Math.max(tz.line, sz.line),
              Oz = [];
            if (tz.off > IX || sz.off > IX || tz.col < 0 || sz.col < 0) {
              let oz = Math.min(tz.off, sz.off),
                vz = Math.max(tz.off, sz.off);
              for (let tz = Wz; tz <= Xz; tz++) {
                let sz = zz.doc.line(tz);
                sz.length <= vz && Oz.push(Fz.l.range(sz.from + oz, sz.to + vz))
              }
            } else {
              let oz = Math.min(tz.col, sz.col),
                vz = Math.max(tz.col, sz.col);
              for (let tz = Wz; tz <= Xz; tz++) {
                let sz = zz.doc.line(tz),
                  Wz = (0, Fz._)(sz.text, oz, zz.tabSize, !0);
                if (Wz < 0) Oz.push(Fz.l.cursor(sz.to));
                else {
                  let tz = (0, Fz._)(sz.text, vz, zz.tabSize);
                  Oz.push(Fz.l.range(sz.from + Wz, sz.from + tz))
                }
              }
            }
            return Oz
          }(zz.state, sz, oz);
          return vz.length ? Oz ? Fz.l.create(vz.concat(Wz.du)) : Fz.l.create(vz) : Wz
        }
      } : null
    }

    function ZX(zz) {
      let tz = (null === zz || void 0 === zz ? void 0 : zz.eventFilter) || (zz => zz.altKey && 0 == zz.button);
      return ZW.mouseSelectionStyle.of(((zz, sz) => tz(sz) ? eX(zz, sz) : null))
    }
    const GX = {
        Alt: [18, zz => !!zz.altKey],
        Control: [17, zz => !!zz.ctrlKey],
        Shift: [16, zz => !!zz.shiftKey],
        Meta: [91, zz => !!zz.metaKey]
      },
      TX = {
        style: "cursor: crosshair"
      };

    function cX() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [tz, sz] = GX[zz.key || "Alt"],
        Fz = pt.fromClass(class {
          constructor(zz) {
            this.view = zz, this.isDown = !1
          }
          set(zz) {
            this.isDown != zz && (this.isDown = zz, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(zz) {
              this.set(zz.keyCode == tz || sz(zz))
            },
            keyup(zz) {
              zz.keyCode != tz && sz(zz) || this.set(!1)
            },
            mousemove(zz) {
              this.set(sz(zz))
            }
          }
        });
      return [Fz, ZW.contentAttributes.of((zz => {
        var tz;
        return (null === (tz = zz.plugin(Fz)) || void 0 === tz ? void 0 : tz.isDown) ? TX : null
      }))]
    }
    const jX = "-10000px";
    class AX {
      constructor(zz, tz, sz, Fz) {
        this.facet = tz, this.createTooltipView = sz, this.removeTooltipView = Fz, this.input = zz.state.facet(tz), this.tooltips = this.input.filter((zz => zz));
        let Wz = null;
        this.tooltipViews = this.tooltips.map((zz => Wz = sz(zz, Wz)))
      }
      update(zz, tz) {
        var sz;
        let Fz = zz.state.facet(this.facet),
          Wz = Fz.filter((zz => zz));
        if (Fz === this.input) {
          for (let tz of this.tooltipViews) tz.update && tz.update(zz);
          return !1
        }
        let Xz = [],
          Oz = tz ? [] : null;
        for (let oz = 0; oz < Wz.length; oz++) {
          let sz = Wz[oz],
            Fz = -1;
          if (sz) {
            for (let zz = 0; zz < this.tooltips.length; zz++) {
              let tz = this.tooltips[zz];
              tz && tz.create == sz.create && (Fz = zz)
            }
            if (Fz < 0) Xz[oz] = this.createTooltipView(sz, oz ? Xz[oz - 1] : null), Oz && (Oz[oz] = !!sz.above);
            else {
              let sz = Xz[oz] = this.tooltipViews[Fz];
              Oz && (Oz[oz] = tz[Fz]), sz.update && sz.update(zz)
            }
          }
        }
        for (let oz of this.tooltipViews) Xz.indexOf(oz) < 0 && (this.removeTooltipView(oz), null === (sz = oz.destroy) || void 0 === sz || sz.call(oz));
        return tz && (Oz.forEach(((zz, sz) => tz[sz] = zz)), tz.length = Oz.length), this.input = Fz, this.tooltips = Wz, this.tooltipViews = Xz, !0
      }
    }

    function yX(zz) {
      let tz = zz.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: tz.clientHeight,
        right: tz.clientWidth
      }
    }
    const MX = Fz.q.define({
        combine: zz => {
          var tz, sz, Fz;
          return {
            position: mz.ios ? "absolute" : (null === (tz = zz.find((zz => zz.position))) || void 0 === tz ? void 0 : tz.position) || "fixed",
            parent: (null === (sz = zz.find((zz => zz.parent))) || void 0 === sz ? void 0 : sz.parent) || null,
            tooltipSpace: (null === (Fz = zz.find((zz => zz.tooltipSpace))) || void 0 === Fz ? void 0 : Fz.tooltipSpace) || yX
          }
        }
      }),
      dX = new WeakMap,
      hX = pt.fromClass(class {
        constructor(zz) {
          this.view = zz, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let tz = zz.state.facet(MX);
          this.position = tz.position, this.parent = tz.parent, this.classes = zz.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new AX(zz, LX, ((zz, tz) => this.createTooltip(zz, tz)), (zz => {
            this.resizeObserver && this.resizeObserver.unobserve(zz.dom), zz.dom.remove()
          })), this.above = this.manager.tooltips.map((zz => !!zz.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((zz => {
            Date.now() > this.lastTransaction - 50 && zz.length > 0 && zz[zz.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), zz.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let zz of this.manager.tooltipViews) this.intersectionObserver.observe(zz.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(zz) {
          zz.transactions.length && (this.lastTransaction = Date.now());
          let tz = this.manager.update(zz, this.above);
          tz && this.observeIntersection();
          let sz = tz || zz.geometryChanged,
            Fz = zz.state.facet(MX);
          if (Fz.position != this.position && !this.madeAbsolute) {
            this.position = Fz.position;
            for (let zz of this.manager.tooltipViews) zz.dom.style.position = this.position;
            sz = !0
          }
          if (Fz.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Fz.parent, this.createContainer();
            for (let zz of this.manager.tooltipViews) this.container.appendChild(zz.dom);
            sz = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          sz && this.maybeMeasure()
        }
        createTooltip(zz, tz) {
          let sz = zz.create(this.view),
            Fz = tz ? tz.dom : null;
          if (sz.dom.classList.add("cm-tooltip"), zz.arrow && !sz.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let zz = document.createElement("div");
            zz.className = "cm-tooltip-arrow", sz.dom.appendChild(zz)
          }
          return sz.dom.style.position = this.position, sz.dom.style.top = jX, sz.dom.style.left = "0px", this.container.insertBefore(sz.dom, Fz), sz.mount && sz.mount(this.view), this.resizeObserver && this.resizeObserver.observe(sz.dom), sz
        }
        destroy() {
          var zz, tz, sz;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Fz of this.manager.tooltipViews) Fz.dom.remove(), null === (zz = Fz.destroy) || void 0 === zz || zz.call(Fz);
          this.parent && this.container.remove(), null === (tz = this.resizeObserver) || void 0 === tz || tz.disconnect(), null === (sz = this.intersectionObserver) || void 0 === sz || sz.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let zz = 1,
            tz = 1,
            sz = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: zz
            } = this.manager.tooltipViews[0];
            if (mz.safari) {
              let tz = zz.getBoundingClientRect();
              sz = Math.abs(tz.top + 1e4) > 1 || Math.abs(tz.left) > 1
            } else sz = !!zz.offsetParent && zz.offsetParent != this.container.ownerDocument.body
          }
          if (sz || "absolute" == this.position)
            if (this.parent) {
              let sz = this.parent.getBoundingClientRect();
              sz.width && sz.height && (zz = sz.width / this.parent.offsetWidth, tz = sz.height / this.parent.offsetHeight)
            } else({
              scaleX: zz,
              scaleY: tz
            } = this.view.viewState);
          let Fz = this.view.scrollDOM.getBoundingClientRect(),
            Wz = vs(this.view);
          return {
            visible: {
              left: Fz.left + Wz.left,
              top: Fz.top + Wz.top,
              right: Fz.right - Wz.right,
              bottom: Fz.bottom - Wz.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((zz, tz) => {
              let sz = this.manager.tooltipViews[tz];
              return sz.getCoords ? sz.getCoords(zz.pos) : this.view.coordsAtPos(zz.pos)
            })),
            size: this.manager.tooltipViews.map((zz => {
              let {
                dom: tz
              } = zz;
              return tz.getBoundingClientRect()
            })),
            space: this.view.state.facet(MX).tooltipSpace(this.view),
            scaleX: zz,
            scaleY: tz,
            makeAbsolute: sz
          }
        }
        writeMeasure(zz) {
          var tz;
          if (zz.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let zz of this.manager.tooltipViews) zz.dom.style.position = "absolute"
          }
          let {
            visible: sz,
            space: Fz,
            scaleX: Wz,
            scaleY: Xz
          } = zz, Oz = [];
          for (let oz = 0; oz < this.manager.tooltips.length; oz++) {
            let vz = this.manager.tooltips[oz],
              Uz = this.manager.tooltipViews[oz],
              {
                dom: Kz
              } = Uz,
              uz = zz.pos[oz],
              Nz = zz.size[oz];
            if (!uz || !1 !== vz.clip && (uz.bottom <= Math.max(sz.top, Fz.top) || uz.top >= Math.min(sz.bottom, Fz.bottom) || uz.right < Math.max(sz.left, Fz.left) - .1 || uz.left > Math.min(sz.right, Fz.right) + .1)) {
              Kz.style.top = jX;
              continue
            }
            let bz = vz.arrow ? Uz.dom.querySelector(".cm-tooltip-arrow") : null,
              wz = bz ? 7 : 0,
              Dz = Nz.right - Nz.left,
              gz = null !== (tz = dX.get(Uz)) && void 0 !== tz ? tz : Nz.bottom - Nz.top,
              Hz = Uz.offset || iX,
              Bz = this.view.textDirection == Ut.LTR,
              Pz = Nz.width > Fz.right - Fz.left ? Bz ? Fz.left : Fz.right - Nz.width : Bz ? Math.max(Fz.left, Math.min(uz.left - (bz ? 14 : 0) + Hz.x, Fz.right - Dz)) : Math.min(Math.max(Fz.left, uz.left - Dz + (bz ? 14 : 0) - Hz.x), Fz.right - Dz),
              rz = this.above[oz];
            !vz.strictSide && (rz ? uz.top - gz - wz - Hz.y < Fz.top : uz.bottom + gz + wz + Hz.y > Fz.bottom) && rz == Fz.bottom - uz.bottom > uz.top - Fz.top && (rz = this.above[oz] = !rz);
            let Yz = (rz ? uz.top - Fz.top : Fz.bottom - uz.bottom) - wz;
            if (Yz < gz && !1 !== Uz.resize) {
              if (Yz < this.view.defaultLineHeight) {
                Kz.style.top = jX;
                continue
              }
              dX.set(Uz, gz), Kz.style.height = (gz = Yz) / Xz + "px"
            } else Kz.style.height && (Kz.style.height = "");
            let xz = rz ? uz.top - gz - wz - Hz.y : uz.bottom + wz + Hz.y,
              mz = Pz + Dz;
            if (!0 !== Uz.overlap)
              for (let zz of Oz) zz.left < mz && zz.right > Pz && zz.top < xz + gz && zz.bottom > xz && (xz = rz ? zz.top - gz - 2 - wz : zz.bottom + wz + 2);
            if ("absolute" == this.position ? (Kz.style.top = (xz - zz.parent.top) / Xz + "px", QX(Kz, (Pz - zz.parent.left) / Wz)) : (Kz.style.top = xz / Xz + "px", QX(Kz, Pz / Wz)), bz) {
              let zz = uz.left + (Bz ? Hz.x : -Hz.x) - (Pz + 14 - 7);
              bz.style.left = zz / Wz + "px"
            }!0 !== Uz.overlap && Oz.push({
              left: Pz,
              top: xz,
              right: mz,
              bottom: xz + gz
            }), Kz.classList.toggle("cm-tooltip-above", rz), Kz.classList.toggle("cm-tooltip-below", !rz), Uz.positioned && Uz.positioned(zz.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let zz of this.manager.tooltipViews) zz.dom.style.top = jX
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function QX(zz, tz) {
      let sz = parseInt(zz.style.left, 10);
      (isNaN(sz) || Math.abs(tz - sz) > 1) && (zz.style.left = tz + "px")
    }
    const kX = ZW.baseTheme({
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
      iX = {
        x: 0,
        y: 0
      },
      LX = Fz.q.define({
        enables: [hX, kX]
      }),
      lX = Fz.q.define({
        combine: zz => zz.reduce(((zz, tz) => zz.concat(tz)), [])
      });
    class nX {
      static create(zz) {
        return new nX(zz)
      }
      constructor(zz) {
        this.view = zz, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new AX(zz, lX, ((zz, tz) => this.createHostedView(zz, tz)), (zz => zz.dom.remove()))
      }
      createHostedView(zz, tz) {
        let sz = zz.create(this.view);
        return sz.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(sz.dom, tz ? tz.dom.nextSibling : this.dom.firstChild), this.mounted && sz.mount && sz.mount(this.view), sz
      }
      mount(zz) {
        for (let tz of this.manager.tooltipViews) tz.mount && tz.mount(zz);
        this.mounted = !0
      }
      positioned(zz) {
        for (let tz of this.manager.tooltipViews) tz.positioned && tz.positioned(zz)
      }
      update(zz) {
        this.manager.update(zz)
      }
      destroy() {
        var zz;
        for (let tz of this.manager.tooltipViews) null === (zz = tz.destroy) || void 0 === zz || zz.call(tz)
      }
      passProp(zz) {
        let tz;
        for (let sz of this.manager.tooltipViews) {
          let Fz = sz[zz];
          if (void 0 !== Fz)
            if (void 0 === tz) tz = Fz;
            else if (tz !== Fz) return
        }
        return tz
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
    const aX = LX.compute([lX], (zz => {
      let tz = zz.facet(lX);
      return 0 === tz.length ? null : {
        pos: Math.min(...tz.map((zz => zz.pos))),
        end: Math.max(...tz.map((zz => {
          var tz;
          return null !== (tz = zz.end) && void 0 !== tz ? tz : zz.pos
        }))),
        create: nX.create,
        above: tz[0].above,
        arrow: tz.some((zz => zz.arrow))
      }
    }));
    class qX {
      constructor(zz, tz, sz, Fz, Wz) {
        this.view = zz, this.source = tz, this.field = sz, this.setHover = Fz, this.hoverTime = Wz, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: zz.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), zz.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), zz.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let zz = Date.now() - this.lastMove.time;
        zz < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - zz) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: zz,
          lastMove: tz
        } = this, sz = zz.docView.tile.nearest(tz.target);
        if (!sz) return;
        let Fz, Wz = 1;
        if (sz.isWidget()) Fz = sz.posAtStart;
        else {
          if (Fz = zz.posAtCoords(tz), null == Fz) return;
          let sz = zz.coordsAtPos(Fz);
          if (!sz || tz.y < sz.top || tz.y > sz.bottom || tz.x < sz.left - zz.defaultCharacterWidth || tz.x > sz.right + zz.defaultCharacterWidth) return;
          let Xz = zz.bidiSpans(zz.state.doc.lineAt(Fz)).find((zz => zz.from <= Fz && zz.to >= Fz)),
            Oz = Xz && Xz.dir == Ut.RTL ? -1 : 1;
          Wz = tz.x < sz.left ? -Oz : Oz
        }
        let Xz = this.source(zz, Fz, Wz);
        if (null === Xz || void 0 === Xz ? void 0 : Xz.then) {
          let tz = this.pending = {
            pos: Fz
          };
          Xz.then((sz => {
            this.pending == tz && (this.pending = null, !sz || Array.isArray(sz) && !sz.length || zz.dispatch({
              effects: this.setHover.of(Array.isArray(sz) ? sz : [sz])
            }))
          }), (tz => qt(zz.state, tz, "hover tooltip")))
        } else !Xz || Array.isArray(Xz) && !Xz.length || zz.dispatch({
          effects: this.setHover.of(Array.isArray(Xz) ? Xz : [Xz])
        })
      }
      get tooltip() {
        let zz = this.view.plugin(hX),
          tz = zz ? zz.manager.tooltips.findIndex((zz => zz.create == nX.create)) : -1;
        return tz > -1 ? zz.manager.tooltipViews[tz] : null
      }
      mousemove(zz) {
        var tz, sz;
        this.lastMove = {
          x: zz.clientX,
          y: zz.clientY,
          target: zz.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Fz,
          tooltip: Wz
        } = this;
        if (Fz.length && Wz && ! function(zz, tz) {
            let sz, {
              left: Fz,
              right: Wz,
              top: Xz,
              bottom: Oz
            } = zz.getBoundingClientRect();
            if (sz = zz.querySelector(".cm-tooltip-arrow")) {
              let zz = sz.getBoundingClientRect();
              Xz = Math.min(zz.top, Xz), Oz = Math.max(zz.bottom, Oz)
            }
            return tz.clientX >= Fz - SX && tz.clientX <= Wz + SX && tz.clientY >= Xz - SX && tz.clientY <= Oz + SX
          }(Wz.dom, zz) || this.pending) {
          let {
            pos: Wz
          } = Fz[0] || this.pending, Xz = null !== (sz = null === (tz = Fz[0]) || void 0 === tz ? void 0 : tz.end) && void 0 !== sz ? sz : Wz;
          (Wz == Xz ? this.view.posAtCoords(this.lastMove) == Wz : function(zz, tz, sz, Fz, Wz) {
            let Xz = zz.scrollDOM.getBoundingClientRect(),
              Oz = zz.documentTop + zz.documentPadding.top + zz.contentHeight;
            if (Xz.left > Fz || Xz.right < Fz || Xz.top > Wz || Math.min(Xz.bottom, Oz) < Wz) return !1;
            let oz = zz.posAtCoords({
              x: Fz,
              y: Wz
            }, !1);
            return oz >= tz && oz <= sz
          }(this.view, Wz, Xz, zz.clientX, zz.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(zz) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: tz
        } = this;
        if (tz.length) {
          let {
            tooltip: tz
          } = this;
          tz && tz.dom.contains(zz.relatedTarget) ? this.watchTooltipLeave(tz.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(zz) {
        let tz = sz => {
          zz.removeEventListener("mouseleave", tz), this.active.length && !this.view.dom.contains(sz.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        zz.addEventListener("mouseleave", tz)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const SX = 4;

    function VX(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        sz = Fz.F.define(),
        Wz = Fz.H.define({
          create: () => [],
          update(zz, Wz) {
            if (zz.length && (tz.hideOnChange && (Wz.docChanged || Wz.selection) ? zz = [] : tz.hideOn && (zz = zz.filter((zz => !tz.hideOn(Wz, zz)))), Wz.docChanged)) {
              let tz = [];
              for (let sz of zz) {
                let zz = Wz.changes.mapPos(sz.pos, -1, Fz.u.TrackDel);
                if (null != zz) {
                  let Fz = Object.assign(Object.create(null), sz);
                  Fz.pos = zz, null != Fz.end && (Fz.end = Wz.changes.mapPos(Fz.end)), tz.push(Fz)
                }
              }
              zz = tz
            }
            for (let tz of Wz.effects) tz.is(sz) && (zz = tz.value), tz.is(pX) && (zz = []);
            return zz
          },
          provide: zz => lX.from(zz)
        });
      return {
        active: Wz,
        extension: [Wz, pt.define((Fz => new qX(Fz, zz, Wz, sz, tz.hoverTime || 300))), aX]
      }
    }

    function RX(zz, tz) {
      let sz = zz.plugin(hX);
      if (!sz) return null;
      let Fz = sz.manager.tooltips.indexOf(tz);
      return Fz < 0 ? null : sz.manager.tooltipViews[Fz]
    }
    const pX = Fz.F.define();
    const fX = Fz.q.define({
      combine(zz) {
        let tz, sz;
        for (let Fz of zz) tz = tz || Fz.topContainer, sz = sz || Fz.bottomContainer;
        return {
          topContainer: tz,
          bottomContainer: sz
        }
      }
    });

    function EX(zz, tz) {
      let sz = zz.plugin(zO),
        Fz = sz ? sz.specs.indexOf(tz) : -1;
      return Fz > -1 ? sz.panels[Fz] : null
    }
    const zO = pt.fromClass(class {
      constructor(zz) {
        this.input = zz.state.facet(FO), this.specs = this.input.filter((zz => zz)), this.panels = this.specs.map((tz => tz(zz)));
        let tz = zz.state.facet(fX);
        this.top = new tO(zz, !0, tz.topContainer), this.bottom = new tO(zz, !1, tz.bottomContainer), this.top.sync(this.panels.filter((zz => zz.top))), this.bottom.sync(this.panels.filter((zz => !zz.top)));
        for (let sz of this.panels) sz.dom.classList.add("cm-panel"), sz.mount && sz.mount()
      }
      update(zz) {
        let tz = zz.state.facet(fX);
        this.top.container != tz.topContainer && (this.top.sync([]), this.top = new tO(zz.view, !0, tz.topContainer)), this.bottom.container != tz.bottomContainer && (this.bottom.sync([]), this.bottom = new tO(zz.view, !1, tz.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let sz = zz.state.facet(FO);
        if (sz != this.input) {
          let tz = sz.filter((zz => zz)),
            Fz = [],
            Wz = [],
            Xz = [],
            Oz = [];
          for (let sz of tz) {
            let tz, oz = this.specs.indexOf(sz);
            oz < 0 ? (tz = sz(zz.view), Oz.push(tz)) : (tz = this.panels[oz], tz.update && tz.update(zz)), Fz.push(tz), (tz.top ? Wz : Xz).push(tz)
          }
          this.specs = tz, this.panels = Fz, this.top.sync(Wz), this.bottom.sync(Xz);
          for (let zz of Oz) zz.dom.classList.add("cm-panel"), zz.mount && zz.mount()
        } else
          for (let Fz of this.panels) Fz.update && Fz.update(zz)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: zz => ZW.scrollMargins.of((tz => {
        let sz = tz.plugin(zz);
        return sz && {
          top: sz.top.scrollMargin(),
          bottom: sz.bottom.scrollMargin()
        }
      }))
    });
    class tO {
      constructor(zz, tz, sz) {
        this.view = zz, this.top = tz, this.container = sz, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(zz) {
        for (let tz of this.panels) tz.destroy && zz.indexOf(tz) < 0 && tz.destroy();
        this.panels = zz, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let zz = this.container || this.view.dom;
          zz.insertBefore(this.dom, this.top ? zz.firstChild : null)
        }
        let zz = this.dom.firstChild;
        for (let tz of this.panels)
          if (tz.dom.parentNode == this.dom) {
            for (; zz != tz.dom;) zz = sO(zz);
            zz = zz.nextSibling
          } else this.dom.insertBefore(tz.dom, zz);
        for (; zz;) zz = sO(zz)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let zz of this.classes.split(" ")) zz && this.container.classList.remove(zz);
          for (let zz of (this.classes = this.view.themeClasses).split(" ")) zz && this.container.classList.add(zz)
        }
      }
    }

    function sO(zz) {
      let tz = zz.nextSibling;
      return zz.remove(), tz
    }
    const FO = Fz.q.define({
      enables: zO
    });

    function WO(zz, tz) {
      let sz, Wz = new Promise((zz => sz = zz)),
        Xz = zz => function(zz, tz, sz) {
          let Fz = tz.content ? tz.content(zz, (() => Oz(null))) : null;
          if (!Fz) {
            if (Fz = (0, uz.b)("form"), tz.input) {
              let zz = (0, uz.b)("input", tz.input);
              /^(text|password|number|email|tel|url)$/.test(zz.type) && zz.classList.add("cm-textfield"), zz.name || (zz.name = "input"), Fz.appendChild((0, uz.b)("label", (tz.label || "") + ": ", zz))
            } else Fz.appendChild(document.createTextNode(tz.label || ""));
            Fz.appendChild(document.createTextNode(" ")), Fz.appendChild((0, uz.b)("button", {
              class: "cm-button",
              type: "submit"
            }, tz.submitLabel || "OK"))
          }
          let Wz = "FORM" == Fz.nodeName ? [Fz] : Fz.querySelectorAll("form");
          for (let oz = 0; oz < Wz.length; oz++) {
            let zz = Wz[oz];
            zz.addEventListener("keydown", (tz => {
              27 == tz.keyCode ? (tz.preventDefault(), Oz(null)) : 13 == tz.keyCode && (tz.preventDefault(), Oz(zz))
            })), zz.addEventListener("submit", (tz => {
              tz.preventDefault(), Oz(zz)
            }))
          }
          let Xz = (0, uz.b)("div", Fz, (0, uz.b)("button", {
            onclick: () => Oz(null),
            "aria-label": zz.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          tz.class && (Xz.className = tz.class);

          function Oz(tz) {
            Xz.contains(Xz.ownerDocument.activeElement) && zz.focus(), sz(tz)
          }
          return Xz.classList.add("cm-dialog"), {
            dom: Xz,
            top: tz.top,
            mount: () => {
              if (tz.focus) {
                let zz;
                zz = "string" == typeof tz.focus ? Fz.querySelector(tz.focus) : Fz.querySelector("input") || Fz.querySelector("button"), zz && "select" in zz ? zz.select() : zz && "focus" in zz && zz.focus()
              }
            }
          }
        }(zz, tz, sz);
      zz.state.field(XO, !1) ? zz.dispatch({
        effects: OO.of(Xz)
      }) : zz.dispatch({
        effects: Fz.F.appendConfig.of(XO.init((() => [Xz])))
      });
      let Oz = oO.of(Xz);
      return {
        close: Oz,
        result: Wz.then((tz => ((zz.win.queueMicrotask || (tz => zz.win.setTimeout(tz, 10)))((() => {
          zz.state.field(XO).indexOf(Xz) > -1 && zz.dispatch({
            effects: Oz
          })
        })), tz)))
      }
    }
    const XO = Fz.H.define({
        create: () => [],
        update(zz, tz) {
          for (let sz of tz.effects) sz.is(OO) ? zz = [sz.value].concat(zz) : sz.is(oO) && (zz = zz.filter((zz => zz != sz.value)));
          return zz
        },
        provide: zz => FO.computeN([zz], (tz => tz.field(zz)))
      }),
      OO = Fz.F.define(),
      oO = Fz.F.define();
    class vO extends Fz.E {
      compare(zz) {
        return this == zz || this.constructor == zz.constructor && this.eq(zz)
      }
      eq(zz) {
        return !1
      }
      destroy(zz) {}
    }
    vO.prototype.elementClass = "", vO.prototype.toDOM = void 0, vO.prototype.mapMode = Fz.u.TrackBefore, vO.prototype.startSide = vO.prototype.endSide = -1, vO.prototype.point = !0;
    const UO = Fz.q.define(),
      KO = Fz.q.define(),
      uO = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Fz.B.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      NO = Fz.q.define();

    function bO(zz) {
      return [DO(), NO.of({
        ...uO,
        ...zz
      })]
    }
    const wO = Fz.q.define({
      combine: zz => zz.some((zz => zz))
    });

    function DO(zz) {
      let tz = [gO];
      return zz && !1 === zz.fixed && tz.push(wO.of(!0)), tz
    }
    const gO = pt.fromClass(class {
      constructor(zz) {
        this.view = zz, this.domAfter = null, this.prevViewport = zz.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = zz.state.facet(NO).map((tz => new rO(zz, tz))), this.fixed = !zz.state.facet(wO);
        for (let tz of this.gutters) "after" == tz.config.side ? this.getDOMAfter().appendChild(tz.dom) : this.dom.appendChild(tz.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), zz.scrollDOM.insertBefore(this.dom, zz.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(zz) {
        if (this.updateGutters(zz)) {
          let tz = this.prevViewport,
            sz = zz.view.viewport,
            Fz = Math.min(tz.to, sz.to) - Math.max(tz.from, sz.from);
          this.syncGutters(Fz < .8 * (sz.to - sz.from))
        }
        if (zz.geometryChanged) {
          let zz = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = zz, this.domAfter && (this.domAfter.style.minHeight = zz)
        }
        this.view.state.facet(wO) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = zz.view.viewport
      }
      syncGutters(zz) {
        let tz = this.dom.nextSibling;
        zz && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let sz = Fz.B.iter(this.view.state.facet(UO), this.view.viewport.from),
          Wz = [],
          Xz = this.gutters.map((zz => new PO(zz, this.view.viewport, -this.view.documentPadding.top)));
        for (let Fz of this.view.viewportLineBlocks)
          if (Wz.length && (Wz = []), Array.isArray(Fz.type)) {
            let zz = !0;
            for (let tz of Fz.type)
              if (tz.type == Tz.Text && zz) {
                BO(sz, Wz, tz.from);
                for (let zz of Xz) zz.line(this.view, tz, Wz);
                zz = !1
              } else if (tz.widget)
              for (let zz of Xz) zz.widget(this.view, tz)
          } else if (Fz.type == Tz.Text) {
          BO(sz, Wz, Fz.from);
          for (let zz of Xz) zz.line(this.view, Fz, Wz)
        } else if (Fz.widget)
          for (let zz of Xz) zz.widget(this.view, Fz);
        for (let Fz of Xz) Fz.finish();
        zz && (this.view.scrollDOM.insertBefore(this.dom, tz), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(zz) {
        let tz = zz.startState.facet(NO),
          sz = zz.state.facet(NO),
          Wz = zz.docChanged || zz.heightChanged || zz.viewportChanged || !Fz.B.eq(zz.startState.facet(UO), zz.state.facet(UO), zz.view.viewport.from, zz.view.viewport.to);
        if (tz == sz)
          for (let Fz of this.gutters) Fz.update(zz) && (Wz = !0);
        else {
          Wz = !0;
          let Fz = [];
          for (let Wz of sz) {
            let sz = tz.indexOf(Wz);
            sz < 0 ? Fz.push(new rO(this.view, Wz)) : (this.gutters[sz].update(zz), Fz.push(this.gutters[sz]))
          }
          for (let zz of this.gutters) zz.dom.remove(), Fz.indexOf(zz) < 0 && zz.destroy();
          for (let zz of Fz) "after" == zz.config.side ? this.getDOMAfter().appendChild(zz.dom) : this.dom.appendChild(zz.dom);
          this.gutters = Fz
        }
        return Wz
      }
      destroy() {
        for (let zz of this.gutters) zz.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: zz => ZW.scrollMargins.of((tz => {
        let sz = tz.plugin(zz);
        if (!sz || 0 == sz.gutters.length || !sz.fixed) return null;
        let Fz = sz.dom.offsetWidth * tz.scaleX,
          Wz = sz.domAfter ? sz.domAfter.offsetWidth * tz.scaleX : 0;
        return tz.textDirection == Ut.LTR ? {
          left: Fz,
          right: Wz
        } : {
          right: Fz,
          left: Wz
        }
      }))
    });

    function HO(zz) {
      return Array.isArray(zz) ? zz : [zz]
    }

    function BO(zz, tz, sz) {
      for (; zz.value && zz.from <= sz;) zz.from == sz && tz.push(zz.value), zz.next()
    }
    class PO {
      constructor(zz, tz, sz) {
        this.gutter = zz, this.height = sz, this.i = 0, this.cursor = Fz.B.iter(zz.markers, tz.from)
      }
      addElement(zz, tz, sz) {
        let {
          gutter: Fz
        } = this, Wz = (tz.top - this.height) / zz.scaleY, Xz = tz.height / zz.scaleY;
        if (this.i == Fz.elements.length) {
          let tz = new YO(zz, Xz, Wz, sz);
          Fz.elements.push(tz), Fz.dom.appendChild(tz.dom)
        } else Fz.elements[this.i].update(zz, Xz, Wz, sz);
        this.height = tz.bottom, this.i++
      }
      line(zz, tz, sz) {
        let Fz = [];
        BO(this.cursor, Fz, tz.from), sz.length && (Fz = Fz.concat(sz));
        let Wz = this.gutter.config.lineMarker(zz, tz, Fz);
        Wz && Fz.unshift(Wz);
        let Xz = this.gutter;
        (0 != Fz.length || Xz.config.renderEmptyElements) && this.addElement(zz, tz, Fz)
      }
      widget(zz, tz) {
        let sz = this.gutter.config.widgetMarker(zz, tz.widget, tz),
          Fz = sz ? [sz] : null;
        for (let Wz of zz.state.facet(KO)) {
          let sz = Wz(zz, tz.widget, tz);
          sz && (Fz || (Fz = [])).push(sz)
        }
        Fz && this.addElement(zz, tz, Fz)
      }
      finish() {
        let zz = this.gutter;
        for (; zz.elements.length > this.i;) {
          let tz = zz.elements.pop();
          zz.dom.removeChild(tz.dom), tz.destroy()
        }
      }
    }
    class rO {
      constructor(zz, tz) {
        this.view = zz, this.config = tz, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let sz in tz.domEventHandlers) this.dom.addEventListener(sz, (Fz => {
          let Wz, Xz = Fz.target;
          if (Xz != this.dom && this.dom.contains(Xz)) {
            for (; Xz.parentNode != this.dom;) Xz = Xz.parentNode;
            let zz = Xz.getBoundingClientRect();
            Wz = (zz.top + zz.bottom) / 2
          } else Wz = Fz.clientY;
          let Oz = zz.lineBlockAtHeight(Wz - zz.documentTop);
          tz.domEventHandlers[sz](zz, Oz, Fz) && Fz.preventDefault()
        }));
        this.markers = HO(tz.markers(zz)), tz.initialSpacer && (this.spacer = new YO(zz, 0, 0, [tz.initialSpacer(zz)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(zz) {
        let tz = this.markers;
        if (this.markers = HO(this.config.markers(zz.view)), this.spacer && this.config.updateSpacer) {
          let tz = this.config.updateSpacer(this.spacer.markers[0], zz);
          tz != this.spacer.markers[0] && this.spacer.update(zz.view, 0, 0, [tz])
        }
        let sz = zz.view.viewport;
        return !Fz.B.eq(this.markers, tz, sz.from, sz.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(zz)
      }
      destroy() {
        for (let zz of this.elements) zz.destroy()
      }
    }
    class YO {
      constructor(zz, tz, sz, Fz) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(zz, tz, sz, Fz)
      }
      update(zz, tz, sz, Fz) {
        this.height != tz && (this.height = tz, this.dom.style.height = tz + "px"), this.above != sz && (this.dom.style.marginTop = (this.above = sz) ? sz + "px" : ""),
          function(zz, tz) {
            if (zz.length != tz.length) return !1;
            for (let sz = 0; sz < zz.length; sz++)
              if (!zz[sz].compare(tz[sz])) return !1;
            return !0
          }(this.markers, Fz) || this.setMarkers(zz, Fz)
      }
      setMarkers(zz, tz) {
        let sz = "cm-gutterElement",
          Fz = this.dom.firstChild;
        for (let Wz = 0, Xz = 0;;) {
          let Oz = Xz,
            oz = Wz < tz.length ? tz[Wz++] : null,
            vz = !1;
          if (oz) {
            let zz = oz.elementClass;
            zz && (sz += " " + zz);
            for (let tz = Xz; tz < this.markers.length; tz++)
              if (this.markers[tz].compare(oz)) {
                Oz = tz, vz = !0;
                break
              }
          } else Oz = this.markers.length;
          for (; Xz < Oz;) {
            let zz = this.markers[Xz++];
            if (zz.toDOM) {
              zz.destroy(Fz);
              let tz = Fz.nextSibling;
              Fz.remove(), Fz = tz
            }
          }
          if (!oz) break;
          oz.toDOM && (vz ? Fz = Fz.nextSibling : this.dom.insertBefore(oz.toDOM(zz), Fz)), vz && Xz++
        }
        this.dom.className = sz, this.markers = tz
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const xO = Fz.q.define(),
      mO = Fz.q.define(),
      JO = Fz.q.define({
        combine: zz => (0, Fz.Q)(zz, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(zz, tz) {
            let sz = Object.assign({}, zz);
            for (let Fz in tz) {
              let zz = sz[Fz],
                Wz = tz[Fz];
              sz[Fz] = zz ? (tz, sz, Fz) => zz(tz, sz, Fz) || Wz(tz, sz, Fz) : Wz
            }
            return sz
          }
        })
      });
    class IO extends vO {
      constructor(zz) {
        super(), this.number = zz
      }
      eq(zz) {
        return this.number == zz.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function CO(zz, tz) {
      return zz.state.facet(JO).formatNumber(tz, zz.state)
    }
    const eO = NO.compute([JO], (zz => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: zz => zz.state.facet(xO),
      lineMarker: (zz, tz, sz) => sz.some((zz => zz.toDOM)) ? null : new IO(CO(zz, zz.state.doc.lineAt(tz.from).number)),
      widgetMarker: (zz, tz, sz) => {
        for (let Fz of zz.state.facet(mO)) {
          let Wz = Fz(zz, tz, sz);
          if (Wz) return Wz
        }
        return null
      },
      lineMarkerChange: zz => zz.startState.facet(JO) != zz.state.facet(JO),
      initialSpacer: zz => new IO(CO(zz, GO(zz.state.doc.lines))),
      updateSpacer(zz, tz) {
        let sz = CO(tz.view, GO(tz.view.state.doc.lines));
        return sz == zz.number ? zz : new IO(sz)
      },
      domEventHandlers: zz.facet(JO).domEventHandlers,
      side: "before"
    })));

    function ZO() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [JO.of(zz), DO(), eO]
    }

    function GO(zz) {
      let tz = 9;
      for (; tz < zz;) tz = 10 * tz + 9;
      return tz
    }
    const TO = new class extends vO {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      cO = UO.compute(["selection"], (zz => {
        let tz = [],
          sz = -1;
        for (let Fz of zz.selection.du) {
          let Wz = zz.doc.lineAt(Fz.head).from;
          Wz > sz && (sz = Wz, tz.push(TO.range(Wz)))
        }
        return Fz.B.of(tz)
      }));

    function jO() {
      return cO
    }
  },
  40457: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz,
      d: () => bz,
      e: () => Oz,
      i: () => Kz,
      j: () => Uz,
      k: () => jz,
      m: () => yz,
      o: () => Az,
      r: () => wz
    });
    const Fz = 1024;
    let Wz = 0;
    class Xz {
      constructor(zz, tz) {
        this.from = zz, this.to = tz
      }
    }
    class Oz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Wz++, this.perNode = !!zz.perNode, this.deserialize = zz.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = zz.combine || null
      }
      add(zz) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof zz && (zz = Uz.match(zz)), tz => {
          let sz = zz(tz);
          return void 0 === sz ? null : [this, sz]
        }
      }
    }
    Oz.closedBy = new Oz({
      deserialize: zz => zz.split(" ")
    }), Oz.openedBy = new Oz({
      deserialize: zz => zz.split(" ")
    }), Oz.group = new Oz({
      deserialize: zz => zz.split(" ")
    }), Oz.isolate = new Oz({
      deserialize: zz => {
        if (zz && "rtl" != zz && "ltr" != zz && "auto" != zz) throw new RangeError("Invalid value for isolate: " + zz);
        return zz || "auto"
      }
    }), Oz.contextHash = new Oz({
      perNode: !0
    }), Oz.lookAhead = new Oz({
      perNode: !0
    }), Oz.mounted = new Oz({
      perNode: !0
    });
    class oz {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = zz, this.overlay = tz, this.parser = sz, this.bracketed = Fz
      }
      static get(zz) {
        return zz && zz.props && zz.props[Oz.mounted.id]
      }
    }
    const vz = Object.create(null);
    class Uz {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = zz, this.props = tz, this.id = sz, this.flags = Fz
      }
      static define(zz) {
        let tz = zz.props && zz.props.length ? Object.create(null) : vz,
          sz = (zz.top ? 1 : 0) | (zz.skipped ? 2 : 0) | (zz.error ? 4 : 0) | (null == zz.name ? 8 : 0),
          Fz = new Uz(zz.name || "", tz, zz.id, sz);
        if (zz.props)
          for (let Wz of zz.props)
            if (Array.isArray(Wz) || (Wz = Wz(Fz)), Wz) {
              if (Wz[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              tz[Wz[0].id] = Wz[1]
            } return Fz
      }
      prop(zz) {
        return this.props[zz.id]
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
      is(zz) {
        if ("string" == typeof zz) {
          if (this.name == zz) return !0;
          let tz = this.prop(Oz.group);
          return !!tz && tz.indexOf(zz) > -1
        }
        return this.id == zz
      }
      static match(zz) {
        let tz = Object.create(null);
        for (let sz in zz)
          for (let Fz of sz.split(" ")) tz[Fz] = zz[sz];
        return zz => {
          for (let sz = zz.prop(Oz.group), Fz = -1; Fz < (sz ? sz.length : 0); Fz++) {
            let Wz = tz[Fz < 0 ? zz.name : sz[Fz]];
            if (Wz) return Wz
          }
        }
      }
    }
    Uz.none = new Uz("", Object.create(null), 0, 8);
    class Kz {
      constructor(zz) {
        this.types = zz;
        for (let tz = 0; tz < zz.length; tz++)
          if (zz[tz].id != tz) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let zz = [];
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        for (let Wz of this.types) {
          let tz = null;
          for (let zz of sz) {
            let sz = zz(Wz);
            if (sz) {
              tz || (tz = Object.assign({}, Wz.props));
              let zz = sz[1],
                Fz = sz[0];
              Fz.combine && Fz.id in tz && (zz = Fz.combine(tz[Fz.id], zz)), tz[Fz.id] = zz
            }
          }
          zz.push(tz ? new Uz(Wz.name, tz, Wz.id, Wz.flags) : Wz)
        }
        return new Kz(zz)
      }
    }
    const uz = new WeakMap,
      Nz = new WeakMap;
    var bz;
    ! function(zz) {
      zz[zz.ExcludeBuffers = 1] = "ExcludeBuffers", zz[zz.IncludeAnonymous = 2] = "IncludeAnonymous", zz[zz.IgnoreMounts = 4] = "IgnoreMounts", zz[zz.IgnoreOverlays = 8] = "IgnoreOverlays", zz[zz.EnterBracketed = 16] = "EnterBracketed"
    }(bz || (bz = {}));
    class wz {
      constructor(zz, tz, sz, Fz, Wz) {
        if (this.type = zz, this.children = tz, this.positions = sz, this.length = Fz, this.props = null, Wz && Wz.length) {
          this.props = Object.create(null);
          for (let [zz, tz] of Wz) this.props["number" == typeof zz ? zz : zz.id] = tz
        }
      }
      toString() {
        let zz = oz.get(this);
        if (zz && !zz.overlay) return zz.tree.toString();
        let tz = "";
        for (let sz of this.children) {
          let zz = sz.toString();
          zz && (tz && (tz += ","), tz += zz)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (tz.length ? "(" + tz + ")" : "") : tz
      }
      cursor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new ez(this.topNode, zz)
      }
      cursorAt(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = uz.get(this) || this.topNode,
          Fz = new ez(sz);
        return Fz.moveTo(zz, tz), uz.set(this, Fz._tree), Fz
      }
      get topNode() {
        return new rz(this, 0, 0, null)
      }
      resolve(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = Bz(uz.get(this) || this.topNode, zz, tz, !1);
        return uz.set(this, sz), sz
      }
      resolveInner(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = Bz(Nz.get(this) || this.topNode, zz, tz, !0);
        return Nz.set(this, sz), sz
      }
      resolveStack(zz) {
        return function(zz, tz, sz) {
          let Fz = zz.resolveInner(tz, sz),
            Wz = null;
          for (let Xz = Fz instanceof rz ? Fz : Fz.context.parent; Xz; Xz = Xz.parent)
            if (Xz.index < 0) {
              let zz = Xz.parent;
              (Wz || (Wz = [Fz])).push(zz.resolve(tz, sz)), Xz = zz
            } else {
              let zz = oz.get(Xz.tree);
              if (zz && zz.overlay && zz.overlay[0].from <= tz && zz.overlay[zz.overlay.length - 1].to >= tz) {
                let Oz = new rz(zz.tree, zz.overlay[0].from + Xz.from, -1, Xz);
                (Wz || (Wz = [Fz])).push(Bz(Oz, tz, sz, !1))
              }
            } return Wz ? Iz(Wz) : Fz
        }(this, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(zz) {
        let {
          enter: tz,
          leave: sz,
          from: Fz = 0,
          to: Wz = this.length
        } = zz, Xz = zz.mode || 0, Oz = (Xz & bz.IncludeAnonymous) > 0;
        for (let oz = this.cursor(Xz | bz.IncludeAnonymous);;) {
          let zz = !1;
          if (oz.from <= Wz && oz.to >= Fz && (!Oz && oz.type.isAnonymous || !1 !== tz(oz))) {
            if (oz.firstChild()) continue;
            zz = !0
          }
          for (; zz && sz && (Oz || !oz.type.isAnonymous) && sz(oz), !oz.nextSibling();) {
            if (!oz.parent()) return;
            zz = !0
          }
        }
      }
      prop(zz) {
        return zz.perNode ? this.props ? this.props[zz.id] : void 0 : this.type.prop(zz)
      }
      get propValues() {
        let zz = [];
        if (this.props)
          for (let tz in this.props) zz.push([+tz, this.props[tz]]);
        return zz
      }
      balance() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : cz(Uz.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((zz, tz, sz) => new wz(this.type, zz, tz, sz, this.propValues)), zz.makeTree || ((zz, tz, sz) => new wz(Uz.none, zz, tz, sz)))
      }
      static build(zz) {
        return function(zz) {
          var tz;
          let {
            buffer: sz,
            nodeSet: Wz,
            maxBufferLength: Xz = Fz,
            reused: oz = [],
            minRepeatType: vz = Wz.types.length
          } = zz, Uz = Array.isArray(sz) ? new Dz(sz, sz.length) : sz, Kz = Wz.types, uz = 0, Nz = 0;

          function bz(zz, tz, sz, Fz, Oz, wz) {
            let {
              id: Dz,
              start: mz,
              end: Jz,
              size: Iz
            } = Uz, Cz = Nz, ez = uz;
            if (Iz < 0) {
              if (Uz.next(), -1 == Iz) {
                let tz = oz[Dz];
                return sz.push(tz), void Fz.push(mz - zz)
              }
              if (-3 == Iz) return void(uz = Dz);
              if (-4 == Iz) return void(Nz = Dz);
              throw new RangeError(`Unrecognized record size: ${Iz}`)
            }
            let Zz, Gz, Tz = Kz[Dz],
              jz = mz - zz;
            if (Jz - mz <= Xz && (Gz = Yz(Uz.pos - tz, Oz))) {
              let tz = new Uint16Array(Gz.size - Gz.skip),
                sz = Uz.pos - Gz.size,
                Fz = tz.length;
              for (; Uz.pos > sz;) Fz = xz(Gz.start, tz, Fz);
              Zz = new gz(tz, Jz - Gz.start, Wz), jz = Gz.start - zz
            } else {
              let zz = Uz.pos - Iz;
              Uz.next();
              let tz = [],
                sz = [],
                Fz = Dz >= vz ? Dz : -1,
                Wz = 0,
                Oz = Jz;
              for (; Uz.pos > zz;) Fz >= 0 && Uz.id == Fz && Uz.size >= 0 ? (Uz.end <= Oz - Xz && (Pz(tz, sz, mz, Wz, Uz.end, Oz, Fz, Cz, ez), Wz = tz.length, Oz = Uz.end), Uz.next()) : wz > 2500 ? Hz(mz, zz, tz, sz) : bz(mz, zz, tz, sz, Fz, wz + 1);
              if (Fz >= 0 && Wz > 0 && Wz < tz.length && Pz(tz, sz, mz, Wz, mz, Oz, Fz, Cz, ez), tz.reverse(), sz.reverse(), Fz > -1 && Wz > 0) {
                let zz = Bz(Tz, ez);
                Zz = cz(Tz, tz, sz, 0, tz.length, 0, Jz - mz, zz, zz)
              } else Zz = rz(Tz, tz, sz, Jz - mz, Cz - Jz, ez)
            }
            sz.push(Zz), Fz.push(jz)
          }

          function Hz(zz, tz, sz, Fz) {
            let Oz = [],
              oz = 0,
              vz = -1;
            for (; Uz.pos > tz;) {
              let {
                id: zz,
                start: tz,
                end: sz,
                size: Fz
              } = Uz;
              if (Fz > 4) Uz.next();
              else {
                if (vz > -1 && tz < vz) break;
                vz < 0 && (vz = sz - Xz), Oz.push(zz, tz, sz), oz++, Uz.next()
              }
            }
            if (oz) {
              let tz = new Uint16Array(4 * oz),
                Xz = Oz[Oz.length - 2];
              for (let zz = Oz.length - 3, sz = 0; zz >= 0; zz -= 3) tz[sz++] = Oz[zz], tz[sz++] = Oz[zz + 1] - Xz, tz[sz++] = Oz[zz + 2] - Xz, tz[sz++] = sz;
              sz.push(new gz(tz, Oz[2] - Xz, Wz)), Fz.push(Xz - zz)
            }
          }

          function Bz(zz, tz) {
            return (sz, Fz, Wz) => {
              let Xz, oz, vz = 0,
                Uz = sz.length - 1;
              if (Uz >= 0 && (Xz = sz[Uz]) instanceof wz) {
                if (!Uz && Xz.type == zz && Xz.length == Wz) return Xz;
                (oz = Xz.prop(Oz.lookAhead)) && (vz = Fz[Uz] + Xz.length + oz)
              }
              return rz(zz, sz, Fz, Wz, vz, tz)
            }
          }

          function Pz(zz, tz, sz, Fz, Xz, Oz, oz, vz, Uz) {
            let Kz = [],
              uz = [];
            for (; zz.length > Fz;) Kz.push(zz.pop()), uz.push(tz.pop() + sz - Xz);
            zz.push(rz(Wz.types[oz], Kz, uz, Oz - Xz, vz - Oz, Uz)), tz.push(Xz - sz)
          }

          function rz(zz, tz, sz, Fz, Wz, Xz, oz) {
            if (Xz) {
              let zz = [Oz.contextHash, Xz];
              oz = oz ? [zz].concat(oz) : [zz]
            }
            if (Wz > 25) {
              let zz = [Oz.lookAhead, Wz];
              oz = oz ? [zz].concat(oz) : [zz]
            }
            return new wz(zz, tz, sz, Fz, oz)
          }

          function Yz(zz, tz) {
            let sz = Uz.fork(),
              Fz = 0,
              Wz = 0,
              Oz = 0,
              oz = sz.end - Xz,
              Kz = {
                size: 0,
                start: 0,
                skip: 0
              };
            zz: for (let Xz = sz.pos - zz; sz.pos > Xz;) {
              let zz = sz.size;
              if (sz.id == tz && zz >= 0) {
                Kz.size = Fz, Kz.start = Wz, Kz.skip = Oz, Oz += 4, Fz += 4, sz.next();
                continue
              }
              let Uz = sz.pos - zz;
              if (zz < 0 || Uz < Xz || sz.start < oz) break;
              let uz = sz.id >= vz ? 4 : 0,
                Nz = sz.start;
              for (sz.next(); sz.pos > Uz;) {
                if (sz.size < 0) {
                  if (-3 != sz.size && -4 != sz.size) break zz;
                  uz += 4
                } else sz.id >= vz && (uz += 4);
                sz.next()
              }
              Wz = Nz, Fz += zz, Oz += uz
            }
            return (tz < 0 || Fz == zz) && (Kz.size = Fz, Kz.start = Wz, Kz.skip = Oz), Kz.size > 4 ? Kz : void 0
          }

          function xz(zz, tz, sz) {
            let {
              id: Fz,
              start: Wz,
              end: Xz,
              size: Oz
            } = Uz;
            if (Uz.next(), Oz >= 0 && Fz < vz) {
              let oz = sz;
              if (Oz > 4) {
                let Fz = Uz.pos - (Oz - 4);
                for (; Uz.pos > Fz;) sz = xz(zz, tz, sz)
              }
              tz[--sz] = oz, tz[--sz] = Xz - zz, tz[--sz] = Wz - zz, tz[--sz] = Fz
            } else - 3 == Oz ? uz = Fz : -4 == Oz && (Nz = Fz);
            return sz
          }
          let mz = [],
            Jz = [];
          for (; Uz.pos > 0;) bz(zz.start || 0, zz.bufferStart || 0, mz, Jz, -1, 0);
          let Iz = null !== (tz = zz.length) && void 0 !== tz ? tz : mz.length ? Jz[0] + mz[0].length : 0;
          return new wz(Kz[zz.topID], mz.reverse(), Jz.reverse(), Iz)
        }(zz)
      }
    }
    wz.empty = new wz(Uz.none, [], [], 0);
    class Dz {
      constructor(zz, tz) {
        this.buffer = zz, this.index = tz
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
        return new Dz(this.buffer, this.index)
      }
    }
    class gz {
      constructor(zz, tz, sz) {
        this.buffer = zz, this.length = tz, this.set = sz
      }
      get type() {
        return Uz.none
      }
      toString() {
        let zz = [];
        for (let tz = 0; tz < this.buffer.length;) zz.push(this.childString(tz)), tz = this.buffer[tz + 3];
        return zz.join(",")
      }
      childString(zz) {
        let tz = this.buffer[zz],
          sz = this.buffer[zz + 3],
          Fz = this.set.types[tz],
          Wz = Fz.name;
        if (/\W/.test(Wz) && !Fz.isError && (Wz = JSON.stringify(Wz)), sz == (zz += 4)) return Wz;
        let Xz = [];
        for (; zz < sz;) Xz.push(this.childString(zz)), zz = this.buffer[zz + 3];
        return Wz + "(" + Xz.join(",") + ")"
      }
      findChild(zz, tz, sz, Fz, Wz) {
        let {
          buffer: Xz
        } = this, Oz = -1;
        for (let oz = zz; oz != tz && !(Hz(Wz, Fz, Xz[oz + 1], Xz[oz + 2]) && (Oz = oz, sz > 0)); oz = Xz[oz + 3]);
        return Oz
      }
      slice(zz, tz, sz) {
        let Fz = this.buffer,
          Wz = new Uint16Array(tz - zz),
          Xz = 0;
        for (let Oz = zz, oz = 0; Oz < tz;) {
          Wz[oz++] = Fz[Oz++], Wz[oz++] = Fz[Oz++] - sz;
          let tz = Wz[oz++] = Fz[Oz++] - sz;
          Wz[oz++] = Fz[Oz++] - zz, Xz = Math.max(Xz, tz)
        }
        return new gz(Wz, Xz, this.set)
      }
    }

    function Hz(zz, tz, sz, Fz) {
      switch (zz) {
        case -2:
          return sz < tz;
        case -1:
          return Fz >= tz && sz < tz;
        case 0:
          return sz < tz && Fz > tz;
        case 1:
          return sz <= tz && Fz > tz;
        case 2:
          return Fz > tz;
        case 4:
          return !0
      }
    }

    function Bz(zz, tz, sz, Fz) {
      for (var Wz; zz.from == zz.to || (sz < 1 ? zz.from >= tz : zz.from > tz) || (sz > -1 ? zz.to <= tz : zz.to < tz);) {
        let tz = !Fz && zz instanceof rz && zz.index < 0 ? null : zz.parent;
        if (!tz) return zz;
        zz = tz
      }
      let Xz = Fz ? 0 : bz.IgnoreOverlays;
      if (Fz)
        for (let Oz = zz, oz = Oz.parent; oz; Oz = oz, oz = Oz.parent) Oz instanceof rz && Oz.index < 0 && (null === (Wz = oz.enter(tz, sz, Xz)) || void 0 === Wz ? void 0 : Wz.from) != Oz.from && (zz = oz);
      for (;;) {
        let Fz = zz.enter(tz, sz, Xz);
        if (!Fz) return zz;
        zz = Fz
      }
    }
    class Pz {
      cursor() {
        return new ez(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(zz) {
        let tz = Yz(this, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return tz.length ? tz[0] : null
      }
      getChildren(zz) {
        return Yz(this, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(zz) {
        return Bz(this, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(zz) {
        return Bz(this, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(zz) {
        return xz(this.parent, zz)
      }
      enterUnfinishedNodesBefore(zz) {
        let tz = this.childBefore(zz),
          sz = this;
        for (; tz;) {
          let zz = tz.lastChild;
          if (!zz || zz.to != tz.to) break;
          zz.type.isError && zz.from == zz.to ? (sz = tz, tz = zz.prevSibling) : tz = zz
        }
        return sz
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class rz extends Pz {
      constructor(zz, tz, sz, Fz) {
        super(), this._tree = zz, this.from = tz, this.index = sz, this._parent = Fz
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
      nextChild(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let Xz = this;;) {
          for (let {
              children: Oz,
              positions: vz
            } = Xz._tree, Uz = tz > 0 ? Oz.length : -1; zz != Uz; zz += tz) {
            let Uz, Kz = Oz[zz],
              uz = vz[zz] + Xz.from;
            if (Wz & bz.EnterBracketed && Kz instanceof wz && (Uz = oz.get(Kz)) && !Uz.overlay && Uz.bracketed && sz >= uz && sz <= uz + Kz.length || Hz(Fz, sz, uz, uz + Kz.length))
              if (Kz instanceof gz) {
                if (Wz & bz.ExcludeBuffers) continue;
                let Oz = Kz.findChild(0, Kz.buffer.length, tz, sz - uz, Fz);
                if (Oz > -1) return new Jz(new mz(Xz, Kz, zz, uz), null, Oz)
              } else if (Wz & bz.IncludeAnonymous || !Kz.type.isAnonymous || Zz(Kz)) {
              let Oz;
              if (!(Wz & bz.IgnoreMounts) && (Oz = oz.get(Kz)) && !Oz.overlay) return new rz(Oz.tree, uz, zz, Xz);
              let vz = new rz(Kz, uz, zz, Xz);
              return Wz & bz.IncludeAnonymous || !vz.type.isAnonymous ? vz : vz.nextChild(tz < 0 ? Kz.children.length - 1 : 0, tz, sz, Fz, Wz)
            }
          }
          if (Wz & bz.IncludeAnonymous || !Xz.type.isAnonymous) return null;
          if (zz = Xz.index >= 0 ? Xz.index + tz : tz < 0 ? -1 : Xz._parent._tree.children.length, Xz = Xz._parent, !Xz) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(zz) {
        return this.nextChild(0, 1, zz, 2)
      }
      childBefore(zz) {
        return this.nextChild(this._tree.children.length - 1, -1, zz, -2)
      }
      prop(zz) {
        return this._tree.prop(zz)
      }
      enter(zz, tz) {
        let sz, Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Fz & bz.IgnoreOverlays) && (sz = oz.get(this._tree)) && sz.overlay) {
          let Wz = zz - this.from,
            Xz = Fz & bz.EnterBracketed && sz.bracketed;
          for (let {
              from: zz,
              to: Fz
            }
            of sz.overlay)
            if ((tz > 0 || Xz ? zz <= Wz : zz < Wz) && (tz < 0 || Xz ? Fz >= Wz : Fz > Wz)) return new rz(sz.tree, sz.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, zz, tz, Fz)
      }
      nextSignificantParent() {
        let zz = this;
        for (; zz.type.isAnonymous && zz._parent;) zz = zz._parent;
        return zz
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

    function Yz(zz, tz, sz, Fz) {
      let Wz = zz.cursor(),
        Xz = [];
      if (!Wz.firstChild()) return Xz;
      if (null != sz)
        for (let Oz = !1; !Oz;)
          if (Oz = Wz.type.is(sz), !Wz.nextSibling()) return Xz;
      for (;;) {
        if (null != Fz && Wz.type.is(Fz)) return Xz;
        if (Wz.type.is(tz) && Xz.push(Wz.node), !Wz.nextSibling()) return null == Fz ? Xz : []
      }
    }

    function xz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tz.length - 1;
      for (let Fz = zz; sz >= 0; Fz = Fz.parent) {
        if (!Fz) return !1;
        if (!Fz.type.isAnonymous) {
          if (tz[sz] && tz[sz] != Fz.name) return !1;
          sz--
        }
      }
      return !0
    }
    class mz {
      constructor(zz, tz, sz, Fz) {
        this.parent = zz, this.buffer = tz, this.index = sz, this.start = Fz
      }
    }
    class Jz extends Pz {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(zz, tz, sz) {
        super(), this.context = zz, this._parent = tz, this.index = sz, this.type = zz.buffer.set.types[zz.buffer.buffer[sz]]
      }
      child(zz, tz, sz) {
        let {
          buffer: Fz
        } = this.context, Wz = Fz.findChild(this.index + 4, Fz.buffer[this.index + 3], zz, tz - this.context.start, sz);
        return Wz < 0 ? null : new Jz(this.context, this, Wz)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(zz) {
        return this.child(1, zz, 2)
      }
      childBefore(zz) {
        return this.child(-1, zz, -2)
      }
      prop(zz) {
        return this.type.prop(zz)
      }
      enter(zz, tz) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & bz.ExcludeBuffers) return null;
        let {
          buffer: sz
        } = this.context, Fz = sz.findChild(this.index + 4, sz.buffer[this.index + 3], tz > 0 ? 1 : -1, zz - this.context.start, tz);
        return Fz < 0 ? null : new Jz(this.context, this, Fz)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(zz) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + zz, zz, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: zz
        } = this.context, tz = zz.buffer[this.index + 3];
        return tz < (this._parent ? zz.buffer[this._parent.index + 3] : zz.buffer.length) ? new Jz(this.context, this._parent, tz) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: zz
        } = this.context, tz = this._parent ? this._parent.index + 4 : 0;
        return this.index == tz ? this.externalSibling(-1) : new Jz(this.context, this._parent, zz.findChild(tz, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let zz = [],
          tz = [],
          {
            buffer: sz
          } = this.context,
          Fz = this.index + 4,
          Wz = sz.buffer[this.index + 3];
        if (Wz > Fz) {
          let Xz = sz.buffer[this.index + 1];
          zz.push(sz.slice(Fz, Wz, Xz)), tz.push(0)
        }
        return new wz(this.type, zz, tz, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function Iz(zz) {
      if (!zz.length) return null;
      let tz = 0,
        sz = zz[0];
      for (let Xz = 1; Xz < zz.length; Xz++) {
        let Fz = zz[Xz];
        (Fz.from > sz.from || Fz.to < sz.to) && (sz = Fz, tz = Xz)
      }
      let Fz = sz instanceof rz && sz.index < 0 ? null : sz.parent,
        Wz = zz.slice();
      return Fz ? Wz[tz] = Fz : Wz.splice(tz, 1), new Cz(Wz, sz)
    }
    class Cz {
      constructor(zz, tz) {
        this.heads = zz, this.node = tz
      }
      get next() {
        return Iz(this.heads)
      }
    }
    class ez {
      get name() {
        return this.type.name
      }
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = tz & ~bz.EnterBracketed, zz instanceof rz) this.yieldNode(zz);
        else {
          this._tree = zz.context.parent, this.buffer = zz.context;
          for (let tz = zz._parent; tz; tz = tz._parent) this.stack.unshift(tz.index);
          this.bufferNode = zz, this.yieldBuf(zz.index)
        }
      }
      yieldNode(zz) {
        return !!zz && (this._tree = zz, this.type = zz.type, this.from = zz.from, this.to = zz.to, !0)
      }
      yieldBuf(zz, tz) {
        this.index = zz;
        let {
          start: sz,
          buffer: Fz
        } = this.buffer;
        return this.type = tz || Fz.set.types[Fz.buffer[zz]], this.from = sz + Fz.buffer[zz + 1], this.to = sz + Fz.buffer[zz + 2], !0
      }
      yield(zz) {
        return !!zz && (zz instanceof rz ? (this.buffer = null, this.yieldNode(zz)) : (this.buffer = zz.context, this.yieldBuf(zz.index, zz.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(zz, tz, sz) {
        if (!this.buffer) return this.yield(this._tree.nextChild(zz < 0 ? this._tree._tree.children.length - 1 : 0, zz, tz, sz, this.mode));
        let {
          buffer: Fz
        } = this.buffer, Wz = Fz.findChild(this.index + 4, Fz.buffer[this.index + 3], zz, tz - this.buffer.start, sz);
        return !(Wz < 0) && (this.stack.push(this.index), this.yieldBuf(Wz))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(zz) {
        return this.enterChild(1, zz, 2)
      }
      childBefore(zz) {
        return this.enterChild(-1, zz, -2)
      }
      enter(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(sz & bz.ExcludeBuffers) && this.enterChild(1, zz, tz) : this.yield(this._tree.enter(zz, tz, sz))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & bz.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let zz = this.mode & bz.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(zz)
      }
      sibling(zz) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + zz, zz, 0, 4, this.mode));
        let {
          buffer: tz
        } = this.buffer, sz = this.stack.length - 1;
        if (zz < 0) {
          let zz = sz < 0 ? 0 : this.stack[sz] + 4;
          if (this.index != zz) return this.yieldBuf(tz.findChild(zz, this.index, -1, 0, 4))
        } else {
          let zz = tz.buffer[this.index + 3];
          if (zz < (sz < 0 ? tz.buffer.length : tz.buffer[this.stack[sz] + 3])) return this.yieldBuf(zz)
        }
        return sz < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + zz, zz, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(zz) {
        let tz, sz, {
          buffer: Fz
        } = this;
        if (Fz) {
          if (zz > 0) {
            if (this.index < Fz.buffer.buffer.length) return !1
          } else
            for (let zz = 0; zz < this.index; zz++)
              if (Fz.buffer.buffer[zz + 3] < this.index) return !1;
          ({
            index: tz,
            parent: sz
          } = Fz)
        } else({
          index: tz,
          _parent: sz
        } = this._tree);
        for (; sz;
          ({
            index: tz,
            _parent: sz
          } = sz))
          if (tz > -1)
            for (let Fz = tz + zz, Wz = zz < 0 ? -1 : sz._tree.children.length; Fz != Wz; Fz += zz) {
              let zz = sz._tree.children[Fz];
              if (this.mode & bz.IncludeAnonymous || zz instanceof gz || !zz.type.isAnonymous || Zz(zz)) return !1
            }
        return !0
      }
      move(zz, tz) {
        if (tz && this.enterChild(zz, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(zz)) return !0;
          if (this.atLastNode(zz) || !this.parent()) return !1
        }
      }
      next() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, zz)
      }
      prev() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, zz)
      }
      moveTo(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (tz < 1 ? this.from >= zz : this.from > zz) || (tz > -1 ? this.to <= zz : this.to < zz)) && this.parent(););
        for (; this.enterChild(1, zz, tz););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let zz = this.bufferNode,
          tz = null,
          sz = 0;
        if (zz && zz.context == this.buffer) zz: for (let Fz = this.index, Wz = this.stack.length; Wz >= 0;) {
          for (let Xz = zz; Xz; Xz = Xz._parent)
            if (Xz.index == Fz) {
              if (Fz == this.index) return Xz;
              tz = Xz, sz = Wz + 1;
              break zz
            } Fz = this.stack[--Wz]
        }
        for (let Fz = sz; Fz < this.stack.length; Fz++) tz = new Jz(this.buffer, tz, this.stack[Fz]);
        return this.bufferNode = new Jz(this.buffer, tz, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(zz, tz) {
        for (let sz = 0;;) {
          let Fz = !1;
          if (this.type.isAnonymous || !1 !== zz(this)) {
            if (this.firstChild()) {
              sz++;
              continue
            }
            this.type.isAnonymous || (Fz = !0)
          }
          for (;;) {
            if (Fz && tz && tz(this), Fz = this.type.isAnonymous, !sz) return;
            if (this.nextSibling()) break;
            this.parent(), sz--, Fz = !0
          }
        }
      }
      matchContext(zz) {
        if (!this.buffer) return xz(this.node.parent, zz);
        let {
          buffer: tz
        } = this.buffer, {
          types: sz
        } = tz.set;
        for (let Fz = zz.length - 1, Wz = this.stack.length - 1; Fz >= 0; Wz--) {
          if (Wz < 0) return xz(this._tree, zz, Fz);
          let Xz = sz[tz.buffer[this.stack[Wz]]];
          if (!Xz.isAnonymous) {
            if (zz[Fz] && zz[Fz] != Xz.name) return !1;
            Fz--
          }
        }
        return !0
      }
    }

    function Zz(zz) {
      return zz.children.some((zz => zz instanceof gz || !zz.type.isAnonymous || Zz(zz)))
    }
    const Gz = new WeakMap;

    function Tz(zz, tz) {
      if (!zz.isAnonymous || tz instanceof gz || tz.type != zz) return 1;
      let sz = Gz.get(tz);
      if (null == sz) {
        sz = 1;
        for (let Fz of tz.children) {
          if (Fz.type != zz || !(Fz instanceof wz)) {
            sz = 1;
            break
          }
          sz += Tz(zz, Fz)
        }
        Gz.set(tz, sz)
      }
      return sz
    }

    function cz(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
      let Uz = 0;
      for (let bz = Fz; bz < Wz; bz++) Uz += Tz(zz, tz[bz]);
      let Kz = Math.ceil(1.5 * Uz / 8),
        uz = [],
        Nz = [];
      return function tz(sz, Fz, Wz, Oz, oz) {
        for (let Uz = Wz; Uz < Oz;) {
          let Wz = Uz,
            bz = Fz[Uz],
            wz = Tz(zz, sz[Uz]);
          for (Uz++; Uz < Oz; Uz++) {
            let tz = Tz(zz, sz[Uz]);
            if (wz + tz >= Kz) break;
            wz += tz
          }
          if (Uz == Wz + 1) {
            if (wz > Kz) {
              let zz = sz[Wz];
              tz(zz.children, zz.positions, 0, zz.children.length, Fz[Wz] + oz);
              continue
            }
            uz.push(sz[Wz])
          } else {
            let tz = Fz[Uz - 1] + sz[Uz - 1].length - bz;
            uz.push(cz(zz, sz, Fz, Wz, Uz, bz, tz, null, vz))
          }
          Nz.push(bz + oz - Xz)
        }
      }(tz, sz, Fz, Wz, 0), (oz || vz)(uz, Nz, Oz)
    }
    class jz {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(zz, tz, sz) {
        let Fz = this.map.get(zz);
        Fz || this.map.set(zz, Fz = new Map), Fz.set(tz, sz)
      }
      getBuffer(zz, tz) {
        let sz = this.map.get(zz);
        return sz && sz.get(tz)
      }
      set(zz, tz) {
        zz instanceof Jz ? this.setBuffer(zz.context.buffer, zz.index, tz) : zz instanceof rz && this.map.set(zz.tree, tz)
      }
      get(zz) {
        return zz instanceof Jz ? this.getBuffer(zz.context.buffer, zz.index) : zz instanceof rz ? this.map.get(zz.tree) : void 0
      }
      cursorSet(zz, tz) {
        zz.buffer ? this.setBuffer(zz.buffer.buffer, zz.index, tz) : this.map.set(zz.tree, tz)
      }
      cursorGet(zz) {
        return zz.buffer ? this.getBuffer(zz.buffer.buffer, zz.index) : this.map.get(zz.tree)
      }
    }
    class Az {
      constructor(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = zz, this.to = tz, this.tree = sz, this.offset = Fz, this.open = (Wz ? 1 : 0) | (Xz ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = [new Az(0, zz.length, zz, 0, !1, sz)];
        for (let Wz of tz) Wz.to > zz.length && Fz.push(Wz);
        return Fz
      }
      static applyChanges(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!tz.length) return zz;
        let Fz = [],
          Wz = 1,
          Xz = zz.length ? zz[0] : null;
        for (let Oz = 0, oz = 0, vz = 0;; Oz++) {
          let Uz = Oz < tz.length ? tz[Oz] : null,
            Kz = Uz ? Uz.fromA : 1e9;
          if (Kz - oz >= sz)
            for (; Xz && Xz.from < Kz;) {
              let tz = Xz;
              if (oz >= tz.from || Kz <= tz.to || vz) {
                let zz = Math.max(tz.from, oz) - vz,
                  sz = Math.min(tz.to, Kz) - vz;
                tz = zz >= sz ? null : new Az(zz, sz, tz.tree, tz.offset + vz, Oz > 0, !!Uz)
              }
              if (tz && Fz.push(tz), Xz.to > Kz) break;
              Xz = Wz < zz.length ? zz[Wz++] : null
            }
          if (!Uz) break;
          oz = Uz.toA, vz = Uz.toA - Uz.toB
        }
        return Fz
      }
    }
    class yz {
      startParse(zz, tz, sz) {
        return "string" == typeof zz && (zz = new Mz(zz)), sz = sz ? sz.length ? sz.map((zz => new Xz(zz.from, zz.to))) : [new Xz(0, 0)] : [new Xz(0, zz.length)], this.createParse(zz, tz || [], sz)
      }
      parse(zz, tz, sz) {
        let Fz = this.startParse(zz, tz, sz);
        for (;;) {
          let zz = Fz.advance();
          if (zz) return zz
        }
      }
    }
    class Mz {
      constructor(zz) {
        this.string = zz
      }
      get length() {
        return this.string.length
      }
      chunk(zz) {
        return this.string.slice(zz)
      }
      get lineChunks() {
        return !1
      }
      read(zz, tz) {
        return this.string.slice(zz, tz)
      }
    }
    new Oz({
      perNode: !0
    })
  },
  40463: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Nz,
      e: () => vz,
      f: () => uz,
      j: () => Gz
    });
    var Fz = sz(40457);
    let Wz = 0;
    class Xz {
      constructor(zz, tz, sz, Fz) {
        this.name = zz, this.set = tz, this.base = sz, this.modified = Fz, this.id = Wz++
      }
      toString() {
        let {
          name: zz
        } = this;
        for (let tz of this.modified) tz.name && (zz = `${tz.name}(${zz})`);
        return zz
      }
      static define(zz, tz) {
        let sz = "string" == typeof zz ? zz : "?";
        if (zz instanceof Xz && (tz = zz), null === tz || void 0 === tz ? void 0 : tz.base) throw new Error("Can not derive from a modified tag");
        let Fz = new Xz(sz, [], null, []);
        if (Fz.set.push(Fz), tz)
          for (let Wz of tz.set) Fz.set.push(Wz);
        return Fz
      }
      static defineModifier(zz) {
        let tz = new oz(zz);
        return zz => zz.modified.indexOf(tz) > -1 ? zz : oz.get(zz.base || zz, zz.modified.concat(tz).sort(((zz, tz) => zz.id - tz.id)))
      }
    }
    let Oz = 0;
    class oz {
      constructor(zz) {
        this.name = zz, this.instances = [], this.id = Oz++
      }
      static get(zz, tz) {
        if (!tz.length) return zz;
        let sz = tz[0].instances.find((sz => {
          return sz.base == zz && (Fz = tz, Wz = sz.modified, Fz.length == Wz.length && Fz.every(((zz, tz) => zz == Wz[tz])));
          var Fz, Wz
        }));
        if (sz) return sz;
        let Fz = [],
          Wz = new Xz(zz.name, Fz, zz, tz);
        for (let Xz of tz) Xz.instances.push(Wz);
        let Oz = function(zz) {
          let tz = [
            []
          ];
          for (let sz = 0; sz < zz.length; sz++)
            for (let Fz = 0, Wz = tz.length; Fz < Wz; Fz++) tz.push(tz[Fz].concat(zz[sz]));
          return tz.sort(((zz, tz) => tz.length - zz.length))
        }(tz);
        for (let Xz of zz.set)
          if (!Xz.modified.length)
            for (let zz of Oz) Fz.push(oz.get(Xz, zz));
        return Wz
      }
    }

    function vz(zz) {
      let tz = Object.create(null);
      for (let sz in zz) {
        let Fz = zz[sz];
        Array.isArray(Fz) || (Fz = [Fz]);
        for (let zz of sz.split(" "))
          if (zz) {
            let sz = [],
              Wz = 2,
              Xz = zz;
            for (let tz = 0;;) {
              if ("..." == Xz && tz > 0 && tz + 3 == zz.length) {
                Wz = 1;
                break
              }
              let Fz = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(Xz);
              if (!Fz) throw new RangeError("Invalid path: " + zz);
              if (sz.push("*" == Fz[0] ? "" : '"' == Fz[0][0] ? JSON.parse(Fz[0]) : Fz[0]), tz += Fz[0].length, tz == zz.length) break;
              let Oz = zz[tz++];
              if (tz == zz.length && "!" == Oz) {
                Wz = 0;
                break
              }
              if ("/" != Oz) throw new RangeError("Invalid path: " + zz);
              Xz = zz.slice(tz)
            }
            let Oz = sz.length - 1,
              oz = sz[Oz];
            if (!oz) throw new RangeError("Invalid path: " + zz);
            let vz = new Kz(Fz, Wz, Oz > 0 ? sz.slice(0, Oz) : null);
            tz[oz] = vz.sort(tz[oz])
          }
      }
      return Uz.add(tz)
    }
    const Uz = new Fz.e({
      combine(zz, tz) {
        let sz, Fz, Wz;
        for (; zz || tz;) {
          if (!zz || tz && zz.depth >= tz.depth ? (Wz = tz, tz = tz.next) : (Wz = zz, zz = zz.next), sz && sz.mode == Wz.mode && !Wz.context && !sz.context) continue;
          let Xz = new Kz(Wz.tags, Wz.mode, Wz.context);
          sz ? sz.next = Xz : Fz = Xz, sz = Xz
        }
        return Fz
      }
    });
    class Kz {
      constructor(zz, tz, sz, Fz) {
        this.tags = zz, this.mode = tz, this.context = sz, this.next = Fz
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(zz) {
        return !zz || zz.depth < this.depth ? (this.next = zz, this) : (zz.next = this.sort(zz.next), zz)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function uz(zz, tz) {
      let sz = Object.create(null);
      for (let Xz of zz)
        if (Array.isArray(Xz.tag))
          for (let zz of Xz.tag) sz[zz.id] = Xz.class;
        else sz[Xz.tag.id] = Xz.class;
      let {
        scope: Fz,
        all: Wz = null
      } = tz || {};
      return {
        style: zz => {
          let tz = Wz;
          for (let Fz of zz)
            for (let zz of Fz.set) {
              let Fz = sz[zz.id];
              if (Fz) {
                tz = tz ? tz + " " + Fz : Fz;
                break
              }
            }
          return tz
        },
        scope: Fz
      }
    }

    function Nz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zz.length,
        Xz = new bz(Fz, Array.isArray(tz) ? tz : [tz], sz);
      Xz.highlightRange(zz.cursor(), Fz, Wz, "", Xz.highlighters), Xz.flush(Wz)
    }
    Kz.empty = new Kz([], 2, null);
    class bz {
      constructor(zz, tz, sz) {
        this.at = zz, this.highlighters = tz, this.span = sz, this.class = ""
      }
      startSpan(zz, tz) {
        tz != this.class && (this.flush(zz), zz > this.at && (this.at = zz), this.class = tz)
      }
      flush(zz) {
        zz > this.at && this.class && this.span(this.at, zz, this.class)
      }
      highlightRange(zz, tz, sz, Wz, Xz) {
        let {
          type: Oz,
          from: oz,
          to: vz
        } = zz;
        if (oz >= sz || vz <= tz) return;
        Oz.isTop && (Xz = this.highlighters.filter((zz => !zz.scope || zz.scope(Oz))));
        let uz = Wz,
          Nz = function(zz) {
            let tz = zz.type.prop(Uz);
            for (; tz && tz.context && !zz.matchContext(tz.context);) tz = tz.next;
            return tz || null
          }(zz) || Kz.empty,
          bz = function(zz, tz) {
            let sz = null;
            for (let Fz of zz) {
              let zz = Fz.style(tz);
              zz && (sz = sz ? sz + " " + zz : zz)
            }
            return sz
          }(Xz, Nz.tags);
        if (bz && (uz && (uz += " "), uz += bz, 1 == Nz.mode && (Wz += (Wz ? " " : "") + bz)), this.startSpan(Math.max(tz, oz), uz), Nz.opaque) return;
        let wz = zz.tree && zz.tree.prop(Fz.e.mounted);
        if (wz && wz.overlay) {
          let Fz = zz.node.enter(wz.overlay[0].from + oz, 1),
            Oz = this.highlighters.filter((zz => !zz.scope || zz.scope(wz.tree.type))),
            Uz = zz.firstChild();
          for (let Kz = 0, Nz = oz;; Kz++) {
            let bz = Kz < wz.overlay.length ? wz.overlay[Kz] : null,
              Dz = bz ? bz.from + oz : vz,
              gz = Math.max(tz, Nz),
              Hz = Math.min(sz, Dz);
            if (gz < Hz && Uz)
              for (; zz.from < Hz && (this.highlightRange(zz, gz, Hz, Wz, Xz), this.startSpan(Math.min(Hz, zz.to), uz), !(zz.to >= Dz) && zz.nextSibling()););
            if (!bz || Dz > sz) break;
            Nz = bz.to + oz, Nz > tz && (this.highlightRange(Fz.cursor(), Math.max(tz, bz.from + oz), Math.min(sz, Nz), "", Oz), this.startSpan(Math.min(sz, Nz), uz))
          }
          Uz && zz.parent()
        } else if (zz.firstChild()) {
          wz && (Wz = "");
          do {
            if (!(zz.to <= tz)) {
              if (zz.from >= sz) break;
              this.highlightRange(zz, tz, sz, Wz, Xz), this.startSpan(Math.min(sz, zz.to), uz)
            }
          } while (zz.nextSibling());
          zz.parent()
        }
      }
    }
    const wz = Xz.define,
      Dz = wz(),
      gz = wz(),
      Hz = wz(gz),
      Bz = wz(gz),
      Pz = wz(),
      rz = wz(Pz),
      Yz = wz(Pz),
      xz = wz(),
      mz = wz(xz),
      Jz = wz(),
      Iz = wz(),
      Cz = wz(),
      ez = wz(Cz),
      Zz = wz(),
      Gz = {
        comment: Dz,
        lineComment: wz(Dz),
        blockComment: wz(Dz),
        docComment: wz(Dz),
        name: gz,
        variableName: wz(gz),
        typeName: Hz,
        tagName: wz(Hz),
        propertyName: Bz,
        attributeName: wz(Bz),
        className: wz(gz),
        labelName: wz(gz),
        namespace: wz(gz),
        macroName: wz(gz),
        literal: Pz,
        string: rz,
        docString: wz(rz),
        character: wz(rz),
        attributeValue: wz(rz),
        number: Yz,
        integer: wz(Yz),
        float: wz(Yz),
        bool: wz(Pz),
        regexp: wz(Pz),
        escape: wz(Pz),
        color: wz(Pz),
        url: wz(Pz),
        keyword: Jz,
        self: wz(Jz),
        null: wz(Jz),
        atom: wz(Jz),
        unit: wz(Jz),
        modifier: wz(Jz),
        operatorKeyword: wz(Jz),
        controlKeyword: wz(Jz),
        definitionKeyword: wz(Jz),
        moduleKeyword: wz(Jz),
        operator: Iz,
        derefOperator: wz(Iz),
        arithmeticOperator: wz(Iz),
        logicOperator: wz(Iz),
        bitwiseOperator: wz(Iz),
        compareOperator: wz(Iz),
        updateOperator: wz(Iz),
        definitionOperator: wz(Iz),
        typeOperator: wz(Iz),
        controlOperator: wz(Iz),
        punctuation: Cz,
        separator: wz(Cz),
        bracket: ez,
        angleBracket: wz(ez),
        squareBracket: wz(ez),
        paren: wz(ez),
        brace: wz(ez),
        content: xz,
        heading: mz,
        heading1: wz(mz),
        heading2: wz(mz),
        heading3: wz(mz),
        heading4: wz(mz),
        heading5: wz(mz),
        heading6: wz(mz),
        contentSeparator: wz(xz),
        list: wz(xz),
        quote: wz(xz),
        emphasis: wz(xz),
        strong: wz(xz),
        link: wz(xz),
        monospace: wz(xz),
        strikethrough: wz(xz),
        inserted: wz(),
        deleted: wz(),
        changed: wz(),
        invalid: wz(),
        meta: Zz,
        documentMeta: wz(Zz),
        annotation: wz(Zz),
        processingInstruction: wz(Zz),
        definition: Xz.defineModifier("definition"),
        constant: Xz.defineModifier("constant"),
        function: Xz.defineModifier("function"),
        standard: Xz.defineModifier("standard"),
        local: Xz.defineModifier("local"),
        special: Xz.defineModifier("special")
      };
    for (let Tz in Gz) {
      let zz = Gz[Tz];
      zz instanceof Xz && (zz.name = Tz)
    }
    uz([{
      tag: Gz.link,
      class: "tok-link"
    }, {
      tag: Gz.heading,
      class: "tok-heading"
    }, {
      tag: Gz.emphasis,
      class: "tok-emphasis"
    }, {
      tag: Gz.strong,
      class: "tok-strong"
    }, {
      tag: Gz.keyword,
      class: "tok-keyword"
    }, {
      tag: Gz.atom,
      class: "tok-atom"
    }, {
      tag: Gz.bool,
      class: "tok-bool"
    }, {
      tag: Gz.url,
      class: "tok-url"
    }, {
      tag: Gz.labelName,
      class: "tok-labelName"
    }, {
      tag: Gz.inserted,
      class: "tok-inserted"
    }, {
      tag: Gz.deleted,
      class: "tok-deleted"
    }, {
      tag: Gz.literal,
      class: "tok-literal"
    }, {
      tag: Gz.string,
      class: "tok-string"
    }, {
      tag: Gz.number,
      class: "tok-number"
    }, {
      tag: [Gz.regexp, Gz.escape, Gz.special(Gz.string)],
      class: "tok-string2"
    }, {
      tag: Gz.variableName,
      class: "tok-variableName"
    }, {
      tag: Gz.local(Gz.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: Gz.definition(Gz.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: Gz.special(Gz.variableName),
      class: "tok-variableName2"
    }, {
      tag: Gz.definition(Gz.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: Gz.typeName,
      class: "tok-typeName"
    }, {
      tag: Gz.namespace,
      class: "tok-namespace"
    }, {
      tag: Gz.className,
      class: "tok-className"
    }, {
      tag: Gz.macroName,
      class: "tok-macroName"
    }, {
      tag: Gz.propertyName,
      class: "tok-propertyName"
    }, {
      tag: Gz.operator,
      class: "tok-operator"
    }, {
      tag: Gz.comment,
      class: "tok-comment"
    }, {
      tag: Gz.meta,
      class: "tok-meta"
    }, {
      tag: Gz.invalid,
      class: "tok-invalid"
    }, {
      tag: Gz.punctuation,
      class: "tok-punctuation"
    }])
  },
  40477: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz.i,
      h: () => Oz.x,
      i: () => Oz.F,
      k: () => Oz.H,
      o: () => oz.p,
      s: () => Is,
      t: () => oz.Q,
      w: () => oz.lb
    });
    var Fz = sz(1347),
      Wz = sz(1343),
      Xz = sz(65),
      Oz = sz(40427),
      oz = sz(40434),
      vz = sz(40448),
      Uz = sz(40457);

    function Kz(zz, tz) {
      return sz => {
        let {
          state: Fz,
          dispatch: Wz
        } = sz;
        if (Fz.readOnly) return !1;
        let Xz = zz(tz, Fz);
        return !!Xz && (Wz(Fz.update(Xz)), !0)
      }
    }
    const uz = Kz(Hz, 0),
      Nz = Kz(gz, 0),
      bz = Kz(((zz, tz) => gz(zz, tz, function(zz) {
        let tz = [];
        for (let sz of zz.selection.du) {
          let Fz = zz.doc.lineAt(sz.from),
            Wz = sz.to <= Fz.to ? Fz : zz.doc.lineAt(sz.to);
          Wz.from > Fz.from && Wz.from == sz.to && (Wz = sz.to == Fz.to + 1 ? Fz : zz.doc.lineAt(sz.to - 1));
          let Xz = tz.length - 1;
          Xz >= 0 && tz[Xz].to > Fz.from ? tz[Xz].to = Wz.to : tz.push({
            from: Fz.from + /^\s*/.exec(Fz.text)[0].length,
            to: Wz.to
          })
        }
        return tz
      }(tz))), 0);

    function wz(zz, tz) {
      let sz = zz.languageDataAt("commentTokens", tz, 1);
      return sz.length ? sz[0] : {}
    }
    const Dz = 50;

    function gz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tz.selection.du,
        Fz = sz.map((zz => wz(tz, zz.from).block));
      if (!Fz.every((zz => zz))) return null;
      let Wz = sz.map(((zz, sz) => function(zz, tz, sz, Fz) {
        let Wz, Xz, {
            open: Oz,
            close: oz
          } = tz,
          vz = zz.sliceDoc(sz - Dz, sz),
          Uz = zz.sliceDoc(Fz, Fz + Dz),
          Kz = /\s*$/.exec(vz)[0].length,
          uz = /^\s*/.exec(Uz)[0].length,
          Nz = vz.length - Kz;
        if (vz.slice(Nz - Oz.length, Nz) == Oz && Uz.slice(uz, uz + oz.length) == oz) return {
          open: {
            pos: sz - Kz,
            margin: Kz && 1
          },
          close: {
            pos: Fz + uz,
            margin: uz && 1
          }
        };
        Fz - sz <= 2 * Dz ? Wz = Xz = zz.sliceDoc(sz, Fz) : (Wz = zz.sliceDoc(sz, sz + Dz), Xz = zz.sliceDoc(Fz - Dz, Fz));
        let bz = /^\s*/.exec(Wz)[0].length,
          wz = /\s*$/.exec(Xz)[0].length,
          gz = Xz.length - wz - oz.length;
        return Wz.slice(bz, bz + Oz.length) == Oz && Xz.slice(gz, gz + oz.length) == oz ? {
          open: {
            pos: sz + bz + Oz.length,
            margin: /\s/.test(Wz.charAt(bz + Oz.length)) ? 1 : 0
          },
          close: {
            pos: Fz - wz - oz.length,
            margin: /\s/.test(Xz.charAt(gz - 1)) ? 1 : 0
          }
        } : null
      }(tz, Fz[sz], zz.from, zz.to)));
      if (2 != zz && !Wz.every((zz => zz))) return {
        changes: tz.changes(sz.map(((zz, tz) => Wz[tz] ? [] : [{
          from: zz.from,
          insert: Fz[tz].open + " "
        }, {
          from: zz.to,
          insert: " " + Fz[tz].close
        }])))
      };
      if (1 != zz && Wz.some((zz => zz))) {
        let zz = [];
        for (let tz, sz = 0; sz < Wz.length; sz++)
          if (tz = Wz[sz]) {
            let Wz = Fz[sz],
              {
                open: Xz,
                close: Oz
              } = tz;
            zz.push({
              from: Xz.pos - Wz.open.length,
              to: Xz.pos + Xz.margin
            }, {
              from: Oz.pos - Oz.margin,
              to: Oz.pos + Wz.close.length
            })
          } return {
          changes: zz
        }
      }
      return null
    }

    function Hz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tz.selection.du,
        Fz = [],
        Wz = -1;
      zz: for (let {
          from: Xz,
          to: Oz
        }
        of sz) {
        let zz, sz = Fz.length,
          oz = 1e9;
        for (let vz = Xz; vz <= Oz;) {
          let sz = tz.doc.lineAt(vz);
          if (void 0 == zz && (zz = wz(tz, sz.from).line, !zz)) continue zz;
          if (sz.from > Wz && (Xz == Oz || Oz > sz.from)) {
            Wz = sz.from;
            let tz = /^\s*/.exec(sz.text)[0].length,
              Xz = tz == sz.length,
              Oz = sz.text.slice(tz, tz + zz.length) == zz ? tz : -1;
            tz < sz.text.length && tz < oz && (oz = tz), Fz.push({
              line: sz,
              comment: Oz,
              token: zz,
              indent: tz,
              empty: Xz,
              single: !1
            })
          }
          vz = sz.to + 1
        }
        if (oz < 1e9)
          for (let tz = sz; tz < Fz.length; tz++) Fz[tz].indent < Fz[tz].line.text.length && (Fz[tz].indent = oz);
        Fz.length == sz + 1 && (Fz[sz].single = !0)
      }
      if (2 != zz && Fz.some((zz => zz.comment < 0 && (!zz.empty || zz.single)))) {
        let zz = [];
        for (let {
            line: tz,
            token: Wz,
            indent: Xz,
            empty: Oz,
            single: oz
          }
          of Fz) !oz && Oz || zz.push({
          from: tz.from + Xz,
          insert: Wz + " "
        });
        let sz = tz.changes(zz);
        return {
          changes: sz,
          selection: tz.selection.map(sz, 1)
        }
      }
      if (1 != zz && Fz.some((zz => zz.comment >= 0))) {
        let zz = [];
        for (let {
            line: tz,
            comment: sz,
            token: Wz
          }
          of Fz)
          if (sz >= 0) {
            let Fz = tz.from + sz,
              Xz = Fz + Wz.length;
            " " == tz.text[Xz - tz.from] && Xz++, zz.push({
              from: Fz,
              to: Xz
            })
          } return {
          changes: zz
        }
      }
      return null
    }
    const Bz = Oz.e.define(),
      Pz = Oz.e.define(),
      rz = Oz.q.define(),
      Yz = Oz.q.define({
        combine: zz => (0, Oz.Q)(zz, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (zz, tz) => tz
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (zz, tz) => (sz, Fz) => zz(sz, Fz) || tz(sz, Fz)
        })
      }),
      xz = Oz.H.define({
        create: () => Qz.empty,
        update(zz, tz) {
          let sz = tz.state.facet(Yz),
            Fz = tz.annotation(Bz);
          if (Fz) {
            let Wz = Zz.fromTransaction(tz, Fz.selection),
              Xz = Fz.side,
              Oz = 0 == Xz ? zz.undone : zz.done;
            return Oz = Wz ? Gz(Oz, Oz.length, sz.minDepth, Wz) : Az(Oz, tz.startState.selection), new Qz(0 == Xz ? Fz.rest : Oz, 0 == Xz ? Oz : Fz.rest)
          }
          let Wz = tz.annotation(Pz);
          if ("full" != Wz && "before" != Wz || (zz = zz.isolate()), !1 === tz.annotation(Oz.K.addToHistory)) return tz.changes.empty ? zz : zz.addMapping(tz.changes.desc);
          let Xz = Zz.fromTransaction(tz),
            oz = tz.annotation(Oz.K.time),
            vz = tz.annotation(Oz.K.userEvent);
          return Xz ? zz = zz.addChanges(Xz, oz, vz, sz, tz) : tz.selection && (zz = zz.addSelection(tz.startState.selection, oz, vz, sz.newGroupDelay)), "full" != Wz && "after" != Wz || (zz = zz.isolate()), zz
        },
        toJSON: zz => ({
          done: zz.done.map((zz => zz.toJSON())),
          undone: zz.undone.map((zz => zz.toJSON()))
        }),
        fromJSON: zz => new Qz(zz.done.map(Zz.fromJSON), zz.undone.map(Zz.fromJSON))
      });

    function mz(zz, tz) {
      return function(sz) {
        let {
          state: Fz,
          dispatch: Wz
        } = sz;
        if (!tz && Fz.readOnly) return !1;
        let Xz = Fz.field(xz, !1);
        if (!Xz) return !1;
        let Oz = Xz.pop(zz, Fz, tz);
        return !!Oz && (Wz(Oz), !0)
      }
    }
    const Jz = mz(0, !1),
      Iz = mz(1, !1),
      Cz = mz(0, !0),
      ez = mz(1, !0);
    class Zz {
      constructor(zz, tz, sz, Fz, Wz) {
        this.changes = zz, this.effects = tz, this.mapped = sz, this.startSelection = Fz, this.selectionsAfter = Wz
      }
      setSelAfter(zz) {
        return new Zz(this.changes, this.effects, this.mapped, this.startSelection, zz)
      }
      toJSON() {
        var zz, tz, sz;
        return {
          changes: null === (zz = this.changes) || void 0 === zz ? void 0 : zz.toJSON(),
          mapped: null === (tz = this.mapped) || void 0 === tz ? void 0 : tz.toJSON(),
          startSelection: null === (sz = this.startSelection) || void 0 === sz ? void 0 : sz.toJSON(),
          selectionsAfter: this.selectionsAfter.map((zz => zz.toJSON()))
        }
      }
      static fromJSON(zz) {
        return new Zz(zz.changes && Oz.ChangeSet.fromJSON(zz.changes), [], zz.mapped && Oz.g.fromJSON(zz.mapped), zz.startSelection && Oz.l.fromJSON(zz.startSelection), zz.selectionsAfter.map(Oz.l.fromJSON))
      }
      static fromTransaction(zz, tz) {
        let sz = cz;
        for (let Fz of zz.startState.facet(rz)) {
          let tz = Fz(zz);
          tz.length && (sz = sz.concat(tz))
        }
        return !sz.length && zz.changes.empty ? null : new Zz(zz.changes.invert(zz.startState.doc), sz, void 0, tz || zz.startState.selection, cz)
      }
      static selection(zz) {
        return new Zz(void 0, cz, void 0, void 0, zz)
      }
    }

    function Gz(zz, tz, sz, Fz) {
      let Wz = tz + 1 > sz + 20 ? tz - sz - 1 : 0,
        Xz = zz.slice(Wz, tz);
      return Xz.push(Fz), Xz
    }

    function Tz(zz, tz) {
      return zz.length ? tz.length ? zz.concat(tz) : zz : tz
    }
    const cz = [],
      jz = 200;

    function Az(zz, tz) {
      if (zz.length) {
        let sz = zz[zz.length - 1],
          Fz = sz.selectionsAfter.slice(Math.max(0, sz.selectionsAfter.length - jz));
        return Fz.length && Fz[Fz.length - 1].eq(tz) ? zz : (Fz.push(tz), Gz(zz, zz.length - 1, 1e9, sz.setSelAfter(Fz)))
      }
      return [Zz.selection([tz])]
    }

    function yz(zz) {
      let tz = zz[zz.length - 1],
        sz = zz.slice();
      return sz[zz.length - 1] = tz.setSelAfter(tz.selectionsAfter.slice(0, tz.selectionsAfter.length - 1)), sz
    }

    function Mz(zz, tz) {
      if (!zz.length) return zz;
      let sz = zz.length,
        Fz = cz;
      for (; sz;) {
        let Wz = dz(zz[sz - 1], tz, Fz);
        if (Wz.changes && !Wz.changes.empty || Wz.effects.length) {
          let tz = zz.slice(0, sz);
          return tz[sz - 1] = Wz, tz
        }
        tz = Wz.mapped, sz--, Fz = Wz.selectionsAfter
      }
      return Fz.length ? [Zz.selection(Fz)] : cz
    }

    function dz(zz, tz, sz) {
      let Fz = Tz(zz.selectionsAfter.length ? zz.selectionsAfter.map((zz => zz.map(tz))) : cz, sz);
      if (!zz.changes) return Zz.selection(Fz);
      let Wz = zz.changes.map(tz),
        Xz = tz.mapDesc(zz.changes, !0),
        oz = zz.mapped ? zz.mapped.composeDesc(Xz) : Xz;
      return new Zz(Wz, Oz.F.mapEffects(zz.effects, tz), oz, zz.startSelection.map(Xz), Fz)
    }
    const hz = /^(input\.type|delete)($|\.)/;
    class Qz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = zz, this.undone = tz, this.prevTime = sz, this.prevUserEvent = Fz
      }
      isolate() {
        return this.prevTime ? new Qz(this.done, this.undone) : this
      }
      addChanges(zz, tz, sz, Fz, Wz) {
        let Xz = this.done,
          oz = Xz[Xz.length - 1];
        return Xz = oz && oz.changes && !oz.changes.empty && zz.changes && (!sz || hz.test(sz)) && (!oz.selectionsAfter.length && tz - this.prevTime < Fz.newGroupDelay && Fz.joinToEvent(Wz, function(zz, tz) {
          let sz = [],
            Fz = !1;
          return zz.iterChangedRanges(((zz, tz) => sz.push(zz, tz))), tz.iterChangedRanges(((zz, tz, Wz, Xz) => {
            for (let Oz = 0; Oz < sz.length;) {
              let zz = sz[Oz++],
                tz = sz[Oz++];
              Xz >= zz && Wz <= tz && (Fz = !0)
            }
          })), Fz
        }(oz.changes, zz.changes)) || "input.type.compose" == sz) ? Gz(Xz, Xz.length - 1, Fz.minDepth, new Zz(zz.changes.compose(oz.changes), Tz(Oz.F.mapEffects(zz.effects, oz.changes), oz.effects), oz.mapped, oz.startSelection, cz)) : Gz(Xz, Xz.length, Fz.minDepth, zz), new Qz(Xz, cz, tz, sz)
      }
      addSelection(zz, tz, sz, Fz) {
        let Wz = this.done.length ? this.done[this.done.length - 1].selectionsAfter : cz;
        return Wz.length > 0 && tz - this.prevTime < Fz && sz == this.prevUserEvent && sz && /^select($|\.)/.test(sz) && (Xz = Wz[Wz.length - 1], Oz = zz, Xz.du.length == Oz.du.length && 0 === Xz.du.filter(((zz, tz) => zz.empty != Oz.du[tz].empty)).length) ? this : new Qz(Az(this.done, zz), this.undone, tz, sz);
        var Xz, Oz
      }
      addMapping(zz) {
        return new Qz(Mz(this.done, zz), Mz(this.undone, zz), this.prevTime, this.prevUserEvent)
      }
      pop(zz, tz, sz) {
        let Fz = 0 == zz ? this.done : this.undone;
        if (0 == Fz.length) return null;
        let Wz = Fz[Fz.length - 1],
          Xz = Wz.selectionsAfter[0] || (Wz.startSelection ? Wz.startSelection.map(Wz.changes.invertedDesc, 1) : tz.selection);
        if (sz && Wz.selectionsAfter.length) return tz.update({
          selection: Wz.selectionsAfter[Wz.selectionsAfter.length - 1],
          annotations: Bz.of({
            side: zz,
            rest: yz(Fz),
            selection: Xz
          }),
          userEvent: 0 == zz ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Wz.changes) {
          let sz = 1 == Fz.length ? cz : Fz.slice(0, Fz.length - 1);
          return Wz.mapped && (sz = Mz(sz, Wz.mapped)), tz.update({
            changes: Wz.changes,
            selection: Wz.startSelection,
            effects: Wz.effects,
            annotations: Bz.of({
              side: zz,
              rest: sz,
              selection: Xz
            }),
            filter: !1,
            userEvent: 0 == zz ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    Qz.empty = new Qz(cz, cz);
    const kz = [{
      key: "Mod-z",
      run: Jz,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: Iz,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: Iz,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Cz,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: ez,
      preventDefault: !0
    }];

    function iz(zz, tz) {
      return Oz.l.create(zz.du.map(tz), zz.mainIndex)
    }

    function Lz(zz, tz) {
      return zz.update({
        selection: tz,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function lz(zz, tz) {
      let {
        state: sz,
        dispatch: Fz
      } = zz, Wz = iz(sz.selection, tz);
      return !Wz.eq(sz.selection, !0) && (Fz(Lz(sz, Wz)), !0)
    }

    function nz(zz, tz) {
      return Oz.l.cursor(tz ? zz.to : zz.from)
    }

    function az(zz, tz) {
      return lz(zz, (sz => sz.empty ? zz.moveByChar(sz, tz) : nz(sz, tz)))
    }

    function qz(zz) {
      return zz.textDirectionAt(zz.state.selection.main.head) == oz.f.LTR
    }
    const Sz = zz => az(zz, !qz(zz)),
      Vz = zz => az(zz, qz(zz));

    function Rz(zz, tz) {
      return lz(zz, (sz => sz.empty ? zz.moveByGroup(sz, tz) : nz(sz, tz)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function pz(zz, tz, sz) {
      if (tz.type.prop(sz)) return !0;
      let Fz = tz.to - tz.from;
      return Fz && (Fz > 2 || /[^\s,.;:]/.test(zz.sliceDoc(tz.from, tz.to))) || tz.firstChild
    }

    function fz(zz, tz, sz) {
      let Fz, Wz, Xz = (0, vz.mb)(zz).resolveInner(tz.head),
        oz = sz ? Uz.e.closedBy : Uz.e.openedBy;
      for (let Oz = tz.head;;) {
        let tz = sz ? Xz.childAfter(Oz) : Xz.childBefore(Oz);
        if (!tz) break;
        pz(zz, tz, oz) ? Xz = tz : Oz = sz ? tz.to : tz.from
      }
      return Wz = Xz.type.prop(oz) && (Fz = sz ? (0, vz.eb)(zz, Xz.from, 1) : (0, vz.eb)(zz, Xz.to, -1)) && Fz.matched ? sz ? Fz.end.to : Fz.end.from : sz ? Xz.to : Xz.from, Oz.l.cursor(Wz, sz ? -1 : 1)
    }

    function Ez(zz, tz) {
      return lz(zz, (sz => {
        if (!sz.empty) return nz(sz, tz);
        let Fz = zz.moveVertically(sz, tz);
        return Fz.head != sz.head ? Fz : zz.moveToLineBoundary(sz, tz)
      }))
    }
    const zt = zz => Ez(zz, !1),
      tt = zz => Ez(zz, !0);

    function st(zz) {
      let tz, sz = zz.scrollDOM.clientHeight < zz.scrollDOM.scrollHeight - 2,
        Fz = 0,
        Wz = 0;
      if (sz) {
        for (let tz of zz.state.facet(oz.i.scrollMargins)) {
          let sz = tz(zz);
          (null === sz || void 0 === sz ? void 0 : sz.top) && (Fz = Math.max(null === sz || void 0 === sz ? void 0 : sz.top, Fz)), (null === sz || void 0 === sz ? void 0 : sz.bottom) && (Wz = Math.max(null === sz || void 0 === sz ? void 0 : sz.bottom, Wz))
        }
        tz = zz.scrollDOM.clientHeight - Fz - Wz
      } else tz = (zz.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Fz,
        marginBottom: Wz,
        selfScroll: sz,
        height: Math.max(zz.defaultLineHeight, tz - 5)
      }
    }

    function Ft(zz, tz) {
      let sz, Fz = st(zz),
        {
          state: Wz
        } = zz,
        Xz = iz(Wz.selection, (sz => sz.empty ? zz.moveVertically(sz, tz, Fz.height) : nz(sz, tz)));
      if (Xz.eq(Wz.selection)) return !1;
      if (Fz.selfScroll) {
        let tz = zz.coordsAtPos(Wz.selection.main.head),
          Oz = zz.scrollDOM.getBoundingClientRect(),
          vz = Oz.top + Fz.marginTop,
          Uz = Oz.bottom - Fz.marginBottom;
        tz && tz.top > vz && tz.bottom < Uz && (sz = oz.i.scrollIntoView(Xz.main.head, {
          y: "start",
          yMargin: tz.top - vz
        }))
      }
      return zz.dispatch(Lz(Wz, Xz), {
        effects: sz
      }), !0
    }
    const Wt = zz => Ft(zz, !1),
      Xt = zz => Ft(zz, !0);

    function Ot(zz, tz, sz) {
      let Fz = zz.lineBlockAt(tz.head),
        Wz = zz.moveToLineBoundary(tz, sz);
      if (Wz.head == tz.head && Wz.head != (sz ? Fz.to : Fz.from) && (Wz = zz.moveToLineBoundary(tz, sz, !1)), !sz && Wz.head == Fz.from && Fz.length) {
        let sz = /^\s*/.exec(zz.state.sliceDoc(Fz.from, Math.min(Fz.from + 100, Fz.to)))[0].length;
        sz && tz.head != Fz.from + sz && (Wz = Oz.l.cursor(Fz.from + sz))
      }
      return Wz
    }

    function ot(zz, tz, sz) {
      let Fz = !1,
        Wz = iz(zz.selection, (tz => {
          let Wz = (0, vz.eb)(zz, tz.head, -1) || (0, vz.eb)(zz, tz.head, 1) || tz.head > 0 && (0, vz.eb)(zz, tz.head - 1, 1) || tz.head < zz.doc.length && (0, vz.eb)(zz, tz.head + 1, -1);
          if (!Wz || !Wz.end) return tz;
          Fz = !0;
          let Xz = Wz.start.from == tz.head ? Wz.end.to : Wz.end.from;
          return sz ? Oz.l.range(tz.anchor, Xz) : Oz.l.cursor(Xz)
        }));
      return !!Fz && (tz(Lz(zz, Wz)), !0)
    }

    function vt(zz, tz) {
      let sz = iz(zz.state.selection, (zz => {
        let sz = tz(zz);
        return Oz.l.range(zz.anchor, sz.head, sz.goalColumn, sz.bidiLevel || void 0, sz.assoc)
      }));
      return !sz.eq(zz.state.selection) && (zz.dispatch(Lz(zz.state, sz)), !0)
    }

    function Ut(zz, tz) {
      return vt(zz, (sz => zz.moveByChar(sz, tz)))
    }
    const Kt = zz => Ut(zz, !qz(zz)),
      ut = zz => Ut(zz, qz(zz));

    function Nt(zz, tz) {
      return vt(zz, (sz => zz.moveByGroup(sz, tz)))
    }

    function bt(zz, tz) {
      return vt(zz, (sz => zz.moveVertically(sz, tz)))
    }
    const wt = zz => bt(zz, !1),
      Dt = zz => bt(zz, !0);

    function gt(zz, tz) {
      return vt(zz, (sz => zz.moveVertically(sz, tz, st(zz).height)))
    }
    const Ht = zz => gt(zz, !1),
      Bt = zz => gt(zz, !0),
      Pt = zz => {
        let {
          state: tz,
          dispatch: sz
        } = zz;
        return sz(Lz(tz, {
          anchor: 0
        })), !0
      },
      rt = zz => {
        let {
          state: tz,
          dispatch: sz
        } = zz;
        return sz(Lz(tz, {
          anchor: tz.doc.length
        })), !0
      },
      Yt = zz => {
        let {
          state: tz,
          dispatch: sz
        } = zz;
        return sz(Lz(tz, {
          anchor: tz.selection.main.anchor,
          head: 0
        })), !0
      },
      xt = zz => {
        let {
          state: tz,
          dispatch: sz
        } = zz;
        return sz(Lz(tz, {
          anchor: tz.selection.main.anchor,
          head: tz.doc.length
        })), !0
      };

    function mt(zz, tz) {
      let {
        state: sz
      } = zz, Fz = sz.selection, Wz = sz.selection.du.slice();
      for (let Xz of sz.selection.du) {
        let Fz = sz.doc.lineAt(Xz.head);
        if (tz ? Fz.to < zz.state.doc.length : Fz.from > 0)
          for (let sz = Xz;;) {
            let Xz = zz.moveVertically(sz, tz);
            if (Xz.head < Fz.from || Xz.head > Fz.to) {
              Wz.some((zz => zz.head == Xz.head)) || Wz.push(Xz);
              break
            }
            if (Xz.head == sz.head) break;
            sz = Xz
          }
      }
      return Wz.length != Fz.du.length && (zz.dispatch(Lz(sz, Oz.l.create(Wz, Wz.length - 1))), !0)
    }

    function Jt(zz, tz) {
      if (zz.state.readOnly) return !1;
      let sz = "delete.selection",
        {
          state: Fz
        } = zz,
        Wz = Fz.changeByRange((Fz => {
          let {
            from: Wz,
            to: Xz
          } = Fz;
          if (Wz == Xz) {
            let Oz = tz(Fz);
            Oz < Wz ? (sz = "delete.backward", Oz = It(zz, Oz, !1)) : Oz > Wz && (sz = "delete.forward", Oz = It(zz, Oz, !0)), Wz = Math.min(Wz, Oz), Xz = Math.max(Xz, Oz)
          } else Wz = It(zz, Wz, !1), Xz = It(zz, Xz, !0);
          return Wz == Xz ? {
            range: Fz
          } : {
            changes: {
              from: Wz,
              to: Xz
            },
            range: Oz.l.cursor(Wz, Wz < Fz.head ? -1 : 1)
          }
        }));
      return !Wz.changes.empty && (zz.dispatch(Fz.update(Wz, {
        scrollIntoView: !0,
        userEvent: sz,
        effects: "delete.selection" == sz ? oz.i.announce.of(Fz.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function It(zz, tz, sz) {
      if (zz instanceof oz.i)
        for (let Fz of zz.state.facet(oz.i.atomicRanges).map((tz => tz(zz)))) Fz.between(tz, tz, ((zz, Fz) => {
          zz < tz && Fz > tz && (tz = sz ? Fz : zz)
        }));
      return tz
    }
    const Ct = (zz, tz, sz) => Jt(zz, (Fz => {
        let Wz, Xz, oz = Fz.from,
          {
            state: Uz
          } = zz,
          Kz = Uz.doc.lineAt(oz);
        if (sz && !tz && oz > Kz.from && oz < Kz.from + 200 && !/[^ \t]/.test(Wz = Kz.text.slice(0, oz - Kz.from))) {
          if ("\t" == Wz[Wz.length - 1]) return oz - 1;
          let zz = (0, Oz.U)(Wz, Uz.tabSize) % (0, vz.L)(Uz) || (0, vz.L)(Uz);
          for (let tz = 0; tz < zz && " " == Wz[Wz.length - 1 - tz]; tz++) oz--;
          Xz = oz
        } else Xz = (0, Oz.Y)(Kz.text, oz - Kz.from, tz, tz) + Kz.from, Xz == oz && Kz.number != (tz ? Uz.doc.lines : 1) ? Xz += tz ? 1 : -1 : !tz && /[\ufe00-\ufe0f]/.test(Kz.text.slice(Xz - Kz.from, oz - Kz.from)) && (Xz = (0, Oz.Y)(Kz.text, Xz - Kz.from, !1, !1) + Kz.from);
        return Xz
      })),
      et = zz => Ct(zz, !1, !0),
      Zt = zz => Ct(zz, !0, !1),
      Gt = (zz, tz) => Jt(zz, (sz => {
        let Fz = sz.head,
          {
            state: Wz
          } = zz,
          Xz = Wz.doc.lineAt(Fz),
          oz = Wz.charCategorizer(Fz);
        for (let zz = null;;) {
          if (Fz == (tz ? Xz.to : Xz.from)) {
            Fz == sz.head && Xz.number != (tz ? Wz.doc.lines : 1) && (Fz += tz ? 1 : -1);
            break
          }
          let vz = (0, Oz.Y)(Xz.text, Fz - Xz.from, tz) + Xz.from,
            Uz = Xz.text.slice(Math.min(Fz, vz) - Xz.from, Math.max(Fz, vz) - Xz.from),
            Kz = oz(Uz);
          if (null != zz && Kz != zz) break;
          " " == Uz && Fz == sz.head || (zz = Kz), Fz = vz
        }
        return Fz
      })),
      Tt = zz => Gt(zz, !1);

    function ct(zz) {
      let tz = [],
        sz = -1;
      for (let Fz of zz.selection.du) {
        let Wz = zz.doc.lineAt(Fz.from),
          Xz = zz.doc.lineAt(Fz.to);
        if (Fz.empty || Fz.to != Xz.from || (Xz = zz.doc.lineAt(Fz.to - 1)), sz >= Wz.number) {
          let zz = tz[tz.length - 1];
          zz.to = Xz.to, zz.du.push(Fz)
        } else tz.push({
          from: Wz.from,
          to: Xz.to,
          du: [Fz]
        });
        sz = Xz.number + 1
      }
      return tz
    }

    function jt(zz, tz, sz) {
      if (zz.readOnly) return !1;
      let Fz = [],
        Wz = [];
      for (let Xz of ct(zz)) {
        if (sz ? Xz.to == zz.doc.length : 0 == Xz.from) continue;
        let tz = zz.doc.lineAt(sz ? Xz.to + 1 : Xz.from - 1),
          oz = tz.length + 1;
        if (sz) {
          Fz.push({
            from: Xz.to,
            to: tz.to
          }, {
            from: Xz.from,
            insert: tz.text + zz.lineBreak
          });
          for (let tz of Xz.du) Wz.push(Oz.l.range(Math.min(zz.doc.length, tz.anchor + oz), Math.min(zz.doc.length, tz.head + oz)))
        } else {
          Fz.push({
            from: tz.from,
            to: Xz.from
          }, {
            from: Xz.to,
            insert: zz.lineBreak + tz.text
          });
          for (let zz of Xz.du) Wz.push(Oz.l.range(zz.anchor - oz, zz.head - oz))
        }
      }
      return !!Fz.length && (tz(zz.update({
        changes: Fz,
        scrollIntoView: !0,
        selection: Oz.l.create(Wz, zz.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function At(zz, tz, sz) {
      if (zz.readOnly) return !1;
      let Fz = [];
      for (let Xz of ct(zz)) sz ? Fz.push({
        from: Xz.from,
        insert: zz.doc.slice(Xz.from, Xz.to) + zz.lineBreak
      }) : Fz.push({
        from: Xz.to,
        insert: zz.lineBreak + zz.doc.slice(Xz.from, Xz.to)
      });
      let Wz = zz.changes(Fz);
      return tz(zz.update({
        changes: Wz,
        selection: zz.selection.map(Wz, sz ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const yt = Mt(!1);

    function Mt(zz) {
      return tz => {
        let {
          state: sz,
          dispatch: Fz
        } = tz;
        if (sz.readOnly) return !1;
        let Wz = sz.changeByRange((tz => {
          let {
            from: Fz,
            to: Wz
          } = tz, Xz = sz.doc.lineAt(Fz), oz = !zz && Fz == Wz && function(zz, tz) {
            if (/\(\)|\[\]|\{\}/.test(zz.sliceDoc(tz - 1, tz + 1))) return {
              from: tz,
              to: tz
            };
            let sz, Fz = (0, vz.mb)(zz).resolveInner(tz),
              Wz = Fz.childBefore(tz),
              Xz = Fz.childAfter(tz);
            return Wz && Xz && Wz.to <= tz && Xz.from >= tz && (sz = Wz.type.prop(Uz.e.closedBy)) && sz.indexOf(Xz.name) > -1 && zz.doc.lineAt(Wz.to).from == zz.doc.lineAt(Xz.from).from && !/\S/.test(zz.sliceDoc(Wz.to, Xz.from)) ? {
              from: Wz.to,
              to: Xz.from
            } : null
          }(sz, Fz);
          zz && (Fz = Wz = (Wz <= Xz.to ? Xz : sz.doc.lineAt(Wz)).to);
          let Kz = new vz.d(sz, {
              simulateBreak: Fz,
              simulateDoubleBreak: !!oz
            }),
            uz = (0, vz.O)(Kz, Fz);
          for (null == uz && (uz = (0, Oz.U)(/^\s*/.exec(sz.doc.lineAt(Fz).text)[0], sz.tabSize)); Wz < Xz.to && /\s/.test(Xz.text[Wz - Xz.from]);) Wz++;
          oz ? ({
            from: Fz,
            to: Wz
          } = oz) : Fz > Xz.from && Fz < Xz.from + 100 && !/\S/.test(Xz.text.slice(0, Fz)) && (Fz = Xz.from);
          let Nz = ["", (0, vz.Y)(sz, uz)];
          return oz && Nz.push((0, vz.Y)(sz, Kz.lineIndent(Xz.from, -1))), {
            changes: {
              from: Fz,
              to: Wz,
              insert: Oz.I.of(Nz)
            },
            range: Oz.l.cursor(Fz + 1 + Nz[1].length)
          }
        }));
        return Fz(sz.update(Wz, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function dt(zz, tz) {
      let sz = -1;
      return zz.changeByRange((Fz => {
        let Wz = [];
        for (let Oz = Fz.from; Oz <= Fz.to;) {
          let Xz = zz.doc.lineAt(Oz);
          Xz.number > sz && (Fz.empty || Fz.to > Xz.from) && (tz(Xz, Wz, Fz), sz = Xz.number), Oz = Xz.to + 1
        }
        let Xz = zz.changes(Wz);
        return {
          changes: Wz,
          range: Oz.l.range(Xz.mapPos(Fz.anchor, 1), Xz.mapPos(Fz.head, 1))
        }
      }))
    }
    const ht = zz => {
        let {
          state: tz,
          dispatch: sz
        } = zz;
        return !tz.readOnly && (sz(tz.update(dt(tz, ((zz, sz) => {
          sz.push({
            from: zz.from,
            insert: tz.facet(vz.ab)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      Qt = zz => {
        let {
          state: tz,
          dispatch: sz
        } = zz;
        return !tz.readOnly && (sz(tz.update(dt(tz, ((zz, sz) => {
          let Fz = /^\s*/.exec(zz.text)[0];
          if (!Fz) return;
          let Wz = (0, Oz.U)(Fz, tz.tabSize),
            Xz = 0,
            oz = (0, vz.Y)(tz, Math.max(0, Wz - (0, vz.L)(tz)));
          for (; Xz < Fz.length && Xz < oz.length && Fz.charCodeAt(Xz) == oz.charCodeAt(Xz);) Xz++;
          sz.push({
            from: zz.from + Xz,
            to: zz.from + Fz.length,
            insert: oz.slice(Xz)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      kt = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: zz => lz(zz, (tz => fz(zz.state, tz, !qz(zz)))),
        shift: zz => vt(zz, (tz => fz(zz.state, tz, !qz(zz))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: zz => lz(zz, (tz => fz(zz.state, tz, qz(zz)))),
        shift: zz => vt(zz, (tz => fz(zz.state, tz, qz(zz))))
      }, {
        key: "Alt-ArrowUp",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz;
          return jt(tz, sz, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz;
          return At(tz, sz, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz;
          return jt(tz, sz, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz;
          return At(tz, sz, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: zz => mt(zz, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: zz => mt(zz, !0)
      }, {
        key: "Escape",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz, Fz = tz.selection, Wz = null;
          return Fz.du.length > 1 ? Wz = Oz.l.create([Fz.main]) : Fz.main.empty || (Wz = Oz.l.create([Oz.l.cursor(Fz.main.head)])), !!Wz && (sz(Lz(tz, Wz)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Mt(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz, Fz = ct(tz).map((zz => {
            let {
              from: sz,
              to: Fz
            } = zz;
            return Oz.l.range(sz, Math.min(Fz + 1, tz.doc.length))
          }));
          return sz(tz.update({
            selection: Oz.l.create(Fz),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz, Fz = iz(tz.selection, (zz => {
            let sz = (0, vz.mb)(tz),
              Fz = sz.resolveStack(zz.from, 1);
            if (zz.empty) {
              let tz = sz.resolveStack(zz.from, -1);
              tz.node.from >= Fz.node.from && tz.node.to <= Fz.node.to && (Fz = tz)
            }
            for (let tz = Fz; tz; tz = tz.next) {
              let {
                node: sz
              } = tz;
              if ((sz.from < zz.from && sz.to >= zz.to || sz.to > zz.to && sz.from <= zz.from) && tz.next) return Oz.l.range(sz.to, sz.from)
            }
            return zz
          }));
          return !Fz.eq(tz.selection) && (sz(Lz(tz, Fz)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: Qt
      }, {
        key: "Mod-]",
        run: ht
      }, {
        key: "Mod-Alt-\\",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz;
          if (tz.readOnly) return !1;
          let Fz = Object.create(null),
            Wz = new vz.d(tz, {
              overrideIndentation: zz => {
                let tz = Fz[zz];
                return null == tz ? -1 : tz
              }
            }),
            Xz = dt(tz, ((zz, sz, Xz) => {
              let Oz = (0, vz.O)(Wz, zz.from);
              if (null == Oz) return;
              /\S/.test(zz.text) || (Oz = 0);
              let oz = /^\s*/.exec(zz.text)[0],
                Uz = (0, vz.Y)(tz, Oz);
              (oz != Uz || Xz.from < zz.from + oz.length) && (Fz[zz.from] = Oz, sz.push({
                from: zz.from,
                to: zz.from + oz.length,
                insert: Uz
              }))
            }));
          return Xz.changes.empty || sz(tz.update(Xz, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: zz => {
          if (zz.state.readOnly) return !1;
          let {
            state: tz
          } = zz, sz = tz.changes(ct(tz).map((zz => {
            let {
              from: sz,
              to: Fz
            } = zz;
            return sz > 0 ? sz-- : Fz < tz.doc.length && Fz++, {
              from: sz,
              to: Fz
            }
          }))), Fz = iz(tz.selection, (tz => {
            let sz;
            if (zz.lineWrapping) {
              let Fz = zz.lineBlockAt(tz.head),
                Wz = zz.coordsAtPos(tz.head, tz.assoc || 1);
              Wz && (sz = Fz.bottom + zz.documentTop - Wz.bottom + zz.defaultLineHeight / 2)
            }
            return zz.moveVertically(tz, !0, sz)
          })).map(sz);
          return zz.dispatch({
            changes: sz,
            selection: Fz,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz;
          return ot(tz, sz, !1)
        }
      }, {
        key: "Mod-/",
        run: zz => {
          let {
            state: tz
          } = zz, sz = tz.doc.lineAt(tz.selection.main.from), Fz = wz(zz.state, sz.from);
          return Fz.line ? uz(zz) : !!Fz.block && bz(zz)
        }
      }, {
        key: "Alt-A",
        run: Nz
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: zz => (zz.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: Sz,
        shift: Kt,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: zz => Rz(zz, !qz(zz)),
        shift: zz => Nt(zz, !qz(zz)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: zz => lz(zz, (tz => Ot(zz, tz, !qz(zz)))),
        shift: zz => vt(zz, (tz => Ot(zz, tz, !qz(zz)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: Vz,
        shift: ut,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: zz => Rz(zz, qz(zz)),
        shift: zz => Nt(zz, qz(zz)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: zz => lz(zz, (tz => Ot(zz, tz, qz(zz)))),
        shift: zz => vt(zz, (tz => Ot(zz, tz, qz(zz)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: zt,
        shift: wt,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Pt,
        shift: Yt
      }, {
        mac: "Ctrl-ArrowUp",
        run: Wt,
        shift: Ht
      }, {
        key: "ArrowDown",
        run: tt,
        shift: Dt,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: rt,
        shift: xt
      }, {
        mac: "Ctrl-ArrowDown",
        run: Xt,
        shift: Bt
      }, {
        key: "PageUp",
        run: Wt,
        shift: Ht
      }, {
        key: "PageDown",
        run: Xt,
        shift: Bt
      }, {
        key: "Home",
        run: zz => lz(zz, (tz => Ot(zz, tz, !1))),
        shift: zz => vt(zz, (tz => Ot(zz, tz, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Pt,
        shift: Yt
      }, {
        key: "End",
        run: zz => lz(zz, (tz => Ot(zz, tz, !0))),
        shift: zz => vt(zz, (tz => Ot(zz, tz, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: rt,
        shift: xt
      }, {
        key: "Enter",
        run: yt,
        shift: yt
      }, {
        key: "Mod-a",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz;
          return sz(tz.update({
            selection: {
              anchor: 0,
              head: tz.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: et,
        shift: et,
        preventDefault: !0
      }, {
        key: "Delete",
        run: Zt,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Tt,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: zz => Gt(zz, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: zz => Jt(zz, (tz => {
          let sz = zz.moveToLineBoundary(tz, !1).head;
          return tz.head > sz ? sz : Math.max(0, tz.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: zz => Jt(zz, (tz => {
          let sz = zz.moveToLineBoundary(tz, !0).head;
          return tz.head < sz ? sz : Math.min(zz.state.doc.length, tz.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: Sz,
        shift: Kt,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: Vz,
        shift: ut
      }, {
        key: "Ctrl-p",
        run: zt,
        shift: wt
      }, {
        key: "Ctrl-n",
        run: tt,
        shift: Dt
      }, {
        key: "Ctrl-a",
        run: zz => lz(zz, (tz => Oz.l.cursor(zz.lineBlockAt(tz.head).from, 1))),
        shift: zz => vt(zz, (tz => Oz.l.cursor(zz.lineBlockAt(tz.head).from)))
      }, {
        key: "Ctrl-e",
        run: zz => lz(zz, (tz => Oz.l.cursor(zz.lineBlockAt(tz.head).to, -1))),
        shift: zz => vt(zz, (tz => Oz.l.cursor(zz.lineBlockAt(tz.head).to)))
      }, {
        key: "Ctrl-d",
        run: Zt
      }, {
        key: "Ctrl-h",
        run: et
      }, {
        key: "Ctrl-k",
        run: zz => Jt(zz, (tz => {
          let sz = zz.lineBlockAt(tz.head).to;
          return tz.head < sz ? sz : Math.min(zz.state.doc.length, tz.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: Tt
      }, {
        key: "Ctrl-o",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz;
          if (tz.readOnly) return !1;
          let Fz = tz.changeByRange((zz => ({
            changes: {
              from: zz.from,
              to: zz.to,
              insert: Oz.I.of(["", ""])
            },
            range: Oz.l.cursor(zz.from)
          })));
          return sz(tz.update(Fz, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: zz => {
          let {
            state: tz,
            dispatch: sz
          } = zz;
          if (tz.readOnly) return !1;
          let Fz = tz.changeByRange((zz => {
            if (!zz.empty || 0 == zz.from || zz.from == tz.doc.length) return {
              range: zz
            };
            let sz = zz.from,
              Fz = tz.doc.lineAt(sz),
              Wz = sz == Fz.from ? sz - 1 : (0, Oz.Y)(Fz.text, sz - Fz.from, !1) + Fz.from,
              Xz = sz == Fz.to ? sz + 1 : (0, Oz.Y)(Fz.text, sz - Fz.from, !0) + Fz.from;
            return {
              changes: {
                from: Wz,
                to: Xz,
                insert: tz.doc.slice(sz, Xz).append(tz.doc.slice(Wz, sz))
              },
              range: Oz.l.cursor(Xz)
            }
          }));
          return !Fz.changes.empty && (sz(tz.update(Fz, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: Xt
      }].map((zz => ({
        mac: zz.key,
        run: zz.run,
        shift: zz.shift
      }))))),
      it = {
        key: "Tab",
        run: ht,
        shift: Qt
      };
    var Lt = sz(40486),
      lt = sz(40422),
      nt = sz(40493),
      qt = function(zz) {
        void 0 === zz && (zz = {});
        var {
          crosshairCursor: tz = !1
        } = zz, sz = [];
        !1 !== zz.closeBracketsKeymap && (sz = sz.concat(lt.d)), !1 !== zz.defaultKeymap && (sz = sz.concat(kt)), !1 !== zz.searchKeymap && (sz = sz.concat(Lt.e)), !1 !== zz.historyKeymap && (sz = sz.concat(kz)), !1 !== zz.foldKeymap && (sz = sz.concat(vz.B)), !1 !== zz.completionKeymap && (sz = sz.concat(lt.j)), !1 !== zz.lintKeymap && (sz = sz.concat(nt.d));
        var Fz = [];
        return !1 !== zz.lineNumbers && Fz.push((0, oz.V)()), !1 !== zz.highlightActiveLineGutter && Fz.push((0, oz.I)()), !1 !== zz.highlightSpecialChars && Fz.push((0, oz.M)()), !1 !== zz.history && Fz.push(function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [xz, Yz.of(zz), oz.i.domEventHandlers({
            beforeinput(zz, tz) {
              let sz = "historyUndo" == zz.inputType ? Jz : "historyRedo" == zz.inputType ? Iz : null;
              return !!sz && (zz.preventDefault(), sz(tz))
            }
          })]
        }()), !1 !== zz.foldGutter && Fz.push((0, vz.w)()), !1 !== zz.drawSelection && Fz.push((0, oz.x)()), !1 !== zz.dropCursor && Fz.push((0, oz.B)()), !1 !== zz.allowMultipleSelections && Fz.push(Oz.p.allowMultipleSelections.of(!0)), !1 !== zz.indentOnInput && Fz.push((0, vz.V)()), !1 !== zz.syntaxHighlighting && Fz.push((0, vz.ib)(vz.m, {
          fallback: !0
        })), !1 !== zz.bracketMatching && Fz.push((0, vz.k)()), !1 !== zz.closeBrackets && Fz.push((0, lt.e)()), !1 !== zz.autocompletion && Fz.push((0, lt.c)()), !1 !== zz.rectangularSelection && Fz.push((0, oz.db)()), !1 !== tz && Fz.push((0, oz.t)()), !1 !== zz.highlightActiveLine && Fz.push((0, oz.L)()), !1 !== zz.highlightSelectionMatches && Fz.push((0, Lt.d)()), zz.tabSize && "number" === typeof zz.tabSize && Fz.push(vz.ab.of(" ".repeat(zz.tabSize))), Fz.concat([oz.T.of(sz.flat())]).filter(Boolean)
      },
      St = sz(40463);
    const Vt = "#e5c07b",
      Rt = "#e06c75",
      pt = "#56b6c2",
      ft = "#ffffff",
      Et = "#abb2bf",
      zs = "#7d8799",
      ts = "#61afef",
      ss = "#98c379",
      Fs = "#d19a66",
      Ws = "#c678dd",
      Xs = "#21252b",
      Os = "#2c313a",
      os = "#282c34",
      vs = "#353a42",
      Us = "#3E4451",
      Ks = "#528bff",
      us = oz.i.theme({
        "&": {
          color: Et,
          backgroundColor: os
        },
        ".cm-content": {
          caretColor: Ks
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Ks
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Us
        },
        ".cm-panels": {
          backgroundColor: Xs,
          color: Et
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
          backgroundColor: os,
          color: zs,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Os
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: vs
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: vs,
          borderBottomColor: vs
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Os,
            color: Et
          }
        }
      }, {
        dark: !0
      }),
      Ns = vz.c.define([{
        tag: St.j.keyword,
        color: Ws
      }, {
        tag: [St.j.name, St.j.deleted, St.j.character, St.j.propertyName, St.j.macroName],
        color: Rt
      }, {
        tag: [St.j.function(St.j.variableName), St.j.labelName],
        color: ts
      }, {
        tag: [St.j.color, St.j.constant(St.j.name), St.j.standard(St.j.name)],
        color: Fs
      }, {
        tag: [St.j.definition(St.j.name), St.j.separator],
        color: Et
      }, {
        tag: [St.j.typeName, St.j.className, St.j.number, St.j.changed, St.j.annotation, St.j.modifier, St.j.self, St.j.namespace],
        color: Vt
      }, {
        tag: [St.j.operator, St.j.operatorKeyword, St.j.url, St.j.escape, St.j.regexp, St.j.link, St.j.special(St.j.string)],
        color: pt
      }, {
        tag: [St.j.meta, St.j.comment],
        color: zs
      }, {
        tag: St.j.strong,
        fontWeight: "bold"
      }, {
        tag: St.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: St.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: St.j.link,
        color: zs,
        textDecoration: "underline"
      }, {
        tag: St.j.heading,
        fontWeight: "bold",
        color: Rt
      }, {
        tag: [St.j.atom, St.j.bool, St.j.special(St.j.variableName)],
        color: Fs
      }, {
        tag: [St.j.processingInstruction, St.j.string, St.j.inserted],
        color: ss
      }, {
        tag: St.j.invalid,
        color: ft
      }]),
      bs = [us, (0, vz.ib)(Ns)];
    var ws = oz.i.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Ds {
      constructor(zz, tz) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = tz, this.timeoutMS = tz, this.callbacks.push(zz)
      }
      wN() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var zz = this.callbacks.slice();
          this.callbacks.length = 0, zz.forEach((zz => {
            try {
              zz()
            } catch (tz) {
              console.error("TimeoutLatch callback error:", tz)
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
    class gs {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(zz) {
        this.latches.add(zz), this.start()
      }
      remove(zz) {
        this.latches.delete(zz), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((zz => {
            zz.wN(), zz.isDone && this.remove(zz)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Hs = null,
      Bs = Oz.e.define(),
      Ps = [];

    function rs(zz) {
      var {
        value: tz,
        selection: sz,
        onChange: Fz,
        onStatistics: Wz,
        onCreateEditor: vz,
        onUpdate: Uz,
        extensions: Kz = Ps,
        autoFocus: uz,
        theme: Nz = "light",
        height: bz = null,
        minHeight: wz = null,
        maxHeight: Dz = null,
        width: gz = null,
        minWidth: Hz = null,
        maxWidth: Bz = null,
        placeholder: Pz = "",
        editable: rz = !0,
        readOnly: Yz = !1,
        indentWithTab: xz = !0,
        basicSetup: mz = !0,
        root: Jz,
        initialState: Iz
      } = zz, [Cz, ez] = (0, Xz.useState)(), [Zz, Gz] = (0, Xz.useState)(), [Tz, cz] = (0, Xz.useState)(), jz = (0, Xz.useState)((() => ({
        current: null
      })))[0], Az = (0, Xz.useState)((() => ({
        current: null
      })))[0], yz = oz.i.theme({
        "&": {
          height: bz,
          minHeight: wz,
          maxHeight: Dz,
          width: gz,
          minWidth: Hz,
          maxWidth: Bz
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Mz = oz.i.updateListener.of((zz => {
        if (zz.docChanged && "function" === typeof Fz && !zz.transactions.some((zz => zz.annotation(Bs)))) {
          jz.current ? jz.current.reset() : (jz.current = new Ds((() => {
            if (Az.current) {
              var zz = Az.current;
              Az.current = null, zz()
            }
            jz.current = null
          }), 200), ("undefined" === typeof window ? new gs : (Hs || (Hs = new gs), Hs)).add(jz.current));
          var tz = zz.state.doc.toString();
          Fz(tz, zz)
        }
        Wz && Wz((zz => ({
          line: zz.state.doc.lineAt(zz.state.selection.main.from),
          lineCount: zz.state.doc.lines,
          lineBreak: zz.state.lineBreak,
          length: zz.state.doc.length,
          readOnly: zz.state.readOnly,
          tabSize: zz.state.tabSize,
          selection: zz.state.selection,
          selectionAsSingle: zz.state.selection.asSingle().main,
          du: zz.state.selection.du,
          selectionCode: zz.state.sliceDoc(zz.state.selection.main.from, zz.state.selection.main.to),
          selections: zz.state.selection.du.map((tz => zz.state.sliceDoc(tz.from, tz.to))),
          selectedText: zz.state.selection.du.some((zz => !zz.empty))
        }))(zz))
      })), dz = function(zz) {
        void 0 === zz && (zz = {});
        var {
          indentWithTab: tz = !0,
          editable: sz = !0,
          readOnly: Fz = !1,
          theme: Wz = "light",
          placeholder: Xz = "",
          basicSetup: vz = !0
        } = zz, Uz = [];
        switch (tz && Uz.unshift(oz.T.of([it])), vz && ("boolean" === typeof vz ? Uz.unshift(qt()) : Uz.unshift(qt(vz))), Xz && Uz.unshift((0, oz.bb)(Xz)), Wz) {
          case "light":
            Uz.push(ws);
            break;
          case "dark":
            Uz.push(bs);
            break;
          case "none":
            break;
          default:
            Uz.push(Wz)
        }
        return !1 === sz && Uz.push(oz.i.editable.of(!1)), Fz && Uz.push(Oz.p.readOnly.of(!0)), [...Uz]
      }({
        theme: Nz,
        editable: rz,
        readOnly: Yz,
        placeholder: Pz,
        indentWithTab: xz,
        basicSetup: mz
      }), hz = [Mz, yz, ...dz];
      return Uz && "function" === typeof Uz && hz.push(oz.i.updateListener.of(Uz)), hz = hz.concat(Kz), (0, Xz.useLayoutEffect)((() => {
        if (Cz && !Tz) {
          var zz = {
              doc: tz,
              selection: sz,
              extensions: hz
            },
            Fz = Iz ? Oz.p.fromJSON(Iz.json, zz, Iz.fields) : Oz.p.create(zz);
          if (cz(Fz), !Zz) {
            var Wz = new oz.i({
              state: Fz,
              parent: Cz,
              root: Jz
            });
            Gz(Wz), vz && vz(Wz, Fz)
          }
        }
        return () => {
          Zz && (cz(void 0), Gz(void 0))
        }
      }), [Cz, Tz]), (0, Xz.useEffect)((() => {
        zz.container && ez(zz.container)
      }), [zz.container]), (0, Xz.useEffect)((() => () => {
        Zz && (Zz.destroy(), Gz(void 0)), jz.current && (jz.current.cancel(), jz.current = null)
      }), [Zz]), (0, Xz.useEffect)((() => {
        uz && Zz && Zz.focus()
      }), [uz, Zz]), (0, Xz.useEffect)((() => {
        Zz && Zz.dispatch({
          effects: Oz.F.reconfigure.of(hz)
        })
      }), [Nz, Kz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Fz, Uz]), (0, Xz.useEffect)((() => {
        if (void 0 !== tz) {
          var zz = Zz ? Zz.state.doc.toString() : "";
          if (Zz && tz !== zz) {
            var sz = () => {
              Zz && tz !== Zz.state.doc.toString() && Zz.dispatch({
                changes: {
                  from: 0,
                  to: Zz.state.doc.toString().length,
                  insert: tz || ""
                },
                annotations: [Bs.of(!0)]
              })
            };
            jz.current && !jz.current.isDone ? Az.current = sz : sz()
          }
        }
      }), [tz, Zz]), {
        state: Tz,
        setState: cz,
        view: Zz,
        setView: Gz,
        container: Cz,
        setContainer: ez
      }
    }
    var Ys = sz(1087),
      xs = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      ms = (0, Xz.forwardRef)(((zz, tz) => {
        var {
          className: sz,
          value: Oz = "",
          selection: oz,
          extensions: vz = [],
          onChange: Uz,
          onStatistics: Kz,
          onCreateEditor: uz,
          onUpdate: Nz,
          autoFocus: bz,
          theme: wz = "light",
          height: Dz,
          minHeight: gz,
          maxHeight: Hz,
          width: Bz,
          minWidth: Pz,
          maxWidth: rz,
          basicSetup: Yz,
          placeholder: xz,
          indentWithTab: mz,
          editable: Jz,
          readOnly: Iz,
          root: Cz,
          initialState: ez
        } = zz, Zz = (0, Wz.b)(zz, xs), Gz = (0, Xz.useRef)(null), {
          state: Tz,
          view: cz,
          container: jz,
          setContainer: Az
        } = rs({
          root: Cz,
          value: Oz,
          autoFocus: bz,
          theme: wz,
          height: Dz,
          minHeight: gz,
          maxHeight: Hz,
          width: Bz,
          minWidth: Pz,
          maxWidth: rz,
          basicSetup: Yz,
          placeholder: xz,
          indentWithTab: mz,
          editable: Jz,
          readOnly: Iz,
          selection: oz,
          onChange: Uz,
          onStatistics: Kz,
          onCreateEditor: uz,
          onUpdate: Nz,
          extensions: vz,
          initialState: ez
        });
        (0, Xz.useImperativeHandle)(tz, (() => ({
          editor: Gz.current,
          state: Tz,
          view: cz
        })), [Gz, jz, Tz, cz]);
        var yz = (0, Xz.useCallback)((zz => {
          Gz.current = zz, Az(zz)
        }), [Az]);
        if ("string" !== typeof Oz) throw new Error("value must be typeof string but got " + typeof Oz);
        var Mz = "string" === typeof wz ? "cm-theme-" + wz : "cm-theme";
        return (0, Ys.jsx)("div", (0, Fz.d)({
          ref: yz,
          className: Mz + (sz ? " " + sz : "")
        }, Zz))
      }));
    ms.displayName = "CodeMirror";
    const Is = ms
  },
  40446: (zz, tz, sz) => {
    function Fz() {
      var zz = arguments[0];
      "string" == typeof zz && (zz = document.createElement(zz));
      var tz = 1,
        sz = arguments[1];
      if (sz && "object" == typeof sz && null == sz.nodeType && !Array.isArray(sz)) {
        for (var Fz in sz)
          if (Object.prototype.hasOwnProperty.call(sz, Fz)) {
            var Xz = sz[Fz];
            "string" == typeof Xz ? zz.setAttribute(Fz, Xz) : null != Xz && (zz[Fz] = Xz)
          } tz++
      }
      for (; tz < arguments.length; tz++) Wz(zz, arguments[tz]);
      return zz
    }

    function Wz(zz, tz) {
      if ("string" == typeof tz) zz.appendChild(document.createTextNode(tz));
      else if (null == tz);
      else if (null != tz.nodeType) zz.appendChild(tz);
      else {
        if (!Array.isArray(tz)) throw new RangeError("Unsupported child node: " + tz);
        for (var sz = 0; sz < tz.length; sz++) Wz(zz, tz[sz])
      }
    }
    sz.d(tz, {
      b: () => Fz
    })
  },
  40440: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz
    });
    const Fz = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Wz = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      Xz = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class Oz {
      constructor(zz, tz) {
        this.rules = [];
        let {
          finish: sz
        } = tz || {};

        function Fz(zz) {
          return /^@/.test(zz) ? [zz] : zz.split(/,\s*/)
        }

        function Wz(zz, tz, Xz, Oz) {
          let oz = [],
            vz = /^@(\w+)\b/.exec(zz[0]),
            Uz = vz && "keyframes" == vz[1];
          if (vz && null == tz) return Xz.push(zz[0] + ";");
          for (let sz in tz) {
            let Oz = tz[sz];
            if (/&/.test(sz)) Wz(sz.split(/,\s*/).map((tz => zz.map((zz => tz.replace(/&/, zz))))).reduce(((zz, tz) => zz.concat(tz))), Oz, Xz);
            else if (Oz && "object" == typeof Oz) {
              if (!vz) throw new RangeError("The value of a property (" + sz + ") should be a primitive value.");
              Wz(Fz(sz), Oz, oz, Uz)
            } else null != Oz && oz.push(sz.replace(/_.*/, "").replace(/[A-Z]/g, (zz => "-" + zz.toLowerCase())) + ": " + Oz + ";")
          }(oz.length || Uz) && Xz.push((!sz || vz || Oz ? zz : zz.map(sz)).join(", ") + " {" + oz.join(" ") + "}")
        }
        for (let Xz in zz) Wz(Fz(Xz), zz[Xz], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let zz = Xz[Fz] || 1;
        return Xz[Fz] = zz + 1, "\u037c" + zz.toString(36)
      }
      static mount(zz, tz, sz) {
        let Fz = zz[Wz],
          Xz = sz && sz.nonce;
        Fz ? Xz && Fz.setNonce(Xz) : Fz = new vz(zz, Xz), Fz.mount(Array.isArray(tz) ? tz : [tz], zz)
      }
    }
    let oz = new Map;
    class vz {
      constructor(zz, tz) {
        let sz = zz.ownerDocument || zz,
          Fz = sz.defaultView;
        if (!zz.head && zz.adoptedStyleSheets && Fz.CSSStyleSheet) {
          let tz = oz.get(sz);
          if (tz) return zz[Wz] = tz;
          this.sheet = new Fz.CSSStyleSheet, oz.set(sz, this)
        } else this.styleTag = sz.createElement("style"), tz && this.styleTag.setAttribute("nonce", tz);
        this.modules = [], zz[Wz] = this
      }
      mount(zz, tz) {
        let sz = this.sheet,
          Fz = 0,
          Wz = 0;
        for (let Xz = 0; Xz < zz.length; Xz++) {
          let tz = zz[Xz],
            Oz = this.modules.indexOf(tz);
          if (Oz < Wz && Oz > -1 && (this.modules.splice(Oz, 1), Wz--, Oz = -1), -1 == Oz) {
            if (this.modules.splice(Wz++, 0, tz), sz)
              for (let zz = 0; zz < tz.rules.length; zz++) sz.insertRule(tz.rules[zz], Fz++)
          } else {
            for (; Wz < Oz;) Fz += this.modules[Wz++].rules.length;
            Fz += tz.rules.length, Wz++
          }
        }
        if (sz) tz.adoptedStyleSheets.indexOf(this.sheet) < 0 && (tz.adoptedStyleSheets = [this.sheet, ...tz.adoptedStyleSheets]);
        else {
          let zz = "";
          for (let tz = 0; tz < this.modules.length; tz++) zz += this.modules[tz].getRules() + "\n";
          this.styleTag.textContent = zz;
          let sz = tz.head || tz;
          this.styleTag.parentNode != sz && sz.insertBefore(this.styleTag, sz.firstChild)
        }
      }
      setNonce(zz) {
        this.styleTag && this.styleTag.getAttribute("nonce") != zz && this.styleTag.setAttribute("nonce", zz)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);