export const id = 269;
export const ids = [269];
export const modules = {
  39274: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => vn,
      f: () => YB,
      j: () => yn,
      l: () => Mc,
      n: () => DB,
      p: () => Pc,
      t: () => TB
    });
    var Vc = nc(39279),
      Ic = nc(39285),
      rB = nc(39303);
    class uc {
      constructor(cB, Bc, nc, Vc) {
        this.state = cB, this.pos = Bc, this.explicit = nc, this.view = Vc, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(cB) {
        let Bc = (0, rB.lb)(this.state).resolveInner(this.pos, -1);
        for (; Bc && cB.indexOf(Bc.name) < 0;) Bc = Bc.parent;
        return Bc ? {
          from: Bc.from,
          to: this.pos,
          text: this.state.sliceDoc(Bc.from, this.pos),
          type: Bc.type
        } : null
      }
      matchBefore(cB) {
        let Bc = this.state.doc.lineAt(this.pos),
          nc = Math.max(Bc.from, this.pos - 250),
          Vc = Bc.text.slice(nc - Bc.from, this.pos - Bc.from),
          Ic = Vc.search(Tc(cB, !1));
        return Ic < 0 ? null : {
          from: nc + Ic,
          to: this.pos,
          text: Vc.slice(Ic)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(cB, Bc, nc) {
        "abort" == cB && this.abortListeners && (this.abortListeners.push(Bc), nc && nc.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function sc(cB) {
      let Bc = Object.keys(cB).join(""),
        nc = /\w/.test(Bc);
      return nc && (Bc = Bc.replace(/\w/g, "")), `[${nc?"\\w":""}${Bc.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function Mc(cB) {
      let Bc = cB.map((cB => "string" == typeof cB ? {
          label: cB
        } : cB)),
        [nc, Vc] = Bc.every((cB => /^\w+$/.test(cB.label))) ? [/\w*$/, /\w+$/] : function(cB) {
          let Bc = Object.create(null),
            nc = Object.create(null);
          for (let {
              label: Ic
            }
            of cB) {
            Bc[Ic[0]] = !0;
            for (let cB = 1; cB < Ic.length; cB++) nc[Ic[cB]] = !0
          }
          let Vc = sc(Bc) + sc(nc) + "*$";
          return [new RegExp("^" + Vc), new RegExp(Vc)]
        }(Bc);
      return cB => {
        let Ic = cB.matchBefore(Vc);
        return Ic || cB.explicit ? {
          from: Ic ? Ic.from : cB.pos,
          options: Bc,
          validFor: nc
        } : null
      }
    }

    function Pc(cB, Bc) {
      return nc => {
        for (let Bc = (0, rB.lb)(nc.state).resolveInner(nc.pos, -1); Bc; Bc = Bc.parent) {
          if (cB.indexOf(Bc.name) > -1) return null;
          if (Bc.type.isTop) break
        }
        return Bc(nc)
      }
    }
    class qB {
      constructor(cB, Bc, nc, Vc) {
        this.completion = cB, this.source = Bc, this.match = nc, this.score = Vc
      }
    }

    function Oc(cB) {
      return cB.selection.main.from
    }

    function Tc(cB, Bc) {
      var nc;
      let {
        source: Vc
      } = cB, Ic = Bc && "^" != Vc[0], rB = "$" != Vc[Vc.length - 1];
      return Ic || rB ? new RegExp(`${Ic?"^":""}(?:${Vc})${rB?"$":""}`, null !== (nc = cB.flags) && void 0 !== nc ? nc : cB.ignoreCase ? "i" : "") : cB
    }
    const fc = Vc.c.define();

    function mB(cB, Bc, nc, Ic) {
      let {
        main: rB
      } = cB.selection, uc = nc - rB.from, sc = Ic - rB.from;
      return {
        ...cB.changeByRange((Mc => {
          if (Mc != rB && nc != Ic && cB.sliceDoc(Mc.from + uc, Mc.from + sc) != cB.sliceDoc(nc, Ic)) return {
            range: Mc
          };
          let Pc = cB.toText(Bc);
          return {
            changes: {
              from: Mc.from + uc,
              to: Ic == rB.from ? Mc.to : Mc.from + sc,
              insert: Pc
            },
            range: Vc.m.cursor(Mc.from + uc + Pc.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const ec = new WeakMap;

    function tB(cB) {
      if (!Array.isArray(cB)) return cB;
      let Bc = ec.get(cB);
      return Bc || ec.set(cB, Bc = Mc(cB)), Bc
    }
    const Sc = Vc.F.define(),
      yB = Vc.F.define();
    class zB {
      constructor(cB) {
        this.pattern = cB, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let Bc = 0; Bc < cB.length;) {
          let nc = (0, Vc.U)(cB, Bc),
            Ic = (0, Vc.Y)(nc);
          this.chars.push(nc);
          let rB = cB.slice(Bc, Bc + Ic),
            uc = rB.toUpperCase();
          this.folded.push((0, Vc.U)(uc == rB ? rB.toLowerCase() : uc, 0)), Bc += Ic
        }
        this.astral = cB.length != this.chars.length
      }
      ret(cB, Bc) {
        return this.score = cB, this.matched = Bc, this
      }
      match(cB) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (cB.length < this.pattern.length) return null;
        let {
          chars: Bc,
          folded: nc,
          any: Ic,
          precise: rB,
          byWord: uc
        } = this;
        if (1 == Bc.length) {
          let Ic = (0, Vc.U)(cB, 0),
            rB = (0, Vc.Y)(Ic),
            uc = rB == cB.length ? 0 : -100;
          if (Ic == Bc[0]);
          else {
            if (Ic != nc[0]) return null;
            uc += -200
          }
          return this.ret(uc, [0, rB])
        }
        let sc = cB.indexOf(this.pattern);
        if (0 == sc) return this.ret(cB.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let Mc = Bc.length,
          Pc = 0;
        if (sc < 0) {
          for (let rB = 0, uc = Math.min(cB.length, 200); rB < uc && Pc < Mc;) {
            let uc = (0, Vc.U)(cB, rB);
            uc != Bc[Pc] && uc != nc[Pc] || (Ic[Pc++] = rB), rB += (0, Vc.Y)(uc)
          }
          if (Pc < Mc) return null
        }
        let qB = 0,
          Oc = 0,
          Tc = !1,
          fc = 0,
          mB = -1,
          ec = -1,
          tB = /[a-z]/.test(cB),
          Sc = !0;
        for (let yB = 0, zB = Math.min(cB.length, 200), pc = 0; yB < zB && Oc < Mc;) {
          let Ic = (0, Vc.U)(cB, yB);
          sc < 0 && (qB < Mc && Ic == Bc[qB] && (rB[qB++] = yB), fc < Mc && (Ic == Bc[fc] || Ic == nc[fc] ? (0 == fc && (mB = yB), ec = yB + 1, fc++) : fc = 0));
          let Pc, zB = Ic < 255 ? Ic >= 48 && Ic <= 57 || Ic >= 97 && Ic <= 122 ? 2 : Ic >= 65 && Ic <= 90 ? 1 : 0 : (Pc = (0, Vc.hb)(Ic)) != Pc.toLowerCase() ? 1 : Pc != Pc.toUpperCase() ? 2 : 0;
          (!yB || 1 == zB && tB || 0 == pc && 0 != zB) && (Bc[Oc] == Ic || nc[Oc] == Ic && (Tc = !0) ? uc[Oc++] = yB : uc.length && (Sc = !1)), pc = zB, yB += (0, Vc.Y)(Ic)
        }
        return Oc == Mc && 0 == uc[0] && Sc ? this.result((Tc ? -200 : 0) - 100, uc, cB) : fc == Mc && 0 == mB ? this.ret(-200 - cB.length + (ec == cB.length ? 0 : -100), [0, ec]) : sc > -1 ? this.ret(-700 - cB.length, [sc, sc + this.pattern.length]) : fc == Mc ? this.ret(-900 - cB.length, [mB, ec]) : Oc == Mc ? this.result((Tc ? -200 : 0) - 100 - 700 + (Sc ? 0 : -1100), uc, cB) : 2 == Bc.length ? null : this.result((Ic[0] ? -700 : 0) - 200 - 1100, Ic, cB)
      }
      result(cB, Bc, nc) {
        let Ic = [],
          rB = 0;
        for (let uc of Bc) {
          let cB = uc + (this.astral ? (0, Vc.Y)((0, Vc.U)(nc, uc)) : 1);
          rB && Ic[rB - 1] == uc ? Ic[rB - 1] = cB : (Ic[rB++] = uc, Ic[rB++] = cB)
        }
        return this.ret(cB - nc.length, Ic)
      }
    }
    class pc {
      constructor(cB) {
        this.pattern = cB, this.matched = [], this.score = 0, this.folded = cB.toLowerCase()
      }
      match(cB) {
        if (cB.length < this.pattern.length) return null;
        let Bc = cB.slice(0, this.pattern.length),
          nc = Bc == this.pattern ? 0 : Bc.toLowerCase() == this.folded ? -200 : null;
        return null == nc ? null : (this.matched = [0, Bc.length], this.score = nc + (cB.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const hc = Vc.q.define({
      combine: cB => (0, Vc.$)(cB, {
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
        positionInfo: lc,
        filterStrict: !1,
        compareCompletions: (cB, Bc) => (cB.sortText || cB.label).localeCompare(Bc.sortText || Bc.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (cB, Bc) => cB && Bc,
        closeOnBlur: (cB, Bc) => cB && Bc,
        icons: (cB, Bc) => cB && Bc,
        tooltipClass: (cB, Bc) => nc => aB(cB(nc), Bc(nc)),
        optionClass: (cB, Bc) => nc => aB(cB(nc), Bc(nc)),
        addToOptions: (cB, Bc) => cB.concat(Bc),
        filterStrict: (cB, Bc) => cB || Bc
      })
    });

    function aB(cB, Bc) {
      return cB ? Bc ? cB + " " + Bc : cB : Bc
    }

    function lc(cB, Bc, nc, Vc, rB, uc) {
      let sc, Mc, Pc = cB.textDirection == Ic.g.RTL,
        qB = Pc,
        Oc = !1,
        Tc = "top",
        fc = Bc.left - rB.left,
        mB = rB.right - Bc.right,
        ec = Vc.right - Vc.left,
        tB = Vc.bottom - Vc.top;
      if (qB && fc < Math.min(ec, mB) ? qB = !1 : !qB && mB < Math.min(ec, fc) && (qB = !0), ec <= (qB ? fc : mB)) sc = Math.max(rB.top, Math.min(nc.top, rB.bottom - tB)) - Bc.top, Mc = Math.min(400, qB ? fc : mB);
      else {
        Oc = !0, Mc = Math.min(400, (Pc ? Bc.right : rB.right - Bc.left) - 30);
        let cB = rB.bottom - Bc.bottom;
        cB >= tB || cB > Bc.top ? sc = nc.bottom - Bc.top : (Tc = "bottom", sc = Bc.bottom - nc.top)
      }
      return {
        style: `${Tc}: ${sc/((Bc.bottom-Bc.top)/uc.offsetHeight)}px; max-width: ${Mc/((Bc.right-Bc.left)/uc.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Oc ? Pc ? "left-narrow" : "right-narrow" : qB ? "left" : "right")
      }
    }
    const Yc = Vc.F.define();

    function Lc(cB, Bc, nc) {
      if (cB <= nc) return {
        from: 0,
        to: cB
      };
      if (Bc < 0 && (Bc = 0), Bc <= cB >> 1) {
        let cB = Math.floor(Bc / nc);
        return {
          from: cB * nc,
          to: (cB + 1) * nc
        }
      }
      let Vc = Math.floor((cB - Bc) / nc);
      return {
        from: cB - (Vc + 1) * nc,
        to: cB - Vc * nc
      }
    }
    class gB {
      constructor(cB, Bc, nc) {
        this.view = cB, this.stateField = Bc, this.applyCompletion = nc, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: cB => this.placeInfo(cB),
          key: this
        }, this.space = null, this.currentClass = "";
        let Vc = cB.state.field(Bc),
          {
            options: Ic,
            selected: rB
          } = Vc.open,
          uc = cB.state.facet(hc);
        this.optionContent = function(cB) {
          let Bc = cB.addToOptions.slice();
          return cB.icons && Bc.push({
            render(cB) {
              let Bc = document.createElement("div");
              return Bc.classList.add("cm-completionIcon"), cB.type && Bc.classList.add(...cB.type.split(/\s+/g).map((cB => "cm-completionIcon-" + cB))), Bc.setAttribute("aria-hidden", "true"), Bc
            },
            position: 20
          }), Bc.push({
            render(cB, Bc, nc, Vc) {
              let Ic = document.createElement("span");
              Ic.className = "cm-completionLabel";
              let rB = cB.displayLabel || cB.label,
                uc = 0;
              for (let sc = 0; sc < Vc.length;) {
                let cB = Vc[sc++],
                  Bc = Vc[sc++];
                cB > uc && Ic.appendChild(document.createTextNode(rB.slice(uc, cB)));
                let nc = Ic.appendChild(document.createElement("span"));
                nc.appendChild(document.createTextNode(rB.slice(cB, Bc))), nc.className = "cm-completionMatchedText", uc = Bc
              }
              return uc < rB.length && Ic.appendChild(document.createTextNode(rB.slice(uc))), Ic
            },
            position: 50
          }, {
            render(cB) {
              if (!cB.detail) return null;
              let Bc = document.createElement("span");
              return Bc.className = "cm-completionDetail", Bc.textContent = cB.detail, Bc
            },
            position: 80
          }), Bc.sort(((cB, Bc) => cB.position - Bc.position)).map((cB => cB.render))
        }(uc), this.optionClass = uc.optionClass, this.tooltipClass = uc.tooltipClass, this.range = Lc(Ic.length, rB, uc.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(cB.state), this.dom.addEventListener("mousedown", (nc => {
          let {
            options: Vc
          } = cB.state.field(Bc).open;
          for (let Bc, Ic = nc.target; Ic && Ic != this.dom; Ic = Ic.parentNode)
            if ("LI" == Ic.nodeName && (Bc = /-(\d+)$/.exec(Ic.id)) && +Bc[1] < Vc.length) return this.applyCompletion(cB, Vc[+Bc[1]]), void nc.preventDefault();
          if (nc.target == this.list) {
            let Bc = this.list.classList.contains("cm-completionListIncompleteTop") && nc.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && nc.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != Bc && (cB.dispatch({
              effects: Yc.of(Bc)
            }), nc.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (Bc => {
          let nc = cB.state.field(this.stateField, !1);
          nc && nc.tooltip && cB.state.facet(hc).closeOnBlur && Bc.relatedTarget != cB.contentDOM && cB.dispatch({
            effects: yB.of(null)
          })
        })), this.showOptions(Ic, Vc.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(cB, Bc) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(cB, Bc, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(cB) {
        var Bc;
        let nc = cB.state.field(this.stateField),
          Vc = cB.startState.field(this.stateField);
        if (this.updateTooltipClass(cB.state), nc != Vc) {
          let {
            options: Ic,
            selected: rB,
            disabled: uc
          } = nc.open;
          Vc.open && Vc.open.options == Ic || (this.range = Lc(Ic.length, rB, cB.state.facet(hc).maxRenderedOptions), this.showOptions(Ic, nc.id)), this.updateSel(), uc != (null === (Bc = Vc.open) || void 0 === Bc ? void 0 : Bc.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!uc)
        }
      }
      updateTooltipClass(cB) {
        let Bc = this.tooltipClass(cB);
        if (Bc != this.currentClass) {
          for (let cB of this.currentClass.split(" ")) cB && this.dom.classList.remove(cB);
          for (let cB of Bc.split(" ")) cB && this.dom.classList.add(cB);
          this.currentClass = Bc
        }
      }
      positioned(cB) {
        this.space = cB, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let cB = this.view.state.field(this.stateField),
          Bc = cB.open;
        (Bc.selected > -1 && Bc.selected < this.range.from || Bc.selected >= this.range.to) && (this.range = Lc(Bc.options.length, Bc.selected, this.view.state.facet(hc).maxRenderedOptions), this.showOptions(Bc.options, cB.id));
        let nc = this.updateSelectedOption(Bc.selected);
        if (nc) {
          this.destroyInfo();
          let {
            completion: Vc
          } = Bc.options[Bc.selected], {
            info: rB
          } = Vc;
          if (!rB) return;
          let uc = "string" === typeof rB ? document.createTextNode(rB) : rB(Vc);
          if (!uc) return;
          "then" in uc ? uc.then((Bc => {
            Bc && this.view.state.field(this.stateField, !1) == cB && this.addInfoPane(Bc, Vc)
          })).catch((cB => (0, Ic.Y)(this.view.state, cB, "completion info"))) : (this.addInfoPane(uc, Vc), nc.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(cB, Bc) {
        this.destroyInfo();
        let nc = this.info = document.createElement("div");
        if (nc.className = "cm-tooltip cm-completionInfo", nc.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != cB.nodeType) nc.appendChild(cB), this.infoDestroy = null;
        else {
          let {
            dom: Bc,
            destroy: Vc
          } = cB;
          nc.appendChild(Bc), this.infoDestroy = Vc || null
        }
        this.dom.appendChild(nc), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(cB) {
        let Bc = null;
        for (let nc = this.list.firstChild, Vc = this.range.from; nc; nc = nc.nextSibling, Vc++) "LI" == nc.nodeName && nc.id ? Vc == cB ? nc.hasAttribute("aria-selected") || (nc.setAttribute("aria-selected", "true"), Bc = nc) : nc.hasAttribute("aria-selected") && (nc.removeAttribute("aria-selected"), nc.removeAttribute("aria-describedby")) : Vc--;
        return Bc && function(cB, Bc) {
          let nc = cB.getBoundingClientRect(),
            Vc = Bc.getBoundingClientRect(),
            Ic = nc.height / cB.offsetHeight;
          Vc.top < nc.top ? cB.scrollTop -= (nc.top - Vc.top) / Ic : Vc.bottom > nc.bottom && (cB.scrollTop += (Vc.bottom - nc.bottom) / Ic)
        }(this.list, Bc), Bc
      }
      measureInfo() {
        let cB = this.dom.querySelector("[aria-selected]");
        if (!cB || !this.info) return null;
        let Bc = this.dom.getBoundingClientRect(),
          nc = this.info.getBoundingClientRect(),
          Vc = cB.getBoundingClientRect(),
          Ic = this.space;
        if (!Ic) {
          let cB = this.dom.ownerDocument.documentElement;
          Ic = {
            left: 0,
            top: 0,
            right: cB.clientWidth,
            bottom: cB.clientHeight
          }
        }
        return Vc.top > Math.min(Ic.bottom, Bc.bottom) - 10 || Vc.bottom < Math.max(Ic.top, Bc.top) + 10 ? null : this.view.state.facet(hc).positionInfo(this.view, Bc, Vc, nc, Ic, this.dom)
      }
      placeInfo(cB) {
        this.info && (cB ? (cB.style && (this.info.style.cssText = cB.style), this.info.className = "cm-tooltip cm-completionInfo " + (cB.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(cB, Bc, nc) {
        const Vc = document.createElement("ul");
        Vc.id = Bc, Vc.setAttribute("role", "listbox"), Vc.setAttribute("aria-expanded", "true"), Vc.setAttribute("aria-label", this.view.state.phrase("Completions")), Vc.addEventListener("mousedown", (cB => {
          cB.target == Vc && cB.preventDefault()
        }));
        let Ic = null;
        for (let rB = nc.from; rB < nc.to; rB++) {
          let {
            completion: uc,
            match: sc
          } = cB[rB], {
            section: Mc
          } = uc;
          if (Mc) {
            let cB = "string" == typeof Mc ? Mc : Mc.name;
            if (cB != Ic && (rB > nc.from || 0 == nc.from))
              if (Ic = cB, "string" != typeof Mc && Mc.header) Vc.appendChild(Mc.header(Mc));
              else {
                Vc.appendChild(document.createElement("completion-section")).textContent = cB
              }
          }
          const Pc = Vc.appendChild(document.createElement("li"));
          Pc.id = Bc + "-" + rB, Pc.setAttribute("role", "option");
          let qB = this.optionClass(uc);
          qB && (Pc.className = qB);
          for (let cB of this.optionContent) {
            let Bc = cB(uc, this.view.state, this.view, sc);
            Bc && Pc.appendChild(Bc)
          }
        }
        return nc.from && Vc.classList.add("cm-completionListIncompleteTop"), nc.to < cB.length && Vc.classList.add("cm-completionListIncompleteBottom"), Vc
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function Uc(cB, Bc) {
      return nc => new gB(nc, cB, Bc)
    }

    function bB(cB) {
      return 100 * (cB.boost || 0) + (cB.apply ? 10 : 0) + (cB.info ? 5 : 0) + (cB.type ? 1 : 0)
    }
    class Zc {
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        this.options = cB, this.attrs = Bc, this.tooltip = nc, this.timestamp = Vc, this.selected = Ic, this.disabled = rB
      }
      setSelected(cB, Bc) {
        return cB == this.selected || cB >= this.options.length ? this : new Zc(this.options, Dc(Bc, cB), this.tooltip, this.timestamp, cB, this.disabled)
      }
      static build(cB, Bc, nc, Vc, Ic, rB) {
        if (Vc && !rB && cB.some((cB => cB.isPending))) return Vc.setDisabled();
        let uc = function(cB, Bc) {
          let nc = [],
            Vc = null,
            Ic = null,
            rB = cB => {
              nc.push(cB);
              let {
                section: Bc
              } = cB.completion;
              if (Bc) {
                Vc || (Vc = []);
                let cB = "string" == typeof Bc ? Bc : Bc.name;
                Vc.some((Bc => Bc.name == cB)) || Vc.push("string" == typeof Bc ? {
                  name: cB
                } : Bc)
              }
            },
            uc = Bc.facet(hc);
          for (let Oc of cB)
            if (Oc.hasResult()) {
              let cB = Oc.result.getMatch;
              if (!1 === Oc.result.filter)
                for (let Bc of Oc.result.options) rB(new qB(Bc, Oc.source, cB ? cB(Bc) : [], 1e9 - nc.length));
              else {
                let nc, Vc = Bc.sliceDoc(Oc.from, Oc.to),
                  sc = uc.filterStrict ? new pc(Vc) : new zB(Vc);
                for (let Bc of Oc.result.options)
                  if (nc = sc.match(Bc.label)) {
                    let Vc = Bc.displayLabel ? cB ? cB(Bc, nc.matched) : [] : nc.matched,
                      uc = nc.score + (Bc.boost || 0);
                    if (rB(new qB(Bc, Oc.source, Vc, uc)), "object" == typeof Bc.section && "dynamic" === Bc.section.rank) {
                      let {
                        name: cB
                      } = Bc.section;
                      Ic || (Ic = Object.create(null)), Ic[cB] = Math.max(uc, Ic[cB] || -1e9)
                    }
                  }
              }
            } if (Vc) {
            let cB = Object.create(null),
              Bc = 0,
              rB = (cB, Bc) => ("dynamic" === cB.rank && "dynamic" === Bc.rank ? Ic[Bc.name] - Ic[cB.name] : 0) || ("number" == typeof cB.rank ? cB.rank : 1e9) - ("number" == typeof Bc.rank ? Bc.rank : 1e9) || (cB.name < Bc.name ? -1 : 1);
            for (let nc of Vc.sort(rB)) Bc -= 1e5, cB[nc.name] = Bc;
            for (let Vc of nc) {
              let {
                section: Bc
              } = Vc.completion;
              Bc && (Vc.score += cB["string" == typeof Bc ? Bc : Bc.name])
            }
          }
          let sc = [],
            Mc = null,
            Pc = uc.compareCompletions;
          for (let qB of nc.sort(((cB, Bc) => Bc.score - cB.score || Pc(cB.completion, Bc.completion)))) {
            let cB = qB.completion;
            !Mc || Mc.label != cB.label || Mc.detail != cB.detail || null != Mc.type && null != cB.type && Mc.type != cB.type || Mc.apply != cB.apply || Mc.boost != cB.boost ? sc.push(qB) : bB(qB.completion) > bB(Mc) && (sc[sc.length - 1] = qB), Mc = qB.completion
          }
          return sc
        }(cB, Bc);
        if (!uc.length) return Vc && cB.some((cB => cB.isPending)) ? Vc.setDisabled() : null;
        let sc = Bc.facet(hc).selectOnOpen ? 0 : -1;
        if (Vc && Vc.selected != sc && -1 != Vc.selected) {
          let cB = Vc.options[Vc.selected].completion;
          for (let Bc = 0; Bc < uc.length; Bc++)
            if (uc[Bc].completion == cB) {
              sc = Bc;
              break
            }
        }
        return new Zc(uc, Dc(nc, sc), {
          pos: cB.reduce(((cB, Bc) => Bc.hasResult() ? Math.min(cB, Bc.from) : cB), 1e8),
          create: Hc,
          above: Ic.aboveCursor
        }, Vc ? Vc.timestamp : Date.now(), sc, !1)
      }
      map(cB) {
        return new Zc(this.options, this.attrs, {
          ...this.tooltip,
          pos: cB.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new Zc(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Qc {
      constructor(cB, Bc, nc) {
        this.active = cB, this.id = Bc, this.open = nc
      }
      static start() {
        return new Qc(Nc, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(cB) {
        let {
          state: Bc
        } = cB, nc = Bc.facet(hc), Vc = (nc.override || Bc.languageDataAt("autocomplete", Oc(Bc)).map(tB)).map((Bc => (this.active.find((cB => cB.source == Bc)) || new oc(Bc, this.active.some((cB => 0 != cB.state)) ? 1 : 0)).update(cB, nc)));
        Vc.length == this.active.length && Vc.every(((cB, Bc) => cB == this.active[Bc])) && (Vc = this.active);
        let Ic = this.open,
          rB = cB.effects.some((cB => cB.is(wc)));
        Ic && cB.docChanged && (Ic = Ic.map(cB.changes)), cB.selection || Vc.some((Bc => Bc.hasResult() && cB.changes.touchesRange(Bc.from, Bc.to))) || ! function(cB, Bc) {
          if (cB == Bc) return !0;
          for (let nc = 0, Vc = 0;;) {
            for (; nc < cB.length && !cB[nc].hasResult();) nc++;
            for (; Vc < Bc.length && !Bc[Vc].hasResult();) Vc++;
            let Ic = nc == cB.length,
              rB = Vc == Bc.length;
            if (Ic || rB) return Ic == rB;
            if (cB[nc++].result != Bc[Vc++].result) return !1
          }
        }(Vc, this.active) || rB ? Ic = Zc.build(Vc, Bc, this.id, Ic, nc, rB) : Ic && Ic.disabled && !Vc.some((cB => cB.isPending)) && (Ic = null), !Ic && Vc.every((cB => !cB.isPending)) && Vc.some((cB => cB.hasResult())) && (Vc = Vc.map((cB => cB.hasResult() ? new oc(cB.source, 0) : cB)));
        for (let uc of cB.effects) uc.is(Yc) && (Ic = Ic && Ic.setSelected(uc.value, this.id));
        return Vc == this.active && Ic == this.open ? this : new Qc(Vc, this.id, Ic)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Cc : vB
      }
    }
    const Cc = {
        "aria-autocomplete": "list"
      },
      vB = {};

    function Dc(cB, Bc) {
      let nc = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": cB
      };
      return Bc > -1 && (nc["aria-activedescendant"] = cB + "-" + Bc), nc
    }
    const Nc = [];

    function Ec(cB, Bc) {
      if (cB.isUserEvent("input.complete")) {
        let nc = cB.annotation(fc);
        if (nc && Bc.activateOnCompletion(nc)) return 12
      }
      let nc = cB.isUserEvent("input.type");
      return nc && Bc.activateOnTyping ? 5 : nc ? 1 : cB.isUserEvent("delete.backward") ? 2 : cB.selection ? 8 : cB.docChanged ? 16 : 0
    }
    class oc {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = cB, this.state = Bc, this.explicit = nc
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(cB, Bc) {
        let nc = Ec(cB, Bc),
          Vc = this;
        (8 & nc || 16 & nc && this.touches(cB)) && (Vc = new oc(Vc.source, 0)), 4 & nc && 0 == Vc.state && (Vc = new oc(this.source, 1)), Vc = Vc.updateFor(cB, nc);
        for (let Ic of cB.effects)
          if (Ic.is(Sc)) Vc = new oc(Vc.source, 1, Ic.value);
          else if (Ic.is(yB)) Vc = new oc(Vc.source, 0);
        else if (Ic.is(wc))
          for (let cB of Ic.value) cB.source == Vc.source && (Vc = cB);
        return Vc
      }
      updateFor(cB, Bc) {
        return this.map(cB.changes)
      }
      map(cB) {
        return this
      }
      touches(cB) {
        return cB.changes.touchesRange(Oc(cB.state))
      }
    }
    class Wc extends oc {
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        super(cB, 3, Bc), this.limit = nc, this.result = Vc, this.from = Ic, this.to = rB
      }
      hasResult() {
        return !0
      }
      updateFor(cB, Bc) {
        var nc;
        if (!(3 & Bc)) return this.map(cB.changes);
        let Vc = this.result;
        Vc.map && !cB.changes.empty && (Vc = Vc.map(Vc, cB.changes));
        let Ic = cB.changes.mapPos(this.from),
          rB = cB.changes.mapPos(this.to, 1),
          sc = Oc(cB.state);
        if (sc > rB || !Vc || 2 & Bc && (Oc(cB.startState) == this.from || sc < this.limit)) return new oc(this.source, 4 & Bc ? 1 : 0);
        let Mc = cB.changes.mapPos(this.limit);
        return function(cB, Bc, nc, Vc) {
          if (!cB) return !1;
          let Ic = Bc.sliceDoc(nc, Vc);
          return "function" == typeof cB ? cB(Ic, nc, Vc, Bc) : Tc(cB, !0).test(Ic)
        }(Vc.validFor, cB.state, Ic, rB) ? new Wc(this.source, this.explicit, Mc, Vc, Ic, rB) : Vc.update && (Vc = Vc.update(Vc, Ic, rB, new uc(cB.state, sc, !1))) ? new Wc(this.source, this.explicit, Mc, Vc, Vc.from, null !== (nc = Vc.to) && void 0 !== nc ? nc : Oc(cB.state)) : new oc(this.source, 1, this.explicit)
      }
      map(cB) {
        if (cB.empty) return this;
        return (this.result.map ? this.result.map(this.result, cB) : this.result) ? new Wc(this.source, this.explicit, cB.mapPos(this.limit), this.result, cB.mapPos(this.from), cB.mapPos(this.to, 1)) : new oc(this.source, 0)
      }
      touches(cB) {
        return cB.changes.touchesRange(this.from, this.to)
      }
    }
    const wc = Vc.F.define({
        map: (cB, Bc) => cB.map((cB => cB.map(Bc)))
      }),
      kB = Vc.J.define({
        create: () => Qc.start(),
        update: (cB, Bc) => cB.update(Bc),
        provide: cB => [Ic.ib.from(cB, (cB => cB.tooltip)), Ic.i.contentAttributes.from(cB, (cB => cB.attrs))]
      });

    function Xc(cB, Bc) {
      const nc = Bc.completion.apply || Bc.completion.label;
      let Vc = cB.state.field(kB).active.find((cB => cB.source == Bc.source));
      return Vc instanceof Wc && ("string" == typeof nc ? cB.dispatch({
        ...mB(cB.state, nc, Vc.from, Vc.to),
        annotations: fc.of(Bc.completion)
      }) : nc(cB, Bc.completion, Vc.from, Vc.to), !0)
    }
    const Hc = Uc(kB, Xc);

    function Fc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return nc => {
        let Vc = nc.state.field(kB, !1);
        if (!Vc || !Vc.open || Vc.open.disabled || Date.now() - Vc.open.timestamp < nc.state.facet(hc).interactionDelay) return !1;
        let rB, uc = 1;
        "page" == Bc && (rB = (0, Ic.E)(nc, Vc.open.tooltip)) && (uc = Math.max(2, Math.floor(rB.dom.offsetHeight / rB.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: sc
        } = Vc.open.options, Mc = Vc.open.selected > -1 ? Vc.open.selected + uc * (cB ? 1 : -1) : cB ? 0 : sc - 1;
        return Mc < 0 ? Mc = "page" == Bc ? 0 : sc - 1 : Mc >= sc && (Mc = "page" == Bc ? sc - 1 : 0), nc.dispatch({
          effects: Yc.of(Mc)
        }), !0
      }
    }
    const Jc = cB => !!cB.state.field(kB, !1) && (cB.dispatch({
      effects: Sc.of(!0)
    }), !0);
    class jB {
      constructor(cB, Bc) {
        this.active = cB, this.context = Bc, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const Rc = Ic.o.fromClass(class {
        constructor(cB) {
          this.view = cB, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let Bc of cB.state.field(kB).active) Bc.isPending && this.startQuery(Bc)
        }
        update(cB) {
          let Bc = cB.state.field(kB),
            nc = cB.state.facet(hc);
          if (!cB.selectionSet && !cB.docChanged && cB.startState.field(kB) == Bc) return;
          let Vc = cB.transactions.some((cB => {
            let Bc = Ec(cB, nc);
            return 8 & Bc || (cB.selection || cB.docChanged) && !(3 & Bc)
          }));
          for (let sc = 0; sc < this.running.length; sc++) {
            let Bc = this.running[sc];
            if (Vc || Bc.context.abortOnDocChange && cB.docChanged || Bc.updates.length + cB.transactions.length > 50 && Date.now() - Bc.time > 1e3) {
              for (let cB of Bc.context.abortListeners) try {
                cB()
              } catch (uc) {
                (0, Ic.Y)(this.view.state, uc)
              }
              Bc.context.abortListeners = null, this.running.splice(sc--, 1)
            } else Bc.updates.push(...cB.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), cB.transactions.some((cB => cB.effects.some((cB => cB.is(Sc))))) && (this.pendingStart = !0);
          let rB = this.pendingStart ? 50 : nc.activateOnTypingDelay;
          if (this.debounceUpdate = Bc.active.some((cB => cB.isPending && !this.running.some((Bc => Bc.active.source == cB.source)))) ? setTimeout((() => this.startUpdate()), rB) : -1, 0 != this.composing)
            for (let Ic of cB.transactions) Ic.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Ic.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: cB
          } = this.view, Bc = cB.field(kB);
          for (let nc of Bc.active) nc.isPending && !this.running.some((cB => cB.active.source == nc.source)) && this.startQuery(nc);
          this.running.length && Bc.open && Bc.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(hc).updateSyncTime))
        }
        startQuery(cB) {
          let {
            state: Bc
          } = this.view, nc = Oc(Bc), Vc = new uc(Bc, nc, cB.explicit, this.view), rB = new jB(cB, Vc);
          this.running.push(rB), Promise.resolve(cB.source(Vc)).then((cB => {
            rB.context.aborted || (rB.done = cB || null, this.scheduleAccept())
          }), (cB => {
            this.view.dispatch({
              effects: yB.of(null)
            }), (0, Ic.Y)(this.view.state, cB)
          }))
        }
        scheduleAccept() {
          this.running.every((cB => void 0 !== cB.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(hc).updateSyncTime))
        }
        accept() {
          var cB;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let Bc = [],
            nc = this.view.state.facet(hc),
            Vc = this.view.state.field(kB);
          for (let Ic = 0; Ic < this.running.length; Ic++) {
            let rB = this.running[Ic];
            if (void 0 === rB.done) continue;
            if (this.running.splice(Ic--, 1), rB.done) {
              let Vc = Oc(rB.updates.length ? rB.updates[0].startState : this.view.state),
                Ic = Math.min(Vc, rB.done.from + (rB.active.explicit ? 0 : 1)),
                uc = new Wc(rB.active.source, rB.active.explicit, Ic, rB.done, rB.done.from, null !== (cB = rB.done.to) && void 0 !== cB ? cB : Vc);
              for (let cB of rB.updates) uc = uc.update(cB, nc);
              if (uc.hasResult()) {
                Bc.push(uc);
                continue
              }
            }
            let uc = Vc.active.find((cB => cB.source == rB.active.source));
            if (uc && uc.isPending)
              if (null == rB.done) {
                let cB = new oc(rB.active.source, 0);
                for (let Bc of rB.updates) cB = cB.update(Bc, nc);
                cB.isPending || Bc.push(cB)
              } else this.startQuery(uc)
          }(Bc.length || Vc.open && Vc.open.disabled) && this.view.dispatch({
            effects: wc.of(Bc)
          })
        }
      }, {
        eventHandlers: {
          blur(cB) {
            let Bc = this.view.state.field(kB, !1);
            if (Bc && Bc.tooltip && this.view.state.facet(hc).closeOnBlur) {
              let nc = Bc.open && (0, Ic.E)(this.view, Bc.open.tooltip);
              nc && nc.dom.contains(cB.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: yB.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: Sc.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      iB = "object" == typeof navigator && /Win/.test(navigator.platform),
      Kc = Vc.v.highest(Ic.i.domEventHandlers({
        keydown(cB, Bc) {
          let nc = Bc.state.field(kB, !1);
          if (!nc || !nc.open || nc.open.disabled || nc.open.selected < 0 || cB.key.length > 1 || cB.ctrlKey && (!iB || !cB.altKey) || cB.metaKey) return !1;
          let Vc = nc.open.options[nc.open.selected],
            Ic = nc.active.find((cB => cB.source == Vc.source)),
            rB = Vc.completion.commitCharacters || Ic.result.commitCharacters;
          return rB && rB.indexOf(cB.key) > -1 && Xc(Bc, Vc), !1
        }
      })),
      xB = Ic.i.baseTheme({
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
    class dc {
      constructor(cB, Bc, nc, Vc) {
        this.field = cB, this.line = Bc, this.from = nc, this.to = Vc
      }
    }
    class Ac {
      constructor(cB, Bc, nc) {
        this.field = cB, this.from = Bc, this.to = nc
      }
      map(cB) {
        let Bc = cB.mapPos(this.from, -1, Vc.s.TrackDel),
          nc = cB.mapPos(this.to, 1, Vc.s.TrackDel);
        return null == Bc || null == nc ? null : new Ac(this.field, Bc, nc)
      }
    }
    class Gc {
      constructor(cB, Bc) {
        this.lines = cB, this.fieldPositions = Bc
      }
      instantiate(cB, Bc) {
        let nc = [],
          Vc = [Bc],
          Ic = cB.doc.lineAt(Bc),
          uc = /^\s*/.exec(Ic.text)[0];
        for (let Mc of this.lines) {
          if (nc.length) {
            let nc = uc,
              Ic = /^\t*/.exec(Mc)[0].length;
            for (let Bc = 0; Bc < Ic; Bc++) nc += cB.facet(rB.Y);
            Vc.push(Bc + nc.length - Ic), Mc = nc + Mc.slice(Ic)
          }
          nc.push(Mc), Bc += Mc.length + 1
        }
        let sc = this.fieldPositions.map((cB => new Ac(cB.field, Vc[cB.line] + cB.from, Vc[cB.line] + cB.to)));
        return {
          text: nc,
          Iu: sc
        }
      }
      static parse(cB) {
        let Bc, nc = [],
          Vc = [],
          Ic = [];
        for (let rB of cB.split(/\r\n?|\n/)) {
          for (; Bc = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(rB);) {
            let cB = Bc[1] ? +Bc[1] : null,
              uc = Bc[2] || Bc[3] || "",
              sc = -1,
              Mc = uc.replace(/\\[{}]/g, (cB => cB[1]));
            for (let Bc = 0; Bc < nc.length; Bc++)(null != cB ? nc[Bc].seq == cB : Mc && nc[Bc].name == Mc) && (sc = Bc);
            if (sc < 0) {
              let Bc = 0;
              for (; Bc < nc.length && (null == cB || null != nc[Bc].seq && nc[Bc].seq < cB);) Bc++;
              nc.splice(Bc, 0, {
                seq: cB,
                name: Mc
              }), sc = Bc;
              for (let cB of Ic) cB.field >= sc && cB.field++
            }
            for (let nc of Ic)
              if (nc.line == Vc.length && nc.from > Bc.index) {
                let cB = Bc[2] ? 3 + (Bc[1] || "").length : 2;
                nc.from -= cB, nc.to -= cB
              } Ic.push(new dc(sc, Vc.length, Bc.index, Bc.index + Mc.length)), rB = rB.slice(0, Bc.index) + uc + rB.slice(Bc.index + Bc[0].length)
          }
          rB = rB.replace(/\\([{}])/g, ((cB, Bc, nc) => {
            for (let rB of Ic) rB.line == Vc.length && rB.from > nc && (rB.from--, rB.to--);
            return Bc
          })), Vc.push(rB)
        }
        return new Gc(Vc, Ic)
      }
    }
    let cn = Ic.c.widget({
        widget: new class extends Ic.r {
          toDOM() {
            let cB = document.createElement("span");
            return cB.className = "cm-snippetFieldPosition", cB
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      BB = Ic.c.mark({
        class: "cm-snippetField"
      });
    class nB {
      constructor(cB, Bc) {
        this.Iu = cB, this.active = Bc, this.deco = Ic.c.set(cB.map((cB => (cB.from == cB.to ? cn : BB).range(cB.from, cB.to))), !0)
      }
      map(cB) {
        let Bc = [];
        for (let nc of this.Iu) {
          let Vc = nc.map(cB);
          if (!Vc) return null;
          Bc.push(Vc)
        }
        return new nB(Bc, this.active)
      }
      selectionInsideField(cB) {
        return cB.Iu.every((cB => this.Iu.some((Bc => Bc.field == this.active && Bc.from <= cB.from && Bc.to >= cB.to))))
      }
    }
    const VB = Vc.F.define({
        map: (cB, Bc) => cB && cB.map(Bc)
      }),
      IB = Vc.F.define(),
      rn = Vc.J.define({
        create: () => null,
        update(cB, Bc) {
          for (let nc of Bc.effects) {
            if (nc.is(VB)) return nc.value;
            if (nc.is(IB) && cB) return new nB(cB.Iu, nc.value)
          }
          return cB && Bc.docChanged && (cB = cB.map(Bc.changes)), cB && Bc.selection && !cB.selectionInsideField(Bc.selection) && (cB = null), cB
        },
        provide: cB => Ic.i.iu.from(cB, (cB => cB ? cB.deco : Ic.c.none))
      });

    function uB(cB, Bc) {
      return Vc.m.create(cB.filter((cB => cB.field == Bc)).map((cB => Vc.m.range(cB.from, cB.to))))
    }

    function sB(cB) {
      let Bc = Gc.parse(cB);
      return (cB, nc, Ic, rB) => {
        let {
          text: uc,
          Iu: sc
        } = Bc.instantiate(cB.state, Ic), {
          main: Mc
        } = cB.state.selection, Pc = {
          changes: {
            from: Ic,
            to: rB == Mc.from ? Mc.to : rB,
            insert: Vc.N.of(uc)
          },
          scrollIntoView: !0,
          annotations: nc ? [fc.of(nc), Vc.R.userEvent.of("input.complete")] : void 0
        };
        if (sc.length && (Pc.selection = uB(sc, 0)), sc.some((cB => cB.field > 0))) {
          let Bc = new nB(sc, 0),
            nc = Pc.effects = [VB.of(Bc)];
          void 0 === cB.state.field(rn, !1) && nc.push(Vc.F.appendConfig.of([rn, OB, fB, xB]))
        }
        cB.dispatch(cB.state.update(Pc))
      }
    }

    function MB(cB) {
      return Bc => {
        let {
          state: nc,
          dispatch: Vc
        } = Bc, Ic = nc.field(rn, !1);
        if (!Ic || cB < 0 && 0 == Ic.active) return !1;
        let rB = Ic.active + cB,
          uc = cB > 0 && !Ic.Iu.some((Bc => Bc.field == rB + cB));
        return Vc(nc.update({
          selection: uB(Ic.Iu, rB),
          effects: VB.of(uc ? null : new nB(Ic.Iu, rB)),
          scrollIntoView: !0
        })), !0
      }
    }
    const PB = [{
        key: "Tab",
        run: MB(1),
        shift: MB(-1)
      }, {
        key: "Escape",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB;
          return !!Bc.field(rn, !1) && (nc(Bc.update({
            effects: VB.of(null)
          })), !0)
        }
      }],
      qn = Vc.q.define({
        combine: cB => cB.length ? cB[0] : PB
      }),
      OB = Vc.v.highest(Ic.S.compute([qn], (cB => cB.facet(qn))));

    function TB(cB, Bc) {
      return {
        ...Bc,
        apply: sB(cB)
      }
    }
    const fB = Ic.i.domEventHandlers({
      mousedown(cB, Bc) {
        let nc, Vc = Bc.state.field(rn, !1);
        if (!Vc || null == (nc = Bc.posAtCoords({
            x: cB.clientX,
            y: cB.clientY
          }))) return !1;
        let Ic = Vc.Iu.find((cB => cB.from <= nc && cB.to >= nc));
        return !(!Ic || Ic.field == Vc.active) && (Bc.dispatch({
          selection: uB(Vc.Iu, Ic.field),
          effects: VB.of(Vc.Iu.some((cB => cB.field > Ic.field)) ? new nB(Vc.Iu, Ic.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const mn = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      eB = Vc.F.define({
        map(cB, Bc) {
          let nc = Bc.mapPos(cB, -1, Vc.s.TrackAfter);
          return null == nc ? void 0 : nc
        }
      }),
      tn = new class extends Vc.C {};
    tn.startSide = 1, tn.endSide = -1;
    const SB = Vc.J.define({
      create: () => Vc.y.empty,
      update(cB, Bc) {
        if (cB = cB.map(Bc.changes), Bc.selection) {
          let nc = Bc.state.doc.lineAt(Bc.selection.main.head);
          cB = cB.update({
            filter: cB => cB >= nc.from && cB <= nc.to
          })
        }
        for (let nc of Bc.effects) nc.is(eB) && (cB = cB.update({
          add: [tn.range(nc.value, nc.value + 1)]
        }));
        return cB
      }
    });

    function yn() {
      return [lB, SB]
    }
    const zn = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function pB(cB) {
      for (let Bc = 0; Bc < 16; Bc += 2)
        if (zn.charCodeAt(Bc) == cB) return zn.charAt(Bc + 1);
      return (0, Vc.hb)(cB < 128 ? cB : cB + 1)
    }

    function hB(cB, Bc) {
      return cB.languageDataAt("closeBrackets", Bc)[0] || mn
    }
    const an = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      lB = Ic.i.inputHandler.of(((cB, Bc, nc, Ic) => {
        if ((an ? cB.composing : cB.compositionStarted) || cB.state.readOnly) return !1;
        let rB = cB.state.selection.main;
        if (Ic.length > 2 || 2 == Ic.length && 1 == (0, Vc.Y)((0, Vc.U)(Ic, 0)) || Bc != rB.from || nc != rB.to) return !1;
        let uc = function(cB, Bc) {
          let nc = hB(cB, cB.selection.main.head),
            Ic = nc.brackets || mn.brackets;
          for (let rB of Ic) {
            let uc = pB((0, Vc.U)(rB, 0));
            if (Bc == rB) return uc == rB ? ZB(cB, rB, Ic.indexOf(rB + rB + rB) > -1, nc) : UB(cB, rB, uc, nc.before || mn.before);
            if (Bc == uc && LB(cB, cB.selection.main.from)) return bn(cB, rB, uc)
          }
          return null
        }(cB.state, Ic);
        return !!uc && (cB.dispatch(uc), !0)
      })),
      YB = [{
        key: "Backspace",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB;
          if (Bc.readOnly) return !1;
          let Ic = hB(Bc, Bc.selection.main.head).brackets || mn.brackets,
            rB = null,
            uc = Bc.changeByRange((cB => {
              if (cB.empty) {
                let nc = function(cB, Bc) {
                  let nc = cB.sliceString(Bc - 2, Bc);
                  return (0, Vc.Y)((0, Vc.U)(nc, 0)) == nc.length ? nc : nc.slice(1)
                }(Bc.doc, cB.head);
                for (let rB of Ic)
                  if (rB == nc && gn(Bc.doc, cB.head) == pB((0, Vc.U)(rB, 0))) return {
                    changes: {
                      from: cB.head - rB.length,
                      to: cB.head + rB.length
                    },
                    range: Vc.m.cursor(cB.head - rB.length)
                  }
              }
              return {
                range: rB = cB
              }
            }));
          return rB || nc(Bc.update(uc, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !rB
        }
      }];

    function LB(cB, Bc) {
      let nc = !1;
      return cB.field(SB).between(0, cB.doc.length, (cB => {
        cB == Bc && (nc = !0)
      })), nc
    }

    function gn(cB, Bc) {
      let nc = cB.sliceString(Bc, Bc + 2);
      return nc.slice(0, (0, Vc.Y)((0, Vc.U)(nc, 0)))
    }

    function UB(cB, Bc, nc, Ic) {
      let rB = null,
        uc = cB.changeByRange((uc => {
          if (!uc.empty) return {
            changes: [{
              insert: Bc,
              from: uc.from
            }, {
              insert: nc,
              from: uc.to
            }],
            effects: eB.of(uc.to + Bc.length),
            range: Vc.m.range(uc.anchor + Bc.length, uc.head + Bc.length)
          };
          let sc = gn(cB.doc, uc.head);
          return !sc || /\s/.test(sc) || Ic.indexOf(sc) > -1 ? {
            changes: {
              insert: Bc + nc,
              from: uc.head
            },
            effects: eB.of(uc.head + Bc.length),
            range: Vc.m.cursor(uc.head + Bc.length)
          } : {
            range: rB = uc
          }
        }));
      return rB ? null : cB.update(uc, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function bn(cB, Bc, nc) {
      let Ic = null,
        rB = cB.changeByRange((Bc => Bc.empty && gn(cB.doc, Bc.head) == nc ? {
          changes: {
            from: Bc.head,
            to: Bc.head + nc.length,
            insert: nc
          },
          range: Vc.m.cursor(Bc.head + nc.length)
        } : Ic = {
          range: Bc
        }));
      return Ic ? null : cB.update(rB, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function ZB(cB, Bc, nc, Ic) {
      let uc = Ic.stringPrefixes || mn.stringPrefixes,
        sc = null,
        Mc = cB.changeByRange((Ic => {
          if (!Ic.empty) return {
            changes: [{
              insert: Bc,
              from: Ic.from
            }, {
              insert: Bc,
              from: Ic.to
            }],
            effects: eB.of(Ic.to + Bc.length),
            range: Vc.m.range(Ic.anchor + Bc.length, Ic.head + Bc.length)
          };
          let Mc, Pc = Ic.head,
            qB = gn(cB.doc, Pc);
          if (qB == Bc) {
            if (QB(cB, Pc)) return {
              changes: {
                insert: Bc + Bc,
                from: Pc
              },
              effects: eB.of(Pc + Bc.length),
              range: Vc.m.cursor(Pc + Bc.length)
            };
            if (LB(cB, Pc)) {
              let Ic = nc && cB.sliceDoc(Pc, Pc + 3 * Bc.length) == Bc + Bc + Bc ? Bc + Bc + Bc : Bc;
              return {
                changes: {
                  from: Pc,
                  to: Pc + Ic.length,
                  insert: Ic
                },
                range: Vc.m.cursor(Pc + Ic.length)
              }
            }
          } else {
            if (nc && cB.sliceDoc(Pc - 2 * Bc.length, Pc) == Bc + Bc && (Mc = CB(cB, Pc - 2 * Bc.length, uc)) > -1 && QB(cB, Mc)) return {
              changes: {
                insert: Bc + Bc + Bc + Bc,
                from: Pc
              },
              effects: eB.of(Pc + Bc.length),
              range: Vc.m.cursor(Pc + Bc.length)
            };
            if (cB.charCategorizer(Pc)(qB) != Vc.i.Word && CB(cB, Pc, uc) > -1 && ! function(cB, Bc, nc, Vc) {
                let Ic = (0, rB.lb)(cB).resolveInner(Bc, -1),
                  uc = Vc.reduce(((cB, Bc) => Math.max(cB, Bc.length)), 0);
                for (let rB = 0; rB < 5; rB++) {
                  let rB = cB.sliceDoc(Ic.from, Math.min(Ic.to, Ic.from + nc.length + uc)),
                    sc = rB.indexOf(nc);
                  if (!sc || sc > -1 && Vc.indexOf(rB.slice(0, sc)) > -1) {
                    let Bc = Ic.firstChild;
                    for (; Bc && Bc.from == Ic.from && Bc.to - Bc.from > nc.length + sc;) {
                      if (cB.sliceDoc(Bc.to - nc.length, Bc.to) == nc) return !1;
                      Bc = Bc.firstChild
                    }
                    return !0
                  }
                  let Mc = Ic.to == Bc && Ic.parent;
                  if (!Mc) break;
                  Ic = Mc
                }
                return !1
              }(cB, Pc, Bc, uc)) return {
              changes: {
                insert: Bc + Bc,
                from: Pc
              },
              effects: eB.of(Pc + Bc.length),
              range: Vc.m.cursor(Pc + Bc.length)
            }
          }
          return {
            range: sc = Ic
          }
        }));
      return sc ? null : cB.update(Mc, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function QB(cB, Bc) {
      let nc = (0, rB.lb)(cB).resolveInner(Bc + 1);
      return nc.parent && nc.from == Bc
    }

    function CB(cB, Bc, nc) {
      let Ic = cB.charCategorizer(Bc);
      if (Ic(cB.sliceDoc(Bc - 1, Bc)) != Vc.i.Word) return Bc;
      for (let rB of nc) {
        let nc = Bc - rB.length;
        if (cB.sliceDoc(nc, Bc) == rB && Ic(cB.sliceDoc(nc - 1, nc)) != Vc.i.Word) return nc
      }
      return -1
    }

    function vn() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Kc, kB, hc.of(cB), Rc, NB, xB]
    }
    const DB = [{
        key: "Ctrl-Space",
        run: Jc
      }, {
        mac: "Alt-`",
        run: Jc
      }, {
        mac: "Alt-i",
        run: Jc
      }, {
        key: "Escape",
        run: cB => {
          let Bc = cB.state.field(kB, !1);
          return !(!Bc || !Bc.active.some((cB => 0 != cB.state))) && (cB.dispatch({
            effects: yB.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: Fc(!0)
      }, {
        key: "ArrowUp",
        run: Fc(!1)
      }, {
        key: "PageDown",
        run: Fc(!0, "page")
      }, {
        key: "PageUp",
        run: Fc(!1, "page")
      }, {
        key: "Enter",
        run: cB => {
          let Bc = cB.state.field(kB, !1);
          return !(cB.state.readOnly || !Bc || !Bc.open || Bc.open.selected < 0 || Bc.open.disabled || Date.now() - Bc.open.timestamp < cB.state.facet(hc).interactionDelay) && Xc(cB, Bc.open.options[Bc.open.selected])
        }
      }],
      NB = Vc.v.highest(Ic.S.computeN([hc], (cB => cB.facet(hc).defaultKeymap ? [DB] : [])))
  },
  39421: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Pc,
      e: () => Tc,
      g: () => qB,
      h: () => Oc
    });
    var Vc = nc(39279);
    class Ic {
      constructor(cB, Bc, nc, Vc) {
        this.origin = cB, this.changes = Bc, this.effects = nc, this.clientID = Vc
      }
    }
    class rB {
      constructor(cB, Bc) {
        this.version = cB, this.unconfirmed = Bc
      }
    }
    const uc = Vc.q.define({
        combine(cB) {
          let Bc = (0, Vc.$)(cB, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: cB => cB
          });
          return null == Bc.clientID && (Bc.clientID = cB.length && cB[0].generatedID || ""), Bc
        }
      }),
      sc = Vc.c.define(),
      Mc = Vc.J.define({
        create: cB => new rB(cB.facet(uc).startVersion, []),
        update(cB, Bc) {
          let nc = Bc.annotation(sc);
          if (nc) return nc;
          let {
            sharedEffects: Vc,
            clientID: Mc
          } = Bc.startState.facet(uc), Pc = Vc(Bc);
          return Pc.length || !Bc.changes.empty ? new rB(cB.version, cB.unconfirmed.concat(new Ic(Bc, Bc.changes, Pc, Mc))) : cB
        }
      });

    function Pc() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Mc, uc.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, cB))]
    }

    function qB(cB, Bc) {
      let {
        version: nc,
        unconfirmed: Pc
      } = cB.field(Mc), {
        clientID: qB
      } = cB.facet(uc);
      nc += Bc.length;
      let Oc = [],
        Tc = null,
        fc = 0;
      for (let Ic of Bc) {
        let cB = fc < Pc.length ? Pc[fc] : null;
        cB && cB.clientID == Ic.clientID ? (Tc && (Tc = Tc.map(cB.changes, !0)), Oc = Vc.F.mapEffects(Oc, Ic.changes), fc++) : (Oc = Vc.F.mapEffects(Oc, Ic.changes), Ic.effects && (Oc = Oc.concat(Ic.effects)), Tc = Tc ? Tc.compose(Ic.changes) : Ic.changes)
      }
      if (fc && (Pc = Pc.slice(fc)), Pc.length && (Tc && (Pc = Pc.map((cB => {
          let Bc = cB.changes.map(Tc);
          return Tc = Tc.map(cB.changes, !0), new Ic(cB.origin, Bc, Vc.F.mapEffects(cB.effects, Tc), qB)
        }))), Oc.length)) {
        let cB = Pc.reduce(((cB, Bc) => cB.compose(Bc.changes)), Vc.ChangeSet.empty(Pc[0].changes.length));
        Oc = Vc.F.mapEffects(Oc, cB)
      }
      return Tc ? cB.update({
        changes: Tc,
        effects: Oc,
        annotations: [Vc.R.addToHistory.of(!1), Vc.R.remote.of(!0), sc.of(new rB(nc, Pc))],
        filter: !1
      }) : cB.update({
        annotations: [sc.of(new rB(nc, Pc))]
      })
    }

    function Oc(cB) {
      return cB.field(Mc).unconfirmed
    }

    function Tc(cB) {
      return cB.field(Mc).version
    }
  },
  39315: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => eB
    });
    var Vc = nc(39307);
    class Ic {
      constructor(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        let Pc = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          qB = arguments.length > 10 ? arguments[10] : void 0;
        this.p = cB, this.stack = Bc, this.state = nc, this.reducePos = Vc, this.pos = Ic, this.score = rB, this.buffer = uc, this.bufferBase = sc, this.curContext = Mc, this.lookAhead = Pc, this.parent = qB
      }
      toString() {
        return `[${this.stack.filter(((cB,Bc)=>Bc%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = cB.parser.context;
        return new Ic(cB, [], Bc, nc, nc, 0, [], 0, Vc ? new rB(Vc, Vc.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(cB, Bc) {
        this.stack.push(this.state, Bc, this.bufferBase + this.buffer.length), this.state = cB
      }
      reduce(cB) {
        var Bc;
        let nc = cB >> 19,
          Vc = 65535 & cB,
          {
            parser: Ic
          } = this.p,
          rB = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          uc = Ic.dynamicPrecedence(Vc);
        if (uc && (this.score += uc), 0 == nc) return this.pushState(Ic.getGoto(this.state, Vc, !0), this.reducePos), Vc < Ic.minRepeatTerm && this.storeNode(Vc, this.reducePos, this.reducePos, rB ? 8 : 4, !0), void this.reduceContext(Vc, this.reducePos);
        let sc = this.stack.length - 3 * (nc - 1) - (262144 & cB ? 6 : 0),
          Mc = sc ? this.stack[sc - 2] : this.p.Iu[0].from,
          Pc = this.reducePos - Mc;
        Pc >= 2e3 && !(null === (Bc = this.p.parser.nodeSet.types[Vc]) || void 0 === Bc ? void 0 : Bc.isAnonymous) && (Mc == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Pc) : this.p.lastBigReductionSize < Pc && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = Mc, this.p.lastBigReductionSize = Pc));
        let qB = sc ? this.stack[sc - 1] : 0,
          Oc = this.bufferBase + this.buffer.length - qB;
        if (Vc < Ic.minRepeatTerm || 131072 & cB) {
          let cB = Ic.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Vc, Mc, cB, Oc + 4, !0)
        }
        if (262144 & cB) this.state = this.stack[sc];
        else {
          let cB = this.stack[sc - 3];
          this.state = Ic.getGoto(cB, Vc, !0)
        }
        for (; this.stack.length > sc;) this.stack.pop();
        this.reduceContext(Vc, Mc)
      }
      storeNode(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == cB && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let cB = this,
            Vc = this.buffer.length;
          if (0 == Vc && cB.parent && (Vc = cB.bufferBase - cB.parent.bufferBase, cB = cB.parent), Vc > 0 && 0 == cB.buffer[Vc - 4] && cB.buffer[Vc - 1] > -1) {
            if (Bc == nc) return;
            if (cB.buffer[Vc - 2] >= Bc) return void(cB.buffer[Vc - 2] = nc)
          }
        }
        if (Ic && this.pos != nc) {
          let Ic = this.buffer.length;
          if (Ic > 0 && (0 != this.buffer[Ic - 4] || this.buffer[Ic - 1] < 0)) {
            let cB = !1;
            for (let Bc = Ic; Bc > 0 && this.buffer[Bc - 2] > nc; Bc -= 4)
              if (this.buffer[Bc - 1] >= 0) {
                cB = !0;
                break
              } if (cB)
              for (; Ic > 0 && this.buffer[Ic - 2] > nc;) this.buffer[Ic] = this.buffer[Ic - 4], this.buffer[Ic + 1] = this.buffer[Ic - 3], this.buffer[Ic + 2] = this.buffer[Ic - 2], this.buffer[Ic + 3] = this.buffer[Ic - 1], Ic -= 4, Vc > 4 && (Vc -= 4)
          }
          this.buffer[Ic] = cB, this.buffer[Ic + 1] = Bc, this.buffer[Ic + 2] = nc, this.buffer[Ic + 3] = Vc
        } else this.buffer.push(cB, Bc, nc, Vc)
      }
      shift(cB, Bc, nc, Vc) {
        if (131072 & cB) this.pushState(65535 & cB, this.pos);
        else if (0 == (262144 & cB)) {
          let Ic = cB,
            {
              parser: rB
            } = this.p;
          this.pos = Vc;
          let uc = rB.stateFlag(Ic, 1);
          !uc && (Vc > nc || Bc <= rB.maxNode) && (this.reducePos = Vc), this.pushState(Ic, uc ? nc : Math.min(nc, this.reducePos)), this.shiftContext(Bc, nc), Bc <= rB.maxNode && this.buffer.push(Bc, nc, Vc, 4)
        } else this.pos = Vc, this.shiftContext(Bc, nc), Bc <= this.p.parser.maxNode && this.buffer.push(Bc, nc, Vc, 4)
      }
      apply(cB, Bc, nc, Vc) {
        65536 & cB ? this.reduce(cB) : this.shift(cB, Bc, nc, Vc)
      }
      useNode(cB, Bc) {
        let nc = this.p.reused.length - 1;
        (nc < 0 || this.p.reused[nc] != cB) && (this.p.reused.push(cB), nc++);
        let Vc = this.pos;
        this.reducePos = this.pos = Vc + cB.length, this.pushState(Bc, Vc), this.buffer.push(nc, Vc, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, cB, this, this.p.stream.reset(this.pos - cB.length)))
      }
      split() {
        let cB = this,
          Bc = cB.buffer.length;
        for (; Bc > 0 && cB.buffer[Bc - 2] > cB.reducePos;) Bc -= 4;
        let nc = cB.buffer.slice(Bc),
          Vc = cB.bufferBase + Bc;
        for (; cB && Vc == cB.bufferBase;) cB = cB.parent;
        return new Ic(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, nc, Vc, this.curContext, this.lookAhead, cB)
      }
      recoverByDelete(cB, Bc) {
        let nc = cB <= this.p.parser.maxNode;
        nc && this.storeNode(cB, this.pos, Bc, 4), this.storeNode(0, this.pos, Bc, nc ? 8 : 4), this.pos = this.reducePos = Bc, this.score -= 190
      }
      canShift(cB) {
        for (let Bc = new uc(this);;) {
          let nc = this.p.parser.stateSlot(Bc.state, 4) || this.p.parser.hasAction(Bc.state, cB);
          if (0 == nc) return !1;
          if (0 == (65536 & nc)) return !0;
          Bc.reduce(nc)
        }
      }
      recoverByInsert(cB) {
        if (this.stack.length >= 300) return [];
        let Bc = this.p.parser.nextStates(this.state);
        if (Bc.length > 8 || this.stack.length >= 120) {
          let nc = [];
          for (let Vc, Ic = 0; Ic < Bc.length; Ic += 2)(Vc = Bc[Ic + 1]) != this.state && this.p.parser.hasAction(Vc, cB) && nc.push(Bc[Ic], Vc);
          if (this.stack.length < 120)
            for (let cB = 0; nc.length < 8 && cB < Bc.length; cB += 2) {
              let Vc = Bc[cB + 1];
              nc.some(((cB, Bc) => 1 & Bc && cB == Vc)) || nc.push(Bc[cB], Vc)
            }
          Bc = nc
        }
        let nc = [];
        for (let Vc = 0; Vc < Bc.length && nc.length < 4; Vc += 2) {
          let cB = Bc[Vc + 1];
          if (cB == this.state) continue;
          let Ic = this.split();
          Ic.pushState(cB, this.pos), Ic.storeNode(0, Ic.pos, Ic.pos, 4, !0), Ic.shiftContext(Bc[Vc], this.pos), Ic.reducePos = this.pos, Ic.score -= 200, nc.push(Ic)
        }
        return nc
      }
      forceReduce() {
        let {
          parser: cB
        } = this.p, Bc = cB.stateSlot(this.state, 5);
        if (0 == (65536 & Bc)) return !1;
        if (!cB.validAction(this.state, Bc)) {
          let nc = Bc >> 19,
            Vc = 65535 & Bc,
            Ic = this.stack.length - 3 * nc;
          if (Ic < 0 || cB.getGoto(this.stack[Ic], Vc, !1) < 0) {
            let cB = this.findForcedReduction();
            if (null == cB) return !1;
            Bc = cB
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(Bc), !0
      }
      findForcedReduction() {
        let {
          parser: cB
        } = this.p, Bc = [], nc = (Vc, Ic) => {
          if (!Bc.includes(Vc)) return Bc.push(Vc), cB.allActions(Vc, (Bc => {
            if (393216 & Bc);
            else if (65536 & Bc) {
              let nc = (Bc >> 19) - Ic;
              if (nc > 1) {
                let Vc = 65535 & Bc,
                  Ic = this.stack.length - 3 * nc;
                if (Ic >= 0 && cB.getGoto(this.stack[Ic], Vc, !1) >= 0) return nc << 19 | 65536 | Vc
              }
            } else {
              let cB = nc(Bc, Ic + 1);
              if (null != cB) return cB
            }
          }))
        };
        return nc(this.state, 0)
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
          parser: cB
        } = this.p;
        return 65535 == cB.data[cB.stateSlot(this.state, 1)] && !cB.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(cB) {
        if (this.state != cB.state || this.stack.length != cB.stack.length) return !1;
        for (let Bc = 0; Bc < this.stack.length; Bc += 3)
          if (this.stack[Bc] != cB.stack[Bc]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(cB) {
        return this.p.parser.dialect.flags[cB]
      }
      shiftContext(cB, Bc) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, cB, this, this.p.stream.reset(Bc)))
      }
      reduceContext(cB, Bc) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, cB, this, this.p.stream.reset(Bc)))
      }
      emitContext() {
        let cB = this.buffer.length - 1;
        (cB < 0 || -3 != this.buffer[cB]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let cB = this.buffer.length - 1;
        (cB < 0 || -4 != this.buffer[cB]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(cB) {
        if (cB != this.curContext.context) {
          let Bc = new rB(this.curContext.tracker, cB);
          Bc.hash != this.curContext.hash && this.emitContext(), this.curContext = Bc
        }
      }
      setLookAhead(cB) {
        return !(cB <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = cB, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class rB {
      constructor(cB, Bc) {
        this.tracker = cB, this.context = Bc, this.hash = cB.strict ? cB.hash(Bc) : 0
      }
    }
    class uc {
      constructor(cB) {
        this.start = cB, this.state = cB.state, this.stack = cB.stack, this.base = this.stack.length
      }
      reduce(cB) {
        let Bc = 65535 & cB,
          nc = cB >> 19;
        0 == nc ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (nc - 1);
        let Vc = this.start.p.parser.getGoto(this.stack[this.base - 3], Bc, !0);
        this.state = Vc
      }
    }
    class sc {
      constructor(cB, Bc, nc) {
        this.stack = cB, this.pos = Bc, this.index = nc, this.buffer = cB.buffer, 0 == this.index && this.maybeNext()
      }
      static create(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB.bufferBase + cB.buffer.length;
        return new sc(cB, Bc, Bc - cB.bufferBase)
      }
      maybeNext() {
        let cB = this.stack.parent;
        null != cB && (this.index = this.stack.bufferBase - cB.bufferBase, this.stack = cB, this.buffer = cB.buffer)
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
        return new sc(this.stack, this.pos, this.index)
      }
    }

    function Mc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof cB) return cB;
      let nc = null;
      for (let Vc = 0, Ic = 0; Vc < cB.length;) {
        let rB = 0;
        for (;;) {
          let Bc = cB.charCodeAt(Vc++),
            nc = !1;
          if (126 == Bc) {
            rB = 65535;
            break
          }
          Bc >= 92 && Bc--, Bc >= 34 && Bc--;
          let Ic = Bc - 32;
          if (Ic >= 46 && (Ic -= 46, nc = !0), rB += Ic, nc) break;
          rB *= 46
        }
        nc ? nc[Ic++] = rB : nc = new Bc(rB)
      }
      return nc
    }
    class Pc {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const qB = new Pc;
    class Oc {
      constructor(cB, Bc) {
        this.input = cB, this.Iu = Bc, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = qB, this.rangeIndex = 0, this.pos = this.chunkPos = Bc[0].from, this.range = Bc[0], this.end = Bc[Bc.length - 1].to, this.readNext()
      }
      resolveOffset(cB, Bc) {
        let nc = this.range,
          Vc = this.rangeIndex,
          Ic = this.pos + cB;
        for (; Ic < nc.from;) {
          if (!Vc) return null;
          let cB = this.Iu[--Vc];
          Ic -= nc.from - cB.to, nc = cB
        }
        for (; Bc < 0 ? Ic > nc.to : Ic >= nc.to;) {
          if (Vc == this.Iu.length - 1) return null;
          let cB = this.Iu[++Vc];
          Ic += cB.from - nc.to, nc = cB
        }
        return Ic
      }
      clipPos(cB) {
        if (cB >= this.range.from && cB < this.range.to) return cB;
        for (let Bc of this.Iu)
          if (Bc.to > cB) return Math.max(cB, Bc.from);
        return this.end
      }
      peek(cB) {
        let Bc, nc, Vc = this.chunkOff + cB;
        if (Vc >= 0 && Vc < this.chunk.length) Bc = this.pos + cB, nc = this.chunk.charCodeAt(Vc);
        else {
          let Vc = this.resolveOffset(cB, 1);
          if (null == Vc) return -1;
          if (Bc = Vc, Bc >= this.chunk2Pos && Bc < this.chunk2Pos + this.chunk2.length) nc = this.chunk2.charCodeAt(Bc - this.chunk2Pos);
          else {
            let cB = this.rangeIndex,
              Vc = this.range;
            for (; Vc.to <= Bc;) Vc = this.Iu[++cB];
            this.chunk2 = this.input.chunk(this.chunk2Pos = Bc), Bc + this.chunk2.length > Vc.to && (this.chunk2 = this.chunk2.slice(0, Vc.to - Bc)), nc = this.chunk2.charCodeAt(0)
          }
        }
        return Bc >= this.token.lookAhead && (this.token.lookAhead = Bc + 1), nc
      }
      acceptToken(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = Bc ? this.resolveOffset(Bc, -1) : this.pos;
        if (null == nc || nc < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = cB, this.token.end = nc
      }
      acceptTokenTo(cB, Bc) {
        this.token.value = cB, this.token.end = Bc
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: cB,
            chunkPos: Bc
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = cB, this.chunk2Pos = Bc, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let cB = this.input.chunk(this.pos),
            Bc = this.pos + cB.length;
          this.chunk = Bc > this.range.to ? cB.slice(0, this.range.to - this.pos) : cB, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += cB; this.pos + cB >= this.range.to;) {
          if (this.rangeIndex == this.Iu.length - 1) return this.setDone();
          cB -= this.range.to - this.pos, this.range = this.Iu[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += cB, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.Iu[this.rangeIndex = this.Iu.length - 1], this.chunk = "", this.next = -1
      }
      reset(cB, Bc) {
        if (Bc ? (this.token = Bc, Bc.start = cB, Bc.lookAhead = cB + 1, Bc.value = Bc.extended = -1) : this.token = qB, this.pos != cB) {
          if (this.pos = cB, cB == this.end) return this.setDone(), this;
          for (; cB < this.range.from;) this.range = this.Iu[--this.rangeIndex];
          for (; cB >= this.range.to;) this.range = this.Iu[++this.rangeIndex];
          cB >= this.chunkPos && cB < this.chunkPos + this.chunk.length ? this.chunkOff = cB - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(cB, Bc) {
        if (cB >= this.chunkPos && Bc <= this.chunkPos + this.chunk.length) return this.chunk.slice(cB - this.chunkPos, Bc - this.chunkPos);
        if (cB >= this.chunk2Pos && Bc <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(cB - this.chunk2Pos, Bc - this.chunk2Pos);
        if (cB >= this.range.from && Bc <= this.range.to) return this.input.read(cB, Bc);
        let nc = "";
        for (let Vc of this.Iu) {
          if (Vc.from >= Bc) break;
          Vc.to > cB && (nc += this.input.read(Math.max(Vc.from, cB), Math.min(Vc.to, Bc)))
        }
        return nc
      }
    }
    class Tc {
      constructor(cB, Bc) {
        this.data = cB, this.id = Bc
      }
      token(cB, Bc) {
        let {
          parser: nc
        } = Bc.p;
        ec(this.data, cB, Bc, this.id, nc.data, nc.tokenPrecTable)
      }
    }
    Tc.prototype.contextual = Tc.prototype.fallback = Tc.prototype.extend = !1;
    class fc {
      constructor(cB, Bc, nc) {
        this.precTable = Bc, this.elseToken = nc, this.data = "string" == typeof cB ? Mc(cB) : cB
      }
      token(cB, Bc) {
        let nc = cB.pos,
          Vc = 0;
        for (;;) {
          let nc = cB.next < 0,
            Ic = cB.resolveOffset(1, 1);
          if (ec(this.data, cB, Bc, 0, this.data, this.precTable), cB.token.value > -1) break;
          if (null == this.elseToken) return;
          if (nc || Vc++, null == Ic) break;
          cB.reset(Ic, cB.token)
        }
        Vc && (cB.reset(nc, cB.token), cB.acceptToken(this.elseToken, Vc))
      }
    }
    fc.prototype.contextual = Tc.prototype.fallback = Tc.prototype.extend = !1;
    class mB {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = cB, this.contextual = !!Bc.contextual, this.fallback = !!Bc.fallback, this.extend = !!Bc.extend
      }
    }

    function ec(cB, Bc, nc, Vc, Ic, rB) {
      let uc = 0,
        sc = 1 << Vc,
        {
          dialect: Mc
        } = nc.p.parser;
      cB: for (; 0 != (sc & cB[uc]);) {
        let nc = cB[uc + 1];
        for (let Oc = uc + 3; Oc < nc; Oc += 2)
          if ((cB[Oc + 1] & sc) > 0) {
            let nc = cB[Oc];
            if (Mc.allows(nc) && (-1 == Bc.token.value || Bc.token.value == nc || Sc(nc, Bc.token.value, Ic, rB))) {
              Bc.acceptToken(nc);
              break
            }
          } let Vc = Bc.next,
          Pc = 0,
          qB = cB[uc + 2];
        if (!(Bc.next < 0 && qB > Pc && 65535 == cB[nc + 3 * qB - 3])) {
          for (; Pc < qB;) {
            let Ic = Pc + qB >> 1,
              rB = nc + Ic + (Ic << 1),
              sc = cB[rB],
              Mc = cB[rB + 1] || 65536;
            if (Vc < sc) qB = Ic;
            else {
              if (!(Vc >= Mc)) {
                uc = cB[rB + 2], Bc.advance();
                continue cB
              }
              Pc = Ic + 1
            }
          }
          break
        }
        uc = cB[nc + 3 * qB - 1]
      }
    }

    function tB(cB, Bc, nc) {
      for (let Vc, Ic = Bc; 65535 != (Vc = cB[Ic]); Ic++)
        if (Vc == nc) return Ic - Bc;
      return -1
    }

    function Sc(cB, Bc, nc, Vc) {
      let Ic = tB(nc, Vc, Bc);
      return Ic < 0 || tB(nc, Vc, cB) < Ic
    }
    const yB = "undefined" != typeof process && {
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
    let zB = null;

    function pc(cB, Bc, nc) {
      let Ic = cB.cursor(Vc.g.IncludeAnonymous);
      for (Ic.moveTo(Bc);;)
        if (!(nc < 0 ? Ic.childBefore(Bc) : Ic.childAfter(Bc)))
          for (;;) {
            if ((nc < 0 ? Ic.to < Bc : Ic.from > Bc) && !Ic.type.isError) return nc < 0 ? Math.max(0, Math.min(Ic.to - 1, Bc - 25)) : Math.min(cB.length, Math.max(Ic.from + 1, Bc + 25));
            if (nc < 0 ? Ic.prevSibling() : Ic.nextSibling()) break;
            if (!Ic.parent()) return nc < 0 ? 0 : cB.length
          }
    }
    class hc {
      constructor(cB, Bc) {
        this.fragments = cB, this.nodeSet = Bc, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let cB = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (cB) {
          for (this.safeFrom = cB.openStart ? pc(cB.tree, cB.from + cB.offset, 1) - cB.offset : cB.from, this.safeTo = cB.openEnd ? pc(cB.tree, cB.to + cB.offset, -1) - cB.offset : cB.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(cB.tree), this.start.push(-cB.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(cB) {
        if (cB < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= cB;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let Bc = this.trees.length - 1;
          if (Bc < 0) return this.nextFragment(), null;
          let nc = this.trees[Bc],
            Ic = this.index[Bc];
          if (Ic == nc.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let rB = nc.children[Ic],
            uc = this.start[Bc] + nc.positions[Ic];
          if (uc > cB) return this.nextStart = uc, null;
          if (rB instanceof Vc.u) {
            if (uc == cB) {
              if (uc < this.safeFrom) return null;
              let cB = uc + rB.length;
              if (cB <= this.safeTo) {
                let Bc = rB.prop(Vc.k.lookAhead);
                if (!Bc || cB + Bc < this.fragment.to) return rB
              }
            }
            this.index[Bc]++, uc + rB.length >= Math.max(this.safeFrom, cB) && (this.trees.push(rB), this.start.push(uc), this.index.push(0))
          } else this.index[Bc]++, this.nextStart = uc + rB.length
        }
      }
    }
    class aB {
      constructor(cB, Bc) {
        this.stream = Bc, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = cB.tokenizers.map((cB => new Pc))
      }
      getActions(cB) {
        let Bc = 0,
          nc = null,
          {
            parser: Vc
          } = cB.p,
          {
            tokenizers: Ic
          } = Vc,
          rB = Vc.stateSlot(cB.state, 3),
          uc = cB.curContext ? cB.curContext.hash : 0,
          sc = 0;
        for (let Mc = 0; Mc < Ic.length; Mc++) {
          if (0 == (1 << Mc & rB)) continue;
          let Vc = Ic[Mc],
            Pc = this.tokens[Mc];
          if ((!nc || Vc.fallback) && ((Vc.contextual || Pc.start != cB.pos || Pc.mask != rB || Pc.context != uc) && (this.updateCachedToken(Pc, Vc, cB), Pc.mask = rB, Pc.context = uc), Pc.lookAhead > Pc.end + 25 && (sc = Math.max(Pc.lookAhead, sc)), 0 != Pc.value)) {
            let Ic = Bc;
            if (Pc.extended > -1 && (Bc = this.addActions(cB, Pc.extended, Pc.end, Bc)), Bc = this.addActions(cB, Pc.value, Pc.end, Bc), !Vc.extend && (nc = Pc, Bc > Ic)) break
          }
        }
        for (; this.actions.length > Bc;) this.actions.pop();
        return sc && cB.setLookAhead(sc), nc || cB.pos != this.stream.end || (nc = new Pc, nc.value = cB.p.parser.eofTerm, nc.start = nc.end = cB.pos, Bc = this.addActions(cB, nc.value, nc.end, Bc)), this.mainToken = nc, this.actions
      }
      getMainToken(cB) {
        if (this.mainToken) return this.mainToken;
        let Bc = new Pc,
          {
            pos: nc,
            p: Vc
          } = cB;
        return Bc.start = nc, Bc.end = Math.min(nc + 1, Vc.stream.end), Bc.value = nc == Vc.stream.end ? Vc.parser.eofTerm : 0, Bc
      }
      updateCachedToken(cB, Bc, nc) {
        let Vc = this.stream.clipPos(nc.pos);
        if (Bc.token(this.stream.reset(Vc, cB), nc), cB.value > -1) {
          let {
            parser: Bc
          } = nc.p;
          for (let Vc = 0; Vc < Bc.specialized.length; Vc++)
            if (Bc.specialized[Vc] == cB.value) {
              let Ic = Bc.specializers[Vc](this.stream.read(cB.start, cB.end), nc);
              if (Ic >= 0 && nc.p.parser.dialect.allows(Ic >> 1)) {
                0 == (1 & Ic) ? cB.value = Ic >> 1 : cB.extended = Ic >> 1;
                break
              }
            }
        } else cB.value = 0, cB.end = this.stream.clipPos(Vc + 1)
      }
      putAction(cB, Bc, nc, Vc) {
        for (let Ic = 0; Ic < Vc; Ic += 3)
          if (this.actions[Ic] == cB) return Vc;
        return this.actions[Vc++] = cB, this.actions[Vc++] = Bc, this.actions[Vc++] = nc, Vc
      }
      addActions(cB, Bc, nc, Vc) {
        let {
          state: Ic
        } = cB, {
          parser: rB
        } = cB.p, {
          data: uc
        } = rB;
        for (let sc = 0; sc < 2; sc++)
          for (let cB = rB.stateSlot(Ic, sc ? 2 : 1);; cB += 3) {
            if (65535 == uc[cB]) {
              if (1 != uc[cB + 1]) {
                0 == Vc && 2 == uc[cB + 1] && (Vc = this.putAction(bB(uc, cB + 2), Bc, nc, Vc));
                break
              }
              cB = bB(uc, cB + 2)
            }
            uc[cB] == Bc && (Vc = this.putAction(bB(uc, cB + 1), Bc, nc, Vc))
          }
        return Vc
      }
    }
    class lc {
      constructor(cB, Bc, nc, Vc) {
        this.parser = cB, this.input = Bc, this.Iu = Vc, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Oc(Bc, Vc), this.tokens = new aB(cB, this.stream), this.topTerm = cB.top[1];
        let {
          from: rB
        } = Vc[0];
        this.stacks = [Ic.start(this, cB.top[0], rB)], this.fragments = nc.length && this.stream.end - rB > 4 * cB.bufferLength ? new hc(nc, cB.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let cB, Bc, nc = this.stacks,
          Vc = this.minStackPos,
          Ic = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == nc.length) {
          let [cB] = nc;
          for (; cB.forceReduce() && cB.stack.length && cB.stack[cB.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let rB = 0; rB < nc.length; rB++) {
          let uc = nc[rB];
          for (;;) {
            if (this.tokens.mainToken = null, uc.pos > Vc) Ic.push(uc);
            else {
              if (this.advanceStack(uc, Ic, nc)) continue;
              {
                cB || (cB = [], Bc = []), cB.push(uc);
                let nc = this.tokens.getMainToken(uc);
                Bc.push(nc.value, nc.end)
              }
            }
            break
          }
        }
        if (!Ic.length) {
          let Bc = cB && function(cB) {
            let Bc = null;
            for (let nc of cB) {
              let cB = nc.p.stoppedAt;
              (nc.pos == nc.p.stream.end || null != cB && nc.pos > cB) && nc.p.parser.stateFlag(nc.state, 2) && (!Bc || Bc.score < nc.score) && (Bc = nc)
            }
            return Bc
          }(cB);
          if (Bc) return yB && console.log("Finish with " + this.stackID(Bc)), this.stackToTree(Bc);
          if (this.parser.strict) throw yB && cB && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Vc);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && cB) {
          let nc = null != this.stoppedAt && cB[0].pos > this.stoppedAt ? cB[0] : this.runRecovery(cB, Bc, Ic);
          if (nc) return yB && console.log("Force-finish " + this.stackID(nc)), this.stackToTree(nc.forceAll())
        }
        if (this.recovering) {
          let cB = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Ic.length > cB)
            for (Ic.sort(((cB, Bc) => Bc.score - cB.score)); Ic.length > cB;) Ic.pop();
          Ic.some((cB => cB.reducePos > Vc)) && this.recovering--
        } else if (Ic.length > 1) {
          cB: for (let cB = 0; cB < Ic.length - 1; cB++) {
            let Bc = Ic[cB];
            for (let nc = cB + 1; nc < Ic.length; nc++) {
              let Vc = Ic[nc];
              if (Bc.sameState(Vc) || Bc.buffer.length > 500 && Vc.buffer.length > 500) {
                if (!((Bc.score - Vc.score || Bc.buffer.length - Vc.buffer.length) > 0)) {
                  Ic.splice(cB--, 1);
                  continue cB
                }
                Ic.splice(nc--, 1)
              }
            }
          }
          Ic.length > 12 && (Ic.sort(((cB, Bc) => Bc.score - cB.score)), Ic.splice(12, Ic.length - 12))
        }
        this.minStackPos = Ic[0].pos;
        for (let rB = 1; rB < Ic.length; rB++) Ic[rB].pos < this.minStackPos && (this.minStackPos = Ic[rB].pos);
        return null
      }
      stopAt(cB) {
        if (null != this.stoppedAt && this.stoppedAt < cB) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = cB
      }
      advanceStack(cB, Bc, nc) {
        let Ic = cB.pos,
          {
            parser: rB
          } = this,
          uc = yB ? this.stackID(cB) + " -> " : "";
        if (null != this.stoppedAt && Ic > this.stoppedAt) return cB.forceReduce() ? cB : null;
        if (this.fragments) {
          let Bc = cB.curContext && cB.curContext.tracker.strict,
            nc = Bc ? cB.curContext.hash : 0;
          for (let sc = this.fragments.nodeAt(Ic); sc;) {
            let Ic = this.parser.nodeSet.types[sc.type.id] == sc.type ? rB.getGoto(cB.state, sc.type.id) : -1;
            if (Ic > -1 && sc.length && (!Bc || (sc.prop(Vc.k.contextHash) || 0) == nc)) return cB.useNode(sc, Ic), yB && console.log(uc + this.stackID(cB) + ` (via reuse of ${rB.getName(sc.type.id)})`), !0;
            if (!(sc instanceof Vc.u) || 0 == sc.children.length || sc.positions[0] > 0) break;
            let Mc = sc.children[0];
            if (!(Mc instanceof Vc.u && 0 == sc.positions[0])) break;
            sc = Mc
          }
        }
        let sc = rB.stateSlot(cB.state, 4);
        if (sc > 0) return cB.reduce(sc), yB && console.log(uc + this.stackID(cB) + ` (via always-reduce ${rB.getName(65535&sc)})`), !0;
        if (cB.stack.length >= 8400)
          for (; cB.stack.length > 6e3 && cB.forceReduce(););
        let Mc = this.tokens.getActions(cB);
        for (let Vc = 0; Vc < Mc.length;) {
          let sc = Mc[Vc++],
            Pc = Mc[Vc++],
            qB = Mc[Vc++],
            Oc = Vc == Mc.length || !nc,
            Tc = Oc ? cB : cB.split(),
            fc = this.tokens.mainToken;
          if (Tc.apply(sc, Pc, fc ? fc.start : Tc.pos, qB), yB && console.log(uc + this.stackID(Tc) + ` (via ${0==(65536&sc)?"shift":`reduce of ${rB.getName(65535&sc)}`} for ${rB.getName(Pc)} @ ${Ic}${Tc==cB?"":", split"})`), Oc) return !0;
          Tc.pos > Ic ? Bc.push(Tc) : nc.push(Tc)
        }
        return !1
      }
      advanceFully(cB, Bc) {
        let nc = cB.pos;
        for (;;) {
          if (!this.advanceStack(cB, null, null)) return !1;
          if (cB.pos > nc) return Yc(cB, Bc), !0
        }
      }
      runRecovery(cB, Bc, nc) {
        let Vc = null,
          Ic = !1;
        for (let rB = 0; rB < cB.length; rB++) {
          let uc = cB[rB],
            sc = Bc[rB << 1],
            Mc = Bc[1 + (rB << 1)],
            Pc = yB ? this.stackID(uc) + " -> " : "";
          if (uc.deadEnd) {
            if (Ic) continue;
            if (Ic = !0, uc.restart(), yB && console.log(Pc + this.stackID(uc) + " (restarted)"), this.advanceFully(uc, nc)) continue
          }
          let qB = uc.split(),
            Oc = Pc;
          for (let cB = 0; cB < 10 && qB.forceReduce(); cB++) {
            if (yB && console.log(Oc + this.stackID(qB) + " (via force-reduce)"), this.advanceFully(qB, nc)) break;
            yB && (Oc = this.stackID(qB) + " -> ")
          }
          for (let cB of uc.recoverByInsert(sc)) yB && console.log(Pc + this.stackID(cB) + " (via recover-insert)"), this.advanceFully(cB, nc);
          this.stream.end > uc.pos ? (Mc == uc.pos && (Mc++, sc = 0), uc.recoverByDelete(sc, Mc), yB && console.log(Pc + this.stackID(uc) + ` (via recover-delete ${this.parser.getName(sc)})`), Yc(uc, nc)) : (!Vc || Vc.score < qB.score) && (Vc = qB)
        }
        return Vc
      }
      stackToTree(cB) {
        return cB.close(), Vc.u.build({
          buffer: sc.create(cB),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.Iu[0].from,
          length: cB.pos - this.Iu[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(cB) {
        let Bc = (zB || (zB = new WeakMap)).get(cB);
        return Bc || zB.set(cB, Bc = String.fromCodePoint(this.nextStackID++)), Bc + cB
      }
    }

    function Yc(cB, Bc) {
      for (let nc = 0; nc < Bc.length; nc++) {
        let Vc = Bc[nc];
        if (Vc.pos == cB.pos && Vc.sameState(cB)) return void(Bc[nc].score < cB.score && (Bc[nc] = cB))
      }
      Bc.push(cB)
    }
    class Lc {
      constructor(cB, Bc, nc) {
        this.source = cB, this.flags = Bc, this.disabled = nc
      }
      allows(cB) {
        return !this.disabled || 0 == this.disabled[cB]
      }
    }
    const gB = cB => cB;
    class Uc extends Vc.s {
      constructor(cB) {
        if (super(), this.wrappers = [], 14 != cB.version) throw new RangeError(`Parser version (${cB.version}) doesn't match runtime version (14)`);
        let Bc = cB.nodeNames.split(" ");
        this.minRepeatTerm = Bc.length;
        for (let Vc = 0; Vc < cB.repeatNodeCount; Vc++) Bc.push("");
        let nc = Object.keys(cB.topRules).map((Bc => cB.topRules[Bc][1])),
          Ic = [];
        for (let Vc = 0; Vc < Bc.length; Vc++) Ic.push([]);

        function rB(cB, Bc, nc) {
          Ic[cB].push([Bc, Bc.deserialize(String(nc))])
        }
        if (cB.nodeProps)
          for (let sc of cB.nodeProps) {
            let cB = sc[0];
            "string" == typeof cB && (cB = Vc.k[cB]);
            for (let Bc = 1; Bc < sc.length;) {
              let nc = sc[Bc++];
              if (nc >= 0) rB(nc, cB, sc[Bc++]);
              else {
                let Vc = sc[Bc + -nc];
                for (let Ic = -nc; Ic > 0; Ic--) rB(sc[Bc++], cB, Vc);
                Bc++
              }
            }
          }
        this.nodeSet = new Vc.l(Bc.map(((Bc, rB) => Vc.p.define({
          name: rB >= this.minRepeatTerm ? void 0 : Bc,
          id: rB,
          props: Ic[rB],
          top: nc.indexOf(rB) > -1,
          error: 0 == rB,
          skipped: cB.skippedNodes && cB.skippedNodes.indexOf(rB) > -1
        })))), cB.propSources && (this.nodeSet = this.nodeSet.extend(...cB.propSources)), this.strict = !1, this.bufferLength = Vc.c;
        let uc = Mc(cB.tokenData);
        this.context = cB.context, this.specializerSpecs = cB.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Vc = 0; Vc < this.specializerSpecs.length; Vc++) this.specialized[Vc] = this.specializerSpecs[Vc].term;
        this.specializers = this.specializerSpecs.map(Zc), this.states = Mc(cB.states, Uint32Array), this.data = Mc(cB.stateData), this.goto = Mc(cB.goto), this.maxTerm = cB.maxTerm, this.tokenizers = cB.tokenizers.map((cB => "number" == typeof cB ? new Tc(uc, cB) : cB)), this.topRules = cB.topRules, this.dialects = cB.dialects || {}, this.dynamicPrecedences = cB.dynamicPrecedences || null, this.tokenPrecTable = cB.tokenPrec, this.termNames = cB.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(cB, Bc, nc) {
        let Vc = new lc(this, cB, Bc, nc);
        for (let Ic of this.wrappers) Vc = Ic(Vc, cB, Bc, nc);
        return Vc
      }
      getGoto(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = this.goto;
        if (Bc >= Vc[0]) return -1;
        for (let Ic = Vc[Bc + 1];;) {
          let Bc = Vc[Ic++],
            rB = 1 & Bc,
            uc = Vc[Ic++];
          if (rB && nc) return uc;
          for (let nc = Ic + (Bc >> 1); Ic < nc; Ic++)
            if (Vc[Ic] == cB) return uc;
          if (rB) return -1
        }
      }
      hasAction(cB, Bc) {
        let nc = this.data;
        for (let Vc = 0; Vc < 2; Vc++)
          for (let Ic, rB = this.stateSlot(cB, Vc ? 2 : 1);; rB += 3) {
            if (65535 == (Ic = nc[rB])) {
              if (1 != nc[rB + 1]) {
                if (2 == nc[rB + 1]) return bB(nc, rB + 2);
                break
              }
              Ic = nc[rB = bB(nc, rB + 2)]
            }
            if (Ic == Bc || 0 == Ic) return bB(nc, rB + 1)
          }
        return 0
      }
      stateSlot(cB, Bc) {
        return this.states[6 * cB + Bc]
      }
      stateFlag(cB, Bc) {
        return (this.stateSlot(cB, 0) & Bc) > 0
      }
      validAction(cB, Bc) {
        return !!this.allActions(cB, (cB => cB == Bc || null))
      }
      allActions(cB, Bc) {
        let nc = this.stateSlot(cB, 4),
          Vc = nc ? Bc(nc) : void 0;
        for (let Ic = this.stateSlot(cB, 1); null == Vc; Ic += 3) {
          if (65535 == this.data[Ic]) {
            if (1 != this.data[Ic + 1]) break;
            Ic = bB(this.data, Ic + 2)
          }
          Vc = Bc(bB(this.data, Ic + 1))
        }
        return Vc
      }
      nextStates(cB) {
        let Bc = [];
        for (let nc = this.stateSlot(cB, 1);; nc += 3) {
          if (65535 == this.data[nc]) {
            if (1 != this.data[nc + 1]) break;
            nc = bB(this.data, nc + 2)
          }
          if (0 == (1 & this.data[nc + 2])) {
            let cB = this.data[nc + 1];
            Bc.some(((Bc, nc) => 1 & nc && Bc == cB)) || Bc.push(this.data[nc], cB)
          }
        }
        return Bc
      }
      configure(cB) {
        let Bc = Object.assign(Object.create(Uc.prototype), this);
        if (cB.props && (Bc.nodeSet = this.nodeSet.extend(...cB.props)), cB.top) {
          let nc = this.topRules[cB.top];
          if (!nc) throw new RangeError(`Invalid top rule name ${cB.top}`);
          Bc.top = nc
        }
        return cB.tokenizers && (Bc.tokenizers = this.tokenizers.map((Bc => {
          let nc = cB.tokenizers.find((cB => cB.from == Bc));
          return nc ? nc.to : Bc
        }))), cB.specializers && (Bc.specializers = this.specializers.slice(), Bc.specializerSpecs = this.specializerSpecs.map(((nc, Vc) => {
          let Ic = cB.specializers.find((cB => cB.from == nc.external));
          if (!Ic) return nc;
          let rB = Object.assign(Object.assign({}, nc), {
            external: Ic.to
          });
          return Bc.specializers[Vc] = Zc(rB), rB
        }))), cB.contextTracker && (Bc.context = cB.contextTracker), cB.dialect && (Bc.dialect = this.parseDialect(cB.dialect)), null != cB.strict && (Bc.strict = cB.strict), cB.wrap && (Bc.wrappers = Bc.wrappers.concat(cB.wrap)), null != cB.bufferLength && (Bc.bufferLength = cB.bufferLength), Bc
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(cB) {
        return this.termNames ? this.termNames[cB] : String(cB <= this.maxNode && this.nodeSet.types[cB].name || cB)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(cB) {
        let Bc = this.dynamicPrecedences;
        return null == Bc ? 0 : Bc[cB] || 0
      }
      parseDialect(cB) {
        let Bc = Object.keys(this.dialects),
          nc = Bc.map((() => !1));
        if (cB)
          for (let Ic of cB.split(" ")) {
            let cB = Bc.indexOf(Ic);
            cB >= 0 && (nc[cB] = !0)
          }
        let Vc = null;
        for (let Ic = 0; Ic < Bc.length; Ic++)
          if (!nc[Ic])
            for (let cB, nc = this.dialects[Bc[Ic]]; 65535 != (cB = this.data[nc++]);)(Vc || (Vc = new Uint8Array(this.maxTerm + 1)))[cB] = 1;
        return new Lc(cB, nc, Vc)
      }
      static deserialize(cB) {
        return new Uc(cB)
      }
    }

    function bB(cB, Bc) {
      return cB[Bc] | cB[Bc + 1] << 16
    }

    function Zc(cB) {
      if (cB.external) {
        let Bc = cB.extend ? 1 : 0;
        return (nc, Vc) => cB.external(nc, Vc) << 1 | Bc
      }
      return cB.get
    }
    var Qc = nc(39310);
    const Cc = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      vB = new class {
        constructor(cB) {
          this.start = cB.start, this.shift = cB.shift || gB, this.reduce = cB.reduce || gB, this.reuse = cB.reuse || gB, this.hash = cB.hash || (() => 0), this.strict = !1 !== cB.strict
        }
      }({
        start: !1,
        shift: (cB, Bc) => 5 == Bc || 6 == Bc || 320 == Bc ? cB : 321 == Bc,
        strict: !1
      }),
      Dc = new mB(((cB, Bc) => {
        let {
          next: nc
        } = cB;
        (125 == nc || -1 == nc || Bc.context) && cB.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      Nc = new mB(((cB, Bc) => {
        let nc, {
          next: Vc
        } = cB;
        Cc.indexOf(Vc) > -1 || (47 != Vc || 47 != (nc = cB.peek(1)) && 42 != nc) && (125 == Vc || 59 == Vc || -1 == Vc || Bc.context || cB.acceptToken(316))
      }), {
        contextual: !0
      }),
      Ec = new mB(((cB, Bc) => {
        91 != cB.next || Bc.context || cB.acceptToken(317)
      }), {
        contextual: !0
      }),
      oc = new mB(((cB, Bc) => {
        let {
          next: nc
        } = cB;
        if (43 == nc || 45 == nc) {
          if (cB.advance(), nc == cB.next) {
            cB.advance();
            let nc = !Bc.context && Bc.canShift(1);
            cB.acceptToken(nc ? 1 : 2)
          }
        } else 63 == nc && 46 == cB.peek(1) && (cB.advance(), cB.advance(), (cB.next < 48 || cB.next > 57) && cB.acceptToken(3))
      }), {
        contextual: !0
      });

    function Wc(cB, Bc) {
      return cB >= 65 && cB <= 90 || cB >= 97 && cB <= 122 || 95 == cB || cB >= 192 || !Bc && cB >= 48 && cB <= 57
    }
    const wc = new mB(((cB, Bc) => {
        if (60 != cB.next || !Bc.dialectEnabled(0)) return;
        if (cB.advance(), 47 == cB.next) return;
        let nc = 0;
        for (; Cc.indexOf(cB.next) > -1;) cB.advance(), nc++;
        if (Wc(cB.next, !0)) {
          for (cB.advance(), nc++; Wc(cB.next, !1);) cB.advance(), nc++;
          for (; Cc.indexOf(cB.next) > -1;) cB.advance(), nc++;
          if (44 == cB.next) return;
          for (let Bc = 0;; Bc++) {
            if (7 == Bc) {
              if (!Wc(cB.next, !0)) return;
              break
            }
            if (cB.next != "extends".charCodeAt(Bc)) break;
            cB.advance(), nc++
          }
        }
        cB.acceptToken(4, -nc)
      })),
      kB = (0, Qc.d)({
        "get set async static": Qc.j.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Qc.j.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Qc.j.operatorKeyword,
        "let var const using function class extends": Qc.j.definitionKeyword,
        "import export from": Qc.j.moduleKeyword,
        "with debugger new": Qc.j.keyword,
        TemplateString: Qc.j.special(Qc.j.string),
        super: Qc.j.atom,
        BooleanLiteral: Qc.j.bool,
        this: Qc.j.self,
        null: Qc.j.null,
        Star: Qc.j.modifier,
        VariableName: Qc.j.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Qc.j.function(Qc.j.variableName),
        VariableDefinition: Qc.j.definition(Qc.j.variableName),
        Label: Qc.j.labelName,
        PropertyName: Qc.j.propertyName,
        PrivatePropertyName: Qc.j.special(Qc.j.propertyName),
        "CallExpression/MemberExpression/PropertyName": Qc.j.function(Qc.j.propertyName),
        "FunctionDeclaration/VariableDefinition": Qc.j.function(Qc.j.definition(Qc.j.variableName)),
        "ClassDeclaration/VariableDefinition": Qc.j.definition(Qc.j.className),
        "NewExpression/VariableName": Qc.j.className,
        PropertyDefinition: Qc.j.definition(Qc.j.propertyName),
        PrivatePropertyDefinition: Qc.j.definition(Qc.j.special(Qc.j.propertyName)),
        UpdateOp: Qc.j.updateOperator,
        "LineComment Hashbang": Qc.j.lineComment,
        BlockComment: Qc.j.blockComment,
        Number: Qc.j.number,
        String: Qc.j.string,
        Escape: Qc.j.escape,
        ArithOp: Qc.j.arithmeticOperator,
        LogicOp: Qc.j.logicOperator,
        BitOp: Qc.j.bitwiseOperator,
        CompareOp: Qc.j.compareOperator,
        RegExp: Qc.j.regexp,
        Equals: Qc.j.definitionOperator,
        Arrow: Qc.j.function(Qc.j.punctuation),
        ": Spread": Qc.j.punctuation,
        "( )": Qc.j.paren,
        "[ ]": Qc.j.squareBracket,
        "{ }": Qc.j.brace,
        "InterpolationStart InterpolationEnd": Qc.j.special(Qc.j.brace),
        ".": Qc.j.derefOperator,
        ", ;": Qc.j.separator,
        "@": Qc.j.meta,
        TypeName: Qc.j.typeName,
        TypeDefinition: Qc.j.definition(Qc.j.typeName),
        "type enum interface implements namespace module declare": Qc.j.definitionKeyword,
        "abstract global Privacy readonly override": Qc.j.modifier,
        "is keyof unique infer asserts": Qc.j.operatorKeyword,
        JSXAttributeValue: Qc.j.attributeValue,
        JSXText: Qc.j.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Qc.j.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Qc.j.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Qc.j.attributeName,
        "JSXBuiltin/JSXIdentifier": Qc.j.standard(Qc.j.tagName)
      }),
      Xc = {
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
      Hc = {
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
      Fc = {
        __proto__: null,
        "<": 193
      },
      Jc = Uc.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: vB,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [kB],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [Nc, Ec, oc, wc, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Dc, new fc("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new fc("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: cB => Xc[cB] || -1
        }, {
          term: 343,
          get: cB => Hc[cB] || -1
        }, {
          term: 95,
          get: cB => Fc[cB] || -1
        }],
        tokenPrec: 15201
      });
    var jB = nc(39303),
      Rc = nc(39279),
      iB = nc(39285),
      Kc = nc(39274);
    const xB = [(0, Kc.t)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, Kc.t)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, Kc.t)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, Kc.t)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, Kc.t)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, Kc.t)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, Kc.t)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, Kc.t)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, Kc.t)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, Kc.t)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, Kc.t)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      dc = xB.concat([(0, Kc.t)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, Kc.t)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, Kc.t)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      Ac = new Vc.r,
      Gc = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function cn(cB) {
      return (Bc, nc) => {
        let Vc = Bc.node.getChild("VariableDefinition");
        return Vc && nc(Vc, cB), !0
      }
    }
    const BB = ["FunctionDeclaration"],
      nB = {
        FunctionDeclaration: cn("function"),
        ClassDeclaration: cn("class"),
        ClassExpression: () => !0,
        EnumDeclaration: cn("constant"),
        TypeAliasDeclaration: cn("type"),
        NamespaceDeclaration: cn("namespace"),
        VariableDefinition(cB, Bc) {
          cB.matchContext(BB) || Bc(cB, "variable")
        },
        TypeDefinition(cB, Bc) {
          Bc(cB, "type")
        },
        __proto__: null
      };

    function VB(cB, Bc) {
      let nc = Ac.get(Bc);
      if (nc) return nc;
      let Ic = [],
        rB = !0;

      function uc(Bc, nc) {
        let Vc = cB.sliceString(Bc.from, Bc.to);
        Ic.push({
          label: Vc,
          type: nc
        })
      }
      return Bc.cursor(Vc.g.IncludeAnonymous).iterate((Bc => {
        if (rB) rB = !1;
        else if (Bc.name) {
          let cB = nB[Bc.name];
          if (cB && cB(Bc, uc) || Gc.has(Bc.name)) return !1
        } else if (Bc.to - Bc.from > 8192) {
          for (let nc of VB(cB, Bc.node)) Ic.push(nc);
          return !1
        }
      })), Ac.set(Bc, Ic), Ic
    }
    const IB = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      rn = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function uB(cB) {
      let Bc = (0, jB.lb)(cB.state).resolveInner(cB.pos, -1);
      if (rn.indexOf(Bc.name) > -1) return null;
      let nc = "VariableName" == Bc.name || Bc.to - Bc.from < 20 && IB.test(cB.state.sliceDoc(Bc.from, Bc.to));
      if (!nc && !cB.explicit) return null;
      let Vc = [];
      for (let Ic = Bc; Ic; Ic = Ic.parent) Gc.has(Ic.name) && (Vc = Vc.concat(VB(cB.state.doc, Ic)));
      return {
        options: Vc,
        from: nc ? Bc.from : cB.pos,
        validFor: IB
      }
    }
    const sB = jB.h.define({
        name: "javascript",
        parser: Jc.configure({
          props: [jB.T.add({
            IfStatement: (0, jB.q)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, jB.q)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: jB.z,
            SwitchBody: cB => {
              let Bc = cB.textAfter,
                nc = /^\s*\}/.test(Bc),
                Vc = /^\s*(case|default)\b/.test(Bc);
              return cB.baseIndent + (nc ? 0 : Vc ? 1 : 2) * cB.unit
            },
            Block: (0, jB.w)({
              closing: "}"
            }),
            ArrowFunction: cB => cB.baseIndent + cB.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, jB.q)({
              except: /^\s*{/
            }),
            JSXElement(cB) {
              let Bc = /^\s*<\//.test(cB.textAfter);
              return cB.lineIndent(cB.node.from) + (Bc ? 0 : cB.unit)
            },
            JSXEscape(cB) {
              let Bc = /\s*\}/.test(cB.textAfter);
              return cB.lineIndent(cB.node.from) + (Bc ? 0 : cB.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": cB => cB.column(cB.node.from) + cB.unit
          }), jB.K.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": jB.F,
            BlockComment: cB => ({
              from: cB.from + 2,
              to: cB.to - 2
            }),
            JSXElement(cB) {
              let Bc = cB.firstChild;
              if (!Bc || "JSXSelfClosingTag" == Bc.name) return null;
              let nc = cB.lastChild;
              return {
                from: Bc.to,
                to: nc.type.isError ? cB.to : nc.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(cB) {
              var Bc;
              let nc = null === (Bc = cB.firstChild) || void 0 === Bc ? void 0 : Bc.nextSibling,
                Vc = cB.lastChild;
              return !nc || nc.type.isError ? null : {
                from: nc.to,
                to: Vc.type.isError ? cB.to : Vc.from
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
      MB = {
        test: cB => /^JSX/.test(cB.name),
        facet: (0, jB.v)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      PB = sB.configure({
        dialect: "ts"
      }, "typescript"),
      qn = sB.configure({
        dialect: "jsx",
        props: [jB.cb.add((cB => cB.isTop ? [MB] : void 0))]
      }),
      OB = sB.configure({
        dialect: "jsx ts",
        props: [jB.cb.add((cB => cB.isTop ? [MB] : void 0))]
      }, "typescript");
    let TB = cB => ({
      label: cB,
      type: "keyword"
    });
    const fB = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(TB),
      mn = fB.concat(["declare", "implements", "private", "protected", "public"].map(TB));

    function eB() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Bc = cB.jsx ? cB.typescript ? OB : qn : cB.typescript ? PB : sB,
        nc = cB.typescript ? dc.concat(mn) : xB.concat(fB);
      return new jB.j(Bc, [sB.data.of({
        autocomplete: (0, Kc.p)(rn, (0, Kc.l)(nc))
      }), sB.data.of({
        autocomplete: uB
      }), cB.jsx ? yn : []])
    }

    function tn(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cB.length;
      for (let Vc = null === Bc || void 0 === Bc ? void 0 : Bc.firstChild; Vc; Vc = Vc.nextSibling)
        if ("JSXIdentifier" == Vc.name || "JSXBuiltin" == Vc.name || "JSXNamespacedName" == Vc.name || "JSXMemberExpression" == Vc.name) return cB.sliceString(Vc.from, Math.min(Vc.to, nc));
      return ""
    }
    const SB = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      yn = iB.i.inputHandler.of(((cB, Bc, nc, Vc, Ic) => {
        if ((SB ? cB.composing : cB.compositionStarted) || cB.state.readOnly || Bc != nc || ">" != Vc && "/" != Vc || !sB.isActiveAt(cB.state, Bc, -1)) return !1;
        let rB = Ic(),
          {
            state: uc
          } = rB,
          sc = uc.changeByRange((cB => {
            var Bc;
            let nc, {
                head: Ic
              } = cB,
              rB = (0, jB.lb)(uc).resolveInner(Ic - 1, -1);
            if ("JSXStartTag" == rB.name && (rB = rB.parent), uc.doc.sliceString(Ic - 1, Ic) != Vc || "JSXAttributeValue" == rB.name && rB.to > Ic);
            else {
              if (">" == Vc && "JSXFragmentTag" == rB.name) return {
                range: cB,
                changes: {
                  from: Ic,
                  insert: "</>"
                }
              };
              if ("/" == Vc && "JSXStartCloseTag" == rB.name) {
                let cB = rB.parent,
                  Vc = cB.parent;
                if (Vc && cB.from == Ic - 2 && ((nc = tn(uc.doc, Vc.firstChild, Ic)) || "JSXFragmentTag" == (null === (Bc = Vc.firstChild) || void 0 === Bc ? void 0 : Bc.name))) {
                  let cB = `${nc}>`;
                  return {
                    range: Rc.m.cursor(Ic + cB.length, -1),
                    changes: {
                      from: Ic,
                      insert: cB
                    }
                  }
                }
              } else if (">" == Vc) {
                let Bc = function(cB) {
                  for (;;) {
                    if ("JSXOpenTag" == cB.name || "JSXSelfClosingTag" == cB.name || "JSXFragmentTag" == cB.name) return cB;
                    if ("JSXEscape" == cB.name || !cB.parent) return null;
                    cB = cB.parent
                  }
                }(rB);
                if (Bc && "JSXOpenTag" == Bc.name && !/^\/?>|^<\//.test(uc.doc.sliceString(Ic, Ic + 2)) && (nc = tn(uc.doc, Bc, Ic))) return {
                  range: cB,
                  changes: {
                    from: Ic,
                    insert: `</${nc}>`
                  }
                }
              }
            }
            return {
              range: cB
            }
          }));
        return !sc.changes.empty && (cB.dispatch([rB, uc.update(sc, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  39303: (cB, Bc, nc) => {
    nc.d(Bc, {
      C: () => yn,
      F: () => xB,
      G: () => PB,
      K: () => Kc,
      N: () => Sc,
      O: () => Qc,
      S: () => vB,
      T: () => Nc,
      U: () => Rc,
      X: () => Cc,
      Y: () => Zc,
      ab: () => HB,
      c: () => pB,
      cb: () => Oc,
      e: () => Dc,
      eb: () => YB,
      h: () => mB,
      hb: () => tB,
      j: () => Uc,
      lb: () => ec,
      n: () => WB,
      q: () => Jc,
      t: () => UB,
      v: () => qB,
      w: () => Xc,
      z: () => Fc
    });
    var Vc, Ic = nc(39307),
      rB = nc(39279),
      uc = nc(39285),
      sc = nc(39310),
      Mc = nc(39292);
    const Pc = new Ic.k;

    function qB(cB) {
      return rB.q.define({
        combine: cB ? Bc => Bc.concat(cB) : void 0
      })
    }
    const Oc = new Ic.k;
    class Tc {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = cB, this.name = Vc, rB.o.prototype.hasOwnProperty("tree") || Object.defineProperty(rB.o.prototype, "tree", {
          get() {
            return ec(this)
          }
        }), this.parser = Bc, this.extension = [gB.of(this), rB.o.languageData.of(((cB, Bc, nc) => {
          let Vc = fc(cB, Bc, nc),
            Ic = Vc.type.prop(Pc);
          if (!Ic) return [];
          let rB = cB.facet(Ic),
            uc = Vc.type.prop(Oc);
          if (uc) {
            let Ic = Vc.resolve(Bc - Vc.from, nc);
            for (let Bc of uc)
              if (Bc.test(Ic, cB)) {
                let nc = cB.facet(Bc.facet);
                return "replace" == Bc.type ? nc : nc.concat(rB)
              }
          }
          return rB
        }))].concat(nc)
      }
      isActiveAt(cB, Bc) {
        return fc(cB, Bc, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(Pc) == this.data
      }
      findRegions(cB) {
        let Bc = cB.facet(gB);
        if ((null === Bc || void 0 === Bc ? void 0 : Bc.data) == this.data) return [{
          from: 0,
          to: cB.doc.length
        }];
        if (!Bc || !Bc.allowsNesting) return [];
        let nc = [],
          Vc = (cB, Bc) => {
            if (cB.prop(Pc) == this.data) return void nc.push({
              from: Bc,
              to: Bc + cB.length
            });
            let rB = cB.prop(Ic.k.mounted);
            if (rB) {
              if (rB.tree.prop(Pc) == this.data) {
                if (rB.overlay)
                  for (let cB of rB.overlay) nc.push({
                    from: cB.from + Bc,
                    to: cB.to + Bc
                  });
                else nc.push({
                  from: Bc,
                  to: Bc + cB.length
                });
                return
              }
              if (rB.overlay) {
                let cB = nc.length;
                if (Vc(rB.tree, rB.overlay[0].from + Bc), nc.length > cB) return
              }
            }
            for (let nc = 0; nc < cB.children.length; nc++) {
              let rB = cB.children[nc];
              rB instanceof Ic.u && Vc(rB, cB.positions[nc] + Bc)
            }
          };
        return Vc(ec(cB), 0), nc
      }
      get allowsNesting() {
        return !0
      }
    }

    function fc(cB, Bc, nc) {
      let Vc = cB.facet(gB),
        rB = ec(cB).topNode;
      if (!Vc || Vc.allowsNesting)
        for (let uc = rB; uc; uc = uc.enter(Bc, nc, Ic.g.ExcludeBuffers | Ic.g.EnterBracketed)) uc.type.isTop && (rB = uc);
      return rB
    }
    Tc.setState = rB.F.define();
    class mB extends Tc {
      constructor(cB, Bc, nc) {
        super(cB, Bc, [], nc), this.parser = Bc
      }
      static define(cB) {
        let Bc = qB(cB.languageData);
        return new mB(Bc, cB.parser.configure({
          props: [Pc.add((cB => cB.isTop ? Bc : void 0))]
        }), cB.name)
      }
      configure(cB, Bc) {
        return new mB(this.data, this.parser.configure(cB), Bc || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function ec(cB) {
      let Bc = cB.field(Tc.state, !1);
      return Bc ? Bc.tree : Ic.u.empty
    }

    function tB(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB.doc.length;
      var nc;
      return (null === (nc = cB.field(Tc.state, !1)) || void 0 === nc ? void 0 : nc.context.isDone(Bc)) || !1
    }

    function Sc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB.viewport.to,
        nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Vc = function(cB, Bc) {
          let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Vc;
          let Ic = null === (Vc = cB.field(Tc.state, !1)) || void 0 === Vc ? void 0 : Vc.context;
          if (!Ic) return null;
          let rB = Ic.viewport;
          Ic.updateViewport({
            from: 0,
            to: Bc
          });
          let uc = Ic.isDone(Bc) || Ic.work(nc, Bc) ? Ic.tree : null;
          return Ic.updateViewport(rB), uc
        }(cB.state, Bc, nc);
      return Vc != ec(cB.state) && cB.dispatch({}), !!Vc
    }
    class yB {
      constructor(cB) {
        this.doc = cB, this.cursorPos = 0, this.string = "", this.cursor = cB.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(cB) {
        return this.string = this.cursor.next(cB - this.cursorPos).value, this.cursorPos = cB + this.string.length, this.cursorPos - this.string.length
      }
      chunk(cB) {
        return this.syncTo(cB), this.string
      }
      get lineChunks() {
        return !0
      }
      read(cB, Bc) {
        let nc = this.cursorPos - this.string.length;
        return cB < nc || Bc >= this.cursorPos ? this.doc.sliceString(cB, Bc) : this.string.slice(cB - nc, Bc - nc)
      }
    }
    let zB = null;
    class pc {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Vc = arguments.length > 3 ? arguments[3] : void 0,
          Ic = arguments.length > 4 ? arguments[4] : void 0,
          rB = arguments.length > 5 ? arguments[5] : void 0,
          uc = arguments.length > 6 ? arguments[6] : void 0,
          sc = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = cB, this.state = Bc, this.fragments = nc, this.tree = Vc, this.treeLen = Ic, this.viewport = rB, this.skipped = uc, this.scheduleOn = sc, this.parse = null, this.tempSkipped = []
      }
      static create(cB, Bc, nc) {
        return new pc(cB, Bc, [], Ic.u.empty, 0, nc, [], null)
      }
      startParse() {
        return this.parser.startParse(new yB(this.state.doc), this.fragments)
      }
      work(cB, Bc) {
        return null != Bc && Bc >= this.state.doc.length && (Bc = void 0), this.tree != Ic.u.empty && this.isDone(null !== Bc && void 0 !== Bc ? Bc : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var nc;
          if ("number" == typeof cB) {
            let Bc = Date.now() + cB;
            cB = () => Date.now() > Bc
          }
          for (this.parse || (this.parse = this.startParse()), null != Bc && (null == this.parse.stoppedAt || this.parse.stoppedAt > Bc) && Bc < this.state.doc.length && this.parse.stopAt(Bc);;) {
            let Vc = this.parse.advance();
            if (Vc) {
              if (this.fragments = this.withoutTempSkipped(Ic.t.addTree(Vc, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (nc = this.parse.stoppedAt) && void 0 !== nc ? nc : this.state.doc.length, this.tree = Vc, this.parse = null, !(this.treeLen < (null !== Bc && void 0 !== Bc ? Bc : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (cB()) return !1
          }
        }))
      }
      takeTree() {
        let cB, Bc;
        this.parse && (cB = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > cB) && this.parse.stopAt(cB), this.withContext((() => {
          for (; !(Bc = this.parse.advance()););
        })), this.treeLen = cB, this.tree = Bc, this.fragments = this.withoutTempSkipped(Ic.t.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(cB) {
        let Bc = zB;
        zB = this;
        try {
          return cB()
        } finally {
          zB = Bc
        }
      }
      withoutTempSkipped(cB) {
        for (let Bc; Bc = this.tempSkipped.pop();) cB = hc(cB, Bc.from, Bc.to);
        return cB
      }
      changes(cB, Bc) {
        let {
          fragments: nc,
          tree: Vc,
          treeLen: rB,
          viewport: uc,
          skipped: sc
        } = this;
        if (this.takeTree(), !cB.empty) {
          let Bc = [];
          if (cB.iterChangedRanges(((cB, nc, Vc, Ic) => Bc.push({
              fromA: cB,
              toA: nc,
              fromB: Vc,
              toB: Ic
            }))), nc = Ic.t.applyChanges(nc, Bc), Vc = Ic.u.empty, rB = 0, uc = {
              from: cB.mapPos(uc.from, -1),
              to: cB.mapPos(uc.to, 1)
            }, this.skipped.length) {
            sc = [];
            for (let Bc of this.skipped) {
              let nc = cB.mapPos(Bc.from, 1),
                Vc = cB.mapPos(Bc.to, -1);
              nc < Vc && sc.push({
                from: nc,
                to: Vc
              })
            }
          }
        }
        return new pc(this.parser, Bc, nc, Vc, rB, uc, sc, this.scheduleOn)
      }
      updateViewport(cB) {
        if (this.viewport.from == cB.from && this.viewport.to == cB.to) return !1;
        this.viewport = cB;
        let Bc = this.skipped.length;
        for (let nc = 0; nc < this.skipped.length; nc++) {
          let {
            from: Bc,
            to: Vc
          } = this.skipped[nc];
          Bc < cB.to && Vc > cB.from && (this.fragments = hc(this.fragments, Bc, Vc), this.skipped.splice(nc--, 1))
        }
        return !(this.skipped.length >= Bc) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(cB, Bc) {
        this.skipped.push({
          from: cB,
          to: Bc
        })
      }
      static getSkippingParser(cB) {
        return new class extends Ic.s {
          createParse(Bc, nc, Vc) {
            let rB = Vc[0].from,
              uc = Vc[Vc.length - 1].to;
            return {
              parsedPos: rB,
              advance() {
                let Bc = zB;
                if (Bc) {
                  for (let cB of Vc) Bc.tempSkipped.push(cB);
                  cB && (Bc.scheduleOn = Bc.scheduleOn ? Promise.all([Bc.scheduleOn, cB]) : cB)
                }
                return this.parsedPos = uc, new Ic.u(Ic.p.none, [], [], uc - rB)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(cB) {
        cB = Math.min(cB, this.state.doc.length);
        let Bc = this.fragments;
        return this.treeLen >= cB && Bc.length && 0 == Bc[0].from && Bc[0].to >= cB
      }
      static get() {
        return zB
      }
    }

    function hc(cB, Bc, nc) {
      return Ic.t.applyChanges(cB, [{
        fromA: Bc,
        toA: nc,
        fromB: Bc,
        toB: nc
      }])
    }
    class aB {
      constructor(cB) {
        this.context = cB, this.tree = cB.tree
      }
      apply(cB) {
        if (!cB.docChanged && this.tree == this.context.tree) return this;
        let Bc = this.context.changes(cB.changes, cB.state),
          nc = this.context.treeLen == cB.startState.doc.length ? void 0 : Math.max(cB.changes.mapPos(this.context.treeLen), Bc.viewport.to);
        return Bc.work(20, nc) || Bc.takeTree(), new aB(Bc)
      }
      static init(cB) {
        let Bc = Math.min(3e3, cB.doc.length),
          nc = pc.create(cB.facet(gB).parser, cB, {
            from: 0,
            to: Bc
          });
        return nc.work(20, Bc) || nc.takeTree(), new aB(nc)
      }
    }
    Tc.state = rB.J.define({
      create: aB.init,
      update(cB, Bc) {
        for (let nc of Bc.effects)
          if (nc.is(Tc.setState)) return nc.value;
        return Bc.startState.facet(gB) != Bc.state.facet(gB) ? aB.init(Bc.state) : cB.apply(Bc)
      }
    });
    let lc = cB => {
      let Bc = setTimeout((() => cB()), 500);
      return () => clearTimeout(Bc)
    };
    "undefined" != typeof requestIdleCallback && (lc = cB => {
      let Bc = -1,
        nc = setTimeout((() => {
          Bc = requestIdleCallback(cB, {
            timeout: 400
          })
        }), 100);
      return () => Bc < 0 ? clearTimeout(nc) : cancelIdleCallback(Bc)
    });
    const Yc = "undefined" != typeof navigator && (null === (Vc = navigator.scheduling) || void 0 === Vc ? void 0 : Vc.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      Lc = uc.o.fromClass(class {
        constructor(cB) {
          this.view = cB, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(cB) {
          let Bc = this.view.state.field(Tc.state).context;
          (Bc.updateViewport(cB.view.viewport) || this.view.viewport.to > Bc.treeLen) && this.scheduleWork(), (cB.docChanged || cB.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(Bc)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: cB
          } = this.view, Bc = cB.field(Tc.state);
          Bc.tree == Bc.context.tree && Bc.context.isDone(cB.doc.length) || (this.working = lc(this.work))
        }
        work(cB) {
          this.working = null;
          let Bc = Date.now();
          if (this.chunkEnd < Bc && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = Bc + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: nc,
            viewport: {
              to: Vc
            }
          } = this.view, Ic = nc.field(Tc.state);
          if (Ic.tree == Ic.context.tree && Ic.context.isDone(Vc + 1e5)) return;
          let rB = Date.now() + Math.min(this.chunkBudget, 100, cB && !Yc ? Math.max(25, cB.timeRemaining() - 5) : 1e9),
            uc = Ic.context.treeLen < Vc && nc.doc.length > Vc + 1e3,
            sc = Ic.context.work((() => Yc && Yc() || Date.now() > rB), Vc + (uc ? 0 : 1e5));
          this.chunkBudget -= Date.now() - Bc, (sc || this.chunkBudget <= 0) && (Ic.context.takeTree(), this.view.dispatch({
            effects: Tc.setState.of(new aB(Ic.context))
          })), this.chunkBudget > 0 && (!sc || uc) && this.scheduleWork(), this.checkAsyncSchedule(Ic.context)
        }
        checkAsyncSchedule(cB) {
          cB.scheduleOn && (this.workScheduled++, cB.scheduleOn.then((() => this.scheduleWork())).catch((cB => (0, uc.Y)(this.view.state, cB))).then((() => this.workScheduled--)), cB.scheduleOn = null)
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
      gB = rB.q.define({
        combine: cB => cB.length ? cB[0] : null,
        enables: cB => [Tc.state, Lc, uc.i.contentAttributes.compute([cB], (Bc => {
          let nc = Bc.facet(cB);
          return nc && nc.name ? {
            "data-language": nc.name
          } : {}
        }))]
      });
    class Uc {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = cB, this.support = Bc, this.extension = [cB, Bc]
      }
    }
    const bB = rB.q.define(),
      Zc = rB.q.define({
        combine: cB => {
          if (!cB.length) return "  ";
          let Bc = cB[0];
          if (!Bc || /\S/.test(Bc) || Array.from(Bc).some((cB => cB != Bc[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(cB[0]));
          return Bc
        }
      });

    function Qc(cB) {
      let Bc = cB.facet(Zc);
      return 9 == Bc.charCodeAt(0) ? cB.tabSize * Bc.length : Bc.length
    }

    function Cc(cB, Bc) {
      let nc = "",
        Vc = cB.tabSize,
        Ic = cB.facet(Zc)[0];
      if ("\t" == Ic) {
        for (; Bc >= Vc;) nc += "\t", Bc -= Vc;
        Ic = " "
      }
      for (let rB = 0; rB < Bc; rB++) nc += Ic;
      return nc
    }

    function vB(cB, Bc) {
      cB instanceof rB.o && (cB = new Dc(cB));
      for (let Vc of cB.state.facet(bB)) {
        let nc = Vc(cB, Bc);
        if (void 0 !== nc) return nc
      }
      let nc = ec(cB.state);
      return nc.length >= Bc ? function(cB, Bc, nc) {
        let Vc = Bc.resolveStack(nc),
          Ic = Bc.resolveInner(nc, -1).resolve(nc, 0).enterUnfinishedNodesBefore(nc);
        if (Ic != Vc.node) {
          let cB = [];
          for (let Bc = Ic; Bc && !(Bc.from < Vc.node.from || Bc.to > Vc.node.to || Bc.from == Vc.node.from && Bc.type == Vc.node.type); Bc = Bc.parent) cB.push(Bc);
          for (let Bc = cB.length - 1; Bc >= 0; Bc--) Vc = {
            node: cB[Bc],
            next: Vc
          }
        }
        return Ec(Vc, cB, nc)
      }(cB, nc, Bc) : null
    }
    class Dc {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = cB, this.options = Bc, this.unit = Qc(cB)
      }
      lineAt(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          nc = this.state.doc.lineAt(cB),
          {
            simulateBreak: Vc,
            simulateDoubleBreak: Ic
          } = this.options;
        return null != Vc && Vc >= nc.from && Vc <= nc.to ? Ic && Vc == cB ? {
          text: "",
          from: cB
        } : (Bc < 0 ? Vc < cB : Vc <= cB) ? {
          text: nc.text.slice(Vc - nc.from),
          from: Vc
        } : {
          text: nc.text.slice(0, Vc - nc.from),
          from: nc.from
        } : nc
      }
      textAfterPos(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && cB == this.options.simulateBreak) return "";
        let {
          text: nc,
          from: Vc
        } = this.lineAt(cB, Bc);
        return nc.slice(cB - Vc, Math.min(nc.length, cB + 100 - Vc))
      }
      column(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: nc,
            from: Vc
          } = this.lineAt(cB, Bc),
          Ic = this.countColumn(nc, cB - Vc),
          rB = this.options.overrideIndentation ? this.options.overrideIndentation(Vc) : -1;
        return rB > -1 && (Ic += rB - this.countColumn(nc, nc.search(/\S|$/))), Ic
      }
      countColumn(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB.length;
        return (0, rB.bb)(cB, this.state.tabSize, Bc)
      }
      lineIndent(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: nc,
            from: Vc
          } = this.lineAt(cB, Bc),
          Ic = this.options.overrideIndentation;
        if (Ic) {
          let cB = Ic(Vc);
          if (cB > -1) return cB
        }
        return this.countColumn(nc, nc.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const Nc = new Ic.k;

    function Ec(cB, Bc, nc) {
      for (let Vc = cB; Vc; Vc = Vc.next) {
        let cB = oc(Vc.node);
        if (cB) return cB(wc.create(Bc, nc, Vc))
      }
      return 0
    }

    function oc(cB) {
      let Bc = cB.type.prop(Nc);
      if (Bc) return Bc;
      let nc, Vc = cB.firstChild;
      if (Vc && (nc = Vc.type.prop(Ic.k.closedBy))) {
        let Bc = cB.lastChild,
          Vc = Bc && nc.indexOf(Bc.name) > -1;
        return cB => Hc(cB, !0, 1, void 0, Vc && ! function(cB) {
          return cB.pos == cB.options.simulateBreak && cB.options.simulateDoubleBreak
        }(cB) ? Bc.from : void 0)
      }
      return null == cB.parent ? Wc : null
    }

    function Wc() {
      return 0
    }
    class wc extends Dc {
      constructor(cB, Bc, nc) {
        super(cB.state, cB.options), this.base = cB, this.pos = Bc, this.context = nc
      }
      get node() {
        return this.context.node
      }
      static create(cB, Bc, nc) {
        return new wc(cB, Bc, nc)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(cB) {
        let Bc = this.state.doc.lineAt(cB.from);
        for (;;) {
          let nc = cB.resolve(Bc.from);
          for (; nc.parent && nc.parent.from == nc.from;) nc = nc.parent;
          if (kB(nc, cB)) break;
          Bc = this.state.doc.lineAt(nc.from)
        }
        return this.lineIndent(Bc.from)
      }
      continue () {
        return Ec(this.context.next, this.base, this.pos)
      }
    }

    function kB(cB, Bc) {
      for (let nc = Bc; nc; nc = nc.parent)
        if (cB == nc) return !0;
      return !1
    }

    function Xc(cB) {
      let {
        closing: Bc,
        align: nc = !0,
        units: Vc = 1
      } = cB;
      return cB => Hc(cB, nc, Vc, Bc)
    }

    function Hc(cB, Bc, nc, Vc, Ic) {
      let rB = cB.textAfter,
        uc = rB.match(/^\s*/)[0].length,
        sc = Vc && rB.slice(uc, uc + Vc.length) == Vc || Ic == cB.pos + uc,
        Mc = Bc ? function(cB) {
          let Bc = cB.node,
            nc = Bc.childAfter(Bc.from),
            Vc = Bc.lastChild;
          if (!nc) return null;
          let Ic = cB.options.simulateBreak,
            rB = cB.state.doc.lineAt(nc.from),
            uc = null == Ic || Ic <= rB.from ? rB.to : Math.min(rB.to, Ic);
          for (let sc = nc.to;;) {
            let cB = Bc.childAfter(sc);
            if (!cB || cB == Vc) return null;
            if (!cB.type.isSkipped) {
              if (cB.from >= uc) return null;
              let Bc = /^ */.exec(rB.text.slice(nc.to - rB.from))[0].length;
              return {
                from: nc.from,
                to: nc.to + Bc
              }
            }
            sc = cB.to
          }
        }(cB) : null;
      return Mc ? sc ? cB.column(Mc.from) : cB.column(Mc.to) : cB.baseIndent + (sc ? 0 : cB.unit * nc)
    }
    const Fc = cB => cB.baseIndent;

    function Jc() {
      let {
        except: cB,
        units: Bc = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return nc => {
        let Vc = cB && cB.test(nc.textAfter);
        return nc.baseIndent + (Vc ? 0 : Bc * nc.unit)
      }
    }
    const jB = 200;

    function Rc() {
      return rB.o.transactionFilter.of((cB => {
        if (!cB.docChanged || !cB.isUserEvent("input.type") && !cB.isUserEvent("input.complete")) return cB;
        let Bc = cB.startState.languageDataAt("indentOnInput", cB.startState.selection.main.head);
        if (!Bc.length) return cB;
        let nc = cB.newDoc,
          {
            head: Vc
          } = cB.newSelection.main,
          Ic = nc.lineAt(Vc);
        if (Vc > Ic.from + jB) return cB;
        let rB = nc.sliceString(Ic.from, Vc);
        if (!Bc.some((cB => cB.test(rB)))) return cB;
        let {
          state: uc
        } = cB, sc = -1, Mc = [];
        for (let {
            head: Pc
          }
          of uc.selection.Iu) {
          let cB = uc.doc.lineAt(Pc);
          if (cB.from == sc) continue;
          sc = cB.from;
          let Bc = vB(uc, cB.from);
          if (null == Bc) continue;
          let nc = /^\s*/.exec(cB.text)[0],
            Vc = Cc(uc, Bc);
          nc != Vc && Mc.push({
            from: cB.from,
            to: cB.from + nc.length,
            insert: Vc
          })
        }
        return Mc.length ? [cB, {
          changes: Mc,
          sequential: !0
        }] : cB
      }))
    }
    const iB = rB.q.define(),
      Kc = new Ic.k;

    function xB(cB) {
      let Bc = cB.firstChild,
        nc = cB.lastChild;
      return Bc && Bc.to < nc.from ? {
        from: Bc.to,
        to: nc.type.isError ? cB.to : nc.from
      } : null
    }

    function dc(cB) {
      let Bc = cB.lastChild;
      return Bc && Bc.to == cB.to && Bc.type.isError
    }

    function Ac(cB, Bc, nc) {
      for (let Vc of cB.facet(iB)) {
        let Ic = Vc(cB, Bc, nc);
        if (Ic) return Ic
      }
      return function(cB, Bc, nc) {
        let Vc = ec(cB);
        if (Vc.length < nc) return null;
        let Ic = null;
        for (let rB = Vc.resolveStack(nc, 1); rB; rB = rB.next) {
          let uc = rB.node;
          if (uc.to <= nc || uc.from > nc) continue;
          if (Ic && uc.from < Bc) break;
          let sc = uc.type.prop(Kc);
          if (sc && (uc.to < Vc.length - 50 || Vc.length == cB.doc.length || !dc(uc))) {
            let Vc = sc(uc, cB);
            Vc && Vc.from <= nc && Vc.from >= Bc && Vc.to > nc && (Ic = Vc)
          }
        }
        return Ic
      }(cB, Bc, nc)
    }

    function Gc(cB, Bc) {
      let nc = Bc.mapPos(cB.from, 1),
        Vc = Bc.mapPos(cB.to, -1);
      return nc >= Vc ? void 0 : {
        from: nc,
        to: Vc
      }
    }
    const cn = rB.F.define({
        map: Gc
      }),
      BB = rB.F.define({
        map: Gc
      });

    function nB(cB) {
      let Bc = [];
      for (let {
          head: nc
        }
        of cB.state.selection.Iu) Bc.some((cB => cB.from <= nc && cB.to >= nc)) || Bc.push(cB.lineBlockAt(nc));
      return Bc
    }
    const VB = rB.J.define({
      create: () => uc.c.none,
      update(cB, Bc) {
        Bc.isUserEvent("delete") && Bc.changes.iterChangedRanges(((Bc, nc) => cB = IB(cB, Bc, nc))), cB = cB.map(Bc.changes);
        for (let nc of Bc.effects)
          if (nc.is(cn) && !uB(cB, nc.value.from, nc.value.to)) {
            let {
              preparePlaceholder: Vc
            } = Bc.state.facet(OB), Ic = Vc ? uc.c.replace({
              widget: new eB(Vc(Bc.state, nc.value))
            }) : mn;
            cB = cB.update({
              add: [Ic.range(nc.value.from, nc.value.to)]
            })
          } else nc.is(BB) && (cB = cB.update({
            filter: (cB, Bc) => nc.value.from != cB || nc.value.to != Bc,
            filterFrom: nc.value.from,
            filterTo: nc.value.to
          }));
        return Bc.selection && (cB = IB(cB, Bc.selection.main.head)), cB
      },
      provide: cB => uc.i.iu.from(cB),
      toJSON(cB, Bc) {
        let nc = [];
        return cB.between(0, Bc.doc.length, ((cB, Bc) => {
          nc.push(cB, Bc)
        })), nc
      },
      fromJSON(cB) {
        if (!Array.isArray(cB) || cB.length % 2) throw new RangeError("Invalid JSON for fold state");
        let Bc = [];
        for (let nc = 0; nc < cB.length;) {
          let Vc = cB[nc++],
            Ic = cB[nc++];
          if ("number" != typeof Vc || "number" != typeof Ic) throw new RangeError("Invalid JSON for fold state");
          Bc.push(mn.range(Vc, Ic))
        }
        return uc.c.set(Bc, !0)
      }
    });

    function IB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bc,
        Vc = !1;
      return cB.between(Bc, nc, ((cB, Ic) => {
        cB < nc && Ic > Bc && (Vc = !0)
      })), Vc ? cB.update({
        filterFrom: Bc,
        filterTo: nc,
        filter: (cB, Vc) => cB >= nc || Vc <= Bc
      }) : cB
    }

    function rn(cB, Bc, nc) {
      var Vc;
      let Ic = null;
      return null === (Vc = cB.field(VB, !1)) || void 0 === Vc || Vc.between(Bc, nc, ((cB, Bc) => {
        (!Ic || Ic.from > cB) && (Ic = {
          from: cB,
          to: Bc
        })
      })), Ic
    }

    function uB(cB, Bc, nc) {
      let Vc = !1;
      return cB.between(Bc, Bc, ((cB, Ic) => {
        cB == Bc && Ic == nc && (Vc = !0)
      })), Vc
    }

    function sB(cB, Bc) {
      return cB.field(VB, !1) ? Bc : Bc.concat(rB.F.appendConfig.of(TB()))
    }

    function MB(cB, Bc) {
      let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Vc = cB.state.doc.lineAt(Bc.from).number,
        Ic = cB.state.doc.lineAt(Bc.to).number;
      return uc.i.announce.of(`${cB.state.phrase(nc?"Folded lines":"Unfolded lines")} ${Vc} ${cB.state.phrase("to")} ${Ic}.`)
    }
    const PB = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: cB => {
          for (let Bc of nB(cB)) {
            let nc = Ac(cB.state, Bc.from, Bc.to);
            if (nc) return cB.dispatch({
              effects: sB(cB.state, [cn.of(nc), MB(cB, nc)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: cB => {
          if (!cB.state.field(VB, !1)) return !1;
          let Bc = [];
          for (let nc of nB(cB)) {
            let Vc = rn(cB.state, nc.from, nc.to);
            Vc && Bc.push(BB.of(Vc), MB(cB, Vc, !1))
          }
          return Bc.length && cB.dispatch({
            effects: Bc
          }), Bc.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: cB => {
          let {
            state: Bc
          } = cB, nc = [];
          for (let Vc = 0; Vc < Bc.doc.length;) {
            let Ic = cB.lineBlockAt(Vc),
              rB = Ac(Bc, Ic.from, Ic.to);
            rB && nc.push(cn.of(rB)), Vc = (rB ? cB.lineBlockAt(rB.to) : Ic).to + 1
          }
          return nc.length && cB.dispatch({
            effects: sB(cB.state, nc)
          }), !!nc.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: cB => {
          let Bc = cB.state.field(VB, !1);
          if (!Bc || !Bc.size) return !1;
          let nc = [];
          return Bc.between(0, cB.state.doc.length, ((cB, Bc) => {
            nc.push(BB.of({
              from: cB,
              to: Bc
            }))
          })), cB.dispatch({
            effects: nc
          }), !0
        }
      }],
      qn = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      OB = rB.q.define({
        combine: cB => (0, rB.$)(cB, qn)
      });

    function TB(cB) {
      let Bc = [VB, zn];
      return cB && Bc.push(OB.of(cB)), Bc
    }

    function fB(cB, Bc) {
      let {
        state: nc
      } = cB, Vc = nc.facet(OB), Ic = Bc => {
        let nc = cB.lineBlockAt(cB.posAtDOM(Bc.target)),
          Vc = rn(cB.state, nc.from, nc.to);
        Vc && cB.dispatch({
          effects: BB.of(Vc)
        }), Bc.preventDefault()
      };
      if (Vc.placeholderDOM) return Vc.placeholderDOM(cB, Ic, Bc);
      let rB = document.createElement("span");
      return rB.textContent = Vc.placeholderText, rB.setAttribute("aria-label", nc.phrase("folded code")), rB.title = nc.phrase("unfold"), rB.className = "cm-foldPlaceholder", rB.onclick = Ic, rB
    }
    const mn = uc.c.replace({
      widget: new class extends uc.r {
        toDOM(cB) {
          return fB(cB, null)
        }
      }
    });
    class eB extends uc.r {
      constructor(cB) {
        super(), this.value = cB
      }
      eq(cB) {
        return this.value == cB.value
      }
      toDOM(cB) {
        return fB(cB, this.value)
      }
    }
    const tn = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class SB extends uc.k {
      constructor(cB, Bc) {
        super(), this.config = cB, this.open = Bc
      }
      eq(cB) {
        return this.config == cB.config && this.open == cB.open
      }
      toDOM(cB) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let Bc = document.createElement("span");
        return Bc.textContent = this.open ? this.config.openText : this.config.closedText, Bc.title = cB.state.phrase(this.open ? "Fold line" : "Unfold line"), Bc
      }
    }

    function yn() {
      let cB = {
          ...tn,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        Bc = new SB(cB, !0),
        nc = new SB(cB, !1),
        Vc = uc.o.fromClass(class {
          constructor(cB) {
            this.from = cB.viewport.from, this.markers = this.buildMarkers(cB)
          }
          update(Bc) {
            (Bc.docChanged || Bc.viewportChanged || Bc.startState.facet(gB) != Bc.state.facet(gB) || Bc.startState.field(VB, !1) != Bc.state.field(VB, !1) || ec(Bc.startState) != ec(Bc.state) || cB.foldingChanged(Bc)) && (this.markers = this.buildMarkers(Bc.view))
          }
          buildMarkers(cB) {
            let Vc = new rB.x;
            for (let Ic of cB.viewportLineBlocks) {
              let rB = rn(cB.state, Ic.from, Ic.to) ? nc : Ac(cB.state, Ic.from, Ic.to) ? Bc : null;
              rB && Vc.add(Ic.from, Ic.from, rB)
            }
            return Vc.finish()
          }
        }),
        {
          domEventHandlers: Ic
        } = cB;
      return [Vc, (0, uc.G)({
        class: "cm-foldGutter",
        markers(cB) {
          var Bc;
          return (null === (Bc = cB.plugin(Vc)) || void 0 === Bc ? void 0 : Bc.markers) || rB.y.empty
        },
        initialSpacer: () => new SB(cB, !1),
        domEventHandlers: {
          ...Ic,
          click: (cB, Bc, nc) => {
            if (Ic.click && Ic.click(cB, Bc, nc)) return !0;
            let Vc = rn(cB.state, Bc.from, Bc.to);
            if (Vc) return cB.dispatch({
              effects: BB.of(Vc)
            }), !0;
            let rB = Ac(cB.state, Bc.from, Bc.to);
            return !!rB && (cB.dispatch({
              effects: cn.of(rB)
            }), !0)
          }
        }
      }), TB()]
    }
    const zn = uc.i.baseTheme({
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
    class pB {
      constructor(cB, Bc) {
        let nc;

        function Vc(cB) {
          let Bc = Mc.c.newName();
          return (nc || (nc = Object.create(null)))["." + Bc] = cB, Bc
        }
        this.specs = cB;
        const Ic = "string" == typeof Bc.all ? Bc.all : Bc.all ? Vc(Bc.all) : void 0,
          rB = Bc.scope;
        this.scope = rB instanceof Tc ? cB => cB.prop(Pc) == rB.data : rB ? cB => cB == rB : void 0, this.style = (0, sc.f)(cB.map((cB => ({
          tag: cB.tag,
          class: cB.class || Vc(Object.assign({}, cB, {
            tag: null
          }))
        }))), {
          all: Ic
        }).style, this.module = nc ? new Mc.c(nc) : null, this.themeType = Bc.themeType
      }
      static define(cB, Bc) {
        return new pB(cB, Bc || {})
      }
    }
    const hB = rB.q.define(),
      an = rB.q.define({
        combine: cB => cB.length ? [cB[0]] : null
      });

    function lB(cB) {
      let Bc = cB.facet(hB);
      return Bc.length ? Bc : cB.facet(an)
    }

    function YB(cB, Bc) {
      let nc, Vc = [gn];
      return cB instanceof pB && (cB.module && Vc.push(uc.i.styleModule.of(cB.module)), nc = cB.themeType), (null === Bc || void 0 === Bc ? void 0 : Bc.fallback) ? Vc.push(an.of(cB)) : nc ? Vc.push(hB.computeN([uc.i.darkTheme], (Bc => Bc.facet(uc.i.darkTheme) == ("dark" == nc) ? [cB] : []))) : Vc.push(hB.of(cB)), Vc
    }
    class LB {
      constructor(cB) {
        this.markCache = Object.create(null), this.tree = ec(cB.state), this.iu = this.buildDeco(cB, lB(cB.state)), this.decoratedTo = cB.viewport.to
      }
      update(cB) {
        let Bc = ec(cB.state),
          nc = lB(cB.state),
          Vc = nc != lB(cB.startState),
          {
            viewport: Ic
          } = cB.view,
          rB = cB.changes.mapPos(this.decoratedTo, 1);
        Bc.length < Ic.to && !Vc && Bc.type == this.tree.type && rB >= Ic.to ? (this.iu = this.iu.map(cB.changes), this.decoratedTo = rB) : (Bc != this.tree || cB.viewportChanged || Vc) && (this.tree = Bc, this.iu = this.buildDeco(cB.view, nc), this.decoratedTo = Ic.to)
      }
      buildDeco(cB, Bc) {
        if (!Bc || !this.tree.length) return uc.c.none;
        let nc = new rB.x;
        for (let {
            from: Vc,
            to: Ic
          }
          of cB.Muc)(0, sc.b)(this.tree, Bc, ((cB, Bc, Vc) => {
          nc.add(cB, Bc, this.markCache[Vc] || (this.markCache[Vc] = uc.c.mark({
            class: Vc
          })))
        }), Vc, Ic);
        return nc.finish()
      }
    }
    const gn = rB.v.high(uc.o.fromClass(LB, {
        iu: cB => cB.iu
      })),
      UB = pB.define([{
        tag: sc.j.meta,
        color: "#404740"
      }, {
        tag: sc.j.link,
        textDecoration: "underline"
      }, {
        tag: sc.j.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: sc.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: sc.j.strong,
        fontWeight: "bold"
      }, {
        tag: sc.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: sc.j.keyword,
        color: "#708"
      }, {
        tag: [sc.j.atom, sc.j.bool, sc.j.url, sc.j.contentSeparator, sc.j.labelName],
        color: "#219"
      }, {
        tag: [sc.j.literal, sc.j.inserted],
        color: "#164"
      }, {
        tag: [sc.j.string, sc.j.deleted],
        color: "#a11"
      }, {
        tag: [sc.j.regexp, sc.j.escape, sc.j.special(sc.j.string)],
        color: "#e40"
      }, {
        tag: sc.j.definition(sc.j.variableName),
        color: "#00f"
      }, {
        tag: sc.j.local(sc.j.variableName),
        color: "#30a"
      }, {
        tag: [sc.j.typeName, sc.j.namespace],
        color: "#085"
      }, {
        tag: sc.j.className,
        color: "#167"
      }, {
        tag: [sc.j.special(sc.j.variableName), sc.j.macroName],
        color: "#256"
      }, {
        tag: sc.j.definition(sc.j.propertyName),
        color: "#00c"
      }, {
        tag: sc.j.comment,
        color: "#940"
      }, {
        tag: sc.j.invalid,
        color: "#f00"
      }]),
      bn = uc.i.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      ZB = 1e4,
      QB = "()[]{}",
      CB = rB.q.define({
        combine: cB => (0, rB.$)(cB, {
          afterCursor: !0,
          brackets: QB,
          maxScanDistance: ZB,
          renderMatch: NB
        })
      }),
      vn = uc.c.mark({
        class: "cm-matchingBracket"
      }),
      DB = uc.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function NB(cB) {
      let Bc = [],
        nc = cB.matched ? vn : DB;
      return Bc.push(nc.range(cB.start.from, cB.start.to)), cB.end && Bc.push(nc.range(cB.end.from, cB.end.to)), Bc
    }

    function EB(cB) {
      let Bc = [],
        nc = cB.facet(CB);
      for (let Vc of cB.selection.Iu) {
        if (!Vc.empty) continue;
        let Ic = HB(cB, Vc.head, -1, nc) || Vc.head > 0 && HB(cB, Vc.head - 1, 1, nc) || nc.afterCursor && (HB(cB, Vc.head, 1, nc) || Vc.head < cB.doc.length && HB(cB, Vc.head + 1, -1, nc));
        Ic && (Bc = Bc.concat(nc.renderMatch(Ic, cB)))
      }
      return uc.c.set(Bc, !0)
    }
    const oB = [uc.o.fromClass(class {
      constructor(cB) {
        this.paused = !1, this.iu = EB(cB.state)
      }
      update(cB) {
        (cB.docChanged || cB.selectionSet || this.paused) && (cB.view.composing ? (this.iu = this.iu.map(cB.changes), this.paused = !0) : (this.iu = EB(cB.state), this.paused = !1))
      }
    }, {
      iu: cB => cB.iu
    }), bn];

    function WB() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [CB.of(cB), oB]
    }
    const wB = new Ic.k;

    function kn(cB, Bc, nc) {
      let Vc = cB.prop(Bc < 0 ? Ic.k.openedBy : Ic.k.closedBy);
      if (Vc) return Vc;
      if (1 == cB.name.length) {
        let Vc = nc.indexOf(cB.name);
        if (Vc > -1 && Vc % 2 == (Bc < 0 ? 1 : 0)) return [nc[Vc + Bc]]
      }
      return null
    }

    function XB(cB) {
      let Bc = cB.type.prop(wB);
      return Bc ? Bc(cB.node) : cB
    }

    function HB(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Ic = Vc.maxScanDistance || ZB,
        rB = Vc.brackets || QB,
        uc = ec(cB),
        sc = uc.resolveInner(Bc, nc);
      for (let Mc = sc; Mc; Mc = Mc.parent) {
        let Vc = kn(Mc.type, nc, rB);
        if (Vc && Mc.from < Mc.to) {
          let Ic = XB(Mc);
          if (Ic && (nc > 0 ? Bc >= Ic.from && Bc < Ic.to : Bc > Ic.from && Bc <= Ic.to)) return FB(cB, Bc, nc, Mc, Ic, Vc, rB)
        }
      }
      return function(cB, Bc, nc, Vc, Ic, rB, uc) {
        if (nc < 0 ? !Bc : Bc == cB.doc.length) return null;
        let sc = nc < 0 ? cB.sliceDoc(Bc - 1, Bc) : cB.sliceDoc(Bc, Bc + 1),
          Mc = uc.indexOf(sc);
        if (Mc < 0 || Mc % 2 == 0 != nc > 0) return null;
        let Pc = {
            from: nc < 0 ? Bc - 1 : Bc,
            to: nc > 0 ? Bc + 1 : Bc
          },
          qB = cB.doc.iterRange(Bc, nc > 0 ? cB.doc.length : 0),
          Oc = 0;
        for (let Tc = 0; !qB.next().done && Tc <= rB;) {
          let cB = qB.value;
          nc < 0 && (Tc += cB.length);
          let rB = Bc + Tc * nc;
          for (let Bc = nc > 0 ? 0 : cB.length - 1, sc = nc > 0 ? cB.length : -1; Bc != sc; Bc += nc) {
            let sc = uc.indexOf(cB[Bc]);
            if (!(sc < 0 || Vc.resolveInner(rB + Bc, 1).type != Ic))
              if (sc % 2 == 0 == nc > 0) Oc++;
              else {
                if (1 == Oc) return {
                  start: Pc,
                  end: {
                    from: rB + Bc,
                    to: rB + Bc + 1
                  },
                  matched: sc >> 1 == Mc >> 1
                };
                Oc--
              }
          }
          nc > 0 && (Tc += cB.length)
        }
        return qB.done ? {
          start: Pc,
          matched: !1
        } : null
      }(cB, Bc, nc, uc, sc.type, Ic, rB)
    }

    function FB(cB, Bc, nc, Vc, Ic, rB, uc) {
      let sc = Vc.parent,
        Mc = {
          from: Ic.from,
          to: Ic.to
        },
        Pc = 0,
        qB = null === sc || void 0 === sc ? void 0 : sc.cursor();
      if (qB && (nc < 0 ? qB.childBefore(Vc.from) : qB.childAfter(Vc.to)))
        do {
          if (nc < 0 ? qB.to <= Vc.from : qB.from >= Vc.to) {
            if (0 == Pc && rB.indexOf(qB.type.name) > -1 && qB.from < qB.to) {
              let cB = XB(qB);
              return {
                start: Mc,
                end: cB ? {
                  from: cB.from,
                  to: cB.to
                } : void 0,
                matched: !0
              }
            }
            if (kn(qB.type, nc, uc)) Pc++;
            else if (kn(qB.type, -nc, uc)) {
              if (0 == Pc) {
                let cB = XB(qB);
                return {
                  start: Mc,
                  end: cB && cB.from < cB.to ? {
                    from: cB.from,
                    to: cB.to
                  } : void 0,
                  matched: !1
                }
              }
              Pc--
            }
          }
        } while (nc < 0 ? qB.prevSibling() : qB.nextSibling());
      return {
        start: Mc,
        matched: !1
      }
    }
    const JB = Object.create(null),
      jn = [Ic.p.none],
      RB = [],
      KB = Object.create(null),
      xn = Object.create(null);
    for (let [GB, cV] of [
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
      ]) xn[GB] = AB(JB, cV);

    function dB(cB, Bc) {
      RB.indexOf(cB) > -1 || (RB.push(cB), console.warn(Bc))
    }

    function AB(cB, Bc) {
      let nc = [];
      for (let Ic of Bc.split(" ")) {
        let Bc = [];
        for (let nc of Ic.split(".")) {
          let Vc = cB[nc] || sc.j[nc];
          Vc ? "function" == typeof Vc ? Bc.length ? Bc = Bc.map(Vc) : dB(nc, `Modifier ${nc} used at start of tag`) : Bc.length ? dB(nc, `Tag ${nc} used as modifier`) : Bc = Array.isArray(Vc) ? Vc : [Vc] : dB(nc, `Unknown highlighting tag ${nc}`)
        }
        for (let cB of Bc) nc.push(cB)
      }
      if (!nc.length) return 0;
      let Vc = Bc.replace(/ /g, "_"),
        rB = Vc + " " + nc.map((cB => cB.id)),
        uc = KB[rB];
      if (uc) return uc.id;
      let Mc = KB[rB] = Ic.p.define({
        id: jn.length,
        name: Vc,
        props: [(0, sc.d)({
          [Vc]: nc
        })]
      });
      return jn.push(Mc), Mc.id
    }
    uc.g.RTL, uc.g.LTR
  },
  39336: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => zB,
      f: () => lc
    });
    var Vc = nc(39285),
      Ic = nc(39279),
      rB = nc(39295);
    class uc {
      constructor(cB, Bc, nc) {
        this.from = cB, this.to = Bc, this.diagnostic = nc
      }
    }
    class sc {
      constructor(cB, Bc, nc) {
        this.diagnostics = cB, this.panel = Bc, this.selected = nc
      }
      static init(cB, Bc, nc) {
        let rB = nc.facet(hc).markerFilter;
        rB && (cB = rB(cB, nc));
        let uc = cB.slice().sort(((cB, Bc) => cB.from - Bc.from || cB.to - Bc.to)),
          Pc = new Ic.x,
          qB = [],
          Oc = 0,
          Tc = nc.doc.iter(),
          fc = 0,
          mB = nc.doc.length;
        for (let Ic = 0;;) {
          let cB, Bc, nc = Ic == uc.length ? null : uc[Ic];
          if (!nc && !qB.length) break;
          if (qB.length) cB = Oc, Bc = qB.reduce(((cB, Bc) => Math.min(cB, Bc.to)), nc && nc.from > cB ? nc.from : 1e8);
          else {
            if (cB = nc.from, cB > mB) break;
            Bc = nc.to, qB.push(nc), Ic++
          }
          for (; Ic < uc.length;) {
            let nc = uc[Ic];
            if (nc.from != cB || !(nc.to > nc.from || nc.to == cB)) {
              Bc = Math.min(nc.from, Bc);
              break
            }
            qB.push(nc), Ic++, Bc = Math.min(nc.to, Bc)
          }
          Bc = Math.min(Bc, mB);
          let rB = !1;
          if (qB.some((nc => nc.from == cB && (nc.to == Bc || Bc == mB))) && (rB = cB == Bc, !rB && Bc - cB < 10)) {
            let nc = cB - (fc + Tc.value.length);
            nc > 0 && (Tc.next(nc), fc = cB);
            for (let Vc = cB;;) {
              if (Vc >= Bc) {
                rB = !0;
                break
              }
              if (!Tc.lineBreak && fc + Tc.value.length > Vc) break;
              Vc = fc + Tc.value.length, fc += Tc.value.length, Tc.next()
            }
          }
          let sc = Dc(qB);
          if (rB) Pc.add(cB, cB, Vc.c.widget({
            widget: new gB(sc),
            diagnostics: qB.slice()
          }));
          else {
            let nc = qB.reduce(((cB, Bc) => Bc.markClass ? cB + " " + Bc.markClass : cB), "");
            Pc.add(cB, Bc, Vc.c.mark({
              class: "cm-lintRange cm-lintRange-" + sc + nc,
              diagnostics: qB.slice(),
              inclusiveEnd: qB.some((cB => cB.to > Bc))
            }))
          }
          if (Oc = Bc, Oc == mB) break;
          for (let Vc = 0; Vc < qB.length; Vc++) qB[Vc].to <= Oc && qB.splice(Vc--, 1)
        }
        let ec = Pc.finish();
        return new sc(ec, Bc, Mc(ec))
      }
    }

    function Mc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Vc = null;
      return cB.between(nc, 1e9, ((cB, nc, Ic) => {
        let {
          spec: rB
        } = Ic;
        if (!(Bc && rB.diagnostics.indexOf(Bc) < 0))
          if (Vc) {
            if (rB.diagnostics.indexOf(Vc.diagnostic) < 0) return !1;
            Vc = new uc(Vc.from, nc, Vc.diagnostic)
          } else Vc = new uc(cB, nc, Bc || rB.diagnostics[0])
      })), Vc
    }

    function Pc(cB, Bc) {
      let nc = Bc.pos,
        Vc = Bc.end || nc,
        Ic = cB.state.facet(hc).hideOn(cB, nc, Vc);
      if (null != Ic) return Ic;
      let rB = cB.startState.doc.lineAt(Bc.pos);
      return !(!cB.effects.some((cB => cB.is(Oc))) && !cB.changes.touchesRange(rB.from, Math.max(rB.to, Vc)))
    }

    function qB(cB, Bc) {
      return cB.field(mB, !1) ? Bc : Bc.concat(Ic.F.appendConfig.of(Nc))
    }
    const Oc = Ic.F.define(),
      Tc = Ic.F.define(),
      fc = Ic.F.define(),
      mB = Ic.J.define({
        create: () => new sc(Vc.c.none, null, null),
        update(cB, Bc) {
          if (Bc.docChanged && cB.diagnostics.size) {
            let nc = cB.diagnostics.map(Bc.changes),
              Vc = null,
              Ic = cB.panel;
            if (cB.selected) {
              let Ic = Bc.changes.mapPos(cB.selected.from, 1);
              Vc = Mc(nc, cB.selected.diagnostic, Ic) || Mc(nc, null, Ic)
            }!nc.size && Ic && Bc.state.facet(hc).autoPanel && (Ic = null), cB = new sc(nc, Ic, Vc)
          }
          for (let nc of Bc.effects)
            if (nc.is(Oc)) {
              let Vc = Bc.state.facet(hc).autoPanel ? nc.value.length ? bB.open : null : cB.panel;
              cB = sc.init(nc.value, Vc, Bc.state)
            } else nc.is(Tc) ? cB = new sc(cB.diagnostics, nc.value ? bB.open : null, cB.selected) : nc.is(fc) && (cB = new sc(cB.diagnostics, cB.panel, nc.value));
          return cB
        },
        provide: cB => [Vc.fb.from(cB, (cB => cB.panel)), Vc.i.iu.from(cB, (cB => cB.diagnostics))]
      });
    const ec = Vc.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function tB(cB, Bc, nc) {
      let Vc, {
          diagnostics: Ic
        } = cB.state.field(mB),
        rB = -1,
        uc = -1;
      Ic.between(Bc - (nc < 0 ? 1 : 0), Bc + (nc > 0 ? 1 : 0), ((cB, Ic, sc) => {
        let {
          spec: Mc
        } = sc;
        if (Bc >= cB && Bc <= Ic && (cB == Ic || (Bc > cB || nc > 0) && (Bc < Ic || nc < 0))) return Vc = Mc.diagnostics, rB = cB, uc = Ic, !1
      }));
      let sc = cB.state.facet(hc).tooltipFilter;
      return Vc && sc && (Vc = sc(Vc, cB.state)), Vc ? {
        pos: rB,
        end: uc,
        above: cB.state.doc.lineAt(rB).to < uc,
        create: () => ({
          dom: Sc(cB, Vc)
        })
      } : null
    }

    function Sc(cB, Bc) {
      return (0, rB.b)("ul", {
        class: "cm-tooltip-lint"
      }, Bc.map((Bc => Lc(cB, Bc, !1))))
    }
    const yB = cB => {
        let Bc = cB.state.field(mB, !1);
        return !(!Bc || !Bc.panel) && (cB.dispatch({
          effects: Tc.of(!1)
        }), !0)
      },
      zB = [{
        key: "Mod-Shift-m",
        run: cB => {
          let Bc = cB.state.field(mB, !1);
          Bc && Bc.panel || cB.dispatch({
            effects: qB(cB.state, [Tc.of(!0)])
          });
          let nc = (0, Vc.B)(cB, bB.open);
          return nc && nc.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: cB => {
          let Bc = cB.state.field(mB, !1);
          if (!Bc) return !1;
          let nc = cB.state.selection.main,
            Vc = Mc(Bc.diagnostics, null, nc.to + 1);
          return !(!Vc && (Vc = Mc(Bc.diagnostics, null, 0), !Vc || Vc.from == nc.from && Vc.to == nc.to)) && (cB.dispatch({
            selection: {
              anchor: Vc.from,
              head: Vc.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      pc = Vc.o.fromClass(class {
        constructor(cB) {
          this.view = cB, this.timeout = -1, this.set = !0;
          let {
            delay: Bc
          } = cB.state.facet(hc);
          this.lintTime = Date.now() + Bc, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, Bc)
        }
        run() {
          clearTimeout(this.timeout);
          let cB = Date.now();
          if (cB < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - cB);
          else {
            this.set = !1;
            let {
              state: cB
            } = this.view, {
              sources: Bc
            } = cB.facet(hc);
            Bc.length && function(cB, Bc, nc) {
              let Vc = [],
                Ic = -1;
              for (let rB of cB) rB.then((nc => {
                Vc.push(nc), clearTimeout(Ic), Vc.length == cB.length ? Bc(Vc) : Ic = setTimeout((() => Bc(Vc)), 200)
              }), nc)
            }(Bc.map((cB => Promise.resolve(cB(this.view)))), (Bc => {
              this.view.state.doc == cB.doc && this.view.dispatch(function(cB, Bc) {
                return {
                  effects: qB(cB, [Oc.of(Bc)])
                }
              }(this.view.state, Bc.reduce(((cB, Bc) => cB.concat(Bc)))))
            }), (cB => {
              (0, Vc.Y)(this.view.state, cB)
            }))
          }
        }
        update(cB) {
          let Bc = cB.state.facet(hc);
          (cB.docChanged || Bc != cB.startState.facet(hc) || Bc.needsRefresh && Bc.needsRefresh(cB)) && (this.lintTime = Date.now() + Bc.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, Bc.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const hc = Ic.q.define({
      combine: cB => ({
        sources: cB.map((cB => cB.source)).filter((cB => null != cB)),
        ...(0, Ic.$)(cB.map((cB => cB.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: aB,
          tooltipFilter: aB,
          needsRefresh: (cB, Bc) => cB ? Bc ? nc => cB(nc) || Bc(nc) : cB : Bc,
          hideOn: (cB, Bc) => cB ? Bc ? (nc, Vc, Ic) => cB(nc, Vc, Ic) || Bc(nc, Vc, Ic) : cB : Bc,
          autoPanel: (cB, Bc) => cB || Bc
        })
      })
    });

    function aB(cB, Bc) {
      return cB ? Bc ? (nc, Vc) => Bc(cB(nc, Vc), Vc) : cB : Bc
    }

    function lc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [hc.of({
        source: cB,
        config: Bc
      }), pc, Nc]
    }

    function Yc(cB) {
      let Bc = [];
      if (cB) cB: for (let {
          name: nc
        }
        of cB) {
        for (let cB = 0; cB < nc.length; cB++) {
          let Vc = nc[cB];
          if (/[a-zA-Z]/.test(Vc) && !Bc.some((cB => cB.toLowerCase() == Vc.toLowerCase()))) {
            Bc.push(Vc);
            continue cB
          }
        }
        Bc.push("")
      }
      return Bc
    }

    function Lc(cB, Bc, nc) {
      var Vc;
      let Ic = nc ? Yc(Bc.actions) : [];
      return (0, rB.b)("li", {
        class: "cm-diagnostic cm-diagnostic-" + Bc.severity
      }, (0, rB.b)("span", {
        class: "cm-diagnosticText"
      }, Bc.renderMessage ? Bc.renderMessage(cB) : Bc.message), null === (Vc = Bc.actions) || void 0 === Vc ? void 0 : Vc.map(((nc, Vc) => {
        let uc = !1,
          sc = Vc => {
            if (Vc.preventDefault(), uc) return;
            uc = !0;
            let Ic = Mc(cB.state.field(mB).diagnostics, Bc);
            Ic && nc.apply(cB, Ic.from, Ic.to)
          },
          {
            name: Pc
          } = nc,
          qB = Ic[Vc] ? Pc.indexOf(Ic[Vc]) : -1,
          Oc = qB < 0 ? Pc : [Pc.slice(0, qB), (0, rB.b)("u", Pc.slice(qB, qB + 1)), Pc.slice(qB + 1)],
          Tc = nc.markClass ? " " + nc.markClass : "";
        return (0, rB.b)("button", {
          type: "button",
          class: "cm-diagnosticAction" + Tc,
          onclick: sc,
          onmousedown: sc,
          "aria-label": ` Action: ${Pc}${qB<0?"":` (access key "${Ic[Vc]})"`}.`
        }, Oc)
      })), Bc.source && (0, rB.b)("div", {
        class: "cm-diagnosticSource"
      }, Bc.source))
    }
    class gB extends Vc.r {
      constructor(cB) {
        super(), this.sev = cB
      }
      eq(cB) {
        return cB.sev == this.sev
      }
      toDOM() {
        return (0, rB.b)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class Uc {
      constructor(cB, Bc) {
        this.diagnostic = Bc, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = Lc(cB, Bc, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class bB {
      constructor(cB) {
        this.view = cB, this.items = [];
        this.list = (0, rB.b)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: Bc => {
            if (!(Bc.ctrlKey || Bc.altKey || Bc.metaKey)) {
              if (27 == Bc.keyCode) yB(this.view), this.view.focus();
              else if (38 == Bc.keyCode || 33 == Bc.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == Bc.keyCode || 34 == Bc.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == Bc.keyCode) this.moveSelection(0);
              else if (35 == Bc.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == Bc.keyCode) this.view.focus();
              else {
                if (!(Bc.keyCode >= 65 && Bc.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: nc
                  } = this.items[this.selectedIndex], Vc = Yc(nc.actions);
                  for (let Ic = 0; Ic < Vc.length; Ic++)
                    if (Vc[Ic].toUpperCase().charCodeAt(0) == Bc.keyCode) {
                      let Bc = Mc(this.view.state.field(mB).diagnostics, nc);
                      Bc && nc.actions[Ic].apply(cB, Bc.from, Bc.to)
                    }
                }
              }
              Bc.preventDefault()
            }
          },
          onclick: cB => {
            for (let Bc = 0; Bc < this.items.length; Bc++) this.items[Bc].dom.contains(cB.target) && this.moveSelection(Bc)
          }
        }), this.dom = (0, rB.b)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, rB.b)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => yB(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let cB = this.view.state.field(mB).selected;
        if (!cB) return -1;
        for (let Bc = 0; Bc < this.items.length; Bc++)
          if (this.items[Bc].diagnostic == cB.diagnostic) return Bc;
        return -1
      }
      update() {
        let {
          diagnostics: cB,
          selected: Bc
        } = this.view.state.field(mB), nc = 0, Vc = !1, Ic = null, rB = new Set;
        for (cB.between(0, this.view.state.doc.length, ((cB, uc, sc) => {
            let {
              spec: Mc
            } = sc;
            for (let Pc of Mc.diagnostics) {
              if (rB.has(Pc)) continue;
              rB.add(Pc);
              let cB, uc = -1;
              for (let Bc = nc; Bc < this.items.length; Bc++)
                if (this.items[Bc].diagnostic == Pc) {
                  uc = Bc;
                  break
                } uc < 0 ? (cB = new Uc(this.view, Pc), this.items.splice(nc, 0, cB), Vc = !0) : (cB = this.items[uc], uc > nc && (this.items.splice(nc, uc - nc), Vc = !0)), Bc && cB.diagnostic == Bc.diagnostic ? cB.dom.hasAttribute("aria-selected") || (cB.dom.setAttribute("aria-selected", "true"), Ic = cB) : cB.dom.hasAttribute("aria-selected") && cB.dom.removeAttribute("aria-selected"), nc++
            }
          })); nc < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Vc = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new Uc(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Vc = !0), Ic ? (this.list.setAttribute("aria-activedescendant", Ic.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Ic.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: cB => {
            let {
              sel: Bc,
              panel: nc
            } = cB, Vc = nc.height / this.list.offsetHeight;
            Bc.top < nc.top ? this.list.scrollTop -= (nc.top - Bc.top) / Vc : Bc.bottom > nc.bottom && (this.list.scrollTop += (Bc.bottom - nc.bottom) / Vc)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Vc && this.sync()
      }
      sync() {
        let cB = this.list.firstChild;

        function Bc() {
          let Bc = cB;
          cB = Bc.nextSibling, Bc.remove()
        }
        for (let nc of this.items)
          if (nc.dom.parentNode == this.list) {
            for (; cB != nc.dom;) Bc();
            cB = nc.dom.nextSibling
          } else this.list.insertBefore(nc.dom, cB);
        for (; cB;) Bc()
      }
      moveSelection(cB) {
        if (this.selectedIndex < 0) return;
        let Bc = Mc(this.view.state.field(mB).diagnostics, this.items[cB].diagnostic);
        Bc && this.view.dispatch({
          selection: {
            anchor: Bc.from,
            head: Bc.to
          },
          scrollIntoView: !0,
          effects: fc.of(Bc)
        })
      }
      static open(cB) {
        return new bB(cB)
      }
    }

    function Zc(cB) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(cB)}</svg>')`
    }

    function Qc(cB) {
      return Zc(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${cB}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Cc = Vc.i.baseTheme({
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
        backgroundImage: Qc("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Qc("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Qc("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Qc("#66d")
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

    function vB(cB) {
      return "error" == cB ? 4 : "warning" == cB ? 3 : "info" == cB ? 2 : 1
    }

    function Dc(cB) {
      let Bc = "hint",
        nc = 1;
      for (let Vc of cB) {
        let cB = vB(Vc.severity);
        cB > nc && (nc = cB, Bc = Vc.severity)
      }
      return Bc
    }
    Vc.k;
    const Nc = [mB, Vc.i.iu.compute([mB], (cB => {
      let {
        selected: Bc,
        panel: nc
      } = cB.field(mB);
      return Bc && nc && Bc.from != Bc.to ? Vc.c.set([ec.range(Bc.from, Bc.to)]) : Vc.c.none
    })), (0, Vc.R)(tB, {
      hideOn: Pc
    }), Cc]
  },
  39330: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ac,
      f: () => Sc,
      i: () => Gc
    });
    var Vc = nc(39285),
      Ic = nc(39279),
      rB = nc(39295);
    const uc = "function" == typeof String.prototype.normalize ? cB => cB.normalize("NFKD") : cB => cB;
    class sc {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cB.length,
          Ic = arguments.length > 4 ? arguments[4] : void 0,
          rB = arguments.length > 5 ? arguments[5] : void 0;
        this.test = rB, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = cB.iterRange(nc, Vc), this.bufferStart = nc, this.normalize = Ic ? cB => Ic(uc(cB)) : uc, this.query = this.normalize(Bc)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Ic.U)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let cB = this.peek();
          if (cB < 0) return this.done = !0, this;
          let Bc = (0, Ic.hb)(cB),
            nc = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Ic.Y)(cB);
          let Vc = this.normalize(Bc);
          if (Vc.length)
            for (let Ic = 0, rB = nc;; Ic++) {
              let cB = Vc.charCodeAt(Ic),
                uc = this.match(cB, rB, this.bufferPos + this.bufferStart);
              if (Ic == Vc.length - 1) {
                if (uc) return this.value = uc, this;
                break
              }
              rB == nc && Ic < Bc.length && Bc.charCodeAt(Ic) == cB && rB++
            }
        }
      }
      match(cB, Bc, nc) {
        let Vc = null;
        for (let Ic = 0; Ic < this.matches.length; Ic += 2) {
          let Bc = this.matches[Ic],
            rB = !1;
          this.query.charCodeAt(Bc) == cB && (Bc == this.query.length - 1 ? Vc = {
            from: this.matches[Ic + 1],
            to: nc
          } : (this.matches[Ic]++, rB = !0)), rB || (this.matches.splice(Ic, 2), Ic -= 2)
        }
        return this.query.charCodeAt(0) == cB && (1 == this.query.length ? Vc = {
          from: Bc,
          to: nc
        } : this.matches.push(1, Bc)), Vc && this.test && !this.test(Vc.from, Vc.to, this.buffer, this.bufferStart) && (Vc = null), Vc
      }
    }
    "undefined" != typeof Symbol && (sc.prototype[Symbol.iterator] = function() {
      return this
    });
    const Mc = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      Pc = "gm" + (null == /x/.unicode ? "" : "u");
    class qB {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : cB.length;
        if (this.text = cB, this.to = Ic, this.curLine = "", this.done = !1, this.value = Mc, /\\[sWDnr]|\n|\r|\[\^/.test(Bc)) return new fc(cB, Bc, nc, Vc, Ic);
        this.re = new RegExp(Bc, Pc + ((null === nc || void 0 === nc ? void 0 : nc.ignoreCase) ? "i" : "")), this.test = null === nc || void 0 === nc ? void 0 : nc.test, this.iter = cB.iter();
        let rB = cB.lineAt(Vc);
        this.curLineStart = rB.from, this.matchPos = mB(cB, Vc), this.getLine(this.curLineStart)
      }
      getLine(cB) {
        this.iter.next(cB), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let cB = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = cB;
          let Bc = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (Bc) {
            let nc = this.curLineStart + Bc.index,
              Vc = nc + Bc[0].length;
            if (this.matchPos = mB(this.text, Vc + (nc == Vc ? 1 : 0)), nc == this.curLineStart + this.curLine.length && this.nextLine(), (nc < Vc || nc > this.value.to) && (!this.test || this.test(nc, Vc, Bc))) return this.value = {
              from: nc,
              to: Vc,
              match: Bc
            }, this;
            cB = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), cB = 0
          }
        }
      }
    }
    const Oc = new WeakMap;
    class Tc {
      constructor(cB, Bc) {
        this.from = cB, this.text = Bc
      }
      get to() {
        return this.from + this.text.length
      }
      static get(cB, Bc, nc) {
        let Vc = Oc.get(cB);
        if (!Vc || Vc.from >= nc || Vc.to <= Bc) {
          let Vc = new Tc(Bc, cB.sliceString(Bc, nc));
          return Oc.set(cB, Vc), Vc
        }
        if (Vc.from == Bc && Vc.to == nc) return Vc;
        let {
          text: Ic,
          from: rB
        } = Vc;
        return rB > Bc && (Ic = cB.sliceString(Bc, rB) + Ic, rB = Bc), Vc.to < nc && (Ic += cB.sliceString(Vc.to, nc)), Oc.set(cB, new Tc(rB, Ic)), new Tc(Bc, Ic.slice(Bc - rB, nc - rB))
      }
    }
    class fc {
      constructor(cB, Bc, nc, Vc, Ic) {
        this.text = cB, this.to = Ic, this.done = !1, this.value = Mc, this.matchPos = mB(cB, Vc), this.re = new RegExp(Bc, Pc + ((null === nc || void 0 === nc ? void 0 : nc.ignoreCase) ? "i" : "")), this.test = null === nc || void 0 === nc ? void 0 : nc.test, this.flat = Tc.get(cB, Vc, this.chunkEnd(Vc + 5e3))
      }
      chunkEnd(cB) {
        return cB >= this.to ? this.to : this.text.lineAt(cB).to
      }
      next() {
        for (;;) {
          let cB = this.re.lastIndex = this.matchPos - this.flat.from,
            Bc = this.re.exec(this.flat.text);
          if (Bc && !Bc[0] && Bc.index == cB && (this.re.lastIndex = cB + 1, Bc = this.re.exec(this.flat.text)), Bc) {
            let cB = this.flat.from + Bc.index,
              nc = cB + Bc[0].length;
            if ((this.flat.to >= this.to || Bc.index + Bc[0].length <= this.flat.text.length - 10) && (!this.test || this.test(cB, nc, Bc))) return this.value = {
              from: cB,
              to: nc,
              match: Bc
            }, this.matchPos = mB(this.text, nc + (cB == nc ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = Tc.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function mB(cB, Bc) {
      if (Bc >= cB.length) return Bc;
      let nc, Vc = cB.lineAt(Bc);
      for (; Bc < Vc.to && (nc = Vc.text.charCodeAt(Bc - Vc.from)) >= 56320 && nc < 57344;) Bc++;
      return Bc
    }
    "undefined" != typeof Symbol && (qB.prototype[Symbol.iterator] = fc.prototype[Symbol.iterator] = function() {
      return this
    });
    const ec = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      tB = Ic.q.define({
        combine: cB => (0, Ic.$)(cB, ec, {
          highlightWordAroundCursor: (cB, Bc) => cB || Bc,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function Sc(cB) {
      let Bc = [aB, hc];
      return cB && Bc.push(tB.of(cB)), Bc
    }
    const yB = Vc.c.mark({
        class: "cm-selectionMatch"
      }),
      zB = Vc.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function pc(cB, Bc, nc, Vc) {
      return (0 == nc || cB(Bc.sliceDoc(nc - 1, nc)) != Ic.i.Word) && (Vc == Bc.doc.length || cB(Bc.sliceDoc(Vc, Vc + 1)) != Ic.i.Word)
    }
    const hc = Vc.o.fromClass(class {
        constructor(cB) {
          this.iu = this.getDeco(cB)
        }
        update(cB) {
          (cB.selectionSet || cB.docChanged || cB.viewportChanged) && (this.iu = this.getDeco(cB.view))
        }
        getDeco(cB) {
          let Bc = cB.state.facet(tB),
            {
              state: nc
            } = cB,
            rB = nc.selection;
          if (rB.Iu.length > 1) return Vc.c.none;
          let uc, Mc = rB.main,
            Pc = null;
          if (Mc.empty) {
            if (!Bc.highlightWordAroundCursor) return Vc.c.none;
            let cB = nc.wordAt(Mc.head);
            if (!cB) return Vc.c.none;
            Pc = nc.charCategorizer(Mc.head), uc = nc.sliceDoc(cB.from, cB.to)
          } else {
            let cB = Mc.to - Mc.from;
            if (cB < Bc.minSelectionLength || cB > 200) return Vc.c.none;
            if (Bc.wholeWords) {
              if (uc = nc.sliceDoc(Mc.from, Mc.to), Pc = nc.charCategorizer(Mc.head), !pc(Pc, nc, Mc.from, Mc.to) || ! function(cB, Bc, nc, Vc) {
                  return cB(Bc.sliceDoc(nc, nc + 1)) == Ic.i.Word && cB(Bc.sliceDoc(Vc - 1, Vc)) == Ic.i.Word
                }(Pc, nc, Mc.from, Mc.to)) return Vc.c.none
            } else if (uc = nc.sliceDoc(Mc.from, Mc.to), !uc) return Vc.c.none
          }
          let qB = [];
          for (let Ic of cB.Muc) {
            let cB = new sc(nc.doc, uc, Ic.from, Ic.to);
            for (; !cB.next().done;) {
              let {
                from: Ic,
                to: rB
              } = cB.value;
              if ((!Pc || pc(Pc, nc, Ic, rB)) && (Mc.empty && Ic <= Mc.from && rB >= Mc.to ? qB.push(zB.range(Ic, rB)) : (Ic >= Mc.to || rB <= Mc.from) && qB.push(yB.range(Ic, rB)), qB.length > Bc.maxMatches)) return Vc.c.none
            }
          }
          return Vc.c.set(qB)
        }
      }, {
        iu: cB => cB.iu
      }),
      aB = Vc.i.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const lc = Ic.q.define({
      combine: cB => (0, Ic.$)(cB, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: cB => new cn(cB),
        scrollToMatch: cB => Vc.i.scrollIntoView(cB)
      })
    });
    class Yc {
      constructor(cB) {
        this.search = cB.search, this.caseSensitive = !!cB.caseSensitive, this.literal = !!cB.literal, this.regexp = !!cB.regexp, this.replace = cB.replace || "", this.valid = !!this.search && (!this.regexp || function(cB) {
          try {
            return new RegExp(cB, Pc), !0
          } catch (Bc) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!cB.wholeWord, this.test = cB.test
      }
      unquote(cB) {
        return this.literal ? cB : cB.replace(/\\([nrt\\])/g, ((cB, Bc) => "n" == Bc ? "\n" : "r" == Bc ? "\r" : "t" == Bc ? "\t" : "\\"))
      }
      eq(cB) {
        return this.search == cB.search && this.replace == cB.replace && this.caseSensitive == cB.caseSensitive && this.regexp == cB.regexp && this.wholeWord == cB.wholeWord && this.test == cB.test
      }
      create() {
        return this.regexp ? new Cc(this) : new Uc(this)
      }
      getCursor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = cB.doc ? cB : Ic.o.create({
            doc: cB
          });
        return null == nc && (nc = Vc.doc.length), this.regexp ? bB(this, Vc, Bc, nc) : gB(this, Vc, Bc, nc)
      }
    }
    class Lc {
      constructor(cB) {
        this.spec = cB
      }
    }

    function gB(cB, Bc, nc, Vc) {
      let rB;
      var uc, Mc;
      return cB.wholeWord && (uc = Bc.doc, Mc = Bc.charCategorizer(Bc.selection.main.head), rB = (cB, Bc, nc, Vc) => ((Vc > cB || Vc + nc.length < Bc) && (Vc = Math.max(0, cB - 2), nc = uc.sliceString(Vc, Math.min(uc.length, Bc + 2))), (Mc(Zc(nc, cB - Vc)) != Ic.i.Word || Mc(Qc(nc, cB - Vc)) != Ic.i.Word) && (Mc(Qc(nc, Bc - Vc)) != Ic.i.Word || Mc(Zc(nc, Bc - Vc)) != Ic.i.Word))), cB.test && (rB = function(cB, Bc, nc) {
        return (Vc, Ic, rB, uc) => {
          if (nc && !nc(Vc, Ic, rB, uc)) return !1;
          let sc = Vc >= uc && Ic <= uc + rB.length ? rB.slice(Vc - uc, Ic - uc) : Bc.doc.sliceString(Vc, Ic);
          return cB(sc, Bc, Vc, Ic)
        }
      }(cB.test, Bc, rB)), new sc(Bc.doc, cB.unquoted, nc, Vc, cB.caseSensitive ? void 0 : cB => cB.toLowerCase(), rB)
    }
    class Uc extends Lc {
      constructor(cB) {
        super(cB)
      }
      nextMatch(cB, Bc, nc) {
        let Vc = gB(this.spec, cB, nc, cB.doc.length).nextOverlapping();
        if (Vc.done) {
          let nc = Math.min(cB.doc.length, Bc + this.spec.unquoted.length);
          Vc = gB(this.spec, cB, 0, nc).nextOverlapping()
        }
        return Vc.done || Vc.value.from == Bc && Vc.value.to == nc ? null : Vc.value
      }
      prevMatchInRange(cB, Bc, nc) {
        for (let Vc = nc;;) {
          let nc = Math.max(Bc, Vc - 1e4 - this.spec.unquoted.length),
            Ic = gB(this.spec, cB, nc, Vc),
            rB = null;
          for (; !Ic.nextOverlapping().done;) rB = Ic.value;
          if (rB) return rB;
          if (nc == Bc) return null;
          Vc -= 1e4
        }
      }
      prevMatch(cB, Bc, nc) {
        let Vc = this.prevMatchInRange(cB, 0, Bc);
        return Vc || (Vc = this.prevMatchInRange(cB, Math.max(0, nc - this.spec.unquoted.length), cB.doc.length)), !Vc || Vc.from == Bc && Vc.to == nc ? null : Vc
      }
      getReplacement(cB) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(cB, Bc) {
        let nc = gB(this.spec, cB, 0, cB.doc.length),
          Vc = [];
        for (; !nc.next().done;) {
          if (Vc.length >= Bc) return null;
          Vc.push(nc.value)
        }
        return Vc
      }
      highlight(cB, Bc, nc, Vc) {
        let Ic = gB(this.spec, cB, Math.max(0, Bc - this.spec.unquoted.length), Math.min(nc + this.spec.unquoted.length, cB.doc.length));
        for (; !Ic.next().done;) Vc(Ic.value.from, Ic.value.to)
      }
    }

    function bB(cB, Bc, nc, Vc) {
      let rB;
      var uc;
      return cB.wholeWord && (uc = Bc.charCategorizer(Bc.selection.main.head), rB = (cB, Bc, nc) => !nc[0].length || (uc(Zc(nc.input, nc.index)) != Ic.i.Word || uc(Qc(nc.input, nc.index)) != Ic.i.Word) && (uc(Qc(nc.input, nc.index + nc[0].length)) != Ic.i.Word || uc(Zc(nc.input, nc.index + nc[0].length)) != Ic.i.Word)), cB.test && (rB = function(cB, Bc, nc) {
        return (Vc, Ic, rB) => (!nc || nc(Vc, Ic, rB)) && cB(rB[0], Bc, Vc, Ic)
      }(cB.test, Bc, rB)), new qB(Bc.doc, cB.search, {
        ignoreCase: !cB.caseSensitive,
        test: rB
      }, nc, Vc)
    }

    function Zc(cB, Bc) {
      return cB.slice((0, Ic.eb)(cB, Bc, !1), Bc)
    }

    function Qc(cB, Bc) {
      return cB.slice(Bc, (0, Ic.eb)(cB, Bc))
    }
    class Cc extends Lc {
      nextMatch(cB, Bc, nc) {
        let Vc = bB(this.spec, cB, nc, cB.doc.length).next();
        return Vc.done && (Vc = bB(this.spec, cB, 0, Bc).next()), Vc.done ? null : Vc.value
      }
      prevMatchInRange(cB, Bc, nc) {
        for (let Vc = 1;; Vc++) {
          let Ic = Math.max(Bc, nc - 1e4 * Vc),
            rB = bB(this.spec, cB, Ic, nc),
            uc = null;
          for (; !rB.next().done;) uc = rB.value;
          if (uc && (Ic == Bc || uc.from > Ic + 10)) return uc;
          if (Ic == Bc) return null
        }
      }
      prevMatch(cB, Bc, nc) {
        return this.prevMatchInRange(cB, 0, Bc) || this.prevMatchInRange(cB, nc, cB.doc.length)
      }
      getReplacement(cB) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((Bc, nc) => {
          if ("&" == nc) return cB.match[0];
          if ("$" == nc) return "$";
          for (let Vc = nc.length; Vc > 0; Vc--) {
            let Bc = +nc.slice(0, Vc);
            if (Bc > 0 && Bc < cB.match.length) return cB.match[Bc] + nc.slice(Vc)
          }
          return Bc
        }))
      }
      matchAll(cB, Bc) {
        let nc = bB(this.spec, cB, 0, cB.doc.length),
          Vc = [];
        for (; !nc.next().done;) {
          if (Vc.length >= Bc) return null;
          Vc.push(nc.value)
        }
        return Vc
      }
      highlight(cB, Bc, nc, Vc) {
        let Ic = bB(this.spec, cB, Math.max(0, Bc - 250), Math.min(nc + 250, cB.doc.length));
        for (; !Ic.next().done;) Vc(Ic.value.from, Ic.value.to)
      }
    }
    const vB = Ic.F.define(),
      Dc = Ic.F.define(),
      Nc = Ic.J.define({
        create: cB => new Ec(iB(cB).create(), null),
        update(cB, Bc) {
          for (let nc of Bc.effects) nc.is(vB) ? cB = new Ec(nc.value.create(), cB.panel) : nc.is(Dc) && (cB = new Ec(cB.query, nc.value ? Rc : null));
          return cB
        },
        provide: cB => Vc.fb.from(cB, (cB => cB.panel))
      });
    class Ec {
      constructor(cB, Bc) {
        this.query = cB, this.panel = Bc
      }
    }
    const oc = Vc.c.mark({
        class: "cm-searchMatch"
      }),
      Wc = Vc.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      wc = Vc.o.fromClass(class {
        constructor(cB) {
          this.view = cB, this.iu = this.highlight(cB.state.field(Nc))
        }
        update(cB) {
          let Bc = cB.state.field(Nc);
          (Bc != cB.startState.field(Nc) || cB.docChanged || cB.selectionSet || cB.viewportChanged) && (this.iu = this.highlight(Bc))
        }
        highlight(cB) {
          let {
            query: Bc,
            panel: nc
          } = cB;
          if (!nc || !Bc.spec.valid) return Vc.c.none;
          let {
            view: rB
          } = this, uc = new Ic.x;
          for (let Vc = 0, Ic = rB.Muc, sc = Ic.length; Vc < sc; Vc++) {
            let {
              from: cB,
              to: nc
            } = Ic[Vc];
            for (; Vc < sc - 1 && nc > Ic[Vc + 1].from - 500;) nc = Ic[++Vc].to;
            Bc.highlight(rB.state, cB, nc, ((cB, Bc) => {
              let nc = rB.state.selection.Iu.some((nc => nc.from == cB && nc.to == Bc));
              uc.add(cB, Bc, nc ? Wc : oc)
            }))
          }
          return uc.finish()
        }
      }, {
        iu: cB => cB.iu
      });

    function kB(cB) {
      return Bc => {
        let nc = Bc.state.field(Nc, !1);
        return nc && nc.query.spec.valid ? cB(Bc, nc) : dc(Bc)
      }
    }
    const Xc = kB(((cB, Bc) => {
        let {
          query: nc
        } = Bc, {
          to: Vc
        } = cB.state.selection.main, rB = nc.nextMatch(cB.state, Vc, Vc);
        if (!rB) return !1;
        let uc = Ic.m.single(rB.from, rB.to),
          sc = cB.state.facet(lc);
        return cB.dispatch({
          selection: uc,
          effects: [IB(cB, rB), sc.scrollToMatch(uc.main, cB)],
          userEvent: "select.search"
        }), xB(cB), !0
      })),
      Hc = kB(((cB, Bc) => {
        let {
          query: nc
        } = Bc, {
          state: Vc
        } = cB, {
          from: rB
        } = Vc.selection.main, uc = nc.prevMatch(Vc, rB, rB);
        if (!uc) return !1;
        let sc = Ic.m.single(uc.from, uc.to),
          Mc = cB.state.facet(lc);
        return cB.dispatch({
          selection: sc,
          effects: [IB(cB, uc), Mc.scrollToMatch(sc.main, cB)],
          userEvent: "select.search"
        }), xB(cB), !0
      })),
      Fc = kB(((cB, Bc) => {
        let {
          query: nc
        } = Bc, Vc = nc.matchAll(cB.state, 1e3);
        return !(!Vc || !Vc.length) && (cB.dispatch({
          selection: Ic.m.create(Vc.map((cB => Ic.m.range(cB.from, cB.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      Jc = kB(((cB, Bc) => {
        let {
          query: nc
        } = Bc, {
          state: rB
        } = cB, {
          from: uc,
          to: sc
        } = rB.selection.main;
        if (rB.readOnly) return !1;
        let Mc = nc.nextMatch(rB, uc, uc);
        if (!Mc) return !1;
        let Pc, qB, Oc = Mc,
          Tc = [],
          fc = [];
        Oc.from == uc && Oc.to == sc && (qB = rB.toText(nc.getReplacement(Oc)), Tc.push({
          from: Oc.from,
          to: Oc.to,
          insert: qB
        }), Oc = nc.nextMatch(rB, Oc.from, Oc.to), fc.push(Vc.i.announce.of(rB.phrase("replaced match on line $", rB.doc.lineAt(uc).number) + ".")));
        let mB = cB.state.changes(Tc);
        return Oc && (Pc = Ic.m.single(Oc.from, Oc.to).map(mB), fc.push(IB(cB, Oc)), fc.push(rB.facet(lc).scrollToMatch(Pc.main, cB))), cB.dispatch({
          changes: mB,
          selection: Pc,
          effects: fc,
          userEvent: "input.replace"
        }), !0
      })),
      jB = kB(((cB, Bc) => {
        let {
          query: nc
        } = Bc;
        if (cB.state.readOnly) return !1;
        let Ic = nc.matchAll(cB.state, 1e9).map((cB => {
          let {
            from: Bc,
            to: Vc
          } = cB;
          return {
            from: Bc,
            to: Vc,
            insert: nc.getReplacement(cB)
          }
        }));
        if (!Ic.length) return !1;
        let rB = cB.state.phrase("replaced $ matches", Ic.length) + ".";
        return cB.dispatch({
          changes: Ic,
          effects: Vc.i.announce.of(rB),
          userEvent: "input.replace.all"
        }), !0
      }));

    function Rc(cB) {
      return cB.state.facet(lc).createPanel(cB)
    }

    function iB(cB, Bc) {
      var nc, Vc, Ic, rB, uc;
      let sc = cB.selection.main,
        Mc = sc.empty || sc.to > sc.from + 100 ? "" : cB.sliceDoc(sc.from, sc.to);
      if (Bc && !Mc) return Bc;
      let Pc = cB.facet(lc);
      return new Yc({
        search: (null !== (nc = null === Bc || void 0 === Bc ? void 0 : Bc.literal) && void 0 !== nc ? nc : Pc.literal) ? Mc : Mc.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Vc = null === Bc || void 0 === Bc ? void 0 : Bc.caseSensitive) && void 0 !== Vc ? Vc : Pc.caseSensitive,
        literal: null !== (Ic = null === Bc || void 0 === Bc ? void 0 : Bc.literal) && void 0 !== Ic ? Ic : Pc.literal,
        regexp: null !== (rB = null === Bc || void 0 === Bc ? void 0 : Bc.regexp) && void 0 !== rB ? rB : Pc.regexp,
        wholeWord: null !== (uc = null === Bc || void 0 === Bc ? void 0 : Bc.wholeWord) && void 0 !== uc ? uc : Pc.wholeWord
      })
    }

    function Kc(cB) {
      let Bc = (0, Vc.B)(cB, Rc);
      return Bc && Bc.dom.querySelector("[main-field]")
    }

    function xB(cB) {
      let Bc = Kc(cB);
      Bc && Bc == cB.root.activeElement && Bc.select()
    }
    const dc = cB => {
        let Bc = cB.state.field(Nc, !1);
        if (Bc && Bc.panel) {
          let nc = Kc(cB);
          if (nc && nc != cB.root.activeElement) {
            let Vc = iB(cB.state, Bc.query.spec);
            Vc.valid && cB.dispatch({
              effects: vB.of(Vc)
            }), nc.focus(), nc.select()
          }
        } else cB.dispatch({
          effects: [Dc.of(!0), Bc ? vB.of(iB(cB.state, Bc.query.spec)) : Ic.F.appendConfig.of(uB)]
        });
        return !0
      },
      Ac = cB => {
        let Bc = cB.state.field(Nc, !1);
        if (!Bc || !Bc.panel) return !1;
        let nc = (0, Vc.B)(cB, Rc);
        return nc && nc.dom.contains(cB.root.activeElement) && cB.focus(), cB.dispatch({
          effects: Dc.of(!1)
        }), !0
      },
      Gc = [{
        key: "Mod-f",
        run: dc,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: Xc,
        shift: Hc,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: Xc,
        shift: Hc,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: Ac,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB, Vc = Bc.selection;
          if (Vc.Iu.length > 1 || Vc.main.empty) return !1;
          let {
            from: rB,
            to: uc
          } = Vc.main, Mc = [], Pc = 0;
          for (let qB = new sc(Bc.doc, Bc.sliceDoc(rB, uc)); !qB.next().done;) {
            if (Mc.length > 1e3) return !1;
            qB.value.from == rB && (Pc = Mc.length), Mc.push(Ic.m.range(qB.value.from, qB.value.to))
          }
          return nc(Bc.update({
            selection: Ic.m.create(Mc, Pc),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: cB => {
          let {
            state: Bc
          } = cB, nc = String(Bc.doc.lineAt(cB.state.selection.main.head).number), {
            close: rB,
            result: uc
          } = (0, Vc.eb)(cB, {
            label: Bc.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: nc
            },
            focus: !0,
            submitLabel: Bc.phrase("go")
          });
          return uc.then((nc => {
            let uc = nc && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(nc.elements.line.value);
            if (!uc) return void cB.dispatch({
              effects: rB
            });
            let sc = Bc.doc.lineAt(Bc.selection.main.head),
              [, Mc, Pc, qB, Oc] = uc,
              Tc = qB ? +qB.slice(1) : 0,
              fc = Pc ? +Pc : sc.number;
            if (Pc && Oc) {
              let cB = fc / 100;
              Mc && (cB = cB * ("-" == Mc ? -1 : 1) + sc.number / Bc.doc.lines), fc = Math.round(Bc.doc.lines * cB)
            } else Pc && Mc && (fc = fc * ("-" == Mc ? -1 : 1) + sc.number);
            let mB = Bc.doc.line(Math.max(1, Math.min(Bc.doc.lines, fc))),
              ec = Ic.m.cursor(mB.from + Math.max(0, Math.min(Tc, mB.length)));
            cB.dispatch({
              effects: [rB, Vc.i.scrollIntoView(ec.from, {
                y: "center"
              })],
              selection: ec
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB, {
            Iu: rB
          } = Bc.selection;
          if (rB.some((cB => cB.from === cB.to))) return (cB => {
            let {
              state: Bc,
              dispatch: nc
            } = cB, {
              selection: Vc
            } = Bc, rB = Ic.m.create(Vc.Iu.map((cB => Bc.wordAt(cB.head) || Ic.m.cursor(cB.head))), Vc.mainIndex);
            return !rB.eq(Vc) && (nc(Bc.update({
              selection: rB
            })), !0)
          })({
            state: Bc,
            dispatch: nc
          });
          let uc = Bc.sliceDoc(rB[0].from, rB[0].to);
          if (Bc.selection.Iu.some((cB => Bc.sliceDoc(cB.from, cB.to) != uc))) return !1;
          let Mc = function(cB, Bc) {
            let {
              main: nc,
              Iu: Vc
            } = cB.selection, Ic = cB.wordAt(nc.head), rB = Ic && Ic.from == nc.from && Ic.to == nc.to;
            for (let uc = !1, Mc = new sc(cB.doc, Bc, Vc[Vc.length - 1].to);;) {
              if (Mc.next(), !Mc.done) {
                if (uc && Vc.some((cB => cB.from == Mc.value.from))) continue;
                if (rB) {
                  let Bc = cB.wordAt(Mc.value.from);
                  if (!Bc || Bc.from != Mc.value.from || Bc.to != Mc.value.to) continue
                }
                return Mc.value
              }
              if (uc) return null;
              Mc = new sc(cB.doc, Bc, 0, Math.max(0, Vc[Vc.length - 1].from - 1)), uc = !0
            }
          }(Bc, uc);
          return !!Mc && (nc(Bc.update({
            selection: Bc.selection.addRange(Ic.m.range(Mc.from, Mc.to), !1),
            effects: Vc.i.scrollIntoView(Mc.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class cn {
      constructor(cB) {
        this.view = cB;
        let Bc = this.query = cB.state.field(Nc).query.spec;

        function nc(cB, Bc, nc) {
          return (0, rB.b)("button", {
            class: "cm-button",
            name: cB,
            onclick: Bc,
            type: "button"
          }, nc)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, rB.b)("input", {
          value: Bc.search,
          placeholder: BB(cB, "Find"),
          "aria-label": BB(cB, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, rB.b)("input", {
          value: Bc.replace,
          placeholder: BB(cB, "Replace"),
          "aria-label": BB(cB, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, rB.b)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: Bc.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, rB.b)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: Bc.regexp,
          onchange: this.commit
        }), this.wordField = (0, rB.b)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: Bc.wholeWord,
          onchange: this.commit
        }), this.dom = (0, rB.b)("div", {
          onkeydown: cB => this.keydown(cB),
          class: "cm-search"
        }, [this.searchField, nc("next", (() => Xc(cB)), [BB(cB, "next")]), nc("prev", (() => Hc(cB)), [BB(cB, "previous")]), nc("select", (() => Fc(cB)), [BB(cB, "all")]), (0, rB.b)("label", null, [this.caseField, BB(cB, "match case")]), (0, rB.b)("label", null, [this.reField, BB(cB, "regexp")]), (0, rB.b)("label", null, [this.wordField, BB(cB, "by word")]), ...cB.state.readOnly ? [] : [(0, rB.b)("br"), this.replaceField, nc("replace", (() => Jc(cB)), [BB(cB, "replace")]), nc("replaceAll", (() => jB(cB)), [BB(cB, "replace all")])], (0, rB.b)("button", {
          name: "close",
          onclick: () => Ac(cB),
          "aria-label": BB(cB, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let cB = new Yc({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        cB.eq(this.query) || (this.query = cB, this.view.dispatch({
          effects: vB.of(cB)
        }))
      }
      keydown(cB) {
        (0, Vc.db)(this.view, cB, "search-panel") ? cB.preventDefault(): 13 == cB.keyCode && cB.target == this.searchField ? (cB.preventDefault(), (cB.shiftKey ? Hc : Xc)(this.view)) : 13 == cB.keyCode && cB.target == this.replaceField && (cB.preventDefault(), Jc(this.view))
      }
      update(cB) {
        for (let Bc of cB.transactions)
          for (let cB of Bc.effects) cB.is(vB) && !cB.value.eq(this.query) && this.setQuery(cB.value)
      }
      setQuery(cB) {
        this.query = cB, this.searchField.value = cB.search, this.replaceField.value = cB.replace, this.caseField.checked = cB.caseSensitive, this.reField.checked = cB.regexp, this.wordField.checked = cB.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(lc).top
      }
    }

    function BB(cB, Bc) {
      return cB.state.phrase(Bc)
    }
    const nB = 30,
      VB = /[\s\.,:;?!]/;

    function IB(cB, Bc) {
      let {
        from: nc,
        to: Ic
      } = Bc, rB = cB.state.doc.lineAt(nc), uc = cB.state.doc.lineAt(Ic).to, sc = Math.max(rB.from, nc - nB), Mc = Math.min(uc, Ic + nB), Pc = cB.state.sliceDoc(sc, Mc);
      if (sc != rB.from)
        for (let Vc = 0; Vc < nB; Vc++)
          if (!VB.test(Pc[Vc + 1]) && VB.test(Pc[Vc])) {
            Pc = Pc.slice(Vc);
            break
          } if (Mc != uc)
        for (let Vc = Pc.length - 1; Vc > Pc.length - nB; Vc--)
          if (!VB.test(Pc[Vc - 1]) && VB.test(Pc[Vc])) {
            Pc = Pc.slice(0, Vc);
            break
          } return Vc.i.announce.of(`${cB.state.phrase("current match")}. ${Pc} ${cB.state.phrase("on line")} ${rB.number}.`)
    }
    const rn = Vc.i.baseTheme({
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
      uB = [Nc, Ic.v.low(wc), rn]
  },
  39285: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Cc,
      g: () => PB,
      i: () => gr,
      k: () => uu,
      o: () => dB,
      r: () => Zc,
      t: () => Zr,
      v: () => dI,
      y: () => ur,
      B: () => dr,
      E: () => iu,
      G: () => Ou,
      L: () => yu,
      K: () => Qu,
      P: () => mu,
      R: () => Rr,
      S: () => NI,
      W: () => gs,
      Y: () => jn,
      Z: () => au,
      ab: () => gu,
      db: () => WI,
      eb: () => nu,
      fb: () => Bu,
      ib: () => ku
    });
    for (var Vc = nc(39279), Ic = nc(39292), rB = {
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
      }, uc = {
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
      }, sc = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Mc = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Pc = 0; Pc < 10; Pc++) rB[48 + Pc] = rB[96 + Pc] = String(Pc);
    for (Pc = 1; Pc <= 24; Pc++) rB[Pc + 111] = "F" + Pc;
    for (Pc = 65; Pc <= 90; Pc++) rB[Pc] = String.fromCharCode(Pc + 32), uc[Pc] = String.fromCharCode(Pc);
    for (var qB in rB) uc.hasOwnProperty(qB) || (uc[qB] = rB[qB]);
    var Oc = nc(39295);
    let Tc = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      fc = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const mB = /Edge\/(\d+)/.exec(Tc.userAgent),
      ec = /MSIE \d/.test(Tc.userAgent),
      tB = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Tc.userAgent),
      Sc = !!(ec || tB || mB),
      yB = !Sc && /gecko\/(\d+)/i.test(Tc.userAgent),
      zB = !Sc && /Chrome\/(\d+)/.exec(Tc.userAgent),
      pc = "webkitFontSmoothing" in fc.documentElement.style,
      hc = !Sc && /Apple Computer/.test(Tc.vendor),
      aB = hc && (/Mobile\/\w+/.test(Tc.userAgent) || Tc.maxTouchPoints > 2);
    var lc = {
      mac: aB || /Mac/.test(Tc.platform),
      windows: /Win/.test(Tc.platform),
      linux: /Linux|X11/.test(Tc.platform),
      ie: Sc,
      ie_version: ec ? fc.documentMode || 6 : tB ? +tB[1] : mB ? +mB[1] : 0,
      gecko: yB,
      gecko_version: yB ? +(/Firefox\/(\d+)/.exec(Tc.userAgent) || [0, 0])[1] : 0,
      chrome: !!zB,
      chrome_version: zB ? +zB[1] : 0,
      ios: aB,
      android: /Android\b/.test(Tc.userAgent),
      webkit: pc,
      webkit_version: pc ? +(/\bAppleWebKit\/(\d+)/.exec(Tc.userAgent) || [0, 0])[1] : 0,
      safari: hc,
      safari_version: hc ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Tc.userAgent) || [0, 0])[1] : 0,
      tabSize: null != fc.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function Yc(cB, Bc) {
      for (let nc in cB) "class" == nc && Bc.class ? Bc.class += " " + cB.class : "style" == nc && Bc.style ? Bc.style += ";" + cB.style : Bc[nc] = cB[nc];
      return Bc
    }
    const Lc = Object.create(null);

    function gB(cB, Bc, nc) {
      if (cB == Bc) return !0;
      cB || (cB = Lc), Bc || (Bc = Lc);
      let Vc = Object.keys(cB),
        Ic = Object.keys(Bc);
      if (Vc.length - (nc && Vc.indexOf(nc) > -1 ? 1 : 0) != Ic.length - (nc && Ic.indexOf(nc) > -1 ? 1 : 0)) return !1;
      for (let rB of Vc)
        if (rB != nc && (-1 == Ic.indexOf(rB) || cB[rB] !== Bc[rB])) return !1;
      return !0
    }

    function Uc(cB, Bc, nc) {
      let Vc = !1;
      if (Bc)
        for (let Ic in Bc) nc && Ic in nc || (Vc = !0, "style" == Ic ? cB.style.cssText = "" : cB.removeAttribute(Ic));
      if (nc)
        for (let Ic in nc) Bc && Bc[Ic] == nc[Ic] || (Vc = !0, "style" == Ic ? cB.style.cssText = nc[Ic] : cB.setAttribute(Ic, nc[Ic]));
      return Vc
    }

    function bB(cB) {
      let Bc = Object.create(null);
      for (let nc = 0; nc < cB.attributes.length; nc++) {
        let Vc = cB.attributes[nc];
        Bc[Vc.name] = Vc.value
      }
      return Bc
    }
    class Zc {
      eq(cB) {
        return !1
      }
      updateDOM(cB, Bc, nc) {
        return !1
      }
      compare(cB) {
        return this == cB || this.constructor == cB.constructor && this.eq(cB)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(cB) {
        return !0
      }
      coordsAt(cB, Bc, nc) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(cB) {}
    }
    var Qc = function(cB) {
      return cB[cB.Text = 0] = "Text", cB[cB.WidgetBefore = 1] = "WidgetBefore", cB[cB.WidgetAfter = 2] = "WidgetAfter", cB[cB.WidgetRange = 3] = "WidgetRange", cB
    }(Qc || (Qc = {}));
    class Cc extends Vc.C {
      constructor(cB, Bc, nc, Vc) {
        super(), this.startSide = cB, this.endSide = Bc, this.widget = nc, this.spec = Vc
      }
      get heightRelevant() {
        return !1
      }
      static mark(cB) {
        return new vB(cB)
      }
      static widget(cB) {
        let Bc = Math.max(-1e4, Math.min(1e4, cB.side || 0)),
          nc = !!cB.block;
        return Bc += nc && !cB.inlineOrder ? Bc > 0 ? 3e8 : -4e8 : Bc > 0 ? 1e8 : -1e8, new Nc(cB, Bc, Bc, nc, cB.widget || null, !1)
      }
      static replace(cB) {
        let Bc, nc, Vc = !!cB.block;
        if (cB.isBlockGap) Bc = -5e8, nc = 4e8;
        else {
          let {
            start: Ic,
            end: rB
          } = Ec(cB, Vc);
          Bc = (Ic ? Vc ? -3e8 : -1 : 5e8) - 1, nc = 1 + (rB ? Vc ? 2e8 : 1 : -6e8)
        }
        return new Nc(cB, Bc, nc, Vc, cB.widget || null, !0)
      }
      static line(cB) {
        return new Dc(cB)
      }
      static set(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Vc.y.of(cB, Bc)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Cc.none = Vc.y.empty;
    class vB extends Cc {
      constructor(cB) {
        let {
          start: Bc,
          end: nc
        } = Ec(cB);
        super(Bc ? -1 : 5e8, nc ? 1 : -6e8, null, cB), this.tagName = cB.tagName || "span", this.attrs = cB.class && cB.attributes ? Yc(cB.attributes, {
          class: cB.class
        }) : cB.class ? {
          class: cB.class
        } : cB.attributes || Lc
      }
      eq(cB) {
        return this == cB || cB instanceof vB && this.tagName == cB.tagName && gB(this.attrs, cB.attrs)
      }
      range(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB;
        if (cB >= Bc) throw new RangeError("Mark decorations may not be empty");
        return super.range(cB, Bc)
      }
    }
    vB.prototype.point = !1;
    class Dc extends Cc {
      constructor(cB) {
        super(-2e8, -2e8, null, cB)
      }
      eq(cB) {
        return cB instanceof Dc && this.spec.class == cB.spec.class && gB(this.spec.attributes, cB.spec.attributes)
      }
      range(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB;
        if (Bc != cB) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(cB, Bc)
      }
    }
    Dc.prototype.mapMode = Vc.s.TrackBefore, Dc.prototype.point = !0;
    class Nc extends Cc {
      constructor(cB, Bc, nc, Ic, rB, uc) {
        super(Bc, nc, rB, cB), this.block = Ic, this.isReplace = uc, this.mapMode = Ic ? Bc <= 0 ? Vc.s.TrackBefore : Vc.s.TrackAfter : Vc.s.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Qc.WidgetRange : this.startSide <= 0 ? Qc.WidgetBefore : Qc.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(cB) {
        return cB instanceof Nc && (Bc = this.widget, nc = cB.widget, Bc == nc || !!(Bc && nc && Bc.compare(nc))) && this.block == cB.block && this.startSide == cB.startSide && this.endSide == cB.endSide;
        var Bc, nc
      }
      range(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cB;
        if (this.isReplace && (cB > Bc || cB == Bc && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && Bc != cB) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(cB, Bc)
      }
    }

    function Ec(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: nc,
          inclusiveEnd: Vc
        } = cB;
      return null == nc && (nc = cB.inclusive), null == Vc && (Vc = cB.inclusive), {
        start: null !== nc && void 0 !== nc ? nc : Bc,
        end: null !== Vc && void 0 !== Vc ? Vc : Bc
      }
    }

    function oc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ic = nc.length - 1;
      Ic >= 0 && nc[Ic] + Vc >= cB ? nc[Ic] = Math.max(nc[Ic], Bc) : nc.push(cB, Bc)
    }
    Nc.prototype.point = !0;
    class Wc extends Vc.C {
      constructor(cB, Bc) {
        super(), this.tagName = cB, this.attributes = Bc
      }
      eq(cB) {
        return cB == this || cB instanceof Wc && this.tagName == cB.tagName && gB(this.attributes, cB.attributes)
      }
      static create(cB) {
        return new Wc(cB.tagName, cB.attributes || Lc)
      }
      static set(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Vc.y.of(cB, Bc)
      }
    }

    function wc(cB) {
      let Bc;
      return Bc = 11 == cB.nodeType ? cB.getSelection ? cB : cB.ownerDocument : cB, Bc.getSelection()
    }

    function kB(cB, Bc) {
      return !!Bc && (cB == Bc || cB.contains(1 != Bc.nodeType ? Bc.parentNode : Bc))
    }

    function Xc(cB, Bc) {
      if (!Bc.anchorNode) return !1;
      try {
        return kB(cB, Bc.anchorNode)
      } catch (nc) {
        return !1
      }
    }

    function Hc(cB) {
      return 3 == cB.nodeType ? VB(cB, 0, cB.nodeValue.length).getClientRects() : 1 == cB.nodeType ? cB.getClientRects() : []
    }

    function Fc(cB, Bc, nc, Vc) {
      return !!nc && (Rc(cB, Bc, nc, Vc, -1) || Rc(cB, Bc, nc, Vc, 1))
    }

    function Jc(cB) {
      for (var Bc = 0;; Bc++)
        if (!(cB = cB.previousSibling)) return Bc
    }

    function jB(cB) {
      return 1 == cB.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(cB.nodeName)
    }

    function Rc(cB, Bc, nc, Vc, Ic) {
      for (;;) {
        if (cB == nc && Bc == Vc) return !0;
        if (Bc == (Ic < 0 ? 0 : iB(cB))) {
          if ("DIV" == cB.nodeName) return !1;
          let nc = cB.parentNode;
          if (!nc || 1 != nc.nodeType) return !1;
          Bc = Jc(cB) + (Ic < 0 ? 0 : 1), cB = nc
        } else {
          if (1 != cB.nodeType) return !1;
          if (1 == (cB = cB.childNodes[Bc + (Ic < 0 ? -1 : 0)]).nodeType && "false" == cB.contentEditable) return !1;
          Bc = Ic < 0 ? iB(cB) : 0
        }
      }
    }

    function iB(cB) {
      return 3 == cB.nodeType ? cB.nodeValue.length : cB.childNodes.length
    }

    function Kc(cB, Bc) {
      let nc = Bc ? cB.left : cB.right;
      return {
        left: nc,
        right: nc,
        top: cB.top,
        bottom: cB.bottom
      }
    }

    function xB(cB) {
      let Bc = cB.visualViewport;
      return Bc ? {
        left: 0,
        right: Bc.width,
        top: 0,
        bottom: Bc.height
      } : {
        left: 0,
        right: cB.innerWidth,
        top: 0,
        bottom: cB.innerHeight
      }
    }

    function dc(cB, Bc) {
      let nc = Bc.width / cB.offsetWidth,
        Vc = Bc.height / cB.offsetHeight;
      return (nc > .995 && nc < 1.005 || !isFinite(nc) || Math.abs(Bc.width - cB.offsetWidth) < 1) && (nc = 1), (Vc > .995 && Vc < 1.005 || !isFinite(Vc) || Math.abs(Bc.height - cB.offsetHeight) < 1) && (Vc = 1), {
        scaleX: nc,
        scaleY: Vc
      }
    }

    function Ac(cB) {
      let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        nc = cB.ownerDocument,
        Vc = null,
        Ic = null;
      for (let rB = cB.parentNode; rB && (rB != nc.body && (Bc && !Vc || !Ic));)
        if (1 == rB.nodeType) !Ic && rB.scrollHeight > rB.clientHeight && (Ic = rB), Bc && !Vc && rB.scrollWidth > rB.clientWidth && (Vc = rB), rB = rB.assignedSlot || rB.parentNode;
        else {
          if (11 != rB.nodeType) break;
          rB = rB.host
        } return {
        x: Vc,
        y: Ic
      }
    }
    Wc.prototype.startSide = Wc.prototype.endSide = -1;
    class Gc {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(cB) {
        return this.anchorNode == cB.anchorNode && this.anchorOffset == cB.anchorOffset && this.focusNode == cB.focusNode && this.focusOffset == cB.focusOffset
      }
      setRange(cB) {
        let {
          anchorNode: Bc,
          focusNode: nc
        } = cB;
        this.set(Bc, Math.min(cB.anchorOffset, Bc ? iB(Bc) : 0), nc, Math.min(cB.focusOffset, nc ? iB(nc) : 0))
      }
      set(cB, Bc, nc, Vc) {
        this.anchorNode = cB, this.anchorOffset = Bc, this.focusNode = nc, this.focusOffset = Vc
      }
    }
    let cn, BB = null;

    function nB(cB) {
      if (cB.setActive) return cB.setActive();
      if (BB) return cB.focus(BB);
      let Bc = [];
      for (let nc = cB; nc && (Bc.push(nc, nc.scrollTop, nc.scrollLeft), nc != nc.ownerDocument); nc = nc.parentNode);
      if (cB.focus(null == BB ? {
          get preventScroll() {
            return BB = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !BB) {
        BB = !1;
        for (let cB = 0; cB < Bc.length;) {
          let nc = Bc[cB++],
            Vc = Bc[cB++],
            Ic = Bc[cB++];
          nc.scrollTop != Vc && (nc.scrollTop = Vc), nc.scrollLeft != Ic && (nc.scrollLeft = Ic)
        }
      }
    }

    function VB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bc,
        Vc = cn || (cn = document.createRange());
      return Vc.setEnd(cB, nc), Vc.setStart(cB, Bc), Vc
    }

    function IB(cB, Bc, nc, Vc) {
      let Ic = {
        key: Bc,
        code: Bc,
        keyCode: nc,
        which: nc,
        cancelable: !0
      };
      Vc && ({
        altKey: Ic.altKey,
        ctrlKey: Ic.ctrlKey,
        shiftKey: Ic.shiftKey,
        metaKey: Ic.metaKey
      } = Vc);
      let rB = new KeyboardEvent("keydown", Ic);
      rB.synthetic = !0, cB.dispatchEvent(rB);
      let uc = new KeyboardEvent("keyup", Ic);
      return uc.synthetic = !0, cB.dispatchEvent(uc), rB.defaultPrevented || uc.defaultPrevented
    }

    function rn(cB) {
      return cB instanceof Window ? cB.pageYOffset > Math.max(0, cB.document.documentElement.scrollHeight - cB.innerHeight - 4) : cB.scrollTop > Math.max(1, cB.scrollHeight - cB.clientHeight - 4)
    }

    function uB(cB, Bc) {
      for (let nc = cB, Vc = Bc;;) {
        if (3 == nc.nodeType && Vc > 0) return {
          node: nc,
          offset: Vc
        };
        if (1 == nc.nodeType && Vc > 0) {
          if ("false" == nc.contentEditable) return null;
          nc = nc.childNodes[Vc - 1], Vc = iB(nc)
        } else {
          if (!nc.parentNode || jB(nc)) return null;
          Vc = Jc(nc), nc = nc.parentNode
        }
      }
    }

    function sB(cB, Bc) {
      for (let nc = cB, Vc = Bc;;) {
        if (3 == nc.nodeType && Vc < nc.nodeValue.length) return {
          node: nc,
          offset: Vc
        };
        if (1 == nc.nodeType && Vc < nc.childNodes.length) {
          if ("false" == nc.contentEditable) return null;
          nc = nc.childNodes[Vc], Vc = 0
        } else {
          if (!nc.parentNode || jB(nc)) return null;
          Vc = Jc(nc) + 1, nc = nc.parentNode
        }
      }
    }
    lc.safari && lc.safari_version >= 26 && (BB = !1);
    class MB {
      constructor(cB, Bc) {
        let nc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = cB, this.offset = Bc, this.precise = nc
      }
      static before(cB, Bc) {
        return new MB(cB.parentNode, Jc(cB), Bc)
      }
      static after(cB, Bc) {
        return new MB(cB.parentNode, Jc(cB) + 1, Bc)
      }
    }
    var PB = function(cB) {
      return cB[cB.LTR = 0] = "LTR", cB[cB.RTL = 1] = "RTL", cB
    }(PB || (PB = {}));
    const qn = PB.LTR,
      OB = PB.RTL;

    function TB(cB) {
      let Bc = [];
      for (let nc = 0; nc < cB.length; nc++) Bc.push(1 << +cB[nc]);
      return Bc
    }
    const fB = TB("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      mn = TB("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      eB = Object.create(null),
      tn = [];
    for (let Cu of ["()", "[]", "{}"]) {
      let cB = Cu.charCodeAt(0),
        Bc = Cu.charCodeAt(1);
      eB[cB] = Bc, eB[Bc] = -cB
    }

    function SB(cB) {
      return cB <= 247 ? fB[cB] : 1424 <= cB && cB <= 1524 ? 2 : 1536 <= cB && cB <= 1785 ? mn[cB - 1536] : 1774 <= cB && cB <= 2220 ? 4 : 8192 <= cB && cB <= 8204 ? 256 : 64336 <= cB && cB <= 65023 ? 4 : 1
    }
    const yn = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class zn {
      get dir() {
        return this.level % 2 ? OB : qn
      }
      constructor(cB, Bc, nc) {
        this.from = cB, this.to = Bc, this.level = nc
      }
      side(cB, Bc) {
        return this.dir == Bc == cB ? this.to : this.from
      }
      forward(cB, Bc) {
        return cB == (this.dir == Bc)
      }
      static find(cB, Bc, nc, Vc) {
        let Ic = -1;
        for (let rB = 0; rB < cB.length; rB++) {
          let uc = cB[rB];
          if (uc.from <= Bc && uc.to >= Bc) {
            if (uc.level == nc) return rB;
            (Ic < 0 || (0 != Vc ? Vc < 0 ? uc.from < Bc : uc.to > Bc : cB[Ic].level > uc.level)) && (Ic = rB)
          }
        }
        if (Ic < 0) throw new RangeError("Index out of range");
        return Ic
      }
    }

    function pB(cB, Bc) {
      if (cB.length != Bc.length) return !1;
      for (let nc = 0; nc < cB.length; nc++) {
        let Vc = cB[nc],
          Ic = Bc[nc];
        if (Vc.from != Ic.from || Vc.to != Ic.to || Vc.direction != Ic.direction || !pB(Vc.inner, Ic.inner)) return !1
      }
      return !0
    }
    const hB = [];

    function an(cB, Bc, nc, Vc, Ic, rB, uc) {
      let sc = Vc % 2 ? 2 : 1;
      if (Vc % 2 == Ic % 2)
        for (let Mc = Bc, Pc = 0; Mc < nc;) {
          let Bc = !0,
            qB = !1;
          if (Pc == rB.length || Mc < rB[Pc].from) {
            let cB = hB[Mc];
            cB != sc && (Bc = !1, qB = 16 == cB)
          }
          let Oc = Bc || 1 != sc ? null : [],
            Tc = Bc ? Vc : Vc + 1,
            fc = Mc;
          cB: for (;;)
            if (Pc < rB.length && fc == rB[Pc].from) {
              if (qB) break cB;
              let mB = rB[Pc];
              if (!Bc)
                for (let cB = mB.to, Bc = Pc + 1;;) {
                  if (cB == nc) break cB;
                  if (!(Bc < rB.length && rB[Bc].from == cB)) {
                    if (hB[cB] == sc) break cB;
                    break
                  }
                  cB = rB[Bc++].to
                }
              if (Pc++, Oc) Oc.push(mB);
              else {
                mB.from > Mc && uc.push(new zn(Mc, mB.from, Tc)), lB(cB, mB.direction == qn != !(Tc % 2) ? Vc + 1 : Vc, Ic, mB.inner, mB.from, mB.to, uc), Mc = mB.to
              }
              fc = mB.to
            } else {
              if (fc == nc || (Bc ? hB[fc] != sc : hB[fc] == sc)) break;
              fc++
            } Oc ? an(cB, Mc, fc, Vc + 1, Ic, Oc, uc) : Mc < fc && uc.push(new zn(Mc, fc, Tc)), Mc = fc
        } else
          for (let Mc = nc, Pc = rB.length; Mc > Bc;) {
            let nc = !0,
              qB = !1;
            if (!Pc || Mc > rB[Pc - 1].to) {
              let cB = hB[Mc - 1];
              cB != sc && (nc = !1, qB = 16 == cB)
            }
            let Oc = nc || 1 != sc ? null : [],
              Tc = nc ? Vc : Vc + 1,
              fc = Mc;
            cB: for (;;)
              if (Pc && fc == rB[Pc - 1].to) {
                if (qB) break cB;
                let mB = rB[--Pc];
                if (!nc)
                  for (let cB = mB.from, nc = Pc;;) {
                    if (cB == Bc) break cB;
                    if (!nc || rB[nc - 1].to != cB) {
                      if (hB[cB - 1] == sc) break cB;
                      break
                    }
                    cB = rB[--nc].from
                  }
                if (Oc) Oc.push(mB);
                else {
                  mB.to < Mc && uc.push(new zn(mB.to, Mc, Tc)), lB(cB, mB.direction == qn != !(Tc % 2) ? Vc + 1 : Vc, Ic, mB.inner, mB.from, mB.to, uc), Mc = mB.from
                }
                fc = mB.from
              } else {
                if (fc == Bc || (nc ? hB[fc - 1] != sc : hB[fc - 1] == sc)) break;
                fc--
              } Oc ? an(cB, fc, Mc, Vc + 1, Ic, Oc, uc) : fc < Mc && uc.push(new zn(fc, Mc, Tc)), Mc = fc
          }
    }

    function lB(cB, Bc, nc, Vc, Ic, rB, uc) {
      let sc = Bc % 2 ? 2 : 1;
      ! function(cB, Bc, nc, Vc, Ic) {
        for (let rB = 0; rB <= Vc.length; rB++) {
          let uc = rB ? Vc[rB - 1].to : Bc,
            sc = rB < Vc.length ? Vc[rB].from : nc,
            Mc = rB ? 256 : Ic;
          for (let Bc = uc, nc = Mc, Vc = Mc; Bc < sc; Bc++) {
            let Ic = SB(cB.charCodeAt(Bc));
            512 == Ic ? Ic = nc : 8 == Ic && 4 == Vc && (Ic = 16), hB[Bc] = 4 == Ic ? 2 : Ic, 7 & Ic && (Vc = Ic), nc = Ic
          }
          for (let cB = uc, Bc = Mc, Vc = Mc; cB < sc; cB++) {
            let Ic = hB[cB];
            if (128 == Ic) cB < sc - 1 && Bc == hB[cB + 1] && 24 & Bc ? Ic = hB[cB] = Bc : hB[cB] = 256;
            else if (64 == Ic) {
              let Ic = cB + 1;
              for (; Ic < sc && 64 == hB[Ic];) Ic++;
              let rB = cB && 8 == Bc || Ic < nc && 8 == hB[Ic] ? 1 == Vc ? 1 : 8 : 256;
              for (let Bc = cB; Bc < Ic; Bc++) hB[Bc] = rB;
              cB = Ic - 1
            } else 8 == Ic && 1 == Vc && (hB[cB] = 1);
            Bc = Ic, 7 & Ic && (Vc = Ic)
          }
        }
      }(cB, Ic, rB, Vc, sc),
      function(cB, Bc, nc, Vc, Ic) {
        let rB = 1 == Ic ? 2 : 1;
        for (let uc = 0, sc = 0, Mc = 0; uc <= Vc.length; uc++) {
          let Pc = uc ? Vc[uc - 1].to : Bc,
            qB = uc < Vc.length ? Vc[uc].from : nc;
          for (let Bc, nc, Vc, uc = Pc; uc < qB; uc++)
            if (nc = eB[Bc = cB.charCodeAt(uc)])
              if (nc < 0) {
                for (let cB = sc - 3; cB >= 0; cB -= 3)
                  if (tn[cB + 1] == -nc) {
                    let Bc = tn[cB + 2],
                      nc = 2 & Bc ? Ic : 4 & Bc ? 1 & Bc ? rB : Ic : 0;
                    nc && (hB[uc] = hB[tn[cB]] = nc), sc = cB;
                    break
                  }
              } else {
                if (189 == tn.length) break;
                tn[sc++] = uc, tn[sc++] = Bc, tn[sc++] = Mc
              }
          else if (2 == (Vc = hB[uc]) || 1 == Vc) {
            let cB = Vc == Ic;
            Mc = cB ? 0 : 1;
            for (let Bc = sc - 3; Bc >= 0; Bc -= 3) {
              let nc = tn[Bc + 2];
              if (2 & nc) break;
              if (cB) tn[Bc + 2] |= 2;
              else {
                if (4 & nc) break;
                tn[Bc + 2] |= 4
              }
            }
          }
        }
      }(cB, Ic, rB, Vc, sc),
      function(cB, Bc, nc, Vc) {
        for (let Ic = 0, rB = Vc; Ic <= nc.length; Ic++) {
          let uc = Ic ? nc[Ic - 1].to : cB,
            sc = Ic < nc.length ? nc[Ic].from : Bc;
          for (let Mc = uc; Mc < sc;) {
            let uc = hB[Mc];
            if (256 == uc) {
              let uc = Mc + 1;
              for (;;)
                if (uc == sc) {
                  if (Ic == nc.length) break;
                  uc = nc[Ic++].to, sc = Ic < nc.length ? nc[Ic].from : Bc
                } else {
                  if (256 != hB[uc]) break;
                  uc++
                } let Pc = 1 == rB,
                qB = Pc == (1 == (uc < Bc ? hB[uc] : Vc)) ? Pc ? 1 : 2 : Vc;
              for (let Bc = uc, Vc = Ic, rB = Vc ? nc[Vc - 1].to : cB; Bc > Mc;) Bc == rB && (Bc = nc[--Vc].from, rB = Vc ? nc[Vc - 1].to : cB), hB[--Bc] = qB;
              Mc = uc
            } else rB = uc, Mc++
          }
        }
      }(Ic, rB, Vc, sc), an(cB, Ic, rB, Bc, nc, Vc, uc)
    }

    function YB(cB, Bc, nc) {
      if (!cB) return [new zn(0, 0, Bc == OB ? 1 : 0)];
      if (Bc == qn && !nc.length && !yn.test(cB)) return LB(cB.length);
      if (nc.length)
        for (; cB.length > hB.length;) hB[hB.length] = 256;
      let Vc = [],
        Ic = Bc == qn ? 0 : 1;
      return lB(cB, Ic, Ic, nc, 0, cB.length, Vc), Vc
    }

    function LB(cB) {
      return [new zn(0, cB, 0)]
    }
    let gn = "";

    function UB(cB, Bc, nc, Ic, rB) {
      var uc;
      let sc = Ic.head - cB.from,
        Mc = zn.find(Bc, sc, null !== (uc = Ic.bidiLevel) && void 0 !== uc ? uc : -1, Ic.assoc),
        Pc = Bc[Mc],
        qB = Pc.side(rB, nc);
      if (sc == qB) {
        let cB = Mc += rB ? 1 : -1;
        if (cB < 0 || cB >= Bc.length) return null;
        Pc = Bc[Mc = cB], sc = Pc.side(!rB, nc), qB = Pc.side(rB, nc)
      }
      let Oc = (0, Vc.eb)(cB.text, sc, Pc.forward(rB, nc));
      (Oc < Pc.from || Oc > Pc.to) && (Oc = qB), gn = cB.text.slice(Math.min(sc, Oc), Math.max(sc, Oc));
      let Tc = Mc == (rB ? Bc.length - 1 : 0) ? null : Bc[Mc + (rB ? 1 : -1)];
      return Tc && Oc == qB && Tc.level + (rB ? 0 : 1) < Pc.level ? Vc.m.cursor(Tc.side(!rB, nc) + cB.from, Tc.forward(rB, nc) ? 1 : -1, Tc.level) : Vc.m.cursor(Oc + cB.from, Pc.forward(rB, nc) ? -1 : 1, Pc.level)
    }

    function bn(cB, Bc, nc) {
      for (let Vc = Bc; Vc < nc; Vc++) {
        let Bc = SB(cB.charCodeAt(Vc));
        if (1 == Bc) return qn;
        if (2 == Bc || 4 == Bc) return OB
      }
      return qn
    }
    const ZB = Vc.q.define(),
      QB = Vc.q.define(),
      CB = Vc.q.define(),
      vn = Vc.q.define(),
      DB = Vc.q.define(),
      NB = Vc.q.define(),
      EB = Vc.q.define(),
      oB = Vc.q.define(),
      WB = Vc.q.define(),
      wB = Vc.q.define({
        combine: cB => cB.some((cB => cB))
      }),
      kn = Vc.q.define({
        combine: cB => cB.some((cB => cB))
      }),
      XB = Vc.q.define();
    class HB {
      constructor(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = cB, this.y = Bc, this.x = nc, this.yMargin = Vc, this.xMargin = Ic, this.isSnapshot = rB
      }
      map(cB) {
        return cB.empty ? this : new HB(this.range.map(cB), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(cB) {
        return this.range.to <= cB.doc.length ? this : new HB(Vc.m.cursor(cB.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const FB = Vc.F.define({
        map: (cB, Bc) => cB.map(Bc)
      }),
      JB = Vc.F.define();

    function jn(cB, Bc, nc) {
      let Vc = cB.facet(vn);
      Vc.length ? Vc[0](Bc) : window.onerror && window.onerror(String(Bc), nc, void 0, void 0, Bc) || (nc ? console.error(nc + ":", Bc) : console.error(Bc))
    }
    const RB = Vc.q.define({
      combine: cB => !cB.length || cB[0]
    });
    let KB = 0;
    const xn = Vc.q.define({
      combine: cB => cB.filter(((Bc, nc) => {
        for (let Vc = 0; Vc < nc; Vc++)
          if (cB[Vc].plugin == Bc.plugin) return !1;
        return !0
      }))
    });
    class dB {
      constructor(cB, Bc, nc, Vc, Ic) {
        this.id = cB, this.create = Bc, this.domEventHandlers = nc, this.domEventObservers = Vc, this.baseExtensions = Ic(this), this.extension = this.baseExtensions.concat(xn.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(cB) {
        return this.baseExtensions.concat(xn.of({
          plugin: this,
          arg: cB
        }))
      }
      static define(cB, Bc) {
        const {
          eventHandlers: nc,
          eventObservers: Vc,
          provide: Ic,
          iu: rB
        } = Bc || {};
        return new dB(KB++, cB, nc, Vc, (cB => {
          let Bc = [];
          return rB && Bc.push(Bn.of((Bc => {
            let nc = Bc.plugin(cB);
            return nc ? rB(nc) : Cc.none
          }))), Ic && Bc.push(Ic(cB)), Bc
        }))
      }
      static fromClass(cB, Bc) {
        return dB.define(((Bc, nc) => new cB(Bc, nc)), Bc)
      }
    }
    class AB {
      constructor(cB) {
        this.spec = cB, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(cB) {
        if (this.value) {
          if (this.mustUpdate) {
            let cB = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(cB)
            } catch (Bc) {
              if (jn(cB.state, Bc, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (nc) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(cB, this.spec.arg)
        } catch (Bc) {
          jn(cB.state, Bc, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(cB) {
        var Bc;
        if (null === (Bc = this.value) || void 0 === Bc ? void 0 : Bc.destroy) try {
          this.value.destroy()
        } catch (nc) {
          jn(cB.state, nc, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const GB = Vc.q.define(),
      cV = Vc.q.define(),
      Bn = Vc.q.define(),
      nn = Vc.q.define(),
      Vn = Vc.q.define(),
      In = Vc.q.define(),
      rV = Vc.q.define();

    function un(cB, Bc) {
      let nc = cB.state.facet(rV);
      if (!nc.length) return nc;
      let Ic = nc.map((Bc => Bc instanceof Function ? Bc(cB) : Bc)),
        rB = [];
      return Vc.y.spans(Ic, Bc.from, Bc.to, {
        point() {},
        span(cB, nc, Vc, Ic) {
          let uc = cB - Bc.from,
            sc = nc - Bc.from,
            Mc = rB;
          for (let rB = Vc.length - 1; rB >= 0; rB--, Ic--) {
            let cB, nc = Vc[rB].spec.bidiIsolate;
            if (null == nc && (nc = bn(Bc.text, uc, sc)), Ic > 0 && Mc.length && (cB = Mc[Mc.length - 1]).to == uc && cB.direction == nc) cB.to = sc, Mc = cB.inner;
            else {
              let cB = {
                from: uc,
                to: sc,
                direction: nc,
                inner: []
              };
              Mc.push(cB), Mc = cB.inner
            }
          }
        }
      }), rB
    }
    const sn = Vc.q.define();

    function Mn(cB) {
      let Bc = 0,
        nc = 0,
        Vc = 0,
        Ic = 0;
      for (let rB of cB.state.facet(sn)) {
        let uc = rB(cB);
        uc && (null != uc.left && (Bc = Math.max(Bc, uc.left)), null != uc.right && (nc = Math.max(nc, uc.right)), null != uc.top && (Vc = Math.max(Vc, uc.top)), null != uc.bottom && (Ic = Math.max(Ic, uc.bottom)))
      }
      return {
        left: Bc,
        right: nc,
        top: Vc,
        bottom: Ic
      }
    }
    const Pn = Vc.q.define();
    class qV {
      constructor(cB, Bc, nc, Vc) {
        this.fromA = cB, this.toA = Bc, this.fromB = nc, this.toB = Vc
      }
      join(cB) {
        return new qV(Math.min(this.fromA, cB.fromA), Math.max(this.toA, cB.toA), Math.min(this.fromB, cB.fromB), Math.max(this.toB, cB.toB))
      }
      addToSet(cB) {
        let Bc = cB.length,
          nc = this;
        for (; Bc > 0; Bc--) {
          let Vc = cB[Bc - 1];
          if (!(Vc.fromA > nc.toA)) {
            if (Vc.toA < nc.fromA) break;
            nc = nc.join(Vc), cB.splice(Bc - 1, 1)
          }
        }
        return cB.splice(Bc, 0, nc), cB
      }
      static extendWithRanges(cB, Bc) {
        if (0 == Bc.length) return cB;
        let nc = [];
        for (let Vc = 0, Ic = 0, rB = 0;;) {
          let uc = Vc < cB.length ? cB[Vc].fromB : 1e9,
            sc = Ic < Bc.length ? Bc[Ic] : 1e9,
            Mc = Math.min(uc, sc);
          if (1e9 == Mc) break;
          let Pc = Mc + rB,
            qB = Mc,
            Oc = Pc;
          for (;;)
            if (Ic < Bc.length && Bc[Ic] <= qB) {
              let nc = Bc[Ic + 1];
              Ic += 2, qB = Math.max(qB, nc);
              for (let Bc = Vc; Bc < cB.length && cB[Bc].fromB <= qB; Bc++) rB = cB[Bc].toA - cB[Bc].toB;
              Oc = Math.max(Oc, nc + rB)
            } else {
              if (!(Vc < cB.length && cB[Vc].fromB <= qB)) break;
              {
                let Bc = cB[Vc++];
                qB = Math.max(qB, Bc.toB), Oc = Math.max(Oc, Bc.toA), rB = Bc.toA - Bc.toB
              }
            } nc.push(new qV(Pc, Oc, Mc, qB))
        }
        return nc
      }
    }
    class On {
      constructor(cB, Bc, nc) {
        this.view = cB, this.state = Bc, this.transactions = nc, this.flags = 0, this.startState = cB.state, this.changes = Vc.ChangeSet.empty(this.startState.doc.length);
        for (let Vc of nc) this.changes = this.changes.compose(Vc.changes);
        let Ic = [];
        this.changes.iterChangedRanges(((cB, Bc, nc, Vc) => Ic.push(new qV(cB, Bc, nc, Vc)))), this.changedRanges = Ic
      }
      static create(cB, Bc, nc) {
        return new On(cB, Bc, nc)
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
        return this.transactions.some((cB => cB.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const Tn = [];
    class fn {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = cB, this.length = Bc, this.flags = nc, this.parent = null, cB.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Tn
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
      sync(cB) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let cB = this.domAttrs;
          cB && function(cB, Bc) {
            for (let nc = cB.attributes.length - 1; nc >= 0; nc--) {
              let Vc = cB.attributes[nc].name;
              null == Bc[Vc] && cB.removeAttribute(Vc)
            }
            for (let nc in Bc) {
              let Vc = Bc[nc];
              "style" == nc ? cB.style.cssText = Vc : cB.getAttribute(nc) != Vc && cB.setAttribute(nc, Vc)
            }
          }(this.dom, cB)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(cB) {
        this.dom = cB, cB.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let nc of this.children) {
          if (nc == cB) return Bc;
          Bc += nc.length + nc.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(cB) {
        return this.posBefore(cB) + cB.length
      }
      covers(cB) {
        return !0
      }
      coordsIn(cB, Bc) {
        return null
      }
      domPosFor(cB, Bc) {
        let nc = Jc(this.dom),
          Vc = this.length ? cB > 0 : Bc > 0;
        return new MB(this.parent.dom, nc + (Vc ? 1 : 0), 0 == cB || cB == this.length)
      }
      markDirty(cB) {
        this.flags &= -3, cB && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let cB = this; cB; cB = cB.parent)
          if (cB instanceof tV) return cB;
        return null
      }
      static get(cB) {
        return cB.cmTile
      }
    }
    class mV extends fn {
      constructor(cB) {
        super(cB, 0), this._children = []
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
      append(cB) {
        this.children.push(cB), cB.parent = this
      }
      sync(cB) {
        if (2 & this.flags) return;
        super.sync(cB);
        let Bc, nc = this.dom,
          Vc = null,
          Ic = (null === cB || void 0 === cB ? void 0 : cB.node) == nc ? cB : null,
          rB = 0;
        for (let uc of this.children) {
          if (uc.sync(cB), rB += uc.length + uc.breakAfter, Bc = Vc ? Vc.nextSibling : nc.firstChild, Ic && Bc != uc.dom && (Ic.written = !0), uc.dom.parentNode == nc)
            for (; Bc && Bc != uc.dom;) Bc = en(Bc);
          else nc.insertBefore(uc.dom, Bc);
          Vc = uc.dom
        }
        for (Bc = Vc ? Vc.nextSibling : nc.firstChild, Ic && Bc && (Ic.written = !0); Bc;) Bc = en(Bc);
        this.length = rB
      }
    }

    function en(cB) {
      let Bc = cB.nextSibling;
      return cB.parentNode.removeChild(cB), Bc
    }
    class tV extends mV {
      constructor(cB, Bc) {
        super(Bc), this.view = cB
      }
      owns(cB) {
        for (; cB; cB = cB.parent)
          if (cB == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(cB) {
        for (;;) {
          if (!cB) return null;
          let Bc = fn.get(cB);
          if (Bc && this.owns(Bc)) return Bc;
          cB = cB.parentNode
        }
      }
      blockTiles(cB) {
        for (let Bc = [], nc = this, Vc = 0, Ic = 0;;)
          if (Vc == nc.children.length) {
            if (!Bc.length) return;
            nc = nc.parent, nc.breakAfter && Ic++, Vc = Bc.pop()
          } else {
            let rB = nc.children[Vc++];
            if (rB instanceof Sn) Bc.push(Vc), nc = rB, Vc = 0;
            else {
              let Bc = Ic + rB.length,
                nc = cB(rB, Ic);
              if (void 0 !== nc) return nc;
              Ic = Bc + rB.breakAfter
            }
          }
      }
      resolveBlock(cB, Bc) {
        let nc, Vc, Ic = -1,
          rB = -1;
        if (this.blockTiles(((uc, sc) => {
            let Mc = sc + uc.length;
            if (cB >= sc && cB <= Mc) {
              if (uc.isWidget() && Bc >= -1 && Bc <= 1) {
                if (32 & uc.flags) return !0;
                16 & uc.flags && (nc = void 0)
              }(sc < cB || cB == Mc && (Bc < -1 ? uc.length : uc.covers(1))) && (!nc || !uc.isWidget() && nc.isWidget()) && (nc = uc, Ic = cB - sc), (Mc > cB || cB == sc && (Bc > 1 ? uc.length : uc.covers(-1))) && (!Vc || !uc.isWidget() && Vc.isWidget()) && (Vc = uc, rB = cB - sc)
            }
          })), !nc && !Vc) throw new Error("No tile at position " + cB);
        return nc && Bc < 0 || !Vc ? {
          tile: nc,
          offset: Ic
        } : {
          tile: Vc,
          offset: rB
        }
      }
    }
    class Sn extends mV {
      constructor(cB, Bc) {
        super(cB), this.wrapper = Bc
      }
      isBlock() {
        return !0
      }
      covers(cB) {
        return !!this.children.length && (cB < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (cB, Bc) {
        let nc = new Sn(Bc || document.createElement(cB.tagName), cB);
        return Bc || (nc.flags |= 4), nc
      }
    }
    class yV extends mV {
      constructor(cB, Bc) {
        super(cB), this.attrs = Bc
      }
      isLine() {
        return !0
      }
      static start(cB, Bc, nc) {
        let Vc = new yV(Bc || document.createElement("div"), cB);
        return Bc && nc || (Vc.flags |= 4), Vc
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(cB, Bc, nc) {
        let Vc = null,
          Ic = -1,
          rB = null,
          uc = -1;
        ! function cB(sc, Mc) {
          for (let Pc = 0, qB = 0; Pc < sc.children.length && qB <= Mc; Pc++) {
            let Oc = sc.children[Pc],
              Tc = qB + Oc.length;
            Tc >= Mc && (Oc.isComposite() ? cB(Oc, Mc - qB) : (!rB || rB.isHidden && (Bc > 0 || nc && zV(rB, Oc))) && (Tc > Mc || 32 & Oc.flags) ? (rB = Oc, uc = Mc - qB) : (qB < Mc || 16 & Oc.flags && !Oc.isHidden) && (Vc = Oc, Ic = Mc - qB)), qB = Tc
          }
        }(this, cB);
        let sc = (Bc < 0 ? Vc : rB) || Vc || rB;
        return sc ? {
          tile: sc,
          offset: sc == Vc ? Ic : uc
        } : null
      }
      coordsIn(cB, Bc) {
        let nc = this.resolveInline(cB, Bc, !0);
        return nc ? nc.tile.coordsIn(Math.max(0, nc.offset), Bc) : function(cB) {
          let Bc = cB.dom.lastChild;
          if (!Bc) return cB.dom.getBoundingClientRect();
          let nc = Hc(Bc);
          return nc[nc.length - 1] || null
        }(this)
      }
      domIn(cB, Bc) {
        let nc = this.resolveInline(cB, Bc);
        if (nc) {
          let {
            tile: cB,
            offset: Vc
          } = nc;
          if (this.dom.contains(cB.dom)) return cB.isText() ? new MB(cB.dom, Math.min(cB.dom.nodeValue.length, Vc)) : cB.domPosFor(Vc, 16 & cB.flags ? 1 : 32 & cB.flags ? -1 : Bc);
          let Ic = nc.tile.parent,
            rB = !1;
          for (let Bc of Ic.children) {
            if (rB) return new MB(Bc.dom, 0);
            Bc == nc.tile && (rB = !0)
          }
        }
        return new MB(this.dom, 0)
      }
    }

    function zV(cB, Bc) {
      let nc = cB.coordsIn(0, 1),
        Vc = Bc.coordsIn(0, 1);
      return nc && Vc && Vc.top < nc.bottom
    }
    class pn extends mV {
      constructor(cB, Bc) {
        super(cB), this.mark = Bc
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (cB, Bc) {
        let nc = new pn(Bc || document.createElement(cB.tagName), cB);
        return Bc || (nc.flags |= 4), nc
      }
    }
    class hn extends fn {
      constructor(cB, Bc) {
        super(cB, Bc.length), this.text = Bc
      }
      sync(cB) {
        2 & this.flags || (super.sync(cB), this.dom.nodeValue != this.text && (cB && cB.node == this.dom && (cB.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(cB, Bc) {
        let nc = this.dom.nodeValue.length;
        cB > nc && (cB = nc);
        let Vc = cB,
          Ic = cB,
          rB = 0;
        0 == cB && Bc < 0 || cB == nc && Bc >= 0 ? lc.chrome || lc.gecko || (cB ? (Vc--, rB = 1) : Ic < nc && (Ic++, rB = -1)) : Bc < 0 ? Vc-- : Ic < nc && Ic++;
        let uc = VB(this.dom, Vc, Ic).getClientRects();
        if (!uc.length) return null;
        let sc = uc[(rB ? rB < 0 : Bc >= 0) ? 0 : uc.length - 1];
        return lc.safari && !rB && 0 == sc.width && (sc = Array.prototype.find.call(uc, (cB => cB.width)) || sc), rB ? Kc(sc, rB < 0) : sc || null
      }
      static of (cB, Bc) {
        let nc = new hn(Bc || document.createTextNode(cB), cB);
        return Bc || (nc.flags |= 2), nc
      }
    }
    class aV extends fn {
      constructor(cB, Bc, nc, Vc) {
        super(cB, Bc, Vc), this.widget = nc
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(cB) {
        return !(48 & this.flags) && (this.flags & (cB < 0 ? 64 : 128)) > 0
      }
      coordsIn(cB, Bc) {
        return this.coordsInWidget(cB, Bc, !1)
      }
      coordsInWidget(cB, Bc, nc) {
        let Vc = this.widget.coordsAt(this.dom, cB, Bc);
        if (Vc) return Vc;
        if (nc) return Kc(this.dom.getBoundingClientRect(), this.length ? 0 == cB : Bc <= 0);
        {
          let Bc = this.dom.getClientRects(),
            nc = null;
          if (!Bc.length) return null;
          let Vc = !!(16 & this.flags) || !(32 & this.flags) && cB > 0;
          for (let Ic = Vc ? Bc.length - 1 : 0; nc = Bc[Ic], !(cB > 0 ? 0 == Ic : Ic == Bc.length - 1 || nc.top < nc.bottom); Ic += Vc ? -1 : 1);
          return Kc(nc, !Vc)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Vc.N.empty;
        let {
          root: cB
        } = this;
        if (!cB) return Vc.N.empty;
        let Bc = this.posAtStart;
        return cB.view.state.doc.slice(Bc, Bc + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (cB, Bc, nc, Vc, Ic) {
        return Ic || (Ic = cB.toDOM(Bc), cB.editable || (Ic.contentEditable = "false")), new aV(Ic, nc, cB, Vc)
      }
    }
    class lnc extends fn {
      constructor(cB) {
        let Bc = document.createElement("img");
        Bc.className = "cm-widgetBuffer", Bc.setAttribute("aria-hidden", "true"), super(Bc, 0, cB)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Vc.N.empty
      }
      coordsIn(cB) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Yn {
      constructor(cB) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = cB
      }
      advance(cB, Bc, nc) {
        let {
          tile: Vc,
          index: Ic,
          beforeBreak: rB,
          parents: uc
        } = this;
        for (; cB || Bc > 0;)
          if (Vc.isComposite())
            if (rB) {
              if (!cB) break;
              nc && nc.break(), cB--, rB = !1
            } else if (Ic == Vc.children.length) {
          if (!cB && !uc.length) break;
          nc && nc.OV(Vc), rB = !!Vc.breakAfter, ({
            tile: Vc,
            index: Ic
          } = uc.pop()), Ic++
        } else {
          let sc = Vc.children[Ic],
            Mc = sc.breakAfter;
          !(Bc > 0 ? sc.length <= cB : sc.length < cB) || nc && !1 === nc.skip(sc, 0, sc.length) && sc.isComposite ? (uc.push({
            tile: Vc,
            index: Ic
          }), Vc = sc, Ic = 0, nc && sc.isComposite() && nc.enter(sc)) : (rB = !!Mc, Ic++, cB -= sc.length)
        } else if (Ic == Vc.length) rB = !!Vc.breakAfter, ({
          tile: Vc,
          index: Ic
        } = uc.pop()), Ic++;
        else {
          if (!cB) break;
          {
            let Bc = Math.min(cB, Vc.length - Ic);
            nc && nc.skip(Vc, Ic, Ic + Bc), cB -= Bc, Ic += Bc
          }
        }
        return this.tile = Vc, this.index = Ic, this.beforeBreak = rB, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class Ln {
      constructor(cB, Bc, nc, Vc) {
        this.from = cB, this.to = Bc, this.wrapper = nc, this.rank = Vc
      }
    }
    class gV {
      constructor(cB, Bc, nc) {
        this.cache = cB, this.root = Bc, this.blockWrappers = nc, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(cB, Bc, nc, Vc) {
        var Ic;
        this.flushBuffer();
        let rB = this.ensureMarks(Bc, nc),
          uc = rB.lastChild;
        if (uc && uc.isText() && !(8 & uc.flags) && uc.length + cB.length < 512) {
          this.cache.reused.set(uc, 2), (rB.children[rB.children.length - 1] = new hn(uc.dom, uc.text + cB)).parent = rB
        } else rB.append(Vc || hn.of(cB, null === (Ic = this.cache.find(hn)) || void 0 === Ic ? void 0 : Ic.dom));
        this.pos += cB.length, this.afterWidget = null
      }
      addComposition(cB, Bc) {
        let nc = this.curLine;
        nc.dom != Bc.line.dom && (nc.setDOM(this.cache.reused.has(Bc.line) ? Dn(Bc.line.dom) : Bc.line.dom), this.cache.reused.set(Bc.line, 2));
        let Vc = nc;
        for (let uc = Bc.marks.length - 1; uc >= 0; uc--) {
          let cB = Bc.marks[uc],
            nc = Vc.lastChild;
          if (nc instanceof pn && nc.mark.eq(cB.mark)) nc.dom != cB.dom && nc.setDOM(Dn(cB.dom)), Vc = nc;
          else {
            if (this.cache.reused.get(cB)) {
              let Bc = fn.get(cB.dom);
              Bc && Bc.setDOM(Dn(cB.dom))
            }
            let Bc = pn.of(cB.mark, cB.dom);
            Vc.append(Bc), Vc = Bc
          }
          this.cache.reused.set(cB, 2)
        }
        let Ic = fn.get(cB.text);
        Ic && this.cache.reused.set(Ic, 2);
        let rB = new hn(cB.text, cB.text.nodeValue);
        rB.flags |= 8, Vc.append(rB)
      }
      addInlineWidget(cB, Bc, nc) {
        let Vc = this.afterWidget && 48 & cB.flags && (48 & this.afterWidget.flags) == (48 & cB.flags);
        Vc || this.flushBuffer();
        let Ic = this.ensureMarks(Bc, nc);
        Vc || 16 & cB.flags || Ic.append(this.getBuffer(1)), Ic.append(cB), this.pos += cB.length, this.afterWidget = cB
      }
      addMark(cB, Bc, nc) {
        this.flushBuffer(), this.ensureMarks(Bc, nc).append(cB), this.pos += cB.length, this.afterWidget = null
      }
      addBlockWidget(cB) {
        this.getBlockPos().append(cB), this.pos += cB.length, this.lastBlock = cB, this.endLine()
      }
      continueWidget(cB) {
        (this.afterWidget || this.lastBlock).length += cB, this.pos += cB
      }
      addLineStart(cB, Bc) {
        var nc;
        cB || (cB = vV);
        let Vc = yV.start(cB, Bc || (null === (nc = this.cache.find(yV)) || void 0 === nc ? void 0 : nc.dom), !!Bc);
        this.getBlockPos().append(this.lastBlock = this.curLine = Vc)
      }
      addLine(cB) {
        this.getBlockPos().append(cB), this.pos += cB.length, this.lastBlock = cB, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(cB) {
        this.blockPosCovered() || this.addLineStart(cB)
      }
      ensureLine(cB) {
        this.curLine || this.addLineStart(cB)
      }
      ensureMarks(cB, Bc) {
        var nc;
        let Vc = this.curLine;
        for (let Ic = cB.length - 1; Ic >= 0; Ic--) {
          let rB, uc = cB[Ic];
          if (Bc > 0 && (rB = Vc.lastChild) && rB instanceof pn && rB.mark.eq(uc)) Vc = rB, Bc--;
          else {
            let cB = pn.of(uc, null === (nc = this.cache.find(pn, (cB => cB.mark.eq(uc)))) || void 0 === nc ? void 0 : nc.dom);
            Vc.append(cB), Vc = cB, Bc = 0
          }
        }
        return Vc
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let cB = this.curLine.lastChild;
          cB && Cn(this.curLine, !1) && ("BR" == cB.dom.nodeName || !cB.isWidget() || lc.ios && Cn(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(En, 0, 32) || new aV(En.toDOM(), 0, En, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let cB = this.wrappers.length - 1; cB >= 0; cB--) this.wrappers[cB].to < this.pos && this.wrappers.splice(cB, 1);
        for (let cB = this.blockWrappers; cB.value && cB.from <= this.pos; cB.next())
          if (cB.to >= this.pos) {
            let Bc = new Ln(cB.from, cB.to, cB.value, cB.rank),
              nc = this.wrappers.length;
            for (; nc > 0 && (this.wrappers[nc - 1].rank - Bc.rank || this.wrappers[nc - 1].to - Bc.to) < 0;) nc--;
            this.wrappers.splice(nc, 0, Bc)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var cB;
        this.updateBlockWrappers();
        let Bc = this.root;
        for (let nc of this.wrappers) {
          let Vc = Bc.lastChild;
          if (nc.from < this.pos && Vc instanceof Sn && Vc.wrapper.eq(nc.wrapper)) Bc = Vc;
          else {
            let Vc = Sn.of(nc.wrapper, null === (cB = this.cache.find(Sn, (cB => cB.wrapper.eq(nc.wrapper)))) || void 0 === cB ? void 0 : cB.dom);
            Bc.append(Vc), Bc = Vc
          }
        }
        return Bc
      }
      blockPosCovered() {
        let cB = this.lastBlock;
        return null != cB && !cB.breakAfter && (!cB.isWidget() || (160 & cB.flags) > 0)
      }
      getBuffer(cB) {
        let Bc = 2 | (cB < 0 ? 16 : 32),
          nc = this.cache.find(lnc, void 0, 1);
        return nc && (nc.flags = Bc), nc || new lnc(Bc)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Un {
      constructor(cB) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = cB.iter()
      }
      skip(cB) {
        this.textOff + cB <= this.text.length ? this.textOff += cB : (this.skipCount += cB - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(cB) {
        if (this.textOff == this.text.length) {
          let {
            value: Bc,
            lineBreak: nc,
            done: Vc
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Vc) throw new Error("Ran out of text content when drawing inline views");
          this.text = Bc;
          let Ic = this.textOff = Math.min(cB, Bc.length);
          return nc ? null : Bc.slice(0, Ic)
        }
        let Bc = Math.min(this.text.length, this.textOff + cB),
          nc = this.text.slice(this.textOff, Bc);
        return this.textOff = Bc, nc
      }
    }
    const bV = [aV, yV, hn, pn, lnc, Sn, tV];
    for (let Cu = 0; Cu < bV.length; Cu++) bV[Cu].bucket = Cu;
    class Zn {
      constructor(cB) {
        this.view = cB, this.buckets = bV.map((() => [])), this.index = bV.map((() => 0)), this.reused = new Map
      }
      add(cB) {
        let Bc = cB.constructor.bucket,
          nc = this.buckets[Bc];
        nc.length < 6 ? nc.push(cB) : nc[this.index[Bc] = (this.index[Bc] + 1) % 6] = cB
      }
      find(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Vc = cB.bucket,
          Ic = this.buckets[Vc],
          rB = this.index[Vc];
        for (let uc = Ic.length - 1; uc >= 0; uc--) {
          let cB = (uc + rB) % Ic.length,
            sc = Ic[cB];
          if ((!Bc || Bc(sc)) && !this.reused.has(sc)) return Ic.splice(cB, 1), cB < rB && this.index[Vc]--, this.reused.set(sc, nc), sc
        }
        return null
      }
      findWidget(cB, Bc, nc) {
        let Vc = this.buckets[0];
        if (Vc.length)
          for (let Ic = 0, rB = 0;; Ic++) {
            if (Ic == Vc.length) {
              if (rB) return null;
              rB = 1, Ic = 0
            }
            let uc = Vc[Ic];
            if (!this.reused.has(uc) && (0 == rB ? uc.widget.compare(cB) : uc.widget.constructor == cB.constructor && cB.updateDOM(uc.dom, this.view, uc.widget))) return Vc.splice(Ic, 1), Ic < this.index[0] && this.index[0]--, uc.widget == cB && uc.length == Bc && (497 & uc.flags) == nc ? (this.reused.set(uc, 1), uc) : (this.reused.set(uc, 2), new aV(uc.dom, Bc, cB, -498 & uc.flags | nc))
          }
      }
      reuse(cB) {
        return this.reused.set(cB, 1), cB
      }
      maybeReuse(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(cB)) return this.reused.set(cB, Bc), cB.dom
      }
      clear() {
        for (let cB = 0; cB < this.buckets.length; cB++) this.buckets[cB].length = this.index[cB] = 0
      }
    }
    class Qn {
      constructor(cB, Bc, nc, Ic, rB) {
        this.view = cB, this.iu = Ic, this.disallowBlockEffectsFor = rB, this.openWidget = !1, this.openMarks = 0, this.cache = new Zn(cB), this.text = new Un(cB.state.doc), this.builder = new gV(this.cache, new tV(cB, cB.contentDOM), Vc.y.iter(nc)), this.cache.reused.set(Bc, 2), this.old = new Yn(Bc), this.reuseWalker = {
          skip: (cB, Bc, nc) => {
            if (this.cache.add(cB), cB.isComposite()) return !1
          },
          enter: cB => this.cache.add(cB),
          OV: () => {},
          break: () => {}
        }
      }
      run(cB, Bc) {
        let nc = Bc && this.getCompositionContext(Bc.text);
        for (let Vc = 0, Ic = 0, rB = 0;;) {
          let uc = rB < cB.length ? cB[rB++] : null,
            sc = uc ? uc.fromA : this.old.root.length;
          if (sc > Vc) {
            let cB = sc - Vc;
            this.preserve(cB, !rB, !uc), Vc = sc, Ic += cB
          }
          if (!uc) break;
          Bc && uc.fromA <= Bc.range.fromA && uc.toA >= Bc.range.toA ? (this.forward(uc.fromA, Bc.range.fromA, Bc.range.fromA < Bc.range.toA ? 1 : -1), this.emit(Ic, Bc.range.fromB), this.cache.clear(), this.builder.addComposition(Bc, nc), this.text.skip(Bc.range.toB - Bc.range.fromB), this.forward(Bc.range.fromA, uc.toA), this.emit(Bc.range.toB, uc.toB)) : (this.forward(uc.fromA, uc.toA), this.emit(Ic, uc.toB)), Ic = uc.toB, Vc = uc.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(cB, Bc, nc) {
        let Vc = function(cB) {
            let Bc = [];
            for (let nc = cB.parents.length; nc > 1; nc--) {
              let Vc = nc == cB.parents.length ? cB.tile : cB.parents[nc].tile;
              Vc instanceof pn && Bc.push(Vc.mark)
            }
            return Bc
          }(this.old),
          Ic = this.openMarks;
        this.old.advance(cB, nc ? 1 : -1, {
          skip: (cB, Bc, nc) => {
            if (cB.isWidget())
              if (this.openWidget) this.builder.continueWidget(nc - Bc);
              else {
                let rB = nc > 0 || Bc < cB.length ? aV.of(cB.widget, this.view, nc - Bc, 496 & cB.flags, this.cache.maybeReuse(cB)) : this.cache.reuse(cB);
                256 & rB.flags ? (rB.flags &= -2, this.builder.addBlockWidget(rB)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(rB, Vc, Ic), Ic = Vc.length)
              }
            else if (cB.isText()) this.builder.ensureLine(null), Bc || nc != cB.length || this.cache.reused.has(cB) ? (this.cache.add(cB), this.builder.addText(cB.text.slice(Bc, nc), Vc, Ic)) : this.builder.addText(cB.text, Vc, Ic, this.cache.reuse(cB)), Ic = Vc.length;
            else if (cB.isLine()) cB.flags &= -2, this.cache.reused.set(cB, 1), this.builder.addLine(cB);
            else if (cB instanceof lnc) this.cache.add(cB);
            else {
              if (!(cB instanceof pn)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(cB, Vc, Ic), this.cache.reused.set(cB, 1), Ic = Vc.length
            }
            this.openWidget = !1
          },
          enter: cB => {
            cB.isLine() ? this.builder.addLineStart(cB.attrs, this.cache.maybeReuse(cB)) : (this.cache.add(cB), cB instanceof pn && Vc.unshift(cB.mark)), this.openWidget = !1
          },
          OV: cB => {
            cB.isLine() ? Vc.length && (Vc.length = Ic = 0) : cB instanceof pn && (Vc.shift(), Ic = Math.min(Ic, Vc.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(cB)
      }
      emit(cB, Bc) {
        let nc = null,
          Ic = this.builder,
          rB = 0,
          uc = Vc.y.spans(this.iu, cB, Bc, {
            point: (cB, Bc, Vc, uc, sc, Mc) => {
              if (Vc instanceof Nc) {
                if (this.disallowBlockEffectsFor[Mc]) {
                  if (Vc.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (Bc > this.view.state.doc.lineAt(cB).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (rB = uc.length, sc > uc.length) Ic.continueWidget(Bc - cB);
                else {
                  let rB = Vc.widget || (Vc.block ? Nn.block : Nn.inline),
                    Mc = function(cB) {
                      let Bc = cB.isReplace ? (cB.startSide < 0 ? 64 : 0) | (cB.endSide > 0 ? 128 : 0) : cB.startSide > 0 ? 32 : 16;
                      cB.block && (Bc |= 256);
                      return Bc
                    }(Vc),
                    Pc = this.cache.findWidget(rB, Bc - cB, Mc) || aV.of(rB, this.view, Bc - cB, Mc);
                  Vc.block ? (Vc.startSide > 0 && Ic.addLineStartIfNotCovered(nc), Ic.addBlockWidget(Pc)) : (Ic.ensureLine(nc), Ic.addInlineWidget(Pc, uc, sc))
                }
                nc = null
              } else nc = function(cB, Bc) {
                let nc = Bc.spec.attributes,
                  Vc = Bc.spec.class;
                if (!nc && !Vc) return cB;
                cB || (cB = {
                  class: "cm-line"
                });
                nc && Yc(nc, cB);
                Vc && (cB.class += " " + Vc);
                return cB
              }(nc, Vc);
              Bc > cB && this.text.skip(Bc - cB)
            },
            span: (cB, Bc, Vc, rB) => {
              for (let uc = cB; uc < Bc;) {
                let sc = this.text.next(Math.min(512, Bc - uc));
                null == sc ? (Ic.addLineStartIfNotCovered(nc), Ic.addBreak(), uc++) : (Ic.ensureLine(nc), Ic.addText(sc, Vc, uc == cB ? rB : Vc.length), uc += sc.length), nc = null
              }
            }
          });
        Ic.addLineStartIfNotCovered(nc), this.openWidget = uc > rB, this.openMarks = uc
      }
      forward(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        Bc - cB <= 10 ? this.old.advance(Bc - cB, nc, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(Bc - cB - 10, -1), this.old.advance(5, nc, this.reuseWalker))
      }
      getCompositionContext(cB) {
        let Bc = [],
          nc = null;
        for (let Vc = cB.parentNode;; Vc = Vc.parentNode) {
          let cB = fn.get(Vc);
          if (Vc == this.view.contentDOM) break;
          cB instanceof pn ? Bc.push(cB) : (null === cB || void 0 === cB ? void 0 : cB.isLine()) ? nc = cB : cB instanceof Sn || ("DIV" != Vc.nodeName || nc || Vc == this.view.contentDOM ? nc || Bc.push(pn.of(new vB({
            tagName: Vc.nodeName.toLowerCase(),
            attributes: bB(Vc)
          }), Vc)) : nc = new yV(Vc, vV))
        }
        return {
          line: nc,
          marks: Bc
        }
      }
    }

    function Cn(cB, Bc) {
      let nc = cB => {
        for (let Vc of cB.children)
          if ((Bc ? Vc.isText() : Vc.length) || nc(Vc)) return !0;
        return !1
      };
      return nc(cB)
    }
    const vV = {
      class: "cm-line"
    };

    function Dn(cB) {
      let Bc = fn.get(cB);
      return Bc && Bc.setDOM(cB.cloneNode()), cB
    }
    class Nn extends Zc {
      constructor(cB) {
        super(), this.tag = cB
      }
      eq(cB) {
        return cB.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(cB) {
        return cB.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    Nn.inline = new Nn("span"), Nn.block = new Nn("div");
    const En = new class extends Zc {
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
    class onc {
      constructor(cB) {
        this.view = cB, this.iu = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Cc.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new tV(cB, cB.contentDOM), this.updateInner([new qV(0, 0, 0, cB.state.doc.length)], null)
      }
      update(cB) {
        var Bc;
        let nc = cB.changedRanges;
        this.minWidth > 0 && nc.length && (nc.every((cB => {
          let {
            fromA: Bc,
            toA: nc
          } = cB;
          return nc < this.minWidthFrom || Bc > this.minWidthTo
        })) ? (this.minWidthFrom = cB.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = cB.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(cB);
        let Ic = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (Bc = this.domChanged) || void 0 === Bc ? void 0 : Bc.newSel) ? Ic = this.domChanged.newSel.head : function(cB, Bc) {
          let nc = !1;
          Bc && cB.iterChangedRanges(((cB, Vc) => {
            cB < Bc.to && Vc > Bc.from && (nc = !0)
          }));
          return nc
        }(cB.changes, this.hasComposition) || cB.selectionSet || (Ic = cB.state.selection.main.head));
        let rB = Ic > -1 ? function(cB, Bc, nc) {
          let Vc = wn(cB, nc);
          if (!Vc) return null;
          let {
            node: Ic,
            from: rB,
            to: uc
          } = Vc, sc = Ic.nodeValue;
          if (/[\n\r]/.test(sc)) return null;
          if (cB.state.doc.sliceString(Vc.from, Vc.to) != sc) return null;
          let Mc = Bc.invertedDesc;
          return {
            range: new qV(Mc.mapPos(rB), Mc.mapPos(uc), rB, uc),
            text: Ic
          }
        }(this.view, cB.changes, Ic) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: Bc,
            to: Vc
          } = this.hasComposition;
          nc = new qV(Bc, Vc, cB.changes.mapPos(Bc, -1), cB.changes.mapPos(Vc, 1)).addToSet(nc.slice())
        }
        this.hasComposition = rB ? {
          from: rB.range.fromB,
          to: rB.range.toB
        } : null, (lc.ie || lc.chrome) && !rB && cB && cB.state.doc.lines != cB.startState.doc.lines && (this.forceSelection = !0);
        let uc = this.iu,
          sc = this.blockWrappers;
        this.updateDeco();
        let Mc = function(cB, Bc, nc) {
          let Ic = new kV;
          return Vc.y.compare(cB, Bc, nc, Ic), Ic.changes
        }(uc, this.iu, cB.changes);
        Mc.length && (nc = qV.extendWithRanges(nc, Mc));
        let Pc = function(cB, Bc, nc) {
          let Ic = new Xn;
          return Vc.y.compare(cB, Bc, nc, Ic), Ic.changes
        }(sc, this.blockWrappers, cB.changes);
        return Pc.length && (nc = qV.extendWithRanges(nc, Pc)), rB && !nc.some((cB => cB.fromA <= rB.range.fromA && cB.toA >= rB.range.toA)) && (nc = rB.range.addToSet(nc.slice())), !(2 & this.tile.flags && 0 == nc.length) && (this.updateInner(nc, rB), cB.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(cB, Bc) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: nc
        } = this.view;
        nc.ignore((() => {
          if (Bc || cB.length) {
            let nc = this.tile,
              Vc = new Qn(this.view, nc, this.blockWrappers, this.iu, this.dynamicDecorationMap);
            Bc && fn.get(Bc.text) && Vc.cache.reused.set(fn.get(Bc.text), 2), this.tile = Vc.run(cB, Bc), Wn(nc, Vc.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Vc = lc.chrome || lc.ios ? {
            node: nc.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Vc), !Vc || !Vc.written && nc.selectionRange.focusNode == Vc.node && this.tile.dom.contains(Vc.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Vc = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Ic of this.tile.children) Ic.isWidget() && Ic.widget instanceof Hn && Vc.push(Ic.dom);
        nc.updateGaps(Vc)
      }
      updateEditContextFormatting(cB) {
        this.editContextFormatting = this.editContextFormatting.map(cB.changes);
        for (let Bc of cB.transactions)
          for (let cB of Bc.effects) cB.is(JB) && (this.editContextFormatting = cB.value)
      }
      updateSelection() {
        let cB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: Bc
        } = this.tile, nc = this.view.root.activeElement, Vc = nc == Bc, Ic = !Vc && !(this.view.state.facet(RB) || Bc.tabIndex > -1) && Xc(Bc, this.view.observer.selectionRange) && !(nc && Bc.contains(nc));
        if (!(Vc || cB || Ic)) return;
        let rB = this.forceSelection;
        this.forceSelection = !1;
        let uc, sc, Mc = this.view.state.selection.main;
        if (Mc.empty ? sc = uc = this.inlineDOMNearPos(Mc.anchor, Mc.assoc || 1) : (sc = this.inlineDOMNearPos(Mc.head, Mc.head == Mc.from ? 1 : -1), uc = this.inlineDOMNearPos(Mc.anchor, Mc.anchor == Mc.from ? 1 : -1)), lc.gecko && Mc.empty && !this.hasComposition && (1 == (Pc = uc).node.nodeType && Pc.node.firstChild && (0 == Pc.offset || "false" == Pc.node.childNodes[Pc.offset - 1].contentEditable) && (Pc.offset == Pc.node.childNodes.length || "false" == Pc.node.childNodes[Pc.offset].contentEditable))) {
          let cB = document.createTextNode("");
          this.view.observer.ignore((() => uc.node.insertBefore(cB, uc.node.childNodes[uc.offset] || null))), uc = sc = new MB(cB, 0), rB = !0
        }
        var Pc;
        let qB = this.view.observer.selectionRange;
        !rB && qB.focusNode && (Fc(uc.node, uc.offset, qB.anchorNode, qB.anchorOffset) && Fc(sc.node, sc.offset, qB.focusNode, qB.focusOffset) || this.suppressWidgetCursorChange(qB, Mc)) || (this.view.observer.ignore((() => {
          lc.android && lc.chrome && Bc.contains(qB.focusNode) && function(cB, Bc) {
            for (let nc = cB; nc && nc != Bc; nc = nc.assignedSlot || nc.parentNode)
              if (1 == nc.nodeType && "false" == nc.contentEditable) return !0;
            return !1
          }(qB.focusNode, Bc) && (Bc.blur(), Bc.focus({
            preventScroll: !0
          }));
          let cB = wc(this.view.root);
          if (cB)
            if (Mc.empty) {
              if (lc.gecko) {
                let cB = (Vc = uc.node, rB = uc.offset, 1 != Vc.nodeType ? 0 : (rB && "false" == Vc.childNodes[rB - 1].contentEditable ? 1 : 0) | (rB < Vc.childNodes.length && "false" == Vc.childNodes[rB].contentEditable ? 2 : 0));
                if (cB && 3 != cB) {
                  let Bc = (1 == cB ? uB : sB)(uc.node, uc.offset);
                  Bc && (uc = new MB(Bc.node, Bc.offset))
                }
              }
              cB.collapse(uc.node, uc.offset), null != Mc.bidiLevel && void 0 !== cB.caretBidiLevel && (cB.caretBidiLevel = Mc.bidiLevel)
            } else if (cB.extend) {
            cB.collapse(uc.node, uc.offset);
            try {
              cB.extend(sc.node, sc.offset)
            } catch (Pc) {}
          } else {
            let Bc = document.createRange();
            Mc.anchor > Mc.head && ([uc, sc] = [sc, uc]), Bc.setEnd(sc.node, sc.offset), Bc.setStart(uc.node, uc.offset), cB.removeAllRanges(), cB.addRange(Bc)
          } else;
          var Vc, rB;
          Ic && this.view.root.activeElement == Bc && (Bc.blur(), nc && nc.focus())
        })), this.view.observer.setSelectionRange(uc, sc)), this.impreciseAnchor = uc.precise ? null : new MB(qB.anchorNode, qB.anchorOffset), this.impreciseHead = sc.precise ? null : new MB(qB.focusNode, qB.focusOffset)
      }
      suppressWidgetCursorChange(cB, Bc) {
        return this.hasComposition && Bc.empty && Fc(cB.focusNode, cB.focusOffset, cB.anchorNode, cB.anchorOffset) && this.posFromDOM(cB.focusNode, cB.focusOffset) == Bc.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: cB
        } = this, Bc = cB.state.selection.main, nc = wc(cB.root), {
          anchorNode: Vc,
          anchorOffset: Ic
        } = cB.observer.selectionRange;
        if (!nc || !Bc.empty || !Bc.assoc || !nc.modify) return;
        let rB = this.lineAt(Bc.head, Bc.assoc);
        if (!rB) return;
        let uc = rB.posAtStart;
        if (Bc.head == uc || Bc.head == uc + rB.length) return;
        let sc = this.coordsAt(Bc.head, -1),
          Mc = this.coordsAt(Bc.head, 1);
        if (!sc || !Mc || sc.bottom > Mc.top) return;
        let Pc = this.domAtPos(Bc.head + Bc.assoc, Bc.assoc);
        nc.collapse(Pc.node, Pc.offset), nc.modify("move", Bc.assoc < 0 ? "forward" : "backward", "lineboundary"), cB.observer.readSelectionRange();
        let qB = cB.observer.selectionRange;
        cB.docView.posFromDOM(qB.anchorNode, qB.anchorOffset) != Bc.from && nc.collapse(Vc, Ic)
      }
      posFromDOM(cB, Bc) {
        let nc = this.tile.nearest(cB);
        if (!nc) return 2 & this.tile.dom.compareDocumentPosition(cB) ? 0 : this.view.state.doc.length;
        let Vc = nc.posAtStart;
        if (!nc.isComposite()) return nc.isText() ? cB == nc.dom ? Vc + Bc : Vc + (Bc ? nc.length : 0) : Vc;
        {
          let Ic;
          if (cB == nc.dom) Ic = nc.dom.childNodes[Bc];
          else {
            let Vc = 0 == iB(cB) ? 0 : 0 == Bc ? -1 : 1;
            for (;;) {
              let Bc = cB.parentNode;
              if (Bc == nc.dom) break;
              0 == Vc && Bc.firstChild != Bc.lastChild && (Vc = cB == Bc.firstChild ? -1 : 1), cB = Bc
            }
            Ic = Vc < 0 ? cB : cB.nextSibling
          }
          if (Ic == nc.dom.firstChild) return Vc;
          for (; Ic && !fn.get(Ic);) Ic = Ic.nextSibling;
          if (!Ic) return Vc + nc.length;
          for (let cB = 0, Bc = Vc;; cB++) {
            let Vc = nc.children[cB];
            if (Vc.dom == Ic) return Bc;
            Bc += Vc.length + Vc.breakAfter
          }
        }
      }
      domAtPos(cB, Bc) {
        let {
          tile: nc,
          offset: Vc
        } = this.tile.resolveBlock(cB, Bc);
        return nc.isWidget() ? nc.domPosFor(cB, Bc) : nc.domIn(Vc, Bc)
      }
      inlineDOMNearPos(cB, Bc) {
        let nc, Vc, Ic = -1,
          rB = !1,
          uc = -1,
          sc = !1;
        return this.tile.blockTiles(((Bc, Mc) => {
          if (Bc.isWidget()) {
            if (32 & Bc.flags && Mc >= cB) return !0;
            16 & Bc.flags && (rB = !0)
          } else {
            let Pc = Mc + Bc.length;
            if (Mc <= cB && (nc = Bc, Ic = cB - Mc, rB = Pc < cB), Pc >= cB && !Vc && (Vc = Bc, uc = cB - Mc, sc = Mc > cB), Mc > cB && Vc) return !0
          }
        })), nc || Vc ? (rB && Vc ? nc = null : sc && nc && (Vc = null), nc && Bc < 0 || !Vc ? nc.domIn(Ic, Bc) : Vc.domIn(uc, Bc)) : this.domAtPos(cB, Bc)
      }
      coordsAt(cB, Bc) {
        let {
          tile: nc,
          offset: Vc
        } = this.tile.resolveBlock(cB, Bc);
        return nc.isWidget() ? nc.widget instanceof Hn ? null : nc.coordsInWidget(Vc, Bc, !0) : nc.coordsIn(Vc, Bc)
      }
      lineAt(cB, Bc) {
        let {
          tile: nc
        } = this.tile.resolveBlock(cB, Bc);
        return nc.isLine() ? nc : null
      }
      coordsForChar(cB) {
        let {
          tile: Bc,
          offset: nc
        } = this.tile.resolveBlock(cB, 1);
        if (!Bc.isLine()) return null;
        return function cB(Bc, nc) {
          if (Bc.isComposite())
            for (let Vc of Bc.children) {
              if (Vc.length >= nc) {
                let Bc = cB(Vc, nc);
                if (Bc) return Bc
              }
              if ((nc -= Vc.length) < 0) break
            } else if (Bc.isText() && nc < Bc.length) {
              let cB = (0, Vc.eb)(Bc.text, nc);
              if (cB == nc) return null;
              let Ic = VB(Bc.dom, nc, cB).getClientRects();
              for (let Bc = 0; Bc < Ic.length; Bc++) {
                let cB = Ic[Bc];
                if (Bc == Ic.length - 1 || cB.top < cB.bottom && cB.left < cB.right) return cB
              }
            } return null
        }(Bc, nc)
      }
      measureVisibleLineHeights(cB) {
        let Bc = [],
          {
            from: nc,
            to: Vc
          } = cB,
          Ic = this.view.contentDOM.clientWidth,
          rB = Ic > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          uc = -1,
          sc = this.view.textDirection == PB.LTR,
          Mc = 0,
          Pc = (cB, qB, Oc) => {
            for (let Tc = 0; Tc < cB.children.length && !(qB > Vc); Tc++) {
              let Vc = cB.children[Tc],
                fc = qB + Vc.length,
                mB = Vc.dom.getBoundingClientRect(),
                {
                  height: ec
                } = mB;
              if (Oc && !Tc && (Mc += mB.top - Oc.top), Vc instanceof Sn) fc > nc && Pc(Vc, qB, mB);
              else if (qB >= nc && (Mc > 0 && Bc.push(-Mc), Bc.push(ec + Mc), Mc = 0, rB)) {
                let cB = Vc.dom.lastChild,
                  Bc = cB ? Hc(cB) : [];
                if (Bc.length) {
                  let cB = Bc[Bc.length - 1],
                    nc = sc ? cB.right - mB.left : mB.right - cB.left;
                  nc > uc && (uc = nc, this.minWidth = Ic, this.minWidthFrom = qB, this.minWidthTo = fc)
                }
              }
              Oc && Tc == cB.children.length - 1 && (Mc += Oc.bottom - mB.bottom), qB = fc + Vc.breakAfter
            }
          };
        return Pc(this.tile, 0, null), Bc
      }
      textDirectionAt(cB) {
        let {
          tile: Bc
        } = this.tile.resolveBlock(cB, 1);
        return "rtl" == getComputedStyle(Bc.dom).direction ? PB.RTL : PB.LTR
      }
      measureTextSize() {
        let cB = this.tile.blockTiles((cB => {
          if (cB.isLine() && cB.children.length && cB.length <= 20) {
            let Bc, nc = 0;
            for (let Vc of cB.children) {
              if (!Vc.isText() || /[^ -~]/.test(Vc.text)) return;
              let cB = Hc(Vc.dom);
              if (1 != cB.length) return;
              nc += cB[0].width, Bc = cB[0].height
            }
            if (nc) return {
              lineHeight: cB.dom.getBoundingClientRect().height,
              charWidth: nc / cB.length,
              textHeight: Bc
            }
          }
        }));
        if (cB) return cB;
        let Bc, nc, Vc, Ic = document.createElement("div");
        return Ic.className = "cm-line", Ic.style.width = "99999px", Ic.style.position = "absolute", Ic.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Ic);
          let cB = Hc(Ic.firstChild)[0];
          Bc = Ic.getBoundingClientRect().height, nc = cB && cB.width ? cB.width / 27 : 7, Vc = cB && cB.height ? cB.height : Bc, Ic.remove()
        })), {
          lineHeight: Bc,
          charWidth: nc,
          textHeight: Vc
        }
      }
      computeBlockGapDeco() {
        let cB = [],
          Bc = this.view.viewState;
        for (let nc = 0, Vc = 0;; Vc++) {
          let Ic = Vc == Bc.viewports.length ? null : Bc.viewports[Vc],
            rB = Ic ? Ic.from - 1 : this.view.state.doc.length;
          if (rB > nc) {
            let Vc = (Bc.lineBlockAt(rB).bottom - Bc.lineBlockAt(nc).top) / this.view.scaleY;
            cB.push(Cc.replace({
              widget: new Hn(Vc),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(nc, rB))
          }
          if (!Ic) break;
          nc = Ic.to + 1
        }
        return Cc.set(cB)
      }
      updateDeco() {
        let cB = 1,
          Bc = this.view.state.facet(Bn).map((Bc => (this.dynamicDecorationMap[cB++] = "function" == typeof Bc) ? Bc(this.view) : Bc)),
          nc = !1,
          Ic = this.view.state.facet(Vn).map(((cB, Bc) => {
            let Vc = "function" == typeof cB;
            return Vc && (nc = !0), Vc ? cB(this.view) : cB
          }));
        for (Ic.length && (this.dynamicDecorationMap[cB++] = nc, Bc.push(Vc.y.join(Ic))), this.iu = [this.editContextFormatting, ...Bc, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; cB < this.iu.length;) this.dynamicDecorationMap[cB++] = !1;
        this.blockWrappers = this.view.state.facet(nn).map((cB => "function" == typeof cB ? cB(this.view) : cB))
      }
      scrollIntoView(cB) {
        var Bc;
        if (cB.isSnapshot) {
          let Bc = this.view.viewState.lineBlockAt(cB.range.head);
          return this.view.scrollDOM.scrollTop = Bc.top - cB.yMargin, void(this.view.scrollDOM.scrollLeft = cB.xMargin)
        }
        for (let qB of this.view.state.facet(XB)) try {
          if (qB(this.view, cB.range, cB)) return !0
        } catch (Pc) {
          jn(this.view.state, Pc, "scroll handler")
        }
        let nc, {
            range: Vc
          } = cB,
          Ic = this.coordsAt(Vc.head, null !== (Bc = Vc.assoc) && void 0 !== Bc ? Bc : Vc.empty ? 0 : Vc.head > Vc.anchor ? -1 : 1);
        if (!Ic) return;
        !Vc.empty && (nc = this.coordsAt(Vc.anchor, Vc.anchor > Vc.head ? -1 : 1)) && (Ic = {
          left: Math.min(Ic.left, nc.left),
          top: Math.min(Ic.top, nc.top),
          right: Math.max(Ic.right, nc.right),
          bottom: Math.max(Ic.bottom, nc.bottom)
        });
        let rB = Mn(this.view),
          uc = {
            left: Ic.left - rB.left,
            top: Ic.top - rB.top,
            right: Ic.right + rB.right,
            bottom: Ic.bottom + rB.bottom
          },
          {
            offsetWidth: sc,
            offsetHeight: Mc
          } = this.view.scrollDOM;
        if (function(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
            let Mc = cB.ownerDocument,
              Pc = Mc.defaultView || window;
            for (let qB = cB, Oc = !1; qB && !Oc;)
              if (1 == qB.nodeType) {
                let cB, Tc = qB == Mc.body,
                  fc = 1,
                  mB = 1;
                if (Tc) cB = xB(Pc);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(qB).position) && (Oc = !0), qB.scrollHeight <= qB.clientHeight && qB.scrollWidth <= qB.clientWidth) {
                    qB = qB.assignedSlot || qB.parentNode;
                    continue
                  }
                  let Bc = qB.getBoundingClientRect();
                  ({
                    scaleX: fc,
                    scaleY: mB
                  } = dc(qB, Bc)), cB = {
                    left: Bc.left,
                    right: Bc.left + qB.clientWidth * fc,
                    top: Bc.top,
                    bottom: Bc.top + qB.clientHeight * mB
                  }
                }
                let ec = 0,
                  tB = 0;
                if ("nearest" == Ic) Bc.top < cB.top + uc ? (tB = Bc.top - (cB.top + uc), nc > 0 && Bc.bottom > cB.bottom + tB && (tB = Bc.bottom - cB.bottom + uc)) : Bc.bottom > cB.bottom - uc && (tB = Bc.bottom - cB.bottom + uc, nc < 0 && Bc.top - tB < cB.top && (tB = Bc.top - (cB.top + uc)));
                else {
                  let Vc = Bc.bottom - Bc.top,
                    rB = cB.bottom - cB.top;
                  tB = ("center" == Ic && Vc <= rB ? Bc.top + Vc / 2 - rB / 2 : "start" == Ic || "center" == Ic && nc < 0 ? Bc.top - uc : Bc.bottom - rB + uc) - cB.top
                }
                if ("nearest" == Vc ? Bc.left < cB.left + rB ? (ec = Bc.left - (cB.left + rB), nc > 0 && Bc.right > cB.right + ec && (ec = Bc.right - cB.right + rB)) : Bc.right > cB.right - rB && (ec = Bc.right - cB.right + rB, nc < 0 && Bc.left < cB.left + ec && (ec = Bc.left - (cB.left + rB))) : ec = ("center" == Vc ? Bc.left + (Bc.right - Bc.left) / 2 - (cB.right - cB.left) / 2 : "start" == Vc == sc ? Bc.left - rB : Bc.right - (cB.right - cB.left) + rB) - cB.left, ec || tB)
                  if (Tc) Pc.scrollBy(ec, tB);
                  else {
                    let cB = 0,
                      nc = 0;
                    if (tB) {
                      let cB = qB.scrollTop;
                      qB.scrollTop += tB / mB, nc = (qB.scrollTop - cB) * mB
                    }
                    if (ec) {
                      let Bc = qB.scrollLeft;
                      qB.scrollLeft += ec / fc, cB = (qB.scrollLeft - Bc) * fc
                    }
                    Bc = {
                      left: Bc.left - cB,
                      top: Bc.top - nc,
                      right: Bc.right - cB,
                      bottom: Bc.bottom - nc
                    }, cB && Math.abs(cB - ec) < 1 && (Vc = "nearest"), nc && Math.abs(nc - tB) < 1 && (Ic = "nearest")
                  } if (Tc) break;
                (Bc.top < cB.top || Bc.bottom > cB.bottom || Bc.left < cB.left || Bc.right > cB.right) && (Bc = {
                  left: Math.max(Bc.left, cB.left),
                  right: Math.min(Bc.right, cB.right),
                  top: Math.max(Bc.top, cB.top),
                  bottom: Math.min(Bc.bottom, cB.bottom)
                }), qB = qB.assignedSlot || qB.parentNode
              } else {
                if (11 != qB.nodeType) break;
                qB = qB.host
              }
          }(this.view.scrollDOM, uc, Vc.head < Vc.anchor ? -1 : 1, cB.x, cB.y, Math.max(Math.min(cB.xMargin, sc), -sc), Math.max(Math.min(cB.yMargin, Mc), -Mc), this.view.textDirection == PB.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Ic.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Ic.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let cB = this.view.docView.lineAt(Vc.head, 1);
          cB && cB.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(cB) {
        let Bc = cB => cB.isWidget() || cB.children.some(Bc);
        return Bc(this.tile.resolveBlock(cB, 1).tile)
      }
      destroy() {
        Wn(this.tile)
      }
    }

    function Wn(cB, Bc) {
      let nc = null === Bc || void 0 === Bc ? void 0 : Bc.get(cB);
      if (1 != nc) {
        null == nc && cB.destroy();
        for (let nc of cB.children) Wn(nc, Bc)
      }
    }

    function wn(cB, Bc) {
      let nc = cB.observer.selectionRange;
      if (!nc.focusNode) return null;
      let Vc = uB(nc.focusNode, nc.focusOffset),
        Ic = sB(nc.focusNode, nc.focusOffset),
        rB = Vc || Ic;
      if (Ic && Vc && Ic.node != Vc.node) {
        let Bc = fn.get(Ic.node);
        if (!Bc || Bc.isText() && Bc.text != Ic.node.nodeValue) rB = Ic;
        else if (cB.docView.lastCompositionAfterCursor) {
          let cB = fn.get(Vc.node);
          !cB || cB.isText() && cB.text != Vc.node.nodeValue || (rB = Ic)
        }
      }
      if (cB.docView.lastCompositionAfterCursor = rB != Vc, !rB) return null;
      let uc = Bc - rB.offset;
      return {
        from: uc,
        to: uc + rB.node.nodeValue.length,
        node: rB.node
      }
    }
    let kV = class {
      constructor() {
        this.changes = []
      }
      compareRange(cB, Bc) {
        oc(cB, Bc, this.changes)
      }
      comparePoint(cB, Bc) {
        oc(cB, Bc, this.changes)
      }
      boundChange(cB) {
        oc(cB, cB, this.changes)
      }
    };
    class Xn {
      constructor() {
        this.changes = []
      }
      compareRange(cB, Bc) {
        oc(cB, Bc, this.changes)
      }
      comparePoint() {}
      boundChange(cB) {
        oc(cB, cB, this.changes)
      }
    }
    class Hn extends Zc {
      constructor(cB) {
        super(), this.height = cB
      }
      toDOM() {
        let cB = document.createElement("div");
        return cB.className = "cm-gap", this.updateDOM(cB), cB
      }
      eq(cB) {
        return cB.height == this.height
      }
      updateDOM(cB) {
        return cB.style.height = this.height + "px", !0
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

    function Fn(cB, Bc, nc) {
      let Vc = cB.lineBlockAt(Bc);
      if (Array.isArray(Vc.type)) {
        let cB;
        for (let Ic of Vc.type) {
          if (Ic.from > Bc) break;
          if (!(Ic.to < Bc)) {
            if (Ic.from < Bc && Ic.to > Bc) return Ic;
            cB && (Ic.type != Qc.Text || cB.type == Ic.type && !(nc < 0 ? Ic.from < Bc : Ic.to > Bc)) || (cB = Ic)
          }
        }
        return cB || Vc
      }
      return Vc
    }

    function Jn(cB, Bc, nc, Vc) {
      let Ic = cB.state.doc.lineAt(Bc.head),
        rB = cB.bidiSpans(Ic),
        uc = cB.textDirectionAt(Ic.from);
      for (let sc = Bc, Mc = null;;) {
        let Bc = UB(Ic, rB, uc, sc, nc),
          Pc = gn;
        if (!Bc) {
          if (Ic.number == (nc ? cB.state.doc.lines : 1)) return sc;
          Pc = "\n", Ic = cB.state.doc.line(Ic.number + (nc ? 1 : -1)), rB = cB.bidiSpans(Ic), Bc = cB.visualLineSide(Ic, !nc)
        }
        if (Mc) {
          if (!Mc(Pc)) return sc
        } else {
          if (!Vc) return Bc;
          Mc = Vc(Pc)
        }
        sc = Bc
      }
    }

    function jV(cB, Bc, nc) {
      for (;;) {
        let Vc = 0;
        for (let Ic of cB) Ic.between(Bc - 1, Bc + 1, ((cB, Ic, rB) => {
          if (Bc > cB && Bc < Ic) {
            let rB = Vc || nc || (Bc - cB < Ic - Bc ? -1 : 1);
            Bc = rB < 0 ? cB : Ic, Vc = rB
          }
        }));
        if (!Vc) return Bc
      }
    }

    function Rn(cB, Bc) {
      let nc = null;
      for (let Ic = 0; Ic < Bc.Iu.length; Ic++) {
        let rB = Bc.Iu[Ic],
          uc = null;
        if (rB.empty) {
          let Bc = jV(cB, rB.from, 0);
          Bc != rB.from && (uc = Vc.m.cursor(Bc, -1))
        } else {
          let Bc = jV(cB, rB.from, -1),
            nc = jV(cB, rB.to, 1);
          Bc == rB.from && nc == rB.to || (uc = Vc.m.range(rB.from == rB.anchor ? Bc : nc, rB.from == rB.head ? Bc : nc))
        }
        uc && (nc || (nc = Bc.Iu.slice()), nc[Ic] = uc)
      }
      return nc ? Vc.m.create(nc, Bc.mainIndex) : Bc
    }

    function iV(cB, Bc, nc) {
      let Ic = jV(cB.state.facet(In).map((Bc => Bc(cB))), nc.from, Bc.head > nc.from ? -1 : 1);
      return Ic == nc.from ? nc : Vc.m.cursor(Ic, Ic < nc.from ? 1 : -1)
    }
    class Kn {
      constructor(cB, Bc) {
        this.pos = cB, this.assoc = Bc
      }
    }

    function xV(cB, Bc, nc, Ic) {
      let rB, uc = cB.contentDOM.getBoundingClientRect(),
        sc = uc.top + cB.viewState.paddingTop,
        {
          x: Mc,
          y: Pc
        } = Bc,
        qB = Pc - sc;
      for (;;) {
        if (qB < 0) return new Kn(0, 1);
        if (qB > cB.viewState.docHeight) return new Kn(cB.state.doc.length, -1);
        if (rB = cB.elementAtHeight(qB), null == Ic) break;
        if (rB.type == Qc.Text) {
          if (Ic < 0 ? rB.to < cB.viewport.from : rB.from > cB.viewport.to) break;
          let Bc = cB.docView.coordsAt(Ic < 0 ? rB.from : rB.to, Ic > 0 ? -1 : 1);
          if (Bc && (Ic < 0 ? Bc.top <= qB + sc : Bc.bottom >= qB + sc)) break
        }
        let Bc = cB.viewState.heightOracle.textHeight / 2;
        qB = Ic > 0 ? rB.bottom + Bc : rB.top - Bc
      }
      if (cB.viewport.from >= rB.to || cB.viewport.to <= rB.from) {
        if (nc) return null;
        if (rB.type == Qc.Text) {
          let Bc = function(cB, Bc, nc, Ic, rB) {
            let uc = Math.round((Ic - Bc.left) * cB.defaultCharacterWidth);
            if (cB.lineWrapping && nc.height > 1.5 * cB.defaultLineHeight) {
              let Bc = cB.viewState.heightOracle.textHeight;
              uc += Math.floor((rB - nc.top - .5 * (cB.defaultLineHeight - Bc)) / Bc) * cB.viewState.heightOracle.lineLength
            }
            let sc = cB.state.sliceDoc(nc.from, nc.to);
            return nc.from + (0, Vc.gb)(sc, uc, cB.state.tabSize)
          }(cB, uc, rB, Mc, Pc);
          return new Kn(Bc, Bc == rB.from ? 1 : -1)
        }
      }
      if (rB.type != Qc.Text) return qB < (rB.top + rB.bottom) / 2 ? new Kn(rB.from, 1) : new Kn(rB.to, -1);
      let Oc = cB.docView.lineAt(rB.from, 2);
      return Oc && Oc.length == rB.length || (Oc = cB.docView.lineAt(rB.from, -2)), new dn(cB, Mc, Pc, cB.textDirectionAt(rB.from)).scanTile(Oc, rB.from)
    }
    class dn {
      constructor(cB, Bc, nc, Vc) {
        this.view = cB, this.x = Bc, this.y = nc, this.baseDir = Vc, this.line = null, this.spans = null
      }
      bidiSpansAt(cB) {
        return (!this.line || this.line.from > cB || this.line.to < cB) && (this.line = this.view.state.doc.lineAt(cB), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(cB, Bc) {
        let {
          line: nc,
          spans: Vc
        } = this.bidiSpansAt(cB);
        return Vc[zn.find(Vc, cB - nc.from, -1, Bc)].level == this.baseDir
      }
      dirAt(cB, Bc) {
        let {
          line: nc,
          spans: Vc
        } = this.bidiSpansAt(cB);
        return Vc[zn.find(Vc, cB - nc.from, -1, Bc)].dir
      }
      bidiIn(cB, Bc) {
        let {
          spans: nc,
          line: Vc
        } = this.bidiSpansAt(cB);
        return nc.length > 1 || nc.length && (nc[0].level != this.baseDir || nc[0].to + Vc.from < Bc)
      }
      scan(cB, Bc) {
        let nc, Vc, Ic, rB = 0,
          uc = cB.length - 1,
          sc = new Set,
          Mc = this.bidiIn(cB[0], cB[uc]),
          Pc = -1,
          qB = 1e9;
        cB: for (; rB < uc;) {
          let Oc = uc - rB,
            Tc = rB + uc >> 1;
          Bc: if (sc.has(Tc)) {
            let cB = rB + Math.floor(Math.random() * Oc);
            for (let Bc = 0; Bc < Oc; Bc++) {
              if (!sc.has(cB)) {
                Tc = cB;
                break Bc
              }
              cB++, cB == uc && (cB = rB)
            }
            break cB
          } sc.add(Tc);
          let fc = Bc(Tc);
          if (fc)
            for (let Bc = 0; Bc < fc.length; Bc++) {
              let sc = fc[Bc],
                Oc = 0;
              if (!(0 == sc.width && fc.length > 1)) {
                if (sc.bottom < this.y)(!nc || nc.bottom < sc.bottom) && (nc = sc), Oc = 1;
                else if (sc.top > this.y)(!Vc || Vc.top > sc.top) && (Vc = sc), Oc = -1;
                else {
                  let cB = sc.left > this.x ? this.x - sc.left : sc.right < this.x ? this.x - sc.right : 0,
                    Bc = Math.abs(cB);
                  Bc < qB && (Pc = Tc, qB = Bc, Ic = sc), cB && (Oc = cB < 0 == (this.baseDir == PB.LTR) ? -1 : 1)
                } - 1 != Oc || Mc && !this.baseDirAt(cB[Tc], 1) ? 1 != Oc || Mc && !this.baseDirAt(cB[Tc + 1], -1) || (rB = Tc + 1) : uc = Tc
              }
            }
        }
        if (!Ic) {
          let Ic = nc && (!Vc || this.y - nc.bottom < Vc.top - this.y) ? nc : Vc;
          return this.y = (Ic.top + Ic.bottom) / 2, this.scan(cB, Bc)
        }
        if (qB) {
          if (nc && nc.bottom > Ic.top) return this.y = nc.bottom - 1, this.scan(cB, Bc);
          if (Vc && Vc.top < Ic.bottom) return this.y = Vc.top + 1, this.scan(cB, Bc)
        }
        let Oc = (Mc ? this.dirAt(cB[Pc], 1) : this.baseDir) == PB.LTR;
        return {
          i: Pc,
          after: this.x > (Ic.left + Ic.right) / 2 == Oc
        }
      }
      scanText(cB, Bc) {
        let nc = [];
        for (let rB = 0; rB < cB.length; rB = (0, Vc.eb)(cB.text, rB)) nc.push(Bc + rB);
        nc.push(Bc + cB.length);
        let Ic = this.scan(nc, (Vc => {
          let Ic = nc[Vc] - Bc,
            rB = nc[Vc + 1] - Bc;
          return VB(cB.dom, Ic, rB).getClientRects()
        }));
        return Ic.after ? new Kn(nc[Ic.i + 1], -1) : new Kn(nc[Ic.i], 1)
      }
      scanTile(cB, Bc) {
        if (!cB.length) return new Kn(Bc, 1);
        if (1 == cB.children.length) {
          let nc = cB.children[0];
          if (nc.isText()) return this.scanText(nc, Bc);
          if (nc.isComposite()) return this.scanTile(nc, Bc)
        }
        let nc = [Bc];
        for (let uc = 0, sc = Bc; uc < cB.children.length; uc++) nc.push(sc += cB.children[uc].length);
        let Vc = this.scan(nc, (Bc => {
            let nc = cB.children[Bc];
            return 48 & nc.flags ? null : (1 == nc.dom.nodeType ? nc.dom : VB(nc.dom, 0, nc.length)).getClientRects()
          })),
          Ic = cB.children[Vc.i],
          rB = nc[Vc.i];
        return Ic.isText() ? this.scanText(Ic, rB) : Ic.isComposite() ? this.scanTile(Ic, rB) : Vc.after ? new Kn(nc[Vc.i + 1], -1) : new Kn(rB, 1)
      }
    }
    const An = "\uffff";
    class Gn {
      constructor(cB, Bc) {
        this.points = cB, this.view = Bc, this.text = "", this.lineSeparator = Bc.state.facet(Vc.o.lineSeparator)
      }
      append(cB) {
        this.text += cB
      }
      lineBreak() {
        this.text += An
      }
      readRange(cB, Bc) {
        if (!cB) return this;
        let nc = cB.parentNode;
        for (let Vc = cB;;) {
          this.findPointBefore(nc, Vc);
          let cB = this.text.length;
          this.readNode(Vc);
          let Ic = fn.get(Vc),
            rB = Vc.nextSibling;
          if (rB == Bc) {
            (null === Ic || void 0 === Ic ? void 0 : Ic.breakAfter) && !rB && nc != this.view.contentDOM && this.lineBreak();
            break
          }
          let uc = fn.get(rB);
          (Ic && uc ? Ic.breakAfter : (Ic ? Ic.breakAfter : jB(Vc)) || jB(rB) && ("BR" != Vc.nodeName || (null === Ic || void 0 === Ic ? void 0 : Ic.isWidget())) && this.text.length > cB) && !BV(rB, Bc) && this.lineBreak(), Vc = rB
        }
        return this.findPointBefore(nc, Bc), this
      }
      readTextNode(cB) {
        let Bc = cB.nodeValue;
        for (let nc of this.points) nc.node == cB && (nc.pos = this.text.length + Math.min(nc.offset, Bc.length));
        for (let nc = 0, Vc = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Ic, rB = -1,
            uc = 1;
          if (this.lineSeparator ? (rB = Bc.indexOf(this.lineSeparator, nc), uc = this.lineSeparator.length) : (Ic = Vc.exec(Bc)) && (rB = Ic.index, uc = Ic[0].length), this.append(Bc.slice(nc, rB < 0 ? Bc.length : rB)), rB < 0) break;
          if (this.lineBreak(), uc > 1)
            for (let Bc of this.points) Bc.node == cB && Bc.pos > this.text.length && (Bc.pos -= uc - 1);
          nc = rB + uc
        }
      }
      readNode(cB) {
        let Bc = fn.get(cB),
          nc = Bc && Bc.overrideDOMText;
        if (null != nc) {
          this.findPointInside(cB, nc.length);
          for (let cB = nc.iter(); !cB.next().done;) cB.lineBreak ? this.lineBreak() : this.append(cB.value)
        } else 3 == cB.nodeType ? this.readTextNode(cB) : "BR" == cB.nodeName ? cB.nextSibling && this.lineBreak() : 1 == cB.nodeType && this.readRange(cB.firstChild, null)
      }
      findPointBefore(cB, Bc) {
        for (let nc of this.points) nc.node == cB && cB.childNodes[nc.offset] == Bc && (nc.pos = this.text.length)
      }
      findPointInside(cB, Bc) {
        for (let nc of this.points)(3 == cB.nodeType ? nc.node == cB : cB.contains(nc.node)) && (nc.pos = this.text.length + (cI(cB, nc.node, nc.offset) ? Bc : 0))
      }
    }

    function cI(cB, Bc, nc) {
      for (;;) {
        if (!Bc || nc < iB(Bc)) return !1;
        if (Bc == cB) return !0;
        nc = Jc(Bc) + 1, Bc = Bc.parentNode
      }
    }

    function BV(cB, Bc) {
      let nc;
      for (; cB != Bc && cB; cB = cB.nextSibling) {
        let Bc = fn.get(cB);
        if (!(null === Bc || void 0 === Bc ? void 0 : Bc.isWidget())) return !1;
        Bc && (nc || (nc = [])).push(Bc)
      }
      if (nc)
        for (let Vc of nc) {
          let cB = Vc.overrideDOMText;
          if (null === cB || void 0 === cB ? void 0 : cB.length) return !1
        }
      return !0
    }
    class nV {
      constructor(cB, Bc) {
        this.node = cB, this.offset = Bc, this.pos = -1
      }
    }
    class VV {
      constructor(cB, Bc, nc, Ic) {
        this.typeOver = Ic, this.bounds = null, this.text = "", this.domChanged = Bc > -1;
        let {
          impreciseHead: rB,
          impreciseAnchor: uc
        } = cB.docView, sc = cB.state.selection;
        if (cB.state.readOnly && Bc > -1) this.newSel = null;
        else if (Bc > -1 && (this.bounds = IV(cB.docView.tile, Bc, nc, 0))) {
          let Bc = rB || uc ? [] : function(cB) {
              let Bc = [];
              if (cB.root.activeElement != cB.contentDOM) return Bc;
              let {
                anchorNode: nc,
                anchorOffset: Vc,
                focusNode: Ic,
                focusOffset: rB
              } = cB.observer.selectionRange;
              nc && (Bc.push(new nV(nc, Vc)), Ic == nc && rB == Vc || Bc.push(new nV(Ic, rB)));
              return Bc
            }(cB),
            nc = new Gn(Bc, cB);
          nc.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = nc.text, this.newSel = function(cB, Bc) {
            if (0 == cB.length) return null;
            let nc = cB[0].pos,
              Ic = 2 == cB.length ? cB[1].pos : nc;
            return nc > -1 && Ic > -1 ? Vc.m.single(nc + Bc, Ic + Bc) : null
          }(Bc, this.bounds.from)
        } else {
          let Bc = cB.observer.selectionRange,
            nc = rB && rB.node == Bc.focusNode && rB.offset == Bc.focusOffset || !kB(cB.contentDOM, Bc.focusNode) ? sc.main.head : cB.docView.posFromDOM(Bc.focusNode, Bc.focusOffset),
            Ic = uc && uc.node == Bc.anchorNode && uc.offset == Bc.anchorOffset || !kB(cB.contentDOM, Bc.anchorNode) ? sc.main.anchor : cB.docView.posFromDOM(Bc.anchorNode, Bc.anchorOffset),
            Mc = cB.viewport;
          if ((lc.ios || lc.chrome) && sc.main.empty && nc != Ic && (Mc.from > 0 || Mc.to < cB.state.doc.length)) {
            let Bc = Math.min(nc, Ic),
              Vc = Math.max(nc, Ic),
              rB = Mc.from - Bc,
              uc = Mc.to - Vc;
            0 != rB && 1 != rB && 0 != Bc || 0 != uc && -1 != uc && Vc != cB.state.doc.length || (nc = 0, Ic = cB.state.doc.length)
          }
          if (cB.inputState.composing > -1 && sc.Iu.length > 1) this.newSel = sc.replaceRange(Vc.m.range(Ic, nc));
          else if (cB.lineWrapping && Ic == nc && (!sc.main.empty || sc.main.head != nc) && cB.inputState.lastTouchTime > Date.now() - 100) {
            let Bc = cB.coordsAtPos(nc, -1),
              Ic = 0;
            Bc && (Ic = cB.inputState.lastTouchY <= Bc.bottom ? -1 : 1), this.newSel = Vc.m.create([Vc.m.cursor(nc, Ic)])
          } else this.newSel = Vc.m.single(Ic, nc)
        }
      }
    }

    function IV(cB, Bc, nc, Vc) {
      if (cB.isComposite()) {
        let Ic = -1,
          rB = -1,
          uc = -1,
          sc = -1;
        for (let Mc = 0, Pc = Vc, qB = Vc; Mc < cB.children.length; Mc++) {
          let Vc = cB.children[Mc],
            Oc = Pc + Vc.length;
          if (Pc < Bc && Oc > nc) return IV(Vc, Bc, nc, Pc);
          if (Oc >= Bc && -1 == Ic && (Ic = Mc, rB = Pc), Pc > nc && Vc.dom.parentNode == cB.dom) {
            uc = Mc, sc = qB;
            break
          }
          qB = Oc, Pc = Oc + Vc.breakAfter
        }
        return {
          from: rB,
          to: sc < 0 ? Vc + cB.length : sc,
          startDOM: (Ic ? cB.children[Ic - 1].dom.nextSibling : null) || cB.dom.firstChild,
          endDOM: uc < cB.children.length && uc >= 0 ? cB.children[uc].dom : null
        }
      }
      return cB.isText() ? {
        from: Vc,
        to: Vc + cB.length,
        startDOM: cB.dom,
        endDOM: cB.dom.nextSibling
      } : null
    }

    function rI(cB, Bc) {
      let nc, {
          newSel: Ic
        } = Bc,
        {
          state: rB
        } = cB,
        uc = rB.selection.main,
        sc = cB.inputState.lastKeyTime > Date.now() - 100 ? cB.inputState.lastKeyCode : -1;
      if (Bc.bounds) {
        let {
          from: cB,
          to: Ic
        } = Bc.bounds, Mc = uc.from, Pc = null;
        (8 === sc || lc.android && Bc.text.length < Ic - cB) && (Mc = uc.to, Pc = "end");
        let qB, Oc, Tc = rB.doc.sliceString(cB, Ic, An);
        !uc.empty && uc.from >= cB && uc.to <= Ic && (Bc.typeOver || Tc != Bc.text) && Tc.slice(0, uc.from - cB) == Bc.text.slice(0, uc.from - cB) && Tc.slice(uc.to - cB) == Bc.text.slice(qB = Bc.text.length - (Tc.length - (uc.to - cB))) ? nc = {
          from: uc.from,
          to: uc.to,
          insert: Vc.N.of(Bc.text.slice(uc.from - cB, qB).split(An))
        } : (Oc = sV(Tc, Bc.text, Mc - cB, Pc)) && (lc.chrome && 13 == sc && Oc.toB == Oc.from + 2 && Bc.text.slice(Oc.from, Oc.toB) == An + An && Oc.toB--, nc = {
          from: cB + Oc.from,
          to: cB + Oc.toA,
          insert: Vc.N.of(Bc.text.slice(Oc.from, Oc.toB).split(An))
        })
      } else Ic && (!cB.hasFocus && rB.facet(RB) || MV(Ic, uc)) && (Ic = null);
      if (!nc && !Ic) return !1;
      if ((lc.mac || lc.android) && nc && nc.from == nc.to && nc.from == uc.head - 1 && /^\. ?$/.test(nc.insert.toString()) && "off" == cB.contentDOM.getAttribute("autocorrect") ? (Ic && 2 == nc.insert.length && (Ic = Vc.m.single(Ic.main.anchor - 1, Ic.main.head - 1)), nc = {
          from: nc.from,
          to: nc.to,
          insert: Vc.N.of([nc.insert.toString().replace(".", " ")])
        }) : rB.doc.lineAt(uc.from).to < uc.to && cB.docView.lineHasWidget(uc.to) && cB.inputState.insertingTextAt > Date.now() - 50 ? nc = {
          from: uc.from,
          to: uc.to,
          insert: rB.toText(cB.inputState.insertingText)
        } : lc.chrome && nc && nc.from == nc.to && nc.from == uc.head && "\n " == nc.insert.toString() && cB.lineWrapping && (Ic && (Ic = Vc.m.single(Ic.main.anchor - 1, Ic.main.head - 1)), nc = {
          from: uc.from,
          to: uc.to,
          insert: Vc.N.of([" "])
        }), nc) return uV(cB, nc, Ic, sc);
      if (Ic && !MV(Ic, uc)) {
        let Bc = !1,
          nc = "select";
        return cB.inputState.lastSelectionTime > Date.now() - 50 && ("select" == cB.inputState.lastSelectionOrigin && (Bc = !0), nc = cB.inputState.lastSelectionOrigin, "select.pointer" == nc && (Ic = Rn(rB.facet(In).map((Bc => Bc(cB))), Ic))), cB.dispatch({
          selection: Ic,
          scrollIntoView: Bc,
          userEvent: nc
        }), !0
      }
      return !1
    }

    function uV(cB, Bc, nc) {
      let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (lc.ios && cB.inputState.flushIOSKey(Bc)) return !0;
      let rB = cB.state.selection.main;
      if (lc.android && (Bc.to == rB.to && (Bc.from == rB.from || Bc.from == rB.from - 1 && " " == cB.state.sliceDoc(Bc.from, rB.from)) && 1 == Bc.insert.length && 2 == Bc.insert.lines && IB(cB.contentDOM, "Enter", 13) || (Bc.from == rB.from - 1 && Bc.to == rB.to && 0 == Bc.insert.length || 8 == Ic && Bc.insert.length < Bc.to - Bc.from && Bc.to > rB.head) && IB(cB.contentDOM, "Backspace", 8) || Bc.from == rB.from && Bc.to == rB.to + 1 && 0 == Bc.insert.length && IB(cB.contentDOM, "Delete", 46))) return !0;
      let uc, sc = Bc.insert.toString();
      cB.inputState.composing >= 0 && cB.inputState.composing++;
      let Mc = () => uc || (uc = function(cB, Bc, nc) {
        let Ic, rB = cB.state,
          uc = rB.selection.main,
          sc = -1;
        if (Bc.from == Bc.to && Bc.from < uc.from || Bc.from > uc.to) {
          let nc = Bc.from < uc.from ? -1 : 1,
            Vc = nc < 0 ? uc.from : uc.to,
            Ic = jV(rB.facet(In).map((Bc => Bc(cB))), Vc, nc);
          Bc.from == Ic && (sc = Ic)
        }
        if (sc > -1) Ic = {
          changes: Bc,
          selection: Vc.m.cursor(Bc.from + Bc.insert.length, -1)
        };
        else if (Bc.from >= uc.from && Bc.to <= uc.to && Bc.to - Bc.from >= (uc.to - uc.from) / 3 && (!nc || nc.main.empty && nc.main.from == Bc.from + Bc.insert.length) && cB.inputState.composing < 0) {
          let nc = uc.from < Bc.from ? rB.sliceDoc(uc.from, Bc.from) : "",
            Vc = uc.to > Bc.to ? rB.sliceDoc(Bc.to, uc.to) : "";
          Ic = rB.replaceSelection(cB.state.toText(nc + Bc.insert.sliceString(0, void 0, cB.state.lineBreak) + Vc))
        } else {
          let sc = rB.changes(Bc),
            Mc = nc && nc.main.to <= sc.newLength ? nc.main : void 0;
          if (rB.selection.Iu.length > 1 && (cB.inputState.composing >= 0 || cB.inputState.compositionPendingChange) && Bc.to <= uc.to + 10 && Bc.to >= uc.to - 10) {
            let Pc, qB = cB.state.sliceDoc(Bc.from, Bc.to),
              Oc = nc && wn(cB, nc.main.head);
            if (Oc) {
              let cB = Bc.insert.length - (Bc.to - Bc.from);
              Pc = {
                from: Oc.from,
                to: Oc.to - cB
              }
            } else Pc = cB.state.doc.lineAt(uc.head);
            let Tc = uc.to - Bc.to;
            Ic = rB.changeByRange((nc => {
              if (nc.from == uc.from && nc.to == uc.to) return {
                changes: sc,
                range: Mc || nc.map(sc)
              };
              let Ic = nc.to - Tc,
                Oc = Ic - qB.length;
              if (cB.state.sliceDoc(Oc, Ic) != qB || Ic >= Pc.from && Oc <= Pc.to) return {
                range: nc
              };
              let fc = rB.changes({
                  from: Oc,
                  to: Ic,
                  insert: Bc.insert
                }),
                mB = nc.to - uc.to;
              return {
                changes: fc,
                range: Mc ? Vc.m.range(Math.max(0, Mc.anchor + mB), Math.max(0, Mc.head + mB)) : nc.map(fc)
              }
            }))
          } else Ic = {
            changes: sc,
            selection: Mc && rB.selection.replaceRange(Mc)
          }
        }
        let Mc = "input.type";
        (cB.composing || cB.inputState.compositionPendingChange && cB.inputState.compositionEndedAt > Date.now() - 50) && (cB.inputState.compositionPendingChange = !1, Mc += ".compose", cB.inputState.compositionFirstChange && (Mc += ".start", cB.inputState.compositionFirstChange = !1));
        return rB.update(Ic, {
          userEvent: Mc,
          scrollIntoView: !0
        })
      }(cB, Bc, nc));
      return cB.state.facet(NB).some((nc => nc(cB, Bc.from, Bc.to, sc, Mc))) || cB.dispatch(Mc()), !0
    }

    function sV(cB, Bc, nc, Vc) {
      let Ic = Math.min(cB.length, Bc.length),
        rB = 0;
      for (; rB < Ic && cB.charCodeAt(rB) == Bc.charCodeAt(rB);) rB++;
      if (rB == Ic && cB.length == Bc.length) return null;
      let uc = cB.length,
        sc = Bc.length;
      for (; uc > 0 && sc > 0 && cB.charCodeAt(uc - 1) == Bc.charCodeAt(sc - 1);) uc--, sc--;
      if ("end" == Vc) {
        nc -= uc + Math.max(0, rB - Math.min(uc, sc)) - rB
      }
      if (uc < rB && cB.length < Bc.length) {
        rB -= nc <= rB && nc >= uc ? rB - nc : 0, sc = rB + (sc - uc), uc = rB
      } else if (sc < rB) {
        rB -= nc <= rB && nc >= sc ? rB - nc : 0, uc = rB + (uc - sc), sc = rB
      }
      return {
        from: rB,
        toA: uc,
        toB: sc
      }
    }

    function MV(cB, Bc) {
      return Bc.head == cB.main.head && Bc.anchor == cB.main.anchor
    }
    class PV {
      setSelectionOrigin(cB) {
        this.lastSelectionOrigin = cB, this.lastSelectionTime = Date.now()
      }
      constructor(cB) {
        this.view = cB, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = cB.hasFocus, lc.safari && cB.contentDOM.addEventListener("input", (() => null)), lc.gecko && function(cB) {
          DV.has(cB) || (DV.add(cB), cB.addEventListener("copy", (() => {})), cB.addEventListener("cut", (() => {})))
        }(cB.contentDOM.ownerDocument)
      }
      handleEvent(cB) {
        (function(cB, Bc) {
          if (!Bc.bubbles) return !0;
          if (Bc.defaultPrevented) return !1;
          for (let nc, Vc = Bc.target; Vc != cB.contentDOM; Vc = Vc.parentNode)
            if (!Vc || 11 == Vc.nodeType || (nc = fn.get(Vc)) && nc.isWidget() && !nc.isHidden && nc.widget.ignoreEvent(Bc)) return !1;
          return !0
        })(this.view, cB) && !this.ignoreDuringComposition(cB) && ("keydown" == cB.type && this.keydown(cB) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(cB.type, cB))) : this.runHandlers(cB.type, cB)))
      }
      runHandlers(cB, Bc) {
        let nc = this.handlers[cB];
        if (nc) {
          for (let cB of nc.observers) cB(this.view, Bc);
          for (let cB of nc.handlers) {
            if (Bc.defaultPrevented) break;
            if (cB(this.view, Bc)) {
              Bc.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(cB) {
        let Bc = OV(cB),
          nc = this.handlers,
          Vc = this.view.contentDOM;
        for (let Ic in Bc)
          if ("scroll" != Ic) {
            let cB = !Bc[Ic].handlers.length,
              rB = nc[Ic];
            rB && cB != !rB.handlers.length && (Vc.removeEventListener(Ic, this.handleEvent), rB = null), rB || Vc.addEventListener(Ic, this.handleEvent, {
              passive: cB
            })
          } for (let Ic in nc) "scroll" == Ic || Bc[Ic] || Vc.removeEventListener(Ic, this.handleEvent);
        this.handlers = Bc
      }
      keydown(cB) {
        if (this.lastKeyCode = cB.keyCode, this.lastKeyTime = Date.now(), 9 == cB.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != cB.keyCode && mI.indexOf(cB.keyCode) < 0 && (this.tabFocusMode = -1), lc.android && lc.chrome && !cB.synthetic && (13 == cB.keyCode || 8 == cB.keyCode)) return this.view.observer.delayAndroidKey(cB.key, cB.keyCode), !0;
        let Bc;
        return !lc.ios || cB.synthetic || cB.altKey || cB.metaKey || cB.shiftKey || !((Bc = TV.find((Bc => Bc.keyCode == cB.keyCode))) && !cB.ctrlKey || fV.indexOf(cB.key) > -1 && cB.ctrlKey) ? (229 != cB.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = Bc || cB, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(cB) {
        let Bc = this.pendingIOSKey;
        return !!Bc && (!("Enter" == Bc.key && cB && cB.from < cB.to && /^\S+$/.test(cB.insert.toString())) && (this.pendingIOSKey = void 0, IB(this.view.contentDOM, Bc.key, Bc.keyCode, Bc instanceof KeyboardEvent ? Bc : void 0)))
      }
      ignoreDuringComposition(cB) {
        return !(!/^key/.test(cB.type) || cB.synthetic) && (this.composing > 0 || !!(lc.safari && !lc.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(cB) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = cB
      }
      update(cB) {
        this.view.observer.update(cB), this.mouseSelection && this.mouseSelection.update(cB), this.draggedContent && cB.docChanged && (this.draggedContent = this.draggedContent.map(cB.changes)), cB.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function qI(cB, Bc) {
      return (nc, Vc) => {
        try {
          return Bc.call(cB, Vc, nc)
        } catch (Ic) {
          jn(nc.state, Ic)
        }
      }
    }

    function OV(cB) {
      let Bc = Object.create(null);

      function nc(cB) {
        return Bc[cB] || (Bc[cB] = {
          observers: [],
          handlers: []
        })
      }
      for (let Vc of cB) {
        let cB = Vc.spec,
          Bc = cB && cB.plugin.domEventHandlers,
          Ic = cB && cB.plugin.domEventObservers;
        if (Bc)
          for (let rB in Bc) {
            let cB = Bc[rB];
            cB && nc(rB).handlers.push(qI(Vc.value, cB))
          }
        if (Ic)
          for (let rB in Ic) {
            let cB = Ic[rB];
            cB && nc(rB).observers.push(qI(Vc.value, cB))
          }
      }
      for (let Vc in SV) nc(Vc).handlers.push(SV[Vc]);
      for (let Vc in yI) nc(Vc).observers.push(yI[Vc]);
      return Bc
    }
    const TV = [{
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
      fV = "dthko",
      mI = [16, 17, 18, 20, 91, 92, 224, 225];

    function eV(cB) {
      return .7 * Math.max(0, cB) + 8
    }
    class tI {
      constructor(cB, Bc, nc, Ic) {
        this.view = cB, this.startEvent = Bc, this.style = nc, this.mustSelect = Ic, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = Bc, this.scrollParents = Ac(cB.contentDOM), this.atoms = cB.state.facet(In).map((Bc => Bc(cB)));
        let rB = cB.contentDOM.ownerDocument;
        rB.addEventListener("mousemove", this.move = this.move.bind(this)), rB.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = Bc.shiftKey, this.multiple = cB.state.facet(Vc.o.allowMultipleSelections) && function(cB, Bc) {
          let nc = cB.state.facet(ZB);
          return nc.length ? nc[0](Bc) : lc.mac ? Bc.metaKey : Bc.ctrlKey
        }(cB, Bc), this.dragging = !(! function(cB, Bc) {
          let {
            main: nc
          } = cB.state.selection;
          if (nc.empty) return !1;
          let Vc = wc(cB.root);
          if (!Vc || 0 == Vc.rangeCount) return !0;
          let Ic = Vc.getRangeAt(0).getClientRects();
          for (let rB = 0; rB < Ic.length; rB++) {
            let cB = Ic[rB];
            if (cB.left <= Bc.clientX && cB.right >= Bc.clientX && cB.top <= Bc.clientY && cB.bottom >= Bc.clientY) return !0
          }
          return !1
        }(cB, Bc) || 1 != UV(Bc)) && null
      }
      start(cB) {
        !1 === this.dragging && this.select(cB)
      }
      move(cB) {
        if (0 == cB.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (Bc = this.startEvent, nc = cB, Math.max(Math.abs(Bc.clientX - nc.clientX), Math.abs(Bc.clientY - nc.clientY)) < 10)) return;
        var Bc, nc;
        this.select(this.lastEvent = cB);
        let Vc = 0,
          Ic = 0,
          rB = 0,
          uc = 0,
          sc = this.view.win.innerWidth,
          Mc = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: rB,
          right: sc
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: uc,
          bottom: Mc
        } = this.scrollParents.y.getBoundingClientRect());
        let Pc = Mn(this.view);
        cB.clientX - Pc.left <= rB + 6 ? Vc = -eV(rB - cB.clientX) : cB.clientX + Pc.right >= sc - 6 && (Vc = eV(cB.clientX - sc)), cB.clientY - Pc.top <= uc + 6 ? Ic = -eV(uc - cB.clientY) : cB.clientY + Pc.bottom >= Mc - 6 && (Ic = eV(cB.clientY - Mc)), this.setScrollSpeed(Vc, Ic)
      }
      up(cB) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || cB.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let cB = this.view.contentDOM.ownerDocument;
        cB.removeEventListener("mousemove", this.move), cB.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(cB, Bc) {
        this.scrollSpeed = {
          x: cB,
          y: Bc
        }, cB || Bc ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: cB,
          y: Bc
        } = this.scrollSpeed;
        cB && this.scrollParents.x && (this.scrollParents.x.scrollLeft += cB, cB = 0), Bc && this.scrollParents.y && (this.scrollParents.y.scrollTop += Bc, Bc = 0), (cB || Bc) && this.view.win.scrollBy(cB, Bc), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(cB) {
        let {
          view: Bc
        } = this, nc = Rn(this.atoms, this.style.get(cB, this.extend, this.multiple));
        !this.mustSelect && nc.eq(Bc.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: nc,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(cB) {
        cB.transactions.some((cB => cB.isUserEvent("input.type"))) ? this.destroy() : this.style.update(cB) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const SV = Object.create(null),
      yI = Object.create(null),
      zI = lc.ie && lc.ie_version < 15 || lc.ios && lc.webkit_version < 604;

    function pV(cB, Bc, nc) {
      for (let Vc of cB.facet(Bc)) nc = Vc(nc, cB);
      return nc
    }

    function hV(cB, Bc) {
      Bc = pV(cB.state, oB, Bc);
      let nc, {
          state: Ic
        } = cB,
        rB = 1,
        uc = Ic.toText(Bc),
        sc = uc.lines == Ic.selection.Iu.length;
      if (null != ZV && Ic.selection.Iu.every((cB => cB.empty)) && ZV == uc.toString()) {
        let cB = -1;
        nc = Ic.changeByRange((nc => {
          let Mc = Ic.doc.lineAt(nc.from);
          if (Mc.from == cB) return {
            range: nc
          };
          cB = Mc.from;
          let Pc = Ic.toText((sc ? uc.line(rB++).text : Bc) + Ic.lineBreak);
          return {
            changes: {
              from: Mc.from,
              insert: Pc
            },
            range: Vc.m.cursor(nc.from + Pc.length)
          }
        }))
      } else nc = sc ? Ic.changeByRange((cB => {
        let Bc = uc.line(rB++);
        return {
          changes: {
            from: cB.from,
            to: cB.to,
            insert: Bc.text
          },
          range: Vc.m.cursor(cB.from + Bc.length)
        }
      })) : Ic.replaceSelection(uc);
      cB.dispatch(nc, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function aI(cB, Bc, nc, Ic) {
      if (1 == Ic) return Vc.m.cursor(Bc, nc);
      if (2 == Ic) return function(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Ic = cB.charCategorizer(Bc),
          rB = cB.doc.lineAt(Bc),
          uc = Bc - rB.from;
        if (0 == rB.length) return Vc.m.cursor(Bc);
        0 == uc ? nc = 1 : uc == rB.length && (nc = -1);
        let sc = uc,
          Mc = uc;
        nc < 0 ? sc = (0, Vc.eb)(rB.text, uc, !1) : Mc = (0, Vc.eb)(rB.text, uc);
        let Pc = Ic(rB.text.slice(sc, Mc));
        for (; sc > 0;) {
          let cB = (0, Vc.eb)(rB.text, sc, !1);
          if (Ic(rB.text.slice(cB, sc)) != Pc) break;
          sc = cB
        }
        for (; Mc < rB.length;) {
          let cB = (0, Vc.eb)(rB.text, Mc);
          if (Ic(rB.text.slice(Mc, cB)) != Pc) break;
          Mc = cB
        }
        return Vc.m.range(sc + rB.from, Mc + rB.from)
      }(cB.state, Bc, nc);
      {
        let Ic = cB.docView.lineAt(Bc, nc),
          rB = cB.state.doc.lineAt(Ic ? Ic.posAtEnd : Bc),
          uc = Ic ? Ic.posAtStart : rB.from,
          sc = Ic ? Ic.posAtEnd : rB.to;
        return sc < cB.state.doc.length && sc == rB.to && sc++, Vc.m.range(uc, sc)
      }
    }
    yI.scroll = cB => {
      cB.inputState.lastScrollTop = cB.scrollDOM.scrollTop, cB.inputState.lastScrollLeft = cB.scrollDOM.scrollLeft
    }, yI.wheel = yI.mousewheel = cB => {
      cB.inputState.lastWheelEvent = Date.now()
    }, SV.keydown = (cB, Bc) => (cB.inputState.setSelectionOrigin("select"), 27 == Bc.keyCode && 0 != cB.inputState.tabFocusMode && (cB.inputState.tabFocusMode = Date.now() + 2e3), !1), yI.touchstart = (cB, Bc) => {
      let nc = cB.inputState,
        Vc = Bc.targetTouches[0];
      nc.lastTouchTime = Date.now(), Vc && (nc.lastTouchX = Vc.clientX, nc.lastTouchY = Vc.clientY), nc.setSelectionOrigin("select.pointer")
    }, yI.touchmove = cB => {
      cB.inputState.setSelectionOrigin("select.pointer")
    }, SV.mousedown = (cB, Bc) => {
      if (cB.observer.flush(), cB.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let nc = null;
      for (let Vc of cB.state.facet(CB))
        if (nc = Vc(cB, Bc), nc) break;
      if (nc || 0 != Bc.button || (nc = function(cB, Bc) {
          let nc = cB.posAndSideAtCoords({
              x: Bc.clientX,
              y: Bc.clientY
            }, !1),
            Ic = UV(Bc),
            rB = cB.state.selection;
          return {
            update(cB) {
              cB.docChanged && (nc.pos = cB.changes.mapPos(nc.pos), rB = rB.map(cB.changes))
            },
            get(Bc, uc, sc) {
              let Mc, Pc = cB.posAndSideAtCoords({
                  x: Bc.clientX,
                  y: Bc.clientY
                }, !1),
                qB = aI(cB, Pc.pos, Pc.assoc, Ic);
              if (nc.pos != Pc.pos && !uc) {
                let Bc = aI(cB, nc.pos, nc.assoc, Ic),
                  rB = Math.min(Bc.from, qB.from),
                  uc = Math.max(Bc.to, qB.to);
                qB = rB < qB.from ? Vc.m.range(rB, uc, qB.assoc) : Vc.m.range(uc, rB, qB.assoc)
              }
              return uc ? rB.replaceRange(rB.main.extend(qB.from, qB.to, qB.assoc)) : sc && 1 == Ic && rB.Iu.length > 1 && (Mc = function(cB, Bc) {
                for (let nc = 0; nc < cB.Iu.length; nc++) {
                  let {
                    from: Ic,
                    to: rB
                  } = cB.Iu[nc];
                  if (Ic <= Bc && rB >= Bc) return Vc.m.create(cB.Iu.slice(0, nc).concat(cB.Iu.slice(nc + 1)), cB.mainIndex == nc ? 0 : cB.mainIndex - (cB.mainIndex > nc ? 1 : 0))
                }
                return null
              }(rB, Pc.pos)) ? Mc : sc ? rB.addRange(qB) : Vc.m.create([qB])
            }
          }
        }(cB, Bc)), nc) {
        let Vc = !cB.hasFocus;
        cB.inputState.startMouseSelection(new tI(cB, Bc, nc, Vc)), Vc && cB.observer.ignore((() => {
          nB(cB.contentDOM);
          let Bc = cB.root.activeElement;
          Bc && !Bc.contains(cB.contentDOM) && Bc.blur()
        }));
        let Ic = cB.inputState.mouseSelection;
        if (Ic) return Ic.start(Bc), !1 === Ic.dragging
      } else cB.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const lV = lc.ie && lc.ie_version <= 11;
    let YV = null,
      LV = 0,
      gI = 0;

    function UV(cB) {
      if (!lV) return cB.detail;
      let Bc = YV,
        nc = gI;
      return YV = cB, gI = Date.now(), LV = !Bc || nc > Date.now() - 400 && Math.abs(Bc.clientX - cB.clientX) < 2 && Math.abs(Bc.clientY - cB.clientY) < 2 ? (LV + 1) % 3 : 1
    }

    function bI(cB, Bc, nc, Vc) {
      if (!(nc = pV(cB.state, oB, nc))) return;
      let Ic = cB.posAtCoords({
          x: Bc.clientX,
          y: Bc.clientY
        }, !1),
        {
          draggedContent: rB
        } = cB.inputState,
        uc = Vc && rB && function(cB, Bc) {
          let nc = cB.state.facet(QB);
          return nc.length ? nc[0](Bc) : lc.mac ? !Bc.altKey : !Bc.ctrlKey
        }(cB, Bc) ? {
          from: rB.from,
          to: rB.to
        } : null,
        sc = {
          from: Ic,
          insert: nc
        },
        Mc = cB.state.changes(uc ? [uc, sc] : sc);
      cB.focus(), cB.dispatch({
        changes: Mc,
        selection: {
          anchor: Mc.mapPos(Ic, -1),
          head: Mc.mapPos(Ic, 1)
        },
        userEvent: uc ? "move.drop" : "input.drop"
      }), cB.inputState.draggedContent = null
    }
    SV.dragstart = (cB, Bc) => {
      let {
        selection: {
          main: nc
        }
      } = cB.state;
      if (Bc.target.draggable) {
        let Ic = cB.docView.tile.nearest(Bc.target);
        if (Ic && Ic.isWidget()) {
          let cB = Ic.posAtStart,
            Bc = cB + Ic.length;
          (cB >= nc.to || Bc <= nc.from) && (nc = Vc.m.range(cB, Bc))
        }
      }
      let {
        inputState: Ic
      } = cB;
      return Ic.mouseSelection && (Ic.mouseSelection.dragging = !0), Ic.draggedContent = nc, Bc.dataTransfer && (Bc.dataTransfer.setData("Text", pV(cB.state, WB, cB.state.sliceDoc(nc.from, nc.to))), Bc.dataTransfer.effectAllowed = "copyMove"), !1
    }, SV.dragend = cB => (cB.inputState.draggedContent = null, !1), SV.drop = (cB, Bc) => {
      if (!Bc.dataTransfer) return !1;
      if (cB.state.readOnly) return !0;
      let nc = Bc.dataTransfer.files;
      if (nc && nc.length) {
        let Vc = Array(nc.length),
          Ic = 0,
          rB = () => {
            ++Ic == nc.length && bI(cB, Bc, Vc.filter((cB => null != cB)).join(cB.state.lineBreak), !1)
          };
        for (let cB = 0; cB < nc.length; cB++) {
          let Bc = new FileReader;
          Bc.onerror = rB, Bc.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(Bc.result) || (Vc[cB] = Bc.result), rB()
          }, Bc.readAsText(nc[cB])
        }
        return !0
      } {
        let nc = Bc.dataTransfer.getData("Text");
        if (nc) return bI(cB, Bc, nc, !0), !0
      }
      return !1
    }, SV.paste = (cB, Bc) => {
      if (cB.state.readOnly) return !0;
      cB.observer.flush();
      let nc = zI ? null : Bc.clipboardData;
      return nc ? (hV(cB, nc.getData("text/plain") || nc.getData("text/uri-list")), !0) : (function(cB) {
        let Bc = cB.dom.parentNode;
        if (!Bc) return;
        let nc = Bc.appendChild(document.createElement("textarea"));
        nc.style.cssText = "position: fixed; left: -10000px; top: 10px", nc.focus(), setTimeout((() => {
          cB.focus(), nc.remove(), hV(cB, nc.value)
        }), 50)
      }(cB), !1)
    };
    let ZV = null;
    SV.copy = SV.cut = (cB, Bc) => {
      if (!Xc(cB.contentDOM, cB.observer.selectionRange)) return !1;
      let {
        text: nc,
        Iu: Vc,
        linewise: Ic
      } = function(cB) {
        let Bc = [],
          nc = [],
          Vc = !1;
        for (let Ic of cB.selection.Iu) Ic.empty || (Bc.push(cB.sliceDoc(Ic.from, Ic.to)), nc.push(Ic));
        if (!Bc.length) {
          let Ic = -1;
          for (let {
              from: Vc
            }
            of cB.selection.Iu) {
            let rB = cB.doc.lineAt(Vc);
            rB.number > Ic && (Bc.push(rB.text), nc.push({
              from: rB.from,
              to: Math.min(cB.doc.length, rB.to + 1)
            })), Ic = rB.number
          }
          Vc = !0
        }
        return {
          text: pV(cB, WB, Bc.join(cB.lineBreak)),
          Iu: nc,
          linewise: Vc
        }
      }(cB.state);
      if (!nc && !Ic) return !1;
      ZV = Ic ? nc : null, "cut" != Bc.type || cB.state.readOnly || cB.dispatch({
        changes: Vc,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let rB = zI ? null : Bc.clipboardData;
      return rB ? (rB.clearData(), rB.setData("text/plain", nc), !0) : (function(cB, Bc) {
        let nc = cB.dom.parentNode;
        if (!nc) return;
        let Vc = nc.appendChild(document.createElement("textarea"));
        Vc.style.cssText = "position: fixed; left: -10000px; top: 10px", Vc.value = Bc, Vc.focus(), Vc.selectionEnd = Bc.length, Vc.selectionStart = 0, setTimeout((() => {
          Vc.remove(), cB.focus()
        }), 50)
      }(cB, nc), !1)
    };
    const QV = Vc.c.define();

    function CV(cB, Bc) {
      let nc = [];
      for (let Vc of cB.facet(EB)) {
        let Ic = Vc(cB, Bc);
        Ic && nc.push(Ic)
      }
      return nc.length ? cB.update({
        effects: nc,
        annotations: QV.of(!0)
      }) : null
    }

    function vI(cB) {
      setTimeout((() => {
        let Bc = cB.hasFocus;
        if (Bc != cB.inputState.notifiedFocused) {
          let nc = CV(cB.state, Bc);
          nc ? cB.dispatch(nc) : cB.update([])
        }
      }), 10)
    }
    yI.focus = cB => {
      cB.inputState.lastFocusTime = Date.now(), cB.scrollDOM.scrollTop || !cB.inputState.lastScrollTop && !cB.inputState.lastScrollLeft || (cB.scrollDOM.scrollTop = cB.inputState.lastScrollTop, cB.scrollDOM.scrollLeft = cB.inputState.lastScrollLeft), vI(cB)
    }, yI.blur = cB => {
      cB.observer.clearSelectionRange(), vI(cB)
    }, yI.compositionstart = yI.compositionupdate = cB => {
      cB.observer.editContext || (null == cB.inputState.compositionFirstChange && (cB.inputState.compositionFirstChange = !0), cB.inputState.composing < 0 && (cB.inputState.composing = 0))
    }, yI.compositionend = cB => {
      cB.observer.editContext || (cB.inputState.composing = -1, cB.inputState.compositionEndedAt = Date.now(), cB.inputState.compositionPendingKey = !0, cB.inputState.compositionPendingChange = cB.observer.pendingRecords().length > 0, cB.inputState.compositionFirstChange = null, lc.chrome && lc.android ? cB.observer.flushSoon() : cB.inputState.compositionPendingChange ? Promise.resolve().then((() => cB.observer.flush())) : setTimeout((() => {
        cB.inputState.composing < 0 && cB.docView.hasComposition && cB.update([])
      }), 50))
    }, yI.contextmenu = cB => {
      cB.inputState.lastContextMenu = Date.now()
    }, SV.beforeinput = (cB, Bc) => {
      var nc, Vc;
      if ("insertText" != Bc.inputType && "insertCompositionText" != Bc.inputType || (cB.inputState.insertingText = Bc.data, cB.inputState.insertingTextAt = Date.now()), "insertReplacementText" == Bc.inputType && cB.observer.editContext) {
        let Vc = null === (nc = Bc.dataTransfer) || void 0 === nc ? void 0 : nc.getData("text/plain"),
          Ic = Bc.getTargetRanges();
        if (Vc && Ic.length) {
          let Bc = Ic[0],
            nc = cB.posAtDOM(Bc.startContainer, Bc.startOffset),
            rB = cB.posAtDOM(Bc.endContainer, Bc.endOffset);
          return uV(cB, {
            from: nc,
            to: rB,
            insert: cB.state.toText(Vc)
          }, null), !0
        }
      }
      let Ic;
      if (lc.chrome && lc.android && (Ic = TV.find((cB => cB.inputType == Bc.inputType))) && (cB.observer.delayAndroidKey(Ic.key, Ic.keyCode), "Backspace" == Ic.key || "Delete" == Ic.key)) {
        let Bc = (null === (Vc = window.visualViewport) || void 0 === Vc ? void 0 : Vc.height) || 0;
        setTimeout((() => {
          var nc;
          ((null === (nc = window.visualViewport) || void 0 === nc ? void 0 : nc.height) || 0) > Bc + 10 && cB.hasFocus && (cB.contentDOM.blur(), cB.focus())
        }), 100)
      }
      return lc.ios && "deleteContentForward" == Bc.inputType && cB.observer.flushSoon(), lc.safari && "insertText" == Bc.inputType && cB.inputState.composing >= 0 && setTimeout((() => yI.compositionend(cB, Bc)), 20), !1
    };
    const DV = new Set;
    const NV = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let EV = !1;

    function oV() {
      EV = !1
    }
    class WV {
      constructor(cB) {
        this.lineWrapping = cB, this.doc = Vc.N.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(cB, Bc) {
        let nc = this.doc.lineAt(Bc).number - this.doc.lineAt(cB).number + 1;
        return this.lineWrapping && (nc += Math.max(0, Math.ceil((Bc - cB - nc * this.lineLength * .5) / this.lineLength))), this.lineHeight * nc
      }
      heightForLine(cB) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((cB - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(cB) {
        return this.doc = cB, this
      }
      mustRefreshForWrapping(cB) {
        return NV.indexOf(cB) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(cB) {
        let Bc = !1;
        for (let nc = 0; nc < cB.length; nc++) {
          let Vc = cB[nc];
          Vc < 0 ? nc++ : this.heightSamples[Math.floor(10 * Vc)] || (Bc = !0, this.heightSamples[Math.floor(10 * Vc)] = !0)
        }
        return Bc
      }
      refresh(cB, Bc, nc, Vc, Ic, rB) {
        let uc = NV.indexOf(cB) > -1,
          sc = Math.abs(Bc - this.lineHeight) > .3 || this.lineWrapping != uc || Math.abs(nc - this.charWidth) > .1;
        if (this.lineWrapping = uc, this.lineHeight = Bc, this.charWidth = nc, this.textHeight = Vc, this.lineLength = Ic, sc) {
          this.heightSamples = {};
          for (let cB = 0; cB < rB.length; cB++) {
            let Bc = rB[cB];
            Bc < 0 ? cB++ : this.heightSamples[Math.floor(10 * Bc)] = !0
          }
        }
        return sc
      }
    }
    class wV {
      constructor(cB, Bc) {
        this.from = cB, this.heights = Bc, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class kI {
      constructor(cB, Bc, nc, Vc, Ic) {
        this.from = cB, this.length = Bc, this.top = nc, this.height = Vc, this._content = Ic
      }
      get type() {
        return "number" == typeof this._content ? Qc.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof Nc ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(cB) {
        let Bc = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(cB._content) ? cB._content : [cB]);
        return new kI(this.from, this.length + cB.length, this.top, this.height + cB.height, Bc)
      }
    }
    var XV = function(cB) {
      return cB[cB.ByPos = 0] = "ByPos", cB[cB.ByHeight = 1] = "ByHeight", cB[cB.ByPosNoHeight = 2] = "ByPosNoHeight", cB
    }(XV || (XV = {}));
    const HV = .001;
    class FV {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = cB, this.height = Bc, this.flags = nc
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(cB) {
        this.flags = (cB ? 2 : 0) | -3 & this.flags
      }
      setHeight(cB) {
        this.height != cB && (Math.abs(this.height - cB) > HV && (EV = !0), this.height = cB)
      }
      replace(cB, Bc, nc) {
        return FV.of(nc)
      }
      decomposeLeft(cB, Bc) {
        Bc.push(this)
      }
      decomposeRight(cB, Bc) {
        Bc.push(this)
      }
      applyChanges(cB, Bc, nc, Vc) {
        let Ic = this,
          rB = nc.doc;
        for (let uc = Vc.length - 1; uc >= 0; uc--) {
          let {
            fromA: sc,
            toA: Mc,
            fromB: Pc,
            toB: qB
          } = Vc[uc], Oc = Ic.lineAt(sc, XV.ByPosNoHeight, nc.setDoc(Bc), 0, 0), Tc = Oc.to >= Mc ? Oc : Ic.lineAt(Mc, XV.ByPosNoHeight, nc, 0, 0);
          for (qB += Tc.to - Mc, Mc = Tc.to; uc > 0 && Oc.from <= Vc[uc - 1].toA;) sc = Vc[uc - 1].fromA, Pc = Vc[uc - 1].fromB, uc--, sc < Oc.from && (Oc = Ic.lineAt(sc, XV.ByPosNoHeight, nc, 0, 0));
          Pc += Oc.from - sc, sc = Oc.from;
          let fc = AV.build(nc.setDoc(rB), cB, Pc, qB);
          Ic = JV(Ic, Ic.replace(sc, Mc, fc))
        }
        return Ic.updateHeight(nc, 0)
      }
      static empty() {
        return new iI(0, 0, 0)
      }
      static of (cB) {
        if (1 == cB.length) return cB[0];
        let Bc = 0,
          nc = cB.length,
          Vc = 0,
          Ic = 0;
        for (;;)
          if (Bc == nc)
            if (Vc > 2 * Ic) {
              let Ic = cB[Bc - 1];
              Ic.break ? cB.splice(--Bc, 1, Ic.left, null, Ic.right) : cB.splice(--Bc, 1, Ic.left, Ic.right), nc += 1 + Ic.break, Vc -= Ic.size
            } else {
              if (!(Ic > 2 * Vc)) break;
              {
                let Bc = cB[nc];
                Bc.break ? cB.splice(nc, 1, Bc.left, null, Bc.right) : cB.splice(nc, 1, Bc.left, Bc.right), nc += 2 + Bc.break, Ic -= Bc.size
              }
            }
        else if (Vc < Ic) {
          let nc = cB[Bc++];
          nc && (Vc += nc.size)
        } else {
          let Bc = cB[--nc];
          Bc && (Ic += Bc.size)
        }
        let rB = 0;
        return null == cB[Bc - 1] ? (rB = 1, Bc--) : null == cB[Bc] && (rB = 1, nc++), new xI(FV.of(cB.slice(0, Bc)), rB, FV.of(cB.slice(nc)))
      }
    }

    function JV(cB, Bc) {
      return cB == Bc ? cB : (cB.constructor != Bc.constructor && (EV = !0), Bc)
    }
    FV.prototype.size = 1;
    const jI = Cc.replace({});
    class RV extends FV {
      constructor(cB, Bc, nc) {
        super(cB, Bc), this.deco = nc, this.spaceAbove = 0
      }
      mainBlock(cB, Bc) {
        return new kI(Bc, this.length, cB + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(cB, Bc, nc, Vc) {
        return this.spaceAbove && cB < nc + this.spaceAbove ? new kI(Vc, 0, nc, this.spaceAbove, jI) : this.mainBlock(nc, Vc)
      }
      lineAt(cB, Bc, nc, Vc, Ic) {
        let rB = this.mainBlock(Vc, Ic);
        return this.spaceAbove ? this.blockAt(0, nc, Vc, Ic).join(rB) : rB
      }
      forEachLine(cB, Bc, nc, Vc, Ic, rB) {
        cB <= Ic + this.length && Bc >= Ic && rB(this.lineAt(0, XV.ByPos, nc, Vc, Ic))
      }
      setMeasuredHeight(cB) {
        let Bc = cB.heights[cB.index++];
        Bc < 0 ? (this.spaceAbove = -Bc, Bc = cB.heights[cB.index++]) : this.spaceAbove = 0, this.setHeight(Bc)
      }
      updateHeight(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 3 ? arguments[3] : void 0;
        return nc && nc.from <= Bc && nc.more && this.setMeasuredHeight(nc), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class iI extends RV {
      constructor(cB, Bc, nc) {
        super(cB, Bc, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = nc
      }
      mainBlock(cB, Bc) {
        return new kI(Bc, this.length, cB + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(cB, Bc, nc) {
        let Vc = nc[0];
        return 1 == nc.length && (Vc instanceof iI || Vc instanceof KV && 4 & Vc.flags) && Math.abs(this.length - Vc.length) < 10 ? (Vc instanceof KV ? Vc = new iI(Vc.length, this.height, this.spaceAbove) : Vc.height = this.height, this.outdated || (Vc.outdated = !1), Vc) : FV.of(nc)
      }
      updateHeight(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        return Vc && Vc.from <= Bc && Vc.more ? this.setMeasuredHeight(Vc) : (nc || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, cB.heightForLine(this.length - this.collapsed)) + this.breaks * cB.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class KV extends FV {
      constructor(cB) {
        super(cB, 0)
      }
      heightMetrics(cB, Bc) {
        let nc, Vc = cB.doc.lineAt(Bc).number,
          Ic = cB.doc.lineAt(Bc + this.length).number,
          rB = Ic - Vc + 1,
          uc = 0;
        if (cB.lineWrapping) {
          let Bc = Math.min(this.height, cB.lineHeight * rB);
          nc = Bc / rB, this.length > rB + 1 && (uc = (this.height - Bc) / (this.length - rB - 1))
        } else nc = this.height / rB;
        return {
          firstLine: Vc,
          lastLine: Ic,
          perLine: nc,
          perChar: uc
        }
      }
      blockAt(cB, Bc, nc, Vc) {
        let {
          firstLine: Ic,
          lastLine: rB,
          perLine: uc,
          perChar: sc
        } = this.heightMetrics(Bc, Vc);
        if (Bc.lineWrapping) {
          let Ic = Vc + (cB < Bc.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (cB - nc) / this.height)) * this.length)),
            rB = Bc.doc.lineAt(Ic),
            Mc = uc + rB.length * sc,
            Pc = Math.max(nc, cB - Mc / 2);
          return new kI(rB.from, rB.length, Pc, Mc, 0)
        } {
          let Vc = Math.max(0, Math.min(rB - Ic, Math.floor((cB - nc) / uc))),
            {
              from: sc,
              length: Mc
            } = Bc.doc.line(Ic + Vc);
          return new kI(sc, Mc, nc + uc * Vc, uc, 0)
        }
      }
      lineAt(cB, Bc, nc, Vc, Ic) {
        if (Bc == XV.ByHeight) return this.blockAt(cB, nc, Vc, Ic);
        if (Bc == XV.ByPosNoHeight) {
          let {
            from: Bc,
            to: Vc
          } = nc.doc.lineAt(cB);
          return new kI(Bc, Vc - Bc, 0, 0, 0)
        }
        let {
          firstLine: rB,
          perLine: uc,
          perChar: sc
        } = this.heightMetrics(nc, Ic), Mc = nc.doc.lineAt(cB), Pc = uc + Mc.length * sc, qB = Mc.number - rB, Oc = Vc + uc * qB + sc * (Mc.from - Ic - qB);
        return new kI(Mc.from, Mc.length, Math.max(Vc, Math.min(Oc, Vc + this.height - Pc)), Pc, 0)
      }
      forEachLine(cB, Bc, nc, Vc, Ic, rB) {
        cB = Math.max(cB, Ic), Bc = Math.min(Bc, Ic + this.length);
        let {
          firstLine: uc,
          perLine: sc,
          perChar: Mc
        } = this.heightMetrics(nc, Ic);
        for (let Pc = cB, qB = Vc; Pc <= Bc;) {
          let Bc = nc.doc.lineAt(Pc);
          if (Pc == cB) {
            let nc = Bc.number - uc;
            qB += sc * nc + Mc * (cB - Ic - nc)
          }
          let Vc = sc + Mc * Bc.length;
          rB(new kI(Bc.from, Bc.length, qB, Vc, 0)), qB += Vc, Pc = Bc.to + 1
        }
      }
      replace(cB, Bc, nc) {
        let Vc = this.length - Bc;
        if (Vc > 0) {
          let cB = nc[nc.length - 1];
          cB instanceof KV ? nc[nc.length - 1] = new KV(cB.length + Vc) : nc.push(null, new KV(Vc - 1))
        }
        if (cB > 0) {
          let Bc = nc[0];
          Bc instanceof KV ? nc[0] = new KV(cB + Bc.length) : nc.unshift(new KV(cB - 1), null)
        }
        return FV.of(nc)
      }
      decomposeLeft(cB, Bc) {
        Bc.push(new KV(cB - 1), null)
      }
      decomposeRight(cB, Bc) {
        Bc.push(null, new KV(this.length - cB - 1))
      }
      updateHeight(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 ? arguments[3] : void 0,
          Ic = Bc + this.length;
        if (Vc && Vc.from <= Bc + this.length && Vc.more) {
          let nc = [],
            rB = Math.max(Bc, Vc.from),
            uc = -1;
          for (Vc.from > Bc && nc.push(new KV(Vc.from - Bc - 1).updateHeight(cB, Bc)); rB <= Ic && Vc.more;) {
            let Bc = cB.doc.lineAt(rB).length;
            nc.length && nc.push(null);
            let Ic = Vc.heights[Vc.index++],
              sc = 0;
            Ic < 0 && (sc = -Ic, Ic = Vc.heights[Vc.index++]), -1 == uc ? uc = Ic : Math.abs(Ic - uc) >= HV && (uc = -2);
            let Mc = new iI(Bc, Ic, sc);
            Mc.outdated = !1, nc.push(Mc), rB += Bc + 1
          }
          rB <= Ic && nc.push(null, new KV(Ic - rB).updateHeight(cB, rB));
          let sc = FV.of(nc);
          return (uc < 0 || Math.abs(sc.height - this.height) >= HV || Math.abs(uc - this.heightMetrics(cB, Bc).perLine) >= HV) && (EV = !0), JV(this, sc)
        }
        return (nc || this.outdated) && (this.setHeight(cB.heightForGap(Bc, Bc + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class xI extends FV {
      constructor(cB, Bc, nc) {
        super(cB.length + Bc + nc.length, cB.height + nc.height, Bc | (cB.outdated || nc.outdated ? 2 : 0)), this.left = cB, this.right = nc, this.size = cB.size + nc.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(cB, Bc, nc, Vc) {
        let Ic = nc + this.left.height;
        return cB < Ic ? this.left.blockAt(cB, Bc, nc, Vc) : this.right.blockAt(cB, Bc, Ic, Vc + this.left.length + this.break)
      }
      lineAt(cB, Bc, nc, Vc, Ic) {
        let rB = Vc + this.left.height,
          uc = Ic + this.left.length + this.break,
          sc = Bc == XV.ByHeight ? cB < rB : cB < uc,
          Mc = sc ? this.left.lineAt(cB, Bc, nc, Vc, Ic) : this.right.lineAt(cB, Bc, nc, rB, uc);
        if (this.break || (sc ? Mc.to < uc : Mc.from > uc)) return Mc;
        let Pc = Bc == XV.ByPosNoHeight ? XV.ByPosNoHeight : XV.ByPos;
        return sc ? Mc.join(this.right.lineAt(uc, Pc, nc, rB, uc)) : this.left.lineAt(uc, Pc, nc, Vc, Ic).join(Mc)
      }
      forEachLine(cB, Bc, nc, Vc, Ic, rB) {
        let uc = Vc + this.left.height,
          sc = Ic + this.left.length + this.break;
        if (this.break) cB < sc && this.left.forEachLine(cB, Bc, nc, Vc, Ic, rB), Bc >= sc && this.right.forEachLine(cB, Bc, nc, uc, sc, rB);
        else {
          let Mc = this.lineAt(sc, XV.ByPos, nc, Vc, Ic);
          cB < Mc.from && this.left.forEachLine(cB, Mc.from - 1, nc, Vc, Ic, rB), Mc.to >= cB && Mc.from <= Bc && rB(Mc), Bc > Mc.to && this.right.forEachLine(Mc.to + 1, Bc, nc, uc, sc, rB)
        }
      }
      replace(cB, Bc, nc) {
        let Vc = this.left.length + this.break;
        if (Bc < Vc) return this.balanced(this.left.replace(cB, Bc, nc), this.right);
        if (cB > this.left.length) return this.balanced(this.left, this.right.replace(cB - Vc, Bc - Vc, nc));
        let Ic = [];
        cB > 0 && this.decomposeLeft(cB, Ic);
        let rB = Ic.length;
        for (let uc of nc) Ic.push(uc);
        if (cB > 0 && dV(Ic, rB - 1), Bc < this.length) {
          let cB = Ic.length;
          this.decomposeRight(Bc, Ic), dV(Ic, cB)
        }
        return FV.of(Ic)
      }
      decomposeLeft(cB, Bc) {
        let nc = this.left.length;
        if (cB <= nc) return this.left.decomposeLeft(cB, Bc);
        Bc.push(this.left), this.break && (nc++, cB >= nc && Bc.push(null)), cB > nc && this.right.decomposeLeft(cB - nc, Bc)
      }
      decomposeRight(cB, Bc) {
        let nc = this.left.length,
          Vc = nc + this.break;
        if (cB >= Vc) return this.right.decomposeRight(cB - Vc, Bc);
        cB < nc && this.left.decomposeRight(cB, Bc), this.break && cB < Vc && Bc.push(null), Bc.push(this.right)
      }
      balanced(cB, Bc) {
        return cB.size > 2 * Bc.size || Bc.size > 2 * cB.size ? FV.of(this.break ? [cB, null, Bc] : [cB, Bc]) : (this.left = JV(this.left, cB), this.right = JV(this.right, Bc), this.setHeight(cB.height + Bc.height), this.outdated = cB.outdated || Bc.outdated, this.size = cB.size + Bc.size, this.length = cB.length + this.break+Bc.length, this)
      }
      updateHeight(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Ic,
            right: rB
          } = this,
          uc = Bc + Ic.length + this.break,
          sc = null;
        return Vc && Vc.from <= Bc + Ic.length && Vc.more ? sc = Ic = Ic.updateHeight(cB, Bc, nc, Vc) : Ic.updateHeight(cB, Bc, nc), Vc && Vc.from <= uc + rB.length && Vc.more ? sc = rB = rB.updateHeight(cB, uc, nc, Vc) : rB.updateHeight(cB, uc, nc), sc ? this.balanced(Ic, rB) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function dV(cB, Bc) {
      let nc, Vc;
      null == cB[Bc] && (nc = cB[Bc - 1]) instanceof KV && (Vc = cB[Bc + 1]) instanceof KV && cB.splice(Bc - 1, 3, new KV(nc.length + 1 + Vc.length))
    }
    class AV {
      constructor(cB, Bc) {
        this.pos = cB, this.oracle = Bc, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = cB
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(cB, Bc) {
        if (this.lineStart > -1) {
          let cB = Math.min(Bc, this.lineEnd),
            nc = this.nodes[this.nodes.length - 1];
          nc instanceof iI ? nc.length += cB - this.pos : (cB > this.pos || !this.isCovered) && this.nodes.push(new iI(cB - this.pos, -1, 0)), this.writtenTo = cB, Bc > cB && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = Bc
      }
      point(cB, Bc, nc) {
        if (cB < Bc || nc.heightRelevant) {
          let Vc = nc.widget ? nc.widget.estimatedHeight : 0,
            Ic = nc.widget ? nc.widget.lineBreaks : 0;
          Vc < 0 && (Vc = this.oracle.lineHeight);
          let rB = Bc - cB;
          nc.block ? this.Hsc(new RV(rB, Vc, nc)) : (rB || Ic || Vc >= 5) && this.addLineDeco(Vc, Ic, rB)
        } else Bc > cB && this.span(cB, Bc);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: cB,
          to: Bc
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = cB, this.lineEnd = Bc, this.writtenTo < cB && ((this.writtenTo < cB - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, cB - 1)), this.nodes.push(null)), this.pos > cB && this.nodes.push(new iI(this.pos - cB, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(cB, Bc) {
        let nc = new KV(Bc - cB);
        return this.oracle.doc.lineAt(cB).to == Bc && (nc.flags |= 4), nc
      }
      ensureLine() {
        this.enterLine();
        let cB = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (cB instanceof iI) return cB;
        let Bc = new iI(0, -1, 0);
        return this.nodes.push(Bc), Bc
      }
      Hsc(cB) {
        this.enterLine();
        let Bc = cB.deco;
        Bc && Bc.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(cB), this.writtenTo = this.pos = this.pos + cB.length, Bc && Bc.endSide > 0 && (this.covering = cB)
      }
      addLineDeco(cB, Bc, nc) {
        let Vc = this.ensureLine();
        Vc.length += nc, Vc.collapsed += nc, Vc.widgetHeight = Math.max(Vc.widgetHeight, cB), Vc.breaks += Bc, this.writtenTo = this.pos = this.pos + nc
      }
      finish(cB) {
        let Bc = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || Bc instanceof iI || this.isCovered ? (this.writtenTo < this.pos || null == Bc) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new iI(0, -1, 0));
        let nc = cB;
        for (let Vc of this.nodes) Vc instanceof iI && Vc.updateHeight(this.oracle, nc), nc += Vc ? Vc.length : 1;
        return this.nodes
      }
      static build(cB, Bc, nc, Ic) {
        let rB = new AV(nc, cB);
        return Vc.y.spans(Bc, nc, Ic, rB, 0), rB.finish(nc)
      }
    }
    class GV {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(cB, Bc, nc, Vc) {
        (cB < Bc || nc && nc.heightRelevant || Vc && Vc.heightRelevant) && oc(cB, Bc, this.changes, 5)
      }
    }

    function cr(cB, Bc) {
      let nc = cB.getBoundingClientRect(),
        Vc = cB.ownerDocument,
        Ic = Vc.defaultView || window,
        rB = Math.max(0, nc.left),
        uc = Math.min(Ic.innerWidth, nc.right),
        sc = Math.max(0, nc.top),
        Mc = Math.min(Ic.innerHeight, nc.bottom);
      for (let Pc = cB.parentNode; Pc && Pc != Vc.body;)
        if (1 == Pc.nodeType) {
          let Bc = Pc,
            nc = window.getComputedStyle(Bc);
          if ((Bc.scrollHeight > Bc.clientHeight || Bc.scrollWidth > Bc.clientWidth) && "visible" != nc.overflow) {
            let nc = Bc.getBoundingClientRect();
            rB = Math.max(rB, nc.left), uc = Math.min(uc, nc.right), sc = Math.max(sc, nc.top), Mc = Math.min(Pc == cB.parentNode ? Ic.innerHeight : Mc, nc.bottom)
          }
          Pc = "absolute" == nc.position || "fixed" == nc.position ? Bc.offsetParent : Bc.parentNode
        } else {
          if (11 != Pc.nodeType) break;
          Pc = Pc.host
        } return {
        left: rB - nc.left,
        right: Math.max(rB, uc) - nc.left,
        top: sc - (nc.top + Bc),
        bottom: Math.max(sc, Mc) - (nc.top + Bc)
      }
    }

    function BI(cB, Bc) {
      let nc = cB.getBoundingClientRect();
      return {
        left: 0,
        right: nc.right - nc.left,
        top: Bc,
        bottom: nc.bottom - (nc.top + Bc)
      }
    }
    class nI {
      constructor(cB, Bc, nc, Vc) {
        this.from = cB, this.to = Bc, this.size = nc, this.displaySize = Vc
      }
      static same(cB, Bc) {
        if (cB.length != Bc.length) return !1;
        for (let nc = 0; nc < cB.length; nc++) {
          let Vc = cB[nc],
            Ic = Bc[nc];
          if (Vc.from != Ic.from || Vc.to != Ic.to || Vc.size != Ic.size) return !1
        }
        return !0
      }
      draw(cB, Bc) {
        return Cc.replace({
          widget: new VI(this.displaySize * (Bc ? cB.scaleY : cB.scaleX), Bc)
        }).range(this.from, this.to)
      }
    }
    class VI extends Zc {
      constructor(cB, Bc) {
        super(), this.size = cB, this.vertical = Bc
      }
      eq(cB) {
        return cB.size == this.size && cB.vertical == this.vertical
      }
      toDOM() {
        let cB = document.createElement("div");
        return this.vertical ? cB.style.height = this.size + "px" : (cB.style.width = this.size + "px", cB.style.height = "2px", cB.style.display = "inline-block"), cB
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class II {
      constructor(cB, Bc) {
        this.view = cB, this.state = Bc, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = MI, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = PB.LTR, this.Muc = [], this.mustEnforceCursorAssoc = !1;
        let nc = Bc.facet(cV).some((cB => "function" != typeof cB && "cm-lineWrapping" == cB.class));
        this.heightOracle = new WV(nc), this.stateDeco = PI(Bc), this.heightMap = FV.empty().applyChanges(this.stateDeco, Vc.N.empty, this.heightOracle.setDoc(Bc.doc), [new qV(0, 0, 0, Bc.doc.length)]);
        for (let Vc = 0; Vc < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Vc++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Cc.set(this.lineGaps.map((cB => cB.draw(this, !1)))), this.scrollParent = cB.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let cB = [this.viewport],
          {
            main: Bc
          } = this.state.selection;
        for (let nc = 0; nc <= 1; nc++) {
          let Vc = nc ? Bc.head : Bc.anchor;
          if (!cB.some((cB => {
              let {
                from: Bc,
                to: nc
              } = cB;
              return Vc >= Bc && Vc <= nc
            }))) {
            let {
              from: Bc,
              to: nc
            } = this.lineBlockAt(Vc);
            cB.push(new rr(Bc, nc))
          }
        }
        return this.viewports = cB.sort(((cB, Bc) => cB.from - Bc.from)), this.updateScaler()
      }
      updateScaler() {
        let cB = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? MI : new qr(this.heightOracle, this.heightMap, this.viewports), cB.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (cB => {
          this.viewportLines.push(OI(cB, this.scaler))
        }))
      }
      update(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = cB.state;
        let nc = this.stateDeco;
        this.stateDeco = PI(this.state);
        let Ic = cB.changedRanges,
          rB = qV.extendWithRanges(Ic, function(cB, Bc, nc) {
            let Ic = new GV;
            return Vc.y.compare(cB, Bc, nc, Ic, 0), Ic.changes
          }(nc, this.stateDeco, cB ? cB.changes : Vc.ChangeSet.empty(this.state.doc.length))),
          uc = this.heightMap.height,
          sc = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        oV(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, cB.startState.doc, this.heightOracle.setDoc(this.state.doc), rB), (this.heightMap.height != uc || EV) && (cB.flags |= 2), sc ? (this.scrollAnchorPos = cB.changes.mapPos(sc.from, -1), this.scrollAnchorHeight = sc.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = uc);
        let Mc = rB.length ? this.mapViewport(this.viewport, cB.changes) : this.viewport;
        (Bc && (Bc.range.head < Mc.from || Bc.range.head > Mc.to) || !this.viewportIsAppropriate(Mc)) && (Mc = this.getViewport(0, Bc));
        let Pc = Mc.from != this.viewport.from || Mc.to != this.viewport.to;
        this.viewport = Mc, cB.flags |= this.updateForViewport(), (Pc || !cB.changes.empty || 2 & cB.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, cB.changes))), cB.flags |= this.computeVisibleRanges(cB.changes), Bc && (this.scrollTarget = Bc), !this.mustEnforceCursorAssoc && (cB.selectionSet || cB.focusChanged) && cB.view.lineWrapping && cB.state.selection.main.empty && cB.state.selection.main.assoc && !cB.state.facet(kn) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: cB
        } = this, Bc = cB.contentDOM, nc = window.getComputedStyle(Bc), Ic = this.heightOracle, rB = nc.whiteSpace;
        this.defaultTextDirection = "rtl" == nc.direction ? PB.RTL : PB.LTR;
        let uc = this.heightOracle.mustRefreshForWrapping(rB) || "refresh" === this.mustMeasureContent,
          sc = Bc.getBoundingClientRect(),
          Mc = uc || this.mustMeasureContent || this.contentDOMHeight != sc.height;
        this.contentDOMHeight = sc.height, this.mustMeasureContent = !1;
        let Pc = 0,
          qB = 0;
        if (sc.width && sc.height) {
          let {
            scaleX: cB,
            scaleY: nc
          } = dc(Bc, sc);
          (cB > .005 && Math.abs(this.scaleX - cB) > .005 || nc > .005 && Math.abs(this.scaleY - nc) > .005) && (this.scaleX = cB, this.scaleY = nc, Pc |= 16, uc = Mc = !0)
        }
        let Oc = (parseInt(nc.paddingTop) || 0) * this.scaleY,
          Tc = (parseInt(nc.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Oc && this.paddingBottom == Tc || (this.paddingTop = Oc, this.paddingBottom = Tc, Pc |= 18), this.editorWidth != cB.scrollDOM.clientWidth && (Ic.lineWrapping && (Mc = !0), this.editorWidth = cB.scrollDOM.clientWidth, Pc |= 16);
        let fc = Ac(this.view.contentDOM, !1).y;
        fc != this.scrollParent && (this.scrollParent = fc, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let mB = this.getScrollOffset();
        this.scrollOffset != mB && (this.scrollAnchorHeight = -1, this.scrollOffset = mB), this.scrolledToBottom = rn(this.scrollParent || cB.win);
        let ec = (this.printing ? BI : cr)(Bc, this.paddingTop),
          tB = ec.top - this.pixelViewport.top,
          Sc = ec.bottom - this.pixelViewport.bottom;
        this.pixelViewport = ec;
        let yB = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (yB != this.inView && (this.inView = yB, yB && (Mc = !0)), !this.inView && !this.scrollTarget && ! function(cB) {
            let Bc = cB.getBoundingClientRect(),
              nc = cB.ownerDocument.defaultView || window;
            return Bc.left < nc.innerWidth && Bc.right > 0 && Bc.top < nc.innerHeight && Bc.bottom > 0
          }(cB.dom)) return 0;
        let zB = sc.width;
        if (this.contentDOMWidth == zB && this.editorHeight == cB.scrollDOM.clientHeight || (this.contentDOMWidth = sc.width, this.editorHeight = cB.scrollDOM.clientHeight, Pc |= 16), Mc) {
          let Bc = cB.docView.measureVisibleLineHeights(this.viewport);
          if (Ic.mustRefreshForHeights(Bc) && (uc = !0), uc || Ic.lineWrapping && Math.abs(zB - this.contentDOMWidth) > Ic.charWidth) {
            let {
              lineHeight: nc,
              charWidth: Vc,
              textHeight: sc
            } = cB.docView.measureTextSize();
            uc = nc > 0 && Ic.refresh(rB, nc, Vc, sc, Math.max(5, zB / Vc), Bc), uc && (cB.docView.minWidth = 0, Pc |= 16)
          }
          tB > 0 && Sc > 0 ? qB = Math.max(tB, Sc) : tB < 0 && Sc < 0 && (qB = Math.min(tB, Sc)), oV();
          for (let nc of this.viewports) {
            let rB = nc.from == this.viewport.from ? Bc : cB.docView.measureVisibleLineHeights(nc);
            this.heightMap = (uc ? FV.empty().applyChanges(this.stateDeco, Vc.N.empty, this.heightOracle, [new qV(0, 0, 0, cB.state.doc.length)]) : this.heightMap).updateHeight(Ic, 0, uc, new wV(nc.from, rB))
          }
          EV && (Pc |= 2)
        }
        let pc = !this.viewportIsAppropriate(this.viewport, qB) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return pc && (2 & Pc && (Pc |= this.updateScaler()), this.viewport = this.getViewport(qB, this.scrollTarget), Pc |= this.updateForViewport()), (2 & Pc || pc) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(uc ? [] : this.lineGaps, cB)), Pc |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, cB.docView.enforceCursorAssoc()), Pc
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(cB, Bc) {
        let nc = .5 - Math.max(-.5, Math.min(.5, cB / 1e3 / 2)),
          Vc = this.heightMap,
          Ic = this.heightOracle,
          {
            visibleTop: rB,
            visibleBottom: uc
          } = this,
          sc = new rr(Vc.lineAt(rB - 1e3 * nc, XV.ByHeight, Ic, 0, 0).from, Vc.lineAt(uc + 1e3 * (1 - nc), XV.ByHeight, Ic, 0, 0).to);
        if (Bc) {
          let {
            head: cB
          } = Bc.range;
          if (cB < sc.from || cB > sc.to) {
            let nc, rB = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              uc = Vc.lineAt(cB, XV.ByPos, Ic, 0, 0);
            nc = "center" == Bc.y ? (uc.top + uc.bottom) / 2 - rB / 2 : "start" == Bc.y || "nearest" == Bc.y && cB < sc.from ? uc.top : uc.bottom - rB, sc = new rr(Vc.lineAt(nc - 500, XV.ByHeight, Ic, 0, 0).from, Vc.lineAt(nc + rB + 500, XV.ByHeight, Ic, 0, 0).to)
          }
        }
        return sc
      }
      mapViewport(cB, Bc) {
        let nc = Bc.mapPos(cB.from, -1),
          Vc = Bc.mapPos(cB.to, 1);
        return new rr(this.heightMap.lineAt(nc, XV.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Vc, XV.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(cB) {
        let {
          from: Bc,
          to: nc
        } = cB, Vc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Ic
        } = this.heightMap.lineAt(Bc, XV.ByPos, this.heightOracle, 0, 0), {
          bottom: rB
        } = this.heightMap.lineAt(nc, XV.ByPos, this.heightOracle, 0, 0), {
          visibleTop: uc,
          visibleBottom: sc
        } = this;
        return (0 == Bc || Ic <= uc - Math.max(10, Math.min(-Vc, 250))) && (nc == this.state.doc.length || rB >= sc + Math.max(10, Math.min(Vc, 250))) && Ic > uc - 2e3 && rB < sc + 2e3
      }
      mapLineGaps(cB, Bc) {
        if (!cB.length || Bc.empty) return cB;
        let nc = [];
        for (let Vc of cB) Bc.touchesRange(Vc.from, Vc.to) || nc.push(new nI(Bc.mapPos(Vc.from), Bc.mapPos(Vc.to), Vc.size, Vc.displaySize));
        return nc
      }
      ensureLineGaps(cB, Bc) {
        let nc = this.heightOracle.lineWrapping,
          Ic = nc ? 1e4 : 2e3,
          rB = Ic >> 1,
          uc = Ic << 1;
        if (this.defaultTextDirection != PB.LTR && !nc) return [];
        let sc = [],
          Mc = (Ic, uc, Pc, qB) => {
            if (uc - Ic < rB) return;
            let Oc = this.state.selection.main,
              Tc = [Oc.from];
            Oc.empty || Tc.push(Oc.to);
            for (let cB of Tc)
              if (cB > Ic && cB < uc) return Mc(Ic, cB - 10, Pc, qB), void Mc(cB + 10, uc, Pc, qB);
            let fc = function(cB, Bc) {
              for (let nc of cB)
                if (Bc(nc)) return nc;
              return
            }(cB, (cB => cB.from >= Pc.from && cB.to <= Pc.to && Math.abs(cB.from - Ic) < rB && Math.abs(cB.to - uc) < rB && !Tc.some((Bc => cB.from < Bc && cB.to > Bc))));
            if (!fc) {
              if (uc < Pc.to && Bc && nc && Bc.Muc.some((cB => cB.from <= uc && cB.to >= uc))) {
                let cB = Bc.moveToLineBoundary(Vc.m.cursor(uc), !1, !0).head;
                cB > Ic && (uc = cB)
              }
              let cB = this.gapSize(Pc, Ic, uc, qB);
              fc = new nI(Ic, uc, cB, nc || cB < 2e6 ? cB : 2e6)
            }
            sc.push(fc)
          },
          Pc = Bc => {
            if (Bc.length < uc || Bc.type != Qc.Text) return;
            let rB = function(cB, Bc, nc) {
              let Ic = [],
                rB = cB,
                uc = 0;
              Vc.y.spans(nc, cB, Bc, {
                span() {},
                point(cB, Bc) {
                  cB > rB && (Ic.push({
                    from: rB,
                    to: cB
                  }), uc += cB - rB), rB = Bc
                }
              }, 20), rB < Bc && (Ic.push({
                from: rB,
                to: Bc
              }), uc += Bc - rB);
              return {
                total: uc,
                Iu: Ic
              }
            }(Bc.from, Bc.to, this.stateDeco);
            if (rB.total < uc) return;
            let sc, Pc, qB = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (nc) {
              let cB, nc, Vc = Ic / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != qB) {
                let Ic = sI(rB, qB),
                  uc = ((this.visibleBottom - this.visibleTop) / 2 + Vc) / Bc.height;
                cB = Ic - uc, nc = Ic + uc
              } else cB = (this.visibleTop - Bc.top - Vc) / Bc.height, nc = (this.visibleBottom - Bc.top + Vc) / Bc.height;
              sc = uI(rB, cB), Pc = uI(rB, nc)
            } else {
              let nc = rB.total * this.heightOracle.charWidth,
                Vc = Ic * this.heightOracle.charWidth,
                uc = 0;
              if (nc > 2e6)
                for (let Ic of cB) Ic.from >= Bc.from && Ic.from < Bc.to && Ic.size != Ic.displaySize && Ic.from * this.heightOracle.charWidth + uc < this.pixelViewport.left && (uc = Ic.size - Ic.displaySize);
              let Mc, Oc, Tc = this.pixelViewport.left + uc,
                fc = this.pixelViewport.right + uc;
              if (null != qB) {
                let cB = sI(rB, qB),
                  Bc = ((fc - Tc) / 2 + Vc) / nc;
                Mc = cB - Bc, Oc = cB + Bc
              } else Mc = (Tc - Vc) / nc, Oc = (fc + Vc) / nc;
              sc = uI(rB, Mc), Pc = uI(rB, Oc)
            }
            sc > Bc.from && Mc(Bc.from, sc, Bc, rB), Pc < Bc.to && Mc(Pc, Bc.to, Bc, rB)
          };
        for (let Vc of this.viewportLines) Array.isArray(Vc.type) ? Vc.type.forEach(Pc) : Pc(Vc);
        return sc
      }
      gapSize(cB, Bc, nc, Vc) {
        let Ic = sI(Vc, nc) - sI(Vc, Bc);
        return this.heightOracle.lineWrapping ? cB.height * Ic : Vc.total * this.heightOracle.charWidth * Ic
      }
      updateLineGaps(cB) {
        nI.same(cB, this.lineGaps) || (this.lineGaps = cB, this.lineGapDeco = Cc.set(cB.map((cB => cB.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(cB) {
        let Bc = this.stateDeco;
        this.lineGaps.length && (Bc = Bc.concat(this.lineGapDeco));
        let nc = [];
        Vc.y.spans(Bc, this.viewport.from, this.viewport.to, {
          span(cB, Bc) {
            nc.push({
              from: cB,
              to: Bc
            })
          },
          point() {}
        }, 20);
        let Ic = 0;
        if (nc.length != this.Muc.length) Ic = 12;
        else
          for (let Vc = 0; Vc < nc.length && !(8 & Ic); Vc++) {
            let Bc = this.Muc[Vc],
              rB = nc[Vc];
            Bc.from == rB.from && Bc.to == rB.to || (Ic |= 4, cB && cB.mapPos(Bc.from, -1) == rB.from && cB.mapPos(Bc.to, 1) == rB.to || (Ic |= 8))
          }
        return this.Muc = nc, Ic
      }
      lineBlockAt(cB) {
        return cB >= this.viewport.from && cB <= this.viewport.to && this.viewportLines.find((Bc => Bc.from <= cB && Bc.to >= cB)) || OI(this.heightMap.lineAt(cB, XV.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(cB) {
        return cB >= this.viewportLines[0].top && cB <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((Bc => Bc.top <= cB && Bc.bottom >= cB)) || OI(this.heightMap.lineAt(this.scaler.fromDOM(cB), XV.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(cB) {
        let Bc = this.lineBlockAtHeight(cB + 8);
        return Bc.from >= this.viewport.from || this.viewportLines[0].top - cB > 200 ? Bc : this.viewportLines[0]
      }
      elementAtHeight(cB) {
        return OI(this.heightMap.blockAt(this.scaler.fromDOM(cB), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class rr {
      constructor(cB, Bc) {
        this.from = cB, this.to = Bc
      }
    }

    function uI(cB, Bc) {
      let {
        total: nc,
        Iu: Vc
      } = cB;
      if (Bc <= 0) return Vc[0].from;
      if (Bc >= 1) return Vc[Vc.length - 1].to;
      let Ic = Math.floor(nc * Bc);
      for (let rB = 0;; rB++) {
        let {
          from: cB,
          to: Bc
        } = Vc[rB], nc = Bc - cB;
        if (Ic <= nc) return cB + Ic;
        Ic -= nc
      }
    }

    function sI(cB, Bc) {
      let nc = 0;
      for (let {
          from: Vc,
          to: Ic
        }
        of cB.Iu) {
        if (Bc <= Ic) {
          nc += Bc - Vc;
          break
        }
        nc += Ic - Vc
      }
      return nc / cB.total
    }
    const MI = {
      toDOM: cB => cB,
      fromDOM: cB => cB,
      scale: 1,
      eq(cB) {
        return cB == this
      }
    };

    function PI(cB) {
      let Bc = cB.facet(Bn).filter((cB => "function" != typeof cB)),
        nc = cB.facet(Vn).filter((cB => "function" != typeof cB));
      return nc.length && Bc.push(Vc.y.join(nc)), Bc
    }
    class qr {
      constructor(cB, Bc, nc) {
        let Vc = 0,
          Ic = 0,
          rB = 0;
        this.viewports = nc.map((nc => {
          let {
            from: Ic,
            to: rB
          } = nc, uc = Bc.lineAt(Ic, XV.ByPos, cB, 0, 0).top, sc = Bc.lineAt(rB, XV.ByPos, cB, 0, 0).bottom;
          return Vc += sc - uc, {
            from: Ic,
            to: rB,
            top: uc,
            bottom: sc,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Vc) / (Bc.height - Vc);
        for (let uc of this.viewports) uc.domTop = rB + (uc.top - Ic) * this.scale, rB = uc.domBottom = uc.domTop + (uc.bottom - uc.top), Ic = uc.bottom
      }
      toDOM(cB) {
        for (let Bc = 0, nc = 0, Vc = 0;; Bc++) {
          let Ic = Bc < this.viewports.length ? this.viewports[Bc] : null;
          if (!Ic || cB < Ic.top) return Vc + (cB - nc) * this.scale;
          if (cB <= Ic.bottom) return Ic.domTop + (cB - Ic.top);
          nc = Ic.bottom, Vc = Ic.domBottom
        }
      }
      fromDOM(cB) {
        for (let Bc = 0, nc = 0, Vc = 0;; Bc++) {
          let Ic = Bc < this.viewports.length ? this.viewports[Bc] : null;
          if (!Ic || cB < Ic.domTop) return nc + (cB - Vc) / this.scale;
          if (cB <= Ic.domBottom) return Ic.top + (cB - Ic.domTop);
          nc = Ic.bottom, Vc = Ic.domBottom
        }
      }
      eq(cB) {
        return cB instanceof qr && (this.scale == cB.scale && this.viewports.length == cB.viewports.length && this.viewports.every(((Bc, nc) => Bc.from == cB.viewports[nc].from && Bc.to == cB.viewports[nc].to)))
      }
    }

    function OI(cB, Bc) {
      if (1 == Bc.scale) return cB;
      let nc = Bc.toDOM(cB.top),
        Vc = Bc.toDOM(cB.bottom);
      return new kI(cB.from, cB.length, nc, Vc - nc, Array.isArray(cB._content) ? cB._content.map((cB => OI(cB, Bc))) : cB._content)
    }
    const TI = Vc.q.define({
        combine: cB => cB.join(" ")
      }),
      fI = Vc.q.define({
        combine: cB => cB.indexOf(!0) > -1
      }),
      mr = Ic.c.newName(),
      eI = Ic.c.newName(),
      tr = Ic.c.newName(),
      SI = {
        "&light": "." + eI,
        "&dark": "." + tr
      };

    function yr(cB, Bc, nc) {
      return new Ic.c(Bc, {
        finish: Bc => /&/.test(Bc) ? Bc.replace(/&\w*/, (Bc => {
          if ("&" == Bc) return cB;
          if (!nc || !nc[Bc]) throw new RangeError(`Unsupported selector: ${Bc}`);
          return nc[Bc]
        })) : cB + " " + Bc
      })
    }
    const zr = yr("." + mr, {
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
      }, SI),
      pI = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      hI = lc.ie && lc.ie_version <= 11;
    class ar {
      constructor(cB) {
        this.view = cB, this.active = !1, this.editContext = null, this.selectionRange = new Gc, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = cB.contentDOM, this.observer = new MutationObserver((Bc => {
          for (let cB of Bc) this.queue.push(cB);
          (lc.ie && lc.ie_version <= 11 || lc.ios && cB.composing) && Bc.some((cB => "childList" == cB.type && cB.removedNodes.length || "characterData" == cB.type && cB.oldValue.length > cB.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !lc.android || !1 === cB.constructor.EDIT_CONTEXT || lc.chrome && lc.chrome_version < 126 || (this.editContext = new LI(cB), cB.state.facet(RB) && (cB.contentDOM.editContext = this.editContext.editContext)), hI && (this.onCharData = cB => {
          this.queue.push({
            target: cB.target,
            type: "characterData",
            oldValue: cB.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.ZZ = this.ZZ.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var cB;
          (null === (cB = this.view.docView) || void 0 === cB ? void 0 : cB.lastUpdate) < Date.now() - 75 && this.ZZ()
        })), this.resizeScroll.observe(cB.scrollDOM)), this.addWindowListeners(this.win = cB.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((cB => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), cB.length > 0 && cB[cB.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((cB => {
          cB.length > 0 && cB[cB.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(cB) {
        this.view.inputState.runHandlers("scroll", cB), this.intersecting && this.view.measure()
      }
      onScroll(cB) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(cB)
      }
      ZZ() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(cB) {
        ("change" != cB.type && cB.type || cB.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(cB) {
        if (this.gapIntersection && (cB.length != this.gaps.length || this.gaps.some(((Bc, nc) => Bc != cB[nc])))) {
          this.gapIntersection.disconnect();
          for (let Bc of cB) this.gapIntersection.observe(Bc);
          this.gaps = cB
        }
      }
      onSelectionChange(cB) {
        let Bc = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: nc
        } = this, Vc = this.selectionRange;
        if (nc.state.facet(RB) ? nc.root.activeElement != this.dom : !Xc(this.dom, Vc)) return;
        let Ic = Vc.anchorNode && nc.docView.tile.nearest(Vc.anchorNode);
        Ic && Ic.isWidget() && Ic.widget.ignoreEvent(cB) ? Bc || (this.selectionChanged = !1) : (lc.ie && lc.ie_version <= 11 || lc.android && lc.chrome) && !nc.state.selection.main.empty && Vc.focusNode && Fc(Vc.focusNode, Vc.focusOffset, Vc.anchorNode, Vc.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: cB
        } = this, Bc = wc(cB.root);
        if (!Bc) return !1;
        let nc = lc.safari && 11 == cB.root.nodeType && cB.root.activeElement == this.dom && function(cB, Bc) {
          if (Bc.getComposedRanges) {
            let nc = Bc.getComposedRanges(cB.root)[0];
            if (nc) return YI(cB, nc)
          }
          let nc = null;

          function Vc(cB) {
            cB.preventDefault(), cB.stopImmediatePropagation(), nc = cB.getTargetRanges()[0]
          }
          return cB.contentDOM.addEventListener("beforeinput", Vc, !0), cB.dom.ownerDocument.execCommand("indent"), cB.contentDOM.removeEventListener("beforeinput", Vc, !0), nc ? YI(cB, nc) : null
        }(this.view, Bc) || Bc;
        if (!nc || this.selectionRange.eq(nc)) return !1;
        let Vc = Xc(this.dom, nc);
        return Vc && !this.selectionChanged && cB.inputState.lastFocusTime > Date.now() - 200 && cB.inputState.lastTouchTime < Date.now() - 300 && function(cB, Bc) {
          let nc = Bc.focusNode,
            Vc = Bc.focusOffset;
          if (!nc || Bc.anchorNode != nc || Bc.anchorOffset != Vc) return !1;
          for (Vc = Math.min(Vc, iB(nc));;)
            if (Vc) {
              if (1 != nc.nodeType) return !1;
              let cB = nc.childNodes[Vc - 1];
              "false" == cB.contentEditable ? Vc-- : (nc = cB, Vc = iB(nc))
            } else {
              if (nc == cB) return !0;
              Vc = Jc(nc), nc = nc.parentNode
            }
        }(this.dom, nc) ? (this.view.inputState.lastFocusTime = 0, cB.docView.updateSelection(), !1) : (this.selectionRange.setRange(nc), Vc && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(cB, Bc) {
        this.selectionRange.set(cB.node, cB.offset, Bc.node, Bc.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let cB = 0,
          Bc = null;
        for (let nc = this.dom; nc;)
          if (1 == nc.nodeType) !Bc && cB < this.scrollTargets.length && this.scrollTargets[cB] == nc ? cB++ : Bc || (Bc = this.scrollTargets.slice(0, cB)), Bc && Bc.push(nc), nc = nc.assignedSlot || nc.parentNode;
          else {
            if (11 != nc.nodeType) break;
            nc = nc.host
          } if (cB < this.scrollTargets.length && !Bc && (Bc = this.scrollTargets.slice(0, cB)), Bc) {
          for (let cB of this.scrollTargets) cB.removeEventListener("scroll", this.onScroll);
          for (let cB of this.scrollTargets = Bc) cB.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(cB) {
        if (!this.active) return cB();
        try {
          return this.stop(), cB()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, pI), hI && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), hI && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(cB, Bc) {
        var nc;
        if (!this.delayedAndroidKey) {
          let cB = () => {
            let cB = this.delayedAndroidKey;
            if (cB) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = cB.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && cB.force && IB(this.dom, cB.key, cB.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(cB)
        }
        this.delayedAndroidKey && "Enter" != cB || (this.delayedAndroidKey = {
          key: cB,
          keyCode: Bc,
          force: this.lastChange < Date.now() - 50 || !!(null === (nc = this.delayedAndroidKey) || void 0 === nc ? void 0 : nc.force)
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
        for (let cB of this.observer.takeRecords()) this.queue.push(cB);
        return this.queue
      }
      processRecords() {
        let cB = this.pendingRecords();
        cB.length && (this.queue = []);
        let Bc = -1,
          nc = -1,
          Vc = !1;
        for (let Ic of cB) {
          let cB = this.readMutation(Ic);
          cB && (cB.typeOver && (Vc = !0), -1 == Bc ? ({
            from: Bc,
            to: nc
          } = cB) : (Bc = Math.min(cB.from, Bc), nc = Math.max(cB.to, nc)))
        }
        return {
          from: Bc,
          to: nc,
          typeOver: Vc
        }
      }
      readChange() {
        let {
          from: cB,
          to: Bc,
          typeOver: nc
        } = this.processRecords(), Vc = this.selectionChanged && Xc(this.dom, this.selectionRange);
        if (cB < 0 && !Vc) return null;
        cB > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Ic = new VV(this.view, cB, Bc, nc);
        return this.view.docView.domChanged = {
          newSel: Ic.newSel ? Ic.newSel.main : null
        }, Ic
      }
      flush() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        cB && this.readSelectionRange();
        let Bc = this.readChange();
        if (!Bc) return this.view.requestMeasure(), !1;
        let nc = this.view.state,
          Vc = rI(this.view, Bc);
        return this.view.state == nc && (Bc.domChanged || Bc.newSel && !MV(this.view.state.selection, Bc.newSel.main)) && this.view.update([]), Vc
      }
      readMutation(cB) {
        let Bc = this.view.docView.tile.nearest(cB.target);
        if (!Bc || Bc.isWidget()) return null;
        if (Bc.markDirty("attributes" == cB.type), "childList" == cB.type) {
          let nc = lI(Bc, cB.previousSibling || cB.target.previousSibling, -1),
            Vc = lI(Bc, cB.nextSibling || cB.target.nextSibling, 1);
          return {
            from: nc ? Bc.posAfter(nc) : Bc.posAtStart,
            to: Vc ? Bc.posBefore(Vc) : Bc.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == cB.type ? {
          from: Bc.posAtStart,
          to: Bc.posAtEnd,
          typeOver: cB.target.nodeValue == cB.oldValue
        } : null
      }
      setWindow(cB) {
        cB != this.win && (this.removeWindowListeners(this.win), this.win = cB, this.addWindowListeners(this.win))
      }
      addWindowListeners(cB) {
        cB.addEventListener("resize", this.ZZ), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : cB.addEventListener("beforeprint", this.onPrint), cB.addEventListener("scroll", this.onScroll), cB.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(cB) {
        cB.removeEventListener("scroll", this.onScroll), cB.removeEventListener("resize", this.ZZ), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : cB.removeEventListener("beforeprint", this.onPrint), cB.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(cB) {
        this.editContext && (this.editContext.update(cB), cB.startState.facet(RB) != cB.state.facet(RB) && (cB.view.contentDOM.editContext = cB.state.facet(RB) ? this.editContext.editContext : null))
      }
      destroy() {
        var cB, Bc, nc;
        this.stop(), null === (cB = this.intersection) || void 0 === cB || cB.disconnect(), null === (Bc = this.gapIntersection) || void 0 === Bc || Bc.disconnect(), null === (nc = this.resizeScroll) || void 0 === nc || nc.disconnect();
        for (let Vc of this.scrollTargets) Vc.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function lI(cB, Bc, nc) {
      for (; Bc;) {
        let Vc = fn.get(Bc);
        if (Vc && Vc.parent == cB) return Vc;
        let Ic = Bc.parentNode;
        Bc = Ic != cB.dom ? Ic : nc > 0 ? Bc.nextSibling : Bc.previousSibling
      }
      return null
    }

    function YI(cB, Bc) {
      let nc = Bc.startContainer,
        Vc = Bc.startOffset,
        Ic = Bc.endContainer,
        rB = Bc.endOffset,
        uc = cB.docView.domAtPos(cB.state.selection.main.anchor, 1);
      return Fc(uc.node, uc.offset, Ic, rB) && ([nc, Vc, Ic, rB] = [Ic, rB, nc, Vc]), {
        anchorNode: nc,
        anchorOffset: Vc,
        focusNode: Ic,
        focusOffset: rB
      }
    }
    class LI {
      constructor(cB) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(cB.state);
        let Bc = this.editContext = new window.EditContext({
          text: cB.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, cB.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(cB.state.selection.main.head)
        });
        this.handlers.textupdate = nc => {
          let Ic = cB.state.selection.main,
            {
              anchor: rB,
              head: uc
            } = Ic,
            sc = this.toEditorPos(nc.updateRangeStart),
            Mc = this.toEditorPos(nc.updateRangeEnd);
          cB.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: nc.updateRangeStart,
            editorBase: sc,
            drifted: !1
          });
          let Pc = Mc - sc > nc.text.length;
          sc == this.from && rB < this.from ? sc = rB : Mc == this.to && rB > this.to && (Mc = rB);
          let qB = sV(cB.state.sliceDoc(sc, Mc), nc.text, (Pc ? Ic.from : Ic.to) - sc, Pc ? "end" : null);
          if (!qB) {
            let Bc = Vc.m.single(this.toEditorPos(nc.selectionStart), this.toEditorPos(nc.selectionEnd));
            return void(MV(Bc, Ic) || cB.dispatch({
              selection: Bc,
              userEvent: "select"
            }))
          }
          let Oc = {
            from: qB.from + sc,
            to: qB.toA + sc,
            insert: Vc.N.of(nc.text.slice(qB.from, qB.toB).split("\n"))
          };
          if ((lc.mac || lc.android) && Oc.from == uc - 1 && /^\. ?$/.test(nc.text) && "off" == cB.contentDOM.getAttribute("autocorrect") && (Oc = {
              from: sc,
              to: Mc,
              insert: Vc.N.of([nc.text.replace(".", " ")])
            }), this.pendingContextChange = Oc, !cB.state.readOnly) {
            let Bc = this.to - this.from + (Oc.to - Oc.from + Oc.insert.length);
            uV(cB, Oc, Vc.m.single(this.toEditorPos(nc.selectionStart, Bc), this.toEditorPos(nc.selectionEnd, Bc)))
          }
          this.pendingContextChange && (this.revertPending(cB.state), this.setSelection(cB.state)), Oc.from < Oc.to && !Oc.insert.length && cB.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(Bc.text.slice(Math.max(0, nc.updateRangeStart - 1), Math.min(Bc.text.length, nc.updateRangeStart + 1))) && this.handlers.compositionend(nc)
        }, this.handlers.characterboundsupdate = nc => {
          let Vc = [],
            Ic = null;
          for (let Bc = this.toEditorPos(nc.rangeStart), rB = this.toEditorPos(nc.rangeEnd); Bc < rB; Bc++) {
            let nc = cB.coordsForChar(Bc);
            Ic = nc && new DOMRect(nc.left, nc.top, nc.right - nc.left, nc.bottom - nc.top) || Ic || new DOMRect, Vc.push(Ic)
          }
          Bc.updateCharacterBounds(nc.rangeStart, Vc)
        }, this.handlers.textformatupdate = Bc => {
          let nc = [];
          for (let cB of Bc.getTextFormats()) {
            let Bc = cB.underlineStyle,
              Vc = cB.underlineThickness;
            if (!/none/i.test(Bc) && !/none/i.test(Vc)) {
              let Ic = this.toEditorPos(cB.rangeStart),
                rB = this.toEditorPos(cB.rangeEnd);
              if (Ic < rB) {
                let cB = `text-decoration: underline ${/^[a-z]/.test(Bc)?Bc+" ":"Dashed"==Bc?"dashed ":"Squiggle"==Bc?"wavy ":""}${/thin/i.test(Vc)?1:2}px`;
                nc.push(Cc.mark({
                  attributes: {
                    style: cB
                  }
                }).range(Ic, rB))
              }
            }
          }
          cB.dispatch({
            effects: JB.of(Cc.set(nc))
          })
        }, this.handlers.compositionstart = () => {
          cB.inputState.composing < 0 && (cB.inputState.composing = 0, cB.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (cB.inputState.composing = -1, cB.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: Bc
            } = this.composing;
            this.composing = null, Bc && this.reset(cB.state)
          }
        };
        for (let nc in this.handlers) Bc.addEventListener(nc, this.handlers[nc]);
        this.measureReq = {
          read: cB => {
            this.editContext.updateControlBounds(cB.contentDOM.getBoundingClientRect());
            let Bc = wc(cB.root);
            Bc && Bc.rangeCount && this.editContext.updateSelectionBounds(Bc.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(cB) {
        let Bc = 0,
          nc = !1,
          Vc = this.pendingContextChange;
        return cB.changes.iterChanges(((Ic, rB, uc, sc, Mc) => {
          if (nc) return;
          let Pc = Mc.length - (rB - Ic);
          if (Vc && rB >= Vc.to) {
            if (Vc.from == Ic && Vc.to == rB && Vc.insert.eq(Mc)) return Vc = this.pendingContextChange = null, Bc += Pc, void(this.to += Pc);
            Vc = null, this.revertPending(cB.state)
          }
          if (Ic += Bc, (rB += Bc) <= this.from) this.from += Pc, this.to += Pc;
          else if (Ic < this.to) {
            if (Ic < this.from || rB > this.to || this.to - this.from + Mc.length > 3e4) return void(nc = !0);
            this.editContext.updateText(this.toContextPos(Ic), this.toContextPos(rB), Mc.toString()), this.to += Pc
          }
          Bc += Pc
        })), Vc && !nc && this.revertPending(cB.state), !nc
      }
      update(cB) {
        let Bc = this.pendingContextChange,
          nc = cB.startState.selection.main;
        this.composing && (this.composing.drifted || !cB.changes.touchesRange(nc.from, nc.to) && cB.transactions.some((cB => !cB.isUserEvent("input.type") && cB.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = cB.changes.mapPos(this.composing.editorBase)) : this.applyEdits(cB) && this.rangeIsValid(cB.state) ? (cB.docChanged || cB.selectionSet || Bc) && this.setSelection(cB.state) : (this.pendingContextChange = null, this.reset(cB.state)), (cB.geometryChanged || cB.docChanged || cB.selectionSet) && cB.view.requestMeasure(this.measureReq)
      }
      resetRange(cB) {
        let {
          head: Bc
        } = cB.selection.main;
        this.from = Math.max(0, Bc - 1e4), this.to = Math.min(cB.doc.length, Bc + 1e4)
      }
      reset(cB) {
        this.resetRange(cB), this.editContext.updateText(0, this.editContext.text.length, cB.doc.sliceString(this.from, this.to)), this.setSelection(cB)
      }
      revertPending(cB) {
        let Bc = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(Bc.from), this.toContextPos(Bc.from + Bc.insert.length), cB.doc.sliceString(Bc.from, Bc.to))
      }
      setSelection(cB) {
        let {
          main: Bc
        } = cB.selection, nc = this.toContextPos(Math.max(this.from, Math.min(this.to, Bc.anchor))), Vc = this.toContextPos(Bc.head);
        this.editContext.selectionStart == nc && this.editContext.selectionEnd == Vc || this.editContext.updateSelection(nc, Vc)
      }
      rangeIsValid(cB) {
        let {
          head: Bc
        } = cB.selection.main;
        return !(this.from > 0 && Bc - this.from < 500 || this.to < cB.doc.length && this.to - Bc < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        cB = Math.min(cB, Bc);
        let nc = this.composing;
        return nc && nc.drifted ? nc.editorBase + (cB - nc.contextBase) : cB + this.from
      }
      toContextPos(cB) {
        let Bc = this.composing;
        return Bc && Bc.drifted ? Bc.contextBase + (cB - Bc.editorBase) : cB - this.from
      }
      destroy() {
        for (let cB in this.handlers) this.editContext.removeEventListener(cB, this.handlers[cB])
      }
    }
    class gr {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get Muc() {
        return this.viewState.Muc
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
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Bc;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), cB.parent && cB.parent.appendChild(this.dom);
        let {
          dispatch: nc
        } = cB;
        this.dispatchTransactions = cB.dispatchTransactions || nc && (cB => cB.forEach((cB => nc(cB, this)))) || (cB => this.update(cB)), this.dispatch = this.dispatch.bind(this), this._root = cB.root || function(cB) {
          for (; cB;) {
            if (cB && (9 == cB.nodeType || 11 == cB.nodeType && cB.host)) return cB;
            cB = cB.assignedSlot || cB.parentNode
          }
          return null
        }(cB.parent) || document, this.viewState = new II(this, cB.state || Vc.o.create(cB)), cB.scrollTo && cB.scrollTo.is(FB) && (this.viewState.scrollTarget = cB.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(xn).map((cB => new AB(cB)));
        for (let Vc of this.plugins) Vc.update(this);
        this.observer = new ar(this), this.inputState = new PV(this), this.inputState.ensureHandlers(this.plugins), this.docView = new onc(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (Bc = document.fonts) || void 0 === Bc ? void 0 : Bc.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        let Ic = 1 == Bc.length && Bc[0] instanceof Vc.R ? Bc : 1 == Bc.length && Array.isArray(Bc[0]) ? Bc[0] : [this.state.update(...Bc)];
        this.dispatchTransactions(Ic, this)
      }
      update(cB) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let Bc, nc = !1,
          Ic = !1,
          rB = this.state;
        for (let Vc of cB) {
          if (Vc.startState != rB) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          rB = Vc.state
        }
        if (this.destroyed) return void(this.viewState.state = rB);
        let uc = this.hasFocus,
          sc = 0,
          Mc = null;
        cB.some((cB => cB.annotation(QV))) ? (this.inputState.notifiedFocused = uc, sc = 1) : uc != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = uc, Mc = CV(rB, uc), Mc || (sc = 1));
        let Pc = this.observer.delayedAndroidKey,
          qB = null;
        if (Pc ? (this.observer.clearDelayedAndroidKey(), qB = this.observer.readChange(), (qB && !this.state.doc.eq(rB.doc) || !this.state.selection.eq(rB.selection)) && (qB = null)) : this.observer.clear(), rB.facet(Vc.o.phrases) != this.state.facet(Vc.o.phrases)) return this.setState(rB);
        Bc = On.create(this, rB, cB), Bc.flags |= sc;
        let Oc = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let Bc of cB) {
            if (Oc && (Oc = Oc.map(Bc.changes)), Bc.scrollIntoView) {
              let {
                main: cB
              } = Bc.state.selection, {
                x: nc,
                y: Ic
              } = this.state.facet(gr.cursorScrollMargin);
              Oc = new HB(cB.empty ? cB : Vc.m.cursor(cB.head, cB.head > cB.anchor ? -1 : 1), "nearest", "nearest", Ic, nc)
            }
            for (let cB of Bc.effects) cB.is(FB) && (Oc = cB.value.clip(this.state))
          }
          this.viewState.update(Bc, Oc), this.bidiCache = ZI.update(this.bidiCache, Bc.changes), Bc.empty || (this.updatePlugins(Bc), this.inputState.update(Bc)), nc = this.docView.update(Bc), this.state.facet(Pn) != this.styleModules && this.mountStyles(), Ic = this.updateAttrs(), this.showAnnouncements(cB), this.docView.updateSelection(nc, cB.some((cB => cB.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (Bc.startState.facet(TI) != Bc.state.facet(TI) && (this.viewState.mustMeasureContent = !0), (nc || Ic || Oc || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), nc && this.docViewUpdate(), !Bc.empty)
          for (let Vc of this.state.facet(DB)) try {
            Vc(Bc)
          } catch (Tc) {
            jn(this.state, Tc, "update listener")
          }(Mc || qB) && Promise.resolve().then((() => {
            Mc && this.state == Mc.startState && this.dispatch(Mc), qB && !rI(this, qB) && Pc.force && IB(this.contentDOM, Pc.key, Pc.keyCode)
          }))
      }
      setState(cB) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = cB);
        this.updateState = 2;
        let Bc = this.hasFocus;
        try {
          for (let cB of this.plugins) cB.destroy(this);
          this.viewState = new II(this, cB), this.plugins = cB.facet(xn).map((cB => new AB(cB))), this.pluginMap.clear();
          for (let cB of this.plugins) cB.update(this);
          this.docView.destroy(), this.docView = new onc(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        Bc && this.focus(), this.requestMeasure()
      }
      updatePlugins(cB) {
        let Bc = cB.startState.facet(xn),
          nc = cB.state.facet(xn);
        if (Bc != nc) {
          let Vc = [];
          for (let Ic of nc) {
            let nc = Bc.indexOf(Ic);
            if (nc < 0) Vc.push(new AB(Ic));
            else {
              let Bc = this.plugins[nc];
              Bc.mustUpdate = cB, Vc.push(Bc)
            }
          }
          for (let Bc of this.plugins) Bc.mustUpdate != cB && Bc.destroy(this);
          this.plugins = Vc, this.pluginMap.clear()
        } else
          for (let Vc of this.plugins) Vc.mustUpdate = cB;
        for (let Vc = 0; Vc < this.plugins.length; Vc++) this.plugins[Vc].update(this);
        Bc != nc && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let Bc of this.plugins) {
          let nc = Bc.value;
          if (nc && nc.docViewUpdate) try {
            nc.docViewUpdate(this)
          } catch (cB) {
            jn(this.state, cB, "doc view update listener")
          }
        }
      }
      measure() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, cB && this.observer.forceFlush();
        let Bc = null,
          nc = this.viewState.scrollParent,
          Vc = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Ic,
            scrollAnchorHeight: rB
          } = this.viewState;
        Math.abs(Vc - this.viewState.scrollOffset) > 1 && (rB = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let cB = 0;; cB++) {
            if (rB < 0)
              if (rn(nc || this.win)) Ic = -1, rB = this.viewState.heightMap.height;
              else {
                let cB = this.viewState.scrollAnchorAt(Vc);
                Ic = cB.from, rB = cB.top
              } this.updateState = 1;
            let sc = this.viewState.measure();
            if (!sc && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (cB > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let Mc = [];
            4 & sc || ([this.measureRequests, Mc] = [Mc, this.measureRequests]);
            let Pc = Mc.map((cB => {
                try {
                  return cB.read(this)
                } catch (Bc) {
                  return jn(this.state, Bc), br
                }
              })),
              qB = On.create(this, this.state, []),
              Oc = !1;
            qB.flags |= sc, Bc ? Bc.flags |= sc : Bc = qB, this.updateState = 2, qB.empty || (this.updatePlugins(qB), this.inputState.update(qB), this.updateAttrs(), Oc = this.docView.update(qB), Oc && this.docViewUpdate());
            for (let cB = 0; cB < Mc.length; cB++)
              if (Pc[cB] != br) try {
                let Bc = Mc[cB];
                Bc.write && Bc.write(Pc[cB], this)
              } catch (uc) {
                jn(this.state, uc)
              }
            if (Oc && this.docView.updateSelection(!0), !qB.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, rB = -1;
                  continue
                } {
                  let cB = ((Ic < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Ic).top) - rB) / this.scaleY;
                  if ((cB > 1 || cB < -1) && (nc == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Vc += cB, nc ? nc.scrollTop += cB : this.win.scrollBy(0, cB), rB = -1;
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
        if (Bc && !Bc.empty)
          for (let sc of this.state.facet(DB)) sc(Bc)
      }
      get themeClasses() {
        return mr + " " + (this.state.facet(fI) ? tr : eI) + " " + this.state.facet(TI)
      }
      updateAttrs() {
        let cB = QI(this, GB, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          Bc = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(RB) ? "true" : "false",
            class: "cm-content",
            style: `${lc.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (Bc["aria-readonly"] = "true"), QI(this, cV, Bc);
        let nc = this.observer.ignore((() => {
          let nc = Uc(this.contentDOM, this.contentAttrs, Bc),
            Vc = Uc(this.dom, this.editorAttrs, cB);
          return nc || Vc
        }));
        return this.editorAttrs = cB, this.contentAttrs = Bc, nc
      }
      showAnnouncements(cB) {
        let Bc = !0;
        for (let nc of cB)
          for (let cB of nc.effects)
            if (cB.is(gr.announce)) {
              Bc && (this.announceDOM.textContent = ""), Bc = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = cB.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Pn);
        let cB = this.state.facet(gr.cspNonce);
        Ic.c.mount(this.root, this.styleModules.concat(zr).reverse(), cB ? {
          nonce: cB
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(cB) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), cB) {
          if (this.measureRequests.indexOf(cB) > -1) return;
          if (null != cB.key)
            for (let Bc = 0; Bc < this.measureRequests.length; Bc++)
              if (this.measureRequests[Bc].key === cB.key) return void(this.measureRequests[Bc] = cB);
          this.measureRequests.push(cB)
        }
      }
      plugin(cB) {
        let Bc = this.pluginMap.get(cB);
        return (void 0 === Bc || Bc && Bc.plugin != cB) && this.pluginMap.set(cB, Bc = this.plugins.find((Bc => Bc.plugin == cB)) || null), Bc && Bc.update(this).value
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
      elementAtHeight(cB) {
        return this.readMeasured(), this.viewState.elementAtHeight(cB)
      }
      lineBlockAtHeight(cB) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(cB)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(cB) {
        return this.viewState.lineBlockAt(cB)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(cB, Bc, nc) {
        return iV(this, cB, Jn(this, cB, Bc, nc))
      }
      moveByGroup(cB, Bc) {
        return iV(this, cB, Jn(this, cB, Bc, (Bc => function(cB, Bc, nc) {
          let Ic = cB.state.charCategorizer(Bc),
            rB = Ic(nc);
          return cB => {
            let Bc = Ic(cB);
            return rB == Vc.i.Space && (rB = Bc), rB == Bc
          }
        }(this, cB.head, Bc))))
      }
      visualLineSide(cB, Bc) {
        let nc = this.bidiSpans(cB),
          Ic = this.textDirectionAt(cB.from),
          rB = nc[Bc ? nc.length - 1 : 0];
        return Vc.m.cursor(rB.side(Bc, Ic) + cB.from, rB.forward(!Bc, Ic) ? 1 : -1)
      }
      moveToLineBoundary(cB, Bc) {
        return function(cB, Bc, nc, Ic) {
          let rB = Fn(cB, Bc.head, Bc.assoc || -1),
            uc = Ic && rB.type == Qc.Text && (cB.lineWrapping || rB.widgetLineBreaks) ? cB.coordsAtPos(Bc.assoc < 0 && Bc.head > rB.from ? Bc.head - 1 : Bc.head) : null;
          if (uc) {
            let Bc = cB.dom.getBoundingClientRect(),
              Ic = cB.textDirectionAt(rB.from),
              sc = cB.posAtCoords({
                x: nc == (Ic == PB.LTR) ? Bc.right - 1 : Bc.left + 1,
                y: (uc.top + uc.bottom) / 2
              });
            if (null != sc) return Vc.m.cursor(sc, nc ? -1 : 1)
          }
          return Vc.m.cursor(nc ? rB.to : rB.from, nc ? -1 : 1)
        }(this, cB, Bc, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(cB, Bc, nc) {
        return iV(this, cB, function(cB, Bc, nc, Ic) {
          let rB = Bc.head,
            uc = nc ? 1 : -1;
          if (rB == (nc ? cB.state.doc.length : 0)) return Vc.m.cursor(rB, Bc.assoc);
          let sc, Mc = Bc.goalColumn,
            Pc = cB.contentDOM.getBoundingClientRect(),
            qB = cB.coordsAtPos(rB, Bc.assoc || ((Bc.empty ? nc : Bc.head == Bc.from) ? 1 : -1)),
            Oc = cB.documentTop;
          if (qB) null == Mc && (Mc = qB.left - Pc.left), sc = uc < 0 ? qB.top : qB.bottom;
          else {
            let Bc = cB.viewState.lineBlockAt(rB);
            null == Mc && (Mc = Math.min(Pc.right - Pc.left, cB.defaultCharacterWidth * (rB - Bc.from))), sc = (uc < 0 ? Bc.top : Bc.bottom) + Oc
          }
          let Tc = Pc.left + Mc,
            fc = cB.viewState.heightOracle.textHeight >> 1,
            mB = null !== Ic && void 0 !== Ic ? Ic : fc;
          for (let ec = 0;; ec += fc) {
            let Bc = sc + (mB + ec) * uc,
              Ic = xV(cB, {
                x: Tc,
                y: Bc
              }, !1, uc);
            if (nc ? Bc > Pc.bottom : Bc < Pc.top) return Vc.m.cursor(Ic.pos, Ic.assoc);
            let rB = cB.coordsAtPos(Ic.pos, Ic.assoc),
              qB = rB ? (rB.top + rB.bottom) / 2 : 0;
            if (!rB || (nc ? qB > sc : qB < sc)) return Vc.m.cursor(Ic.pos, Ic.assoc, void 0, Mc)
          }
        }(this, cB, Bc, nc))
      }
      domAtPos(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(cB, Bc)
      }
      posAtDOM(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(cB, Bc)
      }
      posAtCoords(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let nc = xV(this, cB, Bc);
        return nc && nc.pos
      }
      posAndSideAtCoords(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), xV(this, cB, Bc)
      }
      coordsAtPos(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let nc = this.docView.coordsAt(cB, Bc);
        if (!nc || nc.left == nc.right) return nc;
        let Vc = this.state.doc.lineAt(cB),
          Ic = this.bidiSpans(Vc);
        return Kc(nc, Ic[zn.find(Ic, cB - Vc.from, -1, Bc)].dir == PB.LTR == Bc > 0)
      }
      coordsForChar(cB) {
        return this.readMeasured(), this.docView.coordsForChar(cB)
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
      textDirectionAt(cB) {
        return !this.state.facet(wB) || cB < this.viewport.from || cB > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(cB))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(cB) {
        if (cB.length > UI) return LB(cB.length);
        let Bc, nc = this.textDirectionAt(cB.from);
        for (let Ic of this.bidiCache)
          if (Ic.from == cB.from && Ic.dir == nc && (Ic.fresh || pB(Ic.isolates, Bc = un(this, cB)))) return Ic.order;
        Bc || (Bc = un(this, cB));
        let Vc = YB(cB.text, nc, Bc);
        return this.bidiCache.push(new ZI(cB.from, cB.to, nc, Bc, !0, Vc)), Vc
      }
      get hasFocus() {
        var cB;
        return (this.dom.ownerDocument.hasFocus() || lc.safari && (null === (cB = this.inputState) || void 0 === cB ? void 0 : cB.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          nB(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(cB) {
        this._root != cB && (this._root = cB, this.observer.setWindow((9 == cB.nodeType ? cB : cB.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let cB of this.plugins) cB.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var nc, Ic, rB, uc;
        return FB.of(new HB("number" == typeof cB ? Vc.m.cursor(cB) : cB, null !== (nc = Bc.y) && void 0 !== nc ? nc : "nearest", null !== (Ic = Bc.x) && void 0 !== Ic ? Ic : "nearest", null !== (rB = Bc.yMargin) && void 0 !== rB ? rB : 5, null !== (uc = Bc.xMargin) && void 0 !== uc ? uc : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: cB,
          scrollLeft: Bc
        } = this.scrollDOM, nc = this.viewState.scrollAnchorAt(cB);
        return FB.of(new HB(Vc.m.cursor(nc.from), "start", "start", nc.top - cB, Bc, !0))
      }
      setTabFocusMode(cB) {
        null == cB ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof cB ? this.inputState.tabFocusMode = cB ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + cB)
      }
      static domEventHandlers(cB) {
        return dB.define((() => ({})), {
          eventHandlers: cB
        })
      }
      static domEventObservers(cB) {
        return dB.define((() => ({})), {
          eventObservers: cB
        })
      }
      static theme(cB, Bc) {
        let nc = Ic.c.newName(),
          Vc = [TI.of(nc), Pn.of(yr(`.${nc}`, cB))];
        return Bc && Bc.dark && Vc.push(fI.of(!0)), Vc
      }
      static baseTheme(cB) {
        return Vc.v.lowest(Pn.of(yr("." + mr, cB, SI)))
      }
      static findFromDOM(cB) {
        var Bc;
        let nc = cB.querySelector(".cm-content"),
          Vc = nc && fn.get(nc) || fn.get(cB);
        return (null === (Bc = null === Vc || void 0 === Vc ? void 0 : Vc.root) || void 0 === Bc ? void 0 : Bc.view) || null
      }
    }
    gr.styleModule = Pn, gr.inputHandler = NB, gr.clipboardInputFilter = oB, gr.clipboardOutputFilter = WB, gr.scrollHandler = XB, gr.focusChangeEffect = EB, gr.perLineTextDirection = wB, gr.exceptionSink = vn, gr.updateListener = DB, gr.editable = RB, gr.mouseSelectionStyle = CB, gr.dragMovesSelection = QB, gr.clickAddsSelectionRange = ZB, gr.iu = Bn, gr.blockWrappers = nn, gr.outerDecorations = Vn, gr.atomicRanges = In, gr.bidiIsolatedRanges = rV, gr.cursorScrollMargin = Vc.q.define({
      combine: cB => {
        let Bc = 5,
          nc = 5;
        for (let Vc of cB) "number" == typeof Vc ? Bc = nc = Vc : ({
          x: Bc,
          y: nc
        } = Vc);
        return {
          x: Bc,
          y: nc
        }
      }
    }), gr.scrollMargins = sn, gr.darkTheme = fI, gr.cspNonce = Vc.q.define({
      combine: cB => cB.length ? cB[0] : ""
    }), gr.contentAttributes = cV, gr.editorAttributes = GB, gr.lineWrapping = gr.contentAttributes.of({
      class: "cm-lineWrapping"
    }), gr.announce = Vc.F.define();
    const UI = 4096,
      br = {};
    class ZI {
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        this.from = cB, this.to = Bc, this.dir = nc, this.isolates = Vc, this.fresh = Ic, this.order = rB
      }
      static update(cB, Bc) {
        if (Bc.empty && !cB.some((cB => cB.fresh))) return cB;
        let nc = [],
          Vc = cB.length ? cB[cB.length - 1].dir : PB.LTR;
        for (let Ic = Math.max(0, cB.length - 10); Ic < cB.length; Ic++) {
          let rB = cB[Ic];
          rB.dir != Vc || Bc.touchesRange(rB.from, rB.to) || nc.push(new ZI(Bc.mapPos(rB.from, 1), Bc.mapPos(rB.to, -1), rB.dir, rB.isolates, !1, rB.order))
        }
        return nc
      }
    }

    function QI(cB, Bc, nc) {
      for (let Vc = cB.state.facet(Bc), Ic = Vc.length - 1; Ic >= 0; Ic--) {
        let Bc = Vc[Ic],
          rB = "function" == typeof Bc ? Bc(cB) : Bc;
        rB && Yc(rB, nc)
      }
      return nc
    }
    const CI = lc.mac ? "mac" : lc.windows ? "win" : lc.linux ? "linux" : "key";

    function vr(cB, Bc, nc) {
      return Bc.altKey && (cB = "Alt-" + cB), Bc.ctrlKey && (cB = "Ctrl-" + cB), Bc.metaKey && (cB = "Meta-" + cB), !1 !== nc && Bc.shiftKey && (cB = "Shift-" + cB), cB
    }
    const DI = Vc.v.default(gr.domEventHandlers({
        keydown: (cB, Bc) => HI(oI(Bc.state), cB, Bc, "editor")
      })),
      NI = Vc.q.define({
        enables: DI
      }),
      EI = new WeakMap;

    function oI(cB) {
      let Bc = cB.facet(NI),
        nc = EI.get(Bc);
      return nc || EI.set(Bc, nc = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CI,
          nc = Object.create(null),
          Vc = Object.create(null),
          Ic = (cB, Bc) => {
            let nc = Vc[cB];
            if (null == nc) Vc[cB] = Bc;
            else if (nc != Bc) throw new Error("Key binding " + cB + " is used both as a regular binding and as a multi-stroke prefix")
          },
          rB = (cB, Vc, rB, uc, sc) => {
            var Mc, Pc;
            let qB = nc[cB] || (nc[cB] = Object.create(null)),
              Oc = Vc.split(/ (?!$)/).map((cB => function(cB, Bc) {
                const nc = cB.split(/-(?!$)/);
                let Vc, Ic, rB, uc, sc = nc[nc.length - 1];
                "Space" == sc && (sc = " ");
                for (let Mc = 0; Mc < nc.length - 1; ++Mc) {
                  const cB = nc[Mc];
                  if (/^(cmd|meta|m)$/i.test(cB)) uc = !0;
                  else if (/^a(lt)?$/i.test(cB)) Vc = !0;
                  else if (/^(c|ctrl|control)$/i.test(cB)) Ic = !0;
                  else if (/^s(hift)?$/i.test(cB)) rB = !0;
                  else {
                    if (!/^mod$/i.test(cB)) throw new Error("Unrecognized modifier name: " + cB);
                    "mac" == Bc ? uc = !0 : Ic = !0
                  }
                }
                return Vc && (sc = "Alt-" + sc), Ic && (sc = "Ctrl-" + sc), uc && (sc = "Meta-" + sc), rB && (sc = "Shift-" + sc), sc
              }(cB, Bc)));
            for (let Bc = 1; Bc < Oc.length; Bc++) {
              let nc = Oc.slice(0, Bc).join(" ");
              Ic(nc, !0), qB[nc] || (qB[nc] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [Bc => {
                  let Vc = wI = {
                    view: Bc,
                    prefix: nc,
                    scope: cB
                  };
                  return setTimeout((() => {
                    wI == Vc && (wI = null)
                  }), kr), !0
                }]
              })
            }
            let Tc = Oc.join(" ");
            Ic(Tc, !1);
            let fc = qB[Tc] || (qB[Tc] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (Pc = null === (Mc = qB._any) || void 0 === Mc ? void 0 : Mc.run) || void 0 === Pc ? void 0 : Pc.slice()) || []
            });
            rB && fc.run.push(rB), uc && (fc.preventDefault = !0), sc && (fc.stopPropagation = !0)
          };
        for (let uc of cB) {
          let cB = uc.scope ? uc.scope.split(" ") : ["editor"];
          if (uc.any)
            for (let Bc of cB) {
              let cB = nc[Bc] || (nc[Bc] = Object.create(null));
              cB._any || (cB._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Vc
              } = uc;
              for (let Bc in cB) cB[Bc].run.push((cB => Vc(cB, XI)))
            }
          let Vc = uc[Bc] || uc.key;
          if (Vc)
            for (let Bc of cB) rB(Bc, Vc, uc.run, uc.preventDefault, uc.stopPropagation), uc.shift && rB(Bc, "Shift-" + Vc, uc.shift, uc.preventDefault, uc.stopPropagation)
        }
        return nc
      }(Bc.reduce(((cB, Bc) => cB.concat(Bc)), []))), nc
    }

    function WI(cB, Bc, nc) {
      return HI(oI(cB.state), Bc, cB, nc)
    }
    let wI = null;
    const kr = 4e3;
    let XI = null;

    function HI(cB, Bc, nc, Ic) {
      XI = Bc;
      let Pc = function(cB) {
          var Bc = !(sc && cB.metaKey && cB.shiftKey && !cB.ctrlKey && !cB.altKey || Mc && cB.shiftKey && cB.key && 1 == cB.key.length || "Unidentified" == cB.key) && cB.key || (cB.shiftKey ? uc : rB)[cB.keyCode] || cB.key || "Unidentified";
          return "Esc" == Bc && (Bc = "Escape"), "Del" == Bc && (Bc = "Delete"), "Left" == Bc && (Bc = "ArrowLeft"), "Up" == Bc && (Bc = "ArrowUp"), "Right" == Bc && (Bc = "ArrowRight"), "Down" == Bc && (Bc = "ArrowDown"), Bc
        }(Bc),
        qB = (0, Vc.U)(Pc, 0),
        Oc = (0, Vc.Y)(qB) == Pc.length && " " != Pc,
        Tc = "",
        fc = !1,
        mB = !1,
        ec = !1;
      wI && wI.view == nc && wI.scope == Ic && (Tc = wI.prefix + " ", mI.indexOf(Bc.keyCode) < 0 && (mB = !0, wI = null));
      let tB, Sc, yB = new Set,
        zB = cB => {
          if (cB) {
            for (let Bc of cB.run)
              if (!yB.has(Bc) && (yB.add(Bc), Bc(nc))) return cB.stopPropagation && (ec = !0), !0;
            cB.preventDefault && (cB.stopPropagation && (ec = !0), mB = !0)
          }
          return !1
        },
        pc = cB[Ic];
      return pc && (zB(pc[Tc + vr(Pc, Bc, !Oc)]) ? fc = !0 : !Oc || !(Bc.altKey || Bc.metaKey || Bc.ctrlKey) || lc.windows && Bc.ctrlKey && Bc.altKey || lc.mac && Bc.altKey && !Bc.ctrlKey && !Bc.metaKey || !(tB = rB[Bc.keyCode]) || tB == Pc ? Oc && Bc.shiftKey && zB(pc[Tc + vr(Pc, Bc, !0)]) && (fc = !0) : (zB(pc[Tc + vr(tB, Bc, !0)]) || Bc.shiftKey && (Sc = uc[Bc.keyCode]) != Pc && Sc != tB && zB(pc[Tc + vr(Sc, Bc, !1)])) && (fc = !0), !fc && zB(pc._any) && (fc = !0)), mB && (fc = !0), fc && ec && Bc.stopPropagation(), XI = null, fc
    }
    class FI {
      constructor(cB, Bc, nc, Vc, Ic) {
        this.className = cB, this.left = Bc, this.top = nc, this.width = Vc, this.height = Ic
      }
      draw() {
        let cB = document.createElement("div");
        return cB.className = this.className, this.adjust(cB), cB
      }
      update(cB, Bc) {
        return Bc.className == this.className && (this.adjust(cB), !0)
      }
      adjust(cB) {
        cB.style.left = this.left + "px", cB.style.top = this.top + "px", null != this.width && (cB.style.width = this.width + "px"), cB.style.height = this.height + "px"
      }
      eq(cB) {
        return this.left == cB.left && this.top == cB.top && this.width == cB.width && this.height == cB.height && this.className == cB.className
      }
      static forRange(cB, Bc, nc) {
        if (nc.empty) {
          let Vc = cB.coordsAtPos(nc.head, nc.assoc || 1);
          if (!Vc) return [];
          let Ic = JI(cB);
          return [new FI(Bc, Vc.left - Ic.left, Vc.top - Ic.top, null, Vc.bottom - Vc.top)]
        }
        return function(cB, Bc, nc) {
          if (nc.to <= cB.viewport.from || nc.from >= cB.viewport.to) return [];
          let Vc = Math.max(nc.from, cB.viewport.from),
            Ic = Math.min(nc.to, cB.viewport.to),
            rB = cB.textDirection == PB.LTR,
            uc = cB.contentDOM,
            sc = uc.getBoundingClientRect(),
            Mc = JI(cB),
            Pc = uc.querySelector(".cm-line"),
            qB = Pc && window.getComputedStyle(Pc),
            Oc = sc.left + (qB ? parseInt(qB.paddingLeft) + Math.min(0, parseInt(qB.textIndent)) : 0),
            Tc = sc.right - (qB ? parseInt(qB.paddingRight) : 0),
            fc = Fn(cB, Vc, 1),
            mB = Fn(cB, Ic, -1),
            ec = fc.type == Qc.Text ? fc : null,
            tB = mB.type == Qc.Text ? mB : null;
          ec && (cB.lineWrapping || fc.widgetLineBreaks) && (ec = jr(cB, Vc, 1, ec));
          tB && (cB.lineWrapping || mB.widgetLineBreaks) && (tB = jr(cB, Ic, -1, tB));
          if (ec && tB && ec.from == tB.from && ec.to == tB.to) return yB(zB(nc.from, nc.to, ec));
          {
            let Bc = ec ? zB(nc.from, null, ec) : pc(fc, !1),
              Vc = tB ? zB(null, nc.to, tB) : pc(mB, !0),
              Ic = [];
            return (ec || fc).to < (tB || mB).from - (ec && tB ? 1 : 0) || fc.widgetLineBreaks > 1 && Bc.bottom + cB.defaultLineHeight / 2 < Vc.top ? Ic.push(Sc(Oc, Bc.bottom, Tc, Vc.top)) : Bc.bottom < Vc.top && cB.elementAtHeight((Bc.bottom + Vc.top) / 2).type == Qc.Text && (Bc.bottom = Vc.top = (Bc.bottom + Vc.top) / 2), yB(Bc).concat(Ic).concat(yB(Vc))
          }

          function Sc(cB, nc, Vc, Ic) {
            return new FI(Bc, cB - Mc.left, nc - Mc.top, Math.max(0, Vc - cB), Ic - nc)
          }

          function yB(cB) {
            let {
              top: Bc,
              bottom: nc,
              horizontal: Vc
            } = cB, Ic = [];
            for (let rB = 0; rB < Vc.length; rB += 2) Ic.push(Sc(Vc[rB], Bc, Vc[rB + 1], nc));
            return Ic
          }

          function zB(Bc, nc, Vc) {
            let Ic = 1e9,
              uc = -1e9,
              sc = [];

            function Mc(Bc, nc, Mc, Pc, qB) {
              let fc = cB.coordsAtPos(Bc, Bc == Vc.to ? -2 : 2),
                mB = cB.coordsAtPos(Mc, Mc == Vc.from ? 2 : -2);
              fc && mB && (Ic = Math.min(fc.top, mB.top, Ic), uc = Math.max(fc.bottom, mB.bottom, uc), qB == PB.LTR ? sc.push(rB && nc ? Oc : fc.left, rB && Pc ? Tc : mB.right) : sc.push(!rB && Pc ? Oc : mB.left, !rB && nc ? Tc : fc.right))
            }
            let Pc = null !== Bc && void 0 !== Bc ? Bc : Vc.from,
              qB = null !== nc && void 0 !== nc ? nc : Vc.to;
            for (let rB of cB.Muc)
              if (rB.to > Pc && rB.from < qB)
                for (let Vc = Math.max(rB.from, Pc), Ic = Math.min(rB.to, qB);;) {
                  let rB = cB.state.doc.lineAt(Vc);
                  for (let uc of cB.bidiSpans(rB)) {
                    let cB = uc.from + rB.from,
                      sc = uc.to + rB.from;
                    if (cB >= Ic) break;
                    sc > Vc && Mc(Math.max(cB, Vc), null == Bc && cB <= Pc, Math.min(sc, Ic), null == nc && sc >= qB, uc.dir)
                  }
                  if (Vc = rB.to + 1, Vc >= Ic) break
                }
            return 0 == sc.length && Mc(Pc, null == Bc, qB, null == nc, cB.textDirection), {
              top: Ic,
              bottom: uc,
              horizontal: sc
            }
          }

          function pc(cB, Bc) {
            let nc = sc.top + (Bc ? cB.top : cB.bottom);
            return {
              top: nc,
              bottom: nc,
              horizontal: []
            }
          }
        }(cB, Bc, nc)
      }
    }

    function JI(cB) {
      let Bc = cB.scrollDOM.getBoundingClientRect();
      return {
        left: (cB.textDirection == PB.LTR ? Bc.left : Bc.right - cB.scrollDOM.clientWidth * cB.scaleX) - cB.scrollDOM.scrollLeft * cB.scaleX,
        top: Bc.top - cB.scrollDOM.scrollTop * cB.scaleY
      }
    }

    function jr(cB, Bc, nc, Vc) {
      let Ic = cB.coordsAtPos(Bc, 2 * nc);
      if (!Ic) return Vc;
      let rB = cB.dom.getBoundingClientRect(),
        uc = (Ic.top + Ic.bottom) / 2,
        sc = cB.posAtCoords({
          x: rB.left + 1,
          y: uc
        }),
        Mc = cB.posAtCoords({
          x: rB.right - 1,
          y: uc
        });
      return null == sc || null == Mc ? Vc : {
        from: Math.max(Vc.from, Math.min(sc, Mc)),
        to: Math.min(Vc.to, Math.max(sc, Mc))
      }
    }
    class RI {
      constructor(cB, Bc) {
        this.view = cB, this.layer = Bc, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = cB.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), Bc.above && this.dom.classList.add("cm-layer-above"), Bc.class && this.dom.classList.add(Bc.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(cB.state), cB.requestMeasure(this.measureReq), Bc.mount && Bc.mount(this.dom, cB)
      }
      update(cB) {
        cB.startState.facet(ir) != cB.state.facet(ir) && this.setOrder(cB.state), (this.layer.update(cB, this.dom) || cB.geometryChanged) && (this.scale(), cB.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(cB) {
        !1 !== this.layer.updateOnDocViewUpdate && cB.requestMeasure(this.measureReq)
      }
      setOrder(cB) {
        let Bc = 0,
          nc = cB.facet(ir);
        for (; Bc < nc.length && nc[Bc] != this.layer;) Bc++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - Bc)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: cB,
          scaleY: Bc
        } = this.view;
        cB == this.scaleX && Bc == this.scaleY || (this.scaleX = cB, this.scaleY = Bc, this.dom.style.transform = `scale(${1/cB}, ${1/Bc})`)
      }
      draw(cB) {
        if (cB.length != this.drawn.length || cB.some(((cB, Bc) => {
            return nc = cB, Vc = this.drawn[Bc], !(nc.constructor == Vc.constructor && nc.eq(Vc));
            var nc, Vc
          }))) {
          let Bc = this.dom.firstChild,
            nc = 0;
          for (let Vc of cB) Vc.update && Bc && Vc.constructor && this.drawn[nc].constructor && Vc.update(Bc, this.drawn[nc]) ? (Bc = Bc.nextSibling, nc++) : this.dom.insertBefore(Vc.draw(), Bc);
          for (; Bc;) {
            let cB = Bc.nextSibling;
            Bc.remove(), Bc = cB
          }
          this.drawn = cB, lc.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const ir = Vc.q.define();

    function KI(cB) {
      return [dB.define((Bc => new RI(Bc, cB))), ir.of(cB)]
    }
    const xr = Vc.q.define({
      combine: cB => (0, Vc.$)(cB, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (cB, Bc) => Math.min(cB, Bc),
        drawRangeCursor: (cB, Bc) => cB || Bc
      })
    });

    function dI() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [xr.of(cB), GI, Br, nr, kn.of(!0)]
    }

    function AI(cB) {
      return cB.startState.facet(xr) != cB.state.facet(xr)
    }
    const GI = KI({
      above: !0,
      markers(cB) {
        let {
          state: Bc
        } = cB, nc = Bc.facet(xr), Ic = [];
        for (let rB of Bc.selection.Iu) {
          let uc = rB == Bc.selection.main;
          if (rB.empty || nc.drawRangeCursor && !(uc && lc.ios && nc.iosSelectionHandles)) {
            let Bc = uc ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              nc = rB.empty ? rB : Vc.m.cursor(rB.head, rB.assoc);
            for (let Vc of FI.forRange(cB, Bc, nc)) Ic.push(Vc)
          }
        }
        return Ic
      },
      update(cB, Bc) {
        cB.transactions.some((cB => cB.selection)) && (Bc.style.animationName = "cm-blink" == Bc.style.animationName ? "cm-blink2" : "cm-blink");
        let nc = AI(cB);
        return nc && cu(cB.state, Bc), cB.docChanged || cB.selectionSet || nc
      },
      mount(cB, Bc) {
        cu(Bc.state, cB)
      },
      class: "cm-cursorLayer"
    });

    function cu(cB, Bc) {
      Bc.style.animationDuration = cB.facet(xr).cursorBlinkRate + "ms"
    }
    const Br = KI({
        above: !1,
        markers(cB) {
          let Bc = [],
            {
              main: nc,
              Iu: Ic
            } = cB.state.selection;
          for (let Vc of Ic)
            if (!Vc.empty)
              for (let nc of FI.forRange(cB, "cm-selectionBackground", Vc)) Bc.push(nc);
          if (lc.ios && !nc.empty && cB.state.facet(xr).iosSelectionHandles) {
            for (let Ic of FI.forRange(cB, "cm-selectionHandle cm-selectionHandle-start", Vc.m.cursor(nc.from, 1))) Bc.push(Ic);
            for (let Ic of FI.forRange(cB, "cm-selectionHandle cm-selectionHandle-end", Vc.m.cursor(nc.to, 1))) Bc.push(Ic)
          }
          return Bc
        },
        update: (cB, Bc) => cB.docChanged || cB.selectionSet || cB.viewportChanged || AI(cB),
        class: "cm-selectionLayer"
      }),
      nr = Vc.v.highest(gr.theme({
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
      Vr = Vc.F.define({
        map: (cB, Bc) => null == cB ? null : Bc.mapPos(cB)
      }),
      Ir = Vc.J.define({
        create: () => null,
        update: (cB, Bc) => (null != cB && (cB = Bc.changes.mapPos(cB)), Bc.effects.reduce(((cB, Bc) => Bc.is(Vr) ? Bc.value : cB), cB))
      }),
      ru = dB.fromClass(class {
        constructor(cB) {
          this.view = cB, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(cB) {
          var Bc;
          let nc = cB.state.field(Ir);
          null == nc ? null != this.cursor && (null === (Bc = this.cursor) || void 0 === Bc || Bc.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (cB.startState.field(Ir) != nc || cB.docChanged || cB.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: cB
          } = this, Bc = cB.state.field(Ir), nc = null != Bc && cB.coordsAtPos(Bc);
          if (!nc) return null;
          let Vc = cB.scrollDOM.getBoundingClientRect();
          return {
            left: nc.left - Vc.left + cB.scrollDOM.scrollLeft * cB.scaleX,
            top: nc.top - Vc.top + cB.scrollDOM.scrollTop * cB.scaleY,
            height: nc.bottom - nc.top
          }
        }
        drawCursor(cB) {
          if (this.cursor) {
            let {
              scaleX: Bc,
              scaleY: nc
            } = this.view;
            cB ? (this.cursor.style.left = cB.left / Bc + "px", this.cursor.style.top = cB.top / nc + "px", this.cursor.style.height = cB.height / nc + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(cB) {
          this.view.state.field(Ir) != cB && this.view.dispatch({
            effects: Vr.of(cB)
          })
        }
      }, {
        eventObservers: {
          dragover(cB) {
            this.setDropPos(this.view.posAtCoords({
              x: cB.clientX,
              y: cB.clientY
            }))
          },
          dragleave(cB) {
            cB.target != this.view.contentDOM && this.view.contentDOM.contains(cB.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function ur() {
      return [Ir, ru]
    }

    function sr(cB, Bc, nc, Vc, Ic) {
      Bc.lastIndex = 0;
      for (let rB, uc = cB.iterRange(nc, Vc), sc = nc; !uc.next().done; sc += uc.value.length)
        if (!uc.lineBreak)
          for (; rB = Bc.exec(uc.value);) Ic(sc + rB.index, rB)
    }
    class Mr {
      constructor(cB) {
        const {
          regexp: Bc,
          decoration: nc,
          decorate: Vc,
          boundary: Ic,
          maxLength: rB = 1e3
        } = cB;
        if (!Bc.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = Bc, Vc) this.addMatch = (cB, Bc, nc, Ic) => Vc(Ic, nc, nc + cB[0].length, cB, Bc);
        else if ("function" == typeof nc) this.addMatch = (cB, Bc, Vc, Ic) => {
          let rB = nc(cB, Bc, Vc);
          rB && Ic(Vc, Vc + cB[0].length, rB)
        };
        else {
          if (!nc) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (cB, Bc, Vc, Ic) => Ic(Vc, Vc + cB[0].length, nc)
        }
        this.boundary = Ic, this.maxLength = rB
      }
      createDeco(cB) {
        let Bc = new Vc.x,
          nc = Bc.add.bind(Bc);
        for (let {
            from: Vc,
            to: Ic
          }
          of
          function(cB, Bc) {
            let nc = cB.Muc;
            if (1 == nc.length && nc[0].from == cB.viewport.from && nc[0].to == cB.viewport.to) return nc;
            let Vc = [];
            for (let {
                from: Ic,
                to: rB
              }
              of nc) Ic = Math.max(cB.state.doc.lineAt(Ic).from, Ic - Bc), rB = Math.min(cB.state.doc.lineAt(rB).to, rB + Bc), Vc.length && Vc[Vc.length - 1].to >= Ic ? Vc[Vc.length - 1].to = rB : Vc.push({
              from: Ic,
              to: rB
            });
            return Vc
          }(cB, this.maxLength)) sr(cB.state.doc, this.regexp, Vc, Ic, ((Bc, Vc) => this.addMatch(Vc, cB, Bc, nc)));
        return Bc.finish()
      }
      updateDeco(cB, Bc) {
        let nc = 1e9,
          Vc = -1;
        return cB.docChanged && cB.changes.iterChanges(((Bc, Ic, rB, uc) => {
          uc >= cB.view.viewport.from && rB <= cB.view.viewport.to && (nc = Math.min(rB, nc), Vc = Math.max(uc, Vc))
        })), cB.viewportMoved || Vc - nc > 1e3 ? this.createDeco(cB.view) : Vc > -1 ? this.updateRange(cB.view, Bc.map(cB.changes), nc, Vc) : Bc
      }
      updateRange(cB, Bc, nc, Vc) {
        for (let Ic of cB.Muc) {
          let rB = Math.max(Ic.from, nc),
            uc = Math.min(Ic.to, Vc);
          if (uc >= rB) {
            let nc = cB.state.doc.lineAt(rB),
              Vc = nc.to < uc ? cB.state.doc.lineAt(uc) : nc,
              sc = Math.max(Ic.from, nc.from),
              Mc = Math.min(Ic.to, Vc.to);
            if (this.boundary) {
              for (; rB > nc.from; rB--)
                if (this.boundary.test(nc.text[rB - 1 - nc.from])) {
                  sc = rB;
                  break
                } for (; uc < Vc.to; uc++)
                if (this.boundary.test(Vc.text[uc - Vc.from])) {
                  Mc = uc;
                  break
                }
            }
            let Pc, qB = [],
              Oc = (cB, Bc, nc) => qB.push(nc.range(cB, Bc));
            if (nc == Vc)
              for (this.regexp.lastIndex = sc - nc.from;
                (Pc = this.regexp.exec(nc.text)) && Pc.index < Mc - nc.from;) this.addMatch(Pc, cB, Pc.index + nc.from, Oc);
            else sr(cB.state.doc, this.regexp, sc, Mc, ((Bc, nc) => this.addMatch(nc, cB, Bc, Oc)));
            Bc = Bc.update({
              filterFrom: sc,
              filterTo: Mc,
              filter: (cB, Bc) => cB < sc || Bc > Mc,
              add: qB
            })
          }
        }
        return Bc
      }
    }
    const Pr = null != /x/.unicode ? "gu" : "g",
      qu = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", Pr),
      Or = {
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
    let Tr = null;
    const fr = Vc.q.define({
      combine(cB) {
        let Bc = (0, Vc.$)(cB, {
          render: null,
          specialChars: qu,
          addSpecialChars: null
        });
        return (Bc.replaceTabs = ! function() {
          var cB;
          if (null == Tr && "undefined" != typeof document && document.body) {
            let Bc = document.body.style;
            Tr = null != (null !== (cB = Bc.tabSize) && void 0 !== cB ? cB : Bc.MozTabSize)
          }
          return Tr || !1
        }()) && (Bc.specialChars = new RegExp("\t|" + Bc.specialChars.source, Pr)), Bc.addSpecialChars && (Bc.specialChars = new RegExp(Bc.specialChars.source + "|" + Bc.addSpecialChars.source, Pr)), Bc
      }
    });

    function mu() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [fr.of(cB), er || (er = dB.fromClass(class {
        constructor(cB) {
          this.view = cB, this.iu = Cc.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(cB.state.facet(fr)), this.iu = this.decorator.createDeco(cB)
        }
        makeDecorator(cB) {
          return new Mr({
            regexp: cB.specialChars,
            decoration: (Bc, nc, Ic) => {
              let {
                doc: rB
              } = nc.state, uc = (0, Vc.U)(Bc[0], 0);
              if (9 == uc) {
                let cB = rB.lineAt(Ic),
                  Bc = nc.state.tabSize,
                  uc = (0, Vc.bb)(cB.text, Bc, Ic - cB.from);
                return Cc.replace({
                  widget: new Sr((Bc - uc % Bc) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[uc] || (this.decorationCache[uc] = Cc.replace({
                widget: new tu(cB, uc)
              }))
            },
            boundary: cB.replaceTabs ? void 0 : /[^]/
          })
        }
        update(cB) {
          let Bc = cB.state.facet(fr);
          cB.startState.facet(fr) != Bc ? (this.decorator = this.makeDecorator(Bc), this.iu = this.decorator.createDeco(cB.view)) : this.iu = this.decorator.updateDeco(cB, this.iu)
        }
      }, {
        iu: cB => cB.iu
      }))]
    }
    let er = null;
    class tu extends Zc {
      constructor(cB, Bc) {
        super(), this.options = cB, this.code = Bc
      }
      eq(cB) {
        return cB.code == this.code
      }
      toDOM(cB) {
        let Bc = function(cB) {
            return cB >= 32 ? "\u2022" : 10 == cB ? "\u2424" : String.fromCharCode(9216 + cB)
          }(this.code),
          nc = cB.state.phrase("Control character") + " " + (Or[this.code] || "0x" + this.code.toString(16)),
          Vc = this.options.render && this.options.render(this.code, nc, Bc);
        if (Vc) return Vc;
        let Ic = document.createElement("span");
        return Ic.textContent = Bc, Ic.title = nc, Ic.setAttribute("aria-label", nc), Ic.className = "cm-specialChar", Ic
      }
      ignoreEvent() {
        return !1
      }
    }
    class Sr extends Zc {
      constructor(cB) {
        super(), this.width = cB
      }
      eq(cB) {
        return cB.width == this.width
      }
      toDOM() {
        let cB = document.createElement("span");
        return cB.textContent = "\t", cB.className = "cm-tab", cB.style.width = this.width + "px", cB
      }
      ignoreEvent() {
        return !1
      }
    }

    function yu() {
      return pr
    }
    const zu = Cc.line({
        class: "cm-activeLine"
      }),
      pr = dB.fromClass(class {
        constructor(cB) {
          this.iu = this.getDeco(cB)
        }
        update(cB) {
          (cB.docChanged || cB.selectionSet) && (this.iu = this.getDeco(cB.view))
        }
        getDeco(cB) {
          let Bc = -1,
            nc = [];
          for (let Vc of cB.state.selection.Iu) {
            let Ic = cB.lineBlockAt(Vc.head);
            Ic.from > Bc && (nc.push(zu.range(Ic.from)), Bc = Ic.from)
          }
          return Cc.set(nc)
        }
      }, {
        iu: cB => cB.iu
      });
    class hr extends Zc {
      constructor(cB) {
        super(), this.content = cB
      }
      toDOM(cB) {
        let Bc = document.createElement("span");
        return Bc.className = "cm-placeholder", Bc.style.pointerEvents = "none", Bc.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(cB) : this.content.cloneNode(!0)), Bc.setAttribute("aria-hidden", "true"), Bc
      }
      coordsAt(cB) {
        let Bc = cB.firstChild ? Hc(cB.firstChild) : [];
        if (!Bc.length) return null;
        let nc = window.getComputedStyle(cB.parentNode),
          Vc = Kc(Bc[0], "rtl" != nc.direction),
          Ic = parseInt(nc.lineHeight);
        return Vc.bottom - Vc.top > 1.5 * Ic ? {
          left: Vc.left,
          right: Vc.right,
          top: Vc.top,
          bottom: Vc.top + Ic
        } : Vc
      }
      ignoreEvent() {
        return !1
      }
    }

    function au(cB) {
      let Bc = dB.fromClass(class {
        constructor(Bc) {
          this.view = Bc, this.placeholder = cB ? Cc.set([Cc.widget({
            widget: new hr(cB),
            side: 1
          }).range(0)]) : Cc.none
        }
        get iu() {
          return this.view.state.doc.length ? Cc.none : this.placeholder
        }
      }, {
        iu: cB => cB.iu
      });
      return "string" == typeof cB ? [Bc, gr.contentAttributes.of({
        "aria-placeholder": cB
      })] : Bc
    }
    const lr = 2e3;

    function Yr(cB, Bc) {
      let nc = cB.posAtCoords({
          x: Bc.clientX,
          y: Bc.clientY
        }, !1),
        Ic = cB.state.doc.lineAt(nc),
        rB = nc - Ic.from,
        uc = rB > lr ? -1 : rB == Ic.length ? function(cB, Bc) {
          let nc = cB.coordsAtPos(cB.viewport.from);
          return nc ? Math.round(Math.abs((nc.left - Bc) / cB.defaultCharacterWidth)) : -1
        }(cB, Bc.clientX) : (0, Vc.bb)(Ic.text, cB.state.tabSize, nc - Ic.from);
      return {
        line: Ic.number,
        col: uc,
        off: rB
      }
    }

    function Lr(cB, Bc) {
      let nc = Yr(cB, Bc),
        Ic = cB.state.selection;
      return nc ? {
        update(cB) {
          if (cB.docChanged) {
            let Bc = cB.changes.mapPos(cB.startState.doc.line(nc.line).from),
              Vc = cB.state.doc.lineAt(Bc);
            nc = {
              line: Vc.number,
              col: nc.col,
              off: Math.min(nc.off, Vc.length)
            }, Ic = Ic.map(cB.changes)
          }
        },
        get(Bc, rB, uc) {
          let sc = Yr(cB, Bc);
          if (!sc) return Ic;
          let Mc = function(cB, Bc, nc) {
            let Ic = Math.min(Bc.line, nc.line),
              rB = Math.max(Bc.line, nc.line),
              uc = [];
            if (Bc.off > lr || nc.off > lr || Bc.col < 0 || nc.col < 0) {
              let sc = Math.min(Bc.off, nc.off),
                Mc = Math.max(Bc.off, nc.off);
              for (let Bc = Ic; Bc <= rB; Bc++) {
                let nc = cB.doc.line(Bc);
                nc.length <= Mc && uc.push(Vc.m.range(nc.from + sc, nc.to + Mc))
              }
            } else {
              let sc = Math.min(Bc.col, nc.col),
                Mc = Math.max(Bc.col, nc.col);
              for (let Bc = Ic; Bc <= rB; Bc++) {
                let nc = cB.doc.line(Bc),
                  Ic = (0, Vc.gb)(nc.text, sc, cB.tabSize, !0);
                if (Ic < 0) uc.push(Vc.m.cursor(nc.to));
                else {
                  let Bc = (0, Vc.gb)(nc.text, Mc, cB.tabSize);
                  uc.push(Vc.m.range(nc.from + Ic, nc.from + Bc))
                }
              }
            }
            return uc
          }(cB.state, nc, sc);
          return Mc.length ? uc ? Vc.m.create(Mc.concat(Ic.Iu)) : Vc.m.create(Mc) : Ic
        }
      } : null
    }

    function gu(cB) {
      let Bc = (null === cB || void 0 === cB ? void 0 : cB.eventFilter) || (cB => cB.altKey && 0 == cB.button);
      return gr.mouseSelectionStyle.of(((cB, nc) => Bc(nc) ? Lr(cB, nc) : null))
    }
    const Ur = {
        Alt: [18, cB => !!cB.altKey],
        Control: [17, cB => !!cB.ctrlKey],
        Shift: [16, cB => !!cB.shiftKey],
        Meta: [91, cB => !!cB.metaKey]
      },
      bu = {
        style: "cursor: crosshair"
      };

    function Zr() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [Bc, nc] = Ur[cB.key || "Alt"],
        Vc = dB.fromClass(class {
          constructor(cB) {
            this.view = cB, this.isDown = !1
          }
          set(cB) {
            this.isDown != cB && (this.isDown = cB, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(cB) {
              this.set(cB.keyCode == Bc || nc(cB))
            },
            keyup(cB) {
              cB.keyCode != Bc && nc(cB) || this.set(!1)
            },
            mousemove(cB) {
              this.set(nc(cB))
            }
          }
        });
      return [Vc, gr.contentAttributes.of((cB => {
        var Bc;
        return (null === (Bc = cB.plugin(Vc)) || void 0 === Bc ? void 0 : Bc.isDown) ? bu : null
      }))]
    }
    const Qr = "-10000px";
    class Cr {
      constructor(cB, Bc, nc, Vc) {
        this.facet = Bc, this.createTooltipView = nc, this.removeTooltipView = Vc, this.input = cB.state.facet(Bc), this.tooltips = this.input.filter((cB => cB));
        let Ic = null;
        this.tooltipViews = this.tooltips.map((cB => Ic = nc(cB, Ic)))
      }
      update(cB, Bc) {
        var nc;
        let Vc = cB.state.facet(this.facet),
          Ic = Vc.filter((cB => cB));
        if (Vc === this.input) {
          for (let Bc of this.tooltipViews) Bc.update && Bc.update(cB);
          return !1
        }
        let rB = [],
          uc = Bc ? [] : null;
        for (let sc = 0; sc < Ic.length; sc++) {
          let nc = Ic[sc],
            Vc = -1;
          if (nc) {
            for (let cB = 0; cB < this.tooltips.length; cB++) {
              let Bc = this.tooltips[cB];
              Bc && Bc.create == nc.create && (Vc = cB)
            }
            if (Vc < 0) rB[sc] = this.createTooltipView(nc, sc ? rB[sc - 1] : null), uc && (uc[sc] = !!nc.above);
            else {
              let nc = rB[sc] = this.tooltipViews[Vc];
              uc && (uc[sc] = Bc[Vc]), nc.update && nc.update(cB)
            }
          }
        }
        for (let sc of this.tooltipViews) rB.indexOf(sc) < 0 && (this.removeTooltipView(sc), null === (nc = sc.destroy) || void 0 === nc || nc.call(sc));
        return Bc && (uc.forEach(((cB, nc) => Bc[nc] = cB)), Bc.length = uc.length), this.input = Vc, this.tooltips = Ic, this.tooltipViews = rB, !0
      }
    }

    function vu(cB) {
      let Bc = cB.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: Bc.clientHeight,
        right: Bc.clientWidth
      }
    }
    const Dr = Vc.q.define({
        combine: cB => {
          var Bc, nc, Vc;
          return {
            position: lc.ios ? "absolute" : (null === (Bc = cB.find((cB => cB.position))) || void 0 === Bc ? void 0 : Bc.position) || "fixed",
            parent: (null === (nc = cB.find((cB => cB.parent))) || void 0 === nc ? void 0 : nc.parent) || null,
            tooltipSpace: (null === (Vc = cB.find((cB => cB.tooltipSpace))) || void 0 === Vc ? void 0 : Vc.tooltipSpace) || vu
          }
        }
      }),
      Nr = new WeakMap,
      Er = dB.fromClass(class {
        constructor(cB) {
          this.view = cB, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let Bc = cB.state.facet(Dr);
          this.position = Bc.position, this.parent = Bc.parent, this.classes = cB.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Cr(cB, ku, ((cB, Bc) => this.createTooltip(cB, Bc)), (cB => {
            this.resizeObserver && this.resizeObserver.unobserve(cB.dom), cB.dom.remove()
          })), this.above = this.manager.tooltips.map((cB => !!cB.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((cB => {
            Date.now() > this.lastTransaction - 50 && cB.length > 0 && cB[cB.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), cB.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let cB of this.manager.tooltipViews) this.intersectionObserver.observe(cB.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(cB) {
          cB.transactions.length && (this.lastTransaction = Date.now());
          let Bc = this.manager.update(cB, this.above);
          Bc && this.observeIntersection();
          let nc = Bc || cB.geometryChanged,
            Vc = cB.state.facet(Dr);
          if (Vc.position != this.position && !this.madeAbsolute) {
            this.position = Vc.position;
            for (let cB of this.manager.tooltipViews) cB.dom.style.position = this.position;
            nc = !0
          }
          if (Vc.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Vc.parent, this.createContainer();
            for (let cB of this.manager.tooltipViews) this.container.appendChild(cB.dom);
            nc = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          nc && this.maybeMeasure()
        }
        createTooltip(cB, Bc) {
          let nc = cB.create(this.view),
            Vc = Bc ? Bc.dom : null;
          if (nc.dom.classList.add("cm-tooltip"), cB.arrow && !nc.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let cB = document.createElement("div");
            cB.className = "cm-tooltip-arrow", nc.dom.appendChild(cB)
          }
          return nc.dom.style.position = this.position, nc.dom.style.top = Qr, nc.dom.style.left = "0px", this.container.insertBefore(nc.dom, Vc), nc.mount && nc.mount(this.view), this.resizeObserver && this.resizeObserver.observe(nc.dom), nc
        }
        destroy() {
          var cB, Bc, nc;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Vc of this.manager.tooltipViews) Vc.dom.remove(), null === (cB = Vc.destroy) || void 0 === cB || cB.call(Vc);
          this.parent && this.container.remove(), null === (Bc = this.resizeObserver) || void 0 === Bc || Bc.disconnect(), null === (nc = this.intersectionObserver) || void 0 === nc || nc.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let cB = 1,
            Bc = 1,
            nc = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: cB
            } = this.manager.tooltipViews[0];
            if (lc.safari) {
              let Bc = cB.getBoundingClientRect();
              nc = Math.abs(Bc.top + 1e4) > 1 || Math.abs(Bc.left) > 1
            } else nc = !!cB.offsetParent && cB.offsetParent != this.container.ownerDocument.body
          }
          if (nc || "absolute" == this.position)
            if (this.parent) {
              let nc = this.parent.getBoundingClientRect();
              nc.width && nc.height && (cB = nc.width / this.parent.offsetWidth, Bc = nc.height / this.parent.offsetHeight)
            } else({
              scaleX: cB,
              scaleY: Bc
            } = this.view.viewState);
          let Vc = this.view.scrollDOM.getBoundingClientRect(),
            Ic = Mn(this.view);
          return {
            visible: {
              left: Vc.left + Ic.left,
              top: Vc.top + Ic.top,
              right: Vc.right - Ic.right,
              bottom: Vc.bottom - Ic.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((cB, Bc) => {
              let nc = this.manager.tooltipViews[Bc];
              return nc.getCoords ? nc.getCoords(cB.pos) : this.view.coordsAtPos(cB.pos)
            })),
            size: this.manager.tooltipViews.map((cB => {
              let {
                dom: Bc
              } = cB;
              return Bc.getBoundingClientRect()
            })),
            space: this.view.state.facet(Dr).tooltipSpace(this.view),
            scaleX: cB,
            scaleY: Bc,
            makeAbsolute: nc
          }
        }
        writeMeasure(cB) {
          var Bc;
          if (cB.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let cB of this.manager.tooltipViews) cB.dom.style.position = "absolute"
          }
          let {
            visible: nc,
            space: Vc,
            scaleX: Ic,
            scaleY: rB
          } = cB, uc = [];
          for (let sc = 0; sc < this.manager.tooltips.length; sc++) {
            let Mc = this.manager.tooltips[sc],
              Pc = this.manager.tooltipViews[sc],
              {
                dom: qB
              } = Pc,
              Oc = cB.pos[sc],
              Tc = cB.size[sc];
            if (!Oc || !1 !== Mc.clip && (Oc.bottom <= Math.max(nc.top, Vc.top) || Oc.top >= Math.min(nc.bottom, Vc.bottom) || Oc.right < Math.max(nc.left, Vc.left) - .1 || Oc.left > Math.min(nc.right, Vc.right) + .1)) {
              qB.style.top = Qr;
              continue
            }
            let fc = Mc.arrow ? Pc.dom.querySelector(".cm-tooltip-arrow") : null,
              mB = fc ? 7 : 0,
              ec = Tc.right - Tc.left,
              tB = null !== (Bc = Nr.get(Pc)) && void 0 !== Bc ? Bc : Tc.bottom - Tc.top,
              Sc = Pc.offset || wr,
              yB = this.view.textDirection == PB.LTR,
              zB = Tc.width > Vc.right - Vc.left ? yB ? Vc.left : Vc.right - Tc.width : yB ? Math.max(Vc.left, Math.min(Oc.left - (fc ? 14 : 0) + Sc.x, Vc.right - ec)) : Math.min(Math.max(Vc.left, Oc.left - ec + (fc ? 14 : 0) - Sc.x), Vc.right - ec),
              pc = this.above[sc];
            !Mc.strictSide && (pc ? Oc.top - tB - mB - Sc.y < Vc.top : Oc.bottom + tB + mB + Sc.y > Vc.bottom) && pc == Vc.bottom - Oc.bottom > Oc.top - Vc.top && (pc = this.above[sc] = !pc);
            let hc = (pc ? Oc.top - Vc.top : Vc.bottom - Oc.bottom) - mB;
            if (hc < tB && !1 !== Pc.resize) {
              if (hc < this.view.defaultLineHeight) {
                qB.style.top = Qr;
                continue
              }
              Nr.set(Pc, tB), qB.style.height = (tB = hc) / rB + "px"
            } else qB.style.height && (qB.style.height = "");
            let aB = pc ? Oc.top - tB - mB - Sc.y : Oc.bottom + mB + Sc.y,
              lc = zB + ec;
            if (!0 !== Pc.overlap)
              for (let cB of uc) cB.left < lc && cB.right > zB && cB.top < aB + tB && cB.bottom > aB && (aB = pc ? cB.top - tB - 2 - mB : cB.bottom + mB + 2);
            if ("absolute" == this.position ? (qB.style.top = (aB - cB.parent.top) / rB + "px", or(qB, (zB - cB.parent.left) / Ic)) : (qB.style.top = aB / rB + "px", or(qB, zB / Ic)), fc) {
              let cB = Oc.left + (yB ? Sc.x : -Sc.x) - (zB + 14 - 7);
              fc.style.left = cB / Ic + "px"
            }!0 !== Pc.overlap && uc.push({
              left: zB,
              top: aB,
              right: lc,
              bottom: aB + tB
            }), qB.classList.toggle("cm-tooltip-above", pc), qB.classList.toggle("cm-tooltip-below", !pc), Pc.positioned && Pc.positioned(cB.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let cB of this.manager.tooltipViews) cB.dom.style.top = Qr
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function or(cB, Bc) {
      let nc = parseInt(cB.style.left, 10);
      (isNaN(nc) || Math.abs(Bc - nc) > 1) && (cB.style.left = Bc + "px")
    }
    const Wr = gr.baseTheme({
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
      wr = {
        x: 0,
        y: 0
      },
      ku = Vc.q.define({
        enables: [Er, Wr]
      }),
      Xr = Vc.q.define({
        combine: cB => cB.reduce(((cB, Bc) => cB.concat(Bc)), [])
      });
    class Hr {
      static create(cB) {
        return new Hr(cB)
      }
      constructor(cB) {
        this.view = cB, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Cr(cB, Xr, ((cB, Bc) => this.createHostedView(cB, Bc)), (cB => cB.dom.remove()))
      }
      createHostedView(cB, Bc) {
        let nc = cB.create(this.view);
        return nc.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(nc.dom, Bc ? Bc.dom.nextSibling : this.dom.firstChild), this.mounted && nc.mount && nc.mount(this.view), nc
      }
      mount(cB) {
        for (let Bc of this.manager.tooltipViews) Bc.mount && Bc.mount(cB);
        this.mounted = !0
      }
      positioned(cB) {
        for (let Bc of this.manager.tooltipViews) Bc.positioned && Bc.positioned(cB)
      }
      update(cB) {
        this.manager.update(cB)
      }
      destroy() {
        var cB;
        for (let Bc of this.manager.tooltipViews) null === (cB = Bc.destroy) || void 0 === cB || cB.call(Bc)
      }
      passProp(cB) {
        let Bc;
        for (let nc of this.manager.tooltipViews) {
          let Vc = nc[cB];
          if (void 0 !== Vc)
            if (void 0 === Bc) Bc = Vc;
            else if (Bc !== Vc) return
        }
        return Bc
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
    const Fr = ku.compute([Xr], (cB => {
      let Bc = cB.facet(Xr);
      return 0 === Bc.length ? null : {
        pos: Math.min(...Bc.map((cB => cB.pos))),
        end: Math.max(...Bc.map((cB => {
          var Bc;
          return null !== (Bc = cB.end) && void 0 !== Bc ? Bc : cB.pos
        }))),
        create: Hr.create,
        above: Bc[0].above,
        arrow: Bc.some((cB => cB.arrow))
      }
    }));
    class Jr {
      constructor(cB, Bc, nc, Vc, Ic) {
        this.view = cB, this.source = Bc, this.field = nc, this.setHover = Vc, this.hoverTime = Ic, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: cB.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), cB.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), cB.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let cB = Date.now() - this.lastMove.time;
        cB < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - cB) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: cB,
          lastMove: Bc
        } = this, nc = cB.docView.tile.nearest(Bc.target);
        if (!nc) return;
        let Vc, Ic = 1;
        if (nc.isWidget()) Vc = nc.posAtStart;
        else {
          if (Vc = cB.posAtCoords(Bc), null == Vc) return;
          let nc = cB.coordsAtPos(Vc);
          if (!nc || Bc.y < nc.top || Bc.y > nc.bottom || Bc.x < nc.left - cB.defaultCharacterWidth || Bc.x > nc.right + cB.defaultCharacterWidth) return;
          let rB = cB.bidiSpans(cB.state.doc.lineAt(Vc)).find((cB => cB.from <= Vc && cB.to >= Vc)),
            uc = rB && rB.dir == PB.RTL ? -1 : 1;
          Ic = Bc.x < nc.left ? -uc : uc
        }
        let rB = this.source(cB, Vc, Ic);
        if (null === rB || void 0 === rB ? void 0 : rB.then) {
          let Bc = this.pending = {
            pos: Vc
          };
          rB.then((nc => {
            this.pending == Bc && (this.pending = null, !nc || Array.isArray(nc) && !nc.length || cB.dispatch({
              effects: this.setHover.of(Array.isArray(nc) ? nc : [nc])
            }))
          }), (Bc => jn(cB.state, Bc, "hover tooltip")))
        } else !rB || Array.isArray(rB) && !rB.length || cB.dispatch({
          effects: this.setHover.of(Array.isArray(rB) ? rB : [rB])
        })
      }
      get tooltip() {
        let cB = this.view.plugin(Er),
          Bc = cB ? cB.manager.tooltips.findIndex((cB => cB.create == Hr.create)) : -1;
        return Bc > -1 ? cB.manager.tooltipViews[Bc] : null
      }
      mousemove(cB) {
        var Bc, nc;
        this.lastMove = {
          x: cB.clientX,
          y: cB.clientY,
          target: cB.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Vc,
          tooltip: Ic
        } = this;
        if (Vc.length && Ic && ! function(cB, Bc) {
            let nc, {
              left: Vc,
              right: Ic,
              top: rB,
              bottom: uc
            } = cB.getBoundingClientRect();
            if (nc = cB.querySelector(".cm-tooltip-arrow")) {
              let cB = nc.getBoundingClientRect();
              rB = Math.min(cB.top, rB), uc = Math.max(cB.bottom, uc)
            }
            return Bc.clientX >= Vc - ju && Bc.clientX <= Ic + ju && Bc.clientY >= rB - ju && Bc.clientY <= uc + ju
          }(Ic.dom, cB) || this.pending) {
          let {
            pos: Ic
          } = Vc[0] || this.pending, rB = null !== (nc = null === (Bc = Vc[0]) || void 0 === Bc ? void 0 : Bc.end) && void 0 !== nc ? nc : Ic;
          (Ic == rB ? this.view.posAtCoords(this.lastMove) == Ic : function(cB, Bc, nc, Vc, Ic) {
            let rB = cB.scrollDOM.getBoundingClientRect(),
              uc = cB.documentTop + cB.documentPadding.top + cB.contentHeight;
            if (rB.left > Vc || rB.right < Vc || rB.top > Ic || Math.min(rB.bottom, uc) < Ic) return !1;
            let sc = cB.posAtCoords({
              x: Vc,
              y: Ic
            }, !1);
            return sc >= Bc && sc <= nc
          }(this.view, Ic, rB, cB.clientX, cB.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(cB) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: Bc
        } = this;
        if (Bc.length) {
          let {
            tooltip: Bc
          } = this;
          Bc && Bc.dom.contains(cB.relatedTarget) ? this.watchTooltipLeave(Bc.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(cB) {
        let Bc = nc => {
          cB.removeEventListener("mouseleave", Bc), this.active.length && !this.view.dom.contains(nc.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        cB.addEventListener("mouseleave", Bc)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const ju = 4;

    function Rr(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        nc = Vc.F.define(),
        Ic = Vc.J.define({
          create: () => [],
          update(cB, Ic) {
            if (cB.length && (Bc.hideOnChange && (Ic.docChanged || Ic.selection) ? cB = [] : Bc.hideOn && (cB = cB.filter((cB => !Bc.hideOn(Ic, cB)))), Ic.docChanged)) {
              let Bc = [];
              for (let nc of cB) {
                let cB = Ic.changes.mapPos(nc.pos, -1, Vc.s.TrackDel);
                if (null != cB) {
                  let Vc = Object.assign(Object.create(null), nc);
                  Vc.pos = cB, null != Vc.end && (Vc.end = Ic.changes.mapPos(Vc.end)), Bc.push(Vc)
                }
              }
              cB = Bc
            }
            for (let Bc of Ic.effects) Bc.is(nc) && (cB = Bc.value), Bc.is(Kr) && (cB = []);
            return cB
          },
          provide: cB => Xr.from(cB)
        });
      return {
        active: Ic,
        extension: [Ic, dB.define((Vc => new Jr(Vc, cB, Ic, nc, Bc.hoverTime || 300))), Fr]
      }
    }

    function iu(cB, Bc) {
      let nc = cB.plugin(Er);
      if (!nc) return null;
      let Vc = nc.manager.tooltips.indexOf(Bc);
      return Vc < 0 ? null : nc.manager.tooltipViews[Vc]
    }
    const Kr = Vc.F.define();
    const xu = Vc.q.define({
      combine(cB) {
        let Bc, nc;
        for (let Vc of cB) Bc = Bc || Vc.topContainer, nc = nc || Vc.bottomContainer;
        return {
          topContainer: Bc,
          bottomContainer: nc
        }
      }
    });

    function dr(cB, Bc) {
      let nc = cB.plugin(Ar),
        Vc = nc ? nc.specs.indexOf(Bc) : -1;
      return Vc > -1 ? nc.panels[Vc] : null
    }
    const Ar = dB.fromClass(class {
      constructor(cB) {
        this.input = cB.state.facet(Bu), this.specs = this.input.filter((cB => cB)), this.panels = this.specs.map((Bc => Bc(cB)));
        let Bc = cB.state.facet(xu);
        this.top = new Gr(cB, !0, Bc.topContainer), this.bottom = new Gr(cB, !1, Bc.bottomContainer), this.top.sync(this.panels.filter((cB => cB.top))), this.bottom.sync(this.panels.filter((cB => !cB.top)));
        for (let nc of this.panels) nc.dom.classList.add("cm-panel"), nc.mount && nc.mount()
      }
      update(cB) {
        let Bc = cB.state.facet(xu);
        this.top.container != Bc.topContainer && (this.top.sync([]), this.top = new Gr(cB.view, !0, Bc.topContainer)), this.bottom.container != Bc.bottomContainer && (this.bottom.sync([]), this.bottom = new Gr(cB.view, !1, Bc.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let nc = cB.state.facet(Bu);
        if (nc != this.input) {
          let Bc = nc.filter((cB => cB)),
            Vc = [],
            Ic = [],
            rB = [],
            uc = [];
          for (let nc of Bc) {
            let Bc, sc = this.specs.indexOf(nc);
            sc < 0 ? (Bc = nc(cB.view), uc.push(Bc)) : (Bc = this.panels[sc], Bc.update && Bc.update(cB)), Vc.push(Bc), (Bc.top ? Ic : rB).push(Bc)
          }
          this.specs = Bc, this.panels = Vc, this.top.sync(Ic), this.bottom.sync(rB);
          for (let cB of uc) cB.dom.classList.add("cm-panel"), cB.mount && cB.mount()
        } else
          for (let Vc of this.panels) Vc.update && Vc.update(cB)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: cB => gr.scrollMargins.of((Bc => {
        let nc = Bc.plugin(cB);
        return nc && {
          top: nc.top.scrollMargin(),
          bottom: nc.bottom.scrollMargin()
        }
      }))
    });
    class Gr {
      constructor(cB, Bc, nc) {
        this.view = cB, this.top = Bc, this.container = nc, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(cB) {
        for (let Bc of this.panels) Bc.destroy && cB.indexOf(Bc) < 0 && Bc.destroy();
        this.panels = cB, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let cB = this.container || this.view.dom;
          cB.insertBefore(this.dom, this.top ? cB.firstChild : null)
        }
        let cB = this.dom.firstChild;
        for (let Bc of this.panels)
          if (Bc.dom.parentNode == this.dom) {
            for (; cB != Bc.dom;) cB = cs(cB);
            cB = cB.nextSibling
          } else this.dom.insertBefore(Bc.dom, cB);
        for (; cB;) cB = cs(cB)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let cB of this.classes.split(" ")) cB && this.container.classList.remove(cB);
          for (let cB of (this.classes = this.view.themeClasses).split(" ")) cB && this.container.classList.add(cB)
        }
      }
    }

    function cs(cB) {
      let Bc = cB.nextSibling;
      return cB.remove(), Bc
    }
    const Bu = Vc.q.define({
      enables: Ar
    });

    function nu(cB, Bc) {
      let nc, Ic = new Promise((cB => nc = cB)),
        rB = cB => function(cB, Bc, nc) {
          let Vc = Bc.content ? Bc.content(cB, (() => uc(null))) : null;
          if (!Vc) {
            if (Vc = (0, Oc.b)("form"), Bc.input) {
              let cB = (0, Oc.b)("input", Bc.input);
              /^(text|password|number|email|tel|url)$/.test(cB.type) && cB.classList.add("cm-textfield"), cB.name || (cB.name = "input"), Vc.appendChild((0, Oc.b)("label", (Bc.label || "") + ": ", cB))
            } else Vc.appendChild(document.createTextNode(Bc.label || ""));
            Vc.appendChild(document.createTextNode(" ")), Vc.appendChild((0, Oc.b)("button", {
              class: "cm-button",
              type: "submit"
            }, Bc.submitLabel || "OK"))
          }
          let Ic = "FORM" == Vc.nodeName ? [Vc] : Vc.querySelectorAll("form");
          for (let sc = 0; sc < Ic.length; sc++) {
            let cB = Ic[sc];
            cB.addEventListener("keydown", (Bc => {
              27 == Bc.keyCode ? (Bc.preventDefault(), uc(null)) : 13 == Bc.keyCode && (Bc.preventDefault(), uc(cB))
            })), cB.addEventListener("submit", (Bc => {
              Bc.preventDefault(), uc(cB)
            }))
          }
          let rB = (0, Oc.b)("div", Vc, (0, Oc.b)("button", {
            onclick: () => uc(null),
            "aria-label": cB.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          Bc.class && (rB.className = Bc.class);

          function uc(Bc) {
            rB.contains(rB.ownerDocument.activeElement) && cB.focus(), nc(Bc)
          }
          return rB.classList.add("cm-dialog"), {
            dom: rB,
            top: Bc.top,
            mount: () => {
              if (Bc.focus) {
                let cB;
                cB = "string" == typeof Bc.focus ? Vc.querySelector(Bc.focus) : Vc.querySelector("input") || Vc.querySelector("button"), cB && "select" in cB ? cB.select() : cB && "focus" in cB && cB.focus()
              }
            }
          }
        }(cB, Bc, nc);
      cB.state.field(Vu, !1) ? cB.dispatch({
        effects: Iu.of(rB)
      }) : cB.dispatch({
        effects: Vc.F.appendConfig.of(Vu.init((() => [rB])))
      });
      let uc = rs.of(rB);
      return {
        close: uc,
        result: Ic.then((Bc => ((cB.win.queueMicrotask || (Bc => cB.win.setTimeout(Bc, 10)))((() => {
          cB.state.field(Vu).indexOf(rB) > -1 && cB.dispatch({
            effects: uc
          })
        })), Bc)))
      }
    }
    const Vu = Vc.J.define({
        create: () => [],
        update(cB, Bc) {
          for (let nc of Bc.effects) nc.is(Iu) ? cB = [nc.value].concat(cB) : nc.is(rs) && (cB = cB.filter((cB => cB != nc.value)));
          return cB
        },
        provide: cB => Bu.computeN([cB], (Bc => Bc.field(cB)))
      }),
      Iu = Vc.F.define(),
      rs = Vc.F.define();
    class uu extends Vc.C {
      compare(cB) {
        return this == cB || this.constructor == cB.constructor && this.eq(cB)
      }
      eq(cB) {
        return !1
      }
      destroy(cB) {}
    }
    uu.prototype.elementClass = "", uu.prototype.toDOM = void 0, uu.prototype.mapMode = Vc.s.TrackBefore, uu.prototype.startSide = uu.prototype.endSide = -1, uu.prototype.point = !0;
    const su = Vc.q.define(),
      Mu = Vc.q.define(),
      Pu = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Vc.y.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      qs = Vc.q.define();

    function Ou(cB) {
      return [fu(), qs.of({
        ...Pu,
        ...cB
      })]
    }
    const Tu = Vc.q.define({
      combine: cB => cB.some((cB => cB))
    });

    function fu(cB) {
      let Bc = [ms];
      return cB && !1 === cB.fixed && Bc.push(Tu.of(!0)), Bc
    }
    const ms = dB.fromClass(class {
      constructor(cB) {
        this.view = cB, this.domAfter = null, this.prevViewport = cB.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = cB.state.facet(qs).map((Bc => new ys(cB, Bc))), this.fixed = !cB.state.facet(Tu);
        for (let Bc of this.gutters) "after" == Bc.config.side ? this.getDOMAfter().appendChild(Bc.dom) : this.dom.appendChild(Bc.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), cB.scrollDOM.insertBefore(this.dom, cB.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(cB) {
        if (this.updateGutters(cB)) {
          let Bc = this.prevViewport,
            nc = cB.view.viewport,
            Vc = Math.min(Bc.to, nc.to) - Math.max(Bc.from, nc.from);
          this.syncGutters(Vc < .8 * (nc.to - nc.from))
        }
        if (cB.geometryChanged) {
          let cB = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = cB, this.domAfter && (this.domAfter.style.minHeight = cB)
        }
        this.view.state.facet(Tu) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = cB.view.viewport
      }
      syncGutters(cB) {
        let Bc = this.dom.nextSibling;
        cB && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let nc = Vc.y.iter(this.view.state.facet(su), this.view.viewport.from),
          Ic = [],
          rB = this.gutters.map((cB => new Su(cB, this.view.viewport, -this.view.documentPadding.top)));
        for (let Vc of this.view.viewportLineBlocks)
          if (Ic.length && (Ic = []), Array.isArray(Vc.type)) {
            let cB = !0;
            for (let Bc of Vc.type)
              if (Bc.type == Qc.Text && cB) {
                ts(nc, Ic, Bc.from);
                for (let cB of rB) cB.line(this.view, Bc, Ic);
                cB = !1
              } else if (Bc.widget)
              for (let cB of rB) cB.widget(this.view, Bc)
          } else if (Vc.type == Qc.Text) {
          ts(nc, Ic, Vc.from);
          for (let cB of rB) cB.line(this.view, Vc, Ic)
        } else if (Vc.widget)
          for (let cB of rB) cB.widget(this.view, Vc);
        for (let Vc of rB) Vc.finish();
        cB && (this.view.scrollDOM.insertBefore(this.dom, Bc), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(cB) {
        let Bc = cB.startState.facet(qs),
          nc = cB.state.facet(qs),
          Ic = cB.docChanged || cB.heightChanged || cB.viewportChanged || !Vc.y.eq(cB.startState.facet(su), cB.state.facet(su), cB.view.viewport.from, cB.view.viewport.to);
        if (Bc == nc)
          for (let Vc of this.gutters) Vc.update(cB) && (Ic = !0);
        else {
          Ic = !0;
          let Vc = [];
          for (let Ic of nc) {
            let nc = Bc.indexOf(Ic);
            nc < 0 ? Vc.push(new ys(this.view, Ic)) : (this.gutters[nc].update(cB), Vc.push(this.gutters[nc]))
          }
          for (let cB of this.gutters) cB.dom.remove(), Vc.indexOf(cB) < 0 && cB.destroy();
          for (let cB of Vc) "after" == cB.config.side ? this.getDOMAfter().appendChild(cB.dom) : this.dom.appendChild(cB.dom);
          this.gutters = Vc
        }
        return Ic
      }
      destroy() {
        for (let cB of this.gutters) cB.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: cB => gr.scrollMargins.of((Bc => {
        let nc = Bc.plugin(cB);
        if (!nc || 0 == nc.gutters.length || !nc.fixed) return null;
        let Vc = nc.dom.offsetWidth * Bc.scaleX,
          Ic = nc.domAfter ? nc.domAfter.offsetWidth * Bc.scaleX : 0;
        return Bc.textDirection == PB.LTR ? {
          left: Vc,
          right: Ic
        } : {
          right: Vc,
          left: Ic
        }
      }))
    });

    function eu(cB) {
      return Array.isArray(cB) ? cB : [cB]
    }

    function ts(cB, Bc, nc) {
      for (; cB.value && cB.from <= nc;) cB.from == nc && Bc.push(cB.value), cB.next()
    }
    class Su {
      constructor(cB, Bc, nc) {
        this.gutter = cB, this.height = nc, this.i = 0, this.cursor = Vc.y.iter(cB.markers, Bc.from)
      }
      addElement(cB, Bc, nc) {
        let {
          gutter: Vc
        } = this, Ic = (Bc.top - this.height) / cB.scaleY, rB = Bc.height / cB.scaleY;
        if (this.i == Vc.elements.length) {
          let Bc = new zs(cB, rB, Ic, nc);
          Vc.elements.push(Bc), Vc.dom.appendChild(Bc.dom)
        } else Vc.elements[this.i].update(cB, rB, Ic, nc);
        this.height = Bc.bottom, this.i++
      }
      line(cB, Bc, nc) {
        let Vc = [];
        ts(this.cursor, Vc, Bc.from), nc.length && (Vc = Vc.concat(nc));
        let Ic = this.gutter.config.lineMarker(cB, Bc, Vc);
        Ic && Vc.unshift(Ic);
        let rB = this.gutter;
        (0 != Vc.length || rB.config.renderEmptyElements) && this.addElement(cB, Bc, Vc)
      }
      widget(cB, Bc) {
        let nc = this.gutter.config.widgetMarker(cB, Bc.widget, Bc),
          Vc = nc ? [nc] : null;
        for (let Ic of cB.state.facet(Mu)) {
          let nc = Ic(cB, Bc.widget, Bc);
          nc && (Vc || (Vc = [])).push(nc)
        }
        Vc && this.addElement(cB, Bc, Vc)
      }
      finish() {
        let cB = this.gutter;
        for (; cB.elements.length > this.i;) {
          let Bc = cB.elements.pop();
          cB.dom.removeChild(Bc.dom), Bc.destroy()
        }
      }
    }
    class ys {
      constructor(cB, Bc) {
        this.view = cB, this.config = Bc, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let nc in Bc.domEventHandlers) this.dom.addEventListener(nc, (Vc => {
          let Ic, rB = Vc.target;
          if (rB != this.dom && this.dom.contains(rB)) {
            for (; rB.parentNode != this.dom;) rB = rB.parentNode;
            let cB = rB.getBoundingClientRect();
            Ic = (cB.top + cB.bottom) / 2
          } else Ic = Vc.clientY;
          let uc = cB.lineBlockAtHeight(Ic - cB.documentTop);
          Bc.domEventHandlers[nc](cB, uc, Vc) && Vc.preventDefault()
        }));
        this.markers = eu(Bc.markers(cB)), Bc.initialSpacer && (this.spacer = new zs(cB, 0, 0, [Bc.initialSpacer(cB)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(cB) {
        let Bc = this.markers;
        if (this.markers = eu(this.config.markers(cB.view)), this.spacer && this.config.updateSpacer) {
          let Bc = this.config.updateSpacer(this.spacer.markers[0], cB);
          Bc != this.spacer.markers[0] && this.spacer.update(cB.view, 0, 0, [Bc])
        }
        let nc = cB.view.viewport;
        return !Vc.y.eq(this.markers, Bc, nc.from, nc.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(cB)
      }
      destroy() {
        for (let cB of this.elements) cB.destroy()
      }
    }
    class zs {
      constructor(cB, Bc, nc, Vc) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(cB, Bc, nc, Vc)
      }
      update(cB, Bc, nc, Vc) {
        this.height != Bc && (this.height = Bc, this.dom.style.height = Bc + "px"), this.above != nc && (this.dom.style.marginTop = (this.above = nc) ? nc + "px" : ""),
          function(cB, Bc) {
            if (cB.length != Bc.length) return !1;
            for (let nc = 0; nc < cB.length; nc++)
              if (!cB[nc].compare(Bc[nc])) return !1;
            return !0
          }(this.markers, Vc) || this.setMarkers(cB, Vc)
      }
      setMarkers(cB, Bc) {
        let nc = "cm-gutterElement",
          Vc = this.dom.firstChild;
        for (let Ic = 0, rB = 0;;) {
          let uc = rB,
            sc = Ic < Bc.length ? Bc[Ic++] : null,
            Mc = !1;
          if (sc) {
            let cB = sc.elementClass;
            cB && (nc += " " + cB);
            for (let Bc = rB; Bc < this.markers.length; Bc++)
              if (this.markers[Bc].compare(sc)) {
                uc = Bc, Mc = !0;
                break
              }
          } else uc = this.markers.length;
          for (; rB < uc;) {
            let cB = this.markers[rB++];
            if (cB.toDOM) {
              cB.destroy(Vc);
              let Bc = Vc.nextSibling;
              Vc.remove(), Vc = Bc
            }
          }
          if (!sc) break;
          sc.toDOM && (Mc ? Vc = Vc.nextSibling : this.dom.insertBefore(sc.toDOM(cB), Vc)), Mc && rB++
        }
        this.dom.className = nc, this.markers = Bc
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const pu = Vc.q.define(),
      hu = Vc.q.define(),
      as = Vc.q.define({
        combine: cB => (0, Vc.$)(cB, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(cB, Bc) {
            let nc = Object.assign({}, cB);
            for (let Vc in Bc) {
              let cB = nc[Vc],
                Ic = Bc[Vc];
              nc[Vc] = cB ? (Bc, nc, Vc) => cB(Bc, nc, Vc) || Ic(Bc, nc, Vc) : Ic
            }
            return nc
          }
        })
      });
    class lu extends uu {
      constructor(cB) {
        super(), this.number = cB
      }
      eq(cB) {
        return this.number == cB.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function Yu(cB, Bc) {
      return cB.state.facet(as).formatNumber(Bc, cB.state)
    }
    const Lu = qs.compute([as], (cB => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: cB => cB.state.facet(pu),
      lineMarker: (cB, Bc, nc) => nc.some((cB => cB.toDOM)) ? null : new lu(Yu(cB, cB.state.doc.lineAt(Bc.from).number)),
      widgetMarker: (cB, Bc, nc) => {
        for (let Vc of cB.state.facet(hu)) {
          let Ic = Vc(cB, Bc, nc);
          if (Ic) return Ic
        }
        return null
      },
      lineMarkerChange: cB => cB.startState.facet(as) != cB.state.facet(as),
      initialSpacer: cB => new lu(Yu(cB, Uu(cB.state.doc.lines))),
      updateSpacer(cB, Bc) {
        let nc = Yu(Bc.view, Uu(Bc.view.state.doc.lines));
        return nc == cB.number ? cB : new lu(nc)
      },
      domEventHandlers: cB.facet(as).domEventHandlers,
      side: "before"
    })));

    function gs() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [as.of(cB), fu(), Lu]
    }

    function Uu(cB) {
      let Bc = 9;
      for (; Bc < cB;) Bc = 10 * Bc + 9;
      return Bc
    }
    const bs = new class extends uu {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      Zu = su.compute(["selection"], (cB => {
        let Bc = [],
          nc = -1;
        for (let Vc of cB.selection.Iu) {
          let Ic = cB.doc.lineAt(Vc.head).from;
          Ic > nc && (nc = Ic, Bc.push(bs.range(Ic)))
        }
        return Vc.y.of(Bc)
      }));

    function Qu() {
      return Zu
    }
  },
  39307: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc,
      g: () => fc,
      k: () => uc,
      l: () => qB,
      p: () => Pc,
      r: () => vB,
      s: () => Nc,
      t: () => Dc,
      u: () => mB
    });
    const Vc = 1024;
    let Ic = 0;
    class rB {
      constructor(cB, Bc) {
        this.from = cB, this.to = Bc
      }
    }
    class uc {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Ic++, this.perNode = !!cB.perNode, this.deserialize = cB.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = cB.combine || null
      }
      add(cB) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof cB && (cB = Pc.match(cB)), Bc => {
          let nc = cB(Bc);
          return void 0 === nc ? null : [this, nc]
        }
      }
    }
    uc.closedBy = new uc({
      deserialize: cB => cB.split(" ")
    }), uc.openedBy = new uc({
      deserialize: cB => cB.split(" ")
    }), uc.group = new uc({
      deserialize: cB => cB.split(" ")
    }), uc.isolate = new uc({
      deserialize: cB => {
        if (cB && "rtl" != cB && "ltr" != cB && "auto" != cB) throw new RangeError("Invalid value for isolate: " + cB);
        return cB || "auto"
      }
    }), uc.contextHash = new uc({
      perNode: !0
    }), uc.lookAhead = new uc({
      perNode: !0
    }), uc.mounted = new uc({
      perNode: !0
    });
    class sc {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = cB, this.overlay = Bc, this.parser = nc, this.bracketed = Vc
      }
      static get(cB) {
        return cB && cB.props && cB.props[uc.mounted.id]
      }
    }
    const Mc = Object.create(null);
    class Pc {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = cB, this.props = Bc, this.id = nc, this.flags = Vc
      }
      static define(cB) {
        let Bc = cB.props && cB.props.length ? Object.create(null) : Mc,
          nc = (cB.top ? 1 : 0) | (cB.skipped ? 2 : 0) | (cB.error ? 4 : 0) | (null == cB.name ? 8 : 0),
          Vc = new Pc(cB.name || "", Bc, cB.id, nc);
        if (cB.props)
          for (let Ic of cB.props)
            if (Array.isArray(Ic) || (Ic = Ic(Vc)), Ic) {
              if (Ic[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              Bc[Ic[0].id] = Ic[1]
            } return Vc
      }
      prop(cB) {
        return this.props[cB.id]
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
      is(cB) {
        if ("string" == typeof cB) {
          if (this.name == cB) return !0;
          let Bc = this.prop(uc.group);
          return !!Bc && Bc.indexOf(cB) > -1
        }
        return this.id == cB
      }
      static match(cB) {
        let Bc = Object.create(null);
        for (let nc in cB)
          for (let Vc of nc.split(" ")) Bc[Vc] = cB[nc];
        return cB => {
          for (let nc = cB.prop(uc.group), Vc = -1; Vc < (nc ? nc.length : 0); Vc++) {
            let Ic = Bc[Vc < 0 ? cB.name : nc[Vc]];
            if (Ic) return Ic
          }
        }
      }
    }
    Pc.none = new Pc("", Object.create(null), 0, 8);
    class qB {
      constructor(cB) {
        this.types = cB;
        for (let Bc = 0; Bc < cB.length; Bc++)
          if (cB[Bc].id != Bc) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let cB = [];
        for (var Bc = arguments.length, nc = new Array(Bc), Vc = 0; Vc < Bc; Vc++) nc[Vc] = arguments[Vc];
        for (let Ic of this.types) {
          let Bc = null;
          for (let cB of nc) {
            let nc = cB(Ic);
            if (nc) {
              Bc || (Bc = Object.assign({}, Ic.props));
              let cB = nc[1],
                Vc = nc[0];
              Vc.combine && Vc.id in Bc && (cB = Vc.combine(Bc[Vc.id], cB)), Bc[Vc.id] = cB
            }
          }
          cB.push(Bc ? new Pc(Ic.name, Bc, Ic.id, Ic.flags) : Ic)
        }
        return new qB(cB)
      }
    }
    const Oc = new WeakMap,
      Tc = new WeakMap;
    var fc;
    ! function(cB) {
      cB[cB.ExcludeBuffers = 1] = "ExcludeBuffers", cB[cB.IncludeAnonymous = 2] = "IncludeAnonymous", cB[cB.IgnoreMounts = 4] = "IgnoreMounts", cB[cB.IgnoreOverlays = 8] = "IgnoreOverlays", cB[cB.EnterBracketed = 16] = "EnterBracketed"
    }(fc || (fc = {}));
    class mB {
      constructor(cB, Bc, nc, Vc, Ic) {
        if (this.type = cB, this.children = Bc, this.positions = nc, this.length = Vc, this.props = null, Ic && Ic.length) {
          this.props = Object.create(null);
          for (let [cB, Bc] of Ic) this.props["number" == typeof cB ? cB : cB.id] = Bc
        }
      }
      toString() {
        let cB = sc.get(this);
        if (cB && !cB.overlay) return cB.tree.toString();
        let Bc = "";
        for (let nc of this.children) {
          let cB = nc.toString();
          cB && (Bc && (Bc += ","), Bc += cB)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (Bc.length ? "(" + Bc + ")" : "") : Bc
      }
      cursor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new Uc(this.topNode, cB)
      }
      cursorAt(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = Oc.get(this) || this.topNode,
          Vc = new Uc(nc);
        return Vc.moveTo(cB, Bc), Oc.set(this, Vc._tree), Vc
      }
      get topNode() {
        return new pc(this, 0, 0, null)
      }
      resolve(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = yB(Oc.get(this) || this.topNode, cB, Bc, !1);
        return Oc.set(this, nc), nc
      }
      resolveInner(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = yB(Tc.get(this) || this.topNode, cB, Bc, !0);
        return Tc.set(this, nc), nc
      }
      resolveStack(cB) {
        return function(cB, Bc, nc) {
          let Vc = cB.resolveInner(Bc, nc),
            Ic = null;
          for (let rB = Vc instanceof pc ? Vc : Vc.context.parent; rB; rB = rB.parent)
            if (rB.index < 0) {
              let cB = rB.parent;
              (Ic || (Ic = [Vc])).push(cB.resolve(Bc, nc)), rB = cB
            } else {
              let cB = sc.get(rB.tree);
              if (cB && cB.overlay && cB.overlay[0].from <= Bc && cB.overlay[cB.overlay.length - 1].to >= Bc) {
                let uc = new pc(cB.tree, cB.overlay[0].from + rB.from, -1, rB);
                (Ic || (Ic = [Vc])).push(yB(uc, Bc, nc, !1))
              }
            } return Ic ? Lc(Ic) : Vc
        }(this, cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(cB) {
        let {
          enter: Bc,
          OV: nc,
          from: Vc = 0,
          to: Ic = this.length
        } = cB, rB = cB.mode || 0, uc = (rB & fc.IncludeAnonymous) > 0;
        for (let sc = this.cursor(rB | fc.IncludeAnonymous);;) {
          let cB = !1;
          if (sc.from <= Ic && sc.to >= Vc && (!uc && sc.type.isAnonymous || !1 !== Bc(sc))) {
            if (sc.firstChild()) continue;
            cB = !0
          }
          for (; cB && nc && (uc || !sc.type.isAnonymous) && nc(sc), !sc.nextSibling();) {
            if (!sc.parent()) return;
            cB = !0
          }
        }
      }
      prop(cB) {
        return cB.perNode ? this.props ? this.props[cB.id] : void 0 : this.type.prop(cB)
      }
      get propValues() {
        let cB = [];
        if (this.props)
          for (let Bc in this.props) cB.push([+Bc, this.props[Bc]]);
        return cB
      }
      balance() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Cc(Pc.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((cB, Bc, nc) => new mB(this.type, cB, Bc, nc, this.propValues)), cB.makeTree || ((cB, Bc, nc) => new mB(Pc.none, cB, Bc, nc)))
      }
      static build(cB) {
        return function(cB) {
          var Bc;
          let {
            buffer: nc,
            nodeSet: Ic,
            maxBufferLength: rB = Vc,
            reused: sc = [],
            minRepeatType: Mc = Ic.types.length
          } = cB, Pc = Array.isArray(nc) ? new ec(nc, nc.length) : nc, qB = Ic.types, Oc = 0, Tc = 0;

          function fc(cB, Bc, nc, Vc, uc, mB) {
            let {
              id: ec,
              start: lc,
              end: Yc,
              size: Lc
            } = Pc, gB = Tc, Uc = Oc;
            if (Lc < 0) {
              if (Pc.next(), -1 == Lc) {
                let Bc = sc[ec];
                return nc.push(Bc), void Vc.push(lc - cB)
              }
              if (-3 == Lc) return void(Oc = ec);
              if (-4 == Lc) return void(Tc = ec);
              throw new RangeError(`Unrecognized record size: ${Lc}`)
            }
            let bB, Zc, Qc = qB[ec],
              vB = lc - cB;
            if (Yc - lc <= rB && (Zc = hc(Pc.pos - Bc, uc))) {
              let Bc = new Uint16Array(Zc.size - Zc.skip),
                nc = Pc.pos - Zc.size,
                Vc = Bc.length;
              for (; Pc.pos > nc;) Vc = aB(Zc.start, Bc, Vc);
              bB = new tB(Bc, Yc - Zc.start, Ic), vB = Zc.start - cB
            } else {
              let cB = Pc.pos - Lc;
              Pc.next();
              let Bc = [],
                nc = [],
                Vc = ec >= Mc ? ec : -1,
                Ic = 0,
                uc = Yc;
              for (; Pc.pos > cB;) Vc >= 0 && Pc.id == Vc && Pc.size >= 0 ? (Pc.end <= uc - rB && (zB(Bc, nc, lc, Ic, Pc.end, uc, Vc, gB, Uc), Ic = Bc.length, uc = Pc.end), Pc.next()) : mB > 2500 ? Sc(lc, cB, Bc, nc) : fc(lc, cB, Bc, nc, Vc, mB + 1);
              if (Vc >= 0 && Ic > 0 && Ic < Bc.length && zB(Bc, nc, lc, Ic, lc, uc, Vc, gB, Uc), Bc.reverse(), nc.reverse(), Vc > -1 && Ic > 0) {
                let cB = yB(Qc, Uc);
                bB = Cc(Qc, Bc, nc, 0, Bc.length, 0, Yc - lc, cB, cB)
              } else bB = pc(Qc, Bc, nc, Yc - lc, gB - Yc, Uc)
            }
            nc.push(bB), Vc.push(vB)
          }

          function Sc(cB, Bc, nc, Vc) {
            let uc = [],
              sc = 0,
              Mc = -1;
            for (; Pc.pos > Bc;) {
              let {
                id: cB,
                start: Bc,
                end: nc,
                size: Vc
              } = Pc;
              if (Vc > 4) Pc.next();
              else {
                if (Mc > -1 && Bc < Mc) break;
                Mc < 0 && (Mc = nc - rB), uc.push(cB, Bc, nc), sc++, Pc.next()
              }
            }
            if (sc) {
              let Bc = new Uint16Array(4 * sc),
                rB = uc[uc.length - 2];
              for (let cB = uc.length - 3, nc = 0; cB >= 0; cB -= 3) Bc[nc++] = uc[cB], Bc[nc++] = uc[cB + 1] - rB, Bc[nc++] = uc[cB + 2] - rB, Bc[nc++] = nc;
              nc.push(new tB(Bc, uc[2] - rB, Ic)), Vc.push(rB - cB)
            }
          }

          function yB(cB, Bc) {
            return (nc, Vc, Ic) => {
              let rB, sc, Mc = 0,
                Pc = nc.length - 1;
              if (Pc >= 0 && (rB = nc[Pc]) instanceof mB) {
                if (!Pc && rB.type == cB && rB.length == Ic) return rB;
                (sc = rB.prop(uc.lookAhead)) && (Mc = Vc[Pc] + rB.length + sc)
              }
              return pc(cB, nc, Vc, Ic, Mc, Bc)
            }
          }

          function zB(cB, Bc, nc, Vc, rB, uc, sc, Mc, Pc) {
            let qB = [],
              Oc = [];
            for (; cB.length > Vc;) qB.push(cB.pop()), Oc.push(Bc.pop() + nc - rB);
            cB.push(pc(Ic.types[sc], qB, Oc, uc - rB, Mc - uc, Pc)), Bc.push(rB - nc)
          }

          function pc(cB, Bc, nc, Vc, Ic, rB, sc) {
            if (rB) {
              let cB = [uc.contextHash, rB];
              sc = sc ? [cB].concat(sc) : [cB]
            }
            if (Ic > 25) {
              let cB = [uc.lookAhead, Ic];
              sc = sc ? [cB].concat(sc) : [cB]
            }
            return new mB(cB, Bc, nc, Vc, sc)
          }

          function hc(cB, Bc) {
            let nc = Pc.fork(),
              Vc = 0,
              Ic = 0,
              uc = 0,
              sc = nc.end - rB,
              qB = {
                size: 0,
                start: 0,
                skip: 0
              };
            cB: for (let rB = nc.pos - cB; nc.pos > rB;) {
              let cB = nc.size;
              if (nc.id == Bc && cB >= 0) {
                qB.size = Vc, qB.start = Ic, qB.skip = uc, uc += 4, Vc += 4, nc.next();
                continue
              }
              let Pc = nc.pos - cB;
              if (cB < 0 || Pc < rB || nc.start < sc) break;
              let Oc = nc.id >= Mc ? 4 : 0,
                Tc = nc.start;
              for (nc.next(); nc.pos > Pc;) {
                if (nc.size < 0) {
                  if (-3 != nc.size && -4 != nc.size) break cB;
                  Oc += 4
                } else nc.id >= Mc && (Oc += 4);
                nc.next()
              }
              Ic = Tc, Vc += cB, uc += Oc
            }
            return (Bc < 0 || Vc == cB) && (qB.size = Vc, qB.start = Ic, qB.skip = uc), qB.size > 4 ? qB : void 0
          }

          function aB(cB, Bc, nc) {
            let {
              id: Vc,
              start: Ic,
              end: rB,
              size: uc
            } = Pc;
            if (Pc.next(), uc >= 0 && Vc < Mc) {
              let sc = nc;
              if (uc > 4) {
                let Vc = Pc.pos - (uc - 4);
                for (; Pc.pos > Vc;) nc = aB(cB, Bc, nc)
              }
              Bc[--nc] = sc, Bc[--nc] = rB - cB, Bc[--nc] = Ic - cB, Bc[--nc] = Vc
            } else - 3 == uc ? Oc = Vc : -4 == uc && (Tc = Vc);
            return nc
          }
          let lc = [],
            Yc = [];
          for (; Pc.pos > 0;) fc(cB.start || 0, cB.bufferStart || 0, lc, Yc, -1, 0);
          let Lc = null !== (Bc = cB.length) && void 0 !== Bc ? Bc : lc.length ? Yc[0] + lc[0].length : 0;
          return new mB(qB[cB.topID], lc.reverse(), Yc.reverse(), Lc)
        }(cB)
      }
    }
    mB.empty = new mB(Pc.none, [], [], 0);
    class ec {
      constructor(cB, Bc) {
        this.buffer = cB, this.index = Bc
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
        return new ec(this.buffer, this.index)
      }
    }
    class tB {
      constructor(cB, Bc, nc) {
        this.buffer = cB, this.length = Bc, this.set = nc
      }
      get type() {
        return Pc.none
      }
      toString() {
        let cB = [];
        for (let Bc = 0; Bc < this.buffer.length;) cB.push(this.childString(Bc)), Bc = this.buffer[Bc + 3];
        return cB.join(",")
      }
      childString(cB) {
        let Bc = this.buffer[cB],
          nc = this.buffer[cB + 3],
          Vc = this.set.types[Bc],
          Ic = Vc.name;
        if (/\W/.test(Ic) && !Vc.isError && (Ic = JSON.stringify(Ic)), nc == (cB += 4)) return Ic;
        let rB = [];
        for (; cB < nc;) rB.push(this.childString(cB)), cB = this.buffer[cB + 3];
        return Ic + "(" + rB.join(",") + ")"
      }
      findChild(cB, Bc, nc, Vc, Ic) {
        let {
          buffer: rB
        } = this, uc = -1;
        for (let sc = cB; sc != Bc && !(Sc(Ic, Vc, rB[sc + 1], rB[sc + 2]) && (uc = sc, nc > 0)); sc = rB[sc + 3]);
        return uc
      }
      slice(cB, Bc, nc) {
        let Vc = this.buffer,
          Ic = new Uint16Array(Bc - cB),
          rB = 0;
        for (let uc = cB, sc = 0; uc < Bc;) {
          Ic[sc++] = Vc[uc++], Ic[sc++] = Vc[uc++] - nc;
          let Bc = Ic[sc++] = Vc[uc++] - nc;
          Ic[sc++] = Vc[uc++] - cB, rB = Math.max(rB, Bc)
        }
        return new tB(Ic, rB, this.set)
      }
    }

    function Sc(cB, Bc, nc, Vc) {
      switch (cB) {
        case -2:
          return nc < Bc;
        case -1:
          return Vc >= Bc && nc < Bc;
        case 0:
          return nc < Bc && Vc > Bc;
        case 1:
          return nc <= Bc && Vc > Bc;
        case 2:
          return Vc > Bc;
        case 4:
          return !0
      }
    }

    function yB(cB, Bc, nc, Vc) {
      for (var Ic; cB.from == cB.to || (nc < 1 ? cB.from >= Bc : cB.from > Bc) || (nc > -1 ? cB.to <= Bc : cB.to < Bc);) {
        let Bc = !Vc && cB instanceof pc && cB.index < 0 ? null : cB.parent;
        if (!Bc) return cB;
        cB = Bc
      }
      let rB = Vc ? 0 : fc.IgnoreOverlays;
      if (Vc)
        for (let uc = cB, sc = uc.parent; sc; uc = sc, sc = uc.parent) uc instanceof pc && uc.index < 0 && (null === (Ic = sc.enter(Bc, nc, rB)) || void 0 === Ic ? void 0 : Ic.from) != uc.from && (cB = sc);
      for (;;) {
        let Vc = cB.enter(Bc, nc, rB);
        if (!Vc) return cB;
        cB = Vc
      }
    }
    class zB {
      cursor() {
        return new Uc(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(cB) {
        let Bc = hc(this, cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return Bc.length ? Bc[0] : null
      }
      getChildren(cB) {
        return hc(this, cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(cB) {
        return yB(this, cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(cB) {
        return yB(this, cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(cB) {
        return aB(this.parent, cB)
      }
      enterUnfinishedNodesBefore(cB) {
        let Bc = this.childBefore(cB),
          nc = this;
        for (; Bc;) {
          let cB = Bc.lastChild;
          if (!cB || cB.to != Bc.to) break;
          cB.type.isError && cB.from == cB.to ? (nc = Bc, Bc = cB.prevSibling) : Bc = cB
        }
        return nc
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class pc extends zB {
      constructor(cB, Bc, nc, Vc) {
        super(), this._tree = cB, this.from = Bc, this.index = nc, this._parent = Vc
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
      nextChild(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let rB = this;;) {
          for (let {
              children: uc,
              positions: Mc
            } = rB._tree, Pc = Bc > 0 ? uc.length : -1; cB != Pc; cB += Bc) {
            let Pc, qB = uc[cB],
              Oc = Mc[cB] + rB.from;
            if (Ic & fc.EnterBracketed && qB instanceof mB && (Pc = sc.get(qB)) && !Pc.overlay && Pc.bracketed && nc >= Oc && nc <= Oc + qB.length || Sc(Vc, nc, Oc, Oc + qB.length))
              if (qB instanceof tB) {
                if (Ic & fc.ExcludeBuffers) continue;
                let uc = qB.findChild(0, qB.buffer.length, Bc, nc - Oc, Vc);
                if (uc > -1) return new Yc(new lc(rB, qB, cB, Oc), null, uc)
              } else if (Ic & fc.IncludeAnonymous || !qB.type.isAnonymous || bB(qB)) {
              let uc;
              if (!(Ic & fc.IgnoreMounts) && (uc = sc.get(qB)) && !uc.overlay) return new pc(uc.tree, Oc, cB, rB);
              let Mc = new pc(qB, Oc, cB, rB);
              return Ic & fc.IncludeAnonymous || !Mc.type.isAnonymous ? Mc : Mc.nextChild(Bc < 0 ? qB.children.length - 1 : 0, Bc, nc, Vc, Ic)
            }
          }
          if (Ic & fc.IncludeAnonymous || !rB.type.isAnonymous) return null;
          if (cB = rB.index >= 0 ? rB.index + Bc : Bc < 0 ? -1 : rB._parent._tree.children.length, rB = rB._parent, !rB) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(cB) {
        return this.nextChild(0, 1, cB, 2)
      }
      childBefore(cB) {
        return this.nextChild(this._tree.children.length - 1, -1, cB, -2)
      }
      prop(cB) {
        return this._tree.prop(cB)
      }
      enter(cB, Bc) {
        let nc, Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Vc & fc.IgnoreOverlays) && (nc = sc.get(this._tree)) && nc.overlay) {
          let Ic = cB - this.from,
            rB = Vc & fc.EnterBracketed && nc.bracketed;
          for (let {
              from: cB,
              to: Vc
            }
            of nc.overlay)
            if ((Bc > 0 || rB ? cB <= Ic : cB < Ic) && (Bc < 0 || rB ? Vc >= Ic : Vc > Ic)) return new pc(nc.tree, nc.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, cB, Bc, Vc)
      }
      nextSignificantParent() {
        let cB = this;
        for (; cB.type.isAnonymous && cB._parent;) cB = cB._parent;
        return cB
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

    function hc(cB, Bc, nc, Vc) {
      let Ic = cB.cursor(),
        rB = [];
      if (!Ic.firstChild()) return rB;
      if (null != nc)
        for (let uc = !1; !uc;)
          if (uc = Ic.type.is(nc), !Ic.nextSibling()) return rB;
      for (;;) {
        if (null != Vc && Ic.type.is(Vc)) return rB;
        if (Ic.type.is(Bc) && rB.push(Ic.node), !Ic.nextSibling()) return null == Vc ? rB : []
      }
    }

    function aB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bc.length - 1;
      for (let Vc = cB; nc >= 0; Vc = Vc.parent) {
        if (!Vc) return !1;
        if (!Vc.type.isAnonymous) {
          if (Bc[nc] && Bc[nc] != Vc.name) return !1;
          nc--
        }
      }
      return !0
    }
    class lc {
      constructor(cB, Bc, nc, Vc) {
        this.parent = cB, this.buffer = Bc, this.index = nc, this.start = Vc
      }
    }
    class Yc extends zB {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(cB, Bc, nc) {
        super(), this.context = cB, this._parent = Bc, this.index = nc, this.type = cB.buffer.set.types[cB.buffer.buffer[nc]]
      }
      child(cB, Bc, nc) {
        let {
          buffer: Vc
        } = this.context, Ic = Vc.findChild(this.index + 4, Vc.buffer[this.index + 3], cB, Bc - this.context.start, nc);
        return Ic < 0 ? null : new Yc(this.context, this, Ic)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(cB) {
        return this.child(1, cB, 2)
      }
      childBefore(cB) {
        return this.child(-1, cB, -2)
      }
      prop(cB) {
        return this.type.prop(cB)
      }
      enter(cB, Bc) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & fc.ExcludeBuffers) return null;
        let {
          buffer: nc
        } = this.context, Vc = nc.findChild(this.index + 4, nc.buffer[this.index + 3], Bc > 0 ? 1 : -1, cB - this.context.start, Bc);
        return Vc < 0 ? null : new Yc(this.context, this, Vc)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(cB) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + cB, cB, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: cB
        } = this.context, Bc = cB.buffer[this.index + 3];
        return Bc < (this._parent ? cB.buffer[this._parent.index + 3] : cB.buffer.length) ? new Yc(this.context, this._parent, Bc) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: cB
        } = this.context, Bc = this._parent ? this._parent.index + 4 : 0;
        return this.index == Bc ? this.externalSibling(-1) : new Yc(this.context, this._parent, cB.findChild(Bc, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let cB = [],
          Bc = [],
          {
            buffer: nc
          } = this.context,
          Vc = this.index + 4,
          Ic = nc.buffer[this.index + 3];
        if (Ic > Vc) {
          let rB = nc.buffer[this.index + 1];
          cB.push(nc.slice(Vc, Ic, rB)), Bc.push(0)
        }
        return new mB(this.type, cB, Bc, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function Lc(cB) {
      if (!cB.length) return null;
      let Bc = 0,
        nc = cB[0];
      for (let rB = 1; rB < cB.length; rB++) {
        let Vc = cB[rB];
        (Vc.from > nc.from || Vc.to < nc.to) && (nc = Vc, Bc = rB)
      }
      let Vc = nc instanceof pc && nc.index < 0 ? null : nc.parent,
        Ic = cB.slice();
      return Vc ? Ic[Bc] = Vc : Ic.splice(Bc, 1), new gB(Ic, nc)
    }
    class gB {
      constructor(cB, Bc) {
        this.heads = cB, this.node = Bc
      }
      get next() {
        return Lc(this.heads)
      }
    }
    class Uc {
      get name() {
        return this.type.name
      }
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = Bc & ~fc.EnterBracketed, cB instanceof pc) this.yieldNode(cB);
        else {
          this._tree = cB.context.parent, this.buffer = cB.context;
          for (let Bc = cB._parent; Bc; Bc = Bc._parent) this.stack.unshift(Bc.index);
          this.bufferNode = cB, this.yieldBuf(cB.index)
        }
      }
      yieldNode(cB) {
        return !!cB && (this._tree = cB, this.type = cB.type, this.from = cB.from, this.to = cB.to, !0)
      }
      yieldBuf(cB, Bc) {
        this.index = cB;
        let {
          start: nc,
          buffer: Vc
        } = this.buffer;
        return this.type = Bc || Vc.set.types[Vc.buffer[cB]], this.from = nc + Vc.buffer[cB + 1], this.to = nc + Vc.buffer[cB + 2], !0
      }
      yield(cB) {
        return !!cB && (cB instanceof pc ? (this.buffer = null, this.yieldNode(cB)) : (this.buffer = cB.context, this.yieldBuf(cB.index, cB.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(cB, Bc, nc) {
        if (!this.buffer) return this.yield(this._tree.nextChild(cB < 0 ? this._tree._tree.children.length - 1 : 0, cB, Bc, nc, this.mode));
        let {
          buffer: Vc
        } = this.buffer, Ic = Vc.findChild(this.index + 4, Vc.buffer[this.index + 3], cB, Bc - this.buffer.start, nc);
        return !(Ic < 0) && (this.stack.push(this.index), this.yieldBuf(Ic))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(cB) {
        return this.enterChild(1, cB, 2)
      }
      childBefore(cB) {
        return this.enterChild(-1, cB, -2)
      }
      enter(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(nc & fc.ExcludeBuffers) && this.enterChild(1, cB, Bc) : this.yield(this._tree.enter(cB, Bc, nc))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & fc.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let cB = this.mode & fc.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(cB)
      }
      sibling(cB) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + cB, cB, 0, 4, this.mode));
        let {
          buffer: Bc
        } = this.buffer, nc = this.stack.length - 1;
        if (cB < 0) {
          let cB = nc < 0 ? 0 : this.stack[nc] + 4;
          if (this.index != cB) return this.yieldBuf(Bc.findChild(cB, this.index, -1, 0, 4))
        } else {
          let cB = Bc.buffer[this.index + 3];
          if (cB < (nc < 0 ? Bc.buffer.length : Bc.buffer[this.stack[nc] + 3])) return this.yieldBuf(cB)
        }
        return nc < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + cB, cB, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(cB) {
        let Bc, nc, {
          buffer: Vc
        } = this;
        if (Vc) {
          if (cB > 0) {
            if (this.index < Vc.buffer.buffer.length) return !1
          } else
            for (let cB = 0; cB < this.index; cB++)
              if (Vc.buffer.buffer[cB + 3] < this.index) return !1;
          ({
            index: Bc,
            parent: nc
          } = Vc)
        } else({
          index: Bc,
          _parent: nc
        } = this._tree);
        for (; nc;
          ({
            index: Bc,
            _parent: nc
          } = nc))
          if (Bc > -1)
            for (let Vc = Bc + cB, Ic = cB < 0 ? -1 : nc._tree.children.length; Vc != Ic; Vc += cB) {
              let cB = nc._tree.children[Vc];
              if (this.mode & fc.IncludeAnonymous || cB instanceof tB || !cB.type.isAnonymous || bB(cB)) return !1
            }
        return !0
      }
      move(cB, Bc) {
        if (Bc && this.enterChild(cB, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(cB)) return !0;
          if (this.atLastNode(cB) || !this.parent()) return !1
        }
      }
      next() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, cB)
      }
      prev() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, cB)
      }
      moveTo(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (Bc < 1 ? this.from >= cB : this.from > cB) || (Bc > -1 ? this.to <= cB : this.to < cB)) && this.parent(););
        for (; this.enterChild(1, cB, Bc););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let cB = this.bufferNode,
          Bc = null,
          nc = 0;
        if (cB && cB.context == this.buffer) cB: for (let Vc = this.index, Ic = this.stack.length; Ic >= 0;) {
          for (let rB = cB; rB; rB = rB._parent)
            if (rB.index == Vc) {
              if (Vc == this.index) return rB;
              Bc = rB, nc = Ic + 1;
              break cB
            } Vc = this.stack[--Ic]
        }
        for (let Vc = nc; Vc < this.stack.length; Vc++) Bc = new Yc(this.buffer, Bc, this.stack[Vc]);
        return this.bufferNode = new Yc(this.buffer, Bc, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(cB, Bc) {
        for (let nc = 0;;) {
          let Vc = !1;
          if (this.type.isAnonymous || !1 !== cB(this)) {
            if (this.firstChild()) {
              nc++;
              continue
            }
            this.type.isAnonymous || (Vc = !0)
          }
          for (;;) {
            if (Vc && Bc && Bc(this), Vc = this.type.isAnonymous, !nc) return;
            if (this.nextSibling()) break;
            this.parent(), nc--, Vc = !0
          }
        }
      }
      matchContext(cB) {
        if (!this.buffer) return aB(this.node.parent, cB);
        let {
          buffer: Bc
        } = this.buffer, {
          types: nc
        } = Bc.set;
        for (let Vc = cB.length - 1, Ic = this.stack.length - 1; Vc >= 0; Ic--) {
          if (Ic < 0) return aB(this._tree, cB, Vc);
          let rB = nc[Bc.buffer[this.stack[Ic]]];
          if (!rB.isAnonymous) {
            if (cB[Vc] && cB[Vc] != rB.name) return !1;
            Vc--
          }
        }
        return !0
      }
    }

    function bB(cB) {
      return cB.children.some((cB => cB instanceof tB || !cB.type.isAnonymous || bB(cB)))
    }
    const Zc = new WeakMap;

    function Qc(cB, Bc) {
      if (!cB.isAnonymous || Bc instanceof tB || Bc.type != cB) return 1;
      let nc = Zc.get(Bc);
      if (null == nc) {
        nc = 1;
        for (let Vc of Bc.children) {
          if (Vc.type != cB || !(Vc instanceof mB)) {
            nc = 1;
            break
          }
          nc += Qc(cB, Vc)
        }
        Zc.set(Bc, nc)
      }
      return nc
    }

    function Cc(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
      let Pc = 0;
      for (let fc = Vc; fc < Ic; fc++) Pc += Qc(cB, Bc[fc]);
      let qB = Math.ceil(1.5 * Pc / 8),
        Oc = [],
        Tc = [];
      return function Bc(nc, Vc, Ic, uc, sc) {
        for (let Pc = Ic; Pc < uc;) {
          let Ic = Pc,
            fc = Vc[Pc],
            mB = Qc(cB, nc[Pc]);
          for (Pc++; Pc < uc; Pc++) {
            let Bc = Qc(cB, nc[Pc]);
            if (mB + Bc >= qB) break;
            mB += Bc
          }
          if (Pc == Ic + 1) {
            if (mB > qB) {
              let cB = nc[Ic];
              Bc(cB.children, cB.positions, 0, cB.children.length, Vc[Ic] + sc);
              continue
            }
            Oc.push(nc[Ic])
          } else {
            let Bc = Vc[Pc - 1] + nc[Pc - 1].length - fc;
            Oc.push(Cc(cB, nc, Vc, Ic, Pc, fc, Bc, null, Mc))
          }
          Tc.push(fc + sc - rB)
        }
      }(Bc, nc, Vc, Ic, 0), (sc || Mc)(Oc, Tc, uc)
    }
    class vB {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(cB, Bc, nc) {
        let Vc = this.map.get(cB);
        Vc || this.map.set(cB, Vc = new Map), Vc.set(Bc, nc)
      }
      getBuffer(cB, Bc) {
        let nc = this.map.get(cB);
        return nc && nc.get(Bc)
      }
      set(cB, Bc) {
        cB instanceof Yc ? this.setBuffer(cB.context.buffer, cB.index, Bc) : cB instanceof pc && this.map.set(cB.tree, Bc)
      }
      get(cB) {
        return cB instanceof Yc ? this.getBuffer(cB.context.buffer, cB.index) : cB instanceof pc ? this.map.get(cB.tree) : void 0
      }
      cursorSet(cB, Bc) {
        cB.buffer ? this.setBuffer(cB.buffer.buffer, cB.index, Bc) : this.map.set(cB.tree, Bc)
      }
      cursorGet(cB) {
        return cB.buffer ? this.getBuffer(cB.buffer.buffer, cB.index) : this.map.get(cB.tree)
      }
    }
    class Dc {
      constructor(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = cB, this.to = Bc, this.tree = nc, this.offset = Vc, this.open = (Ic ? 1 : 0) | (rB ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = [new Dc(0, cB.length, cB, 0, !1, nc)];
        for (let Ic of Bc) Ic.to > cB.length && Vc.push(Ic);
        return Vc
      }
      static applyChanges(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!Bc.length) return cB;
        let Vc = [],
          Ic = 1,
          rB = cB.length ? cB[0] : null;
        for (let uc = 0, sc = 0, Mc = 0;; uc++) {
          let Pc = uc < Bc.length ? Bc[uc] : null,
            qB = Pc ? Pc.fromA : 1e9;
          if (qB - sc >= nc)
            for (; rB && rB.from < qB;) {
              let Bc = rB;
              if (sc >= Bc.from || qB <= Bc.to || Mc) {
                let cB = Math.max(Bc.from, sc) - Mc,
                  nc = Math.min(Bc.to, qB) - Mc;
                Bc = cB >= nc ? null : new Dc(cB, nc, Bc.tree, Bc.offset + Mc, uc > 0, !!Pc)
              }
              if (Bc && Vc.push(Bc), rB.to > qB) break;
              rB = Ic < cB.length ? cB[Ic++] : null
            }
          if (!Pc) break;
          sc = Pc.toA, Mc = Pc.toA - Pc.toB
        }
        return Vc
      }
    }
    class Nc {
      startParse(cB, Bc, nc) {
        return "string" == typeof cB && (cB = new Ec(cB)), nc = nc ? nc.length ? nc.map((cB => new rB(cB.from, cB.to))) : [new rB(0, 0)] : [new rB(0, cB.length)], this.createParse(cB, Bc || [], nc)
      }
      parse(cB, Bc, nc) {
        let Vc = this.startParse(cB, Bc, nc);
        for (;;) {
          let cB = Vc.advance();
          if (cB) return cB
        }
      }
    }
    class Ec {
      constructor(cB) {
        this.string = cB
      }
      get length() {
        return this.string.length
      }
      chunk(cB) {
        return this.string.slice(cB)
      }
      get lineChunks() {
        return !1
      }
      read(cB, Bc) {
        return this.string.slice(cB, Bc)
      }
    }
    new uc({
      perNode: !0
    })
  },
  39310: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Tc,
      d: () => Mc,
      f: () => Oc,
      j: () => Zc
    });
    var Vc = nc(39307);
    let Ic = 0;
    class rB {
      constructor(cB, Bc, nc, Vc) {
        this.name = cB, this.set = Bc, this.base = nc, this.modified = Vc, this.id = Ic++
      }
      toString() {
        let {
          name: cB
        } = this;
        for (let Bc of this.modified) Bc.name && (cB = `${Bc.name}(${cB})`);
        return cB
      }
      static define(cB, Bc) {
        let nc = "string" == typeof cB ? cB : "?";
        if (cB instanceof rB && (Bc = cB), null === Bc || void 0 === Bc ? void 0 : Bc.base) throw new Error("Can not derive from a modified tag");
        let Vc = new rB(nc, [], null, []);
        if (Vc.set.push(Vc), Bc)
          for (let Ic of Bc.set) Vc.set.push(Ic);
        return Vc
      }
      static defineModifier(cB) {
        let Bc = new sc(cB);
        return cB => cB.modified.indexOf(Bc) > -1 ? cB : sc.get(cB.base || cB, cB.modified.concat(Bc).sort(((cB, Bc) => cB.id - Bc.id)))
      }
    }
    let uc = 0;
    class sc {
      constructor(cB) {
        this.name = cB, this.instances = [], this.id = uc++
      }
      static get(cB, Bc) {
        if (!Bc.length) return cB;
        let nc = Bc[0].instances.find((nc => {
          return nc.base == cB && (Vc = Bc, Ic = nc.modified, Vc.length == Ic.length && Vc.every(((cB, Bc) => cB == Ic[Bc])));
          var Vc, Ic
        }));
        if (nc) return nc;
        let Vc = [],
          Ic = new rB(cB.name, Vc, cB, Bc);
        for (let rB of Bc) rB.instances.push(Ic);
        let uc = function(cB) {
          let Bc = [
            []
          ];
          for (let nc = 0; nc < cB.length; nc++)
            for (let Vc = 0, Ic = Bc.length; Vc < Ic; Vc++) Bc.push(Bc[Vc].concat(cB[nc]));
          return Bc.sort(((cB, Bc) => Bc.length - cB.length))
        }(Bc);
        for (let rB of cB.set)
          if (!rB.modified.length)
            for (let cB of uc) Vc.push(sc.get(rB, cB));
        return Ic
      }
    }

    function Mc(cB) {
      let Bc = Object.create(null);
      for (let nc in cB) {
        let Vc = cB[nc];
        Array.isArray(Vc) || (Vc = [Vc]);
        for (let cB of nc.split(" "))
          if (cB) {
            let nc = [],
              Ic = 2,
              rB = cB;
            for (let Bc = 0;;) {
              if ("..." == rB && Bc > 0 && Bc + 3 == cB.length) {
                Ic = 1;
                break
              }
              let Vc = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(rB);
              if (!Vc) throw new RangeError("Invalid path: " + cB);
              if (nc.push("*" == Vc[0] ? "" : '"' == Vc[0][0] ? JSON.parse(Vc[0]) : Vc[0]), Bc += Vc[0].length, Bc == cB.length) break;
              let uc = cB[Bc++];
              if (Bc == cB.length && "!" == uc) {
                Ic = 0;
                break
              }
              if ("/" != uc) throw new RangeError("Invalid path: " + cB);
              rB = cB.slice(Bc)
            }
            let uc = nc.length - 1,
              sc = nc[uc];
            if (!sc) throw new RangeError("Invalid path: " + cB);
            let Mc = new qB(Vc, Ic, uc > 0 ? nc.slice(0, uc) : null);
            Bc[sc] = Mc.sort(Bc[sc])
          }
      }
      return Pc.add(Bc)
    }
    const Pc = new Vc.k({
      combine(cB, Bc) {
        let nc, Vc, Ic;
        for (; cB || Bc;) {
          if (!cB || Bc && cB.depth >= Bc.depth ? (Ic = Bc, Bc = Bc.next) : (Ic = cB, cB = cB.next), nc && nc.mode == Ic.mode && !Ic.context && !nc.context) continue;
          let rB = new qB(Ic.tags, Ic.mode, Ic.context);
          nc ? nc.next = rB : Vc = rB, nc = rB
        }
        return Vc
      }
    });
    class qB {
      constructor(cB, Bc, nc, Vc) {
        this.tags = cB, this.mode = Bc, this.context = nc, this.next = Vc
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(cB) {
        return !cB || cB.depth < this.depth ? (this.next = cB, this) : (cB.next = this.sort(cB.next), cB)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function Oc(cB, Bc) {
      let nc = Object.create(null);
      for (let rB of cB)
        if (Array.isArray(rB.tag))
          for (let cB of rB.tag) nc[cB.id] = rB.class;
        else nc[rB.tag.id] = rB.class;
      let {
        scope: Vc,
        all: Ic = null
      } = Bc || {};
      return {
        style: cB => {
          let Bc = Ic;
          for (let Vc of cB)
            for (let cB of Vc.set) {
              let Vc = nc[cB.id];
              if (Vc) {
                Bc = Bc ? Bc + " " + Vc : Vc;
                break
              }
            }
          return Bc
        },
        scope: Vc
      }
    }

    function Tc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : cB.length,
        rB = new fc(Vc, Array.isArray(Bc) ? Bc : [Bc], nc);
      rB.highlightRange(cB.cursor(), Vc, Ic, "", rB.highlighters), rB.flush(Ic)
    }
    qB.empty = new qB([], 2, null);
    class fc {
      constructor(cB, Bc, nc) {
        this.at = cB, this.highlighters = Bc, this.span = nc, this.class = ""
      }
      startSpan(cB, Bc) {
        Bc != this.class && (this.flush(cB), cB > this.at && (this.at = cB), this.class = Bc)
      }
      flush(cB) {
        cB > this.at && this.class && this.span(this.at, cB, this.class)
      }
      highlightRange(cB, Bc, nc, Ic, rB) {
        let {
          type: uc,
          from: sc,
          to: Mc
        } = cB;
        if (sc >= nc || Mc <= Bc) return;
        uc.isTop && (rB = this.highlighters.filter((cB => !cB.scope || cB.scope(uc))));
        let Oc = Ic,
          Tc = function(cB) {
            let Bc = cB.type.prop(Pc);
            for (; Bc && Bc.context && !cB.matchContext(Bc.context);) Bc = Bc.next;
            return Bc || null
          }(cB) || qB.empty,
          fc = function(cB, Bc) {
            let nc = null;
            for (let Vc of cB) {
              let cB = Vc.style(Bc);
              cB && (nc = nc ? nc + " " + cB : cB)
            }
            return nc
          }(rB, Tc.tags);
        if (fc && (Oc && (Oc += " "), Oc += fc, 1 == Tc.mode && (Ic += (Ic ? " " : "") + fc)), this.startSpan(Math.max(Bc, sc), Oc), Tc.opaque) return;
        let mB = cB.tree && cB.tree.prop(Vc.k.mounted);
        if (mB && mB.overlay) {
          let Vc = cB.node.enter(mB.overlay[0].from + sc, 1),
            uc = this.highlighters.filter((cB => !cB.scope || cB.scope(mB.tree.type))),
            Pc = cB.firstChild();
          for (let qB = 0, Tc = sc;; qB++) {
            let fc = qB < mB.overlay.length ? mB.overlay[qB] : null,
              ec = fc ? fc.from + sc : Mc,
              tB = Math.max(Bc, Tc),
              Sc = Math.min(nc, ec);
            if (tB < Sc && Pc)
              for (; cB.from < Sc && (this.highlightRange(cB, tB, Sc, Ic, rB), this.startSpan(Math.min(Sc, cB.to), Oc), !(cB.to >= ec) && cB.nextSibling()););
            if (!fc || ec > nc) break;
            Tc = fc.to + sc, Tc > Bc && (this.highlightRange(Vc.cursor(), Math.max(Bc, fc.from + sc), Math.min(nc, Tc), "", uc), this.startSpan(Math.min(nc, Tc), Oc))
          }
          Pc && cB.parent()
        } else if (cB.firstChild()) {
          mB && (Ic = "");
          do {
            if (!(cB.to <= Bc)) {
              if (cB.from >= nc) break;
              this.highlightRange(cB, Bc, nc, Ic, rB), this.startSpan(Math.min(nc, cB.to), Oc)
            }
          } while (cB.nextSibling());
          cB.parent()
        }
      }
    }
    const mB = rB.define,
      ec = mB(),
      tB = mB(),
      Sc = mB(tB),
      yB = mB(tB),
      zB = mB(),
      pc = mB(zB),
      hc = mB(zB),
      aB = mB(),
      lc = mB(aB),
      Yc = mB(),
      Lc = mB(),
      gB = mB(),
      Uc = mB(gB),
      bB = mB(),
      Zc = {
        comment: ec,
        lineComment: mB(ec),
        blockComment: mB(ec),
        docComment: mB(ec),
        name: tB,
        variableName: mB(tB),
        typeName: Sc,
        tagName: mB(Sc),
        propertyName: yB,
        attributeName: mB(yB),
        className: mB(tB),
        labelName: mB(tB),
        namespace: mB(tB),
        macroName: mB(tB),
        literal: zB,
        string: pc,
        docString: mB(pc),
        character: mB(pc),
        attributeValue: mB(pc),
        number: hc,
        integer: mB(hc),
        float: mB(hc),
        bool: mB(zB),
        regexp: mB(zB),
        escape: mB(zB),
        color: mB(zB),
        url: mB(zB),
        keyword: Yc,
        self: mB(Yc),
        null: mB(Yc),
        atom: mB(Yc),
        unit: mB(Yc),
        modifier: mB(Yc),
        operatorKeyword: mB(Yc),
        controlKeyword: mB(Yc),
        definitionKeyword: mB(Yc),
        moduleKeyword: mB(Yc),
        operator: Lc,
        derefOperator: mB(Lc),
        arithmeticOperator: mB(Lc),
        logicOperator: mB(Lc),
        bitwiseOperator: mB(Lc),
        compareOperator: mB(Lc),
        updateOperator: mB(Lc),
        definitionOperator: mB(Lc),
        typeOperator: mB(Lc),
        controlOperator: mB(Lc),
        punctuation: gB,
        separator: mB(gB),
        bracket: Uc,
        angleBracket: mB(Uc),
        squareBracket: mB(Uc),
        paren: mB(Uc),
        brace: mB(Uc),
        content: aB,
        heading: lc,
        heading1: mB(lc),
        heading2: mB(lc),
        heading3: mB(lc),
        heading4: mB(lc),
        heading5: mB(lc),
        heading6: mB(lc),
        contentSeparator: mB(aB),
        list: mB(aB),
        quote: mB(aB),
        emphasis: mB(aB),
        strong: mB(aB),
        link: mB(aB),
        monospace: mB(aB),
        strikethrough: mB(aB),
        inserted: mB(),
        deleted: mB(),
        changed: mB(),
        invalid: mB(),
        meta: bB,
        documentMeta: mB(bB),
        annotation: mB(bB),
        processingInstruction: mB(bB),
        definition: rB.defineModifier("definition"),
        constant: rB.defineModifier("constant"),
        function: rB.defineModifier("function"),
        standard: rB.defineModifier("standard"),
        local: rB.defineModifier("local"),
        special: rB.defineModifier("special")
      };
    for (let Qc in Zc) {
      let cB = Zc[Qc];
      cB instanceof rB && (cB.name = Qc)
    }
    Oc([{
      tag: Zc.link,
      class: "tok-link"
    }, {
      tag: Zc.heading,
      class: "tok-heading"
    }, {
      tag: Zc.emphasis,
      class: "tok-emphasis"
    }, {
      tag: Zc.strong,
      class: "tok-strong"
    }, {
      tag: Zc.keyword,
      class: "tok-keyword"
    }, {
      tag: Zc.atom,
      class: "tok-atom"
    }, {
      tag: Zc.bool,
      class: "tok-bool"
    }, {
      tag: Zc.url,
      class: "tok-url"
    }, {
      tag: Zc.labelName,
      class: "tok-labelName"
    }, {
      tag: Zc.inserted,
      class: "tok-inserted"
    }, {
      tag: Zc.deleted,
      class: "tok-deleted"
    }, {
      tag: Zc.literal,
      class: "tok-literal"
    }, {
      tag: Zc.string,
      class: "tok-string"
    }, {
      tag: Zc.number,
      class: "tok-number"
    }, {
      tag: [Zc.regexp, Zc.escape, Zc.special(Zc.string)],
      class: "tok-string2"
    }, {
      tag: Zc.variableName,
      class: "tok-variableName"
    }, {
      tag: Zc.local(Zc.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: Zc.definition(Zc.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: Zc.special(Zc.variableName),
      class: "tok-variableName2"
    }, {
      tag: Zc.definition(Zc.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: Zc.typeName,
      class: "tok-typeName"
    }, {
      tag: Zc.namespace,
      class: "tok-namespace"
    }, {
      tag: Zc.className,
      class: "tok-className"
    }, {
      tag: Zc.macroName,
      class: "tok-macroName"
    }, {
      tag: Zc.propertyName,
      class: "tok-propertyName"
    }, {
      tag: Zc.operator,
      class: "tok-operator"
    }, {
      tag: Zc.comment,
      class: "tok-comment"
    }, {
      tag: Zc.meta,
      class: "tok-meta"
    }, {
      tag: Zc.invalid,
      class: "tok-invalid"
    }, {
      tag: Zc.punctuation,
      class: "tok-punctuation"
    }])
  },
  39321: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc.i,
      g: () => uc.v,
      k: () => uc.F,
      l: () => uc.J,
      p: () => sc.o,
      r: () => Yn,
      u: () => sc.R,
      x: () => sc.ib
    });
    var Vc = nc(1217),
      Ic = nc(1212),
      rB = nc(73),
      uc = nc(39279),
      sc = nc(39285),
      Mc = nc(39303),
      Pc = nc(39307);

    function qB(cB, Bc) {
      return nc => {
        let {
          state: Vc,
          dispatch: Ic
        } = nc;
        if (Vc.readOnly) return !1;
        let rB = cB(Bc, Vc);
        return !!rB && (Ic(Vc.update(rB)), !0)
      }
    }
    const Oc = qB(Sc, 0),
      Tc = qB(tB, 0),
      fc = qB(((cB, Bc) => tB(cB, Bc, function(cB) {
        let Bc = [];
        for (let nc of cB.selection.Iu) {
          let Vc = cB.doc.lineAt(nc.from),
            Ic = nc.to <= Vc.to ? Vc : cB.doc.lineAt(nc.to);
          Ic.from > Vc.from && Ic.from == nc.to && (Ic = nc.to == Vc.to + 1 ? Vc : cB.doc.lineAt(nc.to - 1));
          let rB = Bc.length - 1;
          rB >= 0 && Bc[rB].to > Vc.from ? Bc[rB].to = Ic.to : Bc.push({
            from: Vc.from + /^\s*/.exec(Vc.text)[0].length,
            to: Ic.to
          })
        }
        return Bc
      }(Bc))), 0);

    function mB(cB, Bc) {
      let nc = cB.languageDataAt("commentTokens", Bc, 1);
      return nc.length ? nc[0] : {}
    }
    const ec = 50;

    function tB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bc.selection.Iu,
        Vc = nc.map((cB => mB(Bc, cB.from).block));
      if (!Vc.every((cB => cB))) return null;
      let Ic = nc.map(((cB, nc) => function(cB, Bc, nc, Vc) {
        let Ic, rB, {
            open: uc,
            close: sc
          } = Bc,
          Mc = cB.sliceDoc(nc - ec, nc),
          Pc = cB.sliceDoc(Vc, Vc + ec),
          qB = /\s*$/.exec(Mc)[0].length,
          Oc = /^\s*/.exec(Pc)[0].length,
          Tc = Mc.length - qB;
        if (Mc.slice(Tc - uc.length, Tc) == uc && Pc.slice(Oc, Oc + sc.length) == sc) return {
          open: {
            pos: nc - qB,
            margin: qB && 1
          },
          close: {
            pos: Vc + Oc,
            margin: Oc && 1
          }
        };
        Vc - nc <= 2 * ec ? Ic = rB = cB.sliceDoc(nc, Vc) : (Ic = cB.sliceDoc(nc, nc + ec), rB = cB.sliceDoc(Vc - ec, Vc));
        let fc = /^\s*/.exec(Ic)[0].length,
          mB = /\s*$/.exec(rB)[0].length,
          tB = rB.length - mB - sc.length;
        return Ic.slice(fc, fc + uc.length) == uc && rB.slice(tB, tB + sc.length) == sc ? {
          open: {
            pos: nc + fc + uc.length,
            margin: /\s/.test(Ic.charAt(fc + uc.length)) ? 1 : 0
          },
          close: {
            pos: Vc - mB - sc.length,
            margin: /\s/.test(rB.charAt(tB - 1)) ? 1 : 0
          }
        } : null
      }(Bc, Vc[nc], cB.from, cB.to)));
      if (2 != cB && !Ic.every((cB => cB))) return {
        changes: Bc.changes(nc.map(((cB, Bc) => Ic[Bc] ? [] : [{
          from: cB.from,
          insert: Vc[Bc].open + " "
        }, {
          from: cB.to,
          insert: " " + Vc[Bc].close
        }])))
      };
      if (1 != cB && Ic.some((cB => cB))) {
        let cB = [];
        for (let Bc, nc = 0; nc < Ic.length; nc++)
          if (Bc = Ic[nc]) {
            let Ic = Vc[nc],
              {
                open: rB,
                close: uc
              } = Bc;
            cB.push({
              from: rB.pos - Ic.open.length,
              to: rB.pos + rB.margin
            }, {
              from: uc.pos - uc.margin,
              to: uc.pos + Ic.close.length
            })
          } return {
          changes: cB
        }
      }
      return null
    }

    function Sc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bc.selection.Iu,
        Vc = [],
        Ic = -1;
      cB: for (let {
          from: rB,
          to: uc
        }
        of nc) {
        let cB, nc = Vc.length,
          sc = 1e9;
        for (let Mc = rB; Mc <= uc;) {
          let nc = Bc.doc.lineAt(Mc);
          if (void 0 == cB && (cB = mB(Bc, nc.from).line, !cB)) continue cB;
          if (nc.from > Ic && (rB == uc || uc > nc.from)) {
            Ic = nc.from;
            let Bc = /^\s*/.exec(nc.text)[0].length,
              rB = Bc == nc.length,
              uc = nc.text.slice(Bc, Bc + cB.length) == cB ? Bc : -1;
            Bc < nc.text.length && Bc < sc && (sc = Bc), Vc.push({
              line: nc,
              comment: uc,
              token: cB,
              indent: Bc,
              empty: rB,
              single: !1
            })
          }
          Mc = nc.to + 1
        }
        if (sc < 1e9)
          for (let Bc = nc; Bc < Vc.length; Bc++) Vc[Bc].indent < Vc[Bc].line.text.length && (Vc[Bc].indent = sc);
        Vc.length == nc + 1 && (Vc[nc].single = !0)
      }
      if (2 != cB && Vc.some((cB => cB.comment < 0 && (!cB.empty || cB.single)))) {
        let cB = [];
        for (let {
            line: Bc,
            token: Ic,
            indent: rB,
            empty: uc,
            single: sc
          }
          of Vc) !sc && uc || cB.push({
          from: Bc.from + rB,
          insert: Ic + " "
        });
        let nc = Bc.changes(cB);
        return {
          changes: nc,
          selection: Bc.selection.map(nc, 1)
        }
      }
      if (1 != cB && Vc.some((cB => cB.comment >= 0))) {
        let cB = [];
        for (let {
            line: Bc,
            comment: nc,
            token: Ic
          }
          of Vc)
          if (nc >= 0) {
            let Vc = Bc.from + nc,
              rB = Vc + Ic.length;
            " " == Bc.text[rB - Bc.from] && rB++, cB.push({
              from: Vc,
              to: rB
            })
          } return {
          changes: cB
        }
      }
      return null
    }
    const yB = uc.c.define(),
      zB = uc.c.define(),
      pc = uc.q.define(),
      hc = uc.q.define({
        combine: cB => (0, uc.$)(cB, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (cB, Bc) => Bc
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (cB, Bc) => (nc, Vc) => cB(nc, Vc) || Bc(nc, Vc)
        })
      }),
      aB = uc.J.define({
        create: () => wc.empty,
        update(cB, Bc) {
          let nc = Bc.state.facet(hc),
            Vc = Bc.annotation(yB);
          if (Vc) {
            let Ic = bB.fromTransaction(Bc, Vc.selection),
              rB = Vc.side,
              uc = 0 == rB ? cB.undone : cB.done;
            return uc = Ic ? Zc(uc, uc.length, nc.minDepth, Ic) : Dc(uc, Bc.startState.selection), new wc(0 == rB ? Vc.rest : uc, 0 == rB ? uc : Vc.rest)
          }
          let Ic = Bc.annotation(zB);
          if ("full" != Ic && "before" != Ic || (cB = cB.isolate()), !1 === Bc.annotation(uc.R.addToHistory)) return Bc.changes.empty ? cB : cB.addMapping(Bc.changes.desc);
          let rB = bB.fromTransaction(Bc),
            sc = Bc.annotation(uc.R.time),
            Mc = Bc.annotation(uc.R.userEvent);
          return rB ? cB = cB.addChanges(rB, sc, Mc, nc, Bc) : Bc.selection && (cB = cB.addSelection(Bc.startState.selection, sc, Mc, nc.newGroupDelay)), "full" != Ic && "after" != Ic || (cB = cB.isolate()), cB
        },
        toJSON: cB => ({
          done: cB.done.map((cB => cB.toJSON())),
          undone: cB.undone.map((cB => cB.toJSON()))
        }),
        fromJSON: cB => new wc(cB.done.map(bB.fromJSON), cB.undone.map(bB.fromJSON))
      });

    function lc(cB, Bc) {
      return function(nc) {
        let {
          state: Vc,
          dispatch: Ic
        } = nc;
        if (!Bc && Vc.readOnly) return !1;
        let rB = Vc.field(aB, !1);
        if (!rB) return !1;
        let uc = rB.pop(cB, Vc, Bc);
        return !!uc && (Ic(uc), !0)
      }
    }
    const Yc = lc(0, !1),
      Lc = lc(1, !1),
      gB = lc(0, !0),
      Uc = lc(1, !0);
    class bB {
      constructor(cB, Bc, nc, Vc, Ic) {
        this.changes = cB, this.effects = Bc, this.mapped = nc, this.startSelection = Vc, this.selectionsAfter = Ic
      }
      setSelAfter(cB) {
        return new bB(this.changes, this.effects, this.mapped, this.startSelection, cB)
      }
      toJSON() {
        var cB, Bc, nc;
        return {
          changes: null === (cB = this.changes) || void 0 === cB ? void 0 : cB.toJSON(),
          mapped: null === (Bc = this.mapped) || void 0 === Bc ? void 0 : Bc.toJSON(),
          startSelection: null === (nc = this.startSelection) || void 0 === nc ? void 0 : nc.toJSON(),
          selectionsAfter: this.selectionsAfter.map((cB => cB.toJSON()))
        }
      }
      static fromJSON(cB) {
        return new bB(cB.changes && uc.ChangeSet.fromJSON(cB.changes), [], cB.mapped && uc.g.fromJSON(cB.mapped), cB.startSelection && uc.m.fromJSON(cB.startSelection), cB.selectionsAfter.map(uc.m.fromJSON))
      }
      static fromTransaction(cB, Bc) {
        let nc = Cc;
        for (let Vc of cB.startState.facet(pc)) {
          let Bc = Vc(cB);
          Bc.length && (nc = nc.concat(Bc))
        }
        return !nc.length && cB.changes.empty ? null : new bB(cB.changes.invert(cB.startState.doc), nc, void 0, Bc || cB.startState.selection, Cc)
      }
      static selection(cB) {
        return new bB(void 0, Cc, void 0, void 0, cB)
      }
    }

    function Zc(cB, Bc, nc, Vc) {
      let Ic = Bc + 1 > nc + 20 ? Bc - nc - 1 : 0,
        rB = cB.slice(Ic, Bc);
      return rB.push(Vc), rB
    }

    function Qc(cB, Bc) {
      return cB.length ? Bc.length ? cB.concat(Bc) : cB : Bc
    }
    const Cc = [],
      vB = 200;

    function Dc(cB, Bc) {
      if (cB.length) {
        let nc = cB[cB.length - 1],
          Vc = nc.selectionsAfter.slice(Math.max(0, nc.selectionsAfter.length - vB));
        return Vc.length && Vc[Vc.length - 1].eq(Bc) ? cB : (Vc.push(Bc), Zc(cB, cB.length - 1, 1e9, nc.setSelAfter(Vc)))
      }
      return [bB.selection([Bc])]
    }

    function Nc(cB) {
      let Bc = cB[cB.length - 1],
        nc = cB.slice();
      return nc[cB.length - 1] = Bc.setSelAfter(Bc.selectionsAfter.slice(0, Bc.selectionsAfter.length - 1)), nc
    }

    function Ec(cB, Bc) {
      if (!cB.length) return cB;
      let nc = cB.length,
        Vc = Cc;
      for (; nc;) {
        let Ic = oc(cB[nc - 1], Bc, Vc);
        if (Ic.changes && !Ic.changes.empty || Ic.effects.length) {
          let Bc = cB.slice(0, nc);
          return Bc[nc - 1] = Ic, Bc
        }
        Bc = Ic.mapped, nc--, Vc = Ic.selectionsAfter
      }
      return Vc.length ? [bB.selection(Vc)] : Cc
    }

    function oc(cB, Bc, nc) {
      let Vc = Qc(cB.selectionsAfter.length ? cB.selectionsAfter.map((cB => cB.map(Bc))) : Cc, nc);
      if (!cB.changes) return bB.selection(Vc);
      let Ic = cB.changes.map(Bc),
        rB = Bc.mapDesc(cB.changes, !0),
        sc = cB.mapped ? cB.mapped.composeDesc(rB) : rB;
      return new bB(Ic, uc.F.mapEffects(cB.effects, Bc), sc, cB.startSelection.map(rB), Vc)
    }
    const Wc = /^(input\.type|delete)($|\.)/;
    class wc {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = cB, this.undone = Bc, this.prevTime = nc, this.prevUserEvent = Vc
      }
      isolate() {
        return this.prevTime ? new wc(this.done, this.undone) : this
      }
      addChanges(cB, Bc, nc, Vc, Ic) {
        let rB = this.done,
          sc = rB[rB.length - 1];
        return rB = sc && sc.changes && !sc.changes.empty && cB.changes && (!nc || Wc.test(nc)) && (!sc.selectionsAfter.length && Bc - this.prevTime < Vc.newGroupDelay && Vc.joinToEvent(Ic, function(cB, Bc) {
          let nc = [],
            Vc = !1;
          return cB.iterChangedRanges(((cB, Bc) => nc.push(cB, Bc))), Bc.iterChangedRanges(((cB, Bc, Ic, rB) => {
            for (let uc = 0; uc < nc.length;) {
              let cB = nc[uc++],
                Bc = nc[uc++];
              rB >= cB && Ic <= Bc && (Vc = !0)
            }
          })), Vc
        }(sc.changes, cB.changes)) || "input.type.compose" == nc) ? Zc(rB, rB.length - 1, Vc.minDepth, new bB(cB.changes.compose(sc.changes), Qc(uc.F.mapEffects(cB.effects, sc.changes), sc.effects), sc.mapped, sc.startSelection, Cc)) : Zc(rB, rB.length, Vc.minDepth, cB), new wc(rB, Cc, Bc, nc)
      }
      addSelection(cB, Bc, nc, Vc) {
        let Ic = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Cc;
        return Ic.length > 0 && Bc - this.prevTime < Vc && nc == this.prevUserEvent && nc && /^select($|\.)/.test(nc) && (rB = Ic[Ic.length - 1], uc = cB, rB.Iu.length == uc.Iu.length && 0 === rB.Iu.filter(((cB, Bc) => cB.empty != uc.Iu[Bc].empty)).length) ? this : new wc(Dc(this.done, cB), this.undone, Bc, nc);
        var rB, uc
      }
      addMapping(cB) {
        return new wc(Ec(this.done, cB), Ec(this.undone, cB), this.prevTime, this.prevUserEvent)
      }
      pop(cB, Bc, nc) {
        let Vc = 0 == cB ? this.done : this.undone;
        if (0 == Vc.length) return null;
        let Ic = Vc[Vc.length - 1],
          rB = Ic.selectionsAfter[0] || (Ic.startSelection ? Ic.startSelection.map(Ic.changes.invertedDesc, 1) : Bc.selection);
        if (nc && Ic.selectionsAfter.length) return Bc.update({
          selection: Ic.selectionsAfter[Ic.selectionsAfter.length - 1],
          annotations: yB.of({
            side: cB,
            rest: Nc(Vc),
            selection: rB
          }),
          userEvent: 0 == cB ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Ic.changes) {
          let nc = 1 == Vc.length ? Cc : Vc.slice(0, Vc.length - 1);
          return Ic.mapped && (nc = Ec(nc, Ic.mapped)), Bc.update({
            changes: Ic.changes,
            selection: Ic.startSelection,
            effects: Ic.effects,
            annotations: yB.of({
              side: cB,
              rest: nc,
              selection: rB
            }),
            filter: !1,
            userEvent: 0 == cB ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    wc.empty = new wc(Cc, Cc);
    const kB = [{
      key: "Mod-z",
      run: Yc,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: Lc,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: Lc,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: gB,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: Uc,
      preventDefault: !0
    }];

    function Xc(cB, Bc) {
      return uc.m.create(cB.Iu.map(Bc), cB.mainIndex)
    }

    function Hc(cB, Bc) {
      return cB.update({
        selection: Bc,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function Fc(cB, Bc) {
      let {
        state: nc,
        dispatch: Vc
      } = cB, Ic = Xc(nc.selection, Bc);
      return !Ic.eq(nc.selection, !0) && (Vc(Hc(nc, Ic)), !0)
    }

    function Jc(cB, Bc) {
      return uc.m.cursor(Bc ? cB.to : cB.from)
    }

    function jB(cB, Bc) {
      return Fc(cB, (nc => nc.empty ? cB.moveByChar(nc, Bc) : Jc(nc, Bc)))
    }

    function Rc(cB) {
      return cB.textDirectionAt(cB.state.selection.main.head) == sc.g.LTR
    }
    const iB = cB => jB(cB, !Rc(cB)),
      Kc = cB => jB(cB, Rc(cB));

    function xB(cB, Bc) {
      return Fc(cB, (nc => nc.empty ? cB.moveByGroup(nc, Bc) : Jc(nc, Bc)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function dc(cB, Bc, nc) {
      if (Bc.type.prop(nc)) return !0;
      let Vc = Bc.to - Bc.from;
      return Vc && (Vc > 2 || /[^\s,.;:]/.test(cB.sliceDoc(Bc.from, Bc.to))) || Bc.firstChild
    }

    function Ac(cB, Bc, nc) {
      let Vc, Ic, rB = (0, Mc.lb)(cB).resolveInner(Bc.head),
        sc = nc ? Pc.k.closedBy : Pc.k.openedBy;
      for (let uc = Bc.head;;) {
        let Bc = nc ? rB.childAfter(uc) : rB.childBefore(uc);
        if (!Bc) break;
        dc(cB, Bc, sc) ? rB = Bc : uc = nc ? Bc.to : Bc.from
      }
      return Ic = rB.type.prop(sc) && (Vc = nc ? (0, Mc.ab)(cB, rB.from, 1) : (0, Mc.ab)(cB, rB.to, -1)) && Vc.matched ? nc ? Vc.end.to : Vc.end.from : nc ? rB.to : rB.from, uc.m.cursor(Ic, nc ? -1 : 1)
    }

    function Gc(cB, Bc) {
      return Fc(cB, (nc => {
        if (!nc.empty) return Jc(nc, Bc);
        let Vc = cB.moveVertically(nc, Bc);
        return Vc.head != nc.head ? Vc : cB.moveToLineBoundary(nc, Bc)
      }))
    }
    const cn = cB => Gc(cB, !1),
      BB = cB => Gc(cB, !0);

    function nB(cB) {
      let Bc, nc = cB.scrollDOM.clientHeight < cB.scrollDOM.scrollHeight - 2,
        Vc = 0,
        Ic = 0;
      if (nc) {
        for (let Bc of cB.state.facet(sc.i.scrollMargins)) {
          let nc = Bc(cB);
          (null === nc || void 0 === nc ? void 0 : nc.top) && (Vc = Math.max(null === nc || void 0 === nc ? void 0 : nc.top, Vc)), (null === nc || void 0 === nc ? void 0 : nc.bottom) && (Ic = Math.max(null === nc || void 0 === nc ? void 0 : nc.bottom, Ic))
        }
        Bc = cB.scrollDOM.clientHeight - Vc - Ic
      } else Bc = (cB.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Vc,
        marginBottom: Ic,
        selfScroll: nc,
        height: Math.max(cB.defaultLineHeight, Bc - 5)
      }
    }

    function VB(cB, Bc) {
      let nc, Vc = nB(cB),
        {
          state: Ic
        } = cB,
        rB = Xc(Ic.selection, (nc => nc.empty ? cB.moveVertically(nc, Bc, Vc.height) : Jc(nc, Bc)));
      if (rB.eq(Ic.selection)) return !1;
      if (Vc.selfScroll) {
        let Bc = cB.coordsAtPos(Ic.selection.main.head),
          uc = cB.scrollDOM.getBoundingClientRect(),
          Mc = uc.top + Vc.marginTop,
          Pc = uc.bottom - Vc.marginBottom;
        Bc && Bc.top > Mc && Bc.bottom < Pc && (nc = sc.i.scrollIntoView(rB.main.head, {
          y: "start",
          yMargin: Bc.top - Mc
        }))
      }
      return cB.dispatch(Hc(Ic, rB), {
        effects: nc
      }), !0
    }
    const IB = cB => VB(cB, !1),
      rn = cB => VB(cB, !0);

    function uB(cB, Bc, nc) {
      let Vc = cB.lineBlockAt(Bc.head),
        Ic = cB.moveToLineBoundary(Bc, nc);
      if (Ic.head == Bc.head && Ic.head != (nc ? Vc.to : Vc.from) && (Ic = cB.moveToLineBoundary(Bc, nc, !1)), !nc && Ic.head == Vc.from && Vc.length) {
        let nc = /^\s*/.exec(cB.state.sliceDoc(Vc.from, Math.min(Vc.from + 100, Vc.to)))[0].length;
        nc && Bc.head != Vc.from + nc && (Ic = uc.m.cursor(Vc.from + nc))
      }
      return Ic
    }

    function sB(cB, Bc, nc) {
      let Vc = !1,
        Ic = Xc(cB.selection, (Bc => {
          let Ic = (0, Mc.ab)(cB, Bc.head, -1) || (0, Mc.ab)(cB, Bc.head, 1) || Bc.head > 0 && (0, Mc.ab)(cB, Bc.head - 1, 1) || Bc.head < cB.doc.length && (0, Mc.ab)(cB, Bc.head + 1, -1);
          if (!Ic || !Ic.end) return Bc;
          Vc = !0;
          let rB = Ic.start.from == Bc.head ? Ic.end.to : Ic.end.from;
          return nc ? uc.m.range(Bc.anchor, rB) : uc.m.cursor(rB)
        }));
      return !!Vc && (Bc(Hc(cB, Ic)), !0)
    }

    function MB(cB, Bc) {
      let nc = Xc(cB.state.selection, (cB => {
        let nc = Bc(cB);
        return uc.m.range(cB.anchor, nc.head, nc.goalColumn, nc.bidiLevel || void 0, nc.assoc)
      }));
      return !nc.eq(cB.state.selection) && (cB.dispatch(Hc(cB.state, nc)), !0)
    }

    function PB(cB, Bc) {
      return MB(cB, (nc => cB.moveByChar(nc, Bc)))
    }
    const qn = cB => PB(cB, !Rc(cB)),
      OB = cB => PB(cB, Rc(cB));

    function TB(cB, Bc) {
      return MB(cB, (nc => cB.moveByGroup(nc, Bc)))
    }

    function fB(cB, Bc) {
      return MB(cB, (nc => cB.moveVertically(nc, Bc)))
    }
    const mn = cB => fB(cB, !1),
      eB = cB => fB(cB, !0);

    function tn(cB, Bc) {
      return MB(cB, (nc => cB.moveVertically(nc, Bc, nB(cB).height)))
    }
    const SB = cB => tn(cB, !1),
      yn = cB => tn(cB, !0),
      zn = cB => {
        let {
          state: Bc,
          dispatch: nc
        } = cB;
        return nc(Hc(Bc, {
          anchor: 0
        })), !0
      },
      pB = cB => {
        let {
          state: Bc,
          dispatch: nc
        } = cB;
        return nc(Hc(Bc, {
          anchor: Bc.doc.length
        })), !0
      },
      hB = cB => {
        let {
          state: Bc,
          dispatch: nc
        } = cB;
        return nc(Hc(Bc, {
          anchor: Bc.selection.main.anchor,
          head: 0
        })), !0
      },
      an = cB => {
        let {
          state: Bc,
          dispatch: nc
        } = cB;
        return nc(Hc(Bc, {
          anchor: Bc.selection.main.anchor,
          head: Bc.doc.length
        })), !0
      };

    function lB(cB, Bc) {
      let {
        state: nc
      } = cB, Vc = nc.selection, Ic = nc.selection.Iu.slice();
      for (let rB of nc.selection.Iu) {
        let Vc = nc.doc.lineAt(rB.head);
        if (Bc ? Vc.to < cB.state.doc.length : Vc.from > 0)
          for (let nc = rB;;) {
            let rB = cB.moveVertically(nc, Bc);
            if (rB.head < Vc.from || rB.head > Vc.to) {
              Ic.some((cB => cB.head == rB.head)) || Ic.push(rB);
              break
            }
            if (rB.head == nc.head) break;
            nc = rB
          }
      }
      return Ic.length != Vc.Iu.length && (cB.dispatch(Hc(nc, uc.m.create(Ic, Ic.length - 1))), !0)
    }

    function YB(cB, Bc) {
      if (cB.state.readOnly) return !1;
      let nc = "delete.selection",
        {
          state: Vc
        } = cB,
        Ic = Vc.changeByRange((Vc => {
          let {
            from: Ic,
            to: rB
          } = Vc;
          if (Ic == rB) {
            let uc = Bc(Vc);
            uc < Ic ? (nc = "delete.backward", uc = LB(cB, uc, !1)) : uc > Ic && (nc = "delete.forward", uc = LB(cB, uc, !0)), Ic = Math.min(Ic, uc), rB = Math.max(rB, uc)
          } else Ic = LB(cB, Ic, !1), rB = LB(cB, rB, !0);
          return Ic == rB ? {
            range: Vc
          } : {
            changes: {
              from: Ic,
              to: rB
            },
            range: uc.m.cursor(Ic, Ic < Vc.head ? -1 : 1)
          }
        }));
      return !Ic.changes.empty && (cB.dispatch(Vc.update(Ic, {
        scrollIntoView: !0,
        userEvent: nc,
        effects: "delete.selection" == nc ? sc.i.announce.of(Vc.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function LB(cB, Bc, nc) {
      if (cB instanceof sc.i)
        for (let Vc of cB.state.facet(sc.i.atomicRanges).map((Bc => Bc(cB)))) Vc.between(Bc, Bc, ((cB, Vc) => {
          cB < Bc && Vc > Bc && (Bc = nc ? Vc : cB)
        }));
      return Bc
    }
    const gn = (cB, Bc, nc) => YB(cB, (Vc => {
        let Ic, rB, sc = Vc.from,
          {
            state: Pc
          } = cB,
          qB = Pc.doc.lineAt(sc);
        if (nc && !Bc && sc > qB.from && sc < qB.from + 200 && !/[^ \t]/.test(Ic = qB.text.slice(0, sc - qB.from))) {
          if ("\t" == Ic[Ic.length - 1]) return sc - 1;
          let cB = (0, uc.bb)(Ic, Pc.tabSize) % (0, Mc.O)(Pc) || (0, Mc.O)(Pc);
          for (let Bc = 0; Bc < cB && " " == Ic[Ic.length - 1 - Bc]; Bc++) sc--;
          rB = sc
        } else rB = (0, uc.eb)(qB.text, sc - qB.from, Bc, Bc) + qB.from, rB == sc && qB.number != (Bc ? Pc.doc.lines : 1) ? rB += Bc ? 1 : -1 : !Bc && /[\ufe00-\ufe0f]/.test(qB.text.slice(rB - qB.from, sc - qB.from)) && (rB = (0, uc.eb)(qB.text, rB - qB.from, !1, !1) + qB.from);
        return rB
      })),
      UB = cB => gn(cB, !1, !0),
      bn = cB => gn(cB, !0, !1),
      ZB = (cB, Bc) => YB(cB, (nc => {
        let Vc = nc.head,
          {
            state: Ic
          } = cB,
          rB = Ic.doc.lineAt(Vc),
          sc = Ic.charCategorizer(Vc);
        for (let cB = null;;) {
          if (Vc == (Bc ? rB.to : rB.from)) {
            Vc == nc.head && rB.number != (Bc ? Ic.doc.lines : 1) && (Vc += Bc ? 1 : -1);
            break
          }
          let Mc = (0, uc.eb)(rB.text, Vc - rB.from, Bc) + rB.from,
            Pc = rB.text.slice(Math.min(Vc, Mc) - rB.from, Math.max(Vc, Mc) - rB.from),
            qB = sc(Pc);
          if (null != cB && qB != cB) break;
          " " == Pc && Vc == nc.head || (cB = qB), Vc = Mc
        }
        return Vc
      })),
      QB = cB => ZB(cB, !1);

    function CB(cB) {
      let Bc = [],
        nc = -1;
      for (let Vc of cB.selection.Iu) {
        let Ic = cB.doc.lineAt(Vc.from),
          rB = cB.doc.lineAt(Vc.to);
        if (Vc.empty || Vc.to != rB.from || (rB = cB.doc.lineAt(Vc.to - 1)), nc >= Ic.number) {
          let cB = Bc[Bc.length - 1];
          cB.to = rB.to, cB.Iu.push(Vc)
        } else Bc.push({
          from: Ic.from,
          to: rB.to,
          Iu: [Vc]
        });
        nc = rB.number + 1
      }
      return Bc
    }

    function vn(cB, Bc, nc) {
      if (cB.readOnly) return !1;
      let Vc = [],
        Ic = [];
      for (let rB of CB(cB)) {
        if (nc ? rB.to == cB.doc.length : 0 == rB.from) continue;
        let Bc = cB.doc.lineAt(nc ? rB.to + 1 : rB.from - 1),
          sc = Bc.length + 1;
        if (nc) {
          Vc.push({
            from: rB.to,
            to: Bc.to
          }, {
            from: rB.from,
            insert: Bc.text + cB.lineBreak
          });
          for (let Bc of rB.Iu) Ic.push(uc.m.range(Math.min(cB.doc.length, Bc.anchor + sc), Math.min(cB.doc.length, Bc.head + sc)))
        } else {
          Vc.push({
            from: Bc.from,
            to: rB.from
          }, {
            from: rB.to,
            insert: cB.lineBreak + Bc.text
          });
          for (let cB of rB.Iu) Ic.push(uc.m.range(cB.anchor - sc, cB.head - sc))
        }
      }
      return !!Vc.length && (Bc(cB.update({
        changes: Vc,
        scrollIntoView: !0,
        selection: uc.m.create(Ic, cB.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function DB(cB, Bc, nc) {
      if (cB.readOnly) return !1;
      let Vc = [];
      for (let rB of CB(cB)) nc ? Vc.push({
        from: rB.from,
        insert: cB.doc.slice(rB.from, rB.to) + cB.lineBreak
      }) : Vc.push({
        from: rB.to,
        insert: cB.lineBreak + cB.doc.slice(rB.from, rB.to)
      });
      let Ic = cB.changes(Vc);
      return Bc(cB.update({
        changes: Ic,
        selection: cB.selection.map(Ic, nc ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const NB = EB(!1);

    function EB(cB) {
      return Bc => {
        let {
          state: nc,
          dispatch: Vc
        } = Bc;
        if (nc.readOnly) return !1;
        let Ic = nc.changeByRange((Bc => {
          let {
            from: Vc,
            to: Ic
          } = Bc, rB = nc.doc.lineAt(Vc), sc = !cB && Vc == Ic && function(cB, Bc) {
            if (/\(\)|\[\]|\{\}/.test(cB.sliceDoc(Bc - 1, Bc + 1))) return {
              from: Bc,
              to: Bc
            };
            let nc, Vc = (0, Mc.lb)(cB).resolveInner(Bc),
              Ic = Vc.childBefore(Bc),
              rB = Vc.childAfter(Bc);
            return Ic && rB && Ic.to <= Bc && rB.from >= Bc && (nc = Ic.type.prop(Pc.k.closedBy)) && nc.indexOf(rB.name) > -1 && cB.doc.lineAt(Ic.to).from == cB.doc.lineAt(rB.from).from && !/\S/.test(cB.sliceDoc(Ic.to, rB.from)) ? {
              from: Ic.to,
              to: rB.from
            } : null
          }(nc, Vc);
          cB && (Vc = Ic = (Ic <= rB.to ? rB : nc.doc.lineAt(Ic)).to);
          let qB = new Mc.e(nc, {
              simulateBreak: Vc,
              simulateDoubleBreak: !!sc
            }),
            Oc = (0, Mc.S)(qB, Vc);
          for (null == Oc && (Oc = (0, uc.bb)(/^\s*/.exec(nc.doc.lineAt(Vc).text)[0], nc.tabSize)); Ic < rB.to && /\s/.test(rB.text[Ic - rB.from]);) Ic++;
          sc ? ({
            from: Vc,
            to: Ic
          } = sc) : Vc > rB.from && Vc < rB.from + 100 && !/\S/.test(rB.text.slice(0, Vc)) && (Vc = rB.from);
          let Tc = ["", (0, Mc.X)(nc, Oc)];
          return sc && Tc.push((0, Mc.X)(nc, qB.lineIndent(rB.from, -1))), {
            changes: {
              from: Vc,
              to: Ic,
              insert: uc.N.of(Tc)
            },
            range: uc.m.cursor(Vc + 1 + Tc[1].length)
          }
        }));
        return Vc(nc.update(Ic, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function oB(cB, Bc) {
      let nc = -1;
      return cB.changeByRange((Vc => {
        let Ic = [];
        for (let uc = Vc.from; uc <= Vc.to;) {
          let rB = cB.doc.lineAt(uc);
          rB.number > nc && (Vc.empty || Vc.to > rB.from) && (Bc(rB, Ic, Vc), nc = rB.number), uc = rB.to + 1
        }
        let rB = cB.changes(Ic);
        return {
          changes: Ic,
          range: uc.m.range(rB.mapPos(Vc.anchor, 1), rB.mapPos(Vc.head, 1))
        }
      }))
    }
    const WB = cB => {
        let {
          state: Bc,
          dispatch: nc
        } = cB;
        return !Bc.readOnly && (nc(Bc.update(oB(Bc, ((cB, nc) => {
          nc.push({
            from: cB.from,
            insert: Bc.facet(Mc.Y)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      wB = cB => {
        let {
          state: Bc,
          dispatch: nc
        } = cB;
        return !Bc.readOnly && (nc(Bc.update(oB(Bc, ((cB, nc) => {
          let Vc = /^\s*/.exec(cB.text)[0];
          if (!Vc) return;
          let Ic = (0, uc.bb)(Vc, Bc.tabSize),
            rB = 0,
            sc = (0, Mc.X)(Bc, Math.max(0, Ic - (0, Mc.O)(Bc)));
          for (; rB < Vc.length && rB < sc.length && Vc.charCodeAt(rB) == sc.charCodeAt(rB);) rB++;
          nc.push({
            from: cB.from + rB,
            to: cB.from + Vc.length,
            insert: sc.slice(rB)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      kn = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: cB => Fc(cB, (Bc => Ac(cB.state, Bc, !Rc(cB)))),
        shift: cB => MB(cB, (Bc => Ac(cB.state, Bc, !Rc(cB))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: cB => Fc(cB, (Bc => Ac(cB.state, Bc, Rc(cB)))),
        shift: cB => MB(cB, (Bc => Ac(cB.state, Bc, Rc(cB))))
      }, {
        key: "Alt-ArrowUp",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB;
          return vn(Bc, nc, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB;
          return DB(Bc, nc, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB;
          return vn(Bc, nc, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB;
          return DB(Bc, nc, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: cB => lB(cB, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: cB => lB(cB, !0)
      }, {
        key: "Escape",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB, Vc = Bc.selection, Ic = null;
          return Vc.Iu.length > 1 ? Ic = uc.m.create([Vc.main]) : Vc.main.empty || (Ic = uc.m.create([uc.m.cursor(Vc.main.head)])), !!Ic && (nc(Hc(Bc, Ic)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: EB(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB, Vc = CB(Bc).map((cB => {
            let {
              from: nc,
              to: Vc
            } = cB;
            return uc.m.range(nc, Math.min(Vc + 1, Bc.doc.length))
          }));
          return nc(Bc.update({
            selection: uc.m.create(Vc),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB, Vc = Xc(Bc.selection, (cB => {
            let nc = (0, Mc.lb)(Bc),
              Vc = nc.resolveStack(cB.from, 1);
            if (cB.empty) {
              let Bc = nc.resolveStack(cB.from, -1);
              Bc.node.from >= Vc.node.from && Bc.node.to <= Vc.node.to && (Vc = Bc)
            }
            for (let Bc = Vc; Bc; Bc = Bc.next) {
              let {
                node: nc
              } = Bc;
              if ((nc.from < cB.from && nc.to >= cB.to || nc.to > cB.to && nc.from <= cB.from) && Bc.next) return uc.m.range(nc.to, nc.from)
            }
            return cB
          }));
          return !Vc.eq(Bc.selection) && (nc(Hc(Bc, Vc)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: wB
      }, {
        key: "Mod-]",
        run: WB
      }, {
        key: "Mod-Alt-\\",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB;
          if (Bc.readOnly) return !1;
          let Vc = Object.create(null),
            Ic = new Mc.e(Bc, {
              overrideIndentation: cB => {
                let Bc = Vc[cB];
                return null == Bc ? -1 : Bc
              }
            }),
            rB = oB(Bc, ((cB, nc, rB) => {
              let uc = (0, Mc.S)(Ic, cB.from);
              if (null == uc) return;
              /\S/.test(cB.text) || (uc = 0);
              let sc = /^\s*/.exec(cB.text)[0],
                Pc = (0, Mc.X)(Bc, uc);
              (sc != Pc || rB.from < cB.from + sc.length) && (Vc[cB.from] = uc, nc.push({
                from: cB.from,
                to: cB.from + sc.length,
                insert: Pc
              }))
            }));
          return rB.changes.empty || nc(Bc.update(rB, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: cB => {
          if (cB.state.readOnly) return !1;
          let {
            state: Bc
          } = cB, nc = Bc.changes(CB(Bc).map((cB => {
            let {
              from: nc,
              to: Vc
            } = cB;
            return nc > 0 ? nc-- : Vc < Bc.doc.length && Vc++, {
              from: nc,
              to: Vc
            }
          }))), Vc = Xc(Bc.selection, (Bc => {
            let nc;
            if (cB.lineWrapping) {
              let Vc = cB.lineBlockAt(Bc.head),
                Ic = cB.coordsAtPos(Bc.head, Bc.assoc || 1);
              Ic && (nc = Vc.bottom + cB.documentTop - Ic.bottom + cB.defaultLineHeight / 2)
            }
            return cB.moveVertically(Bc, !0, nc)
          })).map(nc);
          return cB.dispatch({
            changes: nc,
            selection: Vc,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB;
          return sB(Bc, nc, !1)
        }
      }, {
        key: "Mod-/",
        run: cB => {
          let {
            state: Bc
          } = cB, nc = Bc.doc.lineAt(Bc.selection.main.from), Vc = mB(cB.state, nc.from);
          return Vc.line ? Oc(cB) : !!Vc.block && fc(cB)
        }
      }, {
        key: "Alt-A",
        run: Tc
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: cB => (cB.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: iB,
        shift: qn,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: cB => xB(cB, !Rc(cB)),
        shift: cB => TB(cB, !Rc(cB)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: cB => Fc(cB, (Bc => uB(cB, Bc, !Rc(cB)))),
        shift: cB => MB(cB, (Bc => uB(cB, Bc, !Rc(cB)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: Kc,
        shift: OB,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: cB => xB(cB, Rc(cB)),
        shift: cB => TB(cB, Rc(cB)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: cB => Fc(cB, (Bc => uB(cB, Bc, Rc(cB)))),
        shift: cB => MB(cB, (Bc => uB(cB, Bc, Rc(cB)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: cn,
        shift: mn,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: zn,
        shift: hB
      }, {
        mac: "Ctrl-ArrowUp",
        run: IB,
        shift: SB
      }, {
        key: "ArrowDown",
        run: BB,
        shift: eB,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: pB,
        shift: an
      }, {
        mac: "Ctrl-ArrowDown",
        run: rn,
        shift: yn
      }, {
        key: "PageUp",
        run: IB,
        shift: SB
      }, {
        key: "PageDown",
        run: rn,
        shift: yn
      }, {
        key: "Home",
        run: cB => Fc(cB, (Bc => uB(cB, Bc, !1))),
        shift: cB => MB(cB, (Bc => uB(cB, Bc, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: zn,
        shift: hB
      }, {
        key: "End",
        run: cB => Fc(cB, (Bc => uB(cB, Bc, !0))),
        shift: cB => MB(cB, (Bc => uB(cB, Bc, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: pB,
        shift: an
      }, {
        key: "Enter",
        run: NB,
        shift: NB
      }, {
        key: "Mod-a",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB;
          return nc(Bc.update({
            selection: {
              anchor: 0,
              head: Bc.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: UB,
        shift: UB,
        preventDefault: !0
      }, {
        key: "Delete",
        run: bn,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: QB,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: cB => ZB(cB, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: cB => YB(cB, (Bc => {
          let nc = cB.moveToLineBoundary(Bc, !1).head;
          return Bc.head > nc ? nc : Math.max(0, Bc.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: cB => YB(cB, (Bc => {
          let nc = cB.moveToLineBoundary(Bc, !0).head;
          return Bc.head < nc ? nc : Math.min(cB.state.doc.length, Bc.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: iB,
        shift: qn,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: Kc,
        shift: OB
      }, {
        key: "Ctrl-p",
        run: cn,
        shift: mn
      }, {
        key: "Ctrl-n",
        run: BB,
        shift: eB
      }, {
        key: "Ctrl-a",
        run: cB => Fc(cB, (Bc => uc.m.cursor(cB.lineBlockAt(Bc.head).from, 1))),
        shift: cB => MB(cB, (Bc => uc.m.cursor(cB.lineBlockAt(Bc.head).from)))
      }, {
        key: "Ctrl-e",
        run: cB => Fc(cB, (Bc => uc.m.cursor(cB.lineBlockAt(Bc.head).to, -1))),
        shift: cB => MB(cB, (Bc => uc.m.cursor(cB.lineBlockAt(Bc.head).to)))
      }, {
        key: "Ctrl-d",
        run: bn
      }, {
        key: "Ctrl-h",
        run: UB
      }, {
        key: "Ctrl-k",
        run: cB => YB(cB, (Bc => {
          let nc = cB.lineBlockAt(Bc.head).to;
          return Bc.head < nc ? nc : Math.min(cB.state.doc.length, Bc.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: QB
      }, {
        key: "Ctrl-o",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB;
          if (Bc.readOnly) return !1;
          let Vc = Bc.changeByRange((cB => ({
            changes: {
              from: cB.from,
              to: cB.to,
              insert: uc.N.of(["", ""])
            },
            range: uc.m.cursor(cB.from)
          })));
          return nc(Bc.update(Vc, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: cB => {
          let {
            state: Bc,
            dispatch: nc
          } = cB;
          if (Bc.readOnly) return !1;
          let Vc = Bc.changeByRange((cB => {
            if (!cB.empty || 0 == cB.from || cB.from == Bc.doc.length) return {
              range: cB
            };
            let nc = cB.from,
              Vc = Bc.doc.lineAt(nc),
              Ic = nc == Vc.from ? nc - 1 : (0, uc.eb)(Vc.text, nc - Vc.from, !1) + Vc.from,
              rB = nc == Vc.to ? nc + 1 : (0, uc.eb)(Vc.text, nc - Vc.from, !0) + Vc.from;
            return {
              changes: {
                from: Ic,
                to: rB,
                insert: Bc.doc.slice(nc, rB).append(Bc.doc.slice(Ic, nc))
              },
              range: uc.m.cursor(rB)
            }
          }));
          return !Vc.changes.empty && (nc(Bc.update(Vc, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: rn
      }].map((cB => ({
        mac: cB.key,
        run: cB.run,
        shift: cB.shift
      }))))),
      XB = {
        key: "Tab",
        run: WB,
        shift: wB
      };
    var HB = nc(39330),
      FB = nc(39274),
      JB = nc(39336),
      jn = function(cB) {
        void 0 === cB && (cB = {});
        var {
          crosshairCursor: Bc = !1
        } = cB, nc = [];
        !1 !== cB.closeBracketsKeymap && (nc = nc.concat(FB.f)), !1 !== cB.defaultKeymap && (nc = nc.concat(kn)), !1 !== cB.searchKeymap && (nc = nc.concat(HB.i)), !1 !== cB.historyKeymap && (nc = nc.concat(kB)), !1 !== cB.foldKeymap && (nc = nc.concat(Mc.G)), !1 !== cB.completionKeymap && (nc = nc.concat(FB.n)), !1 !== cB.lintKeymap && (nc = nc.concat(JB.d));
        var Vc = [];
        return !1 !== cB.lineNumbers && Vc.push((0, sc.W)()), !1 !== cB.highlightActiveLineGutter && Vc.push((0, sc.K)()), !1 !== cB.highlightSpecialChars && Vc.push((0, sc.P)()), !1 !== cB.history && Vc.push(function() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [aB, hc.of(cB), sc.i.domEventHandlers({
            beforeinput(cB, Bc) {
              let nc = "historyUndo" == cB.inputType ? Yc : "historyRedo" == cB.inputType ? Lc : null;
              return !!nc && (cB.preventDefault(), nc(Bc))
            }
          })]
        }()), !1 !== cB.foldGutter && Vc.push((0, Mc.C)()), !1 !== cB.drawSelection && Vc.push((0, sc.v)()), !1 !== cB.dropCursor && Vc.push((0, sc.y)()), !1 !== cB.allowMultipleSelections && Vc.push(uc.o.allowMultipleSelections.of(!0)), !1 !== cB.indentOnInput && Vc.push((0, Mc.U)()), !1 !== cB.syntaxHighlighting && Vc.push((0, Mc.eb)(Mc.t, {
          fallback: !0
        })), !1 !== cB.bracketMatching && Vc.push((0, Mc.n)()), !1 !== cB.closeBrackets && Vc.push((0, FB.j)()), !1 !== cB.autocompletion && Vc.push((0, FB.d)()), !1 !== cB.rectangularSelection && Vc.push((0, sc.ab)()), !1 !== Bc && Vc.push((0, sc.t)()), !1 !== cB.highlightActiveLine && Vc.push((0, sc.L)()), !1 !== cB.highlightSelectionMatches && Vc.push((0, HB.f)()), cB.tabSize && "number" === typeof cB.tabSize && Vc.push(Mc.Y.of(" ".repeat(cB.tabSize))), Vc.concat([sc.S.of(nc.flat())]).filter(Boolean)
      },
      RB = nc(39310);
    const KB = "#e5c07b",
      xn = "#e06c75",
      dB = "#56b6c2",
      AB = "#ffffff",
      GB = "#abb2bf",
      cV = "#7d8799",
      Bn = "#61afef",
      nn = "#98c379",
      Vn = "#d19a66",
      In = "#c678dd",
      rV = "#21252b",
      un = "#2c313a",
      sn = "#282c34",
      Mn = "#353a42",
      Pn = "#3E4451",
      qV = "#528bff",
      On = sc.i.theme({
        "&": {
          color: GB,
          backgroundColor: sn
        },
        ".cm-content": {
          caretColor: qV
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: qV
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Pn
        },
        ".cm-panels": {
          backgroundColor: rV,
          color: GB
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
          backgroundColor: sn,
          color: cV,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: un
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Mn
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Mn,
          borderBottomColor: Mn
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: un,
            color: GB
          }
        }
      }, {
        dark: !0
      }),
      Tn = Mc.c.define([{
        tag: RB.j.keyword,
        color: In
      }, {
        tag: [RB.j.name, RB.j.deleted, RB.j.character, RB.j.propertyName, RB.j.macroName],
        color: xn
      }, {
        tag: [RB.j.function(RB.j.variableName), RB.j.labelName],
        color: Bn
      }, {
        tag: [RB.j.color, RB.j.constant(RB.j.name), RB.j.standard(RB.j.name)],
        color: Vn
      }, {
        tag: [RB.j.definition(RB.j.name), RB.j.separator],
        color: GB
      }, {
        tag: [RB.j.typeName, RB.j.className, RB.j.number, RB.j.changed, RB.j.annotation, RB.j.modifier, RB.j.self, RB.j.namespace],
        color: KB
      }, {
        tag: [RB.j.operator, RB.j.operatorKeyword, RB.j.url, RB.j.escape, RB.j.regexp, RB.j.link, RB.j.special(RB.j.string)],
        color: dB
      }, {
        tag: [RB.j.meta, RB.j.comment],
        color: cV
      }, {
        tag: RB.j.strong,
        fontWeight: "bold"
      }, {
        tag: RB.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: RB.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: RB.j.link,
        color: cV,
        textDecoration: "underline"
      }, {
        tag: RB.j.heading,
        fontWeight: "bold",
        color: xn
      }, {
        tag: [RB.j.atom, RB.j.bool, RB.j.special(RB.j.variableName)],
        color: Vn
      }, {
        tag: [RB.j.processingInstruction, RB.j.string, RB.j.inserted],
        color: nn
      }, {
        tag: RB.j.invalid,
        color: AB
      }]),
      fn = [On, (0, Mc.eb)(Tn)];
    var mV = sc.i.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class en {
      constructor(cB, Bc) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = Bc, this.timeoutMS = Bc, this.callbacks.push(cB)
      }
      cn() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var cB = this.callbacks.slice();
          this.callbacks.length = 0, cB.forEach((cB => {
            try {
              cB()
            } catch (Bc) {
              console.error("TimeoutLatch callback error:", Bc)
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
    class tV {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(cB) {
        this.latches.add(cB), this.start()
      }
      remove(cB) {
        this.latches.delete(cB), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((cB => {
            cB.cn(), cB.isDone && this.remove(cB)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Sn = null,
      yV = uc.c.define(),
      zV = [];

    function pn(cB) {
      var {
        value: Bc,
        selection: nc,
        onChange: Vc,
        onStatistics: Ic,
        onCreateEditor: Mc,
        onUpdate: Pc,
        extensions: qB = zV,
        autoFocus: Oc,
        theme: Tc = "light",
        height: fc = null,
        minHeight: mB = null,
        maxHeight: ec = null,
        width: tB = null,
        minWidth: Sc = null,
        maxWidth: yB = null,
        placeholder: zB = "",
        editable: pc = !0,
        readOnly: hc = !1,
        indentWithTab: aB = !0,
        basicSetup: lc = !0,
        root: Yc,
        initialState: Lc
      } = cB, [gB, Uc] = (0, rB.useState)(), [bB, Zc] = (0, rB.useState)(), [Qc, Cc] = (0, rB.useState)(), vB = (0, rB.useState)((() => ({
        current: null
      })))[0], Dc = (0, rB.useState)((() => ({
        current: null
      })))[0], Nc = sc.i.theme({
        "&": {
          height: fc,
          minHeight: mB,
          maxHeight: ec,
          width: tB,
          minWidth: Sc,
          maxWidth: yB
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Ec = sc.i.updateListener.of((cB => {
        if (cB.docChanged && "function" === typeof Vc && !cB.transactions.some((cB => cB.annotation(yV)))) {
          vB.current ? vB.current.reset() : (vB.current = new en((() => {
            if (Dc.current) {
              var cB = Dc.current;
              Dc.current = null, cB()
            }
            vB.current = null
          }), 200), ("undefined" === typeof window ? new tV : (Sn || (Sn = new tV), Sn)).add(vB.current));
          var Bc = cB.state.doc.toString();
          Vc(Bc, cB)
        }
        Ic && Ic((cB => ({
          line: cB.state.doc.lineAt(cB.state.selection.main.from),
          lineCount: cB.state.doc.lines,
          lineBreak: cB.state.lineBreak,
          length: cB.state.doc.length,
          readOnly: cB.state.readOnly,
          tabSize: cB.state.tabSize,
          selection: cB.state.selection,
          selectionAsSingle: cB.state.selection.asSingle().main,
          Iu: cB.state.selection.Iu,
          selectionCode: cB.state.sliceDoc(cB.state.selection.main.from, cB.state.selection.main.to),
          selections: cB.state.selection.Iu.map((Bc => cB.state.sliceDoc(Bc.from, Bc.to))),
          selectedText: cB.state.selection.Iu.some((cB => !cB.empty))
        }))(cB))
      })), oc = function(cB) {
        void 0 === cB && (cB = {});
        var {
          indentWithTab: Bc = !0,
          editable: nc = !0,
          readOnly: Vc = !1,
          theme: Ic = "light",
          placeholder: rB = "",
          basicSetup: Mc = !0
        } = cB, Pc = [];
        switch (Bc && Pc.unshift(sc.S.of([XB])), Mc && ("boolean" === typeof Mc ? Pc.unshift(jn()) : Pc.unshift(jn(Mc))), rB && Pc.unshift((0, sc.Z)(rB)), Ic) {
          case "light":
            Pc.push(mV);
            break;
          case "dark":
            Pc.push(fn);
            break;
          case "none":
            break;
          default:
            Pc.push(Ic)
        }
        return !1 === nc && Pc.push(sc.i.editable.of(!1)), Vc && Pc.push(uc.o.readOnly.of(!0)), [...Pc]
      }({
        theme: Tc,
        editable: pc,
        readOnly: hc,
        placeholder: zB,
        indentWithTab: aB,
        basicSetup: lc
      }), Wc = [Ec, Nc, ...oc];
      return Pc && "function" === typeof Pc && Wc.push(sc.i.updateListener.of(Pc)), Wc = Wc.concat(qB), (0, rB.useLayoutEffect)((() => {
        if (gB && !Qc) {
          var cB = {
              doc: Bc,
              selection: nc,
              extensions: Wc
            },
            Vc = Lc ? uc.o.fromJSON(Lc.json, cB, Lc.fields) : uc.o.create(cB);
          if (Cc(Vc), !bB) {
            var Ic = new sc.i({
              state: Vc,
              parent: gB,
              root: Yc
            });
            Zc(Ic), Mc && Mc(Ic, Vc)
          }
        }
        return () => {
          bB && (Cc(void 0), Zc(void 0))
        }
      }), [gB, Qc]), (0, rB.useEffect)((() => {
        cB.container && Uc(cB.container)
      }), [cB.container]), (0, rB.useEffect)((() => () => {
        bB && (bB.destroy(), Zc(void 0)), vB.current && (vB.current.cancel(), vB.current = null)
      }), [bB]), (0, rB.useEffect)((() => {
        Oc && bB && bB.focus()
      }), [Oc, bB]), (0, rB.useEffect)((() => {
        bB && bB.dispatch({
          effects: uc.F.reconfigure.of(Wc)
        })
      }), [Tc, qB, fc, mB, ec, tB, Sc, yB, zB, pc, hc, aB, lc, Vc, Pc]), (0, rB.useEffect)((() => {
        if (void 0 !== Bc) {
          var cB = bB ? bB.state.doc.toString() : "";
          if (bB && Bc !== cB) {
            var nc = () => {
              bB && Bc !== bB.state.doc.toString() && bB.dispatch({
                changes: {
                  from: 0,
                  to: bB.state.doc.toString().length,
                  insert: Bc || ""
                },
                annotations: [yV.of(!0)]
              })
            };
            vB.current && !vB.current.isDone ? Dc.current = nc : nc()
          }
        }
      }), [Bc, bB]), {
        state: Qc,
        setState: Cc,
        view: bB,
        setView: Zc,
        container: gB,
        setContainer: Uc
      }
    }
    var hn = nc(957),
      aV = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      lnc = (0, rB.forwardRef)(((cB, Bc) => {
        var {
          className: nc,
          value: uc = "",
          selection: sc,
          extensions: Mc = [],
          onChange: Pc,
          onStatistics: qB,
          onCreateEditor: Oc,
          onUpdate: Tc,
          autoFocus: fc,
          theme: mB = "light",
          height: ec,
          minHeight: tB,
          maxHeight: Sc,
          width: yB,
          minWidth: zB,
          maxWidth: pc,
          basicSetup: hc,
          placeholder: aB,
          indentWithTab: lc,
          editable: Yc,
          readOnly: Lc,
          root: gB,
          initialState: Uc
        } = cB, bB = (0, Ic.b)(cB, aV), Zc = (0, rB.useRef)(null), {
          state: Qc,
          view: Cc,
          container: vB,
          setContainer: Dc
        } = pn({
          root: gB,
          value: uc,
          autoFocus: fc,
          theme: mB,
          height: ec,
          minHeight: tB,
          maxHeight: Sc,
          width: yB,
          minWidth: zB,
          maxWidth: pc,
          basicSetup: hc,
          placeholder: aB,
          indentWithTab: lc,
          editable: Yc,
          readOnly: Lc,
          selection: sc,
          onChange: Pc,
          onStatistics: qB,
          onCreateEditor: Oc,
          onUpdate: Tc,
          extensions: Mc,
          initialState: Uc
        });
        (0, rB.useImperativeHandle)(Bc, (() => ({
          editor: Zc.current,
          state: Qc,
          view: Cc
        })), [Zc, vB, Qc, Cc]);
        var Nc = (0, rB.useCallback)((cB => {
          Zc.current = cB, Dc(cB)
        }), [Dc]);
        if ("string" !== typeof uc) throw new Error("value must be typeof string but got " + typeof uc);
        var Ec = "string" === typeof mB ? "cm-theme-" + mB : "cm-theme";
        return (0, hn.jsx)("div", (0, Vc.d)({
          ref: Nc,
          className: Ec + (nc ? " " + nc : "")
        }, bB))
      }));
    lnc.displayName = "CodeMirror";
    const Yn = lnc
  },
  39295: (cB, Bc, nc) => {
    function Vc() {
      var cB = arguments[0];
      "string" == typeof cB && (cB = document.createElement(cB));
      var Bc = 1,
        nc = arguments[1];
      if (nc && "object" == typeof nc && null == nc.nodeType && !Array.isArray(nc)) {
        for (var Vc in nc)
          if (Object.prototype.hasOwnProperty.call(nc, Vc)) {
            var rB = nc[Vc];
            "string" == typeof rB ? cB.setAttribute(Vc, rB) : null != rB && (cB[Vc] = rB)
          } Bc++
      }
      for (; Bc < arguments.length; Bc++) Ic(cB, arguments[Bc]);
      return cB
    }

    function Ic(cB, Bc) {
      if ("string" == typeof Bc) cB.appendChild(document.createTextNode(Bc));
      else if (null == Bc);
      else if (null != Bc.nodeType) cB.appendChild(Bc);
      else {
        if (!Array.isArray(Bc)) throw new RangeError("Unsupported child node: " + Bc);
        for (var nc = 0; nc < Bc.length; nc++) Ic(cB, Bc[nc])
      }
    }
    nc.d(Bc, {
      b: () => Vc
    })
  },
  39292: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    const Vc = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Ic = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      rB = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class uc {
      constructor(cB, Bc) {
        this.rules = [];
        let {
          finish: nc
        } = Bc || {};

        function Vc(cB) {
          return /^@/.test(cB) ? [cB] : cB.split(/,\s*/)
        }

        function Ic(cB, Bc, rB, uc) {
          let sc = [],
            Mc = /^@(\w+)\b/.exec(cB[0]),
            Pc = Mc && "keyframes" == Mc[1];
          if (Mc && null == Bc) return rB.push(cB[0] + ";");
          for (let nc in Bc) {
            let uc = Bc[nc];
            if (/&/.test(nc)) Ic(nc.split(/,\s*/).map((Bc => cB.map((cB => Bc.replace(/&/, cB))))).reduce(((cB, Bc) => cB.concat(Bc))), uc, rB);
            else if (uc && "object" == typeof uc) {
              if (!Mc) throw new RangeError("The value of a property (" + nc + ") should be a primitive value.");
              Ic(Vc(nc), uc, sc, Pc)
            } else null != uc && sc.push(nc.replace(/_.*/, "").replace(/[A-Z]/g, (cB => "-" + cB.toLowerCase())) + ": " + uc + ";")
          }(sc.length || Pc) && rB.push((!nc || Mc || uc ? cB : cB.map(nc)).join(", ") + " {" + sc.join(" ") + "}")
        }
        for (let rB in cB) Ic(Vc(rB), cB[rB], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let cB = rB[Vc] || 1;
        return rB[Vc] = cB + 1, "\u037c" + cB.toString(36)
      }
      static mount(cB, Bc, nc) {
        let Vc = cB[Ic],
          rB = nc && nc.nonce;
        Vc ? rB && Vc.setNonce(rB) : Vc = new Mc(cB, rB), Vc.mount(Array.isArray(Bc) ? Bc : [Bc], cB)
      }
    }
    let sc = new Map;
    class Mc {
      constructor(cB, Bc) {
        let nc = cB.ownerDocument || cB,
          Vc = nc.defaultView;
        if (!cB.head && cB.adoptedStyleSheets && Vc.CSSStyleSheet) {
          let Bc = sc.get(nc);
          if (Bc) return cB[Ic] = Bc;
          this.sheet = new Vc.CSSStyleSheet, sc.set(nc, this)
        } else this.styleTag = nc.createElement("style"), Bc && this.styleTag.setAttribute("nonce", Bc);
        this.modules = [], cB[Ic] = this
      }
      mount(cB, Bc) {
        let nc = this.sheet,
          Vc = 0,
          Ic = 0;
        for (let rB = 0; rB < cB.length; rB++) {
          let Bc = cB[rB],
            uc = this.modules.indexOf(Bc);
          if (uc < Ic && uc > -1 && (this.modules.splice(uc, 1), Ic--, uc = -1), -1 == uc) {
            if (this.modules.splice(Ic++, 0, Bc), nc)
              for (let cB = 0; cB < Bc.rules.length; cB++) nc.insertRule(Bc.rules[cB], Vc++)
          } else {
            for (; Ic < uc;) Vc += this.modules[Ic++].rules.length;
            Vc += Bc.rules.length, Ic++
          }
        }
        if (nc) Bc.adoptedStyleSheets.indexOf(this.sheet) < 0 && (Bc.adoptedStyleSheets = [this.sheet, ...Bc.adoptedStyleSheets]);
        else {
          let cB = "";
          for (let Bc = 0; Bc < this.modules.length; Bc++) cB += this.modules[Bc].getRules() + "\n";
          this.styleTag.textContent = cB;
          let nc = Bc.head || Bc;
          this.styleTag.parentNode != nc && nc.insertBefore(this.styleTag, nc.firstChild)
        }
      }
      setNonce(cB) {
        this.styleTag && this.styleTag.getAttribute("nonce") != cB && this.styleTag.setAttribute("nonce", cB)
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);