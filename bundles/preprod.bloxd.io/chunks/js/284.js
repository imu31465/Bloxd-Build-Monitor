export const id = 284;
export const ids = [284];
export const modules = {
  40524: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => au,
      e: () => vu,
      i: () => Xu,
      m: () => tz,
      q: () => Vu,
      u: () => Hz,
      v: () => du
    });
    var Ez = bz(40531),
      nz = bz(40538),
      iz = bz(40551);
    class lz {
      constructor(zz, uz, bz, Ez) {
        this.state = zz, this.pos = uz, this.explicit = bz, this.view = Ez, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(zz) {
        let uz = (0, iz.lb)(this.state).resolveInner(this.pos, -1);
        for (; uz && zz.indexOf(uz.name) < 0;) uz = uz.parent;
        return uz ? {
          from: uz.from,
          to: this.pos,
          text: this.state.sliceDoc(uz.from, this.pos),
          type: uz.type
        } : null
      }
      matchBefore(zz) {
        let uz = this.state.doc.lineAt(this.pos),
          bz = Math.max(uz.from, this.pos - 250),
          Ez = uz.text.slice(bz - uz.from, this.pos - uz.from),
          nz = Ez.search(dz(zz, !1));
        return nz < 0 ? null : {
          from: bz + nz,
          to: this.pos,
          text: Ez.slice(nz)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(zz, uz, bz) {
        "abort" == zz && this.abortListeners && (this.abortListeners.push(uz), bz && bz.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function Mz(zz) {
      let uz = Object.keys(zz).join(""),
        bz = /\w/.test(uz);
      return bz && (uz = uz.replace(/\w/g, "")), `[${bz?"\\w":""}${uz.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function tz(zz) {
      let uz = zz.map((zz => "string" == typeof zz ? {
          label: zz
        } : zz)),
        [bz, Ez] = uz.every((zz => /^\w+$/.test(zz.label))) ? [/\w*$/, /\w+$/] : function(zz) {
          let uz = Object.create(null),
            bz = Object.create(null);
          for (let {
              label: nz
            }
            of zz) {
            uz[nz[0]] = !0;
            for (let zz = 1; zz < nz.length; zz++) bz[nz[zz]] = !0
          }
          let Ez = Mz(uz) + Mz(bz) + "*$";
          return [new RegExp("^" + Ez), new RegExp(Ez)]
        }(uz);
      return zz => {
        let nz = zz.matchBefore(Ez);
        return nz || zz.explicit ? {
          from: nz ? nz.from : zz.pos,
          options: uz,
          validFor: bz
        } : null
      }
    }

    function Hz(zz, uz) {
      return bz => {
        for (let uz = (0, iz.lb)(bz.state).resolveInner(bz.pos, -1); uz; uz = uz.parent) {
          if (zz.indexOf(uz.name) > -1) return null;
          if (uz.type.isTop) break
        }
        return uz(bz)
      }
    }
    class Oz {
      constructor(zz, uz, bz, Ez) {
        this.completion = zz, this.source = uz, this.match = bz, this.score = Ez
      }
    }

    function pz(zz) {
      return zz.selection.main.from
    }

    function dz(zz, uz) {
      var bz;
      let {
        source: Ez
      } = zz, nz = uz && "^" != Ez[0], iz = "$" != Ez[Ez.length - 1];
      return nz || iz ? new RegExp(`${nz?"^":""}(?:${Ez})${iz?"$":""}`, null !== (bz = zz.flags) && void 0 !== bz ? bz : zz.ignoreCase ? "i" : "") : zz
    }
    const Fz = Ez.b.define();

    function Zz(zz, uz, bz, nz) {
      let {
        main: iz
      } = zz.selection, lz = bz - iz.from, Mz = nz - iz.from;
      return {
        ...zz.changeByRange((tz => {
          if (tz != iz && bz != nz && zz.sliceDoc(tz.from + lz, tz.from + Mz) != zz.sliceDoc(bz, nz)) return {
            range: tz
          };
          let Hz = zz.toText(uz);
          return {
            changes: {
              from: tz.from + lz,
              to: nz == iz.from ? tz.to : tz.from + Mz,
              insert: Hz
            },
            range: Ez.l.cursor(tz.from + lz + Hz.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Rz = new WeakMap;

    function Kz(zz) {
      if (!Array.isArray(zz)) return zz;
      let uz = Rz.get(zz);
      return uz || Rz.set(zz, uz = tz(zz)), uz
    }
    const wz = Ez.B.define(),
      Xz = Ez.B.define();
    class fz {
      constructor(zz) {
        this.pattern = zz, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let uz = 0; uz < zz.length;) {
          let bz = (0, Ez.K)(zz, uz),
            nz = (0, Ez.N)(bz);
          this.chars.push(bz);
          let iz = zz.slice(uz, uz + nz),
            lz = iz.toUpperCase();
          this.folded.push((0, Ez.K)(lz == iz ? iz.toLowerCase() : lz, 0)), uz += nz
        }
        this.astral = zz.length != this.chars.length
      }
      ret(zz, uz) {
        return this.score = zz, this.matched = uz, this
      }
      match(zz) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (zz.length < this.pattern.length) return null;
        let {
          chars: uz,
          folded: bz,
          any: nz,
          precise: iz,
          byWord: lz
        } = this;
        if (1 == uz.length) {
          let nz = (0, Ez.K)(zz, 0),
            iz = (0, Ez.N)(nz),
            lz = iz == zz.length ? 0 : -100;
          if (nz == uz[0]);
          else {
            if (nz != bz[0]) return null;
            lz += -200
          }
          return this.ret(lz, [0, iz])
        }
        let Mz = zz.indexOf(this.pattern);
        if (0 == Mz) return this.ret(zz.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let tz = uz.length,
          Hz = 0;
        if (Mz < 0) {
          for (let iz = 0, lz = Math.min(zz.length, 200); iz < lz && Hz < tz;) {
            let lz = (0, Ez.K)(zz, iz);
            lz != uz[Hz] && lz != bz[Hz] || (nz[Hz++] = iz), iz += (0, Ez.N)(lz)
          }
          if (Hz < tz) return null
        }
        let Oz = 0,
          pz = 0,
          dz = !1,
          Fz = 0,
          Zz = -1,
          Rz = -1,
          Kz = /[a-z]/.test(zz),
          wz = !0;
        for (let Xz = 0, fz = Math.min(zz.length, 200), sz = 0; Xz < fz && pz < tz;) {
          let nz = (0, Ez.K)(zz, Xz);
          Mz < 0 && (Oz < tz && nz == uz[Oz] && (iz[Oz++] = Xz), Fz < tz && (nz == uz[Fz] || nz == bz[Fz] ? (0 == Fz && (Zz = Xz), Rz = Xz + 1, Fz++) : Fz = 0));
          let Hz, fz = nz < 255 ? nz >= 48 && nz <= 57 || nz >= 97 && nz <= 122 ? 2 : nz >= 65 && nz <= 90 ? 1 : 0 : (Hz = (0, Ez.W)(nz)) != Hz.toLowerCase() ? 1 : Hz != Hz.toUpperCase() ? 2 : 0;
          (!Xz || 1 == fz && Kz || 0 == sz && 0 != fz) && (uz[pz] == nz || bz[pz] == nz && (dz = !0) ? lz[pz++] = Xz : lz.length && (wz = !1)), sz = fz, Xz += (0, Ez.N)(nz)
        }
        return pz == tz && 0 == lz[0] && wz ? this.result((dz ? -200 : 0) - 100, lz, zz) : Fz == tz && 0 == Zz ? this.ret(-200 - zz.length + (Rz == zz.length ? 0 : -100), [0, Rz]) : Mz > -1 ? this.ret(-700 - zz.length, [Mz, Mz + this.pattern.length]) : Fz == tz ? this.ret(-900 - zz.length, [Zz, Rz]) : pz == tz ? this.result((dz ? -200 : 0) - 100 - 700 + (wz ? 0 : -1100), lz, zz) : 2 == uz.length ? null : this.result((nz[0] ? -700 : 0) - 200 - 1100, nz, zz)
      }
      result(zz, uz, bz) {
        let nz = [],
          iz = 0;
        for (let lz of uz) {
          let zz = lz + (this.astral ? (0, Ez.N)((0, Ez.K)(bz, lz)) : 1);
          iz && nz[iz - 1] == lz ? nz[iz - 1] = zz : (nz[iz++] = lz, nz[iz++] = zz)
        }
        return this.ret(zz - bz.length, nz)
      }
    }
    class sz {
      constructor(zz) {
        this.pattern = zz, this.matched = [], this.score = 0, this.folded = zz.toLowerCase()
      }
      match(zz) {
        if (zz.length < this.pattern.length) return null;
        let uz = zz.slice(0, this.pattern.length),
          bz = uz == this.pattern ? 0 : uz.toLowerCase() == this.folded ? -200 : null;
        return null == bz ? null : (this.matched = [0, uz.length], this.score = bz + (zz.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const rz = Ez.r.define({
      combine: zz => (0, Ez.Q)(zz, {
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
        positionInfo: Nz,
        filterStrict: !1,
        compareCompletions: (zz, uz) => (zz.sortText || zz.label).localeCompare(uz.sortText || uz.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (zz, uz) => zz && uz,
        closeOnBlur: (zz, uz) => zz && uz,
        icons: (zz, uz) => zz && uz,
        tooltipClass: (zz, uz) => bz => oz(zz(bz), uz(bz)),
        optionClass: (zz, uz) => bz => oz(zz(bz), uz(bz)),
        addToOptions: (zz, uz) => zz.concat(uz),
        filterStrict: (zz, uz) => zz || uz
      })
    });

    function oz(zz, uz) {
      return zz ? uz ? zz + " " + uz : zz : uz
    }

    function Nz(zz, uz, bz, Ez, iz, lz) {
      let Mz, tz, Hz = zz.textDirection == nz.h.RTL,
        Oz = Hz,
        pz = !1,
        dz = "top",
        Fz = uz.left - iz.left,
        Zz = iz.right - uz.right,
        Rz = Ez.right - Ez.left,
        Kz = Ez.bottom - Ez.top;
      if (Oz && Fz < Math.min(Rz, Zz) ? Oz = !1 : !Oz && Zz < Math.min(Rz, Fz) && (Oz = !0), Rz <= (Oz ? Fz : Zz)) Mz = Math.max(iz.top, Math.min(bz.top, iz.bottom - Kz)) - uz.top, tz = Math.min(400, Oz ? Fz : Zz);
      else {
        pz = !0, tz = Math.min(400, (Hz ? uz.right : iz.right - uz.left) - 30);
        let zz = iz.bottom - uz.bottom;
        zz >= Kz || zz > uz.top ? Mz = bz.bottom - uz.top : (dz = "bottom", Mz = uz.bottom - bz.top)
      }
      return {
        style: `${dz}: ${Mz/((uz.bottom-uz.top)/lz.offsetHeight)}px; max-width: ${tz/((uz.right-uz.left)/lz.offsetWidth)}px`,
        class: "cm-completionInfo-" + (pz ? Hz ? "left-narrow" : "right-narrow" : Oz ? "left" : "right")
      }
    }
    const vz = Ez.B.define();

    function xz(zz, uz, bz) {
      if (zz <= bz) return {
        from: 0,
        to: zz
      };
      if (uz < 0 && (uz = 0), uz <= zz >> 1) {
        let zz = Math.floor(uz / bz);
        return {
          from: zz * bz,
          to: (zz + 1) * bz
        }
      }
      let Ez = Math.floor((zz - uz) / bz);
      return {
        from: zz - (Ez + 1) * bz,
        to: zz - Ez * bz
      }
    }
    class Jz {
      constructor(zz, uz, bz) {
        this.view = zz, this.stateField = uz, this.applyCompletion = bz, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: zz => this.placeInfo(zz),
          key: this
        }, this.space = null, this.currentClass = "";
        let Ez = zz.state.field(uz),
          {
            options: nz,
            selected: iz
          } = Ez.open,
          lz = zz.state.facet(rz);
        this.optionContent = function(zz) {
          let uz = zz.addToOptions.slice();
          return zz.icons && uz.push({
            render(zz) {
              let uz = document.createElement("div");
              return uz.classList.add("cm-completionIcon"), zz.type && uz.classList.add(...zz.type.split(/\s+/g).map((zz => "cm-completionIcon-" + zz))), uz.setAttribute("aria-hidden", "true"), uz
            },
            position: 20
          }), uz.push({
            render(zz, uz, bz, Ez) {
              let nz = document.createElement("span");
              nz.className = "cm-completionLabel";
              let iz = zz.displayLabel || zz.label,
                lz = 0;
              for (let Mz = 0; Mz < Ez.length;) {
                let zz = Ez[Mz++],
                  uz = Ez[Mz++];
                zz > lz && nz.appendChild(document.createTextNode(iz.slice(lz, zz)));
                let bz = nz.appendChild(document.createElement("span"));
                bz.appendChild(document.createTextNode(iz.slice(zz, uz))), bz.className = "cm-completionMatchedText", lz = uz
              }
              return lz < iz.length && nz.appendChild(document.createTextNode(iz.slice(lz))), nz
            },
            position: 50
          }, {
            render(zz) {
              if (!zz.detail) return null;
              let uz = document.createElement("span");
              return uz.className = "cm-completionDetail", uz.textContent = zz.detail, uz
            },
            position: 80
          }), uz.sort(((zz, uz) => zz.position - uz.position)).map((zz => zz.render))
        }(lz), this.optionClass = lz.optionClass, this.tooltipClass = lz.tooltipClass, this.range = xz(nz.length, iz, lz.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(zz.state), this.dom.addEventListener("mousedown", (bz => {
          let {
            options: Ez
          } = zz.state.field(uz).open;
          for (let uz, nz = bz.target; nz && nz != this.dom; nz = nz.parentNode)
            if ("LI" == nz.nodeName && (uz = /-(\d+)$/.exec(nz.id)) && +uz[1] < Ez.length) return this.applyCompletion(zz, Ez[+uz[1]]), void bz.preventDefault();
          if (bz.target == this.list) {
            let uz = this.list.classList.contains("cm-completionListIncompleteTop") && bz.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && bz.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != uz && (zz.dispatch({
              effects: vz.of(uz)
            }), bz.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (uz => {
          let bz = zz.state.field(this.stateField, !1);
          bz && bz.tooltip && zz.state.facet(rz).closeOnBlur && uz.relatedTarget != zz.contentDOM && zz.dispatch({
            effects: Xz.of(null)
          })
        })), this.showOptions(nz, Ez.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(zz, uz) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(zz, uz, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(zz) {
        var uz;
        let bz = zz.state.field(this.stateField),
          Ez = zz.startState.field(this.stateField);
        if (this.updateTooltipClass(zz.state), bz != Ez) {
          let {
            options: nz,
            selected: iz,
            disabled: lz
          } = bz.open;
          Ez.open && Ez.open.options == nz || (this.range = xz(nz.length, iz, zz.state.facet(rz).maxRenderedOptions), this.showOptions(nz, bz.id)), this.updateSel(), lz != (null === (uz = Ez.open) || void 0 === uz ? void 0 : uz.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!lz)
        }
      }
      updateTooltipClass(zz) {
        let uz = this.tooltipClass(zz);
        if (uz != this.currentClass) {
          for (let zz of this.currentClass.split(" ")) zz && this.dom.classList.remove(zz);
          for (let zz of uz.split(" ")) zz && this.dom.classList.add(zz);
          this.currentClass = uz
        }
      }
      positioned(zz) {
        this.space = zz, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let zz = this.view.state.field(this.stateField),
          uz = zz.open;
        (uz.selected > -1 && uz.selected < this.range.from || uz.selected >= this.range.to) && (this.range = xz(uz.options.length, uz.selected, this.view.state.facet(rz).maxRenderedOptions), this.showOptions(uz.options, zz.id));
        let bz = this.updateSelectedOption(uz.selected);
        if (bz) {
          this.destroyInfo();
          let {
            completion: Ez
          } = uz.options[uz.selected], {
            info: iz
          } = Ez;
          if (!iz) return;
          let lz = "string" === typeof iz ? document.createTextNode(iz) : iz(Ez);
          if (!lz) return;
          "then" in lz ? lz.then((uz => {
            uz && this.view.state.field(this.stateField, !1) == zz && this.addInfoPane(uz, Ez)
          })).catch((zz => (0, nz.db)(this.view.state, zz, "completion info"))) : (this.addInfoPane(lz, Ez), bz.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(zz, uz) {
        this.destroyInfo();
        let bz = this.info = document.createElement("div");
        if (bz.className = "cm-tooltip cm-completionInfo", bz.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != zz.nodeType) bz.appendChild(zz), this.infoDestroy = null;
        else {
          let {
            dom: uz,
            destroy: Ez
          } = zz;
          bz.appendChild(uz), this.infoDestroy = Ez || null
        }
        this.dom.appendChild(bz), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(zz) {
        let uz = null;
        for (let bz = this.list.firstChild, Ez = this.range.from; bz; bz = bz.nextSibling, Ez++) "LI" == bz.nodeName && bz.id ? Ez == zz ? bz.hasAttribute("aria-selected") || (bz.setAttribute("aria-selected", "true"), uz = bz) : bz.hasAttribute("aria-selected") && (bz.removeAttribute("aria-selected"), bz.removeAttribute("aria-describedby")) : Ez--;
        return uz && function(zz, uz) {
          let bz = zz.getBoundingClientRect(),
            Ez = uz.getBoundingClientRect(),
            nz = bz.height / zz.offsetHeight;
          Ez.top < bz.top ? zz.scrollTop -= (bz.top - Ez.top) / nz : Ez.bottom > bz.bottom && (zz.scrollTop += (Ez.bottom - bz.bottom) / nz)
        }(this.list, uz), uz
      }
      measureInfo() {
        let zz = this.dom.querySelector("[aria-selected]");
        if (!zz || !this.info) return null;
        let uz = this.dom.getBoundingClientRect(),
          bz = this.info.getBoundingClientRect(),
          Ez = zz.getBoundingClientRect(),
          nz = this.space;
        if (!nz) {
          let zz = this.dom.ownerDocument.documentElement;
          nz = {
            left: 0,
            top: 0,
            right: zz.clientWidth,
            bottom: zz.clientHeight
          }
        }
        return Ez.top > Math.min(nz.bottom, uz.bottom) - 10 || Ez.bottom < Math.max(nz.top, uz.top) + 10 ? null : this.view.state.facet(rz).positionInfo(this.view, uz, Ez, bz, nz, this.dom)
      }
      placeInfo(zz) {
        this.info && (zz ? (zz.style && (this.info.style.cssText = zz.style), this.info.className = "cm-tooltip cm-completionInfo " + (zz.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(zz, uz, bz) {
        const Ez = document.createElement("ul");
        Ez.id = uz, Ez.setAttribute("role", "listbox"), Ez.setAttribute("aria-expanded", "true"), Ez.setAttribute("aria-label", this.view.state.phrase("Completions")), Ez.addEventListener("mousedown", (zz => {
          zz.target == Ez && zz.preventDefault()
        }));
        let nz = null;
        for (let iz = bz.from; iz < bz.to; iz++) {
          let {
            completion: lz,
            match: Mz
          } = zz[iz], {
            section: tz
          } = lz;
          if (tz) {
            let zz = "string" == typeof tz ? tz : tz.name;
            if (zz != nz && (iz > bz.from || 0 == bz.from))
              if (nz = zz, "string" != typeof tz && tz.header) Ez.appendChild(tz.header(tz));
              else {
                Ez.appendChild(document.createElement("completion-section")).textContent = zz
              }
          }
          const Hz = Ez.appendChild(document.createElement("li"));
          Hz.id = uz + "-" + iz, Hz.setAttribute("role", "option");
          let Oz = this.optionClass(lz);
          Oz && (Hz.className = Oz);
          for (let zz of this.optionContent) {
            let uz = zz(lz, this.view.state, this.view, Mz);
            uz && Hz.appendChild(uz)
          }
        }
        return bz.from && Ez.classList.add("cm-completionListIncompleteTop"), bz.to < zz.length && Ez.classList.add("cm-completionListIncompleteBottom"), Ez
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Az(zz, uz) {
      return bz => new Jz(bz, zz, uz)
    }

    function Tz(zz) {
      return 100 * (zz.boost || 0) + (zz.apply ? 10 : 0) + (zz.info ? 5 : 0) + (zz.type ? 1 : 0)
    }
    class Lz {
      constructor(zz, uz, bz, Ez, nz, iz) {
        this.options = zz, this.attrs = uz, this.tooltip = bz, this.timestamp = Ez, this.selected = nz, this.disabled = iz
      }
      setSelected(zz, uz) {
        return zz == this.selected || zz >= this.options.length ? this : new Lz(this.options, Vz(uz, zz), this.tooltip, this.timestamp, zz, this.disabled)
      }
      static build(zz, uz, bz, Ez, nz, iz) {
        if (Ez && !iz && zz.some((zz => zz.isPending))) return Ez.setDisabled();
        let lz = function(zz, uz) {
          let bz = [],
            Ez = null,
            nz = null,
            iz = zz => {
              bz.push(zz);
              let {
                section: uz
              } = zz.completion;
              if (uz) {
                Ez || (Ez = []);
                let zz = "string" == typeof uz ? uz : uz.name;
                Ez.some((uz => uz.name == zz)) || Ez.push("string" == typeof uz ? {
                  name: zz
                } : uz)
              }
            },
            lz = uz.facet(rz);
          for (let pz of zz)
            if (pz.hasResult()) {
              let zz = pz.result.getMatch;
              if (!1 === pz.result.filter)
                for (let uz of pz.result.options) iz(new Oz(uz, pz.source, zz ? zz(uz) : [], 1e9 - bz.length));
              else {
                let bz, Ez = uz.sliceDoc(pz.from, pz.to),
                  Mz = lz.filterStrict ? new sz(Ez) : new fz(Ez);
                for (let uz of pz.result.options)
                  if (bz = Mz.match(uz.label)) {
                    let Ez = uz.displayLabel ? zz ? zz(uz, bz.matched) : [] : bz.matched,
                      lz = bz.score + (uz.boost || 0);
                    if (iz(new Oz(uz, pz.source, Ez, lz)), "object" == typeof uz.section && "dynamic" === uz.section.rank) {
                      let {
                        name: zz
                      } = uz.section;
                      nz || (nz = Object.create(null)), nz[zz] = Math.max(lz, nz[zz] || -1e9)
                    }
                  }
              }
            } if (Ez) {
            let zz = Object.create(null),
              uz = 0,
              iz = (zz, uz) => ("dynamic" === zz.rank && "dynamic" === uz.rank ? nz[uz.name] - nz[zz.name] : 0) || ("number" == typeof zz.rank ? zz.rank : 1e9) - ("number" == typeof uz.rank ? uz.rank : 1e9) || (zz.name < uz.name ? -1 : 1);
            for (let bz of Ez.sort(iz)) uz -= 1e5, zz[bz.name] = uz;
            for (let Ez of bz) {
              let {
                section: uz
              } = Ez.completion;
              uz && (Ez.score += zz["string" == typeof uz ? uz : uz.name])
            }
          }
          let Mz = [],
            tz = null,
            Hz = lz.compareCompletions;
          for (let Oz of bz.sort(((zz, uz) => uz.score - zz.score || Hz(zz.completion, uz.completion)))) {
            let zz = Oz.completion;
            !tz || tz.label != zz.label || tz.detail != zz.detail || null != tz.type && null != zz.type && tz.type != zz.type || tz.apply != zz.apply || tz.boost != zz.boost ? Mz.push(Oz) : Tz(Oz.completion) > Tz(tz) && (Mz[Mz.length - 1] = Oz), tz = Oz.completion
          }
          return Mz
        }(zz, uz);
        if (!lz.length) return Ez && zz.some((zz => zz.isPending)) ? Ez.setDisabled() : null;
        let Mz = uz.facet(rz).selectOnOpen ? 0 : -1;
        if (Ez && Ez.selected != Mz && -1 != Ez.selected) {
          let zz = Ez.options[Ez.selected].completion;
          for (let uz = 0; uz < lz.length; uz++)
            if (lz[uz].completion == zz) {
              Mz = uz;
              break
            }
        }
        return new Lz(lz, Vz(bz, Mz), {
          pos: zz.reduce(((zz, uz) => uz.hasResult() ? Math.min(zz, uz.from) : zz), 1e8),
          create: yz,
          above: nz.aboveCursor
        }, Ez ? Ez.timestamp : Date.now(), Mz, !1)
      }
      map(zz) {
        return new Lz(this.options, this.attrs, {
          ...this.tooltip,
          pos: zz.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new Lz(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Pz {
      constructor(zz, uz, bz) {
        this.active = zz, this.id = uz, this.open = bz
      }
      static start() {
        return new Pz(mz, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(zz) {
        let {
          state: uz
        } = zz, bz = uz.facet(rz), Ez = (bz.override || uz.languageDataAt("autocomplete", pz(uz)).map(Kz)).map((uz => (this.active.find((zz => zz.source == uz)) || new hz(uz, this.active.some((zz => 0 != zz.state)) ? 1 : 0)).update(zz, bz)));
        Ez.length == this.active.length && Ez.every(((zz, uz) => zz == this.active[uz])) && (Ez = this.active);
        let nz = this.open,
          iz = zz.effects.some((zz => zz.is(cz)));
        nz && zz.docChanged && (nz = nz.map(zz.changes)), zz.selection || Ez.some((uz => uz.hasResult() && zz.changes.touchesRange(uz.from, uz.to))) || ! function(zz, uz) {
          if (zz == uz) return !0;
          for (let bz = 0, Ez = 0;;) {
            for (; bz < zz.length && !zz[bz].hasResult();) bz++;
            for (; Ez < uz.length && !uz[Ez].hasResult();) Ez++;
            let nz = bz == zz.length,
              iz = Ez == uz.length;
            if (nz || iz) return nz == iz;
            if (zz[bz++].result != uz[Ez++].result) return !1
          }
        }(Ez, this.active) || iz ? nz = Lz.build(Ez, uz, this.id, nz, bz, iz) : nz && nz.disabled && !Ez.some((zz => zz.isPending)) && (nz = null), !nz && Ez.every((zz => !zz.isPending)) && Ez.some((zz => zz.hasResult())) && (Ez = Ez.map((zz => zz.hasResult() ? new hz(zz.source, 0) : zz)));
        for (let lz of zz.effects) lz.is(vz) && (nz = nz && nz.setSelected(lz.value, this.id));
        return Ez == this.active && nz == this.open ? this : new Pz(Ez, this.id, nz)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Gz : az
      }
    }
    const Gz = {
        "aria-autocomplete": "list"
      },
      az = {};

    function Vz(zz, uz) {
      let bz = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": zz
      };
      return uz > -1 && (bz["aria-activedescendant"] = zz + "-" + uz), bz
    }
    const mz = [];

    function qz(zz, uz) {
      if (zz.isUserEvent("input.complete")) {
        let bz = zz.annotation(Fz);
        if (bz && uz.activateOnCompletion(bz)) return 12
      }
      let bz = zz.isUserEvent("input.type");
      return bz && uz.activateOnTyping ? 5 : bz ? 1 : zz.isUserEvent("delete.backward") ? 2 : zz.selection ? 8 : zz.docChanged ? 16 : 0
    }
    class hz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = zz, this.state = uz, this.explicit = bz
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(zz, uz) {
        let bz = qz(zz, uz),
          Ez = this;
        (8 & bz || 16 & bz && this.touches(zz)) && (Ez = new hz(Ez.source, 0)), 4 & bz && 0 == Ez.state && (Ez = new hz(this.source, 1)), Ez = Ez.updateFor(zz, bz);
        for (let nz of zz.effects)
          if (nz.is(wz)) Ez = new hz(Ez.source, 1, nz.value);
          else if (nz.is(Xz)) Ez = new hz(Ez.source, 0);
        else if (nz.is(cz))
          for (let zz of nz.value) zz.source == Ez.source && (Ez = zz);
        return Ez
      }
      updateFor(zz, uz) {
        return this.map(zz.changes)
      }
      map(zz) {
        return this
      }
      touches(zz) {
        return zz.changes.touchesRange(pz(zz.state))
      }
    }
    class Uz extends hz {
      constructor(zz, uz, bz, Ez, nz, iz) {
        super(zz, 3, uz), this.limit = bz, this.result = Ez, this.from = nz, this.to = iz
      }
      hasResult() {
        return !0
      }
      updateFor(zz, uz) {
        var bz;
        if (!(3 & uz)) return this.map(zz.changes);
        let Ez = this.result;
        Ez.map && !zz.changes.empty && (Ez = Ez.map(Ez, zz.changes));
        let nz = zz.changes.mapPos(this.from),
          iz = zz.changes.mapPos(this.to, 1),
          Mz = pz(zz.state);
        if (Mz > iz || !Ez || 2 & uz && (pz(zz.startState) == this.from || Mz < this.limit)) return new hz(this.source, 4 & uz ? 1 : 0);
        let tz = zz.changes.mapPos(this.limit);
        return function(zz, uz, bz, Ez) {
          if (!zz) return !1;
          let nz = uz.sliceDoc(bz, Ez);
          return "function" == typeof zz ? zz(nz, bz, Ez, uz) : dz(zz, !0).test(nz)
        }(Ez.validFor, zz.state, nz, iz) ? new Uz(this.source, this.explicit, tz, Ez, nz, iz) : Ez.update && (Ez = Ez.update(Ez, nz, iz, new lz(zz.state, Mz, !1))) ? new Uz(this.source, this.explicit, tz, Ez, Ez.from, null !== (bz = Ez.to) && void 0 !== bz ? bz : pz(zz.state)) : new hz(this.source, 1, this.explicit)
      }
      map(zz) {
        if (zz.empty) return this;
        return (this.result.map ? this.result.map(this.result, zz) : this.result) ? new Uz(this.source, this.explicit, zz.mapPos(this.limit), this.result, zz.mapPos(this.from), zz.mapPos(this.to, 1)) : new hz(this.source, 0)
      }
      touches(zz) {
        return zz.changes.touchesRange(this.from, this.to)
      }
    }
    const cz = Ez.B.define({
        map: (zz, uz) => zz.map((zz => zz.map(uz)))
      }),
      gz = Ez.E.define({
        create: () => Pz.start(),
        update: (zz, uz) => zz.update(uz),
        provide: zz => [nz.tb.from(zz, (zz => zz.tooltip)), nz.k.contentAttributes.from(zz, (zz => zz.attrs))]
      });

    function Sz(zz, uz) {
      const bz = uz.completion.apply || uz.completion.label;
      let Ez = zz.state.field(gz).active.find((zz => zz.source == uz.source));
      return Ez instanceof Uz && ("string" == typeof bz ? zz.dispatch({
        ...Zz(zz.state, bz, Ez.from, Ez.to),
        annotations: Fz.of(uz.completion)
      }) : bz(zz, uz.completion, Ez.from, Ez.to), !0)
    }
    const yz = Az(gz, Sz);

    function Dz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return bz => {
        let Ez = bz.state.field(gz, !1);
        if (!Ez || !Ez.open || Ez.open.disabled || Date.now() - Ez.open.timestamp < bz.state.facet(rz).interactionDelay) return !1;
        let iz, lz = 1;
        "page" == uz && (iz = (0, nz.G)(bz, Ez.open.tooltip)) && (lz = Math.max(2, Math.floor(iz.dom.offsetHeight / iz.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: Mz
        } = Ez.open.options, tz = Ez.open.selected > -1 ? Ez.open.selected + lz * (zz ? 1 : -1) : zz ? 0 : Mz - 1;
        return tz < 0 ? tz = "page" == uz ? 0 : Mz - 1 : tz >= Mz && (tz = "page" == uz ? Mz - 1 : 0), bz.dispatch({
          effects: vz.of(tz)
        }), !0
      }
    }
    const Qz = zz => !!zz.state.field(gz, !1) && (zz.dispatch({
      effects: wz.of(!0)
    }), !0);
    class Wz {
      constructor(zz, uz) {
        this.active = zz, this.context = uz, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const ez = nz.p.fromClass(class {
        constructor(zz) {
          this.view = zz, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let uz of zz.state.field(gz).active) uz.isPending && this.startQuery(uz)
        }
        update(zz) {
          let uz = zz.state.field(gz),
            bz = zz.state.facet(rz);
          if (!zz.selectionSet && !zz.docChanged && zz.startState.field(gz) == uz) return;
          let Ez = zz.transactions.some((zz => {
            let uz = qz(zz, bz);
            return 8 & uz || (zz.selection || zz.docChanged) && !(3 & uz)
          }));
          for (let Mz = 0; Mz < this.running.length; Mz++) {
            let uz = this.running[Mz];
            if (Ez || uz.context.abortOnDocChange && zz.docChanged || uz.updates.length + zz.transactions.length > 50 && Date.now() - uz.time > 1e3) {
              for (let zz of uz.context.abortListeners) try {
                zz()
              } catch (lz) {
                (0, nz.db)(this.view.state, lz)
              }
              uz.context.abortListeners = null, this.running.splice(Mz--, 1)
            } else uz.updates.push(...zz.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), zz.transactions.some((zz => zz.effects.some((zz => zz.is(wz))))) && (this.pendingStart = !0);
          let iz = this.pendingStart ? 50 : bz.activateOnTypingDelay;
          if (this.debounceUpdate = uz.active.some((zz => zz.isPending && !this.running.some((uz => uz.active.source == zz.source)))) ? setTimeout((() => this.startUpdate()), iz) : -1, 0 != this.composing)
            for (let nz of zz.transactions) nz.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && nz.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: zz
          } = this.view, uz = zz.field(gz);
          for (let bz of uz.active) bz.isPending && !this.running.some((zz => zz.active.source == bz.source)) && this.startQuery(bz);
          this.running.length && uz.open && uz.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(rz).updateSyncTime))
        }
        startQuery(zz) {
          let {
            state: uz
          } = this.view, bz = pz(uz), Ez = new lz(uz, bz, zz.explicit, this.view), iz = new Wz(zz, Ez);
          this.running.push(iz), Promise.resolve(zz.source(Ez)).then((zz => {
            iz.context.aborted || (iz.done = zz || null, this.scheduleAccept())
          }), (zz => {
            this.view.dispatch({
              effects: Xz.of(null)
            }), (0, nz.db)(this.view.state, zz)
          }))
        }
        scheduleAccept() {
          this.running.every((zz => void 0 !== zz.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(rz).updateSyncTime))
        }
        accept() {
          var zz;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let uz = [],
            bz = this.view.state.facet(rz),
            Ez = this.view.state.field(gz);
          for (let nz = 0; nz < this.running.length; nz++) {
            let iz = this.running[nz];
            if (void 0 === iz.done) continue;
            if (this.running.splice(nz--, 1), iz.done) {
              let Ez = pz(iz.updates.length ? iz.updates[0].startState : this.view.state),
                nz = Math.min(Ez, iz.done.from + (iz.active.explicit ? 0 : 1)),
                lz = new Uz(iz.active.source, iz.active.explicit, nz, iz.done, iz.done.from, null !== (zz = iz.done.to) && void 0 !== zz ? zz : Ez);
              for (let zz of iz.updates) lz = lz.update(zz, bz);
              if (lz.hasResult()) {
                uz.push(lz);
                continue
              }
            }
            let lz = Ez.active.find((zz => zz.source == iz.active.source));
            if (lz && lz.isPending)
              if (null == iz.done) {
                let zz = new hz(iz.active.source, 0);
                for (let uz of iz.updates) zz = zz.update(uz, bz);
                zz.isPending || uz.push(zz)
              } else this.startQuery(lz)
          }(uz.length || Ez.open && Ez.open.disabled) && this.view.dispatch({
            effects: cz.of(uz)
          })
        }
      }, {
        eventHandlers: {
          blur(zz) {
            let uz = this.view.state.field(gz, !1);
            if (uz && uz.tooltip && this.view.state.facet(rz).closeOnBlur) {
              let bz = uz.open && (0, nz.G)(this.view, uz.open.tooltip);
              bz && bz.dom.contains(zz.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: Xz.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: wz.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      jz = "object" == typeof navigator && /Win/.test(navigator.platform),
      Iz = Ez.t.highest(nz.k.domEventHandlers({
        keydown(zz, uz) {
          let bz = uz.state.field(gz, !1);
          if (!bz || !bz.open || bz.open.disabled || bz.open.selected < 0 || zz.key.length > 1 || zz.ctrlKey && (!jz || !zz.altKey) || zz.metaKey) return !1;
          let Ez = bz.open.options[bz.open.selected],
            nz = bz.active.find((zz => zz.source == Ez.source)),
            iz = Ez.completion.commitCharacters || nz.result.commitCharacters;
          return iz && iz.indexOf(zz.key) > -1 && Sz(uz, Ez), !1
        }
      })),
      Bz = nz.k.baseTheme({
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
    class Cz {
      constructor(zz, uz, bz, Ez) {
        this.field = zz, this.line = uz, this.from = bz, this.to = Ez
      }
    }
    class Yz {
      constructor(zz, uz, bz) {
        this.field = zz, this.from = uz, this.to = bz
      }
      map(zz) {
        let uz = zz.mapPos(this.from, -1, Ez.s.TrackDel),
          bz = zz.mapPos(this.to, 1, Ez.s.TrackDel);
        return null == uz || null == bz ? null : new Yz(this.field, uz, bz)
      }
    }
    class kz {
      constructor(zz, uz) {
        this.lines = zz, this.fieldPositions = uz
      }
      instantiate(zz, uz) {
        let bz = [],
          Ez = [uz],
          nz = zz.doc.lineAt(uz),
          lz = /^\s*/.exec(nz.text)[0];
        for (let tz of this.lines) {
          if (bz.length) {
            let bz = lz,
              nz = /^\t*/.exec(tz)[0].length;
            for (let uz = 0; uz < nz; uz++) bz += zz.facet(iz.Y);
            Ez.push(uz + bz.length - nz), tz = bz + tz.slice(nz)
          }
          bz.push(tz), uz += tz.length + 1
        }
        let Mz = this.fieldPositions.map((zz => new Yz(zz.field, Ez[zz.line] + zz.from, Ez[zz.line] + zz.to)));
        return {
          text: bz,
          al: Mz
        }
      }
      static parse(zz) {
        let uz, bz = [],
          Ez = [],
          nz = [];
        for (let iz of zz.split(/\r\n?|\n/)) {
          for (; uz = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(iz);) {
            let zz = uz[1] ? +uz[1] : null,
              lz = uz[2] || uz[3] || "",
              Mz = -1,
              tz = lz.replace(/\\[{}]/g, (zz => zz[1]));
            for (let uz = 0; uz < bz.length; uz++)(null != zz ? bz[uz].seq == zz : tz && bz[uz].name == tz) && (Mz = uz);
            if (Mz < 0) {
              let uz = 0;
              for (; uz < bz.length && (null == zz || null != bz[uz].seq && bz[uz].seq < zz);) uz++;
              bz.splice(uz, 0, {
                seq: zz,
                name: tz
              }), Mz = uz;
              for (let zz of nz) zz.field >= Mz && zz.field++
            }
            for (let bz of nz)
              if (bz.line == Ez.length && bz.from > uz.index) {
                let zz = uz[2] ? 3 + (uz[1] || "").length : 2;
                bz.from -= zz, bz.to -= zz
              } nz.push(new Cz(Mz, Ez.length, uz.index, uz.index + tz.length)), iz = iz.slice(0, uz.index) + lz + iz.slice(uz.index + uz[0].length)
          }
          iz = iz.replace(/\\([{}])/g, ((zz, uz, bz) => {
            for (let iz of nz) iz.line == Ez.length && iz.from > bz && (iz.from--, iz.to--);
            return uz
          })), Ez.push(iz)
        }
        return new kz(Ez, nz)
      }
    }
    let zu = nz.e.widget({
        widget: new class extends nz.t {
          toDOM() {
            let zz = document.createElement("span");
            return zz.className = "cm-snippetFieldPosition", zz
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      uu = nz.e.mark({
        class: "cm-snippetField"
      });
    class bu {
      constructor(zz, uz) {
        this.al = zz, this.active = uz, this.deco = nz.e.set(zz.map((zz => (zz.from == zz.to ? zu : uu).range(zz.from, zz.to))), !0)
      }
      map(zz) {
        let uz = [];
        for (let bz of this.al) {
          let Ez = bz.map(zz);
          if (!Ez) return null;
          uz.push(Ez)
        }
        return new bu(uz, this.active)
      }
      selectionInsideField(zz) {
        return zz.al.every((zz => this.al.some((uz => uz.field == this.active && uz.from <= zz.from && uz.to >= zz.to))))
      }
    }
    const Eu = Ez.B.define({
        map: (zz, uz) => zz && zz.map(uz)
      }),
      nu = Ez.B.define(),
      iu = Ez.E.define({
        create: () => null,
        update(zz, uz) {
          for (let bz of uz.effects) {
            if (bz.is(Eu)) return bz.value;
            if (bz.is(nu) && zz) return new bu(zz.al, bz.value)
          }
          return zz && uz.docChanged && (zz = zz.map(uz.changes)), zz && uz.selection && !zz.selectionInsideField(uz.selection) && (zz = null), zz
        },
        provide: zz => nz.k.cE.from(zz, (zz => zz ? zz.deco : nz.e.none))
      });

    function lu(zz, uz) {
      return Ez.l.create(zz.filter((zz => zz.field == uz)).map((zz => Ez.l.range(zz.from, zz.to))))
    }

    function Mu(zz) {
      let uz = kz.parse(zz);
      return (zz, bz, nz, iz) => {
        let {
          text: lz,
          al: Mz
        } = uz.instantiate(zz.state, nz), {
          main: tz
        } = zz.state.selection, Hz = {
          changes: {
            from: nz,
            to: iz == tz.from ? tz.to : iz,
            insert: Ez.I.of(lz)
          },
          scrollIntoView: !0,
          annotations: bz ? [Fz.of(bz), Ez.J.userEvent.of("input.complete")] : void 0
        };
        if (Mz.length && (Hz.selection = lu(Mz, 0)), Mz.some((zz => zz.field > 0))) {
          let uz = new bu(Mz, 0),
            bz = Hz.effects = [Eu.of(uz)];
          void 0 === zz.state.field(iu, !1) && bz.push(Ez.B.appendConfig.of([iu, pu, Fu, Bz]))
        }
        zz.dispatch(zz.state.update(Hz))
      }
    }

    function tu(zz) {
      return uz => {
        let {
          state: bz,
          dispatch: Ez
        } = uz, nz = bz.field(iu, !1);
        if (!nz || zz < 0 && 0 == nz.active) return !1;
        let iz = nz.active + zz,
          lz = zz > 0 && !nz.al.some((uz => uz.field == iz + zz));
        return Ez(bz.update({
          selection: lu(nz.al, iz),
          effects: Eu.of(lz ? null : new bu(nz.al, iz)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Hu = [{
        key: "Tab",
        run: tu(1),
        shift: tu(-1)
      }, {
        key: "Escape",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz;
          return !!uz.field(iu, !1) && (bz(uz.update({
            effects: Eu.of(null)
          })), !0)
        }
      }],
      Ou = Ez.r.define({
        combine: zz => zz.length ? zz[0] : Hu
      }),
      pu = Ez.t.highest(nz.Y.compute([Ou], (zz => zz.facet(Ou))));

    function du(zz, uz) {
      return {
        ...uz,
        apply: Mu(zz)
      }
    }
    const Fu = nz.k.domEventHandlers({
      mousedown(zz, uz) {
        let bz, Ez = uz.state.field(iu, !1);
        if (!Ez || null == (bz = uz.posAtCoords({
            x: zz.clientX,
            y: zz.clientY
          }))) return !1;
        let nz = Ez.al.find((zz => zz.from <= bz && zz.to >= bz));
        return !(!nz || nz.field == Ez.active) && (uz.dispatch({
          selection: lu(Ez.al, nz.field),
          effects: Eu.of(Ez.al.some((zz => zz.field > nz.field)) ? new bu(Ez.al, nz.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const Zu = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      Ru = Ez.B.define({
        map(zz, uz) {
          let bz = uz.mapPos(zz, -1, Ez.s.TrackAfter);
          return null == bz ? void 0 : bz
        }
      }),
      Ku = new class extends Ez.z {};
    Ku.startSide = 1, Ku.endSide = -1;
    const wu = Ez.E.define({
      create: () => Ez.x.empty,
      update(zz, uz) {
        if (zz = zz.map(uz.changes), uz.selection) {
          let bz = uz.state.doc.lineAt(uz.selection.main.head);
          zz = zz.update({
            filter: zz => zz >= bz.from && zz <= bz.to
          })
        }
        for (let bz of uz.effects) bz.is(Ru) && (zz = zz.update({
          add: [Ku.range(bz.value, bz.value + 1)]
        }));
        return zz
      }
    });

    function Xu() {
      return [Nu, wu]
    }
    const fu = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function su(zz) {
      for (let uz = 0; uz < 16; uz += 2)
        if (fu.charCodeAt(uz) == zz) return fu.charAt(uz + 1);
      return (0, Ez.W)(zz < 128 ? zz : zz + 1)
    }

    function ru(zz, uz) {
      return zz.languageDataAt("closeBrackets", uz)[0] || Zu
    }
    const ou = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Nu = nz.k.inputHandler.of(((zz, uz, bz, nz) => {
        if ((ou ? zz.composing : zz.compositionStarted) || zz.state.readOnly) return !1;
        let iz = zz.state.selection.main;
        if (nz.length > 2 || 2 == nz.length && 1 == (0, Ez.N)((0, Ez.K)(nz, 0)) || uz != iz.from || bz != iz.to) return !1;
        let lz = function(zz, uz) {
          let bz = ru(zz, zz.selection.main.head),
            nz = bz.brackets || Zu.brackets;
          for (let iz of nz) {
            let lz = su((0, Ez.K)(iz, 0));
            if (uz == iz) return lz == iz ? Lu(zz, iz, nz.indexOf(iz + iz + iz) > -1, bz) : Au(zz, iz, lz, bz.before || Zu.before);
            if (uz == lz && xu(zz, zz.selection.main.from)) return Tu(zz, iz, lz)
          }
          return null
        }(zz.state, nz);
        return !!lz && (zz.dispatch(lz), !0)
      })),
      vu = [{
        key: "Backspace",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz;
          if (uz.readOnly) return !1;
          let nz = ru(uz, uz.selection.main.head).brackets || Zu.brackets,
            iz = null,
            lz = uz.changeByRange((zz => {
              if (zz.empty) {
                let bz = function(zz, uz) {
                  let bz = zz.sliceString(uz - 2, uz);
                  return (0, Ez.N)((0, Ez.K)(bz, 0)) == bz.length ? bz : bz.slice(1)
                }(uz.doc, zz.head);
                for (let iz of nz)
                  if (iz == bz && Ju(uz.doc, zz.head) == su((0, Ez.K)(iz, 0))) return {
                    changes: {
                      from: zz.head - iz.length,
                      to: zz.head + iz.length
                    },
                    range: Ez.l.cursor(zz.head - iz.length)
                  }
              }
              return {
                range: iz = zz
              }
            }));
          return iz || bz(uz.update(lz, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !iz
        }
      }];

    function xu(zz, uz) {
      let bz = !1;
      return zz.field(wu).between(0, zz.doc.length, (zz => {
        zz == uz && (bz = !0)
      })), bz
    }

    function Ju(zz, uz) {
      let bz = zz.sliceString(uz, uz + 2);
      return bz.slice(0, (0, Ez.N)((0, Ez.K)(bz, 0)))
    }

    function Au(zz, uz, bz, nz) {
      let iz = null,
        lz = zz.changeByRange((lz => {
          if (!lz.empty) return {
            changes: [{
              insert: uz,
              from: lz.from
            }, {
              insert: bz,
              from: lz.to
            }],
            effects: Ru.of(lz.to + uz.length),
            range: Ez.l.range(lz.anchor + uz.length, lz.head + uz.length)
          };
          let Mz = Ju(zz.doc, lz.head);
          return !Mz || /\s/.test(Mz) || nz.indexOf(Mz) > -1 ? {
            changes: {
              insert: uz + bz,
              from: lz.head
            },
            effects: Ru.of(lz.head + uz.length),
            range: Ez.l.cursor(lz.head + uz.length)
          } : {
            range: iz = lz
          }
        }));
      return iz ? null : zz.update(lz, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Tu(zz, uz, bz) {
      let nz = null,
        iz = zz.changeByRange((uz => uz.empty && Ju(zz.doc, uz.head) == bz ? {
          changes: {
            from: uz.head,
            to: uz.head + bz.length,
            insert: bz
          },
          range: Ez.l.cursor(uz.head + bz.length)
        } : nz = {
          range: uz
        }));
      return nz ? null : zz.update(iz, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Lu(zz, uz, bz, nz) {
      let lz = nz.stringPrefixes || Zu.stringPrefixes,
        Mz = null,
        tz = zz.changeByRange((nz => {
          if (!nz.empty) return {
            changes: [{
              insert: uz,
              from: nz.from
            }, {
              insert: uz,
              from: nz.to
            }],
            effects: Ru.of(nz.to + uz.length),
            range: Ez.l.range(nz.anchor + uz.length, nz.head + uz.length)
          };
          let tz, Hz = nz.head,
            Oz = Ju(zz.doc, Hz);
          if (Oz == uz) {
            if (Pu(zz, Hz)) return {
              changes: {
                insert: uz + uz,
                from: Hz
              },
              effects: Ru.of(Hz + uz.length),
              range: Ez.l.cursor(Hz + uz.length)
            };
            if (xu(zz, Hz)) {
              let nz = bz && zz.sliceDoc(Hz, Hz + 3 * uz.length) == uz + uz + uz ? uz + uz + uz : uz;
              return {
                changes: {
                  from: Hz,
                  to: Hz + nz.length,
                  insert: nz
                },
                range: Ez.l.cursor(Hz + nz.length)
              }
            }
          } else {
            if (bz && zz.sliceDoc(Hz - 2 * uz.length, Hz) == uz + uz && (tz = Gu(zz, Hz - 2 * uz.length, lz)) > -1 && Pu(zz, tz)) return {
              changes: {
                insert: uz + uz + uz + uz,
                from: Hz
              },
              effects: Ru.of(Hz + uz.length),
              range: Ez.l.cursor(Hz + uz.length)
            };
            if (zz.charCategorizer(Hz)(Oz) != Ez.h.Word && Gu(zz, Hz, lz) > -1 && ! function(zz, uz, bz, Ez) {
                let nz = (0, iz.lb)(zz).resolveInner(uz, -1),
                  lz = Ez.reduce(((zz, uz) => Math.max(zz, uz.length)), 0);
                for (let iz = 0; iz < 5; iz++) {
                  let iz = zz.sliceDoc(nz.from, Math.min(nz.to, nz.from + bz.length + lz)),
                    Mz = iz.indexOf(bz);
                  if (!Mz || Mz > -1 && Ez.indexOf(iz.slice(0, Mz)) > -1) {
                    let uz = nz.firstChild;
                    for (; uz && uz.from == nz.from && uz.to - uz.from > bz.length + Mz;) {
                      if (zz.sliceDoc(uz.to - bz.length, uz.to) == bz) return !1;
                      uz = uz.firstChild
                    }
                    return !0
                  }
                  let tz = nz.to == uz && nz.parent;
                  if (!tz) break;
                  nz = tz
                }
                return !1
              }(zz, Hz, uz, lz)) return {
              changes: {
                insert: uz + uz,
                from: Hz
              },
              effects: Ru.of(Hz + uz.length),
              range: Ez.l.cursor(Hz + uz.length)
            }
          }
          return {
            range: Mz = nz
          }
        }));
      return Mz ? null : zz.update(tz, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Pu(zz, uz) {
      let bz = (0, iz.lb)(zz).resolveInner(uz + 1);
      return bz.parent && bz.from == uz
    }

    function Gu(zz, uz, bz) {
      let nz = zz.charCategorizer(uz);
      if (nz(zz.sliceDoc(uz - 1, uz)) != Ez.h.Word) return uz;
      for (let iz of bz) {
        let bz = uz - iz.length;
        if (zz.sliceDoc(bz, uz) == iz && nz(zz.sliceDoc(bz - 1, bz)) != Ez.h.Word) return bz
      }
      return -1
    }

    function au() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Iz, gz, rz.of(zz), ez, mu, Bz]
    }
    const Vu = [{
        key: "Ctrl-Space",
        run: Qz
      }, {
        mac: "Alt-`",
        run: Qz
      }, {
        mac: "Alt-i",
        run: Qz
      }, {
        key: "Escape",
        run: zz => {
          let uz = zz.state.field(gz, !1);
          return !(!uz || !uz.active.some((zz => 0 != zz.state))) && (zz.dispatch({
            effects: Xz.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: Dz(!0)
      }, {
        key: "ArrowUp",
        run: Dz(!1)
      }, {
        key: "PageDown",
        run: Dz(!0, "page")
      }, {
        key: "PageUp",
        run: Dz(!1, "page")
      }, {
        key: "Enter",
        run: zz => {
          let uz = zz.state.field(gz, !1);
          return !(zz.state.readOnly || !uz || !uz.open || uz.open.selected < 0 || uz.open.disabled || Date.now() - uz.open.timestamp < zz.state.facet(rz).interactionDelay) && Sz(zz, uz.open.options[uz.open.selected])
        }
      }],
      mu = Ez.t.highest(nz.Y.computeN([rz], (zz => zz.facet(rz).defaultKeymap ? [Vu] : [])))
  },
  40669: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz,
      d: () => dz,
      e: () => Oz,
      f: () => pz
    });
    var Ez = bz(40531);
    class nz {
      constructor(zz, uz, bz, Ez) {
        this.origin = zz, this.changes = uz, this.effects = bz, this.clientID = Ez
      }
    }
    class iz {
      constructor(zz, uz) {
        this.version = zz, this.unconfirmed = uz
      }
    }
    const lz = Ez.r.define({
        combine(zz) {
          let uz = (0, Ez.Q)(zz, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: zz => zz
          });
          return null == uz.clientID && (uz.clientID = zz.length && zz[0].generatedID || ""), uz
        }
      }),
      Mz = Ez.b.define(),
      tz = Ez.E.define({
        create: zz => new iz(zz.facet(lz).startVersion, []),
        update(zz, uz) {
          let bz = uz.annotation(Mz);
          if (bz) return bz;
          let {
            sharedEffects: Ez,
            clientID: tz
          } = uz.startState.facet(lz), Hz = Ez(uz);
          return Hz.length || !uz.changes.empty ? new iz(zz.version, zz.unconfirmed.concat(new nz(uz, uz.changes, Hz, tz))) : zz
        }
      });

    function Hz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [tz, lz.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, zz))]
    }

    function Oz(zz, uz) {
      let {
        version: bz,
        unconfirmed: Hz
      } = zz.field(tz), {
        clientID: Oz
      } = zz.facet(lz);
      bz += uz.length;
      let pz = [],
        dz = null,
        Fz = 0;
      for (let nz of uz) {
        let zz = Fz < Hz.length ? Hz[Fz] : null;
        zz && zz.clientID == nz.clientID ? (dz && (dz = dz.map(zz.changes, !0)), pz = Ez.B.mapEffects(pz, nz.changes), Fz++) : (pz = Ez.B.mapEffects(pz, nz.changes), nz.effects && (pz = pz.concat(nz.effects)), dz = dz ? dz.compose(nz.changes) : nz.changes)
      }
      if (Fz && (Hz = Hz.slice(Fz)), Hz.length && (dz && (Hz = Hz.map((zz => {
          let uz = zz.changes.map(dz);
          return dz = dz.map(zz.changes, !0), new nz(zz.origin, uz, Ez.B.mapEffects(zz.effects, dz), Oz)
        }))), pz.length)) {
        let zz = Hz.reduce(((zz, uz) => zz.compose(uz.changes)), Ez.ChangeSet.empty(Hz[0].changes.length));
        pz = Ez.B.mapEffects(pz, zz)
      }
      return dz ? zz.update({
        changes: dz,
        effects: pz,
        annotations: [Ez.J.addToHistory.of(!1), Ez.J.remote.of(!0), Mz.of(new iz(bz, Hz))],
        filter: !1
      }) : zz.update({
        annotations: [Mz.of(new iz(bz, Hz))]
      })
    }

    function pz(zz) {
      return zz.field(tz).unconfirmed
    }

    function dz(zz) {
      return zz.field(tz).version
    }
  },
  40569: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ru
    });
    var Ez = bz(40558);
    class nz {
      constructor(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        let Hz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Oz = arguments.length > 10 ? arguments[10] : void 0;
        this.p = zz, this.stack = uz, this.state = bz, this.reducePos = Ez, this.pos = nz, this.score = iz, this.buffer = lz, this.bufferBase = Mz, this.curContext = tz, this.lookAhead = Hz, this.parent = Oz
      }
      toString() {
        return `[${this.stack.filter(((zz,uz)=>uz%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = zz.parser.context;
        return new nz(zz, [], uz, bz, bz, 0, [], 0, Ez ? new iz(Ez, Ez.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(zz, uz) {
        this.stack.push(this.state, uz, this.bufferBase + this.buffer.length), this.state = zz
      }
      reduce(zz) {
        var uz;
        let bz = zz >> 19,
          Ez = 65535 & zz,
          {
            parser: nz
          } = this.p,
          iz = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          lz = nz.dynamicPrecedence(Ez);
        if (lz && (this.score += lz), 0 == bz) return this.pushState(nz.getGoto(this.state, Ez, !0), this.reducePos), Ez < nz.minRepeatTerm && this.storeNode(Ez, this.reducePos, this.reducePos, iz ? 8 : 4, !0), void this.reduceContext(Ez, this.reducePos);
        let Mz = this.stack.length - 3 * (bz - 1) - (262144 & zz ? 6 : 0),
          tz = Mz ? this.stack[Mz - 2] : this.p.al[0].from,
          Hz = this.reducePos - tz;
        Hz >= 2e3 && !(null === (uz = this.p.parser.nodeSet.types[Ez]) || void 0 === uz ? void 0 : uz.isAnonymous) && (tz == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Hz) : this.p.lastBigReductionSize < Hz && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = tz, this.p.lastBigReductionSize = Hz));
        let Oz = Mz ? this.stack[Mz - 1] : 0,
          pz = this.bufferBase + this.buffer.length - Oz;
        if (Ez < nz.minRepeatTerm || 131072 & zz) {
          let zz = nz.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Ez, tz, zz, pz + 4, !0)
        }
        if (262144 & zz) this.state = this.stack[Mz];
        else {
          let zz = this.stack[Mz - 3];
          this.state = nz.getGoto(zz, Ez, !0)
        }
        for (; this.stack.length > Mz;) this.stack.pop();
        this.reduceContext(Ez, tz)
      }
      storeNode(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == zz && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let zz = this,
            Ez = this.buffer.length;
          if (0 == Ez && zz.parent && (Ez = zz.bufferBase - zz.parent.bufferBase, zz = zz.parent), Ez > 0 && 0 == zz.buffer[Ez - 4] && zz.buffer[Ez - 1] > -1) {
            if (uz == bz) return;
            if (zz.buffer[Ez - 2] >= uz) return void(zz.buffer[Ez - 2] = bz)
          }
        }
        if (nz && this.pos != bz) {
          let nz = this.buffer.length;
          if (nz > 0 && (0 != this.buffer[nz - 4] || this.buffer[nz - 1] < 0)) {
            let zz = !1;
            for (let uz = nz; uz > 0 && this.buffer[uz - 2] > bz; uz -= 4)
              if (this.buffer[uz - 1] >= 0) {
                zz = !0;
                break
              } if (zz)
              for (; nz > 0 && this.buffer[nz - 2] > bz;) this.buffer[nz] = this.buffer[nz - 4], this.buffer[nz + 1] = this.buffer[nz - 3], this.buffer[nz + 2] = this.buffer[nz - 2], this.buffer[nz + 3] = this.buffer[nz - 1], nz -= 4, Ez > 4 && (Ez -= 4)
          }
          this.buffer[nz] = zz, this.buffer[nz + 1] = uz, this.buffer[nz + 2] = bz, this.buffer[nz + 3] = Ez
        } else this.buffer.push(zz, uz, bz, Ez)
      }
      shift(zz, uz, bz, Ez) {
        if (131072 & zz) this.pushState(65535 & zz, this.pos);
        else if (0 == (262144 & zz)) {
          let nz = zz,
            {
              parser: iz
            } = this.p;
          this.pos = Ez;
          let lz = iz.stateFlag(nz, 1);
          !lz && (Ez > bz || uz <= iz.maxNode) && (this.reducePos = Ez), this.pushState(nz, lz ? bz : Math.min(bz, this.reducePos)), this.shiftContext(uz, bz), uz <= iz.maxNode && this.buffer.push(uz, bz, Ez, 4)
        } else this.pos = Ez, this.shiftContext(uz, bz), uz <= this.p.parser.maxNode && this.buffer.push(uz, bz, Ez, 4)
      }
      apply(zz, uz, bz, Ez) {
        65536 & zz ? this.reduce(zz) : this.shift(zz, uz, bz, Ez)
      }
      useNode(zz, uz) {
        let bz = this.p.reused.length - 1;
        (bz < 0 || this.p.reused[bz] != zz) && (this.p.reused.push(zz), bz++);
        let Ez = this.pos;
        this.reducePos = this.pos = Ez + zz.length, this.pushState(uz, Ez), this.buffer.push(bz, Ez, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, zz, this, this.p.stream.reset(this.pos - zz.length)))
      }
      split() {
        let zz = this,
          uz = zz.buffer.length;
        for (; uz > 0 && zz.buffer[uz - 2] > zz.reducePos;) uz -= 4;
        let bz = zz.buffer.slice(uz),
          Ez = zz.bufferBase + uz;
        for (; zz && Ez == zz.bufferBase;) zz = zz.parent;
        return new nz(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, bz, Ez, this.curContext, this.lookAhead, zz)
      }
      recoverByDelete(zz, uz) {
        let bz = zz <= this.p.parser.maxNode;
        bz && this.storeNode(zz, this.pos, uz, 4), this.storeNode(0, this.pos, uz, bz ? 8 : 4), this.pos = this.reducePos = uz, this.score -= 190
      }
      canShift(zz) {
        for (let uz = new lz(this);;) {
          let bz = this.p.parser.stateSlot(uz.state, 4) || this.p.parser.hasAction(uz.state, zz);
          if (0 == bz) return !1;
          if (0 == (65536 & bz)) return !0;
          uz.reduce(bz)
        }
      }
      recoverByInsert(zz) {
        if (this.stack.length >= 300) return [];
        let uz = this.p.parser.nextStates(this.state);
        if (uz.length > 8 || this.stack.length >= 120) {
          let bz = [];
          for (let Ez, nz = 0; nz < uz.length; nz += 2)(Ez = uz[nz + 1]) != this.state && this.p.parser.hasAction(Ez, zz) && bz.push(uz[nz], Ez);
          if (this.stack.length < 120)
            for (let zz = 0; bz.length < 8 && zz < uz.length; zz += 2) {
              let Ez = uz[zz + 1];
              bz.some(((zz, uz) => 1 & uz && zz == Ez)) || bz.push(uz[zz], Ez)
            }
          uz = bz
        }
        let bz = [];
        for (let Ez = 0; Ez < uz.length && bz.length < 4; Ez += 2) {
          let zz = uz[Ez + 1];
          if (zz == this.state) continue;
          let nz = this.split();
          nz.pushState(zz, this.pos), nz.storeNode(0, nz.pos, nz.pos, 4, !0), nz.shiftContext(uz[Ez], this.pos), nz.reducePos = this.pos, nz.score -= 200, bz.push(nz)
        }
        return bz
      }
      forceReduce() {
        let {
          parser: zz
        } = this.p, uz = zz.stateSlot(this.state, 5);
        if (0 == (65536 & uz)) return !1;
        if (!zz.validAction(this.state, uz)) {
          let bz = uz >> 19,
            Ez = 65535 & uz,
            nz = this.stack.length - 3 * bz;
          if (nz < 0 || zz.getGoto(this.stack[nz], Ez, !1) < 0) {
            let zz = this.findForcedReduction();
            if (null == zz) return !1;
            uz = zz
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(uz), !0
      }
      findForcedReduction() {
        let {
          parser: zz
        } = this.p, uz = [], bz = (Ez, nz) => {
          if (!uz.includes(Ez)) return uz.push(Ez), zz.allActions(Ez, (uz => {
            if (393216 & uz);
            else if (65536 & uz) {
              let bz = (uz >> 19) - nz;
              if (bz > 1) {
                let Ez = 65535 & uz,
                  nz = this.stack.length - 3 * bz;
                if (nz >= 0 && zz.getGoto(this.stack[nz], Ez, !1) >= 0) return bz << 19 | 65536 | Ez
              }
            } else {
              let zz = bz(uz, nz + 1);
              if (null != zz) return zz
            }
          }))
        };
        return bz(this.state, 0)
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
        for (let uz = 0; uz < this.stack.length; uz += 3)
          if (this.stack[uz] != zz.stack[uz]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(zz) {
        return this.p.parser.dialect.flags[zz]
      }
      shiftContext(zz, uz) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, zz, this, this.p.stream.reset(uz)))
      }
      reduceContext(zz, uz) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, zz, this, this.p.stream.reset(uz)))
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
          let uz = new iz(this.curContext.tracker, zz);
          uz.hash != this.curContext.hash && this.emitContext(), this.curContext = uz
        }
      }
      setLookAhead(zz) {
        return !(zz <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = zz, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class iz {
      constructor(zz, uz) {
        this.tracker = zz, this.context = uz, this.hash = zz.strict ? zz.hash(uz) : 0
      }
    }
    class lz {
      constructor(zz) {
        this.start = zz, this.state = zz.state, this.stack = zz.stack, this.base = this.stack.length
      }
      reduce(zz) {
        let uz = 65535 & zz,
          bz = zz >> 19;
        0 == bz ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (bz - 1);
        let Ez = this.start.p.parser.getGoto(this.stack[this.base - 3], uz, !0);
        this.state = Ez
      }
    }
    class Mz {
      constructor(zz, uz, bz) {
        this.stack = zz, this.pos = uz, this.index = bz, this.buffer = zz.buffer, 0 == this.index && this.maybeNext()
      }
      static create(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.bufferBase + zz.buffer.length;
        return new Mz(zz, uz, uz - zz.bufferBase)
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
        return new Mz(this.stack, this.pos, this.index)
      }
    }

    function tz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof zz) return zz;
      let bz = null;
      for (let Ez = 0, nz = 0; Ez < zz.length;) {
        let iz = 0;
        for (;;) {
          let uz = zz.charCodeAt(Ez++),
            bz = !1;
          if (126 == uz) {
            iz = 65535;
            break
          }
          uz >= 92 && uz--, uz >= 34 && uz--;
          let nz = uz - 32;
          if (nz >= 46 && (nz -= 46, bz = !0), iz += nz, bz) break;
          iz *= 46
        }
        bz ? bz[nz++] = iz : bz = new uz(iz)
      }
      return bz
    }
    class Hz {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const Oz = new Hz;
    class pz {
      constructor(zz, uz) {
        this.input = zz, this.al = uz, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Oz, this.rangeIndex = 0, this.pos = this.chunkPos = uz[0].from, this.range = uz[0], this.end = uz[uz.length - 1].to, this.readNext()
      }
      resolveOffset(zz, uz) {
        let bz = this.range,
          Ez = this.rangeIndex,
          nz = this.pos + zz;
        for (; nz < bz.from;) {
          if (!Ez) return null;
          let zz = this.al[--Ez];
          nz -= bz.from - zz.to, bz = zz
        }
        for (; uz < 0 ? nz > bz.to : nz >= bz.to;) {
          if (Ez == this.al.length - 1) return null;
          let zz = this.al[++Ez];
          nz += zz.from - bz.to, bz = zz
        }
        return nz
      }
      clipPos(zz) {
        if (zz >= this.range.from && zz < this.range.to) return zz;
        for (let uz of this.al)
          if (uz.to > zz) return Math.max(zz, uz.from);
        return this.end
      }
      peek(zz) {
        let uz, bz, Ez = this.chunkOff + zz;
        if (Ez >= 0 && Ez < this.chunk.length) uz = this.pos + zz, bz = this.chunk.charCodeAt(Ez);
        else {
          let Ez = this.resolveOffset(zz, 1);
          if (null == Ez) return -1;
          if (uz = Ez, uz >= this.chunk2Pos && uz < this.chunk2Pos + this.chunk2.length) bz = this.chunk2.charCodeAt(uz - this.chunk2Pos);
          else {
            let zz = this.rangeIndex,
              Ez = this.range;
            for (; Ez.to <= uz;) Ez = this.al[++zz];
            this.chunk2 = this.input.chunk(this.chunk2Pos = uz), uz + this.chunk2.length > Ez.to && (this.chunk2 = this.chunk2.slice(0, Ez.to - uz)), bz = this.chunk2.charCodeAt(0)
          }
        }
        return uz >= this.token.lookAhead && (this.token.lookAhead = uz + 1), bz
      }
      acceptToken(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = uz ? this.resolveOffset(uz, -1) : this.pos;
        if (null == bz || bz < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = zz, this.token.end = bz
      }
      acceptTokenTo(zz, uz) {
        this.token.value = zz, this.token.end = uz
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: zz,
            chunkPos: uz
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = zz, this.chunk2Pos = uz, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let zz = this.input.chunk(this.pos),
            uz = this.pos + zz.length;
          this.chunk = uz > this.range.to ? zz.slice(0, this.range.to - this.pos) : zz, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += zz; this.pos + zz >= this.range.to;) {
          if (this.rangeIndex == this.al.length - 1) return this.setDone();
          zz -= this.range.to - this.pos, this.range = this.al[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += zz, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.al[this.rangeIndex = this.al.length - 1], this.chunk = "", this.next = -1
      }
      reset(zz, uz) {
        if (uz ? (this.token = uz, uz.start = zz, uz.lookAhead = zz + 1, uz.value = uz.extended = -1) : this.token = Oz, this.pos != zz) {
          if (this.pos = zz, zz == this.end) return this.setDone(), this;
          for (; zz < this.range.from;) this.range = this.al[--this.rangeIndex];
          for (; zz >= this.range.to;) this.range = this.al[++this.rangeIndex];
          zz >= this.chunkPos && zz < this.chunkPos + this.chunk.length ? this.chunkOff = zz - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(zz, uz) {
        if (zz >= this.chunkPos && uz <= this.chunkPos + this.chunk.length) return this.chunk.slice(zz - this.chunkPos, uz - this.chunkPos);
        if (zz >= this.chunk2Pos && uz <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(zz - this.chunk2Pos, uz - this.chunk2Pos);
        if (zz >= this.range.from && uz <= this.range.to) return this.input.read(zz, uz);
        let bz = "";
        for (let Ez of this.al) {
          if (Ez.from >= uz) break;
          Ez.to > zz && (bz += this.input.read(Math.max(Ez.from, zz), Math.min(Ez.to, uz)))
        }
        return bz
      }
    }
    class dz {
      constructor(zz, uz) {
        this.data = zz, this.id = uz
      }
      token(zz, uz) {
        let {
          parser: bz
        } = uz.p;
        Rz(this.data, zz, uz, this.id, bz.data, bz.tokenPrecTable)
      }
    }
    dz.prototype.contextual = dz.prototype.fallback = dz.prototype.extend = !1;
    class Fz {
      constructor(zz, uz, bz) {
        this.precTable = uz, this.elseToken = bz, this.data = "string" == typeof zz ? tz(zz) : zz
      }
      token(zz, uz) {
        let bz = zz.pos,
          Ez = 0;
        for (;;) {
          let bz = zz.next < 0,
            nz = zz.resolveOffset(1, 1);
          if (Rz(this.data, zz, uz, 0, this.data, this.precTable), zz.token.value > -1) break;
          if (null == this.elseToken) return;
          if (bz || Ez++, null == nz) break;
          zz.reset(nz, zz.token)
        }
        Ez && (zz.reset(bz, zz.token), zz.acceptToken(this.elseToken, Ez))
      }
    }
    Fz.prototype.contextual = dz.prototype.fallback = dz.prototype.extend = !1;
    class Zz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = zz, this.contextual = !!uz.contextual, this.fallback = !!uz.fallback, this.extend = !!uz.extend
      }
    }

    function Rz(zz, uz, bz, Ez, nz, iz) {
      let lz = 0,
        Mz = 1 << Ez,
        {
          dialect: tz
        } = bz.p.parser;
      zz: for (; 0 != (Mz & zz[lz]);) {
        let bz = zz[lz + 1];
        for (let pz = lz + 3; pz < bz; pz += 2)
          if ((zz[pz + 1] & Mz) > 0) {
            let bz = zz[pz];
            if (tz.allows(bz) && (-1 == uz.token.value || uz.token.value == bz || wz(bz, uz.token.value, nz, iz))) {
              uz.acceptToken(bz);
              break
            }
          } let Ez = uz.next,
          Hz = 0,
          Oz = zz[lz + 2];
        if (!(uz.next < 0 && Oz > Hz && 65535 == zz[bz + 3 * Oz - 3])) {
          for (; Hz < Oz;) {
            let nz = Hz + Oz >> 1,
              iz = bz + nz + (nz << 1),
              Mz = zz[iz],
              tz = zz[iz + 1] || 65536;
            if (Ez < Mz) Oz = nz;
            else {
              if (!(Ez >= tz)) {
                lz = zz[iz + 2], uz.advance();
                continue zz
              }
              Hz = nz + 1
            }
          }
          break
        }
        lz = zz[bz + 3 * Oz - 1]
      }
    }

    function Kz(zz, uz, bz) {
      for (let Ez, nz = uz; 65535 != (Ez = zz[nz]); nz++)
        if (Ez == bz) return nz - uz;
      return -1
    }

    function wz(zz, uz, bz, Ez) {
      let nz = Kz(bz, Ez, uz);
      return nz < 0 || Kz(bz, Ez, zz) < nz
    }
    const Xz = "undefined" != typeof process && {
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
    let fz = null;

    function sz(zz, uz, bz) {
      let nz = zz.cursor(Ez.e.IncludeAnonymous);
      for (nz.moveTo(uz);;)
        if (!(bz < 0 ? nz.childBefore(uz) : nz.childAfter(uz)))
          for (;;) {
            if ((bz < 0 ? nz.to < uz : nz.from > uz) && !nz.type.isError) return bz < 0 ? Math.max(0, Math.min(nz.to - 1, uz - 25)) : Math.min(zz.length, Math.max(nz.from + 1, uz + 25));
            if (bz < 0 ? nz.prevSibling() : nz.nextSibling()) break;
            if (!nz.parent()) return bz < 0 ? 0 : zz.length
          }
    }
    class rz {
      constructor(zz, uz) {
        this.fragments = zz, this.nodeSet = uz, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let zz = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (zz) {
          for (this.safeFrom = zz.openStart ? sz(zz.tree, zz.from + zz.offset, 1) - zz.offset : zz.from, this.safeTo = zz.openEnd ? sz(zz.tree, zz.to + zz.offset, -1) - zz.offset : zz.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(zz.tree), this.start.push(-zz.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(zz) {
        if (zz < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= zz;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let uz = this.trees.length - 1;
          if (uz < 0) return this.nextFragment(), null;
          let bz = this.trees[uz],
            nz = this.index[uz];
          if (nz == bz.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let iz = bz.children[nz],
            lz = this.start[uz] + bz.positions[nz];
          if (lz > zz) return this.nextStart = lz, null;
          if (iz instanceof Ez.x) {
            if (lz == zz) {
              if (lz < this.safeFrom) return null;
              let zz = lz + iz.length;
              if (zz <= this.safeTo) {
                let uz = iz.prop(Ez.g.lookAhead);
                if (!uz || zz + uz < this.fragment.to) return iz
              }
            }
            this.index[uz]++, lz + iz.length >= Math.max(this.safeFrom, zz) && (this.trees.push(iz), this.start.push(lz), this.index.push(0))
          } else this.index[uz]++, this.nextStart = lz + iz.length
        }
      }
    }
    class oz {
      constructor(zz, uz) {
        this.stream = uz, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = zz.tokenizers.map((zz => new Hz))
      }
      getActions(zz) {
        let uz = 0,
          bz = null,
          {
            parser: Ez
          } = zz.p,
          {
            tokenizers: nz
          } = Ez,
          iz = Ez.stateSlot(zz.state, 3),
          lz = zz.curContext ? zz.curContext.hash : 0,
          Mz = 0;
        for (let tz = 0; tz < nz.length; tz++) {
          if (0 == (1 << tz & iz)) continue;
          let Ez = nz[tz],
            Hz = this.tokens[tz];
          if ((!bz || Ez.fallback) && ((Ez.contextual || Hz.start != zz.pos || Hz.mask != iz || Hz.context != lz) && (this.updateCachedToken(Hz, Ez, zz), Hz.mask = iz, Hz.context = lz), Hz.lookAhead > Hz.end + 25 && (Mz = Math.max(Hz.lookAhead, Mz)), 0 != Hz.value)) {
            let nz = uz;
            if (Hz.extended > -1 && (uz = this.addActions(zz, Hz.extended, Hz.end, uz)), uz = this.addActions(zz, Hz.value, Hz.end, uz), !Ez.extend && (bz = Hz, uz > nz)) break
          }
        }
        for (; this.actions.length > uz;) this.actions.pop();
        return Mz && zz.setLookAhead(Mz), bz || zz.pos != this.stream.end || (bz = new Hz, bz.value = zz.p.parser.eofTerm, bz.start = bz.end = zz.pos, uz = this.addActions(zz, bz.value, bz.end, uz)), this.mainToken = bz, this.actions
      }
      getMainToken(zz) {
        if (this.mainToken) return this.mainToken;
        let uz = new Hz,
          {
            pos: bz,
            p: Ez
          } = zz;
        return uz.start = bz, uz.end = Math.min(bz + 1, Ez.stream.end), uz.value = bz == Ez.stream.end ? Ez.parser.eofTerm : 0, uz
      }
      updateCachedToken(zz, uz, bz) {
        let Ez = this.stream.clipPos(bz.pos);
        if (uz.token(this.stream.reset(Ez, zz), bz), zz.value > -1) {
          let {
            parser: uz
          } = bz.p;
          for (let Ez = 0; Ez < uz.specialized.length; Ez++)
            if (uz.specialized[Ez] == zz.value) {
              let nz = uz.specializers[Ez](this.stream.read(zz.start, zz.end), bz);
              if (nz >= 0 && bz.p.parser.dialect.allows(nz >> 1)) {
                0 == (1 & nz) ? zz.value = nz >> 1 : zz.extended = nz >> 1;
                break
              }
            }
        } else zz.value = 0, zz.end = this.stream.clipPos(Ez + 1)
      }
      putAction(zz, uz, bz, Ez) {
        for (let nz = 0; nz < Ez; nz += 3)
          if (this.actions[nz] == zz) return Ez;
        return this.actions[Ez++] = zz, this.actions[Ez++] = uz, this.actions[Ez++] = bz, Ez
      }
      addActions(zz, uz, bz, Ez) {
        let {
          state: nz
        } = zz, {
          parser: iz
        } = zz.p, {
          data: lz
        } = iz;
        for (let Mz = 0; Mz < 2; Mz++)
          for (let zz = iz.stateSlot(nz, Mz ? 2 : 1);; zz += 3) {
            if (65535 == lz[zz]) {
              if (1 != lz[zz + 1]) {
                0 == Ez && 2 == lz[zz + 1] && (Ez = this.putAction(Tz(lz, zz + 2), uz, bz, Ez));
                break
              }
              zz = Tz(lz, zz + 2)
            }
            lz[zz] == uz && (Ez = this.putAction(Tz(lz, zz + 1), uz, bz, Ez))
          }
        return Ez
      }
    }
    class Nz {
      constructor(zz, uz, bz, Ez) {
        this.parser = zz, this.input = uz, this.al = Ez, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new pz(uz, Ez), this.tokens = new oz(zz, this.stream), this.topTerm = zz.top[1];
        let {
          from: iz
        } = Ez[0];
        this.stacks = [nz.start(this, zz.top[0], iz)], this.fragments = bz.length && this.stream.end - iz > 4 * zz.bufferLength ? new rz(bz, zz.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let zz, uz, bz = this.stacks,
          Ez = this.minStackPos,
          nz = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == bz.length) {
          let [zz] = bz;
          for (; zz.forceReduce() && zz.stack.length && zz.stack[zz.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let iz = 0; iz < bz.length; iz++) {
          let lz = bz[iz];
          for (;;) {
            if (this.tokens.mainToken = null, lz.pos > Ez) nz.push(lz);
            else {
              if (this.advanceStack(lz, nz, bz)) continue;
              {
                zz || (zz = [], uz = []), zz.push(lz);
                let bz = this.tokens.getMainToken(lz);
                uz.push(bz.value, bz.end)
              }
            }
            break
          }
        }
        if (!nz.length) {
          let uz = zz && function(zz) {
            let uz = null;
            for (let bz of zz) {
              let zz = bz.p.stoppedAt;
              (bz.pos == bz.p.stream.end || null != zz && bz.pos > zz) && bz.p.parser.stateFlag(bz.state, 2) && (!uz || uz.score < bz.score) && (uz = bz)
            }
            return uz
          }(zz);
          if (uz) return Xz && console.log("Finish with " + this.stackID(uz)), this.stackToTree(uz);
          if (this.parser.strict) throw Xz && zz && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Ez);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && zz) {
          let bz = null != this.stoppedAt && zz[0].pos > this.stoppedAt ? zz[0] : this.runRecovery(zz, uz, nz);
          if (bz) return Xz && console.log("Force-finish " + this.stackID(bz)), this.stackToTree(bz.forceAll())
        }
        if (this.recovering) {
          let zz = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (nz.length > zz)
            for (nz.sort(((zz, uz) => uz.score - zz.score)); nz.length > zz;) nz.pop();
          nz.some((zz => zz.reducePos > Ez)) && this.recovering--
        } else if (nz.length > 1) {
          zz: for (let zz = 0; zz < nz.length - 1; zz++) {
            let uz = nz[zz];
            for (let bz = zz + 1; bz < nz.length; bz++) {
              let Ez = nz[bz];
              if (uz.sameState(Ez) || uz.buffer.length > 500 && Ez.buffer.length > 500) {
                if (!((uz.score - Ez.score || uz.buffer.length - Ez.buffer.length) > 0)) {
                  nz.splice(zz--, 1);
                  continue zz
                }
                nz.splice(bz--, 1)
              }
            }
          }
          nz.length > 12 && (nz.sort(((zz, uz) => uz.score - zz.score)), nz.splice(12, nz.length - 12))
        }
        this.minStackPos = nz[0].pos;
        for (let iz = 1; iz < nz.length; iz++) nz[iz].pos < this.minStackPos && (this.minStackPos = nz[iz].pos);
        return null
      }
      stopAt(zz) {
        if (null != this.stoppedAt && this.stoppedAt < zz) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = zz
      }
      advanceStack(zz, uz, bz) {
        let nz = zz.pos,
          {
            parser: iz
          } = this,
          lz = Xz ? this.stackID(zz) + " -> " : "";
        if (null != this.stoppedAt && nz > this.stoppedAt) return zz.forceReduce() ? zz : null;
        if (this.fragments) {
          let uz = zz.curContext && zz.curContext.tracker.strict,
            bz = uz ? zz.curContext.hash : 0;
          for (let Mz = this.fragments.nodeAt(nz); Mz;) {
            let nz = this.parser.nodeSet.types[Mz.type.id] == Mz.type ? iz.getGoto(zz.state, Mz.type.id) : -1;
            if (nz > -1 && Mz.length && (!uz || (Mz.prop(Ez.g.contextHash) || 0) == bz)) return zz.useNode(Mz, nz), Xz && console.log(lz + this.stackID(zz) + ` (via reuse of ${iz.getName(Mz.type.id)})`), !0;
            if (!(Mz instanceof Ez.x) || 0 == Mz.children.length || Mz.positions[0] > 0) break;
            let tz = Mz.children[0];
            if (!(tz instanceof Ez.x && 0 == Mz.positions[0])) break;
            Mz = tz
          }
        }
        let Mz = iz.stateSlot(zz.state, 4);
        if (Mz > 0) return zz.reduce(Mz), Xz && console.log(lz + this.stackID(zz) + ` (via always-reduce ${iz.getName(65535&Mz)})`), !0;
        if (zz.stack.length >= 8400)
          for (; zz.stack.length > 6e3 && zz.forceReduce(););
        let tz = this.tokens.getActions(zz);
        for (let Ez = 0; Ez < tz.length;) {
          let Mz = tz[Ez++],
            Hz = tz[Ez++],
            Oz = tz[Ez++],
            pz = Ez == tz.length || !bz,
            dz = pz ? zz : zz.split(),
            Fz = this.tokens.mainToken;
          if (dz.apply(Mz, Hz, Fz ? Fz.start : dz.pos, Oz), Xz && console.log(lz + this.stackID(dz) + ` (via ${0==(65536&Mz)?"shift":`reduce of ${iz.getName(65535&Mz)}`} for ${iz.getName(Hz)} @ ${nz}${dz==zz?"":", split"})`), pz) return !0;
          dz.pos > nz ? uz.push(dz) : bz.push(dz)
        }
        return !1
      }
      advanceFully(zz, uz) {
        let bz = zz.pos;
        for (;;) {
          if (!this.advanceStack(zz, null, null)) return !1;
          if (zz.pos > bz) return vz(zz, uz), !0
        }
      }
      runRecovery(zz, uz, bz) {
        let Ez = null,
          nz = !1;
        for (let iz = 0; iz < zz.length; iz++) {
          let lz = zz[iz],
            Mz = uz[iz << 1],
            tz = uz[1 + (iz << 1)],
            Hz = Xz ? this.stackID(lz) + " -> " : "";
          if (lz.deadEnd) {
            if (nz) continue;
            if (nz = !0, lz.restart(), Xz && console.log(Hz + this.stackID(lz) + " (restarted)"), this.advanceFully(lz, bz)) continue
          }
          let Oz = lz.split(),
            pz = Hz;
          for (let zz = 0; zz < 10 && Oz.forceReduce(); zz++) {
            if (Xz && console.log(pz + this.stackID(Oz) + " (via force-reduce)"), this.advanceFully(Oz, bz)) break;
            Xz && (pz = this.stackID(Oz) + " -> ")
          }
          for (let zz of lz.recoverByInsert(Mz)) Xz && console.log(Hz + this.stackID(zz) + " (via recover-insert)"), this.advanceFully(zz, bz);
          this.stream.end > lz.pos ? (tz == lz.pos && (tz++, Mz = 0), lz.recoverByDelete(Mz, tz), Xz && console.log(Hz + this.stackID(lz) + ` (via recover-delete ${this.parser.getName(Mz)})`), vz(lz, bz)) : (!Ez || Ez.score < Oz.score) && (Ez = Oz)
        }
        return Ez
      }
      stackToTree(zz) {
        return zz.close(), Ez.x.build({
          buffer: Mz.create(zz),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.al[0].from,
          length: zz.pos - this.al[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(zz) {
        let uz = (fz || (fz = new WeakMap)).get(zz);
        return uz || fz.set(zz, uz = String.fromCodePoint(this.nextStackID++)), uz + zz
      }
    }

    function vz(zz, uz) {
      for (let bz = 0; bz < uz.length; bz++) {
        let Ez = uz[bz];
        if (Ez.pos == zz.pos && Ez.sameState(zz)) return void(uz[bz].score < zz.score && (uz[bz] = zz))
      }
      uz.push(zz)
    }
    class xz {
      constructor(zz, uz, bz) {
        this.source = zz, this.flags = uz, this.disabled = bz
      }
      allows(zz) {
        return !this.disabled || 0 == this.disabled[zz]
      }
    }
    const Jz = zz => zz;
    class Az extends Ez.r {
      constructor(zz) {
        if (super(), this.wrappers = [], 14 != zz.version) throw new RangeError(`Parser version (${zz.version}) doesn't match runtime version (14)`);
        let uz = zz.nodeNames.split(" ");
        this.minRepeatTerm = uz.length;
        for (let Ez = 0; Ez < zz.repeatNodeCount; Ez++) uz.push("");
        let bz = Object.keys(zz.topRules).map((uz => zz.topRules[uz][1])),
          nz = [];
        for (let Ez = 0; Ez < uz.length; Ez++) nz.push([]);

        function iz(zz, uz, bz) {
          nz[zz].push([uz, uz.deserialize(String(bz))])
        }
        if (zz.nodeProps)
          for (let Mz of zz.nodeProps) {
            let zz = Mz[0];
            "string" == typeof zz && (zz = Ez.g[zz]);
            for (let uz = 1; uz < Mz.length;) {
              let bz = Mz[uz++];
              if (bz >= 0) iz(bz, zz, Mz[uz++]);
              else {
                let Ez = Mz[uz + -bz];
                for (let nz = -bz; nz > 0; nz--) iz(Mz[uz++], zz, Ez);
                uz++
              }
            }
          }
        this.nodeSet = new Ez.k(uz.map(((uz, iz) => Ez.m.define({
          name: iz >= this.minRepeatTerm ? void 0 : uz,
          id: iz,
          props: nz[iz],
          top: bz.indexOf(iz) > -1,
          error: 0 == iz,
          skipped: zz.skippedNodes && zz.skippedNodes.indexOf(iz) > -1
        })))), zz.propSources && (this.nodeSet = this.nodeSet.extend(...zz.propSources)), this.strict = !1, this.bufferLength = Ez.d;
        let lz = tz(zz.tokenData);
        this.context = zz.context, this.specializerSpecs = zz.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Ez = 0; Ez < this.specializerSpecs.length; Ez++) this.specialized[Ez] = this.specializerSpecs[Ez].term;
        this.specializers = this.specializerSpecs.map(Lz), this.states = tz(zz.states, Uint32Array), this.data = tz(zz.stateData), this.goto = tz(zz.goto), this.maxTerm = zz.maxTerm, this.tokenizers = zz.tokenizers.map((zz => "number" == typeof zz ? new dz(lz, zz) : zz)), this.topRules = zz.topRules, this.dialects = zz.dialects || {}, this.dynamicPrecedences = zz.dynamicPrecedences || null, this.tokenPrecTable = zz.tokenPrec, this.termNames = zz.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(zz, uz, bz) {
        let Ez = new Nz(this, zz, uz, bz);
        for (let nz of this.wrappers) Ez = nz(Ez, zz, uz, bz);
        return Ez
      }
      getGoto(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = this.goto;
        if (uz >= Ez[0]) return -1;
        for (let nz = Ez[uz + 1];;) {
          let uz = Ez[nz++],
            iz = 1 & uz,
            lz = Ez[nz++];
          if (iz && bz) return lz;
          for (let bz = nz + (uz >> 1); nz < bz; nz++)
            if (Ez[nz] == zz) return lz;
          if (iz) return -1
        }
      }
      hasAction(zz, uz) {
        let bz = this.data;
        for (let Ez = 0; Ez < 2; Ez++)
          for (let nz, iz = this.stateSlot(zz, Ez ? 2 : 1);; iz += 3) {
            if (65535 == (nz = bz[iz])) {
              if (1 != bz[iz + 1]) {
                if (2 == bz[iz + 1]) return Tz(bz, iz + 2);
                break
              }
              nz = bz[iz = Tz(bz, iz + 2)]
            }
            if (nz == uz || 0 == nz) return Tz(bz, iz + 1)
          }
        return 0
      }
      stateSlot(zz, uz) {
        return this.states[6 * zz + uz]
      }
      stateFlag(zz, uz) {
        return (this.stateSlot(zz, 0) & uz) > 0
      }
      validAction(zz, uz) {
        return !!this.allActions(zz, (zz => zz == uz || null))
      }
      allActions(zz, uz) {
        let bz = this.stateSlot(zz, 4),
          Ez = bz ? uz(bz) : void 0;
        for (let nz = this.stateSlot(zz, 1); null == Ez; nz += 3) {
          if (65535 == this.data[nz]) {
            if (1 != this.data[nz + 1]) break;
            nz = Tz(this.data, nz + 2)
          }
          Ez = uz(Tz(this.data, nz + 1))
        }
        return Ez
      }
      nextStates(zz) {
        let uz = [];
        for (let bz = this.stateSlot(zz, 1);; bz += 3) {
          if (65535 == this.data[bz]) {
            if (1 != this.data[bz + 1]) break;
            bz = Tz(this.data, bz + 2)
          }
          if (0 == (1 & this.data[bz + 2])) {
            let zz = this.data[bz + 1];
            uz.some(((uz, bz) => 1 & bz && uz == zz)) || uz.push(this.data[bz], zz)
          }
        }
        return uz
      }
      configure(zz) {
        let uz = Object.assign(Object.create(Az.prototype), this);
        if (zz.props && (uz.nodeSet = this.nodeSet.extend(...zz.props)), zz.top) {
          let bz = this.topRules[zz.top];
          if (!bz) throw new RangeError(`Invalid top rule name ${zz.top}`);
          uz.top = bz
        }
        return zz.tokenizers && (uz.tokenizers = this.tokenizers.map((uz => {
          let bz = zz.tokenizers.find((zz => zz.from == uz));
          return bz ? bz.to : uz
        }))), zz.specializers && (uz.specializers = this.specializers.slice(), uz.specializerSpecs = this.specializerSpecs.map(((bz, Ez) => {
          let nz = zz.specializers.find((zz => zz.from == bz.external));
          if (!nz) return bz;
          let iz = Object.assign(Object.assign({}, bz), {
            external: nz.to
          });
          return uz.specializers[Ez] = Lz(iz), iz
        }))), zz.contextTracker && (uz.context = zz.contextTracker), zz.dialect && (uz.dialect = this.parseDialect(zz.dialect)), null != zz.strict && (uz.strict = zz.strict), zz.wrap && (uz.wrappers = uz.wrappers.concat(zz.wrap)), null != zz.bufferLength && (uz.bufferLength = zz.bufferLength), uz
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
        let uz = this.dynamicPrecedences;
        return null == uz ? 0 : uz[zz] || 0
      }
      parseDialect(zz) {
        let uz = Object.keys(this.dialects),
          bz = uz.map((() => !1));
        if (zz)
          for (let nz of zz.split(" ")) {
            let zz = uz.indexOf(nz);
            zz >= 0 && (bz[zz] = !0)
          }
        let Ez = null;
        for (let nz = 0; nz < uz.length; nz++)
          if (!bz[nz])
            for (let zz, bz = this.dialects[uz[nz]]; 65535 != (zz = this.data[bz++]);)(Ez || (Ez = new Uint8Array(this.maxTerm + 1)))[zz] = 1;
        return new xz(zz, bz, Ez)
      }
      static deserialize(zz) {
        return new Az(zz)
      }
    }

    function Tz(zz, uz) {
      return zz[uz] | zz[uz + 1] << 16
    }

    function Lz(zz) {
      if (zz.external) {
        let uz = zz.extend ? 1 : 0;
        return (bz, Ez) => zz.external(bz, Ez) << 1 | uz
      }
      return zz.get
    }
    var Pz = bz(40566);
    const Gz = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      az = new class {
        constructor(zz) {
          this.start = zz.start, this.shift = zz.shift || Jz, this.reduce = zz.reduce || Jz, this.reuse = zz.reuse || Jz, this.hash = zz.hash || (() => 0), this.strict = !1 !== zz.strict
        }
      }({
        start: !1,
        shift: (zz, uz) => 5 == uz || 6 == uz || 320 == uz ? zz : 321 == uz,
        strict: !1
      }),
      Vz = new Zz(((zz, uz) => {
        let {
          next: bz
        } = zz;
        (125 == bz || -1 == bz || uz.context) && zz.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      mz = new Zz(((zz, uz) => {
        let bz, {
          next: Ez
        } = zz;
        Gz.indexOf(Ez) > -1 || (47 != Ez || 47 != (bz = zz.peek(1)) && 42 != bz) && (125 == Ez || 59 == Ez || -1 == Ez || uz.context || zz.acceptToken(316))
      }), {
        contextual: !0
      }),
      qz = new Zz(((zz, uz) => {
        91 != zz.next || uz.context || zz.acceptToken(317)
      }), {
        contextual: !0
      }),
      hz = new Zz(((zz, uz) => {
        let {
          next: bz
        } = zz;
        if (43 == bz || 45 == bz) {
          if (zz.advance(), bz == zz.next) {
            zz.advance();
            let bz = !uz.context && uz.canShift(1);
            zz.acceptToken(bz ? 1 : 2)
          }
        } else 63 == bz && 46 == zz.peek(1) && (zz.advance(), zz.advance(), (zz.next < 48 || zz.next > 57) && zz.acceptToken(3))
      }), {
        contextual: !0
      });

    function Uz(zz, uz) {
      return zz >= 65 && zz <= 90 || zz >= 97 && zz <= 122 || 95 == zz || zz >= 192 || !uz && zz >= 48 && zz <= 57
    }
    const cz = new Zz(((zz, uz) => {
        if (60 != zz.next || !uz.dialectEnabled(0)) return;
        if (zz.advance(), 47 == zz.next) return;
        let bz = 0;
        for (; Gz.indexOf(zz.next) > -1;) zz.advance(), bz++;
        if (Uz(zz.next, !0)) {
          for (zz.advance(), bz++; Uz(zz.next, !1);) zz.advance(), bz++;
          for (; Gz.indexOf(zz.next) > -1;) zz.advance(), bz++;
          if (44 == zz.next) return;
          for (let uz = 0;; uz++) {
            if (7 == uz) {
              if (!Uz(zz.next, !0)) return;
              break
            }
            if (zz.next != "extends".charCodeAt(uz)) break;
            zz.advance(), bz++
          }
        }
        zz.acceptToken(4, -bz)
      })),
      gz = (0, Pz.f)({
        "get set async static": Pz.i.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Pz.i.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Pz.i.operatorKeyword,
        "let var const using function class extends": Pz.i.definitionKeyword,
        "import export from": Pz.i.moduleKeyword,
        "with debugger new": Pz.i.keyword,
        TemplateString: Pz.i.special(Pz.i.string),
        super: Pz.i.atom,
        BooleanLiteral: Pz.i.bool,
        this: Pz.i.self,
        null: Pz.i.null,
        Star: Pz.i.modifier,
        VariableName: Pz.i.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Pz.i.function(Pz.i.variableName),
        VariableDefinition: Pz.i.definition(Pz.i.variableName),
        Label: Pz.i.labelName,
        PropertyName: Pz.i.propertyName,
        PrivatePropertyName: Pz.i.special(Pz.i.propertyName),
        "CallExpression/MemberExpression/PropertyName": Pz.i.function(Pz.i.propertyName),
        "FunctionDeclaration/VariableDefinition": Pz.i.function(Pz.i.definition(Pz.i.variableName)),
        "ClassDeclaration/VariableDefinition": Pz.i.definition(Pz.i.className),
        "NewExpression/VariableName": Pz.i.className,
        PropertyDefinition: Pz.i.definition(Pz.i.propertyName),
        PrivatePropertyDefinition: Pz.i.definition(Pz.i.special(Pz.i.propertyName)),
        UpdateOp: Pz.i.updateOperator,
        "LineComment Hashbang": Pz.i.lineComment,
        BlockComment: Pz.i.blockComment,
        Number: Pz.i.number,
        String: Pz.i.string,
        Escape: Pz.i.escape,
        ArithOp: Pz.i.arithmeticOperator,
        LogicOp: Pz.i.logicOperator,
        BitOp: Pz.i.bitwiseOperator,
        CompareOp: Pz.i.compareOperator,
        RegExp: Pz.i.regexp,
        Equals: Pz.i.definitionOperator,
        Arrow: Pz.i.function(Pz.i.punctuation),
        ": Spread": Pz.i.punctuation,
        "( )": Pz.i.paren,
        "[ ]": Pz.i.squareBracket,
        "{ }": Pz.i.brace,
        "InterpolationStart InterpolationEnd": Pz.i.special(Pz.i.brace),
        ".": Pz.i.derefOperator,
        ", ;": Pz.i.separator,
        "@": Pz.i.meta,
        TypeName: Pz.i.typeName,
        TypeDefinition: Pz.i.definition(Pz.i.typeName),
        "type enum interface implements namespace module declare": Pz.i.definitionKeyword,
        "abstract global Privacy readonly override": Pz.i.modifier,
        "is keyof unique infer asserts": Pz.i.operatorKeyword,
        JSXAttributeValue: Pz.i.attributeValue,
        JSXText: Pz.i.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Pz.i.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Pz.i.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Pz.i.attributeName,
        "JSXBuiltin/JSXIdentifier": Pz.i.standard(Pz.i.tagName)
      }),
      Sz = {
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
      yz = {
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
      Dz = {
        __proto__: null,
        "<": 193
      },
      Qz = Az.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: az,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [gz],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [mz, qz, hz, cz, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Vz, new Fz("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new Fz("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: zz => Sz[zz] || -1
        }, {
          term: 343,
          get: zz => yz[zz] || -1
        }, {
          term: 95,
          get: zz => Dz[zz] || -1
        }],
        tokenPrec: 15201
      });
    var Wz = bz(40551),
      ez = bz(40531),
      jz = bz(40538),
      Iz = bz(40524);
    const Bz = [(0, Iz.v)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, Iz.v)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, Iz.v)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, Iz.v)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, Iz.v)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, Iz.v)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, Iz.v)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, Iz.v)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, Iz.v)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, Iz.v)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, Iz.v)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      Cz = Bz.concat([(0, Iz.v)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, Iz.v)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, Iz.v)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      Yz = new Ez.n,
      kz = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function zu(zz) {
      return (uz, bz) => {
        let Ez = uz.node.getChild("VariableDefinition");
        return Ez && bz(Ez, zz), !0
      }
    }
    const uu = ["FunctionDeclaration"],
      bu = {
        FunctionDeclaration: zu("function"),
        ClassDeclaration: zu("class"),
        ClassExpression: () => !0,
        EnumDeclaration: zu("constant"),
        TypeAliasDeclaration: zu("type"),
        NamespaceDeclaration: zu("namespace"),
        VariableDefinition(zz, uz) {
          zz.matchContext(uu) || uz(zz, "variable")
        },
        TypeDefinition(zz, uz) {
          uz(zz, "type")
        },
        __proto__: null
      };

    function Eu(zz, uz) {
      let bz = Yz.get(uz);
      if (bz) return bz;
      let nz = [],
        iz = !0;

      function lz(uz, bz) {
        let Ez = zz.sliceString(uz.from, uz.to);
        nz.push({
          label: Ez,
          type: bz
        })
      }
      return uz.cursor(Ez.e.IncludeAnonymous).iterate((uz => {
        if (iz) iz = !1;
        else if (uz.name) {
          let zz = bu[uz.name];
          if (zz && zz(uz, lz) || kz.has(uz.name)) return !1
        } else if (uz.to - uz.from > 8192) {
          for (let bz of Eu(zz, uz.node)) nz.push(bz);
          return !1
        }
      })), Yz.set(uz, nz), nz
    }
    const nu = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      iu = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function lu(zz) {
      let uz = (0, Wz.lb)(zz.state).resolveInner(zz.pos, -1);
      if (iu.indexOf(uz.name) > -1) return null;
      let bz = "VariableName" == uz.name || uz.to - uz.from < 20 && nu.test(zz.state.sliceDoc(uz.from, uz.to));
      if (!bz && !zz.explicit) return null;
      let Ez = [];
      for (let nz = uz; nz; nz = nz.parent) kz.has(nz.name) && (Ez = Ez.concat(Eu(zz.state.doc, nz)));
      return {
        options: Ez,
        from: bz ? uz.from : zz.pos,
        validFor: nu
      }
    }
    const Mu = Wz.i.define({
        name: "javascript",
        parser: Qz.configure({
          props: [Wz.Q.add({
            IfStatement: (0, Wz.o)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, Wz.o)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: Wz.w,
            SwitchBody: zz => {
              let uz = zz.textAfter,
                bz = /^\s*\}/.test(uz),
                Ez = /^\s*(case|default)\b/.test(uz);
              return zz.baseIndent + (bz ? 0 : Ez ? 1 : 2) * zz.unit
            },
            Block: (0, Wz.v)({
              closing: "}"
            }),
            ArrowFunction: zz => zz.baseIndent + zz.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, Wz.o)({
              except: /^\s*{/
            }),
            JSXElement(zz) {
              let uz = /^\s*<\//.test(zz.textAfter);
              return zz.lineIndent(zz.node.from) + (uz ? 0 : zz.unit)
            },
            JSXEscape(zz) {
              let uz = /\s*\}/.test(zz.textAfter);
              return zz.lineIndent(zz.node.from) + (uz ? 0 : zz.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": zz => zz.column(zz.node.from) + zz.unit
          }), Wz.G.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": Wz.B,
            BlockComment: zz => ({
              from: zz.from + 2,
              to: zz.to - 2
            }),
            JSXElement(zz) {
              let uz = zz.firstChild;
              if (!uz || "JSXSelfClosingTag" == uz.name) return null;
              let bz = zz.lastChild;
              return {
                from: uz.to,
                to: bz.type.isError ? zz.to : bz.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(zz) {
              var uz;
              let bz = null === (uz = zz.firstChild) || void 0 === uz ? void 0 : uz.nextSibling,
                Ez = zz.lastChild;
              return !bz || bz.type.isError ? null : {
                from: bz.to,
                to: Ez.type.isError ? zz.to : Ez.from
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
      tu = {
        test: zz => /^JSX/.test(zz.name),
        facet: (0, Wz.s)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Hu = Mu.configure({
        dialect: "ts"
      }, "typescript"),
      Ou = Mu.configure({
        dialect: "jsx",
        props: [Wz.bb.add((zz => zz.isTop ? [tu] : void 0))]
      }),
      pu = Mu.configure({
        dialect: "jsx ts",
        props: [Wz.bb.add((zz => zz.isTop ? [tu] : void 0))]
      }, "typescript");
    let du = zz => ({
      label: zz,
      type: "keyword"
    });
    const Fu = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(du),
      Zu = Fu.concat(["declare", "implements", "private", "protected", "public"].map(du));

    function Ru() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        uz = zz.jsx ? zz.typescript ? pu : Ou : zz.typescript ? Hu : Mu,
        bz = zz.typescript ? Cz.concat(Zu) : Bz.concat(Fu);
      return new Wz.k(uz, [Mu.data.of({
        autocomplete: (0, Iz.u)(iu, (0, Iz.m)(bz))
      }), Mu.data.of({
        autocomplete: lu
      }), zz.jsx ? Xu : []])
    }

    function Ku(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz.length;
      for (let Ez = null === uz || void 0 === uz ? void 0 : uz.firstChild; Ez; Ez = Ez.nextSibling)
        if ("JSXIdentifier" == Ez.name || "JSXBuiltin" == Ez.name || "JSXNamespacedName" == Ez.name || "JSXMemberExpression" == Ez.name) return zz.sliceString(Ez.from, Math.min(Ez.to, bz));
      return ""
    }
    const wu = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Xu = jz.k.inputHandler.of(((zz, uz, bz, Ez, nz) => {
        if ((wu ? zz.composing : zz.compositionStarted) || zz.state.readOnly || uz != bz || ">" != Ez && "/" != Ez || !Mu.isActiveAt(zz.state, uz, -1)) return !1;
        let iz = nz(),
          {
            state: lz
          } = iz,
          Mz = lz.changeByRange((zz => {
            var uz;
            let bz, {
                head: nz
              } = zz,
              iz = (0, Wz.lb)(lz).resolveInner(nz - 1, -1);
            if ("JSXStartTag" == iz.name && (iz = iz.parent), lz.doc.sliceString(nz - 1, nz) != Ez || "JSXAttributeValue" == iz.name && iz.to > nz);
            else {
              if (">" == Ez && "JSXFragmentTag" == iz.name) return {
                range: zz,
                changes: {
                  from: nz,
                  insert: "</>"
                }
              };
              if ("/" == Ez && "JSXStartCloseTag" == iz.name) {
                let zz = iz.parent,
                  Ez = zz.parent;
                if (Ez && zz.from == nz - 2 && ((bz = Ku(lz.doc, Ez.firstChild, nz)) || "JSXFragmentTag" == (null === (uz = Ez.firstChild) || void 0 === uz ? void 0 : uz.name))) {
                  let zz = `${bz}>`;
                  return {
                    range: ez.l.cursor(nz + zz.length, -1),
                    changes: {
                      from: nz,
                      insert: zz
                    }
                  }
                }
              } else if (">" == Ez) {
                let uz = function(zz) {
                  for (;;) {
                    if ("JSXOpenTag" == zz.name || "JSXSelfClosingTag" == zz.name || "JSXFragmentTag" == zz.name) return zz;
                    if ("JSXEscape" == zz.name || !zz.parent) return null;
                    zz = zz.parent
                  }
                }(iz);
                if (uz && "JSXOpenTag" == uz.name && !/^\/?>|^<\//.test(lz.doc.sliceString(nz, nz + 2)) && (bz = Ku(lz.doc, uz, nz))) return {
                  range: zz,
                  changes: {
                    from: nz,
                    insert: `</${bz}>`
                  }
                }
              }
            }
            return {
              range: zz
            }
          }));
        return !Mz.changes.empty && (zz.dispatch([iz, lz.update(Mz, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40551: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Xu,
      B: () => Bz,
      D: () => Hu,
      G: () => Iz,
      H: () => wz,
      K: () => Pz,
      M: () => az,
      Q: () => mz,
      U: () => ez,
      X: () => Gz,
      Y: () => Lz,
      _: () => yu,
      bb: () => pz,
      d: () => su,
      eb: () => vu,
      f: () => Vz,
      i: () => Zz,
      ib: () => Kz,
      k: () => Az,
      l: () => Uu,
      lb: () => Rz,
      o: () => Qz,
      r: () => Au,
      s: () => Oz,
      v: () => Sz,
      w: () => Dz
    });
    var Ez, nz = bz(40558),
      iz = bz(40531),
      lz = bz(40538),
      Mz = bz(40566),
      tz = bz(40540);
    const Hz = new nz.g;

    function Oz(zz) {
      return iz.r.define({
        combine: zz ? uz => uz.concat(zz) : void 0
      })
    }
    const pz = new nz.g;
    class dz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = zz, this.name = Ez, iz.n.prototype.hasOwnProperty("tree") || Object.defineProperty(iz.n.prototype, "tree", {
          get() {
            return Rz(this)
          }
        }), this.parser = uz, this.extension = [Jz.of(this), iz.n.languageData.of(((zz, uz, bz) => {
          let Ez = Fz(zz, uz, bz),
            nz = Ez.type.prop(Hz);
          if (!nz) return [];
          let iz = zz.facet(nz),
            lz = Ez.type.prop(pz);
          if (lz) {
            let nz = Ez.resolve(uz - Ez.from, bz);
            for (let uz of lz)
              if (uz.test(nz, zz)) {
                let bz = zz.facet(uz.facet);
                return "replace" == uz.type ? bz : bz.concat(iz)
              }
          }
          return iz
        }))].concat(bz)
      }
      isActiveAt(zz, uz) {
        return Fz(zz, uz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Hz) == this.data
      }
      findRegions(zz) {
        let uz = zz.facet(Jz);
        if ((null === uz || void 0 === uz ? void 0 : uz.data) == this.data) return [{
          from: 0,
          to: zz.doc.length
        }];
        if (!uz || !uz.allowsNesting) return [];
        let bz = [],
          Ez = (zz, uz) => {
            if (zz.prop(Hz) == this.data) return void bz.push({
              from: uz,
              to: uz + zz.length
            });
            let iz = zz.prop(nz.g.mounted);
            if (iz) {
              if (iz.tree.prop(Hz) == this.data) {
                if (iz.overlay)
                  for (let zz of iz.overlay) bz.push({
                    from: zz.from + uz,
                    to: zz.to + uz
                  });
                else bz.push({
                  from: uz,
                  to: uz + zz.length
                });
                return
              }
              if (iz.overlay) {
                let zz = bz.length;
                if (Ez(iz.tree, iz.overlay[0].from + uz), bz.length > zz) return
              }
            }
            for (let bz = 0; bz < zz.children.length; bz++) {
              let iz = zz.children[bz];
              iz instanceof nz.x && Ez(iz, zz.positions[bz] + uz)
            }
          };
        return Ez(Rz(zz), 0), bz
      }
      get allowsNesting() {
        return !0
      }
    }

    function Fz(zz, uz, bz) {
      let Ez = zz.facet(Jz),
        iz = Rz(zz).topNode;
      if (!Ez || Ez.allowsNesting)
        for (let lz = iz; lz; lz = lz.enter(uz, bz, nz.e.ExcludeBuffers | nz.e.EnterBracketed)) lz.type.isTop && (iz = lz);
      return iz
    }
    dz.setState = iz.B.define();
    class Zz extends dz {
      constructor(zz, uz, bz) {
        super(zz, uz, [], bz), this.parser = uz
      }
      static define(zz) {
        let uz = Oz(zz.languageData);
        return new Zz(uz, zz.parser.configure({
          props: [Hz.add((zz => zz.isTop ? uz : void 0))]
        }), zz.name)
      }
      configure(zz, uz) {
        return new Zz(this.data, this.parser.configure(zz), uz || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Rz(zz) {
      let uz = zz.field(dz.state, !1);
      return uz ? uz.tree : nz.x.empty
    }

    function Kz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.doc.length;
      var bz;
      return (null === (bz = zz.field(dz.state, !1)) || void 0 === bz ? void 0 : bz.context.isDone(uz)) || !1
    }

    function wz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.viewport.to,
        bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Ez = function(zz, uz) {
          let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Ez;
          let nz = null === (Ez = zz.field(dz.state, !1)) || void 0 === Ez ? void 0 : Ez.context;
          if (!nz) return null;
          let iz = nz.viewport;
          nz.updateViewport({
            from: 0,
            to: uz
          });
          let lz = nz.isDone(uz) || nz.work(bz, uz) ? nz.tree : null;
          return nz.updateViewport(iz), lz
        }(zz.state, uz, bz);
      return Ez != Rz(zz.state) && zz.dispatch({}), !!Ez
    }
    class Xz {
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
      read(zz, uz) {
        let bz = this.cursorPos - this.string.length;
        return zz < bz || uz >= this.cursorPos ? this.doc.sliceString(zz, uz) : this.string.slice(zz - bz, uz - bz)
      }
    }
    let fz = null;
    class sz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Ez = arguments.length > 3 ? arguments[3] : void 0,
          nz = arguments.length > 4 ? arguments[4] : void 0,
          iz = arguments.length > 5 ? arguments[5] : void 0,
          lz = arguments.length > 6 ? arguments[6] : void 0,
          Mz = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = zz, this.state = uz, this.fragments = bz, this.tree = Ez, this.treeLen = nz, this.viewport = iz, this.skipped = lz, this.scheduleOn = Mz, this.parse = null, this.tempSkipped = []
      }
      static create(zz, uz, bz) {
        return new sz(zz, uz, [], nz.x.empty, 0, bz, [], null)
      }
      startParse() {
        return this.parser.startParse(new Xz(this.state.doc), this.fragments)
      }
      work(zz, uz) {
        return null != uz && uz >= this.state.doc.length && (uz = void 0), this.tree != nz.x.empty && this.isDone(null !== uz && void 0 !== uz ? uz : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var bz;
          if ("number" == typeof zz) {
            let uz = Date.now() + zz;
            zz = () => Date.now() > uz
          }
          for (this.parse || (this.parse = this.startParse()), null != uz && (null == this.parse.stoppedAt || this.parse.stoppedAt > uz) && uz < this.state.doc.length && this.parse.stopAt(uz);;) {
            let Ez = this.parse.advance();
            if (Ez) {
              if (this.fragments = this.withoutTempSkipped(nz.v.addTree(Ez, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (bz = this.parse.stoppedAt) && void 0 !== bz ? bz : this.state.doc.length, this.tree = Ez, this.parse = null, !(this.treeLen < (null !== uz && void 0 !== uz ? uz : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (zz()) return !1
          }
        }))
      }
      takeTree() {
        let zz, uz;
        this.parse && (zz = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > zz) && this.parse.stopAt(zz), this.withContext((() => {
          for (; !(uz = this.parse.advance()););
        })), this.treeLen = zz, this.tree = uz, this.fragments = this.withoutTempSkipped(nz.v.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(zz) {
        let uz = fz;
        fz = this;
        try {
          return zz()
        } finally {
          fz = uz
        }
      }
      withoutTempSkipped(zz) {
        for (let uz; uz = this.tempSkipped.pop();) zz = rz(zz, uz.from, uz.to);
        return zz
      }
      changes(zz, uz) {
        let {
          fragments: bz,
          tree: Ez,
          treeLen: iz,
          viewport: lz,
          skipped: Mz
        } = this;
        if (this.takeTree(), !zz.empty) {
          let uz = [];
          if (zz.iterChangedRanges(((zz, bz, Ez, nz) => uz.push({
              fromA: zz,
              toA: bz,
              fromB: Ez,
              toB: nz
            }))), bz = nz.v.applyChanges(bz, uz), Ez = nz.x.empty, iz = 0, lz = {
              from: zz.mapPos(lz.from, -1),
              to: zz.mapPos(lz.to, 1)
            }, this.skipped.length) {
            Mz = [];
            for (let uz of this.skipped) {
              let bz = zz.mapPos(uz.from, 1),
                Ez = zz.mapPos(uz.to, -1);
              bz < Ez && Mz.push({
                from: bz,
                to: Ez
              })
            }
          }
        }
        return new sz(this.parser, uz, bz, Ez, iz, lz, Mz, this.scheduleOn)
      }
      updateViewport(zz) {
        if (this.viewport.from == zz.from && this.viewport.to == zz.to) return !1;
        this.viewport = zz;
        let uz = this.skipped.length;
        for (let bz = 0; bz < this.skipped.length; bz++) {
          let {
            from: uz,
            to: Ez
          } = this.skipped[bz];
          uz < zz.to && Ez > zz.from && (this.fragments = rz(this.fragments, uz, Ez), this.skipped.splice(bz--, 1))
        }
        return !(this.skipped.length >= uz) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(zz, uz) {
        this.skipped.push({
          from: zz,
          to: uz
        })
      }
      static getSkippingParser(zz) {
        return new class extends nz.r {
          createParse(uz, bz, Ez) {
            let iz = Ez[0].from,
              lz = Ez[Ez.length - 1].to;
            return {
              parsedPos: iz,
              advance() {
                let uz = fz;
                if (uz) {
                  for (let zz of Ez) uz.tempSkipped.push(zz);
                  zz && (uz.scheduleOn = uz.scheduleOn ? Promise.all([uz.scheduleOn, zz]) : zz)
                }
                return this.parsedPos = lz, new nz.x(nz.m.none, [], [], lz - iz)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(zz) {
        zz = Math.min(zz, this.state.doc.length);
        let uz = this.fragments;
        return this.treeLen >= zz && uz.length && 0 == uz[0].from && uz[0].to >= zz
      }
      static get() {
        return fz
      }
    }

    function rz(zz, uz, bz) {
      return nz.v.applyChanges(zz, [{
        fromA: uz,
        toA: bz,
        fromB: uz,
        toB: bz
      }])
    }
    class oz {
      constructor(zz) {
        this.context = zz, this.tree = zz.tree
      }
      apply(zz) {
        if (!zz.docChanged && this.tree == this.context.tree) return this;
        let uz = this.context.changes(zz.changes, zz.state),
          bz = this.context.treeLen == zz.startState.doc.length ? void 0 : Math.max(zz.changes.mapPos(this.context.treeLen), uz.viewport.to);
        return uz.work(20, bz) || uz.takeTree(), new oz(uz)
      }
      static init(zz) {
        let uz = Math.min(3e3, zz.doc.length),
          bz = sz.create(zz.facet(Jz).parser, zz, {
            from: 0,
            to: uz
          });
        return bz.work(20, uz) || bz.takeTree(), new oz(bz)
      }
    }
    dz.state = iz.E.define({
      create: oz.init,
      update(zz, uz) {
        for (let bz of uz.effects)
          if (bz.is(dz.setState)) return bz.value;
        return uz.startState.facet(Jz) != uz.state.facet(Jz) ? oz.init(uz.state) : zz.apply(uz)
      }
    });
    let Nz = zz => {
      let uz = setTimeout((() => zz()), 500);
      return () => clearTimeout(uz)
    };
    "undefined" != typeof requestIdleCallback && (Nz = zz => {
      let uz = -1,
        bz = setTimeout((() => {
          uz = requestIdleCallback(zz, {
            timeout: 400
          })
        }), 100);
      return () => uz < 0 ? clearTimeout(bz) : cancelIdleCallback(uz)
    });
    const vz = "undefined" != typeof navigator && (null === (Ez = navigator.scheduling) || void 0 === Ez ? void 0 : Ez.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      xz = lz.p.fromClass(class {
        constructor(zz) {
          this.view = zz, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(zz) {
          let uz = this.view.state.field(dz.state).context;
          (uz.updateViewport(zz.view.viewport) || this.view.viewport.to > uz.treeLen) && this.scheduleWork(), (zz.docChanged || zz.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(uz)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: zz
          } = this.view, uz = zz.field(dz.state);
          uz.tree == uz.context.tree && uz.context.isDone(zz.doc.length) || (this.working = Nz(this.work))
        }
        work(zz) {
          this.working = null;
          let uz = Date.now();
          if (this.chunkEnd < uz && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = uz + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: bz,
            viewport: {
              to: Ez
            }
          } = this.view, nz = bz.field(dz.state);
          if (nz.tree == nz.context.tree && nz.context.isDone(Ez + 1e5)) return;
          let iz = Date.now() + Math.min(this.chunkBudget, 100, zz && !vz ? Math.max(25, zz.timeRemaining() - 5) : 1e9),
            lz = nz.context.treeLen < Ez && bz.doc.length > Ez + 1e3,
            Mz = nz.context.work((() => vz && vz() || Date.now() > iz), Ez + (lz ? 0 : 1e5));
          this.chunkBudget -= Date.now() - uz, (Mz || this.chunkBudget <= 0) && (nz.context.takeTree(), this.view.dispatch({
            effects: dz.setState.of(new oz(nz.context))
          })), this.chunkBudget > 0 && (!Mz || lz) && this.scheduleWork(), this.checkAsyncSchedule(nz.context)
        }
        checkAsyncSchedule(zz) {
          zz.scheduleOn && (this.workScheduled++, zz.scheduleOn.then((() => this.scheduleWork())).catch((zz => (0, lz.db)(this.view.state, zz))).then((() => this.workScheduled--)), zz.scheduleOn = null)
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
      Jz = iz.r.define({
        combine: zz => zz.length ? zz[0] : null,
        enables: zz => [dz.state, xz, lz.k.contentAttributes.compute([zz], (uz => {
          let bz = uz.facet(zz);
          return bz && bz.name ? {
            "data-language": bz.name
          } : {}
        }))]
      });
    class Az {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = zz, this.support = uz, this.extension = [zz, uz]
      }
    }
    const Tz = iz.r.define(),
      Lz = iz.r.define({
        combine: zz => {
          if (!zz.length) return "  ";
          let uz = zz[0];
          if (!uz || /\S/.test(uz) || Array.from(uz).some((zz => zz != uz[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(zz[0]));
          return uz
        }
      });

    function Pz(zz) {
      let uz = zz.facet(Lz);
      return 9 == uz.charCodeAt(0) ? zz.tabSize * uz.length : uz.length
    }

    function Gz(zz, uz) {
      let bz = "",
        Ez = zz.tabSize,
        nz = zz.facet(Lz)[0];
      if ("\t" == nz) {
        for (; uz >= Ez;) bz += "\t", uz -= Ez;
        nz = " "
      }
      for (let iz = 0; iz < uz; iz++) bz += nz;
      return bz
    }

    function az(zz, uz) {
      zz instanceof iz.n && (zz = new Vz(zz));
      for (let Ez of zz.state.facet(Tz)) {
        let bz = Ez(zz, uz);
        if (void 0 !== bz) return bz
      }
      let bz = Rz(zz.state);
      return bz.length >= uz ? function(zz, uz, bz) {
        let Ez = uz.resolveStack(bz),
          nz = uz.resolveInner(bz, -1).resolve(bz, 0).enterUnfinishedNodesBefore(bz);
        if (nz != Ez.node) {
          let zz = [];
          for (let uz = nz; uz && !(uz.from < Ez.node.from || uz.to > Ez.node.to || uz.from == Ez.node.from && uz.type == Ez.node.type); uz = uz.parent) zz.push(uz);
          for (let uz = zz.length - 1; uz >= 0; uz--) Ez = {
            node: zz[uz],
            next: Ez
          }
        }
        return qz(Ez, zz, bz)
      }(zz, bz, uz) : null
    }
    class Vz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = zz, this.options = uz, this.unit = Pz(zz)
      }
      lineAt(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          bz = this.state.doc.lineAt(zz),
          {
            simulateBreak: Ez,
            simulateDoubleBreak: nz
          } = this.options;
        return null != Ez && Ez >= bz.from && Ez <= bz.to ? nz && Ez == zz ? {
          text: "",
          from: zz
        } : (uz < 0 ? Ez < zz : Ez <= zz) ? {
          text: bz.text.slice(Ez - bz.from),
          from: Ez
        } : {
          text: bz.text.slice(0, Ez - bz.from),
          from: bz.from
        } : bz
      }
      textAfterPos(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && zz == this.options.simulateBreak) return "";
        let {
          text: bz,
          from: Ez
        } = this.lineAt(zz, uz);
        return bz.slice(zz - Ez, Math.min(bz.length, zz + 100 - Ez))
      }
      column(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: bz,
            from: Ez
          } = this.lineAt(zz, uz),
          nz = this.countColumn(bz, zz - Ez),
          iz = this.options.overrideIndentation ? this.options.overrideIndentation(Ez) : -1;
        return iz > -1 && (nz += iz - this.countColumn(bz, bz.search(/\S|$/))), nz
      }
      countColumn(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.length;
        return (0, iz.R)(zz, this.state.tabSize, uz)
      }
      lineIndent(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: bz,
            from: Ez
          } = this.lineAt(zz, uz),
          nz = this.options.overrideIndentation;
        if (nz) {
          let zz = nz(Ez);
          if (zz > -1) return zz
        }
        return this.countColumn(bz, bz.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const mz = new nz.g;

    function qz(zz, uz, bz) {
      for (let Ez = zz; Ez; Ez = Ez.next) {
        let zz = hz(Ez.node);
        if (zz) return zz(cz.create(uz, bz, Ez))
      }
      return 0
    }

    function hz(zz) {
      let uz = zz.type.prop(mz);
      if (uz) return uz;
      let bz, Ez = zz.firstChild;
      if (Ez && (bz = Ez.type.prop(nz.g.closedBy))) {
        let uz = zz.lastChild,
          Ez = uz && bz.indexOf(uz.name) > -1;
        return zz => yz(zz, !0, 1, void 0, Ez && ! function(zz) {
          return zz.pos == zz.options.simulateBreak && zz.options.simulateDoubleBreak
        }(zz) ? uz.from : void 0)
      }
      return null == zz.parent ? Uz : null
    }

    function Uz() {
      return 0
    }
    class cz extends Vz {
      constructor(zz, uz, bz) {
        super(zz.state, zz.options), this.base = zz, this.pos = uz, this.context = bz
      }
      get node() {
        return this.context.node
      }
      static create(zz, uz, bz) {
        return new cz(zz, uz, bz)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(zz) {
        let uz = this.state.doc.lineAt(zz.from);
        for (;;) {
          let bz = zz.resolve(uz.from);
          for (; bz.parent && bz.parent.from == bz.from;) bz = bz.parent;
          if (gz(bz, zz)) break;
          uz = this.state.doc.lineAt(bz.from)
        }
        return this.lineIndent(uz.from)
      }
      continue () {
        return qz(this.context.next, this.base, this.pos)
      }
    }

    function gz(zz, uz) {
      for (let bz = uz; bz; bz = bz.parent)
        if (zz == bz) return !0;
      return !1
    }

    function Sz(zz) {
      let {
        closing: uz,
        align: bz = !0,
        units: Ez = 1
      } = zz;
      return zz => yz(zz, bz, Ez, uz)
    }

    function yz(zz, uz, bz, Ez, nz) {
      let iz = zz.textAfter,
        lz = iz.match(/^\s*/)[0].length,
        Mz = Ez && iz.slice(lz, lz + Ez.length) == Ez || nz == zz.pos + lz,
        tz = uz ? function(zz) {
          let uz = zz.node,
            bz = uz.childAfter(uz.from),
            Ez = uz.lastChild;
          if (!bz) return null;
          let nz = zz.options.simulateBreak,
            iz = zz.state.doc.lineAt(bz.from),
            lz = null == nz || nz <= iz.from ? iz.to : Math.min(iz.to, nz);
          for (let Mz = bz.to;;) {
            let zz = uz.childAfter(Mz);
            if (!zz || zz == Ez) return null;
            if (!zz.type.isSkipped) {
              if (zz.from >= lz) return null;
              let uz = /^ */.exec(iz.text.slice(bz.to - iz.from))[0].length;
              return {
                from: bz.from,
                to: bz.to + uz
              }
            }
            Mz = zz.to
          }
        }(zz) : null;
      return tz ? Mz ? zz.column(tz.from) : zz.column(tz.to) : zz.baseIndent + (Mz ? 0 : zz.unit * bz)
    }
    const Dz = zz => zz.baseIndent;

    function Qz() {
      let {
        except: zz,
        units: uz = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return bz => {
        let Ez = zz && zz.test(bz.textAfter);
        return bz.baseIndent + (Ez ? 0 : uz * bz.unit)
      }
    }
    const Wz = 200;

    function ez() {
      return iz.n.transactionFilter.of((zz => {
        if (!zz.docChanged || !zz.isUserEvent("input.type") && !zz.isUserEvent("input.complete")) return zz;
        let uz = zz.startState.languageDataAt("indentOnInput", zz.startState.selection.main.head);
        if (!uz.length) return zz;
        let bz = zz.newDoc,
          {
            head: Ez
          } = zz.newSelection.main,
          nz = bz.lineAt(Ez);
        if (Ez > nz.from + Wz) return zz;
        let iz = bz.sliceString(nz.from, Ez);
        if (!uz.some((zz => zz.test(iz)))) return zz;
        let {
          state: lz
        } = zz, Mz = -1, tz = [];
        for (let {
            head: Hz
          }
          of lz.selection.al) {
          let zz = lz.doc.lineAt(Hz);
          if (zz.from == Mz) continue;
          Mz = zz.from;
          let uz = az(lz, zz.from);
          if (null == uz) continue;
          let bz = /^\s*/.exec(zz.text)[0],
            Ez = Gz(lz, uz);
          bz != Ez && tz.push({
            from: zz.from,
            to: zz.from + bz.length,
            insert: Ez
          })
        }
        return tz.length ? [zz, {
          changes: tz,
          sequential: !0
        }] : zz
      }))
    }
    const jz = iz.r.define(),
      Iz = new nz.g;

    function Bz(zz) {
      let uz = zz.firstChild,
        bz = zz.lastChild;
      return uz && uz.to < bz.from ? {
        from: uz.to,
        to: bz.type.isError ? zz.to : bz.from
      } : null
    }

    function Cz(zz) {
      let uz = zz.lastChild;
      return uz && uz.to == zz.to && uz.type.isError
    }

    function Yz(zz, uz, bz) {
      for (let Ez of zz.facet(jz)) {
        let nz = Ez(zz, uz, bz);
        if (nz) return nz
      }
      return function(zz, uz, bz) {
        let Ez = Rz(zz);
        if (Ez.length < bz) return null;
        let nz = null;
        for (let iz = Ez.resolveStack(bz, 1); iz; iz = iz.next) {
          let lz = iz.node;
          if (lz.to <= bz || lz.from > bz) continue;
          if (nz && lz.from < uz) break;
          let Mz = lz.type.prop(Iz);
          if (Mz && (lz.to < Ez.length - 50 || Ez.length == zz.doc.length || !Cz(lz))) {
            let Ez = Mz(lz, zz);
            Ez && Ez.from <= bz && Ez.from >= uz && Ez.to > bz && (nz = Ez)
          }
        }
        return nz
      }(zz, uz, bz)
    }

    function kz(zz, uz) {
      let bz = uz.mapPos(zz.from, 1),
        Ez = uz.mapPos(zz.to, -1);
      return bz >= Ez ? void 0 : {
        from: bz,
        to: Ez
      }
    }
    const zu = iz.B.define({
        map: kz
      }),
      uu = iz.B.define({
        map: kz
      });

    function bu(zz) {
      let uz = [];
      for (let {
          head: bz
        }
        of zz.state.selection.al) uz.some((zz => zz.from <= bz && zz.to >= bz)) || uz.push(zz.lineBlockAt(bz));
      return uz
    }
    const Eu = iz.E.define({
      create: () => lz.e.none,
      update(zz, uz) {
        uz.isUserEvent("delete") && uz.changes.iterChangedRanges(((uz, bz) => zz = nu(zz, uz, bz))), zz = zz.map(uz.changes);
        for (let bz of uz.effects)
          if (bz.is(zu) && !lu(zz, bz.value.from, bz.value.to)) {
            let {
              preparePlaceholder: Ez
            } = uz.state.facet(pu), nz = Ez ? lz.e.replace({
              widget: new Ru(Ez(uz.state, bz.value))
            }) : Zu;
            zz = zz.update({
              add: [nz.range(bz.value.from, bz.value.to)]
            })
          } else bz.is(uu) && (zz = zz.update({
            filter: (zz, uz) => bz.value.from != zz || bz.value.to != uz,
            filterFrom: bz.value.from,
            filterTo: bz.value.to
          }));
        return uz.selection && (zz = nu(zz, uz.selection.main.head)), zz
      },
      provide: zz => lz.k.cE.from(zz),
      toJSON(zz, uz) {
        let bz = [];
        return zz.between(0, uz.doc.length, ((zz, uz) => {
          bz.push(zz, uz)
        })), bz
      },
      fromJSON(zz) {
        if (!Array.isArray(zz) || zz.length % 2) throw new RangeError("Invalid JSON for fold state");
        let uz = [];
        for (let bz = 0; bz < zz.length;) {
          let Ez = zz[bz++],
            nz = zz[bz++];
          if ("number" != typeof Ez || "number" != typeof nz) throw new RangeError("Invalid JSON for fold state");
          uz.push(Zu.range(Ez, nz))
        }
        return lz.e.set(uz, !0)
      }
    });

    function nu(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uz,
        Ez = !1;
      return zz.between(uz, bz, ((zz, nz) => {
        zz < bz && nz > uz && (Ez = !0)
      })), Ez ? zz.update({
        filterFrom: uz,
        filterTo: bz,
        filter: (zz, Ez) => zz >= bz || Ez <= uz
      }) : zz
    }

    function iu(zz, uz, bz) {
      var Ez;
      let nz = null;
      return null === (Ez = zz.field(Eu, !1)) || void 0 === Ez || Ez.between(uz, bz, ((zz, uz) => {
        (!nz || nz.from > zz) && (nz = {
          from: zz,
          to: uz
        })
      })), nz
    }

    function lu(zz, uz, bz) {
      let Ez = !1;
      return zz.between(uz, uz, ((zz, nz) => {
        zz == uz && nz == bz && (Ez = !0)
      })), Ez
    }

    function Mu(zz, uz) {
      return zz.field(Eu, !1) ? uz : uz.concat(iz.B.appendConfig.of(du()))
    }

    function tu(zz, uz) {
      let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Ez = zz.state.doc.lineAt(uz.from).number,
        nz = zz.state.doc.lineAt(uz.to).number;
      return lz.k.announce.of(`${zz.state.phrase(bz?"Folded lines":"Unfolded lines")} ${Ez} ${zz.state.phrase("to")} ${nz}.`)
    }
    const Hu = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: zz => {
          for (let uz of bu(zz)) {
            let bz = Yz(zz.state, uz.from, uz.to);
            if (bz) return zz.dispatch({
              effects: Mu(zz.state, [zu.of(bz), tu(zz, bz)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: zz => {
          if (!zz.state.field(Eu, !1)) return !1;
          let uz = [];
          for (let bz of bu(zz)) {
            let Ez = iu(zz.state, bz.from, bz.to);
            Ez && uz.push(uu.of(Ez), tu(zz, Ez, !1))
          }
          return uz.length && zz.dispatch({
            effects: uz
          }), uz.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: zz => {
          let {
            state: uz
          } = zz, bz = [];
          for (let Ez = 0; Ez < uz.doc.length;) {
            let nz = zz.lineBlockAt(Ez),
              iz = Yz(uz, nz.from, nz.to);
            iz && bz.push(zu.of(iz)), Ez = (iz ? zz.lineBlockAt(iz.to) : nz).to + 1
          }
          return bz.length && zz.dispatch({
            effects: Mu(zz.state, bz)
          }), !!bz.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: zz => {
          let uz = zz.state.field(Eu, !1);
          if (!uz || !uz.size) return !1;
          let bz = [];
          return uz.between(0, zz.state.doc.length, ((zz, uz) => {
            bz.push(uu.of({
              from: zz,
              to: uz
            }))
          })), zz.dispatch({
            effects: bz
          }), !0
        }
      }],
      Ou = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      pu = iz.r.define({
        combine: zz => (0, iz.Q)(zz, Ou)
      });

    function du(zz) {
      let uz = [Eu, fu];
      return zz && uz.push(pu.of(zz)), uz
    }

    function Fu(zz, uz) {
      let {
        state: bz
      } = zz, Ez = bz.facet(pu), nz = uz => {
        let bz = zz.lineBlockAt(zz.posAtDOM(uz.target)),
          Ez = iu(zz.state, bz.from, bz.to);
        Ez && zz.dispatch({
          effects: uu.of(Ez)
        }), uz.preventDefault()
      };
      if (Ez.placeholderDOM) return Ez.placeholderDOM(zz, nz, uz);
      let iz = document.createElement("span");
      return iz.textContent = Ez.placeholderText, iz.setAttribute("aria-label", bz.phrase("folded code")), iz.title = bz.phrase("unfold"), iz.className = "cm-foldPlaceholder", iz.onclick = nz, iz
    }
    const Zu = lz.e.replace({
      widget: new class extends lz.t {
        toDOM(zz) {
          return Fu(zz, null)
        }
      }
    });
    class Ru extends lz.t {
      constructor(zz) {
        super(), this.value = zz
      }
      eq(zz) {
        return this.value == zz.value
      }
      toDOM(zz) {
        return Fu(zz, this.value)
      }
    }
    const Ku = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class wu extends lz.o {
      constructor(zz, uz) {
        super(), this.config = zz, this.open = uz
      }
      eq(zz) {
        return this.config == zz.config && this.open == zz.open
      }
      toDOM(zz) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let uz = document.createElement("span");
        return uz.textContent = this.open ? this.config.openText : this.config.closedText, uz.title = zz.state.phrase(this.open ? "Fold line" : "Unfold line"), uz
      }
    }

    function Xu() {
      let zz = {
          ...Ku,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        uz = new wu(zz, !0),
        bz = new wu(zz, !1),
        Ez = lz.p.fromClass(class {
          constructor(zz) {
            this.from = zz.viewport.from, this.markers = this.buildMarkers(zz)
          }
          update(uz) {
            (uz.docChanged || uz.viewportChanged || uz.startState.facet(Jz) != uz.state.facet(Jz) || uz.startState.field(Eu, !1) != uz.state.field(Eu, !1) || Rz(uz.startState) != Rz(uz.state) || zz.foldingChanged(uz)) && (this.markers = this.buildMarkers(uz.view))
          }
          buildMarkers(zz) {
            let Ez = new iz.u;
            for (let nz of zz.viewportLineBlocks) {
              let iz = iu(zz.state, nz.from, nz.to) ? bz : Yz(zz.state, nz.from, nz.to) ? uz : null;
              iz && Ez.add(nz.from, nz.from, iz)
            }
            return Ez.finish()
          }
        }),
        {
          domEventHandlers: nz
        } = zz;
      return [Ez, (0, lz.J)({
        class: "cm-foldGutter",
        markers(zz) {
          var uz;
          return (null === (uz = zz.plugin(Ez)) || void 0 === uz ? void 0 : uz.markers) || iz.x.empty
        },
        initialSpacer: () => new wu(zz, !1),
        domEventHandlers: {
          ...nz,
          click: (zz, uz, bz) => {
            if (nz.click && nz.click(zz, uz, bz)) return !0;
            let Ez = iu(zz.state, uz.from, uz.to);
            if (Ez) return zz.dispatch({
              effects: uu.of(Ez)
            }), !0;
            let iz = Yz(zz.state, uz.from, uz.to);
            return !!iz && (zz.dispatch({
              effects: zu.of(iz)
            }), !0)
          }
        }
      }), du()]
    }
    const fu = lz.k.baseTheme({
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
    class su {
      constructor(zz, uz) {
        let bz;

        function Ez(zz) {
          let uz = tz.e.newName();
          return (bz || (bz = Object.create(null)))["." + uz] = zz, uz
        }
        this.specs = zz;
        const nz = "string" == typeof uz.all ? uz.all : uz.all ? Ez(uz.all) : void 0,
          iz = uz.scope;
        this.scope = iz instanceof dz ? zz => zz.prop(Hz) == iz.data : iz ? zz => zz == iz : void 0, this.style = (0, Mz.g)(zz.map((zz => ({
          tag: zz.tag,
          class: zz.class || Ez(Object.assign({}, zz, {
            tag: null
          }))
        }))), {
          all: nz
        }).style, this.module = bz ? new tz.e(bz) : null, this.themeType = uz.themeType
      }
      static define(zz, uz) {
        return new su(zz, uz || {})
      }
    }
    const ru = iz.r.define(),
      ou = iz.r.define({
        combine: zz => zz.length ? [zz[0]] : null
      });

    function Nu(zz) {
      let uz = zz.facet(ru);
      return uz.length ? uz : zz.facet(ou)
    }

    function vu(zz, uz) {
      let bz, Ez = [Ju];
      return zz instanceof su && (zz.module && Ez.push(lz.k.styleModule.of(zz.module)), bz = zz.themeType), (null === uz || void 0 === uz ? void 0 : uz.fallback) ? Ez.push(ou.of(zz)) : bz ? Ez.push(ru.computeN([lz.k.darkTheme], (uz => uz.facet(lz.k.darkTheme) == ("dark" == bz) ? [zz] : []))) : Ez.push(ru.of(zz)), Ez
    }
    class xu {
      constructor(zz) {
        this.markCache = Object.create(null), this.tree = Rz(zz.state), this.cE = this.buildDeco(zz, Nu(zz.state)), this.decoratedTo = zz.viewport.to
      }
      update(zz) {
        let uz = Rz(zz.state),
          bz = Nu(zz.state),
          Ez = bz != Nu(zz.startState),
          {
            viewport: nz
          } = zz.view,
          iz = zz.changes.mapPos(this.decoratedTo, 1);
        uz.length < nz.to && !Ez && uz.type == this.tree.type && iz >= nz.to ? (this.cE = this.cE.map(zz.changes), this.decoratedTo = iz) : (uz != this.tree || zz.viewportChanged || Ez) && (this.tree = uz, this.cE = this.buildDeco(zz.view, bz), this.decoratedTo = nz.to)
      }
      buildDeco(zz, uz) {
        if (!uz || !this.tree.length) return lz.e.none;
        let bz = new iz.u;
        for (let {
            from: Ez,
            to: nz
          }
          of zz.o_)(0, Mz.b)(this.tree, uz, ((zz, uz, Ez) => {
          bz.add(zz, uz, this.markCache[Ez] || (this.markCache[Ez] = lz.e.mark({
            class: Ez
          })))
        }), Ez, nz);
        return bz.finish()
      }
    }
    const Ju = iz.t.high(lz.p.fromClass(xu, {
        cE: zz => zz.cE
      })),
      Au = su.define([{
        tag: Mz.i.meta,
        color: "#404740"
      }, {
        tag: Mz.i.link,
        textDecoration: "underline"
      }, {
        tag: Mz.i.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: Mz.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: Mz.i.strong,
        fontWeight: "bold"
      }, {
        tag: Mz.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Mz.i.keyword,
        color: "#708"
      }, {
        tag: [Mz.i.atom, Mz.i.bool, Mz.i.url, Mz.i.contentSeparator, Mz.i.labelName],
        color: "#219"
      }, {
        tag: [Mz.i.literal, Mz.i.inserted],
        color: "#164"
      }, {
        tag: [Mz.i.string, Mz.i.deleted],
        color: "#a11"
      }, {
        tag: [Mz.i.regexp, Mz.i.escape, Mz.i.special(Mz.i.string)],
        color: "#e40"
      }, {
        tag: Mz.i.definition(Mz.i.variableName),
        color: "#00f"
      }, {
        tag: Mz.i.local(Mz.i.variableName),
        color: "#30a"
      }, {
        tag: [Mz.i.typeName, Mz.i.namespace],
        color: "#085"
      }, {
        tag: Mz.i.className,
        color: "#167"
      }, {
        tag: [Mz.i.special(Mz.i.variableName), Mz.i.macroName],
        color: "#256"
      }, {
        tag: Mz.i.definition(Mz.i.propertyName),
        color: "#00c"
      }, {
        tag: Mz.i.comment,
        color: "#940"
      }, {
        tag: Mz.i.invalid,
        color: "#f00"
      }]),
      Tu = lz.k.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Lu = 1e4,
      Pu = "()[]{}",
      Gu = iz.r.define({
        combine: zz => (0, iz.Q)(zz, {
          afterCursor: !0,
          brackets: Pu,
          maxScanDistance: Lu,
          renderMatch: mu
        })
      }),
      au = lz.e.mark({
        class: "cm-matchingBracket"
      }),
      Vu = lz.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function mu(zz) {
      let uz = [],
        bz = zz.matched ? au : Vu;
      return uz.push(bz.range(zz.start.from, zz.start.to)), zz.end && uz.push(bz.range(zz.end.from, zz.end.to)), uz
    }

    function qu(zz) {
      let uz = [],
        bz = zz.facet(Gu);
      for (let Ez of zz.selection.al) {
        if (!Ez.empty) continue;
        let nz = yu(zz, Ez.head, -1, bz) || Ez.head > 0 && yu(zz, Ez.head - 1, 1, bz) || bz.afterCursor && (yu(zz, Ez.head, 1, bz) || Ez.head < zz.doc.length && yu(zz, Ez.head + 1, -1, bz));
        nz && (uz = uz.concat(bz.renderMatch(nz, zz)))
      }
      return lz.e.set(uz, !0)
    }
    const hu = [lz.p.fromClass(class {
      constructor(zz) {
        this.paused = !1, this.cE = qu(zz.state)
      }
      update(zz) {
        (zz.docChanged || zz.selectionSet || this.paused) && (zz.view.composing ? (this.cE = this.cE.map(zz.changes), this.paused = !0) : (this.cE = qu(zz.state), this.paused = !1))
      }
    }, {
      cE: zz => zz.cE
    }), Tu];

    function Uu() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Gu.of(zz), hu]
    }
    const cu = new nz.g;

    function gu(zz, uz, bz) {
      let Ez = zz.prop(uz < 0 ? nz.g.openedBy : nz.g.closedBy);
      if (Ez) return Ez;
      if (1 == zz.name.length) {
        let Ez = bz.indexOf(zz.name);
        if (Ez > -1 && Ez % 2 == (uz < 0 ? 1 : 0)) return [bz[Ez + uz]]
      }
      return null
    }

    function Su(zz) {
      let uz = zz.type.prop(cu);
      return uz ? uz(zz.node) : zz
    }

    function yu(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        nz = Ez.maxScanDistance || Lu,
        iz = Ez.brackets || Pu,
        lz = Rz(zz),
        Mz = lz.resolveInner(uz, bz);
      for (let tz = Mz; tz; tz = tz.parent) {
        let Ez = gu(tz.type, bz, iz);
        if (Ez && tz.from < tz.to) {
          let nz = Su(tz);
          if (nz && (bz > 0 ? uz >= nz.from && uz < nz.to : uz > nz.from && uz <= nz.to)) return Du(zz, uz, bz, tz, nz, Ez, iz)
        }
      }
      return function(zz, uz, bz, Ez, nz, iz, lz) {
        if (bz < 0 ? !uz : uz == zz.doc.length) return null;
        let Mz = bz < 0 ? zz.sliceDoc(uz - 1, uz) : zz.sliceDoc(uz, uz + 1),
          tz = lz.indexOf(Mz);
        if (tz < 0 || tz % 2 == 0 != bz > 0) return null;
        let Hz = {
            from: bz < 0 ? uz - 1 : uz,
            to: bz > 0 ? uz + 1 : uz
          },
          Oz = zz.doc.iterRange(uz, bz > 0 ? zz.doc.length : 0),
          pz = 0;
        for (let dz = 0; !Oz.next().done && dz <= iz;) {
          let zz = Oz.value;
          bz < 0 && (dz += zz.length);
          let iz = uz + dz * bz;
          for (let uz = bz > 0 ? 0 : zz.length - 1, Mz = bz > 0 ? zz.length : -1; uz != Mz; uz += bz) {
            let Mz = lz.indexOf(zz[uz]);
            if (!(Mz < 0 || Ez.resolveInner(iz + uz, 1).type != nz))
              if (Mz % 2 == 0 == bz > 0) pz++;
              else {
                if (1 == pz) return {
                  start: Hz,
                  end: {
                    from: iz + uz,
                    to: iz + uz + 1
                  },
                  matched: Mz >> 1 == tz >> 1
                };
                pz--
              }
          }
          bz > 0 && (dz += zz.length)
        }
        return Oz.done ? {
          start: Hz,
          matched: !1
        } : null
      }(zz, uz, bz, lz, Mz.type, nz, iz)
    }

    function Du(zz, uz, bz, Ez, nz, iz, lz) {
      let Mz = Ez.parent,
        tz = {
          from: nz.from,
          to: nz.to
        },
        Hz = 0,
        Oz = null === Mz || void 0 === Mz ? void 0 : Mz.cursor();
      if (Oz && (bz < 0 ? Oz.childBefore(Ez.from) : Oz.childAfter(Ez.to)))
        do {
          if (bz < 0 ? Oz.to <= Ez.from : Oz.from >= Ez.to) {
            if (0 == Hz && iz.indexOf(Oz.type.name) > -1 && Oz.from < Oz.to) {
              let zz = Su(Oz);
              return {
                start: tz,
                end: zz ? {
                  from: zz.from,
                  to: zz.to
                } : void 0,
                matched: !0
              }
            }
            if (gu(Oz.type, bz, lz)) Hz++;
            else if (gu(Oz.type, -bz, lz)) {
              if (0 == Hz) {
                let zz = Su(Oz);
                return {
                  start: tz,
                  end: zz && zz.from < zz.to ? {
                    from: zz.from,
                    to: zz.to
                  } : void 0,
                  matched: !1
                }
              }
              Hz--
            }
          }
        } while (bz < 0 ? Oz.prevSibling() : Oz.nextSibling());
      return {
        start: tz,
        matched: !1
      }
    }
    const Qu = Object.create(null),
      Wu = [nz.m.none],
      eu = [],
      ju = Object.create(null),
      Iu = Object.create(null);
    for (let [Yu, ku] of [
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
      ]) Iu[Yu] = Cu(Qu, ku);

    function Bu(zz, uz) {
      eu.indexOf(zz) > -1 || (eu.push(zz), console.warn(uz))
    }

    function Cu(zz, uz) {
      let bz = [];
      for (let nz of uz.split(" ")) {
        let uz = [];
        for (let bz of nz.split(".")) {
          let Ez = zz[bz] || Mz.i[bz];
          Ez ? "function" == typeof Ez ? uz.length ? uz = uz.map(Ez) : Bu(bz, `Modifier ${bz} used at start of tag`) : uz.length ? Bu(bz, `Tag ${bz} used as modifier`) : uz = Array.isArray(Ez) ? Ez : [Ez] : Bu(bz, `Unknown highlighting tag ${bz}`)
        }
        for (let zz of uz) bz.push(zz)
      }
      if (!bz.length) return 0;
      let Ez = uz.replace(/ /g, "_"),
        iz = Ez + " " + bz.map((zz => zz.id)),
        lz = ju[iz];
      if (lz) return lz.id;
      let tz = ju[iz] = nz.m.define({
        id: Wu.length,
        name: Ez,
        props: [(0, Mz.f)({
          [Ez]: bz
        })]
      });
      return Wu.push(tz), tz.id
    }
    lz.h.RTL, lz.h.LTR
  },
  40590: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => fz,
      i: () => Nz
    });
    var Ez = bz(40538),
      nz = bz(40531),
      iz = bz(40544);
    class lz {
      constructor(zz, uz, bz) {
        this.from = zz, this.to = uz, this.diagnostic = bz
      }
    }
    class Mz {
      constructor(zz, uz, bz) {
        this.diagnostics = zz, this.panel = uz, this.selected = bz
      }
      static init(zz, uz, bz) {
        let iz = bz.facet(rz).markerFilter;
        iz && (zz = iz(zz, bz));
        let lz = zz.slice().sort(((zz, uz) => zz.from - uz.from || zz.to - uz.to)),
          Hz = new nz.u,
          Oz = [],
          pz = 0,
          dz = bz.doc.iter(),
          Fz = 0,
          Zz = bz.doc.length;
        for (let nz = 0;;) {
          let zz, uz, bz = nz == lz.length ? null : lz[nz];
          if (!bz && !Oz.length) break;
          if (Oz.length) zz = pz, uz = Oz.reduce(((zz, uz) => Math.min(zz, uz.to)), bz && bz.from > zz ? bz.from : 1e8);
          else {
            if (zz = bz.from, zz > Zz) break;
            uz = bz.to, Oz.push(bz), nz++
          }
          for (; nz < lz.length;) {
            let bz = lz[nz];
            if (bz.from != zz || !(bz.to > bz.from || bz.to == zz)) {
              uz = Math.min(bz.from, uz);
              break
            }
            Oz.push(bz), nz++, uz = Math.min(bz.to, uz)
          }
          uz = Math.min(uz, Zz);
          let iz = !1;
          if (Oz.some((bz => bz.from == zz && (bz.to == uz || uz == Zz))) && (iz = zz == uz, !iz && uz - zz < 10)) {
            let bz = zz - (Fz + dz.value.length);
            bz > 0 && (dz.next(bz), Fz = zz);
            for (let Ez = zz;;) {
              if (Ez >= uz) {
                iz = !0;
                break
              }
              if (!dz.lineBreak && Fz + dz.value.length > Ez) break;
              Ez = Fz + dz.value.length, Fz += dz.value.length, dz.next()
            }
          }
          let Mz = Vz(Oz);
          if (iz) Hz.add(zz, zz, Ez.e.widget({
            widget: new Jz(Mz),
            diagnostics: Oz.slice()
          }));
          else {
            let bz = Oz.reduce(((zz, uz) => uz.markClass ? zz + " " + uz.markClass : zz), "");
            Hz.add(zz, uz, Ez.e.mark({
              class: "cm-lintRange cm-lintRange-" + Mz + bz,
              diagnostics: Oz.slice(),
              inclusiveEnd: Oz.some((zz => zz.to > uz))
            }))
          }
          if (pz = uz, pz == Zz) break;
          for (let Ez = 0; Ez < Oz.length; Ez++) Oz[Ez].to <= pz && Oz.splice(Ez--, 1)
        }
        let Rz = Hz.finish();
        return new Mz(Rz, uz, tz(Rz))
      }
    }

    function tz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ez = null;
      return zz.between(bz, 1e9, ((zz, bz, nz) => {
        let {
          spec: iz
        } = nz;
        if (!(uz && iz.diagnostics.indexOf(uz) < 0))
          if (Ez) {
            if (iz.diagnostics.indexOf(Ez.diagnostic) < 0) return !1;
            Ez = new lz(Ez.from, bz, Ez.diagnostic)
          } else Ez = new lz(zz, bz, uz || iz.diagnostics[0])
      })), Ez
    }

    function Hz(zz, uz) {
      let bz = uz.pos,
        Ez = uz.end || bz,
        nz = zz.state.facet(rz).hideOn(zz, bz, Ez);
      if (null != nz) return nz;
      let iz = zz.startState.doc.lineAt(uz.pos);
      return !(!zz.effects.some((zz => zz.is(pz))) && !zz.changes.touchesRange(iz.from, Math.max(iz.to, Ez)))
    }

    function Oz(zz, uz) {
      return zz.field(Zz, !1) ? uz : uz.concat(nz.B.appendConfig.of(mz))
    }
    const pz = nz.B.define(),
      dz = nz.B.define(),
      Fz = nz.B.define(),
      Zz = nz.E.define({
        create: () => new Mz(Ez.e.none, null, null),
        update(zz, uz) {
          if (uz.docChanged && zz.diagnostics.size) {
            let bz = zz.diagnostics.map(uz.changes),
              Ez = null,
              nz = zz.panel;
            if (zz.selected) {
              let nz = uz.changes.mapPos(zz.selected.from, 1);
              Ez = tz(bz, zz.selected.diagnostic, nz) || tz(bz, null, nz)
            }!bz.size && nz && uz.state.facet(rz).autoPanel && (nz = null), zz = new Mz(bz, nz, Ez)
          }
          for (let bz of uz.effects)
            if (bz.is(pz)) {
              let Ez = uz.state.facet(rz).autoPanel ? bz.value.length ? Tz.open : null : zz.panel;
              zz = Mz.init(bz.value, Ez, uz.state)
            } else bz.is(dz) ? zz = new Mz(zz.diagnostics, bz.value ? Tz.open : null, zz.selected) : bz.is(Fz) && (zz = new Mz(zz.diagnostics, zz.panel, bz.value));
          return zz
        },
        provide: zz => [Ez.pb.from(zz, (zz => zz.panel)), Ez.k.cE.from(zz, (zz => zz.diagnostics))]
      });
    const Rz = Ez.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function Kz(zz, uz, bz) {
      let Ez, {
          diagnostics: nz
        } = zz.state.field(Zz),
        iz = -1,
        lz = -1;
      nz.between(uz - (bz < 0 ? 1 : 0), uz + (bz > 0 ? 1 : 0), ((zz, nz, Mz) => {
        let {
          spec: tz
        } = Mz;
        if (uz >= zz && uz <= nz && (zz == nz || (uz > zz || bz > 0) && (uz < nz || bz < 0))) return Ez = tz.diagnostics, iz = zz, lz = nz, !1
      }));
      let Mz = zz.state.facet(rz).tooltipFilter;
      return Ez && Mz && (Ez = Mz(Ez, zz.state)), Ez ? {
        pos: iz,
        end: lz,
        above: zz.state.doc.lineAt(iz).to < lz,
        create: () => ({
          dom: wz(zz, Ez)
        })
      } : null
    }

    function wz(zz, uz) {
      return (0, iz.b)("ul", {
        class: "cm-tooltip-lint"
      }, uz.map((uz => xz(zz, uz, !1))))
    }
    const Xz = zz => {
        let uz = zz.state.field(Zz, !1);
        return !(!uz || !uz.panel) && (zz.dispatch({
          effects: dz.of(!1)
        }), !0)
      },
      fz = [{
        key: "Mod-Shift-m",
        run: zz => {
          let uz = zz.state.field(Zz, !1);
          uz && uz.panel || zz.dispatch({
            effects: Oz(zz.state, [dz.of(!0)])
          });
          let bz = (0, Ez.F)(zz, Tz.open);
          return bz && bz.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: zz => {
          let uz = zz.state.field(Zz, !1);
          if (!uz) return !1;
          let bz = zz.state.selection.main,
            Ez = tz(uz.diagnostics, null, bz.to + 1);
          return !(!Ez && (Ez = tz(uz.diagnostics, null, 0), !Ez || Ez.from == bz.from && Ez.to == bz.to)) && (zz.dispatch({
            selection: {
              anchor: Ez.from,
              head: Ez.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      sz = Ez.p.fromClass(class {
        constructor(zz) {
          this.view = zz, this.timeout = -1, this.set = !0;
          let {
            delay: uz
          } = zz.state.facet(rz);
          this.lintTime = Date.now() + uz, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, uz)
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
              sources: uz
            } = zz.facet(rz);
            uz.length && function(zz, uz, bz) {
              let Ez = [],
                nz = -1;
              for (let iz of zz) iz.then((bz => {
                Ez.push(bz), clearTimeout(nz), Ez.length == zz.length ? uz(Ez) : nz = setTimeout((() => uz(Ez)), 200)
              }), bz)
            }(uz.map((zz => Promise.resolve(zz(this.view)))), (uz => {
              this.view.state.doc == zz.doc && this.view.dispatch(function(zz, uz) {
                return {
                  effects: Oz(zz, [pz.of(uz)])
                }
              }(this.view.state, uz.reduce(((zz, uz) => zz.concat(uz)))))
            }), (zz => {
              (0, Ez.db)(this.view.state, zz)
            }))
          }
        }
        update(zz) {
          let uz = zz.state.facet(rz);
          (zz.docChanged || uz != zz.startState.facet(rz) || uz.needsRefresh && uz.needsRefresh(zz)) && (this.lintTime = Date.now() + uz.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, uz.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const rz = nz.r.define({
      combine: zz => ({
        sources: zz.map((zz => zz.source)).filter((zz => null != zz)),
        ...(0, nz.Q)(zz.map((zz => zz.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: oz,
          tooltipFilter: oz,
          needsRefresh: (zz, uz) => zz ? uz ? bz => zz(bz) || uz(bz) : zz : uz,
          hideOn: (zz, uz) => zz ? uz ? (bz, Ez, nz) => zz(bz, Ez, nz) || uz(bz, Ez, nz) : zz : uz,
          autoPanel: (zz, uz) => zz || uz
        })
      })
    });

    function oz(zz, uz) {
      return zz ? uz ? (bz, Ez) => uz(zz(bz, Ez), Ez) : zz : uz
    }

    function Nz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [rz.of({
        source: zz,
        config: uz
      }), sz, mz]
    }

    function vz(zz) {
      let uz = [];
      if (zz) zz: for (let {
          name: bz
        }
        of zz) {
        for (let zz = 0; zz < bz.length; zz++) {
          let Ez = bz[zz];
          if (/[a-zA-Z]/.test(Ez) && !uz.some((zz => zz.toLowerCase() == Ez.toLowerCase()))) {
            uz.push(Ez);
            continue zz
          }
        }
        uz.push("")
      }
      return uz
    }

    function xz(zz, uz, bz) {
      var Ez;
      let nz = bz ? vz(uz.actions) : [];
      return (0, iz.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + uz.severity
      }, (0, iz.b)("span", {
        class: "cm-diagnosticText"
      }, uz.renderMessage ? uz.renderMessage(zz) : uz.message), null === (Ez = uz.actions) || void 0 === Ez ? void 0 : Ez.map(((bz, Ez) => {
        let lz = !1,
          Mz = Ez => {
            if (Ez.preventDefault(), lz) return;
            lz = !0;
            let nz = tz(zz.state.field(Zz).diagnostics, uz);
            nz && bz.apply(zz, nz.from, nz.to)
          },
          {
            name: Hz
          } = bz,
          Oz = nz[Ez] ? Hz.indexOf(nz[Ez]) : -1,
          pz = Oz < 0 ? Hz : [Hz.slice(0, Oz), (0, iz.b)("u", Hz.slice(Oz, Oz + 1)), Hz.slice(Oz + 1)],
          dz = bz.markClass ? " " + bz.markClass : "";
        return (0, iz.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + dz,
          onclick: Mz,
          onmousedown: Mz,
          "aria-label": ` Action: ${Hz}${Oz<0?"":` (access key "${nz[Ez]})"`}.`
        }, pz)
      })), uz.source && (0, iz.b)("div", {
        class: "cm-diagnosticSource"
      }, uz.source))
    }
    class Jz extends Ez.t {
      constructor(zz) {
        super(), this.sev = zz
      }
      eq(zz) {
        return zz.sev == this.sev
      }
      toDOM() {
        return (0, iz.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Az {
      constructor(zz, uz) {
        this.diagnostic = uz, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = xz(zz, uz, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class Tz {
      constructor(zz) {
        this.view = zz, this.items = [];
        this.list = (0, iz.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: uz => {
            if (!(uz.ctrlKey || uz.altKey || uz.metaKey)) {
              if (27 == uz.keyCode) Xz(this.view), this.view.focus();
              else if (38 == uz.keyCode || 33 == uz.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == uz.keyCode || 34 == uz.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == uz.keyCode) this.moveSelection(0);
              else if (35 == uz.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == uz.keyCode) this.view.focus();
              else {
                if (!(uz.keyCode >= 65 && uz.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: bz
                  } = this.items[this.selectedIndex], Ez = vz(bz.actions);
                  for (let nz = 0; nz < Ez.length; nz++)
                    if (Ez[nz].toUpperCase().charCodeAt(0) == uz.keyCode) {
                      let uz = tz(this.view.state.field(Zz).diagnostics, bz);
                      uz && bz.actions[nz].apply(zz, uz.from, uz.to)
                    }
                }
              }
              uz.preventDefault()
            }
          },
          onclick: zz => {
            for (let uz = 0; uz < this.items.length; uz++) this.items[uz].dom.contains(zz.target) && this.moveSelection(uz)
          }
        }), this.dom = (0, iz.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, iz.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => Xz(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let zz = this.view.state.field(Zz).selected;
        if (!zz) return -1;
        for (let uz = 0; uz < this.items.length; uz++)
          if (this.items[uz].diagnostic == zz.diagnostic) return uz;
        return -1
      }
      update() {
        let {
          diagnostics: zz,
          selected: uz
        } = this.view.state.field(Zz), bz = 0, Ez = !1, nz = null, iz = new Set;
        for (zz.between(0, this.view.state.doc.length, ((zz, lz, Mz) => {
            let {
              spec: tz
            } = Mz;
            for (let Hz of tz.diagnostics) {
              if (iz.has(Hz)) continue;
              iz.add(Hz);
              let zz, lz = -1;
              for (let uz = bz; uz < this.items.length; uz++)
                if (this.items[uz].diagnostic == Hz) {
                  lz = uz;
                  break
                } lz < 0 ? (zz = new Az(this.view, Hz), this.items.splice(bz, 0, zz), Ez = !0) : (zz = this.items[lz], lz > bz && (this.items.splice(bz, lz - bz), Ez = !0)), uz && zz.diagnostic == uz.diagnostic ? zz.dom.hasAttribute("aria-selected") || (zz.dom.setAttribute("aria-selected", "true"), nz = zz) : zz.dom.hasAttribute("aria-selected") && zz.dom.removeAttribute("aria-selected"), bz++
            }
          })); bz < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Ez = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Az(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Ez = !0), nz ? (this.list.setAttribute("aria-activedescendant", nz.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: nz.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: zz => {
            let {
              sel: uz,
              panel: bz
            } = zz, Ez = bz.height / this.list.offsetHeight;
            uz.top < bz.top ? this.list.scrollTop -= (bz.top - uz.top) / Ez : uz.bottom > bz.bottom && (this.list.scrollTop += (uz.bottom - bz.bottom) / Ez)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Ez && this.sync()
      }
      sync() {
        let zz = this.list.firstChild;

        function uz() {
          let uz = zz;
          zz = uz.nextSibling, uz.remove()
        }
        for (let bz of this.items)
          if (bz.dom.parentNode == this.list) {
            for (; zz != bz.dom;) uz();
            zz = bz.dom.nextSibling
          } else this.list.insertBefore(bz.dom, zz);
        for (; zz;) uz()
      }
      moveSelection(zz) {
        if (this.selectedIndex < 0) return;
        let uz = tz(this.view.state.field(Zz).diagnostics, this.items[zz].diagnostic);
        uz && this.view.dispatch({
          selection: {
            anchor: uz.from,
            head: uz.to
          },
          scrollIntoView: !0,
          effects: Fz.of(uz)
        })
      }
      static open(zz) {
        return new Tz(zz)
      }
    }

    function Lz(zz) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(zz)}</svg>')`
    }

    function Pz(zz) {
      return Lz(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${zz}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Gz = Ez.k.baseTheme({
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
        backgroundImage: Pz("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Pz("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Pz("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Pz("#66d")
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

    function az(zz) {
      return "error" == zz ? 4 : "warning" == zz ? 3 : "info" == zz ? 2 : 1
    }

    function Vz(zz) {
      let uz = "hint",
        bz = 1;
      for (let Ez of zz) {
        let zz = az(Ez.severity);
        zz > bz && (bz = zz, uz = Ez.severity)
      }
      return uz
    }
    Ez.o;
    const mz = [Zz, Ez.k.cE.compute([Zz], (zz => {
      let {
        selected: uz,
        panel: bz
      } = zz.field(Zz);
      return uz && bz && uz.from != uz.to ? Ez.e.set([Rz.range(uz.from, uz.to)]) : Ez.e.none
    })), (0, Ez.V)(Kz, {
      hideOn: Hz
    }), Gz]
  },
  40582: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Yz,
      e: () => wz,
      g: () => kz
    });
    var Ez = bz(40538),
      nz = bz(40531),
      iz = bz(40544);
    const lz = "function" == typeof String.prototype.normalize ? zz => zz.normalize("NFKD") : zz => zz;
    class Mz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.length,
          nz = arguments.length > 4 ? arguments[4] : void 0,
          iz = arguments.length > 5 ? arguments[5] : void 0;
        this.test = iz, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = zz.iterRange(bz, Ez), this.bufferStart = bz, this.normalize = nz ? zz => nz(lz(zz)) : lz, this.query = this.normalize(uz)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, nz.K)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let zz = this.peek();
          if (zz < 0) return this.done = !0, this;
          let uz = (0, nz.W)(zz),
            bz = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, nz.N)(zz);
          let Ez = this.normalize(uz);
          if (Ez.length)
            for (let nz = 0, iz = bz;; nz++) {
              let zz = Ez.charCodeAt(nz),
                lz = this.match(zz, iz, this.bufferPos + this.bufferStart);
              if (nz == Ez.length - 1) {
                if (lz) return this.value = lz, this;
                break
              }
              iz == bz && nz < uz.length && uz.charCodeAt(nz) == zz && iz++
            }
        }
      }
      match(zz, uz, bz) {
        let Ez = null;
        for (let nz = 0; nz < this.matches.length; nz += 2) {
          let uz = this.matches[nz],
            iz = !1;
          this.query.charCodeAt(uz) == zz && (uz == this.query.length - 1 ? Ez = {
            from: this.matches[nz + 1],
            to: bz
          } : (this.matches[nz]++, iz = !0)), iz || (this.matches.splice(nz, 2), nz -= 2)
        }
        return this.query.charCodeAt(0) == zz && (1 == this.query.length ? Ez = {
          from: uz,
          to: bz
        } : this.matches.push(1, uz)), Ez && this.test && !this.test(Ez.from, Ez.to, this.buffer, this.bufferStart) && (Ez = null), Ez
      }
    }
    "undefined" != typeof Symbol && (Mz.prototype[Symbol.iterator] = function() {
      return this
    });
    const tz = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Hz = "gm" + (null == /x/.unicode ? "" : "u");
    class Oz {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zz.length;
        if (this.text = zz, this.to = nz, this.curLine = "", this.done = !1, this.value = tz, /\\[sWDnr]|\n|\r|\[\^/.test(uz)) return new Fz(zz, uz, bz, Ez, nz);
        this.re = new RegExp(uz, Hz + ((null === bz || void 0 === bz ? void 0 : bz.ignoreCase) ? "i" : "")), this.test = null === bz || void 0 === bz ? void 0 : bz.test, this.iter = zz.iter();
        let iz = zz.lineAt(Ez);
        this.curLineStart = iz.from, this.matchPos = Zz(zz, Ez), this.getLine(this.curLineStart)
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
          let uz = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (uz) {
            let bz = this.curLineStart + uz.index,
              Ez = bz + uz[0].length;
            if (this.matchPos = Zz(this.text, Ez + (bz == Ez ? 1 : 0)), bz == this.curLineStart + this.curLine.length && this.nextLine(), (bz < Ez || bz > this.value.to) && (!this.test || this.test(bz, Ez, uz))) return this.value = {
              from: bz,
              to: Ez,
              match: uz
            }, this;
            zz = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), zz = 0
          }
        }
      }
    }
    const pz = new WeakMap;
    class dz {
      constructor(zz, uz) {
        this.from = zz, this.text = uz
      }
      get to() {
        return this.from + this.text.length
      }
      static get(zz, uz, bz) {
        let Ez = pz.get(zz);
        if (!Ez || Ez.from >= bz || Ez.to <= uz) {
          let Ez = new dz(uz, zz.sliceString(uz, bz));
          return pz.set(zz, Ez), Ez
        }
        if (Ez.from == uz && Ez.to == bz) return Ez;
        let {
          text: nz,
          from: iz
        } = Ez;
        return iz > uz && (nz = zz.sliceString(uz, iz) + nz, iz = uz), Ez.to < bz && (nz += zz.sliceString(Ez.to, bz)), pz.set(zz, new dz(iz, nz)), new dz(uz, nz.slice(uz - iz, bz - iz))
      }
    }
    class Fz {
      constructor(zz, uz, bz, Ez, nz) {
        this.text = zz, this.to = nz, this.done = !1, this.value = tz, this.matchPos = Zz(zz, Ez), this.re = new RegExp(uz, Hz + ((null === bz || void 0 === bz ? void 0 : bz.ignoreCase) ? "i" : "")), this.test = null === bz || void 0 === bz ? void 0 : bz.test, this.flat = dz.get(zz, Ez, this.chunkEnd(Ez + 5e3))
      }
      chunkEnd(zz) {
        return zz >= this.to ? this.to : this.text.lineAt(zz).to
      }
      next() {
        for (;;) {
          let zz = this.re.lastIndex = this.matchPos - this.flat.from,
            uz = this.re.exec(this.flat.text);
          if (uz && !uz[0] && uz.index == zz && (this.re.lastIndex = zz + 1, uz = this.re.exec(this.flat.text)), uz) {
            let zz = this.flat.from + uz.index,
              bz = zz + uz[0].length;
            if ((this.flat.to >= this.to || uz.index + uz[0].length <= this.flat.text.length - 10) && (!this.test || this.test(zz, bz, uz))) return this.value = {
              from: zz,
              to: bz,
              match: uz
            }, this.matchPos = Zz(this.text, bz + (zz == bz ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = dz.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function Zz(zz, uz) {
      if (uz >= zz.length) return uz;
      let bz, Ez = zz.lineAt(uz);
      for (; uz < Ez.to && (bz = Ez.text.charCodeAt(uz - Ez.from)) >= 56320 && bz < 57344;) uz++;
      return uz
    }
    "undefined" != typeof Symbol && (Oz.prototype[Symbol.iterator] = Fz.prototype[Symbol.iterator] = function() {
      return this
    });
    const Rz = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      Kz = nz.r.define({
        combine: zz => (0, nz.Q)(zz, Rz, {
          highlightWordAroundCursor: (zz, uz) => zz || uz,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function wz(zz) {
      let uz = [oz, rz];
      return zz && uz.push(Kz.of(zz)), uz
    }
    const Xz = Ez.e.mark({
        class: "cm-selectionMatch"
      }),
      fz = Ez.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function sz(zz, uz, bz, Ez) {
      return (0 == bz || zz(uz.sliceDoc(bz - 1, bz)) != nz.h.Word) && (Ez == uz.doc.length || zz(uz.sliceDoc(Ez, Ez + 1)) != nz.h.Word)
    }
    const rz = Ez.p.fromClass(class {
        constructor(zz) {
          this.cE = this.getDeco(zz)
        }
        update(zz) {
          (zz.selectionSet || zz.docChanged || zz.viewportChanged) && (this.cE = this.getDeco(zz.view))
        }
        getDeco(zz) {
          let uz = zz.state.facet(Kz),
            {
              state: bz
            } = zz,
            iz = bz.selection;
          if (iz.al.length > 1) return Ez.e.none;
          let lz, tz = iz.main,
            Hz = null;
          if (tz.empty) {
            if (!uz.highlightWordAroundCursor) return Ez.e.none;
            let zz = bz.wordAt(tz.head);
            if (!zz) return Ez.e.none;
            Hz = bz.charCategorizer(tz.head), lz = bz.sliceDoc(zz.from, zz.to)
          } else {
            let zz = tz.to - tz.from;
            if (zz < uz.minSelectionLength || zz > 200) return Ez.e.none;
            if (uz.wholeWords) {
              if (lz = bz.sliceDoc(tz.from, tz.to), Hz = bz.charCategorizer(tz.head), !sz(Hz, bz, tz.from, tz.to) || ! function(zz, uz, bz, Ez) {
                  return zz(uz.sliceDoc(bz, bz + 1)) == nz.h.Word && zz(uz.sliceDoc(Ez - 1, Ez)) == nz.h.Word
                }(Hz, bz, tz.from, tz.to)) return Ez.e.none
            } else if (lz = bz.sliceDoc(tz.from, tz.to), !lz) return Ez.e.none
          }
          let Oz = [];
          for (let nz of zz.o_) {
            let zz = new Mz(bz.doc, lz, nz.from, nz.to);
            for (; !zz.next().done;) {
              let {
                from: nz,
                to: iz
              } = zz.value;
              if ((!Hz || sz(Hz, bz, nz, iz)) && (tz.empty && nz <= tz.from && iz >= tz.to ? Oz.push(fz.range(nz, iz)) : (nz >= tz.to || iz <= tz.from) && Oz.push(Xz.range(nz, iz)), Oz.length > uz.maxMatches)) return Ez.e.none
            }
          }
          return Ez.e.set(Oz)
        }
      }, {
        cE: zz => zz.cE
      }),
      oz = Ez.k.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const Nz = nz.r.define({
      combine: zz => (0, nz.Q)(zz, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: zz => new zu(zz),
        scrollToMatch: zz => Ez.k.scrollIntoView(zz)
      })
    });
    class vz {
      constructor(zz) {
        this.search = zz.search, this.caseSensitive = !!zz.caseSensitive, this.literal = !!zz.literal, this.regexp = !!zz.regexp, this.replace = zz.replace || "", this.valid = !!this.search && (!this.regexp || function(zz) {
          try {
            return new RegExp(zz, Hz), !0
          } catch (uz) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!zz.wholeWord, this.test = zz.test
      }
      unquote(zz) {
        return this.literal ? zz : zz.replace(/\\([nrt\\])/g, ((zz, uz) => "n" == uz ? "\n" : "r" == uz ? "\r" : "t" == uz ? "\t" : "\\"))
      }
      eq(zz) {
        return this.search == zz.search && this.replace == zz.replace && this.caseSensitive == zz.caseSensitive && this.regexp == zz.regexp && this.wholeWord == zz.wholeWord && this.test == zz.test
      }
      create() {
        return this.regexp ? new Gz(this) : new Az(this)
      }
      getCursor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = zz.doc ? zz : nz.n.create({
            doc: zz
          });
        return null == bz && (bz = Ez.doc.length), this.regexp ? Tz(this, Ez, uz, bz) : Jz(this, Ez, uz, bz)
      }
    }
    class xz {
      constructor(zz) {
        this.spec = zz
      }
    }

    function Jz(zz, uz, bz, Ez) {
      let iz;
      var lz, tz;
      return zz.wholeWord && (lz = uz.doc, tz = uz.charCategorizer(uz.selection.main.head), iz = (zz, uz, bz, Ez) => ((Ez > zz || Ez + bz.length < uz) && (Ez = Math.max(0, zz - 2), bz = lz.sliceString(Ez, Math.min(lz.length, uz + 2))), (tz(Lz(bz, zz - Ez)) != nz.h.Word || tz(Pz(bz, zz - Ez)) != nz.h.Word) && (tz(Pz(bz, uz - Ez)) != nz.h.Word || tz(Lz(bz, uz - Ez)) != nz.h.Word))), zz.test && (iz = function(zz, uz, bz) {
        return (Ez, nz, iz, lz) => {
          if (bz && !bz(Ez, nz, iz, lz)) return !1;
          let Mz = Ez >= lz && nz <= lz + iz.length ? iz.slice(Ez - lz, nz - lz) : uz.doc.sliceString(Ez, nz);
          return zz(Mz, uz, Ez, nz)
        }
      }(zz.test, uz, iz)), new Mz(uz.doc, zz.unquoted, bz, Ez, zz.caseSensitive ? void 0 : zz => zz.toLowerCase(), iz)
    }
    class Az extends xz {
      constructor(zz) {
        super(zz)
      }
      nextMatch(zz, uz, bz) {
        let Ez = Jz(this.spec, zz, bz, zz.doc.length).nextOverlapping();
        if (Ez.done) {
          let bz = Math.min(zz.doc.length, uz + this.spec.unquoted.length);
          Ez = Jz(this.spec, zz, 0, bz).nextOverlapping()
        }
        return Ez.done || Ez.value.from == uz && Ez.value.to == bz ? null : Ez.value
      }
      prevMatchInRange(zz, uz, bz) {
        for (let Ez = bz;;) {
          let bz = Math.max(uz, Ez - 1e4 - this.spec.unquoted.length),
            nz = Jz(this.spec, zz, bz, Ez),
            iz = null;
          for (; !nz.nextOverlapping().done;) iz = nz.value;
          if (iz) return iz;
          if (bz == uz) return null;
          Ez -= 1e4
        }
      }
      prevMatch(zz, uz, bz) {
        let Ez = this.prevMatchInRange(zz, 0, uz);
        return Ez || (Ez = this.prevMatchInRange(zz, Math.max(0, bz - this.spec.unquoted.length), zz.doc.length)), !Ez || Ez.from == uz && Ez.to == bz ? null : Ez
      }
      getReplacement(zz) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(zz, uz) {
        let bz = Jz(this.spec, zz, 0, zz.doc.length),
          Ez = [];
        for (; !bz.next().done;) {
          if (Ez.length >= uz) return null;
          Ez.push(bz.value)
        }
        return Ez
      }
      highlight(zz, uz, bz, Ez) {
        let nz = Jz(this.spec, zz, Math.max(0, uz - this.spec.unquoted.length), Math.min(bz + this.spec.unquoted.length, zz.doc.length));
        for (; !nz.next().done;) Ez(nz.value.from, nz.value.to)
      }
    }

    function Tz(zz, uz, bz, Ez) {
      let iz;
      var lz;
      return zz.wholeWord && (lz = uz.charCategorizer(uz.selection.main.head), iz = (zz, uz, bz) => !bz[0].length || (lz(Lz(bz.input, bz.index)) != nz.h.Word || lz(Pz(bz.input, bz.index)) != nz.h.Word) && (lz(Pz(bz.input, bz.index + bz[0].length)) != nz.h.Word || lz(Lz(bz.input, bz.index + bz[0].length)) != nz.h.Word)), zz.test && (iz = function(zz, uz, bz) {
        return (Ez, nz, iz) => (!bz || bz(Ez, nz, iz)) && zz(iz[0], uz, Ez, nz)
      }(zz.test, uz, iz)), new Oz(uz.doc, zz.search, {
        ignoreCase: !zz.caseSensitive,
        test: iz
      }, bz, Ez)
    }

    function Lz(zz, uz) {
      return zz.slice((0, nz.U)(zz, uz, !1), uz)
    }

    function Pz(zz, uz) {
      return zz.slice(uz, (0, nz.U)(zz, uz))
    }
    class Gz extends xz {
      nextMatch(zz, uz, bz) {
        let Ez = Tz(this.spec, zz, bz, zz.doc.length).next();
        return Ez.done && (Ez = Tz(this.spec, zz, 0, uz).next()), Ez.done ? null : Ez.value
      }
      prevMatchInRange(zz, uz, bz) {
        for (let Ez = 1;; Ez++) {
          let nz = Math.max(uz, bz - 1e4 * Ez),
            iz = Tz(this.spec, zz, nz, bz),
            lz = null;
          for (; !iz.next().done;) lz = iz.value;
          if (lz && (nz == uz || lz.from > nz + 10)) return lz;
          if (nz == uz) return null
        }
      }
      prevMatch(zz, uz, bz) {
        return this.prevMatchInRange(zz, 0, uz) || this.prevMatchInRange(zz, bz, zz.doc.length)
      }
      getReplacement(zz) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((uz, bz) => {
          if ("&" == bz) return zz.match[0];
          if ("$" == bz) return "$";
          for (let Ez = bz.length; Ez > 0; Ez--) {
            let uz = +bz.slice(0, Ez);
            if (uz > 0 && uz < zz.match.length) return zz.match[uz] + bz.slice(Ez)
          }
          return uz
        }))
      }
      matchAll(zz, uz) {
        let bz = Tz(this.spec, zz, 0, zz.doc.length),
          Ez = [];
        for (; !bz.next().done;) {
          if (Ez.length >= uz) return null;
          Ez.push(bz.value)
        }
        return Ez
      }
      highlight(zz, uz, bz, Ez) {
        let nz = Tz(this.spec, zz, Math.max(0, uz - 250), Math.min(bz + 250, zz.doc.length));
        for (; !nz.next().done;) Ez(nz.value.from, nz.value.to)
      }
    }
    const az = nz.B.define(),
      Vz = nz.B.define(),
      mz = nz.E.define({
        create: zz => new qz(jz(zz).create(), null),
        update(zz, uz) {
          for (let bz of uz.effects) bz.is(az) ? zz = new qz(bz.value.create(), zz.panel) : bz.is(Vz) && (zz = new qz(zz.query, bz.value ? ez : null));
          return zz
        },
        provide: zz => Ez.pb.from(zz, (zz => zz.panel))
      });
    class qz {
      constructor(zz, uz) {
        this.query = zz, this.panel = uz
      }
    }
    const hz = Ez.e.mark({
        class: "cm-searchMatch"
      }),
      Uz = Ez.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      cz = Ez.p.fromClass(class {
        constructor(zz) {
          this.view = zz, this.cE = this.highlight(zz.state.field(mz))
        }
        update(zz) {
          let uz = zz.state.field(mz);
          (uz != zz.startState.field(mz) || zz.docChanged || zz.selectionSet || zz.viewportChanged) && (this.cE = this.highlight(uz))
        }
        highlight(zz) {
          let {
            query: uz,
            panel: bz
          } = zz;
          if (!bz || !uz.spec.valid) return Ez.e.none;
          let {
            view: iz
          } = this, lz = new nz.u;
          for (let Ez = 0, nz = iz.o_, Mz = nz.length; Ez < Mz; Ez++) {
            let {
              from: zz,
              to: bz
            } = nz[Ez];
            for (; Ez < Mz - 1 && bz > nz[Ez + 1].from - 500;) bz = nz[++Ez].to;
            uz.highlight(iz.state, zz, bz, ((zz, uz) => {
              let bz = iz.state.selection.al.some((bz => bz.from == zz && bz.to == uz));
              lz.add(zz, uz, bz ? Uz : hz)
            }))
          }
          return lz.finish()
        }
      }, {
        cE: zz => zz.cE
      });

    function gz(zz) {
      return uz => {
        let bz = uz.state.field(mz, !1);
        return bz && bz.query.spec.valid ? zz(uz, bz) : Cz(uz)
      }
    }
    const Sz = gz(((zz, uz) => {
        let {
          query: bz
        } = uz, {
          to: Ez
        } = zz.state.selection.main, iz = bz.nextMatch(zz.state, Ez, Ez);
        if (!iz) return !1;
        let lz = nz.l.single(iz.from, iz.to),
          Mz = zz.state.facet(Nz);
        return zz.dispatch({
          selection: lz,
          effects: [nu(zz, iz), Mz.scrollToMatch(lz.main, zz)],
          userEvent: "select.search"
        }), Bz(zz), !0
      })),
      yz = gz(((zz, uz) => {
        let {
          query: bz
        } = uz, {
          state: Ez
        } = zz, {
          from: iz
        } = Ez.selection.main, lz = bz.prevMatch(Ez, iz, iz);
        if (!lz) return !1;
        let Mz = nz.l.single(lz.from, lz.to),
          tz = zz.state.facet(Nz);
        return zz.dispatch({
          selection: Mz,
          effects: [nu(zz, lz), tz.scrollToMatch(Mz.main, zz)],
          userEvent: "select.search"
        }), Bz(zz), !0
      })),
      Dz = gz(((zz, uz) => {
        let {
          query: bz
        } = uz, Ez = bz.matchAll(zz.state, 1e3);
        return !(!Ez || !Ez.length) && (zz.dispatch({
          selection: nz.l.create(Ez.map((zz => nz.l.range(zz.from, zz.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      Qz = gz(((zz, uz) => {
        let {
          query: bz
        } = uz, {
          state: iz
        } = zz, {
          from: lz,
          to: Mz
        } = iz.selection.main;
        if (iz.readOnly) return !1;
        let tz = bz.nextMatch(iz, lz, lz);
        if (!tz) return !1;
        let Hz, Oz, pz = tz,
          dz = [],
          Fz = [];
        pz.from == lz && pz.to == Mz && (Oz = iz.toText(bz.getReplacement(pz)), dz.push({
          from: pz.from,
          to: pz.to,
          insert: Oz
        }), pz = bz.nextMatch(iz, pz.from, pz.to), Fz.push(Ez.k.announce.of(iz.phrase("replaced match on line $", iz.doc.lineAt(lz).number) + ".")));
        let Zz = zz.state.changes(dz);
        return pz && (Hz = nz.l.single(pz.from, pz.to).map(Zz), Fz.push(nu(zz, pz)), Fz.push(iz.facet(Nz).scrollToMatch(Hz.main, zz))), zz.dispatch({
          changes: Zz,
          selection: Hz,
          effects: Fz,
          userEvent: "input.replace"
        }), !0
      })),
      Wz = gz(((zz, uz) => {
        let {
          query: bz
        } = uz;
        if (zz.state.readOnly) return !1;
        let nz = bz.matchAll(zz.state, 1e9).map((zz => {
          let {
            from: uz,
            to: Ez
          } = zz;
          return {
            from: uz,
            to: Ez,
            insert: bz.getReplacement(zz)
          }
        }));
        if (!nz.length) return !1;
        let iz = zz.state.phrase("replaced $ matches", nz.length) + ".";
        return zz.dispatch({
          changes: nz,
          effects: Ez.k.announce.of(iz),
          userEvent: "input.replace.all"
        }), !0
      }));

    function ez(zz) {
      return zz.state.facet(Nz).createPanel(zz)
    }

    function jz(zz, uz) {
      var bz, Ez, nz, iz, lz;
      let Mz = zz.selection.main,
        tz = Mz.empty || Mz.to > Mz.from + 100 ? "" : zz.sliceDoc(Mz.from, Mz.to);
      if (uz && !tz) return uz;
      let Hz = zz.facet(Nz);
      return new vz({
        search: (null !== (bz = null === uz || void 0 === uz ? void 0 : uz.literal) && void 0 !== bz ? bz : Hz.literal) ? tz : tz.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Ez = null === uz || void 0 === uz ? void 0 : uz.caseSensitive) && void 0 !== Ez ? Ez : Hz.caseSensitive,
        literal: null !== (nz = null === uz || void 0 === uz ? void 0 : uz.literal) && void 0 !== nz ? nz : Hz.literal,
        regexp: null !== (iz = null === uz || void 0 === uz ? void 0 : uz.regexp) && void 0 !== iz ? iz : Hz.regexp,
        wholeWord: null !== (lz = null === uz || void 0 === uz ? void 0 : uz.wholeWord) && void 0 !== lz ? lz : Hz.wholeWord
      })
    }

    function Iz(zz) {
      let uz = (0, Ez.F)(zz, ez);
      return uz && uz.dom.querySelector("[main-field]")
    }

    function Bz(zz) {
      let uz = Iz(zz);
      uz && uz == zz.root.activeElement && uz.select()
    }
    const Cz = zz => {
        let uz = zz.state.field(mz, !1);
        if (uz && uz.panel) {
          let bz = Iz(zz);
          if (bz && bz != zz.root.activeElement) {
            let Ez = jz(zz.state, uz.query.spec);
            Ez.valid && zz.dispatch({
              effects: az.of(Ez)
            }), bz.focus(), bz.select()
          }
        } else zz.dispatch({
          effects: [Vz.of(!0), uz ? az.of(jz(zz.state, uz.query.spec)) : nz.B.appendConfig.of(lu)]
        });
        return !0
      },
      Yz = zz => {
        let uz = zz.state.field(mz, !1);
        if (!uz || !uz.panel) return !1;
        let bz = (0, Ez.F)(zz, ez);
        return bz && bz.dom.contains(zz.root.activeElement) && zz.focus(), zz.dispatch({
          effects: Vz.of(!1)
        }), !0
      },
      kz = [{
        key: "Mod-f",
        run: Cz,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: Sz,
        shift: yz,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: Sz,
        shift: yz,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: Yz,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz, Ez = uz.selection;
          if (Ez.al.length > 1 || Ez.main.empty) return !1;
          let {
            from: iz,
            to: lz
          } = Ez.main, tz = [], Hz = 0;
          for (let Oz = new Mz(uz.doc, uz.sliceDoc(iz, lz)); !Oz.next().done;) {
            if (tz.length > 1e3) return !1;
            Oz.value.from == iz && (Hz = tz.length), tz.push(nz.l.range(Oz.value.from, Oz.value.to))
          }
          return bz(uz.update({
            selection: nz.l.create(tz, Hz),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: zz => {
          let {
            state: uz
          } = zz, bz = String(uz.doc.lineAt(zz.state.selection.main.head).number), {
            close: iz,
            result: lz
          } = (0, Ez.mb)(zz, {
            label: uz.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: bz
            },
            focus: !0,
            submitLabel: uz.phrase("go")
          });
          return lz.then((bz => {
            let lz = bz && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(bz.elements.line.value);
            if (!lz) return void zz.dispatch({
              effects: iz
            });
            let Mz = uz.doc.lineAt(uz.selection.main.head),
              [, tz, Hz, Oz, pz] = lz,
              dz = Oz ? +Oz.slice(1) : 0,
              Fz = Hz ? +Hz : Mz.number;
            if (Hz && pz) {
              let zz = Fz / 100;
              tz && (zz = zz * ("-" == tz ? -1 : 1) + Mz.number / uz.doc.lines), Fz = Math.round(uz.doc.lines * zz)
            } else Hz && tz && (Fz = Fz * ("-" == tz ? -1 : 1) + Mz.number);
            let Zz = uz.doc.line(Math.max(1, Math.min(uz.doc.lines, Fz))),
              Rz = nz.l.cursor(Zz.from + Math.max(0, Math.min(dz, Zz.length)));
            zz.dispatch({
              effects: [iz, Ez.k.scrollIntoView(Rz.from, {
                y: "center"
              })],
              selection: Rz
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz, {
            al: iz
          } = uz.selection;
          if (iz.some((zz => zz.from === zz.to))) return (zz => {
            let {
              state: uz,
              dispatch: bz
            } = zz, {
              selection: Ez
            } = uz, iz = nz.l.create(Ez.al.map((zz => uz.wordAt(zz.head) || nz.l.cursor(zz.head))), Ez.mainIndex);
            return !iz.eq(Ez) && (bz(uz.update({
              selection: iz
            })), !0)
          })({
            state: uz,
            dispatch: bz
          });
          let lz = uz.sliceDoc(iz[0].from, iz[0].to);
          if (uz.selection.al.some((zz => uz.sliceDoc(zz.from, zz.to) != lz))) return !1;
          let tz = function(zz, uz) {
            let {
              main: bz,
              al: Ez
            } = zz.selection, nz = zz.wordAt(bz.head), iz = nz && nz.from == bz.from && nz.to == bz.to;
            for (let lz = !1, tz = new Mz(zz.doc, uz, Ez[Ez.length - 1].to);;) {
              if (tz.next(), !tz.done) {
                if (lz && Ez.some((zz => zz.from == tz.value.from))) continue;
                if (iz) {
                  let uz = zz.wordAt(tz.value.from);
                  if (!uz || uz.from != tz.value.from || uz.to != tz.value.to) continue
                }
                return tz.value
              }
              if (lz) return null;
              tz = new Mz(zz.doc, uz, 0, Math.max(0, Ez[Ez.length - 1].from - 1)), lz = !0
            }
          }(uz, lz);
          return !!tz && (bz(uz.update({
            selection: uz.selection.addRange(nz.l.range(tz.from, tz.to), !1),
            effects: Ez.k.scrollIntoView(tz.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class zu {
      constructor(zz) {
        this.view = zz;
        let uz = this.query = zz.state.field(mz).query.spec;

        function bz(zz, uz, bz) {
          return (0, iz.b)("button", {
            class: "cm-button",
            name: zz,
            onclick: uz,
            type: "button"
          }, bz)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, iz.b)("input", {
          value: uz.search,
          placeholder: uu(zz, "Find"),
          "aria-label": uu(zz, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, iz.b)("input", {
          value: uz.replace,
          placeholder: uu(zz, "Replace"),
          "aria-label": uu(zz, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, iz.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: uz.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, iz.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: uz.regexp,
          onchange: this.commit
        }), this.wordField = (0, iz.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: uz.wholeWord,
          onchange: this.commit
        }), this.dom = (0, iz.b)("div", {
          onkeydown: zz => this.keydown(zz),
          class: "cm-search"
        }, [this.searchField, bz("next", (() => Sz(zz)), [uu(zz, "next")]), bz("prev", (() => yz(zz)), [uu(zz, "previous")]), bz("select", (() => Dz(zz)), [uu(zz, "all")]), (0, iz.b)("label", null, [this.caseField, uu(zz, "match case")]), (0, iz.b)("label", null, [this.reField, uu(zz, "regexp")]), (0, iz.b)("label", null, [this.wordField, uu(zz, "by word")]), ...zz.state.readOnly ? [] : [(0, iz.b)("br"), this.replaceField, bz("replace", (() => Qz(zz)), [uu(zz, "replace")]), bz("replaceAll", (() => Wz(zz)), [uu(zz, "replace all")])], (0, iz.b)("button", {
          name: "close",
          onclick: () => Yz(zz),
          "aria-label": uu(zz, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let zz = new vz({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        zz.eq(this.query) || (this.query = zz, this.view.dispatch({
          effects: az.of(zz)
        }))
      }
      keydown(zz) {
        (0, Ez.jb)(this.view, zz, "search-panel") ? zz.preventDefault(): 13 == zz.keyCode && zz.target == this.searchField ? (zz.preventDefault(), (zz.shiftKey ? yz : Sz)(this.view)) : 13 == zz.keyCode && zz.target == this.replaceField && (zz.preventDefault(), Qz(this.view))
      }
      update(zz) {
        for (let uz of zz.transactions)
          for (let zz of uz.effects) zz.is(az) && !zz.value.eq(this.query) && this.setQuery(zz.value)
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
        return this.view.state.facet(Nz).top
      }
    }

    function uu(zz, uz) {
      return zz.state.phrase(uz)
    }
    const bu = 30,
      Eu = /[\s\.,:;?!]/;

    function nu(zz, uz) {
      let {
        from: bz,
        to: nz
      } = uz, iz = zz.state.doc.lineAt(bz), lz = zz.state.doc.lineAt(nz).to, Mz = Math.max(iz.from, bz - bu), tz = Math.min(lz, nz + bu), Hz = zz.state.sliceDoc(Mz, tz);
      if (Mz != iz.from)
        for (let Ez = 0; Ez < bu; Ez++)
          if (!Eu.test(Hz[Ez + 1]) && Eu.test(Hz[Ez])) {
            Hz = Hz.slice(Ez);
            break
          } if (tz != lz)
        for (let Ez = Hz.length - 1; Ez > Hz.length - bu; Ez--)
          if (!Eu.test(Hz[Ez - 1]) && Eu.test(Hz[Ez])) {
            Hz = Hz.slice(0, Ez);
            break
          } return Ez.k.announce.of(`${zz.state.phrase("current match")}. ${Hz} ${zz.state.phrase("on line")} ${iz.number}.`)
    }
    const iu = Ez.k.baseTheme({
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
      lu = [mz, nz.t.low(cz), iu]
  },
  40538: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Gz,
      h: () => Hu,
      k: () => Tn,
      o: () => Ol,
      p: () => Bu,
      t: () => Lz,
      x: () => ai,
      A: () => kn,
      B: () => ti,
      F: () => ul,
      G: () => Yi,
      J: () => Rl,
      P: () => ri,
      N: () => ml,
      T: () => wi,
      V: () => Ci,
      Y: () => hn,
      ab: () => Pl,
      db: () => Wu,
      fb: () => xi,
      ib: () => Li,
      jb: () => gn,
      mb: () => ll,
      pb: () => il,
      tb: () => Qi
    });
    for (var Ez = bz(40531), nz = bz(40540), iz = {
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
      }, lz = {
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
      }, Mz = "undefined" != typeof navigator && /Mac/.test(navigator.platform), tz = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Hz = 0; Hz < 10; Hz++) iz[48 + Hz] = iz[96 + Hz] = String(Hz);
    for (Hz = 1; Hz <= 24; Hz++) iz[Hz + 111] = "F" + Hz;
    for (Hz = 65; Hz <= 90; Hz++) iz[Hz] = String.fromCharCode(Hz + 32), lz[Hz] = String.fromCharCode(Hz);
    for (var Oz in iz) lz.hasOwnProperty(Oz) || (lz[Oz] = iz[Oz]);
    var pz = bz(40544);
    let dz = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      Fz = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const Zz = /Edge\/(\d+)/.exec(dz.userAgent),
      Rz = /MSIE \d/.test(dz.userAgent),
      Kz = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(dz.userAgent),
      wz = !!(Rz || Kz || Zz),
      Xz = !wz && /gecko\/(\d+)/i.test(dz.userAgent),
      fz = !wz && /Chrome\/(\d+)/.exec(dz.userAgent),
      sz = "webkitFontSmoothing" in Fz.documentElement.style,
      rz = !wz && /Apple Computer/.test(dz.vendor),
      oz = rz && (/Mobile\/\w+/.test(dz.userAgent) || dz.maxTouchPoints > 2);
    var Nz = {
      mac: oz || /Mac/.test(dz.platform),
      windows: /Win/.test(dz.platform),
      linux: /Linux|X11/.test(dz.platform),
      ie: wz,
      ie_version: Rz ? Fz.documentMode || 6 : Kz ? +Kz[1] : Zz ? +Zz[1] : 0,
      gecko: Xz,
      gecko_version: Xz ? +(/Firefox\/(\d+)/.exec(dz.userAgent) || [0, 0])[1] : 0,
      chrome: !!fz,
      chrome_version: fz ? +fz[1] : 0,
      ios: oz,
      android: /Android\b/.test(dz.userAgent),
      webkit: sz,
      webkit_version: sz ? +(/\bAppleWebKit\/(\d+)/.exec(dz.userAgent) || [0, 0])[1] : 0,
      safari: rz,
      safari_version: rz ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(dz.userAgent) || [0, 0])[1] : 0,
      tabSize: null != Fz.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function vz(zz, uz) {
      for (let bz in zz) "class" == bz && uz.class ? uz.class += " " + zz.class : "style" == bz && uz.style ? uz.style += ";" + zz.style : uz[bz] = zz[bz];
      return uz
    }
    const xz = Object.create(null);

    function Jz(zz, uz, bz) {
      if (zz == uz) return !0;
      zz || (zz = xz), uz || (uz = xz);
      let Ez = Object.keys(zz),
        nz = Object.keys(uz);
      if (Ez.length - (bz && Ez.indexOf(bz) > -1 ? 1 : 0) != nz.length - (bz && nz.indexOf(bz) > -1 ? 1 : 0)) return !1;
      for (let iz of Ez)
        if (iz != bz && (-1 == nz.indexOf(iz) || zz[iz] !== uz[iz])) return !1;
      return !0
    }

    function Az(zz, uz, bz) {
      let Ez = !1;
      if (uz)
        for (let nz in uz) bz && nz in bz || (Ez = !0, "style" == nz ? zz.style.cssText = "" : zz.removeAttribute(nz));
      if (bz)
        for (let nz in bz) uz && uz[nz] == bz[nz] || (Ez = !0, "style" == nz ? zz.style.cssText = bz[nz] : zz.setAttribute(nz, bz[nz]));
      return Ez
    }

    function Tz(zz) {
      let uz = Object.create(null);
      for (let bz = 0; bz < zz.attributes.length; bz++) {
        let Ez = zz.attributes[bz];
        uz[Ez.name] = Ez.value
      }
      return uz
    }
    class Lz {
      eq(zz) {
        return !1
      }
      updateDOM(zz, uz, bz) {
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
      coordsAt(zz, uz, bz) {
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
    var Pz = function(zz) {
      return zz[zz.Text = 0] = "Text", zz[zz.WidgetBefore = 1] = "WidgetBefore", zz[zz.WidgetAfter = 2] = "WidgetAfter", zz[zz.WidgetRange = 3] = "WidgetRange", zz
    }(Pz || (Pz = {}));
    class Gz extends Ez.z {
      constructor(zz, uz, bz, Ez) {
        super(), this.startSide = zz, this.endSide = uz, this.widget = bz, this.spec = Ez
      }
      get heightRelevant() {
        return !1
      }
      static mark(zz) {
        return new az(zz)
      }
      static widget(zz) {
        let uz = Math.max(-1e4, Math.min(1e4, zz.side || 0)),
          bz = !!zz.block;
        return uz += bz && !zz.inlineOrder ? uz > 0 ? 3e8 : -4e8 : uz > 0 ? 1e8 : -1e8, new mz(zz, uz, uz, bz, zz.widget || null, !1)
      }
      static replace(zz) {
        let uz, bz, Ez = !!zz.block;
        if (zz.isBlockGap) uz = -5e8, bz = 4e8;
        else {
          let {
            start: nz,
            end: iz
          } = qz(zz, Ez);
          uz = (nz ? Ez ? -3e8 : -1 : 5e8) - 1, bz = 1 + (iz ? Ez ? 2e8 : 1 : -6e8)
        }
        return new mz(zz, uz, bz, Ez, zz.widget || null, !0)
      }
      static line(zz) {
        return new Vz(zz)
      }
      static set(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Ez.x.of(zz, uz)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Gz.none = Ez.x.empty;
    class az extends Gz {
      constructor(zz) {
        let {
          start: uz,
          end: bz
        } = qz(zz);
        super(uz ? -1 : 5e8, bz ? 1 : -6e8, null, zz), this.tagName = zz.tagName || "span", this.attrs = zz.class && zz.attributes ? vz(zz.attributes, {
          class: zz.class
        }) : zz.class ? {
          class: zz.class
        } : zz.attributes || xz
      }
      eq(zz) {
        return this == zz || zz instanceof az && this.tagName == zz.tagName && Jz(this.attrs, zz.attrs)
      }
      range(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        if (zz >= uz) throw new RangeError("Mark decorations may not be empty");
        return super.range(zz, uz)
      }
    }
    az.prototype.point = !1;
    class Vz extends Gz {
      constructor(zz) {
        super(-2e8, -2e8, null, zz)
      }
      eq(zz) {
        return zz instanceof Vz && this.spec.class == zz.spec.class && Jz(this.spec.attributes, zz.spec.attributes)
      }
      range(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        if (uz != zz) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(zz, uz)
      }
    }
    Vz.prototype.mapMode = Ez.s.TrackBefore, Vz.prototype.point = !0;
    class mz extends Gz {
      constructor(zz, uz, bz, nz, iz, lz) {
        super(uz, bz, iz, zz), this.block = nz, this.isReplace = lz, this.mapMode = nz ? uz <= 0 ? Ez.s.TrackBefore : Ez.s.TrackAfter : Ez.s.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Pz.WidgetRange : this.startSide <= 0 ? Pz.WidgetBefore : Pz.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(zz) {
        return zz instanceof mz && (uz = this.widget, bz = zz.widget, uz == bz || !!(uz && bz && uz.compare(bz))) && this.block == zz.block && this.startSide == zz.startSide && this.endSide == zz.endSide;
        var uz, bz
      }
      range(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
        if (this.isReplace && (zz > uz || zz == uz && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && uz != zz) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(zz, uz)
      }
    }

    function qz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: bz,
          inclusiveEnd: Ez
        } = zz;
      return null == bz && (bz = zz.inclusive), null == Ez && (Ez = zz.inclusive), {
        start: null !== bz && void 0 !== bz ? bz : uz,
        end: null !== Ez && void 0 !== Ez ? Ez : uz
      }
    }

    function hz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        nz = bz.length - 1;
      nz >= 0 && bz[nz] + Ez >= zz ? bz[nz] = Math.max(bz[nz], uz) : bz.push(zz, uz)
    }
    mz.prototype.point = !0;
    class Uz extends Ez.z {
      constructor(zz, uz) {
        super(), this.tagName = zz, this.attributes = uz
      }
      eq(zz) {
        return zz == this || zz instanceof Uz && this.tagName == zz.tagName && Jz(this.attributes, zz.attributes)
      }
      static create(zz) {
        return new Uz(zz.tagName, zz.attributes || xz)
      }
      static set(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Ez.x.of(zz, uz)
      }
    }

    function cz(zz) {
      let uz;
      return uz = 11 == zz.nodeType ? zz.getSelection ? zz : zz.ownerDocument : zz, uz.getSelection()
    }

    function gz(zz, uz) {
      return !!uz && (zz == uz || zz.contains(1 != uz.nodeType ? uz.parentNode : uz))
    }

    function Sz(zz, uz) {
      if (!uz.anchorNode) return !1;
      try {
        return gz(zz, uz.anchorNode)
      } catch (bz) {
        return !1
      }
    }

    function yz(zz) {
      return 3 == zz.nodeType ? Eu(zz, 0, zz.nodeValue.length).getClientRects() : 1 == zz.nodeType ? zz.getClientRects() : []
    }

    function Dz(zz, uz, bz, Ez) {
      return !!bz && (ez(zz, uz, bz, Ez, -1) || ez(zz, uz, bz, Ez, 1))
    }

    function Qz(zz) {
      for (var uz = 0;; uz++)
        if (!(zz = zz.previousSibling)) return uz
    }

    function Wz(zz) {
      return 1 == zz.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(zz.nodeName)
    }

    function ez(zz, uz, bz, Ez, nz) {
      for (;;) {
        if (zz == bz && uz == Ez) return !0;
        if (uz == (nz < 0 ? 0 : jz(zz))) {
          if ("DIV" == zz.nodeName) return !1;
          let bz = zz.parentNode;
          if (!bz || 1 != bz.nodeType) return !1;
          uz = Qz(zz) + (nz < 0 ? 0 : 1), zz = bz
        } else {
          if (1 != zz.nodeType) return !1;
          if (1 == (zz = zz.childNodes[uz + (nz < 0 ? -1 : 0)]).nodeType && "false" == zz.contentEditable) return !1;
          uz = nz < 0 ? jz(zz) : 0
        }
      }
    }

    function jz(zz) {
      return 3 == zz.nodeType ? zz.nodeValue.length : zz.childNodes.length
    }

    function Iz(zz, uz) {
      let bz = uz ? zz.left : zz.right;
      return {
        left: bz,
        right: bz,
        top: zz.top,
        bottom: zz.bottom
      }
    }

    function Bz(zz) {
      let uz = zz.visualViewport;
      return uz ? {
        left: 0,
        right: uz.width,
        top: 0,
        bottom: uz.height
      } : {
        left: 0,
        right: zz.innerWidth,
        top: 0,
        bottom: zz.innerHeight
      }
    }

    function Cz(zz, uz) {
      let bz = uz.width / zz.offsetWidth,
        Ez = uz.height / zz.offsetHeight;
      return (bz > .995 && bz < 1.005 || !isFinite(bz) || Math.abs(uz.width - zz.offsetWidth) < 1) && (bz = 1), (Ez > .995 && Ez < 1.005 || !isFinite(Ez) || Math.abs(uz.height - zz.offsetHeight) < 1) && (Ez = 1), {
        scaleX: bz,
        scaleY: Ez
      }
    }

    function Yz(zz) {
      let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        bz = zz.ownerDocument,
        Ez = null,
        nz = null;
      for (let iz = zz.parentNode; iz && (iz != bz.body && (uz && !Ez || !nz));)
        if (1 == iz.nodeType) !nz && iz.scrollHeight > iz.clientHeight && (nz = iz), uz && !Ez && iz.scrollWidth > iz.clientWidth && (Ez = iz), iz = iz.assignedSlot || iz.parentNode;
        else {
          if (11 != iz.nodeType) break;
          iz = iz.host
        } return {
        x: Ez,
        y: nz
      }
    }
    Uz.prototype.startSide = Uz.prototype.endSide = -1;
    class kz {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(zz) {
        return this.anchorNode == zz.anchorNode && this.anchorOffset == zz.anchorOffset && this.focusNode == zz.focusNode && this.focusOffset == zz.focusOffset
      }
      setRange(zz) {
        let {
          anchorNode: uz,
          focusNode: bz
        } = zz;
        this.set(uz, Math.min(zz.anchorOffset, uz ? jz(uz) : 0), bz, Math.min(zz.focusOffset, bz ? jz(bz) : 0))
      }
      set(zz, uz, bz, Ez) {
        this.anchorNode = zz, this.anchorOffset = uz, this.focusNode = bz, this.focusOffset = Ez
      }
    }
    let zu, uu = null;

    function bu(zz) {
      if (zz.setActive) return zz.setActive();
      if (uu) return zz.focus(uu);
      let uz = [];
      for (let bz = zz; bz && (uz.push(bz, bz.scrollTop, bz.scrollLeft), bz != bz.ownerDocument); bz = bz.parentNode);
      if (zz.focus(null == uu ? {
          get preventScroll() {
            return uu = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !uu) {
        uu = !1;
        for (let zz = 0; zz < uz.length;) {
          let bz = uz[zz++],
            Ez = uz[zz++],
            nz = uz[zz++];
          bz.scrollTop != Ez && (bz.scrollTop = Ez), bz.scrollLeft != nz && (bz.scrollLeft = nz)
        }
      }
    }

    function Eu(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uz,
        Ez = zu || (zu = document.createRange());
      return Ez.setEnd(zz, bz), Ez.setStart(zz, uz), Ez
    }

    function nu(zz, uz, bz, Ez) {
      let nz = {
        key: uz,
        code: uz,
        keyCode: bz,
        which: bz,
        cancelable: !0
      };
      Ez && ({
        altKey: nz.altKey,
        ctrlKey: nz.ctrlKey,
        shiftKey: nz.shiftKey,
        metaKey: nz.metaKey
      } = Ez);
      let iz = new KeyboardEvent("keydown", nz);
      iz.synthetic = !0, zz.dispatchEvent(iz);
      let lz = new KeyboardEvent("keyup", nz);
      return lz.synthetic = !0, zz.dispatchEvent(lz), iz.defaultPrevented || lz.defaultPrevented
    }

    function iu(zz) {
      return zz instanceof Window ? zz.pageYOffset > Math.max(0, zz.document.documentElement.scrollHeight - zz.innerHeight - 4) : zz.scrollTop > Math.max(1, zz.scrollHeight - zz.clientHeight - 4)
    }

    function lu(zz, uz) {
      for (let bz = zz, Ez = uz;;) {
        if (3 == bz.nodeType && Ez > 0) return {
          node: bz,
          offset: Ez
        };
        if (1 == bz.nodeType && Ez > 0) {
          if ("false" == bz.contentEditable) return null;
          bz = bz.childNodes[Ez - 1], Ez = jz(bz)
        } else {
          if (!bz.parentNode || Wz(bz)) return null;
          Ez = Qz(bz), bz = bz.parentNode
        }
      }
    }

    function Mu(zz, uz) {
      for (let bz = zz, Ez = uz;;) {
        if (3 == bz.nodeType && Ez < bz.nodeValue.length) return {
          node: bz,
          offset: Ez
        };
        if (1 == bz.nodeType && Ez < bz.childNodes.length) {
          if ("false" == bz.contentEditable) return null;
          bz = bz.childNodes[Ez], Ez = 0
        } else {
          if (!bz.parentNode || Wz(bz)) return null;
          Ez = Qz(bz) + 1, bz = bz.parentNode
        }
      }
    }
    Nz.safari && Nz.safari_version >= 26 && (uu = !1);
    class tu {
      constructor(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = zz, this.offset = uz, this.precise = bz
      }
      static before(zz, uz) {
        return new tu(zz.parentNode, Qz(zz), uz)
      }
      static after(zz, uz) {
        return new tu(zz.parentNode, Qz(zz) + 1, uz)
      }
    }
    var Hu = function(zz) {
      return zz[zz.LTR = 0] = "LTR", zz[zz.RTL = 1] = "RTL", zz
    }(Hu || (Hu = {}));
    const Ou = Hu.LTR,
      pu = Hu.RTL;

    function du(zz) {
      let uz = [];
      for (let bz = 0; bz < zz.length; bz++) uz.push(1 << +zz[bz]);
      return uz
    }
    const Fu = du("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      Zu = du("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      Ru = Object.create(null),
      Ku = [];
    for (let ql of ["()", "[]", "{}"]) {
      let zz = ql.charCodeAt(0),
        uz = ql.charCodeAt(1);
      Ru[zz] = uz, Ru[uz] = -zz
    }

    function wu(zz) {
      return zz <= 247 ? Fu[zz] : 1424 <= zz && zz <= 1524 ? 2 : 1536 <= zz && zz <= 1785 ? Zu[zz - 1536] : 1774 <= zz && zz <= 2220 ? 4 : 8192 <= zz && zz <= 8204 ? 256 : 64336 <= zz && zz <= 65023 ? 4 : 1
    }
    const Xu = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class fu {
      get dir() {
        return this.level % 2 ? pu : Ou
      }
      constructor(zz, uz, bz) {
        this.from = zz, this.to = uz, this.level = bz
      }
      side(zz, uz) {
        return this.dir == uz == zz ? this.to : this.from
      }
      forward(zz, uz) {
        return zz == (this.dir == uz)
      }
      static find(zz, uz, bz, Ez) {
        let nz = -1;
        for (let iz = 0; iz < zz.length; iz++) {
          let lz = zz[iz];
          if (lz.from <= uz && lz.to >= uz) {
            if (lz.level == bz) return iz;
            (nz < 0 || (0 != Ez ? Ez < 0 ? lz.from < uz : lz.to > uz : zz[nz].level > lz.level)) && (nz = iz)
          }
        }
        if (nz < 0) throw new RangeError("Index out of range");
        return nz
      }
    }

    function su(zz, uz) {
      if (zz.length != uz.length) return !1;
      for (let bz = 0; bz < zz.length; bz++) {
        let Ez = zz[bz],
          nz = uz[bz];
        if (Ez.from != nz.from || Ez.to != nz.to || Ez.direction != nz.direction || !su(Ez.inner, nz.inner)) return !1
      }
      return !0
    }
    const ru = [];

    function ou(zz, uz, bz, Ez, nz, iz, lz) {
      let Mz = Ez % 2 ? 2 : 1;
      if (Ez % 2 == nz % 2)
        for (let tz = uz, Hz = 0; tz < bz;) {
          let uz = !0,
            Oz = !1;
          if (Hz == iz.length || tz < iz[Hz].from) {
            let zz = ru[tz];
            zz != Mz && (uz = !1, Oz = 16 == zz)
          }
          let pz = uz || 1 != Mz ? null : [],
            dz = uz ? Ez : Ez + 1,
            Fz = tz;
          zz: for (;;)
            if (Hz < iz.length && Fz == iz[Hz].from) {
              if (Oz) break zz;
              let Zz = iz[Hz];
              if (!uz)
                for (let zz = Zz.to, uz = Hz + 1;;) {
                  if (zz == bz) break zz;
                  if (!(uz < iz.length && iz[uz].from == zz)) {
                    if (ru[zz] == Mz) break zz;
                    break
                  }
                  zz = iz[uz++].to
                }
              if (Hz++, pz) pz.push(Zz);
              else {
                Zz.from > tz && lz.push(new fu(tz, Zz.from, dz)), Nu(zz, Zz.direction == Ou != !(dz % 2) ? Ez + 1 : Ez, nz, Zz.inner, Zz.from, Zz.to, lz), tz = Zz.to
              }
              Fz = Zz.to
            } else {
              if (Fz == bz || (uz ? ru[Fz] != Mz : ru[Fz] == Mz)) break;
              Fz++
            } pz ? ou(zz, tz, Fz, Ez + 1, nz, pz, lz) : tz < Fz && lz.push(new fu(tz, Fz, dz)), tz = Fz
        } else
          for (let tz = bz, Hz = iz.length; tz > uz;) {
            let bz = !0,
              Oz = !1;
            if (!Hz || tz > iz[Hz - 1].to) {
              let zz = ru[tz - 1];
              zz != Mz && (bz = !1, Oz = 16 == zz)
            }
            let pz = bz || 1 != Mz ? null : [],
              dz = bz ? Ez : Ez + 1,
              Fz = tz;
            zz: for (;;)
              if (Hz && Fz == iz[Hz - 1].to) {
                if (Oz) break zz;
                let Zz = iz[--Hz];
                if (!bz)
                  for (let zz = Zz.from, bz = Hz;;) {
                    if (zz == uz) break zz;
                    if (!bz || iz[bz - 1].to != zz) {
                      if (ru[zz - 1] == Mz) break zz;
                      break
                    }
                    zz = iz[--bz].from
                  }
                if (pz) pz.push(Zz);
                else {
                  Zz.to < tz && lz.push(new fu(Zz.to, tz, dz)), Nu(zz, Zz.direction == Ou != !(dz % 2) ? Ez + 1 : Ez, nz, Zz.inner, Zz.from, Zz.to, lz), tz = Zz.from
                }
                Fz = Zz.from
              } else {
                if (Fz == uz || (bz ? ru[Fz - 1] != Mz : ru[Fz - 1] == Mz)) break;
                Fz--
              } pz ? ou(zz, Fz, tz, Ez + 1, nz, pz, lz) : Fz < tz && lz.push(new fu(Fz, tz, dz)), tz = Fz
          }
    }

    function Nu(zz, uz, bz, Ez, nz, iz, lz) {
      let Mz = uz % 2 ? 2 : 1;
      ! function(zz, uz, bz, Ez, nz) {
        for (let iz = 0; iz <= Ez.length; iz++) {
          let lz = iz ? Ez[iz - 1].to : uz,
            Mz = iz < Ez.length ? Ez[iz].from : bz,
            tz = iz ? 256 : nz;
          for (let uz = lz, bz = tz, Ez = tz; uz < Mz; uz++) {
            let nz = wu(zz.charCodeAt(uz));
            512 == nz ? nz = bz : 8 == nz && 4 == Ez && (nz = 16), ru[uz] = 4 == nz ? 2 : nz, 7 & nz && (Ez = nz), bz = nz
          }
          for (let zz = lz, uz = tz, Ez = tz; zz < Mz; zz++) {
            let nz = ru[zz];
            if (128 == nz) zz < Mz - 1 && uz == ru[zz + 1] && 24 & uz ? nz = ru[zz] = uz : ru[zz] = 256;
            else if (64 == nz) {
              let nz = zz + 1;
              for (; nz < Mz && 64 == ru[nz];) nz++;
              let iz = zz && 8 == uz || nz < bz && 8 == ru[nz] ? 1 == Ez ? 1 : 8 : 256;
              for (let uz = zz; uz < nz; uz++) ru[uz] = iz;
              zz = nz - 1
            } else 8 == nz && 1 == Ez && (ru[zz] = 1);
            uz = nz, 7 & nz && (Ez = nz)
          }
        }
      }(zz, nz, iz, Ez, Mz),
      function(zz, uz, bz, Ez, nz) {
        let iz = 1 == nz ? 2 : 1;
        for (let lz = 0, Mz = 0, tz = 0; lz <= Ez.length; lz++) {
          let Hz = lz ? Ez[lz - 1].to : uz,
            Oz = lz < Ez.length ? Ez[lz].from : bz;
          for (let uz, bz, Ez, lz = Hz; lz < Oz; lz++)
            if (bz = Ru[uz = zz.charCodeAt(lz)])
              if (bz < 0) {
                for (let zz = Mz - 3; zz >= 0; zz -= 3)
                  if (Ku[zz + 1] == -bz) {
                    let uz = Ku[zz + 2],
                      bz = 2 & uz ? nz : 4 & uz ? 1 & uz ? iz : nz : 0;
                    bz && (ru[lz] = ru[Ku[zz]] = bz), Mz = zz;
                    break
                  }
              } else {
                if (189 == Ku.length) break;
                Ku[Mz++] = lz, Ku[Mz++] = uz, Ku[Mz++] = tz
              }
          else if (2 == (Ez = ru[lz]) || 1 == Ez) {
            let zz = Ez == nz;
            tz = zz ? 0 : 1;
            for (let uz = Mz - 3; uz >= 0; uz -= 3) {
              let bz = Ku[uz + 2];
              if (2 & bz) break;
              if (zz) Ku[uz + 2] |= 2;
              else {
                if (4 & bz) break;
                Ku[uz + 2] |= 4
              }
            }
          }
        }
      }(zz, nz, iz, Ez, Mz),
      function(zz, uz, bz, Ez) {
        for (let nz = 0, iz = Ez; nz <= bz.length; nz++) {
          let lz = nz ? bz[nz - 1].to : zz,
            Mz = nz < bz.length ? bz[nz].from : uz;
          for (let tz = lz; tz < Mz;) {
            let lz = ru[tz];
            if (256 == lz) {
              let lz = tz + 1;
              for (;;)
                if (lz == Mz) {
                  if (nz == bz.length) break;
                  lz = bz[nz++].to, Mz = nz < bz.length ? bz[nz].from : uz
                } else {
                  if (256 != ru[lz]) break;
                  lz++
                } let Hz = 1 == iz,
                Oz = Hz == (1 == (lz < uz ? ru[lz] : Ez)) ? Hz ? 1 : 2 : Ez;
              for (let uz = lz, Ez = nz, iz = Ez ? bz[Ez - 1].to : zz; uz > tz;) uz == iz && (uz = bz[--Ez].from, iz = Ez ? bz[Ez - 1].to : zz), ru[--uz] = Oz;
              tz = lz
            } else iz = lz, tz++
          }
        }
      }(nz, iz, Ez, Mz), ou(zz, nz, iz, uz, bz, Ez, lz)
    }

    function vu(zz, uz, bz) {
      if (!zz) return [new fu(0, 0, uz == pu ? 1 : 0)];
      if (uz == Ou && !bz.length && !Xu.test(zz)) return xu(zz.length);
      if (bz.length)
        for (; zz.length > ru.length;) ru[ru.length] = 256;
      let Ez = [],
        nz = uz == Ou ? 0 : 1;
      return Nu(zz, nz, nz, bz, 0, zz.length, Ez), Ez
    }

    function xu(zz) {
      return [new fu(0, zz, 0)]
    }
    let Ju = "";

    function Au(zz, uz, bz, nz, iz) {
      var lz;
      let Mz = nz.head - zz.from,
        tz = fu.find(uz, Mz, null !== (lz = nz.bidiLevel) && void 0 !== lz ? lz : -1, nz.assoc),
        Hz = uz[tz],
        Oz = Hz.side(iz, bz);
      if (Mz == Oz) {
        let zz = tz += iz ? 1 : -1;
        if (zz < 0 || zz >= uz.length) return null;
        Hz = uz[tz = zz], Mz = Hz.side(!iz, bz), Oz = Hz.side(iz, bz)
      }
      let pz = (0, Ez.U)(zz.text, Mz, Hz.forward(iz, bz));
      (pz < Hz.from || pz > Hz.to) && (pz = Oz), Ju = zz.text.slice(Math.min(Mz, pz), Math.max(Mz, pz));
      let dz = tz == (iz ? uz.length - 1 : 0) ? null : uz[tz + (iz ? 1 : -1)];
      return dz && pz == Oz && dz.level + (iz ? 0 : 1) < Hz.level ? Ez.l.cursor(dz.side(!iz, bz) + zz.from, dz.forward(iz, bz) ? 1 : -1, dz.level) : Ez.l.cursor(pz + zz.from, Hz.forward(iz, bz) ? -1 : 1, Hz.level)
    }

    function Tu(zz, uz, bz) {
      for (let Ez = uz; Ez < bz; Ez++) {
        let uz = wu(zz.charCodeAt(Ez));
        if (1 == uz) return Ou;
        if (2 == uz || 4 == uz) return pu
      }
      return Ou
    }
    const Lu = Ez.r.define(),
      Pu = Ez.r.define(),
      Gu = Ez.r.define(),
      au = Ez.r.define(),
      Vu = Ez.r.define(),
      mu = Ez.r.define(),
      qu = Ez.r.define(),
      hu = Ez.r.define(),
      Uu = Ez.r.define(),
      cu = Ez.r.define({
        combine: zz => zz.some((zz => zz))
      }),
      gu = Ez.r.define({
        combine: zz => zz.some((zz => zz))
      }),
      Su = Ez.r.define();
    class yu {
      constructor(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = zz, this.y = uz, this.x = bz, this.yMargin = Ez, this.xMargin = nz, this.isSnapshot = iz
      }
      map(zz) {
        return zz.empty ? this : new yu(this.range.map(zz), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(zz) {
        return this.range.to <= zz.doc.length ? this : new yu(Ez.l.cursor(zz.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const Du = Ez.B.define({
        map: (zz, uz) => zz.map(uz)
      }),
      Qu = Ez.B.define();

    function Wu(zz, uz, bz) {
      let Ez = zz.facet(au);
      Ez.length ? Ez[0](uz) : window.onerror && window.onerror(String(uz), bz, void 0, void 0, uz) || (bz ? console.error(bz + ":", uz) : console.error(uz))
    }
    const eu = Ez.r.define({
      combine: zz => !zz.length || zz[0]
    });
    let ju = 0;
    const Iu = Ez.r.define({
      combine: zz => zz.filter(((uz, bz) => {
        for (let Ez = 0; Ez < bz; Ez++)
          if (zz[Ez].plugin == uz.plugin) return !1;
        return !0
      }))
    });
    class Bu {
      constructor(zz, uz, bz, Ez, nz) {
        this.id = zz, this.create = uz, this.domEventHandlers = bz, this.domEventObservers = Ez, this.baseExtensions = nz(this), this.extension = this.baseExtensions.concat(Iu.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(zz) {
        return this.baseExtensions.concat(Iu.of({
          plugin: this,
          arg: zz
        }))
      }
      static define(zz, uz) {
        const {
          eventHandlers: bz,
          eventObservers: Ez,
          provide: nz,
          cE: iz
        } = uz || {};
        return new Bu(ju++, zz, bz, Ez, (zz => {
          let uz = [];
          return iz && uz.push(zb.of((uz => {
            let bz = uz.plugin(zz);
            return bz ? iz(bz) : Gz.none
          }))), nz && uz.push(nz(zz)), uz
        }))
      }
      static fromClass(zz, uz) {
        return Bu.define(((uz, bz) => new zz(uz, bz)), uz)
      }
    }
    class Cu {
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
            } catch (uz) {
              if (Wu(zz.state, uz, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (bz) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(zz, this.spec.arg)
        } catch (uz) {
          Wu(zz.state, uz, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(zz) {
        var uz;
        if (null === (uz = this.value) || void 0 === uz ? void 0 : uz.destroy) try {
          this.value.destroy()
        } catch (bz) {
          Wu(zz.state, bz, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const Yu = Ez.r.define(),
      ku = Ez.r.define(),
      zb = Ez.r.define(),
      ub = Ez.r.define(),
      bb = Ez.r.define(),
      Eb = Ez.r.define(),
      nb = Ez.r.define();

    function ib(zz, uz) {
      let bz = zz.state.facet(nb);
      if (!bz.length) return bz;
      let nz = bz.map((uz => uz instanceof Function ? uz(zz) : uz)),
        iz = [];
      return Ez.x.spans(nz, uz.from, uz.to, {
        point() {},
        span(zz, bz, Ez, nz) {
          let lz = zz - uz.from,
            Mz = bz - uz.from,
            tz = iz;
          for (let iz = Ez.length - 1; iz >= 0; iz--, nz--) {
            let zz, bz = Ez[iz].spec.bidiIsolate;
            if (null == bz && (bz = Tu(uz.text, lz, Mz)), nz > 0 && tz.length && (zz = tz[tz.length - 1]).to == lz && zz.direction == bz) zz.to = Mz, tz = zz.inner;
            else {
              let zz = {
                from: lz,
                to: Mz,
                direction: bz,
                inner: []
              };
              tz.push(zz), tz = zz.inner
            }
          }
        }
      }), iz
    }
    const lb = Ez.r.define();

    function Mb(zz) {
      let uz = 0,
        bz = 0,
        Ez = 0,
        nz = 0;
      for (let iz of zz.state.facet(lb)) {
        let lz = iz(zz);
        lz && (null != lz.left && (uz = Math.max(uz, lz.left)), null != lz.right && (bz = Math.max(bz, lz.right)), null != lz.top && (Ez = Math.max(Ez, lz.top)), null != lz.bottom && (nz = Math.max(nz, lz.bottom)))
      }
      return {
        left: uz,
        right: bz,
        top: Ez,
        bottom: nz
      }
    }
    const tb = Ez.r.define();
    class Hb {
      constructor(zz, uz, bz, Ez) {
        this.fromA = zz, this.toA = uz, this.fromB = bz, this.toB = Ez
      }
      join(zz) {
        return new Hb(Math.min(this.fromA, zz.fromA), Math.max(this.toA, zz.toA), Math.min(this.fromB, zz.fromB), Math.max(this.toB, zz.toB))
      }
      addToSet(zz) {
        let uz = zz.length,
          bz = this;
        for (; uz > 0; uz--) {
          let Ez = zz[uz - 1];
          if (!(Ez.fromA > bz.toA)) {
            if (Ez.toA < bz.fromA) break;
            bz = bz.join(Ez), zz.splice(uz - 1, 1)
          }
        }
        return zz.splice(uz, 0, bz), zz
      }
      static extendWithRanges(zz, uz) {
        if (0 == uz.length) return zz;
        let bz = [];
        for (let Ez = 0, nz = 0, iz = 0;;) {
          let lz = Ez < zz.length ? zz[Ez].fromB : 1e9,
            Mz = nz < uz.length ? uz[nz] : 1e9,
            tz = Math.min(lz, Mz);
          if (1e9 == tz) break;
          let Hz = tz + iz,
            Oz = tz,
            pz = Hz;
          for (;;)
            if (nz < uz.length && uz[nz] <= Oz) {
              let bz = uz[nz + 1];
              nz += 2, Oz = Math.max(Oz, bz);
              for (let uz = Ez; uz < zz.length && zz[uz].fromB <= Oz; uz++) iz = zz[uz].toA - zz[uz].toB;
              pz = Math.max(pz, bz + iz)
            } else {
              if (!(Ez < zz.length && zz[Ez].fromB <= Oz)) break;
              {
                let uz = zz[Ez++];
                Oz = Math.max(Oz, uz.toB), pz = Math.max(pz, uz.toA), iz = uz.toA - uz.toB
              }
            } bz.push(new Hb(Hz, pz, tz, Oz))
        }
        return bz
      }
    }
    class Ob {
      constructor(zz, uz, bz) {
        this.view = zz, this.state = uz, this.transactions = bz, this.flags = 0, this.startState = zz.state, this.changes = Ez.ChangeSet.empty(this.startState.doc.length);
        for (let Ez of bz) this.changes = this.changes.compose(Ez.changes);
        let nz = [];
        this.changes.iterChangedRanges(((zz, uz, bz, Ez) => nz.push(new Hb(zz, uz, bz, Ez)))), this.changedRanges = nz
      }
      static create(zz, uz, bz) {
        return new Ob(zz, uz, bz)
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
    const pb = [];
    class db {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = zz, this.length = uz, this.flags = bz, this.parent = null, zz.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return pb
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
          zz && function(zz, uz) {
            for (let bz = zz.attributes.length - 1; bz >= 0; bz--) {
              let Ez = zz.attributes[bz].name;
              null == uz[Ez] && zz.removeAttribute(Ez)
            }
            for (let bz in uz) {
              let Ez = uz[bz];
              "style" == bz ? zz.style.cssText = Ez : zz.getAttribute(bz) != Ez && zz.setAttribute(bz, Ez)
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let bz of this.children) {
          if (bz == zz) return uz;
          uz += bz.length + bz.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(zz) {
        return this.posBefore(zz) + zz.length
      }
      covers(zz) {
        return !0
      }
      coordsIn(zz, uz) {
        return null
      }
      domPosFor(zz, uz) {
        let bz = Qz(this.dom),
          Ez = this.length ? zz > 0 : uz > 0;
        return new tu(this.parent.dom, bz + (Ez ? 1 : 0), 0 == zz || zz == this.length)
      }
      markDirty(zz) {
        this.flags &= -3, zz && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let zz = this; zz; zz = zz.parent)
          if (zz instanceof Rb) return zz;
        return null
      }
      static get(zz) {
        return zz.cmTile
      }
    }
    class Fb extends db {
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
        let uz, bz = this.dom,
          Ez = null,
          nz = (null === zz || void 0 === zz ? void 0 : zz.node) == bz ? zz : null,
          iz = 0;
        for (let lz of this.children) {
          if (lz.sync(zz), iz += lz.length + lz.breakAfter, uz = Ez ? Ez.nextSibling : bz.firstChild, nz && uz != lz.dom && (nz.written = !0), lz.dom.parentNode == bz)
            for (; uz && uz != lz.dom;) uz = Zb(uz);
          else bz.insertBefore(lz.dom, uz);
          Ez = lz.dom
        }
        for (uz = Ez ? Ez.nextSibling : bz.firstChild, nz && uz && (nz.written = !0); uz;) uz = Zb(uz);
        this.length = iz
      }
    }

    function Zb(zz) {
      let uz = zz.nextSibling;
      return zz.parentNode.removeChild(zz), uz
    }
    class Rb extends Fb {
      constructor(zz, uz) {
        super(uz), this.view = zz
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
          let uz = db.get(zz);
          if (uz && this.owns(uz)) return uz;
          zz = zz.parentNode
        }
      }
      blockTiles(zz) {
        for (let uz = [], bz = this, Ez = 0, nz = 0;;)
          if (Ez == bz.children.length) {
            if (!uz.length) return;
            bz = bz.parent, bz.breakAfter && nz++, Ez = uz.pop()
          } else {
            let iz = bz.children[Ez++];
            if (iz instanceof Kb) uz.push(Ez), bz = iz, Ez = 0;
            else {
              let uz = nz + iz.length,
                bz = zz(iz, nz);
              if (void 0 !== bz) return bz;
              nz = uz + iz.breakAfter
            }
          }
      }
      resolveBlock(zz, uz) {
        let bz, Ez, nz = -1,
          iz = -1;
        if (this.blockTiles(((lz, Mz) => {
            let tz = Mz + lz.length;
            if (zz >= Mz && zz <= tz) {
              if (lz.isWidget() && uz >= -1 && uz <= 1) {
                if (32 & lz.flags) return !0;
                16 & lz.flags && (bz = void 0)
              }(Mz < zz || zz == tz && (uz < -1 ? lz.length : lz.covers(1))) && (!bz || !lz.isWidget() && bz.isWidget()) && (bz = lz, nz = zz - Mz), (tz > zz || zz == Mz && (uz > 1 ? lz.length : lz.covers(-1))) && (!Ez || !lz.isWidget() && Ez.isWidget()) && (Ez = lz, iz = zz - Mz)
            }
          })), !bz && !Ez) throw new Error("No tile at position " + zz);
        return bz && uz < 0 || !Ez ? {
          tile: bz,
          offset: nz
        } : {
          tile: Ez,
          offset: iz
        }
      }
    }
    class Kb extends Fb {
      constructor(zz, uz) {
        super(zz), this.wrapper = uz
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
      static of (zz, uz) {
        let bz = new Kb(uz || document.createElement(zz.tagName), zz);
        return uz || (bz.flags |= 4), bz
      }
    }
    class wb extends Fb {
      constructor(zz, uz) {
        super(zz), this.attrs = uz
      }
      isLine() {
        return !0
      }
      static start(zz, uz, bz) {
        let Ez = new wb(uz || document.createElement("div"), zz);
        return uz && bz || (Ez.flags |= 4), Ez
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(zz, uz, bz) {
        let Ez = null,
          nz = -1,
          iz = null,
          lz = -1;
        ! function zz(Mz, tz) {
          for (let Hz = 0, Oz = 0; Hz < Mz.children.length && Oz <= tz; Hz++) {
            let pz = Mz.children[Hz],
              dz = Oz + pz.length;
            dz >= tz && (pz.isComposite() ? zz(pz, tz - Oz) : (!iz || iz.isHidden && (uz > 0 || bz && Xb(iz, pz))) && (dz > tz || 32 & pz.flags) ? (iz = pz, lz = tz - Oz) : (Oz < tz || 16 & pz.flags && !pz.isHidden) && (Ez = pz, nz = tz - Oz)), Oz = dz
          }
        }(this, zz);
        let Mz = (uz < 0 ? Ez : iz) || Ez || iz;
        return Mz ? {
          tile: Mz,
          offset: Mz == Ez ? nz : lz
        } : null
      }
      coordsIn(zz, uz) {
        let bz = this.resolveInline(zz, uz, !0);
        return bz ? bz.tile.coordsIn(Math.max(0, bz.offset), uz) : function(zz) {
          let uz = zz.dom.lastChild;
          if (!uz) return zz.dom.getBoundingClientRect();
          let bz = yz(uz);
          return bz[bz.length - 1] || null
        }(this)
      }
      domIn(zz, uz) {
        let bz = this.resolveInline(zz, uz);
        if (bz) {
          let {
            tile: zz,
            offset: Ez
          } = bz;
          if (this.dom.contains(zz.dom)) return zz.isText() ? new tu(zz.dom, Math.min(zz.dom.nodeValue.length, Ez)) : zz.domPosFor(Ez, 16 & zz.flags ? 1 : 32 & zz.flags ? -1 : uz);
          let nz = bz.tile.parent,
            iz = !1;
          for (let uz of nz.children) {
            if (iz) return new tu(uz.dom, 0);
            uz == bz.tile && (iz = !0)
          }
        }
        return new tu(this.dom, 0)
      }
    }

    function Xb(zz, uz) {
      let bz = zz.coordsIn(0, 1),
        Ez = uz.coordsIn(0, 1);
      return bz && Ez && Ez.top < bz.bottom
    }
    class fb extends Fb {
      constructor(zz, uz) {
        super(zz), this.mark = uz
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (zz, uz) {
        let bz = new fb(uz || document.createElement(zz.tagName), zz);
        return uz || (bz.flags |= 4), bz
      }
    }
    class sb extends db {
      constructor(zz, uz) {
        super(zz, uz.length), this.text = uz
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
      coordsIn(zz, uz) {
        let bz = this.dom.nodeValue.length;
        zz > bz && (zz = bz);
        let Ez = zz,
          nz = zz,
          iz = 0;
        0 == zz && uz < 0 || zz == bz && uz >= 0 ? Nz.chrome || Nz.gecko || (zz ? (Ez--, iz = 1) : nz < bz && (nz++, iz = -1)) : uz < 0 ? Ez-- : nz < bz && nz++;
        let lz = Eu(this.dom, Ez, nz).getClientRects();
        if (!lz.length) return null;
        let Mz = lz[(iz ? iz < 0 : uz >= 0) ? 0 : lz.length - 1];
        return Nz.safari && !iz && 0 == Mz.width && (Mz = Array.prototype.find.call(lz, (zz => zz.width)) || Mz), iz ? Iz(Mz, iz < 0) : Mz || null
      }
      static of (zz, uz) {
        let bz = new sb(uz || document.createTextNode(zz), zz);
        return uz || (bz.flags |= 2), bz
      }
    }
    class rb extends db {
      constructor(zz, uz, bz, Ez) {
        super(zz, uz, Ez), this.widget = bz
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
      coordsIn(zz, uz) {
        return this.coordsInWidget(zz, uz, !1)
      }
      coordsInWidget(zz, uz, bz) {
        let Ez = this.widget.coordsAt(this.dom, zz, uz);
        if (Ez) return Ez;
        if (bz) return Iz(this.dom.getBoundingClientRect(), this.length ? 0 == zz : uz <= 0);
        {
          let uz = this.dom.getClientRects(),
            bz = null;
          if (!uz.length) return null;
          let Ez = !!(16 & this.flags) || !(32 & this.flags) && zz > 0;
          for (let nz = Ez ? uz.length - 1 : 0; bz = uz[nz], !(zz > 0 ? 0 == nz : nz == uz.length - 1 || bz.top < bz.bottom); nz += Ez ? -1 : 1);
          return Iz(bz, !Ez)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Ez.I.empty;
        let {
          root: zz
        } = this;
        if (!zz) return Ez.I.empty;
        let uz = this.posAtStart;
        return zz.view.state.doc.slice(uz, uz + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (zz, uz, bz, Ez, nz) {
        return nz || (nz = zz.toDOM(uz), zz.editable || (nz.contentEditable = "false")), new rb(nz, bz, zz, Ez)
      }
    }
    class ob extends db {
      constructor(zz) {
        let uz = document.createElement("img");
        uz.className = "cm-widgetBuffer", uz.setAttribute("aria-hidden", "true"), super(uz, 0, zz)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Ez.I.empty
      }
      coordsIn(zz) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Nb {
      constructor(zz) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = zz
      }
      advance(zz, uz, bz) {
        let {
          tile: Ez,
          index: nz,
          beforeBreak: iz,
          parents: lz
        } = this;
        for (; zz || uz > 0;)
          if (Ez.isComposite())
            if (iz) {
              if (!zz) break;
              bz && bz.break(), zz--, iz = !1
            } else if (nz == Ez.children.length) {
          if (!zz && !lz.length) break;
          bz && bz.leave(Ez), iz = !!Ez.breakAfter, ({
            tile: Ez,
            index: nz
          } = lz.pop()), nz++
        } else {
          let Mz = Ez.children[nz],
            tz = Mz.breakAfter;
          !(uz > 0 ? Mz.length <= zz : Mz.length < zz) || bz && !1 === bz.skip(Mz, 0, Mz.length) && Mz.isComposite ? (lz.push({
            tile: Ez,
            index: nz
          }), Ez = Mz, nz = 0, bz && Mz.isComposite() && bz.enter(Mz)) : (iz = !!tz, nz++, zz -= Mz.length)
        } else if (nz == Ez.length) iz = !!Ez.breakAfter, ({
          tile: Ez,
          index: nz
        } = lz.pop()), nz++;
        else {
          if (!zz) break;
          {
            let uz = Math.min(zz, Ez.length - nz);
            bz && bz.skip(Ez, nz, nz + uz), zz -= uz, nz += uz
          }
        }
        return this.tile = Ez, this.index = nz, this.beforeBreak = iz, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class vb {
      constructor(zz, uz, bz, Ez) {
        this.from = zz, this.to = uz, this.wrapper = bz, this.rank = Ez
      }
    }
    class xb {
      constructor(zz, uz, bz) {
        this.cache = zz, this.root = uz, this.blockWrappers = bz, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(zz, uz, bz, Ez) {
        var nz;
        this.flushBuffer();
        let iz = this.ensureMarks(uz, bz),
          lz = iz.lastChild;
        if (lz && lz.isText() && !(8 & lz.flags) && lz.length + zz.length < 512) {
          this.cache.reused.set(lz, 2), (iz.children[iz.children.length - 1] = new sb(lz.dom, lz.text + zz)).parent = iz
        } else iz.append(Ez || sb.of(zz, null === (nz = this.cache.find(sb)) || void 0 === nz ? void 0 : nz.dom));
        this.pos += zz.length, this.afterWidget = null
      }
      addComposition(zz, uz) {
        let bz = this.curLine;
        bz.dom != uz.line.dom && (bz.setDOM(this.cache.reused.has(uz.line) ? ab(uz.line.dom) : uz.line.dom), this.cache.reused.set(uz.line, 2));
        let Ez = bz;
        for (let lz = uz.marks.length - 1; lz >= 0; lz--) {
          let zz = uz.marks[lz],
            bz = Ez.lastChild;
          if (bz instanceof fb && bz.mark.eq(zz.mark)) bz.dom != zz.dom && bz.setDOM(ab(zz.dom)), Ez = bz;
          else {
            if (this.cache.reused.get(zz)) {
              let uz = db.get(zz.dom);
              uz && uz.setDOM(ab(zz.dom))
            }
            let uz = fb.of(zz.mark, zz.dom);
            Ez.append(uz), Ez = uz
          }
          this.cache.reused.set(zz, 2)
        }
        let nz = db.get(zz.text);
        nz && this.cache.reused.set(nz, 2);
        let iz = new sb(zz.text, zz.text.nodeValue);
        iz.flags |= 8, Ez.append(iz)
      }
      addInlineWidget(zz, uz, bz) {
        let Ez = this.afterWidget && 48 & zz.flags && (48 & this.afterWidget.flags) == (48 & zz.flags);
        Ez || this.flushBuffer();
        let nz = this.ensureMarks(uz, bz);
        Ez || 16 & zz.flags || nz.append(this.getBuffer(1)), nz.append(zz), this.pos += zz.length, this.afterWidget = zz
      }
      addMark(zz, uz, bz) {
        this.flushBuffer(), this.ensureMarks(uz, bz).append(zz), this.pos += zz.length, this.afterWidget = null
      }
      addBlockWidget(zz) {
        this.getBlockPos().append(zz), this.pos += zz.length, this.lastBlock = zz, this.endLine()
      }
      continueWidget(zz) {
        (this.afterWidget || this.lastBlock).length += zz, this.pos += zz
      }
      addLineStart(zz, uz) {
        var bz;
        zz || (zz = Gb);
        let Ez = wb.start(zz, uz || (null === (bz = this.cache.find(wb)) || void 0 === bz ? void 0 : bz.dom), !!uz);
        this.getBlockPos().append(this.lastBlock = this.curLine = Ez)
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
      ensureMarks(zz, uz) {
        var bz;
        let Ez = this.curLine;
        for (let nz = zz.length - 1; nz >= 0; nz--) {
          let iz, lz = zz[nz];
          if (uz > 0 && (iz = Ez.lastChild) && iz instanceof fb && iz.mark.eq(lz)) Ez = iz, uz--;
          else {
            let zz = fb.of(lz, null === (bz = this.cache.find(fb, (zz => zz.mark.eq(lz)))) || void 0 === bz ? void 0 : bz.dom);
            Ez.append(zz), Ez = zz, uz = 0
          }
        }
        return Ez
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let zz = this.curLine.lastChild;
          zz && Pb(this.curLine, !1) && ("BR" == zz.dom.nodeName || !zz.isWidget() || Nz.ios && Pb(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(mb, 0, 32) || new rb(mb.toDOM(), 0, mb, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let zz = this.wrappers.length - 1; zz >= 0; zz--) this.wrappers[zz].to < this.pos && this.wrappers.splice(zz, 1);
        for (let zz = this.blockWrappers; zz.value && zz.from <= this.pos; zz.next())
          if (zz.to >= this.pos) {
            let uz = new vb(zz.from, zz.to, zz.value, zz.rank),
              bz = this.wrappers.length;
            for (; bz > 0 && (this.wrappers[bz - 1].rank - uz.rank || this.wrappers[bz - 1].to - uz.to) < 0;) bz--;
            this.wrappers.splice(bz, 0, uz)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var zz;
        this.updateBlockWrappers();
        let uz = this.root;
        for (let bz of this.wrappers) {
          let Ez = uz.lastChild;
          if (bz.from < this.pos && Ez instanceof Kb && Ez.wrapper.eq(bz.wrapper)) uz = Ez;
          else {
            let Ez = Kb.of(bz.wrapper, null === (zz = this.cache.find(Kb, (zz => zz.wrapper.eq(bz.wrapper)))) || void 0 === zz ? void 0 : zz.dom);
            uz.append(Ez), uz = Ez
          }
        }
        return uz
      }
      blockPosCovered() {
        let zz = this.lastBlock;
        return null != zz && !zz.breakAfter && (!zz.isWidget() || (160 & zz.flags) > 0)
      }
      getBuffer(zz) {
        let uz = 2 | (zz < 0 ? 16 : 32),
          bz = this.cache.find(ob, void 0, 1);
        return bz && (bz.flags = uz), bz || new ob(uz)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Jb {
      constructor(zz) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = zz.iter()
      }
      skip(zz) {
        this.textOff + zz <= this.text.length ? this.textOff += zz : (this.skipCount += zz - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(zz) {
        if (this.textOff == this.text.length) {
          let {
            value: uz,
            lineBreak: bz,
            done: Ez
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Ez) throw new Error("Ran out of text content when drawing inline views");
          this.text = uz;
          let nz = this.textOff = Math.min(zz, uz.length);
          return bz ? null : uz.slice(0, nz)
        }
        let uz = Math.min(this.text.length, this.textOff + zz),
          bz = this.text.slice(this.textOff, uz);
        return this.textOff = uz, bz
      }
    }
    const Ab = [rb, wb, sb, fb, ob, Kb, Rb];
    for (let ql = 0; ql < Ab.length; ql++) Ab[ql].bucket = ql;
    class Tb {
      constructor(zz) {
        this.view = zz, this.buckets = Ab.map((() => [])), this.index = Ab.map((() => 0)), this.reused = new Map
      }
      add(zz) {
        let uz = zz.constructor.bucket,
          bz = this.buckets[uz];
        bz.length < 6 ? bz.push(zz) : bz[this.index[uz] = (this.index[uz] + 1) % 6] = zz
      }
      find(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Ez = zz.bucket,
          nz = this.buckets[Ez],
          iz = this.index[Ez];
        for (let lz = nz.length - 1; lz >= 0; lz--) {
          let zz = (lz + iz) % nz.length,
            Mz = nz[zz];
          if ((!uz || uz(Mz)) && !this.reused.has(Mz)) return nz.splice(zz, 1), zz < iz && this.index[Ez]--, this.reused.set(Mz, bz), Mz
        }
        return null
      }
      findWidget(zz, uz, bz) {
        let Ez = this.buckets[0];
        if (Ez.length)
          for (let nz = 0, iz = 0;; nz++) {
            if (nz == Ez.length) {
              if (iz) return null;
              iz = 1, nz = 0
            }
            let lz = Ez[nz];
            if (!this.reused.has(lz) && (0 == iz ? lz.widget.compare(zz) : lz.widget.constructor == zz.constructor && zz.updateDOM(lz.dom, this.view, lz.widget))) return Ez.splice(nz, 1), nz < this.index[0] && this.index[0]--, lz.widget == zz && lz.length == uz && (497 & lz.flags) == bz ? (this.reused.set(lz, 1), lz) : (this.reused.set(lz, 2), new rb(lz.dom, uz, zz, -498 & lz.flags | bz))
          }
      }
      reuse(zz) {
        return this.reused.set(zz, 1), zz
      }
      maybeReuse(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(zz)) return this.reused.set(zz, uz), zz.dom
      }
      clear() {
        for (let zz = 0; zz < this.buckets.length; zz++) this.buckets[zz].length = this.index[zz] = 0
      }
    }
    class Lb {
      constructor(zz, uz, bz, nz, iz) {
        this.view = zz, this.cE = nz, this.disallowBlockEffectsFor = iz, this.openWidget = !1, this.openMarks = 0, this.cache = new Tb(zz), this.text = new Jb(zz.state.doc), this.builder = new xb(this.cache, new Rb(zz, zz.contentDOM), Ez.x.iter(bz)), this.cache.reused.set(uz, 2), this.old = new Nb(uz), this.reuseWalker = {
          skip: (zz, uz, bz) => {
            if (this.cache.add(zz), zz.isComposite()) return !1
          },
          enter: zz => this.cache.add(zz),
          leave: () => {},
          break: () => {}
        }
      }
      run(zz, uz) {
        let bz = uz && this.getCompositionContext(uz.text);
        for (let Ez = 0, nz = 0, iz = 0;;) {
          let lz = iz < zz.length ? zz[iz++] : null,
            Mz = lz ? lz.fromA : this.old.root.length;
          if (Mz > Ez) {
            let zz = Mz - Ez;
            this.preserve(zz, !iz, !lz), Ez = Mz, nz += zz
          }
          if (!lz) break;
          uz && lz.fromA <= uz.range.fromA && lz.toA >= uz.range.toA ? (this.forward(lz.fromA, uz.range.fromA, uz.range.fromA < uz.range.toA ? 1 : -1), this.emit(nz, uz.range.fromB), this.cache.clear(), this.builder.addComposition(uz, bz), this.text.skip(uz.range.toB - uz.range.fromB), this.forward(uz.range.fromA, lz.toA), this.emit(uz.range.toB, lz.toB)) : (this.forward(lz.fromA, lz.toA), this.emit(nz, lz.toB)), nz = lz.toB, Ez = lz.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(zz, uz, bz) {
        let Ez = function(zz) {
            let uz = [];
            for (let bz = zz.parents.length; bz > 1; bz--) {
              let Ez = bz == zz.parents.length ? zz.tile : zz.parents[bz].tile;
              Ez instanceof fb && uz.push(Ez.mark)
            }
            return uz
          }(this.old),
          nz = this.openMarks;
        this.old.advance(zz, bz ? 1 : -1, {
          skip: (zz, uz, bz) => {
            if (zz.isWidget())
              if (this.openWidget) this.builder.continueWidget(bz - uz);
              else {
                let iz = bz > 0 || uz < zz.length ? rb.of(zz.widget, this.view, bz - uz, 496 & zz.flags, this.cache.maybeReuse(zz)) : this.cache.reuse(zz);
                256 & iz.flags ? (iz.flags &= -2, this.builder.addBlockWidget(iz)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(iz, Ez, nz), nz = Ez.length)
              }
            else if (zz.isText()) this.builder.ensureLine(null), uz || bz != zz.length || this.cache.reused.has(zz) ? (this.cache.add(zz), this.builder.addText(zz.text.slice(uz, bz), Ez, nz)) : this.builder.addText(zz.text, Ez, nz, this.cache.reuse(zz)), nz = Ez.length;
            else if (zz.isLine()) zz.flags &= -2, this.cache.reused.set(zz, 1), this.builder.addLine(zz);
            else if (zz instanceof ob) this.cache.add(zz);
            else {
              if (!(zz instanceof fb)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(zz, Ez, nz), this.cache.reused.set(zz, 1), nz = Ez.length
            }
            this.openWidget = !1
          },
          enter: zz => {
            zz.isLine() ? this.builder.addLineStart(zz.attrs, this.cache.maybeReuse(zz)) : (this.cache.add(zz), zz instanceof fb && Ez.unshift(zz.mark)), this.openWidget = !1
          },
          leave: zz => {
            zz.isLine() ? Ez.length && (Ez.length = nz = 0) : zz instanceof fb && (Ez.shift(), nz = Math.min(nz, Ez.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(zz)
      }
      emit(zz, uz) {
        let bz = null,
          nz = this.builder,
          iz = 0,
          lz = Ez.x.spans(this.cE, zz, uz, {
            point: (zz, uz, Ez, lz, Mz, tz) => {
              if (Ez instanceof mz) {
                if (this.disallowBlockEffectsFor[tz]) {
                  if (Ez.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (uz > this.view.state.doc.lineAt(zz).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (iz = lz.length, Mz > lz.length) nz.continueWidget(uz - zz);
                else {
                  let iz = Ez.widget || (Ez.block ? Vb.block : Vb.inline),
                    tz = function(zz) {
                      let uz = zz.isReplace ? (zz.startSide < 0 ? 64 : 0) | (zz.endSide > 0 ? 128 : 0) : zz.startSide > 0 ? 32 : 16;
                      zz.block && (uz |= 256);
                      return uz
                    }(Ez),
                    Hz = this.cache.findWidget(iz, uz - zz, tz) || rb.of(iz, this.view, uz - zz, tz);
                  Ez.block ? (Ez.startSide > 0 && nz.addLineStartIfNotCovered(bz), nz.addBlockWidget(Hz)) : (nz.ensureLine(bz), nz.addInlineWidget(Hz, lz, Mz))
                }
                bz = null
              } else bz = function(zz, uz) {
                let bz = uz.spec.attributes,
                  Ez = uz.spec.class;
                if (!bz && !Ez) return zz;
                zz || (zz = {
                  class: "cm-line"
                });
                bz && vz(bz, zz);
                Ez && (zz.class += " " + Ez);
                return zz
              }(bz, Ez);
              uz > zz && this.text.skip(uz - zz)
            },
            span: (zz, uz, Ez, iz) => {
              for (let lz = zz; lz < uz;) {
                let Mz = this.text.next(Math.min(512, uz - lz));
                null == Mz ? (nz.addLineStartIfNotCovered(bz), nz.addBreak(), lz++) : (nz.ensureLine(bz), nz.addText(Mz, Ez, lz == zz ? iz : Ez.length), lz += Mz.length), bz = null
              }
            }
          });
        nz.addLineStartIfNotCovered(bz), this.openWidget = lz > iz, this.openMarks = lz
      }
      forward(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        uz - zz <= 10 ? this.old.advance(uz - zz, bz, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(uz - zz - 10, -1), this.old.advance(5, bz, this.reuseWalker))
      }
      getCompositionContext(zz) {
        let uz = [],
          bz = null;
        for (let Ez = zz.parentNode;; Ez = Ez.parentNode) {
          let zz = db.get(Ez);
          if (Ez == this.view.contentDOM) break;
          zz instanceof fb ? uz.push(zz) : (null === zz || void 0 === zz ? void 0 : zz.isLine()) ? bz = zz : zz instanceof Kb || ("DIV" != Ez.nodeName || bz || Ez == this.view.contentDOM ? bz || uz.push(fb.of(new az({
            tagName: Ez.nodeName.toLowerCase(),
            attributes: Tz(Ez)
          }), Ez)) : bz = new wb(Ez, Gb))
        }
        return {
          line: bz,
          marks: uz
        }
      }
    }

    function Pb(zz, uz) {
      let bz = zz => {
        for (let Ez of zz.children)
          if ((uz ? Ez.isText() : Ez.length) || bz(Ez)) return !0;
        return !1
      };
      return bz(zz)
    }
    const Gb = {
      class: "cm-line"
    };

    function ab(zz) {
      let uz = db.get(zz);
      return uz && uz.setDOM(zz.cloneNode()), zz
    }
    class Vb extends Lz {
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
    Vb.inline = new Vb("span"), Vb.block = new Vb("div");
    const mb = new class extends Lz {
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
    class qb {
      constructor(zz) {
        this.view = zz, this.cE = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Gz.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Rb(zz, zz.contentDOM), this.updateInner([new Hb(0, 0, 0, zz.state.doc.length)], null)
      }
      update(zz) {
        var uz;
        let bz = zz.changedRanges;
        this.minWidth > 0 && bz.length && (bz.every((zz => {
          let {
            fromA: uz,
            toA: bz
          } = zz;
          return bz < this.minWidthFrom || uz > this.minWidthTo
        })) ? (this.minWidthFrom = zz.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = zz.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(zz);
        let nz = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (uz = this.domChanged) || void 0 === uz ? void 0 : uz.newSel) ? nz = this.domChanged.newSel.head : function(zz, uz) {
          let bz = !1;
          uz && zz.iterChangedRanges(((zz, Ez) => {
            zz < uz.to && Ez > uz.from && (bz = !0)
          }));
          return bz
        }(zz.changes, this.hasComposition) || zz.selectionSet || (nz = zz.state.selection.main.head));
        let iz = nz > -1 ? function(zz, uz, bz) {
          let Ez = Ub(zz, bz);
          if (!Ez) return null;
          let {
            node: nz,
            from: iz,
            to: lz
          } = Ez, Mz = nz.nodeValue;
          if (/[\n\r]/.test(Mz)) return null;
          if (zz.state.doc.sliceString(Ez.from, Ez.to) != Mz) return null;
          let tz = uz.invertedDesc;
          return {
            range: new Hb(tz.mapPos(iz), tz.mapPos(lz), iz, lz),
            text: nz
          }
        }(this.view, zz.changes, nz) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: uz,
            to: Ez
          } = this.hasComposition;
          bz = new Hb(uz, Ez, zz.changes.mapPos(uz, -1), zz.changes.mapPos(Ez, 1)).addToSet(bz.slice())
        }
        this.hasComposition = iz ? {
          from: iz.range.fromB,
          to: iz.range.toB
        } : null, (Nz.ie || Nz.chrome) && !iz && zz && zz.state.doc.lines != zz.startState.doc.lines && (this.forceSelection = !0);
        let lz = this.cE,
          Mz = this.blockWrappers;
        this.updateDeco();
        let tz = function(zz, uz, bz) {
          let nz = new cb;
          return Ez.x.compare(zz, uz, bz, nz), nz.changes
        }(lz, this.cE, zz.changes);
        tz.length && (bz = Hb.extendWithRanges(bz, tz));
        let Hz = function(zz, uz, bz) {
          let nz = new gb;
          return Ez.x.compare(zz, uz, bz, nz), nz.changes
        }(Mz, this.blockWrappers, zz.changes);
        return Hz.length && (bz = Hb.extendWithRanges(bz, Hz)), iz && !bz.some((zz => zz.fromA <= iz.range.fromA && zz.toA >= iz.range.toA)) && (bz = iz.range.addToSet(bz.slice())), !(2 & this.tile.flags && 0 == bz.length) && (this.updateInner(bz, iz), zz.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(zz, uz) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: bz
        } = this.view;
        bz.ignore((() => {
          if (uz || zz.length) {
            let bz = this.tile,
              Ez = new Lb(this.view, bz, this.blockWrappers, this.cE, this.dynamicDecorationMap);
            uz && db.get(uz.text) && Ez.cache.reused.set(db.get(uz.text), 2), this.tile = Ez.run(zz, uz), hb(bz, Ez.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Ez = Nz.chrome || Nz.ios ? {
            node: bz.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Ez), !Ez || !Ez.written && bz.selectionRange.focusNode == Ez.node && this.tile.dom.contains(Ez.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Ez = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let nz of this.tile.children) nz.isWidget() && nz.widget instanceof Sb && Ez.push(nz.dom);
        bz.updateGaps(Ez)
      }
      updateEditContextFormatting(zz) {
        this.editContextFormatting = this.editContextFormatting.map(zz.changes);
        for (let uz of zz.transactions)
          for (let zz of uz.effects) zz.is(Qu) && (this.editContextFormatting = zz.value)
      }
      updateSelection() {
        let zz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: uz
        } = this.tile, bz = this.view.root.activeElement, Ez = bz == uz, nz = !Ez && !(this.view.state.facet(eu) || uz.tabIndex > -1) && Sz(uz, this.view.observer.selectionRange) && !(bz && uz.contains(bz));
        if (!(Ez || zz || nz)) return;
        let iz = this.forceSelection;
        this.forceSelection = !1;
        let lz, Mz, tz = this.view.state.selection.main;
        if (tz.empty ? Mz = lz = this.inlineDOMNearPos(tz.anchor, tz.assoc || 1) : (Mz = this.inlineDOMNearPos(tz.head, tz.head == tz.from ? 1 : -1), lz = this.inlineDOMNearPos(tz.anchor, tz.anchor == tz.from ? 1 : -1)), Nz.gecko && tz.empty && !this.hasComposition && (1 == (Hz = lz).node.nodeType && Hz.node.firstChild && (0 == Hz.offset || "false" == Hz.node.childNodes[Hz.offset - 1].contentEditable) && (Hz.offset == Hz.node.childNodes.length || "false" == Hz.node.childNodes[Hz.offset].contentEditable))) {
          let zz = document.createTextNode("");
          this.view.observer.ignore((() => lz.node.insertBefore(zz, lz.node.childNodes[lz.offset] || null))), lz = Mz = new tu(zz, 0), iz = !0
        }
        var Hz;
        let Oz = this.view.observer.selectionRange;
        !iz && Oz.focusNode && (Dz(lz.node, lz.offset, Oz.anchorNode, Oz.anchorOffset) && Dz(Mz.node, Mz.offset, Oz.focusNode, Oz.focusOffset) || this.suppressWidgetCursorChange(Oz, tz)) || (this.view.observer.ignore((() => {
          Nz.android && Nz.chrome && uz.contains(Oz.focusNode) && function(zz, uz) {
            for (let bz = zz; bz && bz != uz; bz = bz.assignedSlot || bz.parentNode)
              if (1 == bz.nodeType && "false" == bz.contentEditable) return !0;
            return !1
          }(Oz.focusNode, uz) && (uz.blur(), uz.focus({
            preventScroll: !0
          }));
          let zz = cz(this.view.root);
          if (zz)
            if (tz.empty) {
              if (Nz.gecko) {
                let zz = (Ez = lz.node, iz = lz.offset, 1 != Ez.nodeType ? 0 : (iz && "false" == Ez.childNodes[iz - 1].contentEditable ? 1 : 0) | (iz < Ez.childNodes.length && "false" == Ez.childNodes[iz].contentEditable ? 2 : 0));
                if (zz && 3 != zz) {
                  let uz = (1 == zz ? lu : Mu)(lz.node, lz.offset);
                  uz && (lz = new tu(uz.node, uz.offset))
                }
              }
              zz.collapse(lz.node, lz.offset), null != tz.bidiLevel && void 0 !== zz.caretBidiLevel && (zz.caretBidiLevel = tz.bidiLevel)
            } else if (zz.extend) {
            zz.collapse(lz.node, lz.offset);
            try {
              zz.extend(Mz.node, Mz.offset)
            } catch (Hz) {}
          } else {
            let uz = document.createRange();
            tz.anchor > tz.head && ([lz, Mz] = [Mz, lz]), uz.setEnd(Mz.node, Mz.offset), uz.setStart(lz.node, lz.offset), zz.removeAllRanges(), zz.addRange(uz)
          } else;
          var Ez, iz;
          nz && this.view.root.activeElement == uz && (uz.blur(), bz && bz.focus())
        })), this.view.observer.setSelectionRange(lz, Mz)), this.impreciseAnchor = lz.precise ? null : new tu(Oz.anchorNode, Oz.anchorOffset), this.impreciseHead = Mz.precise ? null : new tu(Oz.focusNode, Oz.focusOffset)
      }
      suppressWidgetCursorChange(zz, uz) {
        return this.hasComposition && uz.empty && Dz(zz.focusNode, zz.focusOffset, zz.anchorNode, zz.anchorOffset) && this.posFromDOM(zz.focusNode, zz.focusOffset) == uz.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: zz
        } = this, uz = zz.state.selection.main, bz = cz(zz.root), {
          anchorNode: Ez,
          anchorOffset: nz
        } = zz.observer.selectionRange;
        if (!bz || !uz.empty || !uz.assoc || !bz.modify) return;
        let iz = this.lineAt(uz.head, uz.assoc);
        if (!iz) return;
        let lz = iz.posAtStart;
        if (uz.head == lz || uz.head == lz + iz.length) return;
        let Mz = this.coordsAt(uz.head, -1),
          tz = this.coordsAt(uz.head, 1);
        if (!Mz || !tz || Mz.bottom > tz.top) return;
        let Hz = this.domAtPos(uz.head + uz.assoc, uz.assoc);
        bz.collapse(Hz.node, Hz.offset), bz.modify("move", uz.assoc < 0 ? "forward" : "backward", "lineboundary"), zz.observer.readSelectionRange();
        let Oz = zz.observer.selectionRange;
        zz.docView.posFromDOM(Oz.anchorNode, Oz.anchorOffset) != uz.from && bz.collapse(Ez, nz)
      }
      posFromDOM(zz, uz) {
        let bz = this.tile.nearest(zz);
        if (!bz) return 2 & this.tile.dom.compareDocumentPosition(zz) ? 0 : this.view.state.doc.length;
        let Ez = bz.posAtStart;
        if (!bz.isComposite()) return bz.isText() ? zz == bz.dom ? Ez + uz : Ez + (uz ? bz.length : 0) : Ez;
        {
          let nz;
          if (zz == bz.dom) nz = bz.dom.childNodes[uz];
          else {
            let Ez = 0 == jz(zz) ? 0 : 0 == uz ? -1 : 1;
            for (;;) {
              let uz = zz.parentNode;
              if (uz == bz.dom) break;
              0 == Ez && uz.firstChild != uz.lastChild && (Ez = zz == uz.firstChild ? -1 : 1), zz = uz
            }
            nz = Ez < 0 ? zz : zz.nextSibling
          }
          if (nz == bz.dom.firstChild) return Ez;
          for (; nz && !db.get(nz);) nz = nz.nextSibling;
          if (!nz) return Ez + bz.length;
          for (let zz = 0, uz = Ez;; zz++) {
            let Ez = bz.children[zz];
            if (Ez.dom == nz) return uz;
            uz += Ez.length + Ez.breakAfter
          }
        }
      }
      domAtPos(zz, uz) {
        let {
          tile: bz,
          offset: Ez
        } = this.tile.resolveBlock(zz, uz);
        return bz.isWidget() ? bz.domPosFor(zz, uz) : bz.domIn(Ez, uz)
      }
      inlineDOMNearPos(zz, uz) {
        let bz, Ez, nz = -1,
          iz = !1,
          lz = -1,
          Mz = !1;
        return this.tile.blockTiles(((uz, tz) => {
          if (uz.isWidget()) {
            if (32 & uz.flags && tz >= zz) return !0;
            16 & uz.flags && (iz = !0)
          } else {
            let Hz = tz + uz.length;
            if (tz <= zz && (bz = uz, nz = zz - tz, iz = Hz < zz), Hz >= zz && !Ez && (Ez = uz, lz = zz - tz, Mz = tz > zz), tz > zz && Ez) return !0
          }
        })), bz || Ez ? (iz && Ez ? bz = null : Mz && bz && (Ez = null), bz && uz < 0 || !Ez ? bz.domIn(nz, uz) : Ez.domIn(lz, uz)) : this.domAtPos(zz, uz)
      }
      coordsAt(zz, uz) {
        let {
          tile: bz,
          offset: Ez
        } = this.tile.resolveBlock(zz, uz);
        return bz.isWidget() ? bz.widget instanceof Sb ? null : bz.coordsInWidget(Ez, uz, !0) : bz.coordsIn(Ez, uz)
      }
      lineAt(zz, uz) {
        let {
          tile: bz
        } = this.tile.resolveBlock(zz, uz);
        return bz.isLine() ? bz : null
      }
      coordsForChar(zz) {
        let {
          tile: uz,
          offset: bz
        } = this.tile.resolveBlock(zz, 1);
        if (!uz.isLine()) return null;
        return function zz(uz, bz) {
          if (uz.isComposite())
            for (let Ez of uz.children) {
              if (Ez.length >= bz) {
                let uz = zz(Ez, bz);
                if (uz) return uz
              }
              if ((bz -= Ez.length) < 0) break
            } else if (uz.isText() && bz < uz.length) {
              let zz = (0, Ez.U)(uz.text, bz);
              if (zz == bz) return null;
              let nz = Eu(uz.dom, bz, zz).getClientRects();
              for (let uz = 0; uz < nz.length; uz++) {
                let zz = nz[uz];
                if (uz == nz.length - 1 || zz.top < zz.bottom && zz.left < zz.right) return zz
              }
            } return null
        }(uz, bz)
      }
      measureVisibleLineHeights(zz) {
        let uz = [],
          {
            from: bz,
            to: Ez
          } = zz,
          nz = this.view.contentDOM.clientWidth,
          iz = nz > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          lz = -1,
          Mz = this.view.textDirection == Hu.LTR,
          tz = 0,
          Hz = (zz, Oz, pz) => {
            for (let dz = 0; dz < zz.children.length && !(Oz > Ez); dz++) {
              let Ez = zz.children[dz],
                Fz = Oz + Ez.length,
                Zz = Ez.dom.getBoundingClientRect(),
                {
                  height: Rz
                } = Zz;
              if (pz && !dz && (tz += Zz.top - pz.top), Ez instanceof Kb) Fz > bz && Hz(Ez, Oz, Zz);
              else if (Oz >= bz && (tz > 0 && uz.push(-tz), uz.push(Rz + tz), tz = 0, iz)) {
                let zz = Ez.dom.lastChild,
                  uz = zz ? yz(zz) : [];
                if (uz.length) {
                  let zz = uz[uz.length - 1],
                    bz = Mz ? zz.right - Zz.left : Zz.right - zz.left;
                  bz > lz && (lz = bz, this.minWidth = nz, this.minWidthFrom = Oz, this.minWidthTo = Fz)
                }
              }
              pz && dz == zz.children.length - 1 && (tz += pz.bottom - Zz.bottom), Oz = Fz + Ez.breakAfter
            }
          };
        return Hz(this.tile, 0, null), uz
      }
      textDirectionAt(zz) {
        let {
          tile: uz
        } = this.tile.resolveBlock(zz, 1);
        return "rtl" == getComputedStyle(uz.dom).direction ? Hu.RTL : Hu.LTR
      }
      measureTextSize() {
        let zz = this.tile.blockTiles((zz => {
          if (zz.isLine() && zz.children.length && zz.length <= 20) {
            let uz, bz = 0;
            for (let Ez of zz.children) {
              if (!Ez.isText() || /[^ -~]/.test(Ez.text)) return;
              let zz = yz(Ez.dom);
              if (1 != zz.length) return;
              bz += zz[0].width, uz = zz[0].height
            }
            if (bz) return {
              lineHeight: zz.dom.getBoundingClientRect().height,
              charWidth: bz / zz.length,
              textHeight: uz
            }
          }
        }));
        if (zz) return zz;
        let uz, bz, Ez, nz = document.createElement("div");
        return nz.className = "cm-line", nz.style.width = "99999px", nz.style.position = "absolute", nz.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(nz);
          let zz = yz(nz.firstChild)[0];
          uz = nz.getBoundingClientRect().height, bz = zz && zz.width ? zz.width / 27 : 7, Ez = zz && zz.height ? zz.height : uz, nz.remove()
        })), {
          lineHeight: uz,
          charWidth: bz,
          textHeight: Ez
        }
      }
      computeBlockGapDeco() {
        let zz = [],
          uz = this.view.viewState;
        for (let bz = 0, Ez = 0;; Ez++) {
          let nz = Ez == uz.viewports.length ? null : uz.viewports[Ez],
            iz = nz ? nz.from - 1 : this.view.state.doc.length;
          if (iz > bz) {
            let Ez = (uz.lineBlockAt(iz).bottom - uz.lineBlockAt(bz).top) / this.view.scaleY;
            zz.push(Gz.replace({
              widget: new Sb(Ez),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(bz, iz))
          }
          if (!nz) break;
          bz = nz.to + 1
        }
        return Gz.set(zz)
      }
      updateDeco() {
        let zz = 1,
          uz = this.view.state.facet(zb).map((uz => (this.dynamicDecorationMap[zz++] = "function" == typeof uz) ? uz(this.view) : uz)),
          bz = !1,
          nz = this.view.state.facet(bb).map(((zz, uz) => {
            let Ez = "function" == typeof zz;
            return Ez && (bz = !0), Ez ? zz(this.view) : zz
          }));
        for (nz.length && (this.dynamicDecorationMap[zz++] = bz, uz.push(Ez.x.join(nz))), this.cE = [this.editContextFormatting, ...uz, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; zz < this.cE.length;) this.dynamicDecorationMap[zz++] = !1;
        this.blockWrappers = this.view.state.facet(ub).map((zz => "function" == typeof zz ? zz(this.view) : zz))
      }
      scrollIntoView(zz) {
        var uz;
        if (zz.isSnapshot) {
          let uz = this.view.viewState.lineBlockAt(zz.range.head);
          return this.view.scrollDOM.scrollTop = uz.top - zz.yMargin, void(this.view.scrollDOM.scrollLeft = zz.xMargin)
        }
        for (let Oz of this.view.state.facet(Su)) try {
          if (Oz(this.view, zz.range, zz)) return !0
        } catch (Hz) {
          Wu(this.view.state, Hz, "scroll handler")
        }
        let bz, {
            range: Ez
          } = zz,
          nz = this.coordsAt(Ez.head, null !== (uz = Ez.assoc) && void 0 !== uz ? uz : Ez.empty ? 0 : Ez.head > Ez.anchor ? -1 : 1);
        if (!nz) return;
        !Ez.empty && (bz = this.coordsAt(Ez.anchor, Ez.anchor > Ez.head ? -1 : 1)) && (nz = {
          left: Math.min(nz.left, bz.left),
          top: Math.min(nz.top, bz.top),
          right: Math.max(nz.right, bz.right),
          bottom: Math.max(nz.bottom, bz.bottom)
        });
        let iz = Mb(this.view),
          lz = {
            left: nz.left - iz.left,
            top: nz.top - iz.top,
            right: nz.right + iz.right,
            bottom: nz.bottom + iz.bottom
          },
          {
            offsetWidth: Mz,
            offsetHeight: tz
          } = this.view.scrollDOM;
        if (function(zz, uz, bz, Ez, nz, iz, lz, Mz) {
            let tz = zz.ownerDocument,
              Hz = tz.defaultView || window;
            for (let Oz = zz, pz = !1; Oz && !pz;)
              if (1 == Oz.nodeType) {
                let zz, dz = Oz == tz.body,
                  Fz = 1,
                  Zz = 1;
                if (dz) zz = Bz(Hz);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(Oz).position) && (pz = !0), Oz.scrollHeight <= Oz.clientHeight && Oz.scrollWidth <= Oz.clientWidth) {
                    Oz = Oz.assignedSlot || Oz.parentNode;
                    continue
                  }
                  let uz = Oz.getBoundingClientRect();
                  ({
                    scaleX: Fz,
                    scaleY: Zz
                  } = Cz(Oz, uz)), zz = {
                    left: uz.left,
                    right: uz.left + Oz.clientWidth * Fz,
                    top: uz.top,
                    bottom: uz.top + Oz.clientHeight * Zz
                  }
                }
                let Rz = 0,
                  Kz = 0;
                if ("nearest" == nz) uz.top < zz.top + lz ? (Kz = uz.top - (zz.top + lz), bz > 0 && uz.bottom > zz.bottom + Kz && (Kz = uz.bottom - zz.bottom + lz)) : uz.bottom > zz.bottom - lz && (Kz = uz.bottom - zz.bottom + lz, bz < 0 && uz.top - Kz < zz.top && (Kz = uz.top - (zz.top + lz)));
                else {
                  let Ez = uz.bottom - uz.top,
                    iz = zz.bottom - zz.top;
                  Kz = ("center" == nz && Ez <= iz ? uz.top + Ez / 2 - iz / 2 : "start" == nz || "center" == nz && bz < 0 ? uz.top - lz : uz.bottom - iz + lz) - zz.top
                }
                if ("nearest" == Ez ? uz.left < zz.left + iz ? (Rz = uz.left - (zz.left + iz), bz > 0 && uz.right > zz.right + Rz && (Rz = uz.right - zz.right + iz)) : uz.right > zz.right - iz && (Rz = uz.right - zz.right + iz, bz < 0 && uz.left < zz.left + Rz && (Rz = uz.left - (zz.left + iz))) : Rz = ("center" == Ez ? uz.left + (uz.right - uz.left) / 2 - (zz.right - zz.left) / 2 : "start" == Ez == Mz ? uz.left - iz : uz.right - (zz.right - zz.left) + iz) - zz.left, Rz || Kz)
                  if (dz) Hz.scrollBy(Rz, Kz);
                  else {
                    let zz = 0,
                      bz = 0;
                    if (Kz) {
                      let zz = Oz.scrollTop;
                      Oz.scrollTop += Kz / Zz, bz = (Oz.scrollTop - zz) * Zz
                    }
                    if (Rz) {
                      let uz = Oz.scrollLeft;
                      Oz.scrollLeft += Rz / Fz, zz = (Oz.scrollLeft - uz) * Fz
                    }
                    uz = {
                      left: uz.left - zz,
                      top: uz.top - bz,
                      right: uz.right - zz,
                      bottom: uz.bottom - bz
                    }, zz && Math.abs(zz - Rz) < 1 && (Ez = "nearest"), bz && Math.abs(bz - Kz) < 1 && (nz = "nearest")
                  } if (dz) break;
                (uz.top < zz.top || uz.bottom > zz.bottom || uz.left < zz.left || uz.right > zz.right) && (uz = {
                  left: Math.max(uz.left, zz.left),
                  right: Math.min(uz.right, zz.right),
                  top: Math.max(uz.top, zz.top),
                  bottom: Math.min(uz.bottom, zz.bottom)
                }), Oz = Oz.assignedSlot || Oz.parentNode
              } else {
                if (11 != Oz.nodeType) break;
                Oz = Oz.host
              }
          }(this.view.scrollDOM, lz, Ez.head < Ez.anchor ? -1 : 1, zz.x, zz.y, Math.max(Math.min(zz.xMargin, Mz), -Mz), Math.max(Math.min(zz.yMargin, tz), -tz), this.view.textDirection == Hu.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (nz.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || nz.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let zz = this.view.docView.lineAt(Ez.head, 1);
          zz && zz.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(zz) {
        let uz = zz => zz.isWidget() || zz.children.some(uz);
        return uz(this.tile.resolveBlock(zz, 1).tile)
      }
      destroy() {
        hb(this.tile)
      }
    }

    function hb(zz, uz) {
      let bz = null === uz || void 0 === uz ? void 0 : uz.get(zz);
      if (1 != bz) {
        null == bz && zz.destroy();
        for (let bz of zz.children) hb(bz, uz)
      }
    }

    function Ub(zz, uz) {
      let bz = zz.observer.selectionRange;
      if (!bz.focusNode) return null;
      let Ez = lu(bz.focusNode, bz.focusOffset),
        nz = Mu(bz.focusNode, bz.focusOffset),
        iz = Ez || nz;
      if (nz && Ez && nz.node != Ez.node) {
        let uz = db.get(nz.node);
        if (!uz || uz.isText() && uz.text != nz.node.nodeValue) iz = nz;
        else if (zz.docView.lastCompositionAfterCursor) {
          let zz = db.get(Ez.node);
          !zz || zz.isText() && zz.text != Ez.node.nodeValue || (iz = nz)
        }
      }
      if (zz.docView.lastCompositionAfterCursor = iz != Ez, !iz) return null;
      let lz = uz - iz.offset;
      return {
        from: lz,
        to: lz + iz.node.nodeValue.length,
        node: iz.node
      }
    }
    let cb = class {
      constructor() {
        this.changes = []
      }
      compareRange(zz, uz) {
        hz(zz, uz, this.changes)
      }
      comparePoint(zz, uz) {
        hz(zz, uz, this.changes)
      }
      boundChange(zz) {
        hz(zz, zz, this.changes)
      }
    };
    class gb {
      constructor() {
        this.changes = []
      }
      compareRange(zz, uz) {
        hz(zz, uz, this.changes)
      }
      comparePoint() {}
      boundChange(zz) {
        hz(zz, zz, this.changes)
      }
    }
    class Sb extends Lz {
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

    function yb(zz, uz, bz) {
      let Ez = zz.lineBlockAt(uz);
      if (Array.isArray(Ez.type)) {
        let zz;
        for (let nz of Ez.type) {
          if (nz.from > uz) break;
          if (!(nz.to < uz)) {
            if (nz.from < uz && nz.to > uz) return nz;
            zz && (nz.type != Pz.Text || zz.type == nz.type && !(bz < 0 ? nz.from < uz : nz.to > uz)) || (zz = nz)
          }
        }
        return zz || Ez
      }
      return Ez
    }

    function Db(zz, uz, bz, Ez) {
      let nz = zz.state.doc.lineAt(uz.head),
        iz = zz.bidiSpans(nz),
        lz = zz.textDirectionAt(nz.from);
      for (let Mz = uz, tz = null;;) {
        let uz = Au(nz, iz, lz, Mz, bz),
          Hz = Ju;
        if (!uz) {
          if (nz.number == (bz ? zz.state.doc.lines : 1)) return Mz;
          Hz = "\n", nz = zz.state.doc.line(nz.number + (bz ? 1 : -1)), iz = zz.bidiSpans(nz), uz = zz.visualLineSide(nz, !bz)
        }
        if (tz) {
          if (!tz(Hz)) return Mz
        } else {
          if (!Ez) return uz;
          tz = Ez(Hz)
        }
        Mz = uz
      }
    }

    function Qb(zz, uz, bz) {
      for (;;) {
        let Ez = 0;
        for (let nz of zz) nz.between(uz - 1, uz + 1, ((zz, nz, iz) => {
          if (uz > zz && uz < nz) {
            let iz = Ez || bz || (uz - zz < nz - uz ? -1 : 1);
            uz = iz < 0 ? zz : nz, Ez = iz
          }
        }));
        if (!Ez) return uz
      }
    }

    function Wb(zz, uz) {
      let bz = null;
      for (let nz = 0; nz < uz.al.length; nz++) {
        let iz = uz.al[nz],
          lz = null;
        if (iz.empty) {
          let uz = Qb(zz, iz.from, 0);
          uz != iz.from && (lz = Ez.l.cursor(uz, -1))
        } else {
          let uz = Qb(zz, iz.from, -1),
            bz = Qb(zz, iz.to, 1);
          uz == iz.from && bz == iz.to || (lz = Ez.l.range(iz.from == iz.anchor ? uz : bz, iz.from == iz.head ? uz : bz))
        }
        lz && (bz || (bz = uz.al.slice()), bz[nz] = lz)
      }
      return bz ? Ez.l.create(bz, uz.mainIndex) : uz
    }

    function eb(zz, uz, bz) {
      let nz = Qb(zz.state.facet(Eb).map((uz => uz(zz))), bz.from, uz.head > bz.from ? -1 : 1);
      return nz == bz.from ? bz : Ez.l.cursor(nz, nz < bz.from ? 1 : -1)
    }
    class jb {
      constructor(zz, uz) {
        this.pos = zz, this.assoc = uz
      }
    }

    function Ib(zz, uz, bz, nz) {
      let iz, lz = zz.contentDOM.getBoundingClientRect(),
        Mz = lz.top + zz.viewState.paddingTop,
        {
          x: tz,
          y: Hz
        } = uz,
        Oz = Hz - Mz;
      for (;;) {
        if (Oz < 0) return new jb(0, 1);
        if (Oz > zz.viewState.docHeight) return new jb(zz.state.doc.length, -1);
        if (iz = zz.elementAtHeight(Oz), null == nz) break;
        if (iz.type == Pz.Text) {
          if (nz < 0 ? iz.to < zz.viewport.from : iz.from > zz.viewport.to) break;
          let uz = zz.docView.coordsAt(nz < 0 ? iz.from : iz.to, nz > 0 ? -1 : 1);
          if (uz && (nz < 0 ? uz.top <= Oz + Mz : uz.bottom >= Oz + Mz)) break
        }
        let uz = zz.viewState.heightOracle.textHeight / 2;
        Oz = nz > 0 ? iz.bottom + uz : iz.top - uz
      }
      if (zz.viewport.from >= iz.to || zz.viewport.to <= iz.from) {
        if (bz) return null;
        if (iz.type == Pz.Text) {
          let uz = function(zz, uz, bz, nz, iz) {
            let lz = Math.round((nz - uz.left) * zz.defaultCharacterWidth);
            if (zz.lineWrapping && bz.height > 1.5 * zz.defaultLineHeight) {
              let uz = zz.viewState.heightOracle.textHeight;
              lz += Math.floor((iz - bz.top - .5 * (zz.defaultLineHeight - uz)) / uz) * zz.viewState.heightOracle.lineLength
            }
            let Mz = zz.state.sliceDoc(bz.from, bz.to);
            return bz.from + (0, Ez.V)(Mz, lz, zz.state.tabSize)
          }(zz, lz, iz, tz, Hz);
          return new jb(uz, uz == iz.from ? 1 : -1)
        }
      }
      if (iz.type != Pz.Text) return Oz < (iz.top + iz.bottom) / 2 ? new jb(iz.from, 1) : new jb(iz.to, -1);
      let pz = zz.docView.lineAt(iz.from, 2);
      return pz && pz.length == iz.length || (pz = zz.docView.lineAt(iz.from, -2)), new Bb(zz, tz, Hz, zz.textDirectionAt(iz.from)).scanTile(pz, iz.from)
    }
    class Bb {
      constructor(zz, uz, bz, Ez) {
        this.view = zz, this.x = uz, this.y = bz, this.baseDir = Ez, this.line = null, this.spans = null
      }
      bidiSpansAt(zz) {
        return (!this.line || this.line.from > zz || this.line.to < zz) && (this.line = this.view.state.doc.lineAt(zz), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(zz, uz) {
        let {
          line: bz,
          spans: Ez
        } = this.bidiSpansAt(zz);
        return Ez[fu.find(Ez, zz - bz.from, -1, uz)].level == this.baseDir
      }
      dirAt(zz, uz) {
        let {
          line: bz,
          spans: Ez
        } = this.bidiSpansAt(zz);
        return Ez[fu.find(Ez, zz - bz.from, -1, uz)].dir
      }
      bidiIn(zz, uz) {
        let {
          spans: bz,
          line: Ez
        } = this.bidiSpansAt(zz);
        return bz.length > 1 || bz.length && (bz[0].level != this.baseDir || bz[0].to + Ez.from < uz)
      }
      scan(zz, uz) {
        let bz, Ez, nz, iz = 0,
          lz = zz.length - 1,
          Mz = new Set,
          tz = this.bidiIn(zz[0], zz[lz]),
          Hz = -1,
          Oz = 1e9;
        zz: for (; iz < lz;) {
          let pz = lz - iz,
            dz = iz + lz >> 1;
          uz: if (Mz.has(dz)) {
            let zz = iz + Math.floor(Math.random() * pz);
            for (let uz = 0; uz < pz; uz++) {
              if (!Mz.has(zz)) {
                dz = zz;
                break uz
              }
              zz++, zz == lz && (zz = iz)
            }
            break zz
          } Mz.add(dz);
          let Fz = uz(dz);
          if (Fz)
            for (let uz = 0; uz < Fz.length; uz++) {
              let Mz = Fz[uz],
                pz = 0;
              if (!(0 == Mz.width && Fz.length > 1)) {
                if (Mz.bottom < this.y)(!bz || bz.bottom < Mz.bottom) && (bz = Mz), pz = 1;
                else if (Mz.top > this.y)(!Ez || Ez.top > Mz.top) && (Ez = Mz), pz = -1;
                else {
                  let zz = Mz.left > this.x ? this.x - Mz.left : Mz.right < this.x ? this.x - Mz.right : 0,
                    uz = Math.abs(zz);
                  uz < Oz && (Hz = dz, Oz = uz, nz = Mz), zz && (pz = zz < 0 == (this.baseDir == Hu.LTR) ? -1 : 1)
                } - 1 != pz || tz && !this.baseDirAt(zz[dz], 1) ? 1 != pz || tz && !this.baseDirAt(zz[dz + 1], -1) || (iz = dz + 1) : lz = dz
              }
            }
        }
        if (!nz) {
          let nz = bz && (!Ez || this.y - bz.bottom < Ez.top - this.y) ? bz : Ez;
          return this.y = (nz.top + nz.bottom) / 2, this.scan(zz, uz)
        }
        if (Oz) {
          if (bz && bz.bottom > nz.top) return this.y = bz.bottom - 1, this.scan(zz, uz);
          if (Ez && Ez.top < nz.bottom) return this.y = Ez.top + 1, this.scan(zz, uz)
        }
        let pz = (tz ? this.dirAt(zz[Hz], 1) : this.baseDir) == Hu.LTR;
        return {
          i: Hz,
          after: this.x > (nz.left + nz.right) / 2 == pz
        }
      }
      scanText(zz, uz) {
        let bz = [];
        for (let iz = 0; iz < zz.length; iz = (0, Ez.U)(zz.text, iz)) bz.push(uz + iz);
        bz.push(uz + zz.length);
        let nz = this.scan(bz, (Ez => {
          let nz = bz[Ez] - uz,
            iz = bz[Ez + 1] - uz;
          return Eu(zz.dom, nz, iz).getClientRects()
        }));
        return nz.after ? new jb(bz[nz.i + 1], -1) : new jb(bz[nz.i], 1)
      }
      scanTile(zz, uz) {
        if (!zz.length) return new jb(uz, 1);
        if (1 == zz.children.length) {
          let bz = zz.children[0];
          if (bz.isText()) return this.scanText(bz, uz);
          if (bz.isComposite()) return this.scanTile(bz, uz)
        }
        let bz = [uz];
        for (let lz = 0, Mz = uz; lz < zz.children.length; lz++) bz.push(Mz += zz.children[lz].length);
        let Ez = this.scan(bz, (uz => {
            let bz = zz.children[uz];
            return 48 & bz.flags ? null : (1 == bz.dom.nodeType ? bz.dom : Eu(bz.dom, 0, bz.length)).getClientRects()
          })),
          nz = zz.children[Ez.i],
          iz = bz[Ez.i];
        return nz.isText() ? this.scanText(nz, iz) : nz.isComposite() ? this.scanTile(nz, iz) : Ez.after ? new jb(bz[Ez.i + 1], -1) : new jb(iz, 1)
      }
    }
    const Cb = "\uffff";
    class Yb {
      constructor(zz, uz) {
        this.points = zz, this.view = uz, this.text = "", this.lineSeparator = uz.state.facet(Ez.n.lineSeparator)
      }
      append(zz) {
        this.text += zz
      }
      lineBreak() {
        this.text += Cb
      }
      readRange(zz, uz) {
        if (!zz) return this;
        let bz = zz.parentNode;
        for (let Ez = zz;;) {
          this.findPointBefore(bz, Ez);
          let zz = this.text.length;
          this.readNode(Ez);
          let nz = db.get(Ez),
            iz = Ez.nextSibling;
          if (iz == uz) {
            (null === nz || void 0 === nz ? void 0 : nz.breakAfter) && !iz && bz != this.view.contentDOM && this.lineBreak();
            break
          }
          let lz = db.get(iz);
          (nz && lz ? nz.breakAfter : (nz ? nz.breakAfter : Wz(Ez)) || Wz(iz) && ("BR" != Ez.nodeName || (null === nz || void 0 === nz ? void 0 : nz.isWidget())) && this.text.length > zz) && !zE(iz, uz) && this.lineBreak(), Ez = iz
        }
        return this.findPointBefore(bz, uz), this
      }
      readTextNode(zz) {
        let uz = zz.nodeValue;
        for (let bz of this.points) bz.node == zz && (bz.pos = this.text.length + Math.min(bz.offset, uz.length));
        for (let bz = 0, Ez = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let nz, iz = -1,
            lz = 1;
          if (this.lineSeparator ? (iz = uz.indexOf(this.lineSeparator, bz), lz = this.lineSeparator.length) : (nz = Ez.exec(uz)) && (iz = nz.index, lz = nz[0].length), this.append(uz.slice(bz, iz < 0 ? uz.length : iz)), iz < 0) break;
          if (this.lineBreak(), lz > 1)
            for (let uz of this.points) uz.node == zz && uz.pos > this.text.length && (uz.pos -= lz - 1);
          bz = iz + lz
        }
      }
      readNode(zz) {
        let uz = db.get(zz),
          bz = uz && uz.overrideDOMText;
        if (null != bz) {
          this.findPointInside(zz, bz.length);
          for (let zz = bz.iter(); !zz.next().done;) zz.lineBreak ? this.lineBreak() : this.append(zz.value)
        } else 3 == zz.nodeType ? this.readTextNode(zz) : "BR" == zz.nodeName ? zz.nextSibling && this.lineBreak() : 1 == zz.nodeType && this.readRange(zz.firstChild, null)
      }
      findPointBefore(zz, uz) {
        for (let bz of this.points) bz.node == zz && zz.childNodes[bz.offset] == uz && (bz.pos = this.text.length)
      }
      findPointInside(zz, uz) {
        for (let bz of this.points)(3 == zz.nodeType ? bz.node == zz : zz.contains(bz.node)) && (bz.pos = this.text.length + (kb(zz, bz.node, bz.offset) ? uz : 0))
      }
    }

    function kb(zz, uz, bz) {
      for (;;) {
        if (!uz || bz < jz(uz)) return !1;
        if (uz == zz) return !0;
        bz = Qz(uz) + 1, uz = uz.parentNode
      }
    }

    function zE(zz, uz) {
      let bz;
      for (; zz != uz && zz; zz = zz.nextSibling) {
        let uz = db.get(zz);
        if (!(null === uz || void 0 === uz ? void 0 : uz.isWidget())) return !1;
        uz && (bz || (bz = [])).push(uz)
      }
      if (bz)
        for (let Ez of bz) {
          let zz = Ez.overrideDOMText;
          if (null === zz || void 0 === zz ? void 0 : zz.length) return !1
        }
      return !0
    }
    class uE {
      constructor(zz, uz) {
        this.node = zz, this.offset = uz, this.pos = -1
      }
    }
    class bE {
      constructor(zz, uz, bz, nz) {
        this.typeOver = nz, this.bounds = null, this.text = "", this.domChanged = uz > -1;
        let {
          impreciseHead: iz,
          impreciseAnchor: lz
        } = zz.docView, Mz = zz.state.selection;
        if (zz.state.readOnly && uz > -1) this.newSel = null;
        else if (uz > -1 && (this.bounds = EE(zz.docView.tile, uz, bz, 0))) {
          let uz = iz || lz ? [] : function(zz) {
              let uz = [];
              if (zz.root.activeElement != zz.contentDOM) return uz;
              let {
                anchorNode: bz,
                anchorOffset: Ez,
                focusNode: nz,
                focusOffset: iz
              } = zz.observer.selectionRange;
              bz && (uz.push(new uE(bz, Ez)), nz == bz && iz == Ez || uz.push(new uE(nz, iz)));
              return uz
            }(zz),
            bz = new Yb(uz, zz);
          bz.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = bz.text, this.newSel = function(zz, uz) {
            if (0 == zz.length) return null;
            let bz = zz[0].pos,
              nz = 2 == zz.length ? zz[1].pos : bz;
            return bz > -1 && nz > -1 ? Ez.l.single(bz + uz, nz + uz) : null
          }(uz, this.bounds.from)
        } else {
          let uz = zz.observer.selectionRange,
            bz = iz && iz.node == uz.focusNode && iz.offset == uz.focusOffset || !gz(zz.contentDOM, uz.focusNode) ? Mz.main.head : zz.docView.posFromDOM(uz.focusNode, uz.focusOffset),
            nz = lz && lz.node == uz.anchorNode && lz.offset == uz.anchorOffset || !gz(zz.contentDOM, uz.anchorNode) ? Mz.main.anchor : zz.docView.posFromDOM(uz.anchorNode, uz.anchorOffset),
            tz = zz.viewport;
          if ((Nz.ios || Nz.chrome) && Mz.main.empty && bz != nz && (tz.from > 0 || tz.to < zz.state.doc.length)) {
            let uz = Math.min(bz, nz),
              Ez = Math.max(bz, nz),
              iz = tz.from - uz,
              lz = tz.to - Ez;
            0 != iz && 1 != iz && 0 != uz || 0 != lz && -1 != lz && Ez != zz.state.doc.length || (bz = 0, nz = zz.state.doc.length)
          }
          if (zz.inputState.composing > -1 && Mz.al.length > 1) this.newSel = Mz.replaceRange(Ez.l.range(nz, bz));
          else if (zz.lineWrapping && nz == bz && (!Mz.main.empty || Mz.main.head != bz) && zz.inputState.lastTouchTime > Date.now() - 100) {
            let uz = zz.coordsAtPos(bz, -1),
              nz = 0;
            uz && (nz = zz.inputState.lastTouchY <= uz.bottom ? -1 : 1), this.newSel = Ez.l.create([Ez.l.cursor(bz, nz)])
          } else this.newSel = Ez.l.single(nz, bz)
        }
      }
    }

    function EE(zz, uz, bz, Ez) {
      if (zz.isComposite()) {
        let nz = -1,
          iz = -1,
          lz = -1,
          Mz = -1;
        for (let tz = 0, Hz = Ez, Oz = Ez; tz < zz.children.length; tz++) {
          let Ez = zz.children[tz],
            pz = Hz + Ez.length;
          if (Hz < uz && pz > bz) return EE(Ez, uz, bz, Hz);
          if (pz >= uz && -1 == nz && (nz = tz, iz = Hz), Hz > bz && Ez.dom.parentNode == zz.dom) {
            lz = tz, Mz = Oz;
            break
          }
          Oz = pz, Hz = pz + Ez.breakAfter
        }
        return {
          from: iz,
          to: Mz < 0 ? Ez + zz.length : Mz,
          startDOM: (nz ? zz.children[nz - 1].dom.nextSibling : null) || zz.dom.firstChild,
          endDOM: lz < zz.children.length && lz >= 0 ? zz.children[lz].dom : null
        }
      }
      return zz.isText() ? {
        from: Ez,
        to: Ez + zz.length,
        startDOM: zz.dom,
        endDOM: zz.dom.nextSibling
      } : null
    }

    function nE(zz, uz) {
      let bz, {
          newSel: nz
        } = uz,
        {
          state: iz
        } = zz,
        lz = iz.selection.main,
        Mz = zz.inputState.lastKeyTime > Date.now() - 100 ? zz.inputState.lastKeyCode : -1;
      if (uz.bounds) {
        let {
          from: zz,
          to: nz
        } = uz.bounds, tz = lz.from, Hz = null;
        (8 === Mz || Nz.android && uz.text.length < nz - zz) && (tz = lz.to, Hz = "end");
        let Oz, pz, dz = iz.doc.sliceString(zz, nz, Cb);
        !lz.empty && lz.from >= zz && lz.to <= nz && (uz.typeOver || dz != uz.text) && dz.slice(0, lz.from - zz) == uz.text.slice(0, lz.from - zz) && dz.slice(lz.to - zz) == uz.text.slice(Oz = uz.text.length - (dz.length - (lz.to - zz))) ? bz = {
          from: lz.from,
          to: lz.to,
          insert: Ez.I.of(uz.text.slice(lz.from - zz, Oz).split(Cb))
        } : (pz = lE(dz, uz.text, tz - zz, Hz)) && (Nz.chrome && 13 == Mz && pz.toB == pz.from + 2 && uz.text.slice(pz.from, pz.toB) == Cb + Cb && pz.toB--, bz = {
          from: zz + pz.from,
          to: zz + pz.toA,
          insert: Ez.I.of(uz.text.slice(pz.from, pz.toB).split(Cb))
        })
      } else nz && (!zz.hasFocus && iz.facet(eu) || ME(nz, lz)) && (nz = null);
      if (!bz && !nz) return !1;
      if ((Nz.mac || Nz.android) && bz && bz.from == bz.to && bz.from == lz.head - 1 && /^\. ?$/.test(bz.insert.toString()) && "off" == zz.contentDOM.getAttribute("autocorrect") ? (nz && 2 == bz.insert.length && (nz = Ez.l.single(nz.main.anchor - 1, nz.main.head - 1)), bz = {
          from: bz.from,
          to: bz.to,
          insert: Ez.I.of([bz.insert.toString().replace(".", " ")])
        }) : iz.doc.lineAt(lz.from).to < lz.to && zz.docView.lineHasWidget(lz.to) && zz.inputState.insertingTextAt > Date.now() - 50 ? bz = {
          from: lz.from,
          to: lz.to,
          insert: iz.toText(zz.inputState.insertingText)
        } : Nz.chrome && bz && bz.from == bz.to && bz.from == lz.head && "\n " == bz.insert.toString() && zz.lineWrapping && (nz && (nz = Ez.l.single(nz.main.anchor - 1, nz.main.head - 1)), bz = {
          from: lz.from,
          to: lz.to,
          insert: Ez.I.of([" "])
        }), bz) return iE(zz, bz, nz, Mz);
      if (nz && !ME(nz, lz)) {
        let uz = !1,
          bz = "select";
        return zz.inputState.lastSelectionTime > Date.now() - 50 && ("select" == zz.inputState.lastSelectionOrigin && (uz = !0), bz = zz.inputState.lastSelectionOrigin, "select.pointer" == bz && (nz = Wb(iz.facet(Eb).map((uz => uz(zz))), nz))), zz.dispatch({
          selection: nz,
          scrollIntoView: uz,
          userEvent: bz
        }), !0
      }
      return !1
    }

    function iE(zz, uz, bz) {
      let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (Nz.ios && zz.inputState.flushIOSKey(uz)) return !0;
      let iz = zz.state.selection.main;
      if (Nz.android && (uz.to == iz.to && (uz.from == iz.from || uz.from == iz.from - 1 && " " == zz.state.sliceDoc(uz.from, iz.from)) && 1 == uz.insert.length && 2 == uz.insert.lines && nu(zz.contentDOM, "Enter", 13) || (uz.from == iz.from - 1 && uz.to == iz.to && 0 == uz.insert.length || 8 == nz && uz.insert.length < uz.to - uz.from && uz.to > iz.head) && nu(zz.contentDOM, "Backspace", 8) || uz.from == iz.from && uz.to == iz.to + 1 && 0 == uz.insert.length && nu(zz.contentDOM, "Delete", 46))) return !0;
      let lz, Mz = uz.insert.toString();
      zz.inputState.composing >= 0 && zz.inputState.composing++;
      let tz = () => lz || (lz = function(zz, uz, bz) {
        let nz, iz = zz.state,
          lz = iz.selection.main,
          Mz = -1;
        if (uz.from == uz.to && uz.from < lz.from || uz.from > lz.to) {
          let bz = uz.from < lz.from ? -1 : 1,
            Ez = bz < 0 ? lz.from : lz.to,
            nz = Qb(iz.facet(Eb).map((uz => uz(zz))), Ez, bz);
          uz.from == nz && (Mz = nz)
        }
        if (Mz > -1) nz = {
          changes: uz,
          selection: Ez.l.cursor(uz.from + uz.insert.length, -1)
        };
        else if (uz.from >= lz.from && uz.to <= lz.to && uz.to - uz.from >= (lz.to - lz.from) / 3 && (!bz || bz.main.empty && bz.main.from == uz.from + uz.insert.length) && zz.inputState.composing < 0) {
          let bz = lz.from < uz.from ? iz.sliceDoc(lz.from, uz.from) : "",
            Ez = lz.to > uz.to ? iz.sliceDoc(uz.to, lz.to) : "";
          nz = iz.replaceSelection(zz.state.toText(bz + uz.insert.sliceString(0, void 0, zz.state.lineBreak) + Ez))
        } else {
          let Mz = iz.changes(uz),
            tz = bz && bz.main.to <= Mz.newLength ? bz.main : void 0;
          if (iz.selection.al.length > 1 && (zz.inputState.composing >= 0 || zz.inputState.compositionPendingChange) && uz.to <= lz.to + 10 && uz.to >= lz.to - 10) {
            let Hz, Oz = zz.state.sliceDoc(uz.from, uz.to),
              pz = bz && Ub(zz, bz.main.head);
            if (pz) {
              let zz = uz.insert.length - (uz.to - uz.from);
              Hz = {
                from: pz.from,
                to: pz.to - zz
              }
            } else Hz = zz.state.doc.lineAt(lz.head);
            let dz = lz.to - uz.to;
            nz = iz.changeByRange((bz => {
              if (bz.from == lz.from && bz.to == lz.to) return {
                changes: Mz,
                range: tz || bz.map(Mz)
              };
              let nz = bz.to - dz,
                pz = nz - Oz.length;
              if (zz.state.sliceDoc(pz, nz) != Oz || nz >= Hz.from && pz <= Hz.to) return {
                range: bz
              };
              let Fz = iz.changes({
                  from: pz,
                  to: nz,
                  insert: uz.insert
                }),
                Zz = bz.to - lz.to;
              return {
                changes: Fz,
                range: tz ? Ez.l.range(Math.max(0, tz.anchor + Zz), Math.max(0, tz.head + Zz)) : bz.map(Fz)
              }
            }))
          } else nz = {
            changes: Mz,
            selection: tz && iz.selection.replaceRange(tz)
          }
        }
        let tz = "input.type";
        (zz.composing || zz.inputState.compositionPendingChange && zz.inputState.compositionEndedAt > Date.now() - 50) && (zz.inputState.compositionPendingChange = !1, tz += ".compose", zz.inputState.compositionFirstChange && (tz += ".start", zz.inputState.compositionFirstChange = !1));
        return iz.update(nz, {
          userEvent: tz,
          scrollIntoView: !0
        })
      }(zz, uz, bz));
      return zz.state.facet(mu).some((bz => bz(zz, uz.from, uz.to, Mz, tz))) || zz.dispatch(tz()), !0
    }

    function lE(zz, uz, bz, Ez) {
      let nz = Math.min(zz.length, uz.length),
        iz = 0;
      for (; iz < nz && zz.charCodeAt(iz) == uz.charCodeAt(iz);) iz++;
      if (iz == nz && zz.length == uz.length) return null;
      let lz = zz.length,
        Mz = uz.length;
      for (; lz > 0 && Mz > 0 && zz.charCodeAt(lz - 1) == uz.charCodeAt(Mz - 1);) lz--, Mz--;
      if ("end" == Ez) {
        bz -= lz + Math.max(0, iz - Math.min(lz, Mz)) - iz
      }
      if (lz < iz && zz.length < uz.length) {
        iz -= bz <= iz && bz >= lz ? iz - bz : 0, Mz = iz + (Mz - lz), lz = iz
      } else if (Mz < iz) {
        iz -= bz <= iz && bz >= Mz ? iz - bz : 0, lz = iz + (lz - Mz), Mz = iz
      }
      return {
        from: iz,
        toA: lz,
        toB: Mz
      }
    }

    function ME(zz, uz) {
      return uz.head == zz.main.head && uz.anchor == zz.main.anchor
    }
    class tE {
      setSelectionOrigin(zz) {
        this.lastSelectionOrigin = zz, this.lastSelectionTime = Date.now()
      }
      constructor(zz) {
        this.view = zz, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = zz.hasFocus, Nz.safari && zz.contentDOM.addEventListener("input", (() => null)), Nz.gecko && function(zz) {
          aE.has(zz) || (aE.add(zz), zz.addEventListener("copy", (() => {})), zz.addEventListener("cut", (() => {})))
        }(zz.contentDOM.ownerDocument)
      }
      handleEvent(zz) {
        (function(zz, uz) {
          if (!uz.bubbles) return !0;
          if (uz.defaultPrevented) return !1;
          for (let bz, Ez = uz.target; Ez != zz.contentDOM; Ez = Ez.parentNode)
            if (!Ez || 11 == Ez.nodeType || (bz = db.get(Ez)) && bz.isWidget() && !bz.isHidden && bz.widget.ignoreEvent(uz)) return !1;
          return !0
        })(this.view, zz) && !this.ignoreDuringComposition(zz) && ("keydown" == zz.type && this.keydown(zz) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(zz.type, zz))) : this.runHandlers(zz.type, zz)))
      }
      runHandlers(zz, uz) {
        let bz = this.handlers[zz];
        if (bz) {
          for (let zz of bz.observers) zz(this.view, uz);
          for (let zz of bz.handlers) {
            if (uz.defaultPrevented) break;
            if (zz(this.view, uz)) {
              uz.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(zz) {
        let uz = OE(zz),
          bz = this.handlers,
          Ez = this.view.contentDOM;
        for (let nz in uz)
          if ("scroll" != nz) {
            let zz = !uz[nz].handlers.length,
              iz = bz[nz];
            iz && zz != !iz.handlers.length && (Ez.removeEventListener(nz, this.handleEvent), iz = null), iz || Ez.addEventListener(nz, this.handleEvent, {
              passive: zz
            })
          } for (let nz in bz) "scroll" == nz || uz[nz] || Ez.removeEventListener(nz, this.handleEvent);
        this.handlers = uz
      }
      keydown(zz) {
        if (this.lastKeyCode = zz.keyCode, this.lastKeyTime = Date.now(), 9 == zz.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != zz.keyCode && FE.indexOf(zz.keyCode) < 0 && (this.tabFocusMode = -1), Nz.android && Nz.chrome && !zz.synthetic && (13 == zz.keyCode || 8 == zz.keyCode)) return this.view.observer.delayAndroidKey(zz.key, zz.keyCode), !0;
        let uz;
        return !Nz.ios || zz.synthetic || zz.altKey || zz.metaKey || zz.shiftKey || !((uz = pE.find((uz => uz.keyCode == zz.keyCode))) && !zz.ctrlKey || dE.indexOf(zz.key) > -1 && zz.ctrlKey) ? (229 != zz.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = uz || zz, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(zz) {
        let uz = this.pendingIOSKey;
        return !!uz && (!("Enter" == uz.key && zz && zz.from < zz.to && /^\S+$/.test(zz.insert.toString())) && (this.pendingIOSKey = void 0, nu(this.view.contentDOM, uz.key, uz.keyCode, uz instanceof KeyboardEvent ? uz : void 0)))
      }
      ignoreDuringComposition(zz) {
        return !(!/^key/.test(zz.type) || zz.synthetic) && (this.composing > 0 || !!(Nz.safari && !Nz.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function HE(zz, uz) {
      return (bz, Ez) => {
        try {
          return uz.call(zz, Ez, bz)
        } catch (nz) {
          Wu(bz.state, nz)
        }
      }
    }

    function OE(zz) {
      let uz = Object.create(null);

      function bz(zz) {
        return uz[zz] || (uz[zz] = {
          observers: [],
          handlers: []
        })
      }
      for (let Ez of zz) {
        let zz = Ez.spec,
          uz = zz && zz.plugin.domEventHandlers,
          nz = zz && zz.plugin.domEventObservers;
        if (uz)
          for (let iz in uz) {
            let zz = uz[iz];
            zz && bz(iz).handlers.push(HE(Ez.value, zz))
          }
        if (nz)
          for (let iz in nz) {
            let zz = nz[iz];
            zz && bz(iz).observers.push(HE(Ez.value, zz))
          }
      }
      for (let Ez in KE) bz(Ez).handlers.push(KE[Ez]);
      for (let Ez in wE) bz(Ez).observers.push(wE[Ez]);
      return uz
    }
    const pE = [{
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
      dE = "dthko",
      FE = [16, 17, 18, 20, 91, 92, 224, 225];

    function ZE(zz) {
      return .7 * Math.max(0, zz) + 8
    }
    class RE {
      constructor(zz, uz, bz, nz) {
        this.view = zz, this.startEvent = uz, this.style = bz, this.mustSelect = nz, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = uz, this.scrollParents = Yz(zz.contentDOM), this.atoms = zz.state.facet(Eb).map((uz => uz(zz)));
        let iz = zz.contentDOM.ownerDocument;
        iz.addEventListener("mousemove", this.move = this.move.bind(this)), iz.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = uz.shiftKey, this.multiple = zz.state.facet(Ez.n.allowMultipleSelections) && function(zz, uz) {
          let bz = zz.state.facet(Lu);
          return bz.length ? bz[0](uz) : Nz.mac ? uz.metaKey : uz.ctrlKey
        }(zz, uz), this.dragging = !(! function(zz, uz) {
          let {
            main: bz
          } = zz.state.selection;
          if (bz.empty) return !1;
          let Ez = cz(zz.root);
          if (!Ez || 0 == Ez.rangeCount) return !0;
          let nz = Ez.getRangeAt(0).getClientRects();
          for (let iz = 0; iz < nz.length; iz++) {
            let zz = nz[iz];
            if (zz.left <= uz.clientX && zz.right >= uz.clientX && zz.top <= uz.clientY && zz.bottom >= uz.clientY) return !0
          }
          return !1
        }(zz, uz) || 1 != JE(uz)) && null
      }
      start(zz) {
        !1 === this.dragging && this.select(zz)
      }
      move(zz) {
        if (0 == zz.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (uz = this.startEvent, bz = zz, Math.max(Math.abs(uz.clientX - bz.clientX), Math.abs(uz.clientY - bz.clientY)) < 10)) return;
        var uz, bz;
        this.select(this.lastEvent = zz);
        let Ez = 0,
          nz = 0,
          iz = 0,
          lz = 0,
          Mz = this.view.win.innerWidth,
          tz = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: iz,
          right: Mz
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: lz,
          bottom: tz
        } = this.scrollParents.y.getBoundingClientRect());
        let Hz = Mb(this.view);
        zz.clientX - Hz.left <= iz + 6 ? Ez = -ZE(iz - zz.clientX) : zz.clientX + Hz.right >= Mz - 6 && (Ez = ZE(zz.clientX - Mz)), zz.clientY - Hz.top <= lz + 6 ? nz = -ZE(lz - zz.clientY) : zz.clientY + Hz.bottom >= tz - 6 && (nz = ZE(zz.clientY - tz)), this.setScrollSpeed(Ez, nz)
      }
      up(zz) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || zz.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let zz = this.view.contentDOM.ownerDocument;
        zz.removeEventListener("mousemove", this.move), zz.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(zz, uz) {
        this.scrollSpeed = {
          x: zz,
          y: uz
        }, zz || uz ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: zz,
          y: uz
        } = this.scrollSpeed;
        zz && this.scrollParents.x && (this.scrollParents.x.scrollLeft += zz, zz = 0), uz && this.scrollParents.y && (this.scrollParents.y.scrollTop += uz, uz = 0), (zz || uz) && this.view.win.scrollBy(zz, uz), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(zz) {
        let {
          view: uz
        } = this, bz = Wb(this.atoms, this.style.get(zz, this.extend, this.multiple));
        !this.mustSelect && bz.eq(uz.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: bz,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(zz) {
        zz.transactions.some((zz => zz.isUserEvent("input.type"))) ? this.destroy() : this.style.update(zz) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const KE = Object.create(null),
      wE = Object.create(null),
      XE = Nz.ie && Nz.ie_version < 15 || Nz.ios && Nz.webkit_version < 604;

    function fE(zz, uz, bz) {
      for (let Ez of zz.facet(uz)) bz = Ez(bz, zz);
      return bz
    }

    function sE(zz, uz) {
      uz = fE(zz.state, hu, uz);
      let bz, {
          state: nz
        } = zz,
        iz = 1,
        lz = nz.toText(uz),
        Mz = lz.lines == nz.selection.al.length;
      if (null != TE && nz.selection.al.every((zz => zz.empty)) && TE == lz.toString()) {
        let zz = -1;
        bz = nz.changeByRange((bz => {
          let tz = nz.doc.lineAt(bz.from);
          if (tz.from == zz) return {
            range: bz
          };
          zz = tz.from;
          let Hz = nz.toText((Mz ? lz.line(iz++).text : uz) + nz.lineBreak);
          return {
            changes: {
              from: tz.from,
              insert: Hz
            },
            range: Ez.l.cursor(bz.from + Hz.length)
          }
        }))
      } else bz = Mz ? nz.changeByRange((zz => {
        let uz = lz.line(iz++);
        return {
          changes: {
            from: zz.from,
            to: zz.to,
            insert: uz.text
          },
          range: Ez.l.cursor(zz.from + uz.length)
        }
      })) : nz.replaceSelection(lz);
      zz.dispatch(bz, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function rE(zz, uz, bz, nz) {
      if (1 == nz) return Ez.l.cursor(uz, bz);
      if (2 == nz) return function(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          nz = zz.charCategorizer(uz),
          iz = zz.doc.lineAt(uz),
          lz = uz - iz.from;
        if (0 == iz.length) return Ez.l.cursor(uz);
        0 == lz ? bz = 1 : lz == iz.length && (bz = -1);
        let Mz = lz,
          tz = lz;
        bz < 0 ? Mz = (0, Ez.U)(iz.text, lz, !1) : tz = (0, Ez.U)(iz.text, lz);
        let Hz = nz(iz.text.slice(Mz, tz));
        for (; Mz > 0;) {
          let zz = (0, Ez.U)(iz.text, Mz, !1);
          if (nz(iz.text.slice(zz, Mz)) != Hz) break;
          Mz = zz
        }
        for (; tz < iz.length;) {
          let zz = (0, Ez.U)(iz.text, tz);
          if (nz(iz.text.slice(tz, zz)) != Hz) break;
          tz = zz
        }
        return Ez.l.range(Mz + iz.from, tz + iz.from)
      }(zz.state, uz, bz);
      {
        let nz = zz.docView.lineAt(uz, bz),
          iz = zz.state.doc.lineAt(nz ? nz.posAtEnd : uz),
          lz = nz ? nz.posAtStart : iz.from,
          Mz = nz ? nz.posAtEnd : iz.to;
        return Mz < zz.state.doc.length && Mz == iz.to && Mz++, Ez.l.range(lz, Mz)
      }
    }
    wE.scroll = zz => {
      zz.inputState.lastScrollTop = zz.scrollDOM.scrollTop, zz.inputState.lastScrollLeft = zz.scrollDOM.scrollLeft
    }, wE.wheel = wE.mousewheel = zz => {
      zz.inputState.lastWheelEvent = Date.now()
    }, KE.keydown = (zz, uz) => (zz.inputState.setSelectionOrigin("select"), 27 == uz.keyCode && 0 != zz.inputState.tabFocusMode && (zz.inputState.tabFocusMode = Date.now() + 2e3), !1), wE.touchstart = (zz, uz) => {
      let bz = zz.inputState,
        Ez = uz.targetTouches[0];
      bz.lastTouchTime = Date.now(), Ez && (bz.lastTouchX = Ez.clientX, bz.lastTouchY = Ez.clientY), bz.setSelectionOrigin("select.pointer")
    }, wE.touchmove = zz => {
      zz.inputState.setSelectionOrigin("select.pointer")
    }, KE.mousedown = (zz, uz) => {
      if (zz.observer.flush(), zz.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let bz = null;
      for (let Ez of zz.state.facet(Gu))
        if (bz = Ez(zz, uz), bz) break;
      if (bz || 0 != uz.button || (bz = function(zz, uz) {
          let bz = zz.posAndSideAtCoords({
              x: uz.clientX,
              y: uz.clientY
            }, !1),
            nz = JE(uz),
            iz = zz.state.selection;
          return {
            update(zz) {
              zz.docChanged && (bz.pos = zz.changes.mapPos(bz.pos), iz = iz.map(zz.changes))
            },
            get(uz, lz, Mz) {
              let tz, Hz = zz.posAndSideAtCoords({
                  x: uz.clientX,
                  y: uz.clientY
                }, !1),
                Oz = rE(zz, Hz.pos, Hz.assoc, nz);
              if (bz.pos != Hz.pos && !lz) {
                let uz = rE(zz, bz.pos, bz.assoc, nz),
                  iz = Math.min(uz.from, Oz.from),
                  lz = Math.max(uz.to, Oz.to);
                Oz = iz < Oz.from ? Ez.l.range(iz, lz, Oz.assoc) : Ez.l.range(lz, iz, Oz.assoc)
              }
              return lz ? iz.replaceRange(iz.main.extend(Oz.from, Oz.to, Oz.assoc)) : Mz && 1 == nz && iz.al.length > 1 && (tz = function(zz, uz) {
                for (let bz = 0; bz < zz.al.length; bz++) {
                  let {
                    from: nz,
                    to: iz
                  } = zz.al[bz];
                  if (nz <= uz && iz >= uz) return Ez.l.create(zz.al.slice(0, bz).concat(zz.al.slice(bz + 1)), zz.mainIndex == bz ? 0 : zz.mainIndex - (zz.mainIndex > bz ? 1 : 0))
                }
                return null
              }(iz, Hz.pos)) ? tz : Mz ? iz.addRange(Oz) : Ez.l.create([Oz])
            }
          }
        }(zz, uz)), bz) {
        let Ez = !zz.hasFocus;
        zz.inputState.startMouseSelection(new RE(zz, uz, bz, Ez)), Ez && zz.observer.ignore((() => {
          bu(zz.contentDOM);
          let uz = zz.root.activeElement;
          uz && !uz.contains(zz.contentDOM) && uz.blur()
        }));
        let nz = zz.inputState.mouseSelection;
        if (nz) return nz.start(uz), !1 === nz.dragging
      } else zz.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const oE = Nz.ie && Nz.ie_version <= 11;
    let NE = null,
      vE = 0,
      xE = 0;

    function JE(zz) {
      if (!oE) return zz.detail;
      let uz = NE,
        bz = xE;
      return NE = zz, xE = Date.now(), vE = !uz || bz > Date.now() - 400 && Math.abs(uz.clientX - zz.clientX) < 2 && Math.abs(uz.clientY - zz.clientY) < 2 ? (vE + 1) % 3 : 1
    }

    function AE(zz, uz, bz, Ez) {
      if (!(bz = fE(zz.state, hu, bz))) return;
      let nz = zz.posAtCoords({
          x: uz.clientX,
          y: uz.clientY
        }, !1),
        {
          draggedContent: iz
        } = zz.inputState,
        lz = Ez && iz && function(zz, uz) {
          let bz = zz.state.facet(Pu);
          return bz.length ? bz[0](uz) : Nz.mac ? !uz.altKey : !uz.ctrlKey
        }(zz, uz) ? {
          from: iz.from,
          to: iz.to
        } : null,
        Mz = {
          from: nz,
          insert: bz
        },
        tz = zz.state.changes(lz ? [lz, Mz] : Mz);
      zz.focus(), zz.dispatch({
        changes: tz,
        selection: {
          anchor: tz.mapPos(nz, -1),
          head: tz.mapPos(nz, 1)
        },
        userEvent: lz ? "move.drop" : "input.drop"
      }), zz.inputState.draggedContent = null
    }
    KE.dragstart = (zz, uz) => {
      let {
        selection: {
          main: bz
        }
      } = zz.state;
      if (uz.target.draggable) {
        let nz = zz.docView.tile.nearest(uz.target);
        if (nz && nz.isWidget()) {
          let zz = nz.posAtStart,
            uz = zz + nz.length;
          (zz >= bz.to || uz <= bz.from) && (bz = Ez.l.range(zz, uz))
        }
      }
      let {
        inputState: nz
      } = zz;
      return nz.mouseSelection && (nz.mouseSelection.dragging = !0), nz.draggedContent = bz, uz.dataTransfer && (uz.dataTransfer.setData("Text", fE(zz.state, Uu, zz.state.sliceDoc(bz.from, bz.to))), uz.dataTransfer.effectAllowed = "copyMove"), !1
    }, KE.dragend = zz => (zz.inputState.draggedContent = null, !1), KE.drop = (zz, uz) => {
      if (!uz.dataTransfer) return !1;
      if (zz.state.readOnly) return !0;
      let bz = uz.dataTransfer.files;
      if (bz && bz.length) {
        let Ez = Array(bz.length),
          nz = 0,
          iz = () => {
            ++nz == bz.length && AE(zz, uz, Ez.filter((zz => null != zz)).join(zz.state.lineBreak), !1)
          };
        for (let zz = 0; zz < bz.length; zz++) {
          let uz = new FileReader;
          uz.onerror = iz, uz.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(uz.result) || (Ez[zz] = uz.result), iz()
          }, uz.readAsText(bz[zz])
        }
        return !0
      } {
        let bz = uz.dataTransfer.getData("Text");
        if (bz) return AE(zz, uz, bz, !0), !0
      }
      return !1
    }, KE.paste = (zz, uz) => {
      if (zz.state.readOnly) return !0;
      zz.observer.flush();
      let bz = XE ? null : uz.clipboardData;
      return bz ? (sE(zz, bz.getData("text/plain") || bz.getData("text/uri-list")), !0) : (function(zz) {
        let uz = zz.dom.parentNode;
        if (!uz) return;
        let bz = uz.appendChild(document.createElement("textarea"));
        bz.style.cssText = "position: fixed; left: -10000px; top: 10px", bz.focus(), setTimeout((() => {
          zz.focus(), bz.remove(), sE(zz, bz.value)
        }), 50)
      }(zz), !1)
    };
    let TE = null;
    KE.copy = KE.cut = (zz, uz) => {
      if (!Sz(zz.contentDOM, zz.observer.selectionRange)) return !1;
      let {
        text: bz,
        al: Ez,
        linewise: nz
      } = function(zz) {
        let uz = [],
          bz = [],
          Ez = !1;
        for (let nz of zz.selection.al) nz.empty || (uz.push(zz.sliceDoc(nz.from, nz.to)), bz.push(nz));
        if (!uz.length) {
          let nz = -1;
          for (let {
              from: Ez
            }
            of zz.selection.al) {
            let iz = zz.doc.lineAt(Ez);
            iz.number > nz && (uz.push(iz.text), bz.push({
              from: iz.from,
              to: Math.min(zz.doc.length, iz.to + 1)
            })), nz = iz.number
          }
          Ez = !0
        }
        return {
          text: fE(zz, Uu, uz.join(zz.lineBreak)),
          al: bz,
          linewise: Ez
        }
      }(zz.state);
      if (!bz && !nz) return !1;
      TE = nz ? bz : null, "cut" != uz.type || zz.state.readOnly || zz.dispatch({
        changes: Ez,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let iz = XE ? null : uz.clipboardData;
      return iz ? (iz.clearData(), iz.setData("text/plain", bz), !0) : (function(zz, uz) {
        let bz = zz.dom.parentNode;
        if (!bz) return;
        let Ez = bz.appendChild(document.createElement("textarea"));
        Ez.style.cssText = "position: fixed; left: -10000px; top: 10px", Ez.value = uz, Ez.focus(), Ez.selectionEnd = uz.length, Ez.selectionStart = 0, setTimeout((() => {
          Ez.remove(), zz.focus()
        }), 50)
      }(zz, bz), !1)
    };
    const LE = Ez.b.define();

    function PE(zz, uz) {
      let bz = [];
      for (let Ez of zz.facet(qu)) {
        let nz = Ez(zz, uz);
        nz && bz.push(nz)
      }
      return bz.length ? zz.update({
        effects: bz,
        annotations: LE.of(!0)
      }) : null
    }

    function GE(zz) {
      setTimeout((() => {
        let uz = zz.hasFocus;
        if (uz != zz.inputState.notifiedFocused) {
          let bz = PE(zz.state, uz);
          bz ? zz.dispatch(bz) : zz.update([])
        }
      }), 10)
    }
    wE.focus = zz => {
      zz.inputState.lastFocusTime = Date.now(), zz.scrollDOM.scrollTop || !zz.inputState.lastScrollTop && !zz.inputState.lastScrollLeft || (zz.scrollDOM.scrollTop = zz.inputState.lastScrollTop, zz.scrollDOM.scrollLeft = zz.inputState.lastScrollLeft), GE(zz)
    }, wE.blur = zz => {
      zz.observer.clearSelectionRange(), GE(zz)
    }, wE.compositionstart = wE.compositionupdate = zz => {
      zz.observer.editContext || (null == zz.inputState.compositionFirstChange && (zz.inputState.compositionFirstChange = !0), zz.inputState.composing < 0 && (zz.inputState.composing = 0))
    }, wE.compositionend = zz => {
      zz.observer.editContext || (zz.inputState.composing = -1, zz.inputState.compositionEndedAt = Date.now(), zz.inputState.compositionPendingKey = !0, zz.inputState.compositionPendingChange = zz.observer.pendingRecords().length > 0, zz.inputState.compositionFirstChange = null, Nz.chrome && Nz.android ? zz.observer.flushSoon() : zz.inputState.compositionPendingChange ? Promise.resolve().then((() => zz.observer.flush())) : setTimeout((() => {
        zz.inputState.composing < 0 && zz.docView.hasComposition && zz.update([])
      }), 50))
    }, wE.contextmenu = zz => {
      zz.inputState.lastContextMenu = Date.now()
    }, KE.beforeinput = (zz, uz) => {
      var bz, Ez;
      if ("insertText" != uz.inputType && "insertCompositionText" != uz.inputType || (zz.inputState.insertingText = uz.data, zz.inputState.insertingTextAt = Date.now()), "insertReplacementText" == uz.inputType && zz.observer.editContext) {
        let Ez = null === (bz = uz.dataTransfer) || void 0 === bz ? void 0 : bz.getData("text/plain"),
          nz = uz.getTargetRanges();
        if (Ez && nz.length) {
          let uz = nz[0],
            bz = zz.posAtDOM(uz.startContainer, uz.startOffset),
            iz = zz.posAtDOM(uz.endContainer, uz.endOffset);
          return iE(zz, {
            from: bz,
            to: iz,
            insert: zz.state.toText(Ez)
          }, null), !0
        }
      }
      let nz;
      if (Nz.chrome && Nz.android && (nz = pE.find((zz => zz.inputType == uz.inputType))) && (zz.observer.delayAndroidKey(nz.key, nz.keyCode), "Backspace" == nz.key || "Delete" == nz.key)) {
        let uz = (null === (Ez = window.visualViewport) || void 0 === Ez ? void 0 : Ez.height) || 0;
        setTimeout((() => {
          var bz;
          ((null === (bz = window.visualViewport) || void 0 === bz ? void 0 : bz.height) || 0) > uz + 10 && zz.hasFocus && (zz.contentDOM.blur(), zz.focus())
        }), 100)
      }
      return Nz.ios && "deleteContentForward" == uz.inputType && zz.observer.flushSoon(), Nz.safari && "insertText" == uz.inputType && zz.inputState.composing >= 0 && setTimeout((() => wE.compositionend(zz, uz)), 20), !1
    };
    const aE = new Set;
    const VE = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let mE = !1;

    function qE() {
      mE = !1
    }
    class hE {
      constructor(zz) {
        this.lineWrapping = zz, this.doc = Ez.I.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(zz, uz) {
        let bz = this.doc.lineAt(uz).number - this.doc.lineAt(zz).number + 1;
        return this.lineWrapping && (bz += Math.max(0, Math.ceil((uz - zz - bz * this.lineLength * .5) / this.lineLength))), this.lineHeight * bz
      }
      heightForLine(zz) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((zz - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(zz) {
        return this.doc = zz, this
      }
      mustRefreshForWrapping(zz) {
        return VE.indexOf(zz) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(zz) {
        let uz = !1;
        for (let bz = 0; bz < zz.length; bz++) {
          let Ez = zz[bz];
          Ez < 0 ? bz++ : this.heightSamples[Math.floor(10 * Ez)] || (uz = !0, this.heightSamples[Math.floor(10 * Ez)] = !0)
        }
        return uz
      }
      refresh(zz, uz, bz, Ez, nz, iz) {
        let lz = VE.indexOf(zz) > -1,
          Mz = Math.abs(uz - this.lineHeight) > .3 || this.lineWrapping != lz || Math.abs(bz - this.charWidth) > .1;
        if (this.lineWrapping = lz, this.lineHeight = uz, this.charWidth = bz, this.textHeight = Ez, this.lineLength = nz, Mz) {
          this.heightSamples = {};
          for (let zz = 0; zz < iz.length; zz++) {
            let uz = iz[zz];
            uz < 0 ? zz++ : this.heightSamples[Math.floor(10 * uz)] = !0
          }
        }
        return Mz
      }
    }
    class UE {
      constructor(zz, uz) {
        this.from = zz, this.heights = uz, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class cE {
      constructor(zz, uz, bz, Ez, nz) {
        this.from = zz, this.length = uz, this.top = bz, this.height = Ez, this._content = nz
      }
      get type() {
        return "number" == typeof this._content ? Pz.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof mz ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(zz) {
        let uz = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(zz._content) ? zz._content : [zz]);
        return new cE(this.from, this.length + zz.length, this.top, this.height + zz.height, uz)
      }
    }
    var gE = function(zz) {
      return zz[zz.ByPos = 0] = "ByPos", zz[zz.ByHeight = 1] = "ByHeight", zz[zz.ByPosNoHeight = 2] = "ByPosNoHeight", zz
    }(gE || (gE = {}));
    const SE = .001;
    class yE {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = zz, this.height = uz, this.flags = bz
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(zz) {
        this.flags = (zz ? 2 : 0) | -3 & this.flags
      }
      setHeight(zz) {
        this.height != zz && (Math.abs(this.height - zz) > SE && (mE = !0), this.height = zz)
      }
      replace(zz, uz, bz) {
        return yE.of(bz)
      }
      decomposeLeft(zz, uz) {
        uz.push(this)
      }
      decomposeRight(zz, uz) {
        uz.push(this)
      }
      applyChanges(zz, uz, bz, Ez) {
        let nz = this,
          iz = bz.doc;
        for (let lz = Ez.length - 1; lz >= 0; lz--) {
          let {
            fromA: Mz,
            toA: tz,
            fromB: Hz,
            toB: Oz
          } = Ez[lz], pz = nz.lineAt(Mz, gE.ByPosNoHeight, bz.setDoc(uz), 0, 0), dz = pz.to >= tz ? pz : nz.lineAt(tz, gE.ByPosNoHeight, bz, 0, 0);
          for (Oz += dz.to - tz, tz = dz.to; lz > 0 && pz.from <= Ez[lz - 1].toA;) Mz = Ez[lz - 1].fromA, Hz = Ez[lz - 1].fromB, lz--, Mz < pz.from && (pz = nz.lineAt(Mz, gE.ByPosNoHeight, bz, 0, 0));
          Hz += pz.from - Mz, Mz = pz.from;
          let Fz = CE.build(bz.setDoc(iz), zz, Hz, Oz);
          nz = DE(nz, nz.replace(Mz, tz, Fz))
        }
        return nz.updateHeight(bz, 0)
      }
      static empty() {
        return new eE(0, 0, 0)
      }
      static of (zz) {
        if (1 == zz.length) return zz[0];
        let uz = 0,
          bz = zz.length,
          Ez = 0,
          nz = 0;
        for (;;)
          if (uz == bz)
            if (Ez > 2 * nz) {
              let nz = zz[uz - 1];
              nz.break ? zz.splice(--uz, 1, nz.left, null, nz.right) : zz.splice(--uz, 1, nz.left, nz.right), bz += 1 + nz.break, Ez -= nz.size
            } else {
              if (!(nz > 2 * Ez)) break;
              {
                let uz = zz[bz];
                uz.break ? zz.splice(bz, 1, uz.left, null, uz.right) : zz.splice(bz, 1, uz.left, uz.right), bz += 2 + uz.break, nz -= uz.size
              }
            }
        else if (Ez < nz) {
          let bz = zz[uz++];
          bz && (Ez += bz.size)
        } else {
          let uz = zz[--bz];
          uz && (nz += uz.size)
        }
        let iz = 0;
        return null == zz[uz - 1] ? (iz = 1, uz--) : null == zz[uz] && (iz = 1, bz++), new IE(yE.of(zz.slice(0, uz)), iz, yE.of(zz.slice(bz)))
      }
    }

    function DE(zz, uz) {
      return zz == uz ? zz : (zz.constructor != uz.constructor && (mE = !0), uz)
    }
    yE.prototype.size = 1;
    const QE = Gz.replace({});
    class WE extends yE {
      constructor(zz, uz, bz) {
        super(zz, uz), this.deco = bz, this.spaceAbove = 0
      }
      mainBlock(zz, uz) {
        return new cE(uz, this.length, zz + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(zz, uz, bz, Ez) {
        return this.spaceAbove && zz < bz + this.spaceAbove ? new cE(Ez, 0, bz, this.spaceAbove, QE) : this.mainBlock(bz, Ez)
      }
      lineAt(zz, uz, bz, Ez, nz) {
        let iz = this.mainBlock(Ez, nz);
        return this.spaceAbove ? this.blockAt(0, bz, Ez, nz).join(iz) : iz
      }
      forEachLine(zz, uz, bz, Ez, nz, iz) {
        zz <= nz + this.length && uz >= nz && iz(this.lineAt(0, gE.ByPos, bz, Ez, nz))
      }
      setMeasuredHeight(zz) {
        let uz = zz.heights[zz.index++];
        uz < 0 ? (this.spaceAbove = -uz, uz = zz.heights[zz.index++]) : this.spaceAbove = 0, this.setHeight(uz)
      }
      updateHeight(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 3 ? arguments[3] : void 0;
        return bz && bz.from <= uz && bz.more && this.setMeasuredHeight(bz), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class eE extends WE {
      constructor(zz, uz, bz) {
        super(zz, uz, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = bz
      }
      mainBlock(zz, uz) {
        return new cE(uz, this.length, zz + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(zz, uz, bz) {
        let Ez = bz[0];
        return 1 == bz.length && (Ez instanceof eE || Ez instanceof jE && 4 & Ez.flags) && Math.abs(this.length - Ez.length) < 10 ? (Ez instanceof jE ? Ez = new eE(Ez.length, this.height, this.spaceAbove) : Ez.height = this.height, this.outdated || (Ez.outdated = !1), Ez) : yE.of(bz)
      }
      updateHeight(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        return Ez && Ez.from <= uz && Ez.more ? this.setMeasuredHeight(Ez) : (bz || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, zz.heightForLine(this.length - this.collapsed)) + this.breaks * zz.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class jE extends yE {
      constructor(zz) {
        super(zz, 0)
      }
      heightMetrics(zz, uz) {
        let bz, Ez = zz.doc.lineAt(uz).number,
          nz = zz.doc.lineAt(uz + this.length).number,
          iz = nz - Ez + 1,
          lz = 0;
        if (zz.lineWrapping) {
          let uz = Math.min(this.height, zz.lineHeight * iz);
          bz = uz / iz, this.length > iz + 1 && (lz = (this.height - uz) / (this.length - iz - 1))
        } else bz = this.height / iz;
        return {
          firstLine: Ez,
          lastLine: nz,
          perLine: bz,
          perChar: lz
        }
      }
      blockAt(zz, uz, bz, Ez) {
        let {
          firstLine: nz,
          lastLine: iz,
          perLine: lz,
          perChar: Mz
        } = this.heightMetrics(uz, Ez);
        if (uz.lineWrapping) {
          let nz = Ez + (zz < uz.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (zz - bz) / this.height)) * this.length)),
            iz = uz.doc.lineAt(nz),
            tz = lz + iz.length * Mz,
            Hz = Math.max(bz, zz - tz / 2);
          return new cE(iz.from, iz.length, Hz, tz, 0)
        } {
          let Ez = Math.max(0, Math.min(iz - nz, Math.floor((zz - bz) / lz))),
            {
              from: Mz,
              length: tz
            } = uz.doc.line(nz + Ez);
          return new cE(Mz, tz, bz + lz * Ez, lz, 0)
        }
      }
      lineAt(zz, uz, bz, Ez, nz) {
        if (uz == gE.ByHeight) return this.blockAt(zz, bz, Ez, nz);
        if (uz == gE.ByPosNoHeight) {
          let {
            from: uz,
            to: Ez
          } = bz.doc.lineAt(zz);
          return new cE(uz, Ez - uz, 0, 0, 0)
        }
        let {
          firstLine: iz,
          perLine: lz,
          perChar: Mz
        } = this.heightMetrics(bz, nz), tz = bz.doc.lineAt(zz), Hz = lz + tz.length * Mz, Oz = tz.number - iz, pz = Ez + lz * Oz + Mz * (tz.from - nz - Oz);
        return new cE(tz.from, tz.length, Math.max(Ez, Math.min(pz, Ez + this.height - Hz)), Hz, 0)
      }
      forEachLine(zz, uz, bz, Ez, nz, iz) {
        zz = Math.max(zz, nz), uz = Math.min(uz, nz + this.length);
        let {
          firstLine: lz,
          perLine: Mz,
          perChar: tz
        } = this.heightMetrics(bz, nz);
        for (let Hz = zz, Oz = Ez; Hz <= uz;) {
          let uz = bz.doc.lineAt(Hz);
          if (Hz == zz) {
            let bz = uz.number - lz;
            Oz += Mz * bz + tz * (zz - nz - bz)
          }
          let Ez = Mz + tz * uz.length;
          iz(new cE(uz.from, uz.length, Oz, Ez, 0)), Oz += Ez, Hz = uz.to + 1
        }
      }
      replace(zz, uz, bz) {
        let Ez = this.length - uz;
        if (Ez > 0) {
          let zz = bz[bz.length - 1];
          zz instanceof jE ? bz[bz.length - 1] = new jE(zz.length + Ez) : bz.push(null, new jE(Ez - 1))
        }
        if (zz > 0) {
          let uz = bz[0];
          uz instanceof jE ? bz[0] = new jE(zz + uz.length) : bz.unshift(new jE(zz - 1), null)
        }
        return yE.of(bz)
      }
      decomposeLeft(zz, uz) {
        uz.push(new jE(zz - 1), null)
      }
      decomposeRight(zz, uz) {
        uz.push(null, new jE(this.length - zz - 1))
      }
      updateHeight(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 ? arguments[3] : void 0,
          nz = uz + this.length;
        if (Ez && Ez.from <= uz + this.length && Ez.more) {
          let bz = [],
            iz = Math.max(uz, Ez.from),
            lz = -1;
          for (Ez.from > uz && bz.push(new jE(Ez.from - uz - 1).updateHeight(zz, uz)); iz <= nz && Ez.more;) {
            let uz = zz.doc.lineAt(iz).length;
            bz.length && bz.push(null);
            let nz = Ez.heights[Ez.index++],
              Mz = 0;
            nz < 0 && (Mz = -nz, nz = Ez.heights[Ez.index++]), -1 == lz ? lz = nz : Math.abs(nz - lz) >= SE && (lz = -2);
            let tz = new eE(uz, nz, Mz);
            tz.outdated = !1, bz.push(tz), iz += uz + 1
          }
          iz <= nz && bz.push(null, new jE(nz - iz).updateHeight(zz, iz));
          let Mz = yE.of(bz);
          return (lz < 0 || Math.abs(Mz.height - this.height) >= SE || Math.abs(lz - this.heightMetrics(zz, uz).perLine) >= SE) && (mE = !0), DE(this, Mz)
        }
        return (bz || this.outdated) && (this.setHeight(zz.heightForGap(uz, uz + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class IE extends yE {
      constructor(zz, uz, bz) {
        super(zz.length + uz + bz.length, zz.height + bz.height, uz | (zz.outdated || bz.outdated ? 2 : 0)), this.left = zz, this.right = bz, this.size = zz.size + bz.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(zz, uz, bz, Ez) {
        let nz = bz + this.left.height;
        return zz < nz ? this.left.blockAt(zz, uz, bz, Ez) : this.right.blockAt(zz, uz, nz, Ez + this.left.length + this.break)
      }
      lineAt(zz, uz, bz, Ez, nz) {
        let iz = Ez + this.left.height,
          lz = nz + this.left.length + this.break,
          Mz = uz == gE.ByHeight ? zz < iz : zz < lz,
          tz = Mz ? this.left.lineAt(zz, uz, bz, Ez, nz) : this.right.lineAt(zz, uz, bz, iz, lz);
        if (this.break || (Mz ? tz.to < lz : tz.from > lz)) return tz;
        let Hz = uz == gE.ByPosNoHeight ? gE.ByPosNoHeight : gE.ByPos;
        return Mz ? tz.join(this.right.lineAt(lz, Hz, bz, iz, lz)) : this.left.lineAt(lz, Hz, bz, Ez, nz).join(tz)
      }
      forEachLine(zz, uz, bz, Ez, nz, iz) {
        let lz = Ez + this.left.height,
          Mz = nz + this.left.length + this.break;
        if (this.break) zz < Mz && this.left.forEachLine(zz, uz, bz, Ez, nz, iz), uz >= Mz && this.right.forEachLine(zz, uz, bz, lz, Mz, iz);
        else {
          let tz = this.lineAt(Mz, gE.ByPos, bz, Ez, nz);
          zz < tz.from && this.left.forEachLine(zz, tz.from - 1, bz, Ez, nz, iz), tz.to >= zz && tz.from <= uz && iz(tz), uz > tz.to && this.right.forEachLine(tz.to + 1, uz, bz, lz, Mz, iz)
        }
      }
      replace(zz, uz, bz) {
        let Ez = this.left.length + this.break;
        if (uz < Ez) return this.balanced(this.left.replace(zz, uz, bz), this.right);
        if (zz > this.left.length) return this.balanced(this.left, this.right.replace(zz - Ez, uz - Ez, bz));
        let nz = [];
        zz > 0 && this.decomposeLeft(zz, nz);
        let iz = nz.length;
        for (let lz of bz) nz.push(lz);
        if (zz > 0 && BE(nz, iz - 1), uz < this.length) {
          let zz = nz.length;
          this.decomposeRight(uz, nz), BE(nz, zz)
        }
        return yE.of(nz)
      }
      decomposeLeft(zz, uz) {
        let bz = this.left.length;
        if (zz <= bz) return this.left.decomposeLeft(zz, uz);
        uz.push(this.left), this.break && (bz++, zz >= bz && uz.push(null)), zz > bz && this.right.decomposeLeft(zz - bz, uz)
      }
      decomposeRight(zz, uz) {
        let bz = this.left.length,
          Ez = bz + this.break;
        if (zz >= Ez) return this.right.decomposeRight(zz - Ez, uz);
        zz < bz && this.left.decomposeRight(zz, uz), this.break && zz < Ez && uz.push(null), uz.push(this.right)
      }
      balanced(zz, uz) {
        return zz.size > 2 * uz.size || uz.size > 2 * zz.size ? yE.of(this.break ? [zz, null, uz] : [zz, uz]) : (this.left = DE(this.left, zz), this.right = DE(this.right, uz), this.setHeight(zz.height + uz.height), this.outdated = zz.outdated || uz.outdated, this.size = zz.size + uz.size, this.length = zz.length + this.break+uz.length, this)
      }
      updateHeight(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: nz,
            right: iz
          } = this,
          lz = uz + nz.length + this.break,
          Mz = null;
        return Ez && Ez.from <= uz + nz.length && Ez.more ? Mz = nz = nz.updateHeight(zz, uz, bz, Ez) : nz.updateHeight(zz, uz, bz), Ez && Ez.from <= lz + iz.length && Ez.more ? Mz = iz = iz.updateHeight(zz, lz, bz, Ez) : iz.updateHeight(zz, lz, bz), Mz ? this.balanced(nz, iz) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function BE(zz, uz) {
      let bz, Ez;
      null == zz[uz] && (bz = zz[uz - 1]) instanceof jE && (Ez = zz[uz + 1]) instanceof jE && zz.splice(uz - 1, 3, new jE(bz.length + 1 + Ez.length))
    }
    class CE {
      constructor(zz, uz) {
        this.pos = zz, this.oracle = uz, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = zz
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(zz, uz) {
        if (this.lineStart > -1) {
          let zz = Math.min(uz, this.lineEnd),
            bz = this.nodes[this.nodes.length - 1];
          bz instanceof eE ? bz.length += zz - this.pos : (zz > this.pos || !this.isCovered) && this.nodes.push(new eE(zz - this.pos, -1, 0)), this.writtenTo = zz, uz > zz && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = uz
      }
      point(zz, uz, bz) {
        if (zz < uz || bz.heightRelevant) {
          let Ez = bz.widget ? bz.widget.estimatedHeight : 0,
            nz = bz.widget ? bz.widget.lineBreaks : 0;
          Ez < 0 && (Ez = this.oracle.lineHeight);
          let iz = uz - zz;
          bz.block ? this.Xzz(new WE(iz, Ez, bz)) : (iz || nz || Ez >= 5) && this.addLineDeco(Ez, nz, iz)
        } else uz > zz && this.span(zz, uz);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: zz,
          to: uz
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = zz, this.lineEnd = uz, this.writtenTo < zz && ((this.writtenTo < zz - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, zz - 1)), this.nodes.push(null)), this.pos > zz && this.nodes.push(new eE(this.pos - zz, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(zz, uz) {
        let bz = new jE(uz - zz);
        return this.oracle.doc.lineAt(zz).to == uz && (bz.flags |= 4), bz
      }
      ensureLine() {
        this.enterLine();
        let zz = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (zz instanceof eE) return zz;
        let uz = new eE(0, -1, 0);
        return this.nodes.push(uz), uz
      }
      Xzz(zz) {
        this.enterLine();
        let uz = zz.deco;
        uz && uz.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(zz), this.writtenTo = this.pos = this.pos + zz.length, uz && uz.endSide > 0 && (this.covering = zz)
      }
      addLineDeco(zz, uz, bz) {
        let Ez = this.ensureLine();
        Ez.length += bz, Ez.collapsed += bz, Ez.widgetHeight = Math.max(Ez.widgetHeight, zz), Ez.breaks += uz, this.writtenTo = this.pos = this.pos + bz
      }
      finish(zz) {
        let uz = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || uz instanceof eE || this.isCovered ? (this.writtenTo < this.pos || null == uz) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new eE(0, -1, 0));
        let bz = zz;
        for (let Ez of this.nodes) Ez instanceof eE && Ez.updateHeight(this.oracle, bz), bz += Ez ? Ez.length : 1;
        return this.nodes
      }
      static build(zz, uz, bz, nz) {
        let iz = new CE(bz, zz);
        return Ez.x.spans(uz, bz, nz, iz, 0), iz.finish(bz)
      }
    }
    class YE {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(zz, uz, bz, Ez) {
        (zz < uz || bz && bz.heightRelevant || Ez && Ez.heightRelevant) && hz(zz, uz, this.changes, 5)
      }
    }

    function kE(zz, uz) {
      let bz = zz.getBoundingClientRect(),
        Ez = zz.ownerDocument,
        nz = Ez.defaultView || window,
        iz = Math.max(0, bz.left),
        lz = Math.min(nz.innerWidth, bz.right),
        Mz = Math.max(0, bz.top),
        tz = Math.min(nz.innerHeight, bz.bottom);
      for (let Hz = zz.parentNode; Hz && Hz != Ez.body;)
        if (1 == Hz.nodeType) {
          let uz = Hz,
            bz = window.getComputedStyle(uz);
          if ((uz.scrollHeight > uz.clientHeight || uz.scrollWidth > uz.clientWidth) && "visible" != bz.overflow) {
            let bz = uz.getBoundingClientRect();
            iz = Math.max(iz, bz.left), lz = Math.min(lz, bz.right), Mz = Math.max(Mz, bz.top), tz = Math.min(Hz == zz.parentNode ? nz.innerHeight : tz, bz.bottom)
          }
          Hz = "absolute" == bz.position || "fixed" == bz.position ? uz.offsetParent : uz.parentNode
        } else {
          if (11 != Hz.nodeType) break;
          Hz = Hz.host
        } return {
        left: iz - bz.left,
        right: Math.max(iz, lz) - bz.left,
        top: Mz - (bz.top + uz),
        bottom: Math.max(Mz, tz) - (bz.top + uz)
      }
    }

    function zn(zz, uz) {
      let bz = zz.getBoundingClientRect();
      return {
        left: 0,
        right: bz.right - bz.left,
        top: uz,
        bottom: bz.bottom - (bz.top + uz)
      }
    }
    class un {
      constructor(zz, uz, bz, Ez) {
        this.from = zz, this.to = uz, this.size = bz, this.displaySize = Ez
      }
      static same(zz, uz) {
        if (zz.length != uz.length) return !1;
        for (let bz = 0; bz < zz.length; bz++) {
          let Ez = zz[bz],
            nz = uz[bz];
          if (Ez.from != nz.from || Ez.to != nz.to || Ez.size != nz.size) return !1
        }
        return !0
      }
      draw(zz, uz) {
        return Gz.replace({
          widget: new bn(this.displaySize * (uz ? zz.scaleY : zz.scaleX), uz)
        }).range(this.from, this.to)
      }
    }
    class bn extends Lz {
      constructor(zz, uz) {
        super(), this.size = zz, this.vertical = uz
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
    class En {
      constructor(zz, uz) {
        this.view = zz, this.state = uz, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Hn, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Hu.LTR, this.o_ = [], this.mustEnforceCursorAssoc = !1;
        let bz = uz.facet(ku).some((zz => "function" != typeof zz && "cm-lineWrapping" == zz.class));
        this.heightOracle = new hE(bz), this.stateDeco = On(uz), this.heightMap = yE.empty().applyChanges(this.stateDeco, Ez.I.empty, this.heightOracle.setDoc(uz.doc), [new Hb(0, 0, 0, uz.doc.length)]);
        for (let Ez = 0; Ez < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Ez++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Gz.set(this.lineGaps.map((zz => zz.draw(this, !1)))), this.scrollParent = zz.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let zz = [this.viewport],
          {
            main: uz
          } = this.state.selection;
        for (let bz = 0; bz <= 1; bz++) {
          let Ez = bz ? uz.head : uz.anchor;
          if (!zz.some((zz => {
              let {
                from: uz,
                to: bz
              } = zz;
              return Ez >= uz && Ez <= bz
            }))) {
            let {
              from: uz,
              to: bz
            } = this.lineBlockAt(Ez);
            zz.push(new nn(uz, bz))
          }
        }
        return this.viewports = zz.sort(((zz, uz) => zz.from - uz.from)), this.updateScaler()
      }
      updateScaler() {
        let zz = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? Hn : new pn(this.heightOracle, this.heightMap, this.viewports), zz.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (zz => {
          this.viewportLines.push(dn(zz, this.scaler))
        }))
      }
      update(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = zz.state;
        let bz = this.stateDeco;
        this.stateDeco = On(this.state);
        let nz = zz.changedRanges,
          iz = Hb.extendWithRanges(nz, function(zz, uz, bz) {
            let nz = new YE;
            return Ez.x.compare(zz, uz, bz, nz, 0), nz.changes
          }(bz, this.stateDeco, zz ? zz.changes : Ez.ChangeSet.empty(this.state.doc.length))),
          lz = this.heightMap.height,
          Mz = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        qE(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, zz.startState.doc, this.heightOracle.setDoc(this.state.doc), iz), (this.heightMap.height != lz || mE) && (zz.flags |= 2), Mz ? (this.scrollAnchorPos = zz.changes.mapPos(Mz.from, -1), this.scrollAnchorHeight = Mz.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = lz);
        let tz = iz.length ? this.mapViewport(this.viewport, zz.changes) : this.viewport;
        (uz && (uz.range.head < tz.from || uz.range.head > tz.to) || !this.viewportIsAppropriate(tz)) && (tz = this.getViewport(0, uz));
        let Hz = tz.from != this.viewport.from || tz.to != this.viewport.to;
        this.viewport = tz, zz.flags |= this.updateForViewport(), (Hz || !zz.changes.empty || 2 & zz.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, zz.changes))), zz.flags |= this.computeVisibleRanges(zz.changes), uz && (this.scrollTarget = uz), !this.mustEnforceCursorAssoc && (zz.selectionSet || zz.focusChanged) && zz.view.lineWrapping && zz.state.selection.main.empty && zz.state.selection.main.assoc && !zz.state.facet(gu) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: zz
        } = this, uz = zz.contentDOM, bz = window.getComputedStyle(uz), nz = this.heightOracle, iz = bz.whiteSpace;
        this.defaultTextDirection = "rtl" == bz.direction ? Hu.RTL : Hu.LTR;
        let lz = this.heightOracle.mustRefreshForWrapping(iz) || "refresh" === this.mustMeasureContent,
          Mz = uz.getBoundingClientRect(),
          tz = lz || this.mustMeasureContent || this.contentDOMHeight != Mz.height;
        this.contentDOMHeight = Mz.height, this.mustMeasureContent = !1;
        let Hz = 0,
          Oz = 0;
        if (Mz.width && Mz.height) {
          let {
            scaleX: zz,
            scaleY: bz
          } = Cz(uz, Mz);
          (zz > .005 && Math.abs(this.scaleX - zz) > .005 || bz > .005 && Math.abs(this.scaleY - bz) > .005) && (this.scaleX = zz, this.scaleY = bz, Hz |= 16, lz = tz = !0)
        }
        let pz = (parseInt(bz.paddingTop) || 0) * this.scaleY,
          dz = (parseInt(bz.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == pz && this.paddingBottom == dz || (this.paddingTop = pz, this.paddingBottom = dz, Hz |= 18), this.editorWidth != zz.scrollDOM.clientWidth && (nz.lineWrapping && (tz = !0), this.editorWidth = zz.scrollDOM.clientWidth, Hz |= 16);
        let Fz = Yz(this.view.contentDOM, !1).y;
        Fz != this.scrollParent && (this.scrollParent = Fz, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let Zz = this.getScrollOffset();
        this.scrollOffset != Zz && (this.scrollAnchorHeight = -1, this.scrollOffset = Zz), this.scrolledToBottom = iu(this.scrollParent || zz.win);
        let Rz = (this.printing ? zn : kE)(uz, this.paddingTop),
          Kz = Rz.top - this.pixelViewport.top,
          wz = Rz.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Rz;
        let Xz = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (Xz != this.inView && (this.inView = Xz, Xz && (tz = !0)), !this.inView && !this.scrollTarget && ! function(zz) {
            let uz = zz.getBoundingClientRect(),
              bz = zz.ownerDocument.defaultView || window;
            return uz.left < bz.innerWidth && uz.right > 0 && uz.top < bz.innerHeight && uz.bottom > 0
          }(zz.dom)) return 0;
        let fz = Mz.width;
        if (this.contentDOMWidth == fz && this.editorHeight == zz.scrollDOM.clientHeight || (this.contentDOMWidth = Mz.width, this.editorHeight = zz.scrollDOM.clientHeight, Hz |= 16), tz) {
          let uz = zz.docView.measureVisibleLineHeights(this.viewport);
          if (nz.mustRefreshForHeights(uz) && (lz = !0), lz || nz.lineWrapping && Math.abs(fz - this.contentDOMWidth) > nz.charWidth) {
            let {
              lineHeight: bz,
              charWidth: Ez,
              textHeight: Mz
            } = zz.docView.measureTextSize();
            lz = bz > 0 && nz.refresh(iz, bz, Ez, Mz, Math.max(5, fz / Ez), uz), lz && (zz.docView.minWidth = 0, Hz |= 16)
          }
          Kz > 0 && wz > 0 ? Oz = Math.max(Kz, wz) : Kz < 0 && wz < 0 && (Oz = Math.min(Kz, wz)), qE();
          for (let bz of this.viewports) {
            let iz = bz.from == this.viewport.from ? uz : zz.docView.measureVisibleLineHeights(bz);
            this.heightMap = (lz ? yE.empty().applyChanges(this.stateDeco, Ez.I.empty, this.heightOracle, [new Hb(0, 0, 0, zz.state.doc.length)]) : this.heightMap).updateHeight(nz, 0, lz, new UE(bz.from, iz))
          }
          mE && (Hz |= 2)
        }
        let sz = !this.viewportIsAppropriate(this.viewport, Oz) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return sz && (2 & Hz && (Hz |= this.updateScaler()), this.viewport = this.getViewport(Oz, this.scrollTarget), Hz |= this.updateForViewport()), (2 & Hz || sz) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(lz ? [] : this.lineGaps, zz)), Hz |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, zz.docView.enforceCursorAssoc()), Hz
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(zz, uz) {
        let bz = .5 - Math.max(-.5, Math.min(.5, zz / 1e3 / 2)),
          Ez = this.heightMap,
          nz = this.heightOracle,
          {
            visibleTop: iz,
            visibleBottom: lz
          } = this,
          Mz = new nn(Ez.lineAt(iz - 1e3 * bz, gE.ByHeight, nz, 0, 0).from, Ez.lineAt(lz + 1e3 * (1 - bz), gE.ByHeight, nz, 0, 0).to);
        if (uz) {
          let {
            head: zz
          } = uz.range;
          if (zz < Mz.from || zz > Mz.to) {
            let bz, iz = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              lz = Ez.lineAt(zz, gE.ByPos, nz, 0, 0);
            bz = "center" == uz.y ? (lz.top + lz.bottom) / 2 - iz / 2 : "start" == uz.y || "nearest" == uz.y && zz < Mz.from ? lz.top : lz.bottom - iz, Mz = new nn(Ez.lineAt(bz - 500, gE.ByHeight, nz, 0, 0).from, Ez.lineAt(bz + iz + 500, gE.ByHeight, nz, 0, 0).to)
          }
        }
        return Mz
      }
      mapViewport(zz, uz) {
        let bz = uz.mapPos(zz.from, -1),
          Ez = uz.mapPos(zz.to, 1);
        return new nn(this.heightMap.lineAt(bz, gE.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Ez, gE.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(zz) {
        let {
          from: uz,
          to: bz
        } = zz, Ez = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: nz
        } = this.heightMap.lineAt(uz, gE.ByPos, this.heightOracle, 0, 0), {
          bottom: iz
        } = this.heightMap.lineAt(bz, gE.ByPos, this.heightOracle, 0, 0), {
          visibleTop: lz,
          visibleBottom: Mz
        } = this;
        return (0 == uz || nz <= lz - Math.max(10, Math.min(-Ez, 250))) && (bz == this.state.doc.length || iz >= Mz + Math.max(10, Math.min(Ez, 250))) && nz > lz - 2e3 && iz < Mz + 2e3
      }
      mapLineGaps(zz, uz) {
        if (!zz.length || uz.empty) return zz;
        let bz = [];
        for (let Ez of zz) uz.touchesRange(Ez.from, Ez.to) || bz.push(new un(uz.mapPos(Ez.from), uz.mapPos(Ez.to), Ez.size, Ez.displaySize));
        return bz
      }
      ensureLineGaps(zz, uz) {
        let bz = this.heightOracle.lineWrapping,
          nz = bz ? 1e4 : 2e3,
          iz = nz >> 1,
          lz = nz << 1;
        if (this.defaultTextDirection != Hu.LTR && !bz) return [];
        let Mz = [],
          tz = (nz, lz, Hz, Oz) => {
            if (lz - nz < iz) return;
            let pz = this.state.selection.main,
              dz = [pz.from];
            pz.empty || dz.push(pz.to);
            for (let zz of dz)
              if (zz > nz && zz < lz) return tz(nz, zz - 10, Hz, Oz), void tz(zz + 10, lz, Hz, Oz);
            let Fz = function(zz, uz) {
              for (let bz of zz)
                if (uz(bz)) return bz;
              return
            }(zz, (zz => zz.from >= Hz.from && zz.to <= Hz.to && Math.abs(zz.from - nz) < iz && Math.abs(zz.to - lz) < iz && !dz.some((uz => zz.from < uz && zz.to > uz))));
            if (!Fz) {
              if (lz < Hz.to && uz && bz && uz.o_.some((zz => zz.from <= lz && zz.to >= lz))) {
                let zz = uz.moveToLineBoundary(Ez.l.cursor(lz), !1, !0).head;
                zz > nz && (lz = zz)
              }
              let zz = this.gapSize(Hz, nz, lz, Oz);
              Fz = new un(nz, lz, zz, bz || zz < 2e6 ? zz : 2e6)
            }
            Mz.push(Fz)
          },
          Hz = uz => {
            if (uz.length < lz || uz.type != Pz.Text) return;
            let iz = function(zz, uz, bz) {
              let nz = [],
                iz = zz,
                lz = 0;
              Ez.x.spans(bz, zz, uz, {
                span() {},
                point(zz, uz) {
                  zz > iz && (nz.push({
                    from: iz,
                    to: zz
                  }), lz += zz - iz), iz = uz
                }
              }, 20), iz < uz && (nz.push({
                from: iz,
                to: uz
              }), lz += uz - iz);
              return {
                total: lz,
                al: nz
              }
            }(uz.from, uz.to, this.stateDeco);
            if (iz.total < lz) return;
            let Mz, Hz, Oz = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (bz) {
              let zz, bz, Ez = nz / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != Oz) {
                let nz = tn(iz, Oz),
                  lz = ((this.visibleBottom - this.visibleTop) / 2 + Ez) / uz.height;
                zz = nz - lz, bz = nz + lz
              } else zz = (this.visibleTop - uz.top - Ez) / uz.height, bz = (this.visibleBottom - uz.top + Ez) / uz.height;
              Mz = Mn(iz, zz), Hz = Mn(iz, bz)
            } else {
              let bz = iz.total * this.heightOracle.charWidth,
                Ez = nz * this.heightOracle.charWidth,
                lz = 0;
              if (bz > 2e6)
                for (let nz of zz) nz.from >= uz.from && nz.from < uz.to && nz.size != nz.displaySize && nz.from * this.heightOracle.charWidth + lz < this.pixelViewport.left && (lz = nz.size - nz.displaySize);
              let tz, pz, dz = this.pixelViewport.left + lz,
                Fz = this.pixelViewport.right + lz;
              if (null != Oz) {
                let zz = tn(iz, Oz),
                  uz = ((Fz - dz) / 2 + Ez) / bz;
                tz = zz - uz, pz = zz + uz
              } else tz = (dz - Ez) / bz, pz = (Fz + Ez) / bz;
              Mz = Mn(iz, tz), Hz = Mn(iz, pz)
            }
            Mz > uz.from && tz(uz.from, Mz, uz, iz), Hz < uz.to && tz(Hz, uz.to, uz, iz)
          };
        for (let Ez of this.viewportLines) Array.isArray(Ez.type) ? Ez.type.forEach(Hz) : Hz(Ez);
        return Mz
      }
      gapSize(zz, uz, bz, Ez) {
        let nz = tn(Ez, bz) - tn(Ez, uz);
        return this.heightOracle.lineWrapping ? zz.height * nz : Ez.total * this.heightOracle.charWidth * nz
      }
      updateLineGaps(zz) {
        un.same(zz, this.lineGaps) || (this.lineGaps = zz, this.lineGapDeco = Gz.set(zz.map((zz => zz.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(zz) {
        let uz = this.stateDeco;
        this.lineGaps.length && (uz = uz.concat(this.lineGapDeco));
        let bz = [];
        Ez.x.spans(uz, this.viewport.from, this.viewport.to, {
          span(zz, uz) {
            bz.push({
              from: zz,
              to: uz
            })
          },
          point() {}
        }, 20);
        let nz = 0;
        if (bz.length != this.o_.length) nz = 12;
        else
          for (let Ez = 0; Ez < bz.length && !(8 & nz); Ez++) {
            let uz = this.o_[Ez],
              iz = bz[Ez];
            uz.from == iz.from && uz.to == iz.to || (nz |= 4, zz && zz.mapPos(uz.from, -1) == iz.from && zz.mapPos(uz.to, 1) == iz.to || (nz |= 8))
          }
        return this.o_ = bz, nz
      }
      lineBlockAt(zz) {
        return zz >= this.viewport.from && zz <= this.viewport.to && this.viewportLines.find((uz => uz.from <= zz && uz.to >= zz)) || dn(this.heightMap.lineAt(zz, gE.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(zz) {
        return zz >= this.viewportLines[0].top && zz <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((uz => uz.top <= zz && uz.bottom >= zz)) || dn(this.heightMap.lineAt(this.scaler.fromDOM(zz), gE.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(zz) {
        let uz = this.lineBlockAtHeight(zz + 8);
        return uz.from >= this.viewport.from || this.viewportLines[0].top - zz > 200 ? uz : this.viewportLines[0]
      }
      elementAtHeight(zz) {
        return dn(this.heightMap.blockAt(this.scaler.fromDOM(zz), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class nn {
      constructor(zz, uz) {
        this.from = zz, this.to = uz
      }
    }

    function Mn(zz, uz) {
      let {
        total: bz,
        al: Ez
      } = zz;
      if (uz <= 0) return Ez[0].from;
      if (uz >= 1) return Ez[Ez.length - 1].to;
      let nz = Math.floor(bz * uz);
      for (let iz = 0;; iz++) {
        let {
          from: zz,
          to: uz
        } = Ez[iz], bz = uz - zz;
        if (nz <= bz) return zz + nz;
        nz -= bz
      }
    }

    function tn(zz, uz) {
      let bz = 0;
      for (let {
          from: Ez,
          to: nz
        }
        of zz.al) {
        if (uz <= nz) {
          bz += uz - Ez;
          break
        }
        bz += nz - Ez
      }
      return bz / zz.total
    }
    const Hn = {
      toDOM: zz => zz,
      fromDOM: zz => zz,
      scale: 1,
      eq(zz) {
        return zz == this
      }
    };

    function On(zz) {
      let uz = zz.facet(zb).filter((zz => "function" != typeof zz)),
        bz = zz.facet(bb).filter((zz => "function" != typeof zz));
      return bz.length && uz.push(Ez.x.join(bz)), uz
    }
    class pn {
      constructor(zz, uz, bz) {
        let Ez = 0,
          nz = 0,
          iz = 0;
        this.viewports = bz.map((bz => {
          let {
            from: nz,
            to: iz
          } = bz, lz = uz.lineAt(nz, gE.ByPos, zz, 0, 0).top, Mz = uz.lineAt(iz, gE.ByPos, zz, 0, 0).bottom;
          return Ez += Mz - lz, {
            from: nz,
            to: iz,
            top: lz,
            bottom: Mz,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Ez) / (uz.height - Ez);
        for (let lz of this.viewports) lz.domTop = iz + (lz.top - nz) * this.scale, iz = lz.domBottom = lz.domTop + (lz.bottom - lz.top), nz = lz.bottom
      }
      toDOM(zz) {
        for (let uz = 0, bz = 0, Ez = 0;; uz++) {
          let nz = uz < this.viewports.length ? this.viewports[uz] : null;
          if (!nz || zz < nz.top) return Ez + (zz - bz) * this.scale;
          if (zz <= nz.bottom) return nz.domTop + (zz - nz.top);
          bz = nz.bottom, Ez = nz.domBottom
        }
      }
      fromDOM(zz) {
        for (let uz = 0, bz = 0, Ez = 0;; uz++) {
          let nz = uz < this.viewports.length ? this.viewports[uz] : null;
          if (!nz || zz < nz.domTop) return bz + (zz - Ez) / this.scale;
          if (zz <= nz.domBottom) return nz.top + (zz - nz.domTop);
          bz = nz.bottom, Ez = nz.domBottom
        }
      }
      eq(zz) {
        return zz instanceof pn && (this.scale == zz.scale && this.viewports.length == zz.viewports.length && this.viewports.every(((uz, bz) => uz.from == zz.viewports[bz].from && uz.to == zz.viewports[bz].to)))
      }
    }

    function dn(zz, uz) {
      if (1 == uz.scale) return zz;
      let bz = uz.toDOM(zz.top),
        Ez = uz.toDOM(zz.bottom);
      return new cE(zz.from, zz.length, bz, Ez - bz, Array.isArray(zz._content) ? zz._content.map((zz => dn(zz, uz))) : zz._content)
    }
    const Fn = Ez.r.define({
        combine: zz => zz.join(" ")
      }),
      Zn = Ez.r.define({
        combine: zz => zz.indexOf(!0) > -1
      }),
      Rn = nz.e.newName(),
      Kn = nz.e.newName(),
      wn = nz.e.newName(),
      Xn = {
        "&light": "." + Kn,
        "&dark": "." + wn
      };

    function fn(zz, uz, bz) {
      return new nz.e(uz, {
        finish: uz => /&/.test(uz) ? uz.replace(/&\w*/, (uz => {
          if ("&" == uz) return zz;
          if (!bz || !bz[uz]) throw new RangeError(`Unsupported selector: ${uz}`);
          return bz[uz]
        })) : zz + " " + uz
      })
    }
    const sn = fn("." + Rn, {
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
      }, Xn),
      rn = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Nn = Nz.ie && Nz.ie_version <= 11;
    class vn {
      constructor(zz) {
        this.view = zz, this.active = !1, this.editContext = null, this.selectionRange = new kz, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = zz.contentDOM, this.observer = new MutationObserver((uz => {
          for (let zz of uz) this.queue.push(zz);
          (Nz.ie && Nz.ie_version <= 11 || Nz.ios && zz.composing) && uz.some((zz => "childList" == zz.type && zz.removedNodes.length || "characterData" == zz.type && zz.oldValue.length > zz.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !Nz.android || !1 === zz.constructor.EDIT_CONTEXT || Nz.chrome && Nz.chrome_version < 126 || (this.editContext = new An(zz), zz.state.facet(eu) && (zz.contentDOM.editContext = this.editContext.editContext)), Nn && (this.onCharData = zz => {
          this.queue.push({
            target: zz.target,
            type: "characterData",
            oldValue: zz.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.Fs = this.Fs.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var zz;
          (null === (zz = this.view.docView) || void 0 === zz ? void 0 : zz.lastUpdate) < Date.now() - 75 && this.Fs()
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
      Fs() {
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
        if (this.gapIntersection && (zz.length != this.gaps.length || this.gaps.some(((uz, bz) => uz != zz[bz])))) {
          this.gapIntersection.disconnect();
          for (let uz of zz) this.gapIntersection.observe(uz);
          this.gaps = zz
        }
      }
      onSelectionChange(zz) {
        let uz = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: bz
        } = this, Ez = this.selectionRange;
        if (bz.state.facet(eu) ? bz.root.activeElement != this.dom : !Sz(this.dom, Ez)) return;
        let nz = Ez.anchorNode && bz.docView.tile.nearest(Ez.anchorNode);
        nz && nz.isWidget() && nz.widget.ignoreEvent(zz) ? uz || (this.selectionChanged = !1) : (Nz.ie && Nz.ie_version <= 11 || Nz.android && Nz.chrome) && !bz.state.selection.main.empty && Ez.focusNode && Dz(Ez.focusNode, Ez.focusOffset, Ez.anchorNode, Ez.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: zz
        } = this, uz = cz(zz.root);
        if (!uz) return !1;
        let bz = Nz.safari && 11 == zz.root.nodeType && zz.root.activeElement == this.dom && function(zz, uz) {
          if (uz.getComposedRanges) {
            let bz = uz.getComposedRanges(zz.root)[0];
            if (bz) return Jn(zz, bz)
          }
          let bz = null;

          function Ez(zz) {
            zz.preventDefault(), zz.stopImmediatePropagation(), bz = zz.getTargetRanges()[0]
          }
          return zz.contentDOM.addEventListener("beforeinput", Ez, !0), zz.dom.ownerDocument.execCommand("indent"), zz.contentDOM.removeEventListener("beforeinput", Ez, !0), bz ? Jn(zz, bz) : null
        }(this.view, uz) || uz;
        if (!bz || this.selectionRange.eq(bz)) return !1;
        let Ez = Sz(this.dom, bz);
        return Ez && !this.selectionChanged && zz.inputState.lastFocusTime > Date.now() - 200 && zz.inputState.lastTouchTime < Date.now() - 300 && function(zz, uz) {
          let bz = uz.focusNode,
            Ez = uz.focusOffset;
          if (!bz || uz.anchorNode != bz || uz.anchorOffset != Ez) return !1;
          for (Ez = Math.min(Ez, jz(bz));;)
            if (Ez) {
              if (1 != bz.nodeType) return !1;
              let zz = bz.childNodes[Ez - 1];
              "false" == zz.contentEditable ? Ez-- : (bz = zz, Ez = jz(bz))
            } else {
              if (bz == zz) return !0;
              Ez = Qz(bz), bz = bz.parentNode
            }
        }(this.dom, bz) ? (this.view.inputState.lastFocusTime = 0, zz.docView.updateSelection(), !1) : (this.selectionRange.setRange(bz), Ez && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(zz, uz) {
        this.selectionRange.set(zz.node, zz.offset, uz.node, uz.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let zz = 0,
          uz = null;
        for (let bz = this.dom; bz;)
          if (1 == bz.nodeType) !uz && zz < this.scrollTargets.length && this.scrollTargets[zz] == bz ? zz++ : uz || (uz = this.scrollTargets.slice(0, zz)), uz && uz.push(bz), bz = bz.assignedSlot || bz.parentNode;
          else {
            if (11 != bz.nodeType) break;
            bz = bz.host
          } if (zz < this.scrollTargets.length && !uz && (uz = this.scrollTargets.slice(0, zz)), uz) {
          for (let zz of this.scrollTargets) zz.removeEventListener("scroll", this.onScroll);
          for (let zz of this.scrollTargets = uz) zz.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, rn), Nn && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Nn && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(zz, uz) {
        var bz;
        if (!this.delayedAndroidKey) {
          let zz = () => {
            let zz = this.delayedAndroidKey;
            if (zz) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = zz.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && zz.force && nu(this.dom, zz.key, zz.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(zz)
        }
        this.delayedAndroidKey && "Enter" != zz || (this.delayedAndroidKey = {
          key: zz,
          keyCode: uz,
          force: this.lastChange < Date.now() - 50 || !!(null === (bz = this.delayedAndroidKey) || void 0 === bz ? void 0 : bz.force)
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
        let uz = -1,
          bz = -1,
          Ez = !1;
        for (let nz of zz) {
          let zz = this.readMutation(nz);
          zz && (zz.typeOver && (Ez = !0), -1 == uz ? ({
            from: uz,
            to: bz
          } = zz) : (uz = Math.min(zz.from, uz), bz = Math.max(zz.to, bz)))
        }
        return {
          from: uz,
          to: bz,
          typeOver: Ez
        }
      }
      readChange() {
        let {
          from: zz,
          to: uz,
          typeOver: bz
        } = this.processRecords(), Ez = this.selectionChanged && Sz(this.dom, this.selectionRange);
        if (zz < 0 && !Ez) return null;
        zz > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let nz = new bE(this.view, zz, uz, bz);
        return this.view.docView.domChanged = {
          newSel: nz.newSel ? nz.newSel.main : null
        }, nz
      }
      flush() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        zz && this.readSelectionRange();
        let uz = this.readChange();
        if (!uz) return this.view.requestMeasure(), !1;
        let bz = this.view.state,
          Ez = nE(this.view, uz);
        return this.view.state == bz && (uz.domChanged || uz.newSel && !ME(this.view.state.selection, uz.newSel.main)) && this.view.update([]), Ez
      }
      readMutation(zz) {
        let uz = this.view.docView.tile.nearest(zz.target);
        if (!uz || uz.isWidget()) return null;
        if (uz.markDirty("attributes" == zz.type), "childList" == zz.type) {
          let bz = xn(uz, zz.previousSibling || zz.target.previousSibling, -1),
            Ez = xn(uz, zz.nextSibling || zz.target.nextSibling, 1);
          return {
            from: bz ? uz.posAfter(bz) : uz.posAtStart,
            to: Ez ? uz.posBefore(Ez) : uz.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == zz.type ? {
          from: uz.posAtStart,
          to: uz.posAtEnd,
          typeOver: zz.target.nodeValue == zz.oldValue
        } : null
      }
      setWindow(zz) {
        zz != this.win && (this.removeWindowListeners(this.win), this.win = zz, this.addWindowListeners(this.win))
      }
      addWindowListeners(zz) {
        zz.addEventListener("resize", this.Fs), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : zz.addEventListener("beforeprint", this.onPrint), zz.addEventListener("scroll", this.onScroll), zz.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(zz) {
        zz.removeEventListener("scroll", this.onScroll), zz.removeEventListener("resize", this.Fs), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : zz.removeEventListener("beforeprint", this.onPrint), zz.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(zz) {
        this.editContext && (this.editContext.update(zz), zz.startState.facet(eu) != zz.state.facet(eu) && (zz.view.contentDOM.editContext = zz.state.facet(eu) ? this.editContext.editContext : null))
      }
      destroy() {
        var zz, uz, bz;
        this.stop(), null === (zz = this.intersection) || void 0 === zz || zz.disconnect(), null === (uz = this.gapIntersection) || void 0 === uz || uz.disconnect(), null === (bz = this.resizeScroll) || void 0 === bz || bz.disconnect();
        for (let Ez of this.scrollTargets) Ez.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function xn(zz, uz, bz) {
      for (; uz;) {
        let Ez = db.get(uz);
        if (Ez && Ez.parent == zz) return Ez;
        let nz = uz.parentNode;
        uz = nz != zz.dom ? nz : bz > 0 ? uz.nextSibling : uz.previousSibling
      }
      return null
    }

    function Jn(zz, uz) {
      let bz = uz.startContainer,
        Ez = uz.startOffset,
        nz = uz.endContainer,
        iz = uz.endOffset,
        lz = zz.docView.domAtPos(zz.state.selection.main.anchor, 1);
      return Dz(lz.node, lz.offset, nz, iz) && ([bz, Ez, nz, iz] = [nz, iz, bz, Ez]), {
        anchorNode: bz,
        anchorOffset: Ez,
        focusNode: nz,
        focusOffset: iz
      }
    }
    class An {
      constructor(zz) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(zz.state);
        let uz = this.editContext = new window.EditContext({
          text: zz.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, zz.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(zz.state.selection.main.head)
        });
        this.handlers.textupdate = bz => {
          let nz = zz.state.selection.main,
            {
              anchor: iz,
              head: lz
            } = nz,
            Mz = this.toEditorPos(bz.updateRangeStart),
            tz = this.toEditorPos(bz.updateRangeEnd);
          zz.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: bz.updateRangeStart,
            editorBase: Mz,
            drifted: !1
          });
          let Hz = tz - Mz > bz.text.length;
          Mz == this.from && iz < this.from ? Mz = iz : tz == this.to && iz > this.to && (tz = iz);
          let Oz = lE(zz.state.sliceDoc(Mz, tz), bz.text, (Hz ? nz.from : nz.to) - Mz, Hz ? "end" : null);
          if (!Oz) {
            let uz = Ez.l.single(this.toEditorPos(bz.selectionStart), this.toEditorPos(bz.selectionEnd));
            return void(ME(uz, nz) || zz.dispatch({
              selection: uz,
              userEvent: "select"
            }))
          }
          let pz = {
            from: Oz.from + Mz,
            to: Oz.toA + Mz,
            insert: Ez.I.of(bz.text.slice(Oz.from, Oz.toB).split("\n"))
          };
          if ((Nz.mac || Nz.android) && pz.from == lz - 1 && /^\. ?$/.test(bz.text) && "off" == zz.contentDOM.getAttribute("autocorrect") && (pz = {
              from: Mz,
              to: tz,
              insert: Ez.I.of([bz.text.replace(".", " ")])
            }), this.pendingContextChange = pz, !zz.state.readOnly) {
            let uz = this.to - this.from + (pz.to - pz.from + pz.insert.length);
            iE(zz, pz, Ez.l.single(this.toEditorPos(bz.selectionStart, uz), this.toEditorPos(bz.selectionEnd, uz)))
          }
          this.pendingContextChange && (this.revertPending(zz.state), this.setSelection(zz.state)), pz.from < pz.to && !pz.insert.length && zz.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(uz.text.slice(Math.max(0, bz.updateRangeStart - 1), Math.min(uz.text.length, bz.updateRangeStart + 1))) && this.handlers.compositionend(bz)
        }, this.handlers.characterboundsupdate = bz => {
          let Ez = [],
            nz = null;
          for (let uz = this.toEditorPos(bz.rangeStart), iz = this.toEditorPos(bz.rangeEnd); uz < iz; uz++) {
            let bz = zz.coordsForChar(uz);
            nz = bz && new DOMRect(bz.left, bz.top, bz.right - bz.left, bz.bottom - bz.top) || nz || new DOMRect, Ez.push(nz)
          }
          uz.updateCharacterBounds(bz.rangeStart, Ez)
        }, this.handlers.textformatupdate = uz => {
          let bz = [];
          for (let zz of uz.getTextFormats()) {
            let uz = zz.underlineStyle,
              Ez = zz.underlineThickness;
            if (!/none/i.test(uz) && !/none/i.test(Ez)) {
              let nz = this.toEditorPos(zz.rangeStart),
                iz = this.toEditorPos(zz.rangeEnd);
              if (nz < iz) {
                let zz = `text-decoration: underline ${/^[a-z]/.test(uz)?uz+" ":"Dashed"==uz?"dashed ":"Squiggle"==uz?"wavy ":""}${/thin/i.test(Ez)?1:2}px`;
                bz.push(Gz.mark({
                  attributes: {
                    style: zz
                  }
                }).range(nz, iz))
              }
            }
          }
          zz.dispatch({
            effects: Qu.of(Gz.set(bz))
          })
        }, this.handlers.compositionstart = () => {
          zz.inputState.composing < 0 && (zz.inputState.composing = 0, zz.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (zz.inputState.composing = -1, zz.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: uz
            } = this.composing;
            this.composing = null, uz && this.reset(zz.state)
          }
        };
        for (let bz in this.handlers) uz.addEventListener(bz, this.handlers[bz]);
        this.measureReq = {
          read: zz => {
            this.editContext.updateControlBounds(zz.contentDOM.getBoundingClientRect());
            let uz = cz(zz.root);
            uz && uz.rangeCount && this.editContext.updateSelectionBounds(uz.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(zz) {
        let uz = 0,
          bz = !1,
          Ez = this.pendingContextChange;
        return zz.changes.iterChanges(((nz, iz, lz, Mz, tz) => {
          if (bz) return;
          let Hz = tz.length - (iz - nz);
          if (Ez && iz >= Ez.to) {
            if (Ez.from == nz && Ez.to == iz && Ez.insert.eq(tz)) return Ez = this.pendingContextChange = null, uz += Hz, void(this.to += Hz);
            Ez = null, this.revertPending(zz.state)
          }
          if (nz += uz, (iz += uz) <= this.from) this.from += Hz, this.to += Hz;
          else if (nz < this.to) {
            if (nz < this.from || iz > this.to || this.to - this.from + tz.length > 3e4) return void(bz = !0);
            this.editContext.updateText(this.toContextPos(nz), this.toContextPos(iz), tz.toString()), this.to += Hz
          }
          uz += Hz
        })), Ez && !bz && this.revertPending(zz.state), !bz
      }
      update(zz) {
        let uz = this.pendingContextChange,
          bz = zz.startState.selection.main;
        this.composing && (this.composing.drifted || !zz.changes.touchesRange(bz.from, bz.to) && zz.transactions.some((zz => !zz.isUserEvent("input.type") && zz.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = zz.changes.mapPos(this.composing.editorBase)) : this.applyEdits(zz) && this.rangeIsValid(zz.state) ? (zz.docChanged || zz.selectionSet || uz) && this.setSelection(zz.state) : (this.pendingContextChange = null, this.reset(zz.state)), (zz.geometryChanged || zz.docChanged || zz.selectionSet) && zz.view.requestMeasure(this.measureReq)
      }
      resetRange(zz) {
        let {
          head: uz
        } = zz.selection.main;
        this.from = Math.max(0, uz - 1e4), this.to = Math.min(zz.doc.length, uz + 1e4)
      }
      reset(zz) {
        this.resetRange(zz), this.editContext.updateText(0, this.editContext.text.length, zz.doc.sliceString(this.from, this.to)), this.setSelection(zz)
      }
      revertPending(zz) {
        let uz = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(uz.from), this.toContextPos(uz.from + uz.insert.length), zz.doc.sliceString(uz.from, uz.to))
      }
      setSelection(zz) {
        let {
          main: uz
        } = zz.selection, bz = this.toContextPos(Math.max(this.from, Math.min(this.to, uz.anchor))), Ez = this.toContextPos(uz.head);
        this.editContext.selectionStart == bz && this.editContext.selectionEnd == Ez || this.editContext.updateSelection(bz, Ez)
      }
      rangeIsValid(zz) {
        let {
          head: uz
        } = zz.selection.main;
        return !(this.from > 0 && uz - this.from < 500 || this.to < zz.doc.length && this.to - uz < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        zz = Math.min(zz, uz);
        let bz = this.composing;
        return bz && bz.drifted ? bz.editorBase + (zz - bz.contextBase) : zz + this.from
      }
      toContextPos(zz) {
        let uz = this.composing;
        return uz && uz.drifted ? uz.contextBase + (zz - uz.editorBase) : zz - this.from
      }
      destroy() {
        for (let zz in this.handlers) this.editContext.removeEventListener(zz, this.handlers[zz])
      }
    }
    class Tn {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get o_() {
        return this.viewState.o_
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
        var uz;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), zz.parent && zz.parent.appendChild(this.dom);
        let {
          dispatch: bz
        } = zz;
        this.dispatchTransactions = zz.dispatchTransactions || bz && (zz => zz.forEach((zz => bz(zz, this)))) || (zz => this.update(zz)), this.dispatch = this.dispatch.bind(this), this._root = zz.root || function(zz) {
          for (; zz;) {
            if (zz && (9 == zz.nodeType || 11 == zz.nodeType && zz.host)) return zz;
            zz = zz.assignedSlot || zz.parentNode
          }
          return null
        }(zz.parent) || document, this.viewState = new En(this, zz.state || Ez.n.create(zz)), zz.scrollTo && zz.scrollTo.is(Du) && (this.viewState.scrollTarget = zz.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Iu).map((zz => new Cu(zz)));
        for (let Ez of this.plugins) Ez.update(this);
        this.observer = new vn(this), this.inputState = new tE(this), this.inputState.ensureHandlers(this.plugins), this.docView = new qb(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (uz = document.fonts) || void 0 === uz ? void 0 : uz.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        let nz = 1 == uz.length && uz[0] instanceof Ez.J ? uz : 1 == uz.length && Array.isArray(uz[0]) ? uz[0] : [this.state.update(...uz)];
        this.dispatchTransactions(nz, this)
      }
      update(zz) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let uz, bz = !1,
          nz = !1,
          iz = this.state;
        for (let Ez of zz) {
          if (Ez.startState != iz) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          iz = Ez.state
        }
        if (this.destroyed) return void(this.viewState.state = iz);
        let lz = this.hasFocus,
          Mz = 0,
          tz = null;
        zz.some((zz => zz.annotation(LE))) ? (this.inputState.notifiedFocused = lz, Mz = 1) : lz != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = lz, tz = PE(iz, lz), tz || (Mz = 1));
        let Hz = this.observer.delayedAndroidKey,
          Oz = null;
        if (Hz ? (this.observer.clearDelayedAndroidKey(), Oz = this.observer.readChange(), (Oz && !this.state.doc.eq(iz.doc) || !this.state.selection.eq(iz.selection)) && (Oz = null)) : this.observer.clear(), iz.facet(Ez.n.phrases) != this.state.facet(Ez.n.phrases)) return this.setState(iz);
        uz = Ob.create(this, iz, zz), uz.flags |= Mz;
        let pz = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let uz of zz) {
            if (pz && (pz = pz.map(uz.changes)), uz.scrollIntoView) {
              let {
                main: zz
              } = uz.state.selection, {
                x: bz,
                y: nz
              } = this.state.facet(Tn.cursorScrollMargin);
              pz = new yu(zz.empty ? zz : Ez.l.cursor(zz.head, zz.head > zz.anchor ? -1 : 1), "nearest", "nearest", nz, bz)
            }
            for (let zz of uz.effects) zz.is(Du) && (pz = zz.value.clip(this.state))
          }
          this.viewState.update(uz, pz), this.bidiCache = Gn.update(this.bidiCache, uz.changes), uz.empty || (this.updatePlugins(uz), this.inputState.update(uz)), bz = this.docView.update(uz), this.state.facet(tb) != this.styleModules && this.mountStyles(), nz = this.updateAttrs(), this.showAnnouncements(zz), this.docView.updateSelection(bz, zz.some((zz => zz.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (uz.startState.facet(Fn) != uz.state.facet(Fn) && (this.viewState.mustMeasureContent = !0), (bz || nz || pz || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), bz && this.docViewUpdate(), !uz.empty)
          for (let Ez of this.state.facet(Vu)) try {
            Ez(uz)
          } catch (dz) {
            Wu(this.state, dz, "update listener")
          }(tz || Oz) && Promise.resolve().then((() => {
            tz && this.state == tz.startState && this.dispatch(tz), Oz && !nE(this, Oz) && Hz.force && nu(this.contentDOM, Hz.key, Hz.keyCode)
          }))
      }
      setState(zz) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = zz);
        this.updateState = 2;
        let uz = this.hasFocus;
        try {
          for (let zz of this.plugins) zz.destroy(this);
          this.viewState = new En(this, zz), this.plugins = zz.facet(Iu).map((zz => new Cu(zz))), this.pluginMap.clear();
          for (let zz of this.plugins) zz.update(this);
          this.docView.destroy(), this.docView = new qb(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        uz && this.focus(), this.requestMeasure()
      }
      updatePlugins(zz) {
        let uz = zz.startState.facet(Iu),
          bz = zz.state.facet(Iu);
        if (uz != bz) {
          let Ez = [];
          for (let nz of bz) {
            let bz = uz.indexOf(nz);
            if (bz < 0) Ez.push(new Cu(nz));
            else {
              let uz = this.plugins[bz];
              uz.mustUpdate = zz, Ez.push(uz)
            }
          }
          for (let uz of this.plugins) uz.mustUpdate != zz && uz.destroy(this);
          this.plugins = Ez, this.pluginMap.clear()
        } else
          for (let Ez of this.plugins) Ez.mustUpdate = zz;
        for (let Ez = 0; Ez < this.plugins.length; Ez++) this.plugins[Ez].update(this);
        uz != bz && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let uz of this.plugins) {
          let bz = uz.value;
          if (bz && bz.docViewUpdate) try {
            bz.docViewUpdate(this)
          } catch (zz) {
            Wu(this.state, zz, "doc view update listener")
          }
        }
      }
      measure() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, zz && this.observer.forceFlush();
        let uz = null,
          bz = this.viewState.scrollParent,
          Ez = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: nz,
            scrollAnchorHeight: iz
          } = this.viewState;
        Math.abs(Ez - this.viewState.scrollOffset) > 1 && (iz = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let zz = 0;; zz++) {
            if (iz < 0)
              if (iu(bz || this.win)) nz = -1, iz = this.viewState.heightMap.height;
              else {
                let zz = this.viewState.scrollAnchorAt(Ez);
                nz = zz.from, iz = zz.top
              } this.updateState = 1;
            let Mz = this.viewState.measure();
            if (!Mz && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (zz > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let tz = [];
            4 & Mz || ([this.measureRequests, tz] = [tz, this.measureRequests]);
            let Hz = tz.map((zz => {
                try {
                  return zz.read(this)
                } catch (uz) {
                  return Wu(this.state, uz), Pn
                }
              })),
              Oz = Ob.create(this, this.state, []),
              pz = !1;
            Oz.flags |= Mz, uz ? uz.flags |= Mz : uz = Oz, this.updateState = 2, Oz.empty || (this.updatePlugins(Oz), this.inputState.update(Oz), this.updateAttrs(), pz = this.docView.update(Oz), pz && this.docViewUpdate());
            for (let zz = 0; zz < tz.length; zz++)
              if (Hz[zz] != Pn) try {
                let uz = tz[zz];
                uz.write && uz.write(Hz[zz], this)
              } catch (lz) {
                Wu(this.state, lz)
              }
            if (pz && this.docView.updateSelection(!0), !Oz.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, iz = -1;
                  continue
                } {
                  let zz = ((nz < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(nz).top) - iz) / this.scaleY;
                  if ((zz > 1 || zz < -1) && (bz == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Ez += zz, bz ? bz.scrollTop += zz : this.win.scrollBy(0, zz), iz = -1;
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
        if (uz && !uz.empty)
          for (let Mz of this.state.facet(Vu)) Mz(uz)
      }
      get themeClasses() {
        return Rn + " " + (this.state.facet(Zn) ? wn : Kn) + " " + this.state.facet(Fn)
      }
      updateAttrs() {
        let zz = an(this, Yu, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          uz = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(eu) ? "true" : "false",
            class: "cm-content",
            style: `${Nz.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (uz["aria-readonly"] = "true"), an(this, ku, uz);
        let bz = this.observer.ignore((() => {
          let bz = Az(this.contentDOM, this.contentAttrs, uz),
            Ez = Az(this.dom, this.editorAttrs, zz);
          return bz || Ez
        }));
        return this.editorAttrs = zz, this.contentAttrs = uz, bz
      }
      showAnnouncements(zz) {
        let uz = !0;
        for (let bz of zz)
          for (let zz of bz.effects)
            if (zz.is(Tn.announce)) {
              uz && (this.announceDOM.textContent = ""), uz = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = zz.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(tb);
        let zz = this.state.facet(Tn.cspNonce);
        nz.e.mount(this.root, this.styleModules.concat(sn).reverse(), zz ? {
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
            for (let uz = 0; uz < this.measureRequests.length; uz++)
              if (this.measureRequests[uz].key === zz.key) return void(this.measureRequests[uz] = zz);
          this.measureRequests.push(zz)
        }
      }
      plugin(zz) {
        let uz = this.pluginMap.get(zz);
        return (void 0 === uz || uz && uz.plugin != zz) && this.pluginMap.set(zz, uz = this.plugins.find((uz => uz.plugin == zz)) || null), uz && uz.update(this).value
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
      moveByChar(zz, uz, bz) {
        return eb(this, zz, Db(this, zz, uz, bz))
      }
      moveByGroup(zz, uz) {
        return eb(this, zz, Db(this, zz, uz, (uz => function(zz, uz, bz) {
          let nz = zz.state.charCategorizer(uz),
            iz = nz(bz);
          return zz => {
            let uz = nz(zz);
            return iz == Ez.h.Space && (iz = uz), iz == uz
          }
        }(this, zz.head, uz))))
      }
      visualLineSide(zz, uz) {
        let bz = this.bidiSpans(zz),
          nz = this.textDirectionAt(zz.from),
          iz = bz[uz ? bz.length - 1 : 0];
        return Ez.l.cursor(iz.side(uz, nz) + zz.from, iz.forward(!uz, nz) ? 1 : -1)
      }
      moveToLineBoundary(zz, uz) {
        return function(zz, uz, bz, nz) {
          let iz = yb(zz, uz.head, uz.assoc || -1),
            lz = nz && iz.type == Pz.Text && (zz.lineWrapping || iz.widgetLineBreaks) ? zz.coordsAtPos(uz.assoc < 0 && uz.head > iz.from ? uz.head - 1 : uz.head) : null;
          if (lz) {
            let uz = zz.dom.getBoundingClientRect(),
              nz = zz.textDirectionAt(iz.from),
              Mz = zz.posAtCoords({
                x: bz == (nz == Hu.LTR) ? uz.right - 1 : uz.left + 1,
                y: (lz.top + lz.bottom) / 2
              });
            if (null != Mz) return Ez.l.cursor(Mz, bz ? -1 : 1)
          }
          return Ez.l.cursor(bz ? iz.to : iz.from, bz ? -1 : 1)
        }(this, zz, uz, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(zz, uz, bz) {
        return eb(this, zz, function(zz, uz, bz, nz) {
          let iz = uz.head,
            lz = bz ? 1 : -1;
          if (iz == (bz ? zz.state.doc.length : 0)) return Ez.l.cursor(iz, uz.assoc);
          let Mz, tz = uz.goalColumn,
            Hz = zz.contentDOM.getBoundingClientRect(),
            Oz = zz.coordsAtPos(iz, uz.assoc || ((uz.empty ? bz : uz.head == uz.from) ? 1 : -1)),
            pz = zz.documentTop;
          if (Oz) null == tz && (tz = Oz.left - Hz.left), Mz = lz < 0 ? Oz.top : Oz.bottom;
          else {
            let uz = zz.viewState.lineBlockAt(iz);
            null == tz && (tz = Math.min(Hz.right - Hz.left, zz.defaultCharacterWidth * (iz - uz.from))), Mz = (lz < 0 ? uz.top : uz.bottom) + pz
          }
          let dz = Hz.left + tz,
            Fz = zz.viewState.heightOracle.textHeight >> 1,
            Zz = null !== nz && void 0 !== nz ? nz : Fz;
          for (let Rz = 0;; Rz += Fz) {
            let uz = Mz + (Zz + Rz) * lz,
              nz = Ib(zz, {
                x: dz,
                y: uz
              }, !1, lz);
            if (bz ? uz > Hz.bottom : uz < Hz.top) return Ez.l.cursor(nz.pos, nz.assoc);
            let iz = zz.coordsAtPos(nz.pos, nz.assoc),
              Oz = iz ? (iz.top + iz.bottom) / 2 : 0;
            if (!iz || (bz ? Oz > Mz : Oz < Mz)) return Ez.l.cursor(nz.pos, nz.assoc, void 0, tz)
          }
        }(this, zz, uz, bz))
      }
      domAtPos(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(zz, uz)
      }
      posAtDOM(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(zz, uz)
      }
      posAtCoords(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let bz = Ib(this, zz, uz);
        return bz && bz.pos
      }
      posAndSideAtCoords(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Ib(this, zz, uz)
      }
      coordsAtPos(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let bz = this.docView.coordsAt(zz, uz);
        if (!bz || bz.left == bz.right) return bz;
        let Ez = this.state.doc.lineAt(zz),
          nz = this.bidiSpans(Ez);
        return Iz(bz, nz[fu.find(nz, zz - Ez.from, -1, uz)].dir == Hu.LTR == uz > 0)
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
        return !this.state.facet(cu) || zz < this.viewport.from || zz > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(zz))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(zz) {
        if (zz.length > Ln) return xu(zz.length);
        let uz, bz = this.textDirectionAt(zz.from);
        for (let nz of this.bidiCache)
          if (nz.from == zz.from && nz.dir == bz && (nz.fresh || su(nz.isolates, uz = ib(this, zz)))) return nz.order;
        uz || (uz = ib(this, zz));
        let Ez = vu(zz.text, bz, uz);
        return this.bidiCache.push(new Gn(zz.from, zz.to, bz, uz, !0, Ez)), Ez
      }
      get hasFocus() {
        var zz;
        return (this.dom.ownerDocument.hasFocus() || Nz.safari && (null === (zz = this.inputState) || void 0 === zz ? void 0 : zz.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          bu(this.contentDOM), this.docView.updateSelection()
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var bz, nz, iz, lz;
        return Du.of(new yu("number" == typeof zz ? Ez.l.cursor(zz) : zz, null !== (bz = uz.y) && void 0 !== bz ? bz : "nearest", null !== (nz = uz.x) && void 0 !== nz ? nz : "nearest", null !== (iz = uz.yMargin) && void 0 !== iz ? iz : 5, null !== (lz = uz.xMargin) && void 0 !== lz ? lz : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: zz,
          scrollLeft: uz
        } = this.scrollDOM, bz = this.viewState.scrollAnchorAt(zz);
        return Du.of(new yu(Ez.l.cursor(bz.from), "start", "start", bz.top - zz, uz, !0))
      }
      setTabFocusMode(zz) {
        null == zz ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof zz ? this.inputState.tabFocusMode = zz ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + zz)
      }
      static domEventHandlers(zz) {
        return Bu.define((() => ({})), {
          eventHandlers: zz
        })
      }
      static domEventObservers(zz) {
        return Bu.define((() => ({})), {
          eventObservers: zz
        })
      }
      static theme(zz, uz) {
        let bz = nz.e.newName(),
          Ez = [Fn.of(bz), tb.of(fn(`.${bz}`, zz))];
        return uz && uz.dark && Ez.push(Zn.of(!0)), Ez
      }
      static baseTheme(zz) {
        return Ez.t.lowest(tb.of(fn("." + Rn, zz, Xn)))
      }
      static findFromDOM(zz) {
        var uz;
        let bz = zz.querySelector(".cm-content"),
          Ez = bz && db.get(bz) || db.get(zz);
        return (null === (uz = null === Ez || void 0 === Ez ? void 0 : Ez.root) || void 0 === uz ? void 0 : uz.view) || null
      }
    }
    Tn.styleModule = tb, Tn.inputHandler = mu, Tn.clipboardInputFilter = hu, Tn.clipboardOutputFilter = Uu, Tn.scrollHandler = Su, Tn.focusChangeEffect = qu, Tn.perLineTextDirection = cu, Tn.exceptionSink = au, Tn.updateListener = Vu, Tn.editable = eu, Tn.mouseSelectionStyle = Gu, Tn.dragMovesSelection = Pu, Tn.clickAddsSelectionRange = Lu, Tn.cE = zb, Tn.blockWrappers = ub, Tn.outerDecorations = bb, Tn.atomicRanges = Eb, Tn.bidiIsolatedRanges = nb, Tn.cursorScrollMargin = Ez.r.define({
      combine: zz => {
        let uz = 5,
          bz = 5;
        for (let Ez of zz) "number" == typeof Ez ? uz = bz = Ez : ({
          x: uz,
          y: bz
        } = Ez);
        return {
          x: uz,
          y: bz
        }
      }
    }), Tn.scrollMargins = lb, Tn.darkTheme = Zn, Tn.cspNonce = Ez.r.define({
      combine: zz => zz.length ? zz[0] : ""
    }), Tn.contentAttributes = ku, Tn.editorAttributes = Yu, Tn.lineWrapping = Tn.contentAttributes.of({
      class: "cm-lineWrapping"
    }), Tn.announce = Ez.B.define();
    const Ln = 4096,
      Pn = {};
    class Gn {
      constructor(zz, uz, bz, Ez, nz, iz) {
        this.from = zz, this.to = uz, this.dir = bz, this.isolates = Ez, this.fresh = nz, this.order = iz
      }
      static update(zz, uz) {
        if (uz.empty && !zz.some((zz => zz.fresh))) return zz;
        let bz = [],
          Ez = zz.length ? zz[zz.length - 1].dir : Hu.LTR;
        for (let nz = Math.max(0, zz.length - 10); nz < zz.length; nz++) {
          let iz = zz[nz];
          iz.dir != Ez || uz.touchesRange(iz.from, iz.to) || bz.push(new Gn(uz.mapPos(iz.from, 1), uz.mapPos(iz.to, -1), iz.dir, iz.isolates, !1, iz.order))
        }
        return bz
      }
    }

    function an(zz, uz, bz) {
      for (let Ez = zz.state.facet(uz), nz = Ez.length - 1; nz >= 0; nz--) {
        let uz = Ez[nz],
          iz = "function" == typeof uz ? uz(zz) : uz;
        iz && vz(iz, bz)
      }
      return bz
    }
    const Vn = Nz.mac ? "mac" : Nz.windows ? "win" : Nz.linux ? "linux" : "key";

    function mn(zz, uz, bz) {
      return uz.altKey && (zz = "Alt-" + zz), uz.ctrlKey && (zz = "Ctrl-" + zz), uz.metaKey && (zz = "Meta-" + zz), !1 !== bz && uz.shiftKey && (zz = "Shift-" + zz), zz
    }
    const qn = Ez.t.default(Tn.domEventHandlers({
        keydown: (zz, uz) => Qn(cn(uz.state), zz, uz, "editor")
      })),
      hn = Ez.r.define({
        enables: qn
      }),
      Un = new WeakMap;

    function cn(zz) {
      let uz = zz.facet(hn),
        bz = Un.get(uz);
      return bz || Un.set(uz, bz = function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vn,
          bz = Object.create(null),
          Ez = Object.create(null),
          nz = (zz, uz) => {
            let bz = Ez[zz];
            if (null == bz) Ez[zz] = uz;
            else if (bz != uz) throw new Error("Key binding " + zz + " is used both as a regular binding and as a multi-stroke prefix")
          },
          iz = (zz, Ez, iz, lz, Mz) => {
            var tz, Hz;
            let Oz = bz[zz] || (bz[zz] = Object.create(null)),
              pz = Ez.split(/ (?!$)/).map((zz => function(zz, uz) {
                const bz = zz.split(/-(?!$)/);
                let Ez, nz, iz, lz, Mz = bz[bz.length - 1];
                "Space" == Mz && (Mz = " ");
                for (let tz = 0; tz < bz.length - 1; ++tz) {
                  const zz = bz[tz];
                  if (/^(cmd|meta|m)$/i.test(zz)) lz = !0;
                  else if (/^a(lt)?$/i.test(zz)) Ez = !0;
                  else if (/^(c|ctrl|control)$/i.test(zz)) nz = !0;
                  else if (/^s(hift)?$/i.test(zz)) iz = !0;
                  else {
                    if (!/^mod$/i.test(zz)) throw new Error("Unrecognized modifier name: " + zz);
                    "mac" == uz ? lz = !0 : nz = !0
                  }
                }
                return Ez && (Mz = "Alt-" + Mz), nz && (Mz = "Ctrl-" + Mz), lz && (Mz = "Meta-" + Mz), iz && (Mz = "Shift-" + Mz), Mz
              }(zz, uz)));
            for (let uz = 1; uz < pz.length; uz++) {
              let bz = pz.slice(0, uz).join(" ");
              nz(bz, !0), Oz[bz] || (Oz[bz] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [uz => {
                  let Ez = Sn = {
                    view: uz,
                    prefix: bz,
                    scope: zz
                  };
                  return setTimeout((() => {
                    Sn == Ez && (Sn = null)
                  }), yn), !0
                }]
              })
            }
            let dz = pz.join(" ");
            nz(dz, !1);
            let Fz = Oz[dz] || (Oz[dz] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Hz = null === (tz = Oz._any) || void 0 === tz ? void 0 : tz.run) || void 0 === Hz ? void 0 : Hz.slice()) || []
            });
            iz && Fz.run.push(iz), lz && (Fz.preventDefault = !0), Mz && (Fz.stopPropagation = !0)
          };
        for (let lz of zz) {
          let zz = lz.scope ? lz.scope.split(" ") : ["editor"];
          if (lz.any)
            for (let uz of zz) {
              let zz = bz[uz] || (bz[uz] = Object.create(null));
              zz._any || (zz._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Ez
              } = lz;
              for (let uz in zz) zz[uz].run.push((zz => Ez(zz, Dn)))
            }
          let Ez = lz[uz] || lz.key;
          if (Ez)
            for (let uz of zz) iz(uz, Ez, lz.run, lz.preventDefault, lz.stopPropagation), lz.shift && iz(uz, "Shift-" + Ez, lz.shift, lz.preventDefault, lz.stopPropagation)
        }
        return bz
      }(uz.reduce(((zz, uz) => zz.concat(uz)), []))), bz
    }

    function gn(zz, uz, bz) {
      return Qn(cn(zz.state), uz, zz, bz)
    }
    let Sn = null;
    const yn = 4e3;
    let Dn = null;

    function Qn(zz, uz, bz, nz) {
      Dn = uz;
      let Hz = function(zz) {
          var uz = !(Mz && zz.metaKey && zz.shiftKey && !zz.ctrlKey && !zz.altKey || tz && zz.shiftKey && zz.key && 1 == zz.key.length || "Unidentified" == zz.key) && zz.key || (zz.shiftKey ? lz : iz)[zz.keyCode] || zz.key || "Unidentified";
          return "Esc" == uz && (uz = "Escape"), "Del" == uz && (uz = "Delete"), "Left" == uz && (uz = "ArrowLeft"), "Up" == uz && (uz = "ArrowUp"), "Right" == uz && (uz = "ArrowRight"), "Down" == uz && (uz = "ArrowDown"), uz
        }(uz),
        Oz = (0, Ez.K)(Hz, 0),
        pz = (0, Ez.N)(Oz) == Hz.length && " " != Hz,
        dz = "",
        Fz = !1,
        Zz = !1,
        Rz = !1;
      Sn && Sn.view == bz && Sn.scope == nz && (dz = Sn.prefix + " ", FE.indexOf(uz.keyCode) < 0 && (Zz = !0, Sn = null));
      let Kz, wz, Xz = new Set,
        fz = zz => {
          if (zz) {
            for (let uz of zz.run)
              if (!Xz.has(uz) && (Xz.add(uz), uz(bz))) return zz.stopPropagation && (Rz = !0), !0;
            zz.preventDefault && (zz.stopPropagation && (Rz = !0), Zz = !0)
          }
          return !1
        },
        sz = zz[nz];
      return sz && (fz(sz[dz + mn(Hz, uz, !pz)]) ? Fz = !0 : !pz || !(uz.altKey || uz.metaKey || uz.ctrlKey) || Nz.windows && uz.ctrlKey && uz.altKey || Nz.mac && uz.altKey && !uz.ctrlKey && !uz.metaKey || !(Kz = iz[uz.keyCode]) || Kz == Hz ? pz && uz.shiftKey && fz(sz[dz + mn(Hz, uz, !0)]) && (Fz = !0) : (fz(sz[dz + mn(Kz, uz, !0)]) || uz.shiftKey && (wz = lz[uz.keyCode]) != Hz && wz != Kz && fz(sz[dz + mn(wz, uz, !1)])) && (Fz = !0), !Fz && fz(sz._any) && (Fz = !0)), Zz && (Fz = !0), Fz && Rz && uz.stopPropagation(), Dn = null, Fz
    }
    class Wn {
      constructor(zz, uz, bz, Ez, nz) {
        this.className = zz, this.left = uz, this.top = bz, this.width = Ez, this.height = nz
      }
      draw() {
        let zz = document.createElement("div");
        return zz.className = this.className, this.adjust(zz), zz
      }
      update(zz, uz) {
        return uz.className == this.className && (this.adjust(zz), !0)
      }
      adjust(zz) {
        zz.style.left = this.left + "px", zz.style.top = this.top + "px", null != this.width && (zz.style.width = this.width + "px"), zz.style.height = this.height + "px"
      }
      eq(zz) {
        return this.left == zz.left && this.top == zz.top && this.width == zz.width && this.height == zz.height && this.className == zz.className
      }
      static forRange(zz, uz, bz) {
        if (bz.empty) {
          let Ez = zz.coordsAtPos(bz.head, bz.assoc || 1);
          if (!Ez) return [];
          let nz = en(zz);
          return [new Wn(uz, Ez.left - nz.left, Ez.top - nz.top, null, Ez.bottom - Ez.top)]
        }
        return function(zz, uz, bz) {
          if (bz.to <= zz.viewport.from || bz.from >= zz.viewport.to) return [];
          let Ez = Math.max(bz.from, zz.viewport.from),
            nz = Math.min(bz.to, zz.viewport.to),
            iz = zz.textDirection == Hu.LTR,
            lz = zz.contentDOM,
            Mz = lz.getBoundingClientRect(),
            tz = en(zz),
            Hz = lz.querySelector(".cm-line"),
            Oz = Hz && window.getComputedStyle(Hz),
            pz = Mz.left + (Oz ? parseInt(Oz.paddingLeft) + Math.min(0, parseInt(Oz.textIndent)) : 0),
            dz = Mz.right - (Oz ? parseInt(Oz.paddingRight) : 0),
            Fz = yb(zz, Ez, 1),
            Zz = yb(zz, nz, -1),
            Rz = Fz.type == Pz.Text ? Fz : null,
            Kz = Zz.type == Pz.Text ? Zz : null;
          Rz && (zz.lineWrapping || Fz.widgetLineBreaks) && (Rz = jn(zz, Ez, 1, Rz));
          Kz && (zz.lineWrapping || Zz.widgetLineBreaks) && (Kz = jn(zz, nz, -1, Kz));
          if (Rz && Kz && Rz.from == Kz.from && Rz.to == Kz.to) return Xz(fz(bz.from, bz.to, Rz));
          {
            let uz = Rz ? fz(bz.from, null, Rz) : sz(Fz, !1),
              Ez = Kz ? fz(null, bz.to, Kz) : sz(Zz, !0),
              nz = [];
            return (Rz || Fz).to < (Kz || Zz).from - (Rz && Kz ? 1 : 0) || Fz.widgetLineBreaks > 1 && uz.bottom + zz.defaultLineHeight / 2 < Ez.top ? nz.push(wz(pz, uz.bottom, dz, Ez.top)) : uz.bottom < Ez.top && zz.elementAtHeight((uz.bottom + Ez.top) / 2).type == Pz.Text && (uz.bottom = Ez.top = (uz.bottom + Ez.top) / 2), Xz(uz).concat(nz).concat(Xz(Ez))
          }

          function wz(zz, bz, Ez, nz) {
            return new Wn(uz, zz - tz.left, bz - tz.top, Math.max(0, Ez - zz), nz - bz)
          }

          function Xz(zz) {
            let {
              top: uz,
              bottom: bz,
              horizontal: Ez
            } = zz, nz = [];
            for (let iz = 0; iz < Ez.length; iz += 2) nz.push(wz(Ez[iz], uz, Ez[iz + 1], bz));
            return nz
          }

          function fz(uz, bz, Ez) {
            let nz = 1e9,
              lz = -1e9,
              Mz = [];

            function tz(uz, bz, tz, Hz, Oz) {
              let Fz = zz.coordsAtPos(uz, uz == Ez.to ? -2 : 2),
                Zz = zz.coordsAtPos(tz, tz == Ez.from ? 2 : -2);
              Fz && Zz && (nz = Math.min(Fz.top, Zz.top, nz), lz = Math.max(Fz.bottom, Zz.bottom, lz), Oz == Hu.LTR ? Mz.push(iz && bz ? pz : Fz.left, iz && Hz ? dz : Zz.right) : Mz.push(!iz && Hz ? pz : Zz.left, !iz && bz ? dz : Fz.right))
            }
            let Hz = null !== uz && void 0 !== uz ? uz : Ez.from,
              Oz = null !== bz && void 0 !== bz ? bz : Ez.to;
            for (let iz of zz.o_)
              if (iz.to > Hz && iz.from < Oz)
                for (let Ez = Math.max(iz.from, Hz), nz = Math.min(iz.to, Oz);;) {
                  let iz = zz.state.doc.lineAt(Ez);
                  for (let lz of zz.bidiSpans(iz)) {
                    let zz = lz.from + iz.from,
                      Mz = lz.to + iz.from;
                    if (zz >= nz) break;
                    Mz > Ez && tz(Math.max(zz, Ez), null == uz && zz <= Hz, Math.min(Mz, nz), null == bz && Mz >= Oz, lz.dir)
                  }
                  if (Ez = iz.to + 1, Ez >= nz) break
                }
            return 0 == Mz.length && tz(Hz, null == uz, Oz, null == bz, zz.textDirection), {
              top: nz,
              bottom: lz,
              horizontal: Mz
            }
          }

          function sz(zz, uz) {
            let bz = Mz.top + (uz ? zz.top : zz.bottom);
            return {
              top: bz,
              bottom: bz,
              horizontal: []
            }
          }
        }(zz, uz, bz)
      }
    }

    function en(zz) {
      let uz = zz.scrollDOM.getBoundingClientRect();
      return {
        left: (zz.textDirection == Hu.LTR ? uz.left : uz.right - zz.scrollDOM.clientWidth * zz.scaleX) - zz.scrollDOM.scrollLeft * zz.scaleX,
        top: uz.top - zz.scrollDOM.scrollTop * zz.scaleY
      }
    }

    function jn(zz, uz, bz, Ez) {
      let nz = zz.coordsAtPos(uz, 2 * bz);
      if (!nz) return Ez;
      let iz = zz.dom.getBoundingClientRect(),
        lz = (nz.top + nz.bottom) / 2,
        Mz = zz.posAtCoords({
          x: iz.left + 1,
          y: lz
        }),
        tz = zz.posAtCoords({
          x: iz.right - 1,
          y: lz
        });
      return null == Mz || null == tz ? Ez : {
        from: Math.max(Ez.from, Math.min(Mz, tz)),
        to: Math.min(Ez.to, Math.max(Mz, tz))
      }
    }
    class In {
      constructor(zz, uz) {
        this.view = zz, this.layer = uz, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = zz.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), uz.above && this.dom.classList.add("cm-layer-above"), uz.class && this.dom.classList.add(uz.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(zz.state), zz.requestMeasure(this.measureReq), uz.mount && uz.mount(this.dom, zz)
      }
      update(zz) {
        zz.startState.facet(Bn) != zz.state.facet(Bn) && this.setOrder(zz.state), (this.layer.update(zz, this.dom) || zz.geometryChanged) && (this.scale(), zz.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(zz) {
        !1 !== this.layer.updateOnDocViewUpdate && zz.requestMeasure(this.measureReq)
      }
      setOrder(zz) {
        let uz = 0,
          bz = zz.facet(Bn);
        for (; uz < bz.length && bz[uz] != this.layer;) uz++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - uz)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: zz,
          scaleY: uz
        } = this.view;
        zz == this.scaleX && uz == this.scaleY || (this.scaleX = zz, this.scaleY = uz, this.dom.style.transform = `scale(${1/zz}, ${1/uz})`)
      }
      draw(zz) {
        if (zz.length != this.drawn.length || zz.some(((zz, uz) => {
            return bz = zz, Ez = this.drawn[uz], !(bz.constructor == Ez.constructor && bz.eq(Ez));
            var bz, Ez
          }))) {
          let uz = this.dom.firstChild,
            bz = 0;
          for (let Ez of zz) Ez.update && uz && Ez.constructor && this.drawn[bz].constructor && Ez.update(uz, this.drawn[bz]) ? (uz = uz.nextSibling, bz++) : this.dom.insertBefore(Ez.draw(), uz);
          for (; uz;) {
            let zz = uz.nextSibling;
            uz.remove(), uz = zz
          }
          this.drawn = zz, Nz.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Bn = Ez.r.define();

    function Cn(zz) {
      return [Bu.define((uz => new In(uz, zz))), Bn.of(zz)]
    }
    const Yn = Ez.r.define({
      combine: zz => (0, Ez.Q)(zz, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (zz, uz) => Math.min(zz, uz),
        drawRangeCursor: (zz, uz) => zz || uz
      })
    });

    function kn() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Yn.of(zz), ui, Ei, ni, gu.of(!0)]
    }

    function zi(zz) {
      return zz.startState.facet(Yn) != zz.state.facet(Yn)
    }
    const ui = Cn({
      above: !0,
      markers(zz) {
        let {
          state: uz
        } = zz, bz = uz.facet(Yn), nz = [];
        for (let iz of uz.selection.al) {
          let lz = iz == uz.selection.main;
          if (iz.empty || bz.drawRangeCursor && !(lz && Nz.ios && bz.iosSelectionHandles)) {
            let uz = lz ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              bz = iz.empty ? iz : Ez.l.cursor(iz.head, iz.assoc);
            for (let Ez of Wn.forRange(zz, uz, bz)) nz.push(Ez)
          }
        }
        return nz
      },
      update(zz, uz) {
        zz.transactions.some((zz => zz.selection)) && (uz.style.animationName = "cm-blink" == uz.style.animationName ? "cm-blink2" : "cm-blink");
        let bz = zi(zz);
        return bz && bi(zz.state, uz), zz.docChanged || zz.selectionSet || bz
      },
      mount(zz, uz) {
        bi(uz.state, zz)
      },
      class: "cm-cursorLayer"
    });

    function bi(zz, uz) {
      uz.style.animationDuration = zz.facet(Yn).cursorBlinkRate + "ms"
    }
    const Ei = Cn({
        above: !1,
        markers(zz) {
          let uz = [],
            {
              main: bz,
              al: nz
            } = zz.state.selection;
          for (let Ez of nz)
            if (!Ez.empty)
              for (let bz of Wn.forRange(zz, "cm-selectionBackground", Ez)) uz.push(bz);
          if (Nz.ios && !bz.empty && zz.state.facet(Yn).iosSelectionHandles) {
            for (let nz of Wn.forRange(zz, "cm-selectionHandle cm-selectionHandle-start", Ez.l.cursor(bz.from, 1))) uz.push(nz);
            for (let nz of Wn.forRange(zz, "cm-selectionHandle cm-selectionHandle-end", Ez.l.cursor(bz.to, 1))) uz.push(nz)
          }
          return uz
        },
        update: (zz, uz) => zz.docChanged || zz.selectionSet || zz.viewportChanged || zi(zz),
        class: "cm-selectionLayer"
      }),
      ni = Ez.t.highest(Tn.theme({
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
      ii = Ez.B.define({
        map: (zz, uz) => null == zz ? null : uz.mapPos(zz)
      }),
      li = Ez.E.define({
        create: () => null,
        update: (zz, uz) => (null != zz && (zz = uz.changes.mapPos(zz)), uz.effects.reduce(((zz, uz) => uz.is(ii) ? uz.value : zz), zz))
      }),
      Mi = Bu.fromClass(class {
        constructor(zz) {
          this.view = zz, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(zz) {
          var uz;
          let bz = zz.state.field(li);
          null == bz ? null != this.cursor && (null === (uz = this.cursor) || void 0 === uz || uz.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (zz.startState.field(li) != bz || zz.docChanged || zz.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: zz
          } = this, uz = zz.state.field(li), bz = null != uz && zz.coordsAtPos(uz);
          if (!bz) return null;
          let Ez = zz.scrollDOM.getBoundingClientRect();
          return {
            left: bz.left - Ez.left + zz.scrollDOM.scrollLeft * zz.scaleX,
            top: bz.top - Ez.top + zz.scrollDOM.scrollTop * zz.scaleY,
            height: bz.bottom - bz.top
          }
        }
        drawCursor(zz) {
          if (this.cursor) {
            let {
              scaleX: uz,
              scaleY: bz
            } = this.view;
            zz ? (this.cursor.style.left = zz.left / uz + "px", this.cursor.style.top = zz.top / bz + "px", this.cursor.style.height = zz.height / bz + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(zz) {
          this.view.state.field(li) != zz && this.view.dispatch({
            effects: ii.of(zz)
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

    function ti() {
      return [li, Mi]
    }

    function Hi(zz, uz, bz, Ez, nz) {
      uz.lastIndex = 0;
      for (let iz, lz = zz.iterRange(bz, Ez), Mz = bz; !lz.next().done; Mz += lz.value.length)
        if (!lz.lineBreak)
          for (; iz = uz.exec(lz.value);) nz(Mz + iz.index, iz)
    }
    class Oi {
      constructor(zz) {
        const {
          regexp: uz,
          decoration: bz,
          decorate: Ez,
          boundary: nz,
          maxLength: iz = 1e3
        } = zz;
        if (!uz.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = uz, Ez) this.addMatch = (zz, uz, bz, nz) => Ez(nz, bz, bz + zz[0].length, zz, uz);
        else if ("function" == typeof bz) this.addMatch = (zz, uz, Ez, nz) => {
          let iz = bz(zz, uz, Ez);
          iz && nz(Ez, Ez + zz[0].length, iz)
        };
        else {
          if (!bz) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (zz, uz, Ez, nz) => nz(Ez, Ez + zz[0].length, bz)
        }
        this.boundary = nz, this.maxLength = iz
      }
      createDeco(zz) {
        let uz = new Ez.u,
          bz = uz.add.bind(uz);
        for (let {
            from: Ez,
            to: nz
          }
          of
          function(zz, uz) {
            let bz = zz.o_;
            if (1 == bz.length && bz[0].from == zz.viewport.from && bz[0].to == zz.viewport.to) return bz;
            let Ez = [];
            for (let {
                from: nz,
                to: iz
              }
              of bz) nz = Math.max(zz.state.doc.lineAt(nz).from, nz - uz), iz = Math.min(zz.state.doc.lineAt(iz).to, iz + uz), Ez.length && Ez[Ez.length - 1].to >= nz ? Ez[Ez.length - 1].to = iz : Ez.push({
              from: nz,
              to: iz
            });
            return Ez
          }(zz, this.maxLength)) Hi(zz.state.doc, this.regexp, Ez, nz, ((uz, Ez) => this.addMatch(Ez, zz, uz, bz)));
        return uz.finish()
      }
      updateDeco(zz, uz) {
        let bz = 1e9,
          Ez = -1;
        return zz.docChanged && zz.changes.iterChanges(((uz, nz, iz, lz) => {
          lz >= zz.view.viewport.from && iz <= zz.view.viewport.to && (bz = Math.min(iz, bz), Ez = Math.max(lz, Ez))
        })), zz.viewportMoved || Ez - bz > 1e3 ? this.createDeco(zz.view) : Ez > -1 ? this.updateRange(zz.view, uz.map(zz.changes), bz, Ez) : uz
      }
      updateRange(zz, uz, bz, Ez) {
        for (let nz of zz.o_) {
          let iz = Math.max(nz.from, bz),
            lz = Math.min(nz.to, Ez);
          if (lz >= iz) {
            let bz = zz.state.doc.lineAt(iz),
              Ez = bz.to < lz ? zz.state.doc.lineAt(lz) : bz,
              Mz = Math.max(nz.from, bz.from),
              tz = Math.min(nz.to, Ez.to);
            if (this.boundary) {
              for (; iz > bz.from; iz--)
                if (this.boundary.test(bz.text[iz - 1 - bz.from])) {
                  Mz = iz;
                  break
                } for (; lz < Ez.to; lz++)
                if (this.boundary.test(Ez.text[lz - Ez.from])) {
                  tz = lz;
                  break
                }
            }
            let Hz, Oz = [],
              pz = (zz, uz, bz) => Oz.push(bz.range(zz, uz));
            if (bz == Ez)
              for (this.regexp.lastIndex = Mz - bz.from;
                (Hz = this.regexp.exec(bz.text)) && Hz.index < tz - bz.from;) this.addMatch(Hz, zz, Hz.index + bz.from, pz);
            else Hi(zz.state.doc, this.regexp, Mz, tz, ((uz, bz) => this.addMatch(bz, zz, uz, pz)));
            uz = uz.update({
              filterFrom: Mz,
              filterTo: tz,
              filter: (zz, uz) => zz < Mz || uz > tz,
              add: Oz
            })
          }
        }
        return uz
      }
    }
    const di = null != /x/.unicode ? "gu" : "g",
      Fi = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", di),
      Zi = {
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
    let Ri = null;
    const Ki = Ez.r.define({
      combine(zz) {
        let uz = (0, Ez.Q)(zz, {
          render: null,
          specialChars: Fi,
          addSpecialChars: null
        });
        return (uz.replaceTabs = ! function() {
          var zz;
          if (null == Ri && "undefined" != typeof document && document.body) {
            let uz = document.body.style;
            Ri = null != (null !== (zz = uz.tabSize) && void 0 !== zz ? zz : uz.MozTabSize)
          }
          return Ri || !1
        }()) && (uz.specialChars = new RegExp("\t|" + uz.specialChars.source, di)), uz.addSpecialChars && (uz.specialChars = new RegExp(uz.specialChars.source + "|" + uz.addSpecialChars.source, di)), uz
      }
    });

    function wi() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Ki.of(zz), Xi || (Xi = Bu.fromClass(class {
        constructor(zz) {
          this.view = zz, this.cE = Gz.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(zz.state.facet(Ki)), this.cE = this.decorator.createDeco(zz)
        }
        makeDecorator(zz) {
          return new Oi({
            regexp: zz.specialChars,
            decoration: (uz, bz, nz) => {
              let {
                doc: iz
              } = bz.state, lz = (0, Ez.K)(uz[0], 0);
              if (9 == lz) {
                let zz = iz.lineAt(nz),
                  uz = bz.state.tabSize,
                  lz = (0, Ez.R)(zz.text, uz, nz - zz.from);
                return Gz.replace({
                  widget: new si((uz - lz % uz) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[lz] || (this.decorationCache[lz] = Gz.replace({
                widget: new fi(zz, lz)
              }))
            },
            boundary: zz.replaceTabs ? void 0 : /[^]/
          })
        }
        update(zz) {
          let uz = zz.state.facet(Ki);
          zz.startState.facet(Ki) != uz ? (this.decorator = this.makeDecorator(uz), this.cE = this.decorator.createDeco(zz.view)) : this.cE = this.decorator.updateDeco(zz, this.cE)
        }
      }, {
        cE: zz => zz.cE
      }))]
    }
    let Xi = null;
    class fi extends Lz {
      constructor(zz, uz) {
        super(), this.options = zz, this.code = uz
      }
      eq(zz) {
        return zz.code == this.code
      }
      toDOM(zz) {
        let uz = function(zz) {
            return zz >= 32 ? "\u2022" : 10 == zz ? "\u2424" : String.fromCharCode(9216 + zz)
          }(this.code),
          bz = zz.state.phrase("Control character") + " " + (Zi[this.code] || "0x" + this.code.toString(16)),
          Ez = this.options.render && this.options.render(this.code, bz, uz);
        if (Ez) return Ez;
        let nz = document.createElement("span");
        return nz.textContent = uz, nz.title = bz, nz.setAttribute("aria-label", bz), nz.className = "cm-specialChar", nz
      }
      ignoreEvent() {
        return !1
      }
    }
    class si extends Lz {
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

    function ri() {
      return Ni
    }
    const oi = Gz.line({
        class: "cm-activeLine"
      }),
      Ni = Bu.fromClass(class {
        constructor(zz) {
          this.cE = this.getDeco(zz)
        }
        update(zz) {
          (zz.docChanged || zz.selectionSet) && (this.cE = this.getDeco(zz.view))
        }
        getDeco(zz) {
          let uz = -1,
            bz = [];
          for (let Ez of zz.state.selection.al) {
            let nz = zz.lineBlockAt(Ez.head);
            nz.from > uz && (bz.push(oi.range(nz.from)), uz = nz.from)
          }
          return Gz.set(bz)
        }
      }, {
        cE: zz => zz.cE
      });
    class vi extends Lz {
      constructor(zz) {
        super(), this.content = zz
      }
      toDOM(zz) {
        let uz = document.createElement("span");
        return uz.className = "cm-placeholder", uz.style.pointerEvents = "none", uz.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(zz) : this.content.cloneNode(!0)), uz.setAttribute("aria-hidden", "true"), uz
      }
      coordsAt(zz) {
        let uz = zz.firstChild ? yz(zz.firstChild) : [];
        if (!uz.length) return null;
        let bz = window.getComputedStyle(zz.parentNode),
          Ez = Iz(uz[0], "rtl" != bz.direction),
          nz = parseInt(bz.lineHeight);
        return Ez.bottom - Ez.top > 1.5 * nz ? {
          left: Ez.left,
          right: Ez.right,
          top: Ez.top,
          bottom: Ez.top + nz
        } : Ez
      }
      ignoreEvent() {
        return !1
      }
    }

    function xi(zz) {
      let uz = Bu.fromClass(class {
        constructor(uz) {
          this.view = uz, this.placeholder = zz ? Gz.set([Gz.widget({
            widget: new vi(zz),
            side: 1
          }).range(0)]) : Gz.none
        }
        get cE() {
          return this.view.state.doc.length ? Gz.none : this.placeholder
        }
      }, {
        cE: zz => zz.cE
      });
      return "string" == typeof zz ? [uz, Tn.contentAttributes.of({
        "aria-placeholder": zz
      })] : uz
    }
    const Ji = 2e3;

    function Ai(zz, uz) {
      let bz = zz.posAtCoords({
          x: uz.clientX,
          y: uz.clientY
        }, !1),
        nz = zz.state.doc.lineAt(bz),
        iz = bz - nz.from,
        lz = iz > Ji ? -1 : iz == nz.length ? function(zz, uz) {
          let bz = zz.coordsAtPos(zz.viewport.from);
          return bz ? Math.round(Math.abs((bz.left - uz) / zz.defaultCharacterWidth)) : -1
        }(zz, uz.clientX) : (0, Ez.R)(nz.text, zz.state.tabSize, bz - nz.from);
      return {
        line: nz.number,
        col: lz,
        off: iz
      }
    }

    function Ti(zz, uz) {
      let bz = Ai(zz, uz),
        nz = zz.state.selection;
      return bz ? {
        update(zz) {
          if (zz.docChanged) {
            let uz = zz.changes.mapPos(zz.startState.doc.line(bz.line).from),
              Ez = zz.state.doc.lineAt(uz);
            bz = {
              line: Ez.number,
              col: bz.col,
              off: Math.min(bz.off, Ez.length)
            }, nz = nz.map(zz.changes)
          }
        },
        get(uz, iz, lz) {
          let Mz = Ai(zz, uz);
          if (!Mz) return nz;
          let tz = function(zz, uz, bz) {
            let nz = Math.min(uz.line, bz.line),
              iz = Math.max(uz.line, bz.line),
              lz = [];
            if (uz.off > Ji || bz.off > Ji || uz.col < 0 || bz.col < 0) {
              let Mz = Math.min(uz.off, bz.off),
                tz = Math.max(uz.off, bz.off);
              for (let uz = nz; uz <= iz; uz++) {
                let bz = zz.doc.line(uz);
                bz.length <= tz && lz.push(Ez.l.range(bz.from + Mz, bz.to + tz))
              }
            } else {
              let Mz = Math.min(uz.col, bz.col),
                tz = Math.max(uz.col, bz.col);
              for (let uz = nz; uz <= iz; uz++) {
                let bz = zz.doc.line(uz),
                  nz = (0, Ez.V)(bz.text, Mz, zz.tabSize, !0);
                if (nz < 0) lz.push(Ez.l.cursor(bz.to));
                else {
                  let uz = (0, Ez.V)(bz.text, tz, zz.tabSize);
                  lz.push(Ez.l.range(bz.from + nz, bz.from + uz))
                }
              }
            }
            return lz
          }(zz.state, bz, Mz);
          return tz.length ? lz ? Ez.l.create(tz.concat(nz.al)) : Ez.l.create(tz) : nz
        }
      } : null
    }

    function Li(zz) {
      let uz = (null === zz || void 0 === zz ? void 0 : zz.eventFilter) || (zz => zz.altKey && 0 == zz.button);
      return Tn.mouseSelectionStyle.of(((zz, bz) => uz(bz) ? Ti(zz, bz) : null))
    }
    const Pi = {
        Alt: [18, zz => !!zz.altKey],
        Control: [17, zz => !!zz.ctrlKey],
        Shift: [16, zz => !!zz.shiftKey],
        Meta: [91, zz => !!zz.metaKey]
      },
      Gi = {
        style: "cursor: crosshair"
      };

    function ai() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [uz, bz] = Pi[zz.key || "Alt"],
        Ez = Bu.fromClass(class {
          constructor(zz) {
            this.view = zz, this.isDown = !1
          }
          set(zz) {
            this.isDown != zz && (this.isDown = zz, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(zz) {
              this.set(zz.keyCode == uz || bz(zz))
            },
            keyup(zz) {
              zz.keyCode != uz && bz(zz) || this.set(!1)
            },
            mousemove(zz) {
              this.set(bz(zz))
            }
          }
        });
      return [Ez, Tn.contentAttributes.of((zz => {
        var uz;
        return (null === (uz = zz.plugin(Ez)) || void 0 === uz ? void 0 : uz.isDown) ? Gi : null
      }))]
    }
    const Vi = "-10000px";
    class mi {
      constructor(zz, uz, bz, Ez) {
        this.facet = uz, this.createTooltipView = bz, this.removeTooltipView = Ez, this.input = zz.state.facet(uz), this.tooltips = this.input.filter((zz => zz));
        let nz = null;
        this.tooltipViews = this.tooltips.map((zz => nz = bz(zz, nz)))
      }
      update(zz, uz) {
        var bz;
        let Ez = zz.state.facet(this.facet),
          nz = Ez.filter((zz => zz));
        if (Ez === this.input) {
          for (let uz of this.tooltipViews) uz.update && uz.update(zz);
          return !1
        }
        let iz = [],
          lz = uz ? [] : null;
        for (let Mz = 0; Mz < nz.length; Mz++) {
          let bz = nz[Mz],
            Ez = -1;
          if (bz) {
            for (let zz = 0; zz < this.tooltips.length; zz++) {
              let uz = this.tooltips[zz];
              uz && uz.create == bz.create && (Ez = zz)
            }
            if (Ez < 0) iz[Mz] = this.createTooltipView(bz, Mz ? iz[Mz - 1] : null), lz && (lz[Mz] = !!bz.above);
            else {
              let bz = iz[Mz] = this.tooltipViews[Ez];
              lz && (lz[Mz] = uz[Ez]), bz.update && bz.update(zz)
            }
          }
        }
        for (let Mz of this.tooltipViews) iz.indexOf(Mz) < 0 && (this.removeTooltipView(Mz), null === (bz = Mz.destroy) || void 0 === bz || bz.call(Mz));
        return uz && (lz.forEach(((zz, bz) => uz[bz] = zz)), uz.length = lz.length), this.input = Ez, this.tooltips = nz, this.tooltipViews = iz, !0
      }
    }

    function qi(zz) {
      let uz = zz.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: uz.clientHeight,
        right: uz.clientWidth
      }
    }
    const Ui = Ez.r.define({
        combine: zz => {
          var uz, bz, Ez;
          return {
            position: Nz.ios ? "absolute" : (null === (uz = zz.find((zz => zz.position))) || void 0 === uz ? void 0 : uz.position) || "fixed",
            parent: (null === (bz = zz.find((zz => zz.parent))) || void 0 === bz ? void 0 : bz.parent) || null,
            tooltipSpace: (null === (Ez = zz.find((zz => zz.tooltipSpace))) || void 0 === Ez ? void 0 : Ez.tooltipSpace) || qi
          }
        }
      }),
      ci = new WeakMap,
      gi = Bu.fromClass(class {
        constructor(zz) {
          this.view = zz, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let uz = zz.state.facet(Ui);
          this.position = uz.position, this.parent = uz.parent, this.classes = zz.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new mi(zz, Qi, ((zz, uz) => this.createTooltip(zz, uz)), (zz => {
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
          let uz = this.manager.update(zz, this.above);
          uz && this.observeIntersection();
          let bz = uz || zz.geometryChanged,
            Ez = zz.state.facet(Ui);
          if (Ez.position != this.position && !this.madeAbsolute) {
            this.position = Ez.position;
            for (let zz of this.manager.tooltipViews) zz.dom.style.position = this.position;
            bz = !0
          }
          if (Ez.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Ez.parent, this.createContainer();
            for (let zz of this.manager.tooltipViews) this.container.appendChild(zz.dom);
            bz = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          bz && this.maybeMeasure()
        }
        createTooltip(zz, uz) {
          let bz = zz.create(this.view),
            Ez = uz ? uz.dom : null;
          if (bz.dom.classList.add("cm-tooltip"), zz.arrow && !bz.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let zz = document.createElement("div");
            zz.className = "cm-tooltip-arrow", bz.dom.appendChild(zz)
          }
          return bz.dom.style.position = this.position, bz.dom.style.top = Vi, bz.dom.style.left = "0px", this.container.insertBefore(bz.dom, Ez), bz.mount && bz.mount(this.view), this.resizeObserver && this.resizeObserver.observe(bz.dom), bz
        }
        destroy() {
          var zz, uz, bz;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Ez of this.manager.tooltipViews) Ez.dom.remove(), null === (zz = Ez.destroy) || void 0 === zz || zz.call(Ez);
          this.parent && this.container.remove(), null === (uz = this.resizeObserver) || void 0 === uz || uz.disconnect(), null === (bz = this.intersectionObserver) || void 0 === bz || bz.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let zz = 1,
            uz = 1,
            bz = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: zz
            } = this.manager.tooltipViews[0];
            if (Nz.safari) {
              let uz = zz.getBoundingClientRect();
              bz = Math.abs(uz.top + 1e4) > 1 || Math.abs(uz.left) > 1
            } else bz = !!zz.offsetParent && zz.offsetParent != this.container.ownerDocument.body
          }
          if (bz || "absolute" == this.position)
            if (this.parent) {
              let bz = this.parent.getBoundingClientRect();
              bz.width && bz.height && (zz = bz.width / this.parent.offsetWidth, uz = bz.height / this.parent.offsetHeight)
            } else({
              scaleX: zz,
              scaleY: uz
            } = this.view.viewState);
          let Ez = this.view.scrollDOM.getBoundingClientRect(),
            nz = Mb(this.view);
          return {
            visible: {
              left: Ez.left + nz.left,
              top: Ez.top + nz.top,
              right: Ez.right - nz.right,
              bottom: Ez.bottom - nz.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((zz, uz) => {
              let bz = this.manager.tooltipViews[uz];
              return bz.getCoords ? bz.getCoords(zz.pos) : this.view.coordsAtPos(zz.pos)
            })),
            size: this.manager.tooltipViews.map((zz => {
              let {
                dom: uz
              } = zz;
              return uz.getBoundingClientRect()
            })),
            space: this.view.state.facet(Ui).tooltipSpace(this.view),
            scaleX: zz,
            scaleY: uz,
            makeAbsolute: bz
          }
        }
        writeMeasure(zz) {
          var uz;
          if (zz.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let zz of this.manager.tooltipViews) zz.dom.style.position = "absolute"
          }
          let {
            visible: bz,
            space: Ez,
            scaleX: nz,
            scaleY: iz
          } = zz, lz = [];
          for (let Mz = 0; Mz < this.manager.tooltips.length; Mz++) {
            let tz = this.manager.tooltips[Mz],
              Hz = this.manager.tooltipViews[Mz],
              {
                dom: Oz
              } = Hz,
              pz = zz.pos[Mz],
              dz = zz.size[Mz];
            if (!pz || !1 !== tz.clip && (pz.bottom <= Math.max(bz.top, Ez.top) || pz.top >= Math.min(bz.bottom, Ez.bottom) || pz.right < Math.max(bz.left, Ez.left) - .1 || pz.left > Math.min(bz.right, Ez.right) + .1)) {
              Oz.style.top = Vi;
              continue
            }
            let Fz = tz.arrow ? Hz.dom.querySelector(".cm-tooltip-arrow") : null,
              Zz = Fz ? 7 : 0,
              Rz = dz.right - dz.left,
              Kz = null !== (uz = ci.get(Hz)) && void 0 !== uz ? uz : dz.bottom - dz.top,
              wz = Hz.offset || Di,
              Xz = this.view.textDirection == Hu.LTR,
              fz = dz.width > Ez.right - Ez.left ? Xz ? Ez.left : Ez.right - dz.width : Xz ? Math.max(Ez.left, Math.min(pz.left - (Fz ? 14 : 0) + wz.x, Ez.right - Rz)) : Math.min(Math.max(Ez.left, pz.left - Rz + (Fz ? 14 : 0) - wz.x), Ez.right - Rz),
              sz = this.above[Mz];
            !tz.strictSide && (sz ? pz.top - Kz - Zz - wz.y < Ez.top : pz.bottom + Kz + Zz + wz.y > Ez.bottom) && sz == Ez.bottom - pz.bottom > pz.top - Ez.top && (sz = this.above[Mz] = !sz);
            let rz = (sz ? pz.top - Ez.top : Ez.bottom - pz.bottom) - Zz;
            if (rz < Kz && !1 !== Hz.resize) {
              if (rz < this.view.defaultLineHeight) {
                Oz.style.top = Vi;
                continue
              }
              ci.set(Hz, Kz), Oz.style.height = (Kz = rz) / iz + "px"
            } else Oz.style.height && (Oz.style.height = "");
            let oz = sz ? pz.top - Kz - Zz - wz.y : pz.bottom + Zz + wz.y,
              Nz = fz + Rz;
            if (!0 !== Hz.overlap)
              for (let zz of lz) zz.left < Nz && zz.right > fz && zz.top < oz + Kz && zz.bottom > oz && (oz = sz ? zz.top - Kz - 2 - Zz : zz.bottom + Zz + 2);
            if ("absolute" == this.position ? (Oz.style.top = (oz - zz.parent.top) / iz + "px", Si(Oz, (fz - zz.parent.left) / nz)) : (Oz.style.top = oz / iz + "px", Si(Oz, fz / nz)), Fz) {
              let zz = pz.left + (Xz ? wz.x : -wz.x) - (fz + 14 - 7);
              Fz.style.left = zz / nz + "px"
            }!0 !== Hz.overlap && lz.push({
              left: fz,
              top: oz,
              right: Nz,
              bottom: oz + Kz
            }), Oz.classList.toggle("cm-tooltip-above", sz), Oz.classList.toggle("cm-tooltip-below", !sz), Hz.positioned && Hz.positioned(zz.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let zz of this.manager.tooltipViews) zz.dom.style.top = Vi
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function Si(zz, uz) {
      let bz = parseInt(zz.style.left, 10);
      (isNaN(bz) || Math.abs(uz - bz) > 1) && (zz.style.left = uz + "px")
    }
    const yi = Tn.baseTheme({
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
      Di = {
        x: 0,
        y: 0
      },
      Qi = Ez.r.define({
        enables: [gi, yi]
      }),
      Wi = Ez.r.define({
        combine: zz => zz.reduce(((zz, uz) => zz.concat(uz)), [])
      });
    class ei {
      static create(zz) {
        return new ei(zz)
      }
      constructor(zz) {
        this.view = zz, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new mi(zz, Wi, ((zz, uz) => this.createHostedView(zz, uz)), (zz => zz.dom.remove()))
      }
      createHostedView(zz, uz) {
        let bz = zz.create(this.view);
        return bz.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(bz.dom, uz ? uz.dom.nextSibling : this.dom.firstChild), this.mounted && bz.mount && bz.mount(this.view), bz
      }
      mount(zz) {
        for (let uz of this.manager.tooltipViews) uz.mount && uz.mount(zz);
        this.mounted = !0
      }
      positioned(zz) {
        for (let uz of this.manager.tooltipViews) uz.positioned && uz.positioned(zz)
      }
      update(zz) {
        this.manager.update(zz)
      }
      destroy() {
        var zz;
        for (let uz of this.manager.tooltipViews) null === (zz = uz.destroy) || void 0 === zz || zz.call(uz)
      }
      passProp(zz) {
        let uz;
        for (let bz of this.manager.tooltipViews) {
          let Ez = bz[zz];
          if (void 0 !== Ez)
            if (void 0 === uz) uz = Ez;
            else if (uz !== Ez) return
        }
        return uz
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
    const ji = Qi.compute([Wi], (zz => {
      let uz = zz.facet(Wi);
      return 0 === uz.length ? null : {
        pos: Math.min(...uz.map((zz => zz.pos))),
        end: Math.max(...uz.map((zz => {
          var uz;
          return null !== (uz = zz.end) && void 0 !== uz ? uz : zz.pos
        }))),
        create: ei.create,
        above: uz[0].above,
        arrow: uz.some((zz => zz.arrow))
      }
    }));
    class Ii {
      constructor(zz, uz, bz, Ez, nz) {
        this.view = zz, this.source = uz, this.field = bz, this.setHover = Ez, this.hoverTime = nz, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: uz
        } = this, bz = zz.docView.tile.nearest(uz.target);
        if (!bz) return;
        let Ez, nz = 1;
        if (bz.isWidget()) Ez = bz.posAtStart;
        else {
          if (Ez = zz.posAtCoords(uz), null == Ez) return;
          let bz = zz.coordsAtPos(Ez);
          if (!bz || uz.y < bz.top || uz.y > bz.bottom || uz.x < bz.left - zz.defaultCharacterWidth || uz.x > bz.right + zz.defaultCharacterWidth) return;
          let iz = zz.bidiSpans(zz.state.doc.lineAt(Ez)).find((zz => zz.from <= Ez && zz.to >= Ez)),
            lz = iz && iz.dir == Hu.RTL ? -1 : 1;
          nz = uz.x < bz.left ? -lz : lz
        }
        let iz = this.source(zz, Ez, nz);
        if (null === iz || void 0 === iz ? void 0 : iz.then) {
          let uz = this.pending = {
            pos: Ez
          };
          iz.then((bz => {
            this.pending == uz && (this.pending = null, !bz || Array.isArray(bz) && !bz.length || zz.dispatch({
              effects: this.setHover.of(Array.isArray(bz) ? bz : [bz])
            }))
          }), (uz => Wu(zz.state, uz, "hover tooltip")))
        } else !iz || Array.isArray(iz) && !iz.length || zz.dispatch({
          effects: this.setHover.of(Array.isArray(iz) ? iz : [iz])
        })
      }
      get tooltip() {
        let zz = this.view.plugin(gi),
          uz = zz ? zz.manager.tooltips.findIndex((zz => zz.create == ei.create)) : -1;
        return uz > -1 ? zz.manager.tooltipViews[uz] : null
      }
      mousemove(zz) {
        var uz, bz;
        this.lastMove = {
          x: zz.clientX,
          y: zz.clientY,
          target: zz.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Ez,
          tooltip: nz
        } = this;
        if (Ez.length && nz && ! function(zz, uz) {
            let bz, {
              left: Ez,
              right: nz,
              top: iz,
              bottom: lz
            } = zz.getBoundingClientRect();
            if (bz = zz.querySelector(".cm-tooltip-arrow")) {
              let zz = bz.getBoundingClientRect();
              iz = Math.min(zz.top, iz), lz = Math.max(zz.bottom, lz)
            }
            return uz.clientX >= Ez - Bi && uz.clientX <= nz + Bi && uz.clientY >= iz - Bi && uz.clientY <= lz + Bi
          }(nz.dom, zz) || this.pending) {
          let {
            pos: nz
          } = Ez[0] || this.pending, iz = null !== (bz = null === (uz = Ez[0]) || void 0 === uz ? void 0 : uz.end) && void 0 !== bz ? bz : nz;
          (nz == iz ? this.view.posAtCoords(this.lastMove) == nz : function(zz, uz, bz, Ez, nz) {
            let iz = zz.scrollDOM.getBoundingClientRect(),
              lz = zz.documentTop + zz.documentPadding.top + zz.contentHeight;
            if (iz.left > Ez || iz.right < Ez || iz.top > nz || Math.min(iz.bottom, lz) < nz) return !1;
            let Mz = zz.posAtCoords({
              x: Ez,
              y: nz
            }, !1);
            return Mz >= uz && Mz <= bz
          }(this.view, nz, iz, zz.clientX, zz.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(zz) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: uz
        } = this;
        if (uz.length) {
          let {
            tooltip: uz
          } = this;
          uz && uz.dom.contains(zz.relatedTarget) ? this.watchTooltipLeave(uz.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(zz) {
        let uz = bz => {
          zz.removeEventListener("mouseleave", uz), this.active.length && !this.view.dom.contains(bz.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        zz.addEventListener("mouseleave", uz)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const Bi = 4;

    function Ci(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        bz = Ez.B.define(),
        nz = Ez.E.define({
          create: () => [],
          update(zz, nz) {
            if (zz.length && (uz.hideOnChange && (nz.docChanged || nz.selection) ? zz = [] : uz.hideOn && (zz = zz.filter((zz => !uz.hideOn(nz, zz)))), nz.docChanged)) {
              let uz = [];
              for (let bz of zz) {
                let zz = nz.changes.mapPos(bz.pos, -1, Ez.s.TrackDel);
                if (null != zz) {
                  let Ez = Object.assign(Object.create(null), bz);
                  Ez.pos = zz, null != Ez.end && (Ez.end = nz.changes.mapPos(Ez.end)), uz.push(Ez)
                }
              }
              zz = uz
            }
            for (let uz of nz.effects) uz.is(bz) && (zz = uz.value), uz.is(ki) && (zz = []);
            return zz
          },
          provide: zz => Wi.from(zz)
        });
      return {
        active: nz,
        extension: [nz, Bu.define((Ez => new Ii(Ez, zz, nz, bz, uz.hoverTime || 300))), ji]
      }
    }

    function Yi(zz, uz) {
      let bz = zz.plugin(gi);
      if (!bz) return null;
      let Ez = bz.manager.tooltips.indexOf(uz);
      return Ez < 0 ? null : bz.manager.tooltipViews[Ez]
    }
    const ki = Ez.B.define();
    const zl = Ez.r.define({
      combine(zz) {
        let uz, bz;
        for (let Ez of zz) uz = uz || Ez.topContainer, bz = bz || Ez.bottomContainer;
        return {
          topContainer: uz,
          bottomContainer: bz
        }
      }
    });

    function ul(zz, uz) {
      let bz = zz.plugin(bl),
        Ez = bz ? bz.specs.indexOf(uz) : -1;
      return Ez > -1 ? bz.panels[Ez] : null
    }
    const bl = Bu.fromClass(class {
      constructor(zz) {
        this.input = zz.state.facet(il), this.specs = this.input.filter((zz => zz)), this.panels = this.specs.map((uz => uz(zz)));
        let uz = zz.state.facet(zl);
        this.top = new El(zz, !0, uz.topContainer), this.bottom = new El(zz, !1, uz.bottomContainer), this.top.sync(this.panels.filter((zz => zz.top))), this.bottom.sync(this.panels.filter((zz => !zz.top)));
        for (let bz of this.panels) bz.dom.classList.add("cm-panel"), bz.mount && bz.mount()
      }
      update(zz) {
        let uz = zz.state.facet(zl);
        this.top.container != uz.topContainer && (this.top.sync([]), this.top = new El(zz.view, !0, uz.topContainer)), this.bottom.container != uz.bottomContainer && (this.bottom.sync([]), this.bottom = new El(zz.view, !1, uz.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let bz = zz.state.facet(il);
        if (bz != this.input) {
          let uz = bz.filter((zz => zz)),
            Ez = [],
            nz = [],
            iz = [],
            lz = [];
          for (let bz of uz) {
            let uz, Mz = this.specs.indexOf(bz);
            Mz < 0 ? (uz = bz(zz.view), lz.push(uz)) : (uz = this.panels[Mz], uz.update && uz.update(zz)), Ez.push(uz), (uz.top ? nz : iz).push(uz)
          }
          this.specs = uz, this.panels = Ez, this.top.sync(nz), this.bottom.sync(iz);
          for (let zz of lz) zz.dom.classList.add("cm-panel"), zz.mount && zz.mount()
        } else
          for (let Ez of this.panels) Ez.update && Ez.update(zz)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: zz => Tn.scrollMargins.of((uz => {
        let bz = uz.plugin(zz);
        return bz && {
          top: bz.top.scrollMargin(),
          bottom: bz.bottom.scrollMargin()
        }
      }))
    });
    class El {
      constructor(zz, uz, bz) {
        this.view = zz, this.top = uz, this.container = bz, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(zz) {
        for (let uz of this.panels) uz.destroy && zz.indexOf(uz) < 0 && uz.destroy();
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
        for (let uz of this.panels)
          if (uz.dom.parentNode == this.dom) {
            for (; zz != uz.dom;) zz = nl(zz);
            zz = zz.nextSibling
          } else this.dom.insertBefore(uz.dom, zz);
        for (; zz;) zz = nl(zz)
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

    function nl(zz) {
      let uz = zz.nextSibling;
      return zz.remove(), uz
    }
    const il = Ez.r.define({
      enables: bl
    });

    function ll(zz, uz) {
      let bz, nz = new Promise((zz => bz = zz)),
        iz = zz => function(zz, uz, bz) {
          let Ez = uz.content ? uz.content(zz, (() => lz(null))) : null;
          if (!Ez) {
            if (Ez = (0, pz.b)("form"), uz.input) {
              let zz = (0, pz.b)("input", uz.input);
              /^(text|password|number|email|tel|url)$/.test(zz.type) && zz.classList.add("cm-textfield"), zz.name || (zz.name = "input"), Ez.appendChild((0, pz.b)("label", (uz.label || "") + ": ", zz))
            } else Ez.appendChild(document.createTextNode(uz.label || ""));
            Ez.appendChild(document.createTextNode(" ")), Ez.appendChild((0, pz.b)("button", {
              class: "cm-button",
              type: "submit"
            }, uz.submitLabel || "OK"))
          }
          let nz = "FORM" == Ez.nodeName ? [Ez] : Ez.querySelectorAll("form");
          for (let Mz = 0; Mz < nz.length; Mz++) {
            let zz = nz[Mz];
            zz.addEventListener("keydown", (uz => {
              27 == uz.keyCode ? (uz.preventDefault(), lz(null)) : 13 == uz.keyCode && (uz.preventDefault(), lz(zz))
            })), zz.addEventListener("submit", (uz => {
              uz.preventDefault(), lz(zz)
            }))
          }
          let iz = (0, pz.b)("div", Ez, (0, pz.b)("button", {
            onclick: () => lz(null),
            "aria-label": zz.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          uz.class && (iz.className = uz.class);

          function lz(uz) {
            iz.contains(iz.ownerDocument.activeElement) && zz.focus(), bz(uz)
          }
          return iz.classList.add("cm-dialog"), {
            dom: iz,
            top: uz.top,
            mount: () => {
              if (uz.focus) {
                let zz;
                zz = "string" == typeof uz.focus ? Ez.querySelector(uz.focus) : Ez.querySelector("input") || Ez.querySelector("button"), zz && "select" in zz ? zz.select() : zz && "focus" in zz && zz.focus()
              }
            }
          }
        }(zz, uz, bz);
      zz.state.field(Ml, !1) ? zz.dispatch({
        effects: tl.of(iz)
      }) : zz.dispatch({
        effects: Ez.B.appendConfig.of(Ml.init((() => [iz])))
      });
      let lz = Hl.of(iz);
      return {
        close: lz,
        result: nz.then((uz => ((zz.win.queueMicrotask || (uz => zz.win.setTimeout(uz, 10)))((() => {
          zz.state.field(Ml).indexOf(iz) > -1 && zz.dispatch({
            effects: lz
          })
        })), uz)))
      }
    }
    const Ml = Ez.E.define({
        create: () => [],
        update(zz, uz) {
          for (let bz of uz.effects) bz.is(tl) ? zz = [bz.value].concat(zz) : bz.is(Hl) && (zz = zz.filter((zz => zz != bz.value)));
          return zz
        },
        provide: zz => il.computeN([zz], (uz => uz.field(zz)))
      }),
      tl = Ez.B.define(),
      Hl = Ez.B.define();
    class Ol extends Ez.z {
      compare(zz) {
        return this == zz || this.constructor == zz.constructor && this.eq(zz)
      }
      eq(zz) {
        return !1
      }
      destroy(zz) {}
    }
    Ol.prototype.elementClass = "", Ol.prototype.toDOM = void 0, Ol.prototype.mapMode = Ez.s.TrackBefore, Ol.prototype.startSide = Ol.prototype.endSide = -1, Ol.prototype.point = !0;
    const pl = Ez.r.define(),
      dl = Ez.r.define(),
      Fl = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Ez.x.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Zl = Ez.r.define();

    function Rl(zz) {
      return [wl(), Zl.of({
        ...Fl,
        ...zz
      })]
    }
    const Kl = Ez.r.define({
      combine: zz => zz.some((zz => zz))
    });

    function wl(zz) {
      let uz = [Xl];
      return zz && !1 === zz.fixed && uz.push(Kl.of(!0)), uz
    }
    const Xl = Bu.fromClass(class {
      constructor(zz) {
        this.view = zz, this.domAfter = null, this.prevViewport = zz.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = zz.state.facet(Zl).map((uz => new ol(zz, uz))), this.fixed = !zz.state.facet(Kl);
        for (let uz of this.gutters) "after" == uz.config.side ? this.getDOMAfter().appendChild(uz.dom) : this.dom.appendChild(uz.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), zz.scrollDOM.insertBefore(this.dom, zz.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(zz) {
        if (this.updateGutters(zz)) {
          let uz = this.prevViewport,
            bz = zz.view.viewport,
            Ez = Math.min(uz.to, bz.to) - Math.max(uz.from, bz.from);
          this.syncGutters(Ez < .8 * (bz.to - bz.from))
        }
        if (zz.geometryChanged) {
          let zz = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = zz, this.domAfter && (this.domAfter.style.minHeight = zz)
        }
        this.view.state.facet(Kl) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = zz.view.viewport
      }
      syncGutters(zz) {
        let uz = this.dom.nextSibling;
        zz && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let bz = Ez.x.iter(this.view.state.facet(pl), this.view.viewport.from),
          nz = [],
          iz = this.gutters.map((zz => new rl(zz, this.view.viewport, -this.view.documentPadding.top)));
        for (let Ez of this.view.viewportLineBlocks)
          if (nz.length && (nz = []), Array.isArray(Ez.type)) {
            let zz = !0;
            for (let uz of Ez.type)
              if (uz.type == Pz.Text && zz) {
                sl(bz, nz, uz.from);
                for (let zz of iz) zz.line(this.view, uz, nz);
                zz = !1
              } else if (uz.widget)
              for (let zz of iz) zz.widget(this.view, uz)
          } else if (Ez.type == Pz.Text) {
          sl(bz, nz, Ez.from);
          for (let zz of iz) zz.line(this.view, Ez, nz)
        } else if (Ez.widget)
          for (let zz of iz) zz.widget(this.view, Ez);
        for (let Ez of iz) Ez.finish();
        zz && (this.view.scrollDOM.insertBefore(this.dom, uz), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(zz) {
        let uz = zz.startState.facet(Zl),
          bz = zz.state.facet(Zl),
          nz = zz.docChanged || zz.heightChanged || zz.viewportChanged || !Ez.x.eq(zz.startState.facet(pl), zz.state.facet(pl), zz.view.viewport.from, zz.view.viewport.to);
        if (uz == bz)
          for (let Ez of this.gutters) Ez.update(zz) && (nz = !0);
        else {
          nz = !0;
          let Ez = [];
          for (let nz of bz) {
            let bz = uz.indexOf(nz);
            bz < 0 ? Ez.push(new ol(this.view, nz)) : (this.gutters[bz].update(zz), Ez.push(this.gutters[bz]))
          }
          for (let zz of this.gutters) zz.dom.remove(), Ez.indexOf(zz) < 0 && zz.destroy();
          for (let zz of Ez) "after" == zz.config.side ? this.getDOMAfter().appendChild(zz.dom) : this.dom.appendChild(zz.dom);
          this.gutters = Ez
        }
        return nz
      }
      destroy() {
        for (let zz of this.gutters) zz.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: zz => Tn.scrollMargins.of((uz => {
        let bz = uz.plugin(zz);
        if (!bz || 0 == bz.gutters.length || !bz.fixed) return null;
        let Ez = bz.dom.offsetWidth * uz.scaleX,
          nz = bz.domAfter ? bz.domAfter.offsetWidth * uz.scaleX : 0;
        return uz.textDirection == Hu.LTR ? {
          left: Ez,
          right: nz
        } : {
          right: Ez,
          left: nz
        }
      }))
    });

    function fl(zz) {
      return Array.isArray(zz) ? zz : [zz]
    }

    function sl(zz, uz, bz) {
      for (; zz.value && zz.from <= bz;) zz.from == bz && uz.push(zz.value), zz.next()
    }
    class rl {
      constructor(zz, uz, bz) {
        this.gutter = zz, this.height = bz, this.i = 0, this.cursor = Ez.x.iter(zz.markers, uz.from)
      }
      addElement(zz, uz, bz) {
        let {
          gutter: Ez
        } = this, nz = (uz.top - this.height) / zz.scaleY, iz = uz.height / zz.scaleY;
        if (this.i == Ez.elements.length) {
          let uz = new Nl(zz, iz, nz, bz);
          Ez.elements.push(uz), Ez.dom.appendChild(uz.dom)
        } else Ez.elements[this.i].update(zz, iz, nz, bz);
        this.height = uz.bottom, this.i++
      }
      line(zz, uz, bz) {
        let Ez = [];
        sl(this.cursor, Ez, uz.from), bz.length && (Ez = Ez.concat(bz));
        let nz = this.gutter.config.lineMarker(zz, uz, Ez);
        nz && Ez.unshift(nz);
        let iz = this.gutter;
        (0 != Ez.length || iz.config.renderEmptyElements) && this.addElement(zz, uz, Ez)
      }
      widget(zz, uz) {
        let bz = this.gutter.config.widgetMarker(zz, uz.widget, uz),
          Ez = bz ? [bz] : null;
        for (let nz of zz.state.facet(dl)) {
          let bz = nz(zz, uz.widget, uz);
          bz && (Ez || (Ez = [])).push(bz)
        }
        Ez && this.addElement(zz, uz, Ez)
      }
      finish() {
        let zz = this.gutter;
        for (; zz.elements.length > this.i;) {
          let uz = zz.elements.pop();
          zz.dom.removeChild(uz.dom), uz.destroy()
        }
      }
    }
    class ol {
      constructor(zz, uz) {
        this.view = zz, this.config = uz, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let bz in uz.domEventHandlers) this.dom.addEventListener(bz, (Ez => {
          let nz, iz = Ez.target;
          if (iz != this.dom && this.dom.contains(iz)) {
            for (; iz.parentNode != this.dom;) iz = iz.parentNode;
            let zz = iz.getBoundingClientRect();
            nz = (zz.top + zz.bottom) / 2
          } else nz = Ez.clientY;
          let lz = zz.lineBlockAtHeight(nz - zz.documentTop);
          uz.domEventHandlers[bz](zz, lz, Ez) && Ez.preventDefault()
        }));
        this.markers = fl(uz.markers(zz)), uz.initialSpacer && (this.spacer = new Nl(zz, 0, 0, [uz.initialSpacer(zz)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(zz) {
        let uz = this.markers;
        if (this.markers = fl(this.config.markers(zz.view)), this.spacer && this.config.updateSpacer) {
          let uz = this.config.updateSpacer(this.spacer.markers[0], zz);
          uz != this.spacer.markers[0] && this.spacer.update(zz.view, 0, 0, [uz])
        }
        let bz = zz.view.viewport;
        return !Ez.x.eq(this.markers, uz, bz.from, bz.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(zz)
      }
      destroy() {
        for (let zz of this.elements) zz.destroy()
      }
    }
    class Nl {
      constructor(zz, uz, bz, Ez) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(zz, uz, bz, Ez)
      }
      update(zz, uz, bz, Ez) {
        this.height != uz && (this.height = uz, this.dom.style.height = uz + "px"), this.above != bz && (this.dom.style.marginTop = (this.above = bz) ? bz + "px" : ""),
          function(zz, uz) {
            if (zz.length != uz.length) return !1;
            for (let bz = 0; bz < zz.length; bz++)
              if (!zz[bz].compare(uz[bz])) return !1;
            return !0
          }(this.markers, Ez) || this.setMarkers(zz, Ez)
      }
      setMarkers(zz, uz) {
        let bz = "cm-gutterElement",
          Ez = this.dom.firstChild;
        for (let nz = 0, iz = 0;;) {
          let lz = iz,
            Mz = nz < uz.length ? uz[nz++] : null,
            tz = !1;
          if (Mz) {
            let zz = Mz.elementClass;
            zz && (bz += " " + zz);
            for (let uz = iz; uz < this.markers.length; uz++)
              if (this.markers[uz].compare(Mz)) {
                lz = uz, tz = !0;
                break
              }
          } else lz = this.markers.length;
          for (; iz < lz;) {
            let zz = this.markers[iz++];
            if (zz.toDOM) {
              zz.destroy(Ez);
              let uz = Ez.nextSibling;
              Ez.remove(), Ez = uz
            }
          }
          if (!Mz) break;
          Mz.toDOM && (tz ? Ez = Ez.nextSibling : this.dom.insertBefore(Mz.toDOM(zz), Ez)), tz && iz++
        }
        this.dom.className = bz, this.markers = uz
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const vl = Ez.r.define(),
      xl = Ez.r.define(),
      Jl = Ez.r.define({
        combine: zz => (0, Ez.Q)(zz, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(zz, uz) {
            let bz = Object.assign({}, zz);
            for (let Ez in uz) {
              let zz = bz[Ez],
                nz = uz[Ez];
              bz[Ez] = zz ? (uz, bz, Ez) => zz(uz, bz, Ez) || nz(uz, bz, Ez) : nz
            }
            return bz
          }
        })
      });
    class Al extends Ol {
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

    function Tl(zz, uz) {
      return zz.state.facet(Jl).formatNumber(uz, zz.state)
    }
    const Ll = Zl.compute([Jl], (zz => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: zz => zz.state.facet(vl),
      lineMarker: (zz, uz, bz) => bz.some((zz => zz.toDOM)) ? null : new Al(Tl(zz, zz.state.doc.lineAt(uz.from).number)),
      widgetMarker: (zz, uz, bz) => {
        for (let Ez of zz.state.facet(xl)) {
          let nz = Ez(zz, uz, bz);
          if (nz) return nz
        }
        return null
      },
      lineMarkerChange: zz => zz.startState.facet(Jl) != zz.state.facet(Jl),
      initialSpacer: zz => new Al(Tl(zz, Gl(zz.state.doc.lines))),
      updateSpacer(zz, uz) {
        let bz = Tl(uz.view, Gl(uz.view.state.doc.lines));
        return bz == zz.number ? zz : new Al(bz)
      },
      domEventHandlers: zz.facet(Jl).domEventHandlers,
      side: "before"
    })));

    function Pl() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Jl.of(zz), wl(), Ll]
    }

    function Gl(zz) {
      let uz = 9;
      for (; uz < zz;) uz = 10 * uz + 9;
      return uz
    }
    const al = new class extends Ol {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      Vl = pl.compute(["selection"], (zz => {
        let uz = [],
          bz = -1;
        for (let Ez of zz.selection.al) {
          let nz = zz.doc.lineAt(Ez.head).from;
          nz > bz && (bz = nz, uz.push(al.range(nz)))
        }
        return Ez.x.of(uz)
      }));

    function ml() {
      return Vl
    }
  },
  40558: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez,
      e: () => Fz,
      g: () => lz,
      k: () => Oz,
      m: () => Hz,
      n: () => az,
      r: () => mz,
      v: () => Vz,
      x: () => Zz
    });
    const Ez = 1024;
    let nz = 0;
    class iz {
      constructor(zz, uz) {
        this.from = zz, this.to = uz
      }
    }
    class lz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = nz++, this.perNode = !!zz.perNode, this.deserialize = zz.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = zz.combine || null
      }
      add(zz) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof zz && (zz = Hz.match(zz)), uz => {
          let bz = zz(uz);
          return void 0 === bz ? null : [this, bz]
        }
      }
    }
    lz.closedBy = new lz({
      deserialize: zz => zz.split(" ")
    }), lz.openedBy = new lz({
      deserialize: zz => zz.split(" ")
    }), lz.group = new lz({
      deserialize: zz => zz.split(" ")
    }), lz.isolate = new lz({
      deserialize: zz => {
        if (zz && "rtl" != zz && "ltr" != zz && "auto" != zz) throw new RangeError("Invalid value for isolate: " + zz);
        return zz || "auto"
      }
    }), lz.contextHash = new lz({
      perNode: !0
    }), lz.lookAhead = new lz({
      perNode: !0
    }), lz.mounted = new lz({
      perNode: !0
    });
    class Mz {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = zz, this.overlay = uz, this.parser = bz, this.bracketed = Ez
      }
      static get(zz) {
        return zz && zz.props && zz.props[lz.mounted.id]
      }
    }
    const tz = Object.create(null);
    class Hz {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = zz, this.props = uz, this.id = bz, this.flags = Ez
      }
      static define(zz) {
        let uz = zz.props && zz.props.length ? Object.create(null) : tz,
          bz = (zz.top ? 1 : 0) | (zz.skipped ? 2 : 0) | (zz.error ? 4 : 0) | (null == zz.name ? 8 : 0),
          Ez = new Hz(zz.name || "", uz, zz.id, bz);
        if (zz.props)
          for (let nz of zz.props)
            if (Array.isArray(nz) || (nz = nz(Ez)), nz) {
              if (nz[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              uz[nz[0].id] = nz[1]
            } return Ez
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
          let uz = this.prop(lz.group);
          return !!uz && uz.indexOf(zz) > -1
        }
        return this.id == zz
      }
      static match(zz) {
        let uz = Object.create(null);
        for (let bz in zz)
          for (let Ez of bz.split(" ")) uz[Ez] = zz[bz];
        return zz => {
          for (let bz = zz.prop(lz.group), Ez = -1; Ez < (bz ? bz.length : 0); Ez++) {
            let nz = uz[Ez < 0 ? zz.name : bz[Ez]];
            if (nz) return nz
          }
        }
      }
    }
    Hz.none = new Hz("", Object.create(null), 0, 8);
    class Oz {
      constructor(zz) {
        this.types = zz;
        for (let uz = 0; uz < zz.length; uz++)
          if (zz[uz].id != uz) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let zz = [];
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        for (let nz of this.types) {
          let uz = null;
          for (let zz of bz) {
            let bz = zz(nz);
            if (bz) {
              uz || (uz = Object.assign({}, nz.props));
              let zz = bz[1],
                Ez = bz[0];
              Ez.combine && Ez.id in uz && (zz = Ez.combine(uz[Ez.id], zz)), uz[Ez.id] = zz
            }
          }
          zz.push(uz ? new Hz(nz.name, uz, nz.id, nz.flags) : nz)
        }
        return new Oz(zz)
      }
    }
    const pz = new WeakMap,
      dz = new WeakMap;
    var Fz;
    ! function(zz) {
      zz[zz.ExcludeBuffers = 1] = "ExcludeBuffers", zz[zz.IncludeAnonymous = 2] = "IncludeAnonymous", zz[zz.IgnoreMounts = 4] = "IgnoreMounts", zz[zz.IgnoreOverlays = 8] = "IgnoreOverlays", zz[zz.EnterBracketed = 16] = "EnterBracketed"
    }(Fz || (Fz = {}));
    class Zz {
      constructor(zz, uz, bz, Ez, nz) {
        if (this.type = zz, this.children = uz, this.positions = bz, this.length = Ez, this.props = null, nz && nz.length) {
          this.props = Object.create(null);
          for (let [zz, uz] of nz) this.props["number" == typeof zz ? zz : zz.id] = uz
        }
      }
      toString() {
        let zz = Mz.get(this);
        if (zz && !zz.overlay) return zz.tree.toString();
        let uz = "";
        for (let bz of this.children) {
          let zz = bz.toString();
          zz && (uz && (uz += ","), uz += zz)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (uz.length ? "(" + uz + ")" : "") : uz
      }
      cursor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Az(this.topNode, zz)
      }
      cursorAt(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = pz.get(this) || this.topNode,
          Ez = new Az(bz);
        return Ez.moveTo(zz, uz), pz.set(this, Ez._tree), Ez
      }
      get topNode() {
        return new sz(this, 0, 0, null)
      }
      resolve(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = Xz(pz.get(this) || this.topNode, zz, uz, !1);
        return pz.set(this, bz), bz
      }
      resolveInner(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = Xz(dz.get(this) || this.topNode, zz, uz, !0);
        return dz.set(this, bz), bz
      }
      resolveStack(zz) {
        return function(zz, uz, bz) {
          let Ez = zz.resolveInner(uz, bz),
            nz = null;
          for (let iz = Ez instanceof sz ? Ez : Ez.context.parent; iz; iz = iz.parent)
            if (iz.index < 0) {
              let zz = iz.parent;
              (nz || (nz = [Ez])).push(zz.resolve(uz, bz)), iz = zz
            } else {
              let zz = Mz.get(iz.tree);
              if (zz && zz.overlay && zz.overlay[0].from <= uz && zz.overlay[zz.overlay.length - 1].to >= uz) {
                let lz = new sz(zz.tree, zz.overlay[0].from + iz.from, -1, iz);
                (nz || (nz = [Ez])).push(Xz(lz, uz, bz, !1))
              }
            } return nz ? xz(nz) : Ez
        }(this, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(zz) {
        let {
          enter: uz,
          leave: bz,
          from: Ez = 0,
          to: nz = this.length
        } = zz, iz = zz.mode || 0, lz = (iz & Fz.IncludeAnonymous) > 0;
        for (let Mz = this.cursor(iz | Fz.IncludeAnonymous);;) {
          let zz = !1;
          if (Mz.from <= nz && Mz.to >= Ez && (!lz && Mz.type.isAnonymous || !1 !== uz(Mz))) {
            if (Mz.firstChild()) continue;
            zz = !0
          }
          for (; zz && bz && (lz || !Mz.type.isAnonymous) && bz(Mz), !Mz.nextSibling();) {
            if (!Mz.parent()) return;
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
          for (let uz in this.props) zz.push([+uz, this.props[uz]]);
        return zz
      }
      balance() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Gz(Hz.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((zz, uz, bz) => new Zz(this.type, zz, uz, bz, this.propValues)), zz.makeTree || ((zz, uz, bz) => new Zz(Hz.none, zz, uz, bz)))
      }
      static build(zz) {
        return function(zz) {
          var uz;
          let {
            buffer: bz,
            nodeSet: nz,
            maxBufferLength: iz = Ez,
            reused: Mz = [],
            minRepeatType: tz = nz.types.length
          } = zz, Hz = Array.isArray(bz) ? new Rz(bz, bz.length) : bz, Oz = nz.types, pz = 0, dz = 0;

          function Fz(zz, uz, bz, Ez, lz, Zz) {
            let {
              id: Rz,
              start: Nz,
              end: vz,
              size: xz
            } = Hz, Jz = dz, Az = pz;
            if (xz < 0) {
              if (Hz.next(), -1 == xz) {
                let uz = Mz[Rz];
                return bz.push(uz), void Ez.push(Nz - zz)
              }
              if (-3 == xz) return void(pz = Rz);
              if (-4 == xz) return void(dz = Rz);
              throw new RangeError(`Unrecognized record size: ${xz}`)
            }
            let Tz, Lz, Pz = Oz[Rz],
              az = Nz - zz;
            if (vz - Nz <= iz && (Lz = rz(Hz.pos - uz, lz))) {
              let uz = new Uint16Array(Lz.size - Lz.skip),
                bz = Hz.pos - Lz.size,
                Ez = uz.length;
              for (; Hz.pos > bz;) Ez = oz(Lz.start, uz, Ez);
              Tz = new Kz(uz, vz - Lz.start, nz), az = Lz.start - zz
            } else {
              let zz = Hz.pos - xz;
              Hz.next();
              let uz = [],
                bz = [],
                Ez = Rz >= tz ? Rz : -1,
                nz = 0,
                lz = vz;
              for (; Hz.pos > zz;) Ez >= 0 && Hz.id == Ez && Hz.size >= 0 ? (Hz.end <= lz - iz && (fz(uz, bz, Nz, nz, Hz.end, lz, Ez, Jz, Az), nz = uz.length, lz = Hz.end), Hz.next()) : Zz > 2500 ? wz(Nz, zz, uz, bz) : Fz(Nz, zz, uz, bz, Ez, Zz + 1);
              if (Ez >= 0 && nz > 0 && nz < uz.length && fz(uz, bz, Nz, nz, Nz, lz, Ez, Jz, Az), uz.reverse(), bz.reverse(), Ez > -1 && nz > 0) {
                let zz = Xz(Pz, Az);
                Tz = Gz(Pz, uz, bz, 0, uz.length, 0, vz - Nz, zz, zz)
              } else Tz = sz(Pz, uz, bz, vz - Nz, Jz - vz, Az)
            }
            bz.push(Tz), Ez.push(az)
          }

          function wz(zz, uz, bz, Ez) {
            let lz = [],
              Mz = 0,
              tz = -1;
            for (; Hz.pos > uz;) {
              let {
                id: zz,
                start: uz,
                end: bz,
                size: Ez
              } = Hz;
              if (Ez > 4) Hz.next();
              else {
                if (tz > -1 && uz < tz) break;
                tz < 0 && (tz = bz - iz), lz.push(zz, uz, bz), Mz++, Hz.next()
              }
            }
            if (Mz) {
              let uz = new Uint16Array(4 * Mz),
                iz = lz[lz.length - 2];
              for (let zz = lz.length - 3, bz = 0; zz >= 0; zz -= 3) uz[bz++] = lz[zz], uz[bz++] = lz[zz + 1] - iz, uz[bz++] = lz[zz + 2] - iz, uz[bz++] = bz;
              bz.push(new Kz(uz, lz[2] - iz, nz)), Ez.push(iz - zz)
            }
          }

          function Xz(zz, uz) {
            return (bz, Ez, nz) => {
              let iz, Mz, tz = 0,
                Hz = bz.length - 1;
              if (Hz >= 0 && (iz = bz[Hz]) instanceof Zz) {
                if (!Hz && iz.type == zz && iz.length == nz) return iz;
                (Mz = iz.prop(lz.lookAhead)) && (tz = Ez[Hz] + iz.length + Mz)
              }
              return sz(zz, bz, Ez, nz, tz, uz)
            }
          }

          function fz(zz, uz, bz, Ez, iz, lz, Mz, tz, Hz) {
            let Oz = [],
              pz = [];
            for (; zz.length > Ez;) Oz.push(zz.pop()), pz.push(uz.pop() + bz - iz);
            zz.push(sz(nz.types[Mz], Oz, pz, lz - iz, tz - lz, Hz)), uz.push(iz - bz)
          }

          function sz(zz, uz, bz, Ez, nz, iz, Mz) {
            if (iz) {
              let zz = [lz.contextHash, iz];
              Mz = Mz ? [zz].concat(Mz) : [zz]
            }
            if (nz > 25) {
              let zz = [lz.lookAhead, nz];
              Mz = Mz ? [zz].concat(Mz) : [zz]
            }
            return new Zz(zz, uz, bz, Ez, Mz)
          }

          function rz(zz, uz) {
            let bz = Hz.fork(),
              Ez = 0,
              nz = 0,
              lz = 0,
              Mz = bz.end - iz,
              Oz = {
                size: 0,
                start: 0,
                skip: 0
              };
            zz: for (let iz = bz.pos - zz; bz.pos > iz;) {
              let zz = bz.size;
              if (bz.id == uz && zz >= 0) {
                Oz.size = Ez, Oz.start = nz, Oz.skip = lz, lz += 4, Ez += 4, bz.next();
                continue
              }
              let Hz = bz.pos - zz;
              if (zz < 0 || Hz < iz || bz.start < Mz) break;
              let pz = bz.id >= tz ? 4 : 0,
                dz = bz.start;
              for (bz.next(); bz.pos > Hz;) {
                if (bz.size < 0) {
                  if (-3 != bz.size && -4 != bz.size) break zz;
                  pz += 4
                } else bz.id >= tz && (pz += 4);
                bz.next()
              }
              nz = dz, Ez += zz, lz += pz
            }
            return (uz < 0 || Ez == zz) && (Oz.size = Ez, Oz.start = nz, Oz.skip = lz), Oz.size > 4 ? Oz : void 0
          }

          function oz(zz, uz, bz) {
            let {
              id: Ez,
              start: nz,
              end: iz,
              size: lz
            } = Hz;
            if (Hz.next(), lz >= 0 && Ez < tz) {
              let Mz = bz;
              if (lz > 4) {
                let Ez = Hz.pos - (lz - 4);
                for (; Hz.pos > Ez;) bz = oz(zz, uz, bz)
              }
              uz[--bz] = Mz, uz[--bz] = iz - zz, uz[--bz] = nz - zz, uz[--bz] = Ez
            } else - 3 == lz ? pz = Ez : -4 == lz && (dz = Ez);
            return bz
          }
          let Nz = [],
            vz = [];
          for (; Hz.pos > 0;) Fz(zz.start || 0, zz.bufferStart || 0, Nz, vz, -1, 0);
          let xz = null !== (uz = zz.length) && void 0 !== uz ? uz : Nz.length ? vz[0] + Nz[0].length : 0;
          return new Zz(Oz[zz.topID], Nz.reverse(), vz.reverse(), xz)
        }(zz)
      }
    }
    Zz.empty = new Zz(Hz.none, [], [], 0);
    class Rz {
      constructor(zz, uz) {
        this.buffer = zz, this.index = uz
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
        return new Rz(this.buffer, this.index)
      }
    }
    class Kz {
      constructor(zz, uz, bz) {
        this.buffer = zz, this.length = uz, this.set = bz
      }
      get type() {
        return Hz.none
      }
      toString() {
        let zz = [];
        for (let uz = 0; uz < this.buffer.length;) zz.push(this.childString(uz)), uz = this.buffer[uz + 3];
        return zz.join(",")
      }
      childString(zz) {
        let uz = this.buffer[zz],
          bz = this.buffer[zz + 3],
          Ez = this.set.types[uz],
          nz = Ez.name;
        if (/\W/.test(nz) && !Ez.isError && (nz = JSON.stringify(nz)), bz == (zz += 4)) return nz;
        let iz = [];
        for (; zz < bz;) iz.push(this.childString(zz)), zz = this.buffer[zz + 3];
        return nz + "(" + iz.join(",") + ")"
      }
      findChild(zz, uz, bz, Ez, nz) {
        let {
          buffer: iz
        } = this, lz = -1;
        for (let Mz = zz; Mz != uz && !(wz(nz, Ez, iz[Mz + 1], iz[Mz + 2]) && (lz = Mz, bz > 0)); Mz = iz[Mz + 3]);
        return lz
      }
      slice(zz, uz, bz) {
        let Ez = this.buffer,
          nz = new Uint16Array(uz - zz),
          iz = 0;
        for (let lz = zz, Mz = 0; lz < uz;) {
          nz[Mz++] = Ez[lz++], nz[Mz++] = Ez[lz++] - bz;
          let uz = nz[Mz++] = Ez[lz++] - bz;
          nz[Mz++] = Ez[lz++] - zz, iz = Math.max(iz, uz)
        }
        return new Kz(nz, iz, this.set)
      }
    }

    function wz(zz, uz, bz, Ez) {
      switch (zz) {
        case -2:
          return bz < uz;
        case -1:
          return Ez >= uz && bz < uz;
        case 0:
          return bz < uz && Ez > uz;
        case 1:
          return bz <= uz && Ez > uz;
        case 2:
          return Ez > uz;
        case 4:
          return !0
      }
    }

    function Xz(zz, uz, bz, Ez) {
      for (var nz; zz.from == zz.to || (bz < 1 ? zz.from >= uz : zz.from > uz) || (bz > -1 ? zz.to <= uz : zz.to < uz);) {
        let uz = !Ez && zz instanceof sz && zz.index < 0 ? null : zz.parent;
        if (!uz) return zz;
        zz = uz
      }
      let iz = Ez ? 0 : Fz.IgnoreOverlays;
      if (Ez)
        for (let lz = zz, Mz = lz.parent; Mz; lz = Mz, Mz = lz.parent) lz instanceof sz && lz.index < 0 && (null === (nz = Mz.enter(uz, bz, iz)) || void 0 === nz ? void 0 : nz.from) != lz.from && (zz = Mz);
      for (;;) {
        let Ez = zz.enter(uz, bz, iz);
        if (!Ez) return zz;
        zz = Ez
      }
    }
    class fz {
      cursor() {
        return new Az(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(zz) {
        let uz = rz(this, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return uz.length ? uz[0] : null
      }
      getChildren(zz) {
        return rz(this, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(zz) {
        return Xz(this, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(zz) {
        return Xz(this, zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(zz) {
        return oz(this.parent, zz)
      }
      enterUnfinishedNodesBefore(zz) {
        let uz = this.childBefore(zz),
          bz = this;
        for (; uz;) {
          let zz = uz.lastChild;
          if (!zz || zz.to != uz.to) break;
          zz.type.isError && zz.from == zz.to ? (bz = uz, uz = zz.prevSibling) : uz = zz
        }
        return bz
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class sz extends fz {
      constructor(zz, uz, bz, Ez) {
        super(), this._tree = zz, this.from = uz, this.index = bz, this._parent = Ez
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
      nextChild(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let iz = this;;) {
          for (let {
              children: lz,
              positions: tz
            } = iz._tree, Hz = uz > 0 ? lz.length : -1; zz != Hz; zz += uz) {
            let Hz, Oz = lz[zz],
              pz = tz[zz] + iz.from;
            if (nz & Fz.EnterBracketed && Oz instanceof Zz && (Hz = Mz.get(Oz)) && !Hz.overlay && Hz.bracketed && bz >= pz && bz <= pz + Oz.length || wz(Ez, bz, pz, pz + Oz.length))
              if (Oz instanceof Kz) {
                if (nz & Fz.ExcludeBuffers) continue;
                let lz = Oz.findChild(0, Oz.buffer.length, uz, bz - pz, Ez);
                if (lz > -1) return new vz(new Nz(iz, Oz, zz, pz), null, lz)
              } else if (nz & Fz.IncludeAnonymous || !Oz.type.isAnonymous || Tz(Oz)) {
              let lz;
              if (!(nz & Fz.IgnoreMounts) && (lz = Mz.get(Oz)) && !lz.overlay) return new sz(lz.tree, pz, zz, iz);
              let tz = new sz(Oz, pz, zz, iz);
              return nz & Fz.IncludeAnonymous || !tz.type.isAnonymous ? tz : tz.nextChild(uz < 0 ? Oz.children.length - 1 : 0, uz, bz, Ez, nz)
            }
          }
          if (nz & Fz.IncludeAnonymous || !iz.type.isAnonymous) return null;
          if (zz = iz.index >= 0 ? iz.index + uz : uz < 0 ? -1 : iz._parent._tree.children.length, iz = iz._parent, !iz) return null
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
      enter(zz, uz) {
        let bz, Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Ez & Fz.IgnoreOverlays) && (bz = Mz.get(this._tree)) && bz.overlay) {
          let nz = zz - this.from,
            iz = Ez & Fz.EnterBracketed && bz.bracketed;
          for (let {
              from: zz,
              to: Ez
            }
            of bz.overlay)
            if ((uz > 0 || iz ? zz <= nz : zz < nz) && (uz < 0 || iz ? Ez >= nz : Ez > nz)) return new sz(bz.tree, bz.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, zz, uz, Ez)
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

    function rz(zz, uz, bz, Ez) {
      let nz = zz.cursor(),
        iz = [];
      if (!nz.firstChild()) return iz;
      if (null != bz)
        for (let lz = !1; !lz;)
          if (lz = nz.type.is(bz), !nz.nextSibling()) return iz;
      for (;;) {
        if (null != Ez && nz.type.is(Ez)) return iz;
        if (nz.type.is(uz) && iz.push(nz.node), !nz.nextSibling()) return null == Ez ? iz : []
      }
    }

    function oz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uz.length - 1;
      for (let Ez = zz; bz >= 0; Ez = Ez.parent) {
        if (!Ez) return !1;
        if (!Ez.type.isAnonymous) {
          if (uz[bz] && uz[bz] != Ez.name) return !1;
          bz--
        }
      }
      return !0
    }
    class Nz {
      constructor(zz, uz, bz, Ez) {
        this.parent = zz, this.buffer = uz, this.index = bz, this.start = Ez
      }
    }
    class vz extends fz {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(zz, uz, bz) {
        super(), this.context = zz, this._parent = uz, this.index = bz, this.type = zz.buffer.set.types[zz.buffer.buffer[bz]]
      }
      child(zz, uz, bz) {
        let {
          buffer: Ez
        } = this.context, nz = Ez.findChild(this.index + 4, Ez.buffer[this.index + 3], zz, uz - this.context.start, bz);
        return nz < 0 ? null : new vz(this.context, this, nz)
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
      enter(zz, uz) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & Fz.ExcludeBuffers) return null;
        let {
          buffer: bz
        } = this.context, Ez = bz.findChild(this.index + 4, bz.buffer[this.index + 3], uz > 0 ? 1 : -1, zz - this.context.start, uz);
        return Ez < 0 ? null : new vz(this.context, this, Ez)
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
        } = this.context, uz = zz.buffer[this.index + 3];
        return uz < (this._parent ? zz.buffer[this._parent.index + 3] : zz.buffer.length) ? new vz(this.context, this._parent, uz) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: zz
        } = this.context, uz = this._parent ? this._parent.index + 4 : 0;
        return this.index == uz ? this.externalSibling(-1) : new vz(this.context, this._parent, zz.findChild(uz, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let zz = [],
          uz = [],
          {
            buffer: bz
          } = this.context,
          Ez = this.index + 4,
          nz = bz.buffer[this.index + 3];
        if (nz > Ez) {
          let iz = bz.buffer[this.index + 1];
          zz.push(bz.slice(Ez, nz, iz)), uz.push(0)
        }
        return new Zz(this.type, zz, uz, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function xz(zz) {
      if (!zz.length) return null;
      let uz = 0,
        bz = zz[0];
      for (let iz = 1; iz < zz.length; iz++) {
        let Ez = zz[iz];
        (Ez.from > bz.from || Ez.to < bz.to) && (bz = Ez, uz = iz)
      }
      let Ez = bz instanceof sz && bz.index < 0 ? null : bz.parent,
        nz = zz.slice();
      return Ez ? nz[uz] = Ez : nz.splice(uz, 1), new Jz(nz, bz)
    }
    class Jz {
      constructor(zz, uz) {
        this.heads = zz, this.node = uz
      }
      get next() {
        return xz(this.heads)
      }
    }
    class Az {
      get name() {
        return this.type.name
      }
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = uz & ~Fz.EnterBracketed, zz instanceof sz) this.yieldNode(zz);
        else {
          this._tree = zz.context.parent, this.buffer = zz.context;
          for (let uz = zz._parent; uz; uz = uz._parent) this.stack.unshift(uz.index);
          this.bufferNode = zz, this.yieldBuf(zz.index)
        }
      }
      yieldNode(zz) {
        return !!zz && (this._tree = zz, this.type = zz.type, this.from = zz.from, this.to = zz.to, !0)
      }
      yieldBuf(zz, uz) {
        this.index = zz;
        let {
          start: bz,
          buffer: Ez
        } = this.buffer;
        return this.type = uz || Ez.set.types[Ez.buffer[zz]], this.from = bz + Ez.buffer[zz + 1], this.to = bz + Ez.buffer[zz + 2], !0
      }
      yield(zz) {
        return !!zz && (zz instanceof sz ? (this.buffer = null, this.yieldNode(zz)) : (this.buffer = zz.context, this.yieldBuf(zz.index, zz.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(zz, uz, bz) {
        if (!this.buffer) return this.yield(this._tree.nextChild(zz < 0 ? this._tree._tree.children.length - 1 : 0, zz, uz, bz, this.mode));
        let {
          buffer: Ez
        } = this.buffer, nz = Ez.findChild(this.index + 4, Ez.buffer[this.index + 3], zz, uz - this.buffer.start, bz);
        return !(nz < 0) && (this.stack.push(this.index), this.yieldBuf(nz))
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
      enter(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(bz & Fz.ExcludeBuffers) && this.enterChild(1, zz, uz) : this.yield(this._tree.enter(zz, uz, bz))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & Fz.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let zz = this.mode & Fz.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(zz)
      }
      sibling(zz) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + zz, zz, 0, 4, this.mode));
        let {
          buffer: uz
        } = this.buffer, bz = this.stack.length - 1;
        if (zz < 0) {
          let zz = bz < 0 ? 0 : this.stack[bz] + 4;
          if (this.index != zz) return this.yieldBuf(uz.findChild(zz, this.index, -1, 0, 4))
        } else {
          let zz = uz.buffer[this.index + 3];
          if (zz < (bz < 0 ? uz.buffer.length : uz.buffer[this.stack[bz] + 3])) return this.yieldBuf(zz)
        }
        return bz < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + zz, zz, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(zz) {
        let uz, bz, {
          buffer: Ez
        } = this;
        if (Ez) {
          if (zz > 0) {
            if (this.index < Ez.buffer.buffer.length) return !1
          } else
            for (let zz = 0; zz < this.index; zz++)
              if (Ez.buffer.buffer[zz + 3] < this.index) return !1;
          ({
            index: uz,
            parent: bz
          } = Ez)
        } else({
          index: uz,
          _parent: bz
        } = this._tree);
        for (; bz;
          ({
            index: uz,
            _parent: bz
          } = bz))
          if (uz > -1)
            for (let Ez = uz + zz, nz = zz < 0 ? -1 : bz._tree.children.length; Ez != nz; Ez += zz) {
              let zz = bz._tree.children[Ez];
              if (this.mode & Fz.IncludeAnonymous || zz instanceof Kz || !zz.type.isAnonymous || Tz(zz)) return !1
            }
        return !0
      }
      move(zz, uz) {
        if (uz && this.enterChild(zz, 0, 4)) return !0;
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (uz < 1 ? this.from >= zz : this.from > zz) || (uz > -1 ? this.to <= zz : this.to < zz)) && this.parent(););
        for (; this.enterChild(1, zz, uz););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let zz = this.bufferNode,
          uz = null,
          bz = 0;
        if (zz && zz.context == this.buffer) zz: for (let Ez = this.index, nz = this.stack.length; nz >= 0;) {
          for (let iz = zz; iz; iz = iz._parent)
            if (iz.index == Ez) {
              if (Ez == this.index) return iz;
              uz = iz, bz = nz + 1;
              break zz
            } Ez = this.stack[--nz]
        }
        for (let Ez = bz; Ez < this.stack.length; Ez++) uz = new vz(this.buffer, uz, this.stack[Ez]);
        return this.bufferNode = new vz(this.buffer, uz, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(zz, uz) {
        for (let bz = 0;;) {
          let Ez = !1;
          if (this.type.isAnonymous || !1 !== zz(this)) {
            if (this.firstChild()) {
              bz++;
              continue
            }
            this.type.isAnonymous || (Ez = !0)
          }
          for (;;) {
            if (Ez && uz && uz(this), Ez = this.type.isAnonymous, !bz) return;
            if (this.nextSibling()) break;
            this.parent(), bz--, Ez = !0
          }
        }
      }
      matchContext(zz) {
        if (!this.buffer) return oz(this.node.parent, zz);
        let {
          buffer: uz
        } = this.buffer, {
          types: bz
        } = uz.set;
        for (let Ez = zz.length - 1, nz = this.stack.length - 1; Ez >= 0; nz--) {
          if (nz < 0) return oz(this._tree, zz, Ez);
          let iz = bz[uz.buffer[this.stack[nz]]];
          if (!iz.isAnonymous) {
            if (zz[Ez] && zz[Ez] != iz.name) return !1;
            Ez--
          }
        }
        return !0
      }
    }

    function Tz(zz) {
      return zz.children.some((zz => zz instanceof Kz || !zz.type.isAnonymous || Tz(zz)))
    }
    const Lz = new WeakMap;

    function Pz(zz, uz) {
      if (!zz.isAnonymous || uz instanceof Kz || uz.type != zz) return 1;
      let bz = Lz.get(uz);
      if (null == bz) {
        bz = 1;
        for (let Ez of uz.children) {
          if (Ez.type != zz || !(Ez instanceof Zz)) {
            bz = 1;
            break
          }
          bz += Pz(zz, Ez)
        }
        Lz.set(uz, bz)
      }
      return bz
    }

    function Gz(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
      let Hz = 0;
      for (let Fz = Ez; Fz < nz; Fz++) Hz += Pz(zz, uz[Fz]);
      let Oz = Math.ceil(1.5 * Hz / 8),
        pz = [],
        dz = [];
      return function uz(bz, Ez, nz, lz, Mz) {
        for (let Hz = nz; Hz < lz;) {
          let nz = Hz,
            Fz = Ez[Hz],
            Zz = Pz(zz, bz[Hz]);
          for (Hz++; Hz < lz; Hz++) {
            let uz = Pz(zz, bz[Hz]);
            if (Zz + uz >= Oz) break;
            Zz += uz
          }
          if (Hz == nz + 1) {
            if (Zz > Oz) {
              let zz = bz[nz];
              uz(zz.children, zz.positions, 0, zz.children.length, Ez[nz] + Mz);
              continue
            }
            pz.push(bz[nz])
          } else {
            let uz = Ez[Hz - 1] + bz[Hz - 1].length - Fz;
            pz.push(Gz(zz, bz, Ez, nz, Hz, Fz, uz, null, tz))
          }
          dz.push(Fz + Mz - iz)
        }
      }(uz, bz, Ez, nz, 0), (Mz || tz)(pz, dz, lz)
    }
    class az {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(zz, uz, bz) {
        let Ez = this.map.get(zz);
        Ez || this.map.set(zz, Ez = new Map), Ez.set(uz, bz)
      }
      getBuffer(zz, uz) {
        let bz = this.map.get(zz);
        return bz && bz.get(uz)
      }
      set(zz, uz) {
        zz instanceof vz ? this.setBuffer(zz.context.buffer, zz.index, uz) : zz instanceof sz && this.map.set(zz.tree, uz)
      }
      get(zz) {
        return zz instanceof vz ? this.getBuffer(zz.context.buffer, zz.index) : zz instanceof sz ? this.map.get(zz.tree) : void 0
      }
      cursorSet(zz, uz) {
        zz.buffer ? this.setBuffer(zz.buffer.buffer, zz.index, uz) : this.map.set(zz.tree, uz)
      }
      cursorGet(zz) {
        return zz.buffer ? this.getBuffer(zz.buffer.buffer, zz.index) : this.map.get(zz.tree)
      }
    }
    class Vz {
      constructor(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = zz, this.to = uz, this.tree = bz, this.offset = Ez, this.open = (nz ? 1 : 0) | (iz ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = [new Vz(0, zz.length, zz, 0, !1, bz)];
        for (let nz of uz) nz.to > zz.length && Ez.push(nz);
        return Ez
      }
      static applyChanges(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!uz.length) return zz;
        let Ez = [],
          nz = 1,
          iz = zz.length ? zz[0] : null;
        for (let lz = 0, Mz = 0, tz = 0;; lz++) {
          let Hz = lz < uz.length ? uz[lz] : null,
            Oz = Hz ? Hz.fromA : 1e9;
          if (Oz - Mz >= bz)
            for (; iz && iz.from < Oz;) {
              let uz = iz;
              if (Mz >= uz.from || Oz <= uz.to || tz) {
                let zz = Math.max(uz.from, Mz) - tz,
                  bz = Math.min(uz.to, Oz) - tz;
                uz = zz >= bz ? null : new Vz(zz, bz, uz.tree, uz.offset + tz, lz > 0, !!Hz)
              }
              if (uz && Ez.push(uz), iz.to > Oz) break;
              iz = nz < zz.length ? zz[nz++] : null
            }
          if (!Hz) break;
          Mz = Hz.toA, tz = Hz.toA - Hz.toB
        }
        return Ez
      }
    }
    class mz {
      startParse(zz, uz, bz) {
        return "string" == typeof zz && (zz = new qz(zz)), bz = bz ? bz.length ? bz.map((zz => new iz(zz.from, zz.to))) : [new iz(0, 0)] : [new iz(0, zz.length)], this.createParse(zz, uz || [], bz)
      }
      parse(zz, uz, bz) {
        let Ez = this.startParse(zz, uz, bz);
        for (;;) {
          let zz = Ez.advance();
          if (zz) return zz
        }
      }
    }
    class qz {
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
      read(zz, uz) {
        return this.string.slice(zz, uz)
      }
    }
    new lz({
      perNode: !0
    })
  },
  40566: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => dz,
      f: () => tz,
      g: () => pz,
      i: () => Lz
    });
    var Ez = bz(40558);
    let nz = 0;
    class iz {
      constructor(zz, uz, bz, Ez) {
        this.name = zz, this.set = uz, this.base = bz, this.modified = Ez, this.id = nz++
      }
      toString() {
        let {
          name: zz
        } = this;
        for (let uz of this.modified) uz.name && (zz = `${uz.name}(${zz})`);
        return zz
      }
      static define(zz, uz) {
        let bz = "string" == typeof zz ? zz : "?";
        if (zz instanceof iz && (uz = zz), null === uz || void 0 === uz ? void 0 : uz.base) throw new Error("Can not derive from a modified tag");
        let Ez = new iz(bz, [], null, []);
        if (Ez.set.push(Ez), uz)
          for (let nz of uz.set) Ez.set.push(nz);
        return Ez
      }
      static defineModifier(zz) {
        let uz = new Mz(zz);
        return zz => zz.modified.indexOf(uz) > -1 ? zz : Mz.get(zz.base || zz, zz.modified.concat(uz).sort(((zz, uz) => zz.id - uz.id)))
      }
    }
    let lz = 0;
    class Mz {
      constructor(zz) {
        this.name = zz, this.instances = [], this.id = lz++
      }
      static get(zz, uz) {
        if (!uz.length) return zz;
        let bz = uz[0].instances.find((bz => {
          return bz.base == zz && (Ez = uz, nz = bz.modified, Ez.length == nz.length && Ez.every(((zz, uz) => zz == nz[uz])));
          var Ez, nz
        }));
        if (bz) return bz;
        let Ez = [],
          nz = new iz(zz.name, Ez, zz, uz);
        for (let iz of uz) iz.instances.push(nz);
        let lz = function(zz) {
          let uz = [
            []
          ];
          for (let bz = 0; bz < zz.length; bz++)
            for (let Ez = 0, nz = uz.length; Ez < nz; Ez++) uz.push(uz[Ez].concat(zz[bz]));
          return uz.sort(((zz, uz) => uz.length - zz.length))
        }(uz);
        for (let iz of zz.set)
          if (!iz.modified.length)
            for (let zz of lz) Ez.push(Mz.get(iz, zz));
        return nz
      }
    }

    function tz(zz) {
      let uz = Object.create(null);
      for (let bz in zz) {
        let Ez = zz[bz];
        Array.isArray(Ez) || (Ez = [Ez]);
        for (let zz of bz.split(" "))
          if (zz) {
            let bz = [],
              nz = 2,
              iz = zz;
            for (let uz = 0;;) {
              if ("..." == iz && uz > 0 && uz + 3 == zz.length) {
                nz = 1;
                break
              }
              let Ez = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(iz);
              if (!Ez) throw new RangeError("Invalid path: " + zz);
              if (bz.push("*" == Ez[0] ? "" : '"' == Ez[0][0] ? JSON.parse(Ez[0]) : Ez[0]), uz += Ez[0].length, uz == zz.length) break;
              let lz = zz[uz++];
              if (uz == zz.length && "!" == lz) {
                nz = 0;
                break
              }
              if ("/" != lz) throw new RangeError("Invalid path: " + zz);
              iz = zz.slice(uz)
            }
            let lz = bz.length - 1,
              Mz = bz[lz];
            if (!Mz) throw new RangeError("Invalid path: " + zz);
            let tz = new Oz(Ez, nz, lz > 0 ? bz.slice(0, lz) : null);
            uz[Mz] = tz.sort(uz[Mz])
          }
      }
      return Hz.add(uz)
    }
    const Hz = new Ez.g({
      combine(zz, uz) {
        let bz, Ez, nz;
        for (; zz || uz;) {
          if (!zz || uz && zz.depth >= uz.depth ? (nz = uz, uz = uz.next) : (nz = zz, zz = zz.next), bz && bz.mode == nz.mode && !nz.context && !bz.context) continue;
          let iz = new Oz(nz.tags, nz.mode, nz.context);
          bz ? bz.next = iz : Ez = iz, bz = iz
        }
        return Ez
      }
    });
    class Oz {
      constructor(zz, uz, bz, Ez) {
        this.tags = zz, this.mode = uz, this.context = bz, this.next = Ez
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

    function pz(zz, uz) {
      let bz = Object.create(null);
      for (let iz of zz)
        if (Array.isArray(iz.tag))
          for (let zz of iz.tag) bz[zz.id] = iz.class;
        else bz[iz.tag.id] = iz.class;
      let {
        scope: Ez,
        all: nz = null
      } = uz || {};
      return {
        style: zz => {
          let uz = nz;
          for (let Ez of zz)
            for (let zz of Ez.set) {
              let Ez = bz[zz.id];
              if (Ez) {
                uz = uz ? uz + " " + Ez : Ez;
                break
              }
            }
          return uz
        },
        scope: Ez
      }
    }

    function dz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : zz.length,
        iz = new Fz(Ez, Array.isArray(uz) ? uz : [uz], bz);
      iz.highlightRange(zz.cursor(), Ez, nz, "", iz.highlighters), iz.flush(nz)
    }
    Oz.empty = new Oz([], 2, null);
    class Fz {
      constructor(zz, uz, bz) {
        this.at = zz, this.highlighters = uz, this.span = bz, this.class = ""
      }
      startSpan(zz, uz) {
        uz != this.class && (this.flush(zz), zz > this.at && (this.at = zz), this.class = uz)
      }
      flush(zz) {
        zz > this.at && this.class && this.span(this.at, zz, this.class)
      }
      highlightRange(zz, uz, bz, nz, iz) {
        let {
          type: lz,
          from: Mz,
          to: tz
        } = zz;
        if (Mz >= bz || tz <= uz) return;
        lz.isTop && (iz = this.highlighters.filter((zz => !zz.scope || zz.scope(lz))));
        let pz = nz,
          dz = function(zz) {
            let uz = zz.type.prop(Hz);
            for (; uz && uz.context && !zz.matchContext(uz.context);) uz = uz.next;
            return uz || null
          }(zz) || Oz.empty,
          Fz = function(zz, uz) {
            let bz = null;
            for (let Ez of zz) {
              let zz = Ez.style(uz);
              zz && (bz = bz ? bz + " " + zz : zz)
            }
            return bz
          }(iz, dz.tags);
        if (Fz && (pz && (pz += " "), pz += Fz, 1 == dz.mode && (nz += (nz ? " " : "") + Fz)), this.startSpan(Math.max(uz, Mz), pz), dz.opaque) return;
        let Zz = zz.tree && zz.tree.prop(Ez.g.mounted);
        if (Zz && Zz.overlay) {
          let Ez = zz.node.enter(Zz.overlay[0].from + Mz, 1),
            lz = this.highlighters.filter((zz => !zz.scope || zz.scope(Zz.tree.type))),
            Hz = zz.firstChild();
          for (let Oz = 0, dz = Mz;; Oz++) {
            let Fz = Oz < Zz.overlay.length ? Zz.overlay[Oz] : null,
              Rz = Fz ? Fz.from + Mz : tz,
              Kz = Math.max(uz, dz),
              wz = Math.min(bz, Rz);
            if (Kz < wz && Hz)
              for (; zz.from < wz && (this.highlightRange(zz, Kz, wz, nz, iz), this.startSpan(Math.min(wz, zz.to), pz), !(zz.to >= Rz) && zz.nextSibling()););
            if (!Fz || Rz > bz) break;
            dz = Fz.to + Mz, dz > uz && (this.highlightRange(Ez.cursor(), Math.max(uz, Fz.from + Mz), Math.min(bz, dz), "", lz), this.startSpan(Math.min(bz, dz), pz))
          }
          Hz && zz.parent()
        } else if (zz.firstChild()) {
          Zz && (nz = "");
          do {
            if (!(zz.to <= uz)) {
              if (zz.from >= bz) break;
              this.highlightRange(zz, uz, bz, nz, iz), this.startSpan(Math.min(bz, zz.to), pz)
            }
          } while (zz.nextSibling());
          zz.parent()
        }
      }
    }
    const Zz = iz.define,
      Rz = Zz(),
      Kz = Zz(),
      wz = Zz(Kz),
      Xz = Zz(Kz),
      fz = Zz(),
      sz = Zz(fz),
      rz = Zz(fz),
      oz = Zz(),
      Nz = Zz(oz),
      vz = Zz(),
      xz = Zz(),
      Jz = Zz(),
      Az = Zz(Jz),
      Tz = Zz(),
      Lz = {
        comment: Rz,
        lineComment: Zz(Rz),
        blockComment: Zz(Rz),
        docComment: Zz(Rz),
        name: Kz,
        variableName: Zz(Kz),
        typeName: wz,
        tagName: Zz(wz),
        propertyName: Xz,
        attributeName: Zz(Xz),
        className: Zz(Kz),
        labelName: Zz(Kz),
        namespace: Zz(Kz),
        macroName: Zz(Kz),
        literal: fz,
        string: sz,
        docString: Zz(sz),
        character: Zz(sz),
        attributeValue: Zz(sz),
        number: rz,
        integer: Zz(rz),
        float: Zz(rz),
        bool: Zz(fz),
        regexp: Zz(fz),
        escape: Zz(fz),
        color: Zz(fz),
        url: Zz(fz),
        keyword: vz,
        self: Zz(vz),
        null: Zz(vz),
        atom: Zz(vz),
        unit: Zz(vz),
        modifier: Zz(vz),
        operatorKeyword: Zz(vz),
        controlKeyword: Zz(vz),
        definitionKeyword: Zz(vz),
        moduleKeyword: Zz(vz),
        operator: xz,
        derefOperator: Zz(xz),
        arithmeticOperator: Zz(xz),
        logicOperator: Zz(xz),
        bitwiseOperator: Zz(xz),
        compareOperator: Zz(xz),
        updateOperator: Zz(xz),
        definitionOperator: Zz(xz),
        typeOperator: Zz(xz),
        controlOperator: Zz(xz),
        punctuation: Jz,
        separator: Zz(Jz),
        bracket: Az,
        angleBracket: Zz(Az),
        squareBracket: Zz(Az),
        paren: Zz(Az),
        brace: Zz(Az),
        content: oz,
        heading: Nz,
        heading1: Zz(Nz),
        heading2: Zz(Nz),
        heading3: Zz(Nz),
        heading4: Zz(Nz),
        heading5: Zz(Nz),
        heading6: Zz(Nz),
        contentSeparator: Zz(oz),
        list: Zz(oz),
        quote: Zz(oz),
        emphasis: Zz(oz),
        strong: Zz(oz),
        link: Zz(oz),
        monospace: Zz(oz),
        strikethrough: Zz(oz),
        inserted: Zz(),
        deleted: Zz(),
        changed: Zz(),
        invalid: Zz(),
        meta: Tz,
        documentMeta: Zz(Tz),
        annotation: Zz(Tz),
        processingInstruction: Zz(Tz),
        definition: iz.defineModifier("definition"),
        constant: iz.defineModifier("constant"),
        function: iz.defineModifier("function"),
        standard: iz.defineModifier("standard"),
        local: iz.defineModifier("local"),
        special: iz.defineModifier("special")
      };
    for (let Pz in Lz) {
      let zz = Lz[Pz];
      zz instanceof iz && (zz.name = Pz)
    }
    pz([{
      tag: Lz.link,
      class: "tok-link"
    }, {
      tag: Lz.heading,
      class: "tok-heading"
    }, {
      tag: Lz.emphasis,
      class: "tok-emphasis"
    }, {
      tag: Lz.strong,
      class: "tok-strong"
    }, {
      tag: Lz.keyword,
      class: "tok-keyword"
    }, {
      tag: Lz.atom,
      class: "tok-atom"
    }, {
      tag: Lz.bool,
      class: "tok-bool"
    }, {
      tag: Lz.url,
      class: "tok-url"
    }, {
      tag: Lz.labelName,
      class: "tok-labelName"
    }, {
      tag: Lz.inserted,
      class: "tok-inserted"
    }, {
      tag: Lz.deleted,
      class: "tok-deleted"
    }, {
      tag: Lz.literal,
      class: "tok-literal"
    }, {
      tag: Lz.string,
      class: "tok-string"
    }, {
      tag: Lz.number,
      class: "tok-number"
    }, {
      tag: [Lz.regexp, Lz.escape, Lz.special(Lz.string)],
      class: "tok-string2"
    }, {
      tag: Lz.variableName,
      class: "tok-variableName"
    }, {
      tag: Lz.local(Lz.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: Lz.definition(Lz.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: Lz.special(Lz.variableName),
      class: "tok-variableName2"
    }, {
      tag: Lz.definition(Lz.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: Lz.typeName,
      class: "tok-typeName"
    }, {
      tag: Lz.namespace,
      class: "tok-namespace"
    }, {
      tag: Lz.className,
      class: "tok-className"
    }, {
      tag: Lz.macroName,
      class: "tok-macroName"
    }, {
      tag: Lz.propertyName,
      class: "tok-propertyName"
    }, {
      tag: Lz.operator,
      class: "tok-operator"
    }, {
      tag: Lz.comment,
      class: "tok-comment"
    }, {
      tag: Lz.meta,
      class: "tok-meta"
    }, {
      tag: Lz.invalid,
      class: "tok-invalid"
    }, {
      tag: Lz.punctuation,
      class: "tok-punctuation"
    }])
  },
  40577: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz.k,
      i: () => lz.t,
      l: () => lz.B,
      n: () => lz.E,
      p: () => Mz.p,
      q: () => Nb,
      r: () => Mz.V,
      s: () => Mz.tb
    });
    var Ez = bz(1352),
      nz = bz(1345),
      iz = bz(56),
      lz = bz(40531),
      Mz = bz(40538),
      tz = bz(40551),
      Hz = bz(40558);

    function Oz(zz, uz) {
      return bz => {
        let {
          state: Ez,
          dispatch: nz
        } = bz;
        if (Ez.readOnly) return !1;
        let iz = zz(uz, Ez);
        return !!iz && (nz(Ez.update(iz)), !0)
      }
    }
    const pz = Oz(wz, 0),
      dz = Oz(Kz, 0),
      Fz = Oz(((zz, uz) => Kz(zz, uz, function(zz) {
        let uz = [];
        for (let bz of zz.selection.al) {
          let Ez = zz.doc.lineAt(bz.from),
            nz = bz.to <= Ez.to ? Ez : zz.doc.lineAt(bz.to);
          nz.from > Ez.from && nz.from == bz.to && (nz = bz.to == Ez.to + 1 ? Ez : zz.doc.lineAt(bz.to - 1));
          let iz = uz.length - 1;
          iz >= 0 && uz[iz].to > Ez.from ? uz[iz].to = nz.to : uz.push({
            from: Ez.from + /^\s*/.exec(Ez.text)[0].length,
            to: nz.to
          })
        }
        return uz
      }(uz))), 0);

    function Zz(zz, uz) {
      let bz = zz.languageDataAt("commentTokens", uz, 1);
      return bz.length ? bz[0] : {}
    }
    const Rz = 50;

    function Kz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uz.selection.al,
        Ez = bz.map((zz => Zz(uz, zz.from).block));
      if (!Ez.every((zz => zz))) return null;
      let nz = bz.map(((zz, bz) => function(zz, uz, bz, Ez) {
        let nz, iz, {
            open: lz,
            close: Mz
          } = uz,
          tz = zz.sliceDoc(bz - Rz, bz),
          Hz = zz.sliceDoc(Ez, Ez + Rz),
          Oz = /\s*$/.exec(tz)[0].length,
          pz = /^\s*/.exec(Hz)[0].length,
          dz = tz.length - Oz;
        if (tz.slice(dz - lz.length, dz) == lz && Hz.slice(pz, pz + Mz.length) == Mz) return {
          open: {
            pos: bz - Oz,
            margin: Oz && 1
          },
          close: {
            pos: Ez + pz,
            margin: pz && 1
          }
        };
        Ez - bz <= 2 * Rz ? nz = iz = zz.sliceDoc(bz, Ez) : (nz = zz.sliceDoc(bz, bz + Rz), iz = zz.sliceDoc(Ez - Rz, Ez));
        let Fz = /^\s*/.exec(nz)[0].length,
          Zz = /\s*$/.exec(iz)[0].length,
          Kz = iz.length - Zz - Mz.length;
        return nz.slice(Fz, Fz + lz.length) == lz && iz.slice(Kz, Kz + Mz.length) == Mz ? {
          open: {
            pos: bz + Fz + lz.length,
            margin: /\s/.test(nz.charAt(Fz + lz.length)) ? 1 : 0
          },
          close: {
            pos: Ez - Zz - Mz.length,
            margin: /\s/.test(iz.charAt(Kz - 1)) ? 1 : 0
          }
        } : null
      }(uz, Ez[bz], zz.from, zz.to)));
      if (2 != zz && !nz.every((zz => zz))) return {
        changes: uz.changes(bz.map(((zz, uz) => nz[uz] ? [] : [{
          from: zz.from,
          insert: Ez[uz].open + " "
        }, {
          from: zz.to,
          insert: " " + Ez[uz].close
        }])))
      };
      if (1 != zz && nz.some((zz => zz))) {
        let zz = [];
        for (let uz, bz = 0; bz < nz.length; bz++)
          if (uz = nz[bz]) {
            let nz = Ez[bz],
              {
                open: iz,
                close: lz
              } = uz;
            zz.push({
              from: iz.pos - nz.open.length,
              to: iz.pos + iz.margin
            }, {
              from: lz.pos - lz.margin,
              to: lz.pos + nz.close.length
            })
          } return {
          changes: zz
        }
      }
      return null
    }

    function wz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uz.selection.al,
        Ez = [],
        nz = -1;
      zz: for (let {
          from: iz,
          to: lz
        }
        of bz) {
        let zz, bz = Ez.length,
          Mz = 1e9;
        for (let tz = iz; tz <= lz;) {
          let bz = uz.doc.lineAt(tz);
          if (void 0 == zz && (zz = Zz(uz, bz.from).line, !zz)) continue zz;
          if (bz.from > nz && (iz == lz || lz > bz.from)) {
            nz = bz.from;
            let uz = /^\s*/.exec(bz.text)[0].length,
              iz = uz == bz.length,
              lz = bz.text.slice(uz, uz + zz.length) == zz ? uz : -1;
            uz < bz.text.length && uz < Mz && (Mz = uz), Ez.push({
              line: bz,
              comment: lz,
              token: zz,
              indent: uz,
              empty: iz,
              single: !1
            })
          }
          tz = bz.to + 1
        }
        if (Mz < 1e9)
          for (let uz = bz; uz < Ez.length; uz++) Ez[uz].indent < Ez[uz].line.text.length && (Ez[uz].indent = Mz);
        Ez.length == bz + 1 && (Ez[bz].single = !0)
      }
      if (2 != zz && Ez.some((zz => zz.comment < 0 && (!zz.empty || zz.single)))) {
        let zz = [];
        for (let {
            line: uz,
            token: nz,
            indent: iz,
            empty: lz,
            single: Mz
          }
          of Ez) !Mz && lz || zz.push({
          from: uz.from + iz,
          insert: nz + " "
        });
        let bz = uz.changes(zz);
        return {
          changes: bz,
          selection: uz.selection.map(bz, 1)
        }
      }
      if (1 != zz && Ez.some((zz => zz.comment >= 0))) {
        let zz = [];
        for (let {
            line: uz,
            comment: bz,
            token: nz
          }
          of Ez)
          if (bz >= 0) {
            let Ez = uz.from + bz,
              iz = Ez + nz.length;
            " " == uz.text[iz - uz.from] && iz++, zz.push({
              from: Ez,
              to: iz
            })
          } return {
          changes: zz
        }
      }
      return null
    }
    const Xz = lz.b.define(),
      fz = lz.b.define(),
      sz = lz.r.define(),
      rz = lz.r.define({
        combine: zz => (0, lz.Q)(zz, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (zz, uz) => uz
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (zz, uz) => (bz, Ez) => zz(bz, Ez) || uz(bz, Ez)
        })
      }),
      oz = lz.E.define({
        create: () => cz.empty,
        update(zz, uz) {
          let bz = uz.state.facet(rz),
            Ez = uz.annotation(Xz);
          if (Ez) {
            let nz = Tz.fromTransaction(uz, Ez.selection),
              iz = Ez.side,
              lz = 0 == iz ? zz.undone : zz.done;
            return lz = nz ? Lz(lz, lz.length, bz.minDepth, nz) : Vz(lz, uz.startState.selection), new cz(0 == iz ? Ez.rest : lz, 0 == iz ? lz : Ez.rest)
          }
          let nz = uz.annotation(fz);
          if ("full" != nz && "before" != nz || (zz = zz.isolate()), !1 === uz.annotation(lz.J.addToHistory)) return uz.changes.empty ? zz : zz.addMapping(uz.changes.desc);
          let iz = Tz.fromTransaction(uz),
            Mz = uz.annotation(lz.J.time),
            tz = uz.annotation(lz.J.userEvent);
          return iz ? zz = zz.addChanges(iz, Mz, tz, bz, uz) : uz.selection && (zz = zz.addSelection(uz.startState.selection, Mz, tz, bz.newGroupDelay)), "full" != nz && "after" != nz || (zz = zz.isolate()), zz
        },
        toJSON: zz => ({
          done: zz.done.map((zz => zz.toJSON())),
          undone: zz.undone.map((zz => zz.toJSON()))
        }),
        fromJSON: zz => new cz(zz.done.map(Tz.fromJSON), zz.undone.map(Tz.fromJSON))
      });

    function Nz(zz, uz) {
      return function(bz) {
        let {
          state: Ez,
          dispatch: nz
        } = bz;
        if (!uz && Ez.readOnly) return !1;
        let iz = Ez.field(oz, !1);
        if (!iz) return !1;
        let lz = iz.pop(zz, Ez, uz);
        return !!lz && (nz(lz), !0)
      }
    }
    const vz = Nz(0, !1),
      xz = Nz(1, !1),
      Jz = Nz(0, !0),
      Az = Nz(1, !0);
    class Tz {
      constructor(zz, uz, bz, Ez, nz) {
        this.changes = zz, this.effects = uz, this.mapped = bz, this.startSelection = Ez, this.selectionsAfter = nz
      }
      setSelAfter(zz) {
        return new Tz(this.changes, this.effects, this.mapped, this.startSelection, zz)
      }
      toJSON() {
        var zz, uz, bz;
        return {
          changes: null === (zz = this.changes) || void 0 === zz ? void 0 : zz.toJSON(),
          mapped: null === (uz = this.mapped) || void 0 === uz ? void 0 : uz.toJSON(),
          startSelection: null === (bz = this.startSelection) || void 0 === bz ? void 0 : bz.toJSON(),
          selectionsAfter: this.selectionsAfter.map((zz => zz.toJSON()))
        }
      }
      static fromJSON(zz) {
        return new Tz(zz.changes && lz.ChangeSet.fromJSON(zz.changes), [], zz.mapped && lz.d.fromJSON(zz.mapped), zz.startSelection && lz.l.fromJSON(zz.startSelection), zz.selectionsAfter.map(lz.l.fromJSON))
      }
      static fromTransaction(zz, uz) {
        let bz = Gz;
        for (let Ez of zz.startState.facet(sz)) {
          let uz = Ez(zz);
          uz.length && (bz = bz.concat(uz))
        }
        return !bz.length && zz.changes.empty ? null : new Tz(zz.changes.invert(zz.startState.doc), bz, void 0, uz || zz.startState.selection, Gz)
      }
      static selection(zz) {
        return new Tz(void 0, Gz, void 0, void 0, zz)
      }
    }

    function Lz(zz, uz, bz, Ez) {
      let nz = uz + 1 > bz + 20 ? uz - bz - 1 : 0,
        iz = zz.slice(nz, uz);
      return iz.push(Ez), iz
    }

    function Pz(zz, uz) {
      return zz.length ? uz.length ? zz.concat(uz) : zz : uz
    }
    const Gz = [],
      az = 200;

    function Vz(zz, uz) {
      if (zz.length) {
        let bz = zz[zz.length - 1],
          Ez = bz.selectionsAfter.slice(Math.max(0, bz.selectionsAfter.length - az));
        return Ez.length && Ez[Ez.length - 1].eq(uz) ? zz : (Ez.push(uz), Lz(zz, zz.length - 1, 1e9, bz.setSelAfter(Ez)))
      }
      return [Tz.selection([uz])]
    }

    function mz(zz) {
      let uz = zz[zz.length - 1],
        bz = zz.slice();
      return bz[zz.length - 1] = uz.setSelAfter(uz.selectionsAfter.slice(0, uz.selectionsAfter.length - 1)), bz
    }

    function qz(zz, uz) {
      if (!zz.length) return zz;
      let bz = zz.length,
        Ez = Gz;
      for (; bz;) {
        let nz = hz(zz[bz - 1], uz, Ez);
        if (nz.changes && !nz.changes.empty || nz.effects.length) {
          let uz = zz.slice(0, bz);
          return uz[bz - 1] = nz, uz
        }
        uz = nz.mapped, bz--, Ez = nz.selectionsAfter
      }
      return Ez.length ? [Tz.selection(Ez)] : Gz
    }

    function hz(zz, uz, bz) {
      let Ez = Pz(zz.selectionsAfter.length ? zz.selectionsAfter.map((zz => zz.map(uz))) : Gz, bz);
      if (!zz.changes) return Tz.selection(Ez);
      let nz = zz.changes.map(uz),
        iz = uz.mapDesc(zz.changes, !0),
        Mz = zz.mapped ? zz.mapped.composeDesc(iz) : iz;
      return new Tz(nz, lz.B.mapEffects(zz.effects, uz), Mz, zz.startSelection.map(iz), Ez)
    }
    const Uz = /^(input\.type|delete)($|\.)/;
    class cz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = zz, this.undone = uz, this.prevTime = bz, this.prevUserEvent = Ez
      }
      isolate() {
        return this.prevTime ? new cz(this.done, this.undone) : this
      }
      addChanges(zz, uz, bz, Ez, nz) {
        let iz = this.done,
          Mz = iz[iz.length - 1];
        return iz = Mz && Mz.changes && !Mz.changes.empty && zz.changes && (!bz || Uz.test(bz)) && (!Mz.selectionsAfter.length && uz - this.prevTime < Ez.newGroupDelay && Ez.joinToEvent(nz, function(zz, uz) {
          let bz = [],
            Ez = !1;
          return zz.iterChangedRanges(((zz, uz) => bz.push(zz, uz))), uz.iterChangedRanges(((zz, uz, nz, iz) => {
            for (let lz = 0; lz < bz.length;) {
              let zz = bz[lz++],
                uz = bz[lz++];
              iz >= zz && nz <= uz && (Ez = !0)
            }
          })), Ez
        }(Mz.changes, zz.changes)) || "input.type.compose" == bz) ? Lz(iz, iz.length - 1, Ez.minDepth, new Tz(zz.changes.compose(Mz.changes), Pz(lz.B.mapEffects(zz.effects, Mz.changes), Mz.effects), Mz.mapped, Mz.startSelection, Gz)) : Lz(iz, iz.length, Ez.minDepth, zz), new cz(iz, Gz, uz, bz)
      }
      addSelection(zz, uz, bz, Ez) {
        let nz = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Gz;
        return nz.length > 0 && uz - this.prevTime < Ez && bz == this.prevUserEvent && bz && /^select($|\.)/.test(bz) && (iz = nz[nz.length - 1], lz = zz, iz.al.length == lz.al.length && 0 === iz.al.filter(((zz, uz) => zz.empty != lz.al[uz].empty)).length) ? this : new cz(Vz(this.done, zz), this.undone, uz, bz);
        var iz, lz
      }
      addMapping(zz) {
        return new cz(qz(this.done, zz), qz(this.undone, zz), this.prevTime, this.prevUserEvent)
      }
      pop(zz, uz, bz) {
        let Ez = 0 == zz ? this.done : this.undone;
        if (0 == Ez.length) return null;
        let nz = Ez[Ez.length - 1],
          iz = nz.selectionsAfter[0] || (nz.startSelection ? nz.startSelection.map(nz.changes.invertedDesc, 1) : uz.selection);
        if (bz && nz.selectionsAfter.length) return uz.update({
          selection: nz.selectionsAfter[nz.selectionsAfter.length - 1],
          annotations: Xz.of({
            side: zz,
            rest: mz(Ez),
            selection: iz
          }),
          userEvent: 0 == zz ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (nz.changes) {
          let bz = 1 == Ez.length ? Gz : Ez.slice(0, Ez.length - 1);
          return nz.mapped && (bz = qz(bz, nz.mapped)), uz.update({
            changes: nz.changes,
            selection: nz.startSelection,
            effects: nz.effects,
            annotations: Xz.of({
              side: zz,
              rest: bz,
              selection: iz
            }),
            filter: !1,
            userEvent: 0 == zz ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    cz.empty = new cz(Gz, Gz);
    const gz = [{
      key: "Mod-z",
      run: vz,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: xz,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: xz,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Jz,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Az,
      preventDefault: !0
    }];

    function Sz(zz, uz) {
      return lz.l.create(zz.al.map(uz), zz.mainIndex)
    }

    function yz(zz, uz) {
      return zz.update({
        selection: uz,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function Dz(zz, uz) {
      let {
        state: bz,
        dispatch: Ez
      } = zz, nz = Sz(bz.selection, uz);
      return !nz.eq(bz.selection, !0) && (Ez(yz(bz, nz)), !0)
    }

    function Qz(zz, uz) {
      return lz.l.cursor(uz ? zz.to : zz.from)
    }

    function Wz(zz, uz) {
      return Dz(zz, (bz => bz.empty ? zz.moveByChar(bz, uz) : Qz(bz, uz)))
    }

    function ez(zz) {
      return zz.textDirectionAt(zz.state.selection.main.head) == Mz.h.LTR
    }
    const jz = zz => Wz(zz, !ez(zz)),
      Iz = zz => Wz(zz, ez(zz));

    function Bz(zz, uz) {
      return Dz(zz, (bz => bz.empty ? zz.moveByGroup(bz, uz) : Qz(bz, uz)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function Cz(zz, uz, bz) {
      if (uz.type.prop(bz)) return !0;
      let Ez = uz.to - uz.from;
      return Ez && (Ez > 2 || /[^\s,.;:]/.test(zz.sliceDoc(uz.from, uz.to))) || uz.firstChild
    }

    function Yz(zz, uz, bz) {
      let Ez, nz, iz = (0, tz.lb)(zz).resolveInner(uz.head),
        Mz = bz ? Hz.g.closedBy : Hz.g.openedBy;
      for (let lz = uz.head;;) {
        let uz = bz ? iz.childAfter(lz) : iz.childBefore(lz);
        if (!uz) break;
        Cz(zz, uz, Mz) ? iz = uz : lz = bz ? uz.to : uz.from
      }
      return nz = iz.type.prop(Mz) && (Ez = bz ? (0, tz._)(zz, iz.from, 1) : (0, tz._)(zz, iz.to, -1)) && Ez.matched ? bz ? Ez.end.to : Ez.end.from : bz ? iz.to : iz.from, lz.l.cursor(nz, bz ? -1 : 1)
    }

    function kz(zz, uz) {
      return Dz(zz, (bz => {
        if (!bz.empty) return Qz(bz, uz);
        let Ez = zz.moveVertically(bz, uz);
        return Ez.head != bz.head ? Ez : zz.moveToLineBoundary(bz, uz)
      }))
    }
    const zu = zz => kz(zz, !1),
      uu = zz => kz(zz, !0);

    function bu(zz) {
      let uz, bz = zz.scrollDOM.clientHeight < zz.scrollDOM.scrollHeight - 2,
        Ez = 0,
        nz = 0;
      if (bz) {
        for (let uz of zz.state.facet(Mz.k.scrollMargins)) {
          let bz = uz(zz);
          (null === bz || void 0 === bz ? void 0 : bz.top) && (Ez = Math.max(null === bz || void 0 === bz ? void 0 : bz.top, Ez)), (null === bz || void 0 === bz ? void 0 : bz.bottom) && (nz = Math.max(null === bz || void 0 === bz ? void 0 : bz.bottom, nz))
        }
        uz = zz.scrollDOM.clientHeight - Ez - nz
      } else uz = (zz.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Ez,
        marginBottom: nz,
        selfScroll: bz,
        height: Math.max(zz.defaultLineHeight, uz - 5)
      }
    }

    function Eu(zz, uz) {
      let bz, Ez = bu(zz),
        {
          state: nz
        } = zz,
        iz = Sz(nz.selection, (bz => bz.empty ? zz.moveVertically(bz, uz, Ez.height) : Qz(bz, uz)));
      if (iz.eq(nz.selection)) return !1;
      if (Ez.selfScroll) {
        let uz = zz.coordsAtPos(nz.selection.main.head),
          lz = zz.scrollDOM.getBoundingClientRect(),
          tz = lz.top + Ez.marginTop,
          Hz = lz.bottom - Ez.marginBottom;
        uz && uz.top > tz && uz.bottom < Hz && (bz = Mz.k.scrollIntoView(iz.main.head, {
          y: "start",
          yMargin: uz.top - tz
        }))
      }
      return zz.dispatch(yz(nz, iz), {
        effects: bz
      }), !0
    }
    const nu = zz => Eu(zz, !1),
      iu = zz => Eu(zz, !0);

    function lu(zz, uz, bz) {
      let Ez = zz.lineBlockAt(uz.head),
        nz = zz.moveToLineBoundary(uz, bz);
      if (nz.head == uz.head && nz.head != (bz ? Ez.to : Ez.from) && (nz = zz.moveToLineBoundary(uz, bz, !1)), !bz && nz.head == Ez.from && Ez.length) {
        let bz = /^\s*/.exec(zz.state.sliceDoc(Ez.from, Math.min(Ez.from + 100, Ez.to)))[0].length;
        bz && uz.head != Ez.from + bz && (nz = lz.l.cursor(Ez.from + bz))
      }
      return nz
    }

    function Mu(zz, uz, bz) {
      let Ez = !1,
        nz = Sz(zz.selection, (uz => {
          let nz = (0, tz._)(zz, uz.head, -1) || (0, tz._)(zz, uz.head, 1) || uz.head > 0 && (0, tz._)(zz, uz.head - 1, 1) || uz.head < zz.doc.length && (0, tz._)(zz, uz.head + 1, -1);
          if (!nz || !nz.end) return uz;
          Ez = !0;
          let iz = nz.start.from == uz.head ? nz.end.to : nz.end.from;
          return bz ? lz.l.range(uz.anchor, iz) : lz.l.cursor(iz)
        }));
      return !!Ez && (uz(yz(zz, nz)), !0)
    }

    function tu(zz, uz) {
      let bz = Sz(zz.state.selection, (zz => {
        let bz = uz(zz);
        return lz.l.range(zz.anchor, bz.head, bz.goalColumn, bz.bidiLevel || void 0, bz.assoc)
      }));
      return !bz.eq(zz.state.selection) && (zz.dispatch(yz(zz.state, bz)), !0)
    }

    function Hu(zz, uz) {
      return tu(zz, (bz => zz.moveByChar(bz, uz)))
    }
    const Ou = zz => Hu(zz, !ez(zz)),
      pu = zz => Hu(zz, ez(zz));

    function du(zz, uz) {
      return tu(zz, (bz => zz.moveByGroup(bz, uz)))
    }

    function Fu(zz, uz) {
      return tu(zz, (bz => zz.moveVertically(bz, uz)))
    }
    const Zu = zz => Fu(zz, !1),
      Ru = zz => Fu(zz, !0);

    function Ku(zz, uz) {
      return tu(zz, (bz => zz.moveVertically(bz, uz, bu(zz).height)))
    }
    const wu = zz => Ku(zz, !1),
      Xu = zz => Ku(zz, !0),
      fu = zz => {
        let {
          state: uz,
          dispatch: bz
        } = zz;
        return bz(yz(uz, {
          anchor: 0
        })), !0
      },
      su = zz => {
        let {
          state: uz,
          dispatch: bz
        } = zz;
        return bz(yz(uz, {
          anchor: uz.doc.length
        })), !0
      },
      ru = zz => {
        let {
          state: uz,
          dispatch: bz
        } = zz;
        return bz(yz(uz, {
          anchor: uz.selection.main.anchor,
          head: 0
        })), !0
      },
      ou = zz => {
        let {
          state: uz,
          dispatch: bz
        } = zz;
        return bz(yz(uz, {
          anchor: uz.selection.main.anchor,
          head: uz.doc.length
        })), !0
      };

    function Nu(zz, uz) {
      let {
        state: bz
      } = zz, Ez = bz.selection, nz = bz.selection.al.slice();
      for (let iz of bz.selection.al) {
        let Ez = bz.doc.lineAt(iz.head);
        if (uz ? Ez.to < zz.state.doc.length : Ez.from > 0)
          for (let bz = iz;;) {
            let iz = zz.moveVertically(bz, uz);
            if (iz.head < Ez.from || iz.head > Ez.to) {
              nz.some((zz => zz.head == iz.head)) || nz.push(iz);
              break
            }
            if (iz.head == bz.head) break;
            bz = iz
          }
      }
      return nz.length != Ez.al.length && (zz.dispatch(yz(bz, lz.l.create(nz, nz.length - 1))), !0)
    }

    function vu(zz, uz) {
      if (zz.state.readOnly) return !1;
      let bz = "delete.selection",
        {
          state: Ez
        } = zz,
        nz = Ez.changeByRange((Ez => {
          let {
            from: nz,
            to: iz
          } = Ez;
          if (nz == iz) {
            let lz = uz(Ez);
            lz < nz ? (bz = "delete.backward", lz = xu(zz, lz, !1)) : lz > nz && (bz = "delete.forward", lz = xu(zz, lz, !0)), nz = Math.min(nz, lz), iz = Math.max(iz, lz)
          } else nz = xu(zz, nz, !1), iz = xu(zz, iz, !0);
          return nz == iz ? {
            range: Ez
          } : {
            changes: {
              from: nz,
              to: iz
            },
            range: lz.l.cursor(nz, nz < Ez.head ? -1 : 1)
          }
        }));
      return !nz.changes.empty && (zz.dispatch(Ez.update(nz, {
        scrollIntoView: !0,
        userEvent: bz,
        effects: "delete.selection" == bz ? Mz.k.announce.of(Ez.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function xu(zz, uz, bz) {
      if (zz instanceof Mz.k)
        for (let Ez of zz.state.facet(Mz.k.atomicRanges).map((uz => uz(zz)))) Ez.between(uz, uz, ((zz, Ez) => {
          zz < uz && Ez > uz && (uz = bz ? Ez : zz)
        }));
      return uz
    }
    const Ju = (zz, uz, bz) => vu(zz, (Ez => {
        let nz, iz, Mz = Ez.from,
          {
            state: Hz
          } = zz,
          Oz = Hz.doc.lineAt(Mz);
        if (bz && !uz && Mz > Oz.from && Mz < Oz.from + 200 && !/[^ \t]/.test(nz = Oz.text.slice(0, Mz - Oz.from))) {
          if ("\t" == nz[nz.length - 1]) return Mz - 1;
          let zz = (0, lz.R)(nz, Hz.tabSize) % (0, tz.K)(Hz) || (0, tz.K)(Hz);
          for (let uz = 0; uz < zz && " " == nz[nz.length - 1 - uz]; uz++) Mz--;
          iz = Mz
        } else iz = (0, lz.U)(Oz.text, Mz - Oz.from, uz, uz) + Oz.from, iz == Mz && Oz.number != (uz ? Hz.doc.lines : 1) ? iz += uz ? 1 : -1 : !uz && /[\ufe00-\ufe0f]/.test(Oz.text.slice(iz - Oz.from, Mz - Oz.from)) && (iz = (0, lz.U)(Oz.text, iz - Oz.from, !1, !1) + Oz.from);
        return iz
      })),
      Au = zz => Ju(zz, !1, !0),
      Tu = zz => Ju(zz, !0, !1),
      Lu = (zz, uz) => vu(zz, (bz => {
        let Ez = bz.head,
          {
            state: nz
          } = zz,
          iz = nz.doc.lineAt(Ez),
          Mz = nz.charCategorizer(Ez);
        for (let zz = null;;) {
          if (Ez == (uz ? iz.to : iz.from)) {
            Ez == bz.head && iz.number != (uz ? nz.doc.lines : 1) && (Ez += uz ? 1 : -1);
            break
          }
          let tz = (0, lz.U)(iz.text, Ez - iz.from, uz) + iz.from,
            Hz = iz.text.slice(Math.min(Ez, tz) - iz.from, Math.max(Ez, tz) - iz.from),
            Oz = Mz(Hz);
          if (null != zz && Oz != zz) break;
          " " == Hz && Ez == bz.head || (zz = Oz), Ez = tz
        }
        return Ez
      })),
      Pu = zz => Lu(zz, !1);

    function Gu(zz) {
      let uz = [],
        bz = -1;
      for (let Ez of zz.selection.al) {
        let nz = zz.doc.lineAt(Ez.from),
          iz = zz.doc.lineAt(Ez.to);
        if (Ez.empty || Ez.to != iz.from || (iz = zz.doc.lineAt(Ez.to - 1)), bz >= nz.number) {
          let zz = uz[uz.length - 1];
          zz.to = iz.to, zz.al.push(Ez)
        } else uz.push({
          from: nz.from,
          to: iz.to,
          al: [Ez]
        });
        bz = iz.number + 1
      }
      return uz
    }

    function au(zz, uz, bz) {
      if (zz.readOnly) return !1;
      let Ez = [],
        nz = [];
      for (let iz of Gu(zz)) {
        if (bz ? iz.to == zz.doc.length : 0 == iz.from) continue;
        let uz = zz.doc.lineAt(bz ? iz.to + 1 : iz.from - 1),
          Mz = uz.length + 1;
        if (bz) {
          Ez.push({
            from: iz.to,
            to: uz.to
          }, {
            from: iz.from,
            insert: uz.text + zz.lineBreak
          });
          for (let uz of iz.al) nz.push(lz.l.range(Math.min(zz.doc.length, uz.anchor + Mz), Math.min(zz.doc.length, uz.head + Mz)))
        } else {
          Ez.push({
            from: uz.from,
            to: iz.from
          }, {
            from: iz.to,
            insert: zz.lineBreak + uz.text
          });
          for (let zz of iz.al) nz.push(lz.l.range(zz.anchor - Mz, zz.head - Mz))
        }
      }
      return !!Ez.length && (uz(zz.update({
        changes: Ez,
        scrollIntoView: !0,
        selection: lz.l.create(nz, zz.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function Vu(zz, uz, bz) {
      if (zz.readOnly) return !1;
      let Ez = [];
      for (let iz of Gu(zz)) bz ? Ez.push({
        from: iz.from,
        insert: zz.doc.slice(iz.from, iz.to) + zz.lineBreak
      }) : Ez.push({
        from: iz.to,
        insert: zz.lineBreak + zz.doc.slice(iz.from, iz.to)
      });
      let nz = zz.changes(Ez);
      return uz(zz.update({
        changes: nz,
        selection: zz.selection.map(nz, bz ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const mu = qu(!1);

    function qu(zz) {
      return uz => {
        let {
          state: bz,
          dispatch: Ez
        } = uz;
        if (bz.readOnly) return !1;
        let nz = bz.changeByRange((uz => {
          let {
            from: Ez,
            to: nz
          } = uz, iz = bz.doc.lineAt(Ez), Mz = !zz && Ez == nz && function(zz, uz) {
            if (/\(\)|\[\]|\{\}/.test(zz.sliceDoc(uz - 1, uz + 1))) return {
              from: uz,
              to: uz
            };
            let bz, Ez = (0, tz.lb)(zz).resolveInner(uz),
              nz = Ez.childBefore(uz),
              iz = Ez.childAfter(uz);
            return nz && iz && nz.to <= uz && iz.from >= uz && (bz = nz.type.prop(Hz.g.closedBy)) && bz.indexOf(iz.name) > -1 && zz.doc.lineAt(nz.to).from == zz.doc.lineAt(iz.from).from && !/\S/.test(zz.sliceDoc(nz.to, iz.from)) ? {
              from: nz.to,
              to: iz.from
            } : null
          }(bz, Ez);
          zz && (Ez = nz = (nz <= iz.to ? iz : bz.doc.lineAt(nz)).to);
          let Oz = new tz.f(bz, {
              simulateBreak: Ez,
              simulateDoubleBreak: !!Mz
            }),
            pz = (0, tz.M)(Oz, Ez);
          for (null == pz && (pz = (0, lz.R)(/^\s*/.exec(bz.doc.lineAt(Ez).text)[0], bz.tabSize)); nz < iz.to && /\s/.test(iz.text[nz - iz.from]);) nz++;
          Mz ? ({
            from: Ez,
            to: nz
          } = Mz) : Ez > iz.from && Ez < iz.from + 100 && !/\S/.test(iz.text.slice(0, Ez)) && (Ez = iz.from);
          let dz = ["", (0, tz.X)(bz, pz)];
          return Mz && dz.push((0, tz.X)(bz, Oz.lineIndent(iz.from, -1))), {
            changes: {
              from: Ez,
              to: nz,
              insert: lz.I.of(dz)
            },
            range: lz.l.cursor(Ez + 1 + dz[1].length)
          }
        }));
        return Ez(bz.update(nz, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function hu(zz, uz) {
      let bz = -1;
      return zz.changeByRange((Ez => {
        let nz = [];
        for (let lz = Ez.from; lz <= Ez.to;) {
          let iz = zz.doc.lineAt(lz);
          iz.number > bz && (Ez.empty || Ez.to > iz.from) && (uz(iz, nz, Ez), bz = iz.number), lz = iz.to + 1
        }
        let iz = zz.changes(nz);
        return {
          changes: nz,
          range: lz.l.range(iz.mapPos(Ez.anchor, 1), iz.mapPos(Ez.head, 1))
        }
      }))
    }
    const Uu = zz => {
        let {
          state: uz,
          dispatch: bz
        } = zz;
        return !uz.readOnly && (bz(uz.update(hu(uz, ((zz, bz) => {
          bz.push({
            from: zz.from,
            insert: uz.facet(tz.Y)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      cu = zz => {
        let {
          state: uz,
          dispatch: bz
        } = zz;
        return !uz.readOnly && (bz(uz.update(hu(uz, ((zz, bz) => {
          let Ez = /^\s*/.exec(zz.text)[0];
          if (!Ez) return;
          let nz = (0, lz.R)(Ez, uz.tabSize),
            iz = 0,
            Mz = (0, tz.X)(uz, Math.max(0, nz - (0, tz.K)(uz)));
          for (; iz < Ez.length && iz < Mz.length && Ez.charCodeAt(iz) == Mz.charCodeAt(iz);) iz++;
          bz.push({
            from: zz.from + iz,
            to: zz.from + Ez.length,
            insert: Mz.slice(iz)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      gu = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: zz => Dz(zz, (uz => Yz(zz.state, uz, !ez(zz)))),
        shift: zz => tu(zz, (uz => Yz(zz.state, uz, !ez(zz))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: zz => Dz(zz, (uz => Yz(zz.state, uz, ez(zz)))),
        shift: zz => tu(zz, (uz => Yz(zz.state, uz, ez(zz))))
      }, {
        key: "Alt-ArrowUp",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz;
          return au(uz, bz, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz;
          return Vu(uz, bz, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz;
          return au(uz, bz, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz;
          return Vu(uz, bz, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: zz => Nu(zz, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: zz => Nu(zz, !0)
      }, {
        key: "Escape",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz, Ez = uz.selection, nz = null;
          return Ez.al.length > 1 ? nz = lz.l.create([Ez.main]) : Ez.main.empty || (nz = lz.l.create([lz.l.cursor(Ez.main.head)])), !!nz && (bz(yz(uz, nz)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: qu(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz, Ez = Gu(uz).map((zz => {
            let {
              from: bz,
              to: Ez
            } = zz;
            return lz.l.range(bz, Math.min(Ez + 1, uz.doc.length))
          }));
          return bz(uz.update({
            selection: lz.l.create(Ez),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz, Ez = Sz(uz.selection, (zz => {
            let bz = (0, tz.lb)(uz),
              Ez = bz.resolveStack(zz.from, 1);
            if (zz.empty) {
              let uz = bz.resolveStack(zz.from, -1);
              uz.node.from >= Ez.node.from && uz.node.to <= Ez.node.to && (Ez = uz)
            }
            for (let uz = Ez; uz; uz = uz.next) {
              let {
                node: bz
              } = uz;
              if ((bz.from < zz.from && bz.to >= zz.to || bz.to > zz.to && bz.from <= zz.from) && uz.next) return lz.l.range(bz.to, bz.from)
            }
            return zz
          }));
          return !Ez.eq(uz.selection) && (bz(yz(uz, Ez)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: cu
      }, {
        key: "Mod-]",
        run: Uu
      }, {
        key: "Mod-Alt-\\",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz;
          if (uz.readOnly) return !1;
          let Ez = Object.create(null),
            nz = new tz.f(uz, {
              overrideIndentation: zz => {
                let uz = Ez[zz];
                return null == uz ? -1 : uz
              }
            }),
            iz = hu(uz, ((zz, bz, iz) => {
              let lz = (0, tz.M)(nz, zz.from);
              if (null == lz) return;
              /\S/.test(zz.text) || (lz = 0);
              let Mz = /^\s*/.exec(zz.text)[0],
                Hz = (0, tz.X)(uz, lz);
              (Mz != Hz || iz.from < zz.from + Mz.length) && (Ez[zz.from] = lz, bz.push({
                from: zz.from,
                to: zz.from + Mz.length,
                insert: Hz
              }))
            }));
          return iz.changes.empty || bz(uz.update(iz, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: zz => {
          if (zz.state.readOnly) return !1;
          let {
            state: uz
          } = zz, bz = uz.changes(Gu(uz).map((zz => {
            let {
              from: bz,
              to: Ez
            } = zz;
            return bz > 0 ? bz-- : Ez < uz.doc.length && Ez++, {
              from: bz,
              to: Ez
            }
          }))), Ez = Sz(uz.selection, (uz => {
            let bz;
            if (zz.lineWrapping) {
              let Ez = zz.lineBlockAt(uz.head),
                nz = zz.coordsAtPos(uz.head, uz.assoc || 1);
              nz && (bz = Ez.bottom + zz.documentTop - nz.bottom + zz.defaultLineHeight / 2)
            }
            return zz.moveVertically(uz, !0, bz)
          })).map(bz);
          return zz.dispatch({
            changes: bz,
            selection: Ez,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz;
          return Mu(uz, bz, !1)
        }
      }, {
        key: "Mod-/",
        run: zz => {
          let {
            state: uz
          } = zz, bz = uz.doc.lineAt(uz.selection.main.from), Ez = Zz(zz.state, bz.from);
          return Ez.line ? pz(zz) : !!Ez.block && Fz(zz)
        }
      }, {
        key: "Alt-A",
        run: dz
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: zz => (zz.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: jz,
        shift: Ou,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: zz => Bz(zz, !ez(zz)),
        shift: zz => du(zz, !ez(zz)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: zz => Dz(zz, (uz => lu(zz, uz, !ez(zz)))),
        shift: zz => tu(zz, (uz => lu(zz, uz, !ez(zz)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: Iz,
        shift: pu,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: zz => Bz(zz, ez(zz)),
        shift: zz => du(zz, ez(zz)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: zz => Dz(zz, (uz => lu(zz, uz, ez(zz)))),
        shift: zz => tu(zz, (uz => lu(zz, uz, ez(zz)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: zu,
        shift: Zu,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: fu,
        shift: ru
      }, {
        mac: "Ctrl-ArrowUp",
        run: nu,
        shift: wu
      }, {
        key: "ArrowDown",
        run: uu,
        shift: Ru,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: su,
        shift: ou
      }, {
        mac: "Ctrl-ArrowDown",
        run: iu,
        shift: Xu
      }, {
        key: "PageUp",
        run: nu,
        shift: wu
      }, {
        key: "PageDown",
        run: iu,
        shift: Xu
      }, {
        key: "Home",
        run: zz => Dz(zz, (uz => lu(zz, uz, !1))),
        shift: zz => tu(zz, (uz => lu(zz, uz, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: fu,
        shift: ru
      }, {
        key: "End",
        run: zz => Dz(zz, (uz => lu(zz, uz, !0))),
        shift: zz => tu(zz, (uz => lu(zz, uz, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: su,
        shift: ou
      }, {
        key: "Enter",
        run: mu,
        shift: mu
      }, {
        key: "Mod-a",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz;
          return bz(uz.update({
            selection: {
              anchor: 0,
              head: uz.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Au,
        shift: Au,
        preventDefault: !0
      }, {
        key: "Delete",
        run: Tu,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Pu,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: zz => Lu(zz, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: zz => vu(zz, (uz => {
          let bz = zz.moveToLineBoundary(uz, !1).head;
          return uz.head > bz ? bz : Math.max(0, uz.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: zz => vu(zz, (uz => {
          let bz = zz.moveToLineBoundary(uz, !0).head;
          return uz.head < bz ? bz : Math.min(zz.state.doc.length, uz.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: jz,
        shift: Ou,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: Iz,
        shift: pu
      }, {
        key: "Ctrl-p",
        run: zu,
        shift: Zu
      }, {
        key: "Ctrl-n",
        run: uu,
        shift: Ru
      }, {
        key: "Ctrl-a",
        run: zz => Dz(zz, (uz => lz.l.cursor(zz.lineBlockAt(uz.head).from, 1))),
        shift: zz => tu(zz, (uz => lz.l.cursor(zz.lineBlockAt(uz.head).from)))
      }, {
        key: "Ctrl-e",
        run: zz => Dz(zz, (uz => lz.l.cursor(zz.lineBlockAt(uz.head).to, -1))),
        shift: zz => tu(zz, (uz => lz.l.cursor(zz.lineBlockAt(uz.head).to)))
      }, {
        key: "Ctrl-d",
        run: Tu
      }, {
        key: "Ctrl-h",
        run: Au
      }, {
        key: "Ctrl-k",
        run: zz => vu(zz, (uz => {
          let bz = zz.lineBlockAt(uz.head).to;
          return uz.head < bz ? bz : Math.min(zz.state.doc.length, uz.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: Pu
      }, {
        key: "Ctrl-o",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz;
          if (uz.readOnly) return !1;
          let Ez = uz.changeByRange((zz => ({
            changes: {
              from: zz.from,
              to: zz.to,
              insert: lz.I.of(["", ""])
            },
            range: lz.l.cursor(zz.from)
          })));
          return bz(uz.update(Ez, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: zz => {
          let {
            state: uz,
            dispatch: bz
          } = zz;
          if (uz.readOnly) return !1;
          let Ez = uz.changeByRange((zz => {
            if (!zz.empty || 0 == zz.from || zz.from == uz.doc.length) return {
              range: zz
            };
            let bz = zz.from,
              Ez = uz.doc.lineAt(bz),
              nz = bz == Ez.from ? bz - 1 : (0, lz.U)(Ez.text, bz - Ez.from, !1) + Ez.from,
              iz = bz == Ez.to ? bz + 1 : (0, lz.U)(Ez.text, bz - Ez.from, !0) + Ez.from;
            return {
              changes: {
                from: nz,
                to: iz,
                insert: uz.doc.slice(bz, iz).append(uz.doc.slice(nz, bz))
              },
              range: lz.l.cursor(iz)
            }
          }));
          return !Ez.changes.empty && (bz(uz.update(Ez, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: iu
      }].map((zz => ({
        mac: zz.key,
        run: zz.run,
        shift: zz.shift
      }))))),
      Su = {
        key: "Tab",
        run: Uu,
        shift: cu
      };
    var yu = bz(40582),
      Du = bz(40524),
      Qu = bz(40590),
      Wu = function(zz) {
        void 0 === zz && (zz = {});
        var {
          crosshairCursor: uz = !1
        } = zz, bz = [];
        !1 !== zz.closeBracketsKeymap && (bz = bz.concat(Du.e)), !1 !== zz.defaultKeymap && (bz = bz.concat(gu)), !1 !== zz.searchKeymap && (bz = bz.concat(yu.g)), !1 !== zz.historyKeymap && (bz = bz.concat(gz)), !1 !== zz.foldKeymap && (bz = bz.concat(tz.D)), !1 !== zz.completionKeymap && (bz = bz.concat(Du.q)), !1 !== zz.lintKeymap && (bz = bz.concat(Qu.e));
        var Ez = [];
        return !1 !== zz.lineNumbers && Ez.push((0, Mz.ab)()), !1 !== zz.highlightActiveLineGutter && Ez.push((0, Mz.N)()), !1 !== zz.highlightSpecialChars && Ez.push((0, Mz.T)()), !1 !== zz.history && Ez.push(function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [oz, rz.of(zz), Mz.k.domEventHandlers({
            beforeinput(zz, uz) {
              let bz = "historyUndo" == zz.inputType ? vz : "historyRedo" == zz.inputType ? xz : null;
              return !!bz && (zz.preventDefault(), bz(uz))
            }
          })]
        }()), !1 !== zz.foldGutter && Ez.push((0, tz.A)()), !1 !== zz.drawSelection && Ez.push((0, Mz.A)()), !1 !== zz.dropCursor && Ez.push((0, Mz.B)()), !1 !== zz.allowMultipleSelections && Ez.push(lz.n.allowMultipleSelections.of(!0)), !1 !== zz.indentOnInput && Ez.push((0, tz.U)()), !1 !== zz.syntaxHighlighting && Ez.push((0, tz.eb)(tz.r, {
          fallback: !0
        })), !1 !== zz.bracketMatching && Ez.push((0, tz.l)()), !1 !== zz.closeBrackets && Ez.push((0, Du.i)()), !1 !== zz.autocompletion && Ez.push((0, Du.c)()), !1 !== zz.rectangularSelection && Ez.push((0, Mz.ib)()), !1 !== uz && Ez.push((0, Mz.x)()), !1 !== zz.highlightActiveLine && Ez.push((0, Mz.P)()), !1 !== zz.highlightSelectionMatches && Ez.push((0, yu.e)()), zz.tabSize && "number" === typeof zz.tabSize && Ez.push(tz.Y.of(" ".repeat(zz.tabSize))), Ez.concat([Mz.Y.of(bz.flat())]).filter(Boolean)
      },
      eu = bz(40566);
    const ju = "#e5c07b",
      Iu = "#e06c75",
      Bu = "#56b6c2",
      Cu = "#ffffff",
      Yu = "#abb2bf",
      ku = "#7d8799",
      zb = "#61afef",
      ub = "#98c379",
      bb = "#d19a66",
      Eb = "#c678dd",
      nb = "#21252b",
      ib = "#2c313a",
      lb = "#282c34",
      Mb = "#353a42",
      tb = "#3E4451",
      Hb = "#528bff",
      Ob = Mz.k.theme({
        "&": {
          color: Yu,
          backgroundColor: lb
        },
        ".cm-content": {
          caretColor: Hb
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Hb
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: tb
        },
        ".cm-panels": {
          backgroundColor: nb,
          color: Yu
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
          backgroundColor: lb,
          color: ku,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: ib
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Mb
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Mb,
          borderBottomColor: Mb
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: ib,
            color: Yu
          }
        }
      }, {
        dark: !0
      }),
      pb = tz.d.define([{
        tag: eu.i.keyword,
        color: Eb
      }, {
        tag: [eu.i.name, eu.i.deleted, eu.i.character, eu.i.propertyName, eu.i.macroName],
        color: Iu
      }, {
        tag: [eu.i.function(eu.i.variableName), eu.i.labelName],
        color: zb
      }, {
        tag: [eu.i.color, eu.i.constant(eu.i.name), eu.i.standard(eu.i.name)],
        color: bb
      }, {
        tag: [eu.i.definition(eu.i.name), eu.i.separator],
        color: Yu
      }, {
        tag: [eu.i.typeName, eu.i.className, eu.i.number, eu.i.changed, eu.i.annotation, eu.i.modifier, eu.i.self, eu.i.namespace],
        color: ju
      }, {
        tag: [eu.i.operator, eu.i.operatorKeyword, eu.i.url, eu.i.escape, eu.i.regexp, eu.i.link, eu.i.special(eu.i.string)],
        color: Bu
      }, {
        tag: [eu.i.meta, eu.i.comment],
        color: ku
      }, {
        tag: eu.i.strong,
        fontWeight: "bold"
      }, {
        tag: eu.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: eu.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: eu.i.link,
        color: ku,
        textDecoration: "underline"
      }, {
        tag: eu.i.heading,
        fontWeight: "bold",
        color: Iu
      }, {
        tag: [eu.i.atom, eu.i.bool, eu.i.special(eu.i.variableName)],
        color: bb
      }, {
        tag: [eu.i.processingInstruction, eu.i.string, eu.i.inserted],
        color: ub
      }, {
        tag: eu.i.invalid,
        color: Cu
      }]),
      db = [Ob, (0, tz.eb)(pb)];
    var Fb = Mz.k.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Zb {
      constructor(zz, uz) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = uz, this.timeoutMS = uz, this.callbacks.push(zz)
      }
      sd() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var zz = this.callbacks.slice();
          this.callbacks.length = 0, zz.forEach((zz => {
            try {
              zz()
            } catch (uz) {
              console.error("TimeoutLatch callback error:", uz)
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
    class Rb {
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
            zz.sd(), zz.isDone && this.remove(zz)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Kb = null,
      wb = lz.b.define(),
      Xb = [];

    function fb(zz) {
      var {
        value: uz,
        selection: bz,
        onChange: Ez,
        onStatistics: nz,
        onCreateEditor: tz,
        onUpdate: Hz,
        extensions: Oz = Xb,
        autoFocus: pz,
        theme: dz = "light",
        height: Fz = null,
        minHeight: Zz = null,
        maxHeight: Rz = null,
        width: Kz = null,
        minWidth: wz = null,
        maxWidth: Xz = null,
        placeholder: fz = "",
        editable: sz = !0,
        readOnly: rz = !1,
        indentWithTab: oz = !0,
        basicSetup: Nz = !0,
        root: vz,
        initialState: xz
      } = zz, [Jz, Az] = (0, iz.useState)(), [Tz, Lz] = (0, iz.useState)(), [Pz, Gz] = (0, iz.useState)(), az = (0, iz.useState)((() => ({
        current: null
      })))[0], Vz = (0, iz.useState)((() => ({
        current: null
      })))[0], mz = Mz.k.theme({
        "&": {
          height: Fz,
          minHeight: Zz,
          maxHeight: Rz,
          width: Kz,
          minWidth: wz,
          maxWidth: Xz
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), qz = Mz.k.updateListener.of((zz => {
        if (zz.docChanged && "function" === typeof Ez && !zz.transactions.some((zz => zz.annotation(wb)))) {
          az.current ? az.current.reset() : (az.current = new Zb((() => {
            if (Vz.current) {
              var zz = Vz.current;
              Vz.current = null, zz()
            }
            az.current = null
          }), 200), ("undefined" === typeof window ? new Rb : (Kb || (Kb = new Rb), Kb)).add(az.current));
          var uz = zz.state.doc.toString();
          Ez(uz, zz)
        }
        nz && nz((zz => ({
          line: zz.state.doc.lineAt(zz.state.selection.main.from),
          lineCount: zz.state.doc.lines,
          lineBreak: zz.state.lineBreak,
          length: zz.state.doc.length,
          readOnly: zz.state.readOnly,
          tabSize: zz.state.tabSize,
          selection: zz.state.selection,
          selectionAsSingle: zz.state.selection.asSingle().main,
          al: zz.state.selection.al,
          selectionCode: zz.state.sliceDoc(zz.state.selection.main.from, zz.state.selection.main.to),
          selections: zz.state.selection.al.map((uz => zz.state.sliceDoc(uz.from, uz.to))),
          selectedText: zz.state.selection.al.some((zz => !zz.empty))
        }))(zz))
      })), hz = function(zz) {
        void 0 === zz && (zz = {});
        var {
          indentWithTab: uz = !0,
          editable: bz = !0,
          readOnly: Ez = !1,
          theme: nz = "light",
          placeholder: iz = "",
          basicSetup: tz = !0
        } = zz, Hz = [];
        switch (uz && Hz.unshift(Mz.Y.of([Su])), tz && ("boolean" === typeof tz ? Hz.unshift(Wu()) : Hz.unshift(Wu(tz))), iz && Hz.unshift((0, Mz.fb)(iz)), nz) {
          case "light":
            Hz.push(Fb);
            break;
          case "dark":
            Hz.push(db);
            break;
          case "none":
            break;
          default:
            Hz.push(nz)
        }
        return !1 === bz && Hz.push(Mz.k.editable.of(!1)), Ez && Hz.push(lz.n.readOnly.of(!0)), [...Hz]
      }({
        theme: dz,
        editable: sz,
        readOnly: rz,
        placeholder: fz,
        indentWithTab: oz,
        basicSetup: Nz
      }), Uz = [qz, mz, ...hz];
      return Hz && "function" === typeof Hz && Uz.push(Mz.k.updateListener.of(Hz)), Uz = Uz.concat(Oz), (0, iz.useLayoutEffect)((() => {
        if (Jz && !Pz) {
          var zz = {
              doc: uz,
              selection: bz,
              extensions: Uz
            },
            Ez = xz ? lz.n.fromJSON(xz.json, zz, xz.fields) : lz.n.create(zz);
          if (Gz(Ez), !Tz) {
            var nz = new Mz.k({
              state: Ez,
              parent: Jz,
              root: vz
            });
            Lz(nz), tz && tz(nz, Ez)
          }
        }
        return () => {
          Tz && (Gz(void 0), Lz(void 0))
        }
      }), [Jz, Pz]), (0, iz.useEffect)((() => {
        zz.container && Az(zz.container)
      }), [zz.container]), (0, iz.useEffect)((() => () => {
        Tz && (Tz.destroy(), Lz(void 0)), az.current && (az.current.cancel(), az.current = null)
      }), [Tz]), (0, iz.useEffect)((() => {
        pz && Tz && Tz.focus()
      }), [pz, Tz]), (0, iz.useEffect)((() => {
        Tz && Tz.dispatch({
          effects: lz.B.reconfigure.of(Uz)
        })
      }), [dz, Oz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, Ez, Hz]), (0, iz.useEffect)((() => {
        if (void 0 !== uz) {
          var zz = Tz ? Tz.state.doc.toString() : "";
          if (Tz && uz !== zz) {
            var bz = () => {
              Tz && uz !== Tz.state.doc.toString() && Tz.dispatch({
                changes: {
                  from: 0,
                  to: Tz.state.doc.toString().length,
                  insert: uz || ""
                },
                annotations: [wb.of(!0)]
              })
            };
            az.current && !az.current.isDone ? Vz.current = bz : bz()
          }
        }
      }), [uz, Tz]), {
        state: Pz,
        setState: Gz,
        view: Tz,
        setView: Lz,
        container: Jz,
        setContainer: Az
      }
    }
    var sb = bz(1089),
      rb = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      ob = (0, iz.forwardRef)(((zz, uz) => {
        var {
          className: bz,
          value: lz = "",
          selection: Mz,
          extensions: tz = [],
          onChange: Hz,
          onStatistics: Oz,
          onCreateEditor: pz,
          onUpdate: dz,
          autoFocus: Fz,
          theme: Zz = "light",
          height: Rz,
          minHeight: Kz,
          maxHeight: wz,
          width: Xz,
          minWidth: fz,
          maxWidth: sz,
          basicSetup: rz,
          placeholder: oz,
          indentWithTab: Nz,
          editable: vz,
          readOnly: xz,
          root: Jz,
          initialState: Az
        } = zz, Tz = (0, nz.b)(zz, rb), Lz = (0, iz.useRef)(null), {
          state: Pz,
          view: Gz,
          container: az,
          setContainer: Vz
        } = fb({
          root: Jz,
          value: lz,
          autoFocus: Fz,
          theme: Zz,
          height: Rz,
          minHeight: Kz,
          maxHeight: wz,
          width: Xz,
          minWidth: fz,
          maxWidth: sz,
          basicSetup: rz,
          placeholder: oz,
          indentWithTab: Nz,
          editable: vz,
          readOnly: xz,
          selection: Mz,
          onChange: Hz,
          onStatistics: Oz,
          onCreateEditor: pz,
          onUpdate: dz,
          extensions: tz,
          initialState: Az
        });
        (0, iz.useImperativeHandle)(uz, (() => ({
          editor: Lz.current,
          state: Pz,
          view: Gz
        })), [Lz, az, Pz, Gz]);
        var mz = (0, iz.useCallback)((zz => {
          Lz.current = zz, Vz(zz)
        }), [Vz]);
        if ("string" !== typeof lz) throw new Error("value must be typeof string but got " + typeof lz);
        var qz = "string" === typeof Zz ? "cm-theme-" + Zz : "cm-theme";
        return (0, sb.jsx)("div", (0, Ez.b)({
          ref: mz,
          className: qz + (bz ? " " + bz : "")
        }, Tz))
      }));
    ob.displayName = "CodeMirror";
    const Nb = ob
  },
  40544: (zz, uz, bz) => {
    function Ez() {
      var zz = arguments[0];
      "string" == typeof zz && (zz = document.createElement(zz));
      var uz = 1,
        bz = arguments[1];
      if (bz && "object" == typeof bz && null == bz.nodeType && !Array.isArray(bz)) {
        for (var Ez in bz)
          if (Object.prototype.hasOwnProperty.call(bz, Ez)) {
            var iz = bz[Ez];
            "string" == typeof iz ? zz.setAttribute(Ez, iz) : null != iz && (zz[Ez] = iz)
          } uz++
      }
      for (; uz < arguments.length; uz++) nz(zz, arguments[uz]);
      return zz
    }

    function nz(zz, uz) {
      if ("string" == typeof uz) zz.appendChild(document.createTextNode(uz));
      else if (null == uz);
      else if (null != uz.nodeType) zz.appendChild(uz);
      else {
        if (!Array.isArray(uz)) throw new RangeError("Unsupported child node: " + uz);
        for (var bz = 0; bz < uz.length; bz++) nz(zz, uz[bz])
      }
    }
    bz.d(uz, {
      b: () => Ez
    })
  },
  40540: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    const Ez = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      nz = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      iz = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class lz {
      constructor(zz, uz) {
        this.rules = [];
        let {
          finish: bz
        } = uz || {};

        function Ez(zz) {
          return /^@/.test(zz) ? [zz] : zz.split(/,\s*/)
        }

        function nz(zz, uz, iz, lz) {
          let Mz = [],
            tz = /^@(\w+)\b/.exec(zz[0]),
            Hz = tz && "keyframes" == tz[1];
          if (tz && null == uz) return iz.push(zz[0] + ";");
          for (let bz in uz) {
            let lz = uz[bz];
            if (/&/.test(bz)) nz(bz.split(/,\s*/).map((uz => zz.map((zz => uz.replace(/&/, zz))))).reduce(((zz, uz) => zz.concat(uz))), lz, iz);
            else if (lz && "object" == typeof lz) {
              if (!tz) throw new RangeError("The value of a property (" + bz + ") should be a primitive value.");
              nz(Ez(bz), lz, Mz, Hz)
            } else null != lz && Mz.push(bz.replace(/_.*/, "").replace(/[A-Z]/g, (zz => "-" + zz.toLowerCase())) + ": " + lz + ";")
          }(Mz.length || Hz) && iz.push((!bz || tz || lz ? zz : zz.map(bz)).join(", ") + " {" + Mz.join(" ") + "}")
        }
        for (let iz in zz) nz(Ez(iz), zz[iz], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let zz = iz[Ez] || 1;
        return iz[Ez] = zz + 1, "\u037c" + zz.toString(36)
      }
      static mount(zz, uz, bz) {
        let Ez = zz[nz],
          iz = bz && bz.nonce;
        Ez ? iz && Ez.setNonce(iz) : Ez = new tz(zz, iz), Ez.mount(Array.isArray(uz) ? uz : [uz], zz)
      }
    }
    let Mz = new Map;
    class tz {
      constructor(zz, uz) {
        let bz = zz.ownerDocument || zz,
          Ez = bz.defaultView;
        if (!zz.head && zz.adoptedStyleSheets && Ez.CSSStyleSheet) {
          let uz = Mz.get(bz);
          if (uz) return zz[nz] = uz;
          this.sheet = new Ez.CSSStyleSheet, Mz.set(bz, this)
        } else this.styleTag = bz.createElement("style"), uz && this.styleTag.setAttribute("nonce", uz);
        this.modules = [], zz[nz] = this
      }
      mount(zz, uz) {
        let bz = this.sheet,
          Ez = 0,
          nz = 0;
        for (let iz = 0; iz < zz.length; iz++) {
          let uz = zz[iz],
            lz = this.modules.indexOf(uz);
          if (lz < nz && lz > -1 && (this.modules.splice(lz, 1), nz--, lz = -1), -1 == lz) {
            if (this.modules.splice(nz++, 0, uz), bz)
              for (let zz = 0; zz < uz.rules.length; zz++) bz.insertRule(uz.rules[zz], Ez++)
          } else {
            for (; nz < lz;) Ez += this.modules[nz++].rules.length;
            Ez += uz.rules.length, nz++
          }
        }
        if (bz) uz.adoptedStyleSheets.indexOf(this.sheet) < 0 && (uz.adoptedStyleSheets = [this.sheet, ...uz.adoptedStyleSheets]);
        else {
          let zz = "";
          for (let uz = 0; uz < this.modules.length; uz++) zz += this.modules[uz].getRules() + "\n";
          this.styleTag.textContent = zz;
          let bz = uz.head || uz;
          this.styleTag.parentNode != bz && bz.insertBefore(this.styleTag, bz.firstChild)
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