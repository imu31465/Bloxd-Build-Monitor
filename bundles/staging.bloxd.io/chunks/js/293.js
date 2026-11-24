export const id = 293;
export const ids = [293];
export const modules = {
  41350: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => XT,
      f: () => zT,
      i: () => IT,
      j: () => Dm,
      m: () => PT,
      p: () => im,
      t: () => oT
    });
    var hm = fm(41356),
      Am = fm(41361),
      am = fm(41376);
    class xm {
      constructor(mm, Tm, fm, hm) {
        this.state = mm, this.pos = Tm, this.explicit = fm, this.view = hm, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(mm) {
        let Tm = (0, am.ob)(this.state).resolveInner(this.pos, -1);
        for (; Tm && mm.indexOf(Tm.name) < 0;) Tm = Tm.parent;
        return Tm ? {
          from: Tm.from,
          to: this.pos,
          text: this.state.sliceDoc(Tm.from, this.pos),
          type: Tm.type
        } : null
      }
      matchBefore(mm) {
        let Tm = this.state.doc.lineAt(this.pos),
          fm = Math.max(Tm.from, this.pos - 250),
          hm = Tm.text.slice(fm - Tm.from, this.pos - Tm.from),
          Am = hm.search(Em(mm, !1));
        return Am < 0 ? null : {
          from: fm + Am,
          to: this.pos,
          text: hm.slice(Am)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(mm, Tm, fm) {
        "abort" == mm && this.abortListeners && (this.abortListeners.push(Tm), fm && fm.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function wm(mm) {
      let Tm = Object.keys(mm).join(""),
        fm = /\w/.test(Tm);
      return fm && (Tm = Tm.replace(/\w/g, "")), `[${fm?"\\w":""}${Tm.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function Dm(mm) {
      let Tm = mm.map((mm => "string" == typeof mm ? {
          label: mm
        } : mm)),
        [fm, hm] = Tm.every((mm => /^\w+$/.test(mm.label))) ? [/\w*$/, /\w+$/] : function(mm) {
          let Tm = Object.create(null),
            fm = Object.create(null);
          for (let {
              label: Am
            }
            of mm) {
            Tm[Am[0]] = !0;
            for (let mm = 1; mm < Am.length; mm++) fm[Am[mm]] = !0
          }
          let hm = wm(Tm) + wm(fm) + "*$";
          return [new RegExp("^" + hm), new RegExp(hm)]
        }(Tm);
      return mm => {
        let Am = mm.matchBefore(hm);
        return Am || mm.explicit ? {
          from: Am ? Am.from : mm.pos,
          options: Tm,
          validFor: fm
        } : null
      }
    }

    function im(mm, Tm) {
      return fm => {
        for (let Tm = (0, am.ob)(fm.state).resolveInner(fm.pos, -1); Tm; Tm = Tm.parent) {
          if (mm.indexOf(Tm.name) > -1) return null;
          if (Tm.type.isTop) break
        }
        return Tm(fm)
      }
    }
    class Rm {
      constructor(mm, Tm, fm, hm) {
        this.completion = mm, this.source = Tm, this.match = fm, this.score = hm
      }
    }

    function pm(mm) {
      return mm.selection.main.from
    }

    function Em(mm, Tm) {
      var fm;
      let {
        source: hm
      } = mm, Am = Tm && "^" != hm[0], am = "$" != hm[hm.length - 1];
      return Am || am ? new RegExp(`${Am?"^":""}(?:${hm})${am?"$":""}`, null !== (fm = mm.flags) && void 0 !== fm ? fm : mm.ignoreCase ? "i" : "") : mm
    }
    const om = hm.e.define();

    function Om(mm, Tm, fm, Am) {
      let {
        main: am
      } = mm.selection, xm = fm - am.from, wm = Am - am.from;
      return {
        ...mm.changeByRange((Dm => {
          if (Dm != am && fm != Am && mm.sliceDoc(Dm.from + xm, Dm.from + wm) != mm.sliceDoc(fm, Am)) return {
            range: Dm
          };
          let im = mm.toText(Tm);
          return {
            changes: {
              from: Dm.from + xm,
              to: Am == am.from ? Dm.to : Dm.from + wm,
              insert: im
            },
            range: hm.o.cursor(Dm.from + xm + im.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Ym = new WeakMap;

    function qm(mm) {
      if (!Array.isArray(mm)) return mm;
      let Tm = Ym.get(mm);
      return Tm || Ym.set(mm, Tm = Dm(mm)), Tm
    }
    const jm = hm.J.define(),
      Vm = hm.J.define();
    class Im {
      constructor(mm) {
        this.pattern = mm, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let Tm = 0; Tm < mm.length;) {
          let fm = (0, hm.R)(mm, Tm),
            Am = (0, hm.U)(fm);
          this.chars.push(fm);
          let am = mm.slice(Tm, Tm + Am),
            xm = am.toUpperCase();
          this.folded.push((0, hm.R)(xm == am ? am.toLowerCase() : xm, 0)), Tm += Am
        }
        this.astral = mm.length != this.chars.length
      }
      ret(mm, Tm) {
        return this.score = mm, this.matched = Tm, this
      }
      match(mm) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (mm.length < this.pattern.length) return null;
        let {
          chars: Tm,
          folded: fm,
          any: Am,
          precise: am,
          byWord: xm
        } = this;
        if (1 == Tm.length) {
          let Am = (0, hm.R)(mm, 0),
            am = (0, hm.U)(Am),
            xm = am == mm.length ? 0 : -100;
          if (Am == Tm[0]);
          else {
            if (Am != fm[0]) return null;
            xm += -200
          }
          return this.ret(xm, [0, am])
        }
        let wm = mm.indexOf(this.pattern);
        if (0 == wm) return this.ret(mm.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let Dm = Tm.length,
          im = 0;
        if (wm < 0) {
          for (let am = 0, xm = Math.min(mm.length, 200); am < xm && im < Dm;) {
            let xm = (0, hm.R)(mm, am);
            xm != Tm[im] && xm != fm[im] || (Am[im++] = am), am += (0, hm.U)(xm)
          }
          if (im < Dm) return null
        }
        let Rm = 0,
          pm = 0,
          Em = !1,
          om = 0,
          Om = -1,
          Ym = -1,
          qm = /[a-z]/.test(mm),
          jm = !0;
        for (let Vm = 0, Im = Math.min(mm.length, 200), Km = 0; Vm < Im && pm < Dm;) {
          let Am = (0, hm.R)(mm, Vm);
          wm < 0 && (Rm < Dm && Am == Tm[Rm] && (am[Rm++] = Vm), om < Dm && (Am == Tm[om] || Am == fm[om] ? (0 == om && (Om = Vm), Ym = Vm + 1, om++) : om = 0));
          let im, Im = Am < 255 ? Am >= 48 && Am <= 57 || Am >= 97 && Am <= 122 ? 2 : Am >= 65 && Am <= 90 ? 1 : 0 : (im = (0, hm.gb)(Am)) != im.toLowerCase() ? 1 : im != im.toUpperCase() ? 2 : 0;
          (!Vm || 1 == Im && qm || 0 == Km && 0 != Im) && (Tm[pm] == Am || fm[pm] == Am && (Em = !0) ? xm[pm++] = Vm : xm.length && (jm = !1)), Km = Im, Vm += (0, hm.U)(Am)
        }
        return pm == Dm && 0 == xm[0] && jm ? this.result((Em ? -200 : 0) - 100, xm, mm) : om == Dm && 0 == Om ? this.ret(-200 - mm.length + (Ym == mm.length ? 0 : -100), [0, Ym]) : wm > -1 ? this.ret(-700 - mm.length, [wm, wm + this.pattern.length]) : om == Dm ? this.ret(-900 - mm.length, [Om, Ym]) : pm == Dm ? this.result((Em ? -200 : 0) - 100 - 700 + (jm ? 0 : -1100), xm, mm) : 2 == Tm.length ? null : this.result((Am[0] ? -700 : 0) - 200 - 1100, Am, mm)
      }
      result(mm, Tm, fm) {
        let Am = [],
          am = 0;
        for (let xm of Tm) {
          let mm = xm + (this.astral ? (0, hm.U)((0, hm.R)(fm, xm)) : 1);
          am && Am[am - 1] == xm ? Am[am - 1] = mm : (Am[am++] = xm, Am[am++] = mm)
        }
        return this.ret(mm - fm.length, Am)
      }
    }
    class Km {
      constructor(mm) {
        this.pattern = mm, this.matched = [], this.score = 0, this.folded = mm.toLowerCase()
      }
      match(mm) {
        if (mm.length < this.pattern.length) return null;
        let Tm = mm.slice(0, this.pattern.length),
          fm = Tm == this.pattern ? 0 : Tm.toLowerCase() == this.folded ? -200 : null;
        return null == fm ? null : (this.matched = [0, Tm.length], this.score = fm + (mm.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const Qm = hm.s.define({
      combine: mm => (0, hm.Y)(mm, {
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
        positionInfo: Jm,
        filterStrict: !1,
        compareCompletions: (mm, Tm) => (mm.sortText || mm.label).localeCompare(Tm.sortText || Tm.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (mm, Tm) => mm && Tm,
        closeOnBlur: (mm, Tm) => mm && Tm,
        icons: (mm, Tm) => mm && Tm,
        tooltipClass: (mm, Tm) => fm => nm(mm(fm), Tm(fm)),
        optionClass: (mm, Tm) => fm => nm(mm(fm), Tm(fm)),
        addToOptions: (mm, Tm) => mm.concat(Tm),
        filterStrict: (mm, Tm) => mm || Tm
      })
    });

    function nm(mm, Tm) {
      return mm ? Tm ? mm + " " + Tm : mm : Tm
    }

    function Jm(mm, Tm, fm, hm, am, xm) {
      let wm, Dm, im = mm.textDirection == Am.e.RTL,
        Rm = im,
        pm = !1,
        Em = "top",
        om = Tm.left - am.left,
        Om = am.right - Tm.right,
        Ym = hm.right - hm.left,
        qm = hm.bottom - hm.top;
      if (Rm && om < Math.min(Ym, Om) ? Rm = !1 : !Rm && Om < Math.min(Ym, om) && (Rm = !0), Ym <= (Rm ? om : Om)) wm = Math.max(am.top, Math.min(fm.top, am.bottom - qm)) - Tm.top, Dm = Math.min(400, Rm ? om : Om);
      else {
        pm = !0, Dm = Math.min(400, (im ? Tm.right : am.right - Tm.left) - 30);
        let mm = am.bottom - Tm.bottom;
        mm >= qm || mm > Tm.top ? wm = fm.bottom - Tm.top : (Em = "bottom", wm = Tm.bottom - fm.top)
      }
      return {
        style: `${Em}: ${wm/((Tm.bottom-Tm.top)/xm.offsetHeight)}px; max-width: ${Dm/((Tm.right-Tm.left)/xm.offsetWidth)}px`,
        class: "cm-completionInfo-" + (pm ? im ? "left-narrow" : "right-narrow" : Rm ? "left" : "right")
      }
    }
    const cm = hm.J.define();

    function zm(mm, Tm, fm) {
      if (mm <= fm) return {
        from: 0,
        to: mm
      };
      if (Tm < 0 && (Tm = 0), Tm <= mm >> 1) {
        let mm = Math.floor(Tm / fm);
        return {
          from: mm * fm,
          to: (mm + 1) * fm
        }
      }
      let hm = Math.floor((mm - Tm) / fm);
      return {
        from: mm - (hm + 1) * fm,
        to: mm - hm * fm
      }
    }
    class Zm {
      constructor(mm, Tm, fm) {
        this.view = mm, this.stateField = Tm, this.applyCompletion = fm, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: mm => this.placeInfo(mm),
          key: this
        }, this.space = null, this.currentClass = "";
        let hm = mm.state.field(Tm),
          {
            options: Am,
            selected: am
          } = hm.open,
          xm = mm.state.facet(Qm);
        this.optionContent = function(mm) {
          let Tm = mm.addToOptions.slice();
          return mm.icons && Tm.push({
            render(mm) {
              let Tm = document.createElement("div");
              return Tm.classList.add("cm-completionIcon"), mm.type && Tm.classList.add(...mm.type.split(/\s+/g).map((mm => "cm-completionIcon-" + mm))), Tm.setAttribute("aria-hidden", "true"), Tm
            },
            position: 20
          }), Tm.push({
            render(mm, Tm, fm, hm) {
              let Am = document.createElement("span");
              Am.className = "cm-completionLabel";
              let am = mm.displayLabel || mm.label,
                xm = 0;
              for (let wm = 0; wm < hm.length;) {
                let mm = hm[wm++],
                  Tm = hm[wm++];
                mm > xm && Am.appendChild(document.createTextNode(am.slice(xm, mm)));
                let fm = Am.appendChild(document.createElement("span"));
                fm.appendChild(document.createTextNode(am.slice(mm, Tm))), fm.className = "cm-completionMatchedText", xm = Tm
              }
              return xm < am.length && Am.appendChild(document.createTextNode(am.slice(xm))), Am
            },
            position: 50
          }, {
            render(mm) {
              if (!mm.detail) return null;
              let Tm = document.createElement("span");
              return Tm.className = "cm-completionDetail", Tm.textContent = mm.detail, Tm
            },
            position: 80
          }), Tm.sort(((mm, Tm) => mm.position - Tm.position)).map((mm => mm.render))
        }(xm), this.optionClass = xm.optionClass, this.tooltipClass = xm.tooltipClass, this.range = zm(Am.length, am, xm.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(mm.state), this.dom.addEventListener("mousedown", (fm => {
          let {
            options: hm
          } = mm.state.field(Tm).open;
          for (let Tm, Am = fm.target; Am && Am != this.dom; Am = Am.parentNode)
            if ("LI" == Am.nodeName && (Tm = /-(\d+)$/.exec(Am.id)) && +Tm[1] < hm.length) return this.applyCompletion(mm, hm[+Tm[1]]), void fm.preventDefault();
          if (fm.target == this.list) {
            let Tm = this.list.classList.contains("cm-completionListIncompleteTop") && fm.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && fm.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != Tm && (mm.dispatch({
              effects: cm.of(Tm)
            }), fm.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (Tm => {
          let fm = mm.state.field(this.stateField, !1);
          fm && fm.tooltip && mm.state.facet(Qm).closeOnBlur && Tm.relatedTarget != mm.contentDOM && mm.dispatch({
            effects: Vm.of(null)
          })
        })), this.showOptions(Am, hm.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(mm, Tm) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(mm, Tm, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(mm) {
        var Tm;
        let fm = mm.state.field(this.stateField),
          hm = mm.startState.field(this.stateField);
        if (this.updateTooltipClass(mm.state), fm != hm) {
          let {
            options: Am,
            selected: am,
            disabled: xm
          } = fm.open;
          hm.open && hm.open.options == Am || (this.range = zm(Am.length, am, mm.state.facet(Qm).maxRenderedOptions), this.showOptions(Am, fm.id)), this.updateSel(), xm != (null === (Tm = hm.open) || void 0 === Tm ? void 0 : Tm.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!xm)
        }
      }
      updateTooltipClass(mm) {
        let Tm = this.tooltipClass(mm);
        if (Tm != this.currentClass) {
          for (let mm of this.currentClass.split(" ")) mm && this.dom.classList.remove(mm);
          for (let mm of Tm.split(" ")) mm && this.dom.classList.add(mm);
          this.currentClass = Tm
        }
      }
      positioned(mm) {
        this.space = mm, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let mm = this.view.state.field(this.stateField),
          Tm = mm.open;
        (Tm.selected > -1 && Tm.selected < this.range.from || Tm.selected >= this.range.to) && (this.range = zm(Tm.options.length, Tm.selected, this.view.state.facet(Qm).maxRenderedOptions), this.showOptions(Tm.options, mm.id));
        let fm = this.updateSelectedOption(Tm.selected);
        if (fm) {
          this.destroyInfo();
          let {
            completion: hm
          } = Tm.options[Tm.selected], {
            info: am
          } = hm;
          if (!am) return;
          let xm = "string" === typeof am ? document.createTextNode(am) : am(hm);
          if (!xm) return;
          "then" in xm ? xm.then((Tm => {
            Tm && this.view.state.field(this.stateField, !1) == mm && this.addInfoPane(Tm, hm)
          })).catch((mm => (0, Am.S)(this.view.state, mm, "completion info"))) : (this.addInfoPane(xm, hm), fm.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(mm, Tm) {
        this.destroyInfo();
        let fm = this.info = document.createElement("div");
        if (fm.className = "cm-tooltip cm-completionInfo", fm.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != mm.nodeType) fm.appendChild(mm), this.infoDestroy = null;
        else {
          let {
            dom: Tm,
            destroy: hm
          } = mm;
          fm.appendChild(Tm), this.infoDestroy = hm || null
        }
        this.dom.appendChild(fm), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(mm) {
        let Tm = null;
        for (let fm = this.list.firstChild, hm = this.range.from; fm; fm = fm.nextSibling, hm++) "LI" == fm.nodeName && fm.id ? hm == mm ? fm.hasAttribute("aria-selected") || (fm.setAttribute("aria-selected", "true"), Tm = fm) : fm.hasAttribute("aria-selected") && (fm.removeAttribute("aria-selected"), fm.removeAttribute("aria-describedby")) : hm--;
        return Tm && function(mm, Tm) {
          let fm = mm.getBoundingClientRect(),
            hm = Tm.getBoundingClientRect(),
            Am = fm.height / mm.offsetHeight;
          hm.top < fm.top ? mm.scrollTop -= (fm.top - hm.top) / Am : hm.bottom > fm.bottom && (mm.scrollTop += (hm.bottom - fm.bottom) / Am)
        }(this.list, Tm), Tm
      }
      measureInfo() {
        let mm = this.dom.querySelector("[aria-selected]");
        if (!mm || !this.info) return null;
        let Tm = this.dom.getBoundingClientRect(),
          fm = this.info.getBoundingClientRect(),
          hm = mm.getBoundingClientRect(),
          Am = this.space;
        if (!Am) {
          let mm = this.dom.ownerDocument.documentElement;
          Am = {
            left: 0,
            top: 0,
            right: mm.clientWidth,
            bottom: mm.clientHeight
          }
        }
        return hm.top > Math.min(Am.bottom, Tm.bottom) - 10 || hm.bottom < Math.max(Am.top, Tm.top) + 10 ? null : this.view.state.facet(Qm).positionInfo(this.view, Tm, hm, fm, Am, this.dom)
      }
      placeInfo(mm) {
        this.info && (mm ? (mm.style && (this.info.style.cssText = mm.style), this.info.className = "cm-tooltip cm-completionInfo " + (mm.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(mm, Tm, fm) {
        const hm = document.createElement("ul");
        hm.id = Tm, hm.setAttribute("role", "listbox"), hm.setAttribute("aria-expanded", "true"), hm.setAttribute("aria-label", this.view.state.phrase("Completions")), hm.addEventListener("mousedown", (mm => {
          mm.target == hm && mm.preventDefault()
        }));
        let Am = null;
        for (let am = fm.from; am < fm.to; am++) {
          let {
            completion: xm,
            match: wm
          } = mm[am], {
            section: Dm
          } = xm;
          if (Dm) {
            let mm = "string" == typeof Dm ? Dm : Dm.name;
            if (mm != Am && (am > fm.from || 0 == fm.from))
              if (Am = mm, "string" != typeof Dm && Dm.header) hm.appendChild(Dm.header(Dm));
              else {
                hm.appendChild(document.createElement("completion-section")).textContent = mm
              }
          }
          const im = hm.appendChild(document.createElement("li"));
          im.id = Tm + "-" + am, im.setAttribute("role", "option");
          let Rm = this.optionClass(xm);
          Rm && (im.className = Rm);
          for (let mm of this.optionContent) {
            let Tm = mm(xm, this.view.state, this.view, wm);
            Tm && im.appendChild(Tm)
          }
        }
        return fm.from && hm.classList.add("cm-completionListIncompleteTop"), fm.to < mm.length && hm.classList.add("cm-completionListIncompleteBottom"), hm
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function km(mm, Tm) {
      return fm => new Zm(fm, mm, Tm)
    }

    function bm(mm) {
      return 100 * (mm.boost || 0) + (mm.apply ? 10 : 0) + (mm.info ? 5 : 0) + (mm.type ? 1 : 0)
    }
    class Sm {
      constructor(mm, Tm, fm, hm, Am, am) {
        this.options = mm, this.attrs = Tm, this.tooltip = fm, this.timestamp = hm, this.selected = Am, this.disabled = am
      }
      setSelected(mm, Tm) {
        return mm == this.selected || mm >= this.options.length ? this : new Sm(this.options, Xm(Tm, mm), this.tooltip, this.timestamp, mm, this.disabled)
      }
      static build(mm, Tm, fm, hm, Am, am) {
        if (hm && !am && mm.some((mm => mm.isPending))) return hm.setDisabled();
        let xm = function(mm, Tm) {
          let fm = [],
            hm = null,
            Am = null,
            am = mm => {
              fm.push(mm);
              let {
                section: Tm
              } = mm.completion;
              if (Tm) {
                hm || (hm = []);
                let mm = "string" == typeof Tm ? Tm : Tm.name;
                hm.some((Tm => Tm.name == mm)) || hm.push("string" == typeof Tm ? {
                  name: mm
                } : Tm)
              }
            },
            xm = Tm.facet(Qm);
          for (let pm of mm)
            if (pm.hasResult()) {
              let mm = pm.result.getMatch;
              if (!1 === pm.result.filter)
                for (let Tm of pm.result.options) am(new Rm(Tm, pm.source, mm ? mm(Tm) : [], 1e9 - fm.length));
              else {
                let fm, hm = Tm.sliceDoc(pm.from, pm.to),
                  wm = xm.filterStrict ? new Km(hm) : new Im(hm);
                for (let Tm of pm.result.options)
                  if (fm = wm.match(Tm.label)) {
                    let hm = Tm.displayLabel ? mm ? mm(Tm, fm.matched) : [] : fm.matched,
                      xm = fm.score + (Tm.boost || 0);
                    if (am(new Rm(Tm, pm.source, hm, xm)), "object" == typeof Tm.section && "dynamic" === Tm.section.rank) {
                      let {
                        name: mm
                      } = Tm.section;
                      Am || (Am = Object.create(null)), Am[mm] = Math.max(xm, Am[mm] || -1e9)
                    }
                  }
              }
            } if (hm) {
            let mm = Object.create(null),
              Tm = 0,
              am = (mm, Tm) => ("dynamic" === mm.rank && "dynamic" === Tm.rank ? Am[Tm.name] - Am[mm.name] : 0) || ("number" == typeof mm.rank ? mm.rank : 1e9) - ("number" == typeof Tm.rank ? Tm.rank : 1e9) || (mm.name < Tm.name ? -1 : 1);
            for (let fm of hm.sort(am)) Tm -= 1e5, mm[fm.name] = Tm;
            for (let hm of fm) {
              let {
                section: Tm
              } = hm.completion;
              Tm && (hm.score += mm["string" == typeof Tm ? Tm : Tm.name])
            }
          }
          let wm = [],
            Dm = null,
            im = xm.compareCompletions;
          for (let Rm of fm.sort(((mm, Tm) => Tm.score - mm.score || im(mm.completion, Tm.completion)))) {
            let mm = Rm.completion;
            !Dm || Dm.label != mm.label || Dm.detail != mm.detail || null != Dm.type && null != mm.type && Dm.type != mm.type || Dm.apply != mm.apply || Dm.boost != mm.boost ? wm.push(Rm) : bm(Rm.completion) > bm(Dm) && (wm[wm.length - 1] = Rm), Dm = Rm.completion
          }
          return wm
        }(mm, Tm);
        if (!xm.length) return hm && mm.some((mm => mm.isPending)) ? hm.setDisabled() : null;
        let wm = Tm.facet(Qm).selectOnOpen ? 0 : -1;
        if (hm && hm.selected != wm && -1 != hm.selected) {
          let mm = hm.options[hm.selected].completion;
          for (let Tm = 0; Tm < xm.length; Tm++)
            if (xm[Tm].completion == mm) {
              wm = Tm;
              break
            }
        }
        return new Sm(xm, Xm(fm, wm), {
          pos: mm.reduce(((mm, Tm) => Tm.hasResult() ? Math.min(mm, Tm.from) : mm), 1e8),
          create: Mm,
          above: Am.aboveCursor
        }, hm ? hm.timestamp : Date.now(), wm, !1)
      }
      map(mm) {
        return new Sm(this.options, this.attrs, {
          ...this.tooltip,
          pos: mm.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new Sm(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class em {
      constructor(mm, Tm, fm) {
        this.active = mm, this.id = Tm, this.open = fm
      }
      static start() {
        return new em(Pm, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(mm) {
        let {
          state: Tm
        } = mm, fm = Tm.facet(Qm), hm = (fm.override || Tm.languageDataAt("autocomplete", pm(Tm)).map(qm)).map((Tm => (this.active.find((mm => mm.source == Tm)) || new ym(Tm, this.active.some((mm => 0 != mm.state)) ? 1 : 0)).update(mm, fm)));
        hm.length == this.active.length && hm.every(((mm, Tm) => mm == this.active[Tm])) && (hm = this.active);
        let Am = this.open,
          am = mm.effects.some((mm => mm.is(rm)));
        Am && mm.docChanged && (Am = Am.map(mm.changes)), mm.selection || hm.some((Tm => Tm.hasResult() && mm.changes.touchesRange(Tm.from, Tm.to))) || ! function(mm, Tm) {
          if (mm == Tm) return !0;
          for (let fm = 0, hm = 0;;) {
            for (; fm < mm.length && !mm[fm].hasResult();) fm++;
            for (; hm < Tm.length && !Tm[hm].hasResult();) hm++;
            let Am = fm == mm.length,
              am = hm == Tm.length;
            if (Am || am) return Am == am;
            if (mm[fm++].result != Tm[hm++].result) return !1
          }
        }(hm, this.active) || am ? Am = Sm.build(hm, Tm, this.id, Am, fm, am) : Am && Am.disabled && !hm.some((mm => mm.isPending)) && (Am = null), !Am && hm.every((mm => !mm.isPending)) && hm.some((mm => mm.hasResult())) && (hm = hm.map((mm => mm.hasResult() ? new ym(mm.source, 0) : mm)));
        for (let xm of mm.effects) xm.is(cm) && (Am = Am && Am.setSelected(xm.value, this.id));
        return hm == this.active && Am == this.open ? this : new em(hm, this.id, Am)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Nm : Gm
      }
    }
    const Nm = {
        "aria-autocomplete": "list"
      },
      Gm = {};

    function Xm(mm, Tm) {
      let fm = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": mm
      };
      return Tm > -1 && (fm["aria-activedescendant"] = mm + "-" + Tm), fm
    }
    const Pm = [];

    function Hm(mm, Tm) {
      if (mm.isUserEvent("input.complete")) {
        let fm = mm.annotation(om);
        if (fm && Tm.activateOnCompletion(fm)) return 12
      }
      let fm = mm.isUserEvent("input.type");
      return fm && Tm.activateOnTyping ? 5 : fm ? 1 : mm.isUserEvent("delete.backward") ? 2 : mm.selection ? 8 : mm.docChanged ? 16 : 0
    }
    class ym {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = mm, this.state = Tm, this.explicit = fm
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(mm, Tm) {
        let fm = Hm(mm, Tm),
          hm = this;
        (8 & fm || 16 & fm && this.touches(mm)) && (hm = new ym(hm.source, 0)), 4 & fm && 0 == hm.state && (hm = new ym(this.source, 1)), hm = hm.updateFor(mm, fm);
        for (let Am of mm.effects)
          if (Am.is(jm)) hm = new ym(hm.source, 1, Am.value);
          else if (Am.is(Vm)) hm = new ym(hm.source, 0);
        else if (Am.is(rm))
          for (let mm of Am.value) mm.source == hm.source && (hm = mm);
        return hm
      }
      updateFor(mm, Tm) {
        return this.map(mm.changes)
      }
      map(mm) {
        return this
      }
      touches(mm) {
        return mm.changes.touchesRange(pm(mm.state))
      }
    }
    class Cm extends ym {
      constructor(mm, Tm, fm, hm, Am, am) {
        super(mm, 3, Tm), this.limit = fm, this.result = hm, this.from = Am, this.to = am
      }
      hasResult() {
        return !0
      }
      updateFor(mm, Tm) {
        var fm;
        if (!(3 & Tm)) return this.map(mm.changes);
        let hm = this.result;
        hm.map && !mm.changes.empty && (hm = hm.map(hm, mm.changes));
        let Am = mm.changes.mapPos(this.from),
          am = mm.changes.mapPos(this.to, 1),
          wm = pm(mm.state);
        if (wm > am || !hm || 2 & Tm && (pm(mm.startState) == this.from || wm < this.limit)) return new ym(this.source, 4 & Tm ? 1 : 0);
        let Dm = mm.changes.mapPos(this.limit);
        return function(mm, Tm, fm, hm) {
          if (!mm) return !1;
          let Am = Tm.sliceDoc(fm, hm);
          return "function" == typeof mm ? mm(Am, fm, hm, Tm) : Em(mm, !0).test(Am)
        }(hm.validFor, mm.state, Am, am) ? new Cm(this.source, this.explicit, Dm, hm, Am, am) : hm.update && (hm = hm.update(hm, Am, am, new xm(mm.state, wm, !1))) ? new Cm(this.source, this.explicit, Dm, hm, hm.from, null !== (fm = hm.to) && void 0 !== fm ? fm : pm(mm.state)) : new ym(this.source, 1, this.explicit)
      }
      map(mm) {
        if (mm.empty) return this;
        return (this.result.map ? this.result.map(this.result, mm) : this.result) ? new Cm(this.source, this.explicit, mm.mapPos(this.limit), this.result, mm.mapPos(this.from), mm.mapPos(this.to, 1)) : new ym(this.source, 0)
      }
      touches(mm) {
        return mm.changes.touchesRange(this.from, this.to)
      }
    }
    const rm = hm.J.define({
        map: (mm, Tm) => mm.map((mm => mm.map(Tm)))
      }),
      sm = hm.M.define({
        create: () => em.start(),
        update: (mm, Tm) => mm.update(Tm),
        provide: mm => [Am.eb.from(mm, (mm => mm.tooltip)), Am.f.contentAttributes.from(mm, (mm => mm.attrs))]
      });

    function lm(mm, Tm) {
      const fm = Tm.completion.apply || Tm.completion.label;
      let hm = mm.state.field(sm).active.find((mm => mm.source == Tm.source));
      return hm instanceof Cm && ("string" == typeof fm ? mm.dispatch({
        ...Om(mm.state, fm, hm.from, hm.to),
        annotations: om.of(Tm.completion)
      }) : fm(mm, Tm.completion, hm.from, hm.to), !0)
    }
    const Mm = km(sm, lm);

    function um(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return fm => {
        let hm = fm.state.field(sm, !1);
        if (!hm || !hm.open || hm.open.disabled || Date.now() - hm.open.timestamp < fm.state.facet(Qm).interactionDelay) return !1;
        let am, xm = 1;
        "page" == Tm && (am = (0, Am.v)(fm, hm.open.tooltip)) && (xm = Math.max(2, Math.floor(am.dom.offsetHeight / am.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: wm
        } = hm.open.options, Dm = hm.open.selected > -1 ? hm.open.selected + xm * (mm ? 1 : -1) : mm ? 0 : wm - 1;
        return Dm < 0 ? Dm = "page" == Tm ? 0 : wm - 1 : Dm >= wm && (Dm = "page" == Tm ? wm - 1 : 0), fm.dispatch({
          effects: cm.of(Dm)
        }), !0
      }
    }
    const Bm = mm => !!mm.state.field(sm, !1) && (mm.dispatch({
      effects: jm.of(!0)
    }), !0);
    class Lm {
      constructor(mm, Tm) {
        this.active = mm, this.context = Tm, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const tm = Am.h.fromClass(class {
        constructor(mm) {
          this.view = mm, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let Tm of mm.state.field(sm).active) Tm.isPending && this.startQuery(Tm)
        }
        update(mm) {
          let Tm = mm.state.field(sm),
            fm = mm.state.facet(Qm);
          if (!mm.selectionSet && !mm.docChanged && mm.startState.field(sm) == Tm) return;
          let hm = mm.transactions.some((mm => {
            let Tm = Hm(mm, fm);
            return 8 & Tm || (mm.selection || mm.docChanged) && !(3 & Tm)
          }));
          for (let wm = 0; wm < this.running.length; wm++) {
            let Tm = this.running[wm];
            if (hm || Tm.context.abortOnDocChange && mm.docChanged || Tm.updates.length + mm.transactions.length > 50 && Date.now() - Tm.time > 1e3) {
              for (let mm of Tm.context.abortListeners) try {
                mm()
              } catch (xm) {
                (0, Am.S)(this.view.state, xm)
              }
              Tm.context.abortListeners = null, this.running.splice(wm--, 1)
            } else Tm.updates.push(...mm.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), mm.transactions.some((mm => mm.effects.some((mm => mm.is(jm))))) && (this.pendingStart = !0);
          let am = this.pendingStart ? 50 : fm.activateOnTypingDelay;
          if (this.debounceUpdate = Tm.active.some((mm => mm.isPending && !this.running.some((Tm => Tm.active.source == mm.source)))) ? setTimeout((() => this.startUpdate()), am) : -1, 0 != this.composing)
            for (let Am of mm.transactions) Am.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && Am.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: mm
          } = this.view, Tm = mm.field(sm);
          for (let fm of Tm.active) fm.isPending && !this.running.some((mm => mm.active.source == fm.source)) && this.startQuery(fm);
          this.running.length && Tm.open && Tm.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Qm).updateSyncTime))
        }
        startQuery(mm) {
          let {
            state: Tm
          } = this.view, fm = pm(Tm), hm = new xm(Tm, fm, mm.explicit, this.view), am = new Lm(mm, hm);
          this.running.push(am), Promise.resolve(mm.source(hm)).then((mm => {
            am.context.aborted || (am.done = mm || null, this.scheduleAccept())
          }), (mm => {
            this.view.dispatch({
              effects: Vm.of(null)
            }), (0, Am.S)(this.view.state, mm)
          }))
        }
        scheduleAccept() {
          this.running.every((mm => void 0 !== mm.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Qm).updateSyncTime))
        }
        accept() {
          var mm;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let Tm = [],
            fm = this.view.state.facet(Qm),
            hm = this.view.state.field(sm);
          for (let Am = 0; Am < this.running.length; Am++) {
            let am = this.running[Am];
            if (void 0 === am.done) continue;
            if (this.running.splice(Am--, 1), am.done) {
              let hm = pm(am.updates.length ? am.updates[0].startState : this.view.state),
                Am = Math.min(hm, am.done.from + (am.active.explicit ? 0 : 1)),
                xm = new Cm(am.active.source, am.active.explicit, Am, am.done, am.done.from, null !== (mm = am.done.to) && void 0 !== mm ? mm : hm);
              for (let mm of am.updates) xm = xm.update(mm, fm);
              if (xm.hasResult()) {
                Tm.push(xm);
                continue
              }
            }
            let xm = hm.active.find((mm => mm.source == am.active.source));
            if (xm && xm.isPending)
              if (null == am.done) {
                let mm = new ym(am.active.source, 0);
                for (let Tm of am.updates) mm = mm.update(Tm, fm);
                mm.isPending || Tm.push(mm)
              } else this.startQuery(xm)
          }(Tm.length || hm.open && hm.open.disabled) && this.view.dispatch({
            effects: rm.of(Tm)
          })
        }
      }, {
        eventHandlers: {
          blur(mm) {
            let Tm = this.view.state.field(sm, !1);
            if (Tm && Tm.tooltip && this.view.state.facet(Qm).closeOnBlur) {
              let fm = Tm.open && (0, Am.v)(this.view, Tm.open.tooltip);
              fm && fm.dom.contains(mm.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: Vm.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: jm.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      Um = "object" == typeof navigator && /Win/.test(navigator.platform),
      dm = hm.x.highest(Am.f.domEventHandlers({
        keydown(mm, Tm) {
          let fm = Tm.state.field(sm, !1);
          if (!fm || !fm.open || fm.open.disabled || fm.open.selected < 0 || mm.key.length > 1 || mm.ctrlKey && (!Um || !mm.altKey) || mm.metaKey) return !1;
          let hm = fm.open.options[fm.open.selected],
            Am = fm.active.find((mm => mm.source == hm.source)),
            am = hm.completion.commitCharacters || Am.result.commitCharacters;
          return am && am.indexOf(mm.key) > -1 && lm(Tm, hm), !1
        }
      })),
      gm = Am.f.baseTheme({
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
    class Wm {
      constructor(mm, Tm, fm, hm) {
        this.field = mm, this.line = Tm, this.from = fm, this.to = hm
      }
    }
    class Fm {
      constructor(mm, Tm, fm) {
        this.field = mm, this.from = Tm, this.to = fm
      }
      map(mm) {
        let Tm = mm.mapPos(this.from, -1, hm.u.TrackDel),
          fm = mm.mapPos(this.to, 1, hm.u.TrackDel);
        return null == Tm || null == fm ? null : new Fm(this.field, Tm, fm)
      }
    }
    class mT {
      constructor(mm, Tm) {
        this.lines = mm, this.fieldPositions = Tm
      }
      instantiate(mm, Tm) {
        let fm = [],
          hm = [Tm],
          Am = mm.doc.lineAt(Tm),
          xm = /^\s*/.exec(Am.text)[0];
        for (let Dm of this.lines) {
          if (fm.length) {
            let fm = xm,
              Am = /^\t*/.exec(Dm)[0].length;
            for (let Tm = 0; Tm < Am; Tm++) fm += mm.facet(am.cb);
            hm.push(Tm + fm.length - Am), Dm = fm + Dm.slice(Am)
          }
          fm.push(Dm), Tm += Dm.length + 1
        }
        let wm = this.fieldPositions.map((mm => new Fm(mm.field, hm[mm.line] + mm.from, hm[mm.line] + mm.to)));
        return {
          text: fm,
          mo: wm
        }
      }
      static parse(mm) {
        let Tm, fm = [],
          hm = [],
          Am = [];
        for (let am of mm.split(/\r\n?|\n/)) {
          for (; Tm = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(am);) {
            let mm = Tm[1] ? +Tm[1] : null,
              xm = Tm[2] || Tm[3] || "",
              wm = -1,
              Dm = xm.replace(/\\[{}]/g, (mm => mm[1]));
            for (let Tm = 0; Tm < fm.length; Tm++)(null != mm ? fm[Tm].seq == mm : Dm && fm[Tm].name == Dm) && (wm = Tm);
            if (wm < 0) {
              let Tm = 0;
              for (; Tm < fm.length && (null == mm || null != fm[Tm].seq && fm[Tm].seq < mm);) Tm++;
              fm.splice(Tm, 0, {
                seq: mm,
                name: Dm
              }), wm = Tm;
              for (let mm of Am) mm.field >= wm && mm.field++
            }
            for (let fm of Am)
              if (fm.line == hm.length && fm.from > Tm.index) {
                let mm = Tm[2] ? 3 + (Tm[1] || "").length : 2;
                fm.from -= mm, fm.to -= mm
              } Am.push(new Wm(wm, hm.length, Tm.index, Tm.index + Dm.length)), am = am.slice(0, Tm.index) + xm + am.slice(Tm.index + Tm[0].length)
          }
          am = am.replace(/\\([{}])/g, ((mm, Tm, fm) => {
            for (let am of Am) am.line == hm.length && am.from > fm && (am.from--, am.to--);
            return Tm
          })), hm.push(am)
        }
        return new mT(hm, Am)
      }
    }
    let TT = Am.c.widget({
        widget: new class extends Am.k {
          toDOM() {
            let mm = document.createElement("span");
            return mm.className = "cm-snippetFieldPosition", mm
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      fT = Am.c.mark({
        class: "cm-snippetField"
      });
    class hT {
      constructor(mm, Tm) {
        this.mo = mm, this.active = Tm, this.deco = Am.c.set(mm.map((mm => (mm.from == mm.to ? TT : fT).range(mm.from, mm.to))), !0)
      }
      map(mm) {
        let Tm = [];
        for (let fm of this.mo) {
          let hm = fm.map(mm);
          if (!hm) return null;
          Tm.push(hm)
        }
        return new hT(Tm, this.active)
      }
      selectionInsideField(mm) {
        return mm.mo.every((mm => this.mo.some((Tm => Tm.field == this.active && Tm.from <= mm.from && Tm.to >= mm.to))))
      }
    }
    const AT = hm.J.define({
        map: (mm, Tm) => mm && mm.map(Tm)
      }),
      aT = hm.J.define(),
      xT = hm.M.define({
        create: () => null,
        update(mm, Tm) {
          for (let fm of Tm.effects) {
            if (fm.is(AT)) return fm.value;
            if (fm.is(aT) && mm) return new hT(mm.mo, fm.value)
          }
          return mm && Tm.docChanged && (mm = mm.map(Tm.changes)), mm && Tm.selection && !mm.selectionInsideField(Tm.selection) && (mm = null), mm
        },
        provide: mm => Am.f.Ym.from(mm, (mm => mm ? mm.deco : Am.c.none))
      });

    function wT(mm, Tm) {
      return hm.o.create(mm.filter((mm => mm.field == Tm)).map((mm => hm.o.range(mm.from, mm.to))))
    }

    function DT(mm) {
      let Tm = mT.parse(mm);
      return (mm, fm, Am, am) => {
        let {
          text: xm,
          mo: wm
        } = Tm.instantiate(mm.state, Am), {
          main: Dm
        } = mm.state.selection, im = {
          changes: {
            from: Am,
            to: am == Dm.from ? Dm.to : am,
            insert: hm.O.of(xm)
          },
          scrollIntoView: !0,
          annotations: fm ? [om.of(fm), hm.Q.userEvent.of("input.complete")] : void 0
        };
        if (wm.length && (im.selection = wT(wm, 0)), wm.some((mm => mm.field > 0))) {
          let Tm = new hT(wm, 0),
            fm = im.effects = [AT.of(Tm)];
          void 0 === mm.state.field(xT, !1) && fm.push(hm.J.appendConfig.of([xT, ET, OT, gm]))
        }
        mm.dispatch(mm.state.update(im))
      }
    }

    function iT(mm) {
      return Tm => {
        let {
          state: fm,
          dispatch: hm
        } = Tm, Am = fm.field(xT, !1);
        if (!Am || mm < 0 && 0 == Am.active) return !1;
        let am = Am.active + mm,
          xm = mm > 0 && !Am.mo.some((Tm => Tm.field == am + mm));
        return hm(fm.update({
          selection: wT(Am.mo, am),
          effects: AT.of(xm ? null : new hT(Am.mo, am)),
          scrollIntoView: !0
        })), !0
      }
    }
    const RT = [{
        key: "Tab",
        run: iT(1),
        shift: iT(-1)
      }, {
        key: "Escape",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm;
          return !!Tm.field(xT, !1) && (fm(Tm.update({
            effects: AT.of(null)
          })), !0)
        }
      }],
      pT = hm.s.define({
        combine: mm => mm.length ? mm[0] : RT
      }),
      ET = hm.x.highest(Am.M.compute([pT], (mm => mm.facet(pT))));

    function oT(mm, Tm) {
      return {
        ...Tm,
        apply: DT(mm)
      }
    }
    const OT = Am.f.domEventHandlers({
      mousedown(mm, Tm) {
        let fm, hm = Tm.state.field(xT, !1);
        if (!hm || null == (fm = Tm.posAtCoords({
            x: mm.clientX,
            y: mm.clientY
          }))) return !1;
        let Am = hm.mo.find((mm => mm.from <= fm && mm.to >= fm));
        return !(!Am || Am.field == hm.active) && (Tm.dispatch({
          selection: wT(hm.mo, Am.field),
          effects: AT.of(hm.mo.some((mm => mm.field > Am.field)) ? new hT(hm.mo, Am.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const YT = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      qT = hm.J.define({
        map(mm, Tm) {
          let fm = Tm.mapPos(mm, -1, hm.u.TrackAfter);
          return null == fm ? void 0 : fm
        }
      }),
      jT = new class extends hm.G {};
    jT.startSide = 1, jT.endSide = -1;
    const VT = hm.M.define({
      create: () => hm.C.empty,
      update(mm, Tm) {
        if (mm = mm.map(Tm.changes), Tm.selection) {
          let fm = Tm.state.doc.lineAt(Tm.selection.main.head);
          mm = mm.update({
            filter: mm => mm >= fm.from && mm <= fm.to
          })
        }
        for (let fm of Tm.effects) fm.is(qT) && (mm = mm.update({
          add: [jT.range(fm.value, fm.value + 1)]
        }));
        return mm
      }
    });

    function IT() {
      return [cT, VT]
    }
    const KT = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function QT(mm) {
      for (let Tm = 0; Tm < 16; Tm += 2)
        if (KT.charCodeAt(Tm) == mm) return KT.charAt(Tm + 1);
      return (0, hm.gb)(mm < 128 ? mm : mm + 1)
    }

    function nT(mm, Tm) {
      return mm.languageDataAt("closeBrackets", Tm)[0] || YT
    }
    const JT = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      cT = Am.f.inputHandler.of(((mm, Tm, fm, Am) => {
        if ((JT ? mm.composing : mm.compositionStarted) || mm.state.readOnly) return !1;
        let am = mm.state.selection.main;
        if (Am.length > 2 || 2 == Am.length && 1 == (0, hm.U)((0, hm.R)(Am, 0)) || Tm != am.from || fm != am.to) return !1;
        let xm = function(mm, Tm) {
          let fm = nT(mm, mm.selection.main.head),
            Am = fm.brackets || YT.brackets;
          for (let am of Am) {
            let xm = QT((0, hm.R)(am, 0));
            if (Tm == am) return xm == am ? eT(mm, am, Am.indexOf(am + am + am) > -1, fm) : bT(mm, am, xm, fm.before || YT.before);
            if (Tm == xm && ZT(mm, mm.selection.main.from)) return ST(mm, am, xm)
          }
          return null
        }(mm.state, Am);
        return !!xm && (mm.dispatch(xm), !0)
      })),
      zT = [{
        key: "Backspace",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm;
          if (Tm.readOnly) return !1;
          let Am = nT(Tm, Tm.selection.main.head).brackets || YT.brackets,
            am = null,
            xm = Tm.changeByRange((mm => {
              if (mm.empty) {
                let fm = function(mm, Tm) {
                  let fm = mm.sliceString(Tm - 2, Tm);
                  return (0, hm.U)((0, hm.R)(fm, 0)) == fm.length ? fm : fm.slice(1)
                }(Tm.doc, mm.head);
                for (let am of Am)
                  if (am == fm && kT(Tm.doc, mm.head) == QT((0, hm.R)(am, 0))) return {
                    changes: {
                      from: mm.head - am.length,
                      to: mm.head + am.length
                    },
                    range: hm.o.cursor(mm.head - am.length)
                  }
              }
              return {
                range: am = mm
              }
            }));
          return am || fm(Tm.update(xm, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !am
        }
      }];

    function ZT(mm, Tm) {
      let fm = !1;
      return mm.field(VT).between(0, mm.doc.length, (mm => {
        mm == Tm && (fm = !0)
      })), fm
    }

    function kT(mm, Tm) {
      let fm = mm.sliceString(Tm, Tm + 2);
      return fm.slice(0, (0, hm.U)((0, hm.R)(fm, 0)))
    }

    function bT(mm, Tm, fm, Am) {
      let am = null,
        xm = mm.changeByRange((xm => {
          if (!xm.empty) return {
            changes: [{
              insert: Tm,
              from: xm.from
            }, {
              insert: fm,
              from: xm.to
            }],
            effects: qT.of(xm.to + Tm.length),
            range: hm.o.range(xm.anchor + Tm.length, xm.head + Tm.length)
          };
          let wm = kT(mm.doc, xm.head);
          return !wm || /\s/.test(wm) || Am.indexOf(wm) > -1 ? {
            changes: {
              insert: Tm + fm,
              from: xm.head
            },
            effects: qT.of(xm.head + Tm.length),
            range: hm.o.cursor(xm.head + Tm.length)
          } : {
            range: am = xm
          }
        }));
      return am ? null : mm.update(xm, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function ST(mm, Tm, fm) {
      let Am = null,
        am = mm.changeByRange((Tm => Tm.empty && kT(mm.doc, Tm.head) == fm ? {
          changes: {
            from: Tm.head,
            to: Tm.head + fm.length,
            insert: fm
          },
          range: hm.o.cursor(Tm.head + fm.length)
        } : Am = {
          range: Tm
        }));
      return Am ? null : mm.update(am, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function eT(mm, Tm, fm, Am) {
      let xm = Am.stringPrefixes || YT.stringPrefixes,
        wm = null,
        Dm = mm.changeByRange((Am => {
          if (!Am.empty) return {
            changes: [{
              insert: Tm,
              from: Am.from
            }, {
              insert: Tm,
              from: Am.to
            }],
            effects: qT.of(Am.to + Tm.length),
            range: hm.o.range(Am.anchor + Tm.length, Am.head + Tm.length)
          };
          let Dm, im = Am.head,
            Rm = kT(mm.doc, im);
          if (Rm == Tm) {
            if (NT(mm, im)) return {
              changes: {
                insert: Tm + Tm,
                from: im
              },
              effects: qT.of(im + Tm.length),
              range: hm.o.cursor(im + Tm.length)
            };
            if (ZT(mm, im)) {
              let Am = fm && mm.sliceDoc(im, im + 3 * Tm.length) == Tm + Tm + Tm ? Tm + Tm + Tm : Tm;
              return {
                changes: {
                  from: im,
                  to: im + Am.length,
                  insert: Am
                },
                range: hm.o.cursor(im + Am.length)
              }
            }
          } else {
            if (fm && mm.sliceDoc(im - 2 * Tm.length, im) == Tm + Tm && (Dm = GT(mm, im - 2 * Tm.length, xm)) > -1 && NT(mm, Dm)) return {
              changes: {
                insert: Tm + Tm + Tm + Tm,
                from: im
              },
              effects: qT.of(im + Tm.length),
              range: hm.o.cursor(im + Tm.length)
            };
            if (mm.charCategorizer(im)(Rm) != hm.k.Word && GT(mm, im, xm) > -1 && ! function(mm, Tm, fm, hm) {
                let Am = (0, am.ob)(mm).resolveInner(Tm, -1),
                  xm = hm.reduce(((mm, Tm) => Math.max(mm, Tm.length)), 0);
                for (let am = 0; am < 5; am++) {
                  let am = mm.sliceDoc(Am.from, Math.min(Am.to, Am.from + fm.length + xm)),
                    wm = am.indexOf(fm);
                  if (!wm || wm > -1 && hm.indexOf(am.slice(0, wm)) > -1) {
                    let Tm = Am.firstChild;
                    for (; Tm && Tm.from == Am.from && Tm.to - Tm.from > fm.length + wm;) {
                      if (mm.sliceDoc(Tm.to - fm.length, Tm.to) == fm) return !1;
                      Tm = Tm.firstChild
                    }
                    return !0
                  }
                  let Dm = Am.to == Tm && Am.parent;
                  if (!Dm) break;
                  Am = Dm
                }
                return !1
              }(mm, im, Tm, xm)) return {
              changes: {
                insert: Tm + Tm,
                from: im
              },
              effects: qT.of(im + Tm.length),
              range: hm.o.cursor(im + Tm.length)
            }
          }
          return {
            range: wm = Am
          }
        }));
      return wm ? null : mm.update(Dm, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function NT(mm, Tm) {
      let fm = (0, am.ob)(mm).resolveInner(Tm + 1);
      return fm.parent && fm.from == Tm
    }

    function GT(mm, Tm, fm) {
      let Am = mm.charCategorizer(Tm);
      if (Am(mm.sliceDoc(Tm - 1, Tm)) != hm.k.Word) return Tm;
      for (let am of fm) {
        let fm = Tm - am.length;
        if (mm.sliceDoc(fm, Tm) == am && Am(mm.sliceDoc(fm - 1, fm)) != hm.k.Word) return fm
      }
      return -1
    }

    function XT() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [dm, sm, Qm.of(mm), tm, HT, gm]
    }
    const PT = [{
        key: "Ctrl-Space",
        run: Bm
      }, {
        mac: "Alt-`",
        run: Bm
      }, {
        mac: "Alt-i",
        run: Bm
      }, {
        key: "Escape",
        run: mm => {
          let Tm = mm.state.field(sm, !1);
          return !(!Tm || !Tm.active.some((mm => 0 != mm.state))) && (mm.dispatch({
            effects: Vm.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: um(!0)
      }, {
        key: "ArrowUp",
        run: um(!1)
      }, {
        key: "PageDown",
        run: um(!0, "page")
      }, {
        key: "PageUp",
        run: um(!1, "page")
      }, {
        key: "Enter",
        run: mm => {
          let Tm = mm.state.field(sm, !1);
          return !(mm.state.readOnly || !Tm || !Tm.open || Tm.open.selected < 0 || Tm.open.disabled || Date.now() - Tm.open.timestamp < mm.state.facet(Qm).interactionDelay) && lm(mm, Tm.open.options[Tm.open.selected])
        }
      }],
      HT = hm.x.highest(Am.M.computeN([Qm], (mm => mm.facet(Qm).defaultKeymap ? [PT] : [])))
  },
  41511: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => im,
      f: () => Em,
      j: () => Rm,
      k: () => pm
    });
    var hm = fm(41356);
    class Am {
      constructor(mm, Tm, fm, hm) {
        this.origin = mm, this.changes = Tm, this.effects = fm, this.clientID = hm
      }
    }
    class am {
      constructor(mm, Tm) {
        this.version = mm, this.unconfirmed = Tm
      }
    }
    const xm = hm.s.define({
        combine(mm) {
          let Tm = (0, hm.Y)(mm, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: mm => mm
          });
          return null == Tm.clientID && (Tm.clientID = mm.length && mm[0].generatedID || ""), Tm
        }
      }),
      wm = hm.e.define(),
      Dm = hm.M.define({
        create: mm => new am(mm.facet(xm).startVersion, []),
        update(mm, Tm) {
          let fm = Tm.annotation(wm);
          if (fm) return fm;
          let {
            sharedEffects: hm,
            clientID: Dm
          } = Tm.startState.facet(xm), im = hm(Tm);
          return im.length || !Tm.changes.empty ? new am(mm.version, mm.unconfirmed.concat(new Am(Tm, Tm.changes, im, Dm))) : mm
        }
      });

    function im() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Dm, xm.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, mm))]
    }

    function Rm(mm, Tm) {
      let {
        version: fm,
        unconfirmed: im
      } = mm.field(Dm), {
        clientID: Rm
      } = mm.facet(xm);
      fm += Tm.length;
      let pm = [],
        Em = null,
        om = 0;
      for (let Am of Tm) {
        let mm = om < im.length ? im[om] : null;
        mm && mm.clientID == Am.clientID ? (Em && (Em = Em.map(mm.changes, !0)), pm = hm.J.mapEffects(pm, Am.changes), om++) : (pm = hm.J.mapEffects(pm, Am.changes), Am.effects && (pm = pm.concat(Am.effects)), Em = Em ? Em.compose(Am.changes) : Am.changes)
      }
      if (om && (im = im.slice(om)), im.length && (Em && (im = im.map((mm => {
          let Tm = mm.changes.map(Em);
          return Em = Em.map(mm.changes, !0), new Am(mm.origin, Tm, hm.J.mapEffects(mm.effects, Em), Rm)
        }))), pm.length)) {
        let mm = im.reduce(((mm, Tm) => mm.compose(Tm.changes)), hm.ChangeSet.empty(im[0].changes.length));
        pm = hm.J.mapEffects(pm, mm)
      }
      return Em ? mm.update({
        changes: Em,
        effects: pm,
        annotations: [hm.Q.addToHistory.of(!1), hm.Q.remote.of(!0), wm.of(new am(fm, im))],
        filter: !1
      }) : mm.update({
        annotations: [wm.of(new am(fm, im))]
      })
    }

    function pm(mm) {
      return mm.field(Dm).unconfirmed
    }

    function Em(mm) {
      return mm.field(Dm).version
    }
  },
  41394: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => qT
    });
    var hm = fm(41379);
    class Am {
      constructor(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        let im = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Rm = arguments.length > 10 ? arguments[10] : void 0;
        this.p = mm, this.stack = Tm, this.state = fm, this.reducePos = hm, this.pos = Am, this.score = am, this.buffer = xm, this.bufferBase = wm, this.curContext = Dm, this.lookAhead = im, this.parent = Rm
      }
      toString() {
        return `[${this.stack.filter(((mm,Tm)=>Tm%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = mm.parser.context;
        return new Am(mm, [], Tm, fm, fm, 0, [], 0, hm ? new am(hm, hm.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(mm, Tm) {
        this.stack.push(this.state, Tm, this.bufferBase + this.buffer.length), this.state = mm
      }
      reduce(mm) {
        var Tm;
        let fm = mm >> 19,
          hm = 65535 & mm,
          {
            parser: Am
          } = this.p,
          am = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          xm = Am.dynamicPrecedence(hm);
        if (xm && (this.score += xm), 0 == fm) return this.pushState(Am.getGoto(this.state, hm, !0), this.reducePos), hm < Am.minRepeatTerm && this.storeNode(hm, this.reducePos, this.reducePos, am ? 8 : 4, !0), void this.reduceContext(hm, this.reducePos);
        let wm = this.stack.length - 3 * (fm - 1) - (262144 & mm ? 6 : 0),
          Dm = wm ? this.stack[wm - 2] : this.p.mo[0].from,
          im = this.reducePos - Dm;
        im >= 2e3 && !(null === (Tm = this.p.parser.nodeSet.types[hm]) || void 0 === Tm ? void 0 : Tm.isAnonymous) && (Dm == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = im) : this.p.lastBigReductionSize < im && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = Dm, this.p.lastBigReductionSize = im));
        let Rm = wm ? this.stack[wm - 1] : 0,
          pm = this.bufferBase + this.buffer.length - Rm;
        if (hm < Am.minRepeatTerm || 131072 & mm) {
          let mm = Am.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(hm, Dm, mm, pm + 4, !0)
        }
        if (262144 & mm) this.state = this.stack[wm];
        else {
          let mm = this.stack[wm - 3];
          this.state = Am.getGoto(mm, hm, !0)
        }
        for (; this.stack.length > wm;) this.stack.pop();
        this.reduceContext(hm, Dm)
      }
      storeNode(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == mm && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let mm = this,
            hm = this.buffer.length;
          if (0 == hm && mm.parent && (hm = mm.bufferBase - mm.parent.bufferBase, mm = mm.parent), hm > 0 && 0 == mm.buffer[hm - 4] && mm.buffer[hm - 1] > -1) {
            if (Tm == fm) return;
            if (mm.buffer[hm - 2] >= Tm) return void(mm.buffer[hm - 2] = fm)
          }
        }
        if (Am && this.pos != fm) {
          let Am = this.buffer.length;
          if (Am > 0 && (0 != this.buffer[Am - 4] || this.buffer[Am - 1] < 0)) {
            let mm = !1;
            for (let Tm = Am; Tm > 0 && this.buffer[Tm - 2] > fm; Tm -= 4)
              if (this.buffer[Tm - 1] >= 0) {
                mm = !0;
                break
              } if (mm)
              for (; Am > 0 && this.buffer[Am - 2] > fm;) this.buffer[Am] = this.buffer[Am - 4], this.buffer[Am + 1] = this.buffer[Am - 3], this.buffer[Am + 2] = this.buffer[Am - 2], this.buffer[Am + 3] = this.buffer[Am - 1], Am -= 4, hm > 4 && (hm -= 4)
          }
          this.buffer[Am] = mm, this.buffer[Am + 1] = Tm, this.buffer[Am + 2] = fm, this.buffer[Am + 3] = hm
        } else this.buffer.push(mm, Tm, fm, hm)
      }
      shift(mm, Tm, fm, hm) {
        if (131072 & mm) this.pushState(65535 & mm, this.pos);
        else if (0 == (262144 & mm)) {
          let Am = mm,
            {
              parser: am
            } = this.p;
          this.pos = hm;
          let xm = am.stateFlag(Am, 1);
          !xm && (hm > fm || Tm <= am.maxNode) && (this.reducePos = hm), this.pushState(Am, xm ? fm : Math.min(fm, this.reducePos)), this.shiftContext(Tm, fm), Tm <= am.maxNode && this.buffer.push(Tm, fm, hm, 4)
        } else this.pos = hm, this.shiftContext(Tm, fm), Tm <= this.p.parser.maxNode && this.buffer.push(Tm, fm, hm, 4)
      }
      apply(mm, Tm, fm, hm) {
        65536 & mm ? this.reduce(mm) : this.shift(mm, Tm, fm, hm)
      }
      useNode(mm, Tm) {
        let fm = this.p.reused.length - 1;
        (fm < 0 || this.p.reused[fm] != mm) && (this.p.reused.push(mm), fm++);
        let hm = this.pos;
        this.reducePos = this.pos = hm + mm.length, this.pushState(Tm, hm), this.buffer.push(fm, hm, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, mm, this, this.p.stream.reset(this.pos - mm.length)))
      }
      split() {
        let mm = this,
          Tm = mm.buffer.length;
        for (; Tm > 0 && mm.buffer[Tm - 2] > mm.reducePos;) Tm -= 4;
        let fm = mm.buffer.slice(Tm),
          hm = mm.bufferBase + Tm;
        for (; mm && hm == mm.bufferBase;) mm = mm.parent;
        return new Am(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, fm, hm, this.curContext, this.lookAhead, mm)
      }
      recoverByDelete(mm, Tm) {
        let fm = mm <= this.p.parser.maxNode;
        fm && this.storeNode(mm, this.pos, Tm, 4), this.storeNode(0, this.pos, Tm, fm ? 8 : 4), this.pos = this.reducePos = Tm, this.score -= 190
      }
      canShift(mm) {
        for (let Tm = new xm(this);;) {
          let fm = this.p.parser.stateSlot(Tm.state, 4) || this.p.parser.hasAction(Tm.state, mm);
          if (0 == fm) return !1;
          if (0 == (65536 & fm)) return !0;
          Tm.reduce(fm)
        }
      }
      recoverByInsert(mm) {
        if (this.stack.length >= 300) return [];
        let Tm = this.p.parser.nextStates(this.state);
        if (Tm.length > 8 || this.stack.length >= 120) {
          let fm = [];
          for (let hm, Am = 0; Am < Tm.length; Am += 2)(hm = Tm[Am + 1]) != this.state && this.p.parser.hasAction(hm, mm) && fm.push(Tm[Am], hm);
          if (this.stack.length < 120)
            for (let mm = 0; fm.length < 8 && mm < Tm.length; mm += 2) {
              let hm = Tm[mm + 1];
              fm.some(((mm, Tm) => 1 & Tm && mm == hm)) || fm.push(Tm[mm], hm)
            }
          Tm = fm
        }
        let fm = [];
        for (let hm = 0; hm < Tm.length && fm.length < 4; hm += 2) {
          let mm = Tm[hm + 1];
          if (mm == this.state) continue;
          let Am = this.split();
          Am.pushState(mm, this.pos), Am.storeNode(0, Am.pos, Am.pos, 4, !0), Am.shiftContext(Tm[hm], this.pos), Am.reducePos = this.pos, Am.score -= 200, fm.push(Am)
        }
        return fm
      }
      forceReduce() {
        let {
          parser: mm
        } = this.p, Tm = mm.stateSlot(this.state, 5);
        if (0 == (65536 & Tm)) return !1;
        if (!mm.validAction(this.state, Tm)) {
          let fm = Tm >> 19,
            hm = 65535 & Tm,
            Am = this.stack.length - 3 * fm;
          if (Am < 0 || mm.getGoto(this.stack[Am], hm, !1) < 0) {
            let mm = this.findForcedReduction();
            if (null == mm) return !1;
            Tm = mm
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(Tm), !0
      }
      findForcedReduction() {
        let {
          parser: mm
        } = this.p, Tm = [], fm = (hm, Am) => {
          if (!Tm.includes(hm)) return Tm.push(hm), mm.allActions(hm, (Tm => {
            if (393216 & Tm);
            else if (65536 & Tm) {
              let fm = (Tm >> 19) - Am;
              if (fm > 1) {
                let hm = 65535 & Tm,
                  Am = this.stack.length - 3 * fm;
                if (Am >= 0 && mm.getGoto(this.stack[Am], hm, !1) >= 0) return fm << 19 | 65536 | hm
              }
            } else {
              let mm = fm(Tm, Am + 1);
              if (null != mm) return mm
            }
          }))
        };
        return fm(this.state, 0)
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
          parser: mm
        } = this.p;
        return 65535 == mm.data[mm.stateSlot(this.state, 1)] && !mm.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(mm) {
        if (this.state != mm.state || this.stack.length != mm.stack.length) return !1;
        for (let Tm = 0; Tm < this.stack.length; Tm += 3)
          if (this.stack[Tm] != mm.stack[Tm]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(mm) {
        return this.p.parser.dialect.flags[mm]
      }
      shiftContext(mm, Tm) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, mm, this, this.p.stream.reset(Tm)))
      }
      reduceContext(mm, Tm) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, mm, this, this.p.stream.reset(Tm)))
      }
      emitContext() {
        let mm = this.buffer.length - 1;
        (mm < 0 || -3 != this.buffer[mm]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let mm = this.buffer.length - 1;
        (mm < 0 || -4 != this.buffer[mm]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(mm) {
        if (mm != this.curContext.context) {
          let Tm = new am(this.curContext.tracker, mm);
          Tm.hash != this.curContext.hash && this.emitContext(), this.curContext = Tm
        }
      }
      setLookAhead(mm) {
        return !(mm <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = mm, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class am {
      constructor(mm, Tm) {
        this.tracker = mm, this.context = Tm, this.hash = mm.strict ? mm.hash(Tm) : 0
      }
    }
    class xm {
      constructor(mm) {
        this.start = mm, this.state = mm.state, this.stack = mm.stack, this.base = this.stack.length
      }
      reduce(mm) {
        let Tm = 65535 & mm,
          fm = mm >> 19;
        0 == fm ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (fm - 1);
        let hm = this.start.p.parser.getGoto(this.stack[this.base - 3], Tm, !0);
        this.state = hm
      }
    }
    class wm {
      constructor(mm, Tm, fm) {
        this.stack = mm, this.pos = Tm, this.index = fm, this.buffer = mm.buffer, 0 == this.index && this.maybeNext()
      }
      static create(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm.bufferBase + mm.buffer.length;
        return new wm(mm, Tm, Tm - mm.bufferBase)
      }
      maybeNext() {
        let mm = this.stack.parent;
        null != mm && (this.index = this.stack.bufferBase - mm.bufferBase, this.stack = mm, this.buffer = mm.buffer)
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
        return new wm(this.stack, this.pos, this.index)
      }
    }

    function Dm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof mm) return mm;
      let fm = null;
      for (let hm = 0, Am = 0; hm < mm.length;) {
        let am = 0;
        for (;;) {
          let Tm = mm.charCodeAt(hm++),
            fm = !1;
          if (126 == Tm) {
            am = 65535;
            break
          }
          Tm >= 92 && Tm--, Tm >= 34 && Tm--;
          let Am = Tm - 32;
          if (Am >= 46 && (Am -= 46, fm = !0), am += Am, fm) break;
          am *= 46
        }
        fm ? fm[Am++] = am : fm = new Tm(am)
      }
      return fm
    }
    class im {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const Rm = new im;
    class pm {
      constructor(mm, Tm) {
        this.input = mm, this.mo = Tm, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Rm, this.rangeIndex = 0, this.pos = this.chunkPos = Tm[0].from, this.range = Tm[0], this.end = Tm[Tm.length - 1].to, this.readNext()
      }
      resolveOffset(mm, Tm) {
        let fm = this.range,
          hm = this.rangeIndex,
          Am = this.pos + mm;
        for (; Am < fm.from;) {
          if (!hm) return null;
          let mm = this.mo[--hm];
          Am -= fm.from - mm.to, fm = mm
        }
        for (; Tm < 0 ? Am > fm.to : Am >= fm.to;) {
          if (hm == this.mo.length - 1) return null;
          let mm = this.mo[++hm];
          Am += mm.from - fm.to, fm = mm
        }
        return Am
      }
      clipPos(mm) {
        if (mm >= this.range.from && mm < this.range.to) return mm;
        for (let Tm of this.mo)
          if (Tm.to > mm) return Math.max(mm, Tm.from);
        return this.end
      }
      peek(mm) {
        let Tm, fm, hm = this.chunkOff + mm;
        if (hm >= 0 && hm < this.chunk.length) Tm = this.pos + mm, fm = this.chunk.charCodeAt(hm);
        else {
          let hm = this.resolveOffset(mm, 1);
          if (null == hm) return -1;
          if (Tm = hm, Tm >= this.chunk2Pos && Tm < this.chunk2Pos + this.chunk2.length) fm = this.chunk2.charCodeAt(Tm - this.chunk2Pos);
          else {
            let mm = this.rangeIndex,
              hm = this.range;
            for (; hm.to <= Tm;) hm = this.mo[++mm];
            this.chunk2 = this.input.chunk(this.chunk2Pos = Tm), Tm + this.chunk2.length > hm.to && (this.chunk2 = this.chunk2.slice(0, hm.to - Tm)), fm = this.chunk2.charCodeAt(0)
          }
        }
        return Tm >= this.token.lookAhead && (this.token.lookAhead = Tm + 1), fm
      }
      acceptToken(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = Tm ? this.resolveOffset(Tm, -1) : this.pos;
        if (null == fm || fm < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = mm, this.token.end = fm
      }
      acceptTokenTo(mm, Tm) {
        this.token.value = mm, this.token.end = Tm
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: mm,
            chunkPos: Tm
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = mm, this.chunk2Pos = Tm, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let mm = this.input.chunk(this.pos),
            Tm = this.pos + mm.length;
          this.chunk = Tm > this.range.to ? mm.slice(0, this.range.to - this.pos) : mm, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += mm; this.pos + mm >= this.range.to;) {
          if (this.rangeIndex == this.mo.length - 1) return this.setDone();
          mm -= this.range.to - this.pos, this.range = this.mo[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += mm, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.mo[this.rangeIndex = this.mo.length - 1], this.chunk = "", this.next = -1
      }
      reset(mm, Tm) {
        if (Tm ? (this.token = Tm, Tm.start = mm, Tm.lookAhead = mm + 1, Tm.value = Tm.extended = -1) : this.token = Rm, this.pos != mm) {
          if (this.pos = mm, mm == this.end) return this.setDone(), this;
          for (; mm < this.range.from;) this.range = this.mo[--this.rangeIndex];
          for (; mm >= this.range.to;) this.range = this.mo[++this.rangeIndex];
          mm >= this.chunkPos && mm < this.chunkPos + this.chunk.length ? this.chunkOff = mm - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(mm, Tm) {
        if (mm >= this.chunkPos && Tm <= this.chunkPos + this.chunk.length) return this.chunk.slice(mm - this.chunkPos, Tm - this.chunkPos);
        if (mm >= this.chunk2Pos && Tm <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(mm - this.chunk2Pos, Tm - this.chunk2Pos);
        if (mm >= this.range.from && Tm <= this.range.to) return this.input.read(mm, Tm);
        let fm = "";
        for (let hm of this.mo) {
          if (hm.from >= Tm) break;
          hm.to > mm && (fm += this.input.read(Math.max(hm.from, mm), Math.min(hm.to, Tm)))
        }
        return fm
      }
    }
    class Em {
      constructor(mm, Tm) {
        this.data = mm, this.id = Tm
      }
      token(mm, Tm) {
        let {
          parser: fm
        } = Tm.p;
        Ym(this.data, mm, Tm, this.id, fm.data, fm.tokenPrecTable)
      }
    }
    Em.prototype.contextual = Em.prototype.fallback = Em.prototype.extend = !1;
    class om {
      constructor(mm, Tm, fm) {
        this.precTable = Tm, this.elseToken = fm, this.data = "string" == typeof mm ? Dm(mm) : mm
      }
      token(mm, Tm) {
        let fm = mm.pos,
          hm = 0;
        for (;;) {
          let fm = mm.next < 0,
            Am = mm.resolveOffset(1, 1);
          if (Ym(this.data, mm, Tm, 0, this.data, this.precTable), mm.token.value > -1) break;
          if (null == this.elseToken) return;
          if (fm || hm++, null == Am) break;
          mm.reset(Am, mm.token)
        }
        hm && (mm.reset(fm, mm.token), mm.acceptToken(this.elseToken, hm))
      }
    }
    om.prototype.contextual = Em.prototype.fallback = Em.prototype.extend = !1;
    class Om {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = mm, this.contextual = !!Tm.contextual, this.fallback = !!Tm.fallback, this.extend = !!Tm.extend
      }
    }

    function Ym(mm, Tm, fm, hm, Am, am) {
      let xm = 0,
        wm = 1 << hm,
        {
          dialect: Dm
        } = fm.p.parser;
      mm: for (; 0 != (wm & mm[xm]);) {
        let fm = mm[xm + 1];
        for (let pm = xm + 3; pm < fm; pm += 2)
          if ((mm[pm + 1] & wm) > 0) {
            let fm = mm[pm];
            if (Dm.allows(fm) && (-1 == Tm.token.value || Tm.token.value == fm || jm(fm, Tm.token.value, Am, am))) {
              Tm.acceptToken(fm);
              break
            }
          } let hm = Tm.next,
          im = 0,
          Rm = mm[xm + 2];
        if (!(Tm.next < 0 && Rm > im && 65535 == mm[fm + 3 * Rm - 3])) {
          for (; im < Rm;) {
            let Am = im + Rm >> 1,
              am = fm + Am + (Am << 1),
              wm = mm[am],
              Dm = mm[am + 1] || 65536;
            if (hm < wm) Rm = Am;
            else {
              if (!(hm >= Dm)) {
                xm = mm[am + 2], Tm.advance();
                continue mm
              }
              im = Am + 1
            }
          }
          break
        }
        xm = mm[fm + 3 * Rm - 1]
      }
    }

    function qm(mm, Tm, fm) {
      for (let hm, Am = Tm; 65535 != (hm = mm[Am]); Am++)
        if (hm == fm) return Am - Tm;
      return -1
    }

    function jm(mm, Tm, fm, hm) {
      let Am = qm(fm, hm, Tm);
      return Am < 0 || qm(fm, hm, mm) < Am
    }
    const Vm = "undefined" != typeof process && {
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
    let Im = null;

    function Km(mm, Tm, fm) {
      let Am = mm.cursor(hm.f.IncludeAnonymous);
      for (Am.moveTo(Tm);;)
        if (!(fm < 0 ? Am.childBefore(Tm) : Am.childAfter(Tm)))
          for (;;) {
            if ((fm < 0 ? Am.to < Tm : Am.from > Tm) && !Am.type.isError) return fm < 0 ? Math.max(0, Math.min(Am.to - 1, Tm - 25)) : Math.min(mm.length, Math.max(Am.from + 1, Tm + 25));
            if (fm < 0 ? Am.prevSibling() : Am.nextSibling()) break;
            if (!Am.parent()) return fm < 0 ? 0 : mm.length
          }
    }
    class Qm {
      constructor(mm, Tm) {
        this.fragments = mm, this.nodeSet = Tm, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let mm = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (mm) {
          for (this.safeFrom = mm.openStart ? Km(mm.tree, mm.from + mm.offset, 1) - mm.offset : mm.from, this.safeTo = mm.openEnd ? Km(mm.tree, mm.to + mm.offset, -1) - mm.offset : mm.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(mm.tree), this.start.push(-mm.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(mm) {
        if (mm < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= mm;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let Tm = this.trees.length - 1;
          if (Tm < 0) return this.nextFragment(), null;
          let fm = this.trees[Tm],
            Am = this.index[Tm];
          if (Am == fm.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let am = fm.children[Am],
            xm = this.start[Tm] + fm.positions[Am];
          if (xm > mm) return this.nextStart = xm, null;
          if (am instanceof hm.t) {
            if (xm == mm) {
              if (xm < this.safeFrom) return null;
              let mm = xm + am.length;
              if (mm <= this.safeTo) {
                let Tm = am.prop(hm.h.lookAhead);
                if (!Tm || mm + Tm < this.fragment.to) return am
              }
            }
            this.index[Tm]++, xm + am.length >= Math.max(this.safeFrom, mm) && (this.trees.push(am), this.start.push(xm), this.index.push(0))
          } else this.index[Tm]++, this.nextStart = xm + am.length
        }
      }
    }
    class nm {
      constructor(mm, Tm) {
        this.stream = Tm, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = mm.tokenizers.map((mm => new im))
      }
      getActions(mm) {
        let Tm = 0,
          fm = null,
          {
            parser: hm
          } = mm.p,
          {
            tokenizers: Am
          } = hm,
          am = hm.stateSlot(mm.state, 3),
          xm = mm.curContext ? mm.curContext.hash : 0,
          wm = 0;
        for (let Dm = 0; Dm < Am.length; Dm++) {
          if (0 == (1 << Dm & am)) continue;
          let hm = Am[Dm],
            im = this.tokens[Dm];
          if ((!fm || hm.fallback) && ((hm.contextual || im.start != mm.pos || im.mask != am || im.context != xm) && (this.updateCachedToken(im, hm, mm), im.mask = am, im.context = xm), im.lookAhead > im.end + 25 && (wm = Math.max(im.lookAhead, wm)), 0 != im.value)) {
            let Am = Tm;
            if (im.extended > -1 && (Tm = this.addActions(mm, im.extended, im.end, Tm)), Tm = this.addActions(mm, im.value, im.end, Tm), !hm.extend && (fm = im, Tm > Am)) break
          }
        }
        for (; this.actions.length > Tm;) this.actions.pop();
        return wm && mm.setLookAhead(wm), fm || mm.pos != this.stream.end || (fm = new im, fm.value = mm.p.parser.eofTerm, fm.start = fm.end = mm.pos, Tm = this.addActions(mm, fm.value, fm.end, Tm)), this.mainToken = fm, this.actions
      }
      getMainToken(mm) {
        if (this.mainToken) return this.mainToken;
        let Tm = new im,
          {
            pos: fm,
            p: hm
          } = mm;
        return Tm.start = fm, Tm.end = Math.min(fm + 1, hm.stream.end), Tm.value = fm == hm.stream.end ? hm.parser.eofTerm : 0, Tm
      }
      updateCachedToken(mm, Tm, fm) {
        let hm = this.stream.clipPos(fm.pos);
        if (Tm.token(this.stream.reset(hm, mm), fm), mm.value > -1) {
          let {
            parser: Tm
          } = fm.p;
          for (let hm = 0; hm < Tm.specialized.length; hm++)
            if (Tm.specialized[hm] == mm.value) {
              let Am = Tm.specializers[hm](this.stream.read(mm.start, mm.end), fm);
              if (Am >= 0 && fm.p.parser.dialect.allows(Am >> 1)) {
                0 == (1 & Am) ? mm.value = Am >> 1 : mm.extended = Am >> 1;
                break
              }
            }
        } else mm.value = 0, mm.end = this.stream.clipPos(hm + 1)
      }
      putAction(mm, Tm, fm, hm) {
        for (let Am = 0; Am < hm; Am += 3)
          if (this.actions[Am] == mm) return hm;
        return this.actions[hm++] = mm, this.actions[hm++] = Tm, this.actions[hm++] = fm, hm
      }
      addActions(mm, Tm, fm, hm) {
        let {
          state: Am
        } = mm, {
          parser: am
        } = mm.p, {
          data: xm
        } = am;
        for (let wm = 0; wm < 2; wm++)
          for (let mm = am.stateSlot(Am, wm ? 2 : 1);; mm += 3) {
            if (65535 == xm[mm]) {
              if (1 != xm[mm + 1]) {
                0 == hm && 2 == xm[mm + 1] && (hm = this.putAction(bm(xm, mm + 2), Tm, fm, hm));
                break
              }
              mm = bm(xm, mm + 2)
            }
            xm[mm] == Tm && (hm = this.putAction(bm(xm, mm + 1), Tm, fm, hm))
          }
        return hm
      }
    }
    class Jm {
      constructor(mm, Tm, fm, hm) {
        this.parser = mm, this.input = Tm, this.mo = hm, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new pm(Tm, hm), this.tokens = new nm(mm, this.stream), this.topTerm = mm.top[1];
        let {
          from: am
        } = hm[0];
        this.stacks = [Am.start(this, mm.top[0], am)], this.fragments = fm.length && this.stream.end - am > 4 * mm.bufferLength ? new Qm(fm, mm.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let mm, Tm, fm = this.stacks,
          hm = this.minStackPos,
          Am = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == fm.length) {
          let [mm] = fm;
          for (; mm.forceReduce() && mm.stack.length && mm.stack[mm.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let am = 0; am < fm.length; am++) {
          let xm = fm[am];
          for (;;) {
            if (this.tokens.mainToken = null, xm.pos > hm) Am.push(xm);
            else {
              if (this.advanceStack(xm, Am, fm)) continue;
              {
                mm || (mm = [], Tm = []), mm.push(xm);
                let fm = this.tokens.getMainToken(xm);
                Tm.push(fm.value, fm.end)
              }
            }
            break
          }
        }
        if (!Am.length) {
          let Tm = mm && function(mm) {
            let Tm = null;
            for (let fm of mm) {
              let mm = fm.p.stoppedAt;
              (fm.pos == fm.p.stream.end || null != mm && fm.pos > mm) && fm.p.parser.stateFlag(fm.state, 2) && (!Tm || Tm.score < fm.score) && (Tm = fm)
            }
            return Tm
          }(mm);
          if (Tm) return Vm && console.log("Finish with " + this.stackID(Tm)), this.stackToTree(Tm);
          if (this.parser.strict) throw Vm && mm && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + hm);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && mm) {
          let fm = null != this.stoppedAt && mm[0].pos > this.stoppedAt ? mm[0] : this.runRecovery(mm, Tm, Am);
          if (fm) return Vm && console.log("Force-finish " + this.stackID(fm)), this.stackToTree(fm.forceAll())
        }
        if (this.recovering) {
          let mm = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (Am.length > mm)
            for (Am.sort(((mm, Tm) => Tm.score - mm.score)); Am.length > mm;) Am.pop();
          Am.some((mm => mm.reducePos > hm)) && this.recovering--
        } else if (Am.length > 1) {
          mm: for (let mm = 0; mm < Am.length - 1; mm++) {
            let Tm = Am[mm];
            for (let fm = mm + 1; fm < Am.length; fm++) {
              let hm = Am[fm];
              if (Tm.sameState(hm) || Tm.buffer.length > 500 && hm.buffer.length > 500) {
                if (!((Tm.score - hm.score || Tm.buffer.length - hm.buffer.length) > 0)) {
                  Am.splice(mm--, 1);
                  continue mm
                }
                Am.splice(fm--, 1)
              }
            }
          }
          Am.length > 12 && (Am.sort(((mm, Tm) => Tm.score - mm.score)), Am.splice(12, Am.length - 12))
        }
        this.minStackPos = Am[0].pos;
        for (let am = 1; am < Am.length; am++) Am[am].pos < this.minStackPos && (this.minStackPos = Am[am].pos);
        return null
      }
      stopAt(mm) {
        if (null != this.stoppedAt && this.stoppedAt < mm) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = mm
      }
      advanceStack(mm, Tm, fm) {
        let Am = mm.pos,
          {
            parser: am
          } = this,
          xm = Vm ? this.stackID(mm) + " -> " : "";
        if (null != this.stoppedAt && Am > this.stoppedAt) return mm.forceReduce() ? mm : null;
        if (this.fragments) {
          let Tm = mm.curContext && mm.curContext.tracker.strict,
            fm = Tm ? mm.curContext.hash : 0;
          for (let wm = this.fragments.nodeAt(Am); wm;) {
            let Am = this.parser.nodeSet.types[wm.type.id] == wm.type ? am.getGoto(mm.state, wm.type.id) : -1;
            if (Am > -1 && wm.length && (!Tm || (wm.prop(hm.h.contextHash) || 0) == fm)) return mm.useNode(wm, Am), Vm && console.log(xm + this.stackID(mm) + ` (via reuse of ${am.getName(wm.type.id)})`), !0;
            if (!(wm instanceof hm.t) || 0 == wm.children.length || wm.positions[0] > 0) break;
            let Dm = wm.children[0];
            if (!(Dm instanceof hm.t && 0 == wm.positions[0])) break;
            wm = Dm
          }
        }
        let wm = am.stateSlot(mm.state, 4);
        if (wm > 0) return mm.reduce(wm), Vm && console.log(xm + this.stackID(mm) + ` (via always-reduce ${am.getName(65535&wm)})`), !0;
        if (mm.stack.length >= 8400)
          for (; mm.stack.length > 6e3 && mm.forceReduce(););
        let Dm = this.tokens.getActions(mm);
        for (let hm = 0; hm < Dm.length;) {
          let wm = Dm[hm++],
            im = Dm[hm++],
            Rm = Dm[hm++],
            pm = hm == Dm.length || !fm,
            Em = pm ? mm : mm.split(),
            om = this.tokens.mainToken;
          if (Em.apply(wm, im, om ? om.start : Em.pos, Rm), Vm && console.log(xm + this.stackID(Em) + ` (via ${0==(65536&wm)?"shift":`reduce of ${am.getName(65535&wm)}`} for ${am.getName(im)} @ ${Am}${Em==mm?"":", split"})`), pm) return !0;
          Em.pos > Am ? Tm.push(Em) : fm.push(Em)
        }
        return !1
      }
      advanceFully(mm, Tm) {
        let fm = mm.pos;
        for (;;) {
          if (!this.advanceStack(mm, null, null)) return !1;
          if (mm.pos > fm) return cm(mm, Tm), !0
        }
      }
      runRecovery(mm, Tm, fm) {
        let hm = null,
          Am = !1;
        for (let am = 0; am < mm.length; am++) {
          let xm = mm[am],
            wm = Tm[am << 1],
            Dm = Tm[1 + (am << 1)],
            im = Vm ? this.stackID(xm) + " -> " : "";
          if (xm.deadEnd) {
            if (Am) continue;
            if (Am = !0, xm.restart(), Vm && console.log(im + this.stackID(xm) + " (restarted)"), this.advanceFully(xm, fm)) continue
          }
          let Rm = xm.split(),
            pm = im;
          for (let mm = 0; mm < 10 && Rm.forceReduce(); mm++) {
            if (Vm && console.log(pm + this.stackID(Rm) + " (via force-reduce)"), this.advanceFully(Rm, fm)) break;
            Vm && (pm = this.stackID(Rm) + " -> ")
          }
          for (let mm of xm.recoverByInsert(wm)) Vm && console.log(im + this.stackID(mm) + " (via recover-insert)"), this.advanceFully(mm, fm);
          this.stream.end > xm.pos ? (Dm == xm.pos && (Dm++, wm = 0), xm.recoverByDelete(wm, Dm), Vm && console.log(im + this.stackID(xm) + ` (via recover-delete ${this.parser.getName(wm)})`), cm(xm, fm)) : (!hm || hm.score < Rm.score) && (hm = Rm)
        }
        return hm
      }
      stackToTree(mm) {
        return mm.close(), hm.t.build({
          buffer: wm.create(mm),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.mo[0].from,
          length: mm.pos - this.mo[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(mm) {
        let Tm = (Im || (Im = new WeakMap)).get(mm);
        return Tm || Im.set(mm, Tm = String.fromCodePoint(this.nextStackID++)), Tm + mm
      }
    }

    function cm(mm, Tm) {
      for (let fm = 0; fm < Tm.length; fm++) {
        let hm = Tm[fm];
        if (hm.pos == mm.pos && hm.sameState(mm)) return void(Tm[fm].score < mm.score && (Tm[fm] = mm))
      }
      Tm.push(mm)
    }
    class zm {
      constructor(mm, Tm, fm) {
        this.source = mm, this.flags = Tm, this.disabled = fm
      }
      allows(mm) {
        return !this.disabled || 0 == this.disabled[mm]
      }
    }
    const Zm = mm => mm;
    class km extends hm.n {
      constructor(mm) {
        if (super(), this.wrappers = [], 14 != mm.version) throw new RangeError(`Parser version (${mm.version}) doesn't match runtime version (14)`);
        let Tm = mm.nodeNames.split(" ");
        this.minRepeatTerm = Tm.length;
        for (let hm = 0; hm < mm.repeatNodeCount; hm++) Tm.push("");
        let fm = Object.keys(mm.topRules).map((Tm => mm.topRules[Tm][1])),
          Am = [];
        for (let hm = 0; hm < Tm.length; hm++) Am.push([]);

        function am(mm, Tm, fm) {
          Am[mm].push([Tm, Tm.deserialize(String(fm))])
        }
        if (mm.nodeProps)
          for (let wm of mm.nodeProps) {
            let mm = wm[0];
            "string" == typeof mm && (mm = hm.h[mm]);
            for (let Tm = 1; Tm < wm.length;) {
              let fm = wm[Tm++];
              if (fm >= 0) am(fm, mm, wm[Tm++]);
              else {
                let hm = wm[Tm + -fm];
                for (let Am = -fm; Am > 0; Am--) am(wm[Tm++], mm, hm);
                Tm++
              }
            }
          }
        this.nodeSet = new hm.i(Tm.map(((Tm, am) => hm.j.define({
          name: am >= this.minRepeatTerm ? void 0 : Tm,
          id: am,
          props: Am[am],
          top: fm.indexOf(am) > -1,
          error: 0 == am,
          skipped: mm.skippedNodes && mm.skippedNodes.indexOf(am) > -1
        })))), mm.propSources && (this.nodeSet = this.nodeSet.extend(...mm.propSources)), this.strict = !1, this.bufferLength = hm.d;
        let xm = Dm(mm.tokenData);
        this.context = mm.context, this.specializerSpecs = mm.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let hm = 0; hm < this.specializerSpecs.length; hm++) this.specialized[hm] = this.specializerSpecs[hm].term;
        this.specializers = this.specializerSpecs.map(Sm), this.states = Dm(mm.states, Uint32Array), this.data = Dm(mm.stateData), this.goto = Dm(mm.goto), this.maxTerm = mm.maxTerm, this.tokenizers = mm.tokenizers.map((mm => "number" == typeof mm ? new Em(xm, mm) : mm)), this.topRules = mm.topRules, this.dialects = mm.dialects || {}, this.dynamicPrecedences = mm.dynamicPrecedences || null, this.tokenPrecTable = mm.tokenPrec, this.termNames = mm.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(mm, Tm, fm) {
        let hm = new Jm(this, mm, Tm, fm);
        for (let Am of this.wrappers) hm = Am(hm, mm, Tm, fm);
        return hm
      }
      getGoto(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = this.goto;
        if (Tm >= hm[0]) return -1;
        for (let Am = hm[Tm + 1];;) {
          let Tm = hm[Am++],
            am = 1 & Tm,
            xm = hm[Am++];
          if (am && fm) return xm;
          for (let fm = Am + (Tm >> 1); Am < fm; Am++)
            if (hm[Am] == mm) return xm;
          if (am) return -1
        }
      }
      hasAction(mm, Tm) {
        let fm = this.data;
        for (let hm = 0; hm < 2; hm++)
          for (let Am, am = this.stateSlot(mm, hm ? 2 : 1);; am += 3) {
            if (65535 == (Am = fm[am])) {
              if (1 != fm[am + 1]) {
                if (2 == fm[am + 1]) return bm(fm, am + 2);
                break
              }
              Am = fm[am = bm(fm, am + 2)]
            }
            if (Am == Tm || 0 == Am) return bm(fm, am + 1)
          }
        return 0
      }
      stateSlot(mm, Tm) {
        return this.states[6 * mm + Tm]
      }
      stateFlag(mm, Tm) {
        return (this.stateSlot(mm, 0) & Tm) > 0
      }
      validAction(mm, Tm) {
        return !!this.allActions(mm, (mm => mm == Tm || null))
      }
      allActions(mm, Tm) {
        let fm = this.stateSlot(mm, 4),
          hm = fm ? Tm(fm) : void 0;
        for (let Am = this.stateSlot(mm, 1); null == hm; Am += 3) {
          if (65535 == this.data[Am]) {
            if (1 != this.data[Am + 1]) break;
            Am = bm(this.data, Am + 2)
          }
          hm = Tm(bm(this.data, Am + 1))
        }
        return hm
      }
      nextStates(mm) {
        let Tm = [];
        for (let fm = this.stateSlot(mm, 1);; fm += 3) {
          if (65535 == this.data[fm]) {
            if (1 != this.data[fm + 1]) break;
            fm = bm(this.data, fm + 2)
          }
          if (0 == (1 & this.data[fm + 2])) {
            let mm = this.data[fm + 1];
            Tm.some(((Tm, fm) => 1 & fm && Tm == mm)) || Tm.push(this.data[fm], mm)
          }
        }
        return Tm
      }
      configure(mm) {
        let Tm = Object.assign(Object.create(km.prototype), this);
        if (mm.props && (Tm.nodeSet = this.nodeSet.extend(...mm.props)), mm.top) {
          let fm = this.topRules[mm.top];
          if (!fm) throw new RangeError(`Invalid top rule name ${mm.top}`);
          Tm.top = fm
        }
        return mm.tokenizers && (Tm.tokenizers = this.tokenizers.map((Tm => {
          let fm = mm.tokenizers.find((mm => mm.from == Tm));
          return fm ? fm.to : Tm
        }))), mm.specializers && (Tm.specializers = this.specializers.slice(), Tm.specializerSpecs = this.specializerSpecs.map(((fm, hm) => {
          let Am = mm.specializers.find((mm => mm.from == fm.external));
          if (!Am) return fm;
          let am = Object.assign(Object.assign({}, fm), {
            external: Am.to
          });
          return Tm.specializers[hm] = Sm(am), am
        }))), mm.contextTracker && (Tm.context = mm.contextTracker), mm.dialect && (Tm.dialect = this.parseDialect(mm.dialect)), null != mm.strict && (Tm.strict = mm.strict), mm.wrap && (Tm.wrappers = Tm.wrappers.concat(mm.wrap)), null != mm.bufferLength && (Tm.bufferLength = mm.bufferLength), Tm
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(mm) {
        return this.termNames ? this.termNames[mm] : String(mm <= this.maxNode && this.nodeSet.types[mm].name || mm)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(mm) {
        let Tm = this.dynamicPrecedences;
        return null == Tm ? 0 : Tm[mm] || 0
      }
      parseDialect(mm) {
        let Tm = Object.keys(this.dialects),
          fm = Tm.map((() => !1));
        if (mm)
          for (let Am of mm.split(" ")) {
            let mm = Tm.indexOf(Am);
            mm >= 0 && (fm[mm] = !0)
          }
        let hm = null;
        for (let Am = 0; Am < Tm.length; Am++)
          if (!fm[Am])
            for (let mm, fm = this.dialects[Tm[Am]]; 65535 != (mm = this.data[fm++]);)(hm || (hm = new Uint8Array(this.maxTerm + 1)))[mm] = 1;
        return new zm(mm, fm, hm)
      }
      static deserialize(mm) {
        return new km(mm)
      }
    }

    function bm(mm, Tm) {
      return mm[Tm] | mm[Tm + 1] << 16
    }

    function Sm(mm) {
      if (mm.external) {
        let Tm = mm.extend ? 1 : 0;
        return (fm, hm) => mm.external(fm, hm) << 1 | Tm
      }
      return mm.get
    }
    var em = fm(41387);
    const Nm = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      Gm = new class {
        constructor(mm) {
          this.start = mm.start, this.shift = mm.shift || Zm, this.reduce = mm.reduce || Zm, this.reuse = mm.reuse || Zm, this.hash = mm.hash || (() => 0), this.strict = !1 !== mm.strict
        }
      }({
        start: !1,
        shift: (mm, Tm) => 5 == Tm || 6 == Tm || 320 == Tm ? mm : 321 == Tm,
        strict: !1
      }),
      Xm = new Om(((mm, Tm) => {
        let {
          next: fm
        } = mm;
        (125 == fm || -1 == fm || Tm.context) && mm.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      Pm = new Om(((mm, Tm) => {
        let fm, {
          next: hm
        } = mm;
        Nm.indexOf(hm) > -1 || (47 != hm || 47 != (fm = mm.peek(1)) && 42 != fm) && (125 == hm || 59 == hm || -1 == hm || Tm.context || mm.acceptToken(316))
      }), {
        contextual: !0
      }),
      Hm = new Om(((mm, Tm) => {
        91 != mm.next || Tm.context || mm.acceptToken(317)
      }), {
        contextual: !0
      }),
      ym = new Om(((mm, Tm) => {
        let {
          next: fm
        } = mm;
        if (43 == fm || 45 == fm) {
          if (mm.advance(), fm == mm.next) {
            mm.advance();
            let fm = !Tm.context && Tm.canShift(1);
            mm.acceptToken(fm ? 1 : 2)
          }
        } else 63 == fm && 46 == mm.peek(1) && (mm.advance(), mm.advance(), (mm.next < 48 || mm.next > 57) && mm.acceptToken(3))
      }), {
        contextual: !0
      });

    function Cm(mm, Tm) {
      return mm >= 65 && mm <= 90 || mm >= 97 && mm <= 122 || 95 == mm || mm >= 192 || !Tm && mm >= 48 && mm <= 57
    }
    const rm = new Om(((mm, Tm) => {
        if (60 != mm.next || !Tm.dialectEnabled(0)) return;
        if (mm.advance(), 47 == mm.next) return;
        let fm = 0;
        for (; Nm.indexOf(mm.next) > -1;) mm.advance(), fm++;
        if (Cm(mm.next, !0)) {
          for (mm.advance(), fm++; Cm(mm.next, !1);) mm.advance(), fm++;
          for (; Nm.indexOf(mm.next) > -1;) mm.advance(), fm++;
          if (44 == mm.next) return;
          for (let Tm = 0;; Tm++) {
            if (7 == Tm) {
              if (!Cm(mm.next, !0)) return;
              break
            }
            if (mm.next != "extends".charCodeAt(Tm)) break;
            mm.advance(), fm++
          }
        }
        mm.acceptToken(4, -fm)
      })),
      sm = (0, em.g)({
        "get set async static": em.l.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": em.l.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": em.l.operatorKeyword,
        "let var const using function class extends": em.l.definitionKeyword,
        "import export from": em.l.moduleKeyword,
        "with debugger new": em.l.keyword,
        TemplateString: em.l.special(em.l.string),
        super: em.l.atom,
        BooleanLiteral: em.l.bool,
        this: em.l.self,
        null: em.l.null,
        Star: em.l.modifier,
        VariableName: em.l.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": em.l.function(em.l.variableName),
        VariableDefinition: em.l.definition(em.l.variableName),
        Label: em.l.labelName,
        PropertyName: em.l.propertyName,
        PrivatePropertyName: em.l.special(em.l.propertyName),
        "CallExpression/MemberExpression/PropertyName": em.l.function(em.l.propertyName),
        "FunctionDeclaration/VariableDefinition": em.l.function(em.l.definition(em.l.variableName)),
        "ClassDeclaration/VariableDefinition": em.l.definition(em.l.className),
        "NewExpression/VariableName": em.l.className,
        PropertyDefinition: em.l.definition(em.l.propertyName),
        PrivatePropertyDefinition: em.l.definition(em.l.special(em.l.propertyName)),
        UpdateOp: em.l.updateOperator,
        "LineComment Hashbang": em.l.lineComment,
        BlockComment: em.l.blockComment,
        Number: em.l.number,
        String: em.l.string,
        Escape: em.l.escape,
        ArithOp: em.l.arithmeticOperator,
        LogicOp: em.l.logicOperator,
        BitOp: em.l.bitwiseOperator,
        CompareOp: em.l.compareOperator,
        RegExp: em.l.regexp,
        Equals: em.l.definitionOperator,
        Arrow: em.l.function(em.l.punctuation),
        ": Spread": em.l.punctuation,
        "( )": em.l.paren,
        "[ ]": em.l.squareBracket,
        "{ }": em.l.brace,
        "InterpolationStart InterpolationEnd": em.l.special(em.l.brace),
        ".": em.l.derefOperator,
        ", ;": em.l.separator,
        "@": em.l.meta,
        TypeName: em.l.typeName,
        TypeDefinition: em.l.definition(em.l.typeName),
        "type enum interface implements namespace module declare": em.l.definitionKeyword,
        "abstract global Privacy readonly override": em.l.modifier,
        "is keyof unique infer asserts": em.l.operatorKeyword,
        JSXAttributeValue: em.l.attributeValue,
        JSXText: em.l.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": em.l.angleBracket,
        "JSXIdentifier JSXNameSpacedName": em.l.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": em.l.attributeName,
        "JSXBuiltin/JSXIdentifier": em.l.standard(em.l.tagName)
      }),
      lm = {
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
      Mm = {
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
      um = {
        __proto__: null,
        "<": 193
      },
      Bm = km.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: Gm,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [sm],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [Pm, Hm, ym, rm, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Xm, new om("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new om("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: mm => lm[mm] || -1
        }, {
          term: 343,
          get: mm => Mm[mm] || -1
        }, {
          term: 95,
          get: mm => um[mm] || -1
        }],
        tokenPrec: 15201
      });
    var Lm = fm(41376),
      tm = fm(41356),
      Um = fm(41361),
      dm = fm(41350);
    const gm = [(0, dm.t)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, dm.t)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, dm.t)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, dm.t)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, dm.t)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, dm.t)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, dm.t)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, dm.t)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, dm.t)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, dm.t)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, dm.t)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      Wm = gm.concat([(0, dm.t)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, dm.t)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, dm.t)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      Fm = new hm.k,
      mT = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function TT(mm) {
      return (Tm, fm) => {
        let hm = Tm.node.getChild("VariableDefinition");
        return hm && fm(hm, mm), !0
      }
    }
    const fT = ["FunctionDeclaration"],
      hT = {
        FunctionDeclaration: TT("function"),
        ClassDeclaration: TT("class"),
        ClassExpression: () => !0,
        EnumDeclaration: TT("constant"),
        TypeAliasDeclaration: TT("type"),
        NamespaceDeclaration: TT("namespace"),
        VariableDefinition(mm, Tm) {
          mm.matchContext(fT) || Tm(mm, "variable")
        },
        TypeDefinition(mm, Tm) {
          Tm(mm, "type")
        },
        __proto__: null
      };

    function AT(mm, Tm) {
      let fm = Fm.get(Tm);
      if (fm) return fm;
      let Am = [],
        am = !0;

      function xm(Tm, fm) {
        let hm = mm.sliceString(Tm.from, Tm.to);
        Am.push({
          label: hm,
          type: fm
        })
      }
      return Tm.cursor(hm.f.IncludeAnonymous).iterate((Tm => {
        if (am) am = !1;
        else if (Tm.name) {
          let mm = hT[Tm.name];
          if (mm && mm(Tm, xm) || mT.has(Tm.name)) return !1
        } else if (Tm.to - Tm.from > 8192) {
          for (let fm of AT(mm, Tm.node)) Am.push(fm);
          return !1
        }
      })), Fm.set(Tm, Am), Am
    }
    const aT = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      xT = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function wT(mm) {
      let Tm = (0, Lm.ob)(mm.state).resolveInner(mm.pos, -1);
      if (xT.indexOf(Tm.name) > -1) return null;
      let fm = "VariableName" == Tm.name || Tm.to - Tm.from < 20 && aT.test(mm.state.sliceDoc(Tm.from, Tm.to));
      if (!fm && !mm.explicit) return null;
      let hm = [];
      for (let Am = Tm; Am; Am = Am.parent) mT.has(Am.name) && (hm = hm.concat(AT(mm.state.doc, Am)));
      return {
        options: hm,
        from: fm ? Tm.from : mm.pos,
        validFor: aT
      }
    }
    const DT = Lm.j.define({
        name: "javascript",
        parser: Bm.configure({
          props: [Lm._.add({
            IfStatement: (0, Lm.u)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, Lm.u)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: Lm.E,
            SwitchBody: mm => {
              let Tm = mm.textAfter,
                fm = /^\s*\}/.test(Tm),
                hm = /^\s*(case|default)\b/.test(Tm);
              return mm.baseIndent + (fm ? 0 : hm ? 1 : 2) * mm.unit
            },
            Block: (0, Lm.B)({
              closing: "}"
            }),
            ArrowFunction: mm => mm.baseIndent + mm.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, Lm.u)({
              except: /^\s*{/
            }),
            JSXElement(mm) {
              let Tm = /^\s*<\//.test(mm.textAfter);
              return mm.lineIndent(mm.node.from) + (Tm ? 0 : mm.unit)
            },
            JSXEscape(mm) {
              let Tm = /\s*\}/.test(mm.textAfter);
              return mm.lineIndent(mm.node.from) + (Tm ? 0 : mm.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": mm => mm.column(mm.node.from) + mm.unit
          }), Lm.N.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": Lm.H,
            BlockComment: mm => ({
              from: mm.from + 2,
              to: mm.to - 2
            }),
            JSXElement(mm) {
              let Tm = mm.firstChild;
              if (!Tm || "JSXSelfClosingTag" == Tm.name) return null;
              let fm = mm.lastChild;
              return {
                from: Tm.to,
                to: fm.type.isError ? mm.to : fm.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(mm) {
              var Tm;
              let fm = null === (Tm = mm.firstChild) || void 0 === Tm ? void 0 : Tm.nextSibling,
                hm = mm.lastChild;
              return !fm || fm.type.isError ? null : {
                from: fm.to,
                to: hm.type.isError ? mm.to : hm.from
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
      iT = {
        test: mm => /^JSX/.test(mm.name),
        facet: (0, Lm.y)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      RT = DT.configure({
        dialect: "ts"
      }, "typescript"),
      pT = DT.configure({
        dialect: "jsx",
        props: [Lm.ib.add((mm => mm.isTop ? [iT] : void 0))]
      }),
      ET = DT.configure({
        dialect: "jsx ts",
        props: [Lm.ib.add((mm => mm.isTop ? [iT] : void 0))]
      }, "typescript");
    let oT = mm => ({
      label: mm,
      type: "keyword"
    });
    const OT = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(oT),
      YT = OT.concat(["declare", "implements", "private", "protected", "public"].map(oT));

    function qT() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Tm = mm.jsx ? mm.typescript ? ET : pT : mm.typescript ? RT : DT,
        fm = mm.typescript ? Wm.concat(YT) : gm.concat(OT);
      return new Lm.n(Tm, [DT.data.of({
        autocomplete: (0, dm.p)(xT, (0, dm.j)(fm))
      }), DT.data.of({
        autocomplete: wT
      }), mm.jsx ? IT : []])
    }

    function jT(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mm.length;
      for (let hm = null === Tm || void 0 === Tm ? void 0 : Tm.firstChild; hm; hm = hm.nextSibling)
        if ("JSXIdentifier" == hm.name || "JSXBuiltin" == hm.name || "JSXNamespacedName" == hm.name || "JSXMemberExpression" == hm.name) return mm.sliceString(hm.from, Math.min(hm.to, fm));
      return ""
    }
    const VT = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      IT = Um.f.inputHandler.of(((mm, Tm, fm, hm, Am) => {
        if ((VT ? mm.composing : mm.compositionStarted) || mm.state.readOnly || Tm != fm || ">" != hm && "/" != hm || !DT.isActiveAt(mm.state, Tm, -1)) return !1;
        let am = Am(),
          {
            state: xm
          } = am,
          wm = xm.changeByRange((mm => {
            var Tm;
            let fm, {
                head: Am
              } = mm,
              am = (0, Lm.ob)(xm).resolveInner(Am - 1, -1);
            if ("JSXStartTag" == am.name && (am = am.parent), xm.doc.sliceString(Am - 1, Am) != hm || "JSXAttributeValue" == am.name && am.to > Am);
            else {
              if (">" == hm && "JSXFragmentTag" == am.name) return {
                range: mm,
                changes: {
                  from: Am,
                  insert: "</>"
                }
              };
              if ("/" == hm && "JSXStartCloseTag" == am.name) {
                let mm = am.parent,
                  hm = mm.parent;
                if (hm && mm.from == Am - 2 && ((fm = jT(xm.doc, hm.firstChild, Am)) || "JSXFragmentTag" == (null === (Tm = hm.firstChild) || void 0 === Tm ? void 0 : Tm.name))) {
                  let mm = `${fm}>`;
                  return {
                    range: tm.o.cursor(Am + mm.length, -1),
                    changes: {
                      from: Am,
                      insert: mm
                    }
                  }
                }
              } else if (">" == hm) {
                let Tm = function(mm) {
                  for (;;) {
                    if ("JSXOpenTag" == mm.name || "JSXSelfClosingTag" == mm.name || "JSXFragmentTag" == mm.name) return mm;
                    if ("JSXEscape" == mm.name || !mm.parent) return null;
                    mm = mm.parent
                  }
                }(am);
                if (Tm && "JSXOpenTag" == Tm.name && !/^\/?>|^<\//.test(xm.doc.sliceString(Am, Am + 2)) && (fm = jT(xm.doc, Tm, Am))) return {
                  range: mm,
                  changes: {
                    from: Am,
                    insert: `</${fm}>`
                  }
                }
              }
            }
            return {
              range: mm
            }
          }));
        return !wm.changes.empty && (mm.dispatch([am, xm.update(wm, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41376: (mm, Tm, fm) => {
    fm.d(Tm, {
      B: () => lm,
      E: () => um,
      F: () => IT,
      H: () => gm,
      K: () => RT,
      N: () => dm,
      R: () => jm,
      T: () => em,
      W: () => Gm,
      _: () => Pm,
      ab: () => tm,
      bb: () => Nm,
      cb: () => Sm,
      d: () => QT,
      gb: () => uT,
      h: () => Xm,
      ib: () => pm,
      j: () => Om,
      kb: () => zT,
      lb: () => qm,
      n: () => km,
      ob: () => Ym,
      r: () => rT,
      u: () => Bm,
      v: () => bT,
      y: () => Rm
    });
    var hm, Am = fm(41379),
      am = fm(41356),
      xm = fm(41361),
      wm = fm(41387),
      Dm = fm(41369);
    const im = new Am.h;

    function Rm(mm) {
      return am.s.define({
        combine: mm ? Tm => Tm.concat(mm) : void 0
      })
    }
    const pm = new Am.h;
    class Em {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = mm, this.name = hm, am.q.prototype.hasOwnProperty("tree") || Object.defineProperty(am.q.prototype, "tree", {
          get() {
            return Ym(this)
          }
        }), this.parser = Tm, this.extension = [Zm.of(this), am.q.languageData.of(((mm, Tm, fm) => {
          let hm = om(mm, Tm, fm),
            Am = hm.type.prop(im);
          if (!Am) return [];
          let am = mm.facet(Am),
            xm = hm.type.prop(pm);
          if (xm) {
            let Am = hm.resolve(Tm - hm.from, fm);
            for (let Tm of xm)
              if (Tm.test(Am, mm)) {
                let fm = mm.facet(Tm.facet);
                return "replace" == Tm.type ? fm : fm.concat(am)
              }
          }
          return am
        }))].concat(fm)
      }
      isActiveAt(mm, Tm) {
        return om(mm, Tm, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(im) == this.data
      }
      findRegions(mm) {
        let Tm = mm.facet(Zm);
        if ((null === Tm || void 0 === Tm ? void 0 : Tm.data) == this.data) return [{
          from: 0,
          to: mm.doc.length
        }];
        if (!Tm || !Tm.allowsNesting) return [];
        let fm = [],
          hm = (mm, Tm) => {
            if (mm.prop(im) == this.data) return void fm.push({
              from: Tm,
              to: Tm + mm.length
            });
            let am = mm.prop(Am.h.mounted);
            if (am) {
              if (am.tree.prop(im) == this.data) {
                if (am.overlay)
                  for (let mm of am.overlay) fm.push({
                    from: mm.from + Tm,
                    to: mm.to + Tm
                  });
                else fm.push({
                  from: Tm,
                  to: Tm + mm.length
                });
                return
              }
              if (am.overlay) {
                let mm = fm.length;
                if (hm(am.tree, am.overlay[0].from + Tm), fm.length > mm) return
              }
            }
            for (let fm = 0; fm < mm.children.length; fm++) {
              let am = mm.children[fm];
              am instanceof Am.t && hm(am, mm.positions[fm] + Tm)
            }
          };
        return hm(Ym(mm), 0), fm
      }
      get allowsNesting() {
        return !0
      }
    }

    function om(mm, Tm, fm) {
      let hm = mm.facet(Zm),
        am = Ym(mm).topNode;
      if (!hm || hm.allowsNesting)
        for (let xm = am; xm; xm = xm.enter(Tm, fm, Am.f.ExcludeBuffers | Am.f.EnterBracketed)) xm.type.isTop && (am = xm);
      return am
    }
    Em.setState = am.J.define();
    class Om extends Em {
      constructor(mm, Tm, fm) {
        super(mm, Tm, [], fm), this.parser = Tm
      }
      static define(mm) {
        let Tm = Rm(mm.languageData);
        return new Om(Tm, mm.parser.configure({
          props: [im.add((mm => mm.isTop ? Tm : void 0))]
        }), mm.name)
      }
      configure(mm, Tm) {
        return new Om(this.data, this.parser.configure(mm), Tm || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Ym(mm) {
      let Tm = mm.field(Em.state, !1);
      return Tm ? Tm.tree : Am.t.empty
    }

    function qm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm.doc.length;
      var fm;
      return (null === (fm = mm.field(Em.state, !1)) || void 0 === fm ? void 0 : fm.context.isDone(Tm)) || !1
    }

    function jm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm.viewport.to,
        fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        hm = function(mm, Tm) {
          let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var hm;
          let Am = null === (hm = mm.field(Em.state, !1)) || void 0 === hm ? void 0 : hm.context;
          if (!Am) return null;
          let am = Am.viewport;
          Am.updateViewport({
            from: 0,
            to: Tm
          });
          let xm = Am.isDone(Tm) || Am.work(fm, Tm) ? Am.tree : null;
          return Am.updateViewport(am), xm
        }(mm.state, Tm, fm);
      return hm != Ym(mm.state) && mm.dispatch({}), !!hm
    }
    class Vm {
      constructor(mm) {
        this.doc = mm, this.cursorPos = 0, this.string = "", this.cursor = mm.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(mm) {
        return this.string = this.cursor.next(mm - this.cursorPos).value, this.cursorPos = mm + this.string.length, this.cursorPos - this.string.length
      }
      chunk(mm) {
        return this.syncTo(mm), this.string
      }
      get lineChunks() {
        return !0
      }
      read(mm, Tm) {
        let fm = this.cursorPos - this.string.length;
        return mm < fm || Tm >= this.cursorPos ? this.doc.sliceString(mm, Tm) : this.string.slice(mm - fm, Tm - fm)
      }
    }
    let Im = null;
    class Km {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          hm = arguments.length > 3 ? arguments[3] : void 0,
          Am = arguments.length > 4 ? arguments[4] : void 0,
          am = arguments.length > 5 ? arguments[5] : void 0,
          xm = arguments.length > 6 ? arguments[6] : void 0,
          wm = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = mm, this.state = Tm, this.fragments = fm, this.tree = hm, this.treeLen = Am, this.viewport = am, this.skipped = xm, this.scheduleOn = wm, this.parse = null, this.tempSkipped = []
      }
      static create(mm, Tm, fm) {
        return new Km(mm, Tm, [], Am.t.empty, 0, fm, [], null)
      }
      startParse() {
        return this.parser.startParse(new Vm(this.state.doc), this.fragments)
      }
      work(mm, Tm) {
        return null != Tm && Tm >= this.state.doc.length && (Tm = void 0), this.tree != Am.t.empty && this.isDone(null !== Tm && void 0 !== Tm ? Tm : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var fm;
          if ("number" == typeof mm) {
            let Tm = Date.now() + mm;
            mm = () => Date.now() > Tm
          }
          for (this.parse || (this.parse = this.startParse()), null != Tm && (null == this.parse.stoppedAt || this.parse.stoppedAt > Tm) && Tm < this.state.doc.length && this.parse.stopAt(Tm);;) {
            let hm = this.parse.advance();
            if (hm) {
              if (this.fragments = this.withoutTempSkipped(Am.q.addTree(hm, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (fm = this.parse.stoppedAt) && void 0 !== fm ? fm : this.state.doc.length, this.tree = hm, this.parse = null, !(this.treeLen < (null !== Tm && void 0 !== Tm ? Tm : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (mm()) return !1
          }
        }))
      }
      takeTree() {
        let mm, Tm;
        this.parse && (mm = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > mm) && this.parse.stopAt(mm), this.withContext((() => {
          for (; !(Tm = this.parse.advance()););
        })), this.treeLen = mm, this.tree = Tm, this.fragments = this.withoutTempSkipped(Am.q.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(mm) {
        let Tm = Im;
        Im = this;
        try {
          return mm()
        } finally {
          Im = Tm
        }
      }
      withoutTempSkipped(mm) {
        for (let Tm; Tm = this.tempSkipped.pop();) mm = Qm(mm, Tm.from, Tm.to);
        return mm
      }
      changes(mm, Tm) {
        let {
          fragments: fm,
          tree: hm,
          treeLen: am,
          viewport: xm,
          skipped: wm
        } = this;
        if (this.takeTree(), !mm.empty) {
          let Tm = [];
          if (mm.iterChangedRanges(((mm, fm, hm, Am) => Tm.push({
              fromA: mm,
              toA: fm,
              fromB: hm,
              toB: Am
            }))), fm = Am.q.applyChanges(fm, Tm), hm = Am.t.empty, am = 0, xm = {
              from: mm.mapPos(xm.from, -1),
              to: mm.mapPos(xm.to, 1)
            }, this.skipped.length) {
            wm = [];
            for (let Tm of this.skipped) {
              let fm = mm.mapPos(Tm.from, 1),
                hm = mm.mapPos(Tm.to, -1);
              fm < hm && wm.push({
                from: fm,
                to: hm
              })
            }
          }
        }
        return new Km(this.parser, Tm, fm, hm, am, xm, wm, this.scheduleOn)
      }
      updateViewport(mm) {
        if (this.viewport.from == mm.from && this.viewport.to == mm.to) return !1;
        this.viewport = mm;
        let Tm = this.skipped.length;
        for (let fm = 0; fm < this.skipped.length; fm++) {
          let {
            from: Tm,
            to: hm
          } = this.skipped[fm];
          Tm < mm.to && hm > mm.from && (this.fragments = Qm(this.fragments, Tm, hm), this.skipped.splice(fm--, 1))
        }
        return !(this.skipped.length >= Tm) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(mm, Tm) {
        this.skipped.push({
          from: mm,
          to: Tm
        })
      }
      static getSkippingParser(mm) {
        return new class extends Am.n {
          createParse(Tm, fm, hm) {
            let am = hm[0].from,
              xm = hm[hm.length - 1].to;
            return {
              parsedPos: am,
              advance() {
                let Tm = Im;
                if (Tm) {
                  for (let mm of hm) Tm.tempSkipped.push(mm);
                  mm && (Tm.scheduleOn = Tm.scheduleOn ? Promise.all([Tm.scheduleOn, mm]) : mm)
                }
                return this.parsedPos = xm, new Am.t(Am.j.none, [], [], xm - am)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(mm) {
        mm = Math.min(mm, this.state.doc.length);
        let Tm = this.fragments;
        return this.treeLen >= mm && Tm.length && 0 == Tm[0].from && Tm[0].to >= mm
      }
      static get() {
        return Im
      }
    }

    function Qm(mm, Tm, fm) {
      return Am.q.applyChanges(mm, [{
        fromA: Tm,
        toA: fm,
        fromB: Tm,
        toB: fm
      }])
    }
    class nm {
      constructor(mm) {
        this.context = mm, this.tree = mm.tree
      }
      apply(mm) {
        if (!mm.docChanged && this.tree == this.context.tree) return this;
        let Tm = this.context.changes(mm.changes, mm.state),
          fm = this.context.treeLen == mm.startState.doc.length ? void 0 : Math.max(mm.changes.mapPos(this.context.treeLen), Tm.viewport.to);
        return Tm.work(20, fm) || Tm.takeTree(), new nm(Tm)
      }
      static init(mm) {
        let Tm = Math.min(3e3, mm.doc.length),
          fm = Km.create(mm.facet(Zm).parser, mm, {
            from: 0,
            to: Tm
          });
        return fm.work(20, Tm) || fm.takeTree(), new nm(fm)
      }
    }
    Em.state = am.M.define({
      create: nm.init,
      update(mm, Tm) {
        for (let fm of Tm.effects)
          if (fm.is(Em.setState)) return fm.value;
        return Tm.startState.facet(Zm) != Tm.state.facet(Zm) ? nm.init(Tm.state) : mm.apply(Tm)
      }
    });
    let Jm = mm => {
      let Tm = setTimeout((() => mm()), 500);
      return () => clearTimeout(Tm)
    };
    "undefined" != typeof requestIdleCallback && (Jm = mm => {
      let Tm = -1,
        fm = setTimeout((() => {
          Tm = requestIdleCallback(mm, {
            timeout: 400
          })
        }), 100);
      return () => Tm < 0 ? clearTimeout(fm) : cancelIdleCallback(Tm)
    });
    const cm = "undefined" != typeof navigator && (null === (hm = navigator.scheduling) || void 0 === hm ? void 0 : hm.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      zm = xm.h.fromClass(class {
        constructor(mm) {
          this.view = mm, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(mm) {
          let Tm = this.view.state.field(Em.state).context;
          (Tm.updateViewport(mm.view.viewport) || this.view.viewport.to > Tm.treeLen) && this.scheduleWork(), (mm.docChanged || mm.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(Tm)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: mm
          } = this.view, Tm = mm.field(Em.state);
          Tm.tree == Tm.context.tree && Tm.context.isDone(mm.doc.length) || (this.working = Jm(this.work))
        }
        work(mm) {
          this.working = null;
          let Tm = Date.now();
          if (this.chunkEnd < Tm && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = Tm + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: fm,
            viewport: {
              to: hm
            }
          } = this.view, Am = fm.field(Em.state);
          if (Am.tree == Am.context.tree && Am.context.isDone(hm + 1e5)) return;
          let am = Date.now() + Math.min(this.chunkBudget, 100, mm && !cm ? Math.max(25, mm.timeRemaining() - 5) : 1e9),
            xm = Am.context.treeLen < hm && fm.doc.length > hm + 1e3,
            wm = Am.context.work((() => cm && cm() || Date.now() > am), hm + (xm ? 0 : 1e5));
          this.chunkBudget -= Date.now() - Tm, (wm || this.chunkBudget <= 0) && (Am.context.takeTree(), this.view.dispatch({
            effects: Em.setState.of(new nm(Am.context))
          })), this.chunkBudget > 0 && (!wm || xm) && this.scheduleWork(), this.checkAsyncSchedule(Am.context)
        }
        checkAsyncSchedule(mm) {
          mm.scheduleOn && (this.workScheduled++, mm.scheduleOn.then((() => this.scheduleWork())).catch((mm => (0, xm.S)(this.view.state, mm))).then((() => this.workScheduled--)), mm.scheduleOn = null)
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
      Zm = am.s.define({
        combine: mm => mm.length ? mm[0] : null,
        enables: mm => [Em.state, zm, xm.f.contentAttributes.compute([mm], (Tm => {
          let fm = Tm.facet(mm);
          return fm && fm.name ? {
            "data-language": fm.name
          } : {}
        }))]
      });
    class km {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = mm, this.support = Tm, this.extension = [mm, Tm]
      }
    }
    const bm = am.s.define(),
      Sm = am.s.define({
        combine: mm => {
          if (!mm.length) return "  ";
          let Tm = mm[0];
          if (!Tm || /\S/.test(Tm) || Array.from(Tm).some((mm => mm != Tm[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(mm[0]));
          return Tm
        }
      });

    function em(mm) {
      let Tm = mm.facet(Sm);
      return 9 == Tm.charCodeAt(0) ? mm.tabSize * Tm.length : Tm.length
    }

    function Nm(mm, Tm) {
      let fm = "",
        hm = mm.tabSize,
        Am = mm.facet(Sm)[0];
      if ("\t" == Am) {
        for (; Tm >= hm;) fm += "\t", Tm -= hm;
        Am = " "
      }
      for (let am = 0; am < Tm; am++) fm += Am;
      return fm
    }

    function Gm(mm, Tm) {
      mm instanceof am.q && (mm = new Xm(mm));
      for (let hm of mm.state.facet(bm)) {
        let fm = hm(mm, Tm);
        if (void 0 !== fm) return fm
      }
      let fm = Ym(mm.state);
      return fm.length >= Tm ? function(mm, Tm, fm) {
        let hm = Tm.resolveStack(fm),
          Am = Tm.resolveInner(fm, -1).resolve(fm, 0).enterUnfinishedNodesBefore(fm);
        if (Am != hm.node) {
          let mm = [];
          for (let Tm = Am; Tm && !(Tm.from < hm.node.from || Tm.to > hm.node.to || Tm.from == hm.node.from && Tm.type == hm.node.type); Tm = Tm.parent) mm.push(Tm);
          for (let Tm = mm.length - 1; Tm >= 0; Tm--) hm = {
            node: mm[Tm],
            next: hm
          }
        }
        return Hm(hm, mm, fm)
      }(mm, fm, Tm) : null
    }
    class Xm {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = mm, this.options = Tm, this.unit = em(mm)
      }
      lineAt(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          fm = this.state.doc.lineAt(mm),
          {
            simulateBreak: hm,
            simulateDoubleBreak: Am
          } = this.options;
        return null != hm && hm >= fm.from && hm <= fm.to ? Am && hm == mm ? {
          text: "",
          from: mm
        } : (Tm < 0 ? hm < mm : hm <= mm) ? {
          text: fm.text.slice(hm - fm.from),
          from: hm
        } : {
          text: fm.text.slice(0, hm - fm.from),
          from: fm.from
        } : fm
      }
      textAfterPos(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && mm == this.options.simulateBreak) return "";
        let {
          text: fm,
          from: hm
        } = this.lineAt(mm, Tm);
        return fm.slice(mm - hm, Math.min(fm.length, mm + 100 - hm))
      }
      column(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: fm,
            from: hm
          } = this.lineAt(mm, Tm),
          Am = this.countColumn(fm, mm - hm),
          am = this.options.overrideIndentation ? this.options.overrideIndentation(hm) : -1;
        return am > -1 && (Am += am - this.countColumn(fm, fm.search(/\S|$/))), Am
      }
      countColumn(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm.length;
        return (0, am.$)(mm, this.state.tabSize, Tm)
      }
      lineIndent(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: fm,
            from: hm
          } = this.lineAt(mm, Tm),
          Am = this.options.overrideIndentation;
        if (Am) {
          let mm = Am(hm);
          if (mm > -1) return mm
        }
        return this.countColumn(fm, fm.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const Pm = new Am.h;

    function Hm(mm, Tm, fm) {
      for (let hm = mm; hm; hm = hm.next) {
        let mm = ym(hm.node);
        if (mm) return mm(rm.create(Tm, fm, hm))
      }
      return 0
    }

    function ym(mm) {
      let Tm = mm.type.prop(Pm);
      if (Tm) return Tm;
      let fm, hm = mm.firstChild;
      if (hm && (fm = hm.type.prop(Am.h.closedBy))) {
        let Tm = mm.lastChild,
          hm = Tm && fm.indexOf(Tm.name) > -1;
        return mm => Mm(mm, !0, 1, void 0, hm && ! function(mm) {
          return mm.pos == mm.options.simulateBreak && mm.options.simulateDoubleBreak
        }(mm) ? Tm.from : void 0)
      }
      return null == mm.parent ? Cm : null
    }

    function Cm() {
      return 0
    }
    class rm extends Xm {
      constructor(mm, Tm, fm) {
        super(mm.state, mm.options), this.base = mm, this.pos = Tm, this.context = fm
      }
      get node() {
        return this.context.node
      }
      static create(mm, Tm, fm) {
        return new rm(mm, Tm, fm)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(mm) {
        let Tm = this.state.doc.lineAt(mm.from);
        for (;;) {
          let fm = mm.resolve(Tm.from);
          for (; fm.parent && fm.parent.from == fm.from;) fm = fm.parent;
          if (sm(fm, mm)) break;
          Tm = this.state.doc.lineAt(fm.from)
        }
        return this.lineIndent(Tm.from)
      }
      continue () {
        return Hm(this.context.next, this.base, this.pos)
      }
    }

    function sm(mm, Tm) {
      for (let fm = Tm; fm; fm = fm.parent)
        if (mm == fm) return !0;
      return !1
    }

    function lm(mm) {
      let {
        closing: Tm,
        align: fm = !0,
        units: hm = 1
      } = mm;
      return mm => Mm(mm, fm, hm, Tm)
    }

    function Mm(mm, Tm, fm, hm, Am) {
      let am = mm.textAfter,
        xm = am.match(/^\s*/)[0].length,
        wm = hm && am.slice(xm, xm + hm.length) == hm || Am == mm.pos + xm,
        Dm = Tm ? function(mm) {
          let Tm = mm.node,
            fm = Tm.childAfter(Tm.from),
            hm = Tm.lastChild;
          if (!fm) return null;
          let Am = mm.options.simulateBreak,
            am = mm.state.doc.lineAt(fm.from),
            xm = null == Am || Am <= am.from ? am.to : Math.min(am.to, Am);
          for (let wm = fm.to;;) {
            let mm = Tm.childAfter(wm);
            if (!mm || mm == hm) return null;
            if (!mm.type.isSkipped) {
              if (mm.from >= xm) return null;
              let Tm = /^ */.exec(am.text.slice(fm.to - am.from))[0].length;
              return {
                from: fm.from,
                to: fm.to + Tm
              }
            }
            wm = mm.to
          }
        }(mm) : null;
      return Dm ? wm ? mm.column(Dm.from) : mm.column(Dm.to) : mm.baseIndent + (wm ? 0 : mm.unit * fm)
    }
    const um = mm => mm.baseIndent;

    function Bm() {
      let {
        except: mm,
        units: Tm = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return fm => {
        let hm = mm && mm.test(fm.textAfter);
        return fm.baseIndent + (hm ? 0 : Tm * fm.unit)
      }
    }
    const Lm = 200;

    function tm() {
      return am.q.transactionFilter.of((mm => {
        if (!mm.docChanged || !mm.isUserEvent("input.type") && !mm.isUserEvent("input.complete")) return mm;
        let Tm = mm.startState.languageDataAt("indentOnInput", mm.startState.selection.main.head);
        if (!Tm.length) return mm;
        let fm = mm.newDoc,
          {
            head: hm
          } = mm.newSelection.main,
          Am = fm.lineAt(hm);
        if (hm > Am.from + Lm) return mm;
        let am = fm.sliceString(Am.from, hm);
        if (!Tm.some((mm => mm.test(am)))) return mm;
        let {
          state: xm
        } = mm, wm = -1, Dm = [];
        for (let {
            head: im
          }
          of xm.selection.mo) {
          let mm = xm.doc.lineAt(im);
          if (mm.from == wm) continue;
          wm = mm.from;
          let Tm = Gm(xm, mm.from);
          if (null == Tm) continue;
          let fm = /^\s*/.exec(mm.text)[0],
            hm = Nm(xm, Tm);
          fm != hm && Dm.push({
            from: mm.from,
            to: mm.from + fm.length,
            insert: hm
          })
        }
        return Dm.length ? [mm, {
          changes: Dm,
          sequential: !0
        }] : mm
      }))
    }
    const Um = am.s.define(),
      dm = new Am.h;

    function gm(mm) {
      let Tm = mm.firstChild,
        fm = mm.lastChild;
      return Tm && Tm.to < fm.from ? {
        from: Tm.to,
        to: fm.type.isError ? mm.to : fm.from
      } : null
    }

    function Wm(mm) {
      let Tm = mm.lastChild;
      return Tm && Tm.to == mm.to && Tm.type.isError
    }

    function Fm(mm, Tm, fm) {
      for (let hm of mm.facet(Um)) {
        let Am = hm(mm, Tm, fm);
        if (Am) return Am
      }
      return function(mm, Tm, fm) {
        let hm = Ym(mm);
        if (hm.length < fm) return null;
        let Am = null;
        for (let am = hm.resolveStack(fm, 1); am; am = am.next) {
          let xm = am.node;
          if (xm.to <= fm || xm.from > fm) continue;
          if (Am && xm.from < Tm) break;
          let wm = xm.type.prop(dm);
          if (wm && (xm.to < hm.length - 50 || hm.length == mm.doc.length || !Wm(xm))) {
            let hm = wm(xm, mm);
            hm && hm.from <= fm && hm.from >= Tm && hm.to > fm && (Am = hm)
          }
        }
        return Am
      }(mm, Tm, fm)
    }

    function mT(mm, Tm) {
      let fm = Tm.mapPos(mm.from, 1),
        hm = Tm.mapPos(mm.to, -1);
      return fm >= hm ? void 0 : {
        from: fm,
        to: hm
      }
    }
    const TT = am.J.define({
        map: mT
      }),
      fT = am.J.define({
        map: mT
      });

    function hT(mm) {
      let Tm = [];
      for (let {
          head: fm
        }
        of mm.state.selection.mo) Tm.some((mm => mm.from <= fm && mm.to >= fm)) || Tm.push(mm.lineBlockAt(fm));
      return Tm
    }
    const AT = am.M.define({
      create: () => xm.c.none,
      update(mm, Tm) {
        Tm.isUserEvent("delete") && Tm.changes.iterChangedRanges(((Tm, fm) => mm = aT(mm, Tm, fm))), mm = mm.map(Tm.changes);
        for (let fm of Tm.effects)
          if (fm.is(TT) && !wT(mm, fm.value.from, fm.value.to)) {
            let {
              preparePlaceholder: hm
            } = Tm.state.facet(ET), Am = hm ? xm.c.replace({
              widget: new qT(hm(Tm.state, fm.value))
            }) : YT;
            mm = mm.update({
              add: [Am.range(fm.value.from, fm.value.to)]
            })
          } else fm.is(fT) && (mm = mm.update({
            filter: (mm, Tm) => fm.value.from != mm || fm.value.to != Tm,
            filterFrom: fm.value.from,
            filterTo: fm.value.to
          }));
        return Tm.selection && (mm = aT(mm, Tm.selection.main.head)), mm
      },
      provide: mm => xm.f.Ym.from(mm),
      toJSON(mm, Tm) {
        let fm = [];
        return mm.between(0, Tm.doc.length, ((mm, Tm) => {
          fm.push(mm, Tm)
        })), fm
      },
      fromJSON(mm) {
        if (!Array.isArray(mm) || mm.length % 2) throw new RangeError("Invalid JSON for fold state");
        let Tm = [];
        for (let fm = 0; fm < mm.length;) {
          let hm = mm[fm++],
            Am = mm[fm++];
          if ("number" != typeof hm || "number" != typeof Am) throw new RangeError("Invalid JSON for fold state");
          Tm.push(YT.range(hm, Am))
        }
        return xm.c.set(Tm, !0)
      }
    });

    function aT(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tm,
        hm = !1;
      return mm.between(Tm, fm, ((mm, Am) => {
        mm < fm && Am > Tm && (hm = !0)
      })), hm ? mm.update({
        filterFrom: Tm,
        filterTo: fm,
        filter: (mm, hm) => mm >= fm || hm <= Tm
      }) : mm
    }

    function xT(mm, Tm, fm) {
      var hm;
      let Am = null;
      return null === (hm = mm.field(AT, !1)) || void 0 === hm || hm.between(Tm, fm, ((mm, Tm) => {
        (!Am || Am.from > mm) && (Am = {
          from: mm,
          to: Tm
        })
      })), Am
    }

    function wT(mm, Tm, fm) {
      let hm = !1;
      return mm.between(Tm, Tm, ((mm, Am) => {
        mm == Tm && Am == fm && (hm = !0)
      })), hm
    }

    function DT(mm, Tm) {
      return mm.field(AT, !1) ? Tm : Tm.concat(am.J.appendConfig.of(oT()))
    }

    function iT(mm, Tm) {
      let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        hm = mm.state.doc.lineAt(Tm.from).number,
        Am = mm.state.doc.lineAt(Tm.to).number;
      return xm.f.announce.of(`${mm.state.phrase(fm?"Folded lines":"Unfolded lines")} ${hm} ${mm.state.phrase("to")} ${Am}.`)
    }
    const RT = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: mm => {
          for (let Tm of hT(mm)) {
            let fm = Fm(mm.state, Tm.from, Tm.to);
            if (fm) return mm.dispatch({
              effects: DT(mm.state, [TT.of(fm), iT(mm, fm)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: mm => {
          if (!mm.state.field(AT, !1)) return !1;
          let Tm = [];
          for (let fm of hT(mm)) {
            let hm = xT(mm.state, fm.from, fm.to);
            hm && Tm.push(fT.of(hm), iT(mm, hm, !1))
          }
          return Tm.length && mm.dispatch({
            effects: Tm
          }), Tm.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: mm => {
          let {
            state: Tm
          } = mm, fm = [];
          for (let hm = 0; hm < Tm.doc.length;) {
            let Am = mm.lineBlockAt(hm),
              am = Fm(Tm, Am.from, Am.to);
            am && fm.push(TT.of(am)), hm = (am ? mm.lineBlockAt(am.to) : Am).to + 1
          }
          return fm.length && mm.dispatch({
            effects: DT(mm.state, fm)
          }), !!fm.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: mm => {
          let Tm = mm.state.field(AT, !1);
          if (!Tm || !Tm.size) return !1;
          let fm = [];
          return Tm.between(0, mm.state.doc.length, ((mm, Tm) => {
            fm.push(fT.of({
              from: mm,
              to: Tm
            }))
          })), mm.dispatch({
            effects: fm
          }), !0
        }
      }],
      pT = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      ET = am.s.define({
        combine: mm => (0, am.Y)(mm, pT)
      });

    function oT(mm) {
      let Tm = [AT, KT];
      return mm && Tm.push(ET.of(mm)), Tm
    }

    function OT(mm, Tm) {
      let {
        state: fm
      } = mm, hm = fm.facet(ET), Am = Tm => {
        let fm = mm.lineBlockAt(mm.posAtDOM(Tm.target)),
          hm = xT(mm.state, fm.from, fm.to);
        hm && mm.dispatch({
          effects: fT.of(hm)
        }), Tm.preventDefault()
      };
      if (hm.placeholderDOM) return hm.placeholderDOM(mm, Am, Tm);
      let am = document.createElement("span");
      return am.textContent = hm.placeholderText, am.setAttribute("aria-label", fm.phrase("folded code")), am.title = fm.phrase("unfold"), am.className = "cm-foldPlaceholder", am.onclick = Am, am
    }
    const YT = xm.c.replace({
      widget: new class extends xm.k {
        toDOM(mm) {
          return OT(mm, null)
        }
      }
    });
    class qT extends xm.k {
      constructor(mm) {
        super(), this.value = mm
      }
      eq(mm) {
        return this.value == mm.value
      }
      toDOM(mm) {
        return OT(mm, this.value)
      }
    }
    const jT = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class VT extends xm.g {
      constructor(mm, Tm) {
        super(), this.config = mm, this.open = Tm
      }
      eq(mm) {
        return this.config == mm.config && this.open == mm.open
      }
      toDOM(mm) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let Tm = document.createElement("span");
        return Tm.textContent = this.open ? this.config.openText : this.config.closedText, Tm.title = mm.state.phrase(this.open ? "Fold line" : "Unfold line"), Tm
      }
    }

    function IT() {
      let mm = {
          ...jT,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        Tm = new VT(mm, !0),
        fm = new VT(mm, !1),
        hm = xm.h.fromClass(class {
          constructor(mm) {
            this.from = mm.viewport.from, this.markers = this.buildMarkers(mm)
          }
          update(Tm) {
            (Tm.docChanged || Tm.viewportChanged || Tm.startState.facet(Zm) != Tm.state.facet(Zm) || Tm.startState.field(AT, !1) != Tm.state.field(AT, !1) || Ym(Tm.startState) != Ym(Tm.state) || mm.foldingChanged(Tm)) && (this.markers = this.buildMarkers(Tm.view))
          }
          buildMarkers(mm) {
            let hm = new am.y;
            for (let Am of mm.viewportLineBlocks) {
              let am = xT(mm.state, Am.from, Am.to) ? fm : Fm(mm.state, Am.from, Am.to) ? Tm : null;
              am && hm.add(Am.from, Am.from, am)
            }
            return hm.finish()
          }
        }),
        {
          domEventHandlers: Am
        } = mm;
      return [hm, (0, xm.x)({
        class: "cm-foldGutter",
        markers(mm) {
          var Tm;
          return (null === (Tm = mm.plugin(hm)) || void 0 === Tm ? void 0 : Tm.markers) || am.C.empty
        },
        initialSpacer: () => new VT(mm, !1),
        domEventHandlers: {
          ...Am,
          click: (mm, Tm, fm) => {
            if (Am.click && Am.click(mm, Tm, fm)) return !0;
            let hm = xT(mm.state, Tm.from, Tm.to);
            if (hm) return mm.dispatch({
              effects: fT.of(hm)
            }), !0;
            let am = Fm(mm.state, Tm.from, Tm.to);
            return !!am && (mm.dispatch({
              effects: TT.of(am)
            }), !0)
          }
        }
      }), oT()]
    }
    const KT = xm.f.baseTheme({
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
    class QT {
      constructor(mm, Tm) {
        let fm;

        function hm(mm) {
          let Tm = Dm.e.newName();
          return (fm || (fm = Object.create(null)))["." + Tm] = mm, Tm
        }
        this.specs = mm;
        const Am = "string" == typeof Tm.all ? Tm.all : Tm.all ? hm(Tm.all) : void 0,
          am = Tm.scope;
        this.scope = am instanceof Em ? mm => mm.prop(im) == am.data : am ? mm => mm == am : void 0, this.style = (0, wm.j)(mm.map((mm => ({
          tag: mm.tag,
          class: mm.class || hm(Object.assign({}, mm, {
            tag: null
          }))
        }))), {
          all: Am
        }).style, this.module = fm ? new Dm.e(fm) : null, this.themeType = Tm.themeType
      }
      static define(mm, Tm) {
        return new QT(mm, Tm || {})
      }
    }
    const nT = am.s.define(),
      JT = am.s.define({
        combine: mm => mm.length ? [mm[0]] : null
      });

    function cT(mm) {
      let Tm = mm.facet(nT);
      return Tm.length ? Tm : mm.facet(JT)
    }

    function zT(mm, Tm) {
      let fm, hm = [kT];
      return mm instanceof QT && (mm.module && hm.push(xm.f.styleModule.of(mm.module)), fm = mm.themeType), (null === Tm || void 0 === Tm ? void 0 : Tm.fallback) ? hm.push(JT.of(mm)) : fm ? hm.push(nT.computeN([xm.f.darkTheme], (Tm => Tm.facet(xm.f.darkTheme) == ("dark" == fm) ? [mm] : []))) : hm.push(nT.of(mm)), hm
    }
    class ZT {
      constructor(mm) {
        this.markCache = Object.create(null), this.tree = Ym(mm.state), this.Ym = this.buildDeco(mm, cT(mm.state)), this.decoratedTo = mm.viewport.to
      }
      update(mm) {
        let Tm = Ym(mm.state),
          fm = cT(mm.state),
          hm = fm != cT(mm.startState),
          {
            viewport: Am
          } = mm.view,
          am = mm.changes.mapPos(this.decoratedTo, 1);
        Tm.length < Am.to && !hm && Tm.type == this.tree.type && am >= Am.to ? (this.Ym = this.Ym.map(mm.changes), this.decoratedTo = am) : (Tm != this.tree || mm.viewportChanged || hm) && (this.tree = Tm, this.Ym = this.buildDeco(mm.view, fm), this.decoratedTo = Am.to)
      }
      buildDeco(mm, Tm) {
        if (!Tm || !this.tree.length) return xm.c.none;
        let fm = new am.y;
        for (let {
            from: hm,
            to: Am
          }
          of mm.U1)(0, wm.e)(this.tree, Tm, ((mm, Tm, hm) => {
          fm.add(mm, Tm, this.markCache[hm] || (this.markCache[hm] = xm.c.mark({
            class: hm
          })))
        }), hm, Am);
        return fm.finish()
      }
    }
    const kT = am.x.high(xm.h.fromClass(ZT, {
        Ym: mm => mm.Ym
      })),
      bT = QT.define([{
        tag: wm.l.meta,
        color: "#404740"
      }, {
        tag: wm.l.link,
        textDecoration: "underline"
      }, {
        tag: wm.l.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: wm.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: wm.l.strong,
        fontWeight: "bold"
      }, {
        tag: wm.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: wm.l.keyword,
        color: "#708"
      }, {
        tag: [wm.l.atom, wm.l.bool, wm.l.url, wm.l.contentSeparator, wm.l.labelName],
        color: "#219"
      }, {
        tag: [wm.l.literal, wm.l.inserted],
        color: "#164"
      }, {
        tag: [wm.l.string, wm.l.deleted],
        color: "#a11"
      }, {
        tag: [wm.l.regexp, wm.l.escape, wm.l.special(wm.l.string)],
        color: "#e40"
      }, {
        tag: wm.l.definition(wm.l.variableName),
        color: "#00f"
      }, {
        tag: wm.l.local(wm.l.variableName),
        color: "#30a"
      }, {
        tag: [wm.l.typeName, wm.l.namespace],
        color: "#085"
      }, {
        tag: wm.l.className,
        color: "#167"
      }, {
        tag: [wm.l.special(wm.l.variableName), wm.l.macroName],
        color: "#256"
      }, {
        tag: wm.l.definition(wm.l.propertyName),
        color: "#00c"
      }, {
        tag: wm.l.comment,
        color: "#940"
      }, {
        tag: wm.l.invalid,
        color: "#f00"
      }]),
      ST = xm.f.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      eT = 1e4,
      NT = "()[]{}",
      GT = am.s.define({
        combine: mm => (0, am.Y)(mm, {
          afterCursor: !0,
          brackets: NT,
          maxScanDistance: eT,
          renderMatch: HT
        })
      }),
      XT = xm.c.mark({
        class: "cm-matchingBracket"
      }),
      PT = xm.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function HT(mm) {
      let Tm = [],
        fm = mm.matched ? XT : PT;
      return Tm.push(fm.range(mm.start.from, mm.start.to)), mm.end && Tm.push(fm.range(mm.end.from, mm.end.to)), Tm
    }

    function yT(mm) {
      let Tm = [],
        fm = mm.facet(GT);
      for (let hm of mm.selection.mo) {
        if (!hm.empty) continue;
        let Am = uT(mm, hm.head, -1, fm) || hm.head > 0 && uT(mm, hm.head - 1, 1, fm) || fm.afterCursor && (uT(mm, hm.head, 1, fm) || hm.head < mm.doc.length && uT(mm, hm.head + 1, -1, fm));
        Am && (Tm = Tm.concat(fm.renderMatch(Am, mm)))
      }
      return xm.c.set(Tm, !0)
    }
    const CT = [xm.h.fromClass(class {
      constructor(mm) {
        this.paused = !1, this.Ym = yT(mm.state)
      }
      update(mm) {
        (mm.docChanged || mm.selectionSet || this.paused) && (mm.view.composing ? (this.Ym = this.Ym.map(mm.changes), this.paused = !0) : (this.Ym = yT(mm.state), this.paused = !1))
      }
    }, {
      Ym: mm => mm.Ym
    }), ST];

    function rT() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [GT.of(mm), CT]
    }
    const sT = new Am.h;

    function lT(mm, Tm, fm) {
      let hm = mm.prop(Tm < 0 ? Am.h.openedBy : Am.h.closedBy);
      if (hm) return hm;
      if (1 == mm.name.length) {
        let hm = fm.indexOf(mm.name);
        if (hm > -1 && hm % 2 == (Tm < 0 ? 1 : 0)) return [fm[hm + Tm]]
      }
      return null
    }

    function MT(mm) {
      let Tm = mm.type.prop(sT);
      return Tm ? Tm(mm.node) : mm
    }

    function uT(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        Am = hm.maxScanDistance || eT,
        am = hm.brackets || NT,
        xm = Ym(mm),
        wm = xm.resolveInner(Tm, fm);
      for (let Dm = wm; Dm; Dm = Dm.parent) {
        let hm = lT(Dm.type, fm, am);
        if (hm && Dm.from < Dm.to) {
          let Am = MT(Dm);
          if (Am && (fm > 0 ? Tm >= Am.from && Tm < Am.to : Tm > Am.from && Tm <= Am.to)) return BT(mm, Tm, fm, Dm, Am, hm, am)
        }
      }
      return function(mm, Tm, fm, hm, Am, am, xm) {
        if (fm < 0 ? !Tm : Tm == mm.doc.length) return null;
        let wm = fm < 0 ? mm.sliceDoc(Tm - 1, Tm) : mm.sliceDoc(Tm, Tm + 1),
          Dm = xm.indexOf(wm);
        if (Dm < 0 || Dm % 2 == 0 != fm > 0) return null;
        let im = {
            from: fm < 0 ? Tm - 1 : Tm,
            to: fm > 0 ? Tm + 1 : Tm
          },
          Rm = mm.doc.iterRange(Tm, fm > 0 ? mm.doc.length : 0),
          pm = 0;
        for (let Em = 0; !Rm.next().done && Em <= am;) {
          let mm = Rm.value;
          fm < 0 && (Em += mm.length);
          let am = Tm + Em * fm;
          for (let Tm = fm > 0 ? 0 : mm.length - 1, wm = fm > 0 ? mm.length : -1; Tm != wm; Tm += fm) {
            let wm = xm.indexOf(mm[Tm]);
            if (!(wm < 0 || hm.resolveInner(am + Tm, 1).type != Am))
              if (wm % 2 == 0 == fm > 0) pm++;
              else {
                if (1 == pm) return {
                  start: im,
                  end: {
                    from: am + Tm,
                    to: am + Tm + 1
                  },
                  matched: wm >> 1 == Dm >> 1
                };
                pm--
              }
          }
          fm > 0 && (Em += mm.length)
        }
        return Rm.done ? {
          start: im,
          matched: !1
        } : null
      }(mm, Tm, fm, xm, wm.type, Am, am)
    }

    function BT(mm, Tm, fm, hm, Am, am, xm) {
      let wm = hm.parent,
        Dm = {
          from: Am.from,
          to: Am.to
        },
        im = 0,
        Rm = null === wm || void 0 === wm ? void 0 : wm.cursor();
      if (Rm && (fm < 0 ? Rm.childBefore(hm.from) : Rm.childAfter(hm.to)))
        do {
          if (fm < 0 ? Rm.to <= hm.from : Rm.from >= hm.to) {
            if (0 == im && am.indexOf(Rm.type.name) > -1 && Rm.from < Rm.to) {
              let mm = MT(Rm);
              return {
                start: Dm,
                end: mm ? {
                  from: mm.from,
                  to: mm.to
                } : void 0,
                matched: !0
              }
            }
            if (lT(Rm.type, fm, xm)) im++;
            else if (lT(Rm.type, -fm, xm)) {
              if (0 == im) {
                let mm = MT(Rm);
                return {
                  start: Dm,
                  end: mm && mm.from < mm.to ? {
                    from: mm.from,
                    to: mm.to
                  } : void 0,
                  matched: !1
                }
              }
              im--
            }
          }
        } while (fm < 0 ? Rm.prevSibling() : Rm.nextSibling());
      return {
        start: Dm,
        matched: !1
      }
    }
    const LT = Object.create(null),
      vT = [Am.j.none],
      tT = [],
      UT = Object.create(null),
      dT = Object.create(null);
    for (let [FT, mf] of [
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
      ]) dT[FT] = WT(LT, mf);

    function gT(mm, Tm) {
      tT.indexOf(mm) > -1 || (tT.push(mm), console.warn(Tm))
    }

    function WT(mm, Tm) {
      let fm = [];
      for (let Am of Tm.split(" ")) {
        let Tm = [];
        for (let fm of Am.split(".")) {
          let hm = mm[fm] || wm.l[fm];
          hm ? "function" == typeof hm ? Tm.length ? Tm = Tm.map(hm) : gT(fm, `Modifier ${fm} used at start of tag`) : Tm.length ? gT(fm, `Tag ${fm} used as modifier`) : Tm = Array.isArray(hm) ? hm : [hm] : gT(fm, `Unknown highlighting tag ${fm}`)
        }
        for (let mm of Tm) fm.push(mm)
      }
      if (!fm.length) return 0;
      let hm = Tm.replace(/ /g, "_"),
        am = hm + " " + fm.map((mm => mm.id)),
        xm = UT[am];
      if (xm) return xm.id;
      let Dm = UT[am] = Am.j.define({
        id: vT.length,
        name: hm,
        props: [(0, wm.g)({
          [hm]: fm
        })]
      });
      return vT.push(Dm), Dm.id
    }
    xm.e.RTL, xm.e.LTR
  },
  41410: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Im,
      e: () => Jm
    });
    var hm = fm(41361),
      Am = fm(41356),
      am = fm(41373);
    class xm {
      constructor(mm, Tm, fm) {
        this.from = mm, this.to = Tm, this.diagnostic = fm
      }
    }
    class wm {
      constructor(mm, Tm, fm) {
        this.diagnostics = mm, this.panel = Tm, this.selected = fm
      }
      static init(mm, Tm, fm) {
        let am = fm.facet(Qm).markerFilter;
        am && (mm = am(mm, fm));
        let xm = mm.slice().sort(((mm, Tm) => mm.from - Tm.from || mm.to - Tm.to)),
          im = new Am.y,
          Rm = [],
          pm = 0,
          Em = fm.doc.iter(),
          om = 0,
          Om = fm.doc.length;
        for (let Am = 0;;) {
          let mm, Tm, fm = Am == xm.length ? null : xm[Am];
          if (!fm && !Rm.length) break;
          if (Rm.length) mm = pm, Tm = Rm.reduce(((mm, Tm) => Math.min(mm, Tm.to)), fm && fm.from > mm ? fm.from : 1e8);
          else {
            if (mm = fm.from, mm > Om) break;
            Tm = fm.to, Rm.push(fm), Am++
          }
          for (; Am < xm.length;) {
            let fm = xm[Am];
            if (fm.from != mm || !(fm.to > fm.from || fm.to == mm)) {
              Tm = Math.min(fm.from, Tm);
              break
            }
            Rm.push(fm), Am++, Tm = Math.min(fm.to, Tm)
          }
          Tm = Math.min(Tm, Om);
          let am = !1;
          if (Rm.some((fm => fm.from == mm && (fm.to == Tm || Tm == Om))) && (am = mm == Tm, !am && Tm - mm < 10)) {
            let fm = mm - (om + Em.value.length);
            fm > 0 && (Em.next(fm), om = mm);
            for (let hm = mm;;) {
              if (hm >= Tm) {
                am = !0;
                break
              }
              if (!Em.lineBreak && om + Em.value.length > hm) break;
              hm = om + Em.value.length, om += Em.value.length, Em.next()
            }
          }
          let wm = Xm(Rm);
          if (am) im.add(mm, mm, hm.c.widget({
            widget: new Zm(wm),
            diagnostics: Rm.slice()
          }));
          else {
            let fm = Rm.reduce(((mm, Tm) => Tm.markClass ? mm + " " + Tm.markClass : mm), "");
            im.add(mm, Tm, hm.c.mark({
              class: "cm-lintRange cm-lintRange-" + wm + fm,
              diagnostics: Rm.slice(),
              inclusiveEnd: Rm.some((mm => mm.to > Tm))
            }))
          }
          if (pm = Tm, pm == Om) break;
          for (let hm = 0; hm < Rm.length; hm++) Rm[hm].to <= pm && Rm.splice(hm--, 1)
        }
        let Ym = im.finish();
        return new wm(Ym, Tm, Dm(Ym))
      }
    }

    function Dm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hm = null;
      return mm.between(fm, 1e9, ((mm, fm, Am) => {
        let {
          spec: am
        } = Am;
        if (!(Tm && am.diagnostics.indexOf(Tm) < 0))
          if (hm) {
            if (am.diagnostics.indexOf(hm.diagnostic) < 0) return !1;
            hm = new xm(hm.from, fm, hm.diagnostic)
          } else hm = new xm(mm, fm, Tm || am.diagnostics[0])
      })), hm
    }

    function im(mm, Tm) {
      let fm = Tm.pos,
        hm = Tm.end || fm,
        Am = mm.state.facet(Qm).hideOn(mm, fm, hm);
      if (null != Am) return Am;
      let am = mm.startState.doc.lineAt(Tm.pos);
      return !(!mm.effects.some((mm => mm.is(pm))) && !mm.changes.touchesRange(am.from, Math.max(am.to, hm)))
    }

    function Rm(mm, Tm) {
      return mm.field(Om, !1) ? Tm : Tm.concat(Am.J.appendConfig.of(Pm))
    }
    const pm = Am.J.define(),
      Em = Am.J.define(),
      om = Am.J.define(),
      Om = Am.M.define({
        create: () => new wm(hm.c.none, null, null),
        update(mm, Tm) {
          if (Tm.docChanged && mm.diagnostics.size) {
            let fm = mm.diagnostics.map(Tm.changes),
              hm = null,
              Am = mm.panel;
            if (mm.selected) {
              let Am = Tm.changes.mapPos(mm.selected.from, 1);
              hm = Dm(fm, mm.selected.diagnostic, Am) || Dm(fm, null, Am)
            }!fm.size && Am && Tm.state.facet(Qm).autoPanel && (Am = null), mm = new wm(fm, Am, hm)
          }
          for (let fm of Tm.effects)
            if (fm.is(pm)) {
              let hm = Tm.state.facet(Qm).autoPanel ? fm.value.length ? bm.open : null : mm.panel;
              mm = wm.init(fm.value, hm, Tm.state)
            } else fm.is(Em) ? mm = new wm(mm.diagnostics, fm.value ? bm.open : null, mm.selected) : fm.is(om) && (mm = new wm(mm.diagnostics, mm.panel, fm.value));
          return mm
        },
        provide: mm => [hm.cb.from(mm, (mm => mm.panel)), hm.f.Ym.from(mm, (mm => mm.diagnostics))]
      });
    const Ym = hm.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function qm(mm, Tm, fm) {
      let hm, {
          diagnostics: Am
        } = mm.state.field(Om),
        am = -1,
        xm = -1;
      Am.between(Tm - (fm < 0 ? 1 : 0), Tm + (fm > 0 ? 1 : 0), ((mm, Am, wm) => {
        let {
          spec: Dm
        } = wm;
        if (Tm >= mm && Tm <= Am && (mm == Am || (Tm > mm || fm > 0) && (Tm < Am || fm < 0))) return hm = Dm.diagnostics, am = mm, xm = Am, !1
      }));
      let wm = mm.state.facet(Qm).tooltipFilter;
      return hm && wm && (hm = wm(hm, mm.state)), hm ? {
        pos: am,
        end: xm,
        above: mm.state.doc.lineAt(am).to < xm,
        create: () => ({
          dom: jm(mm, hm)
        })
      } : null
    }

    function jm(mm, Tm) {
      return (0, am.c)("ul", {
        class: "cm-tooltip-lint"
      }, Tm.map((Tm => zm(mm, Tm, !1))))
    }
    const Vm = mm => {
        let Tm = mm.state.field(Om, !1);
        return !(!Tm || !Tm.panel) && (mm.dispatch({
          effects: Em.of(!1)
        }), !0)
      },
      Im = [{
        key: "Mod-Shift-m",
        run: mm => {
          let Tm = mm.state.field(Om, !1);
          Tm && Tm.panel || mm.dispatch({
            effects: Rm(mm.state, [Em.of(!0)])
          });
          let fm = (0, hm.r)(mm, bm.open);
          return fm && fm.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: mm => {
          let Tm = mm.state.field(Om, !1);
          if (!Tm) return !1;
          let fm = mm.state.selection.main,
            hm = Dm(Tm.diagnostics, null, fm.to + 1);
          return !(!hm && (hm = Dm(Tm.diagnostics, null, 0), !hm || hm.from == fm.from && hm.to == fm.to)) && (mm.dispatch({
            selection: {
              anchor: hm.from,
              head: hm.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      Km = hm.h.fromClass(class {
        constructor(mm) {
          this.view = mm, this.timeout = -1, this.set = !0;
          let {
            delay: Tm
          } = mm.state.facet(Qm);
          this.lintTime = Date.now() + Tm, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, Tm)
        }
        run() {
          clearTimeout(this.timeout);
          let mm = Date.now();
          if (mm < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - mm);
          else {
            this.set = !1;
            let {
              state: mm
            } = this.view, {
              sources: Tm
            } = mm.facet(Qm);
            Tm.length && function(mm, Tm, fm) {
              let hm = [],
                Am = -1;
              for (let am of mm) am.then((fm => {
                hm.push(fm), clearTimeout(Am), hm.length == mm.length ? Tm(hm) : Am = setTimeout((() => Tm(hm)), 200)
              }), fm)
            }(Tm.map((mm => Promise.resolve(mm(this.view)))), (Tm => {
              this.view.state.doc == mm.doc && this.view.dispatch(function(mm, Tm) {
                return {
                  effects: Rm(mm, [pm.of(Tm)])
                }
              }(this.view.state, Tm.reduce(((mm, Tm) => mm.concat(Tm)))))
            }), (mm => {
              (0, hm.S)(this.view.state, mm)
            }))
          }
        }
        update(mm) {
          let Tm = mm.state.facet(Qm);
          (mm.docChanged || Tm != mm.startState.facet(Qm) || Tm.needsRefresh && Tm.needsRefresh(mm)) && (this.lintTime = Date.now() + Tm.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, Tm.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const Qm = Am.s.define({
      combine: mm => ({
        sources: mm.map((mm => mm.source)).filter((mm => null != mm)),
        ...(0, Am.Y)(mm.map((mm => mm.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: nm,
          tooltipFilter: nm,
          needsRefresh: (mm, Tm) => mm ? Tm ? fm => mm(fm) || Tm(fm) : mm : Tm,
          hideOn: (mm, Tm) => mm ? Tm ? (fm, hm, Am) => mm(fm, hm, Am) || Tm(fm, hm, Am) : mm : Tm,
          autoPanel: (mm, Tm) => mm || Tm
        })
      })
    });

    function nm(mm, Tm) {
      return mm ? Tm ? (fm, hm) => Tm(mm(fm, hm), hm) : mm : Tm
    }

    function Jm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [Qm.of({
        source: mm,
        config: Tm
      }), Km, Pm]
    }

    function cm(mm) {
      let Tm = [];
      if (mm) mm: for (let {
          name: fm
        }
        of mm) {
        for (let mm = 0; mm < fm.length; mm++) {
          let hm = fm[mm];
          if (/[a-zA-Z]/.test(hm) && !Tm.some((mm => mm.toLowerCase() == hm.toLowerCase()))) {
            Tm.push(hm);
            continue mm
          }
        }
        Tm.push("")
      }
      return Tm
    }

    function zm(mm, Tm, fm) {
      var hm;
      let Am = fm ? cm(Tm.actions) : [];
      return (0, am.c)("li", {
        class: "cm-diagnostic cm-diagnostic-" + Tm.severity
      }, (0, am.c)("span", {
        class: "cm-diagnosticText"
      }, Tm.renderMessage ? Tm.renderMessage(mm) : Tm.message), null === (hm = Tm.actions) || void 0 === hm ? void 0 : hm.map(((fm, hm) => {
        let xm = !1,
          wm = hm => {
            if (hm.preventDefault(), xm) return;
            xm = !0;
            let Am = Dm(mm.state.field(Om).diagnostics, Tm);
            Am && fm.apply(mm, Am.from, Am.to)
          },
          {
            name: im
          } = fm,
          Rm = Am[hm] ? im.indexOf(Am[hm]) : -1,
          pm = Rm < 0 ? im : [im.slice(0, Rm), (0, am.c)("u", im.slice(Rm, Rm + 1)), im.slice(Rm + 1)],
          Em = fm.markClass ? " " + fm.markClass : "";
        return (0, am.c)("button", {
          type: "button",
          class: "cm-diagnosticAction" + Em,
          onclick: wm,
          onmousedown: wm,
          "aria-label": ` Action: ${im}${Rm<0?"":` (access key "${Am[hm]})"`}.`
        }, pm)
      })), Tm.source && (0, am.c)("div", {
        class: "cm-diagnosticSource"
      }, Tm.source))
    }
    class Zm extends hm.k {
      constructor(mm) {
        super(), this.sev = mm
      }
      eq(mm) {
        return mm.sev == this.sev
      }
      toDOM() {
        return (0, am.c)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class km {
      constructor(mm, Tm) {
        this.diagnostic = Tm, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = zm(mm, Tm, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class bm {
      constructor(mm) {
        this.view = mm, this.items = [];
        this.list = (0, am.c)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: Tm => {
            if (!(Tm.ctrlKey || Tm.altKey || Tm.metaKey)) {
              if (27 == Tm.keyCode) Vm(this.view), this.view.focus();
              else if (38 == Tm.keyCode || 33 == Tm.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == Tm.keyCode || 34 == Tm.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == Tm.keyCode) this.moveSelection(0);
              else if (35 == Tm.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == Tm.keyCode) this.view.focus();
              else {
                if (!(Tm.keyCode >= 65 && Tm.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: fm
                  } = this.items[this.selectedIndex], hm = cm(fm.actions);
                  for (let Am = 0; Am < hm.length; Am++)
                    if (hm[Am].toUpperCase().charCodeAt(0) == Tm.keyCode) {
                      let Tm = Dm(this.view.state.field(Om).diagnostics, fm);
                      Tm && fm.actions[Am].apply(mm, Tm.from, Tm.to)
                    }
                }
              }
              Tm.preventDefault()
            }
          },
          onclick: mm => {
            for (let Tm = 0; Tm < this.items.length; Tm++) this.items[Tm].dom.contains(mm.target) && this.moveSelection(Tm)
          }
        }), this.dom = (0, am.c)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, am.c)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => Vm(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let mm = this.view.state.field(Om).selected;
        if (!mm) return -1;
        for (let Tm = 0; Tm < this.items.length; Tm++)
          if (this.items[Tm].diagnostic == mm.diagnostic) return Tm;
        return -1
      }
      update() {
        let {
          diagnostics: mm,
          selected: Tm
        } = this.view.state.field(Om), fm = 0, hm = !1, Am = null, am = new Set;
        for (mm.between(0, this.view.state.doc.length, ((mm, xm, wm) => {
            let {
              spec: Dm
            } = wm;
            for (let im of Dm.diagnostics) {
              if (am.has(im)) continue;
              am.add(im);
              let mm, xm = -1;
              for (let Tm = fm; Tm < this.items.length; Tm++)
                if (this.items[Tm].diagnostic == im) {
                  xm = Tm;
                  break
                } xm < 0 ? (mm = new km(this.view, im), this.items.splice(fm, 0, mm), hm = !0) : (mm = this.items[xm], xm > fm && (this.items.splice(fm, xm - fm), hm = !0)), Tm && mm.diagnostic == Tm.diagnostic ? mm.dom.hasAttribute("aria-selected") || (mm.dom.setAttribute("aria-selected", "true"), Am = mm) : mm.dom.hasAttribute("aria-selected") && mm.dom.removeAttribute("aria-selected"), fm++
            }
          })); fm < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) hm = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new km(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), hm = !0), Am ? (this.list.setAttribute("aria-activedescendant", Am.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: Am.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: mm => {
            let {
              sel: Tm,
              panel: fm
            } = mm, hm = fm.height / this.list.offsetHeight;
            Tm.top < fm.top ? this.list.scrollTop -= (fm.top - Tm.top) / hm : Tm.bottom > fm.bottom && (this.list.scrollTop += (Tm.bottom - fm.bottom) / hm)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), hm && this.sync()
      }
      sync() {
        let mm = this.list.firstChild;

        function Tm() {
          let Tm = mm;
          mm = Tm.nextSibling, Tm.remove()
        }
        for (let fm of this.items)
          if (fm.dom.parentNode == this.list) {
            for (; mm != fm.dom;) Tm();
            mm = fm.dom.nextSibling
          } else this.list.insertBefore(fm.dom, mm);
        for (; mm;) Tm()
      }
      moveSelection(mm) {
        if (this.selectedIndex < 0) return;
        let Tm = Dm(this.view.state.field(Om).diagnostics, this.items[mm].diagnostic);
        Tm && this.view.dispatch({
          selection: {
            anchor: Tm.from,
            head: Tm.to
          },
          scrollIntoView: !0,
          effects: om.of(Tm)
        })
      }
      static open(mm) {
        return new bm(mm)
      }
    }

    function Sm(mm) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(mm)}</svg>')`
    }

    function em(mm) {
      return Sm(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${mm}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Nm = hm.f.baseTheme({
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
        backgroundImage: em("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: em("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: em("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: em("#66d")
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

    function Gm(mm) {
      return "error" == mm ? 4 : "warning" == mm ? 3 : "info" == mm ? 2 : 1
    }

    function Xm(mm) {
      let Tm = "hint",
        fm = 1;
      for (let hm of mm) {
        let mm = Gm(hm.severity);
        mm > fm && (fm = mm, Tm = hm.severity)
      }
      return Tm
    }
    hm.g;
    const Pm = [Om, hm.f.Ym.compute([Om], (mm => {
      let {
        selected: Tm,
        panel: fm
      } = mm.field(Om);
      return Tm && fm && Tm.from != Tm.to ? hm.c.set([Ym.range(Tm.from, Tm.to)]) : hm.c.none
    })), (0, hm.K)(qm, {
      hideOn: im
    }), Nm]
  },
  41408: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Fm,
      h: () => jm,
      l: () => mT
    });
    var hm = fm(41361),
      Am = fm(41356),
      am = fm(41373);
    const xm = "function" == typeof String.prototype.normalize ? mm => mm.normalize("NFKD") : mm => mm;
    class wm {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mm.length,
          Am = arguments.length > 4 ? arguments[4] : void 0,
          am = arguments.length > 5 ? arguments[5] : void 0;
        this.test = am, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = mm.iterRange(fm, hm), this.bufferStart = fm, this.normalize = Am ? mm => Am(xm(mm)) : xm, this.query = this.normalize(Tm)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, Am.R)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let mm = this.peek();
          if (mm < 0) return this.done = !0, this;
          let Tm = (0, Am.gb)(mm),
            fm = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, Am.U)(mm);
          let hm = this.normalize(Tm);
          if (hm.length)
            for (let Am = 0, am = fm;; Am++) {
              let mm = hm.charCodeAt(Am),
                xm = this.match(mm, am, this.bufferPos + this.bufferStart);
              if (Am == hm.length - 1) {
                if (xm) return this.value = xm, this;
                break
              }
              am == fm && Am < Tm.length && Tm.charCodeAt(Am) == mm && am++
            }
        }
      }
      match(mm, Tm, fm) {
        let hm = null;
        for (let Am = 0; Am < this.matches.length; Am += 2) {
          let Tm = this.matches[Am],
            am = !1;
          this.query.charCodeAt(Tm) == mm && (Tm == this.query.length - 1 ? hm = {
            from: this.matches[Am + 1],
            to: fm
          } : (this.matches[Am]++, am = !0)), am || (this.matches.splice(Am, 2), Am -= 2)
        }
        return this.query.charCodeAt(0) == mm && (1 == this.query.length ? hm = {
          from: Tm,
          to: fm
        } : this.matches.push(1, Tm)), hm && this.test && !this.test(hm.from, hm.to, this.buffer, this.bufferStart) && (hm = null), hm
      }
    }
    "undefined" != typeof Symbol && (wm.prototype[Symbol.iterator] = function() {
      return this
    });
    const Dm = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      im = "gm" + (null == /x/.unicode ? "" : "u");
    class Rm {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : mm.length;
        if (this.text = mm, this.to = Am, this.curLine = "", this.done = !1, this.value = Dm, /\\[sWDnr]|\n|\r|\[\^/.test(Tm)) return new om(mm, Tm, fm, hm, Am);
        this.re = new RegExp(Tm, im + ((null === fm || void 0 === fm ? void 0 : fm.ignoreCase) ? "i" : "")), this.test = null === fm || void 0 === fm ? void 0 : fm.test, this.iter = mm.iter();
        let am = mm.lineAt(hm);
        this.curLineStart = am.from, this.matchPos = Om(mm, hm), this.getLine(this.curLineStart)
      }
      getLine(mm) {
        this.iter.next(mm), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let mm = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = mm;
          let Tm = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (Tm) {
            let fm = this.curLineStart + Tm.index,
              hm = fm + Tm[0].length;
            if (this.matchPos = Om(this.text, hm + (fm == hm ? 1 : 0)), fm == this.curLineStart + this.curLine.length && this.nextLine(), (fm < hm || fm > this.value.to) && (!this.test || this.test(fm, hm, Tm))) return this.value = {
              from: fm,
              to: hm,
              match: Tm
            }, this;
            mm = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), mm = 0
          }
        }
      }
    }
    const pm = new WeakMap;
    class Em {
      constructor(mm, Tm) {
        this.from = mm, this.text = Tm
      }
      get to() {
        return this.from + this.text.length
      }
      static get(mm, Tm, fm) {
        let hm = pm.get(mm);
        if (!hm || hm.from >= fm || hm.to <= Tm) {
          let hm = new Em(Tm, mm.sliceString(Tm, fm));
          return pm.set(mm, hm), hm
        }
        if (hm.from == Tm && hm.to == fm) return hm;
        let {
          text: Am,
          from: am
        } = hm;
        return am > Tm && (Am = mm.sliceString(Tm, am) + Am, am = Tm), hm.to < fm && (Am += mm.sliceString(hm.to, fm)), pm.set(mm, new Em(am, Am)), new Em(Tm, Am.slice(Tm - am, fm - am))
      }
    }
    class om {
      constructor(mm, Tm, fm, hm, Am) {
        this.text = mm, this.to = Am, this.done = !1, this.value = Dm, this.matchPos = Om(mm, hm), this.re = new RegExp(Tm, im + ((null === fm || void 0 === fm ? void 0 : fm.ignoreCase) ? "i" : "")), this.test = null === fm || void 0 === fm ? void 0 : fm.test, this.flat = Em.get(mm, hm, this.chunkEnd(hm + 5e3))
      }
      chunkEnd(mm) {
        return mm >= this.to ? this.to : this.text.lineAt(mm).to
      }
      next() {
        for (;;) {
          let mm = this.re.lastIndex = this.matchPos - this.flat.from,
            Tm = this.re.exec(this.flat.text);
          if (Tm && !Tm[0] && Tm.index == mm && (this.re.lastIndex = mm + 1, Tm = this.re.exec(this.flat.text)), Tm) {
            let mm = this.flat.from + Tm.index,
              fm = mm + Tm[0].length;
            if ((this.flat.to >= this.to || Tm.index + Tm[0].length <= this.flat.text.length - 10) && (!this.test || this.test(mm, fm, Tm))) return this.value = {
              from: mm,
              to: fm,
              match: Tm
            }, this.matchPos = Om(this.text, fm + (mm == fm ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = Em.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function Om(mm, Tm) {
      if (Tm >= mm.length) return Tm;
      let fm, hm = mm.lineAt(Tm);
      for (; Tm < hm.to && (fm = hm.text.charCodeAt(Tm - hm.from)) >= 56320 && fm < 57344;) Tm++;
      return Tm
    }
    "undefined" != typeof Symbol && (Rm.prototype[Symbol.iterator] = om.prototype[Symbol.iterator] = function() {
      return this
    });
    const Ym = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      qm = Am.s.define({
        combine: mm => (0, Am.Y)(mm, Ym, {
          highlightWordAroundCursor: (mm, Tm) => mm || Tm,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function jm(mm) {
      let Tm = [nm, Qm];
      return mm && Tm.push(qm.of(mm)), Tm
    }
    const Vm = hm.c.mark({
        class: "cm-selectionMatch"
      }),
      Im = hm.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function Km(mm, Tm, fm, hm) {
      return (0 == fm || mm(Tm.sliceDoc(fm - 1, fm)) != Am.k.Word) && (hm == Tm.doc.length || mm(Tm.sliceDoc(hm, hm + 1)) != Am.k.Word)
    }
    const Qm = hm.h.fromClass(class {
        constructor(mm) {
          this.Ym = this.getDeco(mm)
        }
        update(mm) {
          (mm.selectionSet || mm.docChanged || mm.viewportChanged) && (this.Ym = this.getDeco(mm.view))
        }
        getDeco(mm) {
          let Tm = mm.state.facet(qm),
            {
              state: fm
            } = mm,
            am = fm.selection;
          if (am.mo.length > 1) return hm.c.none;
          let xm, Dm = am.main,
            im = null;
          if (Dm.empty) {
            if (!Tm.highlightWordAroundCursor) return hm.c.none;
            let mm = fm.wordAt(Dm.head);
            if (!mm) return hm.c.none;
            im = fm.charCategorizer(Dm.head), xm = fm.sliceDoc(mm.from, mm.to)
          } else {
            let mm = Dm.to - Dm.from;
            if (mm < Tm.minSelectionLength || mm > 200) return hm.c.none;
            if (Tm.wholeWords) {
              if (xm = fm.sliceDoc(Dm.from, Dm.to), im = fm.charCategorizer(Dm.head), !Km(im, fm, Dm.from, Dm.to) || ! function(mm, Tm, fm, hm) {
                  return mm(Tm.sliceDoc(fm, fm + 1)) == Am.k.Word && mm(Tm.sliceDoc(hm - 1, hm)) == Am.k.Word
                }(im, fm, Dm.from, Dm.to)) return hm.c.none
            } else if (xm = fm.sliceDoc(Dm.from, Dm.to), !xm) return hm.c.none
          }
          let Rm = [];
          for (let Am of mm.U1) {
            let mm = new wm(fm.doc, xm, Am.from, Am.to);
            for (; !mm.next().done;) {
              let {
                from: Am,
                to: am
              } = mm.value;
              if ((!im || Km(im, fm, Am, am)) && (Dm.empty && Am <= Dm.from && am >= Dm.to ? Rm.push(Im.range(Am, am)) : (Am >= Dm.to || am <= Dm.from) && Rm.push(Vm.range(Am, am)), Rm.length > Tm.maxMatches)) return hm.c.none
            }
          }
          return hm.c.set(Rm)
        }
      }, {
        Ym: mm => mm.Ym
      }),
      nm = hm.f.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const Jm = Am.s.define({
      combine: mm => (0, Am.Y)(mm, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: mm => new TT(mm),
        scrollToMatch: mm => hm.f.scrollIntoView(mm)
      })
    });
    class cm {
      constructor(mm) {
        this.search = mm.search, this.caseSensitive = !!mm.caseSensitive, this.literal = !!mm.literal, this.regexp = !!mm.regexp, this.replace = mm.replace || "", this.valid = !!this.search && (!this.regexp || function(mm) {
          try {
            return new RegExp(mm, im), !0
          } catch (Tm) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!mm.wholeWord, this.test = mm.test
      }
      unquote(mm) {
        return this.literal ? mm : mm.replace(/\\([nrt\\])/g, ((mm, Tm) => "n" == Tm ? "\n" : "r" == Tm ? "\r" : "t" == Tm ? "\t" : "\\"))
      }
      eq(mm) {
        return this.search == mm.search && this.replace == mm.replace && this.caseSensitive == mm.caseSensitive && this.regexp == mm.regexp && this.wholeWord == mm.wholeWord && this.test == mm.test
      }
      create() {
        return this.regexp ? new Nm(this) : new km(this)
      }
      getCursor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = mm.doc ? mm : Am.q.create({
            doc: mm
          });
        return null == fm && (fm = hm.doc.length), this.regexp ? bm(this, hm, Tm, fm) : Zm(this, hm, Tm, fm)
      }
    }
    class zm {
      constructor(mm) {
        this.spec = mm
      }
    }

    function Zm(mm, Tm, fm, hm) {
      let am;
      var xm, Dm;
      return mm.wholeWord && (xm = Tm.doc, Dm = Tm.charCategorizer(Tm.selection.main.head), am = (mm, Tm, fm, hm) => ((hm > mm || hm + fm.length < Tm) && (hm = Math.max(0, mm - 2), fm = xm.sliceString(hm, Math.min(xm.length, Tm + 2))), (Dm(Sm(fm, mm - hm)) != Am.k.Word || Dm(em(fm, mm - hm)) != Am.k.Word) && (Dm(em(fm, Tm - hm)) != Am.k.Word || Dm(Sm(fm, Tm - hm)) != Am.k.Word))), mm.test && (am = function(mm, Tm, fm) {
        return (hm, Am, am, xm) => {
          if (fm && !fm(hm, Am, am, xm)) return !1;
          let wm = hm >= xm && Am <= xm + am.length ? am.slice(hm - xm, Am - xm) : Tm.doc.sliceString(hm, Am);
          return mm(wm, Tm, hm, Am)
        }
      }(mm.test, Tm, am)), new wm(Tm.doc, mm.unquoted, fm, hm, mm.caseSensitive ? void 0 : mm => mm.toLowerCase(), am)
    }
    class km extends zm {
      constructor(mm) {
        super(mm)
      }
      nextMatch(mm, Tm, fm) {
        let hm = Zm(this.spec, mm, fm, mm.doc.length).nextOverlapping();
        if (hm.done) {
          let fm = Math.min(mm.doc.length, Tm + this.spec.unquoted.length);
          hm = Zm(this.spec, mm, 0, fm).nextOverlapping()
        }
        return hm.done || hm.value.from == Tm && hm.value.to == fm ? null : hm.value
      }
      prevMatchInRange(mm, Tm, fm) {
        for (let hm = fm;;) {
          let fm = Math.max(Tm, hm - 1e4 - this.spec.unquoted.length),
            Am = Zm(this.spec, mm, fm, hm),
            am = null;
          for (; !Am.nextOverlapping().done;) am = Am.value;
          if (am) return am;
          if (fm == Tm) return null;
          hm -= 1e4
        }
      }
      prevMatch(mm, Tm, fm) {
        let hm = this.prevMatchInRange(mm, 0, Tm);
        return hm || (hm = this.prevMatchInRange(mm, Math.max(0, fm - this.spec.unquoted.length), mm.doc.length)), !hm || hm.from == Tm && hm.to == fm ? null : hm
      }
      getReplacement(mm) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(mm, Tm) {
        let fm = Zm(this.spec, mm, 0, mm.doc.length),
          hm = [];
        for (; !fm.next().done;) {
          if (hm.length >= Tm) return null;
          hm.push(fm.value)
        }
        return hm
      }
      highlight(mm, Tm, fm, hm) {
        let Am = Zm(this.spec, mm, Math.max(0, Tm - this.spec.unquoted.length), Math.min(fm + this.spec.unquoted.length, mm.doc.length));
        for (; !Am.next().done;) hm(Am.value.from, Am.value.to)
      }
    }

    function bm(mm, Tm, fm, hm) {
      let am;
      var xm;
      return mm.wholeWord && (xm = Tm.charCategorizer(Tm.selection.main.head), am = (mm, Tm, fm) => !fm[0].length || (xm(Sm(fm.input, fm.index)) != Am.k.Word || xm(em(fm.input, fm.index)) != Am.k.Word) && (xm(em(fm.input, fm.index + fm[0].length)) != Am.k.Word || xm(Sm(fm.input, fm.index + fm[0].length)) != Am.k.Word)), mm.test && (am = function(mm, Tm, fm) {
        return (hm, Am, am) => (!fm || fm(hm, Am, am)) && mm(am[0], Tm, hm, Am)
      }(mm.test, Tm, am)), new Rm(Tm.doc, mm.search, {
        ignoreCase: !mm.caseSensitive,
        test: am
      }, fm, hm)
    }

    function Sm(mm, Tm) {
      return mm.slice((0, Am.ab)(mm, Tm, !1), Tm)
    }

    function em(mm, Tm) {
      return mm.slice(Tm, (0, Am.ab)(mm, Tm))
    }
    class Nm extends zm {
      nextMatch(mm, Tm, fm) {
        let hm = bm(this.spec, mm, fm, mm.doc.length).next();
        return hm.done && (hm = bm(this.spec, mm, 0, Tm).next()), hm.done ? null : hm.value
      }
      prevMatchInRange(mm, Tm, fm) {
        for (let hm = 1;; hm++) {
          let Am = Math.max(Tm, fm - 1e4 * hm),
            am = bm(this.spec, mm, Am, fm),
            xm = null;
          for (; !am.next().done;) xm = am.value;
          if (xm && (Am == Tm || xm.from > Am + 10)) return xm;
          if (Am == Tm) return null
        }
      }
      prevMatch(mm, Tm, fm) {
        return this.prevMatchInRange(mm, 0, Tm) || this.prevMatchInRange(mm, fm, mm.doc.length)
      }
      getReplacement(mm) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((Tm, fm) => {
          if ("&" == fm) return mm.match[0];
          if ("$" == fm) return "$";
          for (let hm = fm.length; hm > 0; hm--) {
            let Tm = +fm.slice(0, hm);
            if (Tm > 0 && Tm < mm.match.length) return mm.match[Tm] + fm.slice(hm)
          }
          return Tm
        }))
      }
      matchAll(mm, Tm) {
        let fm = bm(this.spec, mm, 0, mm.doc.length),
          hm = [];
        for (; !fm.next().done;) {
          if (hm.length >= Tm) return null;
          hm.push(fm.value)
        }
        return hm
      }
      highlight(mm, Tm, fm, hm) {
        let Am = bm(this.spec, mm, Math.max(0, Tm - 250), Math.min(fm + 250, mm.doc.length));
        for (; !Am.next().done;) hm(Am.value.from, Am.value.to)
      }
    }
    const Gm = Am.J.define(),
      Xm = Am.J.define(),
      Pm = Am.M.define({
        create: mm => new Hm(Um(mm).create(), null),
        update(mm, Tm) {
          for (let fm of Tm.effects) fm.is(Gm) ? mm = new Hm(fm.value.create(), mm.panel) : fm.is(Xm) && (mm = new Hm(mm.query, fm.value ? tm : null));
          return mm
        },
        provide: mm => hm.cb.from(mm, (mm => mm.panel))
      });
    class Hm {
      constructor(mm, Tm) {
        this.query = mm, this.panel = Tm
      }
    }
    const ym = hm.c.mark({
        class: "cm-searchMatch"
      }),
      Cm = hm.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      rm = hm.h.fromClass(class {
        constructor(mm) {
          this.view = mm, this.Ym = this.highlight(mm.state.field(Pm))
        }
        update(mm) {
          let Tm = mm.state.field(Pm);
          (Tm != mm.startState.field(Pm) || mm.docChanged || mm.selectionSet || mm.viewportChanged) && (this.Ym = this.highlight(Tm))
        }
        highlight(mm) {
          let {
            query: Tm,
            panel: fm
          } = mm;
          if (!fm || !Tm.spec.valid) return hm.c.none;
          let {
            view: am
          } = this, xm = new Am.y;
          for (let hm = 0, Am = am.U1, wm = Am.length; hm < wm; hm++) {
            let {
              from: mm,
              to: fm
            } = Am[hm];
            for (; hm < wm - 1 && fm > Am[hm + 1].from - 500;) fm = Am[++hm].to;
            Tm.highlight(am.state, mm, fm, ((mm, Tm) => {
              let fm = am.state.selection.mo.some((fm => fm.from == mm && fm.to == Tm));
              xm.add(mm, Tm, fm ? Cm : ym)
            }))
          }
          return xm.finish()
        }
      }, {
        Ym: mm => mm.Ym
      });

    function sm(mm) {
      return Tm => {
        let fm = Tm.state.field(Pm, !1);
        return fm && fm.query.spec.valid ? mm(Tm, fm) : Wm(Tm)
      }
    }
    const lm = sm(((mm, Tm) => {
        let {
          query: fm
        } = Tm, {
          to: hm
        } = mm.state.selection.main, am = fm.nextMatch(mm.state, hm, hm);
        if (!am) return !1;
        let xm = Am.o.single(am.from, am.to),
          wm = mm.state.facet(Jm);
        return mm.dispatch({
          selection: xm,
          effects: [aT(mm, am), wm.scrollToMatch(xm.main, mm)],
          userEvent: "select.search"
        }), gm(mm), !0
      })),
      Mm = sm(((mm, Tm) => {
        let {
          query: fm
        } = Tm, {
          state: hm
        } = mm, {
          from: am
        } = hm.selection.main, xm = fm.prevMatch(hm, am, am);
        if (!xm) return !1;
        let wm = Am.o.single(xm.from, xm.to),
          Dm = mm.state.facet(Jm);
        return mm.dispatch({
          selection: wm,
          effects: [aT(mm, xm), Dm.scrollToMatch(wm.main, mm)],
          userEvent: "select.search"
        }), gm(mm), !0
      })),
      um = sm(((mm, Tm) => {
        let {
          query: fm
        } = Tm, hm = fm.matchAll(mm.state, 1e3);
        return !(!hm || !hm.length) && (mm.dispatch({
          selection: Am.o.create(hm.map((mm => Am.o.range(mm.from, mm.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      Bm = sm(((mm, Tm) => {
        let {
          query: fm
        } = Tm, {
          state: am
        } = mm, {
          from: xm,
          to: wm
        } = am.selection.main;
        if (am.readOnly) return !1;
        let Dm = fm.nextMatch(am, xm, xm);
        if (!Dm) return !1;
        let im, Rm, pm = Dm,
          Em = [],
          om = [];
        pm.from == xm && pm.to == wm && (Rm = am.toText(fm.getReplacement(pm)), Em.push({
          from: pm.from,
          to: pm.to,
          insert: Rm
        }), pm = fm.nextMatch(am, pm.from, pm.to), om.push(hm.f.announce.of(am.phrase("replaced match on line $", am.doc.lineAt(xm).number) + ".")));
        let Om = mm.state.changes(Em);
        return pm && (im = Am.o.single(pm.from, pm.to).map(Om), om.push(aT(mm, pm)), om.push(am.facet(Jm).scrollToMatch(im.main, mm))), mm.dispatch({
          changes: Om,
          selection: im,
          effects: om,
          userEvent: "input.replace"
        }), !0
      })),
      Lm = sm(((mm, Tm) => {
        let {
          query: fm
        } = Tm;
        if (mm.state.readOnly) return !1;
        let Am = fm.matchAll(mm.state, 1e9).map((mm => {
          let {
            from: Tm,
            to: hm
          } = mm;
          return {
            from: Tm,
            to: hm,
            insert: fm.getReplacement(mm)
          }
        }));
        if (!Am.length) return !1;
        let am = mm.state.phrase("replaced $ matches", Am.length) + ".";
        return mm.dispatch({
          changes: Am,
          effects: hm.f.announce.of(am),
          userEvent: "input.replace.all"
        }), !0
      }));

    function tm(mm) {
      return mm.state.facet(Jm).createPanel(mm)
    }

    function Um(mm, Tm) {
      var fm, hm, Am, am, xm;
      let wm = mm.selection.main,
        Dm = wm.empty || wm.to > wm.from + 100 ? "" : mm.sliceDoc(wm.from, wm.to);
      if (Tm && !Dm) return Tm;
      let im = mm.facet(Jm);
      return new cm({
        search: (null !== (fm = null === Tm || void 0 === Tm ? void 0 : Tm.literal) && void 0 !== fm ? fm : im.literal) ? Dm : Dm.replace(/\n/g, "\\n"),
        caseSensitive: null !== (hm = null === Tm || void 0 === Tm ? void 0 : Tm.caseSensitive) && void 0 !== hm ? hm : im.caseSensitive,
        literal: null !== (Am = null === Tm || void 0 === Tm ? void 0 : Tm.literal) && void 0 !== Am ? Am : im.literal,
        regexp: null !== (am = null === Tm || void 0 === Tm ? void 0 : Tm.regexp) && void 0 !== am ? am : im.regexp,
        wholeWord: null !== (xm = null === Tm || void 0 === Tm ? void 0 : Tm.wholeWord) && void 0 !== xm ? xm : im.wholeWord
      })
    }

    function dm(mm) {
      let Tm = (0, hm.r)(mm, tm);
      return Tm && Tm.dom.querySelector("[main-field]")
    }

    function gm(mm) {
      let Tm = dm(mm);
      Tm && Tm == mm.root.activeElement && Tm.select()
    }
    const Wm = mm => {
        let Tm = mm.state.field(Pm, !1);
        if (Tm && Tm.panel) {
          let fm = dm(mm);
          if (fm && fm != mm.root.activeElement) {
            let hm = Um(mm.state, Tm.query.spec);
            hm.valid && mm.dispatch({
              effects: Gm.of(hm)
            }), fm.focus(), fm.select()
          }
        } else mm.dispatch({
          effects: [Xm.of(!0), Tm ? Gm.of(Um(mm.state, Tm.query.spec)) : Am.J.appendConfig.of(wT)]
        });
        return !0
      },
      Fm = mm => {
        let Tm = mm.state.field(Pm, !1);
        if (!Tm || !Tm.panel) return !1;
        let fm = (0, hm.r)(mm, tm);
        return fm && fm.dom.contains(mm.root.activeElement) && mm.focus(), mm.dispatch({
          effects: Xm.of(!1)
        }), !0
      },
      mT = [{
        key: "Mod-f",
        run: Wm,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: lm,
        shift: Mm,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: lm,
        shift: Mm,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: Fm,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm, hm = Tm.selection;
          if (hm.mo.length > 1 || hm.main.empty) return !1;
          let {
            from: am,
            to: xm
          } = hm.main, Dm = [], im = 0;
          for (let Rm = new wm(Tm.doc, Tm.sliceDoc(am, xm)); !Rm.next().done;) {
            if (Dm.length > 1e3) return !1;
            Rm.value.from == am && (im = Dm.length), Dm.push(Am.o.range(Rm.value.from, Rm.value.to))
          }
          return fm(Tm.update({
            selection: Am.o.create(Dm, im),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: mm => {
          let {
            state: Tm
          } = mm, fm = String(Tm.doc.lineAt(mm.state.selection.main.head).number), {
            close: am,
            result: xm
          } = (0, hm.ab)(mm, {
            label: Tm.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: fm
            },
            focus: !0,
            submitLabel: Tm.phrase("go")
          });
          return xm.then((fm => {
            let xm = fm && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(fm.elements.line.value);
            if (!xm) return void mm.dispatch({
              effects: am
            });
            let wm = Tm.doc.lineAt(Tm.selection.main.head),
              [, Dm, im, Rm, pm] = xm,
              Em = Rm ? +Rm.slice(1) : 0,
              om = im ? +im : wm.number;
            if (im && pm) {
              let mm = om / 100;
              Dm && (mm = mm * ("-" == Dm ? -1 : 1) + wm.number / Tm.doc.lines), om = Math.round(Tm.doc.lines * mm)
            } else im && Dm && (om = om * ("-" == Dm ? -1 : 1) + wm.number);
            let Om = Tm.doc.line(Math.max(1, Math.min(Tm.doc.lines, om))),
              Ym = Am.o.cursor(Om.from + Math.max(0, Math.min(Em, Om.length)));
            mm.dispatch({
              effects: [am, hm.f.scrollIntoView(Ym.from, {
                y: "center"
              })],
              selection: Ym
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm, {
            mo: am
          } = Tm.selection;
          if (am.some((mm => mm.from === mm.to))) return (mm => {
            let {
              state: Tm,
              dispatch: fm
            } = mm, {
              selection: hm
            } = Tm, am = Am.o.create(hm.mo.map((mm => Tm.wordAt(mm.head) || Am.o.cursor(mm.head))), hm.mainIndex);
            return !am.eq(hm) && (fm(Tm.update({
              selection: am
            })), !0)
          })({
            state: Tm,
            dispatch: fm
          });
          let xm = Tm.sliceDoc(am[0].from, am[0].to);
          if (Tm.selection.mo.some((mm => Tm.sliceDoc(mm.from, mm.to) != xm))) return !1;
          let Dm = function(mm, Tm) {
            let {
              main: fm,
              mo: hm
            } = mm.selection, Am = mm.wordAt(fm.head), am = Am && Am.from == fm.from && Am.to == fm.to;
            for (let xm = !1, Dm = new wm(mm.doc, Tm, hm[hm.length - 1].to);;) {
              if (Dm.next(), !Dm.done) {
                if (xm && hm.some((mm => mm.from == Dm.value.from))) continue;
                if (am) {
                  let Tm = mm.wordAt(Dm.value.from);
                  if (!Tm || Tm.from != Dm.value.from || Tm.to != Dm.value.to) continue
                }
                return Dm.value
              }
              if (xm) return null;
              Dm = new wm(mm.doc, Tm, 0, Math.max(0, hm[hm.length - 1].from - 1)), xm = !0
            }
          }(Tm, xm);
          return !!Dm && (fm(Tm.update({
            selection: Tm.selection.addRange(Am.o.range(Dm.from, Dm.to), !1),
            effects: hm.f.scrollIntoView(Dm.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class TT {
      constructor(mm) {
        this.view = mm;
        let Tm = this.query = mm.state.field(Pm).query.spec;

        function fm(mm, Tm, fm) {
          return (0, am.c)("button", {
            class: "cm-button",
            name: mm,
            onclick: Tm,
            type: "button"
          }, fm)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, am.c)("input", {
          value: Tm.search,
          placeholder: fT(mm, "Find"),
          "aria-label": fT(mm, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, am.c)("input", {
          value: Tm.replace,
          placeholder: fT(mm, "Replace"),
          "aria-label": fT(mm, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, am.c)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: Tm.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, am.c)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: Tm.regexp,
          onchange: this.commit
        }), this.wordField = (0, am.c)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: Tm.wholeWord,
          onchange: this.commit
        }), this.dom = (0, am.c)("div", {
          onkeydown: mm => this.keydown(mm),
          class: "cm-search"
        }, [this.searchField, fm("next", (() => lm(mm)), [fT(mm, "next")]), fm("prev", (() => Mm(mm)), [fT(mm, "previous")]), fm("select", (() => um(mm)), [fT(mm, "all")]), (0, am.c)("label", null, [this.caseField, fT(mm, "match case")]), (0, am.c)("label", null, [this.reField, fT(mm, "regexp")]), (0, am.c)("label", null, [this.wordField, fT(mm, "by word")]), ...mm.state.readOnly ? [] : [(0, am.c)("br"), this.replaceField, fm("replace", (() => Bm(mm)), [fT(mm, "replace")]), fm("replaceAll", (() => Lm(mm)), [fT(mm, "replace all")])], (0, am.c)("button", {
          name: "close",
          onclick: () => Fm(mm),
          "aria-label": fT(mm, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let mm = new cm({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        mm.eq(this.query) || (this.query = mm, this.view.dispatch({
          effects: Gm.of(mm)
        }))
      }
      keydown(mm) {
        (0, hm._)(this.view, mm, "search-panel") ? mm.preventDefault(): 13 == mm.keyCode && mm.target == this.searchField ? (mm.preventDefault(), (mm.shiftKey ? Mm : lm)(this.view)) : 13 == mm.keyCode && mm.target == this.replaceField && (mm.preventDefault(), Bm(this.view))
      }
      update(mm) {
        for (let Tm of mm.transactions)
          for (let mm of Tm.effects) mm.is(Gm) && !mm.value.eq(this.query) && this.setQuery(mm.value)
      }
      setQuery(mm) {
        this.query = mm, this.searchField.value = mm.search, this.replaceField.value = mm.replace, this.caseField.checked = mm.caseSensitive, this.reField.checked = mm.regexp, this.wordField.checked = mm.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(Jm).top
      }
    }

    function fT(mm, Tm) {
      return mm.state.phrase(Tm)
    }
    const hT = 30,
      AT = /[\s\.,:;?!]/;

    function aT(mm, Tm) {
      let {
        from: fm,
        to: Am
      } = Tm, am = mm.state.doc.lineAt(fm), xm = mm.state.doc.lineAt(Am).to, wm = Math.max(am.from, fm - hT), Dm = Math.min(xm, Am + hT), im = mm.state.sliceDoc(wm, Dm);
      if (wm != am.from)
        for (let hm = 0; hm < hT; hm++)
          if (!AT.test(im[hm + 1]) && AT.test(im[hm])) {
            im = im.slice(hm);
            break
          } if (Dm != xm)
        for (let hm = im.length - 1; hm > im.length - hT; hm--)
          if (!AT.test(im[hm - 1]) && AT.test(im[hm])) {
            im = im.slice(0, hm);
            break
          } return hm.f.announce.of(`${mm.state.phrase("current match")}. ${im} ${mm.state.phrase("on line")} ${am.number}.`)
    }
    const xT = hm.f.baseTheme({
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
      wT = [Pm, Am.x.low(rm), xT]
  },
  41361: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Nm,
      e: () => RT,
      f: () => bA,
      g: () => Dx,
      h: () => gT,
      k: () => Sm,
      l: () => Na,
      n: () => FA,
      o: () => Da,
      r: () => Fa,
      v: () => da,
      x: () => ox,
      F: () => Ka,
      B: () => Gx,
      I: () => qa,
      K: () => Ua,
      M: () => yA,
      P: () => bx,
      S: () => vT,
      W: () => ca,
      Y: () => ba,
      _: () => sA,
      ab: () => Ax,
      cb: () => hx,
      eb: () => Ma
    });
    for (var hm = fm(41356), Am = fm(41369), am = {
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
      }, xm = {
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
      }, wm = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Dm = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), im = 0; im < 10; im++) am[48 + im] = am[96 + im] = String(im);
    for (im = 1; im <= 24; im++) am[im + 111] = "F" + im;
    for (im = 65; im <= 90; im++) am[im] = String.fromCharCode(im + 32), xm[im] = String.fromCharCode(im);
    for (var Rm in am) xm.hasOwnProperty(Rm) || (xm[Rm] = am[Rm]);
    var pm = fm(41373);
    let Em = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      om = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const Om = /Edge\/(\d+)/.exec(Em.userAgent),
      Ym = /MSIE \d/.test(Em.userAgent),
      qm = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Em.userAgent),
      jm = !!(Ym || qm || Om),
      Vm = !jm && /gecko\/(\d+)/i.test(Em.userAgent),
      Im = !jm && /Chrome\/(\d+)/.exec(Em.userAgent),
      Km = "webkitFontSmoothing" in om.documentElement.style,
      Qm = !jm && /Apple Computer/.test(Em.vendor),
      nm = Qm && (/Mobile\/\w+/.test(Em.userAgent) || Em.maxTouchPoints > 2);
    var Jm = {
      mac: nm || /Mac/.test(Em.platform),
      windows: /Win/.test(Em.platform),
      linux: /Linux|X11/.test(Em.platform),
      ie: jm,
      ie_version: Ym ? om.documentMode || 6 : qm ? +qm[1] : Om ? +Om[1] : 0,
      gecko: Vm,
      gecko_version: Vm ? +(/Firefox\/(\d+)/.exec(Em.userAgent) || [0, 0])[1] : 0,
      chrome: !!Im,
      chrome_version: Im ? +Im[1] : 0,
      ios: nm,
      android: /Android\b/.test(Em.userAgent),
      webkit: Km,
      webkit_version: Km ? +(/\bAppleWebKit\/(\d+)/.exec(Em.userAgent) || [0, 0])[1] : 0,
      safari: Qm,
      safari_version: Qm ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Em.userAgent) || [0, 0])[1] : 0,
      tabSize: null != om.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function cm(mm, Tm) {
      for (let fm in mm) "class" == fm && Tm.class ? Tm.class += " " + mm.class : "style" == fm && Tm.style ? Tm.style += ";" + mm.style : Tm[fm] = mm[fm];
      return Tm
    }
    const zm = Object.create(null);

    function Zm(mm, Tm, fm) {
      if (mm == Tm) return !0;
      mm || (mm = zm), Tm || (Tm = zm);
      let hm = Object.keys(mm),
        Am = Object.keys(Tm);
      if (hm.length - (fm && hm.indexOf(fm) > -1 ? 1 : 0) != Am.length - (fm && Am.indexOf(fm) > -1 ? 1 : 0)) return !1;
      for (let am of hm)
        if (am != fm && (-1 == Am.indexOf(am) || mm[am] !== Tm[am])) return !1;
      return !0
    }

    function km(mm, Tm, fm) {
      let hm = !1;
      if (Tm)
        for (let Am in Tm) fm && Am in fm || (hm = !0, "style" == Am ? mm.style.cssText = "" : mm.removeAttribute(Am));
      if (fm)
        for (let Am in fm) Tm && Tm[Am] == fm[Am] || (hm = !0, "style" == Am ? mm.style.cssText = fm[Am] : mm.setAttribute(Am, fm[Am]));
      return hm
    }

    function bm(mm) {
      let Tm = Object.create(null);
      for (let fm = 0; fm < mm.attributes.length; fm++) {
        let hm = mm.attributes[fm];
        Tm[hm.name] = hm.value
      }
      return Tm
    }
    class Sm {
      eq(mm) {
        return !1
      }
      updateDOM(mm, Tm, fm) {
        return !1
      }
      compare(mm) {
        return this == mm || this.constructor == mm.constructor && this.eq(mm)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(mm) {
        return !0
      }
      coordsAt(mm, Tm, fm) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(mm) {}
    }
    var em = function(mm) {
      return mm[mm.Text = 0] = "Text", mm[mm.WidgetBefore = 1] = "WidgetBefore", mm[mm.WidgetAfter = 2] = "WidgetAfter", mm[mm.WidgetRange = 3] = "WidgetRange", mm
    }(em || (em = {}));
    class Nm extends hm.G {
      constructor(mm, Tm, fm, hm) {
        super(), this.startSide = mm, this.endSide = Tm, this.widget = fm, this.spec = hm
      }
      get heightRelevant() {
        return !1
      }
      static mark(mm) {
        return new Gm(mm)
      }
      static widget(mm) {
        let Tm = Math.max(-1e4, Math.min(1e4, mm.side || 0)),
          fm = !!mm.block;
        return Tm += fm && !mm.inlineOrder ? Tm > 0 ? 3e8 : -4e8 : Tm > 0 ? 1e8 : -1e8, new Pm(mm, Tm, Tm, fm, mm.widget || null, !1)
      }
      static replace(mm) {
        let Tm, fm, hm = !!mm.block;
        if (mm.isBlockGap) Tm = -5e8, fm = 4e8;
        else {
          let {
            start: Am,
            end: am
          } = Hm(mm, hm);
          Tm = (Am ? hm ? -3e8 : -1 : 5e8) - 1, fm = 1 + (am ? hm ? 2e8 : 1 : -6e8)
        }
        return new Pm(mm, Tm, fm, hm, mm.widget || null, !0)
      }
      static line(mm) {
        return new Xm(mm)
      }
      static set(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return hm.C.of(mm, Tm)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Nm.none = hm.C.empty;
    class Gm extends Nm {
      constructor(mm) {
        let {
          start: Tm,
          end: fm
        } = Hm(mm);
        super(Tm ? -1 : 5e8, fm ? 1 : -6e8, null, mm), this.tagName = mm.tagName || "span", this.attrs = mm.class && mm.attributes ? cm(mm.attributes, {
          class: mm.class
        }) : mm.class ? {
          class: mm.class
        } : mm.attributes || zm
      }
      eq(mm) {
        return this == mm || mm instanceof Gm && this.tagName == mm.tagName && Zm(this.attrs, mm.attrs)
      }
      range(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm;
        if (mm >= Tm) throw new RangeError("Mark decorations may not be empty");
        return super.range(mm, Tm)
      }
    }
    Gm.prototype.point = !1;
    class Xm extends Nm {
      constructor(mm) {
        super(-2e8, -2e8, null, mm)
      }
      eq(mm) {
        return mm instanceof Xm && this.spec.class == mm.spec.class && Zm(this.spec.attributes, mm.spec.attributes)
      }
      range(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm;
        if (Tm != mm) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(mm, Tm)
      }
    }
    Xm.prototype.mapMode = hm.u.TrackBefore, Xm.prototype.point = !0;
    class Pm extends Nm {
      constructor(mm, Tm, fm, Am, am, xm) {
        super(Tm, fm, am, mm), this.block = Am, this.isReplace = xm, this.mapMode = Am ? Tm <= 0 ? hm.u.TrackBefore : hm.u.TrackAfter : hm.u.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? em.WidgetRange : this.startSide <= 0 ? em.WidgetBefore : em.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(mm) {
        return mm instanceof Pm && (Tm = this.widget, fm = mm.widget, Tm == fm || !!(Tm && fm && Tm.compare(fm))) && this.block == mm.block && this.startSide == mm.startSide && this.endSide == mm.endSide;
        var Tm, fm
      }
      range(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mm;
        if (this.isReplace && (mm > Tm || mm == Tm && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && Tm != mm) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(mm, Tm)
      }
    }

    function Hm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: fm,
          inclusiveEnd: hm
        } = mm;
      return null == fm && (fm = mm.inclusive), null == hm && (hm = mm.inclusive), {
        start: null !== fm && void 0 !== fm ? fm : Tm,
        end: null !== hm && void 0 !== hm ? hm : Tm
      }
    }

    function ym(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Am = fm.length - 1;
      Am >= 0 && fm[Am] + hm >= mm ? fm[Am] = Math.max(fm[Am], Tm) : fm.push(mm, Tm)
    }
    Pm.prototype.point = !0;
    class Cm extends hm.G {
      constructor(mm, Tm) {
        super(), this.tagName = mm, this.attributes = Tm
      }
      eq(mm) {
        return mm == this || mm instanceof Cm && this.tagName == mm.tagName && Zm(this.attributes, mm.attributes)
      }
      static create(mm) {
        return new Cm(mm.tagName, mm.attributes || zm)
      }
      static set(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return hm.C.of(mm, Tm)
      }
    }

    function rm(mm) {
      let Tm;
      return Tm = 11 == mm.nodeType ? mm.getSelection ? mm : mm.ownerDocument : mm, Tm.getSelection()
    }

    function sm(mm, Tm) {
      return !!Tm && (mm == Tm || mm.contains(1 != Tm.nodeType ? Tm.parentNode : Tm))
    }

    function lm(mm, Tm) {
      if (!Tm.anchorNode) return !1;
      try {
        return sm(mm, Tm.anchorNode)
      } catch (fm) {
        return !1
      }
    }

    function Mm(mm) {
      return 3 == mm.nodeType ? AT(mm, 0, mm.nodeValue.length).getClientRects() : 1 == mm.nodeType ? mm.getClientRects() : []
    }

    function um(mm, Tm, fm, hm) {
      return !!fm && (tm(mm, Tm, fm, hm, -1) || tm(mm, Tm, fm, hm, 1))
    }

    function Bm(mm) {
      for (var Tm = 0;; Tm++)
        if (!(mm = mm.previousSibling)) return Tm
    }

    function Lm(mm) {
      return 1 == mm.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(mm.nodeName)
    }

    function tm(mm, Tm, fm, hm, Am) {
      for (;;) {
        if (mm == fm && Tm == hm) return !0;
        if (Tm == (Am < 0 ? 0 : Um(mm))) {
          if ("DIV" == mm.nodeName) return !1;
          let fm = mm.parentNode;
          if (!fm || 1 != fm.nodeType) return !1;
          Tm = Bm(mm) + (Am < 0 ? 0 : 1), mm = fm
        } else {
          if (1 != mm.nodeType) return !1;
          if (1 == (mm = mm.childNodes[Tm + (Am < 0 ? -1 : 0)]).nodeType && "false" == mm.contentEditable) return !1;
          Tm = Am < 0 ? Um(mm) : 0
        }
      }
    }

    function Um(mm) {
      return 3 == mm.nodeType ? mm.nodeValue.length : mm.childNodes.length
    }

    function dm(mm, Tm) {
      let fm = Tm ? mm.left : mm.right;
      return {
        left: fm,
        right: fm,
        top: mm.top,
        bottom: mm.bottom
      }
    }

    function gm(mm) {
      let Tm = mm.visualViewport;
      return Tm ? {
        left: 0,
        right: Tm.width,
        top: 0,
        bottom: Tm.height
      } : {
        left: 0,
        right: mm.innerWidth,
        top: 0,
        bottom: mm.innerHeight
      }
    }

    function Wm(mm, Tm) {
      let fm = Tm.width / mm.offsetWidth,
        hm = Tm.height / mm.offsetHeight;
      return (fm > .995 && fm < 1.005 || !isFinite(fm) || Math.abs(Tm.width - mm.offsetWidth) < 1) && (fm = 1), (hm > .995 && hm < 1.005 || !isFinite(hm) || Math.abs(Tm.height - mm.offsetHeight) < 1) && (hm = 1), {
        scaleX: fm,
        scaleY: hm
      }
    }

    function Fm(mm) {
      let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        fm = mm.ownerDocument,
        hm = null,
        Am = null;
      for (let am = mm.parentNode; am && (am != fm.body && (Tm && !hm || !Am));)
        if (1 == am.nodeType) !Am && am.scrollHeight > am.clientHeight && (Am = am), Tm && !hm && am.scrollWidth > am.clientWidth && (hm = am), am = am.assignedSlot || am.parentNode;
        else {
          if (11 != am.nodeType) break;
          am = am.host
        } return {
        x: hm,
        y: Am
      }
    }
    Cm.prototype.startSide = Cm.prototype.endSide = -1;
    class mT {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(mm) {
        return this.anchorNode == mm.anchorNode && this.anchorOffset == mm.anchorOffset && this.focusNode == mm.focusNode && this.focusOffset == mm.focusOffset
      }
      setRange(mm) {
        let {
          anchorNode: Tm,
          focusNode: fm
        } = mm;
        this.set(Tm, Math.min(mm.anchorOffset, Tm ? Um(Tm) : 0), fm, Math.min(mm.focusOffset, fm ? Um(fm) : 0))
      }
      set(mm, Tm, fm, hm) {
        this.anchorNode = mm, this.anchorOffset = Tm, this.focusNode = fm, this.focusOffset = hm
      }
    }
    let TT, fT = null;

    function hT(mm) {
      if (mm.setActive) return mm.setActive();
      if (fT) return mm.focus(fT);
      let Tm = [];
      for (let fm = mm; fm && (Tm.push(fm, fm.scrollTop, fm.scrollLeft), fm != fm.ownerDocument); fm = fm.parentNode);
      if (mm.focus(null == fT ? {
          get preventScroll() {
            return fT = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !fT) {
        fT = !1;
        for (let mm = 0; mm < Tm.length;) {
          let fm = Tm[mm++],
            hm = Tm[mm++],
            Am = Tm[mm++];
          fm.scrollTop != hm && (fm.scrollTop = hm), fm.scrollLeft != Am && (fm.scrollLeft = Am)
        }
      }
    }

    function AT(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tm,
        hm = TT || (TT = document.createRange());
      return hm.setEnd(mm, fm), hm.setStart(mm, Tm), hm
    }

    function aT(mm, Tm, fm, hm) {
      let Am = {
        key: Tm,
        code: Tm,
        keyCode: fm,
        which: fm,
        cancelable: !0
      };
      hm && ({
        altKey: Am.altKey,
        ctrlKey: Am.ctrlKey,
        shiftKey: Am.shiftKey,
        metaKey: Am.metaKey
      } = hm);
      let am = new KeyboardEvent("keydown", Am);
      am.synthetic = !0, mm.dispatchEvent(am);
      let xm = new KeyboardEvent("keyup", Am);
      return xm.synthetic = !0, mm.dispatchEvent(xm), am.defaultPrevented || xm.defaultPrevented
    }

    function xT(mm) {
      return mm instanceof Window ? mm.pageYOffset > Math.max(0, mm.document.documentElement.scrollHeight - mm.innerHeight - 4) : mm.scrollTop > Math.max(1, mm.scrollHeight - mm.clientHeight - 4)
    }

    function wT(mm, Tm) {
      for (let fm = mm, hm = Tm;;) {
        if (3 == fm.nodeType && hm > 0) return {
          node: fm,
          offset: hm
        };
        if (1 == fm.nodeType && hm > 0) {
          if ("false" == fm.contentEditable) return null;
          fm = fm.childNodes[hm - 1], hm = Um(fm)
        } else {
          if (!fm.parentNode || Lm(fm)) return null;
          hm = Bm(fm), fm = fm.parentNode
        }
      }
    }

    function DT(mm, Tm) {
      for (let fm = mm, hm = Tm;;) {
        if (3 == fm.nodeType && hm < fm.nodeValue.length) return {
          node: fm,
          offset: hm
        };
        if (1 == fm.nodeType && hm < fm.childNodes.length) {
          if ("false" == fm.contentEditable) return null;
          fm = fm.childNodes[hm], hm = 0
        } else {
          if (!fm.parentNode || Lm(fm)) return null;
          hm = Bm(fm) + 1, fm = fm.parentNode
        }
      }
    }
    Jm.safari && Jm.safari_version >= 26 && (fT = !1);
    class iT {
      constructor(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = mm, this.offset = Tm, this.precise = fm
      }
      static before(mm, Tm) {
        return new iT(mm.parentNode, Bm(mm), Tm)
      }
      static after(mm, Tm) {
        return new iT(mm.parentNode, Bm(mm) + 1, Tm)
      }
    }
    var RT = function(mm) {
      return mm[mm.LTR = 0] = "LTR", mm[mm.RTL = 1] = "RTL", mm
    }(RT || (RT = {}));
    const pT = RT.LTR,
      ET = RT.RTL;

    function oT(mm) {
      let Tm = [];
      for (let fm = 0; fm < mm.length; fm++) Tm.push(1 << +mm[fm]);
      return Tm
    }
    const OT = oT("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      YT = oT("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      qT = Object.create(null),
      jT = [];
    for (let Xx of ["()", "[]", "{}"]) {
      let mm = Xx.charCodeAt(0),
        Tm = Xx.charCodeAt(1);
      qT[mm] = Tm, qT[Tm] = -mm
    }

    function VT(mm) {
      return mm <= 247 ? OT[mm] : 1424 <= mm && mm <= 1524 ? 2 : 1536 <= mm && mm <= 1785 ? YT[mm - 1536] : 1774 <= mm && mm <= 2220 ? 4 : 8192 <= mm && mm <= 8204 ? 256 : 64336 <= mm && mm <= 65023 ? 4 : 1
    }
    const IT = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class KT {
      get dir() {
        return this.level % 2 ? ET : pT
      }
      constructor(mm, Tm, fm) {
        this.from = mm, this.to = Tm, this.level = fm
      }
      side(mm, Tm) {
        return this.dir == Tm == mm ? this.to : this.from
      }
      forward(mm, Tm) {
        return mm == (this.dir == Tm)
      }
      static find(mm, Tm, fm, hm) {
        let Am = -1;
        for (let am = 0; am < mm.length; am++) {
          let xm = mm[am];
          if (xm.from <= Tm && xm.to >= Tm) {
            if (xm.level == fm) return am;
            (Am < 0 || (0 != hm ? hm < 0 ? xm.from < Tm : xm.to > Tm : mm[Am].level > xm.level)) && (Am = am)
          }
        }
        if (Am < 0) throw new RangeError("Index out of range");
        return Am
      }
    }

    function QT(mm, Tm) {
      if (mm.length != Tm.length) return !1;
      for (let fm = 0; fm < mm.length; fm++) {
        let hm = mm[fm],
          Am = Tm[fm];
        if (hm.from != Am.from || hm.to != Am.to || hm.direction != Am.direction || !QT(hm.inner, Am.inner)) return !1
      }
      return !0
    }
    const nT = [];

    function JT(mm, Tm, fm, hm, Am, am, xm) {
      let wm = hm % 2 ? 2 : 1;
      if (hm % 2 == Am % 2)
        for (let Dm = Tm, im = 0; Dm < fm;) {
          let Tm = !0,
            Rm = !1;
          if (im == am.length || Dm < am[im].from) {
            let mm = nT[Dm];
            mm != wm && (Tm = !1, Rm = 16 == mm)
          }
          let pm = Tm || 1 != wm ? null : [],
            Em = Tm ? hm : hm + 1,
            om = Dm;
          mm: for (;;)
            if (im < am.length && om == am[im].from) {
              if (Rm) break mm;
              let Om = am[im];
              if (!Tm)
                for (let mm = Om.to, Tm = im + 1;;) {
                  if (mm == fm) break mm;
                  if (!(Tm < am.length && am[Tm].from == mm)) {
                    if (nT[mm] == wm) break mm;
                    break
                  }
                  mm = am[Tm++].to
                }
              if (im++, pm) pm.push(Om);
              else {
                Om.from > Dm && xm.push(new KT(Dm, Om.from, Em)), cT(mm, Om.direction == pT != !(Em % 2) ? hm + 1 : hm, Am, Om.inner, Om.from, Om.to, xm), Dm = Om.to
              }
              om = Om.to
            } else {
              if (om == fm || (Tm ? nT[om] != wm : nT[om] == wm)) break;
              om++
            } pm ? JT(mm, Dm, om, hm + 1, Am, pm, xm) : Dm < om && xm.push(new KT(Dm, om, Em)), Dm = om
        } else
          for (let Dm = fm, im = am.length; Dm > Tm;) {
            let fm = !0,
              Rm = !1;
            if (!im || Dm > am[im - 1].to) {
              let mm = nT[Dm - 1];
              mm != wm && (fm = !1, Rm = 16 == mm)
            }
            let pm = fm || 1 != wm ? null : [],
              Em = fm ? hm : hm + 1,
              om = Dm;
            mm: for (;;)
              if (im && om == am[im - 1].to) {
                if (Rm) break mm;
                let Om = am[--im];
                if (!fm)
                  for (let mm = Om.from, fm = im;;) {
                    if (mm == Tm) break mm;
                    if (!fm || am[fm - 1].to != mm) {
                      if (nT[mm - 1] == wm) break mm;
                      break
                    }
                    mm = am[--fm].from
                  }
                if (pm) pm.push(Om);
                else {
                  Om.to < Dm && xm.push(new KT(Om.to, Dm, Em)), cT(mm, Om.direction == pT != !(Em % 2) ? hm + 1 : hm, Am, Om.inner, Om.from, Om.to, xm), Dm = Om.from
                }
                om = Om.from
              } else {
                if (om == Tm || (fm ? nT[om - 1] != wm : nT[om - 1] == wm)) break;
                om--
              } pm ? JT(mm, om, Dm, hm + 1, Am, pm, xm) : om < Dm && xm.push(new KT(om, Dm, Em)), Dm = om
          }
    }

    function cT(mm, Tm, fm, hm, Am, am, xm) {
      let wm = Tm % 2 ? 2 : 1;
      ! function(mm, Tm, fm, hm, Am) {
        for (let am = 0; am <= hm.length; am++) {
          let xm = am ? hm[am - 1].to : Tm,
            wm = am < hm.length ? hm[am].from : fm,
            Dm = am ? 256 : Am;
          for (let Tm = xm, fm = Dm, hm = Dm; Tm < wm; Tm++) {
            let Am = VT(mm.charCodeAt(Tm));
            512 == Am ? Am = fm : 8 == Am && 4 == hm && (Am = 16), nT[Tm] = 4 == Am ? 2 : Am, 7 & Am && (hm = Am), fm = Am
          }
          for (let mm = xm, Tm = Dm, hm = Dm; mm < wm; mm++) {
            let Am = nT[mm];
            if (128 == Am) mm < wm - 1 && Tm == nT[mm + 1] && 24 & Tm ? Am = nT[mm] = Tm : nT[mm] = 256;
            else if (64 == Am) {
              let Am = mm + 1;
              for (; Am < wm && 64 == nT[Am];) Am++;
              let am = mm && 8 == Tm || Am < fm && 8 == nT[Am] ? 1 == hm ? 1 : 8 : 256;
              for (let Tm = mm; Tm < Am; Tm++) nT[Tm] = am;
              mm = Am - 1
            } else 8 == Am && 1 == hm && (nT[mm] = 1);
            Tm = Am, 7 & Am && (hm = Am)
          }
        }
      }(mm, Am, am, hm, wm),
      function(mm, Tm, fm, hm, Am) {
        let am = 1 == Am ? 2 : 1;
        for (let xm = 0, wm = 0, Dm = 0; xm <= hm.length; xm++) {
          let im = xm ? hm[xm - 1].to : Tm,
            Rm = xm < hm.length ? hm[xm].from : fm;
          for (let Tm, fm, hm, xm = im; xm < Rm; xm++)
            if (fm = qT[Tm = mm.charCodeAt(xm)])
              if (fm < 0) {
                for (let mm = wm - 3; mm >= 0; mm -= 3)
                  if (jT[mm + 1] == -fm) {
                    let Tm = jT[mm + 2],
                      fm = 2 & Tm ? Am : 4 & Tm ? 1 & Tm ? am : Am : 0;
                    fm && (nT[xm] = nT[jT[mm]] = fm), wm = mm;
                    break
                  }
              } else {
                if (189 == jT.length) break;
                jT[wm++] = xm, jT[wm++] = Tm, jT[wm++] = Dm
              }
          else if (2 == (hm = nT[xm]) || 1 == hm) {
            let mm = hm == Am;
            Dm = mm ? 0 : 1;
            for (let Tm = wm - 3; Tm >= 0; Tm -= 3) {
              let fm = jT[Tm + 2];
              if (2 & fm) break;
              if (mm) jT[Tm + 2] |= 2;
              else {
                if (4 & fm) break;
                jT[Tm + 2] |= 4
              }
            }
          }
        }
      }(mm, Am, am, hm, wm),
      function(mm, Tm, fm, hm) {
        for (let Am = 0, am = hm; Am <= fm.length; Am++) {
          let xm = Am ? fm[Am - 1].to : mm,
            wm = Am < fm.length ? fm[Am].from : Tm;
          for (let Dm = xm; Dm < wm;) {
            let xm = nT[Dm];
            if (256 == xm) {
              let xm = Dm + 1;
              for (;;)
                if (xm == wm) {
                  if (Am == fm.length) break;
                  xm = fm[Am++].to, wm = Am < fm.length ? fm[Am].from : Tm
                } else {
                  if (256 != nT[xm]) break;
                  xm++
                } let im = 1 == am,
                Rm = im == (1 == (xm < Tm ? nT[xm] : hm)) ? im ? 1 : 2 : hm;
              for (let Tm = xm, hm = Am, am = hm ? fm[hm - 1].to : mm; Tm > Dm;) Tm == am && (Tm = fm[--hm].from, am = hm ? fm[hm - 1].to : mm), nT[--Tm] = Rm;
              Dm = xm
            } else am = xm, Dm++
          }
        }
      }(Am, am, hm, wm), JT(mm, Am, am, Tm, fm, hm, xm)
    }

    function zT(mm, Tm, fm) {
      if (!mm) return [new KT(0, 0, Tm == ET ? 1 : 0)];
      if (Tm == pT && !fm.length && !IT.test(mm)) return ZT(mm.length);
      if (fm.length)
        for (; mm.length > nT.length;) nT[nT.length] = 256;
      let hm = [],
        Am = Tm == pT ? 0 : 1;
      return cT(mm, Am, Am, fm, 0, mm.length, hm), hm
    }

    function ZT(mm) {
      return [new KT(0, mm, 0)]
    }
    let kT = "";

    function bT(mm, Tm, fm, Am, am) {
      var xm;
      let wm = Am.head - mm.from,
        Dm = KT.find(Tm, wm, null !== (xm = Am.bidiLevel) && void 0 !== xm ? xm : -1, Am.assoc),
        im = Tm[Dm],
        Rm = im.side(am, fm);
      if (wm == Rm) {
        let mm = Dm += am ? 1 : -1;
        if (mm < 0 || mm >= Tm.length) return null;
        im = Tm[Dm = mm], wm = im.side(!am, fm), Rm = im.side(am, fm)
      }
      let pm = (0, hm.ab)(mm.text, wm, im.forward(am, fm));
      (pm < im.from || pm > im.to) && (pm = Rm), kT = mm.text.slice(Math.min(wm, pm), Math.max(wm, pm));
      let Em = Dm == (am ? Tm.length - 1 : 0) ? null : Tm[Dm + (am ? 1 : -1)];
      return Em && pm == Rm && Em.level + (am ? 0 : 1) < im.level ? hm.o.cursor(Em.side(!am, fm) + mm.from, Em.forward(am, fm) ? 1 : -1, Em.level) : hm.o.cursor(pm + mm.from, im.forward(am, fm) ? -1 : 1, im.level)
    }

    function ST(mm, Tm, fm) {
      for (let hm = Tm; hm < fm; hm++) {
        let Tm = VT(mm.charCodeAt(hm));
        if (1 == Tm) return pT;
        if (2 == Tm || 4 == Tm) return ET
      }
      return pT
    }
    const eT = hm.s.define(),
      NT = hm.s.define(),
      GT = hm.s.define(),
      XT = hm.s.define(),
      PT = hm.s.define(),
      HT = hm.s.define(),
      yT = hm.s.define(),
      CT = hm.s.define(),
      rT = hm.s.define(),
      sT = hm.s.define({
        combine: mm => mm.some((mm => mm))
      }),
      lT = hm.s.define({
        combine: mm => mm.some((mm => mm))
      }),
      MT = hm.s.define();
    class uT {
      constructor(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = mm, this.y = Tm, this.x = fm, this.yMargin = hm, this.xMargin = Am, this.isSnapshot = am
      }
      map(mm) {
        return mm.empty ? this : new uT(this.range.map(mm), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(mm) {
        return this.range.to <= mm.doc.length ? this : new uT(hm.o.cursor(mm.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const BT = hm.J.define({
        map: (mm, Tm) => mm.map(Tm)
      }),
      LT = hm.J.define();

    function vT(mm, Tm, fm) {
      let hm = mm.facet(XT);
      hm.length ? hm[0](Tm) : window.onerror && window.onerror(String(Tm), fm, void 0, void 0, Tm) || (fm ? console.error(fm + ":", Tm) : console.error(Tm))
    }
    const tT = hm.s.define({
      combine: mm => !mm.length || mm[0]
    });
    let UT = 0;
    const dT = hm.s.define({
      combine: mm => mm.filter(((Tm, fm) => {
        for (let hm = 0; hm < fm; hm++)
          if (mm[hm].plugin == Tm.plugin) return !1;
        return !0
      }))
    });
    class gT {
      constructor(mm, Tm, fm, hm, Am) {
        this.id = mm, this.create = Tm, this.domEventHandlers = fm, this.domEventObservers = hm, this.baseExtensions = Am(this), this.extension = this.baseExtensions.concat(dT.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(mm) {
        return this.baseExtensions.concat(dT.of({
          plugin: this,
          arg: mm
        }))
      }
      static define(mm, Tm) {
        const {
          eventHandlers: fm,
          eventObservers: hm,
          provide: Am,
          Ym: am
        } = Tm || {};
        return new gT(UT++, mm, fm, hm, (mm => {
          let Tm = [];
          return am && Tm.push(Tf.of((Tm => {
            let fm = Tm.plugin(mm);
            return fm ? am(fm) : Nm.none
          }))), Am && Tm.push(Am(mm)), Tm
        }))
      }
      static fromClass(mm, Tm) {
        return gT.define(((Tm, fm) => new mm(Tm, fm)), Tm)
      }
    }
    class WT {
      constructor(mm) {
        this.spec = mm, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(mm) {
        if (this.value) {
          if (this.mustUpdate) {
            let mm = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(mm)
            } catch (Tm) {
              if (vT(mm.state, Tm, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (fm) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(mm, this.spec.arg)
        } catch (Tm) {
          vT(mm.state, Tm, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(mm) {
        var Tm;
        if (null === (Tm = this.value) || void 0 === Tm ? void 0 : Tm.destroy) try {
          this.value.destroy()
        } catch (fm) {
          vT(mm.state, fm, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const FT = hm.s.define(),
      mf = hm.s.define(),
      Tf = hm.s.define(),
      ff = hm.s.define(),
      hf = hm.s.define(),
      Af = hm.s.define(),
      af = hm.s.define();

    function xf(mm, Tm) {
      let fm = mm.state.facet(af);
      if (!fm.length) return fm;
      let Am = fm.map((Tm => Tm instanceof Function ? Tm(mm) : Tm)),
        am = [];
      return hm.C.spans(Am, Tm.from, Tm.to, {
        point() {},
        span(mm, fm, hm, Am) {
          let xm = mm - Tm.from,
            wm = fm - Tm.from,
            Dm = am;
          for (let am = hm.length - 1; am >= 0; am--, Am--) {
            let mm, fm = hm[am].spec.bidiIsolate;
            if (null == fm && (fm = ST(Tm.text, xm, wm)), Am > 0 && Dm.length && (mm = Dm[Dm.length - 1]).to == xm && mm.direction == fm) mm.to = wm, Dm = mm.inner;
            else {
              let mm = {
                from: xm,
                to: wm,
                direction: fm,
                inner: []
              };
              Dm.push(mm), Dm = mm.inner
            }
          }
        }
      }), am
    }
    const wf = hm.s.define();

    function Df(mm) {
      let Tm = 0,
        fm = 0,
        hm = 0,
        Am = 0;
      for (let am of mm.state.facet(wf)) {
        let xm = am(mm);
        xm && (null != xm.left && (Tm = Math.max(Tm, xm.left)), null != xm.right && (fm = Math.max(fm, xm.right)), null != xm.top && (hm = Math.max(hm, xm.top)), null != xm.bottom && (Am = Math.max(Am, xm.bottom)))
      }
      return {
        left: Tm,
        right: fm,
        top: hm,
        bottom: Am
      }
    }
    const Rf = hm.s.define();
    class pf {
      constructor(mm, Tm, fm, hm) {
        this.fromA = mm, this.toA = Tm, this.fromB = fm, this.toB = hm
      }
      join(mm) {
        return new pf(Math.min(this.fromA, mm.fromA), Math.max(this.toA, mm.toA), Math.min(this.fromB, mm.fromB), Math.max(this.toB, mm.toB))
      }
      addToSet(mm) {
        let Tm = mm.length,
          fm = this;
        for (; Tm > 0; Tm--) {
          let hm = mm[Tm - 1];
          if (!(hm.fromA > fm.toA)) {
            if (hm.toA < fm.fromA) break;
            fm = fm.join(hm), mm.splice(Tm - 1, 1)
          }
        }
        return mm.splice(Tm, 0, fm), mm
      }
      static extendWithRanges(mm, Tm) {
        if (0 == Tm.length) return mm;
        let fm = [];
        for (let hm = 0, Am = 0, am = 0;;) {
          let xm = hm < mm.length ? mm[hm].fromB : 1e9,
            wm = Am < Tm.length ? Tm[Am] : 1e9,
            Dm = Math.min(xm, wm);
          if (1e9 == Dm) break;
          let im = Dm + am,
            Rm = Dm,
            pm = im;
          for (;;)
            if (Am < Tm.length && Tm[Am] <= Rm) {
              let fm = Tm[Am + 1];
              Am += 2, Rm = Math.max(Rm, fm);
              for (let Tm = hm; Tm < mm.length && mm[Tm].fromB <= Rm; Tm++) am = mm[Tm].toA - mm[Tm].toB;
              pm = Math.max(pm, fm + am)
            } else {
              if (!(hm < mm.length && mm[hm].fromB <= Rm)) break;
              {
                let Tm = mm[hm++];
                Rm = Math.max(Rm, Tm.toB), pm = Math.max(pm, Tm.toA), am = Tm.toA - Tm.toB
              }
            } fm.push(new pf(im, pm, Dm, Rm))
        }
        return fm
      }
    }
    class Ef {
      constructor(mm, Tm, fm) {
        this.view = mm, this.state = Tm, this.transactions = fm, this.flags = 0, this.startState = mm.state, this.changes = hm.ChangeSet.empty(this.startState.doc.length);
        for (let hm of fm) this.changes = this.changes.compose(hm.changes);
        let Am = [];
        this.changes.iterChangedRanges(((mm, Tm, fm, hm) => Am.push(new pf(mm, Tm, fm, hm)))), this.changedRanges = Am
      }
      static create(mm, Tm, fm) {
        return new Ef(mm, Tm, fm)
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
        return this.transactions.some((mm => mm.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const of = [];
    class Of {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = mm, this.length = Tm, this.flags = fm, this.parent = null, mm.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return of
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
      sync(mm) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let mm = this.domAttrs;
          mm && function(mm, Tm) {
            for (let fm = mm.attributes.length - 1; fm >= 0; fm--) {
              let hm = mm.attributes[fm].name;
              null == Tm[hm] && mm.removeAttribute(hm)
            }
            for (let fm in Tm) {
              let hm = Tm[fm];
              "style" == fm ? mm.style.cssText = hm : mm.getAttribute(fm) != hm && mm.setAttribute(fm, hm)
            }
          }(this.dom, mm)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(mm) {
        this.dom = mm, mm.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let fm of this.children) {
          if (fm == mm) return Tm;
          Tm += fm.length + fm.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(mm) {
        return this.posBefore(mm) + mm.length
      }
      covers(mm) {
        return !0
      }
      coordsIn(mm, Tm) {
        return null
      }
      domPosFor(mm, Tm) {
        let fm = Bm(this.dom),
          hm = this.length ? mm > 0 : Tm > 0;
        return new iT(this.parent.dom, fm + (hm ? 1 : 0), 0 == mm || mm == this.length)
      }
      markDirty(mm) {
        this.flags &= -3, mm && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let mm = this; mm; mm = mm.parent)
          if (mm instanceof jf) return mm;
        return null
      }
      static get(mm) {
        return mm.cmTile
      }
    }
    class Yf extends Of {
      constructor(mm) {
        super(mm, 0), this._children = []
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
      append(mm) {
        this.children.push(mm), mm.parent = this
      }
      sync(mm) {
        if (2 & this.flags) return;
        super.sync(mm);
        let Tm, fm = this.dom,
          hm = null,
          Am = (null === mm || void 0 === mm ? void 0 : mm.node) == fm ? mm : null,
          am = 0;
        for (let xm of this.children) {
          if (xm.sync(mm), am += xm.length + xm.breakAfter, Tm = hm ? hm.nextSibling : fm.firstChild, Am && Tm != xm.dom && (Am.written = !0), xm.dom.parentNode == fm)
            for (; Tm && Tm != xm.dom;) Tm = qf(Tm);
          else fm.insertBefore(xm.dom, Tm);
          hm = xm.dom
        }
        for (Tm = hm ? hm.nextSibling : fm.firstChild, Am && Tm && (Am.written = !0); Tm;) Tm = qf(Tm);
        this.length = am
      }
    }

    function qf(mm) {
      let Tm = mm.nextSibling;
      return mm.parentNode.removeChild(mm), Tm
    }
    class jf extends Yf {
      constructor(mm, Tm) {
        super(Tm), this.view = mm
      }
      owns(mm) {
        for (; mm; mm = mm.parent)
          if (mm == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(mm) {
        for (;;) {
          if (!mm) return null;
          let Tm = Of.get(mm);
          if (Tm && this.owns(Tm)) return Tm;
          mm = mm.parentNode
        }
      }
      blockTiles(mm) {
        for (let Tm = [], fm = this, hm = 0, Am = 0;;)
          if (hm == fm.children.length) {
            if (!Tm.length) return;
            fm = fm.parent, fm.breakAfter && Am++, hm = Tm.pop()
          } else {
            let am = fm.children[hm++];
            if (am instanceof Vf) Tm.push(hm), fm = am, hm = 0;
            else {
              let Tm = Am + am.length,
                fm = mm(am, Am);
              if (void 0 !== fm) return fm;
              Am = Tm + am.breakAfter
            }
          }
      }
      resolveBlock(mm, Tm) {
        let fm, hm, Am = -1,
          am = -1;
        if (this.blockTiles(((xm, wm) => {
            let Dm = wm + xm.length;
            if (mm >= wm && mm <= Dm) {
              if (xm.isWidget() && Tm >= -1 && Tm <= 1) {
                if (32 & xm.flags) return !0;
                16 & xm.flags && (fm = void 0)
              }(wm < mm || mm == Dm && (Tm < -1 ? xm.length : xm.covers(1))) && (!fm || !xm.isWidget() && fm.isWidget()) && (fm = xm, Am = mm - wm), (Dm > mm || mm == wm && (Tm > 1 ? xm.length : xm.covers(-1))) && (!hm || !xm.isWidget() && hm.isWidget()) && (hm = xm, am = mm - wm)
            }
          })), !fm && !hm) throw new Error("No tile at position " + mm);
        return fm && Tm < 0 || !hm ? {
          tile: fm,
          offset: Am
        } : {
          tile: hm,
          offset: am
        }
      }
    }
    class Vf extends Yf {
      constructor(mm, Tm) {
        super(mm), this.wrapper = Tm
      }
      isBlock() {
        return !0
      }
      covers(mm) {
        return !!this.children.length && (mm < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (mm, Tm) {
        let fm = new Vf(Tm || document.createElement(mm.tagName), mm);
        return Tm || (fm.flags |= 4), fm
      }
    }
    class If extends Yf {
      constructor(mm, Tm) {
        super(mm), this.attrs = Tm
      }
      isLine() {
        return !0
      }
      static start(mm, Tm, fm) {
        let hm = new If(Tm || document.createElement("div"), mm);
        return Tm && fm || (hm.flags |= 4), hm
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(mm, Tm, fm) {
        let hm = null,
          Am = -1,
          am = null,
          xm = -1;
        ! function mm(wm, Dm) {
          for (let im = 0, Rm = 0; im < wm.children.length && Rm <= Dm; im++) {
            let pm = wm.children[im],
              Em = Rm + pm.length;
            Em >= Dm && (pm.isComposite() ? mm(pm, Dm - Rm) : (!am || am.isHidden && (Tm > 0 || fm && Kf(am, pm))) && (Em > Dm || 32 & pm.flags) ? (am = pm, xm = Dm - Rm) : (Rm < Dm || 16 & pm.flags && !pm.isHidden) && (hm = pm, Am = Dm - Rm)), Rm = Em
          }
        }(this, mm);
        let wm = (Tm < 0 ? hm : am) || hm || am;
        return wm ? {
          tile: wm,
          offset: wm == hm ? Am : xm
        } : null
      }
      coordsIn(mm, Tm) {
        let fm = this.resolveInline(mm, Tm, !0);
        return fm ? fm.tile.coordsIn(Math.max(0, fm.offset), Tm) : function(mm) {
          let Tm = mm.dom.lastChild;
          if (!Tm) return mm.dom.getBoundingClientRect();
          let fm = Mm(Tm);
          return fm[fm.length - 1] || null
        }(this)
      }
      domIn(mm, Tm) {
        let fm = this.resolveInline(mm, Tm);
        if (fm) {
          let {
            tile: mm,
            offset: hm
          } = fm;
          if (this.dom.contains(mm.dom)) return mm.isText() ? new iT(mm.dom, Math.min(mm.dom.nodeValue.length, hm)) : mm.domPosFor(hm, 16 & mm.flags ? 1 : 32 & mm.flags ? -1 : Tm);
          let Am = fm.tile.parent,
            am = !1;
          for (let Tm of Am.children) {
            if (am) return new iT(Tm.dom, 0);
            Tm == fm.tile && (am = !0)
          }
        }
        return new iT(this.dom, 0)
      }
    }

    function Kf(mm, Tm) {
      let fm = mm.coordsIn(0, 1),
        hm = Tm.coordsIn(0, 1);
      return fm && hm && hm.top < fm.bottom
    }
    class Qf extends Yf {
      constructor(mm, Tm) {
        super(mm), this.mark = Tm
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (mm, Tm) {
        let fm = new Qf(Tm || document.createElement(mm.tagName), mm);
        return Tm || (fm.flags |= 4), fm
      }
    }
    class nf extends Of {
      constructor(mm, Tm) {
        super(mm, Tm.length), this.text = Tm
      }
      sync(mm) {
        2 & this.flags || (super.sync(mm), this.dom.nodeValue != this.text && (mm && mm.node == this.dom && (mm.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(mm, Tm) {
        let fm = this.dom.nodeValue.length;
        mm > fm && (mm = fm);
        let hm = mm,
          Am = mm,
          am = 0;
        0 == mm && Tm < 0 || mm == fm && Tm >= 0 ? Jm.chrome || Jm.gecko || (mm ? (hm--, am = 1) : Am < fm && (Am++, am = -1)) : Tm < 0 ? hm-- : Am < fm && Am++;
        let xm = AT(this.dom, hm, Am).getClientRects();
        if (!xm.length) return null;
        let wm = xm[(am ? am < 0 : Tm >= 0) ? 0 : xm.length - 1];
        return Jm.safari && !am && 0 == wm.width && (wm = Array.prototype.find.call(xm, (mm => mm.width)) || wm), am ? dm(wm, am < 0) : wm || null
      }
      static of (mm, Tm) {
        let fm = new nf(Tm || document.createTextNode(mm), mm);
        return Tm || (fm.flags |= 2), fm
      }
    }
    class Jf extends Of {
      constructor(mm, Tm, fm, hm) {
        super(mm, Tm, hm), this.widget = fm
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(mm) {
        return !(48 & this.flags) && (this.flags & (mm < 0 ? 64 : 128)) > 0
      }
      coordsIn(mm, Tm) {
        return this.coordsInWidget(mm, Tm, !1)
      }
      coordsInWidget(mm, Tm, fm) {
        let hm = this.widget.coordsAt(this.dom, mm, Tm);
        if (hm) return hm;
        if (fm) return dm(this.dom.getBoundingClientRect(), this.length ? 0 == mm : Tm <= 0);
        {
          let Tm = this.dom.getClientRects(),
            fm = null;
          if (!Tm.length) return null;
          let hm = !!(16 & this.flags) || !(32 & this.flags) && mm > 0;
          for (let Am = hm ? Tm.length - 1 : 0; fm = Tm[Am], !(mm > 0 ? 0 == Am : Am == Tm.length - 1 || fm.top < fm.bottom); Am += hm ? -1 : 1);
          return dm(fm, !hm)
        }
      }
      get overrideDOMText() {
        if (!this.length) return hm.O.empty;
        let {
          root: mm
        } = this;
        if (!mm) return hm.O.empty;
        let Tm = this.posAtStart;
        return mm.view.state.doc.slice(Tm, Tm + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (mm, Tm, fm, hm, Am) {
        return Am || (Am = mm.toDOM(Tm), mm.editable || (Am.contentEditable = "false")), new Jf(Am, fm, mm, hm)
      }
    }
    class zf extends Of {
      constructor(mm) {
        let Tm = document.createElement("img");
        Tm.className = "cm-widgetBuffer", Tm.setAttribute("aria-hidden", "true"), super(Tm, 0, mm)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return hm.O.empty
      }
      coordsIn(mm) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Zf {
      constructor(mm) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = mm
      }
      advance(mm, Tm, fm) {
        let {
          tile: hm,
          index: Am,
          beforeBreak: am,
          parents: xm
        } = this;
        for (; mm || Tm > 0;)
          if (hm.isComposite())
            if (am) {
              if (!mm) break;
              fm && fm.break(), mm--, am = !1
            } else if (Am == hm.children.length) {
          if (!mm && !xm.length) break;
          fm && fm.leave(hm), am = !!hm.breakAfter, ({
            tile: hm,
            index: Am
          } = xm.pop()), Am++
        } else {
          let wm = hm.children[Am],
            Dm = wm.breakAfter;
          !(Tm > 0 ? wm.length <= mm : wm.length < mm) || fm && !1 === fm.skip(wm, 0, wm.length) && wm.isComposite ? (xm.push({
            tile: hm,
            index: Am
          }), hm = wm, Am = 0, fm && wm.isComposite() && fm.enter(wm)) : (am = !!Dm, Am++, mm -= wm.length)
        } else if (Am == hm.length) am = !!hm.breakAfter, ({
          tile: hm,
          index: Am
        } = xm.pop()), Am++;
        else {
          if (!mm) break;
          {
            let Tm = Math.min(mm, hm.length - Am);
            fm && fm.skip(hm, Am, Am + Tm), mm -= Tm, Am += Tm
          }
        }
        return this.tile = hm, this.index = Am, this.beforeBreak = am, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class kf {
      constructor(mm, Tm, fm, hm) {
        this.from = mm, this.to = Tm, this.wrapper = fm, this.rank = hm
      }
    }
    class bf {
      constructor(mm, Tm, fm) {
        this.cache = mm, this.root = Tm, this.blockWrappers = fm, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(mm, Tm, fm, hm) {
        var Am;
        this.flushBuffer();
        let am = this.ensureMarks(Tm, fm),
          xm = am.lastChild;
        if (xm && xm.isText() && !(8 & xm.flags) && xm.length + mm.length < 512) {
          this.cache.reused.set(xm, 2), (am.children[am.children.length - 1] = new nf(xm.dom, xm.text + mm)).parent = am
        } else am.append(hm || nf.of(mm, null === (Am = this.cache.find(nf)) || void 0 === Am ? void 0 : Am.dom));
        this.pos += mm.length, this.afterWidget = null
      }
      addComposition(mm, Tm) {
        let fm = this.curLine;
        fm.dom != Tm.line.dom && (fm.setDOM(this.cache.reused.has(Tm.line) ? Hf(Tm.line.dom) : Tm.line.dom), this.cache.reused.set(Tm.line, 2));
        let hm = fm;
        for (let xm = Tm.marks.length - 1; xm >= 0; xm--) {
          let mm = Tm.marks[xm],
            fm = hm.lastChild;
          if (fm instanceof Qf && fm.mark.eq(mm.mark)) fm.dom != mm.dom && fm.setDOM(Hf(mm.dom)), hm = fm;
          else {
            if (this.cache.reused.get(mm)) {
              let Tm = Of.get(mm.dom);
              Tm && Tm.setDOM(Hf(mm.dom))
            }
            let Tm = Qf.of(mm.mark, mm.dom);
            hm.append(Tm), hm = Tm
          }
          this.cache.reused.set(mm, 2)
        }
        let Am = Of.get(mm.text);
        Am && this.cache.reused.set(Am, 2);
        let am = new nf(mm.text, mm.text.nodeValue);
        am.flags |= 8, hm.append(am)
      }
      addInlineWidget(mm, Tm, fm) {
        let hm = this.afterWidget && 48 & mm.flags && (48 & this.afterWidget.flags) == (48 & mm.flags);
        hm || this.flushBuffer();
        let Am = this.ensureMarks(Tm, fm);
        hm || 16 & mm.flags || Am.append(this.getBuffer(1)), Am.append(mm), this.pos += mm.length, this.afterWidget = mm
      }
      addMark(mm, Tm, fm) {
        this.flushBuffer(), this.ensureMarks(Tm, fm).append(mm), this.pos += mm.length, this.afterWidget = null
      }
      addBlockWidget(mm) {
        this.getBlockPos().append(mm), this.pos += mm.length, this.lastBlock = mm, this.endLine()
      }
      continueWidget(mm) {
        (this.afterWidget || this.lastBlock).length += mm, this.pos += mm
      }
      addLineStart(mm, Tm) {
        var fm;
        mm || (mm = Pf);
        let hm = If.start(mm, Tm || (null === (fm = this.cache.find(If)) || void 0 === fm ? void 0 : fm.dom), !!Tm);
        this.getBlockPos().append(this.lastBlock = this.curLine = hm)
      }
      addLine(mm) {
        this.getBlockPos().append(mm), this.pos += mm.length, this.lastBlock = mm, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(mm) {
        this.blockPosCovered() || this.addLineStart(mm)
      }
      ensureLine(mm) {
        this.curLine || this.addLineStart(mm)
      }
      ensureMarks(mm, Tm) {
        var fm;
        let hm = this.curLine;
        for (let Am = mm.length - 1; Am >= 0; Am--) {
          let am, xm = mm[Am];
          if (Tm > 0 && (am = hm.lastChild) && am instanceof Qf && am.mark.eq(xm)) hm = am, Tm--;
          else {
            let mm = Qf.of(xm, null === (fm = this.cache.find(Qf, (mm => mm.mark.eq(xm)))) || void 0 === fm ? void 0 : fm.dom);
            hm.append(mm), hm = mm, Tm = 0
          }
        }
        return hm
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let mm = this.curLine.lastChild;
          mm && Xf(this.curLine, !1) && ("BR" == mm.dom.nodeName || !mm.isWidget() || Jm.ios && Xf(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(Cf, 0, 32) || new Jf(Cf.toDOM(), 0, Cf, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let mm = this.wrappers.length - 1; mm >= 0; mm--) this.wrappers[mm].to < this.pos && this.wrappers.splice(mm, 1);
        for (let mm = this.blockWrappers; mm.value && mm.from <= this.pos; mm.next())
          if (mm.to >= this.pos) {
            let Tm = new kf(mm.from, mm.to, mm.value, mm.rank),
              fm = this.wrappers.length;
            for (; fm > 0 && (this.wrappers[fm - 1].rank - Tm.rank || this.wrappers[fm - 1].to - Tm.to) < 0;) fm--;
            this.wrappers.splice(fm, 0, Tm)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var mm;
        this.updateBlockWrappers();
        let Tm = this.root;
        for (let fm of this.wrappers) {
          let hm = Tm.lastChild;
          if (fm.from < this.pos && hm instanceof Vf && hm.wrapper.eq(fm.wrapper)) Tm = hm;
          else {
            let hm = Vf.of(fm.wrapper, null === (mm = this.cache.find(Vf, (mm => mm.wrapper.eq(fm.wrapper)))) || void 0 === mm ? void 0 : mm.dom);
            Tm.append(hm), Tm = hm
          }
        }
        return Tm
      }
      blockPosCovered() {
        let mm = this.lastBlock;
        return null != mm && !mm.breakAfter && (!mm.isWidget() || (160 & mm.flags) > 0)
      }
      getBuffer(mm) {
        let Tm = 2 | (mm < 0 ? 16 : 32),
          fm = this.cache.find(zf, void 0, 1);
        return fm && (fm.flags = Tm), fm || new zf(Tm)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class Sf {
      constructor(mm) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = mm.iter()
      }
      skip(mm) {
        this.textOff + mm <= this.text.length ? this.textOff += mm : (this.skipCount += mm - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(mm) {
        if (this.textOff == this.text.length) {
          let {
            value: Tm,
            lineBreak: fm,
            done: hm
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, hm) throw new Error("Ran out of text content when drawing inline views");
          this.text = Tm;
          let Am = this.textOff = Math.min(mm, Tm.length);
          return fm ? null : Tm.slice(0, Am)
        }
        let Tm = Math.min(this.text.length, this.textOff + mm),
          fm = this.text.slice(this.textOff, Tm);
        return this.textOff = Tm, fm
      }
    }
    const ef = [Jf, If, nf, Qf, zf, Vf, jf];
    for (let Xx = 0; Xx < ef.length; Xx++) ef[Xx].bucket = Xx;
    class Nf {
      constructor(mm) {
        this.view = mm, this.buckets = ef.map((() => [])), this.index = ef.map((() => 0)), this.reused = new Map
      }
      add(mm) {
        let Tm = mm.constructor.bucket,
          fm = this.buckets[Tm];
        fm.length < 6 ? fm.push(mm) : fm[this.index[Tm] = (this.index[Tm] + 1) % 6] = mm
      }
      find(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          hm = mm.bucket,
          Am = this.buckets[hm],
          am = this.index[hm];
        for (let xm = Am.length - 1; xm >= 0; xm--) {
          let mm = (xm + am) % Am.length,
            wm = Am[mm];
          if ((!Tm || Tm(wm)) && !this.reused.has(wm)) return Am.splice(mm, 1), mm < am && this.index[hm]--, this.reused.set(wm, fm), wm
        }
        return null
      }
      findWidget(mm, Tm, fm) {
        let hm = this.buckets[0];
        if (hm.length)
          for (let Am = 0, am = 0;; Am++) {
            if (Am == hm.length) {
              if (am) return null;
              am = 1, Am = 0
            }
            let xm = hm[Am];
            if (!this.reused.has(xm) && (0 == am ? xm.widget.compare(mm) : xm.widget.constructor == mm.constructor && mm.updateDOM(xm.dom, this.view, xm.widget))) return hm.splice(Am, 1), Am < this.index[0] && this.index[0]--, xm.widget == mm && xm.length == Tm && (497 & xm.flags) == fm ? (this.reused.set(xm, 1), xm) : (this.reused.set(xm, 2), new Jf(xm.dom, Tm, mm, -498 & xm.flags | fm))
          }
      }
      reuse(mm) {
        return this.reused.set(mm, 1), mm
      }
      maybeReuse(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(mm)) return this.reused.set(mm, Tm), mm.dom
      }
      clear() {
        for (let mm = 0; mm < this.buckets.length; mm++) this.buckets[mm].length = this.index[mm] = 0
      }
    }
    class Gf {
      constructor(mm, Tm, fm, Am, am) {
        this.view = mm, this.Ym = Am, this.disallowBlockEffectsFor = am, this.openWidget = !1, this.openMarks = 0, this.cache = new Nf(mm), this.text = new Sf(mm.state.doc), this.builder = new bf(this.cache, new jf(mm, mm.contentDOM), hm.C.iter(fm)), this.cache.reused.set(Tm, 2), this.old = new Zf(Tm), this.reuseWalker = {
          skip: (mm, Tm, fm) => {
            if (this.cache.add(mm), mm.isComposite()) return !1
          },
          enter: mm => this.cache.add(mm),
          leave: () => {},
          break: () => {}
        }
      }
      run(mm, Tm) {
        let fm = Tm && this.getCompositionContext(Tm.text);
        for (let hm = 0, Am = 0, am = 0;;) {
          let xm = am < mm.length ? mm[am++] : null,
            wm = xm ? xm.fromA : this.old.root.length;
          if (wm > hm) {
            let mm = wm - hm;
            this.preserve(mm, !am, !xm), hm = wm, Am += mm
          }
          if (!xm) break;
          Tm && xm.fromA <= Tm.range.fromA && xm.toA >= Tm.range.toA ? (this.forward(xm.fromA, Tm.range.fromA, Tm.range.fromA < Tm.range.toA ? 1 : -1), this.emit(Am, Tm.range.fromB), this.cache.clear(), this.builder.addComposition(Tm, fm), this.text.skip(Tm.range.toB - Tm.range.fromB), this.forward(Tm.range.fromA, xm.toA), this.emit(Tm.range.toB, xm.toB)) : (this.forward(xm.fromA, xm.toA), this.emit(Am, xm.toB)), Am = xm.toB, hm = xm.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(mm, Tm, fm) {
        let hm = function(mm) {
            let Tm = [];
            for (let fm = mm.parents.length; fm > 1; fm--) {
              let hm = fm == mm.parents.length ? mm.tile : mm.parents[fm].tile;
              hm instanceof Qf && Tm.push(hm.mark)
            }
            return Tm
          }(this.old),
          Am = this.openMarks;
        this.old.advance(mm, fm ? 1 : -1, {
          skip: (mm, Tm, fm) => {
            if (mm.isWidget())
              if (this.openWidget) this.builder.continueWidget(fm - Tm);
              else {
                let am = fm > 0 || Tm < mm.length ? Jf.of(mm.widget, this.view, fm - Tm, 496 & mm.flags, this.cache.maybeReuse(mm)) : this.cache.reuse(mm);
                256 & am.flags ? (am.flags &= -2, this.builder.addBlockWidget(am)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(am, hm, Am), Am = hm.length)
              }
            else if (mm.isText()) this.builder.ensureLine(null), Tm || fm != mm.length || this.cache.reused.has(mm) ? (this.cache.add(mm), this.builder.addText(mm.text.slice(Tm, fm), hm, Am)) : this.builder.addText(mm.text, hm, Am, this.cache.reuse(mm)), Am = hm.length;
            else if (mm.isLine()) mm.flags &= -2, this.cache.reused.set(mm, 1), this.builder.addLine(mm);
            else if (mm instanceof zf) this.cache.add(mm);
            else {
              if (!(mm instanceof Qf)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(mm, hm, Am), this.cache.reused.set(mm, 1), Am = hm.length
            }
            this.openWidget = !1
          },
          enter: mm => {
            mm.isLine() ? this.builder.addLineStart(mm.attrs, this.cache.maybeReuse(mm)) : (this.cache.add(mm), mm instanceof Qf && hm.unshift(mm.mark)), this.openWidget = !1
          },
          leave: mm => {
            mm.isLine() ? hm.length && (hm.length = Am = 0) : mm instanceof Qf && (hm.shift(), Am = Math.min(Am, hm.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(mm)
      }
      emit(mm, Tm) {
        let fm = null,
          Am = this.builder,
          am = 0,
          xm = hm.C.spans(this.Ym, mm, Tm, {
            point: (mm, Tm, hm, xm, wm, Dm) => {
              if (hm instanceof Pm) {
                if (this.disallowBlockEffectsFor[Dm]) {
                  if (hm.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (Tm > this.view.state.doc.lineAt(mm).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (am = xm.length, wm > xm.length) Am.continueWidget(Tm - mm);
                else {
                  let am = hm.widget || (hm.block ? yf.block : yf.inline),
                    Dm = function(mm) {
                      let Tm = mm.isReplace ? (mm.startSide < 0 ? 64 : 0) | (mm.endSide > 0 ? 128 : 0) : mm.startSide > 0 ? 32 : 16;
                      mm.block && (Tm |= 256);
                      return Tm
                    }(hm),
                    im = this.cache.findWidget(am, Tm - mm, Dm) || Jf.of(am, this.view, Tm - mm, Dm);
                  hm.block ? (hm.startSide > 0 && Am.addLineStartIfNotCovered(fm), Am.addBlockWidget(im)) : (Am.ensureLine(fm), Am.addInlineWidget(im, xm, wm))
                }
                fm = null
              } else fm = function(mm, Tm) {
                let fm = Tm.spec.attributes,
                  hm = Tm.spec.class;
                if (!fm && !hm) return mm;
                mm || (mm = {
                  class: "cm-line"
                });
                fm && cm(fm, mm);
                hm && (mm.class += " " + hm);
                return mm
              }(fm, hm);
              Tm > mm && this.text.skip(Tm - mm)
            },
            span: (mm, Tm, hm, am) => {
              for (let xm = mm; xm < Tm;) {
                let wm = this.text.next(Math.min(512, Tm - xm));
                null == wm ? (Am.addLineStartIfNotCovered(fm), Am.addBreak(), xm++) : (Am.ensureLine(fm), Am.addText(wm, hm, xm == mm ? am : hm.length), xm += wm.length), fm = null
              }
            }
          });
        Am.addLineStartIfNotCovered(fm), this.openWidget = xm > am, this.openMarks = xm
      }
      forward(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        Tm - mm <= 10 ? this.old.advance(Tm - mm, fm, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(Tm - mm - 10, -1), this.old.advance(5, fm, this.reuseWalker))
      }
      getCompositionContext(mm) {
        let Tm = [],
          fm = null;
        for (let hm = mm.parentNode;; hm = hm.parentNode) {
          let mm = Of.get(hm);
          if (hm == this.view.contentDOM) break;
          mm instanceof Qf ? Tm.push(mm) : (null === mm || void 0 === mm ? void 0 : mm.isLine()) ? fm = mm : mm instanceof Vf || ("DIV" != hm.nodeName || fm || hm == this.view.contentDOM ? fm || Tm.push(Qf.of(new Gm({
            tagName: hm.nodeName.toLowerCase(),
            attributes: bm(hm)
          }), hm)) : fm = new If(hm, Pf))
        }
        return {
          line: fm,
          marks: Tm
        }
      }
    }

    function Xf(mm, Tm) {
      let fm = mm => {
        for (let hm of mm.children)
          if ((Tm ? hm.isText() : hm.length) || fm(hm)) return !0;
        return !1
      };
      return fm(mm)
    }
    const Pf = {
      class: "cm-line"
    };

    function Hf(mm) {
      let Tm = Of.get(mm);
      return Tm && Tm.setDOM(mm.cloneNode()), mm
    }
    class yf extends Sm {
      constructor(mm) {
        super(), this.tag = mm
      }
      eq(mm) {
        return mm.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(mm) {
        return mm.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    yf.inline = new yf("span"), yf.block = new yf("div");
    const Cf = new class extends Sm {
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
    class rf {
      constructor(mm) {
        this.view = mm, this.Ym = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Nm.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new jf(mm, mm.contentDOM), this.updateInner([new pf(0, 0, 0, mm.state.doc.length)], null)
      }
      update(mm) {
        var Tm;
        let fm = mm.changedRanges;
        this.minWidth > 0 && fm.length && (fm.every((mm => {
          let {
            fromA: Tm,
            toA: fm
          } = mm;
          return fm < this.minWidthFrom || Tm > this.minWidthTo
        })) ? (this.minWidthFrom = mm.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = mm.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(mm);
        let Am = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (Tm = this.domChanged) || void 0 === Tm ? void 0 : Tm.newSel) ? Am = this.domChanged.newSel.head : function(mm, Tm) {
          let fm = !1;
          Tm && mm.iterChangedRanges(((mm, hm) => {
            mm < Tm.to && hm > Tm.from && (fm = !0)
          }));
          return fm
        }(mm.changes, this.hasComposition) || mm.selectionSet || (Am = mm.state.selection.main.head));
        let am = Am > -1 ? function(mm, Tm, fm) {
          let hm = lf(mm, fm);
          if (!hm) return null;
          let {
            node: Am,
            from: am,
            to: xm
          } = hm, wm = Am.nodeValue;
          if (/[\n\r]/.test(wm)) return null;
          if (mm.state.doc.sliceString(hm.from, hm.to) != wm) return null;
          let Dm = Tm.invertedDesc;
          return {
            range: new pf(Dm.mapPos(am), Dm.mapPos(xm), am, xm),
            text: Am
          }
        }(this.view, mm.changes, Am) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: Tm,
            to: hm
          } = this.hasComposition;
          fm = new pf(Tm, hm, mm.changes.mapPos(Tm, -1), mm.changes.mapPos(hm, 1)).addToSet(fm.slice())
        }
        this.hasComposition = am ? {
          from: am.range.fromB,
          to: am.range.toB
        } : null, (Jm.ie || Jm.chrome) && !am && mm && mm.state.doc.lines != mm.startState.doc.lines && (this.forceSelection = !0);
        let xm = this.Ym,
          wm = this.blockWrappers;
        this.updateDeco();
        let Dm = function(mm, Tm, fm) {
          let Am = new Mf;
          return hm.C.compare(mm, Tm, fm, Am), Am.changes
        }(xm, this.Ym, mm.changes);
        Dm.length && (fm = pf.extendWithRanges(fm, Dm));
        let im = function(mm, Tm, fm) {
          let Am = new uf;
          return hm.C.compare(mm, Tm, fm, Am), Am.changes
        }(wm, this.blockWrappers, mm.changes);
        return im.length && (fm = pf.extendWithRanges(fm, im)), am && !fm.some((mm => mm.fromA <= am.range.fromA && mm.toA >= am.range.toA)) && (fm = am.range.addToSet(fm.slice())), !(2 & this.tile.flags && 0 == fm.length) && (this.updateInner(fm, am), mm.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(mm, Tm) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: fm
        } = this.view;
        fm.ignore((() => {
          if (Tm || mm.length) {
            let fm = this.tile,
              hm = new Gf(this.view, fm, this.blockWrappers, this.Ym, this.dynamicDecorationMap);
            Tm && Of.get(Tm.text) && hm.cache.reused.set(Of.get(Tm.text), 2), this.tile = hm.run(mm, Tm), sf(fm, hm.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let hm = Jm.chrome || Jm.ios ? {
            node: fm.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(hm), !hm || !hm.written && fm.selectionRange.focusNode == hm.node && this.tile.dom.contains(hm.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let hm = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let Am of this.tile.children) Am.isWidget() && Am.widget instanceof Bf && hm.push(Am.dom);
        fm.updateGaps(hm)
      }
      updateEditContextFormatting(mm) {
        this.editContextFormatting = this.editContextFormatting.map(mm.changes);
        for (let Tm of mm.transactions)
          for (let mm of Tm.effects) mm.is(LT) && (this.editContextFormatting = mm.value)
      }
      updateSelection() {
        let mm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: Tm
        } = this.tile, fm = this.view.root.activeElement, hm = fm == Tm, Am = !hm && !(this.view.state.facet(tT) || Tm.tabIndex > -1) && lm(Tm, this.view.observer.selectionRange) && !(fm && Tm.contains(fm));
        if (!(hm || mm || Am)) return;
        let am = this.forceSelection;
        this.forceSelection = !1;
        let xm, wm, Dm = this.view.state.selection.main;
        if (Dm.empty ? wm = xm = this.inlineDOMNearPos(Dm.anchor, Dm.assoc || 1) : (wm = this.inlineDOMNearPos(Dm.head, Dm.head == Dm.from ? 1 : -1), xm = this.inlineDOMNearPos(Dm.anchor, Dm.anchor == Dm.from ? 1 : -1)), Jm.gecko && Dm.empty && !this.hasComposition && (1 == (im = xm).node.nodeType && im.node.firstChild && (0 == im.offset || "false" == im.node.childNodes[im.offset - 1].contentEditable) && (im.offset == im.node.childNodes.length || "false" == im.node.childNodes[im.offset].contentEditable))) {
          let mm = document.createTextNode("");
          this.view.observer.ignore((() => xm.node.insertBefore(mm, xm.node.childNodes[xm.offset] || null))), xm = wm = new iT(mm, 0), am = !0
        }
        var im;
        let Rm = this.view.observer.selectionRange;
        !am && Rm.focusNode && (um(xm.node, xm.offset, Rm.anchorNode, Rm.anchorOffset) && um(wm.node, wm.offset, Rm.focusNode, Rm.focusOffset) || this.suppressWidgetCursorChange(Rm, Dm)) || (this.view.observer.ignore((() => {
          Jm.android && Jm.chrome && Tm.contains(Rm.focusNode) && function(mm, Tm) {
            for (let fm = mm; fm && fm != Tm; fm = fm.assignedSlot || fm.parentNode)
              if (1 == fm.nodeType && "false" == fm.contentEditable) return !0;
            return !1
          }(Rm.focusNode, Tm) && (Tm.blur(), Tm.focus({
            preventScroll: !0
          }));
          let mm = rm(this.view.root);
          if (mm)
            if (Dm.empty) {
              if (Jm.gecko) {
                let mm = (hm = xm.node, am = xm.offset, 1 != hm.nodeType ? 0 : (am && "false" == hm.childNodes[am - 1].contentEditable ? 1 : 0) | (am < hm.childNodes.length && "false" == hm.childNodes[am].contentEditable ? 2 : 0));
                if (mm && 3 != mm) {
                  let Tm = (1 == mm ? wT : DT)(xm.node, xm.offset);
                  Tm && (xm = new iT(Tm.node, Tm.offset))
                }
              }
              mm.collapse(xm.node, xm.offset), null != Dm.bidiLevel && void 0 !== mm.caretBidiLevel && (mm.caretBidiLevel = Dm.bidiLevel)
            } else if (mm.extend) {
            mm.collapse(xm.node, xm.offset);
            try {
              mm.extend(wm.node, wm.offset)
            } catch (im) {}
          } else {
            let Tm = document.createRange();
            Dm.anchor > Dm.head && ([xm, wm] = [wm, xm]), Tm.setEnd(wm.node, wm.offset), Tm.setStart(xm.node, xm.offset), mm.removeAllRanges(), mm.addRange(Tm)
          } else;
          var hm, am;
          Am && this.view.root.activeElement == Tm && (Tm.blur(), fm && fm.focus())
        })), this.view.observer.setSelectionRange(xm, wm)), this.impreciseAnchor = xm.precise ? null : new iT(Rm.anchorNode, Rm.anchorOffset), this.impreciseHead = wm.precise ? null : new iT(Rm.focusNode, Rm.focusOffset)
      }
      suppressWidgetCursorChange(mm, Tm) {
        return this.hasComposition && Tm.empty && um(mm.focusNode, mm.focusOffset, mm.anchorNode, mm.anchorOffset) && this.posFromDOM(mm.focusNode, mm.focusOffset) == Tm.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: mm
        } = this, Tm = mm.state.selection.main, fm = rm(mm.root), {
          anchorNode: hm,
          anchorOffset: Am
        } = mm.observer.selectionRange;
        if (!fm || !Tm.empty || !Tm.assoc || !fm.modify) return;
        let am = this.lineAt(Tm.head, Tm.assoc);
        if (!am) return;
        let xm = am.posAtStart;
        if (Tm.head == xm || Tm.head == xm + am.length) return;
        let wm = this.coordsAt(Tm.head, -1),
          Dm = this.coordsAt(Tm.head, 1);
        if (!wm || !Dm || wm.bottom > Dm.top) return;
        let im = this.domAtPos(Tm.head + Tm.assoc, Tm.assoc);
        fm.collapse(im.node, im.offset), fm.modify("move", Tm.assoc < 0 ? "forward" : "backward", "lineboundary"), mm.observer.readSelectionRange();
        let Rm = mm.observer.selectionRange;
        mm.docView.posFromDOM(Rm.anchorNode, Rm.anchorOffset) != Tm.from && fm.collapse(hm, Am)
      }
      posFromDOM(mm, Tm) {
        let fm = this.tile.nearest(mm);
        if (!fm) return 2 & this.tile.dom.compareDocumentPosition(mm) ? 0 : this.view.state.doc.length;
        let hm = fm.posAtStart;
        if (!fm.isComposite()) return fm.isText() ? mm == fm.dom ? hm + Tm : hm + (Tm ? fm.length : 0) : hm;
        {
          let Am;
          if (mm == fm.dom) Am = fm.dom.childNodes[Tm];
          else {
            let hm = 0 == Um(mm) ? 0 : 0 == Tm ? -1 : 1;
            for (;;) {
              let Tm = mm.parentNode;
              if (Tm == fm.dom) break;
              0 == hm && Tm.firstChild != Tm.lastChild && (hm = mm == Tm.firstChild ? -1 : 1), mm = Tm
            }
            Am = hm < 0 ? mm : mm.nextSibling
          }
          if (Am == fm.dom.firstChild) return hm;
          for (; Am && !Of.get(Am);) Am = Am.nextSibling;
          if (!Am) return hm + fm.length;
          for (let mm = 0, Tm = hm;; mm++) {
            let hm = fm.children[mm];
            if (hm.dom == Am) return Tm;
            Tm += hm.length + hm.breakAfter
          }
        }
      }
      domAtPos(mm, Tm) {
        let {
          tile: fm,
          offset: hm
        } = this.tile.resolveBlock(mm, Tm);
        return fm.isWidget() ? fm.domPosFor(mm, Tm) : fm.domIn(hm, Tm)
      }
      inlineDOMNearPos(mm, Tm) {
        let fm, hm, Am = -1,
          am = !1,
          xm = -1,
          wm = !1;
        return this.tile.blockTiles(((Tm, Dm) => {
          if (Tm.isWidget()) {
            if (32 & Tm.flags && Dm >= mm) return !0;
            16 & Tm.flags && (am = !0)
          } else {
            let im = Dm + Tm.length;
            if (Dm <= mm && (fm = Tm, Am = mm - Dm, am = im < mm), im >= mm && !hm && (hm = Tm, xm = mm - Dm, wm = Dm > mm), Dm > mm && hm) return !0
          }
        })), fm || hm ? (am && hm ? fm = null : wm && fm && (hm = null), fm && Tm < 0 || !hm ? fm.domIn(Am, Tm) : hm.domIn(xm, Tm)) : this.domAtPos(mm, Tm)
      }
      coordsAt(mm, Tm) {
        let {
          tile: fm,
          offset: hm
        } = this.tile.resolveBlock(mm, Tm);
        return fm.isWidget() ? fm.widget instanceof Bf ? null : fm.coordsInWidget(hm, Tm, !0) : fm.coordsIn(hm, Tm)
      }
      lineAt(mm, Tm) {
        let {
          tile: fm
        } = this.tile.resolveBlock(mm, Tm);
        return fm.isLine() ? fm : null
      }
      coordsForChar(mm) {
        let {
          tile: Tm,
          offset: fm
        } = this.tile.resolveBlock(mm, 1);
        if (!Tm.isLine()) return null;
        return function mm(Tm, fm) {
          if (Tm.isComposite())
            for (let hm of Tm.children) {
              if (hm.length >= fm) {
                let Tm = mm(hm, fm);
                if (Tm) return Tm
              }
              if ((fm -= hm.length) < 0) break
            } else if (Tm.isText() && fm < Tm.length) {
              let mm = (0, hm.ab)(Tm.text, fm);
              if (mm == fm) return null;
              let Am = AT(Tm.dom, fm, mm).getClientRects();
              for (let Tm = 0; Tm < Am.length; Tm++) {
                let mm = Am[Tm];
                if (Tm == Am.length - 1 || mm.top < mm.bottom && mm.left < mm.right) return mm
              }
            } return null
        }(Tm, fm)
      }
      measureVisibleLineHeights(mm) {
        let Tm = [],
          {
            from: fm,
            to: hm
          } = mm,
          Am = this.view.contentDOM.clientWidth,
          am = Am > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          xm = -1,
          wm = this.view.textDirection == RT.LTR,
          Dm = 0,
          im = (mm, Rm, pm) => {
            for (let Em = 0; Em < mm.children.length && !(Rm > hm); Em++) {
              let hm = mm.children[Em],
                om = Rm + hm.length,
                Om = hm.dom.getBoundingClientRect(),
                {
                  height: Ym
                } = Om;
              if (pm && !Em && (Dm += Om.top - pm.top), hm instanceof Vf) om > fm && im(hm, Rm, Om);
              else if (Rm >= fm && (Dm > 0 && Tm.push(-Dm), Tm.push(Ym + Dm), Dm = 0, am)) {
                let mm = hm.dom.lastChild,
                  Tm = mm ? Mm(mm) : [];
                if (Tm.length) {
                  let mm = Tm[Tm.length - 1],
                    fm = wm ? mm.right - Om.left : Om.right - mm.left;
                  fm > xm && (xm = fm, this.minWidth = Am, this.minWidthFrom = Rm, this.minWidthTo = om)
                }
              }
              pm && Em == mm.children.length - 1 && (Dm += pm.bottom - Om.bottom), Rm = om + hm.breakAfter
            }
          };
        return im(this.tile, 0, null), Tm
      }
      textDirectionAt(mm) {
        let {
          tile: Tm
        } = this.tile.resolveBlock(mm, 1);
        return "rtl" == getComputedStyle(Tm.dom).direction ? RT.RTL : RT.LTR
      }
      measureTextSize() {
        let mm = this.tile.blockTiles((mm => {
          if (mm.isLine() && mm.children.length && mm.length <= 20) {
            let Tm, fm = 0;
            for (let hm of mm.children) {
              if (!hm.isText() || /[^ -~]/.test(hm.text)) return;
              let mm = Mm(hm.dom);
              if (1 != mm.length) return;
              fm += mm[0].width, Tm = mm[0].height
            }
            if (fm) return {
              lineHeight: mm.dom.getBoundingClientRect().height,
              charWidth: fm / mm.length,
              textHeight: Tm
            }
          }
        }));
        if (mm) return mm;
        let Tm, fm, hm, Am = document.createElement("div");
        return Am.className = "cm-line", Am.style.width = "99999px", Am.style.position = "absolute", Am.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(Am);
          let mm = Mm(Am.firstChild)[0];
          Tm = Am.getBoundingClientRect().height, fm = mm && mm.width ? mm.width / 27 : 7, hm = mm && mm.height ? mm.height : Tm, Am.remove()
        })), {
          lineHeight: Tm,
          charWidth: fm,
          textHeight: hm
        }
      }
      computeBlockGapDeco() {
        let mm = [],
          Tm = this.view.viewState;
        for (let fm = 0, hm = 0;; hm++) {
          let Am = hm == Tm.viewports.length ? null : Tm.viewports[hm],
            am = Am ? Am.from - 1 : this.view.state.doc.length;
          if (am > fm) {
            let hm = (Tm.lineBlockAt(am).bottom - Tm.lineBlockAt(fm).top) / this.view.scaleY;
            mm.push(Nm.replace({
              widget: new Bf(hm),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(fm, am))
          }
          if (!Am) break;
          fm = Am.to + 1
        }
        return Nm.set(mm)
      }
      updateDeco() {
        let mm = 1,
          Tm = this.view.state.facet(Tf).map((Tm => (this.dynamicDecorationMap[mm++] = "function" == typeof Tm) ? Tm(this.view) : Tm)),
          fm = !1,
          Am = this.view.state.facet(hf).map(((mm, Tm) => {
            let hm = "function" == typeof mm;
            return hm && (fm = !0), hm ? mm(this.view) : mm
          }));
        for (Am.length && (this.dynamicDecorationMap[mm++] = fm, Tm.push(hm.C.join(Am))), this.Ym = [this.editContextFormatting, ...Tm, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; mm < this.Ym.length;) this.dynamicDecorationMap[mm++] = !1;
        this.blockWrappers = this.view.state.facet(ff).map((mm => "function" == typeof mm ? mm(this.view) : mm))
      }
      scrollIntoView(mm) {
        var Tm;
        if (mm.isSnapshot) {
          let Tm = this.view.viewState.lineBlockAt(mm.range.head);
          return this.view.scrollDOM.scrollTop = Tm.top - mm.yMargin, void(this.view.scrollDOM.scrollLeft = mm.xMargin)
        }
        for (let Rm of this.view.state.facet(MT)) try {
          if (Rm(this.view, mm.range, mm)) return !0
        } catch (im) {
          vT(this.view.state, im, "scroll handler")
        }
        let fm, {
            range: hm
          } = mm,
          Am = this.coordsAt(hm.head, null !== (Tm = hm.assoc) && void 0 !== Tm ? Tm : hm.empty ? 0 : hm.head > hm.anchor ? -1 : 1);
        if (!Am) return;
        !hm.empty && (fm = this.coordsAt(hm.anchor, hm.anchor > hm.head ? -1 : 1)) && (Am = {
          left: Math.min(Am.left, fm.left),
          top: Math.min(Am.top, fm.top),
          right: Math.max(Am.right, fm.right),
          bottom: Math.max(Am.bottom, fm.bottom)
        });
        let am = Df(this.view),
          xm = {
            left: Am.left - am.left,
            top: Am.top - am.top,
            right: Am.right + am.right,
            bottom: Am.bottom + am.bottom
          },
          {
            offsetWidth: wm,
            offsetHeight: Dm
          } = this.view.scrollDOM;
        if (function(mm, Tm, fm, hm, Am, am, xm, wm) {
            let Dm = mm.ownerDocument,
              im = Dm.defaultView || window;
            for (let Rm = mm, pm = !1; Rm && !pm;)
              if (1 == Rm.nodeType) {
                let mm, Em = Rm == Dm.body,
                  om = 1,
                  Om = 1;
                if (Em) mm = gm(im);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(Rm).position) && (pm = !0), Rm.scrollHeight <= Rm.clientHeight && Rm.scrollWidth <= Rm.clientWidth) {
                    Rm = Rm.assignedSlot || Rm.parentNode;
                    continue
                  }
                  let Tm = Rm.getBoundingClientRect();
                  ({
                    scaleX: om,
                    scaleY: Om
                  } = Wm(Rm, Tm)), mm = {
                    left: Tm.left,
                    right: Tm.left + Rm.clientWidth * om,
                    top: Tm.top,
                    bottom: Tm.top + Rm.clientHeight * Om
                  }
                }
                let Ym = 0,
                  qm = 0;
                if ("nearest" == Am) Tm.top < mm.top + xm ? (qm = Tm.top - (mm.top + xm), fm > 0 && Tm.bottom > mm.bottom + qm && (qm = Tm.bottom - mm.bottom + xm)) : Tm.bottom > mm.bottom - xm && (qm = Tm.bottom - mm.bottom + xm, fm < 0 && Tm.top - qm < mm.top && (qm = Tm.top - (mm.top + xm)));
                else {
                  let hm = Tm.bottom - Tm.top,
                    am = mm.bottom - mm.top;
                  qm = ("center" == Am && hm <= am ? Tm.top + hm / 2 - am / 2 : "start" == Am || "center" == Am && fm < 0 ? Tm.top - xm : Tm.bottom - am + xm) - mm.top
                }
                if ("nearest" == hm ? Tm.left < mm.left + am ? (Ym = Tm.left - (mm.left + am), fm > 0 && Tm.right > mm.right + Ym && (Ym = Tm.right - mm.right + am)) : Tm.right > mm.right - am && (Ym = Tm.right - mm.right + am, fm < 0 && Tm.left < mm.left + Ym && (Ym = Tm.left - (mm.left + am))) : Ym = ("center" == hm ? Tm.left + (Tm.right - Tm.left) / 2 - (mm.right - mm.left) / 2 : "start" == hm == wm ? Tm.left - am : Tm.right - (mm.right - mm.left) + am) - mm.left, Ym || qm)
                  if (Em) im.scrollBy(Ym, qm);
                  else {
                    let mm = 0,
                      fm = 0;
                    if (qm) {
                      let mm = Rm.scrollTop;
                      Rm.scrollTop += qm / Om, fm = (Rm.scrollTop - mm) * Om
                    }
                    if (Ym) {
                      let Tm = Rm.scrollLeft;
                      Rm.scrollLeft += Ym / om, mm = (Rm.scrollLeft - Tm) * om
                    }
                    Tm = {
                      left: Tm.left - mm,
                      top: Tm.top - fm,
                      right: Tm.right - mm,
                      bottom: Tm.bottom - fm
                    }, mm && Math.abs(mm - Ym) < 1 && (hm = "nearest"), fm && Math.abs(fm - qm) < 1 && (Am = "nearest")
                  } if (Em) break;
                (Tm.top < mm.top || Tm.bottom > mm.bottom || Tm.left < mm.left || Tm.right > mm.right) && (Tm = {
                  left: Math.max(Tm.left, mm.left),
                  right: Math.min(Tm.right, mm.right),
                  top: Math.max(Tm.top, mm.top),
                  bottom: Math.min(Tm.bottom, mm.bottom)
                }), Rm = Rm.assignedSlot || Rm.parentNode
              } else {
                if (11 != Rm.nodeType) break;
                Rm = Rm.host
              }
          }(this.view.scrollDOM, xm, hm.head < hm.anchor ? -1 : 1, mm.x, mm.y, Math.max(Math.min(mm.xMargin, wm), -wm), Math.max(Math.min(mm.yMargin, Dm), -Dm), this.view.textDirection == RT.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (Am.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || Am.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let mm = this.view.docView.lineAt(hm.head, 1);
          mm && mm.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(mm) {
        let Tm = mm => mm.isWidget() || mm.children.some(Tm);
        return Tm(this.tile.resolveBlock(mm, 1).tile)
      }
      destroy() {
        sf(this.tile)
      }
    }

    function sf(mm, Tm) {
      let fm = null === Tm || void 0 === Tm ? void 0 : Tm.get(mm);
      if (1 != fm) {
        null == fm && mm.destroy();
        for (let fm of mm.children) sf(fm, Tm)
      }
    }

    function lf(mm, Tm) {
      let fm = mm.observer.selectionRange;
      if (!fm.focusNode) return null;
      let hm = wT(fm.focusNode, fm.focusOffset),
        Am = DT(fm.focusNode, fm.focusOffset),
        am = hm || Am;
      if (Am && hm && Am.node != hm.node) {
        let Tm = Of.get(Am.node);
        if (!Tm || Tm.isText() && Tm.text != Am.node.nodeValue) am = Am;
        else if (mm.docView.lastCompositionAfterCursor) {
          let mm = Of.get(hm.node);
          !mm || mm.isText() && mm.text != hm.node.nodeValue || (am = Am)
        }
      }
      if (mm.docView.lastCompositionAfterCursor = am != hm, !am) return null;
      let xm = Tm - am.offset;
      return {
        from: xm,
        to: xm + am.node.nodeValue.length,
        node: am.node
      }
    }
    let Mf = class {
      constructor() {
        this.changes = []
      }
      compareRange(mm, Tm) {
        ym(mm, Tm, this.changes)
      }
      comparePoint(mm, Tm) {
        ym(mm, Tm, this.changes)
      }
      boundChange(mm) {
        ym(mm, mm, this.changes)
      }
    };
    class uf {
      constructor() {
        this.changes = []
      }
      compareRange(mm, Tm) {
        ym(mm, Tm, this.changes)
      }
      comparePoint() {}
      boundChange(mm) {
        ym(mm, mm, this.changes)
      }
    }
    class Bf extends Sm {
      constructor(mm) {
        super(), this.height = mm
      }
      toDOM() {
        let mm = document.createElement("div");
        return mm.className = "cm-gap", this.updateDOM(mm), mm
      }
      eq(mm) {
        return mm.height == this.height
      }
      updateDOM(mm) {
        return mm.style.height = this.height + "px", !0
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

    function Lf(mm, Tm, fm) {
      let hm = mm.lineBlockAt(Tm);
      if (Array.isArray(hm.type)) {
        let mm;
        for (let Am of hm.type) {
          if (Am.from > Tm) break;
          if (!(Am.to < Tm)) {
            if (Am.from < Tm && Am.to > Tm) return Am;
            mm && (Am.type != em.Text || mm.type == Am.type && !(fm < 0 ? Am.from < Tm : Am.to > Tm)) || (mm = Am)
          }
        }
        return mm || hm
      }
      return hm
    }

    function vf(mm, Tm, fm, hm) {
      let Am = mm.state.doc.lineAt(Tm.head),
        am = mm.bidiSpans(Am),
        xm = mm.textDirectionAt(Am.from);
      for (let wm = Tm, Dm = null;;) {
        let Tm = bT(Am, am, xm, wm, fm),
          im = kT;
        if (!Tm) {
          if (Am.number == (fm ? mm.state.doc.lines : 1)) return wm;
          im = "\n", Am = mm.state.doc.line(Am.number + (fm ? 1 : -1)), am = mm.bidiSpans(Am), Tm = mm.visualLineSide(Am, !fm)
        }
        if (Dm) {
          if (!Dm(im)) return wm
        } else {
          if (!hm) return Tm;
          Dm = hm(im)
        }
        wm = Tm
      }
    }

    function tf(mm, Tm, fm) {
      for (;;) {
        let hm = 0;
        for (let Am of mm) Am.between(Tm - 1, Tm + 1, ((mm, Am, am) => {
          if (Tm > mm && Tm < Am) {
            let am = hm || fm || (Tm - mm < Am - Tm ? -1 : 1);
            Tm = am < 0 ? mm : Am, hm = am
          }
        }));
        if (!hm) return Tm
      }
    }

    function Uf(mm, Tm) {
      let fm = null;
      for (let Am = 0; Am < Tm.mo.length; Am++) {
        let am = Tm.mo[Am],
          xm = null;
        if (am.empty) {
          let Tm = tf(mm, am.from, 0);
          Tm != am.from && (xm = hm.o.cursor(Tm, -1))
        } else {
          let Tm = tf(mm, am.from, -1),
            fm = tf(mm, am.to, 1);
          Tm == am.from && fm == am.to || (xm = hm.o.range(am.from == am.anchor ? Tm : fm, am.from == am.head ? Tm : fm))
        }
        xm && (fm || (fm = Tm.mo.slice()), fm[Am] = xm)
      }
      return fm ? hm.o.create(fm, Tm.mainIndex) : Tm
    }

    function df(mm, Tm, fm) {
      let Am = tf(mm.state.facet(Af).map((Tm => Tm(mm))), fm.from, Tm.head > fm.from ? -1 : 1);
      return Am == fm.from ? fm : hm.o.cursor(Am, Am < fm.from ? 1 : -1)
    }
    class gf {
      constructor(mm, Tm) {
        this.pos = mm, this.assoc = Tm
      }
    }

    function Wf(mm, Tm, fm, Am) {
      let am, xm = mm.contentDOM.getBoundingClientRect(),
        wm = xm.top + mm.viewState.paddingTop,
        {
          x: Dm,
          y: im
        } = Tm,
        Rm = im - wm;
      for (;;) {
        if (Rm < 0) return new gf(0, 1);
        if (Rm > mm.viewState.docHeight) return new gf(mm.state.doc.length, -1);
        if (am = mm.elementAtHeight(Rm), null == Am) break;
        if (am.type == em.Text) {
          if (Am < 0 ? am.to < mm.viewport.from : am.from > mm.viewport.to) break;
          let Tm = mm.docView.coordsAt(Am < 0 ? am.from : am.to, Am > 0 ? -1 : 1);
          if (Tm && (Am < 0 ? Tm.top <= Rm + wm : Tm.bottom >= Rm + wm)) break
        }
        let Tm = mm.viewState.heightOracle.textHeight / 2;
        Rm = Am > 0 ? am.bottom + Tm : am.top - Tm
      }
      if (mm.viewport.from >= am.to || mm.viewport.to <= am.from) {
        if (fm) return null;
        if (am.type == em.Text) {
          let Tm = function(mm, Tm, fm, Am, am) {
            let xm = Math.round((Am - Tm.left) * mm.defaultCharacterWidth);
            if (mm.lineWrapping && fm.height > 1.5 * mm.defaultLineHeight) {
              let Tm = mm.viewState.heightOracle.textHeight;
              xm += Math.floor((am - fm.top - .5 * (mm.defaultLineHeight - Tm)) / Tm) * mm.viewState.heightOracle.lineLength
            }
            let wm = mm.state.sliceDoc(fm.from, fm.to);
            return fm.from + (0, hm.eb)(wm, xm, mm.state.tabSize)
          }(mm, xm, am, Dm, im);
          return new gf(Tm, Tm == am.from ? 1 : -1)
        }
      }
      if (am.type != em.Text) return Rm < (am.top + am.bottom) / 2 ? new gf(am.from, 1) : new gf(am.to, -1);
      let pm = mm.docView.lineAt(am.from, 2);
      return pm && pm.length == am.length || (pm = mm.docView.lineAt(am.from, -2)), new Ff(mm, Dm, im, mm.textDirectionAt(am.from)).scanTile(pm, am.from)
    }
    class Ff {
      constructor(mm, Tm, fm, hm) {
        this.view = mm, this.x = Tm, this.y = fm, this.baseDir = hm, this.line = null, this.spans = null
      }
      bidiSpansAt(mm) {
        return (!this.line || this.line.from > mm || this.line.to < mm) && (this.line = this.view.state.doc.lineAt(mm), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(mm, Tm) {
        let {
          line: fm,
          spans: hm
        } = this.bidiSpansAt(mm);
        return hm[KT.find(hm, mm - fm.from, -1, Tm)].level == this.baseDir
      }
      dirAt(mm, Tm) {
        let {
          line: fm,
          spans: hm
        } = this.bidiSpansAt(mm);
        return hm[KT.find(hm, mm - fm.from, -1, Tm)].dir
      }
      bidiIn(mm, Tm) {
        let {
          spans: fm,
          line: hm
        } = this.bidiSpansAt(mm);
        return fm.length > 1 || fm.length && (fm[0].level != this.baseDir || fm[0].to + hm.from < Tm)
      }
      scan(mm, Tm) {
        let fm, hm, Am, am = 0,
          xm = mm.length - 1,
          wm = new Set,
          Dm = this.bidiIn(mm[0], mm[xm]),
          im = -1,
          Rm = 1e9;
        mm: for (; am < xm;) {
          let pm = xm - am,
            Em = am + xm >> 1;
          Tm: if (wm.has(Em)) {
            let mm = am + Math.floor(Math.random() * pm);
            for (let Tm = 0; Tm < pm; Tm++) {
              if (!wm.has(mm)) {
                Em = mm;
                break Tm
              }
              mm++, mm == xm && (mm = am)
            }
            break mm
          } wm.add(Em);
          let om = Tm(Em);
          if (om)
            for (let Tm = 0; Tm < om.length; Tm++) {
              let wm = om[Tm],
                pm = 0;
              if (!(0 == wm.width && om.length > 1)) {
                if (wm.bottom < this.y)(!fm || fm.bottom < wm.bottom) && (fm = wm), pm = 1;
                else if (wm.top > this.y)(!hm || hm.top > wm.top) && (hm = wm), pm = -1;
                else {
                  let mm = wm.left > this.x ? this.x - wm.left : wm.right < this.x ? this.x - wm.right : 0,
                    Tm = Math.abs(mm);
                  Tm < Rm && (im = Em, Rm = Tm, Am = wm), mm && (pm = mm < 0 == (this.baseDir == RT.LTR) ? -1 : 1)
                } - 1 != pm || Dm && !this.baseDirAt(mm[Em], 1) ? 1 != pm || Dm && !this.baseDirAt(mm[Em + 1], -1) || (am = Em + 1) : xm = Em
              }
            }
        }
        if (!Am) {
          let Am = fm && (!hm || this.y - fm.bottom < hm.top - this.y) ? fm : hm;
          return this.y = (Am.top + Am.bottom) / 2, this.scan(mm, Tm)
        }
        if (Rm) {
          if (fm && fm.bottom > Am.top) return this.y = fm.bottom - 1, this.scan(mm, Tm);
          if (hm && hm.top < Am.bottom) return this.y = hm.top + 1, this.scan(mm, Tm)
        }
        let pm = (Dm ? this.dirAt(mm[im], 1) : this.baseDir) == RT.LTR;
        return {
          i: im,
          after: this.x > (Am.left + Am.right) / 2 == pm
        }
      }
      scanText(mm, Tm) {
        let fm = [];
        for (let am = 0; am < mm.length; am = (0, hm.ab)(mm.text, am)) fm.push(Tm + am);
        fm.push(Tm + mm.length);
        let Am = this.scan(fm, (hm => {
          let Am = fm[hm] - Tm,
            am = fm[hm + 1] - Tm;
          return AT(mm.dom, Am, am).getClientRects()
        }));
        return Am.after ? new gf(fm[Am.i + 1], -1) : new gf(fm[Am.i], 1)
      }
      scanTile(mm, Tm) {
        if (!mm.length) return new gf(Tm, 1);
        if (1 == mm.children.length) {
          let fm = mm.children[0];
          if (fm.isText()) return this.scanText(fm, Tm);
          if (fm.isComposite()) return this.scanTile(fm, Tm)
        }
        let fm = [Tm];
        for (let xm = 0, wm = Tm; xm < mm.children.length; xm++) fm.push(wm += mm.children[xm].length);
        let hm = this.scan(fm, (Tm => {
            let fm = mm.children[Tm];
            return 48 & fm.flags ? null : (1 == fm.dom.nodeType ? fm.dom : AT(fm.dom, 0, fm.length)).getClientRects()
          })),
          Am = mm.children[hm.i],
          am = fm[hm.i];
        return Am.isText() ? this.scanText(Am, am) : Am.isComposite() ? this.scanTile(Am, am) : hm.after ? new gf(fm[hm.i + 1], -1) : new gf(am, 1)
      }
    }
    const mh = "\uffff";
    class Th {
      constructor(mm, Tm) {
        this.points = mm, this.view = Tm, this.text = "", this.lineSeparator = Tm.state.facet(hm.q.lineSeparator)
      }
      append(mm) {
        this.text += mm
      }
      lineBreak() {
        this.text += mh
      }
      readRange(mm, Tm) {
        if (!mm) return this;
        let fm = mm.parentNode;
        for (let hm = mm;;) {
          this.findPointBefore(fm, hm);
          let mm = this.text.length;
          this.readNode(hm);
          let Am = Of.get(hm),
            am = hm.nextSibling;
          if (am == Tm) {
            (null === Am || void 0 === Am ? void 0 : Am.breakAfter) && !am && fm != this.view.contentDOM && this.lineBreak();
            break
          }
          let xm = Of.get(am);
          (Am && xm ? Am.breakAfter : (Am ? Am.breakAfter : Lm(hm)) || Lm(am) && ("BR" != hm.nodeName || (null === Am || void 0 === Am ? void 0 : Am.isWidget())) && this.text.length > mm) && !hh(am, Tm) && this.lineBreak(), hm = am
        }
        return this.findPointBefore(fm, Tm), this
      }
      readTextNode(mm) {
        let Tm = mm.nodeValue;
        for (let fm of this.points) fm.node == mm && (fm.pos = this.text.length + Math.min(fm.offset, Tm.length));
        for (let fm = 0, hm = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let Am, am = -1,
            xm = 1;
          if (this.lineSeparator ? (am = Tm.indexOf(this.lineSeparator, fm), xm = this.lineSeparator.length) : (Am = hm.exec(Tm)) && (am = Am.index, xm = Am[0].length), this.append(Tm.slice(fm, am < 0 ? Tm.length : am)), am < 0) break;
          if (this.lineBreak(), xm > 1)
            for (let Tm of this.points) Tm.node == mm && Tm.pos > this.text.length && (Tm.pos -= xm - 1);
          fm = am + xm
        }
      }
      readNode(mm) {
        let Tm = Of.get(mm),
          fm = Tm && Tm.overrideDOMText;
        if (null != fm) {
          this.findPointInside(mm, fm.length);
          for (let mm = fm.iter(); !mm.next().done;) mm.lineBreak ? this.lineBreak() : this.append(mm.value)
        } else 3 == mm.nodeType ? this.readTextNode(mm) : "BR" == mm.nodeName ? mm.nextSibling && this.lineBreak() : 1 == mm.nodeType && this.readRange(mm.firstChild, null)
      }
      findPointBefore(mm, Tm) {
        for (let fm of this.points) fm.node == mm && mm.childNodes[fm.offset] == Tm && (fm.pos = this.text.length)
      }
      findPointInside(mm, Tm) {
        for (let fm of this.points)(3 == mm.nodeType ? fm.node == mm : mm.contains(fm.node)) && (fm.pos = this.text.length + (fh(mm, fm.node, fm.offset) ? Tm : 0))
      }
    }

    function fh(mm, Tm, fm) {
      for (;;) {
        if (!Tm || fm < Um(Tm)) return !1;
        if (Tm == mm) return !0;
        fm = Bm(Tm) + 1, Tm = Tm.parentNode
      }
    }

    function hh(mm, Tm) {
      let fm;
      for (; mm != Tm && mm; mm = mm.nextSibling) {
        let Tm = Of.get(mm);
        if (!(null === Tm || void 0 === Tm ? void 0 : Tm.isWidget())) return !1;
        Tm && (fm || (fm = [])).push(Tm)
      }
      if (fm)
        for (let hm of fm) {
          let mm = hm.overrideDOMText;
          if (null === mm || void 0 === mm ? void 0 : mm.length) return !1
        }
      return !0
    }
    class Ah {
      constructor(mm, Tm) {
        this.node = mm, this.offset = Tm, this.pos = -1
      }
    }
    class ah {
      constructor(mm, Tm, fm, Am) {
        this.typeOver = Am, this.bounds = null, this.text = "", this.domChanged = Tm > -1;
        let {
          impreciseHead: am,
          impreciseAnchor: xm
        } = mm.docView, wm = mm.state.selection;
        if (mm.state.readOnly && Tm > -1) this.newSel = null;
        else if (Tm > -1 && (this.bounds = xh(mm.docView.tile, Tm, fm, 0))) {
          let Tm = am || xm ? [] : function(mm) {
              let Tm = [];
              if (mm.root.activeElement != mm.contentDOM) return Tm;
              let {
                anchorNode: fm,
                anchorOffset: hm,
                focusNode: Am,
                focusOffset: am
              } = mm.observer.selectionRange;
              fm && (Tm.push(new Ah(fm, hm)), Am == fm && am == hm || Tm.push(new Ah(Am, am)));
              return Tm
            }(mm),
            fm = new Th(Tm, mm);
          fm.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = fm.text, this.newSel = function(mm, Tm) {
            if (0 == mm.length) return null;
            let fm = mm[0].pos,
              Am = 2 == mm.length ? mm[1].pos : fm;
            return fm > -1 && Am > -1 ? hm.o.single(fm + Tm, Am + Tm) : null
          }(Tm, this.bounds.from)
        } else {
          let Tm = mm.observer.selectionRange,
            fm = am && am.node == Tm.focusNode && am.offset == Tm.focusOffset || !sm(mm.contentDOM, Tm.focusNode) ? wm.main.head : mm.docView.posFromDOM(Tm.focusNode, Tm.focusOffset),
            Am = xm && xm.node == Tm.anchorNode && xm.offset == Tm.anchorOffset || !sm(mm.contentDOM, Tm.anchorNode) ? wm.main.anchor : mm.docView.posFromDOM(Tm.anchorNode, Tm.anchorOffset),
            Dm = mm.viewport;
          if ((Jm.ios || Jm.chrome) && wm.main.empty && fm != Am && (Dm.from > 0 || Dm.to < mm.state.doc.length)) {
            let Tm = Math.min(fm, Am),
              hm = Math.max(fm, Am),
              am = Dm.from - Tm,
              xm = Dm.to - hm;
            0 != am && 1 != am && 0 != Tm || 0 != xm && -1 != xm && hm != mm.state.doc.length || (fm = 0, Am = mm.state.doc.length)
          }
          if (mm.inputState.composing > -1 && wm.mo.length > 1) this.newSel = wm.replaceRange(hm.o.range(Am, fm));
          else if (mm.lineWrapping && Am == fm && (!wm.main.empty || wm.main.head != fm) && mm.inputState.lastTouchTime > Date.now() - 100) {
            let Tm = mm.coordsAtPos(fm, -1),
              Am = 0;
            Tm && (Am = mm.inputState.lastTouchY <= Tm.bottom ? -1 : 1), this.newSel = hm.o.create([hm.o.cursor(fm, Am)])
          } else this.newSel = hm.o.single(Am, fm)
        }
      }
    }

    function xh(mm, Tm, fm, hm) {
      if (mm.isComposite()) {
        let Am = -1,
          am = -1,
          xm = -1,
          wm = -1;
        for (let Dm = 0, im = hm, Rm = hm; Dm < mm.children.length; Dm++) {
          let hm = mm.children[Dm],
            pm = im + hm.length;
          if (im < Tm && pm > fm) return xh(hm, Tm, fm, im);
          if (pm >= Tm && -1 == Am && (Am = Dm, am = im), im > fm && hm.dom.parentNode == mm.dom) {
            xm = Dm, wm = Rm;
            break
          }
          Rm = pm, im = pm + hm.breakAfter
        }
        return {
          from: am,
          to: wm < 0 ? hm + mm.length : wm,
          startDOM: (Am ? mm.children[Am - 1].dom.nextSibling : null) || mm.dom.firstChild,
          endDOM: xm < mm.children.length && xm >= 0 ? mm.children[xm].dom : null
        }
      }
      return mm.isText() ? {
        from: hm,
        to: hm + mm.length,
        startDOM: mm.dom,
        endDOM: mm.dom.nextSibling
      } : null
    }

    function wh(mm, Tm) {
      let fm, {
          newSel: Am
        } = Tm,
        {
          state: am
        } = mm,
        xm = am.selection.main,
        wm = mm.inputState.lastKeyTime > Date.now() - 100 ? mm.inputState.lastKeyCode : -1;
      if (Tm.bounds) {
        let {
          from: mm,
          to: Am
        } = Tm.bounds, Dm = xm.from, im = null;
        (8 === wm || Jm.android && Tm.text.length < Am - mm) && (Dm = xm.to, im = "end");
        let Rm, pm, Em = am.doc.sliceString(mm, Am, mh);
        !xm.empty && xm.from >= mm && xm.to <= Am && (Tm.typeOver || Em != Tm.text) && Em.slice(0, xm.from - mm) == Tm.text.slice(0, xm.from - mm) && Em.slice(xm.to - mm) == Tm.text.slice(Rm = Tm.text.length - (Em.length - (xm.to - mm))) ? fm = {
          from: xm.from,
          to: xm.to,
          insert: hm.O.of(Tm.text.slice(xm.from - mm, Rm).split(mh))
        } : (pm = ih(Em, Tm.text, Dm - mm, im)) && (Jm.chrome && 13 == wm && pm.toB == pm.from + 2 && Tm.text.slice(pm.from, pm.toB) == mh + mh && pm.toB--, fm = {
          from: mm + pm.from,
          to: mm + pm.toA,
          insert: hm.O.of(Tm.text.slice(pm.from, pm.toB).split(mh))
        })
      } else Am && (!mm.hasFocus && am.facet(tT) || Rh(Am, xm)) && (Am = null);
      if (!fm && !Am) return !1;
      if ((Jm.mac || Jm.android) && fm && fm.from == fm.to && fm.from == xm.head - 1 && /^\. ?$/.test(fm.insert.toString()) && "off" == mm.contentDOM.getAttribute("autocorrect") ? (Am && 2 == fm.insert.length && (Am = hm.o.single(Am.main.anchor - 1, Am.main.head - 1)), fm = {
          from: fm.from,
          to: fm.to,
          insert: hm.O.of([fm.insert.toString().replace(".", " ")])
        }) : am.doc.lineAt(xm.from).to < xm.to && mm.docView.lineHasWidget(xm.to) && mm.inputState.insertingTextAt > Date.now() - 50 ? fm = {
          from: xm.from,
          to: xm.to,
          insert: am.toText(mm.inputState.insertingText)
        } : Jm.chrome && fm && fm.from == fm.to && fm.from == xm.head && "\n " == fm.insert.toString() && mm.lineWrapping && (Am && (Am = hm.o.single(Am.main.anchor - 1, Am.main.head - 1)), fm = {
          from: xm.from,
          to: xm.to,
          insert: hm.O.of([" "])
        }), fm) return Dh(mm, fm, Am, wm);
      if (Am && !Rh(Am, xm)) {
        let Tm = !1,
          fm = "select";
        return mm.inputState.lastSelectionTime > Date.now() - 50 && ("select" == mm.inputState.lastSelectionOrigin && (Tm = !0), fm = mm.inputState.lastSelectionOrigin, "select.pointer" == fm && (Am = Uf(am.facet(Af).map((Tm => Tm(mm))), Am))), mm.dispatch({
          selection: Am,
          scrollIntoView: Tm,
          userEvent: fm
        }), !0
      }
      return !1
    }

    function Dh(mm, Tm, fm) {
      let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (Jm.ios && mm.inputState.flushIOSKey(Tm)) return !0;
      let am = mm.state.selection.main;
      if (Jm.android && (Tm.to == am.to && (Tm.from == am.from || Tm.from == am.from - 1 && " " == mm.state.sliceDoc(Tm.from, am.from)) && 1 == Tm.insert.length && 2 == Tm.insert.lines && aT(mm.contentDOM, "Enter", 13) || (Tm.from == am.from - 1 && Tm.to == am.to && 0 == Tm.insert.length || 8 == Am && Tm.insert.length < Tm.to - Tm.from && Tm.to > am.head) && aT(mm.contentDOM, "Backspace", 8) || Tm.from == am.from && Tm.to == am.to + 1 && 0 == Tm.insert.length && aT(mm.contentDOM, "Delete", 46))) return !0;
      let xm, wm = Tm.insert.toString();
      mm.inputState.composing >= 0 && mm.inputState.composing++;
      let Dm = () => xm || (xm = function(mm, Tm, fm) {
        let Am, am = mm.state,
          xm = am.selection.main,
          wm = -1;
        if (Tm.from == Tm.to && Tm.from < xm.from || Tm.from > xm.to) {
          let fm = Tm.from < xm.from ? -1 : 1,
            hm = fm < 0 ? xm.from : xm.to,
            Am = tf(am.facet(Af).map((Tm => Tm(mm))), hm, fm);
          Tm.from == Am && (wm = Am)
        }
        if (wm > -1) Am = {
          changes: Tm,
          selection: hm.o.cursor(Tm.from + Tm.insert.length, -1)
        };
        else if (Tm.from >= xm.from && Tm.to <= xm.to && Tm.to - Tm.from >= (xm.to - xm.from) / 3 && (!fm || fm.main.empty && fm.main.from == Tm.from + Tm.insert.length) && mm.inputState.composing < 0) {
          let fm = xm.from < Tm.from ? am.sliceDoc(xm.from, Tm.from) : "",
            hm = xm.to > Tm.to ? am.sliceDoc(Tm.to, xm.to) : "";
          Am = am.replaceSelection(mm.state.toText(fm + Tm.insert.sliceString(0, void 0, mm.state.lineBreak) + hm))
        } else {
          let wm = am.changes(Tm),
            Dm = fm && fm.main.to <= wm.newLength ? fm.main : void 0;
          if (am.selection.mo.length > 1 && (mm.inputState.composing >= 0 || mm.inputState.compositionPendingChange) && Tm.to <= xm.to + 10 && Tm.to >= xm.to - 10) {
            let im, Rm = mm.state.sliceDoc(Tm.from, Tm.to),
              pm = fm && lf(mm, fm.main.head);
            if (pm) {
              let mm = Tm.insert.length - (Tm.to - Tm.from);
              im = {
                from: pm.from,
                to: pm.to - mm
              }
            } else im = mm.state.doc.lineAt(xm.head);
            let Em = xm.to - Tm.to;
            Am = am.changeByRange((fm => {
              if (fm.from == xm.from && fm.to == xm.to) return {
                changes: wm,
                range: Dm || fm.map(wm)
              };
              let Am = fm.to - Em,
                pm = Am - Rm.length;
              if (mm.state.sliceDoc(pm, Am) != Rm || Am >= im.from && pm <= im.to) return {
                range: fm
              };
              let om = am.changes({
                  from: pm,
                  to: Am,
                  insert: Tm.insert
                }),
                Om = fm.to - xm.to;
              return {
                changes: om,
                range: Dm ? hm.o.range(Math.max(0, Dm.anchor + Om), Math.max(0, Dm.head + Om)) : fm.map(om)
              }
            }))
          } else Am = {
            changes: wm,
            selection: Dm && am.selection.replaceRange(Dm)
          }
        }
        let Dm = "input.type";
        (mm.composing || mm.inputState.compositionPendingChange && mm.inputState.compositionEndedAt > Date.now() - 50) && (mm.inputState.compositionPendingChange = !1, Dm += ".compose", mm.inputState.compositionFirstChange && (Dm += ".start", mm.inputState.compositionFirstChange = !1));
        return am.update(Am, {
          userEvent: Dm,
          scrollIntoView: !0
        })
      }(mm, Tm, fm));
      return mm.state.facet(HT).some((fm => fm(mm, Tm.from, Tm.to, wm, Dm))) || mm.dispatch(Dm()), !0
    }

    function ih(mm, Tm, fm, hm) {
      let Am = Math.min(mm.length, Tm.length),
        am = 0;
      for (; am < Am && mm.charCodeAt(am) == Tm.charCodeAt(am);) am++;
      if (am == Am && mm.length == Tm.length) return null;
      let xm = mm.length,
        wm = Tm.length;
      for (; xm > 0 && wm > 0 && mm.charCodeAt(xm - 1) == Tm.charCodeAt(wm - 1);) xm--, wm--;
      if ("end" == hm) {
        fm -= xm + Math.max(0, am - Math.min(xm, wm)) - am
      }
      if (xm < am && mm.length < Tm.length) {
        am -= fm <= am && fm >= xm ? am - fm : 0, wm = am + (wm - xm), xm = am
      } else if (wm < am) {
        am -= fm <= am && fm >= wm ? am - fm : 0, xm = am + (xm - wm), wm = am
      }
      return {
        from: am,
        toA: xm,
        toB: wm
      }
    }

    function Rh(mm, Tm) {
      return Tm.head == mm.main.head && Tm.anchor == mm.main.anchor
    }
    class ph {
      setSelectionOrigin(mm) {
        this.lastSelectionOrigin = mm, this.lastSelectionTime = Date.now()
      }
      constructor(mm) {
        this.view = mm, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = mm.hasFocus, Jm.safari && mm.contentDOM.addEventListener("input", (() => null)), Jm.gecko && function(mm) {
          Hh.has(mm) || (Hh.add(mm), mm.addEventListener("copy", (() => {})), mm.addEventListener("cut", (() => {})))
        }(mm.contentDOM.ownerDocument)
      }
      handleEvent(mm) {
        (function(mm, Tm) {
          if (!Tm.bubbles) return !0;
          if (Tm.defaultPrevented) return !1;
          for (let fm, hm = Tm.target; hm != mm.contentDOM; hm = hm.parentNode)
            if (!hm || 11 == hm.nodeType || (fm = Of.get(hm)) && fm.isWidget() && !fm.isHidden && fm.widget.ignoreEvent(Tm)) return !1;
          return !0
        })(this.view, mm) && !this.ignoreDuringComposition(mm) && ("keydown" == mm.type && this.keydown(mm) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(mm.type, mm))) : this.runHandlers(mm.type, mm)))
      }
      runHandlers(mm, Tm) {
        let fm = this.handlers[mm];
        if (fm) {
          for (let mm of fm.observers) mm(this.view, Tm);
          for (let mm of fm.handlers) {
            if (Tm.defaultPrevented) break;
            if (mm(this.view, Tm)) {
              Tm.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(mm) {
        let Tm = oh(mm),
          fm = this.handlers,
          hm = this.view.contentDOM;
        for (let Am in Tm)
          if ("scroll" != Am) {
            let mm = !Tm[Am].handlers.length,
              am = fm[Am];
            am && mm != !am.handlers.length && (hm.removeEventListener(Am, this.handleEvent), am = null), am || hm.addEventListener(Am, this.handleEvent, {
              passive: mm
            })
          } for (let Am in fm) "scroll" == Am || Tm[Am] || hm.removeEventListener(Am, this.handleEvent);
        this.handlers = Tm
      }
      keydown(mm) {
        if (this.lastKeyCode = mm.keyCode, this.lastKeyTime = Date.now(), 9 == mm.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != mm.keyCode && qh.indexOf(mm.keyCode) < 0 && (this.tabFocusMode = -1), Jm.android && Jm.chrome && !mm.synthetic && (13 == mm.keyCode || 8 == mm.keyCode)) return this.view.observer.delayAndroidKey(mm.key, mm.keyCode), !0;
        let Tm;
        return !Jm.ios || mm.synthetic || mm.altKey || mm.metaKey || mm.shiftKey || !((Tm = Oh.find((Tm => Tm.keyCode == mm.keyCode))) && !mm.ctrlKey || Yh.indexOf(mm.key) > -1 && mm.ctrlKey) ? (229 != mm.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = Tm || mm, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(mm) {
        let Tm = this.pendingIOSKey;
        return !!Tm && (!("Enter" == Tm.key && mm && mm.from < mm.to && /^\S+$/.test(mm.insert.toString())) && (this.pendingIOSKey = void 0, aT(this.view.contentDOM, Tm.key, Tm.keyCode, Tm instanceof KeyboardEvent ? Tm : void 0)))
      }
      ignoreDuringComposition(mm) {
        return !(!/^key/.test(mm.type) || mm.synthetic) && (this.composing > 0 || !!(Jm.safari && !Jm.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(mm) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = mm
      }
      update(mm) {
        this.view.observer.update(mm), this.mouseSelection && this.mouseSelection.update(mm), this.draggedContent && mm.docChanged && (this.draggedContent = this.draggedContent.map(mm.changes)), mm.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function Eh(mm, Tm) {
      return (fm, hm) => {
        try {
          return Tm.call(mm, hm, fm)
        } catch (Am) {
          vT(fm.state, Am)
        }
      }
    }

    function oh(mm) {
      let Tm = Object.create(null);

      function fm(mm) {
        return Tm[mm] || (Tm[mm] = {
          observers: [],
          handlers: []
        })
      }
      for (let hm of mm) {
        let mm = hm.spec,
          Tm = mm && mm.plugin.domEventHandlers,
          Am = mm && mm.plugin.domEventObservers;
        if (Tm)
          for (let am in Tm) {
            let mm = Tm[am];
            mm && fm(am).handlers.push(Eh(hm.value, mm))
          }
        if (Am)
          for (let am in Am) {
            let mm = Am[am];
            mm && fm(am).observers.push(Eh(hm.value, mm))
          }
      }
      for (let hm in Ih) fm(hm).handlers.push(Ih[hm]);
      for (let hm in Kh) fm(hm).observers.push(Kh[hm]);
      return Tm
    }
    const Oh = [{
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
      Yh = "dthko",
      qh = [16, 17, 18, 20, 91, 92, 224, 225];

    function jh(mm) {
      return .7 * Math.max(0, mm) + 8
    }
    class Vh {
      constructor(mm, Tm, fm, Am) {
        this.view = mm, this.startEvent = Tm, this.style = fm, this.mustSelect = Am, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = Tm, this.scrollParents = Fm(mm.contentDOM), this.atoms = mm.state.facet(Af).map((Tm => Tm(mm)));
        let am = mm.contentDOM.ownerDocument;
        am.addEventListener("mousemove", this.move = this.move.bind(this)), am.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = Tm.shiftKey, this.multiple = mm.state.facet(hm.q.allowMultipleSelections) && function(mm, Tm) {
          let fm = mm.state.facet(eT);
          return fm.length ? fm[0](Tm) : Jm.mac ? Tm.metaKey : Tm.ctrlKey
        }(mm, Tm), this.dragging = !(! function(mm, Tm) {
          let {
            main: fm
          } = mm.state.selection;
          if (fm.empty) return !1;
          let hm = rm(mm.root);
          if (!hm || 0 == hm.rangeCount) return !0;
          let Am = hm.getRangeAt(0).getClientRects();
          for (let am = 0; am < Am.length; am++) {
            let mm = Am[am];
            if (mm.left <= Tm.clientX && mm.right >= Tm.clientX && mm.top <= Tm.clientY && mm.bottom >= Tm.clientY) return !0
          }
          return !1
        }(mm, Tm) || 1 != Sh(Tm)) && null
      }
      start(mm) {
        !1 === this.dragging && this.select(mm)
      }
      move(mm) {
        if (0 == mm.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (Tm = this.startEvent, fm = mm, Math.max(Math.abs(Tm.clientX - fm.clientX), Math.abs(Tm.clientY - fm.clientY)) < 10)) return;
        var Tm, fm;
        this.select(this.lastEvent = mm);
        let hm = 0,
          Am = 0,
          am = 0,
          xm = 0,
          wm = this.view.win.innerWidth,
          Dm = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: am,
          right: wm
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: xm,
          bottom: Dm
        } = this.scrollParents.y.getBoundingClientRect());
        let im = Df(this.view);
        mm.clientX - im.left <= am + 6 ? hm = -jh(am - mm.clientX) : mm.clientX + im.right >= wm - 6 && (hm = jh(mm.clientX - wm)), mm.clientY - im.top <= xm + 6 ? Am = -jh(xm - mm.clientY) : mm.clientY + im.bottom >= Dm - 6 && (Am = jh(mm.clientY - Dm)), this.setScrollSpeed(hm, Am)
      }
      up(mm) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || mm.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let mm = this.view.contentDOM.ownerDocument;
        mm.removeEventListener("mousemove", this.move), mm.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(mm, Tm) {
        this.scrollSpeed = {
          x: mm,
          y: Tm
        }, mm || Tm ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: mm,
          y: Tm
        } = this.scrollSpeed;
        mm && this.scrollParents.x && (this.scrollParents.x.scrollLeft += mm, mm = 0), Tm && this.scrollParents.y && (this.scrollParents.y.scrollTop += Tm, Tm = 0), (mm || Tm) && this.view.win.scrollBy(mm, Tm), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(mm) {
        let {
          view: Tm
        } = this, fm = Uf(this.atoms, this.style.get(mm, this.extend, this.multiple));
        !this.mustSelect && fm.eq(Tm.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: fm,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(mm) {
        mm.transactions.some((mm => mm.isUserEvent("input.type"))) ? this.destroy() : this.style.update(mm) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const Ih = Object.create(null),
      Kh = Object.create(null),
      Qh = Jm.ie && Jm.ie_version < 15 || Jm.ios && Jm.webkit_version < 604;

    function nh(mm, Tm, fm) {
      for (let hm of mm.facet(Tm)) fm = hm(fm, mm);
      return fm
    }

    function Jh(mm, Tm) {
      Tm = nh(mm.state, CT, Tm);
      let fm, {
          state: Am
        } = mm,
        am = 1,
        xm = Am.toText(Tm),
        wm = xm.lines == Am.selection.mo.length;
      if (null != Nh && Am.selection.mo.every((mm => mm.empty)) && Nh == xm.toString()) {
        let mm = -1;
        fm = Am.changeByRange((fm => {
          let Dm = Am.doc.lineAt(fm.from);
          if (Dm.from == mm) return {
            range: fm
          };
          mm = Dm.from;
          let im = Am.toText((wm ? xm.line(am++).text : Tm) + Am.lineBreak);
          return {
            changes: {
              from: Dm.from,
              insert: im
            },
            range: hm.o.cursor(fm.from + im.length)
          }
        }))
      } else fm = wm ? Am.changeByRange((mm => {
        let Tm = xm.line(am++);
        return {
          changes: {
            from: mm.from,
            to: mm.to,
            insert: Tm.text
          },
          range: hm.o.cursor(mm.from + Tm.length)
        }
      })) : Am.replaceSelection(xm);
      mm.dispatch(fm, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function ch(mm, Tm, fm, Am) {
      if (1 == Am) return hm.o.cursor(Tm, fm);
      if (2 == Am) return function(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Am = mm.charCategorizer(Tm),
          am = mm.doc.lineAt(Tm),
          xm = Tm - am.from;
        if (0 == am.length) return hm.o.cursor(Tm);
        0 == xm ? fm = 1 : xm == am.length && (fm = -1);
        let wm = xm,
          Dm = xm;
        fm < 0 ? wm = (0, hm.ab)(am.text, xm, !1) : Dm = (0, hm.ab)(am.text, xm);
        let im = Am(am.text.slice(wm, Dm));
        for (; wm > 0;) {
          let mm = (0, hm.ab)(am.text, wm, !1);
          if (Am(am.text.slice(mm, wm)) != im) break;
          wm = mm
        }
        for (; Dm < am.length;) {
          let mm = (0, hm.ab)(am.text, Dm);
          if (Am(am.text.slice(Dm, mm)) != im) break;
          Dm = mm
        }
        return hm.o.range(wm + am.from, Dm + am.from)
      }(mm.state, Tm, fm);
      {
        let Am = mm.docView.lineAt(Tm, fm),
          am = mm.state.doc.lineAt(Am ? Am.posAtEnd : Tm),
          xm = Am ? Am.posAtStart : am.from,
          wm = Am ? Am.posAtEnd : am.to;
        return wm < mm.state.doc.length && wm == am.to && wm++, hm.o.range(xm, wm)
      }
    }
    Kh.scroll = mm => {
      mm.inputState.lastScrollTop = mm.scrollDOM.scrollTop, mm.inputState.lastScrollLeft = mm.scrollDOM.scrollLeft
    }, Kh.wheel = Kh.mousewheel = mm => {
      mm.inputState.lastWheelEvent = Date.now()
    }, Ih.keydown = (mm, Tm) => (mm.inputState.setSelectionOrigin("select"), 27 == Tm.keyCode && 0 != mm.inputState.tabFocusMode && (mm.inputState.tabFocusMode = Date.now() + 2e3), !1), Kh.touchstart = (mm, Tm) => {
      let fm = mm.inputState,
        hm = Tm.targetTouches[0];
      fm.lastTouchTime = Date.now(), hm && (fm.lastTouchX = hm.clientX, fm.lastTouchY = hm.clientY), fm.setSelectionOrigin("select.pointer")
    }, Kh.touchmove = mm => {
      mm.inputState.setSelectionOrigin("select.pointer")
    }, Ih.mousedown = (mm, Tm) => {
      if (mm.observer.flush(), mm.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let fm = null;
      for (let hm of mm.state.facet(GT))
        if (fm = hm(mm, Tm), fm) break;
      if (fm || 0 != Tm.button || (fm = function(mm, Tm) {
          let fm = mm.posAndSideAtCoords({
              x: Tm.clientX,
              y: Tm.clientY
            }, !1),
            Am = Sh(Tm),
            am = mm.state.selection;
          return {
            update(mm) {
              mm.docChanged && (fm.pos = mm.changes.mapPos(fm.pos), am = am.map(mm.changes))
            },
            get(Tm, xm, wm) {
              let Dm, im = mm.posAndSideAtCoords({
                  x: Tm.clientX,
                  y: Tm.clientY
                }, !1),
                Rm = ch(mm, im.pos, im.assoc, Am);
              if (fm.pos != im.pos && !xm) {
                let Tm = ch(mm, fm.pos, fm.assoc, Am),
                  am = Math.min(Tm.from, Rm.from),
                  xm = Math.max(Tm.to, Rm.to);
                Rm = am < Rm.from ? hm.o.range(am, xm, Rm.assoc) : hm.o.range(xm, am, Rm.assoc)
              }
              return xm ? am.replaceRange(am.main.extend(Rm.from, Rm.to, Rm.assoc)) : wm && 1 == Am && am.mo.length > 1 && (Dm = function(mm, Tm) {
                for (let fm = 0; fm < mm.mo.length; fm++) {
                  let {
                    from: Am,
                    to: am
                  } = mm.mo[fm];
                  if (Am <= Tm && am >= Tm) return hm.o.create(mm.mo.slice(0, fm).concat(mm.mo.slice(fm + 1)), mm.mainIndex == fm ? 0 : mm.mainIndex - (mm.mainIndex > fm ? 1 : 0))
                }
                return null
              }(am, im.pos)) ? Dm : wm ? am.addRange(Rm) : hm.o.create([Rm])
            }
          }
        }(mm, Tm)), fm) {
        let hm = !mm.hasFocus;
        mm.inputState.startMouseSelection(new Vh(mm, Tm, fm, hm)), hm && mm.observer.ignore((() => {
          hT(mm.contentDOM);
          let Tm = mm.root.activeElement;
          Tm && !Tm.contains(mm.contentDOM) && Tm.blur()
        }));
        let Am = mm.inputState.mouseSelection;
        if (Am) return Am.start(Tm), !1 === Am.dragging
      } else mm.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const zh = Jm.ie && Jm.ie_version <= 11;
    let Zh = null,
      kh = 0,
      bh = 0;

    function Sh(mm) {
      if (!zh) return mm.detail;
      let Tm = Zh,
        fm = bh;
      return Zh = mm, bh = Date.now(), kh = !Tm || fm > Date.now() - 400 && Math.abs(Tm.clientX - mm.clientX) < 2 && Math.abs(Tm.clientY - mm.clientY) < 2 ? (kh + 1) % 3 : 1
    }

    function eh(mm, Tm, fm, hm) {
      if (!(fm = nh(mm.state, CT, fm))) return;
      let Am = mm.posAtCoords({
          x: Tm.clientX,
          y: Tm.clientY
        }, !1),
        {
          draggedContent: am
        } = mm.inputState,
        xm = hm && am && function(mm, Tm) {
          let fm = mm.state.facet(NT);
          return fm.length ? fm[0](Tm) : Jm.mac ? !Tm.altKey : !Tm.ctrlKey
        }(mm, Tm) ? {
          from: am.from,
          to: am.to
        } : null,
        wm = {
          from: Am,
          insert: fm
        },
        Dm = mm.state.changes(xm ? [xm, wm] : wm);
      mm.focus(), mm.dispatch({
        changes: Dm,
        selection: {
          anchor: Dm.mapPos(Am, -1),
          head: Dm.mapPos(Am, 1)
        },
        userEvent: xm ? "move.drop" : "input.drop"
      }), mm.inputState.draggedContent = null
    }
    Ih.dragstart = (mm, Tm) => {
      let {
        selection: {
          main: fm
        }
      } = mm.state;
      if (Tm.target.draggable) {
        let Am = mm.docView.tile.nearest(Tm.target);
        if (Am && Am.isWidget()) {
          let mm = Am.posAtStart,
            Tm = mm + Am.length;
          (mm >= fm.to || Tm <= fm.from) && (fm = hm.o.range(mm, Tm))
        }
      }
      let {
        inputState: Am
      } = mm;
      return Am.mouseSelection && (Am.mouseSelection.dragging = !0), Am.draggedContent = fm, Tm.dataTransfer && (Tm.dataTransfer.setData("Text", nh(mm.state, rT, mm.state.sliceDoc(fm.from, fm.to))), Tm.dataTransfer.effectAllowed = "copyMove"), !1
    }, Ih.dragend = mm => (mm.inputState.draggedContent = null, !1), Ih.drop = (mm, Tm) => {
      if (!Tm.dataTransfer) return !1;
      if (mm.state.readOnly) return !0;
      let fm = Tm.dataTransfer.files;
      if (fm && fm.length) {
        let hm = Array(fm.length),
          Am = 0,
          am = () => {
            ++Am == fm.length && eh(mm, Tm, hm.filter((mm => null != mm)).join(mm.state.lineBreak), !1)
          };
        for (let mm = 0; mm < fm.length; mm++) {
          let Tm = new FileReader;
          Tm.onerror = am, Tm.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(Tm.result) || (hm[mm] = Tm.result), am()
          }, Tm.readAsText(fm[mm])
        }
        return !0
      } {
        let fm = Tm.dataTransfer.getData("Text");
        if (fm) return eh(mm, Tm, fm, !0), !0
      }
      return !1
    }, Ih.paste = (mm, Tm) => {
      if (mm.state.readOnly) return !0;
      mm.observer.flush();
      let fm = Qh ? null : Tm.clipboardData;
      return fm ? (Jh(mm, fm.getData("text/plain") || fm.getData("text/uri-list")), !0) : (function(mm) {
        let Tm = mm.dom.parentNode;
        if (!Tm) return;
        let fm = Tm.appendChild(document.createElement("textarea"));
        fm.style.cssText = "position: fixed; left: -10000px; top: 10px", fm.focus(), setTimeout((() => {
          mm.focus(), fm.remove(), Jh(mm, fm.value)
        }), 50)
      }(mm), !1)
    };
    let Nh = null;
    Ih.copy = Ih.cut = (mm, Tm) => {
      if (!lm(mm.contentDOM, mm.observer.selectionRange)) return !1;
      let {
        text: fm,
        mo: hm,
        linewise: Am
      } = function(mm) {
        let Tm = [],
          fm = [],
          hm = !1;
        for (let Am of mm.selection.mo) Am.empty || (Tm.push(mm.sliceDoc(Am.from, Am.to)), fm.push(Am));
        if (!Tm.length) {
          let Am = -1;
          for (let {
              from: hm
            }
            of mm.selection.mo) {
            let am = mm.doc.lineAt(hm);
            am.number > Am && (Tm.push(am.text), fm.push({
              from: am.from,
              to: Math.min(mm.doc.length, am.to + 1)
            })), Am = am.number
          }
          hm = !0
        }
        return {
          text: nh(mm, rT, Tm.join(mm.lineBreak)),
          mo: fm,
          linewise: hm
        }
      }(mm.state);
      if (!fm && !Am) return !1;
      Nh = Am ? fm : null, "cut" != Tm.type || mm.state.readOnly || mm.dispatch({
        changes: hm,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let am = Qh ? null : Tm.clipboardData;
      return am ? (am.clearData(), am.setData("text/plain", fm), !0) : (function(mm, Tm) {
        let fm = mm.dom.parentNode;
        if (!fm) return;
        let hm = fm.appendChild(document.createElement("textarea"));
        hm.style.cssText = "position: fixed; left: -10000px; top: 10px", hm.value = Tm, hm.focus(), hm.selectionEnd = Tm.length, hm.selectionStart = 0, setTimeout((() => {
          hm.remove(), mm.focus()
        }), 50)
      }(mm, fm), !1)
    };
    const Gh = hm.e.define();

    function Xh(mm, Tm) {
      let fm = [];
      for (let hm of mm.facet(yT)) {
        let Am = hm(mm, Tm);
        Am && fm.push(Am)
      }
      return fm.length ? mm.update({
        effects: fm,
        annotations: Gh.of(!0)
      }) : null
    }

    function Ph(mm) {
      setTimeout((() => {
        let Tm = mm.hasFocus;
        if (Tm != mm.inputState.notifiedFocused) {
          let fm = Xh(mm.state, Tm);
          fm ? mm.dispatch(fm) : mm.update([])
        }
      }), 10)
    }
    Kh.focus = mm => {
      mm.inputState.lastFocusTime = Date.now(), mm.scrollDOM.scrollTop || !mm.inputState.lastScrollTop && !mm.inputState.lastScrollLeft || (mm.scrollDOM.scrollTop = mm.inputState.lastScrollTop, mm.scrollDOM.scrollLeft = mm.inputState.lastScrollLeft), Ph(mm)
    }, Kh.blur = mm => {
      mm.observer.clearSelectionRange(), Ph(mm)
    }, Kh.compositionstart = Kh.compositionupdate = mm => {
      mm.observer.editContext || (null == mm.inputState.compositionFirstChange && (mm.inputState.compositionFirstChange = !0), mm.inputState.composing < 0 && (mm.inputState.composing = 0))
    }, Kh.compositionend = mm => {
      mm.observer.editContext || (mm.inputState.composing = -1, mm.inputState.compositionEndedAt = Date.now(), mm.inputState.compositionPendingKey = !0, mm.inputState.compositionPendingChange = mm.observer.pendingRecords().length > 0, mm.inputState.compositionFirstChange = null, Jm.chrome && Jm.android ? mm.observer.flushSoon() : mm.inputState.compositionPendingChange ? Promise.resolve().then((() => mm.observer.flush())) : setTimeout((() => {
        mm.inputState.composing < 0 && mm.docView.hasComposition && mm.update([])
      }), 50))
    }, Kh.contextmenu = mm => {
      mm.inputState.lastContextMenu = Date.now()
    }, Ih.beforeinput = (mm, Tm) => {
      var fm, hm;
      if ("insertText" != Tm.inputType && "insertCompositionText" != Tm.inputType || (mm.inputState.insertingText = Tm.data, mm.inputState.insertingTextAt = Date.now()), "insertReplacementText" == Tm.inputType && mm.observer.editContext) {
        let hm = null === (fm = Tm.dataTransfer) || void 0 === fm ? void 0 : fm.getData("text/plain"),
          Am = Tm.getTargetRanges();
        if (hm && Am.length) {
          let Tm = Am[0],
            fm = mm.posAtDOM(Tm.startContainer, Tm.startOffset),
            am = mm.posAtDOM(Tm.endContainer, Tm.endOffset);
          return Dh(mm, {
            from: fm,
            to: am,
            insert: mm.state.toText(hm)
          }, null), !0
        }
      }
      let Am;
      if (Jm.chrome && Jm.android && (Am = Oh.find((mm => mm.inputType == Tm.inputType))) && (mm.observer.delayAndroidKey(Am.key, Am.keyCode), "Backspace" == Am.key || "Delete" == Am.key)) {
        let Tm = (null === (hm = window.visualViewport) || void 0 === hm ? void 0 : hm.height) || 0;
        setTimeout((() => {
          var fm;
          ((null === (fm = window.visualViewport) || void 0 === fm ? void 0 : fm.height) || 0) > Tm + 10 && mm.hasFocus && (mm.contentDOM.blur(), mm.focus())
        }), 100)
      }
      return Jm.ios && "deleteContentForward" == Tm.inputType && mm.observer.flushSoon(), Jm.safari && "insertText" == Tm.inputType && mm.inputState.composing >= 0 && setTimeout((() => Kh.compositionend(mm, Tm)), 20), !1
    };
    const Hh = new Set;
    const yh = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let Ch = !1;

    function rh() {
      Ch = !1
    }
    class sh {
      constructor(mm) {
        this.lineWrapping = mm, this.doc = hm.O.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(mm, Tm) {
        let fm = this.doc.lineAt(Tm).number - this.doc.lineAt(mm).number + 1;
        return this.lineWrapping && (fm += Math.max(0, Math.ceil((Tm - mm - fm * this.lineLength * .5) / this.lineLength))), this.lineHeight * fm
      }
      heightForLine(mm) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((mm - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(mm) {
        return this.doc = mm, this
      }
      mustRefreshForWrapping(mm) {
        return yh.indexOf(mm) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(mm) {
        let Tm = !1;
        for (let fm = 0; fm < mm.length; fm++) {
          let hm = mm[fm];
          hm < 0 ? fm++ : this.heightSamples[Math.floor(10 * hm)] || (Tm = !0, this.heightSamples[Math.floor(10 * hm)] = !0)
        }
        return Tm
      }
      refresh(mm, Tm, fm, hm, Am, am) {
        let xm = yh.indexOf(mm) > -1,
          wm = Math.abs(Tm - this.lineHeight) > .3 || this.lineWrapping != xm || Math.abs(fm - this.charWidth) > .1;
        if (this.lineWrapping = xm, this.lineHeight = Tm, this.charWidth = fm, this.textHeight = hm, this.lineLength = Am, wm) {
          this.heightSamples = {};
          for (let mm = 0; mm < am.length; mm++) {
            let Tm = am[mm];
            Tm < 0 ? mm++ : this.heightSamples[Math.floor(10 * Tm)] = !0
          }
        }
        return wm
      }
    }
    class lh {
      constructor(mm, Tm) {
        this.from = mm, this.heights = Tm, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class Mh {
      constructor(mm, Tm, fm, hm, Am) {
        this.from = mm, this.length = Tm, this.top = fm, this.height = hm, this._content = Am
      }
      get type() {
        return "number" == typeof this._content ? em.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof Pm ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(mm) {
        let Tm = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(mm._content) ? mm._content : [mm]);
        return new Mh(this.from, this.length + mm.length, this.top, this.height + mm.height, Tm)
      }
    }
    var uh = function(mm) {
      return mm[mm.ByPos = 0] = "ByPos", mm[mm.ByHeight = 1] = "ByHeight", mm[mm.ByPosNoHeight = 2] = "ByPosNoHeight", mm
    }(uh || (uh = {}));
    const Bh = .001;
    class Lh {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = mm, this.height = Tm, this.flags = fm
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(mm) {
        this.flags = (mm ? 2 : 0) | -3 & this.flags
      }
      setHeight(mm) {
        this.height != mm && (Math.abs(this.height - mm) > Bh && (Ch = !0), this.height = mm)
      }
      replace(mm, Tm, fm) {
        return Lh.of(fm)
      }
      decomposeLeft(mm, Tm) {
        Tm.push(this)
      }
      decomposeRight(mm, Tm) {
        Tm.push(this)
      }
      applyChanges(mm, Tm, fm, hm) {
        let Am = this,
          am = fm.doc;
        for (let xm = hm.length - 1; xm >= 0; xm--) {
          let {
            fromA: wm,
            toA: Dm,
            fromB: im,
            toB: Rm
          } = hm[xm], pm = Am.lineAt(wm, uh.ByPosNoHeight, fm.setDoc(Tm), 0, 0), Em = pm.to >= Dm ? pm : Am.lineAt(Dm, uh.ByPosNoHeight, fm, 0, 0);
          for (Rm += Em.to - Dm, Dm = Em.to; xm > 0 && pm.from <= hm[xm - 1].toA;) wm = hm[xm - 1].fromA, im = hm[xm - 1].fromB, xm--, wm < pm.from && (pm = Am.lineAt(wm, uh.ByPosNoHeight, fm, 0, 0));
          im += pm.from - wm, wm = pm.from;
          let om = mA.build(fm.setDoc(am), mm, im, Rm);
          Am = vh(Am, Am.replace(wm, Dm, om))
        }
        return Am.updateHeight(fm, 0)
      }
      static empty() {
        return new dh(0, 0, 0)
      }
      static of (mm) {
        if (1 == mm.length) return mm[0];
        let Tm = 0,
          fm = mm.length,
          hm = 0,
          Am = 0;
        for (;;)
          if (Tm == fm)
            if (hm > 2 * Am) {
              let Am = mm[Tm - 1];
              Am.break ? mm.splice(--Tm, 1, Am.left, null, Am.right) : mm.splice(--Tm, 1, Am.left, Am.right), fm += 1 + Am.break, hm -= Am.size
            } else {
              if (!(Am > 2 * hm)) break;
              {
                let Tm = mm[fm];
                Tm.break ? mm.splice(fm, 1, Tm.left, null, Tm.right) : mm.splice(fm, 1, Tm.left, Tm.right), fm += 2 + Tm.break, Am -= Tm.size
              }
            }
        else if (hm < Am) {
          let fm = mm[Tm++];
          fm && (hm += fm.size)
        } else {
          let Tm = mm[--fm];
          Tm && (Am += Tm.size)
        }
        let am = 0;
        return null == mm[Tm - 1] ? (am = 1, Tm--) : null == mm[Tm] && (am = 1, fm++), new Wh(Lh.of(mm.slice(0, Tm)), am, Lh.of(mm.slice(fm)))
      }
    }

    function vh(mm, Tm) {
      return mm == Tm ? mm : (mm.constructor != Tm.constructor && (Ch = !0), Tm)
    }
    Lh.prototype.size = 1;
    const th = Nm.replace({});
    class Uh extends Lh {
      constructor(mm, Tm, fm) {
        super(mm, Tm), this.deco = fm, this.spaceAbove = 0
      }
      mainBlock(mm, Tm) {
        return new Mh(Tm, this.length, mm + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(mm, Tm, fm, hm) {
        return this.spaceAbove && mm < fm + this.spaceAbove ? new Mh(hm, 0, fm, this.spaceAbove, th) : this.mainBlock(fm, hm)
      }
      lineAt(mm, Tm, fm, hm, Am) {
        let am = this.mainBlock(hm, Am);
        return this.spaceAbove ? this.blockAt(0, fm, hm, Am).join(am) : am
      }
      forEachLine(mm, Tm, fm, hm, Am, am) {
        mm <= Am + this.length && Tm >= Am && am(this.lineAt(0, uh.ByPos, fm, hm, Am))
      }
      setMeasuredHeight(mm) {
        let Tm = mm.heights[mm.index++];
        Tm < 0 ? (this.spaceAbove = -Tm, Tm = mm.heights[mm.index++]) : this.spaceAbove = 0, this.setHeight(Tm)
      }
      updateHeight(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 3 ? arguments[3] : void 0;
        return fm && fm.from <= Tm && fm.more && this.setMeasuredHeight(fm), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class dh extends Uh {
      constructor(mm, Tm, fm) {
        super(mm, Tm, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = fm
      }
      mainBlock(mm, Tm) {
        return new Mh(Tm, this.length, mm + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(mm, Tm, fm) {
        let hm = fm[0];
        return 1 == fm.length && (hm instanceof dh || hm instanceof gh && 4 & hm.flags) && Math.abs(this.length - hm.length) < 10 ? (hm instanceof gh ? hm = new dh(hm.length, this.height, this.spaceAbove) : hm.height = this.height, this.outdated || (hm.outdated = !1), hm) : Lh.of(fm)
      }
      updateHeight(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 ? arguments[3] : void 0;
        return hm && hm.from <= Tm && hm.more ? this.setMeasuredHeight(hm) : (fm || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, mm.heightForLine(this.length - this.collapsed)) + this.breaks * mm.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class gh extends Lh {
      constructor(mm) {
        super(mm, 0)
      }
      heightMetrics(mm, Tm) {
        let fm, hm = mm.doc.lineAt(Tm).number,
          Am = mm.doc.lineAt(Tm + this.length).number,
          am = Am - hm + 1,
          xm = 0;
        if (mm.lineWrapping) {
          let Tm = Math.min(this.height, mm.lineHeight * am);
          fm = Tm / am, this.length > am + 1 && (xm = (this.height - Tm) / (this.length - am - 1))
        } else fm = this.height / am;
        return {
          firstLine: hm,
          lastLine: Am,
          perLine: fm,
          perChar: xm
        }
      }
      blockAt(mm, Tm, fm, hm) {
        let {
          firstLine: Am,
          lastLine: am,
          perLine: xm,
          perChar: wm
        } = this.heightMetrics(Tm, hm);
        if (Tm.lineWrapping) {
          let Am = hm + (mm < Tm.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (mm - fm) / this.height)) * this.length)),
            am = Tm.doc.lineAt(Am),
            Dm = xm + am.length * wm,
            im = Math.max(fm, mm - Dm / 2);
          return new Mh(am.from, am.length, im, Dm, 0)
        } {
          let hm = Math.max(0, Math.min(am - Am, Math.floor((mm - fm) / xm))),
            {
              from: wm,
              length: Dm
            } = Tm.doc.line(Am + hm);
          return new Mh(wm, Dm, fm + xm * hm, xm, 0)
        }
      }
      lineAt(mm, Tm, fm, hm, Am) {
        if (Tm == uh.ByHeight) return this.blockAt(mm, fm, hm, Am);
        if (Tm == uh.ByPosNoHeight) {
          let {
            from: Tm,
            to: hm
          } = fm.doc.lineAt(mm);
          return new Mh(Tm, hm - Tm, 0, 0, 0)
        }
        let {
          firstLine: am,
          perLine: xm,
          perChar: wm
        } = this.heightMetrics(fm, Am), Dm = fm.doc.lineAt(mm), im = xm + Dm.length * wm, Rm = Dm.number - am, pm = hm + xm * Rm + wm * (Dm.from - Am - Rm);
        return new Mh(Dm.from, Dm.length, Math.max(hm, Math.min(pm, hm + this.height - im)), im, 0)
      }
      forEachLine(mm, Tm, fm, hm, Am, am) {
        mm = Math.max(mm, Am), Tm = Math.min(Tm, Am + this.length);
        let {
          firstLine: xm,
          perLine: wm,
          perChar: Dm
        } = this.heightMetrics(fm, Am);
        for (let im = mm, Rm = hm; im <= Tm;) {
          let Tm = fm.doc.lineAt(im);
          if (im == mm) {
            let fm = Tm.number - xm;
            Rm += wm * fm + Dm * (mm - Am - fm)
          }
          let hm = wm + Dm * Tm.length;
          am(new Mh(Tm.from, Tm.length, Rm, hm, 0)), Rm += hm, im = Tm.to + 1
        }
      }
      replace(mm, Tm, fm) {
        let hm = this.length - Tm;
        if (hm > 0) {
          let mm = fm[fm.length - 1];
          mm instanceof gh ? fm[fm.length - 1] = new gh(mm.length + hm) : fm.push(null, new gh(hm - 1))
        }
        if (mm > 0) {
          let Tm = fm[0];
          Tm instanceof gh ? fm[0] = new gh(mm + Tm.length) : fm.unshift(new gh(mm - 1), null)
        }
        return Lh.of(fm)
      }
      decomposeLeft(mm, Tm) {
        Tm.push(new gh(mm - 1), null)
      }
      decomposeRight(mm, Tm) {
        Tm.push(null, new gh(this.length - mm - 1))
      }
      updateHeight(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 ? arguments[3] : void 0,
          Am = Tm + this.length;
        if (hm && hm.from <= Tm + this.length && hm.more) {
          let fm = [],
            am = Math.max(Tm, hm.from),
            xm = -1;
          for (hm.from > Tm && fm.push(new gh(hm.from - Tm - 1).updateHeight(mm, Tm)); am <= Am && hm.more;) {
            let Tm = mm.doc.lineAt(am).length;
            fm.length && fm.push(null);
            let Am = hm.heights[hm.index++],
              wm = 0;
            Am < 0 && (wm = -Am, Am = hm.heights[hm.index++]), -1 == xm ? xm = Am : Math.abs(Am - xm) >= Bh && (xm = -2);
            let Dm = new dh(Tm, Am, wm);
            Dm.outdated = !1, fm.push(Dm), am += Tm + 1
          }
          am <= Am && fm.push(null, new gh(Am - am).updateHeight(mm, am));
          let wm = Lh.of(fm);
          return (xm < 0 || Math.abs(wm.height - this.height) >= Bh || Math.abs(xm - this.heightMetrics(mm, Tm).perLine) >= Bh) && (Ch = !0), vh(this, wm)
        }
        return (fm || this.outdated) && (this.setHeight(mm.heightForGap(Tm, Tm + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class Wh extends Lh {
      constructor(mm, Tm, fm) {
        super(mm.length + Tm + fm.length, mm.height + fm.height, Tm | (mm.outdated || fm.outdated ? 2 : 0)), this.left = mm, this.right = fm, this.size = mm.size + fm.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(mm, Tm, fm, hm) {
        let Am = fm + this.left.height;
        return mm < Am ? this.left.blockAt(mm, Tm, fm, hm) : this.right.blockAt(mm, Tm, Am, hm + this.left.length + this.break)
      }
      lineAt(mm, Tm, fm, hm, Am) {
        let am = hm + this.left.height,
          xm = Am + this.left.length + this.break,
          wm = Tm == uh.ByHeight ? mm < am : mm < xm,
          Dm = wm ? this.left.lineAt(mm, Tm, fm, hm, Am) : this.right.lineAt(mm, Tm, fm, am, xm);
        if (this.break || (wm ? Dm.to < xm : Dm.from > xm)) return Dm;
        let im = Tm == uh.ByPosNoHeight ? uh.ByPosNoHeight : uh.ByPos;
        return wm ? Dm.join(this.right.lineAt(xm, im, fm, am, xm)) : this.left.lineAt(xm, im, fm, hm, Am).join(Dm)
      }
      forEachLine(mm, Tm, fm, hm, Am, am) {
        let xm = hm + this.left.height,
          wm = Am + this.left.length + this.break;
        if (this.break) mm < wm && this.left.forEachLine(mm, Tm, fm, hm, Am, am), Tm >= wm && this.right.forEachLine(mm, Tm, fm, xm, wm, am);
        else {
          let Dm = this.lineAt(wm, uh.ByPos, fm, hm, Am);
          mm < Dm.from && this.left.forEachLine(mm, Dm.from - 1, fm, hm, Am, am), Dm.to >= mm && Dm.from <= Tm && am(Dm), Tm > Dm.to && this.right.forEachLine(Dm.to + 1, Tm, fm, xm, wm, am)
        }
      }
      replace(mm, Tm, fm) {
        let hm = this.left.length + this.break;
        if (Tm < hm) return this.balanced(this.left.replace(mm, Tm, fm), this.right);
        if (mm > this.left.length) return this.balanced(this.left, this.right.replace(mm - hm, Tm - hm, fm));
        let Am = [];
        mm > 0 && this.decomposeLeft(mm, Am);
        let am = Am.length;
        for (let xm of fm) Am.push(xm);
        if (mm > 0 && Fh(Am, am - 1), Tm < this.length) {
          let mm = Am.length;
          this.decomposeRight(Tm, Am), Fh(Am, mm)
        }
        return Lh.of(Am)
      }
      decomposeLeft(mm, Tm) {
        let fm = this.left.length;
        if (mm <= fm) return this.left.decomposeLeft(mm, Tm);
        Tm.push(this.left), this.break && (fm++, mm >= fm && Tm.push(null)), mm > fm && this.right.decomposeLeft(mm - fm, Tm)
      }
      decomposeRight(mm, Tm) {
        let fm = this.left.length,
          hm = fm + this.break;
        if (mm >= hm) return this.right.decomposeRight(mm - hm, Tm);
        mm < fm && this.left.decomposeRight(mm, Tm), this.break && mm < hm && Tm.push(null), Tm.push(this.right)
      }
      balanced(mm, Tm) {
        return mm.size > 2 * Tm.size || Tm.size > 2 * mm.size ? Lh.of(this.break ? [mm, null, Tm] : [mm, Tm]) : (this.left = vh(this.left, mm), this.right = vh(this.right, Tm), this.setHeight(mm.height + Tm.height), this.outdated = mm.outdated || Tm.outdated, this.size = mm.size + Tm.size, this.length = mm.length + this.break+Tm.length, this)
      }
      updateHeight(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: Am,
            right: am
          } = this,
          xm = Tm + Am.length + this.break,
          wm = null;
        return hm && hm.from <= Tm + Am.length && hm.more ? wm = Am = Am.updateHeight(mm, Tm, fm, hm) : Am.updateHeight(mm, Tm, fm), hm && hm.from <= xm + am.length && hm.more ? wm = am = am.updateHeight(mm, xm, fm, hm) : am.updateHeight(mm, xm, fm), wm ? this.balanced(Am, am) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function Fh(mm, Tm) {
      let fm, hm;
      null == mm[Tm] && (fm = mm[Tm - 1]) instanceof gh && (hm = mm[Tm + 1]) instanceof gh && mm.splice(Tm - 1, 3, new gh(fm.length + 1 + hm.length))
    }
    class mA {
      constructor(mm, Tm) {
        this.pos = mm, this.oracle = Tm, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = mm
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(mm, Tm) {
        if (this.lineStart > -1) {
          let mm = Math.min(Tm, this.lineEnd),
            fm = this.nodes[this.nodes.length - 1];
          fm instanceof dh ? fm.length += mm - this.pos : (mm > this.pos || !this.isCovered) && this.nodes.push(new dh(mm - this.pos, -1, 0)), this.writtenTo = mm, Tm > mm && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = Tm
      }
      point(mm, Tm, fm) {
        if (mm < Tm || fm.heightRelevant) {
          let hm = fm.widget ? fm.widget.estimatedHeight : 0,
            Am = fm.widget ? fm.widget.lineBreaks : 0;
          hm < 0 && (hm = this.oracle.lineHeight);
          let am = Tm - mm;
          fm.block ? this.iTm(new Uh(am, hm, fm)) : (am || Am || hm >= 5) && this.addLineDeco(hm, Am, am)
        } else Tm > mm && this.span(mm, Tm);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: mm,
          to: Tm
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = mm, this.lineEnd = Tm, this.writtenTo < mm && ((this.writtenTo < mm - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, mm - 1)), this.nodes.push(null)), this.pos > mm && this.nodes.push(new dh(this.pos - mm, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(mm, Tm) {
        let fm = new gh(Tm - mm);
        return this.oracle.doc.lineAt(mm).to == Tm && (fm.flags |= 4), fm
      }
      ensureLine() {
        this.enterLine();
        let mm = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (mm instanceof dh) return mm;
        let Tm = new dh(0, -1, 0);
        return this.nodes.push(Tm), Tm
      }
      iTm(mm) {
        this.enterLine();
        let Tm = mm.deco;
        Tm && Tm.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(mm), this.writtenTo = this.pos = this.pos + mm.length, Tm && Tm.endSide > 0 && (this.covering = mm)
      }
      addLineDeco(mm, Tm, fm) {
        let hm = this.ensureLine();
        hm.length += fm, hm.collapsed += fm, hm.widgetHeight = Math.max(hm.widgetHeight, mm), hm.breaks += Tm, this.writtenTo = this.pos = this.pos + fm
      }
      finish(mm) {
        let Tm = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || Tm instanceof dh || this.isCovered ? (this.writtenTo < this.pos || null == Tm) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new dh(0, -1, 0));
        let fm = mm;
        for (let hm of this.nodes) hm instanceof dh && hm.updateHeight(this.oracle, fm), fm += hm ? hm.length : 1;
        return this.nodes
      }
      static build(mm, Tm, fm, Am) {
        let am = new mA(fm, mm);
        return hm.C.spans(Tm, fm, Am, am, 0), am.finish(fm)
      }
    }
    class TA {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(mm, Tm, fm, hm) {
        (mm < Tm || fm && fm.heightRelevant || hm && hm.heightRelevant) && ym(mm, Tm, this.changes, 5)
      }
    }

    function fA(mm, Tm) {
      let fm = mm.getBoundingClientRect(),
        hm = mm.ownerDocument,
        Am = hm.defaultView || window,
        am = Math.max(0, fm.left),
        xm = Math.min(Am.innerWidth, fm.right),
        wm = Math.max(0, fm.top),
        Dm = Math.min(Am.innerHeight, fm.bottom);
      for (let im = mm.parentNode; im && im != hm.body;)
        if (1 == im.nodeType) {
          let Tm = im,
            fm = window.getComputedStyle(Tm);
          if ((Tm.scrollHeight > Tm.clientHeight || Tm.scrollWidth > Tm.clientWidth) && "visible" != fm.overflow) {
            let fm = Tm.getBoundingClientRect();
            am = Math.max(am, fm.left), xm = Math.min(xm, fm.right), wm = Math.max(wm, fm.top), Dm = Math.min(im == mm.parentNode ? Am.innerHeight : Dm, fm.bottom)
          }
          im = "absolute" == fm.position || "fixed" == fm.position ? Tm.offsetParent : Tm.parentNode
        } else {
          if (11 != im.nodeType) break;
          im = im.host
        } return {
        left: am - fm.left,
        right: Math.max(am, xm) - fm.left,
        top: wm - (fm.top + Tm),
        bottom: Math.max(wm, Dm) - (fm.top + Tm)
      }
    }

    function hA(mm, Tm) {
      let fm = mm.getBoundingClientRect();
      return {
        left: 0,
        right: fm.right - fm.left,
        top: Tm,
        bottom: fm.bottom - (fm.top + Tm)
      }
    }
    class AA {
      constructor(mm, Tm, fm, hm) {
        this.from = mm, this.to = Tm, this.size = fm, this.displaySize = hm
      }
      static same(mm, Tm) {
        if (mm.length != Tm.length) return !1;
        for (let fm = 0; fm < mm.length; fm++) {
          let hm = mm[fm],
            Am = Tm[fm];
          if (hm.from != Am.from || hm.to != Am.to || hm.size != Am.size) return !1
        }
        return !0
      }
      draw(mm, Tm) {
        return Nm.replace({
          widget: new aA(this.displaySize * (Tm ? mm.scaleY : mm.scaleX), Tm)
        }).range(this.from, this.to)
      }
    }
    class aA extends Sm {
      constructor(mm, Tm) {
        super(), this.size = mm, this.vertical = Tm
      }
      eq(mm) {
        return mm.size == this.size && mm.vertical == this.vertical
      }
      toDOM() {
        let mm = document.createElement("div");
        return this.vertical ? mm.style.height = this.size + "px" : (mm.style.width = this.size + "px", mm.style.height = "2px", mm.style.display = "inline-block"), mm
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class xA {
      constructor(mm, Tm) {
        this.view = mm, this.state = Tm, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = RA, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = RT.LTR, this.U1 = [], this.mustEnforceCursorAssoc = !1;
        let fm = Tm.facet(mf).some((mm => "function" != typeof mm && "cm-lineWrapping" == mm.class));
        this.heightOracle = new sh(fm), this.stateDeco = pA(Tm), this.heightMap = Lh.empty().applyChanges(this.stateDeco, hm.O.empty, this.heightOracle.setDoc(Tm.doc), [new pf(0, 0, 0, Tm.doc.length)]);
        for (let hm = 0; hm < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); hm++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Nm.set(this.lineGaps.map((mm => mm.draw(this, !1)))), this.scrollParent = mm.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let mm = [this.viewport],
          {
            main: Tm
          } = this.state.selection;
        for (let fm = 0; fm <= 1; fm++) {
          let hm = fm ? Tm.head : Tm.anchor;
          if (!mm.some((mm => {
              let {
                from: Tm,
                to: fm
              } = mm;
              return hm >= Tm && hm <= fm
            }))) {
            let {
              from: Tm,
              to: fm
            } = this.lineBlockAt(hm);
            mm.push(new wA(Tm, fm))
          }
        }
        return this.viewports = mm.sort(((mm, Tm) => mm.from - Tm.from)), this.updateScaler()
      }
      updateScaler() {
        let mm = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? RA : new EA(this.heightOracle, this.heightMap, this.viewports), mm.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (mm => {
          this.viewportLines.push(oA(mm, this.scaler))
        }))
      }
      update(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = mm.state;
        let fm = this.stateDeco;
        this.stateDeco = pA(this.state);
        let Am = mm.changedRanges,
          am = pf.extendWithRanges(Am, function(mm, Tm, fm) {
            let Am = new TA;
            return hm.C.compare(mm, Tm, fm, Am, 0), Am.changes
          }(fm, this.stateDeco, mm ? mm.changes : hm.ChangeSet.empty(this.state.doc.length))),
          xm = this.heightMap.height,
          wm = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        rh(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, mm.startState.doc, this.heightOracle.setDoc(this.state.doc), am), (this.heightMap.height != xm || Ch) && (mm.flags |= 2), wm ? (this.scrollAnchorPos = mm.changes.mapPos(wm.from, -1), this.scrollAnchorHeight = wm.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = xm);
        let Dm = am.length ? this.mapViewport(this.viewport, mm.changes) : this.viewport;
        (Tm && (Tm.range.head < Dm.from || Tm.range.head > Dm.to) || !this.viewportIsAppropriate(Dm)) && (Dm = this.getViewport(0, Tm));
        let im = Dm.from != this.viewport.from || Dm.to != this.viewport.to;
        this.viewport = Dm, mm.flags |= this.updateForViewport(), (im || !mm.changes.empty || 2 & mm.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, mm.changes))), mm.flags |= this.computeVisibleRanges(mm.changes), Tm && (this.scrollTarget = Tm), !this.mustEnforceCursorAssoc && (mm.selectionSet || mm.focusChanged) && mm.view.lineWrapping && mm.state.selection.main.empty && mm.state.selection.main.assoc && !mm.state.facet(lT) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: mm
        } = this, Tm = mm.contentDOM, fm = window.getComputedStyle(Tm), Am = this.heightOracle, am = fm.whiteSpace;
        this.defaultTextDirection = "rtl" == fm.direction ? RT.RTL : RT.LTR;
        let xm = this.heightOracle.mustRefreshForWrapping(am) || "refresh" === this.mustMeasureContent,
          wm = Tm.getBoundingClientRect(),
          Dm = xm || this.mustMeasureContent || this.contentDOMHeight != wm.height;
        this.contentDOMHeight = wm.height, this.mustMeasureContent = !1;
        let im = 0,
          Rm = 0;
        if (wm.width && wm.height) {
          let {
            scaleX: mm,
            scaleY: fm
          } = Wm(Tm, wm);
          (mm > .005 && Math.abs(this.scaleX - mm) > .005 || fm > .005 && Math.abs(this.scaleY - fm) > .005) && (this.scaleX = mm, this.scaleY = fm, im |= 16, xm = Dm = !0)
        }
        let pm = (parseInt(fm.paddingTop) || 0) * this.scaleY,
          Em = (parseInt(fm.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == pm && this.paddingBottom == Em || (this.paddingTop = pm, this.paddingBottom = Em, im |= 18), this.editorWidth != mm.scrollDOM.clientWidth && (Am.lineWrapping && (Dm = !0), this.editorWidth = mm.scrollDOM.clientWidth, im |= 16);
        let om = Fm(this.view.contentDOM, !1).y;
        om != this.scrollParent && (this.scrollParent = om, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let Om = this.getScrollOffset();
        this.scrollOffset != Om && (this.scrollAnchorHeight = -1, this.scrollOffset = Om), this.scrolledToBottom = xT(this.scrollParent || mm.win);
        let Ym = (this.printing ? hA : fA)(Tm, this.paddingTop),
          qm = Ym.top - this.pixelViewport.top,
          jm = Ym.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Ym;
        let Vm = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (Vm != this.inView && (this.inView = Vm, Vm && (Dm = !0)), !this.inView && !this.scrollTarget && ! function(mm) {
            let Tm = mm.getBoundingClientRect(),
              fm = mm.ownerDocument.defaultView || window;
            return Tm.left < fm.innerWidth && Tm.right > 0 && Tm.top < fm.innerHeight && Tm.bottom > 0
          }(mm.dom)) return 0;
        let Im = wm.width;
        if (this.contentDOMWidth == Im && this.editorHeight == mm.scrollDOM.clientHeight || (this.contentDOMWidth = wm.width, this.editorHeight = mm.scrollDOM.clientHeight, im |= 16), Dm) {
          let Tm = mm.docView.measureVisibleLineHeights(this.viewport);
          if (Am.mustRefreshForHeights(Tm) && (xm = !0), xm || Am.lineWrapping && Math.abs(Im - this.contentDOMWidth) > Am.charWidth) {
            let {
              lineHeight: fm,
              charWidth: hm,
              textHeight: wm
            } = mm.docView.measureTextSize();
            xm = fm > 0 && Am.refresh(am, fm, hm, wm, Math.max(5, Im / hm), Tm), xm && (mm.docView.minWidth = 0, im |= 16)
          }
          qm > 0 && jm > 0 ? Rm = Math.max(qm, jm) : qm < 0 && jm < 0 && (Rm = Math.min(qm, jm)), rh();
          for (let fm of this.viewports) {
            let am = fm.from == this.viewport.from ? Tm : mm.docView.measureVisibleLineHeights(fm);
            this.heightMap = (xm ? Lh.empty().applyChanges(this.stateDeco, hm.O.empty, this.heightOracle, [new pf(0, 0, 0, mm.state.doc.length)]) : this.heightMap).updateHeight(Am, 0, xm, new lh(fm.from, am))
          }
          Ch && (im |= 2)
        }
        let Km = !this.viewportIsAppropriate(this.viewport, Rm) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return Km && (2 & im && (im |= this.updateScaler()), this.viewport = this.getViewport(Rm, this.scrollTarget), im |= this.updateForViewport()), (2 & im || Km) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(xm ? [] : this.lineGaps, mm)), im |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, mm.docView.enforceCursorAssoc()), im
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(mm, Tm) {
        let fm = .5 - Math.max(-.5, Math.min(.5, mm / 1e3 / 2)),
          hm = this.heightMap,
          Am = this.heightOracle,
          {
            visibleTop: am,
            visibleBottom: xm
          } = this,
          wm = new wA(hm.lineAt(am - 1e3 * fm, uh.ByHeight, Am, 0, 0).from, hm.lineAt(xm + 1e3 * (1 - fm), uh.ByHeight, Am, 0, 0).to);
        if (Tm) {
          let {
            head: mm
          } = Tm.range;
          if (mm < wm.from || mm > wm.to) {
            let fm, am = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              xm = hm.lineAt(mm, uh.ByPos, Am, 0, 0);
            fm = "center" == Tm.y ? (xm.top + xm.bottom) / 2 - am / 2 : "start" == Tm.y || "nearest" == Tm.y && mm < wm.from ? xm.top : xm.bottom - am, wm = new wA(hm.lineAt(fm - 500, uh.ByHeight, Am, 0, 0).from, hm.lineAt(fm + am + 500, uh.ByHeight, Am, 0, 0).to)
          }
        }
        return wm
      }
      mapViewport(mm, Tm) {
        let fm = Tm.mapPos(mm.from, -1),
          hm = Tm.mapPos(mm.to, 1);
        return new wA(this.heightMap.lineAt(fm, uh.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(hm, uh.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(mm) {
        let {
          from: Tm,
          to: fm
        } = mm, hm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: Am
        } = this.heightMap.lineAt(Tm, uh.ByPos, this.heightOracle, 0, 0), {
          bottom: am
        } = this.heightMap.lineAt(fm, uh.ByPos, this.heightOracle, 0, 0), {
          visibleTop: xm,
          visibleBottom: wm
        } = this;
        return (0 == Tm || Am <= xm - Math.max(10, Math.min(-hm, 250))) && (fm == this.state.doc.length || am >= wm + Math.max(10, Math.min(hm, 250))) && Am > xm - 2e3 && am < wm + 2e3
      }
      mapLineGaps(mm, Tm) {
        if (!mm.length || Tm.empty) return mm;
        let fm = [];
        for (let hm of mm) Tm.touchesRange(hm.from, hm.to) || fm.push(new AA(Tm.mapPos(hm.from), Tm.mapPos(hm.to), hm.size, hm.displaySize));
        return fm
      }
      ensureLineGaps(mm, Tm) {
        let fm = this.heightOracle.lineWrapping,
          Am = fm ? 1e4 : 2e3,
          am = Am >> 1,
          xm = Am << 1;
        if (this.defaultTextDirection != RT.LTR && !fm) return [];
        let wm = [],
          Dm = (Am, xm, im, Rm) => {
            if (xm - Am < am) return;
            let pm = this.state.selection.main,
              Em = [pm.from];
            pm.empty || Em.push(pm.to);
            for (let mm of Em)
              if (mm > Am && mm < xm) return Dm(Am, mm - 10, im, Rm), void Dm(mm + 10, xm, im, Rm);
            let om = function(mm, Tm) {
              for (let fm of mm)
                if (Tm(fm)) return fm;
              return
            }(mm, (mm => mm.from >= im.from && mm.to <= im.to && Math.abs(mm.from - Am) < am && Math.abs(mm.to - xm) < am && !Em.some((Tm => mm.from < Tm && mm.to > Tm))));
            if (!om) {
              if (xm < im.to && Tm && fm && Tm.U1.some((mm => mm.from <= xm && mm.to >= xm))) {
                let mm = Tm.moveToLineBoundary(hm.o.cursor(xm), !1, !0).head;
                mm > Am && (xm = mm)
              }
              let mm = this.gapSize(im, Am, xm, Rm);
              om = new AA(Am, xm, mm, fm || mm < 2e6 ? mm : 2e6)
            }
            wm.push(om)
          },
          im = Tm => {
            if (Tm.length < xm || Tm.type != em.Text) return;
            let am = function(mm, Tm, fm) {
              let Am = [],
                am = mm,
                xm = 0;
              hm.C.spans(fm, mm, Tm, {
                span() {},
                point(mm, Tm) {
                  mm > am && (Am.push({
                    from: am,
                    to: mm
                  }), xm += mm - am), am = Tm
                }
              }, 20), am < Tm && (Am.push({
                from: am,
                to: Tm
              }), xm += Tm - am);
              return {
                total: xm,
                mo: Am
              }
            }(Tm.from, Tm.to, this.stateDeco);
            if (am.total < xm) return;
            let wm, im, Rm = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (fm) {
              let mm, fm, hm = Am / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != Rm) {
                let Am = iA(am, Rm),
                  xm = ((this.visibleBottom - this.visibleTop) / 2 + hm) / Tm.height;
                mm = Am - xm, fm = Am + xm
              } else mm = (this.visibleTop - Tm.top - hm) / Tm.height, fm = (this.visibleBottom - Tm.top + hm) / Tm.height;
              wm = DA(am, mm), im = DA(am, fm)
            } else {
              let fm = am.total * this.heightOracle.charWidth,
                hm = Am * this.heightOracle.charWidth,
                xm = 0;
              if (fm > 2e6)
                for (let Am of mm) Am.from >= Tm.from && Am.from < Tm.to && Am.size != Am.displaySize && Am.from * this.heightOracle.charWidth + xm < this.pixelViewport.left && (xm = Am.size - Am.displaySize);
              let Dm, pm, Em = this.pixelViewport.left + xm,
                om = this.pixelViewport.right + xm;
              if (null != Rm) {
                let mm = iA(am, Rm),
                  Tm = ((om - Em) / 2 + hm) / fm;
                Dm = mm - Tm, pm = mm + Tm
              } else Dm = (Em - hm) / fm, pm = (om + hm) / fm;
              wm = DA(am, Dm), im = DA(am, pm)
            }
            wm > Tm.from && Dm(Tm.from, wm, Tm, am), im < Tm.to && Dm(im, Tm.to, Tm, am)
          };
        for (let hm of this.viewportLines) Array.isArray(hm.type) ? hm.type.forEach(im) : im(hm);
        return wm
      }
      gapSize(mm, Tm, fm, hm) {
        let Am = iA(hm, fm) - iA(hm, Tm);
        return this.heightOracle.lineWrapping ? mm.height * Am : hm.total * this.heightOracle.charWidth * Am
      }
      updateLineGaps(mm) {
        AA.same(mm, this.lineGaps) || (this.lineGaps = mm, this.lineGapDeco = Nm.set(mm.map((mm => mm.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(mm) {
        let Tm = this.stateDeco;
        this.lineGaps.length && (Tm = Tm.concat(this.lineGapDeco));
        let fm = [];
        hm.C.spans(Tm, this.viewport.from, this.viewport.to, {
          span(mm, Tm) {
            fm.push({
              from: mm,
              to: Tm
            })
          },
          point() {}
        }, 20);
        let Am = 0;
        if (fm.length != this.U1.length) Am = 12;
        else
          for (let hm = 0; hm < fm.length && !(8 & Am); hm++) {
            let Tm = this.U1[hm],
              am = fm[hm];
            Tm.from == am.from && Tm.to == am.to || (Am |= 4, mm && mm.mapPos(Tm.from, -1) == am.from && mm.mapPos(Tm.to, 1) == am.to || (Am |= 8))
          }
        return this.U1 = fm, Am
      }
      lineBlockAt(mm) {
        return mm >= this.viewport.from && mm <= this.viewport.to && this.viewportLines.find((Tm => Tm.from <= mm && Tm.to >= mm)) || oA(this.heightMap.lineAt(mm, uh.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(mm) {
        return mm >= this.viewportLines[0].top && mm <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((Tm => Tm.top <= mm && Tm.bottom >= mm)) || oA(this.heightMap.lineAt(this.scaler.fromDOM(mm), uh.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(mm) {
        let Tm = this.lineBlockAtHeight(mm + 8);
        return Tm.from >= this.viewport.from || this.viewportLines[0].top - mm > 200 ? Tm : this.viewportLines[0]
      }
      elementAtHeight(mm) {
        return oA(this.heightMap.blockAt(this.scaler.fromDOM(mm), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class wA {
      constructor(mm, Tm) {
        this.from = mm, this.to = Tm
      }
    }

    function DA(mm, Tm) {
      let {
        total: fm,
        mo: hm
      } = mm;
      if (Tm <= 0) return hm[0].from;
      if (Tm >= 1) return hm[hm.length - 1].to;
      let Am = Math.floor(fm * Tm);
      for (let am = 0;; am++) {
        let {
          from: mm,
          to: Tm
        } = hm[am], fm = Tm - mm;
        if (Am <= fm) return mm + Am;
        Am -= fm
      }
    }

    function iA(mm, Tm) {
      let fm = 0;
      for (let {
          from: hm,
          to: Am
        }
        of mm.mo) {
        if (Tm <= Am) {
          fm += Tm - hm;
          break
        }
        fm += Am - hm
      }
      return fm / mm.total
    }
    const RA = {
      toDOM: mm => mm,
      fromDOM: mm => mm,
      scale: 1,
      eq(mm) {
        return mm == this
      }
    };

    function pA(mm) {
      let Tm = mm.facet(Tf).filter((mm => "function" != typeof mm)),
        fm = mm.facet(hf).filter((mm => "function" != typeof mm));
      return fm.length && Tm.push(hm.C.join(fm)), Tm
    }
    class EA {
      constructor(mm, Tm, fm) {
        let hm = 0,
          Am = 0,
          am = 0;
        this.viewports = fm.map((fm => {
          let {
            from: Am,
            to: am
          } = fm, xm = Tm.lineAt(Am, uh.ByPos, mm, 0, 0).top, wm = Tm.lineAt(am, uh.ByPos, mm, 0, 0).bottom;
          return hm += wm - xm, {
            from: Am,
            to: am,
            top: xm,
            bottom: wm,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - hm) / (Tm.height - hm);
        for (let xm of this.viewports) xm.domTop = am + (xm.top - Am) * this.scale, am = xm.domBottom = xm.domTop + (xm.bottom - xm.top), Am = xm.bottom
      }
      toDOM(mm) {
        for (let Tm = 0, fm = 0, hm = 0;; Tm++) {
          let Am = Tm < this.viewports.length ? this.viewports[Tm] : null;
          if (!Am || mm < Am.top) return hm + (mm - fm) * this.scale;
          if (mm <= Am.bottom) return Am.domTop + (mm - Am.top);
          fm = Am.bottom, hm = Am.domBottom
        }
      }
      fromDOM(mm) {
        for (let Tm = 0, fm = 0, hm = 0;; Tm++) {
          let Am = Tm < this.viewports.length ? this.viewports[Tm] : null;
          if (!Am || mm < Am.domTop) return fm + (mm - hm) / this.scale;
          if (mm <= Am.domBottom) return Am.top + (mm - Am.domTop);
          fm = Am.bottom, hm = Am.domBottom
        }
      }
      eq(mm) {
        return mm instanceof EA && (this.scale == mm.scale && this.viewports.length == mm.viewports.length && this.viewports.every(((Tm, fm) => Tm.from == mm.viewports[fm].from && Tm.to == mm.viewports[fm].to)))
      }
    }

    function oA(mm, Tm) {
      if (1 == Tm.scale) return mm;
      let fm = Tm.toDOM(mm.top),
        hm = Tm.toDOM(mm.bottom);
      return new Mh(mm.from, mm.length, fm, hm - fm, Array.isArray(mm._content) ? mm._content.map((mm => oA(mm, Tm))) : mm._content)
    }
    const OA = hm.s.define({
        combine: mm => mm.join(" ")
      }),
      YA = hm.s.define({
        combine: mm => mm.indexOf(!0) > -1
      }),
      qA = Am.e.newName(),
      jA = Am.e.newName(),
      VA = Am.e.newName(),
      IA = {
        "&light": "." + jA,
        "&dark": "." + VA
      };

    function KA(mm, Tm, fm) {
      return new Am.e(Tm, {
        finish: Tm => /&/.test(Tm) ? Tm.replace(/&\w*/, (Tm => {
          if ("&" == Tm) return mm;
          if (!fm || !fm[Tm]) throw new RangeError(`Unsupported selector: ${Tm}`);
          return fm[Tm]
        })) : mm + " " + Tm
      })
    }
    const QA = KA("." + qA, {
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
      }, IA),
      nA = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      JA = Jm.ie && Jm.ie_version <= 11;
    class cA {
      constructor(mm) {
        this.view = mm, this.active = !1, this.editContext = null, this.selectionRange = new mT, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = mm.contentDOM, this.observer = new MutationObserver((Tm => {
          for (let mm of Tm) this.queue.push(mm);
          (Jm.ie && Jm.ie_version <= 11 || Jm.ios && mm.composing) && Tm.some((mm => "childList" == mm.type && mm.removedNodes.length || "characterData" == mm.type && mm.oldValue.length > mm.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !Jm.android || !1 === mm.constructor.EDIT_CONTEXT || Jm.chrome && Jm.chrome_version < 126 || (this.editContext = new kA(mm), mm.state.facet(tT) && (mm.contentDOM.editContext = this.editContext.editContext)), JA && (this.onCharData = mm => {
          this.queue.push({
            target: mm.target,
            type: "characterData",
            oldValue: mm.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.zV = this.zV.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var mm;
          (null === (mm = this.view.docView) || void 0 === mm ? void 0 : mm.lastUpdate) < Date.now() - 75 && this.zV()
        })), this.resizeScroll.observe(mm.scrollDOM)), this.addWindowListeners(this.win = mm.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((mm => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), mm.length > 0 && mm[mm.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((mm => {
          mm.length > 0 && mm[mm.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(mm) {
        this.view.inputState.runHandlers("scroll", mm), this.intersecting && this.view.measure()
      }
      onScroll(mm) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(mm)
      }
      zV() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(mm) {
        ("change" != mm.type && mm.type || mm.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(mm) {
        if (this.gapIntersection && (mm.length != this.gaps.length || this.gaps.some(((Tm, fm) => Tm != mm[fm])))) {
          this.gapIntersection.disconnect();
          for (let Tm of mm) this.gapIntersection.observe(Tm);
          this.gaps = mm
        }
      }
      onSelectionChange(mm) {
        let Tm = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: fm
        } = this, hm = this.selectionRange;
        if (fm.state.facet(tT) ? fm.root.activeElement != this.dom : !lm(this.dom, hm)) return;
        let Am = hm.anchorNode && fm.docView.tile.nearest(hm.anchorNode);
        Am && Am.isWidget() && Am.widget.ignoreEvent(mm) ? Tm || (this.selectionChanged = !1) : (Jm.ie && Jm.ie_version <= 11 || Jm.android && Jm.chrome) && !fm.state.selection.main.empty && hm.focusNode && um(hm.focusNode, hm.focusOffset, hm.anchorNode, hm.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: mm
        } = this, Tm = rm(mm.root);
        if (!Tm) return !1;
        let fm = Jm.safari && 11 == mm.root.nodeType && mm.root.activeElement == this.dom && function(mm, Tm) {
          if (Tm.getComposedRanges) {
            let fm = Tm.getComposedRanges(mm.root)[0];
            if (fm) return ZA(mm, fm)
          }
          let fm = null;

          function hm(mm) {
            mm.preventDefault(), mm.stopImmediatePropagation(), fm = mm.getTargetRanges()[0]
          }
          return mm.contentDOM.addEventListener("beforeinput", hm, !0), mm.dom.ownerDocument.execCommand("indent"), mm.contentDOM.removeEventListener("beforeinput", hm, !0), fm ? ZA(mm, fm) : null
        }(this.view, Tm) || Tm;
        if (!fm || this.selectionRange.eq(fm)) return !1;
        let hm = lm(this.dom, fm);
        return hm && !this.selectionChanged && mm.inputState.lastFocusTime > Date.now() - 200 && mm.inputState.lastTouchTime < Date.now() - 300 && function(mm, Tm) {
          let fm = Tm.focusNode,
            hm = Tm.focusOffset;
          if (!fm || Tm.anchorNode != fm || Tm.anchorOffset != hm) return !1;
          for (hm = Math.min(hm, Um(fm));;)
            if (hm) {
              if (1 != fm.nodeType) return !1;
              let mm = fm.childNodes[hm - 1];
              "false" == mm.contentEditable ? hm-- : (fm = mm, hm = Um(fm))
            } else {
              if (fm == mm) return !0;
              hm = Bm(fm), fm = fm.parentNode
            }
        }(this.dom, fm) ? (this.view.inputState.lastFocusTime = 0, mm.docView.updateSelection(), !1) : (this.selectionRange.setRange(fm), hm && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(mm, Tm) {
        this.selectionRange.set(mm.node, mm.offset, Tm.node, Tm.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let mm = 0,
          Tm = null;
        for (let fm = this.dom; fm;)
          if (1 == fm.nodeType) !Tm && mm < this.scrollTargets.length && this.scrollTargets[mm] == fm ? mm++ : Tm || (Tm = this.scrollTargets.slice(0, mm)), Tm && Tm.push(fm), fm = fm.assignedSlot || fm.parentNode;
          else {
            if (11 != fm.nodeType) break;
            fm = fm.host
          } if (mm < this.scrollTargets.length && !Tm && (Tm = this.scrollTargets.slice(0, mm)), Tm) {
          for (let mm of this.scrollTargets) mm.removeEventListener("scroll", this.onScroll);
          for (let mm of this.scrollTargets = Tm) mm.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(mm) {
        if (!this.active) return mm();
        try {
          return this.stop(), mm()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, nA), JA && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), JA && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(mm, Tm) {
        var fm;
        if (!this.delayedAndroidKey) {
          let mm = () => {
            let mm = this.delayedAndroidKey;
            if (mm) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = mm.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && mm.force && aT(this.dom, mm.key, mm.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(mm)
        }
        this.delayedAndroidKey && "Enter" != mm || (this.delayedAndroidKey = {
          key: mm,
          keyCode: Tm,
          force: this.lastChange < Date.now() - 50 || !!(null === (fm = this.delayedAndroidKey) || void 0 === fm ? void 0 : fm.force)
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
        for (let mm of this.observer.takeRecords()) this.queue.push(mm);
        return this.queue
      }
      processRecords() {
        let mm = this.pendingRecords();
        mm.length && (this.queue = []);
        let Tm = -1,
          fm = -1,
          hm = !1;
        for (let Am of mm) {
          let mm = this.readMutation(Am);
          mm && (mm.typeOver && (hm = !0), -1 == Tm ? ({
            from: Tm,
            to: fm
          } = mm) : (Tm = Math.min(mm.from, Tm), fm = Math.max(mm.to, fm)))
        }
        return {
          from: Tm,
          to: fm,
          typeOver: hm
        }
      }
      readChange() {
        let {
          from: mm,
          to: Tm,
          typeOver: fm
        } = this.processRecords(), hm = this.selectionChanged && lm(this.dom, this.selectionRange);
        if (mm < 0 && !hm) return null;
        mm > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let Am = new ah(this.view, mm, Tm, fm);
        return this.view.docView.domChanged = {
          newSel: Am.newSel ? Am.newSel.main : null
        }, Am
      }
      flush() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        mm && this.readSelectionRange();
        let Tm = this.readChange();
        if (!Tm) return this.view.requestMeasure(), !1;
        let fm = this.view.state,
          hm = wh(this.view, Tm);
        return this.view.state == fm && (Tm.domChanged || Tm.newSel && !Rh(this.view.state.selection, Tm.newSel.main)) && this.view.update([]), hm
      }
      readMutation(mm) {
        let Tm = this.view.docView.tile.nearest(mm.target);
        if (!Tm || Tm.isWidget()) return null;
        if (Tm.markDirty("attributes" == mm.type), "childList" == mm.type) {
          let fm = zA(Tm, mm.previousSibling || mm.target.previousSibling, -1),
            hm = zA(Tm, mm.nextSibling || mm.target.nextSibling, 1);
          return {
            from: fm ? Tm.posAfter(fm) : Tm.posAtStart,
            to: hm ? Tm.posBefore(hm) : Tm.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == mm.type ? {
          from: Tm.posAtStart,
          to: Tm.posAtEnd,
          typeOver: mm.target.nodeValue == mm.oldValue
        } : null
      }
      setWindow(mm) {
        mm != this.win && (this.removeWindowListeners(this.win), this.win = mm, this.addWindowListeners(this.win))
      }
      addWindowListeners(mm) {
        mm.addEventListener("resize", this.zV), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : mm.addEventListener("beforeprint", this.onPrint), mm.addEventListener("scroll", this.onScroll), mm.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(mm) {
        mm.removeEventListener("scroll", this.onScroll), mm.removeEventListener("resize", this.zV), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : mm.removeEventListener("beforeprint", this.onPrint), mm.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(mm) {
        this.editContext && (this.editContext.update(mm), mm.startState.facet(tT) != mm.state.facet(tT) && (mm.view.contentDOM.editContext = mm.state.facet(tT) ? this.editContext.editContext : null))
      }
      destroy() {
        var mm, Tm, fm;
        this.stop(), null === (mm = this.intersection) || void 0 === mm || mm.disconnect(), null === (Tm = this.gapIntersection) || void 0 === Tm || Tm.disconnect(), null === (fm = this.resizeScroll) || void 0 === fm || fm.disconnect();
        for (let hm of this.scrollTargets) hm.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function zA(mm, Tm, fm) {
      for (; Tm;) {
        let hm = Of.get(Tm);
        if (hm && hm.parent == mm) return hm;
        let Am = Tm.parentNode;
        Tm = Am != mm.dom ? Am : fm > 0 ? Tm.nextSibling : Tm.previousSibling
      }
      return null
    }

    function ZA(mm, Tm) {
      let fm = Tm.startContainer,
        hm = Tm.startOffset,
        Am = Tm.endContainer,
        am = Tm.endOffset,
        xm = mm.docView.domAtPos(mm.state.selection.main.anchor, 1);
      return um(xm.node, xm.offset, Am, am) && ([fm, hm, Am, am] = [Am, am, fm, hm]), {
        anchorNode: fm,
        anchorOffset: hm,
        focusNode: Am,
        focusOffset: am
      }
    }
    class kA {
      constructor(mm) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(mm.state);
        let Tm = this.editContext = new window.EditContext({
          text: mm.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, mm.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(mm.state.selection.main.head)
        });
        this.handlers.textupdate = fm => {
          let Am = mm.state.selection.main,
            {
              anchor: am,
              head: xm
            } = Am,
            wm = this.toEditorPos(fm.updateRangeStart),
            Dm = this.toEditorPos(fm.updateRangeEnd);
          mm.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: fm.updateRangeStart,
            editorBase: wm,
            drifted: !1
          });
          let im = Dm - wm > fm.text.length;
          wm == this.from && am < this.from ? wm = am : Dm == this.to && am > this.to && (Dm = am);
          let Rm = ih(mm.state.sliceDoc(wm, Dm), fm.text, (im ? Am.from : Am.to) - wm, im ? "end" : null);
          if (!Rm) {
            let Tm = hm.o.single(this.toEditorPos(fm.selectionStart), this.toEditorPos(fm.selectionEnd));
            return void(Rh(Tm, Am) || mm.dispatch({
              selection: Tm,
              userEvent: "select"
            }))
          }
          let pm = {
            from: Rm.from + wm,
            to: Rm.toA + wm,
            insert: hm.O.of(fm.text.slice(Rm.from, Rm.toB).split("\n"))
          };
          if ((Jm.mac || Jm.android) && pm.from == xm - 1 && /^\. ?$/.test(fm.text) && "off" == mm.contentDOM.getAttribute("autocorrect") && (pm = {
              from: wm,
              to: Dm,
              insert: hm.O.of([fm.text.replace(".", " ")])
            }), this.pendingContextChange = pm, !mm.state.readOnly) {
            let Tm = this.to - this.from + (pm.to - pm.from + pm.insert.length);
            Dh(mm, pm, hm.o.single(this.toEditorPos(fm.selectionStart, Tm), this.toEditorPos(fm.selectionEnd, Tm)))
          }
          this.pendingContextChange && (this.revertPending(mm.state), this.setSelection(mm.state)), pm.from < pm.to && !pm.insert.length && mm.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(Tm.text.slice(Math.max(0, fm.updateRangeStart - 1), Math.min(Tm.text.length, fm.updateRangeStart + 1))) && this.handlers.compositionend(fm)
        }, this.handlers.characterboundsupdate = fm => {
          let hm = [],
            Am = null;
          for (let Tm = this.toEditorPos(fm.rangeStart), am = this.toEditorPos(fm.rangeEnd); Tm < am; Tm++) {
            let fm = mm.coordsForChar(Tm);
            Am = fm && new DOMRect(fm.left, fm.top, fm.right - fm.left, fm.bottom - fm.top) || Am || new DOMRect, hm.push(Am)
          }
          Tm.updateCharacterBounds(fm.rangeStart, hm)
        }, this.handlers.textformatupdate = Tm => {
          let fm = [];
          for (let mm of Tm.getTextFormats()) {
            let Tm = mm.underlineStyle,
              hm = mm.underlineThickness;
            if (!/none/i.test(Tm) && !/none/i.test(hm)) {
              let Am = this.toEditorPos(mm.rangeStart),
                am = this.toEditorPos(mm.rangeEnd);
              if (Am < am) {
                let mm = `text-decoration: underline ${/^[a-z]/.test(Tm)?Tm+" ":"Dashed"==Tm?"dashed ":"Squiggle"==Tm?"wavy ":""}${/thin/i.test(hm)?1:2}px`;
                fm.push(Nm.mark({
                  attributes: {
                    style: mm
                  }
                }).range(Am, am))
              }
            }
          }
          mm.dispatch({
            effects: LT.of(Nm.set(fm))
          })
        }, this.handlers.compositionstart = () => {
          mm.inputState.composing < 0 && (mm.inputState.composing = 0, mm.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (mm.inputState.composing = -1, mm.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: Tm
            } = this.composing;
            this.composing = null, Tm && this.reset(mm.state)
          }
        };
        for (let fm in this.handlers) Tm.addEventListener(fm, this.handlers[fm]);
        this.measureReq = {
          read: mm => {
            this.editContext.updateControlBounds(mm.contentDOM.getBoundingClientRect());
            let Tm = rm(mm.root);
            Tm && Tm.rangeCount && this.editContext.updateSelectionBounds(Tm.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(mm) {
        let Tm = 0,
          fm = !1,
          hm = this.pendingContextChange;
        return mm.changes.iterChanges(((Am, am, xm, wm, Dm) => {
          if (fm) return;
          let im = Dm.length - (am - Am);
          if (hm && am >= hm.to) {
            if (hm.from == Am && hm.to == am && hm.insert.eq(Dm)) return hm = this.pendingContextChange = null, Tm += im, void(this.to += im);
            hm = null, this.revertPending(mm.state)
          }
          if (Am += Tm, (am += Tm) <= this.from) this.from += im, this.to += im;
          else if (Am < this.to) {
            if (Am < this.from || am > this.to || this.to - this.from + Dm.length > 3e4) return void(fm = !0);
            this.editContext.updateText(this.toContextPos(Am), this.toContextPos(am), Dm.toString()), this.to += im
          }
          Tm += im
        })), hm && !fm && this.revertPending(mm.state), !fm
      }
      update(mm) {
        let Tm = this.pendingContextChange,
          fm = mm.startState.selection.main;
        this.composing && (this.composing.drifted || !mm.changes.touchesRange(fm.from, fm.to) && mm.transactions.some((mm => !mm.isUserEvent("input.type") && mm.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = mm.changes.mapPos(this.composing.editorBase)) : this.applyEdits(mm) && this.rangeIsValid(mm.state) ? (mm.docChanged || mm.selectionSet || Tm) && this.setSelection(mm.state) : (this.pendingContextChange = null, this.reset(mm.state)), (mm.geometryChanged || mm.docChanged || mm.selectionSet) && mm.view.requestMeasure(this.measureReq)
      }
      resetRange(mm) {
        let {
          head: Tm
        } = mm.selection.main;
        this.from = Math.max(0, Tm - 1e4), this.to = Math.min(mm.doc.length, Tm + 1e4)
      }
      reset(mm) {
        this.resetRange(mm), this.editContext.updateText(0, this.editContext.text.length, mm.doc.sliceString(this.from, this.to)), this.setSelection(mm)
      }
      revertPending(mm) {
        let Tm = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(Tm.from), this.toContextPos(Tm.from + Tm.insert.length), mm.doc.sliceString(Tm.from, Tm.to))
      }
      setSelection(mm) {
        let {
          main: Tm
        } = mm.selection, fm = this.toContextPos(Math.max(this.from, Math.min(this.to, Tm.anchor))), hm = this.toContextPos(Tm.head);
        this.editContext.selectionStart == fm && this.editContext.selectionEnd == hm || this.editContext.updateSelection(fm, hm)
      }
      rangeIsValid(mm) {
        let {
          head: Tm
        } = mm.selection.main;
        return !(this.from > 0 && Tm - this.from < 500 || this.to < mm.doc.length && this.to - Tm < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        mm = Math.min(mm, Tm);
        let fm = this.composing;
        return fm && fm.drifted ? fm.editorBase + (mm - fm.contextBase) : mm + this.from
      }
      toContextPos(mm) {
        let Tm = this.composing;
        return Tm && Tm.drifted ? Tm.contextBase + (mm - Tm.editorBase) : mm - this.from
      }
      destroy() {
        for (let mm in this.handlers) this.editContext.removeEventListener(mm, this.handlers[mm])
      }
    }
    class bA {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get U1() {
        return this.viewState.U1
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
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Tm;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), mm.parent && mm.parent.appendChild(this.dom);
        let {
          dispatch: fm
        } = mm;
        this.dispatchTransactions = mm.dispatchTransactions || fm && (mm => mm.forEach((mm => fm(mm, this)))) || (mm => this.update(mm)), this.dispatch = this.dispatch.bind(this), this._root = mm.root || function(mm) {
          for (; mm;) {
            if (mm && (9 == mm.nodeType || 11 == mm.nodeType && mm.host)) return mm;
            mm = mm.assignedSlot || mm.parentNode
          }
          return null
        }(mm.parent) || document, this.viewState = new xA(this, mm.state || hm.q.create(mm)), mm.scrollTo && mm.scrollTo.is(BT) && (this.viewState.scrollTarget = mm.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(dT).map((mm => new WT(mm)));
        for (let hm of this.plugins) hm.update(this);
        this.observer = new cA(this), this.inputState = new ph(this), this.inputState.ensureHandlers(this.plugins), this.docView = new rf(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (Tm = document.fonts) || void 0 === Tm ? void 0 : Tm.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        let Am = 1 == Tm.length && Tm[0] instanceof hm.Q ? Tm : 1 == Tm.length && Array.isArray(Tm[0]) ? Tm[0] : [this.state.update(...Tm)];
        this.dispatchTransactions(Am, this)
      }
      update(mm) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let Tm, fm = !1,
          Am = !1,
          am = this.state;
        for (let hm of mm) {
          if (hm.startState != am) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          am = hm.state
        }
        if (this.destroyed) return void(this.viewState.state = am);
        let xm = this.hasFocus,
          wm = 0,
          Dm = null;
        mm.some((mm => mm.annotation(Gh))) ? (this.inputState.notifiedFocused = xm, wm = 1) : xm != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = xm, Dm = Xh(am, xm), Dm || (wm = 1));
        let im = this.observer.delayedAndroidKey,
          Rm = null;
        if (im ? (this.observer.clearDelayedAndroidKey(), Rm = this.observer.readChange(), (Rm && !this.state.doc.eq(am.doc) || !this.state.selection.eq(am.selection)) && (Rm = null)) : this.observer.clear(), am.facet(hm.q.phrases) != this.state.facet(hm.q.phrases)) return this.setState(am);
        Tm = Ef.create(this, am, mm), Tm.flags |= wm;
        let pm = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let Tm of mm) {
            if (pm && (pm = pm.map(Tm.changes)), Tm.scrollIntoView) {
              let {
                main: mm
              } = Tm.state.selection, {
                x: fm,
                y: Am
              } = this.state.facet(bA.cursorScrollMargin);
              pm = new uT(mm.empty ? mm : hm.o.cursor(mm.head, mm.head > mm.anchor ? -1 : 1), "nearest", "nearest", Am, fm)
            }
            for (let mm of Tm.effects) mm.is(BT) && (pm = mm.value.clip(this.state))
          }
          this.viewState.update(Tm, pm), this.bidiCache = NA.update(this.bidiCache, Tm.changes), Tm.empty || (this.updatePlugins(Tm), this.inputState.update(Tm)), fm = this.docView.update(Tm), this.state.facet(Rf) != this.styleModules && this.mountStyles(), Am = this.updateAttrs(), this.showAnnouncements(mm), this.docView.updateSelection(fm, mm.some((mm => mm.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (Tm.startState.facet(OA) != Tm.state.facet(OA) && (this.viewState.mustMeasureContent = !0), (fm || Am || pm || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), fm && this.docViewUpdate(), !Tm.empty)
          for (let hm of this.state.facet(PT)) try {
            hm(Tm)
          } catch (Em) {
            vT(this.state, Em, "update listener")
          }(Dm || Rm) && Promise.resolve().then((() => {
            Dm && this.state == Dm.startState && this.dispatch(Dm), Rm && !wh(this, Rm) && im.force && aT(this.contentDOM, im.key, im.keyCode)
          }))
      }
      setState(mm) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = mm);
        this.updateState = 2;
        let Tm = this.hasFocus;
        try {
          for (let mm of this.plugins) mm.destroy(this);
          this.viewState = new xA(this, mm), this.plugins = mm.facet(dT).map((mm => new WT(mm))), this.pluginMap.clear();
          for (let mm of this.plugins) mm.update(this);
          this.docView.destroy(), this.docView = new rf(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        Tm && this.focus(), this.requestMeasure()
      }
      updatePlugins(mm) {
        let Tm = mm.startState.facet(dT),
          fm = mm.state.facet(dT);
        if (Tm != fm) {
          let hm = [];
          for (let Am of fm) {
            let fm = Tm.indexOf(Am);
            if (fm < 0) hm.push(new WT(Am));
            else {
              let Tm = this.plugins[fm];
              Tm.mustUpdate = mm, hm.push(Tm)
            }
          }
          for (let Tm of this.plugins) Tm.mustUpdate != mm && Tm.destroy(this);
          this.plugins = hm, this.pluginMap.clear()
        } else
          for (let hm of this.plugins) hm.mustUpdate = mm;
        for (let hm = 0; hm < this.plugins.length; hm++) this.plugins[hm].update(this);
        Tm != fm && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let Tm of this.plugins) {
          let fm = Tm.value;
          if (fm && fm.docViewUpdate) try {
            fm.docViewUpdate(this)
          } catch (mm) {
            vT(this.state, mm, "doc view update listener")
          }
        }
      }
      measure() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, mm && this.observer.forceFlush();
        let Tm = null,
          fm = this.viewState.scrollParent,
          hm = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: Am,
            scrollAnchorHeight: am
          } = this.viewState;
        Math.abs(hm - this.viewState.scrollOffset) > 1 && (am = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let mm = 0;; mm++) {
            if (am < 0)
              if (xT(fm || this.win)) Am = -1, am = this.viewState.heightMap.height;
              else {
                let mm = this.viewState.scrollAnchorAt(hm);
                Am = mm.from, am = mm.top
              } this.updateState = 1;
            let wm = this.viewState.measure();
            if (!wm && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (mm > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let Dm = [];
            4 & wm || ([this.measureRequests, Dm] = [Dm, this.measureRequests]);
            let im = Dm.map((mm => {
                try {
                  return mm.read(this)
                } catch (Tm) {
                  return vT(this.state, Tm), eA
                }
              })),
              Rm = Ef.create(this, this.state, []),
              pm = !1;
            Rm.flags |= wm, Tm ? Tm.flags |= wm : Tm = Rm, this.updateState = 2, Rm.empty || (this.updatePlugins(Rm), this.inputState.update(Rm), this.updateAttrs(), pm = this.docView.update(Rm), pm && this.docViewUpdate());
            for (let mm = 0; mm < Dm.length; mm++)
              if (im[mm] != eA) try {
                let Tm = Dm[mm];
                Tm.write && Tm.write(im[mm], this)
              } catch (xm) {
                vT(this.state, xm)
              }
            if (pm && this.docView.updateSelection(!0), !Rm.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, am = -1;
                  continue
                } {
                  let mm = ((Am < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(Am).top) - am) / this.scaleY;
                  if ((mm > 1 || mm < -1) && (fm == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    hm += mm, fm ? fm.scrollTop += mm : this.win.scrollBy(0, mm), am = -1;
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
        if (Tm && !Tm.empty)
          for (let wm of this.state.facet(PT)) wm(Tm)
      }
      get themeClasses() {
        return qA + " " + (this.state.facet(YA) ? VA : jA) + " " + this.state.facet(OA)
      }
      updateAttrs() {
        let mm = GA(this, FT, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          Tm = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(tT) ? "true" : "false",
            class: "cm-content",
            style: `${Jm.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (Tm["aria-readonly"] = "true"), GA(this, mf, Tm);
        let fm = this.observer.ignore((() => {
          let fm = km(this.contentDOM, this.contentAttrs, Tm),
            hm = km(this.dom, this.editorAttrs, mm);
          return fm || hm
        }));
        return this.editorAttrs = mm, this.contentAttrs = Tm, fm
      }
      showAnnouncements(mm) {
        let Tm = !0;
        for (let fm of mm)
          for (let mm of fm.effects)
            if (mm.is(bA.announce)) {
              Tm && (this.announceDOM.textContent = ""), Tm = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = mm.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Rf);
        let mm = this.state.facet(bA.cspNonce);
        Am.e.mount(this.root, this.styleModules.concat(QA).reverse(), mm ? {
          nonce: mm
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(mm) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), mm) {
          if (this.measureRequests.indexOf(mm) > -1) return;
          if (null != mm.key)
            for (let Tm = 0; Tm < this.measureRequests.length; Tm++)
              if (this.measureRequests[Tm].key === mm.key) return void(this.measureRequests[Tm] = mm);
          this.measureRequests.push(mm)
        }
      }
      plugin(mm) {
        let Tm = this.pluginMap.get(mm);
        return (void 0 === Tm || Tm && Tm.plugin != mm) && this.pluginMap.set(mm, Tm = this.plugins.find((Tm => Tm.plugin == mm)) || null), Tm && Tm.update(this).value
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
      elementAtHeight(mm) {
        return this.readMeasured(), this.viewState.elementAtHeight(mm)
      }
      lineBlockAtHeight(mm) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(mm)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(mm) {
        return this.viewState.lineBlockAt(mm)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(mm, Tm, fm) {
        return df(this, mm, vf(this, mm, Tm, fm))
      }
      moveByGroup(mm, Tm) {
        return df(this, mm, vf(this, mm, Tm, (Tm => function(mm, Tm, fm) {
          let Am = mm.state.charCategorizer(Tm),
            am = Am(fm);
          return mm => {
            let Tm = Am(mm);
            return am == hm.k.Space && (am = Tm), am == Tm
          }
        }(this, mm.head, Tm))))
      }
      visualLineSide(mm, Tm) {
        let fm = this.bidiSpans(mm),
          Am = this.textDirectionAt(mm.from),
          am = fm[Tm ? fm.length - 1 : 0];
        return hm.o.cursor(am.side(Tm, Am) + mm.from, am.forward(!Tm, Am) ? 1 : -1)
      }
      moveToLineBoundary(mm, Tm) {
        return function(mm, Tm, fm, Am) {
          let am = Lf(mm, Tm.head, Tm.assoc || -1),
            xm = Am && am.type == em.Text && (mm.lineWrapping || am.widgetLineBreaks) ? mm.coordsAtPos(Tm.assoc < 0 && Tm.head > am.from ? Tm.head - 1 : Tm.head) : null;
          if (xm) {
            let Tm = mm.dom.getBoundingClientRect(),
              Am = mm.textDirectionAt(am.from),
              wm = mm.posAtCoords({
                x: fm == (Am == RT.LTR) ? Tm.right - 1 : Tm.left + 1,
                y: (xm.top + xm.bottom) / 2
              });
            if (null != wm) return hm.o.cursor(wm, fm ? -1 : 1)
          }
          return hm.o.cursor(fm ? am.to : am.from, fm ? -1 : 1)
        }(this, mm, Tm, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(mm, Tm, fm) {
        return df(this, mm, function(mm, Tm, fm, Am) {
          let am = Tm.head,
            xm = fm ? 1 : -1;
          if (am == (fm ? mm.state.doc.length : 0)) return hm.o.cursor(am, Tm.assoc);
          let wm, Dm = Tm.goalColumn,
            im = mm.contentDOM.getBoundingClientRect(),
            Rm = mm.coordsAtPos(am, Tm.assoc || ((Tm.empty ? fm : Tm.head == Tm.from) ? 1 : -1)),
            pm = mm.documentTop;
          if (Rm) null == Dm && (Dm = Rm.left - im.left), wm = xm < 0 ? Rm.top : Rm.bottom;
          else {
            let Tm = mm.viewState.lineBlockAt(am);
            null == Dm && (Dm = Math.min(im.right - im.left, mm.defaultCharacterWidth * (am - Tm.from))), wm = (xm < 0 ? Tm.top : Tm.bottom) + pm
          }
          let Em = im.left + Dm,
            om = mm.viewState.heightOracle.textHeight >> 1,
            Om = null !== Am && void 0 !== Am ? Am : om;
          for (let Ym = 0;; Ym += om) {
            let Tm = wm + (Om + Ym) * xm,
              Am = Wf(mm, {
                x: Em,
                y: Tm
              }, !1, xm);
            if (fm ? Tm > im.bottom : Tm < im.top) return hm.o.cursor(Am.pos, Am.assoc);
            let am = mm.coordsAtPos(Am.pos, Am.assoc),
              Rm = am ? (am.top + am.bottom) / 2 : 0;
            if (!am || (fm ? Rm > wm : Rm < wm)) return hm.o.cursor(Am.pos, Am.assoc, void 0, Dm)
          }
        }(this, mm, Tm, fm))
      }
      domAtPos(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(mm, Tm)
      }
      posAtDOM(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(mm, Tm)
      }
      posAtCoords(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let fm = Wf(this, mm, Tm);
        return fm && fm.pos
      }
      posAndSideAtCoords(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Wf(this, mm, Tm)
      }
      coordsAtPos(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let fm = this.docView.coordsAt(mm, Tm);
        if (!fm || fm.left == fm.right) return fm;
        let hm = this.state.doc.lineAt(mm),
          Am = this.bidiSpans(hm);
        return dm(fm, Am[KT.find(Am, mm - hm.from, -1, Tm)].dir == RT.LTR == Tm > 0)
      }
      coordsForChar(mm) {
        return this.readMeasured(), this.docView.coordsForChar(mm)
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
      textDirectionAt(mm) {
        return !this.state.facet(sT) || mm < this.viewport.from || mm > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(mm))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(mm) {
        if (mm.length > SA) return ZT(mm.length);
        let Tm, fm = this.textDirectionAt(mm.from);
        for (let Am of this.bidiCache)
          if (Am.from == mm.from && Am.dir == fm && (Am.fresh || QT(Am.isolates, Tm = xf(this, mm)))) return Am.order;
        Tm || (Tm = xf(this, mm));
        let hm = zT(mm.text, fm, Tm);
        return this.bidiCache.push(new NA(mm.from, mm.to, fm, Tm, !0, hm)), hm
      }
      get hasFocus() {
        var mm;
        return (this.dom.ownerDocument.hasFocus() || Jm.safari && (null === (mm = this.inputState) || void 0 === mm ? void 0 : mm.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          hT(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(mm) {
        this._root != mm && (this._root = mm, this.observer.setWindow((9 == mm.nodeType ? mm : mm.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let mm of this.plugins) mm.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var fm, Am, am, xm;
        return BT.of(new uT("number" == typeof mm ? hm.o.cursor(mm) : mm, null !== (fm = Tm.y) && void 0 !== fm ? fm : "nearest", null !== (Am = Tm.x) && void 0 !== Am ? Am : "nearest", null !== (am = Tm.yMargin) && void 0 !== am ? am : 5, null !== (xm = Tm.xMargin) && void 0 !== xm ? xm : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: mm,
          scrollLeft: Tm
        } = this.scrollDOM, fm = this.viewState.scrollAnchorAt(mm);
        return BT.of(new uT(hm.o.cursor(fm.from), "start", "start", fm.top - mm, Tm, !0))
      }
      setTabFocusMode(mm) {
        null == mm ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof mm ? this.inputState.tabFocusMode = mm ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + mm)
      }
      static domEventHandlers(mm) {
        return gT.define((() => ({})), {
          eventHandlers: mm
        })
      }
      static domEventObservers(mm) {
        return gT.define((() => ({})), {
          eventObservers: mm
        })
      }
      static theme(mm, Tm) {
        let fm = Am.e.newName(),
          hm = [OA.of(fm), Rf.of(KA(`.${fm}`, mm))];
        return Tm && Tm.dark && hm.push(YA.of(!0)), hm
      }
      static baseTheme(mm) {
        return hm.x.lowest(Rf.of(KA("." + qA, mm, IA)))
      }
      static findFromDOM(mm) {
        var Tm;
        let fm = mm.querySelector(".cm-content"),
          hm = fm && Of.get(fm) || Of.get(mm);
        return (null === (Tm = null === hm || void 0 === hm ? void 0 : hm.root) || void 0 === Tm ? void 0 : Tm.view) || null
      }
    }
    bA.styleModule = Rf, bA.inputHandler = HT, bA.clipboardInputFilter = CT, bA.clipboardOutputFilter = rT, bA.scrollHandler = MT, bA.focusChangeEffect = yT, bA.perLineTextDirection = sT, bA.exceptionSink = XT, bA.updateListener = PT, bA.editable = tT, bA.mouseSelectionStyle = GT, bA.dragMovesSelection = NT, bA.clickAddsSelectionRange = eT, bA.Ym = Tf, bA.blockWrappers = ff, bA.outerDecorations = hf, bA.atomicRanges = Af, bA.bidiIsolatedRanges = af, bA.cursorScrollMargin = hm.s.define({
      combine: mm => {
        let Tm = 5,
          fm = 5;
        for (let hm of mm) "number" == typeof hm ? Tm = fm = hm : ({
          x: Tm,
          y: fm
        } = hm);
        return {
          x: Tm,
          y: fm
        }
      }
    }), bA.scrollMargins = wf, bA.darkTheme = YA, bA.cspNonce = hm.s.define({
      combine: mm => mm.length ? mm[0] : ""
    }), bA.contentAttributes = mf, bA.editorAttributes = FT, bA.lineWrapping = bA.contentAttributes.of({
      class: "cm-lineWrapping"
    }), bA.announce = hm.J.define();
    const SA = 4096,
      eA = {};
    class NA {
      constructor(mm, Tm, fm, hm, Am, am) {
        this.from = mm, this.to = Tm, this.dir = fm, this.isolates = hm, this.fresh = Am, this.order = am
      }
      static update(mm, Tm) {
        if (Tm.empty && !mm.some((mm => mm.fresh))) return mm;
        let fm = [],
          hm = mm.length ? mm[mm.length - 1].dir : RT.LTR;
        for (let Am = Math.max(0, mm.length - 10); Am < mm.length; Am++) {
          let am = mm[Am];
          am.dir != hm || Tm.touchesRange(am.from, am.to) || fm.push(new NA(Tm.mapPos(am.from, 1), Tm.mapPos(am.to, -1), am.dir, am.isolates, !1, am.order))
        }
        return fm
      }
    }

    function GA(mm, Tm, fm) {
      for (let hm = mm.state.facet(Tm), Am = hm.length - 1; Am >= 0; Am--) {
        let Tm = hm[Am],
          am = "function" == typeof Tm ? Tm(mm) : Tm;
        am && cm(am, fm)
      }
      return fm
    }
    const XA = Jm.mac ? "mac" : Jm.windows ? "win" : Jm.linux ? "linux" : "key";

    function PA(mm, Tm, fm) {
      return Tm.altKey && (mm = "Alt-" + mm), Tm.ctrlKey && (mm = "Ctrl-" + mm), Tm.metaKey && (mm = "Meta-" + mm), !1 !== fm && Tm.shiftKey && (mm = "Shift-" + mm), mm
    }
    const HA = hm.x.default(bA.domEventHandlers({
        keydown: (mm, Tm) => BA(rA(Tm.state), mm, Tm, "editor")
      })),
      yA = hm.s.define({
        enables: HA
      }),
      CA = new WeakMap;

    function rA(mm) {
      let Tm = mm.facet(yA),
        fm = CA.get(Tm);
      return fm || CA.set(Tm, fm = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XA,
          fm = Object.create(null),
          hm = Object.create(null),
          Am = (mm, Tm) => {
            let fm = hm[mm];
            if (null == fm) hm[mm] = Tm;
            else if (fm != Tm) throw new Error("Key binding " + mm + " is used both as a regular binding and as a multi-stroke prefix")
          },
          am = (mm, hm, am, xm, wm) => {
            var Dm, im;
            let Rm = fm[mm] || (fm[mm] = Object.create(null)),
              pm = hm.split(/ (?!$)/).map((mm => function(mm, Tm) {
                const fm = mm.split(/-(?!$)/);
                let hm, Am, am, xm, wm = fm[fm.length - 1];
                "Space" == wm && (wm = " ");
                for (let Dm = 0; Dm < fm.length - 1; ++Dm) {
                  const mm = fm[Dm];
                  if (/^(cmd|meta|m)$/i.test(mm)) xm = !0;
                  else if (/^a(lt)?$/i.test(mm)) hm = !0;
                  else if (/^(c|ctrl|control)$/i.test(mm)) Am = !0;
                  else if (/^s(hift)?$/i.test(mm)) am = !0;
                  else {
                    if (!/^mod$/i.test(mm)) throw new Error("Unrecognized modifier name: " + mm);
                    "mac" == Tm ? xm = !0 : Am = !0
                  }
                }
                return hm && (wm = "Alt-" + wm), Am && (wm = "Ctrl-" + wm), xm && (wm = "Meta-" + wm), am && (wm = "Shift-" + wm), wm
              }(mm, Tm)));
            for (let Tm = 1; Tm < pm.length; Tm++) {
              let fm = pm.slice(0, Tm).join(" ");
              Am(fm, !0), Rm[fm] || (Rm[fm] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [Tm => {
                  let hm = lA = {
                    view: Tm,
                    prefix: fm,
                    scope: mm
                  };
                  return setTimeout((() => {
                    lA == hm && (lA = null)
                  }), MA), !0
                }]
              })
            }
            let Em = pm.join(" ");
            Am(Em, !1);
            let om = Rm[Em] || (Rm[Em] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (im = null === (Dm = Rm._any) || void 0 === Dm ? void 0 : Dm.run) || void 0 === im ? void 0 : im.slice()) || []
            });
            am && om.run.push(am), xm && (om.preventDefault = !0), wm && (om.stopPropagation = !0)
          };
        for (let xm of mm) {
          let mm = xm.scope ? xm.scope.split(" ") : ["editor"];
          if (xm.any)
            for (let Tm of mm) {
              let mm = fm[Tm] || (fm[Tm] = Object.create(null));
              mm._any || (mm._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: hm
              } = xm;
              for (let Tm in mm) mm[Tm].run.push((mm => hm(mm, uA)))
            }
          let hm = xm[Tm] || xm.key;
          if (hm)
            for (let Tm of mm) am(Tm, hm, xm.run, xm.preventDefault, xm.stopPropagation), xm.shift && am(Tm, "Shift-" + hm, xm.shift, xm.preventDefault, xm.stopPropagation)
        }
        return fm
      }(Tm.reduce(((mm, Tm) => mm.concat(Tm)), []))), fm
    }

    function sA(mm, Tm, fm) {
      return BA(rA(mm.state), Tm, mm, fm)
    }
    let lA = null;
    const MA = 4e3;
    let uA = null;

    function BA(mm, Tm, fm, Am) {
      uA = Tm;
      let im = function(mm) {
          var Tm = !(wm && mm.metaKey && mm.shiftKey && !mm.ctrlKey && !mm.altKey || Dm && mm.shiftKey && mm.key && 1 == mm.key.length || "Unidentified" == mm.key) && mm.key || (mm.shiftKey ? xm : am)[mm.keyCode] || mm.key || "Unidentified";
          return "Esc" == Tm && (Tm = "Escape"), "Del" == Tm && (Tm = "Delete"), "Left" == Tm && (Tm = "ArrowLeft"), "Up" == Tm && (Tm = "ArrowUp"), "Right" == Tm && (Tm = "ArrowRight"), "Down" == Tm && (Tm = "ArrowDown"), Tm
        }(Tm),
        Rm = (0, hm.R)(im, 0),
        pm = (0, hm.U)(Rm) == im.length && " " != im,
        Em = "",
        om = !1,
        Om = !1,
        Ym = !1;
      lA && lA.view == fm && lA.scope == Am && (Em = lA.prefix + " ", qh.indexOf(Tm.keyCode) < 0 && (Om = !0, lA = null));
      let qm, jm, Vm = new Set,
        Im = mm => {
          if (mm) {
            for (let Tm of mm.run)
              if (!Vm.has(Tm) && (Vm.add(Tm), Tm(fm))) return mm.stopPropagation && (Ym = !0), !0;
            mm.preventDefault && (mm.stopPropagation && (Ym = !0), Om = !0)
          }
          return !1
        },
        Km = mm[Am];
      return Km && (Im(Km[Em + PA(im, Tm, !pm)]) ? om = !0 : !pm || !(Tm.altKey || Tm.metaKey || Tm.ctrlKey) || Jm.windows && Tm.ctrlKey && Tm.altKey || Jm.mac && Tm.altKey && !Tm.ctrlKey && !Tm.metaKey || !(qm = am[Tm.keyCode]) || qm == im ? pm && Tm.shiftKey && Im(Km[Em + PA(im, Tm, !0)]) && (om = !0) : (Im(Km[Em + PA(qm, Tm, !0)]) || Tm.shiftKey && (jm = xm[Tm.keyCode]) != im && jm != qm && Im(Km[Em + PA(jm, Tm, !1)])) && (om = !0), !om && Im(Km._any) && (om = !0)), Om && (om = !0), om && Ym && Tm.stopPropagation(), uA = null, om
    }
    class LA {
      constructor(mm, Tm, fm, hm, Am) {
        this.className = mm, this.left = Tm, this.top = fm, this.width = hm, this.height = Am
      }
      draw() {
        let mm = document.createElement("div");
        return mm.className = this.className, this.adjust(mm), mm
      }
      update(mm, Tm) {
        return Tm.className == this.className && (this.adjust(mm), !0)
      }
      adjust(mm) {
        mm.style.left = this.left + "px", mm.style.top = this.top + "px", null != this.width && (mm.style.width = this.width + "px"), mm.style.height = this.height + "px"
      }
      eq(mm) {
        return this.left == mm.left && this.top == mm.top && this.width == mm.width && this.height == mm.height && this.className == mm.className
      }
      static forRange(mm, Tm, fm) {
        if (fm.empty) {
          let hm = mm.coordsAtPos(fm.head, fm.assoc || 1);
          if (!hm) return [];
          let Am = vA(mm);
          return [new LA(Tm, hm.left - Am.left, hm.top - Am.top, null, hm.bottom - hm.top)]
        }
        return function(mm, Tm, fm) {
          if (fm.to <= mm.viewport.from || fm.from >= mm.viewport.to) return [];
          let hm = Math.max(fm.from, mm.viewport.from),
            Am = Math.min(fm.to, mm.viewport.to),
            am = mm.textDirection == RT.LTR,
            xm = mm.contentDOM,
            wm = xm.getBoundingClientRect(),
            Dm = vA(mm),
            im = xm.querySelector(".cm-line"),
            Rm = im && window.getComputedStyle(im),
            pm = wm.left + (Rm ? parseInt(Rm.paddingLeft) + Math.min(0, parseInt(Rm.textIndent)) : 0),
            Em = wm.right - (Rm ? parseInt(Rm.paddingRight) : 0),
            om = Lf(mm, hm, 1),
            Om = Lf(mm, Am, -1),
            Ym = om.type == em.Text ? om : null,
            qm = Om.type == em.Text ? Om : null;
          Ym && (mm.lineWrapping || om.widgetLineBreaks) && (Ym = tA(mm, hm, 1, Ym));
          qm && (mm.lineWrapping || Om.widgetLineBreaks) && (qm = tA(mm, Am, -1, qm));
          if (Ym && qm && Ym.from == qm.from && Ym.to == qm.to) return Vm(Im(fm.from, fm.to, Ym));
          {
            let Tm = Ym ? Im(fm.from, null, Ym) : Km(om, !1),
              hm = qm ? Im(null, fm.to, qm) : Km(Om, !0),
              Am = [];
            return (Ym || om).to < (qm || Om).from - (Ym && qm ? 1 : 0) || om.widgetLineBreaks > 1 && Tm.bottom + mm.defaultLineHeight / 2 < hm.top ? Am.push(jm(pm, Tm.bottom, Em, hm.top)) : Tm.bottom < hm.top && mm.elementAtHeight((Tm.bottom + hm.top) / 2).type == em.Text && (Tm.bottom = hm.top = (Tm.bottom + hm.top) / 2), Vm(Tm).concat(Am).concat(Vm(hm))
          }

          function jm(mm, fm, hm, Am) {
            return new LA(Tm, mm - Dm.left, fm - Dm.top, Math.max(0, hm - mm), Am - fm)
          }

          function Vm(mm) {
            let {
              top: Tm,
              bottom: fm,
              horizontal: hm
            } = mm, Am = [];
            for (let am = 0; am < hm.length; am += 2) Am.push(jm(hm[am], Tm, hm[am + 1], fm));
            return Am
          }

          function Im(Tm, fm, hm) {
            let Am = 1e9,
              xm = -1e9,
              wm = [];

            function Dm(Tm, fm, Dm, im, Rm) {
              let om = mm.coordsAtPos(Tm, Tm == hm.to ? -2 : 2),
                Om = mm.coordsAtPos(Dm, Dm == hm.from ? 2 : -2);
              om && Om && (Am = Math.min(om.top, Om.top, Am), xm = Math.max(om.bottom, Om.bottom, xm), Rm == RT.LTR ? wm.push(am && fm ? pm : om.left, am && im ? Em : Om.right) : wm.push(!am && im ? pm : Om.left, !am && fm ? Em : om.right))
            }
            let im = null !== Tm && void 0 !== Tm ? Tm : hm.from,
              Rm = null !== fm && void 0 !== fm ? fm : hm.to;
            for (let am of mm.U1)
              if (am.to > im && am.from < Rm)
                for (let hm = Math.max(am.from, im), Am = Math.min(am.to, Rm);;) {
                  let am = mm.state.doc.lineAt(hm);
                  for (let xm of mm.bidiSpans(am)) {
                    let mm = xm.from + am.from,
                      wm = xm.to + am.from;
                    if (mm >= Am) break;
                    wm > hm && Dm(Math.max(mm, hm), null == Tm && mm <= im, Math.min(wm, Am), null == fm && wm >= Rm, xm.dir)
                  }
                  if (hm = am.to + 1, hm >= Am) break
                }
            return 0 == wm.length && Dm(im, null == Tm, Rm, null == fm, mm.textDirection), {
              top: Am,
              bottom: xm,
              horizontal: wm
            }
          }

          function Km(mm, Tm) {
            let fm = wm.top + (Tm ? mm.top : mm.bottom);
            return {
              top: fm,
              bottom: fm,
              horizontal: []
            }
          }
        }(mm, Tm, fm)
      }
    }

    function vA(mm) {
      let Tm = mm.scrollDOM.getBoundingClientRect();
      return {
        left: (mm.textDirection == RT.LTR ? Tm.left : Tm.right - mm.scrollDOM.clientWidth * mm.scaleX) - mm.scrollDOM.scrollLeft * mm.scaleX,
        top: Tm.top - mm.scrollDOM.scrollTop * mm.scaleY
      }
    }

    function tA(mm, Tm, fm, hm) {
      let Am = mm.coordsAtPos(Tm, 2 * fm);
      if (!Am) return hm;
      let am = mm.dom.getBoundingClientRect(),
        xm = (Am.top + Am.bottom) / 2,
        wm = mm.posAtCoords({
          x: am.left + 1,
          y: xm
        }),
        Dm = mm.posAtCoords({
          x: am.right - 1,
          y: xm
        });
      return null == wm || null == Dm ? hm : {
        from: Math.max(hm.from, Math.min(wm, Dm)),
        to: Math.min(hm.to, Math.max(wm, Dm))
      }
    }
    class UA {
      constructor(mm, Tm) {
        this.view = mm, this.layer = Tm, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = mm.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), Tm.above && this.dom.classList.add("cm-layer-above"), Tm.class && this.dom.classList.add(Tm.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(mm.state), mm.requestMeasure(this.measureReq), Tm.mount && Tm.mount(this.dom, mm)
      }
      update(mm) {
        mm.startState.facet(dA) != mm.state.facet(dA) && this.setOrder(mm.state), (this.layer.update(mm, this.dom) || mm.geometryChanged) && (this.scale(), mm.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(mm) {
        !1 !== this.layer.updateOnDocViewUpdate && mm.requestMeasure(this.measureReq)
      }
      setOrder(mm) {
        let Tm = 0,
          fm = mm.facet(dA);
        for (; Tm < fm.length && fm[Tm] != this.layer;) Tm++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - Tm)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: mm,
          scaleY: Tm
        } = this.view;
        mm == this.scaleX && Tm == this.scaleY || (this.scaleX = mm, this.scaleY = Tm, this.dom.style.transform = `scale(${1/mm}, ${1/Tm})`)
      }
      draw(mm) {
        if (mm.length != this.drawn.length || mm.some(((mm, Tm) => {
            return fm = mm, hm = this.drawn[Tm], !(fm.constructor == hm.constructor && fm.eq(hm));
            var fm, hm
          }))) {
          let Tm = this.dom.firstChild,
            fm = 0;
          for (let hm of mm) hm.update && Tm && hm.constructor && this.drawn[fm].constructor && hm.update(Tm, this.drawn[fm]) ? (Tm = Tm.nextSibling, fm++) : this.dom.insertBefore(hm.draw(), Tm);
          for (; Tm;) {
            let mm = Tm.nextSibling;
            Tm.remove(), Tm = mm
          }
          this.drawn = mm, Jm.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const dA = hm.s.define();

    function gA(mm) {
      return [gT.define((Tm => new UA(Tm, mm))), dA.of(mm)]
    }
    const WA = hm.s.define({
      combine: mm => (0, hm.Y)(mm, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (mm, Tm) => Math.min(mm, Tm),
        drawRangeCursor: (mm, Tm) => mm || Tm
      })
    });

    function FA() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [WA.of(mm), Ta, ha, Aa, lT.of(!0)]
    }

    function ma(mm) {
      return mm.startState.facet(WA) != mm.state.facet(WA)
    }
    const Ta = gA({
      above: !0,
      markers(mm) {
        let {
          state: Tm
        } = mm, fm = Tm.facet(WA), Am = [];
        for (let am of Tm.selection.mo) {
          let xm = am == Tm.selection.main;
          if (am.empty || fm.drawRangeCursor && !(xm && Jm.ios && fm.iosSelectionHandles)) {
            let Tm = xm ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              fm = am.empty ? am : hm.o.cursor(am.head, am.assoc);
            for (let hm of LA.forRange(mm, Tm, fm)) Am.push(hm)
          }
        }
        return Am
      },
      update(mm, Tm) {
        mm.transactions.some((mm => mm.selection)) && (Tm.style.animationName = "cm-blink" == Tm.style.animationName ? "cm-blink2" : "cm-blink");
        let fm = ma(mm);
        return fm && fa(mm.state, Tm), mm.docChanged || mm.selectionSet || fm
      },
      mount(mm, Tm) {
        fa(Tm.state, mm)
      },
      class: "cm-cursorLayer"
    });

    function fa(mm, Tm) {
      Tm.style.animationDuration = mm.facet(WA).cursorBlinkRate + "ms"
    }
    const ha = gA({
        above: !1,
        markers(mm) {
          let Tm = [],
            {
              main: fm,
              mo: Am
            } = mm.state.selection;
          for (let hm of Am)
            if (!hm.empty)
              for (let fm of LA.forRange(mm, "cm-selectionBackground", hm)) Tm.push(fm);
          if (Jm.ios && !fm.empty && mm.state.facet(WA).iosSelectionHandles) {
            for (let Am of LA.forRange(mm, "cm-selectionHandle cm-selectionHandle-start", hm.o.cursor(fm.from, 1))) Tm.push(Am);
            for (let Am of LA.forRange(mm, "cm-selectionHandle cm-selectionHandle-end", hm.o.cursor(fm.to, 1))) Tm.push(Am)
          }
          return Tm
        },
        update: (mm, Tm) => mm.docChanged || mm.selectionSet || mm.viewportChanged || ma(mm),
        class: "cm-selectionLayer"
      }),
      Aa = hm.x.highest(bA.theme({
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
      aa = hm.J.define({
        map: (mm, Tm) => null == mm ? null : Tm.mapPos(mm)
      }),
      xa = hm.M.define({
        create: () => null,
        update: (mm, Tm) => (null != mm && (mm = Tm.changes.mapPos(mm)), Tm.effects.reduce(((mm, Tm) => Tm.is(aa) ? Tm.value : mm), mm))
      }),
      wa = gT.fromClass(class {
        constructor(mm) {
          this.view = mm, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(mm) {
          var Tm;
          let fm = mm.state.field(xa);
          null == fm ? null != this.cursor && (null === (Tm = this.cursor) || void 0 === Tm || Tm.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (mm.startState.field(xa) != fm || mm.docChanged || mm.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: mm
          } = this, Tm = mm.state.field(xa), fm = null != Tm && mm.coordsAtPos(Tm);
          if (!fm) return null;
          let hm = mm.scrollDOM.getBoundingClientRect();
          return {
            left: fm.left - hm.left + mm.scrollDOM.scrollLeft * mm.scaleX,
            top: fm.top - hm.top + mm.scrollDOM.scrollTop * mm.scaleY,
            height: fm.bottom - fm.top
          }
        }
        drawCursor(mm) {
          if (this.cursor) {
            let {
              scaleX: Tm,
              scaleY: fm
            } = this.view;
            mm ? (this.cursor.style.left = mm.left / Tm + "px", this.cursor.style.top = mm.top / fm + "px", this.cursor.style.height = mm.height / fm + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(mm) {
          this.view.state.field(xa) != mm && this.view.dispatch({
            effects: aa.of(mm)
          })
        }
      }, {
        eventObservers: {
          dragover(mm) {
            this.setDropPos(this.view.posAtCoords({
              x: mm.clientX,
              y: mm.clientY
            }))
          },
          dragleave(mm) {
            mm.target != this.view.contentDOM && this.view.contentDOM.contains(mm.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function Da() {
      return [xa, wa]
    }

    function ia(mm, Tm, fm, hm, Am) {
      Tm.lastIndex = 0;
      for (let am, xm = mm.iterRange(fm, hm), wm = fm; !xm.next().done; wm += xm.value.length)
        if (!xm.lineBreak)
          for (; am = Tm.exec(xm.value);) Am(wm + am.index, am)
    }
    class Ra {
      constructor(mm) {
        const {
          regexp: Tm,
          decoration: fm,
          decorate: hm,
          boundary: Am,
          maxLength: am = 1e3
        } = mm;
        if (!Tm.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = Tm, hm) this.addMatch = (mm, Tm, fm, Am) => hm(Am, fm, fm + mm[0].length, mm, Tm);
        else if ("function" == typeof fm) this.addMatch = (mm, Tm, hm, Am) => {
          let am = fm(mm, Tm, hm);
          am && Am(hm, hm + mm[0].length, am)
        };
        else {
          if (!fm) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (mm, Tm, hm, Am) => Am(hm, hm + mm[0].length, fm)
        }
        this.boundary = Am, this.maxLength = am
      }
      createDeco(mm) {
        let Tm = new hm.y,
          fm = Tm.add.bind(Tm);
        for (let {
            from: hm,
            to: Am
          }
          of
          function(mm, Tm) {
            let fm = mm.U1;
            if (1 == fm.length && fm[0].from == mm.viewport.from && fm[0].to == mm.viewport.to) return fm;
            let hm = [];
            for (let {
                from: Am,
                to: am
              }
              of fm) Am = Math.max(mm.state.doc.lineAt(Am).from, Am - Tm), am = Math.min(mm.state.doc.lineAt(am).to, am + Tm), hm.length && hm[hm.length - 1].to >= Am ? hm[hm.length - 1].to = am : hm.push({
              from: Am,
              to: am
            });
            return hm
          }(mm, this.maxLength)) ia(mm.state.doc, this.regexp, hm, Am, ((Tm, hm) => this.addMatch(hm, mm, Tm, fm)));
        return Tm.finish()
      }
      updateDeco(mm, Tm) {
        let fm = 1e9,
          hm = -1;
        return mm.docChanged && mm.changes.iterChanges(((Tm, Am, am, xm) => {
          xm >= mm.view.viewport.from && am <= mm.view.viewport.to && (fm = Math.min(am, fm), hm = Math.max(xm, hm))
        })), mm.viewportMoved || hm - fm > 1e3 ? this.createDeco(mm.view) : hm > -1 ? this.updateRange(mm.view, Tm.map(mm.changes), fm, hm) : Tm
      }
      updateRange(mm, Tm, fm, hm) {
        for (let Am of mm.U1) {
          let am = Math.max(Am.from, fm),
            xm = Math.min(Am.to, hm);
          if (xm >= am) {
            let fm = mm.state.doc.lineAt(am),
              hm = fm.to < xm ? mm.state.doc.lineAt(xm) : fm,
              wm = Math.max(Am.from, fm.from),
              Dm = Math.min(Am.to, hm.to);
            if (this.boundary) {
              for (; am > fm.from; am--)
                if (this.boundary.test(fm.text[am - 1 - fm.from])) {
                  wm = am;
                  break
                } for (; xm < hm.to; xm++)
                if (this.boundary.test(hm.text[xm - hm.from])) {
                  Dm = xm;
                  break
                }
            }
            let im, Rm = [],
              pm = (mm, Tm, fm) => Rm.push(fm.range(mm, Tm));
            if (fm == hm)
              for (this.regexp.lastIndex = wm - fm.from;
                (im = this.regexp.exec(fm.text)) && im.index < Dm - fm.from;) this.addMatch(im, mm, im.index + fm.from, pm);
            else ia(mm.state.doc, this.regexp, wm, Dm, ((Tm, fm) => this.addMatch(fm, mm, Tm, pm)));
            Tm = Tm.update({
              filterFrom: wm,
              filterTo: Dm,
              filter: (mm, Tm) => mm < wm || Tm > Dm,
              add: Rm
            })
          }
        }
        return Tm
      }
    }
    const pa = null != /x/.unicode ? "gu" : "g",
      Ea = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", pa),
      oa = {
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
    let Oa = null;
    const Ya = hm.s.define({
      combine(mm) {
        let Tm = (0, hm.Y)(mm, {
          render: null,
          specialChars: Ea,
          addSpecialChars: null
        });
        return (Tm.replaceTabs = ! function() {
          var mm;
          if (null == Oa && "undefined" != typeof document && document.body) {
            let Tm = document.body.style;
            Oa = null != (null !== (mm = Tm.tabSize) && void 0 !== mm ? mm : Tm.MozTabSize)
          }
          return Oa || !1
        }()) && (Tm.specialChars = new RegExp("\t|" + Tm.specialChars.source, pa)), Tm.addSpecialChars && (Tm.specialChars = new RegExp(Tm.specialChars.source + "|" + Tm.addSpecialChars.source, pa)), Tm
      }
    });

    function qa() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Ya.of(mm), ja || (ja = gT.fromClass(class {
        constructor(mm) {
          this.view = mm, this.Ym = Nm.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(mm.state.facet(Ya)), this.Ym = this.decorator.createDeco(mm)
        }
        makeDecorator(mm) {
          return new Ra({
            regexp: mm.specialChars,
            decoration: (Tm, fm, Am) => {
              let {
                doc: am
              } = fm.state, xm = (0, hm.R)(Tm[0], 0);
              if (9 == xm) {
                let mm = am.lineAt(Am),
                  Tm = fm.state.tabSize,
                  xm = (0, hm.$)(mm.text, Tm, Am - mm.from);
                return Nm.replace({
                  widget: new Ia((Tm - xm % Tm) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[xm] || (this.decorationCache[xm] = Nm.replace({
                widget: new Va(mm, xm)
              }))
            },
            boundary: mm.replaceTabs ? void 0 : /[^]/
          })
        }
        update(mm) {
          let Tm = mm.state.facet(Ya);
          mm.startState.facet(Ya) != Tm ? (this.decorator = this.makeDecorator(Tm), this.Ym = this.decorator.createDeco(mm.view)) : this.Ym = this.decorator.updateDeco(mm, this.Ym)
        }
      }, {
        Ym: mm => mm.Ym
      }))]
    }
    let ja = null;
    class Va extends Sm {
      constructor(mm, Tm) {
        super(), this.options = mm, this.code = Tm
      }
      eq(mm) {
        return mm.code == this.code
      }
      toDOM(mm) {
        let Tm = function(mm) {
            return mm >= 32 ? "\u2022" : 10 == mm ? "\u2424" : String.fromCharCode(9216 + mm)
          }(this.code),
          fm = mm.state.phrase("Control character") + " " + (oa[this.code] || "0x" + this.code.toString(16)),
          hm = this.options.render && this.options.render(this.code, fm, Tm);
        if (hm) return hm;
        let Am = document.createElement("span");
        return Am.textContent = Tm, Am.title = fm, Am.setAttribute("aria-label", fm), Am.className = "cm-specialChar", Am
      }
      ignoreEvent() {
        return !1
      }
    }
    class Ia extends Sm {
      constructor(mm) {
        super(), this.width = mm
      }
      eq(mm) {
        return mm.width == this.width
      }
      toDOM() {
        let mm = document.createElement("span");
        return mm.textContent = "\t", mm.className = "cm-tab", mm.style.width = this.width + "px", mm
      }
      ignoreEvent() {
        return !1
      }
    }

    function Ka() {
      return na
    }
    const Qa = Nm.line({
        class: "cm-activeLine"
      }),
      na = gT.fromClass(class {
        constructor(mm) {
          this.Ym = this.getDeco(mm)
        }
        update(mm) {
          (mm.docChanged || mm.selectionSet) && (this.Ym = this.getDeco(mm.view))
        }
        getDeco(mm) {
          let Tm = -1,
            fm = [];
          for (let hm of mm.state.selection.mo) {
            let Am = mm.lineBlockAt(hm.head);
            Am.from > Tm && (fm.push(Qa.range(Am.from)), Tm = Am.from)
          }
          return Nm.set(fm)
        }
      }, {
        Ym: mm => mm.Ym
      });
    class Ja extends Sm {
      constructor(mm) {
        super(), this.content = mm
      }
      toDOM(mm) {
        let Tm = document.createElement("span");
        return Tm.className = "cm-placeholder", Tm.style.pointerEvents = "none", Tm.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(mm) : this.content.cloneNode(!0)), Tm.setAttribute("aria-hidden", "true"), Tm
      }
      coordsAt(mm) {
        let Tm = mm.firstChild ? Mm(mm.firstChild) : [];
        if (!Tm.length) return null;
        let fm = window.getComputedStyle(mm.parentNode),
          hm = dm(Tm[0], "rtl" != fm.direction),
          Am = parseInt(fm.lineHeight);
        return hm.bottom - hm.top > 1.5 * Am ? {
          left: hm.left,
          right: hm.right,
          top: hm.top,
          bottom: hm.top + Am
        } : hm
      }
      ignoreEvent() {
        return !1
      }
    }

    function ca(mm) {
      let Tm = gT.fromClass(class {
        constructor(Tm) {
          this.view = Tm, this.placeholder = mm ? Nm.set([Nm.widget({
            widget: new Ja(mm),
            side: 1
          }).range(0)]) : Nm.none
        }
        get Ym() {
          return this.view.state.doc.length ? Nm.none : this.placeholder
        }
      }, {
        Ym: mm => mm.Ym
      });
      return "string" == typeof mm ? [Tm, bA.contentAttributes.of({
        "aria-placeholder": mm
      })] : Tm
    }
    const za = 2e3;

    function Za(mm, Tm) {
      let fm = mm.posAtCoords({
          x: Tm.clientX,
          y: Tm.clientY
        }, !1),
        Am = mm.state.doc.lineAt(fm),
        am = fm - Am.from,
        xm = am > za ? -1 : am == Am.length ? function(mm, Tm) {
          let fm = mm.coordsAtPos(mm.viewport.from);
          return fm ? Math.round(Math.abs((fm.left - Tm) / mm.defaultCharacterWidth)) : -1
        }(mm, Tm.clientX) : (0, hm.$)(Am.text, mm.state.tabSize, fm - Am.from);
      return {
        line: Am.number,
        col: xm,
        off: am
      }
    }

    function ka(mm, Tm) {
      let fm = Za(mm, Tm),
        Am = mm.state.selection;
      return fm ? {
        update(mm) {
          if (mm.docChanged) {
            let Tm = mm.changes.mapPos(mm.startState.doc.line(fm.line).from),
              hm = mm.state.doc.lineAt(Tm);
            fm = {
              line: hm.number,
              col: fm.col,
              off: Math.min(fm.off, hm.length)
            }, Am = Am.map(mm.changes)
          }
        },
        get(Tm, am, xm) {
          let wm = Za(mm, Tm);
          if (!wm) return Am;
          let Dm = function(mm, Tm, fm) {
            let Am = Math.min(Tm.line, fm.line),
              am = Math.max(Tm.line, fm.line),
              xm = [];
            if (Tm.off > za || fm.off > za || Tm.col < 0 || fm.col < 0) {
              let wm = Math.min(Tm.off, fm.off),
                Dm = Math.max(Tm.off, fm.off);
              for (let Tm = Am; Tm <= am; Tm++) {
                let fm = mm.doc.line(Tm);
                fm.length <= Dm && xm.push(hm.o.range(fm.from + wm, fm.to + Dm))
              }
            } else {
              let wm = Math.min(Tm.col, fm.col),
                Dm = Math.max(Tm.col, fm.col);
              for (let Tm = Am; Tm <= am; Tm++) {
                let fm = mm.doc.line(Tm),
                  Am = (0, hm.eb)(fm.text, wm, mm.tabSize, !0);
                if (Am < 0) xm.push(hm.o.cursor(fm.to));
                else {
                  let Tm = (0, hm.eb)(fm.text, Dm, mm.tabSize);
                  xm.push(hm.o.range(fm.from + Am, fm.from + Tm))
                }
              }
            }
            return xm
          }(mm.state, fm, wm);
          return Dm.length ? xm ? hm.o.create(Dm.concat(Am.mo)) : hm.o.create(Dm) : Am
        }
      } : null
    }

    function ba(mm) {
      let Tm = (null === mm || void 0 === mm ? void 0 : mm.eventFilter) || (mm => mm.altKey && 0 == mm.button);
      return bA.mouseSelectionStyle.of(((mm, fm) => Tm(fm) ? ka(mm, fm) : null))
    }
    const Sa = {
        Alt: [18, mm => !!mm.altKey],
        Control: [17, mm => !!mm.ctrlKey],
        Shift: [16, mm => !!mm.shiftKey],
        Meta: [91, mm => !!mm.metaKey]
      },
      ea = {
        style: "cursor: crosshair"
      };

    function Na() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [Tm, fm] = Sa[mm.key || "Alt"],
        hm = gT.fromClass(class {
          constructor(mm) {
            this.view = mm, this.isDown = !1
          }
          set(mm) {
            this.isDown != mm && (this.isDown = mm, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(mm) {
              this.set(mm.keyCode == Tm || fm(mm))
            },
            keyup(mm) {
              mm.keyCode != Tm && fm(mm) || this.set(!1)
            },
            mousemove(mm) {
              this.set(fm(mm))
            }
          }
        });
      return [hm, bA.contentAttributes.of((mm => {
        var Tm;
        return (null === (Tm = mm.plugin(hm)) || void 0 === Tm ? void 0 : Tm.isDown) ? ea : null
      }))]
    }
    const Ga = "-10000px";
    class Xa {
      constructor(mm, Tm, fm, hm) {
        this.facet = Tm, this.createTooltipView = fm, this.removeTooltipView = hm, this.input = mm.state.facet(Tm), this.tooltips = this.input.filter((mm => mm));
        let Am = null;
        this.tooltipViews = this.tooltips.map((mm => Am = fm(mm, Am)))
      }
      update(mm, Tm) {
        var fm;
        let hm = mm.state.facet(this.facet),
          Am = hm.filter((mm => mm));
        if (hm === this.input) {
          for (let Tm of this.tooltipViews) Tm.update && Tm.update(mm);
          return !1
        }
        let am = [],
          xm = Tm ? [] : null;
        for (let wm = 0; wm < Am.length; wm++) {
          let fm = Am[wm],
            hm = -1;
          if (fm) {
            for (let mm = 0; mm < this.tooltips.length; mm++) {
              let Tm = this.tooltips[mm];
              Tm && Tm.create == fm.create && (hm = mm)
            }
            if (hm < 0) am[wm] = this.createTooltipView(fm, wm ? am[wm - 1] : null), xm && (xm[wm] = !!fm.above);
            else {
              let fm = am[wm] = this.tooltipViews[hm];
              xm && (xm[wm] = Tm[hm]), fm.update && fm.update(mm)
            }
          }
        }
        for (let wm of this.tooltipViews) am.indexOf(wm) < 0 && (this.removeTooltipView(wm), null === (fm = wm.destroy) || void 0 === fm || fm.call(wm));
        return Tm && (xm.forEach(((mm, fm) => Tm[fm] = mm)), Tm.length = xm.length), this.input = hm, this.tooltips = Am, this.tooltipViews = am, !0
      }
    }

    function Pa(mm) {
      let Tm = mm.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: Tm.clientHeight,
        right: Tm.clientWidth
      }
    }
    const Ha = hm.s.define({
        combine: mm => {
          var Tm, fm, hm;
          return {
            position: Jm.ios ? "absolute" : (null === (Tm = mm.find((mm => mm.position))) || void 0 === Tm ? void 0 : Tm.position) || "fixed",
            parent: (null === (fm = mm.find((mm => mm.parent))) || void 0 === fm ? void 0 : fm.parent) || null,
            tooltipSpace: (null === (hm = mm.find((mm => mm.tooltipSpace))) || void 0 === hm ? void 0 : hm.tooltipSpace) || Pa
          }
        }
      }),
      ya = new WeakMap,
      Ca = gT.fromClass(class {
        constructor(mm) {
          this.view = mm, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let Tm = mm.state.facet(Ha);
          this.position = Tm.position, this.parent = Tm.parent, this.classes = mm.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Xa(mm, Ma, ((mm, Tm) => this.createTooltip(mm, Tm)), (mm => {
            this.resizeObserver && this.resizeObserver.unobserve(mm.dom), mm.dom.remove()
          })), this.above = this.manager.tooltips.map((mm => !!mm.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((mm => {
            Date.now() > this.lastTransaction - 50 && mm.length > 0 && mm[mm.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), mm.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let mm of this.manager.tooltipViews) this.intersectionObserver.observe(mm.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(mm) {
          mm.transactions.length && (this.lastTransaction = Date.now());
          let Tm = this.manager.update(mm, this.above);
          Tm && this.observeIntersection();
          let fm = Tm || mm.geometryChanged,
            hm = mm.state.facet(Ha);
          if (hm.position != this.position && !this.madeAbsolute) {
            this.position = hm.position;
            for (let mm of this.manager.tooltipViews) mm.dom.style.position = this.position;
            fm = !0
          }
          if (hm.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = hm.parent, this.createContainer();
            for (let mm of this.manager.tooltipViews) this.container.appendChild(mm.dom);
            fm = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          fm && this.maybeMeasure()
        }
        createTooltip(mm, Tm) {
          let fm = mm.create(this.view),
            hm = Tm ? Tm.dom : null;
          if (fm.dom.classList.add("cm-tooltip"), mm.arrow && !fm.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let mm = document.createElement("div");
            mm.className = "cm-tooltip-arrow", fm.dom.appendChild(mm)
          }
          return fm.dom.style.position = this.position, fm.dom.style.top = Ga, fm.dom.style.left = "0px", this.container.insertBefore(fm.dom, hm), fm.mount && fm.mount(this.view), this.resizeObserver && this.resizeObserver.observe(fm.dom), fm
        }
        destroy() {
          var mm, Tm, fm;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let hm of this.manager.tooltipViews) hm.dom.remove(), null === (mm = hm.destroy) || void 0 === mm || mm.call(hm);
          this.parent && this.container.remove(), null === (Tm = this.resizeObserver) || void 0 === Tm || Tm.disconnect(), null === (fm = this.intersectionObserver) || void 0 === fm || fm.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let mm = 1,
            Tm = 1,
            fm = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: mm
            } = this.manager.tooltipViews[0];
            if (Jm.safari) {
              let Tm = mm.getBoundingClientRect();
              fm = Math.abs(Tm.top + 1e4) > 1 || Math.abs(Tm.left) > 1
            } else fm = !!mm.offsetParent && mm.offsetParent != this.container.ownerDocument.body
          }
          if (fm || "absolute" == this.position)
            if (this.parent) {
              let fm = this.parent.getBoundingClientRect();
              fm.width && fm.height && (mm = fm.width / this.parent.offsetWidth, Tm = fm.height / this.parent.offsetHeight)
            } else({
              scaleX: mm,
              scaleY: Tm
            } = this.view.viewState);
          let hm = this.view.scrollDOM.getBoundingClientRect(),
            Am = Df(this.view);
          return {
            visible: {
              left: hm.left + Am.left,
              top: hm.top + Am.top,
              right: hm.right - Am.right,
              bottom: hm.bottom - Am.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((mm, Tm) => {
              let fm = this.manager.tooltipViews[Tm];
              return fm.getCoords ? fm.getCoords(mm.pos) : this.view.coordsAtPos(mm.pos)
            })),
            size: this.manager.tooltipViews.map((mm => {
              let {
                dom: Tm
              } = mm;
              return Tm.getBoundingClientRect()
            })),
            space: this.view.state.facet(Ha).tooltipSpace(this.view),
            scaleX: mm,
            scaleY: Tm,
            makeAbsolute: fm
          }
        }
        writeMeasure(mm) {
          var Tm;
          if (mm.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let mm of this.manager.tooltipViews) mm.dom.style.position = "absolute"
          }
          let {
            visible: fm,
            space: hm,
            scaleX: Am,
            scaleY: am
          } = mm, xm = [];
          for (let wm = 0; wm < this.manager.tooltips.length; wm++) {
            let Dm = this.manager.tooltips[wm],
              im = this.manager.tooltipViews[wm],
              {
                dom: Rm
              } = im,
              pm = mm.pos[wm],
              Em = mm.size[wm];
            if (!pm || !1 !== Dm.clip && (pm.bottom <= Math.max(fm.top, hm.top) || pm.top >= Math.min(fm.bottom, hm.bottom) || pm.right < Math.max(fm.left, hm.left) - .1 || pm.left > Math.min(fm.right, hm.right) + .1)) {
              Rm.style.top = Ga;
              continue
            }
            let om = Dm.arrow ? im.dom.querySelector(".cm-tooltip-arrow") : null,
              Om = om ? 7 : 0,
              Ym = Em.right - Em.left,
              qm = null !== (Tm = ya.get(im)) && void 0 !== Tm ? Tm : Em.bottom - Em.top,
              jm = im.offset || la,
              Vm = this.view.textDirection == RT.LTR,
              Im = Em.width > hm.right - hm.left ? Vm ? hm.left : hm.right - Em.width : Vm ? Math.max(hm.left, Math.min(pm.left - (om ? 14 : 0) + jm.x, hm.right - Ym)) : Math.min(Math.max(hm.left, pm.left - Ym + (om ? 14 : 0) - jm.x), hm.right - Ym),
              Km = this.above[wm];
            !Dm.strictSide && (Km ? pm.top - qm - Om - jm.y < hm.top : pm.bottom + qm + Om + jm.y > hm.bottom) && Km == hm.bottom - pm.bottom > pm.top - hm.top && (Km = this.above[wm] = !Km);
            let Qm = (Km ? pm.top - hm.top : hm.bottom - pm.bottom) - Om;
            if (Qm < qm && !1 !== im.resize) {
              if (Qm < this.view.defaultLineHeight) {
                Rm.style.top = Ga;
                continue
              }
              ya.set(im, qm), Rm.style.height = (qm = Qm) / am + "px"
            } else Rm.style.height && (Rm.style.height = "");
            let nm = Km ? pm.top - qm - Om - jm.y : pm.bottom + Om + jm.y,
              Jm = Im + Ym;
            if (!0 !== im.overlap)
              for (let mm of xm) mm.left < Jm && mm.right > Im && mm.top < nm + qm && mm.bottom > nm && (nm = Km ? mm.top - qm - 2 - Om : mm.bottom + Om + 2);
            if ("absolute" == this.position ? (Rm.style.top = (nm - mm.parent.top) / am + "px", ra(Rm, (Im - mm.parent.left) / Am)) : (Rm.style.top = nm / am + "px", ra(Rm, Im / Am)), om) {
              let mm = pm.left + (Vm ? jm.x : -jm.x) - (Im + 14 - 7);
              om.style.left = mm / Am + "px"
            }!0 !== im.overlap && xm.push({
              left: Im,
              top: nm,
              right: Jm,
              bottom: nm + qm
            }), Rm.classList.toggle("cm-tooltip-above", Km), Rm.classList.toggle("cm-tooltip-below", !Km), im.positioned && im.positioned(mm.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let mm of this.manager.tooltipViews) mm.dom.style.top = Ga
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function ra(mm, Tm) {
      let fm = parseInt(mm.style.left, 10);
      (isNaN(fm) || Math.abs(Tm - fm) > 1) && (mm.style.left = Tm + "px")
    }
    const sa = bA.baseTheme({
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
      la = {
        x: 0,
        y: 0
      },
      Ma = hm.s.define({
        enables: [Ca, sa]
      }),
      ua = hm.s.define({
        combine: mm => mm.reduce(((mm, Tm) => mm.concat(Tm)), [])
      });
    class Ba {
      static create(mm) {
        return new Ba(mm)
      }
      constructor(mm) {
        this.view = mm, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Xa(mm, ua, ((mm, Tm) => this.createHostedView(mm, Tm)), (mm => mm.dom.remove()))
      }
      createHostedView(mm, Tm) {
        let fm = mm.create(this.view);
        return fm.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(fm.dom, Tm ? Tm.dom.nextSibling : this.dom.firstChild), this.mounted && fm.mount && fm.mount(this.view), fm
      }
      mount(mm) {
        for (let Tm of this.manager.tooltipViews) Tm.mount && Tm.mount(mm);
        this.mounted = !0
      }
      positioned(mm) {
        for (let Tm of this.manager.tooltipViews) Tm.positioned && Tm.positioned(mm)
      }
      update(mm) {
        this.manager.update(mm)
      }
      destroy() {
        var mm;
        for (let Tm of this.manager.tooltipViews) null === (mm = Tm.destroy) || void 0 === mm || mm.call(Tm)
      }
      passProp(mm) {
        let Tm;
        for (let fm of this.manager.tooltipViews) {
          let hm = fm[mm];
          if (void 0 !== hm)
            if (void 0 === Tm) Tm = hm;
            else if (Tm !== hm) return
        }
        return Tm
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
    const La = Ma.compute([ua], (mm => {
      let Tm = mm.facet(ua);
      return 0 === Tm.length ? null : {
        pos: Math.min(...Tm.map((mm => mm.pos))),
        end: Math.max(...Tm.map((mm => {
          var Tm;
          return null !== (Tm = mm.end) && void 0 !== Tm ? Tm : mm.pos
        }))),
        create: Ba.create,
        above: Tm[0].above,
        arrow: Tm.some((mm => mm.arrow))
      }
    }));
    class va {
      constructor(mm, Tm, fm, hm, Am) {
        this.view = mm, this.source = Tm, this.field = fm, this.setHover = hm, this.hoverTime = Am, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: mm.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), mm.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), mm.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let mm = Date.now() - this.lastMove.time;
        mm < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - mm) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: mm,
          lastMove: Tm
        } = this, fm = mm.docView.tile.nearest(Tm.target);
        if (!fm) return;
        let hm, Am = 1;
        if (fm.isWidget()) hm = fm.posAtStart;
        else {
          if (hm = mm.posAtCoords(Tm), null == hm) return;
          let fm = mm.coordsAtPos(hm);
          if (!fm || Tm.y < fm.top || Tm.y > fm.bottom || Tm.x < fm.left - mm.defaultCharacterWidth || Tm.x > fm.right + mm.defaultCharacterWidth) return;
          let am = mm.bidiSpans(mm.state.doc.lineAt(hm)).find((mm => mm.from <= hm && mm.to >= hm)),
            xm = am && am.dir == RT.RTL ? -1 : 1;
          Am = Tm.x < fm.left ? -xm : xm
        }
        let am = this.source(mm, hm, Am);
        if (null === am || void 0 === am ? void 0 : am.then) {
          let Tm = this.pending = {
            pos: hm
          };
          am.then((fm => {
            this.pending == Tm && (this.pending = null, !fm || Array.isArray(fm) && !fm.length || mm.dispatch({
              effects: this.setHover.of(Array.isArray(fm) ? fm : [fm])
            }))
          }), (Tm => vT(mm.state, Tm, "hover tooltip")))
        } else !am || Array.isArray(am) && !am.length || mm.dispatch({
          effects: this.setHover.of(Array.isArray(am) ? am : [am])
        })
      }
      get tooltip() {
        let mm = this.view.plugin(Ca),
          Tm = mm ? mm.manager.tooltips.findIndex((mm => mm.create == Ba.create)) : -1;
        return Tm > -1 ? mm.manager.tooltipViews[Tm] : null
      }
      mousemove(mm) {
        var Tm, fm;
        this.lastMove = {
          x: mm.clientX,
          y: mm.clientY,
          target: mm.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: hm,
          tooltip: Am
        } = this;
        if (hm.length && Am && ! function(mm, Tm) {
            let fm, {
              left: hm,
              right: Am,
              top: am,
              bottom: xm
            } = mm.getBoundingClientRect();
            if (fm = mm.querySelector(".cm-tooltip-arrow")) {
              let mm = fm.getBoundingClientRect();
              am = Math.min(mm.top, am), xm = Math.max(mm.bottom, xm)
            }
            return Tm.clientX >= hm - ta && Tm.clientX <= Am + ta && Tm.clientY >= am - ta && Tm.clientY <= xm + ta
          }(Am.dom, mm) || this.pending) {
          let {
            pos: Am
          } = hm[0] || this.pending, am = null !== (fm = null === (Tm = hm[0]) || void 0 === Tm ? void 0 : Tm.end) && void 0 !== fm ? fm : Am;
          (Am == am ? this.view.posAtCoords(this.lastMove) == Am : function(mm, Tm, fm, hm, Am) {
            let am = mm.scrollDOM.getBoundingClientRect(),
              xm = mm.documentTop + mm.documentPadding.top + mm.contentHeight;
            if (am.left > hm || am.right < hm || am.top > Am || Math.min(am.bottom, xm) < Am) return !1;
            let wm = mm.posAtCoords({
              x: hm,
              y: Am
            }, !1);
            return wm >= Tm && wm <= fm
          }(this.view, Am, am, mm.clientX, mm.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(mm) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: Tm
        } = this;
        if (Tm.length) {
          let {
            tooltip: Tm
          } = this;
          Tm && Tm.dom.contains(mm.relatedTarget) ? this.watchTooltipLeave(Tm.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(mm) {
        let Tm = fm => {
          mm.removeEventListener("mouseleave", Tm), this.active.length && !this.view.dom.contains(fm.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        mm.addEventListener("mouseleave", Tm)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const ta = 4;

    function Ua(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        fm = hm.J.define(),
        Am = hm.M.define({
          create: () => [],
          update(mm, Am) {
            if (mm.length && (Tm.hideOnChange && (Am.docChanged || Am.selection) ? mm = [] : Tm.hideOn && (mm = mm.filter((mm => !Tm.hideOn(Am, mm)))), Am.docChanged)) {
              let Tm = [];
              for (let fm of mm) {
                let mm = Am.changes.mapPos(fm.pos, -1, hm.u.TrackDel);
                if (null != mm) {
                  let hm = Object.assign(Object.create(null), fm);
                  hm.pos = mm, null != hm.end && (hm.end = Am.changes.mapPos(hm.end)), Tm.push(hm)
                }
              }
              mm = Tm
            }
            for (let Tm of Am.effects) Tm.is(fm) && (mm = Tm.value), Tm.is(ga) && (mm = []);
            return mm
          },
          provide: mm => ua.from(mm)
        });
      return {
        active: Am,
        extension: [Am, gT.define((hm => new va(hm, mm, Am, fm, Tm.hoverTime || 300))), La]
      }
    }

    function da(mm, Tm) {
      let fm = mm.plugin(Ca);
      if (!fm) return null;
      let hm = fm.manager.tooltips.indexOf(Tm);
      return hm < 0 ? null : fm.manager.tooltipViews[hm]
    }
    const ga = hm.J.define();
    const Wa = hm.s.define({
      combine(mm) {
        let Tm, fm;
        for (let hm of mm) Tm = Tm || hm.topContainer, fm = fm || hm.bottomContainer;
        return {
          topContainer: Tm,
          bottomContainer: fm
        }
      }
    });

    function Fa(mm, Tm) {
      let fm = mm.plugin(mx),
        hm = fm ? fm.specs.indexOf(Tm) : -1;
      return hm > -1 ? fm.panels[hm] : null
    }
    const mx = gT.fromClass(class {
      constructor(mm) {
        this.input = mm.state.facet(hx), this.specs = this.input.filter((mm => mm)), this.panels = this.specs.map((Tm => Tm(mm)));
        let Tm = mm.state.facet(Wa);
        this.top = new Tx(mm, !0, Tm.topContainer), this.bottom = new Tx(mm, !1, Tm.bottomContainer), this.top.sync(this.panels.filter((mm => mm.top))), this.bottom.sync(this.panels.filter((mm => !mm.top)));
        for (let fm of this.panels) fm.dom.classList.add("cm-panel"), fm.mount && fm.mount()
      }
      update(mm) {
        let Tm = mm.state.facet(Wa);
        this.top.container != Tm.topContainer && (this.top.sync([]), this.top = new Tx(mm.view, !0, Tm.topContainer)), this.bottom.container != Tm.bottomContainer && (this.bottom.sync([]), this.bottom = new Tx(mm.view, !1, Tm.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let fm = mm.state.facet(hx);
        if (fm != this.input) {
          let Tm = fm.filter((mm => mm)),
            hm = [],
            Am = [],
            am = [],
            xm = [];
          for (let fm of Tm) {
            let Tm, wm = this.specs.indexOf(fm);
            wm < 0 ? (Tm = fm(mm.view), xm.push(Tm)) : (Tm = this.panels[wm], Tm.update && Tm.update(mm)), hm.push(Tm), (Tm.top ? Am : am).push(Tm)
          }
          this.specs = Tm, this.panels = hm, this.top.sync(Am), this.bottom.sync(am);
          for (let mm of xm) mm.dom.classList.add("cm-panel"), mm.mount && mm.mount()
        } else
          for (let hm of this.panels) hm.update && hm.update(mm)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: mm => bA.scrollMargins.of((Tm => {
        let fm = Tm.plugin(mm);
        return fm && {
          top: fm.top.scrollMargin(),
          bottom: fm.bottom.scrollMargin()
        }
      }))
    });
    class Tx {
      constructor(mm, Tm, fm) {
        this.view = mm, this.top = Tm, this.container = fm, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(mm) {
        for (let Tm of this.panels) Tm.destroy && mm.indexOf(Tm) < 0 && Tm.destroy();
        this.panels = mm, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let mm = this.container || this.view.dom;
          mm.insertBefore(this.dom, this.top ? mm.firstChild : null)
        }
        let mm = this.dom.firstChild;
        for (let Tm of this.panels)
          if (Tm.dom.parentNode == this.dom) {
            for (; mm != Tm.dom;) mm = fx(mm);
            mm = mm.nextSibling
          } else this.dom.insertBefore(Tm.dom, mm);
        for (; mm;) mm = fx(mm)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let mm of this.classes.split(" ")) mm && this.container.classList.remove(mm);
          for (let mm of (this.classes = this.view.themeClasses).split(" ")) mm && this.container.classList.add(mm)
        }
      }
    }

    function fx(mm) {
      let Tm = mm.nextSibling;
      return mm.remove(), Tm
    }
    const hx = hm.s.define({
      enables: mx
    });

    function Ax(mm, Tm) {
      let fm, Am = new Promise((mm => fm = mm)),
        am = mm => function(mm, Tm, fm) {
          let hm = Tm.content ? Tm.content(mm, (() => xm(null))) : null;
          if (!hm) {
            if (hm = (0, pm.c)("form"), Tm.input) {
              let mm = (0, pm.c)("input", Tm.input);
              /^(text|password|number|email|tel|url)$/.test(mm.type) && mm.classList.add("cm-textfield"), mm.name || (mm.name = "input"), hm.appendChild((0, pm.c)("label", (Tm.label || "") + ": ", mm))
            } else hm.appendChild(document.createTextNode(Tm.label || ""));
            hm.appendChild(document.createTextNode(" ")), hm.appendChild((0, pm.c)("button", {
              class: "cm-button",
              type: "submit"
            }, Tm.submitLabel || "OK"))
          }
          let Am = "FORM" == hm.nodeName ? [hm] : hm.querySelectorAll("form");
          for (let wm = 0; wm < Am.length; wm++) {
            let mm = Am[wm];
            mm.addEventListener("keydown", (Tm => {
              27 == Tm.keyCode ? (Tm.preventDefault(), xm(null)) : 13 == Tm.keyCode && (Tm.preventDefault(), xm(mm))
            })), mm.addEventListener("submit", (Tm => {
              Tm.preventDefault(), xm(mm)
            }))
          }
          let am = (0, pm.c)("div", hm, (0, pm.c)("button", {
            onclick: () => xm(null),
            "aria-label": mm.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          Tm.class && (am.className = Tm.class);

          function xm(Tm) {
            am.contains(am.ownerDocument.activeElement) && mm.focus(), fm(Tm)
          }
          return am.classList.add("cm-dialog"), {
            dom: am,
            top: Tm.top,
            mount: () => {
              if (Tm.focus) {
                let mm;
                mm = "string" == typeof Tm.focus ? hm.querySelector(Tm.focus) : hm.querySelector("input") || hm.querySelector("button"), mm && "select" in mm ? mm.select() : mm && "focus" in mm && mm.focus()
              }
            }
          }
        }(mm, Tm, fm);
      mm.state.field(ax, !1) ? mm.dispatch({
        effects: xx.of(am)
      }) : mm.dispatch({
        effects: hm.J.appendConfig.of(ax.init((() => [am])))
      });
      let xm = wx.of(am);
      return {
        close: xm,
        result: Am.then((Tm => ((mm.win.queueMicrotask || (Tm => mm.win.setTimeout(Tm, 10)))((() => {
          mm.state.field(ax).indexOf(am) > -1 && mm.dispatch({
            effects: xm
          })
        })), Tm)))
      }
    }
    const ax = hm.M.define({
        create: () => [],
        update(mm, Tm) {
          for (let fm of Tm.effects) fm.is(xx) ? mm = [fm.value].concat(mm) : fm.is(wx) && (mm = mm.filter((mm => mm != fm.value)));
          return mm
        },
        provide: mm => hx.computeN([mm], (Tm => Tm.field(mm)))
      }),
      xx = hm.J.define(),
      wx = hm.J.define();
    class Dx extends hm.G {
      compare(mm) {
        return this == mm || this.constructor == mm.constructor && this.eq(mm)
      }
      eq(mm) {
        return !1
      }
      destroy(mm) {}
    }
    Dx.prototype.elementClass = "", Dx.prototype.toDOM = void 0, Dx.prototype.mapMode = hm.u.TrackBefore, Dx.prototype.startSide = Dx.prototype.endSide = -1, Dx.prototype.point = !0;
    const ix = hm.s.define(),
      Rx = hm.s.define(),
      px = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => hm.C.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Ex = hm.s.define();

    function ox(mm) {
      return [Yx(), Ex.of({
        ...px,
        ...mm
      })]
    }
    const Ox = hm.s.define({
      combine: mm => mm.some((mm => mm))
    });

    function Yx(mm) {
      let Tm = [qx];
      return mm && !1 === mm.fixed && Tm.push(Ox.of(!0)), Tm
    }
    const qx = gT.fromClass(class {
      constructor(mm) {
        this.view = mm, this.domAfter = null, this.prevViewport = mm.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = mm.state.facet(Ex).map((Tm => new Kx(mm, Tm))), this.fixed = !mm.state.facet(Ox);
        for (let Tm of this.gutters) "after" == Tm.config.side ? this.getDOMAfter().appendChild(Tm.dom) : this.dom.appendChild(Tm.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), mm.scrollDOM.insertBefore(this.dom, mm.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(mm) {
        if (this.updateGutters(mm)) {
          let Tm = this.prevViewport,
            fm = mm.view.viewport,
            hm = Math.min(Tm.to, fm.to) - Math.max(Tm.from, fm.from);
          this.syncGutters(hm < .8 * (fm.to - fm.from))
        }
        if (mm.geometryChanged) {
          let mm = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = mm, this.domAfter && (this.domAfter.style.minHeight = mm)
        }
        this.view.state.facet(Ox) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = mm.view.viewport
      }
      syncGutters(mm) {
        let Tm = this.dom.nextSibling;
        mm && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let fm = hm.C.iter(this.view.state.facet(ix), this.view.viewport.from),
          Am = [],
          am = this.gutters.map((mm => new Ix(mm, this.view.viewport, -this.view.documentPadding.top)));
        for (let hm of this.view.viewportLineBlocks)
          if (Am.length && (Am = []), Array.isArray(hm.type)) {
            let mm = !0;
            for (let Tm of hm.type)
              if (Tm.type == em.Text && mm) {
                Vx(fm, Am, Tm.from);
                for (let mm of am) mm.line(this.view, Tm, Am);
                mm = !1
              } else if (Tm.widget)
              for (let mm of am) mm.widget(this.view, Tm)
          } else if (hm.type == em.Text) {
          Vx(fm, Am, hm.from);
          for (let mm of am) mm.line(this.view, hm, Am)
        } else if (hm.widget)
          for (let mm of am) mm.widget(this.view, hm);
        for (let hm of am) hm.finish();
        mm && (this.view.scrollDOM.insertBefore(this.dom, Tm), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(mm) {
        let Tm = mm.startState.facet(Ex),
          fm = mm.state.facet(Ex),
          Am = mm.docChanged || mm.heightChanged || mm.viewportChanged || !hm.C.eq(mm.startState.facet(ix), mm.state.facet(ix), mm.view.viewport.from, mm.view.viewport.to);
        if (Tm == fm)
          for (let hm of this.gutters) hm.update(mm) && (Am = !0);
        else {
          Am = !0;
          let hm = [];
          for (let Am of fm) {
            let fm = Tm.indexOf(Am);
            fm < 0 ? hm.push(new Kx(this.view, Am)) : (this.gutters[fm].update(mm), hm.push(this.gutters[fm]))
          }
          for (let mm of this.gutters) mm.dom.remove(), hm.indexOf(mm) < 0 && mm.destroy();
          for (let mm of hm) "after" == mm.config.side ? this.getDOMAfter().appendChild(mm.dom) : this.dom.appendChild(mm.dom);
          this.gutters = hm
        }
        return Am
      }
      destroy() {
        for (let mm of this.gutters) mm.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: mm => bA.scrollMargins.of((Tm => {
        let fm = Tm.plugin(mm);
        if (!fm || 0 == fm.gutters.length || !fm.fixed) return null;
        let hm = fm.dom.offsetWidth * Tm.scaleX,
          Am = fm.domAfter ? fm.domAfter.offsetWidth * Tm.scaleX : 0;
        return Tm.textDirection == RT.LTR ? {
          left: hm,
          right: Am
        } : {
          right: hm,
          left: Am
        }
      }))
    });

    function jx(mm) {
      return Array.isArray(mm) ? mm : [mm]
    }

    function Vx(mm, Tm, fm) {
      for (; mm.value && mm.from <= fm;) mm.from == fm && Tm.push(mm.value), mm.next()
    }
    class Ix {
      constructor(mm, Tm, fm) {
        this.gutter = mm, this.height = fm, this.i = 0, this.cursor = hm.C.iter(mm.markers, Tm.from)
      }
      addElement(mm, Tm, fm) {
        let {
          gutter: hm
        } = this, Am = (Tm.top - this.height) / mm.scaleY, am = Tm.height / mm.scaleY;
        if (this.i == hm.elements.length) {
          let Tm = new Qx(mm, am, Am, fm);
          hm.elements.push(Tm), hm.dom.appendChild(Tm.dom)
        } else hm.elements[this.i].update(mm, am, Am, fm);
        this.height = Tm.bottom, this.i++
      }
      line(mm, Tm, fm) {
        let hm = [];
        Vx(this.cursor, hm, Tm.from), fm.length && (hm = hm.concat(fm));
        let Am = this.gutter.config.lineMarker(mm, Tm, hm);
        Am && hm.unshift(Am);
        let am = this.gutter;
        (0 != hm.length || am.config.renderEmptyElements) && this.addElement(mm, Tm, hm)
      }
      widget(mm, Tm) {
        let fm = this.gutter.config.widgetMarker(mm, Tm.widget, Tm),
          hm = fm ? [fm] : null;
        for (let Am of mm.state.facet(Rx)) {
          let fm = Am(mm, Tm.widget, Tm);
          fm && (hm || (hm = [])).push(fm)
        }
        hm && this.addElement(mm, Tm, hm)
      }
      finish() {
        let mm = this.gutter;
        for (; mm.elements.length > this.i;) {
          let Tm = mm.elements.pop();
          mm.dom.removeChild(Tm.dom), Tm.destroy()
        }
      }
    }
    class Kx {
      constructor(mm, Tm) {
        this.view = mm, this.config = Tm, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let fm in Tm.domEventHandlers) this.dom.addEventListener(fm, (hm => {
          let Am, am = hm.target;
          if (am != this.dom && this.dom.contains(am)) {
            for (; am.parentNode != this.dom;) am = am.parentNode;
            let mm = am.getBoundingClientRect();
            Am = (mm.top + mm.bottom) / 2
          } else Am = hm.clientY;
          let xm = mm.lineBlockAtHeight(Am - mm.documentTop);
          Tm.domEventHandlers[fm](mm, xm, hm) && hm.preventDefault()
        }));
        this.markers = jx(Tm.markers(mm)), Tm.initialSpacer && (this.spacer = new Qx(mm, 0, 0, [Tm.initialSpacer(mm)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(mm) {
        let Tm = this.markers;
        if (this.markers = jx(this.config.markers(mm.view)), this.spacer && this.config.updateSpacer) {
          let Tm = this.config.updateSpacer(this.spacer.markers[0], mm);
          Tm != this.spacer.markers[0] && this.spacer.update(mm.view, 0, 0, [Tm])
        }
        let fm = mm.view.viewport;
        return !hm.C.eq(this.markers, Tm, fm.from, fm.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(mm)
      }
      destroy() {
        for (let mm of this.elements) mm.destroy()
      }
    }
    class Qx {
      constructor(mm, Tm, fm, hm) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(mm, Tm, fm, hm)
      }
      update(mm, Tm, fm, hm) {
        this.height != Tm && (this.height = Tm, this.dom.style.height = Tm + "px"), this.above != fm && (this.dom.style.marginTop = (this.above = fm) ? fm + "px" : ""),
          function(mm, Tm) {
            if (mm.length != Tm.length) return !1;
            for (let fm = 0; fm < mm.length; fm++)
              if (!mm[fm].compare(Tm[fm])) return !1;
            return !0
          }(this.markers, hm) || this.setMarkers(mm, hm)
      }
      setMarkers(mm, Tm) {
        let fm = "cm-gutterElement",
          hm = this.dom.firstChild;
        for (let Am = 0, am = 0;;) {
          let xm = am,
            wm = Am < Tm.length ? Tm[Am++] : null,
            Dm = !1;
          if (wm) {
            let mm = wm.elementClass;
            mm && (fm += " " + mm);
            for (let Tm = am; Tm < this.markers.length; Tm++)
              if (this.markers[Tm].compare(wm)) {
                xm = Tm, Dm = !0;
                break
              }
          } else xm = this.markers.length;
          for (; am < xm;) {
            let mm = this.markers[am++];
            if (mm.toDOM) {
              mm.destroy(hm);
              let Tm = hm.nextSibling;
              hm.remove(), hm = Tm
            }
          }
          if (!wm) break;
          wm.toDOM && (Dm ? hm = hm.nextSibling : this.dom.insertBefore(wm.toDOM(mm), hm)), Dm && am++
        }
        this.dom.className = fm, this.markers = Tm
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const nx = hm.s.define(),
      Jx = hm.s.define(),
      cx = hm.s.define({
        combine: mm => (0, hm.Y)(mm, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(mm, Tm) {
            let fm = Object.assign({}, mm);
            for (let hm in Tm) {
              let mm = fm[hm],
                Am = Tm[hm];
              fm[hm] = mm ? (Tm, fm, hm) => mm(Tm, fm, hm) || Am(Tm, fm, hm) : Am
            }
            return fm
          }
        })
      });
    class zx extends Dx {
      constructor(mm) {
        super(), this.number = mm
      }
      eq(mm) {
        return this.number == mm.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function Zx(mm, Tm) {
      return mm.state.facet(cx).formatNumber(Tm, mm.state)
    }
    const kx = Ex.compute([cx], (mm => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: mm => mm.state.facet(nx),
      lineMarker: (mm, Tm, fm) => fm.some((mm => mm.toDOM)) ? null : new zx(Zx(mm, mm.state.doc.lineAt(Tm.from).number)),
      widgetMarker: (mm, Tm, fm) => {
        for (let hm of mm.state.facet(Jx)) {
          let Am = hm(mm, Tm, fm);
          if (Am) return Am
        }
        return null
      },
      lineMarkerChange: mm => mm.startState.facet(cx) != mm.state.facet(cx),
      initialSpacer: mm => new zx(Zx(mm, Sx(mm.state.doc.lines))),
      updateSpacer(mm, Tm) {
        let fm = Zx(Tm.view, Sx(Tm.view.state.doc.lines));
        return fm == mm.number ? mm : new zx(fm)
      },
      domEventHandlers: mm.facet(cx).domEventHandlers,
      side: "before"
    })));

    function bx() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [cx.of(mm), Yx(), kx]
    }

    function Sx(mm) {
      let Tm = 9;
      for (; Tm < mm;) Tm = 10 * Tm + 9;
      return Tm
    }
    const ex = new class extends Dx {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      Nx = ix.compute(["selection"], (mm => {
        let Tm = [],
          fm = -1;
        for (let hm of mm.selection.mo) {
          let Am = mm.doc.lineAt(hm.head).from;
          Am > fm && (fm = Am, Tm.push(ex.range(Am)))
        }
        return hm.C.of(Tm)
      }));

    function Gx() {
      return Nx
    }
  },
  41379: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      f: () => om,
      h: () => xm,
      i: () => Rm,
      j: () => im,
      k: () => Gm,
      n: () => Pm,
      q: () => Xm,
      t: () => Om
    });
    const hm = 1024;
    let Am = 0;
    class am {
      constructor(mm, Tm) {
        this.from = mm, this.to = Tm
      }
    }
    class xm {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = Am++, this.perNode = !!mm.perNode, this.deserialize = mm.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = mm.combine || null
      }
      add(mm) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof mm && (mm = im.match(mm)), Tm => {
          let fm = mm(Tm);
          return void 0 === fm ? null : [this, fm]
        }
      }
    }
    xm.closedBy = new xm({
      deserialize: mm => mm.split(" ")
    }), xm.openedBy = new xm({
      deserialize: mm => mm.split(" ")
    }), xm.group = new xm({
      deserialize: mm => mm.split(" ")
    }), xm.isolate = new xm({
      deserialize: mm => {
        if (mm && "rtl" != mm && "ltr" != mm && "auto" != mm) throw new RangeError("Invalid value for isolate: " + mm);
        return mm || "auto"
      }
    }), xm.contextHash = new xm({
      perNode: !0
    }), xm.lookAhead = new xm({
      perNode: !0
    }), xm.mounted = new xm({
      perNode: !0
    });
    class wm {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = mm, this.overlay = Tm, this.parser = fm, this.bracketed = hm
      }
      static get(mm) {
        return mm && mm.props && mm.props[xm.mounted.id]
      }
    }
    const Dm = Object.create(null);
    class im {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = mm, this.props = Tm, this.id = fm, this.flags = hm
      }
      static define(mm) {
        let Tm = mm.props && mm.props.length ? Object.create(null) : Dm,
          fm = (mm.top ? 1 : 0) | (mm.skipped ? 2 : 0) | (mm.error ? 4 : 0) | (null == mm.name ? 8 : 0),
          hm = new im(mm.name || "", Tm, mm.id, fm);
        if (mm.props)
          for (let Am of mm.props)
            if (Array.isArray(Am) || (Am = Am(hm)), Am) {
              if (Am[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              Tm[Am[0].id] = Am[1]
            } return hm
      }
      prop(mm) {
        return this.props[mm.id]
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
      is(mm) {
        if ("string" == typeof mm) {
          if (this.name == mm) return !0;
          let Tm = this.prop(xm.group);
          return !!Tm && Tm.indexOf(mm) > -1
        }
        return this.id == mm
      }
      static match(mm) {
        let Tm = Object.create(null);
        for (let fm in mm)
          for (let hm of fm.split(" ")) Tm[hm] = mm[fm];
        return mm => {
          for (let fm = mm.prop(xm.group), hm = -1; hm < (fm ? fm.length : 0); hm++) {
            let Am = Tm[hm < 0 ? mm.name : fm[hm]];
            if (Am) return Am
          }
        }
      }
    }
    im.none = new im("", Object.create(null), 0, 8);
    class Rm {
      constructor(mm) {
        this.types = mm;
        for (let Tm = 0; Tm < mm.length; Tm++)
          if (mm[Tm].id != Tm) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let mm = [];
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        for (let Am of this.types) {
          let Tm = null;
          for (let mm of fm) {
            let fm = mm(Am);
            if (fm) {
              Tm || (Tm = Object.assign({}, Am.props));
              let mm = fm[1],
                hm = fm[0];
              hm.combine && hm.id in Tm && (mm = hm.combine(Tm[hm.id], mm)), Tm[hm.id] = mm
            }
          }
          mm.push(Tm ? new im(Am.name, Tm, Am.id, Am.flags) : Am)
        }
        return new Rm(mm)
      }
    }
    const pm = new WeakMap,
      Em = new WeakMap;
    var om;
    ! function(mm) {
      mm[mm.ExcludeBuffers = 1] = "ExcludeBuffers", mm[mm.IncludeAnonymous = 2] = "IncludeAnonymous", mm[mm.IgnoreMounts = 4] = "IgnoreMounts", mm[mm.IgnoreOverlays = 8] = "IgnoreOverlays", mm[mm.EnterBracketed = 16] = "EnterBracketed"
    }(om || (om = {}));
    class Om {
      constructor(mm, Tm, fm, hm, Am) {
        if (this.type = mm, this.children = Tm, this.positions = fm, this.length = hm, this.props = null, Am && Am.length) {
          this.props = Object.create(null);
          for (let [mm, Tm] of Am) this.props["number" == typeof mm ? mm : mm.id] = Tm
        }
      }
      toString() {
        let mm = wm.get(this);
        if (mm && !mm.overlay) return mm.tree.toString();
        let Tm = "";
        for (let fm of this.children) {
          let mm = fm.toString();
          mm && (Tm && (Tm += ","), Tm += mm)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (Tm.length ? "(" + Tm + ")" : "") : Tm
      }
      cursor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new km(this.topNode, mm)
      }
      cursorAt(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = pm.get(this) || this.topNode,
          hm = new km(fm);
        return hm.moveTo(mm, Tm), pm.set(this, hm._tree), hm
      }
      get topNode() {
        return new Km(this, 0, 0, null)
      }
      resolve(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = Vm(pm.get(this) || this.topNode, mm, Tm, !1);
        return pm.set(this, fm), fm
      }
      resolveInner(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = Vm(Em.get(this) || this.topNode, mm, Tm, !0);
        return Em.set(this, fm), fm
      }
      resolveStack(mm) {
        return function(mm, Tm, fm) {
          let hm = mm.resolveInner(Tm, fm),
            Am = null;
          for (let am = hm instanceof Km ? hm : hm.context.parent; am; am = am.parent)
            if (am.index < 0) {
              let mm = am.parent;
              (Am || (Am = [hm])).push(mm.resolve(Tm, fm)), am = mm
            } else {
              let mm = wm.get(am.tree);
              if (mm && mm.overlay && mm.overlay[0].from <= Tm && mm.overlay[mm.overlay.length - 1].to >= Tm) {
                let xm = new Km(mm.tree, mm.overlay[0].from + am.from, -1, am);
                (Am || (Am = [hm])).push(Vm(xm, Tm, fm, !1))
              }
            } return Am ? zm(Am) : hm
        }(this, mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(mm) {
        let {
          enter: Tm,
          leave: fm,
          from: hm = 0,
          to: Am = this.length
        } = mm, am = mm.mode || 0, xm = (am & om.IncludeAnonymous) > 0;
        for (let wm = this.cursor(am | om.IncludeAnonymous);;) {
          let mm = !1;
          if (wm.from <= Am && wm.to >= hm && (!xm && wm.type.isAnonymous || !1 !== Tm(wm))) {
            if (wm.firstChild()) continue;
            mm = !0
          }
          for (; mm && fm && (xm || !wm.type.isAnonymous) && fm(wm), !wm.nextSibling();) {
            if (!wm.parent()) return;
            mm = !0
          }
        }
      }
      prop(mm) {
        return mm.perNode ? this.props ? this.props[mm.id] : void 0 : this.type.prop(mm)
      }
      get propValues() {
        let mm = [];
        if (this.props)
          for (let Tm in this.props) mm.push([+Tm, this.props[Tm]]);
        return mm
      }
      balance() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Nm(im.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((mm, Tm, fm) => new Om(this.type, mm, Tm, fm, this.propValues)), mm.makeTree || ((mm, Tm, fm) => new Om(im.none, mm, Tm, fm)))
      }
      static build(mm) {
        return function(mm) {
          var Tm;
          let {
            buffer: fm,
            nodeSet: Am,
            maxBufferLength: am = hm,
            reused: wm = [],
            minRepeatType: Dm = Am.types.length
          } = mm, im = Array.isArray(fm) ? new Ym(fm, fm.length) : fm, Rm = Am.types, pm = 0, Em = 0;

          function om(mm, Tm, fm, hm, xm, Om) {
            let {
              id: Ym,
              start: Jm,
              end: cm,
              size: zm
            } = im, Zm = Em, km = pm;
            if (zm < 0) {
              if (im.next(), -1 == zm) {
                let Tm = wm[Ym];
                return fm.push(Tm), void hm.push(Jm - mm)
              }
              if (-3 == zm) return void(pm = Ym);
              if (-4 == zm) return void(Em = Ym);
              throw new RangeError(`Unrecognized record size: ${zm}`)
            }
            let bm, Sm, em = Rm[Ym],
              Gm = Jm - mm;
            if (cm - Jm <= am && (Sm = Qm(im.pos - Tm, xm))) {
              let Tm = new Uint16Array(Sm.size - Sm.skip),
                fm = im.pos - Sm.size,
                hm = Tm.length;
              for (; im.pos > fm;) hm = nm(Sm.start, Tm, hm);
              bm = new qm(Tm, cm - Sm.start, Am), Gm = Sm.start - mm
            } else {
              let mm = im.pos - zm;
              im.next();
              let Tm = [],
                fm = [],
                hm = Ym >= Dm ? Ym : -1,
                Am = 0,
                xm = cm;
              for (; im.pos > mm;) hm >= 0 && im.id == hm && im.size >= 0 ? (im.end <= xm - am && (Im(Tm, fm, Jm, Am, im.end, xm, hm, Zm, km), Am = Tm.length, xm = im.end), im.next()) : Om > 2500 ? jm(Jm, mm, Tm, fm) : om(Jm, mm, Tm, fm, hm, Om + 1);
              if (hm >= 0 && Am > 0 && Am < Tm.length && Im(Tm, fm, Jm, Am, Jm, xm, hm, Zm, km), Tm.reverse(), fm.reverse(), hm > -1 && Am > 0) {
                let mm = Vm(em, km);
                bm = Nm(em, Tm, fm, 0, Tm.length, 0, cm - Jm, mm, mm)
              } else bm = Km(em, Tm, fm, cm - Jm, Zm - cm, km)
            }
            fm.push(bm), hm.push(Gm)
          }

          function jm(mm, Tm, fm, hm) {
            let xm = [],
              wm = 0,
              Dm = -1;
            for (; im.pos > Tm;) {
              let {
                id: mm,
                start: Tm,
                end: fm,
                size: hm
              } = im;
              if (hm > 4) im.next();
              else {
                if (Dm > -1 && Tm < Dm) break;
                Dm < 0 && (Dm = fm - am), xm.push(mm, Tm, fm), wm++, im.next()
              }
            }
            if (wm) {
              let Tm = new Uint16Array(4 * wm),
                am = xm[xm.length - 2];
              for (let mm = xm.length - 3, fm = 0; mm >= 0; mm -= 3) Tm[fm++] = xm[mm], Tm[fm++] = xm[mm + 1] - am, Tm[fm++] = xm[mm + 2] - am, Tm[fm++] = fm;
              fm.push(new qm(Tm, xm[2] - am, Am)), hm.push(am - mm)
            }
          }

          function Vm(mm, Tm) {
            return (fm, hm, Am) => {
              let am, wm, Dm = 0,
                im = fm.length - 1;
              if (im >= 0 && (am = fm[im]) instanceof Om) {
                if (!im && am.type == mm && am.length == Am) return am;
                (wm = am.prop(xm.lookAhead)) && (Dm = hm[im] + am.length + wm)
              }
              return Km(mm, fm, hm, Am, Dm, Tm)
            }
          }

          function Im(mm, Tm, fm, hm, am, xm, wm, Dm, im) {
            let Rm = [],
              pm = [];
            for (; mm.length > hm;) Rm.push(mm.pop()), pm.push(Tm.pop() + fm - am);
            mm.push(Km(Am.types[wm], Rm, pm, xm - am, Dm - xm, im)), Tm.push(am - fm)
          }

          function Km(mm, Tm, fm, hm, Am, am, wm) {
            if (am) {
              let mm = [xm.contextHash, am];
              wm = wm ? [mm].concat(wm) : [mm]
            }
            if (Am > 25) {
              let mm = [xm.lookAhead, Am];
              wm = wm ? [mm].concat(wm) : [mm]
            }
            return new Om(mm, Tm, fm, hm, wm)
          }

          function Qm(mm, Tm) {
            let fm = im.fork(),
              hm = 0,
              Am = 0,
              xm = 0,
              wm = fm.end - am,
              Rm = {
                size: 0,
                start: 0,
                skip: 0
              };
            mm: for (let am = fm.pos - mm; fm.pos > am;) {
              let mm = fm.size;
              if (fm.id == Tm && mm >= 0) {
                Rm.size = hm, Rm.start = Am, Rm.skip = xm, xm += 4, hm += 4, fm.next();
                continue
              }
              let im = fm.pos - mm;
              if (mm < 0 || im < am || fm.start < wm) break;
              let pm = fm.id >= Dm ? 4 : 0,
                Em = fm.start;
              for (fm.next(); fm.pos > im;) {
                if (fm.size < 0) {
                  if (-3 != fm.size && -4 != fm.size) break mm;
                  pm += 4
                } else fm.id >= Dm && (pm += 4);
                fm.next()
              }
              Am = Em, hm += mm, xm += pm
            }
            return (Tm < 0 || hm == mm) && (Rm.size = hm, Rm.start = Am, Rm.skip = xm), Rm.size > 4 ? Rm : void 0
          }

          function nm(mm, Tm, fm) {
            let {
              id: hm,
              start: Am,
              end: am,
              size: xm
            } = im;
            if (im.next(), xm >= 0 && hm < Dm) {
              let wm = fm;
              if (xm > 4) {
                let hm = im.pos - (xm - 4);
                for (; im.pos > hm;) fm = nm(mm, Tm, fm)
              }
              Tm[--fm] = wm, Tm[--fm] = am - mm, Tm[--fm] = Am - mm, Tm[--fm] = hm
            } else - 3 == xm ? pm = hm : -4 == xm && (Em = hm);
            return fm
          }
          let Jm = [],
            cm = [];
          for (; im.pos > 0;) om(mm.start || 0, mm.bufferStart || 0, Jm, cm, -1, 0);
          let zm = null !== (Tm = mm.length) && void 0 !== Tm ? Tm : Jm.length ? cm[0] + Jm[0].length : 0;
          return new Om(Rm[mm.topID], Jm.reverse(), cm.reverse(), zm)
        }(mm)
      }
    }
    Om.empty = new Om(im.none, [], [], 0);
    class Ym {
      constructor(mm, Tm) {
        this.buffer = mm, this.index = Tm
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
        return new Ym(this.buffer, this.index)
      }
    }
    class qm {
      constructor(mm, Tm, fm) {
        this.buffer = mm, this.length = Tm, this.set = fm
      }
      get type() {
        return im.none
      }
      toString() {
        let mm = [];
        for (let Tm = 0; Tm < this.buffer.length;) mm.push(this.childString(Tm)), Tm = this.buffer[Tm + 3];
        return mm.join(",")
      }
      childString(mm) {
        let Tm = this.buffer[mm],
          fm = this.buffer[mm + 3],
          hm = this.set.types[Tm],
          Am = hm.name;
        if (/\W/.test(Am) && !hm.isError && (Am = JSON.stringify(Am)), fm == (mm += 4)) return Am;
        let am = [];
        for (; mm < fm;) am.push(this.childString(mm)), mm = this.buffer[mm + 3];
        return Am + "(" + am.join(",") + ")"
      }
      findChild(mm, Tm, fm, hm, Am) {
        let {
          buffer: am
        } = this, xm = -1;
        for (let wm = mm; wm != Tm && !(jm(Am, hm, am[wm + 1], am[wm + 2]) && (xm = wm, fm > 0)); wm = am[wm + 3]);
        return xm
      }
      slice(mm, Tm, fm) {
        let hm = this.buffer,
          Am = new Uint16Array(Tm - mm),
          am = 0;
        for (let xm = mm, wm = 0; xm < Tm;) {
          Am[wm++] = hm[xm++], Am[wm++] = hm[xm++] - fm;
          let Tm = Am[wm++] = hm[xm++] - fm;
          Am[wm++] = hm[xm++] - mm, am = Math.max(am, Tm)
        }
        return new qm(Am, am, this.set)
      }
    }

    function jm(mm, Tm, fm, hm) {
      switch (mm) {
        case -2:
          return fm < Tm;
        case -1:
          return hm >= Tm && fm < Tm;
        case 0:
          return fm < Tm && hm > Tm;
        case 1:
          return fm <= Tm && hm > Tm;
        case 2:
          return hm > Tm;
        case 4:
          return !0
      }
    }

    function Vm(mm, Tm, fm, hm) {
      for (var Am; mm.from == mm.to || (fm < 1 ? mm.from >= Tm : mm.from > Tm) || (fm > -1 ? mm.to <= Tm : mm.to < Tm);) {
        let Tm = !hm && mm instanceof Km && mm.index < 0 ? null : mm.parent;
        if (!Tm) return mm;
        mm = Tm
      }
      let am = hm ? 0 : om.IgnoreOverlays;
      if (hm)
        for (let xm = mm, wm = xm.parent; wm; xm = wm, wm = xm.parent) xm instanceof Km && xm.index < 0 && (null === (Am = wm.enter(Tm, fm, am)) || void 0 === Am ? void 0 : Am.from) != xm.from && (mm = wm);
      for (;;) {
        let hm = mm.enter(Tm, fm, am);
        if (!hm) return mm;
        mm = hm
      }
    }
    class Im {
      cursor() {
        return new km(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(mm) {
        let Tm = Qm(this, mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return Tm.length ? Tm[0] : null
      }
      getChildren(mm) {
        return Qm(this, mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(mm) {
        return Vm(this, mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(mm) {
        return Vm(this, mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(mm) {
        return nm(this.parent, mm)
      }
      enterUnfinishedNodesBefore(mm) {
        let Tm = this.childBefore(mm),
          fm = this;
        for (; Tm;) {
          let mm = Tm.lastChild;
          if (!mm || mm.to != Tm.to) break;
          mm.type.isError && mm.from == mm.to ? (fm = Tm, Tm = mm.prevSibling) : Tm = mm
        }
        return fm
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class Km extends Im {
      constructor(mm, Tm, fm, hm) {
        super(), this._tree = mm, this.from = Tm, this.index = fm, this._parent = hm
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
      nextChild(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let am = this;;) {
          for (let {
              children: xm,
              positions: Dm
            } = am._tree, im = Tm > 0 ? xm.length : -1; mm != im; mm += Tm) {
            let im, Rm = xm[mm],
              pm = Dm[mm] + am.from;
            if (Am & om.EnterBracketed && Rm instanceof Om && (im = wm.get(Rm)) && !im.overlay && im.bracketed && fm >= pm && fm <= pm + Rm.length || jm(hm, fm, pm, pm + Rm.length))
              if (Rm instanceof qm) {
                if (Am & om.ExcludeBuffers) continue;
                let xm = Rm.findChild(0, Rm.buffer.length, Tm, fm - pm, hm);
                if (xm > -1) return new cm(new Jm(am, Rm, mm, pm), null, xm)
              } else if (Am & om.IncludeAnonymous || !Rm.type.isAnonymous || bm(Rm)) {
              let xm;
              if (!(Am & om.IgnoreMounts) && (xm = wm.get(Rm)) && !xm.overlay) return new Km(xm.tree, pm, mm, am);
              let Dm = new Km(Rm, pm, mm, am);
              return Am & om.IncludeAnonymous || !Dm.type.isAnonymous ? Dm : Dm.nextChild(Tm < 0 ? Rm.children.length - 1 : 0, Tm, fm, hm, Am)
            }
          }
          if (Am & om.IncludeAnonymous || !am.type.isAnonymous) return null;
          if (mm = am.index >= 0 ? am.index + Tm : Tm < 0 ? -1 : am._parent._tree.children.length, am = am._parent, !am) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(mm) {
        return this.nextChild(0, 1, mm, 2)
      }
      childBefore(mm) {
        return this.nextChild(this._tree.children.length - 1, -1, mm, -2)
      }
      prop(mm) {
        return this._tree.prop(mm)
      }
      enter(mm, Tm) {
        let fm, hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(hm & om.IgnoreOverlays) && (fm = wm.get(this._tree)) && fm.overlay) {
          let Am = mm - this.from,
            am = hm & om.EnterBracketed && fm.bracketed;
          for (let {
              from: mm,
              to: hm
            }
            of fm.overlay)
            if ((Tm > 0 || am ? mm <= Am : mm < Am) && (Tm < 0 || am ? hm >= Am : hm > Am)) return new Km(fm.tree, fm.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, mm, Tm, hm)
      }
      nextSignificantParent() {
        let mm = this;
        for (; mm.type.isAnonymous && mm._parent;) mm = mm._parent;
        return mm
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

    function Qm(mm, Tm, fm, hm) {
      let Am = mm.cursor(),
        am = [];
      if (!Am.firstChild()) return am;
      if (null != fm)
        for (let xm = !1; !xm;)
          if (xm = Am.type.is(fm), !Am.nextSibling()) return am;
      for (;;) {
        if (null != hm && Am.type.is(hm)) return am;
        if (Am.type.is(Tm) && am.push(Am.node), !Am.nextSibling()) return null == hm ? am : []
      }
    }

    function nm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tm.length - 1;
      for (let hm = mm; fm >= 0; hm = hm.parent) {
        if (!hm) return !1;
        if (!hm.type.isAnonymous) {
          if (Tm[fm] && Tm[fm] != hm.name) return !1;
          fm--
        }
      }
      return !0
    }
    class Jm {
      constructor(mm, Tm, fm, hm) {
        this.parent = mm, this.buffer = Tm, this.index = fm, this.start = hm
      }
    }
    class cm extends Im {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(mm, Tm, fm) {
        super(), this.context = mm, this._parent = Tm, this.index = fm, this.type = mm.buffer.set.types[mm.buffer.buffer[fm]]
      }
      child(mm, Tm, fm) {
        let {
          buffer: hm
        } = this.context, Am = hm.findChild(this.index + 4, hm.buffer[this.index + 3], mm, Tm - this.context.start, fm);
        return Am < 0 ? null : new cm(this.context, this, Am)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(mm) {
        return this.child(1, mm, 2)
      }
      childBefore(mm) {
        return this.child(-1, mm, -2)
      }
      prop(mm) {
        return this.type.prop(mm)
      }
      enter(mm, Tm) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & om.ExcludeBuffers) return null;
        let {
          buffer: fm
        } = this.context, hm = fm.findChild(this.index + 4, fm.buffer[this.index + 3], Tm > 0 ? 1 : -1, mm - this.context.start, Tm);
        return hm < 0 ? null : new cm(this.context, this, hm)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(mm) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + mm, mm, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: mm
        } = this.context, Tm = mm.buffer[this.index + 3];
        return Tm < (this._parent ? mm.buffer[this._parent.index + 3] : mm.buffer.length) ? new cm(this.context, this._parent, Tm) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: mm
        } = this.context, Tm = this._parent ? this._parent.index + 4 : 0;
        return this.index == Tm ? this.externalSibling(-1) : new cm(this.context, this._parent, mm.findChild(Tm, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let mm = [],
          Tm = [],
          {
            buffer: fm
          } = this.context,
          hm = this.index + 4,
          Am = fm.buffer[this.index + 3];
        if (Am > hm) {
          let am = fm.buffer[this.index + 1];
          mm.push(fm.slice(hm, Am, am)), Tm.push(0)
        }
        return new Om(this.type, mm, Tm, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function zm(mm) {
      if (!mm.length) return null;
      let Tm = 0,
        fm = mm[0];
      for (let am = 1; am < mm.length; am++) {
        let hm = mm[am];
        (hm.from > fm.from || hm.to < fm.to) && (fm = hm, Tm = am)
      }
      let hm = fm instanceof Km && fm.index < 0 ? null : fm.parent,
        Am = mm.slice();
      return hm ? Am[Tm] = hm : Am.splice(Tm, 1), new Zm(Am, fm)
    }
    class Zm {
      constructor(mm, Tm) {
        this.heads = mm, this.node = Tm
      }
      get next() {
        return zm(this.heads)
      }
    }
    class km {
      get name() {
        return this.type.name
      }
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = Tm & ~om.EnterBracketed, mm instanceof Km) this.yieldNode(mm);
        else {
          this._tree = mm.context.parent, this.buffer = mm.context;
          for (let Tm = mm._parent; Tm; Tm = Tm._parent) this.stack.unshift(Tm.index);
          this.bufferNode = mm, this.yieldBuf(mm.index)
        }
      }
      yieldNode(mm) {
        return !!mm && (this._tree = mm, this.type = mm.type, this.from = mm.from, this.to = mm.to, !0)
      }
      yieldBuf(mm, Tm) {
        this.index = mm;
        let {
          start: fm,
          buffer: hm
        } = this.buffer;
        return this.type = Tm || hm.set.types[hm.buffer[mm]], this.from = fm + hm.buffer[mm + 1], this.to = fm + hm.buffer[mm + 2], !0
      }
      yield(mm) {
        return !!mm && (mm instanceof Km ? (this.buffer = null, this.yieldNode(mm)) : (this.buffer = mm.context, this.yieldBuf(mm.index, mm.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(mm, Tm, fm) {
        if (!this.buffer) return this.yield(this._tree.nextChild(mm < 0 ? this._tree._tree.children.length - 1 : 0, mm, Tm, fm, this.mode));
        let {
          buffer: hm
        } = this.buffer, Am = hm.findChild(this.index + 4, hm.buffer[this.index + 3], mm, Tm - this.buffer.start, fm);
        return !(Am < 0) && (this.stack.push(this.index), this.yieldBuf(Am))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(mm) {
        return this.enterChild(1, mm, 2)
      }
      childBefore(mm) {
        return this.enterChild(-1, mm, -2)
      }
      enter(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(fm & om.ExcludeBuffers) && this.enterChild(1, mm, Tm) : this.yield(this._tree.enter(mm, Tm, fm))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & om.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let mm = this.mode & om.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(mm)
      }
      sibling(mm) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + mm, mm, 0, 4, this.mode));
        let {
          buffer: Tm
        } = this.buffer, fm = this.stack.length - 1;
        if (mm < 0) {
          let mm = fm < 0 ? 0 : this.stack[fm] + 4;
          if (this.index != mm) return this.yieldBuf(Tm.findChild(mm, this.index, -1, 0, 4))
        } else {
          let mm = Tm.buffer[this.index + 3];
          if (mm < (fm < 0 ? Tm.buffer.length : Tm.buffer[this.stack[fm] + 3])) return this.yieldBuf(mm)
        }
        return fm < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + mm, mm, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(mm) {
        let Tm, fm, {
          buffer: hm
        } = this;
        if (hm) {
          if (mm > 0) {
            if (this.index < hm.buffer.buffer.length) return !1
          } else
            for (let mm = 0; mm < this.index; mm++)
              if (hm.buffer.buffer[mm + 3] < this.index) return !1;
          ({
            index: Tm,
            parent: fm
          } = hm)
        } else({
          index: Tm,
          _parent: fm
        } = this._tree);
        for (; fm;
          ({
            index: Tm,
            _parent: fm
          } = fm))
          if (Tm > -1)
            for (let hm = Tm + mm, Am = mm < 0 ? -1 : fm._tree.children.length; hm != Am; hm += mm) {
              let mm = fm._tree.children[hm];
              if (this.mode & om.IncludeAnonymous || mm instanceof qm || !mm.type.isAnonymous || bm(mm)) return !1
            }
        return !0
      }
      move(mm, Tm) {
        if (Tm && this.enterChild(mm, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(mm)) return !0;
          if (this.atLastNode(mm) || !this.parent()) return !1
        }
      }
      next() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, mm)
      }
      prev() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, mm)
      }
      moveTo(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (Tm < 1 ? this.from >= mm : this.from > mm) || (Tm > -1 ? this.to <= mm : this.to < mm)) && this.parent(););
        for (; this.enterChild(1, mm, Tm););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let mm = this.bufferNode,
          Tm = null,
          fm = 0;
        if (mm && mm.context == this.buffer) mm: for (let hm = this.index, Am = this.stack.length; Am >= 0;) {
          for (let am = mm; am; am = am._parent)
            if (am.index == hm) {
              if (hm == this.index) return am;
              Tm = am, fm = Am + 1;
              break mm
            } hm = this.stack[--Am]
        }
        for (let hm = fm; hm < this.stack.length; hm++) Tm = new cm(this.buffer, Tm, this.stack[hm]);
        return this.bufferNode = new cm(this.buffer, Tm, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(mm, Tm) {
        for (let fm = 0;;) {
          let hm = !1;
          if (this.type.isAnonymous || !1 !== mm(this)) {
            if (this.firstChild()) {
              fm++;
              continue
            }
            this.type.isAnonymous || (hm = !0)
          }
          for (;;) {
            if (hm && Tm && Tm(this), hm = this.type.isAnonymous, !fm) return;
            if (this.nextSibling()) break;
            this.parent(), fm--, hm = !0
          }
        }
      }
      matchContext(mm) {
        if (!this.buffer) return nm(this.node.parent, mm);
        let {
          buffer: Tm
        } = this.buffer, {
          types: fm
        } = Tm.set;
        for (let hm = mm.length - 1, Am = this.stack.length - 1; hm >= 0; Am--) {
          if (Am < 0) return nm(this._tree, mm, hm);
          let am = fm[Tm.buffer[this.stack[Am]]];
          if (!am.isAnonymous) {
            if (mm[hm] && mm[hm] != am.name) return !1;
            hm--
          }
        }
        return !0
      }
    }

    function bm(mm) {
      return mm.children.some((mm => mm instanceof qm || !mm.type.isAnonymous || bm(mm)))
    }
    const Sm = new WeakMap;

    function em(mm, Tm) {
      if (!mm.isAnonymous || Tm instanceof qm || Tm.type != mm) return 1;
      let fm = Sm.get(Tm);
      if (null == fm) {
        fm = 1;
        for (let hm of Tm.children) {
          if (hm.type != mm || !(hm instanceof Om)) {
            fm = 1;
            break
          }
          fm += em(mm, hm)
        }
        Sm.set(Tm, fm)
      }
      return fm
    }

    function Nm(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
      let im = 0;
      for (let om = hm; om < Am; om++) im += em(mm, Tm[om]);
      let Rm = Math.ceil(1.5 * im / 8),
        pm = [],
        Em = [];
      return function Tm(fm, hm, Am, xm, wm) {
        for (let im = Am; im < xm;) {
          let Am = im,
            om = hm[im],
            Om = em(mm, fm[im]);
          for (im++; im < xm; im++) {
            let Tm = em(mm, fm[im]);
            if (Om + Tm >= Rm) break;
            Om += Tm
          }
          if (im == Am + 1) {
            if (Om > Rm) {
              let mm = fm[Am];
              Tm(mm.children, mm.positions, 0, mm.children.length, hm[Am] + wm);
              continue
            }
            pm.push(fm[Am])
          } else {
            let Tm = hm[im - 1] + fm[im - 1].length - om;
            pm.push(Nm(mm, fm, hm, Am, im, om, Tm, null, Dm))
          }
          Em.push(om + wm - am)
        }
      }(Tm, fm, hm, Am, 0), (wm || Dm)(pm, Em, xm)
    }
    class Gm {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(mm, Tm, fm) {
        let hm = this.map.get(mm);
        hm || this.map.set(mm, hm = new Map), hm.set(Tm, fm)
      }
      getBuffer(mm, Tm) {
        let fm = this.map.get(mm);
        return fm && fm.get(Tm)
      }
      set(mm, Tm) {
        mm instanceof cm ? this.setBuffer(mm.context.buffer, mm.index, Tm) : mm instanceof Km && this.map.set(mm.tree, Tm)
      }
      get(mm) {
        return mm instanceof cm ? this.getBuffer(mm.context.buffer, mm.index) : mm instanceof Km ? this.map.get(mm.tree) : void 0
      }
      cursorSet(mm, Tm) {
        mm.buffer ? this.setBuffer(mm.buffer.buffer, mm.index, Tm) : this.map.set(mm.tree, Tm)
      }
      cursorGet(mm) {
        return mm.buffer ? this.getBuffer(mm.buffer.buffer, mm.index) : this.map.get(mm.tree)
      }
    }
    class Xm {
      constructor(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = mm, this.to = Tm, this.tree = fm, this.offset = hm, this.open = (Am ? 1 : 0) | (am ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = [new Xm(0, mm.length, mm, 0, !1, fm)];
        for (let Am of Tm) Am.to > mm.length && hm.push(Am);
        return hm
      }
      static applyChanges(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!Tm.length) return mm;
        let hm = [],
          Am = 1,
          am = mm.length ? mm[0] : null;
        for (let xm = 0, wm = 0, Dm = 0;; xm++) {
          let im = xm < Tm.length ? Tm[xm] : null,
            Rm = im ? im.fromA : 1e9;
          if (Rm - wm >= fm)
            for (; am && am.from < Rm;) {
              let Tm = am;
              if (wm >= Tm.from || Rm <= Tm.to || Dm) {
                let mm = Math.max(Tm.from, wm) - Dm,
                  fm = Math.min(Tm.to, Rm) - Dm;
                Tm = mm >= fm ? null : new Xm(mm, fm, Tm.tree, Tm.offset + Dm, xm > 0, !!im)
              }
              if (Tm && hm.push(Tm), am.to > Rm) break;
              am = Am < mm.length ? mm[Am++] : null
            }
          if (!im) break;
          wm = im.toA, Dm = im.toA - im.toB
        }
        return hm
      }
    }
    class Pm {
      startParse(mm, Tm, fm) {
        return "string" == typeof mm && (mm = new Hm(mm)), fm = fm ? fm.length ? fm.map((mm => new am(mm.from, mm.to))) : [new am(0, 0)] : [new am(0, mm.length)], this.createParse(mm, Tm || [], fm)
      }
      parse(mm, Tm, fm) {
        let hm = this.startParse(mm, Tm, fm);
        for (;;) {
          let mm = hm.advance();
          if (mm) return mm
        }
      }
    }
    class Hm {
      constructor(mm) {
        this.string = mm
      }
      get length() {
        return this.string.length
      }
      chunk(mm) {
        return this.string.slice(mm)
      }
      get lineChunks() {
        return !1
      }
      read(mm, Tm) {
        return this.string.slice(mm, Tm)
      }
    }
    new xm({
      perNode: !0
    })
  },
  41387: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Em,
      g: () => Dm,
      j: () => pm,
      l: () => Sm
    });
    var hm = fm(41379);
    let Am = 0;
    class am {
      constructor(mm, Tm, fm, hm) {
        this.name = mm, this.set = Tm, this.base = fm, this.modified = hm, this.id = Am++
      }
      toString() {
        let {
          name: mm
        } = this;
        for (let Tm of this.modified) Tm.name && (mm = `${Tm.name}(${mm})`);
        return mm
      }
      static define(mm, Tm) {
        let fm = "string" == typeof mm ? mm : "?";
        if (mm instanceof am && (Tm = mm), null === Tm || void 0 === Tm ? void 0 : Tm.base) throw new Error("Can not derive from a modified tag");
        let hm = new am(fm, [], null, []);
        if (hm.set.push(hm), Tm)
          for (let Am of Tm.set) hm.set.push(Am);
        return hm
      }
      static defineModifier(mm) {
        let Tm = new wm(mm);
        return mm => mm.modified.indexOf(Tm) > -1 ? mm : wm.get(mm.base || mm, mm.modified.concat(Tm).sort(((mm, Tm) => mm.id - Tm.id)))
      }
    }
    let xm = 0;
    class wm {
      constructor(mm) {
        this.name = mm, this.instances = [], this.id = xm++
      }
      static get(mm, Tm) {
        if (!Tm.length) return mm;
        let fm = Tm[0].instances.find((fm => {
          return fm.base == mm && (hm = Tm, Am = fm.modified, hm.length == Am.length && hm.every(((mm, Tm) => mm == Am[Tm])));
          var hm, Am
        }));
        if (fm) return fm;
        let hm = [],
          Am = new am(mm.name, hm, mm, Tm);
        for (let am of Tm) am.instances.push(Am);
        let xm = function(mm) {
          let Tm = [
            []
          ];
          for (let fm = 0; fm < mm.length; fm++)
            for (let hm = 0, Am = Tm.length; hm < Am; hm++) Tm.push(Tm[hm].concat(mm[fm]));
          return Tm.sort(((mm, Tm) => Tm.length - mm.length))
        }(Tm);
        for (let am of mm.set)
          if (!am.modified.length)
            for (let mm of xm) hm.push(wm.get(am, mm));
        return Am
      }
    }

    function Dm(mm) {
      let Tm = Object.create(null);
      for (let fm in mm) {
        let hm = mm[fm];
        Array.isArray(hm) || (hm = [hm]);
        for (let mm of fm.split(" "))
          if (mm) {
            let fm = [],
              Am = 2,
              am = mm;
            for (let Tm = 0;;) {
              if ("..." == am && Tm > 0 && Tm + 3 == mm.length) {
                Am = 1;
                break
              }
              let hm = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(am);
              if (!hm) throw new RangeError("Invalid path: " + mm);
              if (fm.push("*" == hm[0] ? "" : '"' == hm[0][0] ? JSON.parse(hm[0]) : hm[0]), Tm += hm[0].length, Tm == mm.length) break;
              let xm = mm[Tm++];
              if (Tm == mm.length && "!" == xm) {
                Am = 0;
                break
              }
              if ("/" != xm) throw new RangeError("Invalid path: " + mm);
              am = mm.slice(Tm)
            }
            let xm = fm.length - 1,
              wm = fm[xm];
            if (!wm) throw new RangeError("Invalid path: " + mm);
            let Dm = new Rm(hm, Am, xm > 0 ? fm.slice(0, xm) : null);
            Tm[wm] = Dm.sort(Tm[wm])
          }
      }
      return im.add(Tm)
    }
    const im = new hm.h({
      combine(mm, Tm) {
        let fm, hm, Am;
        for (; mm || Tm;) {
          if (!mm || Tm && mm.depth >= Tm.depth ? (Am = Tm, Tm = Tm.next) : (Am = mm, mm = mm.next), fm && fm.mode == Am.mode && !Am.context && !fm.context) continue;
          let am = new Rm(Am.tags, Am.mode, Am.context);
          fm ? fm.next = am : hm = am, fm = am
        }
        return hm
      }
    });
    class Rm {
      constructor(mm, Tm, fm, hm) {
        this.tags = mm, this.mode = Tm, this.context = fm, this.next = hm
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(mm) {
        return !mm || mm.depth < this.depth ? (this.next = mm, this) : (mm.next = this.sort(mm.next), mm)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function pm(mm, Tm) {
      let fm = Object.create(null);
      for (let am of mm)
        if (Array.isArray(am.tag))
          for (let mm of am.tag) fm[mm.id] = am.class;
        else fm[am.tag.id] = am.class;
      let {
        scope: hm,
        all: Am = null
      } = Tm || {};
      return {
        style: mm => {
          let Tm = Am;
          for (let hm of mm)
            for (let mm of hm.set) {
              let hm = fm[mm.id];
              if (hm) {
                Tm = Tm ? Tm + " " + hm : hm;
                break
              }
            }
          return Tm
        },
        scope: hm
      }
    }

    function Em(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : mm.length,
        am = new om(hm, Array.isArray(Tm) ? Tm : [Tm], fm);
      am.highlightRange(mm.cursor(), hm, Am, "", am.highlighters), am.flush(Am)
    }
    Rm.empty = new Rm([], 2, null);
    class om {
      constructor(mm, Tm, fm) {
        this.at = mm, this.highlighters = Tm, this.span = fm, this.class = ""
      }
      startSpan(mm, Tm) {
        Tm != this.class && (this.flush(mm), mm > this.at && (this.at = mm), this.class = Tm)
      }
      flush(mm) {
        mm > this.at && this.class && this.span(this.at, mm, this.class)
      }
      highlightRange(mm, Tm, fm, Am, am) {
        let {
          type: xm,
          from: wm,
          to: Dm
        } = mm;
        if (wm >= fm || Dm <= Tm) return;
        xm.isTop && (am = this.highlighters.filter((mm => !mm.scope || mm.scope(xm))));
        let pm = Am,
          Em = function(mm) {
            let Tm = mm.type.prop(im);
            for (; Tm && Tm.context && !mm.matchContext(Tm.context);) Tm = Tm.next;
            return Tm || null
          }(mm) || Rm.empty,
          om = function(mm, Tm) {
            let fm = null;
            for (let hm of mm) {
              let mm = hm.style(Tm);
              mm && (fm = fm ? fm + " " + mm : mm)
            }
            return fm
          }(am, Em.tags);
        if (om && (pm && (pm += " "), pm += om, 1 == Em.mode && (Am += (Am ? " " : "") + om)), this.startSpan(Math.max(Tm, wm), pm), Em.opaque) return;
        let Om = mm.tree && mm.tree.prop(hm.h.mounted);
        if (Om && Om.overlay) {
          let hm = mm.node.enter(Om.overlay[0].from + wm, 1),
            xm = this.highlighters.filter((mm => !mm.scope || mm.scope(Om.tree.type))),
            im = mm.firstChild();
          for (let Rm = 0, Em = wm;; Rm++) {
            let om = Rm < Om.overlay.length ? Om.overlay[Rm] : null,
              Ym = om ? om.from + wm : Dm,
              qm = Math.max(Tm, Em),
              jm = Math.min(fm, Ym);
            if (qm < jm && im)
              for (; mm.from < jm && (this.highlightRange(mm, qm, jm, Am, am), this.startSpan(Math.min(jm, mm.to), pm), !(mm.to >= Ym) && mm.nextSibling()););
            if (!om || Ym > fm) break;
            Em = om.to + wm, Em > Tm && (this.highlightRange(hm.cursor(), Math.max(Tm, om.from + wm), Math.min(fm, Em), "", xm), this.startSpan(Math.min(fm, Em), pm))
          }
          im && mm.parent()
        } else if (mm.firstChild()) {
          Om && (Am = "");
          do {
            if (!(mm.to <= Tm)) {
              if (mm.from >= fm) break;
              this.highlightRange(mm, Tm, fm, Am, am), this.startSpan(Math.min(fm, mm.to), pm)
            }
          } while (mm.nextSibling());
          mm.parent()
        }
      }
    }
    const Om = am.define,
      Ym = Om(),
      qm = Om(),
      jm = Om(qm),
      Vm = Om(qm),
      Im = Om(),
      Km = Om(Im),
      Qm = Om(Im),
      nm = Om(),
      Jm = Om(nm),
      cm = Om(),
      zm = Om(),
      Zm = Om(),
      km = Om(Zm),
      bm = Om(),
      Sm = {
        comment: Ym,
        lineComment: Om(Ym),
        blockComment: Om(Ym),
        docComment: Om(Ym),
        name: qm,
        variableName: Om(qm),
        typeName: jm,
        tagName: Om(jm),
        propertyName: Vm,
        attributeName: Om(Vm),
        className: Om(qm),
        labelName: Om(qm),
        namespace: Om(qm),
        macroName: Om(qm),
        literal: Im,
        string: Km,
        docString: Om(Km),
        character: Om(Km),
        attributeValue: Om(Km),
        number: Qm,
        integer: Om(Qm),
        float: Om(Qm),
        bool: Om(Im),
        regexp: Om(Im),
        escape: Om(Im),
        color: Om(Im),
        url: Om(Im),
        keyword: cm,
        self: Om(cm),
        null: Om(cm),
        atom: Om(cm),
        unit: Om(cm),
        modifier: Om(cm),
        operatorKeyword: Om(cm),
        controlKeyword: Om(cm),
        definitionKeyword: Om(cm),
        moduleKeyword: Om(cm),
        operator: zm,
        derefOperator: Om(zm),
        arithmeticOperator: Om(zm),
        logicOperator: Om(zm),
        bitwiseOperator: Om(zm),
        compareOperator: Om(zm),
        updateOperator: Om(zm),
        definitionOperator: Om(zm),
        typeOperator: Om(zm),
        controlOperator: Om(zm),
        punctuation: Zm,
        separator: Om(Zm),
        bracket: km,
        angleBracket: Om(km),
        squareBracket: Om(km),
        paren: Om(km),
        brace: Om(km),
        content: nm,
        heading: Jm,
        heading1: Om(Jm),
        heading2: Om(Jm),
        heading3: Om(Jm),
        heading4: Om(Jm),
        heading5: Om(Jm),
        heading6: Om(Jm),
        contentSeparator: Om(nm),
        list: Om(nm),
        quote: Om(nm),
        emphasis: Om(nm),
        strong: Om(nm),
        link: Om(nm),
        monospace: Om(nm),
        strikethrough: Om(nm),
        inserted: Om(),
        deleted: Om(),
        changed: Om(),
        invalid: Om(),
        meta: bm,
        documentMeta: Om(bm),
        annotation: Om(bm),
        processingInstruction: Om(bm),
        definition: am.defineModifier("definition"),
        constant: am.defineModifier("constant"),
        function: am.defineModifier("function"),
        standard: am.defineModifier("standard"),
        local: am.defineModifier("local"),
        special: am.defineModifier("special")
      };
    for (let em in Sm) {
      let mm = Sm[em];
      mm instanceof am && (mm.name = em)
    }
    pm([{
      tag: Sm.link,
      class: "tok-link"
    }, {
      tag: Sm.heading,
      class: "tok-heading"
    }, {
      tag: Sm.emphasis,
      class: "tok-emphasis"
    }, {
      tag: Sm.strong,
      class: "tok-strong"
    }, {
      tag: Sm.keyword,
      class: "tok-keyword"
    }, {
      tag: Sm.atom,
      class: "tok-atom"
    }, {
      tag: Sm.bool,
      class: "tok-bool"
    }, {
      tag: Sm.url,
      class: "tok-url"
    }, {
      tag: Sm.labelName,
      class: "tok-labelName"
    }, {
      tag: Sm.inserted,
      class: "tok-inserted"
    }, {
      tag: Sm.deleted,
      class: "tok-deleted"
    }, {
      tag: Sm.literal,
      class: "tok-literal"
    }, {
      tag: Sm.string,
      class: "tok-string"
    }, {
      tag: Sm.number,
      class: "tok-number"
    }, {
      tag: [Sm.regexp, Sm.escape, Sm.special(Sm.string)],
      class: "tok-string2"
    }, {
      tag: Sm.variableName,
      class: "tok-variableName"
    }, {
      tag: Sm.local(Sm.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: Sm.definition(Sm.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: Sm.special(Sm.variableName),
      class: "tok-variableName2"
    }, {
      tag: Sm.definition(Sm.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: Sm.typeName,
      class: "tok-typeName"
    }, {
      tag: Sm.namespace,
      class: "tok-namespace"
    }, {
      tag: Sm.className,
      class: "tok-className"
    }, {
      tag: Sm.macroName,
      class: "tok-macroName"
    }, {
      tag: Sm.propertyName,
      class: "tok-propertyName"
    }, {
      tag: Sm.operator,
      class: "tok-operator"
    }, {
      tag: Sm.comment,
      class: "tok-comment"
    }, {
      tag: Sm.meta,
      class: "tok-meta"
    }, {
      tag: Sm.invalid,
      class: "tok-invalid"
    }, {
      tag: Sm.punctuation,
      class: "tok-punctuation"
    }])
  },
  41399: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm.f,
      d: () => xm.x,
      g: () => xm.J,
      j: () => xm.M,
      l: () => wm.h,
      m: () => Zf,
      p: () => wm.K,
      q: () => wm.eb
    });
    var hm = fm(1382),
      Am = fm(1378),
      am = fm(59),
      xm = fm(41356),
      wm = fm(41361),
      Dm = fm(41376),
      im = fm(41379);

    function Rm(mm, Tm) {
      return fm => {
        let {
          state: hm,
          dispatch: Am
        } = fm;
        if (hm.readOnly) return !1;
        let am = mm(Tm, hm);
        return !!am && (Am(hm.update(am)), !0)
      }
    }
    const pm = Rm(jm, 0),
      Em = Rm(qm, 0),
      om = Rm(((mm, Tm) => qm(mm, Tm, function(mm) {
        let Tm = [];
        for (let fm of mm.selection.mo) {
          let hm = mm.doc.lineAt(fm.from),
            Am = fm.to <= hm.to ? hm : mm.doc.lineAt(fm.to);
          Am.from > hm.from && Am.from == fm.to && (Am = fm.to == hm.to + 1 ? hm : mm.doc.lineAt(fm.to - 1));
          let am = Tm.length - 1;
          am >= 0 && Tm[am].to > hm.from ? Tm[am].to = Am.to : Tm.push({
            from: hm.from + /^\s*/.exec(hm.text)[0].length,
            to: Am.to
          })
        }
        return Tm
      }(Tm))), 0);

    function Om(mm, Tm) {
      let fm = mm.languageDataAt("commentTokens", Tm, 1);
      return fm.length ? fm[0] : {}
    }
    const Ym = 50;

    function qm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tm.selection.mo,
        hm = fm.map((mm => Om(Tm, mm.from).block));
      if (!hm.every((mm => mm))) return null;
      let Am = fm.map(((mm, fm) => function(mm, Tm, fm, hm) {
        let Am, am, {
            open: xm,
            close: wm
          } = Tm,
          Dm = mm.sliceDoc(fm - Ym, fm),
          im = mm.sliceDoc(hm, hm + Ym),
          Rm = /\s*$/.exec(Dm)[0].length,
          pm = /^\s*/.exec(im)[0].length,
          Em = Dm.length - Rm;
        if (Dm.slice(Em - xm.length, Em) == xm && im.slice(pm, pm + wm.length) == wm) return {
          open: {
            pos: fm - Rm,
            margin: Rm && 1
          },
          close: {
            pos: hm + pm,
            margin: pm && 1
          }
        };
        hm - fm <= 2 * Ym ? Am = am = mm.sliceDoc(fm, hm) : (Am = mm.sliceDoc(fm, fm + Ym), am = mm.sliceDoc(hm - Ym, hm));
        let om = /^\s*/.exec(Am)[0].length,
          Om = /\s*$/.exec(am)[0].length,
          qm = am.length - Om - wm.length;
        return Am.slice(om, om + xm.length) == xm && am.slice(qm, qm + wm.length) == wm ? {
          open: {
            pos: fm + om + xm.length,
            margin: /\s/.test(Am.charAt(om + xm.length)) ? 1 : 0
          },
          close: {
            pos: hm - Om - wm.length,
            margin: /\s/.test(am.charAt(qm - 1)) ? 1 : 0
          }
        } : null
      }(Tm, hm[fm], mm.from, mm.to)));
      if (2 != mm && !Am.every((mm => mm))) return {
        changes: Tm.changes(fm.map(((mm, Tm) => Am[Tm] ? [] : [{
          from: mm.from,
          insert: hm[Tm].open + " "
        }, {
          from: mm.to,
          insert: " " + hm[Tm].close
        }])))
      };
      if (1 != mm && Am.some((mm => mm))) {
        let mm = [];
        for (let Tm, fm = 0; fm < Am.length; fm++)
          if (Tm = Am[fm]) {
            let Am = hm[fm],
              {
                open: am,
                close: xm
              } = Tm;
            mm.push({
              from: am.pos - Am.open.length,
              to: am.pos + am.margin
            }, {
              from: xm.pos - xm.margin,
              to: xm.pos + Am.close.length
            })
          } return {
          changes: mm
        }
      }
      return null
    }

    function jm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tm.selection.mo,
        hm = [],
        Am = -1;
      mm: for (let {
          from: am,
          to: xm
        }
        of fm) {
        let mm, fm = hm.length,
          wm = 1e9;
        for (let Dm = am; Dm <= xm;) {
          let fm = Tm.doc.lineAt(Dm);
          if (void 0 == mm && (mm = Om(Tm, fm.from).line, !mm)) continue mm;
          if (fm.from > Am && (am == xm || xm > fm.from)) {
            Am = fm.from;
            let Tm = /^\s*/.exec(fm.text)[0].length,
              am = Tm == fm.length,
              xm = fm.text.slice(Tm, Tm + mm.length) == mm ? Tm : -1;
            Tm < fm.text.length && Tm < wm && (wm = Tm), hm.push({
              line: fm,
              comment: xm,
              token: mm,
              indent: Tm,
              empty: am,
              single: !1
            })
          }
          Dm = fm.to + 1
        }
        if (wm < 1e9)
          for (let Tm = fm; Tm < hm.length; Tm++) hm[Tm].indent < hm[Tm].line.text.length && (hm[Tm].indent = wm);
        hm.length == fm + 1 && (hm[fm].single = !0)
      }
      if (2 != mm && hm.some((mm => mm.comment < 0 && (!mm.empty || mm.single)))) {
        let mm = [];
        for (let {
            line: Tm,
            token: Am,
            indent: am,
            empty: xm,
            single: wm
          }
          of hm) !wm && xm || mm.push({
          from: Tm.from + am,
          insert: Am + " "
        });
        let fm = Tm.changes(mm);
        return {
          changes: fm,
          selection: Tm.selection.map(fm, 1)
        }
      }
      if (1 != mm && hm.some((mm => mm.comment >= 0))) {
        let mm = [];
        for (let {
            line: Tm,
            comment: fm,
            token: Am
          }
          of hm)
          if (fm >= 0) {
            let hm = Tm.from + fm,
              am = hm + Am.length;
            " " == Tm.text[am - Tm.from] && am++, mm.push({
              from: hm,
              to: am
            })
          } return {
          changes: mm
        }
      }
      return null
    }
    const Vm = xm.e.define(),
      Im = xm.e.define(),
      Km = xm.s.define(),
      Qm = xm.s.define({
        combine: mm => (0, xm.Y)(mm, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (mm, Tm) => Tm
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (mm, Tm) => (fm, hm) => mm(fm, hm) || Tm(fm, hm)
        })
      }),
      nm = xm.M.define({
        create: () => rm.empty,
        update(mm, Tm) {
          let fm = Tm.state.facet(Qm),
            hm = Tm.annotation(Vm);
          if (hm) {
            let Am = bm.fromTransaction(Tm, hm.selection),
              am = hm.side,
              xm = 0 == am ? mm.undone : mm.done;
            return xm = Am ? Sm(xm, xm.length, fm.minDepth, Am) : Xm(xm, Tm.startState.selection), new rm(0 == am ? hm.rest : xm, 0 == am ? xm : hm.rest)
          }
          let Am = Tm.annotation(Im);
          if ("full" != Am && "before" != Am || (mm = mm.isolate()), !1 === Tm.annotation(xm.Q.addToHistory)) return Tm.changes.empty ? mm : mm.addMapping(Tm.changes.desc);
          let am = bm.fromTransaction(Tm),
            wm = Tm.annotation(xm.Q.time),
            Dm = Tm.annotation(xm.Q.userEvent);
          return am ? mm = mm.addChanges(am, wm, Dm, fm, Tm) : Tm.selection && (mm = mm.addSelection(Tm.startState.selection, wm, Dm, fm.newGroupDelay)), "full" != Am && "after" != Am || (mm = mm.isolate()), mm
        },
        toJSON: mm => ({
          done: mm.done.map((mm => mm.toJSON())),
          undone: mm.undone.map((mm => mm.toJSON()))
        }),
        fromJSON: mm => new rm(mm.done.map(bm.fromJSON), mm.undone.map(bm.fromJSON))
      });

    function Jm(mm, Tm) {
      return function(fm) {
        let {
          state: hm,
          dispatch: Am
        } = fm;
        if (!Tm && hm.readOnly) return !1;
        let am = hm.field(nm, !1);
        if (!am) return !1;
        let xm = am.pop(mm, hm, Tm);
        return !!xm && (Am(xm), !0)
      }
    }
    const cm = Jm(0, !1),
      zm = Jm(1, !1),
      Zm = Jm(0, !0),
      km = Jm(1, !0);
    class bm {
      constructor(mm, Tm, fm, hm, Am) {
        this.changes = mm, this.effects = Tm, this.mapped = fm, this.startSelection = hm, this.selectionsAfter = Am
      }
      setSelAfter(mm) {
        return new bm(this.changes, this.effects, this.mapped, this.startSelection, mm)
      }
      toJSON() {
        var mm, Tm, fm;
        return {
          changes: null === (mm = this.changes) || void 0 === mm ? void 0 : mm.toJSON(),
          mapped: null === (Tm = this.mapped) || void 0 === Tm ? void 0 : Tm.toJSON(),
          startSelection: null === (fm = this.startSelection) || void 0 === fm ? void 0 : fm.toJSON(),
          selectionsAfter: this.selectionsAfter.map((mm => mm.toJSON()))
        }
      }
      static fromJSON(mm) {
        return new bm(mm.changes && xm.ChangeSet.fromJSON(mm.changes), [], mm.mapped && xm.h.fromJSON(mm.mapped), mm.startSelection && xm.o.fromJSON(mm.startSelection), mm.selectionsAfter.map(xm.o.fromJSON))
      }
      static fromTransaction(mm, Tm) {
        let fm = Nm;
        for (let hm of mm.startState.facet(Km)) {
          let Tm = hm(mm);
          Tm.length && (fm = fm.concat(Tm))
        }
        return !fm.length && mm.changes.empty ? null : new bm(mm.changes.invert(mm.startState.doc), fm, void 0, Tm || mm.startState.selection, Nm)
      }
      static selection(mm) {
        return new bm(void 0, Nm, void 0, void 0, mm)
      }
    }

    function Sm(mm, Tm, fm, hm) {
      let Am = Tm + 1 > fm + 20 ? Tm - fm - 1 : 0,
        am = mm.slice(Am, Tm);
      return am.push(hm), am
    }

    function em(mm, Tm) {
      return mm.length ? Tm.length ? mm.concat(Tm) : mm : Tm
    }
    const Nm = [],
      Gm = 200;

    function Xm(mm, Tm) {
      if (mm.length) {
        let fm = mm[mm.length - 1],
          hm = fm.selectionsAfter.slice(Math.max(0, fm.selectionsAfter.length - Gm));
        return hm.length && hm[hm.length - 1].eq(Tm) ? mm : (hm.push(Tm), Sm(mm, mm.length - 1, 1e9, fm.setSelAfter(hm)))
      }
      return [bm.selection([Tm])]
    }

    function Pm(mm) {
      let Tm = mm[mm.length - 1],
        fm = mm.slice();
      return fm[mm.length - 1] = Tm.setSelAfter(Tm.selectionsAfter.slice(0, Tm.selectionsAfter.length - 1)), fm
    }

    function Hm(mm, Tm) {
      if (!mm.length) return mm;
      let fm = mm.length,
        hm = Nm;
      for (; fm;) {
        let Am = ym(mm[fm - 1], Tm, hm);
        if (Am.changes && !Am.changes.empty || Am.effects.length) {
          let Tm = mm.slice(0, fm);
          return Tm[fm - 1] = Am, Tm
        }
        Tm = Am.mapped, fm--, hm = Am.selectionsAfter
      }
      return hm.length ? [bm.selection(hm)] : Nm
    }

    function ym(mm, Tm, fm) {
      let hm = em(mm.selectionsAfter.length ? mm.selectionsAfter.map((mm => mm.map(Tm))) : Nm, fm);
      if (!mm.changes) return bm.selection(hm);
      let Am = mm.changes.map(Tm),
        am = Tm.mapDesc(mm.changes, !0),
        wm = mm.mapped ? mm.mapped.composeDesc(am) : am;
      return new bm(Am, xm.J.mapEffects(mm.effects, Tm), wm, mm.startSelection.map(am), hm)
    }
    const Cm = /^(input\.type|delete)($|\.)/;
    class rm {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = mm, this.undone = Tm, this.prevTime = fm, this.prevUserEvent = hm
      }
      isolate() {
        return this.prevTime ? new rm(this.done, this.undone) : this
      }
      addChanges(mm, Tm, fm, hm, Am) {
        let am = this.done,
          wm = am[am.length - 1];
        return am = wm && wm.changes && !wm.changes.empty && mm.changes && (!fm || Cm.test(fm)) && (!wm.selectionsAfter.length && Tm - this.prevTime < hm.newGroupDelay && hm.joinToEvent(Am, function(mm, Tm) {
          let fm = [],
            hm = !1;
          return mm.iterChangedRanges(((mm, Tm) => fm.push(mm, Tm))), Tm.iterChangedRanges(((mm, Tm, Am, am) => {
            for (let xm = 0; xm < fm.length;) {
              let mm = fm[xm++],
                Tm = fm[xm++];
              am >= mm && Am <= Tm && (hm = !0)
            }
          })), hm
        }(wm.changes, mm.changes)) || "input.type.compose" == fm) ? Sm(am, am.length - 1, hm.minDepth, new bm(mm.changes.compose(wm.changes), em(xm.J.mapEffects(mm.effects, wm.changes), wm.effects), wm.mapped, wm.startSelection, Nm)) : Sm(am, am.length, hm.minDepth, mm), new rm(am, Nm, Tm, fm)
      }
      addSelection(mm, Tm, fm, hm) {
        let Am = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Nm;
        return Am.length > 0 && Tm - this.prevTime < hm && fm == this.prevUserEvent && fm && /^select($|\.)/.test(fm) && (am = Am[Am.length - 1], xm = mm, am.mo.length == xm.mo.length && 0 === am.mo.filter(((mm, Tm) => mm.empty != xm.mo[Tm].empty)).length) ? this : new rm(Xm(this.done, mm), this.undone, Tm, fm);
        var am, xm
      }
      addMapping(mm) {
        return new rm(Hm(this.done, mm), Hm(this.undone, mm), this.prevTime, this.prevUserEvent)
      }
      pop(mm, Tm, fm) {
        let hm = 0 == mm ? this.done : this.undone;
        if (0 == hm.length) return null;
        let Am = hm[hm.length - 1],
          am = Am.selectionsAfter[0] || (Am.startSelection ? Am.startSelection.map(Am.changes.invertedDesc, 1) : Tm.selection);
        if (fm && Am.selectionsAfter.length) return Tm.update({
          selection: Am.selectionsAfter[Am.selectionsAfter.length - 1],
          annotations: Vm.of({
            side: mm,
            rest: Pm(hm),
            selection: am
          }),
          userEvent: 0 == mm ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (Am.changes) {
          let fm = 1 == hm.length ? Nm : hm.slice(0, hm.length - 1);
          return Am.mapped && (fm = Hm(fm, Am.mapped)), Tm.update({
            changes: Am.changes,
            selection: Am.startSelection,
            effects: Am.effects,
            annotations: Vm.of({
              side: mm,
              rest: fm,
              selection: am
            }),
            filter: !1,
            userEvent: 0 == mm ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    rm.empty = new rm(Nm, Nm);
    const sm = [{
      key: "Mod-z",
      run: cm,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: zm,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: zm,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Zm,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: km,
      preventDefault: !0
    }];

    function lm(mm, Tm) {
      return xm.o.create(mm.mo.map(Tm), mm.mainIndex)
    }

    function Mm(mm, Tm) {
      return mm.update({
        selection: Tm,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function um(mm, Tm) {
      let {
        state: fm,
        dispatch: hm
      } = mm, Am = lm(fm.selection, Tm);
      return !Am.eq(fm.selection, !0) && (hm(Mm(fm, Am)), !0)
    }

    function Bm(mm, Tm) {
      return xm.o.cursor(Tm ? mm.to : mm.from)
    }

    function Lm(mm, Tm) {
      return um(mm, (fm => fm.empty ? mm.moveByChar(fm, Tm) : Bm(fm, Tm)))
    }

    function tm(mm) {
      return mm.textDirectionAt(mm.state.selection.main.head) == wm.e.LTR
    }
    const Um = mm => Lm(mm, !tm(mm)),
      dm = mm => Lm(mm, tm(mm));

    function gm(mm, Tm) {
      return um(mm, (fm => fm.empty ? mm.moveByGroup(fm, Tm) : Bm(fm, Tm)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function Wm(mm, Tm, fm) {
      if (Tm.type.prop(fm)) return !0;
      let hm = Tm.to - Tm.from;
      return hm && (hm > 2 || /[^\s,.;:]/.test(mm.sliceDoc(Tm.from, Tm.to))) || Tm.firstChild
    }

    function Fm(mm, Tm, fm) {
      let hm, Am, am = (0, Dm.ob)(mm).resolveInner(Tm.head),
        wm = fm ? im.h.closedBy : im.h.openedBy;
      for (let xm = Tm.head;;) {
        let Tm = fm ? am.childAfter(xm) : am.childBefore(xm);
        if (!Tm) break;
        Wm(mm, Tm, wm) ? am = Tm : xm = fm ? Tm.to : Tm.from
      }
      return Am = am.type.prop(wm) && (hm = fm ? (0, Dm.gb)(mm, am.from, 1) : (0, Dm.gb)(mm, am.to, -1)) && hm.matched ? fm ? hm.end.to : hm.end.from : fm ? am.to : am.from, xm.o.cursor(Am, fm ? -1 : 1)
    }

    function mT(mm, Tm) {
      return um(mm, (fm => {
        if (!fm.empty) return Bm(fm, Tm);
        let hm = mm.moveVertically(fm, Tm);
        return hm.head != fm.head ? hm : mm.moveToLineBoundary(fm, Tm)
      }))
    }
    const TT = mm => mT(mm, !1),
      fT = mm => mT(mm, !0);

    function hT(mm) {
      let Tm, fm = mm.scrollDOM.clientHeight < mm.scrollDOM.scrollHeight - 2,
        hm = 0,
        Am = 0;
      if (fm) {
        for (let Tm of mm.state.facet(wm.f.scrollMargins)) {
          let fm = Tm(mm);
          (null === fm || void 0 === fm ? void 0 : fm.top) && (hm = Math.max(null === fm || void 0 === fm ? void 0 : fm.top, hm)), (null === fm || void 0 === fm ? void 0 : fm.bottom) && (Am = Math.max(null === fm || void 0 === fm ? void 0 : fm.bottom, Am))
        }
        Tm = mm.scrollDOM.clientHeight - hm - Am
      } else Tm = (mm.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: hm,
        marginBottom: Am,
        selfScroll: fm,
        height: Math.max(mm.defaultLineHeight, Tm - 5)
      }
    }

    function AT(mm, Tm) {
      let fm, hm = hT(mm),
        {
          state: Am
        } = mm,
        am = lm(Am.selection, (fm => fm.empty ? mm.moveVertically(fm, Tm, hm.height) : Bm(fm, Tm)));
      if (am.eq(Am.selection)) return !1;
      if (hm.selfScroll) {
        let Tm = mm.coordsAtPos(Am.selection.main.head),
          xm = mm.scrollDOM.getBoundingClientRect(),
          Dm = xm.top + hm.marginTop,
          im = xm.bottom - hm.marginBottom;
        Tm && Tm.top > Dm && Tm.bottom < im && (fm = wm.f.scrollIntoView(am.main.head, {
          y: "start",
          yMargin: Tm.top - Dm
        }))
      }
      return mm.dispatch(Mm(Am, am), {
        effects: fm
      }), !0
    }
    const aT = mm => AT(mm, !1),
      xT = mm => AT(mm, !0);

    function wT(mm, Tm, fm) {
      let hm = mm.lineBlockAt(Tm.head),
        Am = mm.moveToLineBoundary(Tm, fm);
      if (Am.head == Tm.head && Am.head != (fm ? hm.to : hm.from) && (Am = mm.moveToLineBoundary(Tm, fm, !1)), !fm && Am.head == hm.from && hm.length) {
        let fm = /^\s*/.exec(mm.state.sliceDoc(hm.from, Math.min(hm.from + 100, hm.to)))[0].length;
        fm && Tm.head != hm.from + fm && (Am = xm.o.cursor(hm.from + fm))
      }
      return Am
    }

    function DT(mm, Tm, fm) {
      let hm = !1,
        Am = lm(mm.selection, (Tm => {
          let Am = (0, Dm.gb)(mm, Tm.head, -1) || (0, Dm.gb)(mm, Tm.head, 1) || Tm.head > 0 && (0, Dm.gb)(mm, Tm.head - 1, 1) || Tm.head < mm.doc.length && (0, Dm.gb)(mm, Tm.head + 1, -1);
          if (!Am || !Am.end) return Tm;
          hm = !0;
          let am = Am.start.from == Tm.head ? Am.end.to : Am.end.from;
          return fm ? xm.o.range(Tm.anchor, am) : xm.o.cursor(am)
        }));
      return !!hm && (Tm(Mm(mm, Am)), !0)
    }

    function iT(mm, Tm) {
      let fm = lm(mm.state.selection, (mm => {
        let fm = Tm(mm);
        return xm.o.range(mm.anchor, fm.head, fm.goalColumn, fm.bidiLevel || void 0, fm.assoc)
      }));
      return !fm.eq(mm.state.selection) && (mm.dispatch(Mm(mm.state, fm)), !0)
    }

    function RT(mm, Tm) {
      return iT(mm, (fm => mm.moveByChar(fm, Tm)))
    }
    const pT = mm => RT(mm, !tm(mm)),
      ET = mm => RT(mm, tm(mm));

    function oT(mm, Tm) {
      return iT(mm, (fm => mm.moveByGroup(fm, Tm)))
    }

    function OT(mm, Tm) {
      return iT(mm, (fm => mm.moveVertically(fm, Tm)))
    }
    const YT = mm => OT(mm, !1),
      qT = mm => OT(mm, !0);

    function jT(mm, Tm) {
      return iT(mm, (fm => mm.moveVertically(fm, Tm, hT(mm).height)))
    }
    const VT = mm => jT(mm, !1),
      IT = mm => jT(mm, !0),
      KT = mm => {
        let {
          state: Tm,
          dispatch: fm
        } = mm;
        return fm(Mm(Tm, {
          anchor: 0
        })), !0
      },
      QT = mm => {
        let {
          state: Tm,
          dispatch: fm
        } = mm;
        return fm(Mm(Tm, {
          anchor: Tm.doc.length
        })), !0
      },
      nT = mm => {
        let {
          state: Tm,
          dispatch: fm
        } = mm;
        return fm(Mm(Tm, {
          anchor: Tm.selection.main.anchor,
          head: 0
        })), !0
      },
      JT = mm => {
        let {
          state: Tm,
          dispatch: fm
        } = mm;
        return fm(Mm(Tm, {
          anchor: Tm.selection.main.anchor,
          head: Tm.doc.length
        })), !0
      };

    function cT(mm, Tm) {
      let {
        state: fm
      } = mm, hm = fm.selection, Am = fm.selection.mo.slice();
      for (let am of fm.selection.mo) {
        let hm = fm.doc.lineAt(am.head);
        if (Tm ? hm.to < mm.state.doc.length : hm.from > 0)
          for (let fm = am;;) {
            let am = mm.moveVertically(fm, Tm);
            if (am.head < hm.from || am.head > hm.to) {
              Am.some((mm => mm.head == am.head)) || Am.push(am);
              break
            }
            if (am.head == fm.head) break;
            fm = am
          }
      }
      return Am.length != hm.mo.length && (mm.dispatch(Mm(fm, xm.o.create(Am, Am.length - 1))), !0)
    }

    function zT(mm, Tm) {
      if (mm.state.readOnly) return !1;
      let fm = "delete.selection",
        {
          state: hm
        } = mm,
        Am = hm.changeByRange((hm => {
          let {
            from: Am,
            to: am
          } = hm;
          if (Am == am) {
            let xm = Tm(hm);
            xm < Am ? (fm = "delete.backward", xm = ZT(mm, xm, !1)) : xm > Am && (fm = "delete.forward", xm = ZT(mm, xm, !0)), Am = Math.min(Am, xm), am = Math.max(am, xm)
          } else Am = ZT(mm, Am, !1), am = ZT(mm, am, !0);
          return Am == am ? {
            range: hm
          } : {
            changes: {
              from: Am,
              to: am
            },
            range: xm.o.cursor(Am, Am < hm.head ? -1 : 1)
          }
        }));
      return !Am.changes.empty && (mm.dispatch(hm.update(Am, {
        scrollIntoView: !0,
        userEvent: fm,
        effects: "delete.selection" == fm ? wm.f.announce.of(hm.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function ZT(mm, Tm, fm) {
      if (mm instanceof wm.f)
        for (let hm of mm.state.facet(wm.f.atomicRanges).map((Tm => Tm(mm)))) hm.between(Tm, Tm, ((mm, hm) => {
          mm < Tm && hm > Tm && (Tm = fm ? hm : mm)
        }));
      return Tm
    }
    const kT = (mm, Tm, fm) => zT(mm, (hm => {
        let Am, am, wm = hm.from,
          {
            state: im
          } = mm,
          Rm = im.doc.lineAt(wm);
        if (fm && !Tm && wm > Rm.from && wm < Rm.from + 200 && !/[^ \t]/.test(Am = Rm.text.slice(0, wm - Rm.from))) {
          if ("\t" == Am[Am.length - 1]) return wm - 1;
          let mm = (0, xm.$)(Am, im.tabSize) % (0, Dm.T)(im) || (0, Dm.T)(im);
          for (let Tm = 0; Tm < mm && " " == Am[Am.length - 1 - Tm]; Tm++) wm--;
          am = wm
        } else am = (0, xm.ab)(Rm.text, wm - Rm.from, Tm, Tm) + Rm.from, am == wm && Rm.number != (Tm ? im.doc.lines : 1) ? am += Tm ? 1 : -1 : !Tm && /[\ufe00-\ufe0f]/.test(Rm.text.slice(am - Rm.from, wm - Rm.from)) && (am = (0, xm.ab)(Rm.text, am - Rm.from, !1, !1) + Rm.from);
        return am
      })),
      bT = mm => kT(mm, !1, !0),
      ST = mm => kT(mm, !0, !1),
      eT = (mm, Tm) => zT(mm, (fm => {
        let hm = fm.head,
          {
            state: Am
          } = mm,
          am = Am.doc.lineAt(hm),
          wm = Am.charCategorizer(hm);
        for (let mm = null;;) {
          if (hm == (Tm ? am.to : am.from)) {
            hm == fm.head && am.number != (Tm ? Am.doc.lines : 1) && (hm += Tm ? 1 : -1);
            break
          }
          let Dm = (0, xm.ab)(am.text, hm - am.from, Tm) + am.from,
            im = am.text.slice(Math.min(hm, Dm) - am.from, Math.max(hm, Dm) - am.from),
            Rm = wm(im);
          if (null != mm && Rm != mm) break;
          " " == im && hm == fm.head || (mm = Rm), hm = Dm
        }
        return hm
      })),
      NT = mm => eT(mm, !1);

    function GT(mm) {
      let Tm = [],
        fm = -1;
      for (let hm of mm.selection.mo) {
        let Am = mm.doc.lineAt(hm.from),
          am = mm.doc.lineAt(hm.to);
        if (hm.empty || hm.to != am.from || (am = mm.doc.lineAt(hm.to - 1)), fm >= Am.number) {
          let mm = Tm[Tm.length - 1];
          mm.to = am.to, mm.mo.push(hm)
        } else Tm.push({
          from: Am.from,
          to: am.to,
          mo: [hm]
        });
        fm = am.number + 1
      }
      return Tm
    }

    function XT(mm, Tm, fm) {
      if (mm.readOnly) return !1;
      let hm = [],
        Am = [];
      for (let am of GT(mm)) {
        if (fm ? am.to == mm.doc.length : 0 == am.from) continue;
        let Tm = mm.doc.lineAt(fm ? am.to + 1 : am.from - 1),
          wm = Tm.length + 1;
        if (fm) {
          hm.push({
            from: am.to,
            to: Tm.to
          }, {
            from: am.from,
            insert: Tm.text + mm.lineBreak
          });
          for (let Tm of am.mo) Am.push(xm.o.range(Math.min(mm.doc.length, Tm.anchor + wm), Math.min(mm.doc.length, Tm.head + wm)))
        } else {
          hm.push({
            from: Tm.from,
            to: am.from
          }, {
            from: am.to,
            insert: mm.lineBreak + Tm.text
          });
          for (let mm of am.mo) Am.push(xm.o.range(mm.anchor - wm, mm.head - wm))
        }
      }
      return !!hm.length && (Tm(mm.update({
        changes: hm,
        scrollIntoView: !0,
        selection: xm.o.create(Am, mm.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function PT(mm, Tm, fm) {
      if (mm.readOnly) return !1;
      let hm = [];
      for (let am of GT(mm)) fm ? hm.push({
        from: am.from,
        insert: mm.doc.slice(am.from, am.to) + mm.lineBreak
      }) : hm.push({
        from: am.to,
        insert: mm.lineBreak + mm.doc.slice(am.from, am.to)
      });
      let Am = mm.changes(hm);
      return Tm(mm.update({
        changes: Am,
        selection: mm.selection.map(Am, fm ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const HT = yT(!1);

    function yT(mm) {
      return Tm => {
        let {
          state: fm,
          dispatch: hm
        } = Tm;
        if (fm.readOnly) return !1;
        let Am = fm.changeByRange((Tm => {
          let {
            from: hm,
            to: Am
          } = Tm, am = fm.doc.lineAt(hm), wm = !mm && hm == Am && function(mm, Tm) {
            if (/\(\)|\[\]|\{\}/.test(mm.sliceDoc(Tm - 1, Tm + 1))) return {
              from: Tm,
              to: Tm
            };
            let fm, hm = (0, Dm.ob)(mm).resolveInner(Tm),
              Am = hm.childBefore(Tm),
              am = hm.childAfter(Tm);
            return Am && am && Am.to <= Tm && am.from >= Tm && (fm = Am.type.prop(im.h.closedBy)) && fm.indexOf(am.name) > -1 && mm.doc.lineAt(Am.to).from == mm.doc.lineAt(am.from).from && !/\S/.test(mm.sliceDoc(Am.to, am.from)) ? {
              from: Am.to,
              to: am.from
            } : null
          }(fm, hm);
          mm && (hm = Am = (Am <= am.to ? am : fm.doc.lineAt(Am)).to);
          let Rm = new Dm.h(fm, {
              simulateBreak: hm,
              simulateDoubleBreak: !!wm
            }),
            pm = (0, Dm.W)(Rm, hm);
          for (null == pm && (pm = (0, xm.$)(/^\s*/.exec(fm.doc.lineAt(hm).text)[0], fm.tabSize)); Am < am.to && /\s/.test(am.text[Am - am.from]);) Am++;
          wm ? ({
            from: hm,
            to: Am
          } = wm) : hm > am.from && hm < am.from + 100 && !/\S/.test(am.text.slice(0, hm)) && (hm = am.from);
          let Em = ["", (0, Dm.bb)(fm, pm)];
          return wm && Em.push((0, Dm.bb)(fm, Rm.lineIndent(am.from, -1))), {
            changes: {
              from: hm,
              to: Am,
              insert: xm.O.of(Em)
            },
            range: xm.o.cursor(hm + 1 + Em[1].length)
          }
        }));
        return hm(fm.update(Am, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function CT(mm, Tm) {
      let fm = -1;
      return mm.changeByRange((hm => {
        let Am = [];
        for (let xm = hm.from; xm <= hm.to;) {
          let am = mm.doc.lineAt(xm);
          am.number > fm && (hm.empty || hm.to > am.from) && (Tm(am, Am, hm), fm = am.number), xm = am.to + 1
        }
        let am = mm.changes(Am);
        return {
          changes: Am,
          range: xm.o.range(am.mapPos(hm.anchor, 1), am.mapPos(hm.head, 1))
        }
      }))
    }
    const rT = mm => {
        let {
          state: Tm,
          dispatch: fm
        } = mm;
        return !Tm.readOnly && (fm(Tm.update(CT(Tm, ((mm, fm) => {
          fm.push({
            from: mm.from,
            insert: Tm.facet(Dm.cb)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      sT = mm => {
        let {
          state: Tm,
          dispatch: fm
        } = mm;
        return !Tm.readOnly && (fm(Tm.update(CT(Tm, ((mm, fm) => {
          let hm = /^\s*/.exec(mm.text)[0];
          if (!hm) return;
          let Am = (0, xm.$)(hm, Tm.tabSize),
            am = 0,
            wm = (0, Dm.bb)(Tm, Math.max(0, Am - (0, Dm.T)(Tm)));
          for (; am < hm.length && am < wm.length && hm.charCodeAt(am) == wm.charCodeAt(am);) am++;
          fm.push({
            from: mm.from + am,
            to: mm.from + hm.length,
            insert: wm.slice(am)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      lT = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: mm => um(mm, (Tm => Fm(mm.state, Tm, !tm(mm)))),
        shift: mm => iT(mm, (Tm => Fm(mm.state, Tm, !tm(mm))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: mm => um(mm, (Tm => Fm(mm.state, Tm, tm(mm)))),
        shift: mm => iT(mm, (Tm => Fm(mm.state, Tm, tm(mm))))
      }, {
        key: "Alt-ArrowUp",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm;
          return XT(Tm, fm, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm;
          return PT(Tm, fm, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm;
          return XT(Tm, fm, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm;
          return PT(Tm, fm, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: mm => cT(mm, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: mm => cT(mm, !0)
      }, {
        key: "Escape",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm, hm = Tm.selection, Am = null;
          return hm.mo.length > 1 ? Am = xm.o.create([hm.main]) : hm.main.empty || (Am = xm.o.create([xm.o.cursor(hm.main.head)])), !!Am && (fm(Mm(Tm, Am)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: yT(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm, hm = GT(Tm).map((mm => {
            let {
              from: fm,
              to: hm
            } = mm;
            return xm.o.range(fm, Math.min(hm + 1, Tm.doc.length))
          }));
          return fm(Tm.update({
            selection: xm.o.create(hm),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm, hm = lm(Tm.selection, (mm => {
            let fm = (0, Dm.ob)(Tm),
              hm = fm.resolveStack(mm.from, 1);
            if (mm.empty) {
              let Tm = fm.resolveStack(mm.from, -1);
              Tm.node.from >= hm.node.from && Tm.node.to <= hm.node.to && (hm = Tm)
            }
            for (let Tm = hm; Tm; Tm = Tm.next) {
              let {
                node: fm
              } = Tm;
              if ((fm.from < mm.from && fm.to >= mm.to || fm.to > mm.to && fm.from <= mm.from) && Tm.next) return xm.o.range(fm.to, fm.from)
            }
            return mm
          }));
          return !hm.eq(Tm.selection) && (fm(Mm(Tm, hm)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: sT
      }, {
        key: "Mod-]",
        run: rT
      }, {
        key: "Mod-Alt-\\",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm;
          if (Tm.readOnly) return !1;
          let hm = Object.create(null),
            Am = new Dm.h(Tm, {
              overrideIndentation: mm => {
                let Tm = hm[mm];
                return null == Tm ? -1 : Tm
              }
            }),
            am = CT(Tm, ((mm, fm, am) => {
              let xm = (0, Dm.W)(Am, mm.from);
              if (null == xm) return;
              /\S/.test(mm.text) || (xm = 0);
              let wm = /^\s*/.exec(mm.text)[0],
                im = (0, Dm.bb)(Tm, xm);
              (wm != im || am.from < mm.from + wm.length) && (hm[mm.from] = xm, fm.push({
                from: mm.from,
                to: mm.from + wm.length,
                insert: im
              }))
            }));
          return am.changes.empty || fm(Tm.update(am, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: mm => {
          if (mm.state.readOnly) return !1;
          let {
            state: Tm
          } = mm, fm = Tm.changes(GT(Tm).map((mm => {
            let {
              from: fm,
              to: hm
            } = mm;
            return fm > 0 ? fm-- : hm < Tm.doc.length && hm++, {
              from: fm,
              to: hm
            }
          }))), hm = lm(Tm.selection, (Tm => {
            let fm;
            if (mm.lineWrapping) {
              let hm = mm.lineBlockAt(Tm.head),
                Am = mm.coordsAtPos(Tm.head, Tm.assoc || 1);
              Am && (fm = hm.bottom + mm.documentTop - Am.bottom + mm.defaultLineHeight / 2)
            }
            return mm.moveVertically(Tm, !0, fm)
          })).map(fm);
          return mm.dispatch({
            changes: fm,
            selection: hm,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm;
          return DT(Tm, fm, !1)
        }
      }, {
        key: "Mod-/",
        run: mm => {
          let {
            state: Tm
          } = mm, fm = Tm.doc.lineAt(Tm.selection.main.from), hm = Om(mm.state, fm.from);
          return hm.line ? pm(mm) : !!hm.block && om(mm)
        }
      }, {
        key: "Alt-A",
        run: Em
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: mm => (mm.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: Um,
        shift: pT,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: mm => gm(mm, !tm(mm)),
        shift: mm => oT(mm, !tm(mm)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: mm => um(mm, (Tm => wT(mm, Tm, !tm(mm)))),
        shift: mm => iT(mm, (Tm => wT(mm, Tm, !tm(mm)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: dm,
        shift: ET,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: mm => gm(mm, tm(mm)),
        shift: mm => oT(mm, tm(mm)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: mm => um(mm, (Tm => wT(mm, Tm, tm(mm)))),
        shift: mm => iT(mm, (Tm => wT(mm, Tm, tm(mm)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: TT,
        shift: YT,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: KT,
        shift: nT
      }, {
        mac: "Ctrl-ArrowUp",
        run: aT,
        shift: VT
      }, {
        key: "ArrowDown",
        run: fT,
        shift: qT,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: QT,
        shift: JT
      }, {
        mac: "Ctrl-ArrowDown",
        run: xT,
        shift: IT
      }, {
        key: "PageUp",
        run: aT,
        shift: VT
      }, {
        key: "PageDown",
        run: xT,
        shift: IT
      }, {
        key: "Home",
        run: mm => um(mm, (Tm => wT(mm, Tm, !1))),
        shift: mm => iT(mm, (Tm => wT(mm, Tm, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: KT,
        shift: nT
      }, {
        key: "End",
        run: mm => um(mm, (Tm => wT(mm, Tm, !0))),
        shift: mm => iT(mm, (Tm => wT(mm, Tm, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: QT,
        shift: JT
      }, {
        key: "Enter",
        run: HT,
        shift: HT
      }, {
        key: "Mod-a",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm;
          return fm(Tm.update({
            selection: {
              anchor: 0,
              head: Tm.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: bT,
        shift: bT,
        preventDefault: !0
      }, {
        key: "Delete",
        run: ST,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: NT,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: mm => eT(mm, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: mm => zT(mm, (Tm => {
          let fm = mm.moveToLineBoundary(Tm, !1).head;
          return Tm.head > fm ? fm : Math.max(0, Tm.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: mm => zT(mm, (Tm => {
          let fm = mm.moveToLineBoundary(Tm, !0).head;
          return Tm.head < fm ? fm : Math.min(mm.state.doc.length, Tm.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: Um,
        shift: pT,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: dm,
        shift: ET
      }, {
        key: "Ctrl-p",
        run: TT,
        shift: YT
      }, {
        key: "Ctrl-n",
        run: fT,
        shift: qT
      }, {
        key: "Ctrl-a",
        run: mm => um(mm, (Tm => xm.o.cursor(mm.lineBlockAt(Tm.head).from, 1))),
        shift: mm => iT(mm, (Tm => xm.o.cursor(mm.lineBlockAt(Tm.head).from)))
      }, {
        key: "Ctrl-e",
        run: mm => um(mm, (Tm => xm.o.cursor(mm.lineBlockAt(Tm.head).to, -1))),
        shift: mm => iT(mm, (Tm => xm.o.cursor(mm.lineBlockAt(Tm.head).to)))
      }, {
        key: "Ctrl-d",
        run: ST
      }, {
        key: "Ctrl-h",
        run: bT
      }, {
        key: "Ctrl-k",
        run: mm => zT(mm, (Tm => {
          let fm = mm.lineBlockAt(Tm.head).to;
          return Tm.head < fm ? fm : Math.min(mm.state.doc.length, Tm.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: NT
      }, {
        key: "Ctrl-o",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm;
          if (Tm.readOnly) return !1;
          let hm = Tm.changeByRange((mm => ({
            changes: {
              from: mm.from,
              to: mm.to,
              insert: xm.O.of(["", ""])
            },
            range: xm.o.cursor(mm.from)
          })));
          return fm(Tm.update(hm, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: mm => {
          let {
            state: Tm,
            dispatch: fm
          } = mm;
          if (Tm.readOnly) return !1;
          let hm = Tm.changeByRange((mm => {
            if (!mm.empty || 0 == mm.from || mm.from == Tm.doc.length) return {
              range: mm
            };
            let fm = mm.from,
              hm = Tm.doc.lineAt(fm),
              Am = fm == hm.from ? fm - 1 : (0, xm.ab)(hm.text, fm - hm.from, !1) + hm.from,
              am = fm == hm.to ? fm + 1 : (0, xm.ab)(hm.text, fm - hm.from, !0) + hm.from;
            return {
              changes: {
                from: Am,
                to: am,
                insert: Tm.doc.slice(fm, am).append(Tm.doc.slice(Am, fm))
              },
              range: xm.o.cursor(am)
            }
          }));
          return !hm.changes.empty && (fm(Tm.update(hm, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: xT
      }].map((mm => ({
        mac: mm.key,
        run: mm.run,
        shift: mm.shift
      }))))),
      MT = {
        key: "Tab",
        run: rT,
        shift: sT
      };
    var uT = fm(41408),
      BT = fm(41350),
      LT = fm(41410),
      vT = function(mm) {
        void 0 === mm && (mm = {});
        var {
          crosshairCursor: Tm = !1
        } = mm, fm = [];
        !1 !== mm.closeBracketsKeymap && (fm = fm.concat(BT.f)), !1 !== mm.defaultKeymap && (fm = fm.concat(lT)), !1 !== mm.searchKeymap && (fm = fm.concat(uT.l)), !1 !== mm.historyKeymap && (fm = fm.concat(sm)), !1 !== mm.foldKeymap && (fm = fm.concat(Dm.K)), !1 !== mm.completionKeymap && (fm = fm.concat(BT.m)), !1 !== mm.lintKeymap && (fm = fm.concat(LT.d));
        var hm = [];
        return !1 !== mm.lineNumbers && hm.push((0, wm.P)()), !1 !== mm.highlightActiveLineGutter && hm.push((0, wm.B)()), !1 !== mm.highlightSpecialChars && hm.push((0, wm.I)()), !1 !== mm.history && hm.push(function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [nm, Qm.of(mm), wm.f.domEventHandlers({
            beforeinput(mm, Tm) {
              let fm = "historyUndo" == mm.inputType ? cm : "historyRedo" == mm.inputType ? zm : null;
              return !!fm && (mm.preventDefault(), fm(Tm))
            }
          })]
        }()), !1 !== mm.foldGutter && hm.push((0, Dm.F)()), !1 !== mm.drawSelection && hm.push((0, wm.n)()), !1 !== mm.dropCursor && hm.push((0, wm.o)()), !1 !== mm.allowMultipleSelections && hm.push(xm.q.allowMultipleSelections.of(!0)), !1 !== mm.indentOnInput && hm.push((0, Dm.ab)()), !1 !== mm.syntaxHighlighting && hm.push((0, Dm.kb)(Dm.v, {
          fallback: !0
        })), !1 !== mm.bracketMatching && hm.push((0, Dm.r)()), !1 !== mm.closeBrackets && hm.push((0, BT.i)()), !1 !== mm.autocompletion && hm.push((0, BT.d)()), !1 !== mm.rectangularSelection && hm.push((0, wm.Y)()), !1 !== Tm && hm.push((0, wm.l)()), !1 !== mm.highlightActiveLine && hm.push((0, wm.F)()), !1 !== mm.highlightSelectionMatches && hm.push((0, uT.h)()), mm.tabSize && "number" === typeof mm.tabSize && hm.push(Dm.cb.of(" ".repeat(mm.tabSize))), hm.concat([wm.M.of(fm.flat())]).filter(Boolean)
      },
      tT = fm(41387);
    const UT = "#e5c07b",
      dT = "#e06c75",
      gT = "#56b6c2",
      WT = "#ffffff",
      FT = "#abb2bf",
      mf = "#7d8799",
      Tf = "#61afef",
      ff = "#98c379",
      hf = "#d19a66",
      Af = "#c678dd",
      af = "#21252b",
      xf = "#2c313a",
      wf = "#282c34",
      Df = "#353a42",
      Rf = "#3E4451",
      pf = "#528bff",
      Ef = wm.f.theme({
        "&": {
          color: FT,
          backgroundColor: wf
        },
        ".cm-content": {
          caretColor: pf
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: pf
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Rf
        },
        ".cm-panels": {
          backgroundColor: af,
          color: FT
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
          backgroundColor: wf,
          color: mf,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: xf
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: Df
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: Df,
          borderBottomColor: Df
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: xf,
            color: FT
          }
        }
      }, {
        dark: !0
      }),
      of = Dm.d.define([{
        tag: tT.l.keyword,
        color: Af
      }, {
        tag: [tT.l.name, tT.l.deleted, tT.l.character, tT.l.propertyName, tT.l.macroName],
        color: dT
      }, {
        tag: [tT.l.function(tT.l.variableName), tT.l.labelName],
        color: Tf
      }, {
        tag: [tT.l.color, tT.l.constant(tT.l.name), tT.l.standard(tT.l.name)],
        color: hf
      }, {
        tag: [tT.l.definition(tT.l.name), tT.l.separator],
        color: FT
      }, {
        tag: [tT.l.typeName, tT.l.className, tT.l.number, tT.l.changed, tT.l.annotation, tT.l.modifier, tT.l.self, tT.l.namespace],
        color: UT
      }, {
        tag: [tT.l.operator, tT.l.operatorKeyword, tT.l.url, tT.l.escape, tT.l.regexp, tT.l.link, tT.l.special(tT.l.string)],
        color: gT
      }, {
        tag: [tT.l.meta, tT.l.comment],
        color: mf
      }, {
        tag: tT.l.strong,
        fontWeight: "bold"
      }, {
        tag: tT.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: tT.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: tT.l.link,
        color: mf,
        textDecoration: "underline"
      }, {
        tag: tT.l.heading,
        fontWeight: "bold",
        color: dT
      }, {
        tag: [tT.l.atom, tT.l.bool, tT.l.special(tT.l.variableName)],
        color: hf
      }, {
        tag: [tT.l.processingInstruction, tT.l.string, tT.l.inserted],
        color: ff
      }, {
        tag: tT.l.invalid,
        color: WT
      }]),
      Of = [Ef, (0, Dm.kb)(of)];
    var Yf = wm.f.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class qf {
      constructor(mm, Tm) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = Tm, this.timeoutMS = Tm, this.callbacks.push(mm)
      }
      DE() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var mm = this.callbacks.slice();
          this.callbacks.length = 0, mm.forEach((mm => {
            try {
              mm()
            } catch (Tm) {
              console.error("TimeoutLatch callback error:", Tm)
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
    class jf {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(mm) {
        this.latches.add(mm), this.start()
      }
      remove(mm) {
        this.latches.delete(mm), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((mm => {
            mm.DE(), mm.isDone && this.remove(mm)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Vf = null,
      If = xm.e.define(),
      Kf = [];

    function Qf(mm) {
      var {
        value: Tm,
        selection: fm,
        onChange: hm,
        onStatistics: Am,
        onCreateEditor: Dm,
        onUpdate: im,
        extensions: Rm = Kf,
        autoFocus: pm,
        theme: Em = "light",
        height: om = null,
        minHeight: Om = null,
        maxHeight: Ym = null,
        width: qm = null,
        minWidth: jm = null,
        maxWidth: Vm = null,
        placeholder: Im = "",
        editable: Km = !0,
        readOnly: Qm = !1,
        indentWithTab: nm = !0,
        basicSetup: Jm = !0,
        root: cm,
        initialState: zm
      } = mm, [Zm, km] = (0, am.useState)(), [bm, Sm] = (0, am.useState)(), [em, Nm] = (0, am.useState)(), Gm = (0, am.useState)((() => ({
        current: null
      })))[0], Xm = (0, am.useState)((() => ({
        current: null
      })))[0], Pm = wm.f.theme({
        "&": {
          height: om,
          minHeight: Om,
          maxHeight: Ym,
          width: qm,
          minWidth: jm,
          maxWidth: Vm
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Hm = wm.f.updateListener.of((mm => {
        if (mm.docChanged && "function" === typeof hm && !mm.transactions.some((mm => mm.annotation(If)))) {
          Gm.current ? Gm.current.reset() : (Gm.current = new qf((() => {
            if (Xm.current) {
              var mm = Xm.current;
              Xm.current = null, mm()
            }
            Gm.current = null
          }), 200), ("undefined" === typeof window ? new jf : (Vf || (Vf = new jf), Vf)).add(Gm.current));
          var Tm = mm.state.doc.toString();
          hm(Tm, mm)
        }
        Am && Am((mm => ({
          line: mm.state.doc.lineAt(mm.state.selection.main.from),
          lineCount: mm.state.doc.lines,
          lineBreak: mm.state.lineBreak,
          length: mm.state.doc.length,
          readOnly: mm.state.readOnly,
          tabSize: mm.state.tabSize,
          selection: mm.state.selection,
          selectionAsSingle: mm.state.selection.asSingle().main,
          mo: mm.state.selection.mo,
          selectionCode: mm.state.sliceDoc(mm.state.selection.main.from, mm.state.selection.main.to),
          selections: mm.state.selection.mo.map((Tm => mm.state.sliceDoc(Tm.from, Tm.to))),
          selectedText: mm.state.selection.mo.some((mm => !mm.empty))
        }))(mm))
      })), ym = function(mm) {
        void 0 === mm && (mm = {});
        var {
          indentWithTab: Tm = !0,
          editable: fm = !0,
          readOnly: hm = !1,
          theme: Am = "light",
          placeholder: am = "",
          basicSetup: Dm = !0
        } = mm, im = [];
        switch (Tm && im.unshift(wm.M.of([MT])), Dm && ("boolean" === typeof Dm ? im.unshift(vT()) : im.unshift(vT(Dm))), am && im.unshift((0, wm.W)(am)), Am) {
          case "light":
            im.push(Yf);
            break;
          case "dark":
            im.push(Of);
            break;
          case "none":
            break;
          default:
            im.push(Am)
        }
        return !1 === fm && im.push(wm.f.editable.of(!1)), hm && im.push(xm.q.readOnly.of(!0)), [...im]
      }({
        theme: Em,
        editable: Km,
        readOnly: Qm,
        placeholder: Im,
        indentWithTab: nm,
        basicSetup: Jm
      }), Cm = [Hm, Pm, ...ym];
      return im && "function" === typeof im && Cm.push(wm.f.updateListener.of(im)), Cm = Cm.concat(Rm), (0, am.useLayoutEffect)((() => {
        if (Zm && !em) {
          var mm = {
              doc: Tm,
              selection: fm,
              extensions: Cm
            },
            hm = zm ? xm.q.fromJSON(zm.json, mm, zm.fields) : xm.q.create(mm);
          if (Nm(hm), !bm) {
            var Am = new wm.f({
              state: hm,
              parent: Zm,
              root: cm
            });
            Sm(Am), Dm && Dm(Am, hm)
          }
        }
        return () => {
          bm && (Nm(void 0), Sm(void 0))
        }
      }), [Zm, em]), (0, am.useEffect)((() => {
        mm.container && km(mm.container)
      }), [mm.container]), (0, am.useEffect)((() => () => {
        bm && (bm.destroy(), Sm(void 0)), Gm.current && (Gm.current.cancel(), Gm.current = null)
      }), [bm]), (0, am.useEffect)((() => {
        pm && bm && bm.focus()
      }), [pm, bm]), (0, am.useEffect)((() => {
        bm && bm.dispatch({
          effects: xm.J.reconfigure.of(Cm)
        })
      }), [Em, Rm, om, Om, Ym, qm, jm, Vm, Im, Km, Qm, nm, Jm, hm, im]), (0, am.useEffect)((() => {
        if (void 0 !== Tm) {
          var mm = bm ? bm.state.doc.toString() : "";
          if (bm && Tm !== mm) {
            var fm = () => {
              bm && Tm !== bm.state.doc.toString() && bm.dispatch({
                changes: {
                  from: 0,
                  to: bm.state.doc.toString().length,
                  insert: Tm || ""
                },
                annotations: [If.of(!0)]
              })
            };
            Gm.current && !Gm.current.isDone ? Xm.current = fm : fm()
          }
        }
      }), [Tm, bm]), {
        state: em,
        setState: Nm,
        view: bm,
        setView: Sm,
        container: Zm,
        setContainer: km
      }
    }
    var nf = fm(1135),
      Jf = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      zf = (0, am.forwardRef)(((mm, Tm) => {
        var {
          className: fm,
          value: xm = "",
          selection: wm,
          extensions: Dm = [],
          onChange: im,
          onStatistics: Rm,
          onCreateEditor: pm,
          onUpdate: Em,
          autoFocus: om,
          theme: Om = "light",
          height: Ym,
          minHeight: qm,
          maxHeight: jm,
          width: Vm,
          minWidth: Im,
          maxWidth: Km,
          basicSetup: Qm,
          placeholder: nm,
          indentWithTab: Jm,
          editable: cm,
          readOnly: zm,
          root: Zm,
          initialState: km
        } = mm, bm = (0, Am.d)(mm, Jf), Sm = (0, am.useRef)(null), {
          state: em,
          view: Nm,
          container: Gm,
          setContainer: Xm
        } = Qf({
          root: Zm,
          value: xm,
          autoFocus: om,
          theme: Om,
          height: Ym,
          minHeight: qm,
          maxHeight: jm,
          width: Vm,
          minWidth: Im,
          maxWidth: Km,
          basicSetup: Qm,
          placeholder: nm,
          indentWithTab: Jm,
          editable: cm,
          readOnly: zm,
          selection: wm,
          onChange: im,
          onStatistics: Rm,
          onCreateEditor: pm,
          onUpdate: Em,
          extensions: Dm,
          initialState: km
        });
        (0, am.useImperativeHandle)(Tm, (() => ({
          editor: Sm.current,
          state: em,
          view: Nm
        })), [Sm, Gm, em, Nm]);
        var Pm = (0, am.useCallback)((mm => {
          Sm.current = mm, Xm(mm)
        }), [Xm]);
        if ("string" !== typeof xm) throw new Error("value must be typeof string but got " + typeof xm);
        var Hm = "string" === typeof Om ? "cm-theme-" + Om : "cm-theme";
        return (0, nf.jsx)("div", (0, hm.e)({
          ref: Pm,
          className: Hm + (fm ? " " + fm : "")
        }, bm))
      }));
    zf.displayName = "CodeMirror";
    const Zf = zf
  },
  41373: (mm, Tm, fm) => {
    function hm() {
      var mm = arguments[0];
      "string" == typeof mm && (mm = document.createElement(mm));
      var Tm = 1,
        fm = arguments[1];
      if (fm && "object" == typeof fm && null == fm.nodeType && !Array.isArray(fm)) {
        for (var hm in fm)
          if (Object.prototype.hasOwnProperty.call(fm, hm)) {
            var am = fm[hm];
            "string" == typeof am ? mm.setAttribute(hm, am) : null != am && (mm[hm] = am)
          } Tm++
      }
      for (; Tm < arguments.length; Tm++) Am(mm, arguments[Tm]);
      return mm
    }

    function Am(mm, Tm) {
      if ("string" == typeof Tm) mm.appendChild(document.createTextNode(Tm));
      else if (null == Tm);
      else if (null != Tm.nodeType) mm.appendChild(Tm);
      else {
        if (!Array.isArray(Tm)) throw new RangeError("Unsupported child node: " + Tm);
        for (var fm = 0; fm < Tm.length; fm++) Am(mm, Tm[fm])
      }
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  41369: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    const hm = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      Am = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      am = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class xm {
      constructor(mm, Tm) {
        this.rules = [];
        let {
          finish: fm
        } = Tm || {};

        function hm(mm) {
          return /^@/.test(mm) ? [mm] : mm.split(/,\s*/)
        }

        function Am(mm, Tm, am, xm) {
          let wm = [],
            Dm = /^@(\w+)\b/.exec(mm[0]),
            im = Dm && "keyframes" == Dm[1];
          if (Dm && null == Tm) return am.push(mm[0] + ";");
          for (let fm in Tm) {
            let xm = Tm[fm];
            if (/&/.test(fm)) Am(fm.split(/,\s*/).map((Tm => mm.map((mm => Tm.replace(/&/, mm))))).reduce(((mm, Tm) => mm.concat(Tm))), xm, am);
            else if (xm && "object" == typeof xm) {
              if (!Dm) throw new RangeError("The value of a property (" + fm + ") should be a primitive value.");
              Am(hm(fm), xm, wm, im)
            } else null != xm && wm.push(fm.replace(/_.*/, "").replace(/[A-Z]/g, (mm => "-" + mm.toLowerCase())) + ": " + xm + ";")
          }(wm.length || im) && am.push((!fm || Dm || xm ? mm : mm.map(fm)).join(", ") + " {" + wm.join(" ") + "}")
        }
        for (let am in mm) Am(hm(am), mm[am], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let mm = am[hm] || 1;
        return am[hm] = mm + 1, "\u037c" + mm.toString(36)
      }
      static mount(mm, Tm, fm) {
        let hm = mm[Am],
          am = fm && fm.nonce;
        hm ? am && hm.setNonce(am) : hm = new Dm(mm, am), hm.mount(Array.isArray(Tm) ? Tm : [Tm], mm)
      }
    }
    let wm = new Map;
    class Dm {
      constructor(mm, Tm) {
        let fm = mm.ownerDocument || mm,
          hm = fm.defaultView;
        if (!mm.head && mm.adoptedStyleSheets && hm.CSSStyleSheet) {
          let Tm = wm.get(fm);
          if (Tm) return mm[Am] = Tm;
          this.sheet = new hm.CSSStyleSheet, wm.set(fm, this)
        } else this.styleTag = fm.createElement("style"), Tm && this.styleTag.setAttribute("nonce", Tm);
        this.modules = [], mm[Am] = this
      }
      mount(mm, Tm) {
        let fm = this.sheet,
          hm = 0,
          Am = 0;
        for (let am = 0; am < mm.length; am++) {
          let Tm = mm[am],
            xm = this.modules.indexOf(Tm);
          if (xm < Am && xm > -1 && (this.modules.splice(xm, 1), Am--, xm = -1), -1 == xm) {
            if (this.modules.splice(Am++, 0, Tm), fm)
              for (let mm = 0; mm < Tm.rules.length; mm++) fm.insertRule(Tm.rules[mm], hm++)
          } else {
            for (; Am < xm;) hm += this.modules[Am++].rules.length;
            hm += Tm.rules.length, Am++
          }
        }
        if (fm) Tm.adoptedStyleSheets.indexOf(this.sheet) < 0 && (Tm.adoptedStyleSheets = [this.sheet, ...Tm.adoptedStyleSheets]);
        else {
          let mm = "";
          for (let Tm = 0; Tm < this.modules.length; Tm++) mm += this.modules[Tm].getRules() + "\n";
          this.styleTag.textContent = mm;
          let fm = Tm.head || Tm;
          this.styleTag.parentNode != fm && fm.insertBefore(this.styleTag, fm.firstChild)
        }
      }
      setNonce(mm) {
        this.styleTag && this.styleTag.getAttribute("nonce") != mm && this.styleTag.setAttribute("nonce", mm)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);