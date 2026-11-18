export const id = 272;
export const ids = [272];
export const modules = {
  39751: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => nb,
      e: () => Gb,
      f: () => mW,
      g: () => Py,
      i: () => ub,
      j: () => oy,
      l: () => eb
    });
    var Uy = Wy(39754),
      hy = Wy(39759),
      fy = Wy(39779);
    class Zy {
      constructor(yb, bb, Wy, Uy) {
        this.state = yb, this.pos = bb, this.explicit = Wy, this.view = Uy, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(yb) {
        let bb = (0, fy.nb)(this.state).resolveInner(this.pos, -1);
        for (; bb && yb.indexOf(bb.name) < 0;) bb = bb.parent;
        return bb ? {
          from: bb.from,
          to: this.pos,
          text: this.state.sliceDoc(bb.from, this.pos),
          type: bb.type
        } : null
      }
      matchBefore(yb) {
        let bb = this.state.doc.lineAt(this.pos),
          Wy = Math.max(bb.from, this.pos - 250),
          Uy = bb.text.slice(Wy - bb.from, this.pos - bb.from),
          hy = Uy.search(ey(yb, !1));
        return hy < 0 ? null : {
          from: Wy + hy,
          to: this.pos,
          text: Uy.slice(hy)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(yb, bb, Wy) {
        "abort" == yb && this.abortListeners && (this.abortListeners.push(bb), Wy && Wy.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function cb(yb) {
      let bb = Object.keys(yb).join(""),
        Wy = /\w/.test(bb);
      return Wy && (bb = bb.replace(/\w/g, "")), `[${Wy?"\\w":""}${bb.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function Py(yb) {
      let bb = yb.map((yb => "string" == typeof yb ? {
          label: yb
        } : yb)),
        [Wy, Uy] = bb.every((yb => /^\w+$/.test(yb.label))) ? [/\w*$/, /\w+$/] : function(yb) {
          let bb = Object.create(null),
            Wy = Object.create(null);
          for (let {
              label: hy
            }
            of yb) {
            bb[hy[0]] = !0;
            for (let yb = 1; yb < hy.length; yb++) Wy[hy[yb]] = !0
          }
          let Uy = cb(bb) + cb(Wy) + "*$";
          return [new RegExp("^" + Uy), new RegExp(Uy)]
        }(bb);
      return yb => {
        let hy = yb.matchBefore(Uy);
        return hy || yb.explicit ? {
          from: hy ? hy.from : yb.pos,
          options: bb,
          validFor: Wy
        } : null
      }
    }

    function oy(yb, bb) {
      return Wy => {
        for (let bb = (0, fy.nb)(Wy.state).resolveInner(Wy.pos, -1); bb; bb = bb.parent) {
          if (yb.indexOf(bb.name) > -1) return null;
          if (bb.type.isTop) break
        }
        return bb(Wy)
      }
    }
    class By {
      constructor(yb, bb, Wy, Uy) {
        this.completion = yb, this.source = bb, this.match = Wy, this.score = Uy
      }
    }

    function Ky(yb) {
      return yb.selection.main.from
    }

    function ey(yb, bb) {
      var Wy;
      let {
        source: Uy
      } = yb, hy = bb && "^" != Uy[0], fy = "$" != Uy[Uy.length - 1];
      return hy || fy ? new RegExp(`${hy?"^":""}(?:${Uy})${fy?"$":""}`, null !== (Wy = yb.flags) && void 0 !== Wy ? Wy : yb.ignoreCase ? "i" : "") : yb
    }
    const qb = Uy.b.define();

    function sy(yb, bb, Wy, hy) {
      let {
        main: fy
      } = yb.selection, Zy = Wy - fy.from, cb = hy - fy.from;
      return {
        ...yb.changeByRange((Py => {
          if (Py != fy && Wy != hy && yb.sliceDoc(Py.from + Zy, Py.from + cb) != yb.sliceDoc(Wy, hy)) return {
            range: Py
          };
          let oy = yb.toText(bb);
          return {
            changes: {
              from: Py.from + Zy,
              to: hy == fy.from ? Py.to : Py.from + cb,
              insert: oy
            },
            range: Uy.n.cursor(Py.from + Zy + oy.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const Sy = new WeakMap;

    function Ey(yb) {
      if (!Array.isArray(yb)) return yb;
      let bb = Sy.get(yb);
      return bb || Sy.set(yb, bb = Py(yb)), bb
    }
    const ly = Uy.I.define(),
      mb = Uy.I.define();
    class Cy {
      constructor(yb) {
        this.pattern = yb, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let bb = 0; bb < yb.length;) {
          let Wy = (0, Uy.S)(yb, bb),
            hy = (0, Uy.W)(Wy);
          this.chars.push(Wy);
          let fy = yb.slice(bb, bb + hy),
            Zy = fy.toUpperCase();
          this.folded.push((0, Uy.S)(Zy == fy ? fy.toLowerCase() : Zy, 0)), bb += hy
        }
        this.astral = yb.length != this.chars.length
      }
      ret(yb, bb) {
        return this.score = yb, this.matched = bb, this
      }
      match(yb) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (yb.length < this.pattern.length) return null;
        let {
          chars: bb,
          folded: Wy,
          any: hy,
          precise: fy,
          byWord: Zy
        } = this;
        if (1 == bb.length) {
          let hy = (0, Uy.S)(yb, 0),
            fy = (0, Uy.W)(hy),
            Zy = fy == yb.length ? 0 : -100;
          if (hy == bb[0]);
          else {
            if (hy != Wy[0]) return null;
            Zy += -200
          }
          return this.ret(Zy, [0, fy])
        }
        let cb = yb.indexOf(this.pattern);
        if (0 == cb) return this.ret(yb.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let Py = bb.length,
          oy = 0;
        if (cb < 0) {
          for (let fy = 0, Zy = Math.min(yb.length, 200); fy < Zy && oy < Py;) {
            let Zy = (0, Uy.S)(yb, fy);
            Zy != bb[oy] && Zy != Wy[oy] || (hy[oy++] = fy), fy += (0, Uy.W)(Zy)
          }
          if (oy < Py) return null
        }
        let By = 0,
          Ky = 0,
          ey = !1,
          qb = 0,
          sy = -1,
          Sy = -1,
          Ey = /[a-z]/.test(yb),
          ly = !0;
        for (let mb = 0, Cy = Math.min(yb.length, 200), Ty = 0; mb < Cy && Ky < Py;) {
          let hy = (0, Uy.S)(yb, mb);
          cb < 0 && (By < Py && hy == bb[By] && (fy[By++] = mb), qb < Py && (hy == bb[qb] || hy == Wy[qb] ? (0 == qb && (sy = mb), Sy = mb + 1, qb++) : qb = 0));
          let oy, Cy = hy < 255 ? hy >= 48 && hy <= 57 || hy >= 97 && hy <= 122 ? 2 : hy >= 65 && hy <= 90 ? 1 : 0 : (oy = (0, Uy.gb)(hy)) != oy.toLowerCase() ? 1 : oy != oy.toUpperCase() ? 2 : 0;
          (!mb || 1 == Cy && Ey || 0 == Ty && 0 != Cy) && (bb[Ky] == hy || Wy[Ky] == hy && (ey = !0) ? Zy[Ky++] = mb : Zy.length && (ly = !1)), Ty = Cy, mb += (0, Uy.W)(hy)
        }
        return Ky == Py && 0 == Zy[0] && ly ? this.result((ey ? -200 : 0) - 100, Zy, yb) : qb == Py && 0 == sy ? this.ret(-200 - yb.length + (Sy == yb.length ? 0 : -100), [0, Sy]) : cb > -1 ? this.ret(-700 - yb.length, [cb, cb + this.pattern.length]) : qb == Py ? this.ret(-900 - yb.length, [sy, Sy]) : Ky == Py ? this.result((ey ? -200 : 0) - 100 - 700 + (ly ? 0 : -1100), Zy, yb) : 2 == bb.length ? null : this.result((hy[0] ? -700 : 0) - 200 - 1100, hy, yb)
      }
      result(yb, bb, Wy) {
        let hy = [],
          fy = 0;
        for (let Zy of bb) {
          let yb = Zy + (this.astral ? (0, Uy.W)((0, Uy.S)(Wy, Zy)) : 1);
          fy && hy[fy - 1] == Zy ? hy[fy - 1] = yb : (hy[fy++] = Zy, hy[fy++] = yb)
        }
        return this.ret(yb - Wy.length, hy)
      }
    }
    class Ty {
      constructor(yb) {
        this.pattern = yb, this.matched = [], this.score = 0, this.folded = yb.toLowerCase()
      }
      match(yb) {
        if (yb.length < this.pattern.length) return null;
        let bb = yb.slice(0, this.pattern.length),
          Wy = bb == this.pattern ? 0 : bb.toLowerCase() == this.folded ? -200 : null;
        return null == Wy ? null : (this.matched = [0, bb.length], this.score = Wy + (yb.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const Vy = Uy.v.define({
      combine: yb => (0, Uy._)(yb, {
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
        positionInfo: gb,
        filterStrict: !1,
        compareCompletions: (yb, bb) => (yb.sortText || yb.label).localeCompare(bb.sortText || bb.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (yb, bb) => yb && bb,
        closeOnBlur: (yb, bb) => yb && bb,
        icons: (yb, bb) => yb && bb,
        tooltipClass: (yb, bb) => Wy => Jy(yb(Wy), bb(Wy)),
        optionClass: (yb, bb) => Wy => Jy(yb(Wy), bb(Wy)),
        addToOptions: (yb, bb) => yb.concat(bb),
        filterStrict: (yb, bb) => yb || bb
      })
    });

    function Jy(yb, bb) {
      return yb ? bb ? yb + " " + bb : yb : bb
    }

    function gb(yb, bb, Wy, Uy, fy, Zy) {
      let cb, Py, oy = yb.textDirection == hy.h.RTL,
        By = oy,
        Ky = !1,
        ey = "top",
        qb = bb.left - fy.left,
        sy = fy.right - bb.right,
        Sy = Uy.right - Uy.left,
        Ey = Uy.bottom - Uy.top;
      if (By && qb < Math.min(Sy, sy) ? By = !1 : !By && sy < Math.min(Sy, qb) && (By = !0), Sy <= (By ? qb : sy)) cb = Math.max(fy.top, Math.min(Wy.top, fy.bottom - Ey)) - bb.top, Py = Math.min(400, By ? qb : sy);
      else {
        Ky = !0, Py = Math.min(400, (oy ? bb.right : fy.right - bb.left) - 30);
        let yb = fy.bottom - bb.bottom;
        yb >= Ey || yb > bb.top ? cb = Wy.bottom - bb.top : (ey = "bottom", cb = bb.bottom - Wy.top)
      }
      return {
        style: `${ey}: ${cb/((bb.bottom-bb.top)/Zy.offsetHeight)}px; max-width: ${Py/((bb.right-bb.left)/Zy.offsetWidth)}px`,
        class: "cm-completionInfo-" + (Ky ? oy ? "left-narrow" : "right-narrow" : By ? "left" : "right")
      }
    }
    const Gy = Uy.I.define();

    function Oy(yb, bb, Wy) {
      if (yb <= Wy) return {
        from: 0,
        to: yb
      };
      if (bb < 0 && (bb = 0), bb <= yb >> 1) {
        let yb = Math.floor(bb / Wy);
        return {
          from: yb * Wy,
          to: (yb + 1) * Wy
        }
      }
      let Uy = Math.floor((yb - bb) / Wy);
      return {
        from: yb - (Uy + 1) * Wy,
        to: yb - Uy * Wy
      }
    }
    class Ry {
      constructor(yb, bb, Wy) {
        this.view = yb, this.stateField = bb, this.applyCompletion = Wy, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: yb => this.placeInfo(yb),
          key: this
        }, this.space = null, this.currentClass = "";
        let Uy = yb.state.field(bb),
          {
            options: hy,
            selected: fy
          } = Uy.open,
          Zy = yb.state.facet(Vy);
        this.optionContent = function(yb) {
          let bb = yb.addToOptions.slice();
          return yb.icons && bb.push({
            render(yb) {
              let bb = document.createElement("div");
              return bb.classList.add("cm-completionIcon"), yb.type && bb.classList.add(...yb.type.split(/\s+/g).map((yb => "cm-completionIcon-" + yb))), bb.setAttribute("aria-hidden", "true"), bb
            },
            position: 20
          }), bb.push({
            render(yb, bb, Wy, Uy) {
              let hy = document.createElement("span");
              hy.className = "cm-completionLabel";
              let fy = yb.displayLabel || yb.label,
                Zy = 0;
              for (let cb = 0; cb < Uy.length;) {
                let yb = Uy[cb++],
                  bb = Uy[cb++];
                yb > Zy && hy.appendChild(document.createTextNode(fy.slice(Zy, yb)));
                let Wy = hy.appendChild(document.createElement("span"));
                Wy.appendChild(document.createTextNode(fy.slice(yb, bb))), Wy.className = "cm-completionMatchedText", Zy = bb
              }
              return Zy < fy.length && hy.appendChild(document.createTextNode(fy.slice(Zy))), hy
            },
            position: 50
          }, {
            render(yb) {
              if (!yb.detail) return null;
              let bb = document.createElement("span");
              return bb.className = "cm-completionDetail", bb.textContent = yb.detail, bb
            },
            position: 80
          }), bb.sort(((yb, bb) => yb.position - bb.position)).map((yb => yb.render))
        }(Zy), this.optionClass = Zy.optionClass, this.tooltipClass = Zy.tooltipClass, this.range = Oy(hy.length, fy, Zy.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(yb.state), this.dom.addEventListener("mousedown", (Wy => {
          let {
            options: Uy
          } = yb.state.field(bb).open;
          for (let bb, hy = Wy.target; hy && hy != this.dom; hy = hy.parentNode)
            if ("LI" == hy.nodeName && (bb = /-(\d+)$/.exec(hy.id)) && +bb[1] < Uy.length) return this.applyCompletion(yb, Uy[+bb[1]]), void Wy.preventDefault();
          if (Wy.target == this.list) {
            let bb = this.list.classList.contains("cm-completionListIncompleteTop") && Wy.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && Wy.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != bb && (yb.dispatch({
              effects: Gy.of(bb)
            }), Wy.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (bb => {
          let Wy = yb.state.field(this.stateField, !1);
          Wy && Wy.tooltip && yb.state.facet(Vy).closeOnBlur && bb.relatedTarget != yb.contentDOM && yb.dispatch({
            effects: mb.of(null)
          })
        })), this.showOptions(hy, Uy.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(yb, bb) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(yb, bb, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(yb) {
        var bb;
        let Wy = yb.state.field(this.stateField),
          Uy = yb.startState.field(this.stateField);
        if (this.updateTooltipClass(yb.state), Wy != Uy) {
          let {
            options: hy,
            selected: fy,
            disabled: Zy
          } = Wy.open;
          Uy.open && Uy.open.options == hy || (this.range = Oy(hy.length, fy, yb.state.facet(Vy).maxRenderedOptions), this.showOptions(hy, Wy.id)), this.updateSel(), Zy != (null === (bb = Uy.open) || void 0 === bb ? void 0 : bb.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!Zy)
        }
      }
      updateTooltipClass(yb) {
        let bb = this.tooltipClass(yb);
        if (bb != this.currentClass) {
          for (let yb of this.currentClass.split(" ")) yb && this.dom.classList.remove(yb);
          for (let yb of bb.split(" ")) yb && this.dom.classList.add(yb);
          this.currentClass = bb
        }
      }
      positioned(yb) {
        this.space = yb, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let yb = this.view.state.field(this.stateField),
          bb = yb.open;
        (bb.selected > -1 && bb.selected < this.range.from || bb.selected >= this.range.to) && (this.range = Oy(bb.options.length, bb.selected, this.view.state.facet(Vy).maxRenderedOptions), this.showOptions(bb.options, yb.id));
        let Wy = this.updateSelectedOption(bb.selected);
        if (Wy) {
          this.destroyInfo();
          let {
            completion: Uy
          } = bb.options[bb.selected], {
            info: fy
          } = Uy;
          if (!fy) return;
          let Zy = "string" === typeof fy ? document.createTextNode(fy) : fy(Uy);
          if (!Zy) return;
          "then" in Zy ? Zy.then((bb => {
            bb && this.view.state.field(this.stateField, !1) == yb && this.addInfoPane(bb, Uy)
          })).catch((yb => (0, hy.Y)(this.view.state, yb, "completion info"))) : (this.addInfoPane(Zy, Uy), Wy.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(yb, bb) {
        this.destroyInfo();
        let Wy = this.info = document.createElement("div");
        if (Wy.className = "cm-tooltip cm-completionInfo", Wy.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != yb.nodeType) Wy.appendChild(yb), this.infoDestroy = null;
        else {
          let {
            dom: bb,
            destroy: Uy
          } = yb;
          Wy.appendChild(bb), this.infoDestroy = Uy || null
        }
        this.dom.appendChild(Wy), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(yb) {
        let bb = null;
        for (let Wy = this.list.firstChild, Uy = this.range.from; Wy; Wy = Wy.nextSibling, Uy++) "LI" == Wy.nodeName && Wy.id ? Uy == yb ? Wy.hasAttribute("aria-selected") || (Wy.setAttribute("aria-selected", "true"), bb = Wy) : Wy.hasAttribute("aria-selected") && (Wy.removeAttribute("aria-selected"), Wy.removeAttribute("aria-describedby")) : Uy--;
        return bb && function(yb, bb) {
          let Wy = yb.getBoundingClientRect(),
            Uy = bb.getBoundingClientRect(),
            hy = Wy.height / yb.offsetHeight;
          Uy.top < Wy.top ? yb.scrollTop -= (Wy.top - Uy.top) / hy : Uy.bottom > Wy.bottom && (yb.scrollTop += (Uy.bottom - Wy.bottom) / hy)
        }(this.list, bb), bb
      }
      measureInfo() {
        let yb = this.dom.querySelector("[aria-selected]");
        if (!yb || !this.info) return null;
        let bb = this.dom.getBoundingClientRect(),
          Wy = this.info.getBoundingClientRect(),
          Uy = yb.getBoundingClientRect(),
          hy = this.space;
        if (!hy) {
          let yb = this.dom.ownerDocument.documentElement;
          hy = {
            left: 0,
            top: 0,
            right: yb.clientWidth,
            bottom: yb.clientHeight
          }
        }
        return Uy.top > Math.min(hy.bottom, bb.bottom) - 10 || Uy.bottom < Math.max(hy.top, bb.top) + 10 ? null : this.view.state.facet(Vy).positionInfo(this.view, bb, Uy, Wy, hy, this.dom)
      }
      placeInfo(yb) {
        this.info && (yb ? (yb.style && (this.info.style.cssText = yb.style), this.info.className = "cm-tooltip cm-completionInfo " + (yb.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(yb, bb, Wy) {
        const Uy = document.createElement("ul");
        Uy.id = bb, Uy.setAttribute("role", "listbox"), Uy.setAttribute("aria-expanded", "true"), Uy.setAttribute("aria-label", this.view.state.phrase("Completions")), Uy.addEventListener("mousedown", (yb => {
          yb.target == Uy && yb.preventDefault()
        }));
        let hy = null;
        for (let fy = Wy.from; fy < Wy.to; fy++) {
          let {
            completion: Zy,
            match: cb
          } = yb[fy], {
            section: Py
          } = Zy;
          if (Py) {
            let yb = "string" == typeof Py ? Py : Py.name;
            if (yb != hy && (fy > Wy.from || 0 == Wy.from))
              if (hy = yb, "string" != typeof Py && Py.header) Uy.appendChild(Py.header(Py));
              else {
                Uy.appendChild(document.createElement("completion-section")).textContent = yb
              }
          }
          const oy = Uy.appendChild(document.createElement("li"));
          oy.id = bb + "-" + fy, oy.setAttribute("role", "option");
          let By = this.optionClass(Zy);
          By && (oy.className = By);
          for (let yb of this.optionContent) {
            let bb = yb(Zy, this.view.state, this.view, cb);
            bb && oy.appendChild(bb)
          }
        }
        return Wy.from && Uy.classList.add("cm-completionListIncompleteTop"), Wy.to < yb.length && Uy.classList.add("cm-completionListIncompleteBottom"), Uy
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function vb(yb, bb) {
      return Wy => new Ry(Wy, yb, bb)
    }

    function ib(yb) {
      return 100 * (yb.boost || 0) + (yb.apply ? 10 : 0) + (yb.info ? 5 : 0) + (yb.type ? 1 : 0)
    }
    class My {
      constructor(yb, bb, Wy, Uy, hy, fy) {
        this.options = yb, this.attrs = bb, this.tooltip = Wy, this.timestamp = Uy, this.selected = hy, this.disabled = fy
      }
      setSelected(yb, bb) {
        return yb == this.selected || yb >= this.options.length ? this : new My(this.options, uy(bb, yb), this.tooltip, this.timestamp, yb, this.disabled)
      }
      static build(yb, bb, Wy, Uy, hy, fy) {
        if (Uy && !fy && yb.some((yb => yb.isPending))) return Uy.setDisabled();
        let Zy = function(yb, bb) {
          let Wy = [],
            Uy = null,
            hy = null,
            fy = yb => {
              Wy.push(yb);
              let {
                section: bb
              } = yb.completion;
              if (bb) {
                Uy || (Uy = []);
                let yb = "string" == typeof bb ? bb : bb.name;
                Uy.some((bb => bb.name == yb)) || Uy.push("string" == typeof bb ? {
                  name: yb
                } : bb)
              }
            },
            Zy = bb.facet(Vy);
          for (let Ky of yb)
            if (Ky.hasResult()) {
              let yb = Ky.result.getMatch;
              if (!1 === Ky.result.filter)
                for (let bb of Ky.result.options) fy(new By(bb, Ky.source, yb ? yb(bb) : [], 1e9 - Wy.length));
              else {
                let Wy, Uy = bb.sliceDoc(Ky.from, Ky.to),
                  cb = Zy.filterStrict ? new Ty(Uy) : new Cy(Uy);
                for (let bb of Ky.result.options)
                  if (Wy = cb.match(bb.label)) {
                    let Uy = bb.displayLabel ? yb ? yb(bb, Wy.matched) : [] : Wy.matched,
                      Zy = Wy.score + (bb.boost || 0);
                    if (fy(new By(bb, Ky.source, Uy, Zy)), "object" == typeof bb.section && "dynamic" === bb.section.rank) {
                      let {
                        name: yb
                      } = bb.section;
                      hy || (hy = Object.create(null)), hy[yb] = Math.max(Zy, hy[yb] || -1e9)
                    }
                  }
              }
            } if (Uy) {
            let yb = Object.create(null),
              bb = 0,
              fy = (yb, bb) => ("dynamic" === yb.rank && "dynamic" === bb.rank ? hy[bb.name] - hy[yb.name] : 0) || ("number" == typeof yb.rank ? yb.rank : 1e9) - ("number" == typeof bb.rank ? bb.rank : 1e9) || (yb.name < bb.name ? -1 : 1);
            for (let Wy of Uy.sort(fy)) bb -= 1e5, yb[Wy.name] = bb;
            for (let Uy of Wy) {
              let {
                section: bb
              } = Uy.completion;
              bb && (Uy.score += yb["string" == typeof bb ? bb : bb.name])
            }
          }
          let cb = [],
            Py = null,
            oy = Zy.compareCompletions;
          for (let By of Wy.sort(((yb, bb) => bb.score - yb.score || oy(yb.completion, bb.completion)))) {
            let yb = By.completion;
            !Py || Py.label != yb.label || Py.detail != yb.detail || null != Py.type && null != yb.type && Py.type != yb.type || Py.apply != yb.apply || Py.boost != yb.boost ? cb.push(By) : ib(By.completion) > ib(Py) && (cb[cb.length - 1] = By), Py = By.completion
          }
          return cb
        }(yb, bb);
        if (!Zy.length) return Uy && yb.some((yb => yb.isPending)) ? Uy.setDisabled() : null;
        let cb = bb.facet(Vy).selectOnOpen ? 0 : -1;
        if (Uy && Uy.selected != cb && -1 != Uy.selected) {
          let yb = Uy.options[Uy.selected].completion;
          for (let bb = 0; bb < Zy.length; bb++)
            if (Zy[bb].completion == yb) {
              cb = bb;
              break
            }
        }
        return new My(Zy, uy(Wy, cb), {
          pos: yb.reduce(((yb, bb) => bb.hasResult() ? Math.min(yb, bb.from) : yb), 1e8),
          create: jb,
          above: hy.aboveCursor
        }, Uy ? Uy.timestamp : Date.now(), cb, !1)
      }
      map(yb) {
        return new My(this.options, this.attrs, {
          ...this.tooltip,
          pos: yb.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new My(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class Yy {
      constructor(yb, bb, Wy) {
        this.active = yb, this.id = bb, this.open = Wy
      }
      static start() {
        return new Yy(rb, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(yb) {
        let {
          state: bb
        } = yb, Wy = bb.facet(Vy), Uy = (Wy.override || bb.languageDataAt("autocomplete", Ky(bb)).map(Ey)).map((bb => (this.active.find((yb => yb.source == bb)) || new ab(bb, this.active.some((yb => 0 != yb.state)) ? 1 : 0)).update(yb, Wy)));
        Uy.length == this.active.length && Uy.every(((yb, bb) => yb == this.active[bb])) && (Uy = this.active);
        let hy = this.open,
          fy = yb.effects.some((yb => yb.is(py)));
        hy && yb.docChanged && (hy = hy.map(yb.changes)), yb.selection || Uy.some((bb => bb.hasResult() && yb.changes.touchesRange(bb.from, bb.to))) || ! function(yb, bb) {
          if (yb == bb) return !0;
          for (let Wy = 0, Uy = 0;;) {
            for (; Wy < yb.length && !yb[Wy].hasResult();) Wy++;
            for (; Uy < bb.length && !bb[Uy].hasResult();) Uy++;
            let hy = Wy == yb.length,
              fy = Uy == bb.length;
            if (hy || fy) return hy == fy;
            if (yb[Wy++].result != bb[Uy++].result) return !1
          }
        }(Uy, this.active) || fy ? hy = My.build(Uy, bb, this.id, hy, Wy, fy) : hy && hy.disabled && !Uy.some((yb => yb.isPending)) && (hy = null), !hy && Uy.every((yb => !yb.isPending)) && Uy.some((yb => yb.hasResult())) && (Uy = Uy.map((yb => yb.hasResult() ? new ab(yb.source, 0) : yb)));
        for (let Zy of yb.effects) Zy.is(Gy) && (hy = hy && hy.setSelected(Zy.value, this.id));
        return Uy == this.active && hy == this.open ? this : new Yy(Uy, this.id, hy)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? Xy : ny
      }
    }
    const Xy = {
        "aria-autocomplete": "list"
      },
      ny = {};

    function uy(yb, bb) {
      let Wy = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": yb
      };
      return bb > -1 && (Wy["aria-activedescendant"] = yb + "-" + bb), Wy
    }
    const rb = [];

    function Hy(yb, bb) {
      if (yb.isUserEvent("input.complete")) {
        let Wy = yb.annotation(qb);
        if (Wy && bb.activateOnCompletion(Wy)) return 12
      }
      let Wy = yb.isUserEvent("input.type");
      return Wy && bb.activateOnTyping ? 5 : Wy ? 1 : yb.isUserEvent("delete.backward") ? 2 : yb.selection ? 8 : yb.docChanged ? 16 : 0
    }
    class ab {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = yb, this.state = bb, this.explicit = Wy
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(yb, bb) {
        let Wy = Hy(yb, bb),
          Uy = this;
        (8 & Wy || 16 & Wy && this.touches(yb)) && (Uy = new ab(Uy.source, 0)), 4 & Wy && 0 == Uy.state && (Uy = new ab(this.source, 1)), Uy = Uy.updateFor(yb, Wy);
        for (let hy of yb.effects)
          if (hy.is(ly)) Uy = new ab(Uy.source, 1, hy.value);
          else if (hy.is(mb)) Uy = new ab(Uy.source, 0);
        else if (hy.is(py))
          for (let yb of hy.value) yb.source == Uy.source && (Uy = yb);
        return Uy
      }
      updateFor(yb, bb) {
        return this.map(yb.changes)
      }
      map(yb) {
        return this
      }
      touches(yb) {
        return yb.changes.touchesRange(Ky(yb.state))
      }
    }
    class Fy extends ab {
      constructor(yb, bb, Wy, Uy, hy, fy) {
        super(yb, 3, bb), this.limit = Wy, this.result = Uy, this.from = hy, this.to = fy
      }
      hasResult() {
        return !0
      }
      updateFor(yb, bb) {
        var Wy;
        if (!(3 & bb)) return this.map(yb.changes);
        let Uy = this.result;
        Uy.map && !yb.changes.empty && (Uy = Uy.map(Uy, yb.changes));
        let hy = yb.changes.mapPos(this.from),
          fy = yb.changes.mapPos(this.to, 1),
          cb = Ky(yb.state);
        if (cb > fy || !Uy || 2 & bb && (Ky(yb.startState) == this.from || cb < this.limit)) return new ab(this.source, 4 & bb ? 1 : 0);
        let Py = yb.changes.mapPos(this.limit);
        return function(yb, bb, Wy, Uy) {
          if (!yb) return !1;
          let hy = bb.sliceDoc(Wy, Uy);
          return "function" == typeof yb ? yb(hy, Wy, Uy, bb) : ey(yb, !0).test(hy)
        }(Uy.validFor, yb.state, hy, fy) ? new Fy(this.source, this.explicit, Py, Uy, hy, fy) : Uy.update && (Uy = Uy.update(Uy, hy, fy, new Zy(yb.state, cb, !1))) ? new Fy(this.source, this.explicit, Py, Uy, Uy.from, null !== (Wy = Uy.to) && void 0 !== Wy ? Wy : Ky(yb.state)) : new ab(this.source, 1, this.explicit)
      }
      map(yb) {
        if (yb.empty) return this;
        return (this.result.map ? this.result.map(this.result, yb) : this.result) ? new Fy(this.source, this.explicit, yb.mapPos(this.limit), this.result, yb.mapPos(this.from), yb.mapPos(this.to, 1)) : new ab(this.source, 0)
      }
      touches(yb) {
        return yb.changes.touchesRange(this.from, this.to)
      }
    }
    const py = Uy.I.define({
        map: (yb, bb) => yb.map((yb => yb.map(bb)))
      }),
      Ly = Uy.J.define({
        create: () => Yy.start(),
        update: (yb, bb) => yb.update(bb),
        provide: yb => [hy.mb.from(yb, (yb => yb.tooltip)), hy.k.contentAttributes.from(yb, (yb => yb.attrs))]
      });

    function Qy(yb, bb) {
      const Wy = bb.completion.apply || bb.completion.label;
      let Uy = yb.state.field(Ly).active.find((yb => yb.source == bb.source));
      return Uy instanceof Fy && ("string" == typeof Wy ? yb.dispatch({
        ...sy(yb.state, Wy, Uy.from, Uy.to),
        annotations: qb.of(bb.completion)
      }) : Wy(yb, bb.completion, Uy.from, Uy.to), !0)
    }
    const jb = vb(Ly, Qy);

    function Dy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return Wy => {
        let Uy = Wy.state.field(Ly, !1);
        if (!Uy || !Uy.open || Uy.open.disabled || Date.now() - Uy.open.timestamp < Wy.state.facet(Vy).interactionDelay) return !1;
        let fy, Zy = 1;
        "page" == bb && (fy = (0, hy.D)(Wy, Uy.open.tooltip)) && (Zy = Math.max(2, Math.floor(fy.dom.offsetHeight / fy.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: cb
        } = Uy.open.options, Py = Uy.open.selected > -1 ? Uy.open.selected + Zy * (yb ? 1 : -1) : yb ? 0 : cb - 1;
        return Py < 0 ? Py = "page" == bb ? 0 : cb - 1 : Py >= cb && (Py = "page" == bb ? cb - 1 : 0), Wy.dispatch({
          effects: Gy.of(Py)
        }), !0
      }
    }
    const tb = yb => !!yb.state.field(Ly, !1) && (yb.dispatch({
      effects: ly.of(!0)
    }), !0);
    class wy {
      constructor(yb, bb) {
        this.active = yb, this.context = bb, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const kb = hy.n.fromClass(class {
        constructor(yb) {
          this.view = yb, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let bb of yb.state.field(Ly).active) bb.isPending && this.startQuery(bb)
        }
        update(yb) {
          let bb = yb.state.field(Ly),
            Wy = yb.state.facet(Vy);
          if (!yb.selectionSet && !yb.docChanged && yb.startState.field(Ly) == bb) return;
          let Uy = yb.transactions.some((yb => {
            let bb = Hy(yb, Wy);
            return 8 & bb || (yb.selection || yb.docChanged) && !(3 & bb)
          }));
          for (let cb = 0; cb < this.running.length; cb++) {
            let bb = this.running[cb];
            if (Uy || bb.context.abortOnDocChange && yb.docChanged || bb.updates.length + yb.transactions.length > 50 && Date.now() - bb.time > 1e3) {
              for (let yb of bb.context.abortListeners) try {
                yb()
              } catch (Zy) {
                (0, hy.Y)(this.view.state, Zy)
              }
              bb.context.abortListeners = null, this.running.splice(cb--, 1)
            } else bb.updates.push(...yb.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), yb.transactions.some((yb => yb.effects.some((yb => yb.is(ly))))) && (this.pendingStart = !0);
          let fy = this.pendingStart ? 50 : Wy.activateOnTypingDelay;
          if (this.debounceUpdate = bb.active.some((yb => yb.isPending && !this.running.some((bb => bb.active.source == yb.source)))) ? setTimeout((() => this.startUpdate()), fy) : -1, 0 != this.composing)
            for (let hy of yb.transactions) hy.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && hy.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: yb
          } = this.view, bb = yb.field(Ly);
          for (let Wy of bb.active) Wy.isPending && !this.running.some((yb => yb.active.source == Wy.source)) && this.startQuery(Wy);
          this.running.length && bb.open && bb.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Vy).updateSyncTime))
        }
        startQuery(yb) {
          let {
            state: bb
          } = this.view, Wy = Ky(bb), Uy = new Zy(bb, Wy, yb.explicit, this.view), fy = new wy(yb, Uy);
          this.running.push(fy), Promise.resolve(yb.source(Uy)).then((yb => {
            fy.context.aborted || (fy.done = yb || null, this.scheduleAccept())
          }), (yb => {
            this.view.dispatch({
              effects: mb.of(null)
            }), (0, hy.Y)(this.view.state, yb)
          }))
        }
        scheduleAccept() {
          this.running.every((yb => void 0 !== yb.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(Vy).updateSyncTime))
        }
        accept() {
          var yb;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let bb = [],
            Wy = this.view.state.facet(Vy),
            Uy = this.view.state.field(Ly);
          for (let hy = 0; hy < this.running.length; hy++) {
            let fy = this.running[hy];
            if (void 0 === fy.done) continue;
            if (this.running.splice(hy--, 1), fy.done) {
              let Uy = Ky(fy.updates.length ? fy.updates[0].startState : this.view.state),
                hy = Math.min(Uy, fy.done.from + (fy.active.explicit ? 0 : 1)),
                Zy = new Fy(fy.active.source, fy.active.explicit, hy, fy.done, fy.done.from, null !== (yb = fy.done.to) && void 0 !== yb ? yb : Uy);
              for (let yb of fy.updates) Zy = Zy.update(yb, Wy);
              if (Zy.hasResult()) {
                bb.push(Zy);
                continue
              }
            }
            let Zy = Uy.active.find((yb => yb.source == fy.active.source));
            if (Zy && Zy.isPending)
              if (null == fy.done) {
                let yb = new ab(fy.active.source, 0);
                for (let bb of fy.updates) yb = yb.update(bb, Wy);
                yb.isPending || bb.push(yb)
              } else this.startQuery(Zy)
          }(bb.length || Uy.open && Uy.open.disabled) && this.view.dispatch({
            effects: py.of(bb)
          })
        }
      }, {
        eventHandlers: {
          blur(yb) {
            let bb = this.view.state.field(Ly, !1);
            if (bb && bb.tooltip && this.view.state.facet(Vy).closeOnBlur) {
              let Wy = bb.open && (0, hy.D)(this.view, bb.open.tooltip);
              Wy && Wy.dom.contains(yb.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: mb.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: ly.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      Ny = "object" == typeof navigator && /Win/.test(navigator.platform),
      zb = Uy.z.highest(hy.k.domEventHandlers({
        keydown(yb, bb) {
          let Wy = bb.state.field(Ly, !1);
          if (!Wy || !Wy.open || Wy.open.disabled || Wy.open.selected < 0 || yb.key.length > 1 || yb.ctrlKey && (!Ny || !yb.altKey) || yb.metaKey) return !1;
          let Uy = Wy.open.options[Wy.open.selected],
            hy = Wy.active.find((yb => yb.source == Uy.source)),
            fy = Uy.completion.commitCharacters || hy.result.commitCharacters;
          return fy && fy.indexOf(yb.key) > -1 && Qy(bb, Uy), !1
        }
      })),
      Iy = hy.k.baseTheme({
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
    class xb {
      constructor(yb, bb, Wy, Uy) {
        this.field = yb, this.line = bb, this.from = Wy, this.to = Uy
      }
    }
    class Ay {
      constructor(yb, bb, Wy) {
        this.field = yb, this.from = bb, this.to = Wy
      }
      map(yb) {
        let bb = yb.mapPos(this.from, -1, Uy.y.TrackDel),
          Wy = yb.mapPos(this.to, 1, Uy.y.TrackDel);
        return null == bb || null == Wy ? null : new Ay(this.field, bb, Wy)
      }
    }
    class dy {
      constructor(yb, bb) {
        this.lines = yb, this.fieldPositions = bb
      }
      instantiate(yb, bb) {
        let Wy = [],
          Uy = [bb],
          hy = yb.doc.lineAt(bb),
          Zy = /^\s*/.exec(hy.text)[0];
        for (let Py of this.lines) {
          if (Wy.length) {
            let Wy = Zy,
              hy = /^\t*/.exec(Py)[0].length;
            for (let bb = 0; bb < hy; bb++) Wy += yb.facet(fy.$);
            Uy.push(bb + Wy.length - hy), Py = Wy + Py.slice(hy)
          }
          Wy.push(Py), bb += Py.length + 1
        }
        let cb = this.fieldPositions.map((yb => new Ay(yb.field, Uy[yb.line] + yb.from, Uy[yb.line] + yb.to)));
        return {
          text: Wy,
          lZ: cb
        }
      }
      static parse(yb) {
        let bb, Wy = [],
          Uy = [],
          hy = [];
        for (let fy of yb.split(/\r\n?|\n/)) {
          for (; bb = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(fy);) {
            let yb = bb[1] ? +bb[1] : null,
              Zy = bb[2] || bb[3] || "",
              cb = -1,
              Py = Zy.replace(/\\[{}]/g, (yb => yb[1]));
            for (let bb = 0; bb < Wy.length; bb++)(null != yb ? Wy[bb].seq == yb : Py && Wy[bb].name == Py) && (cb = bb);
            if (cb < 0) {
              let bb = 0;
              for (; bb < Wy.length && (null == yb || null != Wy[bb].seq && Wy[bb].seq < yb);) bb++;
              Wy.splice(bb, 0, {
                seq: yb,
                name: Py
              }), cb = bb;
              for (let yb of hy) yb.field >= cb && yb.field++
            }
            for (let Wy of hy)
              if (Wy.line == Uy.length && Wy.from > bb.index) {
                let yb = bb[2] ? 3 + (bb[1] || "").length : 2;
                Wy.from -= yb, Wy.to -= yb
              } hy.push(new xb(cb, Uy.length, bb.index, bb.index + Py.length)), fy = fy.slice(0, bb.index) + Zy + fy.slice(bb.index + bb[0].length)
          }
          fy = fy.replace(/\\([{}])/g, ((yb, bb, Wy) => {
            for (let fy of hy) fy.line == Uy.length && fy.from > Wy && (fy.from--, fy.to--);
            return bb
          })), Uy.push(fy)
        }
        return new dy(Uy, hy)
      }
    }
    let yW = hy.e.widget({
        widget: new class extends hy.q {
          toDOM() {
            let yb = document.createElement("span");
            return yb.className = "cm-snippetFieldPosition", yb
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      bW = hy.e.mark({
        class: "cm-snippetField"
      });
    class Wb {
      constructor(yb, bb) {
        this.lZ = yb, this.active = bb, this.deco = hy.e.set(yb.map((yb => (yb.from == yb.to ? yW : bW).range(yb.from, yb.to))), !0)
      }
      map(yb) {
        let bb = [];
        for (let Wy of this.lZ) {
          let Uy = Wy.map(yb);
          if (!Uy) return null;
          bb.push(Uy)
        }
        return new Wb(bb, this.active)
      }
      selectionInsideField(yb) {
        return yb.lZ.every((yb => this.lZ.some((bb => bb.field == this.active && bb.from <= yb.from && bb.to >= yb.to))))
      }
    }
    const Ub = Uy.I.define({
        map: (yb, bb) => yb && yb.map(bb)
      }),
      hb = Uy.I.define(),
      fb = Uy.J.define({
        create: () => null,
        update(yb, bb) {
          for (let Wy of bb.effects) {
            if (Wy.is(Ub)) return Wy.value;
            if (Wy.is(hb) && yb) return new Wb(yb.lZ, Wy.value)
          }
          return yb && bb.docChanged && (yb = yb.map(bb.changes)), yb && bb.selection && !yb.selectionInsideField(bb.selection) && (yb = null), yb
        },
        provide: yb => hy.k.PZ.from(yb, (yb => yb ? yb.deco : hy.e.none))
      });

    function Zb(yb, bb) {
      return Uy.n.create(yb.filter((yb => yb.field == bb)).map((yb => Uy.n.range(yb.from, yb.to))))
    }

    function cW(yb) {
      let bb = dy.parse(yb);
      return (yb, Wy, hy, fy) => {
        let {
          text: Zy,
          lZ: cb
        } = bb.instantiate(yb.state, hy), {
          main: Py
        } = yb.state.selection, oy = {
          changes: {
            from: hy,
            to: fy == Py.from ? Py.to : fy,
            insert: Uy.K.of(Zy)
          },
          scrollIntoView: !0,
          annotations: Wy ? [qb.of(Wy), Uy.O.userEvent.of("input.complete")] : void 0
        };
        if (cb.length && (oy.selection = Zb(cb, 0)), cb.some((yb => yb.field > 0))) {
          let bb = new Wb(cb, 0),
            Wy = oy.effects = [Ub.of(bb)];
          void 0 === yb.state.field(fb, !1) && Wy.push(Uy.I.appendConfig.of([fb, Kb, qW, Iy]))
        }
        yb.dispatch(yb.state.update(oy))
      }
    }

    function Pb(yb) {
      return bb => {
        let {
          state: Wy,
          dispatch: Uy
        } = bb, hy = Wy.field(fb, !1);
        if (!hy || yb < 0 && 0 == hy.active) return !1;
        let fy = hy.active + yb,
          Zy = yb > 0 && !hy.lZ.some((bb => bb.field == fy + yb));
        return Uy(Wy.update({
          selection: Zb(hy.lZ, fy),
          effects: Ub.of(Zy ? null : new Wb(hy.lZ, fy)),
          scrollIntoView: !0
        })), !0
      }
    }
    const ob = [{
        key: "Tab",
        run: Pb(1),
        shift: Pb(-1)
      }, {
        key: "Escape",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb;
          return !!bb.field(fb, !1) && (Wy(bb.update({
            effects: Ub.of(null)
          })), !0)
        }
      }],
      Bb = Uy.v.define({
        combine: yb => yb.length ? yb[0] : ob
      }),
      Kb = Uy.z.highest(hy.W.compute([Bb], (yb => yb.facet(Bb))));

    function eb(yb, bb) {
      return {
        ...bb,
        apply: cW(yb)
      }
    }
    const qW = hy.k.domEventHandlers({
      mousedown(yb, bb) {
        let Wy, Uy = bb.state.field(fb, !1);
        if (!Uy || null == (Wy = bb.posAtCoords({
            x: yb.clientX,
            y: yb.clientY
          }))) return !1;
        let hy = Uy.lZ.find((yb => yb.from <= Wy && yb.to >= Wy));
        return !(!hy || hy.field == Uy.active) && (bb.dispatch({
          selection: Zb(Uy.lZ, hy.field),
          effects: Ub.of(Uy.lZ.some((yb => yb.field > hy.field)) ? new Wb(Uy.lZ, hy.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const sb = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      Sb = Uy.I.define({
        map(yb, bb) {
          let Wy = bb.mapPos(yb, -1, Uy.y.TrackAfter);
          return null == Wy ? void 0 : Wy
        }
      }),
      Eb = new class extends Uy.F {};
    Eb.startSide = 1, Eb.endSide = -1;
    const lb = Uy.J.define({
      create: () => Uy.E.empty,
      update(yb, bb) {
        if (yb = yb.map(bb.changes), bb.selection) {
          let Wy = bb.state.doc.lineAt(bb.selection.main.head);
          yb = yb.update({
            filter: yb => yb >= Wy.from && yb <= Wy.to
          })
        }
        for (let Wy of bb.effects) Wy.is(Sb) && (yb = yb.update({
          add: [Eb.range(Wy.value, Wy.value + 1)]
        }));
        return yb
      }
    });

    function mW() {
      return [gW, lb]
    }
    const Cb = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function Tb(yb) {
      for (let bb = 0; bb < 16; bb += 2)
        if (Cb.charCodeAt(bb) == yb) return Cb.charAt(bb + 1);
      return (0, Uy.gb)(yb < 128 ? yb : yb + 1)
    }

    function Vb(yb, bb) {
      return yb.languageDataAt("closeBrackets", bb)[0] || sb
    }
    const Jb = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      gW = hy.k.inputHandler.of(((yb, bb, Wy, hy) => {
        if ((Jb ? yb.composing : yb.compositionStarted) || yb.state.readOnly) return !1;
        let fy = yb.state.selection.main;
        if (hy.length > 2 || 2 == hy.length && 1 == (0, Uy.W)((0, Uy.S)(hy, 0)) || bb != fy.from || Wy != fy.to) return !1;
        let Zy = function(yb, bb) {
          let Wy = Vb(yb, yb.selection.main.head),
            hy = Wy.brackets || sb.brackets;
          for (let fy of hy) {
            let Zy = Tb((0, Uy.S)(fy, 0));
            if (bb == fy) return Zy == fy ? Mb(yb, fy, hy.indexOf(fy + fy + fy) > -1, Wy) : vW(yb, fy, Zy, Wy.before || sb.before);
            if (bb == Zy && Ob(yb, yb.selection.main.from)) return iW(yb, fy, Zy)
          }
          return null
        }(yb.state, hy);
        return !!Zy && (yb.dispatch(Zy), !0)
      })),
      Gb = [{
        key: "Backspace",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb;
          if (bb.readOnly) return !1;
          let hy = Vb(bb, bb.selection.main.head).brackets || sb.brackets,
            fy = null,
            Zy = bb.changeByRange((yb => {
              if (yb.empty) {
                let Wy = function(yb, bb) {
                  let Wy = yb.sliceString(bb - 2, bb);
                  return (0, Uy.W)((0, Uy.S)(Wy, 0)) == Wy.length ? Wy : Wy.slice(1)
                }(bb.doc, yb.head);
                for (let fy of hy)
                  if (fy == Wy && Rb(bb.doc, yb.head) == Tb((0, Uy.S)(fy, 0))) return {
                    changes: {
                      from: yb.head - fy.length,
                      to: yb.head + fy.length
                    },
                    range: Uy.n.cursor(yb.head - fy.length)
                  }
              }
              return {
                range: fy = yb
              }
            }));
          return fy || Wy(bb.update(Zy, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !fy
        }
      }];

    function Ob(yb, bb) {
      let Wy = !1;
      return yb.field(lb).between(0, yb.doc.length, (yb => {
        yb == bb && (Wy = !0)
      })), Wy
    }

    function Rb(yb, bb) {
      let Wy = yb.sliceString(bb, bb + 2);
      return Wy.slice(0, (0, Uy.W)((0, Uy.S)(Wy, 0)))
    }

    function vW(yb, bb, Wy, hy) {
      let fy = null,
        Zy = yb.changeByRange((Zy => {
          if (!Zy.empty) return {
            changes: [{
              insert: bb,
              from: Zy.from
            }, {
              insert: Wy,
              from: Zy.to
            }],
            effects: Sb.of(Zy.to + bb.length),
            range: Uy.n.range(Zy.anchor + bb.length, Zy.head + bb.length)
          };
          let cb = Rb(yb.doc, Zy.head);
          return !cb || /\s/.test(cb) || hy.indexOf(cb) > -1 ? {
            changes: {
              insert: bb + Wy,
              from: Zy.head
            },
            effects: Sb.of(Zy.head + bb.length),
            range: Uy.n.cursor(Zy.head + bb.length)
          } : {
            range: fy = Zy
          }
        }));
      return fy ? null : yb.update(Zy, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function iW(yb, bb, Wy) {
      let hy = null,
        fy = yb.changeByRange((bb => bb.empty && Rb(yb.doc, bb.head) == Wy ? {
          changes: {
            from: bb.head,
            to: bb.head + Wy.length,
            insert: Wy
          },
          range: Uy.n.cursor(bb.head + Wy.length)
        } : hy = {
          range: bb
        }));
      return hy ? null : yb.update(fy, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Mb(yb, bb, Wy, hy) {
      let Zy = hy.stringPrefixes || sb.stringPrefixes,
        cb = null,
        Py = yb.changeByRange((hy => {
          if (!hy.empty) return {
            changes: [{
              insert: bb,
              from: hy.from
            }, {
              insert: bb,
              from: hy.to
            }],
            effects: Sb.of(hy.to + bb.length),
            range: Uy.n.range(hy.anchor + bb.length, hy.head + bb.length)
          };
          let Py, oy = hy.head,
            By = Rb(yb.doc, oy);
          if (By == bb) {
            if (Yb(yb, oy)) return {
              changes: {
                insert: bb + bb,
                from: oy
              },
              effects: Sb.of(oy + bb.length),
              range: Uy.n.cursor(oy + bb.length)
            };
            if (Ob(yb, oy)) {
              let hy = Wy && yb.sliceDoc(oy, oy + 3 * bb.length) == bb + bb + bb ? bb + bb + bb : bb;
              return {
                changes: {
                  from: oy,
                  to: oy + hy.length,
                  insert: hy
                },
                range: Uy.n.cursor(oy + hy.length)
              }
            }
          } else {
            if (Wy && yb.sliceDoc(oy - 2 * bb.length, oy) == bb + bb && (Py = Xb(yb, oy - 2 * bb.length, Zy)) > -1 && Yb(yb, Py)) return {
              changes: {
                insert: bb + bb + bb + bb,
                from: oy
              },
              effects: Sb.of(oy + bb.length),
              range: Uy.n.cursor(oy + bb.length)
            };
            if (yb.charCategorizer(oy)(By) != Uy.j.Word && Xb(yb, oy, Zy) > -1 && ! function(yb, bb, Wy, Uy) {
                let hy = (0, fy.nb)(yb).resolveInner(bb, -1),
                  Zy = Uy.reduce(((yb, bb) => Math.max(yb, bb.length)), 0);
                for (let fy = 0; fy < 5; fy++) {
                  let fy = yb.sliceDoc(hy.from, Math.min(hy.to, hy.from + Wy.length + Zy)),
                    cb = fy.indexOf(Wy);
                  if (!cb || cb > -1 && Uy.indexOf(fy.slice(0, cb)) > -1) {
                    let bb = hy.firstChild;
                    for (; bb && bb.from == hy.from && bb.to - bb.from > Wy.length + cb;) {
                      if (yb.sliceDoc(bb.to - Wy.length, bb.to) == Wy) return !1;
                      bb = bb.firstChild
                    }
                    return !0
                  }
                  let Py = hy.to == bb && hy.parent;
                  if (!Py) break;
                  hy = Py
                }
                return !1
              }(yb, oy, bb, Zy)) return {
              changes: {
                insert: bb + bb,
                from: oy
              },
              effects: Sb.of(oy + bb.length),
              range: Uy.n.cursor(oy + bb.length)
            }
          }
          return {
            range: cb = hy
          }
        }));
      return cb ? null : yb.update(Py, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Yb(yb, bb) {
      let Wy = (0, fy.nb)(yb).resolveInner(bb + 1);
      return Wy.parent && Wy.from == bb
    }

    function Xb(yb, bb, Wy) {
      let hy = yb.charCategorizer(bb);
      if (hy(yb.sliceDoc(bb - 1, bb)) != Uy.j.Word) return bb;
      for (let fy of Wy) {
        let Wy = bb - fy.length;
        if (yb.sliceDoc(Wy, bb) == fy && hy(yb.sliceDoc(Wy - 1, Wy)) != Uy.j.Word) return Wy
      }
      return -1
    }

    function nb() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [zb, Ly, Vy.of(yb), kb, rW, Iy]
    }
    const ub = [{
        key: "Ctrl-Space",
        run: tb
      }, {
        mac: "Alt-`",
        run: tb
      }, {
        mac: "Alt-i",
        run: tb
      }, {
        key: "Escape",
        run: yb => {
          let bb = yb.state.field(Ly, !1);
          return !(!bb || !bb.active.some((yb => 0 != yb.state))) && (yb.dispatch({
            effects: mb.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: Dy(!0)
      }, {
        key: "ArrowUp",
        run: Dy(!1)
      }, {
        key: "PageDown",
        run: Dy(!0, "page")
      }, {
        key: "PageUp",
        run: Dy(!1, "page")
      }, {
        key: "Enter",
        run: yb => {
          let bb = yb.state.field(Ly, !1);
          return !(yb.state.readOnly || !bb || !bb.open || bb.open.selected < 0 || bb.open.disabled || Date.now() - bb.open.timestamp < yb.state.facet(Vy).interactionDelay) && Qy(yb, bb.open.options[bb.open.selected])
        }
      }],
      rW = Uy.z.highest(hy.W.computeN([Vy], (yb => yb.facet(Vy).defaultKeymap ? [ub] : [])))
  },
  39885: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => oy,
      e: () => ey,
      g: () => By,
      k: () => Ky
    });
    var Uy = Wy(39754);
    class hy {
      constructor(yb, bb, Wy, Uy) {
        this.origin = yb, this.changes = bb, this.effects = Wy, this.clientID = Uy
      }
    }
    class fy {
      constructor(yb, bb) {
        this.version = yb, this.unconfirmed = bb
      }
    }
    const Zy = Uy.v.define({
        combine(yb) {
          let bb = (0, Uy._)(yb, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: yb => yb
          });
          return null == bb.clientID && (bb.clientID = yb.length && yb[0].generatedID || ""), bb
        }
      }),
      cb = Uy.b.define(),
      Py = Uy.J.define({
        create: yb => new fy(yb.facet(Zy).startVersion, []),
        update(yb, bb) {
          let Wy = bb.annotation(cb);
          if (Wy) return Wy;
          let {
            sharedEffects: Uy,
            clientID: Py
          } = bb.startState.facet(Zy), oy = Uy(bb);
          return oy.length || !bb.changes.empty ? new fy(yb.version, yb.unconfirmed.concat(new hy(bb, bb.changes, oy, Py))) : yb
        }
      });

    function oy() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Py, Zy.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, yb))]
    }

    function By(yb, bb) {
      let {
        version: Wy,
        unconfirmed: oy
      } = yb.field(Py), {
        clientID: By
      } = yb.facet(Zy);
      Wy += bb.length;
      let Ky = [],
        ey = null,
        qb = 0;
      for (let hy of bb) {
        let yb = qb < oy.length ? oy[qb] : null;
        yb && yb.clientID == hy.clientID ? (ey && (ey = ey.map(yb.changes, !0)), Ky = Uy.I.mapEffects(Ky, hy.changes), qb++) : (Ky = Uy.I.mapEffects(Ky, hy.changes), hy.effects && (Ky = Ky.concat(hy.effects)), ey = ey ? ey.compose(hy.changes) : hy.changes)
      }
      if (qb && (oy = oy.slice(qb)), oy.length && (ey && (oy = oy.map((yb => {
          let bb = yb.changes.map(ey);
          return ey = ey.map(yb.changes, !0), new hy(yb.origin, bb, Uy.I.mapEffects(yb.effects, ey), By)
        }))), Ky.length)) {
        let yb = oy.reduce(((yb, bb) => yb.compose(bb.changes)), Uy.ChangeSet.empty(oy[0].changes.length));
        Ky = Uy.I.mapEffects(Ky, yb)
      }
      return ey ? yb.update({
        changes: ey,
        effects: Ky,
        annotations: [Uy.O.addToHistory.of(!1), Uy.O.remote.of(!0), cb.of(new fy(Wy, oy))],
        filter: !1
      }) : yb.update({
        annotations: [cb.of(new fy(Wy, oy))]
      })
    }

    function Ky(yb) {
      return yb.field(Py).unconfirmed
    }

    function ey(yb) {
      return yb.field(Py).version
    }
  },
  39794: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Sb
    });
    var Uy = Wy(39781);
    class hy {
      constructor(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        let oy = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          By = arguments.length > 10 ? arguments[10] : void 0;
        this.p = yb, this.stack = bb, this.state = Wy, this.reducePos = Uy, this.pos = hy, this.score = fy, this.buffer = Zy, this.bufferBase = cb, this.curContext = Py, this.lookAhead = oy, this.parent = By
      }
      toString() {
        return `[${this.stack.filter(((yb,bb)=>bb%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = yb.parser.context;
        return new hy(yb, [], bb, Wy, Wy, 0, [], 0, Uy ? new fy(Uy, Uy.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(yb, bb) {
        this.stack.push(this.state, bb, this.bufferBase + this.buffer.length), this.state = yb
      }
      reduce(yb) {
        var bb;
        let Wy = yb >> 19,
          Uy = 65535 & yb,
          {
            parser: hy
          } = this.p,
          fy = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          Zy = hy.dynamicPrecedence(Uy);
        if (Zy && (this.score += Zy), 0 == Wy) return this.pushState(hy.getGoto(this.state, Uy, !0), this.reducePos), Uy < hy.minRepeatTerm && this.storeNode(Uy, this.reducePos, this.reducePos, fy ? 8 : 4, !0), void this.reduceContext(Uy, this.reducePos);
        let cb = this.stack.length - 3 * (Wy - 1) - (262144 & yb ? 6 : 0),
          Py = cb ? this.stack[cb - 2] : this.p.lZ[0].from,
          oy = this.reducePos - Py;
        oy >= 2e3 && !(null === (bb = this.p.parser.nodeSet.types[Uy]) || void 0 === bb ? void 0 : bb.isAnonymous) && (Py == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = oy) : this.p.lastBigReductionSize < oy && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = Py, this.p.lastBigReductionSize = oy));
        let By = cb ? this.stack[cb - 1] : 0,
          Ky = this.bufferBase + this.buffer.length - By;
        if (Uy < hy.minRepeatTerm || 131072 & yb) {
          let yb = hy.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(Uy, Py, yb, Ky + 4, !0)
        }
        if (262144 & yb) this.state = this.stack[cb];
        else {
          let yb = this.stack[cb - 3];
          this.state = hy.getGoto(yb, Uy, !0)
        }
        for (; this.stack.length > cb;) this.stack.pop();
        this.reduceContext(Uy, Py)
      }
      storeNode(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == yb && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let yb = this,
            Uy = this.buffer.length;
          if (0 == Uy && yb.parent && (Uy = yb.bufferBase - yb.parent.bufferBase, yb = yb.parent), Uy > 0 && 0 == yb.buffer[Uy - 4] && yb.buffer[Uy - 1] > -1) {
            if (bb == Wy) return;
            if (yb.buffer[Uy - 2] >= bb) return void(yb.buffer[Uy - 2] = Wy)
          }
        }
        if (hy && this.pos != Wy) {
          let hy = this.buffer.length;
          if (hy > 0 && (0 != this.buffer[hy - 4] || this.buffer[hy - 1] < 0)) {
            let yb = !1;
            for (let bb = hy; bb > 0 && this.buffer[bb - 2] > Wy; bb -= 4)
              if (this.buffer[bb - 1] >= 0) {
                yb = !0;
                break
              } if (yb)
              for (; hy > 0 && this.buffer[hy - 2] > Wy;) this.buffer[hy] = this.buffer[hy - 4], this.buffer[hy + 1] = this.buffer[hy - 3], this.buffer[hy + 2] = this.buffer[hy - 2], this.buffer[hy + 3] = this.buffer[hy - 1], hy -= 4, Uy > 4 && (Uy -= 4)
          }
          this.buffer[hy] = yb, this.buffer[hy + 1] = bb, this.buffer[hy + 2] = Wy, this.buffer[hy + 3] = Uy
        } else this.buffer.push(yb, bb, Wy, Uy)
      }
      shift(yb, bb, Wy, Uy) {
        if (131072 & yb) this.pushState(65535 & yb, this.pos);
        else if (0 == (262144 & yb)) {
          let hy = yb,
            {
              parser: fy
            } = this.p;
          this.pos = Uy;
          let Zy = fy.stateFlag(hy, 1);
          !Zy && (Uy > Wy || bb <= fy.maxNode) && (this.reducePos = Uy), this.pushState(hy, Zy ? Wy : Math.min(Wy, this.reducePos)), this.shiftContext(bb, Wy), bb <= fy.maxNode && this.buffer.push(bb, Wy, Uy, 4)
        } else this.pos = Uy, this.shiftContext(bb, Wy), bb <= this.p.parser.maxNode && this.buffer.push(bb, Wy, Uy, 4)
      }
      apply(yb, bb, Wy, Uy) {
        65536 & yb ? this.reduce(yb) : this.shift(yb, bb, Wy, Uy)
      }
      useNode(yb, bb) {
        let Wy = this.p.reused.length - 1;
        (Wy < 0 || this.p.reused[Wy] != yb) && (this.p.reused.push(yb), Wy++);
        let Uy = this.pos;
        this.reducePos = this.pos = Uy + yb.length, this.pushState(bb, Uy), this.buffer.push(Wy, Uy, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, yb, this, this.p.stream.reset(this.pos - yb.length)))
      }
      split() {
        let yb = this,
          bb = yb.buffer.length;
        for (; bb > 0 && yb.buffer[bb - 2] > yb.reducePos;) bb -= 4;
        let Wy = yb.buffer.slice(bb),
          Uy = yb.bufferBase + bb;
        for (; yb && Uy == yb.bufferBase;) yb = yb.parent;
        return new hy(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, Wy, Uy, this.curContext, this.lookAhead, yb)
      }
      recoverByDelete(yb, bb) {
        let Wy = yb <= this.p.parser.maxNode;
        Wy && this.storeNode(yb, this.pos, bb, 4), this.storeNode(0, this.pos, bb, Wy ? 8 : 4), this.pos = this.reducePos = bb, this.score -= 190
      }
      canShift(yb) {
        for (let bb = new Zy(this);;) {
          let Wy = this.p.parser.stateSlot(bb.state, 4) || this.p.parser.hasAction(bb.state, yb);
          if (0 == Wy) return !1;
          if (0 == (65536 & Wy)) return !0;
          bb.reduce(Wy)
        }
      }
      recoverByInsert(yb) {
        if (this.stack.length >= 300) return [];
        let bb = this.p.parser.nextStates(this.state);
        if (bb.length > 8 || this.stack.length >= 120) {
          let Wy = [];
          for (let Uy, hy = 0; hy < bb.length; hy += 2)(Uy = bb[hy + 1]) != this.state && this.p.parser.hasAction(Uy, yb) && Wy.push(bb[hy], Uy);
          if (this.stack.length < 120)
            for (let yb = 0; Wy.length < 8 && yb < bb.length; yb += 2) {
              let Uy = bb[yb + 1];
              Wy.some(((yb, bb) => 1 & bb && yb == Uy)) || Wy.push(bb[yb], Uy)
            }
          bb = Wy
        }
        let Wy = [];
        for (let Uy = 0; Uy < bb.length && Wy.length < 4; Uy += 2) {
          let yb = bb[Uy + 1];
          if (yb == this.state) continue;
          let hy = this.split();
          hy.pushState(yb, this.pos), hy.storeNode(0, hy.pos, hy.pos, 4, !0), hy.shiftContext(bb[Uy], this.pos), hy.reducePos = this.pos, hy.score -= 200, Wy.push(hy)
        }
        return Wy
      }
      forceReduce() {
        let {
          parser: yb
        } = this.p, bb = yb.stateSlot(this.state, 5);
        if (0 == (65536 & bb)) return !1;
        if (!yb.validAction(this.state, bb)) {
          let Wy = bb >> 19,
            Uy = 65535 & bb,
            hy = this.stack.length - 3 * Wy;
          if (hy < 0 || yb.getGoto(this.stack[hy], Uy, !1) < 0) {
            let yb = this.findForcedReduction();
            if (null == yb) return !1;
            bb = yb
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(bb), !0
      }
      findForcedReduction() {
        let {
          parser: yb
        } = this.p, bb = [], Wy = (Uy, hy) => {
          if (!bb.includes(Uy)) return bb.push(Uy), yb.allActions(Uy, (bb => {
            if (393216 & bb);
            else if (65536 & bb) {
              let Wy = (bb >> 19) - hy;
              if (Wy > 1) {
                let Uy = 65535 & bb,
                  hy = this.stack.length - 3 * Wy;
                if (hy >= 0 && yb.getGoto(this.stack[hy], Uy, !1) >= 0) return Wy << 19 | 65536 | Uy
              }
            } else {
              let yb = Wy(bb, hy + 1);
              if (null != yb) return yb
            }
          }))
        };
        return Wy(this.state, 0)
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
          parser: yb
        } = this.p;
        return 65535 == yb.data[yb.stateSlot(this.state, 1)] && !yb.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(yb) {
        if (this.state != yb.state || this.stack.length != yb.stack.length) return !1;
        for (let bb = 0; bb < this.stack.length; bb += 3)
          if (this.stack[bb] != yb.stack[bb]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(yb) {
        return this.p.parser.dialect.flags[yb]
      }
      shiftContext(yb, bb) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, yb, this, this.p.stream.reset(bb)))
      }
      reduceContext(yb, bb) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, yb, this, this.p.stream.reset(bb)))
      }
      emitContext() {
        let yb = this.buffer.length - 1;
        (yb < 0 || -3 != this.buffer[yb]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let yb = this.buffer.length - 1;
        (yb < 0 || -4 != this.buffer[yb]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(yb) {
        if (yb != this.curContext.context) {
          let bb = new fy(this.curContext.tracker, yb);
          bb.hash != this.curContext.hash && this.emitContext(), this.curContext = bb
        }
      }
      setLookAhead(yb) {
        return !(yb <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = yb, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class fy {
      constructor(yb, bb) {
        this.tracker = yb, this.context = bb, this.hash = yb.strict ? yb.hash(bb) : 0
      }
    }
    class Zy {
      constructor(yb) {
        this.start = yb, this.state = yb.state, this.stack = yb.stack, this.base = this.stack.length
      }
      reduce(yb) {
        let bb = 65535 & yb,
          Wy = yb >> 19;
        0 == Wy ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (Wy - 1);
        let Uy = this.start.p.parser.getGoto(this.stack[this.base - 3], bb, !0);
        this.state = Uy
      }
    }
    class cb {
      constructor(yb, bb, Wy) {
        this.stack = yb, this.pos = bb, this.index = Wy, this.buffer = yb.buffer, 0 == this.index && this.maybeNext()
      }
      static create(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb.bufferBase + yb.buffer.length;
        return new cb(yb, bb, bb - yb.bufferBase)
      }
      maybeNext() {
        let yb = this.stack.parent;
        null != yb && (this.index = this.stack.bufferBase - yb.bufferBase, this.stack = yb, this.buffer = yb.buffer)
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
        return new cb(this.stack, this.pos, this.index)
      }
    }

    function Py(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof yb) return yb;
      let Wy = null;
      for (let Uy = 0, hy = 0; Uy < yb.length;) {
        let fy = 0;
        for (;;) {
          let bb = yb.charCodeAt(Uy++),
            Wy = !1;
          if (126 == bb) {
            fy = 65535;
            break
          }
          bb >= 92 && bb--, bb >= 34 && bb--;
          let hy = bb - 32;
          if (hy >= 46 && (hy -= 46, Wy = !0), fy += hy, Wy) break;
          fy *= 46
        }
        Wy ? Wy[hy++] = fy : Wy = new bb(fy)
      }
      return Wy
    }
    class oy {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const By = new oy;
    class Ky {
      constructor(yb, bb) {
        this.input = yb, this.lZ = bb, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = By, this.rangeIndex = 0, this.pos = this.chunkPos = bb[0].from, this.range = bb[0], this.end = bb[bb.length - 1].to, this.readNext()
      }
      resolveOffset(yb, bb) {
        let Wy = this.range,
          Uy = this.rangeIndex,
          hy = this.pos + yb;
        for (; hy < Wy.from;) {
          if (!Uy) return null;
          let yb = this.lZ[--Uy];
          hy -= Wy.from - yb.to, Wy = yb
        }
        for (; bb < 0 ? hy > Wy.to : hy >= Wy.to;) {
          if (Uy == this.lZ.length - 1) return null;
          let yb = this.lZ[++Uy];
          hy += yb.from - Wy.to, Wy = yb
        }
        return hy
      }
      clipPos(yb) {
        if (yb >= this.range.from && yb < this.range.to) return yb;
        for (let bb of this.lZ)
          if (bb.to > yb) return Math.max(yb, bb.from);
        return this.end
      }
      peek(yb) {
        let bb, Wy, Uy = this.chunkOff + yb;
        if (Uy >= 0 && Uy < this.chunk.length) bb = this.pos + yb, Wy = this.chunk.charCodeAt(Uy);
        else {
          let Uy = this.resolveOffset(yb, 1);
          if (null == Uy) return -1;
          if (bb = Uy, bb >= this.chunk2Pos && bb < this.chunk2Pos + this.chunk2.length) Wy = this.chunk2.charCodeAt(bb - this.chunk2Pos);
          else {
            let yb = this.rangeIndex,
              Uy = this.range;
            for (; Uy.to <= bb;) Uy = this.lZ[++yb];
            this.chunk2 = this.input.chunk(this.chunk2Pos = bb), bb + this.chunk2.length > Uy.to && (this.chunk2 = this.chunk2.slice(0, Uy.to - bb)), Wy = this.chunk2.charCodeAt(0)
          }
        }
        return bb >= this.token.lookAhead && (this.token.lookAhead = bb + 1), Wy
      }
      acceptToken(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = bb ? this.resolveOffset(bb, -1) : this.pos;
        if (null == Wy || Wy < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = yb, this.token.end = Wy
      }
      acceptTokenTo(yb, bb) {
        this.token.value = yb, this.token.end = bb
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: yb,
            chunkPos: bb
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = yb, this.chunk2Pos = bb, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let yb = this.input.chunk(this.pos),
            bb = this.pos + yb.length;
          this.chunk = bb > this.range.to ? yb.slice(0, this.range.to - this.pos) : yb, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += yb; this.pos + yb >= this.range.to;) {
          if (this.rangeIndex == this.lZ.length - 1) return this.setDone();
          yb -= this.range.to - this.pos, this.range = this.lZ[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += yb, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.lZ[this.rangeIndex = this.lZ.length - 1], this.chunk = "", this.next = -1
      }
      reset(yb, bb) {
        if (bb ? (this.token = bb, bb.start = yb, bb.lookAhead = yb + 1, bb.value = bb.extended = -1) : this.token = By, this.pos != yb) {
          if (this.pos = yb, yb == this.end) return this.setDone(), this;
          for (; yb < this.range.from;) this.range = this.lZ[--this.rangeIndex];
          for (; yb >= this.range.to;) this.range = this.lZ[++this.rangeIndex];
          yb >= this.chunkPos && yb < this.chunkPos + this.chunk.length ? this.chunkOff = yb - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(yb, bb) {
        if (yb >= this.chunkPos && bb <= this.chunkPos + this.chunk.length) return this.chunk.slice(yb - this.chunkPos, bb - this.chunkPos);
        if (yb >= this.chunk2Pos && bb <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(yb - this.chunk2Pos, bb - this.chunk2Pos);
        if (yb >= this.range.from && bb <= this.range.to) return this.input.read(yb, bb);
        let Wy = "";
        for (let Uy of this.lZ) {
          if (Uy.from >= bb) break;
          Uy.to > yb && (Wy += this.input.read(Math.max(Uy.from, yb), Math.min(Uy.to, bb)))
        }
        return Wy
      }
    }
    class ey {
      constructor(yb, bb) {
        this.data = yb, this.id = bb
      }
      token(yb, bb) {
        let {
          parser: Wy
        } = bb.p;
        Sy(this.data, yb, bb, this.id, Wy.data, Wy.tokenPrecTable)
      }
    }
    ey.prototype.contextual = ey.prototype.fallback = ey.prototype.extend = !1;
    class qb {
      constructor(yb, bb, Wy) {
        this.precTable = bb, this.elseToken = Wy, this.data = "string" == typeof yb ? Py(yb) : yb
      }
      token(yb, bb) {
        let Wy = yb.pos,
          Uy = 0;
        for (;;) {
          let Wy = yb.next < 0,
            hy = yb.resolveOffset(1, 1);
          if (Sy(this.data, yb, bb, 0, this.data, this.precTable), yb.token.value > -1) break;
          if (null == this.elseToken) return;
          if (Wy || Uy++, null == hy) break;
          yb.reset(hy, yb.token)
        }
        Uy && (yb.reset(Wy, yb.token), yb.acceptToken(this.elseToken, Uy))
      }
    }
    qb.prototype.contextual = ey.prototype.fallback = ey.prototype.extend = !1;
    class sy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = yb, this.contextual = !!bb.contextual, this.fallback = !!bb.fallback, this.extend = !!bb.extend
      }
    }

    function Sy(yb, bb, Wy, Uy, hy, fy) {
      let Zy = 0,
        cb = 1 << Uy,
        {
          dialect: Py
        } = Wy.p.parser;
      yb: for (; 0 != (cb & yb[Zy]);) {
        let Wy = yb[Zy + 1];
        for (let Ky = Zy + 3; Ky < Wy; Ky += 2)
          if ((yb[Ky + 1] & cb) > 0) {
            let Wy = yb[Ky];
            if (Py.allows(Wy) && (-1 == bb.token.value || bb.token.value == Wy || ly(Wy, bb.token.value, hy, fy))) {
              bb.acceptToken(Wy);
              break
            }
          } let Uy = bb.next,
          oy = 0,
          By = yb[Zy + 2];
        if (!(bb.next < 0 && By > oy && 65535 == yb[Wy + 3 * By - 3])) {
          for (; oy < By;) {
            let hy = oy + By >> 1,
              fy = Wy + hy + (hy << 1),
              cb = yb[fy],
              Py = yb[fy + 1] || 65536;
            if (Uy < cb) By = hy;
            else {
              if (!(Uy >= Py)) {
                Zy = yb[fy + 2], bb.advance();
                continue yb
              }
              oy = hy + 1
            }
          }
          break
        }
        Zy = yb[Wy + 3 * By - 1]
      }
    }

    function Ey(yb, bb, Wy) {
      for (let Uy, hy = bb; 65535 != (Uy = yb[hy]); hy++)
        if (Uy == Wy) return hy - bb;
      return -1
    }

    function ly(yb, bb, Wy, Uy) {
      let hy = Ey(Wy, Uy, bb);
      return hy < 0 || Ey(Wy, Uy, yb) < hy
    }
    const mb = "undefined" != typeof process && {
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
    let Cy = null;

    function Ty(yb, bb, Wy) {
      let hy = yb.cursor(Uy.g.IncludeAnonymous);
      for (hy.moveTo(bb);;)
        if (!(Wy < 0 ? hy.childBefore(bb) : hy.childAfter(bb)))
          for (;;) {
            if ((Wy < 0 ? hy.to < bb : hy.from > bb) && !hy.type.isError) return Wy < 0 ? Math.max(0, Math.min(hy.to - 1, bb - 25)) : Math.min(yb.length, Math.max(hy.from + 1, bb + 25));
            if (Wy < 0 ? hy.prevSibling() : hy.nextSibling()) break;
            if (!hy.parent()) return Wy < 0 ? 0 : yb.length
          }
    }
    class Vy {
      constructor(yb, bb) {
        this.fragments = yb, this.nodeSet = bb, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let yb = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (yb) {
          for (this.safeFrom = yb.openStart ? Ty(yb.tree, yb.from + yb.offset, 1) - yb.offset : yb.from, this.safeTo = yb.openEnd ? Ty(yb.tree, yb.to + yb.offset, -1) - yb.offset : yb.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(yb.tree), this.start.push(-yb.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(yb) {
        if (yb < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= yb;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let bb = this.trees.length - 1;
          if (bb < 0) return this.nextFragment(), null;
          let Wy = this.trees[bb],
            hy = this.index[bb];
          if (hy == Wy.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let fy = Wy.children[hy],
            Zy = this.start[bb] + Wy.positions[hy];
          if (Zy > yb) return this.nextStart = Zy, null;
          if (fy instanceof Uy.t) {
            if (Zy == yb) {
              if (Zy < this.safeFrom) return null;
              let yb = Zy + fy.length;
              if (yb <= this.safeTo) {
                let bb = fy.prop(Uy.h.lookAhead);
                if (!bb || yb + bb < this.fragment.to) return fy
              }
            }
            this.index[bb]++, Zy + fy.length >= Math.max(this.safeFrom, yb) && (this.trees.push(fy), this.start.push(Zy), this.index.push(0))
          } else this.index[bb]++, this.nextStart = Zy + fy.length
        }
      }
    }
    class Jy {
      constructor(yb, bb) {
        this.stream = bb, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = yb.tokenizers.map((yb => new oy))
      }
      getActions(yb) {
        let bb = 0,
          Wy = null,
          {
            parser: Uy
          } = yb.p,
          {
            tokenizers: hy
          } = Uy,
          fy = Uy.stateSlot(yb.state, 3),
          Zy = yb.curContext ? yb.curContext.hash : 0,
          cb = 0;
        for (let Py = 0; Py < hy.length; Py++) {
          if (0 == (1 << Py & fy)) continue;
          let Uy = hy[Py],
            oy = this.tokens[Py];
          if ((!Wy || Uy.fallback) && ((Uy.contextual || oy.start != yb.pos || oy.mask != fy || oy.context != Zy) && (this.updateCachedToken(oy, Uy, yb), oy.mask = fy, oy.context = Zy), oy.lookAhead > oy.end + 25 && (cb = Math.max(oy.lookAhead, cb)), 0 != oy.value)) {
            let hy = bb;
            if (oy.extended > -1 && (bb = this.addActions(yb, oy.extended, oy.end, bb)), bb = this.addActions(yb, oy.value, oy.end, bb), !Uy.extend && (Wy = oy, bb > hy)) break
          }
        }
        for (; this.actions.length > bb;) this.actions.pop();
        return cb && yb.setLookAhead(cb), Wy || yb.pos != this.stream.end || (Wy = new oy, Wy.value = yb.p.parser.eofTerm, Wy.start = Wy.end = yb.pos, bb = this.addActions(yb, Wy.value, Wy.end, bb)), this.mainToken = Wy, this.actions
      }
      getMainToken(yb) {
        if (this.mainToken) return this.mainToken;
        let bb = new oy,
          {
            pos: Wy,
            p: Uy
          } = yb;
        return bb.start = Wy, bb.end = Math.min(Wy + 1, Uy.stream.end), bb.value = Wy == Uy.stream.end ? Uy.parser.eofTerm : 0, bb
      }
      updateCachedToken(yb, bb, Wy) {
        let Uy = this.stream.clipPos(Wy.pos);
        if (bb.token(this.stream.reset(Uy, yb), Wy), yb.value > -1) {
          let {
            parser: bb
          } = Wy.p;
          for (let Uy = 0; Uy < bb.specialized.length; Uy++)
            if (bb.specialized[Uy] == yb.value) {
              let hy = bb.specializers[Uy](this.stream.read(yb.start, yb.end), Wy);
              if (hy >= 0 && Wy.p.parser.dialect.allows(hy >> 1)) {
                0 == (1 & hy) ? yb.value = hy >> 1 : yb.extended = hy >> 1;
                break
              }
            }
        } else yb.value = 0, yb.end = this.stream.clipPos(Uy + 1)
      }
      putAction(yb, bb, Wy, Uy) {
        for (let hy = 0; hy < Uy; hy += 3)
          if (this.actions[hy] == yb) return Uy;
        return this.actions[Uy++] = yb, this.actions[Uy++] = bb, this.actions[Uy++] = Wy, Uy
      }
      addActions(yb, bb, Wy, Uy) {
        let {
          state: hy
        } = yb, {
          parser: fy
        } = yb.p, {
          data: Zy
        } = fy;
        for (let cb = 0; cb < 2; cb++)
          for (let yb = fy.stateSlot(hy, cb ? 2 : 1);; yb += 3) {
            if (65535 == Zy[yb]) {
              if (1 != Zy[yb + 1]) {
                0 == Uy && 2 == Zy[yb + 1] && (Uy = this.putAction(ib(Zy, yb + 2), bb, Wy, Uy));
                break
              }
              yb = ib(Zy, yb + 2)
            }
            Zy[yb] == bb && (Uy = this.putAction(ib(Zy, yb + 1), bb, Wy, Uy))
          }
        return Uy
      }
    }
    class gb {
      constructor(yb, bb, Wy, Uy) {
        this.parser = yb, this.input = bb, this.lZ = Uy, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Ky(bb, Uy), this.tokens = new Jy(yb, this.stream), this.topTerm = yb.top[1];
        let {
          from: fy
        } = Uy[0];
        this.stacks = [hy.start(this, yb.top[0], fy)], this.fragments = Wy.length && this.stream.end - fy > 4 * yb.bufferLength ? new Vy(Wy, yb.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let yb, bb, Wy = this.stacks,
          Uy = this.minStackPos,
          hy = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == Wy.length) {
          let [yb] = Wy;
          for (; yb.forceReduce() && yb.stack.length && yb.stack[yb.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let fy = 0; fy < Wy.length; fy++) {
          let Zy = Wy[fy];
          for (;;) {
            if (this.tokens.mainToken = null, Zy.pos > Uy) hy.push(Zy);
            else {
              if (this.advanceStack(Zy, hy, Wy)) continue;
              {
                yb || (yb = [], bb = []), yb.push(Zy);
                let Wy = this.tokens.getMainToken(Zy);
                bb.push(Wy.value, Wy.end)
              }
            }
            break
          }
        }
        if (!hy.length) {
          let bb = yb && function(yb) {
            let bb = null;
            for (let Wy of yb) {
              let yb = Wy.p.stoppedAt;
              (Wy.pos == Wy.p.stream.end || null != yb && Wy.pos > yb) && Wy.p.parser.stateFlag(Wy.state, 2) && (!bb || bb.score < Wy.score) && (bb = Wy)
            }
            return bb
          }(yb);
          if (bb) return mb && console.log("Finish with " + this.stackID(bb)), this.stackToTree(bb);
          if (this.parser.strict) throw mb && yb && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Uy);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && yb) {
          let Wy = null != this.stoppedAt && yb[0].pos > this.stoppedAt ? yb[0] : this.runRecovery(yb, bb, hy);
          if (Wy) return mb && console.log("Force-finish " + this.stackID(Wy)), this.stackToTree(Wy.forceAll())
        }
        if (this.recovering) {
          let yb = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (hy.length > yb)
            for (hy.sort(((yb, bb) => bb.score - yb.score)); hy.length > yb;) hy.pop();
          hy.some((yb => yb.reducePos > Uy)) && this.recovering--
        } else if (hy.length > 1) {
          yb: for (let yb = 0; yb < hy.length - 1; yb++) {
            let bb = hy[yb];
            for (let Wy = yb + 1; Wy < hy.length; Wy++) {
              let Uy = hy[Wy];
              if (bb.sameState(Uy) || bb.buffer.length > 500 && Uy.buffer.length > 500) {
                if (!((bb.score - Uy.score || bb.buffer.length - Uy.buffer.length) > 0)) {
                  hy.splice(yb--, 1);
                  continue yb
                }
                hy.splice(Wy--, 1)
              }
            }
          }
          hy.length > 12 && (hy.sort(((yb, bb) => bb.score - yb.score)), hy.splice(12, hy.length - 12))
        }
        this.minStackPos = hy[0].pos;
        for (let fy = 1; fy < hy.length; fy++) hy[fy].pos < this.minStackPos && (this.minStackPos = hy[fy].pos);
        return null
      }
      stopAt(yb) {
        if (null != this.stoppedAt && this.stoppedAt < yb) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = yb
      }
      advanceStack(yb, bb, Wy) {
        let hy = yb.pos,
          {
            parser: fy
          } = this,
          Zy = mb ? this.stackID(yb) + " -> " : "";
        if (null != this.stoppedAt && hy > this.stoppedAt) return yb.forceReduce() ? yb : null;
        if (this.fragments) {
          let bb = yb.curContext && yb.curContext.tracker.strict,
            Wy = bb ? yb.curContext.hash : 0;
          for (let cb = this.fragments.nodeAt(hy); cb;) {
            let hy = this.parser.nodeSet.types[cb.type.id] == cb.type ? fy.getGoto(yb.state, cb.type.id) : -1;
            if (hy > -1 && cb.length && (!bb || (cb.prop(Uy.h.contextHash) || 0) == Wy)) return yb.useNode(cb, hy), mb && console.log(Zy + this.stackID(yb) + ` (via reuse of ${fy.getName(cb.type.id)})`), !0;
            if (!(cb instanceof Uy.t) || 0 == cb.children.length || cb.positions[0] > 0) break;
            let Py = cb.children[0];
            if (!(Py instanceof Uy.t && 0 == cb.positions[0])) break;
            cb = Py
          }
        }
        let cb = fy.stateSlot(yb.state, 4);
        if (cb > 0) return yb.reduce(cb), mb && console.log(Zy + this.stackID(yb) + ` (via always-reduce ${fy.getName(65535&cb)})`), !0;
        if (yb.stack.length >= 8400)
          for (; yb.stack.length > 6e3 && yb.forceReduce(););
        let Py = this.tokens.getActions(yb);
        for (let Uy = 0; Uy < Py.length;) {
          let cb = Py[Uy++],
            oy = Py[Uy++],
            By = Py[Uy++],
            Ky = Uy == Py.length || !Wy,
            ey = Ky ? yb : yb.split(),
            qb = this.tokens.mainToken;
          if (ey.apply(cb, oy, qb ? qb.start : ey.pos, By), mb && console.log(Zy + this.stackID(ey) + ` (via ${0==(65536&cb)?"shift":`reduce of ${fy.getName(65535&cb)}`} for ${fy.getName(oy)} @ ${hy}${ey==yb?"":", split"})`), Ky) return !0;
          ey.pos > hy ? bb.push(ey) : Wy.push(ey)
        }
        return !1
      }
      advanceFully(yb, bb) {
        let Wy = yb.pos;
        for (;;) {
          if (!this.advanceStack(yb, null, null)) return !1;
          if (yb.pos > Wy) return Gy(yb, bb), !0
        }
      }
      runRecovery(yb, bb, Wy) {
        let Uy = null,
          hy = !1;
        for (let fy = 0; fy < yb.length; fy++) {
          let Zy = yb[fy],
            cb = bb[fy << 1],
            Py = bb[1 + (fy << 1)],
            oy = mb ? this.stackID(Zy) + " -> " : "";
          if (Zy.deadEnd) {
            if (hy) continue;
            if (hy = !0, Zy.restart(), mb && console.log(oy + this.stackID(Zy) + " (restarted)"), this.advanceFully(Zy, Wy)) continue
          }
          let By = Zy.split(),
            Ky = oy;
          for (let yb = 0; yb < 10 && By.forceReduce(); yb++) {
            if (mb && console.log(Ky + this.stackID(By) + " (via force-reduce)"), this.advanceFully(By, Wy)) break;
            mb && (Ky = this.stackID(By) + " -> ")
          }
          for (let yb of Zy.recoverByInsert(cb)) mb && console.log(oy + this.stackID(yb) + " (via recover-insert)"), this.advanceFully(yb, Wy);
          this.stream.end > Zy.pos ? (Py == Zy.pos && (Py++, cb = 0), Zy.recoverByDelete(cb, Py), mb && console.log(oy + this.stackID(Zy) + ` (via recover-delete ${this.parser.getName(cb)})`), Gy(Zy, Wy)) : (!Uy || Uy.score < By.score) && (Uy = By)
        }
        return Uy
      }
      stackToTree(yb) {
        return yb.close(), Uy.t.build({
          buffer: cb.create(yb),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.lZ[0].from,
          length: yb.pos - this.lZ[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(yb) {
        let bb = (Cy || (Cy = new WeakMap)).get(yb);
        return bb || Cy.set(yb, bb = String.fromCodePoint(this.nextStackID++)), bb + yb
      }
    }

    function Gy(yb, bb) {
      for (let Wy = 0; Wy < bb.length; Wy++) {
        let Uy = bb[Wy];
        if (Uy.pos == yb.pos && Uy.sameState(yb)) return void(bb[Wy].score < yb.score && (bb[Wy] = yb))
      }
      bb.push(yb)
    }
    class Oy {
      constructor(yb, bb, Wy) {
        this.source = yb, this.flags = bb, this.disabled = Wy
      }
      allows(yb) {
        return !this.disabled || 0 == this.disabled[yb]
      }
    }
    const Ry = yb => yb;
    class vb extends Uy.p {
      constructor(yb) {
        if (super(), this.wrappers = [], 14 != yb.version) throw new RangeError(`Parser version (${yb.version}) doesn't match runtime version (14)`);
        let bb = yb.nodeNames.split(" ");
        this.minRepeatTerm = bb.length;
        for (let Uy = 0; Uy < yb.repeatNodeCount; Uy++) bb.push("");
        let Wy = Object.keys(yb.topRules).map((bb => yb.topRules[bb][1])),
          hy = [];
        for (let Uy = 0; Uy < bb.length; Uy++) hy.push([]);

        function fy(yb, bb, Wy) {
          hy[yb].push([bb, bb.deserialize(String(Wy))])
        }
        if (yb.nodeProps)
          for (let cb of yb.nodeProps) {
            let yb = cb[0];
            "string" == typeof yb && (yb = Uy.h[yb]);
            for (let bb = 1; bb < cb.length;) {
              let Wy = cb[bb++];
              if (Wy >= 0) fy(Wy, yb, cb[bb++]);
              else {
                let Uy = cb[bb + -Wy];
                for (let hy = -Wy; hy > 0; hy--) fy(cb[bb++], yb, Uy);
                bb++
              }
            }
          }
        this.nodeSet = new Uy.i(bb.map(((bb, fy) => Uy.k.define({
          name: fy >= this.minRepeatTerm ? void 0 : bb,
          id: fy,
          props: hy[fy],
          top: Wy.indexOf(fy) > -1,
          error: 0 == fy,
          skipped: yb.skippedNodes && yb.skippedNodes.indexOf(fy) > -1
        })))), yb.propSources && (this.nodeSet = this.nodeSet.extend(...yb.propSources)), this.strict = !1, this.bufferLength = Uy.e;
        let Zy = Py(yb.tokenData);
        this.context = yb.context, this.specializerSpecs = yb.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let Uy = 0; Uy < this.specializerSpecs.length; Uy++) this.specialized[Uy] = this.specializerSpecs[Uy].term;
        this.specializers = this.specializerSpecs.map(My), this.states = Py(yb.states, Uint32Array), this.data = Py(yb.stateData), this.goto = Py(yb.goto), this.maxTerm = yb.maxTerm, this.tokenizers = yb.tokenizers.map((yb => "number" == typeof yb ? new ey(Zy, yb) : yb)), this.topRules = yb.topRules, this.dialects = yb.dialects || {}, this.dynamicPrecedences = yb.dynamicPrecedences || null, this.tokenPrecTable = yb.tokenPrec, this.termNames = yb.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(yb, bb, Wy) {
        let Uy = new gb(this, yb, bb, Wy);
        for (let hy of this.wrappers) Uy = hy(Uy, yb, bb, Wy);
        return Uy
      }
      getGoto(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = this.goto;
        if (bb >= Uy[0]) return -1;
        for (let hy = Uy[bb + 1];;) {
          let bb = Uy[hy++],
            fy = 1 & bb,
            Zy = Uy[hy++];
          if (fy && Wy) return Zy;
          for (let Wy = hy + (bb >> 1); hy < Wy; hy++)
            if (Uy[hy] == yb) return Zy;
          if (fy) return -1
        }
      }
      hasAction(yb, bb) {
        let Wy = this.data;
        for (let Uy = 0; Uy < 2; Uy++)
          for (let hy, fy = this.stateSlot(yb, Uy ? 2 : 1);; fy += 3) {
            if (65535 == (hy = Wy[fy])) {
              if (1 != Wy[fy + 1]) {
                if (2 == Wy[fy + 1]) return ib(Wy, fy + 2);
                break
              }
              hy = Wy[fy = ib(Wy, fy + 2)]
            }
            if (hy == bb || 0 == hy) return ib(Wy, fy + 1)
          }
        return 0
      }
      stateSlot(yb, bb) {
        return this.states[6 * yb + bb]
      }
      stateFlag(yb, bb) {
        return (this.stateSlot(yb, 0) & bb) > 0
      }
      validAction(yb, bb) {
        return !!this.allActions(yb, (yb => yb == bb || null))
      }
      allActions(yb, bb) {
        let Wy = this.stateSlot(yb, 4),
          Uy = Wy ? bb(Wy) : void 0;
        for (let hy = this.stateSlot(yb, 1); null == Uy; hy += 3) {
          if (65535 == this.data[hy]) {
            if (1 != this.data[hy + 1]) break;
            hy = ib(this.data, hy + 2)
          }
          Uy = bb(ib(this.data, hy + 1))
        }
        return Uy
      }
      nextStates(yb) {
        let bb = [];
        for (let Wy = this.stateSlot(yb, 1);; Wy += 3) {
          if (65535 == this.data[Wy]) {
            if (1 != this.data[Wy + 1]) break;
            Wy = ib(this.data, Wy + 2)
          }
          if (0 == (1 & this.data[Wy + 2])) {
            let yb = this.data[Wy + 1];
            bb.some(((bb, Wy) => 1 & Wy && bb == yb)) || bb.push(this.data[Wy], yb)
          }
        }
        return bb
      }
      configure(yb) {
        let bb = Object.assign(Object.create(vb.prototype), this);
        if (yb.props && (bb.nodeSet = this.nodeSet.extend(...yb.props)), yb.top) {
          let Wy = this.topRules[yb.top];
          if (!Wy) throw new RangeError(`Invalid top rule name ${yb.top}`);
          bb.top = Wy
        }
        return yb.tokenizers && (bb.tokenizers = this.tokenizers.map((bb => {
          let Wy = yb.tokenizers.find((yb => yb.from == bb));
          return Wy ? Wy.to : bb
        }))), yb.specializers && (bb.specializers = this.specializers.slice(), bb.specializerSpecs = this.specializerSpecs.map(((Wy, Uy) => {
          let hy = yb.specializers.find((yb => yb.from == Wy.external));
          if (!hy) return Wy;
          let fy = Object.assign(Object.assign({}, Wy), {
            external: hy.to
          });
          return bb.specializers[Uy] = My(fy), fy
        }))), yb.contextTracker && (bb.context = yb.contextTracker), yb.dialect && (bb.dialect = this.parseDialect(yb.dialect)), null != yb.strict && (bb.strict = yb.strict), yb.wrap && (bb.wrappers = bb.wrappers.concat(yb.wrap)), null != yb.bufferLength && (bb.bufferLength = yb.bufferLength), bb
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(yb) {
        return this.termNames ? this.termNames[yb] : String(yb <= this.maxNode && this.nodeSet.types[yb].name || yb)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(yb) {
        let bb = this.dynamicPrecedences;
        return null == bb ? 0 : bb[yb] || 0
      }
      parseDialect(yb) {
        let bb = Object.keys(this.dialects),
          Wy = bb.map((() => !1));
        if (yb)
          for (let hy of yb.split(" ")) {
            let yb = bb.indexOf(hy);
            yb >= 0 && (Wy[yb] = !0)
          }
        let Uy = null;
        for (let hy = 0; hy < bb.length; hy++)
          if (!Wy[hy])
            for (let yb, Wy = this.dialects[bb[hy]]; 65535 != (yb = this.data[Wy++]);)(Uy || (Uy = new Uint8Array(this.maxTerm + 1)))[yb] = 1;
        return new Oy(yb, Wy, Uy)
      }
      static deserialize(yb) {
        return new vb(yb)
      }
    }

    function ib(yb, bb) {
      return yb[bb] | yb[bb + 1] << 16
    }

    function My(yb) {
      if (yb.external) {
        let bb = yb.extend ? 1 : 0;
        return (Wy, Uy) => yb.external(Wy, Uy) << 1 | bb
      }
      return yb.get
    }
    var Yy = Wy(39786);
    const Xy = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      ny = new class {
        constructor(yb) {
          this.start = yb.start, this.shift = yb.shift || Ry, this.reduce = yb.reduce || Ry, this.reuse = yb.reuse || Ry, this.hash = yb.hash || (() => 0), this.strict = !1 !== yb.strict
        }
      }({
        start: !1,
        shift: (yb, bb) => 5 == bb || 6 == bb || 320 == bb ? yb : 321 == bb,
        strict: !1
      }),
      uy = new sy(((yb, bb) => {
        let {
          next: Wy
        } = yb;
        (125 == Wy || -1 == Wy || bb.context) && yb.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      rb = new sy(((yb, bb) => {
        let Wy, {
          next: Uy
        } = yb;
        Xy.indexOf(Uy) > -1 || (47 != Uy || 47 != (Wy = yb.peek(1)) && 42 != Wy) && (125 == Uy || 59 == Uy || -1 == Uy || bb.context || yb.acceptToken(316))
      }), {
        contextual: !0
      }),
      Hy = new sy(((yb, bb) => {
        91 != yb.next || bb.context || yb.acceptToken(317)
      }), {
        contextual: !0
      }),
      ab = new sy(((yb, bb) => {
        let {
          next: Wy
        } = yb;
        if (43 == Wy || 45 == Wy) {
          if (yb.advance(), Wy == yb.next) {
            yb.advance();
            let Wy = !bb.context && bb.canShift(1);
            yb.acceptToken(Wy ? 1 : 2)
          }
        } else 63 == Wy && 46 == yb.peek(1) && (yb.advance(), yb.advance(), (yb.next < 48 || yb.next > 57) && yb.acceptToken(3))
      }), {
        contextual: !0
      });

    function Fy(yb, bb) {
      return yb >= 65 && yb <= 90 || yb >= 97 && yb <= 122 || 95 == yb || yb >= 192 || !bb && yb >= 48 && yb <= 57
    }
    const py = new sy(((yb, bb) => {
        if (60 != yb.next || !bb.dialectEnabled(0)) return;
        if (yb.advance(), 47 == yb.next) return;
        let Wy = 0;
        for (; Xy.indexOf(yb.next) > -1;) yb.advance(), Wy++;
        if (Fy(yb.next, !0)) {
          for (yb.advance(), Wy++; Fy(yb.next, !1);) yb.advance(), Wy++;
          for (; Xy.indexOf(yb.next) > -1;) yb.advance(), Wy++;
          if (44 == yb.next) return;
          for (let bb = 0;; bb++) {
            if (7 == bb) {
              if (!Fy(yb.next, !0)) return;
              break
            }
            if (yb.next != "extends".charCodeAt(bb)) break;
            yb.advance(), Wy++
          }
        }
        yb.acceptToken(4, -Wy)
      })),
      Ly = (0, Yy.f)({
        "get set async static": Yy.m.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": Yy.m.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": Yy.m.operatorKeyword,
        "let var const using function class extends": Yy.m.definitionKeyword,
        "import export from": Yy.m.moduleKeyword,
        "with debugger new": Yy.m.keyword,
        TemplateString: Yy.m.special(Yy.m.string),
        super: Yy.m.atom,
        BooleanLiteral: Yy.m.bool,
        this: Yy.m.self,
        null: Yy.m.null,
        Star: Yy.m.modifier,
        VariableName: Yy.m.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": Yy.m.function(Yy.m.variableName),
        VariableDefinition: Yy.m.definition(Yy.m.variableName),
        Label: Yy.m.labelName,
        PropertyName: Yy.m.propertyName,
        PrivatePropertyName: Yy.m.special(Yy.m.propertyName),
        "CallExpression/MemberExpression/PropertyName": Yy.m.function(Yy.m.propertyName),
        "FunctionDeclaration/VariableDefinition": Yy.m.function(Yy.m.definition(Yy.m.variableName)),
        "ClassDeclaration/VariableDefinition": Yy.m.definition(Yy.m.className),
        "NewExpression/VariableName": Yy.m.className,
        PropertyDefinition: Yy.m.definition(Yy.m.propertyName),
        PrivatePropertyDefinition: Yy.m.definition(Yy.m.special(Yy.m.propertyName)),
        UpdateOp: Yy.m.updateOperator,
        "LineComment Hashbang": Yy.m.lineComment,
        BlockComment: Yy.m.blockComment,
        Number: Yy.m.number,
        String: Yy.m.string,
        Escape: Yy.m.escape,
        ArithOp: Yy.m.arithmeticOperator,
        LogicOp: Yy.m.logicOperator,
        BitOp: Yy.m.bitwiseOperator,
        CompareOp: Yy.m.compareOperator,
        RegExp: Yy.m.regexp,
        Equals: Yy.m.definitionOperator,
        Arrow: Yy.m.function(Yy.m.punctuation),
        ": Spread": Yy.m.punctuation,
        "( )": Yy.m.paren,
        "[ ]": Yy.m.squareBracket,
        "{ }": Yy.m.brace,
        "InterpolationStart InterpolationEnd": Yy.m.special(Yy.m.brace),
        ".": Yy.m.derefOperator,
        ", ;": Yy.m.separator,
        "@": Yy.m.meta,
        TypeName: Yy.m.typeName,
        TypeDefinition: Yy.m.definition(Yy.m.typeName),
        "type enum interface implements namespace module declare": Yy.m.definitionKeyword,
        "abstract global Privacy readonly override": Yy.m.modifier,
        "is keyof unique infer asserts": Yy.m.operatorKeyword,
        JSXAttributeValue: Yy.m.attributeValue,
        JSXText: Yy.m.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": Yy.m.angleBracket,
        "JSXIdentifier JSXNameSpacedName": Yy.m.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": Yy.m.attributeName,
        "JSXBuiltin/JSXIdentifier": Yy.m.standard(Yy.m.tagName)
      }),
      Qy = {
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
      jb = {
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
      Dy = {
        __proto__: null,
        "<": 193
      },
      tb = vb.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: ny,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [Ly],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [rb, Hy, ab, py, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, uy, new qb("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new qb("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: yb => Qy[yb] || -1
        }, {
          term: 343,
          get: yb => jb[yb] || -1
        }, {
          term: 95,
          get: yb => Dy[yb] || -1
        }],
        tokenPrec: 15201
      });
    var wy = Wy(39779),
      kb = Wy(39754),
      Ny = Wy(39759),
      zb = Wy(39751);
    const Iy = [(0, zb.l)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, zb.l)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, zb.l)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, zb.l)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, zb.l)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, zb.l)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, zb.l)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, zb.l)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, zb.l)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, zb.l)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, zb.l)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      xb = Iy.concat([(0, zb.l)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, zb.l)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, zb.l)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      Ay = new Uy.n,
      dy = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function yW(yb) {
      return (bb, Wy) => {
        let Uy = bb.node.getChild("VariableDefinition");
        return Uy && Wy(Uy, yb), !0
      }
    }
    const bW = ["FunctionDeclaration"],
      Wb = {
        FunctionDeclaration: yW("function"),
        ClassDeclaration: yW("class"),
        ClassExpression: () => !0,
        EnumDeclaration: yW("constant"),
        TypeAliasDeclaration: yW("type"),
        NamespaceDeclaration: yW("namespace"),
        VariableDefinition(yb, bb) {
          yb.matchContext(bW) || bb(yb, "variable")
        },
        TypeDefinition(yb, bb) {
          bb(yb, "type")
        },
        __proto__: null
      };

    function Ub(yb, bb) {
      let Wy = Ay.get(bb);
      if (Wy) return Wy;
      let hy = [],
        fy = !0;

      function Zy(bb, Wy) {
        let Uy = yb.sliceString(bb.from, bb.to);
        hy.push({
          label: Uy,
          type: Wy
        })
      }
      return bb.cursor(Uy.g.IncludeAnonymous).iterate((bb => {
        if (fy) fy = !1;
        else if (bb.name) {
          let yb = Wb[bb.name];
          if (yb && yb(bb, Zy) || dy.has(bb.name)) return !1
        } else if (bb.to - bb.from > 8192) {
          for (let Wy of Ub(yb, bb.node)) hy.push(Wy);
          return !1
        }
      })), Ay.set(bb, hy), hy
    }
    const hb = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      fb = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Zb(yb) {
      let bb = (0, wy.nb)(yb.state).resolveInner(yb.pos, -1);
      if (fb.indexOf(bb.name) > -1) return null;
      let Wy = "VariableName" == bb.name || bb.to - bb.from < 20 && hb.test(yb.state.sliceDoc(bb.from, bb.to));
      if (!Wy && !yb.explicit) return null;
      let Uy = [];
      for (let hy = bb; hy; hy = hy.parent) dy.has(hy.name) && (Uy = Uy.concat(Ub(yb.state.doc, hy)));
      return {
        options: Uy,
        from: Wy ? bb.from : yb.pos,
        validFor: hb
      }
    }
    const cW = wy.e.define({
        name: "javascript",
        parser: tb.configure({
          props: [wy.S.add({
            IfStatement: (0, wy.o)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, wy.o)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: wy.x,
            SwitchBody: yb => {
              let bb = yb.textAfter,
                Wy = /^\s*\}/.test(bb),
                Uy = /^\s*(case|default)\b/.test(bb);
              return yb.baseIndent + (Wy ? 0 : Uy ? 1 : 2) * yb.unit
            },
            Block: (0, wy.v)({
              closing: "}"
            }),
            ArrowFunction: yb => yb.baseIndent + yb.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, wy.o)({
              except: /^\s*{/
            }),
            JSXElement(yb) {
              let bb = /^\s*<\//.test(yb.textAfter);
              return yb.lineIndent(yb.node.from) + (bb ? 0 : yb.unit)
            },
            JSXEscape(yb) {
              let bb = /\s*\}/.test(yb.textAfter);
              return yb.lineIndent(yb.node.from) + (bb ? 0 : yb.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": yb => yb.column(yb.node.from) + yb.unit
          }), wy.K.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": wy.C,
            BlockComment: yb => ({
              from: yb.from + 2,
              to: yb.to - 2
            }),
            JSXElement(yb) {
              let bb = yb.firstChild;
              if (!bb || "JSXSelfClosingTag" == bb.name) return null;
              let Wy = yb.lastChild;
              return {
                from: bb.to,
                to: Wy.type.isError ? yb.to : Wy.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(yb) {
              var bb;
              let Wy = null === (bb = yb.firstChild) || void 0 === bb ? void 0 : bb.nextSibling,
                Uy = yb.lastChild;
              return !Wy || Wy.type.isError ? null : {
                from: Wy.to,
                to: Uy.type.isError ? yb.to : Uy.from
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
      Pb = {
        test: yb => /^JSX/.test(yb.name),
        facet: (0, wy.s)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      ob = cW.configure({
        dialect: "ts"
      }, "typescript"),
      Bb = cW.configure({
        dialect: "jsx",
        props: [wy.eb.add((yb => yb.isTop ? [Pb] : void 0))]
      }),
      Kb = cW.configure({
        dialect: "jsx ts",
        props: [wy.eb.add((yb => yb.isTop ? [Pb] : void 0))]
      }, "typescript");
    let eb = yb => ({
      label: yb,
      type: "keyword"
    });
    const qW = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(eb),
      sb = qW.concat(["declare", "implements", "private", "protected", "public"].map(eb));

    function Sb() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        bb = yb.jsx ? yb.typescript ? Kb : Bb : yb.typescript ? ob : cW,
        Wy = yb.typescript ? xb.concat(sb) : Iy.concat(qW);
      return new wy.h(bb, [cW.data.of({
        autocomplete: (0, zb.j)(fb, (0, zb.g)(Wy))
      }), cW.data.of({
        autocomplete: Zb
      }), yb.jsx ? mW : []])
    }

    function Eb(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yb.length;
      for (let Uy = null === bb || void 0 === bb ? void 0 : bb.firstChild; Uy; Uy = Uy.nextSibling)
        if ("JSXIdentifier" == Uy.name || "JSXBuiltin" == Uy.name || "JSXNamespacedName" == Uy.name || "JSXMemberExpression" == Uy.name) return yb.sliceString(Uy.from, Math.min(Uy.to, Wy));
      return ""
    }
    const lb = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      mW = Ny.k.inputHandler.of(((yb, bb, Wy, Uy, hy) => {
        if ((lb ? yb.composing : yb.compositionStarted) || yb.state.readOnly || bb != Wy || ">" != Uy && "/" != Uy || !cW.isActiveAt(yb.state, bb, -1)) return !1;
        let fy = hy(),
          {
            state: Zy
          } = fy,
          cb = Zy.changeByRange((yb => {
            var bb;
            let Wy, {
                head: hy
              } = yb,
              fy = (0, wy.nb)(Zy).resolveInner(hy - 1, -1);
            if ("JSXStartTag" == fy.name && (fy = fy.parent), Zy.doc.sliceString(hy - 1, hy) != Uy || "JSXAttributeValue" == fy.name && fy.to > hy);
            else {
              if (">" == Uy && "JSXFragmentTag" == fy.name) return {
                range: yb,
                changes: {
                  from: hy,
                  insert: "</>"
                }
              };
              if ("/" == Uy && "JSXStartCloseTag" == fy.name) {
                let yb = fy.parent,
                  Uy = yb.parent;
                if (Uy && yb.from == hy - 2 && ((Wy = Eb(Zy.doc, Uy.firstChild, hy)) || "JSXFragmentTag" == (null === (bb = Uy.firstChild) || void 0 === bb ? void 0 : bb.name))) {
                  let yb = `${Wy}>`;
                  return {
                    range: kb.n.cursor(hy + yb.length, -1),
                    changes: {
                      from: hy,
                      insert: yb
                    }
                  }
                }
              } else if (">" == Uy) {
                let bb = function(yb) {
                  for (;;) {
                    if ("JSXOpenTag" == yb.name || "JSXSelfClosingTag" == yb.name || "JSXFragmentTag" == yb.name) return yb;
                    if ("JSXEscape" == yb.name || !yb.parent) return null;
                    yb = yb.parent
                  }
                }(fy);
                if (bb && "JSXOpenTag" == bb.name && !/^\/?>|^<\//.test(Zy.doc.sliceString(hy, hy + 2)) && (Wy = Eb(Zy.doc, bb, hy))) return {
                  range: yb,
                  changes: {
                    from: hy,
                    insert: `</${Wy}>`
                  }
                }
              }
            }
            return {
              range: yb
            }
          }));
        return !cb.changes.empty && (yb.dispatch([fy, Zy.update(cb, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  39779: (yb, bb, Wy) => {
    Wy.d(bb, {
      $: () => My,
      C: () => Iy,
      G: () => ob,
      K: () => zb,
      M: () => ly,
      N: () => Yy,
      O: () => ny,
      S: () => rb,
      W: () => kb,
      Y: () => Xy,
      b: () => Tb,
      bb: () => jW,
      c: () => uy,
      e: () => sy,
      eb: () => Ky,
      h: () => vb,
      hb: () => Gb,
      l: () => Fb,
      lb: () => Ey,
      nb: () => Sy,
      o: () => tb,
      q: () => vW,
      s: () => By,
      v: () => Qy,
      x: () => Dy,
      z: () => mW
    });
    var Uy, hy = Wy(39781),
      fy = Wy(39754),
      Zy = Wy(39759),
      cb = Wy(39786),
      Py = Wy(39768);
    const oy = new hy.h;

    function By(yb) {
      return fy.v.define({
        combine: yb ? bb => bb.concat(yb) : void 0
      })
    }
    const Ky = new hy.h;
    class ey {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = yb, this.name = Uy, fy.r.prototype.hasOwnProperty("tree") || Object.defineProperty(fy.r.prototype, "tree", {
          get() {
            return Sy(this)
          }
        }), this.parser = bb, this.extension = [Ry.of(this), fy.r.languageData.of(((yb, bb, Wy) => {
          let Uy = qb(yb, bb, Wy),
            hy = Uy.type.prop(oy);
          if (!hy) return [];
          let fy = yb.facet(hy),
            Zy = Uy.type.prop(Ky);
          if (Zy) {
            let hy = Uy.resolve(bb - Uy.from, Wy);
            for (let bb of Zy)
              if (bb.test(hy, yb)) {
                let Wy = yb.facet(bb.facet);
                return "replace" == bb.type ? Wy : Wy.concat(fy)
              }
          }
          return fy
        }))].concat(Wy)
      }
      isActiveAt(yb, bb) {
        return qb(yb, bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(oy) == this.data
      }
      findRegions(yb) {
        let bb = yb.facet(Ry);
        if ((null === bb || void 0 === bb ? void 0 : bb.data) == this.data) return [{
          from: 0,
          to: yb.doc.length
        }];
        if (!bb || !bb.allowsNesting) return [];
        let Wy = [],
          Uy = (yb, bb) => {
            if (yb.prop(oy) == this.data) return void Wy.push({
              from: bb,
              to: bb + yb.length
            });
            let fy = yb.prop(hy.h.mounted);
            if (fy) {
              if (fy.tree.prop(oy) == this.data) {
                if (fy.overlay)
                  for (let yb of fy.overlay) Wy.push({
                    from: yb.from + bb,
                    to: yb.to + bb
                  });
                else Wy.push({
                  from: bb,
                  to: bb + yb.length
                });
                return
              }
              if (fy.overlay) {
                let yb = Wy.length;
                if (Uy(fy.tree, fy.overlay[0].from + bb), Wy.length > yb) return
              }
            }
            for (let Wy = 0; Wy < yb.children.length; Wy++) {
              let fy = yb.children[Wy];
              fy instanceof hy.t && Uy(fy, yb.positions[Wy] + bb)
            }
          };
        return Uy(Sy(yb), 0), Wy
      }
      get allowsNesting() {
        return !0
      }
    }

    function qb(yb, bb, Wy) {
      let Uy = yb.facet(Ry),
        fy = Sy(yb).topNode;
      if (!Uy || Uy.allowsNesting)
        for (let Zy = fy; Zy; Zy = Zy.enter(bb, Wy, hy.g.ExcludeBuffers | hy.g.EnterBracketed)) Zy.type.isTop && (fy = Zy);
      return fy
    }
    ey.setState = fy.I.define();
    class sy extends ey {
      constructor(yb, bb, Wy) {
        super(yb, bb, [], Wy), this.parser = bb
      }
      static define(yb) {
        let bb = By(yb.languageData);
        return new sy(bb, yb.parser.configure({
          props: [oy.add((yb => yb.isTop ? bb : void 0))]
        }), yb.name)
      }
      configure(yb, bb) {
        return new sy(this.data, this.parser.configure(yb), bb || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function Sy(yb) {
      let bb = yb.field(ey.state, !1);
      return bb ? bb.tree : hy.t.empty
    }

    function Ey(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb.doc.length;
      var Wy;
      return (null === (Wy = yb.field(ey.state, !1)) || void 0 === Wy ? void 0 : Wy.context.isDone(bb)) || !1
    }

    function ly(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb.viewport.to,
        Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Uy = function(yb, bb) {
          let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var Uy;
          let hy = null === (Uy = yb.field(ey.state, !1)) || void 0 === Uy ? void 0 : Uy.context;
          if (!hy) return null;
          let fy = hy.viewport;
          hy.updateViewport({
            from: 0,
            to: bb
          });
          let Zy = hy.isDone(bb) || hy.work(Wy, bb) ? hy.tree : null;
          return hy.updateViewport(fy), Zy
        }(yb.state, bb, Wy);
      return Uy != Sy(yb.state) && yb.dispatch({}), !!Uy
    }
    class mb {
      constructor(yb) {
        this.doc = yb, this.cursorPos = 0, this.string = "", this.cursor = yb.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(yb) {
        return this.string = this.cursor.next(yb - this.cursorPos).value, this.cursorPos = yb + this.string.length, this.cursorPos - this.string.length
      }
      chunk(yb) {
        return this.syncTo(yb), this.string
      }
      get lineChunks() {
        return !0
      }
      read(yb, bb) {
        let Wy = this.cursorPos - this.string.length;
        return yb < Wy || bb >= this.cursorPos ? this.doc.sliceString(yb, bb) : this.string.slice(yb - Wy, bb - Wy)
      }
    }
    let Cy = null;
    class Ty {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          Uy = arguments.length > 3 ? arguments[3] : void 0,
          hy = arguments.length > 4 ? arguments[4] : void 0,
          fy = arguments.length > 5 ? arguments[5] : void 0,
          Zy = arguments.length > 6 ? arguments[6] : void 0,
          cb = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = yb, this.state = bb, this.fragments = Wy, this.tree = Uy, this.treeLen = hy, this.viewport = fy, this.skipped = Zy, this.scheduleOn = cb, this.parse = null, this.tempSkipped = []
      }
      static create(yb, bb, Wy) {
        return new Ty(yb, bb, [], hy.t.empty, 0, Wy, [], null)
      }
      startParse() {
        return this.parser.startParse(new mb(this.state.doc), this.fragments)
      }
      work(yb, bb) {
        return null != bb && bb >= this.state.doc.length && (bb = void 0), this.tree != hy.t.empty && this.isDone(null !== bb && void 0 !== bb ? bb : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var Wy;
          if ("number" == typeof yb) {
            let bb = Date.now() + yb;
            yb = () => Date.now() > bb
          }
          for (this.parse || (this.parse = this.startParse()), null != bb && (null == this.parse.stoppedAt || this.parse.stoppedAt > bb) && bb < this.state.doc.length && this.parse.stopAt(bb);;) {
            let Uy = this.parse.advance();
            if (Uy) {
              if (this.fragments = this.withoutTempSkipped(hy.r.addTree(Uy, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (Wy = this.parse.stoppedAt) && void 0 !== Wy ? Wy : this.state.doc.length, this.tree = Uy, this.parse = null, !(this.treeLen < (null !== bb && void 0 !== bb ? bb : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (yb()) return !1
          }
        }))
      }
      takeTree() {
        let yb, bb;
        this.parse && (yb = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > yb) && this.parse.stopAt(yb), this.withContext((() => {
          for (; !(bb = this.parse.advance()););
        })), this.treeLen = yb, this.tree = bb, this.fragments = this.withoutTempSkipped(hy.r.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(yb) {
        let bb = Cy;
        Cy = this;
        try {
          return yb()
        } finally {
          Cy = bb
        }
      }
      withoutTempSkipped(yb) {
        for (let bb; bb = this.tempSkipped.pop();) yb = Vy(yb, bb.from, bb.to);
        return yb
      }
      changes(yb, bb) {
        let {
          fragments: Wy,
          tree: Uy,
          treeLen: fy,
          viewport: Zy,
          skipped: cb
        } = this;
        if (this.takeTree(), !yb.empty) {
          let bb = [];
          if (yb.iterChangedRanges(((yb, Wy, Uy, hy) => bb.push({
              fromA: yb,
              toA: Wy,
              fromB: Uy,
              toB: hy
            }))), Wy = hy.r.applyChanges(Wy, bb), Uy = hy.t.empty, fy = 0, Zy = {
              from: yb.mapPos(Zy.from, -1),
              to: yb.mapPos(Zy.to, 1)
            }, this.skipped.length) {
            cb = [];
            for (let bb of this.skipped) {
              let Wy = yb.mapPos(bb.from, 1),
                Uy = yb.mapPos(bb.to, -1);
              Wy < Uy && cb.push({
                from: Wy,
                to: Uy
              })
            }
          }
        }
        return new Ty(this.parser, bb, Wy, Uy, fy, Zy, cb, this.scheduleOn)
      }
      updateViewport(yb) {
        if (this.viewport.from == yb.from && this.viewport.to == yb.to) return !1;
        this.viewport = yb;
        let bb = this.skipped.length;
        for (let Wy = 0; Wy < this.skipped.length; Wy++) {
          let {
            from: bb,
            to: Uy
          } = this.skipped[Wy];
          bb < yb.to && Uy > yb.from && (this.fragments = Vy(this.fragments, bb, Uy), this.skipped.splice(Wy--, 1))
        }
        return !(this.skipped.length >= bb) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(yb, bb) {
        this.skipped.push({
          from: yb,
          to: bb
        })
      }
      static getSkippingParser(yb) {
        return new class extends hy.p {
          createParse(bb, Wy, Uy) {
            let fy = Uy[0].from,
              Zy = Uy[Uy.length - 1].to;
            return {
              parsedPos: fy,
              advance() {
                let bb = Cy;
                if (bb) {
                  for (let yb of Uy) bb.tempSkipped.push(yb);
                  yb && (bb.scheduleOn = bb.scheduleOn ? Promise.all([bb.scheduleOn, yb]) : yb)
                }
                return this.parsedPos = Zy, new hy.t(hy.k.none, [], [], Zy - fy)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(yb) {
        yb = Math.min(yb, this.state.doc.length);
        let bb = this.fragments;
        return this.treeLen >= yb && bb.length && 0 == bb[0].from && bb[0].to >= yb
      }
      static get() {
        return Cy
      }
    }

    function Vy(yb, bb, Wy) {
      return hy.r.applyChanges(yb, [{
        fromA: bb,
        toA: Wy,
        fromB: bb,
        toB: Wy
      }])
    }
    class Jy {
      constructor(yb) {
        this.context = yb, this.tree = yb.tree
      }
      apply(yb) {
        if (!yb.docChanged && this.tree == this.context.tree) return this;
        let bb = this.context.changes(yb.changes, yb.state),
          Wy = this.context.treeLen == yb.startState.doc.length ? void 0 : Math.max(yb.changes.mapPos(this.context.treeLen), bb.viewport.to);
        return bb.work(20, Wy) || bb.takeTree(), new Jy(bb)
      }
      static init(yb) {
        let bb = Math.min(3e3, yb.doc.length),
          Wy = Ty.create(yb.facet(Ry).parser, yb, {
            from: 0,
            to: bb
          });
        return Wy.work(20, bb) || Wy.takeTree(), new Jy(Wy)
      }
    }
    ey.state = fy.J.define({
      create: Jy.init,
      update(yb, bb) {
        for (let Wy of bb.effects)
          if (Wy.is(ey.setState)) return Wy.value;
        return bb.startState.facet(Ry) != bb.state.facet(Ry) ? Jy.init(bb.state) : yb.apply(bb)
      }
    });
    let gb = yb => {
      let bb = setTimeout((() => yb()), 500);
      return () => clearTimeout(bb)
    };
    "undefined" != typeof requestIdleCallback && (gb = yb => {
      let bb = -1,
        Wy = setTimeout((() => {
          bb = requestIdleCallback(yb, {
            timeout: 400
          })
        }), 100);
      return () => bb < 0 ? clearTimeout(Wy) : cancelIdleCallback(bb)
    });
    const Gy = "undefined" != typeof navigator && (null === (Uy = navigator.scheduling) || void 0 === Uy ? void 0 : Uy.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      Oy = Zy.n.fromClass(class {
        constructor(yb) {
          this.view = yb, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(yb) {
          let bb = this.view.state.field(ey.state).context;
          (bb.updateViewport(yb.view.viewport) || this.view.viewport.to > bb.treeLen) && this.scheduleWork(), (yb.docChanged || yb.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(bb)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: yb
          } = this.view, bb = yb.field(ey.state);
          bb.tree == bb.context.tree && bb.context.isDone(yb.doc.length) || (this.working = gb(this.work))
        }
        work(yb) {
          this.working = null;
          let bb = Date.now();
          if (this.chunkEnd < bb && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = bb + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: Wy,
            viewport: {
              to: Uy
            }
          } = this.view, hy = Wy.field(ey.state);
          if (hy.tree == hy.context.tree && hy.context.isDone(Uy + 1e5)) return;
          let fy = Date.now() + Math.min(this.chunkBudget, 100, yb && !Gy ? Math.max(25, yb.timeRemaining() - 5) : 1e9),
            Zy = hy.context.treeLen < Uy && Wy.doc.length > Uy + 1e3,
            cb = hy.context.work((() => Gy && Gy() || Date.now() > fy), Uy + (Zy ? 0 : 1e5));
          this.chunkBudget -= Date.now() - bb, (cb || this.chunkBudget <= 0) && (hy.context.takeTree(), this.view.dispatch({
            effects: ey.setState.of(new Jy(hy.context))
          })), this.chunkBudget > 0 && (!cb || Zy) && this.scheduleWork(), this.checkAsyncSchedule(hy.context)
        }
        checkAsyncSchedule(yb) {
          yb.scheduleOn && (this.workScheduled++, yb.scheduleOn.then((() => this.scheduleWork())).catch((yb => (0, Zy.Y)(this.view.state, yb))).then((() => this.workScheduled--)), yb.scheduleOn = null)
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
      Ry = fy.v.define({
        combine: yb => yb.length ? yb[0] : null,
        enables: yb => [ey.state, Oy, Zy.k.contentAttributes.compute([yb], (bb => {
          let Wy = bb.facet(yb);
          return Wy && Wy.name ? {
            "data-language": Wy.name
          } : {}
        }))]
      });
    class vb {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = yb, this.support = bb, this.extension = [yb, bb]
      }
    }
    const ib = fy.v.define(),
      My = fy.v.define({
        combine: yb => {
          if (!yb.length) return "  ";
          let bb = yb[0];
          if (!bb || /\S/.test(bb) || Array.from(bb).some((yb => yb != bb[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(yb[0]));
          return bb
        }
      });

    function Yy(yb) {
      let bb = yb.facet(My);
      return 9 == bb.charCodeAt(0) ? yb.tabSize * bb.length : bb.length
    }

    function Xy(yb, bb) {
      let Wy = "",
        Uy = yb.tabSize,
        hy = yb.facet(My)[0];
      if ("\t" == hy) {
        for (; bb >= Uy;) Wy += "\t", bb -= Uy;
        hy = " "
      }
      for (let fy = 0; fy < bb; fy++) Wy += hy;
      return Wy
    }

    function ny(yb, bb) {
      yb instanceof fy.r && (yb = new uy(yb));
      for (let Uy of yb.state.facet(ib)) {
        let Wy = Uy(yb, bb);
        if (void 0 !== Wy) return Wy
      }
      let Wy = Sy(yb.state);
      return Wy.length >= bb ? function(yb, bb, Wy) {
        let Uy = bb.resolveStack(Wy),
          hy = bb.resolveInner(Wy, -1).resolve(Wy, 0).enterUnfinishedNodesBefore(Wy);
        if (hy != Uy.node) {
          let yb = [];
          for (let bb = hy; bb && !(bb.from < Uy.node.from || bb.to > Uy.node.to || bb.from == Uy.node.from && bb.type == Uy.node.type); bb = bb.parent) yb.push(bb);
          for (let bb = yb.length - 1; bb >= 0; bb--) Uy = {
            node: yb[bb],
            next: Uy
          }
        }
        return Hy(Uy, yb, Wy)
      }(yb, Wy, bb) : null
    }
    class uy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = yb, this.options = bb, this.unit = Yy(yb)
      }
      lineAt(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Wy = this.state.doc.lineAt(yb),
          {
            simulateBreak: Uy,
            simulateDoubleBreak: hy
          } = this.options;
        return null != Uy && Uy >= Wy.from && Uy <= Wy.to ? hy && Uy == yb ? {
          text: "",
          from: yb
        } : (bb < 0 ? Uy < yb : Uy <= yb) ? {
          text: Wy.text.slice(Uy - Wy.from),
          from: Uy
        } : {
          text: Wy.text.slice(0, Uy - Wy.from),
          from: Wy.from
        } : Wy
      }
      textAfterPos(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && yb == this.options.simulateBreak) return "";
        let {
          text: Wy,
          from: Uy
        } = this.lineAt(yb, bb);
        return Wy.slice(yb - Uy, Math.min(Wy.length, yb + 100 - Uy))
      }
      column(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Wy,
            from: Uy
          } = this.lineAt(yb, bb),
          hy = this.countColumn(Wy, yb - Uy),
          fy = this.options.overrideIndentation ? this.options.overrideIndentation(Uy) : -1;
        return fy > -1 && (hy += fy - this.countColumn(Wy, Wy.search(/\S|$/))), hy
      }
      countColumn(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb.length;
        return (0, fy.cb)(yb, this.state.tabSize, bb)
      }
      lineIndent(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: Wy,
            from: Uy
          } = this.lineAt(yb, bb),
          hy = this.options.overrideIndentation;
        if (hy) {
          let yb = hy(Uy);
          if (yb > -1) return yb
        }
        return this.countColumn(Wy, Wy.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const rb = new hy.h;

    function Hy(yb, bb, Wy) {
      for (let Uy = yb; Uy; Uy = Uy.next) {
        let yb = ab(Uy.node);
        if (yb) return yb(py.create(bb, Wy, Uy))
      }
      return 0
    }

    function ab(yb) {
      let bb = yb.type.prop(rb);
      if (bb) return bb;
      let Wy, Uy = yb.firstChild;
      if (Uy && (Wy = Uy.type.prop(hy.h.closedBy))) {
        let bb = yb.lastChild,
          Uy = bb && Wy.indexOf(bb.name) > -1;
        return yb => jb(yb, !0, 1, void 0, Uy && ! function(yb) {
          return yb.pos == yb.options.simulateBreak && yb.options.simulateDoubleBreak
        }(yb) ? bb.from : void 0)
      }
      return null == yb.parent ? Fy : null
    }

    function Fy() {
      return 0
    }
    class py extends uy {
      constructor(yb, bb, Wy) {
        super(yb.state, yb.options), this.base = yb, this.pos = bb, this.context = Wy
      }
      get node() {
        return this.context.node
      }
      static create(yb, bb, Wy) {
        return new py(yb, bb, Wy)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(yb) {
        let bb = this.state.doc.lineAt(yb.from);
        for (;;) {
          let Wy = yb.resolve(bb.from);
          for (; Wy.parent && Wy.parent.from == Wy.from;) Wy = Wy.parent;
          if (Ly(Wy, yb)) break;
          bb = this.state.doc.lineAt(Wy.from)
        }
        return this.lineIndent(bb.from)
      }
      continue () {
        return Hy(this.context.next, this.base, this.pos)
      }
    }

    function Ly(yb, bb) {
      for (let Wy = bb; Wy; Wy = Wy.parent)
        if (yb == Wy) return !0;
      return !1
    }

    function Qy(yb) {
      let {
        closing: bb,
        align: Wy = !0,
        units: Uy = 1
      } = yb;
      return yb => jb(yb, Wy, Uy, bb)
    }

    function jb(yb, bb, Wy, Uy, hy) {
      let fy = yb.textAfter,
        Zy = fy.match(/^\s*/)[0].length,
        cb = Uy && fy.slice(Zy, Zy + Uy.length) == Uy || hy == yb.pos + Zy,
        Py = bb ? function(yb) {
          let bb = yb.node,
            Wy = bb.childAfter(bb.from),
            Uy = bb.lastChild;
          if (!Wy) return null;
          let hy = yb.options.simulateBreak,
            fy = yb.state.doc.lineAt(Wy.from),
            Zy = null == hy || hy <= fy.from ? fy.to : Math.min(fy.to, hy);
          for (let cb = Wy.to;;) {
            let yb = bb.childAfter(cb);
            if (!yb || yb == Uy) return null;
            if (!yb.type.isSkipped) {
              if (yb.from >= Zy) return null;
              let bb = /^ */.exec(fy.text.slice(Wy.to - fy.from))[0].length;
              return {
                from: Wy.from,
                to: Wy.to + bb
              }
            }
            cb = yb.to
          }
        }(yb) : null;
      return Py ? cb ? yb.column(Py.from) : yb.column(Py.to) : yb.baseIndent + (cb ? 0 : yb.unit * Wy)
    }
    const Dy = yb => yb.baseIndent;

    function tb() {
      let {
        except: yb,
        units: bb = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Wy => {
        let Uy = yb && yb.test(Wy.textAfter);
        return Wy.baseIndent + (Uy ? 0 : bb * Wy.unit)
      }
    }
    const wy = 200;

    function kb() {
      return fy.r.transactionFilter.of((yb => {
        if (!yb.docChanged || !yb.isUserEvent("input.type") && !yb.isUserEvent("input.complete")) return yb;
        let bb = yb.startState.languageDataAt("indentOnInput", yb.startState.selection.main.head);
        if (!bb.length) return yb;
        let Wy = yb.newDoc,
          {
            head: Uy
          } = yb.newSelection.main,
          hy = Wy.lineAt(Uy);
        if (Uy > hy.from + wy) return yb;
        let fy = Wy.sliceString(hy.from, Uy);
        if (!bb.some((yb => yb.test(fy)))) return yb;
        let {
          state: Zy
        } = yb, cb = -1, Py = [];
        for (let {
            head: oy
          }
          of Zy.selection.lZ) {
          let yb = Zy.doc.lineAt(oy);
          if (yb.from == cb) continue;
          cb = yb.from;
          let bb = ny(Zy, yb.from);
          if (null == bb) continue;
          let Wy = /^\s*/.exec(yb.text)[0],
            Uy = Xy(Zy, bb);
          Wy != Uy && Py.push({
            from: yb.from,
            to: yb.from + Wy.length,
            insert: Uy
          })
        }
        return Py.length ? [yb, {
          changes: Py,
          sequential: !0
        }] : yb
      }))
    }
    const Ny = fy.v.define(),
      zb = new hy.h;

    function Iy(yb) {
      let bb = yb.firstChild,
        Wy = yb.lastChild;
      return bb && bb.to < Wy.from ? {
        from: bb.to,
        to: Wy.type.isError ? yb.to : Wy.from
      } : null
    }

    function xb(yb) {
      let bb = yb.lastChild;
      return bb && bb.to == yb.to && bb.type.isError
    }

    function Ay(yb, bb, Wy) {
      for (let Uy of yb.facet(Ny)) {
        let hy = Uy(yb, bb, Wy);
        if (hy) return hy
      }
      return function(yb, bb, Wy) {
        let Uy = Sy(yb);
        if (Uy.length < Wy) return null;
        let hy = null;
        for (let fy = Uy.resolveStack(Wy, 1); fy; fy = fy.next) {
          let Zy = fy.node;
          if (Zy.to <= Wy || Zy.from > Wy) continue;
          if (hy && Zy.from < bb) break;
          let cb = Zy.type.prop(zb);
          if (cb && (Zy.to < Uy.length - 50 || Uy.length == yb.doc.length || !xb(Zy))) {
            let Uy = cb(Zy, yb);
            Uy && Uy.from <= Wy && Uy.from >= bb && Uy.to > Wy && (hy = Uy)
          }
        }
        return hy
      }(yb, bb, Wy)
    }

    function dy(yb, bb) {
      let Wy = bb.mapPos(yb.from, 1),
        Uy = bb.mapPos(yb.to, -1);
      return Wy >= Uy ? void 0 : {
        from: Wy,
        to: Uy
      }
    }
    const yW = fy.I.define({
        map: dy
      }),
      bW = fy.I.define({
        map: dy
      });

    function Wb(yb) {
      let bb = [];
      for (let {
          head: Wy
        }
        of yb.state.selection.lZ) bb.some((yb => yb.from <= Wy && yb.to >= Wy)) || bb.push(yb.lineBlockAt(Wy));
      return bb
    }
    const Ub = fy.J.define({
      create: () => Zy.e.none,
      update(yb, bb) {
        bb.isUserEvent("delete") && bb.changes.iterChangedRanges(((bb, Wy) => yb = hb(yb, bb, Wy))), yb = yb.map(bb.changes);
        for (let Wy of bb.effects)
          if (Wy.is(yW) && !Zb(yb, Wy.value.from, Wy.value.to)) {
            let {
              preparePlaceholder: Uy
            } = bb.state.facet(Kb), hy = Uy ? Zy.e.replace({
              widget: new Sb(Uy(bb.state, Wy.value))
            }) : sb;
            yb = yb.update({
              add: [hy.range(Wy.value.from, Wy.value.to)]
            })
          } else Wy.is(bW) && (yb = yb.update({
            filter: (yb, bb) => Wy.value.from != yb || Wy.value.to != bb,
            filterFrom: Wy.value.from,
            filterTo: Wy.value.to
          }));
        return bb.selection && (yb = hb(yb, bb.selection.main.head)), yb
      },
      provide: yb => Zy.k.PZ.from(yb),
      toJSON(yb, bb) {
        let Wy = [];
        return yb.between(0, bb.doc.length, ((yb, bb) => {
          Wy.push(yb, bb)
        })), Wy
      },
      fromJSON(yb) {
        if (!Array.isArray(yb) || yb.length % 2) throw new RangeError("Invalid JSON for fold state");
        let bb = [];
        for (let Wy = 0; Wy < yb.length;) {
          let Uy = yb[Wy++],
            hy = yb[Wy++];
          if ("number" != typeof Uy || "number" != typeof hy) throw new RangeError("Invalid JSON for fold state");
          bb.push(sb.range(Uy, hy))
        }
        return Zy.e.set(bb, !0)
      }
    });

    function hb(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb,
        Uy = !1;
      return yb.between(bb, Wy, ((yb, hy) => {
        yb < Wy && hy > bb && (Uy = !0)
      })), Uy ? yb.update({
        filterFrom: bb,
        filterTo: Wy,
        filter: (yb, Uy) => yb >= Wy || Uy <= bb
      }) : yb
    }

    function fb(yb, bb, Wy) {
      var Uy;
      let hy = null;
      return null === (Uy = yb.field(Ub, !1)) || void 0 === Uy || Uy.between(bb, Wy, ((yb, bb) => {
        (!hy || hy.from > yb) && (hy = {
          from: yb,
          to: bb
        })
      })), hy
    }

    function Zb(yb, bb, Wy) {
      let Uy = !1;
      return yb.between(bb, bb, ((yb, hy) => {
        yb == bb && hy == Wy && (Uy = !0)
      })), Uy
    }

    function cW(yb, bb) {
      return yb.field(Ub, !1) ? bb : bb.concat(fy.I.appendConfig.of(eb()))
    }

    function Pb(yb, bb) {
      let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        Uy = yb.state.doc.lineAt(bb.from).number,
        hy = yb.state.doc.lineAt(bb.to).number;
      return Zy.k.announce.of(`${yb.state.phrase(Wy?"Folded lines":"Unfolded lines")} ${Uy} ${yb.state.phrase("to")} ${hy}.`)
    }
    const ob = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: yb => {
          for (let bb of Wb(yb)) {
            let Wy = Ay(yb.state, bb.from, bb.to);
            if (Wy) return yb.dispatch({
              effects: cW(yb.state, [yW.of(Wy), Pb(yb, Wy)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: yb => {
          if (!yb.state.field(Ub, !1)) return !1;
          let bb = [];
          for (let Wy of Wb(yb)) {
            let Uy = fb(yb.state, Wy.from, Wy.to);
            Uy && bb.push(bW.of(Uy), Pb(yb, Uy, !1))
          }
          return bb.length && yb.dispatch({
            effects: bb
          }), bb.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: yb => {
          let {
            state: bb
          } = yb, Wy = [];
          for (let Uy = 0; Uy < bb.doc.length;) {
            let hy = yb.lineBlockAt(Uy),
              fy = Ay(bb, hy.from, hy.to);
            fy && Wy.push(yW.of(fy)), Uy = (fy ? yb.lineBlockAt(fy.to) : hy).to + 1
          }
          return Wy.length && yb.dispatch({
            effects: cW(yb.state, Wy)
          }), !!Wy.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: yb => {
          let bb = yb.state.field(Ub, !1);
          if (!bb || !bb.size) return !1;
          let Wy = [];
          return bb.between(0, yb.state.doc.length, ((yb, bb) => {
            Wy.push(bW.of({
              from: yb,
              to: bb
            }))
          })), yb.dispatch({
            effects: Wy
          }), !0
        }
      }],
      Bb = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Kb = fy.v.define({
        combine: yb => (0, fy._)(yb, Bb)
      });

    function eb(yb) {
      let bb = [Ub, Cb];
      return yb && bb.push(Kb.of(yb)), bb
    }

    function qW(yb, bb) {
      let {
        state: Wy
      } = yb, Uy = Wy.facet(Kb), hy = bb => {
        let Wy = yb.lineBlockAt(yb.posAtDOM(bb.target)),
          Uy = fb(yb.state, Wy.from, Wy.to);
        Uy && yb.dispatch({
          effects: bW.of(Uy)
        }), bb.preventDefault()
      };
      if (Uy.placeholderDOM) return Uy.placeholderDOM(yb, hy, bb);
      let fy = document.createElement("span");
      return fy.textContent = Uy.placeholderText, fy.setAttribute("aria-label", Wy.phrase("folded code")), fy.title = Wy.phrase("unfold"), fy.className = "cm-foldPlaceholder", fy.onclick = hy, fy
    }
    const sb = Zy.e.replace({
      widget: new class extends Zy.q {
        toDOM(yb) {
          return qW(yb, null)
        }
      }
    });
    class Sb extends Zy.q {
      constructor(yb) {
        super(), this.value = yb
      }
      eq(yb) {
        return this.value == yb.value
      }
      toDOM(yb) {
        return qW(yb, this.value)
      }
    }
    const Eb = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class lb extends Zy.m {
      constructor(yb, bb) {
        super(), this.config = yb, this.open = bb
      }
      eq(yb) {
        return this.config == yb.config && this.open == yb.open
      }
      toDOM(yb) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let bb = document.createElement("span");
        return bb.textContent = this.open ? this.config.openText : this.config.closedText, bb.title = yb.state.phrase(this.open ? "Fold line" : "Unfold line"), bb
      }
    }

    function mW() {
      let yb = {
          ...Eb,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        bb = new lb(yb, !0),
        Wy = new lb(yb, !1),
        Uy = Zy.n.fromClass(class {
          constructor(yb) {
            this.from = yb.viewport.from, this.markers = this.buildMarkers(yb)
          }
          update(bb) {
            (bb.docChanged || bb.viewportChanged || bb.startState.facet(Ry) != bb.state.facet(Ry) || bb.startState.field(Ub, !1) != bb.state.field(Ub, !1) || Sy(bb.startState) != Sy(bb.state) || yb.foldingChanged(bb)) && (this.markers = this.buildMarkers(bb.view))
          }
          buildMarkers(yb) {
            let Uy = new fy.C;
            for (let hy of yb.viewportLineBlocks) {
              let fy = fb(yb.state, hy.from, hy.to) ? Wy : Ay(yb.state, hy.from, hy.to) ? bb : null;
              fy && Uy.add(hy.from, hy.from, fy)
            }
            return Uy.finish()
          }
        }),
        {
          domEventHandlers: hy
        } = yb;
      return [Uy, (0, Zy.G)({
        class: "cm-foldGutter",
        markers(yb) {
          var bb;
          return (null === (bb = yb.plugin(Uy)) || void 0 === bb ? void 0 : bb.markers) || fy.E.empty
        },
        initialSpacer: () => new lb(yb, !1),
        domEventHandlers: {
          ...hy,
          click: (yb, bb, Wy) => {
            if (hy.click && hy.click(yb, bb, Wy)) return !0;
            let Uy = fb(yb.state, bb.from, bb.to);
            if (Uy) return yb.dispatch({
              effects: bW.of(Uy)
            }), !0;
            let fy = Ay(yb.state, bb.from, bb.to);
            return !!fy && (yb.dispatch({
              effects: yW.of(fy)
            }), !0)
          }
        }
      }), eb()]
    }
    const Cb = Zy.k.baseTheme({
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
    class Tb {
      constructor(yb, bb) {
        let Wy;

        function Uy(yb) {
          let bb = Py.b.newName();
          return (Wy || (Wy = Object.create(null)))["." + bb] = yb, bb
        }
        this.specs = yb;
        const hy = "string" == typeof bb.all ? bb.all : bb.all ? Uy(bb.all) : void 0,
          fy = bb.scope;
        this.scope = fy instanceof ey ? yb => yb.prop(oy) == fy.data : fy ? yb => yb == fy : void 0, this.style = (0, cb.j)(yb.map((yb => ({
          tag: yb.tag,
          class: yb.class || Uy(Object.assign({}, yb, {
            tag: null
          }))
        }))), {
          all: hy
        }).style, this.module = Wy ? new Py.b(Wy) : null, this.themeType = bb.themeType
      }
      static define(yb, bb) {
        return new Tb(yb, bb || {})
      }
    }
    const Vb = fy.v.define(),
      Jb = fy.v.define({
        combine: yb => yb.length ? [yb[0]] : null
      });

    function gW(yb) {
      let bb = yb.facet(Vb);
      return bb.length ? bb : yb.facet(Jb)
    }

    function Gb(yb, bb) {
      let Wy, Uy = [Rb];
      return yb instanceof Tb && (yb.module && Uy.push(Zy.k.styleModule.of(yb.module)), Wy = yb.themeType), (null === bb || void 0 === bb ? void 0 : bb.fallback) ? Uy.push(Jb.of(yb)) : Wy ? Uy.push(Vb.computeN([Zy.k.darkTheme], (bb => bb.facet(Zy.k.darkTheme) == ("dark" == Wy) ? [yb] : []))) : Uy.push(Vb.of(yb)), Uy
    }
    class Ob {
      constructor(yb) {
        this.markCache = Object.create(null), this.tree = Sy(yb.state), this.PZ = this.buildDeco(yb, gW(yb.state)), this.decoratedTo = yb.viewport.to
      }
      update(yb) {
        let bb = Sy(yb.state),
          Wy = gW(yb.state),
          Uy = Wy != gW(yb.startState),
          {
            viewport: hy
          } = yb.view,
          fy = yb.changes.mapPos(this.decoratedTo, 1);
        bb.length < hy.to && !Uy && bb.type == this.tree.type && fy >= hy.to ? (this.PZ = this.PZ.map(yb.changes), this.decoratedTo = fy) : (bb != this.tree || yb.viewportChanged || Uy) && (this.tree = bb, this.PZ = this.buildDeco(yb.view, Wy), this.decoratedTo = hy.to)
      }
      buildDeco(yb, bb) {
        if (!bb || !this.tree.length) return Zy.e.none;
        let Wy = new fy.C;
        for (let {
            from: Uy,
            to: hy
          }
          of yb.CZy)(0, cb.c)(this.tree, bb, ((yb, bb, Uy) => {
          Wy.add(yb, bb, this.markCache[Uy] || (this.markCache[Uy] = Zy.e.mark({
            class: Uy
          })))
        }), Uy, hy);
        return Wy.finish()
      }
    }
    const Rb = fy.z.high(Zy.n.fromClass(Ob, {
        PZ: yb => yb.PZ
      })),
      vW = Tb.define([{
        tag: cb.m.meta,
        color: "#404740"
      }, {
        tag: cb.m.link,
        textDecoration: "underline"
      }, {
        tag: cb.m.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: cb.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: cb.m.strong,
        fontWeight: "bold"
      }, {
        tag: cb.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: cb.m.keyword,
        color: "#708"
      }, {
        tag: [cb.m.atom, cb.m.bool, cb.m.url, cb.m.contentSeparator, cb.m.labelName],
        color: "#219"
      }, {
        tag: [cb.m.literal, cb.m.inserted],
        color: "#164"
      }, {
        tag: [cb.m.string, cb.m.deleted],
        color: "#a11"
      }, {
        tag: [cb.m.regexp, cb.m.escape, cb.m.special(cb.m.string)],
        color: "#e40"
      }, {
        tag: cb.m.definition(cb.m.variableName),
        color: "#00f"
      }, {
        tag: cb.m.local(cb.m.variableName),
        color: "#30a"
      }, {
        tag: [cb.m.typeName, cb.m.namespace],
        color: "#085"
      }, {
        tag: cb.m.className,
        color: "#167"
      }, {
        tag: [cb.m.special(cb.m.variableName), cb.m.macroName],
        color: "#256"
      }, {
        tag: cb.m.definition(cb.m.propertyName),
        color: "#00c"
      }, {
        tag: cb.m.comment,
        color: "#940"
      }, {
        tag: cb.m.invalid,
        color: "#f00"
      }]),
      iW = Zy.k.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Mb = 1e4,
      Yb = "()[]{}",
      Xb = fy.v.define({
        combine: yb => (0, fy._)(yb, {
          afterCursor: !0,
          brackets: Yb,
          maxScanDistance: Mb,
          renderMatch: rW
        })
      }),
      nb = Zy.e.mark({
        class: "cm-matchingBracket"
      }),
      ub = Zy.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function rW(yb) {
      let bb = [],
        Wy = yb.matched ? nb : ub;
      return bb.push(Wy.range(yb.start.from, yb.start.to)), yb.end && bb.push(Wy.range(yb.end.from, yb.end.to)), bb
    }

    function Hb(yb) {
      let bb = [],
        Wy = yb.facet(Xb);
      for (let Uy of yb.selection.lZ) {
        if (!Uy.empty) continue;
        let hy = jW(yb, Uy.head, -1, Wy) || Uy.head > 0 && jW(yb, Uy.head - 1, 1, Wy) || Wy.afterCursor && (jW(yb, Uy.head, 1, Wy) || Uy.head < yb.doc.length && jW(yb, Uy.head + 1, -1, Wy));
        hy && (bb = bb.concat(Wy.renderMatch(hy, yb)))
      }
      return Zy.e.set(bb, !0)
    }
    const aW = [Zy.n.fromClass(class {
      constructor(yb) {
        this.paused = !1, this.PZ = Hb(yb.state)
      }
      update(yb) {
        (yb.docChanged || yb.selectionSet || this.paused) && (yb.view.composing ? (this.PZ = this.PZ.map(yb.changes), this.paused = !0) : (this.PZ = Hb(yb.state), this.paused = !1))
      }
    }, {
      PZ: yb => yb.PZ
    }), iW];

    function Fb() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Xb.of(yb), aW]
    }
    const pb = new hy.h;

    function Lb(yb, bb, Wy) {
      let Uy = yb.prop(bb < 0 ? hy.h.openedBy : hy.h.closedBy);
      if (Uy) return Uy;
      if (1 == yb.name.length) {
        let Uy = Wy.indexOf(yb.name);
        if (Uy > -1 && Uy % 2 == (bb < 0 ? 1 : 0)) return [Wy[Uy + bb]]
      }
      return null
    }

    function Qb(yb) {
      let bb = yb.type.prop(pb);
      return bb ? bb(yb.node) : yb
    }

    function jW(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        hy = Uy.maxScanDistance || Mb,
        fy = Uy.brackets || Yb,
        Zy = Sy(yb),
        cb = Zy.resolveInner(bb, Wy);
      for (let Py = cb; Py; Py = Py.parent) {
        let Uy = Lb(Py.type, Wy, fy);
        if (Uy && Py.from < Py.to) {
          let hy = Qb(Py);
          if (hy && (Wy > 0 ? bb >= hy.from && bb < hy.to : bb > hy.from && bb <= hy.to)) return Db(yb, bb, Wy, Py, hy, Uy, fy)
        }
      }
      return function(yb, bb, Wy, Uy, hy, fy, Zy) {
        if (Wy < 0 ? !bb : bb == yb.doc.length) return null;
        let cb = Wy < 0 ? yb.sliceDoc(bb - 1, bb) : yb.sliceDoc(bb, bb + 1),
          Py = Zy.indexOf(cb);
        if (Py < 0 || Py % 2 == 0 != Wy > 0) return null;
        let oy = {
            from: Wy < 0 ? bb - 1 : bb,
            to: Wy > 0 ? bb + 1 : bb
          },
          By = yb.doc.iterRange(bb, Wy > 0 ? yb.doc.length : 0),
          Ky = 0;
        for (let ey = 0; !By.next().done && ey <= fy;) {
          let yb = By.value;
          Wy < 0 && (ey += yb.length);
          let fy = bb + ey * Wy;
          for (let bb = Wy > 0 ? 0 : yb.length - 1, cb = Wy > 0 ? yb.length : -1; bb != cb; bb += Wy) {
            let cb = Zy.indexOf(yb[bb]);
            if (!(cb < 0 || Uy.resolveInner(fy + bb, 1).type != hy))
              if (cb % 2 == 0 == Wy > 0) Ky++;
              else {
                if (1 == Ky) return {
                  start: oy,
                  end: {
                    from: fy + bb,
                    to: fy + bb + 1
                  },
                  matched: cb >> 1 == Py >> 1
                };
                Ky--
              }
          }
          Wy > 0 && (ey += yb.length)
        }
        return By.done ? {
          start: oy,
          matched: !1
        } : null
      }(yb, bb, Wy, Zy, cb.type, hy, fy)
    }

    function Db(yb, bb, Wy, Uy, hy, fy, Zy) {
      let cb = Uy.parent,
        Py = {
          from: hy.from,
          to: hy.to
        },
        oy = 0,
        By = null === cb || void 0 === cb ? void 0 : cb.cursor();
      if (By && (Wy < 0 ? By.childBefore(Uy.from) : By.childAfter(Uy.to)))
        do {
          if (Wy < 0 ? By.to <= Uy.from : By.from >= Uy.to) {
            if (0 == oy && fy.indexOf(By.type.name) > -1 && By.from < By.to) {
              let yb = Qb(By);
              return {
                start: Py,
                end: yb ? {
                  from: yb.from,
                  to: yb.to
                } : void 0,
                matched: !0
              }
            }
            if (Lb(By.type, Wy, Zy)) oy++;
            else if (Lb(By.type, -Wy, Zy)) {
              if (0 == oy) {
                let yb = Qb(By);
                return {
                  start: Py,
                  end: yb && yb.from < yb.to ? {
                    from: yb.from,
                    to: yb.to
                  } : void 0,
                  matched: !1
                }
              }
              oy--
            }
          }
        } while (Wy < 0 ? By.prevSibling() : By.nextSibling());
      return {
        start: Py,
        matched: !1
      }
    }
    const tW = Object.create(null),
      wb = [hy.k.none],
      kW = [],
      Nb = Object.create(null),
      zW = Object.create(null);
    for (let [Ab, db] of [
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
      ]) zW[Ab] = xW(tW, db);

    function Ib(yb, bb) {
      kW.indexOf(yb) > -1 || (kW.push(yb), console.warn(bb))
    }

    function xW(yb, bb) {
      let Wy = [];
      for (let hy of bb.split(" ")) {
        let bb = [];
        for (let Wy of hy.split(".")) {
          let Uy = yb[Wy] || cb.m[Wy];
          Uy ? "function" == typeof Uy ? bb.length ? bb = bb.map(Uy) : Ib(Wy, `Modifier ${Wy} used at start of tag`) : bb.length ? Ib(Wy, `Tag ${Wy} used as modifier`) : bb = Array.isArray(Uy) ? Uy : [Uy] : Ib(Wy, `Unknown highlighting tag ${Wy}`)
        }
        for (let yb of bb) Wy.push(yb)
      }
      if (!Wy.length) return 0;
      let Uy = bb.replace(/ /g, "_"),
        fy = Uy + " " + Wy.map((yb => yb.id)),
        Zy = Nb[fy];
      if (Zy) return Zy.id;
      let Py = Nb[fy] = hy.k.define({
        id: wb.length,
        name: Uy,
        props: [(0, cb.f)({
          [Uy]: Wy
        })]
      });
      return wb.push(Py), Py.id
    }
    Zy.h.RTL, Zy.h.LTR
  },
  39811: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Cy,
      g: () => gb
    });
    var Uy = Wy(39759),
      hy = Wy(39754),
      fy = Wy(39777);
    class Zy {
      constructor(yb, bb, Wy) {
        this.from = yb, this.to = bb, this.diagnostic = Wy
      }
    }
    class cb {
      constructor(yb, bb, Wy) {
        this.diagnostics = yb, this.panel = bb, this.selected = Wy
      }
      static init(yb, bb, Wy) {
        let fy = Wy.facet(Vy).markerFilter;
        fy && (yb = fy(yb, Wy));
        let Zy = yb.slice().sort(((yb, bb) => yb.from - bb.from || yb.to - bb.to)),
          oy = new hy.C,
          By = [],
          Ky = 0,
          ey = Wy.doc.iter(),
          qb = 0,
          sy = Wy.doc.length;
        for (let hy = 0;;) {
          let yb, bb, Wy = hy == Zy.length ? null : Zy[hy];
          if (!Wy && !By.length) break;
          if (By.length) yb = Ky, bb = By.reduce(((yb, bb) => Math.min(yb, bb.to)), Wy && Wy.from > yb ? Wy.from : 1e8);
          else {
            if (yb = Wy.from, yb > sy) break;
            bb = Wy.to, By.push(Wy), hy++
          }
          for (; hy < Zy.length;) {
            let Wy = Zy[hy];
            if (Wy.from != yb || !(Wy.to > Wy.from || Wy.to == yb)) {
              bb = Math.min(Wy.from, bb);
              break
            }
            By.push(Wy), hy++, bb = Math.min(Wy.to, bb)
          }
          bb = Math.min(bb, sy);
          let fy = !1;
          if (By.some((Wy => Wy.from == yb && (Wy.to == bb || bb == sy))) && (fy = yb == bb, !fy && bb - yb < 10)) {
            let Wy = yb - (qb + ey.value.length);
            Wy > 0 && (ey.next(Wy), qb = yb);
            for (let Uy = yb;;) {
              if (Uy >= bb) {
                fy = !0;
                break
              }
              if (!ey.lineBreak && qb + ey.value.length > Uy) break;
              Uy = qb + ey.value.length, qb += ey.value.length, ey.next()
            }
          }
          let cb = uy(By);
          if (fy) oy.add(yb, yb, Uy.e.widget({
            widget: new Ry(cb),
            diagnostics: By.slice()
          }));
          else {
            let Wy = By.reduce(((yb, bb) => bb.markClass ? yb + " " + bb.markClass : yb), "");
            oy.add(yb, bb, Uy.e.mark({
              class: "cm-lintRange cm-lintRange-" + cb + Wy,
              diagnostics: By.slice(),
              inclusiveEnd: By.some((yb => yb.to > bb))
            }))
          }
          if (Ky = bb, Ky == sy) break;
          for (let Uy = 0; Uy < By.length; Uy++) By[Uy].to <= Ky && By.splice(Uy--, 1)
        }
        let Sy = oy.finish();
        return new cb(Sy, bb, Py(Sy))
      }
    }

    function Py(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Uy = null;
      return yb.between(Wy, 1e9, ((yb, Wy, hy) => {
        let {
          spec: fy
        } = hy;
        if (!(bb && fy.diagnostics.indexOf(bb) < 0))
          if (Uy) {
            if (fy.diagnostics.indexOf(Uy.diagnostic) < 0) return !1;
            Uy = new Zy(Uy.from, Wy, Uy.diagnostic)
          } else Uy = new Zy(yb, Wy, bb || fy.diagnostics[0])
      })), Uy
    }

    function oy(yb, bb) {
      let Wy = bb.pos,
        Uy = bb.end || Wy,
        hy = yb.state.facet(Vy).hideOn(yb, Wy, Uy);
      if (null != hy) return hy;
      let fy = yb.startState.doc.lineAt(bb.pos);
      return !(!yb.effects.some((yb => yb.is(Ky))) && !yb.changes.touchesRange(fy.from, Math.max(fy.to, Uy)))
    }

    function By(yb, bb) {
      return yb.field(sy, !1) ? bb : bb.concat(hy.I.appendConfig.of(rb))
    }
    const Ky = hy.I.define(),
      ey = hy.I.define(),
      qb = hy.I.define(),
      sy = hy.J.define({
        create: () => new cb(Uy.e.none, null, null),
        update(yb, bb) {
          if (bb.docChanged && yb.diagnostics.size) {
            let Wy = yb.diagnostics.map(bb.changes),
              Uy = null,
              hy = yb.panel;
            if (yb.selected) {
              let hy = bb.changes.mapPos(yb.selected.from, 1);
              Uy = Py(Wy, yb.selected.diagnostic, hy) || Py(Wy, null, hy)
            }!Wy.size && hy && bb.state.facet(Vy).autoPanel && (hy = null), yb = new cb(Wy, hy, Uy)
          }
          for (let Wy of bb.effects)
            if (Wy.is(Ky)) {
              let Uy = bb.state.facet(Vy).autoPanel ? Wy.value.length ? ib.open : null : yb.panel;
              yb = cb.init(Wy.value, Uy, bb.state)
            } else Wy.is(ey) ? yb = new cb(yb.diagnostics, Wy.value ? ib.open : null, yb.selected) : Wy.is(qb) && (yb = new cb(yb.diagnostics, yb.panel, Wy.value));
          return yb
        },
        provide: yb => [Uy.lb.from(yb, (yb => yb.panel)), Uy.k.PZ.from(yb, (yb => yb.diagnostics))]
      });
    const Sy = Uy.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function Ey(yb, bb, Wy) {
      let Uy, {
          diagnostics: hy
        } = yb.state.field(sy),
        fy = -1,
        Zy = -1;
      hy.between(bb - (Wy < 0 ? 1 : 0), bb + (Wy > 0 ? 1 : 0), ((yb, hy, cb) => {
        let {
          spec: Py
        } = cb;
        if (bb >= yb && bb <= hy && (yb == hy || (bb > yb || Wy > 0) && (bb < hy || Wy < 0))) return Uy = Py.diagnostics, fy = yb, Zy = hy, !1
      }));
      let cb = yb.state.facet(Vy).tooltipFilter;
      return Uy && cb && (Uy = cb(Uy, yb.state)), Uy ? {
        pos: fy,
        end: Zy,
        above: yb.state.doc.lineAt(fy).to < Zy,
        create: () => ({
          dom: ly(yb, Uy)
        })
      } : null
    }

    function ly(yb, bb) {
      return (0, fy.e)("ul", {
        class: "cm-tooltip-lint"
      }, bb.map((bb => Oy(yb, bb, !1))))
    }
    const mb = yb => {
        let bb = yb.state.field(sy, !1);
        return !(!bb || !bb.panel) && (yb.dispatch({
          effects: ey.of(!1)
        }), !0)
      },
      Cy = [{
        key: "Mod-Shift-m",
        run: yb => {
          let bb = yb.state.field(sy, !1);
          bb && bb.panel || yb.dispatch({
            effects: By(yb.state, [ey.of(!0)])
          });
          let Wy = (0, Uy.z)(yb, ib.open);
          return Wy && Wy.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: yb => {
          let bb = yb.state.field(sy, !1);
          if (!bb) return !1;
          let Wy = yb.state.selection.main,
            Uy = Py(bb.diagnostics, null, Wy.to + 1);
          return !(!Uy && (Uy = Py(bb.diagnostics, null, 0), !Uy || Uy.from == Wy.from && Uy.to == Wy.to)) && (yb.dispatch({
            selection: {
              anchor: Uy.from,
              head: Uy.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      Ty = Uy.n.fromClass(class {
        constructor(yb) {
          this.view = yb, this.timeout = -1, this.set = !0;
          let {
            delay: bb
          } = yb.state.facet(Vy);
          this.lintTime = Date.now() + bb, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, bb)
        }
        run() {
          clearTimeout(this.timeout);
          let yb = Date.now();
          if (yb < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - yb);
          else {
            this.set = !1;
            let {
              state: yb
            } = this.view, {
              sources: bb
            } = yb.facet(Vy);
            bb.length && function(yb, bb, Wy) {
              let Uy = [],
                hy = -1;
              for (let fy of yb) fy.then((Wy => {
                Uy.push(Wy), clearTimeout(hy), Uy.length == yb.length ? bb(Uy) : hy = setTimeout((() => bb(Uy)), 200)
              }), Wy)
            }(bb.map((yb => Promise.resolve(yb(this.view)))), (bb => {
              this.view.state.doc == yb.doc && this.view.dispatch(function(yb, bb) {
                return {
                  effects: By(yb, [Ky.of(bb)])
                }
              }(this.view.state, bb.reduce(((yb, bb) => yb.concat(bb)))))
            }), (yb => {
              (0, Uy.Y)(this.view.state, yb)
            }))
          }
        }
        update(yb) {
          let bb = yb.state.facet(Vy);
          (yb.docChanged || bb != yb.startState.facet(Vy) || bb.needsRefresh && bb.needsRefresh(yb)) && (this.lintTime = Date.now() + bb.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, bb.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const Vy = hy.v.define({
      combine: yb => ({
        sources: yb.map((yb => yb.source)).filter((yb => null != yb)),
        ...(0, hy._)(yb.map((yb => yb.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: Jy,
          tooltipFilter: Jy,
          needsRefresh: (yb, bb) => yb ? bb ? Wy => yb(Wy) || bb(Wy) : yb : bb,
          hideOn: (yb, bb) => yb ? bb ? (Wy, Uy, hy) => yb(Wy, Uy, hy) || bb(Wy, Uy, hy) : yb : bb,
          autoPanel: (yb, bb) => yb || bb
        })
      })
    });

    function Jy(yb, bb) {
      return yb ? bb ? (Wy, Uy) => bb(yb(Wy, Uy), Uy) : yb : bb
    }

    function gb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [Vy.of({
        source: yb,
        config: bb
      }), Ty, rb]
    }

    function Gy(yb) {
      let bb = [];
      if (yb) yb: for (let {
          name: Wy
        }
        of yb) {
        for (let yb = 0; yb < Wy.length; yb++) {
          let Uy = Wy[yb];
          if (/[a-zA-Z]/.test(Uy) && !bb.some((yb => yb.toLowerCase() == Uy.toLowerCase()))) {
            bb.push(Uy);
            continue yb
          }
        }
        bb.push("")
      }
      return bb
    }

    function Oy(yb, bb, Wy) {
      var Uy;
      let hy = Wy ? Gy(bb.actions) : [];
      return (0, fy.e)("li", {
        class: "cm-diagnostic cm-diagnostic-" + bb.severity
      }, (0, fy.e)("span", {
        class: "cm-diagnosticText"
      }, bb.renderMessage ? bb.renderMessage(yb) : bb.message), null === (Uy = bb.actions) || void 0 === Uy ? void 0 : Uy.map(((Wy, Uy) => {
        let Zy = !1,
          cb = Uy => {
            if (Uy.preventDefault(), Zy) return;
            Zy = !0;
            let hy = Py(yb.state.field(sy).diagnostics, bb);
            hy && Wy.apply(yb, hy.from, hy.to)
          },
          {
            name: oy
          } = Wy,
          By = hy[Uy] ? oy.indexOf(hy[Uy]) : -1,
          Ky = By < 0 ? oy : [oy.slice(0, By), (0, fy.e)("u", oy.slice(By, By + 1)), oy.slice(By + 1)],
          ey = Wy.markClass ? " " + Wy.markClass : "";
        return (0, fy.e)("button", {
          type: "button",
          class: "cm-diagnosticAction" + ey,
          onclick: cb,
          onmousedown: cb,
          "aria-label": ` Action: ${oy}${By<0?"":` (access key "${hy[Uy]})"`}.`
        }, Ky)
      })), bb.source && (0, fy.e)("div", {
        class: "cm-diagnosticSource"
      }, bb.source))
    }
    class Ry extends Uy.q {
      constructor(yb) {
        super(), this.sev = yb
      }
      eq(yb) {
        return yb.sev == this.sev
      }
      toDOM() {
        return (0, fy.e)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class vb {
      constructor(yb, bb) {
        this.diagnostic = bb, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = Oy(yb, bb, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class ib {
      constructor(yb) {
        this.view = yb, this.items = [];
        this.list = (0, fy.e)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: bb => {
            if (!(bb.ctrlKey || bb.altKey || bb.metaKey)) {
              if (27 == bb.keyCode) mb(this.view), this.view.focus();
              else if (38 == bb.keyCode || 33 == bb.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == bb.keyCode || 34 == bb.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == bb.keyCode) this.moveSelection(0);
              else if (35 == bb.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == bb.keyCode) this.view.focus();
              else {
                if (!(bb.keyCode >= 65 && bb.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: Wy
                  } = this.items[this.selectedIndex], Uy = Gy(Wy.actions);
                  for (let hy = 0; hy < Uy.length; hy++)
                    if (Uy[hy].toUpperCase().charCodeAt(0) == bb.keyCode) {
                      let bb = Py(this.view.state.field(sy).diagnostics, Wy);
                      bb && Wy.actions[hy].apply(yb, bb.from, bb.to)
                    }
                }
              }
              bb.preventDefault()
            }
          },
          onclick: yb => {
            for (let bb = 0; bb < this.items.length; bb++) this.items[bb].dom.contains(yb.target) && this.moveSelection(bb)
          }
        }), this.dom = (0, fy.e)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, fy.e)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => mb(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let yb = this.view.state.field(sy).selected;
        if (!yb) return -1;
        for (let bb = 0; bb < this.items.length; bb++)
          if (this.items[bb].diagnostic == yb.diagnostic) return bb;
        return -1
      }
      update() {
        let {
          diagnostics: yb,
          selected: bb
        } = this.view.state.field(sy), Wy = 0, Uy = !1, hy = null, fy = new Set;
        for (yb.between(0, this.view.state.doc.length, ((yb, Zy, cb) => {
            let {
              spec: Py
            } = cb;
            for (let oy of Py.diagnostics) {
              if (fy.has(oy)) continue;
              fy.add(oy);
              let yb, Zy = -1;
              for (let bb = Wy; bb < this.items.length; bb++)
                if (this.items[bb].diagnostic == oy) {
                  Zy = bb;
                  break
                } Zy < 0 ? (yb = new vb(this.view, oy), this.items.splice(Wy, 0, yb), Uy = !0) : (yb = this.items[Zy], Zy > Wy && (this.items.splice(Wy, Zy - Wy), Uy = !0)), bb && yb.diagnostic == bb.diagnostic ? yb.dom.hasAttribute("aria-selected") || (yb.dom.setAttribute("aria-selected", "true"), hy = yb) : yb.dom.hasAttribute("aria-selected") && yb.dom.removeAttribute("aria-selected"), Wy++
            }
          })); Wy < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) Uy = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new vb(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), Uy = !0), hy ? (this.list.setAttribute("aria-activedescendant", hy.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: hy.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: yb => {
            let {
              sel: bb,
              panel: Wy
            } = yb, Uy = Wy.height / this.list.offsetHeight;
            bb.top < Wy.top ? this.list.scrollTop -= (Wy.top - bb.top) / Uy : bb.bottom > Wy.bottom && (this.list.scrollTop += (bb.bottom - Wy.bottom) / Uy)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), Uy && this.sync()
      }
      sync() {
        let yb = this.list.firstChild;

        function bb() {
          let bb = yb;
          yb = bb.nextSibling, bb.remove()
        }
        for (let Wy of this.items)
          if (Wy.dom.parentNode == this.list) {
            for (; yb != Wy.dom;) bb();
            yb = Wy.dom.nextSibling
          } else this.list.insertBefore(Wy.dom, yb);
        for (; yb;) bb()
      }
      moveSelection(yb) {
        if (this.selectedIndex < 0) return;
        let bb = Py(this.view.state.field(sy).diagnostics, this.items[yb].diagnostic);
        bb && this.view.dispatch({
          selection: {
            anchor: bb.from,
            head: bb.to
          },
          scrollIntoView: !0,
          effects: qb.of(bb)
        })
      }
      static open(yb) {
        return new ib(yb)
      }
    }

    function My(yb) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(yb)}</svg>')`
    }

    function Yy(yb) {
      return My(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${yb}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const Xy = Uy.k.baseTheme({
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
        backgroundImage: Yy("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: Yy("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: Yy("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: Yy("#66d")
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

    function ny(yb) {
      return "error" == yb ? 4 : "warning" == yb ? 3 : "info" == yb ? 2 : 1
    }

    function uy(yb) {
      let bb = "hint",
        Wy = 1;
      for (let Uy of yb) {
        let yb = ny(Uy.severity);
        yb > Wy && (Wy = yb, bb = Uy.severity)
      }
      return bb
    }
    Uy.m;
    const rb = [sy, Uy.k.PZ.compute([sy], (yb => {
      let {
        selected: bb,
        panel: Wy
      } = yb.field(sy);
      return bb && Wy && bb.from != bb.to ? Uy.e.set([Sy.range(bb.from, bb.to)]) : Uy.e.none
    })), (0, Uy.S)(Ey, {
      hideOn: oy
    }), Xy]
  },
  39803: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Ay,
      d: () => ly,
      g: () => dy
    });
    var Uy = Wy(39759),
      hy = Wy(39754),
      fy = Wy(39777);
    const Zy = "function" == typeof String.prototype.normalize ? yb => yb.normalize("NFKD") : yb => yb;
    class cb {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yb.length,
          hy = arguments.length > 4 ? arguments[4] : void 0,
          fy = arguments.length > 5 ? arguments[5] : void 0;
        this.test = fy, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = yb.iterRange(Wy, Uy), this.bufferStart = Wy, this.normalize = hy ? yb => hy(Zy(yb)) : Zy, this.query = this.normalize(bb)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, hy.S)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let yb = this.peek();
          if (yb < 0) return this.done = !0, this;
          let bb = (0, hy.gb)(yb),
            Wy = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, hy.W)(yb);
          let Uy = this.normalize(bb);
          if (Uy.length)
            for (let hy = 0, fy = Wy;; hy++) {
              let yb = Uy.charCodeAt(hy),
                Zy = this.match(yb, fy, this.bufferPos + this.bufferStart);
              if (hy == Uy.length - 1) {
                if (Zy) return this.value = Zy, this;
                break
              }
              fy == Wy && hy < bb.length && bb.charCodeAt(hy) == yb && fy++
            }
        }
      }
      match(yb, bb, Wy) {
        let Uy = null;
        for (let hy = 0; hy < this.matches.length; hy += 2) {
          let bb = this.matches[hy],
            fy = !1;
          this.query.charCodeAt(bb) == yb && (bb == this.query.length - 1 ? Uy = {
            from: this.matches[hy + 1],
            to: Wy
          } : (this.matches[hy]++, fy = !0)), fy || (this.matches.splice(hy, 2), hy -= 2)
        }
        return this.query.charCodeAt(0) == yb && (1 == this.query.length ? Uy = {
          from: bb,
          to: Wy
        } : this.matches.push(1, bb)), Uy && this.test && !this.test(Uy.from, Uy.to, this.buffer, this.bufferStart) && (Uy = null), Uy
      }
    }
    "undefined" != typeof Symbol && (cb.prototype[Symbol.iterator] = function() {
      return this
    });
    const Py = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      oy = "gm" + (null == /x/.unicode ? "" : "u");
    class By {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : yb.length;
        if (this.text = yb, this.to = hy, this.curLine = "", this.done = !1, this.value = Py, /\\[sWDnr]|\n|\r|\[\^/.test(bb)) return new qb(yb, bb, Wy, Uy, hy);
        this.re = new RegExp(bb, oy + ((null === Wy || void 0 === Wy ? void 0 : Wy.ignoreCase) ? "i" : "")), this.test = null === Wy || void 0 === Wy ? void 0 : Wy.test, this.iter = yb.iter();
        let fy = yb.lineAt(Uy);
        this.curLineStart = fy.from, this.matchPos = sy(yb, Uy), this.getLine(this.curLineStart)
      }
      getLine(yb) {
        this.iter.next(yb), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let yb = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = yb;
          let bb = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (bb) {
            let Wy = this.curLineStart + bb.index,
              Uy = Wy + bb[0].length;
            if (this.matchPos = sy(this.text, Uy + (Wy == Uy ? 1 : 0)), Wy == this.curLineStart + this.curLine.length && this.nextLine(), (Wy < Uy || Wy > this.value.to) && (!this.test || this.test(Wy, Uy, bb))) return this.value = {
              from: Wy,
              to: Uy,
              match: bb
            }, this;
            yb = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), yb = 0
          }
        }
      }
    }
    const Ky = new WeakMap;
    class ey {
      constructor(yb, bb) {
        this.from = yb, this.text = bb
      }
      get to() {
        return this.from + this.text.length
      }
      static get(yb, bb, Wy) {
        let Uy = Ky.get(yb);
        if (!Uy || Uy.from >= Wy || Uy.to <= bb) {
          let Uy = new ey(bb, yb.sliceString(bb, Wy));
          return Ky.set(yb, Uy), Uy
        }
        if (Uy.from == bb && Uy.to == Wy) return Uy;
        let {
          text: hy,
          from: fy
        } = Uy;
        return fy > bb && (hy = yb.sliceString(bb, fy) + hy, fy = bb), Uy.to < Wy && (hy += yb.sliceString(Uy.to, Wy)), Ky.set(yb, new ey(fy, hy)), new ey(bb, hy.slice(bb - fy, Wy - fy))
      }
    }
    class qb {
      constructor(yb, bb, Wy, Uy, hy) {
        this.text = yb, this.to = hy, this.done = !1, this.value = Py, this.matchPos = sy(yb, Uy), this.re = new RegExp(bb, oy + ((null === Wy || void 0 === Wy ? void 0 : Wy.ignoreCase) ? "i" : "")), this.test = null === Wy || void 0 === Wy ? void 0 : Wy.test, this.flat = ey.get(yb, Uy, this.chunkEnd(Uy + 5e3))
      }
      chunkEnd(yb) {
        return yb >= this.to ? this.to : this.text.lineAt(yb).to
      }
      next() {
        for (;;) {
          let yb = this.re.lastIndex = this.matchPos - this.flat.from,
            bb = this.re.exec(this.flat.text);
          if (bb && !bb[0] && bb.index == yb && (this.re.lastIndex = yb + 1, bb = this.re.exec(this.flat.text)), bb) {
            let yb = this.flat.from + bb.index,
              Wy = yb + bb[0].length;
            if ((this.flat.to >= this.to || bb.index + bb[0].length <= this.flat.text.length - 10) && (!this.test || this.test(yb, Wy, bb))) return this.value = {
              from: yb,
              to: Wy,
              match: bb
            }, this.matchPos = sy(this.text, Wy + (yb == Wy ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = ey.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function sy(yb, bb) {
      if (bb >= yb.length) return bb;
      let Wy, Uy = yb.lineAt(bb);
      for (; bb < Uy.to && (Wy = Uy.text.charCodeAt(bb - Uy.from)) >= 56320 && Wy < 57344;) bb++;
      return bb
    }
    "undefined" != typeof Symbol && (By.prototype[Symbol.iterator] = qb.prototype[Symbol.iterator] = function() {
      return this
    });
    const Sy = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      Ey = hy.v.define({
        combine: yb => (0, hy._)(yb, Sy, {
          highlightWordAroundCursor: (yb, bb) => yb || bb,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function ly(yb) {
      let bb = [Jy, Vy];
      return yb && bb.push(Ey.of(yb)), bb
    }
    const mb = Uy.e.mark({
        class: "cm-selectionMatch"
      }),
      Cy = Uy.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function Ty(yb, bb, Wy, Uy) {
      return (0 == Wy || yb(bb.sliceDoc(Wy - 1, Wy)) != hy.j.Word) && (Uy == bb.doc.length || yb(bb.sliceDoc(Uy, Uy + 1)) != hy.j.Word)
    }
    const Vy = Uy.n.fromClass(class {
        constructor(yb) {
          this.PZ = this.getDeco(yb)
        }
        update(yb) {
          (yb.selectionSet || yb.docChanged || yb.viewportChanged) && (this.PZ = this.getDeco(yb.view))
        }
        getDeco(yb) {
          let bb = yb.state.facet(Ey),
            {
              state: Wy
            } = yb,
            fy = Wy.selection;
          if (fy.lZ.length > 1) return Uy.e.none;
          let Zy, Py = fy.main,
            oy = null;
          if (Py.empty) {
            if (!bb.highlightWordAroundCursor) return Uy.e.none;
            let yb = Wy.wordAt(Py.head);
            if (!yb) return Uy.e.none;
            oy = Wy.charCategorizer(Py.head), Zy = Wy.sliceDoc(yb.from, yb.to)
          } else {
            let yb = Py.to - Py.from;
            if (yb < bb.minSelectionLength || yb > 200) return Uy.e.none;
            if (bb.wholeWords) {
              if (Zy = Wy.sliceDoc(Py.from, Py.to), oy = Wy.charCategorizer(Py.head), !Ty(oy, Wy, Py.from, Py.to) || ! function(yb, bb, Wy, Uy) {
                  return yb(bb.sliceDoc(Wy, Wy + 1)) == hy.j.Word && yb(bb.sliceDoc(Uy - 1, Uy)) == hy.j.Word
                }(oy, Wy, Py.from, Py.to)) return Uy.e.none
            } else if (Zy = Wy.sliceDoc(Py.from, Py.to), !Zy) return Uy.e.none
          }
          let By = [];
          for (let hy of yb.CZy) {
            let yb = new cb(Wy.doc, Zy, hy.from, hy.to);
            for (; !yb.next().done;) {
              let {
                from: hy,
                to: fy
              } = yb.value;
              if ((!oy || Ty(oy, Wy, hy, fy)) && (Py.empty && hy <= Py.from && fy >= Py.to ? By.push(Cy.range(hy, fy)) : (hy >= Py.to || fy <= Py.from) && By.push(mb.range(hy, fy)), By.length > bb.maxMatches)) return Uy.e.none
            }
          }
          return Uy.e.set(By)
        }
      }, {
        PZ: yb => yb.PZ
      }),
      Jy = Uy.k.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const gb = hy.v.define({
      combine: yb => (0, hy._)(yb, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: yb => new yW(yb),
        scrollToMatch: yb => Uy.k.scrollIntoView(yb)
      })
    });
    class Gy {
      constructor(yb) {
        this.search = yb.search, this.caseSensitive = !!yb.caseSensitive, this.literal = !!yb.literal, this.regexp = !!yb.regexp, this.replace = yb.replace || "", this.valid = !!this.search && (!this.regexp || function(yb) {
          try {
            return new RegExp(yb, oy), !0
          } catch (bb) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!yb.wholeWord, this.test = yb.test
      }
      unquote(yb) {
        return this.literal ? yb : yb.replace(/\\([nrt\\])/g, ((yb, bb) => "n" == bb ? "\n" : "r" == bb ? "\r" : "t" == bb ? "\t" : "\\"))
      }
      eq(yb) {
        return this.search == yb.search && this.replace == yb.replace && this.caseSensitive == yb.caseSensitive && this.regexp == yb.regexp && this.wholeWord == yb.wholeWord && this.test == yb.test
      }
      create() {
        return this.regexp ? new Xy(this) : new vb(this)
      }
      getCursor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = yb.doc ? yb : hy.r.create({
            doc: yb
          });
        return null == Wy && (Wy = Uy.doc.length), this.regexp ? ib(this, Uy, bb, Wy) : Ry(this, Uy, bb, Wy)
      }
    }
    class Oy {
      constructor(yb) {
        this.spec = yb
      }
    }

    function Ry(yb, bb, Wy, Uy) {
      let fy;
      var Zy, Py;
      return yb.wholeWord && (Zy = bb.doc, Py = bb.charCategorizer(bb.selection.main.head), fy = (yb, bb, Wy, Uy) => ((Uy > yb || Uy + Wy.length < bb) && (Uy = Math.max(0, yb - 2), Wy = Zy.sliceString(Uy, Math.min(Zy.length, bb + 2))), (Py(My(Wy, yb - Uy)) != hy.j.Word || Py(Yy(Wy, yb - Uy)) != hy.j.Word) && (Py(Yy(Wy, bb - Uy)) != hy.j.Word || Py(My(Wy, bb - Uy)) != hy.j.Word))), yb.test && (fy = function(yb, bb, Wy) {
        return (Uy, hy, fy, Zy) => {
          if (Wy && !Wy(Uy, hy, fy, Zy)) return !1;
          let cb = Uy >= Zy && hy <= Zy + fy.length ? fy.slice(Uy - Zy, hy - Zy) : bb.doc.sliceString(Uy, hy);
          return yb(cb, bb, Uy, hy)
        }
      }(yb.test, bb, fy)), new cb(bb.doc, yb.unquoted, Wy, Uy, yb.caseSensitive ? void 0 : yb => yb.toLowerCase(), fy)
    }
    class vb extends Oy {
      constructor(yb) {
        super(yb)
      }
      nextMatch(yb, bb, Wy) {
        let Uy = Ry(this.spec, yb, Wy, yb.doc.length).nextOverlapping();
        if (Uy.done) {
          let Wy = Math.min(yb.doc.length, bb + this.spec.unquoted.length);
          Uy = Ry(this.spec, yb, 0, Wy).nextOverlapping()
        }
        return Uy.done || Uy.value.from == bb && Uy.value.to == Wy ? null : Uy.value
      }
      prevMatchInRange(yb, bb, Wy) {
        for (let Uy = Wy;;) {
          let Wy = Math.max(bb, Uy - 1e4 - this.spec.unquoted.length),
            hy = Ry(this.spec, yb, Wy, Uy),
            fy = null;
          for (; !hy.nextOverlapping().done;) fy = hy.value;
          if (fy) return fy;
          if (Wy == bb) return null;
          Uy -= 1e4
        }
      }
      prevMatch(yb, bb, Wy) {
        let Uy = this.prevMatchInRange(yb, 0, bb);
        return Uy || (Uy = this.prevMatchInRange(yb, Math.max(0, Wy - this.spec.unquoted.length), yb.doc.length)), !Uy || Uy.from == bb && Uy.to == Wy ? null : Uy
      }
      getReplacement(yb) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(yb, bb) {
        let Wy = Ry(this.spec, yb, 0, yb.doc.length),
          Uy = [];
        for (; !Wy.next().done;) {
          if (Uy.length >= bb) return null;
          Uy.push(Wy.value)
        }
        return Uy
      }
      highlight(yb, bb, Wy, Uy) {
        let hy = Ry(this.spec, yb, Math.max(0, bb - this.spec.unquoted.length), Math.min(Wy + this.spec.unquoted.length, yb.doc.length));
        for (; !hy.next().done;) Uy(hy.value.from, hy.value.to)
      }
    }

    function ib(yb, bb, Wy, Uy) {
      let fy;
      var Zy;
      return yb.wholeWord && (Zy = bb.charCategorizer(bb.selection.main.head), fy = (yb, bb, Wy) => !Wy[0].length || (Zy(My(Wy.input, Wy.index)) != hy.j.Word || Zy(Yy(Wy.input, Wy.index)) != hy.j.Word) && (Zy(Yy(Wy.input, Wy.index + Wy[0].length)) != hy.j.Word || Zy(My(Wy.input, Wy.index + Wy[0].length)) != hy.j.Word)), yb.test && (fy = function(yb, bb, Wy) {
        return (Uy, hy, fy) => (!Wy || Wy(Uy, hy, fy)) && yb(fy[0], bb, Uy, hy)
      }(yb.test, bb, fy)), new By(bb.doc, yb.search, {
        ignoreCase: !yb.caseSensitive,
        test: fy
      }, Wy, Uy)
    }

    function My(yb, bb) {
      return yb.slice((0, hy.db)(yb, bb, !1), bb)
    }

    function Yy(yb, bb) {
      return yb.slice(bb, (0, hy.db)(yb, bb))
    }
    class Xy extends Oy {
      nextMatch(yb, bb, Wy) {
        let Uy = ib(this.spec, yb, Wy, yb.doc.length).next();
        return Uy.done && (Uy = ib(this.spec, yb, 0, bb).next()), Uy.done ? null : Uy.value
      }
      prevMatchInRange(yb, bb, Wy) {
        for (let Uy = 1;; Uy++) {
          let hy = Math.max(bb, Wy - 1e4 * Uy),
            fy = ib(this.spec, yb, hy, Wy),
            Zy = null;
          for (; !fy.next().done;) Zy = fy.value;
          if (Zy && (hy == bb || Zy.from > hy + 10)) return Zy;
          if (hy == bb) return null
        }
      }
      prevMatch(yb, bb, Wy) {
        return this.prevMatchInRange(yb, 0, bb) || this.prevMatchInRange(yb, Wy, yb.doc.length)
      }
      getReplacement(yb) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((bb, Wy) => {
          if ("&" == Wy) return yb.match[0];
          if ("$" == Wy) return "$";
          for (let Uy = Wy.length; Uy > 0; Uy--) {
            let bb = +Wy.slice(0, Uy);
            if (bb > 0 && bb < yb.match.length) return yb.match[bb] + Wy.slice(Uy)
          }
          return bb
        }))
      }
      matchAll(yb, bb) {
        let Wy = ib(this.spec, yb, 0, yb.doc.length),
          Uy = [];
        for (; !Wy.next().done;) {
          if (Uy.length >= bb) return null;
          Uy.push(Wy.value)
        }
        return Uy
      }
      highlight(yb, bb, Wy, Uy) {
        let hy = ib(this.spec, yb, Math.max(0, bb - 250), Math.min(Wy + 250, yb.doc.length));
        for (; !hy.next().done;) Uy(hy.value.from, hy.value.to)
      }
    }
    const ny = hy.I.define(),
      uy = hy.I.define(),
      rb = hy.J.define({
        create: yb => new Hy(Ny(yb).create(), null),
        update(yb, bb) {
          for (let Wy of bb.effects) Wy.is(ny) ? yb = new Hy(Wy.value.create(), yb.panel) : Wy.is(uy) && (yb = new Hy(yb.query, Wy.value ? kb : null));
          return yb
        },
        provide: yb => Uy.lb.from(yb, (yb => yb.panel))
      });
    class Hy {
      constructor(yb, bb) {
        this.query = yb, this.panel = bb
      }
    }
    const ab = Uy.e.mark({
        class: "cm-searchMatch"
      }),
      Fy = Uy.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      py = Uy.n.fromClass(class {
        constructor(yb) {
          this.view = yb, this.PZ = this.highlight(yb.state.field(rb))
        }
        update(yb) {
          let bb = yb.state.field(rb);
          (bb != yb.startState.field(rb) || yb.docChanged || yb.selectionSet || yb.viewportChanged) && (this.PZ = this.highlight(bb))
        }
        highlight(yb) {
          let {
            query: bb,
            panel: Wy
          } = yb;
          if (!Wy || !bb.spec.valid) return Uy.e.none;
          let {
            view: fy
          } = this, Zy = new hy.C;
          for (let Uy = 0, hy = fy.CZy, cb = hy.length; Uy < cb; Uy++) {
            let {
              from: yb,
              to: Wy
            } = hy[Uy];
            for (; Uy < cb - 1 && Wy > hy[Uy + 1].from - 500;) Wy = hy[++Uy].to;
            bb.highlight(fy.state, yb, Wy, ((yb, bb) => {
              let Wy = fy.state.selection.lZ.some((Wy => Wy.from == yb && Wy.to == bb));
              Zy.add(yb, bb, Wy ? Fy : ab)
            }))
          }
          return Zy.finish()
        }
      }, {
        PZ: yb => yb.PZ
      });

    function Ly(yb) {
      return bb => {
        let Wy = bb.state.field(rb, !1);
        return Wy && Wy.query.spec.valid ? yb(bb, Wy) : xb(bb)
      }
    }
    const Qy = Ly(((yb, bb) => {
        let {
          query: Wy
        } = bb, {
          to: Uy
        } = yb.state.selection.main, fy = Wy.nextMatch(yb.state, Uy, Uy);
        if (!fy) return !1;
        let Zy = hy.n.single(fy.from, fy.to),
          cb = yb.state.facet(gb);
        return yb.dispatch({
          selection: Zy,
          effects: [hb(yb, fy), cb.scrollToMatch(Zy.main, yb)],
          userEvent: "select.search"
        }), Iy(yb), !0
      })),
      jb = Ly(((yb, bb) => {
        let {
          query: Wy
        } = bb, {
          state: Uy
        } = yb, {
          from: fy
        } = Uy.selection.main, Zy = Wy.prevMatch(Uy, fy, fy);
        if (!Zy) return !1;
        let cb = hy.n.single(Zy.from, Zy.to),
          Py = yb.state.facet(gb);
        return yb.dispatch({
          selection: cb,
          effects: [hb(yb, Zy), Py.scrollToMatch(cb.main, yb)],
          userEvent: "select.search"
        }), Iy(yb), !0
      })),
      Dy = Ly(((yb, bb) => {
        let {
          query: Wy
        } = bb, Uy = Wy.matchAll(yb.state, 1e3);
        return !(!Uy || !Uy.length) && (yb.dispatch({
          selection: hy.n.create(Uy.map((yb => hy.n.range(yb.from, yb.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      tb = Ly(((yb, bb) => {
        let {
          query: Wy
        } = bb, {
          state: fy
        } = yb, {
          from: Zy,
          to: cb
        } = fy.selection.main;
        if (fy.readOnly) return !1;
        let Py = Wy.nextMatch(fy, Zy, Zy);
        if (!Py) return !1;
        let oy, By, Ky = Py,
          ey = [],
          qb = [];
        Ky.from == Zy && Ky.to == cb && (By = fy.toText(Wy.getReplacement(Ky)), ey.push({
          from: Ky.from,
          to: Ky.to,
          insert: By
        }), Ky = Wy.nextMatch(fy, Ky.from, Ky.to), qb.push(Uy.k.announce.of(fy.phrase("replaced match on line $", fy.doc.lineAt(Zy).number) + ".")));
        let sy = yb.state.changes(ey);
        return Ky && (oy = hy.n.single(Ky.from, Ky.to).map(sy), qb.push(hb(yb, Ky)), qb.push(fy.facet(gb).scrollToMatch(oy.main, yb))), yb.dispatch({
          changes: sy,
          selection: oy,
          effects: qb,
          userEvent: "input.replace"
        }), !0
      })),
      wy = Ly(((yb, bb) => {
        let {
          query: Wy
        } = bb;
        if (yb.state.readOnly) return !1;
        let hy = Wy.matchAll(yb.state, 1e9).map((yb => {
          let {
            from: bb,
            to: Uy
          } = yb;
          return {
            from: bb,
            to: Uy,
            insert: Wy.getReplacement(yb)
          }
        }));
        if (!hy.length) return !1;
        let fy = yb.state.phrase("replaced $ matches", hy.length) + ".";
        return yb.dispatch({
          changes: hy,
          effects: Uy.k.announce.of(fy),
          userEvent: "input.replace.all"
        }), !0
      }));

    function kb(yb) {
      return yb.state.facet(gb).createPanel(yb)
    }

    function Ny(yb, bb) {
      var Wy, Uy, hy, fy, Zy;
      let cb = yb.selection.main,
        Py = cb.empty || cb.to > cb.from + 100 ? "" : yb.sliceDoc(cb.from, cb.to);
      if (bb && !Py) return bb;
      let oy = yb.facet(gb);
      return new Gy({
        search: (null !== (Wy = null === bb || void 0 === bb ? void 0 : bb.literal) && void 0 !== Wy ? Wy : oy.literal) ? Py : Py.replace(/\n/g, "\\n"),
        caseSensitive: null !== (Uy = null === bb || void 0 === bb ? void 0 : bb.caseSensitive) && void 0 !== Uy ? Uy : oy.caseSensitive,
        literal: null !== (hy = null === bb || void 0 === bb ? void 0 : bb.literal) && void 0 !== hy ? hy : oy.literal,
        regexp: null !== (fy = null === bb || void 0 === bb ? void 0 : bb.regexp) && void 0 !== fy ? fy : oy.regexp,
        wholeWord: null !== (Zy = null === bb || void 0 === bb ? void 0 : bb.wholeWord) && void 0 !== Zy ? Zy : oy.wholeWord
      })
    }

    function zb(yb) {
      let bb = (0, Uy.z)(yb, kb);
      return bb && bb.dom.querySelector("[main-field]")
    }

    function Iy(yb) {
      let bb = zb(yb);
      bb && bb == yb.root.activeElement && bb.select()
    }
    const xb = yb => {
        let bb = yb.state.field(rb, !1);
        if (bb && bb.panel) {
          let Wy = zb(yb);
          if (Wy && Wy != yb.root.activeElement) {
            let Uy = Ny(yb.state, bb.query.spec);
            Uy.valid && yb.dispatch({
              effects: ny.of(Uy)
            }), Wy.focus(), Wy.select()
          }
        } else yb.dispatch({
          effects: [uy.of(!0), bb ? ny.of(Ny(yb.state, bb.query.spec)) : hy.I.appendConfig.of(Zb)]
        });
        return !0
      },
      Ay = yb => {
        let bb = yb.state.field(rb, !1);
        if (!bb || !bb.panel) return !1;
        let Wy = (0, Uy.z)(yb, kb);
        return Wy && Wy.dom.contains(yb.root.activeElement) && yb.focus(), yb.dispatch({
          effects: uy.of(!1)
        }), !0
      },
      dy = [{
        key: "Mod-f",
        run: xb,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: Qy,
        shift: jb,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: Qy,
        shift: jb,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: Ay,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb, Uy = bb.selection;
          if (Uy.lZ.length > 1 || Uy.main.empty) return !1;
          let {
            from: fy,
            to: Zy
          } = Uy.main, Py = [], oy = 0;
          for (let By = new cb(bb.doc, bb.sliceDoc(fy, Zy)); !By.next().done;) {
            if (Py.length > 1e3) return !1;
            By.value.from == fy && (oy = Py.length), Py.push(hy.n.range(By.value.from, By.value.to))
          }
          return Wy(bb.update({
            selection: hy.n.create(Py, oy),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: yb => {
          let {
            state: bb
          } = yb, Wy = String(bb.doc.lineAt(yb.state.selection.main.head).number), {
            close: fy,
            result: Zy
          } = (0, Uy.hb)(yb, {
            label: bb.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: Wy
            },
            focus: !0,
            submitLabel: bb.phrase("go")
          });
          return Zy.then((Wy => {
            let Zy = Wy && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(Wy.elements.line.value);
            if (!Zy) return void yb.dispatch({
              effects: fy
            });
            let cb = bb.doc.lineAt(bb.selection.main.head),
              [, Py, oy, By, Ky] = Zy,
              ey = By ? +By.slice(1) : 0,
              qb = oy ? +oy : cb.number;
            if (oy && Ky) {
              let yb = qb / 100;
              Py && (yb = yb * ("-" == Py ? -1 : 1) + cb.number / bb.doc.lines), qb = Math.round(bb.doc.lines * yb)
            } else oy && Py && (qb = qb * ("-" == Py ? -1 : 1) + cb.number);
            let sy = bb.doc.line(Math.max(1, Math.min(bb.doc.lines, qb))),
              Sy = hy.n.cursor(sy.from + Math.max(0, Math.min(ey, sy.length)));
            yb.dispatch({
              effects: [fy, Uy.k.scrollIntoView(Sy.from, {
                y: "center"
              })],
              selection: Sy
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb, {
            lZ: fy
          } = bb.selection;
          if (fy.some((yb => yb.from === yb.to))) return (yb => {
            let {
              state: bb,
              dispatch: Wy
            } = yb, {
              selection: Uy
            } = bb, fy = hy.n.create(Uy.lZ.map((yb => bb.wordAt(yb.head) || hy.n.cursor(yb.head))), Uy.mainIndex);
            return !fy.eq(Uy) && (Wy(bb.update({
              selection: fy
            })), !0)
          })({
            state: bb,
            dispatch: Wy
          });
          let Zy = bb.sliceDoc(fy[0].from, fy[0].to);
          if (bb.selection.lZ.some((yb => bb.sliceDoc(yb.from, yb.to) != Zy))) return !1;
          let Py = function(yb, bb) {
            let {
              main: Wy,
              lZ: Uy
            } = yb.selection, hy = yb.wordAt(Wy.head), fy = hy && hy.from == Wy.from && hy.to == Wy.to;
            for (let Zy = !1, Py = new cb(yb.doc, bb, Uy[Uy.length - 1].to);;) {
              if (Py.next(), !Py.done) {
                if (Zy && Uy.some((yb => yb.from == Py.value.from))) continue;
                if (fy) {
                  let bb = yb.wordAt(Py.value.from);
                  if (!bb || bb.from != Py.value.from || bb.to != Py.value.to) continue
                }
                return Py.value
              }
              if (Zy) return null;
              Py = new cb(yb.doc, bb, 0, Math.max(0, Uy[Uy.length - 1].from - 1)), Zy = !0
            }
          }(bb, Zy);
          return !!Py && (Wy(bb.update({
            selection: bb.selection.addRange(hy.n.range(Py.from, Py.to), !1),
            effects: Uy.k.scrollIntoView(Py.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class yW {
      constructor(yb) {
        this.view = yb;
        let bb = this.query = yb.state.field(rb).query.spec;

        function Wy(yb, bb, Wy) {
          return (0, fy.e)("button", {
            class: "cm-button",
            name: yb,
            onclick: bb,
            type: "button"
          }, Wy)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, fy.e)("input", {
          value: bb.search,
          placeholder: bW(yb, "Find"),
          "aria-label": bW(yb, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, fy.e)("input", {
          value: bb.replace,
          placeholder: bW(yb, "Replace"),
          "aria-label": bW(yb, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, fy.e)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: bb.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, fy.e)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: bb.regexp,
          onchange: this.commit
        }), this.wordField = (0, fy.e)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: bb.wholeWord,
          onchange: this.commit
        }), this.dom = (0, fy.e)("div", {
          onkeydown: yb => this.keydown(yb),
          class: "cm-search"
        }, [this.searchField, Wy("next", (() => Qy(yb)), [bW(yb, "next")]), Wy("prev", (() => jb(yb)), [bW(yb, "previous")]), Wy("select", (() => Dy(yb)), [bW(yb, "all")]), (0, fy.e)("label", null, [this.caseField, bW(yb, "match case")]), (0, fy.e)("label", null, [this.reField, bW(yb, "regexp")]), (0, fy.e)("label", null, [this.wordField, bW(yb, "by word")]), ...yb.state.readOnly ? [] : [(0, fy.e)("br"), this.replaceField, Wy("replace", (() => tb(yb)), [bW(yb, "replace")]), Wy("replaceAll", (() => wy(yb)), [bW(yb, "replace all")])], (0, fy.e)("button", {
          name: "close",
          onclick: () => Ay(yb),
          "aria-label": bW(yb, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let yb = new Gy({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        yb.eq(this.query) || (this.query = yb, this.view.dispatch({
          effects: ny.of(yb)
        }))
      }
      keydown(yb) {
        (0, Uy.eb)(this.view, yb, "search-panel") ? yb.preventDefault(): 13 == yb.keyCode && yb.target == this.searchField ? (yb.preventDefault(), (yb.shiftKey ? jb : Qy)(this.view)) : 13 == yb.keyCode && yb.target == this.replaceField && (yb.preventDefault(), tb(this.view))
      }
      update(yb) {
        for (let bb of yb.transactions)
          for (let yb of bb.effects) yb.is(ny) && !yb.value.eq(this.query) && this.setQuery(yb.value)
      }
      setQuery(yb) {
        this.query = yb, this.searchField.value = yb.search, this.replaceField.value = yb.replace, this.caseField.checked = yb.caseSensitive, this.reField.checked = yb.regexp, this.wordField.checked = yb.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(gb).top
      }
    }

    function bW(yb, bb) {
      return yb.state.phrase(bb)
    }
    const Wb = 30,
      Ub = /[\s\.,:;?!]/;

    function hb(yb, bb) {
      let {
        from: Wy,
        to: hy
      } = bb, fy = yb.state.doc.lineAt(Wy), Zy = yb.state.doc.lineAt(hy).to, cb = Math.max(fy.from, Wy - Wb), Py = Math.min(Zy, hy + Wb), oy = yb.state.sliceDoc(cb, Py);
      if (cb != fy.from)
        for (let Uy = 0; Uy < Wb; Uy++)
          if (!Ub.test(oy[Uy + 1]) && Ub.test(oy[Uy])) {
            oy = oy.slice(Uy);
            break
          } if (Py != Zy)
        for (let Uy = oy.length - 1; Uy > oy.length - Wb; Uy--)
          if (!Ub.test(oy[Uy - 1]) && Ub.test(oy[Uy])) {
            oy = oy.slice(0, Uy);
            break
          } return Uy.k.announce.of(`${yb.state.phrase("current match")}. ${oy} ${yb.state.phrase("on line")} ${fy.number}.`)
    }
    const fb = Uy.k.baseTheme({
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
      Zb = [rb, hy.z.low(py), fb]
  },
  39759: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Xy,
      h: () => ob,
      k: () => Oh,
      m: () => ZZ,
      n: () => Ib,
      q: () => My,
      r: () => Mf,
      t: () => xf,
      v: () => Zf,
      z: () => xZ,
      D: () => Nf,
      G: () => KZ,
      N: () => mZ,
      K: () => YZ,
      Q: () => sf,
      S: () => kZ,
      W: () => rf,
      X: () => RZ,
      Y: () => wb,
      $: () => Jf,
      bb: () => Rf,
      eb: () => Fh,
      hb: () => WZ,
      lb: () => bc,
      mb: () => Lf
    });
    for (var Uy = Wy(39754), hy = Wy(39768), fy = {
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
      }, Zy = {
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
      }, cb = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Py = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), oy = 0; oy < 10; oy++) fy[48 + oy] = fy[96 + oy] = String(oy);
    for (oy = 1; oy <= 24; oy++) fy[oy + 111] = "F" + oy;
    for (oy = 65; oy <= 90; oy++) fy[oy] = String.fromCharCode(oy + 32), Zy[oy] = String.fromCharCode(oy);
    for (var By in fy) Zy.hasOwnProperty(By) || (Zy[By] = fy[By]);
    var Ky = Wy(39777);
    let ey = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      qb = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const sy = /Edge\/(\d+)/.exec(ey.userAgent),
      Sy = /MSIE \d/.test(ey.userAgent),
      Ey = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ey.userAgent),
      ly = !!(Sy || Ey || sy),
      mb = !ly && /gecko\/(\d+)/i.test(ey.userAgent),
      Cy = !ly && /Chrome\/(\d+)/.exec(ey.userAgent),
      Ty = "webkitFontSmoothing" in qb.documentElement.style,
      Vy = !ly && /Apple Computer/.test(ey.vendor),
      Jy = Vy && (/Mobile\/\w+/.test(ey.userAgent) || ey.maxTouchPoints > 2);
    var gb = {
      mac: Jy || /Mac/.test(ey.platform),
      windows: /Win/.test(ey.platform),
      linux: /Linux|X11/.test(ey.platform),
      ie: ly,
      ie_version: Sy ? qb.documentMode || 6 : Ey ? +Ey[1] : sy ? +sy[1] : 0,
      gecko: mb,
      gecko_version: mb ? +(/Firefox\/(\d+)/.exec(ey.userAgent) || [0, 0])[1] : 0,
      chrome: !!Cy,
      chrome_version: Cy ? +Cy[1] : 0,
      ios: Jy,
      android: /Android\b/.test(ey.userAgent),
      webkit: Ty,
      webkit_version: Ty ? +(/\bAppleWebKit\/(\d+)/.exec(ey.userAgent) || [0, 0])[1] : 0,
      safari: Vy,
      safari_version: Vy ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(ey.userAgent) || [0, 0])[1] : 0,
      tabSize: null != qb.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function Gy(yb, bb) {
      for (let Wy in yb) "class" == Wy && bb.class ? bb.class += " " + yb.class : "style" == Wy && bb.style ? bb.style += ";" + yb.style : bb[Wy] = yb[Wy];
      return bb
    }
    const Oy = Object.create(null);

    function Ry(yb, bb, Wy) {
      if (yb == bb) return !0;
      yb || (yb = Oy), bb || (bb = Oy);
      let Uy = Object.keys(yb),
        hy = Object.keys(bb);
      if (Uy.length - (Wy && Uy.indexOf(Wy) > -1 ? 1 : 0) != hy.length - (Wy && hy.indexOf(Wy) > -1 ? 1 : 0)) return !1;
      for (let fy of Uy)
        if (fy != Wy && (-1 == hy.indexOf(fy) || yb[fy] !== bb[fy])) return !1;
      return !0
    }

    function vb(yb, bb, Wy) {
      let Uy = !1;
      if (bb)
        for (let hy in bb) Wy && hy in Wy || (Uy = !0, "style" == hy ? yb.style.cssText = "" : yb.removeAttribute(hy));
      if (Wy)
        for (let hy in Wy) bb && bb[hy] == Wy[hy] || (Uy = !0, "style" == hy ? yb.style.cssText = Wy[hy] : yb.setAttribute(hy, Wy[hy]));
      return Uy
    }

    function ib(yb) {
      let bb = Object.create(null);
      for (let Wy = 0; Wy < yb.attributes.length; Wy++) {
        let Uy = yb.attributes[Wy];
        bb[Uy.name] = Uy.value
      }
      return bb
    }
    class My {
      eq(yb) {
        return !1
      }
      updateDOM(yb, bb, Wy) {
        return !1
      }
      compare(yb) {
        return this == yb || this.constructor == yb.constructor && this.eq(yb)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(yb) {
        return !0
      }
      coordsAt(yb, bb, Wy) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(yb) {}
    }
    var Yy = function(yb) {
      return yb[yb.Text = 0] = "Text", yb[yb.WidgetBefore = 1] = "WidgetBefore", yb[yb.WidgetAfter = 2] = "WidgetAfter", yb[yb.WidgetRange = 3] = "WidgetRange", yb
    }(Yy || (Yy = {}));
    class Xy extends Uy.F {
      constructor(yb, bb, Wy, Uy) {
        super(), this.startSide = yb, this.endSide = bb, this.widget = Wy, this.spec = Uy
      }
      get heightRelevant() {
        return !1
      }
      static mark(yb) {
        return new ny(yb)
      }
      static widget(yb) {
        let bb = Math.max(-1e4, Math.min(1e4, yb.side || 0)),
          Wy = !!yb.block;
        return bb += Wy && !yb.inlineOrder ? bb > 0 ? 3e8 : -4e8 : bb > 0 ? 1e8 : -1e8, new rb(yb, bb, bb, Wy, yb.widget || null, !1)
      }
      static replace(yb) {
        let bb, Wy, Uy = !!yb.block;
        if (yb.isBlockGap) bb = -5e8, Wy = 4e8;
        else {
          let {
            start: hy,
            end: fy
          } = Hy(yb, Uy);
          bb = (hy ? Uy ? -3e8 : -1 : 5e8) - 1, Wy = 1 + (fy ? Uy ? 2e8 : 1 : -6e8)
        }
        return new rb(yb, bb, Wy, Uy, yb.widget || null, !0)
      }
      static line(yb) {
        return new uy(yb)
      }
      static set(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Uy.E.of(yb, bb)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    Xy.none = Uy.E.empty;
    class ny extends Xy {
      constructor(yb) {
        let {
          start: bb,
          end: Wy
        } = Hy(yb);
        super(bb ? -1 : 5e8, Wy ? 1 : -6e8, null, yb), this.tagName = yb.tagName || "span", this.attrs = yb.class && yb.attributes ? Gy(yb.attributes, {
          class: yb.class
        }) : yb.class ? {
          class: yb.class
        } : yb.attributes || Oy
      }
      eq(yb) {
        return this == yb || yb instanceof ny && this.tagName == yb.tagName && Ry(this.attrs, yb.attrs)
      }
      range(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb;
        if (yb >= bb) throw new RangeError("Mark decorations may not be empty");
        return super.range(yb, bb)
      }
    }
    ny.prototype.point = !1;
    class uy extends Xy {
      constructor(yb) {
        super(-2e8, -2e8, null, yb)
      }
      eq(yb) {
        return yb instanceof uy && this.spec.class == yb.spec.class && Ry(this.spec.attributes, yb.spec.attributes)
      }
      range(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb;
        if (bb != yb) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(yb, bb)
      }
    }
    uy.prototype.mapMode = Uy.y.TrackBefore, uy.prototype.point = !0;
    class rb extends Xy {
      constructor(yb, bb, Wy, hy, fy, Zy) {
        super(bb, Wy, fy, yb), this.block = hy, this.isReplace = Zy, this.mapMode = hy ? bb <= 0 ? Uy.y.TrackBefore : Uy.y.TrackAfter : Uy.y.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? Yy.WidgetRange : this.startSide <= 0 ? Yy.WidgetBefore : Yy.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(yb) {
        return yb instanceof rb && (bb = this.widget, Wy = yb.widget, bb == Wy || !!(bb && Wy && bb.compare(Wy))) && this.block == yb.block && this.startSide == yb.startSide && this.endSide == yb.endSide;
        var bb, Wy
      }
      range(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yb;
        if (this.isReplace && (yb > bb || yb == bb && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && bb != yb) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(yb, bb)
      }
    }

    function Hy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: Wy,
          inclusiveEnd: Uy
        } = yb;
      return null == Wy && (Wy = yb.inclusive), null == Uy && (Uy = yb.inclusive), {
        start: null !== Wy && void 0 !== Wy ? Wy : bb,
        end: null !== Uy && void 0 !== Uy ? Uy : bb
      }
    }

    function ab(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        hy = Wy.length - 1;
      hy >= 0 && Wy[hy] + Uy >= yb ? Wy[hy] = Math.max(Wy[hy], bb) : Wy.push(yb, bb)
    }
    rb.prototype.point = !0;
    class Fy extends Uy.F {
      constructor(yb, bb) {
        super(), this.tagName = yb, this.attributes = bb
      }
      eq(yb) {
        return yb == this || yb instanceof Fy && this.tagName == yb.tagName && Ry(this.attributes, yb.attributes)
      }
      static create(yb) {
        return new Fy(yb.tagName, yb.attributes || Oy)
      }
      static set(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Uy.E.of(yb, bb)
      }
    }

    function py(yb) {
      let bb;
      return bb = 11 == yb.nodeType ? yb.getSelection ? yb : yb.ownerDocument : yb, bb.getSelection()
    }

    function Ly(yb, bb) {
      return !!bb && (yb == bb || yb.contains(1 != bb.nodeType ? bb.parentNode : bb))
    }

    function Qy(yb, bb) {
      if (!bb.anchorNode) return !1;
      try {
        return Ly(yb, bb.anchorNode)
      } catch (Wy) {
        return !1
      }
    }

    function jb(yb) {
      return 3 == yb.nodeType ? Ub(yb, 0, yb.nodeValue.length).getClientRects() : 1 == yb.nodeType ? yb.getClientRects() : []
    }

    function Dy(yb, bb, Wy, Uy) {
      return !!Wy && (kb(yb, bb, Wy, Uy, -1) || kb(yb, bb, Wy, Uy, 1))
    }

    function tb(yb) {
      for (var bb = 0;; bb++)
        if (!(yb = yb.previousSibling)) return bb
    }

    function wy(yb) {
      return 1 == yb.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(yb.nodeName)
    }

    function kb(yb, bb, Wy, Uy, hy) {
      for (;;) {
        if (yb == Wy && bb == Uy) return !0;
        if (bb == (hy < 0 ? 0 : Ny(yb))) {
          if ("DIV" == yb.nodeName) return !1;
          let Wy = yb.parentNode;
          if (!Wy || 1 != Wy.nodeType) return !1;
          bb = tb(yb) + (hy < 0 ? 0 : 1), yb = Wy
        } else {
          if (1 != yb.nodeType) return !1;
          if (1 == (yb = yb.childNodes[bb + (hy < 0 ? -1 : 0)]).nodeType && "false" == yb.contentEditable) return !1;
          bb = hy < 0 ? Ny(yb) : 0
        }
      }
    }

    function Ny(yb) {
      return 3 == yb.nodeType ? yb.nodeValue.length : yb.childNodes.length
    }

    function zb(yb, bb) {
      let Wy = bb ? yb.left : yb.right;
      return {
        left: Wy,
        right: Wy,
        top: yb.top,
        bottom: yb.bottom
      }
    }

    function Iy(yb) {
      let bb = yb.visualViewport;
      return bb ? {
        left: 0,
        right: bb.width,
        top: 0,
        bottom: bb.height
      } : {
        left: 0,
        right: yb.innerWidth,
        top: 0,
        bottom: yb.innerHeight
      }
    }

    function xb(yb, bb) {
      let Wy = bb.width / yb.offsetWidth,
        Uy = bb.height / yb.offsetHeight;
      return (Wy > .995 && Wy < 1.005 || !isFinite(Wy) || Math.abs(bb.width - yb.offsetWidth) < 1) && (Wy = 1), (Uy > .995 && Uy < 1.005 || !isFinite(Uy) || Math.abs(bb.height - yb.offsetHeight) < 1) && (Uy = 1), {
        scaleX: Wy,
        scaleY: Uy
      }
    }

    function Ay(yb) {
      let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        Wy = yb.ownerDocument,
        Uy = null,
        hy = null;
      for (let fy = yb.parentNode; fy && (fy != Wy.body && (bb && !Uy || !hy));)
        if (1 == fy.nodeType) !hy && fy.scrollHeight > fy.clientHeight && (hy = fy), bb && !Uy && fy.scrollWidth > fy.clientWidth && (Uy = fy), fy = fy.assignedSlot || fy.parentNode;
        else {
          if (11 != fy.nodeType) break;
          fy = fy.host
        } return {
        x: Uy,
        y: hy
      }
    }
    Fy.prototype.startSide = Fy.prototype.endSide = -1;
    class dy {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(yb) {
        return this.anchorNode == yb.anchorNode && this.anchorOffset == yb.anchorOffset && this.focusNode == yb.focusNode && this.focusOffset == yb.focusOffset
      }
      setRange(yb) {
        let {
          anchorNode: bb,
          focusNode: Wy
        } = yb;
        this.set(bb, Math.min(yb.anchorOffset, bb ? Ny(bb) : 0), Wy, Math.min(yb.focusOffset, Wy ? Ny(Wy) : 0))
      }
      set(yb, bb, Wy, Uy) {
        this.anchorNode = yb, this.anchorOffset = bb, this.focusNode = Wy, this.focusOffset = Uy
      }
    }
    let yW, bW = null;

    function Wb(yb) {
      if (yb.setActive) return yb.setActive();
      if (bW) return yb.focus(bW);
      let bb = [];
      for (let Wy = yb; Wy && (bb.push(Wy, Wy.scrollTop, Wy.scrollLeft), Wy != Wy.ownerDocument); Wy = Wy.parentNode);
      if (yb.focus(null == bW ? {
          get preventScroll() {
            return bW = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !bW) {
        bW = !1;
        for (let yb = 0; yb < bb.length;) {
          let Wy = bb[yb++],
            Uy = bb[yb++],
            hy = bb[yb++];
          Wy.scrollTop != Uy && (Wy.scrollTop = Uy), Wy.scrollLeft != hy && (Wy.scrollLeft = hy)
        }
      }
    }

    function Ub(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb,
        Uy = yW || (yW = document.createRange());
      return Uy.setEnd(yb, Wy), Uy.setStart(yb, bb), Uy
    }

    function hb(yb, bb, Wy, Uy) {
      let hy = {
        key: bb,
        code: bb,
        keyCode: Wy,
        which: Wy,
        cancelable: !0
      };
      Uy && ({
        altKey: hy.altKey,
        ctrlKey: hy.ctrlKey,
        shiftKey: hy.shiftKey,
        metaKey: hy.metaKey
      } = Uy);
      let fy = new KeyboardEvent("keydown", hy);
      fy.synthetic = !0, yb.dispatchEvent(fy);
      let Zy = new KeyboardEvent("keyup", hy);
      return Zy.synthetic = !0, yb.dispatchEvent(Zy), fy.defaultPrevented || Zy.defaultPrevented
    }

    function fb(yb) {
      return yb instanceof Window ? yb.pageYOffset > Math.max(0, yb.document.documentElement.scrollHeight - yb.innerHeight - 4) : yb.scrollTop > Math.max(1, yb.scrollHeight - yb.clientHeight - 4)
    }

    function Zb(yb, bb) {
      for (let Wy = yb, Uy = bb;;) {
        if (3 == Wy.nodeType && Uy > 0) return {
          node: Wy,
          offset: Uy
        };
        if (1 == Wy.nodeType && Uy > 0) {
          if ("false" == Wy.contentEditable) return null;
          Wy = Wy.childNodes[Uy - 1], Uy = Ny(Wy)
        } else {
          if (!Wy.parentNode || wy(Wy)) return null;
          Uy = tb(Wy), Wy = Wy.parentNode
        }
      }
    }

    function cW(yb, bb) {
      for (let Wy = yb, Uy = bb;;) {
        if (3 == Wy.nodeType && Uy < Wy.nodeValue.length) return {
          node: Wy,
          offset: Uy
        };
        if (1 == Wy.nodeType && Uy < Wy.childNodes.length) {
          if ("false" == Wy.contentEditable) return null;
          Wy = Wy.childNodes[Uy], Uy = 0
        } else {
          if (!Wy.parentNode || wy(Wy)) return null;
          Uy = tb(Wy) + 1, Wy = Wy.parentNode
        }
      }
    }
    gb.safari && gb.safari_version >= 26 && (bW = !1);
    class Pb {
      constructor(yb, bb) {
        let Wy = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = yb, this.offset = bb, this.precise = Wy
      }
      static before(yb, bb) {
        return new Pb(yb.parentNode, tb(yb), bb)
      }
      static after(yb, bb) {
        return new Pb(yb.parentNode, tb(yb) + 1, bb)
      }
    }
    var ob = function(yb) {
      return yb[yb.LTR = 0] = "LTR", yb[yb.RTL = 1] = "RTL", yb
    }(ob || (ob = {}));
    const Bb = ob.LTR,
      Kb = ob.RTL;

    function eb(yb) {
      let bb = [];
      for (let Wy = 0; Wy < yb.length; Wy++) bb.push(1 << +yb[Wy]);
      return bb
    }
    const qW = eb("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      sb = eb("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      Sb = Object.create(null),
      Eb = [];
    for (let XZ of ["()", "[]", "{}"]) {
      let yb = XZ.charCodeAt(0),
        bb = XZ.charCodeAt(1);
      Sb[yb] = bb, Sb[bb] = -yb
    }

    function lb(yb) {
      return yb <= 247 ? qW[yb] : 1424 <= yb && yb <= 1524 ? 2 : 1536 <= yb && yb <= 1785 ? sb[yb - 1536] : 1774 <= yb && yb <= 2220 ? 4 : 8192 <= yb && yb <= 8204 ? 256 : 64336 <= yb && yb <= 65023 ? 4 : 1
    }
    const mW = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Cb {
      get dir() {
        return this.level % 2 ? Kb : Bb
      }
      constructor(yb, bb, Wy) {
        this.from = yb, this.to = bb, this.level = Wy
      }
      side(yb, bb) {
        return this.dir == bb == yb ? this.to : this.from
      }
      forward(yb, bb) {
        return yb == (this.dir == bb)
      }
      static find(yb, bb, Wy, Uy) {
        let hy = -1;
        for (let fy = 0; fy < yb.length; fy++) {
          let Zy = yb[fy];
          if (Zy.from <= bb && Zy.to >= bb) {
            if (Zy.level == Wy) return fy;
            (hy < 0 || (0 != Uy ? Uy < 0 ? Zy.from < bb : Zy.to > bb : yb[hy].level > Zy.level)) && (hy = fy)
          }
        }
        if (hy < 0) throw new RangeError("Index out of range");
        return hy
      }
    }

    function Tb(yb, bb) {
      if (yb.length != bb.length) return !1;
      for (let Wy = 0; Wy < yb.length; Wy++) {
        let Uy = yb[Wy],
          hy = bb[Wy];
        if (Uy.from != hy.from || Uy.to != hy.to || Uy.direction != hy.direction || !Tb(Uy.inner, hy.inner)) return !1
      }
      return !0
    }
    const Vb = [];

    function Jb(yb, bb, Wy, Uy, hy, fy, Zy) {
      let cb = Uy % 2 ? 2 : 1;
      if (Uy % 2 == hy % 2)
        for (let Py = bb, oy = 0; Py < Wy;) {
          let bb = !0,
            By = !1;
          if (oy == fy.length || Py < fy[oy].from) {
            let yb = Vb[Py];
            yb != cb && (bb = !1, By = 16 == yb)
          }
          let Ky = bb || 1 != cb ? null : [],
            ey = bb ? Uy : Uy + 1,
            qb = Py;
          yb: for (;;)
            if (oy < fy.length && qb == fy[oy].from) {
              if (By) break yb;
              let sy = fy[oy];
              if (!bb)
                for (let yb = sy.to, bb = oy + 1;;) {
                  if (yb == Wy) break yb;
                  if (!(bb < fy.length && fy[bb].from == yb)) {
                    if (Vb[yb] == cb) break yb;
                    break
                  }
                  yb = fy[bb++].to
                }
              if (oy++, Ky) Ky.push(sy);
              else {
                sy.from > Py && Zy.push(new Cb(Py, sy.from, ey)), gW(yb, sy.direction == Bb != !(ey % 2) ? Uy + 1 : Uy, hy, sy.inner, sy.from, sy.to, Zy), Py = sy.to
              }
              qb = sy.to
            } else {
              if (qb == Wy || (bb ? Vb[qb] != cb : Vb[qb] == cb)) break;
              qb++
            } Ky ? Jb(yb, Py, qb, Uy + 1, hy, Ky, Zy) : Py < qb && Zy.push(new Cb(Py, qb, ey)), Py = qb
        } else
          for (let Py = Wy, oy = fy.length; Py > bb;) {
            let Wy = !0,
              By = !1;
            if (!oy || Py > fy[oy - 1].to) {
              let yb = Vb[Py - 1];
              yb != cb && (Wy = !1, By = 16 == yb)
            }
            let Ky = Wy || 1 != cb ? null : [],
              ey = Wy ? Uy : Uy + 1,
              qb = Py;
            yb: for (;;)
              if (oy && qb == fy[oy - 1].to) {
                if (By) break yb;
                let sy = fy[--oy];
                if (!Wy)
                  for (let yb = sy.from, Wy = oy;;) {
                    if (yb == bb) break yb;
                    if (!Wy || fy[Wy - 1].to != yb) {
                      if (Vb[yb - 1] == cb) break yb;
                      break
                    }
                    yb = fy[--Wy].from
                  }
                if (Ky) Ky.push(sy);
                else {
                  sy.to < Py && Zy.push(new Cb(sy.to, Py, ey)), gW(yb, sy.direction == Bb != !(ey % 2) ? Uy + 1 : Uy, hy, sy.inner, sy.from, sy.to, Zy), Py = sy.from
                }
                qb = sy.from
              } else {
                if (qb == bb || (Wy ? Vb[qb - 1] != cb : Vb[qb - 1] == cb)) break;
                qb--
              } Ky ? Jb(yb, qb, Py, Uy + 1, hy, Ky, Zy) : qb < Py && Zy.push(new Cb(qb, Py, ey)), Py = qb
          }
    }

    function gW(yb, bb, Wy, Uy, hy, fy, Zy) {
      let cb = bb % 2 ? 2 : 1;
      ! function(yb, bb, Wy, Uy, hy) {
        for (let fy = 0; fy <= Uy.length; fy++) {
          let Zy = fy ? Uy[fy - 1].to : bb,
            cb = fy < Uy.length ? Uy[fy].from : Wy,
            Py = fy ? 256 : hy;
          for (let bb = Zy, Wy = Py, Uy = Py; bb < cb; bb++) {
            let hy = lb(yb.charCodeAt(bb));
            512 == hy ? hy = Wy : 8 == hy && 4 == Uy && (hy = 16), Vb[bb] = 4 == hy ? 2 : hy, 7 & hy && (Uy = hy), Wy = hy
          }
          for (let yb = Zy, bb = Py, Uy = Py; yb < cb; yb++) {
            let hy = Vb[yb];
            if (128 == hy) yb < cb - 1 && bb == Vb[yb + 1] && 24 & bb ? hy = Vb[yb] = bb : Vb[yb] = 256;
            else if (64 == hy) {
              let hy = yb + 1;
              for (; hy < cb && 64 == Vb[hy];) hy++;
              let fy = yb && 8 == bb || hy < Wy && 8 == Vb[hy] ? 1 == Uy ? 1 : 8 : 256;
              for (let bb = yb; bb < hy; bb++) Vb[bb] = fy;
              yb = hy - 1
            } else 8 == hy && 1 == Uy && (Vb[yb] = 1);
            bb = hy, 7 & hy && (Uy = hy)
          }
        }
      }(yb, hy, fy, Uy, cb),
      function(yb, bb, Wy, Uy, hy) {
        let fy = 1 == hy ? 2 : 1;
        for (let Zy = 0, cb = 0, Py = 0; Zy <= Uy.length; Zy++) {
          let oy = Zy ? Uy[Zy - 1].to : bb,
            By = Zy < Uy.length ? Uy[Zy].from : Wy;
          for (let bb, Wy, Uy, Zy = oy; Zy < By; Zy++)
            if (Wy = Sb[bb = yb.charCodeAt(Zy)])
              if (Wy < 0) {
                for (let yb = cb - 3; yb >= 0; yb -= 3)
                  if (Eb[yb + 1] == -Wy) {
                    let bb = Eb[yb + 2],
                      Wy = 2 & bb ? hy : 4 & bb ? 1 & bb ? fy : hy : 0;
                    Wy && (Vb[Zy] = Vb[Eb[yb]] = Wy), cb = yb;
                    break
                  }
              } else {
                if (189 == Eb.length) break;
                Eb[cb++] = Zy, Eb[cb++] = bb, Eb[cb++] = Py
              }
          else if (2 == (Uy = Vb[Zy]) || 1 == Uy) {
            let yb = Uy == hy;
            Py = yb ? 0 : 1;
            for (let bb = cb - 3; bb >= 0; bb -= 3) {
              let Wy = Eb[bb + 2];
              if (2 & Wy) break;
              if (yb) Eb[bb + 2] |= 2;
              else {
                if (4 & Wy) break;
                Eb[bb + 2] |= 4
              }
            }
          }
        }
      }(yb, hy, fy, Uy, cb),
      function(yb, bb, Wy, Uy) {
        for (let hy = 0, fy = Uy; hy <= Wy.length; hy++) {
          let Zy = hy ? Wy[hy - 1].to : yb,
            cb = hy < Wy.length ? Wy[hy].from : bb;
          for (let Py = Zy; Py < cb;) {
            let Zy = Vb[Py];
            if (256 == Zy) {
              let Zy = Py + 1;
              for (;;)
                if (Zy == cb) {
                  if (hy == Wy.length) break;
                  Zy = Wy[hy++].to, cb = hy < Wy.length ? Wy[hy].from : bb
                } else {
                  if (256 != Vb[Zy]) break;
                  Zy++
                } let oy = 1 == fy,
                By = oy == (1 == (Zy < bb ? Vb[Zy] : Uy)) ? oy ? 1 : 2 : Uy;
              for (let bb = Zy, Uy = hy, fy = Uy ? Wy[Uy - 1].to : yb; bb > Py;) bb == fy && (bb = Wy[--Uy].from, fy = Uy ? Wy[Uy - 1].to : yb), Vb[--bb] = By;
              Py = Zy
            } else fy = Zy, Py++
          }
        }
      }(hy, fy, Uy, cb), Jb(yb, hy, fy, bb, Wy, Uy, Zy)
    }

    function Gb(yb, bb, Wy) {
      if (!yb) return [new Cb(0, 0, bb == Kb ? 1 : 0)];
      if (bb == Bb && !Wy.length && !mW.test(yb)) return Ob(yb.length);
      if (Wy.length)
        for (; yb.length > Vb.length;) Vb[Vb.length] = 256;
      let Uy = [],
        hy = bb == Bb ? 0 : 1;
      return gW(yb, hy, hy, Wy, 0, yb.length, Uy), Uy
    }

    function Ob(yb) {
      return [new Cb(0, yb, 0)]
    }
    let Rb = "";

    function vW(yb, bb, Wy, hy, fy) {
      var Zy;
      let cb = hy.head - yb.from,
        Py = Cb.find(bb, cb, null !== (Zy = hy.bidiLevel) && void 0 !== Zy ? Zy : -1, hy.assoc),
        oy = bb[Py],
        By = oy.side(fy, Wy);
      if (cb == By) {
        let yb = Py += fy ? 1 : -1;
        if (yb < 0 || yb >= bb.length) return null;
        oy = bb[Py = yb], cb = oy.side(!fy, Wy), By = oy.side(fy, Wy)
      }
      let Ky = (0, Uy.db)(yb.text, cb, oy.forward(fy, Wy));
      (Ky < oy.from || Ky > oy.to) && (Ky = By), Rb = yb.text.slice(Math.min(cb, Ky), Math.max(cb, Ky));
      let ey = Py == (fy ? bb.length - 1 : 0) ? null : bb[Py + (fy ? 1 : -1)];
      return ey && Ky == By && ey.level + (fy ? 0 : 1) < oy.level ? Uy.n.cursor(ey.side(!fy, Wy) + yb.from, ey.forward(fy, Wy) ? 1 : -1, ey.level) : Uy.n.cursor(Ky + yb.from, oy.forward(fy, Wy) ? -1 : 1, oy.level)
    }

    function iW(yb, bb, Wy) {
      for (let Uy = bb; Uy < Wy; Uy++) {
        let bb = lb(yb.charCodeAt(Uy));
        if (1 == bb) return Bb;
        if (2 == bb || 4 == bb) return Kb
      }
      return Bb
    }
    const Mb = Uy.v.define(),
      Yb = Uy.v.define(),
      Xb = Uy.v.define(),
      nb = Uy.v.define(),
      ub = Uy.v.define(),
      rW = Uy.v.define(),
      Hb = Uy.v.define(),
      aW = Uy.v.define(),
      Fb = Uy.v.define(),
      pb = Uy.v.define({
        combine: yb => yb.some((yb => yb))
      }),
      Lb = Uy.v.define({
        combine: yb => yb.some((yb => yb))
      }),
      Qb = Uy.v.define();
    class jW {
      constructor(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = yb, this.y = bb, this.x = Wy, this.yMargin = Uy, this.xMargin = hy, this.isSnapshot = fy
      }
      map(yb) {
        return yb.empty ? this : new jW(this.range.map(yb), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(yb) {
        return this.range.to <= yb.doc.length ? this : new jW(Uy.n.cursor(yb.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const Db = Uy.I.define({
        map: (yb, bb) => yb.map(bb)
      }),
      tW = Uy.I.define();

    function wb(yb, bb, Wy) {
      let Uy = yb.facet(nb);
      Uy.length ? Uy[0](bb) : window.onerror && window.onerror(String(bb), Wy, void 0, void 0, bb) || (Wy ? console.error(Wy + ":", bb) : console.error(bb))
    }
    const kW = Uy.v.define({
      combine: yb => !yb.length || yb[0]
    });
    let Nb = 0;
    const zW = Uy.v.define({
      combine: yb => yb.filter(((bb, Wy) => {
        for (let Uy = 0; Uy < Wy; Uy++)
          if (yb[Uy].plugin == bb.plugin) return !1;
        return !0
      }))
    });
    class Ib {
      constructor(yb, bb, Wy, Uy, hy) {
        this.id = yb, this.create = bb, this.domEventHandlers = Wy, this.domEventObservers = Uy, this.baseExtensions = hy(this), this.extension = this.baseExtensions.concat(zW.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(yb) {
        return this.baseExtensions.concat(zW.of({
          plugin: this,
          arg: yb
        }))
      }
      static define(yb, bb) {
        const {
          eventHandlers: Wy,
          eventObservers: Uy,
          provide: hy,
          PZ: fy
        } = bb || {};
        return new Ib(Nb++, yb, Wy, Uy, (yb => {
          let bb = [];
          return fy && bb.push(yU.of((bb => {
            let Wy = bb.plugin(yb);
            return Wy ? fy(Wy) : Xy.none
          }))), hy && bb.push(hy(yb)), bb
        }))
      }
      static fromClass(yb, bb) {
        return Ib.define(((bb, Wy) => new yb(bb, Wy)), bb)
      }
    }
    class xW {
      constructor(yb) {
        this.spec = yb, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(yb) {
        if (this.value) {
          if (this.mustUpdate) {
            let yb = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(yb)
            } catch (bb) {
              if (wb(yb.state, bb, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (Wy) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(yb, this.spec.arg)
        } catch (bb) {
          wb(yb.state, bb, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(yb) {
        var bb;
        if (null === (bb = this.value) || void 0 === bb ? void 0 : bb.destroy) try {
          this.value.destroy()
        } catch (Wy) {
          wb(yb.state, Wy, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const Ab = Uy.v.define(),
      db = Uy.v.define(),
      yU = Uy.v.define(),
      bU = Uy.v.define(),
      WW = Uy.v.define(),
      UW = Uy.v.define(),
      hW = Uy.v.define();

    function fW(yb, bb) {
      let Wy = yb.state.facet(hW);
      if (!Wy.length) return Wy;
      let hy = Wy.map((bb => bb instanceof Function ? bb(yb) : bb)),
        fy = [];
      return Uy.E.spans(hy, bb.from, bb.to, {
        point() {},
        span(yb, Wy, Uy, hy) {
          let Zy = yb - bb.from,
            cb = Wy - bb.from,
            Py = fy;
          for (let fy = Uy.length - 1; fy >= 0; fy--, hy--) {
            let yb, Wy = Uy[fy].spec.bidiIsolate;
            if (null == Wy && (Wy = iW(bb.text, Zy, cb)), hy > 0 && Py.length && (yb = Py[Py.length - 1]).to == Zy && yb.direction == Wy) yb.to = cb, Py = yb.inner;
            else {
              let yb = {
                from: Zy,
                to: cb,
                direction: Wy,
                inner: []
              };
              Py.push(yb), Py = yb.inner
            }
          }
        }
      }), fy
    }
    const ZW = Uy.v.define();

    function cU(yb) {
      let bb = 0,
        Wy = 0,
        Uy = 0,
        hy = 0;
      for (let fy of yb.state.facet(ZW)) {
        let Zy = fy(yb);
        Zy && (null != Zy.left && (bb = Math.max(bb, Zy.left)), null != Zy.right && (Wy = Math.max(Wy, Zy.right)), null != Zy.top && (Uy = Math.max(Uy, Zy.top)), null != Zy.bottom && (hy = Math.max(hy, Zy.bottom)))
      }
      return {
        left: bb,
        right: Wy,
        top: Uy,
        bottom: hy
      }
    }
    const PW = Uy.v.define();
    class oW {
      constructor(yb, bb, Wy, Uy) {
        this.fromA = yb, this.toA = bb, this.fromB = Wy, this.toB = Uy
      }
      join(yb) {
        return new oW(Math.min(this.fromA, yb.fromA), Math.max(this.toA, yb.toA), Math.min(this.fromB, yb.fromB), Math.max(this.toB, yb.toB))
      }
      addToSet(yb) {
        let bb = yb.length,
          Wy = this;
        for (; bb > 0; bb--) {
          let Uy = yb[bb - 1];
          if (!(Uy.fromA > Wy.toA)) {
            if (Uy.toA < Wy.fromA) break;
            Wy = Wy.join(Uy), yb.splice(bb - 1, 1)
          }
        }
        return yb.splice(bb, 0, Wy), yb
      }
      static extendWithRanges(yb, bb) {
        if (0 == bb.length) return yb;
        let Wy = [];
        for (let Uy = 0, hy = 0, fy = 0;;) {
          let Zy = Uy < yb.length ? yb[Uy].fromB : 1e9,
            cb = hy < bb.length ? bb[hy] : 1e9,
            Py = Math.min(Zy, cb);
          if (1e9 == Py) break;
          let oy = Py + fy,
            By = Py,
            Ky = oy;
          for (;;)
            if (hy < bb.length && bb[hy] <= By) {
              let Wy = bb[hy + 1];
              hy += 2, By = Math.max(By, Wy);
              for (let bb = Uy; bb < yb.length && yb[bb].fromB <= By; bb++) fy = yb[bb].toA - yb[bb].toB;
              Ky = Math.max(Ky, Wy + fy)
            } else {
              if (!(Uy < yb.length && yb[Uy].fromB <= By)) break;
              {
                let bb = yb[Uy++];
                By = Math.max(By, bb.toB), Ky = Math.max(Ky, bb.toA), fy = bb.toA - bb.toB
              }
            } Wy.push(new oW(oy, Ky, Py, By))
        }
        return Wy
      }
    }
    class BW {
      constructor(yb, bb, Wy) {
        this.view = yb, this.state = bb, this.transactions = Wy, this.flags = 0, this.startState = yb.state, this.changes = Uy.ChangeSet.empty(this.startState.doc.length);
        for (let Uy of Wy) this.changes = this.changes.compose(Uy.changes);
        let hy = [];
        this.changes.iterChangedRanges(((yb, bb, Wy, Uy) => hy.push(new oW(yb, bb, Wy, Uy)))), this.changedRanges = hy
      }
      static create(yb, bb, Wy) {
        return new BW(yb, bb, Wy)
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
        return this.transactions.some((yb => yb.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const KW = [];
    class eW {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = yb, this.length = bb, this.flags = Wy, this.parent = null, yb.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return KW
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
      sync(yb) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let yb = this.domAttrs;
          yb && function(yb, bb) {
            for (let Wy = yb.attributes.length - 1; Wy >= 0; Wy--) {
              let Uy = yb.attributes[Wy].name;
              null == bb[Uy] && yb.removeAttribute(Uy)
            }
            for (let Wy in bb) {
              let Uy = bb[Wy];
              "style" == Wy ? yb.style.cssText = Uy : yb.getAttribute(Wy) != Uy && yb.setAttribute(Wy, Uy)
            }
          }(this.dom, yb)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(yb) {
        this.dom = yb, yb.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let Wy of this.children) {
          if (Wy == yb) return bb;
          bb += Wy.length + Wy.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(yb) {
        return this.posBefore(yb) + yb.length
      }
      covers(yb) {
        return !0
      }
      coordsIn(yb, bb) {
        return null
      }
      domPosFor(yb, bb) {
        let Wy = tb(this.dom),
          Uy = this.length ? yb > 0 : bb > 0;
        return new Pb(this.parent.dom, Wy + (Uy ? 1 : 0), 0 == yb || yb == this.length)
      }
      markDirty(yb) {
        this.flags &= -3, yb && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let yb = this; yb; yb = yb.parent)
          if (yb instanceof SW) return yb;
        return null
      }
      static get(yb) {
        return yb.cmTile
      }
    }
    class qU extends eW {
      constructor(yb) {
        super(yb, 0), this._children = []
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
      append(yb) {
        this.children.push(yb), yb.parent = this
      }
      sync(yb) {
        if (2 & this.flags) return;
        super.sync(yb);
        let bb, Wy = this.dom,
          Uy = null,
          hy = (null === yb || void 0 === yb ? void 0 : yb.node) == Wy ? yb : null,
          fy = 0;
        for (let Zy of this.children) {
          if (Zy.sync(yb), fy += Zy.length + Zy.breakAfter, bb = Uy ? Uy.nextSibling : Wy.firstChild, hy && bb != Zy.dom && (hy.written = !0), Zy.dom.parentNode == Wy)
            for (; bb && bb != Zy.dom;) bb = sW(bb);
          else Wy.insertBefore(Zy.dom, bb);
          Uy = Zy.dom
        }
        for (bb = Uy ? Uy.nextSibling : Wy.firstChild, hy && bb && (hy.written = !0); bb;) bb = sW(bb);
        this.length = fy
      }
    }

    function sW(yb) {
      let bb = yb.nextSibling;
      return yb.parentNode.removeChild(yb), bb
    }
    class SW extends qU {
      constructor(yb, bb) {
        super(bb), this.view = yb
      }
      owns(yb) {
        for (; yb; yb = yb.parent)
          if (yb == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(yb) {
        for (;;) {
          if (!yb) return null;
          let bb = eW.get(yb);
          if (bb && this.owns(bb)) return bb;
          yb = yb.parentNode
        }
      }
      blockTiles(yb) {
        for (let bb = [], Wy = this, Uy = 0, hy = 0;;)
          if (Uy == Wy.children.length) {
            if (!bb.length) return;
            Wy = Wy.parent, Wy.breakAfter && hy++, Uy = bb.pop()
          } else {
            let fy = Wy.children[Uy++];
            if (fy instanceof EW) bb.push(Uy), Wy = fy, Uy = 0;
            else {
              let bb = hy + fy.length,
                Wy = yb(fy, hy);
              if (void 0 !== Wy) return Wy;
              hy = bb + fy.breakAfter
            }
          }
      }
      resolveBlock(yb, bb) {
        let Wy, Uy, hy = -1,
          fy = -1;
        if (this.blockTiles(((Zy, cb) => {
            let Py = cb + Zy.length;
            if (yb >= cb && yb <= Py) {
              if (Zy.isWidget() && bb >= -1 && bb <= 1) {
                if (32 & Zy.flags) return !0;
                16 & Zy.flags && (Wy = void 0)
              }(cb < yb || yb == Py && (bb < -1 ? Zy.length : Zy.covers(1))) && (!Wy || !Zy.isWidget() && Wy.isWidget()) && (Wy = Zy, hy = yb - cb), (Py > yb || yb == cb && (bb > 1 ? Zy.length : Zy.covers(-1))) && (!Uy || !Zy.isWidget() && Uy.isWidget()) && (Uy = Zy, fy = yb - cb)
            }
          })), !Wy && !Uy) throw new Error("No tile at position " + yb);
        return Wy && bb < 0 || !Uy ? {
          tile: Wy,
          offset: hy
        } : {
          tile: Uy,
          offset: fy
        }
      }
    }
    class EW extends qU {
      constructor(yb, bb) {
        super(yb), this.wrapper = bb
      }
      isBlock() {
        return !0
      }
      covers(yb) {
        return !!this.children.length && (yb < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (yb, bb) {
        let Wy = new EW(bb || document.createElement(yb.tagName), yb);
        return bb || (Wy.flags |= 4), Wy
      }
    }
    class lW extends qU {
      constructor(yb, bb) {
        super(yb), this.attrs = bb
      }
      isLine() {
        return !0
      }
      static start(yb, bb, Wy) {
        let Uy = new lW(bb || document.createElement("div"), yb);
        return bb && Wy || (Uy.flags |= 4), Uy
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(yb, bb, Wy) {
        let Uy = null,
          hy = -1,
          fy = null,
          Zy = -1;
        ! function yb(cb, Py) {
          for (let oy = 0, By = 0; oy < cb.children.length && By <= Py; oy++) {
            let Ky = cb.children[oy],
              ey = By + Ky.length;
            ey >= Py && (Ky.isComposite() ? yb(Ky, Py - By) : (!fy || fy.isHidden && (bb > 0 || Wy && mU(fy, Ky))) && (ey > Py || 32 & Ky.flags) ? (fy = Ky, Zy = Py - By) : (By < Py || 16 & Ky.flags && !Ky.isHidden) && (Uy = Ky, hy = Py - By)), By = ey
          }
        }(this, yb);
        let cb = (bb < 0 ? Uy : fy) || Uy || fy;
        return cb ? {
          tile: cb,
          offset: cb == Uy ? hy : Zy
        } : null
      }
      coordsIn(yb, bb) {
        let Wy = this.resolveInline(yb, bb, !0);
        return Wy ? Wy.tile.coordsIn(Math.max(0, Wy.offset), bb) : function(yb) {
          let bb = yb.dom.lastChild;
          if (!bb) return yb.dom.getBoundingClientRect();
          let Wy = jb(bb);
          return Wy[Wy.length - 1] || null
        }(this)
      }
      domIn(yb, bb) {
        let Wy = this.resolveInline(yb, bb);
        if (Wy) {
          let {
            tile: yb,
            offset: Uy
          } = Wy;
          if (this.dom.contains(yb.dom)) return yb.isText() ? new Pb(yb.dom, Math.min(yb.dom.nodeValue.length, Uy)) : yb.domPosFor(Uy, 16 & yb.flags ? 1 : 32 & yb.flags ? -1 : bb);
          let hy = Wy.tile.parent,
            fy = !1;
          for (let bb of hy.children) {
            if (fy) return new Pb(bb.dom, 0);
            bb == Wy.tile && (fy = !0)
          }
        }
        return new Pb(this.dom, 0)
      }
    }

    function mU(yb, bb) {
      let Wy = yb.coordsIn(0, 1),
        Uy = bb.coordsIn(0, 1);
      return Wy && Uy && Uy.top < Wy.bottom
    }
    class CW extends qU {
      constructor(yb, bb) {
        super(yb), this.mark = bb
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (yb, bb) {
        let Wy = new CW(bb || document.createElement(yb.tagName), yb);
        return bb || (Wy.flags |= 4), Wy
      }
    }
    class TW extends eW {
      constructor(yb, bb) {
        super(yb, bb.length), this.text = bb
      }
      sync(yb) {
        2 & this.flags || (super.sync(yb), this.dom.nodeValue != this.text && (yb && yb.node == this.dom && (yb.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(yb, bb) {
        let Wy = this.dom.nodeValue.length;
        yb > Wy && (yb = Wy);
        let Uy = yb,
          hy = yb,
          fy = 0;
        0 == yb && bb < 0 || yb == Wy && bb >= 0 ? gb.chrome || gb.gecko || (yb ? (Uy--, fy = 1) : hy < Wy && (hy++, fy = -1)) : bb < 0 ? Uy-- : hy < Wy && hy++;
        let Zy = Ub(this.dom, Uy, hy).getClientRects();
        if (!Zy.length) return null;
        let cb = Zy[(fy ? fy < 0 : bb >= 0) ? 0 : Zy.length - 1];
        return gb.safari && !fy && 0 == cb.width && (cb = Array.prototype.find.call(Zy, (yb => yb.width)) || cb), fy ? zb(cb, fy < 0) : cb || null
      }
      static of (yb, bb) {
        let Wy = new TW(bb || document.createTextNode(yb), yb);
        return bb || (Wy.flags |= 2), Wy
      }
    }
    class VW extends eW {
      constructor(yb, bb, Wy, Uy) {
        super(yb, bb, Uy), this.widget = Wy
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(yb) {
        return !(48 & this.flags) && (this.flags & (yb < 0 ? 64 : 128)) > 0
      }
      coordsIn(yb, bb) {
        return this.coordsInWidget(yb, bb, !1)
      }
      coordsInWidget(yb, bb, Wy) {
        let Uy = this.widget.coordsAt(this.dom, yb, bb);
        if (Uy) return Uy;
        if (Wy) return zb(this.dom.getBoundingClientRect(), this.length ? 0 == yb : bb <= 0);
        {
          let bb = this.dom.getClientRects(),
            Wy = null;
          if (!bb.length) return null;
          let Uy = !!(16 & this.flags) || !(32 & this.flags) && yb > 0;
          for (let hy = Uy ? bb.length - 1 : 0; Wy = bb[hy], !(yb > 0 ? 0 == hy : hy == bb.length - 1 || Wy.top < Wy.bottom); hy += Uy ? -1 : 1);
          return zb(Wy, !Uy)
        }
      }
      get overrideDOMText() {
        if (!this.length) return Uy.K.empty;
        let {
          root: yb
        } = this;
        if (!yb) return Uy.K.empty;
        let bb = this.posAtStart;
        return yb.view.state.doc.slice(bb, bb + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (yb, bb, Wy, Uy, hy) {
        return hy || (hy = yb.toDOM(bb), yb.editable || (hy.contentEditable = "false")), new VW(hy, Wy, yb, Uy)
      }
    }
    class JW extends eW {
      constructor(yb) {
        let bb = document.createElement("img");
        bb.className = "cm-widgetBuffer", bb.setAttribute("aria-hidden", "true"), super(bb, 0, yb)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return Uy.K.empty
      }
      coordsIn(yb) {
        return this.dom.getBoundingClientRect()
      }
    }
    class gU {
      constructor(yb) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = yb
      }
      advance(yb, bb, Wy) {
        let {
          tile: Uy,
          index: hy,
          beforeBreak: fy,
          parents: Zy
        } = this;
        for (; yb || bb > 0;)
          if (Uy.isComposite())
            if (fy) {
              if (!yb) break;
              Wy && Wy.break(), yb--, fy = !1
            } else if (hy == Uy.children.length) {
          if (!yb && !Zy.length) break;
          Wy && Wy.qh(Uy), fy = !!Uy.breakAfter, ({
            tile: Uy,
            index: hy
          } = Zy.pop()), hy++
        } else {
          let cb = Uy.children[hy],
            Py = cb.breakAfter;
          !(bb > 0 ? cb.length <= yb : cb.length < yb) || Wy && !1 === Wy.skip(cb, 0, cb.length) && cb.isComposite ? (Zy.push({
            tile: Uy,
            index: hy
          }), Uy = cb, hy = 0, Wy && cb.isComposite() && Wy.enter(cb)) : (fy = !!Py, hy++, yb -= cb.length)
        } else if (hy == Uy.length) fy = !!Uy.breakAfter, ({
          tile: Uy,
          index: hy
        } = Zy.pop()), hy++;
        else {
          if (!yb) break;
          {
            let bb = Math.min(yb, Uy.length - hy);
            Wy && Wy.skip(Uy, hy, hy + bb), yb -= bb, hy += bb
          }
        }
        return this.tile = Uy, this.index = hy, this.beforeBreak = fy, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class GW {
      constructor(yb, bb, Wy, Uy) {
        this.from = yb, this.to = bb, this.wrapper = Wy, this.rank = Uy
      }
    }
    class OW {
      constructor(yb, bb, Wy) {
        this.cache = yb, this.root = bb, this.blockWrappers = Wy, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(yb, bb, Wy, Uy) {
        var hy;
        this.flushBuffer();
        let fy = this.ensureMarks(bb, Wy),
          Zy = fy.lastChild;
        if (Zy && Zy.isText() && !(8 & Zy.flags) && Zy.length + yb.length < 512) {
          this.cache.reused.set(Zy, 2), (fy.children[fy.children.length - 1] = new TW(Zy.dom, Zy.text + yb)).parent = fy
        } else fy.append(Uy || TW.of(yb, null === (hy = this.cache.find(TW)) || void 0 === hy ? void 0 : hy.dom));
        this.pos += yb.length, this.afterWidget = null
      }
      addComposition(yb, bb) {
        let Wy = this.curLine;
        Wy.dom != bb.line.dom && (Wy.setDOM(this.cache.reused.has(bb.line) ? nW(bb.line.dom) : bb.line.dom), this.cache.reused.set(bb.line, 2));
        let Uy = Wy;
        for (let Zy = bb.marks.length - 1; Zy >= 0; Zy--) {
          let yb = bb.marks[Zy],
            Wy = Uy.lastChild;
          if (Wy instanceof CW && Wy.mark.eq(yb.mark)) Wy.dom != yb.dom && Wy.setDOM(nW(yb.dom)), Uy = Wy;
          else {
            if (this.cache.reused.get(yb)) {
              let bb = eW.get(yb.dom);
              bb && bb.setDOM(nW(yb.dom))
            }
            let bb = CW.of(yb.mark, yb.dom);
            Uy.append(bb), Uy = bb
          }
          this.cache.reused.set(yb, 2)
        }
        let hy = eW.get(yb.text);
        hy && this.cache.reused.set(hy, 2);
        let fy = new TW(yb.text, yb.text.nodeValue);
        fy.flags |= 8, Uy.append(fy)
      }
      addInlineWidget(yb, bb, Wy) {
        let Uy = this.afterWidget && 48 & yb.flags && (48 & this.afterWidget.flags) == (48 & yb.flags);
        Uy || this.flushBuffer();
        let hy = this.ensureMarks(bb, Wy);
        Uy || 16 & yb.flags || hy.append(this.getBuffer(1)), hy.append(yb), this.pos += yb.length, this.afterWidget = yb
      }
      addMark(yb, bb, Wy) {
        this.flushBuffer(), this.ensureMarks(bb, Wy).append(yb), this.pos += yb.length, this.afterWidget = null
      }
      addBlockWidget(yb) {
        this.getBlockPos().append(yb), this.pos += yb.length, this.lastBlock = yb, this.endLine()
      }
      continueWidget(yb) {
        (this.afterWidget || this.lastBlock).length += yb, this.pos += yb
      }
      addLineStart(yb, bb) {
        var Wy;
        yb || (yb = XW);
        let Uy = lW.start(yb, bb || (null === (Wy = this.cache.find(lW)) || void 0 === Wy ? void 0 : Wy.dom), !!bb);
        this.getBlockPos().append(this.lastBlock = this.curLine = Uy)
      }
      addLine(yb) {
        this.getBlockPos().append(yb), this.pos += yb.length, this.lastBlock = yb, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(yb) {
        this.blockPosCovered() || this.addLineStart(yb)
      }
      ensureLine(yb) {
        this.curLine || this.addLineStart(yb)
      }
      ensureMarks(yb, bb) {
        var Wy;
        let Uy = this.curLine;
        for (let hy = yb.length - 1; hy >= 0; hy--) {
          let fy, Zy = yb[hy];
          if (bb > 0 && (fy = Uy.lastChild) && fy instanceof CW && fy.mark.eq(Zy)) Uy = fy, bb--;
          else {
            let yb = CW.of(Zy, null === (Wy = this.cache.find(CW, (yb => yb.mark.eq(Zy)))) || void 0 === Wy ? void 0 : Wy.dom);
            Uy.append(yb), Uy = yb, bb = 0
          }
        }
        return Uy
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let yb = this.curLine.lastChild;
          yb && YW(this.curLine, !1) && ("BR" == yb.dom.nodeName || !yb.isWidget() || gb.ios && YW(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(rU, 0, 32) || new VW(rU.toDOM(), 0, rU, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let yb = this.wrappers.length - 1; yb >= 0; yb--) this.wrappers[yb].to < this.pos && this.wrappers.splice(yb, 1);
        for (let yb = this.blockWrappers; yb.value && yb.from <= this.pos; yb.next())
          if (yb.to >= this.pos) {
            let bb = new GW(yb.from, yb.to, yb.value, yb.rank),
              Wy = this.wrappers.length;
            for (; Wy > 0 && (this.wrappers[Wy - 1].rank - bb.rank || this.wrappers[Wy - 1].to - bb.to) < 0;) Wy--;
            this.wrappers.splice(Wy, 0, bb)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var yb;
        this.updateBlockWrappers();
        let bb = this.root;
        for (let Wy of this.wrappers) {
          let Uy = bb.lastChild;
          if (Wy.from < this.pos && Uy instanceof EW && Uy.wrapper.eq(Wy.wrapper)) bb = Uy;
          else {
            let Uy = EW.of(Wy.wrapper, null === (yb = this.cache.find(EW, (yb => yb.wrapper.eq(Wy.wrapper)))) || void 0 === yb ? void 0 : yb.dom);
            bb.append(Uy), bb = Uy
          }
        }
        return bb
      }
      blockPosCovered() {
        let yb = this.lastBlock;
        return null != yb && !yb.breakAfter && (!yb.isWidget() || (160 & yb.flags) > 0)
      }
      getBuffer(yb) {
        let bb = 2 | (yb < 0 ? 16 : 32),
          Wy = this.cache.find(JW, void 0, 1);
        return Wy && (Wy.flags = bb), Wy || new JW(bb)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class RW {
      constructor(yb) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = yb.iter()
      }
      skip(yb) {
        this.textOff + yb <= this.text.length ? this.textOff += yb : (this.skipCount += yb - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(yb) {
        if (this.textOff == this.text.length) {
          let {
            value: bb,
            lineBreak: Wy,
            done: Uy
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, Uy) throw new Error("Ran out of text content when drawing inline views");
          this.text = bb;
          let hy = this.textOff = Math.min(yb, bb.length);
          return Wy ? null : bb.slice(0, hy)
        }
        let bb = Math.min(this.text.length, this.textOff + yb),
          Wy = this.text.slice(this.textOff, bb);
        return this.textOff = bb, Wy
      }
    }
    const vU = [VW, lW, TW, CW, JW, EW, SW];
    for (let XZ = 0; XZ < vU.length; XZ++) vU[XZ].bucket = XZ;
    class iU {
      constructor(yb) {
        this.view = yb, this.buckets = vU.map((() => [])), this.index = vU.map((() => 0)), this.reused = new Map
      }
      add(yb) {
        let bb = yb.constructor.bucket,
          Wy = this.buckets[bb];
        Wy.length < 6 ? Wy.push(yb) : Wy[this.index[bb] = (this.index[bb] + 1) % 6] = yb
      }
      find(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          Uy = yb.bucket,
          hy = this.buckets[Uy],
          fy = this.index[Uy];
        for (let Zy = hy.length - 1; Zy >= 0; Zy--) {
          let yb = (Zy + fy) % hy.length,
            cb = hy[yb];
          if ((!bb || bb(cb)) && !this.reused.has(cb)) return hy.splice(yb, 1), yb < fy && this.index[Uy]--, this.reused.set(cb, Wy), cb
        }
        return null
      }
      findWidget(yb, bb, Wy) {
        let Uy = this.buckets[0];
        if (Uy.length)
          for (let hy = 0, fy = 0;; hy++) {
            if (hy == Uy.length) {
              if (fy) return null;
              fy = 1, hy = 0
            }
            let Zy = Uy[hy];
            if (!this.reused.has(Zy) && (0 == fy ? Zy.widget.compare(yb) : Zy.widget.constructor == yb.constructor && yb.updateDOM(Zy.dom, this.view, Zy.widget))) return Uy.splice(hy, 1), hy < this.index[0] && this.index[0]--, Zy.widget == yb && Zy.length == bb && (497 & Zy.flags) == Wy ? (this.reused.set(Zy, 1), Zy) : (this.reused.set(Zy, 2), new VW(Zy.dom, bb, yb, -498 & Zy.flags | Wy))
          }
      }
      reuse(yb) {
        return this.reused.set(yb, 1), yb
      }
      maybeReuse(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(yb)) return this.reused.set(yb, bb), yb.dom
      }
      clear() {
        for (let yb = 0; yb < this.buckets.length; yb++) this.buckets[yb].length = this.index[yb] = 0
      }
    }
    class MW {
      constructor(yb, bb, Wy, hy, fy) {
        this.view = yb, this.PZ = hy, this.disallowBlockEffectsFor = fy, this.openWidget = !1, this.openMarks = 0, this.cache = new iU(yb), this.text = new RW(yb.state.doc), this.builder = new OW(this.cache, new SW(yb, yb.contentDOM), Uy.E.iter(Wy)), this.cache.reused.set(bb, 2), this.old = new gU(bb), this.reuseWalker = {
          skip: (yb, bb, Wy) => {
            if (this.cache.add(yb), yb.isComposite()) return !1
          },
          enter: yb => this.cache.add(yb),
          qh: () => {},
          break: () => {}
        }
      }
      run(yb, bb) {
        let Wy = bb && this.getCompositionContext(bb.text);
        for (let Uy = 0, hy = 0, fy = 0;;) {
          let Zy = fy < yb.length ? yb[fy++] : null,
            cb = Zy ? Zy.fromA : this.old.root.length;
          if (cb > Uy) {
            let yb = cb - Uy;
            this.preserve(yb, !fy, !Zy), Uy = cb, hy += yb
          }
          if (!Zy) break;
          bb && Zy.fromA <= bb.range.fromA && Zy.toA >= bb.range.toA ? (this.forward(Zy.fromA, bb.range.fromA, bb.range.fromA < bb.range.toA ? 1 : -1), this.emit(hy, bb.range.fromB), this.cache.clear(), this.builder.addComposition(bb, Wy), this.text.skip(bb.range.toB - bb.range.fromB), this.forward(bb.range.fromA, Zy.toA), this.emit(bb.range.toB, Zy.toB)) : (this.forward(Zy.fromA, Zy.toA), this.emit(hy, Zy.toB)), hy = Zy.toB, Uy = Zy.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(yb, bb, Wy) {
        let Uy = function(yb) {
            let bb = [];
            for (let Wy = yb.parents.length; Wy > 1; Wy--) {
              let Uy = Wy == yb.parents.length ? yb.tile : yb.parents[Wy].tile;
              Uy instanceof CW && bb.push(Uy.mark)
            }
            return bb
          }(this.old),
          hy = this.openMarks;
        this.old.advance(yb, Wy ? 1 : -1, {
          skip: (yb, bb, Wy) => {
            if (yb.isWidget())
              if (this.openWidget) this.builder.continueWidget(Wy - bb);
              else {
                let fy = Wy > 0 || bb < yb.length ? VW.of(yb.widget, this.view, Wy - bb, 496 & yb.flags, this.cache.maybeReuse(yb)) : this.cache.reuse(yb);
                256 & fy.flags ? (fy.flags &= -2, this.builder.addBlockWidget(fy)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(fy, Uy, hy), hy = Uy.length)
              }
            else if (yb.isText()) this.builder.ensureLine(null), bb || Wy != yb.length || this.cache.reused.has(yb) ? (this.cache.add(yb), this.builder.addText(yb.text.slice(bb, Wy), Uy, hy)) : this.builder.addText(yb.text, Uy, hy, this.cache.reuse(yb)), hy = Uy.length;
            else if (yb.isLine()) yb.flags &= -2, this.cache.reused.set(yb, 1), this.builder.addLine(yb);
            else if (yb instanceof JW) this.cache.add(yb);
            else {
              if (!(yb instanceof CW)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(yb, Uy, hy), this.cache.reused.set(yb, 1), hy = Uy.length
            }
            this.openWidget = !1
          },
          enter: yb => {
            yb.isLine() ? this.builder.addLineStart(yb.attrs, this.cache.maybeReuse(yb)) : (this.cache.add(yb), yb instanceof CW && Uy.unshift(yb.mark)), this.openWidget = !1
          },
          qh: yb => {
            yb.isLine() ? Uy.length && (Uy.length = hy = 0) : yb instanceof CW && (Uy.shift(), hy = Math.min(hy, Uy.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(yb)
      }
      emit(yb, bb) {
        let Wy = null,
          hy = this.builder,
          fy = 0,
          Zy = Uy.E.spans(this.PZ, yb, bb, {
            point: (yb, bb, Uy, Zy, cb, Py) => {
              if (Uy instanceof rb) {
                if (this.disallowBlockEffectsFor[Py]) {
                  if (Uy.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (bb > this.view.state.doc.lineAt(yb).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (fy = Zy.length, cb > Zy.length) hy.continueWidget(bb - yb);
                else {
                  let fy = Uy.widget || (Uy.block ? uW.block : uW.inline),
                    Py = function(yb) {
                      let bb = yb.isReplace ? (yb.startSide < 0 ? 64 : 0) | (yb.endSide > 0 ? 128 : 0) : yb.startSide > 0 ? 32 : 16;
                      yb.block && (bb |= 256);
                      return bb
                    }(Uy),
                    oy = this.cache.findWidget(fy, bb - yb, Py) || VW.of(fy, this.view, bb - yb, Py);
                  Uy.block ? (Uy.startSide > 0 && hy.addLineStartIfNotCovered(Wy), hy.addBlockWidget(oy)) : (hy.ensureLine(Wy), hy.addInlineWidget(oy, Zy, cb))
                }
                Wy = null
              } else Wy = function(yb, bb) {
                let Wy = bb.spec.attributes,
                  Uy = bb.spec.class;
                if (!Wy && !Uy) return yb;
                yb || (yb = {
                  class: "cm-line"
                });
                Wy && Gy(Wy, yb);
                Uy && (yb.class += " " + Uy);
                return yb
              }(Wy, Uy);
              bb > yb && this.text.skip(bb - yb)
            },
            span: (yb, bb, Uy, fy) => {
              for (let Zy = yb; Zy < bb;) {
                let cb = this.text.next(Math.min(512, bb - Zy));
                null == cb ? (hy.addLineStartIfNotCovered(Wy), hy.addBreak(), Zy++) : (hy.ensureLine(Wy), hy.addText(cb, Uy, Zy == yb ? fy : Uy.length), Zy += cb.length), Wy = null
              }
            }
          });
        hy.addLineStartIfNotCovered(Wy), this.openWidget = Zy > fy, this.openMarks = Zy
      }
      forward(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        bb - yb <= 10 ? this.old.advance(bb - yb, Wy, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(bb - yb - 10, -1), this.old.advance(5, Wy, this.reuseWalker))
      }
      getCompositionContext(yb) {
        let bb = [],
          Wy = null;
        for (let Uy = yb.parentNode;; Uy = Uy.parentNode) {
          let yb = eW.get(Uy);
          if (Uy == this.view.contentDOM) break;
          yb instanceof CW ? bb.push(yb) : (null === yb || void 0 === yb ? void 0 : yb.isLine()) ? Wy = yb : yb instanceof EW || ("DIV" != Uy.nodeName || Wy || Uy == this.view.contentDOM ? Wy || bb.push(CW.of(new ny({
            tagName: Uy.nodeName.toLowerCase(),
            attributes: ib(Uy)
          }), Uy)) : Wy = new lW(Uy, XW))
        }
        return {
          line: Wy,
          marks: bb
        }
      }
    }

    function YW(yb, bb) {
      let Wy = yb => {
        for (let Uy of yb.children)
          if ((bb ? Uy.isText() : Uy.length) || Wy(Uy)) return !0;
        return !1
      };
      return Wy(yb)
    }
    const XW = {
      class: "cm-line"
    };

    function nW(yb) {
      let bb = eW.get(yb);
      return bb && bb.setDOM(yb.cloneNode()), yb
    }
    class uW extends My {
      constructor(yb) {
        super(), this.tag = yb
      }
      eq(yb) {
        return yb.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(yb) {
        return yb.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    uW.inline = new uW("span"), uW.block = new uW("div");
    const rU = new class extends My {
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
    class HW {
      constructor(yb) {
        this.view = yb, this.PZ = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Xy.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new SW(yb, yb.contentDOM), this.updateInner([new oW(0, 0, 0, yb.state.doc.length)], null)
      }
      update(yb) {
        var bb;
        let Wy = yb.changedRanges;
        this.minWidth > 0 && Wy.length && (Wy.every((yb => {
          let {
            fromA: bb,
            toA: Wy
          } = yb;
          return Wy < this.minWidthFrom || bb > this.minWidthTo
        })) ? (this.minWidthFrom = yb.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = yb.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(yb);
        let hy = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (bb = this.domChanged) || void 0 === bb ? void 0 : bb.newSel) ? hy = this.domChanged.newSel.head : function(yb, bb) {
          let Wy = !1;
          bb && yb.iterChangedRanges(((yb, Uy) => {
            yb < bb.to && Uy > bb.from && (Wy = !0)
          }));
          return Wy
        }(yb.changes, this.hasComposition) || yb.selectionSet || (hy = yb.state.selection.main.head));
        let fy = hy > -1 ? function(yb, bb, Wy) {
          let Uy = FW(yb, Wy);
          if (!Uy) return null;
          let {
            node: hy,
            from: fy,
            to: Zy
          } = Uy, cb = hy.nodeValue;
          if (/[\n\r]/.test(cb)) return null;
          if (yb.state.doc.sliceString(Uy.from, Uy.to) != cb) return null;
          let Py = bb.invertedDesc;
          return {
            range: new oW(Py.mapPos(fy), Py.mapPos(Zy), fy, Zy),
            text: hy
          }
        }(this.view, yb.changes, hy) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: bb,
            to: Uy
          } = this.hasComposition;
          Wy = new oW(bb, Uy, yb.changes.mapPos(bb, -1), yb.changes.mapPos(Uy, 1)).addToSet(Wy.slice())
        }
        this.hasComposition = fy ? {
          from: fy.range.fromB,
          to: fy.range.toB
        } : null, (gb.ie || gb.chrome) && !fy && yb && yb.state.doc.lines != yb.startState.doc.lines && (this.forceSelection = !0);
        let Zy = this.PZ,
          cb = this.blockWrappers;
        this.updateDeco();
        let Py = function(yb, bb, Wy) {
          let hy = new pW;
          return Uy.E.compare(yb, bb, Wy, hy), hy.changes
        }(Zy, this.PZ, yb.changes);
        Py.length && (Wy = oW.extendWithRanges(Wy, Py));
        let oy = function(yb, bb, Wy) {
          let hy = new LW;
          return Uy.E.compare(yb, bb, Wy, hy), hy.changes
        }(cb, this.blockWrappers, yb.changes);
        return oy.length && (Wy = oW.extendWithRanges(Wy, oy)), fy && !Wy.some((yb => yb.fromA <= fy.range.fromA && yb.toA >= fy.range.toA)) && (Wy = fy.range.addToSet(Wy.slice())), !(2 & this.tile.flags && 0 == Wy.length) && (this.updateInner(Wy, fy), yb.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(yb, bb) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: Wy
        } = this.view;
        Wy.ignore((() => {
          if (bb || yb.length) {
            let Wy = this.tile,
              Uy = new MW(this.view, Wy, this.blockWrappers, this.PZ, this.dynamicDecorationMap);
            bb && eW.get(bb.text) && Uy.cache.reused.set(eW.get(bb.text), 2), this.tile = Uy.run(yb, bb), aU(Wy, Uy.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let Uy = gb.chrome || gb.ios ? {
            node: Wy.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(Uy), !Uy || !Uy.written && Wy.selectionRange.focusNode == Uy.node && this.tile.dom.contains(Uy.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let Uy = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let hy of this.tile.children) hy.isWidget() && hy.widget instanceof QW && Uy.push(hy.dom);
        Wy.updateGaps(Uy)
      }
      updateEditContextFormatting(yb) {
        this.editContextFormatting = this.editContextFormatting.map(yb.changes);
        for (let bb of yb.transactions)
          for (let yb of bb.effects) yb.is(tW) && (this.editContextFormatting = yb.value)
      }
      updateSelection() {
        let yb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: bb
        } = this.tile, Wy = this.view.root.activeElement, Uy = Wy == bb, hy = !Uy && !(this.view.state.facet(kW) || bb.tabIndex > -1) && Qy(bb, this.view.observer.selectionRange) && !(Wy && bb.contains(Wy));
        if (!(Uy || yb || hy)) return;
        let fy = this.forceSelection;
        this.forceSelection = !1;
        let Zy, cb, Py = this.view.state.selection.main;
        if (Py.empty ? cb = Zy = this.inlineDOMNearPos(Py.anchor, Py.assoc || 1) : (cb = this.inlineDOMNearPos(Py.head, Py.head == Py.from ? 1 : -1), Zy = this.inlineDOMNearPos(Py.anchor, Py.anchor == Py.from ? 1 : -1)), gb.gecko && Py.empty && !this.hasComposition && (1 == (oy = Zy).node.nodeType && oy.node.firstChild && (0 == oy.offset || "false" == oy.node.childNodes[oy.offset - 1].contentEditable) && (oy.offset == oy.node.childNodes.length || "false" == oy.node.childNodes[oy.offset].contentEditable))) {
          let yb = document.createTextNode("");
          this.view.observer.ignore((() => Zy.node.insertBefore(yb, Zy.node.childNodes[Zy.offset] || null))), Zy = cb = new Pb(yb, 0), fy = !0
        }
        var oy;
        let By = this.view.observer.selectionRange;
        !fy && By.focusNode && (Dy(Zy.node, Zy.offset, By.anchorNode, By.anchorOffset) && Dy(cb.node, cb.offset, By.focusNode, By.focusOffset) || this.suppressWidgetCursorChange(By, Py)) || (this.view.observer.ignore((() => {
          gb.android && gb.chrome && bb.contains(By.focusNode) && function(yb, bb) {
            for (let Wy = yb; Wy && Wy != bb; Wy = Wy.assignedSlot || Wy.parentNode)
              if (1 == Wy.nodeType && "false" == Wy.contentEditable) return !0;
            return !1
          }(By.focusNode, bb) && (bb.blur(), bb.focus({
            preventScroll: !0
          }));
          let yb = py(this.view.root);
          if (yb)
            if (Py.empty) {
              if (gb.gecko) {
                let yb = (Uy = Zy.node, fy = Zy.offset, 1 != Uy.nodeType ? 0 : (fy && "false" == Uy.childNodes[fy - 1].contentEditable ? 1 : 0) | (fy < Uy.childNodes.length && "false" == Uy.childNodes[fy].contentEditable ? 2 : 0));
                if (yb && 3 != yb) {
                  let bb = (1 == yb ? Zb : cW)(Zy.node, Zy.offset);
                  bb && (Zy = new Pb(bb.node, bb.offset))
                }
              }
              yb.collapse(Zy.node, Zy.offset), null != Py.bidiLevel && void 0 !== yb.caretBidiLevel && (yb.caretBidiLevel = Py.bidiLevel)
            } else if (yb.extend) {
            yb.collapse(Zy.node, Zy.offset);
            try {
              yb.extend(cb.node, cb.offset)
            } catch (oy) {}
          } else {
            let bb = document.createRange();
            Py.anchor > Py.head && ([Zy, cb] = [cb, Zy]), bb.setEnd(cb.node, cb.offset), bb.setStart(Zy.node, Zy.offset), yb.removeAllRanges(), yb.addRange(bb)
          } else;
          var Uy, fy;
          hy && this.view.root.activeElement == bb && (bb.blur(), Wy && Wy.focus())
        })), this.view.observer.setSelectionRange(Zy, cb)), this.impreciseAnchor = Zy.precise ? null : new Pb(By.anchorNode, By.anchorOffset), this.impreciseHead = cb.precise ? null : new Pb(By.focusNode, By.focusOffset)
      }
      suppressWidgetCursorChange(yb, bb) {
        return this.hasComposition && bb.empty && Dy(yb.focusNode, yb.focusOffset, yb.anchorNode, yb.anchorOffset) && this.posFromDOM(yb.focusNode, yb.focusOffset) == bb.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: yb
        } = this, bb = yb.state.selection.main, Wy = py(yb.root), {
          anchorNode: Uy,
          anchorOffset: hy
        } = yb.observer.selectionRange;
        if (!Wy || !bb.empty || !bb.assoc || !Wy.modify) return;
        let fy = this.lineAt(bb.head, bb.assoc);
        if (!fy) return;
        let Zy = fy.posAtStart;
        if (bb.head == Zy || bb.head == Zy + fy.length) return;
        let cb = this.coordsAt(bb.head, -1),
          Py = this.coordsAt(bb.head, 1);
        if (!cb || !Py || cb.bottom > Py.top) return;
        let oy = this.domAtPos(bb.head + bb.assoc, bb.assoc);
        Wy.collapse(oy.node, oy.offset), Wy.modify("move", bb.assoc < 0 ? "forward" : "backward", "lineboundary"), yb.observer.readSelectionRange();
        let By = yb.observer.selectionRange;
        yb.docView.posFromDOM(By.anchorNode, By.anchorOffset) != bb.from && Wy.collapse(Uy, hy)
      }
      posFromDOM(yb, bb) {
        let Wy = this.tile.nearest(yb);
        if (!Wy) return 2 & this.tile.dom.compareDocumentPosition(yb) ? 0 : this.view.state.doc.length;
        let Uy = Wy.posAtStart;
        if (!Wy.isComposite()) return Wy.isText() ? yb == Wy.dom ? Uy + bb : Uy + (bb ? Wy.length : 0) : Uy;
        {
          let hy;
          if (yb == Wy.dom) hy = Wy.dom.childNodes[bb];
          else {
            let Uy = 0 == Ny(yb) ? 0 : 0 == bb ? -1 : 1;
            for (;;) {
              let bb = yb.parentNode;
              if (bb == Wy.dom) break;
              0 == Uy && bb.firstChild != bb.lastChild && (Uy = yb == bb.firstChild ? -1 : 1), yb = bb
            }
            hy = Uy < 0 ? yb : yb.nextSibling
          }
          if (hy == Wy.dom.firstChild) return Uy;
          for (; hy && !eW.get(hy);) hy = hy.nextSibling;
          if (!hy) return Uy + Wy.length;
          for (let yb = 0, bb = Uy;; yb++) {
            let Uy = Wy.children[yb];
            if (Uy.dom == hy) return bb;
            bb += Uy.length + Uy.breakAfter
          }
        }
      }
      domAtPos(yb, bb) {
        let {
          tile: Wy,
          offset: Uy
        } = this.tile.resolveBlock(yb, bb);
        return Wy.isWidget() ? Wy.domPosFor(yb, bb) : Wy.domIn(Uy, bb)
      }
      inlineDOMNearPos(yb, bb) {
        let Wy, Uy, hy = -1,
          fy = !1,
          Zy = -1,
          cb = !1;
        return this.tile.blockTiles(((bb, Py) => {
          if (bb.isWidget()) {
            if (32 & bb.flags && Py >= yb) return !0;
            16 & bb.flags && (fy = !0)
          } else {
            let oy = Py + bb.length;
            if (Py <= yb && (Wy = bb, hy = yb - Py, fy = oy < yb), oy >= yb && !Uy && (Uy = bb, Zy = yb - Py, cb = Py > yb), Py > yb && Uy) return !0
          }
        })), Wy || Uy ? (fy && Uy ? Wy = null : cb && Wy && (Uy = null), Wy && bb < 0 || !Uy ? Wy.domIn(hy, bb) : Uy.domIn(Zy, bb)) : this.domAtPos(yb, bb)
      }
      coordsAt(yb, bb) {
        let {
          tile: Wy,
          offset: Uy
        } = this.tile.resolveBlock(yb, bb);
        return Wy.isWidget() ? Wy.widget instanceof QW ? null : Wy.coordsInWidget(Uy, bb, !0) : Wy.coordsIn(Uy, bb)
      }
      lineAt(yb, bb) {
        let {
          tile: Wy
        } = this.tile.resolveBlock(yb, bb);
        return Wy.isLine() ? Wy : null
      }
      coordsForChar(yb) {
        let {
          tile: bb,
          offset: Wy
        } = this.tile.resolveBlock(yb, 1);
        if (!bb.isLine()) return null;
        return function yb(bb, Wy) {
          if (bb.isComposite())
            for (let Uy of bb.children) {
              if (Uy.length >= Wy) {
                let bb = yb(Uy, Wy);
                if (bb) return bb
              }
              if ((Wy -= Uy.length) < 0) break
            } else if (bb.isText() && Wy < bb.length) {
              let yb = (0, Uy.db)(bb.text, Wy);
              if (yb == Wy) return null;
              let hy = Ub(bb.dom, Wy, yb).getClientRects();
              for (let bb = 0; bb < hy.length; bb++) {
                let yb = hy[bb];
                if (bb == hy.length - 1 || yb.top < yb.bottom && yb.left < yb.right) return yb
              }
            } return null
        }(bb, Wy)
      }
      measureVisibleLineHeights(yb) {
        let bb = [],
          {
            from: Wy,
            to: Uy
          } = yb,
          hy = this.view.contentDOM.clientWidth,
          fy = hy > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          Zy = -1,
          cb = this.view.textDirection == ob.LTR,
          Py = 0,
          oy = (yb, By, Ky) => {
            for (let ey = 0; ey < yb.children.length && !(By > Uy); ey++) {
              let Uy = yb.children[ey],
                qb = By + Uy.length,
                sy = Uy.dom.getBoundingClientRect(),
                {
                  height: Sy
                } = sy;
              if (Ky && !ey && (Py += sy.top - Ky.top), Uy instanceof EW) qb > Wy && oy(Uy, By, sy);
              else if (By >= Wy && (Py > 0 && bb.push(-Py), bb.push(Sy + Py), Py = 0, fy)) {
                let yb = Uy.dom.lastChild,
                  bb = yb ? jb(yb) : [];
                if (bb.length) {
                  let yb = bb[bb.length - 1],
                    Wy = cb ? yb.right - sy.left : sy.right - yb.left;
                  Wy > Zy && (Zy = Wy, this.minWidth = hy, this.minWidthFrom = By, this.minWidthTo = qb)
                }
              }
              Ky && ey == yb.children.length - 1 && (Py += Ky.bottom - sy.bottom), By = qb + Uy.breakAfter
            }
          };
        return oy(this.tile, 0, null), bb
      }
      textDirectionAt(yb) {
        let {
          tile: bb
        } = this.tile.resolveBlock(yb, 1);
        return "rtl" == getComputedStyle(bb.dom).direction ? ob.RTL : ob.LTR
      }
      measureTextSize() {
        let yb = this.tile.blockTiles((yb => {
          if (yb.isLine() && yb.children.length && yb.length <= 20) {
            let bb, Wy = 0;
            for (let Uy of yb.children) {
              if (!Uy.isText() || /[^ -~]/.test(Uy.text)) return;
              let yb = jb(Uy.dom);
              if (1 != yb.length) return;
              Wy += yb[0].width, bb = yb[0].height
            }
            if (Wy) return {
              lineHeight: yb.dom.getBoundingClientRect().height,
              charWidth: Wy / yb.length,
              textHeight: bb
            }
          }
        }));
        if (yb) return yb;
        let bb, Wy, Uy, hy = document.createElement("div");
        return hy.className = "cm-line", hy.style.width = "99999px", hy.style.position = "absolute", hy.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(hy);
          let yb = jb(hy.firstChild)[0];
          bb = hy.getBoundingClientRect().height, Wy = yb && yb.width ? yb.width / 27 : 7, Uy = yb && yb.height ? yb.height : bb, hy.remove()
        })), {
          lineHeight: bb,
          charWidth: Wy,
          textHeight: Uy
        }
      }
      computeBlockGapDeco() {
        let yb = [],
          bb = this.view.viewState;
        for (let Wy = 0, Uy = 0;; Uy++) {
          let hy = Uy == bb.viewports.length ? null : bb.viewports[Uy],
            fy = hy ? hy.from - 1 : this.view.state.doc.length;
          if (fy > Wy) {
            let Uy = (bb.lineBlockAt(fy).bottom - bb.lineBlockAt(Wy).top) / this.view.scaleY;
            yb.push(Xy.replace({
              widget: new QW(Uy),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(Wy, fy))
          }
          if (!hy) break;
          Wy = hy.to + 1
        }
        return Xy.set(yb)
      }
      updateDeco() {
        let yb = 1,
          bb = this.view.state.facet(yU).map((bb => (this.dynamicDecorationMap[yb++] = "function" == typeof bb) ? bb(this.view) : bb)),
          Wy = !1,
          hy = this.view.state.facet(WW).map(((yb, bb) => {
            let Uy = "function" == typeof yb;
            return Uy && (Wy = !0), Uy ? yb(this.view) : yb
          }));
        for (hy.length && (this.dynamicDecorationMap[yb++] = Wy, bb.push(Uy.E.join(hy))), this.PZ = [this.editContextFormatting, ...bb, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; yb < this.PZ.length;) this.dynamicDecorationMap[yb++] = !1;
        this.blockWrappers = this.view.state.facet(bU).map((yb => "function" == typeof yb ? yb(this.view) : yb))
      }
      scrollIntoView(yb) {
        var bb;
        if (yb.isSnapshot) {
          let bb = this.view.viewState.lineBlockAt(yb.range.head);
          return this.view.scrollDOM.scrollTop = bb.top - yb.yMargin, void(this.view.scrollDOM.scrollLeft = yb.xMargin)
        }
        for (let By of this.view.state.facet(Qb)) try {
          if (By(this.view, yb.range, yb)) return !0
        } catch (oy) {
          wb(this.view.state, oy, "scroll handler")
        }
        let Wy, {
            range: Uy
          } = yb,
          hy = this.coordsAt(Uy.head, null !== (bb = Uy.assoc) && void 0 !== bb ? bb : Uy.empty ? 0 : Uy.head > Uy.anchor ? -1 : 1);
        if (!hy) return;
        !Uy.empty && (Wy = this.coordsAt(Uy.anchor, Uy.anchor > Uy.head ? -1 : 1)) && (hy = {
          left: Math.min(hy.left, Wy.left),
          top: Math.min(hy.top, Wy.top),
          right: Math.max(hy.right, Wy.right),
          bottom: Math.max(hy.bottom, Wy.bottom)
        });
        let fy = cU(this.view),
          Zy = {
            left: hy.left - fy.left,
            top: hy.top - fy.top,
            right: hy.right + fy.right,
            bottom: hy.bottom + fy.bottom
          },
          {
            offsetWidth: cb,
            offsetHeight: Py
          } = this.view.scrollDOM;
        if (function(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
            let Py = yb.ownerDocument,
              oy = Py.defaultView || window;
            for (let By = yb, Ky = !1; By && !Ky;)
              if (1 == By.nodeType) {
                let yb, ey = By == Py.body,
                  qb = 1,
                  sy = 1;
                if (ey) yb = Iy(oy);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(By).position) && (Ky = !0), By.scrollHeight <= By.clientHeight && By.scrollWidth <= By.clientWidth) {
                    By = By.assignedSlot || By.parentNode;
                    continue
                  }
                  let bb = By.getBoundingClientRect();
                  ({
                    scaleX: qb,
                    scaleY: sy
                  } = xb(By, bb)), yb = {
                    left: bb.left,
                    right: bb.left + By.clientWidth * qb,
                    top: bb.top,
                    bottom: bb.top + By.clientHeight * sy
                  }
                }
                let Sy = 0,
                  Ey = 0;
                if ("nearest" == hy) bb.top < yb.top + Zy ? (Ey = bb.top - (yb.top + Zy), Wy > 0 && bb.bottom > yb.bottom + Ey && (Ey = bb.bottom - yb.bottom + Zy)) : bb.bottom > yb.bottom - Zy && (Ey = bb.bottom - yb.bottom + Zy, Wy < 0 && bb.top - Ey < yb.top && (Ey = bb.top - (yb.top + Zy)));
                else {
                  let Uy = bb.bottom - bb.top,
                    fy = yb.bottom - yb.top;
                  Ey = ("center" == hy && Uy <= fy ? bb.top + Uy / 2 - fy / 2 : "start" == hy || "center" == hy && Wy < 0 ? bb.top - Zy : bb.bottom - fy + Zy) - yb.top
                }
                if ("nearest" == Uy ? bb.left < yb.left + fy ? (Sy = bb.left - (yb.left + fy), Wy > 0 && bb.right > yb.right + Sy && (Sy = bb.right - yb.right + fy)) : bb.right > yb.right - fy && (Sy = bb.right - yb.right + fy, Wy < 0 && bb.left < yb.left + Sy && (Sy = bb.left - (yb.left + fy))) : Sy = ("center" == Uy ? bb.left + (bb.right - bb.left) / 2 - (yb.right - yb.left) / 2 : "start" == Uy == cb ? bb.left - fy : bb.right - (yb.right - yb.left) + fy) - yb.left, Sy || Ey)
                  if (ey) oy.scrollBy(Sy, Ey);
                  else {
                    let yb = 0,
                      Wy = 0;
                    if (Ey) {
                      let yb = By.scrollTop;
                      By.scrollTop += Ey / sy, Wy = (By.scrollTop - yb) * sy
                    }
                    if (Sy) {
                      let bb = By.scrollLeft;
                      By.scrollLeft += Sy / qb, yb = (By.scrollLeft - bb) * qb
                    }
                    bb = {
                      left: bb.left - yb,
                      top: bb.top - Wy,
                      right: bb.right - yb,
                      bottom: bb.bottom - Wy
                    }, yb && Math.abs(yb - Sy) < 1 && (Uy = "nearest"), Wy && Math.abs(Wy - Ey) < 1 && (hy = "nearest")
                  } if (ey) break;
                (bb.top < yb.top || bb.bottom > yb.bottom || bb.left < yb.left || bb.right > yb.right) && (bb = {
                  left: Math.max(bb.left, yb.left),
                  right: Math.min(bb.right, yb.right),
                  top: Math.max(bb.top, yb.top),
                  bottom: Math.min(bb.bottom, yb.bottom)
                }), By = By.assignedSlot || By.parentNode
              } else {
                if (11 != By.nodeType) break;
                By = By.host
              }
          }(this.view.scrollDOM, Zy, Uy.head < Uy.anchor ? -1 : 1, yb.x, yb.y, Math.max(Math.min(yb.xMargin, cb), -cb), Math.max(Math.min(yb.yMargin, Py), -Py), this.view.textDirection == ob.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (hy.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || hy.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let yb = this.view.docView.lineAt(Uy.head, 1);
          yb && yb.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(yb) {
        let bb = yb => yb.isWidget() || yb.children.some(bb);
        return bb(this.tile.resolveBlock(yb, 1).tile)
      }
      destroy() {
        aU(this.tile)
      }
    }

    function aU(yb, bb) {
      let Wy = null === bb || void 0 === bb ? void 0 : bb.get(yb);
      if (1 != Wy) {
        null == Wy && yb.destroy();
        for (let Wy of yb.children) aU(Wy, bb)
      }
    }

    function FW(yb, bb) {
      let Wy = yb.observer.selectionRange;
      if (!Wy.focusNode) return null;
      let Uy = Zb(Wy.focusNode, Wy.focusOffset),
        hy = cW(Wy.focusNode, Wy.focusOffset),
        fy = Uy || hy;
      if (hy && Uy && hy.node != Uy.node) {
        let bb = eW.get(hy.node);
        if (!bb || bb.isText() && bb.text != hy.node.nodeValue) fy = hy;
        else if (yb.docView.lastCompositionAfterCursor) {
          let yb = eW.get(Uy.node);
          !yb || yb.isText() && yb.text != Uy.node.nodeValue || (fy = hy)
        }
      }
      if (yb.docView.lastCompositionAfterCursor = fy != Uy, !fy) return null;
      let Zy = bb - fy.offset;
      return {
        from: Zy,
        to: Zy + fy.node.nodeValue.length,
        node: fy.node
      }
    }
    let pW = class {
      constructor() {
        this.changes = []
      }
      compareRange(yb, bb) {
        ab(yb, bb, this.changes)
      }
      comparePoint(yb, bb) {
        ab(yb, bb, this.changes)
      }
      boundChange(yb) {
        ab(yb, yb, this.changes)
      }
    };
    class LW {
      constructor() {
        this.changes = []
      }
      compareRange(yb, bb) {
        ab(yb, bb, this.changes)
      }
      comparePoint() {}
      boundChange(yb) {
        ab(yb, yb, this.changes)
      }
    }
    class QW extends My {
      constructor(yb) {
        super(), this.height = yb
      }
      toDOM() {
        let yb = document.createElement("div");
        return yb.className = "cm-gap", this.updateDOM(yb), yb
      }
      eq(yb) {
        return yb.height == this.height
      }
      updateDOM(yb) {
        return yb.style.height = this.height + "px", !0
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

    function jU(yb, bb, Wy) {
      let Uy = yb.lineBlockAt(bb);
      if (Array.isArray(Uy.type)) {
        let yb;
        for (let hy of Uy.type) {
          if (hy.from > bb) break;
          if (!(hy.to < bb)) {
            if (hy.from < bb && hy.to > bb) return hy;
            yb && (hy.type != Yy.Text || yb.type == hy.type && !(Wy < 0 ? hy.from < bb : hy.to > bb)) || (yb = hy)
          }
        }
        return yb || Uy
      }
      return Uy
    }

    function DW(yb, bb, Wy, Uy) {
      let hy = yb.state.doc.lineAt(bb.head),
        fy = yb.bidiSpans(hy),
        Zy = yb.textDirectionAt(hy.from);
      for (let cb = bb, Py = null;;) {
        let bb = vW(hy, fy, Zy, cb, Wy),
          oy = Rb;
        if (!bb) {
          if (hy.number == (Wy ? yb.state.doc.lines : 1)) return cb;
          oy = "\n", hy = yb.state.doc.line(hy.number + (Wy ? 1 : -1)), fy = yb.bidiSpans(hy), bb = yb.visualLineSide(hy, !Wy)
        }
        if (Py) {
          if (!Py(oy)) return cb
        } else {
          if (!Uy) return bb;
          Py = Uy(oy)
        }
        cb = bb
      }
    }

    function tU(yb, bb, Wy) {
      for (;;) {
        let Uy = 0;
        for (let hy of yb) hy.between(bb - 1, bb + 1, ((yb, hy, fy) => {
          if (bb > yb && bb < hy) {
            let fy = Uy || Wy || (bb - yb < hy - bb ? -1 : 1);
            bb = fy < 0 ? yb : hy, Uy = fy
          }
        }));
        if (!Uy) return bb
      }
    }

    function wW(yb, bb) {
      let Wy = null;
      for (let hy = 0; hy < bb.lZ.length; hy++) {
        let fy = bb.lZ[hy],
          Zy = null;
        if (fy.empty) {
          let bb = tU(yb, fy.from, 0);
          bb != fy.from && (Zy = Uy.n.cursor(bb, -1))
        } else {
          let bb = tU(yb, fy.from, -1),
            Wy = tU(yb, fy.to, 1);
          bb == fy.from && Wy == fy.to || (Zy = Uy.n.range(fy.from == fy.anchor ? bb : Wy, fy.from == fy.head ? bb : Wy))
        }
        Zy && (Wy || (Wy = bb.lZ.slice()), Wy[hy] = Zy)
      }
      return Wy ? Uy.n.create(Wy, bb.mainIndex) : bb
    }

    function kU(yb, bb, Wy) {
      let hy = tU(yb.state.facet(UW).map((bb => bb(yb))), Wy.from, bb.head > Wy.from ? -1 : 1);
      return hy == Wy.from ? Wy : Uy.n.cursor(hy, hy < Wy.from ? 1 : -1)
    }
    class NW {
      constructor(yb, bb) {
        this.pos = yb, this.assoc = bb
      }
    }

    function zU(yb, bb, Wy, hy) {
      let fy, Zy = yb.contentDOM.getBoundingClientRect(),
        cb = Zy.top + yb.viewState.paddingTop,
        {
          x: Py,
          y: oy
        } = bb,
        By = oy - cb;
      for (;;) {
        if (By < 0) return new NW(0, 1);
        if (By > yb.viewState.docHeight) return new NW(yb.state.doc.length, -1);
        if (fy = yb.elementAtHeight(By), null == hy) break;
        if (fy.type == Yy.Text) {
          if (hy < 0 ? fy.to < yb.viewport.from : fy.from > yb.viewport.to) break;
          let bb = yb.docView.coordsAt(hy < 0 ? fy.from : fy.to, hy > 0 ? -1 : 1);
          if (bb && (hy < 0 ? bb.top <= By + cb : bb.bottom >= By + cb)) break
        }
        let bb = yb.viewState.heightOracle.textHeight / 2;
        By = hy > 0 ? fy.bottom + bb : fy.top - bb
      }
      if (yb.viewport.from >= fy.to || yb.viewport.to <= fy.from) {
        if (Wy) return null;
        if (fy.type == Yy.Text) {
          let bb = function(yb, bb, Wy, hy, fy) {
            let Zy = Math.round((hy - bb.left) * yb.defaultCharacterWidth);
            if (yb.lineWrapping && Wy.height > 1.5 * yb.defaultLineHeight) {
              let bb = yb.viewState.heightOracle.textHeight;
              Zy += Math.floor((fy - Wy.top - .5 * (yb.defaultLineHeight - bb)) / bb) * yb.viewState.heightOracle.lineLength
            }
            let cb = yb.state.sliceDoc(Wy.from, Wy.to);
            return Wy.from + (0, Uy.eb)(cb, Zy, yb.state.tabSize)
          }(yb, Zy, fy, Py, oy);
          return new NW(bb, bb == fy.from ? 1 : -1)
        }
      }
      if (fy.type != Yy.Text) return By < (fy.top + fy.bottom) / 2 ? new NW(fy.from, 1) : new NW(fy.to, -1);
      let Ky = yb.docView.lineAt(fy.from, 2);
      return Ky && Ky.length == fy.length || (Ky = yb.docView.lineAt(fy.from, -2)), new IW(yb, Py, oy, yb.textDirectionAt(fy.from)).scanTile(Ky, fy.from)
    }
    class IW {
      constructor(yb, bb, Wy, Uy) {
        this.view = yb, this.x = bb, this.y = Wy, this.baseDir = Uy, this.line = null, this.spans = null
      }
      bidiSpansAt(yb) {
        return (!this.line || this.line.from > yb || this.line.to < yb) && (this.line = this.view.state.doc.lineAt(yb), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(yb, bb) {
        let {
          line: Wy,
          spans: Uy
        } = this.bidiSpansAt(yb);
        return Uy[Cb.find(Uy, yb - Wy.from, -1, bb)].level == this.baseDir
      }
      dirAt(yb, bb) {
        let {
          line: Wy,
          spans: Uy
        } = this.bidiSpansAt(yb);
        return Uy[Cb.find(Uy, yb - Wy.from, -1, bb)].dir
      }
      bidiIn(yb, bb) {
        let {
          spans: Wy,
          line: Uy
        } = this.bidiSpansAt(yb);
        return Wy.length > 1 || Wy.length && (Wy[0].level != this.baseDir || Wy[0].to + Uy.from < bb)
      }
      scan(yb, bb) {
        let Wy, Uy, hy, fy = 0,
          Zy = yb.length - 1,
          cb = new Set,
          Py = this.bidiIn(yb[0], yb[Zy]),
          oy = -1,
          By = 1e9;
        yb: for (; fy < Zy;) {
          let Ky = Zy - fy,
            ey = fy + Zy >> 1;
          bb: if (cb.has(ey)) {
            let yb = fy + Math.floor(Math.random() * Ky);
            for (let bb = 0; bb < Ky; bb++) {
              if (!cb.has(yb)) {
                ey = yb;
                break bb
              }
              yb++, yb == Zy && (yb = fy)
            }
            break yb
          } cb.add(ey);
          let qb = bb(ey);
          if (qb)
            for (let bb = 0; bb < qb.length; bb++) {
              let cb = qb[bb],
                Ky = 0;
              if (!(0 == cb.width && qb.length > 1)) {
                if (cb.bottom < this.y)(!Wy || Wy.bottom < cb.bottom) && (Wy = cb), Ky = 1;
                else if (cb.top > this.y)(!Uy || Uy.top > cb.top) && (Uy = cb), Ky = -1;
                else {
                  let yb = cb.left > this.x ? this.x - cb.left : cb.right < this.x ? this.x - cb.right : 0,
                    bb = Math.abs(yb);
                  bb < By && (oy = ey, By = bb, hy = cb), yb && (Ky = yb < 0 == (this.baseDir == ob.LTR) ? -1 : 1)
                } - 1 != Ky || Py && !this.baseDirAt(yb[ey], 1) ? 1 != Ky || Py && !this.baseDirAt(yb[ey + 1], -1) || (fy = ey + 1) : Zy = ey
              }
            }
        }
        if (!hy) {
          let hy = Wy && (!Uy || this.y - Wy.bottom < Uy.top - this.y) ? Wy : Uy;
          return this.y = (hy.top + hy.bottom) / 2, this.scan(yb, bb)
        }
        if (By) {
          if (Wy && Wy.bottom > hy.top) return this.y = Wy.bottom - 1, this.scan(yb, bb);
          if (Uy && Uy.top < hy.bottom) return this.y = Uy.top + 1, this.scan(yb, bb)
        }
        let Ky = (Py ? this.dirAt(yb[oy], 1) : this.baseDir) == ob.LTR;
        return {
          i: oy,
          after: this.x > (hy.left + hy.right) / 2 == Ky
        }
      }
      scanText(yb, bb) {
        let Wy = [];
        for (let fy = 0; fy < yb.length; fy = (0, Uy.db)(yb.text, fy)) Wy.push(bb + fy);
        Wy.push(bb + yb.length);
        let hy = this.scan(Wy, (Uy => {
          let hy = Wy[Uy] - bb,
            fy = Wy[Uy + 1] - bb;
          return Ub(yb.dom, hy, fy).getClientRects()
        }));
        return hy.after ? new NW(Wy[hy.i + 1], -1) : new NW(Wy[hy.i], 1)
      }
      scanTile(yb, bb) {
        if (!yb.length) return new NW(bb, 1);
        if (1 == yb.children.length) {
          let Wy = yb.children[0];
          if (Wy.isText()) return this.scanText(Wy, bb);
          if (Wy.isComposite()) return this.scanTile(Wy, bb)
        }
        let Wy = [bb];
        for (let Zy = 0, cb = bb; Zy < yb.children.length; Zy++) Wy.push(cb += yb.children[Zy].length);
        let Uy = this.scan(Wy, (bb => {
            let Wy = yb.children[bb];
            return 48 & Wy.flags ? null : (1 == Wy.dom.nodeType ? Wy.dom : Ub(Wy.dom, 0, Wy.length)).getClientRects()
          })),
          hy = yb.children[Uy.i],
          fy = Wy[Uy.i];
        return hy.isText() ? this.scanText(hy, fy) : hy.isComposite() ? this.scanTile(hy, fy) : Uy.after ? new NW(Wy[Uy.i + 1], -1) : new NW(fy, 1)
      }
    }
    const xU = "\uffff";
    class AW {
      constructor(yb, bb) {
        this.points = yb, this.view = bb, this.text = "", this.lineSeparator = bb.state.facet(Uy.r.lineSeparator)
      }
      append(yb) {
        this.text += yb
      }
      lineBreak() {
        this.text += xU
      }
      readRange(yb, bb) {
        if (!yb) return this;
        let Wy = yb.parentNode;
        for (let Uy = yb;;) {
          this.findPointBefore(Wy, Uy);
          let yb = this.text.length;
          this.readNode(Uy);
          let hy = eW.get(Uy),
            fy = Uy.nextSibling;
          if (fy == bb) {
            (null === hy || void 0 === hy ? void 0 : hy.breakAfter) && !fy && Wy != this.view.contentDOM && this.lineBreak();
            break
          }
          let Zy = eW.get(fy);
          (hy && Zy ? hy.breakAfter : (hy ? hy.breakAfter : wy(Uy)) || wy(fy) && ("BR" != Uy.nodeName || (null === hy || void 0 === hy ? void 0 : hy.isWidget())) && this.text.length > yb) && !yh(fy, bb) && this.lineBreak(), Uy = fy
        }
        return this.findPointBefore(Wy, bb), this
      }
      readTextNode(yb) {
        let bb = yb.nodeValue;
        for (let Wy of this.points) Wy.node == yb && (Wy.pos = this.text.length + Math.min(Wy.offset, bb.length));
        for (let Wy = 0, Uy = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let hy, fy = -1,
            Zy = 1;
          if (this.lineSeparator ? (fy = bb.indexOf(this.lineSeparator, Wy), Zy = this.lineSeparator.length) : (hy = Uy.exec(bb)) && (fy = hy.index, Zy = hy[0].length), this.append(bb.slice(Wy, fy < 0 ? bb.length : fy)), fy < 0) break;
          if (this.lineBreak(), Zy > 1)
            for (let bb of this.points) bb.node == yb && bb.pos > this.text.length && (bb.pos -= Zy - 1);
          Wy = fy + Zy
        }
      }
      readNode(yb) {
        let bb = eW.get(yb),
          Wy = bb && bb.overrideDOMText;
        if (null != Wy) {
          this.findPointInside(yb, Wy.length);
          for (let yb = Wy.iter(); !yb.next().done;) yb.lineBreak ? this.lineBreak() : this.append(yb.value)
        } else 3 == yb.nodeType ? this.readTextNode(yb) : "BR" == yb.nodeName ? yb.nextSibling && this.lineBreak() : 1 == yb.nodeType && this.readRange(yb.firstChild, null)
      }
      findPointBefore(yb, bb) {
        for (let Wy of this.points) Wy.node == yb && yb.childNodes[Wy.offset] == bb && (Wy.pos = this.text.length)
      }
      findPointInside(yb, bb) {
        for (let Wy of this.points)(3 == yb.nodeType ? Wy.node == yb : yb.contains(Wy.node)) && (Wy.pos = this.text.length + (dW(yb, Wy.node, Wy.offset) ? bb : 0))
      }
    }

    function dW(yb, bb, Wy) {
      for (;;) {
        if (!bb || Wy < Ny(bb)) return !1;
        if (bb == yb) return !0;
        Wy = tb(bb) + 1, bb = bb.parentNode
      }
    }

    function yh(yb, bb) {
      let Wy;
      for (; yb != bb && yb; yb = yb.nextSibling) {
        let bb = eW.get(yb);
        if (!(null === bb || void 0 === bb ? void 0 : bb.isWidget())) return !1;
        bb && (Wy || (Wy = [])).push(bb)
      }
      if (Wy)
        for (let Uy of Wy) {
          let yb = Uy.overrideDOMText;
          if (null === yb || void 0 === yb ? void 0 : yb.length) return !1
        }
      return !0
    }
    class bh {
      constructor(yb, bb) {
        this.node = yb, this.offset = bb, this.pos = -1
      }
    }
    class WU {
      constructor(yb, bb, Wy, hy) {
        this.typeOver = hy, this.bounds = null, this.text = "", this.domChanged = bb > -1;
        let {
          impreciseHead: fy,
          impreciseAnchor: Zy
        } = yb.docView, cb = yb.state.selection;
        if (yb.state.readOnly && bb > -1) this.newSel = null;
        else if (bb > -1 && (this.bounds = UU(yb.docView.tile, bb, Wy, 0))) {
          let bb = fy || Zy ? [] : function(yb) {
              let bb = [];
              if (yb.root.activeElement != yb.contentDOM) return bb;
              let {
                anchorNode: Wy,
                anchorOffset: Uy,
                focusNode: hy,
                focusOffset: fy
              } = yb.observer.selectionRange;
              Wy && (bb.push(new bh(Wy, Uy)), hy == Wy && fy == Uy || bb.push(new bh(hy, fy)));
              return bb
            }(yb),
            Wy = new AW(bb, yb);
          Wy.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = Wy.text, this.newSel = function(yb, bb) {
            if (0 == yb.length) return null;
            let Wy = yb[0].pos,
              hy = 2 == yb.length ? yb[1].pos : Wy;
            return Wy > -1 && hy > -1 ? Uy.n.single(Wy + bb, hy + bb) : null
          }(bb, this.bounds.from)
        } else {
          let bb = yb.observer.selectionRange,
            Wy = fy && fy.node == bb.focusNode && fy.offset == bb.focusOffset || !Ly(yb.contentDOM, bb.focusNode) ? cb.main.head : yb.docView.posFromDOM(bb.focusNode, bb.focusOffset),
            hy = Zy && Zy.node == bb.anchorNode && Zy.offset == bb.anchorOffset || !Ly(yb.contentDOM, bb.anchorNode) ? cb.main.anchor : yb.docView.posFromDOM(bb.anchorNode, bb.anchorOffset),
            Py = yb.viewport;
          if ((gb.ios || gb.chrome) && cb.main.empty && Wy != hy && (Py.from > 0 || Py.to < yb.state.doc.length)) {
            let bb = Math.min(Wy, hy),
              Uy = Math.max(Wy, hy),
              fy = Py.from - bb,
              Zy = Py.to - Uy;
            0 != fy && 1 != fy && 0 != bb || 0 != Zy && -1 != Zy && Uy != yb.state.doc.length || (Wy = 0, hy = yb.state.doc.length)
          }
          if (yb.inputState.composing > -1 && cb.lZ.length > 1) this.newSel = cb.replaceRange(Uy.n.range(hy, Wy));
          else if (yb.lineWrapping && hy == Wy && (!cb.main.empty || cb.main.head != Wy) && yb.inputState.lastTouchTime > Date.now() - 100) {
            let bb = yb.coordsAtPos(Wy, -1),
              hy = 0;
            bb && (hy = yb.inputState.lastTouchY <= bb.bottom ? -1 : 1), this.newSel = Uy.n.create([Uy.n.cursor(Wy, hy)])
          } else this.newSel = Uy.n.single(hy, Wy)
        }
      }
    }

    function UU(yb, bb, Wy, Uy) {
      if (yb.isComposite()) {
        let hy = -1,
          fy = -1,
          Zy = -1,
          cb = -1;
        for (let Py = 0, oy = Uy, By = Uy; Py < yb.children.length; Py++) {
          let Uy = yb.children[Py],
            Ky = oy + Uy.length;
          if (oy < bb && Ky > Wy) return UU(Uy, bb, Wy, oy);
          if (Ky >= bb && -1 == hy && (hy = Py, fy = oy), oy > Wy && Uy.dom.parentNode == yb.dom) {
            Zy = Py, cb = By;
            break
          }
          By = Ky, oy = Ky + Uy.breakAfter
        }
        return {
          from: fy,
          to: cb < 0 ? Uy + yb.length : cb,
          startDOM: (hy ? yb.children[hy - 1].dom.nextSibling : null) || yb.dom.firstChild,
          endDOM: Zy < yb.children.length && Zy >= 0 ? yb.children[Zy].dom : null
        }
      }
      return yb.isText() ? {
        from: Uy,
        to: Uy + yb.length,
        startDOM: yb.dom,
        endDOM: yb.dom.nextSibling
      } : null
    }

    function hU(yb, bb) {
      let Wy, {
          newSel: hy
        } = bb,
        {
          state: fy
        } = yb,
        Zy = fy.selection.main,
        cb = yb.inputState.lastKeyTime > Date.now() - 100 ? yb.inputState.lastKeyCode : -1;
      if (bb.bounds) {
        let {
          from: yb,
          to: hy
        } = bb.bounds, Py = Zy.from, oy = null;
        (8 === cb || gb.android && bb.text.length < hy - yb) && (Py = Zy.to, oy = "end");
        let By, Ky, ey = fy.doc.sliceString(yb, hy, xU);
        !Zy.empty && Zy.from >= yb && Zy.to <= hy && (bb.typeOver || ey != bb.text) && ey.slice(0, Zy.from - yb) == bb.text.slice(0, Zy.from - yb) && ey.slice(Zy.to - yb) == bb.text.slice(By = bb.text.length - (ey.length - (Zy.to - yb))) ? Wy = {
          from: Zy.from,
          to: Zy.to,
          insert: Uy.K.of(bb.text.slice(Zy.from - yb, By).split(xU))
        } : (Ky = ZU(ey, bb.text, Py - yb, oy)) && (gb.chrome && 13 == cb && Ky.toB == Ky.from + 2 && bb.text.slice(Ky.from, Ky.toB) == xU + xU && Ky.toB--, Wy = {
          from: yb + Ky.from,
          to: yb + Ky.toA,
          insert: Uy.K.of(bb.text.slice(Ky.from, Ky.toB).split(xU))
        })
      } else hy && (!yb.hasFocus && fy.facet(kW) || ch(hy, Zy)) && (hy = null);
      if (!Wy && !hy) return !1;
      if ((gb.mac || gb.android) && Wy && Wy.from == Wy.to && Wy.from == Zy.head - 1 && /^\. ?$/.test(Wy.insert.toString()) && "off" == yb.contentDOM.getAttribute("autocorrect") ? (hy && 2 == Wy.insert.length && (hy = Uy.n.single(hy.main.anchor - 1, hy.main.head - 1)), Wy = {
          from: Wy.from,
          to: Wy.to,
          insert: Uy.K.of([Wy.insert.toString().replace(".", " ")])
        }) : fy.doc.lineAt(Zy.from).to < Zy.to && yb.docView.lineHasWidget(Zy.to) && yb.inputState.insertingTextAt > Date.now() - 50 ? Wy = {
          from: Zy.from,
          to: Zy.to,
          insert: fy.toText(yb.inputState.insertingText)
        } : gb.chrome && Wy && Wy.from == Wy.to && Wy.from == Zy.head && "\n " == Wy.insert.toString() && yb.lineWrapping && (hy && (hy = Uy.n.single(hy.main.anchor - 1, hy.main.head - 1)), Wy = {
          from: Zy.from,
          to: Zy.to,
          insert: Uy.K.of([" "])
        }), Wy) return fU(yb, Wy, hy, cb);
      if (hy && !ch(hy, Zy)) {
        let bb = !1,
          Wy = "select";
        return yb.inputState.lastSelectionTime > Date.now() - 50 && ("select" == yb.inputState.lastSelectionOrigin && (bb = !0), Wy = yb.inputState.lastSelectionOrigin, "select.pointer" == Wy && (hy = wW(fy.facet(UW).map((bb => bb(yb))), hy))), yb.dispatch({
          selection: hy,
          scrollIntoView: bb,
          userEvent: Wy
        }), !0
      }
      return !1
    }

    function fU(yb, bb, Wy) {
      let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (gb.ios && yb.inputState.flushIOSKey(bb)) return !0;
      let fy = yb.state.selection.main;
      if (gb.android && (bb.to == fy.to && (bb.from == fy.from || bb.from == fy.from - 1 && " " == yb.state.sliceDoc(bb.from, fy.from)) && 1 == bb.insert.length && 2 == bb.insert.lines && hb(yb.contentDOM, "Enter", 13) || (bb.from == fy.from - 1 && bb.to == fy.to && 0 == bb.insert.length || 8 == hy && bb.insert.length < bb.to - bb.from && bb.to > fy.head) && hb(yb.contentDOM, "Backspace", 8) || bb.from == fy.from && bb.to == fy.to + 1 && 0 == bb.insert.length && hb(yb.contentDOM, "Delete", 46))) return !0;
      let Zy, cb = bb.insert.toString();
      yb.inputState.composing >= 0 && yb.inputState.composing++;
      let Py = () => Zy || (Zy = function(yb, bb, Wy) {
        let hy, fy = yb.state,
          Zy = fy.selection.main,
          cb = -1;
        if (bb.from == bb.to && bb.from < Zy.from || bb.from > Zy.to) {
          let Wy = bb.from < Zy.from ? -1 : 1,
            Uy = Wy < 0 ? Zy.from : Zy.to,
            hy = tU(fy.facet(UW).map((bb => bb(yb))), Uy, Wy);
          bb.from == hy && (cb = hy)
        }
        if (cb > -1) hy = {
          changes: bb,
          selection: Uy.n.cursor(bb.from + bb.insert.length, -1)
        };
        else if (bb.from >= Zy.from && bb.to <= Zy.to && bb.to - bb.from >= (Zy.to - Zy.from) / 3 && (!Wy || Wy.main.empty && Wy.main.from == bb.from + bb.insert.length) && yb.inputState.composing < 0) {
          let Wy = Zy.from < bb.from ? fy.sliceDoc(Zy.from, bb.from) : "",
            Uy = Zy.to > bb.to ? fy.sliceDoc(bb.to, Zy.to) : "";
          hy = fy.replaceSelection(yb.state.toText(Wy + bb.insert.sliceString(0, void 0, yb.state.lineBreak) + Uy))
        } else {
          let cb = fy.changes(bb),
            Py = Wy && Wy.main.to <= cb.newLength ? Wy.main : void 0;
          if (fy.selection.lZ.length > 1 && (yb.inputState.composing >= 0 || yb.inputState.compositionPendingChange) && bb.to <= Zy.to + 10 && bb.to >= Zy.to - 10) {
            let oy, By = yb.state.sliceDoc(bb.from, bb.to),
              Ky = Wy && FW(yb, Wy.main.head);
            if (Ky) {
              let yb = bb.insert.length - (bb.to - bb.from);
              oy = {
                from: Ky.from,
                to: Ky.to - yb
              }
            } else oy = yb.state.doc.lineAt(Zy.head);
            let ey = Zy.to - bb.to;
            hy = fy.changeByRange((Wy => {
              if (Wy.from == Zy.from && Wy.to == Zy.to) return {
                changes: cb,
                range: Py || Wy.map(cb)
              };
              let hy = Wy.to - ey,
                Ky = hy - By.length;
              if (yb.state.sliceDoc(Ky, hy) != By || hy >= oy.from && Ky <= oy.to) return {
                range: Wy
              };
              let qb = fy.changes({
                  from: Ky,
                  to: hy,
                  insert: bb.insert
                }),
                sy = Wy.to - Zy.to;
              return {
                changes: qb,
                range: Py ? Uy.n.range(Math.max(0, Py.anchor + sy), Math.max(0, Py.head + sy)) : Wy.map(qb)
              }
            }))
          } else hy = {
            changes: cb,
            selection: Py && fy.selection.replaceRange(Py)
          }
        }
        let Py = "input.type";
        (yb.composing || yb.inputState.compositionPendingChange && yb.inputState.compositionEndedAt > Date.now() - 50) && (yb.inputState.compositionPendingChange = !1, Py += ".compose", yb.inputState.compositionFirstChange && (Py += ".start", yb.inputState.compositionFirstChange = !1));
        return fy.update(hy, {
          userEvent: Py,
          scrollIntoView: !0
        })
      }(yb, bb, Wy));
      return yb.state.facet(rW).some((Wy => Wy(yb, bb.from, bb.to, cb, Py))) || yb.dispatch(Py()), !0
    }

    function ZU(yb, bb, Wy, Uy) {
      let hy = Math.min(yb.length, bb.length),
        fy = 0;
      for (; fy < hy && yb.charCodeAt(fy) == bb.charCodeAt(fy);) fy++;
      if (fy == hy && yb.length == bb.length) return null;
      let Zy = yb.length,
        cb = bb.length;
      for (; Zy > 0 && cb > 0 && yb.charCodeAt(Zy - 1) == bb.charCodeAt(cb - 1);) Zy--, cb--;
      if ("end" == Uy) {
        Wy -= Zy + Math.max(0, fy - Math.min(Zy, cb)) - fy
      }
      if (Zy < fy && yb.length < bb.length) {
        fy -= Wy <= fy && Wy >= Zy ? fy - Wy : 0, cb = fy + (cb - Zy), Zy = fy
      } else if (cb < fy) {
        fy -= Wy <= fy && Wy >= cb ? fy - Wy : 0, Zy = fy + (Zy - cb), cb = fy
      }
      return {
        from: fy,
        toA: Zy,
        toB: cb
      }
    }

    function ch(yb, bb) {
      return bb.head == yb.main.head && bb.anchor == yb.main.anchor
    }
    class PU {
      setSelectionOrigin(yb) {
        this.lastSelectionOrigin = yb, this.lastSelectionTime = Date.now()
      }
      constructor(yb) {
        this.view = yb, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = yb.hasFocus, gb.safari && yb.contentDOM.addEventListener("input", (() => null)), gb.gecko && function(yb) {
          nU.has(yb) || (nU.add(yb), yb.addEventListener("copy", (() => {})), yb.addEventListener("cut", (() => {})))
        }(yb.contentDOM.ownerDocument)
      }
      handleEvent(yb) {
        (function(yb, bb) {
          if (!bb.bubbles) return !0;
          if (bb.defaultPrevented) return !1;
          for (let Wy, Uy = bb.target; Uy != yb.contentDOM; Uy = Uy.parentNode)
            if (!Uy || 11 == Uy.nodeType || (Wy = eW.get(Uy)) && Wy.isWidget() && !Wy.isHidden && Wy.widget.ignoreEvent(bb)) return !1;
          return !0
        })(this.view, yb) && !this.ignoreDuringComposition(yb) && ("keydown" == yb.type && this.keydown(yb) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(yb.type, yb))) : this.runHandlers(yb.type, yb)))
      }
      runHandlers(yb, bb) {
        let Wy = this.handlers[yb];
        if (Wy) {
          for (let yb of Wy.observers) yb(this.view, bb);
          for (let yb of Wy.handlers) {
            if (bb.defaultPrevented) break;
            if (yb(this.view, bb)) {
              bb.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(yb) {
        let bb = BU(yb),
          Wy = this.handlers,
          Uy = this.view.contentDOM;
        for (let hy in bb)
          if ("scroll" != hy) {
            let yb = !bb[hy].handlers.length,
              fy = Wy[hy];
            fy && yb != !fy.handlers.length && (Uy.removeEventListener(hy, this.handleEvent), fy = null), fy || Uy.addEventListener(hy, this.handleEvent, {
              passive: yb
            })
          } for (let hy in Wy) "scroll" == hy || bb[hy] || Uy.removeEventListener(hy, this.handleEvent);
        this.handlers = bb
      }
      keydown(yb) {
        if (this.lastKeyCode = yb.keyCode, this.lastKeyTime = Date.now(), 9 == yb.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != yb.keyCode && qh.indexOf(yb.keyCode) < 0 && (this.tabFocusMode = -1), gb.android && gb.chrome && !yb.synthetic && (13 == yb.keyCode || 8 == yb.keyCode)) return this.view.observer.delayAndroidKey(yb.key, yb.keyCode), !0;
        let bb;
        return !gb.ios || yb.synthetic || yb.altKey || yb.metaKey || yb.shiftKey || !((bb = KU.find((bb => bb.keyCode == yb.keyCode))) && !yb.ctrlKey || eU.indexOf(yb.key) > -1 && yb.ctrlKey) ? (229 != yb.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = bb || yb, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(yb) {
        let bb = this.pendingIOSKey;
        return !!bb && (!("Enter" == bb.key && yb && yb.from < yb.to && /^\S+$/.test(yb.insert.toString())) && (this.pendingIOSKey = void 0, hb(this.view.contentDOM, bb.key, bb.keyCode, bb instanceof KeyboardEvent ? bb : void 0)))
      }
      ignoreDuringComposition(yb) {
        return !(!/^key/.test(yb.type) || yb.synthetic) && (this.composing > 0 || !!(gb.safari && !gb.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(yb) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = yb
      }
      update(yb) {
        this.view.observer.update(yb), this.mouseSelection && this.mouseSelection.update(yb), this.draggedContent && yb.docChanged && (this.draggedContent = this.draggedContent.map(yb.changes)), yb.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function oU(yb, bb) {
      return (Wy, Uy) => {
        try {
          return bb.call(yb, Uy, Wy)
        } catch (hy) {
          wb(Wy.state, hy)
        }
      }
    }

    function BU(yb) {
      let bb = Object.create(null);

      function Wy(yb) {
        return bb[yb] || (bb[yb] = {
          observers: [],
          handlers: []
        })
      }
      for (let Uy of yb) {
        let yb = Uy.spec,
          bb = yb && yb.plugin.domEventHandlers,
          hy = yb && yb.plugin.domEventObservers;
        if (bb)
          for (let fy in bb) {
            let yb = bb[fy];
            yb && Wy(fy).handlers.push(oU(Uy.value, yb))
          }
        if (hy)
          for (let fy in hy) {
            let yb = hy[fy];
            yb && Wy(fy).observers.push(oU(Uy.value, yb))
          }
      }
      for (let Uy in EU) Wy(Uy).handlers.push(EU[Uy]);
      for (let Uy in lU) Wy(Uy).observers.push(lU[Uy]);
      return bb
    }
    const KU = [{
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
      eU = "dthko",
      qh = [16, 17, 18, 20, 91, 92, 224, 225];

    function sU(yb) {
      return .7 * Math.max(0, yb) + 8
    }
    class SU {
      constructor(yb, bb, Wy, hy) {
        this.view = yb, this.startEvent = bb, this.style = Wy, this.mustSelect = hy, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = bb, this.scrollParents = Ay(yb.contentDOM), this.atoms = yb.state.facet(UW).map((bb => bb(yb)));
        let fy = yb.contentDOM.ownerDocument;
        fy.addEventListener("mousemove", this.move = this.move.bind(this)), fy.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = bb.shiftKey, this.multiple = yb.state.facet(Uy.r.allowMultipleSelections) && function(yb, bb) {
          let Wy = yb.state.facet(Mb);
          return Wy.length ? Wy[0](bb) : gb.mac ? bb.metaKey : bb.ctrlKey
        }(yb, bb), this.dragging = !(! function(yb, bb) {
          let {
            main: Wy
          } = yb.state.selection;
          if (Wy.empty) return !1;
          let Uy = py(yb.root);
          if (!Uy || 0 == Uy.rangeCount) return !0;
          let hy = Uy.getRangeAt(0).getClientRects();
          for (let fy = 0; fy < hy.length; fy++) {
            let yb = hy[fy];
            if (yb.left <= bb.clientX && yb.right >= bb.clientX && yb.top <= bb.clientY && yb.bottom >= bb.clientY) return !0
          }
          return !1
        }(yb, bb) || 1 != RU(bb)) && null
      }
      start(yb) {
        !1 === this.dragging && this.select(yb)
      }
      move(yb) {
        if (0 == yb.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (bb = this.startEvent, Wy = yb, Math.max(Math.abs(bb.clientX - Wy.clientX), Math.abs(bb.clientY - Wy.clientY)) < 10)) return;
        var bb, Wy;
        this.select(this.lastEvent = yb);
        let Uy = 0,
          hy = 0,
          fy = 0,
          Zy = 0,
          cb = this.view.win.innerWidth,
          Py = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: fy,
          right: cb
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: Zy,
          bottom: Py
        } = this.scrollParents.y.getBoundingClientRect());
        let oy = cU(this.view);
        yb.clientX - oy.left <= fy + 6 ? Uy = -sU(fy - yb.clientX) : yb.clientX + oy.right >= cb - 6 && (Uy = sU(yb.clientX - cb)), yb.clientY - oy.top <= Zy + 6 ? hy = -sU(Zy - yb.clientY) : yb.clientY + oy.bottom >= Py - 6 && (hy = sU(yb.clientY - Py)), this.setScrollSpeed(Uy, hy)
      }
      up(yb) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || yb.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let yb = this.view.contentDOM.ownerDocument;
        yb.removeEventListener("mousemove", this.move), yb.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(yb, bb) {
        this.scrollSpeed = {
          x: yb,
          y: bb
        }, yb || bb ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: yb,
          y: bb
        } = this.scrollSpeed;
        yb && this.scrollParents.x && (this.scrollParents.x.scrollLeft += yb, yb = 0), bb && this.scrollParents.y && (this.scrollParents.y.scrollTop += bb, bb = 0), (yb || bb) && this.view.win.scrollBy(yb, bb), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(yb) {
        let {
          view: bb
        } = this, Wy = wW(this.atoms, this.style.get(yb, this.extend, this.multiple));
        !this.mustSelect && Wy.eq(bb.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: Wy,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(yb) {
        yb.transactions.some((yb => yb.isUserEvent("input.type"))) ? this.destroy() : this.style.update(yb) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const EU = Object.create(null),
      lU = Object.create(null),
      mh = gb.ie && gb.ie_version < 15 || gb.ios && gb.webkit_version < 604;

    function CU(yb, bb, Wy) {
      for (let Uy of yb.facet(bb)) Wy = Uy(Wy, yb);
      return Wy
    }

    function TU(yb, bb) {
      bb = CU(yb.state, aW, bb);
      let Wy, {
          state: hy
        } = yb,
        fy = 1,
        Zy = hy.toText(bb),
        cb = Zy.lines == hy.selection.lZ.length;
      if (null != ih && hy.selection.lZ.every((yb => yb.empty)) && ih == Zy.toString()) {
        let yb = -1;
        Wy = hy.changeByRange((Wy => {
          let Py = hy.doc.lineAt(Wy.from);
          if (Py.from == yb) return {
            range: Wy
          };
          yb = Py.from;
          let oy = hy.toText((cb ? Zy.line(fy++).text : bb) + hy.lineBreak);
          return {
            changes: {
              from: Py.from,
              insert: oy
            },
            range: Uy.n.cursor(Wy.from + oy.length)
          }
        }))
      } else Wy = cb ? hy.changeByRange((yb => {
        let bb = Zy.line(fy++);
        return {
          changes: {
            from: yb.from,
            to: yb.to,
            insert: bb.text
          },
          range: Uy.n.cursor(yb.from + bb.length)
        }
      })) : hy.replaceSelection(Zy);
      yb.dispatch(Wy, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function VU(yb, bb, Wy, hy) {
      if (1 == hy) return Uy.n.cursor(bb, Wy);
      if (2 == hy) return function(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          hy = yb.charCategorizer(bb),
          fy = yb.doc.lineAt(bb),
          Zy = bb - fy.from;
        if (0 == fy.length) return Uy.n.cursor(bb);
        0 == Zy ? Wy = 1 : Zy == fy.length && (Wy = -1);
        let cb = Zy,
          Py = Zy;
        Wy < 0 ? cb = (0, Uy.db)(fy.text, Zy, !1) : Py = (0, Uy.db)(fy.text, Zy);
        let oy = hy(fy.text.slice(cb, Py));
        for (; cb > 0;) {
          let yb = (0, Uy.db)(fy.text, cb, !1);
          if (hy(fy.text.slice(yb, cb)) != oy) break;
          cb = yb
        }
        for (; Py < fy.length;) {
          let yb = (0, Uy.db)(fy.text, Py);
          if (hy(fy.text.slice(Py, yb)) != oy) break;
          Py = yb
        }
        return Uy.n.range(cb + fy.from, Py + fy.from)
      }(yb.state, bb, Wy);
      {
        let hy = yb.docView.lineAt(bb, Wy),
          fy = yb.state.doc.lineAt(hy ? hy.posAtEnd : bb),
          Zy = hy ? hy.posAtStart : fy.from,
          cb = hy ? hy.posAtEnd : fy.to;
        return cb < yb.state.doc.length && cb == fy.to && cb++, Uy.n.range(Zy, cb)
      }
    }
    lU.scroll = yb => {
      yb.inputState.lastScrollTop = yb.scrollDOM.scrollTop, yb.inputState.lastScrollLeft = yb.scrollDOM.scrollLeft
    }, lU.wheel = lU.mousewheel = yb => {
      yb.inputState.lastWheelEvent = Date.now()
    }, EU.keydown = (yb, bb) => (yb.inputState.setSelectionOrigin("select"), 27 == bb.keyCode && 0 != yb.inputState.tabFocusMode && (yb.inputState.tabFocusMode = Date.now() + 2e3), !1), lU.touchstart = (yb, bb) => {
      let Wy = yb.inputState,
        Uy = bb.targetTouches[0];
      Wy.lastTouchTime = Date.now(), Uy && (Wy.lastTouchX = Uy.clientX, Wy.lastTouchY = Uy.clientY), Wy.setSelectionOrigin("select.pointer")
    }, lU.touchmove = yb => {
      yb.inputState.setSelectionOrigin("select.pointer")
    }, EU.mousedown = (yb, bb) => {
      if (yb.observer.flush(), yb.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let Wy = null;
      for (let Uy of yb.state.facet(Xb))
        if (Wy = Uy(yb, bb), Wy) break;
      if (Wy || 0 != bb.button || (Wy = function(yb, bb) {
          let Wy = yb.posAndSideAtCoords({
              x: bb.clientX,
              y: bb.clientY
            }, !1),
            hy = RU(bb),
            fy = yb.state.selection;
          return {
            update(yb) {
              yb.docChanged && (Wy.pos = yb.changes.mapPos(Wy.pos), fy = fy.map(yb.changes))
            },
            get(bb, Zy, cb) {
              let Py, oy = yb.posAndSideAtCoords({
                  x: bb.clientX,
                  y: bb.clientY
                }, !1),
                By = VU(yb, oy.pos, oy.assoc, hy);
              if (Wy.pos != oy.pos && !Zy) {
                let bb = VU(yb, Wy.pos, Wy.assoc, hy),
                  fy = Math.min(bb.from, By.from),
                  Zy = Math.max(bb.to, By.to);
                By = fy < By.from ? Uy.n.range(fy, Zy, By.assoc) : Uy.n.range(Zy, fy, By.assoc)
              }
              return Zy ? fy.replaceRange(fy.main.extend(By.from, By.to, By.assoc)) : cb && 1 == hy && fy.lZ.length > 1 && (Py = function(yb, bb) {
                for (let Wy = 0; Wy < yb.lZ.length; Wy++) {
                  let {
                    from: hy,
                    to: fy
                  } = yb.lZ[Wy];
                  if (hy <= bb && fy >= bb) return Uy.n.create(yb.lZ.slice(0, Wy).concat(yb.lZ.slice(Wy + 1)), yb.mainIndex == Wy ? 0 : yb.mainIndex - (yb.mainIndex > Wy ? 1 : 0))
                }
                return null
              }(fy, oy.pos)) ? Py : cb ? fy.addRange(By) : Uy.n.create([By])
            }
          }
        }(yb, bb)), Wy) {
        let Uy = !yb.hasFocus;
        yb.inputState.startMouseSelection(new SU(yb, bb, Wy, Uy)), Uy && yb.observer.ignore((() => {
          Wb(yb.contentDOM);
          let bb = yb.root.activeElement;
          bb && !bb.contains(yb.contentDOM) && bb.blur()
        }));
        let hy = yb.inputState.mouseSelection;
        if (hy) return hy.start(bb), !1 === hy.dragging
      } else yb.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const JU = gb.ie && gb.ie_version <= 11;
    let gh = null,
      GU = 0,
      OU = 0;

    function RU(yb) {
      if (!JU) return yb.detail;
      let bb = gh,
        Wy = OU;
      return gh = yb, OU = Date.now(), GU = !bb || Wy > Date.now() - 400 && Math.abs(bb.clientX - yb.clientX) < 2 && Math.abs(bb.clientY - yb.clientY) < 2 ? (GU + 1) % 3 : 1
    }

    function vh(yb, bb, Wy, Uy) {
      if (!(Wy = CU(yb.state, aW, Wy))) return;
      let hy = yb.posAtCoords({
          x: bb.clientX,
          y: bb.clientY
        }, !1),
        {
          draggedContent: fy
        } = yb.inputState,
        Zy = Uy && fy && function(yb, bb) {
          let Wy = yb.state.facet(Yb);
          return Wy.length ? Wy[0](bb) : gb.mac ? !bb.altKey : !bb.ctrlKey
        }(yb, bb) ? {
          from: fy.from,
          to: fy.to
        } : null,
        cb = {
          from: hy,
          insert: Wy
        },
        Py = yb.state.changes(Zy ? [Zy, cb] : cb);
      yb.focus(), yb.dispatch({
        changes: Py,
        selection: {
          anchor: Py.mapPos(hy, -1),
          head: Py.mapPos(hy, 1)
        },
        userEvent: Zy ? "move.drop" : "input.drop"
      }), yb.inputState.draggedContent = null
    }
    EU.dragstart = (yb, bb) => {
      let {
        selection: {
          main: Wy
        }
      } = yb.state;
      if (bb.target.draggable) {
        let hy = yb.docView.tile.nearest(bb.target);
        if (hy && hy.isWidget()) {
          let yb = hy.posAtStart,
            bb = yb + hy.length;
          (yb >= Wy.to || bb <= Wy.from) && (Wy = Uy.n.range(yb, bb))
        }
      }
      let {
        inputState: hy
      } = yb;
      return hy.mouseSelection && (hy.mouseSelection.dragging = !0), hy.draggedContent = Wy, bb.dataTransfer && (bb.dataTransfer.setData("Text", CU(yb.state, Fb, yb.state.sliceDoc(Wy.from, Wy.to))), bb.dataTransfer.effectAllowed = "copyMove"), !1
    }, EU.dragend = yb => (yb.inputState.draggedContent = null, !1), EU.drop = (yb, bb) => {
      if (!bb.dataTransfer) return !1;
      if (yb.state.readOnly) return !0;
      let Wy = bb.dataTransfer.files;
      if (Wy && Wy.length) {
        let Uy = Array(Wy.length),
          hy = 0,
          fy = () => {
            ++hy == Wy.length && vh(yb, bb, Uy.filter((yb => null != yb)).join(yb.state.lineBreak), !1)
          };
        for (let yb = 0; yb < Wy.length; yb++) {
          let bb = new FileReader;
          bb.onerror = fy, bb.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(bb.result) || (Uy[yb] = bb.result), fy()
          }, bb.readAsText(Wy[yb])
        }
        return !0
      } {
        let Wy = bb.dataTransfer.getData("Text");
        if (Wy) return vh(yb, bb, Wy, !0), !0
      }
      return !1
    }, EU.paste = (yb, bb) => {
      if (yb.state.readOnly) return !0;
      yb.observer.flush();
      let Wy = mh ? null : bb.clipboardData;
      return Wy ? (TU(yb, Wy.getData("text/plain") || Wy.getData("text/uri-list")), !0) : (function(yb) {
        let bb = yb.dom.parentNode;
        if (!bb) return;
        let Wy = bb.appendChild(document.createElement("textarea"));
        Wy.style.cssText = "position: fixed; left: -10000px; top: 10px", Wy.focus(), setTimeout((() => {
          yb.focus(), Wy.remove(), TU(yb, Wy.value)
        }), 50)
      }(yb), !1)
    };
    let ih = null;
    EU.copy = EU.cut = (yb, bb) => {
      if (!Qy(yb.contentDOM, yb.observer.selectionRange)) return !1;
      let {
        text: Wy,
        lZ: Uy,
        linewise: hy
      } = function(yb) {
        let bb = [],
          Wy = [],
          Uy = !1;
        for (let hy of yb.selection.lZ) hy.empty || (bb.push(yb.sliceDoc(hy.from, hy.to)), Wy.push(hy));
        if (!bb.length) {
          let hy = -1;
          for (let {
              from: Uy
            }
            of yb.selection.lZ) {
            let fy = yb.doc.lineAt(Uy);
            fy.number > hy && (bb.push(fy.text), Wy.push({
              from: fy.from,
              to: Math.min(yb.doc.length, fy.to + 1)
            })), hy = fy.number
          }
          Uy = !0
        }
        return {
          text: CU(yb, Fb, bb.join(yb.lineBreak)),
          lZ: Wy,
          linewise: Uy
        }
      }(yb.state);
      if (!Wy && !hy) return !1;
      ih = hy ? Wy : null, "cut" != bb.type || yb.state.readOnly || yb.dispatch({
        changes: Uy,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let fy = mh ? null : bb.clipboardData;
      return fy ? (fy.clearData(), fy.setData("text/plain", Wy), !0) : (function(yb, bb) {
        let Wy = yb.dom.parentNode;
        if (!Wy) return;
        let Uy = Wy.appendChild(document.createElement("textarea"));
        Uy.style.cssText = "position: fixed; left: -10000px; top: 10px", Uy.value = bb, Uy.focus(), Uy.selectionEnd = bb.length, Uy.selectionStart = 0, setTimeout((() => {
          Uy.remove(), yb.focus()
        }), 50)
      }(yb, Wy), !1)
    };
    const MU = Uy.b.define();

    function YU(yb, bb) {
      let Wy = [];
      for (let Uy of yb.facet(Hb)) {
        let hy = Uy(yb, bb);
        hy && Wy.push(hy)
      }
      return Wy.length ? yb.update({
        effects: Wy,
        annotations: MU.of(!0)
      }) : null
    }

    function XU(yb) {
      setTimeout((() => {
        let bb = yb.hasFocus;
        if (bb != yb.inputState.notifiedFocused) {
          let Wy = YU(yb.state, bb);
          Wy ? yb.dispatch(Wy) : yb.update([])
        }
      }), 10)
    }
    lU.focus = yb => {
      yb.inputState.lastFocusTime = Date.now(), yb.scrollDOM.scrollTop || !yb.inputState.lastScrollTop && !yb.inputState.lastScrollLeft || (yb.scrollDOM.scrollTop = yb.inputState.lastScrollTop, yb.scrollDOM.scrollLeft = yb.inputState.lastScrollLeft), XU(yb)
    }, lU.blur = yb => {
      yb.observer.clearSelectionRange(), XU(yb)
    }, lU.compositionstart = lU.compositionupdate = yb => {
      yb.observer.editContext || (null == yb.inputState.compositionFirstChange && (yb.inputState.compositionFirstChange = !0), yb.inputState.composing < 0 && (yb.inputState.composing = 0))
    }, lU.compositionend = yb => {
      yb.observer.editContext || (yb.inputState.composing = -1, yb.inputState.compositionEndedAt = Date.now(), yb.inputState.compositionPendingKey = !0, yb.inputState.compositionPendingChange = yb.observer.pendingRecords().length > 0, yb.inputState.compositionFirstChange = null, gb.chrome && gb.android ? yb.observer.flushSoon() : yb.inputState.compositionPendingChange ? Promise.resolve().then((() => yb.observer.flush())) : setTimeout((() => {
        yb.inputState.composing < 0 && yb.docView.hasComposition && yb.update([])
      }), 50))
    }, lU.contextmenu = yb => {
      yb.inputState.lastContextMenu = Date.now()
    }, EU.beforeinput = (yb, bb) => {
      var Wy, Uy;
      if ("insertText" != bb.inputType && "insertCompositionText" != bb.inputType || (yb.inputState.insertingText = bb.data, yb.inputState.insertingTextAt = Date.now()), "insertReplacementText" == bb.inputType && yb.observer.editContext) {
        let Uy = null === (Wy = bb.dataTransfer) || void 0 === Wy ? void 0 : Wy.getData("text/plain"),
          hy = bb.getTargetRanges();
        if (Uy && hy.length) {
          let bb = hy[0],
            Wy = yb.posAtDOM(bb.startContainer, bb.startOffset),
            fy = yb.posAtDOM(bb.endContainer, bb.endOffset);
          return fU(yb, {
            from: Wy,
            to: fy,
            insert: yb.state.toText(Uy)
          }, null), !0
        }
      }
      let hy;
      if (gb.chrome && gb.android && (hy = KU.find((yb => yb.inputType == bb.inputType))) && (yb.observer.delayAndroidKey(hy.key, hy.keyCode), "Backspace" == hy.key || "Delete" == hy.key)) {
        let bb = (null === (Uy = window.visualViewport) || void 0 === Uy ? void 0 : Uy.height) || 0;
        setTimeout((() => {
          var Wy;
          ((null === (Wy = window.visualViewport) || void 0 === Wy ? void 0 : Wy.height) || 0) > bb + 10 && yb.hasFocus && (yb.contentDOM.blur(), yb.focus())
        }), 100)
      }
      return gb.ios && "deleteContentForward" == bb.inputType && yb.observer.flushSoon(), gb.safari && "insertText" == bb.inputType && yb.inputState.composing >= 0 && setTimeout((() => lU.compositionend(yb, bb)), 20), !1
    };
    const nU = new Set;
    const uU = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let rh = !1;

    function HU() {
      rh = !1
    }
    class ah {
      constructor(yb) {
        this.lineWrapping = yb, this.doc = Uy.K.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(yb, bb) {
        let Wy = this.doc.lineAt(bb).number - this.doc.lineAt(yb).number + 1;
        return this.lineWrapping && (Wy += Math.max(0, Math.ceil((bb - yb - Wy * this.lineLength * .5) / this.lineLength))), this.lineHeight * Wy
      }
      heightForLine(yb) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((yb - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(yb) {
        return this.doc = yb, this
      }
      mustRefreshForWrapping(yb) {
        return uU.indexOf(yb) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(yb) {
        let bb = !1;
        for (let Wy = 0; Wy < yb.length; Wy++) {
          let Uy = yb[Wy];
          Uy < 0 ? Wy++ : this.heightSamples[Math.floor(10 * Uy)] || (bb = !0, this.heightSamples[Math.floor(10 * Uy)] = !0)
        }
        return bb
      }
      refresh(yb, bb, Wy, Uy, hy, fy) {
        let Zy = uU.indexOf(yb) > -1,
          cb = Math.abs(bb - this.lineHeight) > .3 || this.lineWrapping != Zy || Math.abs(Wy - this.charWidth) > .1;
        if (this.lineWrapping = Zy, this.lineHeight = bb, this.charWidth = Wy, this.textHeight = Uy, this.lineLength = hy, cb) {
          this.heightSamples = {};
          for (let yb = 0; yb < fy.length; yb++) {
            let bb = fy[yb];
            bb < 0 ? yb++ : this.heightSamples[Math.floor(10 * bb)] = !0
          }
        }
        return cb
      }
    }
    class FU {
      constructor(yb, bb) {
        this.from = yb, this.heights = bb, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class pU {
      constructor(yb, bb, Wy, Uy, hy) {
        this.from = yb, this.length = bb, this.top = Wy, this.height = Uy, this._content = hy
      }
      get type() {
        return "number" == typeof this._content ? Yy.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof rb ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(yb) {
        let bb = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(yb._content) ? yb._content : [yb]);
        return new pU(this.from, this.length + yb.length, this.top, this.height + yb.height, bb)
      }
    }
    var LU = function(yb) {
      return yb[yb.ByPos = 0] = "ByPos", yb[yb.ByHeight = 1] = "ByHeight", yb[yb.ByPosNoHeight = 2] = "ByPosNoHeight", yb
    }(LU || (LU = {}));
    const QU = .001;
    class jh {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = yb, this.height = bb, this.flags = Wy
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(yb) {
        this.flags = (yb ? 2 : 0) | -3 & this.flags
      }
      setHeight(yb) {
        this.height != yb && (Math.abs(this.height - yb) > QU && (rh = !0), this.height = yb)
      }
      replace(yb, bb, Wy) {
        return jh.of(Wy)
      }
      decomposeLeft(yb, bb) {
        bb.push(this)
      }
      decomposeRight(yb, bb) {
        bb.push(this)
      }
      applyChanges(yb, bb, Wy, Uy) {
        let hy = this,
          fy = Wy.doc;
        for (let Zy = Uy.length - 1; Zy >= 0; Zy--) {
          let {
            fromA: cb,
            toA: Py,
            fromB: oy,
            toB: By
          } = Uy[Zy], Ky = hy.lineAt(cb, LU.ByPosNoHeight, Wy.setDoc(bb), 0, 0), ey = Ky.to >= Py ? Ky : hy.lineAt(Py, LU.ByPosNoHeight, Wy, 0, 0);
          for (By += ey.to - Py, Py = ey.to; Zy > 0 && Ky.from <= Uy[Zy - 1].toA;) cb = Uy[Zy - 1].fromA, oy = Uy[Zy - 1].fromB, Zy--, cb < Ky.from && (Ky = hy.lineAt(cb, LU.ByPosNoHeight, Wy, 0, 0));
          oy += Ky.from - cb, cb = Ky.from;
          let qb = xh.build(Wy.setDoc(fy), yb, oy, By);
          hy = DU(hy, hy.replace(cb, Py, qb))
        }
        return hy.updateHeight(Wy, 0)
      }
      static empty() {
        return new kh(0, 0, 0)
      }
      static of (yb) {
        if (1 == yb.length) return yb[0];
        let bb = 0,
          Wy = yb.length,
          Uy = 0,
          hy = 0;
        for (;;)
          if (bb == Wy)
            if (Uy > 2 * hy) {
              let hy = yb[bb - 1];
              hy.break ? yb.splice(--bb, 1, hy.left, null, hy.right) : yb.splice(--bb, 1, hy.left, hy.right), Wy += 1 + hy.break, Uy -= hy.size
            } else {
              if (!(hy > 2 * Uy)) break;
              {
                let bb = yb[Wy];
                bb.break ? yb.splice(Wy, 1, bb.left, null, bb.right) : yb.splice(Wy, 1, bb.left, bb.right), Wy += 2 + bb.break, hy -= bb.size
              }
            }
        else if (Uy < hy) {
          let Wy = yb[bb++];
          Wy && (Uy += Wy.size)
        } else {
          let bb = yb[--Wy];
          bb && (hy += bb.size)
        }
        let fy = 0;
        return null == yb[bb - 1] ? (fy = 1, bb--) : null == yb[bb] && (fy = 1, Wy++), new zh(jh.of(yb.slice(0, bb)), fy, jh.of(yb.slice(Wy)))
      }
    }

    function DU(yb, bb) {
      return yb == bb ? yb : (yb.constructor != bb.constructor && (rh = !0), bb)
    }
    jh.prototype.size = 1;
    const th = Xy.replace({});
    class wU extends jh {
      constructor(yb, bb, Wy) {
        super(yb, bb), this.deco = Wy, this.spaceAbove = 0
      }
      mainBlock(yb, bb) {
        return new pU(bb, this.length, yb + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(yb, bb, Wy, Uy) {
        return this.spaceAbove && yb < Wy + this.spaceAbove ? new pU(Uy, 0, Wy, this.spaceAbove, th) : this.mainBlock(Wy, Uy)
      }
      lineAt(yb, bb, Wy, Uy, hy) {
        let fy = this.mainBlock(Uy, hy);
        return this.spaceAbove ? this.blockAt(0, Wy, Uy, hy).join(fy) : fy
      }
      forEachLine(yb, bb, Wy, Uy, hy, fy) {
        yb <= hy + this.length && bb >= hy && fy(this.lineAt(0, LU.ByPos, Wy, Uy, hy))
      }
      setMeasuredHeight(yb) {
        let bb = yb.heights[yb.index++];
        bb < 0 ? (this.spaceAbove = -bb, bb = yb.heights[yb.index++]) : this.spaceAbove = 0, this.setHeight(bb)
      }
      updateHeight(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 3 ? arguments[3] : void 0;
        return Wy && Wy.from <= bb && Wy.more && this.setMeasuredHeight(Wy), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class kh extends wU {
      constructor(yb, bb, Wy) {
        super(yb, bb, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = Wy
      }
      mainBlock(yb, bb) {
        return new pU(bb, this.length, yb + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(yb, bb, Wy) {
        let Uy = Wy[0];
        return 1 == Wy.length && (Uy instanceof kh || Uy instanceof NU && 4 & Uy.flags) && Math.abs(this.length - Uy.length) < 10 ? (Uy instanceof NU ? Uy = new kh(Uy.length, this.height, this.spaceAbove) : Uy.height = this.height, this.outdated || (Uy.outdated = !1), Uy) : jh.of(Wy)
      }
      updateHeight(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        return Uy && Uy.from <= bb && Uy.more ? this.setMeasuredHeight(Uy) : (Wy || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, yb.heightForLine(this.length - this.collapsed)) + this.breaks * yb.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class NU extends jh {
      constructor(yb) {
        super(yb, 0)
      }
      heightMetrics(yb, bb) {
        let Wy, Uy = yb.doc.lineAt(bb).number,
          hy = yb.doc.lineAt(bb + this.length).number,
          fy = hy - Uy + 1,
          Zy = 0;
        if (yb.lineWrapping) {
          let bb = Math.min(this.height, yb.lineHeight * fy);
          Wy = bb / fy, this.length > fy + 1 && (Zy = (this.height - bb) / (this.length - fy - 1))
        } else Wy = this.height / fy;
        return {
          firstLine: Uy,
          lastLine: hy,
          perLine: Wy,
          perChar: Zy
        }
      }
      blockAt(yb, bb, Wy, Uy) {
        let {
          firstLine: hy,
          lastLine: fy,
          perLine: Zy,
          perChar: cb
        } = this.heightMetrics(bb, Uy);
        if (bb.lineWrapping) {
          let hy = Uy + (yb < bb.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (yb - Wy) / this.height)) * this.length)),
            fy = bb.doc.lineAt(hy),
            Py = Zy + fy.length * cb,
            oy = Math.max(Wy, yb - Py / 2);
          return new pU(fy.from, fy.length, oy, Py, 0)
        } {
          let Uy = Math.max(0, Math.min(fy - hy, Math.floor((yb - Wy) / Zy))),
            {
              from: cb,
              length: Py
            } = bb.doc.line(hy + Uy);
          return new pU(cb, Py, Wy + Zy * Uy, Zy, 0)
        }
      }
      lineAt(yb, bb, Wy, Uy, hy) {
        if (bb == LU.ByHeight) return this.blockAt(yb, Wy, Uy, hy);
        if (bb == LU.ByPosNoHeight) {
          let {
            from: bb,
            to: Uy
          } = Wy.doc.lineAt(yb);
          return new pU(bb, Uy - bb, 0, 0, 0)
        }
        let {
          firstLine: fy,
          perLine: Zy,
          perChar: cb
        } = this.heightMetrics(Wy, hy), Py = Wy.doc.lineAt(yb), oy = Zy + Py.length * cb, By = Py.number - fy, Ky = Uy + Zy * By + cb * (Py.from - hy - By);
        return new pU(Py.from, Py.length, Math.max(Uy, Math.min(Ky, Uy + this.height - oy)), oy, 0)
      }
      forEachLine(yb, bb, Wy, Uy, hy, fy) {
        yb = Math.max(yb, hy), bb = Math.min(bb, hy + this.length);
        let {
          firstLine: Zy,
          perLine: cb,
          perChar: Py
        } = this.heightMetrics(Wy, hy);
        for (let oy = yb, By = Uy; oy <= bb;) {
          let bb = Wy.doc.lineAt(oy);
          if (oy == yb) {
            let Wy = bb.number - Zy;
            By += cb * Wy + Py * (yb - hy - Wy)
          }
          let Uy = cb + Py * bb.length;
          fy(new pU(bb.from, bb.length, By, Uy, 0)), By += Uy, oy = bb.to + 1
        }
      }
      replace(yb, bb, Wy) {
        let Uy = this.length - bb;
        if (Uy > 0) {
          let yb = Wy[Wy.length - 1];
          yb instanceof NU ? Wy[Wy.length - 1] = new NU(yb.length + Uy) : Wy.push(null, new NU(Uy - 1))
        }
        if (yb > 0) {
          let bb = Wy[0];
          bb instanceof NU ? Wy[0] = new NU(yb + bb.length) : Wy.unshift(new NU(yb - 1), null)
        }
        return jh.of(Wy)
      }
      decomposeLeft(yb, bb) {
        bb.push(new NU(yb - 1), null)
      }
      decomposeRight(yb, bb) {
        bb.push(null, new NU(this.length - yb - 1))
      }
      updateHeight(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 ? arguments[3] : void 0,
          hy = bb + this.length;
        if (Uy && Uy.from <= bb + this.length && Uy.more) {
          let Wy = [],
            fy = Math.max(bb, Uy.from),
            Zy = -1;
          for (Uy.from > bb && Wy.push(new NU(Uy.from - bb - 1).updateHeight(yb, bb)); fy <= hy && Uy.more;) {
            let bb = yb.doc.lineAt(fy).length;
            Wy.length && Wy.push(null);
            let hy = Uy.heights[Uy.index++],
              cb = 0;
            hy < 0 && (cb = -hy, hy = Uy.heights[Uy.index++]), -1 == Zy ? Zy = hy : Math.abs(hy - Zy) >= QU && (Zy = -2);
            let Py = new kh(bb, hy, cb);
            Py.outdated = !1, Wy.push(Py), fy += bb + 1
          }
          fy <= hy && Wy.push(null, new NU(hy - fy).updateHeight(yb, fy));
          let cb = jh.of(Wy);
          return (Zy < 0 || Math.abs(cb.height - this.height) >= QU || Math.abs(Zy - this.heightMetrics(yb, bb).perLine) >= QU) && (rh = !0), DU(this, cb)
        }
        return (Wy || this.outdated) && (this.setHeight(yb.heightForGap(bb, bb + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class zh extends jh {
      constructor(yb, bb, Wy) {
        super(yb.length + bb + Wy.length, yb.height + Wy.height, bb | (yb.outdated || Wy.outdated ? 2 : 0)), this.left = yb, this.right = Wy, this.size = yb.size + Wy.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(yb, bb, Wy, Uy) {
        let hy = Wy + this.left.height;
        return yb < hy ? this.left.blockAt(yb, bb, Wy, Uy) : this.right.blockAt(yb, bb, hy, Uy + this.left.length + this.break)
      }
      lineAt(yb, bb, Wy, Uy, hy) {
        let fy = Uy + this.left.height,
          Zy = hy + this.left.length + this.break,
          cb = bb == LU.ByHeight ? yb < fy : yb < Zy,
          Py = cb ? this.left.lineAt(yb, bb, Wy, Uy, hy) : this.right.lineAt(yb, bb, Wy, fy, Zy);
        if (this.break || (cb ? Py.to < Zy : Py.from > Zy)) return Py;
        let oy = bb == LU.ByPosNoHeight ? LU.ByPosNoHeight : LU.ByPos;
        return cb ? Py.join(this.right.lineAt(Zy, oy, Wy, fy, Zy)) : this.left.lineAt(Zy, oy, Wy, Uy, hy).join(Py)
      }
      forEachLine(yb, bb, Wy, Uy, hy, fy) {
        let Zy = Uy + this.left.height,
          cb = hy + this.left.length + this.break;
        if (this.break) yb < cb && this.left.forEachLine(yb, bb, Wy, Uy, hy, fy), bb >= cb && this.right.forEachLine(yb, bb, Wy, Zy, cb, fy);
        else {
          let Py = this.lineAt(cb, LU.ByPos, Wy, Uy, hy);
          yb < Py.from && this.left.forEachLine(yb, Py.from - 1, Wy, Uy, hy, fy), Py.to >= yb && Py.from <= bb && fy(Py), bb > Py.to && this.right.forEachLine(Py.to + 1, bb, Wy, Zy, cb, fy)
        }
      }
      replace(yb, bb, Wy) {
        let Uy = this.left.length + this.break;
        if (bb < Uy) return this.balanced(this.left.replace(yb, bb, Wy), this.right);
        if (yb > this.left.length) return this.balanced(this.left, this.right.replace(yb - Uy, bb - Uy, Wy));
        let hy = [];
        yb > 0 && this.decomposeLeft(yb, hy);
        let fy = hy.length;
        for (let Zy of Wy) hy.push(Zy);
        if (yb > 0 && IU(hy, fy - 1), bb < this.length) {
          let yb = hy.length;
          this.decomposeRight(bb, hy), IU(hy, yb)
        }
        return jh.of(hy)
      }
      decomposeLeft(yb, bb) {
        let Wy = this.left.length;
        if (yb <= Wy) return this.left.decomposeLeft(yb, bb);
        bb.push(this.left), this.break && (Wy++, yb >= Wy && bb.push(null)), yb > Wy && this.right.decomposeLeft(yb - Wy, bb)
      }
      decomposeRight(yb, bb) {
        let Wy = this.left.length,
          Uy = Wy + this.break;
        if (yb >= Uy) return this.right.decomposeRight(yb - Uy, bb);
        yb < Wy && this.left.decomposeRight(yb, bb), this.break && yb < Uy && bb.push(null), bb.push(this.right)
      }
      balanced(yb, bb) {
        return yb.size > 2 * bb.size || bb.size > 2 * yb.size ? jh.of(this.break ? [yb, null, bb] : [yb, bb]) : (this.left = DU(this.left, yb), this.right = DU(this.right, bb), this.setHeight(yb.height + bb.height), this.outdated = yb.outdated || bb.outdated, this.size = yb.size + bb.size, this.length = yb.length + this.break+bb.length, this)
      }
      updateHeight(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: hy,
            right: fy
          } = this,
          Zy = bb + hy.length + this.break,
          cb = null;
        return Uy && Uy.from <= bb + hy.length && Uy.more ? cb = hy = hy.updateHeight(yb, bb, Wy, Uy) : hy.updateHeight(yb, bb, Wy), Uy && Uy.from <= Zy + fy.length && Uy.more ? cb = fy = fy.updateHeight(yb, Zy, Wy, Uy) : fy.updateHeight(yb, Zy, Wy), cb ? this.balanced(hy, fy) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function IU(yb, bb) {
      let Wy, Uy;
      null == yb[bb] && (Wy = yb[bb - 1]) instanceof NU && (Uy = yb[bb + 1]) instanceof NU && yb.splice(bb - 1, 3, new NU(Wy.length + 1 + Uy.length))
    }
    class xh {
      constructor(yb, bb) {
        this.pos = yb, this.oracle = bb, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = yb
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(yb, bb) {
        if (this.lineStart > -1) {
          let yb = Math.min(bb, this.lineEnd),
            Wy = this.nodes[this.nodes.length - 1];
          Wy instanceof kh ? Wy.length += yb - this.pos : (yb > this.pos || !this.isCovered) && this.nodes.push(new kh(yb - this.pos, -1, 0)), this.writtenTo = yb, bb > yb && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = bb
      }
      point(yb, bb, Wy) {
        if (yb < bb || Wy.heightRelevant) {
          let Uy = Wy.widget ? Wy.widget.estimatedHeight : 0,
            hy = Wy.widget ? Wy.widget.lineBreaks : 0;
          Uy < 0 && (Uy = this.oracle.lineHeight);
          let fy = bb - yb;
          Wy.block ? this.kPy(new wU(fy, Uy, Wy)) : (fy || hy || Uy >= 5) && this.addLineDeco(Uy, hy, fy)
        } else bb > yb && this.span(yb, bb);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: yb,
          to: bb
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = yb, this.lineEnd = bb, this.writtenTo < yb && ((this.writtenTo < yb - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, yb - 1)), this.nodes.push(null)), this.pos > yb && this.nodes.push(new kh(this.pos - yb, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(yb, bb) {
        let Wy = new NU(bb - yb);
        return this.oracle.doc.lineAt(yb).to == bb && (Wy.flags |= 4), Wy
      }
      ensureLine() {
        this.enterLine();
        let yb = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (yb instanceof kh) return yb;
        let bb = new kh(0, -1, 0);
        return this.nodes.push(bb), bb
      }
      kPy(yb) {
        this.enterLine();
        let bb = yb.deco;
        bb && bb.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(yb), this.writtenTo = this.pos = this.pos + yb.length, bb && bb.endSide > 0 && (this.covering = yb)
      }
      addLineDeco(yb, bb, Wy) {
        let Uy = this.ensureLine();
        Uy.length += Wy, Uy.collapsed += Wy, Uy.widgetHeight = Math.max(Uy.widgetHeight, yb), Uy.breaks += bb, this.writtenTo = this.pos = this.pos + Wy
      }
      finish(yb) {
        let bb = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || bb instanceof kh || this.isCovered ? (this.writtenTo < this.pos || null == bb) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new kh(0, -1, 0));
        let Wy = yb;
        for (let Uy of this.nodes) Uy instanceof kh && Uy.updateHeight(this.oracle, Wy), Wy += Uy ? Uy.length : 1;
        return this.nodes
      }
      static build(yb, bb, Wy, hy) {
        let fy = new xh(Wy, yb);
        return Uy.E.spans(bb, Wy, hy, fy, 0), fy.finish(Wy)
      }
    }
    class AU {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(yb, bb, Wy, Uy) {
        (yb < bb || Wy && Wy.heightRelevant || Uy && Uy.heightRelevant) && ab(yb, bb, this.changes, 5)
      }
    }

    function dU(yb, bb) {
      let Wy = yb.getBoundingClientRect(),
        Uy = yb.ownerDocument,
        hy = Uy.defaultView || window,
        fy = Math.max(0, Wy.left),
        Zy = Math.min(hy.innerWidth, Wy.right),
        cb = Math.max(0, Wy.top),
        Py = Math.min(hy.innerHeight, Wy.bottom);
      for (let oy = yb.parentNode; oy && oy != Uy.body;)
        if (1 == oy.nodeType) {
          let bb = oy,
            Wy = window.getComputedStyle(bb);
          if ((bb.scrollHeight > bb.clientHeight || bb.scrollWidth > bb.clientWidth) && "visible" != Wy.overflow) {
            let Wy = bb.getBoundingClientRect();
            fy = Math.max(fy, Wy.left), Zy = Math.min(Zy, Wy.right), cb = Math.max(cb, Wy.top), Py = Math.min(oy == yb.parentNode ? hy.innerHeight : Py, Wy.bottom)
          }
          oy = "absolute" == Wy.position || "fixed" == Wy.position ? bb.offsetParent : bb.parentNode
        } else {
          if (11 != oy.nodeType) break;
          oy = oy.host
        } return {
        left: fy - Wy.left,
        right: Math.max(fy, Zy) - Wy.left,
        top: cb - (Wy.top + bb),
        bottom: Math.max(cb, Py) - (Wy.top + bb)
      }
    }

    function yf(yb, bb) {
      let Wy = yb.getBoundingClientRect();
      return {
        left: 0,
        right: Wy.right - Wy.left,
        top: bb,
        bottom: Wy.bottom - (Wy.top + bb)
      }
    }
    class bf {
      constructor(yb, bb, Wy, Uy) {
        this.from = yb, this.to = bb, this.size = Wy, this.displaySize = Uy
      }
      static same(yb, bb) {
        if (yb.length != bb.length) return !1;
        for (let Wy = 0; Wy < yb.length; Wy++) {
          let Uy = yb[Wy],
            hy = bb[Wy];
          if (Uy.from != hy.from || Uy.to != hy.to || Uy.size != hy.size) return !1
        }
        return !0
      }
      draw(yb, bb) {
        return Xy.replace({
          widget: new Wh(this.displaySize * (bb ? yb.scaleY : yb.scaleX), bb)
        }).range(this.from, this.to)
      }
    }
    class Wh extends My {
      constructor(yb, bb) {
        super(), this.size = yb, this.vertical = bb
      }
      eq(yb) {
        return yb.size == this.size && yb.vertical == this.vertical
      }
      toDOM() {
        let yb = document.createElement("div");
        return this.vertical ? yb.style.height = this.size + "px" : (yb.style.width = this.size + "px", yb.style.height = "2px", yb.style.display = "inline-block"), yb
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class Uh {
      constructor(yb, bb) {
        this.view = yb, this.state = bb, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = cf, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = ob.LTR, this.CZy = [], this.mustEnforceCursorAssoc = !1;
        let Wy = bb.facet(db).some((yb => "function" != typeof yb && "cm-lineWrapping" == yb.class));
        this.heightOracle = new ah(Wy), this.stateDeco = Ph(bb), this.heightMap = jh.empty().applyChanges(this.stateDeco, Uy.K.empty, this.heightOracle.setDoc(bb.doc), [new oW(0, 0, 0, bb.doc.length)]);
        for (let Uy = 0; Uy < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); Uy++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Xy.set(this.lineGaps.map((yb => yb.draw(this, !1)))), this.scrollParent = yb.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let yb = [this.viewport],
          {
            main: bb
          } = this.state.selection;
        for (let Wy = 0; Wy <= 1; Wy++) {
          let Uy = Wy ? bb.head : bb.anchor;
          if (!yb.some((yb => {
              let {
                from: bb,
                to: Wy
              } = yb;
              return Uy >= bb && Uy <= Wy
            }))) {
            let {
              from: bb,
              to: Wy
            } = this.lineBlockAt(Uy);
            yb.push(new hh(bb, Wy))
          }
        }
        return this.viewports = yb.sort(((yb, bb) => yb.from - bb.from)), this.updateScaler()
      }
      updateScaler() {
        let yb = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? cf : new oh(this.heightOracle, this.heightMap, this.viewports), yb.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (yb => {
          this.viewportLines.push(Bh(yb, this.scaler))
        }))
      }
      update(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = yb.state;
        let Wy = this.stateDeco;
        this.stateDeco = Ph(this.state);
        let hy = yb.changedRanges,
          fy = oW.extendWithRanges(hy, function(yb, bb, Wy) {
            let hy = new AU;
            return Uy.E.compare(yb, bb, Wy, hy, 0), hy.changes
          }(Wy, this.stateDeco, yb ? yb.changes : Uy.ChangeSet.empty(this.state.doc.length))),
          Zy = this.heightMap.height,
          cb = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        HU(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, yb.startState.doc, this.heightOracle.setDoc(this.state.doc), fy), (this.heightMap.height != Zy || rh) && (yb.flags |= 2), cb ? (this.scrollAnchorPos = yb.changes.mapPos(cb.from, -1), this.scrollAnchorHeight = cb.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = Zy);
        let Py = fy.length ? this.mapViewport(this.viewport, yb.changes) : this.viewport;
        (bb && (bb.range.head < Py.from || bb.range.head > Py.to) || !this.viewportIsAppropriate(Py)) && (Py = this.getViewport(0, bb));
        let oy = Py.from != this.viewport.from || Py.to != this.viewport.to;
        this.viewport = Py, yb.flags |= this.updateForViewport(), (oy || !yb.changes.empty || 2 & yb.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, yb.changes))), yb.flags |= this.computeVisibleRanges(yb.changes), bb && (this.scrollTarget = bb), !this.mustEnforceCursorAssoc && (yb.selectionSet || yb.focusChanged) && yb.view.lineWrapping && yb.state.selection.main.empty && yb.state.selection.main.assoc && !yb.state.facet(Lb) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: yb
        } = this, bb = yb.contentDOM, Wy = window.getComputedStyle(bb), hy = this.heightOracle, fy = Wy.whiteSpace;
        this.defaultTextDirection = "rtl" == Wy.direction ? ob.RTL : ob.LTR;
        let Zy = this.heightOracle.mustRefreshForWrapping(fy) || "refresh" === this.mustMeasureContent,
          cb = bb.getBoundingClientRect(),
          Py = Zy || this.mustMeasureContent || this.contentDOMHeight != cb.height;
        this.contentDOMHeight = cb.height, this.mustMeasureContent = !1;
        let oy = 0,
          By = 0;
        if (cb.width && cb.height) {
          let {
            scaleX: yb,
            scaleY: Wy
          } = xb(bb, cb);
          (yb > .005 && Math.abs(this.scaleX - yb) > .005 || Wy > .005 && Math.abs(this.scaleY - Wy) > .005) && (this.scaleX = yb, this.scaleY = Wy, oy |= 16, Zy = Py = !0)
        }
        let Ky = (parseInt(Wy.paddingTop) || 0) * this.scaleY,
          ey = (parseInt(Wy.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == Ky && this.paddingBottom == ey || (this.paddingTop = Ky, this.paddingBottom = ey, oy |= 18), this.editorWidth != yb.scrollDOM.clientWidth && (hy.lineWrapping && (Py = !0), this.editorWidth = yb.scrollDOM.clientWidth, oy |= 16);
        let qb = Ay(this.view.contentDOM, !1).y;
        qb != this.scrollParent && (this.scrollParent = qb, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let sy = this.getScrollOffset();
        this.scrollOffset != sy && (this.scrollAnchorHeight = -1, this.scrollOffset = sy), this.scrolledToBottom = fb(this.scrollParent || yb.win);
        let Sy = (this.printing ? yf : dU)(bb, this.paddingTop),
          Ey = Sy.top - this.pixelViewport.top,
          ly = Sy.bottom - this.pixelViewport.bottom;
        this.pixelViewport = Sy;
        let mb = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (mb != this.inView && (this.inView = mb, mb && (Py = !0)), !this.inView && !this.scrollTarget && ! function(yb) {
            let bb = yb.getBoundingClientRect(),
              Wy = yb.ownerDocument.defaultView || window;
            return bb.left < Wy.innerWidth && bb.right > 0 && bb.top < Wy.innerHeight && bb.bottom > 0
          }(yb.dom)) return 0;
        let Cy = cb.width;
        if (this.contentDOMWidth == Cy && this.editorHeight == yb.scrollDOM.clientHeight || (this.contentDOMWidth = cb.width, this.editorHeight = yb.scrollDOM.clientHeight, oy |= 16), Py) {
          let bb = yb.docView.measureVisibleLineHeights(this.viewport);
          if (hy.mustRefreshForHeights(bb) && (Zy = !0), Zy || hy.lineWrapping && Math.abs(Cy - this.contentDOMWidth) > hy.charWidth) {
            let {
              lineHeight: Wy,
              charWidth: Uy,
              textHeight: cb
            } = yb.docView.measureTextSize();
            Zy = Wy > 0 && hy.refresh(fy, Wy, Uy, cb, Math.max(5, Cy / Uy), bb), Zy && (yb.docView.minWidth = 0, oy |= 16)
          }
          Ey > 0 && ly > 0 ? By = Math.max(Ey, ly) : Ey < 0 && ly < 0 && (By = Math.min(Ey, ly)), HU();
          for (let Wy of this.viewports) {
            let fy = Wy.from == this.viewport.from ? bb : yb.docView.measureVisibleLineHeights(Wy);
            this.heightMap = (Zy ? jh.empty().applyChanges(this.stateDeco, Uy.K.empty, this.heightOracle, [new oW(0, 0, 0, yb.state.doc.length)]) : this.heightMap).updateHeight(hy, 0, Zy, new FU(Wy.from, fy))
          }
          rh && (oy |= 2)
        }
        let Ty = !this.viewportIsAppropriate(this.viewport, By) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return Ty && (2 & oy && (oy |= this.updateScaler()), this.viewport = this.getViewport(By, this.scrollTarget), oy |= this.updateForViewport()), (2 & oy || Ty) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(Zy ? [] : this.lineGaps, yb)), oy |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, yb.docView.enforceCursorAssoc()), oy
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(yb, bb) {
        let Wy = .5 - Math.max(-.5, Math.min(.5, yb / 1e3 / 2)),
          Uy = this.heightMap,
          hy = this.heightOracle,
          {
            visibleTop: fy,
            visibleBottom: Zy
          } = this,
          cb = new hh(Uy.lineAt(fy - 1e3 * Wy, LU.ByHeight, hy, 0, 0).from, Uy.lineAt(Zy + 1e3 * (1 - Wy), LU.ByHeight, hy, 0, 0).to);
        if (bb) {
          let {
            head: yb
          } = bb.range;
          if (yb < cb.from || yb > cb.to) {
            let Wy, fy = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              Zy = Uy.lineAt(yb, LU.ByPos, hy, 0, 0);
            Wy = "center" == bb.y ? (Zy.top + Zy.bottom) / 2 - fy / 2 : "start" == bb.y || "nearest" == bb.y && yb < cb.from ? Zy.top : Zy.bottom - fy, cb = new hh(Uy.lineAt(Wy - 500, LU.ByHeight, hy, 0, 0).from, Uy.lineAt(Wy + fy + 500, LU.ByHeight, hy, 0, 0).to)
          }
        }
        return cb
      }
      mapViewport(yb, bb) {
        let Wy = bb.mapPos(yb.from, -1),
          Uy = bb.mapPos(yb.to, 1);
        return new hh(this.heightMap.lineAt(Wy, LU.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(Uy, LU.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(yb) {
        let {
          from: bb,
          to: Wy
        } = yb, Uy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: hy
        } = this.heightMap.lineAt(bb, LU.ByPos, this.heightOracle, 0, 0), {
          bottom: fy
        } = this.heightMap.lineAt(Wy, LU.ByPos, this.heightOracle, 0, 0), {
          visibleTop: Zy,
          visibleBottom: cb
        } = this;
        return (0 == bb || hy <= Zy - Math.max(10, Math.min(-Uy, 250))) && (Wy == this.state.doc.length || fy >= cb + Math.max(10, Math.min(Uy, 250))) && hy > Zy - 2e3 && fy < cb + 2e3
      }
      mapLineGaps(yb, bb) {
        if (!yb.length || bb.empty) return yb;
        let Wy = [];
        for (let Uy of yb) bb.touchesRange(Uy.from, Uy.to) || Wy.push(new bf(bb.mapPos(Uy.from), bb.mapPos(Uy.to), Uy.size, Uy.displaySize));
        return Wy
      }
      ensureLineGaps(yb, bb) {
        let Wy = this.heightOracle.lineWrapping,
          hy = Wy ? 1e4 : 2e3,
          fy = hy >> 1,
          Zy = hy << 1;
        if (this.defaultTextDirection != ob.LTR && !Wy) return [];
        let cb = [],
          Py = (hy, Zy, oy, By) => {
            if (Zy - hy < fy) return;
            let Ky = this.state.selection.main,
              ey = [Ky.from];
            Ky.empty || ey.push(Ky.to);
            for (let yb of ey)
              if (yb > hy && yb < Zy) return Py(hy, yb - 10, oy, By), void Py(yb + 10, Zy, oy, By);
            let qb = function(yb, bb) {
              for (let Wy of yb)
                if (bb(Wy)) return Wy;
              return
            }(yb, (yb => yb.from >= oy.from && yb.to <= oy.to && Math.abs(yb.from - hy) < fy && Math.abs(yb.to - Zy) < fy && !ey.some((bb => yb.from < bb && yb.to > bb))));
            if (!qb) {
              if (Zy < oy.to && bb && Wy && bb.CZy.some((yb => yb.from <= Zy && yb.to >= Zy))) {
                let yb = bb.moveToLineBoundary(Uy.n.cursor(Zy), !1, !0).head;
                yb > hy && (Zy = yb)
              }
              let yb = this.gapSize(oy, hy, Zy, By);
              qb = new bf(hy, Zy, yb, Wy || yb < 2e6 ? yb : 2e6)
            }
            cb.push(qb)
          },
          oy = bb => {
            if (bb.length < Zy || bb.type != Yy.Text) return;
            let fy = function(yb, bb, Wy) {
              let hy = [],
                fy = yb,
                Zy = 0;
              Uy.E.spans(Wy, yb, bb, {
                span() {},
                point(yb, bb) {
                  yb > fy && (hy.push({
                    from: fy,
                    to: yb
                  }), Zy += yb - fy), fy = bb
                }
              }, 20), fy < bb && (hy.push({
                from: fy,
                to: bb
              }), Zy += bb - fy);
              return {
                total: Zy,
                lZ: hy
              }
            }(bb.from, bb.to, this.stateDeco);
            if (fy.total < Zy) return;
            let cb, oy, By = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (Wy) {
              let yb, Wy, Uy = hy / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != By) {
                let hy = Zh(fy, By),
                  Zy = ((this.visibleBottom - this.visibleTop) / 2 + Uy) / bb.height;
                yb = hy - Zy, Wy = hy + Zy
              } else yb = (this.visibleTop - bb.top - Uy) / bb.height, Wy = (this.visibleBottom - bb.top + Uy) / bb.height;
              cb = fh(fy, yb), oy = fh(fy, Wy)
            } else {
              let Wy = fy.total * this.heightOracle.charWidth,
                Uy = hy * this.heightOracle.charWidth,
                Zy = 0;
              if (Wy > 2e6)
                for (let hy of yb) hy.from >= bb.from && hy.from < bb.to && hy.size != hy.displaySize && hy.from * this.heightOracle.charWidth + Zy < this.pixelViewport.left && (Zy = hy.size - hy.displaySize);
              let Py, Ky, ey = this.pixelViewport.left + Zy,
                qb = this.pixelViewport.right + Zy;
              if (null != By) {
                let yb = Zh(fy, By),
                  bb = ((qb - ey) / 2 + Uy) / Wy;
                Py = yb - bb, Ky = yb + bb
              } else Py = (ey - Uy) / Wy, Ky = (qb + Uy) / Wy;
              cb = fh(fy, Py), oy = fh(fy, Ky)
            }
            cb > bb.from && Py(bb.from, cb, bb, fy), oy < bb.to && Py(oy, bb.to, bb, fy)
          };
        for (let Uy of this.viewportLines) Array.isArray(Uy.type) ? Uy.type.forEach(oy) : oy(Uy);
        return cb
      }
      gapSize(yb, bb, Wy, Uy) {
        let hy = Zh(Uy, Wy) - Zh(Uy, bb);
        return this.heightOracle.lineWrapping ? yb.height * hy : Uy.total * this.heightOracle.charWidth * hy
      }
      updateLineGaps(yb) {
        bf.same(yb, this.lineGaps) || (this.lineGaps = yb, this.lineGapDeco = Xy.set(yb.map((yb => yb.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(yb) {
        let bb = this.stateDeco;
        this.lineGaps.length && (bb = bb.concat(this.lineGapDeco));
        let Wy = [];
        Uy.E.spans(bb, this.viewport.from, this.viewport.to, {
          span(yb, bb) {
            Wy.push({
              from: yb,
              to: bb
            })
          },
          point() {}
        }, 20);
        let hy = 0;
        if (Wy.length != this.CZy.length) hy = 12;
        else
          for (let Uy = 0; Uy < Wy.length && !(8 & hy); Uy++) {
            let bb = this.CZy[Uy],
              fy = Wy[Uy];
            bb.from == fy.from && bb.to == fy.to || (hy |= 4, yb && yb.mapPos(bb.from, -1) == fy.from && yb.mapPos(bb.to, 1) == fy.to || (hy |= 8))
          }
        return this.CZy = Wy, hy
      }
      lineBlockAt(yb) {
        return yb >= this.viewport.from && yb <= this.viewport.to && this.viewportLines.find((bb => bb.from <= yb && bb.to >= yb)) || Bh(this.heightMap.lineAt(yb, LU.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(yb) {
        return yb >= this.viewportLines[0].top && yb <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((bb => bb.top <= yb && bb.bottom >= yb)) || Bh(this.heightMap.lineAt(this.scaler.fromDOM(yb), LU.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(yb) {
        let bb = this.lineBlockAtHeight(yb + 8);
        return bb.from >= this.viewport.from || this.viewportLines[0].top - yb > 200 ? bb : this.viewportLines[0]
      }
      elementAtHeight(yb) {
        return Bh(this.heightMap.blockAt(this.scaler.fromDOM(yb), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class hh {
      constructor(yb, bb) {
        this.from = yb, this.to = bb
      }
    }

    function fh(yb, bb) {
      let {
        total: Wy,
        lZ: Uy
      } = yb;
      if (bb <= 0) return Uy[0].from;
      if (bb >= 1) return Uy[Uy.length - 1].to;
      let hy = Math.floor(Wy * bb);
      for (let fy = 0;; fy++) {
        let {
          from: yb,
          to: bb
        } = Uy[fy], Wy = bb - yb;
        if (hy <= Wy) return yb + hy;
        hy -= Wy
      }
    }

    function Zh(yb, bb) {
      let Wy = 0;
      for (let {
          from: Uy,
          to: hy
        }
        of yb.lZ) {
        if (bb <= hy) {
          Wy += bb - Uy;
          break
        }
        Wy += hy - Uy
      }
      return Wy / yb.total
    }
    const cf = {
      toDOM: yb => yb,
      fromDOM: yb => yb,
      scale: 1,
      eq(yb) {
        return yb == this
      }
    };

    function Ph(yb) {
      let bb = yb.facet(yU).filter((yb => "function" != typeof yb)),
        Wy = yb.facet(WW).filter((yb => "function" != typeof yb));
      return Wy.length && bb.push(Uy.E.join(Wy)), bb
    }
    class oh {
      constructor(yb, bb, Wy) {
        let Uy = 0,
          hy = 0,
          fy = 0;
        this.viewports = Wy.map((Wy => {
          let {
            from: hy,
            to: fy
          } = Wy, Zy = bb.lineAt(hy, LU.ByPos, yb, 0, 0).top, cb = bb.lineAt(fy, LU.ByPos, yb, 0, 0).bottom;
          return Uy += cb - Zy, {
            from: hy,
            to: fy,
            top: Zy,
            bottom: cb,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - Uy) / (bb.height - Uy);
        for (let Zy of this.viewports) Zy.domTop = fy + (Zy.top - hy) * this.scale, fy = Zy.domBottom = Zy.domTop + (Zy.bottom - Zy.top), hy = Zy.bottom
      }
      toDOM(yb) {
        for (let bb = 0, Wy = 0, Uy = 0;; bb++) {
          let hy = bb < this.viewports.length ? this.viewports[bb] : null;
          if (!hy || yb < hy.top) return Uy + (yb - Wy) * this.scale;
          if (yb <= hy.bottom) return hy.domTop + (yb - hy.top);
          Wy = hy.bottom, Uy = hy.domBottom
        }
      }
      fromDOM(yb) {
        for (let bb = 0, Wy = 0, Uy = 0;; bb++) {
          let hy = bb < this.viewports.length ? this.viewports[bb] : null;
          if (!hy || yb < hy.domTop) return Wy + (yb - Uy) / this.scale;
          if (yb <= hy.domBottom) return hy.top + (yb - hy.domTop);
          Wy = hy.bottom, Uy = hy.domBottom
        }
      }
      eq(yb) {
        return yb instanceof oh && (this.scale == yb.scale && this.viewports.length == yb.viewports.length && this.viewports.every(((bb, Wy) => bb.from == yb.viewports[Wy].from && bb.to == yb.viewports[Wy].to)))
      }
    }

    function Bh(yb, bb) {
      if (1 == bb.scale) return yb;
      let Wy = bb.toDOM(yb.top),
        Uy = bb.toDOM(yb.bottom);
      return new pU(yb.from, yb.length, Wy, Uy - Wy, Array.isArray(yb._content) ? yb._content.map((yb => Bh(yb, bb))) : yb._content)
    }
    const Kh = Uy.v.define({
        combine: yb => yb.join(" ")
      }),
      eh = Uy.v.define({
        combine: yb => yb.indexOf(!0) > -1
      }),
      qf = hy.b.newName(),
      sh = hy.b.newName(),
      Sh = hy.b.newName(),
      Eh = {
        "&light": "." + sh,
        "&dark": "." + Sh
      };

    function lh(yb, bb, Wy) {
      return new hy.b(bb, {
        finish: bb => /&/.test(bb) ? bb.replace(/&\w*/, (bb => {
          if ("&" == bb) return yb;
          if (!Wy || !Wy[bb]) throw new RangeError(`Unsupported selector: ${bb}`);
          return Wy[bb]
        })) : yb + " " + bb
      })
    }
    const mf = lh("." + qf, {
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
      }, Eh),
      Ch = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Th = gb.ie && gb.ie_version <= 11;
    class Vh {
      constructor(yb) {
        this.view = yb, this.active = !1, this.editContext = null, this.selectionRange = new dy, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = yb.contentDOM, this.observer = new MutationObserver((bb => {
          for (let yb of bb) this.queue.push(yb);
          (gb.ie && gb.ie_version <= 11 || gb.ios && yb.composing) && bb.some((yb => "childList" == yb.type && yb.removedNodes.length || "characterData" == yb.type && yb.oldValue.length > yb.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !gb.android || !1 === yb.constructor.EDIT_CONTEXT || gb.chrome && gb.chrome_version < 126 || (this.editContext = new Gh(yb), yb.state.facet(kW) && (yb.contentDOM.editContext = this.editContext.editContext)), Th && (this.onCharData = yb => {
          this.queue.push({
            target: yb.target,
            type: "characterData",
            oldValue: yb.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.pE = this.pE.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var yb;
          (null === (yb = this.view.docView) || void 0 === yb ? void 0 : yb.lastUpdate) < Date.now() - 75 && this.pE()
        })), this.resizeScroll.observe(yb.scrollDOM)), this.addWindowListeners(this.win = yb.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((yb => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), yb.length > 0 && yb[yb.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((yb => {
          yb.length > 0 && yb[yb.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(yb) {
        this.view.inputState.runHandlers("scroll", yb), this.intersecting && this.view.measure()
      }
      onScroll(yb) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(yb)
      }
      pE() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(yb) {
        ("change" != yb.type && yb.type || yb.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(yb) {
        if (this.gapIntersection && (yb.length != this.gaps.length || this.gaps.some(((bb, Wy) => bb != yb[Wy])))) {
          this.gapIntersection.disconnect();
          for (let bb of yb) this.gapIntersection.observe(bb);
          this.gaps = yb
        }
      }
      onSelectionChange(yb) {
        let bb = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: Wy
        } = this, Uy = this.selectionRange;
        if (Wy.state.facet(kW) ? Wy.root.activeElement != this.dom : !Qy(this.dom, Uy)) return;
        let hy = Uy.anchorNode && Wy.docView.tile.nearest(Uy.anchorNode);
        hy && hy.isWidget() && hy.widget.ignoreEvent(yb) ? bb || (this.selectionChanged = !1) : (gb.ie && gb.ie_version <= 11 || gb.android && gb.chrome) && !Wy.state.selection.main.empty && Uy.focusNode && Dy(Uy.focusNode, Uy.focusOffset, Uy.anchorNode, Uy.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: yb
        } = this, bb = py(yb.root);
        if (!bb) return !1;
        let Wy = gb.safari && 11 == yb.root.nodeType && yb.root.activeElement == this.dom && function(yb, bb) {
          if (bb.getComposedRanges) {
            let Wy = bb.getComposedRanges(yb.root)[0];
            if (Wy) return gf(yb, Wy)
          }
          let Wy = null;

          function Uy(yb) {
            yb.preventDefault(), yb.stopImmediatePropagation(), Wy = yb.getTargetRanges()[0]
          }
          return yb.contentDOM.addEventListener("beforeinput", Uy, !0), yb.dom.ownerDocument.execCommand("indent"), yb.contentDOM.removeEventListener("beforeinput", Uy, !0), Wy ? gf(yb, Wy) : null
        }(this.view, bb) || bb;
        if (!Wy || this.selectionRange.eq(Wy)) return !1;
        let Uy = Qy(this.dom, Wy);
        return Uy && !this.selectionChanged && yb.inputState.lastFocusTime > Date.now() - 200 && yb.inputState.lastTouchTime < Date.now() - 300 && function(yb, bb) {
          let Wy = bb.focusNode,
            Uy = bb.focusOffset;
          if (!Wy || bb.anchorNode != Wy || bb.anchorOffset != Uy) return !1;
          for (Uy = Math.min(Uy, Ny(Wy));;)
            if (Uy) {
              if (1 != Wy.nodeType) return !1;
              let yb = Wy.childNodes[Uy - 1];
              "false" == yb.contentEditable ? Uy-- : (Wy = yb, Uy = Ny(Wy))
            } else {
              if (Wy == yb) return !0;
              Uy = tb(Wy), Wy = Wy.parentNode
            }
        }(this.dom, Wy) ? (this.view.inputState.lastFocusTime = 0, yb.docView.updateSelection(), !1) : (this.selectionRange.setRange(Wy), Uy && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(yb, bb) {
        this.selectionRange.set(yb.node, yb.offset, bb.node, bb.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let yb = 0,
          bb = null;
        for (let Wy = this.dom; Wy;)
          if (1 == Wy.nodeType) !bb && yb < this.scrollTargets.length && this.scrollTargets[yb] == Wy ? yb++ : bb || (bb = this.scrollTargets.slice(0, yb)), bb && bb.push(Wy), Wy = Wy.assignedSlot || Wy.parentNode;
          else {
            if (11 != Wy.nodeType) break;
            Wy = Wy.host
          } if (yb < this.scrollTargets.length && !bb && (bb = this.scrollTargets.slice(0, yb)), bb) {
          for (let yb of this.scrollTargets) yb.removeEventListener("scroll", this.onScroll);
          for (let yb of this.scrollTargets = bb) yb.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(yb) {
        if (!this.active) return yb();
        try {
          return this.stop(), yb()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, Ch), Th && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Th && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(yb, bb) {
        var Wy;
        if (!this.delayedAndroidKey) {
          let yb = () => {
            let yb = this.delayedAndroidKey;
            if (yb) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = yb.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && yb.force && hb(this.dom, yb.key, yb.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(yb)
        }
        this.delayedAndroidKey && "Enter" != yb || (this.delayedAndroidKey = {
          key: yb,
          keyCode: bb,
          force: this.lastChange < Date.now() - 50 || !!(null === (Wy = this.delayedAndroidKey) || void 0 === Wy ? void 0 : Wy.force)
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
        for (let yb of this.observer.takeRecords()) this.queue.push(yb);
        return this.queue
      }
      processRecords() {
        let yb = this.pendingRecords();
        yb.length && (this.queue = []);
        let bb = -1,
          Wy = -1,
          Uy = !1;
        for (let hy of yb) {
          let yb = this.readMutation(hy);
          yb && (yb.typeOver && (Uy = !0), -1 == bb ? ({
            from: bb,
            to: Wy
          } = yb) : (bb = Math.min(yb.from, bb), Wy = Math.max(yb.to, Wy)))
        }
        return {
          from: bb,
          to: Wy,
          typeOver: Uy
        }
      }
      readChange() {
        let {
          from: yb,
          to: bb,
          typeOver: Wy
        } = this.processRecords(), Uy = this.selectionChanged && Qy(this.dom, this.selectionRange);
        if (yb < 0 && !Uy) return null;
        yb > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let hy = new WU(this.view, yb, bb, Wy);
        return this.view.docView.domChanged = {
          newSel: hy.newSel ? hy.newSel.main : null
        }, hy
      }
      flush() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        yb && this.readSelectionRange();
        let bb = this.readChange();
        if (!bb) return this.view.requestMeasure(), !1;
        let Wy = this.view.state,
          Uy = hU(this.view, bb);
        return this.view.state == Wy && (bb.domChanged || bb.newSel && !ch(this.view.state.selection, bb.newSel.main)) && this.view.update([]), Uy
      }
      readMutation(yb) {
        let bb = this.view.docView.tile.nearest(yb.target);
        if (!bb || bb.isWidget()) return null;
        if (bb.markDirty("attributes" == yb.type), "childList" == yb.type) {
          let Wy = Jh(bb, yb.previousSibling || yb.target.previousSibling, -1),
            Uy = Jh(bb, yb.nextSibling || yb.target.nextSibling, 1);
          return {
            from: Wy ? bb.posAfter(Wy) : bb.posAtStart,
            to: Uy ? bb.posBefore(Uy) : bb.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == yb.type ? {
          from: bb.posAtStart,
          to: bb.posAtEnd,
          typeOver: yb.target.nodeValue == yb.oldValue
        } : null
      }
      setWindow(yb) {
        yb != this.win && (this.removeWindowListeners(this.win), this.win = yb, this.addWindowListeners(this.win))
      }
      addWindowListeners(yb) {
        yb.addEventListener("resize", this.pE), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : yb.addEventListener("beforeprint", this.onPrint), yb.addEventListener("scroll", this.onScroll), yb.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(yb) {
        yb.removeEventListener("scroll", this.onScroll), yb.removeEventListener("resize", this.pE), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : yb.removeEventListener("beforeprint", this.onPrint), yb.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(yb) {
        this.editContext && (this.editContext.update(yb), yb.startState.facet(kW) != yb.state.facet(kW) && (yb.view.contentDOM.editContext = yb.state.facet(kW) ? this.editContext.editContext : null))
      }
      destroy() {
        var yb, bb, Wy;
        this.stop(), null === (yb = this.intersection) || void 0 === yb || yb.disconnect(), null === (bb = this.gapIntersection) || void 0 === bb || bb.disconnect(), null === (Wy = this.resizeScroll) || void 0 === Wy || Wy.disconnect();
        for (let Uy of this.scrollTargets) Uy.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function Jh(yb, bb, Wy) {
      for (; bb;) {
        let Uy = eW.get(bb);
        if (Uy && Uy.parent == yb) return Uy;
        let hy = bb.parentNode;
        bb = hy != yb.dom ? hy : Wy > 0 ? bb.nextSibling : bb.previousSibling
      }
      return null
    }

    function gf(yb, bb) {
      let Wy = bb.startContainer,
        Uy = bb.startOffset,
        hy = bb.endContainer,
        fy = bb.endOffset,
        Zy = yb.docView.domAtPos(yb.state.selection.main.anchor, 1);
      return Dy(Zy.node, Zy.offset, hy, fy) && ([Wy, Uy, hy, fy] = [hy, fy, Wy, Uy]), {
        anchorNode: Wy,
        anchorOffset: Uy,
        focusNode: hy,
        focusOffset: fy
      }
    }
    class Gh {
      constructor(yb) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(yb.state);
        let bb = this.editContext = new window.EditContext({
          text: yb.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, yb.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(yb.state.selection.main.head)
        });
        this.handlers.textupdate = Wy => {
          let hy = yb.state.selection.main,
            {
              anchor: fy,
              head: Zy
            } = hy,
            cb = this.toEditorPos(Wy.updateRangeStart),
            Py = this.toEditorPos(Wy.updateRangeEnd);
          yb.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: Wy.updateRangeStart,
            editorBase: cb,
            drifted: !1
          });
          let oy = Py - cb > Wy.text.length;
          cb == this.from && fy < this.from ? cb = fy : Py == this.to && fy > this.to && (Py = fy);
          let By = ZU(yb.state.sliceDoc(cb, Py), Wy.text, (oy ? hy.from : hy.to) - cb, oy ? "end" : null);
          if (!By) {
            let bb = Uy.n.single(this.toEditorPos(Wy.selectionStart), this.toEditorPos(Wy.selectionEnd));
            return void(ch(bb, hy) || yb.dispatch({
              selection: bb,
              userEvent: "select"
            }))
          }
          let Ky = {
            from: By.from + cb,
            to: By.toA + cb,
            insert: Uy.K.of(Wy.text.slice(By.from, By.toB).split("\n"))
          };
          if ((gb.mac || gb.android) && Ky.from == Zy - 1 && /^\. ?$/.test(Wy.text) && "off" == yb.contentDOM.getAttribute("autocorrect") && (Ky = {
              from: cb,
              to: Py,
              insert: Uy.K.of([Wy.text.replace(".", " ")])
            }), this.pendingContextChange = Ky, !yb.state.readOnly) {
            let bb = this.to - this.from + (Ky.to - Ky.from + Ky.insert.length);
            fU(yb, Ky, Uy.n.single(this.toEditorPos(Wy.selectionStart, bb), this.toEditorPos(Wy.selectionEnd, bb)))
          }
          this.pendingContextChange && (this.revertPending(yb.state), this.setSelection(yb.state)), Ky.from < Ky.to && !Ky.insert.length && yb.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(bb.text.slice(Math.max(0, Wy.updateRangeStart - 1), Math.min(bb.text.length, Wy.updateRangeStart + 1))) && this.handlers.compositionend(Wy)
        }, this.handlers.characterboundsupdate = Wy => {
          let Uy = [],
            hy = null;
          for (let bb = this.toEditorPos(Wy.rangeStart), fy = this.toEditorPos(Wy.rangeEnd); bb < fy; bb++) {
            let Wy = yb.coordsForChar(bb);
            hy = Wy && new DOMRect(Wy.left, Wy.top, Wy.right - Wy.left, Wy.bottom - Wy.top) || hy || new DOMRect, Uy.push(hy)
          }
          bb.updateCharacterBounds(Wy.rangeStart, Uy)
        }, this.handlers.textformatupdate = bb => {
          let Wy = [];
          for (let yb of bb.getTextFormats()) {
            let bb = yb.underlineStyle,
              Uy = yb.underlineThickness;
            if (!/none/i.test(bb) && !/none/i.test(Uy)) {
              let hy = this.toEditorPos(yb.rangeStart),
                fy = this.toEditorPos(yb.rangeEnd);
              if (hy < fy) {
                let yb = `text-decoration: underline ${/^[a-z]/.test(bb)?bb+" ":"Dashed"==bb?"dashed ":"Squiggle"==bb?"wavy ":""}${/thin/i.test(Uy)?1:2}px`;
                Wy.push(Xy.mark({
                  attributes: {
                    style: yb
                  }
                }).range(hy, fy))
              }
            }
          }
          yb.dispatch({
            effects: tW.of(Xy.set(Wy))
          })
        }, this.handlers.compositionstart = () => {
          yb.inputState.composing < 0 && (yb.inputState.composing = 0, yb.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (yb.inputState.composing = -1, yb.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: bb
            } = this.composing;
            this.composing = null, bb && this.reset(yb.state)
          }
        };
        for (let Wy in this.handlers) bb.addEventListener(Wy, this.handlers[Wy]);
        this.measureReq = {
          read: yb => {
            this.editContext.updateControlBounds(yb.contentDOM.getBoundingClientRect());
            let bb = py(yb.root);
            bb && bb.rangeCount && this.editContext.updateSelectionBounds(bb.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(yb) {
        let bb = 0,
          Wy = !1,
          Uy = this.pendingContextChange;
        return yb.changes.iterChanges(((hy, fy, Zy, cb, Py) => {
          if (Wy) return;
          let oy = Py.length - (fy - hy);
          if (Uy && fy >= Uy.to) {
            if (Uy.from == hy && Uy.to == fy && Uy.insert.eq(Py)) return Uy = this.pendingContextChange = null, bb += oy, void(this.to += oy);
            Uy = null, this.revertPending(yb.state)
          }
          if (hy += bb, (fy += bb) <= this.from) this.from += oy, this.to += oy;
          else if (hy < this.to) {
            if (hy < this.from || fy > this.to || this.to - this.from + Py.length > 3e4) return void(Wy = !0);
            this.editContext.updateText(this.toContextPos(hy), this.toContextPos(fy), Py.toString()), this.to += oy
          }
          bb += oy
        })), Uy && !Wy && this.revertPending(yb.state), !Wy
      }
      update(yb) {
        let bb = this.pendingContextChange,
          Wy = yb.startState.selection.main;
        this.composing && (this.composing.drifted || !yb.changes.touchesRange(Wy.from, Wy.to) && yb.transactions.some((yb => !yb.isUserEvent("input.type") && yb.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = yb.changes.mapPos(this.composing.editorBase)) : this.applyEdits(yb) && this.rangeIsValid(yb.state) ? (yb.docChanged || yb.selectionSet || bb) && this.setSelection(yb.state) : (this.pendingContextChange = null, this.reset(yb.state)), (yb.geometryChanged || yb.docChanged || yb.selectionSet) && yb.view.requestMeasure(this.measureReq)
      }
      resetRange(yb) {
        let {
          head: bb
        } = yb.selection.main;
        this.from = Math.max(0, bb - 1e4), this.to = Math.min(yb.doc.length, bb + 1e4)
      }
      reset(yb) {
        this.resetRange(yb), this.editContext.updateText(0, this.editContext.text.length, yb.doc.sliceString(this.from, this.to)), this.setSelection(yb)
      }
      revertPending(yb) {
        let bb = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(bb.from), this.toContextPos(bb.from + bb.insert.length), yb.doc.sliceString(bb.from, bb.to))
      }
      setSelection(yb) {
        let {
          main: bb
        } = yb.selection, Wy = this.toContextPos(Math.max(this.from, Math.min(this.to, bb.anchor))), Uy = this.toContextPos(bb.head);
        this.editContext.selectionStart == Wy && this.editContext.selectionEnd == Uy || this.editContext.updateSelection(Wy, Uy)
      }
      rangeIsValid(yb) {
        let {
          head: bb
        } = yb.selection.main;
        return !(this.from > 0 && bb - this.from < 500 || this.to < yb.doc.length && this.to - bb < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        yb = Math.min(yb, bb);
        let Wy = this.composing;
        return Wy && Wy.drifted ? Wy.editorBase + (yb - Wy.contextBase) : yb + this.from
      }
      toContextPos(yb) {
        let bb = this.composing;
        return bb && bb.drifted ? bb.contextBase + (yb - bb.editorBase) : yb - this.from
      }
      destroy() {
        for (let yb in this.handlers) this.editContext.removeEventListener(yb, this.handlers[yb])
      }
    }
    class Oh {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get CZy() {
        return this.viewState.CZy
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
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var bb;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), yb.parent && yb.parent.appendChild(this.dom);
        let {
          dispatch: Wy
        } = yb;
        this.dispatchTransactions = yb.dispatchTransactions || Wy && (yb => yb.forEach((yb => Wy(yb, this)))) || (yb => this.update(yb)), this.dispatch = this.dispatch.bind(this), this._root = yb.root || function(yb) {
          for (; yb;) {
            if (yb && (9 == yb.nodeType || 11 == yb.nodeType && yb.host)) return yb;
            yb = yb.assignedSlot || yb.parentNode
          }
          return null
        }(yb.parent) || document, this.viewState = new Uh(this, yb.state || Uy.r.create(yb)), yb.scrollTo && yb.scrollTo.is(Db) && (this.viewState.scrollTarget = yb.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(zW).map((yb => new xW(yb)));
        for (let Uy of this.plugins) Uy.update(this);
        this.observer = new Vh(this), this.inputState = new PU(this), this.inputState.ensureHandlers(this.plugins), this.docView = new HW(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (bb = document.fonts) || void 0 === bb ? void 0 : bb.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        let hy = 1 == bb.length && bb[0] instanceof Uy.O ? bb : 1 == bb.length && Array.isArray(bb[0]) ? bb[0] : [this.state.update(...bb)];
        this.dispatchTransactions(hy, this)
      }
      update(yb) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let bb, Wy = !1,
          hy = !1,
          fy = this.state;
        for (let Uy of yb) {
          if (Uy.startState != fy) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          fy = Uy.state
        }
        if (this.destroyed) return void(this.viewState.state = fy);
        let Zy = this.hasFocus,
          cb = 0,
          Py = null;
        yb.some((yb => yb.annotation(MU))) ? (this.inputState.notifiedFocused = Zy, cb = 1) : Zy != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = Zy, Py = YU(fy, Zy), Py || (cb = 1));
        let oy = this.observer.delayedAndroidKey,
          By = null;
        if (oy ? (this.observer.clearDelayedAndroidKey(), By = this.observer.readChange(), (By && !this.state.doc.eq(fy.doc) || !this.state.selection.eq(fy.selection)) && (By = null)) : this.observer.clear(), fy.facet(Uy.r.phrases) != this.state.facet(Uy.r.phrases)) return this.setState(fy);
        bb = BW.create(this, fy, yb), bb.flags |= cb;
        let Ky = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let bb of yb) {
            if (Ky && (Ky = Ky.map(bb.changes)), bb.scrollIntoView) {
              let {
                main: yb
              } = bb.state.selection, {
                x: Wy,
                y: hy
              } = this.state.facet(Oh.cursorScrollMargin);
              Ky = new jW(yb.empty ? yb : Uy.n.cursor(yb.head, yb.head > yb.anchor ? -1 : 1), "nearest", "nearest", hy, Wy)
            }
            for (let yb of bb.effects) yb.is(Db) && (Ky = yb.value.clip(this.state))
          }
          this.viewState.update(bb, Ky), this.bidiCache = Mh.update(this.bidiCache, bb.changes), bb.empty || (this.updatePlugins(bb), this.inputState.update(bb)), Wy = this.docView.update(bb), this.state.facet(PW) != this.styleModules && this.mountStyles(), hy = this.updateAttrs(), this.showAnnouncements(yb), this.docView.updateSelection(Wy, yb.some((yb => yb.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (bb.startState.facet(Kh) != bb.state.facet(Kh) && (this.viewState.mustMeasureContent = !0), (Wy || hy || Ky || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), Wy && this.docViewUpdate(), !bb.empty)
          for (let Uy of this.state.facet(ub)) try {
            Uy(bb)
          } catch (ey) {
            wb(this.state, ey, "update listener")
          }(Py || By) && Promise.resolve().then((() => {
            Py && this.state == Py.startState && this.dispatch(Py), By && !hU(this, By) && oy.force && hb(this.contentDOM, oy.key, oy.keyCode)
          }))
      }
      setState(yb) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = yb);
        this.updateState = 2;
        let bb = this.hasFocus;
        try {
          for (let yb of this.plugins) yb.destroy(this);
          this.viewState = new Uh(this, yb), this.plugins = yb.facet(zW).map((yb => new xW(yb))), this.pluginMap.clear();
          for (let yb of this.plugins) yb.update(this);
          this.docView.destroy(), this.docView = new HW(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        bb && this.focus(), this.requestMeasure()
      }
      updatePlugins(yb) {
        let bb = yb.startState.facet(zW),
          Wy = yb.state.facet(zW);
        if (bb != Wy) {
          let Uy = [];
          for (let hy of Wy) {
            let Wy = bb.indexOf(hy);
            if (Wy < 0) Uy.push(new xW(hy));
            else {
              let bb = this.plugins[Wy];
              bb.mustUpdate = yb, Uy.push(bb)
            }
          }
          for (let bb of this.plugins) bb.mustUpdate != yb && bb.destroy(this);
          this.plugins = Uy, this.pluginMap.clear()
        } else
          for (let Uy of this.plugins) Uy.mustUpdate = yb;
        for (let Uy = 0; Uy < this.plugins.length; Uy++) this.plugins[Uy].update(this);
        bb != Wy && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let bb of this.plugins) {
          let Wy = bb.value;
          if (Wy && Wy.docViewUpdate) try {
            Wy.docViewUpdate(this)
          } catch (yb) {
            wb(this.state, yb, "doc view update listener")
          }
        }
      }
      measure() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, yb && this.observer.forceFlush();
        let bb = null,
          Wy = this.viewState.scrollParent,
          Uy = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: hy,
            scrollAnchorHeight: fy
          } = this.viewState;
        Math.abs(Uy - this.viewState.scrollOffset) > 1 && (fy = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let yb = 0;; yb++) {
            if (fy < 0)
              if (fb(Wy || this.win)) hy = -1, fy = this.viewState.heightMap.height;
              else {
                let yb = this.viewState.scrollAnchorAt(Uy);
                hy = yb.from, fy = yb.top
              } this.updateState = 1;
            let cb = this.viewState.measure();
            if (!cb && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (yb > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let Py = [];
            4 & cb || ([this.measureRequests, Py] = [Py, this.measureRequests]);
            let oy = Py.map((yb => {
                try {
                  return yb.read(this)
                } catch (bb) {
                  return wb(this.state, bb), vf
                }
              })),
              By = BW.create(this, this.state, []),
              Ky = !1;
            By.flags |= cb, bb ? bb.flags |= cb : bb = By, this.updateState = 2, By.empty || (this.updatePlugins(By), this.inputState.update(By), this.updateAttrs(), Ky = this.docView.update(By), Ky && this.docViewUpdate());
            for (let yb = 0; yb < Py.length; yb++)
              if (oy[yb] != vf) try {
                let bb = Py[yb];
                bb.write && bb.write(oy[yb], this)
              } catch (Zy) {
                wb(this.state, Zy)
              }
            if (Ky && this.docView.updateSelection(!0), !By.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, fy = -1;
                  continue
                } {
                  let yb = ((hy < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(hy).top) - fy) / this.scaleY;
                  if ((yb > 1 || yb < -1) && (Wy == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    Uy += yb, Wy ? Wy.scrollTop += yb : this.win.scrollBy(0, yb), fy = -1;
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
        if (bb && !bb.empty)
          for (let cb of this.state.facet(ub)) cb(bb)
      }
      get themeClasses() {
        return qf + " " + (this.state.facet(eh) ? Sh : sh) + " " + this.state.facet(Kh)
      }
      updateAttrs() {
        let yb = Yh(this, Ab, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          bb = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(kW) ? "true" : "false",
            class: "cm-content",
            style: `${gb.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (bb["aria-readonly"] = "true"), Yh(this, db, bb);
        let Wy = this.observer.ignore((() => {
          let Wy = vb(this.contentDOM, this.contentAttrs, bb),
            Uy = vb(this.dom, this.editorAttrs, yb);
          return Wy || Uy
        }));
        return this.editorAttrs = yb, this.contentAttrs = bb, Wy
      }
      showAnnouncements(yb) {
        let bb = !0;
        for (let Wy of yb)
          for (let yb of Wy.effects)
            if (yb.is(Oh.announce)) {
              bb && (this.announceDOM.textContent = ""), bb = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = yb.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(PW);
        let yb = this.state.facet(Oh.cspNonce);
        hy.b.mount(this.root, this.styleModules.concat(mf).reverse(), yb ? {
          nonce: yb
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(yb) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), yb) {
          if (this.measureRequests.indexOf(yb) > -1) return;
          if (null != yb.key)
            for (let bb = 0; bb < this.measureRequests.length; bb++)
              if (this.measureRequests[bb].key === yb.key) return void(this.measureRequests[bb] = yb);
          this.measureRequests.push(yb)
        }
      }
      plugin(yb) {
        let bb = this.pluginMap.get(yb);
        return (void 0 === bb || bb && bb.plugin != yb) && this.pluginMap.set(yb, bb = this.plugins.find((bb => bb.plugin == yb)) || null), bb && bb.update(this).value
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
      elementAtHeight(yb) {
        return this.readMeasured(), this.viewState.elementAtHeight(yb)
      }
      lineBlockAtHeight(yb) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(yb)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(yb) {
        return this.viewState.lineBlockAt(yb)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(yb, bb, Wy) {
        return kU(this, yb, DW(this, yb, bb, Wy))
      }
      moveByGroup(yb, bb) {
        return kU(this, yb, DW(this, yb, bb, (bb => function(yb, bb, Wy) {
          let hy = yb.state.charCategorizer(bb),
            fy = hy(Wy);
          return yb => {
            let bb = hy(yb);
            return fy == Uy.j.Space && (fy = bb), fy == bb
          }
        }(this, yb.head, bb))))
      }
      visualLineSide(yb, bb) {
        let Wy = this.bidiSpans(yb),
          hy = this.textDirectionAt(yb.from),
          fy = Wy[bb ? Wy.length - 1 : 0];
        return Uy.n.cursor(fy.side(bb, hy) + yb.from, fy.forward(!bb, hy) ? 1 : -1)
      }
      moveToLineBoundary(yb, bb) {
        return function(yb, bb, Wy, hy) {
          let fy = jU(yb, bb.head, bb.assoc || -1),
            Zy = hy && fy.type == Yy.Text && (yb.lineWrapping || fy.widgetLineBreaks) ? yb.coordsAtPos(bb.assoc < 0 && bb.head > fy.from ? bb.head - 1 : bb.head) : null;
          if (Zy) {
            let bb = yb.dom.getBoundingClientRect(),
              hy = yb.textDirectionAt(fy.from),
              cb = yb.posAtCoords({
                x: Wy == (hy == ob.LTR) ? bb.right - 1 : bb.left + 1,
                y: (Zy.top + Zy.bottom) / 2
              });
            if (null != cb) return Uy.n.cursor(cb, Wy ? -1 : 1)
          }
          return Uy.n.cursor(Wy ? fy.to : fy.from, Wy ? -1 : 1)
        }(this, yb, bb, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(yb, bb, Wy) {
        return kU(this, yb, function(yb, bb, Wy, hy) {
          let fy = bb.head,
            Zy = Wy ? 1 : -1;
          if (fy == (Wy ? yb.state.doc.length : 0)) return Uy.n.cursor(fy, bb.assoc);
          let cb, Py = bb.goalColumn,
            oy = yb.contentDOM.getBoundingClientRect(),
            By = yb.coordsAtPos(fy, bb.assoc || ((bb.empty ? Wy : bb.head == bb.from) ? 1 : -1)),
            Ky = yb.documentTop;
          if (By) null == Py && (Py = By.left - oy.left), cb = Zy < 0 ? By.top : By.bottom;
          else {
            let bb = yb.viewState.lineBlockAt(fy);
            null == Py && (Py = Math.min(oy.right - oy.left, yb.defaultCharacterWidth * (fy - bb.from))), cb = (Zy < 0 ? bb.top : bb.bottom) + Ky
          }
          let ey = oy.left + Py,
            qb = yb.viewState.heightOracle.textHeight >> 1,
            sy = null !== hy && void 0 !== hy ? hy : qb;
          for (let Sy = 0;; Sy += qb) {
            let bb = cb + (sy + Sy) * Zy,
              hy = zU(yb, {
                x: ey,
                y: bb
              }, !1, Zy);
            if (Wy ? bb > oy.bottom : bb < oy.top) return Uy.n.cursor(hy.pos, hy.assoc);
            let fy = yb.coordsAtPos(hy.pos, hy.assoc),
              By = fy ? (fy.top + fy.bottom) / 2 : 0;
            if (!fy || (Wy ? By > cb : By < cb)) return Uy.n.cursor(hy.pos, hy.assoc, void 0, Py)
          }
        }(this, yb, bb, Wy))
      }
      domAtPos(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(yb, bb)
      }
      posAtDOM(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(yb, bb)
      }
      posAtCoords(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let Wy = zU(this, yb, bb);
        return Wy && Wy.pos
      }
      posAndSideAtCoords(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), zU(this, yb, bb)
      }
      coordsAtPos(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let Wy = this.docView.coordsAt(yb, bb);
        if (!Wy || Wy.left == Wy.right) return Wy;
        let Uy = this.state.doc.lineAt(yb),
          hy = this.bidiSpans(Uy);
        return zb(Wy, hy[Cb.find(hy, yb - Uy.from, -1, bb)].dir == ob.LTR == bb > 0)
      }
      coordsForChar(yb) {
        return this.readMeasured(), this.docView.coordsForChar(yb)
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
      textDirectionAt(yb) {
        return !this.state.facet(pb) || yb < this.viewport.from || yb > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(yb))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(yb) {
        if (yb.length > Rh) return Ob(yb.length);
        let bb, Wy = this.textDirectionAt(yb.from);
        for (let hy of this.bidiCache)
          if (hy.from == yb.from && hy.dir == Wy && (hy.fresh || Tb(hy.isolates, bb = fW(this, yb)))) return hy.order;
        bb || (bb = fW(this, yb));
        let Uy = Gb(yb.text, Wy, bb);
        return this.bidiCache.push(new Mh(yb.from, yb.to, Wy, bb, !0, Uy)), Uy
      }
      get hasFocus() {
        var yb;
        return (this.dom.ownerDocument.hasFocus() || gb.safari && (null === (yb = this.inputState) || void 0 === yb ? void 0 : yb.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          Wb(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(yb) {
        this._root != yb && (this._root = yb, this.observer.setWindow((9 == yb.nodeType ? yb : yb.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let yb of this.plugins) yb.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var Wy, hy, fy, Zy;
        return Db.of(new jW("number" == typeof yb ? Uy.n.cursor(yb) : yb, null !== (Wy = bb.y) && void 0 !== Wy ? Wy : "nearest", null !== (hy = bb.x) && void 0 !== hy ? hy : "nearest", null !== (fy = bb.yMargin) && void 0 !== fy ? fy : 5, null !== (Zy = bb.xMargin) && void 0 !== Zy ? Zy : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: yb,
          scrollLeft: bb
        } = this.scrollDOM, Wy = this.viewState.scrollAnchorAt(yb);
        return Db.of(new jW(Uy.n.cursor(Wy.from), "start", "start", Wy.top - yb, bb, !0))
      }
      setTabFocusMode(yb) {
        null == yb ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof yb ? this.inputState.tabFocusMode = yb ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + yb)
      }
      static domEventHandlers(yb) {
        return Ib.define((() => ({})), {
          eventHandlers: yb
        })
      }
      static domEventObservers(yb) {
        return Ib.define((() => ({})), {
          eventObservers: yb
        })
      }
      static theme(yb, bb) {
        let Wy = hy.b.newName(),
          Uy = [Kh.of(Wy), PW.of(lh(`.${Wy}`, yb))];
        return bb && bb.dark && Uy.push(eh.of(!0)), Uy
      }
      static baseTheme(yb) {
        return Uy.z.lowest(PW.of(lh("." + qf, yb, Eh)))
      }
      static findFromDOM(yb) {
        var bb;
        let Wy = yb.querySelector(".cm-content"),
          Uy = Wy && eW.get(Wy) || eW.get(yb);
        return (null === (bb = null === Uy || void 0 === Uy ? void 0 : Uy.root) || void 0 === bb ? void 0 : bb.view) || null
      }
    }
    Oh.styleModule = PW, Oh.inputHandler = rW, Oh.clipboardInputFilter = aW, Oh.clipboardOutputFilter = Fb, Oh.scrollHandler = Qb, Oh.focusChangeEffect = Hb, Oh.perLineTextDirection = pb, Oh.exceptionSink = nb, Oh.updateListener = ub, Oh.editable = kW, Oh.mouseSelectionStyle = Xb, Oh.dragMovesSelection = Yb, Oh.clickAddsSelectionRange = Mb, Oh.PZ = yU, Oh.blockWrappers = bU, Oh.outerDecorations = WW, Oh.atomicRanges = UW, Oh.bidiIsolatedRanges = hW, Oh.cursorScrollMargin = Uy.v.define({
      combine: yb => {
        let bb = 5,
          Wy = 5;
        for (let Uy of yb) "number" == typeof Uy ? bb = Wy = Uy : ({
          x: bb,
          y: Wy
        } = Uy);
        return {
          x: bb,
          y: Wy
        }
      }
    }), Oh.scrollMargins = ZW, Oh.darkTheme = eh, Oh.cspNonce = Uy.v.define({
      combine: yb => yb.length ? yb[0] : ""
    }), Oh.contentAttributes = db, Oh.editorAttributes = Ab, Oh.lineWrapping = Oh.contentAttributes.of({
      class: "cm-lineWrapping"
    }), Oh.announce = Uy.I.define();
    const Rh = 4096,
      vf = {};
    class Mh {
      constructor(yb, bb, Wy, Uy, hy, fy) {
        this.from = yb, this.to = bb, this.dir = Wy, this.isolates = Uy, this.fresh = hy, this.order = fy
      }
      static update(yb, bb) {
        if (bb.empty && !yb.some((yb => yb.fresh))) return yb;
        let Wy = [],
          Uy = yb.length ? yb[yb.length - 1].dir : ob.LTR;
        for (let hy = Math.max(0, yb.length - 10); hy < yb.length; hy++) {
          let fy = yb[hy];
          fy.dir != Uy || bb.touchesRange(fy.from, fy.to) || Wy.push(new Mh(bb.mapPos(fy.from, 1), bb.mapPos(fy.to, -1), fy.dir, fy.isolates, !1, fy.order))
        }
        return Wy
      }
    }

    function Yh(yb, bb, Wy) {
      for (let Uy = yb.state.facet(bb), hy = Uy.length - 1; hy >= 0; hy--) {
        let bb = Uy[hy],
          fy = "function" == typeof bb ? bb(yb) : bb;
        fy && Gy(fy, Wy)
      }
      return Wy
    }
    const Xh = gb.mac ? "mac" : gb.windows ? "win" : gb.linux ? "linux" : "key";

    function nh(yb, bb, Wy) {
      return bb.altKey && (yb = "Alt-" + yb), bb.ctrlKey && (yb = "Ctrl-" + yb), bb.metaKey && (yb = "Meta-" + yb), !1 !== Wy && bb.shiftKey && (yb = "Shift-" + yb), yb
    }
    const uh = Uy.z.default(Oh.domEventHandlers({
        keydown: (yb, bb) => jf(af(bb.state), yb, bb, "editor")
      })),
      rf = Uy.v.define({
        enables: uh
      }),
      Hh = new WeakMap;

    function af(yb) {
      let bb = yb.facet(rf),
        Wy = Hh.get(bb);
      return Wy || Hh.set(bb, Wy = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xh,
          Wy = Object.create(null),
          Uy = Object.create(null),
          hy = (yb, bb) => {
            let Wy = Uy[yb];
            if (null == Wy) Uy[yb] = bb;
            else if (Wy != bb) throw new Error("Key binding " + yb + " is used both as a regular binding and as a multi-stroke prefix")
          },
          fy = (yb, Uy, fy, Zy, cb) => {
            var Py, oy;
            let By = Wy[yb] || (Wy[yb] = Object.create(null)),
              Ky = Uy.split(/ (?!$)/).map((yb => function(yb, bb) {
                const Wy = yb.split(/-(?!$)/);
                let Uy, hy, fy, Zy, cb = Wy[Wy.length - 1];
                "Space" == cb && (cb = " ");
                for (let Py = 0; Py < Wy.length - 1; ++Py) {
                  const yb = Wy[Py];
                  if (/^(cmd|meta|m)$/i.test(yb)) Zy = !0;
                  else if (/^a(lt)?$/i.test(yb)) Uy = !0;
                  else if (/^(c|ctrl|control)$/i.test(yb)) hy = !0;
                  else if (/^s(hift)?$/i.test(yb)) fy = !0;
                  else {
                    if (!/^mod$/i.test(yb)) throw new Error("Unrecognized modifier name: " + yb);
                    "mac" == bb ? Zy = !0 : hy = !0
                  }
                }
                return Uy && (cb = "Alt-" + cb), hy && (cb = "Ctrl-" + cb), Zy && (cb = "Meta-" + cb), fy && (cb = "Shift-" + cb), cb
              }(yb, bb)));
            for (let bb = 1; bb < Ky.length; bb++) {
              let Wy = Ky.slice(0, bb).join(" ");
              hy(Wy, !0), By[Wy] || (By[Wy] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [bb => {
                  let Uy = ph = {
                    view: bb,
                    prefix: Wy,
                    scope: yb
                  };
                  return setTimeout((() => {
                    ph == Uy && (ph = null)
                  }), Lh), !0
                }]
              })
            }
            let ey = Ky.join(" ");
            hy(ey, !1);
            let qb = By[ey] || (By[ey] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (oy = null === (Py = By._any) || void 0 === Py ? void 0 : Py.run) || void 0 === oy ? void 0 : oy.slice()) || []
            });
            fy && qb.run.push(fy), Zy && (qb.preventDefault = !0), cb && (qb.stopPropagation = !0)
          };
        for (let Zy of yb) {
          let yb = Zy.scope ? Zy.scope.split(" ") : ["editor"];
          if (Zy.any)
            for (let bb of yb) {
              let yb = Wy[bb] || (Wy[bb] = Object.create(null));
              yb._any || (yb._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: Uy
              } = Zy;
              for (let bb in yb) yb[bb].run.push((yb => Uy(yb, Qh)))
            }
          let Uy = Zy[bb] || Zy.key;
          if (Uy)
            for (let bb of yb) fy(bb, Uy, Zy.run, Zy.preventDefault, Zy.stopPropagation), Zy.shift && fy(bb, "Shift-" + Uy, Zy.shift, Zy.preventDefault, Zy.stopPropagation)
        }
        return Wy
      }(bb.reduce(((yb, bb) => yb.concat(bb)), []))), Wy
    }

    function Fh(yb, bb, Wy) {
      return jf(af(yb.state), bb, yb, Wy)
    }
    let ph = null;
    const Lh = 4e3;
    let Qh = null;

    function jf(yb, bb, Wy, hy) {
      Qh = bb;
      let oy = function(yb) {
          var bb = !(cb && yb.metaKey && yb.shiftKey && !yb.ctrlKey && !yb.altKey || Py && yb.shiftKey && yb.key && 1 == yb.key.length || "Unidentified" == yb.key) && yb.key || (yb.shiftKey ? Zy : fy)[yb.keyCode] || yb.key || "Unidentified";
          return "Esc" == bb && (bb = "Escape"), "Del" == bb && (bb = "Delete"), "Left" == bb && (bb = "ArrowLeft"), "Up" == bb && (bb = "ArrowUp"), "Right" == bb && (bb = "ArrowRight"), "Down" == bb && (bb = "ArrowDown"), bb
        }(bb),
        By = (0, Uy.S)(oy, 0),
        Ky = (0, Uy.W)(By) == oy.length && " " != oy,
        ey = "",
        qb = !1,
        sy = !1,
        Sy = !1;
      ph && ph.view == Wy && ph.scope == hy && (ey = ph.prefix + " ", qh.indexOf(bb.keyCode) < 0 && (sy = !0, ph = null));
      let Ey, ly, mb = new Set,
        Cy = yb => {
          if (yb) {
            for (let bb of yb.run)
              if (!mb.has(bb) && (mb.add(bb), bb(Wy))) return yb.stopPropagation && (Sy = !0), !0;
            yb.preventDefault && (yb.stopPropagation && (Sy = !0), sy = !0)
          }
          return !1
        },
        Ty = yb[hy];
      return Ty && (Cy(Ty[ey + nh(oy, bb, !Ky)]) ? qb = !0 : !Ky || !(bb.altKey || bb.metaKey || bb.ctrlKey) || gb.windows && bb.ctrlKey && bb.altKey || gb.mac && bb.altKey && !bb.ctrlKey && !bb.metaKey || !(Ey = fy[bb.keyCode]) || Ey == oy ? Ky && bb.shiftKey && Cy(Ty[ey + nh(oy, bb, !0)]) && (qb = !0) : (Cy(Ty[ey + nh(Ey, bb, !0)]) || bb.shiftKey && (ly = Zy[bb.keyCode]) != oy && ly != Ey && Cy(Ty[ey + nh(ly, bb, !1)])) && (qb = !0), !qb && Cy(Ty._any) && (qb = !0)), sy && (qb = !0), qb && Sy && bb.stopPropagation(), Qh = null, qb
    }
    class Dh {
      constructor(yb, bb, Wy, Uy, hy) {
        this.className = yb, this.left = bb, this.top = Wy, this.width = Uy, this.height = hy
      }
      draw() {
        let yb = document.createElement("div");
        return yb.className = this.className, this.adjust(yb), yb
      }
      update(yb, bb) {
        return bb.className == this.className && (this.adjust(yb), !0)
      }
      adjust(yb) {
        yb.style.left = this.left + "px", yb.style.top = this.top + "px", null != this.width && (yb.style.width = this.width + "px"), yb.style.height = this.height + "px"
      }
      eq(yb) {
        return this.left == yb.left && this.top == yb.top && this.width == yb.width && this.height == yb.height && this.className == yb.className
      }
      static forRange(yb, bb, Wy) {
        if (Wy.empty) {
          let Uy = yb.coordsAtPos(Wy.head, Wy.assoc || 1);
          if (!Uy) return [];
          let hy = tf(yb);
          return [new Dh(bb, Uy.left - hy.left, Uy.top - hy.top, null, Uy.bottom - Uy.top)]
        }
        return function(yb, bb, Wy) {
          if (Wy.to <= yb.viewport.from || Wy.from >= yb.viewport.to) return [];
          let Uy = Math.max(Wy.from, yb.viewport.from),
            hy = Math.min(Wy.to, yb.viewport.to),
            fy = yb.textDirection == ob.LTR,
            Zy = yb.contentDOM,
            cb = Zy.getBoundingClientRect(),
            Py = tf(yb),
            oy = Zy.querySelector(".cm-line"),
            By = oy && window.getComputedStyle(oy),
            Ky = cb.left + (By ? parseInt(By.paddingLeft) + Math.min(0, parseInt(By.textIndent)) : 0),
            ey = cb.right - (By ? parseInt(By.paddingRight) : 0),
            qb = jU(yb, Uy, 1),
            sy = jU(yb, hy, -1),
            Sy = qb.type == Yy.Text ? qb : null,
            Ey = sy.type == Yy.Text ? sy : null;
          Sy && (yb.lineWrapping || qb.widgetLineBreaks) && (Sy = wh(yb, Uy, 1, Sy));
          Ey && (yb.lineWrapping || sy.widgetLineBreaks) && (Ey = wh(yb, hy, -1, Ey));
          if (Sy && Ey && Sy.from == Ey.from && Sy.to == Ey.to) return mb(Cy(Wy.from, Wy.to, Sy));
          {
            let bb = Sy ? Cy(Wy.from, null, Sy) : Ty(qb, !1),
              Uy = Ey ? Cy(null, Wy.to, Ey) : Ty(sy, !0),
              hy = [];
            return (Sy || qb).to < (Ey || sy).from - (Sy && Ey ? 1 : 0) || qb.widgetLineBreaks > 1 && bb.bottom + yb.defaultLineHeight / 2 < Uy.top ? hy.push(ly(Ky, bb.bottom, ey, Uy.top)) : bb.bottom < Uy.top && yb.elementAtHeight((bb.bottom + Uy.top) / 2).type == Yy.Text && (bb.bottom = Uy.top = (bb.bottom + Uy.top) / 2), mb(bb).concat(hy).concat(mb(Uy))
          }

          function ly(yb, Wy, Uy, hy) {
            return new Dh(bb, yb - Py.left, Wy - Py.top, Math.max(0, Uy - yb), hy - Wy)
          }

          function mb(yb) {
            let {
              top: bb,
              bottom: Wy,
              horizontal: Uy
            } = yb, hy = [];
            for (let fy = 0; fy < Uy.length; fy += 2) hy.push(ly(Uy[fy], bb, Uy[fy + 1], Wy));
            return hy
          }

          function Cy(bb, Wy, Uy) {
            let hy = 1e9,
              Zy = -1e9,
              cb = [];

            function Py(bb, Wy, Py, oy, By) {
              let qb = yb.coordsAtPos(bb, bb == Uy.to ? -2 : 2),
                sy = yb.coordsAtPos(Py, Py == Uy.from ? 2 : -2);
              qb && sy && (hy = Math.min(qb.top, sy.top, hy), Zy = Math.max(qb.bottom, sy.bottom, Zy), By == ob.LTR ? cb.push(fy && Wy ? Ky : qb.left, fy && oy ? ey : sy.right) : cb.push(!fy && oy ? Ky : sy.left, !fy && Wy ? ey : qb.right))
            }
            let oy = null !== bb && void 0 !== bb ? bb : Uy.from,
              By = null !== Wy && void 0 !== Wy ? Wy : Uy.to;
            for (let fy of yb.CZy)
              if (fy.to > oy && fy.from < By)
                for (let Uy = Math.max(fy.from, oy), hy = Math.min(fy.to, By);;) {
                  let fy = yb.state.doc.lineAt(Uy);
                  for (let Zy of yb.bidiSpans(fy)) {
                    let yb = Zy.from + fy.from,
                      cb = Zy.to + fy.from;
                    if (yb >= hy) break;
                    cb > Uy && Py(Math.max(yb, Uy), null == bb && yb <= oy, Math.min(cb, hy), null == Wy && cb >= By, Zy.dir)
                  }
                  if (Uy = fy.to + 1, Uy >= hy) break
                }
            return 0 == cb.length && Py(oy, null == bb, By, null == Wy, yb.textDirection), {
              top: hy,
              bottom: Zy,
              horizontal: cb
            }
          }

          function Ty(yb, bb) {
            let Wy = cb.top + (bb ? yb.top : yb.bottom);
            return {
              top: Wy,
              bottom: Wy,
              horizontal: []
            }
          }
        }(yb, bb, Wy)
      }
    }

    function tf(yb) {
      let bb = yb.scrollDOM.getBoundingClientRect();
      return {
        left: (yb.textDirection == ob.LTR ? bb.left : bb.right - yb.scrollDOM.clientWidth * yb.scaleX) - yb.scrollDOM.scrollLeft * yb.scaleX,
        top: bb.top - yb.scrollDOM.scrollTop * yb.scaleY
      }
    }

    function wh(yb, bb, Wy, Uy) {
      let hy = yb.coordsAtPos(bb, 2 * Wy);
      if (!hy) return Uy;
      let fy = yb.dom.getBoundingClientRect(),
        Zy = (hy.top + hy.bottom) / 2,
        cb = yb.posAtCoords({
          x: fy.left + 1,
          y: Zy
        }),
        Py = yb.posAtCoords({
          x: fy.right - 1,
          y: Zy
        });
      return null == cb || null == Py ? Uy : {
        from: Math.max(Uy.from, Math.min(cb, Py)),
        to: Math.min(Uy.to, Math.max(cb, Py))
      }
    }
    class kf {
      constructor(yb, bb) {
        this.view = yb, this.layer = bb, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = yb.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), bb.above && this.dom.classList.add("cm-layer-above"), bb.class && this.dom.classList.add(bb.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(yb.state), yb.requestMeasure(this.measureReq), bb.mount && bb.mount(this.dom, yb)
      }
      update(yb) {
        yb.startState.facet(Nh) != yb.state.facet(Nh) && this.setOrder(yb.state), (this.layer.update(yb, this.dom) || yb.geometryChanged) && (this.scale(), yb.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(yb) {
        !1 !== this.layer.updateOnDocViewUpdate && yb.requestMeasure(this.measureReq)
      }
      setOrder(yb) {
        let bb = 0,
          Wy = yb.facet(Nh);
        for (; bb < Wy.length && Wy[bb] != this.layer;) bb++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - bb)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: yb,
          scaleY: bb
        } = this.view;
        yb == this.scaleX && bb == this.scaleY || (this.scaleX = yb, this.scaleY = bb, this.dom.style.transform = `scale(${1/yb}, ${1/bb})`)
      }
      draw(yb) {
        if (yb.length != this.drawn.length || yb.some(((yb, bb) => {
            return Wy = yb, Uy = this.drawn[bb], !(Wy.constructor == Uy.constructor && Wy.eq(Uy));
            var Wy, Uy
          }))) {
          let bb = this.dom.firstChild,
            Wy = 0;
          for (let Uy of yb) Uy.update && bb && Uy.constructor && this.drawn[Wy].constructor && Uy.update(bb, this.drawn[Wy]) ? (bb = bb.nextSibling, Wy++) : this.dom.insertBefore(Uy.draw(), bb);
          for (; bb;) {
            let yb = bb.nextSibling;
            bb.remove(), bb = yb
          }
          this.drawn = yb, gb.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Nh = Uy.v.define();

    function zf(yb) {
      return [Ib.define((bb => new kf(bb, yb))), Nh.of(yb)]
    }
    const Ih = Uy.v.define({
      combine: yb => (0, Uy._)(yb, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (yb, bb) => Math.min(yb, bb),
        drawRangeCursor: (yb, bb) => yb || bb
      })
    });

    function xf() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Ih.of(yb), dh, bZ, Wf, Lb.of(!0)]
    }

    function Ah(yb) {
      return yb.startState.facet(Ih) != yb.state.facet(Ih)
    }
    const dh = zf({
      above: !0,
      markers(yb) {
        let {
          state: bb
        } = yb, Wy = bb.facet(Ih), hy = [];
        for (let fy of bb.selection.lZ) {
          let Zy = fy == bb.selection.main;
          if (fy.empty || Wy.drawRangeCursor && !(Zy && gb.ios && Wy.iosSelectionHandles)) {
            let bb = Zy ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              Wy = fy.empty ? fy : Uy.n.cursor(fy.head, fy.assoc);
            for (let Uy of Dh.forRange(yb, bb, Wy)) hy.push(Uy)
          }
        }
        return hy
      },
      update(yb, bb) {
        yb.transactions.some((yb => yb.selection)) && (bb.style.animationName = "cm-blink" == bb.style.animationName ? "cm-blink2" : "cm-blink");
        let Wy = Ah(yb);
        return Wy && yZ(yb.state, bb), yb.docChanged || yb.selectionSet || Wy
      },
      mount(yb, bb) {
        yZ(bb.state, yb)
      },
      class: "cm-cursorLayer"
    });

    function yZ(yb, bb) {
      bb.style.animationDuration = yb.facet(Ih).cursorBlinkRate + "ms"
    }
    const bZ = zf({
        above: !1,
        markers(yb) {
          let bb = [],
            {
              main: Wy,
              lZ: hy
            } = yb.state.selection;
          for (let Uy of hy)
            if (!Uy.empty)
              for (let Wy of Dh.forRange(yb, "cm-selectionBackground", Uy)) bb.push(Wy);
          if (gb.ios && !Wy.empty && yb.state.facet(Ih).iosSelectionHandles) {
            for (let hy of Dh.forRange(yb, "cm-selectionHandle cm-selectionHandle-start", Uy.n.cursor(Wy.from, 1))) bb.push(hy);
            for (let hy of Dh.forRange(yb, "cm-selectionHandle cm-selectionHandle-end", Uy.n.cursor(Wy.to, 1))) bb.push(hy)
          }
          return bb
        },
        update: (yb, bb) => yb.docChanged || yb.selectionSet || yb.viewportChanged || Ah(yb),
        class: "cm-selectionLayer"
      }),
      Wf = Uy.z.highest(Oh.theme({
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
      Uf = Uy.I.define({
        map: (yb, bb) => null == yb ? null : bb.mapPos(yb)
      }),
      hf = Uy.J.define({
        create: () => null,
        update: (yb, bb) => (null != yb && (yb = bb.changes.mapPos(yb)), bb.effects.reduce(((yb, bb) => bb.is(Uf) ? bb.value : yb), yb))
      }),
      ff = Ib.fromClass(class {
        constructor(yb) {
          this.view = yb, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(yb) {
          var bb;
          let Wy = yb.state.field(hf);
          null == Wy ? null != this.cursor && (null === (bb = this.cursor) || void 0 === bb || bb.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (yb.startState.field(hf) != Wy || yb.docChanged || yb.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: yb
          } = this, bb = yb.state.field(hf), Wy = null != bb && yb.coordsAtPos(bb);
          if (!Wy) return null;
          let Uy = yb.scrollDOM.getBoundingClientRect();
          return {
            left: Wy.left - Uy.left + yb.scrollDOM.scrollLeft * yb.scaleX,
            top: Wy.top - Uy.top + yb.scrollDOM.scrollTop * yb.scaleY,
            height: Wy.bottom - Wy.top
          }
        }
        drawCursor(yb) {
          if (this.cursor) {
            let {
              scaleX: bb,
              scaleY: Wy
            } = this.view;
            yb ? (this.cursor.style.left = yb.left / bb + "px", this.cursor.style.top = yb.top / Wy + "px", this.cursor.style.height = yb.height / Wy + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(yb) {
          this.view.state.field(hf) != yb && this.view.dispatch({
            effects: Uf.of(yb)
          })
        }
      }, {
        eventObservers: {
          dragover(yb) {
            this.setDropPos(this.view.posAtCoords({
              x: yb.clientX,
              y: yb.clientY
            }))
          },
          dragleave(yb) {
            yb.target != this.view.contentDOM && this.view.contentDOM.contains(yb.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function Zf() {
      return [hf, ff]
    }

    function cZ(yb, bb, Wy, Uy, hy) {
      bb.lastIndex = 0;
      for (let fy, Zy = yb.iterRange(Wy, Uy), cb = Wy; !Zy.next().done; cb += Zy.value.length)
        if (!Zy.lineBreak)
          for (; fy = bb.exec(Zy.value);) hy(cb + fy.index, fy)
    }
    class Pf {
      constructor(yb) {
        const {
          regexp: bb,
          decoration: Wy,
          decorate: Uy,
          boundary: hy,
          maxLength: fy = 1e3
        } = yb;
        if (!bb.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = bb, Uy) this.addMatch = (yb, bb, Wy, hy) => Uy(hy, Wy, Wy + yb[0].length, yb, bb);
        else if ("function" == typeof Wy) this.addMatch = (yb, bb, Uy, hy) => {
          let fy = Wy(yb, bb, Uy);
          fy && hy(Uy, Uy + yb[0].length, fy)
        };
        else {
          if (!Wy) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (yb, bb, Uy, hy) => hy(Uy, Uy + yb[0].length, Wy)
        }
        this.boundary = hy, this.maxLength = fy
      }
      createDeco(yb) {
        let bb = new Uy.C,
          Wy = bb.add.bind(bb);
        for (let {
            from: Uy,
            to: hy
          }
          of
          function(yb, bb) {
            let Wy = yb.CZy;
            if (1 == Wy.length && Wy[0].from == yb.viewport.from && Wy[0].to == yb.viewport.to) return Wy;
            let Uy = [];
            for (let {
                from: hy,
                to: fy
              }
              of Wy) hy = Math.max(yb.state.doc.lineAt(hy).from, hy - bb), fy = Math.min(yb.state.doc.lineAt(fy).to, fy + bb), Uy.length && Uy[Uy.length - 1].to >= hy ? Uy[Uy.length - 1].to = fy : Uy.push({
              from: hy,
              to: fy
            });
            return Uy
          }(yb, this.maxLength)) cZ(yb.state.doc, this.regexp, Uy, hy, ((bb, Uy) => this.addMatch(Uy, yb, bb, Wy)));
        return bb.finish()
      }
      updateDeco(yb, bb) {
        let Wy = 1e9,
          Uy = -1;
        return yb.docChanged && yb.changes.iterChanges(((bb, hy, fy, Zy) => {
          Zy >= yb.view.viewport.from && fy <= yb.view.viewport.to && (Wy = Math.min(fy, Wy), Uy = Math.max(Zy, Uy))
        })), yb.viewportMoved || Uy - Wy > 1e3 ? this.createDeco(yb.view) : Uy > -1 ? this.updateRange(yb.view, bb.map(yb.changes), Wy, Uy) : bb
      }
      updateRange(yb, bb, Wy, Uy) {
        for (let hy of yb.CZy) {
          let fy = Math.max(hy.from, Wy),
            Zy = Math.min(hy.to, Uy);
          if (Zy >= fy) {
            let Wy = yb.state.doc.lineAt(fy),
              Uy = Wy.to < Zy ? yb.state.doc.lineAt(Zy) : Wy,
              cb = Math.max(hy.from, Wy.from),
              Py = Math.min(hy.to, Uy.to);
            if (this.boundary) {
              for (; fy > Wy.from; fy--)
                if (this.boundary.test(Wy.text[fy - 1 - Wy.from])) {
                  cb = fy;
                  break
                } for (; Zy < Uy.to; Zy++)
                if (this.boundary.test(Uy.text[Zy - Uy.from])) {
                  Py = Zy;
                  break
                }
            }
            let oy, By = [],
              Ky = (yb, bb, Wy) => By.push(Wy.range(yb, bb));
            if (Wy == Uy)
              for (this.regexp.lastIndex = cb - Wy.from;
                (oy = this.regexp.exec(Wy.text)) && oy.index < Py - Wy.from;) this.addMatch(oy, yb, oy.index + Wy.from, Ky);
            else cZ(yb.state.doc, this.regexp, cb, Py, ((bb, Wy) => this.addMatch(Wy, yb, bb, Ky)));
            bb = bb.update({
              filterFrom: cb,
              filterTo: Py,
              filter: (yb, bb) => yb < cb || bb > Py,
              add: By
            })
          }
        }
        return bb
      }
    }
    const of = null != /x/.unicode ? "gu" : "g", Bf = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", of), Kf = {
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
    let ef = null;
    const qZ = Uy.v.define({
      combine(yb) {
        let bb = (0, Uy._)(yb, {
          render: null,
          specialChars: Bf,
          addSpecialChars: null
        });
        return (bb.replaceTabs = ! function() {
          var yb;
          if (null == ef && "undefined" != typeof document && document.body) {
            let bb = document.body.style;
            ef = null != (null !== (yb = bb.tabSize) && void 0 !== yb ? yb : bb.MozTabSize)
          }
          return ef || !1
        }()) && (bb.specialChars = new RegExp("\t|" + bb.specialChars.source, of)), bb.addSpecialChars && (bb.specialChars = new RegExp(bb.specialChars.source + "|" + bb.addSpecialChars.source, of)), bb
      }
    });

    function sf() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [qZ.of(yb), Sf || (Sf = Ib.fromClass(class {
        constructor(yb) {
          this.view = yb, this.PZ = Xy.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(yb.state.facet(qZ)), this.PZ = this.decorator.createDeco(yb)
        }
        makeDecorator(yb) {
          return new Pf({
            regexp: yb.specialChars,
            decoration: (bb, Wy, hy) => {
              let {
                doc: fy
              } = Wy.state, Zy = (0, Uy.S)(bb[0], 0);
              if (9 == Zy) {
                let yb = fy.lineAt(hy),
                  bb = Wy.state.tabSize,
                  Zy = (0, Uy.cb)(yb.text, bb, hy - yb.from);
                return Xy.replace({
                  widget: new lf((bb - Zy % bb) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[Zy] || (this.decorationCache[Zy] = Xy.replace({
                widget: new Ef(yb, Zy)
              }))
            },
            boundary: yb.replaceTabs ? void 0 : /[^]/
          })
        }
        update(yb) {
          let bb = yb.state.facet(qZ);
          yb.startState.facet(qZ) != bb ? (this.decorator = this.makeDecorator(bb), this.PZ = this.decorator.createDeco(yb.view)) : this.PZ = this.decorator.updateDeco(yb, this.PZ)
        }
      }, {
        PZ: yb => yb.PZ
      }))]
    }
    let Sf = null;
    class Ef extends My {
      constructor(yb, bb) {
        super(), this.options = yb, this.code = bb
      }
      eq(yb) {
        return yb.code == this.code
      }
      toDOM(yb) {
        let bb = function(yb) {
            return yb >= 32 ? "\u2022" : 10 == yb ? "\u2424" : String.fromCharCode(9216 + yb)
          }(this.code),
          Wy = yb.state.phrase("Control character") + " " + (Kf[this.code] || "0x" + this.code.toString(16)),
          Uy = this.options.render && this.options.render(this.code, Wy, bb);
        if (Uy) return Uy;
        let hy = document.createElement("span");
        return hy.textContent = bb, hy.title = Wy, hy.setAttribute("aria-label", Wy), hy.className = "cm-specialChar", hy
      }
      ignoreEvent() {
        return !1
      }
    }
    class lf extends My {
      constructor(yb) {
        super(), this.width = yb
      }
      eq(yb) {
        return yb.width == this.width
      }
      toDOM() {
        let yb = document.createElement("span");
        return yb.textContent = "\t", yb.className = "cm-tab", yb.style.width = this.width + "px", yb
      }
      ignoreEvent() {
        return !1
      }
    }

    function mZ() {
      return Tf
    }
    const Cf = Xy.line({
        class: "cm-activeLine"
      }),
      Tf = Ib.fromClass(class {
        constructor(yb) {
          this.PZ = this.getDeco(yb)
        }
        update(yb) {
          (yb.docChanged || yb.selectionSet) && (this.PZ = this.getDeco(yb.view))
        }
        getDeco(yb) {
          let bb = -1,
            Wy = [];
          for (let Uy of yb.state.selection.lZ) {
            let hy = yb.lineBlockAt(Uy.head);
            hy.from > bb && (Wy.push(Cf.range(hy.from)), bb = hy.from)
          }
          return Xy.set(Wy)
        }
      }, {
        PZ: yb => yb.PZ
      });
    class Vf extends My {
      constructor(yb) {
        super(), this.content = yb
      }
      toDOM(yb) {
        let bb = document.createElement("span");
        return bb.className = "cm-placeholder", bb.style.pointerEvents = "none", bb.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(yb) : this.content.cloneNode(!0)), bb.setAttribute("aria-hidden", "true"), bb
      }
      coordsAt(yb) {
        let bb = yb.firstChild ? jb(yb.firstChild) : [];
        if (!bb.length) return null;
        let Wy = window.getComputedStyle(yb.parentNode),
          Uy = zb(bb[0], "rtl" != Wy.direction),
          hy = parseInt(Wy.lineHeight);
        return Uy.bottom - Uy.top > 1.5 * hy ? {
          left: Uy.left,
          right: Uy.right,
          top: Uy.top,
          bottom: Uy.top + hy
        } : Uy
      }
      ignoreEvent() {
        return !1
      }
    }

    function Jf(yb) {
      let bb = Ib.fromClass(class {
        constructor(bb) {
          this.view = bb, this.placeholder = yb ? Xy.set([Xy.widget({
            widget: new Vf(yb),
            side: 1
          }).range(0)]) : Xy.none
        }
        get PZ() {
          return this.view.state.doc.length ? Xy.none : this.placeholder
        }
      }, {
        PZ: yb => yb.PZ
      });
      return "string" == typeof yb ? [bb, Oh.contentAttributes.of({
        "aria-placeholder": yb
      })] : bb
    }
    const gZ = 2e3;

    function Gf(yb, bb) {
      let Wy = yb.posAtCoords({
          x: bb.clientX,
          y: bb.clientY
        }, !1),
        hy = yb.state.doc.lineAt(Wy),
        fy = Wy - hy.from,
        Zy = fy > gZ ? -1 : fy == hy.length ? function(yb, bb) {
          let Wy = yb.coordsAtPos(yb.viewport.from);
          return Wy ? Math.round(Math.abs((Wy.left - bb) / yb.defaultCharacterWidth)) : -1
        }(yb, bb.clientX) : (0, Uy.cb)(hy.text, yb.state.tabSize, Wy - hy.from);
      return {
        line: hy.number,
        col: Zy,
        off: fy
      }
    }

    function Of(yb, bb) {
      let Wy = Gf(yb, bb),
        hy = yb.state.selection;
      return Wy ? {
        update(yb) {
          if (yb.docChanged) {
            let bb = yb.changes.mapPos(yb.startState.doc.line(Wy.line).from),
              Uy = yb.state.doc.lineAt(bb);
            Wy = {
              line: Uy.number,
              col: Wy.col,
              off: Math.min(Wy.off, Uy.length)
            }, hy = hy.map(yb.changes)
          }
        },
        get(bb, fy, Zy) {
          let cb = Gf(yb, bb);
          if (!cb) return hy;
          let Py = function(yb, bb, Wy) {
            let hy = Math.min(bb.line, Wy.line),
              fy = Math.max(bb.line, Wy.line),
              Zy = [];
            if (bb.off > gZ || Wy.off > gZ || bb.col < 0 || Wy.col < 0) {
              let cb = Math.min(bb.off, Wy.off),
                Py = Math.max(bb.off, Wy.off);
              for (let bb = hy; bb <= fy; bb++) {
                let Wy = yb.doc.line(bb);
                Wy.length <= Py && Zy.push(Uy.n.range(Wy.from + cb, Wy.to + Py))
              }
            } else {
              let cb = Math.min(bb.col, Wy.col),
                Py = Math.max(bb.col, Wy.col);
              for (let bb = hy; bb <= fy; bb++) {
                let Wy = yb.doc.line(bb),
                  hy = (0, Uy.eb)(Wy.text, cb, yb.tabSize, !0);
                if (hy < 0) Zy.push(Uy.n.cursor(Wy.to));
                else {
                  let bb = (0, Uy.eb)(Wy.text, Py, yb.tabSize);
                  Zy.push(Uy.n.range(Wy.from + hy, Wy.from + bb))
                }
              }
            }
            return Zy
          }(yb.state, Wy, cb);
          return Py.length ? Zy ? Uy.n.create(Py.concat(hy.lZ)) : Uy.n.create(Py) : hy
        }
      } : null
    }

    function Rf(yb) {
      let bb = (null === yb || void 0 === yb ? void 0 : yb.eventFilter) || (yb => yb.altKey && 0 == yb.button);
      return Oh.mouseSelectionStyle.of(((yb, Wy) => bb(Wy) ? Of(yb, Wy) : null))
    }
    const vZ = {
        Alt: [18, yb => !!yb.altKey],
        Control: [17, yb => !!yb.ctrlKey],
        Shift: [16, yb => !!yb.shiftKey],
        Meta: [91, yb => !!yb.metaKey]
      },
      iZ = {
        style: "cursor: crosshair"
      };

    function Mf() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [bb, Wy] = vZ[yb.key || "Alt"],
        Uy = Ib.fromClass(class {
          constructor(yb) {
            this.view = yb, this.isDown = !1
          }
          set(yb) {
            this.isDown != yb && (this.isDown = yb, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(yb) {
              this.set(yb.keyCode == bb || Wy(yb))
            },
            keyup(yb) {
              yb.keyCode != bb && Wy(yb) || this.set(!1)
            },
            mousemove(yb) {
              this.set(Wy(yb))
            }
          }
        });
      return [Uy, Oh.contentAttributes.of((yb => {
        var bb;
        return (null === (bb = yb.plugin(Uy)) || void 0 === bb ? void 0 : bb.isDown) ? iZ : null
      }))]
    }
    const Yf = "-10000px";
    class Xf {
      constructor(yb, bb, Wy, Uy) {
        this.facet = bb, this.createTooltipView = Wy, this.removeTooltipView = Uy, this.input = yb.state.facet(bb), this.tooltips = this.input.filter((yb => yb));
        let hy = null;
        this.tooltipViews = this.tooltips.map((yb => hy = Wy(yb, hy)))
      }
      update(yb, bb) {
        var Wy;
        let Uy = yb.state.facet(this.facet),
          hy = Uy.filter((yb => yb));
        if (Uy === this.input) {
          for (let bb of this.tooltipViews) bb.update && bb.update(yb);
          return !1
        }
        let fy = [],
          Zy = bb ? [] : null;
        for (let cb = 0; cb < hy.length; cb++) {
          let Wy = hy[cb],
            Uy = -1;
          if (Wy) {
            for (let yb = 0; yb < this.tooltips.length; yb++) {
              let bb = this.tooltips[yb];
              bb && bb.create == Wy.create && (Uy = yb)
            }
            if (Uy < 0) fy[cb] = this.createTooltipView(Wy, cb ? fy[cb - 1] : null), Zy && (Zy[cb] = !!Wy.above);
            else {
              let Wy = fy[cb] = this.tooltipViews[Uy];
              Zy && (Zy[cb] = bb[Uy]), Wy.update && Wy.update(yb)
            }
          }
        }
        for (let cb of this.tooltipViews) fy.indexOf(cb) < 0 && (this.removeTooltipView(cb), null === (Wy = cb.destroy) || void 0 === Wy || Wy.call(cb));
        return bb && (Zy.forEach(((yb, Wy) => bb[Wy] = yb)), bb.length = Zy.length), this.input = Uy, this.tooltips = hy, this.tooltipViews = fy, !0
      }
    }

    function nf(yb) {
      let bb = yb.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: bb.clientHeight,
        right: bb.clientWidth
      }
    }
    const uf = Uy.v.define({
        combine: yb => {
          var bb, Wy, Uy;
          return {
            position: gb.ios ? "absolute" : (null === (bb = yb.find((yb => yb.position))) || void 0 === bb ? void 0 : bb.position) || "fixed",
            parent: (null === (Wy = yb.find((yb => yb.parent))) || void 0 === Wy ? void 0 : Wy.parent) || null,
            tooltipSpace: (null === (Uy = yb.find((yb => yb.tooltipSpace))) || void 0 === Uy ? void 0 : Uy.tooltipSpace) || nf
          }
        }
      }),
      rZ = new WeakMap,
      Hf = Ib.fromClass(class {
        constructor(yb) {
          this.view = yb, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let bb = yb.state.facet(uf);
          this.position = bb.position, this.parent = bb.parent, this.classes = yb.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Xf(yb, Lf, ((yb, bb) => this.createTooltip(yb, bb)), (yb => {
            this.resizeObserver && this.resizeObserver.unobserve(yb.dom), yb.dom.remove()
          })), this.above = this.manager.tooltips.map((yb => !!yb.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((yb => {
            Date.now() > this.lastTransaction - 50 && yb.length > 0 && yb[yb.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), yb.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let yb of this.manager.tooltipViews) this.intersectionObserver.observe(yb.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(yb) {
          yb.transactions.length && (this.lastTransaction = Date.now());
          let bb = this.manager.update(yb, this.above);
          bb && this.observeIntersection();
          let Wy = bb || yb.geometryChanged,
            Uy = yb.state.facet(uf);
          if (Uy.position != this.position && !this.madeAbsolute) {
            this.position = Uy.position;
            for (let yb of this.manager.tooltipViews) yb.dom.style.position = this.position;
            Wy = !0
          }
          if (Uy.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = Uy.parent, this.createContainer();
            for (let yb of this.manager.tooltipViews) this.container.appendChild(yb.dom);
            Wy = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          Wy && this.maybeMeasure()
        }
        createTooltip(yb, bb) {
          let Wy = yb.create(this.view),
            Uy = bb ? bb.dom : null;
          if (Wy.dom.classList.add("cm-tooltip"), yb.arrow && !Wy.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let yb = document.createElement("div");
            yb.className = "cm-tooltip-arrow", Wy.dom.appendChild(yb)
          }
          return Wy.dom.style.position = this.position, Wy.dom.style.top = Yf, Wy.dom.style.left = "0px", this.container.insertBefore(Wy.dom, Uy), Wy.mount && Wy.mount(this.view), this.resizeObserver && this.resizeObserver.observe(Wy.dom), Wy
        }
        destroy() {
          var yb, bb, Wy;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let Uy of this.manager.tooltipViews) Uy.dom.remove(), null === (yb = Uy.destroy) || void 0 === yb || yb.call(Uy);
          this.parent && this.container.remove(), null === (bb = this.resizeObserver) || void 0 === bb || bb.disconnect(), null === (Wy = this.intersectionObserver) || void 0 === Wy || Wy.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let yb = 1,
            bb = 1,
            Wy = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: yb
            } = this.manager.tooltipViews[0];
            if (gb.safari) {
              let bb = yb.getBoundingClientRect();
              Wy = Math.abs(bb.top + 1e4) > 1 || Math.abs(bb.left) > 1
            } else Wy = !!yb.offsetParent && yb.offsetParent != this.container.ownerDocument.body
          }
          if (Wy || "absolute" == this.position)
            if (this.parent) {
              let Wy = this.parent.getBoundingClientRect();
              Wy.width && Wy.height && (yb = Wy.width / this.parent.offsetWidth, bb = Wy.height / this.parent.offsetHeight)
            } else({
              scaleX: yb,
              scaleY: bb
            } = this.view.viewState);
          let Uy = this.view.scrollDOM.getBoundingClientRect(),
            hy = cU(this.view);
          return {
            visible: {
              left: Uy.left + hy.left,
              top: Uy.top + hy.top,
              right: Uy.right - hy.right,
              bottom: Uy.bottom - hy.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((yb, bb) => {
              let Wy = this.manager.tooltipViews[bb];
              return Wy.getCoords ? Wy.getCoords(yb.pos) : this.view.coordsAtPos(yb.pos)
            })),
            size: this.manager.tooltipViews.map((yb => {
              let {
                dom: bb
              } = yb;
              return bb.getBoundingClientRect()
            })),
            space: this.view.state.facet(uf).tooltipSpace(this.view),
            scaleX: yb,
            scaleY: bb,
            makeAbsolute: Wy
          }
        }
        writeMeasure(yb) {
          var bb;
          if (yb.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let yb of this.manager.tooltipViews) yb.dom.style.position = "absolute"
          }
          let {
            visible: Wy,
            space: Uy,
            scaleX: hy,
            scaleY: fy
          } = yb, Zy = [];
          for (let cb = 0; cb < this.manager.tooltips.length; cb++) {
            let Py = this.manager.tooltips[cb],
              oy = this.manager.tooltipViews[cb],
              {
                dom: By
              } = oy,
              Ky = yb.pos[cb],
              ey = yb.size[cb];
            if (!Ky || !1 !== Py.clip && (Ky.bottom <= Math.max(Wy.top, Uy.top) || Ky.top >= Math.min(Wy.bottom, Uy.bottom) || Ky.right < Math.max(Wy.left, Uy.left) - .1 || Ky.left > Math.min(Wy.right, Uy.right) + .1)) {
              By.style.top = Yf;
              continue
            }
            let qb = Py.arrow ? oy.dom.querySelector(".cm-tooltip-arrow") : null,
              sy = qb ? 7 : 0,
              Sy = ey.right - ey.left,
              Ey = null !== (bb = rZ.get(oy)) && void 0 !== bb ? bb : ey.bottom - ey.top,
              ly = oy.offset || pf,
              mb = this.view.textDirection == ob.LTR,
              Cy = ey.width > Uy.right - Uy.left ? mb ? Uy.left : Uy.right - ey.width : mb ? Math.max(Uy.left, Math.min(Ky.left - (qb ? 14 : 0) + ly.x, Uy.right - Sy)) : Math.min(Math.max(Uy.left, Ky.left - Sy + (qb ? 14 : 0) - ly.x), Uy.right - Sy),
              Ty = this.above[cb];
            !Py.strictSide && (Ty ? Ky.top - Ey - sy - ly.y < Uy.top : Ky.bottom + Ey + sy + ly.y > Uy.bottom) && Ty == Uy.bottom - Ky.bottom > Ky.top - Uy.top && (Ty = this.above[cb] = !Ty);
            let Vy = (Ty ? Ky.top - Uy.top : Uy.bottom - Ky.bottom) - sy;
            if (Vy < Ey && !1 !== oy.resize) {
              if (Vy < this.view.defaultLineHeight) {
                By.style.top = Yf;
                continue
              }
              rZ.set(oy, Ey), By.style.height = (Ey = Vy) / fy + "px"
            } else By.style.height && (By.style.height = "");
            let Jy = Ty ? Ky.top - Ey - sy - ly.y : Ky.bottom + sy + ly.y,
              gb = Cy + Sy;
            if (!0 !== oy.overlap)
              for (let yb of Zy) yb.left < gb && yb.right > Cy && yb.top < Jy + Ey && yb.bottom > Jy && (Jy = Ty ? yb.top - Ey - 2 - sy : yb.bottom + sy + 2);
            if ("absolute" == this.position ? (By.style.top = (Jy - yb.parent.top) / fy + "px", aZ(By, (Cy - yb.parent.left) / hy)) : (By.style.top = Jy / fy + "px", aZ(By, Cy / hy)), qb) {
              let yb = Ky.left + (mb ? ly.x : -ly.x) - (Cy + 14 - 7);
              qb.style.left = yb / hy + "px"
            }!0 !== oy.overlap && Zy.push({
              left: Cy,
              top: Jy,
              right: gb,
              bottom: Jy + Ey
            }), By.classList.toggle("cm-tooltip-above", Ty), By.classList.toggle("cm-tooltip-below", !Ty), oy.positioned && oy.positioned(yb.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let yb of this.manager.tooltipViews) yb.dom.style.top = Yf
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function aZ(yb, bb) {
      let Wy = parseInt(yb.style.left, 10);
      (isNaN(Wy) || Math.abs(bb - Wy) > 1) && (yb.style.left = bb + "px")
    }
    const Ff = Oh.baseTheme({
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
      pf = {
        x: 0,
        y: 0
      },
      Lf = Uy.v.define({
        enables: [Hf, Ff]
      }),
      Qf = Uy.v.define({
        combine: yb => yb.reduce(((yb, bb) => yb.concat(bb)), [])
      });
    class jZ {
      static create(yb) {
        return new jZ(yb)
      }
      constructor(yb) {
        this.view = yb, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Xf(yb, Qf, ((yb, bb) => this.createHostedView(yb, bb)), (yb => yb.dom.remove()))
      }
      createHostedView(yb, bb) {
        let Wy = yb.create(this.view);
        return Wy.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(Wy.dom, bb ? bb.dom.nextSibling : this.dom.firstChild), this.mounted && Wy.mount && Wy.mount(this.view), Wy
      }
      mount(yb) {
        for (let bb of this.manager.tooltipViews) bb.mount && bb.mount(yb);
        this.mounted = !0
      }
      positioned(yb) {
        for (let bb of this.manager.tooltipViews) bb.positioned && bb.positioned(yb)
      }
      update(yb) {
        this.manager.update(yb)
      }
      destroy() {
        var yb;
        for (let bb of this.manager.tooltipViews) null === (yb = bb.destroy) || void 0 === yb || yb.call(bb)
      }
      passProp(yb) {
        let bb;
        for (let Wy of this.manager.tooltipViews) {
          let Uy = Wy[yb];
          if (void 0 !== Uy)
            if (void 0 === bb) bb = Uy;
            else if (bb !== Uy) return
        }
        return bb
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
    const Df = Lf.compute([Qf], (yb => {
      let bb = yb.facet(Qf);
      return 0 === bb.length ? null : {
        pos: Math.min(...bb.map((yb => yb.pos))),
        end: Math.max(...bb.map((yb => {
          var bb;
          return null !== (bb = yb.end) && void 0 !== bb ? bb : yb.pos
        }))),
        create: jZ.create,
        above: bb[0].above,
        arrow: bb.some((yb => yb.arrow))
      }
    }));
    class tZ {
      constructor(yb, bb, Wy, Uy, hy) {
        this.view = yb, this.source = bb, this.field = Wy, this.setHover = Uy, this.hoverTime = hy, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: yb.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), yb.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), yb.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let yb = Date.now() - this.lastMove.time;
        yb < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - yb) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: yb,
          lastMove: bb
        } = this, Wy = yb.docView.tile.nearest(bb.target);
        if (!Wy) return;
        let Uy, hy = 1;
        if (Wy.isWidget()) Uy = Wy.posAtStart;
        else {
          if (Uy = yb.posAtCoords(bb), null == Uy) return;
          let Wy = yb.coordsAtPos(Uy);
          if (!Wy || bb.y < Wy.top || bb.y > Wy.bottom || bb.x < Wy.left - yb.defaultCharacterWidth || bb.x > Wy.right + yb.defaultCharacterWidth) return;
          let fy = yb.bidiSpans(yb.state.doc.lineAt(Uy)).find((yb => yb.from <= Uy && yb.to >= Uy)),
            Zy = fy && fy.dir == ob.RTL ? -1 : 1;
          hy = bb.x < Wy.left ? -Zy : Zy
        }
        let fy = this.source(yb, Uy, hy);
        if (null === fy || void 0 === fy ? void 0 : fy.then) {
          let bb = this.pending = {
            pos: Uy
          };
          fy.then((Wy => {
            this.pending == bb && (this.pending = null, !Wy || Array.isArray(Wy) && !Wy.length || yb.dispatch({
              effects: this.setHover.of(Array.isArray(Wy) ? Wy : [Wy])
            }))
          }), (bb => wb(yb.state, bb, "hover tooltip")))
        } else !fy || Array.isArray(fy) && !fy.length || yb.dispatch({
          effects: this.setHover.of(Array.isArray(fy) ? fy : [fy])
        })
      }
      get tooltip() {
        let yb = this.view.plugin(Hf),
          bb = yb ? yb.manager.tooltips.findIndex((yb => yb.create == jZ.create)) : -1;
        return bb > -1 ? yb.manager.tooltipViews[bb] : null
      }
      mousemove(yb) {
        var bb, Wy;
        this.lastMove = {
          x: yb.clientX,
          y: yb.clientY,
          target: yb.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: Uy,
          tooltip: hy
        } = this;
        if (Uy.length && hy && ! function(yb, bb) {
            let Wy, {
              left: Uy,
              right: hy,
              top: fy,
              bottom: Zy
            } = yb.getBoundingClientRect();
            if (Wy = yb.querySelector(".cm-tooltip-arrow")) {
              let yb = Wy.getBoundingClientRect();
              fy = Math.min(yb.top, fy), Zy = Math.max(yb.bottom, Zy)
            }
            return bb.clientX >= Uy - wf && bb.clientX <= hy + wf && bb.clientY >= fy - wf && bb.clientY <= Zy + wf
          }(hy.dom, yb) || this.pending) {
          let {
            pos: hy
          } = Uy[0] || this.pending, fy = null !== (Wy = null === (bb = Uy[0]) || void 0 === bb ? void 0 : bb.end) && void 0 !== Wy ? Wy : hy;
          (hy == fy ? this.view.posAtCoords(this.lastMove) == hy : function(yb, bb, Wy, Uy, hy) {
            let fy = yb.scrollDOM.getBoundingClientRect(),
              Zy = yb.documentTop + yb.documentPadding.top + yb.contentHeight;
            if (fy.left > Uy || fy.right < Uy || fy.top > hy || Math.min(fy.bottom, Zy) < hy) return !1;
            let cb = yb.posAtCoords({
              x: Uy,
              y: hy
            }, !1);
            return cb >= bb && cb <= Wy
          }(this.view, hy, fy, yb.clientX, yb.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(yb) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: bb
        } = this;
        if (bb.length) {
          let {
            tooltip: bb
          } = this;
          bb && bb.dom.contains(yb.relatedTarget) ? this.watchTooltipLeave(bb.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(yb) {
        let bb = Wy => {
          yb.removeEventListener("mouseleave", bb), this.active.length && !this.view.dom.contains(Wy.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        yb.addEventListener("mouseleave", bb)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const wf = 4;

    function kZ(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Wy = Uy.I.define(),
        hy = Uy.J.define({
          create: () => [],
          update(yb, hy) {
            if (yb.length && (bb.hideOnChange && (hy.docChanged || hy.selection) ? yb = [] : bb.hideOn && (yb = yb.filter((yb => !bb.hideOn(hy, yb)))), hy.docChanged)) {
              let bb = [];
              for (let Wy of yb) {
                let yb = hy.changes.mapPos(Wy.pos, -1, Uy.y.TrackDel);
                if (null != yb) {
                  let Uy = Object.assign(Object.create(null), Wy);
                  Uy.pos = yb, null != Uy.end && (Uy.end = hy.changes.mapPos(Uy.end)), bb.push(Uy)
                }
              }
              yb = bb
            }
            for (let bb of hy.effects) bb.is(Wy) && (yb = bb.value), bb.is(zZ) && (yb = []);
            return yb
          },
          provide: yb => Qf.from(yb)
        });
      return {
        active: hy,
        extension: [hy, Ib.define((Uy => new tZ(Uy, yb, hy, Wy, bb.hoverTime || 300))), Df]
      }
    }

    function Nf(yb, bb) {
      let Wy = yb.plugin(Hf);
      if (!Wy) return null;
      let Uy = Wy.manager.tooltips.indexOf(bb);
      return Uy < 0 ? null : Wy.manager.tooltipViews[Uy]
    }
    const zZ = Uy.I.define();
    const If = Uy.v.define({
      combine(yb) {
        let bb, Wy;
        for (let Uy of yb) bb = bb || Uy.topContainer, Wy = Wy || Uy.bottomContainer;
        return {
          topContainer: bb,
          bottomContainer: Wy
        }
      }
    });

    function xZ(yb, bb) {
      let Wy = yb.plugin(Af),
        Uy = Wy ? Wy.specs.indexOf(bb) : -1;
      return Uy > -1 ? Wy.panels[Uy] : null
    }
    const Af = Ib.fromClass(class {
      constructor(yb) {
        this.input = yb.state.facet(bc), this.specs = this.input.filter((yb => yb)), this.panels = this.specs.map((bb => bb(yb)));
        let bb = yb.state.facet(If);
        this.top = new df(yb, !0, bb.topContainer), this.bottom = new df(yb, !1, bb.bottomContainer), this.top.sync(this.panels.filter((yb => yb.top))), this.bottom.sync(this.panels.filter((yb => !yb.top)));
        for (let Wy of this.panels) Wy.dom.classList.add("cm-panel"), Wy.mount && Wy.mount()
      }
      update(yb) {
        let bb = yb.state.facet(If);
        this.top.container != bb.topContainer && (this.top.sync([]), this.top = new df(yb.view, !0, bb.topContainer)), this.bottom.container != bb.bottomContainer && (this.bottom.sync([]), this.bottom = new df(yb.view, !1, bb.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let Wy = yb.state.facet(bc);
        if (Wy != this.input) {
          let bb = Wy.filter((yb => yb)),
            Uy = [],
            hy = [],
            fy = [],
            Zy = [];
          for (let Wy of bb) {
            let bb, cb = this.specs.indexOf(Wy);
            cb < 0 ? (bb = Wy(yb.view), Zy.push(bb)) : (bb = this.panels[cb], bb.update && bb.update(yb)), Uy.push(bb), (bb.top ? hy : fy).push(bb)
          }
          this.specs = bb, this.panels = Uy, this.top.sync(hy), this.bottom.sync(fy);
          for (let yb of Zy) yb.dom.classList.add("cm-panel"), yb.mount && yb.mount()
        } else
          for (let Uy of this.panels) Uy.update && Uy.update(yb)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: yb => Oh.scrollMargins.of((bb => {
        let Wy = bb.plugin(yb);
        return Wy && {
          top: Wy.top.scrollMargin(),
          bottom: Wy.bottom.scrollMargin()
        }
      }))
    });
    class df {
      constructor(yb, bb, Wy) {
        this.view = yb, this.top = bb, this.container = Wy, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(yb) {
        for (let bb of this.panels) bb.destroy && yb.indexOf(bb) < 0 && bb.destroy();
        this.panels = yb, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let yb = this.container || this.view.dom;
          yb.insertBefore(this.dom, this.top ? yb.firstChild : null)
        }
        let yb = this.dom.firstChild;
        for (let bb of this.panels)
          if (bb.dom.parentNode == this.dom) {
            for (; yb != bb.dom;) yb = yc(yb);
            yb = yb.nextSibling
          } else this.dom.insertBefore(bb.dom, yb);
        for (; yb;) yb = yc(yb)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let yb of this.classes.split(" ")) yb && this.container.classList.remove(yb);
          for (let yb of (this.classes = this.view.themeClasses).split(" ")) yb && this.container.classList.add(yb)
        }
      }
    }

    function yc(yb) {
      let bb = yb.nextSibling;
      return yb.remove(), bb
    }
    const bc = Uy.v.define({
      enables: Af
    });

    function WZ(yb, bb) {
      let Wy, hy = new Promise((yb => Wy = yb)),
        fy = yb => function(yb, bb, Wy) {
          let Uy = bb.content ? bb.content(yb, (() => Zy(null))) : null;
          if (!Uy) {
            if (Uy = (0, Ky.e)("form"), bb.input) {
              let yb = (0, Ky.e)("input", bb.input);
              /^(text|password|number|email|tel|url)$/.test(yb.type) && yb.classList.add("cm-textfield"), yb.name || (yb.name = "input"), Uy.appendChild((0, Ky.e)("label", (bb.label || "") + ": ", yb))
            } else Uy.appendChild(document.createTextNode(bb.label || ""));
            Uy.appendChild(document.createTextNode(" ")), Uy.appendChild((0, Ky.e)("button", {
              class: "cm-button",
              type: "submit"
            }, bb.submitLabel || "OK"))
          }
          let hy = "FORM" == Uy.nodeName ? [Uy] : Uy.querySelectorAll("form");
          for (let cb = 0; cb < hy.length; cb++) {
            let yb = hy[cb];
            yb.addEventListener("keydown", (bb => {
              27 == bb.keyCode ? (bb.preventDefault(), Zy(null)) : 13 == bb.keyCode && (bb.preventDefault(), Zy(yb))
            })), yb.addEventListener("submit", (bb => {
              bb.preventDefault(), Zy(yb)
            }))
          }
          let fy = (0, Ky.e)("div", Uy, (0, Ky.e)("button", {
            onclick: () => Zy(null),
            "aria-label": yb.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          bb.class && (fy.className = bb.class);

          function Zy(bb) {
            fy.contains(fy.ownerDocument.activeElement) && yb.focus(), Wy(bb)
          }
          return fy.classList.add("cm-dialog"), {
            dom: fy,
            top: bb.top,
            mount: () => {
              if (bb.focus) {
                let yb;
                yb = "string" == typeof bb.focus ? Uy.querySelector(bb.focus) : Uy.querySelector("input") || Uy.querySelector("button"), yb && "select" in yb ? yb.select() : yb && "focus" in yb && yb.focus()
              }
            }
          }
        }(yb, bb, Wy);
      yb.state.field(UZ, !1) ? yb.dispatch({
        effects: hZ.of(fy)
      }) : yb.dispatch({
        effects: Uy.I.appendConfig.of(UZ.init((() => [fy])))
      });
      let Zy = fZ.of(fy);
      return {
        close: Zy,
        result: hy.then((bb => ((yb.win.queueMicrotask || (bb => yb.win.setTimeout(bb, 10)))((() => {
          yb.state.field(UZ).indexOf(fy) > -1 && yb.dispatch({
            effects: Zy
          })
        })), bb)))
      }
    }
    const UZ = Uy.J.define({
        create: () => [],
        update(yb, bb) {
          for (let Wy of bb.effects) Wy.is(hZ) ? yb = [Wy.value].concat(yb) : Wy.is(fZ) && (yb = yb.filter((yb => yb != Wy.value)));
          return yb
        },
        provide: yb => bc.computeN([yb], (bb => bb.field(yb)))
      }),
      hZ = Uy.I.define(),
      fZ = Uy.I.define();
    class ZZ extends Uy.F {
      compare(yb) {
        return this == yb || this.constructor == yb.constructor && this.eq(yb)
      }
      eq(yb) {
        return !1
      }
      destroy(yb) {}
    }
    ZZ.prototype.elementClass = "", ZZ.prototype.toDOM = void 0, ZZ.prototype.mapMode = Uy.y.TrackBefore, ZZ.prototype.startSide = ZZ.prototype.endSide = -1, ZZ.prototype.point = !0;
    const cc = Uy.v.define(),
      PZ = Uy.v.define(),
      oZ = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => Uy.E.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      BZ = Uy.v.define();

    function KZ(yb) {
      return [qc(), BZ.of({
        ...oZ,
        ...yb
      })]
    }
    const eZ = Uy.v.define({
      combine: yb => yb.some((yb => yb))
    });

    function qc(yb) {
      let bb = [sZ];
      return yb && !1 === yb.fixed && bb.push(eZ.of(!0)), bb
    }
    const sZ = Ib.fromClass(class {
      constructor(yb) {
        this.view = yb, this.domAfter = null, this.prevViewport = yb.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = yb.state.facet(BZ).map((bb => new mc(yb, bb))), this.fixed = !yb.state.facet(eZ);
        for (let bb of this.gutters) "after" == bb.config.side ? this.getDOMAfter().appendChild(bb.dom) : this.dom.appendChild(bb.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), yb.scrollDOM.insertBefore(this.dom, yb.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(yb) {
        if (this.updateGutters(yb)) {
          let bb = this.prevViewport,
            Wy = yb.view.viewport,
            Uy = Math.min(bb.to, Wy.to) - Math.max(bb.from, Wy.from);
          this.syncGutters(Uy < .8 * (Wy.to - Wy.from))
        }
        if (yb.geometryChanged) {
          let yb = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = yb, this.domAfter && (this.domAfter.style.minHeight = yb)
        }
        this.view.state.facet(eZ) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = yb.view.viewport
      }
      syncGutters(yb) {
        let bb = this.dom.nextSibling;
        yb && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let Wy = Uy.E.iter(this.view.state.facet(cc), this.view.viewport.from),
          hy = [],
          fy = this.gutters.map((yb => new lZ(yb, this.view.viewport, -this.view.documentPadding.top)));
        for (let Uy of this.view.viewportLineBlocks)
          if (hy.length && (hy = []), Array.isArray(Uy.type)) {
            let yb = !0;
            for (let bb of Uy.type)
              if (bb.type == Yy.Text && yb) {
                EZ(Wy, hy, bb.from);
                for (let yb of fy) yb.line(this.view, bb, hy);
                yb = !1
              } else if (bb.widget)
              for (let yb of fy) yb.widget(this.view, bb)
          } else if (Uy.type == Yy.Text) {
          EZ(Wy, hy, Uy.from);
          for (let yb of fy) yb.line(this.view, Uy, hy)
        } else if (Uy.widget)
          for (let yb of fy) yb.widget(this.view, Uy);
        for (let Uy of fy) Uy.finish();
        yb && (this.view.scrollDOM.insertBefore(this.dom, bb), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(yb) {
        let bb = yb.startState.facet(BZ),
          Wy = yb.state.facet(BZ),
          hy = yb.docChanged || yb.heightChanged || yb.viewportChanged || !Uy.E.eq(yb.startState.facet(cc), yb.state.facet(cc), yb.view.viewport.from, yb.view.viewport.to);
        if (bb == Wy)
          for (let Uy of this.gutters) Uy.update(yb) && (hy = !0);
        else {
          hy = !0;
          let Uy = [];
          for (let hy of Wy) {
            let Wy = bb.indexOf(hy);
            Wy < 0 ? Uy.push(new mc(this.view, hy)) : (this.gutters[Wy].update(yb), Uy.push(this.gutters[Wy]))
          }
          for (let yb of this.gutters) yb.dom.remove(), Uy.indexOf(yb) < 0 && yb.destroy();
          for (let yb of Uy) "after" == yb.config.side ? this.getDOMAfter().appendChild(yb.dom) : this.dom.appendChild(yb.dom);
          this.gutters = Uy
        }
        return hy
      }
      destroy() {
        for (let yb of this.gutters) yb.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: yb => Oh.scrollMargins.of((bb => {
        let Wy = bb.plugin(yb);
        if (!Wy || 0 == Wy.gutters.length || !Wy.fixed) return null;
        let Uy = Wy.dom.offsetWidth * bb.scaleX,
          hy = Wy.domAfter ? Wy.domAfter.offsetWidth * bb.scaleX : 0;
        return bb.textDirection == ob.LTR ? {
          left: Uy,
          right: hy
        } : {
          right: Uy,
          left: hy
        }
      }))
    });

    function SZ(yb) {
      return Array.isArray(yb) ? yb : [yb]
    }

    function EZ(yb, bb, Wy) {
      for (; yb.value && yb.from <= Wy;) yb.from == Wy && bb.push(yb.value), yb.next()
    }
    class lZ {
      constructor(yb, bb, Wy) {
        this.gutter = yb, this.height = Wy, this.i = 0, this.cursor = Uy.E.iter(yb.markers, bb.from)
      }
      addElement(yb, bb, Wy) {
        let {
          gutter: Uy
        } = this, hy = (bb.top - this.height) / yb.scaleY, fy = bb.height / yb.scaleY;
        if (this.i == Uy.elements.length) {
          let bb = new CZ(yb, fy, hy, Wy);
          Uy.elements.push(bb), Uy.dom.appendChild(bb.dom)
        } else Uy.elements[this.i].update(yb, fy, hy, Wy);
        this.height = bb.bottom, this.i++
      }
      line(yb, bb, Wy) {
        let Uy = [];
        EZ(this.cursor, Uy, bb.from), Wy.length && (Uy = Uy.concat(Wy));
        let hy = this.gutter.config.lineMarker(yb, bb, Uy);
        hy && Uy.unshift(hy);
        let fy = this.gutter;
        (0 != Uy.length || fy.config.renderEmptyElements) && this.addElement(yb, bb, Uy)
      }
      widget(yb, bb) {
        let Wy = this.gutter.config.widgetMarker(yb, bb.widget, bb),
          Uy = Wy ? [Wy] : null;
        for (let hy of yb.state.facet(PZ)) {
          let Wy = hy(yb, bb.widget, bb);
          Wy && (Uy || (Uy = [])).push(Wy)
        }
        Uy && this.addElement(yb, bb, Uy)
      }
      finish() {
        let yb = this.gutter;
        for (; yb.elements.length > this.i;) {
          let bb = yb.elements.pop();
          yb.dom.removeChild(bb.dom), bb.destroy()
        }
      }
    }
    class mc {
      constructor(yb, bb) {
        this.view = yb, this.config = bb, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let Wy in bb.domEventHandlers) this.dom.addEventListener(Wy, (Uy => {
          let hy, fy = Uy.target;
          if (fy != this.dom && this.dom.contains(fy)) {
            for (; fy.parentNode != this.dom;) fy = fy.parentNode;
            let yb = fy.getBoundingClientRect();
            hy = (yb.top + yb.bottom) / 2
          } else hy = Uy.clientY;
          let Zy = yb.lineBlockAtHeight(hy - yb.documentTop);
          bb.domEventHandlers[Wy](yb, Zy, Uy) && Uy.preventDefault()
        }));
        this.markers = SZ(bb.markers(yb)), bb.initialSpacer && (this.spacer = new CZ(yb, 0, 0, [bb.initialSpacer(yb)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(yb) {
        let bb = this.markers;
        if (this.markers = SZ(this.config.markers(yb.view)), this.spacer && this.config.updateSpacer) {
          let bb = this.config.updateSpacer(this.spacer.markers[0], yb);
          bb != this.spacer.markers[0] && this.spacer.update(yb.view, 0, 0, [bb])
        }
        let Wy = yb.view.viewport;
        return !Uy.E.eq(this.markers, bb, Wy.from, Wy.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(yb)
      }
      destroy() {
        for (let yb of this.elements) yb.destroy()
      }
    }
    class CZ {
      constructor(yb, bb, Wy, Uy) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(yb, bb, Wy, Uy)
      }
      update(yb, bb, Wy, Uy) {
        this.height != bb && (this.height = bb, this.dom.style.height = bb + "px"), this.above != Wy && (this.dom.style.marginTop = (this.above = Wy) ? Wy + "px" : ""),
          function(yb, bb) {
            if (yb.length != bb.length) return !1;
            for (let Wy = 0; Wy < yb.length; Wy++)
              if (!yb[Wy].compare(bb[Wy])) return !1;
            return !0
          }(this.markers, Uy) || this.setMarkers(yb, Uy)
      }
      setMarkers(yb, bb) {
        let Wy = "cm-gutterElement",
          Uy = this.dom.firstChild;
        for (let hy = 0, fy = 0;;) {
          let Zy = fy,
            cb = hy < bb.length ? bb[hy++] : null,
            Py = !1;
          if (cb) {
            let yb = cb.elementClass;
            yb && (Wy += " " + yb);
            for (let bb = fy; bb < this.markers.length; bb++)
              if (this.markers[bb].compare(cb)) {
                Zy = bb, Py = !0;
                break
              }
          } else Zy = this.markers.length;
          for (; fy < Zy;) {
            let yb = this.markers[fy++];
            if (yb.toDOM) {
              yb.destroy(Uy);
              let bb = Uy.nextSibling;
              Uy.remove(), Uy = bb
            }
          }
          if (!cb) break;
          cb.toDOM && (Py ? Uy = Uy.nextSibling : this.dom.insertBefore(cb.toDOM(yb), Uy)), Py && fy++
        }
        this.dom.className = Wy, this.markers = bb
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const TZ = Uy.v.define(),
      VZ = Uy.v.define(),
      JZ = Uy.v.define({
        combine: yb => (0, Uy._)(yb, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(yb, bb) {
            let Wy = Object.assign({}, yb);
            for (let Uy in bb) {
              let yb = Wy[Uy],
                hy = bb[Uy];
              Wy[Uy] = yb ? (bb, Wy, Uy) => yb(bb, Wy, Uy) || hy(bb, Wy, Uy) : hy
            }
            return Wy
          }
        })
      });
    class gc extends ZZ {
      constructor(yb) {
        super(), this.number = yb
      }
      eq(yb) {
        return this.number == yb.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function GZ(yb, bb) {
      return yb.state.facet(JZ).formatNumber(bb, yb.state)
    }
    const OZ = BZ.compute([JZ], (yb => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: yb => yb.state.facet(TZ),
      lineMarker: (yb, bb, Wy) => Wy.some((yb => yb.toDOM)) ? null : new gc(GZ(yb, yb.state.doc.lineAt(bb.from).number)),
      widgetMarker: (yb, bb, Wy) => {
        for (let Uy of yb.state.facet(VZ)) {
          let hy = Uy(yb, bb, Wy);
          if (hy) return hy
        }
        return null
      },
      lineMarkerChange: yb => yb.startState.facet(JZ) != yb.state.facet(JZ),
      initialSpacer: yb => new gc(GZ(yb, vc(yb.state.doc.lines))),
      updateSpacer(yb, bb) {
        let Wy = GZ(bb.view, vc(bb.view.state.doc.lines));
        return Wy == yb.number ? yb : new gc(Wy)
      },
      domEventHandlers: yb.facet(JZ).domEventHandlers,
      side: "before"
    })));

    function RZ() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [JZ.of(yb), qc(), OZ]
    }

    function vc(yb) {
      let bb = 9;
      for (; bb < yb;) bb = 10 * bb + 9;
      return bb
    }
    const ic = new class extends ZZ {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      MZ = cc.compute(["selection"], (yb => {
        let bb = [],
          Wy = -1;
        for (let Uy of yb.selection.lZ) {
          let hy = yb.doc.lineAt(Uy.head).from;
          hy > Wy && (Wy = hy, bb.push(ic.range(hy)))
        }
        return Uy.E.of(bb)
      }));

    function YZ() {
      return MZ
    }
  },
  39781: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy,
      g: () => qb,
      h: () => Zy,
      i: () => By,
      k: () => oy,
      n: () => ny,
      p: () => rb,
      r: () => uy,
      t: () => sy
    });
    const Uy = 1024;
    let hy = 0;
    class fy {
      constructor(yb, bb) {
        this.from = yb, this.to = bb
      }
    }
    class Zy {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = hy++, this.perNode = !!yb.perNode, this.deserialize = yb.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = yb.combine || null
      }
      add(yb) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof yb && (yb = oy.match(yb)), bb => {
          let Wy = yb(bb);
          return void 0 === Wy ? null : [this, Wy]
        }
      }
    }
    Zy.closedBy = new Zy({
      deserialize: yb => yb.split(" ")
    }), Zy.openedBy = new Zy({
      deserialize: yb => yb.split(" ")
    }), Zy.group = new Zy({
      deserialize: yb => yb.split(" ")
    }), Zy.isolate = new Zy({
      deserialize: yb => {
        if (yb && "rtl" != yb && "ltr" != yb && "auto" != yb) throw new RangeError("Invalid value for isolate: " + yb);
        return yb || "auto"
      }
    }), Zy.contextHash = new Zy({
      perNode: !0
    }), Zy.lookAhead = new Zy({
      perNode: !0
    }), Zy.mounted = new Zy({
      perNode: !0
    });
    class cb {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = yb, this.overlay = bb, this.parser = Wy, this.bracketed = Uy
      }
      static get(yb) {
        return yb && yb.props && yb.props[Zy.mounted.id]
      }
    }
    const Py = Object.create(null);
    class oy {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = yb, this.props = bb, this.id = Wy, this.flags = Uy
      }
      static define(yb) {
        let bb = yb.props && yb.props.length ? Object.create(null) : Py,
          Wy = (yb.top ? 1 : 0) | (yb.skipped ? 2 : 0) | (yb.error ? 4 : 0) | (null == yb.name ? 8 : 0),
          Uy = new oy(yb.name || "", bb, yb.id, Wy);
        if (yb.props)
          for (let hy of yb.props)
            if (Array.isArray(hy) || (hy = hy(Uy)), hy) {
              if (hy[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              bb[hy[0].id] = hy[1]
            } return Uy
      }
      prop(yb) {
        return this.props[yb.id]
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
      is(yb) {
        if ("string" == typeof yb) {
          if (this.name == yb) return !0;
          let bb = this.prop(Zy.group);
          return !!bb && bb.indexOf(yb) > -1
        }
        return this.id == yb
      }
      static match(yb) {
        let bb = Object.create(null);
        for (let Wy in yb)
          for (let Uy of Wy.split(" ")) bb[Uy] = yb[Wy];
        return yb => {
          for (let Wy = yb.prop(Zy.group), Uy = -1; Uy < (Wy ? Wy.length : 0); Uy++) {
            let hy = bb[Uy < 0 ? yb.name : Wy[Uy]];
            if (hy) return hy
          }
        }
      }
    }
    oy.none = new oy("", Object.create(null), 0, 8);
    class By {
      constructor(yb) {
        this.types = yb;
        for (let bb = 0; bb < yb.length; bb++)
          if (yb[bb].id != bb) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let yb = [];
        for (var bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
        for (let hy of this.types) {
          let bb = null;
          for (let yb of Wy) {
            let Wy = yb(hy);
            if (Wy) {
              bb || (bb = Object.assign({}, hy.props));
              let yb = Wy[1],
                Uy = Wy[0];
              Uy.combine && Uy.id in bb && (yb = Uy.combine(bb[Uy.id], yb)), bb[Uy.id] = yb
            }
          }
          yb.push(bb ? new oy(hy.name, bb, hy.id, hy.flags) : hy)
        }
        return new By(yb)
      }
    }
    const Ky = new WeakMap,
      ey = new WeakMap;
    var qb;
    ! function(yb) {
      yb[yb.ExcludeBuffers = 1] = "ExcludeBuffers", yb[yb.IncludeAnonymous = 2] = "IncludeAnonymous", yb[yb.IgnoreMounts = 4] = "IgnoreMounts", yb[yb.IgnoreOverlays = 8] = "IgnoreOverlays", yb[yb.EnterBracketed = 16] = "EnterBracketed"
    }(qb || (qb = {}));
    class sy {
      constructor(yb, bb, Wy, Uy, hy) {
        if (this.type = yb, this.children = bb, this.positions = Wy, this.length = Uy, this.props = null, hy && hy.length) {
          this.props = Object.create(null);
          for (let [yb, bb] of hy) this.props["number" == typeof yb ? yb : yb.id] = bb
        }
      }
      toString() {
        let yb = cb.get(this);
        if (yb && !yb.overlay) return yb.tree.toString();
        let bb = "";
        for (let Wy of this.children) {
          let yb = Wy.toString();
          yb && (bb && (bb += ","), bb += yb)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (bb.length ? "(" + bb + ")" : "") : bb
      }
      cursor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new vb(this.topNode, yb)
      }
      cursorAt(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = Ky.get(this) || this.topNode,
          Uy = new vb(Wy);
        return Uy.moveTo(yb, bb), Ky.set(this, Uy._tree), Uy
      }
      get topNode() {
        return new Ty(this, 0, 0, null)
      }
      resolve(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = mb(Ky.get(this) || this.topNode, yb, bb, !1);
        return Ky.set(this, Wy), Wy
      }
      resolveInner(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = mb(ey.get(this) || this.topNode, yb, bb, !0);
        return ey.set(this, Wy), Wy
      }
      resolveStack(yb) {
        return function(yb, bb, Wy) {
          let Uy = yb.resolveInner(bb, Wy),
            hy = null;
          for (let fy = Uy instanceof Ty ? Uy : Uy.context.parent; fy; fy = fy.parent)
            if (fy.index < 0) {
              let yb = fy.parent;
              (hy || (hy = [Uy])).push(yb.resolve(bb, Wy)), fy = yb
            } else {
              let yb = cb.get(fy.tree);
              if (yb && yb.overlay && yb.overlay[0].from <= bb && yb.overlay[yb.overlay.length - 1].to >= bb) {
                let Zy = new Ty(yb.tree, yb.overlay[0].from + fy.from, -1, fy);
                (hy || (hy = [Uy])).push(mb(Zy, bb, Wy, !1))
              }
            } return hy ? Oy(hy) : Uy
        }(this, yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(yb) {
        let {
          enter: bb,
          qh: Wy,
          from: Uy = 0,
          to: hy = this.length
        } = yb, fy = yb.mode || 0, Zy = (fy & qb.IncludeAnonymous) > 0;
        for (let cb = this.cursor(fy | qb.IncludeAnonymous);;) {
          let yb = !1;
          if (cb.from <= hy && cb.to >= Uy && (!Zy && cb.type.isAnonymous || !1 !== bb(cb))) {
            if (cb.firstChild()) continue;
            yb = !0
          }
          for (; yb && Wy && (Zy || !cb.type.isAnonymous) && Wy(cb), !cb.nextSibling();) {
            if (!cb.parent()) return;
            yb = !0
          }
        }
      }
      prop(yb) {
        return yb.perNode ? this.props ? this.props[yb.id] : void 0 : this.type.prop(yb)
      }
      get propValues() {
        let yb = [];
        if (this.props)
          for (let bb in this.props) yb.push([+bb, this.props[bb]]);
        return yb
      }
      balance() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : Xy(oy.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((yb, bb, Wy) => new sy(this.type, yb, bb, Wy, this.propValues)), yb.makeTree || ((yb, bb, Wy) => new sy(oy.none, yb, bb, Wy)))
      }
      static build(yb) {
        return function(yb) {
          var bb;
          let {
            buffer: Wy,
            nodeSet: hy,
            maxBufferLength: fy = Uy,
            reused: cb = [],
            minRepeatType: Py = hy.types.length
          } = yb, oy = Array.isArray(Wy) ? new Sy(Wy, Wy.length) : Wy, By = hy.types, Ky = 0, ey = 0;

          function qb(yb, bb, Wy, Uy, Zy, sy) {
            let {
              id: Sy,
              start: gb,
              end: Gy,
              size: Oy
            } = oy, Ry = ey, vb = Ky;
            if (Oy < 0) {
              if (oy.next(), -1 == Oy) {
                let bb = cb[Sy];
                return Wy.push(bb), void Uy.push(gb - yb)
              }
              if (-3 == Oy) return void(Ky = Sy);
              if (-4 == Oy) return void(ey = Sy);
              throw new RangeError(`Unrecognized record size: ${Oy}`)
            }
            let ib, My, Yy = By[Sy],
              ny = gb - yb;
            if (Gy - gb <= fy && (My = Vy(oy.pos - bb, Zy))) {
              let bb = new Uint16Array(My.size - My.skip),
                Wy = oy.pos - My.size,
                Uy = bb.length;
              for (; oy.pos > Wy;) Uy = Jy(My.start, bb, Uy);
              ib = new Ey(bb, Gy - My.start, hy), ny = My.start - yb
            } else {
              let yb = oy.pos - Oy;
              oy.next();
              let bb = [],
                Wy = [],
                Uy = Sy >= Py ? Sy : -1,
                hy = 0,
                Zy = Gy;
              for (; oy.pos > yb;) Uy >= 0 && oy.id == Uy && oy.size >= 0 ? (oy.end <= Zy - fy && (Cy(bb, Wy, gb, hy, oy.end, Zy, Uy, Ry, vb), hy = bb.length, Zy = oy.end), oy.next()) : sy > 2500 ? ly(gb, yb, bb, Wy) : qb(gb, yb, bb, Wy, Uy, sy + 1);
              if (Uy >= 0 && hy > 0 && hy < bb.length && Cy(bb, Wy, gb, hy, gb, Zy, Uy, Ry, vb), bb.reverse(), Wy.reverse(), Uy > -1 && hy > 0) {
                let yb = mb(Yy, vb);
                ib = Xy(Yy, bb, Wy, 0, bb.length, 0, Gy - gb, yb, yb)
              } else ib = Ty(Yy, bb, Wy, Gy - gb, Ry - Gy, vb)
            }
            Wy.push(ib), Uy.push(ny)
          }

          function ly(yb, bb, Wy, Uy) {
            let Zy = [],
              cb = 0,
              Py = -1;
            for (; oy.pos > bb;) {
              let {
                id: yb,
                start: bb,
                end: Wy,
                size: Uy
              } = oy;
              if (Uy > 4) oy.next();
              else {
                if (Py > -1 && bb < Py) break;
                Py < 0 && (Py = Wy - fy), Zy.push(yb, bb, Wy), cb++, oy.next()
              }
            }
            if (cb) {
              let bb = new Uint16Array(4 * cb),
                fy = Zy[Zy.length - 2];
              for (let yb = Zy.length - 3, Wy = 0; yb >= 0; yb -= 3) bb[Wy++] = Zy[yb], bb[Wy++] = Zy[yb + 1] - fy, bb[Wy++] = Zy[yb + 2] - fy, bb[Wy++] = Wy;
              Wy.push(new Ey(bb, Zy[2] - fy, hy)), Uy.push(fy - yb)
            }
          }

          function mb(yb, bb) {
            return (Wy, Uy, hy) => {
              let fy, cb, Py = 0,
                oy = Wy.length - 1;
              if (oy >= 0 && (fy = Wy[oy]) instanceof sy) {
                if (!oy && fy.type == yb && fy.length == hy) return fy;
                (cb = fy.prop(Zy.lookAhead)) && (Py = Uy[oy] + fy.length + cb)
              }
              return Ty(yb, Wy, Uy, hy, Py, bb)
            }
          }

          function Cy(yb, bb, Wy, Uy, fy, Zy, cb, Py, oy) {
            let By = [],
              Ky = [];
            for (; yb.length > Uy;) By.push(yb.pop()), Ky.push(bb.pop() + Wy - fy);
            yb.push(Ty(hy.types[cb], By, Ky, Zy - fy, Py - Zy, oy)), bb.push(fy - Wy)
          }

          function Ty(yb, bb, Wy, Uy, hy, fy, cb) {
            if (fy) {
              let yb = [Zy.contextHash, fy];
              cb = cb ? [yb].concat(cb) : [yb]
            }
            if (hy > 25) {
              let yb = [Zy.lookAhead, hy];
              cb = cb ? [yb].concat(cb) : [yb]
            }
            return new sy(yb, bb, Wy, Uy, cb)
          }

          function Vy(yb, bb) {
            let Wy = oy.fork(),
              Uy = 0,
              hy = 0,
              Zy = 0,
              cb = Wy.end - fy,
              By = {
                size: 0,
                start: 0,
                skip: 0
              };
            yb: for (let fy = Wy.pos - yb; Wy.pos > fy;) {
              let yb = Wy.size;
              if (Wy.id == bb && yb >= 0) {
                By.size = Uy, By.start = hy, By.skip = Zy, Zy += 4, Uy += 4, Wy.next();
                continue
              }
              let oy = Wy.pos - yb;
              if (yb < 0 || oy < fy || Wy.start < cb) break;
              let Ky = Wy.id >= Py ? 4 : 0,
                ey = Wy.start;
              for (Wy.next(); Wy.pos > oy;) {
                if (Wy.size < 0) {
                  if (-3 != Wy.size && -4 != Wy.size) break yb;
                  Ky += 4
                } else Wy.id >= Py && (Ky += 4);
                Wy.next()
              }
              hy = ey, Uy += yb, Zy += Ky
            }
            return (bb < 0 || Uy == yb) && (By.size = Uy, By.start = hy, By.skip = Zy), By.size > 4 ? By : void 0
          }

          function Jy(yb, bb, Wy) {
            let {
              id: Uy,
              start: hy,
              end: fy,
              size: Zy
            } = oy;
            if (oy.next(), Zy >= 0 && Uy < Py) {
              let cb = Wy;
              if (Zy > 4) {
                let Uy = oy.pos - (Zy - 4);
                for (; oy.pos > Uy;) Wy = Jy(yb, bb, Wy)
              }
              bb[--Wy] = cb, bb[--Wy] = fy - yb, bb[--Wy] = hy - yb, bb[--Wy] = Uy
            } else - 3 == Zy ? Ky = Uy : -4 == Zy && (ey = Uy);
            return Wy
          }
          let gb = [],
            Gy = [];
          for (; oy.pos > 0;) qb(yb.start || 0, yb.bufferStart || 0, gb, Gy, -1, 0);
          let Oy = null !== (bb = yb.length) && void 0 !== bb ? bb : gb.length ? Gy[0] + gb[0].length : 0;
          return new sy(By[yb.topID], gb.reverse(), Gy.reverse(), Oy)
        }(yb)
      }
    }
    sy.empty = new sy(oy.none, [], [], 0);
    class Sy {
      constructor(yb, bb) {
        this.buffer = yb, this.index = bb
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
        return new Sy(this.buffer, this.index)
      }
    }
    class Ey {
      constructor(yb, bb, Wy) {
        this.buffer = yb, this.length = bb, this.set = Wy
      }
      get type() {
        return oy.none
      }
      toString() {
        let yb = [];
        for (let bb = 0; bb < this.buffer.length;) yb.push(this.childString(bb)), bb = this.buffer[bb + 3];
        return yb.join(",")
      }
      childString(yb) {
        let bb = this.buffer[yb],
          Wy = this.buffer[yb + 3],
          Uy = this.set.types[bb],
          hy = Uy.name;
        if (/\W/.test(hy) && !Uy.isError && (hy = JSON.stringify(hy)), Wy == (yb += 4)) return hy;
        let fy = [];
        for (; yb < Wy;) fy.push(this.childString(yb)), yb = this.buffer[yb + 3];
        return hy + "(" + fy.join(",") + ")"
      }
      findChild(yb, bb, Wy, Uy, hy) {
        let {
          buffer: fy
        } = this, Zy = -1;
        for (let cb = yb; cb != bb && !(ly(hy, Uy, fy[cb + 1], fy[cb + 2]) && (Zy = cb, Wy > 0)); cb = fy[cb + 3]);
        return Zy
      }
      slice(yb, bb, Wy) {
        let Uy = this.buffer,
          hy = new Uint16Array(bb - yb),
          fy = 0;
        for (let Zy = yb, cb = 0; Zy < bb;) {
          hy[cb++] = Uy[Zy++], hy[cb++] = Uy[Zy++] - Wy;
          let bb = hy[cb++] = Uy[Zy++] - Wy;
          hy[cb++] = Uy[Zy++] - yb, fy = Math.max(fy, bb)
        }
        return new Ey(hy, fy, this.set)
      }
    }

    function ly(yb, bb, Wy, Uy) {
      switch (yb) {
        case -2:
          return Wy < bb;
        case -1:
          return Uy >= bb && Wy < bb;
        case 0:
          return Wy < bb && Uy > bb;
        case 1:
          return Wy <= bb && Uy > bb;
        case 2:
          return Uy > bb;
        case 4:
          return !0
      }
    }

    function mb(yb, bb, Wy, Uy) {
      for (var hy; yb.from == yb.to || (Wy < 1 ? yb.from >= bb : yb.from > bb) || (Wy > -1 ? yb.to <= bb : yb.to < bb);) {
        let bb = !Uy && yb instanceof Ty && yb.index < 0 ? null : yb.parent;
        if (!bb) return yb;
        yb = bb
      }
      let fy = Uy ? 0 : qb.IgnoreOverlays;
      if (Uy)
        for (let Zy = yb, cb = Zy.parent; cb; Zy = cb, cb = Zy.parent) Zy instanceof Ty && Zy.index < 0 && (null === (hy = cb.enter(bb, Wy, fy)) || void 0 === hy ? void 0 : hy.from) != Zy.from && (yb = cb);
      for (;;) {
        let Uy = yb.enter(bb, Wy, fy);
        if (!Uy) return yb;
        yb = Uy
      }
    }
    class Cy {
      cursor() {
        return new vb(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(yb) {
        let bb = Vy(this, yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return bb.length ? bb[0] : null
      }
      getChildren(yb) {
        return Vy(this, yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(yb) {
        return mb(this, yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(yb) {
        return mb(this, yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(yb) {
        return Jy(this.parent, yb)
      }
      enterUnfinishedNodesBefore(yb) {
        let bb = this.childBefore(yb),
          Wy = this;
        for (; bb;) {
          let yb = bb.lastChild;
          if (!yb || yb.to != bb.to) break;
          yb.type.isError && yb.from == yb.to ? (Wy = bb, bb = yb.prevSibling) : bb = yb
        }
        return Wy
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class Ty extends Cy {
      constructor(yb, bb, Wy, Uy) {
        super(), this._tree = yb, this.from = bb, this.index = Wy, this._parent = Uy
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
      nextChild(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let fy = this;;) {
          for (let {
              children: Zy,
              positions: Py
            } = fy._tree, oy = bb > 0 ? Zy.length : -1; yb != oy; yb += bb) {
            let oy, By = Zy[yb],
              Ky = Py[yb] + fy.from;
            if (hy & qb.EnterBracketed && By instanceof sy && (oy = cb.get(By)) && !oy.overlay && oy.bracketed && Wy >= Ky && Wy <= Ky + By.length || ly(Uy, Wy, Ky, Ky + By.length))
              if (By instanceof Ey) {
                if (hy & qb.ExcludeBuffers) continue;
                let Zy = By.findChild(0, By.buffer.length, bb, Wy - Ky, Uy);
                if (Zy > -1) return new Gy(new gb(fy, By, yb, Ky), null, Zy)
              } else if (hy & qb.IncludeAnonymous || !By.type.isAnonymous || ib(By)) {
              let Zy;
              if (!(hy & qb.IgnoreMounts) && (Zy = cb.get(By)) && !Zy.overlay) return new Ty(Zy.tree, Ky, yb, fy);
              let Py = new Ty(By, Ky, yb, fy);
              return hy & qb.IncludeAnonymous || !Py.type.isAnonymous ? Py : Py.nextChild(bb < 0 ? By.children.length - 1 : 0, bb, Wy, Uy, hy)
            }
          }
          if (hy & qb.IncludeAnonymous || !fy.type.isAnonymous) return null;
          if (yb = fy.index >= 0 ? fy.index + bb : bb < 0 ? -1 : fy._parent._tree.children.length, fy = fy._parent, !fy) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(yb) {
        return this.nextChild(0, 1, yb, 2)
      }
      childBefore(yb) {
        return this.nextChild(this._tree.children.length - 1, -1, yb, -2)
      }
      prop(yb) {
        return this._tree.prop(yb)
      }
      enter(yb, bb) {
        let Wy, Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(Uy & qb.IgnoreOverlays) && (Wy = cb.get(this._tree)) && Wy.overlay) {
          let hy = yb - this.from,
            fy = Uy & qb.EnterBracketed && Wy.bracketed;
          for (let {
              from: yb,
              to: Uy
            }
            of Wy.overlay)
            if ((bb > 0 || fy ? yb <= hy : yb < hy) && (bb < 0 || fy ? Uy >= hy : Uy > hy)) return new Ty(Wy.tree, Wy.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, yb, bb, Uy)
      }
      nextSignificantParent() {
        let yb = this;
        for (; yb.type.isAnonymous && yb._parent;) yb = yb._parent;
        return yb
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

    function Vy(yb, bb, Wy, Uy) {
      let hy = yb.cursor(),
        fy = [];
      if (!hy.firstChild()) return fy;
      if (null != Wy)
        for (let Zy = !1; !Zy;)
          if (Zy = hy.type.is(Wy), !hy.nextSibling()) return fy;
      for (;;) {
        if (null != Uy && hy.type.is(Uy)) return fy;
        if (hy.type.is(bb) && fy.push(hy.node), !hy.nextSibling()) return null == Uy ? fy : []
      }
    }

    function Jy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.length - 1;
      for (let Uy = yb; Wy >= 0; Uy = Uy.parent) {
        if (!Uy) return !1;
        if (!Uy.type.isAnonymous) {
          if (bb[Wy] && bb[Wy] != Uy.name) return !1;
          Wy--
        }
      }
      return !0
    }
    class gb {
      constructor(yb, bb, Wy, Uy) {
        this.parent = yb, this.buffer = bb, this.index = Wy, this.start = Uy
      }
    }
    class Gy extends Cy {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(yb, bb, Wy) {
        super(), this.context = yb, this._parent = bb, this.index = Wy, this.type = yb.buffer.set.types[yb.buffer.buffer[Wy]]
      }
      child(yb, bb, Wy) {
        let {
          buffer: Uy
        } = this.context, hy = Uy.findChild(this.index + 4, Uy.buffer[this.index + 3], yb, bb - this.context.start, Wy);
        return hy < 0 ? null : new Gy(this.context, this, hy)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(yb) {
        return this.child(1, yb, 2)
      }
      childBefore(yb) {
        return this.child(-1, yb, -2)
      }
      prop(yb) {
        return this.type.prop(yb)
      }
      enter(yb, bb) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & qb.ExcludeBuffers) return null;
        let {
          buffer: Wy
        } = this.context, Uy = Wy.findChild(this.index + 4, Wy.buffer[this.index + 3], bb > 0 ? 1 : -1, yb - this.context.start, bb);
        return Uy < 0 ? null : new Gy(this.context, this, Uy)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(yb) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + yb, yb, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: yb
        } = this.context, bb = yb.buffer[this.index + 3];
        return bb < (this._parent ? yb.buffer[this._parent.index + 3] : yb.buffer.length) ? new Gy(this.context, this._parent, bb) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: yb
        } = this.context, bb = this._parent ? this._parent.index + 4 : 0;
        return this.index == bb ? this.externalSibling(-1) : new Gy(this.context, this._parent, yb.findChild(bb, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let yb = [],
          bb = [],
          {
            buffer: Wy
          } = this.context,
          Uy = this.index + 4,
          hy = Wy.buffer[this.index + 3];
        if (hy > Uy) {
          let fy = Wy.buffer[this.index + 1];
          yb.push(Wy.slice(Uy, hy, fy)), bb.push(0)
        }
        return new sy(this.type, yb, bb, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function Oy(yb) {
      if (!yb.length) return null;
      let bb = 0,
        Wy = yb[0];
      for (let fy = 1; fy < yb.length; fy++) {
        let Uy = yb[fy];
        (Uy.from > Wy.from || Uy.to < Wy.to) && (Wy = Uy, bb = fy)
      }
      let Uy = Wy instanceof Ty && Wy.index < 0 ? null : Wy.parent,
        hy = yb.slice();
      return Uy ? hy[bb] = Uy : hy.splice(bb, 1), new Ry(hy, Wy)
    }
    class Ry {
      constructor(yb, bb) {
        this.heads = yb, this.node = bb
      }
      get next() {
        return Oy(this.heads)
      }
    }
    class vb {
      get name() {
        return this.type.name
      }
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = bb & ~qb.EnterBracketed, yb instanceof Ty) this.yieldNode(yb);
        else {
          this._tree = yb.context.parent, this.buffer = yb.context;
          for (let bb = yb._parent; bb; bb = bb._parent) this.stack.unshift(bb.index);
          this.bufferNode = yb, this.yieldBuf(yb.index)
        }
      }
      yieldNode(yb) {
        return !!yb && (this._tree = yb, this.type = yb.type, this.from = yb.from, this.to = yb.to, !0)
      }
      yieldBuf(yb, bb) {
        this.index = yb;
        let {
          start: Wy,
          buffer: Uy
        } = this.buffer;
        return this.type = bb || Uy.set.types[Uy.buffer[yb]], this.from = Wy + Uy.buffer[yb + 1], this.to = Wy + Uy.buffer[yb + 2], !0
      }
      yield(yb) {
        return !!yb && (yb instanceof Ty ? (this.buffer = null, this.yieldNode(yb)) : (this.buffer = yb.context, this.yieldBuf(yb.index, yb.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(yb, bb, Wy) {
        if (!this.buffer) return this.yield(this._tree.nextChild(yb < 0 ? this._tree._tree.children.length - 1 : 0, yb, bb, Wy, this.mode));
        let {
          buffer: Uy
        } = this.buffer, hy = Uy.findChild(this.index + 4, Uy.buffer[this.index + 3], yb, bb - this.buffer.start, Wy);
        return !(hy < 0) && (this.stack.push(this.index), this.yieldBuf(hy))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(yb) {
        return this.enterChild(1, yb, 2)
      }
      childBefore(yb) {
        return this.enterChild(-1, yb, -2)
      }
      enter(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(Wy & qb.ExcludeBuffers) && this.enterChild(1, yb, bb) : this.yield(this._tree.enter(yb, bb, Wy))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & qb.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let yb = this.mode & qb.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(yb)
      }
      sibling(yb) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + yb, yb, 0, 4, this.mode));
        let {
          buffer: bb
        } = this.buffer, Wy = this.stack.length - 1;
        if (yb < 0) {
          let yb = Wy < 0 ? 0 : this.stack[Wy] + 4;
          if (this.index != yb) return this.yieldBuf(bb.findChild(yb, this.index, -1, 0, 4))
        } else {
          let yb = bb.buffer[this.index + 3];
          if (yb < (Wy < 0 ? bb.buffer.length : bb.buffer[this.stack[Wy] + 3])) return this.yieldBuf(yb)
        }
        return Wy < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + yb, yb, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(yb) {
        let bb, Wy, {
          buffer: Uy
        } = this;
        if (Uy) {
          if (yb > 0) {
            if (this.index < Uy.buffer.buffer.length) return !1
          } else
            for (let yb = 0; yb < this.index; yb++)
              if (Uy.buffer.buffer[yb + 3] < this.index) return !1;
          ({
            index: bb,
            parent: Wy
          } = Uy)
        } else({
          index: bb,
          _parent: Wy
        } = this._tree);
        for (; Wy;
          ({
            index: bb,
            _parent: Wy
          } = Wy))
          if (bb > -1)
            for (let Uy = bb + yb, hy = yb < 0 ? -1 : Wy._tree.children.length; Uy != hy; Uy += yb) {
              let yb = Wy._tree.children[Uy];
              if (this.mode & qb.IncludeAnonymous || yb instanceof Ey || !yb.type.isAnonymous || ib(yb)) return !1
            }
        return !0
      }
      move(yb, bb) {
        if (bb && this.enterChild(yb, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(yb)) return !0;
          if (this.atLastNode(yb) || !this.parent()) return !1
        }
      }
      next() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, yb)
      }
      prev() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, yb)
      }
      moveTo(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (bb < 1 ? this.from >= yb : this.from > yb) || (bb > -1 ? this.to <= yb : this.to < yb)) && this.parent(););
        for (; this.enterChild(1, yb, bb););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let yb = this.bufferNode,
          bb = null,
          Wy = 0;
        if (yb && yb.context == this.buffer) yb: for (let Uy = this.index, hy = this.stack.length; hy >= 0;) {
          for (let fy = yb; fy; fy = fy._parent)
            if (fy.index == Uy) {
              if (Uy == this.index) return fy;
              bb = fy, Wy = hy + 1;
              break yb
            } Uy = this.stack[--hy]
        }
        for (let Uy = Wy; Uy < this.stack.length; Uy++) bb = new Gy(this.buffer, bb, this.stack[Uy]);
        return this.bufferNode = new Gy(this.buffer, bb, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(yb, bb) {
        for (let Wy = 0;;) {
          let Uy = !1;
          if (this.type.isAnonymous || !1 !== yb(this)) {
            if (this.firstChild()) {
              Wy++;
              continue
            }
            this.type.isAnonymous || (Uy = !0)
          }
          for (;;) {
            if (Uy && bb && bb(this), Uy = this.type.isAnonymous, !Wy) return;
            if (this.nextSibling()) break;
            this.parent(), Wy--, Uy = !0
          }
        }
      }
      matchContext(yb) {
        if (!this.buffer) return Jy(this.node.parent, yb);
        let {
          buffer: bb
        } = this.buffer, {
          types: Wy
        } = bb.set;
        for (let Uy = yb.length - 1, hy = this.stack.length - 1; Uy >= 0; hy--) {
          if (hy < 0) return Jy(this._tree, yb, Uy);
          let fy = Wy[bb.buffer[this.stack[hy]]];
          if (!fy.isAnonymous) {
            if (yb[Uy] && yb[Uy] != fy.name) return !1;
            Uy--
          }
        }
        return !0
      }
    }

    function ib(yb) {
      return yb.children.some((yb => yb instanceof Ey || !yb.type.isAnonymous || ib(yb)))
    }
    const My = new WeakMap;

    function Yy(yb, bb) {
      if (!yb.isAnonymous || bb instanceof Ey || bb.type != yb) return 1;
      let Wy = My.get(bb);
      if (null == Wy) {
        Wy = 1;
        for (let Uy of bb.children) {
          if (Uy.type != yb || !(Uy instanceof sy)) {
            Wy = 1;
            break
          }
          Wy += Yy(yb, Uy)
        }
        My.set(bb, Wy)
      }
      return Wy
    }

    function Xy(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
      let oy = 0;
      for (let qb = Uy; qb < hy; qb++) oy += Yy(yb, bb[qb]);
      let By = Math.ceil(1.5 * oy / 8),
        Ky = [],
        ey = [];
      return function bb(Wy, Uy, hy, Zy, cb) {
        for (let oy = hy; oy < Zy;) {
          let hy = oy,
            qb = Uy[oy],
            sy = Yy(yb, Wy[oy]);
          for (oy++; oy < Zy; oy++) {
            let bb = Yy(yb, Wy[oy]);
            if (sy + bb >= By) break;
            sy += bb
          }
          if (oy == hy + 1) {
            if (sy > By) {
              let yb = Wy[hy];
              bb(yb.children, yb.positions, 0, yb.children.length, Uy[hy] + cb);
              continue
            }
            Ky.push(Wy[hy])
          } else {
            let bb = Uy[oy - 1] + Wy[oy - 1].length - qb;
            Ky.push(Xy(yb, Wy, Uy, hy, oy, qb, bb, null, Py))
          }
          ey.push(qb + cb - fy)
        }
      }(bb, Wy, Uy, hy, 0), (cb || Py)(Ky, ey, Zy)
    }
    class ny {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(yb, bb, Wy) {
        let Uy = this.map.get(yb);
        Uy || this.map.set(yb, Uy = new Map), Uy.set(bb, Wy)
      }
      getBuffer(yb, bb) {
        let Wy = this.map.get(yb);
        return Wy && Wy.get(bb)
      }
      set(yb, bb) {
        yb instanceof Gy ? this.setBuffer(yb.context.buffer, yb.index, bb) : yb instanceof Ty && this.map.set(yb.tree, bb)
      }
      get(yb) {
        return yb instanceof Gy ? this.getBuffer(yb.context.buffer, yb.index) : yb instanceof Ty ? this.map.get(yb.tree) : void 0
      }
      cursorSet(yb, bb) {
        yb.buffer ? this.setBuffer(yb.buffer.buffer, yb.index, bb) : this.map.set(yb.tree, bb)
      }
      cursorGet(yb) {
        return yb.buffer ? this.getBuffer(yb.buffer.buffer, yb.index) : this.map.get(yb.tree)
      }
    }
    class uy {
      constructor(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = yb, this.to = bb, this.tree = Wy, this.offset = Uy, this.open = (hy ? 1 : 0) | (fy ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = [new uy(0, yb.length, yb, 0, !1, Wy)];
        for (let hy of bb) hy.to > yb.length && Uy.push(hy);
        return Uy
      }
      static applyChanges(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!bb.length) return yb;
        let Uy = [],
          hy = 1,
          fy = yb.length ? yb[0] : null;
        for (let Zy = 0, cb = 0, Py = 0;; Zy++) {
          let oy = Zy < bb.length ? bb[Zy] : null,
            By = oy ? oy.fromA : 1e9;
          if (By - cb >= Wy)
            for (; fy && fy.from < By;) {
              let bb = fy;
              if (cb >= bb.from || By <= bb.to || Py) {
                let yb = Math.max(bb.from, cb) - Py,
                  Wy = Math.min(bb.to, By) - Py;
                bb = yb >= Wy ? null : new uy(yb, Wy, bb.tree, bb.offset + Py, Zy > 0, !!oy)
              }
              if (bb && Uy.push(bb), fy.to > By) break;
              fy = hy < yb.length ? yb[hy++] : null
            }
          if (!oy) break;
          cb = oy.toA, Py = oy.toA - oy.toB
        }
        return Uy
      }
    }
    class rb {
      startParse(yb, bb, Wy) {
        return "string" == typeof yb && (yb = new Hy(yb)), Wy = Wy ? Wy.length ? Wy.map((yb => new fy(yb.from, yb.to))) : [new fy(0, 0)] : [new fy(0, yb.length)], this.createParse(yb, bb || [], Wy)
      }
      parse(yb, bb, Wy) {
        let Uy = this.startParse(yb, bb, Wy);
        for (;;) {
          let yb = Uy.advance();
          if (yb) return yb
        }
      }
    }
    class Hy {
      constructor(yb) {
        this.string = yb
      }
      get length() {
        return this.string.length
      }
      chunk(yb) {
        return this.string.slice(yb)
      }
      get lineChunks() {
        return !1
      }
      read(yb, bb) {
        return this.string.slice(yb, bb)
      }
    }
    new Zy({
      perNode: !0
    })
  },
  39786: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => ey,
      f: () => Py,
      j: () => Ky,
      m: () => My
    });
    var Uy = Wy(39781);
    let hy = 0;
    class fy {
      constructor(yb, bb, Wy, Uy) {
        this.name = yb, this.set = bb, this.base = Wy, this.modified = Uy, this.id = hy++
      }
      toString() {
        let {
          name: yb
        } = this;
        for (let bb of this.modified) bb.name && (yb = `${bb.name}(${yb})`);
        return yb
      }
      static define(yb, bb) {
        let Wy = "string" == typeof yb ? yb : "?";
        if (yb instanceof fy && (bb = yb), null === bb || void 0 === bb ? void 0 : bb.base) throw new Error("Can not derive from a modified tag");
        let Uy = new fy(Wy, [], null, []);
        if (Uy.set.push(Uy), bb)
          for (let hy of bb.set) Uy.set.push(hy);
        return Uy
      }
      static defineModifier(yb) {
        let bb = new cb(yb);
        return yb => yb.modified.indexOf(bb) > -1 ? yb : cb.get(yb.base || yb, yb.modified.concat(bb).sort(((yb, bb) => yb.id - bb.id)))
      }
    }
    let Zy = 0;
    class cb {
      constructor(yb) {
        this.name = yb, this.instances = [], this.id = Zy++
      }
      static get(yb, bb) {
        if (!bb.length) return yb;
        let Wy = bb[0].instances.find((Wy => {
          return Wy.base == yb && (Uy = bb, hy = Wy.modified, Uy.length == hy.length && Uy.every(((yb, bb) => yb == hy[bb])));
          var Uy, hy
        }));
        if (Wy) return Wy;
        let Uy = [],
          hy = new fy(yb.name, Uy, yb, bb);
        for (let fy of bb) fy.instances.push(hy);
        let Zy = function(yb) {
          let bb = [
            []
          ];
          for (let Wy = 0; Wy < yb.length; Wy++)
            for (let Uy = 0, hy = bb.length; Uy < hy; Uy++) bb.push(bb[Uy].concat(yb[Wy]));
          return bb.sort(((yb, bb) => bb.length - yb.length))
        }(bb);
        for (let fy of yb.set)
          if (!fy.modified.length)
            for (let yb of Zy) Uy.push(cb.get(fy, yb));
        return hy
      }
    }

    function Py(yb) {
      let bb = Object.create(null);
      for (let Wy in yb) {
        let Uy = yb[Wy];
        Array.isArray(Uy) || (Uy = [Uy]);
        for (let yb of Wy.split(" "))
          if (yb) {
            let Wy = [],
              hy = 2,
              fy = yb;
            for (let bb = 0;;) {
              if ("..." == fy && bb > 0 && bb + 3 == yb.length) {
                hy = 1;
                break
              }
              let Uy = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(fy);
              if (!Uy) throw new RangeError("Invalid path: " + yb);
              if (Wy.push("*" == Uy[0] ? "" : '"' == Uy[0][0] ? JSON.parse(Uy[0]) : Uy[0]), bb += Uy[0].length, bb == yb.length) break;
              let Zy = yb[bb++];
              if (bb == yb.length && "!" == Zy) {
                hy = 0;
                break
              }
              if ("/" != Zy) throw new RangeError("Invalid path: " + yb);
              fy = yb.slice(bb)
            }
            let Zy = Wy.length - 1,
              cb = Wy[Zy];
            if (!cb) throw new RangeError("Invalid path: " + yb);
            let Py = new By(Uy, hy, Zy > 0 ? Wy.slice(0, Zy) : null);
            bb[cb] = Py.sort(bb[cb])
          }
      }
      return oy.add(bb)
    }
    const oy = new Uy.h({
      combine(yb, bb) {
        let Wy, Uy, hy;
        for (; yb || bb;) {
          if (!yb || bb && yb.depth >= bb.depth ? (hy = bb, bb = bb.next) : (hy = yb, yb = yb.next), Wy && Wy.mode == hy.mode && !hy.context && !Wy.context) continue;
          let fy = new By(hy.tags, hy.mode, hy.context);
          Wy ? Wy.next = fy : Uy = fy, Wy = fy
        }
        return Uy
      }
    });
    class By {
      constructor(yb, bb, Wy, Uy) {
        this.tags = yb, this.mode = bb, this.context = Wy, this.next = Uy
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(yb) {
        return !yb || yb.depth < this.depth ? (this.next = yb, this) : (yb.next = this.sort(yb.next), yb)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function Ky(yb, bb) {
      let Wy = Object.create(null);
      for (let fy of yb)
        if (Array.isArray(fy.tag))
          for (let yb of fy.tag) Wy[yb.id] = fy.class;
        else Wy[fy.tag.id] = fy.class;
      let {
        scope: Uy,
        all: hy = null
      } = bb || {};
      return {
        style: yb => {
          let bb = hy;
          for (let Uy of yb)
            for (let yb of Uy.set) {
              let Uy = Wy[yb.id];
              if (Uy) {
                bb = bb ? bb + " " + Uy : Uy;
                break
              }
            }
          return bb
        },
        scope: Uy
      }
    }

    function ey(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : yb.length,
        fy = new qb(Uy, Array.isArray(bb) ? bb : [bb], Wy);
      fy.highlightRange(yb.cursor(), Uy, hy, "", fy.highlighters), fy.flush(hy)
    }
    By.empty = new By([], 2, null);
    class qb {
      constructor(yb, bb, Wy) {
        this.at = yb, this.highlighters = bb, this.span = Wy, this.class = ""
      }
      startSpan(yb, bb) {
        bb != this.class && (this.flush(yb), yb > this.at && (this.at = yb), this.class = bb)
      }
      flush(yb) {
        yb > this.at && this.class && this.span(this.at, yb, this.class)
      }
      highlightRange(yb, bb, Wy, hy, fy) {
        let {
          type: Zy,
          from: cb,
          to: Py
        } = yb;
        if (cb >= Wy || Py <= bb) return;
        Zy.isTop && (fy = this.highlighters.filter((yb => !yb.scope || yb.scope(Zy))));
        let Ky = hy,
          ey = function(yb) {
            let bb = yb.type.prop(oy);
            for (; bb && bb.context && !yb.matchContext(bb.context);) bb = bb.next;
            return bb || null
          }(yb) || By.empty,
          qb = function(yb, bb) {
            let Wy = null;
            for (let Uy of yb) {
              let yb = Uy.style(bb);
              yb && (Wy = Wy ? Wy + " " + yb : yb)
            }
            return Wy
          }(fy, ey.tags);
        if (qb && (Ky && (Ky += " "), Ky += qb, 1 == ey.mode && (hy += (hy ? " " : "") + qb)), this.startSpan(Math.max(bb, cb), Ky), ey.opaque) return;
        let sy = yb.tree && yb.tree.prop(Uy.h.mounted);
        if (sy && sy.overlay) {
          let Uy = yb.node.enter(sy.overlay[0].from + cb, 1),
            Zy = this.highlighters.filter((yb => !yb.scope || yb.scope(sy.tree.type))),
            oy = yb.firstChild();
          for (let By = 0, ey = cb;; By++) {
            let qb = By < sy.overlay.length ? sy.overlay[By] : null,
              Sy = qb ? qb.from + cb : Py,
              Ey = Math.max(bb, ey),
              ly = Math.min(Wy, Sy);
            if (Ey < ly && oy)
              for (; yb.from < ly && (this.highlightRange(yb, Ey, ly, hy, fy), this.startSpan(Math.min(ly, yb.to), Ky), !(yb.to >= Sy) && yb.nextSibling()););
            if (!qb || Sy > Wy) break;
            ey = qb.to + cb, ey > bb && (this.highlightRange(Uy.cursor(), Math.max(bb, qb.from + cb), Math.min(Wy, ey), "", Zy), this.startSpan(Math.min(Wy, ey), Ky))
          }
          oy && yb.parent()
        } else if (yb.firstChild()) {
          sy && (hy = "");
          do {
            if (!(yb.to <= bb)) {
              if (yb.from >= Wy) break;
              this.highlightRange(yb, bb, Wy, hy, fy), this.startSpan(Math.min(Wy, yb.to), Ky)
            }
          } while (yb.nextSibling());
          yb.parent()
        }
      }
    }
    const sy = fy.define,
      Sy = sy(),
      Ey = sy(),
      ly = sy(Ey),
      mb = sy(Ey),
      Cy = sy(),
      Ty = sy(Cy),
      Vy = sy(Cy),
      Jy = sy(),
      gb = sy(Jy),
      Gy = sy(),
      Oy = sy(),
      Ry = sy(),
      vb = sy(Ry),
      ib = sy(),
      My = {
        comment: Sy,
        lineComment: sy(Sy),
        blockComment: sy(Sy),
        docComment: sy(Sy),
        name: Ey,
        variableName: sy(Ey),
        typeName: ly,
        tagName: sy(ly),
        propertyName: mb,
        attributeName: sy(mb),
        className: sy(Ey),
        labelName: sy(Ey),
        namespace: sy(Ey),
        macroName: sy(Ey),
        literal: Cy,
        string: Ty,
        docString: sy(Ty),
        character: sy(Ty),
        attributeValue: sy(Ty),
        number: Vy,
        integer: sy(Vy),
        float: sy(Vy),
        bool: sy(Cy),
        regexp: sy(Cy),
        escape: sy(Cy),
        color: sy(Cy),
        url: sy(Cy),
        keyword: Gy,
        self: sy(Gy),
        null: sy(Gy),
        atom: sy(Gy),
        unit: sy(Gy),
        modifier: sy(Gy),
        operatorKeyword: sy(Gy),
        controlKeyword: sy(Gy),
        definitionKeyword: sy(Gy),
        moduleKeyword: sy(Gy),
        operator: Oy,
        derefOperator: sy(Oy),
        arithmeticOperator: sy(Oy),
        logicOperator: sy(Oy),
        bitwiseOperator: sy(Oy),
        compareOperator: sy(Oy),
        updateOperator: sy(Oy),
        definitionOperator: sy(Oy),
        typeOperator: sy(Oy),
        controlOperator: sy(Oy),
        punctuation: Ry,
        separator: sy(Ry),
        bracket: vb,
        angleBracket: sy(vb),
        squareBracket: sy(vb),
        paren: sy(vb),
        brace: sy(vb),
        content: Jy,
        heading: gb,
        heading1: sy(gb),
        heading2: sy(gb),
        heading3: sy(gb),
        heading4: sy(gb),
        heading5: sy(gb),
        heading6: sy(gb),
        contentSeparator: sy(Jy),
        list: sy(Jy),
        quote: sy(Jy),
        emphasis: sy(Jy),
        strong: sy(Jy),
        link: sy(Jy),
        monospace: sy(Jy),
        strikethrough: sy(Jy),
        inserted: sy(),
        deleted: sy(),
        changed: sy(),
        invalid: sy(),
        meta: ib,
        documentMeta: sy(ib),
        annotation: sy(ib),
        processingInstruction: sy(ib),
        definition: fy.defineModifier("definition"),
        constant: fy.defineModifier("constant"),
        function: fy.defineModifier("function"),
        standard: fy.defineModifier("standard"),
        local: fy.defineModifier("local"),
        special: fy.defineModifier("special")
      };
    for (let Yy in My) {
      let yb = My[Yy];
      yb instanceof fy && (yb.name = Yy)
    }
    Ky([{
      tag: My.link,
      class: "tok-link"
    }, {
      tag: My.heading,
      class: "tok-heading"
    }, {
      tag: My.emphasis,
      class: "tok-emphasis"
    }, {
      tag: My.strong,
      class: "tok-strong"
    }, {
      tag: My.keyword,
      class: "tok-keyword"
    }, {
      tag: My.atom,
      class: "tok-atom"
    }, {
      tag: My.bool,
      class: "tok-bool"
    }, {
      tag: My.url,
      class: "tok-url"
    }, {
      tag: My.labelName,
      class: "tok-labelName"
    }, {
      tag: My.inserted,
      class: "tok-inserted"
    }, {
      tag: My.deleted,
      class: "tok-deleted"
    }, {
      tag: My.literal,
      class: "tok-literal"
    }, {
      tag: My.string,
      class: "tok-string"
    }, {
      tag: My.number,
      class: "tok-number"
    }, {
      tag: [My.regexp, My.escape, My.special(My.string)],
      class: "tok-string2"
    }, {
      tag: My.variableName,
      class: "tok-variableName"
    }, {
      tag: My.local(My.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: My.definition(My.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: My.special(My.variableName),
      class: "tok-variableName2"
    }, {
      tag: My.definition(My.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: My.typeName,
      class: "tok-typeName"
    }, {
      tag: My.namespace,
      class: "tok-namespace"
    }, {
      tag: My.className,
      class: "tok-className"
    }, {
      tag: My.macroName,
      class: "tok-macroName"
    }, {
      tag: My.propertyName,
      class: "tok-propertyName"
    }, {
      tag: My.operator,
      class: "tok-operator"
    }, {
      tag: My.comment,
      class: "tok-comment"
    }, {
      tag: My.meta,
      class: "tok-meta"
    }, {
      tag: My.invalid,
      class: "tok-invalid"
    }, {
      tag: My.punctuation,
      class: "tok-punctuation"
    }])
  },
  39799: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => cb.k,
      e: () => Zy.z,
      f: () => Zy.I,
      j: () => Zy.J,
      k: () => cb.n,
      l: () => gU,
      o: () => cb.S,
      s: () => cb.mb
    });
    var Uy = Wy(1229),
      hy = Wy(1224),
      fy = Wy(55),
      Zy = Wy(39754),
      cb = Wy(39759),
      Py = Wy(39779),
      oy = Wy(39781);

    function By(yb, bb) {
      return Wy => {
        let {
          state: Uy,
          dispatch: hy
        } = Wy;
        if (Uy.readOnly) return !1;
        let fy = yb(bb, Uy);
        return !!fy && (hy(Uy.update(fy)), !0)
      }
    }
    const Ky = By(ly, 0),
      ey = By(Ey, 0),
      qb = By(((yb, bb) => Ey(yb, bb, function(yb) {
        let bb = [];
        for (let Wy of yb.selection.lZ) {
          let Uy = yb.doc.lineAt(Wy.from),
            hy = Wy.to <= Uy.to ? Uy : yb.doc.lineAt(Wy.to);
          hy.from > Uy.from && hy.from == Wy.to && (hy = Wy.to == Uy.to + 1 ? Uy : yb.doc.lineAt(Wy.to - 1));
          let fy = bb.length - 1;
          fy >= 0 && bb[fy].to > Uy.from ? bb[fy].to = hy.to : bb.push({
            from: Uy.from + /^\s*/.exec(Uy.text)[0].length,
            to: hy.to
          })
        }
        return bb
      }(bb))), 0);

    function sy(yb, bb) {
      let Wy = yb.languageDataAt("commentTokens", bb, 1);
      return Wy.length ? Wy[0] : {}
    }
    const Sy = 50;

    function Ey(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.selection.lZ,
        Uy = Wy.map((yb => sy(bb, yb.from).block));
      if (!Uy.every((yb => yb))) return null;
      let hy = Wy.map(((yb, Wy) => function(yb, bb, Wy, Uy) {
        let hy, fy, {
            open: Zy,
            close: cb
          } = bb,
          Py = yb.sliceDoc(Wy - Sy, Wy),
          oy = yb.sliceDoc(Uy, Uy + Sy),
          By = /\s*$/.exec(Py)[0].length,
          Ky = /^\s*/.exec(oy)[0].length,
          ey = Py.length - By;
        if (Py.slice(ey - Zy.length, ey) == Zy && oy.slice(Ky, Ky + cb.length) == cb) return {
          open: {
            pos: Wy - By,
            margin: By && 1
          },
          close: {
            pos: Uy + Ky,
            margin: Ky && 1
          }
        };
        Uy - Wy <= 2 * Sy ? hy = fy = yb.sliceDoc(Wy, Uy) : (hy = yb.sliceDoc(Wy, Wy + Sy), fy = yb.sliceDoc(Uy - Sy, Uy));
        let qb = /^\s*/.exec(hy)[0].length,
          sy = /\s*$/.exec(fy)[0].length,
          Ey = fy.length - sy - cb.length;
        return hy.slice(qb, qb + Zy.length) == Zy && fy.slice(Ey, Ey + cb.length) == cb ? {
          open: {
            pos: Wy + qb + Zy.length,
            margin: /\s/.test(hy.charAt(qb + Zy.length)) ? 1 : 0
          },
          close: {
            pos: Uy - sy - cb.length,
            margin: /\s/.test(fy.charAt(Ey - 1)) ? 1 : 0
          }
        } : null
      }(bb, Uy[Wy], yb.from, yb.to)));
      if (2 != yb && !hy.every((yb => yb))) return {
        changes: bb.changes(Wy.map(((yb, bb) => hy[bb] ? [] : [{
          from: yb.from,
          insert: Uy[bb].open + " "
        }, {
          from: yb.to,
          insert: " " + Uy[bb].close
        }])))
      };
      if (1 != yb && hy.some((yb => yb))) {
        let yb = [];
        for (let bb, Wy = 0; Wy < hy.length; Wy++)
          if (bb = hy[Wy]) {
            let hy = Uy[Wy],
              {
                open: fy,
                close: Zy
              } = bb;
            yb.push({
              from: fy.pos - hy.open.length,
              to: fy.pos + fy.margin
            }, {
              from: Zy.pos - Zy.margin,
              to: Zy.pos + hy.close.length
            })
          } return {
          changes: yb
        }
      }
      return null
    }

    function ly(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.selection.lZ,
        Uy = [],
        hy = -1;
      yb: for (let {
          from: fy,
          to: Zy
        }
        of Wy) {
        let yb, Wy = Uy.length,
          cb = 1e9;
        for (let Py = fy; Py <= Zy;) {
          let Wy = bb.doc.lineAt(Py);
          if (void 0 == yb && (yb = sy(bb, Wy.from).line, !yb)) continue yb;
          if (Wy.from > hy && (fy == Zy || Zy > Wy.from)) {
            hy = Wy.from;
            let bb = /^\s*/.exec(Wy.text)[0].length,
              fy = bb == Wy.length,
              Zy = Wy.text.slice(bb, bb + yb.length) == yb ? bb : -1;
            bb < Wy.text.length && bb < cb && (cb = bb), Uy.push({
              line: Wy,
              comment: Zy,
              token: yb,
              indent: bb,
              empty: fy,
              single: !1
            })
          }
          Py = Wy.to + 1
        }
        if (cb < 1e9)
          for (let bb = Wy; bb < Uy.length; bb++) Uy[bb].indent < Uy[bb].line.text.length && (Uy[bb].indent = cb);
        Uy.length == Wy + 1 && (Uy[Wy].single = !0)
      }
      if (2 != yb && Uy.some((yb => yb.comment < 0 && (!yb.empty || yb.single)))) {
        let yb = [];
        for (let {
            line: bb,
            token: hy,
            indent: fy,
            empty: Zy,
            single: cb
          }
          of Uy) !cb && Zy || yb.push({
          from: bb.from + fy,
          insert: hy + " "
        });
        let Wy = bb.changes(yb);
        return {
          changes: Wy,
          selection: bb.selection.map(Wy, 1)
        }
      }
      if (1 != yb && Uy.some((yb => yb.comment >= 0))) {
        let yb = [];
        for (let {
            line: bb,
            comment: Wy,
            token: hy
          }
          of Uy)
          if (Wy >= 0) {
            let Uy = bb.from + Wy,
              fy = Uy + hy.length;
            " " == bb.text[fy - bb.from] && fy++, yb.push({
              from: Uy,
              to: fy
            })
          } return {
          changes: yb
        }
      }
      return null
    }
    const mb = Zy.b.define(),
      Cy = Zy.b.define(),
      Ty = Zy.v.define(),
      Vy = Zy.v.define({
        combine: yb => (0, Zy._)(yb, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (yb, bb) => bb
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (yb, bb) => (Wy, Uy) => yb(Wy, Uy) || bb(Wy, Uy)
        })
      }),
      Jy = Zy.J.define({
        create: () => py.empty,
        update(yb, bb) {
          let Wy = bb.state.facet(Vy),
            Uy = bb.annotation(mb);
          if (Uy) {
            let hy = ib.fromTransaction(bb, Uy.selection),
              fy = Uy.side,
              Zy = 0 == fy ? yb.undone : yb.done;
            return Zy = hy ? My(Zy, Zy.length, Wy.minDepth, hy) : uy(Zy, bb.startState.selection), new py(0 == fy ? Uy.rest : Zy, 0 == fy ? Zy : Uy.rest)
          }
          let hy = bb.annotation(Cy);
          if ("full" != hy && "before" != hy || (yb = yb.isolate()), !1 === bb.annotation(Zy.O.addToHistory)) return bb.changes.empty ? yb : yb.addMapping(bb.changes.desc);
          let fy = ib.fromTransaction(bb),
            cb = bb.annotation(Zy.O.time),
            Py = bb.annotation(Zy.O.userEvent);
          return fy ? yb = yb.addChanges(fy, cb, Py, Wy, bb) : bb.selection && (yb = yb.addSelection(bb.startState.selection, cb, Py, Wy.newGroupDelay)), "full" != hy && "after" != hy || (yb = yb.isolate()), yb
        },
        toJSON: yb => ({
          done: yb.done.map((yb => yb.toJSON())),
          undone: yb.undone.map((yb => yb.toJSON()))
        }),
        fromJSON: yb => new py(yb.done.map(ib.fromJSON), yb.undone.map(ib.fromJSON))
      });

    function gb(yb, bb) {
      return function(Wy) {
        let {
          state: Uy,
          dispatch: hy
        } = Wy;
        if (!bb && Uy.readOnly) return !1;
        let fy = Uy.field(Jy, !1);
        if (!fy) return !1;
        let Zy = fy.pop(yb, Uy, bb);
        return !!Zy && (hy(Zy), !0)
      }
    }
    const Gy = gb(0, !1),
      Oy = gb(1, !1),
      Ry = gb(0, !0),
      vb = gb(1, !0);
    class ib {
      constructor(yb, bb, Wy, Uy, hy) {
        this.changes = yb, this.effects = bb, this.mapped = Wy, this.startSelection = Uy, this.selectionsAfter = hy
      }
      setSelAfter(yb) {
        return new ib(this.changes, this.effects, this.mapped, this.startSelection, yb)
      }
      toJSON() {
        var yb, bb, Wy;
        return {
          changes: null === (yb = this.changes) || void 0 === yb ? void 0 : yb.toJSON(),
          mapped: null === (bb = this.mapped) || void 0 === bb ? void 0 : bb.toJSON(),
          startSelection: null === (Wy = this.startSelection) || void 0 === Wy ? void 0 : Wy.toJSON(),
          selectionsAfter: this.selectionsAfter.map((yb => yb.toJSON()))
        }
      }
      static fromJSON(yb) {
        return new ib(yb.changes && Zy.ChangeSet.fromJSON(yb.changes), [], yb.mapped && Zy.f.fromJSON(yb.mapped), yb.startSelection && Zy.n.fromJSON(yb.startSelection), yb.selectionsAfter.map(Zy.n.fromJSON))
      }
      static fromTransaction(yb, bb) {
        let Wy = Xy;
        for (let Uy of yb.startState.facet(Ty)) {
          let bb = Uy(yb);
          bb.length && (Wy = Wy.concat(bb))
        }
        return !Wy.length && yb.changes.empty ? null : new ib(yb.changes.invert(yb.startState.doc), Wy, void 0, bb || yb.startState.selection, Xy)
      }
      static selection(yb) {
        return new ib(void 0, Xy, void 0, void 0, yb)
      }
    }

    function My(yb, bb, Wy, Uy) {
      let hy = bb + 1 > Wy + 20 ? bb - Wy - 1 : 0,
        fy = yb.slice(hy, bb);
      return fy.push(Uy), fy
    }

    function Yy(yb, bb) {
      return yb.length ? bb.length ? yb.concat(bb) : yb : bb
    }
    const Xy = [],
      ny = 200;

    function uy(yb, bb) {
      if (yb.length) {
        let Wy = yb[yb.length - 1],
          Uy = Wy.selectionsAfter.slice(Math.max(0, Wy.selectionsAfter.length - ny));
        return Uy.length && Uy[Uy.length - 1].eq(bb) ? yb : (Uy.push(bb), My(yb, yb.length - 1, 1e9, Wy.setSelAfter(Uy)))
      }
      return [ib.selection([bb])]
    }

    function rb(yb) {
      let bb = yb[yb.length - 1],
        Wy = yb.slice();
      return Wy[yb.length - 1] = bb.setSelAfter(bb.selectionsAfter.slice(0, bb.selectionsAfter.length - 1)), Wy
    }

    function Hy(yb, bb) {
      if (!yb.length) return yb;
      let Wy = yb.length,
        Uy = Xy;
      for (; Wy;) {
        let hy = ab(yb[Wy - 1], bb, Uy);
        if (hy.changes && !hy.changes.empty || hy.effects.length) {
          let bb = yb.slice(0, Wy);
          return bb[Wy - 1] = hy, bb
        }
        bb = hy.mapped, Wy--, Uy = hy.selectionsAfter
      }
      return Uy.length ? [ib.selection(Uy)] : Xy
    }

    function ab(yb, bb, Wy) {
      let Uy = Yy(yb.selectionsAfter.length ? yb.selectionsAfter.map((yb => yb.map(bb))) : Xy, Wy);
      if (!yb.changes) return ib.selection(Uy);
      let hy = yb.changes.map(bb),
        fy = bb.mapDesc(yb.changes, !0),
        cb = yb.mapped ? yb.mapped.composeDesc(fy) : fy;
      return new ib(hy, Zy.I.mapEffects(yb.effects, bb), cb, yb.startSelection.map(fy), Uy)
    }
    const Fy = /^(input\.type|delete)($|\.)/;
    class py {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = yb, this.undone = bb, this.prevTime = Wy, this.prevUserEvent = Uy
      }
      isolate() {
        return this.prevTime ? new py(this.done, this.undone) : this
      }
      addChanges(yb, bb, Wy, Uy, hy) {
        let fy = this.done,
          cb = fy[fy.length - 1];
        return fy = cb && cb.changes && !cb.changes.empty && yb.changes && (!Wy || Fy.test(Wy)) && (!cb.selectionsAfter.length && bb - this.prevTime < Uy.newGroupDelay && Uy.joinToEvent(hy, function(yb, bb) {
          let Wy = [],
            Uy = !1;
          return yb.iterChangedRanges(((yb, bb) => Wy.push(yb, bb))), bb.iterChangedRanges(((yb, bb, hy, fy) => {
            for (let Zy = 0; Zy < Wy.length;) {
              let yb = Wy[Zy++],
                bb = Wy[Zy++];
              fy >= yb && hy <= bb && (Uy = !0)
            }
          })), Uy
        }(cb.changes, yb.changes)) || "input.type.compose" == Wy) ? My(fy, fy.length - 1, Uy.minDepth, new ib(yb.changes.compose(cb.changes), Yy(Zy.I.mapEffects(yb.effects, cb.changes), cb.effects), cb.mapped, cb.startSelection, Xy)) : My(fy, fy.length, Uy.minDepth, yb), new py(fy, Xy, bb, Wy)
      }
      addSelection(yb, bb, Wy, Uy) {
        let hy = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Xy;
        return hy.length > 0 && bb - this.prevTime < Uy && Wy == this.prevUserEvent && Wy && /^select($|\.)/.test(Wy) && (fy = hy[hy.length - 1], Zy = yb, fy.lZ.length == Zy.lZ.length && 0 === fy.lZ.filter(((yb, bb) => yb.empty != Zy.lZ[bb].empty)).length) ? this : new py(uy(this.done, yb), this.undone, bb, Wy);
        var fy, Zy
      }
      addMapping(yb) {
        return new py(Hy(this.done, yb), Hy(this.undone, yb), this.prevTime, this.prevUserEvent)
      }
      pop(yb, bb, Wy) {
        let Uy = 0 == yb ? this.done : this.undone;
        if (0 == Uy.length) return null;
        let hy = Uy[Uy.length - 1],
          fy = hy.selectionsAfter[0] || (hy.startSelection ? hy.startSelection.map(hy.changes.invertedDesc, 1) : bb.selection);
        if (Wy && hy.selectionsAfter.length) return bb.update({
          selection: hy.selectionsAfter[hy.selectionsAfter.length - 1],
          annotations: mb.of({
            side: yb,
            rest: rb(Uy),
            selection: fy
          }),
          userEvent: 0 == yb ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (hy.changes) {
          let Wy = 1 == Uy.length ? Xy : Uy.slice(0, Uy.length - 1);
          return hy.mapped && (Wy = Hy(Wy, hy.mapped)), bb.update({
            changes: hy.changes,
            selection: hy.startSelection,
            effects: hy.effects,
            annotations: mb.of({
              side: yb,
              rest: Wy,
              selection: fy
            }),
            filter: !1,
            userEvent: 0 == yb ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    py.empty = new py(Xy, Xy);
    const Ly = [{
      key: "Mod-z",
      run: Gy,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: Oy,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: Oy,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: Ry,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: vb,
      preventDefault: !0
    }];

    function Qy(yb, bb) {
      return Zy.n.create(yb.lZ.map(bb), yb.mainIndex)
    }

    function jb(yb, bb) {
      return yb.update({
        selection: bb,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function Dy(yb, bb) {
      let {
        state: Wy,
        dispatch: Uy
      } = yb, hy = Qy(Wy.selection, bb);
      return !hy.eq(Wy.selection, !0) && (Uy(jb(Wy, hy)), !0)
    }

    function tb(yb, bb) {
      return Zy.n.cursor(bb ? yb.to : yb.from)
    }

    function wy(yb, bb) {
      return Dy(yb, (Wy => Wy.empty ? yb.moveByChar(Wy, bb) : tb(Wy, bb)))
    }

    function kb(yb) {
      return yb.textDirectionAt(yb.state.selection.main.head) == cb.h.LTR
    }
    const Ny = yb => wy(yb, !kb(yb)),
      zb = yb => wy(yb, kb(yb));

    function Iy(yb, bb) {
      return Dy(yb, (Wy => Wy.empty ? yb.moveByGroup(Wy, bb) : tb(Wy, bb)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function xb(yb, bb, Wy) {
      if (bb.type.prop(Wy)) return !0;
      let Uy = bb.to - bb.from;
      return Uy && (Uy > 2 || /[^\s,.;:]/.test(yb.sliceDoc(bb.from, bb.to))) || bb.firstChild
    }

    function Ay(yb, bb, Wy) {
      let Uy, hy, fy = (0, Py.nb)(yb).resolveInner(bb.head),
        cb = Wy ? oy.h.closedBy : oy.h.openedBy;
      for (let Zy = bb.head;;) {
        let bb = Wy ? fy.childAfter(Zy) : fy.childBefore(Zy);
        if (!bb) break;
        xb(yb, bb, cb) ? fy = bb : Zy = Wy ? bb.to : bb.from
      }
      return hy = fy.type.prop(cb) && (Uy = Wy ? (0, Py.bb)(yb, fy.from, 1) : (0, Py.bb)(yb, fy.to, -1)) && Uy.matched ? Wy ? Uy.end.to : Uy.end.from : Wy ? fy.to : fy.from, Zy.n.cursor(hy, Wy ? -1 : 1)
    }

    function dy(yb, bb) {
      return Dy(yb, (Wy => {
        if (!Wy.empty) return tb(Wy, bb);
        let Uy = yb.moveVertically(Wy, bb);
        return Uy.head != Wy.head ? Uy : yb.moveToLineBoundary(Wy, bb)
      }))
    }
    const yW = yb => dy(yb, !1),
      bW = yb => dy(yb, !0);

    function Wb(yb) {
      let bb, Wy = yb.scrollDOM.clientHeight < yb.scrollDOM.scrollHeight - 2,
        Uy = 0,
        hy = 0;
      if (Wy) {
        for (let bb of yb.state.facet(cb.k.scrollMargins)) {
          let Wy = bb(yb);
          (null === Wy || void 0 === Wy ? void 0 : Wy.top) && (Uy = Math.max(null === Wy || void 0 === Wy ? void 0 : Wy.top, Uy)), (null === Wy || void 0 === Wy ? void 0 : Wy.bottom) && (hy = Math.max(null === Wy || void 0 === Wy ? void 0 : Wy.bottom, hy))
        }
        bb = yb.scrollDOM.clientHeight - Uy - hy
      } else bb = (yb.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: Uy,
        marginBottom: hy,
        selfScroll: Wy,
        height: Math.max(yb.defaultLineHeight, bb - 5)
      }
    }

    function Ub(yb, bb) {
      let Wy, Uy = Wb(yb),
        {
          state: hy
        } = yb,
        fy = Qy(hy.selection, (Wy => Wy.empty ? yb.moveVertically(Wy, bb, Uy.height) : tb(Wy, bb)));
      if (fy.eq(hy.selection)) return !1;
      if (Uy.selfScroll) {
        let bb = yb.coordsAtPos(hy.selection.main.head),
          Zy = yb.scrollDOM.getBoundingClientRect(),
          Py = Zy.top + Uy.marginTop,
          oy = Zy.bottom - Uy.marginBottom;
        bb && bb.top > Py && bb.bottom < oy && (Wy = cb.k.scrollIntoView(fy.main.head, {
          y: "start",
          yMargin: bb.top - Py
        }))
      }
      return yb.dispatch(jb(hy, fy), {
        effects: Wy
      }), !0
    }
    const hb = yb => Ub(yb, !1),
      fb = yb => Ub(yb, !0);

    function Zb(yb, bb, Wy) {
      let Uy = yb.lineBlockAt(bb.head),
        hy = yb.moveToLineBoundary(bb, Wy);
      if (hy.head == bb.head && hy.head != (Wy ? Uy.to : Uy.from) && (hy = yb.moveToLineBoundary(bb, Wy, !1)), !Wy && hy.head == Uy.from && Uy.length) {
        let Wy = /^\s*/.exec(yb.state.sliceDoc(Uy.from, Math.min(Uy.from + 100, Uy.to)))[0].length;
        Wy && bb.head != Uy.from + Wy && (hy = Zy.n.cursor(Uy.from + Wy))
      }
      return hy
    }

    function cW(yb, bb, Wy) {
      let Uy = !1,
        hy = Qy(yb.selection, (bb => {
          let hy = (0, Py.bb)(yb, bb.head, -1) || (0, Py.bb)(yb, bb.head, 1) || bb.head > 0 && (0, Py.bb)(yb, bb.head - 1, 1) || bb.head < yb.doc.length && (0, Py.bb)(yb, bb.head + 1, -1);
          if (!hy || !hy.end) return bb;
          Uy = !0;
          let fy = hy.start.from == bb.head ? hy.end.to : hy.end.from;
          return Wy ? Zy.n.range(bb.anchor, fy) : Zy.n.cursor(fy)
        }));
      return !!Uy && (bb(jb(yb, hy)), !0)
    }

    function Pb(yb, bb) {
      let Wy = Qy(yb.state.selection, (yb => {
        let Wy = bb(yb);
        return Zy.n.range(yb.anchor, Wy.head, Wy.goalColumn, Wy.bidiLevel || void 0, Wy.assoc)
      }));
      return !Wy.eq(yb.state.selection) && (yb.dispatch(jb(yb.state, Wy)), !0)
    }

    function ob(yb, bb) {
      return Pb(yb, (Wy => yb.moveByChar(Wy, bb)))
    }
    const Bb = yb => ob(yb, !kb(yb)),
      Kb = yb => ob(yb, kb(yb));

    function eb(yb, bb) {
      return Pb(yb, (Wy => yb.moveByGroup(Wy, bb)))
    }

    function qW(yb, bb) {
      return Pb(yb, (Wy => yb.moveVertically(Wy, bb)))
    }
    const sb = yb => qW(yb, !1),
      Sb = yb => qW(yb, !0);

    function Eb(yb, bb) {
      return Pb(yb, (Wy => yb.moveVertically(Wy, bb, Wb(yb).height)))
    }
    const lb = yb => Eb(yb, !1),
      mW = yb => Eb(yb, !0),
      Cb = yb => {
        let {
          state: bb,
          dispatch: Wy
        } = yb;
        return Wy(jb(bb, {
          anchor: 0
        })), !0
      },
      Tb = yb => {
        let {
          state: bb,
          dispatch: Wy
        } = yb;
        return Wy(jb(bb, {
          anchor: bb.doc.length
        })), !0
      },
      Vb = yb => {
        let {
          state: bb,
          dispatch: Wy
        } = yb;
        return Wy(jb(bb, {
          anchor: bb.selection.main.anchor,
          head: 0
        })), !0
      },
      Jb = yb => {
        let {
          state: bb,
          dispatch: Wy
        } = yb;
        return Wy(jb(bb, {
          anchor: bb.selection.main.anchor,
          head: bb.doc.length
        })), !0
      };

    function gW(yb, bb) {
      let {
        state: Wy
      } = yb, Uy = Wy.selection, hy = Wy.selection.lZ.slice();
      for (let fy of Wy.selection.lZ) {
        let Uy = Wy.doc.lineAt(fy.head);
        if (bb ? Uy.to < yb.state.doc.length : Uy.from > 0)
          for (let Wy = fy;;) {
            let fy = yb.moveVertically(Wy, bb);
            if (fy.head < Uy.from || fy.head > Uy.to) {
              hy.some((yb => yb.head == fy.head)) || hy.push(fy);
              break
            }
            if (fy.head == Wy.head) break;
            Wy = fy
          }
      }
      return hy.length != Uy.lZ.length && (yb.dispatch(jb(Wy, Zy.n.create(hy, hy.length - 1))), !0)
    }

    function Gb(yb, bb) {
      if (yb.state.readOnly) return !1;
      let Wy = "delete.selection",
        {
          state: Uy
        } = yb,
        hy = Uy.changeByRange((Uy => {
          let {
            from: hy,
            to: fy
          } = Uy;
          if (hy == fy) {
            let Zy = bb(Uy);
            Zy < hy ? (Wy = "delete.backward", Zy = Ob(yb, Zy, !1)) : Zy > hy && (Wy = "delete.forward", Zy = Ob(yb, Zy, !0)), hy = Math.min(hy, Zy), fy = Math.max(fy, Zy)
          } else hy = Ob(yb, hy, !1), fy = Ob(yb, fy, !0);
          return hy == fy ? {
            range: Uy
          } : {
            changes: {
              from: hy,
              to: fy
            },
            range: Zy.n.cursor(hy, hy < Uy.head ? -1 : 1)
          }
        }));
      return !hy.changes.empty && (yb.dispatch(Uy.update(hy, {
        scrollIntoView: !0,
        userEvent: Wy,
        effects: "delete.selection" == Wy ? cb.k.announce.of(Uy.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function Ob(yb, bb, Wy) {
      if (yb instanceof cb.k)
        for (let Uy of yb.state.facet(cb.k.atomicRanges).map((bb => bb(yb)))) Uy.between(bb, bb, ((yb, Uy) => {
          yb < bb && Uy > bb && (bb = Wy ? Uy : yb)
        }));
      return bb
    }
    const Rb = (yb, bb, Wy) => Gb(yb, (Uy => {
        let hy, fy, cb = Uy.from,
          {
            state: oy
          } = yb,
          By = oy.doc.lineAt(cb);
        if (Wy && !bb && cb > By.from && cb < By.from + 200 && !/[^ \t]/.test(hy = By.text.slice(0, cb - By.from))) {
          if ("\t" == hy[hy.length - 1]) return cb - 1;
          let yb = (0, Zy.cb)(hy, oy.tabSize) % (0, Py.N)(oy) || (0, Py.N)(oy);
          for (let bb = 0; bb < yb && " " == hy[hy.length - 1 - bb]; bb++) cb--;
          fy = cb
        } else fy = (0, Zy.db)(By.text, cb - By.from, bb, bb) + By.from, fy == cb && By.number != (bb ? oy.doc.lines : 1) ? fy += bb ? 1 : -1 : !bb && /[\ufe00-\ufe0f]/.test(By.text.slice(fy - By.from, cb - By.from)) && (fy = (0, Zy.db)(By.text, fy - By.from, !1, !1) + By.from);
        return fy
      })),
      vW = yb => Rb(yb, !1, !0),
      iW = yb => Rb(yb, !0, !1),
      Mb = (yb, bb) => Gb(yb, (Wy => {
        let Uy = Wy.head,
          {
            state: hy
          } = yb,
          fy = hy.doc.lineAt(Uy),
          cb = hy.charCategorizer(Uy);
        for (let yb = null;;) {
          if (Uy == (bb ? fy.to : fy.from)) {
            Uy == Wy.head && fy.number != (bb ? hy.doc.lines : 1) && (Uy += bb ? 1 : -1);
            break
          }
          let Py = (0, Zy.db)(fy.text, Uy - fy.from, bb) + fy.from,
            oy = fy.text.slice(Math.min(Uy, Py) - fy.from, Math.max(Uy, Py) - fy.from),
            By = cb(oy);
          if (null != yb && By != yb) break;
          " " == oy && Uy == Wy.head || (yb = By), Uy = Py
        }
        return Uy
      })),
      Yb = yb => Mb(yb, !1);

    function Xb(yb) {
      let bb = [],
        Wy = -1;
      for (let Uy of yb.selection.lZ) {
        let hy = yb.doc.lineAt(Uy.from),
          fy = yb.doc.lineAt(Uy.to);
        if (Uy.empty || Uy.to != fy.from || (fy = yb.doc.lineAt(Uy.to - 1)), Wy >= hy.number) {
          let yb = bb[bb.length - 1];
          yb.to = fy.to, yb.lZ.push(Uy)
        } else bb.push({
          from: hy.from,
          to: fy.to,
          lZ: [Uy]
        });
        Wy = fy.number + 1
      }
      return bb
    }

    function nb(yb, bb, Wy) {
      if (yb.readOnly) return !1;
      let Uy = [],
        hy = [];
      for (let fy of Xb(yb)) {
        if (Wy ? fy.to == yb.doc.length : 0 == fy.from) continue;
        let bb = yb.doc.lineAt(Wy ? fy.to + 1 : fy.from - 1),
          cb = bb.length + 1;
        if (Wy) {
          Uy.push({
            from: fy.to,
            to: bb.to
          }, {
            from: fy.from,
            insert: bb.text + yb.lineBreak
          });
          for (let bb of fy.lZ) hy.push(Zy.n.range(Math.min(yb.doc.length, bb.anchor + cb), Math.min(yb.doc.length, bb.head + cb)))
        } else {
          Uy.push({
            from: bb.from,
            to: fy.from
          }, {
            from: fy.to,
            insert: yb.lineBreak + bb.text
          });
          for (let yb of fy.lZ) hy.push(Zy.n.range(yb.anchor - cb, yb.head - cb))
        }
      }
      return !!Uy.length && (bb(yb.update({
        changes: Uy,
        scrollIntoView: !0,
        selection: Zy.n.create(hy, yb.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function ub(yb, bb, Wy) {
      if (yb.readOnly) return !1;
      let Uy = [];
      for (let fy of Xb(yb)) Wy ? Uy.push({
        from: fy.from,
        insert: yb.doc.slice(fy.from, fy.to) + yb.lineBreak
      }) : Uy.push({
        from: fy.to,
        insert: yb.lineBreak + yb.doc.slice(fy.from, fy.to)
      });
      let hy = yb.changes(Uy);
      return bb(yb.update({
        changes: hy,
        selection: yb.selection.map(hy, Wy ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const rW = Hb(!1);

    function Hb(yb) {
      return bb => {
        let {
          state: Wy,
          dispatch: Uy
        } = bb;
        if (Wy.readOnly) return !1;
        let hy = Wy.changeByRange((bb => {
          let {
            from: Uy,
            to: hy
          } = bb, fy = Wy.doc.lineAt(Uy), cb = !yb && Uy == hy && function(yb, bb) {
            if (/\(\)|\[\]|\{\}/.test(yb.sliceDoc(bb - 1, bb + 1))) return {
              from: bb,
              to: bb
            };
            let Wy, Uy = (0, Py.nb)(yb).resolveInner(bb),
              hy = Uy.childBefore(bb),
              fy = Uy.childAfter(bb);
            return hy && fy && hy.to <= bb && fy.from >= bb && (Wy = hy.type.prop(oy.h.closedBy)) && Wy.indexOf(fy.name) > -1 && yb.doc.lineAt(hy.to).from == yb.doc.lineAt(fy.from).from && !/\S/.test(yb.sliceDoc(hy.to, fy.from)) ? {
              from: hy.to,
              to: fy.from
            } : null
          }(Wy, Uy);
          yb && (Uy = hy = (hy <= fy.to ? fy : Wy.doc.lineAt(hy)).to);
          let By = new Py.c(Wy, {
              simulateBreak: Uy,
              simulateDoubleBreak: !!cb
            }),
            Ky = (0, Py.O)(By, Uy);
          for (null == Ky && (Ky = (0, Zy.cb)(/^\s*/.exec(Wy.doc.lineAt(Uy).text)[0], Wy.tabSize)); hy < fy.to && /\s/.test(fy.text[hy - fy.from]);) hy++;
          cb ? ({
            from: Uy,
            to: hy
          } = cb) : Uy > fy.from && Uy < fy.from + 100 && !/\S/.test(fy.text.slice(0, Uy)) && (Uy = fy.from);
          let ey = ["", (0, Py.Y)(Wy, Ky)];
          return cb && ey.push((0, Py.Y)(Wy, By.lineIndent(fy.from, -1))), {
            changes: {
              from: Uy,
              to: hy,
              insert: Zy.K.of(ey)
            },
            range: Zy.n.cursor(Uy + 1 + ey[1].length)
          }
        }));
        return Uy(Wy.update(hy, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function aW(yb, bb) {
      let Wy = -1;
      return yb.changeByRange((Uy => {
        let hy = [];
        for (let Zy = Uy.from; Zy <= Uy.to;) {
          let fy = yb.doc.lineAt(Zy);
          fy.number > Wy && (Uy.empty || Uy.to > fy.from) && (bb(fy, hy, Uy), Wy = fy.number), Zy = fy.to + 1
        }
        let fy = yb.changes(hy);
        return {
          changes: hy,
          range: Zy.n.range(fy.mapPos(Uy.anchor, 1), fy.mapPos(Uy.head, 1))
        }
      }))
    }
    const Fb = yb => {
        let {
          state: bb,
          dispatch: Wy
        } = yb;
        return !bb.readOnly && (Wy(bb.update(aW(bb, ((yb, Wy) => {
          Wy.push({
            from: yb.from,
            insert: bb.facet(Py.$)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      pb = yb => {
        let {
          state: bb,
          dispatch: Wy
        } = yb;
        return !bb.readOnly && (Wy(bb.update(aW(bb, ((yb, Wy) => {
          let Uy = /^\s*/.exec(yb.text)[0];
          if (!Uy) return;
          let hy = (0, Zy.cb)(Uy, bb.tabSize),
            fy = 0,
            cb = (0, Py.Y)(bb, Math.max(0, hy - (0, Py.N)(bb)));
          for (; fy < Uy.length && fy < cb.length && Uy.charCodeAt(fy) == cb.charCodeAt(fy);) fy++;
          Wy.push({
            from: yb.from + fy,
            to: yb.from + Uy.length,
            insert: cb.slice(fy)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      Lb = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: yb => Dy(yb, (bb => Ay(yb.state, bb, !kb(yb)))),
        shift: yb => Pb(yb, (bb => Ay(yb.state, bb, !kb(yb))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: yb => Dy(yb, (bb => Ay(yb.state, bb, kb(yb)))),
        shift: yb => Pb(yb, (bb => Ay(yb.state, bb, kb(yb))))
      }, {
        key: "Alt-ArrowUp",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb;
          return nb(bb, Wy, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb;
          return ub(bb, Wy, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb;
          return nb(bb, Wy, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb;
          return ub(bb, Wy, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: yb => gW(yb, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: yb => gW(yb, !0)
      }, {
        key: "Escape",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb, Uy = bb.selection, hy = null;
          return Uy.lZ.length > 1 ? hy = Zy.n.create([Uy.main]) : Uy.main.empty || (hy = Zy.n.create([Zy.n.cursor(Uy.main.head)])), !!hy && (Wy(jb(bb, hy)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Hb(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb, Uy = Xb(bb).map((yb => {
            let {
              from: Wy,
              to: Uy
            } = yb;
            return Zy.n.range(Wy, Math.min(Uy + 1, bb.doc.length))
          }));
          return Wy(bb.update({
            selection: Zy.n.create(Uy),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb, Uy = Qy(bb.selection, (yb => {
            let Wy = (0, Py.nb)(bb),
              Uy = Wy.resolveStack(yb.from, 1);
            if (yb.empty) {
              let bb = Wy.resolveStack(yb.from, -1);
              bb.node.from >= Uy.node.from && bb.node.to <= Uy.node.to && (Uy = bb)
            }
            for (let bb = Uy; bb; bb = bb.next) {
              let {
                node: Wy
              } = bb;
              if ((Wy.from < yb.from && Wy.to >= yb.to || Wy.to > yb.to && Wy.from <= yb.from) && bb.next) return Zy.n.range(Wy.to, Wy.from)
            }
            return yb
          }));
          return !Uy.eq(bb.selection) && (Wy(jb(bb, Uy)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: pb
      }, {
        key: "Mod-]",
        run: Fb
      }, {
        key: "Mod-Alt-\\",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb;
          if (bb.readOnly) return !1;
          let Uy = Object.create(null),
            hy = new Py.c(bb, {
              overrideIndentation: yb => {
                let bb = Uy[yb];
                return null == bb ? -1 : bb
              }
            }),
            fy = aW(bb, ((yb, Wy, fy) => {
              let Zy = (0, Py.O)(hy, yb.from);
              if (null == Zy) return;
              /\S/.test(yb.text) || (Zy = 0);
              let cb = /^\s*/.exec(yb.text)[0],
                oy = (0, Py.Y)(bb, Zy);
              (cb != oy || fy.from < yb.from + cb.length) && (Uy[yb.from] = Zy, Wy.push({
                from: yb.from,
                to: yb.from + cb.length,
                insert: oy
              }))
            }));
          return fy.changes.empty || Wy(bb.update(fy, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: yb => {
          if (yb.state.readOnly) return !1;
          let {
            state: bb
          } = yb, Wy = bb.changes(Xb(bb).map((yb => {
            let {
              from: Wy,
              to: Uy
            } = yb;
            return Wy > 0 ? Wy-- : Uy < bb.doc.length && Uy++, {
              from: Wy,
              to: Uy
            }
          }))), Uy = Qy(bb.selection, (bb => {
            let Wy;
            if (yb.lineWrapping) {
              let Uy = yb.lineBlockAt(bb.head),
                hy = yb.coordsAtPos(bb.head, bb.assoc || 1);
              hy && (Wy = Uy.bottom + yb.documentTop - hy.bottom + yb.defaultLineHeight / 2)
            }
            return yb.moveVertically(bb, !0, Wy)
          })).map(Wy);
          return yb.dispatch({
            changes: Wy,
            selection: Uy,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb;
          return cW(bb, Wy, !1)
        }
      }, {
        key: "Mod-/",
        run: yb => {
          let {
            state: bb
          } = yb, Wy = bb.doc.lineAt(bb.selection.main.from), Uy = sy(yb.state, Wy.from);
          return Uy.line ? Ky(yb) : !!Uy.block && qb(yb)
        }
      }, {
        key: "Alt-A",
        run: ey
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: yb => (yb.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: Ny,
        shift: Bb,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: yb => Iy(yb, !kb(yb)),
        shift: yb => eb(yb, !kb(yb)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: yb => Dy(yb, (bb => Zb(yb, bb, !kb(yb)))),
        shift: yb => Pb(yb, (bb => Zb(yb, bb, !kb(yb)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: zb,
        shift: Kb,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: yb => Iy(yb, kb(yb)),
        shift: yb => eb(yb, kb(yb)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: yb => Dy(yb, (bb => Zb(yb, bb, kb(yb)))),
        shift: yb => Pb(yb, (bb => Zb(yb, bb, kb(yb)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: yW,
        shift: sb,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Cb,
        shift: Vb
      }, {
        mac: "Ctrl-ArrowUp",
        run: hb,
        shift: lb
      }, {
        key: "ArrowDown",
        run: bW,
        shift: Sb,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: Tb,
        shift: Jb
      }, {
        mac: "Ctrl-ArrowDown",
        run: fb,
        shift: mW
      }, {
        key: "PageUp",
        run: hb,
        shift: lb
      }, {
        key: "PageDown",
        run: fb,
        shift: mW
      }, {
        key: "Home",
        run: yb => Dy(yb, (bb => Zb(yb, bb, !1))),
        shift: yb => Pb(yb, (bb => Zb(yb, bb, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Cb,
        shift: Vb
      }, {
        key: "End",
        run: yb => Dy(yb, (bb => Zb(yb, bb, !0))),
        shift: yb => Pb(yb, (bb => Zb(yb, bb, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: Tb,
        shift: Jb
      }, {
        key: "Enter",
        run: rW,
        shift: rW
      }, {
        key: "Mod-a",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb;
          return Wy(bb.update({
            selection: {
              anchor: 0,
              head: bb.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: vW,
        shift: vW,
        preventDefault: !0
      }, {
        key: "Delete",
        run: iW,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Yb,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: yb => Mb(yb, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: yb => Gb(yb, (bb => {
          let Wy = yb.moveToLineBoundary(bb, !1).head;
          return bb.head > Wy ? Wy : Math.max(0, bb.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: yb => Gb(yb, (bb => {
          let Wy = yb.moveToLineBoundary(bb, !0).head;
          return bb.head < Wy ? Wy : Math.min(yb.state.doc.length, bb.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: Ny,
        shift: Bb,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: zb,
        shift: Kb
      }, {
        key: "Ctrl-p",
        run: yW,
        shift: sb
      }, {
        key: "Ctrl-n",
        run: bW,
        shift: Sb
      }, {
        key: "Ctrl-a",
        run: yb => Dy(yb, (bb => Zy.n.cursor(yb.lineBlockAt(bb.head).from, 1))),
        shift: yb => Pb(yb, (bb => Zy.n.cursor(yb.lineBlockAt(bb.head).from)))
      }, {
        key: "Ctrl-e",
        run: yb => Dy(yb, (bb => Zy.n.cursor(yb.lineBlockAt(bb.head).to, -1))),
        shift: yb => Pb(yb, (bb => Zy.n.cursor(yb.lineBlockAt(bb.head).to)))
      }, {
        key: "Ctrl-d",
        run: iW
      }, {
        key: "Ctrl-h",
        run: vW
      }, {
        key: "Ctrl-k",
        run: yb => Gb(yb, (bb => {
          let Wy = yb.lineBlockAt(bb.head).to;
          return bb.head < Wy ? Wy : Math.min(yb.state.doc.length, bb.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: Yb
      }, {
        key: "Ctrl-o",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb;
          if (bb.readOnly) return !1;
          let Uy = bb.changeByRange((yb => ({
            changes: {
              from: yb.from,
              to: yb.to,
              insert: Zy.K.of(["", ""])
            },
            range: Zy.n.cursor(yb.from)
          })));
          return Wy(bb.update(Uy, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: yb => {
          let {
            state: bb,
            dispatch: Wy
          } = yb;
          if (bb.readOnly) return !1;
          let Uy = bb.changeByRange((yb => {
            if (!yb.empty || 0 == yb.from || yb.from == bb.doc.length) return {
              range: yb
            };
            let Wy = yb.from,
              Uy = bb.doc.lineAt(Wy),
              hy = Wy == Uy.from ? Wy - 1 : (0, Zy.db)(Uy.text, Wy - Uy.from, !1) + Uy.from,
              fy = Wy == Uy.to ? Wy + 1 : (0, Zy.db)(Uy.text, Wy - Uy.from, !0) + Uy.from;
            return {
              changes: {
                from: hy,
                to: fy,
                insert: bb.doc.slice(Wy, fy).append(bb.doc.slice(hy, Wy))
              },
              range: Zy.n.cursor(fy)
            }
          }));
          return !Uy.changes.empty && (Wy(bb.update(Uy, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: fb
      }].map((yb => ({
        mac: yb.key,
        run: yb.run,
        shift: yb.shift
      }))))),
      Qb = {
        key: "Tab",
        run: Fb,
        shift: pb
      };
    var jW = Wy(39803),
      Db = Wy(39751),
      tW = Wy(39811),
      wb = function(yb) {
        void 0 === yb && (yb = {});
        var {
          crosshairCursor: bb = !1
        } = yb, Wy = [];
        !1 !== yb.closeBracketsKeymap && (Wy = Wy.concat(Db.e)), !1 !== yb.defaultKeymap && (Wy = Wy.concat(Lb)), !1 !== yb.searchKeymap && (Wy = Wy.concat(jW.g)), !1 !== yb.historyKeymap && (Wy = Wy.concat(Ly)), !1 !== yb.foldKeymap && (Wy = Wy.concat(Py.G)), !1 !== yb.completionKeymap && (Wy = Wy.concat(Db.i)), !1 !== yb.lintKeymap && (Wy = Wy.concat(tW.e));
        var Uy = [];
        return !1 !== yb.lineNumbers && Uy.push((0, cb.X)()), !1 !== yb.highlightActiveLineGutter && Uy.push((0, cb.K)()), !1 !== yb.highlightSpecialChars && Uy.push((0, cb.Q)()), !1 !== yb.history && Uy.push(function() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [Jy, Vy.of(yb), cb.k.domEventHandlers({
            beforeinput(yb, bb) {
              let Wy = "historyUndo" == yb.inputType ? Gy : "historyRedo" == yb.inputType ? Oy : null;
              return !!Wy && (yb.preventDefault(), Wy(bb))
            }
          })]
        }()), !1 !== yb.foldGutter && Uy.push((0, Py.z)()), !1 !== yb.drawSelection && Uy.push((0, cb.t)()), !1 !== yb.dropCursor && Uy.push((0, cb.v)()), !1 !== yb.allowMultipleSelections && Uy.push(Zy.r.allowMultipleSelections.of(!0)), !1 !== yb.indentOnInput && Uy.push((0, Py.W)()), !1 !== yb.syntaxHighlighting && Uy.push((0, Py.hb)(Py.q, {
          fallback: !0
        })), !1 !== yb.bracketMatching && Uy.push((0, Py.l)()), !1 !== yb.closeBrackets && Uy.push((0, Db.f)()), !1 !== yb.autocompletion && Uy.push((0, Db.b)()), !1 !== yb.rectangularSelection && Uy.push((0, cb.bb)()), !1 !== bb && Uy.push((0, cb.r)()), !1 !== yb.highlightActiveLine && Uy.push((0, cb.N)()), !1 !== yb.highlightSelectionMatches && Uy.push((0, jW.d)()), yb.tabSize && "number" === typeof yb.tabSize && Uy.push(Py.$.of(" ".repeat(yb.tabSize))), Uy.concat([cb.W.of(Wy.flat())]).filter(Boolean)
      },
      kW = Wy(39786);
    const Nb = "#e5c07b",
      zW = "#e06c75",
      Ib = "#56b6c2",
      xW = "#ffffff",
      Ab = "#abb2bf",
      db = "#7d8799",
      yU = "#61afef",
      bU = "#98c379",
      WW = "#d19a66",
      UW = "#c678dd",
      hW = "#21252b",
      fW = "#2c313a",
      ZW = "#282c34",
      cU = "#353a42",
      PW = "#3E4451",
      oW = "#528bff",
      BW = cb.k.theme({
        "&": {
          color: Ab,
          backgroundColor: ZW
        },
        ".cm-content": {
          caretColor: oW
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: oW
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: PW
        },
        ".cm-panels": {
          backgroundColor: hW,
          color: Ab
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
          backgroundColor: ZW,
          color: db,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: fW
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: cU
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: cU,
          borderBottomColor: cU
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: fW,
            color: Ab
          }
        }
      }, {
        dark: !0
      }),
      KW = Py.b.define([{
        tag: kW.m.keyword,
        color: UW
      }, {
        tag: [kW.m.name, kW.m.deleted, kW.m.character, kW.m.propertyName, kW.m.macroName],
        color: zW
      }, {
        tag: [kW.m.function(kW.m.variableName), kW.m.labelName],
        color: yU
      }, {
        tag: [kW.m.color, kW.m.constant(kW.m.name), kW.m.standard(kW.m.name)],
        color: WW
      }, {
        tag: [kW.m.definition(kW.m.name), kW.m.separator],
        color: Ab
      }, {
        tag: [kW.m.typeName, kW.m.className, kW.m.number, kW.m.changed, kW.m.annotation, kW.m.modifier, kW.m.self, kW.m.namespace],
        color: Nb
      }, {
        tag: [kW.m.operator, kW.m.operatorKeyword, kW.m.url, kW.m.escape, kW.m.regexp, kW.m.link, kW.m.special(kW.m.string)],
        color: Ib
      }, {
        tag: [kW.m.meta, kW.m.comment],
        color: db
      }, {
        tag: kW.m.strong,
        fontWeight: "bold"
      }, {
        tag: kW.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: kW.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: kW.m.link,
        color: db,
        textDecoration: "underline"
      }, {
        tag: kW.m.heading,
        fontWeight: "bold",
        color: zW
      }, {
        tag: [kW.m.atom, kW.m.bool, kW.m.special(kW.m.variableName)],
        color: WW
      }, {
        tag: [kW.m.processingInstruction, kW.m.string, kW.m.inserted],
        color: bU
      }, {
        tag: kW.m.invalid,
        color: xW
      }]),
      eW = [BW, (0, Py.hb)(KW)];
    var qU = cb.k.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class sW {
      constructor(yb, bb) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = bb, this.timeoutMS = bb, this.callbacks.push(yb)
      }
      Zb() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var yb = this.callbacks.slice();
          this.callbacks.length = 0, yb.forEach((yb => {
            try {
              yb()
            } catch (bb) {
              console.error("TimeoutLatch callback error:", bb)
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
    class SW {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(yb) {
        this.latches.add(yb), this.start()
      }
      remove(yb) {
        this.latches.delete(yb), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((yb => {
            yb.Zb(), yb.isDone && this.remove(yb)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var EW = null,
      lW = Zy.b.define(),
      mU = [];

    function CW(yb) {
      var {
        value: bb,
        selection: Wy,
        onChange: Uy,
        onStatistics: hy,
        onCreateEditor: Py,
        onUpdate: oy,
        extensions: By = mU,
        autoFocus: Ky,
        theme: ey = "light",
        height: qb = null,
        minHeight: sy = null,
        maxHeight: Sy = null,
        width: Ey = null,
        minWidth: ly = null,
        maxWidth: mb = null,
        placeholder: Cy = "",
        editable: Ty = !0,
        readOnly: Vy = !1,
        indentWithTab: Jy = !0,
        basicSetup: gb = !0,
        root: Gy,
        initialState: Oy
      } = yb, [Ry, vb] = (0, fy.useState)(), [ib, My] = (0, fy.useState)(), [Yy, Xy] = (0, fy.useState)(), ny = (0, fy.useState)((() => ({
        current: null
      })))[0], uy = (0, fy.useState)((() => ({
        current: null
      })))[0], rb = cb.k.theme({
        "&": {
          height: qb,
          minHeight: sy,
          maxHeight: Sy,
          width: Ey,
          minWidth: ly,
          maxWidth: mb
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), Hy = cb.k.updateListener.of((yb => {
        if (yb.docChanged && "function" === typeof Uy && !yb.transactions.some((yb => yb.annotation(lW)))) {
          ny.current ? ny.current.reset() : (ny.current = new sW((() => {
            if (uy.current) {
              var yb = uy.current;
              uy.current = null, yb()
            }
            ny.current = null
          }), 200), ("undefined" === typeof window ? new SW : (EW || (EW = new SW), EW)).add(ny.current));
          var bb = yb.state.doc.toString();
          Uy(bb, yb)
        }
        hy && hy((yb => ({
          line: yb.state.doc.lineAt(yb.state.selection.main.from),
          lineCount: yb.state.doc.lines,
          lineBreak: yb.state.lineBreak,
          length: yb.state.doc.length,
          readOnly: yb.state.readOnly,
          tabSize: yb.state.tabSize,
          selection: yb.state.selection,
          selectionAsSingle: yb.state.selection.asSingle().main,
          lZ: yb.state.selection.lZ,
          selectionCode: yb.state.sliceDoc(yb.state.selection.main.from, yb.state.selection.main.to),
          selections: yb.state.selection.lZ.map((bb => yb.state.sliceDoc(bb.from, bb.to))),
          selectedText: yb.state.selection.lZ.some((yb => !yb.empty))
        }))(yb))
      })), ab = function(yb) {
        void 0 === yb && (yb = {});
        var {
          indentWithTab: bb = !0,
          editable: Wy = !0,
          readOnly: Uy = !1,
          theme: hy = "light",
          placeholder: fy = "",
          basicSetup: Py = !0
        } = yb, oy = [];
        switch (bb && oy.unshift(cb.W.of([Qb])), Py && ("boolean" === typeof Py ? oy.unshift(wb()) : oy.unshift(wb(Py))), fy && oy.unshift((0, cb.$)(fy)), hy) {
          case "light":
            oy.push(qU);
            break;
          case "dark":
            oy.push(eW);
            break;
          case "none":
            break;
          default:
            oy.push(hy)
        }
        return !1 === Wy && oy.push(cb.k.editable.of(!1)), Uy && oy.push(Zy.r.readOnly.of(!0)), [...oy]
      }({
        theme: ey,
        editable: Ty,
        readOnly: Vy,
        placeholder: Cy,
        indentWithTab: Jy,
        basicSetup: gb
      }), Fy = [Hy, rb, ...ab];
      return oy && "function" === typeof oy && Fy.push(cb.k.updateListener.of(oy)), Fy = Fy.concat(By), (0, fy.useLayoutEffect)((() => {
        if (Ry && !Yy) {
          var yb = {
              doc: bb,
              selection: Wy,
              extensions: Fy
            },
            Uy = Oy ? Zy.r.fromJSON(Oy.json, yb, Oy.fields) : Zy.r.create(yb);
          if (Xy(Uy), !ib) {
            var hy = new cb.k({
              state: Uy,
              parent: Ry,
              root: Gy
            });
            My(hy), Py && Py(hy, Uy)
          }
        }
        return () => {
          ib && (Xy(void 0), My(void 0))
        }
      }), [Ry, Yy]), (0, fy.useEffect)((() => {
        yb.container && vb(yb.container)
      }), [yb.container]), (0, fy.useEffect)((() => () => {
        ib && (ib.destroy(), My(void 0)), ny.current && (ny.current.cancel(), ny.current = null)
      }), [ib]), (0, fy.useEffect)((() => {
        Ky && ib && ib.focus()
      }), [Ky, ib]), (0, fy.useEffect)((() => {
        ib && ib.dispatch({
          effects: Zy.I.reconfigure.of(Fy)
        })
      }), [ey, By, qb, sy, Sy, Ey, ly, mb, Cy, Ty, Vy, Jy, gb, Uy, oy]), (0, fy.useEffect)((() => {
        if (void 0 !== bb) {
          var yb = ib ? ib.state.doc.toString() : "";
          if (ib && bb !== yb) {
            var Wy = () => {
              ib && bb !== ib.state.doc.toString() && ib.dispatch({
                changes: {
                  from: 0,
                  to: ib.state.doc.toString().length,
                  insert: bb || ""
                },
                annotations: [lW.of(!0)]
              })
            };
            ny.current && !ny.current.isDone ? uy.current = Wy : Wy()
          }
        }
      }), [bb, ib]), {
        state: Yy,
        setState: Xy,
        view: ib,
        setView: My,
        container: Ry,
        setContainer: vb
      }
    }
    var TW = Wy(952),
      VW = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      JW = (0, fy.forwardRef)(((yb, bb) => {
        var {
          className: Wy,
          value: Zy = "",
          selection: cb,
          extensions: Py = [],
          onChange: oy,
          onStatistics: By,
          onCreateEditor: Ky,
          onUpdate: ey,
          autoFocus: qb,
          theme: sy = "light",
          height: Sy,
          minHeight: Ey,
          maxHeight: ly,
          width: mb,
          minWidth: Cy,
          maxWidth: Ty,
          basicSetup: Vy,
          placeholder: Jy,
          indentWithTab: gb,
          editable: Gy,
          readOnly: Oy,
          root: Ry,
          initialState: vb
        } = yb, ib = (0, hy.b)(yb, VW), My = (0, fy.useRef)(null), {
          state: Yy,
          view: Xy,
          container: ny,
          setContainer: uy
        } = CW({
          root: Ry,
          value: Zy,
          autoFocus: qb,
          theme: sy,
          height: Sy,
          minHeight: Ey,
          maxHeight: ly,
          width: mb,
          minWidth: Cy,
          maxWidth: Ty,
          basicSetup: Vy,
          placeholder: Jy,
          indentWithTab: gb,
          editable: Gy,
          readOnly: Oy,
          selection: cb,
          onChange: oy,
          onStatistics: By,
          onCreateEditor: Ky,
          onUpdate: ey,
          extensions: Py,
          initialState: vb
        });
        (0, fy.useImperativeHandle)(bb, (() => ({
          editor: My.current,
          state: Yy,
          view: Xy
        })), [My, ny, Yy, Xy]);
        var rb = (0, fy.useCallback)((yb => {
          My.current = yb, uy(yb)
        }), [uy]);
        if ("string" !== typeof Zy) throw new Error("value must be typeof string but got " + typeof Zy);
        var Hy = "string" === typeof sy ? "cm-theme-" + sy : "cm-theme";
        return (0, TW.jsx)("div", (0, Uy.d)({
          ref: rb,
          className: Hy + (Wy ? " " + Wy : "")
        }, ib))
      }));
    JW.displayName = "CodeMirror";
    const gU = JW
  },
  39777: (yb, bb, Wy) => {
    function Uy() {
      var yb = arguments[0];
      "string" == typeof yb && (yb = document.createElement(yb));
      var bb = 1,
        Wy = arguments[1];
      if (Wy && "object" == typeof Wy && null == Wy.nodeType && !Array.isArray(Wy)) {
        for (var Uy in Wy)
          if (Object.prototype.hasOwnProperty.call(Wy, Uy)) {
            var fy = Wy[Uy];
            "string" == typeof fy ? yb.setAttribute(Uy, fy) : null != fy && (yb[Uy] = fy)
          } bb++
      }
      for (; bb < arguments.length; bb++) hy(yb, arguments[bb]);
      return yb
    }

    function hy(yb, bb) {
      if ("string" == typeof bb) yb.appendChild(document.createTextNode(bb));
      else if (null == bb);
      else if (null != bb.nodeType) yb.appendChild(bb);
      else {
        if (!Array.isArray(bb)) throw new RangeError("Unsupported child node: " + bb);
        for (var Wy = 0; Wy < bb.length; Wy++) hy(yb, bb[Wy])
      }
    }
    Wy.d(bb, {
      e: () => Uy
    })
  },
  39768: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    const Uy = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      hy = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      fy = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class Zy {
      constructor(yb, bb) {
        this.rules = [];
        let {
          finish: Wy
        } = bb || {};

        function Uy(yb) {
          return /^@/.test(yb) ? [yb] : yb.split(/,\s*/)
        }

        function hy(yb, bb, fy, Zy) {
          let cb = [],
            Py = /^@(\w+)\b/.exec(yb[0]),
            oy = Py && "keyframes" == Py[1];
          if (Py && null == bb) return fy.push(yb[0] + ";");
          for (let Wy in bb) {
            let Zy = bb[Wy];
            if (/&/.test(Wy)) hy(Wy.split(/,\s*/).map((bb => yb.map((yb => bb.replace(/&/, yb))))).reduce(((yb, bb) => yb.concat(bb))), Zy, fy);
            else if (Zy && "object" == typeof Zy) {
              if (!Py) throw new RangeError("The value of a property (" + Wy + ") should be a primitive value.");
              hy(Uy(Wy), Zy, cb, oy)
            } else null != Zy && cb.push(Wy.replace(/_.*/, "").replace(/[A-Z]/g, (yb => "-" + yb.toLowerCase())) + ": " + Zy + ";")
          }(cb.length || oy) && fy.push((!Wy || Py || Zy ? yb : yb.map(Wy)).join(", ") + " {" + cb.join(" ") + "}")
        }
        for (let fy in yb) hy(Uy(fy), yb[fy], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let yb = fy[Uy] || 1;
        return fy[Uy] = yb + 1, "\u037c" + yb.toString(36)
      }
      static mount(yb, bb, Wy) {
        let Uy = yb[hy],
          fy = Wy && Wy.nonce;
        Uy ? fy && Uy.setNonce(fy) : Uy = new Py(yb, fy), Uy.mount(Array.isArray(bb) ? bb : [bb], yb)
      }
    }
    let cb = new Map;
    class Py {
      constructor(yb, bb) {
        let Wy = yb.ownerDocument || yb,
          Uy = Wy.defaultView;
        if (!yb.head && yb.adoptedStyleSheets && Uy.CSSStyleSheet) {
          let bb = cb.get(Wy);
          if (bb) return yb[hy] = bb;
          this.sheet = new Uy.CSSStyleSheet, cb.set(Wy, this)
        } else this.styleTag = Wy.createElement("style"), bb && this.styleTag.setAttribute("nonce", bb);
        this.modules = [], yb[hy] = this
      }
      mount(yb, bb) {
        let Wy = this.sheet,
          Uy = 0,
          hy = 0;
        for (let fy = 0; fy < yb.length; fy++) {
          let bb = yb[fy],
            Zy = this.modules.indexOf(bb);
          if (Zy < hy && Zy > -1 && (this.modules.splice(Zy, 1), hy--, Zy = -1), -1 == Zy) {
            if (this.modules.splice(hy++, 0, bb), Wy)
              for (let yb = 0; yb < bb.rules.length; yb++) Wy.insertRule(bb.rules[yb], Uy++)
          } else {
            for (; hy < Zy;) Uy += this.modules[hy++].rules.length;
            Uy += bb.rules.length, hy++
          }
        }
        if (Wy) bb.adoptedStyleSheets.indexOf(this.sheet) < 0 && (bb.adoptedStyleSheets = [this.sheet, ...bb.adoptedStyleSheets]);
        else {
          let yb = "";
          for (let bb = 0; bb < this.modules.length; bb++) yb += this.modules[bb].getRules() + "\n";
          this.styleTag.textContent = yb;
          let Wy = bb.head || bb;
          this.styleTag.parentNode != Wy && Wy.insertBefore(this.styleTag, Wy.firstChild)
        }
      }
      setNonce(yb) {
        this.styleTag && this.styleTag.getAttribute("nonce") != yb && this.styleTag.setAttribute("nonce", yb)
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);